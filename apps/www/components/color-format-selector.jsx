"use client";
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
import { getColorFormat } from "@/lib/colors";
import { cn } from "@/lib/utils";
import { useColors } from "@/hooks/use-colors";
import { Select, SelectContent, SelectItem, SelectTrigger, } from "@/registry/new-york/ui/select";
import { Skeleton } from "@/registry/new-york/ui/skeleton";
export function ColorFormatSelector(_a) {
    var color = _a.color, className = _a.className, props = __rest(_a, ["color", "className"]);
    var _b = useColors(), format = _b.format, setFormat = _b.setFormat, isLoading = _b.isLoading;
    var formats = React.useMemo(function () { return getColorFormat(color); }, [color]);
    if (isLoading) {
        return <ColorFormatSelectorSkeleton />;
    }
    return (<Select value={format} onValueChange={setFormat}>
      <SelectTrigger className={cn("h-7 w-auto gap-1.5 rounded-lg pr-2 text-xs", className)} {...props}>
        <span className="font-medium">Format: </span>
        <span className="font-mono text-xs text-muted-foreground">
          {format}
        </span>
      </SelectTrigger>
      <SelectContent align="end" className="rounded-xl">
        {Object.entries(formats).map(function (_a) {
            var format = _a[0], value = _a[1];
            return (<SelectItem key={format} value={format} className="gap-2 rounded-lg [&>span]:flex [&>span]:items-center [&>span]:gap-2">
            <span className="font-medium">{format}</span>
            <span className="font-mono text-xs text-muted-foreground">
              {value}
            </span>
          </SelectItem>);
        })}
      </SelectContent>
    </Select>);
}
export function ColorFormatSelectorSkeleton(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<Skeleton className={cn("h-7 w-[116px] gap-1.5 rounded-lg", className)} {...props}/>);
}
