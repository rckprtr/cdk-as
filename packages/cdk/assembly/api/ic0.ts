
export declare function debug_print(msg : ArrayBuffer, length: i32) : void;

export declare function msg_funds_available(id : ArrayBuffer, length: i32) : u64;

export declare function msg_arg_data_size() : i32;
export declare function msg_arg_data_copy(x : ArrayBuffer, start: i32, size: i32) : void;

export declare function msg_caller_size(): u32;
export declare function msg_caller_copy(dst: ArrayBuffer, offset: u32, size: u32): void;

export declare function msg_reply_data_append(x : ArrayBuffer, y: i32) : void;
export declare function msg_reply() : void;

export declare function msg_reject(msg : ArrayBuffer, length: i32) : void;
export declare function msg_reject_code(): i32;
export declare function msg_reject_msg_size(): i32;
export declare function msg_reject_msg_copy(dst: ArrayBuffer, offset: u32, size: u32): void;

export declare function time() : u64;
export declare function trap(msg : ArrayBuffer, length: i32) : void;

export declare function canister_self_size() : u32;
export declare function canister_self_copy(x : ArrayBuffer, start: i32, size: i32) : void;
export declare function canister_balance(id : ArrayBuffer, length: i32) : u64;

export declare function stable_size() : u32;
export declare function stable_grow(pages: i32) : u32;
export declare function stable_write(offset: i32, data : ArrayBuffer, size: i32) : void;
export declare function stable_read(dst : ArrayBuffer, start: i32, size: i32) : void;

export declare function call_funds_add(id : ArrayBuffer, length: i32, amount: u64) : void;
