
import { print } from './api';
import * as IC from './ic0';
import { printUint8Array } from './utils/helpers';

function stable_size(): u32 {
    return IC.stable_size() << 16;
}

///Pages are 64KiB in WASM.
//returns previous page size
function stable_grow(pages: u32): u32 {
   return IC.stable_grow(pages);
}

function stable_write(offset: u32, buffer: Uint8Array): void {
    IC.stable_write(offset, buffer.buffer, buffer.byteLength);
}

function stable_read(start: u32, buffer: ArrayBuffer): void {
    IC.stable_read(buffer, start, buffer.byteLength);
}

function stable_data() : Uint8Array {
    var buffer = new ArrayBuffer(stable_size());
    stable_read(0, buffer);
    return Uint8Array.wrap(buffer);
}

export {
    stable_size,
    stable_write,
    stable_read,
    stable_grow,
    stable_data
}