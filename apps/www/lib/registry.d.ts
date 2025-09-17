import { Style } from "@/registry/registry-styles";
export declare const DEFAULT_REGISTRY_STYLE = "new-york";
export declare function getRegistryComponent(name: string, style?: Style["name"]): any;
export declare function getRegistryItem(name: string, style?: Style["name"]): Promise<{
    type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:page" | "registry:file" | "registry:theme" | "registry:style" | "registry:item" | "registry:example" | "registry:internal";
    name: string;
    tailwind?: {
        config?: {
            content?: string[] | undefined;
            theme?: Record<string, any> | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    } | undefined;
    $schema?: string | undefined;
    extends?: string | undefined;
    title?: string | undefined;
    author?: string | undefined;
    description?: string | undefined;
    dependencies?: string[] | undefined;
    devDependencies?: string[] | undefined;
    registryDependencies?: string[] | undefined;
    files?: ({
        type: "registry:page" | "registry:file";
        path: string;
        target: string;
        content?: string | undefined;
    } | {
        type: "registry:lib" | "registry:block" | "registry:component" | "registry:ui" | "registry:hook" | "registry:theme" | "registry:style" | "registry:item" | "registry:example" | "registry:internal";
        path: string;
        content?: string | undefined;
        target?: string | undefined;
    })[] | undefined;
    cssVars?: {
        theme?: Record<string, string> | undefined;
        light?: Record<string, string> | undefined;
        dark?: Record<string, string> | undefined;
    } | undefined;
    css?: Record<string, any> | undefined;
    envVars?: Record<string, string> | undefined;
    meta?: Record<string, any> | undefined;
    docs?: string | undefined;
    categories?: string[] | undefined;
} | null>;
export declare function fixImport(content: string): string;
export type FileTree = {
    name: string;
    path?: string;
    children?: FileTree[];
};
export declare function createFileTreeForRegistryItemFiles(files: Array<{
    path: string;
    target?: string;
}>): FileTree[];
//# sourceMappingURL=registry.d.ts.map