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
import Link from "next/link";
import { cn } from "@/lib/utils";
export function MainNav(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link href="/examples/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
        Overview
      </Link>
      <Link href="/examples/dashboard" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Customers
      </Link>
      <Link href="/examples/dashboard" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Products
      </Link>
      <Link href="/examples/dashboard" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Settings
      </Link>
    </nav>);
}
