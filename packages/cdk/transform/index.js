"use strict";
const as_1 = require("visitor-as/as");
const utils_1 = require("visitor-as/dist/utils");
function getName(element) {
    let decorator = utils_1.getDecorator(element.declaration, "exportAs");
    if (decorator.args == null) {
        throw Error("exportAs expects a string argument but got null.");
    }
    if (decorator.args.length != 1) {
        throw Error(`exportAs expects 1 argument but got ${decorator.args.length}`);
    }
    if (!decorator.args[0].isLiteralKind(as_1.LiteralKind.STRING)) {
        throw Error("exportAs expects a string argument");
    }
    return decorator.args[0].value;
}
class Transformer extends as_1.Transform {
    afterInitialize(program) {
        var _a, _b, _c;
        let files = Array.from(program.filesByName.values()).filter((file) => utils_1.isUserEntry(file.source) && !utils_1.isLibrary(file.source));
        for (let file of files) {
            for (let _export of ((_a = file.exports) === null || _a === void 0 ? void 0 : _a.values()) || []) {
                if (_export != null && utils_1.hasDecorator(_export, "exportAs")) {
                    let newName = getName(_export);
                    (_b = file.exports) === null || _b === void 0 ? void 0 : _b.delete(_export.name);
                    (_c = file.exports) === null || _c === void 0 ? void 0 : _c.set(newName, _export);
                }
            }
        }
    }
}
module.exports = Transformer;