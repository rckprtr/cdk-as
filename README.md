# Unofficial DFINITY AssemblyScript CDK

This is an experimental project to evaluate how AssemblyScript could be used as a CDK and should not be used for any production purposes.

## Getting Started

[WABT](https://github.com/WebAssembly/wabt) is needed to parse WAT files exported by the build using wat2wasm

```
brew install wabt
```

Start DFINITY in a new terminal
```
dfx start
```

Next install the assemblyscript dependcies
```
npm install
```

Finally run the example
```
npm run dfx_create
npm run dfx_run
````


You should see in your DFINITY terminal
```
[Canister canid] Hello DFINITY from AssemblyScript
[Canister canid] Hello World
```


## More Commands

Increment counter
```
dfx canister call ashello increment
```

Decriment counter
```
dfx canister call ashello decriment
```

Get counter value in DFINITY terminal
```
dfx canister call ashello get_value
```

Set counter value
```
dfx canister call ashello set '(100)'
```

Rebuild and deploy
```
npm run rebuild
```

## What is supported?

###DFINITY IC

|  | Command |
| --- | --- |
| [x] | call_data_append |
| [ ] | call_funds_add |
| [ ] | call_new |
| [ ] | call_perform |
| [ ] | canister_balance |
| [ ] | canister_self_copy |
| [ ] | canister_self_size |
| [x] | debug_print |
| [x] | msg_arg_data_copy |
| [x] | msg_arg_data_size |
| [x] | msg_caller_copy |
| [x] | msg_caller_size |
| [ ] | msg_funds_available |
| [ ] | msg_funds_refunded |
| [ ] | msg_funds_accept |
| [ ] | msg_reject_code |
| [ ] | msg_reject_msg_size |
| [ ] | msg_reject_msg_copy |
| [ ] | msg_reject |
| [x] | msg_reply_data_append |
| [x] | msg_reply |
| [ ] | trap |
| [ ] | stable_write |
| [ ] | stable_read |
| [ ] | stable_size |
| [ ] | stable_grow |
| [x] | time |

###DFINITY Primitives

|  | DFX Primitive | AS Primitive |
| --- | --- | --- |
| [ ] | Null | null |
| [x] | Bool | bool |
| [x] | Nat | u32 |
| [x] | Int | i32 |
| [x] | Nat8 | u8 |
| [x] | Nat16 | u16 |
| [x] | Nat32 | u32 |
| [x] | Nat64 | u64* |
| [x] | Int8 | i8 |
| [x] | Int16 | i16 |
| [x] | Int32 | i32 |
| [x] | Int64 | i64 |
| [ ] | Float32 | f32 |
| [ ] | Float32 | f64 |
| [x] | Text | string |
| [ ] | Reserved | u64 |
| [ ] | Empty | N/A |



* Issue: u64 encoding as a MAX_i64

### DFINITY Types
|  | DFX Types | AS Type |
| --- | --- | --- |
| [ ] | Opt | TBD |
| [x] | Vec | Array |
| [ ] | Record | TBD |
| [ ] | Variant | TBD |


* TBD Field Types, Reference Types, Method Types


## How does it work?

TBD

## Things I want to integrate.

* [visitor-as](https://github.com/willemneal/visitor-as) - For Encode/Decode
