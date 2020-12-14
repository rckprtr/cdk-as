import * as IC from './api/ic0';
import { Decoder } from './candid/decode';
import { Encoder } from './candid/encode';

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

function getRespondEncoder(): Encoder {
    return new Encoder();
}

function sendRespondEncoder(encoder: Encoder): void {
    var data = encoder.build();
    writeBytes(data.buffer);
    IC.msg_reply();
}


export {
    respondEmpty,
    receiveEmpty,
    receiveDecoder,
    getRespondEncoder,
    sendRespondEncoder
}