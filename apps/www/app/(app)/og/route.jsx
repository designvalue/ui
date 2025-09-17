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
import { ImageResponse } from "next/og";
function loadAssets() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, normal, mono, semibold;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Promise.all([
                        import("./geist-regular-otf.json").then(function (mod) { return mod.default || mod; }),
                        import("./geistmono-regular-otf.json").then(function (mod) { return mod.default || mod; }),
                        import("./geist-semibold-otf.json").then(function (mod) { return mod.default || mod; }),
                    ])];
                case 1:
                    _a = _b.sent(), normal = _a[0].base64Font, mono = _a[1].base64Font, semibold = _a[2].base64Font;
                    return [2 /*return*/, [
                            {
                                name: "Geist",
                                data: Buffer.from(normal, "base64"),
                                weight: 400,
                                style: "normal",
                            },
                            {
                                name: "Geist Mono",
                                data: Buffer.from(mono, "base64"),
                                weight: 400,
                                style: "normal",
                            },
                            {
                                name: "Geist",
                                data: Buffer.from(semibold, "base64"),
                                weight: 600,
                                style: "normal",
                            },
                        ]];
            }
        });
    });
}
export function GET(request) {
    return __awaiter(this, void 0, void 0, function () {
        var searchParams, title, description, fonts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    searchParams = new URL(request.url).searchParams;
                    title = searchParams.get("title");
                    description = searchParams.get("description");
                    return [4 /*yield*/, Promise.all([loadAssets()])];
                case 1:
                    fonts = (_a.sent())[0];
                    return [2 /*return*/, new ImageResponse((<div tw="flex h-full w-full bg-black text-white" style={{ fontFamily: "Geist Sans" }}>
        <div tw="flex border absolute border-stone-700 border-dashed inset-y-0 left-16 w-[1px]"/>
        <div tw="flex border absolute border-stone-700 border-dashed inset-y-0 right-16 w-[1px]"/>
        <div tw="flex border absolute border-stone-700 inset-x-0 h-[1px] top-16"/>
        <div tw="flex border absolute border-stone-700 inset-x-0 h-[1px] bottom-16"/>
        <div tw="flex absolute flex-row bottom-24 right-24 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={48} height={48}>
            <rect width="256" height="256" fill="none"></rect>
            <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line>
            <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line>
          </svg>
        </div>
        <div tw="flex flex-col absolute w-[896px] justify-center inset-32">
          <div tw="tracking-tight flex-grow-1 flex flex-col justify-center leading-[1.1]" style={{
                                textWrap: "balance",
                                fontWeight: 600,
                                fontSize: title && title.length > 20 ? 64 : 80,
                                letterSpacing: "-0.04em",
                            }}>
            {title}
          </div>
          <div tw="text-[40px] leading-[1.5] flex-grow-1 text-stone-400" style={{
                                fontWeight: 500,
                                textWrap: "balance",
                            }}>
            {description}
          </div>
        </div>
      </div>), {
                            width: 1200,
                            height: 628,
                            fonts: fonts,
                        })];
            }
        });
    });
}
