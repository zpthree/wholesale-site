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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ "./data.js");
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_UserListStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "user-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "user-email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Contact Information"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "user-can-order",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Access"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "admin-controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "editUser",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "deleteUser",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }))))));
    }
  }]);

  return UserList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UserList);

/***/ }),

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! exports provided: invoices, users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invoices", function() { return invoices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
var invoices = [{
  id: '123',
  customer: {
    firstName: 'Dan',
    lastName: 'Miller',
    company: 'Miller Quality Produce'
  },
  itemsOrdered: 50,
  totalCost: 12343,
  dateOrdered: '12/14/18',
  status: 'DRAFT',
  notes: 'this order is nice',
  pickupDateTime: '1/1/19'
}, {
  id: '4523',
  customer: {
    firstName: 'David',
    lastName: 'Kurtz'
  },
  itemsOrdered: 150,
  totalCost: 542,
  dateOrdered: '12/17/18',
  status: 'DRAFT',
  notes: 'this order is okay',
  pickupDateTime: '1/3/19'
}, {
  id: '34521',
  customer: {
    firstName: 'Todd',
    lastName: 'Yohman'
  },
  itemsOrdered: 20,
  totalCost: 987687,
  dateOrdered: '12/20/18',
  status: 'DUE',
  notes: "it's a big one",
  pickupDateTime: '1/15/19'
}, {
  id: '009',
  customer: {
    firstName: 'Dan',
    lastName: 'Miller',
    company: 'Miller Quality Produce'
  },
  itemsOrdered: 175,
  totalCost: 984327,
  dateOrdered: '1/4/18',
  status: 'PAID',
  notes: 'this order is paid',
  pickupDateTime: '1/25/19'
}, {
  id: '345',
  customer: {
    firstName: 'Ed',
    lastName: 'Something',
    company: "Bent n' Dent"
  },
  itemsOrdered: 27,
  totalCost: 405298,
  dateOrdered: '1/4/18',
  status: 'DUE'
}, {
  id: '8654',
  customer: {
    firstName: 'Dan',
    lastName: 'Miller',
    company: 'Miller Quality Produce'
  },
  itemsOrdered: 19,
  totalCost: 943560,
  dateOrdered: '1/4/18',
  status: 'PAID',
  pickupDateTime: '1/5/19'
}];
var users = [{
  firstName: 'David',
  lastName: 'Kurtz',
  username: 'dkurtz',
  email: 'dmoney@gmail.com',
  phone: '123-456-7890',
  canOrder: true,
  permissions: 'CUSTOMER'
}, {
  firstName: 'Economy',
  lastName: 'Produce',
  username: 'economy',
  email: 'clevelandproduce@gmail.com',
  address: '4000 Orange Avenue, Northern Ohio Food Terminal, Units #1-11 Cleveland, Ohio 44115',
  canOrder: true,
  permissions: 'CUSTOMER'
}, {
  firstName: 'Zach',
  lastName: 'Patrick',
  username: 'zpthree',
  email: 'zach@zachpatrick.com',
  phone: '330-324-5201',
  canOrder: true,
  permissions: 'ADMIN'
}];


/***/ })

})
//# sourceMappingURL=user-list.js.fcadcdd712543a874439.hot-update.js.map