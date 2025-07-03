(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-ui/uni-badge/uni-badge"],{"209d":function(t,e,n){},"4e92":function(t,e,n){"use strict";var i=n("209d"),u=n.n(i);u.a},b0eb:function(t,e,n){"use strict";n.r(e);var i=n("bd1f"),u=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=u.a},bd1f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=i},d847:function(t,e,n){"use strict";n.r(e);var i=n("db81"),u=n("b0eb");for(var a in u)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(a);n("4e92");var d=n("828b"),o=Object(d["a"])(u["default"],i["b"],i["c"],!1,null,"1945d5d1",null,!1,i["a"],void 0);e["default"]=o.exports},db81:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-ui/uni-badge/uni-badge-create-component',
    {
        'components/uni-ui/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("d847"))
        })
    },
    [['components/uni-ui/uni-badge/uni-badge-create-component']]
]);
