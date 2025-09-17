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
import * as React from "react";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import { useConfig } from "@/hooks/use-config";
import { copyToClipboardWithMeta } from "@/components/copy-button";
import { Tabs } from "@/registry/default/ui/tabs";
import { Button } from "@/registry/new-york/ui/button";
import { TabsContent, TabsList, TabsTrigger } from "@/registry/new-york/ui/tabs";
export function CodeBlockCommand(_a) {
    var __npmCommand__ = _a.__npmCommand__, __yarnCommand__ = _a.__yarnCommand__, __pnpmCommand__ = _a.__pnpmCommand__, __bunCommand__ = _a.__bunCommand__;
    var _b = useConfig(), config = _b[0], setConfig = _b[1];
    var _c = React.useState(false), hasCopied = _c[0], setHasCopied = _c[1];
    React.useEffect(function () {
        if (hasCopied) {
            var timer_1 = setTimeout(function () { return setHasCopied(false); }, 2000);
            return function () { return clearTimeout(timer_1); };
        }
    }, [hasCopied]);
    var packageManager = config.packageManager || "pnpm";
    var tabs = React.useMemo(function () {
        return {
            pnpm: __pnpmCommand__,
            npm: __npmCommand__,
            yarn: __yarnCommand__,
            bun: __bunCommand__,
        };
    }, [__npmCommand__, __pnpmCommand__, __yarnCommand__, __bunCommand__]);
    var copyCommand = React.useCallback(function () {
        var command = tabs[packageManager];
        if (!command) {
            return;
        }
        copyToClipboardWithMeta(command, {
            name: "copy_npm_command",
            properties: {
                command: command,
                pm: packageManager,
            },
        });
        setHasCopied(true);
    }, [packageManager, tabs]);
    return (<div className="relative mt-6 max-h-[650px] overflow-x-auto rounded-xl bg-zinc-950 dark:bg-zinc-900">
      <Tabs value={packageManager} onValueChange={function (value) {
            setConfig(__assign(__assign({}, config), { packageManager: value }));
        }}>
        <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-3 pt-2.5">
          <TabsList className="h-7 translate-y-[2px] gap-3 bg-transparent p-0 pl-1">
            {Object.entries(tabs).map(function (_a) {
            var key = _a[0], value = _a[1];
            return (<TabsTrigger key={key} value={key} className="rounded-none border-b border-transparent bg-transparent p-0 pb-1.5 font-mono text-zinc-400 data-[state=active]:border-b-zinc-50 data-[state=active]:bg-transparent data-[state=active]:text-zinc-50">
                  {key}
                </TabsTrigger>);
        })}
          </TabsList>
        </div>
        <div className="overflow-x-auto">
          {Object.entries(tabs).map(function (_a) {
            var key = _a[0], value = _a[1];
            return (<TabsContent key={key} value={key} className="mt-0">
                <pre className="px-4 py-5">
                  <code className="relative font-mono text-sm leading-none" data-language="bash">
                    {value}
                  </code>
                </pre>
              </TabsContent>);
        })}
        </div>
      </Tabs>
      <Button size="icon" variant="ghost" className="absolute right-2.5 top-2 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:h-3 [&_svg]:w-3" onClick={copyCommand}>
        <span className="sr-only">Copy</span>
        {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
      </Button>
    </div>);
}
