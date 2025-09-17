// @ts-nocheck
"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";
export function DashboardTableOfContents(_a) {
    var _b;
    var toc = _a.toc;
    var itemIds = React.useMemo(function () {
        return toc.items
            ? toc.items
                .flatMap(function (item) { var _a; return [item.url, (_a = item === null || item === void 0 ? void 0 : item.items) === null || _a === void 0 ? void 0 : _a.map(function (item) { return item.url; })]; })
                .flat()
                .filter(Boolean)
                .map(function (id) { return id === null || id === void 0 ? void 0 : id.split("#")[1]; })
            : [];
    }, [toc]);
    var activeHeading = useActiveItem(itemIds);
    var mounted = useMounted();
    if (!((_b = toc === null || toc === void 0 ? void 0 : toc.items) === null || _b === void 0 ? void 0 : _b.length)) {
        return null;
    }
    return (<div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <Tree tree={toc} activeItem={activeHeading}/>
    </div>);
}
function useActiveItem(itemIds) {
    var _a = React.useState(null), activeId = _a[0], setActiveId = _a[1];
    React.useEffect(function () {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, { rootMargin: "0% 0% -80% 0%" });
        itemIds === null || itemIds === void 0 ? void 0 : itemIds.forEach(function (id) {
            var element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });
        return function () {
            itemIds === null || itemIds === void 0 ? void 0 : itemIds.forEach(function (id) {
                var element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [itemIds]);
    return activeId;
}
function Tree(_a) {
    var _b;
    var tree = _a.tree, _c = _a.level, level = _c === void 0 ? 1 : _c, activeItem = _a.activeItem;
    return ((_b = tree === null || tree === void 0 ? void 0 : tree.items) === null || _b === void 0 ? void 0 : _b.length) && level < 3 ? (<ul className={cn("m-0 list-none", { "pl-4": level !== 1 })}>
      {tree.items.map(function (item, index) {
            var _a;
            return (<li key={index} className={cn("mt-0 pt-2")}>
            <a href={item.url} className={cn("inline-block no-underline transition-colors hover:text-foreground", item.url === "#".concat(activeItem)
                    ? "font-medium text-foreground"
                    : "text-muted-foreground")}>
              {item.title}
            </a>
            {((_a = item.items) === null || _a === void 0 ? void 0 : _a.length) ? (<Tree tree={item} level={level + 1} activeItem={activeItem}/>) : null}
          </li>);
        })}
    </ul>) : null;
}
