import { Announcement } from "@/components/announcement";
import { PageHeader, PageHeaderDescription, PageHeaderHeading, } from "@/components/page-header";
import { Customizer } from "@/components/theme-customizer";
var title = "Add colors. Make it yours.";
var description = "Hand-picked themes that you can copy and paste into your apps.";
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
export default function ThemesLayout(_a) {
    var children = _a.children;
    return (<>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <div className="mt-2 rounded-full bg-blue-600 px-3 py-1 text-xs text-white">
          New Theme Editor coming soon
        </div>
      </PageHeader>
      <div id="themes" className="border-grid scroll-mt-24 border-b">
        <div className="container-wrapper">
          <div className="container flex items-center py-4">
            <Customizer />
          </div>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="container py-6">
          <section id="themes" className="scroll-mt-20">
            {children}
          </section>
        </div>
      </div>
    </>);
}
