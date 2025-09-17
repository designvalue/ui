"use client";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from "@/registry/new-york/ui/sidebar";
export function NavMain({ items, }) {
    return (<SidebarMenu>
      {items.map((item) => (<SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={item.isActive}>
            <a href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>))}
    </SidebarMenu>);
}
