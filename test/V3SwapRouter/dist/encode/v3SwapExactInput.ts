import { encode, _655c97_, _869645_ } from "../../../../../abi/test/test";
const _df_ = JSON.parse("{\"inputs\":[{\"name\":\"recipient\",\"type\":\"address\"},{\"name\":\"amountIn\",\"type\":\"uint256\"},{\"name\":\"amountOutMin\",\"type\":\"uint256\"},{\"name\":\"path\",\"type\":\"bytes\"},{\"name\":\"payerIsUser\",\"type\":\"bool\"}],\"outputs\":[],\"name\":\"v3SwapExactInput\",\"type\":\"function\"}");
const _7b_ = _655c97_(_df_, "inputs");
export default function (recipient: string, amountIn: bigint, amountOutMin: bigint, path: ArrayBuffer, payerIsUser: boolean): ArrayBuffer {
    const _15_ = _869645_(_7b_, recipient, amountIn, amountOutMin, path, payerIsUser);
    return encode(_15_, recipient, amountIn, amountOutMin, path, payerIsUser);
}
