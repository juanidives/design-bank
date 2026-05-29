import {
  u as S,
  _ as B
} from "/assets/js/DP4i5pug.js";
import {
  b as N,
  c as C,
  d as M,
  _ as T,
  a as A
} from "/assets/js/BUD1cr-Q.js";
import {
  b as v,
  r as j,
  o as w,
  n as $,
  S as D,
  s as E,
  L,
  K as b,
  g as k,
  m as P,
  j as g,
  d as a,
  H as V,
  u as F,
  a as q,
  w as z,
  c as H,
  p as I,
  e as c,
  f as h
} from "/assets/js/CZZ0Kowu.js";
import "/assets/js/BMrMtYDV.js";
import "/assets/js/CeXuehBR.js";
const K = {
    class: "relative overflow-hidden z-2"
  },
  O = {
    class: "site-max"
  },
  R = {
    class: "relative h-full-screen"
  },
  U = {
    __name: "Next",
    props: {
      item: {
        type: Object,
        required: !0
      }
    },
    setup(i) {
      const n = v(),
        r = j(null);
      let s;
      return w(async () => {
        await $();
        const l = document.documentElement;
        s = D.create({
          trigger: r.value.$el,
          start: "top center",
          end: "bottom center",
          onToggle: u => {
            u.isActive && (n.setThemeDefaults({
              background: "#fff",
              text: !0
            }), E.set(l, {
              "--theme-background": "#fff"
            }), l.classList.add("is-text-dark"))
          }
        })
      }), L(() => {
        s == null || s.kill()
      }), (l, u) => {
        const t = N,
          m = C,
          _ = M,
          e = V;
        return k(), b(e, {
          ref_key: "el",
          ref: r,
          to: `/work/${i.item.slug}`,
          class: "relative block"
        }, {
          default: P(() => [g("div", K, [g("div", O, [a(t, {
            item: {
              space: "medium"
            }
          }), a(m, {
            item: {
              title: "Next",
              titleCondensed: !0
            }
          }), a(t, {
            item: {
              space: "medium"
            }
          })])]), g("div", R, [a(_, {
            fill: !0,
            item: {
              media: i.item.featuredMedia,
              logo: i.item.logo,
              flip: !0
            },
            class: "!rounded-none"
          }, null, 8, ["item"])])]),
          _: 1
        }, 8, ["to"])
      }
    }
  },
  W = {
    class: "relative"
  },
  Z = {
    __name: "[slug]",
    async setup(i) {
      let n, r;
      const s = F(),
        {
          $dato: l
        } = q(),
        {
          data: u
        } = ([n, r] = z(async () => S(`work-${s.params.slug}`, async () => {
          try {
            const {
              page: e,
              related: o
            } = await l.page({
              slug: "work-slug",
              variables: {
                slug: s.params.slug
              }
            });
            if (!e) throw h({
              statusCode: 404,
              statusMessage: "Page not found"
            });
            const d = o.findIndex(p => p.slug === s.params.slug),
              f = o[d + 1] || o[0];
            return {
              page: e,
              next: f
            }
          } catch (e) {
            throw console.error(e), h({
              statusCode: 404,
              statusMessage: "Page not found"
            })
          }
        })), n = await n, r(), n),
        {
          page: t = {},
          next: m = {}
        } = u.value || {},
        _ = v();
      return w(async () => {
        var e, o;
        await $(), (e = t.value) != null && e.menu && _.setMenuSec({
          menu: (o = t.value) == null ? void 0 : o.menu
        }), _.setThemeDefaults({
          background: "#000",
          text: !1
        })
      }), (e, o) => {
        var x;
        const d = B,
          f = T,
          p = U,
          y = A;
        return k(), H("article", W, [a(d, {
          seo: c(t).seo
        }, null, 8, ["seo"]), a(f, {
          items: (x = c(t).blocks) == null ? void 0 : x.blocks
        }, null, 8, ["items"]), c(m) && c(t).next ? (k(), b(p, {
          key: 0,
          item: c(m)
        }, null, 8, ["item"])) : I("", !0), a(y, {
          rounded: !1,
          item: c(t).foot
        }, null, 8, ["item"])])
      }
    }
  };
export {
  Z as
  default
};
