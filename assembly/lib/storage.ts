import { print } from "./api";
import * as STABLE from "./api/stable";
import { Decoder } from "./candid/decode";
import { Encoder } from "./candid/encode";

//TODO: Needs some serious consideration
//For testing this will be an Array<i64>
//maybe a similar pattern to Rust CDK 
//https://github.com/dfinity/cdk-rs/blob/083e62df46e670cdaa6f3a42201f023772b52f29/src/ic-cdk/src/storage.rs
class Storage {
    private data: Uint8Array = new Uint8Array(0);
    private values: Array<i64>;

    constructor() {
        this.values = new Array<i64>();
        this.reload();
    }

    read(): Array<i64> {
        return this.values;
    }

    add(val: i64): void {
        this.values.push(val);
    }

    //this will write over the buffer
    save(): void {
        var encoder = new Encoder([]);
        encoder.write<Array<i64>>(this.values);
        var data = encoder.build();
        STABLE.stable_write(0, data); 
    }

    getSize(): u32 {
        return STABLE.stable_size();
    }

    printValues() : void {
        for(var i = 0; i< this.values.length;i++){
            print("Stored Value: " + this.values[i].toString());
        }
    }

    reload(): void {
        this.data = STABLE.stable_data();
        if (this.data.byteLength > 0) {
            var decoder = new Decoder(this.data);
            this.values = decoder.decode<Array<i64>>()
        }
        
        if(this.getSize() == 0){
            STABLE.stable_grow(1);
        }
    }
}

export {
    Storage
}