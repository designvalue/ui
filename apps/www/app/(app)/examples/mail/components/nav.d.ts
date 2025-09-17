import { LucideIcon } from "lucide-react";
interface NavProps {
    isCollapsed: boolean;
    links: {
        title: string;
        label?: string;
        icon: LucideIcon;
        variant: "default" | "ghost";
    }[];
}
export declare function Nav({ links, isCollapsed }: NavProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=nav.d.ts.map