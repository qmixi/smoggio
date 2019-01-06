/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _App = __webpack_require__(18);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(23);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _InstallationPage = __webpack_require__(30);

var _InstallationPage2 = _interopRequireDefault(_InstallationPage);

var _NotFoundPage = __webpack_require__(46);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _FavoritesPage = __webpack_require__(47);

var _FavoritesPage2 = _interopRequireDefault(_FavoritesPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
    routes: [_extends({}, _HomePage2.default, {
        path: '/',
        exact: true
    }), _extends({}, _InstallationPage2.default, {
        path: '/installation/:id'
    }), _extends({}, _FavoritesPage2.default, {
        path: '/favourites',
        exact: true
    }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Installation = __webpack_require__(27);

var _Installation2 = _interopRequireDefault(_Installation);

__webpack_require__(29);

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

exports.default = (0, _react.memo)(Installations);
// export default Installations;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var getHeader = exports.getHeader = function getHeader() {
    return {
        apikey: "1BcLHmUjSCUI8MXFDZqMRHKgycf5JL0g",
        'Accept-Language': 'en'
    };
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(15);

var _express = __webpack_require__(16);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(5);

var _expressHttpProxy = __webpack_require__(17);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(7);

var _Routes2 = _interopRequireDefault(_Routes);

var _render = __webpack_require__(49);

var _render2 = _interopRequireDefault(_render);

var _installationsState = __webpack_require__(55);

var _installationsState2 = _interopRequireDefault(_installationsState);

var _statsState = __webpack_require__(56);

var _statsState2 = _interopRequireDefault(_statsState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookiesMiddleware = __webpack_require__(57);

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

app.use('/static', _express2.default.static('public'));
app.use(cookiesMiddleware());
app.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));

app.get('*', function (req, res) {
    var installations = new _installationsState2.default();
    var stats = new _statsState2.default();
    var state = {
        installations: installations,
        stats: stats
    };

    var components = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path);
    var promises = components.map(function (_ref) {
        var route = _ref.route,
            match = _ref.match;

        return route.loadData ? route.loadData(state, match.params, req.universalCookies) : null;
    }).filter(function (option) {
        return !!option;
    }).map(function (option) {
        if (option && option.promise) {
            return new Promise(function (resolve) {
                option.promise.then(function (data) {
                    option.callback(data);resolve();
                }).catch(resolve);
            });
        }
    });

    Promise.all(promises).then(function () {
        var context = {};
        var content = (0, _render2.default)(req, state, context);
        if (context.url) {
            // handle redirection
            return res.redirect(301, context.url);
        }
        if (context.notFound) {
            res.status(404);
        }
        res.send(content);
    }).catch(console.log);
});

app.listen(port, function () {
    console.log('Listening on port ' + port);
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(5);

__webpack_require__(19);

var _Nav = __webpack_require__(20);

var _Nav2 = _interopRequireDefault(_Nav);

var _Footer = __webpack_require__(21);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(
            'div',
            { className: 'app__row' },
            _react2.default.createElement(_Nav2.default, null),
            _react2.default.createElement(
                'div',
                { className: 'app__wrapper' },
                _react2.default.createElement(
                    'div',
                    { className: 'app__routes' },
                    (0, _reactRouterConfig.renderRoutes)(route.routes)
                ),
                _react2.default.createElement(_Footer2.default, null)
            )
        )
    );
};

exports.default = {
    component: App
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = function Nav() {
    return _react2.default.createElement(
        'div',
        { className: 'nav' },
        _react2.default.createElement(
            'div',
            { className: 'nav-logo' },
            'Smoggio'
        ),
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/', className: 'nav-item' },
            _react2.default.createElement(
                'div',
                { className: 'nav-item__icon' },
                _react2.default.createElement('i', { className: 'fas fa-home' })
            ),
            _react2.default.createElement(
                'div',
                { className: 'nav-item__title' },
                'Home'
            )
        ),
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/favourites', className: 'nav-item' },
            _react2.default.createElement(
                'div',
                { className: 'nav-item__icon' },
                _react2.default.createElement('i', { className: 'fas fa-heart' })
            ),
            _react2.default.createElement(
                'div',
                { className: 'nav-item__title' },
                'Favorites'
            )
        )
    );
};

exports.default = Nav;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Modal = __webpack_require__(52);

var _UsedStack = __webpack_require__(77);

var _UsedStack2 = _interopRequireDefault(_UsedStack);

__webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
    return _react2.default.createElement(
        'div',
        { className: 'footer' },
        _react2.default.createElement('img', { src: '/static/logo.png' }),
        _react2.default.createElement(
            'div',
            { className: 'footer__description' },
            'Powered by Airly'
        ),
        _react2.default.createElement(
            'a',
            { className: 'footer__link', href: 'http://www.map.airly.eu', target: '_blank' },
            'www.map.airly.eu'
        ),
        _react2.default.createElement(
            _Modal.ModalConsumer,
            null,
            function (_ref) {
                var showModal = _ref.showModal;
                return _react2.default.createElement(
                    'div',
                    { className: 'footer__stack', onClick: function onClick() {
                            return showModal(_react2.default.createElement(_UsedStack2.default, null));
                        } },
                    'Show used stack'
                );
            }
        )
    );
};

exports.default = Footer;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(3);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

__webpack_require__(24);

__webpack_require__(8);

var _CoordsInput = __webpack_require__(25);

var _CoordsInput2 = _interopRequireDefault(_CoordsInput);

var _Installations = __webpack_require__(9);

var _Installations2 = _interopRequireDefault(_Installations);

var _GeolocationFetcher = __webpack_require__(81);

var _GeolocationFetcher2 = _interopRequireDefault(_GeolocationFetcher);

var _Loader = __webpack_require__(84);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (_dec = (0, _mobxReact.inject)('installations'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.fetchCoords = function (address) {
            _this.setLoadingValue(true);
            _this.props.installations.fetchGeocodingData(address).then(function (data) {
                var coords = _lodash2.default.get(data, 'results[0].geometry.location', {});
                var lat = coords.lat,
                    lng = coords.lng;

                if (lat && lng) {
                    _this.fetchInstallations(lat, lng);
                }
            }).catch(console.log);
        };

        _this.fetchInstallations = function (lat, lng) {
            var fetchInstallations = _this.props.installations.fetchInstallations;

            fetchInstallations(lat, lng).then(function (data) {
                _this.setLoadingValue(false);
                _this.props.installations.installations = data;
            }).catch(function () {
                _this.setLoadingValue(false);
            });
        };

        _this.setLoadingValue = function (value) {
            var installations = _this.props.installations;

            installations.isLoading = value;
        };

        return _this;
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            var _props$installations = this.props.installations,
                installations = _props$installations.installations,
                isLoading = _props$installations.isLoading;

            return _react2.default.createElement(
                'div',
                { className: 'home-page' },
                _react2.default.createElement(
                    'div',
                    { className: 'title home-page__title' },
                    'Welcome to Smoggio!'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'subtitle home-page__subtitle' },
                    'Let\'s check air condidtion in your city \uD83D\uDE80'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'home-page__coords-input' },
                    _react2.default.createElement(_CoordsInput2.default, { fetchCoords: this.fetchCoords })
                ),
                _lodash2.default.isEmpty(installations) && _react2.default.createElement(_GeolocationFetcher2.default, { fetchInstallations: this.fetchInstallations, setLoadingValue: this.setLoadingValue }),
                isLoading ? _react2.default.createElement(_Loader2.default, null) : _react2.default.createElement(_Installations2.default, { installations: installations })
            );
        }
    }]);

    return Home;
}(_react.Component)) || _class) || _class);
exports.default = {
    component: Home
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CoordsInput = function CoordsInput(_ref) {
    var fetchCoords = _ref.fetchCoords,
        fetchInstallations = _ref.fetchInstallations;

    var _useState = (0, _react.useState)(''),
        _useState2 = _slicedToArray(_useState, 2),
        address = _useState2[0],
        setAddress = _useState2[1];

    var onInputKeyPress = function onInputKeyPress(event) {
        if (event.key === 'Enter') {
            fetchCoords(address);
        }
    };

    return _react2.default.createElement(
        'div',
        { className: 'coords-input' },
        _react2.default.createElement(
            'div',
            { className: 'coords-input__title' },
            _react2.default.createElement(
                'div',
                { className: 'coords-input__title-tx' },
                'Please provide your address'
            ),
            _react2.default.createElement(
                'div',
                { className: 'coords-input__title-sub' },
                'Yeah, it can be your somsiad\'s one as well \uD83D\uDC40'
            )
        ),
        _react2.default.createElement('input', {
            type: 'text',
            value: address,
            placeholder: 'Address, e.g Wojskowa 6, Pozna\u0144',
            onChange: function onChange(e) {
                return setAddress(e.target.value);
            },
            onKeyPress: function onKeyPress(e) {
                return onInputKeyPress(e);
            } }),
        _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                    return fetchCoords(address);
                }, disabled: !address },
            'Select'
        )
    );
};

exports.default = (0, _react.memo)(CoordsInput);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

__webpack_require__(28);

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

exports.default = (0, _react.memo)(Installation);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(3);

var _mobx = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(2);

var _reactHelmet = __webpack_require__(10);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _InstallationHeader = __webpack_require__(31);

var _InstallationHeader2 = _interopRequireDefault(_InstallationHeader);

var _Disconnected = __webpack_require__(33);

var _Disconnected2 = _interopRequireDefault(_Disconnected);

var _StatsSummary = __webpack_require__(35);

var _StatsSummary2 = _interopRequireDefault(_StatsSummary);

var _FavoriteIndicator = __webpack_require__(37);

var _FavoriteIndicator2 = _interopRequireDefault(_FavoriteIndicator);

var _LiveStats = __webpack_require__(39);

var _LiveStats2 = _interopRequireDefault(_LiveStats);

var _HistoricalStats = __webpack_require__(41);

var _HistoricalStats2 = _interopRequireDefault(_HistoricalStats);

var _Loader = __webpack_require__(84);

var _Loader2 = _interopRequireDefault(_Loader);

__webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var InstallationPage = (_dec = (0, _mobxReact.inject)('stats', 'installations'), _dec(_class = (0, _mobxReact.observer)(_class = (_class2 = function (_Component) {
    _inherits(InstallationPage, _Component);

    function InstallationPage() {
        _classCallCheck(this, InstallationPage);

        return _possibleConstructorReturn(this, (InstallationPage.__proto__ || Object.getPrototypeOf(InstallationPage)).apply(this, arguments));
    }

    _createClass(InstallationPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                installations = _props.installations,
                stats = _props.stats,
                params = _props.match.params;

            stats.fetchStats(params.id).then(function (data) {
                stats.stats = data;
            }).catch(console.log);
            installations.fetchInstallation(params.id).then(function (data) {
                installations.installation = data;
            }).catch(console.log);
        }
    }, {
        key: 'head',
        value: function head() {
            var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var location = address.street + ', ' + address.number;
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    'Installation - ' + location
                ),
                _react2.default.createElement('meta', { property: 'og:title', content: 'Intallation - ' + location })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                installation = _props2.installations.installation,
                _props2$stats = _props2.stats,
                stats = _props2$stats.stats,
                isDisconnected = _props2$stats.isDisconnected,
                params = _props2.match.params;

            var summary = _lodash2.default.get(stats, 'current.indexes[0]', {});
            var liveValues = _lodash2.default.get(stats, 'current.values', []);
            var historyValues = _lodash2.default.get(stats, 'history', []);
            var forecastValues = _lodash2.default.get(stats, 'forecast', []);
            var description = _lodash2.default.get(summary, 'description', 'Sensor in this location has been probably disconnected from power.');
            var isLoading = !params || parseInt(params.id, 10) !== installation.id;

            return _react2.default.createElement(
                'div',
                { className: 'installation-page' },
                this.head(installation.address),
                isLoading ? _react2.default.createElement(_Loader2.default, null) : _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'installation-page__row' },
                        _react2.default.createElement(_InstallationHeader2.default, { installation: installation }),
                        _react2.default.createElement(
                            'div',
                            { className: 'installation-page__info' },
                            _react2.default.createElement(
                                'div',
                                { className: 'installation-page__indicator' },
                                _react2.default.createElement(_FavoriteIndicator2.default, { installation: installation.id })
                            ),
                            !!summary && !isDisconnected && _react2.default.createElement(_StatsSummary2.default, { summary: summary })
                        )
                    ),
                    isDisconnected && _react2.default.createElement(
                        'div',
                        { className: 'installation-page__disconnected' },
                        _react2.default.createElement(_Disconnected2.default, { description: description })
                    ),
                    !isDisconnected && _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        _react2.default.createElement(_LiveStats2.default, { values: liveValues }),
                        _react2.default.createElement(_HistoricalStats2.default, { history: historyValues, forecast: forecastValues })
                    )
                )
            );
        }
    }]);

    return InstallationPage;
}(_react.Component), (_applyDecoratedDescriptor(_class2.prototype, 'componentDidMount', [_mobx.action], Object.getOwnPropertyDescriptor(_class2.prototype, 'componentDidMount'), _class2.prototype)), _class2)) || _class) || _class);
exports.default = {
    component: (0, _reactRouterDom.withRouter)(InstallationPage),
    loadData: function loadData(state, params) {
        return {
            promise: Promise.all([state.stats.fetchStats(params.id), state.installations.fetchInstallation(params.id)]),
            callback: function callback(data) {
                state.stats.stats = data[0];
                state.installations.installation = data[1];
            }
        };
    }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

__webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InstallationHeader = function InstallationHeader(props) {
    var city = _lodash2.default.get(props, 'installation.address.city', '');
    var street = _lodash2.default.get(props, 'installation.address.street', '');
    var number = _lodash2.default.get(props, 'installation.address.number', '');
    var description = _lodash2.default.get(props, 'installation.sponsor.description', '');
    var name = _lodash2.default.get(props, 'installation.sponsor.name', '');

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'title' },
            city,
            ', ',
            street,
            ' ',
            number
        ),
        _react2.default.createElement(
            'div',
            { className: 'subtitle' },
            !!description && _react2.default.createElement(
                'span',
                null,
                description,
                ':'
            ),
            ' ',
            name
        )
    );
};

exports.default = InstallationHeader;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

__webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Disconnected = function Disconnected(_ref) {
    var description = _ref.description;
    return _react2.default.createElement(
        'div',
        { className: 'disconnected' },
        _react2.default.createElement(
            'div',
            { className: 'disconnected__description' },
            description
        ),
        _react2.default.createElement('img', { className: 'disconnected__img', src: 'https://i.giphy.com/media/l1J9EdzfOSgfyueLm/giphy.webp' })
    );
};

exports.default = (0, _react.memo)(Disconnected);

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InstallationHeader = function InstallationHeader(_ref) {
    var _ref$summary = _ref.summary;
    _ref$summary = _ref$summary === undefined ? {} : _ref$summary;
    var value = _ref$summary.value,
        level = _ref$summary.level,
        description = _ref$summary.description;
    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('summary', {
                'summary--low': ['LOW', 'VERY_LOW'].includes(level),
                'summary--medium': level === 'MEDIUM',
                'summary--high': level === 'HIGH'
            }) },
        _react2.default.createElement(
            'div',
            { className: 'summary__value' },
            parseInt(value, 10)
        ),
        _react2.default.createElement(
            'div',
            { className: 'summary__description' },
            _react2.default.createElement(
                'span',
                null,
                description,
                '\xA0'
            )
        )
    );
};

exports.default = (0, _react.memo)(InstallationHeader);

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCookie = __webpack_require__(6);

__webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var FavoriteIndicator = function FavoriteIndicator(_ref) {
    var cookies = _ref.cookies,
        installation = _ref.installation;


    var setFav = function setFav() {
        var favoriteInstallations = cookies.get('favInstallations') || [];
        var items = [].concat(_toConsumableArray(favoriteInstallations), [installation]);
        cookies.set('favInstallations', items, { path: '/' });
    };

    var removeFav = function removeFav() {
        var favoriteInstallations = cookies.get('favInstallations');
        if (favoriteInstallations) {
            var items = favoriteInstallations.filter(function (item) {
                return item !== installation;
            });
            cookies.set('favInstallations', items, { path: '/' });
        }
    };

    var favs = cookies.get('favInstallations');
    var isFav = favs && favs.includes(installation);

    return _react2.default.createElement(
        'div',
        { className: 'favorite-indicator' },
        isFav && _react2.default.createElement('i', { className: 'fas fa-heart', onClick: removeFav }),
        !isFav && _react2.default.createElement('i', { className: 'far fa-heart', onClick: setFav })
    );
};

exports.default = (0, _react.memo)((0, _reactCookie.withCookies)(FavoriteIndicator));

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

__webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LiveStats = function LiveStats(_ref) {
    var _ref$values = _ref.values,
        values = _ref$values === undefined ? [] : _ref$values;

    var getUnit = function getUnit(name) {
        if (['PM10', 'PM25', 'PM1'].includes(name)) {
            return 'µg/m³';
        } else if (['TEMPERATURE'].includes(name)) {
            return '°C';
        } else if (['HUMIDITY'].includes(name)) {
            return '%';
        } else if (['PRESSURE'].includes(name)) {
            return 'hPa';
        }
    };
    return _react2.default.createElement(
        'div',
        { className: 'stats-live' },
        _react2.default.createElement(
            'div',
            { className: 'stats-live__title title title--small' },
            'Live stats'
        ),
        _react2.default.createElement(
            'div',
            { className: 'stats-live__list' },
            values.map(function (_ref2) {
                var name = _ref2.name,
                    value = _ref2.value;
                return _react2.default.createElement(
                    'div',
                    { className: 'stats-live__item', key: name },
                    _react2.default.createElement(
                        'div',
                        { className: 'stats-live__item-title' },
                        name
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'stats-live__item-value' },
                        value,
                        _react2.default.createElement(
                            'span',
                            { className: 'stats-live__item-unit' },
                            getUnit(name)
                        )
                    )
                );
            })
        )
    );
};

exports.default = (0, _react.memo)(LiveStats);

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = __webpack_require__(42);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = __webpack_require__(43);

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var statsReducer = function statsReducer(state, action) {
    switch (action.type) {
        case 'SET_FORECAST':
            return {
                type: 'forecast',
                title: 'Forecast'
            };
        case 'SET_HISTORY':
            return {
                type: 'history',
                title: 'Historical'
            };
        default:
            return state;
    }
};

var HistoricalStats = function HistoricalStats(_ref) {
    var _ref$history = _ref.history,
        history = _ref$history === undefined ? [] : _ref$history,
        _ref$forecast = _ref.forecast,
        forecast = _ref$forecast === undefined ? [] : _ref$forecast;

    var _useReducer = (0, _react.useReducer)(statsReducer, {
        type: 'history',
        title: 'History'
    }),
        _useReducer2 = _slicedToArray(_useReducer, 2),
        state = _useReducer2[0],
        dispatch = _useReducer2[1];

    var values = state.type === 'forecast' ? forecast : history;
    var labels = values.map(function (item) {
        return (0, _moment2.default)(item.fromDateTime).format('DD MMM HH:mm');
    });
    var dataValues = values.map(function (item) {
        return item.indexes[0].value;
    });
    var temperatureValues = values.map(function (item) {
        var temperatureData = item.values.find(function (value) {
            return value.name === 'TEMPERATURE';
        });
        return temperatureData ? temperatureData.value : false;
    });

    var data = {
        labels: labels,
        datasets: [{
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(104, 86, 229, 0.4)',
            borderColor: 'rgba(104, 86, 229)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(104, 86, 229)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(104, 86, 229)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataValues
        }]
    };
    var legend = {
        display: false
    };

    var temperatureData = {
        labels: labels,
        datasets: [{
            backgroundColor: 'rgba(104, 138, 221,0.8)',
            borderColor: 'rgba(104, 138, 221,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(104, 138, 221,0.9)',
            hoverBorderColor: 'rgba(104, 138, 221,1)',
            data: temperatureValues
        }]
    };

    var switchStatsType = function switchStatsType() {
        var newActionType = state.type === 'forecast' ? 'SET_HISTORY' : 'SET_FORECAST';

        dispatch({
            type: newActionType
        });
    };

    return _react2.default.createElement(
        'div',
        { className: 'history' },
        _react2.default.createElement(
            'div',
            { className: 'history__row' },
            _react2.default.createElement(
                'div',
                { className: 'title history__title title title--small' },
                state.title,
                ' stats'
            ),
            _react2.default.createElement(
                'button',
                { onClick: switchStatsType },
                _lodash2.default.startCase(state.type)
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'subtitle history__title title title--small' },
            'AIRLY CAQI'
        ),
        _react2.default.createElement(
            'div',
            { className: 'history__chart' },
            _react2.default.createElement(_reactChartjs.Line, { data: data, legend: legend })
        ),
        temperatureValues[0] && _react2.default.createElement(
            'div',
            { className: 'history__temperature' },
            _react2.default.createElement(
                'div',
                { className: 'subtitle history__title title title--small history__temperature-title' },
                'Temperature'
            ),
            _react2.default.createElement(
                'div',
                { className: 'history__chart' },
                _react2.default.createElement(_reactChartjs.Bar, {
                    data: temperatureData,
                    legend: legend,
                    options: {
                        maintainAspectRatio: false
                    }
                })
            )
        )
    );
};

exports.default = (0, _react.memo)(HistoricalStats);

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
    var _ref$staticContext = _ref.staticContext,
        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

    staticContext.notFound = true;
    return _react2.default.createElement(
        "div",
        { className: "center-align" },
        _react2.default.createElement(
            "h3",
            null,
            "Ooops, route not found."
        )
    );
};

exports.default = {
    component: NotFoundPage
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(3);

var _mobx = __webpack_require__(4);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _reactCookie = __webpack_require__(6);

__webpack_require__(48);

__webpack_require__(8);

var _Installations = __webpack_require__(9);

var _Installations2 = _interopRequireDefault(_Installations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Favourites = (_dec = (0, _mobxReact.inject)('installations'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    _inherits(Favourites, _Component);

    function Favourites(props) {
        _classCallCheck(this, Favourites);

        var _this = _possibleConstructorReturn(this, (Favourites.__proto__ || Object.getPrototypeOf(Favourites)).call(this, props));

        _this.fetchCoords = function (address) {
            _this.props.installations.fetchGeocodingData(address).then(function (data) {
                var coords = _lodash2.default.get(data, 'results[0].geometry.location', {});
                var lat = coords.lat,
                    lng = coords.lng;

                if (lat && lng) {
                    _this.props.installations.fetchInstallations(lat, lng).then(function (data) {
                        _this.props.installations.installations = data;
                    });
                }
            }).catch(console.log);
        };

        return _this;
    }

    _createClass(Favourites, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                cookies = _props.cookies,
                installations = _props.installations;

            var favs = cookies.get('favInstallations') || [];
            Promise.all(favs.map(function (installation) {
                return installations.fetchInstallation(installation);
            })).then(function (data) {
                installations.favs = data;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var favs = this.props.installations.favs;

            return _react2.default.createElement(
                'div',
                { className: 'home-page' },
                _react2.default.createElement(
                    'div',
                    { className: 'title home-page__title' },
                    'Favoutires'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'subtitle home-page__subtitle' },
                    'Here are your favorite installations \uD83D\uDD25'
                ),
                _react2.default.createElement(_Installations2.default, { installations: favs })
            );
        }
    }]);

    return Favourites;
}(_react.Component)) || _class) || _class);
exports.default = {
    component: (0, _reactCookie.withCookies)(Favourites),
    loadData: function loadData(state, params, cookies) {
        var favs = cookies.get('favInstallations') || [];

        return {
            promise: Promise.all(favs.map(function (installation) {
                return state.installations.fetchInstallation(installation);
            })),
            callback: function callback(data) {
                state.installations.favs = data;
            }
        };
    }
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(3);

var _server = __webpack_require__(50);

var _reactRouterConfig = __webpack_require__(5);

var _reactRouterDom = __webpack_require__(2);

var _serializeJavascript = __webpack_require__(51);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(10);

var _reactCookie = __webpack_require__(6);

var _Routes = __webpack_require__(7);

var _Routes2 = _interopRequireDefault(_Routes);

var _Modal = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, state, context) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _mobxReact.Provider,
        state,
        _react2.default.createElement(
            _reactCookie.CookiesProvider,
            { cookies: req.universalCookies },
            _react2.default.createElement(
                _reactRouterDom.StaticRouter,
                { context: context, location: req.url },
                _react2.default.createElement(
                    _Modal.ModalProvider,
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
                    )
                )
            )
        )
    ));

    var helmet = _reactHelmet.Helmet.renderStatic();
    var initialState = {
        installations: state.installations.toJson(),
        stats: state.stats.toJson()
    };
    return '\n        <html>\n            <head>\n                <meta charset="utf-8" />\n                ' + helmet.title.toString() + '\n                ' + helmet.meta.toString() + '\n                <link rel="stylesheet" href="/static/styles.css">\n                <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon">\n                <link rel="icon" href="/static/favicon.ico" type="image/x-icon">\n                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">\n                <link href="https://fonts.googleapis.com/css?family=Lato:300,400|Montserrat:600" rel="stylesheet">                \n            </head>\n            <body>\n                <div id="root">' + content + '</div>\n            </body>\n            <script>\n                window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(initialState) + ';\n            </script>\n            <script src="/static/bundle.js"></script>\n        </html>\n    ';
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ModalProvider = exports.ModalConsumer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Modal = __webpack_require__(53);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalContext = (0, _react.createContext)();

var ModalConsumer = exports.ModalConsumer = ModalContext.Consumer;

var ModalProvider = exports.ModalProvider = function (_Component) {
    _inherits(ModalProvider, _Component);

    function ModalProvider() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ModalProvider);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ModalProvider.__proto__ || Object.getPrototypeOf(ModalProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            modalContent: null,
            show: _this.show
        }, _this.show = function (modalContent) {
            _this.setState({
                modalContent: modalContent
            });
        }, _this.hide = function () {
            _this.setState({
                modalContent: null
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ModalProvider, [{
        key: 'render',
        value: function render() {
            var ContentComponent = this.state.modalContent;
            return _react2.default.createElement(
                ModalContext.Provider,
                { value: {
                        modalContent: this.state.modalContent,
                        showModal: this.show
                    } },
                this.props.children,
                ContentComponent ? _react2.default.createElement(_Modal2.default, { Content: ContentComponent, hideModal: this.hide }) : ""
            );
        }
    }]);

    return ModalProvider;
}(_react.Component);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(_ref) {
  var Content = _ref.Content,
      hideModal = _ref.hideModal;

  return _react2.default.createElement(
    "div",
    { className: "modal" },
    _react2.default.createElement(
      "div",
      { className: "modal__close", onClick: hideModal },
      _react2.default.createElement("i", { className: "fas fa-times" })
    ),
    _react2.default.createElement(
      "div",
      { className: "modal__content" },
      Content
    )
  );
};

exports.default = Modal;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

var _mobx = __webpack_require__(4);

__webpack_require__(12);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var InstallationsState = (_class = function () {
    function InstallationsState(initialState) {
        _classCallCheck(this, InstallationsState);

        _initDefineProp(this, 'installations', _descriptor, this);

        _initDefineProp(this, 'installation', _descriptor2, this);

        _initDefineProp(this, 'favs', _descriptor3, this);

        _initDefineProp(this, 'isLoading', _descriptor4, this);

        this.installations = _lodash2.default.get(initialState, 'installations.installations', []);
        this.installation = _lodash2.default.get(initialState, 'installations.installation', {});
        this.favs = _lodash2.default.get(initialState, 'installations.favs', []);
    }

    _createClass(InstallationsState, [{
        key: 'fetchInstallations',
        value: function fetchInstallations(lat, lng) {
            return fetch('https://airapi.airly.eu/v2/installations/nearest?lat=' + lat + '&lng=' + lng + '&maxDistanceKM=5&maxResults=10', { headers: (0, _utils.getHeader)() }).then(function (resp) {
                return resp.json();
            }).catch(function (e) {
                return console.log(e);
            });
        }
    }, {
        key: 'fetchInstallation',
        value: function fetchInstallation(id) {
            return fetch('https://airapi.airly.eu/v2/installations/' + id, { headers: (0, _utils.getHeader)() }).then(function (resp) {
                return resp.json();
            }).catch(function (e) {
                return console.log(e);
            });
        }
    }, {
        key: 'fetchGeocodingData',
        value: function fetchGeocodingData(address) {
            return fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + "AIzaSyAR4MA21a-VVyokWSIOuO9Yb_CQe5SMXAw").then(function (resp) {
                return resp.json();
            }).catch(function (e) {
                return console.log(e);
            });
        }
    }, {
        key: 'toJson',
        value: function toJson() {
            return {
                installations: this.installations ? this.installations : [],
                installation: this.installation ? this.installation : {},
                favs: this.favs ? this.favs : {}
            };
        }
    }]);

    return InstallationsState;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'installations', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'installation', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'favs', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'isLoading', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _applyDecoratedDescriptor(_class.prototype, 'fetchInstallations', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'fetchInstallations'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fetchInstallation', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'fetchInstallation'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fetchGeocodingData', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'fetchGeocodingData'), _class.prototype)), _class);
exports.default = InstallationsState;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor;

var _mobx = __webpack_require__(4);

__webpack_require__(12);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var StatsState = (_class = function () {
    function StatsState(initialState) {
        _classCallCheck(this, StatsState);

        _initDefineProp(this, 'stats', _descriptor, this);

        this.stats = _lodash2.default.get(initialState, 'stats.stats', {});
    }

    _createClass(StatsState, [{
        key: 'fetchStats',
        value: function fetchStats(id) {
            return fetch('https://airapi.airly.eu/v2/measurements/installation?installationId=' + id, { headers: (0, _utils.getHeader)() }).then(function (resp) {
                return resp.json();
            }).catch(function (e) {
                return console.log(e);
            });
        }
    }, {
        key: 'toJson',
        value: function toJson() {
            return {
                stats: this.stats ? this.stats : {}
            };
        }
    }, {
        key: 'isDisconnected',
        get: function get() {
            var values = _lodash2.default.get(this.stats, 'current.values', []);
            return values.length < 1;
        }
    }]);

    return StatsState;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'stats', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return {};
    }
}), _applyDecoratedDescriptor(_class.prototype, 'fetchStats', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'fetchStats'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'isDisconnected', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'isDisconnected'), _class.prototype)), _class);
exports.default = StatsState;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("universal-cookie-express");

/***/ }),
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(78);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UsedStack = function UsedStack() {
    return _react2.default.createElement(
        'div',
        { className: 'stack' },
        _react2.default.createElement(
            'div',
            { className: 'title stack__title' },
            'Stack used to create Smoggio app'
        ),
        _react2.default.createElement(
            'div',
            { className: 'stack__list' },
            _react2.default.createElement(
                'div',
                { className: 'stack__list-item' },
                'React 16.7'
            ),
            _react2.default.createElement(
                'div',
                { className: 'stack__list-sublist' },
                _react2.default.createElement(
                    'div',
                    { className: 'stack__list-subitem' },
                    'Context API'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'stack__list-subitem' },
                    'Memo'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'stack__list-subitem' },
                    'UseEffect'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'stack__list-subitem' },
                    'UseState'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'stack__list-item' },
                'Server Side Rendering'
            ),
            _react2.default.createElement(
                'div',
                { className: 'stack__list-item' },
                'MobX'
            ),
            _react2.default.createElement(
                'div',
                { className: 'stack__list-item' },
                'Express'
            ),
            _react2.default.createElement(
                'div',
                { className: 'stack__list-item' },
                'SCSS'
            ),
            _react2.default.createElement(
                'div',
                { className: 'stack__list-item' },
                'Webpack'
            )
        )
    );
};

exports.default = UsedStack;

/***/ }),
/* 78 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(82);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GeolocationFetcher = function GeolocationFetcher(_ref) {
    var fetchInstallations = _ref.fetchInstallations,
        setLoadingValue = _ref.setLoadingValue;


    (0, _react.useEffect)(function () {
        if (navigator.geolocation) setLoadingValue(true);
        navigator.geolocation.getCurrentPosition(function (pos) {
            fetchInstallations(pos.coords.latitude, pos.coords.longitude);
        }, function () {
            setLoadingValue(false);
        });
    }, []);

    return _react2.default.createElement('div', null);
};

exports.default = (0, _react.memo)(GeolocationFetcher);

/***/ }),
/* 82 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */,
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(85);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader() {
  return _react2.default.createElement('div', { className: 'loader' });
};

exports.default = Loader;

/***/ }),
/* 85 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);