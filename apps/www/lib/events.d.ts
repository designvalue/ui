import { z } from "zod";
declare const eventSchema: z.ZodObject<{
    name: z.ZodEnum<["copy_npm_command", "copy_usage_import_code", "copy_usage_code", "copy_primitive_code", "copy_theme_code", "copy_block_code", "copy_chunk_code", "enable_lift_mode", "copy_chart_code", "copy_chart_theme", "copy_chart_data", "copy_color"]>;
    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodNull]>>>;
}, "strip", z.ZodTypeAny, {
    name: "copy_npm_command" | "copy_usage_import_code" | "copy_usage_code" | "copy_primitive_code" | "copy_theme_code" | "copy_block_code" | "copy_chunk_code" | "enable_lift_mode" | "copy_chart_code" | "copy_chart_theme" | "copy_chart_data" | "copy_color";
    properties?: Record<string, string | number | boolean | null> | undefined;
}, {
    name: "copy_npm_command" | "copy_usage_import_code" | "copy_usage_code" | "copy_primitive_code" | "copy_theme_code" | "copy_block_code" | "copy_chunk_code" | "enable_lift_mode" | "copy_chart_code" | "copy_chart_theme" | "copy_chart_data" | "copy_color";
    properties?: Record<string, string | number | boolean | null> | undefined;
}>;
export type Event = z.infer<typeof eventSchema>;
export declare function trackEvent(input: Event): void;
export {};
//# sourceMappingURL=events.d.ts.map