import * as React from "react";
import { ImperativePanelHandle } from "react-resizable-panels";
import { registryItemFileSchema, registryItemSchema } from "shadcn/schema";
import { z } from "zod";
import { createFileTreeForRegistryItemFiles } from "@/lib/registry";
import { Style } from "@/registry/registry-styles";
type BlockViewerContext = {
    item: z.infer<typeof registryItemSchema>;
    view: "code" | "preview";
    setView: (view: "code" | "preview") => void;
    style?: Style["name"];
    setStyle: (style: Style["name"]) => void;
    activeFile: string | null;
    setActiveFile: (file: string) => void;
    resizablePanelRef: React.RefObject<ImperativePanelHandle> | null;
    tree: ReturnType<typeof createFileTreeForRegistryItemFiles> | null;
    highlightedFiles: (z.infer<typeof registryItemFileSchema> & {
        highlightedContent: string;
    })[] | null;
};
declare const BlockViewerContext: React.Context<BlockViewerContext | null>;
export declare function BlockViewerFileTree(): React.JSX.Element | null;
declare function BlockViewer({ item, tree, highlightedFiles, ...props }: Pick<BlockViewerContext, "item" | "tree" | "highlightedFiles">): React.JSX.Element;
export { BlockViewer };
//# sourceMappingURL=block-viewer.d.ts.map