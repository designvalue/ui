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
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMutationObserver } from "@/hooks/use-mutation-observer";
import { Button } from "@/registry/new-york/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, } from "@/registry/new-york/ui/command";
import { HoverCard, HoverCardContent, HoverCardTrigger, } from "@/registry/new-york/ui/hover-card";
import { Label } from "@/registry/new-york/ui/label";
import { Popover, PopoverContent, PopoverTrigger, } from "@/registry/new-york/ui/popover";
export function ModelSelector(_a) {
    var models = _a.models, types = _a.types, props = __rest(_a, ["models", "types"]);
    var _b = React.useState(false), open = _b[0], setOpen = _b[1];
    var _c = React.useState(models[0]), selectedModel = _c[0], setSelectedModel = _c[1];
    var _d = React.useState(models[0]), peekedModel = _d[0], setPeekedModel = _d[1];
    return (<div className="grid gap-2">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <Label htmlFor="model">Model</Label>
        </HoverCardTrigger>
        <HoverCardContent align="start" className="w-[260px] text-sm" side="left">
          The model which will generate the completion. Some models are suitable
          for natural language tasks, others specialize in code. Learn more.
        </HoverCardContent>
      </HoverCard>
      <Popover open={open} onOpenChange={setOpen} {...props}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={open} aria-label="Select a model" className="w-full justify-between">
            {selectedModel ? selectedModel.name : "Select a model..."}
            <ChevronsUpDown className="opacity-50"/>
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-[250px] p-0">
          <HoverCard>
            <HoverCardContent side="left" align="start" forceMount className="min-h-[280px]">
              <div className="grid gap-2">
                <h4 className="font-medium leading-none">{peekedModel.name}</h4>
                <div className="text-sm text-muted-foreground">
                  {peekedModel.description}
                </div>
                {peekedModel.strengths ? (<div className="mt-4 grid gap-2">
                    <h5 className="text-sm font-medium leading-none">
                      Strengths
                    </h5>
                    <ul className="text-sm text-muted-foreground">
                      {peekedModel.strengths}
                    </ul>
                  </div>) : null}
              </div>
            </HoverCardContent>
            <Command loop>
              <CommandList className="h-[var(--cmdk-list-height)] max-h-[400px]">
                <CommandInput placeholder="Search Models..."/>
                <CommandEmpty>No Models found.</CommandEmpty>
                <HoverCardTrigger />
                {types.map(function (type) { return (<CommandGroup key={type} heading={type}>
                    {models
                .filter(function (model) { return model.type === type; })
                .map(function (model) { return (<ModelItem key={model.id} model={model} isSelected={(selectedModel === null || selectedModel === void 0 ? void 0 : selectedModel.id) === model.id} onPeek={function (model) { return setPeekedModel(model); }} onSelect={function () {
                    setSelectedModel(model);
                    setOpen(false);
                }}/>); })}
                  </CommandGroup>); })}
              </CommandList>
            </Command>
          </HoverCard>
        </PopoverContent>
      </Popover>
    </div>);
}
function ModelItem(_a) {
    var model = _a.model, isSelected = _a.isSelected, onSelect = _a.onSelect, onPeek = _a.onPeek;
    var ref = React.useRef(null);
    useMutationObserver(ref, function (mutations) {
        mutations.forEach(function (mutation) {
            var _a;
            if (mutation.type === "attributes" &&
                mutation.attributeName === "aria-selected" &&
                ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.getAttribute("aria-selected")) === "true") {
                onPeek(model);
            }
        });
    });
    return (<CommandItem key={model.id} onSelect={onSelect} ref={ref} className="data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground">
      {model.name}
      <Check className={cn("ml-auto", isSelected ? "opacity-100" : "opacity-0")}/>
    </CommandItem>);
}
