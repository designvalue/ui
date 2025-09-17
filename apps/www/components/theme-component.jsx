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
import { Index } from "@/__registry__";
import { cn } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import { Icons } from "@/components/icons";
export function ThemeComponent(_a) {
    var name = _a.name, props = __rest(_a, ["name"]);
    var config = useConfig()[0];
    var Preview = React.useMemo(function () {
        var _a;
        var Component = (_a = Index[config.style][name]) === null || _a === void 0 ? void 0 : _a.component;
        if (!Component) {
            return (<p className="text-sm text-muted-foreground">
          Component{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>);
        }
        return <Component />;
    }, [name, config.style]);
    return (<div className={cn("relative")} {...props}>
      <React.Suspense fallback={<div className="flex items-center text-sm text-muted-foreground">
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>
            Loading...
          </div>}>
        {Preview}
      </React.Suspense>
    </div>);
}
