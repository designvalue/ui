import "@/styles/mdx.css";
import type { Metadata } from "next";
interface DocPageProps {
    params: {
        slug: string[];
    };
}
export declare function generateMetadata({ params, }: DocPageProps): Promise<Metadata>;
export declare function generateStaticParams(): Promise<DocPageProps["params"][]>;
export default function DocPage({ params }: DocPageProps): Promise<import("react").JSX.Element>;
export {};
//# sourceMappingURL=page.d.ts.map