import { ArrowDown, ArrowUp, ChevronsUpDown, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/registry/new-york/ui/dropdown-menu";
export function DataTableColumnHeader(_a) {
    var column = _a.column, title = _a.title, className = _a.className;
    if (!column.getCanSort()) {
        return <div className={cn(className)}>{title}</div>;
    }
    return (<div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="-ml-3 h-8 data-[state=open]:bg-accent">
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (<ArrowDown />) : column.getIsSorted() === "asc" ? (<ArrowUp />) : (<ChevronsUpDown />)}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={function () { return column.toggleSorting(false); }}>
            <ArrowUp className="h-3.5 w-3.5 text-muted-foreground/70"/>
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={function () { return column.toggleSorting(true); }}>
            <ArrowDown className="h-3.5 w-3.5 text-muted-foreground/70"/>
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={function () { return column.toggleVisibility(false); }}>
            <EyeOff className="h-3.5 w-3.5 text-muted-foreground/70"/>
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>);
}
