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
import { forwardRef } from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "@/lib/utils";
var DrawerTrigger = DrawerPrimitive.Trigger;
var DrawerContent = forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (<DrawerPrimitive.Portal>
    <DrawerPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80"/>
    <DrawerPrimitive.Content ref={ref} className={cn("fixed inset-x-0 bottom-0 z-50 mt-24 h-[96%] rounded-t-[10px] bg-background", className)} {...props}>
      <div className="absolute left-1/2 top-3 h-2 w-[100px] translate-x-[-50%] rounded-full bg-muted"/>
      {children}
    </DrawerPrimitive.Content>
  </DrawerPrimitive.Portal>);
});
DrawerContent.displayName = "DrawerContent";
export { DrawerTrigger, DrawerContent };
