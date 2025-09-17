interface Item {
    title: string;
    url: string;
    items?: Item[];
}
interface Items {
    items?: Item[];
}
export type TableOfContents = Items;
export declare function getTableOfContents(content: string): Promise<TableOfContents>;
export {};
//# sourceMappingURL=toc.d.ts.map