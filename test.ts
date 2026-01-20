import * as UniversalRouter from "./test/UniversalRouter/dist/UniversalRouter"

// console.log(new Uint8Array(WETH9.encode.decimals(true, 0)).toHex());
// console.log(new Uint8Array(WETH9.encode.balanceOf(true, 0, `0x${"1".repeat(40)}`)).toHex());
// console.log(new Uint8Array(WETH9.encode.balanceOf(false, 0, `0x${"1".repeat(40)}`)).toHex());
// console.log(new Uint8Array(WETH9.encode.withdraw(true, 0, 256n)).toHex());


console.log(new Uint8Array(UniversalRouter.encode.execute(true, 0, new Uint8Array([0x00]).buffer, [new Uint8Array([0xee]).buffer])).toHex());
console.log(new Uint8Array(UniversalRouter.encode.execute(false, 0, new Uint8Array([0x00]).buffer, [new Uint8Array([0xee]).buffer])).toHex());
console.log(new Uint8Array(UniversalRouter.encode.execute(true, 1, new Uint8Array([0x00]).buffer, [new Uint8Array([0xee]).buffer], 255n)).toHex());
console.log(new Uint8Array(UniversalRouter.encode.execute(false, 1, new Uint8Array([0x00]).buffer, [new Uint8Array([0xee]).buffer], 255n)).toHex());
