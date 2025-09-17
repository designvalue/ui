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
import { cn } from "@/lib/utils";
function PageHeader(_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (<section className={cn("border-grid border-b", className)} {...props}>
      <div className="container-wrapper">
        <div className="container flex flex-col items-start gap-1 py-8 md:py-10 lg:py-12">
          {children}
        </div>
      </div>
    </section>);
}
function PageHeaderHeading(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<h1 className={cn("text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1]", className)} {...props}/>);
}
function PageHeaderDescription(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<p className={cn("max-w-2xl text-balance text-base font-light text-foreground sm:text-lg", className)} {...props}/>);
}
function PageActions(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<div className={cn("flex w-full items-center justify-start gap-2 pt-2", className)} {...props}/>);
}
export { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading };
