import {S as M, i as Z, s as z, Q as C, R as H, T as c, m as u, U as w, c as h, b as P, V as S, W as B, X as U, Y as W, t as q, d as D, h as _, Z as A, _ as Q, $ as R, D as T, p as d} from "./index-BsTNpDop.js";
function X(r) {
    let e = (console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),
    ""), t;
    return {
        c() {
            t = T(e)
        },
        m(a, i) {
            h(a, t, i)
        },
        p: d,
        d(a) {
            a && _(t)
        }
    }
}
function Y(r) {
    let e;
    return {
        c() {
            e = c("path"),
            u(e, "d", "M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z")
        },
        m(t, a) {
            h(t, e, a)
        },
        p: d,
        d(t) {
            t && _(e)
        }
    }
}
function j(r) {
    let e;
    return {
        c() {
            e = c("path"),
            u(e, "d", "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z")
        },
        m(t, a) {
            h(t, e, a)
        },
        p: d,
        d(t) {
            t && _(e)
        }
    }
}
function E(r) {
    let e;
    return {
        c() {
            e = c("path"),
            u(e, "d", "M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z")
        },
        m(t, a) {
            h(t, e, a)
        },
        p: d,
        d(t) {
            t && _(e)
        }
    }
}
function F(r) {
    let e;
    return {
        c() {
            e = c("path"),
            u(e, "d", "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z")
        },
        m(t, a) {
            h(t, e, a)
        },
        p: d,
        d(t) {
            t && _(e)
        }
    }
}
function G(r) {
    let e, t;
    return {
        c() {
            e = c("path"),
            t = c("path"),
            u(e, "d", "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z"),
            u(e, "opacity", "0.2"),
            u(t, "d", "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z")
        },
        m(a, i) {
            h(a, e, i),
            h(a, t, i)
        },
        p: d,
        d(a) {
            a && (_(e),
            _(t))
        }
    }
}
function I(r) {
    let e;
    return {
        c() {
            e = c("path"),
            u(e, "d", "M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z")
        },
        m(t, a) {
            h(t, e, a)
        },
        p: d,
        d(t) {
            t && _(e)
        }
    }
}
function J(r) {
    let e, t, a, i;
    const v = r[7].default
      , o = C(v, r, r[6], null);
    function V(l, n) {
        return l[0] === "bold" ? I : l[0] === "duotone" ? G : l[0] === "fill" ? F : l[0] === "light" ? E : l[0] === "regular" ? j : l[0] === "thin" ? Y : X
    }
    let m = V(r)
      , s = m(r)
      , p = [{
        xmlns: "http://www.w3.org/2000/svg"
    }, {
        width: r[2]
    }, {
        height: r[2]
    }, {
        fill: r[1]
    }, {
        transform: a = r[3] ? "scale(-1, 1)" : void 0
    }, {
        viewBox: "0 0 256 256"
    }, r[4], r[5]]
      , g = {};
    for (let l = 0; l < p.length; l += 1)
        g = H(g, p[l]);
    return {
        c() {
            e = c("svg"),
            o && o.c(),
            t = c("rect"),
            s.c(),
            u(t, "width", "256"),
            u(t, "height", "256"),
            u(t, "fill", "none"),
            w(e, g)
        },
        m(l, n) {
            h(l, e, n),
            o && o.m(e, null),
            P(e, t),
            s.m(e, null),
            i = !0
        },
        p(l, [n]) {
            o && o.p && (!i || n & 64) && S(o, v, l, l[6], i ? U(v, l[6], n, null) : B(l[6]), null),
            m === (m = V(l)) && s ? s.p(l, n) : (s.d(1),
            s = m(l),
            s && (s.c(),
            s.m(e, null))),
            w(e, g = W(p, [{
                xmlns: "http://www.w3.org/2000/svg"
            }, (!i || n & 4) && {
                width: l[2]
            }, (!i || n & 4) && {
                height: l[2]
            }, (!i || n & 2) && {
                fill: l[1]
            }, (!i || n & 8 && a !== (a = l[3] ? "scale(-1, 1)" : void 0)) && {
                transform: a
            }, {
                viewBox: "0 0 256 256"
            }, l[4], n & 32 && l[5]]))
        },
        i(l) {
            i || (q(o, l),
            i = !0)
        },
        o(l) {
            D(o, l),
            i = !1
        },
        d(l) {
            l && _(e),
            o && o.d(l),
            s.d()
        }
    }
}
function K(r, e, t) {
    const a = ["weight", "color", "size", "mirrored"];
    let i = A(e, a)
      , {$$slots: v={}, $$scope: o} = e;
    const {weight: V, color: m, size: s, mirrored: p, ...g} = Q("iconCtx") || {};
    let {weight: l=V ?? "regular"} = e
      , {color: n=m ?? "currentColor"} = e
      , {size: b=s ?? "1em"} = e
      , {mirrored: k=p || !1} = e;
    return r.$$set = f => {
        e = H(H({}, e), R(f)),
        t(5, i = A(e, a)),
        "weight"in f && t(0, l = f.weight),
        "color"in f && t(1, n = f.color),
        "size"in f && t(2, b = f.size),
        "mirrored"in f && t(3, k = f.mirrored),
        "$$scope"in f && t(6, o = f.$$scope)
    }
    ,
    [l, n, b, k, g, i, o, v]
}
class N extends M {
    constructor(e) {
        super(),
        Z(this, e, K, J, z, {
            weight: 0,
            color: 1,
            size: 2,
            mirrored: 3
        })
    }
}
export {N as P};
