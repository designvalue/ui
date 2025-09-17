"use server";
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
import { track } from "@vercel/analytics/server";
import { capitalCase } from "change-case";
import { getRegistryItem } from "@/lib/registry";
var TAILWIND_CONFIG_BLOCKS = ["dashboard-01"];
export function editInV0(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var item, projectName, files, tailwindConfig, payload, response, result, error_1;
        var _c;
        var name = _b.name, style = _b.style, url = _b.url;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    style = style !== null && style !== void 0 ? style : "new-york";
                    // Check if V0 integration is properly configured
                    if (!process.env.V0_URL || !process.env.V0_EDIT_SECRET) {
                        console.warn("V0 integration not configured. Missing V0_URL or V0_EDIT_SECRET environment variables.");
                        return [2 /*return*/, {
                                error: "V0 integration not configured",
                                url: null,
                            }];
                    }
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, getRegistryItem(name, style)];
                case 2:
                    item = _d.sent();
                    if (!item) {
                        return [2 /*return*/, {
                                error: "Item not found.",
                                url: null,
                            }];
                    }
                    projectName = capitalCase(name);
                    files = (_c = item.files) === null || _c === void 0 ? void 0 : _c.map(function (file) {
                        if (typeof file === "string") {
                            return {
                                name: file,
                                content: "",
                            };
                        }
                        return {
                            name: file.path,
                            content: file.content || "",
                        };
                    });
                    tailwindConfig = TAILWIND_CONFIG_BLOCKS.includes(name)
                        ? "import type { Config } from \"tailwindcss\";\n\nconst config: Config = {\n  content: [\n    \"./pages/**/*.{js,ts,jsx,tsx,mdx}\",\n    \"./components/**/*.{js,ts,jsx,tsx,mdx}\",\n    \"./app/**/*.{js,ts,jsx,tsx,mdx}\",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n};\nexport default config;\n"
                        : null;
                    if (tailwindConfig) {
                        files === null || files === void 0 ? void 0 : files.push({
                            name: "tailwind.config.ts",
                            content: tailwindConfig,
                        });
                    }
                    payload = {
                        files: files,
                        meta: {
                            name: projectName,
                            project: projectName,
                            file: "".concat(name, ".tsx"),
                        },
                    };
                    return [4 /*yield*/, fetch("".concat(process.env.V0_URL, "/chat/api/open-in-v0"), {
                            method: "POST",
                            body: JSON.stringify(payload),
                            headers: {
                                "x-v0-edit-secret": process.env.V0_EDIT_SECRET,
                                "content-type": "application/json",
                            },
                        })];
                case 3:
                    response = _d.sent();
                    if (!response.ok) {
                        return [2 /*return*/, {
                                error: "Failed to create v0 project.",
                                url: null,
                            }];
                    }
                    return [4 /*yield*/, response.json()];
                case 4:
                    result = _d.sent();
                    return [4 /*yield*/, track("open_in_v0", {
                            name: name,
                            style: style,
                            url: url,
                        })];
                case 5:
                    _d.sent();
                    return [2 /*return*/, __assign(__assign({}, result), { url: "".concat(process.env.V0_URL, "/chat/api/open-in-v0/").concat(result.id) })];
                case 6:
                    error_1 = _d.sent();
                    console.error(error_1);
                    return [2 /*return*/, {
                            error: "Something went wrong. Please try again.",
                            url: null,
                        }];
                case 7: return [2 /*return*/];
            }
        });
    });
}
