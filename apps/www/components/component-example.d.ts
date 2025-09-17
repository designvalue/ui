import * as React from "react";
interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
    extractClassname?: boolean;
    extractedClassNames?: string;
    align?: "center" | "start" | "end";
    src?: string;
}
export declare function ComponentExample({ children, className, extractClassname, extractedClassNames, align, src: _, ...props }: ComponentExampleProps): React.JSX.Element;
export {};
//# sourceMappingURL=component-example.d.ts.map