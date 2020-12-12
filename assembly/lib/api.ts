import * as IC from "./ic0";
import { Principal } from "./principal";


function time(): i64 {
    return IC.time();
}

function print(msg: string): void {
    var buff: ArrayBuffer = String.UTF8.encode(msg);
    IC.debug_print(buff, buff.byteLength);
}

function trap(msg: string): void {
    var buff: ArrayBuffer = String.UTF8.encode(msg);
    IC.trap(buff, buff.byteLength);
}

function caller() : Principal {
    var msg_size: u32 = IC.msg_caller_size();
    var buf: ArrayBuffer = new ArrayBuffer(msg_size);
    IC.msg_caller_copy(buf, 0, msg_size);
    return new Principal(Uint8Array.wrap(buf, 0, msg_size));
}

function canisterId(): Principal {
    var msg_size: u32 = IC.canister_self_size();
    var buf: ArrayBuffer = new ArrayBuffer(msg_size);
    IC.canister_self_copy(buf, 0, msg_size);
    return new Principal(Uint8Array.wrap(buf, 0, msg_size));
}

function canisterBalance(id: Principal): u64 {
    return IC.canister_balance(id.buffer.buffer, id.buffer.byteLength)
}

function fundsAvailable(principal: Principal): u64 {
    return IC.msg_funds_available(principal.buffer.buffer, principal.buffer.byteLength);
}

function addFunds(principal: Principal, amount: u64): void {
    IC.call_funds_add(principal.buffer.buffer, principal.buffer.byteLength, amount);
}



export {
    time,
    print,
    caller,
    canisterId,
    canisterBalance,
    
    trap,

    fundsAvailable,
    addFunds
}