$(document).ready(() => {
    homeSlider();
    scrollNav()
    initAnimations();
    initCoachingForm();
    spotifyToggle();
});
const spotifyToggle = () => {
    $('.spotify-toggle').on('click', function () {
        $('.spotify-container').toggleClass('is-open');
    });
}
const homeSlider = () => {
    setInterval(function () {
        let current = document.querySelector('.slide.active');
        if (current.nextElementSibling) {
            current.nextElementSibling.classList.add('active');
        } else {
            current.parentElement.firstElementChild.classList.add('active');
        };
        current.classList.remove('active');
    }, 6000);
}
const scrollNav = () => {
    $(window).scroll(function () {
        const sw = $(this).width();
        const windowtop = $(this).scrollTop();
        const headerHeight = sw >= 768 ? 75 : 70;
        const $activeSection = $('.section')
            .filter(function () {
                return (windowtop > ($(this).offset().top - headerHeight));
            })
            .last();
        const sectionId = $activeSection.data('nav');
        const $navItem = $(`.nav-${sectionId}`);
        if (!$navItem.hasClass('active')) {
            $('.nav-item.active').removeClass('active');
            $navItem.addClass('active');
        }
    });
}
const initAnimations = () => {
    $(document).ready(function () {
        let animation_elements = $.find('.animation-element');
        let web_window = $(window);

        function check_if_in_view() {
            let window_height = web_window.height();
            let window_top_position = web_window.scrollTop();
            let window_bottom_position = (window_top_position + window_height);
            $.each(animation_elements, function () {
                let element = $(this);
                let element_height = $(element).outerHeight();
                let element_top_position = $(element).offset().top;
                let element_bottom_position = (element_top_position + element_height);
                const isInView = (element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position);
                element.toggleClass('in-view', isInView);
            });
        }
        $(window).on('scroll resize', function () {
            check_if_in_view();
        });
        $(window).trigger('scroll');
    });
};
const initCoachingForm = () => {
    let $cgfContainer;
    let checks = 10;
    let interval = setInterval(() => {
        $cgfContainer = $('.cgf__title');
        console.log($cgfContainer);
        if ($cgfContainer && $cgfContainer.length) {
            $cgfContainer.after(`<progress id="form-progress" value="0" max="4"> 0% </progress>`);
            $('#regForm input[type=text]').on('keypress', function (e) {
                if (e.key === 'Enter') {
                    $('#regForm .cgf__actions button:last-child').click();
                }
            });
            clearInterval(interval);
        }
        if (--checks < 1) {
            clearInterval(interval);
        }
    }, 300);

    const data = {
        "preview": "form",
        "lastChangeTime": 0,
        "theme": "custom",
        "themeType": "custom",
        "customTheme": {
            "font-family": "{\"family\":\"Barlow\",\"subsets\":[\"latin\",\"latin-ext\",\"vietnamese\"],\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"]}",
            "container-lh": 1.5,
            "container-bg-color": "#ffffff00",
            "container-width": "580px",
            "container-radius": "6px",
            "border-color": "#ffffff00",
            "text-color": "#1e293b",
            "link-color": "#0f172a",
            "error-color": "#dc2626",
            "btn-disabled-opacity": 0.45,
            "btn-primary-bg-color": "#2F4A60",
            "btn-primary-text-color": "#fff",
            "btn-font-size": "16px",
            "btn-primary-outline-color": "#60a5fa",
            "btn-primary-outline-opacity": "0.45",
            "btn-secondary-bg-color": "#f0f0f1",
            "btn-secondary-text-color": "#333",
            "title-size": "24px",
            "text-size": "18px",
            "control-bg-color": "#ffffff21",
            "control-radius": "6px",
            "control-outline-color": "#3b82f67d",
            "control-border-color": "#d1d5db",
            "control-border-focus-color": "#3b82f6",
            "control-radio-checked-bg-color": "#3b82f6",
            "control-error-bg-color": "#fef2f2",
            "control-error-border-color": "#ef4444",
            "control-error-text-color": "#7f1d1d",
            "control-group-bg-color": "#ffffff00",
            "control-group-radius": "6px",
            "control-group-padding": "16px",
            "control-group-b-margin": "20px",
            "control-label-b-margin": "4px",
            "control-label-fw": 500
        },
        "fields": [{
                "id": "emailAddress",
                "type": "SHORT_ANSWER",
                "label": "Email",
                "required": true,
                "description": null
            },
            {
                "id": "1486830366",
                "type": "SHORT_ANSWER",
                "label": "First/Preferred Name",
                "required": true,
                "description": null
            }, {
                "type": "SECTION",
                "label": "How can I help you grow🌟",
                "description": null
            }, {
                "id": "1447330797",
                "type": "CHECKBOX",
                "label": null,
                "options": [{
                    "label": "Gain Muscle",
                    "custom": false
                }, {
                    "label": "Lose Weight",
                    "custom": false
                }, {
                    "label": "Gain Weight",
                    "custom": false
                }, {
                    "label": "Gain Confidence",
                    "custom": false
                }, {
                    "label": "Improve healthy habits",
                    "custom": false
                }, {
                    "label": "Improve nutrition/ eating habits",
                    "custom": false
                }, {
                    "label": "Accountability/ Consistency",
                    "custom": false
                }],
                "required": true,
                "description": null
            }, {
                "type": "SECTION",
                "label": null,
                "description": null
            }, {
                "id": "1225614236",
                "type": "RADIO",
                "label": "Gender:",
                "options": [{
                    "label": "Female",
                    "custom": false
                }, {
                    "label": "Male",
                    "custom": false
                }, {
                    "label": "",
                    "custom": true
                }],
                "required": true,
                "description": null
            }, {
                "id": "358733618",
                "type": "RADIO",
                "label": "Age",
                "options": [{
                    "label": "under 18",
                    "custom": false
                }, {
                    "label": "18-25",
                    "custom": false
                }, {
                    "label": "25-35",
                    "custom": false
                }, {
                    "label": "35+",
                    "custom": false
                }],
                "required": true,
                "description": null
            }, {
                "id": "1584871114",
                "type": "RADIO",
                "label": "Occupation",
                "options": [{
                    "label": "Office/Corporate",
                    "custom": false
                }, {
                    "label": "Student",
                    "custom": false
                }, {
                    "label": "Customer Service Industry (Server, Retail..)",
                    "custom": false
                }, {
                    "label": "",
                    "custom": true
                }],
                "required": true,
                "description": null
            }, {
                "type": "SECTION",
                "label": "✨Goals✨",
                "description": null
            }, {
                "id": "319843415",
                "type": "LONG_ANSWER",
                "label": "3 short term goals:",
                "required": false,
                "description": null
            }, {
                "id": "233189499",
                "type": "LONG_ANSWER",
                "label": "What's holding you back from achieving your goals? (e.g. recent events, accountability, knowledge)",
                "required": true,
                "description": null
            }, {
                "type": "SECTION",
                "label": "Let's get started🌱",
                "description": null
            }, {
                "id": "996941872",
                "type": "RADIO",
                "label": "Are you ready to invest financially, mentally and physically to hit your goals?",
                "options": [{
                    "label": "Yes",
                    "custom": false
                }, {
                    "label": "No",
                    "custom": false
                }],
                "required": true,
                "description": null
            }, {
                "id": "1285689872",
                "type": "DATE",
                "label": "When would you ideally like to start your new coaching program?",
                "required": true,
                "withTime": false,
                "withYear": true,
                "description": null
            }
        ],
        "settings": {
            "form": {
                "showBrandedLogo": true,
                "submit": "Submit"
            },
            "success": {
                "type": "page",
                "redirectUrl": "",
                "title": "",
                "description": "",
                "isSubmitAnother": true,
                "submitAnotherTitle": ""
            }
        },
        "id": "1fD4hGk5DqqcrFzrn9Uc-xoFJAkWhlqe-1hDjdQOhrWM",
        "googleFormId": "u/0/d/e/1FAIpQLSd5wYkRG-mp23xYwqM_q5c0ztlju563Kh_6jbbvaw0KlZ4AkQ",
        "title": "GWY 1:1 Online Coaching",
        "description": "",
        "userId": "",
        "createdAt": new Date().getTime(),
        "updatedAt": new Date().getTime()
    };

    var e, t, r, n, o, i, a, s, u = {},
        l = [],
        c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        d = Array.isArray;

    function f(e, t) {
        for (var r in t)
            e[r] = t[r];
        return e
    }

    function _(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function p(t, r, n) {
        var o, i, a, s = {};
        for (a in r)
            "key" == a ? o = r[a] : "ref" == a ? i = r[a] : s[a] = r[a];
        if (arguments.length > 2 && (s.children = arguments.length > 3 ? e.call(arguments, 2) : n),
            "function" == typeof t && null != t.defaultProps)
            for (a in t.defaultProps)
                void 0 === s[a] && (s[a] = t.defaultProps[a]);
        return m(t, s, o, i, null)
    }

    function m(e, n, o, i, a) {
        var s = {
            type: e,
            props: n,
            key: o,
            ref: i,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: null == a ? ++r : a,
            __i: -1,
            __u: 0
        };
        return null == a && null != t.vnode && t.vnode(s),
            s
    }

    function h(e) {
        return e.children
    }

    function v(e, t) {
        this.props = e,
            this.context = t
    }

    function y(e, t) {
        if (null == t)
            return e.__ ? y(e.__, e.__i + 1) : null;
        for (var r; t < e.__k.length; t++)
            if (null != (r = e.__k[t]) && null != r.__e)
                return r.__e;
        return "function" == typeof e.type ? y(e) : null
    }

    function g(e) {
        var t, r;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null,
                t = 0; t < e.__k.length; t++)
                if (null != (r = e.__k[t]) && null != r.__e) {
                    e.__e = e.__c.base = r.__e;
                    break
                }
            return g(e)
        }
    }

    function b(e) {
        (!e.__d && (e.__d = !0) && n.push(e) && !w.__r++ || o !== t.debounceRendering) && ((o = t.debounceRendering) || i)(w)
    }

    function w() {
        var e, r, o, i, s, u, l, c, d;
        for (n.sort(a); e = n.shift();)
            e.__d && (r = n.length,
                i = void 0,
                u = (s = (o = e).__v).__e,
                c = [],
                d = [],
                (l = o.__P) && ((i = f({}, s)).__v = s.__v + 1,
                    t.vnode && t.vnode(i),
                    F(l, i, s, o.__n, void 0 !== l.ownerSVGElement, 32 & s.__u ? [u] : null, c, null == u ? y(s) : u, !!(32 & s.__u), d),
                    i.__.__k[i.__i] = i,
                    T(c, i, d),
                    i.__e != u && g(i)),
                n.length > r && n.sort(a));
        w.__r = 0
    }

    function S(e, t, r, n, o, i, a, s, c, f, _) {
        var p, v, g, b, w, S = n && n.__k || l,
            x = t.length;
        for (r.__d = c,
            function (e, t, r) {
                var n, o, i, a, s, u = t.length,
                    l = r.length,
                    c = l,
                    f = 0;
                for (e.__k = [],
                    n = 0; n < u; n++)
                    null != (o = e.__k[n] = null == (o = t[n]) || "boolean" == typeof o || "function" == typeof o ? null : "string" == typeof o || "number" == typeof o || "bigint" == typeof o || o.constructor == String ? m(null, o, null, null, o) : d(o) ? m(h, {
                        children: o
                    }, null, null, null) : void 0 === o.constructor && o.__b > 0 ? m(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) ? (o.__ = e,
                        o.__b = e.__b + 1,
                        s = k(o, r, a = n + f, c),
                        o.__i = s,
                        i = null,
                        -1 !== s && (c--,
                            (i = r[s]) && (i.__u |= 131072)),
                        null == i || null === i.__v ? (-1 == s && f--,
                            "function" != typeof o.type && (o.__u |= 65536)) : s !== a && (s === a + 1 ? f++ : s > a ? c > u - a ? f += s - a : f-- : f = s < a && s == a - 1 ? s - a : 0,
                            s !== n + f && (o.__u |= 65536))) : (i = r[n]) && null == i.key && i.__e && (i.__e == e.__d && (e.__d = y(i)),
                        $(i, i, !1),
                        r[n] = null,
                        c--);
                if (c)
                    for (n = 0; n < l; n++)
                        null != (i = r[n]) && 0 == (131072 & i.__u) && (i.__e == e.__d && (e.__d = y(i)),
                            $(i, i))
            }(r, t, S),
            c = r.__d,
            p = 0; p < x; p++)
            null != (g = r.__k[p]) && "boolean" != typeof g && "function" != typeof g && (v = -1 === g.__i ? u : S[g.__i] || u,
                g.__i = p,
                F(e, g, v, o, i, a, s, c, f, _),
                b = g.__e,
                g.ref && v.ref != g.ref && (v.ref && D(v.ref, null, g),
                    _.push(g.ref, g.__c || b, g)),
                null == w && null != b && (w = b),
                65536 & g.__u || v.__k === g.__k ? c = N(g, c, e) : "function" == typeof g.type && void 0 !== g.__d ? c = g.__d : b && (c = b.nextSibling),
                g.__d = void 0,
                g.__u &= -196609);
        r.__d = c,
            r.__e = w
    }

    function N(e, t, r) {
        var n, o;
        if ("function" == typeof e.type) {
            for (n = e.__k,
                o = 0; n && o < n.length; o++)
                n[o] && (n[o].__ = e,
                    t = N(n[o], t, r));
            return t
        }
        return e.__e != t && (r.insertBefore(e.__e, t || null),
                t = e.__e),
            t && t.nextSibling
    }

    function x(e, t) {
        return t = t || [],
            null == e || "boolean" == typeof e || (d(e) ? e.some((function (e) {
                x(e, t)
            })) : t.push(e)),
            t
    }

    function k(e, t, r, n) {
        var o = e.key,
            i = e.type,
            a = r - 1,
            s = r + 1,
            u = t[r];
        if (null === u || u && o == u.key && i === u.type)
            return r;
        if (n > (null != u && 0 == (131072 & u.__u) ? 1 : 0))
            for (; a >= 0 || s < t.length;) {
                if (a >= 0) {
                    if ((u = t[a]) && 0 == (131072 & u.__u) && o == u.key && i === u.type)
                        return a;
                    a--
                }
                if (s < t.length) {
                    if ((u = t[s]) && 0 == (131072 & u.__u) && o == u.key && i === u.type)
                        return s;
                    s++
                }
            }
        return -1
    }

    function E(e, t, r) {
        "-" === t[0] ? e.setProperty(t, null == r ? "" : r) : e[t] = null == r ? "" : "number" != typeof r || c.test(t) ? r : r + "px"
    }

    function C(e, t, r, n, o) {
        var i;
        e: if ("style" === t)
            if ("string" == typeof r)
                e.style.cssText = r;
            else {
                if ("string" == typeof n && (e.style.cssText = n = ""),
                    n)
                    for (t in n)
                        r && t in r || E(e.style, t, "");
                if (r)
                    for (t in r)
                        n && r[t] === n[t] || E(e.style, t, r[t])
            }
        else if ("o" === t[0] && "n" === t[1])
            i = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")),
            t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2),
            e.l || (e.l = {}),
            e.l[t + i] = r,
            r ? n ? r.u = n.u : (r.u = Date.now(),
                e.addEventListener(t, i ? A : O, i)) : e.removeEventListener(t, i ? A : O, i);
        else {
            if (o)
                t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && "role" !== t && t in e)
                try {
                    e[t] = null == r ? "" : r;
                    break e
                } catch (a) {}
            "function" == typeof r || (null == r || !1 === r && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, r))
        }
    }

    function O(e) {
        var r = this.l[e.type + !1];
        if (e.t) {
            if (e.t <= r.u)
                return
        } else
            e.t = Date.now();
        return r(t.event ? t.event(e) : e)
    }

    function A(e) {
        return this.l[e.type + !0](t.event ? t.event(e) : e)
    }

    function F(r, n, o, i, a, s, l, c, p, m) {
        var g, b, w, N, x, k, E, O, A, F, T, D, $, V, I, L = n.type;
        if (void 0 !== n.constructor)
            return null;
        128 & o.__u && (p = !!(32 & o.__u),
                s = [c = n.__e = o.__e]),
            (g = t.__b) && g(n);
        e: if ("function" == typeof L)
            try {
                if (O = n.props,
                    A = (g = L.contextType) && i[g.__c],
                    F = g ? A ? A.props.value : g.__ : i,
                    o.__c ? E = (b = n.__c = o.__c).__ = b.__E : ("prototype" in L && L.prototype.render ? n.__c = b = new L(O, F) : (n.__c = b = new v(O, F),
                            b.constructor = L,
                            b.render = P),
                        A && A.sub(b),
                        b.props = O,
                        b.state || (b.state = {}),
                        b.context = F,
                        b.__n = i,
                        w = b.__d = !0,
                        b.__h = [],
                        b._sb = []),
                    null == b.__s && (b.__s = b.state),
                    null != L.getDerivedStateFromProps && (b.__s == b.state && (b.__s = f({}, b.__s)),
                        f(b.__s, L.getDerivedStateFromProps(O, b.__s))),
                    N = b.props,
                    x = b.state,
                    b.__v = n,
                    w)
                    null == L.getDerivedStateFromProps && null != b.componentWillMount && b.componentWillMount(),
                    null != b.componentDidMount && b.__h.push(b.componentDidMount);
                else {
                    if (null == L.getDerivedStateFromProps && O !== N && null != b.componentWillReceiveProps && b.componentWillReceiveProps(O, F),
                        !b.__e && (null != b.shouldComponentUpdate && !1 === b.shouldComponentUpdate(O, b.__s, F) || n.__v === o.__v)) {
                        for (n.__v !== o.__v && (b.props = O,
                                b.state = b.__s,
                                b.__d = !1),
                            n.__e = o.__e,
                            n.__k = o.__k,
                            n.__k.forEach((function (e) {
                                e && (e.__ = n)
                            })),
                            T = 0; T < b._sb.length; T++)
                            b.__h.push(b._sb[T]);
                        b._sb = [],
                            b.__h.length && l.push(b);
                        break e
                    }
                    null != b.componentWillUpdate && b.componentWillUpdate(O, b.__s, F),
                        null != b.componentDidUpdate && b.__h.push((function () {
                            b.componentDidUpdate(N, x, k)
                        }))
                }
                if (b.context = F,
                    b.props = O,
                    b.__P = r,
                    b.__e = !1,
                    D = t.__r,
                    $ = 0,
                    "prototype" in L && L.prototype.render) {
                    for (b.state = b.__s,
                        b.__d = !1,
                        D && D(n),
                        g = b.render(b.props, b.state, b.context),
                        V = 0; V < b._sb.length; V++)
                        b.__h.push(b._sb[V]);
                    b._sb = []
                } else
                    do {
                        b.__d = !1,
                            D && D(n),
                            g = b.render(b.props, b.state, b.context),
                            b.state = b.__s
                    } while (b.__d && ++$ < 25);
                b.state = b.__s,
                    null != b.getChildContext && (i = f(f({}, i), b.getChildContext())),
                    w || null == b.getSnapshotBeforeUpdate || (k = b.getSnapshotBeforeUpdate(N, x)),
                    S(r, d(I = null != g && g.type === h && null == g.key ? g.props.children : g) ? I : [I], n, o, i, a, s, l, c, p, m),
                    b.base = n.__e,
                    n.__u &= -161,
                    b.__h.length && l.push(b),
                    E && (b.__E = b.__ = null)
            } catch (M) {
                n.__v = null,
                    p || null != s ? (n.__e = c,
                        n.__u |= p ? 160 : 32,
                        s[s.indexOf(c)] = null) : (n.__e = o.__e,
                        n.__k = o.__k),
                    t.__e(M, n, o)
            }
        else
            null == s && n.__v === o.__v ? (n.__k = o.__k,
                n.__e = o.__e) : n.__e = function (t, r, n, o, i, a, s, l, c) {
                var f, p, m, h, v, g, b, w = n.props,
                    N = r.props,
                    x = r.type;
                if ("svg" === x && (i = !0),
                    null != a)
                    for (f = 0; f < a.length; f++)
                        if ((v = a[f]) && "setAttribute" in v == !!x && (x ? v.localName === x : 3 === v.nodeType)) {
                            t = v,
                                a[f] = null;
                            break
                        }
                if (null == t) {
                    if (null === x)
                        return document.createTextNode(N);
                    t = i ? document.createElementNS("http://www.w3.org/2000/svg", x) : document.createElement(x, N.is && N),
                        a = null,
                        l = !1
                }
                if (null === x)
                    w === N || l && t.data === N || (t.data = N);
                else {
                    if (a = a && e.call(t.childNodes),
                        w = n.props || u,
                        !l && null != a)
                        for (w = {},
                            f = 0; f < t.attributes.length; f++)
                            w[(v = t.attributes[f]).name] = v.value;
                    for (f in w)
                        v = w[f],
                        "children" == f || ("dangerouslySetInnerHTML" == f ? m = v : "key" === f || f in N || C(t, f, null, v, i));
                    for (f in N)
                        v = N[f],
                        "children" == f ? h = v : "dangerouslySetInnerHTML" == f ? p = v : "value" == f ? g = v : "checked" == f ? b = v : "key" === f || l && "function" != typeof v || w[f] === v || C(t, f, v, w[f], i);
                    if (p)
                        l || m && (p.__html === m.__html || p.__html === t.innerHTML) || (t.innerHTML = p.__html),
                        r.__k = [];
                    else if (m && (t.innerHTML = ""),
                        S(t, d(h) ? h : [h], r, n, o, i && "foreignObject" !== x, a, s, a ? a[0] : n.__k && y(n, 0), l, c),
                        null != a)
                        for (f = a.length; f--;)
                            null != a[f] && _(a[f]);
                    l || (f = "value",
                        void 0 !== g && (g !== t[f] || "progress" === x && !g || "option" === x && g !== w[f]) && C(t, f, g, w[f], !1),
                        f = "checked",
                        void 0 !== b && b !== t[f] && C(t, f, b, w[f], !1))
                }
                return t
            }(o.__e, n, o, i, a, s, l, p, m);
        (g = t.diffed) && g(n)
    }

    function T(e, r, n) {
        r.__d = void 0;
        for (var o = 0; o < n.length; o++)
            D(n[o], n[++o], n[++o]);
        t.__c && t.__c(r, e),
            e.some((function (r) {
                try {
                    e = r.__h,
                        r.__h = [],
                        e.some((function (e) {
                            e.call(r)
                        }))
                } catch (n) {
                    t.__e(n, r.__v)
                }
            }))
    }

    function D(e, r, n) {
        try {
            "function" == typeof e ? e(r) : e.current = r
        } catch (o) {
            t.__e(o, n)
        }
    }

    function $(e, r, n) {
        var o, i;
        if (t.unmount && t.unmount(e),
            (o = e.ref) && (o.current && o.current !== e.__e || D(o, null, r)),
            null != (o = e.__c)) {
            if (o.componentWillUnmount)
                try {
                    o.componentWillUnmount()
                } catch (a) {
                    t.__e(a, r)
                }
            o.base = o.__P = null,
                e.__c = void 0
        }
        if (o = e.__k)
            for (i = 0; i < o.length; i++)
                o[i] && $(o[i], r, n || "function" != typeof e.type);
        n || null == e.__e || _(e.__e),
            e.__ = e.__e = e.__d = void 0
    }

    function P(e, t, r) {
        return this.constructor(e, r)
    }

    function V(r, n, o) {
        var i, a, s, l;
        t.__ && t.__(r, n),
            a = (i = "function" == typeof o) ? null : o && o.__k || n.__k,
            s = [],
            l = [],
            F(n, r = (!i && o || n).__k = p(h, null, [r]), a || u, u, void 0 !== n.ownerSVGElement, !i && o ? [o] : a ? null : n.firstChild ? e.call(n.childNodes) : null, s, !i && o ? o : a ? a.__e : n.firstChild, i, l),
            T(s, r, l)
    }

    function I(e, t) {
        V(e, t, I)
    }

    function L(t, r, n) {
        var o, i, a, s, u = f({}, t.props);
        for (a in t.type && t.type.defaultProps && (s = t.type.defaultProps),
            r)
            "key" == a ? o = r[a] : "ref" == a ? i = r[a] : u[a] = void 0 === r[a] && void 0 !== s ? s[a] : r[a];
        return arguments.length > 2 && (u.children = arguments.length > 3 ? e.call(arguments, 2) : n),
            m(t.type, u, o || t.key, i || t.ref, null)
    }

    function M(e, t) {
        var r = {
            __c: t = "__cC" + s++,
            __: e,
            Consumer: function (e, t) {
                return e.children(t)
            },
            Provider: function (e) {
                var r, n;
                return this.getChildContext || (r = [],
                        (n = {})[t] = this,
                        this.getChildContext = function () {
                            return n
                        },
                        this.shouldComponentUpdate = function (e) {
                            this.props.value !== e.value && r.some((function (e) {
                                e.__e = !0,
                                    b(e)
                            }))
                        },
                        this.sub = function (e) {
                            r.push(e);
                            var t = e.componentWillUnmount;
                            e.componentWillUnmount = function () {
                                r.splice(r.indexOf(e), 1),
                                    t && t.call(e)
                            }
                        }
                    ),
                    e.children
            }
        };
        return r.Provider.__ = r.Consumer.contextType = r
    }
    e = l.slice,
        t = {
            __e: function (e, t, r, n) {
                for (var o, i, a; t = t.__;)
                    if ((o = t.__c) && !o.__)
                        try {
                            if ((i = o.constructor) && null != i.getDerivedStateFromError && (o.setState(i.getDerivedStateFromError(e)),
                                    a = o.__d),
                                null != o.componentDidCatch && (o.componentDidCatch(e, n || {}),
                                    a = o.__d),
                                a)
                                return o.__E = o
                        } catch (s) {
                            e = s
                        }
                throw e
            }
        },
        r = 0,
        v.prototype.setState = function (e, t) {
            var r;
            r = null != this.__s && this.__s !== this.state ? this.__s : this.__s = f({}, this.state),
                "function" == typeof e && (e = e(f({}, r), this.props)),
                e && f(r, e),
                null != e && this.__v && (t && this._sb.push(t),
                    b(this))
        },
        v.prototype.forceUpdate = function (e) {
            this.__v && (this.__e = !0,
                e && this.__h.push(e),
                b(this))
        },
        v.prototype.render = h,
        n = [],
        i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
        a = function (e, t) {
            return e.__v.__b - t.__v.__b
        },
        w.__r = 0,
        s = 0;
    var R, j, U, B, H = 0,
        q = [],
        W = [],
        G = t.__b,
        X = t.__r,
        Y = t.diffed,
        z = t.__c,
        Z = t.unmount;

    function J(e, r) {
        t.__h && t.__h(j, e, H || r),
            H = 0;
        var n = j.__H || (j.__H = {
            __: [],
            __h: []
        });
        return e >= n.__.length && n.__.push({
                __V: W
            }),
            n.__[e]
    }

    function K(e) {
        return H = 1,
            Q(fe, e)
    }

    function Q(e, t, r) {
        var n = J(R++, 2);
        if (n.t = e,
            !n.__c && (n.__ = [r ? r(t) : fe(void 0, t), function (e) {
                    var t = n.__N ? n.__N[0] : n.__[0],
                        r = n.t(t, e);
                    t !== r && (n.__N = [r, n.__[1]],
                        n.__c.setState({}))
                }],
                n.__c = j,
                !j.u)) {
            var o = function (e, t, r) {
                if (!n.__c.__H)
                    return !0;
                var o = n.__c.__H.__.filter((function (e) {
                    return e.__c
                }));
                if (o.every((function (e) {
                        return !e.__N
                    })))
                    return !i || i.call(this, e, t, r);
                var a = !1;
                return o.forEach((function (e) {
                        if (e.__N) {
                            var t = e.__[0];
                            e.__ = e.__N,
                                e.__N = void 0,
                                t !== e.__[0] && (a = !0)
                        }
                    })),
                    !(!a && n.__c.props === e) && (!i || i.call(this, e, t, r))
            };
            j.u = !0;
            var i = j.shouldComponentUpdate,
                a = j.componentWillUpdate;
            j.componentWillUpdate = function (e, t, r) {
                    if (this.__e) {
                        var n = i;
                        i = void 0,
                            o(e, t, r),
                            i = n
                    }
                    a && a.call(this, e, t, r)
                },
                j.shouldComponentUpdate = o
        }
        return n.__N || n.__
    }

    function ee(e, r) {
        var n = J(R++, 3);
        !t.__s && de(n.__H, r) && (n.__ = e,
            n.i = r,
            j.__H.__h.push(n))
    }

    function te(e, r) {
        var n = J(R++, 4);
        !t.__s && de(n.__H, r) && (n.__ = e,
            n.i = r,
            j.__h.push(n))
    }

    function re(e) {
        return H = 5,
            ne((function () {
                return {
                    current: e
                }
            }), [])
    }

    function ne(e, t) {
        var r = J(R++, 7);
        return de(r.__H, t) ? (r.__V = e(),
            r.i = t,
            r.__h = e,
            r.__V) : r.__
    }

    function oe(e, t) {
        return H = 8,
            ne((function () {
                return e
            }), t)
    }

    function ie(e) {
        var t = j.context[e.__c],
            r = J(R++, 9);
        return r.c = e,
            t ? (null == r.__ && (r.__ = !0,
                    t.sub(j)),
                t.props.value) : e.__
    }

    function ae() {
        for (var e; e = q.shift();)
            if (e.__P && e.__H)
                try {
                    e.__H.__h.forEach(le),
                        e.__H.__h.forEach(ce),
                        e.__H.__h = []
                } catch (r) {
                    e.__H.__h = [],
                        t.__e(r, e.__v)
                }
    }
    t.__b = function (e) {
            j = null,
                G && G(e)
        },
        t.__r = function (e) {
            X && X(e),
                R = 0;
            var t = (j = e.__c).__H;
            t && (U === j ? (t.__h = [],
                    j.__h = [],
                    t.__.forEach((function (e) {
                        e.__N && (e.__ = e.__N),
                            e.__V = W,
                            e.__N = e.i = void 0
                    }))) : (t.__h.forEach(le),
                    t.__h.forEach(ce),
                    t.__h = [],
                    R = 0)),
                U = j
        },
        t.diffed = function (e) {
            Y && Y(e);
            var r = e.__c;
            r && r.__H && (r.__H.__h.length && (1 !== q.push(r) && B === t.requestAnimationFrame || ((B = t.requestAnimationFrame) || ue)(ae)),
                    r.__H.__.forEach((function (e) {
                        e.i && (e.__H = e.i),
                            e.__V !== W && (e.__ = e.__V),
                            e.i = void 0,
                            e.__V = W
                    }))),
                U = j = null
        },
        t.__c = function (e, r) {
            r.some((function (e) {
                    try {
                        e.__h.forEach(le),
                            e.__h = e.__h.filter((function (e) {
                                return !e.__ || ce(e)
                            }))
                    } catch (n) {
                        r.some((function (e) {
                                e.__h && (e.__h = [])
                            })),
                            r = [],
                            t.__e(n, e.__v)
                    }
                })),
                z && z(e, r)
        },
        t.unmount = function (e) {
            Z && Z(e);
            var r, n = e.__c;
            n && n.__H && (n.__H.__.forEach((function (e) {
                    try {
                        le(e)
                    } catch (t) {
                        r = t
                    }
                })),
                n.__H = void 0,
                r && t.__e(r, n.__v))
        };
    var se = "function" == typeof requestAnimationFrame;

    function ue(e) {
        var t, r = function () {
                clearTimeout(n),
                    se && cancelAnimationFrame(t),
                    setTimeout(e)
            },
            n = setTimeout(r, 100);
        se && (t = requestAnimationFrame(r))
    }

    function le(e) {
        var t = j,
            r = e.__c;
        "function" == typeof r && (e.__c = void 0,
                r()),
            j = t
    }

    function ce(e) {
        var t = j;
        e.__c = e.__(),
            j = t
    }

    function de(e, t) {
        return !e || e.length !== t.length || t.some((function (t, r) {
            return t !== e[r]
        }))
    }

    function fe(e, t) {
        return "function" == typeof t ? t(e) : t
    }

    function _e(e, t) {
        for (var r in t)
            e[r] = t[r];
        return e
    }

    function pe(e, t) {
        for (var r in e)
            if ("__source" !== r && !(r in t))
                return !0;
        for (var n in t)
            if ("__source" !== n && e[n] !== t[n])
                return !0;
        return !1
    }

    function me(e) {
        this.props = e
    }
    (me.prototype = new v).isPureReactComponent = !0,
        me.prototype.shouldComponentUpdate = function (e, t) {
            return pe(this.props, e) || pe(this.state, t)
        };
    var he = t.__b;
    t.__b = function (e) {
        e.type && e.type.__f && e.ref && (e.props.ref = e.ref,
                e.ref = null),
            he && he(e)
    };
    var ve = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

    function ye(e) {
        function t(t) {
            var r = _e({}, t);
            return delete r.ref,
                e(r, t.ref || null)
        }
        return t.$$typeof = ve,
            t.render = t,
            t.prototype.isReactComponent = t.__f = !0,
            t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")",
            t
    }
    var ge = function (e, t) {
            return null == e ? null : x(x(e).map(t))
        },
        be = {
            map: ge,
            forEach: ge,
            count: function (e) {
                return e ? x(e).length : 0
            },
            only: function (e) {
                var t = x(e);
                if (1 !== t.length)
                    throw "Children.only";
                return t[0]
            },
            toArray: x
        },
        we = t.__e;
    t.__e = function (e, t, r, n) {
        if (e.then)
            for (var o, i = t; i = i.__;)
                if ((o = i.__c) && o.__c)
                    return null == t.__e && (t.__e = r.__e,
                            t.__k = r.__k),
                        o.__c(e, t);
        we(e, t, r, n)
    };
    var Se = t.unmount;

    function Ne(e, t, r) {
        return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach((function (e) {
                        "function" == typeof e.__c && e.__c()
                    })),
                    e.__c.__H = null),
                null != (e = _e({}, e)).__c && (e.__c.__P === r && (e.__c.__P = t),
                    e.__c = null),
                e.__k = e.__k && e.__k.map((function (e) {
                    return Ne(e, t, r)
                }))),
            e
    }

    function xe(e, t, r) {
        return e && r && (e.__v = null,
                e.__k = e.__k && e.__k.map((function (e) {
                    return xe(e, t, r)
                })),
                e.__c && e.__c.__P === t && (e.__e && r.appendChild(e.__e),
                    e.__c.__e = !0,
                    e.__c.__P = r)),
            e
    }

    function ke() {
        this.__u = 0,
            this.t = null,
            this.__b = null
    }

    function Ee(e) {
        var t = e.__.__c;
        return t && t.__a && t.__a(e)
    }

    function Ce() {
        this.u = null,
            this.o = null
    }
    t.unmount = function (e) {
            var t = e.__c;
            t && t.__R && t.__R(),
                t && 32 & e.__u && (e.type = null),
                Se && Se(e)
        },
        (ke.prototype = new v).__c = function (e, t) {
            var r = t.__c,
                n = this;
            null == n.t && (n.t = []),
                n.t.push(r);
            var o = Ee(n.__v),
                i = !1,
                a = function () {
                    i || (i = !0,
                        r.__R = null,
                        o ? o(s) : s())
                };
            r.__R = a;
            var s = function () {
                if (!--n.__u) {
                    if (n.state.__a) {
                        var e = n.state.__a;
                        n.__v.__k[0] = xe(e, e.__c.__P, e.__c.__O)
                    }
                    var t;
                    for (n.setState({
                            __a: n.__b = null
                        }); t = n.t.pop();)
                        t.forceUpdate()
                }
            };
            n.__u++ || 32 & t.__u || n.setState({
                    __a: n.__b = n.__v.__k[0]
                }),
                e.then(a, a)
        },
        ke.prototype.componentWillUnmount = function () {
            this.t = []
        },
        ke.prototype.render = function (e, t) {
            if (this.__b) {
                if (this.__v.__k) {
                    var r = document.createElement("div"),
                        n = this.__v.__k[0].__c;
                    this.__v.__k[0] = Ne(this.__b, r, n.__O = n.__P)
                }
                this.__b = null
            }
            var o = t.__a && p(h, null, e.fallback);
            return o && (o.__u &= -33),
                [p(h, null, t.__a ? null : e.children), o]
        };
    var Oe = function (e, t, r) {
        if (++r[1] === r[0] && e.o.delete(t),
            e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
            for (r = e.u; r;) {
                for (; r.length > 3;)
                    r.pop()();
                if (r[1] < r[0])
                    break;
                e.u = r = r[2]
            }
    };

    function Ae(e) {
        return this.getChildContext = function () {
                return e.context
            },
            e.children
    }

    function Fe(e) {
        var t = this,
            r = e.i;
        t.componentWillUnmount = function () {
                V(null, t.l),
                    t.l = null,
                    t.i = null
            },
            t.i && t.i !== r && t.componentWillUnmount(),
            t.l || (t.i = r,
                t.l = {
                    nodeType: 1,
                    parentNode: r,
                    childNodes: [],
                    appendChild: function (e) {
                        this.childNodes.push(e),
                            t.i.appendChild(e)
                    },
                    insertBefore: function (e, r) {
                        this.childNodes.push(e),
                            t.i.appendChild(e)
                    },
                    removeChild: function (e) {
                        this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1),
                            t.i.removeChild(e)
                    }
                }),
            V(p(Ae, {
                context: t.context
            }, e.__v), t.l)
    }

    function Te(e, t) {
        var r = p(Fe, {
            __v: e,
            i: t
        });
        return r.containerInfo = t,
            r
    }
    (Ce.prototype = new v).__a = function (e) {
            var t = this,
                r = Ee(t.__v),
                n = t.o.get(e);
            return n[0]++,
                function (o) {
                    var i = function () {
                        t.props.revealOrder ? (n.push(o),
                            Oe(t, e, n)) : o()
                    };
                    r ? r(i) : i()
                }
        },
        Ce.prototype.render = function (e) {
            this.u = null,
                this.o = new Map;
            var t = x(e.children);
            e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
            for (var r = t.length; r--;)
                this.o.set(t[r], this.u = [1, 0, this.u]);
            return e.children
        },
        Ce.prototype.componentDidUpdate = Ce.prototype.componentDidMount = function () {
            var e = this;
            this.o.forEach((function (t, r) {
                Oe(e, r, t)
            }))
        };
    var De = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
        $e = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
        Pe = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
        Ve = /[A-Z0-9]/g,
        Ie = "undefined" != typeof document,
        Le = function (e) {
            return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(e)
        };
    v.prototype.isReactComponent = {},
        ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function (e) {
            Object.defineProperty(v.prototype, e, {
                configurable: !0,
                get: function () {
                    return this["UNSAFE_" + e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        }));
    var Me = t.event;

    function Re() {}

    function je() {
        return this.cancelBubble
    }

    function Ue() {
        return this.defaultPrevented
    }
    t.event = function (e) {
        return Me && (e = Me(e)),
            e.persist = Re,
            e.isPropagationStopped = je,
            e.isDefaultPrevented = Ue,
            e.nativeEvent = e
    };
    var Be, He = {
            enumerable: !1,
            configurable: !0,
            get: function () {
                return this.class
            }
        },
        qe = t.vnode;
    t.vnode = function (e) {
        "string" == typeof e.type && function (e) {
                var t = e.props,
                    r = e.type,
                    n = {};
                for (var o in t) {
                    var i = t[o];
                    if (!("value" === o && "defaultValue" in t && null == i || Ie && "children" === o && "noscript" === r || "class" === o || "className" === o)) {
                        var a = o.toLowerCase();
                        "defaultValue" === o && "value" in t && null == t.value ? o = "value" : "download" === o && !0 === i ? i = "" : "ondoubleclick" === a ? o = "ondblclick" : "onchange" !== a || "input" !== r && "textarea" !== r || Le(t.type) ? "onfocus" === a ? o = "onfocusin" : "onblur" === a ? o = "onfocusout" : Pe.test(o) ? o = a : -1 === r.indexOf("-") && $e.test(o) ? o = o.replace(Ve, "-$&").toLowerCase() : null === i && (i = void 0) : a = o = "oninput",
                            "oninput" === a && n[o = a] && (o = "oninputCapture"),
                            n[o] = i
                    }
                }
                "select" == r && n.multiple && Array.isArray(n.value) && (n.value = x(t.children).forEach((function (e) {
                        e.props.selected = -1 != n.value.indexOf(e.props.value)
                    }))),
                    "select" == r && null != n.defaultValue && (n.value = x(t.children).forEach((function (e) {
                        e.props.selected = n.multiple ? -1 != n.defaultValue.indexOf(e.props.value) : n.defaultValue == e.props.value
                    }))),
                    t.class && !t.className ? (n.class = t.class,
                        Object.defineProperty(n, "className", He)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className),
                    e.props = n
            }(e),
            e.$$typeof = De,
            qe && qe(e)
    };
    var We = t.__r;
    t.__r = function (e) {
        We && We(e),
            Be = e.__c
    };
    var Ge = t.diffed;

    function Xe(e) {
        return !!e && e.$$typeof === De
    }

    function Ye(e) {
        return Xe(e) ? L.apply(null, arguments) : e
    }
    t.diffed = function (e) {
        Ge && Ge(e);
        var t = e.props,
            r = e.__e;
        null != r && "textarea" === e.type && "value" in t && t.value !== r.value && (r.value = null == t.value ? "" : t.value),
            Be = null
    };

    function ze(e) {
        e()
    }

    function Ze(e) {
        var t, r, n = e.v,
            o = e.__;
        try {
            var i = n();
            return !((t = o) === (r = i) && (0 !== t || 1 / t == 1 / r) || t != t && r != r)
        } catch (a) {
            return !0
        }
    }
    var Je = {
        useState: K,
        useId: function () {
            var e = J(R++, 11);
            if (!e.__) {
                for (var t = j.__v; null !== t && !t.__m && null !== t.__;)
                    t = t.__;
                var r = t.__m || (t.__m = [0, 0]);
                e.__ = "P" + r[0] + "-" + r[1]++
            }
            return e.__
        },
        useReducer: Q,
        useEffect: ee,
        useLayoutEffect: te,
        useInsertionEffect: te,
        useTransition: function () {
            return [!1, ze]
        },
        useDeferredValue: function (e) {
            return e
        },
        useSyncExternalStore: function (e, t) {
            var r = t(),
                n = K({
                    h: {
                        __: r,
                        v: t
                    }
                }),
                o = n[0].h,
                i = n[1];
            return te((function () {
                    o.__ = r,
                        o.v = t,
                        Ze(o) && i({
                            h: o
                        })
                }), [e, r, t]),
                ee((function () {
                    return Ze(o) && i({
                            h: o
                        }),
                        e((function () {
                            Ze(o) && i({
                                h: o
                            })
                        }))
                }), [e]),
                r
        },
        startTransition: ze,
        useRef: re,
        useImperativeHandle: function (e, t, r) {
            H = 6,
                te((function () {
                    return "function" == typeof e ? (e(t()),
                        function () {
                            return e(null)
                        }
                    ) : e ? (e.current = t(),
                        function () {
                            return e.current = null
                        }
                    ) : void 0
                }), null == r ? r : r.concat(e))
        },
        useMemo: ne,
        useCallback: oe,
        useContext: ie,
        useDebugValue: function (e, r) {
            t.useDebugValue && t.useDebugValue(r ? r(e) : e)
        },
        version: "17.0.2",
        Children: be,
        render: function (e, t, r) {
            return null == t.__k && (t.textContent = ""),
                V(e, t),
                "function" == typeof r && r(),
                e ? e.__c : null
        },
        hydrate: function (e, t, r) {
            return I(e, t),
                "function" == typeof r && r(),
                e ? e.__c : null
        },
        unmountComponentAtNode: function (e) {
            return !!e.__k && (V(null, e),
                !0)
        },
        createPortal: Te,
        createElement: p,
        createContext: M,
        createFactory: function (e) {
            return p.bind(null, e)
        },
        cloneElement: Ye,
        createRef: function () {
            return {
                current: null
            }
        },
        Fragment: h,
        isValidElement: Xe,
        isElement: Xe,
        isFragment: function (e) {
            return Xe(e) && e.type === h
        },
        findDOMNode: function (e) {
            return e && (e.base || 1 === e.nodeType && e) || null
        },
        Component: v,
        PureComponent: me,
        memo: function (e, t) {
            function r(e) {
                var r = this.props.ref,
                    n = r == e.ref;
                return !n && r && (r.call ? r(null) : r.current = null),
                    t ? !t(this.props, e) || !n : pe(this.props, e)
            }

            function n(t) {
                return this.shouldComponentUpdate = r,
                    p(e, t)
            }
            return n.displayName = "Memo(" + (e.displayName || e.name) + ")",
                n.prototype.isReactComponent = !0,
                n.__f = !0,
                n
        },
        forwardRef: ye,
        flushSync: function (e, t) {
            return e(t)
        },
        unstable_batchedUpdates: function (e, t) {
            return e(t)
        },
        StrictMode: h,
        Suspense: ke,
        SuspenseList: Ce,
        lazy: function (e) {
            var t, r, n;

            function o(o) {
                if (t || (t = e()).then((function (e) {
                        r = e.default || e
                    }), (function (e) {
                        n = e
                    })),
                    n)
                    throw n;
                if (!r)
                    throw t;
                return p(r, o)
            }
            return o.displayName = "Lazy",
                o.__f = !0,
                o
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            ReactCurrentDispatcher: {
                current: {
                    readContext: function (e) {
                        return Be.__n[e.__c].props.value
                    }
                }
            }
        }
    };

    function Ke() {
        return Ke = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            Ke.apply(this, arguments)
    }
    const Qe = e => e instanceof ShadowRoot,
        et = e => {
            const t = e.getRootNode() instanceof ShadowRoot ? e.getRootNode().host : e,
                {
                    dataset: r
                } = t,
                n = {};
            for (var o in r) {
                if (!1 === r.hasOwnProperty(o))
                    return;
                const e = `${(i = o.split(/(props?)/).pop() || "").charAt(0).toLowerCase()}${i.slice(1)}`;
                e && (n[e] = r[o])
            }
            var i;
            return n
        },
        tt = e => ["text/props", "application/json"].includes(e.getAttribute("type") || ""),
        rt = e => Qe(e) ? [] : Array.from(e.getElementsByTagName("script")).filter(tt),
        nt = e => Array.from(document.querySelectorAll(e)).filter(tt),
        ot = e => {
            let t = {};
            return e.forEach((e => {
                    try {
                        t = Ke({}, t, JSON.parse(e.innerHTML))
                    } catch (r) {}
                })),
                t
        },
        it = (e, t, r = {}, n) => {
            const o = et(t),
                i = e._executedScript ? et(e._executedScript) : {},
                a = ot(rt(t));
            return Ke({}, r, o, i, n ? ot(nt(n)) : {}, a)
        };

    function at(e, t) {
        var r = (t = [].concat(t))[t.length - 1].nextSibling;

        function n(t, n) {
            e.insertBefore(t, n || r)
        }
        return e.__k = {
            nodeType: 1,
            parentNode: e,
            firstChild: t[0],
            childNodes: t,
            insertBefore: n,
            appendChild: n,
            removeChild: function (t) {
                e.removeChild(t)
            }
        }
    }
    const st = ({
        island: e,
        widget: t,
        rootFragment: r,
        props: n
    }) => {
        e.props = n,
            V(p(t, n), r)
    };
    var ut = 0;

    function lt(e, r, n, o, i, a) {
        var s, u, l = {};
        for (u in r)
            "ref" == u ? s = r[u] : l[u] = r[u];
        var c = {
            type: e,
            props: l,
            key: n,
            ref: s,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: --ut,
            __i: -1,
            __u: 0,
            __source: i,
            __self: a
        };
        if ("function" == typeof e && (s = e.defaultProps))
            for (u in s)
                void 0 === l[u] && (l[u] = s[u]);
        return t.vnode && t.vnode(c),
            c
    }
    const ct = e => lt("div", {
        style: {
            margin: "4px auto",
            padding: "4px",
            maxWidth: "320px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
            backgroundColor: "#f8fafc"
        },
        children: lt("svg", {
            style: {
                width: "25px"
            },
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 100 100",
            xmlSpace: "preserve",
            ...e,
            children: lt("path", {
                fill: "#333",
                d: "M73 50c0-12.7-10.3-23-23-23S27 37.3 27 50m3.9 0c0-10.5 8.5-19.1 19.1-19.1S69.1 39.5 69.1 50",
                children: lt("animateTransform", {
                    attributeName: "transform",
                    attributeType: "XML",
                    type: "rotate",
                    dur: ".7s",
                    from: "0 50 50",
                    to: "360 50 50",
                    repeatCount: "indefinite"
                })
            })
        })
    });

    function _t(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    var pt, mt = {
        exports: {}
    };
    pt = mt,
        function () {
            var e = {}.hasOwnProperty;

            function t() {
                for (var e = "", t = 0; t < arguments.length; t++) {
                    var o = arguments[t];
                    o && (e = n(e, r(o)))
                }
                return e
            }

            function r(r) {
                if ("string" == typeof r || "number" == typeof r)
                    return r;
                if ("object" != typeof r)
                    return "";
                if (Array.isArray(r))
                    return t.apply(null, r);
                if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]"))
                    return r.toString();
                var o = "";
                for (var i in r)
                    e.call(r, i) && r[i] && (o = n(o, i));
                return o
            }

            function n(e, t) {
                return t ? e ? e + " " + t : e + t : e
            }
            pt.exports ? (t.default = t,
                pt.exports = t) : window.classNames = t
        }();
    const ht = _t(mt.exports);
    var vt = e => "checkbox" === e.type,
        yt = e => e instanceof Date,
        gt = e => null == e;
    const bt = e => "object" == typeof e;
    var wt = e => !gt(e) && !Array.isArray(e) && bt(e) && !yt(e),
        St = e => wt(e) && e.target ? vt(e.target) ? e.target.checked : e.target.value : e,
        Nt = (e, t) => e.has((e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e)(t)),
        xt = e => {
            const t = e.constructor && e.constructor.prototype;
            return wt(t) && t.hasOwnProperty("isPrototypeOf")
        },
        kt = "undefined" != typeof window && void 0 !== window.HTMLElement && "undefined" != typeof document;

    function Et(e) {
        let t;
        const r = Array.isArray(e);
        if (e instanceof Date)
            t = new Date(e);
        else if (e instanceof Set)
            t = new Set(e);
        else {
            if (kt && (e instanceof Blob || e instanceof FileList) || !r && !wt(e))
                return e;
            if (t = r ? [] : {},
                r || xt(e))
                for (const r in e)
                    e.hasOwnProperty(r) && (t[r] = Et(e[r]));
            else
                t = e
        }
        return t
    }
    var Ct = e => Array.isArray(e) ? e.filter(Boolean) : [],
        Ot = e => void 0 === e,
        At = (e, t, r) => {
            if (!t || !wt(e))
                return r;
            const n = Ct(t.split(/[,[\].]+?/)).reduce(((e, t) => gt(e) ? e : e[t]), e);
            return Ot(n) || n === e ? Ot(e[t]) ? r : e[t] : n
        };
    const Ft = {
            BLUR: "blur",
            FOCUS_OUT: "focusout",
            CHANGE: "change"
        },
        Tt = {
            onBlur: "onBlur",
            onChange: "onChange",
            onSubmit: "onSubmit",
            onTouched: "onTouched",
            all: "all"
        },
        Dt = "max",
        $t = "min",
        Pt = "maxLength",
        Vt = "minLength",
        It = "pattern",
        Lt = "required",
        Mt = "validate",
        Rt = Je.createContext(null),
        jt = () => Je.useContext(Rt),
        Ut = e => {
            const {
                children: t,
                ...r
            } = e;
            return Je.createElement(Rt.Provider, {
                value: r
            }, t)
        };
    var Bt = e => wt(e) && !Object.keys(e).length,
        Ht = e => Array.isArray(e) ? e : [e];
    var qt = e => "string" == typeof e,
        Wt = (e, t, r, n, o) => qt(e) ? (n && t.watch.add(e),
            At(r, e, o)) : Array.isArray(e) ? e.map((e => (n && t.watch.add(e),
            At(r, e)))) : (n && (t.watchAll = !0),
            r),
        Gt = e => /^\w*$/.test(e),
        Xt = e => Ct(e.replace(/["|']|\]/g, "").split(/\.|\[/));

    function Yt(e, t, r) {
        let n = -1;
        const o = Gt(t) ? [t] : Xt(t),
            i = o.length,
            a = i - 1;
        for (; ++n < i;) {
            const t = o[n];
            let i = r;
            if (n !== a) {
                const r = e[t];
                i = wt(r) || Array.isArray(r) ? r : isNaN(+o[n + 1]) ? {} : []
            }
            e[t] = i,
                e = e[t]
        }
        return e
    }
    var zt = (e, t, r, n, o) => t ? {
        ...r[e],
        types: {
            ...r[e] && r[e].types ? r[e].types : {},
            [n]: o || !0
        }
    } : {};
    const Zt = (e, t, r) => {
        for (const n of r || Object.keys(e)) {
            const r = At(e, n);
            if (r) {
                const {
                    _f: e,
                    ...n
                } = r;
                if (e && t(e.name)) {
                    if (e.ref.focus) {
                        e.ref.focus();
                        break
                    }
                    if (e.refs && e.refs[0].focus) {
                        e.refs[0].focus();
                        break
                    }
                } else
                    wt(n) && Zt(n, t)
            }
        }
    };
    var Jt = e => ({
            isOnSubmit: !e || e === Tt.onSubmit,
            isOnBlur: e === Tt.onBlur,
            isOnChange: e === Tt.onChange,
            isOnAll: e === Tt.all,
            isOnTouch: e === Tt.onTouched
        }),
        Kt = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((t => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))))),
        Qt = (e, t, r) => {
            const n = Ct(At(e, r));
            return Yt(n, "root", t[r]),
                Yt(e, r, n),
                e
        },
        er = e => "boolean" == typeof e,
        tr = e => "file" === e.type,
        rr = e => "function" == typeof e,
        nr = e => {
            if (!kt)
                return !1;
            const t = e ? e.ownerDocument : 0;
            return e instanceof(t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
        },
        or = e => qt(e),
        ir = e => "radio" === e.type,
        ar = e => e instanceof RegExp;
    const sr = {
            value: !1,
            isValid: !1
        },
        ur = {
            value: !0,
            isValid: !0
        };
    var lr = e => {
        if (Array.isArray(e)) {
            if (e.length > 1) {
                const t = e.filter((e => e && e.checked && !e.disabled)).map((e => e.value));
                return {
                    value: t,
                    isValid: !!t.length
                }
            }
            return e[0].checked && !e[0].disabled ? e[0].attributes && !Ot(e[0].attributes.value) ? Ot(e[0].value) || "" === e[0].value ? ur : {
                value: e[0].value,
                isValid: !0
            } : ur : sr
        }
        return sr
    };
    const cr = {
        isValid: !1,
        value: null
    };
    var dr = e => Array.isArray(e) ? e.reduce(((e, t) => t && t.checked && !t.disabled ? {
        isValid: !0,
        value: t.value
    } : e), cr) : cr;

    function fr(e, t, r = "validate") {
        if (or(e) || Array.isArray(e) && e.every(or) || er(e) && !e)
            return {
                type: r,
                message: or(e) ? e : "",
                ref: t
            }
    }
    var _r = e => wt(e) && !ar(e) ? e : {
            value: e,
            message: ""
        },
        pr = async (e, t, r, n, o) => {
            const {
                ref: i,
                refs: a,
                required: s,
                maxLength: u,
                minLength: l,
                min: c,
                max: d,
                pattern: f,
                validate: _,
                name: p,
                valueAsNumber: m,
                mount: h,
                disabled: v
            } = e._f, y = At(t, p);
            if (!h || v)
                return {};
            const g = a ? a[0] : i,
                b = e => {
                    n && g.reportValidity && (g.setCustomValidity(er(e) ? "" : e || ""),
                        g.reportValidity())
                },
                w = {},
                S = ir(i),
                N = vt(i),
                x = S || N,
                k = (m || tr(i)) && Ot(i.value) && Ot(y) || nr(i) && "" === i.value || "" === y || Array.isArray(y) && !y.length,
                E = zt.bind(null, p, r, w),
                C = (e, t, r, n = Pt, o = Vt) => {
                    const a = e ? t : r;
                    w[p] = {
                        type: e ? n : o,
                        message: a,
                        ref: i,
                        ...E(e ? n : o, a)
                    }
                };
            if (o ? !Array.isArray(y) || !y.length : s && (!x && (k || gt(y)) || er(y) && !y || N && !lr(a).isValid || S && !dr(a).isValid)) {
                const {
                    value: e,
                    message: t
                } = or(s) ? {
                    value: !!s,
                    message: s
                } : _r(s);
                if (e && (w[p] = {
                            type: Lt,
                            message: t,
                            ref: g,
                            ...E(Lt, t)
                        },
                        !r))
                    return b(t),
                        w
            }
            if (!(k || gt(c) && gt(d))) {
                let e, t;
                const n = _r(d),
                    o = _r(c);
                if (gt(y) || isNaN(y)) {
                    const r = i.valueAsDate || new Date(y),
                        a = e => new Date((new Date).toDateString() + " " + e),
                        s = "time" == i.type,
                        u = "week" == i.type;
                    qt(n.value) && y && (e = s ? a(y) > a(n.value) : u ? y > n.value : r > new Date(n.value)),
                        qt(o.value) && y && (t = s ? a(y) < a(o.value) : u ? y < o.value : r < new Date(o.value))
                } else {
                    const r = i.valueAsNumber || (y ? +y : y);
                    gt(n.value) || (e = r > n.value),
                        gt(o.value) || (t = r < o.value)
                }
                if ((e || t) && (C(!!e, n.message, o.message, Dt, $t),
                        !r))
                    return b(w[p].message),
                        w
            }
            if ((u || l) && !k && (qt(y) || o && Array.isArray(y))) {
                const e = _r(u),
                    t = _r(l),
                    n = !gt(e.value) && y.length > +e.value,
                    o = !gt(t.value) && y.length < +t.value;
                if ((n || o) && (C(n, e.message, t.message),
                        !r))
                    return b(w[p].message),
                        w
            }
            if (f && !k && qt(y)) {
                const {
                    value: e,
                    message: t
                } = _r(f);
                if (ar(e) && !y.match(e) && (w[p] = {
                            type: It,
                            message: t,
                            ref: i,
                            ...E(It, t)
                        },
                        !r))
                    return b(t),
                        w
            }
            if (_)
                if (rr(_)) {
                    const e = fr(await _(y, t), g);
                    if (e && (w[p] = {
                                ...e,
                                ...E(Mt, e.message)
                            },
                            !r))
                        return b(e.message),
                            w
                } else if (wt(_)) {
                let e = {};
                for (const n in _) {
                    if (!Bt(e) && !r)
                        break;
                    const o = fr(await _[n](y, t), g, n);
                    o && (e = {
                            ...o,
                            ...E(n, o.message)
                        },
                        b(o.message),
                        r && (w[p] = e))
                }
                if (!Bt(e) && (w[p] = {
                            ref: g,
                            ...e
                        },
                        !r))
                    return w
            }
            return b(!0),
                w
        };

    function mr(e, t) {
        const r = Array.isArray(t) ? t : Gt(t) ? [t] : Xt(t),
            n = 1 === r.length ? e : function (e, t) {
                const r = t.slice(0, -1).length;
                let n = 0;
                for (; n < r;)
                    e = Ot(e) ? n++ : e[t[n++]];
                return e
            }(e, r),
            o = r.length - 1,
            i = r[o];
        return n && delete n[i],
            0 !== o && (wt(n) && Bt(n) || Array.isArray(n) && function (e) {
                for (const t in e)
                    if (e.hasOwnProperty(t) && !Ot(e[t]))
                        return !1;
                return !0
            }(n)) && mr(e, r.slice(0, -1)),
            e
    }

    function hr() {
        let e = [];
        return {
            get observers() {
                return e
            },
            next: t => {
                for (const r of e)
                    r.next && r.next(t)
            },
            subscribe: t => (e.push(t), {
                unsubscribe: () => {
                    e = e.filter((e => e !== t))
                }
            }),
            unsubscribe: () => {
                e = []
            }
        }
    }
    var vr = e => gt(e) || !bt(e);

    function yr(e, t) {
        if (vr(e) || vr(t))
            return e === t;
        if (yt(e) && yt(t))
            return e.getTime() === t.getTime();
        const r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length)
            return !1;
        for (const o of r) {
            const r = e[o];
            if (!n.includes(o))
                return !1;
            if ("ref" !== o) {
                const e = t[o];
                if (yt(r) && yt(e) || wt(r) && wt(e) || Array.isArray(r) && Array.isArray(e) ? !yr(r, e) : r !== e)
                    return !1
            }
        }
        return !0
    }
    var gr = e => "select-multiple" === e.type,
        br = e => ir(e) || vt(e),
        wr = e => nr(e) && e.isConnected,
        Sr = e => {
            for (const t in e)
                if (rr(e[t]))
                    return !0;
            return !1
        };

    function Nr(e, t = {}) {
        const r = Array.isArray(e);
        if (wt(e) || r)
            for (const n in e)
                Array.isArray(e[n]) || wt(e[n]) && !Sr(e[n]) ? (t[n] = Array.isArray(e[n]) ? [] : {},
                    Nr(e[n], t[n])) : gt(e[n]) || (t[n] = !0);
        return t
    }

    function xr(e, t, r) {
        const n = Array.isArray(e);
        if (wt(e) || n)
            for (const o in e)
                Array.isArray(e[o]) || wt(e[o]) && !Sr(e[o]) ? Ot(t) || vr(r[o]) ? r[o] = Array.isArray(e[o]) ? Nr(e[o], []) : {
                    ...Nr(e[o])
                } : xr(e[o], gt(t) ? {} : t[o], r[o]) : r[o] = !yr(e[o], t[o]);
        return r
    }
    var kr = (e, t) => xr(e, t, Nr(t)),
        Er = (e, {
            valueAsNumber: t,
            valueAsDate: r,
            setValueAs: n
        }) => Ot(e) ? e : t ? "" === e ? NaN : e ? +e : e : r && qt(e) ? new Date(e) : n ? n(e) : e;

    function Cr(e) {
        const t = e.ref;
        if (!(e.refs ? e.refs.every((e => e.disabled)) : t.disabled))
            return tr(t) ? t.files : ir(t) ? dr(e.refs).value : gr(t) ? [...t.selectedOptions].map((({
                value: e
            }) => e)) : vt(t) ? lr(e.refs).value : Er(Ot(t.value) ? e.ref.value : t.value, e)
    }
    var Or = (e, t, r, n) => {
            const o = {};
            for (const i of e) {
                const e = At(t, i);
                e && Yt(o, i, e._f)
            }
            return {
                criteriaMode: r,
                names: [...e],
                fields: o,
                shouldUseNativeValidation: n
            }
        },
        Ar = e => Ot(e) ? e : ar(e) ? e.source : wt(e) ? ar(e.value) ? e.value.source : e.value : e,
        Fr = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);

    function Tr(e, t, r) {
        const n = At(e, r);
        if (n || Gt(r))
            return {
                error: n,
                name: r
            };
        const o = r.split(".");
        for (; o.length;) {
            const n = o.join("."),
                i = At(t, n),
                a = At(e, n);
            if (i && !Array.isArray(i) && r !== n)
                return {
                    name: r
                };
            if (a && a.type)
                return {
                    name: n,
                    error: a
                };
            o.pop()
        }
        return {
            name: r
        }
    }
    var Dr = (e, t, r, n, o) => !o.isOnAll && (!r && o.isOnTouch ? !(t || e) : (r ? n.isOnBlur : o.isOnBlur) ? !e : !(r ? n.isOnChange : o.isOnChange) || e),
        $r = (e, t) => !Ct(At(e, t)).length && mr(e, t);
    const Pr = {
        mode: Tt.onSubmit,
        reValidateMode: Tt.onChange,
        shouldFocusError: !0
    };

    function Vr(e = {}, t) {
        let r, n = {
                ...Pr,
                ...e
            },
            o = {
                submitCount: 0,
                isDirty: !1,
                isLoading: rr(n.defaultValues),
                isValidating: !1,
                isSubmitted: !1,
                isSubmitting: !1,
                isSubmitSuccessful: !1,
                isValid: !1,
                touchedFields: {},
                dirtyFields: {},
                errors: {}
            },
            i = {},
            a = (wt(n.defaultValues) || wt(n.values)) && Et(n.defaultValues || n.values) || {},
            s = n.shouldUnregister ? {} : Et(a),
            u = {
                action: !1,
                mount: !1,
                watch: !1
            },
            l = {
                mount: new Set,
                unMount: new Set,
                array: new Set,
                watch: new Set
            },
            c = 0;
        const d = {
                isDirty: !1,
                dirtyFields: !1,
                touchedFields: !1,
                isValidating: !1,
                isValid: !1,
                errors: !1
            },
            f = {
                values: hr(),
                array: hr(),
                state: hr()
            },
            _ = e.resetOptions && e.resetOptions.keepDirtyValues,
            p = Jt(n.mode),
            m = Jt(n.reValidateMode),
            h = n.criteriaMode === Tt.all,
            v = async e => {
                if (d.isValid || e) {
                    const e = n.resolver ? Bt((await S()).errors) : await N(i, !0);
                    e !== o.isValid && f.state.next({
                        isValid: e
                    })
                }
            }, y = e => d.isValidating && f.state.next({
                isValidating: e
            }), g = (e, t, r, n) => {
                const o = At(i, e);
                if (o) {
                    const i = At(s, e, Ot(r) ? At(a, e) : r);
                    Ot(i) || n && n.defaultChecked || t ? Yt(s, e, t ? i : Cr(o._f)) : E(e, i),
                        u.mount && v()
                }
            }, b = (e, t, r, n, i) => {
                let s = !1,
                    u = !1;
                const l = {
                    name: e
                };
                if (!r || n) {
                    d.isDirty && (u = o.isDirty,
                        o.isDirty = l.isDirty = x(),
                        s = u !== l.isDirty);
                    const r = yr(At(a, e), t);
                    u = At(o.dirtyFields, e),
                        r ? mr(o.dirtyFields, e) : Yt(o.dirtyFields, e, !0),
                        l.dirtyFields = o.dirtyFields,
                        s = s || d.dirtyFields && u !== !r
                }
                if (r) {
                    const t = At(o.touchedFields, e);
                    t || (Yt(o.touchedFields, e, r),
                        l.touchedFields = o.touchedFields,
                        s = s || d.touchedFields && t !== r)
                }
                return s && i && f.state.next(l),
                    s ? l : {}
            }, w = (t, n, i, a) => {
                const s = At(o.errors, t),
                    u = d.isValid && er(n) && o.isValid !== n;
                var l;
                if (e.delayError && i ? (l = () => ((e, t) => {
                            Yt(o.errors, e, t),
                                f.state.next({
                                    errors: o.errors
                                })
                        })(t, i),
                        r = e => {
                            clearTimeout(c),
                                c = setTimeout(l, e)
                        },
                        r(e.delayError)) : (clearTimeout(c),
                        r = null,
                        i ? Yt(o.errors, t, i) : mr(o.errors, t)),
                    (i ? !yr(s, i) : s) || !Bt(a) || u) {
                    const e = {
                        ...a,
                        ...u && er(n) ? {
                            isValid: n
                        } : {},
                        errors: o.errors,
                        name: t
                    };
                    o = {
                            ...o,
                            ...e
                        },
                        f.state.next(e)
                }
                y(!1)
            }, S = async e => n.resolver(s, n.context, Or(e || l.mount, i, n.criteriaMode, n.shouldUseNativeValidation)), N = async (e, t, r = {
                valid: !0
            }) => {
                for (const i in e) {
                    const a = e[i];
                    if (a) {
                        const {
                            _f: e,
                            ...i
                        } = a;
                        if (e) {
                            const i = l.array.has(e.name),
                                u = await pr(a, s, h, n.shouldUseNativeValidation && !t, i);
                            if (u[e.name] && (r.valid = !1,
                                    t))
                                break;
                            !t && (At(u, e.name) ? i ? Qt(o.errors, u, e.name) : Yt(o.errors, e.name, u[e.name]) : mr(o.errors, e.name))
                        }
                        i && await N(i, t, r)
                    }
                }
                return r.valid
            }, x = (e, t) => (e && t && Yt(s, e, t),
                !yr(T(), a)), k = (e, t, r) => Wt(e, l, {
                ...u.mount ? s : Ot(t) ? a : qt(e) ? {
                    [e]: t
                } : t
            }, r, t), E = (e, t, r = {}) => {
                const n = At(i, e);
                let o = t;
                if (n) {
                    const r = n._f;
                    r && (!r.disabled && Yt(s, e, Er(t, r)),
                        o = nr(r.ref) && gt(t) ? "" : t,
                        gr(r.ref) ? [...r.ref.options].forEach((e => e.selected = o.includes(e.value))) : r.refs ? vt(r.ref) ? r.refs.length > 1 ? r.refs.forEach((e => (!e.defaultChecked || !e.disabled) && (e.checked = Array.isArray(o) ? !!o.find((t => t === e.value)) : o === e.value))) : r.refs[0] && (r.refs[0].checked = !!o) : r.refs.forEach((e => e.checked = e.value === o)) : tr(r.ref) ? r.ref.value = "" : (r.ref.value = o,
                            r.ref.type || f.values.next({
                                name: e,
                                values: {
                                    ...s
                                }
                            })))
                }
                (r.shouldDirty || r.shouldTouch) && b(e, o, r.shouldTouch, r.shouldDirty, !0),
                    r.shouldValidate && F(e)
            }, C = (e, t, r) => {
                for (const n in t) {
                    const o = t[n],
                        a = `${e}.${n}`,
                        s = At(i, a);
                    !l.array.has(e) && vr(o) && (!s || s._f) || yt(o) ? E(a, o, r) : C(a, o, r)
                }
            }, O = (e, r, n = {}) => {
                const c = At(i, e),
                    _ = l.array.has(e),
                    p = Et(r);
                Yt(s, e, p),
                    _ ? (f.array.next({
                            name: e,
                            values: {
                                ...s
                            }
                        }),
                        (d.isDirty || d.dirtyFields) && n.shouldDirty && f.state.next({
                            name: e,
                            dirtyFields: kr(a, s),
                            isDirty: x(e, p)
                        })) : !c || c._f || gt(p) ? E(e, p, n) : C(e, p, n),
                    Kt(e, l) && f.state.next({
                        ...o
                    }),
                    f.values.next({
                        name: e,
                        values: {
                            ...s
                        }
                    }),
                    !u.mount && t()
            }, A = async e => {
                const t = e.target;
                let a = t.name,
                    u = !0;
                const c = At(i, a);
                if (c) {
                    let _, g;
                    const x = t.type ? Cr(c._f) : St(e),
                        k = e.type === Ft.BLUR || e.type === Ft.FOCUS_OUT,
                        E = !Fr(c._f) && !n.resolver && !At(o.errors, a) && !c._f.deps || Dr(k, At(o.touchedFields, a), o.isSubmitted, m, p),
                        C = Kt(a, l, k);
                    Yt(s, a, x),
                        k ? (c._f.onBlur && c._f.onBlur(e),
                            r && r(0)) : c._f.onChange && c._f.onChange(e);
                    const O = b(a, x, k, !1),
                        A = !Bt(O) || C;
                    if (!k && f.values.next({
                            name: a,
                            type: e.type,
                            values: {
                                ...s
                            }
                        }),
                        E)
                        return d.isValid && v(),
                            A && f.state.next({
                                name: a,
                                ...C ? {} : O
                            });
                    if (!k && C && f.state.next({
                            ...o
                        }),
                        y(!0),
                        n.resolver) {
                        const {
                            errors: e
                        } = await S([a]), t = Tr(o.errors, i, a), r = Tr(e, i, t.name || a);
                        _ = r.error,
                            a = r.name,
                            g = Bt(e)
                    } else
                        _ = (await pr(c, s, h, n.shouldUseNativeValidation))[a],
                        u = isNaN(x) || x === At(s, a, x),
                        u && (_ ? g = !1 : d.isValid && (g = await N(i, !0)));
                    u && (c._f.deps && F(c._f.deps),
                        w(a, g, _, O))
                }
            }, F = async (e, t = {}) => {
                let r, a;
                const s = Ht(e);
                if (y(!0),
                    n.resolver) {
                    const t = await (async e => {
                        const {
                            errors: t
                        } = await S();
                        if (e)
                            for (const r of e) {
                                const e = At(t, r);
                                e ? Yt(o.errors, r, e) : mr(o.errors, r)
                            }
                        else
                            o.errors = t;
                        return t
                    })(Ot(e) ? e : s);
                    r = Bt(t),
                        a = e ? !s.some((e => At(t, e))) : r
                } else
                    e ? (a = (await Promise.all(s.map((async e => {
                            const t = At(i, e);
                            return await N(t && t._f ? {
                                [e]: t
                            } : t)
                        })))).every(Boolean),
                        (a || o.isValid) && v()) : a = r = await N(i);
                return f.state.next({
                        ...!qt(e) || d.isValid && r !== o.isValid ? {} : {
                            name: e
                        },
                        ...n.resolver || !e ? {
                            isValid: r
                        } : {},
                        errors: o.errors,
                        isValidating: !1
                    }),
                    t.shouldFocus && !a && Zt(i, (e => e && At(o.errors, e)), e ? s : l.mount),
                    a
            }, T = e => {
                const t = {
                    ...a,
                    ...u.mount ? s : {}
                };
                return Ot(e) ? t : qt(e) ? At(t, e) : e.map((e => At(t, e)))
            }, D = (e, t) => ({
                invalid: !!At((t || o).errors, e),
                isDirty: !!At((t || o).dirtyFields, e),
                isTouched: !!At((t || o).touchedFields, e),
                error: At((t || o).errors, e)
            }), $ = (e, t, r) => {
                const n = (At(i, e, {
                    _f: {}
                })._f || {}).ref;
                Yt(o.errors, e, {
                        ...t,
                        ref: n
                    }),
                    f.state.next({
                        name: e,
                        errors: o.errors,
                        isValid: !1
                    }),
                    r && r.shouldFocus && n && n.focus && n.focus()
            }, P = (e, t = {}) => {
                for (const r of e ? Ht(e) : l.mount)
                    l.mount.delete(r),
                    l.array.delete(r),
                    t.keepValue || (mr(i, r),
                        mr(s, r)),
                    !t.keepError && mr(o.errors, r),
                    !t.keepDirty && mr(o.dirtyFields, r),
                    !t.keepTouched && mr(o.touchedFields, r),
                    !n.shouldUnregister && !t.keepDefaultValue && mr(a, r);
                f.values.next({
                        values: {
                            ...s
                        }
                    }),
                    f.state.next({
                        ...o,
                        ...t.keepDirty ? {
                            isDirty: x()
                        } : {}
                    }),
                    !t.keepIsValid && v()
            }, V = (e, t = {}) => {
                let r = At(i, e);
                const o = er(t.disabled);
                return Yt(i, e, {
                        ...r || {},
                        _f: {
                            ...r && r._f ? r._f : {
                                ref: {
                                    name: e
                                }
                            },
                            name: e,
                            mount: !0,
                            ...t
                        }
                    }),
                    l.mount.add(e),
                    Ot(t.value) || Yt(s, e, t.value),
                    r ? o && Yt(s, e, t.disabled ? void 0 : At(s, e, Cr(r._f))) : g(e, !0, t.value), {
                        ...o ? {
                            disabled: t.disabled
                        } : {},
                        ...n.progressive ? {
                            required: !!t.required,
                            min: Ar(t.min),
                            max: Ar(t.max),
                            minLength: Ar(t.minLength),
                            maxLength: Ar(t.maxLength),
                            pattern: Ar(t.pattern)
                        } : {},
                        name: e,
                        onChange: A,
                        onBlur: A,
                        ref: o => {
                            if (o) {
                                V(e, t),
                                    r = At(i, e);
                                const n = Ot(o.value) && o.querySelectorAll && o.querySelectorAll("input,select,textarea")[0] || o,
                                    s = br(n),
                                    u = r._f.refs || [];
                                if (s ? u.find((e => e === n)) : n === r._f.ref)
                                    return;
                                Yt(i, e, {
                                        _f: {
                                            ...r._f,
                                            ...s ? {
                                                refs: [...u.filter(wr), n, ...Array.isArray(At(a, e)) ? [{}] : []],
                                                ref: {
                                                    type: n.type,
                                                    name: e
                                                }
                                            } : {
                                                ref: n
                                            }
                                        }
                                    }),
                                    g(e, !1, void 0, n)
                            } else
                                r = At(i, e, {}),
                                r._f && (r._f.mount = !1),
                                (n.shouldUnregister || t.shouldUnregister) && (!Nt(l.array, e) || !u.action) && l.unMount.add(e)
                        }
                    }
            }, I = () => n.shouldFocusError && Zt(i, (e => e && At(o.errors, e)), l.mount), L = (e, t) => async r => {
                r && (r.preventDefault && r.preventDefault(),
                    r.persist && r.persist());
                let a = Et(s);
                if (f.state.next({
                        isSubmitting: !0
                    }),
                    n.resolver) {
                    const {
                        errors: e,
                        values: t
                    } = await S();
                    o.errors = e,
                        a = t
                } else
                    await N(i);
                mr(o.errors, "root"),
                    Bt(o.errors) ? (f.state.next({
                            errors: {}
                        }),
                        await e(a, r)) : (t && await t({
                            ...o.errors
                        }, r),
                        I(),
                        setTimeout(I)),
                    f.state.next({
                        isSubmitted: !0,
                        isSubmitting: !1,
                        isSubmitSuccessful: Bt(o.errors),
                        submitCount: o.submitCount + 1,
                        errors: o.errors
                    })
            }, M = (r, n = {}) => {
                const c = r || a,
                    p = Et(c),
                    m = r && !Bt(r) ? p : a;
                if (n.keepDefaultValues || (a = c),
                    !n.keepValues) {
                    if (n.keepDirtyValues || _)
                        for (const e of l.mount)
                            At(o.dirtyFields, e) ? Yt(m, e, At(s, e)) : O(e, At(m, e));
                    else {
                        if (kt && Ot(r))
                            for (const e of l.mount) {
                                const t = At(i, e);
                                if (t && t._f) {
                                    const e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
                                    if (nr(e)) {
                                        const t = e.closest("form");
                                        if (t) {
                                            t.reset();
                                            break
                                        }
                                    }
                                }
                            }
                        i = {}
                    }
                    s = e.shouldUnregister ? n.keepDefaultValues ? Et(a) : {} : Et(m),
                        f.array.next({
                            values: {
                                ...m
                            }
                        }),
                        f.values.next({
                            values: {
                                ...m
                            }
                        })
                }
                l = {
                        mount: new Set,
                        unMount: new Set,
                        array: new Set,
                        watch: new Set,
                        watchAll: !1,
                        focus: ""
                    },
                    !u.mount && t(),
                    u.mount = !d.isValid || !!n.keepIsValid,
                    u.watch = !!e.shouldUnregister,
                    f.state.next({
                        submitCount: n.keepSubmitCount ? o.submitCount : 0,
                        isDirty: n.keepDirty ? o.isDirty : !(!n.keepDefaultValues || yr(r, a)),
                        isSubmitted: !!n.keepIsSubmitted && o.isSubmitted,
                        dirtyFields: n.keepDirtyValues ? o.dirtyFields : n.keepDefaultValues && r ? kr(a, r) : {},
                        touchedFields: n.keepTouched ? o.touchedFields : {},
                        errors: n.keepErrors ? o.errors : {},
                        isSubmitting: !1,
                        isSubmitSuccessful: !1
                    })
            }, R = (e, t) => M(rr(e) ? e(s) : e, t);
        return {
            control: {
                register: V,
                unregister: P,
                getFieldState: D,
                handleSubmit: L,
                setError: $,
                _executeSchema: S,
                _getWatch: k,
                _getDirty: x,
                _updateValid: v,
                _removeUnmounted: () => {
                    for (const e of l.unMount) {
                        const t = At(i, e);
                        t && (t._f.refs ? t._f.refs.every((e => !wr(e))) : !wr(t._f.ref)) && P(e)
                    }
                    l.unMount = new Set
                },
                _updateFieldArray: (e, t = [], r, n, l = !0, c = !0) => {
                    if (n && r) {
                        if (u.action = !0,
                            c && Array.isArray(At(i, e))) {
                            const t = r(At(i, e), n.argA, n.argB);
                            l && Yt(i, e, t)
                        }
                        if (c && Array.isArray(At(o.errors, e))) {
                            const t = r(At(o.errors, e), n.argA, n.argB);
                            l && Yt(o.errors, e, t),
                                $r(o.errors, e)
                        }
                        if (d.touchedFields && c && Array.isArray(At(o.touchedFields, e))) {
                            const t = r(At(o.touchedFields, e), n.argA, n.argB);
                            l && Yt(o.touchedFields, e, t)
                        }
                        d.dirtyFields && (o.dirtyFields = kr(a, s)),
                            f.state.next({
                                name: e,
                                isDirty: x(e, t),
                                dirtyFields: o.dirtyFields,
                                errors: o.errors,
                                isValid: o.isValid
                            })
                    } else
                        Yt(s, e, t)
                },
                _getFieldArray: t => Ct(At(u.mount ? s : a, t, e.shouldUnregister ? At(a, t, []) : [])),
                _reset: M,
                _resetDefaultValues: () => rr(n.defaultValues) && n.defaultValues().then((e => {
                    R(e, n.resetOptions),
                        f.state.next({
                            isLoading: !1
                        })
                })),
                _updateFormState: e => {
                    o = {
                        ...o,
                        ...e
                    }
                },
                _subjects: f,
                _proxyFormState: d,
                get _fields() {
                    return i
                },
                get _formValues() {
                    return s
                },
                get _state() {
                    return u
                },
                set _state(e) {
                    u = e
                },
                get _defaultValues() {
                    return a
                },
                get _names() {
                    return l
                },
                set _names(e) {
                    l = e
                },
                get _formState() {
                    return o
                },
                set _formState(e) {
                    o = e
                },
                get _options() {
                    return n
                },
                set _options(e) {
                    n = {
                        ...n,
                        ...e
                    }
                }
            },
            trigger: F,
            register: V,
            handleSubmit: L,
            watch: (e, t) => rr(e) ? f.values.subscribe({
                next: r => e(k(void 0, t), r)
            }) : k(e, t, !0),
            setValue: O,
            getValues: T,
            reset: R,
            resetField: (e, t = {}) => {
                At(i, e) && (Ot(t.defaultValue) ? O(e, At(a, e)) : (O(e, t.defaultValue),
                        Yt(a, e, t.defaultValue)),
                    t.keepTouched || mr(o.touchedFields, e),
                    t.keepDirty || (mr(o.dirtyFields, e),
                        o.isDirty = t.defaultValue ? x(e, At(a, e)) : x()),
                    t.keepError || (mr(o.errors, e),
                        d.isValid && v()),
                    f.state.next({
                        ...o
                    }))
            },
            clearErrors: e => {
                e && Ht(e).forEach((e => mr(o.errors, e))),
                    f.state.next({
                        errors: e ? o.errors : {}
                    })
            },
            unregister: P,
            setError: $,
            setFocus: (e, t = {}) => {
                const r = At(i, e),
                    n = r && r._f;
                if (n) {
                    const e = n.refs ? n.refs[0] : n.ref;
                    e.focus && (e.focus(),
                        t.shouldSelect && e.select())
                }
            },
            getFieldState: D
        }
    }

    function Ir(e = {}) {
        const t = Je.useRef(),
            r = Je.useRef(),
            [n, o] = Je.useState({
                isDirty: !1,
                isValidating: !1,
                isLoading: rr(e.defaultValues),
                isSubmitted: !1,
                isSubmitting: !1,
                isSubmitSuccessful: !1,
                isValid: !1,
                submitCount: 0,
                dirtyFields: {},
                touchedFields: {},
                errors: {},
                defaultValues: rr(e.defaultValues) ? void 0 : e.defaultValues
            });
        t.current || (t.current = {
            ...Vr(e, (() => o((e => ({
                ...e
            }))))),
            formState: n
        });
        const i = t.current.control;
        return i._options = e,
            function (e) {
                const t = Je.useRef(e);
                t.current = e,
                    Je.useEffect((() => {
                        const r = !e.disabled && t.current.subject && t.current.subject.subscribe({
                            next: t.current.next
                        });
                        return () => {
                            r && r.unsubscribe()
                        }
                    }), [e.disabled])
            }({
                subject: i._subjects.state,
                next: e => {
                    ((e, t, r, n) => {
                        r(e);
                        const {
                            name: o,
                            ...i
                        } = e;
                        return Bt(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((e => t[e] === (!n || Tt.all)))
                    })(e, i._proxyFormState, i._updateFormState, !0) && o({
                        ...i._formState
                    })
                }
            }),
            Je.useEffect((() => {
                e.values && !yr(e.values, r.current) ? (i._reset(e.values, i._options.resetOptions),
                    r.current = e.values) : i._resetDefaultValues()
            }), [e.values, i]),
            Je.useEffect((() => {
                i._state.mount || (i._updateValid(),
                        i._state.mount = !0),
                    i._state.watch && (i._state.watch = !1,
                        i._subjects.state.next({
                            ...i._formState
                        })),
                    i._removeUnmounted()
            })),
            t.current.formState = ((e, t, r, n = !0) => {
                const o = {
                    defaultValues: t._defaultValues
                };
                for (const i in e)
                    Object.defineProperty(o, i, {
                        get: () => {
                            const o = i;
                            return t._proxyFormState[o] !== Tt.all && (t._proxyFormState[o] = !n || Tt.all),
                                r && (r[o] = !0),
                                e[o]
                        }
                    });
                return o
            })(n, i),
            t.current
    }
    const Lr = "cgf",
        Mr = {
            themeBase: `${Lr}-theme-base`,
            theme: `${Lr}-theme`,
            modal: `${Lr}-modal`,
            modalOverlay: `${Lr}-modal-overlay`,
            modalContent: `${Lr}-modal-content`,
            modalClose: `${Lr}-modal-close`,
            modalToggle: `${Lr}-modal-toggle`,
            root: `${Lr}__container`,
            form: `${Lr}__form`,
            title: `${Lr}__title`,
            description: `${Lr}__description`,
            prose: `${Lr}__prose`,
            content: `${Lr}__content`,
            fields: `${Lr}__fields`,
            group: `${Lr}__group`,
            filedsGroup: `${Lr}__fields-group`,
            label: `${Lr}__label`,
            control: `${Lr}__control`,
            textarea: `${Lr}__textarea`,
            controlError: `${Lr}__control-error`,
            linearRadioGroup: `${Lr}__linear-group`,
            selectWrapper: `${Lr}__select-wrapper`,
            selectIcon: `${Lr}__select-icon`,
            selectIconWrapper: `${Lr}__select-icon-wrapper`,
            select: `${Lr}__select`,
            linear: `${Lr}__linear`,
            linearItem: `${Lr}__linear-item`,
            linearLabel: `${Lr}__linear-label`,
            linearLegend: `${Lr}__linear-legend`,
            linearLegendFirst: `${Lr}__linear-legend-first`,
            linearLegendLast: `${Lr}__linear-legend-last`,
            linearError: `${Lr}__linear-error`,
            radioGroup: `${Lr}__radio-group`,
            radioItem: `${Lr}__radio-item`,
            radio: `${Lr}__radio`,
            checkbox: `${Lr}__checkbox`,
            checkboxIcon: `${Lr}__checkbox-icon`,
            checkboxInput: `${Lr}__checkbox-input`,
            checkboxControl: `${Lr}__checkbox-control`,
            radioLabel: `${Lr}__radio-label`,
            radioError: `${Lr}__radio-error`,
            controlErrorMessage: `${Lr}__control-error-message`,
            controlTip: `${Lr}__control-tip`,
            btn: `${Lr}__btn`,
            btnPrimary: `${Lr}__btn-primary`,
            btnSecondary: `${Lr}__btn-secondary`,
            btnAlt: `${Lr}__btn-link`,
            success: `${Lr}__success`,
            copy: `${Lr}__copy`,
            actions: `${Lr}__actions`,
            section: `${Lr}__section`,
            sectionHide: `${Lr}__section-hidden`
        },
        Rr = {
            page: "page",
            redirect: "redirect"
        },
        jr = e => {
            const {
                title: t,
                options: r = {},
                onBack: n = (() => {})
            } = e, o = r.title || t, i = r.description || "Your response has been recoreded.", a = Boolean(r.isSubmitAnother), s = r.submitAnotherTitle || "Submit another response";
            return lt("div", {
                className: Mr.success,
                children: [lt("h3", {
                    className: Mr.title,
                    dangerouslySetInnerHTML: {
                        __html: o
                    }
                }), i ? lt("p", {
                    className: Mr.description,
                    dangerouslySetInnerHTML: {
                        __html: i
                    }
                }) : null, a ? lt("button", {
                    className: Mr.btnAlt,
                    onClick: n,
                    children: s
                }) : null]
            })
        },
        Ur = "This is a required field",
        Br = ye(((e, t) => {
            const {
                label: r,
                description: n,
                className: o,
                rootClass: i,
                name: a,
                required: s,
                error: u = null,
                ...l
            } = e, c = !!u, {
                register: d
            } = jt();

            return lt("input", {
                className: ht(Mr.control, {
                    [Mr.controlError]: c
                }),
                ...d(a, {
                    required: !!s && Ur
                }),
                ...l
            })
        }));
    Br.displayName = "Input";
    const Hr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        qr = /^(?:https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
        Wr = {
            [1]: {
                [1]: (e, t = {}) => {
                    const {
                        firstValue: r,
                        error: n
                    } = t;
                    return parseFloat(e) > r || n || `Value must be greater than ${r}`
                },
                [2]: (e, t = {}) => {
                    const {
                        firstValue: r,
                        error: n
                    } = t;
                    return parseFloat(e) >= r || n || `Must be a number greater than or equal to ${r}`
                },
                [3]: (e, t = {}) => {
                    const {
                        firstValue: r,
                        error: n
                    } = t;
                    return parseFloat(e) < r || n || `Must be a number less than ${r}`
                },
                [4]: (e, t = {}) => {
                    const {
                        firstValue: r,
                        error: n
                    } = t;
                    return parseFloat(e) <= r || n || `Must be a number less than or equal to ${r}`
                },
                [5]: (e, t = {}) => {
                    const {
                        firstValue: r,
                        error: n
                    } = t;
                    return parseFloat(e) === Number(r) || n || `Must be a number equal to ${r}`
                },
                [6]: (e, t = {}) => {
                    const {
                        firstValue: r,
                        error: n
                    } = t;
                    return parseFloat(e) !== Number(r) || n || `Must be a number not equal to ${r}`
                },
                [7]: (e, t = {}) => {
                    const {
                        firstValue: r,
                        secondValue: n,
                        error: o
                    } = t, i = parseFloat(e);
                    return i >= Number(r) && i <= Number(n) || o || `Must be a number between ${r} and ${n}`
                },
                [8]: (e, t = {}) => {
                    const {
                        firstValue: r,
                        secondValue: n,
                        error: o
                    } = t, i = parseFloat(e);
                    return i < Number(r) || i > Number(n) || o || `Must be a number less than ${r} or greater than ${n}`
                },
                [9]: (e, t = {}) => {
                    const {
                        error: r
                    } = t;
                    return !isNaN(parseFloat(e)) || r || "Must be a number"
                }
            },
            [2]: {
                [100]: (e, t = {}) => {
                    const {
                        firstValue: r,
                        error: n
                    } = t;
                    return (e || "").includes(r) || n || `Must contain ${r}`
                },
                [101]: (e, t = {}) => {
                    const {
                        firstValue: r,
                        error: n
                    } = t;
                    return !(e || "").includes(r) || n || `Must not contain ${r}`
                },
                [102]: (e, t = {}) => {
                    const {
                        error: r
                    } = t;
                    return Hr.test(e) || r || "Must be a valid email"
                },
                [103]: (e, t = {}) => {
                    const {
                        error: r
                    } = t;
                    return qr.test(e) || r || "Must be a valid URL"
                }
            },
            [6]: {
                [202]: (e, t = {}) => {
                    const {
                        firstValue: r,
                        error: n
                    } = t;
                    return (e || "").length <= Number(r) || n || `Must be ${r} characters or fewer`
                },
                [203]: (e, t = {}) => {
                    const {
                        firstValue: r,
                        error: n
                    } = t;
                    return (e || "").length >= Number(r) || n || `Must be at least ${r} characters`
                }
            },
            [4]: {
                [299]: (e, t = {}) => {
                    const {
                        firstValue: r,
                        error: n
                    } = t;
                    return new RegExp(r).test(e || "") || n || "Must match pattern"
                },
                [300]: (e, t = {}) => {
                    const {
                        firstValue: r,
                        error: n
                    } = t;
                    return !new RegExp(r).test(e || "") || n || "Must match pattern"
                },
                [301]: (e, t = {}) => {
                    const {
                        firstValue: r,
                        error: n
                    } = t;
                    return new RegExp(`^${r}$`).test(e || "") || n || "Must match pattern"
                },
                [302]: (e, t = {}) => {
                    const {
                        firstValue: r,
                        error: n
                    } = t;
                    return !new RegExp(`^${r}$`).test(e || "") || n || "Must match pattern"
                }
            }
        },
        Gr = (e, t) => {
            if (!t || !e)
                return !1;
            const r = {};
            if (t && (r.required = "This is a required question"),
                e) {
                const t = (e => {
                    if ((null == e ? void 0 : e.length) < 2)
                        return;
                    const [t, r, n, o] = e, i = Wr[t] && Wr[t][r], [a, s] = n || [];
                    return "function" == typeof i && a ? e => i(e, {
                        firstValue: a,
                        secondValue: s,
                        error: o
                    }) : void 0
                })(e);
                "function" == typeof t && (r.validate = t)
            }
            return r
        },
        Xr = e => {
            const {
                label: t
            } = e;
            return t ? lt("div", {
                className: Mr.label,
                dangerouslySetInnerHTML: {
                    __html: t
                }
            }) : null
        },
        Yr = e => {
            const {
                description: t
            } = e;
            return t ? lt("div", {
                className: ht(Mr.controlTip, Mr.prose),
                dangerouslySetInnerHTML: {
                    __html: t
                }
            }) : null
        },
        zr = e => {
            const {
                error: t
            } = e;
            return t ? lt("div", {
                className: Mr.controlErrorMessage,
                children: t
            }) : null
        },
        Zr = ye(((e, t) => {
            const {
                name: r,
                label: n,
                type: o,
                description: i,
                className: a,
                rootClass: s,
                error: u = "",
                field: l = {},
                ...c
            } = e, {
                register: d
            } = jt(), {
                withTime: f = !1,
                rules: _ = [],
                required: p
            } = l, m = Gr(_, p), h = m ? d(r, m) : {};
            return lt("label", {
                className: Mr.group,
                children: [lt(Xr, {
                    label: n
                }), lt(Yr, {
                    description: i
                }), lt("div", {
                    className: Mr.filedsGroup,
                    children: [lt(Br, {
                        error: u,
                        type: o,
                        name: r,
                        ...h,
                        ...c
                    }), f ? lt(Br, {
                        name: `${r}time`,
                        error: u,
                        type: "time",
                        ...c
                    }) : null]
                }), lt(zr, {
                    error: u
                })]
            })
        }));
    Zr.displayName = "InputWrapper";
    const Jr = e => {
            const {
                label: t,
                description: r,
                className: n,
                name: o,
                error: i = null,
                field: a = {},
                ...s
            } = e, {
                withTime: u = !1,
                rules: l = [],
                required: c
            } = a, d = !!i, {
                register: f
            } = jt(), _ = Gr(l, c), p = _ ? f(o, _) : {};
            return lt("label", {
                className: Mr.group,
                children: [lt(Xr, {
                    label: t
                }), lt(Yr, {
                    description: r
                }), lt("textarea", {
                    className: ht(Mr.control, Mr.textarea, {
                        [Mr.controlError]: d
                    }),
                    ...f(o, {
                        required: !!c && Ur
                    }),
                    ...p,
                    ...s
                }), lt(zr, {
                    error: i
                })]
            })
        },
        Kr = e => {
            const {
                label: t,
                radioCustom: r,
                description: n = "",
                className: o = "",
                error: i = "",
                options: a = [],
                name: s,
                required: u,
                ...l
            } = e, c = !!i, {
                register: d
            } = jt();
            return lt("div", {
                className: Mr.group,
                children: [lt(Xr, {
                    label: t
                }), lt(Yr, {
                    description: n
                }), lt("div", {
                    className: Mr.radioGroup,
                    children: a.map((({
                        label: e,
                        custom: t
                    }) => lt("label", {
                        className: Mr.radioItem,
                        children: [lt("input", {
                            type: "radio",
                            value: t ? "__other_option__" : e,
                            className: ht(Mr.radio, {
                                [Mr.radioError]: c
                            }),
                            ...d(s, {
                                required: !!u && Ur
                            }),
                            ...l
                        }), lt("span", {
                            className: Mr.radioLabel,
                            children: t ? r : e
                        })]
                    }, e)))
                }), lt(zr, {
                    error: i
                })]
            })
        },
        Qr = e => {
            const {
                label: t,
                radioCustom: r,
                description: n = "",
                className: o = "",
                error: i = "",
                options: a = [],
                name: s,
                required: u,
                ...l
            } = e, c = !!i, {
                register: d
            } = jt();
            return lt("div", {
                className: Mr.group,
                children: [lt(Xr, {
                    label: t
                }), lt(Yr, {
                    description: n
                }), lt("div", {
                    className: Mr.radioGroup,
                    children: a.map((({
                        label: e,
                        custom: t
                    }) => lt("label", {
                        className: Mr.radioItem,
                        children: [lt("span", {
                            className: ht(Mr.checkbox),
                            children: [lt("input", {
                                className: ht(Mr.checkboxInput, {
                                    [Mr.radioError]: c
                                }),
                                type: "checkbox",
                                value: t ? "__other_option__" : e,
                                ...d(s, {
                                    required: !!u && Ur
                                }),
                                ...l
                            }), lt("span", {
                                className: ht(Mr.checkboxControl, {
                                    [Mr.radioError]: c
                                }),
                                children: lt("svg", {
                                    className: Mr.checkboxIcon,
                                    viewBox: "0 0 12 10",
                                    children: lt("polyline", {
                                        points: "1.5 6 4.5 9 10.5 1"
                                    })
                                })
                            })]
                        }), lt("span", {
                            className: Mr.radioLabel,
                            children: t ? r : e
                        })]
                    }, e)))
                }), lt(zr, {
                    error: i
                })]
            })
        },
        en = e => {
            const {
                label: t,
                legend: r = {},
                description: n = "",
                className: o = "",
                error: i = "",
                name: a,
                required: s,
                options: u = [],
                ...l
            } = e, {
                labelFirst: c,
                labelLast: d
            } = r, f = !!i, {
                register: _
            } = jt();
            return lt("div", {
                className: Mr.group,
                children: [lt(Xr, {
                    label: t
                }), lt(Yr, {
                    description: n
                }), lt("div", {
                    className: Mr.linearRadioGroup,
                    children: [c ? lt("label", {
                        className: ht(Mr.linearItem, Mr.linearLegend, Mr.linearLegendFirst),
                        children: c
                    }) : null, u.map((({
                        label: e
                    }) => lt("label", {
                        className: Mr.linearItem,
                        children: [lt("input", {
                            type: "radio",
                            value: e,
                            className: ht(Mr.radio, {
                                [Mr.linearError]: f
                            }),
                            ..._(a, {
                                required: !!s && Ur
                            }),
                            ...l
                        }), lt("span", {
                            className: Mr.linearLabel,
                            children: e
                        })]
                    }, e))), d ? lt("label", {
                        className: ht(Mr.linearItem, Mr.linearLegend, Mr.linearLegendLast),
                        children: d
                    }) : null]
                }), lt(zr, {
                    error: i
                })]
            })
        },
        tn = e => {
            const {
                label: t,
                description: r = "",
                className: n = "",
                error: o = "",
                options: i = [],
                name: a,
                required: s,
                ...u
            } = e, l = !!o, {
                register: c
            } = jt();
            return lt("label", {
                className: Mr.group,
                children: [lt(Xr, {
                    label: t
                }), lt(Yr, {
                    description: r
                }), lt("div", {
                    className: ht(Mr.selectWrapper),
                    children: [lt("select", {
                        className: ht(Mr.control, {
                            [Mr.controlError]: l
                        }),
                        ...c(a, {
                            required: !!s && Ur
                        }),
                        ...u,
                        children: [lt("option", {
                            value: "",
                            children: "Choose"
                        }), i.map((({
                            label: e
                        }) => lt("option", {
                            value: e,
                            children: e
                        })))]
                    }), lt("div", {
                        class: ht(Mr.selectIconWrapper),
                        children: lt("svg", {
                            viewBox: "0 0 24 24",
                            role: "presentation",
                            class: ht(Mr.selectIcon),
                            focusable: "false",
                            "aria-hidden": "true",
                            children: lt("path", {
                                fill: "currentColor",
                                d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                            })
                        })
                    })]
                }), lt(zr, {
                    error: o
                })]
            })
        },
        rn = e => {
            const {
                children: t,
                isActive: r = !1
            } = e;
            if (!!r) {

            }
            return lt("fieldset", {
                disabled: !r,
                className: ht(Mr.section, {
                    [Mr.sectionHide]: !r
                }),
                children: t
            })
        },
        nn = {
            primary: Mr.btnPrimary,
            secondary: Mr.btnSecondary
        },
        on = e => {
            const {
                children: t,
                disabled: r = !1,
                type: n = "button",
                variant: o = "primary",
                ...i
            } = e;
            return lt("button", {
                disabled: r,
                type: n,
                className: ht(Mr.btn, nn[o]),
                ...i,
                children: t
            })
        },
        an = (e = "") => {
            const t = ((e = "") => {
                let t = "";
                switch (e) {
                    case "SHORT_ANSWER":
                        t = "text";
                        break;
                    case "LONG_ANSWER":
                        t = "textarea";
                        break;
                    case "SHORT_ANSWER":
                        t = "text";
                        break;
                    case "CHECKBOX":
                        t = "checkbox";
                        break;
                    case "RADIO":
                        t = "radio";
                        break;
                    case "DATE":
                        t = "date";
                        break;
                    case "TIME":
                        t = "time"
                }
                return t
            })(e);
            return t ? `_${t}` : ""
        },
        sn = ({
            fields: e = [],
            step: t = 0
        }) => {
            const {
                setValue: r,
                formState: {
                    errors: n
                }
            } = jt();
            return e.length > 0 && e.map(((e, o) => {
                var i;
                const {
                    id: a,
                    type: s = "TEXT",
                    label: u,
                    required: l,
                    description: c,
                    options: d = [],
                    items: f = [],
                    legend: _ = {}
                } = e, p = an(s), m = `${a}${p}`, h = (null == (i = n[m]) ? void 0 : i.message) || null;
                return "GROUP" === s ? lt(rn, {
                    isActive: o === t,
                    children: lt(sn, {
                        fields: f
                    })
                }) : {
                    SHORT_ANSWER: lt(Zr, {
                        error: h,
                        label: u,
                        type: "text",
                        name: m,
                        required: l,
                        description: c,
                        field: e
                    }),
                    DATE: lt(Zr, {
                        error: h,
                        label: u,
                        type: "date",
                        name: m,
                        required: l,
                        description: c,
                        field: e
                    }),
                    TIME: lt(Zr, {
                        error: h,
                        label: u,
                        type: "time",
                        name: m,
                        required: l,
                        description: c,
                        field: e
                    }),
                    LONG_ANSWER: lt(Jr, {
                        error: h,
                        label: u,
                        name: m,
                        required: l,
                        description: c,
                        field: e
                    }),
                    RADIO: lt(Kr, {
                        error: h,
                        options: d,
                        label: u,
                        name: m,
                        required: l,
                        description: c,
                        radioCustom: lt(Br, {
                            onFocus: () => {
                                r(a, "__other_option__")
                            },
                            name: `${a}_other_option_response`,
                            required: !1,
                            type: "text"
                        })
                    }),
                    CHECKBOX: lt(Qr, {
                        error: h,
                        options: d,
                        label: u,
                        name: m,
                        required: l,
                        description: c,
                        radioCustom: lt(Br, {
                            name: `${a}_other_option_response`,
                            required: !1,
                            type: "text"
                        })
                    }),
                    LINEAR: lt(en, {
                        legend: _,
                        error: h,
                        options: d,
                        label: u,
                        name: m,
                        required: l,
                        description: c
                    }),
                    DROPDOWN: lt(tn, {
                        error: h,
                        options: d,
                        label: u,
                        name: m,
                        required: l,
                        description: c
                    }),
                    SECTION: lt("div", {
                        className: Mr.group,
                        children: [lt(Xr, {
                            label: u
                        }), lt(Yr, {
                            description: c
                        })]
                    }),
                    TEXT: lt("div", {
                        className: Mr.group,
                        children: [lt(Xr, {
                            label: u
                        }), lt(Yr, {
                            description: c
                        })]
                    })
                } [s]
            }))
        },
        un = e => {
            const {
                formData: t,
                onSubmit: r,
                isLoading: n = !1
            } = e, {
                id: o,
                title: i = null,
                description: a = null
            } = t, {
                trigger: s
            } = jt(), u = (null == t ? void 0 : t.fields) || [], l = (null == t ? void 0 : t.settings) || {}, c = (null == l ? void 0 : l.form) || {}, d = (null == c ? void 0 : c.submit) || "Submit", {
                fields: f = [],
                stepsCount: _,
                isWizzard: p
            } = ((e = []) => {
                const t = e.some((({
                        type: e
                    }) => "SECTION" === e)),
                    r = [];
                let n;
                return e.forEach(((e, t) => {
                    const {
                        type: o
                    } = e;
                    ("SECTION" === o || 0 === t && "SECTION" !== o) && (n = "number" == typeof n ? n + 1 : t,
                        r[n] || r.push({
                            type: "GROUP",
                            items: []
                        })),
                    "number" == typeof n ? r[n].items.push(e) : r.push(e)
                })), {
                    isWizzard: t,
                    stepsCount: t ? null == r ? void 0 : r.length : 0,
                    fields: t ? r : e
                }
            })(u), [m, v] = K(0), y = m === _ - 1, g = 0 === m;
            
            return lt(h, {
                children: lt("form", {
                    id: `${Lr}-${o}`,
                    className: Mr.form,
                    onSubmit: r,
                    noValidate: !0,
                    children: [i ? lt("div", {
                        className: Mr.title,
                        dangerouslySetInnerHTML: {
                            __html: i
                        }
                    }) : null, a ? lt("div", {
                        className: ht(Mr.description, Mr.prose),
                        dangerouslySetInnerHTML: {
                            __html: a
                        }
                    }) : null, lt("div", {
                        className: Mr.content,
                        children: [lt("div", {
                            className: Mr.fields,
                            children: lt(sn, {
                                fields: f,
                                step: m
                            })
                        }), lt("div", {
                            className: Mr.actions,
                            children: p ? lt(h, {
                                children: [g ? null : lt(on, {
                                    disabled: n,
                                    type: "button",
                                    variant: "secondary",
                                    onClick: () => {
                                        const progress = document.getElementById('form-progress');
                                        if (progress) {
                                            progress.value = (m - 1);
                                        }
                                        return !g && v(m - 1);
                                    },
                                    children: "Back"
                                }), y ? lt(on, {
                                    disabled: n,
                                    type: "submit",
                                    variant: "primary",
                                    children: d
                                }, "btn-submit") : lt(on, {
                                    disabled: n,
                                    type: "button",
                                    variant: "primary",
                                    onClick: async () => {
                                        var e;
                                        const t = (f && f[m] && ((null == (e = f[m]) ? void 0 : e.items) || [])).filter((({
                                            id: e
                                        }) => !!e)).map((({
                                            id: e,
                                            type: t
                                        }) => `${e}${an(t)}`));
                                        (!((null == t ? void 0 : t.length) > 0) || await s(t)) && !y && v(m + 1) && $('#form-progress') && $('#form-progress').length && $('#form-progress').val(m + 1);
                                    },
                                    children: "Next"
                                }, "btn-secondary")]
                            }) : lt(on, {
                                disabled: n,
                                type: "submit",
                                variant: "primary",
                                children: d
                            })
                        })]
                    })]
                })
            })
        },
        ln = (e, t) => {
            let r = e;
            if (e.includes("_other_option_response")) {
                r = e.replace("_other", ".other");
            } else if (t) {
                const [n, o] = e.split("_");
                console.log('n', n);
                switch (r = n,
                    o) {
                    case "date":
                        const [e, n, o] = t.split("-");
                        return [{
                            key: `entry.${r}_year`,
                            value: e
                        }, {
                            key: `entry.${r}_month`,
                            value: n
                        }, {
                            key: `entry.${r}_day`,
                            value: o
                        }];
                    case "datetime":
                        const [i, a] = t.split(":");
                        return [{
                            key: `entry.${r}_hour`,
                            value: i
                        }, {
                            key: `entry.${r}_minute`,
                            value: a
                        }]
                }
            }
            return [{
                key: `entry.${r}`,
                value: t
            }]
        },
        cn = "myform",
        dn = e => {},
        fn = e => {
            const {
                cliendId: t = "",
                eventName: r = "",
                eventParams: n = {}
            } = e || {};
            if (!t || !r)
                return;
        },
        _n = (e, t) => {
            var r;
            const n = null == (r = null == window ? void 0 : window.MyForm) ? void 0 : r.hooks[e],
                o = {
                    next: !0
                };
            return "function" == typeof n && n(t) || o
        },
        pn = e => {
            const {
                formData: t,
                dataProps: r
            } = e;
            null == r || r.mode;
            const {
                id: n,
                userId: o = "",
                preview: i = "form",
                googleFormId: a = "",
                title: s = "",
                theme: u = "minimal",
                customTheme: l = {},
                settings: c = {}
            } = t, {
                type: d = Rr.page,
                redirectUrl: f
            } = (null == c ? void 0 : c.success) || {}, {
                showBrandedLogo: _ = !0
            } = (null == c ? void 0 : c.form) || {}, [p, m] = K(!1), [h, v] = K(!1), y = Ir({
                mode: "all",
                reValidateMode: "onChange"
            });
            return ee((() => {
                    p ? (fn({
                            cliendId: o,
                            eventName: "cgf_thankyou",
                            eventParams: {
                                userId: o,
                                id: n
                            }
                        }),
                        dn({
                            action: "form_thankyou",
                            label: {
                                id: n
                            }
                        })) : (fn({
                            cliendId: o,
                            eventName: "cgf_form",
                            eventParams: {
                                userId: o,
                                id: n
                            }
                        }),
                        dn({
                            action: "form_view",
                            label: {
                                id: n
                            }
                        }))
                }), [p]),
                lt("div", {
                    className: ht(Mr.root),
                    children: [p || "thankyou" === i ? lt(jr, {
                        title: s,
                        options: null == c ? void 0 : c.success,
                        onBack: () => {
                            dn({
                                    action: "form_submit_another",
                                    label: {
                                        id: n
                                    }
                                }),
                                _n("submitAnother", {
                                    id: n
                                }),
                                m(!1)
                        }
                    }) : lt(Ut, {
                        ...y,
                        children: lt(un, {
                            isLoading: h,
                            onSubmit: y.handleSubmit((async e => {
                                v(!0),
                                    _n("beforeSubmit", {
                                        id: n,
                                        data: e
                                    }),
                                    dn({
                                        action: "form_before_submit",
                                        label: {
                                            id: n
                                        }
                                    });
                                console.log('check');
                                const t = await (async (e, t) => {
                                    const r = new URLSearchParams;
                                    Object.entries(t).forEach((([e, t]) => {
                                        Array.isArray(t) ? t.forEach((t => {
                                            ln(e, t).forEach((({
                                                key: e,
                                                value: t
                                            }) => {
                                                r.append(e, t)
                                            }))
                                        })) : ln(e, t).forEach((({
                                            key: e,
                                            value: t
                                        }) => {
                                            r.append(e, t)
                                        }))
                                    }));
                                    const n = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSd5wYkRG-mp23xYwqM_q5c0ztlju563Kh_6jbbvaw0KlZ4AkQ/formResponse`;
                                    return await fetch(n, {
                                            method: "GET",
                                            mode: "no-cors",
                                            headers: {
                                                "Content-Type": "application/x-www-form-urlencoded"
                                            }
                                        }),
                                        !0
                                })(a, e);
                                switch (_n("afterSubmit", {
                                        id: n,
                                        data: e
                                    }),
                                    dn({
                                        action: "form_after_submit",
                                        label: {
                                            id: n
                                        }
                                    }),
                                    d) {
                                    case Rr.page:
                                        m(t),
                                            v(!1),
                                            y.reset();
                                        break;
                                    case Rr.redirect:
                                        if (dn({
                                                action: "form_before_redirect",
                                                label: {
                                                    id: n
                                                }
                                            }),
                                            !_n("beforeRedirect", {
                                                id: n
                                            }).next)
                                            return;
                                        return void(window.location.href = f)
                                }
                            }), (async e => {
                                _n("onError", {
                                        id: n,
                                        errors: e
                                    }),
                                    dn({
                                        action: "form_error",
                                        label: {
                                            id: n,
                                            errors: e
                                        }
                                    })
                            })),
                            formData: t
                        })
                    })]
                })
        };

    function mn() {
        return !("undefined" == typeof window || !window.document || !window.document.createElement)
    }

    function hn(e, t) {
        return r => {
            if (e && e(r),
                !r.defaultPrevented)
                return t(r)
        }
    }

    function vn(e, t) {
        if (null != e)
            if (function (e) {
                    return !(!e || "[object Function]" != {}.toString.call(e))
                }(e))
                e(t);
            else
                try {
                    e.current = t
                } catch (r) {
                    throw new Error(`Cannot assign value "${t}" to ref "${e}"`)
                }
    }

    function yn() {}
    var gn = mn() ? te : ee,
        bn = ({
            children: e,
            type: t = "reach-portal",
            containerRef: r
        }) => {
            let n = re(null),
                o = re(null),
                i = function () {
                    let [, e] = K(Object.create(null));
                    return oe((() => {
                        e(Object.create(null))
                    }), [])
                }();
            return ee((() => {
                    null != r && ("object" == typeof r && "current" in r ? null == r.current && console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html.") : console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`."))
                }), [r]),
                gn((() => {
                    if (!n.current)
                        return;
                    let e = n.current.ownerDocument,
                        a = (null == r ? void 0 : r.current) || e.body;
                    return o.current = null == e ? void 0 : e.createElement(t),
                        a.appendChild(o.current),
                        i(),
                        () => {
                            o.current && a && a.removeChild(o.current)
                        }
                }), [t, i, r]),
                o.current ? Te(e, o.current) : p("span", {
                    ref: n
                })
        },
        wn = ({
            unstable_skipInitialRender: e,
            ...t
        }) => {
            let [r, n] = K(!1);
            return ee((() => {
                    e && n(!0)
                }), [e]),
                e && !r ? null : p(bn, {
                    ...t
                })
        };

    function Sn() {
        return Sn = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            Sn.apply(this, arguments)
    }
    wn.displayName = "Portal";
    var Nn = "data-focus-lock",
        xn = "data-focus-lock-disabled";

    function kn(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t),
            e
    }
    var En = new WeakMap;

    function Cn(e, t) {
        var r, n, o, i = (r = t || null,
            n = function (t) {
                return e.forEach((function (e) {
                    return kn(e, t)
                }))
            },
            (o = K((function () {
                return {
                    value: r,
                    callback: n,
                    facade: {
                        get current() {
                            return o.value
                        },
                        set current(e) {
                            var t = o.value;
                            t !== e && (o.value = e,
                                o.callback(e, t))
                        }
                    }
                }
            }))[0]).callback = n,
            o.facade);
        return te((function () {
                var t = En.get(i);
                if (t) {
                    var r = new Set(t),
                        n = new Set(e),
                        o = i.current;
                    r.forEach((function (e) {
                            n.has(e) || kn(e, null)
                        })),
                        n.forEach((function (e) {
                            r.has(e) || kn(e, o)
                        }))
                }
                En.set(i, e)
            }), [e]),
            i
    }
    var On = {
            width: "1px",
            height: "0px",
            padding: 0,
            overflow: "hidden",
            position: "fixed",
            top: "1px",
            left: "1px"
        },
        An = function () {
            return An = Object.assign || function (e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in t = arguments[r])
                            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                },
                An.apply(this, arguments)
        };

    function Fn(e) {
        return e
    }

    function Tn(e, t) {
        void 0 === t && (t = Fn);
        var r = [],
            n = !1;
        return {
            read: function () {
                if (n)
                    throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return r.length ? r[r.length - 1] : e
            },
            useMedium: function (e) {
                var o = t(e, n);
                return r.push(o),
                    function () {
                        r = r.filter((function (e) {
                            return e !== o
                        }))
                    }
            },
            assignSyncMedium: function (e) {
                for (n = !0; r.length;) {
                    var t = r;
                    r = [],
                        t.forEach(e)
                }
                r = {
                    push: function (t) {
                        return e(t)
                    },
                    filter: function () {
                        return r
                    }
                }
            },
            assignMedium: function (e) {
                n = !0;
                var t = [];
                if (r.length) {
                    var o = r;
                    r = [],
                        o.forEach(e),
                        t = r
                }
                var i = function () {
                        var r = t;
                        t = [],
                            r.forEach(e)
                    },
                    a = function () {
                        return Promise.resolve().then(i)
                    };
                a(),
                    r = {
                        push: function (e) {
                            t.push(e),
                                a()
                        },
                        filter: function (e) {
                            return t = t.filter(e),
                                r
                        }
                    }
            }
        }
    }

    function Dn(e, t) {
        return void 0 === t && (t = Fn),
            Tn(e, t)
    }

    function $n(e) {
        void 0 === e && (e = {});
        var t = Tn(null);
        return t.options = An({
                async: !0,
                ssr: !1
            }, e),
            t
    }
    "function" == typeof SuppressedError && SuppressedError;
    var Pn = function (e) {
        var t = e.sideCar,
            r = function (e, t) {
                var r = {};
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                        t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                }
                return r
            }(e, ["sideCar"]);
        if (!t)
            throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var n = t.read();
        if (!n)
            throw new Error("Sidecar medium not found");
        return p(n, An({}, r))
    };
    Pn.isSideCarExport = !0;
    var Vn = Dn({}, (function (e) {
            return {
                target: e.target,
                currentTarget: e.currentTarget
            }
        })),
        In = Dn(),
        Ln = Dn(),
        Mn = $n({
            async: !0
        }),
        Rn = [],
        jn = ye((function (e, t) {
            var r, n = K(),
                o = n[0],
                i = n[1],
                a = re(),
                s = re(!1),
                u = re(null),
                l = e.children,
                c = e.disabled,
                d = e.noFocusGuards,
                f = e.persistentFocus,
                _ = e.crossFrame,
                m = e.autoFocus;
            e.allowTextSelection;
            var v = e.group,
                y = e.className,
                g = e.whiteList,
                b = e.shards,
                w = void 0 === b ? Rn : b,
                S = e.as,
                N = void 0 === S ? "div" : S,
                x = e.lockProps,
                k = void 0 === x ? {} : x,
                E = e.sideCar,
                C = e.returnFocus,
                O = e.onActivation,
                A = e.onDeactivation,
                F = K({})[0],
                T = oe((function () {
                    u.current = u.current || document && document.activeElement,
                        a.current && O && O(a.current),
                        s.current = !0
                }), [O]),
                D = oe((function () {
                    s.current = !1,
                        A && A(a.current)
                }), [A]),
                $ = oe((function (e) {
                    var t = u.current;
                    if (Boolean(C) && t && t.focus) {
                        var r = "object" == typeof C ? C : void 0;
                        u.current = null,
                            e ? Promise.resolve().then((function () {
                                return t.focus(r)
                            })) : t.focus(r)
                    }
                }), [C]),
                P = oe((function (e) {
                    s.current && Vn.useMedium(e)
                }), []),
                V = In.useMedium,
                I = oe((function (e) {
                    a.current !== e && (a.current = e,
                        i(e))
                }), []),
                L = Sn(((r = {})[xn] = c && "disabled",
                    r[Nn] = v,
                    r), k),
                M = !0 !== d,
                R = M && "tail" !== d,
                j = Cn([t, I]);
            return p(h, null, M && [p("div", {
                key: "guard-first",
                "data-focus-guard": !0,
                tabIndex: c ? -1 : 0,
                style: On
            }), p("div", {
                key: "guard-nearest",
                "data-focus-guard": !0,
                tabIndex: c ? -1 : 1,
                style: On
            })], !c && p(E, {
                id: F,
                sideCar: Mn,
                observed: o,
                disabled: c,
                persistentFocus: f,
                crossFrame: _,
                autoFocus: m,
                whiteList: g,
                shards: w,
                onActivation: T,
                onDeactivation: D,
                returnFocus: $
            }), p(N, Sn({
                ref: j
            }, L, {
                className: y,
                onBlur: V,
                onFocus: P
            }), l), R && p("div", {
                "data-focus-guard": !0,
                tabIndex: c ? -1 : 0,
                style: On
            }))
        }));
    jn.propTypes = {},
        jn.defaultProps = {
            children: void 0,
            disabled: !1,
            returnFocus: !1,
            noFocusGuards: !1,
            autoFocus: !0,
            persistentFocus: !1,
            crossFrame: !0,
            allowTextSelection: void 0,
            group: void 0,
            className: void 0,
            whiteList: void 0,
            shards: void 0,
            as: "div",
            lockProps: {},
            onActivation: void 0,
            onDeactivation: void 0
        };
    const Un = jn;

    function Bn(e, t) {
        return (Bn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
            return e.__proto__ = t,
                e
        })(e, t)
    }

    function Hn(e) {
        return (Hn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } :
            function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
        )(e)
    }

    function qn(e) {
        var t = function (e, t) {
            if ("object" != Hn(e) || !e)
                return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != Hn(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == Hn(t) ? t : String(t)
    }
    var Wn = function (e) {
            for (var t = Array(e.length), r = 0; r < e.length; ++r)
                t[r] = e[r];
            return t
        },
        Gn = function (e) {
            return Array.isArray(e) ? e : [e]
        },
        Xn = function (e) {
            return e.parentNode ? Xn(e.parentNode) : e
        },
        Yn = function (e) {
            return Gn(e).filter(Boolean).reduce((function (e, t) {
                var r = t.getAttribute(Nn);
                return e.push.apply(e, r ? function (e) {
                        for (var t = new Set, r = e.length, n = 0; n < r; n += 1)
                            for (var o = n + 1; o < r; o += 1) {
                                var i = e[n].compareDocumentPosition(e[o]);
                                (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o),
                                    (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(n)
                            }
                        return e.filter((function (e, r) {
                            return !t.has(r)
                        }))
                    }(Wn(Xn(t).querySelectorAll("[" + Nn + '="' + r + '"]:not([' + xn + '="disabled"])'))) : [t]),
                    e
            }), [])
        },
        zn = function (e, t) {
            return !e || e === document || e && e.nodeType === Node.DOCUMENT_NODE || ! function (e) {
                if (e.nodeType !== Node.ELEMENT_NODE)
                    return !1;
                var t = window.getComputedStyle(e, null);
                return !(!t || !t.getPropertyValue || "none" !== t.getPropertyValue("display") && "hidden" !== t.getPropertyValue("visibility"))
            }(e) && t(e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode)
        },
        Zn = function (e, t) {
            var r = e.get(t);
            if (void 0 !== r)
                return r;
            var n = zn(t, Zn.bind(void 0, e));
            return e.set(t, n),
                n
        },
        Jn = function (e) {
            return Boolean(e && e.dataset && e.dataset.focusGuard)
        },
        Kn = function (e) {
            return !Jn(e)
        },
        Qn = function (e) {
            return Boolean(e)
        },
        eo = function (e, t) {
            var r = e.tabIndex - t.tabIndex,
                n = e.index - t.index;
            if (r) {
                if (!e.tabIndex)
                    return 1;
                if (!t.tabIndex)
                    return -1
            }
            return r || n
        },
        to = function (e, t, r) {
            return Wn(e).map((function (e, t) {
                return {
                    node: e,
                    index: t,
                    tabIndex: r && -1 === e.tabIndex ? (e.dataset || {}).focusGuard ? 0 : -1 : e.tabIndex
                }
            })).filter((function (e) {
                return !t || e.tabIndex >= 0
            })).sort(eo)
        },
        ro = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
        no = ro + ", [data-focus-guard]",
        oo = function (e, t) {
            return e.reduce((function (e, r) {
                return e.concat(Wn(r.querySelectorAll(t ? no : ro)), r.parentNode ? Wn(r.parentNode.querySelectorAll(ro)).filter((function (e) {
                    return e === r
                })) : [])
            }), [])
        },
        io = function (e, t) {
            return Wn(e).filter((function (e) {
                return Zn(t, e)
            })).filter((function (e) {
                return function (e) {
                    return !(("INPUT" === e.tagName || "BUTTON" === e.tagName) && ("hidden" === e.type || e.disabled))
                }(e)
            }))
        },
        ao = function (e, t, r) {
            return to(io(oo(e, r), t), !0, r)
        },
        so = function (e, t) {
            return to(io(oo(e), t), !1)
        },
        uo = function (e, t) {
            return io((r = e.querySelectorAll("[data-autofocus-inside]"),
                Wn(r).map((function (e) {
                    return oo([e])
                })).reduce((function (e, t) {
                    return e.concat(t)
                }), [])), t);
        },
        lo = function (e, t) {
            return void 0 === t && (t = []),
                t.push(e),
                e.parentNode && lo(e.parentNode, t),
                t
        },
        co = function (e, t) {
            for (var r = lo(e), n = lo(t), o = 0; o < r.length; o += 1) {
                var i = r[o];
                if (n.indexOf(i) >= 0)
                    return i
            }
            return !1
        },
        fo = function (e, t, r) {
            var n = Gn(e),
                o = Gn(t),
                i = n[0],
                a = !1;
            return o.filter(Boolean).forEach((function (e) {
                    a = co(a || e, e) || a,
                        r.filter(Boolean).forEach((function (e) {
                            var t = co(i, e);
                            t && (a = !a || t.contains(a) ? t : co(t, a))
                        }))
                })),
                a
        },
        _o = function (e) {
            return Boolean(Wn(e.querySelectorAll("iframe")).some((function (e) {
                return e === document.activeElement
            })))
        },
        po = function (e) {
            var t = document && document.activeElement;
            return !(!t || t.dataset && t.dataset.focusGuard) && Yn(e).reduce((function (e, r) {
                return e || r.contains(t) || _o(r)
            }), !1)
        },
        mo = function (e) {
            return "INPUT" === e.tagName && "radio" === e.type
        },
        ho = function (e, t) {
            return mo(e) && e.name ? function (e, t) {
                return t.filter(mo).filter((function (t) {
                    return t.name === e.name
                })).filter((function (e) {
                    return e.checked
                }))[0] || e
            }(e, t) : e
        },
        vo = function (e) {
            return e[0] && e.length > 1 ? ho(e[0], e) : e[0]
        },
        yo = function (e, t) {
            return e.length > 1 ? e.indexOf(ho(e[t], e)) : t
        },
        go = "NEW_FOCUS",
        bo = function (e, t, r, n) {
            var o = e.length,
                i = e[0],
                a = e[o - 1],
                s = Jn(r);
            if (!(e.indexOf(r) >= 0)) {
                var u, l, c = t.indexOf(r),
                    d = n ? t.indexOf(n) : c,
                    f = n ? e.indexOf(n) : -1,
                    _ = c - d,
                    p = t.indexOf(i),
                    m = t.indexOf(a),
                    h = (u = t,
                        l = new Set,
                        u.forEach((function (e) {
                            return l.add(ho(e, u))
                        })),
                        u.filter((function (e) {
                            return l.has(e)
                        }))),
                    v = h.indexOf(r) - (n ? h.indexOf(n) : c),
                    y = yo(e, 0),
                    g = yo(e, o - 1);
                return -1 === c || -1 === f ? go : !_ && f >= 0 ? f : c <= p && s && Math.abs(_) > 1 ? g : c >= m && s && Math.abs(_) > 1 ? y : _ && Math.abs(v) > 1 ? f : c <= p ? g : c > m ? y : _ ? Math.abs(_) > 1 ? f : (o + f + _) % o : void 0
            }
        },
        wo = function (e, t) {
            var r = document && document.activeElement,
                n = Yn(e).filter(Kn),
                o = fo(r || e, e, n),
                i = new Map,
                a = so(n, i),
                s = ao(n, i).filter((function (e) {
                    var t = e.node;
                    return Kn(t)
                }));
            if (s[0] || (s = a)[0]) {
                var u, l, c, d, f = so([o], i).map((function (e) {
                        return e.node
                    })),
                    _ = (u = f,
                        l = s,
                        c = new Map,
                        l.forEach((function (e) {
                            return c.set(e.node, e)
                        })),
                        u.map((function (e) {
                            return c.get(e)
                        })).filter(Qn)),
                    p = _.map((function (e) {
                        return e.node
                    })),
                    m = bo(p, f, r, t);
                if (m === go) {
                    var h = a.map((function (e) {
                        return e.node
                    })).filter((d = function (e, t) {
                            return e.reduce((function (e, r) {
                                return e.concat(uo(r, t))
                            }), [])
                        }(n, i),
                        function (e) {
                            return e.autofocus || e.dataset && !!e.dataset.autofocus || d.indexOf(e) >= 0
                        }
                    ));
                    return {
                        node: h && h.length ? vo(h) : vo(p)
                    }
                }
                return void 0 === m ? m : _[m]
            }
        },
        So = 0,
        No = !1,
        xo = function (e, t) {
            var r, n = wo(e, t);
            if (!No && n) {
                if (So > 2)
                    return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),
                        No = !0,
                        void setTimeout((function () {
                            No = !1
                        }), 1);
                So++,
                (r = n.node).focus(),
                    "contentWindow" in r && r.contentWindow && r.contentWindow.focus(),
                    So--
            }
        };

    function ko(e) {
        var t = window.setImmediate;
        void 0 !== t ? t(e) : setTimeout(e, 1)
    }
    var Eo = function () {
            return document && document.activeElement === document.body || document && Wn(document.querySelectorAll("[data-no-focus-lock]")).some((function (e) {
                return e.contains(document.activeElement)
            }))
        },
        Co = null,
        Oo = null,
        Ao = null,
        Fo = !1,
        To = function () {
            return !0
        };

    function Do(e, t, r, n) {
        var o = null,
            i = e;
        do {
            var a = n[i];
            if (a.guard)
                a.node.dataset.focusAutoGuard && (o = a);
            else {
                if (!a.lockItem)
                    break;
                if (i !== e)
                    return;
                o = null
            }
        } while ((i += r) !== t);
        o && (o.node.tabIndex = 0)
    }
    var $o = function (e) {
            return e && "current" in e ? e.current : e
        },
        Po = function () {
            var e, t, r, n, o, i, a, s = !1;
            if (Co) {
                var u = Co,
                    l = u.observed,
                    c = u.persistentFocus,
                    d = u.autoFocus,
                    f = u.shards,
                    _ = u.crossFrame,
                    p = l || Ao && Ao.portaledElement,
                    m = document && document.activeElement;
                if (p) {
                    var h = [p].concat(f.map($o).filter(Boolean));
                    if (m && ! function (e) {
                            return (Co.whiteList || To)(e)
                        }(m) || (c || (_ ? Boolean(Fo) : "meanwhile" === Fo) || !Eo() || !Oo && d) && (!p || po(h) || (a = m,
                                Ao && Ao.portaledElement === a) || (document && !Oo && m && !d ? (m.blur && m.blur(),
                                document.body.focus()) : (s = xo(h, Oo),
                                Ao = {})),
                            Fo = !1,
                            Oo = document && document.activeElement),
                        document) {
                        var v = document && document.activeElement,
                            y = (t = Yn(e = h).filter(Kn),
                                r = fo(e, e, t),
                                o = ao([r], n = new Map, !0),
                                i = ao(t, n).filter((function (e) {
                                    var t = e.node;
                                    return Kn(t)
                                })).map((function (e) {
                                    return e.node
                                })),
                                o.map((function (e) {
                                    var t = e.node;
                                    return {
                                        node: t,
                                        index: e.index,
                                        lockItem: i.indexOf(t) >= 0,
                                        guard: Jn(t)
                                    }
                                }))),
                            g = y.map((function (e) {
                                return e.node
                            })).indexOf(v);
                        g > -1 && (y.filter((function (e) {
                                var t = e.guard,
                                    r = e.node;
                                return t && r.dataset.focusAutoGuard
                            })).forEach((function (e) {
                                return e.node.removeAttribute("tabIndex")
                            })),
                            Do(g, y.length, 1, y),
                            Do(g, -1, -1, y))
                    }
                }
            }
            return s
        },
        Vo = function (e) {
            Po() && e && (e.stopPropagation(),
                e.preventDefault())
        },
        Io = function () {
            return ko(Po)
        },
        Lo = function () {
            Fo = "just",
                setTimeout((function () {
                    Fo = "meanwhile"
                }), 0)
        };
    Vn.assignSyncMedium((function (e) {
            var t = e.target,
                r = e.currentTarget;
            r.contains(t) || (Ao = {
                observerNode: r,
                portaledElement: t
            })
        })),
        In.assignMedium(Io),
        Ln.assignMedium((function (e) {
            return e({
                moveFocusInside: xo,
                focusInside: po
            })
        }));
    const Mo = (Ro = function (e) {
            return e.filter((function (e) {
                return !e.disabled
            }))
        },
        jo = function (e) {
            var t = e.slice(-1)[0];
            t && !Co && (document.addEventListener("focusin", Vo, !0),
                document.addEventListener("focusout", Io),
                window.addEventListener("blur", Lo));
            var r = Co,
                n = r && t && t.id === r.id;
            Co = t,
                r && !n && (r.onDeactivation(),
                    e.filter((function (e) {
                        return e.id === r.id
                    })).length || r.returnFocus(!t)),
                t ? (Oo = null,
                    n && r.observed === t.observed || t.onActivation(),
                    Po(),
                    ko(Po)) : (document.removeEventListener("focusin", Vo, !0),
                    document.removeEventListener("focusout", Io),
                    window.removeEventListener("blur", Lo),
                    Oo = null)
        },
        function (e) {
            var t, r = [];

            function n() {
                t = Ro(r.map((function (e) {
                        return e.props
                    }))),
                    jo(t)
            }
            var o, i, a, s = function (o) {
                var i, a;

                function s() {
                    return o.apply(this, arguments) || this
                }
                a = o,
                    (i = s).prototype = Object.create(a.prototype),
                    i.prototype.constructor = i,
                    Bn(i, a),
                    s.peek = function () {
                        return t
                    };
                var u = s.prototype;
                return u.componentDidMount = function () {
                        r.push(this),
                            n()
                    },
                    u.componentDidUpdate = function () {
                        n()
                    },
                    u.componentWillUnmount = function () {
                        var e = r.indexOf(this);
                        r.splice(e, 1),
                            n()
                    },
                    u.render = function () {
                        return Je.createElement(e, this.props)
                    },
                    s
            }(me);
            return o = s,
                i = "displayName",
                a = "SideEffect(" + function (e) {
                    return e.displayName || e.name || "Component"
                }(e) + ")",
                (i = qn(i)) in o ? Object.defineProperty(o, i, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : o[i] = a,
                s
        }
    )((function () {
        return null
    }));
    var Ro, jo, Uo = ye((function (e, t) {
            return p(Un, Sn({
                sideCar: Mo,
                ref: t
            }, e))
        })),
        Bo = Un.propTypes || {};
    Bo.sideCar,
        function (e, t) {
            if (null == e)
                return {};
            var r, n, o = {},
                i = Object.keys(e);
            for (n = 0; n < i.length; n++)
                r = i[n],
                t.indexOf(r) >= 0 || (o[r] = e[r])
        }(Bo, ["sideCar"]),
        Uo.propTypes = {};
    const Ho = Uo;
    var qo = function () {
        return qo = Object.assign || function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            },
            qo.apply(this, arguments)
    };
    var Wo = "right-scroll-bar-position",
        Go = "width-before-scroll-bar",
        Xo = $n(),
        Yo = function () {},
        zo = ye((function (e, t) {
            var r = re(null),
                n = K({
                    onScrollCapture: Yo,
                    onWheelCapture: Yo,
                    onTouchMoveCapture: Yo
                }),
                o = n[0],
                i = n[1],
                a = e.forwardProps,
                s = e.children,
                u = e.className,
                l = e.removeScrollBar,
                c = e.enabled,
                d = e.shards,
                f = e.sideCar,
                _ = e.noIsolation,
                m = e.inert,
                v = e.allowPinchZoom,
                y = e.as,
                g = void 0 === y ? "div" : y,
                b = function (e, t) {
                    var r = {};
                    for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                            t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                    }
                    return r
                }(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                w = f,
                S = Cn([r, t]),
                N = qo({}, b, o);
            return p(h, null, c && p(w, {
                sideCar: Xo,
                removeScrollBar: l,
                shards: d,
                noIsolation: _,
                inert: m,
                setCallbacks: i,
                allowPinchZoom: !!v,
                lockRef: r
            }), a ? Ye(be.only(s), qo({}, N, {
                ref: S
            })) : p(g, qo({}, N, {
                className: u,
                ref: S
            }), s))
        }));
    zo.defaultProps = {
            enabled: !0,
            removeScrollBar: !0,
            inert: !1
        },
        zo.classNames = {
            fullWidth: Go,
            zeroRight: Wo
        };

    function Zo() {
        if (!document)
            return null;
        var e = document.createElement("style");
        e.type = "text/css";
        var t = function () {
            if ("undefined" != typeof __webpack_nonce__)
                return __webpack_nonce__
        }();
        return t && e.setAttribute("nonce", t),
            e
    }
    var Jo = function () {
            var e = 0,
                t = null;
            return {
                add: function (r) {
                    var n, o;
                    0 == e && (t = Zo()) && (o = r,
                            (n = t).styleSheet ? n.styleSheet.cssText = o : n.appendChild(document.createTextNode(o)),
                            function (e) {
                                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
                            }(t)),
                        e++
                },
                remove: function () {
                    !--e && t && (t.parentNode && t.parentNode.removeChild(t),
                        t = null)
                }
            }
        },
        Ko = function () {
            var e, t = (e = Jo(),
                function (t, r) {
                    ee((function () {
                        return e.add(t),
                            function () {
                                e.remove()
                            }
                    }), [t && r])
                }
            );
            return function (e) {
                var r = e.styles,
                    n = e.dynamic;
                return t(r, n),
                    null
            }
        },
        Qo = {
            left: 0,
            top: 0,
            right: 0,
            gap: 0
        },
        ei = function (e) {
            return parseInt(e || "", 10) || 0
        },
        ti = function (e) {
            if (void 0 === e && (e = "margin"),
                "undefined" == typeof window)
                return Qo;
            var t = function (e) {
                    var t = window.getComputedStyle(document.body),
                        r = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        n = t["padding" === e ? "paddingTop" : "marginTop"],
                        o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [ei(r), ei(n), ei(o)]
                }(e),
                r = document.documentElement.clientWidth,
                n = window.innerWidth;
            return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, n - r + t[2] - t[0])
            }
        },
        ri = Ko(),
        ni = function (e, t, r, n) {
            var o = e.left,
                i = e.top,
                a = e.right,
                s = e.gap;
            return void 0 === r && (r = "margin"),
                "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(n, ";\n   padding-right: ").concat(s, "px ").concat(n, ";\n  }\n  body {\n    overflow: hidden ").concat(n, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(n, ";"), "margin" === r && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s, "px ").concat(n, ";\n    "), "padding" === r && "padding-right: ".concat(s, "px ").concat(n, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(Wo, " {\n    right: ").concat(s, "px ").concat(n, ";\n  }\n  \n  .").concat(Go, " {\n    margin-right: ").concat(s, "px ").concat(n, ";\n  }\n  \n  .").concat(Wo, " .").concat(Wo, " {\n    right: 0 ").concat(n, ";\n  }\n  \n  .").concat(Go, " .").concat(Go, " {\n    margin-right: 0 ").concat(n, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(s, "px;\n  }\n")
        },
        oi = function (e) {
            var t = e.noRelative,
                r = e.noImportant,
                n = e.gapMode,
                o = void 0 === n ? "margin" : n,
                i = ne((function () {
                    return ti(o)
                }), [o]);
            return p(ri, {
                styles: ni(i, !t, o, r ? "" : "!important")
            })
        },
        ii = function (e, t) {
            var r = t;
            do {
                if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host),
                    ai(e, r)) {
                    var n = si(e, r);
                    if (n[1] > n[2])
                        return !0
                }
                r = r.parentNode
            } while (r && r !== document.body);
            return !1
        },
        ai = function (e, t) {
            return "v" === e ? function (e) {
                var t = window.getComputedStyle(e);
                return "hidden" !== t.overflowY && !(t.overflowY === t.overflowX && "visible" === t.overflowY)
            }(t) : function (e) {
                var t = window.getComputedStyle(e);
                return "range" === e.type || "hidden" !== t.overflowX && !(t.overflowY === t.overflowX && "visible" === t.overflowX)
            }(t)
        },
        si = function (e, t) {
            return "v" === e ? [(r = t).scrollTop, r.scrollHeight, r.clientHeight] : function (e) {
                return [e.scrollLeft, e.scrollWidth, e.clientWidth]
            }(t);
        },
        ui = !1;
    if ("undefined" != typeof window)
        try {
            var li = Object.defineProperty({}, "passive", {
                get: function () {
                    return ui = !0,
                        !0
                }
            });
            window.addEventListener("test", li, li),
                window.removeEventListener("test", li, li)
        } catch (Ii) {
            ui = !1
        }
    var ci = !!ui && {
            passive: !1
        },
        di = function (e) {
            return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        fi = function (e) {
            return [e.deltaX, e.deltaY]
        },
        _i = function (e) {
            return e && "current" in e ? e.current : e
        },
        pi = function (e) {
            return "\n  .block-interactivity-" + e + " {pointer-events: none;}\n  .allow-interactivity-" + e + " {pointer-events: all;}\n"
        },
        mi = 0,
        hi = [];
    const vi = (yi = function (e) {
            var t = re([]),
                r = re([0, 0]),
                n = re(),
                o = K(mi++)[0],
                i = K((function () {
                    return Ko()
                }))[0],
                a = re(e);
            ee((function () {
                    a.current = e
                }), [e]),
                ee((function () {
                    if (e.inert) {
                        document.body.classList.add("block-interactivity-" + o);
                        var t = [e.lockRef.current].concat((e.shards || []).map(_i)).filter(Boolean);
                        return t.forEach((function (e) {
                                return e.classList.add("allow-interactivity-" + o)
                            })),
                            function () {
                                document.body.classList.remove("block-interactivity-" + o),
                                    t.forEach((function (e) {
                                        return e.classList.remove("allow-interactivity-" + o)
                                    }))
                            }
                    }
                }), [e.inert, e.lockRef.current, e.shards]);
            var s = oe((function (e, t) {
                    if ("touches" in e && 2 === e.touches.length)
                        return !a.current.allowPinchZoom;
                    var o, i = di(e),
                        s = r.current,
                        u = "deltaX" in e ? e.deltaX : s[0] - i[0],
                        l = "deltaY" in e ? e.deltaY : s[1] - i[1],
                        c = e.target,
                        d = Math.abs(u) > Math.abs(l) ? "h" : "v",
                        f = ii(d, c);
                    if (!f)
                        return !0;
                    if (f ? o = d : (o = "v" === d ? "h" : "v",
                            f = ii(d, c)),
                        !f)
                        return !1;
                    if (!n.current && "changedTouches" in e && (u || l) && (n.current = o),
                        !o)
                        return !0;
                    var _ = n.current || o;
                    return function (e, t, r, n, o) {
                        var i = n,
                            a = r.target,
                            s = t.contains(a),
                            u = !1,
                            l = i > 0,
                            c = 0,
                            d = 0;
                        do {
                            var f = si(e, a),
                                _ = f[0],
                                p = f[1] - f[2] - _;
                            (_ || p) && ai(e, a) && (c += p,
                                    d += _),
                                a = a.parentNode
                        } while (!s && a !== document.body || s && (t.contains(a) || t === a));
                        return (l && (o && 0 === c || !o && i > c) || !l && (o && 0 === d || !o && -i > d)) && (u = !0),
                            u
                    }(_, t, e, "h" === _ ? u : l, !0)
                }), []),
                u = oe((function (e) {
                    var r = e;
                    if (hi.length && hi[hi.length - 1] === i) {
                        var n = "deltaY" in r ? fi(r) : di(r),
                            o = t.current.filter((function (e) {
                                return e.name === r.type && e.target === r.target && (t = e.delta,
                                    o = n,
                                    t[0] === o[0] && t[1] === o[1]);
                            }))[0];
                        if (o && o.should)
                            r.preventDefault();
                        else if (!o) {
                            var u = (a.current.shards || []).map(_i).filter(Boolean).filter((function (e) {
                                return e.contains(r.target)
                            }));
                            (u.length > 0 ? s(r, u[0]) : !a.current.noIsolation) && r.preventDefault()
                        }
                    }
                }), []),
                l = oe((function (e, r, n, o) {
                    var i = {
                        name: e,
                        delta: r,
                        target: n,
                        should: o
                    };
                    t.current.push(i),
                        setTimeout((function () {
                            t.current = t.current.filter((function (e) {
                                return e !== i
                            }))
                        }), 1)
                }), []),
                c = oe((function (e) {
                    r.current = di(e),
                        n.current = void 0
                }), []),
                d = oe((function (t) {
                    l(t.type, fi(t), t.target, s(t, e.lockRef.current))
                }), []),
                f = oe((function (t) {
                    l(t.type, di(t), t.target, s(t, e.lockRef.current))
                }), []);
            ee((function () {
                return hi.push(i),
                    e.setCallbacks({
                        onScrollCapture: d,
                        onWheelCapture: d,
                        onTouchMoveCapture: f
                    }),
                    document.addEventListener("wheel", u, ci),
                    document.addEventListener("touchmove", u, ci),
                    document.addEventListener("touchstart", c, ci),
                    function () {
                        hi = hi.filter((function (e) {
                                return e !== i
                            })),
                            document.removeEventListener("wheel", u, ci),
                            document.removeEventListener("touchmove", u, ci),
                            document.removeEventListener("touchstart", c, ci)
                    }
            }), []);
            var _ = e.removeScrollBar;
            return p(h, null, e.inert ? p(i, {
                styles: pi(o)
            }) : null, _ ? p(oi, {
                gapMode: "margin"
            }) : null)
        },
        Xo.useMedium(yi),
        Pn);
    var yi, gi = ye((function (e, t) {
        return p(zo, qo({}, e, {
            ref: t,
            sideCar: vi
        }))
    }));
    gi.classNames = zo.classNames;
    const bi = gi;
    var [wi, Si] = function (e, t) {
        let r = M(t);

        function n(e) {
            let {
                children: t,
                ...n
            } = e, o = ne((() => n), Object.values(n));
            return p(r.Provider, {
                value: o
            }, t)
        }
        return r.displayName = `${e}Context`,
            n.displayName = `${e}Provider`,
            [n, function (n) {
                let o = ie(r);
                if (o)
                    return o;
                if (t)
                    return t;
                throw Error(`${n} must be rendered inside of a ${e} component.`)
            }]
    }("DialogContext", {
        isOpen: !1
    });

    function Ni({
        isOpen: e = !0,
        children: t,
        ...r
    }) {
        return ee((() => {
                e ? window.__REACH_DISABLE_TOOLTIPS = !0 : window.requestAnimationFrame((() => {
                    window.__REACH_DISABLE_TOOLTIPS = !1
                }))
            }), [e]),
            p(wn, {
                "data-reach-dialog-wrapper": "",
                "data-state": e ? "open" : "closed",
                ...r
            }, p(wi, {
                isOpen: e
            }, t))
    }
    Ni.displayName = "unstable_DialogWrapper";
    var xi = ye((function ({
        allowPinchZoom: e,
        as: t = "div",
        dangerouslyBypassFocusLock: r,
        dangerouslyBypassScrollLock: n,
        initialFocusRef: o,
        onClick: i,
        onDismiss: a = yn,
        onKeyDown: s,
        onMouseDown: u,
        unstable_lockFocusAcrossFrames: l,
        ...c
    }, d) {
        let {
            isOpen: f
        } = Si("DialogInner"), _ = void 0 !== l;
        ee((() => {
            _ && console.warn("The unstable_lockFocusAcrossFrames in @reach/dialog is deprecated. It will be removed in the next minor release.")
        }), [_]);
        const m = re(null),
            h = re(null),
            v = function (...e) {
                return oe((t => {
                    for (let r of e)
                        vn(r, t)
                }), e)
            }(h, d),
            y = oe((() => {
                o && o.current && o.current.focus()
            }), [o]);
        return ee((() => h.current ? function (e) {
                let t = [],
                    r = [],
                    n = (o = e,
                        mn() ? o ? o.ownerDocument : document : null);
                var o;
                if (!e)
                    return console.warn("A ref has not yet been attached to a dialog node when attempting to call `createAriaHider`."),
                        yn;
                return Array.prototype.forEach.call(n.querySelectorAll("body > *"), (n => {
                        var o, i;
                        if (n === (null == (i = null == (o = e.parentNode) ? void 0 : o.parentNode) ? void 0 : i.parentNode))
                            return;
                        let a = n.getAttribute("aria-hidden");
                        null !== a && "false" !== a || (t.push(a),
                            r.push(n),
                            n.setAttribute("aria-hidden", "true"))
                    })),
                    () => {
                        r.forEach(((e, r) => {
                            let n = t[r];
                            null === n ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", n)
                        }))
                    }
            }(h.current) : void 0), []),
            p(Ho, {
                autoFocus: !0,
                returnFocus: !0,
                onActivation: y,
                disabled: null != r ? r : !f,
                crossFrame: !l ? !0 : l
            }, p(bi, {
                allowPinchZoom: e,
                enabled: null != n ? !n : f
            }, p(t, {
                ...c,
                ref: v,
                "data-reach-dialog-inner": "",
                "data-state": f ? "open" : "closed",
                onClick: hn(i, (function (e) {
                    m.current === e.target && (e.stopPropagation(),
                        a(e))
                })),
                onKeyDown: hn(s, (function (e) {
                    "Escape" === e.key && (e.stopPropagation(),
                        a(e))
                })),
                onMouseDown: hn(u, (function (e) {
                    m.current = e.target
                }))
            })))
    }));
    xi.displayName = "DialogInner";
    var ki = ye((function ({
        as: e = "div",
        isOpen: t = !0,
        ...r
    }, n) {
        return t ? p(Ni, {
            isOpen: t
        }, p(xi, {
            "data-reach-dialog-overlay": "",
            ref: n,
            as: e,
            ...r
        })) : null
    }));
    ki.displayName = "DialogOverlay";
    var Ei = ye((function ({
        as: e = "div",
        onClick: t,
        onKeyDown: r,
        ...n
    }, o) {
        let {
            isOpen: i
        } = Si("DialogContent");
        return p(e, {
            "aria-modal": "true",
            role: "dialog",
            tabIndex: -1,
            ...n,
            ref: o,
            "data-reach-dialog-content": "",
            "data-state": i ? "open" : "closed",
            onClick: hn(t, (e => {
                e.stopPropagation()
            }))
        })
    }));
    Ei.displayName = "DialogContent",
        ye((function ({
            allowPinchZoom: e = !1,
            initialFocusRef: t,
            isOpen: r,
            onDismiss: n = yn,
            ...o
        }, i) {
            return p(ki, {
                allowPinchZoom: e,
                initialFocusRef: t,
                isOpen: r,
                onDismiss: n
            }, p(Ei, {
                ref: i,
                ...o
            }))
        })).displayName = "Dialog";
    const Ci = e => {
            const {
                formData: t,
                dataProps: r
            } = e, {
                label: n = "Show form",
                style: o
            } = r, {
                id: i,
                userId: a = "",
                preview: s = "form",
                googleFormId: u = "",
                title: l = "",
                theme: c = "minimal",
                customTheme: d = {},
                settings: f = {}
            } = t, [_, p] = K(!1), m = () => {
                dn({
                        action: "form_modal_close",
                        label: {
                            id: i
                        }
                    }),
                    p(!1)
            };
            return lt(h, {
                children: [lt("button", {
                    className: ht(Mr.modalToggle),
                    style: o,
                    onClick: () => {
                        dn({
                                action: "form_modal_show",
                                label: {
                                    id: i
                                }
                            }),
                            p(!0)
                    },
                    children: n
                }), lt(ki, {
                    className: ht(Mr.modalOverlay, Mr.themeBase, `${Mr.theme}-${c}`),
                    isOpen: _,
                    onDismiss: m,
                    children: lt(Ei, {
                        className: ht(Mr.modalContent),
                        children: [lt(pn, {
                            ...e
                        }), lt("button", {
                            className: ht(Mr.modalClose),
                            onClick: m,
                            children: "×"
                        })]
                    })
                })]
            })
        },
        Oi = "ui-sans-serif",
        Ai = "ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji";

    function Fi(e) {
        var t;
        let r = "";
        for (const o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
                let i = e[o];
                if (o.includes("font-family") && i) {
                    let e = i === Oi ? Ai : i;
                    try {
                        e = null == (t = JSON.parse(i)) ? void 0 : t.family
                    } catch (n) {}
                    i = e
                }
                r += `--cgf-${o}: ${i};\n`
            }
        return e["font-family"] || (r += `--cgf-font-family: ${Ai};\n`),
            r
    }
    const Di = e => {
            const {
                formData: t,
                dataProps: r
            } = e, {
                mode: n = "standard"
            } = r, o = (null == t ? void 0 : t.theme) || "minimal", i = (null == t ? void 0 : t.customTheme) || {};
            null == t || t.settings;
            return lt("div", {
                className: ht(Mr.themeBase, `${Mr.theme}-${o}`),
                children: [lt("link", {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com"
                }), lt("link", {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossOrigin: !0
                }), lt("style", {
                    children: `\n          .${Mr.theme}-${o} {\n            ${Fi(i)}\n          }\n        `
                }), {
                    popup: lt(Ci, {
                        ...e
                    }),
                    standard: lt(pn, {
                        ...e
                    })
                } [n]]
            })
        },
        $i = e => {
            const {
                formId: t,
                dataProps: r
            } = e, n = `${dt}/config/${t}.json`, {
                data: o,
                error: i
            } = function (e, t) {
                console.log(n);
                const r = re({}),
                    n = re(!1),
                    o = {
                        error: void 0,
                        data: void 0
                    },
                    [a, s] = Q(((e, t) => {
                        switch (t.type) {
                            case "loading":
                                return {
                                    ...o
                                };
                            case "fetched":
                                return {
                                    ...o,
                                    data: t.payload
                                };
                            case "error":
                                return {
                                    ...o,
                                    error: t.payload
                                };
                            default:
                                return e
                        }
                    }), o);
                return ee((() => {
                        if (e)
                            return n.current = !1,
                                (async () => {
                                    if (s({
                                            type: "loading"
                                        }),
                                        r.current[e])
                                        s({
                                            type: "fetched",
                                            payload: r.current[e]
                                        });
                                    else
                                        try {
                                            const o = await fetch(e, t);
                                            if (!o.ok)
                                                throw new Error(o.statusText);
                                            const i = await o.json();
                                            if (r.current[e] = i,
                                                n.current)
                                                return;
                                            s({
                                                type: "fetched",
                                                payload: i
                                            })
                                        } catch (i) {
                                            if (n.current)
                                                return;
                                            s({
                                                type: "error",
                                                payload: i
                                            })
                                        }
                                })(),
                                () => {
                                    n.current = !0
                                }
                    }), [e]),
                    a
            }(n);
            return o ? i ? lt("span", {
                children: "Unable to load form"
            }) : lt(Di, {
                formData: o,
                dataProps: r
            }) : lt(ct, {})
        },
        Pi = ({
            formData: e,
            dataProps: t
        }) => lt(Di, {
            formData: e,
            dataProps: t
        }),
        Vi = e => {
            const t = e.myform,
                r = data;
            return "string" == typeof t && t.length ? lt($i, {
                formId: t,
                dataProps: e
            }) : "object" == typeof r && Object.keys(r).length ? lt(Pi, {
                dataProps: e,
                formData: r
            }) : void 0
        };
    (() => {
        if ("undefined" != typeof window && window.MyForm && window.MyForm.destroy)
            return window.MyForm.destroy(),
                void window.MyForm.render();
        const e = (e => {
            const t = {
                _rootsToObservers: new WeakMap,
                _roots: [],
                _executedScript: document.currentScript,
                props: {},
                render: ({
                    selector: r,
                    clean: n = !1,
                    replace: o = !1,
                    inline: i = !1,
                    initialProps: a = {},
                    propsSelector: s,
                    elementName: u
                }) => {
                    let l = !1;
                    const c = () => {
                        if (!0 === l)
                            return;
                        const c = (({
                            selector: e,
                            inline: t,
                            elementName: r
                        }) => {
                            const n = document.currentScript;
                            if (t && null != n && n.parentNode)
                                return [n.parentNode];
                            const o = null == n ? void 0 : n.dataset.mountIn;
                            return o ? Array.from(document.querySelectorAll(o)).map((e => {
                                if (null != r) {
                                    const t = document.createElement(r),
                                        n = e.appendChild(t);
                                    return null != n.shadowRoot ? n.shadowRoot : n
                                }
                                return e
                            })) : e ? Array.from(document.querySelectorAll(e)).map((e => null != e.shadowRoot ? e.shadowRoot : e)) : []
                        })({
                            selector: r,
                            inline: i,
                            elementName: u
                        });
                        if (0 === c.length)
                            return;
                        const {
                            rootFragments: d
                        } = (({
                            island: e,
                            widget: t,
                            hostElements: r,
                            clean: n,
                            replace: o,
                            initialProps: i,
                            propsSelector: a
                        }) => {
                            const s = [];
                            return r.forEach((r => {
                                const u = it(e, r, i, a);
                                let l;
                                if (n && r.replaceChildren(),
                                    o)
                                    l = at(r.parentElement || document.body, r);
                                else {
                                    const e = document.createElement("div");
                                    r.appendChild(e),
                                        l = at(r, e)
                                }
                                s.push(l),
                                    st({
                                        island: e,
                                        widget: t,
                                        rootFragment: l,
                                        props: u
                                    });
                                const c = (({
                                    island: e,
                                    hostElement: t,
                                    initialProps: r,
                                    onNewProps: n,
                                    propsSelector: o
                                }) => {
                                    const i = new MutationObserver((function (i) {
                                            i.forEach((function () {
                                                n(it(e, t, r, o))
                                            }))
                                        })),
                                        a = {
                                            attributes: !0,
                                            childList: !0,
                                            characterData: !0
                                        };
                                    return e._executedScript && i.observe(e._executedScript, a),
                                        rt(t).forEach((e => {
                                            i.observe(e, Ke({}, a, {
                                                subtree: !0
                                            }))
                                        })),
                                        o && nt(o).forEach((e => {
                                            i.observe(e, Ke({}, a, {
                                                subtree: !0
                                            }))
                                        })),
                                        i.observe(Qe(t) ? t.host : t, a),
                                        i
                                })({
                                    island: e,
                                    hostElement: r,
                                    initialProps: i,
                                    onNewProps: r => {
                                        st({
                                            island: e,
                                            widget: t,
                                            rootFragment: l,
                                            props: r
                                        })
                                    },
                                    propsSelector: a
                                });
                                e._rootsToObservers.set(l, c)
                            })), {
                                rootFragments: s
                            }
                        })({
                            island: t,
                            widget: e,
                            clean: n,
                            hostElements: c,
                            replace: o,
                            initialProps: a,
                            propsSelector: s
                        });
                        t._roots = t._roots.concat(d),
                            l = !0
                    };
                    c(),
                        document.addEventListener("DOMContentLoaded", c),
                        document.addEventListener("load", c)
                },
                rerender: r => {
                    t._roots.forEach((n => {
                        console.log(n, r, t);
                        st({
                            island: t,
                            widget: e,
                            rootFragment: n,
                            props: Ke({}, t.props, r)
                        })
                    }))
                },
                destroy: () => {
                    t._roots.forEach((e => {
                        var r;
                        null == (r = t._rootsToObservers.get(e)) || r.disconnect(),
                            V(null, e)
                    }))
                }
            };
            return t
        })(Vi);
        e.render({
                selector: "[data-myform]"
            }),
            "undefined" != typeof window && (window.MyForm = Object.assign({
                ids: [],
                hooks: {},
                rerender: e.rerender,
                render: (t = {}) => {
                    e.render({
                        selector: "[data-myform]",
                        ...t
                    })
                },
                destroy: e.destroy
            }, window.MyForm || {}))
    })()

}