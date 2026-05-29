import {
  u as W,
  _ as J
} from "./DP4i5pug.js";
import {
  _ as Q,
  a as X
} from "./BUD1cr-Q.js";
import {
  _ as Y,
  b as H,
  r as b,
  x as Z,
  h as S,
  o as V,
  n as F,
  y as ee,
  c,
  g as u,
  z as R,
  e as s,
  d as p,
  j as a,
  k as te,
  m as z,
  p as L,
  A as N,
  v as $,
  B as se,
  C as ae,
  D as oe,
  t as ne,
  E as re,
  T as D,
  F as le,
  l as ue,
  G as ie,
  H as ce,
  I as de,
  s as pe,
  J as E,
  u as me,
  a as fe,
  w as ye,
  K as be,
  f as _e
} from "./CZZ0Kowu.js";
import {
  s as ge
} from "./g3RhK2_o.js";
import "./BMrMtYDV.js";
import "./CeXuehBR.js";
const ve = {
    key: 2,
    class: "fixed inset-0 flex items-center justify-center z-5"
  },
  xe = {
    key: 0,
    ref: "form",
    class: "relative flex flex-col px-24 py-40 s:p-40 z-2"
  },
  ke = ["aria-invalid", "aria-describedby"],
  we = {
    key: 0,
    id: "pass-error",
    role: "alert"
  },
  he = {
    class: "flex flex-col s:flex-row s:items-center s:justify-start gap-x-20 gap-y-15 mt-15 s:mt-40 relative z-2"
  },
  Se = {
    key: 1,
    class: "relative flex flex-col px-24 py-40 s:p-40 z-2"
  },
  qe = ["name", "onInput", "required"],
  Te = ["name", "type", "onInput", "required"],
  $e = ["for", "innerHTML"],
  ze = {
    class: "flex flex-col s:flex-row s:items-center s:justify-start gap-x-20 gap-y-15 mt-15 s:mt-40 relative z-2"
  },
  Ie = {
    key: 1,
    class: "body-normal pt-65"
  },
  Be = {
    class: "absolute bottom-20 inset-x-0 flex px-24 justify-between s:justify-center gap-x-10 body-small text-gray-1 s:text-white/50 z-5"
  },
  Ce = {
    __name: "PassGate",
    props: {
      page: {
        type: Object,
        default: null
      }
    },
    setup(I) {
      const d = I,
        q = E(),
        g = H(),
        f = b(null),
        v = b(null),
        i = b(!1),
        m = b(""),
        n = b(""),
        y = b(!1),
        _ = Z({}),
        T = b(!1),
        B = S(() => {
          var t, e, r, l;
          return !!((e = (t = d.page) == null ? void 0 : t.protect) != null && e.enable && ((l = (r = d.page) == null ? void 0 : r.protect) != null && l.password))
        }),
        x = S(() => {
          var t;
          return (t = d.page) != null && t.id ? `pass-${d.page.id}` : null
        }),
        k = S(() => {
          var t, e, r;
          return ((r = (e = (t = g.forms) == null ? void 0 : t.find(l => l.slug === "pass-request")) == null ? void 0 : e.form) == null ? void 0 : r.items) || []
        }),
        G = S(() => k.value.filter(t => t.required).every(t => {
          var e;
          return (e = _[t.name]) == null ? void 0 : e.trim()
        })),
        M = S(() => q.public.USE_STORAGE);

      function O() {
        if (!(!x.value || !M.value)) try {
          i.value = !!localStorage.getItem(x.value)
        } catch {}
      }

      function U() {
        var e, r;
        n.value = "";
        const t = (r = (e = d.page) == null ? void 0 : e.protect) == null ? void 0 : r.password;
        if (t) {
          if (m.value !== t) {
            n.value = "Incorrect password";
            return
          }
          if (M.value) try {
            localStorage.setItem(x.value, "1")
          } catch {}
          i.value = !0
        }
      }
      async function K(t) {
        var l;
        const e = Object.fromEntries(new FormData(t.target).entries());
        if (e.website) return;
        delete e.website;
        const r = (l = document.cookie.split("; ").find(h => h.startsWith("hubspotutk="))) == null ? void 0 : l.split("=")[1];
        try {
          await ge(E().public.hubspotPortalId, "2430d09a-d10d-4ad6-b579-68e210c4a8d4", e, {
            hutk: r,
            pageUri: window.location.href,
            pageName: document.title
          }), T.value = !0
        } catch (h) {
          console.log(h)
        }
      }
      const j = async () => {
        await F();
        const t = de(f.value).height;
        pe.to(v.value, {
          height: `${t}px`,
          duration: .5,
          ease: "snappy"
        })
      };
      let w = null;
      return V(async () => {
        await F(), O(), j(), f.value && (w = new ResizeObserver(() => j()), w.observe(f.value))
      }), ee(() => {
        w && f.value && (w.unobserve(f.value), w = null)
      }), (t, e) => {
        var A;
        const r = te,
          l = re,
          h = ce;
        return u(), c("div", null, [s(B) ? s(i) ? R(t.$slots, "default", {
          key: 1
        }, void 0, !0) : (u(), c("div", ve, [p(r, {
          item: (A = I.page.protect) == null ? void 0 : A.media,
          aspect: !1,
          eager: !0
        }, null, 8, ["item"]), a("div", {
          ref_key: "el",
          ref: f,
          class: "absolute bottom-0 max-s:h-[52.5rem] max-s:max-h-[100svh] s:bottom-auto s:top-1/2 s:left-1/2 s:-translate-x-1/2 s:-translate-y-1/2 text-black w-full s:max-w-[70rem] text-black stack z-2"
        }, [a("div", {
          ref_key: "background",
          ref: v,
          class: "absolute inset-0 s:top-1/2 s:bottom-auto s:inset-x-0 s:-translate-y-1/2 bg-white rounded-t-[1rem] s:rounded-[1rem]"
        }, null, 512), p(D, {
          name: "fade",
          mode: "out-in"
        }, {
          default: z(() => [s(y) ? s(y) ? (u(), c("div", Se, [e[7] || (e[7] = a("h3", {
            class: "h4-c uppercase",
            innerHTML: "Request access"
          }, null, -1)), e[8] || (e[8] = a("p", {
            class: "body-normal text-gray-2 mt-16"
          }, "Complete your details below to receive a password.", -1)), p(D, {
            name: "fade",
            mode: "out-in"
          }, {
            default: z(() => [s(T) ? (u(), c("p", Ie, "The team has received your request.")) : (u(), c("form", {
              key: 0,
              onSubmit: N(K, ["prevent"]),
              class: "flex flex-col gap-y-25 mt-25 body-normal"
            }, [e[6] || (e[6] = a("input", {
              type: "text",
              name: "website",
              tabindex: "-1",
              autocomplete: "off",
              class: "!hidden",
              "aria-hidden": "true"
            }, null, -1)), (u(!0), c(le, null, ue(s(k), o => {
              var P;
              return u(), c("div", {
                key: o.id,
                class: $(["relative text-gray-2", {
                  "is-active": (P = s(_)[o.name]) == null ? void 0 : P.trim()
                }])
              }, [o.inputType === "textarea" ? (u(), c("textarea", {
                key: 0,
                name: o.name,
                class: "input h-100",
                onInput: C => s(_)[o.name] = C.target.value,
                required: o.required
              }, null, 40, qe)) : (u(), c("input", {
                key: 1,
                name: o.name,
                type: o.inputType,
                class: "input",
                onInput: C => s(_)[o.name] = C.target.value,
                required: o.required
              }, null, 40, Te)), a("label", {
                for: o.name,
                class: "input-label",
                innerHTML: o.label
              }, null, 8, $e), e[5] || (e[5] = a("hr", {
                class: "input-bord border-current opacity-20"
              }, null, -1))], 2)
            }), 128)), a("div", ze, [p(l, {
              type: "submit",
              solid: !0,
              dark: !0,
              label: "Submit",
              class: $(["pass-gate__submit", {
                "is-disabled": !s(G)
              }])
            }, null, 8, ["class"])])], 32))]),
            _: 1
          })])) : L("", !0) : (u(), c("div", xe, [e[4] || (e[4] = a("h3", {
            class: "h4-c uppercase",
            innerHTML: "Login"
          }, null, -1)), a("form", {
            onSubmit: N(U, ["prevent"]),
            class: "flex flex-col gap-y-25 mt-25 body-normal"
          }, [a("div", {
            class: $(["relative text-gray-2", {
              "is-active": s(m).trim()
            }])
          }, [se(a("input", {
            id: "pass-field",
            "onUpdate:modelValue": e[0] || (e[0] = o => ae(m) ? m.value = o : null),
            type: "password",
            autocomplete: "current-password",
            "aria-invalid": s(n) ? !0 : void 0,
            "aria-describedby": s(n) ? "pass-error" : void 0,
            class: "input"
          }, null, 8, ke), [
            [oe, s(m)]
          ]), e[2] || (e[2] = a("label", {
            for: "pass-field",
            class: "input-label"
          }, "Password", -1)), e[3] || (e[3] = a("hr", {
            class: "input-bord border-current opacity-20"
          }, null, -1))], 2), s(n) ? (u(), c("p", we, ne(s(n)), 1)) : L("", !0), a("div", he, [p(l, {
            type: "submit",
            solid: !0,
            dark: !0,
            label: "Submit",
            class: $(["pass-gate__submit", {
              "is-disabled": !s(m).trim()
            }])
          }, null, 8, ["class"]), p(l, {
            type: "button",
            outline: "",
            dark: "",
            label: "Request access",
            class: "pass-gate__request",
            onClick: e[1] || (e[1] = o => y.value = !0)
          })])], 32)], 512))]),
          _: 1
        })], 512), a("p", Be, [e[10] || (e[10] = a("span", null, "© 2024 Fantasy", -1)), e[11] || (e[11] = a("span", {
          class: "hidden s:inline"
        }, "•", -1)), p(h, {
          to: "/policy",
          class: "uline"
        }, {
          default: z(() => e[9] || (e[9] = [ie("Privacy and Terms")])),
          _: 1
        })])])) : R(t.$slots, "default", {
          key: 0
        }, void 0, !0)])
      }
    }
  },
  Fe = Y(Ce, [
    ["__scopeId", "data-v-1dca2939"]
  ]),
  Ne = {
    __name: "[...slug]",
    async setup(I) {
      let d, q;
      const g = me(),
        {
          $dato: f
        } = fe(),
        v = Array.isArray(g.params.slug) ? g.params.slug : [g.params.slug],
        {
          data: i
        } = ([d, q] = ye(async () => W(`page-${v.join("/")}`, async () => {
          const n = await f.resolvePageByFullPath(v);
          if (!n) throw _e({
            statusCode: 404,
            statusMessage: "Page not found"
          });
          return n
        })), d = await d, q(), d),
        m = H();
      return V(async () => {
        var n, y;
        await F(), (n = i.value) != null && n.menu && m.setMenuSec({
          menu: (y = i.value) == null ? void 0 : y.menu
        }), m.setThemeDefaults({
          background: "#000",
          text: !1
        })
      }), (n, y) => {
        const _ = J,
          T = Q,
          B = X,
          x = Fe;
        return u(), be(x, {
          page: s(i)
        }, {
          default: z(() => {
            var k;
            return [a("article", null, [p(_, {
              seo: s(i).seo
            }, null, 8, ["seo"]), p(T, {
              items: (k = s(i).blocks) == null ? void 0 : k.blocks
            }, null, 8, ["items"]), p(B, {
              light: s(i).lightFoot,
              item: s(i).foot
            }, null, 8, ["light", "item"])])]
          }),
          _: 1
        }, 8, ["page"])
      }
    }
  };
export {
  Ne as
  default
};
