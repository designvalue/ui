"use client";
import { useThemesConfig } from "@/hooks/use-themes-config";
export function ThemesStyle() {
    var themesConfig = useThemesConfig().themesConfig;
    if (!themesConfig.activeTheme) {
        return null;
    }
    return (<style>
      {"\n.themes-wrapper,\n[data-chart] {\n  ".concat(Object.entries(themesConfig.activeTheme.cssVars.light)
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return "".concat(key, ": ").concat(value, ";");
        })
            .join("\n"), "\n}\n\n.dark .themes-wrapper,\n.dark [data-chart] {\n  ").concat(Object.entries(themesConfig.activeTheme.cssVars.dark)
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return "".concat(key, ": ").concat(value, ";");
        })
            .join("\n"), "\n}\n  ")}
    </style>);
}
