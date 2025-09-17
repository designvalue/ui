"use client";
import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/registry/new-york/ui/button";
import { Calendar } from "@/registry/new-york/ui/calendar";
import { Label } from "@/registry/new-york/ui/label";
import { Popover, PopoverContent, PopoverTrigger, } from "@/registry/new-york/ui/popover";
export default function Calendar23() {
    const [range, setRange] = React.useState(undefined);
    return (<div className="flex flex-col gap-3">
      <Label htmlFor="dates" className="px-1">
        Select your stay
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" id="dates" className="w-56 justify-between font-normal">
            {(range === null || range === void 0 ? void 0 : range.from) && (range === null || range === void 0 ? void 0 : range.to)
            ? `${range.from.toLocaleDateString()} - ${range.to.toLocaleDateString()}`
            : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar mode="range" selected={range} captionLayout="dropdown" onSelect={(range) => {
            setRange(range);
        }}/>
        </PopoverContent>
      </Popover>
    </div>);
}
