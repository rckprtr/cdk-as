import { getFloatIDLValueTypes, getIDLType, getIntegerIDLValueType } from "./idl/types";
import { PipeBuffer } from "../utils/pipeBuffer";
import { RecordRegistery } from "./recordRegistry";

const magicNumberBytes: u8[] = [0x44, 0x49, 0x44, 0x4c];

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

        var registry = RecordRegistery.getInstance();

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
            //@ts-ignore
            this.addTypeTableItem(0x6D, getIDLType<valueof<T>>());
            //@ts-ignore
            var genericArray = changetype<Array<valueof<T>>>(value);
            this.argBuffer.write([0, <u8>genericArray.length])
            for (let x: i32 = 0; x < genericArray.length; x++) {
                //@ts-ignore
                this.encode<valueof<T>>(genericArray[x], false);
            }
        }
        else if(registry.has<T>()){

            if (writeType)//TODO: I need a better pattern - use classes to encode/decode
                    this.idlTypes.write([0]); //why do records and variants need this?

            registry.encode<T>(this, value);
        }
       
    }

    addTypeTableItem(tableType: u8, argType: u8): void {
        this.typeTableItems++;
        this.typeTable.write([tableType, argType]);
    }

    addTypeTableItemRecord(pipe: PipeBuffer): void {
        this.typeTableItems++;
        this.typeTable.append(pipe);
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

export {
    Encoder
}
