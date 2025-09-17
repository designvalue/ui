import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
export type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
};
export declare const columns: ColumnDef<Payment>[];
export default function DataTableDemo(): React.JSX.Element;
//# sourceMappingURL=data-table-demo.d.ts.map