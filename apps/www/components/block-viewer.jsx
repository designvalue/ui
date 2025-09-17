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
import { Check, ChevronRight, Clipboard, File, Folder, Fullscreen, Monitor, Smartphone, Tablet, Terminal, } from "lucide-react";
import { trackEvent } from "@/lib/events";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { V0Button } from "@/components/v0-button";
import { Button } from "@/registry/new-york/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/registry/new-york/ui/collapsible";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup, } from "@/registry/new-york/ui/resizable";
import { Separator } from "@/registry/new-york/ui/separator";
import { Sidebar, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarProvider, } from "@/registry/new-york/ui/sidebar";
import { Tabs, TabsList, TabsTrigger } from "@/registry/new-york/ui/tabs";
import { ToggleGroup, ToggleGroupItem, } from "@/registry/new-york/ui/toggle-group";
var BlockViewerContext = React.createContext(null);
function useBlockViewer() {
    var context = React.useContext(BlockViewerContext);
    if (!context) {
        throw new Error("useBlockViewer must be used within a BlockViewerProvider.");
    }
    return context;
}
function BlockViewerProvider(_a) {
    var _b, _c, _d;
    var item = _a.item, tree = _a.tree, highlightedFiles = _a.highlightedFiles, children = _a.children;
    var _e = React.useState("preview"), view = _e[0], setView = _e[1];
    var _f = React.useState("new-york"), style = _f[0], setStyle = _f[1];
    var _g = React.useState((_b = highlightedFiles === null || highlightedFiles === void 0 ? void 0 : highlightedFiles[0].target) !== null && _b !== void 0 ? _b : null), activeFile = _g[0], setActiveFile = _g[1];
    var resizablePanelRef = React.useRef(null);
    return (<BlockViewerContext.Provider value={{
            item: item,
            view: view,
            setView: setView,
            style: style,
            setStyle: setStyle,
            resizablePanelRef: resizablePanelRef,
            activeFile: activeFile,
            setActiveFile: setActiveFile,
            tree: tree,
            highlightedFiles: highlightedFiles,
        }}>
      <div id={item.name} data-view={view} className="group/block-view-wrapper flex min-w-0 flex-col items-stretch gap-4" style={{
            "--height": (_d = (_c = item.meta) === null || _c === void 0 ? void 0 : _c.iframeHeight) !== null && _d !== void 0 ? _d : "930px",
        }}>
        {children}
      </div>
    </BlockViewerContext.Provider>);
}
function BlockViewerToolbar() {
    var _a = useBlockViewer(), setView = _a.setView, item = _a.item, resizablePanelRef = _a.resizablePanelRef, style = _a.style;
    var _b = useCopyToClipboard(), copyToClipboard = _b.copyToClipboard, isCopied = _b.isCopied;
    return (<div className="flex w-full items-center gap-2 md:pr-[14px]">
      <Tabs defaultValue="preview" onValueChange={function (value) { return setView(value); }} className="hidden lg:flex">
        <TabsList className="h-7 items-center rounded-md p-0 px-[calc(theme(spacing.1)_-_2px)] py-[theme(spacing.1)]">
          <TabsTrigger value="preview" className="h-[1.45rem] rounded-sm px-2 text-xs">
            Preview
          </TabsTrigger>
          <TabsTrigger value="code" className="h-[1.45rem] rounded-sm px-2 text-xs">
            Code
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Separator orientation="vertical" className="mx-2 hidden h-4 lg:flex"/>
      <a href={"#".concat(item.name)} className="text-sm font-medium underline-offset-2 hover:underline">
        {item.description}
      </a>
      <div className="ml-auto hidden items-center gap-2 md:flex">
        <div className="hidden h-7 items-center gap-1.5 rounded-md border p-[2px] shadow-none lg:flex">
          <ToggleGroup type="single" defaultValue="100" onValueChange={function (value) {
            if (resizablePanelRef === null || resizablePanelRef === void 0 ? void 0 : resizablePanelRef.current) {
                resizablePanelRef.current.resize(parseInt(value));
            }
        }}>
            <ToggleGroupItem value="100" className="h-[22px] w-[22px] min-w-0 rounded-sm p-0" title="Desktop">
              <Monitor className="h-3.5 w-3.5"/>
            </ToggleGroupItem>
            <ToggleGroupItem value="60" className="h-[22px] w-[22px] min-w-0 rounded-sm p-0" title="Tablet">
              <Tablet className="h-3.5 w-3.5"/>
            </ToggleGroupItem>
            <ToggleGroupItem value="30" className="h-[22px] w-[22px] min-w-0 rounded-sm p-0" title="Mobile">
              <Smartphone className="h-3.5 w-3.5"/>
            </ToggleGroupItem>
            <Separator orientation="vertical" className="h-4"/>
            <Button size="icon" variant="ghost" className="h-[22px] w-[22px] rounded-sm p-0" asChild title="Open in New Tab">
              <Link href={"/view/styles/".concat(style, "/").concat(item.name)} target="_blank">
                <span className="sr-only">Open in New Tab</span>
                <Fullscreen className="h-3.5 w-3.5"/>
              </Link>
            </Button>
          </ToggleGroup>
        </div>
        <Separator orientation="vertical" className="mx-1 hidden h-4 md:flex"/>
        <div className="flex h-7 items-center gap-1 rounded-md border p-[2px]">
          <Button variant="ghost" className="hidden h-[22px] w-auto gap-1 rounded-sm px-2 md:flex lg:w-auto" size="sm" onClick={function () {
            copyToClipboard("npx shadcn@latest add ".concat(item.name));
        }}>
            {isCopied ? <Check /> : <Terminal />}
            <span className="hidden lg:inline">npx shadcn add {item.name}</span>
          </Button>
        </div>
        <Separator orientation="vertical" className="mx-1 hidden h-4 xl:flex"/>
        <V0Button className="hidden shadow-none sm:flex" id={"v0-button-".concat(item.name)} name={"".concat(item.name)}/>
      </div>
    </div>);
}
function BlockViewerView() {
    var _a, _b;
    var _c = useBlockViewer(), item = _c.item, style = _c.style, resizablePanelRef = _c.resizablePanelRef;
    return (<div className="group-data-[view=code]/block-view-wrapper:hidden md:h-[--height]">
      <div className="grid w-full gap-4">
        <ResizablePanelGroup direction="horizontal" className="relative z-10">
          <ResizablePanel ref={resizablePanelRef} className="relative aspect-[4/2.5] rounded-xl border bg-background md:aspect-auto" defaultSize={100} minSize={30}>
            <Image src={"/r/styles/".concat(style, "/").concat(item.name, "-light.png")} alt={item.name} data-block={item.name} width={1440} height={900} className="object-cover dark:hidden md:hidden md:dark:hidden"/>
            <Image src={"/r/styles/".concat(style, "/").concat(item.name, "-dark.png")} alt={item.name} data-block={item.name} width={1440} height={900} className="hidden object-cover dark:block md:hidden md:dark:hidden"/>
            <iframe src={"/view/styles/".concat(style, "/").concat(item.name)} height={(_b = (_a = item.meta) === null || _a === void 0 ? void 0 : _a.iframeHeight) !== null && _b !== void 0 ? _b : 930} className="relative z-20 hidden w-full bg-background md:block"/>
          </ResizablePanel>
          <ResizableHandle className="relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-y-1/2 after:translate-x-[-1px] after:rounded-full after:bg-border after:transition-all after:hover:h-10 md:block"/>
          <ResizablePanel defaultSize={0} minSize={0}/>
        </ResizablePanelGroup>
      </div>
    </div>);
}
function BlockViewerCode() {
    var _a;
    var _b = useBlockViewer(), activeFile = _b.activeFile, highlightedFiles = _b.highlightedFiles;
    var file = React.useMemo(function () {
        return highlightedFiles === null || highlightedFiles === void 0 ? void 0 : highlightedFiles.find(function (file) { return file.target === activeFile; });
    }, [highlightedFiles, activeFile]);
    if (!file) {
        return null;
    }
    return (<div className="mr-[14px] flex overflow-hidden rounded-xl bg-zinc-950 text-white group-data-[view=preview]/block-view-wrapper:hidden md:h-[--height]">
      <div className="w-[280px]">
        <BlockViewerFileTree />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 items-center gap-2 border-b border-zinc-700 bg-zinc-900 px-4 text-sm font-medium">
          <File className="size-4"/>
          {file.target}
          <div className="ml-auto flex items-center gap-2">
            <BlockCopyCodeButton />
          </div>
        </div>
        <div key={file === null || file === void 0 ? void 0 : file.path} data-rehype-pretty-code-fragment dangerouslySetInnerHTML={{ __html: (_a = file === null || file === void 0 ? void 0 : file.highlightedContent) !== null && _a !== void 0 ? _a : "" }} className="relative flex-1 overflow-hidden after:absolute after:inset-y-0 after:left-0 after:w-10 after:bg-zinc-950 [&_.line:before]:sticky [&_.line:before]:left-2 [&_.line:before]:z-10 [&_.line:before]:translate-y-[-1px] [&_.line:before]:pr-1 [&_pre]:h-[--height] [&_pre]:overflow-auto [&_pre]:!bg-transparent [&_pre]:pb-20 [&_pre]:pt-4 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed"/>
      </div>
    </div>);
}
export function BlockViewerFileTree() {
    var tree = useBlockViewer().tree;
    if (!tree) {
        return null;
    }
    return (<SidebarProvider className="flex !min-h-full flex-col">
      <Sidebar collapsible="none" className="w-full flex-1 border-r border-zinc-700 bg-zinc-900 text-white">
        <SidebarGroupLabel className="h-12 rounded-none border-b border-zinc-700 px-4 text-sm text-white">
          Files
        </SidebarGroupLabel>
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-1.5">
              {tree.map(function (file, index) { return (<Tree key={index} item={file} index={1}/>); })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </Sidebar>
    </SidebarProvider>);
}
function Tree(_a) {
    var item = _a.item, index = _a.index;
    var _b = useBlockViewer(), activeFile = _b.activeFile, setActiveFile = _b.setActiveFile;
    if (!item.children) {
        return (<SidebarMenuItem>
        <SidebarMenuButton isActive={item.path === activeFile} onClick={function () { return item.path && setActiveFile(item.path); }} className="whitespace-nowrap rounded-none pl-[--index] hover:bg-zinc-700 hover:text-white focus:bg-zinc-700 focus:text-white focus-visible:bg-zinc-700 focus-visible:text-white active:bg-zinc-700 active:text-white data-[active=true]:bg-zinc-700 data-[active=true]:text-white" data-index={index} style={{
                "--index": "".concat(index * (index === 2 ? 1.2 : 1.3), "rem"),
            }}>
          <ChevronRight className="invisible"/>
          <File className="h-4 w-4"/>
          {item.name}
        </SidebarMenuButton>
      </SidebarMenuItem>);
    }
    return (<SidebarMenuItem>
      <Collapsible className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90" defaultOpen>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className="whitespace-nowrap rounded-none pl-[--index] hover:bg-zinc-700 hover:text-white focus-visible:bg-zinc-700 focus-visible:text-white active:bg-zinc-700 active:text-white data-[active=true]:bg-zinc-700 data-[active=true]:text-white data-[state=open]:hover:bg-zinc-700 data-[state=open]:hover:text-white" style={{
            "--index": "".concat(index * (index === 1 ? 1 : 1.2), "rem"),
        }}>
            <ChevronRight className="h-4 w-4 transition-transform"/>
            <Folder className="h-4 w-4"/>
            {item.name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="m-0 w-full border-none p-0">
            {item.children.map(function (subItem, key) { return (<Tree key={key} item={subItem} index={index + 1}/>); })}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>);
}
function BlockCopyCodeButton() {
    var _a = useBlockViewer(), activeFile = _a.activeFile, item = _a.item;
    var _b = useCopyToClipboard(), copyToClipboard = _b.copyToClipboard, isCopied = _b.isCopied;
    var file = React.useMemo(function () {
        var _a;
        return (_a = item.files) === null || _a === void 0 ? void 0 : _a.find(function (file) { return file.target === activeFile; });
    }, [activeFile, item.files]);
    var content = file === null || file === void 0 ? void 0 : file.content;
    if (!content) {
        return null;
    }
    return (<Button onClick={function () {
            copyToClipboard(content);
            trackEvent({
                name: "copy_block_code",
                properties: {
                    name: item.name,
                    file: file.path,
                },
            });
        }} className="h-7 w-7 shrink-0 rounded-lg p-0 hover:bg-zinc-700 hover:text-white focus:bg-zinc-700 focus:text-white focus-visible:bg-zinc-700 focus-visible:text-white active:bg-zinc-700 active:text-white data-[active=true]:bg-zinc-700 data-[active=true]:text-white [&>svg]:size-3" variant="ghost">
      {isCopied ? <Check /> : <Clipboard />}
    </Button>);
}
function BlockViewer(_a) {
    var item = _a.item, tree = _a.tree, highlightedFiles = _a.highlightedFiles, props = __rest(_a, ["item", "tree", "highlightedFiles"]);
    return (<BlockViewerProvider item={item} tree={tree} highlightedFiles={highlightedFiles} {...props}>
      <BlockViewerToolbar />
      <BlockViewerView />
      <BlockViewerCode />
    </BlockViewerProvider>);
}
export { BlockViewer };
