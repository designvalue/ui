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
import { buttonVariants } from "@/registry/new-york/ui/button";
export function SidebarNav(_a) {
    var className = _a.className, items = _a.items, props = __rest(_a, ["className", "items"]);
    var pathname = usePathname();
    return (<nav className={cn("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1", className)} {...props}>
      {items.map(function (item) { return (<Link key={item.href} href={item.href} className={cn(buttonVariants({ variant: "ghost" }), pathname === item.href
                ? "bg-muted hover:bg-muted"
                : "hover:bg-transparent hover:underline", "justify-start")}>
          {item.title}
        </Link>); })}
    </nav>);
}
