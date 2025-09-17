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
import { promises as fs } from "fs";
import { tmpdir } from "os";
import path from "path";
import { Index } from "@/__registry__";
import { registryItemSchema } from "shadcn/schema";
import { Project, ScriptKind, SyntaxKind } from "ts-morph";
export var DEFAULT_REGISTRY_STYLE = "new-york";
var memoizedIndex = Object.fromEntries(Object.entries(Index).map(function (_a) {
    var style = _a[0], items = _a[1];
    return [style, __assign({}, items)];
}));
export function getRegistryComponent(name, style) {
    var _a;
    if (style === void 0) { style = DEFAULT_REGISTRY_STYLE; }
    return (_a = memoizedIndex[style][name]) === null || _a === void 0 ? void 0 : _a.component;
}
export function getRegistryItem(name_1) {
    return __awaiter(this, arguments, void 0, function (name, style) {
        var item, result, files, _i, _a, file, content, relativePath, parsed;
        if (style === void 0) { style = DEFAULT_REGISTRY_STYLE; }
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    item = memoizedIndex[style][name];
                    if (!item) {
                        return [2 /*return*/, null];
                    }
                    // Convert all file paths to object.
                    // TODO: remove when we migrate to new registry.
                    item.files = item.files.map(function (file) {
                        return typeof file === "string" ? { path: file } : file;
                    });
                    result = registryItemSchema.safeParse(item);
                    if (!result.success) {
                        return [2 /*return*/, null];
                    }
                    files = [];
                    _i = 0, _a = item.files;
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    file = _a[_i];
                    return [4 /*yield*/, getFileContent(file)];
                case 2:
                    content = _b.sent();
                    relativePath = path.relative(process.cwd(), file.path);
                    files.push(__assign(__assign({}, file), { path: relativePath, content: content }));
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    // Get meta.
                    // Assume the first file is the main file.
                    // const meta = await getFileMeta(files[0].path)
                    // Fix file paths.
                    files = fixFilePaths(files);
                    parsed = registryItemSchema.safeParse(__assign(__assign({}, result.data), { files: files }));
                    if (!parsed.success) {
                        console.error(parsed.error.message);
                        return [2 /*return*/, null];
                    }
                    return [2 /*return*/, parsed.data];
            }
        });
    });
}
function getFileContent(file) {
    return __awaiter(this, void 0, void 0, function () {
        var raw, project, tempFile, sourceFile, code;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs.readFile(file.path, "utf-8")];
                case 1:
                    raw = _a.sent();
                    project = new Project({
                        compilerOptions: {},
                    });
                    return [4 /*yield*/, createTempSourceFile(file.path)];
                case 2:
                    tempFile = _a.sent();
                    sourceFile = project.createSourceFile(tempFile, raw, {
                        scriptKind: ScriptKind.TSX,
                    });
                    // Remove meta variables.
                    removeVariable(sourceFile, "iframeHeight");
                    removeVariable(sourceFile, "containerClassName");
                    removeVariable(sourceFile, "description");
                    code = sourceFile.getFullText();
                    // Some registry items uses default export.
                    // We want to use named export instead.
                    // TODO: do we really need this? - @shadcn.
                    if (file.type !== "registry:page") {
                        code = code.replaceAll("export default", "export");
                    }
                    // Fix imports.
                    code = fixImport(code);
                    return [2 /*return*/, code];
            }
        });
    });
}
function getFileMeta(filePath) {
    return __awaiter(this, void 0, void 0, function () {
        var raw, project, tempFile, sourceFile, iframeHeight, containerClassName, description;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs.readFile(filePath, "utf-8")];
                case 1:
                    raw = _a.sent();
                    project = new Project({
                        compilerOptions: {},
                    });
                    return [4 /*yield*/, createTempSourceFile(filePath)];
                case 2:
                    tempFile = _a.sent();
                    sourceFile = project.createSourceFile(tempFile, raw, {
                        scriptKind: ScriptKind.TSX,
                    });
                    iframeHeight = extractVariable(sourceFile, "iframeHeight");
                    containerClassName = extractVariable(sourceFile, "containerClassName");
                    description = extractVariable(sourceFile, "description");
                    return [2 /*return*/, {
                            iframeHeight: iframeHeight,
                            containerClassName: containerClassName,
                            description: description,
                        }];
            }
        });
    });
}
function getFileTarget(file) {
    var target = file.target;
    if (!target || target === "") {
        var fileName = file.path.split("/").pop();
        if (file.type === "registry:block" ||
            file.type === "registry:component" ||
            file.type === "registry:example") {
            target = "components/".concat(fileName);
        }
        if (file.type === "registry:ui") {
            target = "components/ui/".concat(fileName);
        }
        if (file.type === "registry:hook") {
            target = "hooks/".concat(fileName);
        }
        if (file.type === "registry:lib") {
            target = "lib/".concat(fileName);
        }
    }
    return target !== null && target !== void 0 ? target : "";
}
function createTempSourceFile(filename) {
    return __awaiter(this, void 0, void 0, function () {
        var dir;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs.mkdtemp(path.join(tmpdir(), "shadcn-"))];
                case 1:
                    dir = _a.sent();
                    return [2 /*return*/, path.join(dir, filename)];
            }
        });
    });
}
function removeVariable(sourceFile, name) {
    var _a;
    (_a = sourceFile.getVariableDeclaration(name)) === null || _a === void 0 ? void 0 : _a.remove();
}
function extractVariable(sourceFile, name) {
    var variable = sourceFile.getVariableDeclaration(name);
    if (!variable) {
        return null;
    }
    var value = variable
        .getInitializerIfKindOrThrow(SyntaxKind.StringLiteral)
        .getLiteralValue();
    variable.remove();
    return value;
}
function fixFilePaths(files) {
    if (!files) {
        return [];
    }
    // Resolve all paths relative to the first file's directory.
    var firstFilePath = files[0].path;
    var firstFilePathDir = path.dirname(firstFilePath);
    return files.map(function (file) {
        return __assign(__assign({}, file), { path: path.relative(firstFilePathDir, file.path), target: getFileTarget(file) });
    });
}
export function fixImport(content) {
    var regex = /@\/(.+?)\/((?:.*?\/)?(?:components|ui|hooks|lib))\/([\w-]+)/g;
    var replacement = function (match, path, type, component) {
        if (type.endsWith("components")) {
            return "@/components/".concat(component);
        }
        else if (type.endsWith("ui")) {
            return "@/components/ui/".concat(component);
        }
        else if (type.endsWith("hooks")) {
            return "@/hooks/".concat(component);
        }
        else if (type.endsWith("lib")) {
            return "@/lib/".concat(component);
        }
        return match;
    };
    return content.replace(regex, replacement);
}
export function createFileTreeForRegistryItemFiles(files) {
    var _a;
    var root = [];
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var file = files_1[_i];
        var path_1 = (_a = file.target) !== null && _a !== void 0 ? _a : file.path;
        var parts = path_1.split("/");
        var currentLevel = root;
        var _loop_1 = function (i) {
            var part = parts[i];
            var isFile = i === parts.length - 1;
            var existingNode = currentLevel.find(function (node) { return node.name === part; });
            if (existingNode) {
                if (isFile) {
                    // Update existing file node with full path
                    existingNode.path = path_1;
                }
                else {
                    // Move to next level in the tree
                    currentLevel = existingNode.children;
                }
            }
            else {
                var newNode = isFile
                    ? { name: part, path: path_1 }
                    : { name: part, children: [] };
                currentLevel.push(newNode);
                if (!isFile) {
                    currentLevel = newNode.children;
                }
            }
        };
        for (var i = 0; i < parts.length; i++) {
            _loop_1(i);
        }
    }
    return root;
}
