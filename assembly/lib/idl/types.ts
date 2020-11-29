
import * as LEB128 from '../utils/LEB128'
import { PipeBuffer } from '../utils/pipeBuffer';


//TODO: Map types, setup classes... a lot of things

class Type {
    decodeValue(pipe: PipeBuffer) : number {
        throw new Error("Decoding failed of type: " + "");
    }
}

class IntClass extends Type {
   encodeValue(val: i64) : PipeBuffer {
       return LEB128.slebEncode(val);
   }
   encodeType() : PipeBuffer {
       return LEB128.slebEncode(-4 /* Int */);
   }
   decodeValue(pipe: PipeBuffer) : number {
       return LEB128.slebDecode(pipe);
   }
   get name() : string {
       return 'int';
   }
}


function getType(typeId: number) : Type {
    if (typeId < -24) {
        throw new Error('future value not supported');
    }
    if (typeId < 0) {
        switch (typeId) {
            // case -1:
            //     return exports.Null;
            // case -2:
            //     return exports.Bool;
            // case -3:
            //     return exports.Nat;
            case -4:
                return new IntClass();
            // case -5:
            //     return exports.Nat8;
            // case -6:
            //     return exports.Nat16;
            // case -7:
            //     return exports.Nat32;
            // case -8:
            //     return exports.Nat64;
            // case -9:
            //     return exports.Int8;
            // case -10:
            //     return exports.Int16;
            // case -11:
            //     return exports.Int32;
            // case -12:
            //     return exports.Int64;
            // case -13:
            //     return exports.Float32;
            // case -14:
            //     return exports.Float64;
            // case -15:
            //     return exports.Text;
            // case -16:
            //     return exports.Reserved;
            // case -17:
            //     return exports.Empty;
            // case -24:
            //     return exports.Principal;
            default:
                throw new Error('Illegal op_code: ' + typeId);
        }
    }
    return new Type();
}


export {
    getType,
    IntClass
}