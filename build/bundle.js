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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//import axios from 'axios';      //for making ajax request

var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var fetchUsers = exports.fetchUsers = function fetchUsers() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return api.get('/users');

                        case 2:
                            res = _context.sent;


                            dispatch({
                                type: FETCH_USERS,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';
var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return api.get('/current_user');

                        case 2:
                            res = _context2.sent;


                            dispatch({
                                type: FETCH_CURRENT_USER,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var FETCH_ADMINS = exports.FETCH_ADMINS = 'fetch_admins';
var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
    return function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return api.get('/admins');

                        case 2:
                            res = _context3.sent;


                            dispatch({
                                type: FETCH_ADMINS,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function (_x7, _x8, _x9) {
            return _ref3.apply(this, arguments);
        };
    }();
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(FETCH_USERS, 'FETCH_USERS', '/Users/Shepshuk/WebstormProjects/maket/src/client/actions/index.js');

    __REACT_HOT_LOADER__.register(fetchUsers, 'fetchUsers', '/Users/Shepshuk/WebstormProjects/maket/src/client/actions/index.js');

    __REACT_HOT_LOADER__.register(FETCH_CURRENT_USER, 'FETCH_CURRENT_USER', '/Users/Shepshuk/WebstormProjects/maket/src/client/actions/index.js');

    __REACT_HOT_LOADER__.register(fetchCurrentUser, 'fetchCurrentUser', '/Users/Shepshuk/WebstormProjects/maket/src/client/actions/index.js');

    __REACT_HOT_LOADER__.register(FETCH_ADMINS, 'FETCH_ADMINS', '/Users/Shepshuk/WebstormProjects/maket/src/client/actions/index.js');

    __REACT_HOT_LOADER__.register(fetchAdmins, 'fetchAdmins', '/Users/Shepshuk/WebstormProjects/maket/src/client/actions/index.js');
}();

;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HomePage = __webpack_require__(13);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _UsersListPage = __webpack_require__(14);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

var _App = __webpack_require__(15);

var _App2 = _interopRequireDefault(_App);

var _NotFoundPage = __webpack_require__(17);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _AdminsListPage = __webpack_require__(18);

var _AdminsListPage2 = _interopRequireDefault(_AdminsListPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [_extends({}, _App2.default, {
    routes: [_extends({}, _HomePage2.default, {
        path: '/',
        exact: true
    }), _extends({}, _AdminsListPage2.default, {
        path: '/admins'
    }), _extends({}, _UsersListPage2.default, {
        path: '/users'

    }), _extends({}, _NotFoundPage2.default)]
})];
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Shepshuk/WebstormProjects/maket/src/client/Routes.js');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(11);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(21);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(4);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _expressHttpProxy = __webpack_require__(28);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));

app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
    //This is a root route(route handler), so when anybody goes there it'll give a renderer
    var store = (0, _createStore2.default)(req);

    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
        var route = _ref.route;

        return route.loadData ? route.loadData(store) : null;
    }).map(function (promise) {
        if (promise) {
            return new Promise(function (resolve, reject) {
                promise.then(resolve).catch(resolve);
            });
        }
    });

    Promise.all(promises).then(function () {
        var context = {};
        var content = (0, _renderer2.default)(req, store, context);

        if (context.url) {
            return res.redirect(301, context.url);
        }

        if (context.notFound) {
            res.status(404);
        }

        res.send(content);
    });
});

app.listen(3000, function () {
    console.log("This thing works");
    console.log("Listening to port 3000");
});
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(app, 'app', '/Users/Shepshuk/WebstormProjects/maket/src/index.js');
}();

;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(12);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(4);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _serializeJavascript = __webpack_require__(20);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(req, store, context) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.url, context: context },
            _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
            )
        )
    ));

    return '\n    <html>\n        <head>\n        <!-- Compiled and minified CSS -->\n  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">\n\n</head>\n        <body>\n            <div id=\'root\'}>' + content + '</div>\n            <script>\n                window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n            </script>\n            <script src="bundle.js"></script>\n        </body>\n    </html>\n    ';
};

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Shepshuk/WebstormProjects/maket/src/helpers/renderer.js');
}();

;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
    return _react2.default.createElement(
        'div',
        { className: 'center-align', style: { marginTop: '200px' } },
        _react2.default.createElement(
            'h3',
            null,
            'Welcome!'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Check out theese new features!'
        )
    );
};

var _default = {
    component: Home
};
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/Shepshuk/WebstormProjects/maket/src/client/pages/HomePage.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Shepshuk/WebstormProjects/maket/src/client/pages/HomePage.js');
}();

;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _index = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersList = function (_Component) {
    _inherits(UsersList, _Component);

    function UsersList() {
        _classCallCheck(this, UsersList);

        return _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).apply(this, arguments));
    }

    _createClass(UsersList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // гарантирует наличие данных при использовании async или ajax(точно не знаю)
            this.props.fetchUsers();
        }
    }, {
        key: 'renderUsers',
        value: function renderUsers() {
            return this.props.users.map(function (user) {
                return _react2.default.createElement(
                    'li',
                    { key: user.id },
                    user.name
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'This user list is pulled up from APIserver by action dispatch',
                _react2.default.createElement(
                    'ul',
                    null,
                    this.renderUsers()
                )
            );
        }
    }]);

    return UsersList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return { users: state.users };
};

function loadData(store) {
    return store.dispatch((0, _index.fetchUsers)());
    //console.log('I\'m trying to load some data');
}

var _default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _index.fetchUsers })(UsersList)
};
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(loadData, 'loadData', '/Users/Shepshuk/WebstormProjects/maket/src/client/pages/UsersListPage.js');

    __REACT_HOT_LOADER__.register(UsersList, 'UsersList', '/Users/Shepshuk/WebstormProjects/maket/src/client/pages/UsersListPage.js');

    __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/Shepshuk/WebstormProjects/maket/src/client/pages/UsersListPage.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Shepshuk/WebstormProjects/maket/src/client/pages/UsersListPage.js');
}();

;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(4);

var _index = __webpack_require__(1);

var _Header = __webpack_require__(16);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var route = _ref.route;


    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        (0, _reactRouterConfig.renderRoutes)(route.routes)
    );
};

var _default = {
    component: App,
    loadData: function loadData(_ref2) {
        var dispatch = _ref2.dispatch;
        return dispatch((0, _index.fetchCurrentUser)());
    }
};
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(App, 'App', '/Users/Shepshuk/WebstormProjects/maket/src/client/App.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Shepshuk/WebstormProjects/maket/src/client/App.js');
}();

;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var auth = _ref.auth;

    console.log('My auth status is ', auth);

    var authButton = auth ? _react2.default.createElement(
        'a',
        { href: '/api/logout' },
        'Logout'
    ) : _react2.default.createElement(
        'a',
        { href: '/api/auth/google' },
        'Login'
    );

    return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
            'div',
            { className: 'nav-wrapper' },
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/', className: 'brand-logo' },
                'SSR Rendering'
            ),
            _react2.default.createElement(
                'ul',
                { className: 'right' },
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/users' },
                        'Users'
                    )
                ),
                '>',
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/admins' },
                        'Admins'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    authButton
                )
            )
        )
    );
};

var mapStateToProps = function mapStateToProps(_ref2) {
    var auth = _ref2.auth;

    return { auth: auth };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(Header);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Header, 'Header', '/Users/Shepshuk/WebstormProjects/maket/src/client/components/Header.js');

    __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/Shepshuk/WebstormProjects/maket/src/client/components/Header.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Shepshuk/WebstormProjects/maket/src/client/components/Header.js');
}();

;

/***/ }),
/* 17 */
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
        'h1',
        null,
        'Ooooops, this page does not exist...'
    );
};

var _default = {
    component: NotFoundPage
};
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(NotFoundPage, 'NotFoundPage', '/Users/Shepshuk/WebstormProjects/maket/src/client/pages/NotFoundPage.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Shepshuk/WebstormProjects/maket/src/client/pages/NotFoundPage.js');
}();

;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _index = __webpack_require__(1);

var _requireAuth = __webpack_require__(19);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminsListPage = function (_Component) {
    _inherits(AdminsListPage, _Component);

    function AdminsListPage() {
        _classCallCheck(this, AdminsListPage);

        return _possibleConstructorReturn(this, (AdminsListPage.__proto__ || Object.getPrototypeOf(AdminsListPage)).apply(this, arguments));
    }

    _createClass(AdminsListPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchAdmins();
        }
    }, {
        key: 'renderAdmins',
        value: function renderAdmins() {
            return this.props.admins.map(function (admin) {
                return _react2.default.createElement(
                    'li',
                    { key: admin.id },
                    admin.name
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h3',
                    null,
                    'Protected list of admins'
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    this.renderAdmins()
                )
            );
        }
    }]);

    return AdminsListPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
    var admins = _ref.admins;

    return { admins: admins };
};

var _default = {
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _index.fetchAdmins })((0, _requireAuth2.default)(AdminsListPage)),
    loadData: function loadData(_ref2) {
        var dispatch = _ref2.dispatch;
        return dispatch((0, _index.fetchAdmins)());
    }
};
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(AdminsListPage, 'AdminsListPage', '/Users/Shepshuk/WebstormProjects/maket/src/client/pages/AdminsListPage.js');

    __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/Shepshuk/WebstormProjects/maket/src/client/pages/AdminsListPage.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Shepshuk/WebstormProjects/maket/src/client/pages/AdminsListPage.js');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function _default(ChildComponent) {
    var RequireAuth = function (_Component) {
        _inherits(RequireAuth, _Component);

        function RequireAuth() {
            _classCallCheck(this, RequireAuth);

            return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
        }

        _createClass(RequireAuth, [{
            key: 'render',
            value: function render() {
                switch (this.props.auth) {
                    case false:
                        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
                    case null:
                        return _react2.default.createElement(
                            'div',
                            null,
                            'Loading...'
                        );
                    default:
                        return _react2.default.createElement(ChildComponent, this.props);
                }
            }
        }]);

        return RequireAuth;
    }(_react.Component);

    function mapStateToProps(_ref) {
        var auth = _ref.auth;

        return { auth: auth };
    }

    return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Shepshuk/WebstormProjects/maket/src/client/components/hocs/requireAuth.js');
}();

;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(6);

var _reduxThunk = __webpack_require__(22);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(23);

var _reducers2 = _interopRequireDefault(_reducers);

var _axios = __webpack_require__(27);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//redux middleware
var _default = function _default(req) {
    var axiosInstance = _axios2.default.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: { cookie: req.get('cookie') || '' }
    });
    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

    return store;
};

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Shepshuk/WebstormProjects/maket/src/helpers/createStore.js');
}();

;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _usersReducer = __webpack_require__(24);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _authReduEr = __webpack_require__(25);

var _authReduEr2 = _interopRequireDefault(_authReduEr);

var _adminsReducer = __webpack_require__(26);

var _adminsReducer2 = _interopRequireDefault(_adminsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  users: _usersReducer2.default,
  auth: _authReduEr2.default,
  admins: _adminsReducer2.default
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Shepshuk/WebstormProjects/maket/src/client/reducers/index.js');
}();

;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(1);

var _default = function _default() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
};

exports.default = _default;


var mapStateToProps = function mapStateToProps(_ref) {
    var auth = _ref.auth;

    return { auth: auth }; //same as auth: auth
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/Shepshuk/WebstormProjects/maket/src/client/reducers/usersReducer.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Shepshuk/WebstormProjects/maket/src/client/reducers/usersReducer.js');
}();

;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(1);

var _default = function _default() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case _index.FETCH_CURRENT_USER:
            return action.payload.data || false;

        default:
            return state;
    }
};

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/Shepshuk/WebstormProjects/maket/src/client/reducers/authRedu\u0441er.js");
}();

;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(1);

var _default = function _default() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _index.FETCH_ADMINS:
            return action.payload.data;
        default:
            return state;
    }
};

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/Shepshuk/WebstormProjects/maket/src/client/reducers/adminsReducer.js");
}();

;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDZhYjllOWIxZTgzOWIyNTczNDgiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvUm91dGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL0hvbWVQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcGFnZXMvVXNlcnNMaXN0UGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcGFnZXMvTm90Rm91bmRQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcGFnZXMvQWRtaW5zTGlzdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL2hvY3MvcmVxdWlyZUF1dGguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9jcmVhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yZWR1Y2Vycy91c2Vyc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yZWR1Y2Vycy9hdXRoUmVkddGBZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yZWR1Y2Vycy9hZG1pbnNSZWR1Y2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1odHRwLXByb3h5XCIiXSwibmFtZXMiOlsiRkVUQ0hfVVNFUlMiLCJmZXRjaFVzZXJzIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsImFwaSIsImdldCIsInJlcyIsInR5cGUiLCJwYXlsb2FkIiwiRkVUQ0hfQ1VSUkVOVF9VU0VSIiwiZmV0Y2hDdXJyZW50VXNlciIsIkZFVENIX0FETUlOUyIsImZldGNoQWRtaW5zIiwicm91dGVzIiwicGF0aCIsImV4YWN0IiwiYXBwIiwidXNlIiwicHJveHlSZXFPcHREZWNvcmF0b3IiLCJvcHRzIiwiaGVhZGVycyIsInN0YXRpYyIsInJlcSIsInN0b3JlIiwicHJvbWlzZXMiLCJtYXAiLCJyb3V0ZSIsImxvYWREYXRhIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGhlbiIsImNhdGNoIiwiYWxsIiwiY29udGV4dCIsImNvbnRlbnQiLCJ1cmwiLCJyZWRpcmVjdCIsIm5vdEZvdW5kIiwic3RhdHVzIiwic2VuZCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJIb21lIiwibWFyZ2luVG9wIiwiY29tcG9uZW50IiwiVXNlcnNMaXN0IiwicHJvcHMiLCJ1c2VycyIsInVzZXIiLCJpZCIsIm5hbWUiLCJyZW5kZXJVc2VycyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiQXBwIiwiSGVhZGVyIiwiYXV0aCIsImF1dGhCdXR0b24iLCJOb3RGb3VuZFBhZ2UiLCJzdGF0aWNDb250ZXh0IiwiQWRtaW5zTGlzdFBhZ2UiLCJhZG1pbnMiLCJhZG1pbiIsInJlbmRlckFkbWlucyIsIlJlcXVpcmVBdXRoIiwiYXhpb3NJbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJjb29raWUiLCJ3aXRoRXh0cmFBcmd1bWVudCIsImFjdGlvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSxrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRU8sSUFBTUEsb0NBQWMsYUFBcEI7QUFDQSxJQUFNQyxrQ0FBYSxTQUFiQSxVQUFhO0FBQUE7QUFBQSwyRUFBTSxpQkFBTUMsUUFBTixFQUFnQkMsUUFBaEIsRUFBMEJDLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBQ1pBLElBQUlDLEdBQUosQ0FBUSxRQUFSLENBRFk7O0FBQUE7QUFDeEJDLCtCQUR3Qjs7O0FBRzlCSixxQ0FBUztBQUNMSyxzQ0FBTVAsV0FERDtBQUVMUSx5Q0FBU0Y7QUFGSiw2QkFBVDs7QUFIOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBTjs7QUFBQTtBQUFBO0FB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aWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ2YWI5ZTliMWU4MzliMjU3MzQ4IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJzsgICAgICAvL2ZvciBtYWtpbmcgYWpheCByZXF1ZXN0XG5cbmV4cG9ydCBjb25zdCBGRVRDSF9VU0VSUyA9ICdmZXRjaF91c2Vycyc7XG5leHBvcnQgY29uc3QgZmV0Y2hVc2VycyA9ICgpID0+IGFzeW5jKGRpc3BhdGNoLCBnZXRTdGF0ZSwgYXBpKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXQoJy91c2VycycpO1xuXG4gIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZFVENIX1VTRVJTLFxuICAgICAgcGF5bG9hZDogcmVzXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IEZFVENIX0NVUlJFTlRfVVNFUiA9ICdmZXRjaF9jdXJyZW50X3VzZXInO1xuZXhwb3J0IGNvbnN0IGZldGNoQ3VycmVudFVzZXIgPSAoKSA9PiBhc3luYyhkaXNwYXRjaCwgZ2V0U3RhdGUsIGFwaSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXQoJy9jdXJyZW50X3VzZXInKTtcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogRkVUQ0hfQ1VSUkVOVF9VU0VSLFxuICAgICAgICBwYXlsb2FkOiByZXNcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBGRVRDSF9BRE1JTlMgPSAnZmV0Y2hfYWRtaW5zJztcbmV4cG9ydCBjb25zdCBmZXRjaEFkbWlucyA9ICgpID0+IGFzeW5jKGRpc3BhdGNoLCBnZXRTdGF0ZSwgYXBpKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldCgnL2FkbWlucycpO1xuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBGRVRDSF9BRE1JTlMsXG4gICAgICAgIHBheWxvYWQ6IHJlc1xuICAgIH0pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2FjdGlvbnMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi9wYWdlcy9Ib21lUGFnZSc7XG5pbXBvcnQgVXNlcnNMaXN0UGFnZSBmcm9tICcuL3BhZ2VzL1VzZXJzTGlzdFBhZ2UnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5pbXBvcnQgTm90Rm91bmRQYWdlIGZyb20gJy4vcGFnZXMvTm90Rm91bmRQYWdlJztcbmltcG9ydCBBZG1pbnNMaXN0UGFnZSBmcm9tICcuL3BhZ2VzL0FkbWluc0xpc3RQYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgW1xuICAgIHtcbiAgICAuLi5BcHAsXG4gICAgcm91dGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIC4uLkhvbWVQYWdlLFxuICAgICAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICAgICAgZXhhY3Q6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLi4uQWRtaW5zTGlzdFBhZ2UsXG4gICAgICAgICAgICBwYXRoOiAnL2FkbWlucydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLi4uVXNlcnNMaXN0UGFnZSxcbiAgICAgICAgICAgIHBhdGg6ICcvdXNlcnMnLFxuXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIC4uLk5vdEZvdW5kUGFnZVxuICAgICAgICB9XG4gICAgXVxufVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvUm91dGVzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAnLi9oZWxwZXJzL3JlbmRlcmVyJztcbmltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuL2hlbHBlcnMvY3JlYXRlU3RvcmUnO1xuaW1wb3J0IHsgbWF0Y2hSb3V0ZXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItY29uZmlnJztcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi9jbGllbnQvUm91dGVzJztcbmltcG9ydCBwcm94eSBmcm9tICdleHByZXNzLWh0dHAtcHJveHknO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoJy9hcGknLCBwcm94eSgnaHR0cDovL3JlYWN0LXNzci1hcGkuaGVyb2t1YXBwLmNvbScsIHtcbiAgICBwcm94eVJlcU9wdERlY29yYXRvcihvcHRzKSB7XG4gICAgICAgIG9wdHMuaGVhZGVyc1sneC1mb3J3YXJkZWQtaG9zdCddID0gJ2xvY2FsaG9zdDozMDAwJztcbiAgICAgICAgcmV0dXJuIG9wdHM7XG4gICAgfVxufSkpO1xuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSk7XG5hcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiB7ICAgIC8vVGhpcyBpcyBhIHJvb3Qgcm91dGUocm91dGUgaGFuZGxlciksIHNvIHdoZW4gYW55Ym9keSBnb2VzIHRoZXJlIGl0J2xsIGdpdmUgYSByZW5kZXJlclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVxKTtcblxuICAgIGNvbnN0IHByb21pc2VzID0gbWF0Y2hSb3V0ZXMoUm91dGVzLCByZXEucGF0aCkubWFwKCh7cm91dGV9KSA9PiB7XG4gICAgICAgcmV0dXJuIHJvdXRlLmxvYWREYXRhID8gcm91dGUubG9hZERhdGEoc3RvcmUpIDogbnVsbDtcbiAgICB9KS5tYXAocHJvbWlzZSA9PiB7XG4gICAgICAgIGlmKHByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKHJlc29sdmUpLmNhdGNoKHJlc29sdmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHt9O1xuICAgICAgICBjb25zdCBjb250ZW50ID0gcmVuZGVyZXIocmVxLCBzdG9yZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnRleHQudXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KDMwMSwgY29udGV4dC51cmwpXG4gICAgICAgIH1cblxuICAgICAgICBpZihjb250ZXh0Lm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwNCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXMuc2VuZChjb250ZW50KTtcbiAgICB9KTtcbn0pO1xuXG5hcHAubGlzdGVuKDMwMDAsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlRoaXMgdGhpbmcgd29ya3NcIik7XG4gICAgY29uc29sZS5sb2coXCJMaXN0ZW5pbmcgdG8gcG9ydCAzMDAwXCIpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgcmVuZGVyUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XG5pbXBvcnQgUm91dGVzIGZyb20gJy4uL2NsaWVudC9Sb3V0ZXMnO1xuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICdzZXJpYWxpemUtamF2YXNjcmlwdCc7XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHN0b3JlLCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IHJlbmRlclRvU3RyaW5nKFxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9IGNvbnRleHQ9e2NvbnRleHR9PlxuICAgICAgICAgICAgICAgIDxkaXY+e3JlbmRlclJvdXRlcyhSb3V0ZXMpfTwvZGl2PlxuICAgICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgKTtcblxuICAgIHJldHVybiBgXG4gICAgPGh0bWw+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICA8IS0tIENvbXBpbGVkIGFuZCBtaW5pZmllZCBDU1MgLS0+XG4gIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWF0ZXJpYWxpemUvMC4xMDAuMi9jc3MvbWF0ZXJpYWxpemUubWluLmNzc1wiPlxuXG48L2hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgICAgPGRpdiBpZD0ncm9vdCd9PiR7Y29udGVudH08L2Rpdj5cbiAgICAgICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgICAgICAgd2luZG93LklOSVRJQUxfU1RBVEUgPSAke3NlcmlhbGl6ZShzdG9yZS5nZXRTdGF0ZSgpKX1cbiAgICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJidW5kbGUuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgICBgO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvcmVuZGVyZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWFsaWduXCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICcyMDBweCd9fT5cbiAgICAgICAgICAgIDxoMz5XZWxjb21lITwvaDM+XG4gICAgICAgICAgICA8cD5DaGVjayBvdXQgdGhlZXNlIG5ldyBmZWF0dXJlcyE8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50OiAgSG9tZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvcGFnZXMvSG9tZVBhZ2UuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGZldGNoVXNlcnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuY2xhc3MgVXNlcnNMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHsgICAgICAvLyDQs9Cw0YDQsNC90YLQuNGA0YPQtdGCINC90LDQu9C40YfQuNC1INC00LDQvdC90YvRhSDQv9GA0Lgg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LggYXN5bmMg0LjQu9C4IGFqYXgo0YLQvtGH0L3QviDQvdC1INC30L3QsNGOKVxuICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFVzZXJzKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyVXNlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnVzZXJzLm1hcCh1c2VyID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXt1c2VyLmlkfT57dXNlci5uYW1lfTwvbGk+XG4gICAgICAgIH0pXG4gICAgfVxuXG5yZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgVGhpcyB1c2VyIGxpc3QgaXMgcHVsbGVkIHVwIGZyb20gQVBJc2VydmVyIGJ5IGFjdGlvbiBkaXNwYXRjaFxuICAgICAgICAgICAgPHVsPnt0aGlzLnJlbmRlclVzZXJzKCl9PC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn19XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7IHVzZXJzOiBzdGF0ZS51c2VycyB9O1xufTtcblxuZnVuY3Rpb24gbG9hZERhdGEoc3RvcmUpIHtcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2hVc2VycygpKTtcbiAgICAvL2NvbnNvbGUubG9nKCdJXFwnbSB0cnlpbmcgdG8gbG9hZCBzb21lIGRhdGEnKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbG9hZERhdGEsXG4gICAgY29tcG9uZW50OiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBmZXRjaFVzZXJzIH0pKFVzZXJzTGlzdClcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L3BhZ2VzL1VzZXJzTGlzdFBhZ2UuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBmZXRjaEN1cnJlbnRVc2VyIH0gZnJvbSBcIi4vYWN0aW9ucy9pbmRleFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJztcblxuY29uc3QgQXBwID0gKHsgcm91dGUgfSkgPT4ge1xuXG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAge3JlbmRlclJvdXRlcyhyb3V0ZS5yb3V0ZXMpfVxuICAgICAgICA8L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50OiBBcHAsXG4gICAgbG9hZERhdGE6ICh7ZGlzcGF0Y2h9KSA9PiBkaXNwYXRjaChmZXRjaEN1cnJlbnRVc2VyKCkpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L0FwcC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBhdXRoIH0pID0+IHtcbiAgICBjb25zb2xlLmxvZygnTXkgYXV0aCBzdGF0dXMgaXMgJywgYXV0aCk7XG5cbiAgICBjb25zdCBhdXRoQnV0dG9uID0gYXV0aCA/IChcbiAgICAgICAgPGEgaHJlZj0nL2FwaS9sb2dvdXQnPkxvZ291dDwvYT5cbiAgICApIDogKFxuICAgICAgICA8YSBocmVmPScvYXBpL2F1dGgvZ29vZ2xlJz5Mb2dpbjwvYT5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJicmFuZC1sb2dvXCI+U1NSIFJlbmRlcmluZzwvTGluaz5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL3VzZXJzXCI+VXNlcnM8L0xpbms+PC9saT4+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9hZG1pbnNcIj5BZG1pbnM8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPnthdXRoQnV0dG9ufTwvbGk+XG5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICk7XG59O1xuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGF1dGggfSkgPT4ge1xuICAgIHJldHVybiB7IGF1dGggfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIZWFkZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE5vdEZvdW5kUGFnZSA9ICh7IHN0YXRpY0NvbnRleHQgPSB7fSB9KSA9PiB7XG4gICBzdGF0aWNDb250ZXh0Lm5vdEZvdW5kID0gdHJ1ZTtcbiAgICByZXR1cm4gPGgxPk9vb29vcHMsIHRoaXMgcGFnZSBkb2VzIG5vdCBleGlzdC4uLjwvaDE+XG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudDogTm90Rm91bmRQYWdlXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L3BhZ2VzL05vdEZvdW5kUGFnZS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZmV0Y2hBZG1pbnMgfSBmcm9tIFwiLi4vYWN0aW9ucy9pbmRleFwiO1xuaW1wb3J0ICByZXF1aXJlQXV0aCAgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9jcy9yZXF1aXJlQXV0aFwiO1xuXG5jbGFzcyBBZG1pbnNMaXN0UGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hBZG1pbnMoKTtcbiAgICB9XG5cbiAgICByZW5kZXJBZG1pbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmFkbWlucy5tYXAoYWRtaW4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2FkbWluLmlkfT57YWRtaW4ubmFtZX08L2xpPlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzPlByb3RlY3RlZCBsaXN0IG9mIGFkbWluczwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPnt0aGlzLnJlbmRlckFkbWlucygpfTwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxufVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBhZG1pbnMgfSkgPT4ge1xuICAgIHJldHVybiB7IGFkbWlucyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudDogY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZmV0Y2hBZG1pbnMgfSkoXG4gICAgICAgIHJlcXVpcmVBdXRoKEFkbWluc0xpc3RQYWdlKVxuICAgICksXG4gICAgbG9hZERhdGE6ICh7ZGlzcGF0Y2h9KSA9PiBkaXNwYXRjaChmZXRjaEFkbWlucygpKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9wYWdlcy9BZG1pbnNMaXN0UGFnZS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgQ2hpbGRDb21wb25lbnQgPT4ge1xuICAgIGNsYXNzIFJlcXVpcmVBdXRoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnByb3BzLmF1dGgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL1wiIC8+O1xuICAgICAgICAgICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENoaWxkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7IGF1dGggfSkge1xuICAgICAgICByZXR1cm4geyBhdXRoIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShSZXF1aXJlQXV0aCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL2hvY3MvcmVxdWlyZUF1dGguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJzsgICAgLy9yZWR1eCBtaWRkbGV3YXJlXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi4vY2xpZW50L3JlZHVjZXJzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEpID0+IHtcbiAgICBjb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgICAgICAgYmFzZVVSTDogJ2h0dHA6Ly9yZWFjdC1zc3ItYXBpLmhlcm9rdWFwcC5jb20nLFxuICAgICAgICBoZWFkZXJzOiB7Y29va2llOiByZXEuZ2V0KCdjb29raWUnKSB8fCAnJyB9XG4gICAgfSk7XG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycyxcbiAgICAgICAge30sXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuay53aXRoRXh0cmFBcmd1bWVudChheGlvc0luc3RhbmNlKSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHN0b3JlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL2NyZWF0ZVN0b3JlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gJy4vdXNlcnNSZWR1Y2VyJztcbmltcG9ydCBhdXRoUmVkdWNlciBmcm9tICcuL2F1dGhSZWR10YFlcic7XG5pbXBvcnQgYWRtaW5zUmVkdWNlciBmcm9tICcuL2FkbWluc1JlZHVjZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgdXNlcnM6IHVzZXJSZWR1Y2VyLFxuICAgIGF1dGg6IGF1dGhSZWR1Y2VyLFxuICAgIGFkbWluczogYWRtaW5zUmVkdWNlclxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0IHsgRkVUQ0hfVVNFUlMgfSBmcm9tICcuLi9hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBGRVRDSF9VU0VSUzpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5kYXRhO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGF1dGggfSkgPT4ge1xuICAgIHJldHVybiB7IGF1dGggfTsgICAgLy9zYW1lIGFzIGF1dGg6IGF1dGhcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9yZWR1Y2Vycy91c2Vyc1JlZHVjZXIuanMiLCJpbXBvcnQgeyBGRVRDSF9DVVJSRU5UX1VTRVIgfSBmcm9tIFwiLi4vYWN0aW9ucy9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBudWxsLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBGRVRDSF9DVVJSRU5UX1VTRVI6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQuZGF0YSB8fCBmYWxzZTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvcmVkdWNlcnMvYXV0aFJlZHXRgWVyLmpzIiwiaW1wb3J0IHsgRkVUQ0hfQURNSU5TIH0gZnJvbSBcIi4uL2FjdGlvbnMvaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcbiAgICAgIGNhc2UgRkVUQ0hfQURNSU5TOlxuICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5kYXRhO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L3JlZHVjZXJzL2FkbWluc1JlZHVjZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImF4aW9zXCJcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtaHR0cC1wcm94eVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3MtaHR0cC1wcm94eVwiXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9