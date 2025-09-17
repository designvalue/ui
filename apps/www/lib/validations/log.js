import { z } from "zod";
export var logSchema = z.object({
    event: z.enum(["copy_primitive"]),
    data: z.record(z.string()),
});
