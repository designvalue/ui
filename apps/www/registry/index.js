"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registry = void 0;
const registry_blocks_1 = require("@/registry/registry-blocks");
const registry_charts_1 = require("@/registry/registry-charts");
const registry_examples_1 = require("@/registry/registry-examples");
const registry_hooks_1 = require("@/registry/registry-hooks");
const registry_internal_1 = require("@/registry/registry-internal");
const registry_lib_1 = require("@/registry/registry-lib");
const registry_themes_1 = require("@/registry/registry-themes");
const registry_ui_1 = require("@/registry/registry-ui");
exports.registry = {
    name: "shadcn/ui",
    homepage: "https://ui.shadcn.com",
    items: [
        {
            name: "index",
            type: "registry:style",
            dependencies: [
                "tailwindcss-animate",
                "class-variance-authority",
                "lucide-react",
            ],
            registryDependencies: ["utils"],
            tailwind: {
                config: {
                    plugins: ['require("tailwindcss-animate")'],
                },
            },
            cssVars: {},
            files: [],
        },
        {
            name: "style",
            type: "registry:style",
            dependencies: [
                "tailwindcss-animate",
                "class-variance-authority",
                "lucide-react",
            ],
            registryDependencies: ["utils"],
            tailwind: {
                config: {
                    plugins: ['require("tailwindcss-animate")'],
                },
            },
            cssVars: {},
            files: [],
        },
        ...registry_ui_1.ui,
        ...registry_blocks_1.blocks,
        ...registry_charts_1.charts,
        ...registry_lib_1.lib,
        ...registry_hooks_1.hooks,
        ...registry_themes_1.themes,
        // Internal use only.
        ...registry_internal_1.internal,
        ...registry_examples_1.examples,
    ],
};
