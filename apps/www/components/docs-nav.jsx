"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
export function DocsNav(_a) {
    var config = _a.config;
    var pathname = usePathname();
    var items = config.sidebarNav;
    return items.length ? (<div className="flex flex-col gap-6">
      {items.map(function (item, index) {
            var _a;
            return (<div key={index} className="flex flex-col gap-1">
          <h4 className="rounded-md px-2 py-1 text-sm font-medium">
            {item.title}{" "}
            {item.label && (<span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs font-normal leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>)}
          </h4>
          {((_a = item === null || item === void 0 ? void 0 : item.items) === null || _a === void 0 ? void 0 : _a.length) && (<DocsNavItems items={item.items} pathname={pathname}/>)}
        </div>);
        })}
    </div>) : null;
}
function DocsNavItems(_a) {
    var items = _a.items, pathname = _a.pathname;
    return (items === null || items === void 0 ? void 0 : items.length) ? (<div className="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
      {items.map(function (item, index) {
            return item.href && !item.disabled ? (<Link key={index} href={item.href} className={cn("group relative flex h-8 w-full items-center rounded-lg px-2 after:absolute after:inset-x-0 after:inset-y-[-2px]  after:rounded-lg hover:bg-accent hover:text-accent-foreground ", item.disabled && "cursor-not-allowed opacity-60", pathname === item.href
                    ? "bg-accent font-medium text-accent-foreground"
                    : "font-normal text-foreground")} target={item.external ? "_blank" : ""} rel={item.external ? "noreferrer" : ""}>
            {item.title}
            {item.label && (<span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>)}
          </Link>) : (<span key={index} className={cn("flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline", item.disabled && "cursor-not-allowed opacity-60")}>
            {item.title}
            {item.label && (<span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>)}
          </span>);
        })}
    </div>) : null;
}
