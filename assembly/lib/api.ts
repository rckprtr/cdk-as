import * as IC from "./ic0";


function time(): i64 {
    return IC.time();
}

function print(msg: string): void {
    var buff: ArrayBuffer = String.UTF8.encode(msg);
    IC.debug_print(buff, buff.byteLength);
}

function caller() : void {
    var msg_size: u32 = IC.msg_caller_size();
    var buf: ArrayBuffer = new ArrayBuffer(msg_size);
    IC.msg_caller_copy(buf, 0, msg_size);
    var princiap: Uint8Array = Uint8Array.wrap(buf, 0, msg_size);
}


export {
    time,
    print
}