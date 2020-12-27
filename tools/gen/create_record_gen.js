var format = require("string-template");



base_template = `
import { Decoder } from "./lib/candid/decode";
import { Encoder } from "./lib/candid/encode";
import { getType, RecordClass, TextClass, Type } from "./lib/candid/idl/types";
import { RecordRegistery } from "./lib/candid/recordRegistry";
{model_imports}

export function initRegistry() : RecordRegistery {
    var registry = RecordRegistery.getInstance();

{registry}
    return registry;
}

{encoderDecoders}
`


model_import_template = `import { {typeNames} } from "./models";`

register_template = "\tregistry.registerHandler<{typeName}>({typeName}Record,{typeName}Decode, {typeName}Encode);\n"


typetable_template = `
function {typeName}Record(): RecordClass {
    var record = new RecordClass()
{writeItems}
    return record;
}
`
encoder_write_item = '\t\t.add("{field}", getType<{type}>())\n'

encoder_write_relationship_item = '\t\t.add("{field}", {typeName}Record())\n'

encoder_typetableitem_template = `
\ttypeTableItems = typeTableItems.concat({typeName}TypeTable());`

decoder_template = `
function {typeName}Decode(decoder: Decoder): {typeName}{
    var {varName} = new {typeName}();
{properties}
    return {varName};
}

`

decoder_prop_template = "\t{varName}.{prop} = decoder.decode<{type}>();\n"

encoder_template = `
function {typeName}Encode(encoder: Encoder, {varName}: {typeName}): void {
{encodeItems}
}`




encoder_encode_item = "\tencoder.encode<{type}>({varName}.{field});\n"


function buildRecordGenerator(recordMap) {

    var registry = "";

    var encoderDecoders = "";


    recordMap.forEach(record => {

        record.fields = record.fields.reverse();

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

        var decoderItem = format(decoder_template, {
            typeName: record.name,
            varName: record.name.toLowerCase(),
            properties: props
        })


        //encoder
        var writeItems = "";
        var encodeItems = "";
        var writeTypeRelationship = "";
        record.fields.forEach(field => {

            writeItems += format(encoder_write_item,
                {
                    field: field.name,
                    type: field.asType
                });

            encodeItems += format(encoder_encode_item, {
                type: field.asType,
                varName: record.name.toLowerCase(),
                field: field.name,
            });

        })

        // var children = "";
        // record.children.forEach(child => {

        //     if(isChildArray(child, record)){
        //         children += `\n\ttypeTableItems.push(new TypeTableItem(0x6D));\n`
        //     }

        //     children += format(encoder_typetableitem_template,{
        //         typeName: child.name
        //     })
        // });


        var typeTableItem = format(typetable_template, {
            typeName: record.name,
            writeItems: writeItems,
            children: writeTypeRelationship
        });


        var encoderItem = format(encoder_template, {
            typeName: record.name,
            varName: record.name.toLowerCase(),
            fieldLength: record.fields.length,
            encodeItems: encodeItems,
        })

        encoderDecoders += typeTableItem + decoderItem + encoderItem;

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



