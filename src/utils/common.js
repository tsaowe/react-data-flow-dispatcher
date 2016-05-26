/**
 * Created by tsaowe on 16/5/26.
 */
var Utils = {
    randomString: function (n = 5) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < n; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    },
    randomString: function (n = 5) {
        return Math.random().toString(36).substring(n);
    }
};

export default Utils;