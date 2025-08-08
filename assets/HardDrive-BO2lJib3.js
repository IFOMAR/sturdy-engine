import {S as w, i as M, s as z, Q as C, R as A, T as c, m as u, U as V, c as _, b as S, V as B, W as D, X as U, Y as W, t as q, d as P, h as m, Z as k, _ as Q, $ as R, D as T, p as h} from "./index-BsTNpDop.js";
function X(l) {
    let e = (console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),
    ""), t;
    return {
        c() {
            t = T(e)
        },
        m(r, i) {
            _(r, t, i)
        },
        p: h,
        d(r) {
            r && m(t)
        }
    }
}
function Y(l) {
    let e;
    return {
        c() {
            e = c("path"),
            u(e, "d", "M224,68H32A12,12,0,0,0,20,80v96a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V80A12,12,0,0,0,224,68Zm4,108a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H224a4,4,0,0,1,4,4Zm-32-48a8,8,0,1,1-8-8A8,8,0,0,1,196,128Z")
        },
        m(t, r) {
            _(t, e, r)
        },
        p: h,
        d(t) {
            t && m(e)
        }
    }
}
function j(l) {
    let e;
    return {
        c() {
            e = c("path"),
            u(e, "d", "M224,64H32A16,16,0,0,0,16,80v96a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64Zm0,112H32V80H224v96Zm-24-48a12,12,0,1,1-12-12A12,12,0,0,1,200,128Z")
        },
        m(t, r) {
            _(t, e, r)
        },
        p: h,
        d(t) {
            t && m(e)
        }
    }
}
function E(l) {
    let e;
    return {
        c() {
            e = c("path"),
            u(e, "d", "M224,66H32A14,14,0,0,0,18,80v96a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V80A14,14,0,0,0,224,66Zm2,110a2,2,0,0,1-2,2H32a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2H224a2,2,0,0,1,2,2Zm-28-48a10,10,0,1,1-10-10A10,10,0,0,1,198,128Z")
        },
        m(t, r) {
            _(t, e, r)
        },
        p: h,
        d(t) {
            t && m(e)
        }
    }
}
function F(l) {
    let e;
    return {
        c() {
            e = c("path"),
            u(e, "d", "M224,64H32A16,16,0,0,0,16,80v96a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64Zm-36,76a12,12,0,1,1,12-12A12,12,0,0,1,188,140Z")
        },
        m(t, r) {
            _(t, e, r)
        },
        p: h,
        d(t) {
            t && m(e)
        }
    }
}
function G(l) {
    let e, t;
    return {
        c() {
            e = c("path"),
            t = c("path"),
            u(e, "d", "M232,80v96a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H224A8,8,0,0,1,232,80Z"),
            u(e, "opacity", "0.2"),
            u(t, "d", "M224,64H32A16,16,0,0,0,16,80v96a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64Zm0,112H32V80H224v96Zm-24-48a12,12,0,1,1-12-12A12,12,0,0,1,200,128Z")
        },
        m(r, i) {
            _(r, e, i),
            _(r, t, i)
        },
        p: h,
        d(r) {
            r && (m(e),
            m(t))
        }
    }
}
function I(l) {
    let e;
    return {
        c() {
            e = c("path"),
            u(e, "d", "M224,60H32A20,20,0,0,0,12,80v96a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V80A20,20,0,0,0,224,60Zm-4,112H36V84H220Zm-56-44a16,16,0,1,1,16,16A16,16,0,0,1,164,128Z")
        },
        m(t, r) {
            _(t, e, r)
        },
        p: h,
        d(t) {
            t && m(e)
        }
    }
}
function J(l) {
    let e, t, r, i;
    const H = l[7].default
      , o = C(H, l, l[6], null);
    function p(a, n) {
        return a[0] === "bold" ? I : a[0] === "duotone" ? G : a[0] === "fill" ? F : a[0] === "light" ? E : a[0] === "regular" ? j : a[0] === "thin" ? Y : X
    }
    let d = p(l)
      , s = d(l)
      , v = [{
        xmlns: "http://www.w3.org/2000/svg"
    }, {
        width: l[2]
    }, {
        height: l[2]
    }, {
        fill: l[1]
    }, {
        transform: r = l[3] ? "scale(-1, 1)" : void 0
    }, {
        viewBox: "0 0 256 256"
    }, l[4], l[5]]
      , g = {};
    for (let a = 0; a < v.length; a += 1)
        g = A(g, v[a]);
    return {
        c() {
            e = c("svg"),
            o && o.c(),
            t = c("rect"),
            s.c(),
            u(t, "width", "256"),
            u(t, "height", "256"),
            u(t, "fill", "none"),
            V(e, g)
        },
        m(a, n) {
            _(a, e, n),
            o && o.m(e, null),
            S(e, t),
            s.m(e, null),
            i = !0
        },
        p(a, [n]) {
            o && o.p && (!i || n & 64) && B(o, H, a, a[6], i ? U(H, a[6], n, null) : D(a[6]), null),
            d === (d = p(a)) && s ? s.p(a, n) : (s.d(1),
            s = d(a),
            s && (s.c(),
            s.m(e, null))),
            V(e, g = W(v, [{
                xmlns: "http://www.w3.org/2000/svg"
            }, (!i || n & 4) && {
                width: a[2]
            }, (!i || n & 4) && {
                height: a[2]
            }, (!i || n & 2) && {
                fill: a[1]
            }, (!i || n & 8 && r !== (r = a[3] ? "scale(-1, 1)" : void 0)) && {
                transform: r
            }, {
                viewBox: "0 0 256 256"
            }, a[4], n & 32 && a[5]]))
        },
        i(a) {
            i || (q(o, a),
            i = !0)
        },
        o(a) {
            P(o, a),
            i = !1
        },
        d(a) {
            a && m(e),
            o && o.d(a),
            s.d()
        }
    }
}
function K(l, e, t) {
    const r = ["weight", "color", "size", "mirrored"];
    let i = k(e, r)
      , {$$slots: H={}, $$scope: o} = e;
    const {weight: p, color: d, size: s, mirrored: v, ...g} = Q("iconCtx") || {};
    let {weight: a=p ?? "regular"} = e
      , {color: n=d ?? "currentColor"} = e
      , {size: Z=s ?? "1em"} = e
      , {mirrored: b=v || !1} = e;
    return l.$$set = f => {
        e = A(A({}, e), R(f)),
        t(5, i = k(e, r)),
        "weight"in f && t(0, a = f.weight),
        "color"in f && t(1, n = f.color),
        "size"in f && t(2, Z = f.size),
        "mirrored"in f && t(3, b = f.mirrored),
        "$$scope"in f && t(6, o = f.$$scope)
    }
    ,
    [a, n, Z, b, g, i, o, H]
}
class N extends w {
    constructor(e) {
        super(),
        M(this, e, K, J, z, {
            weight: 0,
            color: 1,
            size: 2,
            mirrored: 3
        })
    }
}
export {N as H};
