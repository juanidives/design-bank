import {
  u as x,
  _ as h
} from "/assets/js/DP4i5pug.js";
import {
  _ as y,
  a as k
} from "/assets/js/BUD1cr-Q.js";
import {
  u as w,
  a as b,
  w as M,
  b as $,
  o as v,
  n as A,
  c as S,
  d as i,
  e as a,
  f as d,
  g as B
} from "/assets/js/CZZ0Kowu.js";
import "/assets/js/BMrMtYDV.js";
import "/assets/js/CeXuehBR.js";
const I = {
  __name: "[slug]",
  async setup(C) {
    let o, m;
    const c = w(),
      {
        $dato: p
      } = b(),
      {
        data: f
      } = ([o, m] = M(async () => x(`article-${c.params.slug}`, async () => {
        try {
          const {
            page: s,
            articles: e
          } = await p.page({
            slug: "article",
            variables: {
              slug: c.params.slug
            }
          });
          if (!s) throw d({
            statusCode: 404,
            statusMessage: "Page not found"
          });
          const n = e.findIndex(g => g.slug === c.params.slug),
            r = e[n + 1] || e[0],
            u = e[n + 2] || e[1];
          return {
            page: s,
            related: [r, u]
          }
        } catch (s) {
          throw console.error(s), d({
            statusCode: 404,
            statusMessage: "Page not found"
          })
        }
      })), o = await o, m(), o),
      {
        page: t = {},
        related: P = []
      } = f.value || {},
      _ = $();
    return v(async () => {
      var s, e;
      await A(), (s = t.value) != null && s.menu && _.setMenuSec({
        menu: (e = t.value) == null ? void 0 : e.menu
      }), _.setThemeDefaults({
        background: "#fff",
        text: !0
      })
    }), (s, e) => {
      var l;
      const n = h,
        r = y,
        u = k;
      return B(), S("article", null, [i(n, {
        seo: a(t).seo,
        type: "article",
        schema: {
          title: a(t).title,
          datePublished: a(t).date,
          dateModified: a(t)._updatedAt
        }
      }, null, 8, ["seo", "schema"]), i(r, {
        items: (l = a(t).blocks) == null ? void 0 : l.blocks
      }, null, 8, ["items"]), i(u, {
        item: a(t).foot
      }, null, 8, ["item"])])
    }
  }
};
export {
  I as
  default
};
