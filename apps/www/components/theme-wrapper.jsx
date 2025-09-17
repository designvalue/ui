"use client";
import { cn } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
export function ThemeWrapper(_a) {
    var defaultTheme = _a.defaultTheme, children = _a.children, className = _a.className;
    var config = useConfig()[0];
    return (<div className={cn("theme-".concat(defaultTheme || config.theme), "w-full", className)} style={{
            "--radius": "".concat(defaultTheme ? 0.5 : config.radius, "rem"),
        }}>
      {children}
    </div>);
}
