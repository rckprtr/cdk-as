var format = require("string-template");

function buildASFieldType(type) {


    // Object | null or null | Object
    if ('options' in type) {

        var objectType = type.options[0].typeName != "mock" ? type.options[0] : type.options[1];
        var asType = buildASFieldType(objectType);
        return format('{type} | null',{
            type: asType
        })

    }
  
    //Object[]
    if (type.typeKind == 1) {
        var resultsAr = [];
        if ('base' in type.base) {
            resultsAr.push(buildASFieldType(type.base));
        }
        if (resultsAr.length >= 1) {
            return resultsAr[resultsAr.length - 1] + '[]'.repeat(resultsAr.length);
        }
        else {
            return format('{type}{bracers}', {
                type: type.base.typeName,
                bracers: '[]'
            });
        }
    }

    //object with types Object<T>
    if (type.typeArguments.length > 0) {

        var resultsAr = [];
        type.typeArguments.forEach(typeArg => {
            resultsAr.push(buildASFieldType(typeArg));
        });

        return format('{type}<{types}>', {
            type: type.typeName,
            types: resultsAr.join(',')
        });
    }
    return type.typeName;
}

exports.buildASFieldType = buildASFieldType;