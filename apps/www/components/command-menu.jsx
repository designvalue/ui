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
import { useRouter } from "next/navigation";
import { Circle, File, Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york/ui/button";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, } from "@/registry/new-york/ui/command";
export function CommandMenu(_a) {
    var props = __rest(_a, []);
    var router = useRouter();
    var _b = React.useState(false), open = _b[0], setOpen = _b[1];
    var setTheme = useTheme().setTheme;
    React.useEffect(function () {
        var down = function (e) {
            if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
                if ((e.target instanceof HTMLElement && e.target.isContentEditable) ||
                    e.target instanceof HTMLInputElement ||
                    e.target instanceof HTMLTextAreaElement ||
                    e.target instanceof HTMLSelectElement) {
                    return;
                }
                e.preventDefault();
                setOpen(function (open) { return !open; });
            }
        };
        document.addEventListener("keydown", down);
        return function () { return document.removeEventListener("keydown", down); };
    }, []);
    var runCommand = React.useCallback(function (command) {
        setOpen(false);
        command();
    }, []);
    return (<>
      <Button variant="outline" className={cn("relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64")} onClick={function () { return setOpen(true); }} {...props}>
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..."/>
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            {docsConfig.mainNav
            .filter(function (navitem) { return !navitem.external; })
            .map(function (navItem) { return (<CommandItem key={navItem.href} value={navItem.title} onSelect={function () {
                runCommand(function () { return router.push(navItem.href); });
            }}>
                  <File />
                  {navItem.title}
                </CommandItem>); })}
          </CommandGroup>
          {docsConfig.sidebarNav.map(function (group) { return (<CommandGroup key={group.title} heading={group.title}>
              {group.items.map(function (navItem) { return (<CommandItem key={navItem.href} value={navItem.title} onSelect={function () {
                    runCommand(function () { return router.push(navItem.href); });
                }}>
                  <div className="mr-2 flex h-4 w-4 items-center justify-center">
                    <Circle className="h-3 w-3"/>
                  </div>
                  {navItem.title}
                </CommandItem>); })}
            </CommandGroup>); })}
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={function () { return runCommand(function () { return setTheme("light"); }); }}>
              <Sun />
              Light
            </CommandItem>
            <CommandItem onSelect={function () { return runCommand(function () { return setTheme("dark"); }); }}>
              <Moon />
              Dark
            </CommandItem>
            <CommandItem onSelect={function () { return runCommand(function () { return setTheme("system"); }); }}>
              <Laptop />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>);
}
