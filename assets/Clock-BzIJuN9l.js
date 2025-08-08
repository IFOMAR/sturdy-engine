import {S as M, i as z, s as V, Q as H, R as v, T as c, m as u, U as w, c as _, b as S, V as B, W as U, X as W, Y as q, t as D, d as P, h, Z as C, _ as Q, $ as R, D as T, p as m} from "./index-BsTNpDop.js";
function X(a) {
    let e = (console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),
    ""), t;
    return {
        c() {
            t = T(e)
        },
        m(r, i) {
            _(r, t, i)
        },
        p: m,
        d(r) {
            r && h(t)
        }
    }
}
function Y(a) {
    let e;
    return {
        c() {
            e = c("path"),
            u(e, "d", "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z")
        },
        m(t, r) {
            _(t, e, r)
        },
        p: m,
        d(t) {
            t && h(e)
        }
    }
}
function j(a) {
    let e;
    return {
        c() {
            e = c("path"),
            u(e, "d", "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z")
        },
        m(t, r) {
            _(t, e, r)
        },
        p: m,
        d(t) {
            t && h(e)
        }
    }
}
function E(a) {
    let e;
    return {
        c() {
            e = c("path"),
            u(e, "d", "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z")
        },
        m(t, r) {
            _(t, e, r)
        },
        p: m,
        d(t) {
            t && h(e)
        }
    }
}
function F(a) {
    let e;
    return {
        c() {
            e = c("path"),
            u(e, "d", "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z")
        },
        m(t, r) {
            _(t, e, r)
        },
        p: m,
        d(t) {
            t && h(e)
        }
    }
}
function G(a) {
    let e, t;
    return {
        c() {
            e = c("path"),
            t = c("path"),
            u(e, "d", "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z"),
            u(e, "opacity", "0.2"),
            u(t, "d", "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z")
        },
        m(r, i) {
            _(r, e, i),
            _(r, t, i)
        },
        p: m,
        d(r) {
            r && (h(e),
            h(t))
        }
    }
}
function I(a) {
    let e;
    return {
        c() {
            e = c("path"),
            u(e, "d", "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z")
        },
        m(t, r) {
            _(t, e, r)
        },
        p: m,
        d(t) {
            t && h(e)
        }
    }
}
function J(a) {
    let e, t, r, i;
    const p = a[7].default
      , o = H(p, a, a[6], null);
    function A(l, n) {
        return l[0] === "bold" ? I : l[0] === "duotone" ? G : l[0] === "fill" ? F : l[0] === "light" ? E : l[0] === "regular" ? j : l[0] === "thin" ? Y : X
    }
    let d = A(a)
      , s = d(a)
      , Z = [{
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
    for (let l = 0; l < Z.length; l += 1)
        g = v(g, Z[l]);
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
            _(l, e, n),
            o && o.m(e, null),
            S(e, t),
            s.m(e, null),
            i = !0
        },
        p(l, [n]) {
            o && o.p && (!i || n & 64) && B(o, p, l, l[6], i ? W(p, l[6], n, null) : U(l[6]), null),
            d === (d = A(l)) && s ? s.p(l, n) : (s.d(1),
            s = d(l),
            s && (s.c(),
            s.m(e, null))),
            w(e, g = q(Z, [{
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
            i || (D(o, l),
            i = !0)
        },
        o(l) {
            P(o, l),
            i = !1
        },
        d(l) {
            l && h(e),
            o && o.d(l),
            s.d()
        }
    }
}
function K(a, e, t) {
    const r = ["weight", "color", "size", "mirrored"];
    let i = C(e, r)
      , {$$slots: p={}, $$scope: o} = e;
    const {weight: A, color: d, size: s, mirrored: Z, ...g} = Q("iconCtx") || {};
    let {weight: l=A ?? "regular"} = e
      , {color: n=d ?? "currentColor"} = e
      , {size: b=s ?? "1em"} = e
      , {mirrored: k=Z || !1} = e;
    return a.$$set = f => {
        e = v(v({}, e), R(f)),
        t(5, i = C(e, r)),
        "weight"in f && t(0, l = f.weight),
        "color"in f && t(1, n = f.color),
        "size"in f && t(2, b = f.size),
        "mirrored"in f && t(3, k = f.mirrored),
        "$$scope"in f && t(6, o = f.$$scope)
    }
    ,
    [l, n, b, k, g, i, o, p]
}
class N extends M {
    constructor(e) {
        super(),
        z(this, e, K, J, V, {
            weight: 0,
            color: 1,
            size: 2,
            mirrored: 3
        })
    }
}
export {N as C};
