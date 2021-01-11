# Unofficial DFINITY AssemblyScript CDK

This is an experimental project to evaluate how AssemblyScript could be used as a CDK and should not be used for any production purposes.

## Usage

```
import { Actor, query, update } from "@cdk-as/cdk"

```

## Install

[WABT](https://github.com/WebAssembly/wabt) is needed to parse WAT files exported by the build using wat2wasm

```
brew install wabt
```

Next install the assemblyscript & cdk dependcies
```
npm install
```

## Tests

```
npm run test
```
