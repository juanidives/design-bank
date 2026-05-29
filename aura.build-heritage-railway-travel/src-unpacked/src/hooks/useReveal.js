(function(module, exports, require, React, ReactDOM) {
  'use strict';
  var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  useReveal: () => useReveal
});
module.exports = __toCommonJS(stdin_exports);
var import_react = require('react');
function useReveal() {
  (0, import_react.useEffect)(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting)
          return;
        entry.target.querySelectorAll("[data-anim]").forEach((el) => {
          const d = parseFloat(el.getAttribute("data-anim-delay") || "0") * 1e3;
          setTimeout(() => {
            el.classList.add("is-visible");
          }, d);
        });
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll("[data-animate-section]").forEach((s) => {
      io.observe(s);
    });
    return () => {
      io.disconnect();
    };
  }, []);
}

  return module.exports;
})