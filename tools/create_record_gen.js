var format = require("string-template");



base_template = `
import { Decoder, Encoder } from "./lib/call";
import { getIDLType } from "./lib/idl/types";
import { RecordRegistery } from "./lib/recordRegistry";
import { idlHash } from "./lib/utils/hash";
import { EncodeLEB128Signed } from "./lib/utils/LEB128";
import { PipeBuffer } from "./lib/utils/pipeBuffer";
{model_imports}

export function initRegistry() : RecordRegistery {
    var registry = RecordRegistery.getInstance();

    {registry}

    return registry;
}

{encoderDecoders}
`


model_import_template = `import { {typeNames} } from "./models";`

register_template = `registry.registerHandler<{typeName}>({typeName}Decode, {typeName}Encode);
`

decoder_template = `
function {typeName}Decode(decoder: Decoder): {typeName}{
    var {varName} = changetype<{typeName}>(0);
    {properties}
    return {varName};
}

`

decoder_prop_template = `{varName}.{prop} = decoder.decode<{type}>();
`

encoder_template = `
function {typeName}Encode(encoder: Encoder, {varName}: {typeName}): void {
    var pipe = new PipeBuffer();
    pipe.write([0x6C]); //record type
    pipe.write([{fieldLength}]); //amount of items

    {writeItems}

    encoder.addTypeTableItemRecord(pipe);

    {encodeItems}
}`

encoder_write_item = `
pipe.append(EncodeLEB128Signed(idlHash("{field}")));
pipe.write([getIDLType<{type}>()]);
`

encoder_encode_item = 
`encoder.encode<{type}>({varName}.{field}, false);
`


function buildRecordGenerator(recordMap) {

    var registry = "";

    var encoderDecoders = "";

    recordMap.forEach(record => {

        registry += format(register_template, {
            typeName: record.name
        })

        //decoder
        var props = "";
        record.fields.forEach(field => {
            props += format(decoder_prop_template,
                {
                    varName: record.name.toLowerCase(),
                    prop: field.name,
                    type: field.asType
                })
        })

        var decoderItem = format(decoder_template,{
            typeName: record.name,
            varName: record.name.toLowerCase(),
            properties: props
        })


        //encoder
        var writeItems = "";
        var encodeItems = "";
        record.fields.forEach(field => {
            writeItems += format(encoder_write_item,
                {
                    field: field.name,
                    type: field.asType
                })
            
            encodeItems += format(encoder_encode_item,{
                type: field.asType,
                varName: record.name.toLowerCase(),
                field: field.name,
            })
        })
        
        var encoderItem = format(encoder_template,{
            typeName: record.name,
            varName: record.name.toLowerCase(),
            fieldLength: record.fields.length,
            writeItems: writeItems,
            encodeItems: encodeItems
        })

        encoderDecoders += decoderItem + encoderItem;

    });

    var imports = format(model_import_template, {
        typeNames: recordMap.map(x => x.name).join(", ")
    })

    return format(base_template, {
        model_imports: imports,
        registry: registry,
        encoderDecoders: encoderDecoders
    });
}

exports.buildRecordGenerator = buildRecordGenerator;