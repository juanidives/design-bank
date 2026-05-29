import {
  u as d,
  _ as w
} from "/assets/js/DP4i5pug.js";
import {
  _ as g,
  a as k
} from "/assets/js/BUD1cr-Q.js";
import {
  u as y,
  a as x,
  w as h,
  b,
  o as v,
  n as M,
  c as S,
  d as a,
  e as n,
  f as m,
  g as $
} from "/assets/js/CZZ0Kowu.js";
import "/assets/js/BMrMtYDV.js";
import "/assets/js/CeXuehBR.js";
const P = {
  __name: "index",
  async setup(A) {
    let s, c;
    const _ = y(),
      {
        $dato: i
      } = x(),
      {
        data: t
      } = ([s, c] = h(async () => d("work", async () => {
        try {
          const {
            page: e
          } = await i.page({
            slug: "work",
            preview: _.query.preview
          });
          if (!e) throw m({
            statusCode: 404,
            statusMessage: "Page not found"
          });
          return {
            ...e
          }
        } catch (e) {
          throw console.error(e), m({
            statusCode: 404,
            statusMessage: "Page not found"
          })
        }
      })), s = await s, c(), s),
      r = b();
    return v(async () => {
      var e, o;
      await M(), (e = t.value) != null && e.menu && r.setMenuSec({
        menu: (o = t.value) == null ? void 0 : o.menu
      }), r.setThemeDefaults({
        background: "#000",
        text: !1
      })
    }), (e, o) => {
      var u;
      const l = w,
        p = g,
        f = k;
      return $(), S("article", null, [a(l, {
        seo: n(t).seo
      }, null, 8, ["seo"]), a(p, {
        items: (u = n(t).blocks) == null ? void 0 : u.blocks
      }, null, 8, ["items"]), a(f, {
        item: n(t).foot
      }, null, 8, ["item"])])
    }
  }
};
export {
  P as
  default
};
