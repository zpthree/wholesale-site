webpackHotUpdate("static/development/pages/account/update-user.js",{

/***/ "./components/CreateUser.js":
/*!**********************************!*\
  !*** ./components/CreateUser.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _styles_Btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Btn */ "./components/styles/Btn.js");
var _jsxFileName = "/Users/zach/Dropbox/Sites/wholesale-site/frontend/components/CreateUser.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var CreateUserStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "CreateUser__CreateUserStyles",
  componentId: "dh0efs-0"
})(["h4{color:", ";}h5{margin-bottom:1rem;}.form-row.permissions .row-full{display:flex;flex-direction:row;label p{margin:0 1rem 0 0;}}"], function (props) {
  return props.theme.red;
});

var CreateUser =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateUser, _Component);

  function CreateUser() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreateUser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateUser)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", _objectSpread({}, _this.props.initialState));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === 'number' ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCheckbox", function (e) {
      var name = e.target.name;

      _this.setState(_defineProperty({}, name, !_this.state.canOrder));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCancel", function (e) {
      e.preventDefault();
      var action = _this.props.action;

      if (action === 'create') {
        _this.setState({
          firstName: '',
          lastName: '',
          username: '',
          company: '',
          email: '',
          permissions: '',
          canOrder: '',
          phone: '',
          address: '',
          password: '',
          confirmPassword: ''
        });
      }

      if (action === 'update') {
        console.log('reset user data');
      }

      window.scrollTo(0, 0);
    });

    return _this;
  }

  _createClass(CreateUser, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreateUserStyles, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: "new_user_info",
        method: "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "User Information"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "firstName",
        name: "firstName",
        value: this.state.firstName,
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "firstName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "First Name"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "lastName",
        name: "lastName",
        value: this.state.lastName,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "lastName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Last Name ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "\xA0(Optional)"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "username",
        name: "username",
        value: this.state.username,
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Username")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "company",
        name: "company",
        value: this.state.company,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "company",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "Company ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "\xA0(Optional)"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "email",
        name: "email",
        value: this.state.email,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "Email Address ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "\xA0(Optional)")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Permissions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row info permissions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "customerPermissions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "Customer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "radio",
        name: "permissions",
        id: "customerPermissions",
        value: "CUSTOMER",
        checked: this.state.permissions === 'CUSTOMER' && 'checked',
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "employeePermissions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "Employee"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "radio",
        name: "permissions",
        id: "employeePermissions",
        checked: this.state.permissions === 'EMPLOYEE' && 'checked',
        value: "EMPLOYEE",
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "adminPermissions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Administrator"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "radio",
        name: "permissions",
        id: "adminPermissions",
        checked: this.state.permissions === 'ADMIN' && 'checked',
        value: "ADMIN",
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-full can-order",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "canOrder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, "Is this user allowed to create their own order?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "canOrder",
        name: "canOrder",
        type: "checkbox",
        checked: this.state.canOrder === true && 'checked',
        onChange: this.handleCheckbox,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, "Contact Information"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "phone",
        name: "phone",
        value: this.state.phone,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, "Phone Number ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "\xA0(Optional)"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "address",
        name: "address",
        value: this.state.address,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "address",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, "Street Address ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "\xA0(Optional)")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        id: "password",
        name: "password",
        value: this.state.password,
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, this.props.action === 'update' ? 'New ' : '', "Password"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        id: "confirmPassword",
        name: "confirmPassword",
        value: this.state.confirmPassword,
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "confirmPassword",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, "Confirm Password")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "submit",
        id: "createUser",
        name: "createUser",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "cancel",
        id: "cancelUser",
        name: "cancelUser",
        onClick: this.handleCancel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, "Cancel"))));
    }
  }]);

  return CreateUser;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateUser);

/***/ })

})
//# sourceMappingURL=update-user.js.b8e7dfd476c033c8957a.hot-update.js.map