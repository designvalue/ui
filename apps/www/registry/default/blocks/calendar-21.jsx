"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
import { Calendar, CalendarDayButton } from "@/registry/default/ui/calendar";
export default function Calendar21() {
    const [range, setRange] = React.useState({
        from: new Date(2025, 5, 12),
        to: new Date(2025, 5, 17),
    });
    return (<Calendar mode="range" defaultMonth={range === null || range === void 0 ? void 0 : range.from} selected={range} onSelect={setRange} numberOfMonths={1} captionLayout="dropdown" className="rounded-lg border shadow-sm [--cell-size:2.75rem] md:[--cell-size:3rem]" formatters={{
            formatMonthDropdown: (date) => {
                return date.toLocaleString("default", { month: "long" });
            },
        }} components={{
            DayButton: (_a) => {
                var { children, modifiers, day } = _a, props = __rest(_a, ["children", "modifiers", "day"]);
                const isWeekend = day.date.getDay() === 0 || day.date.getDay() === 6;
                return (<CalendarDayButton day={day} modifiers={modifiers} {...props}>
              {children}
              {!modifiers.outside && <span>{isWeekend ? "$220" : "$100"}</span>}
            </CalendarDayButton>);
            },
        }}/>);
}
