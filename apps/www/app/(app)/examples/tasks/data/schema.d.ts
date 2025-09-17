import { z } from "zod";
export declare const taskSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    status: z.ZodString;
    label: z.ZodString;
    priority: z.ZodString;
}, "strip", z.ZodTypeAny, {
    label: string;
    title: string;
    id: string;
    status: string;
    priority: string;
}, {
    label: string;
    title: string;
    id: string;
    status: string;
    priority: string;
}>;
export type Task = z.infer<typeof taskSchema>;
//# sourceMappingURL=schema.d.ts.map