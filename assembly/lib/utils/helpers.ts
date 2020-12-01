
import * as API from '../api';


function printUint8Array(arr: Uint8Array): void {
    let data: string = "";
    let values: string = "";
    for (let i: i32 = 0; i < arr.length; ++i) {
        data += arr[i].toString(16).toUpperCase() + " ";
        values += String.fromCharCode(arr[i]) + "  ";
    }
    API.print("Packet-> L:" + arr.byteLength.toString())
    API.print(data)
    API.print(values);
    API.print("End Packet-> L:" + arr.byteLength.toString())
}


export {
    printUint8Array
}