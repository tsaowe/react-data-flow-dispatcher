/**
 * Created by tsaowe on 16/5/25.
 */



(function () {

    /**
     *                  给定一个祖先数据,然后遍历这个祖先数据寻找下面节点中在值方面等于 child,返回找到child前的key和index形成的数组
     * @param ancestor  祖先数据,遍历数据
     * @param child     查找节点
     *
     */
    var find = function (ancestor,child) {
        return _find(ancestor,child,false);
    };


    /**
     *
     * @param ancestor  祖先数据
     * @param child     查找数据
     * @param deep      如果为true,那么表示对象的引用地址相同
     * @private         仅供内部使用
     */
    var _find = function (ancestor, child, deep) {
        if(deep){
            //  不需要排序
        }else{
            //  需要排序
        }
    };


    /**
     *
     * @param obj  example {c:3,a:1,b:2,1:'XXX'}
     * @private
     * ascii 排序内容
     * return {1:'XXX',a:.....z:...}
     */
    var _sort = function (obj) {



    };

})();
