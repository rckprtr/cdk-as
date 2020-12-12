

var format = require("string-template");
var IDL = require("./idlTypes");

function buildRecordMap(jsonData) {

    var records = [];
    jsonData.classes.forEach(clss => {
        clss.decorators.forEach(decorator => {
            if (decorator.name == "record") {
                records.push(clss);
            }
        });
    });

    function mapRecords(records) {
        var recordMap = [];
        records.forEach(record => {
            var newRecord = {
                name: record.name
            }
            newRecord.fields = []
            record.fields.forEach(field => {
                newRecord.fields.push(
                    {
                        name: field.name,
                        hash: idlHash(field.name),
                        didType: IDL.toIDLType(field.type.typeName),
                        asType: field.type.typeName
                    }
                )
            });
            newRecord.fields = newRecord.fields.sort((a, b) => (a.hash > b.hash) ? 1 : -1)
            newRecord.did = buildDIDItem(newRecord);
            recordMap.push(newRecord);
        });
        return recordMap;
    }

    function buildDIDItem(record) {
        //(record {age: int32;name: text;email: text;})
        var did_template = `record {inputs}`
        var did_input_template = `{name}: {type}; `
        var results = "";
        record.fields.forEach(field => {
            results += format(did_input_template, {
                name: field.name,
                type: field.didType
            })
        });

        return format(did_template, {
            inputs: "{" + results.trim() + "}"
        })

    }

    return mapRecords(records);
}


//I need this to sort??
function idlHash(s) {
    const utf8encoder = new TextEncoder();
    const array = utf8encoder.encode(s);
    let h = 0;
    for (const c of array) {
        h = (h * 223 + c)
        h = h % 2 ** 32;
    }
    return h;
}


exports.buildRecordMap = buildRecordMap;