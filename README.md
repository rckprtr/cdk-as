# UNOFFICIAL DFINITY AssemblyScript CDK

This is an expermental project to evaluate how AssemblyScript could be used as a CDK and should not be used for any production purposes.

## Getting Started

Wabt is needed to parse WAT files exported by the build

```brew install wabt```

Start DFINITY in a new terminal
```
dfx start
```

Next install the assemblyscript dependcies
```
npm install
```

Finall run the example
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

## TODO

* This list is not comprehensive

### IC
- [ ] Stable Store (stable_write, stable_read, stable_grow, stable_size)
- [ ] Trap
- [ ] Tokens (funds, balances...)
- [ ] Cross canister calls
- [ ] Canister Update

### Library
- [ ] Returning Values (encoder)
- [ ] Implement IC Types (many here)
