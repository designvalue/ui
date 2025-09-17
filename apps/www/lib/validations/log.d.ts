import { z } from "zod";
export declare const logSchema: z.ZodObject<{
    event: z.ZodEnum<["copy_primitive"]>;
    data: z.ZodRecord<z.ZodString, z.ZodString>;
}, "strip", z.ZodTypeAny, {
    data: Record<string, string>;
    event: "copy_primitive";
}, {
    data: Record<string, string>;
    event: "copy_primitive";
}>;
//# sourceMappingURL=log.d.ts.map