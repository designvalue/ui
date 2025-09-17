"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import * as React from "react";
import { cn } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/registry/new-york/ui/select";
import { styles } from "@/registry/registry-styles";
export function StyleSwitcher(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var _b = useConfig(), config = _b[0], setConfig = _b[1];
    return (<Select value={config.style} onValueChange={function (value) {
            return setConfig(__assign(__assign({}, config), { style: value }));
        }}>
      <SelectTrigger className={cn("h-7 w-[145px] text-xs [&_svg]:h-4 [&_svg]:w-4", className)} {...props}>
        <span className="text-muted-foreground">Style: </span>
        <SelectValue placeholder="Select style"/>
      </SelectTrigger>
      <SelectContent>
        {styles.map(function (style) { return (<SelectItem key={style.name} value={style.name} className="text-xs">
            {style.label}
          </SelectItem>); })}
      </SelectContent>
    </Select>);
}
