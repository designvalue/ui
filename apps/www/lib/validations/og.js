import { z } from "zod";
export var ogImageSchema = z.object({
    heading: z.string(),
    type: z.string(),
    mode: z.enum(["light", "dark"]).default("dark"),
});
