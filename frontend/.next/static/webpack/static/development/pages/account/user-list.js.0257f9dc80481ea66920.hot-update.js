webpackHotUpdate("static/development/pages/account/user-list.js",{

/***/ "./components/UserList.js":
/*!********************************!*\
  !*** ./components/UserList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_UserListStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/UserListStyles */ "./components/styles/UserListStyles.js");
/* harmony import */ var _styles_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Table */ "./components/styles/Table.js");
/* harmony import */ var _elements_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/Icon */ "./elements/Icon.js");
var _jsxFileName = "/Users/zach/Dropbox/Sites/wholesale-site/frontend/components/UserList.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var UserList =
/*#__PURE__*/
function (_Component) {
  _inherits(UserList, _Component);

  function UserList() {
    _classCallCheck(this, UserList);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserList).apply(this, arguments));
  }

  _createClass(UserList, [{
    key: "render",
    value: function render() {
      var users = this.props.users;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_UserListStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "user-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "user-contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, " Information"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "user-can-order",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Access")), users.map(function (user) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          class: "user-name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          class: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, user.firstName, user.lastName && " ".concat(user.lastName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          class: "user-company",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, user.company)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          className: "user-contact",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, user.email && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          name: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }), user.email), user.phone && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          name: "phone",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }), user.phone), user.address && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          name: "address",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }), user.address)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          className: "user-permissions",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "permission-level",
          "data-permission": user.permissions,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, user.permissions && user.permissions.toLowerCase()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "can-order",
          "data-canOrder": user.canOrder,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, user.canOrder === true ? 'can order' : 'cannot order')));
      }))));
    }
  }]);

  return UserList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UserList);

/***/ }),

/***/ "./pages/account/user-list.js":
/*!************************************!*\
  !*** ./pages/account/user-list.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserListPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AccountLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/AccountLayout */ "./components/AccountLayout.js");
/* harmony import */ var _components_UserList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/UserList */ "./components/UserList.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data */ "./data.js");
var _jsxFileName = "/Users/zach/Dropbox/Sites/wholesale-site/frontend/pages/account/user-list.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var UserListPage =
/*#__PURE__*/
function (_Component) {
  _inherits(UserListPage, _Component);

  function UserListPage() {
    _classCallCheck(this, UserListPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserListPage).apply(this, arguments));
  }

  _createClass(UserListPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AccountLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        active: "user-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserList__WEBPACK_IMPORTED_MODULE_2__["default"], {
        users: _data__WEBPACK_IMPORTED_MODULE_3__["users"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }));
    }
  }]);

  return UserListPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/account/user-list")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=user-list.js.0257f9dc80481ea66920.hot-update.js.map