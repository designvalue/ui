import * as React from "react";
import { useTheme } from "next-themes";
import { META_THEME_COLORS } from "@/config/site";
export function useMetaColor() {
    var resolvedTheme = useTheme().resolvedTheme;
    var metaColor = React.useMemo(function () {
        return resolvedTheme !== "dark"
            ? META_THEME_COLORS.light
            : META_THEME_COLORS.dark;
    }, [resolvedTheme]);
    var setMetaColor = React.useCallback(function (color) {
        var _a;
        (_a = document
            .querySelector('meta[name="theme-color"]')) === null || _a === void 0 ? void 0 : _a.setAttribute("content", color);
    }, []);
    return {
        metaColor: metaColor,
        setMetaColor: setMetaColor,
    };
}
