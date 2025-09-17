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
import { CheckIcon, ClipboardIcon } from "lucide-react";
import { trackEvent } from "@/lib/events";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, } from "@/registry/new-york/ui/tooltip";
export function ChartCopyButton(_a) {
    var event = _a.event, name = _a.name, code = _a.code, className = _a.className, props = __rest(_a, ["event", "name", "code", "className"]);
    var _b = React.useState(false), hasCopied = _b[0], setHasCopied = _b[1];
    React.useEffect(function () {
        setTimeout(function () {
            setHasCopied(false);
        }, 2000);
    }, [hasCopied]);
    return (<Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon" variant="outline" className={cn("[&_svg]-h-3.5 h-7 w-7 rounded-[6px] [&_svg]:w-3.5", className)} onClick={function () {
            navigator.clipboard.writeText(code);
            trackEvent({
                name: event,
                properties: {
                    name: name,
                },
            });
            setHasCopied(true);
        }} {...props}>
          <span className="sr-only">Copy</span>
          {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
        </Button>
      </TooltipTrigger>
      <TooltipContent className="bg-black text-white">Copy code</TooltipContent>
    </Tooltip>);
}
