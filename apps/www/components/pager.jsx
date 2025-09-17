var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { docsConfig } from "@/config/docs";
import { Button } from "@/registry/new-york/ui/button";
export function DocsPager(_a) {
    var _b, _c;
    var doc = _a.doc;
    var pager = getPagerForDoc(doc);
    if (!pager) {
        return null;
    }
    return (<div className="flex flex-row items-center justify-between">
      {((_b = pager === null || pager === void 0 ? void 0 : pager.prev) === null || _b === void 0 ? void 0 : _b.href) && (<Button variant="ghost" asChild>
          <Link href={pager.prev.href}>
            <ChevronLeft />
            {pager.prev.title}
          </Link>
        </Button>)}
      {((_c = pager === null || pager === void 0 ? void 0 : pager.next) === null || _c === void 0 ? void 0 : _c.href) && (<Button variant="ghost" className="ml-auto" asChild>
          <Link href={pager.next.href}>
            {pager.next.title}
            <ChevronRight />
          </Link>
        </Button>)}
    </div>);
}
export function getPagerForDoc(doc) {
    var nav = doc.slug.startsWith("/docs/charts")
        ? docsConfig.chartsNav
        : docsConfig.sidebarNav;
    var flattenedLinks = __spreadArray(__spreadArray([null], flatten(nav), true), [null], false);
    var activeIndex = flattenedLinks.findIndex(function (link) { return doc.slug === (link === null || link === void 0 ? void 0 : link.href); });
    var prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
    var next = activeIndex !== flattenedLinks.length - 1
        ? flattenedLinks[activeIndex + 1]
        : null;
    return {
        prev: prev,
        next: next,
    };
}
export function flatten(links) {
    return links
        .reduce(function (flat, link) {
        var _a;
        return flat.concat(((_a = link.items) === null || _a === void 0 ? void 0 : _a.length) ? flatten(link.items) : link);
    }, [])
        .filter(function (link) { return !(link === null || link === void 0 ? void 0 : link.disabled); });
}
