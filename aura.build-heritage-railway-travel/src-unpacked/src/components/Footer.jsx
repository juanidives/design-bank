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
  default: () => Footer
});
module.exports = __toCommonJS(stdin_exports);
var import_react = __toESM(require('react'));
function Footer() {
  return /* @__PURE__ */ import_react.default.createElement("footer", { className: "l-footer" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "l-footer__inner" }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("a", { href: "/" }, /* @__PURE__ */ import_react.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "220", height: "50" }, /* @__PURE__ */ import_react.default.createElement("text", { y: "35", fontFamily: "DM Serif Display,Georgia,serif", fontSize: "18", fill: "#ffffff", letterSpacing: "2" }, "TRAVERSE"))), /* @__PURE__ */ import_react.default.createElement("ul", { className: "l-footer__nav-list" }, /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", { href: "#story" }, "Our Story")), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", { href: "#journeys" }, "Journeys")), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", { href: "#fleet" }, "Our Fleet")), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", { href: "#dining" }, "Dining Car")), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", { href: "#charters" }, "Private Charters")), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", { href: "#faq" }, "FAQ")))), /* @__PURE__ */ import_react.default.createElement("div", { className: "l-footer__contact" }, /* @__PURE__ */ import_react.default.createElement("a", { className: "c-button__rotate--en", href: "#contact" }, /* @__PURE__ */ import_react.default.createElement("span", null, /* @__PURE__ */ import_react.default.createElement("span", { className: "label", "data-hover": "Contact Us" }, "Contact Us"))))), /* @__PURE__ */ import_react.default.createElement("div", { className: "l-footer__info" }, /* @__PURE__ */ import_react.default.createElement("ul", { className: "l-footer__link-list" }, /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", { href: "#privacy" }, "Privacy Policy")), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", { href: "#terms" }, "Terms & Conditions")), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", { href: "#accessibility" }, "Accessibility"))), /* @__PURE__ */ import_react.default.createElement("p", { className: "l-footer__copy" }, "\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " Traverse Railway Co. All rights reserved.")));
}

  return module.exports;
})