import {S as L, i as M, s as Z, Q as z, R as b, T as u, m as c, U as H, c as h, b as V, V as S, W as B, X as U, Y as W, t as q, d as D, h as _, Z as C, _ as P, $ as Q, D as R, p as d} from "./index-BsTNpDop.js";
function T(a) {
    let e = (console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),
    ""), t;
    return {
        c() {
            t = R(e)
        },
        m(r, i) {
            h(r, t, i)
        },
        p: d,
        d(r) {
            r && _(t)
        }
    }
}
function X(a) {
    let e;
    return {
        c() {
            e = u("path"),
            c(e, "d", "M236,56v48a4,4,0,0,1-4,4H184a4,4,0,0,1,0-8h37.7L187.53,68.69l-.13-.12a84,84,0,1,0-1.75,120.51,4,4,0,0,1,5.5,5.82A91.43,91.43,0,0,1,128,220h-1.26A92,92,0,1,1,193,62.84l35,32.05V56a4,4,0,1,1,8,0Z")
        },
        m(t, r) {
            h(t, e, r)
        },
        p: d,
        d(t) {
            t && _(e)
        }
    }
}
function Y(a) {
    let e;
    return {
        c() {
            e = u("path"),
            c(e, "d", "M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z")
        },
        m(t, r) {
            h(t, e, r)
        },
        p: d,
        d(t) {
            t && _(e)
        }
    }
}
function j(a) {
    let e;
    return {
        c() {
            e = u("path"),
            c(e, "d", "M238,56v48a6,6,0,0,1-6,6H184a6,6,0,0,1,0-12h32.55l-30.38-27.8c-.06-.06-.12-.13-.19-.19a82,82,0,1,0-1.7,117.65,6,6,0,0,1,8.24,8.73A93.46,93.46,0,0,1,128,222h-1.28A94,94,0,1,1,194.37,61.4L226,90.35V56a6,6,0,1,1,12,0Z")
        },
        m(t, r) {
            h(t, e, r)
        },
        p: d,
        d(t) {
            t && _(e)
        }
    }
}
function E(a) {
    let e;
    return {
        c() {
            e = u("path"),
            c(e, "d", "M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1-5.66-13.66l17-17-10.55-9.65-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,1,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60l10.93,10L226.34,50.3A8,8,0,0,1,240,56Z")
        },
        m(t, r) {
            h(t, e, r)
        },
        p: d,
        d(t) {
            t && _(e)
        }
    }
}
function F(a) {
    let e, t;
    return {
        c() {
            e = u("path"),
            t = u("path"),
            c(e, "d", "M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z"),
            c(e, "opacity", "0.2"),
            c(t, "d", "M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z")
        },
        m(r, i) {
            h(r, e, i),
            h(r, t, i)
        },
        p: d,
        d(r) {
            r && (_(e),
            _(t))
        }
    }
}
function G(a) {
    let e;
    return {
        c() {
            e = u("path"),
            c(e, "d", "M244,56v48a12,12,0,0,1-12,12H184a12,12,0,1,1,0-24H201.1l-19-17.38c-.13-.12-.26-.24-.38-.37A76,76,0,1,0,127,204h1a75.53,75.53,0,0,0,52.15-20.72,12,12,0,0,1,16.49,17.45A99.45,99.45,0,0,1,128,228h-1.37A100,100,0,1,1,198.51,57.06L220,76.72V56a12,12,0,0,1,24,0Z")
        },
        m(t, r) {
            h(t, e, r)
        },
        p: d,
        d(t) {
            t && _(e)
        }
    }
}
function I(a) {
    let e, t, r, i;
    const p = a[7].default
      , o = z(p, a, a[6], null);
    function v(l, n) {
        return l[0] === "bold" ? G : l[0] === "duotone" ? F : l[0] === "fill" ? E : l[0] === "light" ? j : l[0] === "regular" ? Y : l[0] === "thin" ? X : T
    }
    let m = v(a)
      , s = m(a)
      , A = [{
        xmlns: "http://www.w3.org/2000/svg"
    }, {
        width: a[2]
    }, {
        height: a[2]
    }, {
        fill: a[1]
    }, {
        transform: r = a[3] ? "scale(-1, 1)" : void 0
    }, {
        viewBox: "0 0 256 256"
    }, a[4], a[5]]
      , g = {};
    for (let l = 0; l < A.length; l += 1)
        g = b(g, A[l]);
    return {
        c() {
            e = u("svg"),
            o && o.c(),
            t = u("rect"),
            s.c(),
            c(t, "width", "256"),
            c(t, "height", "256"),
            c(t, "fill", "none"),
            H(e, g)
        },
        m(l, n) {
            h(l, e, n),
            o && o.m(e, null),
            V(e, t),
            s.m(e, null),
            i = !0
        },
        p(l, [n]) {
            o && o.p && (!i || n & 64) && S(o, p, l, l[6], i ? U(p, l[6], n, null) : B(l[6]), null),
            m === (m = v(l)) && s ? s.p(l, n) : (s.d(1),
            s = m(l),
            s && (s.c(),
            s.m(e, null))),
            H(e, g = W(A, [{
                xmlns: "http://www.w3.org/2000/svg"
            }, (!i || n & 4) && {
                width: l[2]
            }, (!i || n & 4) && {
                height: l[2]
            }, (!i || n & 2) && {
                fill: l[1]
            }, (!i || n & 8 && r !== (r = l[3] ? "scale(-1, 1)" : void 0)) && {
                transform: r
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
function J(a, e, t) {
    const r = ["weight", "color", "size", "mirrored"];
    let i = C(e, r)
      , {$$slots: p={}, $$scope: o} = e;
    const {weight: v, color: m, size: s, mirrored: A, ...g} = P("iconCtx") || {};
    let {weight: l=v ?? "regular"} = e
      , {color: n=m ?? "currentColor"} = e
      , {size: w=s ?? "1em"} = e
      , {mirrored: k=A || !1} = e;
    return a.$$set = f => {
        e = b(b({}, e), Q(f)),
        t(5, i = C(e, r)),
        "weight"in f && t(0, l = f.weight),
        "color"in f && t(1, n = f.color),
        "size"in f && t(2, w = f.size),
        "mirrored"in f && t(3, k = f.mirrored),
        "$$scope"in f && t(6, o = f.$$scope)
    }
    ,
    [l, n, w, k, g, i, o, p]
}
class N extends L {
    constructor(e) {
        super(),
        M(this, e, J, I, Z, {
            weight: 0,
            color: 1,
            size: 2,
            mirrored: 3
        })
    }
}
export {N as A};
