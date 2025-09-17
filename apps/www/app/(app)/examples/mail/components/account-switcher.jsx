"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/registry/new-york/ui/select";
export function AccountSwitcher(_a) {
    var _b, _c;
    var isCollapsed = _a.isCollapsed, accounts = _a.accounts;
    var _d = React.useState(accounts[0].email), selectedAccount = _d[0], setSelectedAccount = _d[1];
    return (<Select defaultValue={selectedAccount} onValueChange={setSelectedAccount}>
      <SelectTrigger className={cn("flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0", isCollapsed &&
            "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden")} aria-label="Select account">
        <SelectValue placeholder="Select an account">
          {(_b = accounts.find(function (account) { return account.email === selectedAccount; })) === null || _b === void 0 ? void 0 : _b.icon}
          <span className={cn("ml-2", isCollapsed && "hidden")}>
            {(_c = accounts.find(function (account) { return account.email === selectedAccount; })) === null || _c === void 0 ? void 0 : _c.label}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {accounts.map(function (account) { return (<SelectItem key={account.email} value={account.email}>
            <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
              {account.icon}
              {account.email}
            </div>
          </SelectItem>); })}
      </SelectContent>
    </Select>);
}
