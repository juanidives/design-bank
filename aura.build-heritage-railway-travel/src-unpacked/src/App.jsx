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
  default: () => App
});
module.exports = __toCommonJS(stdin_exports);
var import_react = __toESM(require('react'));
var import_lenis = __toESM(require('lenis'));
var import_useReveal = require('src/hooks/useReveal.js');
var import_Header = __toESM(require('src/components/Header.jsx'));
var import_Hero = __toESM(require('src/components/Hero.jsx'));
var import_LeadSection = __toESM(require('src/components/LeadSection.jsx'));
var import_Departures = __toESM(require('src/components/Departures.jsx'));
var import_JourneyReports = __toESM(require('src/components/JourneyReports.jsx'));
var import_Footer = __toESM(require('src/components/Footer.jsx'));
function App() {
  (0, import_useReveal.useReveal)();
  (0, import_react.useEffect)(() => {
    const lenis = new import_lenis.default({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "l-main-container" }, /* @__PURE__ */ import_react.default.createElement(import_Header.default, null), /* @__PURE__ */ import_react.default.createElement("main", null, /* @__PURE__ */ import_react.default.createElement(import_Hero.default, null), /* @__PURE__ */ import_react.default.createElement(
    import_LeadSection.default,
    {
      id: 1,
      bgImage: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80",
      titleLine1: "The Story",
      titleLine2: "of the Line",
      text: "For nearly a century, Traverse Railway Co. has connected the coastal lowlands to the high mountain passes.<br/><br/>Built by dreamers and maintained by generations of engineers, our tracks wind through some of the most pristine and inaccessible wilderness in the Pacific Northwest.",
      buttonLabel: "OUR HERITAGE",
      buttonLink: "#heritage",
      images: [
        { src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=80", className: "people-01", width: 400, height: 500 },
        { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80", className: "people-05", width: 400, height: 500 },
        { src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80", className: "people-02", width: 400, height: 500 }
      ]
    }
  ), /* @__PURE__ */ import_react.default.createElement(
    import_LeadSection.default,
    {
      id: 2,
      bgClass: "top-lead-2__bg",
      bgImage: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80",
      titleLine1: "Restored",
      titleLine2: "Elegance",
      text: "Step aboard our meticulously restored 1920s Pullman cars.<br/><br/>From the polished mahogany panelling to the original brass fixtures, every detail transports you to the golden age of rail travel while providing modern comfort.",
      buttonLabel: "OUR FLEET",
      buttonLink: "#fleet",
      images: [
        { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80", className: "lead2-a", width: 400, height: 500 },
        { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80", className: "lead2-b", width: 400, height: 500 },
        { src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80", className: "lead2-c", width: 400, height: 500 }
      ]
    }
  ), /* @__PURE__ */ import_react.default.createElement(import_Departures.default, null), /* @__PURE__ */ import_react.default.createElement(import_JourneyReports.default, null), /* @__PURE__ */ import_react.default.createElement("section", { className: "top-bottom-contents__wrap" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "l-inner-padding" }, /* @__PURE__ */ import_react.default.createElement("ul", { className: "c-induction__list" }, /* @__PURE__ */ import_react.default.createElement("li", { className: "c-induction__list-item" }, /* @__PURE__ */ import_react.default.createElement("a", { href: "#charters" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "c-induction__title" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "en" }, "CHARTERS"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sub" }, "Private Events & Charters")), /* @__PURE__ */ import_react.default.createElement("div", { className: "c-induction__bk" }, /* @__PURE__ */ import_react.default.createElement("img", { src: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=1200&q=80", alt: "Train carriage" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "c-button__rotate--en--white" }, /* @__PURE__ */ import_react.default.createElement("span", null, /* @__PURE__ */ import_react.default.createElement("span", { className: "label", "data-hover": "Inquire Now" }, "Inquire Now"))))), /* @__PURE__ */ import_react.default.createElement("li", { className: "c-induction__list-item" }, /* @__PURE__ */ import_react.default.createElement("a", { href: "#dining" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "c-induction__title" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "en" }, "DINING"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sub" }, "Culinary Journeys")), /* @__PURE__ */ import_react.default.createElement("div", { className: "c-induction__bk" }, /* @__PURE__ */ import_react.default.createElement("img", { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80", alt: "Dining experience" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "c-button__rotate--en--white" }, /* @__PURE__ */ import_react.default.createElement("span", null, /* @__PURE__ */ import_react.default.createElement("span", { className: "label", "data-hover": "View Menus" }, "View Menus"))))), /* @__PURE__ */ import_react.default.createElement("li", { className: "c-induction__list-item" }, /* @__PURE__ */ import_react.default.createElement("a", { href: "#fleet" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "c-induction__title" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "en" }, "FLEET"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sub" }, "Our Historic Trains")), /* @__PURE__ */ import_react.default.createElement("div", { className: "c-induction__bk" }, /* @__PURE__ */ import_react.default.createElement("img", { src: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80", alt: "Historic train fleet" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "c-button__rotate--en--white" }, /* @__PURE__ */ import_react.default.createElement("span", null, /* @__PURE__ */ import_react.default.createElement("span", { className: "label", "data-hover": "Explore Fleet" }, "Explore Fleet"))))))))), /* @__PURE__ */ import_react.default.createElement(import_Footer.default, null));
}

  return module.exports;
})