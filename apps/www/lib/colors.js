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
import { z } from "zod";
import { colors } from "@/registry/registry-colors";
var colorSchema = z.object({
    name: z.string(),
    id: z.string(),
    scale: z.number(),
    className: z.string(),
    hex: z.string(),
    rgb: z.string(),
    hsl: z.string(),
    foreground: z.string(),
    oklch: z.string(),
});
var colorPaletteSchema = z.object({
    name: z.string(),
    colors: z.array(colorSchema),
});
export function getColorFormat(color) {
    return {
        className: "bg-".concat(color.name, "-100"),
        hex: color.hex,
        rgb: color.rgb,
        hsl: color.hsl,
        oklch: color.oklch,
    };
}
export function getColors() {
    var tailwindColors = colorPaletteSchema.array().parse(Object.entries(colors)
        .map(function (_a) {
        var name = _a[0], color = _a[1];
        if (!Array.isArray(color)) {
            return null;
        }
        return {
            name: name,
            colors: color.map(function (color) {
                var rgb = color.rgb.replace(/^rgb\((\d+),(\d+),(\d+)\)$/, "$1 $2 $3");
                return __assign(__assign({}, color), { name: name, id: "".concat(name, "-").concat(color.scale), className: "".concat(name, "-").concat(color.scale), rgb: rgb, hsl: color.hsl.replace(/^hsl\(([\d.]+),([\d.]+%),([\d.]+%)\)$/, "$1 $2 $3"), oklch: color.oklch.replace(/^oklch\(([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\)$/, "$1 $2 $3"), foreground: getForegroundFromBackground(rgb) });
            }),
        };
    })
        .filter(Boolean));
    return tailwindColors;
}
function getForegroundFromBackground(rgb) {
    var _a = rgb.split(" ").map(Number), r = _a[0], g = _a[1], b = _a[2];
    function toLinear(number) {
        var base = number / 255;
        return base <= 0.04045
            ? base / 12.92
            : Math.pow((base + 0.055) / 1.055, 2.4);
    }
    var luminance = 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
    return luminance > 0.179 ? "#000" : "#fff";
}
