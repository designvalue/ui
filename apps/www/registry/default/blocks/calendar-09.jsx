"use client";
import * as React from "react";
import { Calendar } from "@/registry/default/ui/calendar";
export default function Calendar09() {
    const [dateRange, setDateRange] = React.useState({
        from: new Date(2025, 5, 17),
        to: new Date(2025, 5, 20),
    });
    return (<Calendar mode="range" defaultMonth={dateRange === null || dateRange === void 0 ? void 0 : dateRange.from} selected={dateRange} onSelect={setDateRange} numberOfMonths={2} disabled={{ dayOfWeek: [0, 6] }} className="rounded-lg border shadow-sm" excludeDisabled/>);
}
