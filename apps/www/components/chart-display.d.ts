import * as React from "react";
import { registryItemSchema } from "shadcn/schema";
import { z } from "zod";
export type Chart = z.infer<typeof registryItemSchema> & {
    highlightedCode: string;
};
export declare function ChartDisplay({ name, children, className, }: {
    name: string;
} & React.ComponentProps<"div">): Promise<React.JSX.Element | null>;
//# sourceMappingURL=chart-display.d.ts.map