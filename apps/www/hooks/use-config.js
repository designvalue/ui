import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
var configAtom = atomWithStorage("config", {
    style: "new-york",
    theme: "zinc",
    radius: 0.5,
    packageManager: "pnpm",
    installationType: "cli",
});
export function useConfig() {
    return useAtom(configAtom);
}
