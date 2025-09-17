import { registryItemSchema } from "shadcn/schema";
import { z } from "zod";
import { Style } from "@/registry/registry-styles";
export declare function getAllBlockIds(types?: z.infer<typeof registryItemSchema>["type"][], categories?: string[], style?: Style["name"]): Promise<string[]>;
//# sourceMappingURL=blocks.d.ts.map