import * as React from "react";
import { Style } from "@/registry/registry-styles";
interface StyleWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    styleName?: Style["name"];
}
export declare function StyleWrapper({ styleName, children }: StyleWrapperProps): React.JSX.Element | null;
export {};
//# sourceMappingURL=style-wrapper.d.ts.map