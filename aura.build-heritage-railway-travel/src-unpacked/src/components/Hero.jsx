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
  default: () => Hero
});
module.exports = __toCommonJS(stdin_exports);
var import_react = __toESM(require('react'));
var import_gsap = __toESM(require('gsap'));
var import_ScrollTrigger = require('gsap/ScrollTrigger');
function Hero() {
  const containerRef = (0, import_react.useRef)(null);
  const wave2Ref = (0, import_react.useRef)(null);
  const wave1Ref = (0, import_react.useRef)(null);
  const buildingRef = (0, import_react.useRef)(null);
  const circleRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    import_gsap.default.registerPlugin(import_ScrollTrigger.ScrollTrigger);
    const mm = import_gsap.default.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const o = {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      };
      import_gsap.default.fromTo(wave2Ref.current, { yPercent: -10 }, { yPercent: 35, ease: "none", scrollTrigger: o });
      import_gsap.default.fromTo(wave1Ref.current, { yPercent: -5 }, { yPercent: 20, ease: "none", scrollTrigger: o });
      import_gsap.default.fromTo(buildingRef.current, { yPercent: -2 }, { yPercent: 6, ease: "none", scrollTrigger: o });
      import_gsap.default.fromTo(circleRef.current, { yPercent: 0 }, { yPercent: 5, ease: "none", scrollTrigger: o });
    });
    return () => mm.revert();
  }, []);
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("section", { className: "top-intro" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "top-intro__mask" }, /* @__PURE__ */ import_react.default.createElement("div", null), /* @__PURE__ */ import_react.default.createElement("div", null), /* @__PURE__ */ import_react.default.createElement("div", null), /* @__PURE__ */ import_react.default.createElement("div", null), /* @__PURE__ */ import_react.default.createElement("div", null))), /* @__PURE__ */ import_react.default.createElement("section", { className: "top-mv js-top-mv", ref: containerRef }, /* @__PURE__ */ import_react.default.createElement("picture", null, /* @__PURE__ */ import_react.default.createElement("source", { srcSet: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80", media: "(min-width: 768px)", width: "3200", height: "2000" }), /* @__PURE__ */ import_react.default.createElement("img", { className: "base wave2 js-wave2", ref: wave2Ref, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80", width: "1125", height: "1820", alt: "" })), /* @__PURE__ */ import_react.default.createElement("picture", null, /* @__PURE__ */ import_react.default.createElement("source", { srcSet: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80", media: "(min-width: 768px)", width: "3200", height: "2000" }), /* @__PURE__ */ import_react.default.createElement("img", { className: "land js-land", src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80", width: "1125", height: "1820", alt: "" })), /* @__PURE__ */ import_react.default.createElement("picture", null, /* @__PURE__ */ import_react.default.createElement("source", { srcSet: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80", media: "(min-width: 768px)", width: "3200", height: "2000" }), /* @__PURE__ */ import_react.default.createElement("img", { className: "wave1 js-wave1", ref: wave1Ref, src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80", width: "1125", height: "1820", alt: "" })), /* @__PURE__ */ import_react.default.createElement("picture", null, /* @__PURE__ */ import_react.default.createElement("source", { srcSet: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80", media: "(min-width: 768px)", width: "3200", height: "2000" }), /* @__PURE__ */ import_react.default.createElement("img", { className: "circle js-circle", ref: circleRef, src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80", width: "1125", height: "1820", alt: "" })), /* @__PURE__ */ import_react.default.createElement("picture", null, /* @__PURE__ */ import_react.default.createElement("source", { srcSet: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80", media: "(min-width: 768px)", width: "3200", height: "2000" }), /* @__PURE__ */ import_react.default.createElement("img", { className: "building js-building", ref: buildingRef, src: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80", width: "1125", height: "1820", alt: "" })), /* @__PURE__ */ import_react.default.createElement("picture", null, /* @__PURE__ */ import_react.default.createElement("source", { srcSet: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80", media: "(min-width: 768px)", width: "3200", height: "2000" }), /* @__PURE__ */ import_react.default.createElement("img", { className: "people js-people", src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80", width: "1125", height: "1820", alt: "" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-content" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-gradient-mask" }), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-panel" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "hero-eyebrow" }, "Est. 1924 \u2014 Cascade Mountains"), /* @__PURE__ */ import_react.default.createElement("p", { className: "hero-headline" }, "Journey", /* @__PURE__ */ import_react.default.createElement("br", null), "Through", /* @__PURE__ */ import_react.default.createElement("br", null), "the Cascades"), /* @__PURE__ */ import_react.default.createElement("p", { className: "hero-sub" }, "Slow trains through wild country.", /* @__PURE__ */ import_react.default.createElement("br", null), "Scenic routes across timeless peaks."), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-rule" }), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-stats" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-stat" }, /* @__PURE__ */ import_react.default.createElement("strong", null, "342"), /* @__PURE__ */ import_react.default.createElement("span", null, "Miles of Track")), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-stat" }, /* @__PURE__ */ import_react.default.createElement("strong", null, "18"), /* @__PURE__ */ import_react.default.createElement("span", null, "Scenic Stations")), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-stat" }, /* @__PURE__ */ import_react.default.createElement("strong", null, "1924"), /* @__PURE__ */ import_react.default.createElement("span", null, "Est."))), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-actions" }, /* @__PURE__ */ import_react.default.createElement("a", { href: "#journeys", className: "hero-btn-primary" }, "Book Your Journey"), /* @__PURE__ */ import_react.default.createElement("a", { href: "#routes", className: "hero-btn-ghost" }, "View Routes")), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-departure" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "departure-dot" }), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("span", { className: "departure-tag" }, "Next Departure"), /* @__PURE__ */ import_react.default.createElement("span", { className: "departure-name" }, "Cascade Summit Express")), /* @__PURE__ */ import_react.default.createElement("span", { className: "departure-time" }, "09:15"))))));
}

  return module.exports;
})