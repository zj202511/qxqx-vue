require('../../common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["packageB/pages/live-info/live-infoplay"],{

/***/ 335:
/*!************************************************************************************************************!*\
  !*** D:/code/xiaochenxu/knowledge_uni_app/main.js?{"page":"packageB%2Fpages%2Flive-info%2Flive-infoplay"} ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _liveInfoplay = _interopRequireDefault(__webpack_require__(/*! ./packageB/pages/live-info/live-infoplay.vue */ 336));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_liveInfoplay.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 336:
/*!***************************************************************************************!*\
  !*** D:/code/xiaochenxu/knowledge_uni_app/packageB/pages/live-info/live-infoplay.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _live_infoplay_vue_vue_type_template_id_041918b3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live-infoplay.vue?vue&type=template&id=041918b3& */ 337);
/* harmony import */ var _live_infoplay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live-infoplay.vue?vue&type=script&lang=js& */ 339);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _live_infoplay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _live_infoplay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _live_infoplay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./live-infoplay.vue?vue&type=style&index=0&lang=css& */ 355);
/* harmony import */ var _Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _live_infoplay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _live_infoplay_vue_vue_type_template_id_041918b3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _live_infoplay_vue_vue_type_template_id_041918b3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _live_infoplay_vue_vue_type_template_id_041918b3___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "packageB/pages/live-info/live-infoplay.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 337:
/*!**********************************************************************************************************************!*\
  !*** D:/code/xiaochenxu/knowledge_uni_app/packageB/pages/live-info/live-infoplay.vue?vue&type=template&id=041918b3& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_infoplay_vue_vue_type_template_id_041918b3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./live-infoplay.vue?vue&type=template&id=041918b3& */ 338);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_infoplay_vue_vue_type_template_id_041918b3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_infoplay_vue_vue_type_template_id_041918b3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_infoplay_vue_vue_type_template_id_041918b3___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_infoplay_vue_vue_type_template_id_041918b3___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 338:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/code/xiaochenxu/knowledge_uni_app/packageB/pages/live-info/live-infoplay.vue?vue&type=template&id=041918b3& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    imtAudio: function () {
      return __webpack_require__.e(/*! import() | components/imt-audio/imt-audio */ "components/imt-audio/imt-audio").then(__webpack_require__.bind(null, /*! @/components/imt-audio/imt-audio.vue */ 465))
    },
    emojy: function () {
      return __webpack_require__.e(/*! import() | components/emojy/emojy */ "components/emojy/emojy").then(__webpack_require__.bind(null, /*! @/components/emojy/emojy.vue */ 472))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 =
    !(_vm.livetype == 5 || _vm.livetype == 8) &&
    !(_vm.livetype == 2) &&
    !(_vm.livetype == 3 || _vm.livetype == 6) &&
    (_vm.livetype == 4 || _vm.livetype == 1) &&
    _vm.noppt == false
      ? _vm.__map(_vm.ppts, function (item, index) {
          var $orig = _vm.__get_orig(item)
          var g0 = _vm.ppts.length
          return {
            $orig: $orig,
            g0: g0,
          }
        })
      : null
  var l1 = _vm.__map(_vm.list, function (item, index) {
    var $orig = _vm.__get_orig(item)
    var g1 = item.user_type == 1 ? item.length : null
    return {
      $orig: $orig,
      g1: g1,
    }
  })
  var l2 = _vm.__map(_vm.list, function (item, index) {
    var $orig = _vm.__get_orig(item)
    var g2 = item.uid === _vm.myID ? item.length : null
    var g3 = !(item.uid === _vm.myID) ? item.length : null
    return {
      $orig: $orig,
      g2: g2,
      g3: g3,
    }
  })
  var l3 = _vm.__map(_vm.list, function (item, index) {
    var $orig = _vm.__get_orig(item)
    var g4 = item.uid === _vm.myID && item.status == "1" ? item.length : null
    var g5 =
      !(item.uid === _vm.myID) && (item.status == "1" || item.status == "2")
        ? item.length
        : null
    return {
      $orig: $orig,
      g4: g4,
      g5: g5,
    }
  })
  var g6 = _vm.ppts.length
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        l1: l1,
        l2: l2,
        l3: l3,
        g6: g6,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 339:
/*!****************************************************************************************************************!*\
  !*** D:/code/xiaochenxu/knowledge_uni_app/packageB/pages/live-info/live-infoplay.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_infoplay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./live-infoplay.vue?vue&type=script&lang=js& */ 340);
/* harmony import */ var _Program_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_infoplay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_infoplay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_infoplay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_infoplay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_infoplay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 340:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/code/xiaochenxu/knowledge_uni_app/packageB/pages/live-info/live-infoplay.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 341));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 343));
var _qiniuUploader = _interopRequireDefault(__webpack_require__(/*! ../../../qiniuUploader.js */ 205));
var _uniappSocketio = _interopRequireDefault(__webpack_require__(/*! ./uniapp.socketio.js */ 344));
var _md = _interopRequireDefault(__webpack_require__(/*! ../../../static/js/md53.js */ 350));
var _Agora_Miniapp_SDK_for_WeChat = _interopRequireDefault(__webpack_require__(/*! ./Agora_Miniapp_SDK_for_WeChat.js */ 354));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var uniNavBar = function uniNavBar() {
  __webpack_require__.e(/*! require.ensure | components/uni-ui/uni-nav-bar/uni-nav-bar */ "components/uni-ui/uni-nav-bar/uni-nav-bar").then((function () {
    return resolve(__webpack_require__(/*! @/components/uni-ui/uni-nav-bar/uni-nav-bar.vue */ 421));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var imtAudio = function imtAudio() {
  __webpack_require__.e(/*! require.ensure | components/imt-audio/imt-audio */ "components/imt-audio/imt-audio").then((function () {
    return resolve(__webpack_require__(/*! @/components/imt-audio/imt-audio.vue */ 465));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Emojy = function Emojy() {
  __webpack_require__.e(/*! require.ensure | packageB/emojy/emojy */ "packageB/emojy/emojy").then((function () {
    return resolve(__webpack_require__(/*! @/packageB/emojy/emojy.vue */ 479));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var app = getApp();
var socket = '';
var wechatAgora = '';
var H5Client = '';
var _default = {
  components: {
    uniNavBar: uniNavBar,
    Emojy: Emojy,
    imtAudio: imtAudio
  },
  data: function data() {
    return {
      livemode: 0,
      fromPPt: false,
      fromshare: false,
      ShareScreenUid: 999999999,
      Recorder: uni.getRecorderManager(),
      chat_audio: uni.createInnerAudioContext(),
      recording: false,
      //标识是否正在录音
      isStopVoice: false,
      //加锁 防止点击过快引起的当录音正在准备(还没有开始录音)的时候,却调用了stop方法但并不能阻止录音的问题
      voiceInterval: null,
      voiceTime: 0,
      //总共录音时长
      canSend: true,
      //是否可以发送
      PointY: 0,
      //坐标位置
      voiceIconText: "正在录音...",
      voiceimagestatus: true,
      voiceTitle: '按住说话',
      chat_voice: "../../static/chat_voice@3x.png",
      isvoice: false,
      show_big_ppt: false,
      scrollH: 0,
      system_ppt_top: 0,
      tabIndex: 0,
      tabBars: [{
        name: "讨论区"
      }],
      scrollInto: "",
      scrollTop: "",
      list: [],
      isConnectSocket: false,
      //是否连接socket
      liveInfo: {
        'liveuid': '',
        'courseid': '',
        'lessonid': ''
      },
      userInfo: {},
      isQue: false,
      //直播添加
      agoraappid: '',
      agoramRoomName: '',
      agorauid: '',
      phonetype: 0,
      wechatliveurl: '',
      res_url: '',
      wechatliveurl_small: '',
      myID: '',
      content: '',
      islive: '已结束',
      Usercount: 0,
      diancolor: '#969696',
      timer: '',
      livetype: '',
      intr: '',
      pull: '',
      thumb: '',
      duration: '',
      currentTime: 0,
      videoContext: '',
      buttonimage: '',
      status: 1,
      start: '',
      end: '',
      ppts: [],
      noppt: false,
      pptindex: 0,
      showppt_index: 0,
      show_big_ppt_index: 1,
      show_big_ppt_index2: 0,
      emojylist: [],
      showemojy: false,
      inputbuttom: 0,
      shut_place: "我来说几句~",
      isshut: false,
      shownothingVideo: false,
      zhibo_leave: false,
      zhibo_leave_text: '老师暂时离开',
      zhibo_leave_text_w: '精彩稍后继续',
      show_nothing_image: true,
      show_nothing_image2: false,
      input_adjust: false,
      video_zhezhao: true,
      voice_list: [],
      intervl: '',
      voice_index: -1,
      QiNiutoken: '',
      voice_url: '',
      voice_length: '',
      animation: [],
      showpic: '',
      hidepic: '',
      setInter1: '',
      num: 0,
      picmaxnum: 6,
      isaudioerror: false,
      showsmallvideo: false,
      showShareScreen: false,
      showBigScreen: true,
      showEndScreen: false,
      watchDuration: 0,
      // 观看总时长（秒）
      watchTimer: null // 定时器句柄
    };
  },
  onReady: function onReady() {
    var that = this;
    that.system_ppt_top = 25;
    uni.getSystemInfo({
      success: function success(res) {
        that.scrollH = res.windowHeight * 750 / res.windowWidth - 540 - 100;
        that.system_ppt_top = parseInt(res.safeArea.top) + 10;
        that.scrollH = res.windowHeight * 750 / res.windowWidth - 550 - 124 - parseInt(res.safeArea.top) - 20;
        that.liveLive(that.liveInfo.liveuid, that.liveInfo.courseid, that.liveInfo.lessonid);
      }
    });
    // this.pageToBottom();
  },
  onUnload: function onUnload() {
    this.submitWatchDuration();
    this.stopWatchTimer();
    this.chat_audio.stop();
    socket.disconnect();
    socket.close();
  },
  onHide: function onHide() {
    this.submitWatchDuration();
    this.stopWatchTimer();
  },
  onLoad: function onLoad(option) {
    var _this2 = this;
    this.saveCurrentUrl();
    console.log("运行在小程序");
    this.phonetype = 4;
    if (app.globalData.userinfo == '') {
      uni.navigateTo({
        url: '../../../pages/login/login'
      });
    }
    this.ppts = [];
    this.userInfo = app.globalData.userinfo;
    this.liveInfo.liveuid = option.liveuid;
    this.liveInfo.courseid = option.courseid;
    this.liveInfo.lessonid = option.lessonid;
    this.thumb = option.thumb;
    this.myID = app.globalData.userinfo.id;
    this.GetChat();
    uni.onKeyboardHeightChange(function (res) {
      if (res.height > 0) {
        if (_this2.showemojy == true) {
          _this2.showemojy = false;
          _this2.inputbuttom = 170;
        } else {
          _this2.inputbuttom = res.height;
        }
      }
      if (res.height == 0) {
        if (_this2.showemojy == true) {
          _this2.inputbuttom = 170;
        } else {
          _this2.inputbuttom = 0;
        }
      }
    });
    //音频播放事件
    this.chat_audio.onPlay(function () {
      _this2.isaudioerror = false;
      // console.log('开始播放');
    });

    this.chat_audio.onStop(function () {
      _this2.isaudioerror = false;
      _this2.voice_index = -1;
      // console.log('播放结束-onStop');
      clearInterval(_this2.intervl);
      for (var i = 0; i < _this2.voice_list.length; i++) {
        _this2.voice_list[i] = '../../static/receiver_voice@3x.png';
        _this2.$set(_this2.voice_list, i, _this2.voice_list[i]);
      }
    });
    //音频结束事件
    this.chat_audio.onEnded(function () {
      _this2.isaudioerror = false;
      _this2.voice_index = -1;
      // console.log('播放结束-onEnded');
      clearInterval(_this2.intervl);
      for (var i = 0; i < _this2.voice_list.length; i++) {
        _this2.voice_list[i] = '../../static/receiver_voice@3x.png';
        _this2.$set(_this2.voice_list, i, _this2.voice_list[i]);
      }
    });
    this.chat_audio.onError(function (res) {
      _this2.chat_audio.stop();
      _this2.isaudioerror = true;
      clearInterval(_this2.intervl);
      // console.log('播放错误');
      // console.log(res.errMsg);
      // console.log(res.errCode);
    });
    //录音开始事件
    this.Recorder.onStart(function (e) {
      _this2.beginVoice();
    });
    //录音结束事件
    this.Recorder.onStop(function (res) {
      clearInterval(_this2.voiceInterval);
      _this2.handleRecorder(res);
    });
  },
  methods: {
    saveCurrentUrl: function saveCurrentUrl() {
      var pages = getCurrentPages();
      var currentPage = pages[pages.length - 1];
      var route = currentPage.route;
      var options = currentPage.options;
      var queryStr = Object.keys(options).map(function (k) {
        return "".concat(k, "=").concat(options[k]);
      }).join('&');
      var fullPath = '/' + route + (queryStr ? '?' + queryStr : '');
      console.log('当前访问地址:', fullPath);
      app.globalData.login_jump.page = fullPath;
    },
    stopPic: function stopPic() {
      clearInterval(this.setInter1);
    },
    onVideoEnded: function onVideoEnded() {
      this.showEndScreen = true; // 延迟避免事件阻塞
      this.stopWatchTimer();
      console.log('视频播放完毕');
      //	uni.hideLoading() // 隐藏可能的加载提示
    },
    tartWatchTimer: function tartWatchTimer() {
      var _this3 = this;
      if (this.watchTimer) clearInterval(this.watchTimer);
      this.watchDuration = 0;
      this.watchTimer = setInterval(function () {
        _this3.watchDuration += 1;
      }, 1000);
    },
    stopWatchTimer: function stopWatchTimer() {
      if (this.watchTimer) {
        clearInterval(this.watchTimer);
        this.watchTimer = null;
      }
    },
    submitWatchDuration: function submitWatchDuration() {
      var _this4 = this;
      var gData = getApp().globalData;
      // 若时长为0，跳过提交
      if (this.watchDuration === 0) {
        console.warn('观看时长:', this.watchDuration);
        return;
      }
      uni.request({
        url: gData.site_url + 'Live.SubmitWatchDuration',
        // ✅ 你需要确认这个接口名
        method: 'POST',
        data: {
          uid: gData.userinfo.id,
          token: gData.userinfo.token,
          liveuid: this.liveInfo.liveuid,
          courseid: this.liveInfo.courseid,
          lessonid: this.liveInfo.lessonid,
          duration: this.watchDuration
        },
        success: function success(res) {
          console.log('✅ 观看时长提交成功:', _this4.watchDuration + '秒');
        },
        fail: function fail(err) {
          console.warn('❌ 观看时长提交失败:', err);
        }
      });
    },
    changePic: function changePic() {
      var _this5 = this;
      //轮播方法
      clearInterval(this.setInter1);
      var animation = uni.createAnimation({
        timingFunction: 'ease',
        duration: 4000,
        delay: 0
      });
      this.animation = animation;
      this.setInter1 = setInterval(function () {
        _this5.num++;
        if (_this5.num == _this5.picmaxnum) {
          _this5.num = 0;
        }
        animation.opacity(1).step({
          duration: 3000,
          delay: 1000
        });
        _this5.showpic = animation.export();
        animation.opacity(0).step({
          duration: 3000,
          delay: 1000
        });
        _this5.hidepic = animation.export();
      }, 4000);
    },
    //准备开始录音
    startVoice: function startVoice(e) {
      var _this6 = this;
      this.chat_audio.pause();
      clearInterval(this.intervl);
      for (var i = 0; i < this.voice_list.length; i++) {
        this.voice_list[i] = '../../static/receiver_voice@3x.png';
        this.$set(this.voice_list, i, this.voice_list[i]);
      }
      uni.request({
        url: getApp().globalData.site_url + 'Upload.GetQiniuToken',
        method: 'POST',
        data: {
          'uid': getApp().globalData.userinfo.id,
          'token': getApp().globalData.userinfo.token
        },
        success: function success(res) {
          uni.hideLoading();
          if (res.data.data.code == 0) {
            _this6.QiNiutoken = _this6.decypt(res.data.data.info[0].token);
            _this6.recording = true;
            _this6.isStopVoice = false;
            _this6.canSend = true;
            _this6.voiceIconText = "正在录音...";
            _this6.voiceimagestatus = true;
            _this6.PointY = e.touches[0].clientY;
            _this6.Recorder.start({
              format: 'mp3'
            });
          } else {
            uni.showToast({
              title: '请重试',
              icon: 'none'
            });
          }
        }
      });
    },
    //录音已经开始
    beginVoice: function beginVoice() {
      var _this7 = this;
      if (this.isStopVoice) {
        this.Recorder.stop();
        return;
      }
      this.voiceTitle = '松开 结束';
      this.voiceInterval = setInterval(function () {
        _this7.voiceTime++;
      }, 1000);
    },
    //move 正在录音中
    moveVoice: function moveVoice(e) {
      var PointY = e.touches[0].clientY;
      var slideY = this.PointY - PointY;
      if (slideY > uni.upx2px(120)) {
        this.canSend = false;
        this.voiceIconText = '松开手指 取消发送 ';
        this.voiceTitle = '手指上滑 取消发送 ';
        this.voiceimagestatus = false;
        this.stopPic();
      } else if (slideY > uni.upx2px(60)) {
        this.canSend = false;
        this.voiceTitle = '手指上滑 取消发送 ';
        this.voiceIconText = '手指上滑 取消发送 ';
        this.voiceimagestatus = false;
        this.stopPic();
      } else {
        this.canSend = true;
        this.voiceIconText = '正在录音...';
        this.voiceTitle = '松开结束';
        this.voiceimagestatus = true;
        this.changePic();
      }
    },
    //结束录音
    endVoice: function endVoice() {
      this.stopPic();
      this.inputbuttom = 0;
      this.isStopVoice = true; //加锁 确保已经结束录音并不会录制
      this.Recorder.stop();
      this.voiceTitle = '按住 说话';
      this.recording = false;
    },
    //录音被打断
    cancelVoice: function cancelVoice(e) {
      this.stopPic();
      this.inputbuttom = 0;
      this.recording = false;
      this.voiceTime = 0;
      this.voiceTitle = '按住 说话';
      this.canSend = false;
      this.Recorder.stop();
    },
    //处理录音文件
    handleRecorder: function handleRecorder(_ref) {
      var _this8 = this;
      var tempFilePath = _ref.tempFilePath,
        duration = _ref.duration;
      if (this.canSend == false) {
        return;
      }
      var contentDuration;
      this.voiceTime = 0;
      console.log(duration);
      if (duration < 1500) {
        this.voiceIconText = "说话时间过短";
        this.recording = false;
        this.inputbuttom = 0;
        this.recording = false;
        this.voiceTime = 0;
        this.voiceTitle = '按住 说话';
        this.canSend = false;
        this.Recorder.stop();
        return;
      }
      contentDuration = duration / 1000;
      this.recording = false;
      var name = 'voice_knowledge' + this.getTime() + '.wav';
      _qiniuUploader.default.upload(tempFilePath, function (res) {
        // if (res.fileUrl.indexOf("undefined") != -1) {
        // console.log('上传成功，但url含 undefined');
        // uni.showToast({
        // 	title: '出现错误，请重新录制语音',
        // 	icon: 'none'
        // });
        // return;
        // }
        // console.log('上传成功');
        // console.log(res);
        _this8.voice_url = res.fileUrl;
        _this8.voice_length = Math.ceil(contentDuration);
        _this8.send();
      }, function (error) {
        console.log('上传失败');
      }, {
        region: 'ECN',
        domain: app.globalData.qiniuimageurl,
        key: name,
        uptoken: this.QiNiutoken
      });
    },
    big_change: function big_change(event) {
      this.show_big_ppt_index = parseInt(event.detail.current) + 1;
      this.show_big_ppt_index2 = parseInt(event.detail.current);
    },
    big_ppt_back: function big_ppt_back() {
      this.show_big_ppt = false;
    },
    getTime: function getTime() {
      var yy = new Date().getFullYear();
      var mm = new Date().getMonth() + 1;
      var dd = new Date().getDate();
      var hh = new Date().getHours();
      var mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
      var ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
      return yy + mm + dd + hh + mf + ss;
    },
    backCourseList: function backCourseList() {
      uni.showModal({
        title: '是否要退出直播间',
        content: '',
        showCancel: true,
        cancelText: '取消',
        confirmText: '确定',
        confirmColor: '#2C62EF',
        success: function success(res) {
          if (res.confirm) {
            // uni.showLoading({
            // 	title:null
            // })
            socket.disconnect();
            socket.close();
            setTimeout(function () {
              uni.hideLoading();
              uni.navigateBack({
                delta: 1
              });
            }, 0);
          }
        },
        fail: function fail() {},
        complete: function complete() {}
      });
    },
    open_voice: function open_voice(url, index) {
      var _this9 = this;
      this.chat_audio.pause();
      clearInterval(this.intervl);
      for (var i = 0; i < this.voice_list.length; i++) {
        this.voice_list[i] = '../../static/receiver_voice@3x.png';
        this.$set(this.voice_list, i, this.voice_list[i]);
      }
      if (this.voice_index == index) {
        this.voice_index = -1;
        console.log('手动停止');
        this.chat_audio.pause();
        clearInterval(this.intervl);
      } else {
        console.log(url);
        if (url.indexOf("undefined") != -1) {
          this.voice_index = -1;
          console.log('url出现错误，停止播放');
          this.chat_audio.pause();
          clearInterval(this.intervl);
          return;
        }
        this.chat_audio.src = url;
        this.chat_audio.play();
        this.voice_index = index;
        this.intervl = setInterval(function () {
          console.log('启动');
          _this9.voice_list[index] = '../../static/receiver_voice_play_1@3x.png';
          _this9.$set(_this9.voice_list, index, _this9.voice_list[index]);
          setTimeout(function () {
            _this9.voice_list[index] = '../../static/receiver_voice_play_2@3x.png';
            _this9.$set(_this9.voice_list, index, _this9.voice_list[index]);
          }, 200);
          setTimeout(function () {
            _this9.voice_list[index] = '../../static/receiver_voice_play_3@3x.png';
            _this9.$set(_this9.voice_list, index, _this9.voice_list[index]);
          }, 400);
        }, 600);
      }
      if (this.isaudioerror == true) {
        uni.showToast({
          title: '1'
        });
        this.chat_audio.stop();
        clearInterval(this.intervl);
      }
    },
    addNodeListen: function addNodeListen() {
      var _this10 = this;
      socket = new _uniappSocketio.default(app.globalData.socket_url, {
        query: {},
        transports: ['websocket', 'polling'],
        timeout: 5000
      });
      socket.emit('conn', {
        uid: this.userInfo.id,
        //进入该房间的学生id 假如等于下面的房间id, 那即为老师进入房间
        roomnum: this.liveInfo.liveuid,
        //房间号,即老师id
        nickname: this.userInfo.user_nickname,
        stream: this.liveInfo.liveuid + '_' + this.liveInfo.courseid + '_' + this.liveInfo.lessonid,
        //老师id_课程id_课时id
        token: this.userInfo.token
      });
      socket.on('error', function (data) {
        console.log('ws 失败 ' + data);
      });
      socket.on('conn', function (data) {
        console.log('ws 已连接 ' + data);
        if (data == 'no') {
          uni.showModal({
            title: '聊天服务器连接失败',
            content: '请尝试退出直播间重新进入',
            showCancel: false,
            cancelText: '',
            confirmText: '确定',
            confirmColor: '#38DAA6',
            success: function success(res) {
              uni.navigateBack({
                delta: 1
              });
            },
            fail: function fail() {},
            complete: function complete() {}
          });
          return;
        }
        _this10.isConnectSocket = true; //已连接
      });

      var that = this;
      socket.on('broadcastingListen', function (data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          var msgInfo = JSON.parse(data[i]).msg[0];
          //console.log(JSON.parse(JSON.stringify(msgInfo)));
          if (msgInfo._method_ == "changeMode") {
            if (msgInfo.action == 1) {
              console.log('切换到PPt');
              _this10.livetype = 4;
              _this10.fromPPt = true;
              _this10.fromshare = false;
              _this10.showsmallvideo = true;
              _this10.showShareScreen = false;
              _this10.scrollH -= 150;
              _this10.wechatliveurl_small = _this10.res_url;
              _this10.wechatliveurl = '';
            } else if (msgInfo.action == 0) {
              console.log('切换到直播');
              if (_this10.fromshare == false && _this10.fromPPt == true) {
                _this10.scrollH += 150;
              }
              _this10.livetype = 5;
              _this10.fromPPt = false;
              _this10.fromshare = false;
              _this10.showsmallvideo = false;
              _this10.showShareScreen = false;
              _this10.wechatliveurl_small = '';
              _this10.wechatliveurl = _this10.res_url;
            } else if (msgInfo.action == 2) {
              console.log('切换到屏幕共享');
              //屏幕共享
              if (_this10.fromPPt == true) {
                _this10.scrollH += 150;
              }
              _this10.livetype = 5;
              _this10.fromshare = true;
              _this10.showShareScreen = true;
              _this10.showsmallvideo = false;
              _this10.wechatliveurl_small = '';
              _this10.wechatliveurl = _this10.res_url;
            }
          }
          if (msgInfo._method_ == "Kick") {
            //踢出直播间
            if (msgInfo.action == 1) {
              if (msgInfo.touid == getApp().globalData.userinfo.id) {
                uni.showToast({
                  title: '你已被讲师踢出房间',
                  icon: 'none'
                });
                setTimeout(function () {
                  uni.navigateBack({
                    delta: 1
                  });
                }, 500);
              }
            }
          }
          if (msgInfo._method_ == "StartEndLive") {
            _this10.zhibo_leave = true;
            _this10.video_zhezhao = true;
            _this10.show_nothing_image = false;
            _this10.show_nothing_image2 = true;
            _this10.zhibo_leave_text = "直播已结束";
            _this10.zhibo_leave_text_w = "";
          }
          if (msgInfo._method_ == "roomShutup") {
            //App.Course.SetLesson
            //1 禁言 0 解除
            if (msgInfo.action == 1) {
              _this10.shut_place = "全体禁言中";
              _this10.content = "";
              _this10.isshut = true;
            } else {
              _this10.shut_place = "我来说几句～";
              _this10.content = '';
              _this10.isshut = false;
            }
          }
          if (msgInfo._method_ == "Shutup") {
            if (msgInfo.touid == getApp().globalData.userinfo.id) {
              _this10.shut_place = "你已被禁言";
              _this10.isshut = true;
              uni.showToast({
                title: '你已被禁言',
                icon: 'none'
              });
            }
          }
          if (msgInfo._method_ == "SendMsg") {
            if (msgInfo.action == 0) {
              // if (msgInfo.ct.uid != getApp().globalData.userinfo.id) {
              _this10.Usercount += 1;
              console.log('用户进入');
              // }
            } else {
              var pinyinArray = getApp().globalData.pinyinArray;
              var emojiArray = getApp().globalData.emojiArray;
              var biaoqing_url = getApp().globalData.biaoqingurl;
              var content = msgInfo.content;
              if (msgInfo.type == 0) {
                for (var j = 0; j < 50; j++) {
                  for (var _i = 0; _i < emojiArray.length; _i++) {
                    var path = getApp().globalData.biaoqingurl + pinyinArray[_i];
                    content = content.replace(emojiArray[_i], '<img style="width: 25px; height: 25px; vertical-align: middle;" src ="' + path + '"/>');
                  }
                }
              }
              _this10.voice_list.push('../../static/receiver_voice@3x.png');
              msgInfo.content = content;
              _this10.list.push(msgInfo);
              _this10.pageToBottom();
            }
          }
          if (msgInfo._method_ == 'disconnect') {
            if (_this10.Usercount != 0) {
              _this10.Usercount -= 1;
            }
            console.log('用户离开');
          }
          if (msgInfo._method_ == 'setPPT') {
            if (msgInfo.action == 0) {
              var item = {
                'id': msgInfo.pptid,
                'thumb': msgInfo.thumb
              };
              _this10.noppt = false;
              _this10.ppts.push(item);
              console.log('添加ppt');
            } else if (msgInfo.action == 1) {
              console.log('ppt删除');
              var pptlist = _this10.ppts;
              for (var _i2 = 0; _i2 < pptlist.length; _i2++) {
                var item = pptlist[_i2];
                if (item.id == msgInfo.pptid) {
                  _this10.ppts.splice(_i2, 1);
                }
              }
              if (_this10.ppts.length == 0) {
                _this10.noppt = true;
              }
            } else if (msgInfo.action == 2) {
              _this10.pptindex = parseInt(msgInfo.index);
              _this10.showppt_index = _this10.pptindex + 1;
              console.log('ppt切换索引');
            }
          }
        }
      });
    },
    showBigView: function showBigView(index) {
      this.show_big_ppt = true;
      this.show_big_ppt_index = index + 1;
      this.show_big_ppt_index2 = index;
    },
    songemojy: function songemojy(data) {
      this.content += data.chinese;
    },
    GetChat: function GetChat() {
      var _this11 = this;
      var gData = app.globalData;
      uni.request({
        url: gData.site_url + 'Live.GetChat',
        method: 'POST',
        data: {
          'uid': gData.userinfo.id,
          'token': gData.userinfo.token,
          'liveuid': this.liveInfo.liveuid,
          'courseid': this.liveInfo.courseid,
          'lessonid': this.liveInfo.lessonid,
          'lastid': '',
          'type': '0'
        },
        success: function success(res) {
          var pinyinArray = getApp().globalData.pinyinArray;
          var emojiArray = getApp().globalData.emojiArray;
          _this11.list = res.data.data.info;
          _this11.tartWatchTimer();
          for (var j = 0; j < _this11.list.length; j++) {
            var msg = _this11.list[j];
            var content = msg.content;
            if (msg.type == 0) {
              for (var _j = 0; _j < 50; _j++) {
                for (var i = 0; i < emojiArray.length; i++) {
                  var path = getApp().globalData.biaoqingurl + pinyinArray[i];
                  content = content.replace(emojiArray[i], '<img style="width: 25px; height: 25px; vertical-align: middle;" src ="' + path + '"/>');
                }
              }
            }
            _this11.voice_list.push('../../static/receiver_voice@3x.png');
            msg.content = content;
            _this11.list[j] = msg;
          }
        }
      });
    },
    changeXXK: function changeXXK(index) {
      var _this12 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this12.tabIndex = index;
                setTimeout(function () {
                  _this12.pageToBottom();
                }, 300);
                return _context.abrupt("return", _this12.tabIndex);
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onChangeTab: function onChangeTab(e) {
      this.tabIndex = e.detail.current;
      this.pageToBottom();
    },
    decypt: function decypt(code) {
      var newcode = '';
      var str = '1ecxXyLRB.COdrAi:q09Z62ash-QGn8VFNIlb=fM/D74WjS_EUzYuw?HmTPvkJ3otK5gp&';
      for (var i = 0; i < code.length; i++) {
        var codeIteam = code[i];
        for (var j = 0; j < str.length; j++) {
          var stringIteam = str[j];
          if (codeIteam == stringIteam) {
            if (j == 0) {
              newcode += str[str.length - 1];
            } else {
              newcode += str[j - 1];
            }
          }
        }
      }
      return newcode;
    },
    agoraWechat: function agoraWechat(agoraappid, agorastream, uid) {
      var _this13 = this;
      this.video_zhezhao = true;
      var _that = this;
      //初始化
      wechatAgora = new _Agora_Miniapp_SDK_for_WeChat.default.Client();
      wechatAgora.setRole('audience');
      wechatAgora.init(this.decypt(agoraappid), function () {
        console.log('小程序初始化成功');
        //加入通道
        wechatAgora.join('', agorastream, uid, function () {
          console.log('加入通道成功');
          _this13.zhibo_leave = true;
        }, function (e) {
          console.log('加入通道失败');
          _this13.zhibo_leave = true;
        });
      }, function (e) {
        _this13.zhibo_leave = true;
        console.log('小程序初始化失败');
      });
      //订阅远端流
      wechatAgora.on("stream-added", function (e) {
        wechatAgora.subscribe(e.uid, function (res) {
          _this13.zhibo_leave = false;
          _this13.video_zhezhao = true;
          console.log("订阅视频流成功：" + res);
          _this13.res_url = res;
          if (_this13.showsmallvideo == true) {
            _this13.wechatliveurl_small = res;
          } else {
            _this13.wechatliveurl = res;
          }
        }, function (err) {
          console.log("订阅视频流错误", err);
          _this13.video_zhezhao = false;
          _this13.zhibo_leave = true;
        });
      });
      wechatAgora.on("stream-removed", function (e) {
        _this13.video_zhezhao = false;
        _this13.zhibo_leave = true;
      });
      //重连机制
      wechatAgora.rejoin('', agorastream, uid, '', function () {
        console.log('重连加入通道成功');
      }, function (e) {
        console.log('重连加入通道失败');
      });
    },
    agoraH5: function agoraH5(agoraappid, agorastream) {},
    // 进入直播
    liveLive: function liveLive(liveuid, courseid, lessonid) {
      var _this14 = this;
      var _this = this;
      var gData = app.globalData;
      _this.agorauid = gData.userinfo.id;
      uni.request({
        url: gData.site_url + 'Live.Enter',
        method: 'POST',
        data: {
          'liveuid': liveuid,
          'courseid': courseid,
          'lessonid': lessonid,
          'token': gData.userinfo.token,
          'uid': gData.userinfo.id
        },
        success: function success(res) {
          if (res.data.data.code == 700) {
            uni.navigateTo({
              url: '../../../pages/login/login',
              success: function success(res) {},
              fail: function fail() {},
              complete: function complete() {}
            });
            return;
          }
          if (res.data.data.code == 0) {
            _this14.addNodeListen();
            _this14.pull = _this14.decypt(res.data.data.info[0].pull);
            _this14.ppts = res.data.data.info[0].ppts || [];
            if (_this14.ppts.length == 0) {
              _this14.noppt = true;
            } else {
              _this14.noppt = false;
            }
            if (parseInt(res.data.data.info[0].shutup_room) == 1) {
              _this14.shut_place = "全体禁言中";
              _this14.content = "";
              _this14.isshut = true;
            } else {
              _this14.shut_place = "我来说几句～";
              _this14.content = '';
              _this14.isshut = false;
            }
            _this14.pptindex = parseInt(res.data.data.info[0].pptindex);
            _this14.showppt_index = _this14.pptindex + 1;
            _this14.userInfo.user_type = res.data.data.info[0].user_type;
            var isLive = res.data.data.info[0].islive;
            if (isLive == 0) {
              _this14.shownothingVideo = true;
              _this14.islive = '未开始';
              _this14.diancolor = '#969696';
            } else if (isLive == 1) {
              _this14.shownothingVideo = false;
              _this14.islive = '直播中';
              _this14.diancolor = '#2C62EF';
            } else {
              _this14.islive = '已结束';
              _this14.zhibo_leave = true;
              _this14.show_nothing_image = false;
              _this14.show_nothing_image2 = true;
              _this14.zhibo_leave_text = '直播已结束';
              _this14.zhibo_leave_text_w = "";
              _this14.diancolor = '#969696';
            }
            _this14.intr = res.data.data.info[0].intr;
            //1图文2视频3音频 4ppt直播 5视频直播6音频直播 7授课直播（白板）
            _this14.livetype = res.data.data.info[0].livetype;
            if (_this14.livetype == 3 || _this14.livetype == 6) {
              _this14.videoContext = uni.createVideoContext('myVideo');
              _this14.buttonimage = '../../static/voice2.png';
            }
            _this14.Usercount = parseInt(res.data.data.info[0].nums);
            _this14.agoraappid = res.data.data.info[0].sound_appid;
            _this14.agoramRoomName = res.data.data.info[0].stream;
            if (_this14.livetype == 5 || _this14.livetype == 8) {
              if (_this14.livemode == 0) {
                console.log('直播模式');
                _this14.livetype = 5;
                _this14.fromPPt = false;
                _this14.fromshare = false;
                _this14.showsmallvideo = false;
              } else if (_this14.livemode == 1) {
                console.log('PPt模式');
                _this14.livetype = 4;
                _this14.fromPPt = true;
                _this14.fromshare = false;
                _this14.showsmallvideo = true;
                _this14.scrollH -= 150;
              } else if (_this14.livemode == 2) {
                console.log('屏幕共享模式');
                _this14.livetype = 8;
                _this14.fromshare = true;
                _this14.showsmallvideo = false;
              }
              if (_this14.phonetype == 2) {
                setTimeout(function () {
                  _this14.$nextTick(function () {
                    _this14.$refs.videoIos.focus({
                      'appid': _this14.agoraappid,
                      'mRoomName': _this14.agoramRoomName,
                      'uid': gData.userinfo.id
                    });
                  });
                }, 0);
              } else if (_this14.phonetype == 1) {
                setTimeout(function () {
                  _this14.$nextTick(function () {
                    _this14.$refs.videoAdnroid.clearTel(_this14.agoraappid + '声' + _this14.agoramRoomName + '网' + gData.userinfo.id);
                  });
                }, 0);
              } else if (_this14.phonetype == 3) {
                _this14.agoraH5(_this14.agoraappid, _this14.agoramRoomName);
              } else if (_this14.phonetype == 4) {
                _this14.agoraWechat(_this14.agoraappid, _this14.agoramRoomName, gData.userinfo.id);
              }
            }
          } else {
            uni.showToast({
              title: res.data.data.msg,
              icon: 'none'
            });
          }
        }
      });
    },
    sendvoice: function sendvoice() {
      if (this.isshut == true) {
        return;
      }
      if (this.isvoice == true) {
        this.isvoice = false;
        this.chat_voice = "../../static/chat_voice@3x.png";
      } else {
        this.isvoice = true;
        this.chat_voice = "../../static/chat_keyboard@3x.png";
      }
    },
    submitemojy: function submitemojy() {
      if (this.isshut == true) {
        return;
      }
      if (this.showemojy == true) {
        this.showemojy = false;
        this.inputbuttom = 0;
      } else {
        uni.hideKeyboard();
        this.showemojy = true;
        this.inputbuttom = 170;
      }
    },
    //发送
    new_sendemojy: function new_sendemojy(data) {
      if (this.isshut == true) {
        return;
      }
      this.send();
      this.showemojy = false;
      this.inputbuttom = 0;
    },
    send: function send(event) {
      var _this15 = this;
      uni.hideKeyboard();
      this.showemojy = false;
      if (this.voice_url.length > 1) {} else {
        if (this.content === '') {
          return uni.showToast({
            title: '消息不能为空',
            icon: 'none'
          });
        }
      }
      this.tabIndex = 1;
      var status = this.isQue === true ? "1" : "0";
      var gData = app.globalData;
      // 签名
      var dic = {
        'uid': this.userInfo.id,
        'liveuid': this.liveInfo.liveuid,
        'courseid': this.liveInfo.courseid,
        'lessonid': this.liveInfo.lessonid,
        'type': this.voice_url.length > 1 ? '1' : '0',
        'content': this.content,
        'url': this.voice_url,
        'user_type': this.userInfo.type
      };
      var sign = this.sort2url(dic);
      //记录聊天信息
      uni.request({
        url: gData.site_url + 'Live.SetChat',
        method: 'POST',
        data: {
          'sign': sign,
          'uid': this.userInfo.id,
          'token': this.userInfo.token,
          'content': this.content,
          "length": this.voice_length,
          'status': status,
          'user_type': this.userInfo.type,
          'liveuid': this.liveInfo.liveuid,
          'courseid': this.liveInfo.courseid,
          'lessonid': this.liveInfo.lessonid,
          'type': this.voice_url.length > 1 ? '1' : '0',
          'url': this.voice_url
        },
        success: function success(res) {
          //	console.log(res);
          if (res.data.data.code == 0) {
            //发送消息
            var obj = {
              "msg": [{
                "_method_": "SendMsg",
                "chatid": res.data.data.info[0].chatid,
                "action": "1",
                "token": _this15.userInfo.token,
                "uid": _this15.userInfo.id,
                "user_nickname": _this15.userInfo.user_nickname,
                "avatar": _this15.userInfo.avatar,
                "liveuid": _this15.liveInfo.liveuid,
                "content": _this15.content,
                "url": _this15.voice_url,
                "length": _this15.voice_length,
                "equipment": "app",
                "create_time": Math.floor(new Date().getTime().toString() / 1000),
                "msgtype": 2,
                "status": status,
                "type": _this15.voice_url.length > 1 ? '1' : '0',
                "user_type": _this15.userInfo.type,
                'lessonid': _this15.liveInfo.lessonid
              }],
              "retcode": "000000",
              "retmsg": "OK"
            };
            socket.emit('broadcast', obj);
            _this15.content = '';
            _this15.voice_url = '';
            _this15.voice_length = '';
          } else {
            uni.showToast({
              title: res.data.data.msg,
              icon: 'none'
            });
          }
        },
        fail: function fail() {
          uni.showToast({
            icon: 'none',
            title: '网络错误'
          });
        }
      });
    },
    question: function question(isQue) {
      if (this.isQue == false) {
        this.isQue = true;
      } else {
        this.isQue = false;
      }
    },
    sort2url: function sort2url(arr1) {
      var newkey = Object.keys(arr1).sort();
      var newObj = {};
      for (var i = 0; i < newkey.length; i++) {
        //遍历newkey数组
        newObj[newkey[i]] = arr1[newkey[i]]; //向新创建的对象中按照排好的顺序依次增加键值对
      }

      var text = "";
      for (var index in newObj) {
        text = text + index + "=" + newObj[index] + "&";
      }
      text = text.substr(0, text.length - 1);
      text += '&' + app.globalData.sign_key;
      return (0, _md.default)(text);
    },
    setSign: function setSign(obj) {
      //排序的函数
      var str = '';
      var newkey = Object.keys(obj).sort();
      //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
      var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
      for (var i = 0; i < newkey.length; i++) {
        //遍历newkey数组
        //newObj[newkey[i]] = obj[newkey[i]];//向新创建的对象中按照排好的顺序依次增加键值对
        str += newkey[i] + '=' + obj[newkey[i]] + '&';
      }
      str += app.globalData.sign_key;
      var sign = _md.default.hex_md5(str);
      return sign;
    },
    pageToBottom: function pageToBottom() {
      var lastIndex = this.list.length - 1;
      if (lastIndex < 0) {
        return;
      }
      var _this = this;
      setTimeout(function () {
        _this.scrollInto = 'chat' + lastIndex;
      }, 200);
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 355:
/*!************************************************************************************************************************!*\
  !*** D:/code/xiaochenxu/knowledge_uni_app/packageB/pages/live-info/live-infoplay.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_infoplay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./live-infoplay.vue?vue&type=style&index=0&lang=css& */ 356);
/* harmony import */ var _Program_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_infoplay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_infoplay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_infoplay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_infoplay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_infoplay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 356:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/code/xiaochenxu/knowledge_uni_app/packageB/pages/live-info/live-infoplay.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[335,"common/runtime","common/vendor","packageB/common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/packageB/pages/live-info/live-infoplay.js.map