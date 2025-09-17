import * as React from "react";
// @see https://usehooks.com/useLockBodyScroll.
export function useLockBody() {
    React.useLayoutEffect(function () {
        var originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";
        return function () { return (document.body.style.overflow = originalStyle); };
    }, []);
}
