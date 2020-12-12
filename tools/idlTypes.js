
function toIDLType(type) {
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
    return type;
}
exports.toIDLType = toIDLType;