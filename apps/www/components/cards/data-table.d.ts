import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
export type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
};
export declare const columns: ColumnDef<Payment>[];
export declare function CardsDataTable(): React.JSX.Element;
//# sourceMappingURL=data-table.d.ts.map