import * as IC from './ic0';
import { printUint8Array } from './utils/helpers';
import * as API from './api';
import * as LEB128 from './utils/LEB128';
import { PipeBuffer } from './utils/pipeBuffer';
import { FixedIntClass, getIntegerIDLValueType, getIDLType, getFloatIDLValueTypes } from './idl/types';

const magicNumber = 'DIDL';
const magicNumberBytes: u8[] = [0x44, 0x49, 0x44, 0x4c];

function writeMagic(): void {
    IC.msg_reply_data_append(String.UTF8.encode(magicNumber), 4);
}

function writeByte(value: i32): void {
    IC.msg_reply_data_append(String.UTF8.encode(String.fromCharCode(value)), 1);
}

function writeBytes(value: ArrayBuffer): void {
    IC.msg_reply_data_append(value, value.byteLength);
}

function respondEmpty(): void {
    writeMagic();
    writeByte(0x00);
    writeByte(0x00);
    IC.msg_reply();
}

function receiveEmpty(): void {
    var msg_size: i32 = IC.msg_arg_data_size();
    var buf: ArrayBuffer = new ArrayBuffer(msg_size);
    IC.msg_arg_data_copy(buf, 0, msg_size);
}

function receiveDecoder(): Decoder {
    var msg_size: i32 = IC.msg_arg_data_size();
    var buf: ArrayBuffer = new ArrayBuffer(msg_size);
    IC.msg_arg_data_copy(buf, 0, msg_size);

    return new Decoder(Uint8Array.wrap(buf, 0, msg_size));
}

function getRespondEncoder(): Encoder {
    return new Encoder();
}

function sendRespondEncoder(encoder: Encoder): void {
    var data = encoder.build();
    writeBytes(data.buffer);
    IC.msg_reply();
}

//This pattern wont work as is.  
//Needs to take in a list of arguments
class Encoder {
    public pipe: PipeBuffer;
    public args: u8;
    public argBuffer: PipeBuffer;

    public idlTypes: PipeBuffer;

    public typeTableItems: u8;
    public typeTable: PipeBuffer;


    constructor() {
        this.pipe = new PipeBuffer();

        this.idlTypes = new PipeBuffer();
        this.argBuffer = new PipeBuffer();
        this.args = 0;

        this.typeTableItems = 0;
        this.typeTable = new PipeBuffer();

        this.init();
    }

    init(): void {
        this.pipe.write(magicNumberBytes);
    }

    write<T>(value: T): void {
        this.args += 1;
        this.encode<T>(value);
    }

    encode<T>(value: T, writeType: bool = true): void {

        if (isString<T>()) {
            let strBuffer = String.UTF8.encode(changetype<string>(value));

            if (writeType)//TODO: I need a better pattern - use classes to encode/decode
                this.idlTypes.write([0x71]);

            this.argBuffer.write([<u8>strBuffer.byteLength]);
            this.argBuffer.writeArrayBuffer(strBuffer);
        }
        else if (isBoolean<T>()) {
            var boolBuffer = changetype<bool>(value);

            if (writeType)//TODO: I need a better pattern - use classes to encode/decode
                this.idlTypes.write([0x7E]);

            this.argBuffer.write([boolBuffer ? 1 : 0])
        }
        else if (isInteger<T>()) {
            var intType = getIntegerIDLValueType<T>(value);

            if (writeType)//TODO: I need a better pattern - use classes to encode/decode
                this.idlTypes.write([intType.encodeType]);

            this.argBuffer.append(intType.encodeValue<T>(<T>value));
        }
        else if(isFloat<T>()){

            var floatType = getFloatIDLValueTypes<T>(value);

            if (writeType)//TODO: I need a better pattern - use classes to encode/decode
                    this.idlTypes.write([floatType.encodeType]);

            this.argBuffer.append(floatType.encodeValue<T>(value));
        }
        else if (isArray<T>()) {
            //TODO: Need to add a lookup for types, hardcoded to string for now.
            this.addTypeTableItem(0x6D, getIDLType<valueof<T>>());
            var genericArray = changetype<Array<valueof<T>>>(value);
            this.argBuffer.write([0, <u8>genericArray.length])
            for (let x: i32 = 0; x < genericArray.length; x++) {
                this.encode<valueof<T>>(genericArray[x], false);
            }
        }
    }

    addTypeTableItem(tableType: u8, argType: u8): void {
        this.typeTableItems++;
        this.typeTable.write([tableType, argType]);
    }

    build(): Uint8Array {

        if (this.typeTableItems > 0) {
            this.pipe.write([this.typeTableItems]);
            this.pipe.append(this.typeTable);
        } else {
            this.pipe.write([0]);
        }

        this.pipe.write([this.args]);
        this.pipe.append(this.idlTypes);
        this.pipe.append(this.argBuffer);
        return this.pipe.buffer;
    }
}


class Decoder {
    public pipe: PipeBuffer;

    constructor(buffer: Uint8Array) {
        this.pipe = new PipeBuffer(buffer);
        //printUint8Array(this.pipe.buffer);
        this.init();
    }

    init(): void {
        var magic = String.UTF8.decode(this.pipe.read(magicNumber.length).buffer);
        if (magic != magicNumber) {
            throw new Error('Magic number not found: ' + magicNumber + ' results: ' + magic);
        }

        //read type tables
        const typeTableLength = <i32>LEB128.DecodeLEB128Unsigned(this.pipe);
        for (let i : i32 = 0; i < typeTableLength; i++) {
            const type = <i8>LEB128.DecodeLEB128Signed(this.pipe);
            switch (type) {
                case -19 /* Vector */: {
                    const t = LEB128.DecodeLEB128Signed(this.pipe); //string, int, bool ...
                    //Im not doing anything with these yet.
                    break;
                }
            }
        }

        //read input types
        const inputTypesLength = <i32>LEB128.DecodeLEB128Unsigned(this.pipe);
        const inputTypes: i32[] = [];

        for (let i: i32 = 0; i < inputTypesLength; i++) {
            inputTypes.push(LEB128.DecodeLEB128Signed(this.pipe) as i32);
        }
        //TODO: Need to map the IDL types over to assist the encoder/decoder in the future
        //this.IDLTypes = inputTypes.map<Type>(t => getType(<i32>t));
    }

    decode<T>(): T {
        if (isBoolean<T>()) {
            return <T>(this.pipe.read(1)[0] == 0);
        }

        if (isInteger<T>()) {
            var val:T = changetype<T>(<T>(0));
            var idlType = getIntegerIDLValueType(val);
            
            return <T>idlType.decodeValue<T>(this.pipe);
        }

        if (isString<T>()) {
            const len = <i32>LEB128.DecodeLEB128Unsigned(this.pipe);
            const buf = this.pipe.read(len);
            return <T>(String.UTF8.decode(buf.buffer));
        }

        if(isFloat<T>()){
            var val:T = changetype<T>(<T>(0));
            var idlType = getFloatIDLValueTypes(val);
            return idlType.decodeValue<T>(this.pipe);
        }

        if (isArray<T>()) {
            var arrayResult = new Array<valueof<T>>();
            const lens = <i32>LEB128.DecodeLEB128Unsigned(this.pipe);
            for (var i: i32 = 0; i < lens; i++) {
                arrayResult.push(this.decode<valueof<T>>());
            }
            return <T>arrayResult;
        }

        throw new Error("deocde type not found");
    }
}



export {
    respondEmpty,
    receiveEmpty,
    receiveDecoder,
    getRespondEncoder,
    sendRespondEncoder,
    Encoder,
    Decoder
}