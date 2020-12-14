import { PipeBuffer } from "../utils/pipeBuffer";
import * as LEB128 from "../utils/LEB128";
import { getFloatIDLValueTypes, getIntegerIDLValueType } from "./idl/types";
import { RecordRegistery } from "./recordRegistry";


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
        const typeTableLength = <i32>LEB128.DecodeLEB128Unsigned(this.pipe);
        for (let i : i32 = 0; i < typeTableLength; i++) {
            const type = <i8>LEB128.DecodeLEB128Signed(this.pipe);
            switch (type) {
                case -19 /* Vector */: {
                    
                    const t = LEB128.DecodeLEB128Signed(this.pipe); //string, int, bool ...
                    //Im not doing anything with these yet.
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
        //TODO: Need to map the IDL types over to assist the encoder/decoder in the future
        //this.IDLTypes = inputTypes.map<Type>(t => getType(<i32>t));
    }

    decode<T>(): T {
        if (isBoolean<T>()) {
            //@ts-ignore
            return <T>(this.pipe.read(1)[0] != 0);
        }
        else if (isInteger<T>()) {
            //@ts-ignore
            var val:T = changetype<T>(<T>(0));
            var idlType = getIntegerIDLValueType(val);
            
            return <T>idlType.decodeValue<T>(this.pipe);
        }
        else if (isString<T>()) {
            
            const len = <i32>LEB128.DecodeLEB128Unsigned(this.pipe);
            const buf = this.pipe.read(len);
            //@ts-ignore
            return <T>(String.UTF8.decode(buf.buffer));
        }
        else if(isFloat<T>()){
            //@ts-ignore
            var val:T = changetype<T>(<T>(0));
            var idlType = getFloatIDLValueTypes(val);
            return idlType.decodeValue<T>(this.pipe);
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
