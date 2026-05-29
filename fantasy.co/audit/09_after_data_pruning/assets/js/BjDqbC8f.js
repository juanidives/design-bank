import {
  u as p,
  _ as f
} from "/assets/js/DP4i5pug.js";
import {
  _ as d,
  a as g
} from "/assets/js/BUD1cr-Q.js";
import {
  b as x,
  a as h,
  w as k,
  o as w,
  n as y,
  c as b,
  d as a,
  e as o,
  f as i,
  g as $
} from "/assets/js/CZZ0Kowu.js";
import "/assets/js/BMrMtYDV.js";
import "/assets/js/CeXuehBR.js";
const E = {
  __name: "index",
  async setup(A) {
    let t, n;
    const c = x(),
      {
        $dato: u
      } = h(),
      {
        data: s
      } = ([t, n] = k(async () => p("expertise-index", async () => {
        try {
          const {
            page: e
          } = await u.page({
            slug: "expertise-index"
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
      })), t = await t, n(), t);
    return w(async () => {
      await y(), c.setFlag("expertise", !0), c.setThemeDefaults({
        background: "#000",
        text: !1
      })
    }), (e, B) => {
      var r;
      const _ = f,
        l = d,
        m = g;
      return $(), b("article", null, [a(_, {
        seo: o(s).seo
      }, null, 8, ["seo"]), a(l, {
        items: (r = o(s).blocks) == null ? void 0 : r.blocks
      }, null, 8, ["items"]), a(m, {
        light: o(s).lightFoot,
        item: o(s).foot
      }, null, 8, ["light", "item"])])
    }
  }
};
export {
  E as
  default
};
