import * as IC from './ic0';
import * as LEB128 from './utils/LEB128';
import { PipeBuffer } from './utils/pipeBuffer';

const magicNumber = 'DIDL';

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

function respondeEncoder(): Encoder {
    return new Encoder();
}

//This pattern wont work as is.  
//Needs to take in a list of arguments
class Encoder {
    public pipe: PipeBuffer;

    constructor(){
        this.pipe = new PipeBuffer();
        this.init();
    }

    init(): void {
       
    }

    encode<T>(): void{
        if (isString<T>()) {
           
        }
    }
}

class Decoder {
    public pipe: PipeBuffer;
    
    constructor(buffer: Uint8Array){
        this.pipe = new PipeBuffer(buffer);
        this.init();
    }

    init(): void{
        var magic = String.UTF8.decode(this.pipe.read(magicNumber.length).buffer);
        if(magic != magicNumber){
            throw new Error('Magic number not found: ' + magicNumber + ' results: ' + magic);
        }

        //read type table length
        const typeTableLength = LEB128.lebDecode(this.pipe);

        //TODO: do something with type tables
      

        //read input types
        const inputTypesLength = LEB128.lebDecode(this.pipe);
        const inputTypes : i32[] = [];

        for (let i: i32 = 0; i < inputTypesLength; i++) {
            inputTypes.push(LEB128.slebDecode(this.pipe) as i32);
        }

        //TODO: Need to map the IDL types over to assist the encoder/decoder in the future
        //this.IDLTypes = inputTypes.map<Type>(t => getType(<i32>t));
    }

    decode<T>() : T {

        if (isInteger<T>()) {
            return <T>(LEB128.slebDecode(this.pipe));
        }

        if (isString<T>()) {
            const len = <i32>LEB128.lebDecode(this.pipe);
            const buf = this.pipe.read(len);
            return <T>(String.UTF8.decode(buf.buffer));
        }

        throw new Error("deocde type not found");
    }
}


export {
    respondEmpty,
    receiveEmpty,
    receiveDecoder,
    respondeEncoder,
    Encoder,
    Decoder
}