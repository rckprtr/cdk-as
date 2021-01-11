
import {API} from '../lib';


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
    API.print(data)
    API.print(values);
    API.print("End Packet-> L:" + arr.byteLength.toString())
}

function printUint8ArrayFlat(arr: Uint8Array): void {
    API.print("0x" + Uint8ArrayToString(arr).toLowerCase())
}


function Uint8ArrayToString(arr: Uint8Array) : string {
    let data: string = "";
    for (let i: i32 = 0; i < arr.length; ++i) {
        var item = arr[i].toString(16).toUpperCase();
        if(item.length == 1){
            item = "0" + item;
        }
        data +=item;
    }
    return data;
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
    Uint8ArrayFromU8Array,
    printUint8ArrayFlat,
    Uint8ArrayToString
}