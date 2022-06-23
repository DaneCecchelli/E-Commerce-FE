self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/RemoveFromCart.js":
/*!**************************************!*\
  !*** ./components/RemoveFromCart.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RemoveFromCart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\DaneC\\Desktop\\Classes\\WesBos\\Advanced-React\\sick-fits\\frontend\\components\\RemoveFromCart.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n  mutation REMOVE_FROM_CART_MUTATON($id: ID!) {\n    deleteCartItem(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var BigButton = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.button.withConfig({
  displayName: "RemoveFromCart__BigButton",
  componentId: "sc-emvtd6-0"
})(["font-size:3rem;background:none;border:0;&:hover{color:var(--red);cursor:pointer;}"]);
_c = BigButton;
var REMOVE_FROM_CART_MUTATON = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_4__.default)(_templateObject());
function RemoveFromCart(_ref) {
  _s();

  var id = _ref.id;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(REMOVE_FROM_CART_MUTATON, {
    variables: {
      id: id
    }
  }),
      _useMutation2 = (0,C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useMutation, 2),
      removeFromCart = _useMutation2[0],
      loading = _useMutation2[1].loading;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BigButton, {
    onClick: removeFromCart,
    type: "button",
    title: "Remove This Item From Cart",
    children: "\xD7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_s(RemoveFromCart, "1gobEhNNb1zJTO706ogXU/cmTeU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation];
});

_c2 = RemoveFromCart;

var _c, _c2;

$RefreshReg$(_c, "BigButton");
$RefreshReg$(_c2, "RemoveFromCart");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZW1vdmVGcm9tQ2FydC5qcyJdLCJuYW1lcyI6WyJCaWdCdXR0b24iLCJzdHlsZWQiLCJSRU1PVkVfRlJPTV9DQVJUX01VVEFUT04iLCJncWwiLCJSZW1vdmVGcm9tQ2FydCIsImlkIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJyZW1vdmVGcm9tQ2FydCIsImxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx3RUFBSDtBQUFBO0FBQUE7QUFBQSx5RkFBZjtLQUFNRCxTO0FBVU4sSUFBTUUsd0JBQXdCLEdBQUdDLG9EQUFILG1CQUE5QjtBQVFlLFNBQVNDLGNBQVQsT0FBZ0M7QUFBQTs7QUFBQSxNQUFOQyxFQUFNLFFBQU5BLEVBQU07O0FBQUEscUJBQ1BDLDJEQUFXLENBQUNKLHdCQUFELEVBQTJCO0FBQzFFSyxhQUFTLEVBQUU7QUFBRUYsUUFBRSxFQUFGQTtBQUFGO0FBRCtELEdBQTNCLENBREo7QUFBQTtBQUFBLE1BQ3RDRyxjQURzQztBQUFBLE1BQ3BCQyxPQURvQixvQkFDcEJBLE9BRG9COztBQUk3QyxzQkFDRSw4REFBQyxTQUFEO0FBQ0UsV0FBTyxFQUFFRCxjQURYO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxTQUFLLEVBQUMsNEJBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztHQWJ1QkosYztVQUNnQkUsdUQ7OztNQURoQkYsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjM5MWRiZjYwNDMxNDlhYjQyNjQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQmlnQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDA7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBSRU1PVkVfRlJPTV9DQVJUX01VVEFUT04gPSBncWxgXHJcbiAgbXV0YXRpb24gUkVNT1ZFX0ZST01fQ0FSVF9NVVRBVE9OKCRpZDogSUQhKSB7XHJcbiAgICBkZWxldGVDYXJ0SXRlbShpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVtb3ZlRnJvbUNhcnQoeyBpZCB9KSB7XHJcbiAgY29uc3QgW3JlbW92ZUZyb21DYXJ0LCB7IGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihSRU1PVkVfRlJPTV9DQVJUX01VVEFUT04sIHtcclxuICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8QmlnQnV0dG9uXHJcbiAgICAgIG9uQ2xpY2s9e3JlbW92ZUZyb21DYXJ0fVxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgdGl0bGU9XCJSZW1vdmUgVGhpcyBJdGVtIEZyb20gQ2FydFwiXHJcbiAgICA+XHJcbiAgICAgICZ0aW1lcztcclxuICAgIDwvQmlnQnV0dG9uPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==