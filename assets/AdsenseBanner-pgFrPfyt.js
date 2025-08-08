import {S as ie, i as ne, s as ae, a as ot, e as vt, c as J, p as kt, h as Y, j as oe, A as xt, k as $, m as O, B as se, b as U, aq as Bt, l as _t, z as Dt} from "./index-BsTNpDop.js";
import {g as de} from "./_commonjsHelpers-Cpj98o6Y.js";
var Wt = {
    exports: {}
}
  , ce = Wt.exports = {};
ce.forEach = function(r, e) {
    for (var i = 0; i < r.length; i++) {
        var t = e(r[i]);
        if (t)
            return t
    }
}
;
var Rt = Wt.exports
  , le = function(r) {
    var e = r.stateHandler.getState;
    function i(c) {
        var o = e(c);
        return o && !!o.isDetectable
    }
    function t(c) {
        e(c).isDetectable = !0
    }
    function a(c) {
        return !!e(c).busy
    }
    function d(c, o) {
        e(c).busy = !!o
    }
    return {
        isDetectable: i,
        markAsDetectable: t,
        isBusy: a,
        markBusy: d
    }
}
  , ue = function(r) {
    var e = {};
    function i(c) {
        var o = r.get(c);
        return o === void 0 ? [] : e[o] || []
    }
    function t(c, o) {
        var v = r.get(c);
        e[v] || (e[v] = []),
        e[v].push(o)
    }
    function a(c, o) {
        for (var v = i(c), s = 0, l = v.length; s < l; ++s)
            if (v[s] === o) {
                v.splice(s, 1);
                break
            }
    }
    function d(c) {
        var o = i(c);
        o && (o.length = 0)
    }
    return {
        get: i,
        add: t,
        removeListener: a,
        removeAllListeners: d
    }
}
  , fe = function() {
    var r = 1;
    function e() {
        return r++
    }
    return {
        generate: e
    }
}
  , he = function(r) {
    var e = r.idGenerator
      , i = r.stateHandler.getState;
    function t(d) {
        var c = i(d);
        return c && c.id !== void 0 ? c.id : null
    }
    function a(d) {
        var c = i(d);
        if (!c)
            throw new Error("setId required the element to have a resize detection state.");
        var o = e.generate();
        return c.id = o,
        o
    }
    return {
        get: t,
        set: a
    }
}
  , ve = function(r) {
    function e() {}
    var i = {
        log: e,
        warn: e,
        error: e
    };
    if (!r && window.console) {
        var t = function(a, d) {
            a[d] = function() {
                var o = console[d];
                if (o.apply)
                    o.apply(console, arguments);
                else
                    for (var v = 0; v < arguments.length; v++)
                        o(arguments[v])
            }
        };
        t(i, "log"),
        t(i, "warn"),
        t(i, "error")
    }
    return i
}
  , qt = {
    exports: {}
}
  , Ft = qt.exports = {};
Ft.isIE = function(r) {
    function e() {
        var t = navigator.userAgent.toLowerCase();
        return t.indexOf("msie") !== -1 || t.indexOf("trident") !== -1 || t.indexOf(" edge/") !== -1
    }
    if (!e())
        return !1;
    if (!r)
        return !0;
    var i = function() {
        var t, a = 3, d = document.createElement("div"), c = d.getElementsByTagName("i");
        do
            d.innerHTML = "<!--[if gt IE " + ++a + "]><i></i><![endif]-->";
        while (c[0]);
        return a > 4 ? a : t
    }();
    return r === i
}
;
Ft.isLegacyOpera = function() {
    return !!window.opera
}
;
var Ut = qt.exports
  , $t = {
    exports: {}
}
  , ge = $t.exports = {};
ge.getOption = pe;
function pe(r, e, i) {
    var t = r[e];
    return t == null && i !== void 0 ? i : t
}
var be = $t.exports
  , Ct = be
  , ye = function(e) {
    e = e || {};
    var i = e.reporter
      , t = Ct.getOption(e, "async", !0)
      , a = Ct.getOption(e, "auto", !0);
    a && !t && (i && i.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),
    t = !0);
    var d = At(), c, o = !1;
    function v(m, L) {
        !o && a && t && d.size() === 0 && g(),
        d.add(m, L)
    }
    function s() {
        for (o = !0; d.size(); ) {
            var m = d;
            d = At(),
            m.process()
        }
        o = !1
    }
    function l(m) {
        o || (m === void 0 && (m = t),
        c && (x(c),
        c = null),
        m ? g() : s())
    }
    function g() {
        c = _(s)
    }
    function x(m) {
        var L = clearTimeout;
        return L(m)
    }
    function _(m) {
        var L = function(M) {
            return setTimeout(M, 0)
        };
        return L(m)
    }
    return {
        add: v,
        force: l
    }
};
function At() {
    var r = {}
      , e = 0
      , i = 0
      , t = 0;
    function a(o, v) {
        v || (v = o,
        o = 0),
        o > i ? i = o : o < t && (t = o),
        r[o] || (r[o] = []),
        r[o].push(v),
        e++
    }
    function d() {
        for (var o = t; o <= i; o++)
            for (var v = r[o], s = 0; s < v.length; s++) {
                var l = v[s];
                l()
            }
    }
    function c() {
        return e
    }
    return {
        add: a,
        process: d,
        size: c
    }
}
var gt = "_erd";
function we(r) {
    return r[gt] = {},
    Gt(r)
}
function Gt(r) {
    return r[gt]
}
function Se(r) {
    delete r[gt]
}
var me = {
    initState: we,
    getState: Gt,
    cleanState: Se
}
  , nt = Ut
  , Ee = function(r) {
    r = r || {};
    var e = r.reporter
      , i = r.batchProcessor
      , t = r.stateHandler.getState;
    if (!e)
        throw new Error("Missing required dependency: reporter.");
    function a(s, l) {
        function g() {
            l(s)
        }
        if (nt.isIE(8))
            t(s).object = {
                proxy: g
            },
            s.attachEvent("onresize", g);
        else {
            var x = o(s);
            if (!x)
                throw new Error("Element is not detectable by this strategy.");
            x.contentDocument.defaultView.addEventListener("resize", g)
        }
    }
    function d(s) {
        var l = r.important ? " !important; " : "; ";
        return (s.join(l) + l).trim()
    }
    function c(s, l, g) {
        g || (g = l,
        l = s,
        s = null),
        s = s || {},
        s.debug;
        function x(_, m) {
            var L = d(["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none"])
              , M = !1
              , B = window.getComputedStyle(_)
              , D = _.offsetWidth
              , C = _.offsetHeight;
            t(_).startSize = {
                width: D,
                height: C
            };
            function h() {
                function n() {
                    if (B.position === "static") {
                        _.style.setProperty("position", "relative", s.important ? "important" : "");
                        var A = function(T, S, H, p) {
                            function w(j) {
                                return j.replace(/[^-\d\.]/g, "")
                            }
                            var N = H[p];
                            N !== "auto" && w(N) !== "0" && (T.warn("An element that is positioned static has style." + p + "=" + N + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + p + " will be set to 0. Element: ", S),
                            S.style.setProperty(p, "0", s.important ? "important" : ""))
                        };
                        A(e, _, B, "top"),
                        A(e, _, B, "right"),
                        A(e, _, B, "bottom"),
                        A(e, _, B, "left")
                    }
                }
                function E() {
                    M || n();
                    function A(S, H) {
                        if (!S.contentDocument) {
                            var p = t(S);
                            p.checkForObjectDocumentTimeoutId && window.clearTimeout(p.checkForObjectDocumentTimeoutId),
                            p.checkForObjectDocumentTimeoutId = setTimeout(function() {
                                p.checkForObjectDocumentTimeoutId = 0,
                                A(S, H)
                            }, 100);
                            return
                        }
                        H(S.contentDocument)
                    }
                    var T = this;
                    A(T, function(H) {
                        m(_)
                    })
                }
                B.position !== "" && (n(),
                M = !0);
                var u = document.createElement("object");
                u.style.cssText = L,
                u.tabIndex = -1,
                u.type = "text/html",
                u.setAttribute("aria-hidden", "true"),
                u.onload = E,
                nt.isIE() || (u.data = "about:blank"),
                t(_) && (_.appendChild(u),
                t(_).object = u,
                nt.isIE() && (u.data = "about:blank"))
            }
            i ? i.add(h) : h()
        }
        nt.isIE(8) ? g(l) : x(l, g)
    }
    function o(s) {
        return t(s).object
    }
    function v(s) {
        if (t(s)) {
            var l = o(s);
            l && (nt.isIE(8) ? s.detachEvent("onresize", l.proxy) : s.removeChild(l),
            t(s).checkForObjectDocumentTimeoutId && window.clearTimeout(t(s).checkForObjectDocumentTimeoutId),
            delete t(s).object)
        }
    }
    return {
        makeDetectable: c,
        addListener: a,
        uninstall: v
    }
}
  , ke = Rt.forEach
  , xe = function(r) {
    r = r || {};
    var e = r.reporter
      , i = r.batchProcessor
      , t = r.stateHandler.getState;
    r.stateHandler.hasState;
    var a = r.idHandler;
    if (!i)
        throw new Error("Missing required dependency: batchProcessor");
    if (!e)
        throw new Error("Missing required dependency: reporter.");
    var d = l()
      , c = "erd_scroll_detection_scrollbar_style"
      , o = "erd_scroll_detection_container";
    function v(h) {
        g(h, c, o)
    }
    v(window.document);
    function s(h) {
        var n = r.important ? " !important; " : "; ";
        return (h.join(n) + n).trim()
    }
    function l() {
        var h = 500
          , n = 500
          , E = document.createElement("div");
        E.style.cssText = s(["position: absolute", "width: " + h * 2 + "px", "height: " + n * 2 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);
        var u = document.createElement("div");
        u.style.cssText = s(["position: absolute", "width: " + h + "px", "height: " + n + "px", "overflow: scroll", "visibility: none", "top: " + -h * 3 + "px", "left: " + -n * 3 + "px", "visibility: hidden", "margin: 0", "padding: 0"]),
        u.appendChild(E),
        document.body.insertBefore(u, document.body.firstChild);
        var A = h - u.clientWidth
          , T = n - u.clientHeight;
        return document.body.removeChild(u),
        {
            width: A,
            height: T
        }
    }
    function g(h, n, E) {
        function u(H, p) {
            p = p || function(N) {
                h.head.appendChild(N)
            }
            ;
            var w = h.createElement("style");
            return w.innerHTML = H,
            w.id = n,
            p(w),
            w
        }
        if (!h.getElementById(n)) {
            var A = E + "_animation"
              , T = E + "_animation_active"
              , S = `/* Created by the element-resize-detector library. */
`;
            S += "." + E + " > div::-webkit-scrollbar { " + s(["display: none"]) + ` }

`,
            S += "." + T + " { " + s(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + A, "animation-name: " + A]) + ` }
`,
            S += "@-webkit-keyframes " + A + ` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`,
            S += "@keyframes " + A + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",
            u(S)
        }
    }
    function x(h) {
        h.className += " " + o + "_animation_active"
    }
    function _(h, n, E) {
        if (h.addEventListener)
            h.addEventListener(n, E);
        else if (h.attachEvent)
            h.attachEvent("on" + n, E);
        else
            return e.error("[scroll] Don't know how to add event listeners.")
    }
    function m(h, n, E) {
        if (h.removeEventListener)
            h.removeEventListener(n, E);
        else if (h.detachEvent)
            h.detachEvent("on" + n, E);
        else
            return e.error("[scroll] Don't know how to remove event listeners.")
    }
    function L(h) {
        return t(h).container.childNodes[0].childNodes[0].childNodes[0]
    }
    function M(h) {
        return t(h).container.childNodes[0].childNodes[0].childNodes[1]
    }
    function B(h, n) {
        var E = t(h).listeners;
        if (!E.push)
            throw new Error("Cannot add listener to an element that is not detectable.");
        t(h).listeners.push(n)
    }
    function D(h, n, E) {
        E || (E = n,
        n = h,
        h = null),
        h = h || {};
        function u() {
            if (h.debug) {
                var f = Array.prototype.slice.call(arguments);
                if (f.unshift(a.get(n), "Scroll: "),
                e.log.apply)
                    e.log.apply(null, f);
                else
                    for (var b = 0; b < f.length; b++)
                        e.log(f[b])
            }
        }
        function A(f) {
            function b(k) {
                var W = k.getRootNode && k.getRootNode().contains(k);
                return k === k.ownerDocument.body || k.ownerDocument.body.contains(k) || W
            }
            return !b(f) || window.getComputedStyle(f) === null
        }
        function T(f) {
            var b = t(f).container.childNodes[0]
              , k = window.getComputedStyle(b);
            return !k.width || k.width.indexOf("px") === -1
        }
        function S() {
            var f = window.getComputedStyle(n)
              , b = {};
            return b.position = f.position,
            b.width = n.offsetWidth,
            b.height = n.offsetHeight,
            b.top = f.top,
            b.right = f.right,
            b.bottom = f.bottom,
            b.left = f.left,
            b.widthCSS = f.width,
            b.heightCSS = f.height,
            b
        }
        function H() {
            var f = S();
            t(n).startSize = {
                width: f.width,
                height: f.height
            },
            u("Element start size", t(n).startSize)
        }
        function p() {
            t(n).listeners = []
        }
        function w() {
            if (u("storeStyle invoked."),
            !t(n)) {
                u("Aborting because element has been uninstalled");
                return
            }
            var f = S();
            t(n).style = f
        }
        function N(f, b, k) {
            t(f).lastWidth = b,
            t(f).lastHeight = k
        }
        function j(f) {
            return L(f).childNodes[0]
        }
        function K() {
            return 2 * d.width + 1
        }
        function st() {
            return 2 * d.height + 1
        }
        function dt(f) {
            return f + 10 + K()
        }
        function ct(f) {
            return f + 10 + st()
        }
        function Jt(f) {
            return f * 2 + K()
        }
        function Yt(f) {
            return f * 2 + st()
        }
        function pt(f, b, k) {
            var W = L(f)
              , Q = M(f)
              , tt = dt(b)
              , et = ct(k)
              , I = Jt(b)
              , y = Yt(k);
            W.scrollLeft = tt,
            W.scrollTop = et,
            Q.scrollLeft = I,
            Q.scrollTop = y
        }
        function bt() {
            var f = t(n).container;
            if (!f) {
                f = document.createElement("div"),
                f.className = o,
                f.style.cssText = s(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]),
                t(n).container = f,
                x(f),
                n.appendChild(f);
                var b = function() {
                    t(n).onRendered && t(n).onRendered()
                };
                _(f, "animationstart", b),
                t(n).onAnimationStart = b
            }
            return f
        }
        function Kt() {
            function f() {
                var z = t(n).style;
                if (z.position === "static") {
                    n.style.setProperty("position", "relative", h.important ? "important" : "");
                    var F = function(it, Z, te, ut) {
                        function ee(re) {
                            return re.replace(/[^-\d\.]/g, "")
                        }
                        var ht = te[ut];
                        ht !== "auto" && ee(ht) !== "0" && (it.warn("An element that is positioned static has style." + ut + "=" + ht + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + ut + " will be set to 0. Element: ", Z),
                        Z.style[ut] = 0)
                    };
                    F(e, n, z, "top"),
                    F(e, n, z, "right"),
                    F(e, n, z, "bottom"),
                    F(e, n, z, "left")
                }
            }
            function b(z, F, it, Z) {
                return z = z ? z + "px" : "0",
                F = F ? F + "px" : "0",
                it = it ? it + "px" : "0",
                Z = Z ? Z + "px" : "0",
                ["left: " + z, "top: " + F, "right: " + Z, "bottom: " + it]
            }
            if (u("Injecting elements"),
            !t(n)) {
                u("Aborting because element has been uninstalled");
                return
            }
            f();
            var k = t(n).container;
            k || (k = bt());
            var W = d.width
              , Q = d.height
              , tt = s(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"])
              , et = s(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat(b(-(1 + W), -(1 + Q), -Q, -W)))
              , I = s(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"])
              , y = s(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"])
              , P = s(["position: absolute", "left: 0", "top: 0"])
              , X = s(["position: absolute", "width: 200%", "height: 200%"])
              , R = document.createElement("div")
              , q = document.createElement("div")
              , rt = document.createElement("div")
              , wt = document.createElement("div")
              , lt = document.createElement("div")
              , St = document.createElement("div");
            R.dir = "ltr",
            R.style.cssText = tt,
            R.className = o,
            q.className = o,
            q.style.cssText = et,
            rt.style.cssText = I,
            wt.style.cssText = P,
            lt.style.cssText = y,
            St.style.cssText = X,
            rt.appendChild(wt),
            lt.appendChild(St),
            q.appendChild(rt),
            q.appendChild(lt),
            R.appendChild(q),
            k.appendChild(R);
            function mt() {
                var z = t(n);
                z && z.onExpand ? z.onExpand() : u("Aborting expand scroll handler: element has been uninstalled")
            }
            function Et() {
                var z = t(n);
                z && z.onShrink ? z.onShrink() : u("Aborting shrink scroll handler: element has been uninstalled")
            }
            _(rt, "scroll", mt),
            _(lt, "scroll", Et),
            t(n).onExpandScroll = mt,
            t(n).onShrinkScroll = Et
        }
        function Qt() {
            function f(I, y, P) {
                var X = j(I)
                  , R = dt(y)
                  , q = ct(P);
                X.style.setProperty("width", R + "px", h.important ? "important" : ""),
                X.style.setProperty("height", q + "px", h.important ? "important" : "")
            }
            function b(I) {
                var y = n.offsetWidth
                  , P = n.offsetHeight
                  , X = y !== t(n).lastWidth || P !== t(n).lastHeight;
                u("Storing current size", y, P),
                N(n, y, P),
                i.add(0, function() {
                    if (X) {
                        if (!t(n)) {
                            u("Aborting because element has been uninstalled");
                            return
                        }
                        if (!k()) {
                            u("Aborting because element container has not been initialized");
                            return
                        }
                        if (h.debug) {
                            var q = n.offsetWidth
                              , rt = n.offsetHeight;
                            (q !== y || rt !== P) && e.warn(a.get(n), "Scroll: Size changed before updating detector elements.")
                        }
                        f(n, y, P)
                    }
                }),
                i.add(1, function() {
                    if (!t(n)) {
                        u("Aborting because element has been uninstalled");
                        return
                    }
                    if (!k()) {
                        u("Aborting because element container has not been initialized");
                        return
                    }
                    pt(n, y, P)
                }),
                X && I && i.add(2, function() {
                    if (!t(n)) {
                        u("Aborting because element has been uninstalled");
                        return
                    }
                    if (!k()) {
                        u("Aborting because element container has not been initialized");
                        return
                    }
                    I()
                })
            }
            function k() {
                return !!t(n).container
            }
            function W() {
                function I() {
                    return t(n).lastNotifiedWidth === void 0
                }
                u("notifyListenersIfNeeded invoked");
                var y = t(n);
                if (I() && y.lastWidth === y.startSize.width && y.lastHeight === y.startSize.height)
                    return u("Not notifying: Size is the same as the start size, and there has been no notification yet.");
                if (y.lastWidth === y.lastNotifiedWidth && y.lastHeight === y.lastNotifiedHeight)
                    return u("Not notifying: Size already notified");
                u("Current size not notified, notifying..."),
                y.lastNotifiedWidth = y.lastWidth,
                y.lastNotifiedHeight = y.lastHeight,
                ke(t(n).listeners, function(P) {
                    P(n)
                })
            }
            function Q() {
                if (u("startanimation triggered."),
                T(n)) {
                    u("Ignoring since element is still unrendered...");
                    return
                }
                u("Element rendered.");
                var I = L(n)
                  , y = M(n);
                (I.scrollLeft === 0 || I.scrollTop === 0 || y.scrollLeft === 0 || y.scrollTop === 0) && (u("Scrollbars out of sync. Updating detector elements..."),
                b(W))
            }
            function tt() {
                if (u("Scroll detected."),
                T(n)) {
                    u("Scroll event fired while unrendered. Ignoring...");
                    return
                }
                b(W)
            }
            if (u("registerListenersAndPositionElements invoked."),
            !t(n)) {
                u("Aborting because element has been uninstalled");
                return
            }
            t(n).onRendered = Q,
            t(n).onExpand = tt,
            t(n).onShrink = tt;
            var et = t(n).style;
            f(n, et.width, et.height)
        }
        function Xt() {
            if (u("finalizeDomMutation invoked."),
            !t(n)) {
                u("Aborting because element has been uninstalled");
                return
            }
            var f = t(n).style;
            N(n, f.width, f.height),
            pt(n, f.width, f.height)
        }
        function Zt() {
            E(n)
        }
        function yt() {
            u("Installing..."),
            p(),
            H(),
            i.add(0, w),
            i.add(1, Kt),
            i.add(2, Qt),
            i.add(3, Xt),
            i.add(4, Zt)
        }
        u("Making detectable..."),
        A(n) ? (u("Element is detached"),
        bt(),
        u("Waiting until element is attached..."),
        t(n).onRendered = function() {
            u("Element is now attached"),
            yt()
        }
        ) : yt()
    }
    function C(h) {
        var n = t(h);
        n && (n.onExpandScroll && m(L(h), "scroll", n.onExpandScroll),
        n.onShrinkScroll && m(M(h), "scroll", n.onShrinkScroll),
        n.onAnimationStart && m(n.container, "animationstart", n.onAnimationStart),
        n.container && h.removeChild(n.container))
    }
    return {
        makeDetectable: D,
        addListener: B,
        uninstall: C,
        initDocument: v
    }
}
  , at = Rt.forEach
  , _e = le
  , De = ue
  , Ce = fe
  , Ae = he
  , ze = ve
  , zt = Ut
  , He = ye
  , G = me
  , Le = Ee
  , Te = xe;
function Ht(r) {
    return Array.isArray(r) || r.length !== void 0
}
function Lt(r) {
    if (Array.isArray(r))
        return r;
    var e = [];
    return at(r, function(i) {
        e.push(i)
    }),
    e
}
function Tt(r) {
    return r && r.nodeType === 1
}
var je = function(r) {
    r = r || {};
    var e;
    if (r.idHandler)
        e = {
            get: function(D) {
                return r.idHandler.get(D, !0)
            },
            set: r.idHandler.set
        };
    else {
        var i = Ce()
          , t = Ae({
            idGenerator: i,
            stateHandler: G
        });
        e = t
    }
    var a = r.reporter;
    if (!a) {
        var d = a === !1;
        a = ze(d)
    }
    var c = V(r, "batchProcessor", He({
        reporter: a
    }))
      , o = {};
    o.callOnAdd = !!V(r, "callOnAdd", !0),
    o.debug = !!V(r, "debug", !1);
    var v = De(e), s = _e({
        stateHandler: G
    }), l, g = V(r, "strategy", "object"), x = V(r, "important", !1), _ = {
        reporter: a,
        batchProcessor: c,
        stateHandler: G,
        idHandler: e,
        important: x
    };
    if (g === "scroll" && (zt.isLegacyOpera() ? (a.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),
    g = "object") : zt.isIE(9) && (a.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),
    g = "object")),
    g === "scroll")
        l = Te(_);
    else if (g === "object")
        l = Le(_);
    else
        throw new Error("Invalid strategy name: " + g);
    var m = {};
    function L(D, C, h) {
        function n(H) {
            var p = v.get(H);
            at(p, function(N) {
                N(H)
            })
        }
        function E(H, p, w) {
            v.add(p, w),
            H && w(p)
        }
        if (h || (h = C,
        C = D,
        D = {}),
        !C)
            throw new Error("At least one element required.");
        if (!h)
            throw new Error("Listener required.");
        if (Tt(C))
            C = [C];
        else if (Ht(C))
            C = Lt(C);
        else
            return a.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        var u = 0
          , A = V(D, "callOnAdd", o.callOnAdd)
          , T = V(D, "onReady", function() {})
          , S = V(D, "debug", o.debug);
        at(C, function(p) {
            G.getState(p) || (G.initState(p),
            e.set(p));
            var w = e.get(p);
            if (S && a.log("Attaching listener to element", w, p),
            !s.isDetectable(p)) {
                if (S && a.log(w, "Not detectable."),
                s.isBusy(p)) {
                    S && a.log(w, "System busy making it detectable"),
                    E(A, p, h),
                    m[w] = m[w] || [],
                    m[w].push(function() {
                        u++,
                        u === C.length && T()
                    });
                    return
                }
                return S && a.log(w, "Making detectable..."),
                s.markBusy(p, !0),
                l.makeDetectable({
                    debug: S,
                    important: x
                }, p, function(j) {
                    if (S && a.log(w, "onElementDetectable"),
                    G.getState(j)) {
                        s.markAsDetectable(j),
                        s.markBusy(j, !1),
                        l.addListener(j, n),
                        E(A, j, h);
                        var K = G.getState(j);
                        if (K && K.startSize) {
                            var st = j.offsetWidth
                              , dt = j.offsetHeight;
                            (K.startSize.width !== st || K.startSize.height !== dt) && n(j)
                        }
                        m[w] && at(m[w], function(ct) {
                            ct()
                        })
                    } else
                        S && a.log(w, "Element uninstalled before being detectable.");
                    delete m[w],
                    u++,
                    u === C.length && T()
                })
            }
            S && a.log(w, "Already detecable, adding listener."),
            E(A, p, h),
            u++
        }),
        u === C.length && T()
    }
    function M(D) {
        if (!D)
            return a.error("At least one element is required.");
        if (Tt(D))
            D = [D];
        else if (Ht(D))
            D = Lt(D);
        else
            return a.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        at(D, function(C) {
            v.removeAllListeners(C),
            l.uninstall(C),
            G.cleanState(C)
        })
    }
    function B(D) {
        l.initDocument && l.initDocument(D)
    }
    return {
        listenTo: L,
        removeListener: v.removeListener,
        removeAllListeners: v.removeAllListeners,
        uninstall: M,
        initDocument: B
    }
};
function V(r, e, i) {
    var t = r[e];
    return t == null && i !== void 0 ? i : t
}
const Ie = de(je);
var ft = Ie({
    strategy: "scroll"
});
function Vt(r, e) {
    ft.listenTo(r, e);
    var i = e;
    return {
        update: function(t) {
            ft.removeListener(r, i),
            ft.listenTo(r, t),
            i = t
        },
        destroy: function() {
            ft.removeListener(r, i)
        }
    }
}
function jt(r) {
    let e, i, t, a, d, c, o, v, s, l = r[1] && It(r);
    return {
        c() {
            e = $("div"),
            l && l.c(),
            i = ot(),
            t = $("ins"),
            c = ot(),
            o = $("script"),
            o.textContent = `setTimeout(() => {\r
                (window.adsbygoogle = window.adsbygoogle || []).push({})\r
            }, 500);`,
            O(t, "class", "adsbygoogle"),
            se(t, "display", "inline-block"),
            O(t, "data-ad-client", a = r[0].settings.ads.site),
            O(t, "data-ad-slot", d = r[0].settings.ads.b1),
            O(e, "class", "w-full h-auto flex flex-row justify-center items-center")
        },
        m(g, x) {
            J(g, e, x),
            l && l.m(e, null),
            U(e, i),
            U(e, t),
            r[3](t),
            U(e, c),
            U(e, o),
            v || (s = Bt(Vt.call(null, t, r[2])),
            v = !0)
        },
        p(g, x) {
            g[1] ? l ? l.p(g, x) : (l = It(g),
            l.c(),
            l.m(e, i)) : l && (l.d(1),
            l = null),
            x & 1 && a !== (a = g[0].settings.ads.site) && O(t, "data-ad-client", a),
            x & 1 && d !== (d = g[0].settings.ads.b1) && O(t, "data-ad-slot", d)
        },
        d(g) {
            g && Y(e),
            l && l.d(),
            r[3](null),
            v = !1,
            s()
        }
    }
}
function It(r) {
    let e, i = r[1].clientHeight > 0 && Ot();
    return {
        c() {
            i && i.c(),
            e = vt()
        },
        m(t, a) {
            i && i.m(t, a),
            J(t, e, a)
        },
        p(t, a) {
            t[1].clientHeight > 0 ? i || (i = Ot(),
            i.c(),
            i.m(e.parentNode, e)) : i && (i.d(1),
            i = null)
        },
        d(t) {
            t && Y(e),
            i && i.d(t)
        }
    }
}
function Ot(r) {
    let e;
    return {
        c() {
            e = $("p"),
            e.textContent = "Advertisement",
            O(e, "class", "text-gray-500")
        },
        m(i, t) {
            J(i, e, t)
        },
        d(i) {
            i && Y(e)
        }
    }
}
function Nt(r) {
    let e, i, t, a, d, c, o, v, s, l = r[1] && Pt(r);
    return {
        c() {
            e = $("div"),
            l && l.c(),
            i = ot(),
            t = $("div"),
            a = $("script"),
            a.textContent = `atOptions = {\r
            		'key' : \`\${window.localStorage.getItem('adsterra')}\`,\r
            		'format' : 'iframe',\r
            		'height' : 250,\r
            		'width' : 300,\r
            		'params' : {}\r
            	};`,
            d = ot(),
            c = $("script"),
            O(a, "type", "text/javascript"),
            O(c, "type", "text/javascript"),
            _t(c.src, o = "//www.topcreativeformat.com/" + r[0].settings.ads.adsterraBanner + "/invoke.js") || O(c, "src", o),
            O(e, "class", "w-full h-auto flex flex-col justify-center items-center")
        },
        m(g, x) {
            J(g, e, x),
            l && l.m(e, null),
            U(e, i),
            U(e, t),
            U(t, a),
            U(t, d),
            U(t, c),
            r[4](t),
            v || (s = Bt(Vt.call(null, t, r[2])),
            v = !0)
        },
        p(g, x) {
            g[1] ? l ? l.p(g, x) : (l = Pt(g),
            l.c(),
            l.m(e, i)) : l && (l.d(1),
            l = null),
            x & 1 && !_t(c.src, o = "//www.topcreativeformat.com/" + g[0].settings.ads.adsterraBanner + "/invoke.js") && O(c, "src", o)
        },
        d(g) {
            g && Y(e),
            l && l.d(),
            r[4](null),
            v = !1,
            s()
        }
    }
}
function Pt(r) {
    let e, i = r[1].clientHeight > 0 && Mt();
    return {
        c() {
            i && i.c(),
            e = vt()
        },
        m(t, a) {
            i && i.m(t, a),
            J(t, e, a)
        },
        p(t, a) {
            t[1].clientHeight > 0 ? i || (i = Mt(),
            i.c(),
            i.m(e.parentNode, e)) : i && (i.d(1),
            i = null)
        },
        d(t) {
            t && Y(e),
            i && i.d(t)
        }
    }
}
function Mt(r) {
    let e;
    return {
        c() {
            e = $("p"),
            e.textContent = "Advertisement",
            O(e, "class", "text-gray-500")
        },
        m(i, t) {
            J(i, e, t)
        },
        d(i) {
            i && Y(e)
        }
    }
}
function Oe(r) {
    let e, i, t = r[0].settings.ads.site && r[0].settings.ads.b1 && r[0].settings.ads.adservice == "ADSENSE" && jt(r), a = r[0].settings.ads.adsterraBanner && r[0].settings.ads.adservice == "ADSTERRA" && Nt(r);
    return {
        c() {
            t && t.c(),
            e = ot(),
            a && a.c(),
            i = vt()
        },
        m(d, c) {
            t && t.m(d, c),
            J(d, e, c),
            a && a.m(d, c),
            J(d, i, c)
        },
        p(d, [c]) {
            d[0].settings.ads.site && d[0].settings.ads.b1 && d[0].settings.ads.adservice == "ADSENSE" ? t ? t.p(d, c) : (t = jt(d),
            t.c(),
            t.m(e.parentNode, e)) : t && (t.d(1),
            t = null),
            d[0].settings.ads.adsterraBanner && d[0].settings.ads.adservice == "ADSTERRA" ? a ? a.p(d, c) : (a = Nt(d),
            a.c(),
            a.m(i.parentNode, i)) : a && (a.d(1),
            a = null)
        },
        i: kt,
        o: kt,
        d(d) {
            d && (Y(e),
            Y(i)),
            t && t.d(d),
            a && a.d(d)
        }
    }
}
function Ne(r, e, i) {
    let t = oe(xt);
    xt.subscribe(v => i(0, t = v)),
    localStorage.setItem("adsterra", t.settings.ads.adsterraBanner);
    let a;
    const d = () => {
        console.log(`[ADS] New size: ${a.clientHeight}x${a.clientWidth}`)
    }
    ;
    function c(v) {
        Dt[v ? "unshift" : "push"]( () => {
            a = v,
            i(1, a)
        }
        )
    }
    function o(v) {
        Dt[v ? "unshift" : "push"]( () => {
            a = v,
            i(1, a)
        }
        )
    }
    return [t, a, d, c, o]
}
class Be extends ie {
    constructor(e) {
        super(),
        ne(this, e, Ne, Oe, ae, {})
    }
}
export {Be as A};
