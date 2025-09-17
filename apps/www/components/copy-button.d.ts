import * as React from "react";
import { DropdownMenuTriggerProps } from "@radix-ui/react-dropdown-menu";
import { NpmCommands } from "types/unist";
import { Event } from "@/lib/events";
import { ButtonProps } from "@/registry/new-york/ui/button";
interface CopyButtonProps extends ButtonProps {
    value: string;
    src?: string;
    event?: Event["name"];
}
export declare function copyToClipboardWithMeta(value: string, event?: Event): Promise<void>;
export declare function CopyButton({ value, className, src, variant, event, ...props }: CopyButtonProps): React.JSX.Element;
interface CopyWithClassNamesProps extends DropdownMenuTriggerProps {
    value: string;
    classNames: string;
    className?: string;
}
export declare function CopyWithClassNames({ value, classNames, className, ...props }: CopyWithClassNamesProps): React.JSX.Element;
interface CopyNpmCommandButtonProps extends DropdownMenuTriggerProps {
    commands: Required<NpmCommands>;
}
export declare function CopyNpmCommandButton({ commands, className, ...props }: CopyNpmCommandButtonProps): React.JSX.Element;
export {};
//# sourceMappingURL=copy-button.d.ts.map