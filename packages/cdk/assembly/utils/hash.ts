import * as API from "../api"

function idlHash(value: string) : u64 {
    const buffer = String.UTF8.encode(value);
    const array = Uint8Array.wrap(buffer, 0, buffer.byteLength)
    let results: u64 = 0;
    for(var i:i32 = 0 ; i < array.byteLength; i++){
        results = (results * 223 + <u64>array[i]) % 2 ** 32;
    }
    return results;
}


export {
    idlHash
}