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
import { Check, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useProject } from "@/hooks/use-project";
import { Button } from "@/registry/new-york/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, } from "@/registry/new-york/ui/tooltip";
export function ProjectAddButton(_a) {
    var name = _a.name, className = _a.className, props = __rest(_a, ["name", "className"]);
    var _b = useProject(), addBlock = _b.addBlock, isAdded = _b.isAdded;
    return (<Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="sm" className={cn("rounded-sm", className)} onClick={function () {
            addBlock(name);
        }} {...props}>
          {isAdded ? <Check /> : <PlusCircle />}
        </Button>
      </TooltipTrigger>
      <TooltipContent sideOffset={10}>Add to Project</TooltipContent>
    </Tooltip>);
}
