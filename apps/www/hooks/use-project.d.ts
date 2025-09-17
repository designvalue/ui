type Project = {
    blocks: string[];
};
export declare function useProject(): {
    project: Project;
    addBlock: (block: string) => void;
    removeBlock: (block: string) => void;
    resetProject: () => void;
    hasBlock: (block: string) => boolean;
    isAdded: boolean;
};
export {};
//# sourceMappingURL=use-project.d.ts.map