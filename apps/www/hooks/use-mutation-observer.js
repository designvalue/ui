import * as React from "react";
export var useMutationObserver = function (ref, callback, options) {
    if (options === void 0) { options = {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
    }; }
    React.useEffect(function () {
        if (ref.current) {
            var observer_1 = new MutationObserver(callback);
            observer_1.observe(ref.current, options);
            return function () { return observer_1.disconnect(); };
        }
    }, [ref, callback, options]);
};
