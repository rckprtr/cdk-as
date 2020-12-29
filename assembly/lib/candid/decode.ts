import { PipeBuffer } from "../utils/pipeBuffer";
import * as LEB128 from "../utils/LEB128";
import { getFloatIDLValueTypes, getIntegerIDLValueType, TextClass } from "./idl/types";
import { RecordRegistery } from "./recordRegistry";
import { print } from "../api";


const magicNumber = 'DIDL';

class Decoder {
    public pipe: PipeBuffer;

    constructor(buffer: Uint8Array) {
        this.pipe = new PipeBuffer(buffer);
        this.init();
    }

    init(): void {
        var magic = String.UTF8.decode(this.pipe.read(magicNumber.length).buffer);
        //read type tables
        //Im not doing anything with these yet.
        //not sure I do need to actually
        const typeTableLength = <i32>LEB128.DecodeLEB128Unsigned(this.pipe);
        for (let i : i32 = 0; i < typeTableLength; i++) {
            const type = <i8>LEB128.DecodeLEB128Signed(this.pipe);
            switch (type) {
                case -18 /* Opt */: {
                    const t = LEB128.DecodeLEB128Signed(this.pipe);
                    break;
                }
                case -19 /* Vector */: {
                    
                    const t = LEB128.DecodeLEB128Signed(this.pipe); //string, int, bool ...
                    
                    break;
                }
                case -20 /* Record */: {
                    const fields = [];
                    let objectLength = LEB128.DecodeLEB128Unsigned(this.pipe);
                    while (objectLength--) {
                        const hash = LEB128.DecodeLEB128Unsigned(this.pipe);
                        const t = LEB128.DecodeLEB128Signed(this.pipe);
                    }
                    break;
                }
            }
        }

        //read input types
        const inputTypesLength = <i32>LEB128.DecodeLEB128Unsigned(this.pipe);
        const inputTypes: i32[] = [];
        for (let i: i32 = 0; i < inputTypesLength; i++) {
            inputTypes.push(LEB128.DecodeLEB128Signed(this.pipe) as i32);
        }
    }

    decode<T>(): T {

        if(isNullable<T>()){
           
        }

        if (isBoolean<T>()) {
            //@ts-ignore
            return <T>(this.pipe.read(1)[0] != 0);
        }
        else if (isInteger<T>()) {
            //@ts-ignore
            var val:T = <T>(1);
            var type = getIntegerIDLValueType(val);
            
            return <T>type.decodeValue<T>(this.pipe);
        }
        else if (isString<T>()) {
            var txtClass = new TextClass();
            return <T>txtClass.decodeValue<T>(this.pipe);
        }
        else if(isFloat<T>()){
            //@ts-ignore
            var val:T = <T>(1);
            var type = getFloatIDLValueTypes(val);
            return type.decodeValue<T>(this.pipe);
        }
        else if (isArray<T>()) {
            //@ts-ignore
            var arrayResult = new Array<valueof<T>>();
            const lens = <i32>LEB128.DecodeLEB128Unsigned(this.pipe);
            for (var i: i32 = 0; i < lens; i++) {
                //@ts-ignore
                arrayResult.push(this.decode<valueof<T>>());
            }
            //@ts-ignore
            return <T>arrayResult;
        }
        //check record registry
        var registry = RecordRegistery.getInstance();
        if(registry.has<T>()){
            return registry.decode<T>(this);
        }
            
        throw new Error("deocde type not found");
    }
}

export {
    Decoder
}
