"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from "react";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
var projectAtom = atomWithStorage("project", {
    blocks: [],
});
export function useProject() {
    var _a = React.useState(false), isAdded = _a[0], setIsAdded = _a[1];
    var _b = useAtom(projectAtom), project = _b[0], setProject = _b[1];
    var addBlock = React.useCallback(function (block) {
        setProject(function (prev) {
            if (prev.blocks.includes(block)) {
                return prev;
            }
            return __assign(__assign({}, prev), { blocks: __spreadArray(__spreadArray([], prev.blocks, true), [block], false) });
        });
        setIsAdded(true);
        setTimeout(function () {
            setIsAdded(false);
        }, 2000);
    }, []);
    var removeBlock = React.useCallback(function (block) {
        setProject(function (prev) { return (__assign(__assign({}, prev), { blocks: prev.blocks.filter(function (b) { return b !== block; }) })); });
    }, []);
    var hasBlock = React.useCallback(function (block) {
        return project.blocks.includes(block);
    }, []);
    var resetProject = React.useCallback(function () {
        setProject({ blocks: [] });
    }, []);
    return { project: project, addBlock: addBlock, removeBlock: removeBlock, resetProject: resetProject, hasBlock: hasBlock, isAdded: isAdded };
}
