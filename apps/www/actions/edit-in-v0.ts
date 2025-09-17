"use server"

import { track } from "@vercel/analytics/server"
import { capitalCase } from "change-case"

import { getRegistryItem } from "@/lib/registry"
import { Style } from "@/registry/registry-styles"

const TAILWIND_CONFIG_BLOCKS = ["dashboard-01"]

export async function editInV0({
  name,
  style,
  url,
}: {
  name: string
  style?: Style["name"]
  url: string
}) {
  style = style ?? "new-york"

  // Check if V0 integration is properly configured
  if (!process.env.V0_URL || !process.env.V0_EDIT_SECRET) {
    console.warn("V0 integration not configured. Missing V0_URL or V0_EDIT_SECRET environment variables.")
    return {
      error: "V0 integration not configured",
      url: null,
    }
  }

  try {
    const item = await getRegistryItem(name, style)

    if (!item) {
      return {
        error: "Item not found.",
        url: null,
      }
    }

    const projectName = capitalCase(name)

    const files = item.files?.map((file) => {
      if (typeof file === "string") {
        return {
          name: file,
          content: "",
        }
      }

      return {
        name: file.path,
        content: file.content || "",
      }
    })

    const tailwindConfig = TAILWIND_CONFIG_BLOCKS.includes(name)
      ? `import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
`
      : null

    if (tailwindConfig) {
      files?.push({
        name: "tailwind.config.ts",
        content: tailwindConfig,
      })
    }

    const payload = {
      files,
      meta: {
        name: projectName,
        project: projectName,
        file: `${name}.tsx`,
      },
    }

    const response = await fetch(`${process.env.V0_URL}/chat/api/open-in-v0`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "x-v0-edit-secret": process.env.V0_EDIT_SECRET!,
        "content-type": "application/json",
      },
    })

    if (!response.ok) {
      return {
        error: "Failed to create v0 project.",
        url: null,
      }
    }

    const result = await response.json()

    await track("open_in_v0", {
      name,
      style,
      url,
    })

    return {
      ...result,
      url: `${process.env.V0_URL}/chat/api/open-in-v0/${result.id}`,
    }
  } catch (error) {
    console.error(error)
    return {
      error: "Something went wrong. Please try again.",
      url: null,
    }
  }
}
