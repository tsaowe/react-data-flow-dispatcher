/**
 * Created by tsaowe on 16/5/25.
 */

import utils from  '../utils/common';

var exp = null;

(function () {

    /**
     *                  给定一个祖先数据,然后遍历这个祖先数据寻找下面节点中在值方面等于 child,返回找到child前的key和index形成的数组
     * @param ancestor  祖先数据,遍历数据
     * @param child     查找节点
     *
     */
    var find = function (ancestor, child) {
        return _find(ancestor, child, false);
    };


    /**
     *
     * @param ancestor  祖先数据
     * @param child     查找数据
     * @param deep      如果为true,那么表示对象的引用地址相同
     * @private         仅供内部使用
     */
    var _find = function (ancestor, child, deep) {
        if (utils.isSmallestData(child)) {
            return false;
        }
        if (deep) {
            //  不需要排序,只需要比对内存地址是否相同即可

            if (ancestor === child) {
                return [];
            } else {
                let map = {};
                objectToMap(map, {value: ancestor, parent: [], expand: false});
                var result = [];
                var keys = Object.keys(map);
                for (let i = 0; i < keys.length; i++) {
                    var obj = map[keys[i]];
                    if (obj.value === child) {
                        result = obj.parent;
                        break;
                    }
                }
                return result;
            }
        } else {
            return undefined;//  需要排序
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

    /**
     *
     * @param map = {_ohjotu7wlpp40nali01s2lnmi:{value:{.....},parent:[],expand:false}}
     */
    var objectToMap = function (map) {

        let needRecursive = false;

        var keys = Object.keys(map);
        if (keys.length > 0) {
            keys.forEach((key, idx)=> {

                //最初始化的子元素
                var obj = map[key].value;
                var parent = map[key].parent;
                map[key].expand = true;
                if (!utils.isSmallestData(obj)) {
                    if (utils.isArray(obj)) {
                        // array
                        obj.forEach((itm, cIdx)=> {
                            if (!utils.isSmallestData(itm)) {
                                // 不是最小单位的时候才会加入到map
                                let newParent = parent.push(cIdx);
                                var newObject = {};
                                newObject.parent = newParent;
                                newObject.value = itm;
                                if (utils.childrenAllSmallestData(itm)) {
                                    newObject.expand = true;
                                } else {
                                    needRecursive = true;
                                }
                                map[utils.randomString()] = newObject;
                            }
                        });
                    } else {
                        // object
                        let newKeys = Object.keys(obj);
                        newKeys.forEach((nK, nIdx)=> {
                            if (!utils.isSmallestData(obj[nK])) {
                                // 不是最小单位的时候才会加入到map
                                let newParent = parent.push(nK);
                                var newObject = {};
                                newObject.parent = newParent;
                                newObject.value = obj[nK];
                                if (utils.childrenAllSmallestData(obj[nK])) {
                                    newObject.expand = true;
                                } else {
                                    needRecursive = true;
                                }
                                map[utils.randomString()] = newObject;
                            }
                        });
                    }
                }
            });
        }
        if (needRecursive) {
            objectToMap(map);
        }
    };

    exp = find;

})();

export default exp;