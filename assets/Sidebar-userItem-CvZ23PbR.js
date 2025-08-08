import {S as R, i as V, s as W, e as X, c as h, t as k, g as J, d as $, f as K, h as F, a2 as M, a3 as Y, k as p, a as v, D as C, l as T, m as u, b as a, F as P, w as U, x as D, y as j, af as Z, j as L, A as ee, ak as te} from "./index-BsTNpDop.js";
import {C as le} from "./Coins-8GQ-ENex.js";
import {C as re} from "./Crown-Cq19TznL.js";
import {P as ne} from "./PiggyBank-tMY1tgQg.js";
function z(i) {
    let e, t, l, r, n, s, f, m, c = i[0].username + "", _, g, w, q, S, I, B, A, d = i[0].rank == "ADMIN" && E(), b = i[0].rank == "STAFF" && G();
    const O = [ae, se]
      , N = [];
    function Q(x, y) {
        return L(ee).features.perServerPlans ? 0 : 1
    }
    S = Q(),
    I = N[S] = O[S](i);
    let o = i[0].plans.length > 0 && H();
    return {
        c() {
            e = p("div"),
            t = p("img"),
            r = v(),
            n = p("div"),
            s = p("div"),
            f = p("div"),
            m = p("p"),
            _ = C(c),
            g = v(),
            d && d.c(),
            w = v(),
            b && b.c(),
            q = v(),
            I.c(),
            B = v(),
            o && o.c(),
            T(t.src, l = i[0].avatarUrl) || u(t, "src", l),
            u(t, "class", "w-10 h-10 rounded-full"),
            u(t, "alt", "Avatar"),
            u(m, "class", "font-bold"),
            u(f, "class", "flex flex-row gap-2 items-center"),
            u(s, "class", "flex flex-col justify-between w-full"),
            u(n, "class", "flex gap-2 items-center justify-between w-full pr-3 "),
            u(e, "class", "flex flex-row gap-2 items-center sidebar-useritem")
        },
        m(x, y) {
            h(x, e, y),
            a(e, t),
            a(e, r),
            a(e, n),
            a(n, s),
            a(s, f),
            a(f, m),
            a(m, _),
            a(f, g),
            d && d.m(f, null),
            a(f, w),
            b && b.m(f, null),
            a(s, q),
            N[S].m(s, null),
            a(s, B),
            o && o.m(s, null),
            A = !0
        },
        p(x, y) {
            (!A || y & 1 && !T(t.src, l = x[0].avatarUrl)) && u(t, "src", l),
            (!A || y & 1) && c !== (c = x[0].username + "") && P(_, c),
            x[0].rank == "ADMIN" ? d || (d = E(),
            d.c(),
            d.m(f, w)) : d && (d.d(1),
            d = null),
            x[0].rank == "STAFF" ? b || (b = G(),
            b.c(),
            b.m(f, null)) : b && (b.d(1),
            b = null),
            I.p(x, y),
            x[0].plans.length > 0 ? o ? y & 1 && k(o, 1) : (o = H(),
            o.c(),
            k(o, 1),
            o.m(s, null)) : o && (J(),
            $(o, 1, 1, () => {
                o = null
            }
            ),
            K())
        },
        i(x) {
            A || (k(I),
            k(o),
            A = !0)
        },
        o(x) {
            $(I),
            $(o),
            A = !1
        },
        d(x) {
            x && F(e),
            d && d.d(),
            b && b.d(),
            N[S].d(),
            o && o.d()
        }
    }
}
function E(i) {
    let e;
    return {
        c() {
            e = p("span"),
            e.textContent = "Admin",
            u(e, "class", "w-max flex items-center gap-1 text-red-900 bg-red-300 px-2 py-1 rounded-full font-bold text-xs")
        },
        m(t, l) {
            h(t, e, l)
        },
        d(t) {
            t && F(e)
        }
    }
}
function G(i) {
    let e;
    return {
        c() {
            e = p("span"),
            e.textContent = "Staff",
            u(e, "class", "w-max flex items-center gap-1 text-sky-900 bg-sky-300 px-2 py-1 rounded-full font-bold text-xs")
        },
        m(t, l) {
            h(t, e, l)
        },
        d(t) {
            t && F(e)
        }
    }
}
function se(i) {
    let e, t, l, r, n = Number(i[0].coins).toFixed(2) + "", s, f, m;
    return t = new le({}),
    {
        c() {
            e = p("div"),
            U(t.$$.fragment),
            l = v(),
            r = p("p"),
            s = C(n),
            f = C(" coins"),
            u(r, "class", "text-sm"),
            u(e, "class", "flex flex-row items-center gap-1")
        },
        m(c, _) {
            h(c, e, _),
            D(t, e, null),
            a(e, l),
            a(e, r),
            a(r, s),
            a(r, f),
            m = !0
        },
        p(c, _) {
            (!m || _ & 1) && n !== (n = Number(c[0].coins).toFixed(2) + "") && P(s, n)
        },
        i(c) {
            m || (k(t.$$.fragment, c),
            m = !0)
        },
        o(c) {
            $(t.$$.fragment, c),
            m = !1
        },
        d(c) {
            c && F(e),
            j(t)
        }
    }
}
function ae(i) {
    let e, t, l, r, n, s = L(te).symbol + "", f, m = Number(i[0].balance).toFixed(2) + "", c, _;
    return t = new ne({}),
    {
        c() {
            e = p("div"),
            U(t.$$.fragment),
            l = v(),
            r = p("p"),
            n = C("Balance: "),
            f = C(s),
            c = C(m),
            u(r, "class", "text-sm"),
            u(e, "class", "flex flex-row items-center gap-1")
        },
        m(g, w) {
            h(g, e, w),
            D(t, e, null),
            a(e, l),
            a(e, r),
            a(r, n),
            a(r, f),
            a(r, c),
            _ = !0
        },
        p(g, w) {
            (!_ || w & 1) && m !== (m = Number(g[0].balance).toFixed(2) + "") && P(c, m)
        },
        i(g) {
            _ || (k(t.$$.fragment, g),
            _ = !0)
        },
        o(g) {
            $(t.$$.fragment, g),
            _ = !1
        },
        d(g) {
            g && F(e),
            j(t)
        }
    }
}
function H(i) {
    let e, t, l, r, n;
    return t = new re({}),
    {
        c() {
            e = p("div"),
            U(t.$$.fragment),
            l = v(),
            r = p("p"),
            r.textContent = "Premium",
            u(r, "class", "text-sm"),
            u(e, "class", "flex flex-row items-center gap-1 text-amber-500")
        },
        m(s, f) {
            h(s, e, f),
            D(t, e, null),
            a(e, l),
            a(e, r),
            n = !0
        },
        i(s) {
            n || (k(t.$$.fragment, s),
            n = !0)
        },
        o(s) {
            $(t.$$.fragment, s),
            n = !1
        },
        d(s) {
            s && F(e),
            j(t)
        }
    }
}
function ie(i) {
    let e, t, l = i[0].rank && z(i);
    return {
        c() {
            l && l.c(),
            e = X()
        },
        m(r, n) {
            l && l.m(r, n),
            h(r, e, n),
            t = !0
        },
        p(r, [n]) {
            r[0].rank ? l ? (l.p(r, n),
            n & 1 && k(l, 1)) : (l = z(r),
            l.c(),
            k(l, 1),
            l.m(e.parentNode, e)) : l && (J(),
            $(l, 1, 1, () => {
                l = null
            }
            ),
            K())
        },
        i(r) {
            t || (k(l),
            t = !0)
        },
        o(r) {
            $(l),
            t = !1
        },
        d(r) {
            r && F(e),
            l && l.d(r)
        }
    }
}
function fe(i, e, t) {
    let l = M();
    const r = () => {
        Z().then( () => {
            t(0, l = M())
        }
        )
    }
    ;
    return r(),
    Y.set(r),
    [l]
}
class pe extends R {
    constructor(e) {
        super(),
        V(this, e, fe, ie, W, {})
    }
}
export {pe as S};
