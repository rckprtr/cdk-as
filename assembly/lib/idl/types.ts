import * as LEB128 from '../utils/LEB128';
import * as API from '../api';
import { PipeBuffer } from '../utils/pipeBuffer';


//TODO: Map types, setup classes... a lot of things

class IntType {
    public encodeType: u8;

    decodeValue<T>(pipe: PipeBuffer) : T {
        throw new Error("Not Implemented");
    }
    encodeValue<T>(value: T) : PipeBuffer {
        throw new Error("Not Implemented");
    }
}

class FixedIntClass extends IntType {
    private bits: i8 = 0;
    constructor(bits: i8, encodeType: u8) {
        super();
        this.bits = bits;
        this.encodeType = encodeType;
    }
    encodeValue<T>(value: T) : PipeBuffer {
        if(this.bits == 64){
            return LEB128.EncodeLEB128Signed(<i64>value);
        } else {
            return LEB128.writeIntLE(<i64>value, this.bits / 8);
        }
    }
    decodeValue<T>(pipe: PipeBuffer) : T {
        const num = LEB128.readIntLE(pipe, this.bits / 8);
        if (this.bits <= 32) {
            return <T>num;
        }
        else {
            return <T>num;
        }
    }
}

class FixedNatClass extends IntType {
    private bits: i8 = 0;
    
    constructor(bits: i8, encodeType: u8) {
        super();
        this.bits = bits;
        this.encodeType = encodeType;
    }
    encodeValue<T>(value: T) : PipeBuffer {
        if(this.bits == 64){
            return LEB128.EncodeLEB128Unsigned(<u64>value);
        } else {
        return LEB128.writeIntLE(<i64>value, this.bits / 8);
        }
    }
    decodeValue<T>(pipe: PipeBuffer) : T {
        const num = LEB128.readUIntLE(pipe, this.bits / 8);
        if (this.bits <= 32) {
            return <T>num;
        }
        else {
            return <T>num;
        }
    }

}



function getIntegerIDLValueType<T>(value: T) : IntType{
    if (isInteger<T>()) {
        if (value instanceof i8) {
            return new FixedIntClass(8,0x77);
        }
        else if(value instanceof u8){
            return new FixedNatClass(8,0x7B)
        }
        else if(value instanceof i16){
            return new FixedIntClass(16,0x76);
        }
        else if(value instanceof u16){
            return new FixedNatClass(16,0x7a)
        }
        else if(value instanceof i32){
            return new FixedIntClass(32,0x75);
        }
        else if(value instanceof u32){
            return new FixedNatClass(32,0x79)
        }
        else if(value instanceof i64){
            return new FixedIntClass(64,0x7C); //some issues here
        }
        else if(value instanceof u64){
            return new FixedNatClass(64,0x7C); //some issues here should be 0x78
        }
    }
    return new FixedIntClass(64, 0x7C);
}



export {
    FixedIntClass,
    FixedNatClass,
    getIntegerIDLValueType
}