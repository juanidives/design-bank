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
  default: () => LeadSection
});
module.exports = __toCommonJS(stdin_exports);
var import_react = __toESM(require('react'));
var import_gsap = __toESM(require('gsap'));
var import_ScrollTrigger = require('gsap/ScrollTrigger');
function LeadSection({
  id,
  bgImage,
  bgClass,
  titleLine1,
  titleLine2,
  text,
  buttonLabel,
  buttonLink,
  images
}) {
  const containerRef = (0, import_react.useRef)(null);
  const imgRefs = [(0, import_react.useRef)(null), (0, import_react.useRef)(null), (0, import_react.useRef)(null)];
  (0, import_react.useEffect)(() => {
    import_gsap.default.registerPlugin(import_ScrollTrigger.ScrollTrigger);
    const mm = import_gsap.default.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const triggerObj = {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true
      };
      if (id === 1) {
        import_gsap.default.fromTo(imgRefs[0].current, { yPercent: 5, scale: 1.15 }, { yPercent: -15, scale: 1.15, ease: "none", scrollTrigger: triggerObj });
        import_gsap.default.fromTo(imgRefs[1].current, { yPercent: 15, scale: 1.15, rotation: -2 }, { yPercent: -25, scale: 1.15, rotation: 2, ease: "none", scrollTrigger: triggerObj });
        import_gsap.default.fromTo(imgRefs[2].current, { yPercent: 25, scale: 1.15 }, { yPercent: -35, scale: 1.15, ease: "none", scrollTrigger: triggerObj });
      } else {
        import_gsap.default.fromTo(imgRefs[0].current, { yPercent: 10, scale: 1.15 }, { yPercent: -20, scale: 1.15, ease: "none", scrollTrigger: triggerObj });
        import_gsap.default.fromTo(imgRefs[1].current, { yPercent: 20, scale: 1.15 }, { yPercent: -30, scale: 1.15, ease: "none", scrollTrigger: triggerObj });
        import_gsap.default.fromTo(imgRefs[2].current, { yPercent: 5, scale: 1.15, rotation: 3 }, { yPercent: -15, scale: 1.15, rotation: -2, ease: "none", scrollTrigger: triggerObj });
      }
    });
    mm.add("(max-width: 767px)", () => {
      const triggerObj = {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      };
      import_gsap.default.fromTo(imgRefs[0].current, { yPercent: 2, scale: 1.1 }, { yPercent: -8, scale: 1.1, ease: "none", scrollTrigger: triggerObj });
      import_gsap.default.fromTo(imgRefs[1].current, { yPercent: 5, scale: 1.1 }, { yPercent: -12, scale: 1.1, ease: "none", scrollTrigger: triggerObj });
      import_gsap.default.fromTo(imgRefs[2].current, { yPercent: 0, scale: 1.1 }, { yPercent: -5, scale: 1.1, ease: "none", scrollTrigger: triggerObj });
    });
    return () => mm.revert();
  }, [id]);
  return /* @__PURE__ */ import_react.default.createElement(
    "section",
    {
      className: `relative flex flex-col justify-center min-h-screen py-24 lg:py-32 px-6 sm:px-12 lg:px-24 overflow-hidden ${bgClass || ""}`,
      ref: containerRef,
      "data-animate-section": ""
    },
    /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: "absolute inset-0 z-0 pointer-events-none",
        style: {
          backgroundImage: bgImage ? `linear-gradient(rgba(12,18,28,0.7), rgba(12,18,28,0.4)), url('${bgImage}')` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }
      }
    ),
    /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute bottom-0 left-0 w-full h-32 lg:h-48 bg-gradient-to-t from-[#f0ebe2] to-transparent z-10 pointer-events-none" }),
    /* @__PURE__ */ import_react.default.createElement("div", { className: "relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch max-w-[1600px] mx-auto w-full gap-12 lg:gap-16" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "w-full lg:w-auto flex justify-start lg:justify-center shrink-0" }, /* @__PURE__ */ import_react.default.createElement(
      "h2",
      {
        className: "text-white font-serif leading-[1.1] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] flex flex-col lg:flex-row lg:[writing-mode:vertical-rl] lg:rotate-180",
        "data-anim": ""
      },
      /* @__PURE__ */ import_react.default.createElement("span", { className: "mb-2 lg:mb-0 lg:ml-4 uppercase tracking-widest" }, titleLine1),
      /* @__PURE__ */ import_react.default.createElement("span", { className: "text-[#c49b4a] italic font-light tracking-normal" }, titleLine2)
    )), /* @__PURE__ */ import_react.default.createElement("div", { className: "w-full lg:flex-1 flex flex-col justify-center lg:max-w-xl xl:max-w-2xl lg:px-8" }, /* @__PURE__ */ import_react.default.createElement(
      "p",
      {
        className: "text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-8 md:mb-12 drop-shadow-md font-light",
        "data-anim": "",
        "data-anim-delay": "0.1",
        dangerouslySetInnerHTML: { __html: text }
      }
    ), /* @__PURE__ */ import_react.default.createElement("div", { "data-anim": "", "data-anim-delay": "0.2" }, /* @__PURE__ */ import_react.default.createElement("a", { className: "c-button__circle--white", href: buttonLink }, /* @__PURE__ */ import_react.default.createElement("span", { className: "label" }, buttonLabel)))), /* @__PURE__ */ import_react.default.createElement("div", { className: "w-full lg:w-[45%] xl:w-[50%] relative h-[450px] sm:h-[600px] lg:h-auto lg:min-h-[700px] xl:min-h-[800px] mt-10 lg:mt-0 flex-shrink-0" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute inset-0 w-full h-full max-w-[500px] lg:max-w-none mx-auto" }, /* @__PURE__ */ import_react.default.createElement(
      "figure",
      {
        className: "absolute top-0 right-0 w-[60%] lg:w-[55%] aspect-[3/4] rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl z-10",
        "data-anim": "",
        "data-anim-delay": "0.1"
      },
      /* @__PURE__ */ import_react.default.createElement(
        "img",
        {
          ref: imgRefs[0],
          src: images[0].src,
          alt: "",
          className: "w-full h-full object-cover transform-gpu"
        }
      )
    ), /* @__PURE__ */ import_react.default.createElement(
      "figure",
      {
        className: "absolute bottom-0 left-0 w-[55%] lg:w-[50%] aspect-[4/5] rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl z-20",
        "data-anim": "",
        "data-anim-delay": "0.2"
      },
      /* @__PURE__ */ import_react.default.createElement(
        "img",
        {
          ref: imgRefs[1],
          src: images[1].src,
          alt: "",
          className: "w-full h-full object-cover transform-gpu"
        }
      )
    ), /* @__PURE__ */ import_react.default.createElement(
      "figure",
      {
        className: "absolute top-[35%] lg:top-[40%] right-[15%] lg:right-[20%] w-[45%] lg:w-[40%] aspect-square rounded-xl lg:rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-30 ring-1 ring-white/20",
        "data-anim": "",
        "data-anim-delay": "0.3"
      },
      /* @__PURE__ */ import_react.default.createElement(
        "img",
        {
          ref: imgRefs[2],
          src: images[2].src,
          alt: "",
          className: "w-full h-full object-cover transform-gpu"
        }
      )
    ))))
  );
}

  return module.exports;
})