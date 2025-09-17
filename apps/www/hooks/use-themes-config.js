import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { THEMES } from "@/lib/themes";
var configAtom = atomWithStorage("themes:config2", {
    activeTheme: THEMES[0],
});
export function useThemesConfig() {
    var _a = useAtom(configAtom), themesConfig = _a[0], setThemesConfig = _a[1];
    return { themesConfig: themesConfig, setThemesConfig: setThemesConfig };
}
