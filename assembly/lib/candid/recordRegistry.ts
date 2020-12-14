import { Decoder } from "./decode";
import { Encoder } from "./encode";

type RecordDecoder<T> = (decoder: Decoder) => T;
type RecordEncoder<T> = (encoder: Encoder, record: T) => void;

class RecordRegistery {

    private static instance: RecordRegistery;

    //TODO: do I need to watch for GC?
    public static getInstance(): RecordRegistery {
        if (!RecordRegistery.instance) {
            RecordRegistery.instance = new RecordRegistery();
        }
        return RecordRegistery.instance;
    }
    
    //TODO: There has to be a way to Map<Type...
    //for now I grab the nameof<T> which will
    //collisions with similarly named types
    hanlders: Map<u32, BaseRecordHandler>;

    constructor(){
        this.hanlders = new Map<u32, BaseRecordHandler>();
    }

    registerHandler<T>(decoder: RecordDecoder<T>, encoder: RecordEncoder<T>) : void{
        var handler = new RecordHandler<T>(decoder, encoder);
        this.hanlders.set(idof<T>(), handler);
        
    }

    get<T>(): BaseRecordHandler {
        return this.hanlders.get(idof<T>());
    }

    has<T>(): bool {
        return this.hanlders.has(idof<T>());
    }

    decode<T>(decoder: Decoder) : T{
        var baseHandler = this.get<T>();
        return baseHandler.decode<T>(decoder);
    }

    encode<T>(encoder: Encoder, val : T) : void {
        var baseHandler = this.get<T>();
        baseHandler.encode<T>(encoder, val);
    }
}

class BaseRecordHandler {

    encode<V>(encoder: Encoder, record: V) : void {
        throw new Error("Not Implemented");
    }

    decode<V>(decoder: Decoder): V {
        throw new Error("Not Implemented");
    }

}
class RecordHandler<T> extends BaseRecordHandler {

    encoder: RecordEncoder<T>;
    decoder: RecordDecoder<T>;

    constructor(decoder: RecordDecoder<T>, encoder: RecordEncoder<T>){
        super();
        this.encoder = encoder;
        this.decoder = decoder;
    }

    encode<V>(encoder: Encoder, record: V) : void {
        this.encoder(encoder, changetype<T>(record));
    }

    decode<V>(decoder: Decoder) : V {
        return changetype<V>(this.decoder(decoder));
    }
}


export {
    RecordRegistery
}