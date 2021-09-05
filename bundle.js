/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Regular.ttf */ "./src/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Bold.ttf */ "./src/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-LightItalic.ttf */ "./src/Roboto-LightItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "),\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\nhtml {\n\tbackground-color: #2d3142;\n\tcolor: #fdfffc;\n\tfont-family: Roboto;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'. main .'\n\t\t'. . . ';\n}\n\nbody {\n\tgrid-area: main;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 1fr 1fr;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'sidebar task-panel details-panel'\n\t\t'. . . ';\n\tbackground-color: #2d3142;\n\theight: 100vh;\n\tborder-radius: 1em;\n\tgap: 1em;\n\twidth: max-content;\n\talign-self: center;\n\tjustify-self: center;\n}\n\nh3 {\n\ttext-align: center;\n}\n\n#sidebar {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tgrid-area: sidebar;\n\tbackground-color: #3e88a3;\n\theight: 60vh;\n\tborder-radius: 1em;\n\tpadding: 1em;\n\tbox-shadow: 1px 1px 2px black;\n\tmargin: 1.5em 1em;\n}\n\n#project-list {\n\tmargin-bottom: auto;\n}\n\nbutton {\n\tbackground-color: #ffb347;\n\tborder: 0px solid #a54657;\n\tcolor: #2d3142;\n\tborder-radius: 1em;\n\tcursor: pointer;\n}\n.small-btn {\n\tborder-radius: 50%;\n\twidth: 2em;\n\theight: 2em;\n\tfont-size: 0.8em;\n\tpadding: 0;\n}\n\ninput,\nselect {\n\tbackground-color: rgba(255, 255, 255, 0);\n\tborder: 1px solid #fdfffc;\n\tborder-radius: 1em;\n\tpadding: 0.3em 1em;\n\tcolor: #fdfffc;\n\toutline: none;\n\theight: 1.7em;\n\tmargin: 0.5em;\n}\n\noption {\n\tbackground-color: #3e88a3;\n}\n\n::placeholder {\n\tcolor: #fdfffc9c;\n\topacity: 1; /* Firefox */\n}\n\ninput:focus::placeholder {\n\tcolor: transparent;\n}\n#create-task-btn {\n\theight: 2em;\n\twidth: 50%;\n\tmargin: 0 5em 1.2em 5em;\n}\n\n/* duplicate css code. must create class for buttons */\n#edit-task-btn {\n\theight: 2em;\n\tpadding: 0 1.5em 0 1.5em;\n}\n\n.pop-up {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\theight: max-content;\n\twidth: 20em;\n\tbackground-color: #3e88a3;\n\tborder-radius: 1em;\n\tpadding: 1em 1em 1.5em 2em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n#edit-project-popup {\n\tdisplay: none;\n}\n.pop-up-input {\n\twidth: 80%;\n\theight: 2em;\n\tborder-radius: 1em;\n}\n\n#pop-up-priority-input {\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tborder: 1px solid #fdfffc;\n\twidth: 88%;\n\tmargin-left: 0.4em;\n\tborder-radius: 0.8em;\n}\n\n.priority-label {\n\tposition: relative;\n\tbottom: 5px;\n}\n.pop-up-btns {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-top: 1em;\n\twidth: 90%;\n}\n\n.pop-up-btn {\n\tpadding: 0.4em 1em;\n}\n\n.panel {\n\theight: 60vh;\n\tbackground-color: #a54657;\n\tmargin: 1.5em 0;\n\tpadding: 1em;\n\tborder-radius: 1em;\n\twidth: 20em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n#task-panel {\n\tgrid-area: task-panel;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tmax-width: 16em;\n}\n\n.task-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder: 2px solid #fdfffc4b;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 2.3em;\n\talign-items: center;\n}\n.priority-1 {\n\tborder: 2px solid rgba(0, 128, 0, 0.356);\n}\n.priority-2 {\n\tborder: 2px solid rgba(223, 208, 0, 0.493);\n}\n.priority-3 {\n\tborder: 2px solid rgba(141, 0, 0, 0.596);\n}\n\n/* it works if I add the class from the dev tool but doesn't work with classList.add */\n.task-done {\n\tbackground-color: #834c56;\n\ttext-decoration: line-through;\n}\n\n.task-card:hover {\n\tbackground-color: #b65466;\n}\n\n.project-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder: 2px solid #fdfffc4b;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 2.3em;\n\talign-items: center;\n}\n\n.project-title {\n\tmargin: 0;\n}\n\n.project-card:hover {\n\tbackground-color: #579cb6;\n}\n#quick-add,\n#new-project {\n\tmargin: 0 auto;\n\twhite-space: nowrap;\n}\n\n#details-panel {\n\tdisplay: none;\n\tgrid-area: details-panel;\n\ttext-align: center;\n}\n\n@media (max-width: 1000px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar sidebar task-panel task-panel'\n\t\t\t'. details-panel details-panel .  ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n\t#sidebar {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n}\n\n@media (max-width: 635px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar'\n\t\t\t'task-panel'\n\t\t\t' details-panel ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: max-content;\n\t\tmax-width: 16em;\n\t\tmargin: 1em 0;\n\t}\n\t#sidebar {\n\t\theight: max-content;\n\t\tmargin: 1em 0;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url('./Roboto-Regular.ttf'), url('./Roboto-Bold.ttf'),\n\t\turl('./Roboto-LightItalic.ttf');\n}\n\nhtml {\n\tbackground-color: #2d3142;\n\tcolor: #fdfffc;\n\tfont-family: Roboto;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'. main .'\n\t\t'. . . ';\n}\n\nbody {\n\tgrid-area: main;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 1fr 1fr;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'sidebar task-panel details-panel'\n\t\t'. . . ';\n\tbackground-color: #2d3142;\n\theight: 100vh;\n\tborder-radius: 1em;\n\tgap: 1em;\n\twidth: max-content;\n\talign-self: center;\n\tjustify-self: center;\n}\n\nh3 {\n\ttext-align: center;\n}\n\n#sidebar {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tgrid-area: sidebar;\n\tbackground-color: #3e88a3;\n\theight: 60vh;\n\tborder-radius: 1em;\n\tpadding: 1em;\n\tbox-shadow: 1px 1px 2px black;\n\tmargin: 1.5em 1em;\n}\n\n#project-list {\n\tmargin-bottom: auto;\n}\n\nbutton {\n\tbackground-color: #ffb347;\n\tborder: 0px solid #a54657;\n\tcolor: #2d3142;\n\tborder-radius: 1em;\n\tcursor: pointer;\n}\n.small-btn {\n\tborder-radius: 50%;\n\twidth: 2em;\n\theight: 2em;\n\tfont-size: 0.8em;\n\tpadding: 0;\n}\n\ninput,\nselect {\n\tbackground-color: rgba(255, 255, 255, 0);\n\tborder: 1px solid #fdfffc;\n\tborder-radius: 1em;\n\tpadding: 0.3em 1em;\n\tcolor: #fdfffc;\n\toutline: none;\n\theight: 1.7em;\n\tmargin: 0.5em;\n}\n\noption {\n\tbackground-color: #3e88a3;\n}\n\n::placeholder {\n\tcolor: #fdfffc9c;\n\topacity: 1; /* Firefox */\n}\n\ninput:focus::placeholder {\n\tcolor: transparent;\n}\n#create-task-btn {\n\theight: 2em;\n\twidth: 50%;\n\tmargin: 0 5em 1.2em 5em;\n}\n\n/* duplicate css code. must create class for buttons */\n#edit-task-btn {\n\theight: 2em;\n\tpadding: 0 1.5em 0 1.5em;\n}\n\n.pop-up {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\theight: max-content;\n\twidth: 20em;\n\tbackground-color: #3e88a3;\n\tborder-radius: 1em;\n\tpadding: 1em 1em 1.5em 2em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n#edit-project-popup {\n\tdisplay: none;\n}\n.pop-up-input {\n\twidth: 80%;\n\theight: 2em;\n\tborder-radius: 1em;\n}\n\n#pop-up-priority-input {\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tborder: 1px solid #fdfffc;\n\twidth: 88%;\n\tmargin-left: 0.4em;\n\tborder-radius: 0.8em;\n}\n\n.priority-label {\n\tposition: relative;\n\tbottom: 5px;\n}\n.pop-up-btns {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-top: 1em;\n\twidth: 90%;\n}\n\n.pop-up-btn {\n\tpadding: 0.4em 1em;\n}\n\n.panel {\n\theight: 60vh;\n\tbackground-color: #a54657;\n\tmargin: 1.5em 0;\n\tpadding: 1em;\n\tborder-radius: 1em;\n\twidth: 20em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n#task-panel {\n\tgrid-area: task-panel;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tmax-width: 16em;\n}\n\n.task-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder: 2px solid #fdfffc4b;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 2.3em;\n\talign-items: center;\n}\n.priority-1 {\n\tborder: 2px solid rgba(0, 128, 0, 0.356);\n}\n.priority-2 {\n\tborder: 2px solid rgba(223, 208, 0, 0.493);\n}\n.priority-3 {\n\tborder: 2px solid rgba(141, 0, 0, 0.596);\n}\n\n/* it works if I add the class from the dev tool but doesn't work with classList.add */\n.task-done {\n\tbackground-color: #834c56;\n\ttext-decoration: line-through;\n}\n\n.task-card:hover {\n\tbackground-color: #b65466;\n}\n\n.project-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder: 2px solid #fdfffc4b;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 2.3em;\n\talign-items: center;\n}\n\n.project-title {\n\tmargin: 0;\n}\n\n.project-card:hover {\n\tbackground-color: #579cb6;\n}\n#quick-add,\n#new-project {\n\tmargin: 0 auto;\n\twhite-space: nowrap;\n}\n\n#details-panel {\n\tdisplay: none;\n\tgrid-area: details-panel;\n\ttext-align: center;\n}\n\n@media (max-width: 1000px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar sidebar task-panel task-panel'\n\t\t\t'. details-panel details-panel .  ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n\t#sidebar {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n}\n\n@media (max-width: 635px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar'\n\t\t\t'task-panel'\n\t\t\t' details-panel ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: max-content;\n\t\tmax-width: 16em;\n\t\tmargin: 1em 0;\n\t}\n\t#sidebar {\n\t\theight: max-content;\n\t\tmargin: 1em 0;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProject": () => (/* binding */ newProject),
/* harmony export */   "quickAdd": () => (/* binding */ quickAdd),
/* harmony export */   "createCardBtn": () => (/* binding */ createCardBtn),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "toggleTaskDone": () => (/* binding */ toggleTaskDone),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "showEditProjectPopUp": () => (/* binding */ showEditProjectPopUp)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");






// Create Tasks button opens pop-up and allows a full task to be added
const createTaskBtn = document.getElementById('create-task-btn');
createTaskBtn.addEventListener('click', () => showTaskPopUp('Create New Task'));

// Quickly add a task with only the title, but no other information
const quickAddInput = document.getElementById('quick-add-input');
const quickAddBtn = document.getElementById('quick-add-btn');
quickAddBtn.addEventListener('click', () => quickAdd(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject));

// Add a task with title, description, due date and priority
const fullAddBtn = document.getElementById('full-add-btn');
fullAddBtn.addEventListener('click', () => createOrEditTask(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject));

// Cancel new/edit task pop-up
const taskPopUpCancel = document.getElementById('cancel-full-add-btn');
taskPopUpCancel.addEventListener('click', () => hidePopUp('task-popup'));
// Opens edit task pop-up
const editTaskBtn = document.getElementById('edit-task-btn');
editTaskBtn.addEventListener('click', () => showTaskPopUp('Edit Task'));

// Add a new Project
const newProjectInput = document.getElementById('new-project-input');
const newProjectBtn = document.getElementById('new-project-btn');
newProjectBtn.addEventListener('click', () =>
	newProject(newProjectInput.value)
);

// Edit project name
const editProjectNameSubmit = document.getElementById(
	'edit-project-name-submit'
);
const editProjectNameInput = document.getElementById('edit-project-name-input');
editProjectNameSubmit.addEventListener('click', (e) => editProjectName(e));

// Cancel edit Project name
const cancelEditProjectName = document.getElementById(
	'edit-project-name-cancel'
);
cancelEditProjectName.addEventListener('click', () =>
	hidePopUp('edit-project-popup')
);
// Creates a new Project
function newProject(projectName) {
	_project_js__WEBPACK_IMPORTED_MODULE_2__.projects.push((0,_project_js__WEBPACK_IMPORTED_MODULE_2__.createProject)(projectName, []));
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderProjects)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.resetTextInput)(newProjectInput);
}

// Uses input to edit project name
function editProjectName(e) {
	const input = document.getElementById('edit-project-name-input');
	console.log(_project_js__WEBPACK_IMPORTED_MODULE_2__.hiddenActiveProject);
	_project_js__WEBPACK_IMPORTED_MODULE_2__.hiddenActiveProject.editName(input.value);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderProjects)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.resetTextInput)(input);
	hidePopUp('edit-project-popup');
}

function hidePopUp(id) {
	console.log(id);
	const popUp = document.getElementById(id);
	console.log(popUp);
	popUp.style.display = 'none';
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.resetTextInput)(
		document.getElementById('pop-up-title-input'),
		document.getElementById('pop-up-description-input'),
		document.getElementById('pop-up-due-date-input')
	);
}

// Create a card. Can be used for a task or a project
function createCardBtn(type, elClass, func) {
	const button = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createDomElement)(type, elClass);
	button.addEventListener('click', (e) => func(e));
	return button;
}

// Makes the "Create new task pop-up" visible
function showTaskPopUp(title) {
	changePopUpTitle(title);
	const popUp = document.getElementById('task-popup');
	if (popUp.style.display != 'block') {
		document.querySelector(`input[value="0"`).checked = true;
		popUp.style.display = 'block';
	} else popUp.style.display = 'none';
	if (title === 'Edit Task') {
		document.getElementById('pop-up-title-input').value =
			_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.title;
		document.getElementById('pop-up-description-input').value =
			_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.description;
		document.getElementById('pop-up-due-date-input').value =
			_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.dueDate;
		checkRadioBtn(_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask);
	}
}

// Change pop-up title

function changePopUpTitle(newTitle) {
	const title = document.getElementById('pop-up-title');
	title.textContent = newTitle;
}
// Makes the "Create edit project pop-up" visible
function showEditProjectPopUp(e) {
	const popUp = document.getElementById('edit-project-popup');
	if (popUp.style.display != 'block') {
		const index = e.path[0].dataset.editProjectBtn;
		popUp.style.display = 'block';
		(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.setHiddenActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[index]);
		console.log(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[index]);
	} else popUp.style.display = 'none';
}

// Deletes a the relative task
function deleteTask(e) {
	const index = e.path[0].dataset.deleteBtn;
	_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.removeTask(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[index]);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
}

// Deletes the relative Project
function deleteProject(e) {
	const index = e.path[0].dataset.deleteProjectBtn;
	console.log(index);
	(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.removeProject)(index);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderProjects)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks);
}

// NOT WORKING YET. Toggles a task as "Done"
function toggleTaskDone(e) {
	const index = e.path[0].dataset.doneBtn;
	const task = document.querySelector(`div[data-task="${index}"]`);
	_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[index].toggleDone();
	console.log(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[index].isDone);
	_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[index].isDone
		? task.classList.add('task-done')
		: task.classList.remove('task-done');
	console.log(task);
	console.log(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[index].isDone);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
}

// Use quickAdd text input to create a new task with only a title
function quickAdd(project) {
	if (quickAddInput.value !== '') {
		if (_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[0] === undefined) {
			newProject('Personal');
			(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[0]);
		}
		const task = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			quickAddInput.value,
			'No description defined',
			'No due date defined',
			'No priority defined',
			undefined
		);
		project.addTask(task);
		(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
		(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(project.tasks);
		(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.resetTextInput)(quickAddInput);
	}
}

// Decideds to create a new task or edit an existing one
function createOrEditTask(project) {
	const title = document.getElementById('pop-up-title').textContent;
	title === 'Create New Task' ? fullAdd(project) : editTask(project);
	hidePopUp('task-popup');
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.resetTextInput)(
		document.getElementById('pop-up-title-input'),
		document.getElementById('pop-up-description-input'),
		document.getElementById('pop-up-due-date-input')
	);
}

// Creates a task with a title, description, due date and priority
function fullAdd(project) {
	if (_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[0] === undefined) {
		newProject('Personal');
		(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[0]);
	}
	const task = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.createTask)(
		document.getElementById('pop-up-title-input').value,
		document.getElementById('pop-up-description-input').value,
		document.getElementById('pop-up-due-date-input').value,
		document.querySelector('input[name="priority"]:checked').value,
		undefined
	);
	project.addTask(task);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(project.tasks);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTaskDetails)(task);
}

// Edit the task
function editTask(project) {
	const checkedPriority = document.querySelector(
		'input[name="priority"]:checked'
	);

	const title = document.getElementById('pop-up-title-input').value;
	const description = document.getElementById('pop-up-description-input').value;
	const dueDate = document.getElementById('pop-up-due-date-input').value;
	const priority = checkedPriority === null ? 0 : checkedPriority.value;

	_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.editTitle(title);
	_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.editDescription(description);
	_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.editDueDate(dueDate);
	_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.editPriority(priority);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(project.tasks);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTaskDetails)(_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask);
}

// Checks radio button with tasks previous selection
function checkRadioBtn(task) {
	document.querySelector(`input[value="${task.priority}"`).checked = true;
}


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks),
/* harmony export */   "selectProject": () => (/* binding */ selectProject),
/* harmony export */   "resetTextInput": () => (/* binding */ resetTextInput),
/* harmony export */   "createDomElement": () => (/* binding */ createDomElement),
/* harmony export */   "renderTaskDetails": () => (/* binding */ renderTaskDetails)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./src/buttons.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");





// Assign Dataset to Project Card
function assignProjectDataIndex(index, card, editBtn, deleteBtn) {
	card.dataset.project = index;
	deleteBtn.dataset.deleteProjectBtn = index;
	editBtn.dataset.editProjectBtn = index;
}

// Create a Project Card
function createProjectCard(project) {
	const index = document.getElementById('project-list').children.length - 1;
	const card = createDomElement('div', 'project-card');
	const deleteBtn = (0,_buttons__WEBPACK_IMPORTED_MODULE_1__.createCardBtn)('button', 'small-btn', _buttons__WEBPACK_IMPORTED_MODULE_1__.deleteProject);
	const title = createDomElement('div', 'project-title');
	const editBtn = (0,_buttons__WEBPACK_IMPORTED_MODULE_1__.createCardBtn)('button', 'small-btn', _buttons__WEBPACK_IMPORTED_MODULE_1__.showEditProjectPopUp);
	deleteBtn.innerHTML = '&#10007;';
	editBtn.innerHTML = '&#9998';
	title.textContent = project.title;
	appendToParent(card, editBtn, title, deleteBtn);
	assignProjectDataIndex(index, card, editBtn, deleteBtn);
	card.addEventListener('click', () => {
		renderActiveProject(project);
	});
	return card;
}

// Appends Project Card to Project List
function appendProject(project) {
	const list = document.getElementById('project-list');
	const card = createProjectCard(project);
	list.appendChild(card);
}

// Appends all Project Card to Project List
function appendAllProjects(project) {
	_project__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => appendProject(project));
}

// Renders Projects
function renderProjects(projects) {
	resetElements('.project-card');
	appendAllProjects();
}

// Renders the active projects tasks
function renderActiveProject(project) {
	(0,_project__WEBPACK_IMPORTED_MODULE_0__.setActiveProject)(project);
	selectProject(project);
	renderTasks(project.tasks);
}

// Renders the active projects
function selectProject(project) {
	const projectTitle = document.getElementById('project-title');
	projectTitle.textContent = project.title;
}

// Assigns dataset to task card
function assignTaskDataIndex(index, card, doneBtn, deleteBtn) {
	card.dataset.task = index;
	doneBtn.dataset.doneBtn = index;
	deleteBtn.dataset.deleteBtn = index;
}

// Create a new Task Card
function createTaskCard(task) {
	const index = document.getElementById('task-list').children.length - 2;
	const card = createDomElement('div', 'task-card');
	const doneBtn = (0,_buttons__WEBPACK_IMPORTED_MODULE_1__.createCardBtn)('button', 'small-btn', _buttons__WEBPACK_IMPORTED_MODULE_1__.toggleTaskDone);
	const deleteBtn = (0,_buttons__WEBPACK_IMPORTED_MODULE_1__.createCardBtn)('button', 'small-btn', _buttons__WEBPACK_IMPORTED_MODULE_1__.deleteTask);
	const title = createDomElement('div', 'task-title');
	card.classList.add(`priority-${task.priority}`);
	taskDone(task, card);
	console.log(card.classList);
	doneBtn.innerHTML = '&#10003';
	deleteBtn.innerHTML = '&#10007;';
	title.textContent = task.title;
	appendToParent(card, doneBtn, title, deleteBtn);
	assignTaskDataIndex(index, card, doneBtn, deleteBtn);
	card.addEventListener('click', () => renderTaskDetails(task));
	return card;
}

// Append a task card
function appendTask(task) {
	const list = document.getElementById('task-list');
	const card = createTaskCard(task);
	list.appendChild(card);
}

// Append all task cards
function appendAllTasks(tasks) {
	tasks.forEach((task) => appendTask(task));
}

// Renders Projects
function renderTasks(tasks) {
	resetElements('.task-card');
	appendAllTasks(tasks);
}

// Renders Task Details on details panel
function renderTaskDetails(task) {
	const title = document.getElementById('details-title');
	const description = document.getElementById('details-description');
	const dueDate = document.getElementById('details-due-date');
	const priority = document.getElementById('details-priority');
	document.getElementById('details-panel').style.display = 'block';
	console.log('hello');
	title.textContent = task.title;
	description.textContent = task.description ? `${task.description}` : '';
	dueDate.textContent = task.dueDate ? `Due Date: ${task.dueDate}` : '';
	if (task.priority === '0') {
		priority.textContent = 'Priority: None';
	} else if (task.priority === '1') {
		priority.textContent = 'Priority: !';
	} else if (task.priority === '2') {
		priority.textContent = 'Priority: !!';
	} else if (task.priority === '3') {
		priority.textContent = 'Priority: !!!';
	}
	(0,_task__WEBPACK_IMPORTED_MODULE_2__.setHiddenActiveTask)(task);
}

// Appends multiple elements to a div
function appendToParent(parent, ...args) {
	args.forEach((arg) => parent.appendChild(arg));
}

// Create a DOM element with relative class
function createDomElement(type, elClass) {
	const element = document.createElement(`${type}`);
	element.classList.add(`${elClass}`);
	return element;
}

// Resets all elements with a certain class
function resetElements(elClass) {
	let elements = document.querySelectorAll(elClass);
	elements.forEach((element) => element.remove());
}

// Resets text input
function resetTextInput(...args) {
	args.forEach((arg) => (arg.value = ''));
}

// Adds task-done class to task card

function taskDone(task, card) {
	if (task.isDone === true) {
		card.classList.add('task-done');
	}
}


/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "save": () => (/* binding */ save),
/* harmony export */   "load": () => (/* binding */ load)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");



// Saves to localStorage
function save(projects) {
	localStorage.setItem('projects', JSON.stringify(projects));
}

// Loads from localStorage
function load() {
	let projects = JSON.parse(localStorage.getItem('projects'));
	return projects === null ? [] : projects;
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeProject": () => (/* binding */ activeProject),
/* harmony export */   "hiddenActiveProject": () => (/* binding */ hiddenActiveProject),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "setActiveProject": () => (/* binding */ setActiveProject),
/* harmony export */   "setHiddenActiveProject": () => (/* binding */ setHiddenActiveProject),
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons */ "./src/buttons.js");





// Project Factory Function
function createProject(title, tasks) {
	const proto = {
		addTask: function (task) {
			this.tasks.push(task);
		},

		removeTask: function (task) {
			const index = this.tasks.indexOf(task);
			this.tasks.splice(index, 1);
		},
		editName: function (newTitle) {
			this.title = newTitle;
		},
	};
	const project = Object.assign(Object.create(proto), {
		title,
		tasks,
	});
	return project;
}

// Sets the Active Project
function setActiveProject(project) {
	activeProject = project;
}
// Removes project from Projects array
function removeProject(index) {
	projects.splice(index, 1);
}

// Loads localStorage
let projects = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.load)();

// Defines the active Project
let activeProject;

// Hidden active project

let hiddenActiveProject;

// Sets the Hidden active project (needed to edit project)

function setHiddenActiveProject(project) {
	hiddenActiveProject = project;
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hiddenActiveTask": () => (/* binding */ hiddenActiveTask),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "setHiddenActiveTask": () => (/* binding */ setHiddenActiveTask)
/* harmony export */ });


// Task Factory Function
function createTask(title, description, dueDate, priority, isDone) {
	const proto = {
		editTitle: function (newTitle) {
			this.title = newTitle;
		},
		editDescription: function (newDescription) {
			this.description = newDescription;
		},
		editDueDate: function (newDueDate) {
			this.dueDate = newDueDate;
		},
		editPriority: function (newPriority) {
			this.priority = newPriority;
		},
		toggleDone: function () {
			this.isDone = !this.isDone;
		},
	};
	const task = Object.assign(Object.create(proto), {
		title,
		description,
		dueDate,
		priority,
		isDone,
	});
	return task;
}

// Hidden active task

let hiddenActiveTask;

// Sets the Hidden task project (needed to edit task)

function setHiddenActiveTask(task) {
	hiddenActiveTask = task;
}


/***/ }),

/***/ "./src/Roboto-Bold.ttf":
/*!*****************************!*\
  !*** ./src/Roboto-Bold.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75371f53f06181df75f1.ttf";

/***/ }),

/***/ "./src/Roboto-LightItalic.ttf":
/*!************************************!*\
  !*** ./src/Roboto-LightItalic.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43cbee784f9194c54b2c.ttf";

/***/ }),

/***/ "./src/Roboto-Regular.ttf":
/*!********************************!*\
  !*** ./src/Roboto-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8d6ac03c7b96b7acb62.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons */ "./src/buttons.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");







// Recreates all Projects and Tasks with working __proto__ after loading it from localStorage
for (let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_2__.projects.length; i++) {
	_project__WEBPACK_IMPORTED_MODULE_2__.projects[i] = (0,_project__WEBPACK_IMPORTED_MODULE_2__.createProject)(_project__WEBPACK_IMPORTED_MODULE_2__.projects[i].title, _project__WEBPACK_IMPORTED_MODULE_2__.projects[i].tasks);
	for (let a = 0; a < _project__WEBPACK_IMPORTED_MODULE_2__.projects[i].tasks.length; a++) {
		_project__WEBPACK_IMPORTED_MODULE_2__.projects[i].tasks[a] = (0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			_project__WEBPACK_IMPORTED_MODULE_2__.projects[i].tasks[a].title,
			_project__WEBPACK_IMPORTED_MODULE_2__.projects[i].tasks[a].description,
			_project__WEBPACK_IMPORTED_MODULE_2__.projects[i].tasks[a].dueDate,
			_project__WEBPACK_IMPORTED_MODULE_2__.projects[i].tasks[a].priority,
			_project__WEBPACK_IMPORTED_MODULE_2__.projects[i].tasks[a].isDone
		);
	}
}

// Creates default "Personal" project if projects array is empty when loading app
if (_project__WEBPACK_IMPORTED_MODULE_2__.projects[0] === undefined) {
	(0,_buttons__WEBPACK_IMPORTED_MODULE_4__.newProject)('Personal');
	(0,_buttons__WEBPACK_IMPORTED_MODULE_4__.newProject)('Work');
}

// Sets Active Project to the first one in projects array
(0,_project__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(_project__WEBPACK_IMPORTED_MODULE_2__.projects[0]);

// Renders Projects upon loading the app
(0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderProjects)(_project__WEBPACK_IMPORTED_MODULE_2__.projects);

// Renders Tasks upon loading the app
(0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderTasks)(_project__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks);

// Selects the active project and shows it on the Tasks-Panel
(0,_dom__WEBPACK_IMPORTED_MODULE_3__.selectProject)(_project__WEBPACK_IMPORTED_MODULE_2__.activeProject);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVkscUJBQXFCLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtB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QUFJLHFEQUFlLEVBQUU7QUFDckMsQ0FBQyw4Q0FBUSxNQUFNLHVEQUFhLENBQUMsOENBQVEsV0FBVyw4Q0FBUTtBQUN4RCxpQkFBaUIsSUFBSSw4Q0FBUSxrQkFBa0I7QUFDL0MsRUFBRSw4Q0FBUSxlQUFlLGlEQUFVO0FBQ25DLEdBQUcsOENBQVE7QUFDWCxHQUFHLDhDQUFRO0FBQ1gsR0FBRyw4Q0FBUTtBQUNYLEdBQUcsOENBQVE7QUFDWCxHQUFHLDhDQUFRO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxpREFBVztBQUNmLENBQUMsb0RBQVU7QUFDWCxDQUFDLG9EQUFVO0FBQ1g7O0FBRUE7QUFDQSwwREFBZ0IsQ0FBQyxpREFBVzs7QUFFNUI7QUFDQSxvREFBYyxDQUFDLDhDQUFROztBQUV2QjtBQUNBLGlEQUFXLENBQUMseURBQW1COztBQUUvQjtBQUNBLG1EQUFhLENBQUMsbURBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9idXR0b25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1MaWdodEl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG5cXHRzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIiksXFxuXFx0XFx0dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuaHRtbCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzJkMzE0MjtcXG5cXHRjb2xvcjogI2ZkZmZmYztcXG5cXHRmb250LWZhbWlseTogUm9ib3RvO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHQnLiAuIC4nXFxuXFx0XFx0Jy4gbWFpbiAuJ1xcblxcdFxcdCcuIC4gLiAnO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRncmlkLWFyZWE6IG1haW47XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0Jy4gLiAuJ1xcblxcdFxcdCdzaWRlYmFyIHRhc2stcGFuZWwgZGV0YWlscy1wYW5lbCdcXG5cXHRcXHQnLiAuIC4gJztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzMTQyO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdGdhcDogMWVtO1xcblxcdHdpZHRoOiBtYXgtY29udGVudDtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmgzIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNzaWRlYmFyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGdyaWQtYXJlYTogc2lkZWJhcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4OGEzO1xcblxcdGhlaWdodDogNjB2aDtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0cGFkZGluZzogMWVtO1xcblxcdGJveC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xcblxcdG1hcmdpbjogMS41ZW0gMWVtO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0IHtcXG5cXHRtYXJnaW4tYm90dG9tOiBhdXRvO1xcbn1cXG5cXG5idXR0b24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmIzNDc7XFxuXFx0Ym9yZGVyOiAwcHggc29saWQgI2E1NDY1NztcXG5cXHRjb2xvcjogIzJkMzE0MjtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc21hbGwtYnRuIHtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0d2lkdGg6IDJlbTtcXG5cXHRoZWlnaHQ6IDJlbTtcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZmRmZmZjO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRwYWRkaW5nOiAwLjNlbSAxZW07XFxuXFx0Y29sb3I6ICNmZGZmZmM7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRoZWlnaHQ6IDEuN2VtO1xcblxcdG1hcmdpbjogMC41ZW07XFxufVxcblxcbm9wdGlvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNlODhhMztcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuXFx0Y29sb3I6ICNmZGZmZmM5YztcXG5cXHRvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXFxufVxcblxcbmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuXFx0Y29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4jY3JlYXRlLXRhc2stYnRuIHtcXG5cXHRoZWlnaHQ6IDJlbTtcXG5cXHR3aWR0aDogNTAlO1xcblxcdG1hcmdpbjogMCA1ZW0gMS4yZW0gNWVtO1xcbn1cXG5cXG4vKiBkdXBsaWNhdGUgY3NzIGNvZGUuIG11c3QgY3JlYXRlIGNsYXNzIGZvciBidXR0b25zICovXFxuI2VkaXQtdGFzay1idG4ge1xcblxcdGhlaWdodDogMmVtO1xcblxcdHBhZGRpbmc6IDAgMS41ZW0gMCAxLjVlbTtcXG59XFxuXFxuLnBvcC11cCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1MCU7XFxuXFx0bGVmdDogNTAlO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0d2lkdGg6IDIwZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNlODhhMztcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0cGFkZGluZzogMWVtIDFlbSAxLjVlbSAyZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxufVxcblxcbiNlZGl0LXByb2plY3QtcG9wdXAge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wb3AtdXAtaW5wdXQge1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4jcG9wLXVwLXByaW9yaXR5LWlucHV0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmZGZmZmM7XFxuXFx0d2lkdGg6IDg4JTtcXG5cXHRtYXJnaW4tbGVmdDogMC40ZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC44ZW07XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvdHRvbTogNXB4O1xcbn1cXG4ucG9wLXVwLWJ0bnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG1hcmdpbi10b3A6IDFlbTtcXG5cXHR3aWR0aDogOTAlO1xcbn1cXG5cXG4ucG9wLXVwLWJ0biB7XFxuXFx0cGFkZGluZzogMC40ZW0gMWVtO1xcbn1cXG5cXG4ucGFuZWwge1xcblxcdGhlaWdodDogNjB2aDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYTU0NjU3O1xcblxcdG1hcmdpbjogMS41ZW0gMDtcXG5cXHRwYWRkaW5nOiAxZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHdpZHRoOiAyMGVtO1xcblxcdGJveC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xcbn1cXG5cXG4jdGFzay1wYW5lbCB7XFxuXFx0Z3JpZC1hcmVhOiB0YXNrLXBhbmVsO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0bWF4LXdpZHRoOiAxNmVtO1xcbn1cXG5cXG4udGFzay1jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjZmRmZmZjNGI7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRoZWlnaHQ6IDIuM2VtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcmlvcml0eS0xIHtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDEyOCwgMCwgMC4zNTYpO1xcbn1cXG4ucHJpb3JpdHktMiB7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgcmdiYSgyMjMsIDIwOCwgMCwgMC40OTMpO1xcbn1cXG4ucHJpb3JpdHktMyB7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgcmdiYSgxNDEsIDAsIDAsIDAuNTk2KTtcXG59XFxuXFxuLyogaXQgd29ya3MgaWYgSSBhZGQgdGhlIGNsYXNzIGZyb20gdGhlIGRldiB0b29sIGJ1dCBkb2Vzbid0IHdvcmsgd2l0aCBjbGFzc0xpc3QuYWRkICovXFxuLnRhc2stZG9uZSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzgzNGM1NjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stY2FyZDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2I2NTQ2NjtcXG59XFxuXFxuLnByb2plY3QtY2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Ym9yZGVyOiAycHggc29saWQgI2ZkZmZmYzRiO1xcblxcdG1hcmdpbi1ib3R0b206IDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0aGVpZ2h0OiAyLjNlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTc5Y2I2O1xcbn1cXG4jcXVpY2stYWRkLFxcbiNuZXctcHJvamVjdCB7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuI2RldGFpbHMtcGFuZWwge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0Z3JpZC1hcmVhOiBkZXRhaWxzLXBhbmVsO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcblxcdGJvZHkge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFx0J3NpZGViYXIgc2lkZWJhciB0YXNrLXBhbmVsIHRhc2stcGFuZWwnXFxuXFx0XFx0XFx0Jy4gZGV0YWlscy1wYW5lbCBkZXRhaWxzLXBhbmVsIC4gICc7XFxuXFx0XFx0Z2FwOiAwO1xcblxcdH1cXG5cXHQucGFuZWwge1xcblxcdFxcdGhlaWdodDogNDB2aDtcXG5cXHRcXHRtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHR9XFxuXFx0I3NpZGViYXIge1xcblxcdFxcdGhlaWdodDogNDB2aDtcXG5cXHRcXHRtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MzVweCkge1xcblxcdGJvZHkge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFx0J3NpZGViYXInXFxuXFx0XFx0XFx0J3Rhc2stcGFuZWwnXFxuXFx0XFx0XFx0JyBkZXRhaWxzLXBhbmVsICc7XFxuXFx0XFx0Z2FwOiAwO1xcblxcdH1cXG5cXHQucGFuZWwge1xcblxcdFxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0XFx0bWF4LXdpZHRoOiAxNmVtO1xcblxcdFxcdG1hcmdpbjogMWVtIDA7XFxuXFx0fVxcblxcdCNzaWRlYmFyIHtcXG5cXHRcXHRoZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdFxcdG1hcmdpbjogMWVtIDA7XFxuXFx0fVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLHFCQUFxQjtDQUNyQjt5Q0FDZ0M7QUFDakM7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2I7OztVQUdTO0FBQ1Y7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsYUFBYTtDQUNiLCtCQUErQjtDQUMvQjs7O1VBR1M7Q0FDVCx5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1Isa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDhCQUE4QjtDQUM5QixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLDZCQUE2QjtDQUM3QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLFVBQVU7QUFDWDs7QUFFQTs7Q0FFQyx3Q0FBd0M7Q0FDeEMseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLGFBQWE7Q0FDYixhQUFhO0NBQ2IsYUFBYTtBQUNkOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFVBQVUsRUFBRSxZQUFZO0FBQ3pCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtDQUNWLHVCQUF1QjtBQUN4Qjs7QUFFQSxzREFBc0Q7QUFDdEQ7Q0FDQyxXQUFXO0NBQ1gsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUNULGdDQUFnQztDQUNoQyxtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsMEJBQTBCO0NBQzFCLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLGFBQWE7QUFDZDtBQUNBO0NBQ0MsVUFBVTtDQUNWLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsNkJBQTZCO0NBQzdCLHlCQUF5QjtDQUN6QixVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0FBQ1o7QUFDQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsZUFBZTtDQUNmLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsZUFBZTtDQUNmLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDhCQUE4QjtDQUM5QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QiwyQkFBMkI7Q0FDM0Isa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyx3Q0FBd0M7QUFDekM7QUFDQTtDQUNDLDBDQUEwQztBQUMzQztBQUNBO0NBQ0Msd0NBQXdDO0FBQ3pDOztBQUVBLHNGQUFzRjtBQUN0RjtDQUNDLHlCQUF5QjtDQUN6Qiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLDJCQUEyQjtDQUMzQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTs7Q0FFQyxjQUFjO0NBQ2QsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHdCQUF3QjtDQUN4QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQztFQUNDOztzQ0FFb0M7RUFDcEMsTUFBTTtDQUNQO0NBQ0E7RUFDQyxZQUFZO0VBQ1osdUJBQXVCO0NBQ3hCO0NBQ0E7RUFDQyxZQUFZO0VBQ1osdUJBQXVCO0NBQ3hCO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDOzs7b0JBR2tCO0VBQ2xCLE1BQU07Q0FDUDtDQUNBO0VBQ0MsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0NBQ2Q7Q0FDQTtFQUNDLG1CQUFtQjtFQUNuQixhQUFhO0NBQ2Q7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90byc7XFxuXFx0c3JjOiB1cmwoJy4vUm9ib3RvLVJlZ3VsYXIudHRmJyksIHVybCgnLi9Sb2JvdG8tQm9sZC50dGYnKSxcXG5cXHRcXHR1cmwoJy4vUm9ib3RvLUxpZ2h0SXRhbGljLnR0ZicpO1xcbn1cXG5cXG5odG1sIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzMTQyO1xcblxcdGNvbG9yOiAjZmRmZmZjO1xcblxcdGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdCcuIC4gLidcXG5cXHRcXHQnLiBtYWluIC4nXFxuXFx0XFx0Jy4gLiAuICc7XFxufVxcblxcbmJvZHkge1xcblxcdGdyaWQtYXJlYTogbWFpbjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHQnLiAuIC4nXFxuXFx0XFx0J3NpZGViYXIgdGFzay1wYW5lbCBkZXRhaWxzLXBhbmVsJ1xcblxcdFxcdCcuIC4gLiAnO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyZDMxNDI7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0Z2FwOiAxZW07XFxuXFx0d2lkdGg6IG1heC1jb250ZW50O1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuaDMge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3NpZGViYXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Z3JpZC1hcmVhOiBzaWRlYmFyO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzZTg4YTM7XFxuXFx0aGVpZ2h0OiA2MHZoO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRwYWRkaW5nOiAxZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxuXFx0bWFyZ2luOiAxLjVlbSAxZW07XFxufVxcblxcbiNwcm9qZWN0LWxpc3Qge1xcblxcdG1hcmdpbi1ib3R0b206IGF1dG87XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYjM0NztcXG5cXHRib3JkZXI6IDBweCBzb2xpZCAjYTU0NjU3O1xcblxcdGNvbG9yOiAjMmQzMTQyO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zbWFsbC1idG4ge1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHR3aWR0aDogMmVtO1xcblxcdGhlaWdodDogMmVtO1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmZGZmZmM7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHBhZGRpbmc6IDAuM2VtIDFlbTtcXG5cXHRjb2xvcjogI2ZkZmZmYztcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGhlaWdodDogMS43ZW07XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG59XFxuXFxub3B0aW9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4OGEzO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG5cXHRjb2xvcjogI2ZkZmZmYzljO1xcblxcdG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG5cXHRjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbiNjcmVhdGUtdGFzay1idG4ge1xcblxcdGhlaWdodDogMmVtO1xcblxcdHdpZHRoOiA1MCU7XFxuXFx0bWFyZ2luOiAwIDVlbSAxLjJlbSA1ZW07XFxufVxcblxcbi8qIGR1cGxpY2F0ZSBjc3MgY29kZS4gbXVzdCBjcmVhdGUgY2xhc3MgZm9yIGJ1dHRvbnMgKi9cXG4jZWRpdC10YXNrLWJ0biB7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0cGFkZGluZzogMCAxLjVlbSAwIDEuNWVtO1xcbn1cXG5cXG4ucG9wLXVwIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDUwJTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHR3aWR0aDogMjBlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4OGEzO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRwYWRkaW5nOiAxZW0gMWVtIDEuNWVtIDJlbTtcXG5cXHRib3gtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcXG59XFxuXFxuI2VkaXQtcHJvamVjdC1wb3B1cCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuLnBvcC11cC1pbnB1dCB7XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRoZWlnaHQ6IDJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbiNwb3AtdXAtcHJpb3JpdHktaW5wdXQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZkZmZmYztcXG5cXHR3aWR0aDogODglO1xcblxcdG1hcmdpbi1sZWZ0OiAwLjRlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjhlbTtcXG59XFxuXFxuLnByaW9yaXR5LWxhYmVsIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym90dG9tOiA1cHg7XFxufVxcbi5wb3AtdXAtYnRucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0bWFyZ2luLXRvcDogMWVtO1xcblxcdHdpZHRoOiA5MCU7XFxufVxcblxcbi5wb3AtdXAtYnRuIHtcXG5cXHRwYWRkaW5nOiAwLjRlbSAxZW07XFxufVxcblxcbi5wYW5lbCB7XFxuXFx0aGVpZ2h0OiA2MHZoO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNhNTQ2NTc7XFxuXFx0bWFyZ2luOiAxLjVlbSAwO1xcblxcdHBhZGRpbmc6IDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0d2lkdGg6IDIwZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxufVxcblxcbiN0YXNrLXBhbmVsIHtcXG5cXHRncmlkLWFyZWE6IHRhc2stcGFuZWw7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXgtd2lkdGg6IDE2ZW07XFxufVxcblxcbi50YXNrLWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICNmZGZmZmM0YjtcXG5cXHRtYXJnaW4tYm90dG9tOiAxZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdGhlaWdodDogMi4zZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByaW9yaXR5LTEge1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMTI4LCAwLCAwLjM1Nik7XFxufVxcbi5wcmlvcml0eS0yIHtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIyMywgMjA4LCAwLCAwLjQ5Myk7XFxufVxcbi5wcmlvcml0eS0zIHtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE0MSwgMCwgMCwgMC41OTYpO1xcbn1cXG5cXG4vKiBpdCB3b3JrcyBpZiBJIGFkZCB0aGUgY2xhc3MgZnJvbSB0aGUgZGV2IHRvb2wgYnV0IGRvZXNuJ3Qgd29yayB3aXRoIGNsYXNzTGlzdC5hZGQgKi9cXG4udGFzay1kb25lIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjODM0YzU2O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFzay1jYXJkOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYjY1NDY2O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjZmRmZmZjNGI7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRoZWlnaHQ6IDIuM2VtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1NzljYjY7XFxufVxcbiNxdWljay1hZGQsXFxuI25ldy1wcm9qZWN0IHtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4jZGV0YWlscy1wYW5lbCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRncmlkLWFyZWE6IGRldGFpbHMtcGFuZWw7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuXFx0Ym9keSB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXHQnc2lkZWJhciBzaWRlYmFyIHRhc2stcGFuZWwgdGFzay1wYW5lbCdcXG5cXHRcXHRcXHQnLiBkZXRhaWxzLXBhbmVsIGRldGFpbHMtcGFuZWwgLiAgJztcXG5cXHRcXHRnYXA6IDA7XFxuXFx0fVxcblxcdC5wYW5lbCB7XFxuXFx0XFx0aGVpZ2h0OiA0MHZoO1xcblxcdFxcdG1heC1oZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdH1cXG5cXHQjc2lkZWJhciB7XFxuXFx0XFx0aGVpZ2h0OiA0MHZoO1xcblxcdFxcdG1heC1oZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYzNXB4KSB7XFxuXFx0Ym9keSB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXHQnc2lkZWJhcidcXG5cXHRcXHRcXHQndGFzay1wYW5lbCdcXG5cXHRcXHRcXHQnIGRldGFpbHMtcGFuZWwgJztcXG5cXHRcXHRnYXA6IDA7XFxuXFx0fVxcblxcdC5wYW5lbCB7XFxuXFx0XFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRcXHRtYXgtd2lkdGg6IDE2ZW07XFxuXFx0XFx0bWFyZ2luOiAxZW0gMDtcXG5cXHR9XFxuXFx0I3NpZGViYXIge1xcblxcdFxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0XFx0bWFyZ2luOiAxZW0gMDtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7XG5cdHJlbmRlclByb2plY3RzLFxuXHRyZW5kZXJUYXNrcyxcblx0cmVzZXRUZXh0SW5wdXQsXG5cdGNyZWF0ZURvbUVsZW1lbnQsXG5cdHJlbmRlclRhc2tEZXRhaWxzLFxufSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBoaWRkZW5BY3RpdmVUYXNrLCBjcmVhdGVUYXNrLCBzZXRIaWRkZW5BY3RpdmVUYXNrIH0gZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCB7XG5cdGFjdGl2ZVByb2plY3QsXG5cdHByb2plY3RzLFxuXHRjcmVhdGVQcm9qZWN0LFxuXHRyZW1vdmVQcm9qZWN0LFxuXHRzZXRIaWRkZW5BY3RpdmVQcm9qZWN0LFxuXHRoaWRkZW5BY3RpdmVQcm9qZWN0LFxuXHRzZXRBY3RpdmVQcm9qZWN0LFxufSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHsgc2F2ZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcbmV4cG9ydCB7XG5cdG5ld1Byb2plY3QsXG5cdHF1aWNrQWRkLFxuXHRjcmVhdGVDYXJkQnRuLFxuXHRkZWxldGVUYXNrLFxuXHR0b2dnbGVUYXNrRG9uZSxcblx0ZGVsZXRlUHJvamVjdCxcblx0c2hvd0VkaXRQcm9qZWN0UG9wVXAsXG59O1xuXG4vLyBDcmVhdGUgVGFza3MgYnV0dG9uIG9wZW5zIHBvcC11cCBhbmQgYWxsb3dzIGEgZnVsbCB0YXNrIHRvIGJlIGFkZGVkXG5jb25zdCBjcmVhdGVUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS10YXNrLWJ0bicpO1xuY3JlYXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dUYXNrUG9wVXAoJ0NyZWF0ZSBOZXcgVGFzaycpKTtcblxuLy8gUXVpY2tseSBhZGQgYSB0YXNrIHdpdGggb25seSB0aGUgdGl0bGUsIGJ1dCBubyBvdGhlciBpbmZvcm1hdGlvblxuY29uc3QgcXVpY2tBZGRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWljay1hZGQtaW5wdXQnKTtcbmNvbnN0IHF1aWNrQWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aWNrLWFkZC1idG4nKTtcbnF1aWNrQWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcXVpY2tBZGQoYWN0aXZlUHJvamVjdCkpO1xuXG4vLyBBZGQgYSB0YXNrIHdpdGggdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUgZGF0ZSBhbmQgcHJpb3JpdHlcbmNvbnN0IGZ1bGxBZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbC1hZGQtYnRuJyk7XG5mdWxsQWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlT3JFZGl0VGFzayhhY3RpdmVQcm9qZWN0KSk7XG5cbi8vIENhbmNlbCBuZXcvZWRpdCB0YXNrIHBvcC11cFxuY29uc3QgdGFza1BvcFVwQ2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1mdWxsLWFkZC1idG4nKTtcbnRhc2tQb3BVcENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhpZGVQb3BVcCgndGFzay1wb3B1cCcpKTtcbi8vIE9wZW5zIGVkaXQgdGFzayBwb3AtdXBcbmNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGFzay1idG4nKTtcbmVkaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd1Rhc2tQb3BVcCgnRWRpdCBUYXNrJykpO1xuXG4vLyBBZGQgYSBuZXcgUHJvamVjdFxuY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0LWlucHV0Jyk7XG5jb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0LWJ0bicpO1xubmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG5cdG5ld1Byb2plY3QobmV3UHJvamVjdElucHV0LnZhbHVlKVxuKTtcblxuLy8gRWRpdCBwcm9qZWN0IG5hbWVcbmNvbnN0IGVkaXRQcm9qZWN0TmFtZVN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuXHQnZWRpdC1wcm9qZWN0LW5hbWUtc3VibWl0J1xuKTtcbmNvbnN0IGVkaXRQcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdC1uYW1lLWlucHV0Jyk7XG5lZGl0UHJvamVjdE5hbWVTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZWRpdFByb2plY3ROYW1lKGUpKTtcblxuLy8gQ2FuY2VsIGVkaXQgUHJvamVjdCBuYW1lXG5jb25zdCBjYW5jZWxFZGl0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcblx0J2VkaXQtcHJvamVjdC1uYW1lLWNhbmNlbCdcbik7XG5jYW5jZWxFZGl0UHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuXHRoaWRlUG9wVXAoJ2VkaXQtcHJvamVjdC1wb3B1cCcpXG4pO1xuLy8gQ3JlYXRlcyBhIG5ldyBQcm9qZWN0XG5mdW5jdGlvbiBuZXdQcm9qZWN0KHByb2plY3ROYW1lKSB7XG5cdHByb2plY3RzLnB1c2goY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSwgW10pKTtcblx0c2F2ZShwcm9qZWN0cyk7XG5cdHJlbmRlclByb2plY3RzKHByb2plY3RzKTtcblx0cmVzZXRUZXh0SW5wdXQobmV3UHJvamVjdElucHV0KTtcbn1cblxuLy8gVXNlcyBpbnB1dCB0byBlZGl0IHByb2plY3QgbmFtZVxuZnVuY3Rpb24gZWRpdFByb2plY3ROYW1lKGUpIHtcblx0Y29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wcm9qZWN0LW5hbWUtaW5wdXQnKTtcblx0Y29uc29sZS5sb2coaGlkZGVuQWN0aXZlUHJvamVjdCk7XG5cdGhpZGRlbkFjdGl2ZVByb2plY3QuZWRpdE5hbWUoaW5wdXQudmFsdWUpO1xuXHRzYXZlKHByb2plY3RzKTtcblx0cmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuXHRyZXNldFRleHRJbnB1dChpbnB1dCk7XG5cdGhpZGVQb3BVcCgnZWRpdC1wcm9qZWN0LXBvcHVwJyk7XG59XG5cbmZ1bmN0aW9uIGhpZGVQb3BVcChpZCkge1xuXHRjb25zb2xlLmxvZyhpZCk7XG5cdGNvbnN0IHBvcFVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHRjb25zb2xlLmxvZyhwb3BVcCk7XG5cdHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdHJlc2V0VGV4dElucHV0KFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUtaW5wdXQnKSxcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWRlc2NyaXB0aW9uLWlucHV0JyksXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC1kdWUtZGF0ZS1pbnB1dCcpXG5cdCk7XG59XG5cbi8vIENyZWF0ZSBhIGNhcmQuIENhbiBiZSB1c2VkIGZvciBhIHRhc2sgb3IgYSBwcm9qZWN0XG5mdW5jdGlvbiBjcmVhdGVDYXJkQnRuKHR5cGUsIGVsQ2xhc3MsIGZ1bmMpIHtcblx0Y29uc3QgYnV0dG9uID0gY3JlYXRlRG9tRWxlbWVudCh0eXBlLCBlbENsYXNzKTtcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGZ1bmMoZSkpO1xuXHRyZXR1cm4gYnV0dG9uO1xufVxuXG4vLyBNYWtlcyB0aGUgXCJDcmVhdGUgbmV3IHRhc2sgcG9wLXVwXCIgdmlzaWJsZVxuZnVuY3Rpb24gc2hvd1Rhc2tQb3BVcCh0aXRsZSkge1xuXHRjaGFuZ2VQb3BVcFRpdGxlKHRpdGxlKTtcblx0Y29uc3QgcG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1wb3B1cCcpO1xuXHRpZiAocG9wVXAuc3R5bGUuZGlzcGxheSAhPSAnYmxvY2snKSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdmFsdWU9XCIwXCJgKS5jaGVja2VkID0gdHJ1ZTtcblx0XHRwb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0fSBlbHNlIHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdGlmICh0aXRsZSA9PT0gJ0VkaXQgVGFzaycpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLXRpdGxlLWlucHV0JykudmFsdWUgPVxuXHRcdFx0aGlkZGVuQWN0aXZlVGFzay50aXRsZTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWRlc2NyaXB0aW9uLWlucHV0JykudmFsdWUgPVxuXHRcdFx0aGlkZGVuQWN0aXZlVGFzay5kZXNjcmlwdGlvbjtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWR1ZS1kYXRlLWlucHV0JykudmFsdWUgPVxuXHRcdFx0aGlkZGVuQWN0aXZlVGFzay5kdWVEYXRlO1xuXHRcdGNoZWNrUmFkaW9CdG4oaGlkZGVuQWN0aXZlVGFzayk7XG5cdH1cbn1cblxuLy8gQ2hhbmdlIHBvcC11cCB0aXRsZVxuXG5mdW5jdGlvbiBjaGFuZ2VQb3BVcFRpdGxlKG5ld1RpdGxlKSB7XG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC10aXRsZScpO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9IG5ld1RpdGxlO1xufVxuLy8gTWFrZXMgdGhlIFwiQ3JlYXRlIGVkaXQgcHJvamVjdCBwb3AtdXBcIiB2aXNpYmxlXG5mdW5jdGlvbiBzaG93RWRpdFByb2plY3RQb3BVcChlKSB7XG5cdGNvbnN0IHBvcFVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdC1wb3B1cCcpO1xuXHRpZiAocG9wVXAuc3R5bGUuZGlzcGxheSAhPSAnYmxvY2snKSB7XG5cdFx0Y29uc3QgaW5kZXggPSBlLnBhdGhbMF0uZGF0YXNldC5lZGl0UHJvamVjdEJ0bjtcblx0XHRwb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRzZXRIaWRkZW5BY3RpdmVQcm9qZWN0KHByb2plY3RzW2luZGV4XSk7XG5cdFx0Y29uc29sZS5sb2cocHJvamVjdHNbaW5kZXhdKTtcblx0fSBlbHNlIHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbi8vIERlbGV0ZXMgYSB0aGUgcmVsYXRpdmUgdGFza1xuZnVuY3Rpb24gZGVsZXRlVGFzayhlKSB7XG5cdGNvbnN0IGluZGV4ID0gZS5wYXRoWzBdLmRhdGFzZXQuZGVsZXRlQnRuO1xuXHRhY3RpdmVQcm9qZWN0LnJlbW92ZVRhc2soYWN0aXZlUHJvamVjdC50YXNrc1tpbmRleF0pO1xuXHRyZW5kZXJUYXNrcyhhY3RpdmVQcm9qZWN0LnRhc2tzKTtcblx0c2F2ZShwcm9qZWN0cyk7XG59XG5cbi8vIERlbGV0ZXMgdGhlIHJlbGF0aXZlIFByb2plY3RcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZSkge1xuXHRjb25zdCBpbmRleCA9IGUucGF0aFswXS5kYXRhc2V0LmRlbGV0ZVByb2plY3RCdG47XG5cdGNvbnNvbGUubG9nKGluZGV4KTtcblx0cmVtb3ZlUHJvamVjdChpbmRleCk7XG5cdHNhdmUocHJvamVjdHMpO1xuXHRyZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG5cdHJlbmRlclRhc2tzKGFjdGl2ZVByb2plY3QudGFza3MpO1xufVxuXG4vLyBOT1QgV09SS0lORyBZRVQuIFRvZ2dsZXMgYSB0YXNrIGFzIFwiRG9uZVwiXG5mdW5jdGlvbiB0b2dnbGVUYXNrRG9uZShlKSB7XG5cdGNvbnN0IGluZGV4ID0gZS5wYXRoWzBdLmRhdGFzZXQuZG9uZUJ0bjtcblx0Y29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLXRhc2s9XCIke2luZGV4fVwiXWApO1xuXHRhY3RpdmVQcm9qZWN0LnRhc2tzW2luZGV4XS50b2dnbGVEb25lKCk7XG5cdGNvbnNvbGUubG9nKGFjdGl2ZVByb2plY3QudGFza3NbaW5kZXhdLmlzRG9uZSk7XG5cdGFjdGl2ZVByb2plY3QudGFza3NbaW5kZXhdLmlzRG9uZVxuXHRcdD8gdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrLWRvbmUnKVxuXHRcdDogdGFzay5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWRvbmUnKTtcblx0Y29uc29sZS5sb2codGFzayk7XG5cdGNvbnNvbGUubG9nKGFjdGl2ZVByb2plY3QudGFza3NbaW5kZXhdLmlzRG9uZSk7XG5cdHJlbmRlclRhc2tzKGFjdGl2ZVByb2plY3QudGFza3MpO1xuXHRzYXZlKHByb2plY3RzKTtcbn1cblxuLy8gVXNlIHF1aWNrQWRkIHRleHQgaW5wdXQgdG8gY3JlYXRlIGEgbmV3IHRhc2sgd2l0aCBvbmx5IGEgdGl0bGVcbmZ1bmN0aW9uIHF1aWNrQWRkKHByb2plY3QpIHtcblx0aWYgKHF1aWNrQWRkSW5wdXQudmFsdWUgIT09ICcnKSB7XG5cdFx0aWYgKHByb2plY3RzWzBdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdG5ld1Byb2plY3QoJ1BlcnNvbmFsJyk7XG5cdFx0XHRzZXRBY3RpdmVQcm9qZWN0KHByb2plY3RzWzBdKTtcblx0XHR9XG5cdFx0Y29uc3QgdGFzayA9IGNyZWF0ZVRhc2soXG5cdFx0XHRxdWlja0FkZElucHV0LnZhbHVlLFxuXHRcdFx0J05vIGRlc2NyaXB0aW9uIGRlZmluZWQnLFxuXHRcdFx0J05vIGR1ZSBkYXRlIGRlZmluZWQnLFxuXHRcdFx0J05vIHByaW9yaXR5IGRlZmluZWQnLFxuXHRcdFx0dW5kZWZpbmVkXG5cdFx0KTtcblx0XHRwcm9qZWN0LmFkZFRhc2sodGFzayk7XG5cdFx0c2F2ZShwcm9qZWN0cyk7XG5cdFx0cmVuZGVyVGFza3MocHJvamVjdC50YXNrcyk7XG5cdFx0cmVzZXRUZXh0SW5wdXQocXVpY2tBZGRJbnB1dCk7XG5cdH1cbn1cblxuLy8gRGVjaWRlZHMgdG8gY3JlYXRlIGEgbmV3IHRhc2sgb3IgZWRpdCBhbiBleGlzdGluZyBvbmVcbmZ1bmN0aW9uIGNyZWF0ZU9yRWRpdFRhc2socHJvamVjdCkge1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUnKS50ZXh0Q29udGVudDtcblx0dGl0bGUgPT09ICdDcmVhdGUgTmV3IFRhc2snID8gZnVsbEFkZChwcm9qZWN0KSA6IGVkaXRUYXNrKHByb2plY3QpO1xuXHRoaWRlUG9wVXAoJ3Rhc2stcG9wdXAnKTtcblx0cmVzZXRUZXh0SW5wdXQoXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC10aXRsZS1pbnB1dCcpLFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZGVzY3JpcHRpb24taW5wdXQnKSxcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWR1ZS1kYXRlLWlucHV0Jylcblx0KTtcbn1cblxuLy8gQ3JlYXRlcyBhIHRhc2sgd2l0aCBhIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlIGRhdGUgYW5kIHByaW9yaXR5XG5mdW5jdGlvbiBmdWxsQWRkKHByb2plY3QpIHtcblx0aWYgKHByb2plY3RzWzBdID09PSB1bmRlZmluZWQpIHtcblx0XHRuZXdQcm9qZWN0KCdQZXJzb25hbCcpO1xuXHRcdHNldEFjdGl2ZVByb2plY3QocHJvamVjdHNbMF0pO1xuXHR9XG5cdGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUtaW5wdXQnKS52YWx1ZSxcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWRlc2NyaXB0aW9uLWlucHV0JykudmFsdWUsXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC1kdWUtZGF0ZS1pbnB1dCcpLnZhbHVlLFxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWUsXG5cdFx0dW5kZWZpbmVkXG5cdCk7XG5cdHByb2plY3QuYWRkVGFzayh0YXNrKTtcblx0c2F2ZShwcm9qZWN0cyk7XG5cdHJlbmRlclRhc2tzKHByb2plY3QudGFza3MpO1xuXHRyZW5kZXJUYXNrRGV0YWlscyh0YXNrKTtcbn1cblxuLy8gRWRpdCB0aGUgdGFza1xuZnVuY3Rpb24gZWRpdFRhc2socHJvamVjdCkge1xuXHRjb25zdCBjaGVja2VkUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCdcblx0KTtcblxuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUtaW5wdXQnKS52YWx1ZTtcblx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWRlc2NyaXB0aW9uLWlucHV0JykudmFsdWU7XG5cdGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWR1ZS1kYXRlLWlucHV0JykudmFsdWU7XG5cdGNvbnN0IHByaW9yaXR5ID0gY2hlY2tlZFByaW9yaXR5ID09PSBudWxsID8gMCA6IGNoZWNrZWRQcmlvcml0eS52YWx1ZTtcblxuXHRoaWRkZW5BY3RpdmVUYXNrLmVkaXRUaXRsZSh0aXRsZSk7XG5cdGhpZGRlbkFjdGl2ZVRhc2suZWRpdERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKTtcblx0aGlkZGVuQWN0aXZlVGFzay5lZGl0RHVlRGF0ZShkdWVEYXRlKTtcblx0aGlkZGVuQWN0aXZlVGFzay5lZGl0UHJpb3JpdHkocHJpb3JpdHkpO1xuXHRzYXZlKHByb2plY3RzKTtcblx0cmVuZGVyVGFza3MocHJvamVjdC50YXNrcyk7XG5cdHJlbmRlclRhc2tEZXRhaWxzKGhpZGRlbkFjdGl2ZVRhc2spO1xufVxuXG4vLyBDaGVja3MgcmFkaW8gYnV0dG9uIHdpdGggdGFza3MgcHJldmlvdXMgc2VsZWN0aW9uXG5mdW5jdGlvbiBjaGVja1JhZGlvQnRuKHRhc2spIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdmFsdWU9XCIke3Rhc2sucHJpb3JpdHl9XCJgKS5jaGVja2VkID0gdHJ1ZTtcbn1cbiIsImV4cG9ydCB7XG5cdHJlbmRlclByb2plY3RzLFxuXHRyZW5kZXJUYXNrcyxcblx0c2VsZWN0UHJvamVjdCxcblx0cmVzZXRUZXh0SW5wdXQsXG5cdGNyZWF0ZURvbUVsZW1lbnQsXG5cdHJlbmRlclRhc2tEZXRhaWxzLFxufTtcbmltcG9ydCB7IHNldEFjdGl2ZVByb2plY3QsIHByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7XG5cdGNyZWF0ZUNhcmRCdG4sXG5cdGRlbGV0ZVRhc2ssXG5cdHRvZ2dsZVRhc2tEb25lLFxuXHRkZWxldGVQcm9qZWN0LFxuXHRzaG93RWRpdFByb2plY3RQb3BVcCxcbn0gZnJvbSAnLi9idXR0b25zJztcbmltcG9ydCB7IGhpZGRlbkFjdGl2ZVRhc2ssIHNldEhpZGRlbkFjdGl2ZVRhc2sgfSBmcm9tICcuL3Rhc2snO1xuXG4vLyBBc3NpZ24gRGF0YXNldCB0byBQcm9qZWN0IENhcmRcbmZ1bmN0aW9uIGFzc2lnblByb2plY3REYXRhSW5kZXgoaW5kZXgsIGNhcmQsIGVkaXRCdG4sIGRlbGV0ZUJ0bikge1xuXHRjYXJkLmRhdGFzZXQucHJvamVjdCA9IGluZGV4O1xuXHRkZWxldGVCdG4uZGF0YXNldC5kZWxldGVQcm9qZWN0QnRuID0gaW5kZXg7XG5cdGVkaXRCdG4uZGF0YXNldC5lZGl0UHJvamVjdEJ0biA9IGluZGV4O1xufVxuXG4vLyBDcmVhdGUgYSBQcm9qZWN0IENhcmRcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpIHtcblx0Y29uc3QgaW5kZXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1saXN0JykuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcblx0Y29uc3QgY2FyZCA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsICdwcm9qZWN0LWNhcmQnKTtcblx0Y29uc3QgZGVsZXRlQnRuID0gY3JlYXRlQ2FyZEJ0bignYnV0dG9uJywgJ3NtYWxsLWJ0bicsIGRlbGV0ZVByb2plY3QpO1xuXHRjb25zdCB0aXRsZSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsICdwcm9qZWN0LXRpdGxlJyk7XG5cdGNvbnN0IGVkaXRCdG4gPSBjcmVhdGVDYXJkQnRuKCdidXR0b24nLCAnc21hbGwtYnRuJywgc2hvd0VkaXRQcm9qZWN0UG9wVXApO1xuXHRkZWxldGVCdG4uaW5uZXJIVE1MID0gJyYjMTAwMDc7Jztcblx0ZWRpdEJ0bi5pbm5lckhUTUwgPSAnJiM5OTk4Jztcblx0dGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXHRhcHBlbmRUb1BhcmVudChjYXJkLCBlZGl0QnRuLCB0aXRsZSwgZGVsZXRlQnRuKTtcblx0YXNzaWduUHJvamVjdERhdGFJbmRleChpbmRleCwgY2FyZCwgZWRpdEJ0biwgZGVsZXRlQnRuKTtcblx0Y2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRyZW5kZXJBY3RpdmVQcm9qZWN0KHByb2plY3QpO1xuXHR9KTtcblx0cmV0dXJuIGNhcmQ7XG59XG5cbi8vIEFwcGVuZHMgUHJvamVjdCBDYXJkIHRvIFByb2plY3QgTGlzdFxuZnVuY3Rpb24gYXBwZW5kUHJvamVjdChwcm9qZWN0KSB7XG5cdGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1saXN0Jyk7XG5cdGNvbnN0IGNhcmQgPSBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KTtcblx0bGlzdC5hcHBlbmRDaGlsZChjYXJkKTtcbn1cblxuLy8gQXBwZW5kcyBhbGwgUHJvamVjdCBDYXJkIHRvIFByb2plY3QgTGlzdFxuZnVuY3Rpb24gYXBwZW5kQWxsUHJvamVjdHMocHJvamVjdCkge1xuXHRwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiBhcHBlbmRQcm9qZWN0KHByb2plY3QpKTtcbn1cblxuLy8gUmVuZGVycyBQcm9qZWN0c1xuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMocHJvamVjdHMpIHtcblx0cmVzZXRFbGVtZW50cygnLnByb2plY3QtY2FyZCcpO1xuXHRhcHBlbmRBbGxQcm9qZWN0cygpO1xufVxuXG4vLyBSZW5kZXJzIHRoZSBhY3RpdmUgcHJvamVjdHMgdGFza3NcbmZ1bmN0aW9uIHJlbmRlckFjdGl2ZVByb2plY3QocHJvamVjdCkge1xuXHRzZXRBY3RpdmVQcm9qZWN0KHByb2plY3QpO1xuXHRzZWxlY3RQcm9qZWN0KHByb2plY3QpO1xuXHRyZW5kZXJUYXNrcyhwcm9qZWN0LnRhc2tzKTtcbn1cblxuLy8gUmVuZGVycyB0aGUgYWN0aXZlIHByb2plY3RzXG5mdW5jdGlvbiBzZWxlY3RQcm9qZWN0KHByb2plY3QpIHtcblx0Y29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdGl0bGUnKTtcblx0cHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbn1cblxuLy8gQXNzaWducyBkYXRhc2V0IHRvIHRhc2sgY2FyZFxuZnVuY3Rpb24gYXNzaWduVGFza0RhdGFJbmRleChpbmRleCwgY2FyZCwgZG9uZUJ0biwgZGVsZXRlQnRuKSB7XG5cdGNhcmQuZGF0YXNldC50YXNrID0gaW5kZXg7XG5cdGRvbmVCdG4uZGF0YXNldC5kb25lQnRuID0gaW5kZXg7XG5cdGRlbGV0ZUJ0bi5kYXRhc2V0LmRlbGV0ZUJ0biA9IGluZGV4O1xufVxuXG4vLyBDcmVhdGUgYSBuZXcgVGFzayBDYXJkXG5mdW5jdGlvbiBjcmVhdGVUYXNrQ2FyZCh0YXNrKSB7XG5cdGNvbnN0IGluZGV4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpLmNoaWxkcmVuLmxlbmd0aCAtIDI7XG5cdGNvbnN0IGNhcmQgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCAndGFzay1jYXJkJyk7XG5cdGNvbnN0IGRvbmVCdG4gPSBjcmVhdGVDYXJkQnRuKCdidXR0b24nLCAnc21hbGwtYnRuJywgdG9nZ2xlVGFza0RvbmUpO1xuXHRjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVDYXJkQnRuKCdidXR0b24nLCAnc21hbGwtYnRuJywgZGVsZXRlVGFzayk7XG5cdGNvbnN0IHRpdGxlID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgJ3Rhc2stdGl0bGUnKTtcblx0Y2FyZC5jbGFzc0xpc3QuYWRkKGBwcmlvcml0eS0ke3Rhc2sucHJpb3JpdHl9YCk7XG5cdHRhc2tEb25lKHRhc2ssIGNhcmQpO1xuXHRjb25zb2xlLmxvZyhjYXJkLmNsYXNzTGlzdCk7XG5cdGRvbmVCdG4uaW5uZXJIVE1MID0gJyYjMTAwMDMnO1xuXHRkZWxldGVCdG4uaW5uZXJIVE1MID0gJyYjMTAwMDc7Jztcblx0dGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHRhcHBlbmRUb1BhcmVudChjYXJkLCBkb25lQnRuLCB0aXRsZSwgZGVsZXRlQnRuKTtcblx0YXNzaWduVGFza0RhdGFJbmRleChpbmRleCwgY2FyZCwgZG9uZUJ0biwgZGVsZXRlQnRuKTtcblx0Y2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlclRhc2tEZXRhaWxzKHRhc2spKTtcblx0cmV0dXJuIGNhcmQ7XG59XG5cbi8vIEFwcGVuZCBhIHRhc2sgY2FyZFxuZnVuY3Rpb24gYXBwZW5kVGFzayh0YXNrKSB7XG5cdGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1saXN0Jyk7XG5cdGNvbnN0IGNhcmQgPSBjcmVhdGVUYXNrQ2FyZCh0YXNrKTtcblx0bGlzdC5hcHBlbmRDaGlsZChjYXJkKTtcbn1cblxuLy8gQXBwZW5kIGFsbCB0YXNrIGNhcmRzXG5mdW5jdGlvbiBhcHBlbmRBbGxUYXNrcyh0YXNrcykge1xuXHR0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiBhcHBlbmRUYXNrKHRhc2spKTtcbn1cblxuLy8gUmVuZGVycyBQcm9qZWN0c1xuZnVuY3Rpb24gcmVuZGVyVGFza3ModGFza3MpIHtcblx0cmVzZXRFbGVtZW50cygnLnRhc2stY2FyZCcpO1xuXHRhcHBlbmRBbGxUYXNrcyh0YXNrcyk7XG59XG5cbi8vIFJlbmRlcnMgVGFzayBEZXRhaWxzIG9uIGRldGFpbHMgcGFuZWxcbmZ1bmN0aW9uIHJlbmRlclRhc2tEZXRhaWxzKHRhc2spIHtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscy10aXRsZScpO1xuXHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLWRlc2NyaXB0aW9uJyk7XG5cdGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscy1kdWUtZGF0ZScpO1xuXHRjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLXByaW9yaXR5Jyk7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLXBhbmVsJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdGNvbnNvbGUubG9nKCdoZWxsbycpO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbiA/IGAke3Rhc2suZGVzY3JpcHRpb259YCA6ICcnO1xuXHRkdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlID8gYER1ZSBEYXRlOiAke3Rhc2suZHVlRGF0ZX1gIDogJyc7XG5cdGlmICh0YXNrLnByaW9yaXR5ID09PSAnMCcpIHtcblx0XHRwcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogTm9uZSc7XG5cdH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gJzEnKSB7XG5cdFx0cHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICEnO1xuXHR9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICcyJykge1xuXHRcdHByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAhISc7XG5cdH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gJzMnKSB7XG5cdFx0cHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICEhISc7XG5cdH1cblx0c2V0SGlkZGVuQWN0aXZlVGFzayh0YXNrKTtcbn1cblxuLy8gQXBwZW5kcyBtdWx0aXBsZSBlbGVtZW50cyB0byBhIGRpdlxuZnVuY3Rpb24gYXBwZW5kVG9QYXJlbnQocGFyZW50LCAuLi5hcmdzKSB7XG5cdGFyZ3MuZm9yRWFjaCgoYXJnKSA9PiBwYXJlbnQuYXBwZW5kQ2hpbGQoYXJnKSk7XG59XG5cbi8vIENyZWF0ZSBhIERPTSBlbGVtZW50IHdpdGggcmVsYXRpdmUgY2xhc3NcbmZ1bmN0aW9uIGNyZWF0ZURvbUVsZW1lbnQodHlwZSwgZWxDbGFzcykge1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuXHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7ZWxDbGFzc31gKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8vIFJlc2V0cyBhbGwgZWxlbWVudHMgd2l0aCBhIGNlcnRhaW4gY2xhc3NcbmZ1bmN0aW9uIHJlc2V0RWxlbWVudHMoZWxDbGFzcykge1xuXHRsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsQ2xhc3MpO1xuXHRlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LnJlbW92ZSgpKTtcbn1cblxuLy8gUmVzZXRzIHRleHQgaW5wdXRcbmZ1bmN0aW9uIHJlc2V0VGV4dElucHV0KC4uLmFyZ3MpIHtcblx0YXJncy5mb3JFYWNoKChhcmcpID0+IChhcmcudmFsdWUgPSAnJykpO1xufVxuXG4vLyBBZGRzIHRhc2stZG9uZSBjbGFzcyB0byB0YXNrIGNhcmRcblxuZnVuY3Rpb24gdGFza0RvbmUodGFzaywgY2FyZCkge1xuXHRpZiAodGFzay5pc0RvbmUgPT09IHRydWUpIHtcblx0XHRjYXJkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZG9uZScpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgY3JlYXRlUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5leHBvcnQgeyBzYXZlLCBsb2FkIH07XG5cbi8vIFNhdmVzIHRvIGxvY2FsU3RvcmFnZVxuZnVuY3Rpb24gc2F2ZShwcm9qZWN0cykge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG4vLyBMb2FkcyBmcm9tIGxvY2FsU3RvcmFnZVxuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG5cdHJldHVybiBwcm9qZWN0cyA9PT0gbnVsbCA/IFtdIDogcHJvamVjdHM7XG59XG4iLCJleHBvcnQge1xuXHRhY3RpdmVQcm9qZWN0LFxuXHRoaWRkZW5BY3RpdmVQcm9qZWN0LFxuXHRwcm9qZWN0cyxcblx0Y3JlYXRlUHJvamVjdCxcblx0c2V0QWN0aXZlUHJvamVjdCxcblx0c2V0SGlkZGVuQWN0aXZlUHJvamVjdCxcblx0cmVtb3ZlUHJvamVjdCxcbn07XG5pbXBvcnQgeyBsb2FkIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gJy4vdGFzayc7XG5pbXBvcnQgeyBuZXdQcm9qZWN0IH0gZnJvbSAnLi9idXR0b25zJztcblxuLy8gUHJvamVjdCBGYWN0b3J5IEZ1bmN0aW9uXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCB0YXNrcykge1xuXHRjb25zdCBwcm90byA9IHtcblx0XHRhZGRUYXNrOiBmdW5jdGlvbiAodGFzaykge1xuXHRcdFx0dGhpcy50YXNrcy5wdXNoKHRhc2spO1xuXHRcdH0sXG5cblx0XHRyZW1vdmVUYXNrOiBmdW5jdGlvbiAodGFzaykge1xuXHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLnRhc2tzLmluZGV4T2YodGFzayk7XG5cdFx0XHR0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fSxcblx0XHRlZGl0TmFtZTogZnVuY3Rpb24gKG5ld1RpdGxlKSB7XG5cdFx0XHR0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG5cdFx0fSxcblx0fTtcblx0Y29uc3QgcHJvamVjdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShwcm90byksIHtcblx0XHR0aXRsZSxcblx0XHR0YXNrcyxcblx0fSk7XG5cdHJldHVybiBwcm9qZWN0O1xufVxuXG4vLyBTZXRzIHRoZSBBY3RpdmUgUHJvamVjdFxuZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XG5cdGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0O1xufVxuLy8gUmVtb3ZlcyBwcm9qZWN0IGZyb20gUHJvamVjdHMgYXJyYXlcbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QoaW5kZXgpIHtcblx0cHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuLy8gTG9hZHMgbG9jYWxTdG9yYWdlXG5sZXQgcHJvamVjdHMgPSBsb2FkKCk7XG5cbi8vIERlZmluZXMgdGhlIGFjdGl2ZSBQcm9qZWN0XG5sZXQgYWN0aXZlUHJvamVjdDtcblxuLy8gSGlkZGVuIGFjdGl2ZSBwcm9qZWN0XG5cbmxldCBoaWRkZW5BY3RpdmVQcm9qZWN0O1xuXG4vLyBTZXRzIHRoZSBIaWRkZW4gYWN0aXZlIHByb2plY3QgKG5lZWRlZCB0byBlZGl0IHByb2plY3QpXG5cbmZ1bmN0aW9uIHNldEhpZGRlbkFjdGl2ZVByb2plY3QocHJvamVjdCkge1xuXHRoaWRkZW5BY3RpdmVQcm9qZWN0ID0gcHJvamVjdDtcbn1cbiIsImV4cG9ydCB7IGhpZGRlbkFjdGl2ZVRhc2ssIGNyZWF0ZVRhc2ssIHNldEhpZGRlbkFjdGl2ZVRhc2sgfTtcblxuLy8gVGFzayBGYWN0b3J5IEZ1bmN0aW9uXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzRG9uZSkge1xuXHRjb25zdCBwcm90byA9IHtcblx0XHRlZGl0VGl0bGU6IGZ1bmN0aW9uIChuZXdUaXRsZSkge1xuXHRcdFx0dGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuXHRcdH0sXG5cdFx0ZWRpdERlc2NyaXB0aW9uOiBmdW5jdGlvbiAobmV3RGVzY3JpcHRpb24pIHtcblx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcblx0XHR9LFxuXHRcdGVkaXREdWVEYXRlOiBmdW5jdGlvbiAobmV3RHVlRGF0ZSkge1xuXHRcdFx0dGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcblx0XHR9LFxuXHRcdGVkaXRQcmlvcml0eTogZnVuY3Rpb24gKG5ld1ByaW9yaXR5KSB7XG5cdFx0XHR0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG5cdFx0fSxcblx0XHR0b2dnbGVEb25lOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLmlzRG9uZSA9ICF0aGlzLmlzRG9uZTtcblx0XHR9LFxuXHR9O1xuXHRjb25zdCB0YXNrID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKHByb3RvKSwge1xuXHRcdHRpdGxlLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGR1ZURhdGUsXG5cdFx0cHJpb3JpdHksXG5cdFx0aXNEb25lLFxuXHR9KTtcblx0cmV0dXJuIHRhc2s7XG59XG5cbi8vIEhpZGRlbiBhY3RpdmUgdGFza1xuXG5sZXQgaGlkZGVuQWN0aXZlVGFzaztcblxuLy8gU2V0cyB0aGUgSGlkZGVuIHRhc2sgcHJvamVjdCAobmVlZGVkIHRvIGVkaXQgdGFzaylcblxuZnVuY3Rpb24gc2V0SGlkZGVuQWN0aXZlVGFzayh0YXNrKSB7XG5cdGhpZGRlbkFjdGl2ZVRhc2sgPSB0YXNrO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSAnLi90YXNrJztcbmltcG9ydCB7XG5cdGFjdGl2ZVByb2plY3QsXG5cdHByb2plY3RzLFxuXHRzZXRBY3RpdmVQcm9qZWN0LFxuXHRjcmVhdGVQcm9qZWN0LFxuXHRwZXJzb25hbCxcblx0d29yayxcbn0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7IHJlbmRlclRhc2tzLCByZW5kZXJQcm9qZWN0cywgc2VsZWN0UHJvamVjdCB9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7IHF1aWNrQWRkLCBuZXdQcm9qZWN0IH0gZnJvbSAnLi9idXR0b25zJztcbmltcG9ydCB7IHNhdmUsIGxvYWQgfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5cbi8vIFJlY3JlYXRlcyBhbGwgUHJvamVjdHMgYW5kIFRhc2tzIHdpdGggd29ya2luZyBfX3Byb3RvX18gYWZ0ZXIgbG9hZGluZyBpdCBmcm9tIGxvY2FsU3RvcmFnZVxuZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRwcm9qZWN0c1tpXSA9IGNyZWF0ZVByb2plY3QocHJvamVjdHNbaV0udGl0bGUsIHByb2plY3RzW2ldLnRhc2tzKTtcblx0Zm9yIChsZXQgYSA9IDA7IGEgPCBwcm9qZWN0c1tpXS50YXNrcy5sZW5ndGg7IGErKykge1xuXHRcdHByb2plY3RzW2ldLnRhc2tzW2FdID0gY3JlYXRlVGFzayhcblx0XHRcdHByb2plY3RzW2ldLnRhc2tzW2FdLnRpdGxlLFxuXHRcdFx0cHJvamVjdHNbaV0udGFza3NbYV0uZGVzY3JpcHRpb24sXG5cdFx0XHRwcm9qZWN0c1tpXS50YXNrc1thXS5kdWVEYXRlLFxuXHRcdFx0cHJvamVjdHNbaV0udGFza3NbYV0ucHJpb3JpdHksXG5cdFx0XHRwcm9qZWN0c1tpXS50YXNrc1thXS5pc0RvbmVcblx0XHQpO1xuXHR9XG59XG5cbi8vIENyZWF0ZXMgZGVmYXVsdCBcIlBlcnNvbmFsXCIgcHJvamVjdCBpZiBwcm9qZWN0cyBhcnJheSBpcyBlbXB0eSB3aGVuIGxvYWRpbmcgYXBwXG5pZiAocHJvamVjdHNbMF0gPT09IHVuZGVmaW5lZCkge1xuXHRuZXdQcm9qZWN0KCdQZXJzb25hbCcpO1xuXHRuZXdQcm9qZWN0KCdXb3JrJyk7XG59XG5cbi8vIFNldHMgQWN0aXZlIFByb2plY3QgdG8gdGhlIGZpcnN0IG9uZSBpbiBwcm9qZWN0cyBhcnJheVxuc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0c1swXSk7XG5cbi8vIFJlbmRlcnMgUHJvamVjdHMgdXBvbiBsb2FkaW5nIHRoZSBhcHBcbnJlbmRlclByb2plY3RzKHByb2plY3RzKTtcblxuLy8gUmVuZGVycyBUYXNrcyB1cG9uIGxvYWRpbmcgdGhlIGFwcFxucmVuZGVyVGFza3MoYWN0aXZlUHJvamVjdC50YXNrcyk7XG5cbi8vIFNlbGVjdHMgdGhlIGFjdGl2ZSBwcm9qZWN0IGFuZCBzaG93cyBpdCBvbiB0aGUgVGFza3MtUGFuZWxcbnNlbGVjdFByb2plY3QoYWN0aXZlUHJvamVjdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=