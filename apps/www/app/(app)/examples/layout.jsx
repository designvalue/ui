import Link from "next/link";
import { Announcement } from "@/components/announcement";
import { ExamplesNav } from "@/components/examples-nav";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading, } from "@/components/page-header";
import { Button } from "@/registry/new-york/ui/button";
var title = "Examples";
var description = "Check out some examples app built using the components.";
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
export default function ExamplesLayout(_a) {
    var children = _a.children;
    return (<>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Build your component library</PageHeaderHeading>
        <PageHeaderDescription>
          A set of beautifully-designed, accessible components and a code
          distribution platform. Works with your favorite frameworks. Open
          Source. Open Code.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link href="/blocks">Browse Blocks</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="container py-4">
            <ExamplesNav />
          </div>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="container py-6">
          <section className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
            {children}
          </section>
        </div>
      </div>
    </>);
}
