webpackHotUpdate("static/development/pages/account/add-new-item.js",{

/***/ "./components/CreateItem.js":
/*!**********************************!*\
  !*** ./components/CreateItem.js ***!
  \**********************************/
/*! exports provided: default, CREATE_ITEM_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ITEM_MUTATION", function() { return CREATE_ITEM_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-day-picker/DayPickerInput */ "./node_modules/react-day-picker/DayPickerInput.js");
/* harmony import */ var react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_day_picker_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-day-picker/moment */ "./node_modules/react-day-picker/moment.js");
/* harmony import */ var react_day_picker_moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_CreateItemStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/CreateItemStyles */ "./components/styles/CreateItemStyles.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _styles_Btn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/Btn */ "./components/styles/Btn.js");
/* harmony import */ var _elements_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../elements/Icon */ "./elements/Icon.js");

var _jsxFileName = "/Users/zach/Dropbox/Sites/wholesale-site/frontend/components/CreateItem.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_ITEM_MUTATION(\n    $department: String!\n    $barcode: String\n    $brand: String\n    $title: String\n    $location: String\n    $casesAvailable: Int!\n    $buyingLimit: Int\n    $casesPerSkid: Int\n    $casesPerRow: Int\n    $unitsPerCase: Float\n    $size: Float\n    $uom: String\n    $price: Int!\n    $discountPrice: Int\n    $discountQty: Int\n    # $createdAt: DateTime!\n    # $updatedAt: DateTime!\n    $expDate: String\n    $comments: String\n    $image: String\n    $largeImage: String\n  ) {\n    createProduct(\n      data: {\n        barcode: $barcode\n        brand: $brand\n        title: $title\n        department: $department\n        unitsPerCase: $unitsPerCase\n        size: $size\n        uom: $uom\n        price: $price\n        discountPrice: $discountPrice\n        discountQty: $discountQty\n        location: $location\n        casesAvailable: $casesAvailable\n        buyingLimit: $buyingLimit\n        casesPerRow: $casesPerRow\n        casesPerSkid: $casesPerSkid\n        expDate: $expDate\n        comments: $comments\n        image: $image\n        largeImage: $largeImage\n        status: \"ACTIVE\"\n      }\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var CREATE_ITEM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());

var CreateItem =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateItem, _Component);

  function CreateItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreateItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      barcode: '044397265',
      brand: 'Kraft',
      title: 'Macaroni & Cheese Triple Cheese',
      department: 'Dry-Groceries',
      unitsPerCase: 6,
      size: 4,
      uom: 'ct.',
      price: 4.25,
      discountPrice: 3.5,
      discountQty: 100,
      expDate: '',
      location: '138B',
      casesAvailable: 500,
      buyingLimit: 250,
      casesPerRow: 15,
      casesPerSkid: 150,
      comments: 'This mac and cheese is the bees knees'
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === 'number' ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "resetInitialState", function () {
      _this.setState({
        barcode: '',
        brand: '',
        title: '',
        department: '',
        unitsPerCase: '',
        size: '',
        uom: '',
        price: '',
        discountPrice: '',
        discountQty: '',
        expDate: '',
        location: '',
        casesAvailable: '',
        buyingLimit: '',
        casesPerRow: '',
        casesPerSkid: '',
        comments: ''
      });

      window.scrollTo(0, 0);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "formatNewMoney", function () {
      var price = _this.state.price * 100;
      var discountPrice = _this.state.discountPrice * 100;

      _this.setState({
        price: price,
        discountPrice: discountPrice
      });
    });

    return _this;
  }

  _createClass(CreateItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_CreateItemStyles__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Mutation"], {
        mutation: CREATE_ITEM_MUTATION,
        variables: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, function (createProduct, _ref) {
        var loading = _ref.loading,
            error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: "new-wholesale-item-form",
          autoComplete: "off",
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref2 = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
              var res;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      e.preventDefault();
                      _context.next = 3;
                      return _this2.formatNewMoney();

                    case 3:
                      _context.next = 5;
                      return createProduct();

                    case 5:
                      res = _context.sent;

                      _this2.resetInitialState();

                      document.querySelector('#barcode').focus();

                    case 8:
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
            lineNumber: 128
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, "Add New Product"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-row whs info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row-fourth",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "barcode",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }, "Barcode")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          id: "barcode",
          name: "barcode",
          className: "whs-field",
          value: _this2.state.barcode,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row-fourth",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "brand",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, "Brand")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          id: "brand",
          name: "brand",
          className: "whs-field",
          value: _this2.state.brand,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row-half",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: this
        }, "Description ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "asterisk",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, "*"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          id: "title",
          name: "title",
          className: "whs-field required",
          value: _this2.state.title,
          onChange: _this2.handleChange,
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-row whs info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row-fourth",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "department",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, "Department ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "asterisk",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, "*"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "select-menu",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          id: "department",
          name: "department",
          className: "whs-field",
          value: _this2.state.department,
          onChange: _this2.handleChange,
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "Dry-Groceries",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        }, "Dry Groceries"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "Frozen",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, "Frozen")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row-fourth",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "unitsPerCase",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        }, "Units ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "asterisk",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, "*"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "number",
          id: "unitsPerCase",
          name: "unitsPerCase",
          className: "whs-field required",
          value: _this2.state.unitsPerCase,
          onChange: _this2.handleChange,
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row-fourth",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "size",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          },
          __self: this
        }, "Size ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "asterisk",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        }, "*"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "number",
          id: "size",
          name: "size",
          className: "whs-field required",
          value: _this2.state.size,
          onChange: _this2.handleChange,
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row-fourth",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "uom",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: this
        }, "UOM ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "asterisk",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }, "*"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "select-menu",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          className: "whs-field",
          name: "uom",
          id: "uom",
          value: _this2.state.uom,
          onChange: _this2.handleChange,
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "oz.",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256
          },
          __self: this
        }, "oz."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "ct.",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          },
          __self: this
        }, "ct.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row-fourth",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "price",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          },
          __self: this
        }, "Price ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "asterisk",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          },
          __self: this
        }, "*"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "number",
          id: "price",
          name: "price",
          className: "whs-field required",
          value: _this2.state.price,
          onChange: _this2.handleChange,
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row-fourth",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 277
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "discountPrice",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 279
          },
          __self: this
        }, "Discount")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "number",
          id: "discountPrice",
          name: "discountPrice",
          className: "whs-field",
          value: _this2.state.discountPrice,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row-fourth",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 290
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "discountQty",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 291
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292
          },
          __self: this
        }, "Discount Qty")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "number",
          id: "discountQty",
          name: "discountQty",
          className: "whs-field",
          value: _this2.state.discountQty,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 294
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-row whs info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 305
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row-fourth",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "expDate",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 308
          },
          __self: this
        }, "Exp. Date")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_5___default.a, {
          value: _this2.state.expDate,
          formatDate: react_day_picker_moment__WEBPACK_IMPORTED_MODULE_6__["formatDate"],
          parseDate: react_day_picker_moment__WEBPACK_IMPORTED_MODULE_6__["parseDate"],
          placeholder: "",
          onDayChange: function onDayChange(day) {
            return _this2.setState({
              expDate: day
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 310
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row-fourth",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "location",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320
          },
          __self: this
        }, "Location")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          id: "location",
          name: "location",
          className: "whs-field",
          value: _this2.state.location,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 322
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row-fourth",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "casesAvailable",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 332
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 333
          },
          __self: this
        }, "Cases ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "asterisk",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 334
          },
          __self: this
        }, "*"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "number",
          name: "casesAvailable",
          id: "casesAvailable",
          className: "whs-field required",
          required: true,
          value: _this2.state.casesAvailable,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 337
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row-fourth",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 347
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "buyingLimit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 348
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349
          },
          __self: this
        }, "Buying Limit")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "number",
          id: "buyingLimit",
          name: "buyingLimit",
          className: "whs-field required",
          value: _this2.state.buyingLimit,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 351
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row-fourth",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 360
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "casesPerRow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 361
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 362
          },
          __self: this
        }, "Cases / Row")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "number",
          id: "casesPerRow",
          name: "casesPerRow",
          className: "whs-field",
          value: _this2.state.casesPerRow,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 364
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row-fourth",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 373
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "casesPerSkid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 374
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 375
          },
          __self: this
        }, "Cases / Skid")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "number",
          id: "casesPerSkid",
          name: "casesPerSkid",
          className: "whs-field",
          value: _this2.state.casesPerSkid,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 377
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-row whs info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 388
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row-full",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 389
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "comments",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 390
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 391
          },
          __self: this
        }, "Comments")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
          id: "comments",
          name: "comments",
          rows: "2",
          className: "whs-row whs-field",
          value: _this2.state.comments,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 393
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-footer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 404
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "image-area",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 405
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elements_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
          name: "camera",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 406
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          id: "new-whs-img-holder",
          src: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 407
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "file",
          name: "new_image",
          id: "new-whs-img",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 408
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-btns",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 410
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          id: "submit-new-batch-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 411
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
          type: "submit",
          id: "submit",
          name: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 412
          },
          __self: this
        }, "Add Item"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
          type: "cancel",
          onClick: function onClick(e) {
            e.preventDefault();

            _this2.resetInitialState();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 415
          },
          __self: this
        }, "Cancel")))));
      }));
    }
  }]);

  return CreateItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateItem);


/***/ })

})
//# sourceMappingURL=add-new-item.js.e07b46ca0e0bd193b135.hot-update.js.map