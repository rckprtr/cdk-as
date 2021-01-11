import * as IC from "./api/ic0";
import { Principal } from "./candid/types/principal";


export namespace API {

    export function getCurrentTime(): i64 {
        return IC.time();
    }

    export function print(msg: string): void {
        var buff: ArrayBuffer = String.UTF8.encode(msg);
        IC.debug_print(buff, buff.byteLength);
    }

    export function setTrap(msg: string): void {
        var buff: ArrayBuffer = String.UTF8.encode(msg);
        IC.trap(buff, buff.byteLength);
    }

    export function caller(): Principal {
        var msg_size: u32 = IC.msg_caller_size();
        var buf: ArrayBuffer = new ArrayBuffer(msg_size);
        IC.msg_caller_copy(buf, 0, msg_size);
        return new Principal(Uint8Array.wrap(buf, 0, msg_size));
    }

    export function canisterId(): Principal {
        var msg_size: u32 = IC.canister_self_size();
        var buf: ArrayBuffer = new ArrayBuffer(msg_size);
        IC.canister_self_copy(buf, 0, msg_size);
        return new Principal(Uint8Array.wrap(buf, 0, msg_size));
    }

    export function canisterBalance(id: Principal): u64 {
        return IC.canister_balance(id.buffer.buffer, id.buffer.byteLength)
    }

    export function fundsAvailable(principal: Principal): u64 {
        return IC.msg_funds_available(principal.buffer.buffer, principal.buffer.byteLength);
    }

    export function addFunds(principal: Principal, amount: u64): void {
        IC.call_funds_add(principal.buffer.buffer, principal.buffer.byteLength, amount);
    }


}
