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
import React from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/registry/new-york/ui/aspect-ratio";
export function ComponentCard(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<AspectRatio ratio={1 / 1} asChild>
      <div className={cn("flex items-center justify-center rounded-md border p-8", className)} {...props}/>
    </AspectRatio>);
}
