var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { cn } from "@/lib/utils";
import { Slider } from "@/registry/new-york/ui/slider";
export default function SliderDemo(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<Slider defaultValue={[50]} max={100} step={1} className={cn("w-[60%]", className)} {...props}/>);
}
