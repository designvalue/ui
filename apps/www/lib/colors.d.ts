import { z } from "zod";
declare const colorPaletteSchema: z.ZodObject<{
    name: z.ZodString;
    colors: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        id: z.ZodString;
        scale: z.ZodNumber;
        className: z.ZodString;
        hex: z.ZodString;
        rgb: z.ZodString;
        hsl: z.ZodString;
        foreground: z.ZodString;
        oklch: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        className: string;
        id: string;
        name: string;
        scale: number;
        foreground: string;
        hex: string;
        rgb: string;
        hsl: string;
        oklch: string;
    }, {
        className: string;
        id: string;
        name: string;
        scale: number;
        foreground: string;
        hex: string;
        rgb: string;
        hsl: string;
        oklch: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    colors: {
        className: string;
        id: string;
        name: string;
        scale: number;
        foreground: string;
        hex: string;
        rgb: string;
        hsl: string;
        oklch: string;
    }[];
}, {
    name: string;
    colors: {
        className: string;
        id: string;
        name: string;
        scale: number;
        foreground: string;
        hex: string;
        rgb: string;
        hsl: string;
        oklch: string;
    }[];
}>;
export type ColorPalette = z.infer<typeof colorPaletteSchema>;
export declare function getColorFormat(color: Color): {
    className: string;
    hex: string;
    rgb: string;
    hsl: string;
    oklch: string;
};
export type ColorFormat = keyof ReturnType<typeof getColorFormat>;
export declare function getColors(): {
    name: string;
    colors: {
        className: string;
        id: string;
        name: string;
        scale: number;
        foreground: string;
        hex: string;
        rgb: string;
        hsl: string;
        oklch: string;
    }[];
}[];
export type Color = ReturnType<typeof getColors>[number]["colors"][number];
export {};
//# sourceMappingURL=colors.d.ts.map