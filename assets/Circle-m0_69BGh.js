import {S as M, i as z, s as S, Q as B, R as A, T as c, m as u, U as w, c as _, b as U, V as W, W as q, X as D, Y as P, t as Q, d as R, h, Z as C, _ as T, $ as V, D as X, p as m} from "./index-BsTNpDop.js";
function Y(i) {
    let e = (console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),
    ""), t;
    return {
        c() {
            t = X(e)
        },
        m(r, o) {
            _(r, t, o)
        },
        p: m,
        d(r) {
            r && h(t)
        }
    }
}
function j(i) {
    let e;
    return {
        c() {
            e = c("path"),
            u(e, "d", "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Z")
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
function E(i) {
    let e;
    return {
        c() {
            e = c("path"),
            u(e, "d", "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z")
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
function F(i) {
    let e;
    return {
        c() {
            e = c("path"),
            u(e, "d", "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Z")
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
function G(i) {
    let e;
    return {
        c() {
            e = c("path"),
            u(e, "d", "M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z")
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
function H(i) {
    let e, t;
    return {
        c() {
            e = c("path"),
            t = c("path"),
            u(e, "d", "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z"),
            u(e, "opacity", "0.2"),
            u(t, "d", "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z")
        },
        m(r, o) {
            _(r, e, o),
            _(r, t, o)
        },
        p: m,
        d(r) {
            r && (h(e),
            h(t))
        }
    }
}
function I(i) {
    let e;
    return {
        c() {
            e = c("path"),
            u(e, "d", "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Z")
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
function J(i) {
    let e, t, r, o;
    const p = i[7].default
      , n = B(p, i, i[6], null);
    function Z(l, s) {
        return l[0] === "bold" ? I : l[0] === "duotone" ? H : l[0] === "fill" ? G : l[0] === "light" ? F : l[0] === "regular" ? E : l[0] === "thin" ? j : Y
    }
    let d = Z(i)
      , a = d(i)
      , b = [{
        xmlns: "http://www.w3.org/2000/svg"
    }, {
        width: i[2]
    }, {
        height: i[2]
    }, {
        fill: i[1]
    }, {
        transform: r = i[3] ? "scale(-1, 1)" : void 0
    }, {
        viewBox: "0 0 256 256"
    }, i[4], i[5]]
      , g = {};
    for (let l = 0; l < b.length; l += 1)
        g = A(g, b[l]);
    return {
        c() {
            e = c("svg"),
            n && n.c(),
            t = c("rect"),
            a.c(),
            u(t, "width", "256"),
            u(t, "height", "256"),
            u(t, "fill", "none"),
            w(e, g)
        },
        m(l, s) {
            _(l, e, s),
            n && n.m(e, null),
            U(e, t),
            a.m(e, null),
            o = !0
        },
        p(l, [s]) {
            n && n.p && (!o || s & 64) && W(n, p, l, l[6], o ? D(p, l[6], s, null) : q(l[6]), null),
            d === (d = Z(l)) && a ? a.p(l, s) : (a.d(1),
            a = d(l),
            a && (a.c(),
            a.m(e, null))),
            w(e, g = P(b, [{
                xmlns: "http://www.w3.org/2000/svg"
            }, (!o || s & 4) && {
                width: l[2]
            }, (!o || s & 4) && {
                height: l[2]
            }, (!o || s & 2) && {
                fill: l[1]
            }, (!o || s & 8 && r !== (r = l[3] ? "scale(-1, 1)" : void 0)) && {
                transform: r
            }, {
                viewBox: "0 0 256 256"
            }, l[4], s & 32 && l[5]]))
        },
        i(l) {
            o || (Q(n, l),
            o = !0)
        },
        o(l) {
            R(n, l),
            o = !1
        },
        d(l) {
            l && h(e),
            n && n.d(l),
            a.d()
        }
    }
}
function K(i, e, t) {
    const r = ["weight", "color", "size", "mirrored"];
    let o = C(e, r)
      , {$$slots: p={}, $$scope: n} = e;
    const {weight: Z, color: d, size: a, mirrored: b, ...g} = T("iconCtx") || {};
    let {weight: l=Z ?? "regular"} = e
      , {color: s=d ?? "currentColor"} = e
      , {size: k=a ?? "1em"} = e
      , {mirrored: v=b || !1} = e;
    return i.$$set = f => {
        e = A(A({}, e), V(f)),
        t(5, o = C(e, r)),
        "weight"in f && t(0, l = f.weight),
        "color"in f && t(1, s = f.color),
        "size"in f && t(2, k = f.size),
        "mirrored"in f && t(3, v = f.mirrored),
        "$$scope"in f && t(6, n = f.$$scope)
    }
    ,
    [l, s, k, v, g, o, n, p]
}
class N extends M {
    constructor(e) {
        super(),
        z(this, e, K, J, S, {
            weight: 0,
            color: 1,
            size: 2,
            mirrored: 3
        })
    }
}
export {N as C};
