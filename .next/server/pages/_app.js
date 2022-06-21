(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");

var _jsxFileName = "C:\\Users\\DaneC\\Desktop\\Classes\\WesBos\\Advanced-React\\sick-fits\\frontend\\components\\Header.js";



const Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default().h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-2cpreo-0"
})(["font-size:4rem;margin-left:2rem;position:relative;z-index:2;transform:skew(-7deg);background:red;a{color:white;text-decoration:none;text-transform:uppercase;padding:0.5rem 1rem;}"]);
const HeaderStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default().header.withConfig({
  displayName: "Header__HeaderStyles",
  componentId: "sc-2cpreo-1"
})([".bar{border-bottom:10px solid var(--black,black);display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;}.subBar{display:grid;grid-template-columns:auto 1fr;border-bottom:1px solid var(--black,black);}"]);
function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bar",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: "Sick Fits"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "subBar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Nav; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignOut */ "./components/SignOut.js");
/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/NavStyles */ "./components/styles/NavStyles.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./components/User.js");


var _jsxFileName = "C:\\Users\\DaneC\\Desktop\\Classes\\WesBos\\Advanced-React\\sick-fits\\frontend\\components\\Nav.js";




function Nav() {
  const user = (0,_User__WEBPACK_IMPORTED_MODULE_4__.useUser)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/products",
      children: "Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/sell",
        children: "Sell"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/orders",
        children: "Orders"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/account",
        children: "Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignOut__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, this)]
    }, void 0, true), !user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/signin",
        children: " SignIn "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");

var _jsxFileName = "C:\\Users\\DaneC\\Desktop\\Classes\\WesBos\\Advanced-React\\sick-fits\\frontend\\components\\Page.js";

/* eslint-disable react/prop-types */



const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle)(["@font-face{font-family:'radnika_next';src:url('/static/radnikanext-medium-webfont.woff2') format('woff2');font-weight:normal;font-style:normal;}html{--red:#ff1234;--black:#393939;--grey:#3A3A3A;--gray:var(--grey);--lightGrey:#e1e1e1;--lightGray:var(--lightGrey);--offWhite:#ededed;--maxWidth:1000px;--bs:0 12px 24px 0 rgba(0,0,0,0.09);box-sizing:border-box;font-size:10px;}*,*:before,*:after{box-sizing:inherit;}body{font-family:'radnika_next',--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;padding:0;margin:0;font-size:1.5rem;line-height:2;}a{text-decoration:none;color:var(--black)}a:hover{text-decoration:underline;}button{font-family:'radnika_next',--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;}"]);
const InnerStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Page__InnerStyles",
  componentId: "sc-4u7a64-0"
})(["max-width:var(--maxWidth);margin:0 auto;padding:2rem;"]);
function Page({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InnerStyles, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, this);
}
Page.prototypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};

/***/ }),

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PAGINATION_QUERY": function() { return /* binding */ PAGINATION_QUERY; },
/* harmony export */   "default": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/PaginationStyles */ "./components/styles/PaginationStyles.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./config.js");

var _jsxFileName = "C:\\Users\\DaneC\\Desktop\\Classes\\WesBos\\Advanced-React\\sick-fits\\frontend\\components\\Pagination.js";

/* eslint-disable react/prop-types */







const PAGINATION_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  query {
    _allProductsMeta {
      count
    }
  }
`;
function Pagination({
  page
}) {
  const {
    error,
    loading,
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(PAGINATION_QUERY);
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Loading ..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 23
  }, this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__.default, {
    error: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 21
  }, this);
  const {
    count
  } = data._allProductsMeta;
  const pageCount = Math.ceil(count / _config__WEBPACK_IMPORTED_MODULE_7__.perPage);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_6__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: [" Sick Fits - Page ", page, " of ___"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: `/products/${page - 1}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        "aria-disabled": page <= 1,
        children: "\u2190 Prev"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Page ", page, " of ", pageCount]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [" ", count, " Items Total "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: `/products/${page + 1}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        "aria-disabled": page >= pageCount,
        children: "Next \u2192"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/SignOut.js":
/*!*******************************!*\
  !*** ./components/SignOut.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignOut; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");

var _jsxFileName = "C:\\Users\\DaneC\\Desktop\\Classes\\WesBos\\Advanced-React\\sick-fits\\frontend\\components\\SignOut.js";



const SIGN_OUT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation {
    endSession
  }
`;
function SignOut() {
  const [signout] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(SIGN_OUT_MUTATION, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_3__.CURRENT_USER_QUERY
    }]
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    onClick: signout,
    children: "Sign Out"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useUser": function() { return /* binding */ useUser; },
/* harmony export */   "CURRENT_USER_QUERY": function() { return /* binding */ CURRENT_USER_QUERY; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const CURRENT_USER_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
      }
    }
  }
`;
function useUser() {
  const {
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(CURRENT_USER_QUERY);
  return data === null || data === void 0 ? void 0 : data.authenticatedItem;
}


/***/ }),

/***/ "./components/styles/NavStyles.js":
/*!****************************************!*\
  !*** ./components/styles/NavStyles.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "NavStyles",
  componentId: "sc-11c0d2g-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;a,button{padding:1rem 3rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:900;font-size:1em;background:none;border:0;cursor:pointer;@media (max-width:700px){font-size:10px;padding:0 10px;}&:before{content:'';width:2px;background:var(--lightGray);height:100%;left:0;position:absolute;transform:skew(-20deg);top:0;bottom:0;}&:after{height:2px;background:red;content:'';width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;text-decoration:none;&:after{width:calc(100% - 60px);}@media (max-width:700px){width:calc(100% - 10px);}}}@media (max-width:1300px){border-top:1px solid var(--lightGray);width:100%;justify-content:center;font-size:1.5rem;}"]);
/* harmony default export */ __webpack_exports__["default"] = (NavStyles);

/***/ }),

/***/ "./components/styles/PaginationStyles.js":
/*!***********************************************!*\
  !*** ./components/styles/PaginationStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PaginationStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "PaginationStyles",
  componentId: "sc-aduuar-0"
})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem 0;border:1px solid var(--lightGray);border-radius:10px;& > *{margin:0;padding:15px 30px;border-right:1px solid var(--lightGray);&:last-child{border-right:0;}}a[aria-disabled='true']{color:grey;pointer-events:none;}"]);
/* harmony default export */ __webpack_exports__["default"] = (PaginationStyles);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "endpoint": function() { return /* binding */ endpoint; },
/* harmony export */   "prodEndpoint": function() { return /* binding */ prodEndpoint; },
/* harmony export */   "perPage": function() { return /* binding */ perPage; }
/* harmony export */ });
// This is client side config only - don't put anything in here that shouldn't be public!
const endpoint = `http://localhost:3000/api/graphql`;
const prodEndpoint = `fill me in when we deploy`;
const perPage = 4;

/***/ }),

/***/ "./lib/paginationField.js":
/*!********************************!*\
  !*** ./lib/paginationField.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ paginationField; }
/* harmony export */ });
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.js");
/* eslint-disable no-plusplus */

function paginationField() {
  return {
    keyArgs: false,

    read(existing = [], {
      args,
      cache
    }) {
      const {
        skip,
        first
      } = args;
      const data = cache.readQuery({
        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__.PAGINATION_QUERY
      });
      const count = data === null || data === void 0 ? void 0 : data._allProductsMeta.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);
      const items = existing.slice(skip, skip + first).filter(x => x);

      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      if (items.length !== first) {
        return false;
      }

      if (items.length) {
        console.log(`There are ${items.length} items in the cache! Gonna send them to apollo`);
        return items;
      }

      return false;
    },

    merge(existing, incoming, {
      args
    }) {
      const {
        skip,
        first
      } = args;
      console.log(`Merging items from the network ${incoming.length}`);
      const merged = existing ? existing.slice(0) : [];

      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }

      return merged;
    }

  };
}

/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/link-error */ "@apollo/link-error");
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/react/ssr */ "@apollo/client/react/ssr");
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _paginationField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginationField */ "./lib/paginationField.js");








function createClient({
  headers,
  initialState
}) {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    link: _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloLink.from([(0,_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__.onError)(({
      graphQLErrors,
      networkError
    }) => {
      if (graphQLErrors) graphQLErrors.forEach(({
        message,
        locations,
        path
      }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
      if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`);
    }), // this uses apollo-link-http under the hood, so all the options here come from that package
    (0,apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__.createUploadLink)({
      uri:  true ? _config__WEBPACK_IMPORTED_MODULE_5__.endpoint : 0,
      fetchOptions: {
        credentials: 'include'
      },
      // pass the headers along from this request. This enables SSR with logged in state
      headers
    })]),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // TODO: We will add this together!
            allProducts: (0,_paginationField__WEBPACK_IMPORTED_MODULE_6__.default)()
          }
        }
      }
    }).restore(initialState || {})
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default()(createClient, {
  getDataFromTree: _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__.getDataFromTree
}));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/styles/nprogress.css */ "./components/styles/nprogress.css");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");

var _jsxFileName = "C:\\Users\\DaneC\\Desktop\\Classes\\WesBos\\Advanced-React\\sick-fits\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/prop-types */

/* eslint-disable react/jsx-props-no-spreading */






next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_2___default().start());
next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_2___default().done());
next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeErrort', () => nprogress__WEBPACK_IMPORTED_MODULE_2___default().done());

function MyApp({
  Component,
  pageProps,
  apollo
}) {
  console.log(apollo);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {
    client: apollo,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Page__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

MyApp.getInitialProps = async function ({
  Component,
  ctx
}) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;
  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_lib_withData__WEBPACK_IMPORTED_MODULE_6__.default)(MyApp));

/***/ }),

/***/ "./components/styles/nprogress.css":
/*!*****************************************!*\
  !*** ./components/styles/nprogress.css ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@apollo/client/react/ssr":
/*!*******************************************!*\
  !*** external "@apollo/client/react/ssr" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client/react/ssr");;

/***/ }),

/***/ "@apollo/link-error":
/*!*************************************!*\
  !*** external "@apollo/link-error" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/link-error");;

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("apollo-upload-client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-with-apollo");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

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

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_ErrorMessage_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL05hdi5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvU2lnbk91dC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvTmF2U3R5bGVzLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL1BhZ2luYXRpb25TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29uZmlnLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2xpYi9wYWdpbmF0aW9uRmllbGQuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vbGliL3dpdGhEYXRhLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC9yZWFjdC9zc3JcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJAYXBvbGxvL2xpbmstZXJyb3JcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJhcG9sbG8tdXBsb2FkLWNsaWVudFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC13aXRoLWFwb2xsb1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9pZ25vcmVkfEM6XFxVc2Vyc1xcRGFuZUNcXERlc2t0b3BcXENsYXNzZXNcXFdlc0Jvc1xcQWR2YW5jZWQtUmVhY3RcXHNpY2stZml0c1xcZnJvbnRlbmRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJMb2dvIiwic3R5bGVkIiwiSGVhZGVyU3R5bGVzIiwiSGVhZGVyIiwiTmF2IiwidXNlciIsInVzZVVzZXIiLCJHbG9iYWxTdHlsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIklubmVyU3R5bGVzIiwiUGFnZSIsImNoaWxkcmVuIiwicHJvdG90eXBlcyIsIlByb3BUeXBlcyIsImFueSIsIlBBR0lOQVRJT05fUVVFUlkiLCJncWwiLCJQYWdpbmF0aW9uIiwicGFnZSIsImVycm9yIiwibG9hZGluZyIsImRhdGEiLCJ1c2VRdWVyeSIsImNvdW50IiwiX2FsbFByb2R1Y3RzTWV0YSIsInBhZ2VDb3VudCIsIk1hdGgiLCJjZWlsIiwicGVyUGFnZSIsIlNJR05fT1VUX01VVEFUSU9OIiwiU2lnbk91dCIsInNpZ25vdXQiLCJ1c2VNdXRhdGlvbiIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJDVVJSRU5UX1VTRVJfUVVFUlkiLCJhdXRoZW50aWNhdGVkSXRlbSIsIk5hdlN0eWxlcyIsIlBhZ2luYXRpb25TdHlsZXMiLCJlbmRwb2ludCIsInByb2RFbmRwb2ludCIsInBhZ2luYXRpb25GaWVsZCIsImtleUFyZ3MiLCJyZWFkIiwiZXhpc3RpbmciLCJhcmdzIiwiY2FjaGUiLCJza2lwIiwiZmlyc3QiLCJyZWFkUXVlcnkiLCJwYWdlcyIsIml0ZW1zIiwic2xpY2UiLCJmaWx0ZXIiLCJ4IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIm1lcmdlIiwiaW5jb21pbmciLCJtZXJnZWQiLCJpIiwiY3JlYXRlQ2xpZW50IiwiaGVhZGVycyIsImluaXRpYWxTdGF0ZSIsIkFwb2xsb0NsaWVudCIsImxpbmsiLCJBcG9sbG9MaW5rIiwib25FcnJvciIsImdyYXBoUUxFcnJvcnMiLCJuZXR3b3JrRXJyb3IiLCJmb3JFYWNoIiwibWVzc2FnZSIsImxvY2F0aW9ucyIsInBhdGgiLCJjcmVhdGVVcGxvYWRMaW5rIiwidXJpIiwiZmV0Y2hPcHRpb25zIiwiY3JlZGVudGlhbHMiLCJJbk1lbW9yeUNhY2hlIiwidHlwZVBvbGljaWVzIiwiUXVlcnkiLCJmaWVsZHMiLCJhbGxQcm9kdWN0cyIsInJlc3RvcmUiLCJ3aXRoQXBvbGxvIiwiZ2V0RGF0YUZyb21UcmVlIiwiUm91dGVyIiwiTlByb2dyZXNzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcG9sbG8iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ3aXRoRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxJQUFJLEdBQUdDLHNFQUFIO0FBQUE7QUFBQTtBQUFBLDBMQUFWO0FBZUEsTUFBTUMsWUFBWSxHQUFHRCwwRUFBSDtBQUFBO0FBQUE7QUFBQSx3UEFBbEI7QUFnQmUsU0FBU0UsTUFBVCxHQUFrQjtBQUMvQixzQkFDRSw4REFBQyxZQUFEO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDhCQUNFLDhEQUFDLElBQUQ7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUUsOERBQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBT0U7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pERDtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLEdBQVQsR0FBZTtBQUM1QixRQUFNQyxJQUFJLEdBQUdDLDhDQUFPLEVBQXBCO0FBQ0Esc0JBQ0UsOERBQUMsc0RBQUQ7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFR0QsSUFBSSxpQkFDSDtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBLG9CQUhKLEVBVUcsQ0FBQ0EsSUFBRCxpQkFDQztBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixxQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJEO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUUsWUFBWSxHQUFHQyxvRUFBSCw2MEJBQWxCO0FBNENBLE1BQU1DLFdBQVcsR0FBR1IsdUVBQUg7QUFBQTtBQUFBO0FBQUEsNkRBQWpCO0FBTWUsU0FBU1MsSUFBVCxDQUFjO0FBQUVDO0FBQUYsQ0FBZCxFQUE0QjtBQUN6QyxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UsOERBQUMsV0FBRDtBQUFBLGdCQUFjQTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EO0FBRURELElBQUksQ0FBQ0UsVUFBTCxHQUFrQjtBQUNoQkQsVUFBUSxFQUFFRSx1REFBYUM7QUFEUCxDQUFsQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUMsZ0JBQWdCLEdBQUdDLG9EQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5PO0FBUVEsU0FBU0MsVUFBVCxDQUFvQjtBQUFFQztBQUFGLENBQXBCLEVBQThCO0FBQzNDLFFBQU07QUFBRUMsU0FBRjtBQUFTQyxXQUFUO0FBQWtCQztBQUFsQixNQUEyQkMsd0RBQVEsQ0FBQ1AsZ0JBQUQsQ0FBekM7QUFDQSxNQUFJSyxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlELEtBQUosRUFBVyxvQkFBTyw4REFBQyxrREFBRDtBQUFjLFNBQUssRUFBRUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ1gsUUFBTTtBQUFFSTtBQUFGLE1BQVlGLElBQUksQ0FBQ0csZ0JBQXZCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUosS0FBSyxHQUFHSyw0Q0FBbEIsQ0FBbEI7QUFFQSxzQkFDRSw4REFBQyw2REFBRDtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQSx5Q0FBMEJWLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFHLGFBQVlBLElBQUksR0FBRyxDQUFFLEVBQWxDO0FBQUEsNkJBQ0U7QUFBRyx5QkFBZUEsSUFBSSxJQUFJLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBT0U7QUFBQSwwQkFDUUEsSUFEUixVQUNrQk8sU0FEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFVRTtBQUFBLHNCQUFLRixLQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGLGVBV0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUcsYUFBWUwsSUFBSSxHQUFHLENBQUUsRUFBbEM7QUFBQSw2QkFDRTtBQUFHLHlCQUFlQSxJQUFJLElBQUlPLFNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDRDtBQUNBO0FBQ0E7QUFFQSxNQUFNSSxpQkFBaUIsR0FBR2Isb0RBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsQ0FKQTtBQU1lLFNBQVNjLE9BQVQsR0FBbUI7QUFDaEMsUUFBTSxDQUFDQyxPQUFELElBQVlDLDJEQUFXLENBQUNILGlCQUFELEVBQW9CO0FBQy9DSSxrQkFBYyxFQUFFLENBQUM7QUFBRUMsV0FBSyxFQUFFQyxxREFBa0JBO0FBQTNCLEtBQUQ7QUFEK0IsR0FBcEIsQ0FBN0I7QUFHQSxzQkFDRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFdBQU8sRUFBRUosT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRDtBQUVBLE1BQU1JLGtCQUFrQixHQUFHbkIsK0NBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWQTtBQVlPLFNBQVNWLE9BQVQsR0FBbUI7QUFDeEIsUUFBTTtBQUFFZTtBQUFGLE1BQVdDLHdEQUFRLENBQUNhLGtCQUFELENBQXpCO0FBQ0EsU0FBT2QsSUFBUCxhQUFPQSxJQUFQLHVCQUFPQSxJQUFJLENBQUVlLGlCQUFiO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7OztBQ2pCRDtBQUVBLE1BQU1DLFNBQVMsR0FBR3BDLHNFQUFIO0FBQUE7QUFBQTtBQUFBLHUzQkFBZjtBQWlFQSwrREFBZW9DLFNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBR3JDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHFYQUF0QjtBQXdCQSwrREFBZXFDLGdCQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ08sTUFBTUMsUUFBUSxHQUFJLG1DQUFsQjtBQUNBLE1BQU1DLFlBQVksR0FBSSwyQkFBdEI7QUFDQSxNQUFNWixPQUFPLEdBQUcsQ0FBaEIsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQ0E7QUFFZSxTQUFTYSxlQUFULEdBQTJCO0FBQ3hDLFNBQU87QUFDTEMsV0FBTyxFQUFFLEtBREo7O0FBRUxDLFFBQUksQ0FBQ0MsUUFBUSxHQUFHLEVBQVosRUFBZ0I7QUFBRUMsVUFBRjtBQUFRQztBQUFSLEtBQWhCLEVBQWlDO0FBQ25DLFlBQU07QUFBRUMsWUFBRjtBQUFRQztBQUFSLFVBQWtCSCxJQUF4QjtBQUNBLFlBQU14QixJQUFJLEdBQUd5QixLQUFLLENBQUNHLFNBQU4sQ0FBZ0I7QUFBRWYsYUFBSyxFQUFFbkIsb0VBQWdCQTtBQUF6QixPQUFoQixDQUFiO0FBQ0EsWUFBTVEsS0FBSyxHQUFHRixJQUFILGFBQUdBLElBQUgsdUJBQUdBLElBQUksQ0FBRUcsZ0JBQU4sQ0FBdUJELEtBQXJDO0FBQ0EsWUFBTUwsSUFBSSxHQUFHNkIsSUFBSSxHQUFHQyxLQUFQLEdBQWUsQ0FBNUI7QUFDQSxZQUFNRSxLQUFLLEdBQUd4QixJQUFJLENBQUNDLElBQUwsQ0FBVUosS0FBSyxHQUFHeUIsS0FBbEIsQ0FBZDtBQUVBLFlBQU1HLEtBQUssR0FBR1AsUUFBUSxDQUFDUSxLQUFULENBQWVMLElBQWYsRUFBcUJBLElBQUksR0FBR0MsS0FBNUIsRUFBbUNLLE1BQW5DLENBQTJDQyxDQUFELElBQU9BLENBQWpELENBQWQ7O0FBQ0EsVUFBSUgsS0FBSyxDQUFDSSxNQUFOLElBQWdCSixLQUFLLENBQUNJLE1BQU4sS0FBaUJQLEtBQWpDLElBQTBDOUIsSUFBSSxLQUFLZ0MsS0FBdkQsRUFBOEQ7QUFDNUQsZUFBT0MsS0FBUDtBQUNEOztBQUNELFVBQUlBLEtBQUssQ0FBQ0ksTUFBTixLQUFpQlAsS0FBckIsRUFBNEI7QUFDMUIsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsVUFBSUcsS0FBSyxDQUFDSSxNQUFWLEVBQWtCO0FBQ2hCQyxlQUFPLENBQUNDLEdBQVIsQ0FDRyxhQUFZTixLQUFLLENBQUNJLE1BQU8sZ0RBRDVCO0FBR0EsZUFBT0osS0FBUDtBQUNEOztBQUVELGFBQU8sS0FBUDtBQUNELEtBekJJOztBQTBCTE8sU0FBSyxDQUFDZCxRQUFELEVBQVdlLFFBQVgsRUFBcUI7QUFBRWQ7QUFBRixLQUFyQixFQUErQjtBQUNsQyxZQUFNO0FBQUVFLFlBQUY7QUFBUUM7QUFBUixVQUFrQkgsSUFBeEI7QUFDQVcsYUFBTyxDQUFDQyxHQUFSLENBQWEsa0NBQWlDRSxRQUFRLENBQUNKLE1BQU8sRUFBOUQ7QUFDQSxZQUFNSyxNQUFNLEdBQUdoQixRQUFRLEdBQUdBLFFBQVEsQ0FBQ1EsS0FBVCxDQUFlLENBQWYsQ0FBSCxHQUF1QixFQUE5Qzs7QUFDQSxXQUFLLElBQUlTLENBQUMsR0FBR2QsSUFBYixFQUFtQmMsQ0FBQyxHQUFHZCxJQUFJLEdBQUdZLFFBQVEsQ0FBQ0osTUFBdkMsRUFBK0MsRUFBRU0sQ0FBakQsRUFBb0Q7QUFDbERELGNBQU0sQ0FBQ0MsQ0FBRCxDQUFOLEdBQVlGLFFBQVEsQ0FBQ0UsQ0FBQyxHQUFHZCxJQUFMLENBQXBCO0FBQ0Q7O0FBQ0QsYUFBT2EsTUFBUDtBQUNEOztBQWxDSSxHQUFQO0FBb0NELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTRSxZQUFULENBQXNCO0FBQUVDLFNBQUY7QUFBV0M7QUFBWCxDQUF0QixFQUFpRDtBQUMvQyxTQUFPLElBQUlDLHdEQUFKLENBQWlCO0FBQ3RCQyxRQUFJLEVBQUVDLDJEQUFBLENBQWdCLENBQ3BCQywyREFBTyxDQUFDLENBQUM7QUFBRUMsbUJBQUY7QUFBaUJDO0FBQWpCLEtBQUQsS0FBcUM7QUFDM0MsVUFBSUQsYUFBSixFQUNFQSxhQUFhLENBQUNFLE9BQWQsQ0FBc0IsQ0FBQztBQUFFQyxlQUFGO0FBQVdDLGlCQUFYO0FBQXNCQztBQUF0QixPQUFELEtBQ3BCbEIsT0FBTyxDQUFDQyxHQUFSLENBQ0csNkJBQTRCZSxPQUFRLGVBQWNDLFNBQVUsV0FBVUMsSUFBSyxFQUQ5RSxDQURGO0FBS0YsVUFBSUosWUFBSixFQUNFZCxPQUFPLENBQUNDLEdBQVIsQ0FDRyxvQkFBbUJhLFlBQWEsMENBRG5DO0FBR0gsS0FYTSxDQURhLEVBYXBCO0FBQ0FLLDBFQUFnQixDQUFDO0FBQ2ZDLFNBQUcsRUFBRSxRQUF5Q3JDLDZDQUF6QyxHQUFvREMsQ0FEMUM7QUFFZnFDLGtCQUFZLEVBQUU7QUFDWkMsbUJBQVcsRUFBRTtBQURELE9BRkM7QUFLZjtBQUNBZjtBQU5lLEtBQUQsQ0FkSSxDQUFoQixDQURnQjtBQXdCdEJqQixTQUFLLEVBQUUsSUFBSWlDLHlEQUFKLENBQWtCO0FBQ3ZCQyxrQkFBWSxFQUFFO0FBQ1pDLGFBQUssRUFBRTtBQUNMQyxnQkFBTSxFQUFFO0FBQ047QUFDQUMsdUJBQVcsRUFBRTFDLHlEQUFlO0FBRnRCO0FBREg7QUFESztBQURTLEtBQWxCLEVBU0oyQyxPQVRJLENBU0lwQixZQUFZLElBQUksRUFUcEI7QUF4QmUsR0FBakIsQ0FBUDtBQW1DRDs7QUFFRCwrREFBZXFCLHVEQUFVLENBQUN2QixZQUFELEVBQWU7QUFBRXdCLGlCQUFlQTtBQUFqQixDQUFmLENBQXpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBQyw0REFBQSxDQUFpQixrQkFBakIsRUFBcUMsTUFBTUMsc0RBQUEsRUFBM0M7QUFDQUQsNERBQUEsQ0FBaUIscUJBQWpCLEVBQXdDLE1BQU1DLHFEQUFBLEVBQTlDO0FBQ0FELDREQUFBLENBQWlCLG1CQUFqQixFQUFzQyxNQUFNQyxxREFBQSxFQUE1Qzs7QUFFQSxTQUFTQyxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQyxXQUFiO0FBQXdCQztBQUF4QixDQUFmLEVBQWlEO0FBQy9DcEMsU0FBTyxDQUFDQyxHQUFSLENBQVltQyxNQUFaO0FBQ0Esc0JBQ0UsOERBQUMsMERBQUQ7QUFBZ0IsVUFBTSxFQUFFQSxNQUF4QjtBQUFBLDJCQUNFLDhEQUFDLHFEQUFEO0FBQUEsNkJBQ0UsOERBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztBQUVERixLQUFLLENBQUNJLGVBQU4sR0FBd0IsZ0JBQWdCO0FBQUVILFdBQUY7QUFBYUk7QUFBYixDQUFoQixFQUFvQztBQUMxRCxNQUFJSCxTQUFTLEdBQUcsRUFBaEI7O0FBQ0EsTUFBSUQsU0FBUyxDQUFDRyxlQUFkLEVBQStCO0FBQzdCRixhQUFTLEdBQUcsTUFBTUQsU0FBUyxDQUFDRyxlQUFWLENBQTBCQyxHQUExQixDQUFsQjtBQUNEOztBQUNESCxXQUFTLENBQUN6RCxLQUFWLEdBQWtCNEQsR0FBRyxDQUFDNUQsS0FBdEI7QUFDQSxTQUFPO0FBQUV5RDtBQUFGLEdBQVA7QUFDRCxDQVBEOztBQVNBLCtEQUFlSSxzREFBUSxDQUFDTixLQUFELENBQXZCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTmF2IGZyb20gJy4vTmF2JztcclxuXHJcbmNvbnN0IExvZ28gPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIHRyYW5zZm9ybTogc2tldygtN2RlZyk7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG4gIGEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlclN0eWxlcyA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgLmJhciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHZhcigtLWJsYWNrLCBibGFjayk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIH1cclxuXHJcbiAgLnN1YkJhciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ibGFjaywgYmxhY2spO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWRlclN0eWxlcz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj5cclxuICAgICAgICA8TG9nbz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+U2ljayBGaXRzPC9MaW5rPlxyXG4gICAgICAgIDwvTG9nbz5cclxuICAgICAgICA8TmF2IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YkJhclwiPlxyXG4gICAgICAgIDxwPlNlYXJjaDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0hlYWRlclN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBTaWduT3V0IGZyb20gJy4vU2lnbk91dCc7XHJcbmltcG9ydCBOYXZTdHlsZXMgZnJvbSAnLi9zdHlsZXMvTmF2U3R5bGVzJztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4vVXNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XHJcbiAgY29uc3QgdXNlciA9IHVzZVVzZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPE5hdlN0eWxlcz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0c1wiPlByb2R1Y3RzPC9MaW5rPlxyXG4gICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VsbFwiPlNlbGw8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL29yZGVyc1wiPk9yZGVyczwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjb3VudFwiPkFjY291bnQ8L0xpbms+XHJcbiAgICAgICAgICA8U2lnbk91dCAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgICB7IXVzZXIgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25pblwiPiBTaWduSW4gPC9MaW5rPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9OYXZTdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ3JhZG5pa2FfbmV4dCc7XHJcbiAgICBzcmM6IHVybCgnL3N0YXRpYy9yYWRuaWthbmV4dC1tZWRpdW0td2ViZm9udC53b2ZmMicpXHJcbiAgICBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG5cclxuICB9XHJcbiAgaHRtbHtcclxuICAgIC0tcmVkOiAjZmYxMjM0O1xyXG4gICAgLS1ibGFjazogIzM5MzkzOTtcclxuICAgIC0tZ3JleTogIzNBM0EzQTtcclxuICAgIC0tZ3JheTogdmFyKC0tZ3JleSk7XHJcbiAgICAtLWxpZ2h0R3JleTogI2UxZTFlMTtcclxuICAgIC0tbGlnaHRHcmF5OiB2YXIoLS1saWdodEdyZXkpO1xyXG4gICAgLS1vZmZXaGl0ZTogI2VkZWRlZDtcclxuICAgIC0tbWF4V2lkdGg6IDEwMDBweDtcclxuICAgIC0tYnM6IDAgMTJweCAyNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA5KTsgIFxyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgKiwgKjpiZWZvcmUsICo6YWZ0ZXJ7XHJcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG4gIH1cclxuICBib2R5e1xyXG4gICAgZm9udC1mYW1pbHk6ICdyYWRuaWthX25leHQnLCAtLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgfVxyXG4gIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spXHJcbiAgfVxyXG4gIGE6aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbiAgYnV0dG9ue1xyXG4gICAgZm9udC1mYW1pbHk6ICdyYWRuaWthX25leHQnLCAtLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IElubmVyU3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IHZhcigtLW1heFdpZHRoKTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAycmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEdsb2JhbFN0eWxlcyAvPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxJbm5lclN0eWxlcz57Y2hpbGRyZW59PC9Jbm5lclN0eWxlcz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblBhZ2UucHJvdG90eXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcclxufTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xyXG5pbXBvcnQgUGFnaW5hdGlvblN0eWxlcyBmcm9tICcuL3N0eWxlcy9QYWdpbmF0aW9uU3R5bGVzJztcclxuaW1wb3J0IHsgcGVyUGFnZSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgY29uc3QgUEFHSU5BVElPTl9RVUVSWSA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBfYWxsUHJvZHVjdHNNZXRhIHtcclxuICAgICAgY291bnRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmF0aW9uKHsgcGFnZSB9KSB7XHJcbiAgY29uc3QgeyBlcnJvciwgbG9hZGluZywgZGF0YSB9ID0gdXNlUXVlcnkoUEFHSU5BVElPTl9RVUVSWSk7XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nIC4uLjwvcD47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+O1xyXG4gIGNvbnN0IHsgY291bnQgfSA9IGRhdGEuX2FsbFByb2R1Y3RzTWV0YTtcclxuICBjb25zdCBwYWdlQ291bnQgPSBNYXRoLmNlaWwoY291bnQgLyBwZXJQYWdlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdpbmF0aW9uU3R5bGVzPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+IFNpY2sgRml0cyAtIFBhZ2Uge3BhZ2V9IG9mIF9fXzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3BhZ2UgLSAxfWB9PlxyXG4gICAgICAgIDxhIGFyaWEtZGlzYWJsZWQ9e3BhZ2UgPD0gMX0+JmxhcnI7IFByZXY8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPHA+XHJcbiAgICAgICAgUGFnZSB7cGFnZX0gb2Yge3BhZ2VDb3VudH1cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD4ge2NvdW50fSBJdGVtcyBUb3RhbCA8L3A+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtwYWdlICsgMX1gfT5cclxuICAgICAgICA8YSBhcmlhLWRpc2FibGVkPXtwYWdlID49IHBhZ2VDb3VudH0+TmV4dCAmcmFycjs8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvUGFnaW5hdGlvblN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSAnLi9Vc2VyJztcclxuXHJcbmNvbnN0IFNJR05fT1VUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIHtcclxuICAgIGVuZFNlc3Npb25cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduT3V0KCkge1xyXG4gIGNvbnN0IFtzaWdub3V0XSA9IHVzZU11dGF0aW9uKFNJR05fT1VUX01VVEFUSU9OLCB7XHJcbiAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17c2lnbm91dH0+XHJcbiAgICAgIFNpZ24gT3V0XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5jb25zdCBDVVJSRU5UX1VTRVJfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgYXV0aGVudGljYXRlZEl0ZW0ge1xyXG4gICAgICAuLi4gb24gVXNlciB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBlbWFpbFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VVc2VyKCkge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoQ1VSUkVOVF9VU0VSX1FVRVJZKTtcclxuICByZXR1cm4gZGF0YT8uYXV0aGVudGljYXRlZEl0ZW07XHJcbn1cclxuXHJcbmV4cG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IE5hdlN0eWxlcyA9IHN0eWxlZC51bGBcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBhLFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgfVxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRHcmF5KTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRyYW5zZm9ybTogc2tldygtMjBkZWcpO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzO1xyXG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEsIC0wLjY1LCAwLCAyLjMxKTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlcixcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JheSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2U3R5bGVzO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFBhZ2luYXRpb25TdHlsZXMgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBhdXRvKTtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAycmVtIDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmF5KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICYgPiAqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JheSk7XHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvblN0eWxlcztcclxuIiwiLy8gVGhpcyBpcyBjbGllbnQgc2lkZSBjb25maWcgb25seSAtIGRvbid0IHB1dCBhbnl0aGluZyBpbiBoZXJlIHRoYXQgc2hvdWxkbid0IGJlIHB1YmxpYyFcclxuZXhwb3J0IGNvbnN0IGVuZHBvaW50ID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ3JhcGhxbGA7XHJcbmV4cG9ydCBjb25zdCBwcm9kRW5kcG9pbnQgPSBgZmlsbCBtZSBpbiB3aGVuIHdlIGRlcGxveWA7XHJcbmV4cG9ydCBjb25zdCBwZXJQYWdlID0gNDtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cclxuaW1wb3J0IHsgUEFHSU5BVElPTl9RVUVSWSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdpbmF0aW9uRmllbGQoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGtleUFyZ3M6IGZhbHNlLFxyXG4gICAgcmVhZChleGlzdGluZyA9IFtdLCB7IGFyZ3MsIGNhY2hlIH0pIHtcclxuICAgICAgY29uc3QgeyBza2lwLCBmaXJzdCB9ID0gYXJncztcclxuICAgICAgY29uc3QgZGF0YSA9IGNhY2hlLnJlYWRRdWVyeSh7IHF1ZXJ5OiBQQUdJTkFUSU9OX1FVRVJZIH0pO1xyXG4gICAgICBjb25zdCBjb3VudCA9IGRhdGE/Ll9hbGxQcm9kdWN0c01ldGEuY291bnQ7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBza2lwIC8gZmlyc3QgKyAxO1xyXG4gICAgICBjb25zdCBwYWdlcyA9IE1hdGguY2VpbChjb3VudCAvIGZpcnN0KTtcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW1zID0gZXhpc3Rpbmcuc2xpY2Uoc2tpcCwgc2tpcCArIGZpcnN0KS5maWx0ZXIoKHgpID0+IHgpO1xyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoICYmIGl0ZW1zLmxlbmd0aCAhPT0gZmlyc3QgJiYgcGFnZSA9PT0gcGFnZXMpIHtcclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCAhPT0gZmlyc3QpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgIGBUaGVyZSBhcmUgJHtpdGVtcy5sZW5ndGh9IGl0ZW1zIGluIHRoZSBjYWNoZSEgR29ubmEgc2VuZCB0aGVtIHRvIGFwb2xsb2BcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIG1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZywgeyBhcmdzIH0pIHtcclxuICAgICAgY29uc3QgeyBza2lwLCBmaXJzdCB9ID0gYXJncztcclxuICAgICAgY29uc29sZS5sb2coYE1lcmdpbmcgaXRlbXMgZnJvbSB0aGUgbmV0d29yayAke2luY29taW5nLmxlbmd0aH1gKTtcclxuICAgICAgY29uc3QgbWVyZ2VkID0gZXhpc3RpbmcgPyBleGlzdGluZy5zbGljZSgwKSA6IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gc2tpcDsgaSA8IHNraXAgKyBpbmNvbWluZy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIG1lcmdlZFtpXSA9IGluY29taW5nW2kgLSBza2lwXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbWVyZ2VkO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IEFwb2xsb0NsaWVudCwgQXBvbGxvTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgb25FcnJvciB9IGZyb20gJ0BhcG9sbG8vbGluay1lcnJvcic7XHJcbmltcG9ydCB7IGdldERhdGFGcm9tVHJlZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50L3JlYWN0L3Nzcic7XHJcbmltcG9ydCB7IGNyZWF0ZVVwbG9hZExpbmsgfSBmcm9tICdhcG9sbG8tdXBsb2FkLWNsaWVudCc7XHJcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gJ25leHQtd2l0aC1hcG9sbG8nO1xyXG5pbXBvcnQgeyBlbmRwb2ludCwgcHJvZEVuZHBvaW50IH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHBhZ2luYXRpb25GaWVsZCBmcm9tICcuL3BhZ2luYXRpb25GaWVsZCc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDbGllbnQoeyBoZWFkZXJzLCBpbml0aWFsU3RhdGUgfSkge1xyXG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIGxpbms6IEFwb2xsb0xpbmsuZnJvbShbXHJcbiAgICAgIG9uRXJyb3IoKHsgZ3JhcGhRTEVycm9ycywgbmV0d29ya0Vycm9yIH0pID0+IHtcclxuICAgICAgICBpZiAoZ3JhcGhRTEVycm9ycylcclxuICAgICAgICAgIGdyYXBoUUxFcnJvcnMuZm9yRWFjaCgoeyBtZXNzYWdlLCBsb2NhdGlvbnMsIHBhdGggfSkgPT5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgYFtHcmFwaFFMIGVycm9yXTogTWVzc2FnZTogJHttZXNzYWdlfSwgTG9jYXRpb246ICR7bG9jYXRpb25zfSwgUGF0aDogJHtwYXRofWBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBpZiAobmV0d29ya0Vycm9yKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGBbTmV0d29yayBlcnJvcl06ICR7bmV0d29ya0Vycm9yfS4gQmFja2VuZCBpcyB1bnJlYWNoYWJsZS4gSXMgaXQgcnVubmluZz9gXHJcbiAgICAgICAgICApO1xyXG4gICAgICB9KSxcclxuICAgICAgLy8gdGhpcyB1c2VzIGFwb2xsby1saW5rLWh0dHAgdW5kZXIgdGhlIGhvb2QsIHNvIGFsbCB0aGUgb3B0aW9ucyBoZXJlIGNvbWUgZnJvbSB0aGF0IHBhY2thZ2VcclxuICAgICAgY3JlYXRlVXBsb2FkTGluayh7XHJcbiAgICAgICAgdXJpOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IGVuZHBvaW50IDogcHJvZEVuZHBvaW50LFxyXG4gICAgICAgIGZldGNoT3B0aW9uczoge1xyXG4gICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHBhc3MgdGhlIGhlYWRlcnMgYWxvbmcgZnJvbSB0aGlzIHJlcXVlc3QuIFRoaXMgZW5hYmxlcyBTU1Igd2l0aCBsb2dnZWQgaW4gc3RhdGVcclxuICAgICAgICBoZWFkZXJzLFxyXG4gICAgICB9KSxcclxuICAgIF0pLFxyXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHtcclxuICAgICAgdHlwZVBvbGljaWVzOiB7XHJcbiAgICAgICAgUXVlcnk6IHtcclxuICAgICAgICAgIGZpZWxkczoge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBXZSB3aWxsIGFkZCB0aGlzIHRvZ2V0aGVyIVxyXG4gICAgICAgICAgICBhbGxQcm9kdWN0czogcGFnaW5hdGlvbkZpZWxkKCksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KS5yZXN0b3JlKGluaXRpYWxTdGF0ZSB8fCB7fSksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oY3JlYXRlQ2xpZW50LCB7IGdldERhdGFGcm9tVHJlZSB9KTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXHJcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnO1xyXG5cclxuaW1wb3J0ICcuLi9jb21wb25lbnRzL3N0eWxlcy9ucHJvZ3Jlc3MuY3NzJztcclxuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2xpYi93aXRoRGF0YSc7XHJcblxyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpO1xyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3J0JywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBhcG9sbG8gfSkge1xyXG4gIGNvbnNvbGUubG9nKGFwb2xsbyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb30+XHJcbiAgICAgIDxQYWdlPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoeyBDb21wb25lbnQsIGN0eCB9KSB7XHJcbiAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG4gIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgfVxyXG4gIHBhZ2VQcm9wcy5xdWVyeSA9IGN0eC5xdWVyeTtcclxuICByZXR1cm4geyBwYWdlUHJvcHMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKE15QXBwKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L3JlYWN0L3NzclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9saW5rLWVycm9yXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tdXBsb2FkLWNsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtd2l0aC1hcG9sbG9cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=