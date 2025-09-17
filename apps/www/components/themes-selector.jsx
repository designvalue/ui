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
import { useTheme } from "next-themes";
import { THEMES } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useThemesConfig } from "@/hooks/use-themes-config";
import { Skeleton } from "@/registry/new-york/ui/skeleton";
import { ToggleGroup, ToggleGroupItem, } from "@/registry/new-york/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger, } from "@/registry/new-york/ui/tooltip";
export function ThemesSwitcher(_a) {
    var _b = _a.themes, themes = _b === void 0 ? THEMES : _b, className = _a.className;
    var mode = useTheme().theme;
    var _c = React.useState(false), mounted = _c[0], setMounted = _c[1];
    var _d = useThemesConfig(), themesConfig = _d.themesConfig, setThemesConfig = _d.setThemesConfig;
    var activeTheme = themesConfig.activeTheme;
    var isDesktop = useMediaQuery("(min-width: 1024px)");
    React.useEffect(function () {
        setMounted(true);
    }, []);
    if (!mounted) {
        return (<div className={cn("flex items-center justify-center gap-0.5 py-4 lg:flex-col lg:justify-start lg:gap-1", className)}>
        {themes.map(function (theme) { return (<div key={theme.id} className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-transparent">
            <Skeleton className="h-6 w-6 rounded-sm"/>
          </div>); })}
      </div>);
    }
    return (<ToggleGroup type="single" value={activeTheme.name} onValueChange={function (value) {
            var theme = themes.find(function (theme) { return theme.name === value; });
            if (!theme) {
                return;
            }
            setThemesConfig(__assign(__assign({}, themesConfig), { activeTheme: theme }));
        }} className={cn("flex items-center justify-center gap-0.5 py-4 lg:flex-col lg:justify-start lg:gap-1", className)}>
      {themes.map(function (theme) {
            var isActive = theme.name === activeTheme.name;
            var isDarkTheme = ["Midnight"].includes(theme.name);
            var cssVars = mounted && mode === "dark" ? theme.cssVars.dark : theme.cssVars.light;
            return (<Tooltip key={theme.name}>
            <TooltipTrigger asChild>
              <ToggleGroupItem value={theme.name} className={cn("group flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-transparent p-0 hover:bg-transparent focus-visible:bg-transparent aria-checked:border-[--color-1]", mounted && isDarkTheme && mode !== "dark" ? "invert-[1]" : "")} style={__assign(__assign({}, cssVars), { "--color-1": "hsl(var(--chart-1))", "--color-2": "hsl(var(--chart-2))", "--color-3": "hsl(var(--chart-3))", "--color-4": "hsl(var(--chart-4))" })}>
                <div className="h-6 w-6 overflow-hidden rounded-sm">
                  <div className={cn("grid h-12 w-12 -translate-x-1/4 -translate-y-1/4 grid-cols-2 overflow-hidden rounded-md transition-all ease-in-out group-hover:rotate-45", isActive ? "rotate-45 group-hover:rotate-0" : "rotate-0")}>
                    <span className="flex h-6 w-6 bg-[--color-1]"/>
                    <span className="flex h-6 w-6 bg-[--color-2]"/>
                    <span className="flex h-6 w-6 bg-[--color-3]"/>
                    <span className="flex h-6 w-6 bg-[--color-4]"/>
                    <span className="sr-only">{theme.name}</span>
                  </div>
                </div>
              </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent side={isDesktop ? "left" : "top"} className="bg-black text-white">
              {theme.name}
            </TooltipContent>
          </Tooltip>);
        })}
    </ToggleGroup>);
}
