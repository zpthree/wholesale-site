webpackHotUpdate("static/development/pages/account/add-user.js",{

/***/ "./components/styles/Btn.js":
/*!**********************************!*\
  !*** ./components/styles/Btn.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Btn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "Btn",
  componentId: "sc-1tmtdya-0"
})(["transition:background 0.15s ease-out;height:3.5rem;border-radius:0.3rem;padding:0.5rem 1.5rem;color:", ";border:none;cursor:pointer;font-size:1.4rem;background:", ";&:enabled:hover{background:", ";}&[disabled]{cursor:not-allowed;opacity:0.5;}"], function (props) {
  return props.theme.white;
}, function (_ref) {
  var type = _ref.type,
      theme = _ref.theme;

  switch (type) {
    case 'submit':
      return theme.green;

    case 'cancel':
      return theme.red;
  }
}, function (_ref2) {
  var type = _ref2.type,
      theme = _ref2.theme;

  switch (type) {
    case 'submit':
      return theme.lightgreen;

    case 'cancel':
      return theme.lightred;

    default:
      return theme.green;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Btn);

/***/ })

})
//# sourceMappingURL=add-user.js.007b2027a5b8166298ff.hot-update.js.map