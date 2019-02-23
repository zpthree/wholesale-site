webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./elements/Icon.js":
/*!**************************!*\
  !*** ./elements/Icon.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "/Users/zach/Dropbox/Sites/wholesale-site/frontend/elements/Icon.js";


var Icon =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Icon, _Component);

  function Icon() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Icon);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Icon).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Icon, [{
    key: "render",
    value: function render() {
      switch (this.props.name) {
        case 'dropdownMenu':
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
            className: "svg-inline--fa fa-user-circle fa-w-16",
            viewBox: "0 0 512 512",
            height: this.props.height && this.props.height,
            width: this.props.width && this.props.width,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
            // fill="currentColor"
            d: "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zM144 208c0-61.856 50.144-112 112-112s112 50.144 112 112-50.144 112-112 112-112-50.144-112-112zm268.408 172.663c-80.346 100.411-232.375 100.53-312.817 0C117.003 362.973 141.218 352 168 352h18.204c44.03 21.336 95.495 21.368 139.592 0H344c26.782 0 50.997 10.973 68.408 28.663z",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          }));

        case 'camera':
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
            className: "svg-inline--fa fa-camera fa-w-16 camera-icon",
            viewBox: "0 0 512 512",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
            fill: "currentColor",
            d: "M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }));

        case 'editUser':
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
            className: "svg-inline--fa fa-user-edit fa-w-20",
            viewBox: "0 0 640 512",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
            fill: "currentColor",
            d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }));

        case 'deleteUser':
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
            className: "svg-inline--fa fa-trash-alt fa-w-14",
            viewBox: "0 0 448 512",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
            fill: "currentColor",
            d: "M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }));

        case 'email':
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
            className: "svg-inline--fa fa-envelope fa-w-16",
            viewBox: "0 0 512 512",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
            fill: "currentColor",
            d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          }));

        case 'phone':
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
            className: "svg-inline--fa fa-phone fa-w-16",
            viewBox: "0 0 512 512",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
            fill: "currentColor",
            d: "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }));

        case 'address':
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
            className: "svg-inline--fa fa-map-marker-alt fa-w-12",
            viewBox: "0 0 384 512",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
            fill: "currentColor",
            d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          }));
      }
    }
  }]);

  return Icon;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Icon, "defaultProps", {
  color: '#333'
});

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ })

})
//# sourceMappingURL=_app.js.ddc480bf02ef0acc6699.hot-update.js.map