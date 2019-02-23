webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DropdownMenu */ "./components/DropdownMenu.js");
/* harmony import */ var _styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles/HeaderStyles */ "./components/styles/HeaderStyles.js");
/* harmony import */ var _elements_Logo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../elements/Logo */ "./elements/Logo.js");
/* harmony import */ var _elements_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../elements/Icon */ "./elements/Icon.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./User */ "./components/User.js");







var _jsxFileName = "/Users/zach/Dropbox/Sites/wholesale-site/frontend/components/Header.js";











next_router__WEBPACK_IMPORTED_MODULE_9___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_10___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_9___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_10___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_9___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_10___default.a.done();
};

var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      dropdownMenuVisible: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var router = this.props.router;

      if (router.pathname !== '/sign-in') {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_13__["HeaderStyles"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "header-inner",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_elements_Logo__WEBPACK_IMPORTED_MODULE_14__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_16__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, function (_ref) {
          var me = _ref.data.me;

          if (me) {
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
              id: "dropdownMenuContainer",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
              id: "dropdownMenuBtn",
              onClick: function onClick() {
                _this2.setState({
                  dropdownMenuVisible: !_this2.state.dropdownMenuVisible
                });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], {
              dept: router.query.dept,
              pathname: router.pathname,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_elements_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
              name: "dropdownMenu",
              height: "35px",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              },
              __self: this
            })), _this2.state.dropdownMenuVisible && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_DropdownMenu__WEBPACK_IMPORTED_MODULE_12__["default"], {
              me: me,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              },
              __self: this
            }));
          }

          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: "/sign-in",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          }, "Sign In"));
        })));
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null);
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Header));

/***/ })

})
//# sourceMappingURL=_app.js.888f689b1b95665be882.hot-update.js.map