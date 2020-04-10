(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83);






function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var ListC = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ListC, _Component);

  var _super = _createSuper(ListC);

  function ListC() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ListC);

    _this = _super.apply(this, arguments);
    _this.state = {
      h1: "这是conponent标题"
    };
    console.log(_this.props);
    return _this;
  } // 生命周期


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ListC, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log("willMount");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("didMount");
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      console.log("willUpdate");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log("didUpdate");
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("unmount");
    }
  }, {
    key: "handleClick",
    value: function handleClick(msg) {
      var _this2 = this;

      this.props.myClick("这是子组件的消息"); // 挂载在子组件上的事件

      this.setState(function (prevState, props) {
        console.log(prevState, props);
        return {
          h1: "修改的state"
        };
      }, function () {
        console.log(_this2.state.h1);
      });
      console.log(msg);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        onClick: function onClick(e) {
          return _this3.handleClick("呵呵");
        }
      }, this.state.h1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_6__["default"], {
        isShow: true
      }));
    }
  }]);

  return ListC;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ListC);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_common_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73);






function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var ItemShow = function ItemShow(props) {
  if (props.isShow) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "\u8FD9\u662F\u6761\u4EF6\u6E32\u67D3", props.value);
  }

  return null;
};

var Item = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Item, _Component);

  var _super = _createSuper(Item);

  function Item() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Item);

    _this = _super.apply(this, arguments);
    console.log(_this.context, 1);
    return _this;
  } // 生命周期


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Item, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log("\u8FD9\u662Fitem willMount");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("\u8FD9\u662Fitem didMount");
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      console.log("\u8FD9\u662Fitem willUpdate");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log("\u8FD9\u662Fitem didUpdate");
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("unmount");
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "\u8FD9\u662FItem", " ", [1, 2, 3].map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ItemShow, {
          key: item,
          isShow: true,
          value: item
        });
      }));
    }
  }]);

  return Item;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Item.contextType = _store_common_context__WEBPACK_IMPORTED_MODULE_6__["AppContext"];
/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ })

}]);