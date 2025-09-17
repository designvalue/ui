import React from "react";
import { type LucideIcon } from "lucide-react";
import { SidebarGroup } from "@/registry/default/ui/sidebar";
export declare function NavSecondary({ items, ...props }: {
    items: {
        title: string;
        url: string;
        icon: LucideIcon;
        badge?: React.ReactNode;
    }[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>): React.JSX.Element;
//# sourceMappingURL=nav-secondary.d.ts.map