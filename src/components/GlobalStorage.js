/**
 * Created by tsaowe on 16/5/26.
 */

export default (function () {
    let tree;
    let dispatcher;
    let map = {};

    return function () {
        return {
            tree:tree,
            dispatcher:dispatcher,
            map:map
        }
    }

})();