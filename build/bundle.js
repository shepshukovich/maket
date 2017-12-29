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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUsers = exports.FETCH_USERS = undefined;

var _axios = __webpack_require__(14);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//for making ajax request

var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios2.default.get('http://react-ssr-api.herokuapp.com/users');

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

    return function (_x) {
      return _ref.apply(this, arguments);
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
}();

;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var _express = __webpack_require__(8);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(9);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(15);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
    //This is a root route(route handler), so when anybody goes there it'll give a renderer
    var store = (0, _createStore2.default)();

    res.send((0, _renderer2.default)(req, store));
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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(10);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _Routes = __webpack_require__(11);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(req, store) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.url, context: {} },
            _react2.default.createElement(_Routes2.default, null)
        )
    ));

    return '\n    <html>\n        <head> </head>\n        <body>\n            <div id=\'root\'}>' + content + '</div>\n            <script src="bundle.js"></script>\n        </body>\n    </html>\n    ';
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
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Home = __webpack_require__(12);

var _Home2 = _interopRequireDefault(_Home);

var _UsersList = __webpack_require__(13);

var _UsersList2 = _interopRequireDefault(_UsersList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/users', component: _UsersList2.default })
    );
};

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
/* 12 */
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
            'Press me! '
        )
    );
};

var _default = Home;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/Shepshuk/WebstormProjects/maket/src/client/components/Home.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Shepshuk/WebstormProjects/maket/src/client/components/Home.js');
}();

;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(3);

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

var _default = (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UsersList);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(UsersList, 'UsersList', '/Users/Shepshuk/WebstormProjects/maket/src/client/components/UsersList.js');

    __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/Shepshuk/WebstormProjects/maket/src/client/components/UsersList.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Shepshuk/WebstormProjects/maket/src/client/components/UsersList.js');
}();

;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(4);

var _reduxThunk = __webpack_require__(16);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(17);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {

    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

    return store;
}; //redux middleware


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
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _redux = __webpack_require__(4);

var _usersReducer = __webpack_require__(18);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
   users: _usersReducer2.default
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(3);

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
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Shepshuk/WebstormProjects/maket/src/client/reducers/usersReducer.js');
}();

;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2JhOWM1YTRmNzU3OGMxNDNlOWQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9Vc2Vyc0xpc3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9jcmVhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yZWR1Y2Vycy91c2Vyc1JlZHVjZXIuanMiXSwibmFtZXMiOlsiRkVUQ0hfVVNFUlMiLCJmZXRjaFVzZXJzIiwiZGlzcGF0Y2giLCJnZXQiLCJyZXMiLCJ0eXBlIiwicGF5bG9hZCIsImFwcCIsInVzZSIsInN0YXRpYyIsInJlcSIsInN0b3JlIiwic2VuZCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50IiwidXJsIiwiSG9tZSIsIlVzZXJzTGlzdCIsInByb3BzIiwidXNlcnMiLCJtYXAiLCJ1c2VyIiwiaWQiLCJuYW1lIiwicmVuZGVyVXNlcnMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImFjdGlvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSxrQzs7Ozs7O0FDQUEsNkM7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7OztBQUFnQzs7QUFFekIsSUFBTUEsb0NBQWMsYUFBcEI7QUFDQSxJQUFNQyxrQ0FBYSxTQUFiQSxVQUFhO0FBQUE7QUFBQSx1RUFBTSxpQkFBTUMsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNaLGdCQUFNQyxHQUFOLENBQVUsMENBQVYsQ0FEWTs7QUFBQTtBQUN4QkMsaUJBRHdCOzs7QUFHOUJGLHVCQUFTO0FBQ0xHLHNCQUFNTCxXQUREO0FBRUxNLHlCQUFTRjtBQUZKLGVBQVQ7O0FBSDhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU47O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFuQjs7Ozs7Ozs7Z0NBRE1KLFc7O2dDQUNBQyxVOzs7Ozs7Ozs7QUNIYixr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QyxFQVJtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEcEMsd0M7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFDQTs7Ozs7O2VBRWUsNEJBQWdCO0FBQzVCVTtBQUQ0QixDQUFoQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hmOztlQUVlLG9CQUF3QjtBQUFBLFFBQXZCTyxLQUF1Qix1RUFBZixFQUFlO0FBQUEsUUFBWEMsTUFBVzs7QUFDbkMsWUFBUUEsT0FBT3hCLElBQWY7QUFDSTtBQUNJLG1CQUFPd0IsT0FBT3ZCLE9BQVAsQ0FBZXdCLElBQXRCO0FBQ0o7QUFDSSxtQkFBT0YsS0FBUDtBQUpSO0FBTUgsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgN2JhOWM1YTRmNzU3OGMxNDNlOWQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJzsgICAgICAvL2ZvciBtYWtpbmcgYWpheCByZXF1ZXN0XG5cbmV4cG9ydCBjb25zdCBGRVRDSF9VU0VSUyA9ICdmZXRjaF91c2Vycyc7XG5leHBvcnQgY29uc3QgZmV0Y2hVc2VycyA9ICgpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vcmVhY3Qtc3NyLWFwaS5oZXJva3VhcHAuY29tL3VzZXJzJyk7XG5cbiAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRkVUQ0hfVVNFUlMsXG4gICAgICBwYXlsb2FkOiByZXNcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9hY3Rpb25zL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAnLi9oZWxwZXJzL3JlbmRlcmVyJztcbmltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuL2hlbHBlcnMvY3JlYXRlU3RvcmUnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKTtcbmFwcC5nZXQoJyonLCAocmVxLCByZXMpID0+IHsgICAgLy9UaGlzIGlzIGEgcm9vdCByb3V0ZShyb3V0ZSBoYW5kbGVyKSwgc28gd2hlbiBhbnlib2R5IGdvZXMgdGhlcmUgaXQnbGwgZ2l2ZSBhIHJlbmRlcmVyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZSgpO1xuXG4gICAgcmVzLnNlbmQocmVuZGVyZXIocmVxLCBzdG9yZSkpO1xufSk7XG5cbmFwcC5saXN0ZW4oMzAwMCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiVGhpcyB0aGluZyB3b3Jrc1wiKTtcbiAgICBjb25zb2xlLmxvZyhcIkxpc3RlbmluZyB0byBwb3J0IDMwMDBcIik7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi4vY2xpZW50L1JvdXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHN0b3JlKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IHJlbmRlclRvU3RyaW5nKFxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9IGNvbnRleHQ9e3t9fT5cbiAgICAgICAgICAgICAgICA8Um91dGVzIC8+XG4gICAgICAgICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICApO1xuXG4gICAgcmV0dXJuIGBcbiAgICA8aHRtbD5cbiAgICAgICAgPGhlYWQ+IDwvaGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICA8ZGl2IGlkPSdyb290J30+JHtjb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJidW5kbGUuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgICBgO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL3JlbmRlcmVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgVXNlcnNMaXN0IGZyb20gJy4vY29tcG9uZW50cy9Vc2Vyc0xpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi91c2Vyc1wiIGNvbXBvbmVudD17VXNlcnNMaXN0fSAvPlxuICAgICAgPC9kaXY+XG4gICk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9Sb3V0ZXMuanMiLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PiBIZXkgdGhpcyBpcyBob3cgeW91IHVzZSBzZXJ2ZXIgc2lkZSByZW5kZXJpbmchISEhIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhcImNsaWNrIVwiKX0+UHJlc3MgbWUhIDwvYnV0dG9uPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL0hvbWUuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGZldGNoVXNlcnMgfSBmcm9tICcuLi9hY3Rpb25zJztcblxuY2xhc3MgVXNlcnNMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHsgICAgICAvLyDQs9Cw0YDQsNC90YLQuNGA0YPQtdGCINC90LDQu9C40YfQuNC1INC00LDQvdC90YvRhSDQv9GA0Lgg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LggYXN5bmMg0LjQu9C4IGFqYXgo0YLQvtGH0L3QviDQvdC1INC30L3QsNGOKVxuICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFVzZXJzKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyVXNlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnVzZXJzLm1hcCh1c2VyID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXt1c2VyLmlkfT57dXNlci5uYW1lfTwvbGk+XG4gICAgICAgIH0pXG4gICAgfVxuXG5yZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgVGhpcyB1c2VyIGxpc3QgaXMgcHVsbGVkIHVwIGZyb20gQVBJc2VydmVyIGJ5IGFjdGlvbiBkaXNwYXRjaFxuICAgICAgICAgICAgPHVsPnt0aGlzLnJlbmRlclVzZXJzKCl9PC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn19XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7IHVzZXJzOiBzdGF0ZS51c2VycyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZmV0Y2hVc2VycyB9KShVc2Vyc0xpc3QpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL1VzZXJzTGlzdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXhpb3NcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnOyAgICAvL3JlZHV4IG1pZGRsZXdhcmVcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuLi9jbGllbnQvcmVkdWNlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCB7fSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSk7XG5cbiAgICByZXR1cm4gc3RvcmU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvY3JlYXRlU3RvcmUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LXRodW5rXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSAnLi91c2Vyc1JlZHVjZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgdXNlcnM6IHVzZXJSZWR1Y2VyXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgeyBGRVRDSF9VU0VSUyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEZFVENIX1VTRVJTOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLmRhdGE7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvcmVkdWNlcnMvdXNlcnNSZWR1Y2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==