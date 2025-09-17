import * as React from "react";
export function useMounted() {
    var _a = React.useState(false), mounted = _a[0], setMounted = _a[1];
    React.useEffect(function () {
        setMounted(true);
    }, []);
    return mounted;
}
