
(function() {
  "use strict";
  const U = {
    googleMapsTiles: ["maps\\.googleapis\\.com/maps/vt", "maps\\.google\\.com/maps/vt", "tile\\.googleapis\\.com", "mapsresources-pa\\.googleapis\\.com", "maps\\.googleapis\\.com/maps/api/js/StaticMapService"],
    otherMapTiles: ["tile\\.openstreetmap\\.org", "tiles\\.mapbox\\.com", "api\\.mapbox\\.com", "api\\.maptiler\\.com", "maps\\.ls\\.hereapi\\.com", "maps\\.hereapi\\.com", "server\\.arcgisonline\\.com", "services\\.arcgisonline\\.com"],
    analyticsAndTracking: ["\\.google-analytics\\.com", "googletagmanager\\.com", "doubleclick\\.net", "facebook\\.com/tr"],
    adNetworks: ["adnxs\\.com", "adnxs-simple\\.com", "criteo\\.com", "criteo\\.net", "imageproxy.*criteo", "contextweb\\.com", "smadex\\.com", "adsrvr\\.org", "creativecdn\\.com", "ntvassets.*akamaihd\\.net", "mediavine\\.com", "amazon-adsystem\\.com", "googlesyndication\\.com", "googleadservices\\.com", "moatads\\.com", "serving-sys\\.com", "rubiconproject\\.com", "pubmatic\\.com", "openx\\.net", "casalemedia\\.com", "indexww\\.com"]
  };
  (() => {
    var R;
    const A = window.ataiConfig || {},
      L = g("siteKey", "site-key") || window.altTextSiteKey || null,
      w = ((R = g("lang", "lang")) == null ? void 0 : R.toLowerCase()) || null,
      q = function() {
        const t = g("keywords", null);
        return t ? t.split(",").map(n => n.trim()).filter(n => n.length > 0) : null
      }(),
      M = g("keywordSource", null) || null,
      T = function() {
        const t = g("client", "client");
        if (!t || typeof t != "string") return null;
        const n = t.trim();
        return /^[a-zA-Z0-9_-]{1,64}$/.test(n) ? n : null
      }(),
      P = A.ecommProduct ? {
        product: A.ecommProduct,
        brand: A.ecommBrand
      } : {},
      k = function() {
        const t = g("overwrite", null) || null;
        return t == 1 || String(t).toLowerCase() === "true"
      }(),
      O = function() {
        const t = g("excludedElements", null) || window.ataiExcludedElements || [];
        return [...Array.isArray(t) ? t : [], '[data-definition-name="website.components.map"]', '[aria-roledescription="map"]', ".gm-style", ".mapboxgl-map", ".leaflet-container", ".esri-view", ".esri-map-view"]
      }(),
      S = new Map,
      j = `https://ujs.alttext.ai/universal/sites/${L}/images`;
    let _ = 0;
    const C = Object.freeze(Object.values(U).flat().map(t => new RegExp(t, "i"))),
      B = Object.freeze([{
        prefix: "data:image/gif",
        signature: "R0lGODlhAQAB"
      }, {
        prefix: "data:image/png",
        signature: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAAB"
      }, {
        prefix: "data:image/webp",
        signature: "UklGRkAAAABXRUJQVlA4IBQAAAAB"
      }]);

    function W(t) {
      (async function(n) {
        const u = Array.from(document.querySelectorAll("img")).filter(e => !y(e)),
          m = u.filter(e => e.complete && e.naturalWidth > 0);
        let d = u.filter(e => !e.complete || e.naturalWidth === 0);
        if (m.length > 0 && x(m, n), k && d.length > 0) {
          const e = d.filter(o => o.alt && o.alt.trim().length > 0);
          e.length > 0 && x(e, n)
        }
        d.length > 0 && await
        function(e) {
          return new Promise(o => {
            requestAnimationFrame(function r() {
              const l = e.filter(i => i.naturalWidth > 0);
              if (l.length > 0) return e = e.filter(i => i.naturalWidth === 0), void x(l, j).catch(i => {}).finally(() => {
                e.length > 0 ? requestAnimationFrame(r) : o()
              });
              e.length > 0 ? requestAnimationFrame(r) : o()
            })
          })
        }(d)
      })(t),
      function(n) {
        let u;
        const m = new Set;
        new MutationObserver(d => {
          let e = 0;
          d.forEach(o => {
            const r = function(l) {
              const i = [];
              return l.forEach(s => {
                y(s.target) || (s.type === "childList" ? s.addedNodes.forEach(a => {
                  if (!y(a)) {
                    if (a.nodeName === "IMG") i.push(a);
                    else if (a.querySelectorAll) {
                      const c = a.querySelectorAll("img"),
                        f = Array.from(c).filter(p => !y(p));
                      i.push(...f)
                    }
                  }
                }) : s.type === "attributes" && s.attributeName === "src" && (s.target.nodeName !== "IMG" || y(s.target) || i.push(s.target)))
              }), i
            }([o]);
            r.length > 0 && (r.forEach(l => m.add(l)), e = 1)
          }), e && (clearTimeout(u), u = setTimeout(() => {
            x(Array.from(m), n), m.clear()
          }, 400))
        }).observe(document.body, {
          childList: 1,
          subtree: 1,
          attributes: 1,
          attributeFilter: ["src"]
        })
      }(t)
    }
    async function x(t, n) {
      const u = function(d) {
        const e = new Set;
        return Array.from(d).filter(o => {
          if (y(o)) return 0;
          const r = v(o),
            l = document.body.contains(o),
            i = o.naturalWidth > 100 && o.naturalHeight > 100 || o.width > 100 && o.height > 100,
            s = o.getAttribute("aria-hidden") !== "true";
          return function(a) {
            return a.hidden ? 1 : a.offsetParent ? 0 : 1
          }(o) || r && function(a) {
            if (!a || typeof a != "string") return 0;
            const c = a.trim(),
              f = c.toLowerCase();
            if (!f.startsWith("data:image/")) return 0;
            for (const {
                prefix: p,
                signature: h
              }
              of B)
              if (f.startsWith(p)) return c.includes(h);
            return f.startsWith("data:image/svg+xml") ? 1 : 0
          }(r) || r && ! function(a) {
            if (!a || typeof a != "string") return 0;
            const c = a.trim().toLowerCase(),
              f = c.startsWith("http://") || c.startsWith("https://");
            return c.startsWith("blob:") ? 0 : f
          }(r) || r && function(a) {
            if (!a) return 0;
            for (const c of C)
              if (c.test(a)) return 1;
            return 0
          }(r) || !k && o.alt && o.alt.trim().length > 0 ? 0 : S.has(r) ? (function(a, c) {
            a.alt = S.get(c)
          }(o, r), 0) : r && !e.has(r) ? (e.add(r), l && r && i && s) : 0
        })
      }(t);
      if (u.length === 0) return;
      const m = await async function(d, e) {
        const o = d.map(s => ({
            url: v(s)
          })),
          r = window.location.hostname,
          l = await async function(s, a) {
            const c = s.map(b => b.url).join(""),
              f = `${a}:${c}`,
              p = w ? `${f}:${w}` : f,
              h = new TextEncoder().encode(p),
              E = await crypto.subtle.digest("SHA-1", h);
            return Array.from(new Uint8Array(E)).map(b => b.toString(16).padStart(2, "0")).join("")
          }(o, r), i = new URL(e);
        i.searchParams.append("req", l), i.searchParams.append("domain", r), w && i.searchParams.append("lang", w);
        try {
          const s = await N(i.toString());
          return s || await async function(c, f) {
            const p = {
                images: f,
                ecomm: P,
                keywords: q,
                keyword_source: M,
                ...T && {
                  client: T
                }
              },
              h = await fetch(c, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(p)
              });
            if (h.ok) {
              const E = await h.json();
              return function(b) {
                N(b).then($ => {}).catch($ => {})
              }(c), {
                images: E.images || [],
                json_ld: E.json_ld
              }
            }
            throw new Error(`POST request failed with status: ${h.status}`)
          }(i.toString(), o) || {
            images: [],
            json_ld: null
          }
        } catch {
          return {
            images: [],
            json_ld: null
          }
        }
      }(u, n);
      m && m.images && m.images.length > 0 && function(d, e) {
        const o = new Map(e.map(r => {
          var l;
          return [r.url, w && ((l = r.alt_texts) == null ? void 0 : l[w]) || r.alt_text]
        }));
        d.forEach(r => {
          const l = v(r);
          if (o.has(l)) {
            const i = o.get(l);
            (function(s, a) {
              const c = new URL(s, window.location.origin).href;
              document.querySelectorAll("img").forEach(f => {
                new URL(f.src, window.location.origin).href === c && (f.alt = a)
              })
            })(l, i), S.set(l, i)
          }
        })
      }(u, m.images), m && m.json_ld && function(d) {
        if (!_ && d && typeof d == "object" && Object.keys(d).length !== 0) try {
          const e = document.createElement("script");
          e.type = "application/ld+json", e.textContent = JSON.stringify(d), document.head.appendChild(e), _ = 1
        } catch {}
      }(m.json_ld)
    }

    function y(t) {
      if (!t || !t.nodeType || t.nodeType !== Node.ELEMENT_NODE || O.length === 0) return 0;
      for (const n of O) try {
        if (t.closest(n) !== null) return 1
      } catch {}
      return 0
    }
    async function N(t) {
      const n = await fetch(t, {
        method: "GET"
      });
      if (n.status === 204) return null;
      if (n.status === 200) {
        const u = await n.json();
        return {
          images: u.images || [],
          json_ld: u.json_ld
        }
      }
      throw new Error(`GET request failed with status: ${n.status}`)
    }

    function v(t) {
      if (!t) return null;
      const n = t.src || t.currentSrc || null;
      if (!n || n.trim() === "") return null;
      try {
        return n.startsWith("http") ? new URL(n).href : new URL(n, window.location.origin).href
      } catch {
        return null
      }
    }

    function g(t, n) {
      if (t && A[t]) return A[t];
      if (n) {
        const u = document.getElementById("alttextai-ujs");
        if (!u) return null;
        const m = u.src.split("?")[1];
        return m ? new URLSearchParams(m).get(n) : null
      }
      return null
    }
    L && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => W(j)) : W(j))
  })()
})();
