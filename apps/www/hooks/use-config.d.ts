import { BaseColor } from "@/registry/registry-base-colors";
import { Style } from "@/registry/registry-styles";
type Config = {
    style: Style["name"];
    theme: BaseColor["name"];
    radius: number;
    packageManager: "npm" | "yarn" | "pnpm" | "bun";
    installationType: "cli" | "manual";
};
export declare function useConfig(): [Config, (args_0: typeof import("jotai/utils").RESET | Config | ((prev: Config) => typeof import("jotai/utils").RESET | Config)) => void];
export {};
//# sourceMappingURL=use-config.d.ts.map