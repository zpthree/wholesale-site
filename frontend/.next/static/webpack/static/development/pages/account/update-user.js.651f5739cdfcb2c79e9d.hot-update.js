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
})(["h4{color:", ";}h5{margin-bottom:1rem;}.form-row.permissions .row-full{@media screen and (min-width:768px){display:flex;flex-direction:row;label p{margin-right:1rem;margin-left:0;}}}"], function (props) {
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
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: "new_user_info",
        method: "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "User Information"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
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
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "firstName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "First Name"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
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
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "lastName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Last Name ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "\xA0(Optional)"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
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
          lineNumber: 112
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Username")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
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
          lineNumber: 128
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "company",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "Company ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "\xA0(Optional)"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
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
          lineNumber: 145
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Email Address ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "\xA0(Optional)")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "Permissions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row info permissions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "customerPermissions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
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
          lineNumber: 167
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "employeePermissions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
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
          lineNumber: 181
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "adminPermissions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
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
          lineNumber: 195
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-full can-order",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "canOrder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
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
          lineNumber: 213
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, "Contact Information"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
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
          lineNumber: 230
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, "Phone Number ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "\xA0(Optional)"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
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
          lineNumber: 247
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "address",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, "Street Address ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "\xA0(Optional)")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
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
          lineNumber: 267
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, this.props.action === 'update' ? 'New ' : '', "Password"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
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
          lineNumber: 282
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "confirmPassword",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, "Confirm Password")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "submit",
        id: "createUser",
        name: "createUser",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "cancel",
        id: "cancelUser",
        name: "cancelUser",
        onClick: this.handleCancel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
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
//# sourceMappingURL=update-user.js.651f5739cdfcb2c79e9d.hot-update.js.map