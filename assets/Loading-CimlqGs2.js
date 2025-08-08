import {S as r, i, s as l, k as c, m as o, c as f, p as t, h as m} from "./index-BsTNpDop.js";
function u(a) {
    let e;
    return {
        c() {
            e = c("div"),
            e.innerHTML = '<img src="/images/loading.svg" alt="API error" class="w-14"/>',
            o(e, "class", "w-full h-screen flex flex-col items-center justify-center")
        },
        m(s, n) {
            f(s, e, n)
        },
        p: t,
        i: t,
        o: t,
        d(s) {
            s && m(e)
        }
    }
}
class p extends r {
    constructor(e) {
        super(),
        i(this, e, null, u, l, {})
    }
}
export {p as default};
