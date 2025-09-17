import { Doc } from "contentlayer/generated";
import { NavItem, NavItemWithChildren } from "types/nav";
interface DocsPagerProps {
    doc: Doc;
}
export declare function DocsPager({ doc }: DocsPagerProps): import("react").JSX.Element | null;
export declare function getPagerForDoc(doc: Doc): {
    prev: NavItem | null;
    next: NavItem | null;
};
export declare function flatten(links: NavItemWithChildren[]): NavItem[];
export {};
//# sourceMappingURL=pager.d.ts.map