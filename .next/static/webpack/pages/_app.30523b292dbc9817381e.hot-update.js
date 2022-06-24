self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Search; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! downshift */ "./node_modules/downshift/dist/downshift.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\DaneC\\Desktop\\Classes\\WesBos\\Advanced-React\\sick-fits\\frontend\\components\\Search.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = (0,C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {\n    searchTerms: allProducts(\n      where: {\n        OR: [\n          { name_contains_i: $searchTerm }\n          { description_contains_i: $searchTerm }\n        ]\n      }\n    ) {\n      id\n      name\n      photo {\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* eslint-disable react/jsx-props-no-spreading */






var SEARCH_PRODUCTS_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject());
function Search() {
  _s();

  var _this = this;

  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();

  var _useLazyQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useLazyQuery)(SEARCH_PRODUCTS_QUERY, {
    fetchPolicy: 'no-cache'
  }),
      _useLazyQuery2 = (0,C_Users_DaneC_Desktop_Classes_WesBos_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useLazyQuery, 2),
      findItems = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      loading = _useLazyQuery2$.loading,
      data = _useLazyQuery2$.data,
      error = _useLazyQuery2$.error;

  var items = (data === null || data === void 0 ? void 0 : data.searchTerms) || [];
  var findItemsButChill = lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(findItems, 350);
  (0,downshift__WEBPACK_IMPORTED_MODULE_10__.resetIdCounter)();

  var _useCombobox = (0,downshift__WEBPACK_IMPORTED_MODULE_10__.useCombobox)({
    items: items,
    onInputValueChange: function onInputValueChange() {
      findItemsButChill({
        variables: {
          searchTerm: inputValue
        }
      });
    },
    onSelectedItemChange: function onSelectedItemChange(_ref) {
      var selectedItem = _ref.selectedItem;
      router.push({
        pathname: "/product/".concat(selectedItem.id)
      });
    },
    itemToString: function itemToString(item) {
      return (item === null || item === void 0 ? void 0 : item.name) || '';
    }
  }),
      isOpen = _useCombobox.isOpen,
      inputValue = _useCombobox.inputValue,
      getMenuProps = _useCombobox.getMenuProps,
      getInputProps = _useCombobox.getInputProps,
      getComboboxProps = _useCombobox.getComboboxProps,
      getItemProps = _useCombobox.getItemProps,
      highlightedIndex = _useCombobox.highlightedIndex;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__.SearchStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", _objectSpread({}, getInputProps({
        type: 'search',
        placeholder: 'Search for an Item',
        id: 'search',
        className: loading ? 'loading' : null
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__.DropDown, _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: [isOpen && items.map(function (item, index) {
        return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__.DropDownItem, _objectSpread(_objectSpread({}, getItemProps({
          item: item,
          index: index
        })), {}, {
          key: item.id,
          highlighted: index === highlightedIndex,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }
        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: item.photo.image.publicUrlTransformed,
          alt: item.name,
          width: "50"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 15
        }, _this), item.name);
      }), isOpen && !items.length && !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__.DropDownItem, {
        children: ["Sorry, No items found for ", inputValue]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

_s(Search, "fqeNkzpPKcZO8u67p7bngxaTdc4=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useLazyQuery, downshift__WEBPACK_IMPORTED_MODULE_10__.useCombobox];
});

_c = Search;

var _c;

$RefreshReg$(_c, "Search");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU0VBUkNIX1BST0RVQ1RTX1FVRVJZIiwiZ3FsIiwiU2VhcmNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlTGF6eVF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJmaW5kSXRlbXMiLCJsb2FkaW5nIiwiZGF0YSIsImVycm9yIiwiaXRlbXMiLCJzZWFyY2hUZXJtcyIsImZpbmRJdGVtc0J1dENoaWxsIiwiZGVib3VuY2UiLCJyZXNldElkQ291bnRlciIsInVzZUNvbWJvYm94Iiwib25JbnB1dFZhbHVlQ2hhbmdlIiwidmFyaWFibGVzIiwic2VhcmNoVGVybSIsImlucHV0VmFsdWUiLCJvblNlbGVjdGVkSXRlbUNoYW5nZSIsInNlbGVjdGVkSXRlbSIsInB1c2giLCJwYXRobmFtZSIsImlkIiwiaXRlbVRvU3RyaW5nIiwiaXRlbSIsIm5hbWUiLCJpc09wZW4iLCJnZXRNZW51UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiZ2V0Q29tYm9ib3hQcm9wcyIsImdldEl0ZW1Qcm9wcyIsImhpZ2hsaWdodGVkSW5kZXgiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEscUJBQXFCLEdBQUdDLG9EQUFILG1CQUEzQjtBQXFCZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQy9CLE1BQU1DLE1BQU0sR0FBR0Msa0VBQVMsRUFBeEI7O0FBRCtCLHNCQUVlQyw0REFBWSxDQUN4REwscUJBRHdELEVBRXhEO0FBQ0VNLGVBQVcsRUFBRTtBQURmLEdBRndELENBRjNC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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtDRDs7R0FyRXVCbEIsTTtVQUNQRSw4RCxFQUMrQkMsd0QsRUFpQjFDVyxtRDs7O0tBbkJrQmQsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjMwNTIzYjI5MmRiYzk4MTczODFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXHJcbmltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgcmVzZXRJZENvdW50ZXIsIHVzZUNvbWJvYm94IH0gZnJvbSAnZG93bnNoaWZ0JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcbmltcG9ydCB7IERyb3BEb3duLCBEcm9wRG93bkl0ZW0sIFNlYXJjaFN0eWxlcyB9IGZyb20gJy4vc3R5bGVzL0Ryb3BEb3duJztcclxuXHJcbmNvbnN0IFNFQVJDSF9QUk9EVUNUU19RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBTRUFSQ0hfUFJPRFVDVFNfUVVFUlkoJHNlYXJjaFRlcm06IFN0cmluZyEpIHtcclxuICAgIHNlYXJjaFRlcm1zOiBhbGxQcm9kdWN0cyhcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBPUjogW1xyXG4gICAgICAgICAgeyBuYW1lX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtIH1cclxuICAgICAgICAgIHsgZGVzY3JpcHRpb25fY29udGFpbnNfaTogJHNlYXJjaFRlcm0gfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgcGhvdG8ge1xyXG4gICAgICAgIGltYWdlIHtcclxuICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtmaW5kSXRlbXMsIHsgbG9hZGluZywgZGF0YSwgZXJyb3IgfV0gPSB1c2VMYXp5UXVlcnkoXHJcbiAgICBTRUFSQ0hfUFJPRFVDVFNfUVVFUlksXHJcbiAgICB7XHJcbiAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgY29uc3QgaXRlbXMgPSBkYXRhPy5zZWFyY2hUZXJtcyB8fCBbXTtcclxuICBjb25zdCBmaW5kSXRlbXNCdXRDaGlsbCA9IGRlYm91bmNlKGZpbmRJdGVtcywgMzUwKTtcclxuICByZXNldElkQ291bnRlcigpO1xyXG4gIGNvbnN0IHtcclxuICAgIGlzT3BlbixcclxuICAgIGlucHV0VmFsdWUsXHJcbiAgICBnZXRNZW51UHJvcHMsXHJcbiAgICBnZXRJbnB1dFByb3BzLFxyXG4gICAgZ2V0Q29tYm9ib3hQcm9wcyxcclxuICAgIGdldEl0ZW1Qcm9wcyxcclxuICAgIGhpZ2hsaWdodGVkSW5kZXgsXHJcbiAgfSA9IHVzZUNvbWJvYm94KHtcclxuICAgIGl0ZW1zLFxyXG4gICAgb25JbnB1dFZhbHVlQ2hhbmdlKCkge1xyXG4gICAgICBmaW5kSXRlbXNCdXRDaGlsbCh7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBzZWFyY2hUZXJtOiBpbnB1dFZhbHVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uU2VsZWN0ZWRJdGVtQ2hhbmdlKHsgc2VsZWN0ZWRJdGVtIH0pIHtcclxuICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgIHBhdGhuYW1lOiBgL3Byb2R1Y3QvJHtzZWxlY3RlZEl0ZW0uaWR9YCxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaXRlbVRvU3RyaW5nOiAoaXRlbSkgPT4gaXRlbT8ubmFtZSB8fCAnJyxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlYXJjaFN0eWxlcz5cclxuICAgICAgPGRpdiB7Li4uZ2V0Q29tYm9ib3hQcm9wcygpfT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHsuLi5nZXRJbnB1dFByb3BzKHtcclxuICAgICAgICAgICAgdHlwZTogJ3NlYXJjaCcsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoIGZvciBhbiBJdGVtJyxcclxuICAgICAgICAgICAgaWQ6ICdzZWFyY2gnLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IGxvYWRpbmcgPyAnbG9hZGluZycgOiBudWxsLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxEcm9wRG93biB7Li4uZ2V0TWVudVByb3BzKCl9PlxyXG4gICAgICAgIHtpc09wZW4gJiZcclxuICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPERyb3BEb3duSXRlbVxyXG4gICAgICAgICAgICAgIHsuLi5nZXRJdGVtUHJvcHMoeyBpdGVtLCBpbmRleCB9KX1cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWQ9e2luZGV4ID09PSBoaWdobGlnaHRlZEluZGV4fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtpdGVtLnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjUwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgIDwvRHJvcERvd25JdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAge2lzT3BlbiAmJiAhaXRlbXMubGVuZ3RoICYmICFsb2FkaW5nICYmIChcclxuICAgICAgICAgIDxEcm9wRG93bkl0ZW0+U29ycnksIE5vIGl0ZW1zIGZvdW5kIGZvciB7aW5wdXRWYWx1ZX08L0Ryb3BEb3duSXRlbT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Ryb3BEb3duPlxyXG4gICAgPC9TZWFyY2hTdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9