# c880f7
A builder of simple Ethereum ABI encoding/decoding helper modules, from ABIs, in JavaScript/TypeScript.

## Info
Some examples of compiled modules can be found under the `test` directory. Any folder with a `src/<something>.abi` can be targeted and a corresponding `dist` directory with a compiled module will be produced alongside it.

## Dependencies
`@bradthomasbrown/abi` is a required dependency wherever these modules are used. It handles default ABI encoding and decoding behaviors so that we don't have to package the code required to do that for wherever each and every compiled module ends up.

## Why?
I never quite liked any way I've had to interact with ABI encodings and contracts before, not from ethers, viem, web3js, etc. It seems one is too expected to clunkily input the types themselves when it could be known from an ABI. These libraries and others seem to continually make the bizarre choice to put a lot of weight on the TypeScript language server to attempt to parse an ABI in real time.
We'll just compile them quickly, then use those as modules in our projects.
Overloads are handled via numeric indices, where it is expected you are using something with Intellisense-ish hints, so you can easily see what arguments are required for what number of overload, rather than needing to type or choose a potentially very lengthy function signature.
The encoding pattern is also, to my knowledge, unique in that we calculate one "final size" buffer and then only ever encode and work on that buffer, rather than many concatenations. No idea if there's any benefits, I just thought it was neat.

## Installation
```sh
git clone https://github.com/bradthomasbrown/c880f7
```

## Usage
```sh
cd c880f7

bun src/c880f7.ts targetDir
# where 'targetDir/src/<something>.abi' exists
# creates module at 'targetDir/dist'

bun src/425a07.ts targetDir add featureName featureTemplatePath
# where 'targetDir' is a compiled ABI module with a populated 'dist' folder (with 'encode' and 'decode' folders)
# creates module <featureName> at 'targetDir/dist/<featureName>/<featureName>.ts'
# which is a similar to the 'encode' or 'decode' in that it exports one of each smart contract function
# but applies the code at <featureTemplatePath>
```