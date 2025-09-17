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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { useMetaColor } from "@/hooks/use-meta-color";
import { Button } from "@/registry/new-york/ui/button";
import { Drawer, DrawerContent, DrawerTrigger, } from "@/registry/new-york/ui/drawer";
export function MobileNav() {
    var _a;
    var _b = React.useState(false), open = _b[0], setOpen = _b[1];
    var _c = useMetaColor(), setMetaColor = _c.setMetaColor, metaColor = _c.metaColor;
    var onOpenChange = React.useCallback(function (open) {
        setOpen(open);
        setMetaColor(open ? "#09090b" : metaColor);
    }, [setMetaColor, metaColor]);
    return (<Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="h-8 w-full gap-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="!size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"/>
          </svg>
          <span className="sr-only">Toggle Menu</span>
          <span className="flex h-8 flex-1 items-center justify-between rounded-md border bg-muted/50 px-2 text-sm font-normal text-muted-foreground shadow-none">
            Search documentation...
          </span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[80svh] p-0">
        <div className="overflow-auto p-6">
          <div className="flex flex-col space-y-3">
            {(_a = docsConfig.mainNav) === null || _a === void 0 ? void 0 : _a.map(function (item) {
            return item.href && (<MobileLink key={item.href} href={item.href} onOpenChange={setOpen}>
                    {item.title}
                  </MobileLink>);
        })}
          </div>
          <div className="flex flex-col space-y-2">
            {docsConfig.sidebarNav.map(function (item, index) {
            var _a;
            return (<div key={index} className="flex flex-col gap-4 pt-6">
                <h4 className="text-xl font-medium">{item.title}</h4>
                {((_a = item === null || item === void 0 ? void 0 : item.items) === null || _a === void 0 ? void 0 : _a.length) &&
                    item.items.map(function (item) { return (<React.Fragment key={item.href}>
                      {!item.disabled &&
                            (item.href ? (<MobileLink href={item.href} onOpenChange={setOpen} className="opacity-80">
                            {item.title}
                            {item.label && (<span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                {item.label}
                              </span>)}
                          </MobileLink>) : (item.title))}
                    </React.Fragment>); })}
              </div>);
        })}
          </div>
        </div>
      </DrawerContent>
    </Drawer>);
}
function MobileLink(_a) {
    var href = _a.href, onOpenChange = _a.onOpenChange, className = _a.className, children = _a.children, props = __rest(_a, ["href", "onOpenChange", "className", "children"]);
    var router = useRouter();
    return (<Link href={href} onClick={function () {
            router.push(href.toString());
            onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(false);
        }} className={cn("text-[1.15rem]", className)} {...props}>
      {children}
    </Link>);
}
