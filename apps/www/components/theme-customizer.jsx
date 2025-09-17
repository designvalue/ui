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
import template from "lodash/template";
import { Check, ClipboardIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import { copyToClipboardWithMeta } from "@/components/copy-button";
import { ThemeWrapper } from "@/components/theme-wrapper";
import { Button } from "@/registry/new-york/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/registry/new-york/ui/dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger, } from "@/registry/new-york/ui/drawer";
import { Label } from "@/registry/new-york/ui/label";
import { Popover, PopoverContent, PopoverTrigger, } from "@/registry/new-york/ui/popover";
import { Separator } from "@/registry/new-york/ui/separator";
import { Skeleton } from "@/registry/new-york/ui/skeleton";
import { baseColors, baseColorsOKLCH, } from "@/registry/registry-base-colors";
import "@/styles/mdx.css";
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/registry/new-york/ui/tabs";
export function ThemeCustomizer() {
    var _a = useConfig(), config = _a[0], setConfig = _a[1];
    var mode = useTheme().resolvedTheme;
    var _b = React.useState(false), mounted = _b[0], setMounted = _b[1];
    React.useEffect(function () {
        setMounted(true);
    }, []);
    return (<div className="flex items-center gap-2">
      <Drawer>
        <DrawerTrigger asChild>
          <Button size="sm" className="md:hidden">
            Customize
          </Button>
        </DrawerTrigger>
        <DrawerContent className="p-6 pt-0">
          <Customizer />
        </DrawerContent>
      </Drawer>
      <div className="hidden items-center md:flex">
        <Popover>
          <PopoverTrigger asChild>
            <Button size="sm">Customize</Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="z-40 w-[340px] rounded-[12px] bg-white p-6 dark:bg-zinc-950">
            <Customizer />
          </PopoverContent>
        </Popover>
      </div>
      <CopyCodeButton variant="ghost" size="sm" className="[&_svg]:hidden"/>
    </div>);
}
export function Customizer() {
    var _a = React.useState(false), mounted = _a[0], setMounted = _a[1];
    var mode = useTheme().resolvedTheme;
    var _b = useConfig(), config = _b[0], setConfig = _b[1];
    React.useEffect(function () {
        setMounted(true);
    }, []);
    return (<ThemeWrapper defaultTheme="zinc">
      <div className="grid w-full flex-1 grid-cols-2 flex-wrap items-start gap-2 sm:flex sm:items-center md:gap-6">
        <div className="flex flex-col gap-2">
          <Label className="sr-only text-xs">Color</Label>
          <div className="flex flex-wrap gap-1 md:gap-2">
            {baseColors
            .filter(function (theme) {
            return !["slate", "stone", "gray", "neutral"].includes(theme.name);
        })
            .map(function (theme) {
            var isActive = config.theme === theme.name;
            return mounted ? (<Button variant="outline" size="sm" key={theme.name} onClick={function () {
                    setConfig(__assign(__assign({}, config), { theme: theme.name }));
                }} className={cn("w-[32px] rounded-lg lg:px-2.5 xl:w-[86px]", isActive && "border-primary/50 ring-[2px] ring-primary/30")} style={{
                    "--theme-primary": "hsl(".concat(theme === null || theme === void 0 ? void 0 : theme.activeColor[mode === "dark" ? "dark" : "light"], ")"),
                }}>
                    <span className={cn("flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[--theme-primary]")}>
                      {isActive && <Check className="!size-2.5 text-white"/>}
                    </span>
                    <span className="hidden xl:block">
                      {theme.label === "Zinc" ? "Default" : theme.label}
                    </span>
                  </Button>) : (<Skeleton className="h-8 w-[32px] xl:w-[86px]" key={theme.name}/>);
        })}
          </div>
        </div>
        <Separator orientation="vertical" className="hidden h-6 sm:block"/>
        <div className="flex flex-col gap-2">
          <Label className="sr-only text-xs">Radius</Label>
          <div className="flex flex-wrap gap-1 md:gap-2">
            {["0", "0.3", "0.5", "0.75", "1.0"].map(function (value) {
            return (<Button variant={"outline"} size="sm" key={value} onClick={function () {
                    setConfig(__assign(__assign({}, config), { radius: parseFloat(value) }));
                }} className={cn("w-[40px] rounded-lg", config.radius === parseFloat(value) &&
                    "border-primary/50 ring-[2px] ring-primary/30")}>
                  {value}
                </Button>);
        })}
          </div>
        </div>
        <div className="flex gap-2 sm:ml-auto">
          <CopyCodeButton />
        </div>
      </div>
    </ThemeWrapper>);
}
export function CopyCodeButton(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className={cn("h-8 rounded-lg shadow-none sm:hidden", className)} {...props}>
            Copy
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Theme</DrawerTitle>
            <DrawerDescription>
              Copy and paste the following code into your CSS file.
            </DrawerDescription>
          </DrawerHeader>
          <ThemeWrapper defaultTheme="zinc" className="relative px-6">
            <CustomizerCode />
          </ThemeWrapper>
        </DrawerContent>
      </Drawer>
      <Dialog>
        <DialogTrigger asChild>
          <Button className={cn("hidden h-8 rounded-lg shadow-none sm:flex", className)} {...props}>
            Copy code
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl outline-none">
          <DialogHeader>
            <DialogTitle>Theme</DialogTitle>
            <DialogDescription>
              Copy and paste the following code into your CSS file.
            </DialogDescription>
          </DialogHeader>
          <ThemeWrapper defaultTheme="zinc" className="relative">
            <CustomizerCode />
          </ThemeWrapper>
        </DialogContent>
      </Dialog>
    </>);
}
function CustomizerCode() {
    var config = useConfig()[0];
    var _a = React.useState(false), hasCopied = _a[0], setHasCopied = _a[1];
    var _b = React.useState("v4"), themeVersion = _b[0], setThemeVersion = _b[1];
    var activeTheme = React.useMemo(function () { return baseColors.find(function (theme) { return theme.name === config.theme; }); }, [config.theme]);
    var activeThemeOKLCH = React.useMemo(function () { return baseColorsOKLCH[config.theme]; }, [config.theme]);
    React.useEffect(function () {
        if (hasCopied) {
            setTimeout(function () {
                setHasCopied(false);
            }, 2000);
        }
    }, [hasCopied]);
    return (<ThemeWrapper defaultTheme="zinc" className="relative space-y-4">
      <Tabs value={themeVersion} onValueChange={setThemeVersion}>
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="v4">Tailwind v4</TabsTrigger>
            <TabsTrigger value="v3">v3</TabsTrigger>
          </TabsList>
          <Button size="sm" variant="outline" onClick={function () {
            copyToClipboardWithMeta(themeVersion === "v3"
                ? getThemeCode(activeTheme, config.radius)
                : getThemeCodeOKLCH(activeThemeOKLCH, config.radius), {
                name: "copy_theme_code",
                properties: {
                    theme: config.theme,
                    radius: config.radius,
                },
            });
            setHasCopied(true);
        }} className="absolute right-0 top-0 shadow-none">
            {hasCopied ? <Check /> : <ClipboardIcon />}
            Copy
          </Button>
        </div>
        <TabsContent value="v4">
          <div data-rehype-pretty-code-fragment="">
            <pre className="max-h-[450px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                <span className="line text-white">&nbsp;:root &#123;</span>
                <span className="line text-white">
                  &nbsp;&nbsp;&nbsp;--radius: {config.radius}rem;
                </span>
                {Object.entries(activeThemeOKLCH === null || activeThemeOKLCH === void 0 ? void 0 : activeThemeOKLCH.light).map(function (_a) {
            var key = _a[0], value = _a[1];
            return (<span className="line text-white" key={key}>
                    &nbsp;&nbsp;&nbsp;--{key}: {value};
                  </span>);
        })}
                <span className="line text-white">&nbsp;&#125;</span>
                <span className="line text-white">&nbsp;</span>
                <span className="line text-white">&nbsp;.dark &#123;</span>
                {Object.entries(activeThemeOKLCH === null || activeThemeOKLCH === void 0 ? void 0 : activeThemeOKLCH.dark).map(function (_a) {
            var key = _a[0], value = _a[1];
            return (<span className="line text-white" key={key}>
                    &nbsp;&nbsp;&nbsp;--{key}: {value};
                  </span>);
        })}
                <span className="line text-white">&nbsp;&#125;</span>
              </code>
            </pre>
          </div>
        </TabsContent>
        <TabsContent value="v3">
          <div data-rehype-pretty-code-fragment="">
            <pre className="max-h-[450px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                <span className="line text-white">@layer base &#123;</span>
                <span className="line text-white">
                  &nbsp;&nbsp;:root &#123;
                </span>
                <span className="line text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;--background:{" "}
                  {activeTheme === null || activeTheme === void 0 ? void 0 : activeTheme.cssVars.light["background"]};
                </span>
                <span className="line text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;--foreground:{" "}
                  {activeTheme === null || activeTheme === void 0 ? void 0 : activeTheme.cssVars.light["foreground"]};
                </span>
                {[
            "card",
            "popover",
            "primary",
            "secondary",
            "muted",
            "accent",
            "destructive",
        ].map(function (prefix) { return (<>
                    <span className="line text-white">
                      &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{" "}
                      {activeTheme === null || activeTheme === void 0 ? void 0 : activeTheme.cssVars.light[prefix]}
                      ;
                    </span>
                    <span className="line text-white">
                      &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground:{" "}
                      {activeTheme === null || activeTheme === void 0 ? void 0 : activeTheme.cssVars.light["".concat(prefix, "-foreground")]}
                      ;
                    </span>
                  </>); })}
                <span className="line text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;--border:{" "}
                  {activeTheme === null || activeTheme === void 0 ? void 0 : activeTheme.cssVars.light["border"]};
                </span>
                <span className="line text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;--input:{" "}
                  {activeTheme === null || activeTheme === void 0 ? void 0 : activeTheme.cssVars.light["input"]};
                </span>
                <span className="line text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;--ring:{" "}
                  {activeTheme === null || activeTheme === void 0 ? void 0 : activeTheme.cssVars.light["ring"]};
                </span>
                <span className="line text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;--radius: {config.radius}rem;
                </span>
                {["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map(function (prefix) { return (<>
                      <span className="line text-white">
                        &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{" "}
                        {activeTheme === null || activeTheme === void 0 ? void 0 : activeTheme.cssVars.light[prefix]}
                        ;
                      </span>
                    </>); })}
                <span className="line text-white">&nbsp;&nbsp;&#125;</span>
                <span className="line text-white">&nbsp;</span>
                <span className="line text-white">
                  &nbsp;&nbsp;.dark &#123;
                </span>
                <span className="line text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;--background:{" "}
                  {activeTheme === null || activeTheme === void 0 ? void 0 : activeTheme.cssVars.dark["background"]};
                </span>
                <span className="line text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;--foreground:{" "}
                  {activeTheme === null || activeTheme === void 0 ? void 0 : activeTheme.cssVars.dark["foreground"]};
                </span>
                {[
            "card",
            "popover",
            "primary",
            "secondary",
            "muted",
            "accent",
            "destructive",
        ].map(function (prefix) { return (<>
                    <span className="line text-white">
                      &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{" "}
                      {activeTheme === null || activeTheme === void 0 ? void 0 : activeTheme.cssVars.dark[prefix]}
                      ;
                    </span>
                    <span className="line text-white">
                      &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground:{" "}
                      {activeTheme === null || activeTheme === void 0 ? void 0 : activeTheme.cssVars.dark["".concat(prefix, "-foreground")]}
                      ;
                    </span>
                  </>); })}
                <span className="line text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;--border:{" "}
                  {activeTheme === null || activeTheme === void 0 ? void 0 : activeTheme.cssVars.dark["border"]};
                </span>
                <span className="line text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;--input:{" "}
                  {activeTheme === null || activeTheme === void 0 ? void 0 : activeTheme.cssVars.dark["input"]};
                </span>
                <span className="line text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;--ring:{" "}
                  {activeTheme === null || activeTheme === void 0 ? void 0 : activeTheme.cssVars.dark["ring"]};
                </span>
                {["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map(function (prefix) { return (<>
                      <span className="line text-white">
                        &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{" "}
                        {activeTheme === null || activeTheme === void 0 ? void 0 : activeTheme.cssVars.dark[prefix]}
                        ;
                      </span>
                    </>); })}
                <span className="line text-white">&nbsp;&nbsp;&#125;</span>
                <span className="line text-white">&#125;</span>
              </code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </ThemeWrapper>);
}
function getThemeCodeOKLCH(theme, radius) {
    if (!theme) {
        return "";
    }
    var rootSection = ":root {\n  --radius: " +
        radius +
        "rem;\n" +
        Object.entries(theme.light)
            .map(function (entry) { return "  --" + entry[0] + ": " + entry[1] + ";"; })
            .join("\n") +
        "\n}\n\n.dark {\n" +
        Object.entries(theme.dark)
            .map(function (entry) { return "  --" + entry[0] + ": " + entry[1] + ";"; })
            .join("\n") +
        "\n}\n";
    return rootSection;
}
function getThemeCode(theme, radius) {
    if (!theme) {
        return "";
    }
    return template(BASE_STYLES_WITH_VARIABLES)({
        colors: theme.cssVars,
        radius: radius.toString(),
    });
}
var BASE_STYLES_WITH_VARIABLES = "\n@layer base {\n  :root {\n    --background: <%- colors.light[\"background\"] %>;\n    --foreground: <%- colors.light[\"foreground\"] %>;\n    --card: <%- colors.light[\"card\"] %>;\n    --card-foreground: <%- colors.light[\"card-foreground\"] %>;\n    --popover: <%- colors.light[\"popover\"] %>;\n    --popover-foreground: <%- colors.light[\"popover-foreground\"] %>;\n    --primary: <%- colors.light[\"primary\"] %>;\n    --primary-foreground: <%- colors.light[\"primary-foreground\"] %>;\n    --secondary: <%- colors.light[\"secondary\"] %>;\n    --secondary-foreground: <%- colors.light[\"secondary-foreground\"] %>;\n    --muted: <%- colors.light[\"muted\"] %>;\n    --muted-foreground: <%- colors.light[\"muted-foreground\"] %>;\n    --accent: <%- colors.light[\"accent\"] %>;\n    --accent-foreground: <%- colors.light[\"accent-foreground\"] %>;\n    --destructive: <%- colors.light[\"destructive\"] %>;\n    --destructive-foreground: <%- colors.light[\"destructive-foreground\"] %>;\n    --border: <%- colors.light[\"border\"] %>;\n    --input: <%- colors.light[\"input\"] %>;\n    --ring: <%- colors.light[\"ring\"] %>;\n    --radius: <%- radius %>rem;\n    --chart-1: <%- colors.light[\"chart-1\"] %>;\n    --chart-2: <%- colors.light[\"chart-2\"] %>;\n    --chart-3: <%- colors.light[\"chart-3\"] %>;\n    --chart-4: <%- colors.light[\"chart-4\"] %>;\n    --chart-5: <%- colors.light[\"chart-5\"] %>;\n  }\n\n  .dark {\n    --background: <%- colors.dark[\"background\"] %>;\n    --foreground: <%- colors.dark[\"foreground\"] %>;\n    --card: <%- colors.dark[\"card\"] %>;\n    --card-foreground: <%- colors.dark[\"card-foreground\"] %>;\n    --popover: <%- colors.dark[\"popover\"] %>;\n    --popover-foreground: <%- colors.dark[\"popover-foreground\"] %>;\n    --primary: <%- colors.dark[\"primary\"] %>;\n    --primary-foreground: <%- colors.dark[\"primary-foreground\"] %>;\n    --secondary: <%- colors.dark[\"secondary\"] %>;\n    --secondary-foreground: <%- colors.dark[\"secondary-foreground\"] %>;\n    --muted: <%- colors.dark[\"muted\"] %>;\n    --muted-foreground: <%- colors.dark[\"muted-foreground\"] %>;\n    --accent: <%- colors.dark[\"accent\"] %>;\n    --accent-foreground: <%- colors.dark[\"accent-foreground\"] %>;\n    --destructive: <%- colors.dark[\"destructive\"] %>;\n    --destructive-foreground: <%- colors.dark[\"destructive-foreground\"] %>;\n    --border: <%- colors.dark[\"border\"] %>;\n    --input: <%- colors.dark[\"input\"] %>;\n    --ring: <%- colors.dark[\"ring\"] %>;\n    --chart-1: <%- colors.dark[\"chart-1\"] %>;\n    --chart-2: <%- colors.dark[\"chart-2\"] %>;\n    --chart-3: <%- colors.dark[\"chart-3\"] %>;\n    --chart-4: <%- colors.dark[\"chart-4\"] %>;\n    --chart-5: <%- colors.dark[\"chart-5\"] %>;\n  }\n}\n";
