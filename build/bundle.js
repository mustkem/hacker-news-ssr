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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCurrentUser = exports.FETCH_CURRENT_USER = exports.queryOnServerSide = exports.hideUser = exports.upvotePost = exports.fetchUsers = exports.QUERY_ON_SERVER_SIDE = exports.HIDE_USER = exports.UPVOTE_POST = exports.FETCH_USERS = undefined;

var _queryString = __webpack_require__(5);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = "FETCH_USERS";
var UPVOTE_POST = exports.UPVOTE_POST = "UPVOTE_POST";
var HIDE_USER = exports.HIDE_USER = "HIDE_USER";
var QUERY_ON_SERVER_SIDE = exports.QUERY_ON_SERVER_SIDE = "QUERY_ON_SERVER_SIDE";

var fetchUsers = exports.fetchUsers = function fetchUsers(query) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!query.page) {
                query.page = 1;
              }
              _context.next = 3;
              return api.get("/search?" + (0, _queryString.stringify)(query));

            case 3:
              res = _context.sent;

              dispatch({
                type: FETCH_USERS,
                payload: res.data
              });

            case 5:
            case "end":
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
var upvotePost = exports.upvotePost = function upvotePost(id) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // call api here and dispatch below action in succes of api call.
              dispatch({
                type: UPVOTE_POST,
                payload: id
              });

            case 1:
            case "end":
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

var hideUser = exports.hideUser = function hideUser(id) {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              //call api to hide user from users view // make api call here //
              //const res = await api.delete("/userid");

              dispatch({
                type: HIDE_USER,
                payload: id
              });

            case 1:
            case "end":
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

var queryOnServerSide = exports.queryOnServerSide = function queryOnServerSide(query) {
  return function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              //dispatch query for serverside //
              dispatch({
                type: QUERY_ON_SERVER_SIDE,
                payload: query
              });

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x10, _x11) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = "fetch_current_user";
var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return api.get("/current_user");

            case 2:
              res = _context5.sent;


              dispatch({
                type: FETCH_CURRENT_USER,
                payload: res
              });

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function (_x12, _x13, _x14) {
      return _ref5.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(14);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(18);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _NotFoundPage = __webpack_require__(25);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: "/",
    exact: true
  }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

var _express = __webpack_require__(12);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(3);

var _expressHttpProxy = __webpack_require__(13);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(7);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(26);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(29);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use("/api", (0, _expressHttpProxy2.default)("https://hn.algolia.com", {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers["x-forwarded-host"] = "localhost:3000";
    return opts;
  }
}));
app.use(_express2.default.static("public"));
app.get("*", function (req, res) {
  var store = (0, _createStore2.default)(req);

  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store, req) : null;
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

var host = "0.0.0.0";
var port = process.env.PORT || 3000;
app.listen(port, host, function () {
  console.log("Server started.......");
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(3);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _actions = __webpack_require__(2);

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

exports.default = {
  component: App,
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _actions.fetchCurrentUser)());
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactHelmet = __webpack_require__(4);

var _reset = __webpack_require__(16);

var _reset2 = _interopRequireDefault(_reset);

var _global = __webpack_require__(17);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    "header",
    { className: "header" },
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        "style",
        null,
        _reset2.default
      ),
      _react2.default.createElement(
        "style",
        null,
        _global2.default
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "container" },
      _react2.default.createElement(
        "span",
        { className: "common" },
        "@common"
      )
    )
  );
};

exports.default = Header;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0-modified | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n\r\n/* make sure to set some focus styles for accessibility */\r\n:focus {\r\n  outline: 0;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\n\r\nbody {\r\n  line-height: 1;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\n\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n  content: \"\";\r\n  content: none;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration,\r\ninput[type=\"search\"]::-webkit-search-results-button,\r\ninput[type=\"search\"]::-webkit-search-results-decoration {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n}\r\n\r\ninput[type=\"search\"] {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  -webkit-box-sizing: content-box;\r\n  -moz-box-sizing: content-box;\r\n  box-sizing: content-box;\r\n}\r\n\r\ntextarea {\r\n  overflow: auto;\r\n  vertical-align: top;\r\n  resize: vertical;\r\n}\r\n\r\n/**\r\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nvideo {\r\n  display: inline-block;\r\n  *display: inline;\r\n  *zoom: 1;\r\n  max-width: 100%;\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\r\n * Known issue: no IE 6 support.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *    `em` units.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n  font-size: 100%; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n  -ms-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\r\n\r\na:focus {\r\n  outline: thin dotted;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n  outline: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\r\n * 2. Improve image quality when scaled in IE 7.\r\n */\r\n\r\nimg {\r\n  border: 0; /* 1 */\r\n  -ms-interpolation-mode: bicubic; /* 2 */\r\n}\r\n\r\n/**\r\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\r\n */\r\n\r\nfigure {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Correct margin displayed oddly in IE 6/7.\r\n */\r\n\r\nform {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n  border: 1px solid #c0c0c0;\r\n  margin: 0 2px;\r\n  padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct color not being inherited in IE 6/7/8/9.\r\n * 2. Correct text not wrapping in Firefox 3.\r\n * 3. Correct alignment displayed oddly in IE 6/7.\r\n */\r\n\r\nlegend {\r\n  border: 0; /* 1 */\r\n  padding: 0;\r\n  white-space: normal; /* 2 */\r\n  *margin-left: -7px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Correct font size not being inherited in all browsers.\r\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\r\n *    and Chrome.\r\n * 3. Improve appearance and consistency in all browsers.\r\n */\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n  font-size: 100%; /* 1 */\r\n  margin: 0; /* 2 */\r\n  vertical-align: baseline; /* 3 */\r\n  *vertical-align: middle; /* 3 */\r\n}\r\n\r\n/**\r\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\nbutton,\r\ninput {\r\n  line-height: normal;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\r\n\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\r\n *    Known issue: inner spacing remains in IE 6.\r\n */\r\n\r\nbutton,\r\nhtml input[type=\"button\"], /* 1 */\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n  -webkit-appearance: button; /* 2 */\r\n  cursor: pointer; /* 3 */\r\n  *overflow: visible; /* 4 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n  cursor: default;\r\n}\r\n\r\n/**\r\n * 1. Address box sizing set to content-box in IE 8/9.\r\n * 2. Remove excess padding in IE 8/9.\r\n * 3. Remove excess padding in IE 7.\r\n *    Known issue: excess padding remains in IE 6.\r\n */\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n  *height: 13px; /* 3 */\r\n  *width: 13px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  -moz-box-sizing: content-box;\r\n  -webkit-box-sizing: content-box; /* 2 */\r\n  box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 3+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n  border: 0;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto; /* 1 */\r\n  vertical-align: top; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n  color: #222;\r\n}\r\n\r\n::-moz-selection {\r\n  background: #b3d4fc;\r\n  text-shadow: none;\r\n}\r\n\r\n::selection {\r\n  background: #b3d4fc;\r\n  text-shadow: none;\r\n}\r\n\r\nimg {\r\n  vertical-align: middle;\r\n}\r\n\r\nfieldset {\r\n  border: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\ntextarea {\r\n  resize: vertical;\r\n}\r\n\r\n.chromeframe {\r\n  margin: 0.2em 0;\r\n  background: #ccc;\r\n  color: #000;\r\n  padding: 0.2em 0;\r\n}\r\n");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: 10pt;\r\n  color: #828282;\r\n}\r\n\r\n.container {\r\n  max-width: 1200px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  background-color: #f6f6ef;\r\n  padding: 0;\r\n}\r\n\r\n.main .container {\r\n  background-color: #f6f6ef;\r\n}\r\n\r\n.common {\r\n  padding: 3px;\r\n  display: inline-block;\r\n}\r\n\r\na {\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  text-decoration: none;\r\n}\r\n");

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

var _reactRedux = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(1);

var _queryString = __webpack_require__(5);

var _Home = __webpack_require__(19);

var _Home2 = _interopRequireDefault(_Home);

var _actions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var query = (0, _queryString.parse)(this.props.location.search);
      this.props.queryOnServerSide({ serverQuery: query });
      this.props.fetchUsers((0, _queryString.parse)(this.props.location.search));
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "main home-page" },
        _react2.default.createElement(_Home2.default, null)
      );
    }
  }]);

  return HomePage;
}(_react.Component);

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store, req) {
  store.dispatch((0, _actions.queryOnServerSide)({ serverQuery: req.query }));
  return store.dispatch((0, _actions.fetchUsers)(req.query));
}

exports.default = {
  loadData: loadData,
  component: (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers, queryOnServerSide: _actions.queryOnServerSide })(HomePage))
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _reactHelmet = __webpack_require__(4);

var _home = __webpack_require__(20);

var _home2 = _interopRequireDefault(_home);

var _Table = __webpack_require__(21);

var _Table2 = _interopRequireDefault(_Table);

var _UserItem = __webpack_require__(22);

var _UserItem2 = _interopRequireDefault(_UserItem);

var _index = __webpack_require__(2);

var _Pagination = __webpack_require__(24);

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = exports.Home = function Home(props) {
  function renderUsers() {
    return props.hits && props.hits.map(function (user) {
      return _react2.default.createElement(_UserItem2.default, {
        key: user.objectID,
        user: user,
        upvotePost: props.upvotePost,
        hideUser: props.hideUser
      });
    });
  }

  function head() {
    return _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        "title",
        null,
        "Users Loaded"
      ),
      _react2.default.createElement("meta", { property: "og:title", content: "Hacker App" }),
      _react2.default.createElement(
        "style",
        null,
        _home2.default
      )
    );
  }

  return _react2.default.createElement(
    "div",
    { className: "container" },
    head(),
    _react2.default.createElement(
      _Table2.default,
      { striped: true, hover: true },
      _react2.default.createElement(
        "thead",
        null,
        _react2.default.createElement(
          "tr",
          null,
          _react2.default.createElement(
            "th",
            null,
            "comment"
          ),
          _react2.default.createElement(
            "th",
            null,
            "vote count"
          ),
          _react2.default.createElement(
            "th",
            null,
            "upvote"
          ),
          _react2.default.createElement(
            "th",
            null,
            "news details"
          )
        )
      ),
      _react2.default.createElement(
        "tbody",
        null,
        renderUsers()
      )
    ),
    _react2.default.createElement(_Pagination2.default, {
      fetchUsers: props.fetchUsers,
      serverQuery: props.serverQuery
    })
  );
};

var mapStateToProps = function mapStateToProps(state) {
  var data = state.users.toJS();
  var globalData = state.global.toJS();
  return {
    hits: data.hits,
    serverQuery: globalData.serverQuery
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    upvotePost: function upvotePost(id) {
      return dispatch((0, _index.upvotePost)(id));
    },
    hideUser: function hideUser(id) {
      return dispatch((0, _index.hideUser)(id));
    },
    fetchUsers: function fetchUsers(query) {
      return dispatch((0, _index.fetchUsers)(query));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (".user-list li {\r\n  position: relative;\r\n  padding-left: 36px;\r\n  padding-top: 2px;\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.detail-bar {\r\n  display: flex;\r\n  padding: 5px 0;\r\n  font-size: 8pt;\r\n  color: #868686;\r\n  align-items: baseline;\r\n}\r\n\r\n.upvote {\r\n  color: #868686;\r\n  cursor: pointer;\r\n  padding: 2px;\r\n  font-size: 13pt;\r\n}\r\n\r\n.upvote:active {\r\n  color: green;\r\n}\r\n\r\n.table-bordered td,\r\n.table-bordered th {\r\n  border: 0px solid #dee2e6;\r\n}\r\n\r\n.table thead th {\r\n  border: 0px solid #dee2e6;\r\n  background-color: orangered;\r\n  color: #fff;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.table td,\r\n.table th {\r\n  border: 0px solid #dee2e6;\r\n  text-align: center;\r\n}\r\n\r\n.table td,\r\n.table th {\r\n  padding: 0.5rem;\r\n}\r\n\r\n.table thead th {\r\n  width: 100px;\r\n}\r\n\r\n.table thead th:last-child {\r\n  width: calc(100% - 300px);\r\n  text-align: left;\r\n}\r\n.title {\r\n  padding-right: 8px;\r\n}\r\n\r\n.hide {\r\n  color: #000;\r\n  cursor: pointer;\r\n}\r\n\r\n.details {\r\n  display: flex;\r\n}\r\n\r\n.detail-bar .url {\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  max-width: 200px;\r\n}\r\n\r\nbutton,\r\nbutton:focus {\r\n  border: 0;\r\n  outline: 0;\r\n  padding: 0;\r\n  background: transparent;\r\n  font-size: 8pt;\r\n}\r\n\r\n.pagination-wrap {\r\n  display: flex;\r\n}\r\n\r\n.pagination {\r\n  margin-left: auto;\r\n  padding: 10px;\r\n}\r\n\r\n.pagination button {\r\n  font-size: 10pt;\r\n  padding: 0 4px;\r\n  color: orange;\r\n}\r\n\r\n.pagination .previous {\r\n  border-right: 1px solid orange;\r\n}\r\n");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Table");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserItem = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bs = __webpack_require__(23);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserItem = exports.UserItem = function UserItem(_ref) {
  var user = _ref.user,
      upvotePost = _ref.upvotePost,
      hideUser = _ref.hideUser;

  return _react2.default.createElement(
    "tr",
    null,
    _react2.default.createElement(
      "td",
      null,
      user.num_comments || 0
    ),
    _react2.default.createElement(
      "td",
      null,
      user.points
    ),
    _react2.default.createElement(
      "td",
      null,
      _react2.default.createElement(_bs.BsFillCaretUpFill, {
        onClick: function onClick() {
          return upvotePost(user.objectID);
        },
        className: "icon upvote"
      })
    ),
    _react2.default.createElement(
      "td",
      null,
      _react2.default.createElement(
        "div",
        { className: "details" },
        _react2.default.createElement(
          "a",
          { target: "_blank", className: "title", href: user.url },
          user.title || "Na"
        ),
        _react2.default.createElement(
          "span",
          { className: "detail-bar" },
          user.url && _react2.default.createElement(
            _react2.default.Fragment,
            null,
            "(",
            _react2.default.createElement(
              "span",
              { className: "url" },
              user.url
            ),
            ")"
          ),
          "\xA0by\xA0",
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "" },
            " ",
            user.author,
            " "
          ),
          "\xA0",
          _react2.default.createElement(
            "span",
            null,
            user.created_at_i,
            " hours agoo"
          ),
          "\xA0",
          _react2.default.createElement(
            "button",
            { onClick: function onClick() {
                return hideUser(user.objectID);
              }, className: "hide" },
            "[ hide ]"
          )
        )
      )
    )
  );
};

exports.default = UserItem;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _queryString = __webpack_require__(5);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = exports.Pagination = function Pagination(props) {
  var location = (0, _reactRouterDom.useLocation)();
  var history = (0, _reactRouterDom.useHistory)();

  var _useState = (0, _react.useState)(function () {
    return props.serverQuery.page && parseInt(props.serverQuery.page);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  function handlePagination(dir) {
    window.scrollTo(0, 0);
    var query = (0, _queryString.parse)(location.search);
    if (!query.page) {
      query.page = 2; // if page is not present in query it means we were showing first page //
    } else {
      query.page = parseInt(query.page) + 1 * dir;
    }
    var url = "/?" + (0, _queryString.stringify)(query);
    history.push(url);
    props.fetchUsers(query);
    setPage(parseInt(query.page));
  }

  return _react2.default.createElement(
    "div",
    { className: "pagination-wrap" },
    _react2.default.createElement(
      "div",
      { className: "pagination" },
      _react2.default.createElement(
        "button",
        {
          disabled: !page || page === 1 ? "disabled" : "",
          onClick: function onClick() {
            return handlePagination(-1);
          },
          className: "previous"
        },
        "Previous"
      ),
      _react2.default.createElement(
        "button",
        { onClick: function onClick() {
            return handlePagination(1);
          } },
        "Next"
      )
    )
  );
};

exports.default = Pagination;

/***/ }),
/* 25 */
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
    'Ooops, route not found.'
  );
};

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(27);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(6);

var _reactRouterConfig = __webpack_require__(3);

var _serializeJavascript = __webpack_require__(28);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(4);

var _Routes = __webpack_require__(7);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        "div",
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();

  return "\n    <html>\n      <head>\n      <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap\" rel=\"stylesheet\">\n      <link\n          rel=\"stylesheet\"\n          href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\n          integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\"\n          crossorigin=\"anonymous\"\n        />\n        " + helmet.title.toString() + "\n        " + helmet.meta.toString() + "\n        " + helmet.style.toString() + "\n      </head>\n      <body>\n        <div id=\"root\">" + content + "</div>\n        <script>\n          window.INITIAL_STATE = " + (0, _serializeJavascript2.default)(store.getState()) + "\n        </script>\n        <script src=\"bundle.js\"></script>\n      </body>\n    </html>\n  ";
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _reduxThunk = __webpack_require__(30);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(31);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(32);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: "https://hn.algolia.com/api/v1",
    headers: { cookie: req.get("cookie") || "" }
  });

  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

  return store;
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _usersReducer = __webpack_require__(33);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _globalReducer = __webpack_require__(34);

var _globalReducer2 = _interopRequireDefault(_globalReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _usersReducer2.default,
  global: _globalReducer2.default
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(2);

var _immutable = __webpack_require__(9);

function upvotePost(state, action) {
  var newState = state.toJS();
  newState.hits.forEach(function (item) {
    if (action.payload === item.objectID) item.points = ++item.points;
  });
  return (0, _immutable.fromJS)(newState);
}

function getUsers(state, action) {
  return (0, _immutable.fromJS)(action.payload);
}

function hideUser(state, action) {
  var newState = state.toJS();
  newState.hits = newState.hits.filter(function (item) {
    return action.payload !== item.objectID;
  });
  return (0, _immutable.fromJS)(newState);
}

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)({});
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_USERS:
      return getUsers(state, action);
    case _actions.UPVOTE_POST:
      return upvotePost(state, action);
    case _actions.HIDE_USER:
      return hideUser(state, action);
    default:
      return (0, _immutable.fromJS)(state);
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(2);

var _immutable = __webpack_require__(9);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)({});
  var action = arguments[1];

  switch (action.type) {
    case _actions.QUERY_ON_SERVER_SIDE:
      return (0, _immutable.fromJS)(action.payload);
    default:
      return (0, _immutable.fromJS)(state);
  }
};

/***/ })
/******/ ]);