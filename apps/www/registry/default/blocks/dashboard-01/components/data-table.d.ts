import * as React from "react";
import { z } from "zod";
export declare const schema: z.ZodObject<{
    id: z.ZodNumber;
    header: z.ZodString;
    type: z.ZodString;
    status: z.ZodString;
    target: z.ZodString;
    limit: z.ZodString;
    reviewer: z.ZodString;
}, "strip", z.ZodTypeAny, {
    target: string;
    header: string;
    id: number;
    type: string;
    status: string;
    limit: string;
    reviewer: string;
}, {
    target: string;
    header: string;
    id: number;
    type: string;
    status: string;
    limit: string;
    reviewer: string;
}>;
export declare function DataTable({ data: initialData, }: {
    data: z.infer<typeof schema>[];
}): React.JSX.Element;
//# sourceMappingURL=data-table.d.ts.map