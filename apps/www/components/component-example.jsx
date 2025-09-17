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
import { cn } from "@/lib/utils";
import { CopyButton, CopyWithClassNames } from "@/components/copy-button";
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/registry/new-york/ui/tabs";
export function ComponentExample(_a) {
    var children = _a.children, className = _a.className, extractClassname = _a.extractClassname, extractedClassNames = _a.extractedClassNames, _b = _a.align, align = _b === void 0 ? "center" : _b, _ = _a.src, props = __rest(_a, ["children", "className", "extractClassname", "extractedClassNames", "align", "src"]);
    var _c = React.Children.toArray(children), Example = _c[0], Code = _c[1], Children = _c.slice(2);
    var codeString = React.useMemo(function () {
        var _a, _b;
        if (typeof (Code === null || Code === void 0 ? void 0 : Code.props["data-rehype-pretty-code-fragment"]) !== "undefined") {
            var _c = React.Children.toArray(Code.props.children), Button = _c[1];
            return ((_a = Button === null || Button === void 0 ? void 0 : Button.props) === null || _a === void 0 ? void 0 : _a.value) || ((_b = Button === null || Button === void 0 ? void 0 : Button.props) === null || _b === void 0 ? void 0 : _b.__rawString__) || null;
        }
    }, [Code]);
    return (<div className={cn("group relative my-4 flex flex-col space-y-2", className)} {...props}>
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger value="preview" className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none">
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none">
              Code
            </TabsTrigger>
          </TabsList>
          {extractedClassNames ? (<CopyWithClassNames value={codeString} classNames={extractedClassNames} className="absolute right-4 top-20"/>) : (codeString && (<CopyButton value={codeString} className="absolute right-4 top-20"/>))}
        </div>
        <TabsContent value="preview" className="rounded-md border">
          <div className={cn("flex min-h-[350px] justify-center p-10", {
            "items-center": align === "center",
            "items-start": align === "start",
            "items-end": align === "end",
        })}>
            {Example}
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="flex flex-col space-y-4">
            <div className="w-full rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
              {Code}
            </div>
            {(Children === null || Children === void 0 ? void 0 : Children.length) ? (<div className="rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
                {Children}
              </div>) : null}
          </div>
        </TabsContent>
      </Tabs>
    </div>);
}
