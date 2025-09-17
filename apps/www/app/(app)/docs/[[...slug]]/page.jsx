var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { notFound } from "next/navigation";
import { allDocs } from "contentlayer/generated";
import "@/styles/mdx.css";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { getTableOfContents } from "@/lib/toc";
import { absoluteUrl, cn } from "@/lib/utils";
import { Mdx } from "@/components/mdx-components";
import { OpenInV0Cta } from "@/components/open-in-v0-cta";
import { DocsPager } from "@/components/pager";
import { DashboardTableOfContents } from "@/components/toc";
import { badgeVariants } from "@/registry/new-york/ui/badge";
function getDocFromParams(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var slug, doc;
        var _c;
        var params = _b.params;
        return __generator(this, function (_d) {
            slug = ((_c = params.slug) === null || _c === void 0 ? void 0 : _c.join("/")) || "";
            doc = allDocs.find(function (doc) { return doc.slugAsParams === slug; });
            if (!doc) {
                return [2 /*return*/, null];
            }
            return [2 /*return*/, doc];
        });
    });
}
export function generateMetadata(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var doc;
        var params = _b.params;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, getDocFromParams({ params: params })];
                case 1:
                    doc = _c.sent();
                    if (!doc) {
                        return [2 /*return*/, {}];
                    }
                    return [2 /*return*/, {
                            title: doc.title,
                            description: doc.description,
                            openGraph: {
                                title: doc.title,
                                description: doc.description,
                                type: "article",
                                url: absoluteUrl(doc.slug),
                                images: [
                                    {
                                        url: "/og?title=".concat(encodeURIComponent(doc.title), "&description=").concat(encodeURIComponent(doc.description)),
                                    },
                                ],
                            },
                            twitter: {
                                card: "summary_large_image",
                                title: doc.title,
                                description: doc.description,
                                images: [
                                    {
                                        url: "/og?title=".concat(encodeURIComponent(doc.title), "&description=").concat(encodeURIComponent(doc.description)),
                                    },
                                ],
                                creator: "@shadcn",
                            },
                        }];
            }
        });
    });
}
export function generateStaticParams() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, allDocs.map(function (doc) { return ({
                    slug: doc.slugAsParams.split("/"),
                }); })];
        });
    });
}
export default function DocPage(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var doc, toc;
        var _c, _d;
        var params = _b.params;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, getDocFromParams({ params: params })];
                case 1:
                    doc = _e.sent();
                    if (!doc) {
                        notFound();
                    }
                    return [4 /*yield*/, getTableOfContents(doc.body.raw)];
                case 2:
                    toc = _e.sent();
                    return [2 /*return*/, (<main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0 max-w-2xl">
        <div className="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
          <Link href="/docs" className="truncate">
            Docs
          </Link>
          <ChevronRight className="h-3.5 w-3.5"/>
          <div className="text-foreground">{doc.title}</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight")}>
            {doc.title}
          </h1>
          {doc.description && (<p className="text-base text-muted-foreground">
              <Balancer>{doc.description}</Balancer>
            </p>)}
        </div>
        {doc.links ? (<div className="flex items-center space-x-2 pt-4">
            {((_c = doc.links) === null || _c === void 0 ? void 0 : _c.doc) && (<Link href={doc.links.doc} target="_blank" rel="noreferrer" className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}>
                Docs
                <ExternalLink className="h-3 w-3"/>
              </Link>)}
            {((_d = doc.links) === null || _d === void 0 ? void 0 : _d.api) && (<Link href={doc.links.api} target="_blank" rel="noreferrer" className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}>
                API Reference
                <ExternalLink className="h-3 w-3"/>
              </Link>)}
          </div>) : null}
        <div className="pb-12 pt-8">
          <Mdx code={doc.body.code}/>
        </div>
        <DocsPager doc={doc}/>
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-20 -mt-6 h-[calc(100vh-3.5rem)] pt-4">
          <div className="no-scrollbar h-full overflow-auto pb-10">
            {doc.toc && <DashboardTableOfContents toc={toc}/>}
            <OpenInV0Cta className="mt-6 max-w-[80%]"/>
          </div>
        </div>
      </div>
    </main>)];
            }
        });
    });
}
