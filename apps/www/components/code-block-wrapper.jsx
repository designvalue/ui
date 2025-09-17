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
import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/registry/new-york/ui/collapsible";
export function CodeBlockWrapper(_a) {
    var _b = _a.expandButtonTitle, expandButtonTitle = _b === void 0 ? "View Code" : _b, className = _a.className, children = _a.children, props = __rest(_a, ["expandButtonTitle", "className", "children"]);
    var _c = React.useState(false), isOpened = _c[0], setIsOpened = _c[1];
    return (<Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <div className={cn("relative overflow-hidden", className)} {...props}>
        <CollapsibleContent forceMount className={cn("overflow-hidden", !isOpened && "max-h-32")}>
          <div className={cn("[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[100px]", !isOpened ? "[&_pre]:overflow-hidden" : "[&_pre]:overflow-auto]")}>
            {children}
          </div>
        </CollapsibleContent>
        <div className={cn("absolute flex items-center justify-center bg-gradient-to-b from-zinc-700/30 to-zinc-950/90 p-2", isOpened ? "inset-x-0 bottom-0 h-12" : "inset-0")}>
          <CollapsibleTrigger asChild>
            <Button variant="secondary" className="h-8 text-xs">
              {isOpened ? "Collapse" : expandButtonTitle}
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>);
}
