"use client";
import * as React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { useConfig } from "@/hooks/use-config";
export function ThemeSwitcher() {
    var config = useConfig()[0];
    var segment = useSelectedLayoutSegment();
    React.useEffect(function () {
        document.body.classList.forEach(function (className) {
            if (className.match(/^theme.*/)) {
                document.body.classList.remove(className);
            }
        });
        var theme = segment === "themes" ? config.theme : null;
        if (theme) {
            return document.body.classList.add("theme-".concat(theme));
        }
    }, [segment, config]);
    return null;
}
