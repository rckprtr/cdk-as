

var format = require("string-template");
var IDL = require("./idlTypes");
var AS = require("./asTypes");

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
                        didType: IDL.buildDIDFieldType(field.type),
                        asType: AS.buildASFieldType(field.type)
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
        var results =results.trim();
        return format(did_template, {
            inputs: `{${results}}`
        })
    }

    //something recursive
    function mapRelationships(records) {
        var history = [];
        records.forEach(record => {
            record = buildRelationships(record, records, history);
        });
    }
    
    function buildRelationships(record, records, history) {
        record.fields.forEach(field => {
            if (IDL.toIDLType(field.asType) == field.asType && !field.didType.includes('vec')) {
                var results = records.find(recs => {
                    return recs.name.includes(field.asType)
                });

                if(results){
                    record.did = record.did.replace(field.asType, results.did)
                }
            } else if(field.didType.includes('vec')) {
                var searchToken = field.didType.replace(/vec/g,'').trim();
                var results = records.find(recs => {
                    return recs.name.includes(searchToken)
                });
                if(results){
                    record.did = record.did.replace(searchToken, results.did)
                }
            }
        });
        return record;
    }
    var recordResults = mapRecords(records);
    mapRelationships(recordResults);
    return recordResults;
}

//DFINITY sorts inputs by this hash for records
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