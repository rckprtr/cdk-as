

export declare function debug_print(msg : ArrayBuffer, length: i32) : void;

export declare function msg_arg_data_size() : i32;
export declare function msg_arg_data_copy(x : ArrayBuffer, start: i32, size: i32) : void;

export declare function msg_caller_size(): u32;
export declare function msg_caller_copy(dst: ArrayBuffer, offset: u32, size: u32): void;


export declare function msg_reply_data_append(x : ArrayBuffer, y: i32) : void;
export declare function msg_reply() : void;

export declare function time() : i64;



