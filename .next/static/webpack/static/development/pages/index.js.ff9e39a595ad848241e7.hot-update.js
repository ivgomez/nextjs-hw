webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/users.js":
/*!*****************************!*\
  !*** ./components/users.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\admin\\Desktop\\Acamica\\nextjs-hw\\components\\users.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Users = function Users(props) {
  return __jsx("ul", {
    className: "list-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, props.users.map(function (user) {
    return __jsx("li", {
      className: "list-group-item list-group-item-action d-flex justify-content-between align-items-center",
      style: {
        cursor: "pointer"
      },
      key: user.id,
      onClick: function onClick(e) {
        return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/users/[id]", "/users/".concat(user.id));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, user.first_name, " ", user.last_name), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, "Email: ", user.email)), __jsx("img", {
      src: user.avatar,
      alt: user.first_name + user.last_name,
      style: {
        borderRadius: "50%"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }));
  }));
};

_c = Users;
/* harmony default export */ __webpack_exports__["default"] = (Users);

var _c;

$RefreshReg$(_c, "Users");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXJzLmpzIl0sIm5hbWVzIjpbIlVzZXJzIiwicHJvcHMiLCJ1c2VycyIsIm1hcCIsInVzZXIiLCJjdXJzb3IiLCJpZCIsImUiLCJSb3V0ZXIiLCJwdXNoIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwiYXZhdGFyIiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUN2QixTQUNFO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxJQUFEO0FBQUEsV0FDZjtBQUNFLGVBQVMsRUFBQywwRkFEWjtBQUVFLFdBQUssRUFBRTtBQUFFQyxjQUFNLEVBQUU7QUFBVixPQUZUO0FBR0UsU0FBRyxFQUFFRCxJQUFJLENBQUNFLEVBSFo7QUFJRSxhQUFPLEVBQUUsaUJBQUNDLENBQUQ7QUFBQSxlQUFPQyxrREFBTSxDQUFDQyxJQUFQLENBQVksYUFBWixtQkFBcUNMLElBQUksQ0FBQ0UsRUFBMUMsRUFBUDtBQUFBLE9BSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dGLElBQUksQ0FBQ00sVUFEUixPQUNxQk4sSUFBSSxDQUFDTyxTQUQxQixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBV1AsSUFBSSxDQUFDUSxLQUFoQixDQUpGLENBTkYsRUFZRTtBQUNFLFNBQUcsRUFBRVIsSUFBSSxDQUFDUyxNQURaO0FBRUUsU0FBRyxFQUFFVCxJQUFJLENBQUNNLFVBQUwsR0FBa0JOLElBQUksQ0FBQ08sU0FGOUI7QUFHRSxXQUFLLEVBQUU7QUFBRUcsb0JBQVksRUFBRTtBQUFoQixPQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFaRixDQURlO0FBQUEsR0FBaEIsQ0FESCxDQURGO0FBd0JELENBekJEOztLQUFNZCxLO0FBMEJTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZmY5ZTM5YTU5NWFkODQ4MjQxZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBVc2VycyA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICB7cHJvcHMudXNlcnMubWFwKCh1c2VyKSA9PiAoXHJcbiAgICAgICAgPGxpXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgIGtleT17dXNlci5pZH1cclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBSb3V0ZXIucHVzaChcIi91c2Vycy9baWRdXCIsIGAvdXNlcnMvJHt1c2VyLmlkfWApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICB7dXNlci5maXJzdF9uYW1lfSB7dXNlci5sYXN0X25hbWV9XHJcbiAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgIDxwPkVtYWlsOiB7dXNlci5lbWFpbH08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXt1c2VyLmF2YXRhcn1cclxuICAgICAgICAgICAgYWx0PXt1c2VyLmZpcnN0X25hbWUgKyB1c2VyLmxhc3RfbmFtZX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjUwJVwiIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBVc2VycztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==