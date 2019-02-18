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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _styles_Btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Btn */ "./components/styles/Btn.js");
/* harmony import */ var _lib_isEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/isEmpty */ "./lib/isEmpty.js");
/* harmony import */ var _lib_isEmpty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_isEmpty__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/zach/Dropbox/Sites/wholesale-site/frontend/components/CreateUserForm.js";





var CreateUserStyles = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "CreateUserForm__CreateUserStyles",
  componentId: "rzj48j-0"
})(["h4{color:", ";}h5{margin-bottom:1rem;}.form-row.permissions .row-full{@media screen and (min-width:768px){display:flex;flex-direction:row;label p{margin-right:1rem;margin-left:0;}}}"], function (props) {
  return props.theme.red;
});

var CreateUserForm = function CreateUserForm(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CreateUserStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
                props.validateForm();

                if (errorMessage) {
                  _context.next = 7;
                  break;
                }

                _context.next = 5;
                return createUser();

              case 5:
                res = _context.sent;
                props.resetState(e);

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
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", {
    disabled: loading,
    "aria-busy": loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Add New User"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "User Information"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-row info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "firstName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "First Name")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    id: "firstName",
    name: "firstName",
    value: props.state.firstName,
    onChange: props.handleChange,
    onBlur: props.validateInput,
    className: errorMessage.firstName ? 'error' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, errorMessage.firstName && errorMessage.firstName)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "lastName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Last Name ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "\xA0(Optional)"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    id: "lastName",
    name: "lastName",
    value: props.state.lastName,
    onChange: props.handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-row info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Username")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    id: "username",
    name: "username",
    value: props.state.username,
    onChange: props.handleChange,
    onBlur: props.validateInput,
    className: errorMessage.username ? 'error' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, errorMessage.username && errorMessage.username)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "company",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Company ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "\xA0(Optional)"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    id: "company",
    name: "company",
    value: props.state.company,
    onChange: props.handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-row info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Email Address ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "\xA0(Optional)"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    value: props.state.email,
    onChange: props.handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Permissions"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-row info permissions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-full ".concat(errorMessage.permissions ? 'error' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "customerPermissions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Customer", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "radio",
    name: "permissions",
    id: "customerPermissions",
    value: "CUSTOMER",
    checked: props.state.permissions === 'CUSTOMER' && 'checked',
    onChange: props.handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "employeePermissions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Employee", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "radio",
    name: "permissions",
    id: "employeePermissions",
    checked: props.state.permissions === 'EMPLOYEE' && 'checked',
    value: "EMPLOYEE",
    onChange: props.handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "adminPermissions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Administrator", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "radio",
    name: "permissions",
    id: "adminPermissions",
    checked: props.state.permissions === 'ADMIN' && 'checked',
    value: "ADMIN",
    onChange: props.handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, errorMessage.permissions && errorMessage.permissions)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-row info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-full can-order",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "canOrder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "Is this user allowed to create their own order?")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    id: "canOrder",
    name: "canOrder",
    type: "checkbox",
    checked: props.state.canOrder === true && 'checked',
    onChange: props.handleCheckbox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "Contact Information"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-row info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "Phone Number ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "\xA0(Optional)"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    id: "phone",
    name: "phone",
    value: props.state.phone,
    onChange: props.handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-row info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, "Street Address ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "\xA0(Optional)"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    id: "address",
    name: "address",
    value: props.state.address,
    onChange: props.handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, "Password"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-row info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, props.props.action === 'update' ? 'New ' : '', "Password")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "password",
    id: "password",
    name: "password",
    value: props.state.password,
    onChange: props.handleChange,
    onBlur: props.validateInput,
    className: errorMessage.password ? 'error' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, errorMessage.password && errorMessage.password)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row-half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "confirmPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, "Confirm Password")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "password",
    id: "confirmPassword",
    name: "confirmPassword",
    value: props.state.confirmPassword,
    onChange: props.handleChange,
    onBlur: props.validateInput,
    className: errorMessage.confirmPassword ? 'error' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, errorMessage.confirmPassword && errorMessage.confirmPassword))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_Btn__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "submit",
    id: "createUser",
    name: "createUser",
    disabled: !_lib_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(errorMessage),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_Btn__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "cancel",
    id: "cancelUser",
    name: "cancelUser",
    onClick: props.handleCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, "Cancel")))));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateUserForm);

/***/ })

})
//# sourceMappingURL=add-user.js.adb0ee6428d7c4b36839.hot-update.js.map