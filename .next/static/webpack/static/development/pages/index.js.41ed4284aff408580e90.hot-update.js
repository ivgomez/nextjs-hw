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
      key: user.id,
      onClick: function onClick(e) {
        return next_router__WEBPACK_IMPORTED_MODULE_1__["Router"].push("/users/[id]", "/users/".concat(user.id));
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
        lineNumber: 12,
        columnNumber: 11
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, user.first_name, " ", user.last_name), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
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
        lineNumber: 18,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXJzLmpzIl0sIm5hbWVzIjpbIlVzZXJzIiwicHJvcHMiLCJ1c2VycyIsIm1hcCIsInVzZXIiLCJpZCIsImUiLCJSb3V0ZXIiLCJwdXNoIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwiYXZhdGFyIiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUN2QixTQUNFO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxJQUFEO0FBQUEsV0FDZjtBQUNFLGVBQVMsRUFBQywwRkFEWjtBQUVFLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQUZaO0FBR0UsYUFBTyxFQUFFLGlCQUFDQyxDQUFEO0FBQUEsZUFBT0Msa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLGFBQVosbUJBQXFDSixJQUFJLENBQUNDLEVBQTFDLEVBQVA7QUFBQSxPQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxJQUFJLENBQUNLLFVBRFIsT0FDcUJMLElBQUksQ0FBQ00sU0FEMUIsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVdOLElBQUksQ0FBQ08sS0FBaEIsQ0FKRixDQUxGLEVBV0U7QUFDRSxTQUFHLEVBQUVQLElBQUksQ0FBQ1EsTUFEWjtBQUVFLFNBQUcsRUFBRVIsSUFBSSxDQUFDSyxVQUFMLEdBQWtCTCxJQUFJLENBQUNNLFNBRjlCO0FBR0UsV0FBSyxFQUFFO0FBQUVHLG9CQUFZLEVBQUU7QUFBaEIsT0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWEYsQ0FEZTtBQUFBLEdBQWhCLENBREgsQ0FERjtBQXVCRCxDQXhCRDs7S0FBTWIsSztBQXlCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjQxZWQ0Mjg0YWZmNDA4NTgwZTkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFVzZXJzID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgIHtwcm9wcy51c2Vycy5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICA8bGlcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAga2V5PXt1c2VyLmlkfVxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IFJvdXRlci5wdXNoKFwiL3VzZXJzL1tpZF1cIiwgYC91c2Vycy8ke3VzZXIuaWR9YCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgIHt1c2VyLmZpcnN0X25hbWV9IHt1c2VyLmxhc3RfbmFtZX1cclxuICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgPHA+RW1haWw6IHt1c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e3VzZXIuYXZhdGFyfVxyXG4gICAgICAgICAgICBhbHQ9e3VzZXIuZmlyc3RfbmFtZSArIHVzZXIubGFzdF9uYW1lfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNTAlXCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9