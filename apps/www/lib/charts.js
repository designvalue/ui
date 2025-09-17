export function themeColorsToCssVariables(colors) {
    var cssVars = colors
        ? Object.fromEntries(Object.entries(colors).map(function (_a) {
            var name = _a[0], value = _a[1];
            if (value === undefined)
                return [];
            var cssName = themeColorNameToCssVariable(name);
            return [cssName, value];
        }))
        : {};
    // for (const key of Array.from({ length: 5 }, (_, index) => index)) {
    //   cssVars[`--chart-${key + 1}`] =
    //     cssVars[`--chart-${key + 1}`] ||
    //     `${cssVars["--primary"]} / ${100 - key * 20}%`
    // }
    return cssVars;
}
export function themeColorNameToCssVariable(name) {
    return "--".concat(name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase());
}
