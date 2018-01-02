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
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(FETCH_USERS, 'FETCH_USERS', '/Users/Shepshuk/WebstormProjects/maket/src/client/actions/index.js');

    __REACT_HOT_LOADER__.register(fetchUsers, 'fetchUsers', '/Users/Shepshuk/WebstormProjects/maket/src/client/actions/index.js');

    __REACT_HOT_LOADER__.register(FETCH_CURRENT_USER, 'FETCH_CURRENT_USER', '/Users/Shepshuk/WebstormProjects/maket/src/client/actions/index.js');

    __REACT_HOT_LOADER__.register(fetchCurrentUser, 'fetchCurrentUser', '/Users/Shepshuk/WebstormProjects/maket/src/client/actions/index.js');
}();

;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [_extends({}, _App2.default, {
    routes: [_extends({}, _HomePage2.default, {
        path: '/',
        exact: true
    }), _extends({}, _UsersListPage2.default, {
        path: '/users'

    })]
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

var _createStore = __webpack_require__(18);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(3);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _expressHttpProxy = __webpack_require__(24);

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
    });

    Promise.all(promises).then(function () {
        res.send((0, _renderer2.default)(req, store));
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

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(3);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _serializeJavascript = __webpack_require__(17);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(req, store) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.url, context: {} },
            _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
            )
        )
    ));

    return '\n    <html>\n        <head> </head>\n        <body>\n            <div id=\'root\'}>' + content + '</div>\n            <script>\n                window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n            </script>\n            <script src="bundle.js"></script>\n        </body>\n    </html>\n    ';
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
        null,
        _react2.default.createElement(
            'div',
            null,
            ' Hey this is how you use server side rendering!!!! '
        ),
        _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                    return console.log("click!");
                } },
            'Press me!'
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

var _reactRouterConfig = __webpack_require__(3);

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

var _reactRouterDom = __webpack_require__(4);

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
        'div',
        null,
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            'SSR Rendering'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/users' },
                'Users'
            ),
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/admins' },
                'Admins'
            ),
            authButton
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
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(6);

var _reduxThunk = __webpack_require__(19);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(20);

var _reducers2 = _interopRequireDefault(_reducers);

var _axios = __webpack_require__(23);

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
/* 19 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _usersReducer = __webpack_require__(21);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _authReduEr = __webpack_require__(22);

var _authReduEr2 = _interopRequireDefault(_authReduEr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  users: _usersReducer2.default,
  auth: _authReduEr2.default
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
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2M3MDA0MGI1NjdhYjM5NzRkMGUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvUm91dGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL0hvbWVQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcGFnZXMvVXNlcnNMaXN0UGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvY3JlYXRlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVkdWNlcnMvdXNlcnNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVkdWNlcnMvYXV0aFJlZHXRgWVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1odHRwLXByb3h5XCIiXSwibmFtZXMiOlsiRkVUQ0hfVVNFUlMiLCJmZXRjaFVzZXJzIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsImFwaSIsImdldCIsInJlcyIsInR5cGUiLCJwYXlsb2FkIiwiRkVUQ0hfQ1VSUkVOVF9VU0VSIiwiZmV0Y2hDdXJyZW50VXNlciIsInJvdXRlcyIsInBhdGgiLCJleGFjdCIsImFwcCIsInVzZSIsInByb3h5UmVxT3B0RGVjb3JhdG9yIiwib3B0cyIsImhlYWRlcnMiLCJzdGF0aWMiLCJyZXEiLCJzdG9yZSIsInByb21pc2VzIiwibWFwIiwicm91dGUiLCJsb2FkRGF0YSIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwic2VuZCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50IiwidXJsIiwiSG9tZSIsImNvbXBvbmVudCIsIlVzZXJzTGlzdCIsInByb3BzIiwidXNlcnMiLCJ1c2VyIiwiaWQiLCJuYW1lIiwicmVuZGVyVXNlcnMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIkFwcCIsIkhlYWRlciIsImF1dGgiLCJhdXRoQnV0dG9uIiwiYXhpb3NJbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJjb29raWUiLCJ3aXRoRXh0cmFBcmd1bWVudCIsImFjdGlvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Ozs7O0FDQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2VBRWUsNEJBQWdCO0FBQzVCa0IsK0JBRDRCO0FBRTNCUztBQUYyQixDQUFoQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pmOztlQUVlLG9CQUF3QjtBQUFBLFFBQXZCSCxLQUF1Qix1RUFBZixFQUFlO0FBQUEsUUFBWFUsTUFBVzs7QUFDbkMsWUFBUUEsT0FBT2hELElBQWY7QUFDSTtBQUNJLG1CQUFPZ0QsT0FBTy9DLE9BQVAsQ0FBZWdELElBQXRCO0FBQ0o7QUFDSSxtQkFBT1gsS0FBUDtBQUpSO0FBTUgsQzs7Ozs7QUFFRCxJQUFNRCxrQkFBa0IsU0FBbEJBLGVBQWtCLE9BQWM7QUFBQSxRQUFYSSxJQUFXLFFBQVhBLElBQVc7O0FBQ2xDLFdBQU8sRUFBRUEsVUFBRixFQUFQLENBRGtDLENBQ2Q7QUFDdkIsQ0FGRDs7Ozs7Ozs7a0NBQU1KLGU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hOOztlQUVlLG9CQUEwQjtBQUFBLFFBQXpCQyxLQUF5Qix1RUFBakIsSUFBaUI7QUFBQSxRQUFYVSxNQUFXOztBQUNyQyxZQUFPQSxPQUFPaEQsSUFBZDtBQUNJO0FBQ0ksbUJBQU9nRCxPQUFPL0MsT0FBUCxDQUFlZ0QsSUFBZixJQUF1QixLQUE5Qjs7QUFFSjtBQUNJLG1CQUFPWCxLQUFQO0FBTFI7QUFPSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkQsa0M7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3YzcwMDQwYjU2N2FiMzk3NGQwZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvL2ltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7ICAgICAgLy9mb3IgbWFraW5nIGFqYXggcmVxdWVzdFxuXG5leHBvcnQgY29uc3QgRkVUQ0hfVVNFUlMgPSAnZmV0Y2hfdXNlcnMnO1xuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnMgPSAoKSA9PiBhc3luYyhkaXNwYXRjaCwgZ2V0U3RhdGUsIGFwaSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0KCcvdXNlcnMnKTtcblxuICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGRVRDSF9VU0VSUyxcbiAgICAgIHBheWxvYWQ6IHJlc1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBGRVRDSF9DVVJSRU5UX1VTRVIgPSAnZmV0Y2hfY3VycmVudF91c2VyJztcbmV4cG9ydCBjb25zdCBmZXRjaEN1cnJlbnRVc2VyID0gKCkgPT4gYXN5bmMoZGlzcGF0Y2gsIGdldFN0YXRlLCBhcGkpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0KCcvY3VycmVudF91c2VyJyk7XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEZFVENIX0NVUlJFTlRfVVNFUixcbiAgICAgICAgcGF5bG9hZDogcmVzXG4gICAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9hY3Rpb25zL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1jb25maWdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItY29uZmlnXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4vcGFnZXMvSG9tZVBhZ2UnO1xuaW1wb3J0IFVzZXJzTGlzdFBhZ2UgZnJvbSAnLi9wYWdlcy9Vc2Vyc0xpc3RQYWdlJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gICAge1xuICAgIC4uLkFwcCxcbiAgICByb3V0ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgLi4uSG9tZVBhZ2UsXG4gICAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgICAgICBleGFjdDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAuLi5Vc2Vyc0xpc3RQYWdlLFxuICAgICAgICAgICAgcGF0aDogJy91c2VycycsXG5cbiAgICAgICAgfVxuICAgIF1cbn1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L1JvdXRlcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4vaGVscGVycy9yZW5kZXJlcic7XG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnLi9oZWxwZXJzL2NyZWF0ZVN0b3JlJztcbmltcG9ydCB7IG1hdGNoUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XG5pbXBvcnQgUm91dGVzIGZyb20gJy4vY2xpZW50L1JvdXRlcyc7XG5pbXBvcnQgcHJveHkgZnJvbSAnZXhwcmVzcy1odHRwLXByb3h5JztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKCcvYXBpJywgcHJveHkoJ2h0dHA6Ly9yZWFjdC1zc3ItYXBpLmhlcm9rdWFwcC5jb20nLCB7XG4gICAgcHJveHlSZXFPcHREZWNvcmF0b3Iob3B0cykge1xuICAgICAgICBvcHRzLmhlYWRlcnNbJ3gtZm9yd2FyZGVkLWhvc3QnXSA9ICdsb2NhbGhvc3Q6MzAwMCc7XG4gICAgICAgIHJldHVybiBvcHRzO1xuICAgIH1cbn0pKTtcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpO1xuYXBwLmdldCgnKicsIChyZXEsIHJlcykgPT4geyAgICAvL1RoaXMgaXMgYSByb290IHJvdXRlKHJvdXRlIGhhbmRsZXIpLCBzbyB3aGVuIGFueWJvZHkgZ29lcyB0aGVyZSBpdCdsbCBnaXZlIGEgcmVuZGVyZXJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlcSk7XG5cbiAgICBjb25zdCBwcm9taXNlcyA9IG1hdGNoUm91dGVzKFJvdXRlcywgcmVxLnBhdGgpLm1hcCgoe3JvdXRlfSkgPT4ge1xuICAgICAgIHJldHVybiByb3V0ZS5sb2FkRGF0YSA/IHJvdXRlLmxvYWREYXRhKHN0b3JlKSA6IG51bGw7XG4gICAgfSk7XG5cbiAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICAgIHJlcy5zZW5kKHJlbmRlcmVyKHJlcSwgc3RvcmUpKTtcbiAgICB9KTtcbn0pO1xuXG5hcHAubGlzdGVuKDMwMDAsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlRoaXMgdGhpbmcgd29ya3NcIik7XG4gICAgY29uc29sZS5sb2coXCJMaXN0ZW5pbmcgdG8gcG9ydCAzMDAwXCIpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgcmVuZGVyUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XG5pbXBvcnQgUm91dGVzIGZyb20gJy4uL2NsaWVudC9Sb3V0ZXMnO1xuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICdzZXJpYWxpemUtamF2YXNjcmlwdCc7XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHN0b3JlKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IHJlbmRlclRvU3RyaW5nKFxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9IGNvbnRleHQ9e3t9fT5cbiAgICAgICAgICAgICAgICA8ZGl2PntyZW5kZXJSb3V0ZXMoUm91dGVzKX08L2Rpdj5cbiAgICAgICAgICAgIDwvU3RhdGljUm91dGVyPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICk7XG5cbiAgICByZXR1cm4gYFxuICAgIDxodG1sPlxuICAgICAgICA8aGVhZD4gPC9oZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgIDxkaXYgaWQ9J3Jvb3QnfT4ke2NvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgICAgICAgIHdpbmRvdy5JTklUSUFMX1NUQVRFID0gJHtzZXJpYWxpemUoc3RvcmUuZ2V0U3RhdGUoKSl9XG4gICAgICAgICAgICA8L3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiYnVuZGxlLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICAgYDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9yZW5kZXJlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCJcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+IEhleSB0aGlzIGlzIGhvdyB5b3UgdXNlIHNlcnZlciBzaWRlIHJlbmRlcmluZyEhISEgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKFwiY2xpY2shXCIpfT5QcmVzcyBtZSFcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudDogIEhvbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L3BhZ2VzL0hvbWVQYWdlLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBmZXRjaFVzZXJzIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbmNsYXNzIFVzZXJzTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7ICAgICAgLy8g0LPQsNGA0LDQvdGC0LjRgNGD0LXRgiDQvdCw0LvQuNGH0LjQtSDQtNCw0L3QvdGL0YUg0L/RgNC4INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC4IGFzeW5jINC40LvQuCBhamF4KNGC0L7Rh9C90L4g0L3QtSDQt9C90LDRjilcbiAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hVc2VycygpO1xuICAgIH1cblxuICAgIHJlbmRlclVzZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy51c2Vycy5tYXAodXNlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPGxpIGtleT17dXNlci5pZH0+e3VzZXIubmFtZX08L2xpPlxuICAgICAgICB9KVxuICAgIH1cblxucmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFRoaXMgdXNlciBsaXN0IGlzIHB1bGxlZCB1cCBmcm9tIEFQSXNlcnZlciBieSBhY3Rpb24gZGlzcGF0Y2hcbiAgICAgICAgICAgIDx1bD57dGhpcy5yZW5kZXJVc2VycygpfTwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59fVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4geyB1c2Vyczogc3RhdGUudXNlcnMgfTtcbn07XG5cbmZ1bmN0aW9uIGxvYWREYXRhKHN0b3JlKSB7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGZldGNoVXNlcnMoKSk7XG4gICAgLy9jb25zb2xlLmxvZygnSVxcJ20gdHJ5aW5nIHRvIGxvYWQgc29tZSBkYXRhJyk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGxvYWREYXRhLFxuICAgIGNvbXBvbmVudDogY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZmV0Y2hVc2VycyB9KShVc2Vyc0xpc3QpXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9wYWdlcy9Vc2Vyc0xpc3RQYWdlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1jb25maWcnO1xuaW1wb3J0IHsgZmV0Y2hDdXJyZW50VXNlciB9IGZyb20gXCIuL2FjdGlvbnMvaW5kZXhcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XG5cblxuY29uc3QgQXBwID0gKHsgcm91dGUgfSkgPT4ge1xuXG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAge3JlbmRlclJvdXRlcyhyb3V0ZS5yb3V0ZXMpfVxuICAgICAgICA8L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50OiBBcHAsXG4gICAgbG9hZERhdGE6ICh7ZGlzcGF0Y2h9KSA9PiBkaXNwYXRjaChmZXRjaEN1cnJlbnRVc2VyKCkpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L0FwcC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBhdXRoIH0pID0+IHtcbiAgICBjb25zb2xlLmxvZygnTXkgYXV0aCBzdGF0dXMgaXMgJywgYXV0aCk7XG5cbiAgICBjb25zdCBhdXRoQnV0dG9uID0gYXV0aCA/IChcbiAgICAgICAgPGEgaHJlZj0nL2FwaS9sb2dvdXQnPkxvZ291dDwvYT5cbiAgICApIDogKFxuICAgICAgICA8YSBocmVmPScvYXBpL2F1dGgvZ29vZ2xlJz5Mb2dpbjwvYT5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlNTUiBSZW5kZXJpbmc8L0xpbms+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3VzZXJzXCI+VXNlcnM8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvYWRtaW5zXCI+QWRtaW5zPC9MaW5rPlxuICAgICAgICAgICAgICAgIHthdXRoQnV0dG9ufVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgYXV0aCB9KSA9PiB7XG4gICAgcmV0dXJuIHsgYXV0aCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhlYWRlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSGVhZGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VyaWFsaXplLWphdmFzY3JpcHRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7ICAgIC8vcmVkdXggbWlkZGxld2FyZVxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4uL2NsaWVudC9yZWR1Y2Vycyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxKSA9PiB7XG4gICAgY29uc3QgYXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICAgIGJhc2VVUkw6ICdodHRwOi8vcmVhY3Qtc3NyLWFwaS5oZXJva3VhcHAuY29tJyxcbiAgICAgICAgaGVhZGVyczoge2Nvb2tpZTogcmVxLmdldCgnY29va2llJykgfHwgJycgfVxuICAgIH0pO1xuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsXG4gICAgICAgIHt9LFxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmsud2l0aEV4dHJhQXJndW1lbnQoYXhpb3NJbnN0YW5jZSkpXG4gICAgKTtcblxuICAgIHJldHVybiBzdG9yZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9jcmVhdGVTdG9yZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXgtdGh1bmtcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tICcuL3VzZXJzUmVkdWNlcic7XG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi9hdXRoUmVkddGBZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgdXNlcnM6IHVzZXJSZWR1Y2VyLFxuICAgIGF1dGg6IGF1dGhSZWR1Y2VyXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgeyBGRVRDSF9VU0VSUyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEZFVENIX1VTRVJTOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLmRhdGE7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgYXV0aCB9KSA9PiB7XG4gICAgcmV0dXJuIHsgYXV0aCB9OyAgICAvL3NhbWUgYXMgYXV0aDogYXV0aFxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L3JlZHVjZXJzL3VzZXJzUmVkdWNlci5qcyIsImltcG9ydCB7IEZFVENIX0NVUlJFTlRfVVNFUiB9IGZyb20gXCIuLi9hY3Rpb25zL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IG51bGwsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEZFVENIX0NVUlJFTlRfVVNFUjpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5kYXRhIHx8IGZhbHNlO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9yZWR1Y2Vycy9hdXRoUmVkddGBZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImF4aW9zXCJcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtaHR0cC1wcm94eVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3MtaHR0cC1wcm94eVwiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9