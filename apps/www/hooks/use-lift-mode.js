var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
var configAtom = atomWithStorage("lift-mode", []);
export function useLiftMode(name) {
    var _a = useAtom(configAtom), chunks = _a[0], setChunks = _a[1];
    function toggleLiftMode(name) {
        setChunks(function (prev) {
            return prev.includes(name)
                ? prev.filter(function (n) { return n !== name; })
                : __spreadArray(__spreadArray([], prev, true), [name], false);
        });
    }
    return {
        isLiftMode: chunks.includes(name),
        toggleLiftMode: toggleLiftMode,
    };
}
