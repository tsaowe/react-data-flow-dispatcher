/**
 * Created by tsaowe on 16/5/26.
 */

export default (function () {
    let tree;
    let dispatcher;

    return function () {
        return {
            tree:tree,
            dispatcher:dispatcher
        }
    }

})();