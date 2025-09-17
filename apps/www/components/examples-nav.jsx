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
var examples = [
    {
        name: "Mail",
        href: "/examples/mail",
        code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/mail",
        hidden: false,
    },
    {
        name: "Dashboard",
        href: "/examples/dashboard",
        code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/dashboard",
        hidden: false,
    },
    {
        name: "Tasks",
        href: "/examples/tasks",
        code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/tasks",
        hidden: false,
    },
    {
        name: "Playground",
        href: "/examples/playground",
        code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/playground",
        hidden: false,
    },
    {
        name: "Forms",
        href: "/examples/forms",
        code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/forms",
        hidden: false,
    },
    {
        name: "Music",
        href: "/examples/music",
        code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/music",
        hidden: false,
    },
    {
        name: "Authentication",
        href: "/examples/authentication",
        code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/authentication",
        hidden: false,
    },
];
export function ExamplesNav(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var pathname = usePathname();
    return (<div className="relative">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn("flex items-center", className)} {...props}>
          <ExampleLink example={{ name: "Examples", href: "/", code: "", hidden: false }} isActive={pathname === "/"}/>
          {examples.map(function (example) {
            var _a;
            return (<ExampleLink key={example.href} example={example} isActive={(_a = pathname === null || pathname === void 0 ? void 0 : pathname.startsWith(example.href)) !== null && _a !== void 0 ? _a : false}/>);
        })}
        </div>
        <ScrollBar orientation="horizontal" className="invisible"/>
      </ScrollArea>
    </div>);
}
function ExampleLink(_a) {
    var example = _a.example, isActive = _a.isActive;
    if (example.hidden) {
        return null;
    }
    return (<Link href={example.href} key={example.href} className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[active=true]:bg-muted data-[active=true]:text-primary" data-active={isActive}>
      {example.name}
    </Link>);
}
