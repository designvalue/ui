// @ts-nocheck
"use client";
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
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { cn } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import { Callout } from "@/components/callout";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";
import { CodeTabs } from "@/components/code-tabs";
import { ComponentExample } from "@/components/component-example";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentSource } from "@/components/component-source";
import { CopyButton } from "@/components/copy-button";
import { FrameworkDocs } from "@/components/framework-docs";
import { StyleWrapper } from "@/components/style-wrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/registry/new-york/ui/accordion";
import { Alert, AlertDescription, AlertTitle, } from "@/registry/new-york/ui/alert";
import { AspectRatio } from "@/registry/new-york/ui/aspect-ratio";
import { Button } from "@/registry/new-york/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/registry/new-york/ui/tabs";
var components = {
    Accordion: Accordion,
    AccordionContent: AccordionContent,
    AccordionItem: AccordionItem,
    AccordionTrigger: AccordionTrigger,
    Alert: Alert,
    AlertTitle: AlertTitle,
    AlertDescription: AlertDescription,
    Button: Button,
    h1: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<h1 className={cn("font-heading mt-2 scroll-m-20 text-4xl font-bold", className)} {...props}/>);
    },
    h2: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<h2 className={cn("font-heading mt-16 scroll-m-20 border-b pb-4 text-xl font-semibold tracking-tight first:mt-0", className)} {...props}/>);
    },
    h3: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<h3 className={cn("font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight", className)} {...props}/>);
    },
    h4: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<h4 className={cn("font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight", className)} {...props}/>);
    },
    h5: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<h5 className={cn("mt-8 scroll-m-20 text-lg font-semibold tracking-tight", className)} {...props}/>);
    },
    h6: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<h6 className={cn("mt-8 scroll-m-20 text-base font-semibold tracking-tight", className)} {...props}/>);
    },
    a: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<a className={cn("font-medium underline underline-offset-4", className)} {...props}/>);
    },
    p: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<p className={cn("leading-[1.65rem] [&:not(:first-child)]:mt-6", className)} {...props}/>);
    },
    strong: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<strong className={cn("font-semibold", className)} {...props}/>);
    },
    ul: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<ul className={cn("my-6 ml-6 list-disc", className)} {...props}/>);
    },
    ol: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<ol className={cn("my-6 ml-6 list-decimal", className)} {...props}/>);
    },
    li: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<li className={cn("mt-2", className)} {...props}/>);
    },
    blockquote: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props}/>);
    },
    img: function (_a) {
        var className = _a.className, alt = _a.alt, props = __rest(_a, ["className", "alt"]);
        return (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={cn("rounded-md", className)} alt={alt} {...props}/>);
    },
    hr: function (_a) {
        var props = __rest(_a, []);
        return (<hr className="my-4 md:my-8" {...props}/>);
    },
    table: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<div className="my-6 w-full overflow-y-auto">
      <table className={cn("relative w-full overflow-hidden border-none text-sm", className)} {...props}/>
    </div>);
    },
    tr: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<tr className={cn("last:border-b-none m-0 border-b", className)} {...props}/>);
    },
    th: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<th className={cn("px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", className)} {...props}/>);
    },
    td: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<td className={cn("px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", className)} {...props}/>);
    },
    pre: function (_a) {
        var className = _a.className, __rawString__ = _a.__rawString__, __npmCommand__ = _a.__npmCommand__, __yarnCommand__ = _a.__yarnCommand__, __pnpmCommand__ = _a.__pnpmCommand__, __bunCommand__ = _a.__bunCommand__, __withMeta__ = _a.__withMeta__, __src__ = _a.__src__, __event__ = _a.__event__, __style__ = _a.__style__, props = __rest(_a, ["className", "__rawString__", "__npmCommand__", "__yarnCommand__", "__pnpmCommand__", "__bunCommand__", "__withMeta__", "__src__", "__event__", "__style__"]);
        var isNpmCommand = __npmCommand__ && __yarnCommand__ && __pnpmCommand__ && __bunCommand__;
        if (isNpmCommand) {
            return (<CodeBlockCommand __npmCommand__={__npmCommand__} __yarnCommand__={__yarnCommand__} __pnpmCommand__={__pnpmCommand__} __bunCommand__={__bunCommand__}/>);
        }
        return (<StyleWrapper styleName={__style__}>
        <pre className={cn("mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-xl bg-zinc-950 py-4 dark:bg-zinc-900", className)} {...props}/>
        {__rawString__ && (<CopyButton value={__rawString__} src={__src__} event={__event__} className={cn("absolute right-4 top-4", __withMeta__ && "top-16")}/>)}
      </StyleWrapper>);
    },
    code: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<code className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm", className)} {...props}/>);
    },
    Image: Image,
    Callout: Callout,
    ComponentPreview: ComponentPreview,
    ComponentExample: ComponentExample,
    ComponentSource: ComponentSource,
    AspectRatio: AspectRatio,
    CodeBlockWrapper: function (_a) {
        var props = __rest(_a, []);
        return (<CodeBlockWrapper className="rounded-md border" {...props}/>);
    },
    CodeTabs: CodeTabs,
    Step: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<h3 className={cn("font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight", className)} {...props}/>);
    },
    Steps: function (_a) {
        var props = __rest(_a, []);
        return (<div className="[&>h3]:step steps mb-12 [counter-reset:step] md:ml-4 md:border-l md:pl-8" {...props}/>);
    },
    Tabs: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<Tabs className={cn("relative mt-6 w-full", className)} {...props}/>);
    },
    TabsList: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<TabsList className={cn("w-full justify-start rounded-none border-b bg-transparent p-0", className)} {...props}/>);
    },
    TabsTrigger: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<TabsTrigger className={cn("relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none", className)} {...props}/>);
    },
    TabsContent: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<TabsContent className={cn("relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold", className)} {...props}/>);
    },
    FrameworkDocs: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<FrameworkDocs className={cn(className)} {...props}/>);
    },
    Link: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<Link className={cn("font-medium underline underline-offset-4", className)} {...props}/>);
    },
    LinkedCard: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<Link className={cn("flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10", className)} {...props}/>);
    },
};
export function Mdx(_a) {
    var code = _a.code;
    var config = useConfig()[0];
    var Component = useMDXComponent(code, {
        style: config.style,
    });
    return (<div className="mdx">
      <Component components={components}/>
    </div>);
}
