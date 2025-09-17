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
import { CheckIcon, ClipboardIcon } from "lucide-react";
import { trackEvent } from "@/lib/events";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/registry/new-york/ui/dropdown-menu";
export function copyToClipboardWithMeta(value, event) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            navigator.clipboard.writeText(value);
            if (event) {
                trackEvent(event);
            }
            return [2 /*return*/];
        });
    });
}
export function CopyButton(_a) {
    var value = _a.value, className = _a.className, src = _a.src, _b = _a.variant, variant = _b === void 0 ? "ghost" : _b, event = _a.event, props = __rest(_a, ["value", "className", "src", "variant", "event"]);
    var _c = React.useState(false), hasCopied = _c[0], setHasCopied = _c[1];
    React.useEffect(function () {
        setTimeout(function () {
            setHasCopied(false);
        }, 2000);
    }, [hasCopied]);
    return (<Button size="icon" variant={variant} className={cn("relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:h-3 [&_svg]:w-3", className)} onClick={function () {
            copyToClipboardWithMeta(value, event
                ? {
                    name: event,
                    properties: {
                        code: value,
                    },
                }
                : undefined);
            setHasCopied(true);
        }} {...props}>
      <span className="sr-only">Copy</span>
      {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
    </Button>);
}
export function CopyWithClassNames(_a) {
    var value = _a.value, classNames = _a.classNames, className = _a.className, props = __rest(_a, ["value", "classNames", "className"]);
    var _b = React.useState(false), hasCopied = _b[0], setHasCopied = _b[1];
    React.useEffect(function () {
        setTimeout(function () {
            setHasCopied(false);
        }, 2000);
    }, [hasCopied]);
    var copyToClipboard = React.useCallback(function (value) {
        copyToClipboardWithMeta(value);
        setHasCopied(true);
    }, []);
    return (<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost" className={cn("relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50", className)}>
          {hasCopied ? (<CheckIcon className="h-3 w-3"/>) : (<ClipboardIcon className="h-3 w-3"/>)}
          <span className="sr-only">Copy</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={function () { return copyToClipboard(value); }}>
          Component
        </DropdownMenuItem>
        <DropdownMenuItem onClick={function () { return copyToClipboard(classNames); }}>
          Classname
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>);
}
export function CopyNpmCommandButton(_a) {
    var commands = _a.commands, className = _a.className, props = __rest(_a, ["commands", "className"]);
    var _b = React.useState(false), hasCopied = _b[0], setHasCopied = _b[1];
    React.useEffect(function () {
        setTimeout(function () {
            setHasCopied(false);
        }, 2000);
    }, [hasCopied]);
    var copyCommand = React.useCallback(function (value, pm) {
        copyToClipboardWithMeta(value, {
            name: "copy_npm_command",
            properties: {
                command: value,
                pm: pm,
            },
        });
        setHasCopied(true);
    }, []);
    return (<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost" className={cn("relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50", className)}>
          {hasCopied ? (<CheckIcon className="h-3 w-3"/>) : (<ClipboardIcon className="h-3 w-3"/>)}
          <span className="sr-only">Copy</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={function () { return copyCommand(commands.__npmCommand__, "npm"); }}>
          npm
        </DropdownMenuItem>
        <DropdownMenuItem onClick={function () { return copyCommand(commands.__yarnCommand__, "yarn"); }}>
          yarn
        </DropdownMenuItem>
        <DropdownMenuItem onClick={function () { return copyCommand(commands.__pnpmCommand__, "pnpm"); }}>
          pnpm
        </DropdownMenuItem>
        <DropdownMenuItem onClick={function () { return copyCommand(commands.__bunCommand__, "bun"); }}>
          bun
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>);
}
