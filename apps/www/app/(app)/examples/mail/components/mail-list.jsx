var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/new-york/ui/badge";
import { ScrollArea } from "@/registry/new-york/ui/scroll-area";
import { useMail } from "@/app/(app)/examples/mail/use-mail";
export function MailList(_a) {
    var items = _a.items;
    var _b = useMail(), mail = _b[0], setMail = _b[1];
    return (<ScrollArea className="h-screen">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {items.map(function (item) { return (<button key={item.id} className={cn("flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent", mail.selected === item.id && "bg-muted")} onClick={function () {
                return setMail(__assign(__assign({}, mail), { selected: item.id }));
            }}>
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{item.name}</div>
                  {!item.read && (<span className="flex h-2 w-2 rounded-full bg-blue-600"/>)}
                </div>
                <div className={cn("ml-auto text-xs", mail.selected === item.id
                ? "text-foreground"
                : "text-muted-foreground")}>
                  {formatDistanceToNow(new Date(item.date), {
                addSuffix: true,
            })}
                </div>
              </div>
              <div className="text-xs font-medium">{item.subject}</div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {item.text.substring(0, 300)}
            </div>
            {item.labels.length ? (<div className="flex items-center gap-2">
                {item.labels.map(function (label) { return (<Badge key={label} variant={getBadgeVariantFromLabel(label)}>
                    {label}
                  </Badge>); })}
              </div>) : null}
          </button>); })}
      </div>
    </ScrollArea>);
}
function getBadgeVariantFromLabel(label) {
    if (["work"].includes(label.toLowerCase())) {
        return "default";
    }
    if (["personal"].includes(label.toLowerCase())) {
        return "outline";
    }
    return "secondary";
}
