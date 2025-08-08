import {S as p, i as M, s as w, D as x, c as _, F as C, p as i, h as D, G as g, o as y} from "./index-BsTNpDop.js";
function I(r) {
    let t;
    return {
        c() {
            t = x(r[0])
        },
        m(s, o) {
            _(s, t, o)
        },
        p(s, [o]) {
            o & 1 && C(t, s[0])
        },
        i,
        o: i,
        d(s) {
            s && D(t)
        }
    }
}
function S(r, t, s) {
    let o, e = "...", {date: l=0} = t;
    const u = () => {
        const f = new Date().getTime()
          , n = l - f
          , d = Math.floor(n / (1e3 * 60 * 60 * 24 * 30))
          , m = Math.floor(n % (1e3 * 60 * 60 * 24 * 30) / (1e3 * 60 * 60 * 24))
          , h = Math.floor(n % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60))
          , c = Math.floor(n % (1e3 * 60 * 60) / (1e3 * 60))
          , a = Math.floor(n % (1e3 * 60) / 1e3);
        n < 0 ? s(0, e = "0s") : d > 0 ? s(0, e = `${d}mo ${m}d ${h}h ${c}m ${a}s`) : m > 0 ? s(0, e = `${m}d ${h}h ${c}m ${a}s`) : h > 0 ? s(0, e = `${h}h ${c}m ${a}s`) : c > 0 ? s(0, e = `${c}m ${a}s`) : a > 0 ? s(0, e = `${a}s`) : s(0, e = "0s")
    }
    ;
    return g( () => {
        u(),
        o = setInterval(u, 1e3)
    }
    ),
    y( () => {
        clearInterval(o)
    }
    ),
    r.$$set = f => {
        "date"in f && s(1, l = f.date)
    }
    ,
    [e, l]
}
class F extends p {
    constructor(t) {
        super(),
        M(this, t, S, I, w, {
            date: 1
        })
    }
}
export {F as C};
