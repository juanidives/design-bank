import {
  u as z,
  _ as A
} from "./DP4i5pug.js";
import {
  _ as O,
  b as Z,
  a as $,
  h as b,
  r as k,
  o as H,
  i as P,
  c as o,
  g as a,
  j as e,
  d as p,
  k as I,
  F as C,
  l as M,
  e as i,
  m as L,
  p as B,
  t as d,
  T as R,
  q as U,
  s as y,
  v as W,
  n as V,
  u as G,
  w as J,
  f as S
} from "./CZZ0Kowu.js";
import {
  _ as K
} from "./BMrMtYDV.js";
import {
  _ as Q
} from "./DZILRmV9.js";
import "./g3RhK2_o.js";
const X = {
    class: "contact-hero relative"
  },
  Y = {
    class: "relative"
  },
  ee = {
    class: "contact-hero__content relative text-white bg-black z-1"
  },
  te = {
    class: "absolute bottom-40 s:bottom-76 left-0 z-2"
  },
  se = {
    class: "site-max flex flex-col items-start"
  },
  oe = {
    class: "flex gap-x-10"
  },
  ae = ["onClick"],
  ne = {
    class: "relative stack pt-40"
  },
  le = {
    key: 0,
    class: "flex flex-col items-start gap-y-20"
  },
  ie = ["href"],
  ce = ["data-c"],
  re = ["href"],
  me = ["href"],
  ue = {
    class: "footer-1 inline-flex items-end uline"
  },
  de = {
    class: "inline-flex body-large opacity-60"
  },
  fe = {
    class: "uline"
  },
  pe = {
    key: 2,
    class: "flex flex-col items-start gap-y-20"
  },
  he = {
    class: "flex gap-x-10 whitespace-nowrap",
    "data-c": "Visit"
  },
  _e = ["href"],
  ve = {
    key: 0,
    class: "ml-[.2em] mr-[.1em] opacity-60"
  },
  we = {
    class: "relative s:absolute w-full s:max-w-[55rem] m:max-w-[58.6rem] overflow-hidden rounded-t-[.5rem] s:rounded-[1rem] bg-white text-black s:bottom-50 s:right-32 m:right-60 -mt-5 s:mt-0 z-3"
  },
  xe = {
    __name: "index",
    props: {
      item: {
        type: Object,
        required: !0
      }
    },
    setup(s) {
      const c = s,
        h = Z(),
        {
          $scroll: _,
          $event: w,
          $resize: r
        } = $(),
        x = b(() => r == null ? void 0 : r.mouse),
        n = b(() => [c.item.labelContact, c.item.labelFindUs, c.item.labelSocials]),
        l = k(0),
        g = k(!1);
      let m;
      const F = u => {
          m = U(".js-cursor"), m && (m.innerHTML = "Copied"), navigator.clipboard.writeText(u), y.delayedCall(2, () => {
            g.value = !1, m && (m.innerHTML = "Copy")
          })
        },
        T = async () => {
          await V(), _ == null || _.to("#bottom", !0)
        };
      H(() => {
        h.setFlag("light", !0)
      }), P(l, async () => {
        await V(), w.emit("refresh-fc")
      });
      const q = async (u, t) => {
        t(), await V(), w.emit("refresh-fc"), y.from(u, {
          alpha: 0,
          duration: .35,
          ease: "power1"
        })
      }, D = (u, t) => {
        y.set(u, {
          pointerEvents: "none"
        }), y.to(u, {
          alpha: 0,
          duration: .35,
          ease: "power1",
          onComplete: t
        })
      };
      return H(() => {
        h.setForm({
          slug: "contact"
        })
      }), (u, t) => {
        const E = I,
          N = K,
          j = Q;
        return a(), o("div", X, [e("div", Y, [e("div", ee, [p(E, {
          item: s.item.media,
          aspect: !1,
          class: "opacity-50"
        }, null, 8, ["item"]), e("div", te, [e("div", se, [e("div", oe, [(a(!0), o(C, null, M(i(n), (v, f) => (a(), o("button", {
          key: f,
          type: "button",
          onClick: ye => l.value = f,
          class: W(["btn-toggle inline-flex items-center text-15 whitespace-nowrap h-40 px-20 radius-global overflow-hidden backdrop-blur-sm", i(l) === f && "is-active"])
        }, d(v), 11, ae))), 128))]), e("div", ne, [p(R, {
          css: !1,
          onEnter: q,
          onLeave: D,
          mode: "out-in"
        }, {
          default: L(() => [i(l) === 0 ? (a(), o("div", le, [p(N, null, {
            default: L(() => [i(x) ? (a(), o("button", {
              key: 1,
              type: "button",
              onClick: t[0] || (t[0] = v => F(s.item.email)),
              class: "footer-1 inline-flex items-end uline",
              "data-c": i(g) ? "Copied" : "Copy"
            }, [e("span", null, d(s.item.email), 1), t[2] || (t[2] = e("svg", {
              class: "h-[.25em] mb-[.2em] ml-[.1em] w-auto",
              viewBox: "0 0 16 15",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [e("path", {
              class: "fill-current",
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M5.57812 0.25H4.82812V1V4.25H1.57812H0.828125V5V14V14.75H1.57812H10.5781H11.3281V14V10.75H14.5781H15.3281V10V1V0.25H14.5781H5.57812ZM11.3281 9.25H13.8281V1.75H6.32812V4.25H10.5781H11.3281V5V9.25ZM2.32812 13.25V5.75H9.82812V13.25H2.32812Z",
              "fill-opacity": "0.7"
            })], -1))], 8, ce)) : (a(), o("a", {
              key: 0,
              href: `mailto:${s.item.email}`,
              class: "footer-1 inline-flex items-end uline"
            }, [e("span", null, d(s.item.email), 1), t[1] || (t[1] = e("svg", {
              class: "h-[.25em] mb-[.2em] ml-[.1em] w-auto",
              viewBox: "0 0 16 15",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [e("path", {
              class: "fill-current",
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M5.57812 0.25H4.82812V1V4.25H1.57812H0.828125V5V14V14.75H1.57812H10.5781H11.3281V14V10.75H14.5781H15.3281V10V1V0.25H14.5781H5.57812ZM11.3281 9.25H13.8281V1.75H6.32812V4.25H10.5781H11.3281V5V9.25ZM2.32812 13.25V5.75H9.82812V13.25H2.32812Z",
              "fill-opacity": "0.7"
            })], -1))], 8, ie))]),
            _: 1
          }), e("a", {
            href: `tel:${s.item.phone}`,
            class: "inline-flex body-large opacity-60 uline"
          }, d(s.item.phone), 9, re)])) : i(l) === 1 ? (a(), o("a", {
            key: 1,
            href: s.item.gmap,
            target: "_blank",
            class: "flex flex-col items-start gap-y-20",
            "data-c": "Find us"
          }, [e("div", ue, [e("span", null, d(s.item.street), 1), t[3] || (t[3] = e("svg", {
            class: "h-[.5em] w-auto",
            viewBox: "0 0 14 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [e("path", {
            class: "fill-current",
            d: "M3.85625 1H12.5963V9.76H10.5563V4.58L2.63625 12.44L1.15625 10.98L9.01625 3.06H3.85625V1Z",
            "fill-opacity": "0.7"
          })], -1))]), e("div", de, [e("span", fe, d(s.item.city), 1)])], 8, me)) : i(l) === 2 ? (a(), o("div", pe, [e("nav", he, [(a(!0), o(C, null, M(s.item.socials, (v, f) => (a(), o("a", {
            key: f,
            href: v.url,
            class: "footer-1 inline-flex items-end uline"
          }, [e("span", null, d(v.platform), 1), t[4] || (t[4] = e("svg", {
            class: "h-[.5em] ml-[.1em] w-auto",
            viewBox: "0 0 14 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [e("path", {
            class: "fill-current",
            d: "M3.85625 1H12.5963V9.76H10.5563V4.58L2.63625 12.44L1.15625 10.98L9.01625 3.06H3.85625V1Z",
            "fill-opacity": "0.7"
          })], -1)), f < s.item.socials.length - 1 ? (a(), o("span", ve, "/")) : B("", !0)], 8, _e))), 128))]), t[5] || (t[5] = e("p", {
            class: "inline-flex body-large opacity-60"
          }, "Behind the scenes", -1))])) : B("", !0)]),
          _: 1
        })])])])]), e("div", we, [p(j, {
          onSuccess: T
        })]), t[6] || (t[6] = e("div", {
          id: "bottom",
          class: "absolute bottom-0 left-0 h-0 invisible pointer-events-none"
        }, null, -1))])])
      }
    }
  },
  ge = O(xe, [
    ["__scopeId", "data-v-b3498a4b"]
  ]),
  Me = {
    __name: "contact",
    async setup(s) {
      let c, h;
      const _ = G(),
        {
          $dato: w
        } = $(),
        {
          data: r
        } = ([c, h] = J(async () => z("contact", async () => {
          try {
            const {
              page: n
            } = await w.page({
              slug: "contact",
              preview: _.query.preview
            });
            if (!n) throw S({
              statusCode: 404,
              statusMessage: "Page not found"
            });
            return {
              ...n
            }
          } catch (n) {
            throw console.error(n), S({
              statusCode: 404,
              statusMessage: "Page not found"
            })
          }
        })), c = await c, h(), c),
        x = Z();
      return H(async () => {
        var n, l;
        await V(), (n = r.value) != null && n.menu && x.setMenuSec({
          menu: (l = r.value) == null ? void 0 : l.menu
        }), x.setThemeDefaults({
          background: "#000",
          text: !1
        })
      }), (n, l) => {
        const g = A,
          m = ge;
        return a(), o("article", null, [p(g, {
          seo: i(r).seo
        }, null, 8, ["seo"]), p(m, {
          item: i(r).hero
        }, null, 8, ["item"])])
      }
    }
  };
export {
  Me as
  default
};
