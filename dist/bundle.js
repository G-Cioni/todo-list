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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "),\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\nhtml {\n\tbackground-color: #2d3142;\n\tcolor: #fdfffc;\n\tfont-family: Roboto;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'. main .'\n\t\t'. . . ';\n}\n\nbody {\n\tgrid-area: main;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 1fr 1fr;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'sidebar task-panel details-panel'\n\t\t'. . . ';\n\tbackground-color: #2d3142;\n\theight: 98vh;\n\tborder-radius: 1em;\n\tgap: 1em;\n\twidth: max-content;\n\talign-self: center;\n\tjustify-self: center;\n}\n\nh3 {\n\ttext-align: center;\n}\n\n#sidebar {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tgrid-area: sidebar;\n\tbackground-color: #3e88a3;\n\theight: 60vh;\n\tborder-radius: 1em;\n\tpadding: 0.2em 1em 0.5em 1em;\n\tbox-shadow: 1px 1px 2px black;\n\tmargin: 1.5em 1em;\n}\n\nbutton {\n\tbackground-color: #ffb347;\n\tborder: 0px solid #a54657;\n\tcolor: #2d3142;\n\tborder-radius: 1em;\n\tcursor: pointer;\n}\n.small-btn {\n\tborder-radius: 50%;\n\twidth: 2em;\n\theight: 2em;\n\tfont-size: 0.8em;\n\tpadding: 0;\n}\n\ninput,\nselect {\n\tbackground-color: rgba(255, 255, 255, 0);\n\tborder: 1px solid #fdfffc;\n\tborder-radius: 1em;\n\tpadding: 0.3em 1em;\n\tcolor: #fdfffc;\n\toutline: none;\n\theight: 1.7em;\n\tmargin: 0.5em;\n}\n\noption {\n\tbackground-color: #3e88a3;\n}\n\n::placeholder {\n\tcolor: #fdfffc9c;\n\topacity: 1; /* Firefox */\n}\n\ninput:focus::placeholder {\n\tcolor: transparent;\n}\n#create-task-btn {\n\theight: 2em;\n\twidth: 50%;\n\tmargin: -1em 5em 1.2em 5em;\n}\n\n/* duplicate css code. must create class for buttons */\n#edit-task-btn {\n\theight: 2em;\n\tpadding: 0 1.5em 0 1.5em;\n}\n\n.pop-up {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\theight: max-content;\n\twidth: 20em;\n\tbackground-color: #3e88a3;\n\tborder-radius: 1em;\n\tpadding: 1em 1em 1.5em 2em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n#errors {\n\tfont-weight: bold;\n\tcolor: #ffb347;\n\tmargin-bottom: 1em;\n}\n#edit-project-popup {\n\tdisplay: none;\n}\n.pop-up-input {\n\twidth: 80%;\n\theight: 2em;\n\tborder-radius: 1em;\n}\n\n#pop-up-priority-input {\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tborder: 1px solid #fdfffc;\n\twidth: 88%;\n\tmargin-left: 0.4em;\n\tborder-radius: 0.8em;\n}\n\n.priority-label {\n\tposition: relative;\n\tbottom: 5px;\n}\n.pop-up-btns {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-top: 1em;\n\twidth: 90%;\n}\n\n.pop-up-btn {\n\tpadding: 0.4em 1em;\n}\n\n.panel {\n\theight: 60vh;\n\tbackground-color: #a54657;\n\tmargin: 1.5em 0;\n\tpadding: 0.2em 1em 0.5em 1em;\n\tborder-radius: 1em;\n\twidth: 20em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n#task-panel {\n\tgrid-area: task-panel;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tmax-width: 16em;\n}\n#task-details-list,\n#task-list,\n#project-list {\n\toverflow: auto;\n\tmargin-bottom: auto;\n\tmargin-right: -0.3em;\n\tpadding-right: 0.3em;\n}\n\n#task-details-list {\n\tmargin-top: 1em;\n\tmargin-bottom: 0.5em;\n}\n\n.task-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbox-shadow: 0 3px 0 0 #fdfffc4b;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\talign-items: center;\n}\n.project-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbox-shadow: 0 3px 0 0 #fdfffc4b;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\talign-items: center;\n}\n\n.priority-1 {\n\tbox-shadow: 0 3px 0 0 rgba(0, 128, 0, 0.349);\n}\n.priority-2 {\n\tbox-shadow: 0 3px 0 0 #ffb2478e;\n}\n.priority-3 {\n\tbox-shadow: 0 3px 0 0 rgba(141, 0, 0, 0.534);\n}\n\n.task-done {\n\tbackground-color: #834c56;\n\ttext-decoration: line-through;\n}\n\n.task-card:hover {\n\tbackground-color: #b65466;\n}\n\n.panel-title {\n\tmargin: 0.7em;\n}\n\n.project-card:hover {\n\tbackground-color: #579cb6;\n}\n#quick-add,\n#new-project {\n\tmargin: -0.2em auto 0 auto;\n}\n\n#details-panel {\n\tdisplay: none;\n\tgrid-area: details-panel;\n\ttext-align: center;\n}\n#internal-details-panel {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-height: 100%;\n}\n\n::-webkit-scrollbar {\n\twidth: 0.3em;\n}\n::-webkit-scrollbar-track {\n\tbackground: #2d314249;\n\tborder-radius: 1em;\n\tposition: relative;\n\tleft: 1em;\n}\n::-webkit-scrollbar-thumb {\n\tbackground: #ffb855;\n\tborder-radius: 1em;\n}\n\n::-webkit-scrollbar-thumb:active {\n\tbackground: #ffab36;\n}\n\n@media (max-width: 1000px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar sidebar task-panel task-panel'\n\t\t\t'. details-panel details-panel .  ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n\t#sidebar {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n}\n\n@media (max-width: 635px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar'\n\t\t\t'task-panel'\n\t\t\t' details-panel ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: max-content;\n\t\tmax-width: 16em;\n\t\tmargin: 1em 0;\n\t}\n\t#sidebar {\n\t\theight: max-content;\n\t\tmargin: 1em 0;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url('./Roboto-Regular.ttf'), url('./Roboto-Bold.ttf'),\n\t\turl('./Roboto-LightItalic.ttf');\n}\n\nhtml {\n\tbackground-color: #2d3142;\n\tcolor: #fdfffc;\n\tfont-family: Roboto;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'. main .'\n\t\t'. . . ';\n}\n\nbody {\n\tgrid-area: main;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 1fr 1fr;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'sidebar task-panel details-panel'\n\t\t'. . . ';\n\tbackground-color: #2d3142;\n\theight: 98vh;\n\tborder-radius: 1em;\n\tgap: 1em;\n\twidth: max-content;\n\talign-self: center;\n\tjustify-self: center;\n}\n\nh3 {\n\ttext-align: center;\n}\n\n#sidebar {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tgrid-area: sidebar;\n\tbackground-color: #3e88a3;\n\theight: 60vh;\n\tborder-radius: 1em;\n\tpadding: 0.2em 1em 0.5em 1em;\n\tbox-shadow: 1px 1px 2px black;\n\tmargin: 1.5em 1em;\n}\n\nbutton {\n\tbackground-color: #ffb347;\n\tborder: 0px solid #a54657;\n\tcolor: #2d3142;\n\tborder-radius: 1em;\n\tcursor: pointer;\n}\n.small-btn {\n\tborder-radius: 50%;\n\twidth: 2em;\n\theight: 2em;\n\tfont-size: 0.8em;\n\tpadding: 0;\n}\n\ninput,\nselect {\n\tbackground-color: rgba(255, 255, 255, 0);\n\tborder: 1px solid #fdfffc;\n\tborder-radius: 1em;\n\tpadding: 0.3em 1em;\n\tcolor: #fdfffc;\n\toutline: none;\n\theight: 1.7em;\n\tmargin: 0.5em;\n}\n\noption {\n\tbackground-color: #3e88a3;\n}\n\n::placeholder {\n\tcolor: #fdfffc9c;\n\topacity: 1; /* Firefox */\n}\n\ninput:focus::placeholder {\n\tcolor: transparent;\n}\n#create-task-btn {\n\theight: 2em;\n\twidth: 50%;\n\tmargin: -1em 5em 1.2em 5em;\n}\n\n/* duplicate css code. must create class for buttons */\n#edit-task-btn {\n\theight: 2em;\n\tpadding: 0 1.5em 0 1.5em;\n}\n\n.pop-up {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\theight: max-content;\n\twidth: 20em;\n\tbackground-color: #3e88a3;\n\tborder-radius: 1em;\n\tpadding: 1em 1em 1.5em 2em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n#errors {\n\tfont-weight: bold;\n\tcolor: #ffb347;\n\tmargin-bottom: 1em;\n}\n#edit-project-popup {\n\tdisplay: none;\n}\n.pop-up-input {\n\twidth: 80%;\n\theight: 2em;\n\tborder-radius: 1em;\n}\n\n#pop-up-priority-input {\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tborder: 1px solid #fdfffc;\n\twidth: 88%;\n\tmargin-left: 0.4em;\n\tborder-radius: 0.8em;\n}\n\n.priority-label {\n\tposition: relative;\n\tbottom: 5px;\n}\n.pop-up-btns {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-top: 1em;\n\twidth: 90%;\n}\n\n.pop-up-btn {\n\tpadding: 0.4em 1em;\n}\n\n.panel {\n\theight: 60vh;\n\tbackground-color: #a54657;\n\tmargin: 1.5em 0;\n\tpadding: 0.2em 1em 0.5em 1em;\n\tborder-radius: 1em;\n\twidth: 20em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n#task-panel {\n\tgrid-area: task-panel;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tmax-width: 16em;\n}\n#task-details-list,\n#task-list,\n#project-list {\n\toverflow: auto;\n\tmargin-bottom: auto;\n\tmargin-right: -0.3em;\n\tpadding-right: 0.3em;\n}\n\n#task-details-list {\n\tmargin-top: 1em;\n\tmargin-bottom: 0.5em;\n}\n\n.task-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbox-shadow: 0 3px 0 0 #fdfffc4b;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\talign-items: center;\n}\n.project-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbox-shadow: 0 3px 0 0 #fdfffc4b;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\talign-items: center;\n}\n\n.priority-1 {\n\tbox-shadow: 0 3px 0 0 rgba(0, 128, 0, 0.349);\n}\n.priority-2 {\n\tbox-shadow: 0 3px 0 0 #ffb2478e;\n}\n.priority-3 {\n\tbox-shadow: 0 3px 0 0 rgba(141, 0, 0, 0.534);\n}\n\n.task-done {\n\tbackground-color: #834c56;\n\ttext-decoration: line-through;\n}\n\n.task-card:hover {\n\tbackground-color: #b65466;\n}\n\n.panel-title {\n\tmargin: 0.7em;\n}\n\n.project-card:hover {\n\tbackground-color: #579cb6;\n}\n#quick-add,\n#new-project {\n\tmargin: -0.2em auto 0 auto;\n}\n\n#details-panel {\n\tdisplay: none;\n\tgrid-area: details-panel;\n\ttext-align: center;\n}\n#internal-details-panel {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-height: 100%;\n}\n\n::-webkit-scrollbar {\n\twidth: 0.3em;\n}\n::-webkit-scrollbar-track {\n\tbackground: #2d314249;\n\tborder-radius: 1em;\n\tposition: relative;\n\tleft: 1em;\n}\n::-webkit-scrollbar-thumb {\n\tbackground: #ffb855;\n\tborder-radius: 1em;\n}\n\n::-webkit-scrollbar-thumb:active {\n\tbackground: #ffab36;\n}\n\n@media (max-width: 1000px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar sidebar task-panel task-panel'\n\t\t\t'. details-panel details-panel .  ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n\t#sidebar {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n}\n\n@media (max-width: 635px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar'\n\t\t\t'task-panel'\n\t\t\t' details-panel ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: max-content;\n\t\tmax-width: 16em;\n\t\tmargin: 1em 0;\n\t}\n\t#sidebar {\n\t\theight: max-content;\n\t\tmargin: 1em 0;\n\t}\n}\n"],"sourceRoot":""}]);
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
	quickAddProject(newProjectInput.value)
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

// Quickly add a project
function quickAddProject(projectName) {
	if (newProjectInput.value !== '' && newProjectInput.value.length < 26) {
		newProject(projectName);
	}
}
// Creates a new Project
function newProject(projectName) {
	_project_js__WEBPACK_IMPORTED_MODULE_2__.projects.push((0,_project_js__WEBPACK_IMPORTED_MODULE_2__.createProject)((0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.capitilize)(projectName), []));
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[_project_js__WEBPACK_IMPORTED_MODULE_2__.projects.length - 1]);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderProjects)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.resetTextInput)(newProjectInput);
}

// Uses input to edit project name
function editProjectName(e) {
	const input = document.getElementById('edit-project-name-input');
	_project_js__WEBPACK_IMPORTED_MODULE_2__.hiddenActiveProject.editName(input.value);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderProjects)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.resetTextInput)(input);
	hidePopUp('edit-project-popup');
}

function hidePopUp(id) {
	const popUp = document.getElementById(id);
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
	} else popUp.style.display = 'none';
}

// Deletes a the relative task
function deleteTask(e) {
	e.stopPropagation();
	const index = e.path[0].dataset.deleteBtn;
	if (_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask === _project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[index]) {
		document.getElementById('details-panel').style.display = 'none';
	}
	_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.removeTask(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[index]);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
}

// Deletes the relative Project
function deleteProject(e) {
	const index = parseInt(e.path[0].dataset.deleteProjectBtn);
	if (_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject === _project_js__WEBPACK_IMPORTED_MODULE_2__.projects[index]) {
		index === 0
			? (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[index + 1])
			: (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[index - 1]);
	}
	e.stopPropagation();
	(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.removeProject)(index);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderProjects)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject !== undefined
		? (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject)
		: (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderActiveProject)('', []);
}

// NOT WORKING YET. Toggles a task as "Done"
function toggleTaskDone(e) {
	e.stopPropagation();
	const index = e.path[0].dataset.doneBtn;
	const task = document.querySelector(`div[data-task="${index}"]`);
	_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[index].toggleDone();
	_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[index].isDone
		? task.classList.add('task-done')
		: task.classList.remove('task-done');
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
}

// Use quickAdd text input to create a new task with only a title
function quickAdd(project) {
	if (quickAddInput.value !== '' && quickAddInput.value.length < 26) {
		if (_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[0] === undefined) {
			newProject('Personal');
			(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[0]);
		}
		const task = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			quickAddInput.value,
			'No description defined',
			'No due date defined',
			'0',
			undefined
		);
		project.addTask(task);
		(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
		(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(project.tasks);
		(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.resetTextInput)(quickAddInput);
	}
}

// Decides to create a new task or edit an existing one
function createOrEditTask(project) {
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.popUpFormValidation)();
	const errors = document.getElementById('errors');
	if (errors.textContent === '') {
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
/* harmony export */   "popUpFormValidation": () => (/* binding */ popUpFormValidation),
/* harmony export */   "renderActiveProject": () => (/* binding */ renderActiveProject),
/* harmony export */   "capitilize": () => (/* binding */ capitilize)
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
	const index = document.getElementById('project-list').children.length;
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
	const index = document.getElementById('task-list').children.length;
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
	if (tasks !== undefined) {
		tasks.forEach((task) => appendTask(task));
	}
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
	if (task.priority === '1') {
		priority.textContent = 'Priority: !';
	} else if (task.priority === '2') {
		priority.textContent = 'Priority: !!';
	} else if (task.priority === '3') {
		priority.textContent = 'Priority: !!!';
	}
	(0,_task__WEBPACK_IMPORTED_MODULE_2__.setHiddenActiveTask)(task);
	console.log(_task__WEBPACK_IMPORTED_MODULE_2__.hiddenActiveTask);
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
	if (title === '') {
		return 'Insert title';
	} else if (title.length > 25) return 'Title max 25 characters';
}

// Due Date not in past
function dueDateValidation(dueDate) {
	const today = new Date().toISOString().slice(0, 10);
	const inputDate =
		dueDate !== '' ? new Date(dueDate).toISOString().slice(0, 10) : '';
	if (inputDate !== '' && inputDate < today) {
		return 'Due Date is in the past';
	}
}
// Show form Validation errors
function showErrors(errorList) {
	const errors = document.getElementById('errors');
	errors.textContent = errorList.join(' | ');
	if (errors.textContent === ' | ') {
		errors.textContent = '';
	}
	if (errorList.includes(undefined)) {
		errors.textContent = errors.textContent.replaceAll('|', '');
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
	(0,_buttons__WEBPACK_IMPORTED_MODULE_4__.newProject)('Instructions');
	(0,_buttons__WEBPACK_IMPORTED_MODULE_4__.newProject)('Personal');
	_project__WEBPACK_IMPORTED_MODULE_2__.projects[0].addTask(
		(0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			'Projects',
			'You can create new projects and edit their names from the Projects Panel',
			undefined,
			'0',
			false
		)
	);
	_project__WEBPACK_IMPORTED_MODULE_2__.projects[0].addTask(
		(0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			'Tasks',
			'You can create tasks for each project to stay more organized. Either add a task quickly or click on "+ Create Task"',
			undefined,
			'0',
			false
		)
	);
	_project__WEBPACK_IMPORTED_MODULE_2__.projects[0].addTask(
		(0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			'Complete and delete tasks',
			'You can also set a task to done or completely remove a task by clicking the buttons on the relative task. Try it out now! first set this task to done and then delete it.',
			undefined,
			'0',
			false
		)
	);
	_project__WEBPACK_IMPORTED_MODULE_2__.projects[0].addTask(
		(0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			'Details',
			'In the panel from which you are currently reading you can view all the details of a selected task and also edit it. The only required field is the title',
			undefined,
			'0',
			false
		)
	);
	_project__WEBPACK_IMPORTED_MODULE_2__.projects[0].addTask(
		(0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			'Delete instructions',
			'You are all set. Go ahead and delete the instructions project and start using the todo list!',
			undefined,
			'0',
			false
		)
	);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.save)(_project__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderTasks)(_project__WEBPACK_IMPORTED_MODULE_2__.projects[0].tasks);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLUxpZ2h0SXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcblxcdHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSxcXG5cXHRcXHR1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG5odG1sIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzMTQyO1xcblxcdGNvbG9yOiAjZmRmZmZjO1xcblxcdGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdCcuIC4gLidcXG5cXHRcXHQnLiBtYWluIC4nXFxuXFx0XFx0Jy4gLiAuICc7XFxufVxcblxcbmJvZHkge1xcblxcdGdyaWQtYXJlYTogbWFpbjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHQnLiAuIC4nXFxuXFx0XFx0J3NpZGViYXIgdGFzay1wYW5lbCBkZXRhaWxzLXBhbmVsJ1xcblxcdFxcdCcuIC4gLiAnO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyZDMxNDI7XFxuXFx0aGVpZ2h0OiA5OHZoO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRnYXA6IDFlbTtcXG5cXHR3aWR0aDogbWF4LWNvbnRlbnQ7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG5oMyB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRncmlkLWFyZWE6IHNpZGViYXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNlODhhMztcXG5cXHRoZWlnaHQ6IDYwdmg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHBhZGRpbmc6IDAuMmVtIDFlbSAwLjVlbSAxZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxuXFx0bWFyZ2luOiAxLjVlbSAxZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYjM0NztcXG5cXHRib3JkZXI6IDBweCBzb2xpZCAjYTU0NjU3O1xcblxcdGNvbG9yOiAjMmQzMTQyO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zbWFsbC1idG4ge1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHR3aWR0aDogMmVtO1xcblxcdGhlaWdodDogMmVtO1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmZGZmZmM7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHBhZGRpbmc6IDAuM2VtIDFlbTtcXG5cXHRjb2xvcjogI2ZkZmZmYztcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGhlaWdodDogMS43ZW07XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG59XFxuXFxub3B0aW9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4OGEzO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG5cXHRjb2xvcjogI2ZkZmZmYzljO1xcblxcdG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG5cXHRjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbiNjcmVhdGUtdGFzay1idG4ge1xcblxcdGhlaWdodDogMmVtO1xcblxcdHdpZHRoOiA1MCU7XFxuXFx0bWFyZ2luOiAtMWVtIDVlbSAxLjJlbSA1ZW07XFxufVxcblxcbi8qIGR1cGxpY2F0ZSBjc3MgY29kZS4gbXVzdCBjcmVhdGUgY2xhc3MgZm9yIGJ1dHRvbnMgKi9cXG4jZWRpdC10YXNrLWJ0biB7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0cGFkZGluZzogMCAxLjVlbSAwIDEuNWVtO1xcbn1cXG5cXG4ucG9wLXVwIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDUwJTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHR3aWR0aDogMjBlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4OGEzO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRwYWRkaW5nOiAxZW0gMWVtIDEuNWVtIDJlbTtcXG5cXHRib3gtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcXG59XFxuXFxuI2Vycm9ycyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Y29sb3I6ICNmZmIzNDc7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4jZWRpdC1wcm9qZWN0LXBvcHVwIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG4ucG9wLXVwLWlucHV0IHtcXG5cXHR3aWR0aDogODAlO1xcblxcdGhlaWdodDogMmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuI3BvcC11cC1wcmlvcml0eS1pbnB1dCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZmRmZmZjO1xcblxcdHdpZHRoOiA4OCU7XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNGVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuOGVtO1xcbn1cXG5cXG4ucHJpb3JpdHktbGFiZWwge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3R0b206IDVweDtcXG59XFxuLnBvcC11cC1idG5zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW4tdG9wOiAxZW07XFxuXFx0d2lkdGg6IDkwJTtcXG59XFxuXFxuLnBvcC11cC1idG4ge1xcblxcdHBhZGRpbmc6IDAuNGVtIDFlbTtcXG59XFxuXFxuLnBhbmVsIHtcXG5cXHRoZWlnaHQ6IDYwdmg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2E1NDY1NztcXG5cXHRtYXJnaW46IDEuNWVtIDA7XFxuXFx0cGFkZGluZzogMC4yZW0gMWVtIDAuNWVtIDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0d2lkdGg6IDIwZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxufVxcblxcbiN0YXNrLXBhbmVsIHtcXG5cXHRncmlkLWFyZWE6IHRhc2stcGFuZWw7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXgtd2lkdGg6IDE2ZW07XFxufVxcbiN0YXNrLWRldGFpbHMtbGlzdCxcXG4jdGFzay1saXN0LFxcbiNwcm9qZWN0LWxpc3Qge1xcblxcdG92ZXJmbG93OiBhdXRvO1xcblxcdG1hcmdpbi1ib3R0b206IGF1dG87XFxuXFx0bWFyZ2luLXJpZ2h0OiAtMC4zZW07XFxuXFx0cGFkZGluZy1yaWdodDogMC4zZW07XFxufVxcblxcbiN0YXNrLWRldGFpbHMtbGlzdCB7XFxuXFx0bWFyZ2luLXRvcDogMWVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG4udGFzay1jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRib3gtc2hhZG93OiAwIDNweCAwIDAgI2ZkZmZmYzRiO1xcblxcdG1hcmdpbi1ib3R0b206IDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0aGVpZ2h0OiAxLjdlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJvamVjdC1jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRib3gtc2hhZG93OiAwIDNweCAwIDAgI2ZkZmZmYzRiO1xcblxcdG1hcmdpbi1ib3R0b206IDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0aGVpZ2h0OiAxLjdlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJpb3JpdHktMSB7XFxuXFx0Ym94LXNoYWRvdzogMCAzcHggMCAwIHJnYmEoMCwgMTI4LCAwLCAwLjM0OSk7XFxufVxcbi5wcmlvcml0eS0yIHtcXG5cXHRib3gtc2hhZG93OiAwIDNweCAwIDAgI2ZmYjI0NzhlO1xcbn1cXG4ucHJpb3JpdHktMyB7XFxuXFx0Ym94LXNoYWRvdzogMCAzcHggMCAwIHJnYmEoMTQxLCAwLCAwLCAwLjUzNCk7XFxufVxcblxcbi50YXNrLWRvbmUge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM4MzRjNTY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLWNhcmQ6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiNjU0NjY7XFxufVxcblxcbi5wYW5lbC10aXRsZSB7XFxuXFx0bWFyZ2luOiAwLjdlbTtcXG59XFxuXFxuLnByb2plY3QtY2FyZDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU3OWNiNjtcXG59XFxuI3F1aWNrLWFkZCxcXG4jbmV3LXByb2plY3Qge1xcblxcdG1hcmdpbjogLTAuMmVtIGF1dG8gMCBhdXRvO1xcbn1cXG5cXG4jZGV0YWlscy1wYW5lbCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRncmlkLWFyZWE6IGRldGFpbHMtcGFuZWw7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jaW50ZXJuYWwtZGV0YWlscy1wYW5lbCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdHdpZHRoOiAwLjNlbTtcXG59XFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuXFx0YmFja2dyb3VuZDogIzJkMzE0MjQ5O1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bGVmdDogMWVtO1xcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZiODU1O1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xcblxcdGJhY2tncm91bmQ6ICNmZmFiMzY7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdFxcdCdzaWRlYmFyIHNpZGViYXIgdGFzay1wYW5lbCB0YXNrLXBhbmVsJ1xcblxcdFxcdFxcdCcuIGRldGFpbHMtcGFuZWwgZGV0YWlscy1wYW5lbCAuICAnO1xcblxcdFxcdGdhcDogMDtcXG5cXHR9XFxuXFx0LnBhbmVsIHtcXG5cXHRcXHRoZWlnaHQ6IDQwdmg7XFxuXFx0XFx0bWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0fVxcblxcdCNzaWRlYmFyIHtcXG5cXHRcXHRoZWlnaHQ6IDQwdmg7XFxuXFx0XFx0bWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjM1cHgpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdFxcdCdzaWRlYmFyJ1xcblxcdFxcdFxcdCd0YXNrLXBhbmVsJ1xcblxcdFxcdFxcdCcgZGV0YWlscy1wYW5lbCAnO1xcblxcdFxcdGdhcDogMDtcXG5cXHR9XFxuXFx0LnBhbmVsIHtcXG5cXHRcXHRoZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdFxcdG1heC13aWR0aDogMTZlbTtcXG5cXHRcXHRtYXJnaW46IDFlbSAwO1xcblxcdH1cXG5cXHQjc2lkZWJhciB7XFxuXFx0XFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRcXHRtYXJnaW46IDFlbSAwO1xcblxcdH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxxQkFBcUI7Q0FDckI7eUNBQ2dDO0FBQ2pDOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiOzs7VUFHUztBQUNWOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGFBQWE7Q0FDYiwrQkFBK0I7Q0FDL0I7OztVQUdTO0NBQ1QseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0IsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsV0FBVztDQUNYLGdCQUFn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bUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7Q0FDZDtDQUNBO0VBQ0MsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG5cXHRzcmM6IHVybCgnLi9Sb2JvdG8tUmVndWxhci50dGYnKSwgdXJsKCcuL1JvYm90by1Cb2xkLnR0ZicpLFxcblxcdFxcdHVybCgnLi9Sb2JvdG8tTGlnaHRJdGFsaWMudHRmJyk7XFxufVxcblxcbmh0bWwge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyZDMxNDI7XFxuXFx0Y29sb3I6ICNmZGZmZmM7XFxuXFx0Zm9udC1mYW1pbHk6IFJvYm90bztcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0Jy4gLiAuJ1xcblxcdFxcdCcuIG1haW4gLidcXG5cXHRcXHQnLiAuIC4gJztcXG59XFxuXFxuYm9keSB7XFxuXFx0Z3JpZC1hcmVhOiBtYWluO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdCcuIC4gLidcXG5cXHRcXHQnc2lkZWJhciB0YXNrLXBhbmVsIGRldGFpbHMtcGFuZWwnXFxuXFx0XFx0Jy4gLiAuICc7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzJkMzE0MjtcXG5cXHRoZWlnaHQ6IDk4dmg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdGdhcDogMWVtO1xcblxcdHdpZHRoOiBtYXgtY29udGVudDtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmgzIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNzaWRlYmFyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGdyaWQtYXJlYTogc2lkZWJhcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4OGEzO1xcblxcdGhlaWdodDogNjB2aDtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0cGFkZGluZzogMC4yZW0gMWVtIDAuNWVtIDFlbTtcXG5cXHRib3gtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcXG5cXHRtYXJnaW46IDEuNWVtIDFlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMzQ3O1xcblxcdGJvcmRlcjogMHB4IHNvbGlkICNhNTQ2NTc7XFxuXFx0Y29sb3I6ICMyZDMxNDI7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNtYWxsLWJ0biB7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdHdpZHRoOiAyZW07XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3Qge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZkZmZmYztcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0cGFkZGluZzogMC4zZW0gMWVtO1xcblxcdGNvbG9yOiAjZmRmZmZjO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0aGVpZ2h0OiAxLjdlbTtcXG5cXHRtYXJnaW46IDAuNWVtO1xcbn1cXG5cXG5vcHRpb24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzZTg4YTM7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcblxcdGNvbG9yOiAjZmRmZmZjOWM7XFxuXFx0b3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xcbn1cXG5cXG5pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xcblxcdGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuI2NyZWF0ZS10YXNrLWJ0biB7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRtYXJnaW46IC0xZW0gNWVtIDEuMmVtIDVlbTtcXG59XFxuXFxuLyogZHVwbGljYXRlIGNzcyBjb2RlLiBtdXN0IGNyZWF0ZSBjbGFzcyBmb3IgYnV0dG9ucyAqL1xcbiNlZGl0LXRhc2stYnRuIHtcXG5cXHRoZWlnaHQ6IDJlbTtcXG5cXHRwYWRkaW5nOiAwIDEuNWVtIDAgMS41ZW07XFxufVxcblxcbi5wb3AtdXAge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNTAlO1xcblxcdGxlZnQ6IDUwJTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHRoZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdHdpZHRoOiAyMGVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzZTg4YTM7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHBhZGRpbmc6IDFlbSAxZW0gMS41ZW0gMmVtO1xcblxcdGJveC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xcbn1cXG5cXG4jZXJyb3JzIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRjb2xvcjogI2ZmYjM0NztcXG5cXHRtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbiNlZGl0LXByb2plY3QtcG9wdXAge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wb3AtdXAtaW5wdXQge1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4jcG9wLXVwLXByaW9yaXR5LWlucHV0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmZGZmZmM7XFxuXFx0d2lkdGg6IDg4JTtcXG5cXHRtYXJnaW4tbGVmdDogMC40ZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC44ZW07XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvdHRvbTogNXB4O1xcbn1cXG4ucG9wLXVwLWJ0bnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG1hcmdpbi10b3A6IDFlbTtcXG5cXHR3aWR0aDogOTAlO1xcbn1cXG5cXG4ucG9wLXVwLWJ0biB7XFxuXFx0cGFkZGluZzogMC40ZW0gMWVtO1xcbn1cXG5cXG4ucGFuZWwge1xcblxcdGhlaWdodDogNjB2aDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYTU0NjU3O1xcblxcdG1hcmdpbjogMS41ZW0gMDtcXG5cXHRwYWRkaW5nOiAwLjJlbSAxZW0gMC41ZW0gMWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHR3aWR0aDogMjBlbTtcXG5cXHRib3gtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcXG59XFxuXFxuI3Rhc2stcGFuZWwge1xcblxcdGdyaWQtYXJlYTogdGFzay1wYW5lbDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG1heC13aWR0aDogMTZlbTtcXG59XFxuI3Rhc2stZGV0YWlscy1saXN0LFxcbiN0YXNrLWxpc3QsXFxuI3Byb2plY3QtbGlzdCB7XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxuXFx0bWFyZ2luLWJvdHRvbTogYXV0bztcXG5cXHRtYXJnaW4tcmlnaHQ6IC0wLjNlbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAwLjNlbTtcXG59XFxuXFxuI3Rhc2stZGV0YWlscy1saXN0IHtcXG5cXHRtYXJnaW4tdG9wOiAxZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi50YXNrLWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjZmRmZmZjNGI7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRoZWlnaHQ6IDEuN2VtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0LWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjZmRmZmZjNGI7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRoZWlnaHQ6IDEuN2VtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eS0xIHtcXG5cXHRib3gtc2hhZG93OiAwIDNweCAwIDAgcmdiYSgwLCAxMjgsIDAsIDAuMzQ5KTtcXG59XFxuLnByaW9yaXR5LTIge1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjZmZiMjQ3OGU7XFxufVxcbi5wcmlvcml0eS0zIHtcXG5cXHRib3gtc2hhZG93OiAwIDNweCAwIDAgcmdiYSgxNDEsIDAsIDAsIDAuNTM0KTtcXG59XFxuXFxuLnRhc2stZG9uZSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzgzNGM1NjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stY2FyZDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2I2NTQ2NjtcXG59XFxuXFxuLnBhbmVsLXRpdGxlIHtcXG5cXHRtYXJnaW46IDAuN2VtO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTc5Y2I2O1xcbn1cXG4jcXVpY2stYWRkLFxcbiNuZXctcHJvamVjdCB7XFxuXFx0bWFyZ2luOiAtMC4yZW0gYXV0byAwIGF1dG87XFxufVxcblxcbiNkZXRhaWxzLXBhbmVsIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdGdyaWQtYXJlYTogZGV0YWlscy1wYW5lbDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNpbnRlcm5hbC1kZXRhaWxzLXBhbmVsIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuXFx0d2lkdGg6IDAuM2VtO1xcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG5cXHRiYWNrZ3JvdW5kOiAjMmQzMTQyNDk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRsZWZ0OiAxZW07XFxufVxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcblxcdGJhY2tncm91bmQ6ICNmZmI4NTU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XFxuXFx0YmFja2dyb3VuZDogI2ZmYWIzNjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcblxcdGJvZHkge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFx0J3NpZGViYXIgc2lkZWJhciB0YXNrLXBhbmVsIHRhc2stcGFuZWwnXFxuXFx0XFx0XFx0Jy4gZGV0YWlscy1wYW5lbCBkZXRhaWxzLXBhbmVsIC4gICc7XFxuXFx0XFx0Z2FwOiAwO1xcblxcdH1cXG5cXHQucGFuZWwge1xcblxcdFxcdGhlaWdodDogNDB2aDtcXG5cXHRcXHRtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHR9XFxuXFx0I3NpZGViYXIge1xcblxcdFxcdGhlaWdodDogNDB2aDtcXG5cXHRcXHRtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MzVweCkge1xcblxcdGJvZHkge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFx0J3NpZGViYXInXFxuXFx0XFx0XFx0J3Rhc2stcGFuZWwnXFxuXFx0XFx0XFx0JyBkZXRhaWxzLXBhbmVsICc7XFxuXFx0XFx0Z2FwOiAwO1xcblxcdH1cXG5cXHQucGFuZWwge1xcblxcdFxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0XFx0bWF4LXdpZHRoOiAxNmVtO1xcblxcdFxcdG1hcmdpbjogMWVtIDA7XFxuXFx0fVxcblxcdCNzaWRlYmFyIHtcXG5cXHRcXHRoZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdFxcdG1hcmdpbjogMWVtIDA7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xuXHRyZW5kZXJQcm9qZWN0cyxcblx0cmVuZGVyVGFza3MsXG5cdHJlc2V0VGV4dElucHV0LFxuXHRjcmVhdGVEb21FbGVtZW50LFxuXHRyZW5kZXJUYXNrRGV0YWlscyxcblx0cG9wVXBGb3JtVmFsaWRhdGlvbixcblx0cmVuZGVyQWN0aXZlUHJvamVjdCxcblx0Y2FwaXRpbGl6ZSxcbn0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgaGlkZGVuQWN0aXZlVGFzaywgY3JlYXRlVGFzaywgc2V0SGlkZGVuQWN0aXZlVGFzayB9IGZyb20gJy4vdGFzay5qcyc7XG5pbXBvcnQge1xuXHRhY3RpdmVQcm9qZWN0LFxuXHRwcm9qZWN0cyxcblx0Y3JlYXRlUHJvamVjdCxcblx0cmVtb3ZlUHJvamVjdCxcblx0c2V0SGlkZGVuQWN0aXZlUHJvamVjdCxcblx0aGlkZGVuQWN0aXZlUHJvamVjdCxcblx0c2V0QWN0aXZlUHJvamVjdCxcbn0gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7IHNhdmUgfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5leHBvcnQge1xuXHRuZXdQcm9qZWN0LFxuXHRxdWlja0FkZCxcblx0Y3JlYXRlQ2FyZEJ0bixcblx0ZGVsZXRlVGFzayxcblx0dG9nZ2xlVGFza0RvbmUsXG5cdGRlbGV0ZVByb2plY3QsXG5cdHNob3dFZGl0UHJvamVjdFBvcFVwLFxufTtcblxuLy8gQ3JlYXRlIFRhc2tzIGJ1dHRvbiBvcGVucyBwb3AtdXAgYW5kIGFsbG93cyBhIGZ1bGwgdGFzayB0byBiZSBhZGRlZFxuY29uc3QgY3JlYXRlVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtdGFzay1idG4nKTtcbmNyZWF0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93VGFza1BvcFVwKCdDcmVhdGUgTmV3IFRhc2snKSk7XG5cbi8vIFF1aWNrbHkgYWRkIGEgdGFzayB3aXRoIG9ubHkgdGhlIHRpdGxlLCBidXQgbm8gb3RoZXIgaW5mb3JtYXRpb25cbmNvbnN0IHF1aWNrQWRkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2stYWRkLWlucHV0Jyk7XG5jb25zdCBxdWlja0FkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWljay1hZGQtYnRuJyk7XG5xdWlja0FkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHF1aWNrQWRkKGFjdGl2ZVByb2plY3QpKTtcblxuLy8gQWRkIGEgdGFzayB3aXRoIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlIGRhdGUgYW5kIHByaW9yaXR5XG5jb25zdCBmdWxsQWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGwtYWRkLWJ0bicpO1xuZnVsbEFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNyZWF0ZU9yRWRpdFRhc2soYWN0aXZlUHJvamVjdCkpO1xuXG4vLyBDYW5jZWwgbmV3L2VkaXQgdGFzayBwb3AtdXBcbmNvbnN0IHRhc2tQb3BVcENhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtZnVsbC1hZGQtYnRuJyk7XG50YXNrUG9wVXBDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoaWRlUG9wVXAoJ3Rhc2stcG9wdXAnKSk7XG4vLyBPcGVucyBlZGl0IHRhc2sgcG9wLXVwXG5jb25zdCBlZGl0VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRhc2stYnRuJyk7XG5lZGl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dUYXNrUG9wVXAoJ0VkaXQgVGFzaycpKTtcblxuLy8gQWRkIGEgbmV3IFByb2plY3RcbmNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC1pbnB1dCcpO1xuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC1idG4nKTtcbm5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuXHRxdWlja0FkZFByb2plY3QobmV3UHJvamVjdElucHV0LnZhbHVlKVxuKTtcblxuLy8gRWRpdCBwcm9qZWN0IG5hbWVcbmNvbnN0IGVkaXRQcm9qZWN0TmFtZVN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuXHQnZWRpdC1wcm9qZWN0LW5hbWUtc3VibWl0J1xuKTtcbmNvbnN0IGVkaXRQcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdC1uYW1lLWlucHV0Jyk7XG5lZGl0UHJvamVjdE5hbWVTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZWRpdFByb2plY3ROYW1lKGUpKTtcblxuLy8gQ2FuY2VsIGVkaXQgUHJvamVjdCBuYW1lXG5jb25zdCBjYW5jZWxFZGl0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcblx0J2VkaXQtcHJvamVjdC1uYW1lLWNhbmNlbCdcbik7XG5jYW5jZWxFZGl0UHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuXHRoaWRlUG9wVXAoJ2VkaXQtcHJvamVjdC1wb3B1cCcpXG4pO1xuXG4vLyBRdWlja2x5IGFkZCBhIHByb2plY3RcbmZ1bmN0aW9uIHF1aWNrQWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuXHRpZiAobmV3UHJvamVjdElucHV0LnZhbHVlICE9PSAnJyAmJiBuZXdQcm9qZWN0SW5wdXQudmFsdWUubGVuZ3RoIDwgMjYpIHtcblx0XHRuZXdQcm9qZWN0KHByb2plY3ROYW1lKTtcblx0fVxufVxuLy8gQ3JlYXRlcyBhIG5ldyBQcm9qZWN0XG5mdW5jdGlvbiBuZXdQcm9qZWN0KHByb2plY3ROYW1lKSB7XG5cdHByb2plY3RzLnB1c2goY3JlYXRlUHJvamVjdChjYXBpdGlsaXplKHByb2plY3ROYW1lKSwgW10pKTtcblx0c2F2ZShwcm9qZWN0cyk7XG5cdHJlbmRlckFjdGl2ZVByb2plY3QocHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0pO1xuXHRyZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG5cdHJlc2V0VGV4dElucHV0KG5ld1Byb2plY3RJbnB1dCk7XG59XG5cbi8vIFVzZXMgaW5wdXQgdG8gZWRpdCBwcm9qZWN0IG5hbWVcbmZ1bmN0aW9uIGVkaXRQcm9qZWN0TmFtZShlKSB7XG5cdGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdC1uYW1lLWlucHV0Jyk7XG5cdGhpZGRlbkFjdGl2ZVByb2plY3QuZWRpdE5hbWUoaW5wdXQudmFsdWUpO1xuXHRzYXZlKHByb2plY3RzKTtcblx0cmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuXHRyZXNldFRleHRJbnB1dChpbnB1dCk7XG5cdGhpZGVQb3BVcCgnZWRpdC1wcm9qZWN0LXBvcHVwJyk7XG59XG5cbmZ1bmN0aW9uIGhpZGVQb3BVcChpZCkge1xuXHRjb25zdCBwb3BVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblx0cG9wVXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0cmVzZXRUZXh0SW5wdXQoXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC10aXRsZS1pbnB1dCcpLFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZGVzY3JpcHRpb24taW5wdXQnKSxcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWR1ZS1kYXRlLWlucHV0Jylcblx0KTtcbn1cblxuLy8gQ3JlYXRlIGEgY2FyZC4gQ2FuIGJlIHVzZWQgZm9yIGEgdGFzayBvciBhIHByb2plY3RcbmZ1bmN0aW9uIGNyZWF0ZUNhcmRCdG4odHlwZSwgZWxDbGFzcywgZnVuYykge1xuXHRjb25zdCBidXR0b24gPSBjcmVhdGVEb21FbGVtZW50KHR5cGUsIGVsQ2xhc3MpO1xuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZnVuYyhlKSk7XG5cdHJldHVybiBidXR0b247XG59XG5cbi8vIE1ha2VzIHRoZSBcIkNyZWF0ZSBuZXcgdGFzayBwb3AtdXBcIiB2aXNpYmxlXG5mdW5jdGlvbiBzaG93VGFza1BvcFVwKHRpdGxlKSB7XG5cdGNoYW5nZVBvcFVwVGl0bGUodGl0bGUpO1xuXHRjb25zdCBwb3BVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXBvcHVwJyk7XG5cdGlmIChwb3BVcC5zdHlsZS5kaXNwbGF5ICE9ICdibG9jaycpIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt2YWx1ZT1cIjBcImApLmNoZWNrZWQgPSB0cnVlO1xuXHRcdHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHR9IGVsc2UgcG9wVXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0aWYgKHRpdGxlID09PSAnRWRpdCBUYXNrJykge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUtaW5wdXQnKS52YWx1ZSA9XG5cdFx0XHRoaWRkZW5BY3RpdmVUYXNrLnRpdGxlO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZGVzY3JpcHRpb24taW5wdXQnKS52YWx1ZSA9XG5cdFx0XHRoaWRkZW5BY3RpdmVUYXNrLmRlc2NyaXB0aW9uO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZHVlLWRhdGUtaW5wdXQnKS52YWx1ZSA9XG5cdFx0XHRoaWRkZW5BY3RpdmVUYXNrLmR1ZURhdGU7XG5cdFx0Y2hlY2tSYWRpb0J0bihoaWRkZW5BY3RpdmVUYXNrKTtcblx0fVxufVxuXG4vLyBDaGFuZ2UgcG9wLXVwIHRpdGxlXG5cbmZ1bmN0aW9uIGNoYW5nZVBvcFVwVGl0bGUobmV3VGl0bGUpIHtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLXRpdGxlJyk7XG5cdHRpdGxlLnRleHRDb250ZW50ID0gbmV3VGl0bGU7XG59XG4vLyBNYWtlcyB0aGUgXCJDcmVhdGUgZWRpdCBwcm9qZWN0IHBvcC11cFwiIHZpc2libGVcbmZ1bmN0aW9uIHNob3dFZGl0UHJvamVjdFBvcFVwKGUpIHtcblx0Y29uc3QgcG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wcm9qZWN0LXBvcHVwJyk7XG5cdGlmIChwb3BVcC5zdHlsZS5kaXNwbGF5ICE9ICdibG9jaycpIHtcblx0XHRjb25zdCBpbmRleCA9IGUucGF0aFswXS5kYXRhc2V0LmVkaXRQcm9qZWN0QnRuO1xuXHRcdHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdHNldEhpZGRlbkFjdGl2ZVByb2plY3QocHJvamVjdHNbaW5kZXhdKTtcblx0fSBlbHNlIHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbi8vIERlbGV0ZXMgYSB0aGUgcmVsYXRpdmUgdGFza1xuZnVuY3Rpb24gZGVsZXRlVGFzayhlKSB7XG5cdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdGNvbnN0IGluZGV4ID0gZS5wYXRoWzBdLmRhdGFzZXQuZGVsZXRlQnRuO1xuXHRpZiAoaGlkZGVuQWN0aXZlVGFzayA9PT0gYWN0aXZlUHJvamVjdC50YXNrc1tpbmRleF0pIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscy1wYW5lbCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH1cblx0YWN0aXZlUHJvamVjdC5yZW1vdmVUYXNrKGFjdGl2ZVByb2plY3QudGFza3NbaW5kZXhdKTtcblx0cmVuZGVyVGFza3MoYWN0aXZlUHJvamVjdC50YXNrcyk7XG5cdHNhdmUocHJvamVjdHMpO1xufVxuXG4vLyBEZWxldGVzIHRoZSByZWxhdGl2ZSBQcm9qZWN0XG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcblx0Y29uc3QgaW5kZXggPSBwYXJzZUludChlLnBhdGhbMF0uZGF0YXNldC5kZWxldGVQcm9qZWN0QnRuKTtcblx0aWYgKGFjdGl2ZVByb2plY3QgPT09IHByb2plY3RzW2luZGV4XSkge1xuXHRcdGluZGV4ID09PSAwXG5cdFx0XHQ/IHNldEFjdGl2ZVByb2plY3QocHJvamVjdHNbaW5kZXggKyAxXSlcblx0XHRcdDogc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0c1tpbmRleCAtIDFdKTtcblx0fVxuXHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRyZW1vdmVQcm9qZWN0KGluZGV4KTtcblx0c2F2ZShwcm9qZWN0cyk7XG5cdHJlbmRlclByb2plY3RzKHByb2plY3RzKTtcblx0YWN0aXZlUHJvamVjdCAhPT0gdW5kZWZpbmVkXG5cdFx0PyByZW5kZXJBY3RpdmVQcm9qZWN0KGFjdGl2ZVByb2plY3QpXG5cdFx0OiByZW5kZXJBY3RpdmVQcm9qZWN0KCcnLCBbXSk7XG59XG5cbi8vIE5PVCBXT1JLSU5HIFlFVC4gVG9nZ2xlcyBhIHRhc2sgYXMgXCJEb25lXCJcbmZ1bmN0aW9uIHRvZ2dsZVRhc2tEb25lKGUpIHtcblx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0Y29uc3QgaW5kZXggPSBlLnBhdGhbMF0uZGF0YXNldC5kb25lQnRuO1xuXHRjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtdGFzaz1cIiR7aW5kZXh9XCJdYCk7XG5cdGFjdGl2ZVByb2plY3QudGFza3NbaW5kZXhdLnRvZ2dsZURvbmUoKTtcblx0YWN0aXZlUHJvamVjdC50YXNrc1tpbmRleF0uaXNEb25lXG5cdFx0PyB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZG9uZScpXG5cdFx0OiB0YXNrLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stZG9uZScpO1xuXHRyZW5kZXJUYXNrcyhhY3RpdmVQcm9qZWN0LnRhc2tzKTtcblx0c2F2ZShwcm9qZWN0cyk7XG59XG5cbi8vIFVzZSBxdWlja0FkZCB0ZXh0IGlucHV0IHRvIGNyZWF0ZSBhIG5ldyB0YXNrIHdpdGggb25seSBhIHRpdGxlXG5mdW5jdGlvbiBxdWlja0FkZChwcm9qZWN0KSB7XG5cdGlmIChxdWlja0FkZElucHV0LnZhbHVlICE9PSAnJyAmJiBxdWlja0FkZElucHV0LnZhbHVlLmxlbmd0aCA8IDI2KSB7XG5cdFx0aWYgKHByb2plY3RzWzBdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdG5ld1Byb2plY3QoJ1BlcnNvbmFsJyk7XG5cdFx0XHRzZXRBY3RpdmVQcm9qZWN0KHByb2plY3RzWzBdKTtcblx0XHR9XG5cdFx0Y29uc3QgdGFzayA9IGNyZWF0ZVRhc2soXG5cdFx0XHRxdWlja0FkZElucHV0LnZhbHVlLFxuXHRcdFx0J05vIGRlc2NyaXB0aW9uIGRlZmluZWQnLFxuXHRcdFx0J05vIGR1ZSBkYXRlIGRlZmluZWQnLFxuXHRcdFx0JzAnLFxuXHRcdFx0dW5kZWZpbmVkXG5cdFx0KTtcblx0XHRwcm9qZWN0LmFkZFRhc2sodGFzayk7XG5cdFx0c2F2ZShwcm9qZWN0cyk7XG5cdFx0cmVuZGVyVGFza3MocHJvamVjdC50YXNrcyk7XG5cdFx0cmVzZXRUZXh0SW5wdXQocXVpY2tBZGRJbnB1dCk7XG5cdH1cbn1cblxuLy8gRGVjaWRlcyB0byBjcmVhdGUgYSBuZXcgdGFzayBvciBlZGl0IGFuIGV4aXN0aW5nIG9uZVxuZnVuY3Rpb24gY3JlYXRlT3JFZGl0VGFzayhwcm9qZWN0KSB7XG5cdHBvcFVwRm9ybVZhbGlkYXRpb24oKTtcblx0Y29uc3QgZXJyb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9ycycpO1xuXHRpZiAoZXJyb3JzLnRleHRDb250ZW50ID09PSAnJykge1xuXHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC10aXRsZScpLnRleHRDb250ZW50O1xuXHRcdHRpdGxlID09PSAnQ3JlYXRlIE5ldyBUYXNrJyA/IGZ1bGxBZGQocHJvamVjdCkgOiBlZGl0VGFzayhwcm9qZWN0KTtcblx0XHRoaWRlUG9wVXAoJ3Rhc2stcG9wdXAnKTtcblx0XHRyZXNldFRleHRJbnB1dChcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUtaW5wdXQnKSxcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZGVzY3JpcHRpb24taW5wdXQnKSxcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZHVlLWRhdGUtaW5wdXQnKVxuXHRcdCk7XG5cdH1cbn1cblxuLy8gQ3JlYXRlcyBhIHRhc2sgd2l0aCBhIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlIGRhdGUgYW5kIHByaW9yaXR5XG5mdW5jdGlvbiBmdWxsQWRkKHByb2plY3QpIHtcblx0aWYgKHByb2plY3RzWzBdID09PSB1bmRlZmluZWQpIHtcblx0XHRuZXdQcm9qZWN0KCdQZXJzb25hbCcpO1xuXHRcdHNldEFjdGl2ZVByb2plY3QocHJvamVjdHNbMF0pO1xuXHR9XG5cdGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUtaW5wdXQnKS52YWx1ZSxcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWRlc2NyaXB0aW9uLWlucHV0JykudmFsdWUsXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC1kdWUtZGF0ZS1pbnB1dCcpLnZhbHVlLFxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWUsXG5cdFx0dW5kZWZpbmVkXG5cdCk7XG5cdHByb2plY3QuYWRkVGFzayh0YXNrKTtcblx0c2F2ZShwcm9qZWN0cyk7XG5cdHJlbmRlclRhc2tzKHByb2plY3QudGFza3MpO1xuXHRyZW5kZXJUYXNrRGV0YWlscyh0YXNrKTtcbn1cblxuLy8gRWRpdCB0aGUgdGFza1xuZnVuY3Rpb24gZWRpdFRhc2socHJvamVjdCkge1xuXHRjb25zdCBjaGVja2VkUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCdcblx0KTtcblxuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUtaW5wdXQnKS52YWx1ZTtcblx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWRlc2NyaXB0aW9uLWlucHV0JykudmFsdWU7XG5cdGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWR1ZS1kYXRlLWlucHV0JykudmFsdWU7XG5cdGNvbnN0IHByaW9yaXR5ID0gY2hlY2tlZFByaW9yaXR5ID09PSBudWxsID8gMCA6IGNoZWNrZWRQcmlvcml0eS52YWx1ZTtcblxuXHRoaWRkZW5BY3RpdmVUYXNrLmVkaXRUaXRsZSh0aXRsZSk7XG5cdGhpZGRlbkFjdGl2ZVRhc2suZWRpdERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKTtcblx0aGlkZGVuQWN0aXZlVGFzay5lZGl0RHVlRGF0ZShkdWVEYXRlKTtcblx0aGlkZGVuQWN0aXZlVGFzay5lZGl0UHJpb3JpdHkocHJpb3JpdHkpO1xuXHRzYXZlKHByb2plY3RzKTtcblx0cmVuZGVyVGFza3MocHJvamVjdC50YXNrcyk7XG5cdHJlbmRlclRhc2tEZXRhaWxzKGhpZGRlbkFjdGl2ZVRhc2spO1xufVxuXG4vLyBDaGVja3MgcmFkaW8gYnV0dG9uIHdpdGggdGFza3MgcHJldmlvdXMgc2VsZWN0aW9uXG5mdW5jdGlvbiBjaGVja1JhZGlvQnRuKHRhc2spIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdmFsdWU9XCIke3Rhc2sucHJpb3JpdHl9XCJgKS5jaGVja2VkID0gdHJ1ZTtcbn1cbiIsImV4cG9ydCB7XG5cdHJlbmRlclByb2plY3RzLFxuXHRyZW5kZXJUYXNrcyxcblx0c2VsZWN0UHJvamVjdCxcblx0cmVzZXRUZXh0SW5wdXQsXG5cdGNyZWF0ZURvbUVsZW1lbnQsXG5cdHJlbmRlclRhc2tEZXRhaWxzLFxuXHRwb3BVcEZvcm1WYWxpZGF0aW9uLFxuXHRyZW5kZXJBY3RpdmVQcm9qZWN0LFxuXHRjYXBpdGlsaXplLFxufTtcbmltcG9ydCB7IHNldEFjdGl2ZVByb2plY3QsIHByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7XG5cdGNyZWF0ZUNhcmRCdG4sXG5cdGRlbGV0ZVRhc2ssXG5cdHRvZ2dsZVRhc2tEb25lLFxuXHRkZWxldGVQcm9qZWN0LFxuXHRzaG93RWRpdFByb2plY3RQb3BVcCxcbn0gZnJvbSAnLi9idXR0b25zJztcbmltcG9ydCB7IGhpZGRlbkFjdGl2ZVRhc2ssIHNldEhpZGRlbkFjdGl2ZVRhc2sgfSBmcm9tICcuL3Rhc2snO1xuXG4vLyBBc3NpZ24gRGF0YXNldCB0byBQcm9qZWN0IENhcmRcbmZ1bmN0aW9uIGFzc2lnblByb2plY3REYXRhSW5kZXgoaW5kZXgsIGNhcmQsIGVkaXRCdG4sIGRlbGV0ZUJ0bikge1xuXHRjYXJkLmRhdGFzZXQucHJvamVjdCA9IGluZGV4O1xuXHRkZWxldGVCdG4uZGF0YXNldC5kZWxldGVQcm9qZWN0QnRuID0gaW5kZXg7XG5cdGVkaXRCdG4uZGF0YXNldC5lZGl0UHJvamVjdEJ0biA9IGluZGV4O1xufVxuXG4vLyBDcmVhdGUgYSBQcm9qZWN0IENhcmRcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpIHtcblx0Y29uc3QgaW5kZXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1saXN0JykuY2hpbGRyZW4ubGVuZ3RoO1xuXHRjb25zdCBjYXJkID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgJ3Byb2plY3QtY2FyZCcpO1xuXHRjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVDYXJkQnRuKCdidXR0b24nLCAnc21hbGwtYnRuJywgZGVsZXRlUHJvamVjdCk7XG5cdGNvbnN0IHRpdGxlID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgJ3Byb2plY3QtdGl0bGUnKTtcblx0Y29uc3QgZWRpdEJ0biA9IGNyZWF0ZUNhcmRCdG4oJ2J1dHRvbicsICdzbWFsbC1idG4nLCBzaG93RWRpdFByb2plY3RQb3BVcCk7XG5cdGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSAnJiMxMDAwNzsnO1xuXHRlZGl0QnRuLmlubmVySFRNTCA9ICcmIzk5OTgnO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cdGFwcGVuZFRvUGFyZW50KGNhcmQsIGVkaXRCdG4sIHRpdGxlLCBkZWxldGVCdG4pO1xuXHRhc3NpZ25Qcm9qZWN0RGF0YUluZGV4KGluZGV4LCBjYXJkLCBlZGl0QnRuLCBkZWxldGVCdG4pO1xuXHRjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdHJlbmRlckFjdGl2ZVByb2plY3QocHJvamVjdCk7XG5cdH0pO1xuXHRyZXR1cm4gY2FyZDtcbn1cblxuLy8gQXBwZW5kcyBQcm9qZWN0IENhcmQgdG8gUHJvamVjdCBMaXN0XG5mdW5jdGlvbiBhcHBlbmRQcm9qZWN0KHByb2plY3QpIHtcblx0Y29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWxpc3QnKTtcblx0Y29uc3QgY2FyZCA9IGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpO1xuXHRsaXN0LmFwcGVuZENoaWxkKGNhcmQpO1xufVxuXG4vLyBBcHBlbmRzIGFsbCBQcm9qZWN0IENhcmQgdG8gUHJvamVjdCBMaXN0XG5mdW5jdGlvbiBhcHBlbmRBbGxQcm9qZWN0cyhwcm9qZWN0KSB7XG5cdHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IGFwcGVuZFByb2plY3QocHJvamVjdCkpO1xufVxuXG4vLyBSZW5kZXJzIFByb2plY3RzXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cykge1xuXHRyZXNldEVsZW1lbnRzKCcucHJvamVjdC1jYXJkJyk7XG5cdGFwcGVuZEFsbFByb2plY3RzKCk7XG59XG5cbi8vIFJlbmRlcnMgdGhlIGFjdGl2ZSBwcm9qZWN0cyB0YXNrc1xuZnVuY3Rpb24gcmVuZGVyQWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XG5cdHNldEFjdGl2ZVByb2plY3QocHJvamVjdCk7XG5cdHNlbGVjdFByb2plY3QocHJvamVjdCk7XG5cdHJlbmRlclRhc2tzKHByb2plY3QudGFza3MpO1xufVxuXG4vLyBSZW5kZXJzIHRoZSBhY3RpdmUgcHJvamVjdHNcbmZ1bmN0aW9uIHNlbGVjdFByb2plY3QocHJvamVjdCkge1xuXHRjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZScpO1xuXHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xufVxuXG4vLyBBc3NpZ25zIGRhdGFzZXQgdG8gdGFzayBjYXJkXG5mdW5jdGlvbiBhc3NpZ25UYXNrRGF0YUluZGV4KGluZGV4LCBjYXJkLCBkb25lQnRuLCBkZWxldGVCdG4pIHtcblx0Y2FyZC5kYXRhc2V0LnRhc2sgPSBpbmRleDtcblx0ZG9uZUJ0bi5kYXRhc2V0LmRvbmVCdG4gPSBpbmRleDtcblx0ZGVsZXRlQnRuLmRhdGFzZXQuZGVsZXRlQnRuID0gaW5kZXg7XG59XG5cbi8vIENyZWF0ZSBhIG5ldyBUYXNrIENhcmRcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tDYXJkKHRhc2spIHtcblx0Y29uc3QgaW5kZXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1saXN0JykuY2hpbGRyZW4ubGVuZ3RoO1xuXHRjb25zdCBjYXJkID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgJ3Rhc2stY2FyZCcpO1xuXHRjb25zdCBkb25lQnRuID0gY3JlYXRlQ2FyZEJ0bignYnV0dG9uJywgJ3NtYWxsLWJ0bicsIHRvZ2dsZVRhc2tEb25lKTtcblx0Y29uc3QgZGVsZXRlQnRuID0gY3JlYXRlQ2FyZEJ0bignYnV0dG9uJywgJ3NtYWxsLWJ0bicsIGRlbGV0ZVRhc2spO1xuXHRjb25zdCB0aXRsZSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsICd0YXNrLXRpdGxlJyk7XG5cdGNhcmQuY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktJHt0YXNrLnByaW9yaXR5fWApO1xuXHR0YXNrRG9uZSh0YXNrLCBjYXJkKTtcblx0ZG9uZUJ0bi5pbm5lckhUTUwgPSAnJiMxMDAwMyc7XG5cdGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSAnJiMxMDAwNzsnO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdGFwcGVuZFRvUGFyZW50KGNhcmQsIGRvbmVCdG4sIHRpdGxlLCBkZWxldGVCdG4pO1xuXHRhc3NpZ25UYXNrRGF0YUluZGV4KGluZGV4LCBjYXJkLCBkb25lQnRuLCBkZWxldGVCdG4pO1xuXHRjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyVGFza0RldGFpbHModGFzaykpO1xuXHRyZXR1cm4gY2FyZDtcbn1cblxuLy8gQXBwZW5kIGEgdGFzayBjYXJkXG5mdW5jdGlvbiBhcHBlbmRUYXNrKHRhc2spIHtcblx0Y29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWxpc3QnKTtcblx0Y29uc3QgY2FyZCA9IGNyZWF0ZVRhc2tDYXJkKHRhc2spO1xuXHRsaXN0LmFwcGVuZENoaWxkKGNhcmQpO1xufVxuXG4vLyBBcHBlbmQgYWxsIHRhc2sgY2FyZHNcbmZ1bmN0aW9uIGFwcGVuZEFsbFRhc2tzKHRhc2tzKSB7XG5cdGlmICh0YXNrcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dGFza3MuZm9yRWFjaCgodGFzaykgPT4gYXBwZW5kVGFzayh0YXNrKSk7XG5cdH1cbn1cblxuLy8gUmVuZGVycyBQcm9qZWN0c1xuZnVuY3Rpb24gcmVuZGVyVGFza3ModGFza3MpIHtcblx0cmVzZXRFbGVtZW50cygnLnRhc2stY2FyZCcpO1xuXHRhcHBlbmRBbGxUYXNrcyh0YXNrcyk7XG59XG5cbi8vIFJlbmRlcnMgVGFzayBEZXRhaWxzIG9uIGRldGFpbHMgcGFuZWxcbmZ1bmN0aW9uIHJlbmRlclRhc2tEZXRhaWxzKHRhc2spIHtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscy10aXRsZScpO1xuXHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLWRlc2NyaXB0aW9uJyk7XG5cdGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscy1kdWUtZGF0ZScpO1xuXHRjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLXByaW9yaXR5Jyk7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLXBhbmVsJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblx0ZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uID8gYCR7dGFzay5kZXNjcmlwdGlvbn1gIDogJyc7XG5cdGR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGUgPyBgRHVlIERhdGU6ICR7dGFzay5kdWVEYXRlfWAgOiAnJztcblx0aWYgKHRhc2sucHJpb3JpdHkgPT09ICcxJykge1xuXHRcdHByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAhJztcblx0fSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAnMicpIHtcblx0XHRwcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogISEnO1xuXHR9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICczJykge1xuXHRcdHByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAhISEnO1xuXHR9XG5cdHNldEhpZGRlbkFjdGl2ZVRhc2sodGFzayk7XG5cdGNvbnNvbGUubG9nKGhpZGRlbkFjdGl2ZVRhc2spO1xufVxuXG4vLyBBcHBlbmRzIG11bHRpcGxlIGVsZW1lbnRzIHRvIGEgZGl2XG5mdW5jdGlvbiBhcHBlbmRUb1BhcmVudChwYXJlbnQsIC4uLmFyZ3MpIHtcblx0YXJncy5mb3JFYWNoKChhcmcpID0+IHBhcmVudC5hcHBlbmRDaGlsZChhcmcpKTtcbn1cblxuLy8gQ3JlYXRlIGEgRE9NIGVsZW1lbnQgd2l0aCByZWxhdGl2ZSBjbGFzc1xuZnVuY3Rpb24gY3JlYXRlRG9tRWxlbWVudCh0eXBlLCBlbENsYXNzKSB7XG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG5cdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtlbENsYXNzfWApO1xuXHRyZXR1cm4gZWxlbWVudDtcbn1cblxuLy8gUmVzZXRzIGFsbCBlbGVtZW50cyB3aXRoIGEgY2VydGFpbiBjbGFzc1xuZnVuY3Rpb24gcmVzZXRFbGVtZW50cyhlbENsYXNzKSB7XG5cdGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxDbGFzcyk7XG5cdGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQucmVtb3ZlKCkpO1xufVxuXG4vLyBSZXNldHMgdGV4dCBpbnB1dFxuZnVuY3Rpb24gcmVzZXRUZXh0SW5wdXQoLi4uYXJncykge1xuXHRhcmdzLmZvckVhY2goKGFyZykgPT4gKGFyZy52YWx1ZSA9ICcnKSk7XG59XG5cbi8vIEFkZHMgdGFzay1kb25lIGNsYXNzIHRvIHRhc2sgY2FyZFxuXG5mdW5jdGlvbiB0YXNrRG9uZSh0YXNrLCBjYXJkKSB7XG5cdGlmICh0YXNrLmlzRG9uZSA9PT0gdHJ1ZSkge1xuXHRcdGNhcmQuY2xhc3NMaXN0LmFkZCgndGFzay1kb25lJyk7XG5cdH1cbn1cblxuLy8gRm9ybSB2YWxpZGF0aW9uXG5cbmZ1bmN0aW9uIHBvcFVwRm9ybVZhbGlkYXRpb24oKSB7XG5cdGNvbnN0IGVycm9yTGlzdCA9IFtdO1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUtaW5wdXQnKS52YWx1ZTtcblx0Y29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZHVlLWRhdGUtaW5wdXQnKS52YWx1ZTtcblx0ZXJyb3JMaXN0LnB1c2godGl0bGVWYWxpZGF0aW9uKHRpdGxlKSk7XG5cdGVycm9yTGlzdC5wdXNoKGR1ZURhdGVWYWxpZGF0aW9uKGR1ZURhdGUpKTtcblx0c2hvd0Vycm9ycyhlcnJvckxpc3QpO1xufVxuXG4vLyBUaXRsZSB2YWxpZGF0aW9uXG5mdW5jdGlvbiB0aXRsZVZhbGlkYXRpb24odGl0bGUpIHtcblx0aWYgKHRpdGxlID09PSAnJykge1xuXHRcdHJldHVybiAnSW5zZXJ0IHRpdGxlJztcblx0fSBlbHNlIGlmICh0aXRsZS5sZW5ndGggPiAyNSkgcmV0dXJuICdUaXRsZSBtYXggMjUgY2hhcmFjdGVycyc7XG59XG5cbi8vIER1ZSBEYXRlIG5vdCBpbiBwYXN0XG5mdW5jdGlvbiBkdWVEYXRlVmFsaWRhdGlvbihkdWVEYXRlKSB7XG5cdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcblx0Y29uc3QgaW5wdXREYXRlID1cblx0XHRkdWVEYXRlICE9PSAnJyA/IG5ldyBEYXRlKGR1ZURhdGUpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApIDogJyc7XG5cdGlmIChpbnB1dERhdGUgIT09ICcnICYmIGlucHV0RGF0ZSA8IHRvZGF5KSB7XG5cdFx0cmV0dXJuICdEdWUgRGF0ZSBpcyBpbiB0aGUgcGFzdCc7XG5cdH1cbn1cbi8vIFNob3cgZm9ybSBWYWxpZGF0aW9uIGVycm9yc1xuZnVuY3Rpb24gc2hvd0Vycm9ycyhlcnJvckxpc3QpIHtcblx0Y29uc3QgZXJyb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9ycycpO1xuXHRlcnJvcnMudGV4dENvbnRlbnQgPSBlcnJvckxpc3Quam9pbignIHwgJyk7XG5cdGlmIChlcnJvcnMudGV4dENvbnRlbnQgPT09ICcgfCAnKSB7XG5cdFx0ZXJyb3JzLnRleHRDb250ZW50ID0gJyc7XG5cdH1cblx0aWYgKGVycm9yTGlzdC5pbmNsdWRlcyh1bmRlZmluZWQpKSB7XG5cdFx0ZXJyb3JzLnRleHRDb250ZW50ID0gZXJyb3JzLnRleHRDb250ZW50LnJlcGxhY2VBbGwoJ3wnLCAnJyk7XG5cdH1cbn1cblxuLy8gQ2FwaXRpbGl6ZSBmaXJzdCBsZXR0ZXJcbmZ1bmN0aW9uIGNhcGl0aWxpemUoc3RyaW5nKSB7XG5cdHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgY3JlYXRlUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5leHBvcnQgeyBzYXZlLCBsb2FkIH07XG5cbi8vIFNhdmVzIHRvIGxvY2FsU3RvcmFnZVxuZnVuY3Rpb24gc2F2ZShwcm9qZWN0cykge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG4vLyBMb2FkcyBmcm9tIGxvY2FsU3RvcmFnZVxuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG5cdHJldHVybiBwcm9qZWN0cyA9PT0gbnVsbCA/IFtdIDogcHJvamVjdHM7XG59XG4iLCJleHBvcnQge1xuXHRhY3RpdmVQcm9qZWN0LFxuXHRoaWRkZW5BY3RpdmVQcm9qZWN0LFxuXHRwcm9qZWN0cyxcblx0Y3JlYXRlUHJvamVjdCxcblx0c2V0QWN0aXZlUHJvamVjdCxcblx0c2V0SGlkZGVuQWN0aXZlUHJvamVjdCxcblx0cmVtb3ZlUHJvamVjdCxcbn07XG5pbXBvcnQgeyBsb2FkIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gJy4vdGFzayc7XG5pbXBvcnQgeyBuZXdQcm9qZWN0IH0gZnJvbSAnLi9idXR0b25zJztcblxuLy8gUHJvamVjdCBGYWN0b3J5IEZ1bmN0aW9uXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCB0YXNrcykge1xuXHRjb25zdCBwcm90byA9IHtcblx0XHRhZGRUYXNrOiBmdW5jdGlvbiAodGFzaykge1xuXHRcdFx0dGhpcy50YXNrcy5wdXNoKHRhc2spO1xuXHRcdH0sXG5cblx0XHRyZW1vdmVUYXNrOiBmdW5jdGlvbiAodGFzaykge1xuXHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLnRhc2tzLmluZGV4T2YodGFzayk7XG5cdFx0XHR0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fSxcblx0XHRlZGl0TmFtZTogZnVuY3Rpb24gKG5ld1RpdGxlKSB7XG5cdFx0XHR0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG5cdFx0fSxcblx0fTtcblx0Y29uc3QgcHJvamVjdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShwcm90byksIHtcblx0XHR0aXRsZSxcblx0XHR0YXNrcyxcblx0fSk7XG5cdHJldHVybiBwcm9qZWN0O1xufVxuXG4vLyBTZXRzIHRoZSBBY3RpdmUgUHJvamVjdFxuZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XG5cdGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0O1xufVxuLy8gUmVtb3ZlcyBwcm9qZWN0IGZyb20gUHJvamVjdHMgYXJyYXlcbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QoaW5kZXgpIHtcblx0cHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuLy8gTG9hZHMgbG9jYWxTdG9yYWdlXG5sZXQgcHJvamVjdHMgPSBsb2FkKCk7XG5cbi8vIERlZmluZXMgdGhlIGFjdGl2ZSBQcm9qZWN0XG5sZXQgYWN0aXZlUHJvamVjdDtcblxuLy8gSGlkZGVuIGFjdGl2ZSBwcm9qZWN0XG5cbmxldCBoaWRkZW5BY3RpdmVQcm9qZWN0O1xuXG4vLyBTZXRzIHRoZSBIaWRkZW4gYWN0aXZlIHByb2plY3QgKG5lZWRlZCB0byBlZGl0IHByb2plY3QpXG5cbmZ1bmN0aW9uIHNldEhpZGRlbkFjdGl2ZVByb2plY3QocHJvamVjdCkge1xuXHRoaWRkZW5BY3RpdmVQcm9qZWN0ID0gcHJvamVjdDtcbn1cbiIsImV4cG9ydCB7IGhpZGRlbkFjdGl2ZVRhc2ssIGNyZWF0ZVRhc2ssIHNldEhpZGRlbkFjdGl2ZVRhc2sgfTtcblxuLy8gVGFzayBGYWN0b3J5IEZ1bmN0aW9uXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzRG9uZSkge1xuXHRjb25zdCBwcm90byA9IHtcblx0XHRlZGl0VGl0bGU6IGZ1bmN0aW9uIChuZXdUaXRsZSkge1xuXHRcdFx0dGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuXHRcdH0sXG5cdFx0ZWRpdERlc2NyaXB0aW9uOiBmdW5jdGlvbiAobmV3RGVzY3JpcHRpb24pIHtcblx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcblx0XHR9LFxuXHRcdGVkaXREdWVEYXRlOiBmdW5jdGlvbiAobmV3RHVlRGF0ZSkge1xuXHRcdFx0dGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcblx0XHR9LFxuXHRcdGVkaXRQcmlvcml0eTogZnVuY3Rpb24gKG5ld1ByaW9yaXR5KSB7XG5cdFx0XHR0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG5cdFx0fSxcblx0XHR0b2dnbGVEb25lOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLmlzRG9uZSA9ICF0aGlzLmlzRG9uZTtcblx0XHR9LFxuXHR9O1xuXHRjb25zdCB0YXNrID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKHByb3RvKSwge1xuXHRcdHRpdGxlLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGR1ZURhdGUsXG5cdFx0cHJpb3JpdHksXG5cdFx0aXNEb25lLFxuXHR9KTtcblx0cmV0dXJuIHRhc2s7XG59XG5cbi8vIEhpZGRlbiBhY3RpdmUgdGFza1xuXG5sZXQgaGlkZGVuQWN0aXZlVGFzaztcblxuLy8gU2V0cyB0aGUgSGlkZGVuIHRhc2sgcHJvamVjdCAobmVlZGVkIHRvIGVkaXQgdGFzaylcblxuZnVuY3Rpb24gc2V0SGlkZGVuQWN0aXZlVGFzayh0YXNrKSB7XG5cdGhpZGRlbkFjdGl2ZVRhc2sgPSB0YXNrO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSAnLi90YXNrJztcbmltcG9ydCB7XG5cdGFjdGl2ZVByb2plY3QsXG5cdHByb2plY3RzLFxuXHRzZXRBY3RpdmVQcm9qZWN0LFxuXHRjcmVhdGVQcm9qZWN0LFxuXHRwZXJzb25hbCxcblx0d29yayxcbn0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7IHJlbmRlclRhc2tzLCByZW5kZXJQcm9qZWN0cywgc2VsZWN0UHJvamVjdCB9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7IHF1aWNrQWRkLCBuZXdQcm9qZWN0IH0gZnJvbSAnLi9idXR0b25zJztcbmltcG9ydCB7IHNhdmUsIGxvYWQgfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5cbi8vIFJlY3JlYXRlcyBhbGwgUHJvamVjdHMgYW5kIFRhc2tzIHdpdGggd29ya2luZyBfX3Byb3RvX18gYWZ0ZXIgbG9hZGluZyBpdCBmcm9tIGxvY2FsU3RvcmFnZVxuZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRwcm9qZWN0c1tpXSA9IGNyZWF0ZVByb2plY3QocHJvamVjdHNbaV0udGl0bGUsIHByb2plY3RzW2ldLnRhc2tzKTtcblx0Zm9yIChsZXQgYSA9IDA7IGEgPCBwcm9qZWN0c1tpXS50YXNrcy5sZW5ndGg7IGErKykge1xuXHRcdHByb2plY3RzW2ldLnRhc2tzW2FdID0gY3JlYXRlVGFzayhcblx0XHRcdHByb2plY3RzW2ldLnRhc2tzW2FdLnRpdGxlLFxuXHRcdFx0cHJvamVjdHNbaV0udGFza3NbYV0uZGVzY3JpcHRpb24sXG5cdFx0XHRwcm9qZWN0c1tpXS50YXNrc1thXS5kdWVEYXRlLFxuXHRcdFx0cHJvamVjdHNbaV0udGFza3NbYV0ucHJpb3JpdHksXG5cdFx0XHRwcm9qZWN0c1tpXS50YXNrc1thXS5pc0RvbmVcblx0XHQpO1xuXHR9XG59XG5cbi8vIENyZWF0ZXMgZGVmYXVsdCBcIlBlcnNvbmFsXCIgcHJvamVjdCBpZiBwcm9qZWN0cyBhcnJheSBpcyBlbXB0eSB3aGVuIGxvYWRpbmcgYXBwXG5pZiAocHJvamVjdHNbMF0gPT09IHVuZGVmaW5lZCkge1xuXHRuZXdQcm9qZWN0KCdJbnN0cnVjdGlvbnMnKTtcblx0bmV3UHJvamVjdCgnUGVyc29uYWwnKTtcblx0cHJvamVjdHNbMF0uYWRkVGFzayhcblx0XHRjcmVhdGVUYXNrKFxuXHRcdFx0J1Byb2plY3RzJyxcblx0XHRcdCdZb3UgY2FuIGNyZWF0ZSBuZXcgcHJvamVjdHMgYW5kIGVkaXQgdGhlaXIgbmFtZXMgZnJvbSB0aGUgUHJvamVjdHMgUGFuZWwnLFxuXHRcdFx0dW5kZWZpbmVkLFxuXHRcdFx0JzAnLFxuXHRcdFx0ZmFsc2Vcblx0XHQpXG5cdCk7XG5cdHByb2plY3RzWzBdLmFkZFRhc2soXG5cdFx0Y3JlYXRlVGFzayhcblx0XHRcdCdUYXNrcycsXG5cdFx0XHQnWW91IGNhbiBjcmVhdGUgdGFza3MgZm9yIGVhY2ggcHJvamVjdCB0byBzdGF5IG1vcmUgb3JnYW5pemVkLiBFaXRoZXIgYWRkIGEgdGFzayBxdWlja2x5IG9yIGNsaWNrIG9uIFwiKyBDcmVhdGUgVGFza1wiJyxcblx0XHRcdHVuZGVmaW5lZCxcblx0XHRcdCcwJyxcblx0XHRcdGZhbHNlXG5cdFx0KVxuXHQpO1xuXHRwcm9qZWN0c1swXS5hZGRUYXNrKFxuXHRcdGNyZWF0ZVRhc2soXG5cdFx0XHQnQ29tcGxldGUgYW5kIGRlbGV0ZSB0YXNrcycsXG5cdFx0XHQnWW91IGNhbiBhbHNvIHNldCBhIHRhc2sgdG8gZG9uZSBvciBjb21wbGV0ZWx5IHJlbW92ZSBhIHRhc2sgYnkgY2xpY2tpbmcgdGhlIGJ1dHRvbnMgb24gdGhlIHJlbGF0aXZlIHRhc2suIFRyeSBpdCBvdXQgbm93ISBmaXJzdCBzZXQgdGhpcyB0YXNrIHRvIGRvbmUgYW5kIHRoZW4gZGVsZXRlIGl0LicsXG5cdFx0XHR1bmRlZmluZWQsXG5cdFx0XHQnMCcsXG5cdFx0XHRmYWxzZVxuXHRcdClcblx0KTtcblx0cHJvamVjdHNbMF0uYWRkVGFzayhcblx0XHRjcmVhdGVUYXNrKFxuXHRcdFx0J0RldGFpbHMnLFxuXHRcdFx0J0luIHRoZSBwYW5lbCBmcm9tIHdoaWNoIHlvdSBhcmUgY3VycmVudGx5IHJlYWRpbmcgeW91IGNhbiB2aWV3IGFsbCB0aGUgZGV0YWlscyBvZiBhIHNlbGVjdGVkIHRhc2sgYW5kIGFsc28gZWRpdCBpdC4gVGhlIG9ubHkgcmVxdWlyZWQgZmllbGQgaXMgdGhlIHRpdGxlJyxcblx0XHRcdHVuZGVmaW5lZCxcblx0XHRcdCcwJyxcblx0XHRcdGZhbHNlXG5cdFx0KVxuXHQpO1xuXHRwcm9qZWN0c1swXS5hZGRUYXNrKFxuXHRcdGNyZWF0ZVRhc2soXG5cdFx0XHQnRGVsZXRlIGluc3RydWN0aW9ucycsXG5cdFx0XHQnWW91IGFyZSBhbGwgc2V0LiBHbyBhaGVhZCBhbmQgZGVsZXRlIHRoZSBpbnN0cnVjdGlvbnMgcHJvamVjdCBhbmQgc3RhcnQgdXNpbmcgdGhlIHRvZG8gbGlzdCEnLFxuXHRcdFx0dW5kZWZpbmVkLFxuXHRcdFx0JzAnLFxuXHRcdFx0ZmFsc2Vcblx0XHQpXG5cdCk7XG5cdHNhdmUocHJvamVjdHMpO1xuXHRyZW5kZXJUYXNrcyhwcm9qZWN0c1swXS50YXNrcyk7XG59XG5cbi8vIFNldHMgQWN0aXZlIFByb2plY3QgdG8gdGhlIGZpcnN0IG9uZSBpbiBwcm9qZWN0cyBhcnJheVxuc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0c1swXSk7XG5cbi8vIFJlbmRlcnMgUHJvamVjdHMgdXBvbiBsb2FkaW5nIHRoZSBhcHBcbnJlbmRlclByb2plY3RzKHByb2plY3RzKTtcblxuLy8gUmVuZGVycyBUYXNrcyB1cG9uIGxvYWRpbmcgdGhlIGFwcFxucmVuZGVyVGFza3MoYWN0aXZlUHJvamVjdC50YXNrcyk7XG5cbi8vIFNlbGVjdHMgdGhlIGFjdGl2ZSBwcm9qZWN0IGFuZCBzaG93cyBpdCBvbiB0aGUgVGFza3MtUGFuZWxcbnNlbGVjdFByb2plY3QoYWN0aXZlUHJvamVjdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=