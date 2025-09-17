"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea, ScrollBar } from "@/registry/new-york/ui/scroll-area";
import { registryCategories } from "@/registry/registry-categories";
export function BlocksNav() {
    var pathname = usePathname();
    return (<div className="relative overflow-hidden">
      <ScrollArea className="max-w-none">
        <div className="flex items-center">
          <BlocksNavLink category={{ name: "Featured", slug: "", hidden: false }} isActive={pathname === "/blocks"}/>
          {registryCategories.map(function (category) { return (<BlocksNavLink key={category.slug} category={category} isActive={pathname === "/blocks/".concat(category.slug)}/>); })}
        </div>
        <ScrollBar orientation="horizontal" className="invisible"/>
      </ScrollArea>
    </div>);
}
function BlocksNavLink(_a) {
    var category = _a.category, isActive = _a.isActive;
    if (category.hidden) {
        return null;
    }
    return (<Link href={"/blocks/".concat(category.slug)} key={category.slug} className="flex h-7 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-4 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:bg-muted data-[active=true]:text-foreground" data-active={isActive}>
      {category.name}
    </Link>);
}
