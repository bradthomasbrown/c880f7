import { decode, _655c97_ } from "../../../../../abi/test/test";
const _4d_ = JSON.parse("{\"inputs\":[{\"name\":\"recipient\",\"type\":\"address\"},{\"name\":\"amountIn\",\"type\":\"uint256\"},{\"name\":\"amountOutMin\",\"type\":\"uint256\"},{\"name\":\"path\",\"type\":\"bytes\"},{\"name\":\"payerIsUser\",\"type\":\"bool\"}],\"outputs\":[],\"name\":\"v3SwapExactInput\",\"type\":\"function\"}");
const _3a_ = _655c97_(_4d_, "outputs");
export default function (buffer: ArrayBuffer): {} {
    return decode(buffer, _3a_);
}
