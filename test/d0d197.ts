declare const vm:any;

declare const encode:(includeSelector:boolean, overload:number, ...parameters:Array<any>) => ArrayBuffer;
declare const decode:(overload:number, buffer:ArrayBuffer) => any;

export default function <D>(overload:number, ...parameters:any):[bigint, D] {
    const buffer = (encode as (...a:any)=>ArrayBuffer)(true, overload, ...parameters);
    const context = vm.run(buffer);
    const result = (decode as (...a:any)=>D)(overload, context.returndata);
    return [context.gasUsed, result];
}