import * as React from "react";
import { type Mail } from "@/app/(app)/examples/mail/data";
interface MailProps {
    accounts: {
        label: string;
        email: string;
        icon: React.ReactNode;
    }[];
    mails: Mail[];
    defaultLayout: number[] | undefined;
    defaultCollapsed?: boolean;
    navCollapsedSize: number;
}
export declare function Mail({ accounts, mails, defaultLayout, defaultCollapsed, navCollapsedSize, }: MailProps): React.JSX.Element;
export {};
//# sourceMappingURL=mail.d.ts.map