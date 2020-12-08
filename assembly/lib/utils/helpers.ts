
import * as API from '../api';


function printUint8Array(arr: Uint8Array): void {
    let data: string = "";
    let values: string = "";
    let items: u8[] = [];
    for (let i: i32 = 0; i < arr.length; ++i) {
        items.push(arr[i]);
        data += arr[i].toString(16).toUpperCase() + " ";
        values += String.fromCharCode(arr[i]) + "  ";
    }
    API.print("Packet-> L:" + arr.byteLength.toString())
    API.print("[" + items.join(",") + "]");
    API.print(data)
    API.print(values);
    API.print("End Packet-> L:" + arr.byteLength.toString())
}

function Uint8ArrayFromU8Array(buf: u8[]): Uint8Array{
    var newBuffer = new Uint8Array(buf.length);
    for (let i: i32 = 0; i < buf.length; i++) {
        newBuffer[i] = buf[i]
    }
    return newBuffer;
}

export {
    printUint8Array,
    Uint8ArrayFromU8Array
}