interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string;
        title: string;
    }[];
}
export declare function SidebarNav({ className, items, ...props }: SidebarNavProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=sidebar-nav.d.ts.map