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
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, } from "@/registry/new-york/ui/command";
import { Popover, PopoverContent, PopoverTrigger, } from "@/registry/new-york/ui/popover";
export function PresetSelector(_a) {
    var presets = _a.presets, props = __rest(_a, ["presets"]);
    var _b = React.useState(false), open = _b[0], setOpen = _b[1];
    var _c = React.useState(), selectedPreset = _c[0], setSelectedPreset = _c[1];
    var router = useRouter();
    return (<Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-label="Load a preset..." aria-expanded={open} className="flex-1 justify-between md:max-w-[200px] lg:max-w-[300px]">
          {selectedPreset ? selectedPreset.name : "Load a preset..."}
          <ChevronsUpDown className="opacity-50"/>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search presets..."/>
          <CommandList>
            <CommandEmpty>No presets found.</CommandEmpty>
            <CommandGroup heading="Examples">
              {presets.map(function (preset) { return (<CommandItem key={preset.id} onSelect={function () {
                setSelectedPreset(preset);
                setOpen(false);
            }}>
                  {preset.name}
                  <Check className={cn("ml-auto", (selectedPreset === null || selectedPreset === void 0 ? void 0 : selectedPreset.id) === preset.id
                ? "opacity-100"
                : "opacity-0")}/>
                </CommandItem>); })}
            </CommandGroup>
            <CommandGroup className="pt-0">
              <CommandItem onSelect={function () { return router.push("/examples"); }}>
                More examples
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>);
}
