import {S as T, i as W, s as q, e as I, c as b, g as A, d as x, f as C, t as w, h as g, G as z, k as m, m as p, j as D, A as E, p as k, w as L, x as M, y as N, a as y, D as j, b as v, F as B, n as F} from "./index-BsTNpDop.js";
import {S as G} from "./Server-1sJHdrVi.js";
import {W as H} from "./Error-CT4ErOqx.js";
function O(n) {
    let e;
    return {
        c() {
            e = m("div"),
            e.innerHTML = '<div class="w-full h-full bg-no-repeat bg-center bg-cover rounded-md rounded-b-none"></div> <div class="p-2 text-white"><div class="flex flex-row justify-between flex-wrap"><div class="flex flex-col mb-2"><div class="h-2 w-32 rounded-md bg-slate-600 mb-2"></div> <div class="flex flex-row gap-1 items-center justify-start"><div class="h-5 w-5 bg-slate-600 rounded-md"></div> <div class="h-2 w-20 rounded-md bg-slate-600"></div></div></div> <div class="h-2 w-20 rounded-md bg-slate-600"></div></div> <div class="flex flex-row flex-wrap justify-between"><div class="flex flex-col text-white text-md gap-1"><div class="flex flex-row space-x-1 items-center text-sm"><div class="h-4 w-4 bg-slate-600 rounded-md"></div> <div class="h-1 w-14 rounded-md bg-slate-600"></div></div> <div class="flex flex-row space-x-1 items-center text-sm"><div class="h-4 w-4 bg-slate-600 rounded-md"></div> <div class="h-1 w-14 rounded-md bg-slate-600"></div></div> <div class="flex flex-row space-x-1 items-center text-sm"><div class="h-4 w-4 bg-slate-600 rounded-md"></div> <div class="h-1 w-14 rounded-md bg-slate-600"></div></div> <div class="flex flex-row space-x-1 items-center text-sm"><div class="h-4 w-4 bg-slate-600 rounded-md"></div> <div class="h-1 w-14 rounded-md bg-slate-600"></div></div></div> <div class="flex flex-col text-white text-md gap-1"><div class="flex flex-row space-x-1 items-center text-sm"><div class="h-4 w-4 bg-slate-600 rounded-md"></div> <div class="h-1 w-14 rounded-md bg-slate-600"></div></div> <div class="flex flex-row space-x-1 items-center text-sm"><div class="h-4 w-4 bg-slate-600 rounded-md"></div> <div class="h-1 w-14 rounded-md bg-slate-600"></div></div> <div class="flex flex-row space-x-1 items-center text-sm"><div class="h-4 w-4 bg-slate-600 rounded-md"></div> <div class="h-1 w-14 rounded-md bg-slate-600"></div></div></div> <div class="flex flex-row gap-1 h-full w-full items-end justify-end text-xl p-1 mt-5"><div class="h-5 w-20 bg-slate-600 rounded-full"></div> <div class="h-5 w-20 bg-slate-600 rounded-full"></div> <div class="h-5 w-20 bg-slate-600 rounded-full"></div></div></div></div>',
            p(e, "class", `flex flex-col bg-slate-800 rounded-md shadow-md [&>*]:animate-pulse w-96 ${D(E).features.perServerPlans ? "h-80" : "h-72"}`)
        },
        m(t, s) {
            b(t, e, s)
        },
        p: k,
        i: k,
        o: k,
        d(t) {
            t && g(e)
        }
    }
}
function U(n) {
    let e, t, s, i;
    const d = [K, J]
      , r = [];
    function c(l, o) {
        return l[5] ? 0 : 1
    }
    return e = c(n),
    t = r[e] = d[e](n),
    {
        c() {
            t.c(),
            s = I()
        },
        m(l, o) {
            r[e].m(l, o),
            b(l, s, o),
            i = !0
        },
        p(l, o) {
            let a = e;
            e = c(l),
            e === a ? r[e].p(l, o) : (A(),
            x(r[a], 1, 1, () => {
                r[a] = null
            }
            ),
            C(),
            t = r[e],
            t ? t.p(l, o) : (t = r[e] = d[e](l),
            t.c()),
            w(t, 1),
            t.m(s.parentNode, s))
        },
        i(l) {
            i || (w(t),
            i = !0)
        },
        o(l) {
            x(t),
            i = !1
        },
        d(l) {
            l && g(s),
            r[e].d(l)
        }
    }
}
function J(n) {
    let e, t;
    return e = new G({
        props: {
            info: n[4],
            populate: n[2],
            staff: n[1]
        }
    }),
    {
        c() {
            L(e.$$.fragment)
        },
        m(s, i) {
            M(e, s, i),
            t = !0
        },
        p(s, i) {
            const d = {};
            i & 16 && (d.info = s[4]),
            i & 4 && (d.populate = s[2]),
            i & 2 && (d.staff = s[1]),
            e.$set(d)
        },
        i(s) {
            t || (w(e.$$.fragment, s),
            t = !0)
        },
        o(s) {
            x(e.$$.fragment, s),
            t = !1
        },
        d(s) {
            N(e, s)
        }
    }
}
function K(n) {
    let e, t, s, i, d, r, c, l, o, a, S, _;
    s = new H({});
    let f = n[1] && P(n);
    return {
        c() {
            e = m("div"),
            t = m("i"),
            L(s.$$.fragment),
            i = y(),
            d = m("p"),
            d.textContent = "An error occurred while loading this server.",
            r = y(),
            c = m("p"),
            l = j("Please contact staff with the following ID: "),
            o = m("code"),
            a = j(n[0]),
            S = y(),
            f && f.c(),
            p(t, "class", "text-5xl text-white mt-2"),
            p(d, "class", "text-white text-md"),
            p(c, "class", "text-gray-500 text-sm"),
            p(e, "class", `flex flex-col items-center gap-5 justify-center bg-slate-800 rounded-md shadow-md w-96 ${D(E).features.perServerPlans ? "h-80" : "h-72"} text-center`)
        },
        m(u, h) {
            b(u, e, h),
            v(e, t),
            M(s, t, null),
            v(e, i),
            v(e, d),
            v(e, r),
            v(e, c),
            v(c, l),
            v(c, o),
            v(o, a),
            v(e, S),
            f && f.m(e, null),
            _ = !0
        },
        p(u, h) {
            (!_ || h & 1) && B(a, u[0]),
            u[1] ? f ? f.p(u, h) : (f = P(u),
            f.c(),
            f.m(e, null)) : f && (f.d(1),
            f = null)
        },
        i(u) {
            _ || (w(s.$$.fragment, u),
            _ = !0)
        },
        o(u) {
            x(s.$$.fragment, u),
            _ = !1
        },
        d(u) {
            u && g(e),
            N(s),
            f && f.d()
        }
    }
}
function P(n) {
    let e, t, s;
    return {
        c() {
            e = m("button"),
            e.textContent = "[Staff] Delete and ignore Pterodactyl errors",
            p(e, "class", "flex flex-col justify-end items-end hover:scale-105 text-xs transition text-red-500")
        },
        m(i, d) {
            b(i, e, d),
            t || (s = F(e, "click", n[6]),
            t = !0)
        },
        p: k,
        d(i) {
            i && g(e),
            t = !1,
            s()
        }
    }
}
function Q(n) {
    let e, t, s, i;
    const d = [U, O]
      , r = [];
    function c(l, o) {
        return l[3] ? 0 : 1
    }
    return e = c(n),
    t = r[e] = d[e](n),
    {
        c() {
            t.c(),
            s = I()
        },
        m(l, o) {
            r[e].m(l, o),
            b(l, s, o),
            i = !0
        },
        p(l, [o]) {
            let a = e;
            e = c(l),
            e === a ? r[e].p(l, o) : (A(),
            x(r[a], 1, 1, () => {
                r[a] = null
            }
            ),
            C(),
            t = r[e],
            t ? t.p(l, o) : (t = r[e] = d[e](l),
            t.c()),
            w(t, 1),
            t.m(s.parentNode, s))
        },
        i(l) {
            i || (w(t),
            i = !0)
        },
        o(l) {
            x(t),
            i = !1
        },
        d(l) {
            l && g(s),
            r[e].d(l)
        }
    }
}
function R(n, e, t) {
    let {id: s=""} = e
      , {staff: i=!1} = e
      , {populate: d= () => {}
    } = e
      , r = !1
      , c = {}
      , l = !1;
    z(async () => {
        const a = await (await fetch(`/api/server/${s}${i ? "?noInacUnsuspend=true" : ""}`)).json();
        a.statusCode == 200 ? (t(4, c = a.server),
        t(3, r = !0)) : (t(5, l = !0),
        t(3, r = !0))
    }
    );
    const o = async () => {
        await fetch(`/api/server/${s}/delete?ignorePtero=true`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }),
        d()
    }
    ;
    return n.$$set = a => {
        "id"in a && t(0, s = a.id),
        "staff"in a && t(1, i = a.staff),
        "populate"in a && t(2, d = a.populate)
    }
    ,
    [s, i, d, r, c, l, o]
}
class Z extends T {
    constructor(e) {
        super(),
        W(this, e, R, Q, q, {
            id: 0,
            staff: 1,
            populate: 2
        })
    }
}
export {Z as S};
