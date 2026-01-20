import { decode, _655c97_ } from "../../../../../abi/test/test";
const _4d_ = JSON.parse("{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"val\",\"type\":\"uint256\"}],\"internalType\":\"struct Die[]\",\"name\":\"dies\",\"type\":\"tuple[]\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}");
const _3a_ = _655c97_(_4d_, "outputs");
export default function (buffer: ArrayBuffer): {} {
    return decode(buffer, _3a_);
}
