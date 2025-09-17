import { type Registry } from "shadcn/schema"
import { z } from "zod"

import { blocks } from "./registry-blocks.js"
import { charts } from "./registry-charts.js"
import { examples } from "./registry-examples.js"
import { hooks } from "./registry-hooks.js"
import { internal } from "./registry-internal.js"
import { lib } from "./registry-lib.js"
import { themes } from "./registry-themes.js"
import { ui } from "./registry-ui.js"

export const registry = {
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
    ...ui,
    ...blocks,
    ...charts,
    ...lib,
    ...hooks,
    ...themes,

    // Internal use only.
    ...internal,
    ...examples,
  ],
} satisfies Registry
