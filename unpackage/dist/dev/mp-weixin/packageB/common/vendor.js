(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["packageB/common/vendor"],{

/***/ 336:
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 337)();
module.exports = runtime;

/***/ }),

/***/ 337:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) {
              if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            }
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) {
      r.push(n);
    }
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) {
        "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      }
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 338:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 339:
/*!***********************************************************************!*\
  !*** D:/program/qxqx-vue/packageB/pages/live-info/uniapp.socketio.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23);
var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 24);
var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ 341);
var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 342);
var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 343);
var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 344);
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
!function (t, e) {
  if ("object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module))) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var n, r; }
}(window, function () {
  return function (t) {
    var e = {};
    function r(n) {
      if (e[n]) return e[n].exports;
      var o = e[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
    }
    return r.m = t, r.c = e, r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, r.t = function (t, e) {
      if (1 & e && (t = r(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var o in t) {
        r.d(n, o, function (e) {
          return t[e];
        }.bind(null, o));
      }
      return n;
    }, r.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return r.d(e, "a", e), e;
    }, r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, r.p = "", r(r.s = 18);
  }([function (t, e) {
    t.exports = function () {
      return function () {};
    };
  }, function (t, e, r) {
    function n(t) {
      if (t) return function (t) {
        for (var e in n.prototype) {
          t[e] = n.prototype[e];
        }
        return t;
      }(t);
    }
    t.exports = n, n.prototype.on = n.prototype.addEventListener = function (t, e) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
    }, n.prototype.once = function (t, e) {
      function r() {
        this.off(t, r), e.apply(this, arguments);
      }
      return r.fn = e, this.on(t, r), this;
    }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function (t, e) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
      var r,
        n = this._callbacks["$" + t];
      if (!n) return this;
      if (1 == arguments.length) return delete this._callbacks["$" + t], this;
      for (var o = 0; o < n.length; o++) {
        if ((r = n[o]) === e || r.fn === e) {
          n.splice(o, 1);
          break;
        }
      }
      return this;
    }, n.prototype.emit = function (t) {
      this._callbacks = this._callbacks || {};
      var e = [].slice.call(arguments, 1),
        r = this._callbacks["$" + t];
      if (r) for (var n = 0, o = (r = r.slice(0)).length; n < o; ++n) {
        r[n].apply(this, e);
      }
      return this;
    }, n.prototype.listeners = function (t) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
    }, n.prototype.hasListeners = function (t) {
      return !!this.listeners(t).length;
    };
  }, function (t, e, r) {
    var n,
      o = r(28),
      i = r(13),
      s = r(30),
      a = r(31),
      c = r(32);
    "undefined" != typeof ArrayBuffer && (n = r(33));
    var u = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
      h = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
      f = u || h;
    e.protocol = 3;
    var p = e.packets = {
        open: 0,
        close: 1,
        ping: 2,
        pong: 3,
        message: 4,
        upgrade: 5,
        noop: 6
      },
      l = o(p),
      d = {
        type: "error",
        data: "parser error"
      },
      y = r(34);
    function g(t, e, r) {
      for (var n = new Array(t.length), o = a(t.length, r), i = function i(t, r, o) {
          e(r, function (e, r) {
            n[t] = r, o(e, n);
          });
        }, s = 0; s < t.length; s++) {
        i(s, t[s], o);
      }
    }
    e.encodePacket = function (t, r, n, o) {
      "function" == typeof r && (o = r, r = !1), "function" == typeof n && (o = n, n = null);
      var i = void 0 === t.data ? void 0 : t.data.buffer || t.data;
      if ("undefined" != typeof ArrayBuffer && i instanceof ArrayBuffer) return function (t, r, n) {
        if (!r) return e.encodeBase64Packet(t, n);
        var o = t.data,
          i = new Uint8Array(o),
          s = new Uint8Array(1 + o.byteLength);
        s[0] = p[t.type];
        for (var a = 0; a < i.length; a++) {
          s[a + 1] = i[a];
        }
        return n(s.buffer);
      }(t, r, o);
      if (void 0 !== y && i instanceof y) return function (t, r, n) {
        if (!r) return e.encodeBase64Packet(t, n);
        if (f) return function (t, r, n) {
          if (!r) return e.encodeBase64Packet(t, n);
          var o = new FileReader();
          return o.onload = function () {
            e.encodePacket({
              type: t.type,
              data: o.result
            }, r, !0, n);
          }, o.readAsArrayBuffer(t.data);
        }(t, r, n);
        var o = new Uint8Array(1);
        o[0] = p[t.type];
        var i = new y([o.buffer, t.data]);
        return n(i);
      }(t, r, o);
      if (i && i.base64) return function (t, r) {
        var n = "b" + e.packets[t.type] + t.data.data;
        return r(n);
      }(t, o);
      var s = p[t.type];
      return void 0 !== t.data && (s += n ? c.encode(String(t.data), {
        strict: !1
      }) : String(t.data)), o("" + s);
    }, e.encodeBase64Packet = function (t, r) {
      var n,
        o = "b" + e.packets[t.type];
      if (void 0 !== y && t.data instanceof y) {
        var i = new FileReader();
        return i.onload = function () {
          var t = i.result.split(",")[1];
          r(o + t);
        }, i.readAsDataURL(t.data);
      }
      try {
        n = String.fromCharCode.apply(null, new Uint8Array(t.data));
      } catch (e) {
        for (var s = new Uint8Array(t.data), a = new Array(s.length), c = 0; c < s.length; c++) {
          a[c] = s[c];
        }
        n = String.fromCharCode.apply(null, a);
      }
      return o += btoa(n), r(o);
    }, e.decodePacket = function (t, r, n) {
      if (void 0 === t) return d;
      if ("string" == typeof t) {
        if ("b" === t.charAt(0)) return e.decodeBase64Packet(t.substr(1), r);
        if (n && !1 === (t = function (t) {
          try {
            t = c.decode(t, {
              strict: !1
            });
          } catch (t) {
            return !1;
          }
          return t;
        }(t))) return d;
        var o = t.charAt(0);
        return Number(o) == o && l[o] ? t.length > 1 ? {
          type: l[o],
          data: t.substring(1)
        } : {
          type: l[o]
        } : d;
      }
      o = new Uint8Array(t)[0];
      var i = s(t, 1);
      return y && "blob" === r && (i = new y([i])), {
        type: l[o],
        data: i
      };
    }, e.decodeBase64Packet = function (t, e) {
      var r = l[t.charAt(0)];
      if (!n) return {
        type: r,
        data: {
          base64: !0,
          data: t.substr(1)
        }
      };
      var o = n.decode(t.substr(1));
      return "blob" === e && y && (o = new y([o])), {
        type: r,
        data: o
      };
    }, e.encodePayload = function (t, r, n) {
      "function" == typeof r && (n = r, r = null);
      var o = i(t);
      if (r && o) return y && !f ? e.encodePayloadAsBlob(t, n) : e.encodePayloadAsArrayBuffer(t, n);
      if (!t.length) return n("0:");
      g(t, function (t, n) {
        e.encodePacket(t, !!o && r, !1, function (t) {
          n(null, function (t) {
            return t.length + ":" + t;
          }(t));
        });
      }, function (t, e) {
        return n(e.join(""));
      });
    }, e.decodePayload = function (t, r, n) {
      if ("string" != typeof t) return e.decodePayloadAsBinary(t, r, n);
      var o;
      if ("function" == typeof r && (n = r, r = null), "" === t) return n(d, 0, 1);
      for (var i, s, a = "", c = 0, u = t.length; c < u; c++) {
        var h = t.charAt(c);
        if (":" === h) {
          if ("" === a || a != (i = Number(a))) return n(d, 0, 1);
          if (a != (s = t.substr(c + 1, i)).length) return n(d, 0, 1);
          if (s.length) {
            if (o = e.decodePacket(s, r, !1), d.type === o.type && d.data === o.data) return n(d, 0, 1);
            if (!1 === n(o, c + i, u)) return;
          }
          c += i, a = "";
        } else a += h;
      }
      return "" !== a ? n(d, 0, 1) : void 0;
    }, e.encodePayloadAsArrayBuffer = function (t, r) {
      if (!t.length) return r(new ArrayBuffer(0));
      g(t, function (t, r) {
        e.encodePacket(t, !0, !0, function (t) {
          return r(null, t);
        });
      }, function (t, e) {
        var n = e.reduce(function (t, e) {
            var r;
            return t + (r = "string" == typeof e ? e.length : e.byteLength).toString().length + r + 2;
          }, 0),
          o = new Uint8Array(n),
          i = 0;
        return e.forEach(function (t) {
          var e = "string" == typeof t,
            r = t;
          if (e) {
            for (var n = new Uint8Array(t.length), s = 0; s < t.length; s++) {
              n[s] = t.charCodeAt(s);
            }
            r = n.buffer;
          }
          o[i++] = e ? 0 : 1;
          var a = r.byteLength.toString();
          for (s = 0; s < a.length; s++) {
            o[i++] = parseInt(a[s]);
          }
          o[i++] = 255;
          for (n = new Uint8Array(r), s = 0; s < n.length; s++) {
            o[i++] = n[s];
          }
        }), r(o.buffer);
      });
    }, e.encodePayloadAsBlob = function (t, r) {
      g(t, function (t, r) {
        e.encodePacket(t, !0, !0, function (t) {
          var e = new Uint8Array(1);
          if (e[0] = 1, "string" == typeof t) {
            for (var n = new Uint8Array(t.length), o = 0; o < t.length; o++) {
              n[o] = t.charCodeAt(o);
            }
            t = n.buffer, e[0] = 0;
          }
          var i = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString(),
            s = new Uint8Array(i.length + 1);
          for (o = 0; o < i.length; o++) {
            s[o] = parseInt(i[o]);
          }
          if (s[i.length] = 255, y) {
            var a = new y([e.buffer, s.buffer, t]);
            r(null, a);
          }
        });
      }, function (t, e) {
        return r(new y(e));
      });
    }, e.decodePayloadAsBinary = function (t, r, n) {
      "function" == typeof r && (n = r, r = null);
      for (var o = t, i = []; o.byteLength > 0;) {
        for (var a = new Uint8Array(o), c = 0 === a[0], u = "", h = 1; 255 !== a[h]; h++) {
          if (u.length > 310) return n(d, 0, 1);
          u += a[h];
        }
        o = s(o, 2 + u.length), u = parseInt(u);
        var f = s(o, 0, u);
        if (c) try {
          f = String.fromCharCode.apply(null, new Uint8Array(f));
        } catch (t) {
          var p = new Uint8Array(f);
          f = "";
          for (h = 0; h < p.length; h++) {
            f += String.fromCharCode(p[h]);
          }
        }
        i.push(f), o = s(o, u);
      }
      var l = i.length;
      i.forEach(function (t, o) {
        n(e.decodePacket(t, r, !0), o, l);
      });
    };
  }, function (t, e, r) {
    var n = r(0)("socket.io-parser"),
      o = r(1),
      i = r(21),
      s = r(7),
      a = r(8);
    function c() {}
    e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = c, e.Decoder = f;
    var u = e.ERROR + '"encode error"';
    function h(t) {
      var r = "" + t.type;
      if (e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (r += t.attachments + "-"), t.nsp && "/" !== t.nsp && (r += t.nsp + ","), null != t.id && (r += t.id), null != t.data) {
        var o = function (t) {
          try {
            return JSON.stringify(t);
          } catch (t) {
            return !1;
          }
        }(t.data);
        if (!1 === o) return u;
        r += o;
      }
      return n("encoded %j as %s", t, r), r;
    }
    function f() {
      this.reconstructor = null;
    }
    function p(t) {
      this.reconPack = t, this.buffers = [];
    }
    function l(t) {
      return {
        type: e.ERROR,
        data: "parser error: " + t
      };
    }
    c.prototype.encode = function (t, r) {
      (n("encoding packet %j", t), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type) ? function (t, e) {
        i.removeBlobs(t, function (t) {
          var r = i.deconstructPacket(t),
            n = h(r.packet),
            o = r.buffers;
          o.unshift(n), e(o);
        });
      }(t, r) : r([h(t)]);
    }, o(f.prototype), f.prototype.add = function (t) {
      var r;
      if ("string" == typeof t) r = function (t) {
        var r = 0,
          o = {
            type: Number(t.charAt(0))
          };
        if (null == e.types[o.type]) return l("unknown packet type " + o.type);
        if (e.BINARY_EVENT === o.type || e.BINARY_ACK === o.type) {
          for (var i = ""; "-" !== t.charAt(++r) && (i += t.charAt(r), r != t.length);) {
            ;
          }
          if (i != Number(i) || "-" !== t.charAt(r)) throw new Error("Illegal attachments");
          o.attachments = Number(i);
        }
        if ("/" === t.charAt(r + 1)) for (o.nsp = ""; ++r;) {
          if ("," === (c = t.charAt(r))) break;
          if (o.nsp += c, r === t.length) break;
        } else o.nsp = "/";
        var a = t.charAt(r + 1);
        if ("" !== a && Number(a) == a) {
          for (o.id = ""; ++r;) {
            var c;
            if (null == (c = t.charAt(r)) || Number(c) != c) {
              --r;
              break;
            }
            if (o.id += t.charAt(r), r === t.length) break;
          }
          o.id = Number(o.id);
        }
        if (t.charAt(++r)) {
          var u = function (t) {
            try {
              return JSON.parse(t);
            } catch (t) {
              return !1;
            }
          }(t.substr(r));
          if (!(!1 !== u && (o.type === e.ERROR || s(u)))) return l("invalid payload");
          o.data = u;
        }
        return n("decoded %s as %j", t, o), o;
      }(t), e.BINARY_EVENT === r.type || e.BINARY_ACK === r.type ? (this.reconstructor = new p(r), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", r)) : this.emit("decoded", r);else {
        if (!a(t) && !t.base64) throw new Error("Unknown type: " + t);
        if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
        (r = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, this.emit("decoded", r));
      }
    }, f.prototype.destroy = function () {
      this.reconstructor && this.reconstructor.finishedReconstruction();
    }, p.prototype.takeBinaryData = function (t) {
      if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
        var e = i.reconstructPacket(this.reconPack, this.buffers);
        return this.finishedReconstruction(), e;
      }
      return null;
    }, p.prototype.finishedReconstruction = function () {
      this.reconPack = null, this.buffers = [];
    };
  }, function (t, e) {
    var r;
    r = function () {
      return this;
    }();
    try {
      r = r || new Function("return this")();
    } catch (t) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (r = window);
    }
    t.exports = r;
  }, function (t, e) {
    e.encode = function (t) {
      var e = "";
      for (var r in t) {
        t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
      }
      return e;
    }, e.decode = function (t) {
      for (var e = {}, r = t.split("&"), n = 0, o = r.length; n < o; n++) {
        var i = r[n].split("=");
        e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
      }
      return e;
    };
  }, function (t, e) {
    var r = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
      n = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    t.exports = function (t) {
      var e = t,
        o = t.indexOf("["),
        i = t.indexOf("]");
      -1 != o && -1 != i && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length));
      for (var s = r.exec(t || ""), a = {}, c = 14; c--;) {
        a[n[c]] = s[c] || "";
      }
      return -1 != o && -1 != i && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a;
    };
  }, function (t, e) {
    var r = {}.toString;
    t.exports = Array.isArray || function (t) {
      return "[object Array]" == r.call(t);
    };
  }, function (t, e, r) {
    (function (e) {
      t.exports = function (t) {
        return r && e.isBuffer(t) || n && (t instanceof ArrayBuffer || o(t));
      };
      var r = "function" == typeof e && "function" == typeof e.isBuffer,
        n = "function" == typeof ArrayBuffer,
        o = function o(t) {
          return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer;
        };
    }).call(this, r(9).Buffer);
  }, function (t, e, r) {
    "use strict";

    (function (t) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <http://feross.org>
       * @license  MIT
       */
      var n = r(22),
        o = r(23),
        i = r(24);
      function s() {
        return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function a(t, e) {
        if (s() < e) throw new RangeError("Invalid typed array length");
        return c.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = c.prototype : (null === t && (t = new c(e)), t.length = e), t;
      }
      function c(t, e, r) {
        if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(t, e, r);
        if ("number" == typeof t) {
          if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
          return f(this, t);
        }
        return u(this, t, e, r);
      }
      function u(t, e, r, n) {
        if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, r, n) {
          if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");
          if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
          e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n);
          c.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = c.prototype : t = p(t, e);
          return t;
        }(t, e, r, n) : "string" == typeof e ? function (t, e, r) {
          "string" == typeof r && "" !== r || (r = "utf8");
          if (!c.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
          var n = 0 | d(e, r),
            o = (t = a(t, n)).write(e, r);
          o !== n && (t = t.slice(0, o));
          return t;
        }(t, e, r) : function (t, e) {
          if (c.isBuffer(e)) {
            var r = 0 | l(e.length);
            return 0 === (t = a(t, r)).length ? t : (e.copy(t, 0, 0, r), t);
          }
          if (e) {
            if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (n = e.length) != n ? a(t, 0) : p(t, e);
            if ("Buffer" === e.type && i(e.data)) return p(t, e.data);
          }
          var n;
          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        }(t, e);
      }
      function h(t) {
        if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
        if (t < 0) throw new RangeError('"size" argument must not be negative');
      }
      function f(t, e) {
        if (h(e), t = a(t, e < 0 ? 0 : 0 | l(e)), !c.TYPED_ARRAY_SUPPORT) for (var r = 0; r < e; ++r) {
          t[r] = 0;
        }
        return t;
      }
      function p(t, e) {
        var r = e.length < 0 ? 0 : 0 | l(e.length);
        t = a(t, r);
        for (var n = 0; n < r; n += 1) {
          t[n] = 255 & e[n];
        }
        return t;
      }
      function l(t) {
        if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
        return 0 | t;
      }
      function d(t, e) {
        if (c.isBuffer(t)) return t.length;
        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
        "string" != typeof t && (t = "" + t);
        var r = t.length;
        if (0 === r) return 0;
        for (var n = !1;;) {
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
            case void 0:
              return q(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return F(t).length;
            default:
              if (n) return q(t).length;
              e = ("" + e).toLowerCase(), n = !0;
          }
        }
      }
      function y(t, e, r) {
        var n = !1;
        if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
        if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
        if ((r >>>= 0) <= (e >>>= 0)) return "";
        for (t || (t = "utf8");;) {
          switch (t) {
            case "hex":
              return C(this, e, r);
            case "utf8":
            case "utf-8":
              return S(this, e, r);
            case "ascii":
              return P(this, e, r);
            case "latin1":
            case "binary":
              return T(this, e, r);
            case "base64":
              return B(this, e, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return O(this, e, r);
            default:
              if (n) throw new TypeError("Unknown encoding: " + t);
              t = (t + "").toLowerCase(), n = !0;
          }
        }
      }
      function g(t, e, r) {
        var n = t[e];
        t[e] = t[r], t[r] = n;
      }
      function v(t, e, r, n, o) {
        if (0 === t.length) return -1;
        if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = o ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
          if (o) return -1;
          r = t.length - 1;
        } else if (r < 0) {
          if (!o) return -1;
          r = 0;
        }
        if ("string" == typeof e && (e = c.from(e, n)), c.isBuffer(e)) return 0 === e.length ? -1 : m(t, e, r, n, o);
        if ("number" == typeof e) return e &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : m(t, [e], r, n, o);
        throw new TypeError("val must be string, number or Buffer");
      }
      function m(t, e, r, n, o) {
        var i,
          s = 1,
          a = t.length,
          c = e.length;
        if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
          if (t.length < 2 || e.length < 2) return -1;
          s = 2, a /= 2, c /= 2, r /= 2;
        }
        function u(t, e) {
          return 1 === s ? t[e] : t.readUInt16BE(e * s);
        }
        if (o) {
          var h = -1;
          for (i = r; i < a; i++) {
            if (u(t, i) === u(e, -1 === h ? 0 : i - h)) {
              if (-1 === h && (h = i), i - h + 1 === c) return h * s;
            } else -1 !== h && (i -= i - h), h = -1;
          }
        } else for (r + c > a && (r = a - c), i = r; i >= 0; i--) {
          for (var f = !0, p = 0; p < c; p++) {
            if (u(t, i + p) !== u(e, p)) {
              f = !1;
              break;
            }
          }
          if (f) return i;
        }
        return -1;
      }
      function b(t, e, r, n) {
        r = Number(r) || 0;
        var o = t.length - r;
        n ? (n = Number(n)) > o && (n = o) : n = o;
        var i = e.length;
        if (i % 2 != 0) throw new TypeError("Invalid hex string");
        n > i / 2 && (n = i / 2);
        for (var s = 0; s < n; ++s) {
          var a = parseInt(e.substr(2 * s, 2), 16);
          if (isNaN(a)) return s;
          t[r + s] = a;
        }
        return s;
      }
      function w(t, e, r, n) {
        return z(q(e, t.length - r), t, r, n);
      }
      function A(t, e, r, n) {
        return z(function (t) {
          for (var e = [], r = 0; r < t.length; ++r) {
            e.push(255 & t.charCodeAt(r));
          }
          return e;
        }(e), t, r, n);
      }
      function k(t, e, r, n) {
        return A(t, e, r, n);
      }
      function E(t, e, r, n) {
        return z(F(e), t, r, n);
      }
      function _(t, e, r, n) {
        return z(function (t, e) {
          for (var r, n, o, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) {
            r = t.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n);
          }
          return i;
        }(e, t.length - r), t, r, n);
      }
      function B(t, e, r) {
        return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));
      }
      function S(t, e, r) {
        r = Math.min(t.length, r);
        for (var n = [], o = e; o < r;) {
          var i,
            s,
            a,
            c,
            u = t[o],
            h = null,
            f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
          if (o + f <= r) switch (f) {
            case 1:
              u < 128 && (h = u);
              break;
            case 2:
              128 == (192 & (i = t[o + 1])) && (c = (31 & u) << 6 | 63 & i) > 127 && (h = c);
              break;
            case 3:
              i = t[o + 1], s = t[o + 2], 128 == (192 & i) && 128 == (192 & s) && (c = (15 & u) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (c < 55296 || c > 57343) && (h = c);
              break;
            case 4:
              i = t[o + 1], s = t[o + 2], a = t[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (c = (15 & u) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && c < 1114112 && (h = c);
          }
          null === h ? (h = 65533, f = 1) : h > 65535 && (h -= 65536, n.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), n.push(h), o += f;
        }
        return function (t) {
          var e = t.length;
          if (e <= R) return String.fromCharCode.apply(String, t);
          var r = "",
            n = 0;
          for (; n < e;) {
            r += String.fromCharCode.apply(String, t.slice(n, n += R));
          }
          return r;
        }(n);
      }
      e.Buffer = c, e.SlowBuffer = function (t) {
        +t != t && (t = 0);
        return c.alloc(+t);
      }, e.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
        try {
          var t = new Uint8Array(1);
          return t.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function foo() {
              return 42;
            }
          }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
        } catch (t) {
          return !1;
        }
      }(), e.kMaxLength = s(), c.poolSize = 8192, c._augment = function (t) {
        return t.__proto__ = c.prototype, t;
      }, c.from = function (t, e, r) {
        return u(null, t, e, r);
      }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
        value: null,
        configurable: !0
      })), c.alloc = function (t, e, r) {
        return function (t, e, r, n) {
          return h(e), e <= 0 ? a(t, e) : void 0 !== r ? "string" == typeof n ? a(t, e).fill(r, n) : a(t, e).fill(r) : a(t, e);
        }(null, t, e, r);
      }, c.allocUnsafe = function (t) {
        return f(null, t);
      }, c.allocUnsafeSlow = function (t) {
        return f(null, t);
      }, c.isBuffer = function (t) {
        return !(null == t || !t._isBuffer);
      }, c.compare = function (t, e) {
        if (!c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
        if (t === e) return 0;
        for (var r = t.length, n = e.length, o = 0, i = Math.min(r, n); o < i; ++o) {
          if (t[o] !== e[o]) {
            r = t[o], n = e[o];
            break;
          }
        }
        return r < n ? -1 : n < r ? 1 : 0;
      }, c.isEncoding = function (t) {
        switch (String(t).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return !0;
          default:
            return !1;
        }
      }, c.concat = function (t, e) {
        if (!i(t)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === t.length) return c.alloc(0);
        var r;
        if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) {
          e += t[r].length;
        }
        var n = c.allocUnsafe(e),
          o = 0;
        for (r = 0; r < t.length; ++r) {
          var s = t[r];
          if (!c.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
          s.copy(n, o), o += s.length;
        }
        return n;
      }, c.byteLength = d, c.prototype._isBuffer = !0, c.prototype.swap16 = function () {
        var t = this.length;
        if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var e = 0; e < t; e += 2) {
          g(this, e, e + 1);
        }
        return this;
      }, c.prototype.swap32 = function () {
        var t = this.length;
        if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var e = 0; e < t; e += 4) {
          g(this, e, e + 3), g(this, e + 1, e + 2);
        }
        return this;
      }, c.prototype.swap64 = function () {
        var t = this.length;
        if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var e = 0; e < t; e += 8) {
          g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);
        }
        return this;
      }, c.prototype.toString = function () {
        var t = 0 | this.length;
        return 0 === t ? "" : 0 === arguments.length ? S(this, 0, t) : y.apply(this, arguments);
      }, c.prototype.equals = function (t) {
        if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
        return this === t || 0 === c.compare(this, t);
      }, c.prototype.inspect = function () {
        var t = "",
          r = e.INSPECT_MAX_BYTES;
        return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">";
      }, c.prototype.compare = function (t, e, r, n, o) {
        if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
        if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), e < 0 || r > t.length || n < 0 || o > this.length) throw new RangeError("out of range index");
        if (n >= o && e >= r) return 0;
        if (n >= o) return -1;
        if (e >= r) return 1;
        if (this === t) return 0;
        for (var i = (o >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (e >>>= 0), a = Math.min(i, s), u = this.slice(n, o), h = t.slice(e, r), f = 0; f < a; ++f) {
          if (u[f] !== h[f]) {
            i = u[f], s = h[f];
            break;
          }
        }
        return i < s ? -1 : s < i ? 1 : 0;
      }, c.prototype.includes = function (t, e, r) {
        return -1 !== this.indexOf(t, e, r);
      }, c.prototype.indexOf = function (t, e, r) {
        return v(this, t, e, r, !0);
      }, c.prototype.lastIndexOf = function (t, e, r) {
        return v(this, t, e, r, !1);
      }, c.prototype.write = function (t, e, r, n) {
        if (void 0 === e) n = "utf8", r = this.length, e = 0;else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;else {
          if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          e |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
        }
        var o = this.length - e;
        if ((void 0 === r || r > o) && (r = o), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        n || (n = "utf8");
        for (var i = !1;;) {
          switch (n) {
            case "hex":
              return b(this, t, e, r);
            case "utf8":
            case "utf-8":
              return w(this, t, e, r);
            case "ascii":
              return A(this, t, e, r);
            case "latin1":
            case "binary":
              return k(this, t, e, r);
            case "base64":
              return E(this, t, e, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return _(this, t, e, r);
            default:
              if (i) throw new TypeError("Unknown encoding: " + n);
              n = ("" + n).toLowerCase(), i = !0;
          }
        }
      }, c.prototype.toJSON = function () {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      var R = 4096;
      function P(t, e, r) {
        var n = "";
        r = Math.min(t.length, r);
        for (var o = e; o < r; ++o) {
          n += String.fromCharCode(127 & t[o]);
        }
        return n;
      }
      function T(t, e, r) {
        var n = "";
        r = Math.min(t.length, r);
        for (var o = e; o < r; ++o) {
          n += String.fromCharCode(t[o]);
        }
        return n;
      }
      function C(t, e, r) {
        var n = t.length;
        (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
        for (var o = "", i = e; i < r; ++i) {
          o += Y(t[i]);
        }
        return o;
      }
      function O(t, e, r) {
        for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2) {
          o += String.fromCharCode(n[i] + 256 * n[i + 1]);
        }
        return o;
      }
      function x(t, e, r) {
        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
      }
      function L(t, e, r, n, o, i) {
        if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
        if (r + n > t.length) throw new RangeError("Index out of range");
      }
      function N(t, e, r, n) {
        e < 0 && (e = 65535 + e + 1);
        for (var o = 0, i = Math.min(t.length - r, 2); o < i; ++o) {
          t[r + o] = (e & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o);
        }
      }
      function U(t, e, r, n) {
        e < 0 && (e = 4294967295 + e + 1);
        for (var o = 0, i = Math.min(t.length - r, 4); o < i; ++o) {
          t[r + o] = e >>> 8 * (n ? o : 3 - o) & 255;
        }
      }
      function I(t, e, r, n, o, i) {
        if (r + n > t.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }
      function j(t, e, r, n, i) {
        return i || I(t, 0, r, 4), o.write(t, e, r, n, 23, 4), r + 4;
      }
      function M(t, e, r, n, i) {
        return i || I(t, 0, r, 8), o.write(t, e, r, n, 52, 8), r + 8;
      }
      c.prototype.slice = function (t, e) {
        var r,
          n = this.length;
        if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t), c.TYPED_ARRAY_SUPPORT) (r = this.subarray(t, e)).__proto__ = c.prototype;else {
          var o = e - t;
          r = new c(o, void 0);
          for (var i = 0; i < o; ++i) {
            r[i] = this[i + t];
          }
        }
        return r;
      }, c.prototype.readUIntLE = function (t, e, r) {
        t |= 0, e |= 0, r || x(t, e, this.length);
        for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) {
          n += this[t + i] * o;
        }
        return n;
      }, c.prototype.readUIntBE = function (t, e, r) {
        t |= 0, e |= 0, r || x(t, e, this.length);
        for (var n = this[t + --e], o = 1; e > 0 && (o *= 256);) {
          n += this[t + --e] * o;
        }
        return n;
      }, c.prototype.readUInt8 = function (t, e) {
        return e || x(t, 1, this.length), this[t];
      }, c.prototype.readUInt16LE = function (t, e) {
        return e || x(t, 2, this.length), this[t] | this[t + 1] << 8;
      }, c.prototype.readUInt16BE = function (t, e) {
        return e || x(t, 2, this.length), this[t] << 8 | this[t + 1];
      }, c.prototype.readUInt32LE = function (t, e) {
        return e || x(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
      }, c.prototype.readUInt32BE = function (t, e) {
        return e || x(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
      }, c.prototype.readIntLE = function (t, e, r) {
        t |= 0, e |= 0, r || x(t, e, this.length);
        for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) {
          n += this[t + i] * o;
        }
        return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n;
      }, c.prototype.readIntBE = function (t, e, r) {
        t |= 0, e |= 0, r || x(t, e, this.length);
        for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256);) {
          i += this[t + --n] * o;
        }
        return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
      }, c.prototype.readInt8 = function (t, e) {
        return e || x(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
      }, c.prototype.readInt16LE = function (t, e) {
        e || x(t, 2, this.length);
        var r = this[t] | this[t + 1] << 8;
        return 32768 & r ? 4294901760 | r : r;
      }, c.prototype.readInt16BE = function (t, e) {
        e || x(t, 2, this.length);
        var r = this[t + 1] | this[t] << 8;
        return 32768 & r ? 4294901760 | r : r;
      }, c.prototype.readInt32LE = function (t, e) {
        return e || x(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
      }, c.prototype.readInt32BE = function (t, e) {
        return e || x(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
      }, c.prototype.readFloatLE = function (t, e) {
        return e || x(t, 4, this.length), o.read(this, t, !0, 23, 4);
      }, c.prototype.readFloatBE = function (t, e) {
        return e || x(t, 4, this.length), o.read(this, t, !1, 23, 4);
      }, c.prototype.readDoubleLE = function (t, e) {
        return e || x(t, 8, this.length), o.read(this, t, !0, 52, 8);
      }, c.prototype.readDoubleBE = function (t, e) {
        return e || x(t, 8, this.length), o.read(this, t, !1, 52, 8);
      }, c.prototype.writeUIntLE = function (t, e, r, n) {
        (t = +t, e |= 0, r |= 0, n) || L(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
        var o = 1,
          i = 0;
        for (this[e] = 255 & t; ++i < r && (o *= 256);) {
          this[e + i] = t / o & 255;
        }
        return e + r;
      }, c.prototype.writeUIntBE = function (t, e, r, n) {
        (t = +t, e |= 0, r |= 0, n) || L(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
        var o = r - 1,
          i = 1;
        for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) {
          this[e + o] = t / i & 255;
        }
        return e + r;
      }, c.prototype.writeUInt8 = function (t, e, r) {
        return t = +t, e |= 0, r || L(this, t, e, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1;
      }, c.prototype.writeUInt16LE = function (t, e, r) {
        return t = +t, e |= 0, r || L(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2;
      }, c.prototype.writeUInt16BE = function (t, e, r) {
        return t = +t, e |= 0, r || L(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2;
      }, c.prototype.writeUInt32LE = function (t, e, r) {
        return t = +t, e |= 0, r || L(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : U(this, t, e, !0), e + 4;
      }, c.prototype.writeUInt32BE = function (t, e, r) {
        return t = +t, e |= 0, r || L(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : U(this, t, e, !1), e + 4;
      }, c.prototype.writeIntLE = function (t, e, r, n) {
        if (t = +t, e |= 0, !n) {
          var o = Math.pow(2, 8 * r - 1);
          L(this, t, e, r, o - 1, -o);
        }
        var i = 0,
          s = 1,
          a = 0;
        for (this[e] = 255 & t; ++i < r && (s *= 256);) {
          t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255;
        }
        return e + r;
      }, c.prototype.writeIntBE = function (t, e, r, n) {
        if (t = +t, e |= 0, !n) {
          var o = Math.pow(2, 8 * r - 1);
          L(this, t, e, r, o - 1, -o);
        }
        var i = r - 1,
          s = 1,
          a = 0;
        for (this[e + i] = 255 & t; --i >= 0 && (s *= 256);) {
          t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255;
        }
        return e + r;
      }, c.prototype.writeInt8 = function (t, e, r) {
        return t = +t, e |= 0, r || L(this, t, e, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
      }, c.prototype.writeInt16LE = function (t, e, r) {
        return t = +t, e |= 0, r || L(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2;
      }, c.prototype.writeInt16BE = function (t, e, r) {
        return t = +t, e |= 0, r || L(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2;
      }, c.prototype.writeInt32LE = function (t, e, r) {
        return t = +t, e |= 0, r || L(this, t, e, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : U(this, t, e, !0), e + 4;
      }, c.prototype.writeInt32BE = function (t, e, r) {
        return t = +t, e |= 0, r || L(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : U(this, t, e, !1), e + 4;
      }, c.prototype.writeFloatLE = function (t, e, r) {
        return j(this, t, e, !0, r);
      }, c.prototype.writeFloatBE = function (t, e, r) {
        return j(this, t, e, !1, r);
      }, c.prototype.writeDoubleLE = function (t, e, r) {
        return M(this, t, e, !0, r);
      }, c.prototype.writeDoubleBE = function (t, e, r) {
        return M(this, t, e, !1, r);
      }, c.prototype.copy = function (t, e, r, n) {
        if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
        if (0 === t.length || 0 === this.length) return 0;
        if (e < 0) throw new RangeError("targetStart out of bounds");
        if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
        if (n < 0) throw new RangeError("sourceEnd out of bounds");
        n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
        var o,
          i = n - r;
        if (this === t && r < e && e < n) for (o = i - 1; o >= 0; --o) {
          t[o + e] = this[o + r];
        } else if (i < 1e3 || !c.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) {
          t[o + e] = this[o + r];
        } else Uint8Array.prototype.set.call(t, this.subarray(r, r + i), e);
        return i;
      }, c.prototype.fill = function (t, e, r, n) {
        if ("string" == typeof t) {
          if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === t.length) {
            var o = t.charCodeAt(0);
            o < 256 && (t = o);
          }
          if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
          if ("string" == typeof n && !c.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
        } else "number" == typeof t && (t &= 255);
        if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
        if (r <= e) return this;
        var i;
        if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t) for (i = e; i < r; ++i) {
          this[i] = t;
        } else {
          var s = c.isBuffer(t) ? t : q(new c(t, n).toString()),
            a = s.length;
          for (i = 0; i < r - e; ++i) {
            this[i + e] = s[i % a];
          }
        }
        return this;
      };
      var D = /[^+\/0-9A-Za-z-_]/g;
      function Y(t) {
        return t < 16 ? "0" + t.toString(16) : t.toString(16);
      }
      function q(t, e) {
        var r;
        e = e || 1 / 0;
        for (var n = t.length, o = null, i = [], s = 0; s < n; ++s) {
          if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
            if (!o) {
              if (r > 56319) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              if (s + 1 === n) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = r;
              continue;
            }
            if (r < 56320) {
              (e -= 3) > -1 && i.push(239, 191, 189), o = r;
              continue;
            }
            r = 65536 + (o - 55296 << 10 | r - 56320);
          } else o && (e -= 3) > -1 && i.push(239, 191, 189);
          if (o = null, r < 128) {
            if ((e -= 1) < 0) break;
            i.push(r);
          } else if (r < 2048) {
            if ((e -= 2) < 0) break;
            i.push(r >> 6 | 192, 63 & r | 128);
          } else if (r < 65536) {
            if ((e -= 3) < 0) break;
            i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
          }
        }
        return i;
      }
      function F(t) {
        return n.toByteArray(function (t) {
          if ((t = function (t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
          }(t).replace(D, "")).length < 2) return "";
          for (; t.length % 4 != 0;) {
            t += "=";
          }
          return t;
        }(t));
      }
      function z(t, e, r, n) {
        for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o) {
          e[o + r] = t[o];
        }
        return o;
      }
    }).call(this, r(4));
  }, function (t, e, r) {
    var n = r(25),
      o = r(15),
      i = r(1),
      s = r(3),
      a = r(16),
      c = r(17),
      u = r(0)("socket.io-client:manager"),
      h = r(14),
      f = r(41),
      p = Object.prototype.hasOwnProperty;
    function l(t, e) {
      if (!(this instanceof l)) return new l(t, e);
      t && "object" == _typeof(t) && (e = t, t = void 0), (e = e || {}).path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(!1 !== e.reconnection), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new f({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor()
      }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
      var r = e.parser || s;
      this.encoder = new r.Encoder(), this.decoder = new r.Decoder(), this.autoConnect = !1 !== e.autoConnect, this.autoConnect && this.open();
    }
    t.exports = l, l.prototype.emitAll = function () {
      for (var t in this.emit.apply(this, arguments), this.nsps) {
        p.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments);
      }
    }, l.prototype.updateSocketIds = function () {
      for (var t in this.nsps) {
        p.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t));
      }
    }, l.prototype.generateId = function (t) {
      return ("/" === t ? "" : t + "#") + this.engine.id;
    }, i(l.prototype), l.prototype.reconnection = function (t) {
      return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
    }, l.prototype.reconnectionAttempts = function (t) {
      return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts;
    }, l.prototype.reconnectionDelay = function (t) {
      return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay;
    }, l.prototype.randomizationFactor = function (t) {
      return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor;
    }, l.prototype.reconnectionDelayMax = function (t) {
      return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax;
    }, l.prototype.timeout = function (t) {
      return arguments.length ? (this._timeout = t, this) : this._timeout;
    }, l.prototype.maybeReconnectOnOpen = function () {
      !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
    }, l.prototype.open = l.prototype.connect = function (t, e) {
      if (u("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
      u("opening %s", this.uri), this.engine = n(this.uri, this.opts);
      var r = this.engine,
        o = this;
      this.readyState = "opening", this.skipReconnect = !1;
      var i = a(r, "open", function () {
          o.onopen(), t && t();
        }),
        s = a(r, "error", function (e) {
          if (u("connect_error"), o.cleanup(), o.readyState = "closed", o.emitAll("connect_error", e), t) {
            var r = new Error("Connection error");
            r.data = e, t(r);
          } else o.maybeReconnectOnOpen();
        });
      if (!1 !== this._timeout) {
        var c = this._timeout;
        u("connect attempt will timeout after %d", c);
        var h = setTimeout(function () {
          u("connect attempt timed out after %d", c), i.destroy(), r.close(), r.emit("error", "timeout"), o.emitAll("connect_timeout", c);
        }, c);
        this.subs.push({
          destroy: function destroy() {
            clearTimeout(h);
          }
        });
      }
      return this.subs.push(i), this.subs.push(s), this;
    }, l.prototype.onopen = function () {
      u("open"), this.cleanup(), this.readyState = "open", this.emit("open");
      var t = this.engine;
      this.subs.push(a(t, "data", c(this, "ondata"))), this.subs.push(a(t, "ping", c(this, "onping"))), this.subs.push(a(t, "pong", c(this, "onpong"))), this.subs.push(a(t, "error", c(this, "onerror"))), this.subs.push(a(t, "close", c(this, "onclose"))), this.subs.push(a(this.decoder, "decoded", c(this, "ondecoded")));
    }, l.prototype.onping = function () {
      this.lastPing = new Date(), this.emitAll("ping");
    }, l.prototype.onpong = function () {
      this.emitAll("pong", new Date() - this.lastPing);
    }, l.prototype.ondata = function (t) {
      this.decoder.add(t);
    }, l.prototype.ondecoded = function (t) {
      this.emit("packet", t);
    }, l.prototype.onerror = function (t) {
      u("error", t), this.emitAll("error", t);
    }, l.prototype.socket = function (t, e) {
      var r = this.nsps[t];
      if (!r) {
        r = new o(this, t, e), this.nsps[t] = r;
        var n = this;
        r.on("connecting", i), r.on("connect", function () {
          r.id = n.generateId(t);
        }), this.autoConnect && i();
      }
      function i() {
        ~h(n.connecting, r) || n.connecting.push(r);
      }
      return r;
    }, l.prototype.destroy = function (t) {
      var e = h(this.connecting, t);
      ~e && this.connecting.splice(e, 1), this.connecting.length || this.close();
    }, l.prototype.packet = function (t) {
      u("writing packet %j", t);
      var e = this;
      t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, function (r) {
        for (var n = 0; n < r.length; n++) {
          e.engine.write(r[n], t.options);
        }
        e.encoding = !1, e.processPacketQueue();
      }));
    }, l.prototype.processPacketQueue = function () {
      if (this.packetBuffer.length > 0 && !this.encoding) {
        var t = this.packetBuffer.shift();
        this.packet(t);
      }
    }, l.prototype.cleanup = function () {
      u("cleanup");
      for (var t = this.subs.length, e = 0; e < t; e++) {
        this.subs.shift().destroy();
      }
      this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();
    }, l.prototype.close = l.prototype.disconnect = function () {
      u("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();
    }, l.prototype.onclose = function (t) {
      u("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect();
    }, l.prototype.reconnect = function () {
      if (this.reconnecting || this.skipReconnect) return this;
      var t = this;
      if (this.backoff.attempts >= this._reconnectionAttempts) u("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;else {
        var e = this.backoff.duration();
        u("will wait %dms before reconnect attempt", e), this.reconnecting = !0;
        var r = setTimeout(function () {
          t.skipReconnect || (u("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function (e) {
            e ? (u("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (u("reconnect success"), t.onreconnect());
          }));
        }, e);
        this.subs.push({
          destroy: function destroy() {
            clearTimeout(r);
          }
        });
      }
    }, l.prototype.onreconnect = function () {
      var t = this.backoff.attempts;
      this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t);
    };
  }, function (t, e, r) {
    var n = r(27);
    e.websocket = n;
  }, function (t, e, r) {
    var n = r(2),
      o = r(1);
    function i(t) {
      this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress;
    }
    t.exports = i, o(i.prototype), i.prototype.onError = function (t, e) {
      var r = new Error(t);
      return r.type = "TransportError", r.description = e, this.emit("error", r), this;
    }, i.prototype.open = function () {
      return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this;
    }, i.prototype.close = function () {
      return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;
    }, i.prototype.send = function (t) {
      if ("open" !== this.readyState) throw new Error("Transport not open");
      this.write(t);
    }, i.prototype.onOpen = function () {
      this.readyState = "open", this.writable = !0, this.emit("open");
    }, i.prototype.onData = function (t) {
      var e = n.decodePacket(t, this.socket.binaryType);
      this.onPacket(e);
    }, i.prototype.onPacket = function (t) {
      this.emit("packet", t);
    }, i.prototype.onClose = function () {
      this.readyState = "closed", this.emit("close");
    };
  }, function (t, e, r) {
    (function (e) {
      var n = r(29),
        o = Object.prototype.toString,
        i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob),
        s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);
      t.exports = function t(r) {
        if (!r || "object" != _typeof(r)) return !1;
        if (n(r)) {
          for (var o = 0, a = r.length; o < a; o++) {
            if (t(r[o])) return !0;
          }
          return !1;
        }
        if ("function" == typeof e && e.isBuffer && e.isBuffer(r) || "function" == typeof ArrayBuffer && r instanceof ArrayBuffer || i && r instanceof Blob || s && r instanceof File) return !0;
        if (r.toJSON && "function" == typeof r.toJSON && 1 === arguments.length) return t(r.toJSON(), !0);
        for (var c in r) {
          if (Object.prototype.hasOwnProperty.call(r, c) && t(r[c])) return !0;
        }
        return !1;
      };
    }).call(this, r(9).Buffer);
  }, function (t, e) {
    var r = [].indexOf;
    t.exports = function (t, e) {
      if (r) return t.indexOf(e);
      for (var n = 0; n < t.length; ++n) {
        if (t[n] === e) return n;
      }
      return -1;
    };
  }, function (t, e, r) {
    var n = r(3),
      o = r(1),
      i = r(40),
      s = r(16),
      a = r(17),
      c = r(0)("socket.io-client:socket"),
      u = r(5),
      h = r(13);
    t.exports = l;
    var f = {
        connect: 1,
        connect_error: 1,
        connect_timeout: 1,
        connecting: 1,
        disconnect: 1,
        error: 1,
        reconnect: 1,
        reconnect_attempt: 1,
        reconnect_failed: 1,
        reconnect_error: 1,
        reconnecting: 1,
        ping: 1,
        pong: 1
      },
      p = o.prototype.emit;
    function l(t, e, r) {
      this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, r && r.query && (this.query = r.query), this.io.autoConnect && this.open();
    }
    o(l.prototype), l.prototype.subEvents = function () {
      if (!this.subs) {
        var t = this.io;
        this.subs = [s(t, "open", a(this, "onopen")), s(t, "packet", a(this, "onpacket")), s(t, "close", a(this, "onclose"))];
      }
    }, l.prototype.open = l.prototype.connect = function () {
      return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this);
    }, l.prototype.send = function () {
      var t = i(arguments);
      return t.unshift("message"), this.emit.apply(this, t), this;
    }, l.prototype.emit = function (t) {
      if (f.hasOwnProperty(t)) return p.apply(this, arguments), this;
      var e = i(arguments),
        r = {
          type: (void 0 !== this.flags.binary ? this.flags.binary : h(e)) ? n.BINARY_EVENT : n.EVENT,
          data: e,
          options: {}
        };
      return r.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (c("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), r.id = this.ids++), this.connected ? this.packet(r) : this.sendBuffer.push(r), this.flags = {}, this;
    }, l.prototype.packet = function (t) {
      t.nsp = this.nsp, this.io.packet(t);
    }, l.prototype.onopen = function () {
      if (c("transport is open - connecting"), "/" !== this.nsp) if (this.query) {
        var t = "object" == _typeof(this.query) ? u.encode(this.query) : this.query;
        c("sending connect packet with query %s", t), this.packet({
          type: n.CONNECT,
          query: t
        });
      } else this.packet({
        type: n.CONNECT
      });
    }, l.prototype.onclose = function (t) {
      c("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t);
    }, l.prototype.onpacket = function (t) {
      var e = t.nsp === this.nsp,
        r = t.type === n.ERROR && "/" === t.nsp;
      if (e || r) switch (t.type) {
        case n.CONNECT:
          this.onconnect();
          break;
        case n.EVENT:
        case n.BINARY_EVENT:
          this.onevent(t);
          break;
        case n.ACK:
        case n.BINARY_ACK:
          this.onack(t);
          break;
        case n.DISCONNECT:
          this.ondisconnect();
          break;
        case n.ERROR:
          this.emit("error", t.data);
      }
    }, l.prototype.onevent = function (t) {
      var e = t.data || [];
      c("emitting event %j", e), null != t.id && (c("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? p.apply(this, e) : this.receiveBuffer.push(e);
    }, l.prototype.ack = function (t) {
      var e = this,
        r = !1;
      return function () {
        if (!r) {
          r = !0;
          var o = i(arguments);
          c("sending ack %j", o), e.packet({
            type: h(o) ? n.BINARY_ACK : n.ACK,
            id: t,
            data: o
          });
        }
      };
    }, l.prototype.onack = function (t) {
      var e = this.acks[t.id];
      "function" == typeof e ? (c("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : c("bad ack %s", t.id);
    }, l.prototype.onconnect = function () {
      this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered();
    }, l.prototype.emitBuffered = function () {
      var t;
      for (t = 0; t < this.receiveBuffer.length; t++) {
        p.apply(this, this.receiveBuffer[t]);
      }
      for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) {
        this.packet(this.sendBuffer[t]);
      }
      this.sendBuffer = [];
    }, l.prototype.ondisconnect = function () {
      c("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
    }, l.prototype.destroy = function () {
      if (this.subs) {
        for (var t = 0; t < this.subs.length; t++) {
          this.subs[t].destroy();
        }
        this.subs = null;
      }
      this.io.destroy(this);
    }, l.prototype.close = l.prototype.disconnect = function () {
      return this.connected && (c("performing disconnect (%s)", this.nsp), this.packet({
        type: n.DISCONNECT
      })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
    }, l.prototype.compress = function (t) {
      return this.flags.compress = t, this;
    }, l.prototype.binary = function (t) {
      return this.flags.binary = t, this;
    };
  }, function (t, e) {
    t.exports = function (t, e, r) {
      return t.on(e, r), {
        destroy: function destroy() {
          t.removeListener(e, r);
        }
      };
    };
  }, function (t, e) {
    var r = [].slice;
    t.exports = function (t, e) {
      if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");
      var n = r.call(arguments, 2);
      return function () {
        return e.apply(t, n.concat(r.call(arguments)));
      };
    };
  }, function (t, e, r) {
    t.exports = r(19);
  }, function (t, e, r) {
    var n = r(20),
      o = r(3),
      i = r(10),
      s = r(0)("socket.io-client");
    t.exports = e = c;
    var a = e.managers = {};
    function c(t, e) {
      "object" == _typeof(t) && (e = t, t = void 0), e = e || {};
      var r,
        o = n(t),
        c = o.source,
        u = o.id,
        h = o.path,
        f = a[u] && h in a[u].nsps;
      return e.forceNew || e["force new connection"] || !1 === e.multiplex || f ? (s("ignoring socket cache for %s", c), r = i(c, e)) : (a[u] || (s("new io instance for %s", c), a[u] = i(c, e)), r = a[u]), o.query && !e.query && (e.query = o.query), r.socket(o.path, e);
    }
    e.protocol = o.protocol, e.connect = c, e.Manager = r(10), e.Socket = r(15);
  }, function (t, e, r) {
    var n = r(6),
      o = r(0)("socket.io-client:url");
    t.exports = function (t, e) {
      var r = t;
      e = e || "undefined" != typeof location && location, null == t && (t = e.protocol + "//" + e.host);
      "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), /^(https?|wss?):\/\//.test(t) || (o("protocol-less url %s", t), t = void 0 !== e ? e.protocol + "//" + t : "https://" + t), o("parse %s", t), r = n(t));
      r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443"));
      r.path = r.path || "/";
      var i = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
      return r.id = r.protocol + "://" + i + ":" + r.port, r.href = r.protocol + "://" + i + (e && e.port === r.port ? "" : ":" + r.port), r;
    };
  }, function (t, e, r) {
    var n = r(7),
      o = r(8),
      i = Object.prototype.toString,
      s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob),
      a = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === i.call(File);
    e.deconstructPacket = function (t) {
      var e = [],
        r = t.data,
        i = t;
      return i.data = function t(e, r) {
        if (!e) return e;
        if (o(e)) {
          var i = {
            _placeholder: !0,
            num: r.length
          };
          return r.push(e), i;
        }
        if (n(e)) {
          for (var s = new Array(e.length), a = 0; a < e.length; a++) {
            s[a] = t(e[a], r);
          }
          return s;
        }
        if ("object" == _typeof(e) && !(e instanceof Date)) {
          s = {};
          for (var c in e) {
            s[c] = t(e[c], r);
          }
          return s;
        }
        return e;
      }(r, e), i.attachments = e.length, {
        packet: i,
        buffers: e
      };
    }, e.reconstructPacket = function (t, e) {
      return t.data = function t(e, r) {
        if (!e) return e;
        if (e && e._placeholder) return r[e.num];
        if (n(e)) for (var o = 0; o < e.length; o++) {
          e[o] = t(e[o], r);
        } else if ("object" == _typeof(e)) for (var i in e) {
          e[i] = t(e[i], r);
        }
        return e;
      }(t.data, e), t.attachments = void 0, t;
    }, e.removeBlobs = function (t, e) {
      var r = 0,
        i = t;
      !function t(c, u, h) {
        if (!c) return c;
        if (s && c instanceof Blob || a && c instanceof File) {
          r++;
          var f = new FileReader();
          f.onload = function () {
            h ? h[u] = this.result : i = this.result, --r || e(i);
          }, f.readAsArrayBuffer(c);
        } else if (n(c)) for (var p = 0; p < c.length; p++) {
          t(c[p], p, c);
        } else if ("object" == _typeof(c) && !o(c)) for (var l in c) {
          t(c[l], l, c);
        }
      }(i), r || e(i);
    };
  }, function (t, e, r) {
    "use strict";

    e.byteLength = function (t) {
      var e = u(t),
        r = e[0],
        n = e[1];
      return 3 * (r + n) / 4 - n;
    }, e.toByteArray = function (t) {
      var e,
        r,
        n = u(t),
        s = n[0],
        a = n[1],
        c = new i(function (t, e, r) {
          return 3 * (e + r) / 4 - r;
        }(0, s, a)),
        h = 0,
        f = a > 0 ? s - 4 : s;
      for (r = 0; r < f; r += 4) {
        e = o[t.charCodeAt(r)] << 18 | o[t.charCodeAt(r + 1)] << 12 | o[t.charCodeAt(r + 2)] << 6 | o[t.charCodeAt(r + 3)], c[h++] = e >> 16 & 255, c[h++] = e >> 8 & 255, c[h++] = 255 & e;
      }
      2 === a && (e = o[t.charCodeAt(r)] << 2 | o[t.charCodeAt(r + 1)] >> 4, c[h++] = 255 & e);
      1 === a && (e = o[t.charCodeAt(r)] << 10 | o[t.charCodeAt(r + 1)] << 4 | o[t.charCodeAt(r + 2)] >> 2, c[h++] = e >> 8 & 255, c[h++] = 255 & e);
      return c;
    }, e.fromByteArray = function (t) {
      for (var e, r = t.length, o = r % 3, i = [], s = 0, a = r - o; s < a; s += 16383) {
        i.push(h(t, s, s + 16383 > a ? a : s + 16383));
      }
      1 === o ? (e = t[r - 1], i.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === o && (e = (t[r - 2] << 8) + t[r - 1], i.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="));
      return i.join("");
    };
    for (var n = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = s.length; a < c; ++a) {
      n[a] = s[a], o[s.charCodeAt(a)] = a;
    }
    function u(t) {
      var e = t.length;
      if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var r = t.indexOf("=");
      return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4];
    }
    function h(t, e, r) {
      for (var o, i, s = [], a = e; a < r; a += 3) {
        o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(n[(i = o) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
      }
      return s.join("");
    }
    o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63;
  }, function (t, e) {
    e.read = function (t, e, r, n, o) {
      var i,
        s,
        a = 8 * o - n - 1,
        c = (1 << a) - 1,
        u = c >> 1,
        h = -7,
        f = r ? o - 1 : 0,
        p = r ? -1 : 1,
        l = t[e + f];
      for (f += p, i = l & (1 << -h) - 1, l >>= -h, h += a; h > 0; i = 256 * i + t[e + f], f += p, h -= 8) {
        ;
      }
      for (s = i & (1 << -h) - 1, i >>= -h, h += n; h > 0; s = 256 * s + t[e + f], f += p, h -= 8) {
        ;
      }
      if (0 === i) i = 1 - u;else {
        if (i === c) return s ? NaN : 1 / 0 * (l ? -1 : 1);
        s += Math.pow(2, n), i -= u;
      }
      return (l ? -1 : 1) * s * Math.pow(2, i - n);
    }, e.write = function (t, e, r, n, o, i) {
      var s,
        a,
        c,
        u = 8 * i - o - 1,
        h = (1 << u) - 1,
        f = h >> 1,
        p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        l = n ? 0 : i - 1,
        d = n ? 1 : -1,
        y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
      for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), (e += s + f >= 1 ? p / c : p * Math.pow(2, 1 - f)) * c >= 2 && (s++, c /= 2), s + f >= h ? (a = 0, s = h) : s + f >= 1 ? (a = (e * c - 1) * Math.pow(2, o), s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, o), s = 0)); o >= 8; t[r + l] = 255 & a, l += d, a /= 256, o -= 8) {
        ;
      }
      for (s = s << o | a, u += o; u > 0; t[r + l] = 255 & s, l += d, s /= 256, u -= 8) {
        ;
      }
      t[r + l - d] |= 128 * y;
    };
  }, function (t, e) {
    var r = {}.toString;
    t.exports = Array.isArray || function (t) {
      return "[object Array]" == r.call(t);
    };
  }, function (t, e, r) {
    t.exports = r(26), t.exports.parser = r(2);
  }, function (t, e, r) {
    (function (e) {
      var n = r(11),
        o = r(1),
        i = r(0)("engine.io-client:socket"),
        s = r(14),
        a = r(2),
        c = r(6),
        u = r(5);
      function h(t, r) {
        if (!(this instanceof h)) return new h(t, r);
        r = r || {}, t && "object" == _typeof(t) && (r = t, t = null), t ? (t = c(t), r.hostname = t.host, r.secure = "https" === t.protocol || "wss" === t.protocol, r.port = t.port, t.query && (r.query = t.query)) : r.host && (r.hostname = c(r.host).host), this.secure = null != r.secure ? r.secure : e.location && "https:" === location.protocol, r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.agent = r.agent || !1, this.hostname = r.hostname || (e.location ? location.hostname : "localhost"), this.port = r.port || (e.location && location.port ? location.port : this.secure ? 443 : 80), this.query = r.query || {}, "string" == typeof this.query && (this.query = u.decode(this.query)), this.upgrade = !1 !== r.upgrade, this.path = (r.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!r.forceJSONP, this.jsonp = !1 !== r.jsonp, this.forceBase64 = !!r.forceBase64, this.enablesXDR = !!r.enablesXDR, this.timestampParam = r.timestampParam || "t", this.timestampRequests = r.timestampRequests, this.transports = r.transports || ["websocket"], this.transportOptions = r.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = r.policyPort || 843, this.rememberUpgrade = r.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = r.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== r.perMessageDeflate && (r.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = r.pfx || null, this.key = r.key || null, this.passphrase = r.passphrase || null, this.cert = r.cert || null, this.ca = r.ca || null, this.ciphers = r.ciphers || null, this.rejectUnauthorized = void 0 === r.rejectUnauthorized || r.rejectUnauthorized, this.forceNode = !!r.forceNode;
        var n = "object" == _typeof(e) && e;
        n.global === n && (r.extraHeaders && Object.keys(r.extraHeaders).length > 0 && (this.extraHeaders = r.extraHeaders), r.localAddress && (this.localAddress = r.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open();
      }
      t.exports = h, h.priorWebsocketSuccess = !1, o(h.prototype), h.protocol = a.protocol, h.Socket = h, h.Transport = r(12), h.transports = r(11), h.parser = r(2), h.prototype.createTransport = function (t) {
        i('creating transport "%s"', t);
        var e = function (t) {
          var e = {};
          for (var r in t) {
            t.hasOwnProperty(r) && (e[r] = t[r]);
          }
          return e;
        }(this.query);
        e.EIO = a.protocol, e.transport = t;
        var r = this.transportOptions[t] || {};
        this.id && (e.sid = this.id);
        var o = new n[t]({
          query: e,
          socket: this,
          agent: r.agent || this.agent,
          hostname: r.hostname || this.hostname,
          port: r.port || this.port,
          secure: r.secure || this.secure,
          path: r.path || this.path,
          forceJSONP: r.forceJSONP || this.forceJSONP,
          jsonp: r.jsonp || this.jsonp,
          forceBase64: r.forceBase64 || this.forceBase64,
          enablesXDR: r.enablesXDR || this.enablesXDR,
          timestampRequests: r.timestampRequests || this.timestampRequests,
          timestampParam: r.timestampParam || this.timestampParam,
          policyPort: r.policyPort || this.policyPort,
          pfx: r.pfx || this.pfx,
          key: r.key || this.key,
          passphrase: r.passphrase || this.passphrase,
          cert: r.cert || this.cert,
          ca: r.ca || this.ca,
          ciphers: r.ciphers || this.ciphers,
          rejectUnauthorized: r.rejectUnauthorized || this.rejectUnauthorized,
          perMessageDeflate: r.perMessageDeflate || this.perMessageDeflate,
          extraHeaders: r.extraHeaders || this.extraHeaders,
          forceNode: r.forceNode || this.forceNode,
          localAddress: r.localAddress || this.localAddress,
          requestTimeout: r.requestTimeout || this.requestTimeout,
          protocols: r.protocols || void 0
        });
        return i("transport: ", o), o;
      }, h.prototype.open = function () {
        var t;
        if (this.rememberUpgrade && h.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket";else {
          if (0 === this.transports.length) {
            var e = this;
            return void setTimeout(function () {
              e.emit("error", "No transports available");
            }, 0);
          }
          t = this.transports[0];
        }
        this.readyState = "opening";
        try {
          t = this.createTransport(t);
        } catch (t) {
          return this.transports.shift(), void this.open();
        }
        t.open(), this.setTransport(t);
      }, h.prototype.setTransport = function (t) {
        i("setting transport %s", t.name);
        var e = this;
        this.transport && (i("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", function () {
          e.onDrain();
        }).on("packet", function (t) {
          e.onPacket(t);
        }).on("error", function (t) {
          e.onError(t);
        }).on("close", function () {
          e.onClose("transport close");
        });
      }, h.prototype.probe = function (t) {
        i('probing transport "%s"', t);
        var e = this.createTransport(t, {
            probe: 1
          }),
          r = !1,
          n = this;
        function o() {
          if (n.onlyBinaryUpgrades) {
            var o = !this.supportsBinary && n.transport.supportsBinary;
            r = r || o;
          }
          r || (i('probe transport "%s" opened', t), e.send([{
            type: "ping",
            data: "probe"
          }]), e.once("packet", function (o) {
            if (!r) if ("pong" === o.type && "probe" === o.data) {
              if (i('probe transport "%s" pong', t), n.upgrading = !0, n.emit("upgrading", e), !e) return;
              h.priorWebsocketSuccess = "websocket" === e.name, i('pausing current transport "%s"', n.transport.name), n.transport.pause(function () {
                r || "closed" !== n.readyState && (i("changing transport and sending upgrade packet"), p(), n.setTransport(e), e.send([{
                  type: "upgrade"
                }]), n.emit("upgrade", e), e = null, n.upgrading = !1, n.flush());
              });
            } else {
              i('probe transport "%s" failed', t);
              var s = new Error("probe error");
              s.transport = e.name, n.emit("upgradeError", s);
            }
          }));
        }
        function s() {
          r || (r = !0, p(), e.close(), e = null);
        }
        function a(r) {
          var o = new Error("probe error: " + r);
          o.transport = e.name, s(), i('probe transport "%s" failed because of error: %s', t, r), n.emit("upgradeError", o);
        }
        function c() {
          a("transport closed");
        }
        function u() {
          a("socket closed");
        }
        function f(t) {
          e && t.name !== e.name && (i('"%s" works - aborting "%s"', t.name, e.name), s());
        }
        function p() {
          e.removeListener("open", o), e.removeListener("error", a), e.removeListener("close", c), n.removeListener("close", u), n.removeListener("upgrading", f);
        }
        h.priorWebsocketSuccess = !1, e.once("open", o), e.once("error", a), e.once("close", c), this.once("close", u), this.once("upgrading", f), e.open();
      }, h.prototype.onOpen = function () {
        if (i("socket open"), this.readyState = "open", h.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
          i("starting upgrade probes");
          for (var t = 0, e = this.upgrades.length; t < e; t++) {
            this.probe(this.upgrades[t]);
          }
        }
      }, h.prototype.onPacket = function (t) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (i('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
          case "open":
            this.onHandshake(JSON.parse(t.data));
            break;
          case "pong":
            this.setPing(), this.emit("pong");
            break;
          case "error":
            var e = new Error("server error");
            e.code = t.data, this.onError(e);
            break;
          case "message":
            this.emit("data", t.data), this.emit("message", t.data);
        } else i('packet received with socket readyState "%s"', this.readyState);
      }, h.prototype.onHandshake = function (t) {
        this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat));
      }, h.prototype.onHeartbeat = function (t) {
        clearTimeout(this.pingTimeoutTimer);
        var e = this;
        e.pingTimeoutTimer = setTimeout(function () {
          "closed" !== e.readyState && e.onClose("ping timeout");
        }, t || e.pingInterval + e.pingTimeout);
      }, h.prototype.setPing = function () {
        var t = this;
        clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function () {
          i("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout);
        }, t.pingInterval);
      }, h.prototype.ping = function () {
        var t = this;
        this.sendPacket("ping", function () {
          t.emit("ping");
        });
      }, h.prototype.onDrain = function () {
        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
      }, h.prototype.flush = function () {
        "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (i("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
      }, h.prototype.write = h.prototype.send = function (t, e, r) {
        return this.sendPacket("message", t, e, r), this;
      }, h.prototype.sendPacket = function (t, e, r, n) {
        if ("function" == typeof e && (n = e, e = void 0), "function" == typeof r && (n = r, r = null), "closing" !== this.readyState && "closed" !== this.readyState) {
          (r = r || {}).compress = !1 !== r.compress;
          var o = {
            type: t,
            data: e,
            options: r
          };
          this.emit("packetCreate", o), this.writeBuffer.push(o), n && this.once("flush", n), this.flush();
        }
      }, h.prototype.close = function () {
        if ("opening" === this.readyState || "open" === this.readyState) {
          this.readyState = "closing";
          var t = this;
          this.writeBuffer.length ? this.once("drain", function () {
            this.upgrading ? n() : e();
          }) : this.upgrading ? n() : e();
        }
        function e() {
          t.onClose("forced close"), i("socket closing - telling transport to close"), t.transport.close();
        }
        function r() {
          t.removeListener("upgrade", r), t.removeListener("upgradeError", r), e();
        }
        function n() {
          t.once("upgrade", r), t.once("upgradeError", r);
        }
        return this;
      }, h.prototype.onError = function (t) {
        i("socket error %j", t), h.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t);
      }, h.prototype.onClose = function (t, e) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
          i('socket close with reason: "%s"', t);
          clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0;
        }
      }, h.prototype.filterUpgrades = function (t) {
        for (var e = [], r = 0, n = t.length; r < n; r++) {
          ~s(this.transports, t[r]) && e.push(t[r]);
        }
        return e;
      };
    }).call(this, r(4));
  }, function (t, e, r) {
    (function (e) {
      var n,
        o = r(12),
        i = r(2),
        s = r(5),
        a = r(35),
        c = r(36),
        u = r(0)("engine.io-client:websocket"),
        h = e.WebSocket || e.MozWebSocket;
      if ("undefined" == typeof window) try {
        n = r(37);
      } catch (t) {
        u("require error: ", t);
      }
      var f = h;
      function p(t) {
        t && t.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, this.usingBrowserWebSocket = h && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (f = n), o.call(this, t);
      }
      f || "undefined" != typeof window || (f = n), t.exports = p, a(p, o), p.prototype.name = "websocket", p.prototype.supportsBinary = !0, p.prototype.doOpen = function () {
        if (u("wesocket do open: ", this.protocols), this.check()) {
          var t = this.uri(),
            e = this.protocols,
            r = {
              agent: this.agent,
              perMessageDeflate: this.perMessageDeflate
            };
          r.pfx = this.pfx, r.key = this.key, r.passphrase = this.passphrase, r.cert = this.cert, r.ca = this.ca, r.ciphers = this.ciphers, r.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (r.headers = this.extraHeaders), this.localAddress && (r.localAddress = this.localAddress);
          try {
            this.ws = this.usingBrowserWebSocket ? e ? new f(t, e) : new f(t) : new f(t, e, r);
          } catch (t) {
            return this.emit("error", t);
          }
          void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
        }
      }, p.prototype.addEventListeners = function () {
        var t = this;
        this.ws.onopen = function () {
          t.onOpen();
        }, this.ws.onclose = function () {
          t.onClose();
        }, this.ws.onmessage = function (e) {
          t.onData(e.data);
        }, this.ws.onerror = function (e) {
          t.onError("websocket error", e);
        };
      }, p.prototype.write = function (t) {
        var e = this;
        this.writable = !1;
        for (var r, n = t.length, o = 0, s = n; o < s; o++) {
          r = t[o], i.encodePacket(r, e.supportsBinary, function (t) {
            try {
              e.ws.send(t);
            } catch (t) {}
            --n || a();
          });
        }
        function a() {
          e.emit("flush"), setTimeout(function () {
            e.writable = !0, e.emit("drain");
          }, 0);
        }
      }, p.prototype.onClose = function () {
        o.prototype.onClose.call(this);
      }, p.prototype.doClose = function () {
        void 0 !== this.ws && this.ws.close();
      }, p.prototype.uri = function () {
        var t = this.query || {},
          e = this.secure ? "wss" : "ws",
          r = "";
        return this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (r = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || (t.b64 = 1), (t = s.encode(t)).length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + t;
      }, p.prototype.check = function () {
        return !(!f || "__initialize" in f && this.name === p.prototype.name);
      };
    }).call(this, r(4));
  }, function (t, e) {
    t.exports = Object.keys || function (t) {
      var e = [],
        r = Object.prototype.hasOwnProperty;
      for (var n in t) {
        r.call(t, n) && e.push(n);
      }
      return e;
    };
  }, function (t, e) {
    var r = {}.toString;
    t.exports = Array.isArray || function (t) {
      return "[object Array]" == r.call(t);
    };
  }, function (t, e) {
    t.exports = function (t, e, r) {
      var n = t.byteLength;
      if (e = e || 0, r = r || n, t.slice) return t.slice(e, r);
      if (e < 0 && (e += n), r < 0 && (r += n), r > n && (r = n), e >= n || e >= r || 0 === n) return new ArrayBuffer(0);
      for (var o = new Uint8Array(t), i = new Uint8Array(r - e), s = e, a = 0; s < r; s++, a++) {
        i[a] = o[s];
      }
      return i.buffer;
    };
  }, function (t, e) {
    function r() {}
    t.exports = function (t, e, n) {
      var o = !1;
      return n = n || r, i.count = t, 0 === t ? e() : i;
      function i(t, r) {
        if (i.count <= 0) throw new Error("after called too many times");
        --i.count, t ? (o = !0, e(t), e = n) : 0 !== i.count || o || e(null, r);
      }
    };
  }, function (t, e) {
    /*! https://mths.be/utf8js v2.1.2 by @mathias */
    var r,
      n,
      o,
      i = String.fromCharCode;
    function s(t) {
      for (var e, r, n = [], o = 0, i = t.length; o < i;) {
        (e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i ? 56320 == (64512 & (r = t.charCodeAt(o++))) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), o--) : n.push(e);
      }
      return n;
    }
    function a(t, e) {
      if (t >= 55296 && t <= 57343) {
        if (e) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
        return !1;
      }
      return !0;
    }
    function c(t, e) {
      return i(t >> e & 63 | 128);
    }
    function u(t, e) {
      if (0 == (4294967168 & t)) return i(t);
      var r = "";
      return 0 == (4294965248 & t) ? r = i(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (a(t, e) || (t = 65533), r = i(t >> 12 & 15 | 224), r += c(t, 6)) : 0 == (4292870144 & t) && (r = i(t >> 18 & 7 | 240), r += c(t, 12), r += c(t, 6)), r += i(63 & t | 128);
    }
    function h() {
      if (o >= n) throw Error("Invalid byte index");
      var t = 255 & r[o];
      if (o++, 128 == (192 & t)) return 63 & t;
      throw Error("Invalid continuation byte");
    }
    function f(t) {
      var e, i;
      if (o > n) throw Error("Invalid byte index");
      if (o == n) return !1;
      if (e = 255 & r[o], o++, 0 == (128 & e)) return e;
      if (192 == (224 & e)) {
        if ((i = (31 & e) << 6 | h()) >= 128) return i;
        throw Error("Invalid continuation byte");
      }
      if (224 == (240 & e)) {
        if ((i = (15 & e) << 12 | h() << 6 | h()) >= 2048) return a(i, t) ? i : 65533;
        throw Error("Invalid continuation byte");
      }
      if (240 == (248 & e) && (i = (7 & e) << 18 | h() << 12 | h() << 6 | h()) >= 65536 && i <= 1114111) return i;
      throw Error("Invalid UTF-8 detected");
    }
    t.exports = {
      version: "2.1.2",
      encode: function encode(t, e) {
        for (var r = !1 !== (e = e || {}).strict, n = s(t), o = n.length, i = -1, a = ""; ++i < o;) {
          a += u(n[i], r);
        }
        return a;
      },
      decode: function decode(t, e) {
        var a = !1 !== (e = e || {}).strict;
        r = s(t), n = r.length, o = 0;
        for (var c, u = []; !1 !== (c = f(a));) {
          u.push(c);
        }
        return function (t) {
          for (var e, r = t.length, n = -1, o = ""; ++n < r;) {
            (e = t[n]) > 65535 && (o += i((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += i(e);
          }
          return o;
        }(u);
      }
    };
  }, function (t, e) {
    !function () {
      "use strict";

      for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = new Uint8Array(256), n = 0; n < t.length; n++) {
        r[t.charCodeAt(n)] = n;
      }
      e.encode = function (e) {
        var r,
          n = new Uint8Array(e),
          o = n.length,
          i = "";
        for (r = 0; r < o; r += 3) {
          i += t[n[r] >> 2], i += t[(3 & n[r]) << 4 | n[r + 1] >> 4], i += t[(15 & n[r + 1]) << 2 | n[r + 2] >> 6], i += t[63 & n[r + 2]];
        }
        return o % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i;
      }, e.decode = function (t) {
        var e,
          n,
          o,
          i,
          s,
          a = .75 * t.length,
          c = t.length,
          u = 0;
        "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
        var h = new ArrayBuffer(a),
          f = new Uint8Array(h);
        for (e = 0; e < c; e += 4) {
          n = r[t.charCodeAt(e)], o = r[t.charCodeAt(e + 1)], i = r[t.charCodeAt(e + 2)], s = r[t.charCodeAt(e + 3)], f[u++] = n << 2 | o >> 4, f[u++] = (15 & o) << 4 | i >> 2, f[u++] = (3 & i) << 6 | 63 & s;
        }
        return h;
      };
    }();
  }, function (t, e) {
    var r = void 0 !== r ? r : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder,
      n = function () {
        try {
          return 2 === new Blob(["hi"]).size;
        } catch (t) {
          return !1;
        }
      }(),
      o = n && function () {
        try {
          return 2 === new Blob([new Uint8Array([1, 2])]).size;
        } catch (t) {
          return !1;
        }
      }(),
      i = r && r.prototype.append && r.prototype.getBlob;
    function s(t) {
      return t.map(function (t) {
        if (t.buffer instanceof ArrayBuffer) {
          var e = t.buffer;
          if (t.byteLength !== e.byteLength) {
            var r = new Uint8Array(t.byteLength);
            r.set(new Uint8Array(e, t.byteOffset, t.byteLength)), e = r.buffer;
          }
          return e;
        }
        return t;
      });
    }
    function a(t, e) {
      e = e || {};
      var n = new r();
      return s(t).forEach(function (t) {
        n.append(t);
      }), e.type ? n.getBlob(e.type) : n.getBlob();
    }
    function c(t, e) {
      return new Blob(s(t), e || {});
    }
    "undefined" != typeof Blob && (a.prototype = Blob.prototype, c.prototype = Blob.prototype), t.exports = n ? o ? Blob : c : i ? a : void 0;
  }, function (t, e) {
    t.exports = function (t, e) {
      var r = function r() {};
      r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t;
    };
  }, function (t, e, r) {
    "use strict";

    var n,
      o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
      i = 64,
      s = {},
      a = 0,
      c = 0;
    function u(t) {
      var e = "";
      do {
        e = o[t % i] + e, t = Math.floor(t / i);
      } while (t > 0);
      return e;
    }
    function h() {
      var t = u(+new Date());
      return t !== n ? (a = 0, n = t) : t + "." + u(a++);
    }
    for (; c < i; c++) {
      s[o[c]] = c;
    }
    h.encode = u, h.decode = function (t) {
      var e = 0;
      for (c = 0; c < t.length; c++) {
        e = e * i + s[t.charAt(c)];
      }
      return e;
    }, t.exports = h;
  }, function (t, e, r) {
    var n = r(38),
      o = r(39),
      i = r(0)("weapp-socket:"),
      s = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
    var a = /*#__PURE__*/function (_n) {
      "use strict";

      _inherits(a, _n);
      var _super = _createSuper(a);
      function a(t, e, r) {
        var _this;
        _classCallCheck(this, a);
        _this = _super.call(this), _this.readyState = a.CONNECTING, _this.protocol = "", _this._socket = null, null !== t && (Array.isArray(e) ? e = e.join(", ") : "object" == _typeof(e) && null !== e && (r = e, e = void 0), c.call(_assertThisInitialized(_this), t, e, r));
        return _this;
      }
      _createClass(a, [{
        key: "CONNECTING",
        get: function get() {
          return a.CONNECTING;
        }
      }, {
        key: "CLOSING",
        get: function get() {
          return a.CLOSING;
        }
      }, {
        key: "CLOSED",
        get: function get() {
          return a.CLOSED;
        }
      }, {
        key: "OPEN",
        get: function get() {
          return a.OPEN;
        }
      }, {
        key: "addSocketEventListeners",
        value: function addSocketEventListeners() {
          var _this2 = this;
          this._socket.onOpen(function () {
            _this2.readyState = a.OPEN, _this2.onopen();
          }), this._socket.onClose(function (t) {
            i("onclose: ", t), _this2.readyState = a.CLOSED, _this2.onclose(t.code, t.reason);
          }), this._socket.onError(function (t) {
            i("onerror: ", t), _this2.onerror(t);
          }), this._socket.onMessage(function (t) {
            setTimeout(function () {
              _this2.onmessage(t);
            }, 0);
          });
        }
      }, {
        key: "send",
        value: function send(t) {
          i("send data: ", t, this.readyState), this.readyState === a.OPEN && this._socket.send({
            data: t
          });
        }
      }, {
        key: "close",
        value: function close(t, e) {
          i("close socket: ", t, e), this.readyState = a.CLOSING, this._socket.close({
            code: t,
            reason: e
          });
        }
      }]);
      return a;
    }(n);
    function c(t, e, r) {
      Object.assign(r, {
        url: t,
        header: {
          "content-type": "application/json"
        },
        protocols: e,
        method: "GET"
      }), this._socket = function (t) {
        t.success = function () {};
        var e = uni.connectSocket(t);
        if (i("socketTask: ", e), e) return e;
        return {
          onClose: uni.onSocketClose,
          onOpen: uni.onSocketOpen,
          onError: uni.onSocketError,
          onMessage: uni.onSocketMessage,
          send: uni.sendSocketMessage,
          close: uni.closeSocket
        };
      }(r), this.addSocketEventListeners();
    }
    s.forEach(function (t, e) {
      a[s[e]] = e;
    });
    ["open", "error", "close", "message"].forEach(function (t) {
      Object.defineProperty(a.prototype, "on".concat(t), {
        get: function get() {
          var e = this.listeners(t);
          for (var r = 0; r < e.length; r++) {
            if (e[r]._listener) return e[r]._listener;
          }
        },
        set: function set(e) {
          var r = this.listeners(t);
          for (var n = 0; n < r.length; n++) {
            r[n]._listener && this.removeListener(t, r[n]);
          }
          this.addEventListener(t, e);
        }
      });
    }), a.prototype.addEventListener = o.addEventListener, a.prototype.removeEventListener = o.removeEventListener, t.exports = a;
  }, function (t, e, r) {
    "use strict";

    var n,
      o = "object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) ? Reflect : null,
      i = o && "function" == typeof o.apply ? o.apply : function (t, e, r) {
        return Function.prototype.apply.call(t, e, r);
      };
    n = o && "function" == typeof o.ownKeys ? o.ownKeys : Object.getOwnPropertySymbols ? function (t) {
      return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
    } : function (t) {
      return Object.getOwnPropertyNames(t);
    };
    var s = Number.isNaN || function (t) {
      return t != t;
    };
    function a() {
      a.init.call(this);
    }
    t.exports = a, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
    var c = 10;
    function u(t) {
      return void 0 === t._maxListeners ? a.defaultMaxListeners : t._maxListeners;
    }
    function h(t, e, r, n) {
      var o, i, s, a;
      if ("function" != typeof r) throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(r));
      if (void 0 === (i = t._events) ? (i = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== i.newListener && (t.emit("newListener", e, r.listener ? r.listener : r), i = t._events), s = i[e]), void 0 === s) s = i[e] = r, ++t._eventsCount;else if ("function" == typeof s ? s = i[e] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r), (o = u(t)) > 0 && s.length > o && !s.warned) {
        s.warned = !0;
        var c = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        c.name = "MaxListenersExceededWarning", c.emitter = t, c.type = e, c.count = s.length, a = c, console && console.warn && console.warn(a);
      }
      return t;
    }
    function f() {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t.push(arguments[e]);
      }
      this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, i(this.listener, this.target, t));
    }
    function p(t, e, r) {
      var n = {
          fired: !1,
          wrapFn: void 0,
          target: t,
          type: e,
          listener: r
        },
        o = f.bind(n);
      return o.listener = r, n.wrapFn = o, o;
    }
    function l(t, e, r) {
      var n = t._events;
      if (void 0 === n) return [];
      var o = n[e];
      return void 0 === o ? [] : "function" == typeof o ? r ? [o.listener || o] : [o] : r ? function (t) {
        for (var e = new Array(t.length), r = 0; r < e.length; ++r) {
          e[r] = t[r].listener || t[r];
        }
        return e;
      }(o) : y(o, o.length);
    }
    function d(t) {
      var e = this._events;
      if (void 0 !== e) {
        var r = e[t];
        if ("function" == typeof r) return 1;
        if (void 0 !== r) return r.length;
      }
      return 0;
    }
    function y(t, e) {
      for (var r = new Array(e), n = 0; n < e; ++n) {
        r[n] = t[n];
      }
      return r;
    }
    Object.defineProperty(a, "defaultMaxListeners", {
      enumerable: !0,
      get: function get() {
        return c;
      },
      set: function set(t) {
        if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        c = t;
      }
    }), a.init = function () {
      void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, a.prototype.setMaxListeners = function (t) {
      if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
      return this._maxListeners = t, this;
    }, a.prototype.getMaxListeners = function () {
      return u(this);
    }, a.prototype.emit = function (t) {
      for (var e = [], r = 1; r < arguments.length; r++) {
        e.push(arguments[r]);
      }
      var n = "error" === t,
        o = this._events;
      if (void 0 !== o) n = n && void 0 === o.error;else if (!n) return !1;
      if (n) {
        var s;
        if (e.length > 0 && (s = e[0]), s instanceof Error) throw s;
        var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
        throw a.context = s, a;
      }
      var c = o[t];
      if (void 0 === c) return !1;
      if ("function" == typeof c) i(c, this, e);else {
        var u = c.length,
          h = y(c, u);
        for (r = 0; r < u; ++r) {
          i(h[r], this, e);
        }
      }
      return !0;
    }, a.prototype.addListener = function (t, e) {
      return h(this, t, e, !1);
    }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function (t, e) {
      return h(this, t, e, !0);
    }, a.prototype.once = function (t, e) {
      if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(e));
      return this.on(t, p(this, t, e)), this;
    }, a.prototype.prependOnceListener = function (t, e) {
      if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(e));
      return this.prependListener(t, p(this, t, e)), this;
    }, a.prototype.removeListener = function (t, e) {
      var r, n, o, i, s;
      if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(e));
      if (void 0 === (n = this._events)) return this;
      if (void 0 === (r = n[t])) return this;
      if (r === e || r.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[t], n.removeListener && this.emit("removeListener", t, r.listener || e));else if ("function" != typeof r) {
        for (o = -1, i = r.length - 1; i >= 0; i--) {
          if (r[i] === e || r[i].listener === e) {
            s = r[i].listener, o = i;
            break;
          }
        }
        if (o < 0) return this;
        0 === o ? r.shift() : function (t, e) {
          for (; e + 1 < t.length; e++) {
            t[e] = t[e + 1];
          }
          t.pop();
        }(r, o), 1 === r.length && (n[t] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", t, s || e);
      }
      return this;
    }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function (t) {
      var e, r, n;
      if (void 0 === (r = this._events)) return this;
      if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[t]), this;
      if (0 === arguments.length) {
        var o,
          i = Object.keys(r);
        for (n = 0; n < i.length; ++n) {
          "removeListener" !== (o = i[n]) && this.removeAllListeners(o);
        }
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
      }
      if ("function" == typeof (e = r[t])) this.removeListener(t, e);else if (void 0 !== e) for (n = e.length - 1; n >= 0; n--) {
        this.removeListener(t, e[n]);
      }
      return this;
    }, a.prototype.listeners = function (t) {
      return l(this, t, !0);
    }, a.prototype.rawListeners = function (t) {
      return l(this, t, !1);
    }, a.listenerCount = function (t, e) {
      return "function" == typeof t.listenerCount ? t.listenerCount(e) : d.call(t, e);
    }, a.prototype.listenerCount = d, a.prototype.eventNames = function () {
      return this._eventsCount > 0 ? n(this._events) : [];
    };
  }, function (t, e, r) {
    "use strict";

    var n = /*#__PURE__*/_createClass(function n(t, e) {
      _classCallCheck(this, n);
      this.target = e, this.type = t;
    });
    var o = /*#__PURE__*/function (_n2) {
      _inherits(o, _n2);
      var _super2 = _createSuper(o);
      function o(t, e) {
        var _this3;
        _classCallCheck(this, o);
        _this3 = _super2.call(this, "message", e), _this3.data = t;
        return _this3;
      }
      return _createClass(o);
    }(n);
    var i = /*#__PURE__*/function (_n3) {
      _inherits(i, _n3);
      var _super3 = _createSuper(i);
      function i(t, e, r) {
        var _this4;
        _classCallCheck(this, i);
        _this4 = _super3.call(this, "close", r), _this4.wasClean = r._closeFrameReceived && r._closeFrameSent, _this4.reason = e, _this4.code = t;
        return _this4;
      }
      return _createClass(i);
    }(n);
    var s = /*#__PURE__*/function (_n4) {
      _inherits(s, _n4);
      var _super4 = _createSuper(s);
      function s(t) {
        _classCallCheck(this, s);
        return _super4.call(this, "open", t);
      }
      return _createClass(s);
    }(n);
    var a = /*#__PURE__*/function (_n5) {
      _inherits(a, _n5);
      var _super5 = _createSuper(a);
      function a(t, e) {
        var _this5;
        _classCallCheck(this, a);
        _this5 = _super5.call(this, "error", e), _this5.message = t.message, _this5.error = t;
        return _this5;
      }
      return _createClass(a);
    }(n);
    var c = {
      addEventListener: function addEventListener(t, e) {
        function r(t) {
          e.call(this, new o(t, this));
        }
        function n(t, r) {
          e.call(this, new i(t, r, this));
        }
        function c(t) {
          e.call(this, new a(t, this));
        }
        function u() {
          e.call(this, new s(this));
        }
        "function" == typeof e && ("message" === t ? (r._listener = e, this.on(t, r)) : "close" === t ? (n._listener = e, this.on(t, n)) : "error" === t ? (c._listener = e, this.on(t, c)) : "open" === t ? (u._listener = e, this.on(t, u)) : this.on(t, e));
      },
      removeEventListener: function removeEventListener(t, e) {
        var r = this.listeners(t);
        for (var n = 0; n < r.length; n++) {
          r[n] !== e && r[n]._listener !== e || this.removeListener(t, r[n]);
        }
      }
    };
    t.exports = c;
  }, function (t, e) {
    t.exports = function (t, e) {
      for (var r = [], n = (e = e || 0) || 0; n < t.length; n++) {
        r[n - e] = t[n];
      }
      return r;
    };
  }, function (t, e) {
    function r(t) {
      t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
    }
    t.exports = r, r.prototype.duration = function () {
      var t = this.ms * Math.pow(this.factor, this.attempts++);
      if (this.jitter) {
        var e = Math.random(),
          r = Math.floor(e * this.jitter * t);
        t = 0 == (1 & Math.floor(10 * e)) ? t - r : t + r;
      }
      return 0 | Math.min(t, this.max);
    }, r.prototype.reset = function () {
      this.attempts = 0;
    }, r.prototype.setMin = function (t) {
      this.ms = t;
    }, r.prototype.setMax = function (t) {
      this.max = t;
    }, r.prototype.setJitter = function (t) {
      this.jitter = t;
    };
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../../../HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/module.js */ 340)(module)))

/***/ }),

/***/ 340:
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 341:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 342:
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 343:
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ 341);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 344:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 345:
/*!*********************************************!*\
  !*** D:/program/qxqx-vue/static/js/md53.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_MD5_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object';
  var NODE_JS = !root.JS_MD5_NO_NODE_JS && (typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && ( false ? undefined : _typeof(module)) === 'object' && module.exports;
  var AMD =  true && __webpack_require__(/*! !webpack amd options */ 348);
  var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [128, 32768, 8388608, -2147483648];
  var SHIFT = [0, 8, 16, 24];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'buffer', 'arrayBuffer', 'base64'];
  var BASE64_ENCODE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
  var blocks = [],
    buffer8;
  if (ARRAY_BUFFER) {
    var buffer = new ArrayBuffer(68);
    buffer8 = new Uint8Array(buffer);
    blocks = new Uint32Array(buffer);
  }
  if (root.JS_MD5_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }
  if (ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return _typeof(obj) === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  /**
   * @method hex
   * @memberof md5
   * @description Output hash as hex string
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {String} Hex string
   * @example
   * md5.hex('The quick brown fox jumps over the lazy dog');
   * // equal to
   * md5('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method digest
   * @memberof md5
   * @description Output hash as bytes array
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Array} Bytes array
   * @example
   * md5.digest('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method array
   * @memberof md5
   * @description Output hash as bytes array
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Array} Bytes array
   * @example
   * md5.array('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method arrayBuffer
   * @memberof md5
   * @description Output hash as ArrayBuffer
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {ArrayBuffer} ArrayBuffer
   * @example
   * md5.arrayBuffer('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method buffer
   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
   * @memberof md5
   * @description Output hash as ArrayBuffer
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {ArrayBuffer} ArrayBuffer
   * @example
   * md5.buffer('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method base64
   * @memberof md5
   * @description Output hash as base64 string
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {String} base64 string
   * @example
   * md5.base64('The quick brown fox jumps over the lazy dog');
   */
  var createOutputMethod = function createOutputMethod(outputType) {
    return function (message) {
      return new Md5(true).update(message)[outputType]();
    };
  };

  /**
   * @method create
   * @memberof md5
   * @description Create Md5 object
   * @returns {Md5} Md5 object.
   * @example
   * var hash = md5.create();
   */
  /**
   * @method update
   * @memberof md5
   * @description Create and update Md5 object
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Md5} Md5 object.
   * @example
   * var hash = md5.update('The quick brown fox jumps over the lazy dog');
   * // equal to
   * var hash = md5.create();
   * hash.update('The quick brown fox jumps over the lazy dog');
   */
  var createMethod = function createMethod() {
    var method = createOutputMethod('hex');
    if (NODE_JS) {
      method = nodeWrap(method);
    }
    method.create = function () {
      return new Md5();
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type);
    }
    return method;
  };
  var nodeWrap = function nodeWrap(method) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var nodeMethod = function nodeMethod(message) {
      if (typeof message === 'string') {
        return crypto.createHash('md5').update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw ERROR;
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }
      if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer) {
        return crypto.createHash('md5').update(new Buffer(message)).digest('hex');
      } else {
        return method(message);
      }
    };
    return nodeMethod;
  };

  /**
   * Md5 class
   * @class Md5
   * @description This is internal class.
   * @see {@link md5.create}
   */
  function Md5(sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
      this.buffer8 = buffer8;
    } else {
      if (ARRAY_BUFFER) {
        var buffer = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(buffer);
        this.blocks = new Uint32Array(buffer);
      } else {
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      }
    }
    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }

  /**
   * @method update
   * @memberof Md5
   * @instance
   * @description Update hash
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Md5} Md5 object.
   * @see {@link md5.update}
   */
  Md5.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }
    var notString,
      type = _typeof(message);
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw ERROR;
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw ERROR;
          }
        }
      } else {
        throw ERROR;
      }
      notString = true;
    }
    var code,
      index = 0,
      i,
      length = message.length,
      blocks = this.blocks;
    var buffer8 = this.buffer8;
    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = blocks[16];
        blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }
      if (notString) {
        if (ARRAY_BUFFER) {
          for (i = this.start; index < length && i < 64; ++index) {
            buffer8[i++] = message[index];
          }
        } else {
          for (i = this.start; index < length && i < 64; ++index) {
            blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
          }
        }
      } else {
        if (ARRAY_BUFFER) {
          for (i = this.start; index < length && i < 64; ++index) {
            code = message.charCodeAt(index);
            if (code < 0x80) {
              buffer8[i++] = code;
            } else if (code < 0x800) {
              buffer8[i++] = 0xc0 | code >> 6;
              buffer8[i++] = 0x80 | code & 0x3f;
            } else if (code < 0xd800 || code >= 0xe000) {
              buffer8[i++] = 0xe0 | code >> 12;
              buffer8[i++] = 0x80 | code >> 6 & 0x3f;
              buffer8[i++] = 0x80 | code & 0x3f;
            } else {
              code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
              buffer8[i++] = 0xf0 | code >> 18;
              buffer8[i++] = 0x80 | code >> 12 & 0x3f;
              buffer8[i++] = 0x80 | code >> 6 & 0x3f;
              buffer8[i++] = 0x80 | code & 0x3f;
            }
          }
        } else {
          for (i = this.start; index < length && i < 64; ++index) {
            code = message.charCodeAt(index);
            if (code < 0x80) {
              blocks[i >> 2] |= code << SHIFT[i++ & 3];
            } else if (code < 0x800) {
              blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            } else if (code < 0xd800 || code >= 0xe000) {
              blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            } else {
              code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
              blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            }
          }
        }
      }
      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };
  Md5.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks,
      i = this.lastByteIndex;
    blocks[i >> 2] |= EXTRA[i & 3];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = blocks[16];
      blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.bytes << 3;
    blocks[15] = this.hBytes << 3 | this.bytes >>> 29;
    this.hash();
  };
  Md5.prototype.hash = function () {
    var a,
      b,
      c,
      d,
      bc,
      da,
      blocks = this.blocks;
    if (this.first) {
      a = blocks[0] - 680876937;
      a = (a << 7 | a >>> 25) - 271733879 << 0;
      d = (-1732584194 ^ a & 2004318071) + blocks[1] - 117830708;
      d = (d << 12 | d >>> 20) + a << 0;
      c = (-271733879 ^ d & (a ^ -271733879)) + blocks[2] - 1126478375;
      c = (c << 17 | c >>> 15) + d << 0;
      b = (a ^ c & (d ^ a)) + blocks[3] - 1316259209;
      b = (b << 22 | b >>> 10) + c << 0;
    } else {
      a = this.h0;
      b = this.h1;
      c = this.h2;
      d = this.h3;
      a += (d ^ b & (c ^ d)) + blocks[0] - 680876936;
      a = (a << 7 | a >>> 25) + b << 0;
      d += (c ^ a & (b ^ c)) + blocks[1] - 389564586;
      d = (d << 12 | d >>> 20) + a << 0;
      c += (b ^ d & (a ^ b)) + blocks[2] + 606105819;
      c = (c << 17 | c >>> 15) + d << 0;
      b += (a ^ c & (d ^ a)) + blocks[3] - 1044525330;
      b = (b << 22 | b >>> 10) + c << 0;
    }
    a += (d ^ b & (c ^ d)) + blocks[4] - 176418897;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[5] + 1200080426;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[6] - 1473231341;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[7] - 45705983;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ b & (c ^ d)) + blocks[8] + 1770035416;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[9] - 1958414417;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[10] - 42063;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[11] - 1990404162;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ b & (c ^ d)) + blocks[12] + 1804603682;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[13] - 40341101;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[14] - 1502002290;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[15] + 1236535329;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[1] - 165796510;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[6] - 1069501632;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[11] + 643717713;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[0] - 373897302;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[5] - 701558691;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[10] + 38016083;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[15] - 660478335;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[4] - 405537848;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[9] + 568446438;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[14] - 1019803690;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[3] - 187363961;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[8] + 1163531501;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[13] - 1444681467;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[2] - 51403784;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[7] + 1735328473;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[12] - 1926607734;
    b = (b << 20 | b >>> 12) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[5] - 378558;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[8] - 2022574463;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[11] + 1839030562;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[14] - 35309556;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[1] - 1530992060;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[4] + 1272893353;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[7] - 155497632;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[10] - 1094730640;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[13] + 681279174;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[0] - 358537222;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[3] - 722521979;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[6] + 76029189;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[9] - 640364487;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[12] - 421815835;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[15] + 530742520;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[2] - 995338651;
    b = (b << 23 | b >>> 9) + c << 0;
    a += (c ^ (b | ~d)) + blocks[0] - 198630844;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[7] + 1126891415;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[14] - 1416354905;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[5] - 57434055;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[12] + 1700485571;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[3] - 1894986606;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[10] - 1051523;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[1] - 2054922799;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[8] + 1873313359;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[15] - 30611744;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[6] - 1560198380;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[13] + 1309151649;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[4] - 145523070;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[11] - 1120210379;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[2] + 718787259;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[9] - 343485551;
    b = (b << 21 | b >>> 11) + c << 0;
    if (this.first) {
      this.h0 = a + 1732584193 << 0;
      this.h1 = b - 271733879 << 0;
      this.h2 = c - 1732584194 << 0;
      this.h3 = d + 271733878 << 0;
      this.first = false;
    } else {
      this.h0 = this.h0 + a << 0;
      this.h1 = this.h1 + b << 0;
      this.h2 = this.h2 + c << 0;
      this.h3 = this.h3 + d << 0;
    }
  };

  /**
   * @method hex
   * @memberof Md5
   * @instance
   * @description Output hash as hex string
   * @returns {String} Hex string
   * @see {@link md5.hex}
   * @example
   * hash.hex();
   */
  Md5.prototype.hex = function () {
    this.finalize();
    var h0 = this.h0,
      h1 = this.h1,
      h2 = this.h2,
      h3 = this.h3;
    return HEX_CHARS[h0 >> 4 & 0x0F] + HEX_CHARS[h0 & 0x0F] + HEX_CHARS[h0 >> 12 & 0x0F] + HEX_CHARS[h0 >> 8 & 0x0F] + HEX_CHARS[h0 >> 20 & 0x0F] + HEX_CHARS[h0 >> 16 & 0x0F] + HEX_CHARS[h0 >> 28 & 0x0F] + HEX_CHARS[h0 >> 24 & 0x0F] + HEX_CHARS[h1 >> 4 & 0x0F] + HEX_CHARS[h1 & 0x0F] + HEX_CHARS[h1 >> 12 & 0x0F] + HEX_CHARS[h1 >> 8 & 0x0F] + HEX_CHARS[h1 >> 20 & 0x0F] + HEX_CHARS[h1 >> 16 & 0x0F] + HEX_CHARS[h1 >> 28 & 0x0F] + HEX_CHARS[h1 >> 24 & 0x0F] + HEX_CHARS[h2 >> 4 & 0x0F] + HEX_CHARS[h2 & 0x0F] + HEX_CHARS[h2 >> 12 & 0x0F] + HEX_CHARS[h2 >> 8 & 0x0F] + HEX_CHARS[h2 >> 20 & 0x0F] + HEX_CHARS[h2 >> 16 & 0x0F] + HEX_CHARS[h2 >> 28 & 0x0F] + HEX_CHARS[h2 >> 24 & 0x0F] + HEX_CHARS[h3 >> 4 & 0x0F] + HEX_CHARS[h3 & 0x0F] + HEX_CHARS[h3 >> 12 & 0x0F] + HEX_CHARS[h3 >> 8 & 0x0F] + HEX_CHARS[h3 >> 20 & 0x0F] + HEX_CHARS[h3 >> 16 & 0x0F] + HEX_CHARS[h3 >> 28 & 0x0F] + HEX_CHARS[h3 >> 24 & 0x0F];
  };

  /**
   * @method toString
   * @memberof Md5
   * @instance
   * @description Output hash as hex string
   * @returns {String} Hex string
   * @see {@link md5.hex}
   * @example
   * hash.toString();
   */
  Md5.prototype.toString = Md5.prototype.hex;

  /**
   * @method digest
   * @memberof Md5
   * @instance
   * @description Output hash as bytes array
   * @returns {Array} Bytes array
   * @see {@link md5.digest}
   * @example
   * hash.digest();
   */
  Md5.prototype.digest = function () {
    this.finalize();
    var h0 = this.h0,
      h1 = this.h1,
      h2 = this.h2,
      h3 = this.h3;
    return [h0 & 0xFF, h0 >> 8 & 0xFF, h0 >> 16 & 0xFF, h0 >> 24 & 0xFF, h1 & 0xFF, h1 >> 8 & 0xFF, h1 >> 16 & 0xFF, h1 >> 24 & 0xFF, h2 & 0xFF, h2 >> 8 & 0xFF, h2 >> 16 & 0xFF, h2 >> 24 & 0xFF, h3 & 0xFF, h3 >> 8 & 0xFF, h3 >> 16 & 0xFF, h3 >> 24 & 0xFF];
  };

  /**
   * @method array
   * @memberof Md5
   * @instance
   * @description Output hash as bytes array
   * @returns {Array} Bytes array
   * @see {@link md5.array}
   * @example
   * hash.array();
   */
  Md5.prototype.array = Md5.prototype.digest;

  /**
   * @method arrayBuffer
   * @memberof Md5
   * @instance
   * @description Output hash as ArrayBuffer
   * @returns {ArrayBuffer} ArrayBuffer
   * @see {@link md5.arrayBuffer}
   * @example
   * hash.arrayBuffer();
   */
  Md5.prototype.arrayBuffer = function () {
    this.finalize();
    var buffer = new ArrayBuffer(16);
    var blocks = new Uint32Array(buffer);
    blocks[0] = this.h0;
    blocks[1] = this.h1;
    blocks[2] = this.h2;
    blocks[3] = this.h3;
    return buffer;
  };

  /**
   * @method buffer
   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
   * @memberof Md5
   * @instance
   * @description Output hash as ArrayBuffer
   * @returns {ArrayBuffer} ArrayBuffer
   * @see {@link md5.buffer}
   * @example
   * hash.buffer();
   */
  Md5.prototype.buffer = Md5.prototype.arrayBuffer;

  /**
   * @method base64
   * @memberof Md5
   * @instance
   * @description Output hash as base64 string
   * @returns {String} base64 string
   * @see {@link md5.base64}
   * @example
   * hash.base64();
   */
  Md5.prototype.base64 = function () {
    var v1,
      v2,
      v3,
      base64Str = '',
      bytes = this.array();
    for (var i = 0; i < 15;) {
      v1 = bytes[i++];
      v2 = bytes[i++];
      v3 = bytes[i++];
      base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] + BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] + BASE64_ENCODE_CHAR[v3 & 63];
    }
    v1 = bytes[i];
    base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[v1 << 4 & 63] + '==';
    return base64Str;
  };
  var exports = createMethod();
  if (COMMON_JS) {
    module.exports = exports;
  } else {
    /**
     * @method md5
     * @description Md5 hash function, export to global in browsers.
     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
     * @returns {String} md5 hashes
     * @example
     * md5(''); // d41d8cd98f00b204e9800998ecf8427e
     * md5('The quick brown fox jumps over the lazy dog'); // 9e107d9d372bb6826bd81d3542a419d6
     * md5('The quick brown fox jumps over the lazy dog.'); // e4d909c290d0fb1ca068ffaddf22cbd0
     *
     * // It also supports UTF-8 encoding
     * md5('中文'); // a7bac2239fcdcb3a067903d8077c4a07
     *
     * // It also supports byte `Array`, `Uint8Array`, `ArrayBuffer`
     * md5([]); // d41d8cd98f00b204e9800998ecf8427e
     * md5(new Uint8Array([])); // d41d8cd98f00b204e9800998ecf8427e
     */
    root.md5 = exports;
    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return exports;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ 346), __webpack_require__(/*! ./../../../../HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 3), __webpack_require__(/*! ./../../../../HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/module.js */ 340)(module)))

/***/ }),

/***/ 346:
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 347);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ 347:
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 346)))

/***/ }),

/***/ 348:
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ 349:
/*!************************************************************************************!*\
  !*** D:/program/qxqx-vue/packageB/pages/live-info/Agora_Miniapp_SDK_for_WeChat.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(wx, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
/*! For license information please see agora-miniapp-sdk.js.LICENSE.txt */
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(self, function () {
  return function () {
    var __webpack_modules__ = {
        591: function _(e, t, n) {
          var r = n(8).default;
          function i() {
            "use strict";

            e.exports = i = function i() {
              return t;
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
            var t = {},
              n = Object.prototype,
              o = n.hasOwnProperty,
              s = "function" == typeof Symbol ? Symbol : {},
              a = s.iterator || "@@iterator",
              c = s.asyncIterator || "@@asyncIterator",
              l = s.toStringTag || "@@toStringTag";
            function u(e, t, n) {
              return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }), e[t];
            }
            try {
              u({}, "");
            } catch (e) {
              u = function u(e, t, n) {
                return e[t] = n;
              };
            }
            function p(e, t, n, r) {
              var i = t && t.prototype instanceof f ? t : f,
                o = Object.create(i.prototype),
                s = new k(r || []);
              return o._invoke = function (e, t, n) {
                var r = "suspendedStart";
                return function (i, o) {
                  if ("executing" === r) throw new Error("Generator is already running");
                  if ("completed" === r) {
                    if ("throw" === i) throw o;
                    return {
                      value: void 0,
                      done: !0
                    };
                  }
                  for (n.method = i, n.arg = o;;) {
                    var s = n.delegate;
                    if (s) {
                      var a = b(s, n);
                      if (a) {
                        if (a === d) continue;
                        return a;
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                      if ("suspendedStart" === r) throw r = "completed", n.arg;
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = "executing";
                    var c = h(e, t, n);
                    if ("normal" === c.type) {
                      if (r = n.done ? "completed" : "suspendedYield", c.arg === d) continue;
                      return {
                        value: c.arg,
                        done: n.done
                      };
                    }
                    "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg);
                  }
                };
              }(e, n, s), o;
            }
            function h(e, t, n) {
              try {
                return {
                  type: "normal",
                  arg: e.call(t, n)
                };
              } catch (e) {
                return {
                  type: "throw",
                  arg: e
                };
              }
            }
            t.wrap = p;
            var d = {};
            function f() {}
            function y() {}
            function _() {}
            var g = {};
            u(g, a, function () {
              return this;
            });
            var v = Object.getPrototypeOf,
              m = v && v(v(P([])));
            m && m !== n && o.call(m, a) && (g = m);
            var w = _.prototype = f.prototype = Object.create(g);
            function O(e) {
              ["next", "throw", "return"].forEach(function (t) {
                u(e, t, function (e) {
                  return this._invoke(t, e);
                });
              });
            }
            function E(e, t) {
              function n(i, s, a, c) {
                var l = h(e[i], e, s);
                if ("throw" !== l.type) {
                  var u = l.arg,
                    p = u.value;
                  return p && "object" == r(p) && o.call(p, "__await") ? t.resolve(p.__await).then(function (e) {
                    n("next", e, a, c);
                  }, function (e) {
                    n("throw", e, a, c);
                  }) : t.resolve(p).then(function (e) {
                    u.value = e, a(u);
                  }, function (e) {
                    return n("throw", e, a, c);
                  });
                }
                c(l.arg);
              }
              var i;
              this._invoke = function (e, r) {
                function o() {
                  return new t(function (t, i) {
                    n(e, r, t, i);
                  });
                }
                return i = i ? i.then(o, o) : o();
              };
            }
            function b(e, t) {
              var n = e.iterator[t.method];
              if (void 0 === n) {
                if (t.delegate = null, "throw" === t.method) {
                  if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return d;
                  t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return d;
              }
              var r = h(n, e.iterator, t.arg);
              if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, d;
              var i = r.arg;
              return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d);
            }
            function R(e) {
              var t = {
                tryLoc: e[0]
              };
              1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
            }
            function S(e) {
              var t = e.completion || {};
              t.type = "normal", delete t.arg, e.completion = t;
            }
            function k(e) {
              this.tryEntries = [{
                tryLoc: "root"
              }], e.forEach(R, this), this.reset(!0);
            }
            function P(e) {
              if (e) {
                var t = e[a];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                  var n = -1,
                    r = function t() {
                      for (; ++n < e.length;) {
                        if (o.call(e, n)) return t.value = e[n], t.done = !1, t;
                      }
                      return t.value = void 0, t.done = !0, t;
                    };
                  return r.next = r;
                }
              }
              return {
                next: I
              };
            }
            function I() {
              return {
                value: void 0,
                done: !0
              };
            }
            return y.prototype = _, u(w, "constructor", _), u(_, "constructor", y), y.displayName = u(_, l, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name));
            }, t.mark = function (e) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(e, _) : (e.__proto__ = _, u(e, l, "GeneratorFunction")), e.prototype = Object.create(w), e;
            }, t.awrap = function (e) {
              return {
                __await: e
              };
            }, O(E.prototype), u(E.prototype, c, function () {
              return this;
            }), t.AsyncIterator = E, t.async = function (e, n, r, i, o) {
              void 0 === o && (o = Promise);
              var s = new E(p(e, n, r, i), o);
              return t.isGeneratorFunction(n) ? s : s.next().then(function (e) {
                return e.done ? e.value : s.next();
              });
            }, O(w), u(w, l, "Generator"), u(w, a, function () {
              return this;
            }), u(w, "toString", function () {
              return "[object Generator]";
            }), t.keys = function (e) {
              var t = [];
              for (var n in e) {
                t.push(n);
              }
              return t.reverse(), function n() {
                for (; t.length;) {
                  var r = t.pop();
                  if (r in e) return n.value = r, n.done = !1, n;
                }
                return n.done = !0, n;
              };
            }, t.values = P, k.prototype = {
              constructor: k,
              reset: function reset(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !e) for (var t in this) {
                  "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
                }
              },
              stop: function stop() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var t = this;
                function n(n, r) {
                  return s.type = "throw", s.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r;
                }
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var i = this.tryEntries[r],
                    s = i.completion;
                  if ("root" === i.tryLoc) return n("end");
                  if (i.tryLoc <= this.prev) {
                    var a = o.call(i, "catchLoc"),
                      c = o.call(i, "finallyLoc");
                    if (a && c) {
                      if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                    } else if (a) {
                      if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    } else {
                      if (!c) throw new Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var r = this.tryEntries[n];
                  if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                    var i = r;
                    break;
                  }
                }
                i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                var s = i ? i.completion : {};
                return s.type = e, s.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(s);
              },
              complete: function complete(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d;
              },
              finish: function finish(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), d;
                }
              },
              catch: function _catch(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var i = r.arg;
                      S(n);
                    }
                    return i;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, t, n) {
                return this.delegate = {
                  iterator: P(e),
                  resultName: t,
                  nextLoc: n
                }, "next" === this.method && (this.arg = void 0), d;
              }
            }, t;
          }
          e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        8: function _(e) {
          function t(n) {
            return e.exports = t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
              return _typeof(e);
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
            }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n);
          }
          e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
        },
        757: function _(e, t, n) {
          var r = n(591)();
          e.exports = r;
          try {
            regeneratorRuntime = r;
          } catch (e) {
            "object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r);
          }
        },
        537: function _(e) {
          "use strict";

          e.exports = function (e, t) {
            for (var n = new Array(arguments.length - 1), r = 0, i = 2, o = !0; i < arguments.length;) {
              n[r++] = arguments[i++];
            }
            return new Promise(function (i, s) {
              n[r] = function (e) {
                if (o) if (o = !1, e) s(e);else {
                  for (var t = new Array(arguments.length - 1), n = 0; n < t.length;) {
                    t[n++] = arguments[n];
                  }
                  i.apply(null, t);
                }
              };
              try {
                e.apply(t || null, n);
              } catch (e) {
                o && (o = !1, s(e));
              }
            });
          };
        },
        419: function _(e, t) {
          "use strict";

          var n = t;
          n.length = function (e) {
            var t = e.length;
            if (!t) return 0;
            for (var n = 0; --t % 4 > 1 && "=" === e.charAt(t);) {
              ++n;
            }
            return Math.ceil(3 * e.length) / 4 - n;
          };
          for (var r = new Array(64), i = new Array(123), o = 0; o < 64;) {
            i[r[o] = o < 26 ? o + 65 : o < 52 ? o + 71 : o < 62 ? o - 4 : o - 59 | 43] = o++;
          }
          n.encode = function (e, t, n) {
            for (var i, o = null, s = [], a = 0, c = 0; t < n;) {
              var l = e[t++];
              switch (c) {
                case 0:
                  s[a++] = r[l >> 2], i = (3 & l) << 4, c = 1;
                  break;
                case 1:
                  s[a++] = r[i | l >> 4], i = (15 & l) << 2, c = 2;
                  break;
                case 2:
                  s[a++] = r[i | l >> 6], s[a++] = r[63 & l], c = 0;
              }
              a > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, s)), a = 0);
            }
            return c && (s[a++] = r[i], s[a++] = 61, 1 === c && (s[a++] = 61)), o ? (a && o.push(String.fromCharCode.apply(String, s.slice(0, a))), o.join("")) : String.fromCharCode.apply(String, s.slice(0, a));
          };
          var s = "invalid encoding";
          n.decode = function (e, t, n) {
            for (var r, o = n, a = 0, c = 0; c < e.length;) {
              var l = e.charCodeAt(c++);
              if (61 === l && a > 1) break;
              if (void 0 === (l = i[l])) throw Error(s);
              switch (a) {
                case 0:
                  r = l, a = 1;
                  break;
                case 1:
                  t[n++] = r << 2 | (48 & l) >> 4, r = l, a = 2;
                  break;
                case 2:
                  t[n++] = (15 & r) << 4 | (60 & l) >> 2, r = l, a = 3;
                  break;
                case 3:
                  t[n++] = (3 & r) << 6 | l, a = 0;
              }
            }
            if (1 === a) throw Error(s);
            return n - o;
          }, n.test = function (e) {
            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);
          };
        },
        211: function _(e) {
          "use strict";

          function t() {
            this._listeners = {};
          }
          e.exports = t, t.prototype.on = function (e, t, n) {
            return (this._listeners[e] || (this._listeners[e] = [])).push({
              fn: t,
              ctx: n || this
            }), this;
          }, t.prototype.off = function (e, t) {
            if (void 0 === e) this._listeners = {};else if (void 0 === t) this._listeners[e] = [];else for (var n = this._listeners[e], r = 0; r < n.length;) {
              n[r].fn === t ? n.splice(r, 1) : ++r;
            }
            return this;
          }, t.prototype.emit = function (e) {
            var t = this._listeners[e];
            if (t) {
              for (var n = [], r = 1; r < arguments.length;) {
                n.push(arguments[r++]);
              }
              for (r = 0; r < t.length;) {
                t[r].fn.apply(t[r++].ctx, n);
              }
            }
            return this;
          };
        },
        945: function _(e) {
          "use strict";

          function t(e) {
            return "undefined" != typeof Float32Array ? function () {
              var t = new Float32Array([-0]),
                n = new Uint8Array(t.buffer),
                r = 128 === n[3];
              function i(e, r, i) {
                t[0] = e, r[i] = n[0], r[i + 1] = n[1], r[i + 2] = n[2], r[i + 3] = n[3];
              }
              function o(e, r, i) {
                t[0] = e, r[i] = n[3], r[i + 1] = n[2], r[i + 2] = n[1], r[i + 3] = n[0];
              }
              function s(e, r) {
                return n[0] = e[r], n[1] = e[r + 1], n[2] = e[r + 2], n[3] = e[r + 3], t[0];
              }
              function a(e, r) {
                return n[3] = e[r], n[2] = e[r + 1], n[1] = e[r + 2], n[0] = e[r + 3], t[0];
              }
              e.writeFloatLE = r ? i : o, e.writeFloatBE = r ? o : i, e.readFloatLE = r ? s : a, e.readFloatBE = r ? a : s;
            }() : function () {
              function t(e, t, n, r) {
                var i = t < 0 ? 1 : 0;
                if (i && (t = -t), 0 === t) e(1 / t > 0 ? 0 : 2147483648, n, r);else if (isNaN(t)) e(2143289344, n, r);else if (t > 34028234663852886e22) e((i << 31 | 2139095040) >>> 0, n, r);else if (t < 11754943508222875e-54) e((i << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, n, r);else {
                  var o = Math.floor(Math.log(t) / Math.LN2);
                  e((i << 31 | o + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -o) * 8388608)) >>> 0, n, r);
                }
              }
              function s(e, t, n) {
                var r = e(t, n),
                  i = 2 * (r >> 31) + 1,
                  o = r >>> 23 & 255,
                  s = 8388607 & r;
                return 255 === o ? s ? NaN : i * (1 / 0) : 0 === o ? 1401298464324817e-60 * i * s : i * Math.pow(2, o - 150) * (s + 8388608);
              }
              e.writeFloatLE = t.bind(null, n), e.writeFloatBE = t.bind(null, r), e.readFloatLE = s.bind(null, i), e.readFloatBE = s.bind(null, o);
            }(), "undefined" != typeof Float64Array ? function () {
              var t = new Float64Array([-0]),
                n = new Uint8Array(t.buffer),
                r = 128 === n[7];
              function i(e, r, i) {
                t[0] = e, r[i] = n[0], r[i + 1] = n[1], r[i + 2] = n[2], r[i + 3] = n[3], r[i + 4] = n[4], r[i + 5] = n[5], r[i + 6] = n[6], r[i + 7] = n[7];
              }
              function o(e, r, i) {
                t[0] = e, r[i] = n[7], r[i + 1] = n[6], r[i + 2] = n[5], r[i + 3] = n[4], r[i + 4] = n[3], r[i + 5] = n[2], r[i + 6] = n[1], r[i + 7] = n[0];
              }
              function s(e, r) {
                return n[0] = e[r], n[1] = e[r + 1], n[2] = e[r + 2], n[3] = e[r + 3], n[4] = e[r + 4], n[5] = e[r + 5], n[6] = e[r + 6], n[7] = e[r + 7], t[0];
              }
              function a(e, r) {
                return n[7] = e[r], n[6] = e[r + 1], n[5] = e[r + 2], n[4] = e[r + 3], n[3] = e[r + 4], n[2] = e[r + 5], n[1] = e[r + 6], n[0] = e[r + 7], t[0];
              }
              e.writeDoubleLE = r ? i : o, e.writeDoubleBE = r ? o : i, e.readDoubleLE = r ? s : a, e.readDoubleBE = r ? a : s;
            }() : function () {
              function t(e, t, n, r, i, o) {
                var s = r < 0 ? 1 : 0;
                if (s && (r = -r), 0 === r) e(0, i, o + t), e(1 / r > 0 ? 0 : 2147483648, i, o + n);else if (isNaN(r)) e(0, i, o + t), e(2146959360, i, o + n);else if (r > 17976931348623157e292) e(0, i, o + t), e((s << 31 | 2146435072) >>> 0, i, o + n);else {
                  var a;
                  if (r < 22250738585072014e-324) e((a = r / 5e-324) >>> 0, i, o + t), e((s << 31 | a / 4294967296) >>> 0, i, o + n);else {
                    var c = Math.floor(Math.log(r) / Math.LN2);
                    1024 === c && (c = 1023), e(4503599627370496 * (a = r * Math.pow(2, -c)) >>> 0, i, o + t), e((s << 31 | c + 1023 << 20 | 1048576 * a & 1048575) >>> 0, i, o + n);
                  }
                }
              }
              function s(e, t, n, r, i) {
                var o = e(r, i + t),
                  s = e(r, i + n),
                  a = 2 * (s >> 31) + 1,
                  c = s >>> 20 & 2047,
                  l = 4294967296 * (1048575 & s) + o;
                return 2047 === c ? l ? NaN : a * (1 / 0) : 0 === c ? 5e-324 * a * l : a * Math.pow(2, c - 1075) * (l + 4503599627370496);
              }
              e.writeDoubleLE = t.bind(null, n, 0, 4), e.writeDoubleBE = t.bind(null, r, 4, 0), e.readDoubleLE = s.bind(null, i, 0, 4), e.readDoubleBE = s.bind(null, o, 4, 0);
            }(), e;
          }
          function n(e, t, n) {
            t[n] = 255 & e, t[n + 1] = e >>> 8 & 255, t[n + 2] = e >>> 16 & 255, t[n + 3] = e >>> 24;
          }
          function r(e, t, n) {
            t[n] = e >>> 24, t[n + 1] = e >>> 16 & 255, t[n + 2] = e >>> 8 & 255, t[n + 3] = 255 & e;
          }
          function i(e, t) {
            return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
          }
          function o(e, t) {
            return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
          }
          e.exports = t(t);
        },
        199: function _(module) {
          "use strict";

          function inquire(moduleName) {
            try {
              var mod = eval("quire".replace(/^/, "re"))(moduleName);
              if (mod && (mod.length || Object.keys(mod).length)) return mod;
            } catch (e) {}
            return null;
          }
          module.exports = inquire;
        },
        662: function _(e) {
          "use strict";

          e.exports = function (e, t, n) {
            var r = n || 8192,
              i = r >>> 1,
              o = null,
              s = r;
            return function (n) {
              if (n < 1 || n > i) return e(n);
              s + n > r && (o = e(r), s = 0);
              var a = t.call(o, s, s += n);
              return 7 & s && (s = 1 + (7 | s)), a;
            };
          };
        },
        997: function _(e, t) {
          "use strict";

          var n = t;
          n.length = function (e) {
            for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
              (n = e.charCodeAt(r)) < 128 ? t += 1 : n < 2048 ? t += 2 : 55296 == (64512 & n) && 56320 == (64512 & e.charCodeAt(r + 1)) ? (++r, t += 4) : t += 3;
            }
            return t;
          }, n.read = function (e, t, n) {
            if (n - t < 1) return "";
            for (var r, i = null, o = [], s = 0; t < n;) {
              (r = e[t++]) < 128 ? o[s++] = r : r > 191 && r < 224 ? o[s++] = (31 & r) << 6 | 63 & e[t++] : r > 239 && r < 365 ? (r = ((7 & r) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536, o[s++] = 55296 + (r >> 10), o[s++] = 56320 + (1023 & r)) : o[s++] = (15 & r) << 12 | (63 & e[t++]) << 6 | 63 & e[t++], s > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, o)), s = 0);
            }
            return i ? (s && i.push(String.fromCharCode.apply(String, o.slice(0, s))), i.join("")) : String.fromCharCode.apply(String, o.slice(0, s));
          }, n.write = function (e, t, n) {
            for (var r, i, o = n, s = 0; s < e.length; ++s) {
              (r = e.charCodeAt(s)) < 128 ? t[n++] = r : r < 2048 ? (t[n++] = r >> 6 | 192, t[n++] = 63 & r | 128) : 55296 == (64512 & r) && 56320 == (64512 & (i = e.charCodeAt(s + 1))) ? (r = 65536 + ((1023 & r) << 10) + (1023 & i), ++s, t[n++] = r >> 18 | 240, t[n++] = r >> 12 & 63 | 128, t[n++] = r >> 6 & 63 | 128, t[n++] = 63 & r | 128) : (t[n++] = r >> 12 | 224, t[n++] = r >> 6 & 63 | 128, t[n++] = 63 & r | 128);
            }
            return n - o;
          };
        },
        699: function _(e, t, n) {
          "use strict";

          var r,
            i,
            o,
            s,
            a,
            c = n(100),
            l = c.Writer,
            u = c.util,
            p = c.roots.default || (c.roots.default = {});
          p.io = ((a = {}).agora = ((s = {}).pb = ((o = {}).CounterCompact = function () {
            function e(e) {
              if (this.items = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
            }
            return e.prototype.sid = "", e.prototype.peer = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.items = u.emptyArray, e.create = function (t) {
              return new e(t);
            }, e.encode = function (e, t) {
              if (t || (t = l.create()), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(10).string(e.sid), null != e.peer && Object.hasOwnProperty.call(e, "peer") && t.uint32(16).int64(e.peer), null != e.items && e.items.length) for (var n = 0; n < e.items.length; ++n) {
                p.io.agora.pb.Item.encode(e.items[n], t.uint32(26).fork()).ldelim();
              }
              return t;
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }, e;
          }(), o.Item = function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
            }
            return e.prototype.lts = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.id = 11001, e.prototype.value = 0, e.prototype.tagErrorCode = 0, e.prototype.streamId = 0, e.create = function (t) {
              return new e(t);
            }, e.encode = function (e, t) {
              return t || (t = l.create()), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(8).int64(e.lts), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(16).int32(e.id), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(24).int32(e.value), null != e.tagErrorCode && Object.hasOwnProperty.call(e, "tagErrorCode") && t.uint32(32).int32(e.tagErrorCode), null != e.streamId && Object.hasOwnProperty.call(e, "streamId") && t.uint32(40).uint32(e.streamId), t;
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }, e;
          }(), o.Id = (r = {}, (i = Object.create(r))[r[11001] = "Miniapp_SDK_Pusher_Video_Bitrate"] = 11001, i[r[11002] = "Miniapp_SDK_Pusher_Audio_Bitrate"] = 11002, i[r[11003] = "Miniapp_SDK_Pusher_Video_FPS"] = 11003, i[r[11004] = "Miniapp_SDK_Pusher_Video_GOP"] = 11004, i[r[11005] = "Miniapp_SDK_Pusher_Net_Speed"] = 11005, i[r[11006] = "Miniapp_SDK_Pusher_Video_Cache"] = 11006, i[r[11007] = "Miniapp_SDK_Pusher_Audio_Cache"] = 11007, i[r[11008] = "Miniapp_SDK_Player_Video_Bitrate"] = 11008, i[r[11009] = "Miniapp_SDK_Player_Audio_Bitrate"] = 11009, i[r[11010] = "Miniapp_SDK_Player_Video_FPS"] = 11010, i[r[11011] = "Miniapp_SDK_Player_Video_GOP"] = 11011, i[r[11012] = "Miniapp_SDK_Player_Net_Speed"] = 11012, i[r[11013] = "Miniapp_SDK_Player_Video_Cache"] = 11013, i[r[11014] = "Miniapp_SDK_Player_Audio_Cache"] = 11014, i[r[11015] = "Miniapp_SDK_Player_V_Dec_Cache_Size"] = 11015, i[r[11016] = "Miniapp_SDK_Player_V_Sum_Cache_Size"] = 11016, i[r[11017] = "Miniapp_SDK_Player_AV_Play_Interval"] = 11017, i[r[11018] = "Miniapp_SDK_Player_AV_Recv_Interval"] = 11018, i[r[11019] = "Miniapp_SDK_Player_Audio_Cache_Threshold"] = 11019, i[r[11022] = "Miniapp_SDK_Pusher_Video_Height"] = 11022, i[r[11023] = "Miniapp_SDK_Pusher_Video_Width"] = 11023, i[r[11024] = "Miniapp_SDK_Player_Video_Width"] = 11024, i[r[11025] = "Miniapp_SDK_Player_Video_Height"] = 11025, i[r[11035] = "Miniapp_SDK_Pusher_Net_Jitter"] = 11035, i[r[11036] = "Miniapp_SDK_Pusher_Net_QualityLevel"] = 11036, i[r[11037] = "Miniapp_SDK_Player_Net_Jitter"] = 11037, i[r[11038] = "Miniapp_SDK_Player_Net_QualityLevel"] = 11038, i), o.ConnectWebSocket = function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
            }
            return e.prototype.lts = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.sid = "", e.prototype.cname = "", e.prototype.cid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ip = "", e.prototype.uid = "", e.prototype.success = 0, e.prototype.elapse = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.peer = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.gateway = "", e.prototype.ec = "", e.prototype.wsurl = "", e.prototype.details = "", e.create = function (t) {
              return new e(t);
            }, e.encode = function (e, t) {
              return t || (t = l.create()), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(8).int64(e.lts), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(18).string(e.sid), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(26).string(e.cname), null != e.cid && Object.hasOwnProperty.call(e, "cid") && t.uint32(32).int64(e.cid), null != e.ip && Object.hasOwnProperty.call(e, "ip") && t.uint32(42).string(e.ip), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(50).string(e.uid), null != e.success && Object.hasOwnProperty.call(e, "success") && t.uint32(56).int32(e.success), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(64).int64(e.elapse), null != e.peer && Object.hasOwnProperty.call(e, "peer") && t.uint32(72).int64(e.peer), null != e.gateway && Object.hasOwnProperty.call(e, "gateway") && t.uint32(82).string(e.gateway), null != e.ec && Object.hasOwnProperty.call(e, "ec") && t.uint32(90).string(e.ec), null != e.wsurl && Object.hasOwnProperty.call(e, "wsurl") && t.uint32(98).string(e.wsurl), null != e.details && Object.hasOwnProperty.call(e, "details") && t.uint32(106).string(e.details), t;
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }, e;
          }(), o.Join = function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
            }
            return e.prototype.lts = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.sid = "", e.prototype.cname = "", e.prototype.cid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ip = "", e.prototype.uid = "", e.prototype.success = 0, e.prototype.elapse = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.peer = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ec = "", e.prototype.isrejoin = 0, e.prototype.details = "", e.create = function (t) {
              return new e(t);
            }, e.encode = function (e, t) {
              return t || (t = l.create()), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(8).int64(e.lts), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(18).string(e.sid), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(26).string(e.cname), null != e.cid && Object.hasOwnProperty.call(e, "cid") && t.uint32(32).int64(e.cid), null != e.ip && Object.hasOwnProperty.call(e, "ip") && t.uint32(42).string(e.ip), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(50).string(e.uid), null != e.success && Object.hasOwnProperty.call(e, "success") && t.uint32(56).int32(e.success), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(64).int64(e.elapse), null != e.peer && Object.hasOwnProperty.call(e, "peer") && t.uint32(72).int64(e.peer), null != e.ec && Object.hasOwnProperty.call(e, "ec") && t.uint32(82).string(e.ec), null != e.isrejoin && Object.hasOwnProperty.call(e, "isrejoin") && t.uint32(88).int32(e.isrejoin), null != e.details && Object.hasOwnProperty.call(e, "details") && t.uint32(98).string(e.details), t;
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }, e;
          }(), o.JoinChooseServer = function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
            }
            return e.prototype.lts = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.sid = "", e.prototype.cname = "", e.prototype.cid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ip = "", e.prototype.uid = "", e.prototype.success = 0, e.prototype.elapse = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.peer = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.csurl = "", e.prototype.ec = "", e.prototype.gatewaylist = "", e.prototype.details = "", e.create = function (t) {
              return new e(t);
            }, e.encode = function (e, t) {
              return t || (t = l.create()), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(8).int64(e.lts), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(18).string(e.sid), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(26).string(e.cname), null != e.cid && Object.hasOwnProperty.call(e, "cid") && t.uint32(32).int64(e.cid), null != e.ip && Object.hasOwnProperty.call(e, "ip") && t.uint32(42).string(e.ip), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(50).string(e.uid), null != e.success && Object.hasOwnProperty.call(e, "success") && t.uint32(56).int32(e.success), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(64).int64(e.elapse), null != e.peer && Object.hasOwnProperty.call(e, "peer") && t.uint32(72).int64(e.peer), null != e.csurl && Object.hasOwnProperty.call(e, "csurl") && t.uint32(82).string(e.csurl), null != e.ec && Object.hasOwnProperty.call(e, "ec") && t.uint32(90).string(e.ec), null != e.gatewaylist && Object.hasOwnProperty.call(e, "gatewaylist") && t.uint32(98).string(e.gatewaylist), null != e.details && Object.hasOwnProperty.call(e, "details") && t.uint32(106).string(e.details), t;
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }, e;
          }(), o.Leave = function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
            }
            return e.prototype.lts = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.sid = "", e.prototype.cname = "", e.prototype.cid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ip = "", e.prototype.uid = "", e.prototype.success = 0, e.prototype.elapse = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.peer = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.details = "", e.create = function (t) {
              return new e(t);
            }, e.encode = function (e, t) {
              return t || (t = l.create()), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(8).int64(e.lts), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(18).string(e.sid), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(26).string(e.cname), null != e.cid && Object.hasOwnProperty.call(e, "cid") && t.uint32(32).int64(e.cid), null != e.ip && Object.hasOwnProperty.call(e, "ip") && t.uint32(42).string(e.ip), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(50).string(e.uid), null != e.success && Object.hasOwnProperty.call(e, "success") && t.uint32(56).int32(e.success), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(64).int64(e.elapse), null != e.peer && Object.hasOwnProperty.call(e, "peer") && t.uint32(72).int64(e.peer), null != e.details && Object.hasOwnProperty.call(e, "details") && t.uint32(82).string(e.details), t;
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }, e;
          }(), o.MuteLocal = function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
            }
            return e.prototype.lts = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.vid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.sid = "", e.prototype.cname = "", e.prototype.cid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ip = "", e.prototype.uid = "", e.prototype.success = 0, e.prototype.elapse = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ec = "", e.prototype.target = 0, e.prototype.mute = 0, e.create = function (t) {
              return new e(t);
            }, e.encode = function (e, t) {
              return t || (t = l.create()), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(8).int64(e.lts), null != e.vid && Object.hasOwnProperty.call(e, "vid") && t.uint32(16).int64(e.vid), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(26).string(e.sid), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(34).string(e.cname), null != e.cid && Object.hasOwnProperty.call(e, "cid") && t.uint32(40).int64(e.cid), null != e.ip && Object.hasOwnProperty.call(e, "ip") && t.uint32(50).string(e.ip), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(58).string(e.uid), null != e.success && Object.hasOwnProperty.call(e, "success") && t.uint32(64).int32(e.success), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(72).int64(e.elapse), null != e.ec && Object.hasOwnProperty.call(e, "ec") && t.uint32(90).string(e.ec), null != e.target && Object.hasOwnProperty.call(e, "target") && t.uint32(96).int32(e.target), null != e.mute && Object.hasOwnProperty.call(e, "mute") && t.uint32(104).int32(e.mute), t;
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }, e;
          }(), o.MuteRemote = function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
            }
            return e.prototype.lts = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.vid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.sid = "", e.prototype.cname = "", e.prototype.cid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ip = "", e.prototype.uid = "", e.prototype.success = 0, e.prototype.elapse = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.peer = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ec = "", e.prototype.target = 0, e.prototype.mute = 0, e.create = function (t) {
              return new e(t);
            }, e.encode = function (e, t) {
              return t || (t = l.create()), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(8).int64(e.lts), null != e.vid && Object.hasOwnProperty.call(e, "vid") && t.uint32(16).int64(e.vid), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(26).string(e.sid), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(34).string(e.cname), null != e.cid && Object.hasOwnProperty.call(e, "cid") && t.uint32(40).int64(e.cid), null != e.ip && Object.hasOwnProperty.call(e, "ip") && t.uint32(50).string(e.ip), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(58).string(e.uid), null != e.success && Object.hasOwnProperty.call(e, "success") && t.uint32(64).int32(e.success), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(72).int64(e.elapse), null != e.peer && Object.hasOwnProperty.call(e, "peer") && t.uint32(80).int64(e.peer), null != e.ec && Object.hasOwnProperty.call(e, "ec") && t.uint32(90).string(e.ec), null != e.target && Object.hasOwnProperty.call(e, "target") && t.uint32(96).int32(e.target), null != e.mute && Object.hasOwnProperty.call(e, "mute") && t.uint32(104).int32(e.mute), t;
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }, e;
          }(), o.PlayerState = function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
            }
            return e.prototype.lts = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.sid = "", e.prototype.cname = "", e.prototype.cid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ip = "", e.prototype.uid = "", e.prototype.success = 0, e.prototype.elapse = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.peer = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.url = "", e.prototype.code = 0, e.prototype.status = "", e.prototype.error = "", e.prototype.details = "", e.create = function (t) {
              return new e(t);
            }, e.encode = function (e, t) {
              return t || (t = l.create()), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(8).int64(e.lts), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(18).string(e.sid), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(26).string(e.cname), null != e.cid && Object.hasOwnProperty.call(e, "cid") && t.uint32(32).int64(e.cid), null != e.ip && Object.hasOwnProperty.call(e, "ip") && t.uint32(42).string(e.ip), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(50).string(e.uid), null != e.success && Object.hasOwnProperty.call(e, "success") && t.uint32(56).int32(e.success), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(64).int64(e.elapse), null != e.peer && Object.hasOwnProperty.call(e, "peer") && t.uint32(72).int64(e.peer), null != e.url && Object.hasOwnProperty.call(e, "url") && t.uint32(82).string(e.url), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(88).int32(e.code), null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(98).string(e.status), null != e.error && Object.hasOwnProperty.call(e, "error") && t.uint32(106).string(e.error), null != e.details && Object.hasOwnProperty.call(e, "details") && t.uint32(114).string(e.details), t;
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }, e;
          }(), o.Publish = function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
            }
            return e.prototype.lts = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.sid = "", e.prototype.cname = "", e.prototype.cid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ip = "", e.prototype.uid = "", e.prototype.success = 0, e.prototype.elapse = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.peer = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ec = "", e.prototype.pushurl = "", e.prototype.details = "", e.create = function (t) {
              return new e(t);
            }, e.encode = function (e, t) {
              return t || (t = l.create()), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(8).int64(e.lts), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(18).string(e.sid), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(26).string(e.cname), null != e.cid && Object.hasOwnProperty.call(e, "cid") && t.uint32(32).int64(e.cid), null != e.ip && Object.hasOwnProperty.call(e, "ip") && t.uint32(42).string(e.ip), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(50).string(e.uid), null != e.success && Object.hasOwnProperty.call(e, "success") && t.uint32(56).int32(e.success), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(64).int64(e.elapse), null != e.peer && Object.hasOwnProperty.call(e, "peer") && t.uint32(72).int64(e.peer), null != e.ec && Object.hasOwnProperty.call(e, "ec") && t.uint32(82).string(e.ec), null != e.pushurl && Object.hasOwnProperty.call(e, "pushurl") && t.uint32(90).string(e.pushurl), null != e.details && Object.hasOwnProperty.call(e, "details") && t.uint32(106).string(e.details), t;
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }, e;
          }(), o.PusherState = function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
            }
            return e.prototype.lts = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.sid = "", e.prototype.cname = "", e.prototype.cid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ip = "", e.prototype.uid = "", e.prototype.success = 0, e.prototype.elapse = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.peer = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.url = "", e.prototype.code = 0, e.prototype.status = "", e.prototype.error = "", e.prototype.details = "", e.create = function (t) {
              return new e(t);
            }, e.encode = function (e, t) {
              return t || (t = l.create()), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(8).int64(e.lts), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(18).string(e.sid), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(26).string(e.cname), null != e.cid && Object.hasOwnProperty.call(e, "cid") && t.uint32(32).int64(e.cid), null != e.ip && Object.hasOwnProperty.call(e, "ip") && t.uint32(42).string(e.ip), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(50).string(e.uid), null != e.success && Object.hasOwnProperty.call(e, "success") && t.uint32(56).int32(e.success), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(64).int64(e.elapse), null != e.peer && Object.hasOwnProperty.call(e, "peer") && t.uint32(72).int64(e.peer), null != e.url && Object.hasOwnProperty.call(e, "url") && t.uint32(82).string(e.url), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(88).int32(e.code), null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(98).string(e.status), null != e.error && Object.hasOwnProperty.call(e, "error") && t.uint32(106).string(e.error), null != e.details && Object.hasOwnProperty.call(e, "details") && t.uint32(114).string(e.details), t;
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }, e;
          }(), o.ServerEvent = function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
            }
            return e.prototype.lts = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.sid = "", e.prototype.cname = "", e.prototype.cid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ip = "", e.prototype.uid = "", e.prototype.success = 0, e.prototype.elapse = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.peer = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.action = "", e.prototype.details = "", e.prototype.reqTs = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.create = function (t) {
              return new e(t);
            }, e.encode = function (e, t) {
              return t || (t = l.create()), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(8).int64(e.lts), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(18).string(e.sid), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(26).string(e.cname), null != e.cid && Object.hasOwnProperty.call(e, "cid") && t.uint32(32).int64(e.cid), null != e.ip && Object.hasOwnProperty.call(e, "ip") && t.uint32(42).string(e.ip), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(50).string(e.uid), null != e.success && Object.hasOwnProperty.call(e, "success") && t.uint32(56).int32(e.success), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(64).int64(e.elapse), null != e.peer && Object.hasOwnProperty.call(e, "peer") && t.uint32(72).int64(e.peer), null != e.action && Object.hasOwnProperty.call(e, "action") && t.uint32(82).string(e.action), null != e.details && Object.hasOwnProperty.call(e, "details") && t.uint32(90).string(e.details), null != e.reqTs && Object.hasOwnProperty.call(e, "reqTs") && t.uint32(96).int64(e.reqTs), t;
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }, e;
          }(), o.Session = function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
            }
            return e.prototype.lts = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.sid = "", e.prototype.cname = "", e.prototype.cid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ip = "", e.prototype.uid = "", e.prototype.success = 0, e.prototype.elapse = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.peer = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.appid = "", e.prototype.uname = "", e.prototype.ver = "", e.prototype.dk = "", e.prototype.details = "", e.create = function (t) {
              return new e(t);
            }, e.encode = function (e, t) {
              return t || (t = l.create()), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(8).int64(e.lts), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(18).string(e.sid), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(26).string(e.cname), null != e.cid && Object.hasOwnProperty.call(e, "cid") && t.uint32(32).int64(e.cid), null != e.ip && Object.hasOwnProperty.call(e, "ip") && t.uint32(42).string(e.ip), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(50).string(e.uid), null != e.success && Object.hasOwnProperty.call(e, "success") && t.uint32(56).int32(e.success), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(64).int64(e.elapse), null != e.peer && Object.hasOwnProperty.call(e, "peer") && t.uint32(72).int64(e.peer), null != e.appid && Object.hasOwnProperty.call(e, "appid") && t.uint32(82).string(e.appid), null != e.uname && Object.hasOwnProperty.call(e, "uname") && t.uint32(90).string(e.uname), null != e.ver && Object.hasOwnProperty.call(e, "ver") && t.uint32(98).string(e.ver), null != e.dk && Object.hasOwnProperty.call(e, "dk") && t.uint32(106).string(e.dk), null != e.details && Object.hasOwnProperty.call(e, "details") && t.uint32(114).string(e.details), t;
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }, e;
          }(), o.Subscribe = function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
            }
            return e.prototype.lts = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.sid = "", e.prototype.cname = "", e.prototype.cid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ip = "", e.prototype.uid = "", e.prototype.success = 0, e.prototype.elapse = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.peer = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ec = "", e.prototype.pullurl = "", e.prototype.peerid = "", e.prototype.details = "", e.create = function (t) {
              return new e(t);
            }, e.encode = function (e, t) {
              return t || (t = l.create()), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(8).int64(e.lts), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(18).string(e.sid), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(26).string(e.cname), null != e.cid && Object.hasOwnProperty.call(e, "cid") && t.uint32(32).int64(e.cid), null != e.ip && Object.hasOwnProperty.call(e, "ip") && t.uint32(42).string(e.ip), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(50).string(e.uid), null != e.success && Object.hasOwnProperty.call(e, "success") && t.uint32(56).int32(e.success), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(64).int64(e.elapse), null != e.peer && Object.hasOwnProperty.call(e, "peer") && t.uint32(72).int64(e.peer), null != e.ec && Object.hasOwnProperty.call(e, "ec") && t.uint32(82).string(e.ec), null != e.pullurl && Object.hasOwnProperty.call(e, "pullurl") && t.uint32(90).string(e.pullurl), null != e.peerid && Object.hasOwnProperty.call(e, "peerid") && t.uint32(98).string(e.peerid), null != e.details && Object.hasOwnProperty.call(e, "details") && t.uint32(106).string(e.details), t;
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }, e;
          }(), o.Unpublish = function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
            }
            return e.prototype.lts = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.sid = "", e.prototype.cname = "", e.prototype.cid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ip = "", e.prototype.uid = "", e.prototype.success = 0, e.prototype.elapse = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.peer = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ec = "", e.prototype.details = "", e.create = function (t) {
              return new e(t);
            }, e.encode = function (e, t) {
              return t || (t = l.create()), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(8).int64(e.lts), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(18).string(e.sid), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(26).string(e.cname), null != e.cid && Object.hasOwnProperty.call(e, "cid") && t.uint32(32).int64(e.cid), null != e.ip && Object.hasOwnProperty.call(e, "ip") && t.uint32(42).string(e.ip), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(50).string(e.uid), null != e.success && Object.hasOwnProperty.call(e, "success") && t.uint32(56).int32(e.success), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(64).int64(e.elapse), null != e.peer && Object.hasOwnProperty.call(e, "peer") && t.uint32(72).int64(e.peer), null != e.ec && Object.hasOwnProperty.call(e, "ec") && t.uint32(82).string(e.ec), null != e.details && Object.hasOwnProperty.call(e, "details") && t.uint32(98).string(e.details), t;
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }, e;
          }(), o.Unsubscribe = function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
            }
            return e.prototype.lts = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.sid = "", e.prototype.cname = "", e.prototype.cid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ip = "", e.prototype.uid = "", e.prototype.success = 0, e.prototype.elapse = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.peer = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ec = "", e.prototype.peerid = "", e.prototype.details = "", e.create = function (t) {
              return new e(t);
            }, e.encode = function (e, t) {
              return t || (t = l.create()), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(8).int64(e.lts), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(18).string(e.sid), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(26).string(e.cname), null != e.cid && Object.hasOwnProperty.call(e, "cid") && t.uint32(32).int64(e.cid), null != e.ip && Object.hasOwnProperty.call(e, "ip") && t.uint32(42).string(e.ip), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(50).string(e.uid), null != e.success && Object.hasOwnProperty.call(e, "success") && t.uint32(56).int32(e.success), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(64).int64(e.elapse), null != e.peer && Object.hasOwnProperty.call(e, "peer") && t.uint32(72).int64(e.peer), null != e.ec && Object.hasOwnProperty.call(e, "ec") && t.uint32(82).string(e.ec), null != e.peerid && Object.hasOwnProperty.call(e, "peerid") && t.uint32(90).string(e.peerid), null != e.details && Object.hasOwnProperty.call(e, "details") && t.uint32(98).string(e.details), t;
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }, e;
          }(), o.SetRemoteVideoStreamType = function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
            }
            return e.prototype.lts = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.vid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.sid = "", e.prototype.cname = "", e.prototype.cid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ip = "", e.prototype.uid = "", e.prototype.success = 0, e.prototype.elapse = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ec = "", e.prototype.type = 0, e.create = function (t) {
              return new e(t);
            }, e.encode = function (e, t) {
              return t || (t = l.create()), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(8).int64(e.lts), null != e.vid && Object.hasOwnProperty.call(e, "vid") && t.uint32(16).int64(e.vid), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(26).string(e.sid), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(34).string(e.cname), null != e.cid && Object.hasOwnProperty.call(e, "cid") && t.uint32(40).int64(e.cid), null != e.ip && Object.hasOwnProperty.call(e, "ip") && t.uint32(50).string(e.ip), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(58).string(e.uid), null != e.success && Object.hasOwnProperty.call(e, "success") && t.uint32(64).int32(e.success), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(72).int64(e.elapse), null != e.ec && Object.hasOwnProperty.call(e, "ec") && t.uint32(82).string(e.ec), null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(88).int32(e.type), t;
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }, e;
          }(), o.RenewToken = function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
            }
            return e.prototype.lts = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.vid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.sid = "", e.prototype.cname = "", e.prototype.cid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ip = "", e.prototype.uid = "", e.prototype.success = 0, e.prototype.elapse = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ec = "", e.create = function (t) {
              return new e(t);
            }, e.encode = function (e, t) {
              return t || (t = l.create()), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(8).int64(e.lts), null != e.vid && Object.hasOwnProperty.call(e, "vid") && t.uint32(16).int64(e.vid), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(26).string(e.sid), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(34).string(e.cname), null != e.cid && Object.hasOwnProperty.call(e, "cid") && t.uint32(40).int64(e.cid), null != e.ip && Object.hasOwnProperty.call(e, "ip") && t.uint32(50).string(e.ip), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(58).string(e.uid), null != e.success && Object.hasOwnProperty.call(e, "success") && t.uint32(64).int32(e.success), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(72).int64(e.elapse), null != e.ec && Object.hasOwnProperty.call(e, "ec") && t.uint32(82).string(e.ec), t;
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }, e;
          }(), o.SetRole = function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
            }
            return e.prototype.lts = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.vid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.sid = "", e.prototype.cname = "", e.prototype.cid = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ip = "", e.prototype.uid = "", e.prototype.success = 0, e.prototype.elapse = u.Long ? u.Long.fromBits(0, 0, !1) : 0, e.prototype.ec = "", e.prototype.role = 0, e.create = function (t) {
              return new e(t);
            }, e.encode = function (e, t) {
              return t || (t = l.create()), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(8).int64(e.lts), null != e.vid && Object.hasOwnProperty.call(e, "vid") && t.uint32(16).int64(e.vid), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(26).string(e.sid), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(34).string(e.cname), null != e.cid && Object.hasOwnProperty.call(e, "cid") && t.uint32(40).int64(e.cid), null != e.ip && Object.hasOwnProperty.call(e, "ip") && t.uint32(50).string(e.ip), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(58).string(e.uid), null != e.success && Object.hasOwnProperty.call(e, "success") && t.uint32(64).int32(e.success), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(72).int64(e.elapse), null != e.ec && Object.hasOwnProperty.call(e, "ec") && t.uint32(82).string(e.ec), null != e.role && Object.hasOwnProperty.call(e, "role") && t.uint32(88).int32(e.role), t;
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            }, e;
          }(), o), s), a), e.exports = p;
        },
        446: function _(e, t, n) {
          "use strict";

          n.r(t), n.d(t, {
            DOMAIN_NAME: function DOMAIN_NAME() {
              return o;
            },
            SDK_VERSION: function SDK_VERSION() {
              return i;
            },
            VERSION: function VERSION() {
              return r;
            }
          });
          var r = "1.1.0",
            i = "2.6.4",
            o = "mini-app.broadcastapp.agoraio.cn";
        },
        426: function _(e, t, n) {
          "use strict";

          n.r(t), n.d(t, {
            generateSessionId: function generateSessionId() {
              return s;
            },
            is32Uint: function is32Uint() {
              return l;
            },
            isWeiXin: function isWeiXin() {
              return c;
            },
            random: function random() {
              return o;
            },
            shouldUseHttps: function shouldUseHttps() {
              return a;
            }
          });
          var r = n(171),
            i = n.n(r),
            o = function o(e) {
              isNaN(e) && (e = 1e3);
              var t = +new Date(),
                n = (t = (9301 * t + 49297) % 233280) / 233280;
              return Math.ceil(n * e);
            },
            s = function s() {
              return i()().replace(/-/g, "").toUpperCase();
            },
            a = function a() {
              return "https:" == document.location.protocol;
            },
            c = function c() {
              try {
                return wx, !0;
              } catch (e) {
                return !1;
              }
            },
            l = function l(e) {
              return !!(0 <= e && e <= 4294967295);
            };
        },
        186: function _(e, t, n) {
          "use strict";

          n.r(t), n.d(t, {
            default: function _default() {
              return u;
            }
          });
          var r = n(861),
            i = n(671),
            o = n(144),
            s = n(757),
            a = n.n(s),
            c = (n(568), n(446)),
            l = function () {
              function e(t) {
                var n = t.appId,
                  r = t.content,
                  o = t.ts;
                (0, i.Z)(this, e), this.appId = n, this.content = r, this.ts = o;
              }
              return (0, o.Z)(e, [{
                key: "upload",
                value: function value() {
                  var e = this;
                  return new Promise(function (t, n) {
                    wx.request({
                      url: "https://report-ad.agoralab.co/v1/log/report",
                      method: "post",
                      data: {
                        data: e.content,
                        appId: e.appId,
                        ts: e.ts,
                        src: "miniapp",
                        version: c.SDK_VERSION
                      },
                      success: function success() {
                        t();
                      },
                      fail: function fail(e) {
                        n(e);
                      }
                    });
                  });
                }
              }]), e;
            }();
          var u = new (function () {
            function e() {
              (0, i.Z)(this, e), this.level = 3, this.onLog = null, this.logItems = [], this.appId = "", this.sid = "";
            }
            return (0, o.Z)(e, [{
              key: "setOptions",
              value: function value(e) {
                var t = e.appId,
                  n = void 0 === t ? "" : t,
                  r = e.sid,
                  i = void 0 === r ? "" : r;
                this.appId = n, this.sid = i;
              }
            }, {
              key: "setLogLevel",
              value: function value(e) {
                if ("number" != typeof e || !(e <= 4 && e >= -1)) throw Error("Invalid level");
                this.level = e;
              }
            }, {
              key: "_storeLog",
              value: function value(e) {
                this.logItems.push({
                  msg: e,
                  sid: this.sid
                }), this.logItems.length > 5e4 && this.logItems.shift();
              }
            }, {
              key: "_log",
              value: function value() {
                for (var e = "", t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
                  n[r] = arguments[r];
                }
                for (var i = 0, o = n; i < o.length; i++) {
                  var s = o[i];
                  e += "string" == typeof s ? s : JSON.stringify(s);
                }
                this.onLog && this.onLog(e), this._storeLog(e), console.log(e);
              }
            }, {
              key: "_err",
              value: function value() {
                for (var e = "", t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
                  n[r] = arguments[r];
                }
                for (var i = 0, o = n; i < o.length; i++) {
                  var s = o[i];
                  e += "string" == typeof s ? s : JSON.stringify(s);
                }
                this.onLog && this.onLog(e), this._storeLog(e), console.error(e);
              }
            }, {
              key: "uploadLogs",
              value: function value(e, t) {
                var n = this;
                return new Promise(function () {
                  var i = (0, r.Z)(a().mark(function r(i, o) {
                    var s, c, u, p;
                    return a().wrap(function (r) {
                      for (;;) {
                        switch (r.prev = r.next) {
                          case 0:
                            if (n.appId && "string" == typeof n.appId) {
                              r.next = 6;
                              break;
                            }
                            return s = new Error("uploadLogs before client init"), n.error("uploadLogs failed: ".concat(s.message)), t && t(s), o(s), r.abrupt("return");
                          case 6:
                            if (n.sid && "string" == typeof n.sid) {
                              r.next = 12;
                              break;
                            }
                            return c = new Error("uploadLogs before client init"), n.error("uploadLogs failed: ".concat(c.message)), t && t(c), o(c), r.abrupt("return");
                          case 12:
                            for (u = []; n.logItems.length;) {
                              p = n.logItems.splice(0, 500), u.push(new l({
                                appId: n.appId,
                                content: p,
                                ts: new Date().getTime()
                              }));
                            }
                            Promise.all(u.map(function (e) {
                              return e.upload();
                            })).then(function (t) {
                              n.debug("uploadLogs success"), e && e(), i();
                            }, function (e) {
                              var r = (null == e ? void 0 : e.errMsg) || (null == e ? void 0 : e.message) || e;
                              n.error("uploadLogs failed: ".concat(r)), t && t(e), o(e);
                            });
                          case 15:
                          case "end":
                            return r.stop();
                        }
                      }
                    }, r);
                  }));
                  return function (e, t) {
                    return i.apply(this, arguments);
                  };
                }());
              }
            }, {
              key: "blind",
              value: function value() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
                  t[n] = arguments[n];
                }
                this.level <= -1 && this._log.apply(this, ["".concat(new Date(), "[BLIND]: ")].concat(t));
              }
            }, {
              key: "debug",
              value: function value() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
                  t[n] = arguments[n];
                }
                this.level <= 0 && this._log.apply(this, ["".concat(new Date(), "[DEBUG]: ")].concat(t));
              }
            }, {
              key: "info",
              value: function value() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
                  t[n] = arguments[n];
                }
                this.level <= 1 && this._log.apply(this, ["".concat(new Date(), "[INFO]: ")].concat(t));
              }
            }, {
              key: "warn",
              value: function value() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
                  t[n] = arguments[n];
                }
                this.level <= 2 && this._log.apply(this, ["".concat(new Date(), "[WARN]: ")].concat(t));
              }
            }, {
              key: "error",
              value: function value() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
                  t[n] = arguments[n];
                }
                this.level <= 3 && this._err.apply(this, ["".concat(new Date(), "[ERROR]: ")].concat(t));
              }
            }]), e;
          }())();
        },
        483: function _(e, t, n) {
          "use strict";

          n.r(t), n.d(t, {
            checkValidBoolean: function checkValidBoolean() {
              return l;
            },
            checkValidEnum: function checkValidEnum() {
              return i;
            },
            checkValidFloatNumber: function checkValidFloatNumber() {
              return c;
            },
            checkValidNumber: function checkValidNumber() {
              return a;
            },
            checkValidObject: function checkValidObject() {
              return o;
            },
            checkValidString: function checkValidString() {
              return s;
            },
            getServerUrlIp: function getServerUrlIp() {
              return b;
            },
            isASCII: function isASCII() {
              return _;
            },
            isArray: function isArray() {
              return w;
            },
            isEmpty: function isEmpty() {
              return O;
            },
            isInteger: function isInteger() {
              return g;
            },
            isNumber: function isNumber() {
              return v;
            },
            isString: function isString() {
              return m;
            },
            isValidBoolean: function isValidBoolean() {
              return d;
            },
            isValidChannelName: function isValidChannelName() {
              return y;
            },
            isValidNumber: function isValidNumber() {
              return p;
            },
            isValidString: function isValidString() {
              return u;
            },
            isValidToken: function isValidToken() {
              return f;
            },
            stringifyErr: function stringifyErr() {
              return E;
            },
            throttle: function throttle() {
              return S;
            },
            transformElapseStr: function transformElapseStr() {
              return R;
            }
          });
          var r = n(2),
            i = function i(e, t, n) {
              for (var r = 0; r < n.length; r++) {
                if (e === n[r]) return !0;
              }
              throw new Error("".concat(t, " can only be set as ").concat(JSON.stringify(n)));
            },
            o = function o(e, t) {
              if (!e) throw new Error("Invalid param: ".concat(t || "param", " cannot be empty"));
              if ("object" !== (0, r.Z)(e)) throw new Error("".concat(t || "This paramter", " is of the object type"));
              return !0;
            },
            s = function s(e, t, n, r, i) {
              if (O(n) && (n = 1), r = r || 255, O(i) && (i = !0), O(e)) throw new Error("".concat(t || "param", " cannot be empty"));
              if (!u(e, n, r, i)) throw new Error("Invalid ".concat(t || "string param", ": Length of the string: [").concat(n, ",").concat(r, "].").concat(i ? " ASCII characters only." : ""));
            },
            a = function a(e, t, n, r) {
              if (O(n) && (n = 1), r = r || 1e4, O(e)) throw new Error("".concat(t || "param", " cannot be empty"));
              if (!p(e, n, r)) throw new Error("Invalid ".concat(t || "number param", ": The value range is [").concat(n, ",").concat(r, "]. integer only"));
            },
            c = function c(e, t, n, r) {
              if (null == e) throw new Error("".concat(t || "param", " cannot be null"));
              if (O(n) && (n = 0), r = r || 1e4, O(e)) throw new Error("".concat(t || "param", " cannot be empty"));
              if (!h(e, n, r)) throw new Error("Invalid ".concat(t || "number param", ": The value range is [").concat(n, ",").concat(r, "]."));
            },
            l = function l(e, t) {
              if (O(e)) throw new Error("".concat(t || "param", " cannot be empty"));
              if (!d(e)) throw new Error("Invalid ".concat(t || "boolean param", ": The value is of the boolean type."));
            },
            u = function u(e, t, n, r) {
              return t || (t = 0), n || (n = Number.MAX_SAFE_INTEGER), O(r) && (r = !0), m(e) && (!r || _(e)) && e.length >= t && e.length <= n;
            },
            p = function p(e, t, n) {
              return g(e) && e >= t && e <= n;
            },
            h = function h(e, t, n) {
              return v(e) && e >= t && e <= n;
            },
            d = function d(e) {
              return "boolean" == typeof e;
            },
            f = function f(e) {
              return u(e, 1, 2047);
            },
            y = function y(e) {
              return m(e) && /^[a-zA-Z0-9 \!\#\$\%\&\(\)\+\-\:\;\<\=\.\>\?\@\[\]\^\_\{\}\|\~\,]{1,64}$/.test(e);
            },
            _ = function _(e) {
              if ("string" == typeof e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e.charCodeAt(t);
                  if (n < 0 || n > 255) return !1;
                }
                return !0;
              }
            },
            g = function g(e) {
              return "number" == typeof e && e % 1 == 0;
            },
            v = function v(e) {
              return "number" == typeof e;
            },
            m = function m(e) {
              return "string" == typeof e;
            },
            w = function w(e) {
              return e instanceof Array;
            },
            O = function O(e) {
              return null == e;
            },
            E = function E(e) {
              return e instanceof Error || e.message ? e.message : JSON.stringify(e);
            },
            b = function b(e) {
              var t = /wss:\/\/miniapp.agoraio.cn\/(\S+)\/api/g.exec(e);
              return t instanceof Array && t[1] || "";
            },
            R = function R() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
              return (e = Number(e)) <= 0 ? "<0ms" : e > 0 && e <= 50 ? "0~50ms" : e > 50 && e <= 100 ? "50~100ms" : e > 100 && e <= 200 ? "100~200ms" : e > 200 && e <= 300 ? "200~300ms" : e > 300 && e <= 500 ? "300~500ms" : e > 500 && e <= 800 ? "500~800ms" : e > 800 && e <= 1e3 ? "800~1000ms" : e > 1e3 && e <= 1500 ? "1~1.5s" : e > 1500 && e <= 2e3 ? "1.5~2s" : e > 2e3 && e <= 3e3 ? "2~3s" : e > 3e3 && e <= 5e3 ? "3~5s" : e > 5e3 && e <= 8e3 ? "5~8s" : e > 8e3 && e <= 1e4 ? "8~10s" : ">10s";
            },
            S = function S(e) {
              var t,
                n,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
              return function () {
                for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) {
                  o[s] = arguments[s];
                }
                var a = +new Date();
                t && a < t + r ? (clearTimeout(n), n = setTimeout(function () {
                  t = a, e.apply(void 0, o);
                }, r)) : (t = a, e.apply(void 0, o));
              };
            };
        },
        487: function _(e) {
          var t = {
            utf8: {
              stringToBytes: function stringToBytes(e) {
                return t.bin.stringToBytes(unescape(encodeURIComponent(e)));
              },
              bytesToString: function bytesToString(e) {
                return decodeURIComponent(escape(t.bin.bytesToString(e)));
              }
            },
            bin: {
              stringToBytes: function stringToBytes(e) {
                for (var t = [], n = 0; n < e.length; n++) {
                  t.push(255 & e.charCodeAt(n));
                }
                return t;
              },
              bytesToString: function bytesToString(e) {
                for (var t = [], n = 0; n < e.length; n++) {
                  t.push(String.fromCharCode(e[n]));
                }
                return t.join("");
              }
            }
          };
          e.exports = t;
        },
        12: function _(e) {
          var t, n;
          t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
            rotl: function rotl(e, t) {
              return e << t | e >>> 32 - t;
            },
            rotr: function rotr(e, t) {
              return e << 32 - t | e >>> t;
            },
            endian: function endian(e) {
              if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
              for (var t = 0; t < e.length; t++) {
                e[t] = n.endian(e[t]);
              }
              return e;
            },
            randomBytes: function randomBytes(e) {
              for (var t = []; e > 0; e--) {
                t.push(Math.floor(256 * Math.random()));
              }
              return t;
            },
            bytesToWords: function bytesToWords(e) {
              for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) {
                t[r >>> 5] |= e[n] << 24 - r % 32;
              }
              return t;
            },
            wordsToBytes: function wordsToBytes(e) {
              for (var t = [], n = 0; n < 32 * e.length; n += 8) {
                t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
              }
              return t;
            },
            bytesToHex: function bytesToHex(e) {
              for (var t = [], n = 0; n < e.length; n++) {
                t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
              }
              return t.join("");
            },
            hexToBytes: function hexToBytes(e) {
              for (var t = [], n = 0; n < e.length; n += 2) {
                t.push(parseInt(e.substr(n, 2), 16));
              }
              return t;
            },
            bytesToBase64: function bytesToBase64(e) {
              for (var n = [], r = 0; r < e.length; r += 3) {
                for (var i = e[r] << 16 | e[r + 1] << 8 | e[r + 2], o = 0; o < 4; o++) {
                  8 * r + 6 * o <= 8 * e.length ? n.push(t.charAt(i >>> 6 * (3 - o) & 63)) : n.push("=");
                }
              }
              return n.join("");
            },
            base64ToBytes: function base64ToBytes(e) {
              e = e.replace(/[^A-Z0-9+\/]/gi, "");
              for (var n = [], r = 0, i = 0; r < e.length; i = ++r % 4) {
                0 != i && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | t.indexOf(e.charAt(r)) >>> 6 - 2 * i);
              }
              return n;
            }
          }, e.exports = n;
        },
        738: function _(e) {
          function t(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
          }
          e.exports = function (e) {
            return null != e && (t(e) || function (e) {
              return "function" == typeof e.readFloatLE && "function" == typeof e.slice && t(e.slice(0, 0));
            }(e) || !!e._isBuffer);
          };
        },
        568: function _(e, t, n) {
          var r, i, o, s, _a;
          r = n(12), i = n(487).utf8, o = n(738), s = n(487).bin, (_a = function a(e, t) {
            e.constructor == String ? e = t && "binary" === t.encoding ? s.stringToBytes(e) : i.stringToBytes(e) : o(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
            for (var n = r.bytesToWords(e), c = 8 * e.length, l = 1732584193, u = -271733879, p = -1732584194, h = 271733878, d = 0; d < n.length; d++) {
              n[d] = 16711935 & (n[d] << 8 | n[d] >>> 24) | 4278255360 & (n[d] << 24 | n[d] >>> 8);
            }
            n[c >>> 5] |= 128 << c % 32, n[14 + (c + 64 >>> 9 << 4)] = c;
            var f = _a._ff,
              y = _a._gg,
              _ = _a._hh,
              g = _a._ii;
            for (d = 0; d < n.length; d += 16) {
              var v = l,
                m = u,
                w = p,
                O = h;
              l = f(l, u, p, h, n[d + 0], 7, -680876936), h = f(h, l, u, p, n[d + 1], 12, -389564586), p = f(p, h, l, u, n[d + 2], 17, 606105819), u = f(u, p, h, l, n[d + 3], 22, -1044525330), l = f(l, u, p, h, n[d + 4], 7, -176418897), h = f(h, l, u, p, n[d + 5], 12, 1200080426), p = f(p, h, l, u, n[d + 6], 17, -1473231341), u = f(u, p, h, l, n[d + 7], 22, -45705983), l = f(l, u, p, h, n[d + 8], 7, 1770035416), h = f(h, l, u, p, n[d + 9], 12, -1958414417), p = f(p, h, l, u, n[d + 10], 17, -42063), u = f(u, p, h, l, n[d + 11], 22, -1990404162), l = f(l, u, p, h, n[d + 12], 7, 1804603682), h = f(h, l, u, p, n[d + 13], 12, -40341101), p = f(p, h, l, u, n[d + 14], 17, -1502002290), l = y(l, u = f(u, p, h, l, n[d + 15], 22, 1236535329), p, h, n[d + 1], 5, -165796510), h = y(h, l, u, p, n[d + 6], 9, -1069501632), p = y(p, h, l, u, n[d + 11], 14, 643717713), u = y(u, p, h, l, n[d + 0], 20, -373897302), l = y(l, u, p, h, n[d + 5], 5, -701558691), h = y(h, l, u, p, n[d + 10], 9, 38016083), p = y(p, h, l, u, n[d + 15], 14, -660478335), u = y(u, p, h, l, n[d + 4], 20, -405537848), l = y(l, u, p, h, n[d + 9], 5, 568446438), h = y(h, l, u, p, n[d + 14], 9, -1019803690), p = y(p, h, l, u, n[d + 3], 14, -187363961), u = y(u, p, h, l, n[d + 8], 20, 1163531501), l = y(l, u, p, h, n[d + 13], 5, -1444681467), h = y(h, l, u, p, n[d + 2], 9, -51403784), p = y(p, h, l, u, n[d + 7], 14, 1735328473), l = _(l, u = y(u, p, h, l, n[d + 12], 20, -1926607734), p, h, n[d + 5], 4, -378558), h = _(h, l, u, p, n[d + 8], 11, -2022574463), p = _(p, h, l, u, n[d + 11], 16, 1839030562), u = _(u, p, h, l, n[d + 14], 23, -35309556), l = _(l, u, p, h, n[d + 1], 4, -1530992060), h = _(h, l, u, p, n[d + 4], 11, 1272893353), p = _(p, h, l, u, n[d + 7], 16, -155497632), u = _(u, p, h, l, n[d + 10], 23, -1094730640), l = _(l, u, p, h, n[d + 13], 4, 681279174), h = _(h, l, u, p, n[d + 0], 11, -358537222), p = _(p, h, l, u, n[d + 3], 16, -722521979), u = _(u, p, h, l, n[d + 6], 23, 76029189), l = _(l, u, p, h, n[d + 9], 4, -640364487), h = _(h, l, u, p, n[d + 12], 11, -421815835), p = _(p, h, l, u, n[d + 15], 16, 530742520), l = g(l, u = _(u, p, h, l, n[d + 2], 23, -995338651), p, h, n[d + 0], 6, -198630844), h = g(h, l, u, p, n[d + 7], 10, 1126891415), p = g(p, h, l, u, n[d + 14], 15, -1416354905), u = g(u, p, h, l, n[d + 5], 21, -57434055), l = g(l, u, p, h, n[d + 12], 6, 1700485571), h = g(h, l, u, p, n[d + 3], 10, -1894986606), p = g(p, h, l, u, n[d + 10], 15, -1051523), u = g(u, p, h, l, n[d + 1], 21, -2054922799), l = g(l, u, p, h, n[d + 8], 6, 1873313359), h = g(h, l, u, p, n[d + 15], 10, -30611744), p = g(p, h, l, u, n[d + 6], 15, -1560198380), u = g(u, p, h, l, n[d + 13], 21, 1309151649), l = g(l, u, p, h, n[d + 4], 6, -145523070), h = g(h, l, u, p, n[d + 11], 10, -1120210379), p = g(p, h, l, u, n[d + 2], 15, 718787259), u = g(u, p, h, l, n[d + 9], 21, -343485551), l = l + v >>> 0, u = u + m >>> 0, p = p + w >>> 0, h = h + O >>> 0;
            }
            return r.endian([l, u, p, h]);
          })._ff = function (e, t, n, r, i, o, s) {
            var a = e + (t & n | ~t & r) + (i >>> 0) + s;
            return (a << o | a >>> 32 - o) + t;
          }, _a._gg = function (e, t, n, r, i, o, s) {
            var a = e + (t & r | n & ~r) + (i >>> 0) + s;
            return (a << o | a >>> 32 - o) + t;
          }, _a._hh = function (e, t, n, r, i, o, s) {
            var a = e + (t ^ n ^ r) + (i >>> 0) + s;
            return (a << o | a >>> 32 - o) + t;
          }, _a._ii = function (e, t, n, r, i, o, s) {
            var a = e + (n ^ (t | ~r)) + (i >>> 0) + s;
            return (a << o | a >>> 32 - o) + t;
          }, _a._blocksize = 16, _a._digestsize = 16, e.exports = function (e, t) {
            if (null == e) throw new Error("Illegal argument " + e);
            var n = r.wordsToBytes(_a(e, t));
            return t && t.asBytes ? n : t && t.asString ? s.bytesToString(n) : r.bytesToHex(n);
          };
        },
        100: function _(e, t, n) {
          "use strict";

          e.exports = n(482);
        },
        482: function _(e, t, n) {
          "use strict";

          var r = t;
          function i() {
            r.util._configure(), r.Writer._configure(r.BufferWriter), r.Reader._configure(r.BufferReader);
          }
          r.build = "minimal", r.Writer = n(173), r.BufferWriter = n(155), r.Reader = n(408), r.BufferReader = n(593), r.util = n(693), r.rpc = n(994), r.roots = n(54), r.configure = i, i();
        },
        408: function _(e, t, n) {
          "use strict";

          e.exports = c;
          var r,
            i = n(693),
            o = i.LongBits,
            s = i.utf8;
          function a(e, t) {
            return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len);
          }
          function c(e) {
            this.buf = e, this.pos = 0, this.len = e.length;
          }
          var l,
            u = "undefined" != typeof Uint8Array ? function (e) {
              if (e instanceof Uint8Array || Array.isArray(e)) return new c(e);
              throw Error("illegal buffer");
            } : function (e) {
              if (Array.isArray(e)) return new c(e);
              throw Error("illegal buffer");
            },
            p = function p() {
              return i.Buffer ? function (e) {
                return (c.create = function (e) {
                  return i.Buffer.isBuffer(e) ? new r(e) : u(e);
                })(e);
              } : u;
            };
          function h() {
            var e = new o(0, 0),
              t = 0;
            if (!(this.len - this.pos > 4)) {
              for (; t < 3; ++t) {
                if (this.pos >= this.len) throw a(this);
                if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e;
              }
              return e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0, e;
            }
            for (; t < 4; ++t) {
              if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e;
            }
            if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0, e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return e;
            if (t = 0, this.len - this.pos > 4) {
              for (; t < 5; ++t) {
                if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e;
              }
            } else for (; t < 5; ++t) {
              if (this.pos >= this.len) throw a(this);
              if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e;
            }
            throw Error("invalid varint encoding");
          }
          function d(e, t) {
            return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
          }
          function f() {
            if (this.pos + 8 > this.len) throw a(this, 8);
            return new o(d(this.buf, this.pos += 4), d(this.buf, this.pos += 4));
          }
          c.create = p(), c.prototype._slice = i.Array.prototype.subarray || i.Array.prototype.slice, c.prototype.uint32 = (l = 4294967295, function () {
            if (l = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return l;
            if (l = (l | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return l;
            if (l = (l | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return l;
            if (l = (l | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return l;
            if (l = (l | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return l;
            if ((this.pos += 5) > this.len) throw this.pos = this.len, a(this, 10);
            return l;
          }), c.prototype.int32 = function () {
            return 0 | this.uint32();
          }, c.prototype.sint32 = function () {
            var e = this.uint32();
            return e >>> 1 ^ -(1 & e) | 0;
          }, c.prototype.bool = function () {
            return 0 !== this.uint32();
          }, c.prototype.fixed32 = function () {
            if (this.pos + 4 > this.len) throw a(this, 4);
            return d(this.buf, this.pos += 4);
          }, c.prototype.sfixed32 = function () {
            if (this.pos + 4 > this.len) throw a(this, 4);
            return 0 | d(this.buf, this.pos += 4);
          }, c.prototype.float = function () {
            if (this.pos + 4 > this.len) throw a(this, 4);
            var e = i.float.readFloatLE(this.buf, this.pos);
            return this.pos += 4, e;
          }, c.prototype.double = function () {
            if (this.pos + 8 > this.len) throw a(this, 4);
            var e = i.float.readDoubleLE(this.buf, this.pos);
            return this.pos += 8, e;
          }, c.prototype.bytes = function () {
            var e = this.uint32(),
              t = this.pos,
              n = this.pos + e;
            if (n > this.len) throw a(this, e);
            return this.pos += e, Array.isArray(this.buf) ? this.buf.slice(t, n) : t === n ? new this.buf.constructor(0) : this._slice.call(this.buf, t, n);
          }, c.prototype.string = function () {
            var e = this.bytes();
            return s.read(e, 0, e.length);
          }, c.prototype.skip = function (e) {
            if ("number" == typeof e) {
              if (this.pos + e > this.len) throw a(this, e);
              this.pos += e;
            } else do {
              if (this.pos >= this.len) throw a(this);
            } while (128 & this.buf[this.pos++]);
            return this;
          }, c.prototype.skipType = function (e) {
            switch (e) {
              case 0:
                this.skip();
                break;
              case 1:
                this.skip(8);
                break;
              case 2:
                this.skip(this.uint32());
                break;
              case 3:
                for (; 4 != (e = 7 & this.uint32());) {
                  this.skipType(e);
                }
                break;
              case 5:
                this.skip(4);
                break;
              default:
                throw Error("invalid wire type " + e + " at offset " + this.pos);
            }
            return this;
          }, c._configure = function (e) {
            r = e, c.create = p(), r._configure();
            var t = i.Long ? "toLong" : "toNumber";
            i.merge(c.prototype, {
              int64: function int64() {
                return h.call(this)[t](!1);
              },
              uint64: function uint64() {
                return h.call(this)[t](!0);
              },
              sint64: function sint64() {
                return h.call(this).zzDecode()[t](!1);
              },
              fixed64: function fixed64() {
                return f.call(this)[t](!0);
              },
              sfixed64: function sfixed64() {
                return f.call(this)[t](!1);
              }
            });
          };
        },
        593: function _(e, t, n) {
          "use strict";

          e.exports = o;
          var r = n(408);
          (o.prototype = Object.create(r.prototype)).constructor = o;
          var i = n(693);
          function o(e) {
            r.call(this, e);
          }
          o._configure = function () {
            i.Buffer && (o.prototype._slice = i.Buffer.prototype.slice);
          }, o.prototype.string = function () {
            var e = this.uint32();
            return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
          }, o._configure();
        },
        54: function _(e) {
          "use strict";

          e.exports = {};
        },
        994: function _(e, t, n) {
          "use strict";

          t.Service = n(948);
        },
        948: function _(e, t, n) {
          "use strict";

          e.exports = i;
          var r = n(693);
          function i(e, t, n) {
            if ("function" != typeof e) throw TypeError("rpcImpl must be a function");
            r.EventEmitter.call(this), this.rpcImpl = e, this.requestDelimited = Boolean(t), this.responseDelimited = Boolean(n);
          }
          (i.prototype = Object.create(r.EventEmitter.prototype)).constructor = i, i.prototype.rpcCall = function e(t, n, i, o, s) {
            if (!o) throw TypeError("request must be specified");
            var a = this;
            if (!s) return r.asPromise(e, a, t, n, i, o);
            if (a.rpcImpl) try {
              return a.rpcImpl(t, n[a.requestDelimited ? "encodeDelimited" : "encode"](o).finish(), function (e, n) {
                if (e) return a.emit("error", e, t), s(e);
                if (null !== n) {
                  if (!(n instanceof i)) try {
                    n = i[a.responseDelimited ? "decodeDelimited" : "decode"](n);
                  } catch (e) {
                    return a.emit("error", e, t), s(e);
                  }
                  return a.emit("data", n, t), s(null, n);
                }
                a.end(!0);
              });
            } catch (e) {
              return a.emit("error", e, t), void setTimeout(function () {
                s(e);
              }, 0);
            } else setTimeout(function () {
              s(Error("already ended"));
            }, 0);
          }, i.prototype.end = function (e) {
            return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
          };
        },
        630: function _(e, t, n) {
          "use strict";

          e.exports = i;
          var r = n(693);
          function i(e, t) {
            this.lo = e >>> 0, this.hi = t >>> 0;
          }
          var o = i.zero = new i(0, 0);
          o.toNumber = function () {
            return 0;
          }, o.zzEncode = o.zzDecode = function () {
            return this;
          }, o.length = function () {
            return 1;
          };
          var s = i.zeroHash = "\0\0\0\0\0\0\0\0";
          i.fromNumber = function (e) {
            if (0 === e) return o;
            var t = e < 0;
            t && (e = -e);
            var n = e >>> 0,
              r = (e - n) / 4294967296 >>> 0;
            return t && (r = ~r >>> 0, n = ~n >>> 0, ++n > 4294967295 && (n = 0, ++r > 4294967295 && (r = 0))), new i(n, r);
          }, i.from = function (e) {
            if ("number" == typeof e) return i.fromNumber(e);
            if (r.isString(e)) {
              if (!r.Long) return i.fromNumber(parseInt(e, 10));
              e = r.Long.fromString(e);
            }
            return e.low || e.high ? new i(e.low >>> 0, e.high >>> 0) : o;
          }, i.prototype.toNumber = function (e) {
            if (!e && this.hi >>> 31) {
              var t = 1 + ~this.lo >>> 0,
                n = ~this.hi >>> 0;
              return t || (n = n + 1 >>> 0), -(t + 4294967296 * n);
            }
            return this.lo + 4294967296 * this.hi;
          }, i.prototype.toLong = function (e) {
            return r.Long ? new r.Long(0 | this.lo, 0 | this.hi, Boolean(e)) : {
              low: 0 | this.lo,
              high: 0 | this.hi,
              unsigned: Boolean(e)
            };
          };
          var a = String.prototype.charCodeAt;
          i.fromHash = function (e) {
            return e === s ? o : new i((a.call(e, 0) | a.call(e, 1) << 8 | a.call(e, 2) << 16 | a.call(e, 3) << 24) >>> 0, (a.call(e, 4) | a.call(e, 5) << 8 | a.call(e, 6) << 16 | a.call(e, 7) << 24) >>> 0);
          }, i.prototype.toHash = function () {
            return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
          }, i.prototype.zzEncode = function () {
            var e = this.hi >> 31;
            return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0, this.lo = (this.lo << 1 ^ e) >>> 0, this;
          }, i.prototype.zzDecode = function () {
            var e = -(1 & this.lo);
            return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0, this.hi = (this.hi >>> 1 ^ e) >>> 0, this;
          }, i.prototype.length = function () {
            var e = this.lo,
              t = (this.lo >>> 28 | this.hi << 4) >>> 0,
              n = this.hi >>> 24;
            return 0 === n ? 0 === t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : n < 128 ? 9 : 10;
          };
        },
        693: function _(e, t, n) {
          "use strict";

          var r = t;
          function i(e, t, n) {
            for (var r = Object.keys(t), i = 0; i < r.length; ++i) {
              void 0 !== e[r[i]] && n || (e[r[i]] = t[r[i]]);
            }
            return e;
          }
          function o(e) {
            function t(e, n) {
              if (!(this instanceof t)) return new t(e, n);
              Object.defineProperty(this, "message", {
                get: function get() {
                  return e;
                }
              }), Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", {
                value: new Error().stack || ""
              }), n && i(this, n);
            }
            return (t.prototype = Object.create(Error.prototype)).constructor = t, Object.defineProperty(t.prototype, "name", {
              get: function get() {
                return e;
              }
            }), t.prototype.toString = function () {
              return this.name + ": " + this.message;
            }, t;
          }
          r.asPromise = n(537), r.base64 = n(419), r.EventEmitter = n(211), r.float = n(945), r.inquire = n(199), r.utf8 = n(997), r.pool = n(662), r.LongBits = n(630), r.isNode = Boolean(void 0 !== n.g && n.g && n.g.process && n.g.process.versions && n.g.process.versions.node), r.global = r.isNode && n.g || "undefined" != typeof window && window || "undefined" != typeof self && self || this, r.emptyArray = Object.freeze ? Object.freeze([]) : [], r.emptyObject = Object.freeze ? Object.freeze({}) : {}, r.isInteger = Number.isInteger || function (e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
          }, r.isString = function (e) {
            return "string" == typeof e || e instanceof String;
          }, r.isObject = function (e) {
            return e && "object" == _typeof(e);
          }, r.isset = r.isSet = function (e, t) {
            var n = e[t];
            return !(null == n || !e.hasOwnProperty(t)) && ("object" != _typeof(n) || (Array.isArray(n) ? n.length : Object.keys(n).length) > 0);
          }, r.Buffer = function () {
            try {
              var e = r.inquire("buffer").Buffer;
              return e.prototype.utf8Write ? e : null;
            } catch (e) {
              return null;
            }
          }(), r._Buffer_from = null, r._Buffer_allocUnsafe = null, r.newBuffer = function (e) {
            return "number" == typeof e ? r.Buffer ? r._Buffer_allocUnsafe(e) : new r.Array(e) : r.Buffer ? r._Buffer_from(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e);
          }, r.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, r.Long = r.global.dcodeIO && r.global.dcodeIO.Long || r.global.Long || r.inquire("long"), r.key2Re = /^true|false|0|1$/, r.key32Re = /^-?(?:0|[1-9][0-9]*)$/, r.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, r.longToHash = function (e) {
            return e ? r.LongBits.from(e).toHash() : r.LongBits.zeroHash;
          }, r.longFromHash = function (e, t) {
            var n = r.LongBits.fromHash(e);
            return r.Long ? r.Long.fromBits(n.lo, n.hi, t) : n.toNumber(Boolean(t));
          }, r.merge = i, r.lcFirst = function (e) {
            return e.charAt(0).toLowerCase() + e.substring(1);
          }, r.newError = o, r.ProtocolError = o("ProtocolError"), r.oneOfGetter = function (e) {
            for (var t = {}, n = 0; n < e.length; ++n) {
              t[e[n]] = 1;
            }
            return function () {
              for (var e = Object.keys(this), n = e.length - 1; n > -1; --n) {
                if (1 === t[e[n]] && void 0 !== this[e[n]] && null !== this[e[n]]) return e[n];
              }
            };
          }, r.oneOfSetter = function (e) {
            return function (t) {
              for (var n = 0; n < e.length; ++n) {
                e[n] !== t && delete this[e[n]];
              }
            };
          }, r.toJSONOptions = {
            longs: String,
            enums: String,
            bytes: String,
            json: !0
          }, r._configure = function () {
            var e = r.Buffer;
            e ? (r._Buffer_from = e.from !== Uint8Array.from && e.from || function (t, n) {
              return new e(t, n);
            }, r._Buffer_allocUnsafe = e.allocUnsafe || function (t) {
              return new e(t);
            }) : r._Buffer_from = r._Buffer_allocUnsafe = null;
          };
        },
        173: function _(e, t, n) {
          "use strict";

          e.exports = p;
          var r,
            i = n(693),
            o = i.LongBits,
            s = i.base64,
            a = i.utf8;
          function c(e, t, n) {
            this.fn = e, this.len = t, this.next = void 0, this.val = n;
          }
          function l() {}
          function u(e) {
            this.head = e.head, this.tail = e.tail, this.len = e.len, this.next = e.states;
          }
          function p() {
            this.len = 0, this.head = new c(l, 0, 0), this.tail = this.head, this.states = null;
          }
          var h = function h() {
            return i.Buffer ? function () {
              return (p.create = function () {
                return new r();
              })();
            } : function () {
              return new p();
            };
          };
          function d(e, t, n) {
            t[n] = 255 & e;
          }
          function f(e, t) {
            this.len = e, this.next = void 0, this.val = t;
          }
          function y(e, t, n) {
            for (; e.hi;) {
              t[n++] = 127 & e.lo | 128, e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0, e.hi >>>= 7;
            }
            for (; e.lo > 127;) {
              t[n++] = 127 & e.lo | 128, e.lo = e.lo >>> 7;
            }
            t[n++] = e.lo;
          }
          function _(e, t, n) {
            t[n] = 255 & e, t[n + 1] = e >>> 8 & 255, t[n + 2] = e >>> 16 & 255, t[n + 3] = e >>> 24;
          }
          p.create = h(), p.alloc = function (e) {
            return new i.Array(e);
          }, i.Array !== Array && (p.alloc = i.pool(p.alloc, i.Array.prototype.subarray)), p.prototype._push = function (e, t, n) {
            return this.tail = this.tail.next = new c(e, t, n), this.len += t, this;
          }, f.prototype = Object.create(c.prototype), f.prototype.fn = function (e, t, n) {
            for (; e > 127;) {
              t[n++] = 127 & e | 128, e >>>= 7;
            }
            t[n] = e;
          }, p.prototype.uint32 = function (e) {
            return this.len += (this.tail = this.tail.next = new f((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len, this;
          }, p.prototype.int32 = function (e) {
            return e < 0 ? this._push(y, 10, o.fromNumber(e)) : this.uint32(e);
          }, p.prototype.sint32 = function (e) {
            return this.uint32((e << 1 ^ e >> 31) >>> 0);
          }, p.prototype.uint64 = function (e) {
            var t = o.from(e);
            return this._push(y, t.length(), t);
          }, p.prototype.int64 = p.prototype.uint64, p.prototype.sint64 = function (e) {
            var t = o.from(e).zzEncode();
            return this._push(y, t.length(), t);
          }, p.prototype.bool = function (e) {
            return this._push(d, 1, e ? 1 : 0);
          }, p.prototype.fixed32 = function (e) {
            return this._push(_, 4, e >>> 0);
          }, p.prototype.sfixed32 = p.prototype.fixed32, p.prototype.fixed64 = function (e) {
            var t = o.from(e);
            return this._push(_, 4, t.lo)._push(_, 4, t.hi);
          }, p.prototype.sfixed64 = p.prototype.fixed64, p.prototype.float = function (e) {
            return this._push(i.float.writeFloatLE, 4, e);
          }, p.prototype.double = function (e) {
            return this._push(i.float.writeDoubleLE, 8, e);
          };
          var g = i.Array.prototype.set ? function (e, t, n) {
            t.set(e, n);
          } : function (e, t, n) {
            for (var r = 0; r < e.length; ++r) {
              t[n + r] = e[r];
            }
          };
          p.prototype.bytes = function (e) {
            var t = e.length >>> 0;
            if (!t) return this._push(d, 1, 0);
            if (i.isString(e)) {
              var n = p.alloc(t = s.length(e));
              s.decode(e, n, 0), e = n;
            }
            return this.uint32(t)._push(g, t, e);
          }, p.prototype.string = function (e) {
            var t = a.length(e);
            return t ? this.uint32(t)._push(a.write, t, e) : this._push(d, 1, 0);
          }, p.prototype.fork = function () {
            return this.states = new u(this), this.head = this.tail = new c(l, 0, 0), this.len = 0, this;
          }, p.prototype.reset = function () {
            return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new c(l, 0, 0), this.len = 0), this;
          }, p.prototype.ldelim = function () {
            var e = this.head,
              t = this.tail,
              n = this.len;
            return this.reset().uint32(n), n && (this.tail.next = e.next, this.tail = t, this.len += n), this;
          }, p.prototype.finish = function () {
            for (var e = this.head.next, t = this.constructor.alloc(this.len), n = 0; e;) {
              e.fn(e.val, t, n), n += e.len, e = e.next;
            }
            return t;
          }, p._configure = function (e) {
            r = e, p.create = h(), r._configure();
          };
        },
        155: function _(e, t, n) {
          "use strict";

          e.exports = o;
          var r = n(173);
          (o.prototype = Object.create(r.prototype)).constructor = o;
          var i = n(693);
          function o() {
            r.call(this);
          }
          function s(e, t, n) {
            e.length < 40 ? i.utf8.write(e, t, n) : t.utf8Write ? t.utf8Write(e, n) : t.write(e, n);
          }
          o._configure = function () {
            o.alloc = i._Buffer_allocUnsafe, o.writeBytesBuffer = i.Buffer && i.Buffer.prototype instanceof Uint8Array && "set" === i.Buffer.prototype.set.name ? function (e, t, n) {
              t.set(e, n);
            } : function (e, t, n) {
              if (e.copy) e.copy(t, n, 0, e.length);else for (var r = 0; r < e.length;) {
                t[n++] = e[r++];
              }
            };
          }, o.prototype.bytes = function (e) {
            i.isString(e) && (e = i._Buffer_from(e, "base64"));
            var t = e.length >>> 0;
            return this.uint32(t), t && this._push(o.writeBytesBuffer, t, e), this;
          }, o.prototype.string = function (e) {
            var t = i.Buffer.byteLength(e);
            return this.uint32(t), t && this._push(s, t, e), this;
          }, o._configure();
        },
        500: function _(e, t, n) {
          "use strict";

          var _r,
            i = this && this.__extends || (_r = function r(e, t) {
              return _r = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (e, t) {
                e.__proto__ = t;
              } || function (e, t) {
                for (var n in t) {
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }
              }, _r(e, t);
            }, function (e, t) {
              if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
              function n() {
                this.constructor = e;
              }
              _r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
            }),
            o = this && this.__awaiter || function (e, t, n, r) {
              return new (n || (n = Promise))(function (i, o) {
                function s(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function a(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t);
                  })).then(s, a);
                }
                c((r = r.apply(e, t || [])).next());
              });
            },
            s = this && this.__generator || function (e, t) {
              var n,
                r,
                i,
                o,
                s = {
                  label: 0,
                  sent: function sent() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                  },
                  trys: [],
                  ops: []
                };
              return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
              }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                return this;
              }), o;
              function a(a) {
                return function (c) {
                  return function (a) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; o && (o = 0, a[0] && (s = 0)), s;) {
                      try {
                        if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                        switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                          case 0:
                          case 1:
                            i = a;
                            break;
                          case 4:
                            return s.label++, {
                              value: a[1],
                              done: !1
                            };
                          case 5:
                            s.label++, r = a[1], a = [0];
                            continue;
                          case 7:
                            a = s.ops.pop(), s.trys.pop();
                            continue;
                          default:
                            if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                              s = 0;
                              continue;
                            }
                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                              s.label = a[1];
                              break;
                            }
                            if (6 === a[0] && s.label < i[1]) {
                              s.label = i[1], i = a;
                              break;
                            }
                            if (i && s.label < i[2]) {
                              s.label = i[2], s.ops.push(a);
                              break;
                            }
                            i[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        a = t.call(e, s);
                      } catch (e) {
                        a = [6, e], r = 0;
                      } finally {
                        n = i = 0;
                      }
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                      value: a[0] ? a[1] : void 0,
                      done: !0
                    };
                  }([a, c]);
                };
              }
            },
            a = this && this.__importDefault || function (e) {
              return e && e.__esModule ? e : {
                default: e
              };
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.CHANNEL_MEDIA_RELAY_ERROR = t.CHANNEL_MEDIA_RELAY_STATE = t.CHANNEL_MEDIA_RELAY_EVENT = t.CHANNEL_MEDIA_ERROR = t.ChannelMediaError = t.ChannelMediaRelayConfiguration = void 0;
          var c = a(n(795)),
            l = n(446),
            u = a(n(186)),
            p = n(483),
            h = n(426),
            d = function d() {},
            f = function (e) {
              function t(t, n) {
                var r = e.call(this) || this;
                return r._state = m.RELAY_STATE_IDLE, r._onStatus = function (e) {
                  u.default.debug("[".concat(r.clientId, "] ChannelMediaStatus: ").concat(JSON.stringify(e))), e && e.command && ("onAudioPacketReceived" === e.command && r.emit("event", v.PACKET_RECEIVED_AUDIO_FROM_SRC), "onVideoPacketReceived" === e.command && r.emit("event", v.PACKET_RECEIVED_VIDEO_FROM_SRC), "onSrcTokenPrivilegeDidExpire" === e.command && (r._state = m.RELAY_STATE_FAILURE, r.emit("state", m.RELAY_STATE_FAILURE, w.SRC_TOKEN_EXPIRED)), "onDestTokenPrivilegeDidExpire" === e.command && (r._state = m.RELAY_STATE_FAILURE, r.emit("state", m.RELAY_STATE_FAILURE, w.DEST_TOKEN_EXPIRED, e.channelName ? {
                    came: e.channelName
                  } : null)));
                }, r._onClose = function () {
                  return o(r, void 0, void 0, function () {
                    var e;
                    return s(this, function (t) {
                      switch (t.label) {
                        case 0:
                          if (u.default.debug("[".concat(this.clientId, "] ChannelMediaSocket onClose")), this.emit("event", v.NETWORK_DISCONNECTED), this.state = m.RELAY_STATE_IDLE, !this._prevChannelMediaConfig) return [3, 4];
                          t.label = 1;
                        case 1:
                          return t.trys.push([1, 3,, 4]), [4, this.startChannelMediaRelay(this._prevChannelMediaConfig)];
                        case 2:
                          return t.sent(), [3, 4];
                        case 3:
                          return (e = t.sent()) instanceof E && (e.message === _.WS_ABORT || e.message === _.AP_REQUEST_ABORT) ? [2] : (this.emit("state", m.RELAY_STATE_FAILURE, w.SERVER_CONNECTION_LOST), [3, 4]);
                        case 4:
                          return [2];
                      }
                    });
                  });
                }, r.token = t.appId, r.appId = t.appId, r.cname = t.cname, r.uid = t.uid, r.sid = t.sid, r.clientId = n, r;
              }
              return i(t, e), Object.defineProperty(t.prototype, "state", {
                get: function get() {
                  return this._state;
                },
                set: function set(e) {
                  var t = this._state;
                  this._state = e, t !== e && this.emit("state", e);
                },
                enumerable: !1,
                configurable: !0
              }), t.prototype.startChannelMediaRelay = function (e) {
                return o(this, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        if (this.state !== m.RELAY_STATE_IDLE) throw new E(_.BAD_STATE);
                        return this.state = m.RELAY_STATE_CONNECTING, [4, this._connect()];
                      case 1:
                        return t.sent(), u.default.debug("[".concat(this.clientId, "] startChannelMediaRelay: connect success")), [4, this._sendStartRelayMessage(e)];
                      case 2:
                        return t.sent(), this._prevChannelMediaConfig = e, [2];
                    }
                  });
                });
              }, t.prototype.updateChannelMediaRelay = function (e) {
                return o(this, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        if (this.state !== m.RELAY_STATE_RUNNING) throw new E(_.BAD_STATE);
                        return [4, this._sendUpdateMessage(e)];
                      case 1:
                        return t.sent(), this._prevChannelMediaConfig = e, [2];
                    }
                  });
                });
              }, t.prototype.stopChannelMediaRelay = function () {
                return o(this, void 0, void 0, function () {
                  return s(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, this._sendStopRelayMessage()];
                      case 1:
                        return e.sent(), u.default.debug("[".concat(this.clientId, "] stopChannelMediaRelay: send stop message success")), this.state = m.RELAY_STATE_IDLE, this.dispose(), [2];
                    }
                  });
                });
              }, t.prototype.dispose = function () {
                u.default.debug("[".concat(this.clientId, "] disposeChannelMediaRelay")), this.state = m.RELAY_STATE_IDLE, this.emit("dispose"), this._signal && this._signal.dispose(), this._prevChannelMediaConfig = null, this.removeEvent();
              }, t.prototype._requestOneAP = function (e) {
                var t = this;
                return new Promise(function (n, r) {
                  var i = {
                      command: "convergeAllocateEdge",
                      sid: t.sid,
                      appId: t.appId,
                      token: "",
                      ts: +new Date(),
                      version: l.VERSION,
                      cname: t.cname,
                      uid: t.uid + "",
                      seq: 1,
                      requestId: 1
                    },
                    o = {
                      service_name: "tele_channel",
                      json_body: JSON.stringify(i)
                    },
                    s = "https://".concat(e);
                  wx.request({
                    url: s,
                    data: o,
                    header: {
                      "content-type": "application/json",
                      "X-Packet-Service-Type": 0,
                      "X-Packet-URI": 61
                    },
                    method: "POST",
                    success: function success(e) {
                      var t = null,
                        i = null;
                      try {
                        t = e.data;
                      } catch (e) {
                        r(new E(_.AP_JSON_PARSE_ERROR, e));
                      }
                      0 !== t.code && r(new E(_.AP_REQUEST_ERROR, t));
                      try {
                        i = JSON.parse(t.json_body);
                      } catch (e) {
                        r(new E(_.AP_JSON_PARSE_ERROR, e));
                      }
                      200 !== i.code && r(new E(_.AP_REQUEST_ERROR, i)), i.servers ? n(i.servers) : r(new E(_.AP_JSON_PARSE_ERROR, i));
                    },
                    fail: function fail(e) {
                      return r(e);
                    }
                  });
                });
              }, t.prototype._requestAP = function () {
                var e = this,
                  t = ["uap-ap-web-1.agora.io", "uap-ap-web-2.agoraio.cn", "uap-ap-web-3.agora.io", "uap-ap-web-4.agoraio.cn"];
                return new Promise(function (n, r) {
                  setTimeout(function () {
                    r(new E(_.AP_REQUEST_TIMEOUT));
                  }, 3e3), e.on("dispose", function () {
                    r(new E(_.AP_REQUEST_ABORT));
                  }), t.forEach(function (t) {
                    t += "/api/v1", e._requestOneAP(t).then(function (r) {
                      u.default.debug("[".concat(e.clientId, "] startChannelMediaRelay request AP ").concat(t, " success: ").concat(JSON.stringify(r)));
                      var i = r[0],
                        o = (t = i.address).split("."),
                        s = o.length,
                        a = "wss://miniapp.agoraio.cn/".concat(o[s - 4], "-").concat(o[s - 3], "-").concat(o[s - 2], "-").concat(o[s - 1], "-").concat(i.ws, "/");
                      n(a);
                    }).catch(function (n) {
                      u.default.debug("[".concat(e.clientId, "] startChannelMediaRelay request AP ").concat(t, " failed: ").concat(JSON.stringify(n)));
                    });
                  });
                });
              }, t.prototype._connectWebsocket = function (e) {
                return this._signal = new O(this.appId, this.cname, this.uid, this.sid), this._signal.connect(e);
              }, t.prototype._connect = function () {
                return o(this, void 0, void 0, function () {
                  var e;
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, this._requestAP()];
                      case 1:
                        return e = t.sent(), [4, this._connectWebsocket(e)];
                      case 2:
                        return t.sent(), this._signal.on("close", this._onClose.bind(this)), this._signal.on("status", this._onStatus.bind(this)), this.emit("event", v.NETWORK_CONNECTED), [2];
                    }
                  });
                });
              }, t.prototype._sendStartRelayMessage = function (e) {
                return o(this, void 0, void 0, function () {
                  var t, n, r, i, o, a;
                  return s(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return this._checkSignal(), t = this._genMessage(g.StopPacketTransfer), [4, Promise.all([this._signal.request(t), this._signal.waitStatus("Normal Quit")])];
                      case 1:
                        return s.sent(), u.default.debug("[".concat(this.clientId, "] startChannelMediaRelay: StopPacketTransfer success")), n = this._genMessage(g.SetSdkProfile, e), [4, this._signal.request(n)];
                      case 2:
                        return s.sent(), u.default.debug("[".concat(this.clientId, "] startChannelMediaRelay: SetSdkProfile success")), r = this._genMessage(g.SetSourceChannel, e), [4, Promise.all([this._signal.request(r), this._signal.waitStatus("SetSourceChannelStatus")])];
                      case 3:
                        return s.sent(), this.emit("event", v.PACKET_JOINED_SRC_CHANNEL), u.default.debug("[".concat(this.clientId, "] startChannelMediaRelay: SetSourceChannel success")), i = this._genMessage(g.SetSourceUserId, e), [4, this._signal.request(i)];
                      case 4:
                        return s.sent(), u.default.debug("[".concat(this.clientId, "] startChannelMediaRelay: SetSourceUserId success")), o = this._genMessage(g.SetDestChannel, e), [4, Promise.all([this._signal.request(o), this._signal.waitStatus("SetDestChannelStatus")])];
                      case 5:
                        return s.sent(), this.emit("event", v.PACKET_JOINED_DEST_CHANNEL), u.default.debug("[".concat(this.clientId, "] startChannelMediaRelay: SetDestChannel success")), a = this._genMessage(g.StartPacketTransfer, e), [4, this._signal.request(a)];
                      case 6:
                        return s.sent(), this.emit("event", v.PACKET_SENT_TO_DEST_CHANNEL), this.state = m.RELAY_STATE_RUNNING, u.default.debug("[".concat(this.clientId, "] startChannelMediaRelay: StartPacketTransfer success")), [2];
                    }
                  });
                });
              }, t.prototype._sendReconnectMessage = function (e) {
                return o(this, void 0, void 0, function () {
                  var t;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return this._checkSignal(), t = this._genMessage(g.Reconnect, e), [4, this._signal.request(t)];
                      case 1:
                        return n.sent(), [2];
                    }
                  });
                });
              }, t.prototype._sendUpdateMessage = function (e) {
                return o(this, void 0, void 0, function () {
                  var t;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return this._checkSignal(), t = this._genMessage(g.UpdateDestChannel, e), [4, this._signal.request(t)];
                      case 1:
                        return n.sent(), this.emit("event", v.PACKET_UPDATE_DEST_CHANNEL), u.default.debug("[".concat(this.clientId, "] sendUpdateMessage: UpdateDestChannel success")), [2];
                    }
                  });
                });
              }, t.prototype._sendStopRelayMessage = function () {
                return o(this, void 0, void 0, function () {
                  var e;
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return this._checkSignal(), e = this._genMessage(g.StopPacketTransfer), [4, this._signal.request(e)];
                      case 1:
                        return t.sent(), u.default.debug("[".concat(this.clientId, "] sendStopRelayMessage: StopPacketTransfer success")), [2];
                    }
                  });
                });
              }, t.prototype._genMessage = function (e, t) {
                var n = this,
                  r = [],
                  i = [],
                  o = [],
                  s = {
                    appId: this.appId,
                    cname: this.cname,
                    uid: this.uid + "",
                    sdkVersion: l.VERSION,
                    sid: this.sid,
                    ts: +new Date(),
                    requestId: 0,
                    seq: 0,
                    allocate: !0,
                    clientRequest: {}
                  },
                  a = null;
                switch (e) {
                  case g.SetSdkProfile:
                    return s.clientRequest = {
                      command: "SetSdkProfile",
                      type: "multi_channel"
                    }, s;
                  case g.SetSourceChannel:
                    return a = t.getSrcChannelMediaInfo(), s.clientRequest = {
                      command: "SetSourceChannel",
                      uid: a.uid + "",
                      channelName: a.channelName,
                      token: a.token || this.appId
                    }, s;
                  case g.SetSourceUserId:
                    return a = t.getSrcChannelMediaInfo(), s.clientRequest = {
                      command: "SetSourceUserId",
                      uid: this.uid + ""
                    }, s;
                  case g.SetDestChannel:
                    return t.getDestChannelMediaInfos().forEach(function (e) {
                      r.push(e.channelName), i.push(e.uid + ""), o.push(e.token || n.appId);
                    }), s.clientRequest = {
                      command: "SetDestChannel",
                      channelName: r,
                      uid: i,
                      token: o
                    }, s;
                  case g.StartPacketTransfer:
                    return s.clientRequest = {
                      command: "StartPacketTransfer"
                    }, s;
                  case g.Reconnect:
                    return s.clientRequest = {
                      command: "Reconnect"
                    }, s;
                  case g.StopPacketTransfer:
                    return s.clientRequest = {
                      command: "StopPacketTransfer"
                    }, s;
                  case g.UpdateDestChannel:
                    return t.getDestChannelMediaInfos().forEach(function (e) {
                      r.push(e.channelName), i.push(e.uid + ""), o.push(e.token || n.appId);
                    }), s.clientRequest = {
                      command: "UpdateDestChannel",
                      channelName: r,
                      uid: i,
                      token: o
                    }, s;
                }
              }, t.prototype._checkSignal = function () {
                if (!this._signal || !this._signal.isConnect()) throw new E(_.WS_DISCONNECTED);
              }, t;
            }(c.default);
          t.default = f;
          var y = function () {
            function e() {
              this.destChannelMediaInfos = new Map();
            }
            return e.prototype.setSrcChannelInfo = function (e) {
              (0, p.checkValidObject)(e, "srcInfo");
              var t = e.uid,
                n = e.channelName,
                r = e.token;
              if (r && !(0, p.isValidToken)(r)) throw new Error("Invalid token in SrcChannelInfo");
              if (!(0, p.isValidChannelName)(n)) throw new Error("Invalid channelName in SrcChannelInfo");
              if (!(0, h.is32Uint)(t)) throw new Error("Invalid uid in SrcChannelInfo");
              u.default.debug("[setSrcChannelInfo]: srcInfo: ", e), this.srcChannelMediaInfo = e;
            }, e.prototype.setDestChannelInfo = function (e, t) {
              if (!(0, p.isValidChannelName)(e)) throw new Error("Invalid channelName in DestChannelInfo");
              (0, p.checkValidObject)(t, "destInfo");
              var n = t.uid,
                r = t.token,
                i = t.channelName;
              if (r && !(0, p.isValidToken)(r)) throw new Error("Invalid token in DestChannelInfo");
              if (!(0, p.isValidChannelName)(i)) throw new Error("Invalid channelName in DestChannelInfo");
              if (!(0, h.is32Uint)(n)) throw new Error("Invalid uid in DestChannelInfo");
              u.default.debug("[setDestChannelInfo]: destInfo: ", t, "channelName: ", e), this.destChannelMediaInfos.set(e, t);
            }, e.prototype.removeDestChannelInfo = function (e) {
              if (!(0, p.isValidChannelName)(e)) throw new Error("Invalid channelName when invoke removeDestChannelInfo");
              u.default.debug("[removeDestChannelInfo]: channelName: ", e), this.destChannelMediaInfos.delete(e);
            }, e.prototype.getSrcChannelMediaInfo = function () {
              return this.srcChannelMediaInfo;
            }, e.prototype.getDestChannelMediaInfos = function () {
              return this.destChannelMediaInfos;
            }, e;
          }();
          t.ChannelMediaRelayConfiguration = y;
          var _,
            g,
            v,
            m,
            w,
            O = function (e) {
              function t(t, n, r, i) {
                var o = e.call(this) || this;
                return o._onOpen = function () {
                  u.default.debug("[ChannelMediaRelay] onOpen"), o.emit("open");
                }, o._onClose = function (e) {
                  u.default.debug("[ChannelMediaRelay] onClose"), o.emit("close"), o.dispose();
                }, o._onMessage = function (e) {
                  u.default.blind("ChannelMediaRelay receive message", e);
                  var t = JSON.parse(e.data);
                  if (!t || "serverResponse" !== t.command || !t.requestId) return t && "serverStatus" === t.command && t.serverStatus && t.serverStatus.command ? (o.emit("status", t.serverStatus), void o.emit(t.serverStatus.command, t.serverStatus)) : void 0;
                  o.emit("req_".concat(t.requestId), t);
                }, o._requestId = 1, o.appId = t, o.cname = n, o.uid = r, o.sid = i, o;
              }
              return i(t, e), t.prototype.isConnect = function () {
                return this._ws && 1 === this._ws.readyState;
              }, t.prototype.sendMessage = function (e) {
                if (!this._ws || 1 !== this._ws.readyState) throw new E(_.WS_DISCONNECTED);
                var t = this._requestId++;
                return e.requestId = t, e.seq = t, this._ws.send({
                  data: JSON.stringify(e)
                }), t;
              }, t.prototype.waitStatus = function (e) {
                var t = this;
                return new Promise(function (n, r) {
                  var i = setTimeout(function () {
                    r(new E(_.WAIT_STATUS_TIMEOUT, e));
                  }, 5e3);
                  t.once(e, function (t) {
                    clearTimeout(i), t.state && 0 !== t.state ? r(new E(_.WAIT_STATUS_ERROR, e)) : n("");
                  }), t.once("dispose", function () {
                    clearTimeout(i), r(new E(_.WS_ABORT));
                  });
                });
              }, t.prototype.request = function (e) {
                var t = this;
                return new Promise(function (n, r) {
                  var i = t.sendMessage(e),
                    o = setTimeout(function () {
                      t.removeAllListeners("req_".concat(i)), r(new E(_.REQUEST_TIMEOUT));
                    }, 3e3);
                  t.once("req_".concat(i), function (e) {
                    clearTimeout(o), e && 200 === e.code ? n(e) : r(new E(_.REQUEST_FAILED, e));
                  }), t.once("dispose", function () {
                    clearTimeout(o), r(new E(_.WS_ABORT));
                  });
                });
              }, t.prototype.connect = function (e) {
                var t = this;
                return new Promise(function (n, r) {
                  t._ws = wx.connectSocket({
                    url: e
                  }), t._ws.onOpen(function (r, i) {
                    u.default.debug("[ChannelMediaRelay] ws.onOpen"), t._onOpen(), t._prvUrl = e, t._ws.onMessage(t._onMessage), t._ws.onClose(t._onClose), t._startHeartBeatCheck(), n(null);
                  }), t._ws.onClose(function (e) {
                    u.default.debug("[ChannelMediaRelay] ws.onClose", e), t.dispose(), r(new E(_.CONNECT_FAILED, "websocket error code: ".concat(e.code)));
                  }), setTimeout(function () {
                    t._ws && 1 !== t._ws.readyState && (t._ws.onMessage(d), t._ws.onClose(d), t._ws.close(), t._ws = null, r(new E(_.CONNECT_TIMEOUT)));
                  }, 5e3), t.once("dispose", function () {
                    r(new E(_.WS_ABORT));
                  });
                });
              }, t.prototype.dispose = function () {
                u.default.debug("[ChannelMediaRelay] dispose"), this._clearHeartBeatCheck(), this.emit("dispose"), this.removeEvent(), this._ws && (this._ws.onOpen(d), this._ws.onClose(d), this._ws.onMessage(d), this._ws.close(d)), this._ws = null;
              }, t.prototype._sendPing = function (e) {
                if (!this._ws || 1 !== this._ws.readyState) throw new E(_.WS_DISCONNECTED);
                var t = this._requestId++;
                return e.requestId = t, this._ws.send({
                  data: JSON.stringify(e)
                }), t;
              }, t.prototype._startHeartBeatCheck = function () {
                var e = this;
                this._heartBeatTimer = setInterval(function () {
                  e._sendPing({
                    command: "ping",
                    appId: e.appId,
                    cname: e.cname,
                    uid: e.uid + "",
                    sid: e.sid,
                    ts: +new Date(),
                    requestId: 0
                  });
                }, 3e3);
              }, t.prototype._clearHeartBeatCheck = function () {
                clearInterval(this._heartBeatTimer);
              }, t;
            }(c.default),
            E = function E(e, t, n) {
              void 0 === e && (e = ""), this.code = n, this.data = t, this.message = e;
            };
          t.ChannelMediaError = E, function (e) {
            e.CONNECT_FAILED = "connect failed", e.CONNECT_TIMEOUT = "connect timeout", e.WS_DISCONNECTED = "websocket disconnected", e.REQUEST_TIMEOUT = "request timeout", e.REQUEST_FAILED = "request failed", e.WAIT_STATUS_TIMEOUT = "wait status timeout", e.WAIT_STATUS_ERROR = "wait status error", e.BAD_STATE = "bad state", e.WS_ABORT = "ws abort", e.AP_REQUEST_TIMEOUT = "AP request timeout", e.AP_JSON_PARSE_ERROR = "AP json parse error", e.AP_REQUEST_ERROR = "AP request error", e.AP_REQUEST_ABORT = "AP request abort";
          }(_ = t.CHANNEL_MEDIA_ERROR || (t.CHANNEL_MEDIA_ERROR = {})), function (e) {
            e[e.SetSdkProfile = 0] = "SetSdkProfile", e[e.SetSourceChannel = 1] = "SetSourceChannel", e[e.SetSourceUserId = 2] = "SetSourceUserId", e[e.SetDestChannel = 3] = "SetDestChannel", e[e.StartPacketTransfer = 4] = "StartPacketTransfer", e[e.StopPacketTransfer = 5] = "StopPacketTransfer", e[e.UpdateDestChannel = 6] = "UpdateDestChannel", e[e.Reconnect = 7] = "Reconnect", e[e.SetVideoProfile = 8] = "SetVideoProfile";
          }(g || (g = {})), function (e) {
            e[e.NETWORK_DISCONNECTED = 0] = "NETWORK_DISCONNECTED", e[e.NETWORK_CONNECTED = 1] = "NETWORK_CONNECTED", e[e.PACKET_JOINED_SRC_CHANNEL = 2] = "PACKET_JOINED_SRC_CHANNEL", e[e.PACKET_JOINED_DEST_CHANNEL = 3] = "PACKET_JOINED_DEST_CHANNEL", e[e.PACKET_SENT_TO_DEST_CHANNEL = 4] = "PACKET_SENT_TO_DEST_CHANNEL", e[e.PACKET_RECEIVED_VIDEO_FROM_SRC = 5] = "PACKET_RECEIVED_VIDEO_FROM_SRC", e[e.PACKET_RECEIVED_AUDIO_FROM_SRC = 6] = "PACKET_RECEIVED_AUDIO_FROM_SRC", e[e.PACKET_UPDATE_DEST_CHANNEL = 7] = "PACKET_UPDATE_DEST_CHANNEL", e[e.PACKET_UPDATE_DEST_CHANNEL_REFUSED = 8] = "PACKET_UPDATE_DEST_CHANNEL_REFUSED", e[e.PACKET_UPDATE_DEST_CHANNEL_NOT_CHANGE = 9] = "PACKET_UPDATE_DEST_CHANNEL_NOT_CHANGE";
          }(v = t.CHANNEL_MEDIA_RELAY_EVENT || (t.CHANNEL_MEDIA_RELAY_EVENT = {})), function (e) {
            e[e.RELAY_STATE_IDLE = 0] = "RELAY_STATE_IDLE", e[e.RELAY_STATE_CONNECTING = 1] = "RELAY_STATE_CONNECTING", e[e.RELAY_STATE_RUNNING = 2] = "RELAY_STATE_RUNNING", e[e.RELAY_STATE_FAILURE = 3] = "RELAY_STATE_FAILURE";
          }(m = t.CHANNEL_MEDIA_RELAY_STATE || (t.CHANNEL_MEDIA_RELAY_STATE = {})), function (e) {
            e[e.RELAY_OK = 0] = "RELAY_OK", e[e.SERVER_ERROR_RESPONSE = 1] = "SERVER_ERROR_RESPONSE", e[e.SERVER_NO_RESPONSE = 2] = "SERVER_NO_RESPONSE", e[e.NO_RESOURCE_AVAILABLE = 3] = "NO_RESOURCE_AVAILABLE", e[e.FAILED_JOIN_SRC = 4] = "FAILED_JOIN_SRC", e[e.FAILED_JOIN_DEST = 5] = "FAILED_JOIN_DEST", e[e.FAILED_PACKET_RECEIVED_FROM_SRC = 6] = "FAILED_PACKET_RECEIVED_FROM_SRC", e[e.FAILED_PACKET_SENT_TO_DEST = 7] = "FAILED_PACKET_SENT_TO_DEST", e[e.SERVER_CONNECTION_LOST = 8] = "SERVER_CONNECTION_LOST", e[e.INTERNAL_ERROR = 9] = "INTERNAL_ERROR", e[e.SRC_TOKEN_EXPIRED = 10] = "SRC_TOKEN_EXPIRED", e[e.DEST_TOKEN_EXPIRED = 11] = "DEST_TOKEN_EXPIRED", e[e.RELAY_ALREADY_START = 12] = "RELAY_ALREADY_START", e[e.RELAY_NOT_START = 13] = "RELAY_NOT_START", e[e.OPERATION_ABORT = 14] = "OPERATION_ABORT";
          }(w = t.CHANNEL_MEDIA_RELAY_ERROR || (t.CHANNEL_MEDIA_RELAY_ERROR = {}));
        },
        327: function _(e) {
          for (var t = [], n = 0; n < 256; ++n) {
            t[n] = (n + 256).toString(16).substr(1);
          }
          e.exports = function (e, n) {
            var r = n || 0,
              i = t;
            return [i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]]].join("");
          };
        },
        217: function _(e) {
          var t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
          if (t) {
            var n = new Uint8Array(16);
            e.exports = function () {
              return t(n), n;
            };
          } else {
            var r = new Array(16);
            e.exports = function () {
              for (var e, t = 0; t < 16; t++) {
                0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
              }
              return r;
            };
          }
        },
        171: function _(e, t, n) {
          var r = n(217),
            i = n(327);
          e.exports = function (e, t, n) {
            var o = t && n || 0;
            "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
            var s = (e = e || {}).random || (e.rng || r)();
            if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t) for (var a = 0; a < 16; ++a) {
              t[o + a] = s[a];
            }
            return t || i(s);
          };
        },
        795: function _(e, t, n) {
          var r;
          !function (t) {
            "use strict";

            function i() {}
            var o = i.prototype,
              s = t.EventEmitter;
            function a(e, t) {
              for (var n = e.length; n--;) {
                if (e[n].listener === t) return n;
              }
              return -1;
            }
            function c(e) {
              return function () {
                return this[e].apply(this, arguments);
              };
            }
            function l(e) {
              return "function" == typeof e || e instanceof RegExp || !(!e || "object" != _typeof(e)) && l(e.listener);
            }
            o.getListeners = function (e) {
              var t,
                n,
                r = this._getEvents();
              if (e instanceof RegExp) for (n in t = {}, r) {
                r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n]);
              } else t = r[e] || (r[e] = []);
              return t;
            }, o.flattenListeners = function (e) {
              var t,
                n = [];
              for (t = 0; t < e.length; t += 1) {
                n.push(e[t].listener);
              }
              return n;
            }, o.getListenersAsObject = function (e) {
              var t,
                n = this.getListeners(e);
              return n instanceof Array && ((t = {})[e] = n), t || n;
            }, o.addListener = function (e, t) {
              if (!l(t)) throw new TypeError("listener must be a function");
              var n,
                r = this.getListenersAsObject(e),
                i = "object" == _typeof(t);
              for (n in r) {
                r.hasOwnProperty(n) && -1 === a(r[n], t) && r[n].push(i ? t : {
                  listener: t,
                  once: !1
                });
              }
              return this;
            }, o.on = c("addListener"), o.addOnceListener = function (e, t) {
              return this.addListener(e, {
                listener: t,
                once: !0
              });
            }, o.once = c("addOnceListener"), o.defineEvent = function (e) {
              return this.getListeners(e), this;
            }, o.defineEvents = function (e) {
              for (var t = 0; t < e.length; t += 1) {
                this.defineEvent(e[t]);
              }
              return this;
            }, o.removeListener = function (e, t) {
              var n,
                r,
                i = this.getListenersAsObject(e);
              for (r in i) {
                i.hasOwnProperty(r) && -1 !== (n = a(i[r], t)) && i[r].splice(n, 1);
              }
              return this;
            }, o.off = c("removeListener"), o.addListeners = function (e, t) {
              return this.manipulateListeners(!1, e, t);
            }, o.removeListeners = function (e, t) {
              return this.manipulateListeners(!0, e, t);
            }, o.manipulateListeners = function (e, t, n) {
              var r,
                i,
                o = e ? this.removeListener : this.addListener,
                s = e ? this.removeListeners : this.addListeners;
              if ("object" != _typeof(t) || t instanceof RegExp) for (r = n.length; r--;) {
                o.call(this, t, n[r]);
              } else for (r in t) {
                t.hasOwnProperty(r) && (i = t[r]) && ("function" == typeof i ? o.call(this, r, i) : s.call(this, r, i));
              }
              return this;
            }, o.removeEvent = function (e) {
              var t,
                n = _typeof(e),
                r = this._getEvents();
              if ("string" === n) delete r[e];else if (e instanceof RegExp) for (t in r) {
                r.hasOwnProperty(t) && e.test(t) && delete r[t];
              } else delete this._events;
              return this;
            }, o.removeAllListeners = c("removeEvent"), o.emitEvent = function (e, t) {
              var n,
                r,
                i,
                o,
                s = this.getListenersAsObject(e);
              for (o in s) {
                if (s.hasOwnProperty(o)) for (n = s[o].slice(0), i = 0; i < n.length; i++) {
                  !0 === (r = n[i]).once && this.removeListener(e, r.listener), r.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, r.listener);
                }
              }
              return this;
            }, o.trigger = c("emitEvent"), o.emit = function (e) {
              var t = Array.prototype.slice.call(arguments, 1);
              return this.emitEvent(e, t);
            }, o.setOnceReturnValue = function (e) {
              return this._onceReturnValue = e, this;
            }, o._getOnceReturnValue = function () {
              return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
            }, o._getEvents = function () {
              return this._events || (this._events = {});
            }, i.noConflict = function () {
              return t.EventEmitter = s, i;
            }, void 0 === (r = function () {
              return i;
            }.call(t, n, t, e)) || (e.exports = r);
          }("undefined" != typeof window ? window : this || {});
        },
        861: function _(e, t, n) {
          "use strict";

          function r(e, t, n, r, i, o, s) {
            try {
              var a = e[o](s),
                c = a.value;
            } catch (e) {
              return void n(e);
            }
            a.done ? t(c) : Promise.resolve(c).then(r, i);
          }
          function i(e) {
            return function () {
              var t = this,
                n = arguments;
              return new Promise(function (i, o) {
                var s = e.apply(t, n);
                function a(e) {
                  r(s, i, o, a, c, "next", e);
                }
                function c(e) {
                  r(s, i, o, a, c, "throw", e);
                }
                a(void 0);
              });
            };
          }
          n.d(t, {
            Z: function Z() {
              return i;
            }
          });
        },
        671: function _(e, t, n) {
          "use strict";

          function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }
          n.d(t, {
            Z: function Z() {
              return r;
            }
          });
        },
        144: function _(e, t, n) {
          "use strict";

          function r(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
          }
          function i(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
              writable: !1
            }), e;
          }
          n.d(t, {
            Z: function Z() {
              return i;
            }
          });
        },
        2: function _(e, t, n) {
          "use strict";

          function r(e) {
            return r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
              return _typeof(e);
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
            }, r(e);
          }
          n.d(t, {
            Z: function Z() {
              return r;
            }
          });
        }
      },
      __webpack_module_cache__ = {};
    function __webpack_require__(e) {
      var t = __webpack_module_cache__[e];
      if (void 0 !== t) return t.exports;
      var n = __webpack_module_cache__[e] = {
        exports: {}
      };
      return __webpack_modules__[e].call(n.exports, n, n.exports, __webpack_require__), n.exports;
    }
    __webpack_require__.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return __webpack_require__.d(t, {
        a: t
      }), t;
    }, __webpack_require__.d = function (e, t) {
      for (var n in t) {
        __webpack_require__.o(t, n) && !__webpack_require__.o(e, n) && Object.defineProperty(e, n, {
          enumerable: !0,
          get: t[n]
        });
      }
    }, __webpack_require__.g = function () {
      if ("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis))) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window))) return window;
      }
    }(), __webpack_require__.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, __webpack_require__.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    };
    var __webpack_exports__ = {};
    return function () {
      "use strict";

      __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
        ChannelMediaRelayConfiguration: function ChannelMediaRelayConfiguration() {
          return I.ChannelMediaRelayConfiguration;
        },
        Client: function Client() {
          return pe;
        },
        LOG: function LOG() {
          return a.default;
        },
        SDK_VERSION: function SDK_VERSION() {
          return s.SDK_VERSION;
        }
      });
      var e = __webpack_require__(861),
        t = __webpack_require__(671),
        n = __webpack_require__(144),
        r = __webpack_require__(757),
        i = __webpack_require__.n(r),
        o = __webpack_require__(426),
        s = __webpack_require__(446),
        a = __webpack_require__(186);
      function c() {
        return c = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) {
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
          }
          return e;
        }, c.apply(this, arguments);
      }
      function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }
      var u = __webpack_require__(568),
        p = __webpack_require__.n(u);
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })), n.push.apply(n, r);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? h(Object(n), !0).forEach(function (t) {
            l(e, t, n[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
        return e;
      }
      var f = "success",
        y = "fail",
        _ = 10,
        g = function () {
          function r() {
            (0, t.Z)(this, r);
            var e = O().vid,
              n = void 0 === e ? "" : e;
            this.ip = "", this.vid = n, this.appId = "", this.url = "https://report-ad.agoralab.co/v1/report", this.sdk_version = s.SDK_VERSION, this.systemInfo = {}, this.onlineTimer = null, this.pts = [], this.netStatusPts = [];
          }
          var o, l, u;
          return (0, n.Z)(r, [{
            key: "_flushReport",
            value: (u = (0, e.Z)(i().mark(function e() {
              var t, n, r, o;
              return i().wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (t = Date.now(), n = {
                        sign: p()("src=miniapp_sdk&ts=".concat(t)),
                        src: "miniapp_sdk",
                        ts: t
                      }, !this.pts.length) {
                        e.next = 8;
                        break;
                      }
                      return (r = d({}, n)).pts = this.pts, e.next = 7, this.request({
                        body: r,
                        url: this.url
                      });
                    case 7:
                      this.pts = [];
                    case 8:
                      if (!this.netStatusPts.length) {
                        e.next = 14;
                        break;
                      }
                      return (o = d({}, n)).pts = this.netStatusPts, e.next = 13, this.request({
                        body: o,
                        url: this.url
                      });
                    case 13:
                      this.netStatusPts = [];
                    case 14:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            })), function () {
              return u.apply(this, arguments);
            })
          }, {
            key: "setOptions",
            value: function value(e) {
              var t = e.systemInfo,
                n = e.ip,
                r = e.appId;
              t && (this.systemInfo = t), n && (this.ip = n), r && (this.appId = r);
            }
          }, {
            key: "onlineUser",
            value: function value() {
              var e = this;
              this.onlineTimer || (this.onlineTimer = setInterval(function () {
                e.report("online_user");
              }, 2e4));
            }
          }, {
            key: "destroy",
            value: function value() {
              this.onlineTimer && (clearInterval(this.onlineTimer), this.onlineTimer = null), this._flushReport();
            }
          }, {
            key: "reportNetStatus",
            value: (l = (0, e.Z)(i().mark(function e() {
              var t,
                n,
                r,
                o,
                s,
                a,
                c,
                l,
                u = arguments;
              return i().wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (r = u.length > 0 && void 0 !== u[0] ? u[0] : 0, o = u.length > 1 && void 0 !== u[1] ? u[1] : {}, this.vid || (this.vid = O().vid), s = {
                        m: "net_status",
                        ls: {
                          type: 0 === r ? "live-pusher" : "live-player",
                          vid: String(this.vid),
                          app_id: this.appId,
                          version: this.sdk_version,
                          ip: this.ip,
                          wx_version: null === (t = this.systemInfo) || void 0 === t ? void 0 : t.version,
                          wx_basic_version: null === (n = this.systemInfo) || void 0 === n ? void 0 : n.SDKVersion
                        },
                        vs: {
                          videoBitrate: String(null == o ? void 0 : o.videoBitrate),
                          audioBitrate: String(null == o ? void 0 : o.audioBitrate),
                          videoFPS: String(null == o ? void 0 : o.videoFPS),
                          videoGOP: String(null == o ? void 0 : o.videoGOP),
                          netSpeed: String(null == o ? void 0 : o.netSpeed),
                          netQualityLevel: String(null == o ? void 0 : o.netQualityLevel),
                          netJitter: String(null == o ? void 0 : o.netJitter)
                        }
                      }, this.netStatusPts.push(s), this.netStatusPts.length !== _) {
                        e.next = 11;
                        break;
                      }
                      return a = Date.now(), c = this.netStatusPts.splice(0, _), l = {
                        pts: c,
                        sign: p()("src=miniapp_sdk&ts=".concat(a)),
                        src: "miniapp_sdk",
                        ts: a
                      }, e.next = 11, this.request({
                        body: l,
                        url: this.url
                      });
                    case 11:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            })), function () {
              return l.apply(this, arguments);
            })
          }, {
            key: "report",
            value: (o = (0, e.Z)(i().mark(function e(t) {
              var n,
                r,
                o,
                s,
                a,
                l,
                u,
                h,
                f,
                y,
                g,
                v = arguments;
              return i().wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (o = v.length > 1 && void 0 !== v[1] ? v[1] : "", s = v.length > 2 && void 0 !== v[2] ? v[2] : "", a = v.length > 3 && void 0 !== v[3] ? v[3] : "", l = v.length > 4 && void 0 !== v[4] ? v[4] : {}, this.vid || (this.vid = O().vid), u = {
                        m: "online_user" === t ? "online_user" : "event",
                        ls: d({
                          vid: String(this.vid),
                          app_id: this.appId,
                          version: this.sdk_version,
                          ip: this.ip,
                          wx_version: null === (n = this.systemInfo) || void 0 === n ? void 0 : n.version,
                          wx_basic_version: null === (r = this.systemInfo) || void 0 === r ? void 0 : r.SDKVersion
                        }, l),
                        vs: {
                          count: 1
                        }
                      }, "online_user" !== t && ((h = {
                        event: t,
                        result: "success" === o ? "1" : "0",
                        err_code: s.toString()
                      }).message = "string" == typeof a ? a : JSON.stringify(a), c(u.ls, h)), this.pts.push(u), this.pts.length !== _) {
                        e.next = 14;
                        break;
                      }
                      return f = this.pts.splice(0, _), y = Date.now(), g = {
                        pts: f,
                        sign: p()("src=miniapp_sdk&ts=".concat(y)),
                        src: "miniapp_sdk",
                        ts: y
                      }, e.next = 14, this.request({
                        body: g,
                        url: this.url
                      });
                    case 14:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            })), function (e) {
              return o.apply(this, arguments);
            })
          }, {
            key: "request",
            value: function value(e) {
              return new Promise(function (t, n) {
                wx.request({
                  url: e.url,
                  data: e.body,
                  header: {
                    "content-type": "application/json"
                  },
                  method: "POST",
                  success: function success(e) {
                    200 === e.statusCode ? t(e) : a.default.error("grafana report fail: ".concat(e.statusCode));
                  },
                  fail: function fail(e) {
                    a.default.error("grafana report fail", JSON.stringify(e)), n(e);
                  }
                });
              });
            }
          }]), r;
        }(),
        v = function () {
          function e() {
            (0, t.Z)(this, e), this.ts = -1;
          }
          return (0, n.Z)(e, [{
            key: "start",
            value: function value() {
              return this.ts = new Date().getTime(), this;
            }
          }, {
            key: "elapse",
            value: function value() {
              if (-1 === this.ts) throw new Error("timer not started");
              return new Date().getTime() - this.ts;
            }
          }], [{
            key: "create",
            value: function value() {
              return new e();
            }
          }]), e;
        }(),
        m = __webpack_require__(483),
        w = {
          ip: "",
          vid: ""
        };
      function O() {
        return w;
      }
      var E = ["https://uap-ap-web-1.agora.io/api/v1", "https://uap-ap-web-3.agora.io/api/v1", "https://uap-ap-web-2.agoraio.cn/api/v1", "https://uap-ap-web-4.agoraio.cn/api/v1"],
        b = "connected",
        R = "disconnected";
      var S = function () {
          function e(n, r) {
            (0, t.Z)(this, e), this.serverlist = [], this.option = n, this.index = 0, this.isInit = !0, this.state = R, this.hasInvokeClose = !1, this.emitter = r, this.on = this.emitter.on, this.off = this.emitter.off, this.emit = this.emitter.emit;
          }
          return (0, n.Z)(e, [{
            key: "connect",
            value: function value() {
              var e = this,
                t = this.option.grafanaReport;
              this.state !== R && this.close(), function (e) {
                var t = e.grafanaReport,
                  n = e.argusReport,
                  r = {
                    command: "convergeAllocateEdge",
                    sid: e.sid,
                    appId: e.appId,
                    token: e.appId,
                    uid: e.uid + "",
                    cname: e.channel,
                    ts: Math.floor(Date.now() / 1e3),
                    version: s.VERSION,
                    seq: 0,
                    requestId: 1
                  };
                return new Promise(function (i, o) {
                  var s = 0,
                    c = v.create().start(),
                    l = function l(r, i) {
                      n.reportJoinCS(e.channel, e.uid, !1, c.elapse(), JSON.stringify(r), i, null), s++, a.default.error("get server list failed, counter:".concat(s, " url:").concat(i, " "), JSON.stringify(r)), 4 === s && (t && t.report("get_server_list", y, null == r ? void 0 : r.code, null == r ? void 0 : r.reason), o(r));
                    },
                    u = function u(o) {
                      wx.request({
                        url: o,
                        data: {
                          service_name: "miniapp",
                          json_body: JSON.stringify(r)
                        },
                        header: {
                          "content-type": "application/json",
                          "X-Packet-URI": 61,
                          "X-Packet-Service-Type": 0
                        },
                        method: "POST",
                        success: function success(r) {
                          var s,
                            u,
                            p = r.data;
                          if (r.profile ? (s = r.profile.peerIP, w.ip = s) : a.default.info("skip user IP report!"), 200 !== r.statusCode) {
                            var h = "choose server fail";
                            l({
                              code: r.statusCode,
                              reason: h
                            }, o), t && t.report("choose_server", y, r.statusCode, h);
                          } else {
                            var d = c.elapse(),
                              _ = (0, m.transformElapseStr)(d),
                              g = JSON.parse(p.json_body);
                            u = g.vid, w.vid = u;
                            var v = function (e) {
                              if (void 0 !== e) return e.map(function (e) {
                                var t = e.address.split("."),
                                  n = t.length;
                                return "wss://miniapp.agoraio.cn/".concat(t[n - 4], "-").concat(t[n - 3], "-").concat(t[n - 2], "-").concat(t[n - 1], "/api");
                              });
                              a.default.error("miniapp service is not enabled for this AppID");
                            }(g.servers);
                            n.reportJoinCS(e.channel, e.uid, !0, d, null, o, v.join(",")), t.report("choose_server", f, "", "", {
                              elapse: _
                            }), a.default.info("get server list request success,url:".concat(o, ",time:").concat(d, "ms,elapse:").concat(_, ",serverlist:").concat(JSON.stringify(v))), i({
                              serverlist: v,
                              url: o
                            });
                          }
                        },
                        fail: function fail(e) {
                          var n = e.errMsg || "choose server fail";
                          l({
                            code: 901,
                            reason: n
                          }, o), t && t.report("choose_server", y, 901, n);
                        }
                      });
                    };
                  e.apUrl ? u(e.apUrl) : E.map(function (e, t) {
                    u(e);
                  });
                });
              }(this.option).then(function (t) {
                var n = t.serverlist,
                  r = t.url;
                a.default.info("websocket get server list final success, url:".concat(r, ",serverlist:").concat(JSON.stringify(n))), e.index = 0, e.serverlist = n, e.option && e.option.servers && (e.serverlist = e.option.servers), e.connectWorker(e.serverlist[e.index]);
              }).catch(function (n) {
                a.default.error("websocket connect failed in get server list ".concat(JSON.stringify(n))), t && t.report("wxsocket_connect", y, null == n ? void 0 : n.code, null == n ? void 0 : n.reason), e.emit && e.emit("socketError", n);
              });
            }
          }, {
            key: "connectWorker",
            value: function value() {
              var e = this;
              this.state = "connecting";
              var t = this.serverlist[this.index];
              a.default.info("websocket connect server: ", t);
              var n = this.option,
                r = (n.sid, n.channel),
                i = n.uid,
                o = n.argusReport,
                s = n.grafanaReport,
                c = v.create().start();
              this.ws = wx.connectSocket({
                url: t,
                fail: function fail(n) {
                  var l = JSON.stringify(n);
                  a.default.error("websocket connect worker failed url:".concat(t, " "), l), o && o.reportConnectWS(r, i, !1, c.elapse(), l, null, t), s && s.report("wxsocket_connect_worker", y, n.statusCode, l, {
                    retry: String(e.index)
                  });
                },
                success: function success(n) {
                  var l = c.elapse(),
                    u = (0, m.transformElapseStr)(l);
                  if (a.default.info("websocket connect worker success,url:".concat(t, ",time:").concat(l, "ms,elapse:").concat(u)), e.option.grafanaReport) {
                    var p = (0, m.getServerUrlIp)(t);
                    e.option.grafanaReport.setOptions({
                      ip: p
                    });
                  }
                  o && o.reportConnectWS(r, i, !0, l, null, null, t), s && s.report("wxsocket_connect_worker", f, "", "".concat(t), {
                    elapse: u,
                    retry: String(e.index)
                  });
                }
              }), this.ws.onOpen(this._onopen.bind(this)), this.ws.onMessage(this._onmessage.bind(this)), this.ws.onError(function (e) {
                a.default.error("websocket onerror: " + JSON.stringify(e)), o && o.reportConnectWS(r, i, !1, c.elapse(), JSON.stringify(e), null, t), s && s.report("wxsocket_connect_worker_on_error", y, "", JSON.stringify(e));
              }), this.establishWSTimeoutTimer = setTimeout(function () {
                e.state !== b && e.connectNextWorker();
              }, 5e3);
            }
          }, {
            key: "connectNextWorker",
            value: function value() {
              var e = this,
                t = this.option.grafanaReport;
              this.close().then(function (n) {
                if (a.default.info("websocket connect next worker current:".concat(e.index, "  total:").concat(e.serverlist.length)), e.index >= e.serverlist.length - 1) {
                  var r = {
                    code: 905,
                    reason: "connect websocket failed"
                  };
                  a.default.error("websocket connect next worker failed, all serverlist tried. ", JSON.stringify(r)), e.emit && e.emit("socketError", {
                    code: r.code,
                    reason: r.reason,
                    wsurl: JSON.stringify(e.serverlist)
                  }), t && t.report("wxsocket_connect_next_worker", y, r.code, r.reason);
                } else e.index++, e.connectWorker();
              });
            }
          }, {
            key: "_onopen",
            value: function value() {
              a.default.info("websocket onopen"), clearTimeout(this.establishWSTimeoutTimer), this.state = b, this.isInit = !1, this.hasInvokeClose ? a.default.info("websocket already invoke ws.Close, will not throw onopen event") : (this.ws.onClose(this._onclose.bind(this)), this.emit && this.emit("onopen"));
            }
          }, {
            key: "_onclose",
            value: function value(e) {
              a.default.info("websocket onclose:" + JSON.stringify(e)), this.emitter.emit("_wsClose"), clearTimeout(this.establishWSTimeoutTimer), this.state = R, e && "close" == e.reason || this.hasInvokeClose || (this.isInit ? this.connectNextWorker() : this.emit && this.emit("onclose", e));
            }
          }, {
            key: "_onmessage",
            value: function value(e) {
              if (!this.hasInvokeClose) {
                var t = JSON.parse(null == e ? void 0 : e.data) || {};
                "pong" !== (null == t ? void 0 : t.command) && a.default.info("websocket receive message: ", JSON.stringify(e)), this.isConnected() && this.emit && this.emit("onmessage", e);
              }
            }
          }, {
            key: "isConnected",
            value: function value() {
              return this.state === b;
            }
          }, {
            key: "sendMessage",
            value: function value(e) {
              var t = JSON.parse(e) || {};
              "ping" !== (null == t ? void 0 : t.command) && a.default.info("websocket send message: ", e), this.isConnected() && this.ws && this.ws.send({
                data: e
              });
            }
          }, {
            key: "_checkServerList",
            value: function value(e) {
              return e instanceof Array != 0 && 0 != e.length;
            }
          }, {
            key: "destroy",
            value: function value(e) {
              var t = this;
              this.state !== R && this.close(), this.on("_wsClose", function n() {
                t.off("_wsClose", n), t.serverlist = null, t.ws = null, t.emitter = null, t.on = null, t.off = null, t.emit = null, e && e();
              });
            }
          }, {
            key: "close",
            value: function value() {
              var e = this;
              return new Promise(function (t, n) {
                return e.state == R ? t() : (clearTimeout(e.establishWSTimeoutTimer), e.hasInvokeClose = !0, e.state = R, e.ws ? void e.ws.close({
                  reason: "close",
                  success: function success() {
                    a.default.info("websocket close success"), t();
                  },
                  fail: function fail(t) {
                    a.default.error("websocket close failed: ", JSON.stringify(t));
                    var r = e.option,
                      i = (r.sid, r.channel),
                      o = r.uid,
                      s = r.argusReport,
                      c = r.grafanaReport;
                    n();
                    var l = e.serverlist[e.index];
                    s && s.reportConnectWS(i, o, !1, 0, JSON.stringify(t), null, l), c && c.report("wxsocket_close", y, "", JSON.stringify(t));
                  },
                  complete: function complete() {
                    e.ws = null;
                  }
                }) : t());
              });
            }
          }]), e;
        }(),
        k = function () {
          function e(n) {
            (0, t.Z)(this, e), this.appId = n.appId, this.channel = n.channel, this.uid = n.uid + "", this.sid = n.sid, this.seq = 1, this.requestId = 2;
          }
          return (0, n.Z)(e, [{
            key: "setSid",
            value: function value(e) {
              this.sid = e;
            }
          }, {
            key: "_getWorkerManagerMsg",
            value: function value() {
              return {
                appId: this.appId,
                cname: this.channel,
                uid: this.uid,
                sid: this.sid,
                sdkVersion: s.VERSION,
                seq: ++this.seq,
                requestId: ++this.requestId,
                ts: Math.floor(Date.now() / 1e3)
              };
            }
          }, {
            key: "send",
            value: function value(e) {
              var t = this._getWorkerManagerMsg();
              return t.clientRequest = e, t;
            }
          }, {
            key: "updatePushUrl",
            value: function value() {
              var e = this._getWorkerManagerMsg();
              return e.clientRequest = {
                action: "update_url",
                role: "publish",
                uid: +this.uid
              }, e;
            }
          }, {
            key: "ping",
            value: function value() {
              return {
                command: "ping",
                requestId: ++this.requestId,
                appId: this.appId,
                cname: this.channel,
                uid: this.uid + "",
                sid: this.sid,
                ts: Math.floor(Date.now() / 1e3)
              };
            }
          }, {
            key: "ping2",
            value: function value() {
              var e = this._getWorkerManagerMsg();
              return e.clientRequest = {
                action: "ping"
              }, e;
            }
          }, {
            key: "setRole",
            value: function value(e) {
              var t = this._getWorkerManagerMsg();
              return t.clientRequest = {
                action: "set_role",
                role: e
              }, t;
            }
          }, {
            key: "rejoin",
            value: function value(e, t, n, r, i, o, s, a, c) {
              var l = this._getWorkerManagerMsg();
              return l.clientRequest = {
                action: "join",
                role: o,
                appId: e,
                customAudioCodec: a,
                key_vocs: r || e,
                key_vos: r || e,
                channel_name: t,
                uid: n + "",
                known_speakers: i,
                clientType: "undefined" == typeof qq ? "wechat" : "qq",
                audio_only: s,
                uidType: c
              }, l;
            }
          }, {
            key: "join",
            value: function value(e, t, n, r, i, o, a, c, l, u) {
              var p = this._getWorkerManagerMsg();
              return p.clientRequest = {
                action: "join",
                role: i,
                appId: e,
                customAudioCodec: l,
                key_vocs: r || e,
                key_vos: r || e,
                channel_name: t,
                uid: n + "",
                vid: O().vid.toString(),
                device: o,
                os: a,
                version: s.SDK_VERSION,
                clientType: "undefined" == typeof qq ? "wechat" : "qq",
                audio_only: c,
                uidType: u
              }, p;
            }
          }, {
            key: "muteLocal",
            value: function value(e, t) {
              var n = this._getWorkerManagerMsg();
              return n.clientRequest = {
                action: "mute_local",
                uid: +e,
                target: t,
                mute: !0
              }, n;
            }
          }, {
            key: "unmuteLocal",
            value: function value(e, t) {
              var n = this._getWorkerManagerMsg();
              return n.clientRequest = {
                action: "mute_local",
                uid: +e,
                target: t,
                mute: !1
              }, n;
            }
          }, {
            key: "mute",
            value: function value(e, t) {
              var n = this._getWorkerManagerMsg();
              return n.clientRequest = {
                action: "mute",
                uid: +e,
                target: t
              }, n;
            }
          }, {
            key: "unmute",
            value: function value(e, t) {
              var n = this._getWorkerManagerMsg();
              return n.clientRequest = {
                action: "unmute",
                uid: +e,
                target: t
              }, n;
            }
          }, {
            key: "publish",
            value: function value(e) {
              var t = this._getWorkerManagerMsg();
              return t.clientRequest = {
                action: "publish",
                uid: +e
              }, t;
            }
          }, {
            key: "unpublish",
            value: function value(e) {
              var t = this._getWorkerManagerMsg();
              return t.clientRequest = {
                action: "unpublish",
                uid: +e
              }, t;
            }
          }, {
            key: "subscribe",
            value: function value(e, t) {
              var n = this._getWorkerManagerMsg();
              return n.clientRequest = {
                action: "subscribe",
                uid: +e,
                options: {
                  audio: t.audio,
                  video: t.video
                }
              }, n;
            }
          }, {
            key: "unsubscribe",
            value: function value(e) {
              var t = this._getWorkerManagerMsg();
              return t.clientRequest = {
                action: "unsubscribe",
                uid: [+e]
              }, t;
            }
          }, {
            key: "setRemoteVideoStreamType",
            value: function value(e, t) {
              var n = this._getWorkerManagerMsg();
              return n.clientRequest = {
                action: "set_remote_stream_type",
                uid: +e,
                type: t
              }, n;
            }
          }, {
            key: "renewToken",
            value: function value(e) {
              var t = this._getWorkerManagerMsg();
              return t.clientRequest = {
                action: "update_key",
                key_vos: e
              }, t;
            }
          }, {
            key: "leave",
            value: function value(e) {
              var t = this._getWorkerManagerMsg();
              return t.clientRequest = {
                action: "leave",
                uid: +e
              }, t;
            }
          }]), e;
        }();
      function P(e) {
        return {
          all: e = e || new Map(),
          on: function on(t, n) {
            var r = e.get(t);
            r ? r.push(n) : e.set(t, [n]);
          },
          off: function off(t, n) {
            var r = e.get(t);
            r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []));
          },
          emit: function emit(t, n) {
            var r = e.get(t);
            r && r.slice().map(function (e) {
              e(n);
            }), (r = e.get("*")) && r.slice().map(function (e) {
              e(t, n);
            });
          }
        };
      }
      var I = __webpack_require__(500),
        A = __webpack_require__.n(I);
      var T = function () {
        function r(e, n) {
          (0, t.Z)(this, r), this.appId = e.appId, this.channel = e.channel, this.uid = e.uid, this.sid = e.sid, this.role = e.role, this.channelKey = e.channelKey, this.clientId = "client", this.option = e, this.timers = new Set(), this.grafanaReport = e.grafanaReport, this.argusReport = e.argusReport, this.audioCodec = e.audioCodec, this.uidType = e.uidType, this.clientEmitter = n, this.emitter = new P(), this.on = this.emitter.on, this.off = this.emitter.off, this.emit = this.emitter.emit, this.join = this.join.bind(this), this.msgManager = new k(e);
        }
        var o, s, c;
        return (0, n.Z)(r, [{
          key: "connect",
          value: function value() {
            var e = this;
            return new Promise(function (t, n) {
              e.ws = new S(e.option, e.emitter), e.ws.connect(), e.on("onmessage", e._onMessage.bind(e)), e.on("socketError", function (t) {
                n(t), a.default.error("worker socket error: ", JSON.stringify(t)), e.grafanaReport && e.grafanaReport.report("worker_connect_socket_error", y, "", JSON.stringify(t));
              }), e.on("onopen", function n() {
                e.off && e.off("onopen", n), e._ping(), t();
              }), e.on("onclose", function (t) {
                a.default.error("worker on close: ", JSON.stringify(t)), e.ws = null, e.clientEmitter.emit("error", {
                  code: 904,
                  reason: "websocket disconnected"
                }), e.grafanaReport && e.grafanaReport.report("worker_connect_on_close", y, "", JSON.stringify(t));
              });
            });
          }
        }, {
          key: "_onMessage",
          value: function value(e) {
            if (e && e.data) {
              var t = JSON.parse(e.data);
              if (t && "pong" !== t.command && (a.default.info("worker onmessage: ", t), this.argusReport.reportServerEvent(this.channel, this.uid, !0, 0, "serverEvent", t)), t.requestId && this.emit(t.requestId, t), "serverStatus" === t.command) {
                if (t.code && 200 !== t.code) {
                  if (this.grafanaReport && this.grafanaReport.report("worker_on_message", y, t.code, null == t ? void 0 : t.reason), 503 === t.code) return;
                  a.default.error("worker onmessage error: ", JSON.stringify(t)), this.clientEmitter.emit("error", {
                    code: t.code,
                    reason: t.reason || "server error"
                  });
                }
                if (t.serverStatus) {
                  a.default.info("Receive message from server: ".concat(JSON.stringify(t.serverStatus)));
                  var n = t.serverStatus.action;
                  if ("audio-mute" == n) return t.serverStatus.mute ? this.clientEmitter.emit("mute-audio", {
                    uid: t.serverStatus.uid
                  }) : this.clientEmitter.emit("unmute-audio", {
                    uid: t.serverStatus.uid
                  });
                  if ("video-mute" == n) return t.serverStatus.mute ? this.clientEmitter.emit("mute-video", {
                    uid: t.serverStatus.uid
                  }) : this.clientEmitter.emit("unmute-video", {
                    uid: t.serverStatus.uid
                  });
                  if ("key-expired" === n) return this.clientEmitter.emit("token-privilege-did-expire");
                  if ("key-will-expire" === n) return this.clientEmitter.emit("token-privilege-will-expire");
                  if ("client-is-banned-by-server" === n) return this.clientEmitter.emit("client-banned");
                  this.clientEmitter.emit(n, t.serverStatus);
                }
              }
            }
          }
        }, {
          key: "_sendMessage",
          value: function value(e) {
            var t = this;
            if (this.ws) return new Promise(function (n, r) {
              if (!t.isWSConnected()) return r({
                code: 904,
                reason: "websocket disconnected",
                wsurl: t.getWSUrl()
              });
              "ping" !== e.command && a.default.info("worker send message: ", e);
              var i,
                o = e ? e.requestId : null,
                s = function e(s) {
                  if (t.ws) return t.off(o, e), clearTimeout(i), t.timers.delete(i), 200 == s.code ? n(s.serverResponse) : r({
                    code: s.code,
                    reason: s.msg || s.reason,
                    serverResponse: s.serverResponse,
                    wsurl: t.getWSUrl()
                  });
                };
              if (!o) return r({
                code: 902,
                reason: "no requestid"
              });
              t.ws.sendMessage(JSON.stringify(e)), t.on(o, s), i = setTimeout(function () {
                return s({
                  code: 903,
                  reason: "time out"
                });
              }, 1e4), t.timers.add(i);
            });
          }
        }, {
          key: "_ping",
          value: function value() {
            var e = this;
            this.pingTimer = setInterval(function () {
              e.ws.sendMessage(JSON.stringify(e.msgManager.ping()));
            }, 3e3);
          }
        }, {
          key: "setRole",
          value: function value(e) {
            return this._sendMessage(this.msgManager.setRole(e));
          }
        }, {
          key: "rejoin",
          value: function value(e, t) {
            return this._sendMessage(this.msgManager.rejoin(this.appId, this.channel, this.uid, this.channelKey, e, this.role, t, this.audioCodec, this.uidType));
          }
        }, {
          key: "join",
          value: function value(e, t, n) {
            return this._sendMessage(this.msgManager.join(this.appId, this.channel, this.uid, this.channelKey, this.role, e, t, n, this.audioCodec, this.uidType));
          }
        }, {
          key: "send",
          value: function value(e) {
            return this._sendMessage(this.msgManager.send(e));
          }
        }, {
          key: "updatePushUrl",
          value: function value() {
            return this._sendMessage(this.msgManager.updatePushUrl());
          }
        }, {
          key: "publish",
          value: function value() {
            return this._sendMessage(this.msgManager.publish(this.uid));
          }
        }, {
          key: "unpublish",
          value: function value() {
            return this._sendMessage(this.msgManager.unpublish(this.uid));
          }
        }, {
          key: "subscribe",
          value: function value(e, t) {
            return this._sendMessage(this.msgManager.subscribe(e, t));
          }
        }, {
          key: "unsubscribe",
          value: function value(e) {
            return this._sendMessage(this.msgManager.unsubscribe(e));
          }
        }, {
          key: "setRemoteVideoStreamType",
          value: function value(e, t) {
            return this._sendMessage(this.msgManager.setRemoteVideoStreamType(e, t));
          }
        }, {
          key: "mute",
          value: function value(e, t) {
            return this._sendMessage(this.msgManager.mute(e, t));
          }
        }, {
          key: "unmute",
          value: function value(e, t) {
            return this._sendMessage(this.msgManager.unmute(e, t));
          }
        }, {
          key: "muteLocal",
          value: function value(e) {
            return this._sendMessage(this.msgManager.muteLocal(this.uid, e));
          }
        }, {
          key: "unmuteLocal",
          value: function value(e) {
            return this._sendMessage(this.msgManager.unmuteLocal(this.uid, e));
          }
        }, {
          key: "renewToken",
          value: function value(e) {
            return this._sendMessage(this.msgManager.renewToken(e));
          }
        }, {
          key: "leave",
          value: function value() {
            return this._sendMessage(this.msgManager.leave(this.uid));
          }
        }, {
          key: "isWSConnected",
          value: function value() {
            return !!this.ws && this.ws.isConnected();
          }
        }, {
          key: "getWSUrl",
          value: function value() {
            return this.ws ? this.ws.serverlist[this.ws.index] : "";
          }
        }, {
          key: "destroy",
          value: function value() {
            var e = this;
            return new Promise(function (t, n) {
              clearInterval(e.pingTimer), e.timers.size && (e.timers.forEach(function (e) {
                clearInterval(e);
              }), e.timers.clear()), e.ws ? e.ws.destroy(function () {
                e.ws = null, e.emitter = null, e.on = null, e.off = null, e.emit = null, t();
              }) : t();
            });
          }
        }, {
          key: "startChannelMediaRelay",
          value: (c = (0, e.Z)(i().mark(function e(t) {
            var n,
              r,
              o,
              s,
              c,
              l = this;
            return i().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!this.channelMediaRelayController) {
                      e.next = 2;
                      break;
                    }
                    throw new I.ChannelMediaError("RELAY_ALREADY_START", "", I.CHANNEL_MEDIA_RELAY_ERROR.RELAY_ALREADY_START);
                  case 2:
                    return n = function n(e) {
                      l.clientEmitter.emit("channel-media-relay-event", {
                        code: e
                      });
                    }, r = function r(e, t, n) {
                      e === I.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_FAILURE && t === I.CHANNEL_MEDIA_RELAY_ERROR.SERVER_CONNECTION_LOST && (l.channelMediaRelayController.dispose(), l.channelMediaRelayController = null), l.clientEmitter.emit("channel-media-relay-state", {
                        state: e,
                        code: t,
                        data: n
                      });
                    }, o = {
                      token: this.appId,
                      appId: this.appId,
                      cname: this.channel,
                      uid: this.uid,
                      sid: this.sid,
                      clientId: this.clientId
                    }, this.channelMediaRelayController = new (A())(o, this.clientId), this.channelMediaRelayController.on("event", n), this.channelMediaRelayController.on("state", r), e.prev = 8, e.next = 11, this.channelMediaRelayController.startChannelMediaRelay(t);
                  case 11:
                    e.next = 23;
                    break;
                  case 13:
                    throw e.prev = 13, e.t0 = e.catch(8), a.default.error("[".concat(this.clientId, "] startChannelMediaRelay exception: ").concat(JSON.stringify(e.t0))), s = I.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_FAILURE, "", c = e.t0 instanceof I.ChannelMediaError ? "SetSourceChannelStatus" === e.t0.data || e.t0.data && e.t0.data.serverResponse && "SetSourceChannel" === e.t0.data.serverResponse.command ? "FAILED_JOIN_SRC" : "SetDestChannelStatus" === e.t0.data || e.t0.data && e.t0.data.serverResponse && "SetDestChannel" === e.t0.data.serverResponse.command ? "FAILED_JOIN_DEST" : e.t0.data && e.t0.data.serverResponse && "StartPacketTransfer" === e.t0.data.serverResponse.command ? "FAILED_PACKET_SENT_TO_DEST" : e.t0.message === I.CHANNEL_MEDIA_ERROR.REQUEST_TIMEOUT || e.t0.message === I.CHANNEL_MEDIA_ERROR.WAIT_STATUS_TIMEOUT ? "SERVER_NO_RESPONSE" : e.t0.message === I.CHANNEL_MEDIA_ERROR.REQUEST_FAILED || e.t0.message === I.CHANNEL_MEDIA_ERROR.WAIT_STATUS_ERROR ? "SERVER_ERROR_RESPONSE" : e.t0.message === I.CHANNEL_MEDIA_ERROR.AP_REQUEST_TIMEOUT ? "NO_RESOURCE_AVAILABLE" : e.t0.message === I.CHANNEL_MEDIA_ERROR.WS_ABORT || e.t0.message === I.CHANNEL_MEDIA_ERROR.AP_REQUEST_ABORT ? "OPERATION_ABORT" : "INTERNAL_ERROR" : "INTERNAL_ERROR", this.clientEmitter.emit("channel-media-relay-state", {
                      state: s,
                      code: I.CHANNEL_MEDIA_RELAY_ERROR[c]
                    }), this.channelMediaRelayController && (this.channelMediaRelayController.dispose(), this.channelMediaConfig = null, this.channelMediaRelayController = null), this.clientEmitter.emit("channel-media-relay-state", {
                      state: I.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_IDLE
                    }), new I.ChannelMediaError(c, null, I.CHANNEL_MEDIA_RELAY_ERROR[c]);
                  case 23:
                    this.clientEmitter.emit("channel-media-relay-state", {
                      state: I.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_RUNNING,
                      code: I.CHANNEL_MEDIA_RELAY_ERROR.RELAY_OK
                    }), this.channelMediaConfig = t;
                  case 25:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this, [[8, 13]]);
          })), function (e) {
            return c.apply(this, arguments);
          })
        }, {
          key: "updateChannelMediaRelay",
          value: (s = (0, e.Z)(i().mark(function e(t) {
            var n, r;
            return i().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.channelMediaRelayController) {
                      e.next = 2;
                      break;
                    }
                    throw new I.ChannelMediaError("RELAY_NOT_START", null, I.CHANNEL_MEDIA_RELAY_ERROR.RELAY_NOT_START);
                  case 2:
                    return e.prev = 2, e.next = 5, this.channelMediaRelayController.updateChannelMediaRelay(t);
                  case 5:
                    e.next = 18;
                    break;
                  case 7:
                    throw e.prev = 7, e.t0 = e.catch(2), a.default.debug("[".concat(this.clientId, "] updateChannelMediaRelay exception: ").concat(JSON.stringify(e.t0))), n = I.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_FAILURE, "", r = e.t0 instanceof I.ChannelMediaError ? e.t0.message === I.CHANNEL_MEDIA_ERROR.REQUEST_TIMEOUT || e.t0.message === I.CHANNEL_MEDIA_ERROR.WAIT_STATUS_TIMEOUT ? "SERVER_NO_RESPONSE" : e.t0.message === I.CHANNEL_MEDIA_ERROR.REQUEST_FAILED || e.t0.message === I.CHANNEL_MEDIA_ERROR.WAIT_STATUS_ERROR ? "SERVER_ERROR_RESPONSE" : e.t0.message === I.CHANNEL_MEDIA_ERROR.WS_ABORT || e.t0.message === I.CHANNEL_MEDIA_ERROR.AP_REQUEST_ABORT ? "OPERATION_ABORT" : "INTERNAL_ERROR" : "INTERNAL_ERROR", this.clientEmitter.emit("channel-media-relay-event", {
                      code: I.CHANNEL_MEDIA_RELAY_EVENT.PACKET_UPDATE_DEST_CHANNEL_REFUSED
                    }), this.clientEmitter.emit("channel-media-relay-state", {
                      state: n,
                      code: I.CHANNEL_MEDIA_RELAY_ERROR[r]
                    }), this.channelMediaRelayController && (this.channelMediaRelayController.dispose(), this.channelMediaConfig = null, this.channelMediaRelayController = null), this.clientEmitter.emit("channel-media-relay-state", {
                      state: I.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_IDLE
                    }), new I.ChannelMediaError(r, null, I.CHANNEL_MEDIA_RELAY_ERROR[r]);
                  case 18:
                    this.channelMediaConfig = t;
                  case 19:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this, [[2, 7]]);
          })), function (e) {
            return s.apply(this, arguments);
          })
        }, {
          key: "stopChannelMediaRelay",
          value: (o = (0, e.Z)(i().mark(function e() {
            var t, n;
            return i().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.channelMediaRelayController) {
                      e.next = 2;
                      break;
                    }
                    throw new I.ChannelMediaError("RELAY_NOT_START", null, I.CHANNEL_MEDIA_RELAY_ERROR.RELAY_NOT_START);
                  case 2:
                    return e.prev = 2, e.next = 5, this.channelMediaRelayController.stopChannelMediaRelay();
                  case 5:
                    e.next = 17;
                    break;
                  case 7:
                    throw e.prev = 7, e.t0 = e.catch(2), a.default.debug("[".concat(this.clientId, "] stopChannelMediaRelay exception: ").concat(JSON.stringify(e.t0))), t = I.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_FAILURE, "", n = e.t0 instanceof I.ChannelMediaError ? e.t0.message === I.CHANNEL_MEDIA_ERROR.REQUEST_TIMEOUT || e.t0.message === I.CHANNEL_MEDIA_ERROR.WAIT_STATUS_TIMEOUT ? "SERVER_NO_RESPONSE" : e.t0.message === I.CHANNEL_MEDIA_ERROR.REQUEST_FAILED || e.t0.message === I.CHANNEL_MEDIA_ERROR.WAIT_STATUS_ERROR ? "SERVER_ERROR_RESPONSE" : "INTERNAL_ERROR" : "INTERNAL_ERROR", this.clientEmitter.emit("channel-media-relay-state", {
                      state: t,
                      code: I.CHANNEL_MEDIA_RELAY_ERROR[n]
                    }), this.channelMediaRelayController && (this.channelMediaRelayController.dispose(), this.channelMediaConfig = null, this.channelMediaRelayController = null), this.emit("channel-media-relay-state", {
                      state: I.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_IDLE
                    }), new I.ChannelMediaError(n, null, I.CHANNEL_MEDIA_RELAY_ERROR[n]);
                  case 17:
                    this.channelMediaConfig = null, this.channelMediaRelayController = null;
                  case 19:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this, [[2, 7]]);
          })), function () {
            return o.apply(this, arguments);
          })
        }]), r;
      }();
      var C = __webpack_require__(2),
        N = {
          videoBitrate: "Miniapp_SDK_Pusher_Video_Bitrate",
          audioBitrate: "Miniapp_SDK_Pusher_Audio_Bitrate",
          videoFPS: "Miniapp_SDK_Pusher_Video_FPS",
          videoGOP: "Miniapp_SDK_Pusher_Video_GOP",
          netSpeed: "Miniapp_SDK_Pusher_Net_Speed",
          videoCache: "Miniapp_SDK_Pusher_Video_Cache",
          audioCache: "Miniapp_SDK_Pusher_Audio_Cache",
          videoWidth: "Miniapp_SDK_Pusher_Video_Width",
          videoHeight: "Miniapp_SDK_Pusher_Video_Height",
          netJitter: "Miniapp_SDK_Pusher_Net_Jitter",
          netQualityLevel: "Miniapp_SDK_Pusher_Net_QualityLevel"
        },
        L = {
          videoBitrate: "Miniapp_SDK_Player_Video_Bitrate",
          audioBitrate: "Miniapp_SDK_Player_Audio_Bitrate",
          videoFPS: "Miniapp_SDK_Player_Video_FPS",
          videoGOP: "Miniapp_SDK_Player_Video_GOP",
          netSpeed: "Miniapp_SDK_Player_Net_Speed",
          videoCache: "Miniapp_SDK_Player_Video_Cache",
          audioCache: "Miniapp_SDK_Player_Audio_Cache",
          vDecCacheSize: "Miniapp_SDK_Player_V_Dec_Cache_Size",
          vSumCacheSize: "Miniapp_SDK_Player_V_Sum_Cache_Size",
          avPlayInterval: "Miniapp_SDK_Player_AV_Play_Interval",
          avRecvInterval: "Miniapp_SDK_Player_AV_Recv_Interval",
          audioCacheThreshold: "Miniapp_SDK_Player_Audio_Cache_Threshold",
          videoWidth: "Miniapp_SDK_Player_Video_Width",
          videoHeight: "Miniapp_SDK_Player_Video_Height",
          netJitter: "Miniapp_SDK_Player_Net_Jitter",
          netQualityLevel: "Miniapp_SDK_Player_Net_QualityLevel"
        },
        M = __webpack_require__(699),
        j = __webpack_require__.n(M);
      function D(e, t) {
        !function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          if (null == e) e = 1;else if (0 === e) throw new Error("Concurrency must not be zero");
        }(t);
        var n = [],
          r = [];
        return {
          concurrency: t,
          push: function push(e, t) {
            var r = this;
            n.push({
              task: e,
              callback: t
            }), setTimeout(function () {
              r.process();
            }, 0);
          },
          process: function process() {
            for (var t = this, i = function i() {
                var i,
                  o = n.shift();
                r.push(o), e(o.task, (i = function i() {
                  t.pull(o), "function" == typeof o.callback && o.callback.apply(o, arguments), t.process();
                }, function () {
                  if (null === i) throw new Error("Callback was already called");
                  var e = i;
                  return i = null, e.apply(void 0, arguments);
                }));
              }; this.concurrency > r.length && n.length;) {
              i();
            }
          },
          pull: function pull(e) {
            var t = r.indexOf(e);
            -1 !== t && r.splice(t, 1);
          }
        };
      }
      var x = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        if ("function" != typeof e) throw Error("request must be function");
        var n = D(function (e, t) {
          return e(t);
        }, t);
        return function (t) {
          n.push(function (n) {
            var r = t.complete;
            t.complete = function () {
              n(), "function" == typeof r && r.apply(void 0, arguments);
            }, e(t);
          });
        };
      }(wx.request, 2);
      function B(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })), n.push.apply(n, r);
        }
        return n;
      }
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? B(Object(n), !0).forEach(function (t) {
            l(e, t, n[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
        return e;
      }
      var q = j().io.agora.pb,
        J = q.CounterCompact,
        V = q.Id,
        K = q.MuteLocal,
        W = q.MuteRemote,
        H = q.Join,
        Y = q.Leave,
        F = q.Publish,
        Z = q.Unpublish,
        z = q.Subscribe,
        G = q.Unsubscribe,
        Q = q.ConnectWebSocket,
        X = q.ServerEvent,
        $ = q.JoinChooseServer,
        ee = q.RenewToken,
        te = q.SetRemoteVideoStreamType,
        ne = q.SetRole,
        re = q.Session,
        ie = q.PusherState,
        oe = q.PlayerState,
        se = function () {
          function e() {
            (0, t.Z)(this, e), this.url = "https://rest-argus-ad.agoralab.co/v2/report", this.sid = (0, o.generateSessionId)(), this.pusherNet = null, this.playerNetMap = {}, this.pusherTimer = null, this.playerTimer = null, this.seqId = 0, this.startPusherReport(), this.startPlayerReport();
          }
          return (0, n.Z)(e, [{
            key: "setPusherNetData",
            value: function value(e) {
              this.pusherNet = e;
            }
          }, {
            key: "setPlayerNetData",
            value: function value(e, t) {
              this.playerNetMap[e] = t;
            }
          }, {
            key: "getMessageTypeId",
            value: function value(e) {
              return V[e];
            }
          }, {
            key: "encodePb",
            value: function value(e, t, n) {
              var r = null,
                i = null;
              switch (t) {
                case "pusher_net":
                case "player_net":
                  i = J.create({
                    sid: this.sid,
                    peer: n.peerId,
                    items: n.items
                  }), r = J.encode(i).finish();
                  break;
                case "api_join":
                  i = H.create({
                    lts: e,
                    sid: this.sid,
                    cname: n.cname,
                    uid: "".concat(n.uid),
                    success: n.success,
                    elapse: n.elapse,
                    ec: n.ec,
                    details: JSON.stringify({
                      seqId: this.seqId++
                    }),
                    isrejoin: n.isrejoin,
                    ip: O().ip
                  }), r = H.encode(i).finish();
                  break;
                case "api_leave":
                  i = Y.create({
                    lts: e,
                    sid: this.sid,
                    cname: n.cname,
                    uid: "".concat(n.uid),
                    success: n.success,
                    elapse: n.elapse,
                    ec: n.ec,
                    details: JSON.stringify({
                      seqId: this.seqId++
                    }),
                    ip: O().ip
                  }), r = Y.encode(i).finish();
                  break;
                case "api_publish":
                  i = F.create({
                    pushurl: n.pushurl,
                    lts: e,
                    sid: this.sid,
                    cname: n.cname,
                    uid: "".concat(n.uid),
                    success: n.success,
                    elapse: n.elapse,
                    ec: n.ec,
                    details: JSON.stringify({
                      seqId: this.seqId++
                    }),
                    ip: O().ip
                  }), r = F.encode(i).finish();
                  break;
                case "api_unpublish":
                  i = Z.create({
                    lts: e,
                    sid: this.sid,
                    cname: n.cname,
                    uid: "".concat(n.uid),
                    success: n.success,
                    elapse: n.elapse,
                    ec: n.ec,
                    details: JSON.stringify({
                      seqId: this.seqId++
                    }),
                    ip: O().ip
                  }), r = Z.encode(i).finish();
                  break;
                case "api_subscribe":
                  i = z.create({
                    pullurl: n.pullurl,
                    peer: n.peer,
                    lts: e,
                    sid: this.sid,
                    cname: n.cname,
                    uid: "".concat(n.uid),
                    success: n.success,
                    elapse: n.elapse,
                    ec: n.ec,
                    details: JSON.stringify({
                      seqId: this.seqId++
                    }),
                    ip: O().ip
                  }), r = z.encode(i).finish();
                  break;
                case "api_unsubscribe":
                  i = G.create({
                    peer: n.peer,
                    lts: e,
                    sid: this.sid,
                    cname: n.cname,
                    uid: "".concat(n.uid),
                    success: n.success,
                    elapse: n.elapse,
                    ec: n.ec,
                    details: JSON.stringify({
                      seqId: this.seqId++
                    }),
                    ip: O().ip
                  }), r = G.encode(i).finish();
                  break;
                case "connect_websocket":
                  i = Q.create({
                    lts: e,
                    sid: this.sid,
                    cname: n.cname,
                    cid: null,
                    ip: O().ip,
                    uid: "".concat(n.uid),
                    success: n.success,
                    elapse: n.elapse,
                    peer: null,
                    gateway: n.gateway,
                    ec: n.ec,
                    wsurl: n.wsurl,
                    details: JSON.stringify({
                      seqId: this.seqId++
                    })
                  }), r = Q.encode(i).finish();
                  break;
                case "join_chooseserver":
                  i = $.create({
                    lts: e,
                    sid: this.sid,
                    cname: n.cname,
                    cid: null,
                    ip: O().ip,
                    uid: "".concat(n.uid),
                    success: n.success,
                    elapse: n.elapse,
                    peer: null,
                    csurl: n.csurl,
                    ec: n.ec,
                    gatewaylist: n.gatewaylist,
                    details: JSON.stringify(U(U({}, n.details), {}, {
                      seqId: this.seqId++
                    }))
                  }), r = $.encode(i).finish();
                  break;
                case "api_muteLocal":
                  i = K.create({
                    lts: e,
                    vid: O().vid,
                    sid: this.sid,
                    cname: n.cname,
                    cid: null,
                    ip: O().ip,
                    uid: "".concat(n.uid),
                    success: n.success,
                    elapse: n.elapse,
                    ec: n.ec,
                    target: n.target,
                    mute: n.mute,
                    details: JSON.stringify(U(U({}, n.details), {}, {
                      seqId: this.seqId++
                    }))
                  }), r = K.encode(i).finish();
                  break;
                case "api_muteRemote":
                  i = W.create({
                    lts: e,
                    vid: O().vid,
                    sid: this.sid,
                    cname: n.cname,
                    cid: null,
                    ip: O().ip,
                    uid: "".concat(n.uid),
                    success: n.success,
                    elapse: n.elapse,
                    peer: n.peer,
                    ec: n.ec,
                    target: n.target,
                    mute: n.mute,
                    details: JSON.stringify(U(U({}, n.details), {}, {
                      seqId: this.seqId++
                    }))
                  }), r = W.encode(i).finish();
                  break;
                case "api_renewToken":
                  i = ee.create({
                    lts: e,
                    vid: O().vid,
                    sid: this.sid,
                    cname: n.cname,
                    cid: null,
                    ip: O().ip,
                    uid: "".concat(n.uid),
                    success: n.success,
                    elapse: n.elapse,
                    ec: n.ec,
                    details: JSON.stringify(U(U({}, n.details), {}, {
                      seqId: this.seqId++
                    }))
                  }), r = ee.encode(i).finish();
                  break;
                case "api_setRemoteStreamType":
                  i = te.create({
                    lts: e,
                    vid: O().vid,
                    sid: this.sid,
                    cname: n.cname,
                    cid: null,
                    ip: O().ip,
                    uid: "".concat(n.uid),
                    success: n.success,
                    elapse: n.elapse,
                    ec: n.ec,
                    type: n.type,
                    details: JSON.stringify(U(U({}, n.details), {}, {
                      seqId: this.seqId++
                    }))
                  }), r = te.encode(i).finish();
                  break;
                case "api_setRole":
                  i = ne.create({
                    lts: e,
                    vid: O().vid,
                    sid: this.sid,
                    cname: n.cname,
                    cid: null,
                    ip: O().ip,
                    uid: "".concat(n.uid),
                    success: n.success,
                    elapse: n.elapse,
                    ec: n.ec,
                    type: n.type,
                    role: n.role,
                    details: JSON.stringify(U(U({}, n.details), {}, {
                      seqId: this.seqId++
                    }))
                  }), r = ne.encode(i).finish();
                  break;
                case "session":
                  i = re.create({
                    lts: e,
                    sid: this.sid,
                    cname: null,
                    cid: null,
                    ip: O().ip,
                    uid: null,
                    success: n.success,
                    elapse: n.elapse,
                    peer: null,
                    appid: n.appId,
                    uname: n.uname,
                    ver: n.ver,
                    dk: n.dk,
                    details: JSON.stringify(U(U({}, n.details), {}, {
                      seqId: this.seqId++
                    }))
                  }), r = re.encode(i).finish();
                  break;
                case "serverEvent":
                  i = X.create({
                    lts: e,
                    sid: this.sid,
                    cname: n.cname,
                    cid: null,
                    ip: O().ip,
                    uid: "".concat(n.uid),
                    success: n.success,
                    elapse: n.elapse,
                    peer: null,
                    action: n.action,
                    details: JSON.stringify(U(U({}, n.details), {}, {
                      seqId: this.seqId++
                    })),
                    req_ts: null
                  }), r = X.encode(i).finish();
                  break;
                case "pusher_state":
                  i = ie.create({
                    lts: e,
                    sid: this.sid,
                    cname: n.cname,
                    cid: null,
                    ip: O().ip,
                    uid: "".concat(n.uid),
                    success: n.success,
                    elapse: n.elapse,
                    peer: null,
                    url: n.url,
                    code: n.code,
                    status: null,
                    error: null,
                    details: JSON.stringify(U(U({}, n.details), {}, {
                      seqId: this.seqId++
                    }))
                  }), r = ie.encode(i).finish();
                  break;
                case "player_state":
                  i = oe.create({
                    lts: e,
                    sid: this.sid,
                    cname: n.cname,
                    cid: null,
                    ip: O().ip,
                    uid: "".concat(n.uid),
                    success: n.success,
                    elapse: n.elapse,
                    peer: n.peer,
                    url: n.url,
                    code: n.code,
                    status: null,
                    error: null,
                    details: JSON.stringify(U(U({}, n.details), {}, {
                      seqId: this.seqId++
                    }))
                  }), r = oe.encode(i).finish();
              }
              return r;
            }
          }, {
            key: "startPusherReport",
            value: function value() {
              var e = this;
              this.pusherTimer = setInterval(function () {
                var t = Date.now();
                if (e.pusherNet) {
                  var n = [];
                  if (Object.keys(e.pusherNet).map(function (r) {
                    if (void 0 !== N[r]) {
                      var i = V[N[r]];
                      if (void 0 !== i) {
                        var o = {
                          lts: t,
                          id: i,
                          value: e.pusherNet[r],
                          tagErrorCode: 6,
                          streamId: 0
                        };
                        n.push(o);
                      }
                    }
                  }), 0 === n.length) return a.default.warn("[argus] no kv exists for pusher data reporting");
                  var r = e.encodePb(t, "pusher_net", {
                    peerId: 0,
                    items: n
                  });
                  e.report(t, r, 1);
                }
              }, 6e3);
            }
          }, {
            key: "startPlayerReport",
            value: function value() {
              var e = this;
              this.playerTimer = setInterval(function () {
                var t = Date.now();
                if (e.playerNetMap) {
                  var n = function n(_n) {
                    var r = [],
                      i = e.playerNetMap[_n];
                    if (Object.keys(i).map(function (e) {
                      if (void 0 !== L[e]) {
                        var n = V[L[e]];
                        if (void 0 !== n) {
                          var o = {
                            lts: t,
                            id: n,
                            value: i[e],
                            tagErrorCode: 6,
                            streamId: 0
                          };
                          r.push(o);
                        }
                      }
                    }), 0 === r.length) return {
                      v: a.default.warn("[argus] no kv exists for live data reporting")
                    };
                    var o = e.encodePb(t, "player_net", {
                      peerId: _n,
                      items: r
                    });
                    e.report(t, o, 1);
                  };
                  for (var r in e.playerNetMap) {
                    var i = n(r);
                    if ("object" === (0, C.Z)(i)) return i.v;
                  }
                }
                e.playerNetMap = {};
              }, 6e3);
            }
          }, {
            key: "_silent_call",
            value: function value(e) {
              var t = this;
              return function () {
                try {
                  e.apply(t, arguments);
                } catch (e) {}
              };
            }
          }, {
            key: "reportJoin",
            value: function value(e, t, n, r, i, o, s) {
              this._silent_call(this.reportAPI)("api_join", {
                cname: e,
                uid: t,
                success: n,
                elapse: r,
                isrejoin: !1,
                ec: i,
                appId: o,
                wsurl: s
              }, 9292);
            }
          }, {
            key: "reportRejoin",
            value: function value(e, t, n, r, i, o, s) {
              this._silent_call(this.reportAPI)("api_join", {
                cname: e,
                uid: t,
                success: n,
                elapse: r,
                isrejoin: !0,
                ec: i,
                appId: o,
                wsurl: s
              }, 9292);
            }
          }, {
            key: "reportLeave",
            value: function value(e, t, n, r, i) {
              this._silent_call(this.reportAPI)("api_leave", {
                cname: e,
                uid: t,
                success: n,
                elapse: r,
                ec: i
              }, 9297);
            }
          }, {
            key: "reportPublish",
            value: function value(e, t, n, r, i, o) {
              this._silent_call(this.reportAPI)("api_publish", {
                pushurl: e,
                cname: t,
                uid: n,
                success: r,
                elapse: i,
                ec: o
              }, 9293);
            }
          }, {
            key: "reportUnPublish",
            value: function value(e, t, n, r, i) {
              this._silent_call(this.reportAPI)("api_unpublish", {
                cname: e,
                uid: t,
                success: n,
                elapse: r,
                ec: i
              }, 9294);
            }
          }, {
            key: "reportSubscribe",
            value: function value(e, t, n, r, i, o, s) {
              this._silent_call(this.reportAPI)("api_subscribe", {
                pullurl: e,
                peer: t,
                cname: n,
                uid: r,
                success: i,
                elapse: o,
                ec: s
              }, 9295);
            }
          }, {
            key: "reportUnSubscribe",
            value: function value(e, t, n, r, i, o) {
              this._silent_call(this.reportAPI)("api_unsubscribe", {
                peer: e,
                cname: t,
                uid: n,
                success: r,
                elapse: i,
                ec: o
              }, 9296);
            }
          }, {
            key: "reportConnectWS",
            value: function value(e, t, n, r, i, o, s) {
              this._silent_call(this.reportAPI)("connect_websocket", {
                cname: e,
                uid: t,
                success: n,
                elapse: r,
                ec: i,
                gateway: o,
                wsurl: s
              }, 9291);
            }
          }, {
            key: "reportJoinCS",
            value: function value(e, t, n, r, i, o, s) {
              this._silent_call(this.reportAPI)("join_chooseserver", {
                cname: e,
                uid: t,
                success: n,
                elapse: r,
                ec: i,
                csurl: o,
                gatewaylist: s
              }, 9290);
            }
          }, {
            key: "reportMuteLocal",
            value: function value(e, t, n, r, i, o, s) {
              this._silent_call(this.reportAPI)("api_muteLocal", {
                cname: e,
                uid: t,
                success: n,
                elapse: r,
                ec: i,
                target: o,
                mute: s
              }, 9798);
            }
          }, {
            key: "reportMuteRemote",
            value: function value(e, t, n, r, i, o, s, a) {
              this._silent_call(this.reportAPI)("api_muteRemote", {
                cname: e,
                uid: t,
                success: n,
                elapse: r,
                ec: i,
                peer: o,
                target: s,
                mute: a
              }, 9794);
            }
          }, {
            key: "reportRenewToken",
            value: function value(e, t, n, r, i) {
              this._silent_call(this.reportAPI)("api_renewToken", {
                cname: e,
                uid: t,
                success: n,
                elapse: r,
                ec: i
              }, 9800);
            }
          }, {
            key: "reportSetRemoteStreamType",
            value: function value(e, t, n, r, i, o) {
              this._silent_call(this.reportAPI)("api_setRemoteStreamType", {
                cname: e,
                uid: t,
                success: n,
                elapse: r,
                ec: i,
                type: o
              }, 9799);
            }
          }, {
            key: "reportSetRole",
            value: function value(e, t, n, r, i, o) {
              this._silent_call(this.reportAPI)("api_setRole", {
                cname: e,
                uid: t,
                success: n,
                elapse: r,
                ec: i,
                role: "broadcaster" === o ? 1 : 2
              }, 9801);
            }
          }, {
            key: "reportSession",
            value: function value(e, t, n, r, i, o, s, a, c) {
              this._silent_call(this.reportAPI)("session", {
                cname: e,
                uid: t,
                success: n,
                elapse: r,
                ec: i,
                appId: o,
                uname: s,
                ver: a,
                dk: c
              }, 9289);
            }
          }, {
            key: "reportServerEvent",
            value: function value(e, t, n, r, i, o) {
              this._silent_call(this.reportAPI)("serverEvent", {
                cname: e,
                uid: t,
                success: n,
                elapse: r,
                action: i,
                details: o
              }, 9298);
            }
          }, {
            key: "reportPusherStateChange",
            value: function value(e, t, n, r, i, o, s) {
              this._silent_call(this.reportAPI)("pusher_state", {
                cname: e,
                uid: t,
                success: n,
                elapse: r,
                url: i,
                code: o,
                message: s
              }, 9300);
            }
          }, {
            key: "reportPlayerStateChange",
            value: function value(e, t, n, r, i, o, s, a) {
              this._silent_call(this.reportAPI)("player_state", {
                peer: e,
                cname: t,
                uid: n,
                success: r,
                elapse: i,
                url: o,
                code: s,
                message: a
              }, 9301);
            }
          }, {
            key: "reportAPI",
            value: function value(e, t, n) {
              var r = Date.now(),
                i = this.encodePb(r, e, t);
              i && this.report(r, i, n);
            }
          }, {
            key: "destroy",
            value: function value() {
              null !== this.pusherTimer && clearInterval(this.pusherTimer), null !== this.playerTimer && clearInterval(this.playerTimer), this.pusherNet = null, this.playerNet = null;
            }
          }, {
            key: "report",
            value: function value(e, t, n) {
              var r = wx.arrayBufferToBase64(t),
                i = {
                  id: n,
                  payload: r,
                  qos: 1,
                  sign: p()("payload=".concat(r, "&src=miniapp_sdk&ts=").concat(e)),
                  src: "miniapp_sdk",
                  ts: e,
                  vid: O().vid
                };
              return this.request({
                body: i,
                url: this.url
              });
            }
          }, {
            key: "request",
            value: function value(e) {
              return new Promise(function (t, n) {
                x({
                  url: e.url,
                  data: e.body,
                  timeout: 1e4,
                  header: {
                    "Content-Type": "application/json",
                    "Request-ID": "".concat(new Date().getTime())
                  },
                  method: "POST",
                  success: function success(e) {
                    200 === e.statusCode || a.default.error("[argus] response fail: ".concat(e.statusCode)), t(e);
                  },
                  fail: function fail(e) {
                    a.default.error("[argus] weixin request argus report fail"), n(e);
                  }
                });
              });
            }
          }]), e;
        }(),
        ae = (0, m.throttle)(function (e, t, n) {
          a.default.info("client update pusher netStatus, ".concat(JSON.stringify(n, function (e, t) {
            return void 0 === t ? String(t) : t;
          }))), e.reportNetStatus(t, n);
        }, 1e4),
        ce = (0, m.throttle)(function (e, t, n, r) {
          a.default.info("client update player netStatus, uid:".concat(r, "  ").concat(JSON.stringify(n, function (e, t) {
            return void 0 === t ? String(t) : t;
          }))), e.reportNetStatus(t, n);
        }, 1e4),
        le = function le(e) {
          a.default.info("client network status change, ".concat(JSON.stringify(e)));
        },
        ue = function ue(e) {
          a.default.info("client network status weak, ".concat(JSON.stringify(e)));
        };
      var pe = function () {
        function r(e) {
          var n = this;
          (0, t.Z)(this, r), this.emitter = new P(), this.on = this.emitter.on, this.off = this.emitter.off, this.sid = "", this.pushUrl = null, this.playUrls = new Map(), this.servers = e && e.servers, this.apUrl = e && e.apUrl, this.role = "audience", this.audioCodec = null, this.grafanaReport = new g(), this.argusReport = new se(), this.systemInfo = {}, this.emitter.on("stream-removed", function (e) {
            n.playUrls && n.playUrls.delete(e.uid), delete n.argusReport.playerNetMap[e.uid];
          }), this.targetMap = {
            audio: 0,
            video: 1,
            all: 2
          }, this.networkJudge = !1;
        }
        return (0, n.Z)(r, [{
          key: "init",
          value: function value(e, t, n) {
            var r = this;
            return new Promise(function (i, o) {
              if (!e || "string" != typeof e || "null" === e.toLowerCase()) {
                var c = new Error("Invalid appId");
                return a.default.error("client init failed: ".concat(c.message)), n && n(c), void o(c);
              }
              r.appId = e.trim(), r.grafanaReport.vid = "", r._dealSid();
              try {
                r.systemInfo = wx.getSystemInfoSync();
              } catch (e) {
                console.warn("wx getSystemInfoSync error", JSON.stringify(e));
              }
              r.grafanaReport.setOptions({
                systemInfo: r.systemInfo,
                appId: r.appId
              }), r.argusReport.reportSession(null, null, !0, 0, null, r.appId, r.systemInfo.platform, s.SDK_VERSION, r.systemInfo.brand + "/" + r.systemInfo.model), a.default.info("client init success"), a.default.info("client systemInfo: ".concat(JSON.stringify(r.systemInfo))), t && t(), i();
            });
          }
        }, {
          key: "setAudioCodec",
          value: function value(e) {
            a.default.info("client set audioCodec ".concat(e, " success")), this.audioCodec = e;
          }
        }, {
          key: "setRole",
          value: function value(e, t, n) {
            var r = this;
            return new Promise(function (i, o) {
              if ("broadcaster" !== e && "audience" !== e) {
                var s = new Error("Invalid role");
                return a.default.error("client set role: ".concat(e, " failed: ").concat(s.message)), n && n(s), void o(s);
              }
              if (r.role = e, r.worker) {
                var c = v.create().start();
                r.worker.setRole(e).then(function (n) {
                  setTimeout(function () {
                    if (!n) return a.default.info("client set role ".concat(e, " success")), t && t(), void i();
                    var o = n["update-url"],
                      s = {
                        updateURL: o
                      };
                    a.default.info("client set role ".concat(e, " success url: ").concat(o)), t && t(s), i(s), r.argusReport.reportSetRole(r.channel, r.uid, !0, c.elapse(), null, e), r.grafanaReport.report("set_role", f);
                  }, 1);
                }).catch(function (t) {
                  a.default.error("client set role: ".concat(e, " failed: ").concat((0, m.stringifyErr)(t))), n && n(), o(), r.argusReport.reportSetRole(r.channel, r.uid, !1, c.elapse(), JSON.stringify(t), e), r.grafanaReport.report("set_role", y, t.code, null == t ? void 0 : t.reason);
                });
              } else a.default.info("client set role ".concat(e, " success url: ")), t && t(), i(), r.grafanaReport.report("set_role", f);
            });
          }
        }, {
          key: "rejoin",
          value: function value(e, t, n, r) {
            var i = this,
              s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
              l = arguments.length > 6 ? arguments[6] : void 0,
              u = arguments.length > 7 ? arguments[7] : void 0;
            if ("function" == typeof s) {
              var p = l,
                h = u;
              l = s, u = c, s = p || !1, c = h || 0;
            }
            return new Promise(function (p, h) {
              if (i._dealSid(), i.grafanaReport.onlineUser(), i.worker) return i._startNetworkJudge(), l && l(), p();
              if (e) {
                if ("string" != typeof e || "null" === e.toLowerCase()) {
                  var d = new Error("Invalid channelKey");
                  return a.default.error("client rejoin channel failed: ".concat(d.message)), u && u(d), void h(d);
                }
              } else e = i.appId;
              if (!t || "string" != typeof t || "null" === t.toLowerCase() || t.length > 128) {
                var _ = new Error("Invalid channel");
                return a.default.error("client rejoin channel failed: ".concat(_.message)), u && u(_), void h(_);
              }
              if ("boolean" != typeof s) {
                var g = new Error("isAudioOnly should be boolean");
                return a.default.error("client rejoin channel failed: ".concat(g.message)), u && u(g), h(g), void i.grafanaReport.report("join", y, "", g.message);
              }
              if (1 == c) {
                if (!n.trim()) {
                  var w = new Error("uid empty");
                  return a.default.error("client rejoin channel failed: ".concat(w.message)), u && u(w), void h(w);
                }
                i.uid = n;
              } else if (i.uid = n || (0, o.random)(1e7), i.uid = Number.parseInt(i.uid), !(0, o.is32Uint)(i.uid)) {
                var O = new Error("Invalid uid type");
                return a.default.error("client rejoin channel failed: ".concat(O.message)), u && u(O), void h(O);
              }
              i.channel = t, i.worker = new T({
                appId: i.appId,
                channel: i.channel,
                uid: i.uid,
                sid: i.sid,
                role: i.role,
                servers: i.servers,
                apUrl: i.apUrl,
                channelKey: e,
                grafanaReport: i.grafanaReport,
                argusReport: i.argusReport,
                audioCodec: i.audioCodec,
                uidType: c
              }, i.emitter);
              var E = v.create().start();
              i.worker.connect().then(function () {
                return i.worker.rejoin(r, s);
              }).then(function (e) {
                setTimeout(function () {
                  a.default.info("client rejoin channel success"), l && l(i.uid), p(i.uid), i.argusReport.reportRejoin(i.channel, i.uid, !0, E.elapse(), null, i.appId, i.worker && i.worker.getWSUrl()), i.grafanaReport.report("join", f), i._startNetworkJudge();
                }, 1), e && e.uid && (i.uid = e.uid, i.worker.uid = e.uid);
              }).catch(function (e) {
                i.destroy(), a.default.error("client rejoin channel failed: ".concat((0, m.stringifyErr)(e))), u && u(e), h(e), i.argusReport.reportRejoin(i.channel, i.uid, !1, E.elapse(), JSON.stringify(e), i.appId, i.worker && i.worker.getWSUrl()), i.grafanaReport.report("join", y, e.code, null == e ? void 0 : e.reason);
              });
            });
          }
        }, {
          key: "join",
          value: function value(e, t, n) {
            var r = this,
              i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
              c = arguments.length > 5 ? arguments[5] : void 0,
              l = arguments.length > 6 ? arguments[6] : void 0;
            if ("function" == typeof i) {
              var u = c,
                p = l;
              c = i, l = s, i = u || !1, s = p || 0;
            }
            return new Promise(function (u, p) {
              if (r._dealSid(), r.grafanaReport.onlineUser(), r.worker) return a.default.info("client join channel success"), c && c(), r._startNetworkJudge(), u();
              if (e) {
                if ("string" != typeof e || "null" === e.toLowerCase()) {
                  var h = new Error("Invalid channelKey");
                  return a.default.error("client join channel failed: ".concat(h.message)), l && l(h), p(h), void r.grafanaReport.report("join", y, "", h.message);
                }
              } else e = r.appId;
              if (!t || "string" != typeof t || "null" === t.toLowerCase() || t.length > 128) {
                var d = new Error("Invalid channel");
                return a.default.error("client join channel failed: ".concat(d.message)), l && l(d), p(d), void r.grafanaReport.report("join", y, "", d.message);
              }
              if ("boolean" != typeof i) {
                var _ = new Error("isAudioOnly should be boolean");
                return a.default.error("client join channel failed: ".concat(_.message)), l && l(_), p(_), void r.grafanaReport.report("join", y, "", _.message);
              }
              if (1 == s) {
                if (!n.trim()) {
                  var g = new Error("uid empty");
                  return a.default.error("client join channel failed: ".concat(g.message)), l && l(g), p(g), void r.grafanaReport.report("join", y, "", g.message);
                }
                r.uid = n;
              } else if (r.uid = n || (0, o.random)(1e7), r.uid = Number.parseInt(r.uid), !(0, o.is32Uint)(r.uid)) {
                var w = new Error("Invalid uid type");
                return a.default.error("client join channel failed: ".concat(w.message)), l && l(w), p(w), void r.grafanaReport.report("join", y, "", w.message);
              }
              r.channel = t, r.worker = new T({
                appId: r.appId,
                channel: r.channel,
                uid: r.uid,
                sid: r.sid,
                role: r.role,
                servers: r.servers,
                apUrl: r.apUrl,
                channelKey: e,
                grafanaReport: r.grafanaReport,
                argusReport: r.argusReport,
                audioCodec: r.audioCodec,
                uidType: s
              }, r.emitter);
              var O = v.create().start();
              r.worker.connect().then(function () {
                return r.worker.join(r.systemInfo.model, r.systemInfo.system, i);
              }).then(function (e) {
                var t = O.elapse(),
                  n = (0, m.transformElapseStr)(t);
                setTimeout(function () {
                  a.default.info("client join channel success,time:".concat(t, "ms,elapse:").concat(n)), c && c(r.uid), u(r.uid), r._startNetworkJudge(), r.argusReport.reportJoin(r.channel, r.uid, !0, t), r.grafanaReport.report("join", f, "", "", {
                    elapse: n
                  });
                }, 1), e && e.uid && (r.uid = e.uid, r.worker.uid = e.uid);
              }).catch(function (e) {
                r.destroy(), a.default.error("client join channel failed: ".concat((0, m.stringifyErr)(e))), l && l(e), p(e), r.argusReport.reportJoin(r.channel, r.uid, !1, O.elapse(), JSON.stringify(e)), r.grafanaReport.report("join", y, null == e ? void 0 : e.code, null == e ? void 0 : e.reason);
              });
            });
          }
        }, {
          key: "publish",
          value: function value(e, t) {
            var n = this;
            return new Promise(function (r, i) {
              n._checkWorker();
              var o = v.create().start();
              n.worker.publish().then(function (t) {
                n.pushUrl = t.url, setTimeout(function () {
                  a.default.info("client publish url: ".concat(t.url, " success")), e && e(t.url), r(t.url), n.argusReport.reportPublish(t.url, n.channel, n.uid, !0, o.elapse()), n.grafanaReport.report("publish", f);
                }, 1);
              }).catch(function (e) {
                a.default.error("client publish failed: ".concat((0, m.stringifyErr)(e))), t && t(e), i(e), n.argusReport.reportPublish(null, n.channel, n.uid, !1, o.elapse(), JSON.stringify(e)), n.grafanaReport.report("publish", y, e.code, null == e ? void 0 : e.reason);
              });
            });
          }
        }, {
          key: "unpublish",
          value: function value(e, t) {
            var n = this;
            return new Promise(function (r, i) {
              n._checkWorker();
              var o = v.create().start();
              n.worker.unpublish().then(function (t) {
                n.pushUrl = null, setTimeout(function () {
                  a.default.info("client unpublish success"), e && e(), r(), n.argusReport.reportUnPublish(n.channel, n.uid, !0, o.elapse()), n.grafanaReport.report("unpublish", f);
                }, 1);
              }).catch(function (e) {
                a.default.error("client unpublish failed: ".concat((0, m.stringifyErr)(e))), t && t(e), i(e), n.argusReport.reportUnPublish(n.channel, n.uid, !1, o.elapse(), JSON.stringify(e)), n.grafanaReport.report("unpublish", y, e.code, null == e ? void 0 : e.reason);
              });
            });
          }
        }, {
          key: "subscribe",
          value: function value(e) {
            var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                audio: !0,
                video: !0
              },
              r = arguments.length > 2 ? arguments[2] : void 0,
              i = arguments.length > 3 ? arguments[3] : void 0;
            if ("function" == typeof n) {
              var o = i;
              i = r, r = n, n = o || {
                audio: !0,
                video: !0
              };
            }
            return new Promise(function (o, s) {
              t._checkUid(e), t._checkWorker();
              var c = v.create().start();
              t.worker.subscribe(e, n).then(function (n) {
                t.playUrls.set(e, n.url), setTimeout(function () {
                  a.default.info("client stream ".concat(e, " subscribed successful")), r && r(n.url, n.rotation), o({
                    url: n.url,
                    rotation: n.rotation
                  }), t.argusReport.reportSubscribe(n.url, e, t.channel, t.uid, !0, c.elapse()), t.grafanaReport.report("subscribe", f);
                }, 1);
              }).catch(function (n) {
                a.default.error("client stream ".concat(e, " subscribed failed: ").concat((0, m.stringifyErr)(n))), i && i(n), s(n), t.argusReport.reportSubscribe(null, e, t.channel, t.uid, !1, c.elapse(), JSON.stringify(n)), t.grafanaReport.report("subscribe", y, n.code, null == n ? void 0 : n.reason);
              });
            });
          }
        }, {
          key: "unsubscribe",
          value: function value(e, t, n) {
            var r = this;
            return new Promise(function (i, o) {
              r._checkUid(e), r._checkWorker();
              var s = v.create().start();
              r.worker.unsubscribe(e).then(function (n) {
                r.playUrls.delete(e), setTimeout(function () {
                  a.default.info("client unsubscribe ".concat(e, " successful")), t && t(), i(), r.argusReport.reportUnSubscribe(e, r.channel, r.uid, !0, s.elapse(), null), r.grafanaReport.report("unsubscribe", f);
                }, 1);
              }).catch(function (t) {
                a.default.error("client unsubscribe ".concat(e, " failed: ").concat((0, m.stringifyErr)(t))), n && n(t), o(t), r.argusReport.reportUnSubscribe(e, r.channel, r.uid, !1, s.elapse(), JSON.stringify(t)), r.grafanaReport.report("unsubscribe", y, t.code, null == t ? void 0 : t.reason);
              });
            });
          }
        }, {
          key: "mute",
          value: function value(e, t, n, r) {
            var i = this;
            return new Promise(function (o, s) {
              if (i._checkUid(e), i._checkWorker(), "video" !== t && "audio" !== t && "all" !== t) {
                var c = new Error('target should be "video", "audio" or "all"');
                return a.default.error("client mute ".concat(e, " failed: ").concat(c.message)), r && r(c), void s(c);
              }
              var l = v.create().start();
              i.worker.mute(e, t).then(function (r) {
                setTimeout(function () {
                  a.default.info("client mute ".concat(e, " ").concat(t, " success")), n && n(), o(), i.argusReport.reportMuteRemote(i.channel, i.uid, !0, l.elapse(), null, e, i.targetMap[t], 1), i.grafanaReport.report("mute", f);
                }, 1);
              }).catch(function (n) {
                a.default.error("client mute ".concat(e, " ").concat(t, " failed: ").concat((0, m.stringifyErr)(n))), r && r(n), s(n), i.argusReport.reportMuteRemote(i.channel, i.uid, !1, l.elapse(), JSON.stringify(n), e, i.targetMap[t], 1), i.grafanaReport.report("mute", y, n.code, null == n ? void 0 : n.reason);
              });
            });
          }
        }, {
          key: "unmute",
          value: function value(e, t, n, r) {
            var i = this;
            return new Promise(function (o, s) {
              if (i._checkUid(e), i._checkWorker(), "video" !== t && "audio" !== t && "all" !== t) {
                var c = new Error('target should be "video", "audio" or "all"');
                return a.default.error("client unmute ".concat(e, " ").concat(t, " failed: ").concat(c.message)), r && r(c), void s(c);
              }
              var l = v.create().start();
              i.worker.unmute(e, t).then(function (r) {
                setTimeout(function () {
                  a.default.info("client unmute ".concat(e, " ").concat(t, " success")), n && n(), o(), i.argusReport.reportMuteRemote(i.channel, i.uid, !0, l.elapse(), null, e, i.targetMap[t], -1), i.grafanaReport.report("unmute", f);
                }, 1);
              }).catch(function (n) {
                a.default.error("client unmute ".concat(e, " ").concat(t, " failed: ").concat((0, m.stringifyErr)(n))), r && r(n), s(n), i.argusReport.reportMuteRemote(i.channel, i.uid, !1, l.elapse(), JSON.stringify(n), e, i.targetMap[t], -1), i.grafanaReport.report("unmute", y, n.code, null == n ? void 0 : n.reason);
              });
            });
          }
        }, {
          key: "setRemoteVideoStreamType",
          value: function value(e, t, n, r) {
            var i = this;
            return new Promise(function (o, s) {
              i._checkUid(e), i._checkWorker();
              var c = v.create().start();
              i.worker.setRemoteVideoStreamType(e, t).then(function (r) {
                setTimeout(function () {
                  a.default.info("client set remoteVideoStreamType ".concat(e, " ").concat(t, " success")), n && n(), o(), i.argusReport.reportSetRemoteStreamType(i.channel, i.uid, !0, c.elapse(), null, t), i.grafanaReport.report("set_remote_stream_type", f);
                }, 1);
              }).catch(function (n) {
                a.default.error("client set remoteVideoStreamType ".concat(e, " ").concat(t, " failed: ").concat((0, m.stringifyErr)(n))), r && r(n), s(n), i.argusReport.reportSetRemoteStreamType(i.channel, i.uid, !1, c.elapse(), JSON.stringify(n), t), i.grafanaReport.report("set_remote_stream_type", y, n.code, null == n ? void 0 : n.reason);
              });
            });
          }
        }, {
          key: "renewToken",
          value: function value(e, t, n) {
            var r = this;
            return new Promise(function (i, o) {
              r._checkWorker();
              var s = v.create().start();
              r.worker.renewToken(e).then(function (e) {
                setTimeout(function () {
                  a.default.info("client renew token success"), t && t(), i(), r.argusReport.reportRenewToken(r.channel, r.uid, !0, s.elapse(), null), r.grafanaReport.report("renew_token", f);
                }, 1);
              }).catch(function (e) {
                a.default.error("client renew token failed: ".concat((0, m.stringifyErr)(e))), n && n(e), o(e), r.argusReport.reportRenewToken(r.channel, r.uid, !1, s.elapse(), JSON.stringify(e)), r.grafanaReport.report("renew_token", y, e.code, null == e ? void 0 : e.reason);
              });
            });
          }
        }, {
          key: "muteLocal",
          value: function value(e, t, n) {
            var r = this;
            return new Promise(function (i, o) {
              if (r._checkWorker(), "video" !== e && "audio" !== e && "all" !== e) {
                var s = new Error('target should be "video", "audio" or "all"');
                return a.default.error("client muteLocal failed: ".concat(s.message)), n && n(s), void o(s);
              }
              var c = v.create().start();
              r.worker.muteLocal(e).then(function (n) {
                setTimeout(function () {
                  a.default.info("client muteLocal ".concat(e, " success")), t && t(), i(), r.argusReport.reportMuteLocal(r.channel, r.uid, !0, c.elapse(), null, r.targetMap[e], 1), r.grafanaReport.report("mute_local", f);
                }, 1);
              }).catch(function (t) {
                a.default.error("client muteLocal ".concat(e, " failed: ").concat((0, m.stringifyErr)(t))), n && n(t), o(t), r.argusReport.reportMuteLocal(r.channel, r.uid, !1, c.elapse(), JSON.stringify(t), r.targetMap[e], 1), r.grafanaReport.report("mute_local", y, t.code, null == t ? void 0 : t.reason);
              });
            });
          }
        }, {
          key: "unmuteLocal",
          value: function value(e, t, n) {
            var r = this;
            return new Promise(function (i, o) {
              if (r._checkWorker(), "video" !== e && "audio" !== e && "all" !== e) {
                var s = new Error('target should be "video", "audio" or "all"');
                return a.default.error("client unmuteLocal failed: ".concat(s.message)), n && n(s), void o(s);
              }
              var c = v.create().start();
              r.worker.unmuteLocal(e).then(function (n) {
                setTimeout(function () {
                  a.default.info("client unmuteLocal ".concat(e, " success")), t && t(), i(), r.argusReport.reportMuteLocal(r.channel, r.uid, !0, c.elapse(), null, r.targetMap[e], -1), r.grafanaReport.report("unmute_local", f);
                }, 1);
              }).catch(function (t) {
                a.default.error("client unmuteLocal ".concat(e, " failed: ").concat((0, m.stringifyErr)(t))), n && n(t), o(t), r.argusReport.reportMuteLocal(r.channel, r.uid, !1, c.elapse(), JSON.stringify(t), r.targetMap[e], -1), r.grafanaReport.report("unmute_local", y, t.code, null == t ? void 0 : t.reason);
              });
            });
          }
        }, {
          key: "leave",
          value: function value(t, n) {
            var r = this;
            return new Promise(function (o, s) {
              if (r.worker && r.worker.isWSConnected()) {
                var c = v.create().start();
                r.worker.leave().then(function () {
                  var n = (0, e.Z)(i().mark(function e(n) {
                    return i().wrap(function (e) {
                      for (;;) {
                        switch (e.prev = e.next) {
                          case 0:
                            return r.argusReport.reportLeave(r.channel, r.uid, !0, c.elapse()), r.grafanaReport.report("leave", f), e.next = 4, r.destroy();
                          case 4:
                            setTimeout(function () {
                              a.default.info("client leave success"), t && t(), o();
                            }, 1);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  }));
                  return function (e) {
                    return n.apply(this, arguments);
                  };
                }()).catch(function (e) {
                  a.default.error("client leave failed: ".concat((0, m.stringifyErr)(e))), n && n(e), s(e), r.argusReport.reportLeave(r.channel, r.uid, !1, c.elapse(), JSON.stringify(e)), r.grafanaReport.report("leave", y, e.code, null == e ? void 0 : e.reason);
                });
              } else a.default.info("client leave success without worker"), t && t(), o(), r._stopNetworkJudge(), r._resetData();
            });
          }
        }, {
          key: "isConnected",
          value: function value() {
            return !(!this.worker || !this.worker.isWSConnected());
          }
        }, {
          key: "updatePusherStateChange",
          value: function value(e) {
            if (this.pushUrl) {
              var t = e.detail.code,
                n = e.detail.message;
              a.default.info("client update pusher state, code:".concat(t, " message:").concat(n)), this.argusReport.reportPusherStateChange(this.channel, this.uid, t >= 1002, 0, this.pushUrl, t, {
                message: n
              }), 1002 === t ? this.grafanaReport.report("pusher_state_change", f, t, n) : -1307 === t && this.grafanaReport.report("pusher_state_change", y, t, n);
            }
          }
        }, {
          key: "updatePlayerStateChange",
          value: function value(e, t) {
            var n = this.playUrls.get(Number(e));
            if (n) {
              var r = t.detail.code,
                i = t.detail.message;
              if (a.default.info("client update player state, uid:".concat(e, " code:").concat(r, " message:").concat(i)), this.argusReport.reportPlayerStateChange(e, this.channel, this.uid, r >= 2002, 0, n, r, {
                message: i
              }), 2003 === r || -2301 === r) {
                var o = 2003 === r ? f : y;
                this.grafanaReport.report("player_state_change", o, r, i);
              }
            }
          }
        }, {
          key: "updatePusherNetStatus",
          value: function value(e) {
            if (this.pushUrl) {
              var t = e.detail.info;
              this.argusReport.setPusherNetData(t), ae(this.grafanaReport, 0, t);
            }
          }
        }, {
          key: "updatePlayerNetStatus",
          value: function value(e, t) {
            if (this.playUrls.get(Number(e))) {
              var n = t.detail.info;
              this.argusReport.setPlayerNetData(e, n), ce(this.grafanaReport, 1, n, e);
            }
          }
        }, {
          key: "send",
          value: function value(e, t, n) {
            var r = this;
            return new Promise(function (i, o) {
              r._checkWorker(), r.worker.send(e).then(function (e) {
                t && t(e), i(e);
              }).catch(function (e) {
                n && n(e), o(e);
              });
            });
          }
        }, {
          key: "updatePushUrl",
          value: function value(e, t) {
            var n = this;
            return new Promise(function (r, i) {
              n._checkWorker(), n.worker.updatePushUrl().then(function (t) {
                setTimeout(function () {
                  a.default.info("client updatePushUrl success"), e && e(t), r(t), n.grafanaReport.report("update_url", f);
                }, 1);
              }).catch(function (e) {
                a.default.error("client updatePushUrl failed: ".concat((0, m.stringifyErr)(e))), t && t(e), i(e), n.grafanaReport.report("update_url", y, e.code, null == e ? void 0 : e.reason);
              });
            });
          }
        }, {
          key: "destroy",
          value: function value(e, t) {
            var n = this;
            return new Promise(function (r, i) {
              n.worker ? n.worker.destroy().then(function () {
                n.pushUrl = null, n.playUrls.clear(), a.default.info("client destroy success"), e && e(), r();
              }).catch(function (e) {
                a.default.error("client destroy failed: ".concat((0, m.stringifyErr)(e))), t && t(e), i(e);
              }).finally(function () {
                n.worker = null, n._stopNetworkJudge(), n._resetData();
              }) : (n.pushUrl = null, n.playUrls.clear(), a.default.info("client destroy success without worker"), e && e(), r(), n._stopNetworkJudge(), n._resetData()), n.grafanaReport.destroy(), n.argusReport.destroy();
            });
          }
        }, {
          key: "startChannelMediaRelay",
          value: function value(e, t) {
            if (!(e instanceof I.ChannelMediaRelayConfiguration)) throw "Configration should be instance of [ChannelMediaRelayConfiguration]";
            var n = e.getSrcChannelMediaInfo(),
              r = e.getDestChannelMediaInfos();
            if ((0, m.isEmpty)(n)) throw "srcChannelMediaInfo should not be empty";
            if ((0, m.isEmpty)(r) || 0 === r.length) throw "destChannelMediaInfos should not be empty";
            if (a.default.info("[startChannelMediaRelay]: srcInfo: ", n, " destInfo: ", r), !(0, o.is32Uint)(n.uid)) throw "Invalid uid in srcChannelMediaInfo";
            if (!(0, m.isValidChannelName)(n.channelName)) throw "Invalid channelName in srcChannelMediaInfo";
            if (n.token && !(0, m.isValidToken)(n.token)) throw "Invalid token in srcChannelMediaInfo";
            if (r.forEach(function (e) {
              if (!(0, o.is32Uint)(e.uid)) throw "Invalid uid in destChannelMediaInfo";
              if (!(0, m.isValidChannelName)(e.channelName)) throw "Invalid channelName in destChannelMediaInfo";
              if (e.token && !(0, m.isValidToken)(e.token)) throw "Invalid token in destChannelMediaInfo";
            }), !this.worker) throw "startChannelMediaRelay should be used after join";
            this.worker.startChannelMediaRelay(e).then(function () {
              a.default.info("client startChannelMediaRelay success"), t && t();
            }).catch(function (e) {
              a.default.error("client startChannelMediaRelay failed: ".concat((0, m.stringifyErr)(e))), t && t(e);
            });
          }
        }, {
          key: "updateChannelMediaRelay",
          value: function value(e, t) {
            if (!(e instanceof I.ChannelMediaRelayConfiguration)) throw "Configration should be instance of [ChannelMediaRelayConfiguration]";
            var n = e.getSrcChannelMediaInfo(),
              r = e.getDestChannelMediaInfos();
            if ((0, m.isEmpty)(n)) throw "srcChannelMediaInfo should not be empty";
            if ((0, m.isEmpty)(r) || 0 === r.length) throw "destChannelMediaInfos should not be empty";
            if (a.default.info("[updateChannelMediaRelay]: srcInfo: ", n, " destInfo: ", r), !(0, o.is32Uint)(n.uid)) throw "Invalid uid in srcChannelMediaInfo";
            if (!(0, m.isValidChannelName)(n.channelName)) throw "Invalid channelName in srcChannelMediaInfo";
            if (n.token && !(0, m.isValidToken)(n.token)) throw "Invalid token in srcChannelMediaInfo";
            if (r.forEach(function (e) {
              if (!(0, o.is32Uint)(e.uid)) throw "Invalid uid in destChannelMediaInfo";
              if (!(0, m.isValidChannelName)(e.channelName)) throw "Invalid channelName in destChannelMediaInfo";
              if (e.token && !(0, m.isValidToken)(e.token)) throw "Invalid token in destChannelMediaInfo";
            }), !this.worker) throw "updateChannelMediaRelay should be used after join";
            this.worker.updateChannelMediaRelay(e).then(function () {
              a.default.info("client updateChannelMediaRelay success"), t && t();
            }).catch(function (e) {
              a.default.error("client updateChannelMediaRelay failed: ".concat((0, m.stringifyErr)(e))), t && t(e);
            });
          }
        }, {
          key: "stopChannelMediaRelay",
          value: function value(e) {
            a.default.info("[stopChannelMediaRelay]"), this.worker.stopChannelMediaRelay().then(function () {
              a.default.info("client stopChannelMediaRelay success"), e && e();
            }).catch(function (t) {
              a.default.error("client stopChannelMediaRelay failed: ".concat((0, m.stringifyErr)(t))), e && e(t);
            });
          }
        }, {
          key: "_checkUid",
          value: function value(e) {
            if (!e || "number" != typeof e || !(0, o.is32Uint)(e)) {
              var t = new Error("Invalid uid type");
              throw a.default.error("client ".concat(t.message)), t;
            }
          }
        }, {
          key: "_checkWorker",
          value: function value() {
            if (!this.worker || !this.worker.isWSConnected()) {
              var e = new Error("Disconnected from server");
              throw a.default.error("client ".concat(e.message)), e;
            }
          }
        }, {
          key: "_dealSid",
          value: function value() {
            this.sid || (this.sid = (0, o.generateSessionId)(), this.argusReport.sid = this.sid, a.default.setOptions({
              appId: this.appId,
              sid: this.sid
            }), a.default.info("client sid: ".concat(this.sid)));
          }
        }, {
          key: "_startNetworkJudge",
          value: function value() {
            this.networkJudge || (this.networkJudge = !0, a.default.info("client start network judge"), wx.onNetworkStatusChange(le), wx.onNetworkWeakChange(ue));
          }
        }, {
          key: "_stopNetworkJudge",
          value: function value() {
            this.networkJudge && (this.networkJudge = !1, a.default.info("client stop network judge"), wx.offNetworkStatusChange(le), wx.offNetworkWeakChange(ue));
          }
        }, {
          key: "_resetData",
          value: function value() {
            this.sid = "";
          }
        }]), r;
      }();
    }(), __webpack_exports__;
  }();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../../../HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/module.js */ 340)(module)))

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/packageB/common/vendor.js.map