import {
  u as g,
  _ as w
} from "./DP4i5pug.js";
import {
  u as x,
  _ as y,
  a as h
} from "./BUD1cr-Q.js";
import {
  u as k,
  a as S,
  w as b,
  b as v,
  o as M,
  n as $,
  c as A,
  d as a,
  e as n,
  f as i,
  g as B
} from "./CZZ0Kowu.js";
import "./BMrMtYDV.js";
import "./CeXuehBR.js";
const q = {
  __name: "index",
  async setup(C) {
    let s, c;
    const m = k(),
      {
        $dato: l
      } = S(),
      {
        set: _
      } = x(),
      {
        data: t
      } = ([s, c] = b(async () => g("article-index", async () => {
        try {
          const {
            page: e
          } = await l.page({
            slug: "article-index",
            preview: m.query.preview
          });
          if (!e) throw i({
            statusCode: 404,
            statusMessage: "Page not found"
          });
          return {
            ...e
          }
        } catch (e) {
          throw console.error(e), i({
            statusCode: 404,
            statusMessage: "Page not found"
          })
        }
      })), s = await s, c(), s),
      r = v();
    return M(async () => {
      var e, o;
      await $(), (e = t.value) != null && e.menu && r.setMenuSec({
        menu: (o = t.value) == null ? void 0 : o.menu
      }), r.setThemeDefaults({
        background: "#fff",
        text: !0
      }), _()
    }), (e, o) => {
      var u;
      const p = w,
        f = y,
        d = h;
      return B(), A("article", null, [a(p, {
        seo: n(t).seo
      }, null, 8, ["seo"]), a(f, {
        items: (u = n(t).blocks) == null ? void 0 : u.blocks
      }, null, 8, ["items"]), a(d, {
        item: n(t).foot
      }, null, 8, ["item"])])
    }
  }
};
export {
  q as
  default
};
