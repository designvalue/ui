import * as React from "react";
interface AccountSwitcherProps {
    isCollapsed: boolean;
    accounts: {
        label: string;
        email: string;
        icon: React.ReactNode;
    }[];
}
export declare function AccountSwitcher({ isCollapsed, accounts, }: AccountSwitcherProps): React.JSX.Element;
export {};
//# sourceMappingURL=account-switcher.d.ts.map