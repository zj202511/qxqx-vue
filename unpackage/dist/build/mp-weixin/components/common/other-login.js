(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/other-login"],{"213c":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{providerList:[]}},mounted:function(){var e=this;n.getProvider({service:"oauth",success:function(n){e.providerList=n.provider.map((function(n){var e="",t="",i="";switch(n){case"weixin":e="微信登录",t="icon-weixin",i="bg-success";break;case"qq":e="QQ登录",t="icon-qq1",i="bg-primary";break;case"sinaweibo":e="新浪微博登录",t="icon-tubiaozhizuo-",i="bg-red";break}return{name:e,id:n,icon:t,bgColor:i}}))},fail:function(n){console.log("获取登录通道失败",n)}})}};e.default=t}).call(this,t("df3c")["default"])},a3ab:function(n,e,t){"use strict";t.r(e);var i=t("213c"),o=t.n(i);for(var r in i)["default"].indexOf(r)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(r);e["default"]=o.a},aee4:function(n,e,t){"use strict";t.r(e);var i=t("e384"),o=t("a3ab");for(var r in o)["default"].indexOf(r)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(r);var c=t("828b"),a=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=a.exports},e384:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){}));var i=function(){var n=this.$createElement;this._self._c},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/other-login-create-component',
    {
        'components/common/other-login-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("aee4"))
        })
    },
    [['components/common/other-login-create-component']]
]);
