
var format = require("string-template");

function toIDLType(type) {
    if (type) {
        switch (type.toLowerCase()) {
            case "string":
                return "text"
            case "u8":
                return "nat8"
            case "u16":
                return "nat16"
            case "u32":
                return "nat32"
            case "u64":
                return "nat64"
            case "i8":
                return "int8"
            case "i16":
                return "int16"
            case "i32":
                return "int32"
            case "i64":
                return "int64"
            case "f32":
                return "float32"
            case "f64":
                return "float64"
        }
    }
    return type;
}
exports.toIDLType = toIDLType;


function buildDIDFieldType(type){

    // Object | null or null | Object
    if ('options' in type) {

        var objectType = type.options[0].typeName != "mock" ? type.options[0] : type.options[1];
        var asType = buildDIDFieldType(objectType);
        return format('opt {type}',{
            type: asType
        })

    }

    //Object[]
    if (type.typeKind == 1) {
        var resultsAr = [];

        if('base' in type.base){
            resultsAr.push(buildDIDFieldType(type.base));
        } 
        if(resultsAr.length >= 1){
            return 'vec '.repeat(resultsAr.length) + resultsAr[resultsAr.length-1];
        }
        else {
            return format('vec {type}', {
                type: toIDLType(type.base.typeName)
            });
        }
    }

    //object with types Object<T>
    if (type.typeArguments.length > 0) {

        var resultsAr = [];
        type.typeArguments.forEach(typeArg => {
            resultsAr.push(buildDIDFieldType(typeArg));
        });

        return format('vec {types}', {
            types: resultsAr.join(',')
        });
    }
    return toIDLType(type.typeName);
}

exports.buildDIDFieldType = buildDIDFieldType;