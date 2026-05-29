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
  default: () => Header
});
module.exports = __toCommonJS(stdin_exports);
var import_react = __toESM(require('react'));
function Header() {
  const [isOpen, setIsOpen] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);
  return /* @__PURE__ */ import_react.default.createElement("header", { id: "js-header", className: "l-header", "data-page": "top" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "l-header__inner" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "l-header__title" }, /* @__PURE__ */ import_react.default.createElement("a", { href: "/" }, /* @__PURE__ */ import_react.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "220", height: "50" }, /* @__PURE__ */ import_react.default.createElement("text", { y: "35", fontFamily: "DM Serif Display,Georgia,serif", fontSize: "18", fill: "#1c2230", letterSpacing: "2" }, "TRAVERSE")))), /* @__PURE__ */ import_react.default.createElement("div", { className: "l-header__items" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "l-header__link u-hide-max-tab" }, /* @__PURE__ */ import_react.default.createElement("a", { className: "c-button__rotate--en", href: "#", rel: "noopener noreferrer", target: "_blank" }, /* @__PURE__ */ import_react.default.createElement("span", null, /* @__PURE__ */ import_react.default.createElement("span", { className: "label", "data-hover": "Plan Your Journey" }, "Plan Your Journey"))), /* @__PURE__ */ import_react.default.createElement("a", { className: "c-button__rotate--en", href: "#", rel: "noopener noreferrer", target: "_blank" }, /* @__PURE__ */ import_react.default.createElement("span", null, /* @__PURE__ */ import_react.default.createElement("span", { className: "label", "data-hover": "Book Tickets" }, "Book Tickets")))), /* @__PURE__ */ import_react.default.createElement("div", { className: "l-header__english" }, /* @__PURE__ */ import_react.default.createElement("a", { className: "c-button__en", href: "#", target: "_blank", rel: "noopener noreferrer" }, "TICKETS")), /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      className: "l-header__open-button",
      "aria-label": "Open menu",
      "aria-expanded": isOpen,
      onClick: () => setIsOpen(true)
    },
    /* @__PURE__ */ import_react.default.createElement("span", { className: "l-header__open-line" }),
    /* @__PURE__ */ import_react.default.createElement("span", { className: "l-header__open-line" }),
    /* @__PURE__ */ import_react.default.createElement("span", { className: "l-header__open-line" })
  ))), /* @__PURE__ */ import_react.default.createElement("div", { className: `l-header__nav ${isOpen ? "is-open" : "is-close"}`, "data-lenis-prevent": "" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "l-header__nav-inner" }, /* @__PURE__ */ import_react.default.createElement("nav", null, /* @__PURE__ */ import_react.default.createElement("ul", { className: "l-header__nav-list" }, /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", { href: "/", onClick: () => setIsOpen(false) }, /* @__PURE__ */ import_react.default.createElement("span", { className: "en" }, "HOME"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sub" }, "Home"))), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", { href: "#story", onClick: () => setIsOpen(false) }, /* @__PURE__ */ import_react.default.createElement("span", { className: "en" }, "OUR STORY"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sub" }, "Our Story"))), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", { href: "#departures", onClick: () => setIsOpen(false) }, /* @__PURE__ */ import_react.default.createElement("span", { className: "en" }, "DEPARTURES"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sub" }, "Departures"))), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", { href: "#journeys", onClick: () => setIsOpen(false) }, /* @__PURE__ */ import_react.default.createElement("span", { className: "en" }, "JOURNEYS"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sub" }, "Journeys & Experiences"))), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", { href: "#stories", onClick: () => setIsOpen(false) }, /* @__PURE__ */ import_react.default.createElement("span", { className: "en" }, "STORIES"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sub" }, "Passenger Stories"))), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", { href: "#heritage", onClick: () => setIsOpen(false) }, /* @__PURE__ */ import_react.default.createElement("span", { className: "en" }, "HERITAGE"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sub" }, "Safety & Heritage"))))), /* @__PURE__ */ import_react.default.createElement("div", { className: "l-header__link u-hide-min-tab" }, /* @__PURE__ */ import_react.default.createElement("a", { className: "c-button__rotate--en", href: "#", rel: "noopener noreferrer", target: "_blank" }, /* @__PURE__ */ import_react.default.createElement("span", null, /* @__PURE__ */ import_react.default.createElement("span", { className: "label", "data-hover": "Plan Your Journey" }, "Plan Your Journey"))), /* @__PURE__ */ import_react.default.createElement("a", { className: "c-button__rotate--en", href: "#", rel: "noopener noreferrer", target: "_blank" }, /* @__PURE__ */ import_react.default.createElement("span", null, /* @__PURE__ */ import_react.default.createElement("span", { className: "label", "data-hover": "Book Tickets" }, "Book Tickets"))))), /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      className: "l-header__close-button",
      "aria-label": "Close menu",
      onClick: () => setIsOpen(false)
    },
    /* @__PURE__ */ import_react.default.createElement("span", { className: "l-header__close-line" }),
    /* @__PURE__ */ import_react.default.createElement("span", { className: "l-header__close-line" })
  )));
}

  return module.exports;
})