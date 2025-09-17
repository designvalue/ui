"use client";
import * as React from "react";
import { Calendar } from "@/registry/default/ui/calendar";
export default function Calendar06() {
    const [dateRange, setDateRange] = React.useState({
        from: new Date(2025, 5, 12),
        to: new Date(2025, 5, 26),
    });
    return (<div className="flex min-w-0 flex-col gap-2">
      <Calendar mode="range" defaultMonth={dateRange === null || dateRange === void 0 ? void 0 : dateRange.from} selected={dateRange} onSelect={setDateRange} numberOfMonths={1} min={5} className="rounded-lg border shadow-sm"/>
      <div className="text-muted-foreground text-center text-xs">
        A minimum of 5 days is required
      </div>
    </div>);
}
