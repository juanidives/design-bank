
import {
  ag as v
} from "/assets/js/CZZ0Kowu.js";
var o, a;

function d() {
  if (a) return o;
  a = 1;

  function e(t, n, r) {
    return t * (1 - r) + n * r
  }
  return o = e, o
}
var p, f;

function h() {
  if (f) return p;
  f = 1;
  const e = d();

  function t(n, r, u, i, l = 60) {
    if (typeof i > "u") return e(n, r, u);
    const s = i / (1 / l),
      c = 1 - u;
    return e(n, r, 1 - Math.pow(c, s))
  }
  return p = t, p
}
var q = h();
const m = v(q);
export {
  m as l
};
