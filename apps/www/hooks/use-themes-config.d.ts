import { Theme } from "@/lib/themes";
type ThemesConfig = {
    activeTheme: Theme;
};
export declare function useThemesConfig(): {
    themesConfig: ThemesConfig;
    setThemesConfig: (args_0: typeof import("jotai/utils").RESET | ThemesConfig | ((prev: ThemesConfig) => typeof import("jotai/utils").RESET | ThemesConfig)) => void;
};
export {};
//# sourceMappingURL=use-themes-config.d.ts.map