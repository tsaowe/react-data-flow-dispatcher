/**
 * Created by tsaowe on 16/5/26.
 */
var Utils = {
    _randomString: function (n = 5) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < n; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    },
    randomString: function (n = 2) {
        return '_'+Math.random().toString(36).substring(n);
    },
    isObjectType:function (object) {
        return object instanceof Object;     
    },
    isBasicType:function (object) {
        return !object instanceof Object;
    },
    isSmallestData: function (object) {
        return (
            !object ||
            typeof object === 'number' ||
            typeof object === 'string' ||
            typeof object === 'function' ||
            typeof object === 'boolean'
        )
    },
    isFunction: function (it) {
        return Object.prototype.toString.call(it) === '[object Function]';
    },
    isArray: function (it) {
        return Object.prototype.toString.call(it) === '[object Array]';
    },
    childrenAllSmallestData:function (obj) {
        if(Utils.isSmallestData(obj)){
            return true;
        }else {
            if(Utils.isArray(obj)){
                let allSmall = true;
                obj.forEach((itm)=>{
                    allSmall = allSmall && Utils.isSmallestData(itm);   
                });   
                return allSmall;
            }else{
                let allSmall = true;
                Object.keys(obj).forEach((itm)=>{
                    allSmall = allSmall && Utils.isSmallestData(obj[itm]);
                });
                return allSmall; 
            }
        }
    }

};

export default Utils;