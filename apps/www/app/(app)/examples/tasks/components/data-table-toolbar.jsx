"use client";
import { X } from "lucide-react";
import { Button } from "@/registry/new-york/ui/button";
import { Input } from "@/registry/new-york/ui/input";
import { DataTableViewOptions } from "@/app/(app)/examples/tasks/components/data-table-view-options";
import { priorities, statuses } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
export function DataTableToolbar(_a) {
    var _b, _c;
    var table = _a.table;
    var isFiltered = table.getState().columnFilters.length > 0;
    return (<div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input placeholder="Filter tasks..." value={(_c = (_b = table.getColumn("title")) === null || _b === void 0 ? void 0 : _b.getFilterValue()) !== null && _c !== void 0 ? _c : ""} onChange={function (event) { var _a; return (_a = table.getColumn("title")) === null || _a === void 0 ? void 0 : _a.setFilterValue(event.target.value); }} className="h-8 w-[150px] lg:w-[250px]"/>
        {table.getColumn("status") && (<DataTableFacetedFilter column={table.getColumn("status")} title="Status" options={statuses}/>)}
        {table.getColumn("priority") && (<DataTableFacetedFilter column={table.getColumn("priority")} title="Priority" options={priorities}/>)}
        {isFiltered && (<Button variant="ghost" onClick={function () { return table.resetColumnFilters(); }} className="h-8 px-2 lg:px-3">
            Reset
            <X />
          </Button>)}
      </div>
      <DataTableViewOptions table={table}/>
    </div>);
}
