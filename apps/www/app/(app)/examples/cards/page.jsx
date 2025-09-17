var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import Image from "next/image";
import { cn } from "@/lib/utils";
import { DemoCookieSettings } from "./components/cookie-settings";
import { DemoCreateAccount } from "./components/create-account";
import { DemoDatePicker } from "./components/date-picker";
import { DemoGithub } from "./components/github-card";
import { DemoNotifications } from "./components/notifications";
import { DemoPaymentMethod } from "./components/payment-method";
import { DemoReportAnIssue } from "./components/report-an-issue";
import { DemoShareDocument } from "./components/share-document";
import { DemoTeamMembers } from "./components/team-members";
export var metadata = {
    title: "Cards",
    description: "Examples of cards built using the components.",
};
function DemoContainer(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<div className={cn("flex items-center justify-center [&>div]:w-full", className)} {...props}/>);
}
export default function CardsPage() {
    return (<>
      <div className="md:hidden">
        <Image src="/examples/cards-light.png" width={1280} height={1214} alt="Cards" className="block dark:hidden"/>
        <Image src="/examples/cards-dark.png" width={1280} height={1214} alt="Cards" className="hidden dark:block"/>
      </div>
      <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <DemoContainer>
            <DemoCreateAccount />
          </DemoContainer>
          <DemoContainer>
            <DemoPaymentMethod />
          </DemoContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <DemoContainer>
            <DemoTeamMembers />
          </DemoContainer>
          <DemoContainer>
            <DemoShareDocument />
          </DemoContainer>
          <DemoContainer>
            <DemoDatePicker />
          </DemoContainer>
          <DemoContainer>
            <DemoNotifications />
          </DemoContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
          <DemoContainer>
            <DemoReportAnIssue />
          </DemoContainer>
          <DemoContainer>
            <DemoGithub />
          </DemoContainer>
          <DemoContainer>
            <DemoCookieSettings />
          </DemoContainer>
        </div>
      </div>
    </>);
}
