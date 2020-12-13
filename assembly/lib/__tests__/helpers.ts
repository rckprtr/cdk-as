

//


export function parseHexString(data: string) : Uint8Array { 
    var results = new Uint8Array(data.length/2);
    for(var i = 0;i<data.length;i+=2){
        results[i/2] = <u8>parseInt(data.substr(i,2), 16);
    }
    return results;
}

