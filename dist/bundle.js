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
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.popUpFormValidation)();
	const errors = document.getElementById('errors');
	if (errors.textcontent === undefined) {
		const title = document.getElementById('pop-up-title').textContent;
		title === 'Create New Task' ? fullAdd(project) : editTask(project);
		hidePopUp('task-popup');
		(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.resetTextInput)(
			document.getElementById('pop-up-title-input'),
			document.getElementById('pop-up-description-input'),
			document.getElementById('pop-up-due-date-input')
		);
	}
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
/* harmony export */   "renderTaskDetails": () => (/* binding */ renderTaskDetails),
/* harmony export */   "popUpFormValidation": () => (/* binding */ popUpFormValidation)
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

// Form validation

function popUpFormValidation() {
	const errorList = [];
	const title = document.getElementById('pop-up-title-input').value;
	const dueDate = document.getElementById('pop-up-due-date-input').value;
	errorList.push(titleValidation(title));
	errorList.push(dueDateValidation(dueDate));
	showErrors(errorList);
}

// Title validation
function titleValidation(title) {
	console.log(title);
	if (title === '') {
		return 'Insert title';
	}
}

// Due Date not in past
function dueDateValidation(dueDate) {
	const today = new Date().toISOString().slice(0, 10);
	const inputDate =
		dueDate !== '' ? new Date(dueDate).toISOString().slice(0, 10) : '';
	console.log(today);
	if (inputDate !== '' && inputDate < today) {
		console.log('working');
		return 'Due Date is in the past';
	}
}
// Show form Validation errors
function showErrors(errorList) {
	const errors = document.getElementById('errors');
	console.log(errorList);
	errors.textContent = errorList.join(' | ');
	if (errors.textContent === ' | ') {
		errors.textContent = '';
	}
}

// Capitilize first letter
function capitilize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVkscUJBQXFCLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJzQjtBQUNjO0FBUWpCO0FBQ2dEO0FBQ2xCO0FBQ0w7O0FBRTVDO0FBQ0EsZ0JBQWdCLElBQUkscURBQWUsRUFBRTtBQUNyQyxDQUFDLDhDQUFRLE1BQU0sdURBQWEsQ0FBQyw4Q0FBUSxXQUFXLDhDQUFRO0FBQ3hELGlCQUFpQixJQUFJLDhDQUFRLGtCQUFrQjtBQUMvQyxFQUFFLDhDQUFRLGVBQWUsaURBQVU7QUFDbkMsR0FBRyw4Q0FBUTtBQUNYLEdBQUcsOENBQVE7QUFDWCxHQUFHLDhDQUFRO0FBQ1gsR0FBRyw4Q0FBUTtBQUNYLEdBQUcsOENBQVE7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGlEQUFXO0FBQ2YsQ0FBQyxvREFBVTtBQUNYLENBQUMsb0RBQVU7QUFDWDs7QUFFQTtBQUNBLDBEQUFnQixDQUFDLGlEQUFXOztBQUU1QjtBQUNBLG9EQUFjLENBQUMsOENBQVE7O0FBRXZCO0FBQ0EsaURBQVcsQ0FBQyx5REFBbUI7O0FBRS9CO0FBQ0EsbURBQWEsQ0FBQyxtREFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLUxpZ2h0SXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcblxcdHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSxcXG5cXHRcXHR1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG5odG1sIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzMTQyO1xcblxcdGNvbG9yOiAjZmRmZmZjO1xcblxcdGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdCcuIC4gLidcXG5cXHRcXHQnLiBtYWluIC4nXFxuXFx0XFx0Jy4gLiAuICc7XFxufVxcblxcbmJvZHkge1xcblxcdGdyaWQtYXJlYTogbWFpbjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHQnLiAuIC4nXFxuXFx0XFx0J3NpZGViYXIgdGFzay1wYW5lbCBkZXRhaWxzLXBhbmVsJ1xcblxcdFxcdCcuIC4gLiAnO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyZDMxNDI7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0Z2FwOiAxZW07XFxuXFx0d2lkdGg6IG1heC1jb250ZW50O1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuaDMge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3NpZGViYXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Z3JpZC1hcmVhOiBzaWRlYmFyO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzZTg4YTM7XFxuXFx0aGVpZ2h0OiA2MHZoO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRwYWRkaW5nOiAxZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxuXFx0bWFyZ2luOiAxLjVlbSAxZW07XFxufVxcblxcbiNwcm9qZWN0LWxpc3Qge1xcblxcdG1hcmdpbi1ib3R0b206IGF1dG87XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYjM0NztcXG5cXHRib3JkZXI6IDBweCBzb2xpZCAjYTU0NjU3O1xcblxcdGNvbG9yOiAjMmQzMTQyO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zbWFsbC1idG4ge1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHR3aWR0aDogMmVtO1xcblxcdGhlaWdodDogMmVtO1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmZGZmZmM7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHBhZGRpbmc6IDAuM2VtIDFlbTtcXG5cXHRjb2xvcjogI2ZkZmZmYztcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGhlaWdodDogMS43ZW07XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG59XFxuXFxub3B0aW9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4OGEzO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG5cXHRjb2xvcjogI2ZkZmZmYzljO1xcblxcdG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG5cXHRjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbiNjcmVhdGUtdGFzay1idG4ge1xcblxcdGhlaWdodDogMmVtO1xcblxcdHdpZHRoOiA1MCU7XFxuXFx0bWFyZ2luOiAwIDVlbSAxLjJlbSA1ZW07XFxufVxcblxcbi8qIGR1cGxpY2F0ZSBjc3MgY29kZS4gbXVzdCBjcmVhdGUgY2xhc3MgZm9yIGJ1dHRvbnMgKi9cXG4jZWRpdC10YXNrLWJ0biB7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0cGFkZGluZzogMCAxLjVlbSAwIDEuNWVtO1xcbn1cXG5cXG4ucG9wLXVwIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDUwJTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHR3aWR0aDogMjBlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4OGEzO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRwYWRkaW5nOiAxZW0gMWVtIDEuNWVtIDJlbTtcXG5cXHRib3gtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcXG59XFxuXFxuI2VkaXQtcHJvamVjdC1wb3B1cCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuLnBvcC11cC1pbnB1dCB7XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRoZWlnaHQ6IDJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbiNwb3AtdXAtcHJpb3JpdHktaW5wdXQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZkZmZmYztcXG5cXHR3aWR0aDogODglO1xcblxcdG1hcmdpbi1sZWZ0OiAwLjRlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjhlbTtcXG59XFxuXFxuLnByaW9yaXR5LWxhYmVsIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym90dG9tOiA1cHg7XFxufVxcbi5wb3AtdXAtYnRucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0bWFyZ2luLXRvcDogMWVtO1xcblxcdHdpZHRoOiA5MCU7XFxufVxcblxcbi5wb3AtdXAtYnRuIHtcXG5cXHRwYWRkaW5nOiAwLjRlbSAxZW07XFxufVxcblxcbi5wYW5lbCB7XFxuXFx0aGVpZ2h0OiA2MHZoO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNhNTQ2NTc7XFxuXFx0bWFyZ2luOiAxLjVlbSAwO1xcblxcdHBhZGRpbmc6IDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0d2lkdGg6IDIwZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxufVxcblxcbiN0YXNrLXBhbmVsIHtcXG5cXHRncmlkLWFyZWE6IHRhc2stcGFuZWw7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXgtd2lkdGg6IDE2ZW07XFxufVxcblxcbi50YXNrLWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICNmZGZmZmM0YjtcXG5cXHRtYXJnaW4tYm90dG9tOiAxZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdGhlaWdodDogMi4zZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByaW9yaXR5LTEge1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMTI4LCAwLCAwLjM1Nik7XFxufVxcbi5wcmlvcml0eS0yIHtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIyMywgMjA4LCAwLCAwLjQ5Myk7XFxufVxcbi5wcmlvcml0eS0zIHtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE0MSwgMCwgMCwgMC41OTYpO1xcbn1cXG5cXG4vKiBpdCB3b3JrcyBpZiBJIGFkZCB0aGUgY2xhc3MgZnJvbSB0aGUgZGV2IHRvb2wgYnV0IGRvZXNuJ3Qgd29yayB3aXRoIGNsYXNzTGlzdC5hZGQgKi9cXG4udGFzay1kb25lIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjODM0YzU2O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFzay1jYXJkOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYjY1NDY2O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjZmRmZmZjNGI7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRoZWlnaHQ6IDIuM2VtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1NzljYjY7XFxufVxcbiNxdWljay1hZGQsXFxuI25ldy1wcm9qZWN0IHtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4jZGV0YWlscy1wYW5lbCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRncmlkLWFyZWE6IGRldGFpbHMtcGFuZWw7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuXFx0Ym9keSB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXHQnc2lkZWJhciBzaWRlYmFyIHRhc2stcGFuZWwgdGFzay1wYW5lbCdcXG5cXHRcXHRcXHQnLiBkZXRhaWxzLXBhbmVsIGRldGFpbHMtcGFuZWwgLiAgJztcXG5cXHRcXHRnYXA6IDA7XFxuXFx0fVxcblxcdC5wYW5lbCB7XFxuXFx0XFx0aGVpZ2h0OiA0MHZoO1xcblxcdFxcdG1heC1oZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdH1cXG5cXHQjc2lkZWJhciB7XFxuXFx0XFx0aGVpZ2h0OiA0MHZoO1xcblxcdFxcdG1heC1oZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYzNXB4KSB7XFxuXFx0Ym9keSB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXHQnc2lkZWJhcidcXG5cXHRcXHRcXHQndGFzay1wYW5lbCdcXG5cXHRcXHRcXHQnIGRldGFpbHMtcGFuZWwgJztcXG5cXHRcXHRnYXA6IDA7XFxuXFx0fVxcblxcdC5wYW5lbCB7XFxuXFx0XFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRcXHRtYXgtd2lkdGg6IDE2ZW07XFxuXFx0XFx0bWFyZ2luOiAxZW0gMDtcXG5cXHR9XFxuXFx0I3NpZGViYXIge1xcblxcdFxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0XFx0bWFyZ2luOiAxZW0gMDtcXG5cXHR9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MscUJBQXFCO0NBQ3JCO3lDQUNnQztBQUNqQzs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYjs7O1VBR1M7QUFDVjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixhQUFhO0NBQ2IsK0JBQStCO0NBQy9COzs7VUFHUztDQUNULHlCQUF5QjtDQUN6QixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsOEJBQThCO0NBQzlCLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osNkJBQTZCO0NBQzdCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6Qix5QkFBeUI7Q0FDekIsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsVUFBVTtBQUNYOztBQUVBOztDQUVDLHdDQUF3QztDQUN4Qyx5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsYUFBYTtDQUNiLGFBQWE7Q0FDYixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsVUFBVSxFQUFFLFlBQVk7QUFDekI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsdUJBQXVCO0FBQ3hCOztBQUVBLHNEQUFzRDtBQUN0RDtDQUNDLFdBQVc7Q0FDWCx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixTQUFTO0NBQ1QsZ0NBQWdDO0NBQ2hDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQiwwQkFBMEI7Q0FDMUIsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxVQUFVO0NBQ1YsV0FBVztDQUNYLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw2QkFBNkI7Q0FDN0IseUJBQXlCO0NBQ3pCLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7QUFDWjtBQUNBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixlQUFlO0NBQ2YsVUFBVTtBQUNYOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QixlQUFlO0NBQ2YsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsOEJBQThCO0NBQzlCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLDJCQUEyQjtDQUMzQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLHdDQUF3QztBQUN6QztBQUNBO0NBQ0MsMENBQTBDO0FBQzNDO0FBQ0E7Q0FDQyx3Q0FBd0M7QUFDekM7O0FBRUEsc0ZBQXNGO0FBQ3RGO0NBQ0MseUJBQXlCO0NBQ3pCLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsMkJBQTJCO0NBQzNCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFNBQVM7QUFDVjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBOztDQUVDLGNBQWM7Q0FDZCxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isd0JBQXdCO0NBQ3hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDO0VBQ0M7O3NDQUVvQztFQUNwQyxNQUFNO0NBQ1A7Q0FDQTtFQUNDLFlBQVk7RUFDWix1QkFBdUI7Q0FDeEI7Q0FDQTtFQUNDLFlBQVk7RUFDWix1QkFBdUI7Q0FDeEI7QUFDRDs7QUFFQTtDQUNDO0VBQ0M7OztvQkFHa0I7RUFDbEIsTUFBTTtDQUNQO0NBQ0E7RUFDQyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7Q0FDZDtDQUNBO0VBQ0MsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG5cXHRzcmM6IHVybCgnLi9Sb2JvdG8tUmVndWxhci50dGYnKSwgdXJsKCcuL1JvYm90by1Cb2xkLnR0ZicpLFxcblxcdFxcdHVybCgnLi9Sb2JvdG8tTGlnaHRJdGFsaWMudHRmJyk7XFxufVxcblxcbmh0bWwge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyZDMxNDI7XFxuXFx0Y29sb3I6ICNmZGZmZmM7XFxuXFx0Zm9udC1mYW1pbHk6IFJvYm90bztcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0Jy4gLiAuJ1xcblxcdFxcdCcuIG1haW4gLidcXG5cXHRcXHQnLiAuIC4gJztcXG59XFxuXFxuYm9keSB7XFxuXFx0Z3JpZC1hcmVhOiBtYWluO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdCcuIC4gLidcXG5cXHRcXHQnc2lkZWJhciB0YXNrLXBhbmVsIGRldGFpbHMtcGFuZWwnXFxuXFx0XFx0Jy4gLiAuICc7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzJkMzE0MjtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRnYXA6IDFlbTtcXG5cXHR3aWR0aDogbWF4LWNvbnRlbnQ7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG5oMyB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRncmlkLWFyZWE6IHNpZGViYXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNlODhhMztcXG5cXHRoZWlnaHQ6IDYwdmg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHBhZGRpbmc6IDFlbTtcXG5cXHRib3gtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcXG5cXHRtYXJnaW46IDEuNWVtIDFlbTtcXG59XFxuXFxuI3Byb2plY3QtbGlzdCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogYXV0bztcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMzQ3O1xcblxcdGJvcmRlcjogMHB4IHNvbGlkICNhNTQ2NTc7XFxuXFx0Y29sb3I6ICMyZDMxNDI7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNtYWxsLWJ0biB7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdHdpZHRoOiAyZW07XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3Qge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZkZmZmYztcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0cGFkZGluZzogMC4zZW0gMWVtO1xcblxcdGNvbG9yOiAjZmRmZmZjO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0aGVpZ2h0OiAxLjdlbTtcXG5cXHRtYXJnaW46IDAuNWVtO1xcbn1cXG5cXG5vcHRpb24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzZTg4YTM7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcblxcdGNvbG9yOiAjZmRmZmZjOWM7XFxuXFx0b3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xcbn1cXG5cXG5pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xcblxcdGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuI2NyZWF0ZS10YXNrLWJ0biB7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRtYXJnaW46IDAgNWVtIDEuMmVtIDVlbTtcXG59XFxuXFxuLyogZHVwbGljYXRlIGNzcyBjb2RlLiBtdXN0IGNyZWF0ZSBjbGFzcyBmb3IgYnV0dG9ucyAqL1xcbiNlZGl0LXRhc2stYnRuIHtcXG5cXHRoZWlnaHQ6IDJlbTtcXG5cXHRwYWRkaW5nOiAwIDEuNWVtIDAgMS41ZW07XFxufVxcblxcbi5wb3AtdXAge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNTAlO1xcblxcdGxlZnQ6IDUwJTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHRoZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdHdpZHRoOiAyMGVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzZTg4YTM7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHBhZGRpbmc6IDFlbSAxZW0gMS41ZW0gMmVtO1xcblxcdGJveC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xcbn1cXG5cXG4jZWRpdC1wcm9qZWN0LXBvcHVwIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG4ucG9wLXVwLWlucHV0IHtcXG5cXHR3aWR0aDogODAlO1xcblxcdGhlaWdodDogMmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuI3BvcC11cC1wcmlvcml0eS1pbnB1dCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZmRmZmZjO1xcblxcdHdpZHRoOiA4OCU7XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNGVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuOGVtO1xcbn1cXG5cXG4ucHJpb3JpdHktbGFiZWwge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3R0b206IDVweDtcXG59XFxuLnBvcC11cC1idG5zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW4tdG9wOiAxZW07XFxuXFx0d2lkdGg6IDkwJTtcXG59XFxuXFxuLnBvcC11cC1idG4ge1xcblxcdHBhZGRpbmc6IDAuNGVtIDFlbTtcXG59XFxuXFxuLnBhbmVsIHtcXG5cXHRoZWlnaHQ6IDYwdmg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2E1NDY1NztcXG5cXHRtYXJnaW46IDEuNWVtIDA7XFxuXFx0cGFkZGluZzogMWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHR3aWR0aDogMjBlbTtcXG5cXHRib3gtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcXG59XFxuXFxuI3Rhc2stcGFuZWwge1xcblxcdGdyaWQtYXJlYTogdGFzay1wYW5lbDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG1heC13aWR0aDogMTZlbTtcXG59XFxuXFxuLnRhc2stY2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Ym9yZGVyOiAycHggc29saWQgI2ZkZmZmYzRiO1xcblxcdG1hcmdpbi1ib3R0b206IDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0aGVpZ2h0OiAyLjNlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJpb3JpdHktMSB7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgcmdiYSgwLCAxMjgsIDAsIDAuMzU2KTtcXG59XFxuLnByaW9yaXR5LTIge1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjIzLCAyMDgsIDAsIDAuNDkzKTtcXG59XFxuLnByaW9yaXR5LTMge1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTQxLCAwLCAwLCAwLjU5Nik7XFxufVxcblxcbi8qIGl0IHdvcmtzIGlmIEkgYWRkIHRoZSBjbGFzcyBmcm9tIHRoZSBkZXYgdG9vbCBidXQgZG9lc24ndCB3b3JrIHdpdGggY2xhc3NMaXN0LmFkZCAqL1xcbi50YXNrLWRvbmUge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM4MzRjNTY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLWNhcmQ6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiNjU0NjY7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICNmZGZmZmM0YjtcXG5cXHRtYXJnaW4tYm90dG9tOiAxZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdGhlaWdodDogMi4zZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLnByb2plY3QtY2FyZDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU3OWNiNjtcXG59XFxuI3F1aWNrLWFkZCxcXG4jbmV3LXByb2plY3Qge1xcblxcdG1hcmdpbjogMCBhdXRvO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbiNkZXRhaWxzLXBhbmVsIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdGdyaWQtYXJlYTogZGV0YWlscy1wYW5lbDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdFxcdCdzaWRlYmFyIHNpZGViYXIgdGFzay1wYW5lbCB0YXNrLXBhbmVsJ1xcblxcdFxcdFxcdCcuIGRldGFpbHMtcGFuZWwgZGV0YWlscy1wYW5lbCAuICAnO1xcblxcdFxcdGdhcDogMDtcXG5cXHR9XFxuXFx0LnBhbmVsIHtcXG5cXHRcXHRoZWlnaHQ6IDQwdmg7XFxuXFx0XFx0bWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0fVxcblxcdCNzaWRlYmFyIHtcXG5cXHRcXHRoZWlnaHQ6IDQwdmg7XFxuXFx0XFx0bWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjM1cHgpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdFxcdCdzaWRlYmFyJ1xcblxcdFxcdFxcdCd0YXNrLXBhbmVsJ1xcblxcdFxcdFxcdCcgZGV0YWlscy1wYW5lbCAnO1xcblxcdFxcdGdhcDogMDtcXG5cXHR9XFxuXFx0LnBhbmVsIHtcXG5cXHRcXHRoZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdFxcdG1heC13aWR0aDogMTZlbTtcXG5cXHRcXHRtYXJnaW46IDFlbSAwO1xcblxcdH1cXG5cXHQjc2lkZWJhciB7XFxuXFx0XFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRcXHRtYXJnaW46IDFlbSAwO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcblx0cmVuZGVyUHJvamVjdHMsXG5cdHJlbmRlclRhc2tzLFxuXHRyZXNldFRleHRJbnB1dCxcblx0Y3JlYXRlRG9tRWxlbWVudCxcblx0cmVuZGVyVGFza0RldGFpbHMsXG5cdHBvcFVwRm9ybVZhbGlkYXRpb24sXG59IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGhpZGRlbkFjdGl2ZVRhc2ssIGNyZWF0ZVRhc2ssIHNldEhpZGRlbkFjdGl2ZVRhc2sgfSBmcm9tICcuL3Rhc2suanMnO1xuaW1wb3J0IHtcblx0YWN0aXZlUHJvamVjdCxcblx0cHJvamVjdHMsXG5cdGNyZWF0ZVByb2plY3QsXG5cdHJlbW92ZVByb2plY3QsXG5cdHNldEhpZGRlbkFjdGl2ZVByb2plY3QsXG5cdGhpZGRlbkFjdGl2ZVByb2plY3QsXG5cdHNldEFjdGl2ZVByb2plY3QsXG59IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgeyBzYXZlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuZXhwb3J0IHtcblx0bmV3UHJvamVjdCxcblx0cXVpY2tBZGQsXG5cdGNyZWF0ZUNhcmRCdG4sXG5cdGRlbGV0ZVRhc2ssXG5cdHRvZ2dsZVRhc2tEb25lLFxuXHRkZWxldGVQcm9qZWN0LFxuXHRzaG93RWRpdFByb2plY3RQb3BVcCxcbn07XG5cbi8vIENyZWF0ZSBUYXNrcyBidXR0b24gb3BlbnMgcG9wLXVwIGFuZCBhbGxvd3MgYSBmdWxsIHRhc2sgdG8gYmUgYWRkZWRcbmNvbnN0IGNyZWF0ZVRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXRhc2stYnRuJyk7XG5jcmVhdGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd1Rhc2tQb3BVcCgnQ3JlYXRlIE5ldyBUYXNrJykpO1xuXG4vLyBRdWlja2x5IGFkZCBhIHRhc2sgd2l0aCBvbmx5IHRoZSB0aXRsZSwgYnV0IG5vIG90aGVyIGluZm9ybWF0aW9uXG5jb25zdCBxdWlja0FkZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aWNrLWFkZC1pbnB1dCcpO1xuY29uc3QgcXVpY2tBZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2stYWRkLWJ0bicpO1xucXVpY2tBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBxdWlja0FkZChhY3RpdmVQcm9qZWN0KSk7XG5cbi8vIEFkZCBhIHRhc2sgd2l0aCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSBkYXRlIGFuZCBwcmlvcml0eVxuY29uc3QgZnVsbEFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsLWFkZC1idG4nKTtcbmZ1bGxBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVPckVkaXRUYXNrKGFjdGl2ZVByb2plY3QpKTtcblxuLy8gQ2FuY2VsIG5ldy9lZGl0IHRhc2sgcG9wLXVwXG5jb25zdCB0YXNrUG9wVXBDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLWZ1bGwtYWRkLWJ0bicpO1xudGFza1BvcFVwQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGlkZVBvcFVwKCd0YXNrLXBvcHVwJykpO1xuLy8gT3BlbnMgZWRpdCB0YXNrIHBvcC11cFxuY29uc3QgZWRpdFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10YXNrLWJ0bicpO1xuZWRpdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93VGFza1BvcFVwKCdFZGl0IFRhc2snKSk7XG5cbi8vIEFkZCBhIG5ldyBQcm9qZWN0XG5jb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QtaW5wdXQnKTtcbmNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QtYnRuJyk7XG5uZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cblx0bmV3UHJvamVjdChuZXdQcm9qZWN0SW5wdXQudmFsdWUpXG4pO1xuXG4vLyBFZGl0IHByb2plY3QgbmFtZVxuY29uc3QgZWRpdFByb2plY3ROYW1lU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG5cdCdlZGl0LXByb2plY3QtbmFtZS1zdWJtaXQnXG4pO1xuY29uc3QgZWRpdFByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wcm9qZWN0LW5hbWUtaW5wdXQnKTtcbmVkaXRQcm9qZWN0TmFtZVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBlZGl0UHJvamVjdE5hbWUoZSkpO1xuXG4vLyBDYW5jZWwgZWRpdCBQcm9qZWN0IG5hbWVcbmNvbnN0IGNhbmNlbEVkaXRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuXHQnZWRpdC1wcm9qZWN0LW5hbWUtY2FuY2VsJ1xuKTtcbmNhbmNlbEVkaXRQcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG5cdGhpZGVQb3BVcCgnZWRpdC1wcm9qZWN0LXBvcHVwJylcbik7XG4vLyBDcmVhdGVzIGEgbmV3IFByb2plY3RcbmZ1bmN0aW9uIG5ld1Byb2plY3QocHJvamVjdE5hbWUpIHtcblx0cHJvamVjdHMucHVzaChjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLCBbXSkpO1xuXHRzYXZlKHByb2plY3RzKTtcblx0cmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuXHRyZXNldFRleHRJbnB1dChuZXdQcm9qZWN0SW5wdXQpO1xufVxuXG4vLyBVc2VzIGlucHV0IHRvIGVkaXQgcHJvamVjdCBuYW1lXG5mdW5jdGlvbiBlZGl0UHJvamVjdE5hbWUoZSkge1xuXHRjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByb2plY3QtbmFtZS1pbnB1dCcpO1xuXHRjb25zb2xlLmxvZyhoaWRkZW5BY3RpdmVQcm9qZWN0KTtcblx0aGlkZGVuQWN0aXZlUHJvamVjdC5lZGl0TmFtZShpbnB1dC52YWx1ZSk7XG5cdHNhdmUocHJvamVjdHMpO1xuXHRyZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG5cdHJlc2V0VGV4dElucHV0KGlucHV0KTtcblx0aGlkZVBvcFVwKCdlZGl0LXByb2plY3QtcG9wdXAnKTtcbn1cblxuZnVuY3Rpb24gaGlkZVBvcFVwKGlkKSB7XG5cdGNvbnNvbGUubG9nKGlkKTtcblx0Y29uc3QgcG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cdGNvbnNvbGUubG9nKHBvcFVwKTtcblx0cG9wVXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0cmVzZXRUZXh0SW5wdXQoXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC10aXRsZS1pbnB1dCcpLFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZGVzY3JpcHRpb24taW5wdXQnKSxcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWR1ZS1kYXRlLWlucHV0Jylcblx0KTtcbn1cblxuLy8gQ3JlYXRlIGEgY2FyZC4gQ2FuIGJlIHVzZWQgZm9yIGEgdGFzayBvciBhIHByb2plY3RcbmZ1bmN0aW9uIGNyZWF0ZUNhcmRCdG4odHlwZSwgZWxDbGFzcywgZnVuYykge1xuXHRjb25zdCBidXR0b24gPSBjcmVhdGVEb21FbGVtZW50KHR5cGUsIGVsQ2xhc3MpO1xuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZnVuYyhlKSk7XG5cdHJldHVybiBidXR0b247XG59XG5cbi8vIE1ha2VzIHRoZSBcIkNyZWF0ZSBuZXcgdGFzayBwb3AtdXBcIiB2aXNpYmxlXG5mdW5jdGlvbiBzaG93VGFza1BvcFVwKHRpdGxlKSB7XG5cdGNoYW5nZVBvcFVwVGl0bGUodGl0bGUpO1xuXHRjb25zdCBwb3BVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXBvcHVwJyk7XG5cdGlmIChwb3BVcC5zdHlsZS5kaXNwbGF5ICE9ICdibG9jaycpIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt2YWx1ZT1cIjBcImApLmNoZWNrZWQgPSB0cnVlO1xuXHRcdHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHR9IGVsc2UgcG9wVXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0aWYgKHRpdGxlID09PSAnRWRpdCBUYXNrJykge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUtaW5wdXQnKS52YWx1ZSA9XG5cdFx0XHRoaWRkZW5BY3RpdmVUYXNrLnRpdGxlO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZGVzY3JpcHRpb24taW5wdXQnKS52YWx1ZSA9XG5cdFx0XHRoaWRkZW5BY3RpdmVUYXNrLmRlc2NyaXB0aW9uO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZHVlLWRhdGUtaW5wdXQnKS52YWx1ZSA9XG5cdFx0XHRoaWRkZW5BY3RpdmVUYXNrLmR1ZURhdGU7XG5cdFx0Y2hlY2tSYWRpb0J0bihoaWRkZW5BY3RpdmVUYXNrKTtcblx0fVxufVxuXG4vLyBDaGFuZ2UgcG9wLXVwIHRpdGxlXG5cbmZ1bmN0aW9uIGNoYW5nZVBvcFVwVGl0bGUobmV3VGl0bGUpIHtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLXRpdGxlJyk7XG5cdHRpdGxlLnRleHRDb250ZW50ID0gbmV3VGl0bGU7XG59XG4vLyBNYWtlcyB0aGUgXCJDcmVhdGUgZWRpdCBwcm9qZWN0IHBvcC11cFwiIHZpc2libGVcbmZ1bmN0aW9uIHNob3dFZGl0UHJvamVjdFBvcFVwKGUpIHtcblx0Y29uc3QgcG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wcm9qZWN0LXBvcHVwJyk7XG5cdGlmIChwb3BVcC5zdHlsZS5kaXNwbGF5ICE9ICdibG9jaycpIHtcblx0XHRjb25zdCBpbmRleCA9IGUucGF0aFswXS5kYXRhc2V0LmVkaXRQcm9qZWN0QnRuO1xuXHRcdHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdHNldEhpZGRlbkFjdGl2ZVByb2plY3QocHJvamVjdHNbaW5kZXhdKTtcblx0XHRjb25zb2xlLmxvZyhwcm9qZWN0c1tpbmRleF0pO1xuXHR9IGVsc2UgcG9wVXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuLy8gRGVsZXRlcyBhIHRoZSByZWxhdGl2ZSB0YXNrXG5mdW5jdGlvbiBkZWxldGVUYXNrKGUpIHtcblx0Y29uc3QgaW5kZXggPSBlLnBhdGhbMF0uZGF0YXNldC5kZWxldGVCdG47XG5cdGFjdGl2ZVByb2plY3QucmVtb3ZlVGFzayhhY3RpdmVQcm9qZWN0LnRhc2tzW2luZGV4XSk7XG5cdHJlbmRlclRhc2tzKGFjdGl2ZVByb2plY3QudGFza3MpO1xuXHRzYXZlKHByb2plY3RzKTtcbn1cblxuLy8gRGVsZXRlcyB0aGUgcmVsYXRpdmUgUHJvamVjdFxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChlKSB7XG5cdGNvbnN0IGluZGV4ID0gZS5wYXRoWzBdLmRhdGFzZXQuZGVsZXRlUHJvamVjdEJ0bjtcblx0Y29uc29sZS5sb2coaW5kZXgpO1xuXHRyZW1vdmVQcm9qZWN0KGluZGV4KTtcblx0c2F2ZShwcm9qZWN0cyk7XG5cdHJlbmRlclByb2plY3RzKHByb2plY3RzKTtcblx0cmVuZGVyVGFza3MoYWN0aXZlUHJvamVjdC50YXNrcyk7XG59XG5cbi8vIE5PVCBXT1JLSU5HIFlFVC4gVG9nZ2xlcyBhIHRhc2sgYXMgXCJEb25lXCJcbmZ1bmN0aW9uIHRvZ2dsZVRhc2tEb25lKGUpIHtcblx0Y29uc3QgaW5kZXggPSBlLnBhdGhbMF0uZGF0YXNldC5kb25lQnRuO1xuXHRjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtdGFzaz1cIiR7aW5kZXh9XCJdYCk7XG5cdGFjdGl2ZVByb2plY3QudGFza3NbaW5kZXhdLnRvZ2dsZURvbmUoKTtcblx0Y29uc29sZS5sb2coYWN0aXZlUHJvamVjdC50YXNrc1tpbmRleF0uaXNEb25lKTtcblx0YWN0aXZlUHJvamVjdC50YXNrc1tpbmRleF0uaXNEb25lXG5cdFx0PyB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZG9uZScpXG5cdFx0OiB0YXNrLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stZG9uZScpO1xuXHRjb25zb2xlLmxvZyh0YXNrKTtcblx0Y29uc29sZS5sb2coYWN0aXZlUHJvamVjdC50YXNrc1tpbmRleF0uaXNEb25lKTtcblx0cmVuZGVyVGFza3MoYWN0aXZlUHJvamVjdC50YXNrcyk7XG5cdHNhdmUocHJvamVjdHMpO1xufVxuXG4vLyBVc2UgcXVpY2tBZGQgdGV4dCBpbnB1dCB0byBjcmVhdGUgYSBuZXcgdGFzayB3aXRoIG9ubHkgYSB0aXRsZVxuZnVuY3Rpb24gcXVpY2tBZGQocHJvamVjdCkge1xuXHRpZiAocXVpY2tBZGRJbnB1dC52YWx1ZSAhPT0gJycpIHtcblx0XHRpZiAocHJvamVjdHNbMF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bmV3UHJvamVjdCgnUGVyc29uYWwnKTtcblx0XHRcdHNldEFjdGl2ZVByb2plY3QocHJvamVjdHNbMF0pO1xuXHRcdH1cblx0XHRjb25zdCB0YXNrID0gY3JlYXRlVGFzayhcblx0XHRcdHF1aWNrQWRkSW5wdXQudmFsdWUsXG5cdFx0XHQnTm8gZGVzY3JpcHRpb24gZGVmaW5lZCcsXG5cdFx0XHQnTm8gZHVlIGRhdGUgZGVmaW5lZCcsXG5cdFx0XHQnTm8gcHJpb3JpdHkgZGVmaW5lZCcsXG5cdFx0XHR1bmRlZmluZWRcblx0XHQpO1xuXHRcdHByb2plY3QuYWRkVGFzayh0YXNrKTtcblx0XHRzYXZlKHByb2plY3RzKTtcblx0XHRyZW5kZXJUYXNrcyhwcm9qZWN0LnRhc2tzKTtcblx0XHRyZXNldFRleHRJbnB1dChxdWlja0FkZElucHV0KTtcblx0fVxufVxuXG4vLyBEZWNpZGVkcyB0byBjcmVhdGUgYSBuZXcgdGFzayBvciBlZGl0IGFuIGV4aXN0aW5nIG9uZVxuZnVuY3Rpb24gY3JlYXRlT3JFZGl0VGFzayhwcm9qZWN0KSB7XG5cdHBvcFVwRm9ybVZhbGlkYXRpb24oKTtcblx0Y29uc3QgZXJyb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9ycycpO1xuXHRpZiAoZXJyb3JzLnRleHRjb250ZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUnKS50ZXh0Q29udGVudDtcblx0XHR0aXRsZSA9PT0gJ0NyZWF0ZSBOZXcgVGFzaycgPyBmdWxsQWRkKHByb2plY3QpIDogZWRpdFRhc2socHJvamVjdCk7XG5cdFx0aGlkZVBvcFVwKCd0YXNrLXBvcHVwJyk7XG5cdFx0cmVzZXRUZXh0SW5wdXQoXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLXRpdGxlLWlucHV0JyksXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWRlc2NyaXB0aW9uLWlucHV0JyksXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWR1ZS1kYXRlLWlucHV0Jylcblx0XHQpO1xuXHR9XG59XG5cbi8vIENyZWF0ZXMgYSB0YXNrIHdpdGggYSB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSBkYXRlIGFuZCBwcmlvcml0eVxuZnVuY3Rpb24gZnVsbEFkZChwcm9qZWN0KSB7XG5cdGlmIChwcm9qZWN0c1swXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0bmV3UHJvamVjdCgnUGVyc29uYWwnKTtcblx0XHRzZXRBY3RpdmVQcm9qZWN0KHByb2plY3RzWzBdKTtcblx0fVxuXHRjb25zdCB0YXNrID0gY3JlYXRlVGFzayhcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLXRpdGxlLWlucHV0JykudmFsdWUsXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC1kZXNjcmlwdGlvbi1pbnB1dCcpLnZhbHVlLFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZHVlLWRhdGUtaW5wdXQnKS52YWx1ZSxcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlLFxuXHRcdHVuZGVmaW5lZFxuXHQpO1xuXHRwcm9qZWN0LmFkZFRhc2sodGFzayk7XG5cdHNhdmUocHJvamVjdHMpO1xuXHRyZW5kZXJUYXNrcyhwcm9qZWN0LnRhc2tzKTtcblx0cmVuZGVyVGFza0RldGFpbHModGFzayk7XG59XG5cbi8vIEVkaXQgdGhlIHRhc2tcbmZ1bmN0aW9uIGVkaXRUYXNrKHByb2plY3QpIHtcblx0Y29uc3QgY2hlY2tlZFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHQnaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnXG5cdCk7XG5cblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLXRpdGxlLWlucHV0JykudmFsdWU7XG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC1kZXNjcmlwdGlvbi1pbnB1dCcpLnZhbHVlO1xuXHRjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC1kdWUtZGF0ZS1pbnB1dCcpLnZhbHVlO1xuXHRjb25zdCBwcmlvcml0eSA9IGNoZWNrZWRQcmlvcml0eSA9PT0gbnVsbCA/IDAgOiBjaGVja2VkUHJpb3JpdHkudmFsdWU7XG5cblx0aGlkZGVuQWN0aXZlVGFzay5lZGl0VGl0bGUodGl0bGUpO1xuXHRoaWRkZW5BY3RpdmVUYXNrLmVkaXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbik7XG5cdGhpZGRlbkFjdGl2ZVRhc2suZWRpdER1ZURhdGUoZHVlRGF0ZSk7XG5cdGhpZGRlbkFjdGl2ZVRhc2suZWRpdFByaW9yaXR5KHByaW9yaXR5KTtcblx0c2F2ZShwcm9qZWN0cyk7XG5cdHJlbmRlclRhc2tzKHByb2plY3QudGFza3MpO1xuXHRyZW5kZXJUYXNrRGV0YWlscyhoaWRkZW5BY3RpdmVUYXNrKTtcbn1cblxuLy8gQ2hlY2tzIHJhZGlvIGJ1dHRvbiB3aXRoIHRhc2tzIHByZXZpb3VzIHNlbGVjdGlvblxuZnVuY3Rpb24gY2hlY2tSYWRpb0J0bih0YXNrKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3ZhbHVlPVwiJHt0YXNrLnByaW9yaXR5fVwiYCkuY2hlY2tlZCA9IHRydWU7XG59XG4iLCJleHBvcnQge1xuXHRyZW5kZXJQcm9qZWN0cyxcblx0cmVuZGVyVGFza3MsXG5cdHNlbGVjdFByb2plY3QsXG5cdHJlc2V0VGV4dElucHV0LFxuXHRjcmVhdGVEb21FbGVtZW50LFxuXHRyZW5kZXJUYXNrRGV0YWlscyxcblx0cG9wVXBGb3JtVmFsaWRhdGlvbixcbn07XG5pbXBvcnQgeyBzZXRBY3RpdmVQcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQge1xuXHRjcmVhdGVDYXJkQnRuLFxuXHRkZWxldGVUYXNrLFxuXHR0b2dnbGVUYXNrRG9uZSxcblx0ZGVsZXRlUHJvamVjdCxcblx0c2hvd0VkaXRQcm9qZWN0UG9wVXAsXG59IGZyb20gJy4vYnV0dG9ucyc7XG5pbXBvcnQgeyBoaWRkZW5BY3RpdmVUYXNrLCBzZXRIaWRkZW5BY3RpdmVUYXNrIH0gZnJvbSAnLi90YXNrJztcblxuLy8gQXNzaWduIERhdGFzZXQgdG8gUHJvamVjdCBDYXJkXG5mdW5jdGlvbiBhc3NpZ25Qcm9qZWN0RGF0YUluZGV4KGluZGV4LCBjYXJkLCBlZGl0QnRuLCBkZWxldGVCdG4pIHtcblx0Y2FyZC5kYXRhc2V0LnByb2plY3QgPSBpbmRleDtcblx0ZGVsZXRlQnRuLmRhdGFzZXQuZGVsZXRlUHJvamVjdEJ0biA9IGluZGV4O1xuXHRlZGl0QnRuLmRhdGFzZXQuZWRpdFByb2plY3RCdG4gPSBpbmRleDtcbn1cblxuLy8gQ3JlYXRlIGEgUHJvamVjdCBDYXJkXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KSB7XG5cdGNvbnN0IGluZGV4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbGlzdCcpLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG5cdGNvbnN0IGNhcmQgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCAncHJvamVjdC1jYXJkJyk7XG5cdGNvbnN0IGRlbGV0ZUJ0biA9IGNyZWF0ZUNhcmRCdG4oJ2J1dHRvbicsICdzbWFsbC1idG4nLCBkZWxldGVQcm9qZWN0KTtcblx0Y29uc3QgdGl0bGUgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCAncHJvamVjdC10aXRsZScpO1xuXHRjb25zdCBlZGl0QnRuID0gY3JlYXRlQ2FyZEJ0bignYnV0dG9uJywgJ3NtYWxsLWJ0bicsIHNob3dFZGl0UHJvamVjdFBvcFVwKTtcblx0ZGVsZXRlQnRuLmlubmVySFRNTCA9ICcmIzEwMDA3Oyc7XG5cdGVkaXRCdG4uaW5uZXJIVE1MID0gJyYjOTk5OCc7XG5cdHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblx0YXBwZW5kVG9QYXJlbnQoY2FyZCwgZWRpdEJ0biwgdGl0bGUsIGRlbGV0ZUJ0bik7XG5cdGFzc2lnblByb2plY3REYXRhSW5kZXgoaW5kZXgsIGNhcmQsIGVkaXRCdG4sIGRlbGV0ZUJ0bik7XG5cdGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0cmVuZGVyQWN0aXZlUHJvamVjdChwcm9qZWN0KTtcblx0fSk7XG5cdHJldHVybiBjYXJkO1xufVxuXG4vLyBBcHBlbmRzIFByb2plY3QgQ2FyZCB0byBQcm9qZWN0IExpc3RcbmZ1bmN0aW9uIGFwcGVuZFByb2plY3QocHJvamVjdCkge1xuXHRjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbGlzdCcpO1xuXHRjb25zdCBjYXJkID0gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCk7XG5cdGxpc3QuYXBwZW5kQ2hpbGQoY2FyZCk7XG59XG5cbi8vIEFwcGVuZHMgYWxsIFByb2plY3QgQ2FyZCB0byBQcm9qZWN0IExpc3RcbmZ1bmN0aW9uIGFwcGVuZEFsbFByb2plY3RzKHByb2plY3QpIHtcblx0cHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4gYXBwZW5kUHJvamVjdChwcm9qZWN0KSk7XG59XG5cbi8vIFJlbmRlcnMgUHJvamVjdHNcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKHByb2plY3RzKSB7XG5cdHJlc2V0RWxlbWVudHMoJy5wcm9qZWN0LWNhcmQnKTtcblx0YXBwZW5kQWxsUHJvamVjdHMoKTtcbn1cblxuLy8gUmVuZGVycyB0aGUgYWN0aXZlIHByb2plY3RzIHRhc2tzXG5mdW5jdGlvbiByZW5kZXJBY3RpdmVQcm9qZWN0KHByb2plY3QpIHtcblx0c2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KTtcblx0c2VsZWN0UHJvamVjdChwcm9qZWN0KTtcblx0cmVuZGVyVGFza3MocHJvamVjdC50YXNrcyk7XG59XG5cbi8vIFJlbmRlcnMgdGhlIGFjdGl2ZSBwcm9qZWN0c1xuZnVuY3Rpb24gc2VsZWN0UHJvamVjdChwcm9qZWN0KSB7XG5cdGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJyk7XG5cdHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG59XG5cbi8vIEFzc2lnbnMgZGF0YXNldCB0byB0YXNrIGNhcmRcbmZ1bmN0aW9uIGFzc2lnblRhc2tEYXRhSW5kZXgoaW5kZXgsIGNhcmQsIGRvbmVCdG4sIGRlbGV0ZUJ0bikge1xuXHRjYXJkLmRhdGFzZXQudGFzayA9IGluZGV4O1xuXHRkb25lQnRuLmRhdGFzZXQuZG9uZUJ0biA9IGluZGV4O1xuXHRkZWxldGVCdG4uZGF0YXNldC5kZWxldGVCdG4gPSBpbmRleDtcbn1cblxuLy8gQ3JlYXRlIGEgbmV3IFRhc2sgQ2FyZFxuZnVuY3Rpb24gY3JlYXRlVGFza0NhcmQodGFzaykge1xuXHRjb25zdCBpbmRleCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWxpc3QnKS5jaGlsZHJlbi5sZW5ndGggLSAyO1xuXHRjb25zdCBjYXJkID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgJ3Rhc2stY2FyZCcpO1xuXHRjb25zdCBkb25lQnRuID0gY3JlYXRlQ2FyZEJ0bignYnV0dG9uJywgJ3NtYWxsLWJ0bicsIHRvZ2dsZVRhc2tEb25lKTtcblx0Y29uc3QgZGVsZXRlQnRuID0gY3JlYXRlQ2FyZEJ0bignYnV0dG9uJywgJ3NtYWxsLWJ0bicsIGRlbGV0ZVRhc2spO1xuXHRjb25zdCB0aXRsZSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsICd0YXNrLXRpdGxlJyk7XG5cdGNhcmQuY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktJHt0YXNrLnByaW9yaXR5fWApO1xuXHR0YXNrRG9uZSh0YXNrLCBjYXJkKTtcblx0ZG9uZUJ0bi5pbm5lckhUTUwgPSAnJiMxMDAwMyc7XG5cdGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSAnJiMxMDAwNzsnO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdGFwcGVuZFRvUGFyZW50KGNhcmQsIGRvbmVCdG4sIHRpdGxlLCBkZWxldGVCdG4pO1xuXHRhc3NpZ25UYXNrRGF0YUluZGV4KGluZGV4LCBjYXJkLCBkb25lQnRuLCBkZWxldGVCdG4pO1xuXHRjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyVGFza0RldGFpbHModGFzaykpO1xuXHRyZXR1cm4gY2FyZDtcbn1cblxuLy8gQXBwZW5kIGEgdGFzayBjYXJkXG5mdW5jdGlvbiBhcHBlbmRUYXNrKHRhc2spIHtcblx0Y29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWxpc3QnKTtcblx0Y29uc3QgY2FyZCA9IGNyZWF0ZVRhc2tDYXJkKHRhc2spO1xuXHRsaXN0LmFwcGVuZENoaWxkKGNhcmQpO1xufVxuXG4vLyBBcHBlbmQgYWxsIHRhc2sgY2FyZHNcbmZ1bmN0aW9uIGFwcGVuZEFsbFRhc2tzKHRhc2tzKSB7XG5cdHRhc2tzLmZvckVhY2goKHRhc2spID0+IGFwcGVuZFRhc2sodGFzaykpO1xufVxuXG4vLyBSZW5kZXJzIFByb2plY3RzXG5mdW5jdGlvbiByZW5kZXJUYXNrcyh0YXNrcykge1xuXHRyZXNldEVsZW1lbnRzKCcudGFzay1jYXJkJyk7XG5cdGFwcGVuZEFsbFRhc2tzKHRhc2tzKTtcbn1cblxuLy8gUmVuZGVycyBUYXNrIERldGFpbHMgb24gZGV0YWlscyBwYW5lbFxuZnVuY3Rpb24gcmVuZGVyVGFza0RldGFpbHModGFzaykge1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLXRpdGxlJyk7XG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtZGVzY3JpcHRpb24nKTtcblx0Y29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLWR1ZS1kYXRlJyk7XG5cdGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtcHJpb3JpdHknKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtcGFuZWwnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0dGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHRkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb24gPyBgJHt0YXNrLmRlc2NyaXB0aW9ufWAgOiAnJztcblx0ZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZSA/IGBEdWUgRGF0ZTogJHt0YXNrLmR1ZURhdGV9YCA6ICcnO1xuXHRpZiAodGFzay5wcmlvcml0eSA9PT0gJzAnKSB7XG5cdFx0cHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6IE5vbmUnO1xuXHR9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICcxJykge1xuXHRcdHByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAhJztcblx0fSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAnMicpIHtcblx0XHRwcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogISEnO1xuXHR9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICczJykge1xuXHRcdHByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAhISEnO1xuXHR9XG5cdHNldEhpZGRlbkFjdGl2ZVRhc2sodGFzayk7XG59XG5cbi8vIEFwcGVuZHMgbXVsdGlwbGUgZWxlbWVudHMgdG8gYSBkaXZcbmZ1bmN0aW9uIGFwcGVuZFRvUGFyZW50KHBhcmVudCwgLi4uYXJncykge1xuXHRhcmdzLmZvckVhY2goKGFyZykgPT4gcGFyZW50LmFwcGVuZENoaWxkKGFyZykpO1xufVxuXG4vLyBDcmVhdGUgYSBET00gZWxlbWVudCB3aXRoIHJlbGF0aXZlIGNsYXNzXG5mdW5jdGlvbiBjcmVhdGVEb21FbGVtZW50KHR5cGUsIGVsQ2xhc3MpIHtcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcblx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2VsQ2xhc3N9YCk7XG5cdHJldHVybiBlbGVtZW50O1xufVxuXG4vLyBSZXNldHMgYWxsIGVsZW1lbnRzIHdpdGggYSBjZXJ0YWluIGNsYXNzXG5mdW5jdGlvbiByZXNldEVsZW1lbnRzKGVsQ2xhc3MpIHtcblx0bGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbENsYXNzKTtcblx0ZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5yZW1vdmUoKSk7XG59XG5cbi8vIFJlc2V0cyB0ZXh0IGlucHV0XG5mdW5jdGlvbiByZXNldFRleHRJbnB1dCguLi5hcmdzKSB7XG5cdGFyZ3MuZm9yRWFjaCgoYXJnKSA9PiAoYXJnLnZhbHVlID0gJycpKTtcbn1cblxuLy8gQWRkcyB0YXNrLWRvbmUgY2xhc3MgdG8gdGFzayBjYXJkXG5cbmZ1bmN0aW9uIHRhc2tEb25lKHRhc2ssIGNhcmQpIHtcblx0aWYgKHRhc2suaXNEb25lID09PSB0cnVlKSB7XG5cdFx0Y2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrLWRvbmUnKTtcblx0fVxufVxuXG4vLyBGb3JtIHZhbGlkYXRpb25cblxuZnVuY3Rpb24gcG9wVXBGb3JtVmFsaWRhdGlvbigpIHtcblx0Y29uc3QgZXJyb3JMaXN0ID0gW107XG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC10aXRsZS1pbnB1dCcpLnZhbHVlO1xuXHRjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC1kdWUtZGF0ZS1pbnB1dCcpLnZhbHVlO1xuXHRlcnJvckxpc3QucHVzaCh0aXRsZVZhbGlkYXRpb24odGl0bGUpKTtcblx0ZXJyb3JMaXN0LnB1c2goZHVlRGF0ZVZhbGlkYXRpb24oZHVlRGF0ZSkpO1xuXHRzaG93RXJyb3JzKGVycm9yTGlzdCk7XG59XG5cbi8vIFRpdGxlIHZhbGlkYXRpb25cbmZ1bmN0aW9uIHRpdGxlVmFsaWRhdGlvbih0aXRsZSkge1xuXHRjb25zb2xlLmxvZyh0aXRsZSk7XG5cdGlmICh0aXRsZSA9PT0gJycpIHtcblx0XHRyZXR1cm4gJ0luc2VydCB0aXRsZSc7XG5cdH1cbn1cblxuLy8gRHVlIERhdGUgbm90IGluIHBhc3RcbmZ1bmN0aW9uIGR1ZURhdGVWYWxpZGF0aW9uKGR1ZURhdGUpIHtcblx0Y29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXHRjb25zdCBpbnB1dERhdGUgPVxuXHRcdGR1ZURhdGUgIT09ICcnID8gbmV3IERhdGUoZHVlRGF0ZSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkgOiAnJztcblx0Y29uc29sZS5sb2codG9kYXkpO1xuXHRpZiAoaW5wdXREYXRlICE9PSAnJyAmJiBpbnB1dERhdGUgPCB0b2RheSkge1xuXHRcdGNvbnNvbGUubG9nKCd3b3JraW5nJyk7XG5cdFx0cmV0dXJuICdEdWUgRGF0ZSBpcyBpbiB0aGUgcGFzdCc7XG5cdH1cbn1cbi8vIFNob3cgZm9ybSBWYWxpZGF0aW9uIGVycm9yc1xuZnVuY3Rpb24gc2hvd0Vycm9ycyhlcnJvckxpc3QpIHtcblx0Y29uc3QgZXJyb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9ycycpO1xuXHRjb25zb2xlLmxvZyhlcnJvckxpc3QpO1xuXHRlcnJvcnMudGV4dENvbnRlbnQgPSBlcnJvckxpc3Quam9pbignIHwgJyk7XG5cdGlmIChlcnJvcnMudGV4dENvbnRlbnQgPT09ICcgfCAnKSB7XG5cdFx0ZXJyb3JzLnRleHRDb250ZW50ID0gJyc7XG5cdH1cbn1cblxuLy8gQ2FwaXRpbGl6ZSBmaXJzdCBsZXR0ZXJcbmZ1bmN0aW9uIGNhcGl0aWxpemUoc3RyaW5nKSB7XG5cdHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgY3JlYXRlUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5leHBvcnQgeyBzYXZlLCBsb2FkIH07XG5cbi8vIFNhdmVzIHRvIGxvY2FsU3RvcmFnZVxuZnVuY3Rpb24gc2F2ZShwcm9qZWN0cykge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG4vLyBMb2FkcyBmcm9tIGxvY2FsU3RvcmFnZVxuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG5cdHJldHVybiBwcm9qZWN0cyA9PT0gbnVsbCA/IFtdIDogcHJvamVjdHM7XG59XG4iLCJleHBvcnQge1xuXHRhY3RpdmVQcm9qZWN0LFxuXHRoaWRkZW5BY3RpdmVQcm9qZWN0LFxuXHRwcm9qZWN0cyxcblx0Y3JlYXRlUHJvamVjdCxcblx0c2V0QWN0aXZlUHJvamVjdCxcblx0c2V0SGlkZGVuQWN0aXZlUHJvamVjdCxcblx0cmVtb3ZlUHJvamVjdCxcbn07XG5pbXBvcnQgeyBsb2FkIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gJy4vdGFzayc7XG5pbXBvcnQgeyBuZXdQcm9qZWN0IH0gZnJvbSAnLi9idXR0b25zJztcblxuLy8gUHJvamVjdCBGYWN0b3J5IEZ1bmN0aW9uXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCB0YXNrcykge1xuXHRjb25zdCBwcm90byA9IHtcblx0XHRhZGRUYXNrOiBmdW5jdGlvbiAodGFzaykge1xuXHRcdFx0dGhpcy50YXNrcy5wdXNoKHRhc2spO1xuXHRcdH0sXG5cblx0XHRyZW1vdmVUYXNrOiBmdW5jdGlvbiAodGFzaykge1xuXHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLnRhc2tzLmluZGV4T2YodGFzayk7XG5cdFx0XHR0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fSxcblx0XHRlZGl0TmFtZTogZnVuY3Rpb24gKG5ld1RpdGxlKSB7XG5cdFx0XHR0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG5cdFx0fSxcblx0fTtcblx0Y29uc3QgcHJvamVjdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShwcm90byksIHtcblx0XHR0aXRsZSxcblx0XHR0YXNrcyxcblx0fSk7XG5cdHJldHVybiBwcm9qZWN0O1xufVxuXG4vLyBTZXRzIHRoZSBBY3RpdmUgUHJvamVjdFxuZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XG5cdGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0O1xufVxuLy8gUmVtb3ZlcyBwcm9qZWN0IGZyb20gUHJvamVjdHMgYXJyYXlcbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QoaW5kZXgpIHtcblx0cHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuLy8gTG9hZHMgbG9jYWxTdG9yYWdlXG5sZXQgcHJvamVjdHMgPSBsb2FkKCk7XG5cbi8vIERlZmluZXMgdGhlIGFjdGl2ZSBQcm9qZWN0XG5sZXQgYWN0aXZlUHJvamVjdDtcblxuLy8gSGlkZGVuIGFjdGl2ZSBwcm9qZWN0XG5cbmxldCBoaWRkZW5BY3RpdmVQcm9qZWN0O1xuXG4vLyBTZXRzIHRoZSBIaWRkZW4gYWN0aXZlIHByb2plY3QgKG5lZWRlZCB0byBlZGl0IHByb2plY3QpXG5cbmZ1bmN0aW9uIHNldEhpZGRlbkFjdGl2ZVByb2plY3QocHJvamVjdCkge1xuXHRoaWRkZW5BY3RpdmVQcm9qZWN0ID0gcHJvamVjdDtcbn1cbiIsImV4cG9ydCB7IGhpZGRlbkFjdGl2ZVRhc2ssIGNyZWF0ZVRhc2ssIHNldEhpZGRlbkFjdGl2ZVRhc2sgfTtcblxuLy8gVGFzayBGYWN0b3J5IEZ1bmN0aW9uXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzRG9uZSkge1xuXHRjb25zdCBwcm90byA9IHtcblx0XHRlZGl0VGl0bGU6IGZ1bmN0aW9uIChuZXdUaXRsZSkge1xuXHRcdFx0dGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuXHRcdH0sXG5cdFx0ZWRpdERlc2NyaXB0aW9uOiBmdW5jdGlvbiAobmV3RGVzY3JpcHRpb24pIHtcblx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcblx0XHR9LFxuXHRcdGVkaXREdWVEYXRlOiBmdW5jdGlvbiAobmV3RHVlRGF0ZSkge1xuXHRcdFx0dGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcblx0XHR9LFxuXHRcdGVkaXRQcmlvcml0eTogZnVuY3Rpb24gKG5ld1ByaW9yaXR5KSB7XG5cdFx0XHR0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG5cdFx0fSxcblx0XHR0b2dnbGVEb25lOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLmlzRG9uZSA9ICF0aGlzLmlzRG9uZTtcblx0XHR9LFxuXHR9O1xuXHRjb25zdCB0YXNrID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKHByb3RvKSwge1xuXHRcdHRpdGxlLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGR1ZURhdGUsXG5cdFx0cHJpb3JpdHksXG5cdFx0aXNEb25lLFxuXHR9KTtcblx0cmV0dXJuIHRhc2s7XG59XG5cbi8vIEhpZGRlbiBhY3RpdmUgdGFza1xuXG5sZXQgaGlkZGVuQWN0aXZlVGFzaztcblxuLy8gU2V0cyB0aGUgSGlkZGVuIHRhc2sgcHJvamVjdCAobmVlZGVkIHRvIGVkaXQgdGFzaylcblxuZnVuY3Rpb24gc2V0SGlkZGVuQWN0aXZlVGFzayh0YXNrKSB7XG5cdGhpZGRlbkFjdGl2ZVRhc2sgPSB0YXNrO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSAnLi90YXNrJztcbmltcG9ydCB7XG5cdGFjdGl2ZVByb2plY3QsXG5cdHByb2plY3RzLFxuXHRzZXRBY3RpdmVQcm9qZWN0LFxuXHRjcmVhdGVQcm9qZWN0LFxuXHRwZXJzb25hbCxcblx0d29yayxcbn0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7IHJlbmRlclRhc2tzLCByZW5kZXJQcm9qZWN0cywgc2VsZWN0UHJvamVjdCB9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7IHF1aWNrQWRkLCBuZXdQcm9qZWN0IH0gZnJvbSAnLi9idXR0b25zJztcbmltcG9ydCB7IHNhdmUsIGxvYWQgfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5cbi8vIFJlY3JlYXRlcyBhbGwgUHJvamVjdHMgYW5kIFRhc2tzIHdpdGggd29ya2luZyBfX3Byb3RvX18gYWZ0ZXIgbG9hZGluZyBpdCBmcm9tIGxvY2FsU3RvcmFnZVxuZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRwcm9qZWN0c1tpXSA9IGNyZWF0ZVByb2plY3QocHJvamVjdHNbaV0udGl0bGUsIHByb2plY3RzW2ldLnRhc2tzKTtcblx0Zm9yIChsZXQgYSA9IDA7IGEgPCBwcm9qZWN0c1tpXS50YXNrcy5sZW5ndGg7IGErKykge1xuXHRcdHByb2plY3RzW2ldLnRhc2tzW2FdID0gY3JlYXRlVGFzayhcblx0XHRcdHByb2plY3RzW2ldLnRhc2tzW2FdLnRpdGxlLFxuXHRcdFx0cHJvamVjdHNbaV0udGFza3NbYV0uZGVzY3JpcHRpb24sXG5cdFx0XHRwcm9qZWN0c1tpXS50YXNrc1thXS5kdWVEYXRlLFxuXHRcdFx0cHJvamVjdHNbaV0udGFza3NbYV0ucHJpb3JpdHksXG5cdFx0XHRwcm9qZWN0c1tpXS50YXNrc1thXS5pc0RvbmVcblx0XHQpO1xuXHR9XG59XG5cbi8vIENyZWF0ZXMgZGVmYXVsdCBcIlBlcnNvbmFsXCIgcHJvamVjdCBpZiBwcm9qZWN0cyBhcnJheSBpcyBlbXB0eSB3aGVuIGxvYWRpbmcgYXBwXG5pZiAocHJvamVjdHNbMF0gPT09IHVuZGVmaW5lZCkge1xuXHRuZXdQcm9qZWN0KCdQZXJzb25hbCcpO1xuXHRuZXdQcm9qZWN0KCdXb3JrJyk7XG59XG5cbi8vIFNldHMgQWN0aXZlIFByb2plY3QgdG8gdGhlIGZpcnN0IG9uZSBpbiBwcm9qZWN0cyBhcnJheVxuc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0c1swXSk7XG5cbi8vIFJlbmRlcnMgUHJvamVjdHMgdXBvbiBsb2FkaW5nIHRoZSBhcHBcbnJlbmRlclByb2plY3RzKHByb2plY3RzKTtcblxuLy8gUmVuZGVycyBUYXNrcyB1cG9uIGxvYWRpbmcgdGhlIGFwcFxucmVuZGVyVGFza3MoYWN0aXZlUHJvamVjdC50YXNrcyk7XG5cbi8vIFNlbGVjdHMgdGhlIGFjdGl2ZSBwcm9qZWN0IGFuZCBzaG93cyBpdCBvbiB0aGUgVGFza3MtUGFuZWxcbnNlbGVjdFByb2plY3QoYWN0aXZlUHJvamVjdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=