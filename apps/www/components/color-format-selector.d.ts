import * as React from "react";
import { type Color } from "@/lib/colors";
import { SelectTrigger } from "@/registry/new-york/ui/select";
import { Skeleton } from "@/registry/new-york/ui/skeleton";
export declare function ColorFormatSelector({ color, className, ...props }: Omit<React.ComponentProps<typeof SelectTrigger>, "color"> & {
    color: Color;
}): React.JSX.Element;
export declare function ColorFormatSelectorSkeleton({ className, ...props }: React.ComponentProps<typeof Skeleton>): React.JSX.Element;
//# sourceMappingURL=color-format-selector.d.ts.map