import * as React from "react";
interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    extractClassname?: boolean;
    extractedClassNames?: string;
    align?: "center" | "start" | "end";
    description?: string;
    hideCode?: boolean;
    type?: "block" | "component" | "example";
}
export declare function ComponentPreview({ name, type, children, className, extractClassname, extractedClassNames, align, description, hideCode, ...props }: ComponentPreviewProps): React.JSX.Element;
export {};
//# sourceMappingURL=component-preview.d.ts.map