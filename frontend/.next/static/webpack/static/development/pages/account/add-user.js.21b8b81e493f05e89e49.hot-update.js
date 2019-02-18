webpackHotUpdate("static/development/pages/account/add-user.js",{

/***/ "./components/CreateUser.js":
/*!**********************************!*\
  !*** ./components/CreateUser.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _styles_Btn__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./styles/Btn */ "./components/styles/Btn.js");
/* harmony import */ var _lib_isEmpty__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../lib/isEmpty */ "./lib/isEmpty.js");
/* harmony import */ var _lib_isEmpty__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_lib_isEmpty__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _lib_validation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../lib/validation */ "./lib/validation.js");












var _jsxFileName = "/Users/zach/Dropbox/Sites/wholesale-site/frontend/components/CreateUser.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_11__["default"])(["\n  mutation CREATE_USER_MUTATION(\n    $firstName: String!\n    $lastName: String\n    $company: String\n    $email: String\n    $address: String\n    $phone: String\n    $username: String!\n    $password: String!\n    $permissions: String!\n    $canOrder: Boolean!\n  ) {\n    createUser(\n      data: {\n        firstName: $firstName\n        lastName: $lastName\n        company: $company\n        email: $email\n        address: $address\n        phone: $phone\n        username: $username\n        password: $password\n        permissions: $permissions\n        canOrder: $canOrder\n        active: true\n      }\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var CreateUserStyles = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].div.withConfig({
  displayName: "CreateUser__CreateUserStyles",
  componentId: "dh0efs-0"
})(["h4{color:", ";}h5{margin-bottom:1rem;}.form-row.permissions .row-full{@media screen and (min-width:768px){display:flex;flex-direction:row;label p{margin-right:1rem;margin-left:0;}}}"], function (props) {
  return props.theme.red;
});
var CREATE_USER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_14___default()(_templateObject());

var CreateUser =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(CreateUser, _Component);

  function CreateUser() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CreateUser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(CreateUser)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "state", {
      firstName: '',
      // required
      lastName: '',
      username: '',
      // required
      company: '',
      email: '',
      permissions: '',
      // required
      canOrder: false,
      // required - needs to be false by default
      phone: '',
      address: '',
      password: '',
      // required
      confirmPassword: '',
      // required
      error: {}
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === 'number' ? _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_3___default()(value) : value;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])({}, name, val));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleCheckbox", function (e) {
      var name = e.target.name;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])({}, name, !_this.state.canOrder));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "validateInput", function (e) {
      var _e$target2 = e.target,
          name = _e$target2.name,
          value = _e$target2.value;
      var error = {};

      if (name === 'firstName' && Object(_lib_validation__WEBPACK_IMPORTED_MODULE_19__["validateFirstName"])(value)) {
        error.firstName = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_19__["validateFirstName"])(value);
      }

      if (name === 'username' && Object(_lib_validation__WEBPACK_IMPORTED_MODULE_19__["validateUsername"])(value)) {
        error.username = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_19__["validateUsername"])(value);
      }

      if (name === 'permissions' && Object(_lib_validation__WEBPACK_IMPORTED_MODULE_19__["validatePermissions"])(value)) {
        error.permissions = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_19__["validatePermissions"])(value);
      }

      _this.setState({
        error: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _this.state.error, error)
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "validateForm", function () {
      var error = {};
      var _this$state = _this.state,
          firstName = _this$state.firstName,
          username = _this$state.username,
          permissions = _this$state.permissions,
          password = _this$state.password,
          confirmPassword = _this$state.confirmPassword;

      if (Object(_lib_validation__WEBPACK_IMPORTED_MODULE_19__["validateFirstName"])(_this.state.firstName)) {
        error.firstName = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_19__["validateFirstName"])(_this.state.firstName);
      }

      if (Object(_lib_validation__WEBPACK_IMPORTED_MODULE_19__["validateUsername"])(_this.state.username)) {
        error.username = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_19__["validateUsername"])(_this.state.username);
      }

      if (Object(_lib_validation__WEBPACK_IMPORTED_MODULE_19__["validatePermissions"])(_this.state.permissions)) {
        error.permissions = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_19__["validatePermissions"])(_this.state.permissions);
      }

      _this.setState({
        error: error
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "resetState", function (e) {
      _this.setState({
        firstName: '',
        // required
        lastName: '',
        username: '',
        // required
        company: '',
        email: '',
        permissions: '',
        // required
        canOrder: false,
        // required - needs to be false by default
        phone: '',
        address: '',
        password: '',
        // required
        confirmPassword: '',
        // required
        error: {}
      });

      window.scrollTo(0, 0);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(CreateUser, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var errorMessage = this.state.error;
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_13__["Mutation"], {
        mutation: CREATE_USER_MUTATION,
        variables: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, function (createUser, _ref) {
        var loading = _ref.loading,
            error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(CreateUserStyles, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_16__["default"], {
          id: "new_user_info",
          method: "post",
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
            /*#__PURE__*/
            _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
              var res;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      e.preventDefault();

                      _this2.validateForm();

                      if (errorMessage) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 5;
                      return createUser();

                    case 5:
                      res = _context.sent;

                      _this2.resetState(e);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, "Add New User"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "form-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "form-section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h5", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, "User Information"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "form-row info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "row-half",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", {
          htmlFor: "firstName",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }, "First Name")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
          type: "text",
          id: "firstName",
          name: "firstName",
          value: _this2.state.firstName,
          onChange: _this2.handleChange,
          onBlur: _this2.validateInput,
          className: errorMessage.firstName ? 'error' : '',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          className: "error",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, errorMessage.firstName && errorMessage.firstName)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "row-half",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", {
          htmlFor: "lastName",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, "Last Name ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, "\xA0(Optional)"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
          type: "text",
          id: "lastName",
          name: "lastName",
          value: _this2.state.lastName,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "form-row info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "row-half",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", {
          htmlFor: "username",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          },
          __self: this
        }, "Username")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
          type: "text",
          id: "username",
          name: "username",
          value: _this2.state.username,
          onChange: _this2.handleChange,
          onBlur: _this2.validateInput,
          className: errorMessage.username ? 'error' : '',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          className: "error",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, errorMessage.username && errorMessage.username)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "row-half",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", {
          htmlFor: "company",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          },
          __self: this
        }, "Company ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          },
          __self: this
        }, "\xA0(Optional)"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
          type: "text",
          id: "company",
          name: "company",
          value: _this2.state.company,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "form-row info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "row-full",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", {
          htmlFor: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          },
          __self: this
        }, "Email Address ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          },
          __self: this
        }, "\xA0(Optional)"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
          type: "email",
          id: "email",
          name: "email",
          value: _this2.state.email,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "form-section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 279
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h5", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          },
          __self: this
        }, "Permissions"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "form-row info permissions",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "row-full ".concat(errorMessage.permissions ? 'error' : ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", {
          htmlFor: "customerPermissions",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          },
          __self: this
        }, "Customer", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
          type: "radio",
          name: "permissions",
          id: "customerPermissions",
          value: "CUSTOMER",
          checked: _this2.state.permissions === 'CUSTOMER' && 'checked',
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", {
          htmlFor: "employeePermissions",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 300
          },
          __self: this
        }, "Employee", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
          type: "radio",
          name: "permissions",
          id: "employeePermissions",
          checked: _this2.state.permissions === 'EMPLOYEE' && 'checked',
          value: "EMPLOYEE",
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 302
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", {
          htmlFor: "adminPermissions",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 313
          },
          __self: this
        }, "Administrator", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
          type: "radio",
          name: "permissions",
          id: "adminPermissions",
          checked: _this2.state.permissions === 'ADMIN' && 'checked',
          value: "ADMIN",
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 315
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          className: "error",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 327
          },
          __self: this
        }, errorMessage.permissions && errorMessage.permissions)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "form-row info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 332
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "row-full can-order",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 333
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", {
          htmlFor: "canOrder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 334
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 335
          },
          __self: this
        }, "Is this user allowed to create their own order?")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
          id: "canOrder",
          name: "canOrder",
          type: "checkbox",
          checked: _this2.state.canOrder === true && 'checked',
          onChange: _this2.handleCheckbox,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 337
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "form-section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 350
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h5", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 351
          },
          __self: this
        }, "Contact Information"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "form-row info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 352
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "row-full",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 353
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", {
          htmlFor: "phone",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 354
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 355
          },
          __self: this
        }, "Phone Number ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 356
          },
          __self: this
        }, "\xA0(Optional)"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
          type: "text",
          id: "phone",
          name: "phone",
          value: _this2.state.phone,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 359
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "form-row info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 369
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "row-full",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 370
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", {
          htmlFor: "address",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 371
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 372
          },
          __self: this
        }, "Street Address ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 373
          },
          __self: this
        }, "\xA0(Optional)"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
          type: "text",
          id: "address",
          name: "address",
          value: _this2.state.address,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 376
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "form-section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 387
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h5", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 388
          },
          __self: this
        }, "Password"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "form-row info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 389
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "row-half",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 390
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", {
          htmlFor: "password",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 391
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 392
          },
          __self: this
        }, _this2.props.action === 'update' ? 'New ' : '', "Password")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
          type: "password",
          id: "password",
          name: "password",
          value: _this2.state.password,
          onChange: _this2.handleChange,
          onBlur: _this2.validateInput,
          className: errorMessage.password ? 'error' : '',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 397
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          className: "error",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 406
          },
          __self: this
        }, errorMessage.password && errorMessage.password)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "row-half",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 410
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", {
          htmlFor: "confirmPassword",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 411
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 412
          },
          __self: this
        }, "Confirm Password")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
          type: "password",
          id: "confirmPassword",
          name: "confirmPassword",
          value: _this2.state.confirmPassword,
          onChange: _this2.handleChange,
          onBlur: _this2.validateInput,
          className: errorMessage.confirmPassword ? 'error' : '',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 414
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          className: "error",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 425
          },
          __self: this
        }, errorMessage.confirmPassword && errorMessage.confirmPassword))))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "form-footer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 434
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_styles_Btn__WEBPACK_IMPORTED_MODULE_17__["default"], {
          type: "submit",
          id: "createUser",
          name: "createUser",
          disabled: !_lib_isEmpty__WEBPACK_IMPORTED_MODULE_18___default()(errorMessage),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 435
          },
          __self: this
        }, "Submit"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_styles_Btn__WEBPACK_IMPORTED_MODULE_17__["default"], {
          type: "cancel",
          id: "cancelUser",
          name: "cancelUser",
          onClick: _this2.handleCancel,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 443
          },
          __self: this
        }, "Cancel")))));
      });
    }
  }]);

  return CreateUser;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateUser);

/***/ })

})
//# sourceMappingURL=add-user.js.21b8b81e493f05e89e49.hot-update.js.map