"use client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
import { editInV0 } from "@/actions/edit-in-v0";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, } from "@/registry/new-york/ui/tooltip";
function V0Tooltip(_a) {
    var size = _a.size, _b = _a.style, style = _b === void 0 ? "default" : _b, children = _a.children;
    if (size === "default") {
        return <>{children}</>;
    }
    return (<Tooltip>
      <TooltipTrigger asChild>
        {style === "new-york" ? (<span tabIndex={-1}>{children}</span>) : (<>{children}</>)}
      </TooltipTrigger>
      <TooltipContent>
        {style === "new-york" ? (<>Not available in New York</>) : (<>Open in v0</>)}
      </TooltipContent>
    </Tooltip>);
}
export function V0Button(_a) {
    var _this = this;
    var name = _a.name, _b = _a.size, size = _b === void 0 ? "default" : _b, disabled = _a.disabled, className = _a.className, props = __rest(_a, ["name", "size", "disabled", "className"]);
    var _c = React.useState("https://ui.shadcn.com"), url = _c[0], setUrl = _c[1];
    React.useEffect(function () {
        setUrl(window.location.href);
    }, []);
    return (<form action={function () { return __awaiter(_this, void 0, void 0, function () {
            var result, popupOpened, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, editInV0({
                                name: name,
                                url: url,
                            })];
                    case 1:
                        result = _a.sent();
                        if (result === null || result === void 0 ? void 0 : result.error) {
                            throw new Error(result.error);
                        }
                        if (result === null || result === void 0 ? void 0 : result.url) {
                            popupOpened = window.open(result.url, "_blank");
                            if (!popupOpened) {
                                toast.warning("Pop-up window blocked.", {
                                    description: "Click the pop-up button in your browser to continue.",
                                    duration: 5000,
                                });
                            }
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1 instanceof Error) {
                            toast.error(error_1.message);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); }}>
      <Form size={size} className={className} disabled={disabled} {...props}/>
    </form>);
}
function Form(_a) {
    var disabled = _a.disabled, _b = _a.size, size = _b === void 0 ? "default" : _b, className = _a.className, props = __rest(_a, ["disabled", "size", "className"]);
    var pending = useFormStatus().pending;
    return (<V0Tooltip size={size}>
      <Button aria-label="Open in v0" className={cn("z-50 h-[calc(theme(spacing.7)_-_1px)] gap-1 rounded-[6px] bg-black px-3 text-xs text-white hover:bg-black hover:text-white dark:bg-white dark:text-black", size === "icon" && "h-7 w-7 p-0", className)} disabled={disabled || pending} {...props}>
        {size === "icon" ? (<>
            {pending ? (<Loader2 className="h-3.5 w-3.5 animate-spin"/>) : (<V0Logo className="h-4 w-4"/>)}
          </>) : (<>
            {pending && <Loader2 className="h-3.5 w-3.5 animate-spin"/>}
            Open in <V0Logo />
          </>)}
      </Button>
    </V0Tooltip>);
}
export function V0Logo(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<svg viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("h-5 w-5 text-current", className)} {...props}>
      <path d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z" fill="currentColor"></path>
      <path d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z" fill="currentColor"></path>
    </svg>);
}
