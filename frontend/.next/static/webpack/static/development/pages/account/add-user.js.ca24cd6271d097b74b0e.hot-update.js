webpackHotUpdate("static/development/pages/account/add-user.js",{

/***/ "./lib/validation.js":
/*!***************************!*\
  !*** ./lib/validation.js ***!
  \***************************/
/*! exports provided: validateFirstName, validateUsername, validatePermissions, validatePassword, validateConfirmPassword, comparePasswords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateFirstName", function() { return validateFirstName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateUsername", function() { return validateUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePermissions", function() { return validatePermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePassword", function() { return validatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateConfirmPassword", function() { return validateConfirmPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparePasswords", function() { return comparePasswords; });
var validateFirstName = function validateFirstName(firstName) {
  if (firstName.length < 1) {
    return 'First Name is required.';
  } else if (firstName.length < 3) {
    return 'First Name is too short. Must be at least two characters long';
  }

  return null;
};
var validateUsername = function validateUsername(username) {
  if (!username.length > 0) {
    return 'Username is required.';
  } else if (username.length < 2) {
    return 'Username is too short. Must be at least two characters long';
  }

  return null;
};
var validatePermissions = function validatePermissions(permissions) {
  if (!permissions) {
    return 'Must set permissions for this user.';
  }

  return null;
};
var validatePassword = function validatePassword(password) {
  if (!password > 0) {
    return 'Password is required.';
  } else if (password.length > 0 && password.length < 6) {
    return 'Password must be atleast 6 characters long.';
  }

  return null;
};
var validateConfirmPassword = function validateConfirmPassword(password) {
  if (!password > 0) {
    return 'You must confirm your password.';
  } else if (password.length > 0 && password.length < 6) {
    return 'Password must be atleast 6 characters long.';
  }

  return null;
};
var comparePasswords = function comparePasswords(password1, password2) {
  if (password1 !== password2) {
    return "Passwords don't match";
  }
};

/***/ })

})
//# sourceMappingURL=add-user.js.ca24cd6271d097b74b0e.hot-update.js.map