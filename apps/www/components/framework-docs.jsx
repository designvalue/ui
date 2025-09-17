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
import { allDocs } from "contentlayer/generated";
import { Mdx } from "./mdx-components";
export function FrameworkDocs(_a) {
    var props = __rest(_a, []);
    var frameworkDoc = allDocs.find(function (doc) { return doc.slug === "/docs/installation/".concat(props.data); });
    if (!frameworkDoc) {
        return null;
    }
    return <Mdx code={frameworkDoc.body.code}/>;
}
