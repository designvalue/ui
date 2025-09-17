import Image from "next/image";
import Link from "next/link";
import { Announcement } from "@/components/announcement";
import { CardsDemo } from "@/components/cards";
import { ExamplesNav } from "@/components/examples-nav";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading, } from "@/components/page-header";
import { Button } from "@/registry/new-york/ui/button";
var title = "Build your component library";
var description = "A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.";
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
export default function IndexPage() {
    return (<>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href="/docs/installation">Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href="/blocks">Browse Blocks</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="container py-4">
            <ExamplesNav className="[&>a:first-child]:text-primary"/>
          </div>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="container py-6">
          <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
            <Image src="/examples/cards-light.png" width={1280} height={1214} alt="Cards" className="block dark:hidden"/>
            <Image src="/examples/cards-dark.png" width={1280} height={1214} alt="Cards" className="hidden dark:block"/>
          </section>
          <section className="hidden md:block [&>div]:p-0" style={{
            "--radius": "0.75rem",
        }}>
            <CardsDemo />
          </section>
        </div>
      </div>
    </>);
}
