import {
  Link,
  useLocation
} from "/build/_shared/chunk-U4WKH6V6.js";
import "/build/_shared/chunk-56LDNGDG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-PMI65YMG.js";
import {
  createHotContext
} from "/build/_shared/chunk-BV6SDE2I.js";
import "/build/_shared/chunk-4JLKO6E3.js";
import "/build/_shared/chunk-2Q7FBYOG.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/$.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/$.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/$.tsx"
  );
  import.meta.hot.lastModified = "1751857118598.1404";
}
function NotFound() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorBoundary, {}, void 0, false, {
    fileName: "app/routes/$.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = NotFound;
function ErrorBoundary() {
  _s();
  const location = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: [
      "Up the page not found. ",
      location.pathname
    ] }, void 0, true, {
      fileName: "app/routes/$.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "text-body-md underline", children: "Back to home" }, void 0, false, {
      fileName: "app/routes/$.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/$.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s(ErrorBoundary, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "NotFound");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  NotFound as default
};
//# sourceMappingURL=/build/routes/$-E6QVPCWO.js.map
