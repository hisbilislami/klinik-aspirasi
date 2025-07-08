import {
  require_jsx_runtime
} from "/build/_shared/chunk-Z3EWOBPL.js";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-U4WKH6V6.js";
import {
  require_react_dom
} from "/build/_shared/chunk-56LDNGDG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-PMI65YMG.js";
import {
  createHotContext
} from "/build/_shared/chunk-BV6SDE2I.js";
import "/build/_shared/chunk-4JLKO6E3.js";
import {
  require_react
} from "/build/_shared/chunk-2Q7FBYOG.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment8 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal2 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment8;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal2;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values3, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values3, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement2, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data2) {
        this.message = message;
        this.data = data2 && typeof data2 === "object" ? data2 : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement2(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName2(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement2(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName2(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// empty-module:./utils/toast.server
var require_toast = __commonJS({
  "empty-module:./utils/toast.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:./utils/dialog.server
var require_dialog = __commonJS({
  "empty-module:./utils/dialog.server"(exports, module) {
    module.exports = {};
  }
});

// node_modules/.pnpm/@mantine+nprogress@8.1.2_@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@_mhzpnnolen4das47lkbohzylnq/node_modules/@mantine/nprogress/esm/NavigationProgress.mjs
var import_jsx_runtime63 = __toESM(require_jsx_runtime(), 1);
var import_react73 = __toESM(require_react(), 1);

// node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.23_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/Combination.js
var React7 = __toESM(require_react());

// node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.23_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/UI.js
var React3 = __toESM(require_react());

// node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.23_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.23_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.23_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react = __toESM(require_react());
function useCallbackRef(initialValue, callback) {
  var ref = (0, import_react.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.23_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var React = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.23_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data2) {
      var item = middleware(data2, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.23_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var React2 = __toESM(require_react());
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React2.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.23_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.23_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React3.forwardRef(function(props, parentRef) {
  var ref = React3.useRef(null);
  var _a = React3.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React3.createElement(
    React3.Fragment,
    null,
    enabled && React3.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noRelative, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React3.cloneElement(React3.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React3.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.23_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React6 = __toESM(require_react());

// node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.23_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React5 = __toESM(require_react());

// node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.23_react@18.3.1/node_modules/react-style-singleton/dist/es2015/hook.js
var React4 = __toESM(require_react());

// node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.23_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.23_react@18.3.1/node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React4.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.23_react@18.3.1/node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.23_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.23_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
  React5.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a) {
  var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = React5.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React5.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.23_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.23_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  if (!(node instanceof Element)) {
    return false;
  }
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
      if (scrollHeight > clientHeight) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    if (!target) {
      break;
    }
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    var parent_1 = target.parentNode;
    target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.23_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React6.useRef([]);
  var touchStartRef = React6.useRef([0, 0]);
  var activeAxis = React6.useRef();
  var id = React6.useState(idCounter++)[0];
  var Style2 = React6.useState(styleSingleton)[0];
  var lastProps = React6.useRef(props);
  React6.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React6.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React6.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React6.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React6.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React6.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React6.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React6.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React6.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React6.createElement(
    React6.Fragment,
    null,
    inert ? React6.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React6.createElement(RemoveScrollBar, { noRelative: props.noRelative, gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node) {
  var shadowParent = null;
  while (node !== null) {
    if (node instanceof ShadowRoot) {
      shadowParent = node.host;
      node = node.host;
    }
    node = node.parentNode;
  }
  return shadowParent;
}

// node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.23_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.23_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React7.forwardRef(function(props, ref) {
  return React7.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/utils/keys/keys.mjs
"use client";
function keys(object) {
  return Object.keys(object);
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/utils/deep-merge/deep-merge.mjs
function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
function deepMerge(target, source) {
  const result = { ...target };
  const _source = source;
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(_source[key])) {
        if (!(key in target)) {
          result[key] = _source[key];
        } else {
          result[key] = deepMerge(result[key], _source[key]);
        }
      } else {
        result[key] = _source[key];
      }
    });
  }
  return result;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/utils/camel-to-kebab-case/camel-to-kebab-case.mjs
"use client";
function camelToKebabCase(value) {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/utils/units-converters/px.mjs
function getTransformedScaledValue(value) {
  if (typeof value !== "string" || !value.includes("var(--mantine-scale)")) {
    return value;
  }
  return value.match(/^calc\((.*?)\)$/)?.[1].split("*")[0].trim();
}
function px(value) {
  const transformedValue = getTransformedScaledValue(value);
  if (typeof transformedValue === "number") {
    return transformedValue;
  }
  if (typeof transformedValue === "string") {
    if (transformedValue.includes("calc") || transformedValue.includes("var")) {
      return transformedValue;
    }
    if (transformedValue.includes("px")) {
      return Number(transformedValue.replace("px", ""));
    }
    if (transformedValue.includes("rem")) {
      return Number(transformedValue.replace("rem", "")) * 16;
    }
    if (transformedValue.includes("em")) {
      return Number(transformedValue.replace("em", "")) * 16;
    }
    return Number(transformedValue);
  }
  return NaN;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs
function scaleRem(remValue) {
  if (remValue === "0rem") {
    return "0rem";
  }
  return `calc(${remValue} * var(--mantine-scale))`;
}
function createConverter(units, { shouldScale = false } = {}) {
  function converter(value) {
    if (value === 0 || value === "0") {
      return `0${units}`;
    }
    if (typeof value === "number") {
      const val = `${value / 16}${units}`;
      return shouldScale ? scaleRem(val) : val;
    }
    if (typeof value === "string") {
      if (value === "") {
        return value;
      }
      if (value.startsWith("calc(") || value.startsWith("clamp(") || value.includes("rgba(")) {
        return value;
      }
      if (value.includes(",")) {
        return value.split(",").map((val) => converter(val)).join(",");
      }
      if (value.includes(" ")) {
        return value.split(" ").map((val) => converter(val)).join(" ");
      }
      const replaced = value.replace("px", "");
      if (!Number.isNaN(Number(replaced))) {
        const val = `${Number(replaced) / 16}${units}`;
        return shouldScale ? scaleRem(val) : val;
      }
    }
    return value;
  }
  return converter;
}
var rem = createConverter("rem", { shouldScale: true });
var em = createConverter("em");

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs
"use client";
function filterProps(props) {
  return Object.keys(props).reduce((acc, key) => {
    if (props[key] !== void 0) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs
"use client";
function isNumberLike(value) {
  if (typeof value === "number") {
    return true;
  }
  if (typeof value === "string") {
    if (value.startsWith("calc(") || value.startsWith("var(") || value.includes(" ") && value.trim() !== "") {
      return true;
    }
    const cssUnitsRegex = /^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;
    const values3 = value.trim().split(/\s+/);
    return values3.every((val) => cssUnitsRegex.test(val));
  }
  return false;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);
"use client";
function createSafeContext(errorMessage) {
  const Context = (0, import_react2.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0, import_react2.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, { value, children });
  return [Provider, useSafeContext];
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/utils/create-optional-context/create-optional-context.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react3 = __toESM(require_react(), 1);
"use client";
function createOptionalContext(initialValue = null) {
  const Context = (0, import_react3.createContext)(initialValue);
  const useOptionalContext = () => (0, import_react3.useContext)(Context);
  const Provider = ({ children, value }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Context.Provider, { value, children });
  return [Provider, useOptionalContext];
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs
"use client";
var elevations = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function getDefaultZIndex(level) {
  return elevations[level];
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs
"use client";
function getSize(size, prefix = "size", convertToRem = true) {
  if (size === void 0) {
    return void 0;
  }
  return isNumberLike(size) ? convertToRem ? rem(size) : size : `var(--${prefix}-${size})`;
}
function getRadius(size) {
  if (size === void 0) {
    return "var(--mantine-radius-default)";
  }
  return getSize(size, "mantine-radius");
}
function getFontSize(size) {
  return getSize(size, "mantine-font-size");
}

// node_modules/.pnpm/@mantine+hooks@8.1.2_react@18.3.1/node_modules/@mantine/hooks/esm/utils/clamp/clamp.mjs
"use client";
function clamp(value, min, max) {
  if (min === void 0 && max === void 0) {
    return value;
  }
  if (min !== void 0 && max === void 0) {
    return Math.max(value, min);
  }
  if (min === void 0 && max !== void 0) {
    return Math.min(value, max);
  }
  return Math.min(Math.max(value, min), max);
}

// node_modules/.pnpm/@mantine+hooks@8.1.2_react@18.3.1/node_modules/@mantine/hooks/esm/utils/random-id/random-id.mjs
"use client";
function randomId(prefix = "mantine-") {
  return `${prefix}${Math.random().toString(36).slice(2, 11)}`;
}

// node_modules/.pnpm/@mantine+hooks@8.1.2_react@18.3.1/node_modules/@mantine/hooks/esm/use-media-query/use-media-query.mjs
var import_react4 = __toESM(require_react(), 1);
"use client";
function attachMediaListener(query, callback) {
  try {
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
  } catch (e) {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
}
function getInitialValue(query, initialValue) {
  if (typeof window !== "undefined" && "matchMedia" in window) {
    return window.matchMedia(query).matches;
  }
  return false;
}
function useMediaQuery(query, initialValue, { getInitialValueInEffect } = {
  getInitialValueInEffect: true
}) {
  const [matches, setMatches] = (0, import_react4.useState)(
    getInitialValueInEffect ? initialValue : getInitialValue(query)
  );
  const queryRef = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    if ("matchMedia" in window) {
      queryRef.current = window.matchMedia(query);
      setMatches(queryRef.current.matches);
      return attachMediaListener(queryRef.current, (event) => setMatches(event.matches));
    }
    return void 0;
  }, [query]);
  return matches || false;
}

// node_modules/.pnpm/@mantine+hooks@8.1.2_react@18.3.1/node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs
var import_react5 = __toESM(require_react(), 1);
"use client";
var useIsomorphicEffect = typeof document !== "undefined" ? import_react5.useLayoutEffect : import_react5.useEffect;

// node_modules/.pnpm/@mantine+hooks@8.1.2_react@18.3.1/node_modules/@mantine/hooks/esm/use-did-update/use-did-update.mjs
var import_react6 = __toESM(require_react(), 1);
"use client";
function useDidUpdate(fn, dependencies) {
  const mounted = (0, import_react6.useRef)(false);
  (0, import_react6.useEffect)(
    () => () => {
      mounted.current = false;
    },
    []
  );
  (0, import_react6.useEffect)(() => {
    if (mounted.current) {
      return fn();
    }
    mounted.current = true;
    return void 0;
  }, dependencies);
}

// node_modules/.pnpm/@mantine+hooks@8.1.2_react@18.3.1/node_modules/@mantine/hooks/esm/use-force-update/use-force-update.mjs
var import_react7 = __toESM(require_react(), 1);
"use client";
var reducer = (value) => (value + 1) % 1e6;
function useForceUpdate() {
  const [, update] = (0, import_react7.useReducer)(reducer, 0);
  return update;
}

// node_modules/.pnpm/@mantine+hooks@8.1.2_react@18.3.1/node_modules/@mantine/hooks/esm/use-id/use-id.mjs
var import_react9 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+hooks@8.1.2_react@18.3.1/node_modules/@mantine/hooks/esm/use-id/use-react-id.mjs
var import_react8 = __toESM(require_react(), 1);
"use client";
var __useId = import_react8.default["useId".toString()] || (() => void 0);
function useReactId() {
  const id = __useId();
  return id ? `mantine-${id.replace(/:/g, "")}` : "";
}

// node_modules/.pnpm/@mantine+hooks@8.1.2_react@18.3.1/node_modules/@mantine/hooks/esm/use-id/use-id.mjs
"use client";
function useId(staticId) {
  const reactId = useReactId();
  const [uuid, setUuid] = (0, import_react9.useState)(reactId);
  useIsomorphicEffect(() => {
    setUuid(randomId());
  }, []);
  if (typeof staticId === "string") {
    return staticId;
  }
  if (typeof window === "undefined") {
    return reactId;
  }
  return uuid;
}

// node_modules/.pnpm/@mantine+hooks@8.1.2_react@18.3.1/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs
var import_react10 = __toESM(require_react(), 1);
"use client";
function assignRef2(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (typeof ref === "object" && ref !== null && "current" in ref) {
    ref.current = value;
  }
}

// node_modules/.pnpm/@mantine+hooks@8.1.2_react@18.3.1/node_modules/@mantine/hooks/esm/use-reduced-motion/use-reduced-motion.mjs
"use client";
function useReducedMotion(initialValue, options) {
  return useMediaQuery("(prefers-reduced-motion: reduce)", initialValue, options);
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
"use client";
function createVarsResolver(resolver) {
  return resolver;
}

// node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else
      for (f in e)
        e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++)
    (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs
"use client";
var EMPTY_CLASS_NAMES = {};
function mergeClassNames(objects) {
  const merged = {};
  objects.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (merged[key]) {
        merged[key] = clsx_default(merged[key], value);
      } else {
        merged[key] = value;
      }
    });
  });
  return merged;
}
function resolveClassNames({ theme: theme2, classNames, props, stylesCtx }) {
  const arrayClassNames = Array.isArray(classNames) ? classNames : [classNames];
  const resolvedClassNames = arrayClassNames.map(
    (item) => typeof item === "function" ? item(theme2, props, stylesCtx) : item || EMPTY_CLASS_NAMES
  );
  return mergeClassNames(resolvedClassNames);
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs
"use client";
function resolveStyles({ theme: theme2, styles, props, stylesCtx }) {
  const arrayStyles = Array.isArray(styles) ? styles : [styles];
  return arrayStyles.reduce((acc, style) => {
    if (typeof style === "function") {
      return { ...acc, ...style(theme2, props, stylesCtx) };
    }
    return { ...acc, ...style };
  }, {});
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-resolved-styles-api/use-resolved-styles-api.mjs
var import_react24 = __toESM(require_react(), 1);
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs
var import_react11 = __toESM(require_react(), 1);
"use client";
var MantineContext = (0, import_react11.createContext)(null);
function useMantineContext() {
  const ctx = (0, import_react11.useContext)(MantineContext);
  if (!ctx) {
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  }
  return ctx;
}
function useMantineCssVariablesResolver() {
  return useMantineContext().cssVariablesResolver;
}
function useMantineClassNamesPrefix() {
  return useMantineContext().classNamesPrefix;
}
function useMantineStyleNonce() {
  return useMantineContext().getStyleNonce;
}
function useMantineWithStaticClasses() {
  return useMantineContext().withStaticClasses;
}
function useMantineIsHeadless() {
  return useMantineContext().headless;
}
function useMantineSxTransform() {
  return useMantineContext().stylesTransform?.sx;
}
function useMantineStylesTransform() {
  return useMantineContext().stylesTransform?.styles;
}
function useMantineEnv() {
  return useMantineContext().env || "default";
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs
var import_react13 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/default-variant-colors-resolver/default-variant-colors-resolver.mjs
var import_react12 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs
function isHexColor(hex) {
  const HEX_REGEXP = /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i;
  return HEX_REGEXP.test(hex);
}
function hexToRgba(color) {
  let hexString = color.replace("#", "");
  if (hexString.length === 3) {
    const shorthandHex = hexString.split("");
    hexString = [
      shorthandHex[0],
      shorthandHex[0],
      shorthandHex[1],
      shorthandHex[1],
      shorthandHex[2],
      shorthandHex[2]
    ].join("");
  }
  if (hexString.length === 8) {
    const alpha2 = parseInt(hexString.slice(6, 8), 16) / 255;
    return {
      r: parseInt(hexString.slice(0, 2), 16),
      g: parseInt(hexString.slice(2, 4), 16),
      b: parseInt(hexString.slice(4, 6), 16),
      a: alpha2
    };
  }
  const parsed = parseInt(hexString, 16);
  const r2 = parsed >> 16 & 255;
  const g = parsed >> 8 & 255;
  const b = parsed & 255;
  return {
    r: r2,
    g,
    b,
    a: 1
  };
}
function rgbStringToRgba(color) {
  const [r2, g, b, a] = color.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return { r: r2, g, b, a: a === void 0 ? 1 : a };
}
function hslStringToRgba(hslaString) {
  const hslaRegex = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i;
  const matches = hslaString.match(hslaRegex);
  if (!matches) {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  }
  const h = parseInt(matches[1], 10);
  const s = parseInt(matches[2], 10) / 100;
  const l = parseInt(matches[3], 10) / 100;
  const a = matches[5] ? parseFloat(matches[5]) : void 0;
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const huePrime = h / 60;
  const x = chroma * (1 - Math.abs(huePrime % 2 - 1));
  const m = l - chroma / 2;
  let r2;
  let g;
  let b;
  if (huePrime >= 0 && huePrime < 1) {
    r2 = chroma;
    g = x;
    b = 0;
  } else if (huePrime >= 1 && huePrime < 2) {
    r2 = x;
    g = chroma;
    b = 0;
  } else if (huePrime >= 2 && huePrime < 3) {
    r2 = 0;
    g = chroma;
    b = x;
  } else if (huePrime >= 3 && huePrime < 4) {
    r2 = 0;
    g = x;
    b = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    r2 = x;
    g = 0;
    b = chroma;
  } else {
    r2 = chroma;
    g = 0;
    b = x;
  }
  return {
    r: Math.round((r2 + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
    a: a || 1
  };
}
function toRgba(color) {
  if (isHexColor(color)) {
    return hexToRgba(color);
  }
  if (color.startsWith("rgb")) {
    return rgbStringToRgba(color);
  }
  if (color.startsWith("hsl")) {
    return hslStringToRgba(color);
  }
  return {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/darken/darken.mjs
function darken(color, alpha2) {
  if (color.startsWith("var(")) {
    return `color-mix(in srgb, ${color}, black ${alpha2 * 100}%)`;
  }
  const { r: r2, g, b, a } = toRgba(color);
  const f = 1 - alpha2;
  const dark = (input) => Math.round(input * f);
  return `rgba(${dark(r2)}, ${dark(g)}, ${dark(b)}, ${a})`;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs
"use client";
function getPrimaryShade(theme2, colorScheme) {
  if (typeof theme2.primaryShade === "number") {
    return theme2.primaryShade;
  }
  if (colorScheme === "dark") {
    return theme2.primaryShade.dark;
  }
  return theme2.primaryShade.light;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/luminance/luminance.mjs
function gammaCorrect(c) {
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}
function getLightnessFromOklch(oklchColor) {
  const match = oklchColor.match(/oklch\((.*?)%\s/);
  return match ? parseFloat(match[1]) : null;
}
function luminance(color) {
  if (color.startsWith("oklch(")) {
    return (getLightnessFromOklch(color) || 0) / 100;
  }
  const { r: r2, g, b } = toRgba(color);
  const sR = r2 / 255;
  const sG = g / 255;
  const sB = b / 255;
  const rLinear = gammaCorrect(sR);
  const gLinear = gammaCorrect(sG);
  const bLinear = gammaCorrect(sB);
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}
function isLightColor(color, luminanceThreshold = 0.179) {
  if (color.startsWith("var(")) {
    return false;
  }
  return luminance(color) > luminanceThreshold;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs
"use client";
function parseThemeColor({
  color,
  theme: theme2,
  colorScheme
}) {
  if (typeof color !== "string") {
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof color}`
    );
  }
  if (color === "bright") {
    return {
      color,
      value: colorScheme === "dark" ? theme2.white : theme2.black,
      shade: void 0,
      isThemeColor: false,
      isLight: isLightColor(
        colorScheme === "dark" ? theme2.white : theme2.black,
        theme2.luminanceThreshold
      ),
      variable: "--mantine-color-bright"
    };
  }
  if (color === "dimmed") {
    return {
      color,
      value: colorScheme === "dark" ? theme2.colors.dark[2] : theme2.colors.gray[7],
      shade: void 0,
      isThemeColor: false,
      isLight: isLightColor(
        colorScheme === "dark" ? theme2.colors.dark[2] : theme2.colors.gray[6],
        theme2.luminanceThreshold
      ),
      variable: "--mantine-color-dimmed"
    };
  }
  if (color === "white" || color === "black") {
    return {
      color,
      value: color === "white" ? theme2.white : theme2.black,
      shade: void 0,
      isThemeColor: false,
      isLight: isLightColor(
        color === "white" ? theme2.white : theme2.black,
        theme2.luminanceThreshold
      ),
      variable: `--mantine-color-${color}`
    };
  }
  const [_color, shade] = color.split(".");
  const colorShade = shade ? Number(shade) : void 0;
  const isThemeColor = _color in theme2.colors;
  if (isThemeColor) {
    const colorValue = colorShade !== void 0 ? theme2.colors[_color][colorShade] : theme2.colors[_color][getPrimaryShade(theme2, colorScheme || "light")];
    return {
      color: _color,
      value: colorValue,
      shade: colorShade,
      isThemeColor,
      isLight: isLightColor(colorValue, theme2.luminanceThreshold),
      variable: shade ? `--mantine-color-${_color}-${colorShade}` : `--mantine-color-${_color}-filled`
    };
  }
  return {
    color,
    value: color,
    isThemeColor,
    isLight: isLightColor(color, theme2.luminanceThreshold),
    shade: colorShade,
    variable: void 0
  };
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs
"use client";
function getThemeColor(color, theme2) {
  const parsed = parseThemeColor({ color: color || theme2.primaryColor, theme: theme2 });
  return parsed.variable ? `var(${parsed.variable})` : color;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-gradient/get-gradient.mjs
"use client";
function getGradient(gradient, theme2) {
  const merged = {
    from: gradient?.from || theme2.defaultGradient.from,
    to: gradient?.to || theme2.defaultGradient.to,
    deg: gradient?.deg ?? theme2.defaultGradient.deg ?? 0
  };
  const fromColor = getThemeColor(merged.from, theme2);
  const toColor = getThemeColor(merged.to, theme2);
  return `linear-gradient(${merged.deg}deg, ${fromColor} 0%, ${toColor} 100%)`;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/rgba/rgba.mjs
function rgba(color, alpha2) {
  if (typeof color !== "string" || alpha2 > 1 || alpha2 < 0) {
    return "rgba(0, 0, 0, 1)";
  }
  if (color.startsWith("var(")) {
    const mixPercentage = (1 - alpha2) * 100;
    return `color-mix(in srgb, ${color}, transparent ${mixPercentage}%)`;
  }
  if (color.startsWith("oklch")) {
    if (color.includes("/")) {
      return color.replace(/\/\s*[\d.]+\s*\)/, `/ ${alpha2})`);
    }
    return color.replace(")", ` / ${alpha2})`);
  }
  const { r: r2, g, b } = toRgba(color);
  return `rgba(${r2}, ${g}, ${b}, ${alpha2})`;
}
var alpha = rgba;

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/default-variant-colors-resolver/default-variant-colors-resolver.mjs
"use client";
var defaultVariantColorsResolver = ({
  color,
  theme: theme2,
  variant,
  gradient,
  autoContrast
}) => {
  const parsed = parseThemeColor({ color, theme: theme2 });
  const _autoContrast = typeof autoContrast === "boolean" ? autoContrast : theme2.autoContrast;
  if (variant === "none") {
    return {
      background: "transparent",
      hover: "transparent",
      color: "inherit",
      border: "none"
    };
  }
  if (variant === "filled") {
    const textColor = _autoContrast ? parsed.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)" : "var(--mantine-color-white)";
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: `var(--mantine-color-${color}-filled)`,
          hover: `var(--mantine-color-${color}-filled-hover)`,
          color: textColor,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        hover: `var(--mantine-color-${parsed.color}-${parsed.shade === 9 ? 8 : parsed.shade + 1})`,
        color: textColor,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: color,
      hover: darken(color, 0.1),
      color: textColor,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "light") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: `var(--mantine-color-${color}-light)`,
          hover: `var(--mantine-color-${color}-light-hover)`,
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      const parsedColor = theme2.colors[parsed.color][parsed.shade];
      return {
        background: rgba(parsedColor, 0.1),
        hover: rgba(parsedColor, 0.12),
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: rgba(color, 0.1),
      hover: rgba(color, 0.12),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "outline") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: `var(--mantine-color-${color}-outline-hover)`,
          color: `var(--mantine-color-${color}-outline)`,
          border: `${rem(1)} solid var(--mantine-color-${color}-outline)`
        };
      }
      return {
        background: "transparent",
        hover: rgba(theme2.colors[parsed.color][parsed.shade], 0.05),
        color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        border: `${rem(1)} solid var(--mantine-color-${parsed.color}-${parsed.shade})`
      };
    }
    return {
      background: "transparent",
      hover: rgba(color, 0.05),
      color,
      border: `${rem(1)} solid ${color}`
    };
  }
  if (variant === "subtle") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: `var(--mantine-color-${color}-light-hover)`,
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      const parsedColor = theme2.colors[parsed.color][parsed.shade];
      return {
        background: "transparent",
        hover: rgba(parsedColor, 0.12),
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: rgba(color, 0.12),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "transparent") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: "transparent",
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: "transparent",
        hover: "transparent",
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: "transparent",
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "white") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "var(--mantine-color-white)",
          hover: darken(theme2.white, 0.01),
          color: `var(--mantine-color-${color}-filled)`,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: "var(--mantine-color-white)",
        hover: darken(theme2.white, 0.01),
        color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "var(--mantine-color-white)",
      hover: darken(theme2.white, 0.01),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "gradient") {
    return {
      background: getGradient(gradient, theme2),
      hover: getGradient(gradient, theme2),
      color: "var(--mantine-color-white)",
      border: "none"
    };
  }
  if (variant === "default") {
    return {
      background: "var(--mantine-color-default)",
      hover: "var(--mantine-color-default-hover)",
      color: "var(--mantine-color-default-color)",
      border: `${rem(1)} solid var(--mantine-color-default-border)`
    };
  }
  return {};
};

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/default-colors.mjs
var DEFAULT_COLORS = {
  dark: [
    "#C9C9C9",
    "#b8b8b8",
    "#828282",
    "#696969",
    "#424242",
    "#3b3b3b",
    "#2e2e2e",
    "#242424",
    "#1f1f1f",
    "#141414"
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529"
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a"
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d"
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c"
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7"
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab"
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285"
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b"
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e"
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d"
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700"
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f"
  ]
};

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs
var DEFAULT_FONT_FAMILY = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji";
var DEFAULT_THEME = {
  scale: 1,
  fontSmoothing: true,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: DEFAULT_COLORS,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: defaultVariantColorsResolver,
  autoContrast: false,
  luminanceThreshold: 0.3,
  fontFamily: DEFAULT_FONT_FAMILY,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: false,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontWeight: "700",
    textWrap: "wrap",
    sizes: {
      h1: { fontSize: rem(34), lineHeight: "1.3" },
      h2: { fontSize: rem(26), lineHeight: "1.35" },
      h3: { fontSize: rem(22), lineHeight: "1.4" },
      h4: { fontSize: rem(18), lineHeight: "1.45" },
      h5: { fontSize: rem(16), lineHeight: "1.5" },
      h6: { fontSize: rem(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: rem(2),
    sm: rem(4),
    md: rem(8),
    lg: rem(16),
    xl: rem(32)
  },
  spacing: {
    xs: rem(10),
    sm: rem(12),
    md: rem(16),
    lg: rem(20),
    xl: rem(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), 0 ${rem(1)} ${rem(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(10)} ${rem(
      15
    )} ${rem(-5)}, rgba(0, 0, 0, 0.04) 0 ${rem(7)} ${rem(7)} ${rem(-5)}`,
    md: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(20)} ${rem(
      25
    )} ${rem(-5)}, rgba(0, 0, 0, 0.04) 0 ${rem(10)} ${rem(10)} ${rem(-5)}`,
    lg: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(28)} ${rem(
      23
    )} ${rem(-7)}, rgba(0, 0, 0, 0.04) 0 ${rem(12)} ${rem(12)} ${rem(-7)}`,
    xl: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(36)} ${rem(
      28
    )} ${rem(-7)}, rgba(0, 0, 0, 0.04) 0 ${rem(17)} ${rem(17)} ${rem(-7)}`
  },
  other: {},
  components: {}
};

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/color-scheme-managers/is-mantine-color-scheme.mjs
"use client";
function isMantineColorScheme(value) {
  return value === "auto" || value === "dark" || value === "light";
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/color-scheme-managers/local-storage-manager.mjs
"use client";
function localStorageColorSchemeManager({
  key = "mantine-color-scheme-value"
} = {}) {
  let handleStorageEvent;
  return {
    get: (defaultValue) => {
      if (typeof window === "undefined") {
        return defaultValue;
      }
      try {
        const storedColorScheme = window.localStorage.getItem(key);
        return isMantineColorScheme(storedColorScheme) ? storedColorScheme : defaultValue;
      } catch {
        return defaultValue;
      }
    },
    set: (value) => {
      try {
        window.localStorage.setItem(key, value);
      } catch (error) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          error
        );
      }
    },
    subscribe: (onUpdate) => {
      handleStorageEvent = (event) => {
        if (event.storageArea === window.localStorage && event.key === key) {
          isMantineColorScheme(event.newValue) && onUpdate(event.newValue);
        }
      };
      window.addEventListener("storage", handleStorageEvent);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", handleStorageEvent);
    },
    clear: () => {
      window.localStorage.removeItem(key);
    }
  };
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/MantineClasses/MantineClasses.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var import_react16 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var import_react15 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/merge-mantine-theme/merge-mantine-theme.mjs
var import_react14 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var INVALID_PRIMARY_COLOR_ERROR = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more \u2013 https://mantine.dev/theming/colors/#primary-color";
var INVALID_PRIMARY_SHADE_ERROR = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function isValidPrimaryShade(shade) {
  if (shade < 0 || shade > 9) {
    return false;
  }
  return parseInt(shade.toString(), 10) === shade;
}
function validateMantineTheme(theme2) {
  if (!(theme2.primaryColor in theme2.colors)) {
    throw new Error(INVALID_PRIMARY_COLOR_ERROR);
  }
  if (typeof theme2.primaryShade === "object") {
    if (!isValidPrimaryShade(theme2.primaryShade.dark) || !isValidPrimaryShade(theme2.primaryShade.light)) {
      throw new Error(INVALID_PRIMARY_SHADE_ERROR);
    }
  }
  if (typeof theme2.primaryShade === "number" && !isValidPrimaryShade(theme2.primaryShade)) {
    throw new Error(INVALID_PRIMARY_SHADE_ERROR);
  }
}
function mergeMantineTheme(currentTheme, themeOverride) {
  if (!themeOverride) {
    validateMantineTheme(currentTheme);
    return currentTheme;
  }
  const result = deepMerge(currentTheme, themeOverride);
  if (themeOverride.fontFamily && !themeOverride.headings?.fontFamily) {
    result.headings.fontFamily = themeOverride.fontFamily;
  }
  validateMantineTheme(result);
  return result;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs
"use client";
var MantineThemeContext = (0, import_react15.createContext)(null);
var useSafeMantineTheme = () => (0, import_react15.useContext)(MantineThemeContext) || DEFAULT_THEME;
function useMantineTheme() {
  const ctx = (0, import_react15.useContext)(MantineThemeContext);
  if (!ctx) {
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  }
  return ctx;
}
function MantineThemeProvider({
  theme: theme2,
  children,
  inherit = true
}) {
  const parentTheme = useSafeMantineTheme();
  const mergedTheme = (0, import_react15.useMemo)(
    () => mergeMantineTheme(inherit ? parentTheme : DEFAULT_THEME, theme2),
    [theme2, parentTheme, inherit]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(MantineThemeContext.Provider, { value: mergedTheme, children });
}
MantineThemeProvider.displayName = "@mantine/core/MantineThemeProvider";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/MantineClasses/MantineClasses.mjs
"use client";
function MantineClasses() {
  const theme2 = useMantineTheme();
  const nonce = useMantineStyleNonce();
  const classes10 = keys(theme2.breakpoints).reduce((acc, breakpoint) => {
    const isPxBreakpoint = theme2.breakpoints[breakpoint].includes("px");
    const pxValue = px(theme2.breakpoints[breakpoint]);
    const maxWidthBreakpoint = isPxBreakpoint ? `${pxValue - 0.1}px` : em(pxValue - 0.1);
    const minWidthBreakpoint = isPxBreakpoint ? `${pxValue}px` : em(pxValue);
    return `${acc}@media (max-width: ${maxWidthBreakpoint}) {.mantine-visible-from-${breakpoint} {display: none !important;}}@media (min-width: ${minWidthBreakpoint}) {.mantine-hidden-from-${breakpoint} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: nonce?.(),
      dangerouslySetInnerHTML: { __html: classes10 }
    }
  );
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/MantineCssVariables.mjs
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/css-variables-object-to-string.mjs
"use client";
function cssVariablesObjectToString(variables) {
  return Object.entries(variables).map(([name, value]) => `${name}: ${value};`).join("");
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/wrap-with-selector.mjs
"use client";
function wrapWithSelector(selectors, code) {
  const _selectors = Array.isArray(selectors) ? selectors : [selectors];
  return _selectors.reduce((acc, selector) => `${selector}{${acc}}`, code);
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/convert-css-variables.mjs
"use client";
function convertCssVariables(input, selector) {
  const sharedVariables = cssVariablesObjectToString(input.variables);
  const shared = sharedVariables ? wrapWithSelector(selector, sharedVariables) : "";
  const dark = cssVariablesObjectToString(input.dark);
  const light = cssVariablesObjectToString(input.light);
  const darkForced = dark ? selector === ":host" ? wrapWithSelector(`${selector}([data-mantine-color-scheme="dark"])`, dark) : wrapWithSelector(`${selector}[data-mantine-color-scheme="dark"]`, dark) : "";
  const lightForced = light ? selector === ":host" ? wrapWithSelector(`${selector}([data-mantine-color-scheme="light"])`, light) : wrapWithSelector(`${selector}[data-mantine-color-scheme="light"]`, light) : "";
  return `${shared}${darkForced}${lightForced}`;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-merged-variables.mjs
var import_react20 = __toESM(require_react(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/default-css-variables-resolver.mjs
var import_react19 = __toESM(require_react(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-contrast-color/get-contrast-color.mjs
"use client";
function getContrastColor({ color, theme: theme2, autoContrast }) {
  const _autoContrast = typeof autoContrast === "boolean" ? autoContrast : theme2.autoContrast;
  if (!_autoContrast) {
    return "var(--mantine-color-white)";
  }
  const parsed = parseThemeColor({ color: color || theme2.primaryColor, theme: theme2 });
  return parsed.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function getPrimaryContrastColor(theme2, colorScheme) {
  return getContrastColor({
    color: theme2.colors[theme2.primaryColor][getPrimaryShade(theme2, colorScheme)],
    theme: theme2,
    autoContrast: null
  });
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-css-color-variables.mjs
var import_react17 = __toESM(require_react(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
"use client";
function getCSSColorVariables({
  theme: theme2,
  color,
  colorScheme,
  name = color,
  withColorValues = true
}) {
  if (!theme2.colors[color]) {
    return {};
  }
  if (colorScheme === "light") {
    const primaryShade2 = getPrimaryShade(theme2, "light");
    const dynamicVariables2 = {
      [`--mantine-color-${name}-text`]: `var(--mantine-color-${name}-filled)`,
      [`--mantine-color-${name}-filled`]: `var(--mantine-color-${name}-${primaryShade2})`,
      [`--mantine-color-${name}-filled-hover`]: `var(--mantine-color-${name}-${primaryShade2 === 9 ? 8 : primaryShade2 + 1})`,
      [`--mantine-color-${name}-light`]: alpha(theme2.colors[color][primaryShade2], 0.1),
      [`--mantine-color-${name}-light-hover`]: alpha(theme2.colors[color][primaryShade2], 0.12),
      [`--mantine-color-${name}-light-color`]: `var(--mantine-color-${name}-${primaryShade2})`,
      [`--mantine-color-${name}-outline`]: `var(--mantine-color-${name}-${primaryShade2})`,
      [`--mantine-color-${name}-outline-hover`]: alpha(theme2.colors[color][primaryShade2], 0.05)
    };
    if (!withColorValues) {
      return dynamicVariables2;
    }
    return {
      [`--mantine-color-${name}-0`]: theme2.colors[color][0],
      [`--mantine-color-${name}-1`]: theme2.colors[color][1],
      [`--mantine-color-${name}-2`]: theme2.colors[color][2],
      [`--mantine-color-${name}-3`]: theme2.colors[color][3],
      [`--mantine-color-${name}-4`]: theme2.colors[color][4],
      [`--mantine-color-${name}-5`]: theme2.colors[color][5],
      [`--mantine-color-${name}-6`]: theme2.colors[color][6],
      [`--mantine-color-${name}-7`]: theme2.colors[color][7],
      [`--mantine-color-${name}-8`]: theme2.colors[color][8],
      [`--mantine-color-${name}-9`]: theme2.colors[color][9],
      ...dynamicVariables2
    };
  }
  const primaryShade = getPrimaryShade(theme2, "dark");
  const dynamicVariables = {
    [`--mantine-color-${name}-text`]: `var(--mantine-color-${name}-4)`,
    [`--mantine-color-${name}-filled`]: `var(--mantine-color-${name}-${primaryShade})`,
    [`--mantine-color-${name}-filled-hover`]: `var(--mantine-color-${name}-${primaryShade === 9 ? 8 : primaryShade + 1})`,
    [`--mantine-color-${name}-light`]: alpha(
      theme2.colors[color][Math.max(0, primaryShade - 2)],
      0.15
    ),
    [`--mantine-color-${name}-light-hover`]: alpha(
      theme2.colors[color][Math.max(0, primaryShade - 2)],
      0.2
    ),
    [`--mantine-color-${name}-light-color`]: `var(--mantine-color-${name}-${Math.max(primaryShade - 5, 0)})`,
    [`--mantine-color-${name}-outline`]: `var(--mantine-color-${name}-${Math.max(primaryShade - 4, 0)})`,
    [`--mantine-color-${name}-outline-hover`]: alpha(
      theme2.colors[color][Math.max(primaryShade - 4, 0)],
      0.05
    )
  };
  if (!withColorValues) {
    return dynamicVariables;
  }
  return {
    [`--mantine-color-${name}-0`]: theme2.colors[color][0],
    [`--mantine-color-${name}-1`]: theme2.colors[color][1],
    [`--mantine-color-${name}-2`]: theme2.colors[color][2],
    [`--mantine-color-${name}-3`]: theme2.colors[color][3],
    [`--mantine-color-${name}-4`]: theme2.colors[color][4],
    [`--mantine-color-${name}-5`]: theme2.colors[color][5],
    [`--mantine-color-${name}-6`]: theme2.colors[color][6],
    [`--mantine-color-${name}-7`]: theme2.colors[color][7],
    [`--mantine-color-${name}-8`]: theme2.colors[color][8],
    [`--mantine-color-${name}-9`]: theme2.colors[color][9],
    ...dynamicVariables
  };
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/virtual-color/virtual-color.mjs
var import_react18 = __toESM(require_react(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
function isVirtualColor(value) {
  return !!value && typeof value === "object" && "mantine-virtual-color" in value;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/default-css-variables-resolver.mjs
"use client";
function assignSizeVariables(variables, sizes, name) {
  keys(sizes).forEach(
    (size) => Object.assign(variables, { [`--mantine-${name}-${size}`]: sizes[size] })
  );
}
var defaultCssVariablesResolver = (theme2) => {
  const lightPrimaryShade = getPrimaryShade(theme2, "light");
  const defaultRadius = theme2.defaultRadius in theme2.radius ? theme2.radius[theme2.defaultRadius] : rem(theme2.defaultRadius);
  const result = {
    variables: {
      "--mantine-scale": theme2.scale.toString(),
      "--mantine-cursor-type": theme2.cursorType,
      "--mantine-color-scheme": "light dark",
      "--mantine-webkit-font-smoothing": theme2.fontSmoothing ? "antialiased" : "unset",
      "--mantine-moz-font-smoothing": theme2.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": theme2.white,
      "--mantine-color-black": theme2.black,
      "--mantine-line-height": theme2.lineHeights.md,
      "--mantine-font-family": theme2.fontFamily,
      "--mantine-font-family-monospace": theme2.fontFamilyMonospace,
      "--mantine-font-family-headings": theme2.headings.fontFamily,
      "--mantine-heading-font-weight": theme2.headings.fontWeight,
      "--mantine-heading-text-wrap": theme2.headings.textWrap,
      "--mantine-radius-default": defaultRadius,
      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${theme2.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${theme2.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${theme2.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${theme2.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${theme2.primaryColor}-light-color)`
    },
    light: {
      "--mantine-primary-color-contrast": getPrimaryContrastColor(theme2, "light"),
      "--mantine-color-bright": "var(--mantine-color-black)",
      "--mantine-color-text": theme2.black,
      "--mantine-color-body": theme2.white,
      "--mantine-color-error": "var(--mantine-color-red-6)",
      "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
      "--mantine-color-anchor": `var(--mantine-color-${theme2.primaryColor}-${lightPrimaryShade})`,
      "--mantine-color-default": "var(--mantine-color-white)",
      "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
      "--mantine-color-default-color": "var(--mantine-color-black)",
      "--mantine-color-default-border": "var(--mantine-color-gray-4)",
      "--mantine-color-dimmed": "var(--mantine-color-gray-6)",
      "--mantine-color-disabled": "var(--mantine-color-gray-2)",
      "--mantine-color-disabled-color": "var(--mantine-color-gray-5)",
      "--mantine-color-disabled-border": "var(--mantine-color-gray-3)"
    },
    dark: {
      "--mantine-primary-color-contrast": getPrimaryContrastColor(theme2, "dark"),
      "--mantine-color-bright": "var(--mantine-color-white)",
      "--mantine-color-text": "var(--mantine-color-dark-0)",
      "--mantine-color-body": "var(--mantine-color-dark-7)",
      "--mantine-color-error": "var(--mantine-color-red-8)",
      "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
      "--mantine-color-anchor": `var(--mantine-color-${theme2.primaryColor}-4)`,
      "--mantine-color-default": "var(--mantine-color-dark-6)",
      "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
      "--mantine-color-default-color": "var(--mantine-color-white)",
      "--mantine-color-default-border": "var(--mantine-color-dark-4)",
      "--mantine-color-dimmed": "var(--mantine-color-dark-2)",
      "--mantine-color-disabled": "var(--mantine-color-dark-6)",
      "--mantine-color-disabled-color": "var(--mantine-color-dark-3)",
      "--mantine-color-disabled-border": "var(--mantine-color-gray-6)"
    }
  };
  assignSizeVariables(result.variables, theme2.breakpoints, "breakpoint");
  assignSizeVariables(result.variables, theme2.spacing, "spacing");
  assignSizeVariables(result.variables, theme2.fontSizes, "font-size");
  assignSizeVariables(result.variables, theme2.lineHeights, "line-height");
  assignSizeVariables(result.variables, theme2.shadows, "shadow");
  assignSizeVariables(result.variables, theme2.radius, "radius");
  theme2.colors[theme2.primaryColor].forEach((_, index) => {
    result.variables[`--mantine-primary-color-${index}`] = `var(--mantine-color-${theme2.primaryColor}-${index})`;
  });
  keys(theme2.colors).forEach((color) => {
    const value = theme2.colors[color];
    if (isVirtualColor(value)) {
      Object.assign(
        result.light,
        getCSSColorVariables({
          theme: theme2,
          name: value.name,
          color: value.light,
          colorScheme: "light",
          withColorValues: true
        })
      );
      Object.assign(
        result.dark,
        getCSSColorVariables({
          theme: theme2,
          name: value.name,
          color: value.dark,
          colorScheme: "dark",
          withColorValues: true
        })
      );
      return;
    }
    value.forEach((shade, index) => {
      result.variables[`--mantine-color-${color}-${index}`] = shade;
    });
    Object.assign(
      result.light,
      getCSSColorVariables({
        theme: theme2,
        color,
        colorScheme: "light",
        withColorValues: false
      })
    );
    Object.assign(
      result.dark,
      getCSSColorVariables({
        theme: theme2,
        color,
        colorScheme: "dark",
        withColorValues: false
      })
    );
  });
  const headings3 = theme2.headings.sizes;
  keys(headings3).forEach((heading) => {
    result.variables[`--mantine-${heading}-font-size`] = headings3[heading].fontSize;
    result.variables[`--mantine-${heading}-line-height`] = headings3[heading].lineHeight;
    result.variables[`--mantine-${heading}-font-weight`] = headings3[heading].fontWeight || theme2.headings.fontWeight;
  });
  return result;
};

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-merged-variables.mjs
"use client";
function getMergedVariables({ theme: theme2, generator }) {
  const defaultResolver = defaultCssVariablesResolver(theme2);
  const providerGenerator = generator?.(theme2);
  return providerGenerator ? deepMerge(defaultResolver, providerGenerator) : defaultResolver;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/remove-default-variables.mjs
var import_react21 = __toESM(require_react(), 1);
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
"use client";
var defaultCssVariables = defaultCssVariablesResolver(DEFAULT_THEME);
function removeDefaultVariables(input) {
  const cleaned = {
    variables: {},
    light: {},
    dark: {}
  };
  keys(input.variables).forEach((key) => {
    if (defaultCssVariables.variables[key] !== input.variables[key]) {
      cleaned.variables[key] = input.variables[key];
    }
  });
  keys(input.light).forEach((key) => {
    if (defaultCssVariables.light[key] !== input.light[key]) {
      cleaned.light[key] = input.light[key];
    }
  });
  keys(input.dark).forEach((key) => {
    if (defaultCssVariables.dark[key] !== input.dark[key]) {
      cleaned.dark[key] = input.dark[key];
    }
  });
  return cleaned;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/MantineCssVariables.mjs
"use client";
function getColorSchemeCssVariables(selector) {
  return `
  ${selector}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${selector}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function MantineCssVariables({
  cssVariablesSelector,
  deduplicateCssVariables
}) {
  const theme2 = useMantineTheme();
  const nonce = useMantineStyleNonce();
  const generator = useMantineCssVariablesResolver();
  const mergedVariables = getMergedVariables({ theme: theme2, generator });
  const shouldCleanVariables = cssVariablesSelector === ":root" && deduplicateCssVariables;
  const cleanedVariables = shouldCleanVariables ? removeDefaultVariables(mergedVariables) : mergedVariables;
  const css = convertCssVariables(cleanedVariables, cssVariablesSelector);
  if (css) {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "style",
      {
        "data-mantine-styles": true,
        nonce: nonce?.(),
        dangerouslySetInnerHTML: {
          __html: `${css}${shouldCleanVariables ? "" : getColorSchemeCssVariables(cssVariablesSelector)}`
        }
      }
    );
  }
  return null;
}
MantineCssVariables.displayName = "@mantine/CssVariables";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs
var import_react23 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/use-mantine-color-scheme/use-provider-color-scheme.mjs
var import_react22 = __toESM(require_react(), 1);
"use client";
function setColorSchemeAttribute(colorScheme, getRootElement) {
  const hasDarkColorScheme = typeof window !== "undefined" && "matchMedia" in window && window.matchMedia("(prefers-color-scheme: dark)")?.matches;
  const computedColorScheme = colorScheme !== "auto" ? colorScheme : hasDarkColorScheme ? "dark" : "light";
  getRootElement()?.setAttribute("data-mantine-color-scheme", computedColorScheme);
}
function useProviderColorScheme({
  manager,
  defaultColorScheme,
  getRootElement,
  forceColorScheme
}) {
  const media = (0, import_react22.useRef)(null);
  const [value, setValue] = (0, import_react22.useState)(() => manager.get(defaultColorScheme));
  const colorSchemeValue = forceColorScheme || value;
  const setColorScheme = (0, import_react22.useCallback)(
    (colorScheme) => {
      if (!forceColorScheme) {
        setColorSchemeAttribute(colorScheme, getRootElement);
        setValue(colorScheme);
        manager.set(colorScheme);
      }
    },
    [manager.set, colorSchemeValue, forceColorScheme]
  );
  const clearColorScheme = (0, import_react22.useCallback)(() => {
    setValue(defaultColorScheme);
    setColorSchemeAttribute(defaultColorScheme, getRootElement);
    manager.clear();
  }, [manager.clear, defaultColorScheme]);
  (0, import_react22.useEffect)(() => {
    manager.subscribe(setColorScheme);
    return manager.unsubscribe;
  }, [manager.subscribe, manager.unsubscribe]);
  useIsomorphicEffect(() => {
    setColorSchemeAttribute(manager.get(defaultColorScheme), getRootElement);
  }, []);
  (0, import_react22.useEffect)(() => {
    if (forceColorScheme) {
      setColorSchemeAttribute(forceColorScheme, getRootElement);
      return () => {
      };
    }
    if (forceColorScheme === void 0) {
      setColorSchemeAttribute(value, getRootElement);
    }
    if (typeof window !== "undefined" && "matchMedia" in window) {
      media.current = window.matchMedia("(prefers-color-scheme: dark)");
    }
    const listener = (event) => {
      if (value === "auto") {
        setColorSchemeAttribute(event.matches ? "dark" : "light", getRootElement);
      }
    };
    media.current?.addEventListener("change", listener);
    return () => media.current?.removeEventListener("change", listener);
  }, [value, forceColorScheme]);
  return { colorScheme: colorSchemeValue, setColorScheme, clearColorScheme };
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/use-respect-reduce-motion/use-respect-reduce-motion.mjs
"use client";
function useRespectReduceMotion({
  respectReducedMotion,
  getRootElement
}) {
  useIsomorphicEffect(() => {
    if (respectReducedMotion) {
      getRootElement()?.setAttribute("data-respect-reduced-motion", "true");
    }
  }, [respectReducedMotion]);
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs
"use client";
function MantineProvider({
  theme: theme2,
  children,
  getStyleNonce,
  withStaticClasses = true,
  withGlobalClasses = true,
  deduplicateCssVariables = true,
  withCssVariables = true,
  cssVariablesSelector = ":root",
  classNamesPrefix = "mantine",
  colorSchemeManager = localStorageColorSchemeManager(),
  defaultColorScheme = "light",
  getRootElement = () => document.documentElement,
  cssVariablesResolver,
  forceColorScheme,
  stylesTransform,
  env
}) {
  const { colorScheme, setColorScheme, clearColorScheme } = useProviderColorScheme({
    defaultColorScheme,
    forceColorScheme,
    manager: colorSchemeManager,
    getRootElement
  });
  useRespectReduceMotion({
    respectReducedMotion: theme2?.respectReducedMotion || false,
    getRootElement
  });
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    MantineContext.Provider,
    {
      value: {
        colorScheme,
        setColorScheme,
        clearColorScheme,
        getRootElement,
        classNamesPrefix,
        getStyleNonce,
        cssVariablesResolver,
        cssVariablesSelector,
        withStaticClasses,
        stylesTransform,
        env
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(MantineThemeProvider, { theme: theme2, children: [
        withCssVariables && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          MantineCssVariables,
          {
            cssVariablesSelector,
            deduplicateCssVariables
          }
        ),
        withGlobalClasses && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(MantineClasses, {}),
        children
      ] })
    }
  );
}
MantineProvider.displayName = "@mantine/core/MantineProvider";
function HeadlessMantineProvider({ children, theme: theme2, env }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    MantineContext.Provider,
    {
      value: {
        colorScheme: "auto",
        setColorScheme: () => {
        },
        clearColorScheme: () => {
        },
        getRootElement: () => document.documentElement,
        classNamesPrefix: "mantine",
        cssVariablesSelector: ":root",
        withStaticClasses: false,
        headless: true,
        env
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(MantineThemeProvider, { theme: theme2, children })
    }
  );
}
HeadlessMantineProvider.displayName = "@mantine/core/HeadlessMantineProvider";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-resolved-styles-api/use-resolved-styles-api.mjs
"use client";
function useResolvedStylesApi({
  classNames,
  styles,
  props,
  stylesCtx
}) {
  const theme2 = useMantineTheme();
  return {
    resolvedClassNames: resolveClassNames({
      theme: theme2,
      classNames,
      props,
      stylesCtx: stylesCtx || void 0
    }),
    resolvedStyles: resolveStyles({
      theme: theme2,
      styles,
      props,
      stylesCtx: stylesCtx || void 0
    })
  };
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-global-class-names/get-global-class-names.mjs
"use client";
var FOCUS_CLASS_NAMES = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function getGlobalClassNames({ theme: theme2, options, unstyled }) {
  return clsx_default(
    options?.focusable && !unstyled && (theme2.focusClassName || FOCUS_CLASS_NAMES[theme2.focusRing]),
    options?.active && !unstyled && theme2.activeClassName
  );
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs
var import_react27 = __toESM(require_react(), 1);
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-options-class-names/get-options-class-names.mjs
"use client";
function getOptionsClassNames({
  selector,
  stylesCtx,
  options,
  props,
  theme: theme2
}) {
  return resolveClassNames({
    theme: theme2,
    classNames: options?.classNames,
    props: options?.props || props,
    stylesCtx
  })[selector];
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-resolved-class-names/get-resolved-class-names.mjs
"use client";
function getResolvedClassNames({
  selector,
  stylesCtx,
  theme: theme2,
  classNames,
  props
}) {
  return resolveClassNames({ theme: theme2, classNames, props, stylesCtx })[selector];
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-root-class-name/get-root-class-name.mjs
"use client";
function getRootClassName({ rootSelector, selector, className }) {
  return rootSelector === selector ? className : void 0;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-selector-class-name/get-selector-class-name.mjs
"use client";
function getSelectorClassName({ selector, classes: classes10, unstyled }) {
  return unstyled ? void 0 : classes10[selector];
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-static-class-names/get-static-class-names.mjs
"use client";
function getStaticClassNames({
  themeName,
  classNamesPrefix,
  selector,
  withStaticClass
}) {
  if (withStaticClass === false) {
    return [];
  }
  return themeName.map((n) => `${classNamesPrefix}-${n}-${selector}`);
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-theme-class-names/get-theme-class-names.mjs
"use client";
function getThemeClassNames({
  themeName,
  theme: theme2,
  selector,
  props,
  stylesCtx
}) {
  return themeName.map(
    (n) => resolveClassNames({
      theme: theme2,
      classNames: theme2.components[n]?.classNames,
      props,
      stylesCtx
    })?.[selector]
  );
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-variant-class-name/get-variant-class-name.mjs
"use client";
function getVariantClassName({
  options,
  classes: classes10,
  selector,
  unstyled
}) {
  return options?.variant && !unstyled ? classes10[`${selector}--${options.variant}`] : void 0;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-class-name.mjs
"use client";
function getClassName({
  theme: theme2,
  options,
  themeName,
  selector,
  classNamesPrefix,
  classNames,
  classes: classes10,
  unstyled,
  className,
  rootSelector,
  props,
  stylesCtx,
  withStaticClasses,
  headless,
  transformedStyles
}) {
  return clsx_default(
    getGlobalClassNames({ theme: theme2, options, unstyled: unstyled || headless }),
    getThemeClassNames({ theme: theme2, themeName, selector, props, stylesCtx }),
    getVariantClassName({ options, classes: classes10, selector, unstyled }),
    getResolvedClassNames({ selector, stylesCtx, theme: theme2, classNames, props }),
    getResolvedClassNames({ selector, stylesCtx, theme: theme2, classNames: transformedStyles, props }),
    getOptionsClassNames({ selector, stylesCtx, options, props, theme: theme2 }),
    getRootClassName({ rootSelector, selector, className }),
    getSelectorClassName({ selector, classes: classes10, unstyled: unstyled || headless }),
    withStaticClasses && !headless && getStaticClassNames({
      themeName,
      classNamesPrefix,
      selector,
      withStaticClass: options?.withStaticClass
    }),
    options?.className
  );
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-theme-styles/get-theme-styles.mjs
"use client";
function getThemeStyles({
  theme: theme2,
  themeName,
  props,
  stylesCtx,
  selector
}) {
  return themeName.map(
    (n) => resolveStyles({
      theme: theme2,
      styles: theme2.components[n]?.styles,
      props,
      stylesCtx
    })[selector]
  ).reduce((acc, val) => ({ ...acc, ...val }), {});
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-style/resolve-style.mjs
"use client";
function resolveStyle({ style, theme: theme2 }) {
  if (Array.isArray(style)) {
    return [...style].reduce(
      (acc, item) => ({ ...acc, ...resolveStyle({ style: item, theme: theme2 }) }),
      {}
    );
  }
  if (typeof style === "function") {
    return style(theme2);
  }
  if (style == null) {
    return {};
  }
  return style;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/merge-vars.mjs
var import_react25 = __toESM(require_react(), 1);
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
"use client";
function mergeVars(vars) {
  return vars.reduce((acc, current) => {
    if (current) {
      Object.keys(current).forEach((key) => {
        acc[key] = { ...acc[key], ...filterProps(current[key]) };
      });
    }
    return acc;
  }, {});
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/resolve-vars.mjs
"use client";
function resolveVars({
  vars,
  varsResolver: varsResolver14,
  theme: theme2,
  props,
  stylesCtx,
  selector,
  themeName,
  headless
}) {
  return mergeVars([
    headless ? {} : varsResolver14?.(theme2, props, stylesCtx),
    ...themeName.map((name) => theme2.components?.[name]?.vars?.(theme2, props, stylesCtx)),
    vars?.(theme2, props, stylesCtx)
  ])?.[selector];
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-style.mjs
"use client";
function getStyle({
  theme: theme2,
  themeName,
  selector,
  options,
  props,
  stylesCtx,
  rootSelector,
  styles,
  style,
  vars,
  varsResolver: varsResolver14,
  headless,
  withStylesTransform
}) {
  return {
    ...!withStylesTransform && getThemeStyles({ theme: theme2, themeName, props, stylesCtx, selector }),
    ...!withStylesTransform && resolveStyles({ theme: theme2, styles, props, stylesCtx })[selector],
    ...!withStylesTransform && resolveStyles({ theme: theme2, styles: options?.styles, props: options?.props || props, stylesCtx })[selector],
    ...resolveVars({ theme: theme2, props, stylesCtx, vars, varsResolver: varsResolver14, selector, themeName, headless }),
    ...rootSelector === selector ? resolveStyle({ style, theme: theme2 }) : null,
    ...resolveStyle({ style: options?.style, theme: theme2 })
  };
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-transformed-styles.mjs
var import_react26 = __toESM(require_react(), 1);
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
"use client";
function useStylesTransform({ props, stylesCtx, themeName }) {
  const theme2 = useMantineTheme();
  const stylesTransform = useMantineStylesTransform()?.();
  const getTransformedStyles = (styles) => {
    if (!stylesTransform) {
      return [];
    }
    const transformedStyles = styles.map(
      (style) => stylesTransform(style, { props, theme: theme2, ctx: stylesCtx })
    );
    return [
      ...transformedStyles,
      ...themeName.map(
        (n) => stylesTransform(theme2.components[n]?.styles, { props, theme: theme2, ctx: stylesCtx })
      )
    ].filter(Boolean);
  };
  return {
    getTransformedStyles,
    withStylesTransform: !!stylesTransform
  };
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs
"use client";
function useStyles({
  name,
  classes: classes10,
  props,
  stylesCtx,
  className,
  style,
  rootSelector = "root",
  unstyled,
  classNames,
  styles,
  vars,
  varsResolver: varsResolver14
}) {
  const theme2 = useMantineTheme();
  const classNamesPrefix = useMantineClassNamesPrefix();
  const withStaticClasses = useMantineWithStaticClasses();
  const headless = useMantineIsHeadless();
  const themeName = (Array.isArray(name) ? name : [name]).filter((n) => n);
  const { withStylesTransform, getTransformedStyles } = useStylesTransform({
    props,
    stylesCtx,
    themeName
  });
  return (selector, options) => ({
    className: getClassName({
      theme: theme2,
      options,
      themeName,
      selector,
      classNamesPrefix,
      classNames,
      classes: classes10,
      unstyled,
      className,
      rootSelector,
      props,
      stylesCtx,
      withStaticClasses,
      headless,
      transformedStyles: getTransformedStyles([options?.styles, styles])
    }),
    style: getStyle({
      theme: theme2,
      themeName,
      selector,
      options,
      props,
      stylesCtx,
      rootSelector,
      styles,
      style,
      vars,
      varsResolver: varsResolver14,
      headless,
      withStylesTransform
    })
  });
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-auto-contrast-value/get-auto-contrast-value.mjs
"use client";
function getAutoContrastValue(autoContrast, theme2) {
  return typeof autoContrast === "boolean" ? autoContrast : theme2.autoContrast;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/ColorSchemeScript/ColorSchemeScript.mjs
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
"use client";
var getScript = ({
  defaultColorScheme,
  localStorageKey,
  forceColorScheme
}) => forceColorScheme ? `document.documentElement.setAttribute("data-mantine-color-scheme", '${forceColorScheme}');` : `try {
  var _colorScheme = window.localStorage.getItem("${localStorageKey}");
  var colorScheme = _colorScheme === "light" || _colorScheme === "dark" || _colorScheme === "auto" ? _colorScheme : "${defaultColorScheme}";
  var computedColorScheme = colorScheme !== "auto" ? colorScheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.setAttribute("data-mantine-color-scheme", computedColorScheme);
} catch (e) {}
`;
function ColorSchemeScript({
  defaultColorScheme = "light",
  localStorageKey = "mantine-color-scheme-value",
  forceColorScheme,
  ...others
}) {
  const _defaultColorScheme = ["light", "dark", "auto"].includes(defaultColorScheme) ? defaultColorScheme : "light";
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    "script",
    {
      ...others,
      "data-mantine-script": true,
      dangerouslySetInnerHTML: {
        __html: getScript({
          defaultColorScheme: _defaultColorScheme,
          localStorageKey,
          forceColorScheme
        })
      }
    }
  );
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var import_react28 = __toESM(require_react(), 1);
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
"use client";
function useProps(component, defaultProps22, props) {
  const theme2 = useMantineTheme();
  const contextPropsPayload = theme2.components[component]?.defaultProps;
  const contextProps = typeof contextPropsPayload === "function" ? contextPropsPayload(theme2) : contextPropsPayload;
  return { ...defaultProps22, ...contextProps, ...filterProps(props) };
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/create-theme/create-theme.mjs
function createTheme(theme2) {
  return theme2;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/MantineProvider/mantine-html-props.mjs
var mantineHtmlProps = {
  suppressHydrationWarning: true,
  "data-mantine-color-scheme": "light"
};

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var import_react30 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/InlineStyles/css-object-to-string/css-object-to-string.mjs
var import_react29 = __toESM(require_react(), 1);
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
"use client";
function cssObjectToString(css) {
  return keys(css).reduce(
    (acc, rule) => css[rule] !== void 0 ? `${acc}${camelToKebabCase(rule)}:${css[rule]};` : acc,
    ""
  ).trim();
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/InlineStyles/styles-to-string/styles-to-string.mjs
"use client";
function stylesToString({ selector, styles, media, container }) {
  const baseStyles = styles ? cssObjectToString(styles) : "";
  const mediaQueryStyles = !Array.isArray(media) ? [] : media.map((item) => `@media${item.query}{${selector}{${cssObjectToString(item.styles)}}}`);
  const containerStyles = !Array.isArray(container) ? [] : container.map(
    (item) => `@container ${item.query}{${selector}{${cssObjectToString(item.styles)}}}`
  );
  return `${baseStyles ? `${selector}{${baseStyles}}` : ""}${mediaQueryStyles.join("")}${containerStyles.join("")}`.trim();
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs
"use client";
function InlineStyles(props) {
  const nonce = useMantineStyleNonce();
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: nonce?.(),
      dangerouslySetInnerHTML: { __html: stylesToString(props) }
    }
  );
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs
var import_react31 = __toESM(require_react(), 1);
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
"use client";
function extractStyleProps(others) {
  const {
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    me,
    ms,
    p,
    px: px2,
    py,
    pt,
    pb,
    pl,
    pr,
    pe,
    ps,
    bd,
    bdrs,
    bg,
    c,
    opacity,
    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    td,
    w,
    miw,
    maw,
    h,
    mih,
    mah,
    bgsz,
    bgp,
    bgr,
    bga,
    pos,
    top,
    left,
    bottom,
    right,
    inset,
    display,
    flex,
    hiddenFrom,
    visibleFrom,
    lightHidden,
    darkHidden,
    sx,
    ...rest
  } = others;
  const styleProps = filterProps({
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    me,
    ms,
    p,
    px: px2,
    py,
    pt,
    pb,
    pl,
    pr,
    pe,
    ps,
    bd,
    bg,
    c,
    opacity,
    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    td,
    w,
    miw,
    maw,
    h,
    mih,
    mah,
    bgsz,
    bgp,
    bgr,
    bga,
    pos,
    top,
    left,
    bottom,
    right,
    inset,
    display,
    flex,
    bdrs,
    hiddenFrom,
    visibleFrom,
    lightHidden,
    darkHidden,
    sx
  });
  return { styleProps, rest };
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/style-props/style-props-data.mjs
"use client";
var STYlE_PROPS_DATA = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  ms: { type: "spacing", property: "marginInlineStart" },
  me: { type: "spacing", property: "marginInlineEnd" },
  mx: { type: "spacing", property: "marginInline" },
  my: { type: "spacing", property: "marginBlock" },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  ps: { type: "spacing", property: "paddingInlineStart" },
  pe: { type: "spacing", property: "paddingInlineEnd" },
  px: { type: "spacing", property: "paddingInline" },
  py: { type: "spacing", property: "paddingBlock" },
  bd: { type: "border", property: "border" },
  bdrs: { type: "radius", property: "borderRadius" },
  bg: { type: "color", property: "background" },
  c: { type: "textColor", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "fontFamily", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "size", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" },
  flex: { type: "identity", property: "flex" }
};

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/parse-style-props.mjs
var import_react38 = __toESM(require_react(), 1);
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/border-resolver/border-resolver.mjs
var import_react33 = __toESM(require_react(), 1);
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/color-resolver/color-resolver.mjs
var import_react32 = __toESM(require_react(), 1);
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
"use client";
function colorResolver(color, theme2) {
  const parsedColor = parseThemeColor({ color, theme: theme2 });
  if (parsedColor.color === "dimmed") {
    return "var(--mantine-color-dimmed)";
  }
  if (parsedColor.color === "bright") {
    return "var(--mantine-color-bright)";
  }
  return parsedColor.variable ? `var(${parsedColor.variable})` : parsedColor.color;
}
function textColorResolver(color, theme2) {
  const parsedColor = parseThemeColor({ color, theme: theme2 });
  if (parsedColor.isThemeColor && parsedColor.shade === void 0) {
    return `var(--mantine-color-${parsedColor.color}-text)`;
  }
  return colorResolver(color, theme2);
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/border-resolver/border-resolver.mjs
"use client";
function borderResolver(value, theme2) {
  if (typeof value === "number") {
    return rem(value);
  }
  if (typeof value === "string") {
    const [size, style, ...colorTuple] = value.split(" ").filter((val) => val.trim() !== "");
    let result = `${rem(size)}`;
    style && (result += ` ${style}`);
    colorTuple.length > 0 && (result += ` ${colorResolver(colorTuple.join(" "), theme2)}`);
    return result.trim();
  }
  return value;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-family-resolver/font-family-resolver.mjs
"use client";
var values = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};
function fontFamilyResolver(fontFamily) {
  if (typeof fontFamily === "string" && fontFamily in values) {
    return values[fontFamily];
  }
  return fontFamily;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-size-resolver/font-size-resolver.mjs
var import_react34 = __toESM(require_react(), 1);
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
"use client";
var headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
function fontSizeResolver(value, theme2) {
  if (typeof value === "string" && value in theme2.fontSizes) {
    return `var(--mantine-font-size-${value})`;
  }
  if (typeof value === "string" && headings.includes(value)) {
    return `var(--mantine-${value}-font-size)`;
  }
  if (typeof value === "number") {
    return rem(value);
  }
  if (typeof value === "string") {
    return rem(value);
  }
  return value;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/identity-resolver/identity-resolver.mjs
"use client";
function identityResolver(value) {
  return value;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/line-height-resolver/line-height-resolver.mjs
"use client";
var headings2 = ["h1", "h2", "h3", "h4", "h5", "h6"];
function lineHeightResolver(value, theme2) {
  if (typeof value === "string" && value in theme2.lineHeights) {
    return `var(--mantine-line-height-${value})`;
  }
  if (typeof value === "string" && headings2.includes(value)) {
    return `var(--mantine-${value}-line-height)`;
  }
  return value;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/radius-resolver/radius-resolver.mjs
var import_react35 = __toESM(require_react(), 1);
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
"use client";
function radiusResolver(value, theme2) {
  if (typeof value === "string" && value in theme2.radius) {
    return `var(--mantine-radius-${value})`;
  }
  if (typeof value === "number") {
    return rem(value);
  }
  if (typeof value === "string") {
    return rem(value);
  }
  return value;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/size-resolver/size-resolver.mjs
var import_react36 = __toESM(require_react(), 1);
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
"use client";
function sizeResolver(value) {
  if (typeof value === "number") {
    return rem(value);
  }
  return value;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/spacing-resolver/spacing-resolver.mjs
var import_react37 = __toESM(require_react(), 1);
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
"use client";
function spacingResolver(value, theme2) {
  if (typeof value === "number") {
    return rem(value);
  }
  if (typeof value === "string") {
    const mod = value.replace("-", "");
    if (!(mod in theme2.spacing)) {
      return rem(value);
    }
    const variable = `--mantine-spacing-${mod}`;
    return value.startsWith("-") ? `calc(var(${variable}) * -1)` : `var(${variable})`;
  }
  return value;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/index.mjs
"use client";
var resolvers = {
  color: colorResolver,
  textColor: textColorResolver,
  fontSize: fontSizeResolver,
  spacing: spacingResolver,
  radius: radiusResolver,
  identity: identityResolver,
  size: sizeResolver,
  lineHeight: lineHeightResolver,
  fontFamily: fontFamilyResolver,
  border: borderResolver
};

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/sort-media-queries.mjs
"use client";
function replaceMediaQuery(query) {
  return query.replace("(min-width: ", "").replace("em)", "");
}
function sortMediaQueries({
  media,
  ...props
}) {
  const breakpoints = Object.keys(media);
  const sortedMedia = breakpoints.sort((a, b) => Number(replaceMediaQuery(a)) - Number(replaceMediaQuery(b))).map((query) => ({ query, styles: media[query] }));
  return { ...props, media: sortedMedia };
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/parse-style-props.mjs
"use client";
function hasResponsiveStyles(styleProp) {
  if (typeof styleProp !== "object" || styleProp === null) {
    return false;
  }
  const breakpoints = Object.keys(styleProp);
  if (breakpoints.length === 1 && breakpoints[0] === "base") {
    return false;
  }
  return true;
}
function getBaseValue(value) {
  if (typeof value === "object" && value !== null) {
    if ("base" in value) {
      return value.base;
    }
    return void 0;
  }
  return value;
}
function getBreakpointKeys(value) {
  if (typeof value === "object" && value !== null) {
    return keys(value).filter((key) => key !== "base");
  }
  return [];
}
function getBreakpointValue(value, breakpoint) {
  if (typeof value === "object" && value !== null && breakpoint in value) {
    return value[breakpoint];
  }
  return value;
}
function parseStyleProps({
  styleProps,
  data: data2,
  theme: theme2
}) {
  return sortMediaQueries(
    keys(styleProps).reduce(
      (acc, styleProp) => {
        if (styleProp === "hiddenFrom" || styleProp === "visibleFrom" || styleProp === "sx") {
          return acc;
        }
        const propertyData = data2[styleProp];
        const properties = Array.isArray(propertyData.property) ? propertyData.property : [propertyData.property];
        const baseValue = getBaseValue(styleProps[styleProp]);
        if (!hasResponsiveStyles(styleProps[styleProp])) {
          properties.forEach((property) => {
            acc.inlineStyles[property] = resolvers[propertyData.type](baseValue, theme2);
          });
          return acc;
        }
        acc.hasResponsiveStyles = true;
        const breakpoints = getBreakpointKeys(styleProps[styleProp]);
        properties.forEach((property) => {
          if (baseValue) {
            acc.styles[property] = resolvers[propertyData.type](baseValue, theme2);
          }
          breakpoints.forEach((breakpoint) => {
            const bp = `(min-width: ${theme2.breakpoints[breakpoint]})`;
            acc.media[bp] = {
              ...acc.media[bp],
              [property]: resolvers[propertyData.type](
                getBreakpointValue(styleProps[styleProp], breakpoint),
                theme2
              )
            };
          });
        });
        return acc;
      },
      {
        hasResponsiveStyles: false,
        styles: {},
        inlineStyles: {},
        media: {}
      }
    )
  );
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/use-random-classname/use-random-classname.mjs
var import_react39 = __toESM(require_react(), 1);
"use client";
function useRandomClassName() {
  const id = (0, import_react39.useId)().replace(/:/g, "");
  return `__m__-${id}`;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/Box.mjs
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
var import_react40 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/factory/create-polymorphic-component.mjs
function createPolymorphicComponent(component) {
  return component;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/get-box-mod/get-box-mod.mjs
"use client";
function transformModKey(key) {
  return key.startsWith("data-") ? key : `data-${key}`;
}
function getMod(props) {
  return Object.keys(props).reduce((acc, key) => {
    const value = props[key];
    if (value === void 0 || value === "" || value === false || value === null) {
      return acc;
    }
    acc[transformModKey(key)] = props[key];
    return acc;
  }, {});
}
function getBoxMod(mod) {
  if (!mod) {
    return null;
  }
  if (typeof mod === "string") {
    return { [transformModKey(mod)]: true };
  }
  if (Array.isArray(mod)) {
    return [...mod].reduce(
      (acc, value) => ({ ...acc, ...getBoxMod(value) }),
      {}
    );
  }
  return getMod(mod);
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/get-box-style/get-box-style.mjs
"use client";
function mergeStyles(styles, theme2) {
  if (Array.isArray(styles)) {
    return [...styles].reduce(
      (acc, item) => ({ ...acc, ...mergeStyles(item, theme2) }),
      {}
    );
  }
  if (typeof styles === "function") {
    return styles(theme2);
  }
  if (styles == null) {
    return {};
  }
  return styles;
}
function getBoxStyle({
  theme: theme2,
  style,
  vars,
  styleProps
}) {
  const _style = mergeStyles(style, theme2);
  const _vars = mergeStyles(vars, theme2);
  return { ..._style, ..._vars, ...styleProps };
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/Box/Box.mjs
"use client";
var _Box = (0, import_react40.forwardRef)(
  ({
    component,
    style,
    __vars,
    className,
    variant,
    mod,
    size,
    hiddenFrom,
    visibleFrom,
    lightHidden,
    darkHidden,
    renderRoot,
    __size,
    ...others
  }, ref) => {
    const theme2 = useMantineTheme();
    const Element2 = component || "div";
    const { styleProps, rest } = extractStyleProps(others);
    const useSxTransform = useMantineSxTransform();
    const transformedSx = useSxTransform?.()?.(styleProps.sx);
    const responsiveClassName = useRandomClassName();
    const parsedStyleProps = parseStyleProps({
      styleProps,
      theme: theme2,
      data: STYlE_PROPS_DATA
    });
    const props = {
      ref,
      style: getBoxStyle({
        theme: theme2,
        style,
        vars: __vars,
        styleProps: parsedStyleProps.inlineStyles
      }),
      className: clsx_default(className, transformedSx, {
        [responsiveClassName]: parsedStyleProps.hasResponsiveStyles,
        "mantine-light-hidden": lightHidden,
        "mantine-dark-hidden": darkHidden,
        [`mantine-hidden-from-${hiddenFrom}`]: hiddenFrom,
        [`mantine-visible-from-${visibleFrom}`]: visibleFrom
      }),
      "data-variant": variant,
      "data-size": isNumberLike(size) ? void 0 : size || void 0,
      size: __size,
      ...getBoxMod(mod),
      ...rest
    };
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(import_jsx_runtime31.Fragment, { children: [
      parsedStyleProps.hasResponsiveStyles && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        InlineStyles,
        {
          selector: `.${responsiveClassName}`,
          styles: parsedStyleProps.styles,
          media: parsedStyleProps.media
        }
      ),
      typeof renderRoot === "function" ? renderRoot(props) : /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Element2, { ...props })
    ] });
  }
);
_Box.displayName = "@mantine/core/Box";
var Box = createPolymorphicComponent(_Box);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/factory/factory.mjs
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
var import_react41 = __toESM(require_react(), 1);
"use client";
function identity(value) {
  return value;
}
function factory(ui) {
  const Component = (0, import_react41.forwardRef)(ui);
  Component.extend = identity;
  Component.withProps = (fixedProps) => {
    const Extended = (0, import_react41.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Component, { ...fixedProps, ...props, ref }));
    Extended.extend = Component.extend;
    Extended.displayName = `WithProps(${Component.displayName})`;
    return Extended;
  };
  return Component;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var import_react42 = __toESM(require_react(), 1);
"use client";
function polymorphicFactory(ui) {
  const Component = (0, import_react42.forwardRef)(ui);
  Component.withProps = (fixedProps) => {
    const Extended = (0, import_react42.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Component, { ...fixedProps, ...props, ref }));
    Extended.extend = Component.extend;
    Extended.displayName = `WithProps(${Component.displayName})`;
    return Extended;
  };
  Component.extend = identity;
  return Component;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
var import_react43 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.module.css.mjs
"use client";
var classes = { "root": "m_87cf2631" };

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs
"use client";
var defaultProps = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = polymorphicFactory(
  (_props, ref) => {
    const props = useProps("UnstyledButton", defaultProps, _props);
    const {
      className,
      component = "button",
      __staticSelector,
      unstyled,
      classNames,
      styles,
      style,
      ...others
    } = props;
    const getStyles2 = useStyles({
      name: __staticSelector,
      props,
      classes,
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      Box,
      {
        ...getStyles2("root", { focusable: true }),
        component,
        ref,
        type: component === "button" ? "button" : void 0,
        ...others
      }
    );
  }
);
UnstyledButton.classes = classes;
UnstyledButton.displayName = "@mantine/core/UnstyledButton";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Portal/Portal.mjs
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
var import_react44 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
"use client";
function createPortalNode(props) {
  const node = document.createElement("div");
  node.setAttribute("data-portal", "true");
  typeof props.className === "string" && node.classList.add(...props.className.split(" ").filter(Boolean));
  typeof props.style === "object" && Object.assign(node.style, props.style);
  typeof props.id === "string" && node.setAttribute("id", props.id);
  return node;
}
function getTargetNode({ target, reuseTargetNode, ...others }) {
  if (target) {
    if (typeof target === "string") {
      return document.querySelector(target) || createPortalNode(others);
    }
    return target;
  }
  if (reuseTargetNode) {
    const existingNode = document.querySelector("[data-mantine-shared-portal-node]");
    if (existingNode) {
      return existingNode;
    }
    const node = createPortalNode(others);
    node.setAttribute("data-mantine-shared-portal-node", "true");
    document.body.appendChild(node);
    return node;
  }
  return createPortalNode(others);
}
var defaultProps2 = {
  reuseTargetNode: true
};
var Portal = factory((props, ref) => {
  const { children, target, reuseTargetNode, ...others } = useProps("Portal", defaultProps2, props);
  const [mounted, setMounted] = (0, import_react44.useState)(false);
  const nodeRef = (0, import_react44.useRef)(null);
  useIsomorphicEffect(() => {
    setMounted(true);
    nodeRef.current = getTargetNode({ target, reuseTargetNode, ...others });
    assignRef2(ref, nodeRef.current);
    if (!target && !reuseTargetNode && nodeRef.current) {
      document.body.appendChild(nodeRef.current);
    }
    return () => {
      if (!target && !reuseTargetNode && nodeRef.current) {
        document.body.removeChild(nodeRef.current);
      }
    };
  }, [target]);
  if (!mounted || !nodeRef.current) {
    return null;
  }
  return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_jsx_runtime35.Fragment, { children }), nodeRef.current);
});
Portal.displayName = "@mantine/core/Portal";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
var import_react45 = __toESM(require_react(), 1);
"use client";
var OptionalPortal = factory(
  ({ withinPortal = true, children, ...others }, ref) => {
    const env = useMantineEnv();
    if (env === "test" || !withinPortal) {
      return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_jsx_runtime36.Fragment, { children });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Portal, { ref, ...others, children });
  }
);
OptionalPortal.displayName = "@mantine/core/OptionalPortal";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Transition/Transition.mjs
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
var import_react47 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Transition/transitions.mjs
"use client";
var popIn = (from) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${from === "bottom" ? 10 : -10}px)` },
  transitionProperty: "transform, opacity"
});
var transitions = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  "fade-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(30px)" },
    transitionProperty: "opacity, transform"
  },
  "fade-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-30px)" },
    transitionProperty: "opacity, transform"
  },
  "fade-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(30px)" },
    transitionProperty: "opacity, transform"
  },
  "fade-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-30px)" },
    transitionProperty: "opacity, transform"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: "translateY(-20px) skew(-10deg, -5deg)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: "translateY(20px) skew(-10deg, -5deg)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: "translateY(20px) rotate(-5deg)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: "translateY(20px) rotate(5deg)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: {
    ...popIn("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...popIn("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...popIn("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...popIn("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...popIn("top"),
    common: { transformOrigin: "top right" }
  }
};

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Transition/get-transition-styles/get-transition-styles.mjs
"use client";
var transitionStatuses = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function getTransitionStyles({
  transition,
  state,
  duration,
  timingFunction
}) {
  const shared = {
    WebkitBackfaceVisibility: "hidden",
    willChange: "transform, opacity",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timingFunction
  };
  if (typeof transition === "string") {
    if (!(transition in transitions)) {
      return {};
    }
    return {
      transitionProperty: transitions[transition].transitionProperty,
      ...shared,
      ...transitions[transition].common,
      ...transitions[transition][transitionStatuses[state]]
    };
  }
  return {
    transitionProperty: transition.transitionProperty,
    ...shared,
    ...transition.common,
    ...transition[transitionStatuses[state]]
  };
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Transition/use-transition.mjs
var import_react46 = __toESM(require_react(), 1);
var import_react_dom2 = __toESM(require_react_dom(), 1);
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
"use client";
function useTransition({
  duration,
  exitDuration,
  timingFunction,
  mounted,
  onEnter,
  onExit,
  onEntered,
  onExited,
  enterDelay,
  exitDelay
}) {
  const theme2 = useMantineTheme();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme2.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = (0, import_react46.useState)(reduceMotion ? 0 : duration);
  const [transitionStatus, setStatus] = (0, import_react46.useState)(mounted ? "entered" : "exited");
  const transitionTimeoutRef = (0, import_react46.useRef)(-1);
  const delayTimeoutRef = (0, import_react46.useRef)(-1);
  const rafRef = (0, import_react46.useRef)(-1);
  function clearAllTimeouts() {
    window.clearTimeout(transitionTimeoutRef.current);
    window.clearTimeout(delayTimeoutRef.current);
    cancelAnimationFrame(rafRef.current);
  }
  const handleStateChange = (shouldMount) => {
    clearAllTimeouts();
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;
    const newTransitionDuration = reduceMotion ? 0 : shouldMount ? duration : exitDuration;
    setTransitionDuration(newTransitionDuration);
    if (newTransitionDuration === 0) {
      typeof preHandler === "function" && preHandler();
      typeof handler === "function" && handler();
      setStatus(shouldMount ? "entered" : "exited");
    } else {
      rafRef.current = requestAnimationFrame(() => {
        import_react_dom2.default.flushSync(() => {
          setStatus(shouldMount ? "pre-entering" : "pre-exiting");
        });
        rafRef.current = requestAnimationFrame(() => {
          typeof preHandler === "function" && preHandler();
          setStatus(shouldMount ? "entering" : "exiting");
          transitionTimeoutRef.current = window.setTimeout(() => {
            typeof handler === "function" && handler();
            setStatus(shouldMount ? "entered" : "exited");
          }, newTransitionDuration);
        });
      });
    }
  };
  const handleTransitionWithDelay = (shouldMount) => {
    clearAllTimeouts();
    const delay = shouldMount ? enterDelay : exitDelay;
    if (typeof delay !== "number") {
      handleStateChange(shouldMount);
      return;
    }
    delayTimeoutRef.current = window.setTimeout(
      () => {
        handleStateChange(shouldMount);
      },
      shouldMount ? enterDelay : exitDelay
    );
  };
  useDidUpdate(() => {
    handleTransitionWithDelay(mounted);
  }, [mounted]);
  (0, import_react46.useEffect)(
    () => () => {
      clearAllTimeouts();
    },
    []
  );
  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || "ease"
  };
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Transition/Transition.mjs
"use client";
function Transition({
  keepMounted,
  transition = "fade",
  duration = 250,
  exitDuration = duration,
  mounted,
  children,
  timingFunction = "ease",
  onExit,
  onEntered,
  onEnter,
  onExited,
  enterDelay,
  exitDelay
}) {
  const env = useMantineEnv();
  const { transitionDuration, transitionStatus, transitionTimingFunction } = useTransition({
    mounted,
    exitDuration,
    duration,
    timingFunction,
    onExit,
    onEntered,
    onEnter,
    onExited,
    enterDelay,
    exitDelay
  });
  if (transitionDuration === 0 || env === "test") {
    return mounted ? /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_jsx_runtime38.Fragment, { children: children({}) }) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_jsx_runtime38.Fragment, { children: children(
    getTransitionStyles({
      transition,
      duration: transitionDuration,
      state: transitionStatus,
      timingFunction: transitionTimingFunction
    })
  ) });
}
Transition.displayName = "@mantine/core/Transition";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Loader/Loader.mjs
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
var import_react51 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Loader/loaders/Bars.mjs
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
var import_react48 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Loader/Loader.module.css.mjs
"use client";
var classes2 = { "root": "m_5ae2e3c", "barsLoader": "m_7a2bd4cd", "bar": "m_870bb79", "bars-loader-animation": "m_5d2b3b9d", "dotsLoader": "m_4e3f22d7", "dot": "m_870c4af", "loader-dots-animation": "m_aac34a1", "ovalLoader": "m_b34414df", "oval-loader-animation": "m_f8e89c4b" };

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Loader/loaders/Bars.mjs
"use client";
var Bars = (0, import_react48.forwardRef)(({ className, ...others }, ref) => /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(Box, {
  component: "span",
  className: clsx_default(classes2.barsLoader, className),
  ...others,
  ref,
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: classes2.bar }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: classes2.bar }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: classes2.bar })
  ]
}));
Bars.displayName = "@mantine/core/Bars";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Loader/loaders/Dots.mjs
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
var import_react49 = __toESM(require_react(), 1);
"use client";
var Dots = (0, import_react49.forwardRef)(({ className, ...others }, ref) => /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(Box, {
  component: "span",
  className: clsx_default(classes2.dotsLoader, className),
  ...others,
  ref,
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { className: classes2.dot }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { className: classes2.dot }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { className: classes2.dot })
  ]
}));
Dots.displayName = "@mantine/core/Dots";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Loader/loaders/Oval.mjs
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
var import_react50 = __toESM(require_react(), 1);
"use client";
var Oval = (0, import_react50.forwardRef)(({ className, ...others }, ref) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Box, { component: "span", className: clsx_default(classes2.ovalLoader, className), ...others, ref }));
Oval.displayName = "@mantine/core/Oval";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Loader/Loader.mjs
"use client";
var defaultLoaders = {
  bars: Bars,
  oval: Oval,
  dots: Dots
};
var defaultProps3 = {
  loaders: defaultLoaders,
  type: "oval"
};
var varsResolver = createVarsResolver((theme2, { size, color }) => ({
  root: {
    "--loader-size": getSize(size, "loader-size"),
    "--loader-color": color ? getThemeColor(color, theme2) : void 0
  }
}));
var Loader = factory((_props, ref) => {
  const props = useProps("Loader", defaultProps3, _props);
  const {
    size,
    color,
    type,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    loaders,
    variant,
    children,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Loader",
    props,
    classes: classes2,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  if (children) {
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Box, { ...getStyles2("root"), ref, ...others, children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    Box,
    {
      ...getStyles2("root"),
      ref,
      component: loaders[type],
      variant,
      size,
      ...others
    }
  );
});
Loader.defaultLoaders = defaultLoaders;
Loader.classes = classes2;
Loader.displayName = "@mantine/core/Loader";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/CloseButton/CloseIcon.mjs
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
var import_react52 = __toESM(require_react(), 1);
"use client";
var CloseIcon = (0, import_react52.forwardRef)(
  ({ size = "var(--cb-icon-size, 70%)", style, ...others }, ref) => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...style, width: size, height: size },
      ref,
      ...others,
      children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
        "path",
        {
          d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  )
);
CloseIcon.displayName = "@mantine/core/CloseIcon";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/CloseButton/CloseButton.mjs
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
var import_react53 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/CloseButton/CloseButton.module.css.mjs
"use client";
var classes3 = { "root": "m_86a44da5", "root--subtle": "m_220c80f2" };

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/CloseButton/CloseButton.mjs
"use client";
var defaultProps4 = {
  variant: "subtle"
};
var varsResolver2 = createVarsResolver((_, { size, radius, iconSize }) => ({
  root: {
    "--cb-size": getSize(size, "cb-size"),
    "--cb-radius": radius === void 0 ? void 0 : getRadius(radius),
    "--cb-icon-size": rem(iconSize)
  }
}));
var CloseButton = polymorphicFactory((_props, ref) => {
  const props = useProps("CloseButton", defaultProps4, _props);
  const {
    iconSize,
    children,
    vars,
    radius,
    className,
    classNames,
    style,
    styles,
    unstyled,
    "data-disabled": dataDisabled,
    disabled,
    variant,
    icon,
    mod,
    __staticSelector,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: __staticSelector || "CloseButton",
    props,
    className,
    style,
    classes: classes3,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2
  });
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
    UnstyledButton,
    {
      ref,
      ...others,
      unstyled,
      variant,
      disabled,
      mod: [{ disabled: disabled || dataDisabled }, mod],
      ...getStyles2("root", { variant, active: !disabled && !dataDisabled }),
      children: [
        icon || /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(CloseIcon, {}),
        children
      ]
    }
  );
});
CloseButton.classes = classes3;
CloseButton.displayName = "@mantine/core/CloseButton";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Input/Input.mjs
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);
var import_react62 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Input/Input.context.mjs
var import_react54 = __toESM(require_react(), 1);
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
"use client";
var [InputContext, useInputContext] = createOptionalContext({
  size: "sm"
});

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Input/InputClearButton/InputClearButton.mjs
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
var import_react55 = __toESM(require_react(), 1);
"use client";
var defaultProps5 = {};
var InputClearButton = factory((_props, ref) => {
  const props = useProps("InputClearButton", defaultProps5, _props);
  const { size, variant, vars, classNames, styles, ...others } = props;
  const ctx = useInputContext();
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    CloseButton,
    {
      variant: variant || "transparent",
      ref,
      size: size || ctx?.size || "sm",
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      __staticSelector: "InputClearButton",
      ...others
    }
  );
});
InputClearButton.displayName = "@mantine/core/InputClearButton";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Input/InputDescription/InputDescription.mjs
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
var import_react57 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Input/InputWrapper.context.mjs
var import_react56 = __toESM(require_react(), 1);
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
"use client";
var [InputWrapperProvider, useInputWrapperContext] = createOptionalContext({
  offsetBottom: false,
  offsetTop: false,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Input/Input.module.css.mjs
"use client";
var classes4 = { "wrapper": "m_6c018570", "input": "m_8fb7ebe7", "section": "m_82577fc2", "placeholder": "m_88bacfd0", "root": "m_46b77525", "label": "m_8fdc1311", "required": "m_78a94662", "error": "m_8f816625", "description": "m_fe47ce59" };

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Input/InputDescription/InputDescription.mjs
"use client";
var defaultProps6 = {};
var varsResolver3 = createVarsResolver((_, { size }) => ({
  description: {
    "--input-description-size": size === void 0 ? void 0 : `calc(${getFontSize(size)} - ${rem(2)})`
  }
}));
var InputDescription = factory((_props, ref) => {
  const props = useProps("InputDescription", defaultProps6, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    __staticSelector,
    __inheritStyles = true,
    variant,
    ...others
  } = useProps("InputDescription", defaultProps6, props);
  const ctx = useInputWrapperContext();
  const _getStyles = useStyles({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: classes4,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "description",
    vars,
    varsResolver: varsResolver3
  });
  const getStyles2 = __inheritStyles && ctx?.getStyles || _getStyles;
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
    Box,
    {
      component: "p",
      ref,
      variant,
      size,
      ...getStyles2("description", ctx?.getStyles ? { className, style } : void 0),
      ...others
    }
  );
});
InputDescription.classes = classes4;
InputDescription.displayName = "@mantine/core/InputDescription";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Input/InputError/InputError.mjs
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
var import_react58 = __toESM(require_react(), 1);
"use client";
var defaultProps7 = {};
var varsResolver4 = createVarsResolver((_, { size }) => ({
  error: {
    "--input-error-size": size === void 0 ? void 0 : `calc(${getFontSize(size)} - ${rem(2)})`
  }
}));
var InputError = factory((_props, ref) => {
  const props = useProps("InputError", defaultProps7, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    __staticSelector,
    __inheritStyles = true,
    variant,
    ...others
  } = props;
  const _getStyles = useStyles({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: classes4,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "error",
    vars,
    varsResolver: varsResolver4
  });
  const ctx = useInputWrapperContext();
  const getStyles2 = __inheritStyles && ctx?.getStyles || _getStyles;
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
    Box,
    {
      component: "p",
      ref,
      variant,
      size,
      ...getStyles2("error", ctx?.getStyles ? { className, style } : void 0),
      ...others
    }
  );
});
InputError.classes = classes4;
InputError.displayName = "@mantine/core/InputError";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Input/InputLabel/InputLabel.mjs
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
var import_react59 = __toESM(require_react(), 1);
"use client";
var defaultProps8 = {
  labelElement: "label"
};
var varsResolver5 = createVarsResolver((_, { size }) => ({
  label: {
    "--input-label-size": getFontSize(size),
    "--input-asterisk-color": void 0
  }
}));
var InputLabel = factory((_props, ref) => {
  const props = useProps("InputLabel", defaultProps8, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    labelElement,
    size,
    required,
    htmlFor,
    onMouseDown,
    children,
    __staticSelector,
    variant,
    mod,
    ...others
  } = useProps("InputLabel", defaultProps8, props);
  const _getStyles = useStyles({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: classes4,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "label",
    vars,
    varsResolver: varsResolver5
  });
  const ctx = useInputWrapperContext();
  const getStyles2 = ctx?.getStyles || _getStyles;
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
    Box,
    {
      ...getStyles2("label", ctx?.getStyles ? { className, style } : void 0),
      component: labelElement,
      variant,
      size,
      ref,
      htmlFor: labelElement === "label" ? htmlFor : void 0,
      mod: [{ required }, mod],
      onMouseDown: (event) => {
        onMouseDown?.(event);
        if (!event.defaultPrevented && event.detail > 1) {
          event.preventDefault();
        }
      },
      ...others,
      children: [
        children,
        required && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { ...getStyles2("required"), "aria-hidden": true, children: " *" })
      ]
    }
  );
});
InputLabel.classes = classes4;
InputLabel.displayName = "@mantine/core/InputLabel";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Input/InputPlaceholder/InputPlaceholder.mjs
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);
var import_react60 = __toESM(require_react(), 1);
"use client";
var defaultProps9 = {};
var InputPlaceholder = factory((_props, ref) => {
  const props = useProps("InputPlaceholder", defaultProps9, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    variant,
    error,
    mod,
    ...others
  } = useProps("InputPlaceholder", defaultProps9, props);
  const getStyles2 = useStyles({
    name: ["InputPlaceholder", __staticSelector],
    props,
    classes: classes4,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    Box,
    {
      ...getStyles2("placeholder"),
      mod: [{ error: !!error }, mod],
      component: "span",
      variant,
      ref,
      ...others
    }
  );
});
InputPlaceholder.classes = classes4;
InputPlaceholder.displayName = "@mantine/core/InputPlaceholder";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Input/InputWrapper/InputWrapper.mjs
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);
var import_react61 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Input/InputWrapper/get-input-offsets/get-input-offsets.mjs
"use client";
function getInputOffsets(inputWrapperOrder, { hasDescription, hasError }) {
  const inputIndex = inputWrapperOrder.findIndex((part) => part === "input");
  const aboveInput = inputWrapperOrder.slice(0, inputIndex);
  const belowInput = inputWrapperOrder.slice(inputIndex + 1);
  const offsetTop = hasDescription && aboveInput.includes("description") || hasError && aboveInput.includes("error");
  const offsetBottom = hasDescription && belowInput.includes("description") || hasError && belowInput.includes("error");
  return { offsetBottom, offsetTop };
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Input/InputWrapper/InputWrapper.mjs
"use client";
var defaultProps10 = {
  labelElement: "label",
  inputContainer: (children) => children,
  inputWrapperOrder: ["label", "description", "input", "error"]
};
var varsResolver6 = createVarsResolver((_, { size }) => ({
  label: {
    "--input-label-size": getFontSize(size),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": size === void 0 ? void 0 : `calc(${getFontSize(size)} - ${rem(2)})`
  },
  description: {
    "--input-description-size": size === void 0 ? void 0 : `calc(${getFontSize(size)} - ${rem(2)})`
  }
}));
var InputWrapper = factory((_props, ref) => {
  const props = useProps("InputWrapper", defaultProps10, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    variant,
    __staticSelector,
    inputContainer,
    inputWrapperOrder,
    label,
    error,
    description,
    labelProps,
    descriptionProps,
    errorProps,
    labelElement,
    children,
    withAsterisk,
    id,
    required,
    __stylesApiProps,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: ["InputWrapper", __staticSelector],
    props: __stylesApiProps || props,
    classes: classes4,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver6
  });
  const sharedProps = {
    size,
    variant,
    __staticSelector
  };
  const idBase = useId(id);
  const isRequired = typeof withAsterisk === "boolean" ? withAsterisk : required;
  const errorId = errorProps?.id || `${idBase}-error`;
  const descriptionId = descriptionProps?.id || `${idBase}-description`;
  const inputId = idBase;
  const hasError = !!error && typeof error !== "boolean";
  const hasDescription = !!description;
  const _describedBy = `${hasError ? errorId : ""} ${hasDescription ? descriptionId : ""}`;
  const describedBy = _describedBy.trim().length > 0 ? _describedBy.trim() : void 0;
  const labelId = labelProps?.id || `${idBase}-label`;
  const _label = label && /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
    InputLabel,
    {
      labelElement,
      id: labelId,
      htmlFor: inputId,
      required: isRequired,
      ...sharedProps,
      ...labelProps,
      children: label
    },
    "label"
  );
  const _description = hasDescription && /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
    InputDescription,
    {
      ...descriptionProps,
      ...sharedProps,
      size: descriptionProps?.size || sharedProps.size,
      id: descriptionProps?.id || descriptionId,
      children: description
    },
    "description"
  );
  const _input = /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react61.Fragment, { children: inputContainer(children) }, "input");
  const _error = hasError && /* @__PURE__ */ (0, import_react61.createElement)(
    InputError,
    {
      ...errorProps,
      ...sharedProps,
      size: errorProps?.size || sharedProps.size,
      key: "error",
      id: errorProps?.id || errorId
    },
    error
  );
  const content = inputWrapperOrder.map((part) => {
    switch (part) {
      case "label":
        return _label;
      case "input":
        return _input;
      case "description":
        return _description;
      case "error":
        return _error;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
    InputWrapperProvider,
    {
      value: {
        getStyles: getStyles2,
        describedBy,
        inputId,
        labelId,
        ...getInputOffsets(inputWrapperOrder, { hasDescription, hasError })
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
        Box,
        {
          ref,
          variant,
          size,
          mod: [{ error: !!error }, mod],
          ...getStyles2("root"),
          ...others,
          children: content
        }
      )
    }
  );
});
InputWrapper.classes = classes4;
InputWrapper.displayName = "@mantine/core/InputWrapper";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Input/Input.mjs
"use client";
var defaultProps11 = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: true,
  withErrorStyles: true
};
var varsResolver7 = createVarsResolver((_, props, ctx) => ({
  wrapper: {
    "--input-margin-top": ctx.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": ctx.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": getSize(props.size, "input-height"),
    "--input-fz": getFontSize(props.size),
    "--input-radius": props.radius === void 0 ? void 0 : getRadius(props.radius),
    "--input-left-section-width": props.leftSectionWidth !== void 0 ? rem(props.leftSectionWidth) : void 0,
    "--input-right-section-width": props.rightSectionWidth !== void 0 ? rem(props.rightSectionWidth) : void 0,
    "--input-padding-y": props.multiline ? getSize(props.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": props.leftSectionPointerEvents,
    "--input-right-section-pointer-events": props.rightSectionPointerEvents
  }
}));
var Input = polymorphicFactory((_props, ref) => {
  const props = useProps("Input", defaultProps11, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    required,
    __staticSelector,
    __stylesApiProps,
    size,
    wrapperProps,
    error,
    disabled,
    leftSection,
    leftSectionProps,
    leftSectionWidth,
    rightSection,
    rightSectionProps,
    rightSectionWidth,
    rightSectionPointerEvents,
    leftSectionPointerEvents,
    variant,
    vars,
    pointer,
    multiline,
    radius,
    id,
    withAria,
    withErrorStyles,
    mod,
    inputSize,
    __clearSection,
    __clearable,
    __defaultRightSection,
    ...others
  } = props;
  const { styleProps, rest } = extractStyleProps(others);
  const ctx = useInputWrapperContext();
  const stylesCtx = { offsetBottom: ctx?.offsetBottom, offsetTop: ctx?.offsetTop };
  const getStyles2 = useStyles({
    name: ["Input", __staticSelector],
    props: __stylesApiProps || props,
    classes: classes4,
    className,
    style,
    classNames,
    styles,
    unstyled,
    stylesCtx,
    rootSelector: "wrapper",
    vars,
    varsResolver: varsResolver7
  });
  const ariaAttributes = withAria ? {
    required,
    disabled,
    "aria-invalid": !!error,
    "aria-describedby": ctx?.describedBy,
    id: ctx?.inputId || id
  } : {};
  const _rightSection = rightSection || __clearable && __clearSection || __defaultRightSection;
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(InputContext, { value: { size: size || "sm" }, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(
    Box,
    {
      ...getStyles2("wrapper"),
      ...styleProps,
      ...wrapperProps,
      mod: [
        {
          error: !!error && withErrorStyles,
          pointer,
          disabled,
          multiline,
          "data-with-right-section": !!_rightSection,
          "data-with-left-section": !!leftSection
        },
        mod
      ],
      variant,
      size,
      children: [
        leftSection && /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
          "div",
          {
            ...leftSectionProps,
            "data-position": "left",
            ...getStyles2("section", {
              className: leftSectionProps?.className,
              style: leftSectionProps?.style
            }),
            children: leftSection
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
          Box,
          {
            component: "input",
            ...rest,
            ...ariaAttributes,
            ref,
            required,
            mod: { disabled, error: !!error && withErrorStyles },
            variant,
            __size: inputSize,
            ...getStyles2("input")
          }
        ),
        _rightSection && /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
          "div",
          {
            ...rightSectionProps,
            "data-position": "right",
            ...getStyles2("section", {
              className: rightSectionProps?.className,
              style: rightSectionProps?.style
            }),
            children: _rightSection
          }
        )
      ]
    }
  ) });
});
Input.classes = classes4;
Input.Wrapper = InputWrapper;
Input.Label = InputLabel;
Input.Error = InputError;
Input.Description = InputDescription;
Input.Placeholder = InputPlaceholder;
Input.ClearButton = InputClearButton;
Input.displayName = "@mantine/core/Input";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Button/Button.mjs
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
var import_react65 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Button/ButtonGroup/ButtonGroup.mjs
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);
var import_react63 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Button/Button.module.css.mjs
"use client";
var classes5 = { "root": "m_77c9d27d", "inner": "m_80f1301b", "label": "m_811560b9", "section": "m_a74036a", "loader": "m_a25b86ee", "group": "m_80d6d844", "groupSection": "m_70be2a01" };

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Button/ButtonGroup/ButtonGroup.mjs
"use client";
var defaultProps12 = {
  orientation: "horizontal"
};
var varsResolver8 = createVarsResolver((_, { borderWidth }) => ({
  group: { "--button-border-width": rem(borderWidth) }
}));
var ButtonGroup = factory((_props, ref) => {
  const props = useProps("ButtonGroup", defaultProps12, _props);
  const {
    className,
    style,
    classNames,
    styles,
    unstyled,
    orientation,
    vars,
    borderWidth,
    variant,
    mod,
    ...others
  } = useProps("ButtonGroup", defaultProps12, _props);
  const getStyles2 = useStyles({
    name: "ButtonGroup",
    props,
    classes: classes5,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver8,
    rootSelector: "group"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
    Box,
    {
      ...getStyles2("group"),
      ref,
      variant,
      mod: [{ "data-orientation": orientation }, mod],
      role: "group",
      ...others
    }
  );
});
ButtonGroup.classes = classes5;
ButtonGroup.displayName = "@mantine/core/ButtonGroup";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Button/ButtonGroupSection/ButtonGroupSection.mjs
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);
var import_react64 = __toESM(require_react(), 1);
"use client";
var defaultProps13 = {};
var varsResolver9 = createVarsResolver(
  (theme2, { radius, color, gradient, variant, autoContrast, size }) => {
    const colors = theme2.variantColorResolver({
      color: color || theme2.primaryColor,
      theme: theme2,
      gradient,
      variant: variant || "filled",
      autoContrast
    });
    return {
      groupSection: {
        "--section-height": getSize(size, "section-height"),
        "--section-padding-x": getSize(size, "section-padding-x"),
        "--section-fz": size?.includes("compact") ? getFontSize(size.replace("compact-", "")) : getFontSize(size),
        "--section-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--section-bg": color || variant ? colors.background : void 0,
        "--section-color": colors.color,
        "--section-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
var ButtonGroupSection = factory((_props, ref) => {
  const props = useProps("ButtonGroupSection", defaultProps13, _props);
  const {
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    variant,
    gradient,
    radius,
    autoContrast,
    ...others
  } = useProps("ButtonGroupSection", defaultProps13, _props);
  const getStyles2 = useStyles({
    name: "ButtonGroupSection",
    props,
    classes: classes5,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver9,
    rootSelector: "groupSection"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Box, { ...getStyles2("groupSection"), ref, variant, ...others });
});
ButtonGroupSection.classes = classes5;
ButtonGroupSection.displayName = "@mantine/core/ButtonGroupSection";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Button/Button.mjs
"use client";
var loaderTransition = {
  in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${rem(1)}))` },
  out: { opacity: 0, transform: "translate(-50%, -200%)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity"
};
var defaultProps14 = {};
var varsResolver10 = createVarsResolver(
  (theme2, { radius, color, gradient, variant, size, justify, autoContrast }) => {
    const colors = theme2.variantColorResolver({
      color: color || theme2.primaryColor,
      theme: theme2,
      gradient,
      variant: variant || "filled",
      autoContrast
    });
    return {
      root: {
        "--button-justify": justify,
        "--button-height": getSize(size, "button-height"),
        "--button-padding-x": getSize(size, "button-padding-x"),
        "--button-fz": size?.includes("compact") ? getFontSize(size.replace("compact-", "")) : getFontSize(size),
        "--button-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--button-bg": color || variant ? colors.background : void 0,
        "--button-hover": color || variant ? colors.hover : void 0,
        "--button-color": colors.color,
        "--button-bd": color || variant ? colors.border : void 0,
        "--button-hover-color": color || variant ? colors.hoverColor : void 0
      }
    };
  }
);
var Button = polymorphicFactory((_props, ref) => {
  const props = useProps("Button", defaultProps14, _props);
  const {
    style,
    vars,
    className,
    color,
    disabled,
    children,
    leftSection,
    rightSection,
    fullWidth,
    variant,
    radius,
    loading,
    loaderProps,
    gradient,
    classNames,
    styles,
    unstyled,
    "data-disabled": dataDisabled,
    autoContrast,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Button",
    props,
    classes: classes5,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver10
  });
  const hasLeftSection = !!leftSection;
  const hasRightSection = !!rightSection;
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(
    UnstyledButton,
    {
      ref,
      ...getStyles2("root", { active: !disabled && !loading && !dataDisabled }),
      unstyled,
      variant,
      disabled: disabled || loading,
      mod: [
        {
          disabled: disabled || dataDisabled,
          loading,
          block: fullWidth,
          "with-left-section": hasLeftSection,
          "with-right-section": hasRightSection
        },
        mod
      ],
      ...others,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Transition, { mounted: !!loading, transition: loaderTransition, duration: 150, children: (transitionStyles) => /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Box, { component: "span", ...getStyles2("loader", { style: transitionStyles }), "aria-hidden": true, children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
          Loader,
          {
            color: "var(--button-color)",
            size: "calc(var(--button-height) / 1.8)",
            ...loaderProps
          }
        ) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("span", {
          ...getStyles2("inner"),
          children: [
            leftSection && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Box, { component: "span", ...getStyles2("section"), mod: { position: "left" }, children: leftSection }),
            /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Box, { component: "span", mod: { loading }, ...getStyles2("label"), children }),
            rightSection && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Box, { component: "span", ...getStyles2("section"), mod: { position: "right" }, children: rightSection })
          ]
        })
      ]
    }
  );
});
Button.classes = classes5;
Button.displayName = "@mantine/core/Button";
Button.Group = ButtonGroup;
Button.GroupSection = ButtonGroupSection;

// node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r2 in t)
        ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r2, e) {
  if (null == r2)
    return {};
  var t = {};
  for (var n in r2)
    if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n))
        continue;
      t[n] = r2[n];
    }
  return t;
}

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Notification/Notification.mjs
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);
var import_react66 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Notification/Notification.module.css.mjs
"use client";
var classes6 = { "root": "m_a513464", "icon": "m_a4ceffb", "loader": "m_b0920b15", "body": "m_a49ed24", "title": "m_3feedf16", "description": "m_3d733a3a", "closeButton": "m_919a4d88" };

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Notification/Notification.mjs
"use client";
var defaultProps15 = {
  withCloseButton: true
};
var varsResolver11 = createVarsResolver((theme2, { radius, color }) => ({
  root: {
    "--notification-radius": radius === void 0 ? void 0 : getRadius(radius),
    "--notification-color": color ? getThemeColor(color, theme2) : void 0
  }
}));
var Notification = factory((_props, ref) => {
  const props = useProps("Notification", defaultProps15, _props);
  const {
    className,
    color,
    radius,
    loading,
    withCloseButton,
    withBorder,
    title,
    icon,
    children,
    onClose,
    closeButtonProps,
    classNames,
    style,
    styles,
    unstyled,
    variant,
    vars,
    mod,
    loaderProps,
    role,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Notification",
    classes: classes6,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver11
  });
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(
    Box,
    {
      ...getStyles2("root"),
      mod: [{ "data-with-icon": !!icon || loading, "data-with-border": withBorder }, mod],
      ref,
      variant,
      role: role || "alert",
      ...others,
      children: [
        icon && !loading && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { ...getStyles2("icon"), children: icon }),
        loading && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Loader, { size: 28, color, ...loaderProps, ...getStyles2("loader") }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", {
          ...getStyles2("body"),
          children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { ...getStyles2("title"), children: title }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Box, { ...getStyles2("description"), mod: { "data-with-title": !!title }, children })
          ]
        }),
        withCloseButton && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
          CloseButton,
          {
            iconSize: 16,
            color: "gray",
            ...closeButtonProps,
            unstyled,
            onClick: onClose,
            ...getStyles2("closeButton")
          }
        )
      ]
    }
  );
});
Notification.classes = classes6;
Notification.displayName = "@mantine/core/Notification";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Progress/Progress.mjs
var import_jsx_runtime62 = __toESM(require_jsx_runtime(), 1);
var import_react71 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Progress/ProgressLabel/ProgressLabel.mjs
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
var import_react68 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Progress/Progress.context.mjs
var import_react67 = __toESM(require_react(), 1);
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);
"use client";
var [ProgressProvider, useProgressContext] = createSafeContext(
  "Progress.Root component was not found in tree"
);

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Progress/Progress.module.css.mjs
"use client";
var classes7 = { "root": "m_db6d6462", "section": "m_2242eb65", "stripes-animation": "m_81a374bd", "label": "m_91e40b74" };

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Progress/ProgressLabel/ProgressLabel.mjs
"use client";
var defaultProps16 = {};
var ProgressLabel = factory((props, ref) => {
  const { classNames, className, style, styles, vars, ...others } = useProps(
    "ProgressLabel",
    defaultProps16,
    props
  );
  const ctx = useProgressContext();
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
    Box,
    {
      ref,
      ...ctx.getStyles("label", { className, style, classNames, styles }),
      ...others
    }
  );
});
ProgressLabel.classes = classes7;
ProgressLabel.displayName = "@mantine/core/ProgressLabel";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Progress/ProgressRoot/ProgressRoot.mjs
var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);
var import_react69 = __toESM(require_react(), 1);
"use client";
var defaultProps17 = {};
var varsResolver12 = createVarsResolver(
  (_, { size, radius, transitionDuration }) => ({
    root: {
      "--progress-size": getSize(size, "progress-size"),
      "--progress-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--progress-transition-duration": typeof transitionDuration === "number" ? `${transitionDuration}ms` : void 0
    }
  })
);
var ProgressRoot = factory((_props, ref) => {
  const props = useProps("ProgressRoot", defaultProps17, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    autoContrast,
    transitionDuration,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Progress",
    classes: classes7,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver12
  });
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(ProgressProvider, { value: { getStyles: getStyles2, autoContrast }, children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(Box, { ref, ...getStyles2("root"), ...others }) });
});
ProgressRoot.classes = classes7;
ProgressRoot.displayName = "@mantine/core/ProgressRoot";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Progress/ProgressSection/ProgressSection.mjs
var import_jsx_runtime61 = __toESM(require_jsx_runtime(), 1);
var import_react70 = __toESM(require_react(), 1);
"use client";
var defaultProps18 = {
  withAria: true
};
var ProgressSection = factory((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    value,
    withAria,
    color,
    striped,
    animated,
    mod,
    ...others
  } = useProps("ProgressSection", defaultProps18, props);
  const ctx = useProgressContext();
  const theme2 = useMantineTheme();
  const ariaAttributes = withAria ? {
    role: "progressbar",
    "aria-valuemax": 100,
    "aria-valuemin": 0,
    "aria-valuenow": value,
    "aria-valuetext": `${value}%`
  } : {};
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
    Box,
    {
      ref,
      ...ctx.getStyles("section", { className, classNames, styles, style }),
      ...others,
      ...ariaAttributes,
      mod: [{ striped: striped || animated, animated }, mod],
      __vars: {
        "--progress-section-width": `${value}%`,
        "--progress-section-color": getThemeColor(color, theme2),
        "--progress-label-color": getAutoContrastValue(ctx.autoContrast, theme2) ? getContrastColor({ color, theme: theme2, autoContrast: ctx.autoContrast }) : void 0
      }
    }
  );
});
ProgressSection.classes = classes7;
ProgressSection.displayName = "@mantine/core/ProgressSection";

// node_modules/.pnpm/@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@mantine/core/esm/components/Progress/Progress.mjs
"use client";
var defaultProps19 = {};
var Progress = factory((_props, ref) => {
  const props = useProps("Progress", defaultProps19, _props);
  const {
    value,
    classNames,
    styles,
    vars,
    color,
    striped,
    animated,
    "aria-label": label,
    ...others
  } = props;
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  return /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
    ProgressRoot,
    {
      ref,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      vars,
      ...others,
      children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
        ProgressSection,
        {
          value,
          color,
          striped,
          animated,
          "aria-label": label
        }
      )
    }
  );
});
Progress.classes = classes7;
Progress.displayName = "@mantine/core/Progress";
Progress.Section = ProgressSection;
Progress.Root = ProgressRoot;
Progress.Label = ProgressLabel;

// node_modules/.pnpm/@mantine+store@8.1.2_react@18.3.1/node_modules/@mantine/store/esm/store.mjs
var import_react72 = __toESM(require_react(), 1);
"use client";
function createStore(initialState) {
  let state = initialState;
  let initialized = false;
  const listeners = /* @__PURE__ */ new Set();
  return {
    getState() {
      return state;
    },
    updateState(value) {
      state = typeof value === "function" ? value(state) : value;
    },
    setState(value) {
      this.updateState(value);
      listeners.forEach((listener) => listener(state));
    },
    initialize(value) {
      if (!initialized) {
        state = value;
        initialized = true;
      }
    },
    subscribe(callback) {
      listeners.add(callback);
      return () => listeners.delete(callback);
    }
  };
}
function useStore(store) {
  return (0, import_react72.useSyncExternalStore)(
    store.subscribe,
    () => store.getState(),
    () => store.getState()
  );
}

// node_modules/.pnpm/@mantine+nprogress@8.1.2_@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@_mhzpnnolen4das47lkbohzylnq/node_modules/@mantine/nprogress/esm/nprogress.store.mjs
"use client";
function getIntervalProgressValue(currentProgress) {
  let next = 0.5;
  if (currentProgress >= 0 && currentProgress <= 20) {
    next = 10;
  } else if (currentProgress >= 20 && currentProgress <= 50) {
    next = 4;
  } else if (currentProgress >= 50 && currentProgress <= 80) {
    next = 2;
  } else if (currentProgress >= 80 && currentProgress <= 99) {
    next = 1;
  } else if (currentProgress >= 99 && currentProgress <= 100) {
    next = 0;
  }
  return currentProgress + next;
}
var createNprogressStore = () => createStore({
  mounted: false,
  progress: 0,
  interval: 0,
  step: 1,
  stepInterval: 100,
  timeouts: []
});
var useNprogress = (store) => useStore(store);
function updateNavigationProgressStateAction(update, store) {
  const state = store.getState();
  store.setState({ ...state, ...update(store.getState()) });
}
function decrementNavigationProgressAction(store) {
  updateNavigationProgressStateAction(
    (state) => ({ progress: Math.max(state.progress - state.step, 0) }),
    store
  );
}
function setNavigationProgressAction(value, store) {
  updateNavigationProgressStateAction(
    () => ({ progress: clamp(value, 0, 100), mounted: true }),
    store
  );
}
function cleanupNavigationProgressAction(store) {
  updateNavigationProgressStateAction((state) => {
    window.clearInterval(state.interval);
    state.timeouts.forEach((timeout2) => window.clearTimeout(timeout2));
    return { timeouts: [] };
  }, store);
}
function completeNavigationProgressAction(store) {
  cleanupNavigationProgressAction(store);
  updateNavigationProgressStateAction((state) => {
    const mountedTimeout = window.setTimeout(() => {
      updateNavigationProgressStateAction(() => ({ mounted: false }), store);
    }, 50);
    const resetTimeout = window.setTimeout(() => {
      updateNavigationProgressStateAction(() => ({ progress: 0 }), store);
    }, state.stepInterval + 50);
    return { progress: 100, timeouts: [mountedTimeout, resetTimeout] };
  }, store);
}
function startNavigationProgressAction(store) {
  updateNavigationProgressStateAction(
    (s) => ({ progress: getIntervalProgressValue(s.progress), mounted: true }),
    store
  );
  updateNavigationProgressStateAction((state) => {
    window.clearInterval(state.interval);
    const interval = window.setInterval(() => {
      updateNavigationProgressStateAction(
        (s) => ({ progress: getIntervalProgressValue(s.progress), mounted: true }),
        store
      );
    }, state.stepInterval);
    return { interval, mounted: true };
  }, store);
}
function stopNavigationProgressAction(store) {
  updateNavigationProgressStateAction((state) => {
    window.clearInterval(state.interval);
    return { interval: -1 };
  }, store);
}
function resetNavigationProgressAction(store) {
  cleanupNavigationProgressAction(store);
  stopNavigationProgressAction(store);
  updateNavigationProgressStateAction(() => ({ progress: 0, mounted: false }), store);
}
function incrementNavigationProgressAction(store) {
  updateNavigationProgressStateAction((state) => {
    const nextValue = Math.min(state.progress + state.step, 100);
    const nextMounted = nextValue !== 100 && nextValue !== 0;
    if (!nextMounted) {
      const timeout2 = window.setTimeout(
        () => resetNavigationProgressAction(store),
        state.stepInterval + 50
      );
      return {
        progress: nextValue,
        mounted: nextMounted,
        timeouts: [...state.timeouts, timeout2]
      };
    }
    return {
      progress: nextValue,
      mounted: nextMounted
    };
  }, store);
}
function createNprogress() {
  const store = createNprogressStore();
  const actions = {
    start: () => startNavigationProgressAction(store),
    stop: () => stopNavigationProgressAction(store),
    reset: () => resetNavigationProgressAction(store),
    set: (value) => setNavigationProgressAction(value, store),
    increment: () => incrementNavigationProgressAction(store),
    decrement: () => decrementNavigationProgressAction(store),
    complete: () => completeNavigationProgressAction(store),
    cleanup: () => cleanupNavigationProgressAction(store)
  };
  return [store, actions];
}
var [nprogressStore, nprogress] = createNprogress();
var {
  start: startNavigationProgress,
  stop: stopNavigationProgress,
  reset: resetNavigationProgress,
  set: setNavigationProgress,
  increment: incrementNavigationProgress,
  decrement: decrementNavigationProgress,
  complete: completeNavigationProgress,
  cleanup: cleanupNavigationProgress
} = nprogress;

// node_modules/.pnpm/@mantine+nprogress@8.1.2_@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@_mhzpnnolen4das47lkbohzylnq/node_modules/@mantine/nprogress/esm/NavigationProgress.module.css.mjs
"use client";
var classes8 = { "root": "m_8f2832ae", "section": "m_7a0fe999" };

// node_modules/.pnpm/@mantine+nprogress@8.1.2_@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+react@_mhzpnnolen4das47lkbohzylnq/node_modules/@mantine/nprogress/esm/NavigationProgress.mjs
"use client";
function NavigationProgress({
  initialProgress = 0,
  color,
  size = 3,
  stepInterval = 500,
  withinPortal = true,
  portalProps,
  zIndex = getDefaultZIndex("max"),
  store = nprogressStore,
  ...others
}) {
  store.initialize({
    mounted: false,
    progress: initialProgress,
    interval: -1,
    step: 1,
    stepInterval,
    timeouts: []
  });
  const state = useNprogress(store);
  (0, import_react73.useEffect)(() => () => resetNavigationProgressAction(store), [store]);
  return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(OptionalPortal, { ...portalProps, withinPortal, children: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
    Progress,
    {
      radius: 0,
      value: state.progress,
      size,
      color,
      classNames: classes8,
      "data-mounted": state.mounted || void 0,
      __vars: { "--nprogress-z-index": zIndex?.toString() },
      ...others
    }
  ) });
}
NavigationProgress.displayName = "@mantine/nprogress/NavigationProgress";

// node_modules/.pnpm/@mantine+notifications@8.1.2_@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+re_5n2krd4nd4wlqquimuyxrjxfk4/node_modules/@mantine/notifications/esm/notifications.store.mjs
"use client";
function getDistributedNotifications(data2, defaultPosition, limit) {
  const queue = [];
  const notifications2 = [];
  const count = {};
  for (const item of data2) {
    const position = item.position || defaultPosition;
    count[position] = count[position] || 0;
    count[position] += 1;
    if (count[position] <= limit) {
      notifications2.push(item);
    } else {
      queue.push(item);
    }
  }
  return { notifications: notifications2, queue };
}
var createNotificationsStore = () => createStore({
  notifications: [],
  queue: [],
  defaultPosition: "bottom-right",
  limit: 5
});
var notificationsStore = createNotificationsStore();
var useNotifications = (store = notificationsStore) => useStore(store);
function updateNotificationsState(store, update) {
  const state = store.getState();
  const notifications2 = update([...state.notifications, ...state.queue]);
  const updated = getDistributedNotifications(notifications2, state.defaultPosition, state.limit);
  store.setState({
    notifications: updated.notifications,
    queue: updated.queue,
    limit: state.limit,
    defaultPosition: state.defaultPosition
  });
}
function showNotification(notification, store = notificationsStore) {
  const id = notification.id || randomId();
  updateNotificationsState(store, (notifications2) => {
    if (notification.id && notifications2.some((n) => n.id === notification.id)) {
      return notifications2;
    }
    return [...notifications2, { ...notification, id }];
  });
  return id;
}
function hideNotification(id, store = notificationsStore) {
  updateNotificationsState(
    store,
    (notifications2) => notifications2.filter((notification) => {
      if (notification.id === id) {
        notification.onClose?.(notification);
        return false;
      }
      return true;
    })
  );
  return id;
}
function updateNotification(notification, store = notificationsStore) {
  updateNotificationsState(
    store,
    (notifications2) => notifications2.map((item) => {
      if (item.id === notification.id) {
        return { ...item, ...notification };
      }
      return item;
    })
  );
  return notification.id;
}
function cleanNotifications(store = notificationsStore) {
  updateNotificationsState(store, () => []);
}
function cleanNotificationsQueue(store = notificationsStore) {
  updateNotificationsState(
    store,
    (notifications2) => notifications2.slice(0, store.getState().limit)
  );
}
var notifications = {
  show: showNotification,
  hide: hideNotification,
  update: updateNotification,
  clean: cleanNotifications,
  cleanQueue: cleanNotificationsQueue,
  updateState: updateNotificationsState
};

// node_modules/.pnpm/@mantine+notifications@8.1.2_@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+re_5n2krd4nd4wlqquimuyxrjxfk4/node_modules/@mantine/notifications/esm/Notifications.mjs
var import_jsx_runtime65 = __toESM(require_jsx_runtime(), 1);
var import_react79 = __toESM(require_react(), 1);

// node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

// node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/Transition.js
var import_prop_types2 = __toESM(require_prop_types());
var import_react75 = __toESM(require_react());
var import_react_dom3 = __toESM(require_react_dom());

// node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/config.js
var config_default = {
  disabled: false
};

// node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/utils/PropTypes.js
var import_prop_types = __toESM(require_prop_types());
var timeoutsShape = true ? import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.shape({
  enter: import_prop_types.default.number,
  exit: import_prop_types.default.number,
  appear: import_prop_types.default.number
}).isRequired]) : null;
var classNamesShape = true ? import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.shape({
  enter: import_prop_types.default.string,
  exit: import_prop_types.default.string,
  active: import_prop_types.default.string
}), import_prop_types.default.shape({
  enter: import_prop_types.default.string,
  enterDone: import_prop_types.default.string,
  enterActive: import_prop_types.default.string,
  exit: import_prop_types.default.string,
  exitDone: import_prop_types.default.string,
  exitActive: import_prop_types.default.string
})]) : null;

// node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroupContext.js
var import_react74 = __toESM(require_react());
var TransitionGroupContext_default = import_react74.default.createContext(null);

// node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow2(node) {
  return node.scrollTop;
};

// node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/Transition.js
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition2 = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition4, _React$Component);
  function Transition4(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition4.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition4.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom3.default.findDOMNode(this);
          if (node)
            forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom3.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config_default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : import_react_dom3.default.findDOMNode(this);
    if (!exit || config_default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom3.default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ import_react75.default.createElement(TransitionGroupContext_default.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : import_react75.default.cloneElement(import_react75.default.Children.only(children), childProps))
    );
  };
  return Transition4;
}(import_react75.default.Component);
Transition2.contextType = TransitionGroupContext_default;
Transition2.propTypes = true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: import_prop_types2.default.shape({
    current: typeof Element === "undefined" ? import_prop_types2.default.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return import_prop_types2.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: import_prop_types2.default.oneOfType([import_prop_types2.default.func.isRequired, import_prop_types2.default.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: import_prop_types2.default.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: import_prop_types2.default.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: import_prop_types2.default.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: import_prop_types2.default.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: import_prop_types2.default.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: import_prop_types2.default.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener)
      pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: import_prop_types2.default.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: import_prop_types2.default.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types2.default.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: import_prop_types2.default.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: import_prop_types2.default.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: import_prop_types2.default.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: import_prop_types2.default.func
} : {};
function noop() {
}
Transition2.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition2.UNMOUNTED = UNMOUNTED;
Transition2.EXITED = EXITED;
Transition2.ENTERING = ENTERING;
Transition2.ENTERED = ENTERED;
Transition2.EXITING = EXITING;
var Transition_default = Transition2;

// node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroup.js
var import_prop_types3 = __toESM(require_prop_types());
var import_react77 = __toESM(require_react());

// node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/utils/ChildMapping.js
var import_react76 = __toESM(require_react());
function getChildMapping(children, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && (0, import_react76.isValidElement)(child) ? mapFn(child) : child;
  };
  var result = /* @__PURE__ */ Object.create(null);
  if (children)
    import_react76.Children.map(children, function(c) {
      return c;
    }).forEach(function(child) {
      result[child.key] = mapper(child);
    });
  return result;
}
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  }
  var nextKeysPending = /* @__PURE__ */ Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return (0, import_react76.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function(key) {
    var child = children[key];
    if (!(0, import_react76.isValidElement)(child))
      return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, import_react76.isValidElement)(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children[key] = (0, import_react76.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children[key] = (0, import_react76.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, import_react76.isValidElement)(prevChild)) {
      children[key] = (0, import_react76.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children;
}

// node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroup.js
var values2 = Object.values || function(obj) {
  return Object.keys(obj).map(function(k) {
    return obj[k];
  });
};
var defaultProps20 = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping)
      return;
    if (child.props.onExited) {
      child.props.onExited(node);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children = _extends({}, state.children);
        delete children[child.key];
        return {
          children
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children = values2(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component === null) {
      return /* @__PURE__ */ import_react77.default.createElement(TransitionGroupContext_default.Provider, {
        value: contextValue
      }, children);
    }
    return /* @__PURE__ */ import_react77.default.createElement(TransitionGroupContext_default.Provider, {
      value: contextValue
    }, /* @__PURE__ */ import_react77.default.createElement(Component, props, children));
  };
  return TransitionGroup2;
}(import_react77.default.Component);
TransitionGroup.propTypes = true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: import_prop_types3.default.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: import_prop_types3.default.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: import_prop_types3.default.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: import_prop_types3.default.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: import_prop_types3.default.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: import_prop_types3.default.func
} : {};
TransitionGroup.defaultProps = defaultProps20;
var TransitionGroup_default = TransitionGroup;

// node_modules/.pnpm/@mantine+notifications@8.1.2_@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+re_5n2krd4nd4wlqquimuyxrjxfk4/node_modules/@mantine/notifications/esm/get-grouped-notifications/get-grouped-notifications.mjs
"use client";
var positions = [
  "bottom-center",
  "bottom-left",
  "bottom-right",
  "top-center",
  "top-left",
  "top-right"
];
function getGroupedNotifications(notifications2, defaultPosition) {
  return notifications2.reduce(
    (acc, notification) => {
      acc[notification.position || defaultPosition].push(notification);
      return acc;
    },
    positions.reduce((acc, item) => {
      acc[item] = [];
      return acc;
    }, {})
  );
}

// node_modules/.pnpm/@mantine+notifications@8.1.2_@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+re_5n2krd4nd4wlqquimuyxrjxfk4/node_modules/@mantine/notifications/esm/get-notification-state-styles.mjs
"use client";
var transforms = {
  left: "translateX(-100%)",
  right: "translateX(100%)",
  "top-center": "translateY(-100%)",
  "bottom-center": "translateY(100%)"
};
var noTransform = {
  left: "translateX(0)",
  right: "translateX(0)",
  "top-center": "translateY(0)",
  "bottom-center": "translateY(0)"
};
function getNotificationStateStyles({
  state,
  maxHeight,
  position,
  transitionDuration
}) {
  const [vertical, horizontal] = position.split("-");
  const property = horizontal === "center" ? `${vertical}-center` : horizontal;
  const commonStyles = {
    opacity: 0,
    maxHeight,
    transform: transforms[property],
    transitionDuration: `${transitionDuration}ms, ${transitionDuration}ms, ${transitionDuration}ms`,
    transitionTimingFunction: "cubic-bezier(.51,.3,0,1.21), cubic-bezier(.51,.3,0,1.21), linear",
    transitionProperty: "opacity, transform, max-height"
  };
  const inState = {
    opacity: 1,
    transform: noTransform[property]
  };
  const outState = {
    opacity: 0,
    maxHeight: 0,
    transform: transforms[property]
  };
  const transitionStyles = {
    entering: inState,
    entered: inState,
    exiting: outState,
    exited: outState
  };
  return { ...commonStyles, ...transitionStyles[state] };
}

// node_modules/.pnpm/@mantine+notifications@8.1.2_@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+re_5n2krd4nd4wlqquimuyxrjxfk4/node_modules/@mantine/notifications/esm/NotificationContainer.mjs
var import_jsx_runtime64 = __toESM(require_jsx_runtime(), 1);
var import_react78 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+notifications@8.1.2_@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+re_5n2krd4nd4wlqquimuyxrjxfk4/node_modules/@mantine/notifications/esm/get-auto-close/get-auto-close.mjs
"use client";
function getAutoClose(autoClose, notificationAutoClose) {
  if (typeof notificationAutoClose === "number") {
    return notificationAutoClose;
  }
  if (notificationAutoClose === false || autoClose === false) {
    return false;
  }
  return autoClose;
}

// node_modules/.pnpm/@mantine+notifications@8.1.2_@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+re_5n2krd4nd4wlqquimuyxrjxfk4/node_modules/@mantine/notifications/esm/NotificationContainer.mjs
"use client";
var NotificationContainer = (0, import_react78.forwardRef)(
  ({ data: data2, onHide, autoClose, ...others }, ref) => {
    const { autoClose: _autoClose, message, ...notificationProps } = data2;
    const autoCloseDuration = getAutoClose(autoClose, data2.autoClose);
    const autoCloseTimeout = (0, import_react78.useRef)(-1);
    const cancelAutoClose = () => window.clearTimeout(autoCloseTimeout.current);
    const handleHide = () => {
      onHide(data2.id);
      cancelAutoClose();
    };
    const handleAutoClose = () => {
      if (typeof autoCloseDuration === "number") {
        autoCloseTimeout.current = window.setTimeout(handleHide, autoCloseDuration);
      }
    };
    (0, import_react78.useEffect)(() => {
      data2.onOpen?.(data2);
    }, []);
    (0, import_react78.useEffect)(() => {
      handleAutoClose();
      return cancelAutoClose;
    }, [autoCloseDuration]);
    return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
      Notification,
      {
        ...others,
        ...notificationProps,
        onClose: handleHide,
        ref,
        onMouseEnter: cancelAutoClose,
        onMouseLeave: handleAutoClose,
        children: message
      }
    );
  }
);
NotificationContainer.displayName = "@mantine/notifications/NotificationContainer";

// node_modules/.pnpm/@mantine+notifications@8.1.2_@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+re_5n2krd4nd4wlqquimuyxrjxfk4/node_modules/@mantine/notifications/esm/Notifications.module.css.mjs
"use client";
var classes9 = { "root": "m_b37d9ac7", "notification": "m_5ed0edd0" };

// node_modules/.pnpm/@mantine+notifications@8.1.2_@mantine+core@8.1.2_@mantine+hooks@8.1.2_react@18.3.1__@types+re_5n2krd4nd4wlqquimuyxrjxfk4/node_modules/@mantine/notifications/esm/Notifications.mjs
"use client";
var Transition3 = Transition_default;
var defaultProps21 = {
  position: "bottom-right",
  autoClose: 4e3,
  transitionDuration: 250,
  containerWidth: 440,
  notificationMaxHeight: 200,
  limit: 5,
  zIndex: getDefaultZIndex("overlay"),
  store: notificationsStore,
  withinPortal: true
};
var varsResolver13 = createVarsResolver((_, { zIndex, containerWidth }) => ({
  root: {
    "--notifications-z-index": zIndex?.toString(),
    "--notifications-container-width": rem(containerWidth)
  }
}));
var Notifications = factory((_props, ref) => {
  const props = useProps("Notifications", defaultProps21, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    position,
    autoClose,
    transitionDuration,
    containerWidth,
    notificationMaxHeight,
    limit,
    zIndex,
    store,
    portalProps,
    withinPortal,
    ...others
  } = props;
  const theme2 = useMantineTheme();
  const data2 = useNotifications(store);
  const forceUpdate = useForceUpdate();
  const shouldReduceMotion = useReducedMotion();
  const refs = (0, import_react79.useRef)({});
  const previousLength = (0, import_react79.useRef)(0);
  const reduceMotion = theme2.respectReducedMotion ? shouldReduceMotion : false;
  const duration = reduceMotion ? 1 : transitionDuration;
  const getStyles2 = useStyles({
    name: "Notifications",
    classes: classes9,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver13
  });
  (0, import_react79.useEffect)(() => {
    store?.updateState((current) => ({
      ...current,
      limit: limit || 5,
      defaultPosition: position
    }));
  }, [limit, position]);
  useDidUpdate(() => {
    if (data2.notifications.length > previousLength.current) {
      setTimeout(() => forceUpdate(), 0);
    }
    previousLength.current = data2.notifications.length;
  }, [data2.notifications]);
  const grouped = getGroupedNotifications(data2.notifications, position);
  const groupedComponents = positions.reduce(
    (acc, pos) => {
      acc[pos] = grouped[pos].map(({ style: notificationStyle, ...notification }) => /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
        Transition3,
        {
          timeout: duration,
          onEnter: () => refs.current[notification.id].offsetHeight,
          nodeRef: { current: refs.current[notification.id] },
          children: (state) => /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
            NotificationContainer,
            {
              ref: (node) => {
                if (node) {
                  refs.current[notification.id] = node;
                }
              },
              data: notification,
              onHide: (id) => hideNotification(id, store),
              autoClose,
              ...getStyles2("notification", {
                style: {
                  ...getNotificationStateStyles({
                    state,
                    position: pos,
                    transitionDuration: duration,
                    maxHeight: notificationMaxHeight
                  }),
                  ...notificationStyle
                }
              })
            }
          )
        },
        notification.id
      ));
      return acc;
    },
    {}
  );
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(OptionalPortal, {
    withinPortal,
    ...portalProps,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(Box, { ...getStyles2("root"), "data-position": "top-center", ref, ...others, children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(TransitionGroup_default, { children: groupedComponents["top-center"] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(Box, { ...getStyles2("root"), "data-position": "top-left", ...others, children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(TransitionGroup_default, { children: groupedComponents["top-left"] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
        Box,
        {
          ...getStyles2("root", { className: Combination_default.classNames.fullWidth }),
          "data-position": "top-right",
          ...others,
          children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(TransitionGroup_default, { children: groupedComponents["top-right"] })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
        Box,
        {
          ...getStyles2("root", { className: Combination_default.classNames.fullWidth }),
          "data-position": "bottom-right",
          ...others,
          children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(TransitionGroup_default, { children: groupedComponents["bottom-right"] })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(Box, { ...getStyles2("root"), "data-position": "bottom-left", ...others, children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(TransitionGroup_default, { children: groupedComponents["bottom-left"] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(Box, { ...getStyles2("root"), "data-position": "bottom-center", ...others, children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(TransitionGroup_default, { children: groupedComponents["bottom-center"] }) })
    ]
  });
});
Notifications.classes = classes9;
Notifications.displayName = "@mantine/notifications/Notifications";
Notifications.show = notifications.show;
Notifications.hide = notifications.hide;
Notifications.update = notifications.update;
Notifications.clean = notifications.clean;
Notifications.cleanQueue = notifications.cleanQueue;
Notifications.updateState = notifications.updateState;

// app/utils/mantine-config.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/mantine-config.ts"
  );
  import.meta.hot.lastModified = "1751857118599.1404";
}
var billOrange = [
  "#FFF8F4",
  "#FFEEE4",
  "#FFE1D0",
  "#FFC7AA",
  "#FFA57C",
  "#F77E3D",
  "#E5621E",
  "#C24E16",
  "#A03D10",
  "#80300C"
];
var billBlue = [
  "#F3F6FC",
  "#E6EDF9",
  "#D0DDF4",
  "#A9C0E9",
  "#7B9DDB",
  "#4D73C9",
  "#3759AE",
  "#284492",
  "#1C3276",
  "#12235C"
];
var billGreen = [
  "#F1FBF4",
  "#E3F7E9",
  "#D0F1DC",
  "#ADDCBF",
  "#84CA9D",
  "#5AC17F",
  "#44A968",
  "#329152",
  "#21783E",
  "#165F2F"
];
var billYellow = [
  "#FEFBF2",
  "#FEF6E0",
  "#FDF0C8",
  "#FADA8F",
  "#F9C74F",
  "#F0B12A",
  "#DA9A1A",
  "#B67D13",
  "#94640E",
  "#76500A"
];
var billGray = [
  "#F9FAFB",
  "#F5F6F8",
  "#EBEDF0",
  "#DFE2E6",
  "#C5C8CE",
  "#9CA0A8",
  "#8A8A8A",
  "#61656D",
  "#4A4D53",
  "#333333"
];
var billDark = [
  "#C1C2C5",
  "#A6A7AB",
  "#909296",
  "#5C5F66",
  "#373A40",
  "#2C2E33",
  "#25262B",
  "#1A1B1E",
  "#141517",
  "#101113"
];
var theme = createTheme({
  primaryColor: "billOrange",
  primaryShade: 5,
  colors: {
    billOrange,
    billBlue,
    billGreen,
    billYellow,
    billGray,
    billDark
  },
  fontFamily: "inherit",
  components: {
    Button: Button.extend({
      vars: (theme2, props) => {
        if (props.size === "sm") {
          return {
            root: {
              "--button-height": rem(32),
              "--button-padding-x": rem(16)
            }
          };
        }
        if (props.size === "md") {
          return {
            root: {
              "--button-height": rem(40),
              "--button-padding-x": rem(20)
            }
          };
        }
        if (props.size === "lg") {
          return {
            root: {
              "--button-height": rem(48),
              "--button-padding-x": rem(24)
            }
          };
        }
        return {
          root: {
            "--button-height": rem(32),
            "--button-padding-x": rem(16)
          }
        };
      }
    }),
    Input: Input.extend({
      vars: (theme2, props) => {
        if (props.size === "sm") {
          return {
            wrapper: {
              "--input-height": rem(32)
            }
          };
        }
        if (props.size === "md") {
          return {
            wrapper: {
              "--input-height": rem(40)
            }
          };
        }
        return {
          wrapper: {
            "--input-height": rem(32)
          }
        };
      }
    })
  }
});

// app/root.tsx
var import_toast = __toESM(require_toast(), 1);

// app/components/toast/use-toast.tsx
var import_react80 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/toast/use-toast.tsx"
  );
  import.meta.hot.lastModified = "1751857118597.1404";
}
function getColor(type) {
  switch (type) {
    case "success":
      return "ihcGreen";
    case "error":
      return "red";
    case "warning":
      return "yellow";
    default:
      return "ihcBlue";
  }
}
function useToast(toastData) {
  (0, import_react80.useEffect)(() => {
    if (toastData) {
      setTimeout(() => {
        notifications.show({
          title: toastData.title,
          message: toastData.description,
          color: getColor(toastData.type),
          autoClose: toastData.autoClose
          // icon: <Icon {...getIcon(toastData.type)} />,
        });
      }, 0);
    }
  }, [toastData]);
  function showToast(data2, autoClose = 3e3) {
    if (data2) {
      notifications.show({
        title: data2.title,
        message: data2.description,
        color: getColor(data2.type),
        autoClose
        // icon: <Icon {...getIcon(data.type)} />,
      });
    }
  }
  const toasts = {
    error: ({ title, description }, autoClose = 3e3) => showToast({ type: "error", title, description }, autoClose),
    success: ({ title, description }, autoClose = 3e3) => showToast({ type: "success", title, description }, autoClose),
    warning: ({ title, description }, autoClose = 3e3) => showToast({ type: "warning", title, description }, autoClose),
    message: ({ title, description }, autoClose = 3e3) => showToast({ type: "message", title, description }, autoClose)
  };
  return { toasts };
}

// app/components/toast/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/toast/index.ts"
  );
  import.meta.hot.lastModified = "1751857118597.1404";
}

// app/root.tsx
var import_dialog = __toESM(require_dialog(), 1);
var import_react83 = __toESM(require_react(), 1);

// app/context/DialogContext.tsx
var import_react81 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/context/DialogContext.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/context/DialogContext.tsx"
  );
  import.meta.hot.lastModified = "1751857118597.1404";
}
var DialogContext = (0, import_react81.createContext)(void 0);
function DialogProvider({
  children
}) {
  _s();
  const [dialog, setDialog] = (0, import_react81.useState)(null);
  const showDialog = (0, import_react81.useCallback)(({
    title,
    description,
    icon,
    type,
    confirmText = "Okay",
    onConfirm
  }) => {
    setDialog((prevDialog) => {
      if (prevDialog && prevDialog.title === title && prevDialog.description === description && prevDialog.icon === icon && prevDialog.type === type && prevDialog.confirmText === confirmText) {
        return prevDialog;
      }
      return {
        open: true,
        title,
        description,
        icon,
        type,
        confirmText,
        onConfirm
      };
    });
  }, []);
  const closeDialog = () => {
    setDialog(null);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContext.Provider, { value: {
    dialog,
    showDialog,
    closeDialog
  }, children }, void 0, false, {
    fileName: "app/context/DialogContext.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_s(DialogProvider, "1Y+ChLCaRKTKBPYoUAtPGxhV+SM=");
_c = DialogProvider;
function useDialog() {
  _s2();
  const context = (0, import_react81.useContext)(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
}
_s2(useDialog, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
$RefreshReg$(_c, "DialogProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
var _s22 = $RefreshSig$();
var _s32 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function ShowServerToast() {
  _s3();
  const data2 = useLoaderData();
  const toast = data2?.toast ?? null;
  const {
    toasts
  } = useToast();
  const hasShown = (0, import_react83.useRef)(false);
  (0, import_react83.useEffect)(() => {
    if (toast && !hasShown.current) {
      hasShown.current = true;
      toasts[toast?.type ?? "message"]({
        title: toast?.title,
        description: toast?.description ?? ""
      });
      hasShown.current = false;
    }
  }, [toast]);
  return null;
}
_s3(ShowServerToast, "3Kss2FIFx3RvuGdECfLsKiZ9sTA=", false, function() {
  return [useLoaderData, useToast];
});
_c2 = ShowServerToast;
function ShowServerDialog() {
  _s22();
  const data2 = useLoaderData();
  const dialog = data2?.dialog ?? null;
  const {
    showDialog
  } = useDialog();
  (0, import_react83.useEffect)(() => {
    if (dialog) {
      showDialog({
        title: dialog.title,
        description: dialog.description,
        icon: dialog.icon,
        type: dialog.type,
        confirmText: dialog.confirmText
      });
    }
  }, [dialog, showDialog]);
  return null;
}
_s22(ShowServerDialog, "cbOrErK7TQbAzKHQAmA/0box9G0=", false, function() {
  return [useLoaderData, useDialog];
});
_c22 = ShowServerDialog;
function Layout({
  children
}) {
  _s32();
  const navigation = useNavigation();
  (0, import_react83.useEffect)(() => {
    if (navigation.state !== "idle") {
      nprogress.start();
    } else {
      nprogress.complete();
    }
  }, [navigation.state]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", ...mantineHtmlProps, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ColorSchemeScript, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MantineProvider, { theme, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavigationProgress, { zIndex: 9999 }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 139,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Notifications, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 140,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShowServerDialog, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShowServerToast, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 142,
          columnNumber: 13
        }, this),
        children
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 138,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 128,
    columnNumber: 10
  }, this);
}
_s32(Layout, "j3TK6o8XeCQth8rVUdfs21gbd70=", false, function() {
  return [useNavigation];
});
_c3 = Layout;
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 156,
    columnNumber: 10
  }, this);
}
_c4 = App;
var _c2;
var _c22;
var _c3;
var _c4;
$RefreshReg$(_c2, "ShowServerToast");
$RefreshReg$(_c22, "ShowServerDialog");
$RefreshReg$(_c3, "Layout");
$RefreshReg$(_c4, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Layout,
  App as default,
  links
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=/build/root-A4FCITHA.js.map
