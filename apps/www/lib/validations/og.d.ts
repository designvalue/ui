import { z } from "zod";
export declare const ogImageSchema: z.ZodObject<{
    heading: z.ZodString;
    type: z.ZodString;
    mode: z.ZodDefault<z.ZodEnum<["light", "dark"]>>;
}, "strip", z.ZodTypeAny, {
    type: string;
    mode: "light" | "dark";
    heading: string;
}, {
    type: string;
    heading: string;
    mode?: "light" | "dark" | undefined;
}>;
//# sourceMappingURL=og.d.ts.map