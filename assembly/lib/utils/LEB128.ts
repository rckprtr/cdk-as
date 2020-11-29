import { PipeBuffer } from "./pipeBuffer";

//TODO: use as-bignum

function lebEncode(value: number): PipeBuffer {

    var zero = 0;
    var base = 0x80;
    if (value < zero) {
        throw new Error('Cannot leb encode negative values.');
    }

    const pipe = new PipeBuffer();
    while (true) {
        const i = value % base;
        value = value / base;
        if (value == zero) {
            pipe.write([<i32>i]);
            break;
        }
        else {
            pipe.write([<i32>(i|base)]);
        }
    }
    return pipe;
}

function lebDecode(pipe: PipeBuffer): i64 {
    let shift = 0;
    let value:i64 = 0;
    let byte:i64 = 0;
    do {
        byte = <i64>pipe.read(1)[0];
        value = value + ((byte & 0x7f) * <i64>Math.pow(2,shift));
        shift += 7;
    } while (byte >= 0x80);
    return value;
}

function slebEncode(value: i64) : PipeBuffer {

    var zero = 0;
    var base = 0x80;
  
    const isNeg = value < 0;
    if (isNeg) {
        value =  <i64>(Math.abs(value as f64) - 1);
    }
    const pipe = new PipeBuffer();
    while (true) {

        const i = getLowerBytes(value, base, isNeg);
       
        value = value / base;
        if ((isNeg && value == zero && (i & 0x40) !== zero) || 
            (!isNeg && value == zero && (i & 0x40) === zero)) {
            pipe.write([<i32>i]);
            break;
        }
        else {
            pipe.write([<i32>(i | base)]);
        }
    }
    
    return pipe;
}

function getLowerBytes(num: i64,base:i64, isNeg: bool) : i64 {
    const bytes = num % base;
    if (isNeg) {
        return 0x80 - bytes - 1;
    }
    else {
        return bytes;
    }
}

function slebDecode(pipe: PipeBuffer): i64 {
  
    const pipeView = pipe.buffer;
    let len = 0;
    for (; len < pipeView.byteLength; len++) {
        if (pipeView[len] < 0x80) {
            // If it's a positive number, we reuse lebDecode.
            if ((pipeView[len] & 0x40) === 0) {
                return lebDecode(pipe);
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

export {
    lebEncode,
    lebDecode,
    slebEncode,
    slebDecode
}