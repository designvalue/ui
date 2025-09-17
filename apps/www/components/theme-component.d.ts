import * as React from "react";
interface ThemeComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    extractClassname?: boolean;
    extractedClassNames?: string;
    align?: "center" | "start" | "end";
}
export declare function ThemeComponent({ name, ...props }: ThemeComponentProps): React.JSX.Element;
export {};
//# sourceMappingURL=theme-component.d.ts.map