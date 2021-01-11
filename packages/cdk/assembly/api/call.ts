import { Decoder } from "../candid/decode";
import { Encoder } from "../candid/encode";
import * as IC from "./ic0";

export namespace CALL {
    export enum RejectionCode {
        NoError = 0,
        SysFatal = 1,
        SysTransient = 2,
        DestinationInvalid = 3,
        CanisterReject = 4,
        CanisterError = 5,
        Unknown,
    }

    export function reject(msg: string): void {
        var buffer = String.UTF8.encode(msg);
        IC.msg_reject(buffer, buffer.byteLength);
    }

    export function getRejectCode(): RejectionCode {
        var code: RejectionCode = IC.msg_reject_code();
        return code;
    }

    export function getRejectMessage(): string {
        var msg_size: i32 = IC.msg_reject_msg_size();
        var buf: ArrayBuffer = new ArrayBuffer(msg_size);
        IC.msg_reject_msg_copy(buf, 0, msg_size);
        return String.UTF8.decode(buf);
    }

    export function receive(): Decoder {
        var msg_size: i32 = IC.msg_arg_data_size();
        var buf: ArrayBuffer = new ArrayBuffer(msg_size);
        IC.msg_arg_data_copy(buf, 0, msg_size);
        return new Decoder(Uint8Array.wrap(buf, 0, msg_size));
    }

    export function reply(encoder: Encoder): void {
        var data = encoder.build();
        IC.msg_reply_data_append(data.buffer, data.byteLength);
        IC.msg_reply();
    }
}
