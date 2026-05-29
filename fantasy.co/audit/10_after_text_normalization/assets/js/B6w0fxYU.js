import {
  u as H,
  _ as J
} from "/assets/js/DP4i5pug.js";
import {
  _ as L,
  a as V
} from "/assets/js/BUD1cr-Q.js";
import {
  _ as U,
  u as A,
  r as y,
  x as W,
  h as z,
  o as G,
  n as F,
  y as K,
  c as u,
  g as l,
  z as Q,
  e as n,
  d as m,
  j as s,
  k as X,
  m as $,
  E as Y,
  T as E,
  A as Z,
  p as ee,
  F as te,
  l as se,
  v as B,
  t as ae,
  G as ne,
  H as oe,
  I as re,
  s as le,
  J as ie,
  a as ue,
  w as ce,
  b as pe,
  K as me,
  f as de
} from "/assets/js/CZZ0Kowu.js";
import {
  s as fe
} from "/assets/js/g3RhK2_o.js";
import "/assets/js/BMrMtYDV.js";
import "/assets/js/CeXuehBR.js";
const ge = {
    key: 1,
    class: "fixed inset-0 flex items-center justify-center z-5"
  },
  ye = {
    key: 0,
    class: "relative flex flex-col px-24 py-40 s:p-40 z-2"
  },
  ve = {
    class: "mt-25"
  },
  _e = {
    key: 1,
    ref: "form",
    class: "relative flex flex-col px-24 py-40 s:p-40 z-2"
  },
  be = ["name", "onInput", "required"],
  xe = ["name", "type", "onInput", "required"],
  he = ["for", "innerHTML"],
  ke = {
    key: 0,
    role: "alert",
    class: "body-small text-red-500"
  },
  we = {
    class: "flex flex-col s:flex-row s:items-center s:justify-start gap-x-20 gap-y-15 mt-15 s:mt-40 relative z-2"
  },
  Se = {
    key: 2,
    class: "relative flex flex-col px-24 py-40 s:p-40 z-2"
  },
  Te = {
    class: "absolute bottom-20 inset-x-0 flex px-24 justify-between s:justify-center gap-x-10 body-small text-gray-1 s:text-white/50 z-5"
  },
  Ie = {
    __name: "GatedGate",
    props: {
      page: {
        type: Object,
        default: null
      }
    },
    setup(C) {
      const o = C,
        k = ie(),
        I = A(),
        c = y(null),
        i = y(null),
        d = y(!1),
        p = y(!1),
        f = y(!1),
        b = y(""),
        x = y(!1),
        w = y([]),
        h = W({}),
        g = z(() => {
          var t;
          return (t = o.page) != null && t.id ? `gated-${o.page.id}` : null
        }),
        N = z(() => k.public.USE_STORAGE),
        q = z(() => w.value.filter(t => t.required).every(t => {
          var e;
          return (e = h[t.name]) == null ? void 0 : e.trim()
        }));

      function M() {
        if (!(!g.value || !N.value)) try {
          const t = localStorage.getItem(g.value);
          if (!t) return;
          const {
            expiresAt: e
          } = JSON.parse(t);
          Date.now() < e ? d.value = !0 : localStorage.removeItem(g.value)
        } catch {}
      }
      async function D(t) {
        var e;
        try {
          const v = await fetch("/.netlify/functions/gated-validate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              token: t,
              pageSlug: (e = o.page) == null ? void 0 : e.slug
            })
          });
          if (!v.ok) {
            x.value = !0;
            return
          }
          const {
            expiresAt: _
          } = await v.json();
          if (N.value && g.value) try {
            localStorage.setItem(g.value, JSON.stringify({
              token: t,
              expiresAt: _
            }))
          } catch {}
          d.value = !0
        } catch {
          x.value = !0
        }
      }
      async function P() {
        var t;
        if ((t = o.page) != null && t.hubspotFormId) try {
          const e = await fetch(`/.netlify/functions/gated-fields?formId=${o.page.hubspotFormId}`);
          e.ok && (w.value = await e.json())
        } catch {}
      }
      async function R(t) {
        var _, T, a;
        if (f.value || !q.value) return;
        b.value = "";
        const e = Object.fromEntries(new FormData(t.target).entries());
        if (e.website) return;
        delete e.website, f.value = !0;
        const v = (_ = document.cookie.split("; ").find(r => r.startsWith("hubspotutk="))) == null ? void 0 : _.split("=")[1];
        try {
          await fe(k.public.hubspotPortalId, o.page.hubspotFormId, e, {
            hutk: v,
            pageUri: window.location.href,
            pageName: document.title
          })
        } catch (r) {
          console.error("HubSpot submit error:", r)
        }
        try {
          const r = await fetch("/.netlify/functions/gated-generate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: e.email,
              pageSlug: (T = o.page) == null ? void 0 : T.slug,
              pageTitle: (a = o.page) == null ? void 0 : a.title
            })
          });
          if (!r.ok) throw new Error(`gated-generate ${r.status}`);
          p.value = !0
        } catch (r) {
          b.value = "Something went wrong. Please try again.", console.error(r)
        } finally {
          f.value = !1
        }
      }
      const O = async () => {
        if (await F(), !c.value) return;
        const t = re(c.value).height;
        le.to(i.value, {
          height: `${t}px`,
          duration: .5,
          ease: "snappy"
        })
      };
      let S = null;
      return G(async () => {
        if (await F(), M(), !d.value) {
          const t = I.query.token;
          t && await D(t)
        }
        d.value || await P(), O(), c.value && (S = new ResizeObserver(() => O()), S.observe(c.value))
      }), K(() => {
        S && c.value && (S.unobserve(c.value), S = null)
      }), (t, e) => {
        const v = X,
          _ = Y,
          T = oe;
        return l(), u("div", null, [n(d) ? Q(t.$slots, "default", {
          key: 0
        }, void 0, !0) : (l(), u("div", ge, [m(v, {
          item: C.page.media,
          aspect: !1,
          eager: !0
        }, null, 8, ["item"]), s("div", {
          ref_key: "el",
          ref: c,
          class: "absolute bottom-0 max-s:h-[52.5rem] max-s:max-h-[100svh] s:bottom-auto s:top-1/2 s:left-1/2 s:-translate-x-1/2 s:-translate-y-1/2 text-black w-full s:max-w-[70rem] text-black stack z-2"
        }, [s("div", {
          ref_key: "background",
          ref: i,
          class: "absolute inset-0 s:top-1/2 s:bottom-auto s:inset-x-0 s:-translate-y-1/2 bg-white rounded-t-[1rem] s:rounded-[1rem]"
        }, null, 512), m(E, {
          name: "fade",
          mode: "out-in"
        }, {
          default: $(() => [n(x) ? (l(), u("div", ye, [e[1] || (e[1] = s("h3", {
            class: "h4-c uppercase"
          }, "Link expired", -1)), e[2] || (e[2] = s("p", {
            class: "body-normal text-gray-2 mt-16"
          }, "This link is no longer valid. Request a new one below.", -1)), s("div", ve, [m(_, {
            type: "button",
            solid: !0,
            dark: !0,
            label: "Request new link",
            onClick: e[0] || (e[0] = a => x.value = !1)
          })])])) : n(p) ? (l(), u("div", Se, e[7] || (e[7] = [s("h3", {
            class: "h4-c uppercase"
          }, "Check your email", -1), s("p", {
            class: "body-normal text-gray-2 mt-16 pt-25"
          }, "We've sent a link to your inbox. Click it to access this content.", -1)]))) : (l(), u("div", _e, [e[5] || (e[5] = s("h3", {
            class: "h4-c uppercase"
          }, "Get access", -1)), e[6] || (e[6] = s("p", {
            class: "body-normal text-gray-2 mt-16"
          }, "Complete your details below to receive a link.", -1)), m(E, {
            name: "fade",
            mode: "out-in"
          }, {
            default: $(() => [s("form", {
              onSubmit: Z(R, ["prevent"]),
              class: "flex flex-col gap-y-25 mt-25 body-normal"
            }, [e[4] || (e[4] = s("input", {
              type: "text",
              name: "website",
              tabindex: "-1",
              autocomplete: "off",
              class: "!hidden",
              "aria-hidden": "true"
            }, null, -1)), (l(!0), u(te, null, se(n(w), a => {
              var r;
              return l(), u("div", {
                key: a.id,
                class: B(["relative text-gray-2", {
                  "is-active": (r = n(h)[a.name]) == null ? void 0 : r.trim()
                }])
              }, [a.inputType === "textarea" ? (l(), u("textarea", {
                key: 0,
                name: a.name,
                class: "input h-100",
                onInput: j => n(h)[a.name] = j.target.value,
                required: a.required
              }, null, 40, be)) : (l(), u("input", {
                key: 1,
                name: a.name,
                type: a.inputType,
                class: "input",
                onInput: j => n(h)[a.name] = j.target.value,
                required: a.required
              }, null, 40, xe)), s("label", {
                for: a.name,
                class: "input-label",
                innerHTML: a.label
              }, null, 8, he), e[3] || (e[3] = s("hr", {
                class: "input-bord border-current opacity-20"
              }, null, -1))], 2)
            }), 128)), n(b) ? (l(), u("p", ke, ae(n(b)), 1)) : ee("", !0), s("div", we, [m(_, {
              type: "submit",
              solid: !0,
              dark: !0,
              label: "Submit",
              class: B(["gated-content__submit", {
                "is-disabled": !n(q) || n(f)
              }])
            }, null, 8, ["class"])])], 32)]),
            _: 1
          })], 512))]),
          _: 1
        })], 512), s("p", Te, [e[9] || (e[9] = s("span", null, "© 2024 Fantasy", -1)), e[10] || (e[10] = s("span", {
          class: "hidden s:inline"
        }, "•", -1)), m(T, {
          to: "/policy",
          class: "uline"
        }, {
          default: $(() => e[8] || (e[8] = [ne("Privacy and Terms")])),
          _: 1
        })])]))])
      }
    }
  },
  $e = U(Ie, [
    ["__scopeId", "data-v-19d39751"]
  ]),
  Oe = {
    __name: "[slug]",
    async setup(C) {
      let o, k;
      const I = A(),
        {
          $dato: c
        } = ue(),
        {
          data: i
        } = ([o, k] = ce(async () => H(`gated-${I.params.slug}`, async () => {
          const {
            page: p
          } = await c.page({
            slug: "gated",
            variables: {
              slug: I.params.slug
            }
          });
          if (!p) throw de({
            statusCode: 404,
            statusMessage: "Page not found"
          });
          return p
        })), o = await o, k(), o),
        d = pe();
      return G(async () => {
        var p, f;
        await F(), (p = i.value) != null && p.menu && d.setMenuSec({
          menu: (f = i.value) == null ? void 0 : f.menu
        }), d.setThemeDefaults({
          background: "#000",
          text: !1
        })
      }), (p, f) => {
        const b = J,
          x = L,
          w = V,
          h = $e;
        return l(), me(h, {
          page: n(i)
        }, {
          default: $(() => {
            var g;
            return [s("article", null, [m(b, {
              seo: n(i).seo
            }, null, 8, ["seo"]), m(x, {
              items: (g = n(i).blocks) == null ? void 0 : g.blocks
            }, null, 8, ["items"]), m(w, {
              light: n(i).lightFoot,
              item: n(i).foot
            }, null, 8, ["light", "item"])])]
          }),
          _: 1
        }, 8, ["page"])
      }
    }
  };
export {
  Oe as
  default
};
