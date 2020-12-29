

var format = require("string-template");
var IDL = require("./idlTypes");
var AS = require("./asTypes");
var fs = require('fs');

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
                        asType: AS.buildASFieldType(field.type),
                        asBaseType: getBaseName(field),
                        relationships: []
                    }
                )
            });
            newRecord.children = [];
            newRecord.fields = newRecord.fields.sort((a, b) => (a.hash < b.hash) ? 1 : -1)
            //newRecord.did = buildDIDItem(newRecord);
            recordMap.push(newRecord);
        });
        return recordMap;
    }

    function buildDIDItem(record) {
        //(record {age: int32;name: text;email: text;})
        var did_template = `record {inputs}`
        var did_input_template = `{name}: {type}; `
        var results = "";
        var isArray = false;

        record.fields.forEach(field => {
            var inChildren = record.children.find(rec => rec.name == field.asBaseType);
            if (inChildren) {
                var decorate = '';

                if( field.didType.split(' ')[0] == 'vec'){
                    decorate = 'vec ';
                }

                if( field.didType.split(' ')[0] == 'opt'){
                    decorate = 'opt ';
                }
                
                results += format(did_input_template, {
                    name: field.name,
                    type: decorate + buildDIDItem(inChildren)
                })
            } else {
                results += format(did_input_template, {
                    name: field.name,
                    type: field.didType
                })
            }
        });
        var results = results.trim();

        return format(did_template, {
            inputs: `{${results}}`
        })
    }

    function mapRelationships(records) {
        records.forEach(record => {
            getChildren(record, records, [record.name]);
            getRelationships(record, records, [])
        });

        records.forEach(record => {
            record.did = buildDIDItem(record);
        });
    }

    function getRelationships(record, records, history) {
        record.fields.forEach(field => {
            var result = records.find(rec => {
                if (!(rec.name in history)) {
                    return field.asBaseType == rec.name;
                }
            });
            if (result) {
                var alreadyInChildren = field.relationships.find(rec => rec.name == result.name);
                if (!alreadyInChildren) {
                    history.push(result.name);
                    getRelationships(result, records, history);

                    var newItem = cloneObject(result);
                    field.isArray = isVector(field.didType);
                    field.isOptional = isOptional(field.didType);
                    field.relationships.push(newItem);
                }
            }
        });
    }

    function getChildren(record, records, history) {
        record.fields.forEach(field => {
            var result = records.find(rec => {
                if (!(rec.name in history)) {
                    return field.asBaseType == rec.name;
                }
            });
            if (result) {
                var alreadyInChildren = record.children.find(rec => rec.name == result.name);
                if (!alreadyInChildren) {
                    history.push(result.name);
                    getChildren(result, records, history);
                    record.children.push(result);
                }
            }
        });
    }

    var recordResults = mapRecords(records);
    mapRelationships(recordResults);

    // fs.writeFile('records.json', JSON.stringify(recordResults, null, "\t"), function (err) {
    //     if (err) return console.log(err);
    // });
    
    
    return recordResults;
}

function cloneObject(object){
    return JSON.parse(JSON.stringify(object));
}

function isVector(didType){
    return didType.split(' ')[0] == 'vec';
}

function isOptional(didType){
    return didType.split(' ')[0] == 'opt';
}


function getBaseName(field) {
    if (field.type.typeArguments.length > 0) {
        return field.type.typeArguments[0].typeName;
    }
    return field.type.typeName;
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