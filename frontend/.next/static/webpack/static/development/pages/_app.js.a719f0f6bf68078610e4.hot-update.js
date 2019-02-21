webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/styles/PageStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/PageStyles.js ***!
  \*****************************************/
/*! exports provided: StyledPage, Inner, theme, GlobalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledPage", function() { return StyledPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inner", function() { return Inner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyles", function() { return GlobalStyles; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  html {\n    box-sizing: border-box;\n    font-size: 62.5%;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding: 0;\n    background: ", ";\n    padding-top: 70px;\n    transition: padding 0.15s ease-in-out;\n    min-height: 100vh;\n    -webkit-print-color-adjust: exact !important;\n    color-adjust: exact !important;\n    font-size: 1.6rem;\n    line-height: 2;\n    font-weight: 300;\n    font-family: 'Nunito Sans', sans-serif;\n    \n    @media print {\n      padding-top: 0;\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-family: 'Bitter', serif;\n    margin: 0;\n    font-family: ", ";\n    font-weight: 600;\n  }\n\n  h1 { font-size: 4rem; }\n  h2 { font-size: 3.5rem; }\n  h3 { font-size: 3rem; }\n  h4 { font-size: 2.5rem; }\n  h5 { font-size: 2rem; }\n  h6 { font-size: 1.25rem; }\n\n  li,\n  p,\n  a,\n  textarea {\n    line-height: 1.35;\n  }\n\n  p {\n    margin: 0;\n    outline: none;\n  }\n\n  p:not(:last-child) {\n    margin-bottom: 10px;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  button,\n  input[type='submit'] {\n    cursor: pointer;\n  }\n\n  input,\n  textarea,\n  select {\n    font-size: 1.6rem;\n  }\n\n  .text-center {\n    text-align: center;\n  }\n\n  .asterisk {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PageStyles__StyledPage",
  componentId: "pzrny3-0"
})(["background:white;color:", ";"], function (props) {
  return props.theme.black;
});
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PageStyles__Inner",
  componentId: "pzrny3-1"
})(["max-width:", ";margin:auto;padding:1.5rem;"], function (props) {
  return props.theme.maxWidth;
});
var theme = {
  red: '#98272b',
  darkred: '#8e2428',
  lightred: '#ac2c31',
  green: '#84a333',
  darkgreen: '#74902d',
  lightgreen: '#94b639',
  black: '#393939',
  grey: '#aaa',
  darkgrey: '#888',
  lightgrey: '#ccc',
  offwhite: '#ededed',
  white: '#fff',
  maxWidth: '1400px'
};
var GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.red;
}, function (props) {
  return props.theme.red;
});

/***/ })

})
//# sourceMappingURL=_app.js.a719f0f6bf68078610e4.hot-update.js.map