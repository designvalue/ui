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
import * as React from "react";
import { useConfig } from "@/hooks/use-config";
import { Tabs } from "@/registry/default/ui/tabs";
export function CodeTabs(_a) {
    var children = _a.children;
    var _b = useConfig(), config = _b[0], setConfig = _b[1];
    var installationType = React.useMemo(function () {
        return config.installationType || "cli";
    }, [config]);
    return (<Tabs value={installationType} onValueChange={function (value) {
            return setConfig(__assign(__assign({}, config), { installationType: value }));
        }} className="relative mt-6 w-full">
      {children}
    </Tabs>);
}
