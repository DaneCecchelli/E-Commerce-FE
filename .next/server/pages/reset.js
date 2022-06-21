(function() {
var exports = {};
exports.id = "pages/reset";
exports.ids = ["pages/reset"];
exports.modules = {

/***/ "./components/Reset.js":
/*!*****************************!*\
  !*** ./components/Reset.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Reset; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");

var _jsxFileName = "C:\\Users\\DaneC\\Desktop\\Classes\\WesBos\\Advanced-React\\sick-fits\\frontend\\components\\Reset.js";

/* eslint-disable react/prop-types */

/* eslint-disable react/jsx-no-bind */





const RESET_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_1___default())`
  mutation RESET_MUTATION(
    $email: String!
    $token: String!
    $password: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
  }
`;
function Reset({
  token
}) {
  var _data$redeemUserPassw;

  const {
    inputs,
    handleChange,
    resetForm
  } = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_4__.default)({
    email: '',
    password: '',
    token
  });
  const [reset, {
    data,
    loading,
    error
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(RESET_MUTATION, {
    variables: inputs
  });
  const successfulError = data !== null && data !== void 0 && (_data$redeemUserPassw = data.redeemUserPasswordResetToken) !== null && _data$redeemUserPassw !== void 0 && _data$redeemUserPassw.code ? data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken : undefined;

  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting

    console.log(inputs);
    const res = await reset().catch(console.error);
    console.log(res);
    resetForm(); // Send the email and password to the graphqlAPI
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_3__.default, {
    method: "POST",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "Reset You Password"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__.default, {
      error: error || successfulError
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken) === null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Success! Check your email for a link."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "email",
        children: ["Email", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "password",
        children: ["Password", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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

/***/ }),

/***/ "./pages/reset.js":
/*!************************!*\
  !*** ./pages/reset.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ResetPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_RequestReset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/RequestReset */ "./components/RequestReset.js");
/* harmony import */ var _components_Reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Reset */ "./components/Reset.js");

var _jsxFileName = "C:\\Users\\DaneC\\Desktop\\Classes\\WesBos\\Advanced-React\\sick-fits\\frontend\\pages\\reset.js";

/* eslint-disable react/prop-types */


function ResetPage({
  query
}) {
  if (!(query !== null && query !== void 0 && query.token)) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Sorry, you must supply a token"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestReset__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Reset your password ", query === null || query === void 0 ? void 0 : query.token]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Reset__WEBPACK_IMPORTED_MODULE_2__.default, {
      token: query === null || query === void 0 ? void 0 : query.token
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_ErrorMessage_js","components_RequestReset_js"], function() { return __webpack_exec__("./pages/reset.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Jlc2V0LmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL3BhZ2VzL3Jlc2V0LmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIlJFU0VUX01VVEFUSU9OIiwiZ3FsIiwiUmVzZXQiLCJ0b2tlbiIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsInJlc2V0Rm9ybSIsInVzZUZvcm0iLCJlbWFpbCIsInBhc3N3b3JkIiwicmVzZXQiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJzdWNjZXNzZnVsRXJyb3IiLCJyZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuIiwiY29kZSIsInVuZGVmaW5lZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJjYXRjaCIsIlJlc2V0UGFnZSIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGNBQWMsR0FBR0Ms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RCxhQUFDQSxLQUFELGVBQUNBLEtBQUssQ0FBRXpCLEtBQVIsQ0FBSixFQUFtQjtBQUNqQix3QkFDRTtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFNRDs7QUFDRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUEseUNBQXdCeUIsS0FBeEIsYUFBd0JBLEtBQXhCLHVCQUF3QkEsS0FBSyxDQUFFekIsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxzREFBRDtBQUFPLFdBQUssRUFBRXlCLEtBQUYsYUFBRUEsS0FBRix1QkFBRUEsS0FBSyxDQUFFekI7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQsQzs7Ozs7Ozs7Ozs7QUNuQkQsNEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvcmVzZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1uby1iaW5kICovXHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4uL2xpYi91c2VGb3JtJztcclxuaW1wb3J0IEVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuXHJcbmNvbnN0IFJFU0VUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFJFU0VUX01VVEFUSU9OKFxyXG4gICAgJGVtYWlsOiBTdHJpbmchXHJcbiAgICAkdG9rZW46IFN0cmluZyFcclxuICAgICRwYXNzd29yZDogU3RyaW5nIVxyXG4gICkge1xyXG4gICAgcmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbihcclxuICAgICAgZW1haWw6ICRlbWFpbFxyXG4gICAgICB0b2tlbjogJHRva2VuXHJcbiAgICAgIHBhc3N3b3JkOiAkcGFzc3dvcmRcclxuICAgICkge1xyXG4gICAgICBjb2RlXHJcbiAgICAgIG1lc3NhZ2VcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNldCh7IHRva2VuIH0pIHtcclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgdG9rZW4sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtyZXNldCwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKFJFU0VUX01VVEFUSU9OLCB7XHJcbiAgICB2YXJpYWJsZXM6IGlucHV0cyxcclxuICB9KTtcclxuICBjb25zdCBzdWNjZXNzZnVsRXJyb3IgPSBkYXRhPy5yZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuPy5jb2RlXHJcbiAgICA/IGRhdGE/LnJlZGVlbVVzZXJQYXNzd29yZFJlc2V0VG9rZW5cclxuICAgIDogdW5kZWZpbmVkO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBzdG9wIHRoZSBmb3JtIGZyb20gc3VibWl0dGluZ1xyXG4gICAgY29uc29sZS5sb2coaW5wdXRzKTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlc2V0KCkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgcmVzZXRGb3JtKCk7XHJcbiAgICAvLyBTZW5kIHRoZSBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gdGhlIGdyYXBocWxBUElcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxoMj5SZXNldCBZb3UgUGFzc3dvcmQ8L2gyPlxyXG4gICAgICA8RXJyb3IgZXJyb3I9e2Vycm9yIHx8IHN1Y2Nlc3NmdWxFcnJvcn0gLz5cclxuICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgIHtkYXRhPy5yZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuID09PSBudWxsICYmIChcclxuICAgICAgICAgIDxwPlN1Y2Nlc3MhIENoZWNrIHlvdXIgZW1haWwgZm9yIGEgbGluay48L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XHJcbiAgICAgICAgICBFbWFpbFxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIEluITwvYnV0dG9uPlxyXG4gICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgUmVxdWVzdFJlc2V0IGZyb20gJy4uL2NvbXBvbmVudHMvUmVxdWVzdFJlc2V0JztcclxuaW1wb3J0IFJlc2V0IGZyb20gJy4uL2NvbXBvbmVudHMvUmVzZXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzZXRQYWdlKHsgcXVlcnkgfSkge1xyXG4gIGlmICghcXVlcnk/LnRva2VuKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwPlNvcnJ5LCB5b3UgbXVzdCBzdXBwbHkgYSB0b2tlbjwvcD5cclxuICAgICAgICA8UmVxdWVzdFJlc2V0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwPlJlc2V0IHlvdXIgcGFzc3dvcmQge3F1ZXJ5Py50b2tlbn08L3A+XHJcbiAgICAgIDxSZXNldCB0b2tlbj17cXVlcnk/LnRva2VufSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9