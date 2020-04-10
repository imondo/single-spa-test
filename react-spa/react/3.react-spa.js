(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Item = function Item() {
  return 'slot';
};

var List = function List(props) {
  console.log(props);
  var history = props.history;

  var goRoute = function goRoute() {
    history.push({
      pathname: "/page",
      state: {
        id: 2
      },
      params: {
        user: 'Mondo'
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, props.name, props.children, "\u8FD9\u662F\u5217\u8868\u9875", props.match ? JSON.stringify(props.match.params) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: goRoute
  }, "\u8DF3\u8F6C\u5230Page"));
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

}]);