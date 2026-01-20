import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"observationCardinalityNext\",\"type\":\"uint16\"}],\"name\":\"increaseObservationCardinalityNext\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}"), "inputs")]
]);
export default function increaseObservationCardinalityNext(overload: 0, buffer: ArrayBuffer): {};
export default function increaseObservationCardinalityNext(overload: number, buffer: ArrayBuffer): any {
    return decode(_ce_.get(overload), buffer);
}
