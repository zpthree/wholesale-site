webpackHotUpdate("static/development/pages/account/add-new-user.js",{

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
})(["transition:background 0.15s ease-out;height:35px;border-radius:3px;padding:0.5rem 1.5rem;color:", ";border:none;cursor:pointer;font-size:1.4rem;background:", ";&:hover{background:", ";}"], function (props) {
  return props.theme.white;
}, function (_ref) {
  var type = _ref.type,
      theme = _ref.theme;

  switch (type) {
    case 'submit':
      return theme.green;

    case 'cancel':
      return theme.grey;
  }
}, function (_ref2) {
  var type = _ref2.type,
      theme = _ref2.theme;

  switch (type) {
    case 'submit':
      return theme.lightgreen;

    case 'cancel':
      return theme.lightgrey;

    default:
      return theme.green;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Btn);

/***/ })

})
//# sourceMappingURL=add-new-user.js.45e2ca7a24c84af0557b.hot-update.js.map