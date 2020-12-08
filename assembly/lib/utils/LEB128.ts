import { print } from "../api";
import { PipeBuffer } from "./pipeBuffer";

//TODO: v128 possibly since the largest dfinity float/int is 64?
function EncodeLEB128Unsigned(value: u64): PipeBuffer {
    const pipe = new PipeBuffer();

    let more: bool = true;
    let bytes: u8 = 0;
    let chunck: u8 = 0;

    while (more) {
        chunck = <u8>(value & 0x7f);
        value >>= 7;

        more = value != 0;
        if (more) { chunck |= 0x80; }
        pipe.write([chunck])
        bytes += 1;
    }
    return pipe;
}

function DecodeLEB128Unsigned(pipe: PipeBuffer): u64 {

    let bytes: u8 = 0;

    let value: u64 = 0;
    let shift: u64 = 0;
    let more: bool = true;

    while (more) {
        let b: u8 = pipe.read(1)[0];

        bytes += 1;

        more = (b & 0x80) != 0;
        let chunk: u64 = b & 0x7f;
        value |= chunk << shift;
        shift += 7;
    }

    return value;
}

function EncodeLEB128Signed(value: i64): PipeBuffer {

    let bytes: u8 = 0;
    let more: bool = true;
    let signBitSet: bool = true;

    var pipe = new PipeBuffer();

    while (more) {
        let chunk:u8 = <u8>(value & 0x7f);
        value >>= 7;

        signBitSet = (chunk & 0x40) != 0; 
        more = !((value == 0 && !signBitSet) || (value == -1 && signBitSet));
        if (more) { chunk |= 0x80; }

        pipe.write([chunk]);
        bytes += 1;
    };

    return pipe;
}


function DecodeLEB128Signed(pipe: PipeBuffer): i64 {

    const pipeView = pipe.buffer;
    let len = 0;
    for (; len < pipeView.byteLength; len++) {
        if (pipeView[len] < 0x80) {
            if ((pipeView[len] & 0x40) === 0) {
                return DecodeLEB128Unsigned(pipe);
            }
            break;
        }
    }
    const bytes = pipe.read(len + 1);
    let value = 0;
    var base = 0x80;
    for (let i = bytes.byteLength - 1; i >= 0; i--) {
        value = value * base + (0x80 - (bytes[i] & 0x7f) - 1);
    }
    return (value * -1) - 1;
}

function writeUIntLE(value: u64, byteLength: i8) : PipeBuffer {
    return writeIntLE(value, byteLength); //this truncates over U_MAX_INT
}

function writeIntLE(value: i64, byteLength: i8) : PipeBuffer {
  
    const pipe = new PipeBuffer();
    let i = 0;
    let mul = 256;
    let sub = 0;
    let byte = value % mul;
    pipe.write([<u8>byte]);
    while (++i < byteLength) {
        if (value < 0 && sub === 0 && byte !== 0) {
            sub = 1;
        }
        byte = ((value /mul) - sub) % 256
        pipe.write([<u8>byte]);
        mul = mul * 256;
    }
    return pipe;
}

function readUIntLE(pipe: PipeBuffer, byteLength:i8) : u64 {
    let val = <u64>pipe.read(1)[0];
    let mul = 1;
    let i = 0;
    while (++i < byteLength) {
        mul = mul * 256;
        let byte = <u8>pipe.read(1)[0];
        val = val + (mul * byte);
    }
    return val;
}

function readIntLE(pipe: PipeBuffer, byteLength:i8) : i64 {
    let val = <i64>readUIntLE(pipe, byteLength);
    const mul = <i64>Math.pow(2,8 * (byteLength - 1) + 7)
    if (val > mul) {
        val -= mul * 2;
    }
    return val;
}

export {
    EncodeLEB128Unsigned,
    DecodeLEB128Unsigned,

    EncodeLEB128Signed,
    DecodeLEB128Signed,

    writeIntLE,
    readUIntLE,
    readIntLE,
    writeUIntLE,
}