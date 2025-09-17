import { visit } from "unist-util-visit";
export function rehypeNpmCommand() {
    return function (tree) {
        visit(tree, function (node) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
            if (node.type !== "element" || (node === null || node === void 0 ? void 0 : node.tagName) !== "pre") {
                return;
            }
            // npm install.
            if ((_b = (_a = node.properties) === null || _a === void 0 ? void 0 : _a["__rawString__"]) === null || _b === void 0 ? void 0 : _b.startsWith("npm install")) {
                var npmCommand = (_c = node.properties) === null || _c === void 0 ? void 0 : _c["__rawString__"];
                node.properties["__npmCommand__"] = npmCommand;
                node.properties["__yarnCommand__"] = npmCommand.replace("npm install", "yarn add");
                node.properties["__pnpmCommand__"] = npmCommand.replace("npm install", "pnpm add");
                node.properties["__bunCommand__"] = npmCommand.replace("npm install", "bun add");
            }
            // npx create-.
            if ((_e = (_d = node.properties) === null || _d === void 0 ? void 0 : _d["__rawString__"]) === null || _e === void 0 ? void 0 : _e.startsWith("npx create-")) {
                var npmCommand = (_f = node.properties) === null || _f === void 0 ? void 0 : _f["__rawString__"];
                node.properties["__npmCommand__"] = npmCommand;
                node.properties["__yarnCommand__"] = npmCommand.replace("npx create-", "yarn create ");
                node.properties["__pnpmCommand__"] = npmCommand.replace("npx create-", "pnpm create ");
                node.properties["__bunCommand__"] = npmCommand.replace("npx", "bunx --bun");
            }
            // npm create.
            if ((_h = (_g = node.properties) === null || _g === void 0 ? void 0 : _g["__rawString__"]) === null || _h === void 0 ? void 0 : _h.startsWith("npm create")) {
                var npmCommand = (_j = node.properties) === null || _j === void 0 ? void 0 : _j["__rawString__"];
                node.properties["__npmCommand__"] = npmCommand;
                node.properties["__yarnCommand__"] = npmCommand.replace("npm create", "yarn create");
                node.properties["__pnpmCommand__"] = npmCommand.replace("npm create", "pnpm create");
                node.properties["__bunCommand__"] = npmCommand.replace("npm create", "bun create");
            }
            // npx.
            if (((_l = (_k = node.properties) === null || _k === void 0 ? void 0 : _k["__rawString__"]) === null || _l === void 0 ? void 0 : _l.startsWith("npx")) &&
                !((_o = (_m = node.properties) === null || _m === void 0 ? void 0 : _m["__rawString__"]) === null || _o === void 0 ? void 0 : _o.startsWith("npx create-"))) {
                var npmCommand = (_p = node.properties) === null || _p === void 0 ? void 0 : _p["__rawString__"];
                node.properties["__npmCommand__"] = npmCommand;
                node.properties["__yarnCommand__"] = npmCommand;
                node.properties["__pnpmCommand__"] = npmCommand.replace("npx", "pnpm dlx");
                node.properties["__bunCommand__"] = npmCommand.replace("npx", "bunx --bun");
            }
            // npm run.
            if ((_r = (_q = node.properties) === null || _q === void 0 ? void 0 : _q["__rawString__"]) === null || _r === void 0 ? void 0 : _r.startsWith("npm run")) {
                var npmCommand = (_s = node.properties) === null || _s === void 0 ? void 0 : _s["__rawString__"];
                node.properties["__npmCommand__"] = npmCommand;
                node.properties["__yarnCommand__"] = npmCommand.replace("npm run", "yarn");
                node.properties["__pnpmCommand__"] = npmCommand.replace("npm run", "pnpm");
                node.properties["__bunCommand__"] = npmCommand.replace("npm run", "bun");
            }
        });
    };
}
