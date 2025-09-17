"use client";
import * as React from "react";
import { useConfig } from "@/hooks/use-config";
export function StyleWrapper(_a) {
    var styleName = _a.styleName, children = _a.children;
    var config = useConfig()[0];
    if (!styleName || config.style === styleName) {
        return <>{children}</>;
    }
    return null;
}
