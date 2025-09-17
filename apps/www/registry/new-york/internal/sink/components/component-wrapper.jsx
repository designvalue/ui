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
import { cn } from "@/registry/new-york/lib/utils";
export function ComponentWrapper(_a) {
    var { className, name, children } = _a, props = __rest(_a, ["className", "name", "children"]);
    return (<div className={cn("flex w-full flex-col rounded-lg border", className)} {...props}>
      <div className="border-b px-4 py-3">
        <div className="text-sm font-medium">{name}</div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-2 p-4 [&>div]:max-w-full">
        {children}
      </div>
    </div>);
}
