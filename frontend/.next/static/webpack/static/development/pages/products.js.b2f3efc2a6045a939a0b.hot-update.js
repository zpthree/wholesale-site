webpackHotUpdate("static/development/pages/products.js",{

/***/ "./components/ProductCard.js":
/*!***********************************!*\
  !*** ./components/ProductCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_ProductCardStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ProductCardStyles */ "./components/styles/ProductCardStyles.js");
/* harmony import */ var _styles_Btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Btn */ "./components/styles/Btn.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _lib_formatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/formatDate */ "./lib/formatDate.js");
var _jsxFileName = "/Users/zach/Dropbox/Sites/wholesale-site/frontend/components/ProductCard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var ProductCard =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductCard, _Component);

  function ProductCard() {
    _classCallCheck(this, ProductCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductCard).apply(this, arguments));
  }

  _createClass(ProductCard, [{
    key: "render",
    value: function render() {
      var _this$props$product = this.props.product,
          brand = _this$props$product.brand,
          title = _this$props$product.title,
          size = _this$props$product.size,
          unitsPerCase = _this$props$product.unitsPerCase,
          UOM = _this$props$product.UOM,
          expDate = _this$props$product.expDate,
          price = _this$props$product.price,
          casesAvailable = _this$props$product.casesAvailable;
      var pricePerUnit = price && unitsPerCase && price / unitsPerCase;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ProductCardStyles__WEBPACK_IMPORTED_MODULE_2__["ProductCardStyles"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ProductCardStyles__WEBPACK_IMPORTED_MODULE_2__["ProductCardImage"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ProductCardStyles__WEBPACK_IMPORTED_MODULE_2__["ProductCardInformation"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, brand && brand, " ", title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, unitsPerCase && size && UOM && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "bold-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Size\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, unitsPerCase, "/", size, " ", UOM)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "bold-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Exp. Date\xA0"), expDate ? Object(_lib_formatDate__WEBPACK_IMPORTED_MODULE_5__["default"])(expDate) : 'N/A')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "bold-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Price\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__["default"])(price), "\xA0"), unitsPerCase && price && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "price price-per",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "(", Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__["default"])(pricePerUnit), "/unit)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "cases",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "bold-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Cases Available\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "cases-num",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, casesAvailable ? casesAvailable : 0)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ProductCardStyles__WEBPACK_IMPORTED_MODULE_2__["ProductCardAddToCart"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay",
        title: "Unable to order",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "add-to-cart",
        method: "post",
        autoComplete: "off",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "cartNum",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Add to Cart"))));
    }
  }]);

  return ProductCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(ProductCard, "propTypes", {
  product: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ })

})
//# sourceMappingURL=products.js.b2f3efc2a6045a939a0b.hot-update.js.map