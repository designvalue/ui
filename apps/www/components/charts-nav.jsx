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
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/registry/new-york/ui/scroll-area";
var links = [
    {
        name: "All Charts",
        href: "/charts",
    },
    {
        name: "Area Chart",
        href: "/charts#area-chart",
    },
    {
        name: "Bar Chart",
        href: "/charts#bar-chart",
    },
    {
        name: "Line Chart",
        href: "/charts#line-chart",
    },
    {
        name: "Pie Chart",
        href: "/charts#pie-chart",
    },
    {
        name: "Radar Chart",
        href: "/charts#radar-chart",
    },
    {
        name: "Radial Chart",
        href: "/charts#radial-chart",
    },
    {
        name: "Tooltip",
        href: "/charts#tooltip",
    },
];
export function ChartsNav(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var pathname = usePathname();
    return (<ScrollArea className="max-w-[600px] lg:max-w-none">
      <div className={cn("flex items-center", className)} {...props}>
        {links.map(function (example, index) { return (<Link href={example.href} key={example.href} className={cn("flex h-7 shrink-0 items-center justify-center rounded-full px-4 text-center text-sm font-medium transition-colors hover:text-primary", (pathname === null || pathname === void 0 ? void 0 : pathname.startsWith(example.href)) ||
                (index === 0 && pathname === "/charts")
                ? "bg-muted text-primary"
                : "text-muted-foreground")}>
            {example.name}
          </Link>); })}
      </div>
      <ScrollBar orientation="horizontal" className="invisible"/>
    </ScrollArea>);
}
