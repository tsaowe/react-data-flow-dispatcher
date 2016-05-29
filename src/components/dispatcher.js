/**
 * Created by tsaowe on 16/5/26.
 */

import _store from './GlobalStorage';
let {tree,dispatcher} = _store();

export default {


    /**
     *
     * @param state
     * @param root 是否是root元素 bool
     */
    state:function (state,root) {

        if( root ){

            /**
             * 初次初始化的时候感知树种没有任何东西,
             *
             * 当有顶级元素进来的时候需要初始化
             *
             * 初始化后parent为undefined,
             *
             *
             * @type {undefined}
             */
            tree.parent = undefined;
            tree.value = state;
            
            // 数组与object都能转化为key value键值对
            tree.children = {};

        } else {
            
            
            

        }

    },
    
    action:function (type, object) {



    },
    
    declare:function () {
        
    }
    


}