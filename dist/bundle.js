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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "),\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\nhtml {\n\tbackground-color: #2d3142;\n\tcolor: #fdfffc;\n\tfont-family: Roboto;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'. main .'\n\t\t'. . . ';\n}\n\nbody {\n\tgrid-area: main;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 1fr 1fr;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'sidebar task-panel details-panel'\n\t\t'. . . ';\n\tbackground-color: #2d3142;\n\theight: 100vh;\n\tborder-radius: 1em;\n\tgap: 1em;\n\twidth: max-content;\n\talign-self: center;\n\tjustify-self: center;\n}\n\nh3 {\n\ttext-align: center;\n}\n\n#sidebar {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tgrid-area: sidebar;\n\tbackground-color: #3e88a3;\n\theight: 60vh;\n\tborder-radius: 1em;\n\tpadding: 1em 0.7em 1em 0.5em;\n\tbox-shadow: 1px 1px 2px black;\n\tmargin: 1.5em 1em;\n}\n\n#project-list {\n\tmargin-bottom: auto;\n}\n/* \npadding: 1em;\nbox-shadow: 1px 1px 2px black; */\n\nbutton {\n\tbackground-color: #ffb347;\n\tborder: 0px solid #a54657;\n\tcolor: #2d3142;\n\tborder-radius: 1em;\n\tcursor: pointer;\n}\n.small-btn {\n\tborder-radius: 50%;\n\twidth: 2em;\n\theight: 2em;\n\tfont-size: 0.8em;\n\tpadding: 0;\n}\n\ninput,\nselect {\n\tbackground-color: rgba(255, 255, 255, 0);\n\tborder: 1px solid #fdfffc;\n\tborder-radius: 1em;\n\tpadding: 0.3em 1em;\n\tcolor: #fdfffc;\n\toutline: none;\n\theight: 1.7em;\n\tmargin: 0.5em;\n}\n\noption {\n\tbackground-color: #3e88a3;\n}\n\n::placeholder {\n\tcolor: #fdfffc9c;\n\topacity: 1; /* Firefox */\n}\n\ninput:focus::placeholder {\n\tcolor: transparent;\n}\n#create-task-btn {\n\theight: 2em;\n\twidth: 50%;\n\tmargin: 0 5em 1.2em 5em;\n}\n\n.pop-up {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\theight: max-content;\n\twidth: 20em;\n\tbackground-color: #3e88a3;\n\tborder-radius: 1em;\n\tpadding: 1em 1em 1.5em 2em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n#edit-project-popup {\n\tdisplay: none;\n}\n.pop-up-input {\n\twidth: 80%;\n\theight: 2em;\n\tborder-radius: 1em;\n}\n\n#pop-up-priority-input {\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tborder: 1px solid #fdfffc;\n\twidth: 88%;\n\tmargin-left: 0.4em;\n\tborder-radius: 0.8em;\n}\n\n.pop-up-btns {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-top: 1em;\n\twidth: 90%;\n}\n\n.pop-up-btn {\n\tpadding: 0.4em 1em;\n}\n\n.panel {\n\theight: 60vh;\n\tbackground-color: #a54657;\n\tmargin: 1.5em 0;\n\tpadding: 1em;\n\tborder-radius: 1em;\n\twidth: 20em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n#task-panel {\n\tgrid-area: task-panel;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tmax-width: 16em;\n}\n\n.task-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 2em;\n\talign-items: center;\n}\n\n/* it works if I add the class from the dev tool but doesn't work with classList.add */\ndiv .task-done {\n\tbackground-color: gray I !important;\n}\n\n.task-card:hover {\n\tbackground-color: #b65466;\n}\n\n.project-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin: 0 auto 1em auto;\n\tborder-radius: 1em;\n\theight: 2em;\n\twidth: 80%;\n\tpadding: 0.2em 0.5em 0em 0.5em;\n}\n\n.project-title {\n\tmargin: 0;\n}\n\n.project-card:hover {\n\tbackground-color: #579cb6;\n}\n#quick-add,\n#new-project {\n\tmargin: 0 auto;\n\twhite-space: nowrap;\n}\n\n#details-panel {\n\tdisplay: none;\n\tgrid-area: details-panel;\n\ttext-align: center;\n}\n\n@media (max-width: 1000px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar sidebar task-panel task-panel'\n\t\t\t'. details-panel details-panel .  ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n\t#sidebar {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n}\n\n@media (max-width: 635px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar'\n\t\t\t'task-panel'\n\t\t\t' details-panel ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: max-content;\n\t\tmax-width: 16em;\n\t\tmargin: 1em 0;\n\t}\n\t#sidebar {\n\t\theight: max-content;\n\t\tmargin: 1em 0;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;CACC,qBAAqB;CACrB;yCACgC;AACjC;;AAEA;CACC,yBAAyB;CACzB,cAAc;CACd,mBAAmB;CACnB,aAAa;CACb;;;UAGS;AACV;;AAEA;CACC,eAAe;CACf,aAAa;CACb,+BAA+B;CAC/B;;;UAGS;CACT,yBAAyB;CACzB,aAAa;CACb,kBAAkB;CAClB,QAAQ;CACR,kBAAkB;CAClB,kBAAkB;CAClB,oBAAoB;AACrB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,8BAA8B;CAC9B,kBAAkB;CAClB,yBAAyB;CACzB,YAAY;CACZ,kBAAkB;CAClB,4BAA4B;CAC5B,6BAA6B;CAC7B,iBAAiB;AAClB;;AAEA;CACC,mBAAmB;AACpB;AACA;;gCAEgC;;AAEhC;CACC,yBAAyB;CACzB,yBAAyB;CACzB,cAAc;CACd,kBAAkB;CAClB,eAAe;AAChB;AACA;CACC,kBAAkB;CAClB,UAAU;CACV,WAAW;CACX,gBAAgB;CAChB,UAAU;AACX;;AAEA;;CAEC,wCAAwC;CACxC,yBAAyB;CACzB,kBAAkB;CAClB,kBAAkB;CAClB,cAAc;CACd,aAAa;CACb,aAAa;CACb,aAAa;AACd;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,gBAAgB;CAChB,UAAU,EAAE,YAAY;AACzB;;AAEA;CACC,kBAAkB;AACnB;AACA;CACC,WAAW;CACX,UAAU;CACV,uBAAuB;AACxB;;AAEA;CACC,aAAa;CACb,kBAAkB;CAClB,QAAQ;CACR,SAAS;CACT,gCAAgC;CAChC,mBAAmB;CACnB,WAAW;CACX,yBAAyB;CACzB,kBAAkB;CAClB,0BAA0B;CAC1B,6BAA6B;AAC9B;;AAEA;CACC,aAAa;AACd;AACA;CACC,UAAU;CACV,WAAW;CACX,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,6BAA6B;CAC7B,yBAAyB;CACzB,UAAU;CACV,kBAAkB;CAClB,oBAAoB;AACrB;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,eAAe;CACf,UAAU;AACX;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,yBAAyB;CACzB,eAAe;CACf,YAAY;CACZ,kBAAkB;CAClB,WAAW;CACX,6BAA6B;AAC9B;;AAEA;CACC,qBAAqB;CACrB,aAAa;CACb,sBAAsB;CACtB,8BAA8B;CAC9B,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,kBAAkB;CAClB,kBAAkB;CAClB,WAAW;CACX,mBAAmB;AACpB;;AAEA,sFAAsF;AACtF;CACC,mCAAmC;AACpC;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,uBAAuB;CACvB,kBAAkB;CAClB,WAAW;CACX,UAAU;CACV,8BAA8B;AAC/B;;AAEA;CACC,SAAS;AACV;;AAEA;CACC,yBAAyB;AAC1B;AACA;;CAEC,cAAc;CACd,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,wBAAwB;CACxB,kBAAkB;AACnB;;AAEA;CACC;EACC;;sCAEoC;EACpC,MAAM;CACP;CACA;EACC,YAAY;EACZ,uBAAuB;CACxB;CACA;EACC,YAAY;EACZ,uBAAuB;CACxB;AACD;;AAEA;CACC;EACC;;;oBAGkB;EAClB,MAAM;CACP;CACA;EACC,mBAAmB;EACnB,eAAe;EACf,aAAa;CACd;CACA;EACC,mBAAmB;EACnB,aAAa;CACd;AACD","sourcesContent":["@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url('./Roboto-Regular.ttf'), url('./Roboto-Bold.ttf'),\n\t\turl('./Roboto-LightItalic.ttf');\n}\n\nhtml {\n\tbackground-color: #2d3142;\n\tcolor: #fdfffc;\n\tfont-family: Roboto;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'. main .'\n\t\t'. . . ';\n}\n\nbody {\n\tgrid-area: main;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 1fr 1fr;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'sidebar task-panel details-panel'\n\t\t'. . . ';\n\tbackground-color: #2d3142;\n\theight: 100vh;\n\tborder-radius: 1em;\n\tgap: 1em;\n\twidth: max-content;\n\talign-self: center;\n\tjustify-self: center;\n}\n\nh3 {\n\ttext-align: center;\n}\n\n#sidebar {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tgrid-area: sidebar;\n\tbackground-color: #3e88a3;\n\theight: 60vh;\n\tborder-radius: 1em;\n\tpadding: 1em 0.7em 1em 0.5em;\n\tbox-shadow: 1px 1px 2px black;\n\tmargin: 1.5em 1em;\n}\n\n#project-list {\n\tmargin-bottom: auto;\n}\n/* \npadding: 1em;\nbox-shadow: 1px 1px 2px black; */\n\nbutton {\n\tbackground-color: #ffb347;\n\tborder: 0px solid #a54657;\n\tcolor: #2d3142;\n\tborder-radius: 1em;\n\tcursor: pointer;\n}\n.small-btn {\n\tborder-radius: 50%;\n\twidth: 2em;\n\theight: 2em;\n\tfont-size: 0.8em;\n\tpadding: 0;\n}\n\ninput,\nselect {\n\tbackground-color: rgba(255, 255, 255, 0);\n\tborder: 1px solid #fdfffc;\n\tborder-radius: 1em;\n\tpadding: 0.3em 1em;\n\tcolor: #fdfffc;\n\toutline: none;\n\theight: 1.7em;\n\tmargin: 0.5em;\n}\n\noption {\n\tbackground-color: #3e88a3;\n}\n\n::placeholder {\n\tcolor: #fdfffc9c;\n\topacity: 1; /* Firefox */\n}\n\ninput:focus::placeholder {\n\tcolor: transparent;\n}\n#create-task-btn {\n\theight: 2em;\n\twidth: 50%;\n\tmargin: 0 5em 1.2em 5em;\n}\n\n.pop-up {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\theight: max-content;\n\twidth: 20em;\n\tbackground-color: #3e88a3;\n\tborder-radius: 1em;\n\tpadding: 1em 1em 1.5em 2em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n#edit-project-popup {\n\tdisplay: none;\n}\n.pop-up-input {\n\twidth: 80%;\n\theight: 2em;\n\tborder-radius: 1em;\n}\n\n#pop-up-priority-input {\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tborder: 1px solid #fdfffc;\n\twidth: 88%;\n\tmargin-left: 0.4em;\n\tborder-radius: 0.8em;\n}\n\n.pop-up-btns {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-top: 1em;\n\twidth: 90%;\n}\n\n.pop-up-btn {\n\tpadding: 0.4em 1em;\n}\n\n.panel {\n\theight: 60vh;\n\tbackground-color: #a54657;\n\tmargin: 1.5em 0;\n\tpadding: 1em;\n\tborder-radius: 1em;\n\twidth: 20em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n#task-panel {\n\tgrid-area: task-panel;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tmax-width: 16em;\n}\n\n.task-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 2em;\n\talign-items: center;\n}\n\n/* it works if I add the class from the dev tool but doesn't work with classList.add */\ndiv .task-done {\n\tbackground-color: gray I !important;\n}\n\n.task-card:hover {\n\tbackground-color: #b65466;\n}\n\n.project-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin: 0 auto 1em auto;\n\tborder-radius: 1em;\n\theight: 2em;\n\twidth: 80%;\n\tpadding: 0.2em 0.5em 0em 0.5em;\n}\n\n.project-title {\n\tmargin: 0;\n}\n\n.project-card:hover {\n\tbackground-color: #579cb6;\n}\n#quick-add,\n#new-project {\n\tmargin: 0 auto;\n\twhite-space: nowrap;\n}\n\n#details-panel {\n\tdisplay: none;\n\tgrid-area: details-panel;\n\ttext-align: center;\n}\n\n@media (max-width: 1000px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar sidebar task-panel task-panel'\n\t\t\t'. details-panel details-panel .  ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n\t#sidebar {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n}\n\n@media (max-width: 635px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar'\n\t\t\t'task-panel'\n\t\t\t' details-panel ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: max-content;\n\t\tmax-width: 16em;\n\t\tmargin: 1em 0;\n\t}\n\t#sidebar {\n\t\theight: max-content;\n\t\tmargin: 1em 0;\n\t}\n}\n"],"sourceRoot":""}]);
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
		popUp.style.display = 'block';
	} else popUp.style.display = 'none';
	if (title === 'Edit Task') {
		document.getElementById('pop-up-title-input').value =
			_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.title;
		document.getElementById('pop-up-description-input').value =
			_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.description;
		document.getElementById('pop-up-due-date-input').value =
			_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.dueDate;
		document.getElementById('pop-up-priority-input').checked = true;
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
		console.log(index);
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
}

// Creates a task with a title, description, due date and priority
function fullAdd(project) {
	const task = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.createTask)(
		document.getElementById('pop-up-title-input').value,
		document.getElementById('pop-up-description-input').value,
		document.getElementById('pop-up-due-date-input').value,
		document.getElementById('pop-up-priority-input').value,
		undefined
	);
	project.addTask(task);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(project.tasks);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTaskDetails)(task);
}

// Edit the task
function editTask(project) {
	const title = document.getElementById('pop-up-title-input').value;
	const description = document.getElementById('pop-up-description-input').value;
	const dueDate = document.getElementById('pop-up-due-date-input').value;
	const priority = document.getElementById('pop-up-priority-input').value;
	console.log(_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask);
	_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.editTitle(title);
	_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.editDescription(description);
	_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.editDueDate(dueDate);
	_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.editPriority(priority);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(project.tasks);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTaskDetails)(_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask);
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
/* harmony import */ var _icons_edit_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/edit.png */ "./src/icons/edit.png");






const editIcon = new Image();
editIcon.src = _icons_edit_png__WEBPACK_IMPORTED_MODULE_3__;

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
	deleteBtn.textContent = '-';
	editBtn.innerHTML = '<img src="icons/edit.png';
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
	doneBtn.textContent = '✓';
	deleteBtn.textContent = '-';
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
	priority.textContent = task.priority ? `Priority: ${task.priority}` : '';
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

// Creates default "Personal" project if projects array is empty when loading app
if (projects[0] === undefined) {
	(0,_buttons__WEBPACK_IMPORTED_MODULE_2__.newProject)('Personal');
	(0,_buttons__WEBPACK_IMPORTED_MODULE_2__.newProject)('Work');
}

// Recreates all Projects and Tasks with working __proto__ after loading it from localStorage
for (let i = 0; i < projects.length; i++) {
	projects[i] = createProject(projects[i].title, projects[i].tasks);
	for (let a = 0; a < projects[i].tasks.length; a++) {
		projects[i].tasks[a] = (0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			projects[i].tasks[a].title,
			projects[i].tasks[a].description,
			projects[i].tasks[a].dueDate,
			projects[i].tasks[a].priority,
			projects[i].tasks[a].isDone
		);
	}
}

// Defines the active Project
let activeProject;

// Sets Active Project to the first one in projects array
setActiveProject(projects[0]);

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
		isDone: false,
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

/***/ }),

/***/ "./src/icons/edit.png":
/*!****************************!*\
  !*** ./src/icons/edit.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63faa3a32e85ee3a9759.png";

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







// Renders Projects upon loading the app
(0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderProjects)(_project__WEBPACK_IMPORTED_MODULE_2__.projects);

// Renders Tasks upon loading the app
(0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderTasks)(_project__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks);

// Selects the active project and shows it on the Tasks-Panel
(0,_dom__WEBPACK_IMPORTED_MODULE_3__.selectProject)(_project__WEBPACK_IMPORTED_MODULE_2__.activeProject);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCc0I7QUFDYztBQVFqQjtBQUNnRDtBQUM5QjtBQUNPOztBQUU1QztBQUNBLG9EQUFjLENBQUMsOENBQVE7O0FBRXZCO0FBQ0EsaURBQVcsQ0FBQyx5REFBbUI7O0FBRS9CO0FBQ0EsbURBQWEsQ0FBQyxtREFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLUxpZ2h0SXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcblxcdHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSxcXG5cXHRcXHR1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG5odG1sIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzMTQyO1xcblxcdGNvbG9yOiAjZmRmZmZjO1xcblxcdGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdCcuIC4gLidcXG5cXHRcXHQnLiBtYWluIC4nXFxuXFx0XFx0Jy4gLiAuICc7XFxufVxcblxcbmJvZHkge1xcblxcdGdyaWQtYXJlYTogbWFpbjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHQnLiAuIC4nXFxuXFx0XFx0J3NpZGViYXIgdGFzay1wYW5lbCBkZXRhaWxzLXBhbmVsJ1xcblxcdFxcdCcuIC4gLiAnO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyZDMxNDI7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0Z2FwOiAxZW07XFxuXFx0d2lkdGg6IG1heC1jb250ZW50O1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuaDMge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3NpZGViYXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Z3JpZC1hcmVhOiBzaWRlYmFyO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzZTg4YTM7XFxuXFx0aGVpZ2h0OiA2MHZoO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRwYWRkaW5nOiAxZW0gMC43ZW0gMWVtIDAuNWVtO1xcblxcdGJveC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xcblxcdG1hcmdpbjogMS41ZW0gMWVtO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0IHtcXG5cXHRtYXJnaW4tYm90dG9tOiBhdXRvO1xcbn1cXG4vKiBcXG5wYWRkaW5nOiAxZW07XFxuYm94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7ICovXFxuXFxuYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMzQ3O1xcblxcdGJvcmRlcjogMHB4IHNvbGlkICNhNTQ2NTc7XFxuXFx0Y29sb3I6ICMyZDMxNDI7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNtYWxsLWJ0biB7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdHdpZHRoOiAyZW07XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3Qge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZkZmZmYztcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0cGFkZGluZzogMC4zZW0gMWVtO1xcblxcdGNvbG9yOiAjZmRmZmZjO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0aGVpZ2h0OiAxLjdlbTtcXG5cXHRtYXJnaW46IDAuNWVtO1xcbn1cXG5cXG5vcHRpb24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzZTg4YTM7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcblxcdGNvbG9yOiAjZmRmZmZjOWM7XFxuXFx0b3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xcbn1cXG5cXG5pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xcblxcdGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuI2NyZWF0ZS10YXNrLWJ0biB7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRtYXJnaW46IDAgNWVtIDEuMmVtIDVlbTtcXG59XFxuXFxuLnBvcC11cCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1MCU7XFxuXFx0bGVmdDogNTAlO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0d2lkdGg6IDIwZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNlODhhMztcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0cGFkZGluZzogMWVtIDFlbSAxLjVlbSAyZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxufVxcblxcbiNlZGl0LXByb2plY3QtcG9wdXAge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wb3AtdXAtaW5wdXQge1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4jcG9wLXVwLXByaW9yaXR5LWlucHV0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmZGZmZmM7XFxuXFx0d2lkdGg6IDg4JTtcXG5cXHRtYXJnaW4tbGVmdDogMC40ZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC44ZW07XFxufVxcblxcbi5wb3AtdXAtYnRucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0bWFyZ2luLXRvcDogMWVtO1xcblxcdHdpZHRoOiA5MCU7XFxufVxcblxcbi5wb3AtdXAtYnRuIHtcXG5cXHRwYWRkaW5nOiAwLjRlbSAxZW07XFxufVxcblxcbi5wYW5lbCB7XFxuXFx0aGVpZ2h0OiA2MHZoO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNhNTQ2NTc7XFxuXFx0bWFyZ2luOiAxLjVlbSAwO1xcblxcdHBhZGRpbmc6IDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0d2lkdGg6IDIwZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxufVxcblxcbiN0YXNrLXBhbmVsIHtcXG5cXHRncmlkLWFyZWE6IHRhc2stcGFuZWw7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXgtd2lkdGg6IDE2ZW07XFxufVxcblxcbi50YXNrLWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG1hcmdpbi1ib3R0b206IDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogaXQgd29ya3MgaWYgSSBhZGQgdGhlIGNsYXNzIGZyb20gdGhlIGRldiB0b29sIGJ1dCBkb2Vzbid0IHdvcmsgd2l0aCBjbGFzc0xpc3QuYWRkICovXFxuZGl2IC50YXNrLWRvbmUge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGdyYXkgSSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGFzay1jYXJkOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYjY1NDY2O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW46IDAgYXV0byAxZW0gYXV0bztcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRwYWRkaW5nOiAwLjJlbSAwLjVlbSAwZW0gMC41ZW07XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1NzljYjY7XFxufVxcbiNxdWljay1hZGQsXFxuI25ldy1wcm9qZWN0IHtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4jZGV0YWlscy1wYW5lbCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRncmlkLWFyZWE6IGRldGFpbHMtcGFuZWw7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuXFx0Ym9keSB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXHQnc2lkZWJhciBzaWRlYmFyIHRhc2stcGFuZWwgdGFzay1wYW5lbCdcXG5cXHRcXHRcXHQnLiBkZXRhaWxzLXBhbmVsIGRldGFpbHMtcGFuZWwgLiAgJztcXG5cXHRcXHRnYXA6IDA7XFxuXFx0fVxcblxcdC5wYW5lbCB7XFxuXFx0XFx0aGVpZ2h0OiA0MHZoO1xcblxcdFxcdG1heC1oZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdH1cXG5cXHQjc2lkZWJhciB7XFxuXFx0XFx0aGVpZ2h0OiA0MHZoO1xcblxcdFxcdG1heC1oZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYzNXB4KSB7XFxuXFx0Ym9keSB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXHQnc2lkZWJhcidcXG5cXHRcXHRcXHQndGFzay1wYW5lbCdcXG5cXHRcXHRcXHQnIGRldGFpbHMtcGFuZWwgJztcXG5cXHRcXHRnYXA6IDA7XFxuXFx0fVxcblxcdC5wYW5lbCB7XFxuXFx0XFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRcXHRtYXgtd2lkdGg6IDE2ZW07XFxuXFx0XFx0bWFyZ2luOiAxZW0gMDtcXG5cXHR9XFxuXFx0I3NpZGViYXIge1xcblxcdFxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0XFx0bWFyZ2luOiAxZW0gMDtcXG5cXHR9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MscUJBQXFCO0NBQ3JCO3lDQUNnQztBQUNqQzs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYjs7O1VBR1M7QUFDVjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixh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QixhQUFhO0NBQ2Q7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90byc7XFxuXFx0c3JjOiB1cmwoJy4vUm9ib3RvLVJlZ3VsYXIudHRmJyksIHVybCgnLi9Sb2JvdG8tQm9sZC50dGYnKSxcXG5cXHRcXHR1cmwoJy4vUm9ib3RvLUxpZ2h0SXRhbGljLnR0ZicpO1xcbn1cXG5cXG5odG1sIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzMTQyO1xcblxcdGNvbG9yOiAjZmRmZmZjO1xcblxcdGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdCcuIC4gLidcXG5cXHRcXHQnLiBtYWluIC4nXFxuXFx0XFx0Jy4gLiAuICc7XFxufVxcblxcbmJvZHkge1xcblxcdGdyaWQtYXJlYTogbWFpbjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHQnLiAuIC4nXFxuXFx0XFx0J3NpZGViYXIgdGFzay1wYW5lbCBkZXRhaWxzLXBhbmVsJ1xcblxcdFxcdCcuIC4gLiAnO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyZDMxNDI7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0Z2FwOiAxZW07XFxuXFx0d2lkdGg6IG1heC1jb250ZW50O1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuaDMge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3NpZGViYXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Z3JpZC1hcmVhOiBzaWRlYmFyO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzZTg4YTM7XFxuXFx0aGVpZ2h0OiA2MHZoO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRwYWRkaW5nOiAxZW0gMC43ZW0gMWVtIDAuNWVtO1xcblxcdGJveC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xcblxcdG1hcmdpbjogMS41ZW0gMWVtO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0IHtcXG5cXHRtYXJnaW4tYm90dG9tOiBhdXRvO1xcbn1cXG4vKiBcXG5wYWRkaW5nOiAxZW07XFxuYm94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7ICovXFxuXFxuYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMzQ3O1xcblxcdGJvcmRlcjogMHB4IHNvbGlkICNhNTQ2NTc7XFxuXFx0Y29sb3I6ICMyZDMxNDI7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNtYWxsLWJ0biB7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdHdpZHRoOiAyZW07XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3Qge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZkZmZmYztcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0cGFkZGluZzogMC4zZW0gMWVtO1xcblxcdGNvbG9yOiAjZmRmZmZjO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0aGVpZ2h0OiAxLjdlbTtcXG5cXHRtYXJnaW46IDAuNWVtO1xcbn1cXG5cXG5vcHRpb24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzZTg4YTM7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcblxcdGNvbG9yOiAjZmRmZmZjOWM7XFxuXFx0b3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xcbn1cXG5cXG5pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xcblxcdGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuI2NyZWF0ZS10YXNrLWJ0biB7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRtYXJnaW46IDAgNWVtIDEuMmVtIDVlbTtcXG59XFxuXFxuLnBvcC11cCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1MCU7XFxuXFx0bGVmdDogNTAlO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0d2lkdGg6IDIwZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNlODhhMztcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0cGFkZGluZzogMWVtIDFlbSAxLjVlbSAyZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxufVxcblxcbiNlZGl0LXByb2plY3QtcG9wdXAge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wb3AtdXAtaW5wdXQge1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4jcG9wLXVwLXByaW9yaXR5LWlucHV0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmZGZmZmM7XFxuXFx0d2lkdGg6IDg4JTtcXG5cXHRtYXJnaW4tbGVmdDogMC40ZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC44ZW07XFxufVxcblxcbi5wb3AtdXAtYnRucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0bWFyZ2luLXRvcDogMWVtO1xcblxcdHdpZHRoOiA5MCU7XFxufVxcblxcbi5wb3AtdXAtYnRuIHtcXG5cXHRwYWRkaW5nOiAwLjRlbSAxZW07XFxufVxcblxcbi5wYW5lbCB7XFxuXFx0aGVpZ2h0OiA2MHZoO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNhNTQ2NTc7XFxuXFx0bWFyZ2luOiAxLjVlbSAwO1xcblxcdHBhZGRpbmc6IDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0d2lkdGg6IDIwZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxufVxcblxcbiN0YXNrLXBhbmVsIHtcXG5cXHRncmlkLWFyZWE6IHRhc2stcGFuZWw7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXgtd2lkdGg6IDE2ZW07XFxufVxcblxcbi50YXNrLWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG1hcmdpbi1ib3R0b206IDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogaXQgd29ya3MgaWYgSSBhZGQgdGhlIGNsYXNzIGZyb20gdGhlIGRldiB0b29sIGJ1dCBkb2Vzbid0IHdvcmsgd2l0aCBjbGFzc0xpc3QuYWRkICovXFxuZGl2IC50YXNrLWRvbmUge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGdyYXkgSSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGFzay1jYXJkOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYjY1NDY2O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW46IDAgYXV0byAxZW0gYXV0bztcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRwYWRkaW5nOiAwLjJlbSAwLjVlbSAwZW0gMC41ZW07XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1NzljYjY7XFxufVxcbiNxdWljay1hZGQsXFxuI25ldy1wcm9qZWN0IHtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4jZGV0YWlscy1wYW5lbCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRncmlkLWFyZWE6IGRldGFpbHMtcGFuZWw7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuXFx0Ym9keSB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXHQnc2lkZWJhciBzaWRlYmFyIHRhc2stcGFuZWwgdGFzay1wYW5lbCdcXG5cXHRcXHRcXHQnLiBkZXRhaWxzLXBhbmVsIGRldGFpbHMtcGFuZWwgLiAgJztcXG5cXHRcXHRnYXA6IDA7XFxuXFx0fVxcblxcdC5wYW5lbCB7XFxuXFx0XFx0aGVpZ2h0OiA0MHZoO1xcblxcdFxcdG1heC1oZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdH1cXG5cXHQjc2lkZWJhciB7XFxuXFx0XFx0aGVpZ2h0OiA0MHZoO1xcblxcdFxcdG1heC1oZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYzNXB4KSB7XFxuXFx0Ym9keSB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXHQnc2lkZWJhcidcXG5cXHRcXHRcXHQndGFzay1wYW5lbCdcXG5cXHRcXHRcXHQnIGRldGFpbHMtcGFuZWwgJztcXG5cXHRcXHRnYXA6IDA7XFxuXFx0fVxcblxcdC5wYW5lbCB7XFxuXFx0XFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRcXHRtYXgtd2lkdGg6IDE2ZW07XFxuXFx0XFx0bWFyZ2luOiAxZW0gMDtcXG5cXHR9XFxuXFx0I3NpZGViYXIge1xcblxcdFxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0XFx0bWFyZ2luOiAxZW0gMDtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7XG5cdHJlbmRlclByb2plY3RzLFxuXHRyZW5kZXJUYXNrcyxcblx0cmVzZXRUZXh0SW5wdXQsXG5cdGNyZWF0ZURvbUVsZW1lbnQsXG5cdHJlbmRlclRhc2tEZXRhaWxzLFxufSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBoaWRkZW5BY3RpdmVUYXNrLCBjcmVhdGVUYXNrLCBzZXRIaWRkZW5BY3RpdmVUYXNrIH0gZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCB7XG5cdGFjdGl2ZVByb2plY3QsXG5cdHByb2plY3RzLFxuXHRjcmVhdGVQcm9qZWN0LFxuXHRyZW1vdmVQcm9qZWN0LFxuXHRzZXRIaWRkZW5BY3RpdmVQcm9qZWN0LFxuXHRoaWRkZW5BY3RpdmVQcm9qZWN0LFxufSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHsgc2F2ZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcbmV4cG9ydCB7XG5cdG5ld1Byb2plY3QsXG5cdHF1aWNrQWRkLFxuXHRjcmVhdGVDYXJkQnRuLFxuXHRkZWxldGVUYXNrLFxuXHR0b2dnbGVUYXNrRG9uZSxcblx0ZGVsZXRlUHJvamVjdCxcblx0c2hvd0VkaXRQcm9qZWN0UG9wVXAsXG59O1xuXG4vLyBDcmVhdGUgVGFza3MgYnV0dG9uIG9wZW5zIHBvcC11cCBhbmQgYWxsb3dzIGEgZnVsbCB0YXNrIHRvIGJlIGFkZGVkXG5jb25zdCBjcmVhdGVUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS10YXNrLWJ0bicpO1xuY3JlYXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dUYXNrUG9wVXAoJ0NyZWF0ZSBOZXcgVGFzaycpKTtcblxuLy8gUXVpY2tseSBhZGQgYSB0YXNrIHdpdGggb25seSB0aGUgdGl0bGUsIGJ1dCBubyBvdGhlciBpbmZvcm1hdGlvblxuY29uc3QgcXVpY2tBZGRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWljay1hZGQtaW5wdXQnKTtcbmNvbnN0IHF1aWNrQWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aWNrLWFkZC1idG4nKTtcbnF1aWNrQWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcXVpY2tBZGQoYWN0aXZlUHJvamVjdCkpO1xuXG4vLyBBZGQgYSB0YXNrIHdpdGggdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUgZGF0ZSBhbmQgcHJpb3JpdHlcbmNvbnN0IGZ1bGxBZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbC1hZGQtYnRuJyk7XG5mdWxsQWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlT3JFZGl0VGFzayhhY3RpdmVQcm9qZWN0KSk7XG5cbi8vIENhbmNlbCBuZXcvZWRpdCB0YXNrIHBvcC11cFxuY29uc3QgdGFza1BvcFVwQ2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1mdWxsLWFkZC1idG4nKTtcbnRhc2tQb3BVcENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhpZGVQb3BVcCgndGFzay1wb3B1cCcpKTtcbi8vIE9wZW5zIGVkaXQgdGFzayBwb3AtdXBcbmNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGFzay1idG4nKTtcbmVkaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd1Rhc2tQb3BVcCgnRWRpdCBUYXNrJykpO1xuXG4vLyBBZGQgYSBuZXcgUHJvamVjdFxuY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0LWlucHV0Jyk7XG5jb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0LWJ0bicpO1xubmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG5cdG5ld1Byb2plY3QobmV3UHJvamVjdElucHV0LnZhbHVlKVxuKTtcblxuLy8gRWRpdCBwcm9qZWN0IG5hbWVcbmNvbnN0IGVkaXRQcm9qZWN0TmFtZVN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuXHQnZWRpdC1wcm9qZWN0LW5hbWUtc3VibWl0J1xuKTtcbmNvbnN0IGVkaXRQcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdC1uYW1lLWlucHV0Jyk7XG5lZGl0UHJvamVjdE5hbWVTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZWRpdFByb2plY3ROYW1lKGUpKTtcblxuLy8gQ2FuY2VsIGVkaXQgUHJvamVjdCBuYW1lXG5jb25zdCBjYW5jZWxFZGl0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcblx0J2VkaXQtcHJvamVjdC1uYW1lLWNhbmNlbCdcbik7XG5jYW5jZWxFZGl0UHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuXHRoaWRlUG9wVXAoJ2VkaXQtcHJvamVjdC1wb3B1cCcpXG4pO1xuLy8gQ3JlYXRlcyBhIG5ldyBQcm9qZWN0XG5mdW5jdGlvbiBuZXdQcm9qZWN0KHByb2plY3ROYW1lKSB7XG5cdHByb2plY3RzLnB1c2goY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSwgW10pKTtcblx0c2F2ZShwcm9qZWN0cyk7XG5cdHJlbmRlclByb2plY3RzKHByb2plY3RzKTtcblx0cmVzZXRUZXh0SW5wdXQobmV3UHJvamVjdElucHV0KTtcbn1cblxuLy8gVXNlcyBpbnB1dCB0byBlZGl0IHByb2plY3QgbmFtZVxuZnVuY3Rpb24gZWRpdFByb2plY3ROYW1lKGUpIHtcblx0Y29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wcm9qZWN0LW5hbWUtaW5wdXQnKTtcblx0Y29uc29sZS5sb2coaGlkZGVuQWN0aXZlUHJvamVjdCk7XG5cdGhpZGRlbkFjdGl2ZVByb2plY3QuZWRpdE5hbWUoaW5wdXQudmFsdWUpO1xuXHRzYXZlKHByb2plY3RzKTtcblx0cmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuXHRyZXNldFRleHRJbnB1dChpbnB1dCk7XG5cdGhpZGVQb3BVcCgnZWRpdC1wcm9qZWN0LXBvcHVwJyk7XG59XG5cbmZ1bmN0aW9uIGhpZGVQb3BVcChpZCkge1xuXHRjb25zb2xlLmxvZyhpZCk7XG5cdGNvbnN0IHBvcFVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHRjb25zb2xlLmxvZyhwb3BVcCk7XG5cdHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbi8vIENyZWF0ZSBhIGNhcmQuIENhbiBiZSB1c2VkIGZvciBhIHRhc2sgb3IgYSBwcm9qZWN0XG5mdW5jdGlvbiBjcmVhdGVDYXJkQnRuKHR5cGUsIGVsQ2xhc3MsIGZ1bmMpIHtcblx0Y29uc3QgYnV0dG9uID0gY3JlYXRlRG9tRWxlbWVudCh0eXBlLCBlbENsYXNzKTtcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGZ1bmMoZSkpO1xuXHRyZXR1cm4gYnV0dG9uO1xufVxuXG4vLyBNYWtlcyB0aGUgXCJDcmVhdGUgbmV3IHRhc2sgcG9wLXVwXCIgdmlzaWJsZVxuZnVuY3Rpb24gc2hvd1Rhc2tQb3BVcCh0aXRsZSkge1xuXHRjaGFuZ2VQb3BVcFRpdGxlKHRpdGxlKTtcblx0Y29uc3QgcG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1wb3B1cCcpO1xuXHRpZiAocG9wVXAuc3R5bGUuZGlzcGxheSAhPSAnYmxvY2snKSB7XG5cdFx0cG9wVXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdH0gZWxzZSBwb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRpZiAodGl0bGUgPT09ICdFZGl0IFRhc2snKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC10aXRsZS1pbnB1dCcpLnZhbHVlID1cblx0XHRcdGhpZGRlbkFjdGl2ZVRhc2sudGl0bGU7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC1kZXNjcmlwdGlvbi1pbnB1dCcpLnZhbHVlID1cblx0XHRcdGhpZGRlbkFjdGl2ZVRhc2suZGVzY3JpcHRpb247XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC1kdWUtZGF0ZS1pbnB1dCcpLnZhbHVlID1cblx0XHRcdGhpZGRlbkFjdGl2ZVRhc2suZHVlRGF0ZTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLXByaW9yaXR5LWlucHV0JykuY2hlY2tlZCA9IHRydWU7XG5cdH1cbn1cblxuLy8gQ2hhbmdlIHBvcC11cCB0aXRsZVxuXG5mdW5jdGlvbiBjaGFuZ2VQb3BVcFRpdGxlKG5ld1RpdGxlKSB7XG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC10aXRsZScpO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9IG5ld1RpdGxlO1xufVxuLy8gTWFrZXMgdGhlIFwiQ3JlYXRlIGVkaXQgcHJvamVjdCBwb3AtdXBcIiB2aXNpYmxlXG5mdW5jdGlvbiBzaG93RWRpdFByb2plY3RQb3BVcChlKSB7XG5cdGNvbnN0IHBvcFVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdC1wb3B1cCcpO1xuXHRpZiAocG9wVXAuc3R5bGUuZGlzcGxheSAhPSAnYmxvY2snKSB7XG5cdFx0Y29uc3QgaW5kZXggPSBlLnBhdGhbMF0uZGF0YXNldC5lZGl0UHJvamVjdEJ0bjtcblx0XHRjb25zb2xlLmxvZyhpbmRleCk7XG5cdFx0cG9wVXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0c2V0SGlkZGVuQWN0aXZlUHJvamVjdChwcm9qZWN0c1tpbmRleF0pO1xuXHRcdGNvbnNvbGUubG9nKHByb2plY3RzW2luZGV4XSk7XG5cdH0gZWxzZSBwb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG4vLyBEZWxldGVzIGEgdGhlIHJlbGF0aXZlIHRhc2tcbmZ1bmN0aW9uIGRlbGV0ZVRhc2soZSkge1xuXHRjb25zdCBpbmRleCA9IGUucGF0aFswXS5kYXRhc2V0LmRlbGV0ZUJ0bjtcblx0YWN0aXZlUHJvamVjdC5yZW1vdmVUYXNrKGFjdGl2ZVByb2plY3QudGFza3NbaW5kZXhdKTtcblx0cmVuZGVyVGFza3MoYWN0aXZlUHJvamVjdC50YXNrcyk7XG5cdHNhdmUocHJvamVjdHMpO1xufVxuXG4vLyBEZWxldGVzIHRoZSByZWxhdGl2ZSBQcm9qZWN0XG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcblx0Y29uc3QgaW5kZXggPSBlLnBhdGhbMF0uZGF0YXNldC5kZWxldGVQcm9qZWN0QnRuO1xuXHRjb25zb2xlLmxvZyhpbmRleCk7XG5cdHJlbW92ZVByb2plY3QoaW5kZXgpO1xuXHRzYXZlKHByb2plY3RzKTtcblx0cmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuXHRyZW5kZXJUYXNrcyhhY3RpdmVQcm9qZWN0LnRhc2tzKTtcbn1cblxuLy8gTk9UIFdPUktJTkcgWUVULiBUb2dnbGVzIGEgdGFzayBhcyBcIkRvbmVcIlxuZnVuY3Rpb24gdG9nZ2xlVGFza0RvbmUoZSkge1xuXHRjb25zdCBpbmRleCA9IGUucGF0aFswXS5kYXRhc2V0LmRvbmVCdG47XG5cdGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS10YXNrPVwiJHtpbmRleH1cIl1gKTtcblx0YWN0aXZlUHJvamVjdC50YXNrc1tpbmRleF0udG9nZ2xlRG9uZSgpO1xuXHRjb25zb2xlLmxvZyhhY3RpdmVQcm9qZWN0LnRhc2tzW2luZGV4XS5pc0RvbmUpO1xuXHRhY3RpdmVQcm9qZWN0LnRhc2tzW2luZGV4XS5pc0RvbmVcblx0XHQ/IHRhc2suY2xhc3NMaXN0LmFkZCgndGFzay1kb25lJylcblx0XHQ6IHRhc2suY2xhc3NMaXN0LnJlbW92ZSgndGFzay1kb25lJyk7XG5cdGNvbnNvbGUubG9nKHRhc2spO1xuXHRjb25zb2xlLmxvZyhhY3RpdmVQcm9qZWN0LnRhc2tzW2luZGV4XS5pc0RvbmUpO1xuXHRyZW5kZXJUYXNrcyhhY3RpdmVQcm9qZWN0LnRhc2tzKTtcblx0c2F2ZShwcm9qZWN0cyk7XG59XG5cbi8vIFVzZSBxdWlja0FkZCB0ZXh0IGlucHV0IHRvIGNyZWF0ZSBhIG5ldyB0YXNrIHdpdGggb25seSBhIHRpdGxlXG5mdW5jdGlvbiBxdWlja0FkZChwcm9qZWN0KSB7XG5cdGlmIChxdWlja0FkZElucHV0LnZhbHVlICE9PSAnJykge1xuXHRcdGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKFxuXHRcdFx0cXVpY2tBZGRJbnB1dC52YWx1ZSxcblx0XHRcdCdObyBkZXNjcmlwdGlvbiBkZWZpbmVkJyxcblx0XHRcdCdObyBkdWUgZGF0ZSBkZWZpbmVkJyxcblx0XHRcdCdObyBwcmlvcml0eSBkZWZpbmVkJyxcblx0XHRcdHVuZGVmaW5lZFxuXHRcdCk7XG5cdFx0cHJvamVjdC5hZGRUYXNrKHRhc2spO1xuXHRcdHNhdmUocHJvamVjdHMpO1xuXHRcdHJlbmRlclRhc2tzKHByb2plY3QudGFza3MpO1xuXHRcdHJlc2V0VGV4dElucHV0KHF1aWNrQWRkSW5wdXQpO1xuXHR9XG59XG5cbi8vIERlY2lkZWRzIHRvIGNyZWF0ZSBhIG5ldyB0YXNrIG9yIGVkaXQgYW4gZXhpc3Rpbmcgb25lXG5mdW5jdGlvbiBjcmVhdGVPckVkaXRUYXNrKHByb2plY3QpIHtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLXRpdGxlJykudGV4dENvbnRlbnQ7XG5cdHRpdGxlID09PSAnQ3JlYXRlIE5ldyBUYXNrJyA/IGZ1bGxBZGQocHJvamVjdCkgOiBlZGl0VGFzayhwcm9qZWN0KTtcblx0aGlkZVBvcFVwKCd0YXNrLXBvcHVwJyk7XG59XG5cbi8vIENyZWF0ZXMgYSB0YXNrIHdpdGggYSB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSBkYXRlIGFuZCBwcmlvcml0eVxuZnVuY3Rpb24gZnVsbEFkZChwcm9qZWN0KSB7XG5cdGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUtaW5wdXQnKS52YWx1ZSxcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWRlc2NyaXB0aW9uLWlucHV0JykudmFsdWUsXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC1kdWUtZGF0ZS1pbnB1dCcpLnZhbHVlLFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtcHJpb3JpdHktaW5wdXQnKS52YWx1ZSxcblx0XHR1bmRlZmluZWRcblx0KTtcblx0cHJvamVjdC5hZGRUYXNrKHRhc2spO1xuXHRzYXZlKHByb2plY3RzKTtcblx0cmVuZGVyVGFza3MocHJvamVjdC50YXNrcyk7XG5cdHJlbmRlclRhc2tEZXRhaWxzKHRhc2spO1xufVxuXG4vLyBFZGl0IHRoZSB0YXNrXG5mdW5jdGlvbiBlZGl0VGFzayhwcm9qZWN0KSB7XG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC10aXRsZS1pbnB1dCcpLnZhbHVlO1xuXHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZGVzY3JpcHRpb24taW5wdXQnKS52YWx1ZTtcblx0Y29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZHVlLWRhdGUtaW5wdXQnKS52YWx1ZTtcblx0Y29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLXByaW9yaXR5LWlucHV0JykudmFsdWU7XG5cdGNvbnNvbGUubG9nKGhpZGRlbkFjdGl2ZVRhc2spO1xuXHRoaWRkZW5BY3RpdmVUYXNrLmVkaXRUaXRsZSh0aXRsZSk7XG5cdGhpZGRlbkFjdGl2ZVRhc2suZWRpdERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKTtcblx0aGlkZGVuQWN0aXZlVGFzay5lZGl0RHVlRGF0ZShkdWVEYXRlKTtcblx0aGlkZGVuQWN0aXZlVGFzay5lZGl0UHJpb3JpdHkocHJpb3JpdHkpO1xuXHRzYXZlKHByb2plY3RzKTtcblx0cmVuZGVyVGFza3MocHJvamVjdC50YXNrcyk7XG5cdHJlbmRlclRhc2tEZXRhaWxzKGhpZGRlbkFjdGl2ZVRhc2spO1xufVxuIiwiZXhwb3J0IHtcblx0cmVuZGVyUHJvamVjdHMsXG5cdHJlbmRlclRhc2tzLFxuXHRzZWxlY3RQcm9qZWN0LFxuXHRyZXNldFRleHRJbnB1dCxcblx0Y3JlYXRlRG9tRWxlbWVudCxcblx0cmVuZGVyVGFza0RldGFpbHMsXG59O1xuaW1wb3J0IHsgc2V0QWN0aXZlUHJvamVjdCwgcHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHtcblx0Y3JlYXRlQ2FyZEJ0bixcblx0ZGVsZXRlVGFzayxcblx0dG9nZ2xlVGFza0RvbmUsXG5cdGRlbGV0ZVByb2plY3QsXG5cdHNob3dFZGl0UHJvamVjdFBvcFVwLFxufSBmcm9tICcuL2J1dHRvbnMnO1xuaW1wb3J0IHsgaGlkZGVuQWN0aXZlVGFzaywgc2V0SGlkZGVuQWN0aXZlVGFzayB9IGZyb20gJy4vdGFzayc7XG5pbXBvcnQgZWRpdCBmcm9tICcuL2ljb25zL2VkaXQucG5nJztcblxuY29uc3QgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbmVkaXRJY29uLnNyYyA9IGVkaXQ7XG5cbi8vIEFzc2lnbiBEYXRhc2V0IHRvIFByb2plY3QgQ2FyZFxuZnVuY3Rpb24gYXNzaWduUHJvamVjdERhdGFJbmRleChpbmRleCwgY2FyZCwgZWRpdEJ0biwgZGVsZXRlQnRuKSB7XG5cdGNhcmQuZGF0YXNldC5wcm9qZWN0ID0gaW5kZXg7XG5cdGRlbGV0ZUJ0bi5kYXRhc2V0LmRlbGV0ZVByb2plY3RCdG4gPSBpbmRleDtcblx0ZWRpdEJ0bi5kYXRhc2V0LmVkaXRQcm9qZWN0QnRuID0gaW5kZXg7XG59XG5cbi8vIENyZWF0ZSBhIFByb2plY3QgQ2FyZFxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCkge1xuXHRjb25zdCBpbmRleCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWxpc3QnKS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuXHRjb25zdCBjYXJkID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgJ3Byb2plY3QtY2FyZCcpO1xuXHRjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVDYXJkQnRuKCdidXR0b24nLCAnc21hbGwtYnRuJywgZGVsZXRlUHJvamVjdCk7XG5cdGNvbnN0IHRpdGxlID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgJ3Byb2plY3QtdGl0bGUnKTtcblx0Y29uc3QgZWRpdEJ0biA9IGNyZWF0ZUNhcmRCdG4oJ2J1dHRvbicsICdzbWFsbC1idG4nLCBzaG93RWRpdFByb2plY3RQb3BVcCk7XG5cdGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICctJztcblx0ZWRpdEJ0bi5pbm5lckhUTUwgPSAnPGltZyBzcmM9XCJpY29ucy9lZGl0LnBuZyc7XG5cdHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblx0YXBwZW5kVG9QYXJlbnQoY2FyZCwgZWRpdEJ0biwgdGl0bGUsIGRlbGV0ZUJ0bik7XG5cdGFzc2lnblByb2plY3REYXRhSW5kZXgoaW5kZXgsIGNhcmQsIGVkaXRCdG4sIGRlbGV0ZUJ0bik7XG5cdGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0cmVuZGVyQWN0aXZlUHJvamVjdChwcm9qZWN0KTtcblx0fSk7XG5cdHJldHVybiBjYXJkO1xufVxuXG4vLyBBcHBlbmRzIFByb2plY3QgQ2FyZCB0byBQcm9qZWN0IExpc3RcbmZ1bmN0aW9uIGFwcGVuZFByb2plY3QocHJvamVjdCkge1xuXHRjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbGlzdCcpO1xuXHRjb25zdCBjYXJkID0gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCk7XG5cdGxpc3QuYXBwZW5kQ2hpbGQoY2FyZCk7XG59XG5cbi8vIEFwcGVuZHMgYWxsIFByb2plY3QgQ2FyZCB0byBQcm9qZWN0IExpc3RcbmZ1bmN0aW9uIGFwcGVuZEFsbFByb2plY3RzKHByb2plY3QpIHtcblx0cHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4gYXBwZW5kUHJvamVjdChwcm9qZWN0KSk7XG59XG5cbi8vIFJlbmRlcnMgUHJvamVjdHNcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKHByb2plY3RzKSB7XG5cdHJlc2V0RWxlbWVudHMoJy5wcm9qZWN0LWNhcmQnKTtcblx0YXBwZW5kQWxsUHJvamVjdHMoKTtcbn1cblxuLy8gUmVuZGVycyB0aGUgYWN0aXZlIHByb2plY3RzIHRhc2tzXG5mdW5jdGlvbiByZW5kZXJBY3RpdmVQcm9qZWN0KHByb2plY3QpIHtcblx0c2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KTtcblx0c2VsZWN0UHJvamVjdChwcm9qZWN0KTtcblx0cmVuZGVyVGFza3MocHJvamVjdC50YXNrcyk7XG59XG5cbi8vIFJlbmRlcnMgdGhlIGFjdGl2ZSBwcm9qZWN0c1xuZnVuY3Rpb24gc2VsZWN0UHJvamVjdChwcm9qZWN0KSB7XG5cdGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJyk7XG5cdHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG59XG5cbi8vIEFzc2lnbnMgZGF0YXNldCB0byB0YXNrIGNhcmRcbmZ1bmN0aW9uIGFzc2lnblRhc2tEYXRhSW5kZXgoaW5kZXgsIGNhcmQsIGRvbmVCdG4sIGRlbGV0ZUJ0bikge1xuXHRjYXJkLmRhdGFzZXQudGFzayA9IGluZGV4O1xuXHRkb25lQnRuLmRhdGFzZXQuZG9uZUJ0biA9IGluZGV4O1xuXHRkZWxldGVCdG4uZGF0YXNldC5kZWxldGVCdG4gPSBpbmRleDtcbn1cblxuLy8gQ3JlYXRlIGEgbmV3IFRhc2sgQ2FyZFxuZnVuY3Rpb24gY3JlYXRlVGFza0NhcmQodGFzaykge1xuXHRjb25zdCBpbmRleCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWxpc3QnKS5jaGlsZHJlbi5sZW5ndGggLSAyO1xuXHRjb25zdCBjYXJkID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgJ3Rhc2stY2FyZCcpO1xuXHRjb25zdCBkb25lQnRuID0gY3JlYXRlQ2FyZEJ0bignYnV0dG9uJywgJ3NtYWxsLWJ0bicsIHRvZ2dsZVRhc2tEb25lKTtcblx0Y29uc3QgZGVsZXRlQnRuID0gY3JlYXRlQ2FyZEJ0bignYnV0dG9uJywgJ3NtYWxsLWJ0bicsIGRlbGV0ZVRhc2spO1xuXHRjb25zdCB0aXRsZSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsICd0YXNrLXRpdGxlJyk7XG5cdGRvbmVCdG4udGV4dENvbnRlbnQgPSAn4pyTJztcblx0ZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJy0nO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdGFwcGVuZFRvUGFyZW50KGNhcmQsIGRvbmVCdG4sIHRpdGxlLCBkZWxldGVCdG4pO1xuXHRhc3NpZ25UYXNrRGF0YUluZGV4KGluZGV4LCBjYXJkLCBkb25lQnRuLCBkZWxldGVCdG4pO1xuXHRjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyVGFza0RldGFpbHModGFzaykpO1xuXHRyZXR1cm4gY2FyZDtcbn1cblxuLy8gQXBwZW5kIGEgdGFzayBjYXJkXG5mdW5jdGlvbiBhcHBlbmRUYXNrKHRhc2spIHtcblx0Y29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWxpc3QnKTtcblx0Y29uc3QgY2FyZCA9IGNyZWF0ZVRhc2tDYXJkKHRhc2spO1xuXHRsaXN0LmFwcGVuZENoaWxkKGNhcmQpO1xufVxuXG4vLyBBcHBlbmQgYWxsIHRhc2sgY2FyZHNcbmZ1bmN0aW9uIGFwcGVuZEFsbFRhc2tzKHRhc2tzKSB7XG5cdHRhc2tzLmZvckVhY2goKHRhc2spID0+IGFwcGVuZFRhc2sodGFzaykpO1xufVxuXG4vLyBSZW5kZXJzIFByb2plY3RzXG5mdW5jdGlvbiByZW5kZXJUYXNrcyh0YXNrcykge1xuXHRyZXNldEVsZW1lbnRzKCcudGFzay1jYXJkJyk7XG5cdGFwcGVuZEFsbFRhc2tzKHRhc2tzKTtcbn1cblxuLy8gUmVuZGVycyBUYXNrIERldGFpbHMgb24gZGV0YWlscyBwYW5lbFxuZnVuY3Rpb24gcmVuZGVyVGFza0RldGFpbHModGFzaykge1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLXRpdGxlJyk7XG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtZGVzY3JpcHRpb24nKTtcblx0Y29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLWR1ZS1kYXRlJyk7XG5cdGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtcHJpb3JpdHknKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtcGFuZWwnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0Y29uc29sZS5sb2coJ2hlbGxvJyk7XG5cdHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblx0ZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uID8gYCR7dGFzay5kZXNjcmlwdGlvbn1gIDogJyc7XG5cdGR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGUgPyBgRHVlIERhdGU6ICR7dGFzay5kdWVEYXRlfWAgOiAnJztcblx0cHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5ID8gYFByaW9yaXR5OiAke3Rhc2sucHJpb3JpdHl9YCA6ICcnO1xuXHRzZXRIaWRkZW5BY3RpdmVUYXNrKHRhc2spO1xufVxuXG4vLyBBcHBlbmRzIG11bHRpcGxlIGVsZW1lbnRzIHRvIGEgZGl2XG5mdW5jdGlvbiBhcHBlbmRUb1BhcmVudChwYXJlbnQsIC4uLmFyZ3MpIHtcblx0YXJncy5mb3JFYWNoKChhcmcpID0+IHBhcmVudC5hcHBlbmRDaGlsZChhcmcpKTtcbn1cblxuLy8gQ3JlYXRlIGEgRE9NIGVsZW1lbnQgd2l0aCByZWxhdGl2ZSBjbGFzc1xuZnVuY3Rpb24gY3JlYXRlRG9tRWxlbWVudCh0eXBlLCBlbENsYXNzKSB7XG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG5cdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtlbENsYXNzfWApO1xuXHRyZXR1cm4gZWxlbWVudDtcbn1cblxuLy8gUmVzZXRzIGFsbCBlbGVtZW50cyB3aXRoIGEgY2VydGFpbiBjbGFzc1xuZnVuY3Rpb24gcmVzZXRFbGVtZW50cyhlbENsYXNzKSB7XG5cdGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxDbGFzcyk7XG5cdGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQucmVtb3ZlKCkpO1xufVxuXG4vLyBSZXNldHMgdGV4dCBpbnB1dFxuZnVuY3Rpb24gcmVzZXRUZXh0SW5wdXQoLi4uYXJncykge1xuXHRhcmdzLmZvckVhY2goKGFyZykgPT4gKGFyZy52YWx1ZSA9ICcnKSk7XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgY3JlYXRlUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5leHBvcnQgeyBzYXZlLCBsb2FkIH07XG5cbi8vIFNhdmVzIHRvIGxvY2FsU3RvcmFnZVxuZnVuY3Rpb24gc2F2ZShwcm9qZWN0cykge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG4vLyBMb2FkcyBmcm9tIGxvY2FsU3RvcmFnZVxuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG5cdHJldHVybiBwcm9qZWN0cyA9PT0gbnVsbCA/IFtdIDogcHJvamVjdHM7XG59XG4iLCJleHBvcnQge1xuXHRhY3RpdmVQcm9qZWN0LFxuXHRoaWRkZW5BY3RpdmVQcm9qZWN0LFxuXHRwcm9qZWN0cyxcblx0Y3JlYXRlUHJvamVjdCxcblx0c2V0QWN0aXZlUHJvamVjdCxcblx0c2V0SGlkZGVuQWN0aXZlUHJvamVjdCxcblx0cmVtb3ZlUHJvamVjdCxcbn07XG5pbXBvcnQgeyBsb2FkIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gJy4vdGFzayc7XG5pbXBvcnQgeyBuZXdQcm9qZWN0IH0gZnJvbSAnLi9idXR0b25zJztcblxuLy8gUHJvamVjdCBGYWN0b3J5IEZ1bmN0aW9uXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCB0YXNrcykge1xuXHRjb25zdCBwcm90byA9IHtcblx0XHRhZGRUYXNrOiBmdW5jdGlvbiAodGFzaykge1xuXHRcdFx0dGhpcy50YXNrcy5wdXNoKHRhc2spO1xuXHRcdH0sXG5cblx0XHRyZW1vdmVUYXNrOiBmdW5jdGlvbiAodGFzaykge1xuXHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLnRhc2tzLmluZGV4T2YodGFzayk7XG5cdFx0XHR0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fSxcblx0XHRlZGl0TmFtZTogZnVuY3Rpb24gKG5ld1RpdGxlKSB7XG5cdFx0XHR0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG5cdFx0fSxcblx0fTtcblx0Y29uc3QgcHJvamVjdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShwcm90byksIHtcblx0XHR0aXRsZSxcblx0XHR0YXNrcyxcblx0fSk7XG5cdHJldHVybiBwcm9qZWN0O1xufVxuXG4vLyBTZXRzIHRoZSBBY3RpdmUgUHJvamVjdFxuZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XG5cdGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0O1xufVxuLy8gUmVtb3ZlcyBwcm9qZWN0IGZyb20gUHJvamVjdHMgYXJyYXlcbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QoaW5kZXgpIHtcblx0cHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuLy8gTG9hZHMgbG9jYWxTdG9yYWdlXG5sZXQgcHJvamVjdHMgPSBsb2FkKCk7XG5cbi8vIENyZWF0ZXMgZGVmYXVsdCBcIlBlcnNvbmFsXCIgcHJvamVjdCBpZiBwcm9qZWN0cyBhcnJheSBpcyBlbXB0eSB3aGVuIGxvYWRpbmcgYXBwXG5pZiAocHJvamVjdHNbMF0gPT09IHVuZGVmaW5lZCkge1xuXHRuZXdQcm9qZWN0KCdQZXJzb25hbCcpO1xuXHRuZXdQcm9qZWN0KCdXb3JrJyk7XG59XG5cbi8vIFJlY3JlYXRlcyBhbGwgUHJvamVjdHMgYW5kIFRhc2tzIHdpdGggd29ya2luZyBfX3Byb3RvX18gYWZ0ZXIgbG9hZGluZyBpdCBmcm9tIGxvY2FsU3RvcmFnZVxuZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRwcm9qZWN0c1tpXSA9IGNyZWF0ZVByb2plY3QocHJvamVjdHNbaV0udGl0bGUsIHByb2plY3RzW2ldLnRhc2tzKTtcblx0Zm9yIChsZXQgYSA9IDA7IGEgPCBwcm9qZWN0c1tpXS50YXNrcy5sZW5ndGg7IGErKykge1xuXHRcdHByb2plY3RzW2ldLnRhc2tzW2FdID0gY3JlYXRlVGFzayhcblx0XHRcdHByb2plY3RzW2ldLnRhc2tzW2FdLnRpdGxlLFxuXHRcdFx0cHJvamVjdHNbaV0udGFza3NbYV0uZGVzY3JpcHRpb24sXG5cdFx0XHRwcm9qZWN0c1tpXS50YXNrc1thXS5kdWVEYXRlLFxuXHRcdFx0cHJvamVjdHNbaV0udGFza3NbYV0ucHJpb3JpdHksXG5cdFx0XHRwcm9qZWN0c1tpXS50YXNrc1thXS5pc0RvbmVcblx0XHQpO1xuXHR9XG59XG5cbi8vIERlZmluZXMgdGhlIGFjdGl2ZSBQcm9qZWN0XG5sZXQgYWN0aXZlUHJvamVjdDtcblxuLy8gU2V0cyBBY3RpdmUgUHJvamVjdCB0byB0aGUgZmlyc3Qgb25lIGluIHByb2plY3RzIGFycmF5XG5zZXRBY3RpdmVQcm9qZWN0KHByb2plY3RzWzBdKTtcblxuLy8gSGlkZGVuIGFjdGl2ZSBwcm9qZWN0XG5cbmxldCBoaWRkZW5BY3RpdmVQcm9qZWN0O1xuXG4vLyBTZXRzIHRoZSBIaWRkZW4gYWN0aXZlIHByb2plY3QgKG5lZWRlZCB0byBlZGl0IHByb2plY3QpXG5cbmZ1bmN0aW9uIHNldEhpZGRlbkFjdGl2ZVByb2plY3QocHJvamVjdCkge1xuXHRoaWRkZW5BY3RpdmVQcm9qZWN0ID0gcHJvamVjdDtcbn1cbiIsImV4cG9ydCB7IGhpZGRlbkFjdGl2ZVRhc2ssIGNyZWF0ZVRhc2ssIHNldEhpZGRlbkFjdGl2ZVRhc2sgfTtcblxuLy8gVGFzayBGYWN0b3J5IEZ1bmN0aW9uXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzRG9uZSkge1xuXHRjb25zdCBwcm90byA9IHtcblx0XHRlZGl0VGl0bGU6IGZ1bmN0aW9uIChuZXdUaXRsZSkge1xuXHRcdFx0dGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuXHRcdH0sXG5cdFx0ZWRpdERlc2NyaXB0aW9uOiBmdW5jdGlvbiAobmV3RGVzY3JpcHRpb24pIHtcblx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcblx0XHR9LFxuXHRcdGVkaXREdWVEYXRlOiBmdW5jdGlvbiAobmV3RHVlRGF0ZSkge1xuXHRcdFx0dGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcblx0XHR9LFxuXHRcdGVkaXRQcmlvcml0eTogZnVuY3Rpb24gKG5ld1ByaW9yaXR5KSB7XG5cdFx0XHR0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG5cdFx0fSxcblx0XHR0b2dnbGVEb25lOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLmlzRG9uZSA9ICF0aGlzLmlzRG9uZTtcblx0XHR9LFxuXHR9O1xuXHRjb25zdCB0YXNrID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKHByb3RvKSwge1xuXHRcdHRpdGxlLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGR1ZURhdGUsXG5cdFx0cHJpb3JpdHksXG5cdFx0aXNEb25lOiBmYWxzZSxcblx0fSk7XG5cdHJldHVybiB0YXNrO1xufVxuXG4vLyBIaWRkZW4gYWN0aXZlIHRhc2tcblxubGV0IGhpZGRlbkFjdGl2ZVRhc2s7XG5cbi8vIFNldHMgdGhlIEhpZGRlbiB0YXNrIHByb2plY3QgKG5lZWRlZCB0byBlZGl0IHRhc2spXG5cbmZ1bmN0aW9uIHNldEhpZGRlbkFjdGl2ZVRhc2sodGFzaykge1xuXHRoaWRkZW5BY3RpdmVUYXNrID0gdGFzaztcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gJy4vdGFzayc7XG5pbXBvcnQge1xuXHRhY3RpdmVQcm9qZWN0LFxuXHRwcm9qZWN0cyxcblx0c2V0QWN0aXZlUHJvamVjdCxcblx0Y3JlYXRlUHJvamVjdCxcblx0cGVyc29uYWwsXG5cdHdvcmssXG59IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyByZW5kZXJUYXNrcywgcmVuZGVyUHJvamVjdHMsIHNlbGVjdFByb2plY3QgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBxdWlja0FkZCB9IGZyb20gJy4vYnV0dG9ucyc7XG5pbXBvcnQgeyBzYXZlLCBsb2FkIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuXG4vLyBSZW5kZXJzIFByb2plY3RzIHVwb24gbG9hZGluZyB0aGUgYXBwXG5yZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG5cbi8vIFJlbmRlcnMgVGFza3MgdXBvbiBsb2FkaW5nIHRoZSBhcHBcbnJlbmRlclRhc2tzKGFjdGl2ZVByb2plY3QudGFza3MpO1xuXG4vLyBTZWxlY3RzIHRoZSBhY3RpdmUgcHJvamVjdCBhbmQgc2hvd3MgaXQgb24gdGhlIFRhc2tzLVBhbmVsXG5zZWxlY3RQcm9qZWN0KGFjdGl2ZVByb2plY3QpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9