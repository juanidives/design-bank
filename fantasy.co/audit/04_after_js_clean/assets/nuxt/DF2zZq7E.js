import {
  u as g,
  _ as f
} from "./DP4i5pug.js";
import {
  _ as d,
  a as h
} from "./BUD1cr-Q.js";
import {
  u as x,
  b as k,
  a as w,
  w as y,
  o as b,
  n as $,
  c as A,
  d as o,
  e as a,
  f as l,
  g as B
} from "./CZZ0Kowu.js";
import "./BMrMtYDV.js";
import "./CeXuehBR.js";
const P = {
  __name: "[slug]",
  async setup(C) {
    let e, n;
    const r = x(),
      c = k(),
      {
        $dato: i
      } = w(),
      {
        data: s
      } = ([e, n] = y(async () => g(`expertise-${r.params.slug}`, async () => {
        try {
          const {
            page: t
          } = await i.page({
            slug: "expertise",
            variables: {
              slug: r.params.slug
            }
          });
          if (!t) throw l({
            statusCode: 404,
            statusMessage: "Page not found"
          });
          return {
            ...t
          }
        } catch (t) {
          throw console.error(t), l({
            statusCode: 404,
            statusMessage: "Page not found"
          })
        }
      })), e = await e, n(), e);
    return b(async () => {
      await $(), c.setFlag("expertise", !0), c.setThemeDefaults({
        background: "#000",
        text: !1
      })
    }), (t, F) => {
      var u;
      const _ = f,
        m = d,
        p = h;
      return B(), A("article", null, [o(_, {
        seo: a(s).seo
      }, null, 8, ["seo"]), o(m, {
        items: (u = a(s).blocks) == null ? void 0 : u.blocks
      }, null, 8, ["items"]), o(p, {
        light: a(s).lightFoot,
        item: a(s).foot
      }, null, 8, ["light", "item"])])
    }
  }
};
export {
  P as
  default
};
