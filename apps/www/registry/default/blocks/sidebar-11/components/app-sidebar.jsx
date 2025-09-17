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
import { ChevronRight, File, Folder } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/registry/default/ui/collapsible";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarRail, } from "@/registry/default/ui/sidebar";
// This is sample data.
const data = {
    changes: [
        {
            file: "README.md",
            state: "M",
        },
        {
            file: "api/hello/route.ts",
            state: "U",
        },
        {
            file: "app/layout.tsx",
            state: "M",
        },
    ],
    tree: [
        [
            "app",
            [
                "api",
                ["hello", ["route.ts"]],
                "page.tsx",
                "layout.tsx",
                ["blog", ["page.tsx"]],
            ],
        ],
        [
            "components",
            ["ui", "button.tsx", "card.tsx"],
            "header.tsx",
            "footer.tsx",
        ],
        ["lib", ["util.ts"]],
        ["public", "favicon.ico", "vercel.svg"],
        ".eslintrc.json",
        ".gitignore",
        "next.config.js",
        "tailwind.config.js",
        "package.json",
        "README.md",
    ],
};
export function AppSidebar(_a) {
    var props = __rest(_a, []);
    return (<Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Changes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.changes.map((item, index) => (<SidebarMenuItem key={index}>
                  <SidebarMenuButton>
                    <File />
                    {item.file}
                  </SidebarMenuButton>
                  <SidebarMenuBadge>{item.state}</SidebarMenuBadge>
                </SidebarMenuItem>))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Files</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.tree.map((item, index) => (<Tree key={index} item={item}/>))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>);
}
function Tree({ item }) {
    const [name, ...items] = Array.isArray(item) ? item : [item];
    if (!items.length) {
        return (<SidebarMenuButton isActive={name === "button.tsx"} className="data-[active=true]:bg-transparent">
        <File />
        {name}
      </SidebarMenuButton>);
    }
    return (<SidebarMenuItem>
      <Collapsible className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90" defaultOpen={name === "components" || name === "ui"}>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <ChevronRight className="transition-transform"/>
            <Folder />
            {name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items.map((subItem, index) => (<Tree key={index} item={subItem}/>))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>);
}
