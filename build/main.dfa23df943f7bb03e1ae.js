/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/styles.css":
/*!**********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/styles.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./_fonts.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/_fonts.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_apps_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./_apps.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/_apps.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./_header.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/_header.css\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_1__.default);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_apps_css__WEBPACK_IMPORTED_MODULE_2__.default);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_3__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"p {\\n  margin-top: 0;\\n  margin-bottom: 10px;\\n}\\n\\n.container {\\n  max-width: 1200px;\\n  margin: 0 auto;\\n}\\n\\n.content {\\n  border: 4px solid #2c2a2e;\\n  border-end-start-radius: 7px;\\n  border-end-end-radius: 7px;\\n  padding: 10px;\\n  margin-bottom: 20px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/styles.css?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/_apps.css":
/*!*****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/_apps.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".apps {\\n  display: grid;\\n  grid-gap: 20px;\\n}\\n\\n.app {\\n  display: grid;\\n  grid-template-rows: auto 1fr auto;\\n  grid-template-areas:\\n    'img title'\\n    'img desc'\\n    'img action';\\n  grid-row-gap: 10px;\\n  grid-column-gap: 30px;\\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\\n  padding: 10px;\\n  border-radius: 5px;\\n}\\n\\n.app__img {\\n  width: 350px;\\n  grid-area: img;\\n  border: 1px solid #ccc;\\n  border-radius: 5px;\\n}\\n\\n.app__title {\\n  height: fit-content;\\n  grid-area: title;\\n  padding-top: 2px;\\n  font-family: 'Ruslan Display';\\n  font-size: 1.2rem;\\n  letter-spacing: 0.5px;\\n  color: #5f6e8f;\\n}\\n\\n.app__title_accent {\\n  color: #768195;\\n  font-size: 0.9rem;\\n  letter-spacing: 0px;\\n}\\n\\n.app__desc {\\n  grid-area: desc;\\n  font-family: 'Neucha';\\n  color: #444e62;\\n  font-weight: 500;\\n  font-size: 0.95rem;\\n  letter-spacing: 2px;\\n  line-height: 1.2;\\n}\\n\\n.app__action {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 100%;\\n  grid-area: action;\\n  justify-content: start;\\n  align-items: start;\\n  align-items: end;\\n  margin-bottom: 2px;\\n}\\n\\n.app__btn {\\n  white-space: nowrap;\\n  width: fit-content;\\n  color: #ffffff;\\n  padding: 5px 7px 3px 7px;\\n  font-family: 'Ruslan Display';\\n  font-size: 0.7rem;\\n  letter-spacing: 0.5px;\\n  cursor: pointer;\\n  text-decoration: none;\\n  transition: background-color 0.3s ease;\\n  box-shadow: 0px 0px 5px 2px rgba(34, 60, 80, 0.2);\\n}\\n\\n.app__btn_site {\\n  background-color: rgb(246, 73, 107);\\n  border-top-left-radius: 5px;\\n  border-bottom-left-radius: 5px;\\n}\\n\\n.app__btn_code {\\n  background-color: rgb(94, 127, 144);\\n  border-top-right-radius: 5px;\\n  border-bottom-right-radius: 5px;\\n}\\n\\n.app__btn:hover {\\n  background-color: rgb(51, 167, 119);\\n}\\n\\n.app__btn:active {\\n  background-color: rgb(0, 160, 72);\\n}\\n\\n@media (max-width: 800px) {\\n  .app__img {\\n    width: 200px;\\n  }\\n}\\n\\n@media (max-width: 768px) {\\n  .app {\\n    display: grid;\\n    grid-template:\\n      'title'\\n      'img'\\n      'desc'\\n      'action';\\n    grid-gap: 20px;\\n  }\\n\\n  .app__img {\\n    width: 100%;\\n  }\\n\\n  .app__title {\\n    margin-left: 3px;\\n    font-size: 1.05rem;\\n  }\\n\\n  .app__title_accent {\\n    font-size: 0.75rem;\\n  }\\n\\n  .app__desc {\\n    margin: 0 7px;\\n    font-size: 0.85rem;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/_apps.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/_fonts.css":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/_fonts.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_fonts_ruslan_display_v13_latin_cyrillic_regular_eot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/fonts/ruslan-display-v13-latin_cyrillic-regular.eot */ \"./assets/fonts/ruslan-display-v13-latin_cyrillic-regular.eot\");\n/* harmony import */ var _assets_fonts_ruslan_display_v13_latin_cyrillic_regular_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/fonts/ruslan-display-v13-latin_cyrillic-regular.woff2 */ \"./assets/fonts/ruslan-display-v13-latin_cyrillic-regular.woff2\");\n/* harmony import */ var _assets_fonts_ruslan_display_v13_latin_cyrillic_regular_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/fonts/ruslan-display-v13-latin_cyrillic-regular.woff */ \"./assets/fonts/ruslan-display-v13-latin_cyrillic-regular.woff\");\n/* harmony import */ var _assets_fonts_ruslan_display_v13_latin_cyrillic_regular_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/fonts/ruslan-display-v13-latin_cyrillic-regular.ttf */ \"./assets/fonts/ruslan-display-v13-latin_cyrillic-regular.ttf\");\n/* harmony import */ var _assets_fonts_ruslan_display_v13_latin_cyrillic_regular_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/fonts/ruslan-display-v13-latin_cyrillic-regular.svg */ \"./assets/fonts/ruslan-display-v13-latin_cyrillic-regular.svg\");\n/* harmony import */ var _assets_fonts_neucha_v12_latin_cyrillic_regular_eot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/fonts/neucha-v12-latin_cyrillic-regular.eot */ \"./assets/fonts/neucha-v12-latin_cyrillic-regular.eot\");\n/* harmony import */ var _assets_fonts_neucha_v12_latin_cyrillic_regular_woff2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/fonts/neucha-v12-latin_cyrillic-regular.woff2 */ \"./assets/fonts/neucha-v12-latin_cyrillic-regular.woff2\");\n/* harmony import */ var _assets_fonts_neucha_v12_latin_cyrillic_regular_woff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/fonts/neucha-v12-latin_cyrillic-regular.woff */ \"./assets/fonts/neucha-v12-latin_cyrillic-regular.woff\");\n/* harmony import */ var _assets_fonts_neucha_v12_latin_cyrillic_regular_ttf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/fonts/neucha-v12-latin_cyrillic-regular.ttf */ \"./assets/fonts/neucha-v12-latin_cyrillic-regular.ttf\");\n/* harmony import */ var _assets_fonts_neucha_v12_latin_cyrillic_regular_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/fonts/neucha-v12-latin_cyrillic-regular.svg */ \"./assets/fonts/neucha-v12-latin_cyrillic-regular.svg\");\n// Imports\n\n\n\n\n\n\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_ruslan_display_v13_latin_cyrillic_regular_eot__WEBPACK_IMPORTED_MODULE_2__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_ruslan_display_v13_latin_cyrillic_regular_eot__WEBPACK_IMPORTED_MODULE_2__.default, { hash: \"?#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_ruslan_display_v13_latin_cyrillic_regular_woff2__WEBPACK_IMPORTED_MODULE_3__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_ruslan_display_v13_latin_cyrillic_regular_woff__WEBPACK_IMPORTED_MODULE_4__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_ruslan_display_v13_latin_cyrillic_regular_ttf__WEBPACK_IMPORTED_MODULE_5__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_ruslan_display_v13_latin_cyrillic_regular_svg__WEBPACK_IMPORTED_MODULE_6__.default, { hash: \"#RuslanDisplay\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_neucha_v12_latin_cyrillic_regular_eot__WEBPACK_IMPORTED_MODULE_7__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_neucha_v12_latin_cyrillic_regular_eot__WEBPACK_IMPORTED_MODULE_7__.default, { hash: \"?#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_neucha_v12_latin_cyrillic_regular_woff2__WEBPACK_IMPORTED_MODULE_8__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_neucha_v12_latin_cyrillic_regular_woff__WEBPACK_IMPORTED_MODULE_9__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_neucha_v12_latin_cyrillic_regular_ttf__WEBPACK_IMPORTED_MODULE_10__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_neucha_v12_latin_cyrillic_regular_svg__WEBPACK_IMPORTED_MODULE_11__.default, { hash: \"#Neucha\" });\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* ruslan-display-regular - latin_cyrillic */\\n@font-face {\\n  font-family: 'Ruslan Display';\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"); /* IE9 Compat Modes */\\n  src: local(''),\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \")\\n      format('embedded-opentype'),\\n    /* IE6-IE8 */\\n      url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \")\\n      format('woff2'),\\n    /* Super Modern Browsers */\\n      url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \")\\n      format('woff'),\\n    /* Modern Browsers */\\n      url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \")\\n      format('truetype'),\\n    /* Safari, Android, iOS */\\n      url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \")\\n      format('svg'); /* Legacy iOS */\\n}\\n\\n/* neucha-regular - latin_cyrillic */\\n@font-face {\\n  font-family: 'Neucha';\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \"); /* IE9 Compat Modes */\\n  src: local(''),\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \")\\n      format('embedded-opentype'),\\n    /* IE6-IE8 */ url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \")\\n      format('woff2'),\\n    /* Super Modern Browsers */\\n      url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \")\\n      format('woff'),\\n    /* Modern Browsers */\\n      url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \")\\n      format('truetype'),\\n    /* Safari, Android, iOS */\\n      url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \")\\n      format('svg'); /* Legacy iOS */\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/_fonts.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/_header.css":
/*!*******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/_header.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_header_bg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/header-bg.jpg */ \"./assets/images/header-bg.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_header_bg_jpg__WEBPACK_IMPORTED_MODULE_2__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".header {\\n  height: 350px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") bottom right / cover\\n    no-repeat;\\n  border-top-right-radius: 10px;\\n  border-top-left-radius: 10px;\\n  position: relative;\\n}\\n\\n.lable {\\n  position: absolute;\\n  top: 30%;\\n  left: 10%;\\n  max-width: 39%;\\n}\\n\\n.lable__title {\\n  color: rgb(255, 255, 255);\\n  font-size: 2.3rem;\\n  font-family: 'Ruslan Display';\\n  letter-spacing: 3px;\\n  margin-bottom: 10px;\\n}\\n\\n.lable__description {\\n  font-family: 'Neucha';\\n  color: rgb(255, 70, 70);\\n  font-weight: 700;\\n  font-size: 1rem;\\n  letter-spacing: 2px;\\n  line-height: 1.4;\\n}\\n\\n.lable__description_accent {\\n  color: rgb(250, 210, 32);\\n}\\n\\n@media (max-width: 600px) {\\n  .header {\\n    height: 200px;\\n  }\\n\\n  .lable {\\n    max-width: 40%;\\n  }\\n\\n  .lable__title {\\n    font-size: 1.4rem;\\n    font-family: 'Ruslan Display';\\n    letter-spacing: 2px;\\n    margin-bottom: 5px;\\n  }\\n\\n  .lable__description {\\n    font-family: 'Neucha';\\n    color: rgb(255, 70, 70);\\n    font-weight: 700;\\n    font-size: 0.7rem;\\n    letter-spacing: 1px;\\n    line-height: 1.2;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/_header.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./assets/images/app-gbmoney.png":
/*!***************************************!*\
  !*** ./assets/images/app-gbmoney.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/398641190dbc89cc6a110ffa4c616abe.png\");\n\n//# sourceURL=webpack:///./assets/images/app-gbmoney.png?");

/***/ }),

/***/ "./assets/images/header-bg.jpg":
/*!*************************************!*\
  !*** ./assets/images/header-bg.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/d6dd43e8a4a06d61120cb8f7fb805582.jpg\");\n\n//# sourceURL=webpack:///./assets/images/header-bg.jpg?");

/***/ }),

/***/ "./assets/fonts/neucha-v12-latin_cyrillic-regular.eot":
/*!************************************************************!*\
  !*** ./assets/fonts/neucha-v12-latin_cyrillic-regular.eot ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fonts/a0cbe04c26a88ff048b87f439939487d.eot\");\n\n//# sourceURL=webpack:///./assets/fonts/neucha-v12-latin_cyrillic-regular.eot?");

/***/ }),

/***/ "./assets/fonts/neucha-v12-latin_cyrillic-regular.svg":
/*!************************************************************!*\
  !*** ./assets/fonts/neucha-v12-latin_cyrillic-regular.svg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fonts/da5dccadca247dc41b91479dcdb24ed5.svg\");\n\n//# sourceURL=webpack:///./assets/fonts/neucha-v12-latin_cyrillic-regular.svg?");

/***/ }),

/***/ "./assets/fonts/neucha-v12-latin_cyrillic-regular.ttf":
/*!************************************************************!*\
  !*** ./assets/fonts/neucha-v12-latin_cyrillic-regular.ttf ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fonts/778f874dc72e66245cfcea910e149b0b.ttf\");\n\n//# sourceURL=webpack:///./assets/fonts/neucha-v12-latin_cyrillic-regular.ttf?");

/***/ }),

/***/ "./assets/fonts/neucha-v12-latin_cyrillic-regular.woff":
/*!*************************************************************!*\
  !*** ./assets/fonts/neucha-v12-latin_cyrillic-regular.woff ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fonts/3a6080f7268844691800315f0e2ff49d.woff\");\n\n//# sourceURL=webpack:///./assets/fonts/neucha-v12-latin_cyrillic-regular.woff?");

/***/ }),

/***/ "./assets/fonts/neucha-v12-latin_cyrillic-regular.woff2":
/*!**************************************************************!*\
  !*** ./assets/fonts/neucha-v12-latin_cyrillic-regular.woff2 ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fonts/3f1b5b13349918b1a595785438862960.woff2\");\n\n//# sourceURL=webpack:///./assets/fonts/neucha-v12-latin_cyrillic-regular.woff2?");

/***/ }),

/***/ "./assets/fonts/ruslan-display-v13-latin_cyrillic-regular.eot":
/*!********************************************************************!*\
  !*** ./assets/fonts/ruslan-display-v13-latin_cyrillic-regular.eot ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fonts/dbea98c36c21f2a67efd55f589732edd.eot\");\n\n//# sourceURL=webpack:///./assets/fonts/ruslan-display-v13-latin_cyrillic-regular.eot?");

/***/ }),

/***/ "./assets/fonts/ruslan-display-v13-latin_cyrillic-regular.svg":
/*!********************************************************************!*\
  !*** ./assets/fonts/ruslan-display-v13-latin_cyrillic-regular.svg ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fonts/fbad4e3f712922c14048399a40051e10.svg\");\n\n//# sourceURL=webpack:///./assets/fonts/ruslan-display-v13-latin_cyrillic-regular.svg?");

/***/ }),

/***/ "./assets/fonts/ruslan-display-v13-latin_cyrillic-regular.ttf":
/*!********************************************************************!*\
  !*** ./assets/fonts/ruslan-display-v13-latin_cyrillic-regular.ttf ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fonts/6bb6ef7a8c176dfe368c92a646cc96e1.ttf\");\n\n//# sourceURL=webpack:///./assets/fonts/ruslan-display-v13-latin_cyrillic-regular.ttf?");

/***/ }),

/***/ "./assets/fonts/ruslan-display-v13-latin_cyrillic-regular.woff":
/*!*********************************************************************!*\
  !*** ./assets/fonts/ruslan-display-v13-latin_cyrillic-regular.woff ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fonts/47de9f7115e6e1417aa3f27e7e24947a.woff\");\n\n//# sourceURL=webpack:///./assets/fonts/ruslan-display-v13-latin_cyrillic-regular.woff?");

/***/ }),

/***/ "./assets/fonts/ruslan-display-v13-latin_cyrillic-regular.woff2":
/*!**********************************************************************!*\
  !*** ./assets/fonts/ruslan-display-v13-latin_cyrillic-regular.woff2 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fonts/4846257ed20b14d98209009197d27341.woff2\");\n\n//# sourceURL=webpack:///./assets/fonts/ruslan-display-v13-latin_cyrillic-regular.woff2?");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.css */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./assets/json/data.json":
/*!*******************************!*\
  !*** ./assets/json/data.json ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"title\":\"Воспоминания\",\"desc\":[\"Здесь можно хранить свои воспоминания. Некоторые из сохраненных воспоминаний можно сделать доступными для просмотра всем.\",\"Нажав на случайное воспоминание можно увидеть все разрешенные воспоминания только этого пользователя, а если у него есть определенные привелегии, то качество фотографий, загруженных им при создании воспоминаний, сможет сразить наповал. Все подробности находятся на сайте проекта.\"],\"img\":\"app-memories.png\",\"site\":\"http://www.memories.ruslalsur.ru\",\"code\":\"https://github.com/ruslalsur/memories\"},{\"title\":\"MAservices\",\"desc\":[\"Проект представляет собой сборник небольших сервисов, выбираемых из меню в заголовке, призванных облегчить работу сети тайных покупателей. Проект предназначен для узких специалистов в области тайных покупок.\",\"Как выяснилось, трудятся они не на шутку, не прекращая попытки что-нибудь максимально-тайно купить, а затем составить гору отчетов по этому поводу.\"],\"img\":\"app-maservises.png\",\"site\":\"http://www.maservices.ruslalsur.ru\",\"code\":\"https://github.com/ruslalsur/maservices\"},{\"title\":\"gbMoney\",\"desc\":[\"Этот проект является командной разработкой, в которой я принимал участие в роли фронтенд-разработчика. Это система управления личными финансами. В проекте задействовано много интересных решений (drag & drop для инициирования транзакций, графическая аналитика финасового состояния, умопомрачительные манипуляции с кошельками и многое другое).\"],\"img\":\"app-gbmoney.png\",\"site\":\"http://www.gbmoney.ruslalsur.ru\",\"code\":\"https://github.com/ruslalsur/GBmoney\"}]');\n\n//# sourceURL=webpack:///./assets/json/data.json?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _assets_json_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/json/data */ \"./assets/json/data.json\");\n/* harmony import */ var _assets_images_app_gbmoney_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/app-gbmoney.png */ \"./assets/images/app-gbmoney.png\");\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;