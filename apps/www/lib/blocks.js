"use server";
import { registryItemSchema } from "shadcn/schema";
import { z } from "zod";
export async function getAllBlockIds(types = [
    "registry:block",
    "registry:internal",
], categories = [], style = "new-york") {
    const { Index } = await import("@/__registry__");
    const index = z.record(registryItemSchema).parse(Index[style]);
    return Object.values(index)
        .filter((block) => {
        var _a;
        return types.includes(block.type) &&
            (categories.length === 0 ||
                ((_a = block.categories) === null || _a === void 0 ? void 0 : _a.some((category) => categories.includes(category)))) &&
            !block.name.startsWith("chart-");
    })
        .map((block) => block.name);
}
