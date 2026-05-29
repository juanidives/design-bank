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
  default: () => JourneyReports
});
module.exports = __toCommonJS(stdin_exports);
var import_react = __toESM(require('react'));
function JourneyReports() {
  const reports = [
    {
      id: 1,
      vol: "Vol.01",
      season: "October 2025 \u2014 Summit Route",
      title: "Autumn Foliage Journey",
      text: "Two days of autumn splendor along our Summit Route \u2014 golden maples, crisp mountain air, and a complimentary cider service as the valley turns amber below.",
      img: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&w=1000&q=80",
      delay: "0.12"
    },
    {
      id: 2,
      vol: "Vol.02",
      season: "August 2025 \u2014 Roundhouse, Cascade Depot",
      title: "Engineer for a Day",
      text: "Hands-on with our 1928 Baldwin locomotive \u2014 fire the boiler, read the gauges, sound the whistle. A full morning inside a living museum of steam and steel.",
      img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1000&q=80",
      delay: "0.24"
    },
    {
      id: 3,
      vol: "Vol.03",
      season: "September 2025 \u2014 Cascade Dining Car",
      title: "Harvest Table",
      text: "Thirty local producers. Five courses. One restored Pullman dining car rolling at sixty miles per hour through the harvest valley as the light fades over the peaks.",
      img: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1000&q=80",
      delay: "0.36"
    }
  ];
  return /* @__PURE__ */ import_react.default.createElement("section", { className: "top-event-report top-event-report--remix", "data-animate-section": "" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "top-event-report__bg", "aria-hidden": "true" }), /* @__PURE__ */ import_react.default.createElement("div", { className: "top-event-report__gradient" }), /* @__PURE__ */ import_react.default.createElement("div", { className: "report-remix__wrap" }, /* @__PURE__ */ import_react.default.createElement("header", { className: "report-remix__header", "data-anim": "", "data-anim-delay": "0" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "report-remix__eyebrow" }, "Field Notes"), /* @__PURE__ */ import_react.default.createElement("h3", { className: "report-remix__title" }, "Journey Reports"), /* @__PURE__ */ import_react.default.createElement("div", { className: "report-remix__rule" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "report-remix__grid" }, reports.map((report) => /* @__PURE__ */ import_react.default.createElement("a", { href: "#reports", key: report.id, className: "report-remix__card", "data-anim": "rise", "data-anim-delay": report.delay }, /* @__PURE__ */ import_react.default.createElement("div", { className: "report-remix__card-img" }, /* @__PURE__ */ import_react.default.createElement("figure", null, /* @__PURE__ */ import_react.default.createElement("img", { src: report.img, alt: report.title, loading: "lazy" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "report-remix__vol" }, report.vol)), /* @__PURE__ */ import_react.default.createElement("div", { className: "report-remix__card-body" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "report-remix__card-season" }, report.season), /* @__PURE__ */ import_react.default.createElement("h4", { className: "report-remix__card-title" }, report.title), /* @__PURE__ */ import_react.default.createElement("p", { className: "report-remix__card-text" }, report.text), /* @__PURE__ */ import_react.default.createElement("span", { className: "report-remix__read" }, "Read Field Report"))))), /* @__PURE__ */ import_react.default.createElement("div", { className: "report-remix__cta", "data-anim": "", "data-anim-delay": "0.46" }, /* @__PURE__ */ import_react.default.createElement("a", { className: "c-button__circle--black", href: "#reports" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "label" }, "ALL REPORTS")))));
}

  return module.exports;
})