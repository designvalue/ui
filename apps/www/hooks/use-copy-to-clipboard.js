"use client";
import * as React from "react";
export function useCopyToClipboard(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.timeout, timeout = _c === void 0 ? 2000 : _c, onCopy = _b.onCopy;
    var _d = React.useState(false), isCopied = _d[0], setIsCopied = _d[1];
    var copyToClipboard = function (value) {
        var _a;
        if (typeof window === "undefined" || !((_a = navigator === null || navigator === void 0 ? void 0 : navigator.clipboard) === null || _a === void 0 ? void 0 : _a.writeText)) {
            return;
        }
        if (!value)
            return;
        navigator.clipboard.writeText(value).then(function () {
            setIsCopied(true);
            if (onCopy) {
                onCopy();
            }
            setTimeout(function () {
                setIsCopied(false);
            }, timeout);
        }, console.error);
    };
    return { isCopied: isCopied, copyToClipboard: copyToClipboard };
}
