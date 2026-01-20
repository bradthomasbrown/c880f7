import { decode, _655c97_ } from "../../../../../abi/test/test";
const _4d_ = JSON.parse("{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}");
const _3a_ = _655c97_(_4d_, "outputs");
export default function (buffer: ArrayBuffer): [
    string
] {
    return decode(buffer, _3a_);
}
