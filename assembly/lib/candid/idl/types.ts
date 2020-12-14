import * as LEB128 from '../../utils/LEB128';
import { PipeBuffer } from '../../utils/pipeBuffer';


//TODO: Map types, setup classes... a lot of things

class IDLType {
    public encodeType: u8;

    decodeValue<T>(pipe: PipeBuffer): T {
        throw new Error("Not Implemented");
    }
    encodeValue<T>(value: T): PipeBuffer {
        throw new Error("Not Implemented");
    }
}

class FloatClass extends IDLType {
    private bits: i8 = 0;
    constructor(bits: i8, encodeType: u8) {
        super();
        this.bits = bits;
        this.encodeType = encodeType;
    }

    encodeValue<T>(value: T): PipeBuffer {
        var pipe = new PipeBuffer();
        if (value instanceof f64) {
            var float64Array = new Float64Array(1);
            float64Array[0] = changetype<f64>(value);
            pipe.writeArrayBuffer(float64Array.buffer);
            return pipe;
        } else if (value instanceof f32) {
            var float32Array = new Float32Array(1);
            float32Array[0] = changetype<f32>(value);
            pipe.writeArrayBuffer(float32Array.buffer);
            return pipe;
        }
        return pipe;
    }
    decodeValue<T>(pipe: PipeBuffer): T {
        const buf = pipe.read(this.bits);
        if (this.bits == 8) {
            var f64Result = Float64Array.wrap(buf.buffer);
            //@ts-ignore
            return <T>f64Result[0];
        } else if (this.bits == 4) {
            var f32Result = Float32Array.wrap(buf.buffer);
            //@ts-ignore
            return <T>f32Result[0];
        }
        //@ts-ignore
        return changetype<T>(<T>(0));
    }
}

class FixedIntClass extends IDLType {
    private bits: i8 = 0;
    constructor(bits: i8, encodeType: u8) {
        super();
        this.bits = bits;
        this.encodeType = encodeType;
    }
    encodeValue<T>(value: T): PipeBuffer {
        if (this.bits == 64) {
            var pipe = new PipeBuffer();
            var i64Array = new Int64Array(1);
            //@ts-ignore
            i64Array[0] = <i64>value;
            pipe.writeArrayBuffer(i64Array.buffer);
            return pipe;
        } else {
            //@ts-ignore
            return LEB128.writeIntLE(<i64>value, this.bits / 8);
        }
    }
    decodeValue<T>(pipe: PipeBuffer): T {
        if (this.bits <= 32) {
            //@ts-ignore
            return <T>LEB128.readIntLE(pipe, this.bits / 8);
        }
        else {

            const buf = pipe.read(this.bits / 8);
            var i64Array = Int64Array.wrap(buf.buffer);
            //@ts-ignore
            return <T>i64Array[0];
        }
    }
}

class FixedNatClass extends IDLType {
    private bits: i8 = 0;

    constructor(bits: i8, encodeType: u8) {
        super();
        this.bits = bits;
        this.encodeType = encodeType;
    }
    encodeValue<T>(value: T): PipeBuffer {
        if (this.bits == 64) {
            var pipe = new PipeBuffer();
            var u64Array = new Uint64Array(1);
            //@ts-ignore
            u64Array[0] = <u64>value;
            pipe.writeArrayBuffer(u64Array.buffer);
            return pipe;

        } else {
            //@ts-ignore
            return LEB128.writeIntLE(<i64>value, this.bits / 8);
        }
    }
    decodeValue<T>(pipe: PipeBuffer): T {
        if (this.bits <= 32) {
            const num = LEB128.readUIntLE(pipe, this.bits / 8);
            //@ts-ignore
            return <T>num;
        }
        else {
            const buf = pipe.read(this.bits / 8);
            var u64Array = Uint64Array.wrap(buf.buffer);
            //@ts-ignore
            return <T>u64Array[0];
        }
    }

}


function getFloatIDLValueTypes<T>(value: T): IDLType {
    if (value instanceof f32) {
        return new FloatClass(4, 0x73);
    }
    else if (value instanceof f64) {
        return new FloatClass(8, 0x72);
    }
    return new FloatClass(8, 0x72);
}


function getIntegerIDLValueType<T>(value: T): IDLType {
    if (isInteger<T>()) {
        if (value instanceof i8) {
            return new FixedIntClass(8, 0x77);
        }
        else if (value instanceof u8) {
            return new FixedNatClass(8, 0x7B)
        }
        else if (value instanceof i16) {
            return new FixedIntClass(16, 0x76);
        }
        else if (value instanceof u16) {
            return new FixedNatClass(16, 0x7a)
        }
        else if (value instanceof i32) {
            return new FixedIntClass(32, 0x75);
        }
        else if (value instanceof u32) {
            return new FixedNatClass(32, 0x79)
        }
        else if (value instanceof i64) {
            return new FixedIntClass(64, 0x74);
        }
        else if (value instanceof u64) {
            return new FixedNatClass(64, 0x78);
        }
    }
    return new FixedIntClass(64, 0x7C);
}

//used by arrays
function getIDLType<T>(): u8 {
    if (isString<T>()) {
        return 0x71;
    }
    else if (isBoolean<T>()) {
        return 0x7E;
    }
    else if (isInteger<T>()) {
        //@ts-ignore
        var val: T = changetype<T>(<T>(0));
        return getIntegerIDLValueType(val).encodeType;
    }
    return 0;
}





export {
    FixedIntClass,
    FixedNatClass,
    getIntegerIDLValueType,
    getFloatIDLValueTypes,
    getIDLType
}