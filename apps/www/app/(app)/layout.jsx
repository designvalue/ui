import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
export default function AppLayout(_a) {
    var children = _a.children;
    return (<div data-wrapper="" className="border-grid flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      <SiteFooter />
    </div>);
}
