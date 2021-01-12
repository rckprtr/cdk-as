import { IDL } from "./idl/types";
import { PipeBuffer } from "../utils/pipeBuffer";
import { RecordRegistery } from "./recordRegistry";
import { EncodeLEB128Unsigned } from "../utils/LEB128";

const magicNumberBytes: u8[] = [0x44, 0x49, 0x44, 0x4c];


//Needs to take in a list of arguments
class Encoder {
    public pipe: PipeBuffer;
    public args: u8;
    public argBuffer: PipeBuffer;

    public types: Array<IDL.Type>;

    public typeTable: PipeBuffer;

    constructor(types: Array<IDL.Type>) {
        this.pipe = new PipeBuffer();
        this.argBuffer = new PipeBuffer();
        this.args = 0;

        this.typeTable = new PipeBuffer();

        this.types = types;
        this.init();
    }

    init(): void {
        this.pipe.write(magicNumberBytes);
    }

    write<T>(value: T): void {
        this.args += 1;
        this.encode<T>(value);
    }

    encode<T>(value: T, nullcheck: bool = true): void {


        var registry = RecordRegistery.getInstance();

        if (isNullable<T>() && nullcheck) {
            if (value == null) {
                this.argBuffer.write([0]);
            } else {
                this.argBuffer.write([1]);
                this.encode<T>(value, false);
            }
        }
        else if (isString<T>()) {
            var txtClass = new IDL.TextClass();
            this.argBuffer.append(txtClass.encodeValue<T>(value));
        }
        else if (isBoolean<T>()) {
            //@ts-ignore
            var boolBuffer = value as bool;
            this.argBuffer.write([boolBuffer ? 1 : 0])
        }
        else if (isInteger<T>()) {
            var intType = IDL.getIntegerIDLValueType<T>(value);
            this.argBuffer.append(intType.encodeValue<T>(<T>value));
        }
        else if (isFloat<T>()) {
            var floatType = IDL.getFloatIDLValueTypes<T>(value);
            this.argBuffer.append(floatType.encodeValue<T>(value));
        }
        else if (isArray<T>()) {
            //@ts-ignore
            var genericArray = value as Array<valueof<T>>;

            this.argBuffer.append(EncodeLEB128Unsigned(genericArray.length));
            for (let x: i32 = 0; x < genericArray.length; x++) {
                //@ts-ignore
                this.encode<valueof<T>>(genericArray[x]);
            }
        }
        else if (registry.has<T>()) {
            registry.encode<T>(this, value);
        }

    }

    build(): Uint8Array {   

        var typeTable = new IDL.TypeTable();

        for (let i: i32 = 0; i < this.types.length; i++) {
            let type = this.types[i];
            //if this is not here, it has issues throws a 'heap out of bounds error.'
            let name = type.name;
            type.buildTypeTable(typeTable);
        }
        this.pipe.append(typeTable.encode());
        this.pipe.write([this.args]);

        for (let i: i32 = 0; i < this.types.length; i++) {
            let type = this.types[i];
            this.pipe.append(type.encodeType(typeTable));
        }

        this.pipe.append(this.argBuffer);
        return this.pipe.buffer;
    }
}

export {
    Encoder,
}
