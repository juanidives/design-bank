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
  default: () => Departures
});
module.exports = __toCommonJS(stdin_exports);
var import_react = __toESM(require('react'));
function Departures() {
  const journeys = [
    {
      id: 1,
      title: "Spring Blossom Express",
      date: "April 12 \u2013 May 25, 2026",
      desc: "Wind through cherry-lined valleys on our most beloved seasonal route. The Spring Blossom Express departs twice daily during peak bloom, with onboard botanist commentary and a complimentary blossom tea service.",
      img: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=1200&q=80",
      labels: ["Cascade Line"],
      delay: "0.18"
    },
    {
      id: 2,
      title: "Twilight Dining Car",
      date: "Every Friday & Saturday, May \u2013 September",
      desc: "Board our restored 1924 Pullman dining car for a five-course dinner as the sun sets over the Cascade peaks. Local wines paired with Pacific Northwest cuisine by Chef Elena Vasquez.",
      img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
      labels: ["Cascade Line"],
      delay: "0.30"
    },
    {
      id: 3,
      title: "Heritage Engine Workshop",
      date: "Second Saturday of every month",
      desc: "Go behind the scenes at our roundhouse restoration workshop. Learn about steam engine mechanics, see historic locomotives being rebuilt, and meet the engineers who keep a century of heritage alive.",
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
      labels: ["Monthly", "Cascade Line"],
      delay: "0.42"
    }
  ];
  return /* @__PURE__ */ import_react.default.createElement("section", { className: "top-service-event", "data-animate-section": "" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "top-service-event__bg", "aria-hidden": "true" }), /* @__PURE__ */ import_react.default.createElement("h3", { className: "c-heading__h3--black", "data-anim": "", "data-anim-delay": "0" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "en" }, "DEPARTURES"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sub" }, "Upcoming Journeys")), /* @__PURE__ */ import_react.default.createElement("div", { className: "top-service-event__inner" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "top-service-event__contents event" }, /* @__PURE__ */ import_react.default.createElement("h4", { className: "c-heading__h4--black", "data-anim": "", "data-anim-delay": "0.1" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "en" }, "FEATURED ", /* @__PURE__ */ import_react.default.createElement("br", { className: "u-hide-max-tab" }), "JOURNEYS"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sub" }, "Featured Journeys")), /* @__PURE__ */ import_react.default.createElement("div", { className: "top-service-event__body" }, /* @__PURE__ */ import_react.default.createElement("a", { className: "c-button__circle--black", href: "#departures", "data-anim": "", "data-anim-delay": "0.1" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "label" }, "VIEW MORE")), /* @__PURE__ */ import_react.default.createElement("div", { className: "top-service-event__list" }, /* @__PURE__ */ import_react.default.createElement("ul", { className: "c-event-list --square-img js-card-list" }, journeys.map((journey) => /* @__PURE__ */ import_react.default.createElement("li", { key: journey.id, className: "c-card-list-item", "data-anim": "", "data-anim-delay": journey.delay }, /* @__PURE__ */ import_react.default.createElement("figure", { className: "c-card-list-item__img" }, /* @__PURE__ */ import_react.default.createElement("img", { src: journey.img, width: "610", height: "610", alt: "", loading: "lazy" })), /* @__PURE__ */ import_react.default.createElement("dl", { className: "c-card-list-item__content" }, /* @__PURE__ */ import_react.default.createElement("dt", null, /* @__PURE__ */ import_react.default.createElement("p", { className: "c-card-list-item__title", "data-match-group": "title" }, journey.title)), /* @__PURE__ */ import_react.default.createElement("dd", null, /* @__PURE__ */ import_react.default.createElement("time", { className: "c-card-list-item__date", "data-match-group": "date" }, journey.date), /* @__PURE__ */ import_react.default.createElement("p", { className: "c-card-list-item__text", "data-match-group": "text" }, journey.desc), /* @__PURE__ */ import_react.default.createElement("span", { className: "c-card-list-item__note", "data-match-group": "note" }), /* @__PURE__ */ import_react.default.createElement("ul", { className: "c-card-list-item__labels", "aria-label": "Category" }, journey.labels.map((label, i) => /* @__PURE__ */ import_react.default.createElement("li", { key: i, className: "c-label" }, label)))))))))))));
}

  return module.exports;
})