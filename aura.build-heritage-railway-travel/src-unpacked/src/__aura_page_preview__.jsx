(function(module, exports, require, React, ReactDOM) {
  'use strict';
  var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => AuraRoutePreview
});
module.exports = __toCommonJS(stdin_exports);
var import_react = __toESM(require('react'));
var import_react_router_dom = require('react-router-dom');
var AppModule = __toESM(require('src/App.jsx'));
var import_index = require('src/index.css');
const PREVIEW_SANDBOX_PATH = "/preview-sandbox-v2.html";
const previewRouterFuture = {
  v7_startTransition: true,
  v7_relativeSplatPath: true
};
const getCurrentBrowserPath = () => `${window.location.pathname || "/"}${window.location.search || ""}${window.location.hash || ""}`;
const normalizePreviewPath = (value) => {
  if (typeof value !== "string" || !value.trim()) {
    return "/";
  }
  const trimmedValue = value.trim();
  return trimmedValue.startsWith("/") ? trimmedValue : `/${trimmedValue}`;
};
const resolvedPagePath = (() => {
  const browserPath = getCurrentBrowserPath();
  if (browserPath && browserPath !== PREVIEW_SANDBOX_PATH) {
    return browserPath;
  }
  return normalizePreviewPath(window.__AURA_PREVIEW_ROUTE_PATH || "/");
})();
const resolvedAppModule = AppModule.default || Object.values(AppModule).find((value) => typeof value === "function");
try {
  if (getCurrentBrowserPath() !== resolvedPagePath) {
    window.history.replaceState({}, "", resolvedPagePath);
  }
} catch (error) {
  console.warn("Unable to set preview path", error);
}
const FallbackApp = () => /* @__PURE__ */ import_react.default.createElement("div", { style: { padding: "24px", fontFamily: "Inter, sans-serif" } }, "The routed app entry does not export a React component.");
const PreviewApp = resolvedAppModule || FallbackApp;
function AuraRoutePreview() {
  const app = /* @__PURE__ */ import_react.default.createElement(PreviewApp, null);
  return /* @__PURE__ */ import_react.default.createElement(import_react_router_dom.MemoryRouter, { future: previewRouterFuture }, app);
}

  return module.exports;
})