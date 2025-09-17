import { Announcement } from "@/components/announcement";
import { PageHeader, PageHeaderDescription, PageHeaderHeading, } from "@/components/page-header";
export var metadata = {
    title: "Icons",
    description: "All icons in all libraries.",
};
export default function IconsLayout(_a) {
    var children = _a.children;
    return (<div className="container relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Icons</PageHeaderHeading>
        <PageHeaderDescription>
          All icons in all libraries.
        </PageHeaderDescription>
      </PageHeader>
      <section id="icons" className="scroll-mt-20">
        {children}
      </section>
    </div>);
}
