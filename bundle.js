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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "),\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\nhtml {\n\tbackground-color: #2d3142;\n\tcolor: #fdfffc;\n\tfont-family: Roboto;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'. main .'\n\t\t'. . . ';\n\tscrollbar-color: #ffb855 #2d314249;\n\tscrollbar-width: 0.3em;\n}\n\nbody {\n\tgrid-area: main;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'sidebar task-panel details-panel'\n\t\t'. . . ';\n\tbackground-color: #2d3142;\n\theight: 98vh;\n\tborder-radius: 1em;\n\tgap: 1em;\n\twidth: max-content;\n\talign-self: center;\n\tjustify-self: center;\n}\n\nh3 {\n\ttext-align: center;\n}\n\n#sidebar {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tgrid-area: sidebar;\n\tbackground-color: #3e88a3;\n\theight: 60vh;\n\tborder-radius: 1em;\n\tpadding: 0.2em 1em 0.1em 1em;\n\tbox-shadow: 1px 1px 2px black;\n\tmargin: 1.5em 1em;\n}\n\nbutton {\n\tbackground-color: #ffb347;\n\tborder: 0px solid #a54657;\n\tcolor: #2d3142;\n\tborder-radius: 1em;\n\tcursor: pointer;\n}\n.small-btn {\n\tborder-radius: 50%;\n\twidth: 2em;\n\theight: 2em;\n\tfont-size: 0.8em;\n\tpadding: 0;\n}\n.pop-up-btns {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-top: 1em;\n\twidth: 90%;\n}\n\n.pop-up-btn {\n\tpadding: 0.4em 1em;\n}\n\n#create-task-btn {\n\theight: 2em;\n\twidth: 50%;\n\tmargin: -1em 5em 1.2em 5em;\n}\n\n#edit-task-btn {\n\theight: 2em;\n\tpadding: 0 1.5em 0 1.5em;\n}\n\ntextarea,\ninput,\nselect {\n\tbackground-color: rgba(255, 255, 255, 0);\n\tborder: 1px solid #fdfffc;\n\tborder-radius: 1em;\n\tpadding: 0.3em 1em;\n\tcolor: #fdfffc;\n\toutline: none;\n\theight: 1.7em;\n\tmargin: 0.5em;\n\tresize: none;\n}\n\noption {\n\tbackground-color: #3e88a3;\n}\n\n::placeholder {\n\tcolor: #fdfffc9c;\n\topacity: 1; /* Firefox */\n}\n\ninput:focus::placeholder {\n\tcolor: transparent;\n}\n\n#new-project-input,\n#quick-add-input {\n\tmargin-bottom: 0.3em;\n}\n.pop-up-input {\n\twidth: 80%;\n\theight: 2em;\n\tborder-radius: 1em;\n}\n\n#pop-up-description-input {\n\theight: 6em;\n\tpadding: 1em;\n}\n\n#pop-up-priority-input {\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tborder: 1px solid #fdfffc;\n\twidth: 88%;\n\tmargin-left: 0.4em;\n\tborder-radius: 0.8em;\n}\n\n#priority-label-one {\n\tcolor: rgb(19, 90, 19);\n}\n#priority-label-two {\n\tcolor: #ffb247;\n}\n#priority-label-three {\n\tcolor: rgb(141, 0, 0);\n}\n\n.pop-up {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\theight: max-content;\n\twidth: 20em;\n\tbackground-color: #3e88a3;\n\tborder-radius: 1em;\n\tpadding: 1em 1em 1.5em 2em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n.errors {\n\tfont-weight: bold;\n\tcolor: #ffb347;\n\tmargin-bottom: 1em;\n}\n.quick-add-errors {\n\tfont-weight: bold;\n\tcolor: #ffb347;\n\theight: 1.5em;\n\tmargin: 0;\n\tpadding: 0;\n\tposition: relative;\n\tleft: 1em;\n}\n\n#edit-project-popup {\n\tdisplay: none;\n}\n\n.priority-label {\n\tposition: relative;\n\tbottom: 5px;\n}\n\n.panel {\n\theight: 60vh;\n\tbackground-color: #a54657;\n\tmargin: 1.5em 0;\n\tpadding: 0.2em 1em 0.1em 1em;\n\tborder-radius: 1em;\n\twidth: 20em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n#task-panel {\n\tgrid-area: task-panel;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tmax-width: 16em;\n}\n.panel-title {\n\tmargin: 1em 0.7em 0.7em 0.7em;\n}\n#details-panel-wrapper {\n\tgrid-area: details-panel;\n\twidth: 20em;\n}\n#details-panel {\n\tdisplay: none;\n\ttext-align: center;\n}\n#internal-details-panel {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-height: 100%;\n}\n\n#details-title {\n\tmargin-top: 0;\n}\n#details-description {\n\tmax-height: 22em;\n\toverflow: auto;\n\tmargin-bottom: 1em;\n}\n#details-due-date,\n#details-priority {\n\tfont-weight: bold;\n}\n\n#task-details-list,\n#task-list,\n#project-list {\n\toverflow: auto;\n\tmargin-bottom: auto;\n\tmargin-right: -0.3em;\n\tpadding-right: 0.3em;\n}\n\n#task-details-list {\n\tmargin-top: 1em;\n\tmargin-bottom: 0.5em;\n}\n\n.task-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbox-shadow: 0 3px 0 0 #fdfffc4b;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\talign-items: center;\n}\n\n#all-tasks-title {\n\tfont-weight: bold;\n\tposition: relative;\n\ttop: 0.3em;\n}\n\n.project-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbox-shadow: 0 3px 0 0 #fdfffc4b;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\talign-items: center;\n}\n\n#all-tasks-project {\n\tbox-shadow: 0 3px 0 0 #ffb347;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\ttext-align: center;\n}\n\n.priority-1 {\n\tbox-shadow: 0 3px 0 0 rgba(0, 128, 0, 0.349);\n}\n.priority-2 {\n\tbox-shadow: 0 3px 0 0 #ffb2478e;\n}\n.priority-3 {\n\tbox-shadow: 0 3px 0 0 rgba(141, 0, 0, 0.534);\n}\n\n.task-title-done {\n\ttext-decoration: line-through;\n}\n.task-done {\n\tbackground-color: #834c56;\n}\n\n.task-card:hover {\n\tbackground-color: #b65466;\n\tcursor: pointer;\n}\n\n#all-tasks-project:hover,\n.project-card:hover {\n\tbackground-color: #579cb6;\n\tcursor: pointer;\n}\n\n::-webkit-scrollbar {\n\twidth: 0.3em;\n}\n::-webkit-scrollbar-track {\n\tbackground: #2d314249;\n\tborder-radius: 1em;\n\tposition: relative;\n\tleft: 1em;\n}\n::-webkit-scrollbar-thumb {\n\tbackground: #ffb855;\n\tborder-radius: 1em;\n}\n\n::-webkit-scrollbar-thumb:active {\n\tbackground: #ffab36;\n}\n\n@media (min-width: 1001px) {\n\tbody {\n\t\tposition: relative;\n\t\tright: 1.5em;\n\t}\n}\n\n@media (max-width: 1000px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar sidebar task-panel task-panel'\n\t\t\t'. details-panel details-panel .  ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n\t#sidebar {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n\t#details-description {\n\t\tmax-height: 9.5em;\n\t\tmargin-bottom: 1em;\n\t}\n}\n\n@media (max-width: 635px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar'\n\t\t\t'task-panel'\n\t\t\t' details-panel ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: max-content;\n\t\tmax-width: 16em;\n\t\tmax-height: 25em;\n\t\tmargin: 1em 0;\n\t}\n\t#details-panel-wrapper {\n\t\theight: max-content;\n\t\tmax-width: 16em;\n\t\tmax-height: 25em;\n\t\tmargin: 1em 0;\n\t}\n\t#sidebar {\n\t\theight: max-content;\n\t\tmargin: 1em 0;\n\t\tmax-height: 25em;\n\t}\n\t#details-description {\n\t\tmax-height: 10em;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;CACC,qBAAqB;CACrB;yCACgC;AACjC;;AAEA;CACC,yBAAyB;CACzB,cAAc;CACd,mBAAmB;CACnB,aAAa;CACb;;;UAGS;CACT,kCAAkC;CAClC,sBAAsB;AACvB;;AAEA;CACC,eAAe;CACf,aAAa;CACb;;;UAGS;CACT,yBAAyB;CACzB,YAAY;CACZ,kBAAkB;CAClB,QAAQ;CACR,kBAAkB;CAClB,kBAAkB;CAClB,oBAAoB;AACrB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,8BAA8B;CAC9B,kBAAkB;CAClB,yBAAyB;CACzB,YAAY;CACZ,kBAAkB;CAClB,4BAA4B;CAC5B,6BAA6B;CAC7B,iBAAiB;AAClB;;AAEA;CACC,yBAAyB;CACzB,yBAAyB;CACzB,cAAc;CACd,kBAAkB;CAClB,eAAe;AAChB;AACA;CACC,kBAAkB;CAClB,UAAU;CACV,WAAW;CACX,gBAAgB;CAChB,UAAU;AACX;AACA;CACC,aAAa;CACb,8BAA8B;CAC9B,eAAe;CACf,UAAU;AACX;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,WAAW;CACX,UAAU;CACV,0BAA0B;AAC3B;;AAEA;CACC,WAAW;CACX,wBAAwB;AACzB;;AAEA;;;CAGC,wCAAwC;CACxC,yBAAyB;CACzB,kBAAkB;CAClB,kBAAkB;CAClB,cAAc;CACd,aAAa;CACb,aAAa;CACb,aAAa;CACb,YAAY;AACb;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,gBAAgB;CAChB,UAAU,EAAE,YAAY;AACzB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;;CAEC,oBAAoB;AACrB;AACA;CACC,UAAU;CACV,WAAW;CACX,kBAAkB;AACnB;;AAEA;CACC,WAAW;CACX,YAAY;AACb;;AAEA;CACC,aAAa;CACb,6BAA6B;CAC7B,yBAAyB;CACzB,UAAU;CACV,kBAAkB;CAClB,oBAAoB;AACrB;;AAEA;CACC,sBAAsB;AACvB;AACA;CACC,cAAc;AACf;AACA;CACC,qBAAqB;AACtB;;AAEA;CACC,aAAa;CACb,kBAAkB;CAClB,QAAQ;CACR,SAAS;CACT,gCAAgC;CAChC,mBAAmB;CACnB,WAAW;CACX,yBAAyB;CACzB,kBAAkB;CAClB,0BAA0B;CAC1B,6BAA6B;AAC9B;;AAEA;CACC,iBAAiB;CACjB,cAAc;CACd,kBAAkB;AACnB;AACA;CACC,iBAAiB;CACjB,cAAc;CACd,aAAa;CACb,SAAS;CACT,UAAU;CACV,kBAAkB;CAClB,SAAS;AACV;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,kBAAkB;CAClB,WAAW;AACZ;;AAEA;CACC,YAAY;CACZ,yBAAyB;CACzB,eAAe;CACf,4BAA4B;CAC5B,kBAAkB;CAClB,WAAW;CACX,6BAA6B;AAC9B;;AAEA;CACC,qBAAqB;CACrB,aAAa;CACb,sBAAsB;CACtB,8BAA8B;CAC9B,eAAe;AAChB;AACA;CACC,6BAA6B;AAC9B;AACA;CACC,wBAAwB;CACxB,WAAW;AACZ;AACA;CACC,aAAa;CACb,kBAAkB;AACnB;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,gBAAgB;AACjB;;AAEA;CACC,aAAa;AACd;AACA;CACC,gBAAgB;CAChB,cAAc;CACd,kBAAkB;AACnB;AACA;;CAEC,iBAAiB;AAClB;;AAEA;;;CAGC,cAAc;CACd,mBAAmB;CACnB,oBAAoB;CACpB,oBAAoB;AACrB;;AAEA;CACC,eAAe;CACf,oBAAoB;AACrB;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,+BAA+B;CAC/B,kBAAkB;CAClB,kBAAkB;CAClB,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,UAAU;AACX;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,+BAA+B;CAC/B,kBAAkB;CAClB,kBAAkB;CAClB,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,6BAA6B;CAC7B,kBAAkB;CAClB,kBAAkB;CAClB,aAAa;CACb,kBAAkB;AACnB;;AAEA;CACC,4CAA4C;AAC7C;AACA;CACC,+BAA+B;AAChC;AACA;CACC,4CAA4C;AAC7C;;AAEA;CACC,6BAA6B;AAC9B;AACA;CACC,yBAAyB;AAC1B;;AAEA;CACC,yBAAyB;CACzB,eAAe;AAChB;;AAEA;;CAEC,yBAAyB;CACzB,eAAe;AAChB;;AAEA;CACC,YAAY;AACb;AACA;CACC,qBAAqB;CACrB,kBAAkB;CAClB,kBAAkB;CAClB,SAAS;AACV;AACA;CACC,mBAAmB;CACnB,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC;EACC,kBAAkB;EAClB,YAAY;CACb;AACD;;AAEA;CACC;EACC;;sCAEoC;EACpC,MAAM;CACP;CACA;EACC,YAAY;EACZ,uBAAuB;CACxB;CACA;EACC,YAAY;EACZ,uBAAuB;CACxB;CACA;EACC,iBAAiB;EACjB,kBAAkB;CACnB;AACD;;AAEA;CACC;EACC;;;oBAGkB;EAClB,MAAM;CACP;CACA;EACC,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,aAAa;CACd;CACA;EACC,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,aAAa;CACd;CACA;EACC,mBAAmB;EACnB,aAAa;EACb,gBAAgB;CACjB;CACA;EACC,gBAAgB;CACjB;AACD","sourcesContent":["@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url('./Roboto-Regular.ttf'), url('./Roboto-Bold.ttf'),\n\t\turl('./Roboto-LightItalic.ttf');\n}\n\nhtml {\n\tbackground-color: #2d3142;\n\tcolor: #fdfffc;\n\tfont-family: Roboto;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'. main .'\n\t\t'. . . ';\n\tscrollbar-color: #ffb855 #2d314249;\n\tscrollbar-width: 0.3em;\n}\n\nbody {\n\tgrid-area: main;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'sidebar task-panel details-panel'\n\t\t'. . . ';\n\tbackground-color: #2d3142;\n\theight: 98vh;\n\tborder-radius: 1em;\n\tgap: 1em;\n\twidth: max-content;\n\talign-self: center;\n\tjustify-self: center;\n}\n\nh3 {\n\ttext-align: center;\n}\n\n#sidebar {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tgrid-area: sidebar;\n\tbackground-color: #3e88a3;\n\theight: 60vh;\n\tborder-radius: 1em;\n\tpadding: 0.2em 1em 0.1em 1em;\n\tbox-shadow: 1px 1px 2px black;\n\tmargin: 1.5em 1em;\n}\n\nbutton {\n\tbackground-color: #ffb347;\n\tborder: 0px solid #a54657;\n\tcolor: #2d3142;\n\tborder-radius: 1em;\n\tcursor: pointer;\n}\n.small-btn {\n\tborder-radius: 50%;\n\twidth: 2em;\n\theight: 2em;\n\tfont-size: 0.8em;\n\tpadding: 0;\n}\n.pop-up-btns {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-top: 1em;\n\twidth: 90%;\n}\n\n.pop-up-btn {\n\tpadding: 0.4em 1em;\n}\n\n#create-task-btn {\n\theight: 2em;\n\twidth: 50%;\n\tmargin: -1em 5em 1.2em 5em;\n}\n\n#edit-task-btn {\n\theight: 2em;\n\tpadding: 0 1.5em 0 1.5em;\n}\n\ntextarea,\ninput,\nselect {\n\tbackground-color: rgba(255, 255, 255, 0);\n\tborder: 1px solid #fdfffc;\n\tborder-radius: 1em;\n\tpadding: 0.3em 1em;\n\tcolor: #fdfffc;\n\toutline: none;\n\theight: 1.7em;\n\tmargin: 0.5em;\n\tresize: none;\n}\n\noption {\n\tbackground-color: #3e88a3;\n}\n\n::placeholder {\n\tcolor: #fdfffc9c;\n\topacity: 1; /* Firefox */\n}\n\ninput:focus::placeholder {\n\tcolor: transparent;\n}\n\n#new-project-input,\n#quick-add-input {\n\tmargin-bottom: 0.3em;\n}\n.pop-up-input {\n\twidth: 80%;\n\theight: 2em;\n\tborder-radius: 1em;\n}\n\n#pop-up-description-input {\n\theight: 6em;\n\tpadding: 1em;\n}\n\n#pop-up-priority-input {\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tborder: 1px solid #fdfffc;\n\twidth: 88%;\n\tmargin-left: 0.4em;\n\tborder-radius: 0.8em;\n}\n\n#priority-label-one {\n\tcolor: rgb(19, 90, 19);\n}\n#priority-label-two {\n\tcolor: #ffb247;\n}\n#priority-label-three {\n\tcolor: rgb(141, 0, 0);\n}\n\n.pop-up {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\theight: max-content;\n\twidth: 20em;\n\tbackground-color: #3e88a3;\n\tborder-radius: 1em;\n\tpadding: 1em 1em 1.5em 2em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n.errors {\n\tfont-weight: bold;\n\tcolor: #ffb347;\n\tmargin-bottom: 1em;\n}\n.quick-add-errors {\n\tfont-weight: bold;\n\tcolor: #ffb347;\n\theight: 1.5em;\n\tmargin: 0;\n\tpadding: 0;\n\tposition: relative;\n\tleft: 1em;\n}\n\n#edit-project-popup {\n\tdisplay: none;\n}\n\n.priority-label {\n\tposition: relative;\n\tbottom: 5px;\n}\n\n.panel {\n\theight: 60vh;\n\tbackground-color: #a54657;\n\tmargin: 1.5em 0;\n\tpadding: 0.2em 1em 0.1em 1em;\n\tborder-radius: 1em;\n\twidth: 20em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n#task-panel {\n\tgrid-area: task-panel;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tmax-width: 16em;\n}\n.panel-title {\n\tmargin: 1em 0.7em 0.7em 0.7em;\n}\n#details-panel-wrapper {\n\tgrid-area: details-panel;\n\twidth: 20em;\n}\n#details-panel {\n\tdisplay: none;\n\ttext-align: center;\n}\n#internal-details-panel {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-height: 100%;\n}\n\n#details-title {\n\tmargin-top: 0;\n}\n#details-description {\n\tmax-height: 22em;\n\toverflow: auto;\n\tmargin-bottom: 1em;\n}\n#details-due-date,\n#details-priority {\n\tfont-weight: bold;\n}\n\n#task-details-list,\n#task-list,\n#project-list {\n\toverflow: auto;\n\tmargin-bottom: auto;\n\tmargin-right: -0.3em;\n\tpadding-right: 0.3em;\n}\n\n#task-details-list {\n\tmargin-top: 1em;\n\tmargin-bottom: 0.5em;\n}\n\n.task-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbox-shadow: 0 3px 0 0 #fdfffc4b;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\talign-items: center;\n}\n\n#all-tasks-title {\n\tfont-weight: bold;\n\tposition: relative;\n\ttop: 0.3em;\n}\n\n.project-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbox-shadow: 0 3px 0 0 #fdfffc4b;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\talign-items: center;\n}\n\n#all-tasks-project {\n\tbox-shadow: 0 3px 0 0 #ffb347;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\ttext-align: center;\n}\n\n.priority-1 {\n\tbox-shadow: 0 3px 0 0 rgba(0, 128, 0, 0.349);\n}\n.priority-2 {\n\tbox-shadow: 0 3px 0 0 #ffb2478e;\n}\n.priority-3 {\n\tbox-shadow: 0 3px 0 0 rgba(141, 0, 0, 0.534);\n}\n\n.task-title-done {\n\ttext-decoration: line-through;\n}\n.task-done {\n\tbackground-color: #834c56;\n}\n\n.task-card:hover {\n\tbackground-color: #b65466;\n\tcursor: pointer;\n}\n\n#all-tasks-project:hover,\n.project-card:hover {\n\tbackground-color: #579cb6;\n\tcursor: pointer;\n}\n\n::-webkit-scrollbar {\n\twidth: 0.3em;\n}\n::-webkit-scrollbar-track {\n\tbackground: #2d314249;\n\tborder-radius: 1em;\n\tposition: relative;\n\tleft: 1em;\n}\n::-webkit-scrollbar-thumb {\n\tbackground: #ffb855;\n\tborder-radius: 1em;\n}\n\n::-webkit-scrollbar-thumb:active {\n\tbackground: #ffab36;\n}\n\n@media (min-width: 1001px) {\n\tbody {\n\t\tposition: relative;\n\t\tright: 1.5em;\n\t}\n}\n\n@media (max-width: 1000px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar sidebar task-panel task-panel'\n\t\t\t'. details-panel details-panel .  ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n\t#sidebar {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n\t#details-description {\n\t\tmax-height: 9.5em;\n\t\tmargin-bottom: 1em;\n\t}\n}\n\n@media (max-width: 635px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar'\n\t\t\t'task-panel'\n\t\t\t' details-panel ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: max-content;\n\t\tmax-width: 16em;\n\t\tmax-height: 25em;\n\t\tmargin: 1em 0;\n\t}\n\t#details-panel-wrapper {\n\t\theight: max-content;\n\t\tmax-width: 16em;\n\t\tmax-height: 25em;\n\t\tmargin: 1em 0;\n\t}\n\t#sidebar {\n\t\theight: max-content;\n\t\tmargin: 1em 0;\n\t\tmax-height: 25em;\n\t}\n\t#details-description {\n\t\tmax-height: 10em;\n\t}\n}\n"],"sourceRoot":""}]);
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
quickAddBtn.addEventListener('click', (e) => quickAdd(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject, e));

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
newProjectBtn.addEventListener('click', (e) =>
	quickAddProject(newProjectInput.value, e)
);

// Pop-up confirmation to delete a project
const cancelProjectYesBtn = document.getElementById('delete-project-yes');
cancelProjectYesBtn.addEventListener('click', (e) => deleteProject(e));

const cancelProjectNoBtn = document.getElementById('delete-project-no');
cancelProjectNoBtn.addEventListener(
	'click',
	() =>
		(document.getElementById('delete-project-prompt').style.display = 'none')
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

// All Tasks Project
const allTasksProjectCard = document.getElementById('all-tasks-project');
allTasksProjectCard.addEventListener('click', () => renderAllTasksProject());

// Quickly add a project
function quickAddProject(projectName, e) {
	e.preventDefault();
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.quickAddValidation)(projectName, 'add-project-errors');
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
	const input = document.getElementById('edit-project-name-input');
	if (popUp.style.display != 'block') {
		const index = e.composedPath()[0].dataset.editProjectBtn;

		input.value = _project_js__WEBPACK_IMPORTED_MODULE_2__.projects[index].title;
		popUp.style.display = 'block';
		(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.setHiddenActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[index]);
	} else popUp.style.display = 'none';
}

// Deletes a the relative task
function deleteTask(e) {
	e.stopPropagation();
	const index = e.composedPath()[0].dataset.deleteBtn;
	if (_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask === _project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[index]) {
		document.getElementById('details-panel').style.display = 'none';
	}
	globalDeleteTask(index);
	_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.removeTask(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[index]);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
}

// Deletes a task globally if working from "All Tasks" Project
function globalDeleteTask(index) {
	if (_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.title === 'All Tasks') {
		const id = _project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[index].id;
		_project_js__WEBPACK_IMPORTED_MODULE_2__.projects.forEach((project) => {
			project.tasks.forEach((task) => {
				if (task.id === id) {
					project.removeTask(task);
				}
			});
		});
	}
}

// Deletes the relative Project
function deleteProject(e) {
	const key = Object.keys(e.composedPath()[0].dataset)[0];
	const index = parseInt(e.composedPath()[0].dataset[key]);
	if (_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject === _project_js__WEBPACK_IMPORTED_MODULE_2__.projects[index]) {
		document.getElementById('details-panel').style.display = 'none';
		index === 0
			? (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[index + 1])
			: (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[index - 1]);
	}
	(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.removeProject)(index);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderProjects)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject !== undefined
		? (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject)
		: renderAllTasksProject();
	document.getElementById('delete-project-prompt').style.display = 'none';
}

// NOT WORKING YET. Toggles a task as "Done"
function toggleTaskDone(e) {
	e.stopPropagation();
	const index = e.composedPath()[0].dataset.doneBtn;
	const task = _project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[index];
	task.toggleDone();
	if (task.isDone) {
		_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.addTask(task);
		_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.removeTask(task);
	} else {
		for (let i = 0; i < _project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks.length; i++) {
			if (_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[i].isDone) {
				_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.removeTask(task);
				if (i !== 0 && _project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[i - 1].isDone) {
					_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks.splice(i - 1, 0, task);
				} else {
					_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks.splice(i, 0, task);
				}
				break;
			}
		}
	}
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
}

// Use quickAdd text input to create a new task with only a title
function quickAdd(project, e) {
	e.preventDefault();
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.quickAddValidation)(quickAddInput.value, 'add-task-errors');
	if (_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.title !== 'All Tasks') {
		if (quickAddInput.value !== '' && quickAddInput.value.length < 26) {
			if (_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[0] === undefined) {
				newProject('Personal');
				(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[0]);
			}
			const task = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.createTask)(
				quickAddInput.value,
				'',
				undefined,
				'0',
				undefined,
				Math.random(1)
			);
			project.addTask(task);
			(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
			(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(project.tasks);
			(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.resetTextInput)(quickAddInput);
		}
	}
}

// Decides to create a new task or edit an existing one
function createOrEditTask(project) {
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.popUpFormValidation)();
	const errors = document.getElementById('pop-up-errors');
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
	if (_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.title !== 'All Tasks') {
		if (_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[0] === undefined) {
			newProject('Personal');
			(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[0]);
		}
		const task = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			document.getElementById('pop-up-title-input').value,
			document.getElementById('pop-up-description-input').value,
			document.getElementById('pop-up-due-date-input').value,
			document.querySelector('input[name="priority"]:checked').value,
			undefined,
			Math.random(1)
		);
		project.addTask(task);
		(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
		(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(project.tasks);
		(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTaskDetails)(task);
	}
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

// Renders "All Tasks" project
function renderAllTasksProject() {
	const allTasksProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.createProject)('All Tasks', (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.createAllTasksArray)());
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderActiveProject)(allTasksProject);
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
/* harmony export */   "capitilize": () => (/* binding */ capitilize),
/* harmony export */   "quickAddValidation": () => (/* binding */ quickAddValidation)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./src/buttons.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");





// Assign Dataset to Project Card
function assignProjectDataIndex(index, card, editBtn, deleteBtn) {
	card.dataset.project = index;
	editBtn.dataset.editProjectBtn = index;
	deleteBtn.dataset.deleteProjectBtn = index;
}

// Create a Project Card
function createProjectCard(project) {
	const index = document.getElementById('project-list').children.length - 1;
	const card = createDomElement('div', 'project-card');
	const deleteBtn = (0,_buttons__WEBPACK_IMPORTED_MODULE_1__.createCardBtn)('button', 'small-btn', showDeleteProject);
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
function assignTaskDataIndex(index, card, doneBtn, deleteBtn, title) {
	card.dataset.task = index;
	doneBtn.dataset.doneBtn = index;
	deleteBtn.dataset.deleteBtn = index;
	title.dataset.title = index;
}

// Create a new Task Card
function createTaskCard(task) {
	const index = document.getElementById('task-list').children.length;
	const card = createDomElement('div', 'task-card');
	const doneBtn = (0,_buttons__WEBPACK_IMPORTED_MODULE_1__.createCardBtn)('button', 'small-btn', _buttons__WEBPACK_IMPORTED_MODULE_1__.toggleTaskDone);
	const deleteBtn = (0,_buttons__WEBPACK_IMPORTED_MODULE_1__.createCardBtn)('button', 'small-btn', _buttons__WEBPACK_IMPORTED_MODULE_1__.deleteTask);
	const title = createDomElement('div', 'task-title');
	card.classList.add(`priority-${task.priority}`);
	taskDone(task, card, title);
	doneBtn.innerHTML = '&#10003';
	deleteBtn.innerHTML = '&#10007;';
	title.textContent = task.title;
	appendToParent(card, doneBtn, title, deleteBtn);
	assignTaskDataIndex(index, card, doneBtn, deleteBtn, title);
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

// Adds task-done and 'task-title-done' class to task card and title

function taskDone(task, card, title) {
	if (task.isDone === true) {
		card.classList.add('task-done');
		title.classList.add('task-title-done');
	} else {
		card.classList.remove('task-done');
		title.classList.remove('task-title-done');
	}
}

// Form validation

function popUpFormValidation() {
	const errorList = [];
	const popUpTitle = document.getElementById('pop-up-title').textContent;
	const title = document.getElementById('pop-up-title-input').value;
	const dueDate = document.getElementById('pop-up-due-date-input').value;
	_project__WEBPACK_IMPORTED_MODULE_0__.activeProject.title === 'All Tasks' && popUpTitle === 'Create New Task'
		? errorList.push('Cannot add tasks to "All Tasks"')
		: errorList.push(titleValidation(title));
	errorList.push(dueDateValidation(dueDate));
	showErrors(errorList, 'pop-up-errors');
}

function quickAddValidation(title, errorsId) {
	const errors = document.getElementById(errorsId);
	errors.textContent =
		_project__WEBPACK_IMPORTED_MODULE_0__.activeProject.title === 'All Tasks' && errorsId === 'add-task-errors'
			? 'Cannot add tasks to "All Tasks"'
			: titleValidation(title);
}
// Title validation
function titleValidation(title) {
	if (title === '') {
		return 'Insert title';
	} else if (title.length > 25) {
		return 'Title max 25 characters';
	}
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
function showErrors(errorList, id) {
	const errors = document.getElementById(id);
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

// Show delete project prompt pop-up
function showDeleteProject(e) {
	e.stopPropagation();
	const key = Object.keys(e.composedPath()[0].dataset)[0];
	const index = parseInt(e.composedPath()[0].dataset[key]);
	// Only deletes an empty project without prompt
	if (_project__WEBPACK_IMPORTED_MODULE_0__.projects[index].tasks[0] === undefined) {
		(0,_buttons__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(e);
	} else {
		// assigns the "yes" button on the delete project prompt the dataset of the project intended to be deleted
		document.getElementById('delete-project-yes').dataset.event =
			e.composedPath()[0].dataset.deleteProjectBtn;

		document.getElementById('delete-project-prompt').style.display = 'block';
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
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "allTasksProject": () => (/* binding */ allTasksProject),
/* harmony export */   "createAllTasksArray": () => (/* binding */ createAllTasksArray)
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

// Returns an array with all tasks
function createAllTasksArray() {
	return projects.reduce((array, project) => {
		project.tasks.forEach((task) => {
			(0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(task.title);
			array.push(task);
		});
		return array;
	}, []);
}

// Creates allTasksProject
let allTasksProject = createProject('All Tasks', createAllTasksArray());

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
function createTask(title, description, dueDate, priority, isDone, id) {
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
		id,
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
			_project__WEBPACK_IMPORTED_MODULE_2__.projects[i].tasks[a].isDone,
			_project__WEBPACK_IMPORTED_MODULE_2__.projects[i].tasks[a].id
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
			false,
			Math.random(1)
		)
	);
	_project__WEBPACK_IMPORTED_MODULE_2__.projects[0].addTask(
		(0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			'Tasks',
			'You can create tasks for each project to stay more organized. Either add a task quickly or click on "+ Create Task"',
			undefined,
			'0',
			false,
			Math.random(1)
		)
	);
	_project__WEBPACK_IMPORTED_MODULE_2__.projects[0].addTask(
		(0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			'Complete and delete tasks',
			'You can also set a task to done or completely remove a task by clicking the buttons on the relative task. Try it out now! first set this task to done and then delete it.',
			undefined,
			'0',
			false,
			Math.random(1)
		)
	);
	_project__WEBPACK_IMPORTED_MODULE_2__.projects[0].addTask(
		(0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			'Details',
			'In the panel from which you are currently reading you can view all the details of a selected task and also edit it. The only required field is the title',
			undefined,
			'0',
			false,
			Math.random(1)
		)
	);
	_project__WEBPACK_IMPORTED_MODULE_2__.projects[0].addTask(
		(0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			'Delete instructions',
			'You are all set. Go ahead and delete the instructions project and start using the todo list!',
			undefined,
			'0',
			false,
			Math.random(1)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVkscUJBQXFCLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFB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O0FBQ3BCLEVBQUUsaURBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx5REFBbUI7QUFDcEIsRUFBRSxpREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHlEQUFtQjtBQUNwQixFQUFFLGlEQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsbURBQUksQ0FBQyw4Q0FBUTtBQUNkLENBQUMsaURBQVcsQ0FBQyx1REFBaUI7QUFDOUI7O0FBRUE7QUFDQSwwREFBZ0IsQ0FBQyxpREFBVzs7QUFFNUI7QUFDQSxvREFBYyxDQUFDLDhDQUFROztBQUV2QjtBQUNBLGlEQUFXLENBQUMseURBQW1COztBQUUvQjtBQUNBLG1EQUFhLENBQUMsbURBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9idXR0b25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1MaWdodEl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG5cXHRzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIiksXFxuXFx0XFx0dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuaHRtbCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzJkMzE0MjtcXG5cXHRjb2xvcjogI2ZkZmZmYztcXG5cXHRmb250LWZhbWlseTogUm9ib3RvO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHQnLiAuIC4nXFxuXFx0XFx0Jy4gbWFpbiAuJ1xcblxcdFxcdCcuIC4gLiAnO1xcblxcdHNjcm9sbGJhci1jb2xvcjogI2ZmYjg1NSAjMmQzMTQyNDk7XFxuXFx0c2Nyb2xsYmFyLXdpZHRoOiAwLjNlbTtcXG59XFxuXFxuYm9keSB7XFxuXFx0Z3JpZC1hcmVhOiBtYWluO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHQnLiAuIC4nXFxuXFx0XFx0J3NpZGViYXIgdGFzay1wYW5lbCBkZXRhaWxzLXBhbmVsJ1xcblxcdFxcdCcuIC4gLiAnO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyZDMxNDI7XFxuXFx0aGVpZ2h0OiA5OHZoO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRnYXA6IDFlbTtcXG5cXHR3aWR0aDogbWF4LWNvbnRlbnQ7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG5oMyB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRncmlkLWFyZWE6IHNpZGViYXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNlODhhMztcXG5cXHRoZWlnaHQ6IDYwdmg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHBhZGRpbmc6IDAuMmVtIDFlbSAwLjFlbSAxZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxuXFx0bWFyZ2luOiAxLjVlbSAxZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYjM0NztcXG5cXHRib3JkZXI6IDBweCBzb2xpZCAjYTU0NjU3O1xcblxcdGNvbG9yOiAjMmQzMTQyO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zbWFsbC1idG4ge1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHR3aWR0aDogMmVtO1xcblxcdGhlaWdodDogMmVtO1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0cGFkZGluZzogMDtcXG59XFxuLnBvcC11cC1idG5zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW4tdG9wOiAxZW07XFxuXFx0d2lkdGg6IDkwJTtcXG59XFxuXFxuLnBvcC11cC1idG4ge1xcblxcdHBhZGRpbmc6IDAuNGVtIDFlbTtcXG59XFxuXFxuI2NyZWF0ZS10YXNrLWJ0biB7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRtYXJnaW46IC0xZW0gNWVtIDEuMmVtIDVlbTtcXG59XFxuXFxuI2VkaXQtdGFzay1idG4ge1xcblxcdGhlaWdodDogMmVtO1xcblxcdHBhZGRpbmc6IDAgMS41ZW0gMCAxLjVlbTtcXG59XFxuXFxudGV4dGFyZWEsXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmZGZmZmM7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHBhZGRpbmc6IDAuM2VtIDFlbTtcXG5cXHRjb2xvcjogI2ZkZmZmYztcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGhlaWdodDogMS43ZW07XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG5cXHRyZXNpemU6IG5vbmU7XFxufVxcblxcbm9wdGlvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNlODhhMztcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuXFx0Y29sb3I6ICNmZGZmZmM5YztcXG5cXHRvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXFxufVxcblxcbmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuXFx0Y29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4jbmV3LXByb2plY3QtaW5wdXQsXFxuI3F1aWNrLWFkZC1pbnB1dCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMC4zZW07XFxufVxcbi5wb3AtdXAtaW5wdXQge1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4jcG9wLXVwLWRlc2NyaXB0aW9uLWlucHV0IHtcXG5cXHRoZWlnaHQ6IDZlbTtcXG5cXHRwYWRkaW5nOiAxZW07XFxufVxcblxcbiNwb3AtdXAtcHJpb3JpdHktaW5wdXQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZkZmZmYztcXG5cXHR3aWR0aDogODglO1xcblxcdG1hcmdpbi1sZWZ0OiAwLjRlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjhlbTtcXG59XFxuXFxuI3ByaW9yaXR5LWxhYmVsLW9uZSB7XFxuXFx0Y29sb3I6IHJnYigxOSwgOTAsIDE5KTtcXG59XFxuI3ByaW9yaXR5LWxhYmVsLXR3byB7XFxuXFx0Y29sb3I6ICNmZmIyNDc7XFxufVxcbiNwcmlvcml0eS1sYWJlbC10aHJlZSB7XFxuXFx0Y29sb3I6IHJnYigxNDEsIDAsIDApO1xcbn1cXG5cXG4ucG9wLXVwIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDUwJTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHR3aWR0aDogMjBlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4OGEzO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRwYWRkaW5nOiAxZW0gMWVtIDEuNWVtIDJlbTtcXG5cXHRib3gtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcXG59XFxuXFxuLmVycm9ycyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Y29sb3I6ICNmZmIzNDc7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4ucXVpY2stYWRkLWVycm9ycyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Y29sb3I6ICNmZmIzNDc7XFxuXFx0aGVpZ2h0OiAxLjVlbTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bGVmdDogMWVtO1xcbn1cXG5cXG4jZWRpdC1wcm9qZWN0LXBvcHVwIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJpb3JpdHktbGFiZWwge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3R0b206IDVweDtcXG59XFxuXFxuLnBhbmVsIHtcXG5cXHRoZWlnaHQ6IDYwdmg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2E1NDY1NztcXG5cXHRtYXJnaW46IDEuNWVtIDA7XFxuXFx0cGFkZGluZzogMC4yZW0gMWVtIDAuMWVtIDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0d2lkdGg6IDIwZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxufVxcblxcbiN0YXNrLXBhbmVsIHtcXG5cXHRncmlkLWFyZWE6IHRhc2stcGFuZWw7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXgtd2lkdGg6IDE2ZW07XFxufVxcbi5wYW5lbC10aXRsZSB7XFxuXFx0bWFyZ2luOiAxZW0gMC43ZW0gMC43ZW0gMC43ZW07XFxufVxcbiNkZXRhaWxzLXBhbmVsLXdyYXBwZXIge1xcblxcdGdyaWQtYXJlYTogZGV0YWlscy1wYW5lbDtcXG5cXHR3aWR0aDogMjBlbTtcXG59XFxuI2RldGFpbHMtcGFuZWwge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jaW50ZXJuYWwtZGV0YWlscy1wYW5lbCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNkZXRhaWxzLXRpdGxlIHtcXG5cXHRtYXJnaW4tdG9wOiAwO1xcbn1cXG4jZGV0YWlscy1kZXNjcmlwdGlvbiB7XFxuXFx0bWF4LWhlaWdodDogMjJlbTtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG5cXHRtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbiNkZXRhaWxzLWR1ZS1kYXRlLFxcbiNkZXRhaWxzLXByaW9yaXR5IHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3Rhc2stZGV0YWlscy1saXN0LFxcbiN0YXNrLWxpc3QsXFxuI3Byb2plY3QtbGlzdCB7XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxuXFx0bWFyZ2luLWJvdHRvbTogYXV0bztcXG5cXHRtYXJnaW4tcmlnaHQ6IC0wLjNlbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAwLjNlbTtcXG59XFxuXFxuI3Rhc2stZGV0YWlscy1saXN0IHtcXG5cXHRtYXJnaW4tdG9wOiAxZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi50YXNrLWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjZmRmZmZjNGI7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRoZWlnaHQ6IDEuN2VtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhbGwtdGFza3MtdGl0bGUge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0b3A6IDAuM2VtO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRib3gtc2hhZG93OiAwIDNweCAwIDAgI2ZkZmZmYzRiO1xcblxcdG1hcmdpbi1ib3R0b206IDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0aGVpZ2h0OiAxLjdlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWxsLXRhc2tzLXByb2plY3Qge1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjZmZiMzQ3O1xcblxcdG1hcmdpbi1ib3R0b206IDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0aGVpZ2h0OiAxLjdlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eS0xIHtcXG5cXHRib3gtc2hhZG93OiAwIDNweCAwIDAgcmdiYSgwLCAxMjgsIDAsIDAuMzQ5KTtcXG59XFxuLnByaW9yaXR5LTIge1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjZmZiMjQ3OGU7XFxufVxcbi5wcmlvcml0eS0zIHtcXG5cXHRib3gtc2hhZG93OiAwIDNweCAwIDAgcmdiYSgxNDEsIDAsIDAsIDAuNTM0KTtcXG59XFxuXFxuLnRhc2stdGl0bGUtZG9uZSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcbi50YXNrLWRvbmUge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM4MzRjNTY7XFxufVxcblxcbi50YXNrLWNhcmQ6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiNjU0NjY7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWxsLXRhc2tzLXByb2plY3Q6aG92ZXIsXFxuLnByb2plY3QtY2FyZDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU3OWNiNjtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdHdpZHRoOiAwLjNlbTtcXG59XFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuXFx0YmFja2dyb3VuZDogIzJkMzE0MjQ5O1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bGVmdDogMWVtO1xcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZiODU1O1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xcblxcdGJhY2tncm91bmQ6ICNmZmFiMzY7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAxcHgpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0cmlnaHQ6IDEuNWVtO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcblxcdGJvZHkge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFx0J3NpZGViYXIgc2lkZWJhciB0YXNrLXBhbmVsIHRhc2stcGFuZWwnXFxuXFx0XFx0XFx0Jy4gZGV0YWlscy1wYW5lbCBkZXRhaWxzLXBhbmVsIC4gICc7XFxuXFx0XFx0Z2FwOiAwO1xcblxcdH1cXG5cXHQucGFuZWwge1xcblxcdFxcdGhlaWdodDogNDB2aDtcXG5cXHRcXHRtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHR9XFxuXFx0I3NpZGViYXIge1xcblxcdFxcdGhlaWdodDogNDB2aDtcXG5cXHRcXHRtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHR9XFxuXFx0I2RldGFpbHMtZGVzY3JpcHRpb24ge1xcblxcdFxcdG1heC1oZWlnaHQ6IDkuNWVtO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDFlbTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MzVweCkge1xcblxcdGJvZHkge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFx0J3NpZGViYXInXFxuXFx0XFx0XFx0J3Rhc2stcGFuZWwnXFxuXFx0XFx0XFx0JyBkZXRhaWxzLXBhbmVsICc7XFxuXFx0XFx0Z2FwOiAwO1xcblxcdH1cXG5cXHQucGFuZWwge1xcblxcdFxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0XFx0bWF4LXdpZHRoOiAxNmVtO1xcblxcdFxcdG1heC1oZWlnaHQ6IDI1ZW07XFxuXFx0XFx0bWFyZ2luOiAxZW0gMDtcXG5cXHR9XFxuXFx0I2RldGFpbHMtcGFuZWwtd3JhcHBlciB7XFxuXFx0XFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRcXHRtYXgtd2lkdGg6IDE2ZW07XFxuXFx0XFx0bWF4LWhlaWdodDogMjVlbTtcXG5cXHRcXHRtYXJnaW46IDFlbSAwO1xcblxcdH1cXG5cXHQjc2lkZWJhciB7XFxuXFx0XFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRcXHRtYXJnaW46IDFlbSAwO1xcblxcdFxcdG1heC1oZWlnaHQ6IDI1ZW07XFxuXFx0fVxcblxcdCNkZXRhaWxzLWRlc2NyaXB0aW9uIHtcXG5cXHRcXHRtYXgtaGVpZ2h0OiAxMGVtO1xcblxcdH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxxQkFBcUI7Q0FDckI7eUNBQ2dDO0FBQ2pDOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiOzs7VUFHUztDQUNULGtDQUFrQztDQUNsQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsYUFBYTtDQUNiOzs7VUFHUztDQUNULHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsOEJBQThCO0NBQzlCLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQiw0QkFBNEI7Q0FDNUIsNkJBQTZCO0NBQzdCLGlCQUFpQjtBQUNsQjs7QUFFQTtD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RUE7Q0FDQyw2QkFBNkI7Q0FDN0Isa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2Isa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsNENBQTRDO0FBQzdDO0FBQ0E7Q0FDQywrQkFBK0I7QUFDaEM7QUFDQTtDQUNDLDRDQUE0QztBQUM3Qzs7QUFFQTtDQUNDLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7O0NBRUMseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLFNBQVM7QUFDVjtBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDO0VBQ0Msa0JBQWtCO0VBQ2xCLFlBQVk7Q0FDYjtBQUNEOztBQUVBO0NBQ0M7RUFDQzs7c0NBRW9DO0VBQ3BDLE1BQU07Q0FDUDtDQUNBO0VBQ0MsWUFBWTtFQUNaLHVCQUF1QjtDQUN4QjtDQUNBO0VBQ0MsWUFBWTtFQUNaLHVCQUF1QjtDQUN4QjtDQUNBO0VBQ0MsaUJBQWlCO0VBQ2pCLGtCQUFrQjtDQUNuQjtBQUNEOztBQUVBO0NBQ0M7RUFDQzs7O29CQUdrQjtFQUNsQixNQUFNO0NBQ1A7Q0FDQTtFQUNDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7Q0FDZDtDQUNBO0VBQ0MsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtDQUNkO0NBQ0E7RUFDQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdCQUFnQjtDQUNqQjtDQUNBO0VBQ0MsZ0JBQWdCO0NBQ2pCO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcblxcdHNyYzogdXJsKCcuL1JvYm90by1SZWd1bGFyLnR0ZicpLCB1cmwoJy4vUm9ib3RvLUJvbGQudHRmJyksXFxuXFx0XFx0dXJsKCcuL1JvYm90by1MaWdodEl0YWxpYy50dGYnKTtcXG59XFxuXFxuaHRtbCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzJkMzE0MjtcXG5cXHRjb2xvcjogI2ZkZmZmYztcXG5cXHRmb250LWZhbWlseTogUm9ib3RvO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHQnLiAuIC4nXFxuXFx0XFx0Jy4gbWFpbiAuJ1xcblxcdFxcdCcuIC4gLiAnO1xcblxcdHNjcm9sbGJhci1jb2xvcjogI2ZmYjg1NSAjMmQzMTQyNDk7XFxuXFx0c2Nyb2xsYmFyLXdpZHRoOiAwLjNlbTtcXG59XFxuXFxuYm9keSB7XFxuXFx0Z3JpZC1hcmVhOiBtYWluO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHQnLiAuIC4nXFxuXFx0XFx0J3NpZGViYXIgdGFzay1wYW5lbCBkZXRhaWxzLXBhbmVsJ1xcblxcdFxcdCcuIC4gLiAnO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyZDMxNDI7XFxuXFx0aGVpZ2h0OiA5OHZoO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRnYXA6IDFlbTtcXG5cXHR3aWR0aDogbWF4LWNvbnRlbnQ7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG5oMyB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRncmlkLWFyZWE6IHNpZGViYXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNlODhhMztcXG5cXHRoZWlnaHQ6IDYwdmg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHBhZGRpbmc6IDAuMmVtIDFlbSAwLjFlbSAxZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxuXFx0bWFyZ2luOiAxLjVlbSAxZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYjM0NztcXG5cXHRib3JkZXI6IDBweCBzb2xpZCAjYTU0NjU3O1xcblxcdGNvbG9yOiAjMmQzMTQyO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zbWFsbC1idG4ge1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHR3aWR0aDogMmVtO1xcblxcdGhlaWdodDogMmVtO1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0cGFkZGluZzogMDtcXG59XFxuLnBvcC11cC1idG5zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW4tdG9wOiAxZW07XFxuXFx0d2lkdGg6IDkwJTtcXG59XFxuXFxuLnBvcC11cC1idG4ge1xcblxcdHBhZGRpbmc6IDAuNGVtIDFlbTtcXG59XFxuXFxuI2NyZWF0ZS10YXNrLWJ0biB7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRtYXJnaW46IC0xZW0gNWVtIDEuMmVtIDVlbTtcXG59XFxuXFxuI2VkaXQtdGFzay1idG4ge1xcblxcdGhlaWdodDogMmVtO1xcblxcdHBhZGRpbmc6IDAgMS41ZW0gMCAxLjVlbTtcXG59XFxuXFxudGV4dGFyZWEsXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmZGZmZmM7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHBhZGRpbmc6IDAuM2VtIDFlbTtcXG5cXHRjb2xvcjogI2ZkZmZmYztcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGhlaWdodDogMS43ZW07XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG5cXHRyZXNpemU6IG5vbmU7XFxufVxcblxcbm9wdGlvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNlODhhMztcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuXFx0Y29sb3I6ICNmZGZmZmM5YztcXG5cXHRvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXFxufVxcblxcbmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuXFx0Y29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4jbmV3LXByb2plY3QtaW5wdXQsXFxuI3F1aWNrLWFkZC1pbnB1dCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMC4zZW07XFxufVxcbi5wb3AtdXAtaW5wdXQge1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4jcG9wLXVwLWRlc2NyaXB0aW9uLWlucHV0IHtcXG5cXHRoZWlnaHQ6IDZlbTtcXG5cXHRwYWRkaW5nOiAxZW07XFxufVxcblxcbiNwb3AtdXAtcHJpb3JpdHktaW5wdXQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZkZmZmYztcXG5cXHR3aWR0aDogODglO1xcblxcdG1hcmdpbi1sZWZ0OiAwLjRlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjhlbTtcXG59XFxuXFxuI3ByaW9yaXR5LWxhYmVsLW9uZSB7XFxuXFx0Y29sb3I6IHJnYigxOSwgOTAsIDE5KTtcXG59XFxuI3ByaW9yaXR5LWxhYmVsLXR3byB7XFxuXFx0Y29sb3I6ICNmZmIyNDc7XFxufVxcbiNwcmlvcml0eS1sYWJlbC10aHJlZSB7XFxuXFx0Y29sb3I6IHJnYigxNDEsIDAsIDApO1xcbn1cXG5cXG4ucG9wLXVwIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDUwJTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHR3aWR0aDogMjBlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4OGEzO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRwYWRkaW5nOiAxZW0gMWVtIDEuNWVtIDJlbTtcXG5cXHRib3gtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcXG59XFxuXFxuLmVycm9ycyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Y29sb3I6ICNmZmIzNDc7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4ucXVpY2stYWRkLWVycm9ycyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Y29sb3I6ICNmZmIzNDc7XFxuXFx0aGVpZ2h0OiAxLjVlbTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bGVmdDogMWVtO1xcbn1cXG5cXG4jZWRpdC1wcm9qZWN0LXBvcHVwIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJpb3JpdHktbGFiZWwge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3R0b206IDVweDtcXG59XFxuXFxuLnBhbmVsIHtcXG5cXHRoZWlnaHQ6IDYwdmg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2E1NDY1NztcXG5cXHRtYXJnaW46IDEuNWVtIDA7XFxuXFx0cGFkZGluZzogMC4yZW0gMWVtIDAuMWVtIDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0d2lkdGg6IDIwZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxufVxcblxcbiN0YXNrLXBhbmVsIHtcXG5cXHRncmlkLWFyZWE6IHRhc2stcGFuZWw7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXgtd2lkdGg6IDE2ZW07XFxufVxcbi5wYW5lbC10aXRsZSB7XFxuXFx0bWFyZ2luOiAxZW0gMC43ZW0gMC43ZW0gMC43ZW07XFxufVxcbiNkZXRhaWxzLXBhbmVsLXdyYXBwZXIge1xcblxcdGdyaWQtYXJlYTogZGV0YWlscy1wYW5lbDtcXG5cXHR3aWR0aDogMjBlbTtcXG59XFxuI2RldGFpbHMtcGFuZWwge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jaW50ZXJuYWwtZGV0YWlscy1wYW5lbCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNkZXRhaWxzLXRpdGxlIHtcXG5cXHRtYXJnaW4tdG9wOiAwO1xcbn1cXG4jZGV0YWlscy1kZXNjcmlwdGlvbiB7XFxuXFx0bWF4LWhlaWdodDogMjJlbTtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG5cXHRtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbiNkZXRhaWxzLWR1ZS1kYXRlLFxcbiNkZXRhaWxzLXByaW9yaXR5IHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3Rhc2stZGV0YWlscy1saXN0LFxcbiN0YXNrLWxpc3QsXFxuI3Byb2plY3QtbGlzdCB7XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxuXFx0bWFyZ2luLWJvdHRvbTogYXV0bztcXG5cXHRtYXJnaW4tcmlnaHQ6IC0wLjNlbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAwLjNlbTtcXG59XFxuXFxuI3Rhc2stZGV0YWlscy1saXN0IHtcXG5cXHRtYXJnaW4tdG9wOiAxZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi50YXNrLWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjZmRmZmZjNGI7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRoZWlnaHQ6IDEuN2VtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhbGwtdGFza3MtdGl0bGUge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0b3A6IDAuM2VtO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRib3gtc2hhZG93OiAwIDNweCAwIDAgI2ZkZmZmYzRiO1xcblxcdG1hcmdpbi1ib3R0b206IDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0aGVpZ2h0OiAxLjdlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWxsLXRhc2tzLXByb2plY3Qge1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjZmZiMzQ3O1xcblxcdG1hcmdpbi1ib3R0b206IDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0aGVpZ2h0OiAxLjdlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eS0xIHtcXG5cXHRib3gtc2hhZG93OiAwIDNweCAwIDAgcmdiYSgwLCAxMjgsIDAsIDAuMzQ5KTtcXG59XFxuLnByaW9yaXR5LTIge1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjZmZiMjQ3OGU7XFxufVxcbi5wcmlvcml0eS0zIHtcXG5cXHRib3gtc2hhZG93OiAwIDNweCAwIDAgcmdiYSgxNDEsIDAsIDAsIDAuNTM0KTtcXG59XFxuXFxuLnRhc2stdGl0bGUtZG9uZSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcbi50YXNrLWRvbmUge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM4MzRjNTY7XFxufVxcblxcbi50YXNrLWNhcmQ6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiNjU0NjY7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWxsLXRhc2tzLXByb2plY3Q6aG92ZXIsXFxuLnByb2plY3QtY2FyZDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU3OWNiNjtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdHdpZHRoOiAwLjNlbTtcXG59XFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuXFx0YmFja2dyb3VuZDogIzJkMzE0MjQ5O1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bGVmdDogMWVtO1xcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZiODU1O1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xcblxcdGJhY2tncm91bmQ6ICNmZmFiMzY7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAxcHgpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0cmlnaHQ6IDEuNWVtO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcblxcdGJvZHkge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFx0J3NpZGViYXIgc2lkZWJhciB0YXNrLXBhbmVsIHRhc2stcGFuZWwnXFxuXFx0XFx0XFx0Jy4gZGV0YWlscy1wYW5lbCBkZXRhaWxzLXBhbmVsIC4gICc7XFxuXFx0XFx0Z2FwOiAwO1xcblxcdH1cXG5cXHQucGFuZWwge1xcblxcdFxcdGhlaWdodDogNDB2aDtcXG5cXHRcXHRtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHR9XFxuXFx0I3NpZGViYXIge1xcblxcdFxcdGhlaWdodDogNDB2aDtcXG5cXHRcXHRtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHR9XFxuXFx0I2RldGFpbHMtZGVzY3JpcHRpb24ge1xcblxcdFxcdG1heC1oZWlnaHQ6IDkuNWVtO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDFlbTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MzVweCkge1xcblxcdGJvZHkge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFx0J3NpZGViYXInXFxuXFx0XFx0XFx0J3Rhc2stcGFuZWwnXFxuXFx0XFx0XFx0JyBkZXRhaWxzLXBhbmVsICc7XFxuXFx0XFx0Z2FwOiAwO1xcblxcdH1cXG5cXHQucGFuZWwge1xcblxcdFxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0XFx0bWF4LXdpZHRoOiAxNmVtO1xcblxcdFxcdG1heC1oZWlnaHQ6IDI1ZW07XFxuXFx0XFx0bWFyZ2luOiAxZW0gMDtcXG5cXHR9XFxuXFx0I2RldGFpbHMtcGFuZWwtd3JhcHBlciB7XFxuXFx0XFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRcXHRtYXgtd2lkdGg6IDE2ZW07XFxuXFx0XFx0bWF4LWhlaWdodDogMjVlbTtcXG5cXHRcXHRtYXJnaW46IDFlbSAwO1xcblxcdH1cXG5cXHQjc2lkZWJhciB7XFxuXFx0XFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRcXHRtYXJnaW46IDFlbSAwO1xcblxcdFxcdG1heC1oZWlnaHQ6IDI1ZW07XFxuXFx0fVxcblxcdCNkZXRhaWxzLWRlc2NyaXB0aW9uIHtcXG5cXHRcXHRtYXgtaGVpZ2h0OiAxMGVtO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcblx0cmVuZGVyUHJvamVjdHMsXG5cdHJlbmRlclRhc2tzLFxuXHRyZXNldFRleHRJbnB1dCxcblx0Y3JlYXRlRG9tRWxlbWVudCxcblx0cmVuZGVyVGFza0RldGFpbHMsXG5cdHBvcFVwRm9ybVZhbGlkYXRpb24sXG5cdHJlbmRlckFjdGl2ZVByb2plY3QsXG5cdGNhcGl0aWxpemUsXG5cdHF1aWNrQWRkVmFsaWRhdGlvbixcbn0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgaGlkZGVuQWN0aXZlVGFzaywgY3JlYXRlVGFzaywgc2V0SGlkZGVuQWN0aXZlVGFzayB9IGZyb20gJy4vdGFzay5qcyc7XG5pbXBvcnQge1xuXHRhY3RpdmVQcm9qZWN0LFxuXHRwcm9qZWN0cyxcblx0Y3JlYXRlUHJvamVjdCxcblx0cmVtb3ZlUHJvamVjdCxcblx0c2V0SGlkZGVuQWN0aXZlUHJvamVjdCxcblx0aGlkZGVuQWN0aXZlUHJvamVjdCxcblx0c2V0QWN0aXZlUHJvamVjdCxcblx0YWxsVGFza3NQcm9qZWN0LFxuXHRjcmVhdGVBbGxUYXNrc0FycmF5LFxufSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHsgc2F2ZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcbmV4cG9ydCB7XG5cdG5ld1Byb2plY3QsXG5cdHF1aWNrQWRkLFxuXHRjcmVhdGVDYXJkQnRuLFxuXHRkZWxldGVUYXNrLFxuXHR0b2dnbGVUYXNrRG9uZSxcblx0ZGVsZXRlUHJvamVjdCxcblx0c2hvd0VkaXRQcm9qZWN0UG9wVXAsXG59O1xuXG4vLyBDcmVhdGUgVGFza3MgYnV0dG9uIG9wZW5zIHBvcC11cCBhbmQgYWxsb3dzIGEgZnVsbCB0YXNrIHRvIGJlIGFkZGVkXG5jb25zdCBjcmVhdGVUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS10YXNrLWJ0bicpO1xuY3JlYXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dUYXNrUG9wVXAoJ0NyZWF0ZSBOZXcgVGFzaycpKTtcblxuLy8gUXVpY2tseSBhZGQgYSB0YXNrIHdpdGggb25seSB0aGUgdGl0bGUsIGJ1dCBubyBvdGhlciBpbmZvcm1hdGlvblxuY29uc3QgcXVpY2tBZGRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWljay1hZGQtaW5wdXQnKTtcbmNvbnN0IHF1aWNrQWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aWNrLWFkZC1idG4nKTtcbnF1aWNrQWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHF1aWNrQWRkKGFjdGl2ZVByb2plY3QsIGUpKTtcblxuLy8gQWRkIGEgdGFzayB3aXRoIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlIGRhdGUgYW5kIHByaW9yaXR5XG5jb25zdCBmdWxsQWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGwtYWRkLWJ0bicpO1xuZnVsbEFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNyZWF0ZU9yRWRpdFRhc2soYWN0aXZlUHJvamVjdCkpO1xuXG4vLyBDYW5jZWwgbmV3L2VkaXQgdGFzayBwb3AtdXBcbmNvbnN0IHRhc2tQb3BVcENhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtZnVsbC1hZGQtYnRuJyk7XG50YXNrUG9wVXBDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoaWRlUG9wVXAoJ3Rhc2stcG9wdXAnKSk7XG4vLyBPcGVucyBlZGl0IHRhc2sgcG9wLXVwXG5jb25zdCBlZGl0VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRhc2stYnRuJyk7XG5lZGl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dUYXNrUG9wVXAoJ0VkaXQgVGFzaycpKTtcblxuLy8gQWRkIGEgbmV3IFByb2plY3RcbmNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC1pbnB1dCcpO1xuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC1idG4nKTtcbm5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT5cblx0cXVpY2tBZGRQcm9qZWN0KG5ld1Byb2plY3RJbnB1dC52YWx1ZSwgZSlcbik7XG5cbi8vIFBvcC11cCBjb25maXJtYXRpb24gdG8gZGVsZXRlIGEgcHJvamVjdFxuY29uc3QgY2FuY2VsUHJvamVjdFllc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtcHJvamVjdC15ZXMnKTtcbmNhbmNlbFByb2plY3RZZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZGVsZXRlUHJvamVjdChlKSk7XG5cbmNvbnN0IGNhbmNlbFByb2plY3ROb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtcHJvamVjdC1ubycpO1xuY2FuY2VsUHJvamVjdE5vQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG5cdCdjbGljaycsXG5cdCgpID0+XG5cdFx0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtcHJvamVjdC1wcm9tcHQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKVxuKTtcblxuLy8gRWRpdCBwcm9qZWN0IG5hbWVcbmNvbnN0IGVkaXRQcm9qZWN0TmFtZVN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuXHQnZWRpdC1wcm9qZWN0LW5hbWUtc3VibWl0J1xuKTtcbmNvbnN0IGVkaXRQcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdC1uYW1lLWlucHV0Jyk7XG5lZGl0UHJvamVjdE5hbWVTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZWRpdFByb2plY3ROYW1lKGUpKTtcblxuLy8gQ2FuY2VsIGVkaXQgUHJvamVjdCBuYW1lXG5jb25zdCBjYW5jZWxFZGl0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcblx0J2VkaXQtcHJvamVjdC1uYW1lLWNhbmNlbCdcbik7XG5jYW5jZWxFZGl0UHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuXHRoaWRlUG9wVXAoJ2VkaXQtcHJvamVjdC1wb3B1cCcpXG4pO1xuXG4vLyBBbGwgVGFza3MgUHJvamVjdFxuY29uc3QgYWxsVGFza3NQcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGwtdGFza3MtcHJvamVjdCcpO1xuYWxsVGFza3NQcm9qZWN0Q2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlckFsbFRhc2tzUHJvamVjdCgpKTtcblxuLy8gUXVpY2tseSBhZGQgYSBwcm9qZWN0XG5mdW5jdGlvbiBxdWlja0FkZFByb2plY3QocHJvamVjdE5hbWUsIGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRxdWlja0FkZFZhbGlkYXRpb24ocHJvamVjdE5hbWUsICdhZGQtcHJvamVjdC1lcnJvcnMnKTtcblx0aWYgKG5ld1Byb2plY3RJbnB1dC52YWx1ZSAhPT0gJycgJiYgbmV3UHJvamVjdElucHV0LnZhbHVlLmxlbmd0aCA8IDI2KSB7XG5cdFx0bmV3UHJvamVjdChwcm9qZWN0TmFtZSk7XG5cdH1cbn1cbi8vIENyZWF0ZXMgYSBuZXcgUHJvamVjdFxuZnVuY3Rpb24gbmV3UHJvamVjdChwcm9qZWN0TmFtZSkge1xuXHRwcm9qZWN0cy5wdXNoKGNyZWF0ZVByb2plY3QoY2FwaXRpbGl6ZShwcm9qZWN0TmFtZSksIFtdKSk7XG5cdHNhdmUocHJvamVjdHMpO1xuXHRyZW5kZXJBY3RpdmVQcm9qZWN0KHByb2plY3RzW3Byb2plY3RzLmxlbmd0aCAtIDFdKTtcblx0cmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuXHRyZXNldFRleHRJbnB1dChuZXdQcm9qZWN0SW5wdXQpO1xufVxuXG4vLyBVc2VzIGlucHV0IHRvIGVkaXQgcHJvamVjdCBuYW1lXG5mdW5jdGlvbiBlZGl0UHJvamVjdE5hbWUoZSkge1xuXHRjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByb2plY3QtbmFtZS1pbnB1dCcpO1xuXHRoaWRkZW5BY3RpdmVQcm9qZWN0LmVkaXROYW1lKGlucHV0LnZhbHVlKTtcblx0c2F2ZShwcm9qZWN0cyk7XG5cdHJlbmRlclByb2plY3RzKHByb2plY3RzKTtcblx0cmVzZXRUZXh0SW5wdXQoaW5wdXQpO1xuXHRoaWRlUG9wVXAoJ2VkaXQtcHJvamVjdC1wb3B1cCcpO1xufVxuXG5mdW5jdGlvbiBoaWRlUG9wVXAoaWQpIHtcblx0Y29uc3QgcG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cdHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdHJlc2V0VGV4dElucHV0KFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUtaW5wdXQnKSxcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWRlc2NyaXB0aW9uLWlucHV0JyksXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC1kdWUtZGF0ZS1pbnB1dCcpXG5cdCk7XG59XG5cbi8vIENyZWF0ZSBhIGNhcmQuIENhbiBiZSB1c2VkIGZvciBhIHRhc2sgb3IgYSBwcm9qZWN0XG5mdW5jdGlvbiBjcmVhdGVDYXJkQnRuKHR5cGUsIGVsQ2xhc3MsIGZ1bmMpIHtcblx0Y29uc3QgYnV0dG9uID0gY3JlYXRlRG9tRWxlbWVudCh0eXBlLCBlbENsYXNzKTtcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGZ1bmMoZSkpO1xuXHRyZXR1cm4gYnV0dG9uO1xufVxuXG4vLyBNYWtlcyB0aGUgXCJDcmVhdGUgbmV3IHRhc2sgcG9wLXVwXCIgdmlzaWJsZVxuZnVuY3Rpb24gc2hvd1Rhc2tQb3BVcCh0aXRsZSkge1xuXHRjaGFuZ2VQb3BVcFRpdGxlKHRpdGxlKTtcblx0Y29uc3QgcG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1wb3B1cCcpO1xuXHRpZiAocG9wVXAuc3R5bGUuZGlzcGxheSAhPSAnYmxvY2snKSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdmFsdWU9XCIwXCJgKS5jaGVja2VkID0gdHJ1ZTtcblx0XHRwb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0fSBlbHNlIHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdGlmICh0aXRsZSA9PT0gJ0VkaXQgVGFzaycpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLXRpdGxlLWlucHV0JykudmFsdWUgPVxuXHRcdFx0aGlkZGVuQWN0aXZlVGFzay50aXRsZTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWRlc2NyaXB0aW9uLWlucHV0JykudmFsdWUgPVxuXHRcdFx0aGlkZGVuQWN0aXZlVGFzay5kZXNjcmlwdGlvbjtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWR1ZS1kYXRlLWlucHV0JykudmFsdWUgPVxuXHRcdFx0aGlkZGVuQWN0aXZlVGFzay5kdWVEYXRlO1xuXHRcdGNoZWNrUmFkaW9CdG4oaGlkZGVuQWN0aXZlVGFzayk7XG5cdH1cbn1cblxuLy8gQ2hhbmdlIHBvcC11cCB0aXRsZVxuXG5mdW5jdGlvbiBjaGFuZ2VQb3BVcFRpdGxlKG5ld1RpdGxlKSB7XG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC10aXRsZScpO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9IG5ld1RpdGxlO1xufVxuLy8gTWFrZXMgdGhlIFwiQ3JlYXRlIGVkaXQgcHJvamVjdCBwb3AtdXBcIiB2aXNpYmxlXG5mdW5jdGlvbiBzaG93RWRpdFByb2plY3RQb3BVcChlKSB7XG5cdGNvbnN0IHBvcFVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdC1wb3B1cCcpO1xuXHRjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByb2plY3QtbmFtZS1pbnB1dCcpO1xuXHRpZiAocG9wVXAuc3R5bGUuZGlzcGxheSAhPSAnYmxvY2snKSB7XG5cdFx0Y29uc3QgaW5kZXggPSBlLmNvbXBvc2VkUGF0aCgpWzBdLmRhdGFzZXQuZWRpdFByb2plY3RCdG47XG5cblx0XHRpbnB1dC52YWx1ZSA9IHByb2plY3RzW2luZGV4XS50aXRsZTtcblx0XHRwb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRzZXRIaWRkZW5BY3RpdmVQcm9qZWN0KHByb2plY3RzW2luZGV4XSk7XG5cdH0gZWxzZSBwb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG4vLyBEZWxldGVzIGEgdGhlIHJlbGF0aXZlIHRhc2tcbmZ1bmN0aW9uIGRlbGV0ZVRhc2soZSkge1xuXHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRjb25zdCBpbmRleCA9IGUuY29tcG9zZWRQYXRoKClbMF0uZGF0YXNldC5kZWxldGVCdG47XG5cdGlmIChoaWRkZW5BY3RpdmVUYXNrID09PSBhY3RpdmVQcm9qZWN0LnRhc2tzW2luZGV4XSkge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLXBhbmVsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxuXHRnbG9iYWxEZWxldGVUYXNrKGluZGV4KTtcblx0YWN0aXZlUHJvamVjdC5yZW1vdmVUYXNrKGFjdGl2ZVByb2plY3QudGFza3NbaW5kZXhdKTtcblx0cmVuZGVyVGFza3MoYWN0aXZlUHJvamVjdC50YXNrcyk7XG5cdHNhdmUocHJvamVjdHMpO1xufVxuXG4vLyBEZWxldGVzIGEgdGFzayBnbG9iYWxseSBpZiB3b3JraW5nIGZyb20gXCJBbGwgVGFza3NcIiBQcm9qZWN0XG5mdW5jdGlvbiBnbG9iYWxEZWxldGVUYXNrKGluZGV4KSB7XG5cdGlmIChhY3RpdmVQcm9qZWN0LnRpdGxlID09PSAnQWxsIFRhc2tzJykge1xuXHRcdGNvbnN0IGlkID0gYWN0aXZlUHJvamVjdC50YXNrc1tpbmRleF0uaWQ7XG5cdFx0cHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuXHRcdFx0cHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cdFx0XHRcdGlmICh0YXNrLmlkID09PSBpZCkge1xuXHRcdFx0XHRcdHByb2plY3QucmVtb3ZlVGFzayh0YXNrKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLy8gRGVsZXRlcyB0aGUgcmVsYXRpdmUgUHJvamVjdFxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChlKSB7XG5cdGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGUuY29tcG9zZWRQYXRoKClbMF0uZGF0YXNldClbMF07XG5cdGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoZS5jb21wb3NlZFBhdGgoKVswXS5kYXRhc2V0W2tleV0pO1xuXHRpZiAoYWN0aXZlUHJvamVjdCA9PT0gcHJvamVjdHNbaW5kZXhdKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtcGFuZWwnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdGluZGV4ID09PSAwXG5cdFx0XHQ/IHNldEFjdGl2ZVByb2plY3QocHJvamVjdHNbaW5kZXggKyAxXSlcblx0XHRcdDogc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0c1tpbmRleCAtIDFdKTtcblx0fVxuXHRyZW1vdmVQcm9qZWN0KGluZGV4KTtcblx0c2F2ZShwcm9qZWN0cyk7XG5cdHJlbmRlclByb2plY3RzKHByb2plY3RzKTtcblx0YWN0aXZlUHJvamVjdCAhPT0gdW5kZWZpbmVkXG5cdFx0PyByZW5kZXJBY3RpdmVQcm9qZWN0KGFjdGl2ZVByb2plY3QpXG5cdFx0OiByZW5kZXJBbGxUYXNrc1Byb2plY3QoKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1wcm9qZWN0LXByb21wdCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbi8vIE5PVCBXT1JLSU5HIFlFVC4gVG9nZ2xlcyBhIHRhc2sgYXMgXCJEb25lXCJcbmZ1bmN0aW9uIHRvZ2dsZVRhc2tEb25lKGUpIHtcblx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0Y29uc3QgaW5kZXggPSBlLmNvbXBvc2VkUGF0aCgpWzBdLmRhdGFzZXQuZG9uZUJ0bjtcblx0Y29uc3QgdGFzayA9IGFjdGl2ZVByb2plY3QudGFza3NbaW5kZXhdO1xuXHR0YXNrLnRvZ2dsZURvbmUoKTtcblx0aWYgKHRhc2suaXNEb25lKSB7XG5cdFx0YWN0aXZlUHJvamVjdC5hZGRUYXNrKHRhc2spO1xuXHRcdGFjdGl2ZVByb2plY3QucmVtb3ZlVGFzayh0YXNrKTtcblx0fSBlbHNlIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFjdGl2ZVByb2plY3QudGFza3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChhY3RpdmVQcm9qZWN0LnRhc2tzW2ldLmlzRG9uZSkge1xuXHRcdFx0XHRhY3RpdmVQcm9qZWN0LnJlbW92ZVRhc2sodGFzayk7XG5cdFx0XHRcdGlmIChpICE9PSAwICYmIGFjdGl2ZVByb2plY3QudGFza3NbaSAtIDFdLmlzRG9uZSkge1xuXHRcdFx0XHRcdGFjdGl2ZVByb2plY3QudGFza3Muc3BsaWNlKGkgLSAxLCAwLCB0YXNrKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhY3RpdmVQcm9qZWN0LnRhc2tzLnNwbGljZShpLCAwLCB0YXNrKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmVuZGVyVGFza3MoYWN0aXZlUHJvamVjdC50YXNrcyk7XG5cdHNhdmUocHJvamVjdHMpO1xufVxuXG4vLyBVc2UgcXVpY2tBZGQgdGV4dCBpbnB1dCB0byBjcmVhdGUgYSBuZXcgdGFzayB3aXRoIG9ubHkgYSB0aXRsZVxuZnVuY3Rpb24gcXVpY2tBZGQocHJvamVjdCwgZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdHF1aWNrQWRkVmFsaWRhdGlvbihxdWlja0FkZElucHV0LnZhbHVlLCAnYWRkLXRhc2stZXJyb3JzJyk7XG5cdGlmIChhY3RpdmVQcm9qZWN0LnRpdGxlICE9PSAnQWxsIFRhc2tzJykge1xuXHRcdGlmIChxdWlja0FkZElucHV0LnZhbHVlICE9PSAnJyAmJiBxdWlja0FkZElucHV0LnZhbHVlLmxlbmd0aCA8IDI2KSB7XG5cdFx0XHRpZiAocHJvamVjdHNbMF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRuZXdQcm9qZWN0KCdQZXJzb25hbCcpO1xuXHRcdFx0XHRzZXRBY3RpdmVQcm9qZWN0KHByb2plY3RzWzBdKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKFxuXHRcdFx0XHRxdWlja0FkZElucHV0LnZhbHVlLFxuXHRcdFx0XHQnJyxcblx0XHRcdFx0dW5kZWZpbmVkLFxuXHRcdFx0XHQnMCcsXG5cdFx0XHRcdHVuZGVmaW5lZCxcblx0XHRcdFx0TWF0aC5yYW5kb20oMSlcblx0XHRcdCk7XG5cdFx0XHRwcm9qZWN0LmFkZFRhc2sodGFzayk7XG5cdFx0XHRzYXZlKHByb2plY3RzKTtcblx0XHRcdHJlbmRlclRhc2tzKHByb2plY3QudGFza3MpO1xuXHRcdFx0cmVzZXRUZXh0SW5wdXQocXVpY2tBZGRJbnB1dCk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIERlY2lkZXMgdG8gY3JlYXRlIGEgbmV3IHRhc2sgb3IgZWRpdCBhbiBleGlzdGluZyBvbmVcbmZ1bmN0aW9uIGNyZWF0ZU9yRWRpdFRhc2socHJvamVjdCkge1xuXHRwb3BVcEZvcm1WYWxpZGF0aW9uKCk7XG5cdGNvbnN0IGVycm9ycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZXJyb3JzJyk7XG5cdGlmIChlcnJvcnMudGV4dENvbnRlbnQgPT09ICcnKSB7XG5cdFx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLXRpdGxlJykudGV4dENvbnRlbnQ7XG5cdFx0dGl0bGUgPT09ICdDcmVhdGUgTmV3IFRhc2snID8gZnVsbEFkZChwcm9qZWN0KSA6IGVkaXRUYXNrKHByb2plY3QpO1xuXHRcdGhpZGVQb3BVcCgndGFzay1wb3B1cCcpO1xuXHRcdHJlc2V0VGV4dElucHV0KFxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC10aXRsZS1pbnB1dCcpLFxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC1kZXNjcmlwdGlvbi1pbnB1dCcpLFxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC1kdWUtZGF0ZS1pbnB1dCcpXG5cdFx0KTtcblx0fVxufVxuXG4vLyBDcmVhdGVzIGEgdGFzayB3aXRoIGEgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUgZGF0ZSBhbmQgcHJpb3JpdHlcbmZ1bmN0aW9uIGZ1bGxBZGQocHJvamVjdCkge1xuXHRpZiAoYWN0aXZlUHJvamVjdC50aXRsZSAhPT0gJ0FsbCBUYXNrcycpIHtcblx0XHRpZiAocHJvamVjdHNbMF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bmV3UHJvamVjdCgnUGVyc29uYWwnKTtcblx0XHRcdHNldEFjdGl2ZVByb2plY3QocHJvamVjdHNbMF0pO1xuXHRcdH1cblx0XHRjb25zdCB0YXNrID0gY3JlYXRlVGFzayhcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUtaW5wdXQnKS52YWx1ZSxcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZGVzY3JpcHRpb24taW5wdXQnKS52YWx1ZSxcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZHVlLWRhdGUtaW5wdXQnKS52YWx1ZSxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWUsXG5cdFx0XHR1bmRlZmluZWQsXG5cdFx0XHRNYXRoLnJhbmRvbSgxKVxuXHRcdCk7XG5cdFx0cHJvamVjdC5hZGRUYXNrKHRhc2spO1xuXHRcdHNhdmUocHJvamVjdHMpO1xuXHRcdHJlbmRlclRhc2tzKHByb2plY3QudGFza3MpO1xuXHRcdHJlbmRlclRhc2tEZXRhaWxzKHRhc2spO1xuXHR9XG59XG5cbi8vIEVkaXQgdGhlIHRhc2tcbmZ1bmN0aW9uIGVkaXRUYXNrKHByb2plY3QpIHtcblx0Y29uc3QgY2hlY2tlZFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHQnaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnXG5cdCk7XG5cblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLXRpdGxlLWlucHV0JykudmFsdWU7XG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC1kZXNjcmlwdGlvbi1pbnB1dCcpLnZhbHVlO1xuXHRjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC1kdWUtZGF0ZS1pbnB1dCcpLnZhbHVlO1xuXHRjb25zdCBwcmlvcml0eSA9IGNoZWNrZWRQcmlvcml0eSA9PT0gbnVsbCA/IDAgOiBjaGVja2VkUHJpb3JpdHkudmFsdWU7XG5cblx0aGlkZGVuQWN0aXZlVGFzay5lZGl0VGl0bGUodGl0bGUpO1xuXHRoaWRkZW5BY3RpdmVUYXNrLmVkaXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbik7XG5cdGhpZGRlbkFjdGl2ZVRhc2suZWRpdER1ZURhdGUoZHVlRGF0ZSk7XG5cdGhpZGRlbkFjdGl2ZVRhc2suZWRpdFByaW9yaXR5KHByaW9yaXR5KTtcblx0c2F2ZShwcm9qZWN0cyk7XG5cdHJlbmRlclRhc2tzKHByb2plY3QudGFza3MpO1xuXHRyZW5kZXJUYXNrRGV0YWlscyhoaWRkZW5BY3RpdmVUYXNrKTtcbn1cblxuLy8gQ2hlY2tzIHJhZGlvIGJ1dHRvbiB3aXRoIHRhc2tzIHByZXZpb3VzIHNlbGVjdGlvblxuZnVuY3Rpb24gY2hlY2tSYWRpb0J0bih0YXNrKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3ZhbHVlPVwiJHt0YXNrLnByaW9yaXR5fVwiYCkuY2hlY2tlZCA9IHRydWU7XG59XG5cbi8vIFJlbmRlcnMgXCJBbGwgVGFza3NcIiBwcm9qZWN0XG5mdW5jdGlvbiByZW5kZXJBbGxUYXNrc1Byb2plY3QoKSB7XG5cdGNvbnN0IGFsbFRhc2tzUHJvamVjdCA9IGNyZWF0ZVByb2plY3QoJ0FsbCBUYXNrcycsIGNyZWF0ZUFsbFRhc2tzQXJyYXkoKSk7XG5cdHJlbmRlckFjdGl2ZVByb2plY3QoYWxsVGFza3NQcm9qZWN0KTtcbn1cbiIsImV4cG9ydCB7XG5cdHJlbmRlclByb2plY3RzLFxuXHRyZW5kZXJUYXNrcyxcblx0c2VsZWN0UHJvamVjdCxcblx0cmVzZXRUZXh0SW5wdXQsXG5cdGNyZWF0ZURvbUVsZW1lbnQsXG5cdHJlbmRlclRhc2tEZXRhaWxzLFxuXHRwb3BVcEZvcm1WYWxpZGF0aW9uLFxuXHRyZW5kZXJBY3RpdmVQcm9qZWN0LFxuXHRjYXBpdGlsaXplLFxuXHRxdWlja0FkZFZhbGlkYXRpb24sXG59O1xuaW1wb3J0IHtcblx0c2V0QWN0aXZlUHJvamVjdCxcblx0cHJvamVjdHMsXG5cdGFjdGl2ZVByb2plY3QsXG5cdHJlbW92ZVByb2plY3QsXG59IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQge1xuXHRjcmVhdGVDYXJkQnRuLFxuXHRkZWxldGVUYXNrLFxuXHR0b2dnbGVUYXNrRG9uZSxcblx0ZGVsZXRlUHJvamVjdCxcblx0c2hvd0VkaXRQcm9qZWN0UG9wVXAsXG59IGZyb20gJy4vYnV0dG9ucyc7XG5pbXBvcnQgeyBzZXRIaWRkZW5BY3RpdmVUYXNrIH0gZnJvbSAnLi90YXNrJztcblxuLy8gQXNzaWduIERhdGFzZXQgdG8gUHJvamVjdCBDYXJkXG5mdW5jdGlvbiBhc3NpZ25Qcm9qZWN0RGF0YUluZGV4KGluZGV4LCBjYXJkLCBlZGl0QnRuLCBkZWxldGVCdG4pIHtcblx0Y2FyZC5kYXRhc2V0LnByb2plY3QgPSBpbmRleDtcblx0ZWRpdEJ0bi5kYXRhc2V0LmVkaXRQcm9qZWN0QnRuID0gaW5kZXg7XG5cdGRlbGV0ZUJ0bi5kYXRhc2V0LmRlbGV0ZVByb2plY3RCdG4gPSBpbmRleDtcbn1cblxuLy8gQ3JlYXRlIGEgUHJvamVjdCBDYXJkXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KSB7XG5cdGNvbnN0IGluZGV4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbGlzdCcpLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG5cdGNvbnN0IGNhcmQgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCAncHJvamVjdC1jYXJkJyk7XG5cdGNvbnN0IGRlbGV0ZUJ0biA9IGNyZWF0ZUNhcmRCdG4oJ2J1dHRvbicsICdzbWFsbC1idG4nLCBzaG93RGVsZXRlUHJvamVjdCk7XG5cdGNvbnN0IHRpdGxlID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgJ3Byb2plY3QtdGl0bGUnKTtcblx0Y29uc3QgZWRpdEJ0biA9IGNyZWF0ZUNhcmRCdG4oJ2J1dHRvbicsICdzbWFsbC1idG4nLCBzaG93RWRpdFByb2plY3RQb3BVcCk7XG5cdGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSAnJiMxMDAwNzsnO1xuXHRlZGl0QnRuLmlubmVySFRNTCA9ICcmIzk5OTgnO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cdGFwcGVuZFRvUGFyZW50KGNhcmQsIGVkaXRCdG4sIHRpdGxlLCBkZWxldGVCdG4pO1xuXHRhc3NpZ25Qcm9qZWN0RGF0YUluZGV4KGluZGV4LCBjYXJkLCBlZGl0QnRuLCBkZWxldGVCdG4pO1xuXHRjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdHJlbmRlckFjdGl2ZVByb2plY3QocHJvamVjdCk7XG5cdH0pO1xuXHRyZXR1cm4gY2FyZDtcbn1cblxuLy8gQXBwZW5kcyBQcm9qZWN0IENhcmQgdG8gUHJvamVjdCBMaXN0XG5mdW5jdGlvbiBhcHBlbmRQcm9qZWN0KHByb2plY3QpIHtcblx0Y29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWxpc3QnKTtcblx0Y29uc3QgY2FyZCA9IGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpO1xuXHRsaXN0LmFwcGVuZENoaWxkKGNhcmQpO1xufVxuXG4vLyBBcHBlbmRzIGFsbCBQcm9qZWN0IENhcmQgdG8gUHJvamVjdCBMaXN0XG5mdW5jdGlvbiBhcHBlbmRBbGxQcm9qZWN0cyhwcm9qZWN0KSB7XG5cdHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IGFwcGVuZFByb2plY3QocHJvamVjdCkpO1xufVxuXG4vLyBSZW5kZXJzIFByb2plY3RzXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cykge1xuXHRyZXNldEVsZW1lbnRzKCcucHJvamVjdC1jYXJkJyk7XG5cdGFwcGVuZEFsbFByb2plY3RzKCk7XG59XG5cbi8vIFJlbmRlcnMgdGhlIGFjdGl2ZSBwcm9qZWN0cyB0YXNrc1xuZnVuY3Rpb24gcmVuZGVyQWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XG5cdHNldEFjdGl2ZVByb2plY3QocHJvamVjdCk7XG5cdHNlbGVjdFByb2plY3QocHJvamVjdCk7XG5cdHJlbmRlclRhc2tzKHByb2plY3QudGFza3MpO1xufVxuXG4vLyBSZW5kZXJzIHRoZSBhY3RpdmUgcHJvamVjdHNcbmZ1bmN0aW9uIHNlbGVjdFByb2plY3QocHJvamVjdCkge1xuXHRjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZScpO1xuXHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xufVxuXG4vLyBBc3NpZ25zIGRhdGFzZXQgdG8gdGFzayBjYXJkXG5mdW5jdGlvbiBhc3NpZ25UYXNrRGF0YUluZGV4KGluZGV4LCBjYXJkLCBkb25lQnRuLCBkZWxldGVCdG4sIHRpdGxlKSB7XG5cdGNhcmQuZGF0YXNldC50YXNrID0gaW5kZXg7XG5cdGRvbmVCdG4uZGF0YXNldC5kb25lQnRuID0gaW5kZXg7XG5cdGRlbGV0ZUJ0bi5kYXRhc2V0LmRlbGV0ZUJ0biA9IGluZGV4O1xuXHR0aXRsZS5kYXRhc2V0LnRpdGxlID0gaW5kZXg7XG59XG5cbi8vIENyZWF0ZSBhIG5ldyBUYXNrIENhcmRcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tDYXJkKHRhc2spIHtcblx0Y29uc3QgaW5kZXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1saXN0JykuY2hpbGRyZW4ubGVuZ3RoO1xuXHRjb25zdCBjYXJkID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgJ3Rhc2stY2FyZCcpO1xuXHRjb25zdCBkb25lQnRuID0gY3JlYXRlQ2FyZEJ0bignYnV0dG9uJywgJ3NtYWxsLWJ0bicsIHRvZ2dsZVRhc2tEb25lKTtcblx0Y29uc3QgZGVsZXRlQnRuID0gY3JlYXRlQ2FyZEJ0bignYnV0dG9uJywgJ3NtYWxsLWJ0bicsIGRlbGV0ZVRhc2spO1xuXHRjb25zdCB0aXRsZSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsICd0YXNrLXRpdGxlJyk7XG5cdGNhcmQuY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktJHt0YXNrLnByaW9yaXR5fWApO1xuXHR0YXNrRG9uZSh0YXNrLCBjYXJkLCB0aXRsZSk7XG5cdGRvbmVCdG4uaW5uZXJIVE1MID0gJyYjMTAwMDMnO1xuXHRkZWxldGVCdG4uaW5uZXJIVE1MID0gJyYjMTAwMDc7Jztcblx0dGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHRhcHBlbmRUb1BhcmVudChjYXJkLCBkb25lQnRuLCB0aXRsZSwgZGVsZXRlQnRuKTtcblx0YXNzaWduVGFza0RhdGFJbmRleChpbmRleCwgY2FyZCwgZG9uZUJ0biwgZGVsZXRlQnRuLCB0aXRsZSk7XG5cdGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJUYXNrRGV0YWlscyh0YXNrKSk7XG5cdHJldHVybiBjYXJkO1xufVxuXG4vLyBBcHBlbmQgYSB0YXNrIGNhcmRcbmZ1bmN0aW9uIGFwcGVuZFRhc2sodGFzaykge1xuXHRjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpO1xuXHRjb25zdCBjYXJkID0gY3JlYXRlVGFza0NhcmQodGFzayk7XG5cdGxpc3QuYXBwZW5kQ2hpbGQoY2FyZCk7XG59XG5cbi8vIEFwcGVuZCBhbGwgdGFzayBjYXJkc1xuZnVuY3Rpb24gYXBwZW5kQWxsVGFza3ModGFza3MpIHtcblx0aWYgKHRhc2tzICE9PSB1bmRlZmluZWQpIHtcblx0XHR0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiBhcHBlbmRUYXNrKHRhc2spKTtcblx0fVxufVxuXG4vLyBSZW5kZXJzIFByb2plY3RzXG5mdW5jdGlvbiByZW5kZXJUYXNrcyh0YXNrcykge1xuXHRyZXNldEVsZW1lbnRzKCcudGFzay1jYXJkJyk7XG5cdGFwcGVuZEFsbFRhc2tzKHRhc2tzKTtcbn1cblxuLy8gUmVuZGVycyBUYXNrIERldGFpbHMgb24gZGV0YWlscyBwYW5lbFxuZnVuY3Rpb24gcmVuZGVyVGFza0RldGFpbHModGFzaykge1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLXRpdGxlJyk7XG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtZGVzY3JpcHRpb24nKTtcblx0Y29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLWR1ZS1kYXRlJyk7XG5cdGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtcHJpb3JpdHknKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtcGFuZWwnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0dGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHRkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb24gPyBgJHt0YXNrLmRlc2NyaXB0aW9ufWAgOiAnJztcblx0ZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZSA/IGBEdWUgRGF0ZTogJHt0YXNrLmR1ZURhdGV9YCA6ICcnO1xuXHRpZiAodGFzay5wcmlvcml0eSA9PT0gJzEnKSB7XG5cdFx0cHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICEnO1xuXHR9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICcyJykge1xuXHRcdHByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAhISc7XG5cdH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gJzMnKSB7XG5cdFx0cHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICEhISc7XG5cdH1cblx0c2V0SGlkZGVuQWN0aXZlVGFzayh0YXNrKTtcbn1cblxuLy8gQXBwZW5kcyBtdWx0aXBsZSBlbGVtZW50cyB0byBhIGRpdlxuZnVuY3Rpb24gYXBwZW5kVG9QYXJlbnQocGFyZW50LCAuLi5hcmdzKSB7XG5cdGFyZ3MuZm9yRWFjaCgoYXJnKSA9PiBwYXJlbnQuYXBwZW5kQ2hpbGQoYXJnKSk7XG59XG5cbi8vIENyZWF0ZSBhIERPTSBlbGVtZW50IHdpdGggcmVsYXRpdmUgY2xhc3NcbmZ1bmN0aW9uIGNyZWF0ZURvbUVsZW1lbnQodHlwZSwgZWxDbGFzcykge1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuXHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7ZWxDbGFzc31gKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8vIFJlc2V0cyBhbGwgZWxlbWVudHMgd2l0aCBhIGNlcnRhaW4gY2xhc3NcbmZ1bmN0aW9uIHJlc2V0RWxlbWVudHMoZWxDbGFzcykge1xuXHRsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsQ2xhc3MpO1xuXHRlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LnJlbW92ZSgpKTtcbn1cblxuLy8gUmVzZXRzIHRleHQgaW5wdXRcbmZ1bmN0aW9uIHJlc2V0VGV4dElucHV0KC4uLmFyZ3MpIHtcblx0YXJncy5mb3JFYWNoKChhcmcpID0+IChhcmcudmFsdWUgPSAnJykpO1xufVxuXG4vLyBBZGRzIHRhc2stZG9uZSBhbmQgJ3Rhc2stdGl0bGUtZG9uZScgY2xhc3MgdG8gdGFzayBjYXJkIGFuZCB0aXRsZVxuXG5mdW5jdGlvbiB0YXNrRG9uZSh0YXNrLCBjYXJkLCB0aXRsZSkge1xuXHRpZiAodGFzay5pc0RvbmUgPT09IHRydWUpIHtcblx0XHRjYXJkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZG9uZScpO1xuXHRcdHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUtZG9uZScpO1xuXHR9IGVsc2Uge1xuXHRcdGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1kb25lJyk7XG5cdFx0dGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgndGFzay10aXRsZS1kb25lJyk7XG5cdH1cbn1cblxuLy8gRm9ybSB2YWxpZGF0aW9uXG5cbmZ1bmN0aW9uIHBvcFVwRm9ybVZhbGlkYXRpb24oKSB7XG5cdGNvbnN0IGVycm9yTGlzdCA9IFtdO1xuXHRjb25zdCBwb3BVcFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC10aXRsZScpLnRleHRDb250ZW50O1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUtaW5wdXQnKS52YWx1ZTtcblx0Y29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZHVlLWRhdGUtaW5wdXQnKS52YWx1ZTtcblx0YWN0aXZlUHJvamVjdC50aXRsZSA9PT0gJ0FsbCBUYXNrcycgJiYgcG9wVXBUaXRsZSA9PT0gJ0NyZWF0ZSBOZXcgVGFzaydcblx0XHQ/IGVycm9yTGlzdC5wdXNoKCdDYW5ub3QgYWRkIHRhc2tzIHRvIFwiQWxsIFRhc2tzXCInKVxuXHRcdDogZXJyb3JMaXN0LnB1c2godGl0bGVWYWxpZGF0aW9uKHRpdGxlKSk7XG5cdGVycm9yTGlzdC5wdXNoKGR1ZURhdGVWYWxpZGF0aW9uKGR1ZURhdGUpKTtcblx0c2hvd0Vycm9ycyhlcnJvckxpc3QsICdwb3AtdXAtZXJyb3JzJyk7XG59XG5cbmZ1bmN0aW9uIHF1aWNrQWRkVmFsaWRhdGlvbih0aXRsZSwgZXJyb3JzSWQpIHtcblx0Y29uc3QgZXJyb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXJyb3JzSWQpO1xuXHRlcnJvcnMudGV4dENvbnRlbnQgPVxuXHRcdGFjdGl2ZVByb2plY3QudGl0bGUgPT09ICdBbGwgVGFza3MnICYmIGVycm9yc0lkID09PSAnYWRkLXRhc2stZXJyb3JzJ1xuXHRcdFx0PyAnQ2Fubm90IGFkZCB0YXNrcyB0byBcIkFsbCBUYXNrc1wiJ1xuXHRcdFx0OiB0aXRsZVZhbGlkYXRpb24odGl0bGUpO1xufVxuLy8gVGl0bGUgdmFsaWRhdGlvblxuZnVuY3Rpb24gdGl0bGVWYWxpZGF0aW9uKHRpdGxlKSB7XG5cdGlmICh0aXRsZSA9PT0gJycpIHtcblx0XHRyZXR1cm4gJ0luc2VydCB0aXRsZSc7XG5cdH0gZWxzZSBpZiAodGl0bGUubGVuZ3RoID4gMjUpIHtcblx0XHRyZXR1cm4gJ1RpdGxlIG1heCAyNSBjaGFyYWN0ZXJzJztcblx0fVxufVxuXG4vLyBEdWUgRGF0ZSBub3QgaW4gcGFzdFxuZnVuY3Rpb24gZHVlRGF0ZVZhbGlkYXRpb24oZHVlRGF0ZSkge1xuXHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cdGNvbnN0IGlucHV0RGF0ZSA9XG5cdFx0ZHVlRGF0ZSAhPT0gJycgPyBuZXcgRGF0ZShkdWVEYXRlKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSA6ICcnO1xuXHRpZiAoaW5wdXREYXRlICE9PSAnJyAmJiBpbnB1dERhdGUgPCB0b2RheSkge1xuXHRcdHJldHVybiAnRHVlIERhdGUgaXMgaW4gdGhlIHBhc3QnO1xuXHR9XG59XG4vLyBTaG93IGZvcm0gVmFsaWRhdGlvbiBlcnJvcnNcbmZ1bmN0aW9uIHNob3dFcnJvcnMoZXJyb3JMaXN0LCBpZCkge1xuXHRjb25zdCBlcnJvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cdGVycm9ycy50ZXh0Q29udGVudCA9IGVycm9yTGlzdC5qb2luKCcgfCAnKTtcblx0aWYgKGVycm9ycy50ZXh0Q29udGVudCA9PT0gJyB8ICcpIHtcblx0XHRlcnJvcnMudGV4dENvbnRlbnQgPSAnJztcblx0fVxuXHRpZiAoZXJyb3JMaXN0LmluY2x1ZGVzKHVuZGVmaW5lZCkpIHtcblx0XHRlcnJvcnMudGV4dENvbnRlbnQgPSBlcnJvcnMudGV4dENvbnRlbnQucmVwbGFjZUFsbCgnfCcsICcnKTtcblx0fVxufVxuXG4vLyBDYXBpdGlsaXplIGZpcnN0IGxldHRlclxuZnVuY3Rpb24gY2FwaXRpbGl6ZShzdHJpbmcpIHtcblx0cmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cblxuLy8gU2hvdyBkZWxldGUgcHJvamVjdCBwcm9tcHQgcG9wLXVwXG5mdW5jdGlvbiBzaG93RGVsZXRlUHJvamVjdChlKSB7XG5cdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGUuY29tcG9zZWRQYXRoKClbMF0uZGF0YXNldClbMF07XG5cdGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoZS5jb21wb3NlZFBhdGgoKVswXS5kYXRhc2V0W2tleV0pO1xuXHQvLyBPbmx5IGRlbGV0ZXMgYW4gZW1wdHkgcHJvamVjdCB3aXRob3V0IHByb21wdFxuXHRpZiAocHJvamVjdHNbaW5kZXhdLnRhc2tzWzBdID09PSB1bmRlZmluZWQpIHtcblx0XHRkZWxldGVQcm9qZWN0KGUpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIGFzc2lnbnMgdGhlIFwieWVzXCIgYnV0dG9uIG9uIHRoZSBkZWxldGUgcHJvamVjdCBwcm9tcHQgdGhlIGRhdGFzZXQgb2YgdGhlIHByb2plY3QgaW50ZW5kZWQgdG8gYmUgZGVsZXRlZFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtcHJvamVjdC15ZXMnKS5kYXRhc2V0LmV2ZW50ID1cblx0XHRcdGUuY29tcG9zZWRQYXRoKClbMF0uZGF0YXNldC5kZWxldGVQcm9qZWN0QnRuO1xuXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1wcm9qZWN0LXByb21wdCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgY3JlYXRlUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5leHBvcnQgeyBzYXZlLCBsb2FkIH07XG5cbi8vIFNhdmVzIHRvIGxvY2FsU3RvcmFnZVxuZnVuY3Rpb24gc2F2ZShwcm9qZWN0cykge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG4vLyBMb2FkcyBmcm9tIGxvY2FsU3RvcmFnZVxuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG5cdHJldHVybiBwcm9qZWN0cyA9PT0gbnVsbCA/IFtdIDogcHJvamVjdHM7XG59XG4iLCJleHBvcnQge1xuXHRhY3RpdmVQcm9qZWN0LFxuXHRoaWRkZW5BY3RpdmVQcm9qZWN0LFxuXHRwcm9qZWN0cyxcblx0Y3JlYXRlUHJvamVjdCxcblx0c2V0QWN0aXZlUHJvamVjdCxcblx0c2V0SGlkZGVuQWN0aXZlUHJvamVjdCxcblx0cmVtb3ZlUHJvamVjdCxcblx0YWxsVGFza3NQcm9qZWN0LFxuXHRjcmVhdGVBbGxUYXNrc0FycmF5LFxufTtcbmltcG9ydCB7IGxvYWQgfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSAnLi90YXNrJztcbmltcG9ydCB7IG5ld1Byb2plY3QgfSBmcm9tICcuL2J1dHRvbnMnO1xuXG4vLyBQcm9qZWN0IEZhY3RvcnkgRnVuY3Rpb25cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIHRhc2tzKSB7XG5cdGNvbnN0IHByb3RvID0ge1xuXHRcdGFkZFRhc2s6IGZ1bmN0aW9uICh0YXNrKSB7XG5cdFx0XHR0aGlzLnRhc2tzLnB1c2godGFzayk7XG5cdFx0fSxcblxuXHRcdHJlbW92ZVRhc2s6IGZ1bmN0aW9uICh0YXNrKSB7XG5cdFx0XHRjb25zdCBpbmRleCA9IHRoaXMudGFza3MuaW5kZXhPZih0YXNrKTtcblx0XHRcdHRoaXMudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9LFxuXHRcdGVkaXROYW1lOiBmdW5jdGlvbiAobmV3VGl0bGUpIHtcblx0XHRcdHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcblx0XHR9LFxuXHR9O1xuXHRjb25zdCBwcm9qZWN0ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKHByb3RvKSwge1xuXHRcdHRpdGxlLFxuXHRcdHRhc2tzLFxuXHR9KTtcblx0cmV0dXJuIHByb2plY3Q7XG59XG5cbi8vIFNldHMgdGhlIEFjdGl2ZSBQcm9qZWN0XG5mdW5jdGlvbiBzZXRBY3RpdmVQcm9qZWN0KHByb2plY3QpIHtcblx0YWN0aXZlUHJvamVjdCA9IHByb2plY3Q7XG59XG4vLyBSZW1vdmVzIHByb2plY3QgZnJvbSBQcm9qZWN0cyBhcnJheVxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChpbmRleCkge1xuXHRwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xufVxuXG4vLyBMb2FkcyBsb2NhbFN0b3JhZ2VcbmxldCBwcm9qZWN0cyA9IGxvYWQoKTtcblxuLy8gUmV0dXJucyBhbiBhcnJheSB3aXRoIGFsbCB0YXNrc1xuZnVuY3Rpb24gY3JlYXRlQWxsVGFza3NBcnJheSgpIHtcblx0cmV0dXJuIHByb2plY3RzLnJlZHVjZSgoYXJyYXksIHByb2plY3QpID0+IHtcblx0XHRwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcblx0XHRcdGNyZWF0ZVRhc2sodGFzay50aXRsZSk7XG5cdFx0XHRhcnJheS5wdXNoKHRhc2spO1xuXHRcdH0pO1xuXHRcdHJldHVybiBhcnJheTtcblx0fSwgW10pO1xufVxuXG4vLyBDcmVhdGVzIGFsbFRhc2tzUHJvamVjdFxubGV0IGFsbFRhc2tzUHJvamVjdCA9IGNyZWF0ZVByb2plY3QoJ0FsbCBUYXNrcycsIGNyZWF0ZUFsbFRhc2tzQXJyYXkoKSk7XG5cbi8vIERlZmluZXMgdGhlIGFjdGl2ZSBQcm9qZWN0XG5sZXQgYWN0aXZlUHJvamVjdDtcblxuLy8gSGlkZGVuIGFjdGl2ZSBwcm9qZWN0XG5cbmxldCBoaWRkZW5BY3RpdmVQcm9qZWN0O1xuXG4vLyBTZXRzIHRoZSBIaWRkZW4gYWN0aXZlIHByb2plY3QgKG5lZWRlZCB0byBlZGl0IHByb2plY3QpXG5cbmZ1bmN0aW9uIHNldEhpZGRlbkFjdGl2ZVByb2plY3QocHJvamVjdCkge1xuXHRoaWRkZW5BY3RpdmVQcm9qZWN0ID0gcHJvamVjdDtcbn1cbiIsImV4cG9ydCB7IGhpZGRlbkFjdGl2ZVRhc2ssIGNyZWF0ZVRhc2ssIHNldEhpZGRlbkFjdGl2ZVRhc2sgfTtcblxuLy8gVGFzayBGYWN0b3J5IEZ1bmN0aW9uXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzRG9uZSwgaWQpIHtcblx0Y29uc3QgcHJvdG8gPSB7XG5cdFx0ZWRpdFRpdGxlOiBmdW5jdGlvbiAobmV3VGl0bGUpIHtcblx0XHRcdHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcblx0XHR9LFxuXHRcdGVkaXREZXNjcmlwdGlvbjogZnVuY3Rpb24gKG5ld0Rlc2NyaXB0aW9uKSB7XG5cdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG5cdFx0fSxcblx0XHRlZGl0RHVlRGF0ZTogZnVuY3Rpb24gKG5ld0R1ZURhdGUpIHtcblx0XHRcdHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG5cdFx0fSxcblx0XHRlZGl0UHJpb3JpdHk6IGZ1bmN0aW9uIChuZXdQcmlvcml0eSkge1xuXHRcdFx0dGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuXHRcdH0sXG5cdFx0dG9nZ2xlRG9uZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5pc0RvbmUgPSAhdGhpcy5pc0RvbmU7XG5cdFx0fSxcblx0fTtcblx0Y29uc3QgdGFzayA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShwcm90byksIHtcblx0XHR0aXRsZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRkdWVEYXRlLFxuXHRcdHByaW9yaXR5LFxuXHRcdGlzRG9uZSxcblx0XHRpZCxcblx0fSk7XG5cdHJldHVybiB0YXNrO1xufVxuXG4vLyBIaWRkZW4gYWN0aXZlIHRhc2tcblxubGV0IGhpZGRlbkFjdGl2ZVRhc2s7XG5cbi8vIFNldHMgdGhlIEhpZGRlbiB0YXNrIHByb2plY3QgKG5lZWRlZCB0byBlZGl0IHRhc2spXG5cbmZ1bmN0aW9uIHNldEhpZGRlbkFjdGl2ZVRhc2sodGFzaykge1xuXHRoaWRkZW5BY3RpdmVUYXNrID0gdGFzaztcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gJy4vdGFzayc7XG5pbXBvcnQge1xuXHRhY3RpdmVQcm9qZWN0LFxuXHRwcm9qZWN0cyxcblx0c2V0QWN0aXZlUHJvamVjdCxcblx0Y3JlYXRlUHJvamVjdCxcblx0cGVyc29uYWwsXG5cdHdvcmssXG59IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyByZW5kZXJUYXNrcywgcmVuZGVyUHJvamVjdHMsIHNlbGVjdFByb2plY3QgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBxdWlja0FkZCwgbmV3UHJvamVjdCB9IGZyb20gJy4vYnV0dG9ucyc7XG5pbXBvcnQgeyBzYXZlLCBsb2FkIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuXG4vLyBSZWNyZWF0ZXMgYWxsIFByb2plY3RzIGFuZCBUYXNrcyB3aXRoIHdvcmtpbmcgX19wcm90b19fIGFmdGVyIGxvYWRpbmcgaXQgZnJvbSBsb2NhbFN0b3JhZ2VcbmZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0cHJvamVjdHNbaV0gPSBjcmVhdGVQcm9qZWN0KHByb2plY3RzW2ldLnRpdGxlLCBwcm9qZWN0c1tpXS50YXNrcyk7XG5cdGZvciAobGV0IGEgPSAwOyBhIDwgcHJvamVjdHNbaV0udGFza3MubGVuZ3RoOyBhKyspIHtcblx0XHRwcm9qZWN0c1tpXS50YXNrc1thXSA9IGNyZWF0ZVRhc2soXG5cdFx0XHRwcm9qZWN0c1tpXS50YXNrc1thXS50aXRsZSxcblx0XHRcdHByb2plY3RzW2ldLnRhc2tzW2FdLmRlc2NyaXB0aW9uLFxuXHRcdFx0cHJvamVjdHNbaV0udGFza3NbYV0uZHVlRGF0ZSxcblx0XHRcdHByb2plY3RzW2ldLnRhc2tzW2FdLnByaW9yaXR5LFxuXHRcdFx0cHJvamVjdHNbaV0udGFza3NbYV0uaXNEb25lLFxuXHRcdFx0cHJvamVjdHNbaV0udGFza3NbYV0uaWRcblx0XHQpO1xuXHR9XG59XG5cbi8vIENyZWF0ZXMgZGVmYXVsdCBcIlBlcnNvbmFsXCIgcHJvamVjdCBpZiBwcm9qZWN0cyBhcnJheSBpcyBlbXB0eSB3aGVuIGxvYWRpbmcgYXBwXG5pZiAocHJvamVjdHNbMF0gPT09IHVuZGVmaW5lZCkge1xuXHRuZXdQcm9qZWN0KCdJbnN0cnVjdGlvbnMnKTtcblx0bmV3UHJvamVjdCgnUGVyc29uYWwnKTtcblx0cHJvamVjdHNbMF0uYWRkVGFzayhcblx0XHRjcmVhdGVUYXNrKFxuXHRcdFx0J1Byb2plY3RzJyxcblx0XHRcdCdZb3UgY2FuIGNyZWF0ZSBuZXcgcHJvamVjdHMgYW5kIGVkaXQgdGhlaXIgbmFtZXMgZnJvbSB0aGUgUHJvamVjdHMgUGFuZWwnLFxuXHRcdFx0dW5kZWZpbmVkLFxuXHRcdFx0JzAnLFxuXHRcdFx0ZmFsc2UsXG5cdFx0XHRNYXRoLnJhbmRvbSgxKVxuXHRcdClcblx0KTtcblx0cHJvamVjdHNbMF0uYWRkVGFzayhcblx0XHRjcmVhdGVUYXNrKFxuXHRcdFx0J1Rhc2tzJyxcblx0XHRcdCdZb3UgY2FuIGNyZWF0ZSB0YXNrcyBmb3IgZWFjaCBwcm9qZWN0IHRvIHN0YXkgbW9yZSBvcmdhbml6ZWQuIEVpdGhlciBhZGQgYSB0YXNrIHF1aWNrbHkgb3IgY2xpY2sgb24gXCIrIENyZWF0ZSBUYXNrXCInLFxuXHRcdFx0dW5kZWZpbmVkLFxuXHRcdFx0JzAnLFxuXHRcdFx0ZmFsc2UsXG5cdFx0XHRNYXRoLnJhbmRvbSgxKVxuXHRcdClcblx0KTtcblx0cHJvamVjdHNbMF0uYWRkVGFzayhcblx0XHRjcmVhdGVUYXNrKFxuXHRcdFx0J0NvbXBsZXRlIGFuZCBkZWxldGUgdGFza3MnLFxuXHRcdFx0J1lvdSBjYW4gYWxzbyBzZXQgYSB0YXNrIHRvIGRvbmUgb3IgY29tcGxldGVseSByZW1vdmUgYSB0YXNrIGJ5IGNsaWNraW5nIHRoZSBidXR0b25zIG9uIHRoZSByZWxhdGl2ZSB0YXNrLiBUcnkgaXQgb3V0IG5vdyEgZmlyc3Qgc2V0IHRoaXMgdGFzayB0byBkb25lIGFuZCB0aGVuIGRlbGV0ZSBpdC4nLFxuXHRcdFx0dW5kZWZpbmVkLFxuXHRcdFx0JzAnLFxuXHRcdFx0ZmFsc2UsXG5cdFx0XHRNYXRoLnJhbmRvbSgxKVxuXHRcdClcblx0KTtcblx0cHJvamVjdHNbMF0uYWRkVGFzayhcblx0XHRjcmVhdGVUYXNrKFxuXHRcdFx0J0RldGFpbHMnLFxuXHRcdFx0J0luIHRoZSBwYW5lbCBmcm9tIHdoaWNoIHlvdSBhcmUgY3VycmVudGx5IHJlYWRpbmcgeW91IGNhbiB2aWV3IGFsbCB0aGUgZGV0YWlscyBvZiBhIHNlbGVjdGVkIHRhc2sgYW5kIGFsc28gZWRpdCBpdC4gVGhlIG9ubHkgcmVxdWlyZWQgZmllbGQgaXMgdGhlIHRpdGxlJyxcblx0XHRcdHVuZGVmaW5lZCxcblx0XHRcdCcwJyxcblx0XHRcdGZhbHNlLFxuXHRcdFx0TWF0aC5yYW5kb20oMSlcblx0XHQpXG5cdCk7XG5cdHByb2plY3RzWzBdLmFkZFRhc2soXG5cdFx0Y3JlYXRlVGFzayhcblx0XHRcdCdEZWxldGUgaW5zdHJ1Y3Rpb25zJyxcblx0XHRcdCdZb3UgYXJlIGFsbCBzZXQuIEdvIGFoZWFkIGFuZCBkZWxldGUgdGhlIGluc3RydWN0aW9ucyBwcm9qZWN0IGFuZCBzdGFydCB1c2luZyB0aGUgdG9kbyBsaXN0IScsXG5cdFx0XHR1bmRlZmluZWQsXG5cdFx0XHQnMCcsXG5cdFx0XHRmYWxzZSxcblx0XHRcdE1hdGgucmFuZG9tKDEpXG5cdFx0KVxuXHQpO1xuXHRzYXZlKHByb2plY3RzKTtcblx0cmVuZGVyVGFza3MocHJvamVjdHNbMF0udGFza3MpO1xufVxuXG4vLyBTZXRzIEFjdGl2ZSBQcm9qZWN0IHRvIHRoZSBmaXJzdCBvbmUgaW4gcHJvamVjdHMgYXJyYXlcbnNldEFjdGl2ZVByb2plY3QocHJvamVjdHNbMF0pO1xuXG4vLyBSZW5kZXJzIFByb2plY3RzIHVwb24gbG9hZGluZyB0aGUgYXBwXG5yZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG5cbi8vIFJlbmRlcnMgVGFza3MgdXBvbiBsb2FkaW5nIHRoZSBhcHBcbnJlbmRlclRhc2tzKGFjdGl2ZVByb2plY3QudGFza3MpO1xuXG4vLyBTZWxlY3RzIHRoZSBhY3RpdmUgcHJvamVjdCBhbmQgc2hvd3MgaXQgb24gdGhlIFRhc2tzLVBhbmVsXG5zZWxlY3RQcm9qZWN0KGFjdGl2ZVByb2plY3QpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9