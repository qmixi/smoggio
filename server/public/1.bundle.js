webpackJsonp([1],{

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(64);

__webpack_require__(609);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Installation = function Installation(_ref) {
    var _ref$installation = _ref.installation,
        id = _ref$installation.id,
        _ref$installation$add = _ref$installation.address;
    _ref$installation$add = _ref$installation$add === undefined ? {} : _ref$installation$add;
    var city = _ref$installation$add.city,
        street = _ref$installation$add.street,
        number = _ref$installation$add.number;
    return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/installation/' + id, className: 'installation' },
        _react2.default.createElement(
            'div',
            { className: 'installation__city' },
            city
        ),
        _react2.default.createElement(
            'div',
            { className: 'installation__address' },
            _react2.default.createElement('i', { className: 'fas fa-map-marker-alt' }),
            ' ',
            street,
            ' ',
            number
        )
    );
};

exports.default = Installation;

/***/ }),

/***/ 609:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Installation = __webpack_require__(608);

var _Installation2 = _interopRequireDefault(_Installation);

__webpack_require__(610);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Installations = function Installations(_ref) {
    var installations = _ref.installations;
    return _react2.default.createElement(
        'div',
        { className: 'installations' },
        installations.map(function (installation) {
            return _react2.default.createElement(_Installation2.default, { key: installation.id, installation: installation });
        })
    );
};

exports.default = Installations;

/***/ })

});