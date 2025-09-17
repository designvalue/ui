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
import fs from "fs";
import path from "path";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";
import { Index } from "../__registry__";
import { styles } from "../registry/registry-styles";
export function rehypeComponent() {
    var _this = this;
    return function (tree) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            visit(tree, function (node) {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                // src prop overrides both name and fileName.
                var srcPath = (getNodeAttributeByName(node, "src") || {}).value;
                if (node.name === "ComponentSource") {
                    var name_1 = (_a = getNodeAttributeByName(node, "name")) === null || _a === void 0 ? void 0 : _a.value;
                    var fileName_1 = (_b = getNodeAttributeByName(node, "fileName")) === null || _b === void 0 ? void 0 : _b.value;
                    if (!name_1 && !srcPath) {
                        return null;
                    }
                    try {
                        for (var _i = 0, styles_1 = styles; _i < styles_1.length; _i++) {
                            var style = styles_1[_i];
                            var src = void 0;
                            if (srcPath) {
                                src = path.join(process.cwd(), srcPath);
                            }
                            else {
                                var component = Index[style.name][name_1];
                                src = fileName_1
                                    ? component.files.find(function (file) {
                                        if (typeof file === "string") {
                                            return (file.endsWith("".concat(fileName_1, ".tsx")) ||
                                                file.endsWith("".concat(fileName_1, ".ts")));
                                        }
                                        return false;
                                    }) || ((_c = component.files[0]) === null || _c === void 0 ? void 0 : _c.path)
                                    : (_d = component.files[0]) === null || _d === void 0 ? void 0 : _d.path;
                            }
                            // Read the source file.
                            var filePath = src;
                            var source = fs.readFileSync(filePath, "utf8");
                            // Replace imports.
                            // TODO: Use @swc/core and a visitor to replace this.
                            // For now a simple regex should do.
                            source = source.replaceAll("@/registry/".concat(style.name, "/"), "@/components/");
                            source = source.replaceAll("export default", "export");
                            // Add code as children so that rehype can take over at build time.
                            (_e = node.children) === null || _e === void 0 ? void 0 : _e.push(u("element", {
                                tagName: "pre",
                                properties: {
                                    __src__: src,
                                    __style__: style.name,
                                },
                                attributes: [
                                    {
                                        name: "styleName",
                                        type: "mdxJsxAttribute",
                                        value: style.name,
                                    },
                                ],
                                children: [
                                    u("element", {
                                        tagName: "code",
                                        properties: {
                                            className: ["language-tsx"],
                                        },
                                        children: [
                                            {
                                                type: "text",
                                                value: source,
                                            },
                                        ],
                                    }),
                                ],
                            }));
                        }
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
                if (node.name === "ComponentPreview") {
                    var name_2 = (_f = getNodeAttributeByName(node, "name")) === null || _f === void 0 ? void 0 : _f.value;
                    if (!name_2) {
                        return null;
                    }
                    try {
                        for (var _j = 0, styles_2 = styles; _j < styles_2.length; _j++) {
                            var style = styles_2[_j];
                            var component = Index[style.name][name_2];
                            var src = (_g = component.files[0]) === null || _g === void 0 ? void 0 : _g.path;
                            // Read the source file.
                            var filePath = src;
                            var source = fs.readFileSync(filePath, "utf8");
                            // Replace imports.
                            // TODO: Use @swc/core and a visitor to replace this.
                            // For now a simple regex should do.
                            source = source.replaceAll("@/registry/".concat(style.name, "/"), "@/components/");
                            source = source.replaceAll("export default", "export");
                            // Add code as children so that rehype can take over at build time.
                            (_h = node.children) === null || _h === void 0 ? void 0 : _h.push(u("element", {
                                tagName: "pre",
                                properties: {
                                    __src__: src,
                                },
                                children: [
                                    u("element", {
                                        tagName: "code",
                                        properties: {
                                            className: ["language-tsx"],
                                        },
                                        children: [
                                            {
                                                type: "text",
                                                value: source,
                                            },
                                        ],
                                    }),
                                ],
                            }));
                        }
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
                // if (node.name === "ComponentExample") {
                //   const source = getComponentSourceFileContent(node)
                //   if (!source) {
                //     return
                //   }
                //   // Replace the Example component with a pre element.
                //   node.children?.push(
                //     u("element", {
                //       tagName: "pre",
                //       properties: {
                //         __src__: src,
                //       },
                //       children: [
                //         u("element", {
                //           tagName: "code",
                //           properties: {
                //             className: ["language-tsx"],
                //           },
                //           children: [
                //             {
                //               type: "text",
                //               value: source,
                //             },
                //           ],
                //         }),
                //       ],
                //     })
                //   )
                //   const extractClassname = getNodeAttributeByName(
                //     node,
                //     "extractClassname"
                //   )
                //   if (
                //     extractClassname &&
                //     typeof extractClassname.value !== "undefined" &&
                //     extractClassname.value !== "false"
                //   ) {
                //     // Extract className from string
                //     // TODO: Use @swc/core and a visitor to extract this.
                //     // For now, a simple regex should do.
                //     const values = source.match(/className="(.*)"/)
                //     const className = values ? values[1] : ""
                //     // Add the className as a jsx prop so we can pass it to the copy button.
                //     node.attributes?.push({
                //       name: "extractedClassNames",
                //       type: "mdxJsxAttribute",
                //       value: className,
                //     })
                //     // Add a pre element with the className only.
                //     node.children?.push(
                //       u("element", {
                //         tagName: "pre",
                //         properties: {},
                //         children: [
                //           u("element", {
                //             tagName: "code",
                //             properties: {
                //               className: ["language-tsx"],
                //             },
                //             children: [
                //               {
                //                 type: "text",
                //                 value: className,
                //               },
                //             ],
                //           }),
                //         ],
                //       })
                //     )
                //   }
                // }
                // if (node.name === "ComponentSource") {
                //   const source = getComponentSourceFileContent(node)
                //   if (!source) {
                //     return
                //   }
                //   // Replace the Source component with a pre element.
                //   node.children?.push(
                //     u("element", {
                //       tagName: "pre",
                //       properties: {
                //         __src__: src,
                //       },
                //       children: [
                //         u("element", {
                //           tagName: "code",
                //           properties: {
                //             className: ["language-tsx"],
                //           },
                //           children: [
                //             {
                //               type: "text",
                //               value: source,
                //             },
                //           ],
                //         }),
                //       ],
                //     })
                //   )
                // }
            });
            return [2 /*return*/];
        });
    }); };
}
function getNodeAttributeByName(node, name) {
    var _a;
    return (_a = node.attributes) === null || _a === void 0 ? void 0 : _a.find(function (attribute) { return attribute.name === name; });
}
function getComponentSourceFileContent(node) {
    var _a;
    var src = (_a = getNodeAttributeByName(node, "src")) === null || _a === void 0 ? void 0 : _a.value;
    if (!src) {
        return null;
    }
    // Read the source file.
    var filePath = path.join(process.cwd(), src);
    var source = fs.readFileSync(filePath, "utf8");
    return source;
}
