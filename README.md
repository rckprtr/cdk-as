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

### DFINITY IC

|  | Command |
| --- | --- |
| <ul><li> &#9745 </li></ul>| call_data_append |
| <ul><li> [ ] </li></ul>| call_funds_add |
| <ul><li> [ ] </li></ul>| call_new |
| <ul><li> [ ] </li></ul>| call_perform |
| <ul><li> [ ] </li></ul>| canister_balance |
| <ul><li> [ ] </li></ul>| canister_self_copy |
| <ul><li> [ ] </li></ul>| canister_self_size |
| <ul><li> &#9745 </li></ul>| debug_print |
| <ul><li> &#9745 </li></ul>| msg_arg_data_copy |
| <ul><li> &#9745 </li></ul>| msg_arg_data_size |
| <ul><li> &#9745 </li></ul>| msg_caller_copy |
| <ul><li> &#9745 </li></ul>| msg_caller_size |
| <ul><li> [ ] </li></ul>| msg_funds_available |
| <ul><li> [ ] </li></ul>| msg_funds_refunded |
| <ul><li> [ ] </li></ul>| msg_funds_accept |
| <ul><li> [ ] </li></ul>| msg_reject_code |
| <ul><li> [ ] </li></ul>| msg_reject_msg_size |
| <ul><li> [ ] </li></ul>| msg_reject_msg_copy |
| <ul><li> [ ] </li></ul>| msg_reject |
| <ul><li> &#9745 </li></ul>| msg_reply_data_append |
| <ul><li> &#9745 </li></ul>| msg_reply |
| <ul><li> [ ] </li></ul>| trap |
| <ul><li> [ ] </li></ul>| stable_write |
| <ul><li> [ ] </li></ul>| stable_read |
| <ul><li> [ ] </li></ul>| stable_size |
| <ul><li> [ ] </li></ul>| stable_grow |
| <ul><li> &#9745 </li></ul>| time |

### DFINITY Primitives

|  | DFX Primitive | AS Primitive |
| --- | --- | --- |
| <ul><li> [ ] </li></ul>| Null | null |
| <ul><li> &#9745 </li></ul>| Bool | bool |
| <ul><li> &#9745 </li></ul>| Nat | u32 |
| <ul><li> &#9745 </li></ul>| Int | i32 |
| <ul><li> &#9745 </li></ul>| Nat8 | u8 |
| <ul><li> &#9745 </li></ul>| Nat16 | u16 |
| <ul><li> &#9745 </li></ul>| Nat32 | u32 |
| <ul><li> &#9745 </li></ul>| Nat64 | u64* |
| <ul><li> &#9745 </li></ul>| Int8 | i8 |
| <ul><li> &#9745 </li></ul>| Int16 | i16 |
| <ul><li> &#9745 </li></ul>| Int32 | i32 |
| <ul><li> &#9745 </li></ul>| Int64 | i64 |
| <ul><li> [ ] </li></ul>| Float32 | f32 |
| <ul><li> [ ] </li></ul>| Float32 | f64 |
| <ul><li> &#9745 </li></ul>| Text | string |
| <ul><li> [ ] </li></ul>| Reserved | u64 |
| <ul><li> [ ] </li></ul>| Empty | N/A |



* Issue: u64 encoding as a MAX_i64

### DFINITY Types
|  | DFX Types | AS Type |
| --- | --- | --- |
| <ul><li> [ ] </li></ul>| Opt | TBD |
| <ul><li> &#9745 </li></ul>| Vec | Array |
| <ul><li> [ ] </li></ul>| Record | TBD |
| <ul><li> [ ] </li></ul>| Variant | TBD |


* TBD Field Types, Reference Types, Method Types


## How does it work?

TBD

## Things I want to integrate.

* [visitor-as](https://github.com/willemneal/visitor-as) - For Encode/Decode
