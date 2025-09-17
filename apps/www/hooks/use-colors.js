import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useMounted } from "@/hooks/use-mounted";
var colorsAtom = atomWithStorage("colors", {
    format: "hsl",
});
export function useColors() {
    var _a = useAtom(colorsAtom), colors = _a[0], setColors = _a[1];
    var mounted = useMounted();
    return {
        isLoading: !mounted,
        format: colors.format,
        setFormat: function (format) { return setColors({ format: format }); },
    };
}
