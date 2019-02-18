webpackHotUpdate("static/development/pages/account/add-user.js",{

/***/ "./components/CreateUserForm.js":
/*!**************************************!*\
  !*** ./components/CreateUserForm.js ***!
  \**************************************/
/*! exports provided: default */
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

/* harmony default export */ __webpack_exports__["default"] = (CreateUserForm);

/***/ })

})
//# sourceMappingURL=add-user.js.d155211933562e517503.hot-update.js.map