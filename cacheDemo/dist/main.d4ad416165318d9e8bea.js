(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ \"./src/print.js\");\n\r\nfunction component() {\r\n  var element = document.createElement(\"div\");\r\n\r\n  element.innerHTML = \"webpack test\";\r\n  var btn = document.createElement(\"button\");\r\n  btn.innerHTML = \"点击这里，然后查看 console！\";\r\n  btn.onclick = _print__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n  element.appendChild(btn);\r\n  return element;\r\n}\r\n\r\ndocument.body.appendChild(component());\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return printMe; });\nfunction printMe() {\r\n  console.log(\"I get called from print.js!\");\r\n}\r\n\n\n//# sourceURL=webpack:///./src/print.js?");

/***/ })

},[["./src/index.js","runtime"]]]);