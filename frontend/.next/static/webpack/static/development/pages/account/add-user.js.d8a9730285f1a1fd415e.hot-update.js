webpackHotUpdate("static/development/pages/account/add-user.js",{

/***/ "./components/CreateUser.js":
/*!**********************************!*\
  !*** ./components/CreateUser.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _CreateUserForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CreateUserForm */ "./components/CreateUserForm.js");
/* harmony import */ var _lib_validation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/validation */ "./lib/validation.js");










var _jsxFileName = "/Users/zach/Dropbox/Sites/wholesale-site/frontend/components/CreateUser.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n  mutation CREATE_USER_MUTATION(\n    $firstName: String!\n    $lastName: String\n    $company: String\n    $email: String\n    $address: String\n    $phone: String\n    $username: String!\n    $password: String!\n    $permissions: String!\n    $canOrder: Boolean!\n  ) {\n    createUser(\n      data: {\n        firstName: $firstName\n        lastName: $lastName\n        company: $company\n        email: $email\n        address: $address\n        phone: $phone\n        username: $username\n        password: $password\n        permissions: $permissions\n        canOrder: $canOrder\n        active: true\n      }\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var CreateUserStyles = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "CreateUser__CreateUserStyles",
  componentId: "dh0efs-0"
})(["h4{color:", ";}h5{margin-bottom:1rem;}.form-row.permissions .row-full{@media screen and (min-width:768px){display:flex;flex-direction:row;label p{margin-right:1rem;margin-left:0;}}}"], function (props) {
  return props.theme.red;
});
var CREATE_USER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_12___default()(_templateObject());

var CreateUser =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(CreateUser, _Component);

  function CreateUser() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CreateUser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CreateUser)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === 'number' ? _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(value) : value;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, name, val));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleCheckbox", function (e) {
      var name = e.target.name;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, name, !_this.state.canOrder));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "validateInput", function (e) {
      var _e$target2 = e.target,
          name = _e$target2.name,
          value = _e$target2.value;
      var error = {};

      if (name === 'firstName' && Object(_lib_validation__WEBPACK_IMPORTED_MODULE_15__["validateFirstName"])(value)) {
        error.firstName = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_15__["validateFirstName"])(value);
      }

      if (name === 'username' && Object(_lib_validation__WEBPACK_IMPORTED_MODULE_15__["validateUsername"])(value)) {
        error.username = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_15__["validateUsername"])(value);
      }

      if (name === 'permissions' && Object(_lib_validation__WEBPACK_IMPORTED_MODULE_15__["validatePermissions"])(value)) {
        error.permissions = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_15__["validatePermissions"])(value);
      }

      _this.setState({
        error: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.error, error)
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "validateForm", function () {
      var isValid;
      var error = {};
      var _this$state = _this.state,
          firstName = _this$state.firstName,
          username = _this$state.username,
          permissions = _this$state.permissions,
          password = _this$state.password,
          confirmPassword = _this$state.confirmPassword;

      if (Object(_lib_validation__WEBPACK_IMPORTED_MODULE_15__["validateFirstName"])(firstName)) {
        error.firstName = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_15__["validateFirstName"])(firstName);
      }

      if (Object(_lib_validation__WEBPACK_IMPORTED_MODULE_15__["validateUsername"])(username)) {
        error.username = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_15__["validateUsername"])(username);
      }

      if (Object(_lib_validation__WEBPACK_IMPORTED_MODULE_15__["validatePermissions"])(permissions)) {
        error.permissions = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_15__["validatePermissions"])(permissions);
      }

      _this.setState({
        error: error
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "resetState", function (e) {
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CreateUser, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var errorMessage = this.state.error;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_11__["Mutation"], {
        mutation: CREATE_USER_MUTATION,
        variables: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, function (createUser, _ref) {
        var loading = _ref.loading,
            error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_CreateUserForm__WEBPACK_IMPORTED_MODULE_14__["default"], {
          handleChange: _this2.handleChange,
          handleCheckbox: _this2.handleCheckbox,
          validateInput: _this2.validateInput,
          validateForm: validateForm,
          resetState: _this2.resetState,
          error: errorMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: this
        });
      });
    }
  }]);

  return CreateUser;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateUser);

/***/ }),

/***/ "./components/CreateUserForm.js":
/*!**************************************!*\
  !*** ./components/CreateUserForm.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _styles_Btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Btn */ "./components/styles/Btn.js");
/* harmony import */ var _lib_isEmpty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/isEmpty */ "./lib/isEmpty.js");
/* harmony import */ var _lib_isEmpty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_isEmpty__WEBPACK_IMPORTED_MODULE_5__);



var _this = undefined,
    _jsxFileName = "/Users/zach/Dropbox/Sites/wholesale-site/frontend/components/CreateUserForm.js";






var CreateUserForm = function CreateUserForm(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CreateUserStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "new_user_info",
    method: "post",
    onSubmit:
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                _this.validateForm();

                if (errorMessage) {
                  _context.next = 7;
                  break;
                }

                _context.next = 5;
                return createUser();

              case 5:
                res = _context.sent;

                _this.resetState(e);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", {
    disabled: loading,
    "aria-busy": loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Add New User"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "User Information"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-row info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "firstName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "First Name")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    id: "firstName",
    name: "firstName",
    value: _this.state.firstName,
    onChange: _this.handleChange,
    onBlur: _this.validateInput,
    className: errorMessage.firstName ? 'error' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, errorMessage.firstName && errorMessage.firstName)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "lastName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Last Name ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "\xA0(Optional)"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    id: "lastName",
    name: "lastName",
    value: _this.state.lastName,
    onChange: _this.handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-row info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Username")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    id: "username",
    name: "username",
    value: _this.state.username,
    onChange: _this.handleChange,
    onBlur: _this.validateInput,
    className: errorMessage.username ? 'error' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, errorMessage.username && errorMessage.username)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "company",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Company ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "\xA0(Optional)"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    id: "company",
    name: "company",
    value: _this.state.company,
    onChange: _this.handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-row info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Email Address ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "\xA0(Optional)"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    value: _this.state.email,
    onChange: _this.handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Permissions"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-row info permissions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-full ".concat(errorMessage.permissions ? 'error' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "customerPermissions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Customer", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "radio",
    name: "permissions",
    id: "customerPermissions",
    value: "CUSTOMER",
    checked: _this.state.permissions === 'CUSTOMER' && 'checked',
    onChange: _this.handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "employeePermissions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Employee", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "radio",
    name: "permissions",
    id: "employeePermissions",
    checked: _this.state.permissions === 'EMPLOYEE' && 'checked',
    value: "EMPLOYEE",
    onChange: _this.handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "adminPermissions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Administrator", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "radio",
    name: "permissions",
    id: "adminPermissions",
    checked: _this.state.permissions === 'ADMIN' && 'checked',
    value: "ADMIN",
    onChange: _this.handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, errorMessage.permissions && errorMessage.permissions)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-row info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-full can-order",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "canOrder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Is this user allowed to create their own order?")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    id: "canOrder",
    name: "canOrder",
    type: "checkbox",
    checked: _this.state.canOrder === true && 'checked',
    onChange: _this.handleCheckbox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "Contact Information"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-row info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Phone Number ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "\xA0(Optional)"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    id: "phone",
    name: "phone",
    value: _this.state.phone,
    onChange: _this.handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-row info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Street Address ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "\xA0(Optional)"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    id: "address",
    name: "address",
    value: _this.state.address,
    onChange: _this.handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "Password"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-row info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, _this.props.action === 'update' ? 'New ' : '', "Password")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "password",
    id: "password",
    name: "password",
    value: _this.state.password,
    onChange: _this.handleChange,
    onBlur: _this.validateInput,
    className: errorMessage.password ? 'error' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, errorMessage.password && errorMessage.password)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "confirmPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, "Confirm Password")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "password",
    id: "confirmPassword",
    name: "confirmPassword",
    value: _this.state.confirmPassword,
    onChange: _this.handleChange,
    onBlur: _this.validateInput,
    className: errorMessage.confirmPassword ? 'error' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, errorMessage.confirmPassword && errorMessage.confirmPassword))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_Btn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "submit",
    id: "createUser",
    name: "createUser",
    disabled: !_lib_isEmpty__WEBPACK_IMPORTED_MODULE_5___default()(errorMessage),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_Btn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "cancel",
    id: "cancelUser",
    name: "cancelUser",
    onClick: _this.handleCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, "Cancel")))));
};

/***/ }),

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

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form.withConfig({
  displayName: "Form",
  componentId: "sc-1kmq3n-0"
})(["margin:auto;input,textarea,select,option,label{font-size:1.6rem;}input:not([type='submit']),input:not([type='radio']),input:not([type='checkbox']),textarea,select,option{background:", ";margin:0 0 10px;outline:none;border:1px solid ", ";padding:7.5px 5px;border-radius:2px;}input[type='radio'],input[type='checkbox']{margin:0;padding:0;width:1.6rem !important;height:1.6rem !important;}textarea{resize:vertical;}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus input:-webkit-autofill,textarea:-webkit-autofill,textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,select:-webkit-autofill,select:-webkit-autofill:hover,select:-webkit-autofill:focus{-webkit-text-fill-color:", ";-webkit-box-shadow:0 0 0px 1000px #fff inset;box-shadow:0 0 0px 1000px #fff inset;transition:background-color 5000s ease-in-out 0s;}input[type='number']::-webkit-inner-spin-button,input[type='number']::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;margin-bottom:1rem;background-image:linear-gradient( to right,#98272b 0%,#cb9395 50%,#98272b 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}p.error{color:", ";font-weight:600;margin-top:-0.5rem;}input.error{border:0.1rem solid ", " !important;}.form-row{width:100%;margin:auto;display:flex;flex-direction:column;margin-bottom:0;@media screen and (min-width:768px){flex-direction:row;margin-bottom:30px;}input:not([type='submit']),textarea{width:100%;}&.permissions label{margin-right:4rem;}&.permissions input{margin-left:1.5rem;}}.form-section{padding-top:25px;&.update-password-section{h6.successully-updated{color:", ";text-align:center;margin-bottom:15px;}}}.row{&-full{width:100%;}&-half{width:100%;margin-bottom:30px;@media screen and (min-width:768px){margin-bottom:0;width:50%;}&:not(:last-child){margin-right:10px;}}&-third{width:100%;margin-bottom:30px;@media screen and (min-width:768px){width:33.33333%;margin-bottom:0;}&:not(:last-child){margin-right:10px;}}&-fourth{width:100%;margin-bottom:30px;@media screen and (min-width:768px){width:25%;margin-bottom:0;}&:not(:last-child){margin-right:10px;}}}.form-header{margin-bottom:20px;}.form-footer{display:flex;justify-content:center;padding:10px 0;button:not(:last-child){margin-right:1rem;}}.button-loading-overlay{display:flex;align-items:center;justify-content:center;position:absolute;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,0.6);border-radius:200px;z-index:2;display:none;.loading{display:block;}}#mc_embed_signup input{margin-top:5px;}#mc_embed_signup .indicates-required{margin-bottom:15px;}.form-section:not(:first-child){margin-top:30px;}.form-row.info,.form-row.editor{input:not([type='submit']),input:not([type='radio']),input:not([type='checkbox']){height:45px;border-radius:0.2rem;border:1px solid ", ";padding:7.5px 5px;}.select-menu{border:1px solid ", ";margin-top:-1px;margin-bottom:17.5px;padding:1px 1px 0;select{font-weight:400;background:transparent;width:100%;height:45px;border:none;padding:0;margin:-2px 0 0;}}input:not([type='submit']){font-weight:400;}textarea{font-weight:400;}label p{display:flex;align-items:flex-end;height:28px;font-weight:400;margin-bottom:1rem;}}.new-wholesale-item-form{padding-top:15px;}.form-row.whs input{border:2px solid #eee !important;margin:0;height:45px;}.form-row.whs .select-menu{border:2px solid #eee !important;margin:0;height:45px;}.form-row.whs p{padding:5px 0;}.form-row.info .can-order{display:flex;align-items:center;p{margin:0;height:20px;}input{width:auto;height:15px;margin:0 0 0 15px;}}.form-row.info .user-can-order{height:45px !important;}.form-row.permissions label{display:flex;align-items:center;p{width:150px;}}"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.red;
}, loading, function (props) {
  return props.theme.red;
}, function (props) {
  return props.theme.red;
}, function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
var FormRow = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "Form__FormRow",
  componentId: "sc-1kmq3n-1"
})([""]);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./lib/isEmpty.js":
/*!************************!*\
  !*** ./lib/isEmpty.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js"));

var isEmpty = function isEmpty(value) {
  return value === undefined || value === null || (0, _typeof2.default)(value) === 'object' && (0, _keys.default)(value).length === 0 || typeof value === 'string' && value.trim().length === 0;
};

module.exports = isEmpty;

/***/ })

})
//# sourceMappingURL=add-user.js.d8a9730285f1a1fd415e.hot-update.js.map