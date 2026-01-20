import { decode, _655c97_ } from "../../../../../abi/test/test";
const _4d_ = JSON.parse("{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}");
const _3a_ = _655c97_(_4d_, "outputs");
export default function (buffer: ArrayBuffer): {} {
    return decode(buffer, _3a_);
}
