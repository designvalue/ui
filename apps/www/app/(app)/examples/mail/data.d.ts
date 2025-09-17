export declare const mails: {
    id: string;
    name: string;
    email: string;
    subject: string;
    text: string;
    date: string;
    read: boolean;
    labels: string[];
}[];
export type Mail = (typeof mails)[number];
export declare const accounts: {
    label: string;
    email: string;
    icon: import("react").JSX.Element;
}[];
export type Account = (typeof accounts)[number];
export declare const contacts: {
    name: string;
    email: string;
}[];
export type Contact = (typeof contacts)[number];
//# sourceMappingURL=data.d.ts.map