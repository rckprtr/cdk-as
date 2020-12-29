import { print } from '../../api';
import { idlHash } from '../../utils/hash';
import * as LEB128 from '../../utils/LEB128';
import { EncodeLEB128Unsigned } from '../../utils/LEB128';
import { PipeBuffer } from '../../utils/pipeBuffer';
import { RecordRegistery } from '../recordRegistry';


//TODO: Map types, setup classes... a lot of things


class TypeTable {

    ids: Map<string, i32>;
    types: Array<PipeBuffer>;

    constructor() {
        this.types = [];
        this.ids = new Map<string, i32>();
    }
    has(type: Type): bool {
        return this.ids.has(type.name);
    }

    add(type: Type, buffer: PipeBuffer) : void {
        const id = this.types.length;
        this.ids.set(type.name, id);
        this.types.push(buffer);
    }

    indexOf(typeName: string): PipeBuffer {
        var val = 0;
        if (this.ids.has(typeName)) {
            val = this.ids.get(typeName);
        } 
        return LEB128.EncodeLEB128Signed(val)
    }

    encode(): PipeBuffer {
        var pipe = new PipeBuffer();
        for (let i = 0; i < this.types.length; i++) {
            pipe.append(this.types[i]);
        }
        const len = LEB128.EncodeLEB128Unsigned(this.types.length);
        return len.append(pipe);
    }
}

class FieldItem {
    name: string;
    type: Type;

    constructor(name: string, type: Type) {
        this.name = name;
        this.type = type;
    }
}

class Type {

    decodeValue<T>(pipe: PipeBuffer): T {
        throw new Error("Not Implemented");
    }
    encodeValue<T>(value: T): PipeBuffer {
        throw new Error("Not Implemented");
    }

    buildTypeTable(typeTable: TypeTable): void {
    }

    get name(): string {
        return '';
    }

    encodeType(typeTable: TypeTable): PipeBuffer {
        return new PipeBuffer();
    }
}

class PrimitiveType extends Type {
    encodeType(typeTable: TypeTable): PipeBuffer {
        return new PipeBuffer();
    }
}

class ConstructType extends Type {


    encodeType(typeTable: TypeTable): PipeBuffer {
        return typeTable.indexOf(this.name);
    }

}

class OptClass extends ConstructType {
    type: Type;
    constructor(type: Type) {
        super();
        this.type = type;
    }

    buildTypeTable(typeTable: TypeTable): void {

        this.type.buildTypeTable(typeTable);

        var pipe = new PipeBuffer();

        pipe.write([0x6E]);
        pipe.append(this.type.encodeType(typeTable))

        typeTable.add(this, pipe);
    }

    get name() : string {
        return 'opt ' + this.type.name;
    }
}

class RecordClass extends ConstructType {

    fields: Array<FieldItem>;

    constructor(fields: Array<FieldItem> = new Array<FieldItem>()) {
        super();
        this.fields = fields;
    }

    add(name: string, type: Type): RecordClass {
        this.fields.push(new FieldItem(name, type));
        
        //sort is a i32 and idlHash is a i64...
        this.fields = this.fields.sort((a, b) => {
            var result = idlHash(a.name) - idlHash(b.name);
            if(result == 0){
                return <i32>result;
            }else if(result < 0){
                return -1;
            } else {
                return 1;
            }
        });
        return this;
    }

    buildTypeTable(typeTable: TypeTable): void {
        for (let x = 0; x < this.fields.length; x++) {
            let fi = this.fields[x];
            fi.type.buildTypeTable(typeTable);
        }
        var pipe = new PipeBuffer();

        pipe.write([0x6C])
        pipe.append(LEB128.EncodeLEB128Unsigned(this.fields.length))

        for (let x = 0; x < this.fields.length; x++) {
            let fi = this.fields[x];
            pipe.append(LEB128.EncodeLEB128Unsigned(
                idlHash(fi.name)
            ));

            pipe.append(
                fi.type.encodeType(typeTable)
            );
        }
        typeTable.add(this, pipe);
    }

    get name(): string {
        var names = new Array<string>();
        for (let x = 0; x < this.fields.length; x++) {
            var fi = this.fields[x];
            names.push(fi.name + ":" + fi.type.name + ";");
        }
        return 'record {' + names.join(' ') + '}';
    }
}

class VecClass extends ConstructType {

    type: Type;
    constructor(type: Type) {
        super();
        this.type = type;
    }

    buildTypeTable(typeTable: TypeTable): void {
        this.type.buildTypeTable(typeTable);

        var pipe = new PipeBuffer();

        pipe.write([0x6D]);
        pipe.append(this.type.encodeType(typeTable))

        typeTable.add(this, pipe);
    }

    get name() : string {
        return 'vec ' + this.type.name;
    }
}

class TextClass extends PrimitiveType {

    constructor() {
        super();
    }

    encodeValue<T>(value: T): PipeBuffer {
        var pipe = new PipeBuffer();
        if (isString<T>()) {
            let strBuffer = String.UTF8.encode(changetype<string>(value));
            pipe.append(EncodeLEB128Unsigned(strBuffer.byteLength));
            pipe.writeArrayBuffer(strBuffer);
        }
        return pipe;
    }
    decodeValue<T>(pipe: PipeBuffer): T {
        if (isString<T>()) {
            const len = <i32>LEB128.DecodeLEB128Unsigned(pipe);
            const buf = pipe.read(len);
            //@ts-ignore
            return <T>(String.UTF8.decode(buf.buffer));
        }
        //@ts-ignore
        return <T>(0);
    }

    encodeType(typeTable: TypeTable): PipeBuffer {
        return LEB128.EncodeLEB128Signed(-15);
    }

    get name(): string {
        return 'text';
    }
}


class BoolClass extends PrimitiveType {

    constructor() {
        super();
    }

    encodeValue<T>(value: T): PipeBuffer {
        var pipe = new PipeBuffer();
        if (isBoolean<T>(value)) {
            var boolBuffer = value as bool;
            pipe.write([boolBuffer ? 1 : 0]);
        }

        return pipe;
    }
    decodeValue<T>(pipe: PipeBuffer): T {
        //@ts-ignore
        return <T>(pipe.read(1)[0] != 0)
    }

    encodeType(typeTable: TypeTable): PipeBuffer {
        return LEB128.EncodeLEB128Signed(-2);
    }

    get name(): string {
        return 'bool';
    }
}

class FloatClass extends PrimitiveType {
    private bits: i8 = 0;
    constructor(bits: i8, encodeType: u8) {
        super();
        this.bits = bits;
    }

    encodeValue<T>(value: T): PipeBuffer {
        var pipe = new PipeBuffer();
        if (value instanceof f64) {
            var float64Array = new Float64Array(1);
            float64Array[0] = value as f64;
            pipe.writeArrayBuffer(float64Array.buffer);
            return pipe;
        } else if (value instanceof f32) {
            var float32Array = new Float32Array(1);
            float32Array[0] = value as f32;
            pipe.writeArrayBuffer(float32Array.buffer);
            return pipe;
        }
        return pipe;
    }
    decodeValue<T>(pipe: PipeBuffer): T {
        const buf = pipe.read(this.bits);
        if (this.bits == 8) {
            var f64Result = Float64Array.wrap(buf.buffer);
            //@ts-ignore
            return <T>f64Result[0];
        } else if (this.bits == 4) {
            var f32Result = Float32Array.wrap(buf.buffer);
            //@ts-ignore
            return <T>f32Result[0];
        }
        //@ts-ignore
        return changetype<T>(<T>(0));
    }

    encodeType(typeTable: TypeTable): PipeBuffer {
        const opcode = this.bits === 4 ? -13 /* Float32 */ : -14 /* Float64 */;
        return LEB128.EncodeLEB128Signed(opcode);
    }

    get name(): string {
        return 'float' + (this.bits * 8).toString();
    }
}

class FixedIntClass extends PrimitiveType {
    private bits: i8 = 0;
    constructor(bits: i8, encodeType: u8) {
        super();
        this.bits = bits;
    }
    encodeValue<T>(value: T): PipeBuffer {
        if (this.bits == 64) {
            var pipe = new PipeBuffer();
            var i64Array = new Int64Array(1);
            //@ts-ignore
            i64Array[0] = <i64>value;
            pipe.writeArrayBuffer(i64Array.buffer);
            return pipe;
        } else {
            //@ts-ignore
            return LEB128.writeIntLE(<i64>value, this.bits / 8);
        }
    }
    decodeValue<T>(pipe: PipeBuffer): T {
        if (this.bits <= 32) {
            //@ts-ignore
            return <T>LEB128.readIntLE(pipe, this.bits / 8);
        }
        else {

            const buf = pipe.read(this.bits / 8);
            var i64Array = Int64Array.wrap(buf.buffer);
            //@ts-ignore
            return <T>i64Array[0];
        }
    }

    encodeType(typeTable: TypeTable): PipeBuffer {
        const offset = <i64>Math.log2(this.bits) - 3;
        return LEB128.EncodeLEB128Signed(-9 - offset);
    }

    get name(): string {
        return 'int' + this.bits.toString();
    }
}

class FixedNatClass extends PrimitiveType {
    private bits: i8 = 0;

    constructor(bits: i8, encodeType: u8) {
        super();
        this.bits = bits;
    }
    encodeValue<T>(value: T): PipeBuffer {
        if (this.bits == 64) {
            var pipe = new PipeBuffer();
            var u64Array = new Uint64Array(1);
            //@ts-ignore
            u64Array[0] = <u64>value;
            pipe.writeArrayBuffer(u64Array.buffer);
            return pipe;

        } else {
            //@ts-ignore
            return LEB128.writeIntLE(<i64>value, this.bits / 8);
        }
    }
    decodeValue<T>(pipe: PipeBuffer): T {
        if (this.bits <= 32) {
            const num = LEB128.readUIntLE(pipe, this.bits / 8);
            //@ts-ignore
            return <T>num;
        }
        else {
            const buf = pipe.read(this.bits / 8);
            var u64Array = Uint64Array.wrap(buf.buffer);
            //@ts-ignore
            return <T>u64Array[0];
        }
    }

    encodeType(typeTable: TypeTable): PipeBuffer {
        const offset = <i64>Math.log2(this.bits) - 3;
        return LEB128.EncodeLEB128Signed(-5 - offset);
    }

    get name(): string {
        return 'nat' + this.bits.toString();
    }

}


function getFloatIDLValueTypes<T>(value: T): Type {
    if (value instanceof f32) {
        return new FloatClass(4, 0x73);
    }
    else if (value instanceof f64) {
        return new FloatClass(8, 0x72);
    }
    return new FloatClass(8, 0x72);
}


function getIntegerIDLValueType<T>(value: T): Type {
    if (isInteger<T>()) {
        if (value instanceof i8) {
            return new FixedIntClass(8, 0x77);
        }
        else if (value instanceof u8) {
            return new FixedNatClass(8, 0x7B)
        }
        else if (value instanceof i16) {
            return new FixedIntClass(16, 0x76);
        }
        else if (value instanceof u16) {
            return new FixedNatClass(16, 0x7a)
        }
        else if (value instanceof i32) {
            return new FixedIntClass(32, 0x75);
        }
        else if (value instanceof u32) {
            return new FixedNatClass(32, 0x79)
        }
        else if (value instanceof i64) {
            return new FixedIntClass(64, 0x74);
        }
        else if (value instanceof u64) {
            return new FixedNatClass(64, 0x78);
        }
    }
    return new FixedIntClass(64, 0x7C);
}


//used by arrays
function getType<T>(checkNull: bool = true): Type {

    if(isNullable<T>() && checkNull){
        return Opt(getType<T>(false));
    }

    if (isString<T>()) {
        return new TextClass();
    }
    else if (isBoolean<T>()) {
        return new BoolClass();
    }
    else if (isInteger<T>()) {
        //@ts-ignore
        var val: T = <T>(1);
        return getIntegerIDLValueType(val);
    }
    else if (isFloat<T>()) {
        //@ts-ignore
        var val: T = <T>(1);
        return getFloatIDLValueTypes<T>(val);
    }
    else if(isArray<T>()){
        //@ts-ignore
        return Vec(getType<valueof<T>>());
    }
    else if(RecordRegistery.getInstance().has<T>()){
        var registry = RecordRegistery.getInstance();
        return registry.get<T>().getRecordClass();
    }
    //temp 
    var result = new Type();
    return result;
}

function isPrimitive<T>(): bool {
    if (isString<T>() || isBoolean<T>() || isInteger<T>() || isFloat<T>()) {
        return true;
    }
    return false;
}


//helpers
function Vec(t: Type) : Type{
    return new VecClass(t);
}

function Opt(t: Type) : Type{
    return new OptClass(t);
}

function Record() : RecordClass{
    return new RecordClass();
}


export {
    FixedIntClass,
    FixedNatClass,
    FloatClass,
    BoolClass,
    TextClass,

    Record,
    RecordClass,
    Vec,
    Opt,
    OptClass,

    Type,
    TypeTable,

    getIntegerIDLValueType,
    getFloatIDLValueTypes,
    getType,
    isPrimitive
}