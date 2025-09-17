import { Announcement } from "@/components/announcement";
import { BlocksNav } from "@/components/blocks-nav";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading, } from "@/components/page-header";
import { Button } from "@/registry/new-york/ui/button";
import "@/styles/mdx.css";
import Link from "next/link";
var title = "Building Blocks for the Web";
var description = "Clean, modern building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever.";
export var metadata = {
    title: title,
    description: description,
    openGraph: {
        images: [
            {
                url: "/og?title=".concat(encodeURIComponent(title), "&description=").concat(encodeURIComponent(description)),
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        images: [
            {
                url: "/og?title=".concat(encodeURIComponent(title), "&description=").concat(encodeURIComponent(description)),
            },
        ],
    },
};
export default function BlocksLayout(_a) {
    var children = _a.children;
    return (<>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <a href="#blocks">Browse Blocks</a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/docs/blocks">Add a block</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div id="blocks" className="border-grid scroll-mt-24 border-b">
        <div className="container-wrapper">
          <div className="container flex items-center py-4">
            <BlocksNav />
          </div>
        </div>
      </div>
      <div className="container-wrapper flex-1">{children}</div>
    </>);
}
