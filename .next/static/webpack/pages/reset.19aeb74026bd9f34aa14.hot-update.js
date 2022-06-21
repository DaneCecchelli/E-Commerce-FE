self["webpackHotUpdate_N_E"]("pages/reset",{

/***/ "./components/Reset.js":
/*!*****************************!*\
  !*** ./components/Reset.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Reset; }
/* harmony export */ });
/* harmony import */ var C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\DaneC\\Desktop\\Classes\\WesBos\\Advanced-React\\sick-fits\\frontend\\components\\Reset.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n  mutation RESET_MUTATION(\n    $email: String!\n    $token: String!\n    $password: String!\n  ) {\n    redeemUserPasswordResetToken(\n      email: $email\n      token: $token\n      password: $password\n    ) {\n      code\n      message\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* eslint-disable react/prop-types */

/* eslint-disable react/jsx-no-bind */





var RESET_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject());
function Reset(_ref) {
  _s();

  var _data$redeemUserPassw;

  var token = _ref.token;

  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_6__.default)({
    email: '',
    password: '',
    token: token
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      resetForm = _useForm.resetForm;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(RESET_MUTATION, {
    variables: inputs
  }),
      _useMutation2 = (0,C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),
      reset = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      data = _useMutation2$.data,
      loading = _useMutation2$.loading;

  var error = data !== null && data !== void 0 && (_data$redeemUserPassw = data.redeemUserPasswordResetToken) !== null && _data$redeemUserPassw !== void 0 && _data$redeemUserPassw.code ? data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken : undefined;

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = (0,C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
      var res;
      return C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault(); // stop the form from submitting

              console.log(inputs);
              _context.next = 4;
              return reset()["catch"](console.error);

            case 4:
              res = _context.sent;
              console.log(res);
              resetForm(); // Send the email and password to the graphqlAPI

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_5__.default, {
    method: "POST",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
      children: "Reset You Password"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__.default, {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken) === null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: "Success! Check your email for a link."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        htmlFor: "email",
        children: ["Email", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          type: "email",
          name: "email",
          placeholder: "Your Email Address",
          autoComplete: "email",
          value: inputs.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        htmlFor: "password",
        children: ["Password", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          type: "password",
          name: "password",
          placeholder: "Password",
          autoComplete: "password",
          value: inputs.password,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        type: "submit",
        children: "Sign In!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

_s(Reset, "alDvxMuZNB4mp77alRXABwWf3Ek=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_6__.default, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation];
});

_c = Reset;

var _c;

$RefreshReg$(_c, "Reset");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXNldC5qcyJdLCJuYW1lcyI6WyJSRVNFVF9NVVRBVElPTiIsImdxbCIsIlJlc2V0IiwidG9rZW4iLCJ1c2VGb3JtIiwiZW1haWwiLCJwYXNzd29yZCIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsInJlc2V0Rm9ybSIsInVzZU11dGF0aW9uIiwidmFyaWFibGVzIiwicmVzZXQiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwicmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbiIsImNvZGUiLCJ1bmRlZmluZWQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLG9EQUFILG1CQUFwQjtBQWlCZSxTQUFTQyxLQUFULE9BQTBCO0FBQUE7O0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGlCQUNLQyxxREFBTyxDQUFDO0FBQ2xEQyxTQUFLLEVBQUUsRUFEMkM7QUFFbERDLFlBQVEsRUFBRSxFQUZ3QztBQUdsREgsU0FBSyxFQUFMQTtBQUhrRCxHQUFELENBRFo7QUFBQSxNQUMvQkksTUFEK0IsWUFDL0JBLE1BRCtCO0FBQUEsTUFDdkJDLFlBRHVCLFlBQ3ZCQSxZQUR1QjtBQUFBLE1BQ1RDLFNBRFMsWUFDVEEsU0FEUzs7QUFBQSxxQkFPSkMsMkRBQVcsQ0FBQ1YsY0FBRCxFQUFpQjtBQUM3RFcsYUFBUyxFQUFFSjtBQURrRCxHQUFqQixDQVBQO0FBQUE7QUFBQSxNQU9oQ0ssS0FQZ0M7QUFBQTtBQUFBLE1BT3ZCQyxJQVB1QixrQkFPdkJBLElBUHVCO0FBQUEsTUFPakJDLE9BUGlCLGtCQU9qQkEsT0FQaUI7O0FBVXZDLE1BQU1DLEtBQUssR0FBR0YsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSiw2QkFBQUEsSUFBSSxDQUFFRyw0QkFBTix3RUFBb0NDLElBQXBDLEdBQ1ZKLElBRFUsYUFDVkEsSUFEVSx1QkFDVkEsSUFBSSxDQUFFRyw0QkFESSxHQUVWRSxTQUZKOztBQVZ1QyxXQWN4QkMsWUFkd0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsd1lBY3ZDLGlCQUE0QkMsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VBLGVBQUMsQ0FBQ0MsY0FBRixHQURGLENBQ3NCOztBQUNwQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZaEIsTUFBWjtBQUZGO0FBQUEscUJBR29CSyxLQUFLLFdBQUwsQ0FBY1UsT0FBTyxDQUFDUCxLQUF0QixDQUhwQjs7QUFBQTtBQUdRUyxpQkFIUjtBQUlFRixxQkFBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVo7QUFDQWYsdUJBQVMsR0FMWCxDQU1FOztBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZHVDO0FBQUE7QUFBQTs7QUF1QnZDLHNCQUNFLDhEQUFDLGlEQUFEO0FBQU0sVUFBTSxFQUFDLE1BQWI7QUFBb0IsWUFBUSxFQUFFVSxZQUE5QjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxrREFBRDtBQUFPLFdBQUssRUFBRUo7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLGlCQUNHLENBQUFGLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFRyw0QkFBTixNQUF1QyxJQUF2QyxpQkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBSUU7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBLHlDQUVFO0FBQ0UsY0FBSSxFQUFDLE9BRFA7QUFFRSxjQUFJLEVBQUMsT0FGUDtBQUdFLHFCQUFXLEVBQUMsb0JBSGQ7QUFJRSxzQkFBWSxFQUFDLE9BSmY7QUFLRSxlQUFLLEVBQUVULE1BQU0sQ0FBQ0YsS0FMaEI7QUFNRSxrQkFBUSxFQUFFRztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFlRTtBQUFPLGVBQU8sRUFBQyxVQUFmO0FBQUEsNENBRUU7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLGNBQUksRUFBQyxVQUZQO0FBR0UscUJBQVcsRUFBQyxVQUhkO0FBSUUsc0JBQVksRUFBQyxVQUpmO0FBS0UsZUFBSyxFQUFFRCxNQUFNLENBQUNELFFBTGhCO0FBTUUsa0JBQVEsRUFBRUU7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGLGVBMEJFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQ0Q7O0dBekR1Qk4sSztVQUNzQkUsaUQsRUFNVE0sdUQ7OztLQVBiUixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc2V0LjE5YWViNzQwMjZiZDlmMzRhYTE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1uby1iaW5kICovXHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4uL2xpYi91c2VGb3JtJztcclxuaW1wb3J0IEVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuXHJcbmNvbnN0IFJFU0VUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFJFU0VUX01VVEFUSU9OKFxyXG4gICAgJGVtYWlsOiBTdHJpbmchXHJcbiAgICAkdG9rZW46IFN0cmluZyFcclxuICAgICRwYXNzd29yZDogU3RyaW5nIVxyXG4gICkge1xyXG4gICAgcmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbihcclxuICAgICAgZW1haWw6ICRlbWFpbFxyXG4gICAgICB0b2tlbjogJHRva2VuXHJcbiAgICAgIHBhc3N3b3JkOiAkcGFzc3dvcmRcclxuICAgICkge1xyXG4gICAgICBjb2RlXHJcbiAgICAgIG1lc3NhZ2VcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNldCh7IHRva2VuIH0pIHtcclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgdG9rZW4sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtyZXNldCwgeyBkYXRhLCBsb2FkaW5nIH1dID0gdXNlTXV0YXRpb24oUkVTRVRfTVVUQVRJT04sIHtcclxuICAgIHZhcmlhYmxlczogaW5wdXRzLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGVycm9yID0gZGF0YT8ucmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbj8uY29kZVxyXG4gICAgPyBkYXRhPy5yZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuXHJcbiAgICA6IHVuZGVmaW5lZDtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gc3RvcCB0aGUgZm9ybSBmcm9tIHN1Ym1pdHRpbmdcclxuICAgIGNvbnNvbGUubG9nKGlucHV0cyk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCByZXNldCgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgLy8gU2VuZCB0aGUgZW1haWwgYW5kIHBhc3N3b3JkIHRvIHRoZSBncmFwaHFsQVBJXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gbWV0aG9kPVwiUE9TVFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8aDI+UmVzZXQgWW91IFBhc3N3b3JkPC9oMj5cclxuICAgICAgPEVycm9yIGVycm9yPXtlcnJvcn0gLz5cclxuICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgIHtkYXRhPy5yZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuID09PSBudWxsICYmIChcclxuICAgICAgICAgIDxwPlN1Y2Nlc3MhIENoZWNrIHlvdXIgZW1haWwgZm9yIGEgbGluay48L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XHJcbiAgICAgICAgICBFbWFpbFxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIEluITwvYnV0dG9uPlxyXG4gICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==