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

## Tests

```
npm run test
```

## What is supported?

### DFINITY IC

|  | Command |
| --- | --- |
| ✅ | `call_data_append` |
| :heavy_minus_sign: | `call_funds_add` |
| :heavy_minus_sign: | `call_new` |
| :heavy_minus_sign: | `call_perform` |
| ✅ | `canister_balance` |
| ✅ | `canister_self_copy` |
| ✅ | `canister_self_size` |
| ✅ | `canister_update` |
| ✅ | `canister_query` |
| ✅ | `canister_pre_upgrade` |
| ✅ | `canister_post_upgrade` |
| ✅ | `canister_query` |
| ✅ | `debug_print` |
| ✅ | `msg_arg_data_copy` |
| ✅ | `msg_arg_data_size` |
| ✅ | `msg_caller_copy` |
| ✅ | `msg_caller_size` |
| ✅ | `msg_funds_available` |
| :heavy_minus_sign: | `msg_funds_refunded` |
| :heavy_minus_sign: | `msg_funds_accept` |
| :heavy_minus_sign: | `msg_reject_code` |
| :heavy_minus_sign: | `msg_reject_msg_size` |
| :heavy_minus_sign: | `msg_reject_msg_copy` |
| :heavy_minus_sign: | `msg_reject` |
| ✅ | `msg_reply_data_append` |
| ✅ | `msg_reply` |
| ✅ | `trap` |
| ✅ | `stable_write` |
| ✅ | `stable_read` |
| ✅ | `stable_size` |
| ✅ | `stable_grow` |
| ✅ | `time` |

### DFINITY Primitives

|  | DFX Primitive | AS Primitive |
| --- | --- | --- |
| :heavy_minus_sign: | `Null` | `null` |
| ✅ | `Bool` | `bool` |
| :heavy_minus_sign: | `Nat` | `u∞` |
| ✅ | `Nat8` | `u8` |
| ✅ | `Nat16` | `u16` |
| ✅ | `Nat32` | `u32` |
| ✅ | `Nat64` | `u64` |
| :heavy_minus_sign: | `Int` | `i∞` |
| ✅ | `Int8` | `i8` |
| ✅ | `Int16` | `i16` |
| ✅ | `Int32` | `i32` |
| ✅ | `Int64` | `i64` |
| ✅ | `Float32` | `f32` |
| ✅ | `Float32` | `f64` |
| ✅ | `Text` | `string` |
| :heavy_minus_sign: | `Reserved` | `N/A` |
| :heavy_minus_sign: | `Empty` | `N/A` |

* For Int/Nat AS currently does not have an arbitrary length integer

### DFINITY Types
|  | DFX Types | AS Type |
| --- | --- | --- |
| :heavy_minus_sign: | `Opt` | `TBD` |
| ✅ | `Vec` | `Array (1D)` |
| ✅ | `Record` | `Models (No Relationships Yet)` |
| :heavy_minus_sign: | `Variant` | `TBD` |


* TBD Field Types, Reference Types, Method Types

## Limitations

### Int and Nat

In DFINITY Int and Nat are represented as arbitrary length signed/unsighed integers.  BigInt's are currently not supported by `cdk-as`.

## How does it work?

TBD

## Things I want to integrate.

* [visitor-as](https://github.com/willemneal/visitor-as) - For Encode/Decode
