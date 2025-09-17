import * as React from "react";
import { Metadata } from "next";
import { Style } from "@/registry/registry-styles";
import "@/styles/mdx.css";
export declare const dynamicParams = false;
export declare function generateMetadata({ params, }: {
    params: {
        style: Style["name"];
        name: string;
    };
}): Promise<Metadata>;
export declare function generateStaticParams(): Promise<{
    style: "default" | "new-york";
    name: string;
}[]>;
export default function BlockPage({ params, }: {
    params: {
        style: Style["name"];
        name: string;
    };
}): Promise<React.JSX.Element>;
//# sourceMappingURL=page.d.ts.map