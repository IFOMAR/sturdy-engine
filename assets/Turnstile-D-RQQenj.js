import {S as J, i as O, s as j, e as T, a as P, b as Q, c as s, p as o, h as f, am as U, G as V, R as N, $ as x, k as E, l as W, m as X, n as Y, aq as Z} from "./index-BsTNpDop.js";
function C(u) {
    let e, t, r, i;
    return {
        c() {
            e = E("script"),
            e.innerHTML = "",
            W(e.src, t = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit") || X(e, "src", t),
            e.async = !0
        },
        m(n, a) {
            s(n, e, a),
            r || (i = Y(e, "load", u[2]),
            r = !0)
        },
        p: o,
        d(n) {
            n && f(e),
            r = !1,
            i()
        }
    }
}
function M(u) {
    let e = u[4], t, r = S(u);
    return {
        c() {
            r.c(),
            t = T()
        },
        m(i, n) {
            r.m(i, n),
            s(i, t, n)
        },
        p(i, n) {
            n & 16 && j(e, e = i[4]) ? (r.d(1),
            r = S(i),
            r.c(),
            r.m(t.parentNode, t)) : r.p(i, n)
        },
        d(i) {
            i && f(t),
            r.d(i)
        }
    }
}
function S(u) {
    let e, t, r;
    return {
        c() {
            e = E("div")
        },
        m(i, n) {
            s(i, e, n),
            t || (r = Z(u[3].call(null, e)),
            t = !0)
        },
        p: o,
        d(i) {
            i && f(e),
            t = !1,
            r()
        }
    }
}
function v(u) {
    let e, t, r, i = u[1] && !u[0] && C(u), n = u[0] && u[1] && M(u);
    return {
        c() {
            i && i.c(),
            e = T(),
            t = P(),
            n && n.c(),
            r = T()
        },
        m(a, c) {
            i && i.m(document.head, null),
            Q(document.head, e),
            s(a, t, c),
            n && n.m(a, c),
            s(a, r, c)
        },
        p(a, [c]) {
            a[1] && !a[0] ? i ? i.p(a, c) : (i = C(a),
            i.c(),
            i.m(e.parentNode, e)) : i && (i.d(1),
            i = null),
            a[0] && a[1] ? n ? n.p(a, c) : (n = M(a),
            n.c(),
            n.m(r.parentNode, r)) : n && (n.d(1),
            n = null)
        },
        i: o,
        o,
        d(a) {
            a && (f(t),
            f(r)),
            i && i.d(a),
            f(e),
            n && n.d(a)
        }
    }
}
function w() {
    return typeof window > "u" ? null : "turnstile"in window
}
function p(u, e, t) {
    const r = U();
    let i = w(), n = !1, a, {siteKey: c} = e, {appearance: d="always"} = e, {language: m="auto"} = e, {formsField: y="cf-turnstile-response"} = e, {execution: b="render"} = e, {action: k=void 0} = e, {cData: h=void 0} = e, {retryInterval: I=8e3} = e, {retry: g="auto"} = e, {theme: D="auto"} = e, {size: z="normal"} = e, {forms: F=!0} = e, {tabIndex: K=0} = e;
    V( () => (t(1, n = !0),
    () => {
        t(1, n = !1)
    }
    ));
    function G() {
        t(0, i = !0)
    }
    function H() {
        r("turnstile-error", {})
    }
    function L() {
        r("turnstile-expired", {})
    }
    function R() {
        r("turnstile-timeout", {})
    }
    function _(l) {
        r("turnstile-callback", {
            token: l
        })
    }
    function A() {
        window.turnstile.reset(a)
    }
    const B = l => {
        const q = window.turnstile.render(l, {
            "timeout-callback": R,
            "expired-callback": L,
            "error-callback": H,
            callback: _,
            sitekey: c,
            "response-field-name": y,
            "retry-interval": I,
            "response-field": F,
            tabindex: K,
            appearance: d,
            execution: b,
            language: m,
            action: k,
            retry: g,
            theme: D,
            cData: h,
            size: z
        });
        return a = q,
        {
            destroy: () => {
                window.turnstile.remove(q)
            }
        }
    }
    ;
    return u.$$set = l => {
        t(4, e = N(N({}, e), x(l))),
        "siteKey"in l && t(5, c = l.siteKey),
        "appearance"in l && t(6, d = l.appearance),
        "language"in l && t(7, m = l.language),
        "formsField"in l && t(8, y = l.formsField),
        "execution"in l && t(9, b = l.execution),
        "action"in l && t(10, k = l.action),
        "cData"in l && t(11, h = l.cData),
        "retryInterval"in l && t(12, I = l.retryInterval),
        "retry"in l && t(13, g = l.retry),
        "theme"in l && t(14, D = l.theme),
        "size"in l && t(15, z = l.size),
        "forms"in l && t(16, F = l.forms),
        "tabIndex"in l && t(17, K = l.tabIndex)
    }
    ,
    e = x(e),
    [i, n, G, B, e, c, d, m, y, b, k, h, I, g, D, z, F, K, A]
}
class ee extends J {
    constructor(e) {
        super(),
        O(this, e, p, v, j, {
            siteKey: 5,
            appearance: 6,
            language: 7,
            formsField: 8,
            execution: 9,
            action: 10,
            cData: 11,
            retryInterval: 12,
            retry: 13,
            theme: 14,
            size: 15,
            forms: 16,
            tabIndex: 17,
            reset: 18
        })
    }
    get reset() {
        return this.$$.ctx[18]
    }
}
export {ee as T};
