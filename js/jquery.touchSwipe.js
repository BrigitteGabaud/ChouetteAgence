!function (n) {
    "function" == typeof define && define.amd && define.amd.jQuery
        ? define(["jquery"], n)
        : n(
            "undefined" != typeof module && module.exports
                ? require("jquery")
                : jQuery
        )
}(function (n) {
    "use strict";
    function ut(t) {
        return !t || void 0 !== t.allowPageScroll || void 0 === t.swipe && void 0 === t.swipeStatus || (
            t.allowPageScroll = o
        ),
        void 0 !== t.click && void 0 === t.tap && (t.tap = t.click),
        t || (t = {}),
        t = n.extend({}, n.fn.swipe.defaults, t),
        this.each(function () {
            var r = n(this),
                i = r.data(c);
            i || (i = new ft(this, t), r.data(c, i))
        })
    }
    function ft(ut, ft) {
        function ki(t) {
            var r,
                f,
                u,
                e;
            if (!(pu() || n(t.target).closest(ft.excludedElements, ot).length > 0) && (
                r = t.originalEvent
                    ? t.originalEvent
                    : t,
                !r.pointerType || "mouse" != r.pointerType || 0 != ft.fallbackToMouseEvents
            )) 
                return u = r.touches,
                e = u
                    ? u[0]
                    : r,
                st = rt,
                u
                    ? ct = u.length
                    : ft.preventDefaultEvents !== !1 && t.preventDefault(),
                at = 0,
                vt = null,
                yt = null,
                kt = null,
                lt = 0,
                gt = 0,
                ni = 0,
                wt = 1,
                bt = 0,
                pi = ku(),
                dr(),
                ci(0, e),
                !u || ct === ft.fingers || ft.fingers === a || oi()
                    ? (
                        sr = dt(),
                        2 == ct && (ci(1, u[1]), gt = ni = fr(ht[0].start, ht[1].start)),
                        (ft.swipeStatus || ft.pinchStatus) && (f = pt(r, st))
                    )
                    : f = !1,
                f === !1
                    ? (st = i, pt(r, st), f)
                    : (
                        ft.hold && (ei = setTimeout(n.proxy(function () {
                            ot.trigger("hold", [r.target]);
                            ft.hold && (f = ft.hold.call(ot, r, r.target))
                        }, this), ft.longTapThreshold)),
                        hi(!0),
                        null
                    )
            }
        function di(n) {
            var f = n.originalEvent
                    ? n.originalEvent
                    : n,
                e,
                h;
            if (st !== t && st !== i && !si()) {
                var o,
                    r = f.touches,
                    c = r
                        ? r[0]
                        : f,
                    u = gr(c);
                (
                    wi = dt(),
                    r && (ct = r.length),
                    ft.hold && clearTimeout(ei),
                    st = s,
                    2 == ct && (
                        0 == gt
                            ? (ci(1, r[1]), gt = ni = fr(ht[0].start, ht[1].start))
                            : (gr(r[1]), ni = fr(ht[0].end, ht[1].end), kt = gu(ht[0].end, ht[1].end)),
                        wt = du(gt, ni),
                        bt = Math.abs(gt - ni)
                    ),
                    ct === ft.fingers || ft.fingers === a || !r || oi()
                )
                    ? (
                        vt = iu(u.start, u.end),
                        yt = iu(u.last, u.end),
                        uu(n, yt),
                        at = nf(u.start, u.end),
                        lt = tu(),
                        bu(vt, at),
                        o = pt(f, st),
                        !ft.triggerOnTouchEnd || ft.triggerOnTouchLeave
                    ) && (
                        e = !0,
                        ft.triggerOnTouchLeave && (h = rf(this), e = uf(u.end, h)),
                        !ft.triggerOnTouchEnd && e
                            ? st = tr(s)
                            : ft.triggerOnTouchLeave && !e && (st = tr(t)),
                        st != i && st != t || pt(f, st)
                    )
                    : (st = i, pt(f, st));
                o === !1 && (st = i, pt(f, st))
            }
        }
        function gi(n) {
            var r = n.originalEvent
                    ? n.originalEvent
                    : n,
                u = r.touches;
            if (u) {
                if (u.length && !si()) 
                    return yu(r),
                    !0;
                if (u.length && si()) 
                    return !0
            }
            return si() && (ct = hr),
            wi = dt(),
            lt = tu(),
            rr() || !ir()
                ? (st = i, pt(r, st))
                : ft.triggerOnTouchEnd || ft.triggerOnTouchEnd === !1 && st === s
                    ? (
                        ft.preventDefaultEvents !== !1 && n.cancelable !== !1 && n.preventDefault(),
                        st = t,
                        pt(r, st)
                    )
                    : !ft.triggerOnTouchEnd && br()
                        ? (st = t, ri(r, st, w))
                        : st === s && (st = i, pt(r, st)),
            hi(!1),
            null
        }
        function ii() {
            ct = 0;
            wi = 0;
            sr = 0;
            gt = 0;
            ni = 0;
            wt = 1;
            dr();
            hi(!1)
        }
        function nr(n) {
            var i = n.originalEvent
                ? n.originalEvent
                : n;
            ft.triggerOnTouchLeave && (st = tr(t), pt(i, st))
        }
        function cr() {
            ot.unbind(vi, ki);
            ot.unbind(yi, ii);
            ot.unbind(er, di);
            ot.unbind(or, gi);
            ui && ot.unbind(ui, nr);
            hi(!1)
        }
        function tr(n) {
            var r = n,
                f = lr(),
                u = ir(),
                e = rr();
            return !f || e
                ? r = i
                : !u || n != s || ft.triggerOnTouchEnd && !ft.triggerOnTouchLeave
                    ? !u && n == t && ft.triggerOnTouchLeave && (r = i)
                    : r = t,
            r
        }
        function pt(n, r) {
            var u,
                f = n.touches;
            return (eu() || yr()) && (u = ri(n, r, g)),
            (fu() || oi()) && u !== !1 && (u = ri(n, r, nt)),
            au() && u !== !1
                ? u = ri(n, r, tt)
                : vu() && u !== !1
                    ? u = ri(n, r, it)
                    : lu() && u !== !1 && (u = ri(n, r, w)),
            r === i && ii(n),
            r === t && (
                f
                    ? f.length || ii(n)
                    : ii(n)
            ),
            u
        }
        function ri(o, s, h) {
            var c;
            if (h == g) {
                if (
                    ot.trigger("swipeStatus", [
                        s, vt || null,
                        at || 0,
                        lt || 0,
                        ct,
                        ht,
                        yt
                    ]),
                    ft.swipeStatus && (c = ft.swipeStatus.call(ot, o, s, vt || null, at || 0, lt || 0, ct, ht, yt), c === !1)
                ) 
                    return !1;
                if (s == t && vr()) {
                    if (clearTimeout(fi), clearTimeout(ei), ot.trigger("swipe", [
                        vt,
                        at,
                        lt,
                        ct,
                        ht,
                        yt
                    ]), ft.swipe && (c = ft.swipe.call(ot, o, vt, at, lt, ct, ht, yt), c === !1)) 
                        return !1;
                    switch (vt) {
                        case r:
                            ot.trigger("swipeLeft", [
                                vt,
                                at,
                                lt,
                                ct,
                                ht,
                                yt
                            ]);
                            ft.swipeLeft && (c = ft.swipeLeft.call(ot, o, vt, at, lt, ct, ht, yt));
                            break;
                        case u:
                            ot.trigger("swipeRight", [
                                vt,
                                at,
                                lt,
                                ct,
                                ht,
                                yt
                            ]);
                            ft.swipeRight && (c = ft.swipeRight.call(ot, o, vt, at, lt, ct, ht, yt));
                            break;
                        case f:
                            ot.trigger("swipeUp", [
                                vt,
                                at,
                                lt,
                                ct,
                                ht,
                                yt
                            ]);
                            ft.swipeUp && (c = ft.swipeUp.call(ot, o, vt, at, lt, ct, ht, yt));
                            break;
                        case e:
                            ot.trigger("swipeDown", [
                                vt,
                                at,
                                lt,
                                ct,
                                ht,
                                yt
                            ]);
                            ft.swipeDown && (c = ft.swipeDown.call(ot, o, vt, at, lt, ct, ht, yt))
                    }
                }
            }
            if (h == nt) {
                if (
                    ot.trigger("pinchStatus", [
                        s, kt || null,
                        bt || 0,
                        lt || 0,
                        ct,
                        wt,
                        ht
                    ]),
                    ft.pinchStatus && (c = ft.pinchStatus.call(ot, o, s, kt || null, bt || 0, lt || 0, ct, wt, ht), c === !1)
                ) 
                    return !1;
                if (s == t && ar()) 
                    switch (kt) {
                        case y:
                            ot.trigger("pinchIn", [
                                kt || null,
                                bt || 0,
                                lt || 0,
                                ct,
                                wt,
                                ht
                            ]);
                            ft.pinchIn && (
                                c = ft.pinchIn.call(ot, o, kt || null, bt || 0, lt || 0, ct, wt, ht)
                            );
                            break;
                        case p:
                            ot.trigger("pinchOut", [
                                kt || null,
                                bt || 0,
                                lt || 0,
                                ct,
                                wt,
                                ht
                            ]);
                            ft.pinchOut && (
                                c = ft.pinchOut.call(ot, o, kt || null, bt || 0, lt || 0, ct, wt, ht)
                            )
                    }
                }
            return h == w
                ? s !== i && s !== t || (
                    clearTimeout(fi),
                    clearTimeout(ei),
                    ur() && !su()
                        ? (ti = dt(), fi = setTimeout(n.proxy(function () {
                            ti = null;
                            ot.trigger("tap", [o.target]);
                            ft.tap && (c = ft.tap.call(ot, o, o.target))
                        }, this), ft.doubleTapThreshold))
                        : (
                            ti = null,
                            ot.trigger("tap", [o.target]),
                            ft.tap && (c = ft.tap.call(ot, o, o.target))
                        )
                )
                : h == tt
                    ? s !== i && s !== t || (
                        clearTimeout(fi),
                        clearTimeout(ei),
                        ti = null,
                        ot.trigger("doubletap", [o.target]),
                        ft.doubleTap && (c = ft.doubleTap.call(ot, o, o.target))
                    )
                    : h == it && (s !== i && s !== t || (
                        clearTimeout(fi),
                        ti = null,
                        ot.trigger("longtap", [o.target]),
                        ft.longTap && (c = ft.longTap.call(ot, o, o.target))
                    )),
            c
        }
        function ir() {
            var n = !0;
            return null !== ft.threshold && (n = at >= ft.threshold),
            n
        }
        function rr() {
            var n = !1;
            return null !== ft.cancelThreshold && null !== vt && (
                n = nu(vt) - at >= ft.cancelThreshold
            ),
            n
        }
        function ru() {
            return null === ft.pinchThreshold || bt >= ft.pinchThreshold
        }
        function lr() {
            return !ft.maxTimeThreshold || !(lt >= ft.maxTimeThreshold)
        }
        function uu(n, t) {
            if (ft.preventDefaultEvents !== !1) 
                if (ft.allowPageScroll === o) 
                    n.preventDefault();
                else {
                    var i = ft.allowPageScroll === d;
                    switch (t) {
                        case r:
                            (ft.swipeLeft && i || !i && ft.allowPageScroll != b) && n.preventDefault();
                            break;
                        case u:
                            (ft.swipeRight && i || !i && ft.allowPageScroll != b) && n.preventDefault();
                            break;
                        case f:
                            (ft.swipeUp && i || !i && ft.allowPageScroll != k) && n.preventDefault();
                            break;
                        case e:
                            (ft.swipeDown && i || !i && ft.allowPageScroll != k) && n.preventDefault()
                    }
                }
            }
        function ar() {
            var n = pr(),
                t = wr(),
                i = ru();
            return n && t && i
        }
        function oi() {
            return !!(ft.pinchStatus || ft.pinchIn || ft.pinchOut)
        }
        function fu() {
            return !(!ar() || !oi())
        }
        function vr() {
            var n = lr(),
                t = ir(),
                i = pr(),
                r = wr(),
                u = rr();
            return !u && r && i && t && n
        }
        function yr() {
            return !!(
                ft.swipe || ft.swipeStatus || ft.swipeLeft || ft.swipeRight || ft.swipeUp || ft.swipeDown
            )
        }
        function eu() {
            return !(!vr() || !yr())
        }
        function pr() {
            return ct === ft.fingers || ft.fingers === a || !l
        }
        function wr() {
            return 0 !== ht[0].end.x
        }
        function br() {
            return !!ft.tap
        }
        function ur() {
            return !!ft.doubleTap
        }
        function ou() {
            return !!ft.longTap
        }
        function kr() {
            if (null == ti) 
                return !1;
            var n = dt();
            return ur() && n - ti <= ft.doubleTapThreshold
        }
        function su() {
            return kr()
        }
        function hu() {
            return (1 === ct || !l) && (isNaN(at) || at < ft.threshold)
        }
        function cu() {
            return lt > ft.longTapThreshold && at < et
        }
        function lu() {
            return !(!hu() || !br())
        }
        function au() {
            return !(!kr() || !ur())
        }
        function vu() {
            return !(!cu() || !ou())
        }
        function yu(n) {
            bi = dt();
            hr = n.touches.length + 1
        }
        function dr() {
            bi = 0;
            hr = 0
        }
        function si() {
            var n = !1,
                t;
            return bi && (t = dt() - bi, t <= ft.fingerReleaseThreshold && (n = !0)),
            n
        }
        function pu() {
            return !(ot.data(c + "_intouch") !== !0)
        }
        function hi(n) {
            ot && (
                n === !0
                    ? (ot.bind(er, di), ot.bind(or, gi), ui && ot.bind(ui, nr))
                    : (ot.unbind(er, di, !1), ot.unbind(or, gi, !1), ui && ot.unbind(ui, nr, !1)),
                ot.data(c + "_intouch", n === !0)
            )
        }
        function ci(n, t) {
            var i = {
                start: {
                    x: 0,
                    y: 0
                },
                last: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                }
            };
            return i.start.x = i.last.x = i.end.x = t.pageX || t.clientX,
            i.start.y = i.last.y = i.end.y = t.pageY || t.clientY,
            ht[n] = i,
            i
        }
        function gr(n) {
            var i = void 0 !== n.identifier
                    ? n.identifier
                    : 0,
                t = wu(i);
            return null === t && (t = ci(i, n)),
            t.last.x = t.end.x,
            t.last.y = t.end.y,
            t.end.x = n.pageX || n.clientX,
            t.end.y = n.pageY || n.clientY,
            t
        }
        function wu(n) {
            return ht[n] || null
        }
        function bu(n, t) {
            n != o && (t = Math.max(t, nu(n)), pi[n].distance = t)
        }
        function nu(n) {
            if (pi[n]) 
                return pi[n].distance
        }
        function ku() {
            var n = {};
            return n[r] = li(r),
            n[u] = li(u),
            n[f] = li(f),
            n[e] = li(e),
            n
        }
        function li(n) {
            return {direction: n, distance: 0}
        }
        function tu() {
            return wi - sr
        }
        function fr(n, t) {
            var i = Math.abs(n.x - t.x),
                r = Math.abs(n.y - t.y);
            return Math.round(Math.sqrt(i * i + r * r))
        }
        function du(n, t) {
            var i = t / n * 1;
            return i.toFixed(2)
        }
        function gu() {
            return wt < 1
                ? p
                : y
        }
        function nf(n, t) {
            return Math.round(Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2)))
        }
        function tf(n, t) {
            var r = n.x - t.x,
                u = t.y - n.y,
                f = Math.atan2(u, r),
                i = Math.round(180 * f / Math.PI);
            return i < 0 && (i = 360 - Math.abs(i)),
            i
        }
        function iu(n, t) {
            if (ff(n, t)) 
                return o;
            var i = tf(n, t);
            return i <= 45 && i >= 0
                ? r
                : i <= 360 && i >= 315
                    ? r
                    : i >= 135 && i <= 225
                        ? u
                        : i > 45 && i < 135
                            ? e
                            : f
        }
        function dt() {
            var n = new Date;
            return n.getTime()
        }
        function rf(t) {
            t = n(t);
            var i = t.offset();
            return {
                left: i.left,
                right: i.left + t.outerWidth(),
                top: i.top,
                bottom: i.top + t.outerHeight()
            }
        }
        function uf(n, t) {
            return n.x > t.left && n.x < t.right && n.y > t.top && n.y < t.bottom
        }
        function ff(n, t) {
            return n.x == t.x && n.y == t.y
        }
        var ft = n.extend({}, ft),
            ai = l || h || !ft.fallbackToMouseEvents,
            vi = ai
                ? h
                    ? v
                        ? "MSPointerDown"
                        : "pointerdown"
                    : "touchstart"
                : "mousedown",
            er = ai
                ? h
                    ? v
                        ? "MSPointerMove"
                        : "pointermove"
                    : "touchmove"
                : "mousemove",
            or = ai
                ? h
                    ? v
                        ? "MSPointerUp"
                        : "pointerup"
                    : "touchend"
                : "mouseup",
            ui = ai
                ? h
                    ? "mouseleave"
                    : null
                : "mouseleave",
            yi = h
                ? v
                    ? "MSPointerCancel"
                    : "pointercancel"
                : "touchcancel",
            at = 0,
            vt = null,
            yt = null,
            lt = 0,
            gt = 0,
            ni = 0,
            wt = 1,
            bt = 0,
            kt = 0,
            pi = null,
            ot = n(ut),
            st = "start",
            ct = 0,
            ht = {},
            sr = 0,
            wi = 0,
            bi = 0,
            hr = 0,
            ti = 0,
            fi = null,
            ei = null;
        try {
            ot.bind(vi, ki);
            ot.bind(yi, ii)
        } catch (ef) {
            n.error(
                "events not supported " + vi + "," + yi + " on jQuery.swipe"
            )
        }
        this.enable = function () {
            return this.disable(),
            ot.bind(vi, ki),
            ot.bind(yi, ii),
            ot
        };
        this.disable = function () {
            return cr(),
            ot
        };
        this.destroy = function () {
            cr();
            ot.data(c, null);
            ot = null
        };
        this.option = function (t, i) {
            if ("object" == typeof t) 
                ft = n.extend(ft, t);
            else if (void 0 !== ft[t]) {
                if (void 0 === i) 
                    return ft[t];
                ft[t] = i
            } else {
                if (!t) 
                    return ft;
                n.error(
                    "Option " + t + " does not exist on jQuery.swipe.options"
                )
            }
            return null
        }
    }
    var r = "left",
        u = "right",
        f = "up",
        e = "down",
        y = "in",
        p = "out",
        o = "none",
        d = "auto",
        g = "swipe",
        nt = "pinch",
        w = "tap",
        tt = "doubletap",
        it = "longtap",
        b = "horizontal",
        k = "vertical",
        a = "all",
        et = 10,
        rt = "start",
        s = "move",
        t = "end",
        i = "cancel",
        l = "ontouchstart" in window,
        v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !l,
        h = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !l,
        c = "TouchSwipe";
    n.fn.swipe = function (t) {
        var r = n(this),
            i = r.data(c);
        if (i && "string" == typeof t) {
            if (i[t]) 
                return i[t].apply(i, Array.prototype.slice.call(arguments, 1));
            n.error(
                "Method " + t + " does not exist on jQuery.swipe"
            )
        } else if (i && "object" == typeof t) 
            i
                .option
                .apply(i, arguments);
        else if (!(i || "object" != typeof t && t)) 
            return ut.apply(this, arguments);
        return r
    };
    n.fn.swipe.version = "1.6.18";
    n.fn.swipe.defaults = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0,
        excludedElements: ".noSwipe",
        preventDefaultEvents: !0
    };
    n.fn.swipe.phases = {
        PHASE_START: rt,
        PHASE_MOVE: s,
        PHASE_END: t,
        PHASE_CANCEL: i
    };
    n.fn.swipe.directions = {
        LEFT: r,
        RIGHT: u,
        UP: f,
        DOWN: e,
        IN: y,
        OUT: p
    };
    n.fn.swipe.pageScroll = {
        NONE: o,
        HORIZONTAL: b,
        VERTICAL: k,
        AUTO: d
    };
    n.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
        ALL: a
    }
})