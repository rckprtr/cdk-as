
export function parseHexString(data: string) : Uint8Array { 
    var results = new Uint8Array(data.length/2);
    for(var i = 0;i<data.length;i+=2){
        results[i/2] = <u8>parseInt(data.substr(i,2), 16);
    }
    return results;
}

export function Uint8ArrayToString(arr: Uint8Array) : string {
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


export function Uint8ArrayFromU8Array(buf: u8[]): Uint8Array{
    var newBuffer = new Uint8Array(buf.length);
    for (let i: i32 = 0; i < buf.length; i++) {
        newBuffer[i] = buf[i]
    }
    return newBuffer;
}
