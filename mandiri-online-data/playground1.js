/* jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ! function(d, c) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = d.document ? c(d, !0) : function(b) {
        if (!b.document) {
            throw new Error("jQuery requires a window with a document")
        }
        return c(b)
    } : c(d)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.1",
        m = function(a, b) {
            return new m.fn.init(a, b)
        },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function(a, b) {
            return b.toUpperCase()
        };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return m.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
            if (null != (e = arguments[h])) {
                for (d in e) {
                    a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c))
                }
            }
        }
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) {
                return !1
            }
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) {
                return !1
            }
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) {
                    return !1
                }
            } catch (c) {
                return !1
            }
            if (k.ownLast) {
                for (b in a) {
                    return j.call(a, b)
                }
            }
            for (b in a) {}
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++) {
                        if (d = b.apply(a[e], c), d === !1) {
                            break
                        }
                    }
                } else {
                    for (e in a) {
                        if (d = b.apply(a[e], c), d === !1) {
                            break
                        }
                    }
                }
            } else {
                if (g) {
                    for (; f > e; e++) {
                        if (d = b.call(a[e], e, a[e]), d === !1) {
                            break
                        }
                    }
                } else {
                    for (e in a) {
                        if (d = b.call(a[e], e, a[e]), d === !1) {
                            break
                        }
                    }
                }
            }
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) {
                    return g.call(b, a, c)
                }
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
                    if (c in b && b[c] === a) {
                        return c
                    }
                }
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) {
                a[e++] = b[d++]
            }
            if (c !== c) {
                while (void 0 !== b[d]) {
                    a[e++] = b[d++]
                }
            }
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                d = !b(a[f], f), d !== h && e.push(a[f])
            }
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = r(a),
                i = [];
            if (h) {
                for (; g > f; f++) {
                    d = b(a[f], f, c), null != d && i.push(d)
                }
            } else {
                for (f in a) {
                    d = b(a[f], f, c), null != d && i.push(d)
                }
            }
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function r(a) {
        var b = a.length,
            c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = gb(),
            z = gb(),
            A = gb(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = "undefined",
            D = 1 << 31,
            E = {}.hasOwnProperty,
            F = [],
            G = F.pop,
            H = F.push,
            I = F.push,
            J = F.slice,
            K = F.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++) {
                    if (this[b] === a) {
                        return b
                    }
                }
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            O = N.replace("w", "w#"),
            P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
            Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
            R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            S = new RegExp("^" + M + "*," + M + "*"),
            T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            V = new RegExp(Q),
            W = new RegExp("^" + O + "$"),
            X = {
                ID: new RegExp("^#(" + N + ")"),
                CLASS: new RegExp("^\\.(" + N + ")"),
                TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + Q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            db = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function(a, b) {
                    H.apply(a, J.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]) {}
                    a.length = c - 1
                }
            }
        }

        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) {
                return d
            }
            if (1 !== (k = b.nodeType) && 9 !== k) {
                return []
            }
            if (p && !e) {
                if (f = _.exec(a)) {
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) {
                                return d
                            }
                            if (h.id === j) {
                                return d.push(h), d
                            }
                        } else {
                            if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) {
                                return d.push(h), d
                            }
                        }
                    } else {
                        if (f[2]) {
                            return I.apply(d, b.getElementsByTagName(a)), d
                        }
                        if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) {
                            return I.apply(d, b.getElementsByClassName(j)), d
                        }
                    }
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) {
                            o[l] = s + qb(o[l])
                        }
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) {
                        try {
                            return I.apply(d, w.querySelectorAll(x)), d
                        } catch (y) {} finally {
                            r || b.removeAttribute("id")
                        }
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function gb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function hb(a) {
            return a[u] = !0, a
        }

        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function jb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) {
                d.attrHandle[c[e]] = b
            }
        }

        function kb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d) {
                return d
            }
            if (c) {
                while (c = c.nextSibling) {
                    if (c === b) {
                        return -1
                    }
                }
            }
            return a ? 1 : -1
        }

        function lb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function nb(a) {
            return hb(function(b) {
                return b = +b, hb(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) {
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    }
                })
            })
        }

        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }
        c = fb.support = {}, f = fb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fb.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : v,
                g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                m()
            })), c.attributes = ib(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ib(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = ib(function(a) {
                return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) {
                        1 === c.nodeType && d.push(c)
                    }
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
            }), ib(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return !0
                        }
                    }
                }
                return !1
            }, B = b ? function(a, b) {
                if (a === b) {
                    return l = !0, 0
                }
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) {
                    return l = !0, 0
                }
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    i = [b];
                if (!f || !g) {
                    return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0
                }
                if (f === g) {
                    return kb(a, b)
                }
                c = a;
                while (c = c.parentNode) {
                    h.unshift(c)
                }
                c = b;
                while (c = c.parentNode) {
                    i.unshift(c)
                }
                while (h[d] === i[d]) {
                    d++
                }
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, e) : n
        }, fb.matches = function(a, b) {
            return fb(a, null, null, b)
        }, fb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) {
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
                        return d
                    }
                } catch (e) {}
            }
            return fb(b, n, null, [a]).length > 0
        }, fb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fb.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) {
                    b === a[f] && (e = d.push(f))
                }
                while (e--) {
                    a.splice(d[e], 1)
                }
            }
            return k = null, a
        }, e = fb.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) {
                        return a.textContent
                    }
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a)
                    }
                } else {
                    if (3 === f || 4 === f) {
                        return a.nodeValue
                    }
                }
            } else {
                while (b = a[d++]) {
                    c += e(b)
                }
            }
            return c
        }, d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) {
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) {
                                            return !1
                                        }
                                    }
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                                }
                            } else {
                                if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) {
                                    m = j[1]
                                } else {
                                    while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                        if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) {
                                            break
                                        }
                                    }
                                }
                            }
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) {
                            d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
                        }
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: hb(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--) {
                            (f = g[h]) && (a[h] = !(b[h] = f))
                        }
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: hb(function(a) {
                    return function(b) {
                        return fb(a, b).length > 0
                    }
                }),
                contains: hb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: hb(function(a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                        function(b) {
                            var c;
                            do {
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
                                    return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-")
                                }
                            } while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) {
                            return !1
                        }
                    }
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: nb(function() {
                    return [0]
                }),
                last: nb(function(a, b) {
                    return [b - 1]
                }),
                eq: nb(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: nb(function(a, b) {
                    for (var c = 0; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }),
                odd: nb(function(a, b) {
                    for (var c = 1; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }),
                lt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) {
                        a.push(d)
                    }
                    return a
                }),
                gt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) {
                        a.push(d)
                    }
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) {
            d.pseudos[b] = lb(b)
        }
        for (b in {
                submit: !0,
                reset: !0
            }) {
            d.pseudos[b] = mb(b)
        }

        function pb() {}
        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) {
                return b ? 0 : k.slice(0)
            }
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) {
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length))
                }
                if (!c) {
                    break
                }
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        };

        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) {
                d += a[b].value
            }
            return d
        }

        function rb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d]) {
                    if (1 === b.nodeType || e) {
                        return a(b, c, f)
                    }
                }
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d]) {
                        if ((1 === b.nodeType || e) && a(b, c, g)) {
                            return !0
                        }
                    }
                } else {
                    while (b = b[d]) {
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) {
                                return j[2] = h[2]
                            }
                            if (i[d] = j, j[2] = a(b, c, g)) {
                                return !0
                            }
                        }
                    }
                }
            }
        }

        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) {
                    if (!a[e](b, c, d)) {
                        return !1
                    }
                }
                return !0
            } : a[0]
        }

        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) {
                fb(a, b[d], c)
            }
            return c
        }

        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h))
            }
            return g
        }

        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || tb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ub(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;
                    while (k--) {
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) {
                                (l = r[k]) && j.push(q[k] = l)
                            }
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) {
                            (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    }
                } else {
                    r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
                }
            })
        }

        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
                    return a === b
                }, h, !0), l = rb(function(a) {
                    return K.call(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                }]; f > i; i++) {
                if (c = d.relative[a[i].type]) {
                    m = [rb(sb(m), c)]
                } else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++) {
                            if (d.relative[a[e].type]) {
                                break
                            }
                        }
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                    }
                    m.push(c)
                }
            }
            return sb(m)
        }

        function xb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || 0.1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++]) {
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) {
                            o(r, s, g, h)
                        }
                        if (f) {
                            if (p > 0) {
                                while (q--) {
                                    r[q] || s[q] || (s[q] = G.call(i))
                                }
                            }
                            s = ub(s)
                        }
                        I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? hb(f) : f
        }
        return h = fb.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) {
                    f = wb(b[c]), f[u] ? d.push(f) : e.push(f)
                }
                f = A(a, xb(e, d)), f.selector = a
            }
            return f
        }, i = fb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) {
                        return e
                    }
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) {
                        break
                    }
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a) {
                            return I.apply(e, f), e
                        }
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ib(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ib(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || jb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ib(function(a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fb
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b)) {
            return m.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            })
        }
        if (b.nodeType) {
            return m.grep(a, function(a) {
                return a === b !== c
            })
        }
        if ("string" == typeof b) {
            if (v.test(b)) {
                return m.filter(b, a, c)
            }
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) {
                return this.pushStack(m(a).filter(function() {
                    for (b = 0; e > b; b++) {
                        if (m.contains(d[b], this)) {
                            return !0
                        }
                    }
                }))
            }
            for (b = 0; e > b; b++) {
                m.find(a, d[b], c)
            }
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function(a, b) {
            var c, d;
            if (!a) {
                return this
            }
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) {
                    return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a)
                }
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b)) {
                        for (c in b) {
                            m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c])
                        }
                    }
                    return this
                }
                if (d = y.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) {
                        return x.find(a)
                    }
                    this.length = 1, this[0] = d
                }
                return this.context = y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
        };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    m.extend({
        dir: function(a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) {
                1 === e.nodeType && d.push(e), e = e[b]
            }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) {
                1 === a.nodeType && a !== b && c.push(a)
            }
            return c
        }
    }), m.fn.extend({
        has: function(a) {
            var b, c = m(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++) {
                    if (m.contains(this, c[b])) {
                        return !0
                    }
                }
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
                }
            }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        do {
            a = a[b]
        } while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return m.sibling(a.firstChild)
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) {
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            m.each(b, function(b, c) {
                                var d = m.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function() {
                    return h && m.each(arguments, function(a, c) {
                        var d;
                        while ((d = m.inArray(c, h, d)) > -1) {
                            h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                        }
                    }), this
                },
                has: function(a) {
                    return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], e = 0, this
                },
                disable: function() {
                    return h = i = c = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, c || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, m.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", m.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return m.Deferred(function(c) {
                            m.each(b, function(b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? m.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, m.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1) {
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
                    c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f
                }
            }
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) {
                    return setTimeout(m.ready)
                }
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });

    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function(b) {
        if (!H) {
            if (H = m.Deferred(), "complete" === y.readyState) {
                setTimeout(m.ready)
            } else {
                if (y.addEventListener) {
                    y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1)
                } else {
                    y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
                    var c = !1;
                    try {
                        c = null == a.frameElement && y.documentElement
                    } catch (d) {}
                    c && c.doScroll && ! function e() {
                        if (!m.isReady) {
                            try {
                                c.doScroll("left")
                            } catch (a) {
                                return setTimeout(e, 50)
                            }
                            I(), m.ready()
                        }
                    }()
                }
            }
        }
        return H.promise(b)
    };
    var K = "undefined",
        L;
    for (L in m(k)) {
        break
    }
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
            var a, b, c, d;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function() {
            var a = y.createElement("div");
            if (null == k.deleteExpando) {
                k.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    k.deleteExpando = !1
                }
            }
            a = null
        }(), m.acceptData = function(a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else {
                c = void 0
            }
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a) {
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) {
                return !1
            }
        }
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) {
                return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
                    toJSON: m.noop
                }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
            }
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) {
                        delete d[b[e]]
                    }
                    if (c ? !P(d) : !m.isEmptyObject(d)) {
                        return
                    }
                }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function(a, b, c) {
            return Q(a, b, c)
        },
        removeData: function(a, b) {
            return R(a, b)
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) {
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])))
                    }
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function() {
                    m.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"), m._removeData(a, c)
                })
            })
        }
    }), m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) {
                c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h))
            }
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function(a, b) {
            return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
        },
        V = m.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === m.type(c)) {
                e = !0;
                for (h in c) {
                    m.access(a, b, h, c[h], !0, f, g)
                }
            } else {
                if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                        return j.call(m(a), c)
                    })), b)) {
                    for (; i > h; h++) {
                        b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)))
                    }
                }
            }
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        W = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                k.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
    function() {
        var b, c, d = y.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) {
            c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1)
        }
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;

    function ab() {
        return !0
    }

    function bb() {
        return !1
    }

    function cb() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) {
                    f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && m.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0)
                }
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--) {
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) {
                            g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g))
                        }
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else {
                        for (o in k) {
                            m.event.remove(a, o + b[j], c, d, !0)
                        }
                    }
                }
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) {
                        o.push(h), l = h
                    }
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) {
                    b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault())
                }
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) {
                        (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                    }
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) {
                for (; i != this; i = i.parentNode || this) {
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) {
                            d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d)
                        }
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
                }
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[m.expando]) {
                return a
            }
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) {
                c = d[b], a[c] = f[c]
            }
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== cb() && this.focus) {
                        try {
                            return this.focus(), !1
                        } catch (a) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === cb() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) {
                    this.on(f, b, c, a[f], e)
                }
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) {
                d = bb
            } else {
                if (!d) {
                    return this
                }
            }
            return 1 === e && (g = d, d = function(a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) {
                return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this
            }
            if ("object" == typeof a) {
                for (e in a) {
                    this.off(e, b, a[e])
                }
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function() {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });

    function db(a) {
        var b = eb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop())
            }
        }
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fb = / jQuery\d+="(?:null|\d+)"/g,
        gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
        hb = /^\s+/,
        ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        jb = /<([\w:]+)/,
        kb = /<tbody/i,
        lb = /<|&#?\w+;/,
        mb = /<(?:script|style|link)/i,
        nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ob = /^$|\/(?:java|ecma)script/i,
        pb = /^true\/(.*)/,
        qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        rb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        sb = db(y),
        tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;

    function ub(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f) {
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
                !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b))
            }
        }
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) {
            m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
        }
    }

    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a),
                g = m._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) {
                    for (d = 0, e = h[c].length; e > d; d++) {
                        m.event.add(b, c, h[c][d])
                    }
                }
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) {
                    m.removeEvent(b, d, e.handle)
                }
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) {
                for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) {
                    d[g] && Bb(e, d[g])
                }
            }
            if (b) {
                if (c) {
                    for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) {
                        Ab(e, d[g])
                    }
                } else {
                    Ab(a, f)
                }
            }
            return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++) {
                if (f = a[q], f || 0 === f) {
                    if ("object" === m.type(f)) {
                        m.merge(p, f.nodeType ? [f] : f)
                    } else {
                        if (lb.test(f)) {
                            h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
                            while (e--) {
                                h = h.lastChild
                            }
                            if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                                f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                                while (e--) {
                                    m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                                }
                            }
                            m.merge(p, h.childNodes), h.textContent = "";
                            while (h.firstChild) {
                                h.removeChild(h.firstChild)
                            }
                            h = o.lastChild
                        } else {
                            p.push(b.createTextNode(f))
                        }
                    }
                }
            }
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
            while (f = p[q++]) {
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
                    e = 0;
                    while (f = h[e++]) {
                        ob.test(f.type || "") && c.push(f)
                    }
                }
            }
            return h = null, o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++) {
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events) {
                        for (e in g.events) {
                            n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle)
                        }
                    }
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
            }
        }
    }), m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
                b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c))
            }
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild) {
                    a.removeChild(a.firstChild)
                }
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return m.clone(this, a, b)
            })
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) {
                    return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0
                }
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++) {
                            b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a)
                        }
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) {
                return this.each(function(c) {
                    var d = n.eq(c);
                    q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
                })
            }
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) {
                    d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j)
                }
                if (f) {
                    for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) {
                        d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")))
                    }
                }
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) {
                c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get())
            }
            return this.pushStack(e)
        }
    });
    var Cb, Db = {};

    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fb(a) {
        var b = y,
            c = Db[a];
        return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
    }! function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a) {
                return a
            }
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Gb = /^margin/,
        Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ib = function(a) {
        return a.currentStyle
    }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Lb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) {
                    return c ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }
    }! function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null == g && i(), g
                },
                boxSizingReliable: function() {
                    return null == f && i(), f
                },
                pixelPosition: function() {
                    return null == e && i(), e
                },
                reliableMarginRight: function() {
                    return null == h && i(), h
                }
            });

            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) {
            g[f] = a.style[f], a.style[f] = b[f]
        }
        e = c.apply(a, d || []);
        for (f in b) {
            a.style[f] = g[f]
        }
        return e
    };
    var Mb = /alpha\([^)]*\)/i,
        Nb = /opacity\s*=\s*([^)]*)/,
        Ob = /^(none|table(?!-c[ea]).+)/,
        Pb = new RegExp("^(" + S + ")(.*)$", "i"),
        Qb = new RegExp("^([+-])=(" + S + ")", "i"),
        Rb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Sb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Tb = ["Webkit", "O", "Moz", "ms"];

    function Ub(a, b) {
        if (b in a) {
            return b
        }
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Tb.length;
        while (e--) {
            if (b = Tb[e] + c, b in a) {
                return b
            }
        }
        return d
    }

    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
            d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))))
        }
        for (g = 0; h > g; g++) {
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"))
        }
        return a
    }

    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
            "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)))
        }
        return g
    }

    function Yb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ib(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) {
                return e
            }
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b),
                    i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) {
                    return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]
                }
                if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) {
                    try {
                        i[b] = c
                    } catch (j) {}
                }
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() {
                    return Yb(a, b, d)
                }) : Yb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Jb, [a, "marginRight"]) : void 0
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                    e[a + T[d] + b] = f[d] || f[d - 2] || f[0]
                }
                return e
            }
        }, Gb.test(a) || (m.cssHooks[a + b].set = Wb)
    }), m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (m.isArray(b)) {
                    for (d = Ib(a), e = b.length; e > g; g++) {
                        f[b[g]] = m.css(a, b[g], !1, d)
                    }
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Vb(this, !0)
        },
        hide: function() {
            return Vb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });

    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e)
    }
    m.Tween = Zb, Zb.prototype = {
        constructor: Zb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Zb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Zb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this
        }
    }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/,
        bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cc = /queueHooks$/,
        dc = [ic],
        ec = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bc.exec(b),
                    f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do {
                        h = h || ".5", g /= h, m.style(c.elem, a, g + f)
                    } while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function fc() {
        return setTimeout(function() {
            $b = void 0
        }), $b = m.now()
    }

    function gc(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
            c = T[e], d["margin" + c] = d["padding" + c] = a
        }
        return b && (d.opacity = d.width = a), d
    }

    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++) {
            if (d = e[f].call(c, b, a)) {
                return d
            }
        }
    }

    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, n.always(function() {
            n.always(function() {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b) {
            if (e = b[d], ac.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) {
                        continue
                    }
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else {
                j = void 0
            }
        }
        if (m.isEmptyObject(o)) {
            "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j)
        } else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function() {
                m(a).hide()
            }), n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) {
                    m.style(a, b, o[b])
                }
            });
            for (d in o) {
                g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }
    }

    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e)
                }
            } else {
                b[d] = e
            }
        }
    }

    function kc(a, b, c) {
        var d, e, f = 0,
            g = dc.length,
            h = m.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) {
                    return !1
                }
                for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                    j.tweens[g].run(f)
                }
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $b || fc(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) {
                        return this
                    }
                    for (e = !0; d > c; c++) {
                        j.tweens[c].run(1)
                    }
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++) {
            if (d = dc[f].call(j, a, k, j.opts)) {
                return d
            }
        }
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, {
            tweener: function(a, b) {
                m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) {
                    c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
                }
            },
            prefilter: function(a, b) {
                b ? dc.unshift(a) : dc.push(a)
            }
        }), m.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? m.extend({}, a) : {
                complete: c || !c && b || m.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !m.isFunction(b) && b
            };
            return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
            }, d
        }, m.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(U).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = m.isEmptyObject(a),
                    f = m.speed(b, c, d),
                    g = function() {
                        var b = kc(this, m.extend({}, a), f);
                        (e || m._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = m.timers,
                        g = m._data(this);
                    if (e) {
                        g[e] && g[e].stop && d(g[e])
                    } else {
                        for (e in g) {
                            g[e] && g[e].stop && cc.test(e) && d(g[e])
                        }
                    }
                    for (e = f.length; e--;) {
                        f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1))
                    }(b || !c) && m.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = m._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = m.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                        f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1))
                    }
                    for (b = 0; g > b; b++) {
                        d[b] && d[b].finish && d[b].finish.call(this)
                    }
                    delete c.finish
                })
            }
        }), m.each(["toggle", "show", "hide"], function(a, b) {
            var c = m.fn[b];
            m.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
            }
        }), m.each({
            slideDown: gc("show"),
            slideUp: gc("hide"),
            slideToggle: gc("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            m.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), m.timers = [], m.fx.tick = function() {
            var a, b = m.timers,
                c = 0;
            for ($b = m.now(); c < b.length; c++) {
                a = b[c], a() || b[c] !== a || b.splice(c--, 1)
            }
            b.length || m.fx.stop(), $b = void 0
        }, m.fx.timer = function(a) {
            m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
        }, m.fx.interval = 13, m.fx.start = function() {
            _b || (_b = setInterval(m.fx.tick, m.fx.interval))
        }, m.fx.stop = function() {
            clearInterval(_b), _b = null
        }, m.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, m.fn.delay = function(a, b) {
            return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a, b, c, d, e;
            b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
        }();
    var lc = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            if (arguments.length) {
                return d = m.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })
            }
            if (e) {
                return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) {
                                return b
                            }
                            g.push(b)
                        }
                    }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = m.makeArray(b),
                        g = e.length;
                    while (g--) {
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) {
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        } else {
                            d.selected = !1
                        }
                    }
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mc, nc, oc = m.expr.attrHandle,
        pc = /^(?:checked|selected)$/i,
        qc = k.getSetAttribute,
        rc = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) {
                return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType) {
                while (c = f[e++]) {
                    d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
                }
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nc = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rc && qc || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c)
        }
    }), qc || (mc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, oc.id = oc.name = oc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mc.set
    }, m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mc.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i,
        tc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) {
                return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (m.isFunction(a)) {
                return this.each(function(b) {
                    m(this).addClass(a.call(this, b, this.className))
                })
            }
            if (j) {
                for (b = (a || "").match(E) || []; i > h; h++) {
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) {
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ")
                        }
                        g = m.trim(d), c.className !== g && (c.className = g)
                    }
                }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) {
                return this.each(function(b) {
                    m(this).removeClass(a.call(this, b, this.className))
                })
            }
            if (j) {
                for (b = (a || "").match(E) || []; i > h; h++) {
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++]) {
                            while (d.indexOf(" " + e + " ") >= 0) {
                                d = d.replace(" " + e + " ", " ")
                            }
                        }
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    }
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = m(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) {
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                    }
                } else {
                    (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
                }
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) {
                    return !0
                }
            }
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vc = m.now(),
        wc = /\?/,
        xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) {
            return a.JSON.parse(b + "")
        }
        var c, d = null,
            e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) {
            return null
        }
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yc, zc, Ac = /#.*$/,
        Bc = /([?&])_=[^&]*/,
        Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ec = /^(?:GET|HEAD)$/,
        Fc = /^\/\//,
        Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hc = {},
        Ic = {},
        Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"), zc.href = "", zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];

    function Lc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c)) {
                while (d = f[e++]) {
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                }
            }
        }
    }

    function Mc(a, b, c, d) {
        var e = {},
            f = a === Ic;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) {
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d])
        }
        return c && m.extend(!0, a, c), a
    }

    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) {
            i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"))
        }
        if (e) {
            for (g in h) {
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
            }
        }
        if (i[0] in c) {
            f = i[0]
        } else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1]) {
            for (g in a.converters) {
                j[g.toLowerCase()] = a.converters[g]
            }
        }
        f = k.shift();
        while (f) {
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) {
                if ("*" === f) {
                    f = i
                } else {
                    if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f], !g) {
                            for (e in j) {
                                if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                    break
                                }
                            }
                        }
                        if (g !== !0) {
                            if (g && a["throws"]) {
                                b = g(b)
                            } else {
                                try {
                                    b = g(b)
                                } catch (l) {
                                    return {
                                        state: "parsererror",
                                        error: g ? l : "No conversion from " + i + " to " + f
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zc,
            type: "GET",
            isLocal: Dc.test(yc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Cc.exec(f)) {
                                    j[b[1].toLowerCase()] = b[2]
                                }
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a) {
                            if (2 > t) {
                                for (b in a) {
                                    q[b] = [q[b], a[b]]
                                }
                            } else {
                                v.always(a[v.status])
                            }
                        }
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) {
                return v
            }
            h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) {
                v.setRequestHeader(d, k.headers[d])
            }
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) {
                return v.abort()
            }
            u = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                v[d](k[d])
            }
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) {
                        throw w
                    }
                    x(-1, w)
                }
            } else {
                x(-1, "No Transport")
            }

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a)) {
                return this.each(function(b) {
                    m(this).wrapAll(a.call(this, b))
                })
            }
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) {
                        a = a.firstChild
                    }
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b))
            } : function() {
                var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    };
    var Qc = /%20/g,
        Rc = /\[\]$/,
        Sc = /\r?\n/g,
        Tc = /^(?:submit|button|image|reset|file)$/i,
        Uc = /^(?:input|select|textarea|keygen)/i;

    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b)) {
            m.each(b, function(b, e) {
                c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            })
        } else {
            if (c || "object" !== m.type(b)) {
                d(a, b)
            } else {
                for (e in b) {
                    Vc(a + "[" + e + "]", b[e], c, d)
                }
            }
        }
    }
    m.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) {
            m.each(a, function() {
                e(this.name, this.value)
            })
        } else {
            for (c in a) {
                Vc(c, a[c], b, e)
            }
        }
        return d.join("&").replace(Qc, "+")
    }, m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sc, "\r\n")
                }
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    } : Zc;
    var Wc = 0,
        Xc = {},
        Yc = m.ajaxSettings.xhr();
    a.ActiveXObject && m(a).on("unload", function() {
        for (var a in Xc) {
            Xc[a](void 0, !0)
        }
    }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) {
                        for (e in a.xhrFields) {
                            f[e] = a.xhrFields[e]
                        }
                    }
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) {
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + "")
                    }
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState)) {
                            if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) {
                                4 !== f.readyState && f.abort()
                            } else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _c = [],
        ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _c.pop() || m.expando + "_" + vc++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) {
            return null
        }
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bd = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bd) {
            return bd.apply(this, arguments)
        }
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }).length
    };
    var cd = a.document.documentElement;

    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"),
                l = m(a),
                n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function(a) {
            if (arguments.length) {
                return void 0 === a ? this : this.each(function(b) {
                    m.offset.setOffset(this, a, b)
                })
            }
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) {
                return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cd;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) {
                    a = a.offsetParent
                }
                return a || cd
            })
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) {
            return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function() {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var ed = a.jQuery,
        fd = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});
/* jQuery Validation Plugin - v1.13.1 - 10/14/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 JÃ¶rn Zaefferer; Licensed MIT */
! function(b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : b(jQuery)
}(function(e) {
    e.extend(e.fn, {
        validate: function(a) {
            if (!this.length) {
                return void(a && a.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."))
            }
            var g = e.data(this[0], "validator");
            return g ? g : (this.attr("novalidate", "novalidate"), g = new e.validator(a, this[0]), e.data(this[0], "validator", g), g.settings.onsubmit && (this.validateDelegate(":submit", "click", function(c) {
                g.settings.submitHandler && (g.submitButton = c.target), e(c.target).hasClass("cancel") && (g.cancelSubmit = !0), void 0 !== e(c.target).attr("formnovalidate") && (g.cancelSubmit = !0)
            }), this.submit(function(c) {
                function h() {
                    var i, b;
                    return g.settings.submitHandler ? (g.submitButton && (i = e("<input type='hidden'/>").attr("name", g.submitButton.name).val(e(g.submitButton).val()).appendTo(g.currentForm)), b = g.settings.submitHandler.call(g, g.currentForm, c), g.submitButton && i.remove(), void 0 !== b ? b : !1) : !0
                }
                return g.settings.debug && c.preventDefault(), g.cancelSubmit ? (g.cancelSubmit = !1, h()) : g.form() ? g.pendingRequest ? (g.formSubmitted = !0, !1) : h() : (g.focusInvalid(), !1)
            })), g)
        },
        valid: function() {
            var a, g;
            return e(this[0]).is("form") ? a = this.validate().form() : (a = !0, g = e(this[0].form).validate(), this.each(function() {
                a = g.element(this) && a
            })), a
        },
        removeAttrs: function(a) {
            var h = {},
                g = this;
            return e.each(a.split(/\s/), function(i, c) {
                h[c] = g.attr(c), g.removeAttr(c)
            }), h
        },
        rules: function(r, q) {
            var p, o, n, m, l, k, a = this[0];
            if (r) {
                switch (p = e.data(a.form, "validator").settings, o = p.rules, n = e.validator.staticRules(a), r) {
                    case "add":
                        e.extend(n, e.validator.normalizeRule(q)), delete n.messages, o[a.name] = n, q.messages && (p.messages[a.name] = e.extend(p.messages[a.name], q.messages));
                        break;
                    case "remove":
                        return q ? (k = {}, e.each(q.split(/\s/), function(g, h) {
                            k[h] = n[h], delete n[h], "required" === h && e(a).removeAttr("aria-required")
                        }), k) : (delete o[a.name], n)
                }
            }
            return m = e.validator.normalizeRules(e.extend({}, e.validator.classRules(a), e.validator.attributeRules(a), e.validator.dataRules(a), e.validator.staticRules(a)), a), m.required && (l = m.required, delete m.required, m = e.extend({
                required: l
            }, m), e(a).attr("aria-required", "true")), m.remote && (l = m.remote, delete m.remote, m = e.extend(m, {
                remote: l
            })), m
        }
    }), e.extend(e.expr[":"], {
        blank: function(a) {
            return !e.trim("" + e(a).val())
        },
        filled: function(a) {
            return !!e.trim("" + e(a).val())
        },
        unchecked: function(a) {
            return !e(a).prop("checked")
        }
    }), e.validator = function(a, g) {
        this.settings = e.extend(!0, {}, e.validator.defaults, a), this.currentForm = g, this.init()
    }, e.validator.format = function(a, g) {
        return 1 === arguments.length ? function() {
            var b = e.makeArray(arguments);
            return b.unshift(a), e.validator.format.apply(this, b)
        } : (arguments.length > 2 && g.constructor !== Array && (g = e.makeArray(arguments).slice(1)), g.constructor !== Array && (g = [g]), e.each(g, function(b, h) {
            a = a.replace(new RegExp("\\{" + b + "\\}", "g"), function() {
                return h
            })
        }), a)
    }, e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(b) {
                this.lastActive = b, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, b, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(b)))
            },
            onfocusout: function(b) {
                this.checkable(b) || !(b.name in this.submitted) && this.optional(b) || this.element(b)
            },
            onkeyup: function(g, c) {
                (9 !== c.which || "" !== this.elementValue(g)) && (g.name in this.submitted || g === this.lastElement) && this.element(g)
            },
            onclick: function(b) {
                b.name in this.submitted ? this.element(b) : b.parentNode.name in this.submitted && this.element(b.parentNode)
            },
            highlight: function(a, h, g) {
                "radio" === a.type ? this.findByName(a.name).addClass(h).removeClass(g) : e(a).addClass(h).removeClass(g)
            },
            unhighlight: function(a, h, g) {
                "radio" === a.type ? this.findByName(a.name).removeClass(h).addClass(g) : e(a).removeClass(h).addClass(g)
            }
        },
        setDefaults: function(a) {
            e.extend(e.validator.defaults, a)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function a(i) {
                    var l = e.data(this[0].form, "validator"),
                        k = "on" + i.type.replace(/^validate/, ""),
                        j = l.settings;
                    j[k] && !this.is(j.ignore) && j[k].call(l, this[0], i)
                }
                this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var h, g = this.groups = {};
                e.each(this.settings.groups, function(i, j) {
                    "string" == typeof j && (j = j.split(/\s/)), e.each(j, function(b, k) {
                        g[k] = i
                    })
                }), h = this.settings.rules, e.each(h, function(c, i) {
                    h[c] = e.validator.normalizeRule(i)
                }), e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", a).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", a), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var g = 0, c = this.currentElements = this.elements(); c[g]; g++) {
                    this.check(c[g])
                }
                return this.valid()
            },
            element: function(a) {
                var i = this.clean(a),
                    h = this.validationTargetFor(i),
                    g = !0;
                return this.lastElement = h, void 0 === h ? delete this.invalid[i.name] : (this.prepareElement(h), this.currentElements = e(h), g = this.check(h) !== !1, g ? delete this.invalid[h.name] : this.invalid[h.name] = !0), e(a).attr("aria-invalid", !g), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), g
            },
            showErrors: function(a) {
                if (a) {
                    e.extend(this.errorMap, a), this.errorList = [];
                    for (var g in a) {
                        this.errorList.push({
                            message: a[g],
                            element: this.findByName(g)[0]
                        })
                    }
                    this.successList = e.grep(this.successList, function(b) {
                        return !(b.name in a)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(h) {
                var g, i = 0;
                for (g in h) {
                    i++
                }
                return i
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(b) {
                b.not(this.containers).text(""), this.addWrapper(b).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) {
                    try {
                        e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (a) {}
                }
            },
            findLastActive: function() {
                var a = this.lastActive;
                return a && 1 === e.grep(this.errorList, function(b) {
                    return b.element.name === a.name
                }).length && a
            },
            elements: function() {
                var a = this,
                    g = {};
                return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function() {
                    return !this.name && a.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in g || !a.objectLength(e(this).rules()) ? !1 : (g[this.name] = !0, !0)
                })
            },
            clean: function(a) {
                return e(a)[0]
            },
            errors: function() {
                var a = this.settings.errorClass.split(" ").join(".");
                return e(this.settings.errorElement + "." + a, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(b) {
                this.reset(), this.toHide = this.errorsFor(b)
            },
            elementValue: function(a) {
                var i, h = e(a),
                    g = a.type;
                return "radio" === g || "checkbox" === g ? e("input[name='" + a.name + "']:checked").val() : "number" === g && "undefined" != typeof a.validity ? a.validity.badInput ? !1 : h.val() : (i = h.val(), "string" == typeof i ? i.replace(/\r/g, "") : i)
            },
            check: function(r) {
                r = this.validationTargetFor(this.clean(r));
                var q, p, o, n = e(r).rules(),
                    m = e.map(n, function(g, c) {
                        return c
                    }).length,
                    l = !1,
                    k = this.elementValue(r);
                for (p in n) {
                    o = {
                        method: p,
                        parameters: n[p]
                    };
                    try {
                        if (q = e.validator.methods[p].call(this, k, r, o.parameters), "dependency-mismatch" === q && 1 === m) {
                            l = !0;
                            continue
                        }
                        if (l = !1, "pending" === q) {
                            return void(this.toHide = this.toHide.not(this.errorsFor(r)))
                        }
                        if (!q) {
                            return this.formatAndAdd(r, o), !1
                        }
                    } catch (a) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + r.id + ", check the '" + o.method + "' method.", a), a
                    }
                }
                if (!l) {
                    return this.objectLength(n) && this.successList.push(r), !0
                }
            },
            customDataMessage: function(a, g) {
                return e(a).data("msg" + g.charAt(0).toUpperCase() + g.substring(1).toLowerCase()) || e(a).data("msg")
            },
            customMessage: function(h, g) {
                var i = this.settings.messages[h];
                return i && (i.constructor === String ? i : i[g])
            },
            findDefined: function() {
                for (var b = 0; b < arguments.length; b++) {
                    if (void 0 !== arguments[b]) {
                        return arguments[b]
                    }
                }
                return void 0
            },
            defaultMessage: function(a, g) {
                return this.findDefined(this.customMessage(a.name, g), this.customDataMessage(a, g), !this.settings.ignoreTitle && a.title || void 0, e.validator.messages[g], "<strong>Warning: No message defined for " + a.name + "</strong>")
            },
            formatAndAdd: function(a, i) {
                var h = this.defaultMessage(a, i.method),
                    g = /\$?\{(\d+)\}/g;
                "function" == typeof h ? h = h.call(this, i.parameters, a) : g.test(h) && (h = e.validator.format(h.replace(g, "{$1}"), i.parameters)), this.errorList.push({
                    message: h,
                    element: a,
                    method: i.method
                }), this.errorMap[a.name] = h, this.submitted[a.name] = h
            },
            addWrapper: function(b) {
                return this.settings.wrapper && (b = b.add(b.parent(this.settings.wrapper))), b
            },
            defaultShowErrors: function() {
                var h, g, i;
                for (h = 0; this.errorList[h]; h++) {
                    i = this.errorList[h], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) {
                    for (h = 0; this.successList[h]; h++) {
                        this.showLabel(this.successList[h])
                    }
                }
                if (this.settings.unhighlight) {
                    for (h = 0, g = this.validElements(); g[h]; h++) {
                        this.settings.unhighlight.call(this, g[h], this.settings.errorClass, this.settings.validClass)
                    }
                }
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return e(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(a, p) {
                var o, n, m, l = this.errorsFor(a),
                    k = this.idOrName(a),
                    j = e(a).attr("aria-describedby");
                l.length ? (l.removeClass(this.settings.validClass).addClass(this.settings.errorClass), l.html(p)) : (l = e("<" + this.settings.errorElement + ">").attr("id", k + "-error").addClass(this.settings.errorClass).html(p || ""), o = l, this.settings.wrapper && (o = l.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(o) : this.settings.errorPlacement ? this.settings.errorPlacement(o, e(a)) : o.insertAfter(a), l.is("label") ? l.attr("for", k) : 0 === l.parents("label[for='" + k + "']").length && (m = l.attr("id").replace(/(:|\.|\[|\])/g, "\\$1"), j ? j.match(new RegExp("\\b" + m + "\\b")) || (j += " " + m) : j = m, e(a).attr("aria-describedby", j), n = this.groups[a.name], n && e.each(this.groups, function(g, h) {
                    h === n && e("[name='" + g + "']", this.currentForm).attr("aria-describedby", l.attr("id"))
                }))), !p && this.settings.success && (l.text(""), "string" == typeof this.settings.success ? l.addClass(this.settings.success) : this.settings.success(l, a)), this.toShow = this.toShow.add(l)
            },
            errorsFor: function(a) {
                var i = this.idOrName(a),
                    h = e(a).attr("aria-describedby"),
                    g = "label[for='" + i + "'], label[for='" + i + "'] *";
                return h && (g = g + ", #" + h.replace(/\s+/g, ", #")), this.errors().filter(g)
            },
            idOrName: function(b) {
                return this.groups[b.name] || (this.checkable(b) ? b.name : b.id || b.name)
            },
            validationTargetFor: function(a) {
                return this.checkable(a) && (a = this.findByName(a.name)), e(a).not(this.settings.ignore)[0]
            },
            checkable: function(b) {
                return /radio|checkbox/i.test(b.type)
            },
            findByName: function(a) {
                return e(this.currentForm).find("[name='" + a + "']")
            },
            getLength: function(a, g) {
                switch (g.nodeName.toLowerCase()) {
                    case "select":
                        return e("option:selected", g).length;
                    case "input":
                        if (this.checkable(g)) {
                            return this.findByName(g.name).filter(":checked").length
                        }
                }
                return a.length
            },
            depend: function(g, c) {
                return this.dependTypes[typeof g] ? this.dependTypes[typeof g](g, c) : !0
            },
            dependTypes: {
                "boolean": function(b) {
                    return b
                },
                string: function(a, g) {
                    return !!e(a, g.form).length
                },
                "function": function(g, c) {
                    return g(c)
                }
            },
            optional: function(a) {
                var g = this.elementValue(a);
                return !e.validator.methods.required.call(this, g, a) && "dependency-mismatch"
            },
            startRequest: function(b) {
                this.pending[b.name] || (this.pendingRequest++, this.pending[b.name] = !0)
            },
            stopRequest: function(a, g) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[a.name], g && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !g && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(a) {
                return e.data(a, "previousValue") || e.data(a, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(a, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(a, g) {
            a.constructor === String ? this.classRuleSettings[a] = g : e.extend(this.classRuleSettings, a)
        },
        classRules: function(a) {
            var h = {},
                g = e(a).attr("class");
            return g && e.each(g.split(" "), function() {
                this in e.validator.classRuleSettings && e.extend(h, e.validator.classRuleSettings[this])
            }), h
        },
        attributeRules: function(a) {
            var l, k, j = {},
                i = e(a),
                h = a.getAttribute("type");
            for (l in e.validator.methods) {
                "required" === l ? (k = a.getAttribute(l), "" === k && (k = !0), k = !!k) : k = i.attr(l), /min|max/.test(l) && (null === h || /number|range|text/.test(h)) && (k = Number(k)), k || 0 === k ? j[l] = k : h === l && "range" !== h && (j[l] = !0)
            }
            return j.maxlength && /-1|2147483647|524288/.test(j.maxlength) && delete j.maxlength, j
        },
        dataRules: function(a) {
            var j, i, h = {},
                g = e(a);
            for (j in e.validator.methods) {
                i = g.data("rule" + j.charAt(0).toUpperCase() + j.substring(1).toLowerCase()), void 0 !== i && (h[j] = i)
            }
            return h
        },
        staticRules: function(a) {
            var h = {},
                g = e.data(a.form, "validator");
            return g.settings.rules && (h = e.validator.normalizeRule(g.settings.rules[a.name]) || {}), h
        },
        normalizeRules: function(a, g) {
            return e.each(a, function(h, c) {
                if (c === !1) {
                    return void delete a[h]
                }
                if (c.param || c.depends) {
                    var b = !0;
                    switch (typeof c.depends) {
                        case "string":
                            b = !!e(c.depends, g.form).length;
                            break;
                        case "function":
                            b = c.depends.call(g, g)
                    }
                    b ? a[h] = void 0 !== c.param ? c.param : !0 : delete a[h]
                }
            }), e.each(a, function(c, b) {
                a[c] = e.isFunction(b) ? b(g) : b
            }), e.each(["minlength", "maxlength"], function() {
                a[this] && (a[this] = Number(a[this]))
            }), e.each(["rangelength", "range"], function() {
                var b;
                a[this] && (e.isArray(a[this]) ? a[this] = [Number(a[this][0]), Number(a[this][1])] : "string" == typeof a[this] && (b = a[this].replace(/[\[\]]/g, "").split(/[\s,]+/), a[this] = [Number(b[0]), Number(b[1])]))
            }), e.validator.autoCreateRanges && (null != a.min && null != a.max && (a.range = [a.min, a.max], delete a.min, delete a.max), null != a.minlength && null != a.maxlength && (a.rangelength = [a.minlength, a.maxlength], delete a.minlength, delete a.maxlength)), a
        },
        normalizeRule: function(a) {
            if ("string" == typeof a) {
                var g = {};
                e.each(a.split(/\s/), function() {
                    g[this] = !0
                }), a = g
            }
            return a
        },
        addMethod: function(a, h, g) {
            e.validator.methods[a] = h, e.validator.messages[a] = void 0 !== g ? g : e.validator.messages[a], h.length < 3 && e.validator.addClassRules(a, e.validator.normalizeRule(a))
        },
        methods: {
            required: function(a, i, h) {
                if (!this.depend(h, i)) {
                    return "dependency-mismatch"
                }
                if ("select" === i.nodeName.toLowerCase()) {
                    var g = e(i).val();
                    return g && g.length > 0
                }
                return this.checkable(i) ? this.getLength(a, i) > 0 : e.trim(a).length > 0
            },
            email: function(g, c) {
                return this.optional(c) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(g)
            },
            url: function(g, c) {
                return this.optional(c) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(g)
            },
            date: function(g, c) {
                return this.optional(c) || !/Invalid|NaN/.test(new Date(g).toString())
            },
            dateISO: function(g, c) {
                return this.optional(c) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(g)
            },
            number: function(g, c) {
                return this.optional(c) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(g)
            },
            digits: function(g, c) {
                return this.optional(c) || /^\d+$/.test(g)
            },
            creditcard: function(i, h) {
                if (this.optional(h)) {
                    return "dependency-mismatch"
                }
                if (/[^0-9 \-]+/.test(i)) {
                    return !1
                }
                var n, m, l = 0,
                    k = 0,
                    j = !1;
                if (i = i.replace(/\D/g, ""), i.length < 13 || i.length > 19) {
                    return !1
                }
                for (n = i.length - 1; n >= 0; n--) {
                    m = i.charAt(n), k = parseInt(m, 10), j && (k *= 2) > 9 && (k -= 9), l += k, j = !j
                }
                return l % 10 === 0
            },
            minlength: function(a, i, h) {
                var g = e.isArray(a) ? a.length : this.getLength(a, i);
                return this.optional(i) || g >= h
            },
            maxlength: function(a, i, h) {
                var g = e.isArray(a) ? a.length : this.getLength(a, i);
                return this.optional(i) || h >= g
            },
            rangelength: function(a, i, h) {
                var g = e.isArray(a) ? a.length : this.getLength(a, i);
                return this.optional(i) || g >= h[0] && g <= h[1]
            },
            min: function(h, g, i) {
                return this.optional(g) || h >= i
            },
            max: function(h, g, i) {
                return this.optional(g) || i >= h
            },
            range: function(h, g, i) {
                return this.optional(g) || h >= i[0] && h <= i[1]
            },
            equalTo: function(a, i, h) {
                var g = e(h);
                return this.settings.onfocusout && g.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    e(i).valid()
                }), a === g.val()
            },
            remote: function(a, l, k) {
                if (this.optional(l)) {
                    return "dependency-mismatch"
                }
                var j, i, h = this.previousValue(l);
                return this.settings.messages[l.name] || (this.settings.messages[l.name] = {}), h.originalMessage = this.settings.messages[l.name].remote, this.settings.messages[l.name].remote = h.message, k = "string" == typeof k && {
                    url: k
                } || k, h.old === a ? h.valid : (h.old = a, j = this, this.startRequest(l), i = {}, i[l.name] = a, e.ajax(e.extend(!0, {
                    url: k,
                    mode: "abort",
                    port: "validate" + l.name,
                    dataType: "json",
                    data: i,
                    context: j.currentForm,
                    success: function(n) {
                        var m, g, c, b = n === !0 || "true" === n;
                        j.settings.messages[l.name].remote = h.originalMessage, b ? (c = j.formSubmitted, j.prepareElement(l), j.formSubmitted = c, j.successList.push(l), delete j.invalid[l.name], j.showErrors()) : (m = {}, g = n || j.defaultMessage(l, "remote"), m[l.name] = h.message = e.isFunction(g) ? g(a) : g, j.invalid[l.name] = !0, j.showErrors(m)), h.valid = b, j.stopRequest(l, b)
                    }
                }, k)), "pending")
            }
        }
    }), e.format = function() {
        throw "$.format has been deprecated. Please use $.validator.format instead."
    };
    var d, f = {};
    e.ajaxPrefilter ? e.ajaxPrefilter(function(g, c, i) {
        var h = g.port;
        "abort" === g.mode && (f[h] && f[h].abort(), f[h] = i)
    }) : (d = e.ajax, e.ajax = function(c) {
        var b = ("mode" in c ? c : e.ajaxSettings).mode,
            a = ("port" in c ? c : e.ajaxSettings).port;
        return "abort" === b ? (f[a] && f[a].abort(), f[a] = d.apply(this, arguments), f[a]) : d.apply(this, arguments)
    }), e.extend(e.fn, {
        validateDelegate: function(a, h, g) {
            return this.bind(h, function(i) {
                var b = e(i.target);
                return b.is(a) ? g.apply(b, arguments) : void 0
            })
        }
    })
});
/*
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) {
    throw new Error("Bootstrap's JavaScript requires jQuery")
} + function(d) {
    var c = d.fn.jquery.split(" ")[0].split(".");
    if (c[0] < 2 && c[1] < 9 || 1 == c[0] && 9 == c[1] && c[2] < 1) {
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
    }
}(jQuery), + function(d) {
    function c() {
        var f = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var g in e) {
            if (void 0 !== f.style[g]) {
                return {
                    end: e[g]
                }
            }
        }
        return !1
    }
    d.fn.emulateTransitionEnd = function(a) {
        var h = !1,
            g = this;
        d(this).one("bsTransitionEnd", function() {
            h = !0
        });
        var f = function() {
            h || d(g).trigger(d.support.transition.end)
        };
        return setTimeout(f, a), this
    }, d(function() {
        d.support.transition = c(), d.support.transition && (d.event.special.bsTransitionEnd = {
            bindType: d.support.transition.end,
            delegateType: d.support.transition.end,
            handle: function(a) {
                return d(a.target).is(this) ? a.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(g) {
    function f(a) {
        return this.each(function() {
            var d = g(this),
                b = d.data("bs.alert");
            b || d.data("bs.alert", b = new i(this)), "string" == typeof a && b[a].call(d)
        })
    }
    var j = '[data-dismiss="alert"]',
        i = function(a) {
            g(a).on("click", j, this.close)
        };
    i.VERSION = "3.3.1", i.TRANSITION_DURATION = 150, i.prototype.close = function(a) {
        function m() {
            d.detach().trigger("closed.bs.alert").remove()
        }
        var l = g(this),
            k = l.attr("data-target");
        k || (k = l.attr("href"), k = k && k.replace(/.*(?=#[^\s]*$)/, ""));
        var d = g(k);
        a && a.preventDefault(), d.length || (d = l.closest(".alert")), d.trigger(a = g.Event("close.bs.alert")), a.isDefaultPrevented() || (d.removeClass("in"), g.support.transition && d.hasClass("fade") ? d.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m())
    };
    var h = g.fn.alert;
    g.fn.alert = f, g.fn.alert.Constructor = i, g.fn.alert.noConflict = function() {
        return g.fn.alert = h, this
    }, g(document).on("click.bs.alert.data-api", j, i.prototype.close)
}(jQuery), + function(f) {
    function e(a) {
        return this.each(function() {
            var i = f(this),
                c = i.data("bs.button"),
                b = "object" == typeof a && a;
            c || i.data("bs.button", c = new h(this, b)), "toggle" == a ? c.toggle() : a && c.setState(a)
        })
    }
    var h = function(a, c) {
        this.$element = f(a), this.options = f.extend({}, h.DEFAULTS, c), this.isLoading = !1
    };
    h.VERSION = "3.3.1", h.DEFAULTS = {
        loadingText: "loading..."
    }, h.prototype.setState = function(a) {
        var l = "disabled",
            k = this.$element,
            j = k.is("input") ? "val" : "html",
            i = k.data();
        a += "Text", null == i.resetText && k.data("resetText", k[j]()), setTimeout(f.proxy(function() {
            k[j](null == i[a] ? this.options[a] : i[a]), "loadingText" == a ? (this.isLoading = !0, k.addClass(l).attr(l, l)) : this.isLoading && (this.isLoading = !1, k.removeClass(l).removeAttr(l))
        }, this), 0)
    }, h.prototype.toggle = function() {
        var i = !0,
            d = this.$element.closest('[data-toggle="buttons"]');
        if (d.length) {
            var j = this.$element.find("input");
            "radio" == j.prop("type") && (j.prop("checked") && this.$element.hasClass("active") ? i = !1 : d.find(".active").removeClass("active")), i && j.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else {
            this.$element.attr("aria-pressed", !this.$element.hasClass("active"))
        }
        i && this.$element.toggleClass("active")
    };
    var g = f.fn.button;
    f.fn.button = e, f.fn.button.Constructor = h, f.fn.button.noConflict = function() {
        return f.fn.button = g, this
    }, f(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        var a = f(b.target);
        a.hasClass("btn") || (a = a.closest(".btn")), e.call(a, "toggle"), b.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(a) {
        f(a.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(a.type))
    })
}(jQuery), + function(g) {
    function f(a) {
        return this.each(function() {
            var l = g(this),
                k = l.data("bs.carousel"),
                c = g.extend({}, j.DEFAULTS, l.data(), "object" == typeof a && a),
                b = "string" == typeof a ? a : c.slide;
            k || l.data("bs.carousel", k = new j(this, c)), "number" == typeof a ? k.to(a) : b ? k[b]() : c.interval && k.pause().cycle()
        })
    }
    var j = function(a, d) {
        this.$element = g(a), this.$indicators = this.$element.find(".carousel-indicators"), this.options = d, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", g.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", g.proxy(this.pause, this)).on("mouseleave.bs.carousel", g.proxy(this.cycle, this))
    };
    j.VERSION = "3.3.1", j.TRANSITION_DURATION = 600, j.DEFAULTS = {
        interval: 5000,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, j.prototype.keydown = function(b) {
        if (!/input|textarea/i.test(b.target.tagName)) {
            switch (b.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            b.preventDefault()
        }
    }, j.prototype.cycle = function(a) {
        return a || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(g.proxy(this.next, this), this.options.interval)), this
    }, j.prototype.getItemIndex = function(b) {
        return this.$items = b.parent().children(".item"), this.$items.index(b || this.$active)
    }, j.prototype.getItemForDirection = function(l, k) {
        var o = "prev" == l ? -1 : 1,
            n = this.getItemIndex(k),
            m = (n + o) % this.$items.length;
        return this.$items.eq(m)
    }, j.prototype.to = function(e) {
        var d = this,
            k = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            d.to(e)
        }) : k == e ? this.pause().cycle() : this.slide(e > k ? "next" : "prev", this.$items.eq(e))
    }, j.prototype.pause = function(a) {
        return a || (this.paused = !0), this.$element.find(".next, .prev").length && g.support.transition && (this.$element.trigger(g.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, j.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, j.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, j.prototype.slide = function(y, w) {
        var v = this.$element.find(".item.active"),
            u = w || this.getItemForDirection(y, v),
            t = this.interval,
            s = "next" == y ? "left" : "right",
            r = "next" == y ? "first" : "last",
            q = this;
        if (!u.length) {
            if (!this.options.wrap) {
                return
            }
            u = this.$element.find(".item")[r]()
        }
        if (u.hasClass("active")) {
            return this.sliding = !1
        }
        var p = u[0],
            o = g.Event("slide.bs.carousel", {
                relatedTarget: p,
                direction: s
            });
        if (this.$element.trigger(o), !o.isDefaultPrevented()) {
            if (this.sliding = !0, t && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = g(this.$indicators.children()[this.getItemIndex(u)]);
                c && c.addClass("active")
            }
            var a = g.Event("slid.bs.carousel", {
                relatedTarget: p,
                direction: s
            });
            return g.support.transition && this.$element.hasClass("slide") ? (u.addClass(y), u[0].offsetWidth, v.addClass(s), u.addClass(s), v.one("bsTransitionEnd", function() {
                u.removeClass([y, s].join(" ")).addClass("active"), v.removeClass(["active", s].join(" ")), q.sliding = !1, setTimeout(function() {
                    q.$element.trigger(a)
                }, 0)
            }).emulateTransitionEnd(j.TRANSITION_DURATION)) : (v.removeClass("active"), u.addClass("active"), this.sliding = !1, this.$element.trigger(a)), t && this.cycle(), this
        }
    };
    var i = g.fn.carousel;
    g.fn.carousel = f, g.fn.carousel.Constructor = j, g.fn.carousel.noConflict = function() {
        return g.fn.carousel = i, this
    };
    var h = function(n) {
        var m, l = g(this),
            k = g(l.attr("data-target") || (m = l.attr("href")) && m.replace(/.*(?=#[^\s]+$)/, ""));
        if (k.hasClass("carousel")) {
            var b = g.extend({}, k.data(), l.data()),
                a = l.attr("data-slide-to");
            a && (b.interval = !1), f.call(k, b), a && k.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    g(document).on("click.bs.carousel.data-api", "[data-slide]", h).on("click.bs.carousel.data-api", "[data-slide-to]", h), g(window).on("load", function() {
        g('[data-ride="carousel"]').each(function() {
            var a = g(this);
            f.call(a, a.data())
        })
    })
}(jQuery), + function(g) {
    function f(a) {
        var k, e = a.attr("data-target") || (k = a.attr("href")) && k.replace(/.*(?=#[^\s]+$)/, "");
        return g(e)
    }

    function j(a) {
        return this.each(function() {
            var k = g(this),
                d = k.data("bs.collapse"),
                b = g.extend({}, i.DEFAULTS, k.data(), "object" == typeof a && a);
            !d && b.toggle && "show" == a && (b.toggle = !1), d || k.data("bs.collapse", d = new i(this, b)), "string" == typeof a && d[a]()
        })
    }
    var i = function(a, d) {
        this.$element = g(a), this.options = g.extend({}, i.DEFAULTS, d), this.$trigger = g(this.options.trigger).filter('[href="#' + a.id + '"], [data-target="#' + a.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.1", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0,
        trigger: '[data-toggle="collapse"]'
    }, i.prototype.dimension = function() {
        var b = this.$element.hasClass("width");
        return b ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var a, m = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");
            if (!(m && m.length && (a = m.data("bs.collapse"), a && a.transitioning))) {
                var l = g.Event("show.bs.collapse");
                if (this.$element.trigger(l), !l.isDefaultPrevented()) {
                    m && m.length && (j.call(m, "hide"), a || m.data("bs.collapse", null));
                    var k = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[k](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var d = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[k](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!g.support.transition) {
                        return d.call(this)
                    }
                    var c = g.camelCase(["scroll", k].join("-"));
                    this.$element.one("bsTransitionEnd", g.proxy(d, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[k](this.$element[0][c])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var a = g.Event("hide.bs.collapse");
            if (this.$element.trigger(a), !a.isDefaultPrevented()) {
                var k = this.dimension();
                this.$element[k](this.$element[k]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return g.support.transition ? void this.$element[k](0).one("bsTransitionEnd", g.proxy(d, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : d.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return g(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(g.proxy(function(k, b) {
            var a = g(b);
            this.addAriaAndCollapsedClass(f(a), a)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(e, d) {
        var k = e.hasClass("in");
        e.attr("aria-expanded", k), d.toggleClass("collapsed", !k).attr("aria-expanded", k)
    };
    var h = g.fn.collapse;
    g.fn.collapse = j, g.fn.collapse.Constructor = i, g.fn.collapse.noConflict = function() {
        return g.fn.collapse = h, this
    }, g(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(l) {
        var k = g(this);
        k.attr("data-target") || l.preventDefault();
        var c = f(k),
            b = c.data("bs.collapse"),
            a = b ? "toggle" : g.extend({}, k.data(), {
                trigger: this
            });
        j.call(c, a)
    })
}(jQuery), + function(j) {
    function i(a) {
        a && 3 === a.which || (j(n).remove(), j(m).each(function() {
            var g = j(this),
                c = p(g),
                b = {
                    relatedTarget: this
                };
            c.hasClass("open") && (c.trigger(a = j.Event("hide.bs.dropdown", b)), a.isDefaultPrevented() || (g.attr("aria-expanded", "false"), c.removeClass("open").trigger("hidden.bs.dropdown", b)))
        }))
    }

    function p(a) {
        var f = a.attr("data-target");
        f || (f = a.attr("href"), f = f && /#[A-Za-z]/.test(f) && f.replace(/.*(?=#[^\s]*$)/, ""));
        var e = f && j(f);
        return e && e.length ? e : a.parent()
    }

    function o(a) {
        return this.each(function() {
            var e = j(this),
                b = e.data("bs.dropdown");
            b || e.data("bs.dropdown", b = new l(this)), "string" == typeof a && b[a].call(e)
        })
    }
    var n = ".dropdown-backdrop",
        m = '[data-toggle="dropdown"]',
        l = function(a) {
            j(a).on("click.bs.dropdown", this.toggle)
        };
    l.VERSION = "3.3.1", l.prototype.toggle = function(r) {
        var q = j(this);
        if (!q.is(".disabled, :disabled")) {
            var c = p(q),
                b = c.hasClass("open");
            if (i(), !b) {
                "ontouchstart" in document.documentElement && !c.closest(".navbar-nav").length && j('<div class="dropdown-backdrop"/>').insertAfter(j(this)).on("click", i);
                var a = {
                    relatedTarget: this
                };
                if (c.trigger(r = j.Event("show.bs.dropdown", a)), r.isDefaultPrevented()) {
                    return
                }
                q.trigger("focus").attr("aria-expanded", "true"), c.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, l.prototype.keydown = function(a) {
        if (/(38|40|27|32)/.test(a.which) && !/input|textarea/i.test(a.target.tagName)) {
            var t = j(this);
            if (a.preventDefault(), a.stopPropagation(), !t.is(".disabled, :disabled")) {
                var s = p(t),
                    r = s.hasClass("open");
                if (!r && 27 != a.which || r && 27 == a.which) {
                    return 27 == a.which && s.find(m).trigger("focus"), t.trigger("click")
                }
                var q = " li:not(.divider):visible a",
                    f = s.find('[role="menu"]' + q + ', [role="listbox"]' + q);
                if (f.length) {
                    var c = f.index(a.target);
                    38 == a.which && c > 0 && c--, 40 == a.which && c < f.length - 1 && c++, ~c || (c = 0), f.eq(c).trigger("focus")
                }
            }
        }
    };
    var k = j.fn.dropdown;
    j.fn.dropdown = o, j.fn.dropdown.Constructor = l, j.fn.dropdown.noConflict = function() {
        return j.fn.dropdown = k, this
    }, j(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(b) {
        b.stopPropagation()
    }).on("click.bs.dropdown.data-api", m, l.prototype.toggle).on("keydown.bs.dropdown.data-api", m, l.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', l.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', l.prototype.keydown)
}(jQuery), + function(f) {
    function e(a, c) {
        return this.each(function() {
            var i = f(this),
                d = i.data("bs.modal"),
                b = f.extend({}, h.DEFAULTS, i.data(), "object" == typeof a && a);
            d || i.data("bs.modal", d = new h(this, b)), "string" == typeof a ? d[a](c) : b.show && d.show(c)
        })
    }
    var h = function(a, d) {
        this.options = d, this.$body = f(document.body), this.$element = f(a), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, f.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    h.VERSION = "3.3.1", h.TRANSITION_DURATION = 300, h.BACKDROP_TRANSITION_DURATION = 150, h.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, h.prototype.toggle = function(b) {
        return this.isShown ? this.hide() : this.show(b)
    }, h.prototype.show = function(a) {
        var i = this,
            c = f.Event("show.bs.modal", {
                relatedTarget: a
            });
        this.$element.trigger(c), this.isShown || c.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), $("html").addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', f.proxy(this.hide, this)), this.backdrop(function() {
            var d = f.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.options.backdrop && i.adjustBackdrop(), i.adjustDialog(), d && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
            var b = f.Event("shown.bs.modal", {
                relatedTarget: a
            });
            d ? i.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(b)
            }).emulateTransitionEnd(h.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(b)
        }))
    }, h.prototype.hide = function(a) {
        a && a.preventDefault(), a = f.Event("hide.bs.modal"), this.$element.trigger(a), this.isShown && !a.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), f(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), f.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", f.proxy(this.hideModal, this)).emulateTransitionEnd(h.TRANSITION_DURATION) : this.hideModal())
    }, h.prototype.enforceFocus = function() {
        f(document).off("focusin.bs.modal").on("focusin.bs.modal", f.proxy(function(b) {
            this.$element[0] === b.target || this.$element.has(b.target).length || this.$element.trigger("focus")
        }, this))
    }, h.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", f.proxy(function(b) {
            27 == b.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, h.prototype.resize = function() {
        this.isShown ? f(window).on("resize.bs.modal", f.proxy(this.handleUpdate, this)) : f(window).off("resize.bs.modal")
    }, h.prototype.hideModal = function() {
        var b = this;
        this.$element.hide(), this.backdrop(function() {
            b.$body.removeClass("modal-open"), $("html").removeClass("modal-open"), b.resetAdjustments(), b.resetScrollbar(), b.$element.trigger("hidden.bs.modal")
        })
    }, h.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, h.prototype.backdrop = function(a) {
        var k = this,
            j = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = f.support.transition && j;
            if (this.$backdrop = f('<div class="modal-backdrop ' + j + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", f.proxy(function(b) {
                    b.target === b.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !a) {
                return
            }
            i ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION) : a()
        } else {
            if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var c = function() {
                    k.removeBackdrop(), a && a()
                };
                f.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", c).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION) : c()
            } else {
                a && a()
            }
        }
    }, h.prototype.handleUpdate = function() {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
    }, h.prototype.adjustBackdrop = function() {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
    }, h.prototype.adjustDialog = function() {
        var b = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && b ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !b ? this.scrollbarWidth : ""
        })
    }, h.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, h.prototype.checkScrollbar = function() {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
    }, h.prototype.setScrollbar = function() {
        var b = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", b + this.scrollbarWidth)
    }, h.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, h.prototype.measureScrollbar = function() {
        var d = document.createElement("div");
        d.className = "modal-scrollbar-measure", this.$body.append(d);
        var c = d.offsetWidth - d.clientWidth;
        return this.$body[0].removeChild(d), c
    };
    var g = f.fn.modal;
    f.fn.modal = e, f.fn.modal.Constructor = h, f.fn.modal.noConflict = function() {
        return f.fn.modal = g, this
    }, f(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(k) {
        var j = f(this),
            i = j.attr("href"),
            b = f(j.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            a = b.data("bs.modal") ? "toggle" : f.extend({
                remote: !/#/.test(i) && i
            }, b.data(), j.data());
        j.is("a") && k.preventDefault(), b.one("show.bs.modal", function(c) {
            c.isDefaultPrevented() || b.one("hidden.bs.modal", function() {
                j.is(":visible") && j.trigger("focus")
            })
        }), e.call(b, a, this)
    })
}(jQuery), + function(f) {
    function e(a) {
        return this.each(function() {
            var j = f(this),
                i = j.data("bs.tooltip"),
                c = "object" == typeof a && a,
                b = c && c.selector;
            (i || "destroy" != a) && (b ? (i || j.data("bs.tooltip", i = {}), i[b] || (i[b] = new h(this, c))) : i || j.data("bs.tooltip", i = new h(this, c)), "string" == typeof a && i[a]())
        })
    }
    var h = function(d, c) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", d, c)
    };
    h.VERSION = "3.3.1", h.TRANSITION_DURATION = 150, h.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, h.prototype.init = function(a, p, o) {
        this.enabled = !0, this.type = a, this.$element = f(p), this.options = this.getOptions(o), this.$viewport = this.options.viewport && f(this.options.viewport.selector || this.options.viewport);
        for (var n = this.options.trigger.split(" "), m = n.length; m--;) {
            var l = n[m];
            if ("click" == l) {
                this.$element.on("click." + this.type, this.options.selector, f.proxy(this.toggle, this))
            } else {
                if ("manual" != l) {
                    var k = "hover" == l ? "mouseenter" : "focusin",
                        j = "hover" == l ? "mouseleave" : "focusout";
                    this.$element.on(k + "." + this.type, this.options.selector, f.proxy(this.enter, this)), this.$element.on(j + "." + this.type, this.options.selector, f.proxy(this.leave, this))
                }
            }
        }
        this.options.selector ? this._options = f.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, h.prototype.getDefaults = function() {
        return h.DEFAULTS
    }, h.prototype.getOptions = function(a) {
        return a = f.extend({}, this.getDefaults(), this.$element.data(), a), a.delay && "number" == typeof a.delay && (a.delay = {
            show: a.delay,
            hide: a.delay
        }), a
    }, h.prototype.getDelegateOptions = function() {
        var a = {},
            d = this.getDefaults();
        return this._options && f.each(this._options, function(b, c) {
            d[b] != c && (a[b] = c)
        }), a
    }, h.prototype.enter = function(a) {
        var d = a instanceof this.constructor ? a : f(a.currentTarget).data("bs." + this.type);
        return d && d.$tip && d.$tip.is(":visible") ? void(d.hoverState = "in") : (d || (d = new this.constructor(a.currentTarget, this.getDelegateOptions()), f(a.currentTarget).data("bs." + this.type, d)), clearTimeout(d.timeout), d.hoverState = "in", d.options.delay && d.options.delay.show ? void(d.timeout = setTimeout(function() {
            "in" == d.hoverState && d.show()
        }, d.options.delay.show)) : d.show())
    }, h.prototype.leave = function(a) {
        var d = a instanceof this.constructor ? a : f(a.currentTarget).data("bs." + this.type);
        return d || (d = new this.constructor(a.currentTarget, this.getDelegateOptions()), f(a.currentTarget).data("bs." + this.type, d)), clearTimeout(d.timeout), d.hoverState = "out", d.options.delay && d.options.delay.hide ? void(d.timeout = setTimeout(function() {
            "out" == d.hoverState && d.hide()
        }, d.options.delay.hide)) : d.hide()
    }, h.prototype.show = function() {
        var G = f.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(G);
            var F = f.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (G.isDefaultPrevented() || !F) {
                return
            }
            var E = this,
                D = this.tip(),
                C = this.getUID(this.type);
            this.setContent(), D.attr("id", C), this.$element.attr("aria-describedby", C), this.options.animation && D.addClass("fade");
            var B = "function" == typeof this.options.placement ? this.options.placement.call(this, D[0], this.$element[0]) : this.options.placement,
                A = /\s?auto?\s?/i,
                z = A.test(B);
            z && (B = B.replace(A, "") || "top"), D.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(B).data("bs." + this.type, this), this.options.container ? D.appendTo(this.options.container) : D.insertAfter(this.$element);
            var y = this.getPosition(),
                w = D[0].offsetWidth,
                v = D[0].offsetHeight;
            if (z) {
                var u = B,
                    t = this.options.container ? f(this.options.container) : this.$element.parent(),
                    s = this.getPosition(t);
                B = "bottom" == B && y.bottom + v > s.bottom ? "top" : "top" == B && y.top - v < s.top ? "bottom" : "right" == B && y.right + w > s.width ? "left" : "left" == B && y.left - w < s.left ? "right" : B, D.removeClass(u).addClass(B)
            }
            var c = this.getCalculatedOffset(B, y, w, v);
            this.applyPlacement(c, B);
            var a = function() {
                var b = E.hoverState;
                E.$element.trigger("shown.bs." + E.type), E.hoverState = null, "out" == b && E.leave(E)
            };
            f.support.transition && this.$tip.hasClass("fade") ? D.one("bsTransitionEnd", a).emulateTransitionEnd(h.TRANSITION_DURATION) : a()
        }
    }, h.prototype.applyPlacement = function(A, z) {
        var y = this.tip(),
            w = y[0].offsetWidth,
            v = y[0].offsetHeight,
            u = parseInt(y.css("margin-top"), 10),
            t = parseInt(y.css("margin-left"), 10);
        isNaN(u) && (u = 0), isNaN(t) && (t = 0), A.top = A.top + u, A.left = A.left + t, f.offset.setOffset(y[0], f.extend({
            using: function(b) {
                y.css({
                    top: Math.round(b.top),
                    left: Math.round(b.left)
                })
            }
        }, A), 0), y.addClass("in");
        var s = y[0].offsetWidth,
            r = y[0].offsetHeight;
        "top" == z && r != v && (A.top = A.top + v - r);
        var q = this.getViewportAdjustedDelta(z, A, s, r);
        q.left ? A.left += q.left : A.top += q.top;
        var p = /top|bottom/.test(z),
            o = p ? 2 * q.left - w + s : 2 * q.top - v + r,
            a = p ? "offsetWidth" : "offsetHeight";
        y.offset(A), this.replaceArrow(o, y[0][a], p)
    }, h.prototype.replaceArrow = function(i, d, j) {
        this.arrow().css(j ? "left" : "top", 50 * (1 - i / d) + "%").css(j ? "top" : "left", "")
    }, h.prototype.setContent = function() {
        var d = this.tip(),
            c = this.getTitle();
        d.find(".tooltip-inner")[this.options.html ? "html" : "text"](c), d.removeClass("fade in top bottom left right")
    }, h.prototype.hide = function(a) {
        function k() {
            "in" != j.hoverState && i.detach(), j.$element.removeAttr("aria-describedby").trigger("hidden.bs." + j.type), a && a()
        }
        var j = this,
            i = this.tip(),
            c = f.Event("hide.bs." + this.type);
        return this.$element.trigger(c), c.isDefaultPrevented() ? void 0 : (i.removeClass("in"), f.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", k).emulateTransitionEnd(h.TRANSITION_DURATION) : k(), this.hoverState = null, this)
    }, h.prototype.fixTitle = function() {
        var b = this.$element;
        (b.attr("title") || "string" != typeof b.attr("data-original-title")) && b.attr("data-original-title", b.attr("title") || "").attr("title", "")
    }, h.prototype.hasContent = function() {
        return this.getTitle()
    }, h.prototype.getPosition = function(a) {
        a = a || this.$element;
        var n = a[0],
            m = "BODY" == n.tagName,
            l = n.getBoundingClientRect();
        null == l.width && (l = f.extend({}, l, {
            width: l.right - l.left,
            height: l.bottom - l.top
        }));
        var k = m ? {
                top: 0,
                left: 0
            } : a.offset(),
            j = {
                scroll: m ? document.documentElement.scrollTop || document.body.scrollTop : a.scrollTop()
            },
            i = m ? {
                width: f(window).width(),
                height: f(window).height()
            } : null;
        return f.extend({}, l, j, i, k)
    }, h.prototype.getCalculatedOffset = function(j, i, l, k) {
        return "bottom" == j ? {
            top: i.top + i.height,
            left: i.left + i.width / 2 - l / 2
        } : "top" == j ? {
            top: i.top - k,
            left: i.left + i.width / 2 - l / 2
        } : "left" == j ? {
            top: i.top + i.height / 2 - k / 2,
            left: i.left - l
        } : {
            top: i.top + i.height / 2 - k / 2,
            left: i.left + i.width
        }
    }, h.prototype.getViewportAdjustedDelta = function(v, u, t, s) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) {
            return r
        }
        var q = this.options.viewport && this.options.viewport.padding || 0,
            p = this.getPosition(this.$viewport);
        if (/right|left/.test(v)) {
            var o = u.top - q - p.scroll,
                n = u.top + q - p.scroll + s;
            o < p.top ? r.top = p.top - o : n > p.top + p.height && (r.top = p.top + p.height - n)
        } else {
            var m = u.left - q,
                l = u.left + q + t;
            m < p.left ? r.left = p.left - m : l > p.width && (r.left = p.left + p.width - l)
        }
        return r
    }, h.prototype.getTitle = function() {
        var i, d = this.$element,
            j = this.options;
        return i = d.attr("data-original-title") || ("function" == typeof j.title ? j.title.call(d[0]) : j.title)
    }, h.prototype.getUID = function(b) {
        do {
            b += ~~(1000000 * Math.random())
        } while (document.getElementById(b));
        return b
    }, h.prototype.tip = function() {
        return this.$tip = this.$tip || f(this.options.template)
    }, h.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, h.prototype.enable = function() {
        this.enabled = !0
    }, h.prototype.disable = function() {
        this.enabled = !1
    }, h.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, h.prototype.toggle = function(a) {
        var d = this;
        a && (d = f(a.currentTarget).data("bs." + this.type), d || (d = new this.constructor(a.currentTarget, this.getDelegateOptions()), f(a.currentTarget).data("bs." + this.type, d))), d.tip().hasClass("in") ? d.leave(d) : d.enter(d)
    }, h.prototype.destroy = function() {
        var b = this;
        clearTimeout(this.timeout), this.hide(function() {
            b.$element.off("." + b.type).removeData("bs." + b.type)
        })
    };
    var g = f.fn.tooltip;
    f.fn.tooltip = e, f.fn.tooltip.Constructor = h, f.fn.tooltip.noConflict = function() {
        return f.fn.tooltip = g, this
    }
}(jQuery), + function(f) {
    function e(a) {
        return this.each(function() {
            var j = f(this),
                i = j.data("bs.popover"),
                c = "object" == typeof a && a,
                b = c && c.selector;
            (i || "destroy" != a) && (b ? (i || j.data("bs.popover", i = {}), i[b] || (i[b] = new h(this, c))) : i || j.data("bs.popover", i = new h(this, c)), "string" == typeof a && i[a]())
        })
    }
    var h = function(d, c) {
        this.init("popover", d, c)
    };
    if (!f.fn.tooltip) {
        throw new Error("Popover requires tooltip.js")
    }
    h.VERSION = "3.3.1", h.DEFAULTS = f.extend({}, f.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), h.prototype = f.extend({}, f.fn.tooltip.Constructor.prototype), h.prototype.constructor = h, h.prototype.getDefaults = function() {
        return h.DEFAULTS
    }, h.prototype.setContent = function() {
        var i = this.tip(),
            d = this.getTitle(),
            j = this.getContent();
        i.find(".popover-title")[this.options.html ? "html" : "text"](d), i.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof j ? "html" : "append" : "text"](j), i.removeClass("fade top bottom left right in"), i.find(".popover-title").html() || i.find(".popover-title").hide()
    }, h.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, h.prototype.getContent = function() {
        var d = this.$element,
            c = this.options;
        return d.attr("data-content") || ("function" == typeof c.content ? c.content.call(d[0]) : c.content)
    }, h.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, h.prototype.tip = function() {
        return this.$tip || (this.$tip = f(this.options.template)), this.$tip
    };
    var g = f.fn.popover;
    f.fn.popover = e, f.fn.popover.Constructor = h, f.fn.popover.noConflict = function() {
        return f.fn.popover = g, this
    }
}(jQuery), + function(f) {
    function e(i, b) {
        var a = f.proxy(this.process, this);
        this.$body = f("body"), this.$scrollElement = f(f(i).is("body") ? window : i), this.options = f.extend({}, e.DEFAULTS, b), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a), this.refresh(), this.process()
    }

    function h(a) {
        return this.each(function() {
            var i = f(this),
                c = i.data("bs.scrollspy"),
                b = "object" == typeof a && a;
            c || i.data("bs.scrollspy", c = new e(this, b)), "string" == typeof a && c[a]()
        })
    }
    e.VERSION = "3.3.1", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var a = "offset",
            j = 0;
        f.isWindow(this.$scrollElement[0]) || (a = "position", j = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var i = this;
        this.$body.find(this.selector).map(function() {
            var k = f(this),
                c = k.data("target") || k.attr("href"),
                b = /^#./.test(c) && f(c);
            return b && b.length && b.is(":visible") && [
                [b[a]().top + j, c]
            ] || null
        }).sort(function(d, c) {
            return d[0] - c[0]
        }).each(function() {
            i.offsets.push(this[0]), i.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var j, i = this.$scrollElement.scrollTop() + this.options.offset,
            o = this.getScrollHeight(),
            n = this.options.offset + o - this.$scrollElement.height(),
            m = this.offsets,
            l = this.targets,
            k = this.activeTarget;
        if (this.scrollHeight != o && this.refresh(), i >= n) {
            return k != (j = l[l.length - 1]) && this.activate(j)
        }
        if (k && i < m[0]) {
            return this.activeTarget = null, this.clear()
        }
        for (j = m.length; j--;) {
            k != l[j] && i >= m[j] && (!m[j + 1] || i <= m[j + 1]) && this.activate(l[j])
        }
    }, e.prototype.activate = function(a) {
        this.activeTarget = a, this.clear();
        var j = this.selector + '[data-target="' + a + '"],' + this.selector + '[href="' + a + '"]',
            i = f(j).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        f(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var g = f.fn.scrollspy;
    f.fn.scrollspy = h, f.fn.scrollspy.Constructor = e, f.fn.scrollspy.noConflict = function() {
        return f.fn.scrollspy = g, this
    }, f(window).on("load.bs.scrollspy.data-api", function() {
        f('[data-spy="scroll"]').each(function() {
            var a = f(this);
            h.call(a, a.data())
        })
    })
}(jQuery), + function(g) {
    function f(a) {
        return this.each(function() {
            var c = g(this),
                b = c.data("bs.tab");
            b || c.data("bs.tab", b = new j(this)), "string" == typeof a && b[a]()
        })
    }
    var j = function(a) {
        this.element = g(a)
    };
    j.VERSION = "3.3.1", j.TRANSITION_DURATION = 150, j.prototype.show = function() {
        var a = this.element,
            p = a.closest("ul:not(.dropdown-menu)"),
            o = a.data("target");
        if (o || (o = a.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !a.parent("li").hasClass("active")) {
            var n = p.find(".active:last a"),
                m = g.Event("hide.bs.tab", {
                    relatedTarget: a[0]
                }),
                l = g.Event("show.bs.tab", {
                    relatedTarget: n[0]
                });
            if (n.trigger(m), a.trigger(l), !l.isDefaultPrevented() && !m.isDefaultPrevented()) {
                var k = g(o);
                this.activate(a.closest("li"), p), this.activate(k, k.parent(), function() {
                    n.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: a[0]
                    }), a.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, j.prototype.activate = function(a, n, m) {
        function l() {
            k.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), c ? (a[0].offsetWidth, a.addClass("in")) : a.removeClass("fade"), a.parent(".dropdown-menu") && a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), m && m()
        }
        var k = n.find("> .active"),
            c = m && g.support.transition && (k.length && k.hasClass("fade") || !!n.find("> .fade").length);
        k.length && c ? k.one("bsTransitionEnd", l).emulateTransitionEnd(j.TRANSITION_DURATION) : l(), k.removeClass("in")
    };
    var i = g.fn.tab;
    g.fn.tab = f, g.fn.tab.Constructor = j, g.fn.tab.noConflict = function() {
        return g.fn.tab = i, this
    };
    var h = function(a) {
        a.preventDefault(), f.call(g(this), "show")
    };
    g(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', h).on("click.bs.tab.data-api", '[data-toggle="pill"]', h)
}(jQuery), + function(f) {
    function e(a) {
        return this.each(function() {
            var i = f(this),
                c = i.data("bs.affix"),
                b = "object" == typeof a && a;
            c || i.data("bs.affix", c = new h(this, b)), "string" == typeof a && c[a]()
        })
    }
    var h = function(a, c) {
        this.options = f.extend({}, h.DEFAULTS, c), this.$target = f(this.options.target).on("scroll.bs.affix.data-api", f.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", f.proxy(this.checkPositionWithEventLoop, this)), this.$element = f(a), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    h.VERSION = "3.3.1", h.RESET = "affix affix-top affix-bottom", h.DEFAULTS = {
        offset: 0,
        target: window
    }, h.prototype.getState = function(t, s, r, q) {
        var p = this.$target.scrollTop(),
            o = this.$element.offset(),
            n = this.$target.height();
        if (null != r && "top" == this.affixed) {
            return r > p ? "top" : !1
        }
        if ("bottom" == this.affixed) {
            return null != r ? p + this.unpin <= o.top ? !1 : "bottom" : t - q >= p + n ? !1 : "bottom"
        }
        var m = null == this.affixed,
            l = m ? p : o.top,
            k = m ? n : s;
        return null != r && r >= l ? "top" : null != q && l + k >= t - q ? "bottom" : !1
    }, h.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) {
            return this.pinnedOffset
        }
        this.$element.removeClass(h.RESET).addClass("affix");
        var d = this.$target.scrollTop(),
            c = this.$element.offset();
        return this.pinnedOffset = c.top - d
    }, h.prototype.checkPositionWithEventLoop = function() {
        setTimeout(f.proxy(this.checkPosition, this), 1)
    }, h.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var a = this.$element.height(),
                p = this.options.offset,
                o = p.top,
                n = p.bottom,
                m = f("body").height();
            "object" != typeof p && (n = o = p), "function" == typeof o && (o = p.top(this.$element)), "function" == typeof n && (n = p.bottom(this.$element));
            var l = this.getState(m, a, o, n);
            if (this.affixed != l) {
                null != this.unpin && this.$element.css("top", "");
                var k = "affix" + (l ? "-" + l : ""),
                    c = f.Event(k + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) {
                    return
                }
                this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(h.RESET).addClass(k).trigger(k.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == l && this.$element.offset({
                top: m - a - n
            })
        }
    };
    var g = f.fn.affix;
    f.fn.affix = e, f.fn.affix.Constructor = h, f.fn.affix.noConflict = function() {
        return f.fn.affix = g, this
    }, f(window).on("load", function() {
        f('[data-spy="affix"]').each(function() {
            var b = f(this),
                a = b.data();
            a.offset = a.offset || {}, null != a.offsetBottom && (a.offset.bottom = a.offsetBottom), null != a.offsetTop && (a.offset.top = a.offsetTop), e.call(b, a)
        })
    })
}(jQuery);
/*
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */
(function() {
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var a = document.createElement("style");
        a.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));
        document.querySelector("head").appendChild(a)
    }
})();
! function(b) {
    "undefined" == typeof b.fn.each2 && b.extend(b.fn, {
        each2: function(a) {
            for (var h = b([0]), g = -1, f = this.length; ++g < f && (h.context = h[0] = this[g]) && a.call(h[0], g, h) !== !1;) {}
            return this
        }
    })
}(jQuery),
function(aE, aD) {
    function aq(a) {
        var d = aE(document.createTextNode(""));
        a.before(d), d.before(a), d.remove()
    }

    function ap(d) {
        function c(b) {
            return ar[b] || b
        }
        return d.replace(/[^\u0000-\u007E]/g, c)
    }

    function ao(f, e) {
        for (var h = 0, g = e.length; g > h; h += 1) {
            if (am(f, e[h])) {
                return h
            }
        }
        return -1
    }

    function an() {
        var a = aE(at);
        a.appendTo(document.body);
        var d = {
            width: a.width() - a[0].clientWidth,
            height: a.height() - a[0].clientHeight
        };
        return a.remove(), d
    }

    function am(b, d) {
        return b === d ? !0 : b === aD || d === aD ? !1 : null === b || null === d ? !1 : b.constructor === String ? b + "" == d + "" : d.constructor === String ? d + "" == b + "" : !1
    }

    function al(h, g, l) {
        var k, j, i;
        if (null === h || h.length < 1) {
            return []
        }
        for (k = h.split(g), j = 0, i = k.length; i > j; j += 1) {
            k[j] = l(k[j])
        }
        return k
    }

    function ak(b) {
        return b.outerWidth(!1) - b.width()
    }

    function aj(b) {
        var a = "keyup-change-value";
        b.on("keydown", function() {
            aE.data(b, a) === aD && aE.data(b, a, b.val())
        }), b.on("keyup", function() {
            var c = aE.data(b, a);
            c !== aD && b.val() !== c && (aE.removeData(b, a), b.trigger("keyup-change"))
        })
    }

    function ai(a) {
        a.on("mousemove", function(e) {
            var b = ax;
            (b === aD || b.x !== e.pageX || b.y !== e.pageY) && aE(e.target).trigger("mousemove-filtered", e)
        })
    }

    function ah(b, h, g) {
        g = g || aD;
        var f;
        return function() {
            var a = arguments;
            window.clearTimeout(f), f = window.setTimeout(function() {
                h.apply(g, a)
            }, b)
        }
    }

    function ag(e, d) {
        var f = ah(e, function(b) {
            d.trigger("scroll-debounced", b)
        });
        d.on("scroll", function(b) {
            ao(b.target, d.get()) >= 0 && f(b)
        })
    }

    function af(b) {
        b[0] !== document.activeElement && window.setTimeout(function() {
            var g, a = b[0],
                h = b.val().length;
            b.focus();
            var f = a.offsetWidth > 0 || a.offsetHeight > 0;
            f && a === document.activeElement && (a.setSelectionRange ? a.setSelectionRange(h, h) : a.createTextRange && (g = a.createTextRange(), g.collapse(!1), g.select()))
        }, 0)
    }

    function ae(a) {
        a = aE(a)[0];
        var h = 0,
            g = 0;
        if ("selectionStart" in a) {
            h = a.selectionStart, g = a.selectionEnd - h
        } else {
            if ("selection" in document) {
                a.focus();
                var f = document.selection.createRange();
                g = document.selection.createRange().text.length, f.moveStart("character", -a.value.length), h = f.text.length - g
            }
        }
        return {
            offset: h,
            length: g
        }
    }

    function ad(b) {
        b.preventDefault(), b.stopPropagation()
    }

    function ac(b) {
        b.preventDefault(), b.stopImmediatePropagation()
    }

    function ab(a) {
        if (!ay) {
            var d = a[0].currentStyle || window.getComputedStyle(a[0], null);
            ay = aE(document.createElement("div")).css({
                position: "absolute",
                left: "-10000px",
                top: "-10000px",
                display: "none",
                fontSize: d.fontSize,
                fontFamily: d.fontFamily,
                fontStyle: d.fontStyle,
                fontWeight: d.fontWeight,
                letterSpacing: d.letterSpacing,
                textTransform: d.textTransform,
                whiteSpace: "nowrap"
            }), ay.attr("class", "select2-sizer"), aE(document.body).append(ay)
        }
        return ay.text(a.val()), ay.width()
    }

    function aa(a, l, k) {
        var j, h, i = [];
        j = aE.trim(a.attr("class")), j && (j = "" + j, aE(j.split(/\s+/)).each2(function() {
            0 === this.indexOf("select2-") && i.push(this)
        })), j = aE.trim(l.attr("class")), j && (j = "" + j, aE(j.split(/\s+/)).each2(function() {
            0 !== this.indexOf("select2-") && (h = k(this), h && i.push(h))
        })), a.attr("class", i.join(" "))
    }

    function Z(h, g, l, k) {
        var j = ap(h.toUpperCase()).indexOf(ap(g.toUpperCase())),
            i = g.length;
        return 0 > j ? (l.push(k(h)), void 0) : (l.push(k(h.substring(0, j))), l.push("<span class='select2-match'>"), l.push(k(h.substring(j, j + i))), l.push("</span>"), l.push(k(h.substring(j + i, h.length))), void 0)
    }

    function Y(d) {
        var c = {
            "\\": "&#92;",
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#47;"
        };
        return String(d).replace(/[&<>"'\/\\]/g, function(b) {
            return c[b]
        })
    }

    function X(l) {
        var k, j = null,
            i = l.quietMillis || 100,
            b = l.url,
            a = this;
        return function(c) {
            window.clearTimeout(k), k = window.setTimeout(function() {
                var n = l.data,
                    m = b,
                    h = l.transport || aE.fn.select2.ajaxDefaults.transport,
                    g = {
                        type: l.type || "GET",
                        cache: l.cache || !1,
                        jsonpCallback: l.jsonpCallback || aD,
                        dataType: l.dataType || "json"
                    },
                    e = aE.extend({}, aE.fn.select2.ajaxDefaults.params, g);
                n = n ? n.call(a, c.term, c.page, c.context) : null, m = "function" == typeof m ? m.call(a, c.term, c.page, c.context) : m, j && "function" == typeof j.abort && j.abort(), l.params && (aE.isFunction(l.params) ? aE.extend(e, l.params.call(a)) : aE.extend(e, l.params)), aE.extend(e, {
                    url: m,
                    dataType: l.dataType,
                    data: n,
                    success: function(f) {
                        var d = l.results(f, c.page, c);
                        c.callback(d)
                    },
                    error: function(o, f, q) {
                        var p = {
                            hasError: !0,
                            jqXHR: o,
                            textStatus: f,
                            errorThrown: q
                        };
                        c.callback(p)
                    }
                }), j = h.call(a, e)
            }, i)
        }
    }

    function W(a) {
        var k, j, l = a,
            i = function(b) {
                return "" + b.text
            };
        aE.isArray(l) && (j = l, l = {
            results: j
        }), aE.isFunction(l) === !1 && (j = l, l = function() {
            return j
        });
        var h = l();
        return h.text && (i = h.text, aE.isFunction(i) || (k = h.text, i = function(b) {
                return b[k]
            })),
            function(c) {
                var f, n = c.term,
                    m = {
                        results: []
                    };
                return "" === n ? (c.callback(l()), void 0) : (f = function(o, g) {
                    var d, b;
                    if (o = o[0], o.children) {
                        d = {};
                        for (b in o) {
                            o.hasOwnProperty(b) && (d[b] = o[b])
                        }
                        d.children = [], aE(o.children).each2(function(p, e) {
                            f(e, d.children)
                        }), (d.children.length || c.matcher(n, i(d), o)) && g.push(d)
                    } else {
                        c.matcher(n, i(o), o) && g.push(o)
                    }
                }, aE(l().results).each2(function(e, d) {
                    f(d, m.results)
                }), c.callback(m), void 0)
            }
    }

    function V(b) {
        var a = aE.isFunction(b);
        return function(j) {
            var i = j.term,
                d = {
                    results: []
                },
                c = a ? b(j) : b;
            aE.isArray(c) && (aE(c).each(function() {
                var e = this.text !== aD,
                    f = e ? this.text : this;
                ("" === i || j.matcher(i, f)) && d.results.push(e ? this : {
                    id: this,
                    text: this
                })
            }), j.callback(d))
        }
    }

    function U(a, d) {
        if (aE.isFunction(a)) {
            return !0
        }
        if (!a) {
            return !1
        }
        if ("string" == typeof a) {
            return !0
        }
        throw new Error(d + " must be a string, function, or falsy value")
    }

    function T(a, f) {
        if (aE.isFunction(a)) {
            var e = Array.prototype.slice.call(arguments, 2);
            return a.apply(f, e)
        }
        return a
    }

    function S(a) {
        var d = 0;
        return aE.each(a, function(e, c) {
            c.children ? d += S(c.children) : d++
        }), d
    }

    function R(v, u, t, s) {
        var p, o, n, m, b, r = v,
            q = !1;
        if (!s.createSearchChoice || !s.tokenSeparators || s.tokenSeparators.length < 1) {
            return aD
        }
        for (;;) {
            for (o = -1, n = 0, m = s.tokenSeparators.length; m > n && (b = s.tokenSeparators[n], o = v.indexOf(b), !(o >= 0)); n++) {}
            if (0 > o) {
                break
            }
            if (p = v.substring(0, o), v = v.substring(o + b.length), p.length > 0 && (p = s.createSearchChoice.call(this, p, u), p !== aD && null !== p && s.id(p) !== aD && null !== s.id(p))) {
                for (q = !1, n = 0, m = u.length; m > n; n++) {
                    if (am(s.id(p), s.id(u[n]))) {
                        q = !0;
                        break
                    }
                }
                q || t(p)
            }
        }
        return r !== v ? v : void 0
    }

    function Q() {
        var a = this;
        aE.each(arguments, function(b, d) {
            a[d].remove(), a[d] = null
        })
    }

    function P(a, f) {
        var e = function() {};
        return e.prototype = new a, e.prototype.constructor = e, e.prototype.parent = a.prototype, e.prototype = aE.extend(e.prototype, f), e
    }
    if (window.Select2 === aD) {
        var aC, aB, aA, az, ay, aw, av, ax = {
                x: 0,
                y: 0
            },
            au = {
                TAB: 9,
                ENTER: 13,
                ESC: 27,
                SPACE: 32,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                HOME: 36,
                END: 35,
                BACKSPACE: 8,
                DELETE: 46,
                isArrow: function(b) {
                    switch (b = b.which ? b.which : b) {
                        case au.LEFT:
                        case au.RIGHT:
                        case au.UP:
                        case au.DOWN:
                            return !0
                    }
                    return !1
                },
                isControl: function(d) {
                    var c = d.which;
                    switch (c) {
                        case au.SHIFT:
                        case au.CTRL:
                        case au.ALT:
                            return !0
                    }
                    return d.metaKey ? !0 : !1
                },
                isFunctionKey: function(b) {
                    return b = b.which ? b.which : b, b >= 112 && 123 >= b
                }
            },
            at = "<div class='select2-measure-scrollbar'></div>",
            ar = {
                "\u24b6": "A",
                "\uff21": "A",
                "\xc0": "A",
                "\xc1": "A",
                "\xc2": "A",
                "\u1ea6": "A",
                "\u1ea4": "A",
                "\u1eaa": "A",
                "\u1ea8": "A",
                "\xc3": "A",
                "\u0100": "A",
                "\u0102": "A",
                "\u1eb0": "A",
                "\u1eae": "A",
                "\u1eb4": "A",
                "\u1eb2": "A",
                "\u0226": "A",
                "\u01e0": "A",
                "\xc4": "A",
                "\u01de": "A",
                "\u1ea2": "A",
                "\xc5": "A",
                "\u01fa": "A",
                "\u01cd": "A",
                "\u0200": "A",
                "\u0202": "A",
                "\u1ea0": "A",
                "\u1eac": "A",
                "\u1eb6": "A",
                "\u1e00": "A",
                "\u0104": "A",
                "\u023a": "A",
                "\u2c6f": "A",
                "\ua732": "AA",
                "\xc6": "AE",
                "\u01fc": "AE",
                "\u01e2": "AE",
                "\ua734": "AO",
                "\ua736": "AU",
                "\ua738": "AV",
                "\ua73a": "AV",
                "\ua73c": "AY",
                "\u24b7": "B",
                "\uff22": "B",
                "\u1e02": "B",
                "\u1e04": "B",
                "\u1e06": "B",
                "\u0243": "B",
                "\u0182": "B",
                "\u0181": "B",
                "\u24b8": "C",
                "\uff23": "C",
                "\u0106": "C",
                "\u0108": "C",
                "\u010a": "C",
                "\u010c": "C",
                "\xc7": "C",
                "\u1e08": "C",
                "\u0187": "C",
                "\u023b": "C",
                "\ua73e": "C",
                "\u24b9": "D",
                "\uff24": "D",
                "\u1e0a": "D",
                "\u010e": "D",
                "\u1e0c": "D",
                "\u1e10": "D",
                "\u1e12": "D",
                "\u1e0e": "D",
                "\u0110": "D",
                "\u018b": "D",
                "\u018a": "D",
                "\u0189": "D",
                "\ua779": "D",
                "\u01f1": "DZ",
                "\u01c4": "DZ",
                "\u01f2": "Dz",
                "\u01c5": "Dz",
                "\u24ba": "E",
                "\uff25": "E",
                "\xc8": "E",
                "\xc9": "E",
                "\xca": "E",
                "\u1ec0": "E",
                "\u1ebe": "E",
                "\u1ec4": "E",
                "\u1ec2": "E",
                "\u1ebc": "E",
                "\u0112": "E",
                "\u1e14": "E",
                "\u1e16": "E",
                "\u0114": "E",
                "\u0116": "E",
                "\xcb": "E",
                "\u1eba": "E",
                "\u011a": "E",
                "\u0204": "E",
                "\u0206": "E",
                "\u1eb8": "E",
                "\u1ec6": "E",
                "\u0228": "E",
                "\u1e1c": "E",
                "\u0118": "E",
                "\u1e18": "E",
                "\u1e1a": "E",
                "\u0190": "E",
                "\u018e": "E",
                "\u24bb": "F",
                "\uff26": "F",
                "\u1e1e": "F",
                "\u0191": "F",
                "\ua77b": "F",
                "\u24bc": "G",
                "\uff27": "G",
                "\u01f4": "G",
                "\u011c": "G",
                "\u1e20": "G",
                "\u011e": "G",
                "\u0120": "G",
                "\u01e6": "G",
                "\u0122": "G",
                "\u01e4": "G",
                "\u0193": "G",
                "\ua7a0": "G",
                "\ua77d": "G",
                "\ua77e": "G",
                "\u24bd": "H",
                "\uff28": "H",
                "\u0124": "H",
                "\u1e22": "H",
                "\u1e26": "H",
                "\u021e": "H",
                "\u1e24": "H",
                "\u1e28": "H",
                "\u1e2a": "H",
                "\u0126": "H",
                "\u2c67": "H",
                "\u2c75": "H",
                "\ua78d": "H",
                "\u24be": "I",
                "\uff29": "I",
                "\xcc": "I",
                "\xcd": "I",
                "\xce": "I",
                "\u0128": "I",
                "\u012a": "I",
                "\u012c": "I",
                "\u0130": "I",
                "\xcf": "I",
                "\u1e2e": "I",
                "\u1ec8": "I",
                "\u01cf": "I",
                "\u0208": "I",
                "\u020a": "I",
                "\u1eca": "I",
                "\u012e": "I",
                "\u1e2c": "I",
                "\u0197": "I",
                "\u24bf": "J",
                "\uff2a": "J",
                "\u0134": "J",
                "\u0248": "J",
                "\u24c0": "K",
                "\uff2b": "K",
                "\u1e30": "K",
                "\u01e8": "K",
                "\u1e32": "K",
                "\u0136": "K",
                "\u1e34": "K",
                "\u0198": "K",
                "\u2c69": "K",
                "\ua740": "K",
                "\ua742": "K",
                "\ua744": "K",
                "\ua7a2": "K",
                "\u24c1": "L",
                "\uff2c": "L",
                "\u013f": "L",
                "\u0139": "L",
                "\u013d": "L",
                "\u1e36": "L",
                "\u1e38": "L",
                "\u013b": "L",
                "\u1e3c": "L",
                "\u1e3a": "L",
                "\u0141": "L",
                "\u023d": "L",
                "\u2c62": "L",
                "\u2c60": "L",
                "\ua748": "L",
                "\ua746": "L",
                "\ua780": "L",
                "\u01c7": "LJ",
                "\u01c8": "Lj",
                "\u24c2": "M",
                "\uff2d": "M",
                "\u1e3e": "M",
                "\u1e40": "M",
                "\u1e42": "M",
                "\u2c6e": "M",
                "\u019c": "M",
                "\u24c3": "N",
                "\uff2e": "N",
                "\u01f8": "N",
                "\u0143": "N",
                "\xd1": "N",
                "\u1e44": "N",
                "\u0147": "N",
                "\u1e46": "N",
                "\u0145": "N",
                "\u1e4a": "N",
                "\u1e48": "N",
                "\u0220": "N",
                "\u019d": "N",
                "\ua790": "N",
                "\ua7a4": "N",
                "\u01ca": "NJ",
                "\u01cb": "Nj",
                "\u24c4": "O",
                "\uff2f": "O",
                "\xd2": "O",
                "\xd3": "O",
                "\xd4": "O",
                "\u1ed2": "O",
                "\u1ed0": "O",
                "\u1ed6": "O",
                "\u1ed4": "O",
                "\xd5": "O",
                "\u1e4c": "O",
                "\u022c": "O",
                "\u1e4e": "O",
                "\u014c": "O",
                "\u1e50": "O",
                "\u1e52": "O",
                "\u014e": "O",
                "\u022e": "O",
                "\u0230": "O",
                "\xd6": "O",
                "\u022a": "O",
                "\u1ece": "O",
                "\u0150": "O",
                "\u01d1": "O",
                "\u020c": "O",
                "\u020e": "O",
                "\u01a0": "O",
                "\u1edc": "O",
                "\u1eda": "O",
                "\u1ee0": "O",
                "\u1ede": "O",
                "\u1ee2": "O",
                "\u1ecc": "O",
                "\u1ed8": "O",
                "\u01ea": "O",
                "\u01ec": "O",
                "\xd8": "O",
                "\u01fe": "O",
                "\u0186": "O",
                "\u019f": "O",
                "\ua74a": "O",
                "\ua74c": "O",
                "\u01a2": "OI",
                "\ua74e": "OO",
                "\u0222": "OU",
                "\u24c5": "P",
                "\uff30": "P",
                "\u1e54": "P",
                "\u1e56": "P",
                "\u01a4": "P",
                "\u2c63": "P",
                "\ua750": "P",
                "\ua752": "P",
                "\ua754": "P",
                "\u24c6": "Q",
                "\uff31": "Q",
                "\ua756": "Q",
                "\ua758": "Q",
                "\u024a": "Q",
                "\u24c7": "R",
                "\uff32": "R",
                "\u0154": "R",
                "\u1e58": "R",
                "\u0158": "R",
                "\u0210": "R",
                "\u0212": "R",
                "\u1e5a": "R",
                "\u1e5c": "R",
                "\u0156": "R",
                "\u1e5e": "R",
                "\u024c": "R",
                "\u2c64": "R",
                "\ua75a": "R",
                "\ua7a6": "R",
                "\ua782": "R",
                "\u24c8": "S",
                "\uff33": "S",
                "\u1e9e": "S",
                "\u015a": "S",
                "\u1e64": "S",
                "\u015c": "S",
                "\u1e60": "S",
                "\u0160": "S",
                "\u1e66": "S",
                "\u1e62": "S",
                "\u1e68": "S",
                "\u0218": "S",
                "\u015e": "S",
                "\u2c7e": "S",
                "\ua7a8": "S",
                "\ua784": "S",
                "\u24c9": "T",
                "\uff34": "T",
                "\u1e6a": "T",
                "\u0164": "T",
                "\u1e6c": "T",
                "\u021a": "T",
                "\u0162": "T",
                "\u1e70": "T",
                "\u1e6e": "T",
                "\u0166": "T",
                "\u01ac": "T",
                "\u01ae": "T",
                "\u023e": "T",
                "\ua786": "T",
                "\ua728": "TZ",
                "\u24ca": "U",
                "\uff35": "U",
                "\xd9": "U",
                "\xda": "U",
                "\xdb": "U",
                "\u0168": "U",
                "\u1e78": "U",
                "\u016a": "U",
                "\u1e7a": "U",
                "\u016c": "U",
                "\xdc": "U",
                "\u01db": "U",
                "\u01d7": "U",
                "\u01d5": "U",
                "\u01d9": "U",
                "\u1ee6": "U",
                "\u016e": "U",
                "\u0170": "U",
                "\u01d3": "U",
                "\u0214": "U",
                "\u0216": "U",
                "\u01af": "U",
                "\u1eea": "U",
                "\u1ee8": "U",
                "\u1eee": "U",
                "\u1eec": "U",
                "\u1ef0": "U",
                "\u1ee4": "U",
                "\u1e72": "U",
                "\u0172": "U",
                "\u1e76": "U",
                "\u1e74": "U",
                "\u0244": "U",
                "\u24cb": "V",
                "\uff36": "V",
                "\u1e7c": "V",
                "\u1e7e": "V",
                "\u01b2": "V",
                "\ua75e": "V",
                "\u0245": "V",
                "\ua760": "VY",
                "\u24cc": "W",
                "\uff37": "W",
                "\u1e80": "W",
                "\u1e82": "W",
                "\u0174": "W",
                "\u1e86": "W",
                "\u1e84": "W",
                "\u1e88": "W",
                "\u2c72": "W",
                "\u24cd": "X",
                "\uff38": "X",
                "\u1e8a": "X",
                "\u1e8c": "X",
                "\u24ce": "Y",
                "\uff39": "Y",
                "\u1ef2": "Y",
                "\xdd": "Y",
                "\u0176": "Y",
                "\u1ef8": "Y",
                "\u0232": "Y",
                "\u1e8e": "Y",
                "\u0178": "Y",
                "\u1ef6": "Y",
                "\u1ef4": "Y",
                "\u01b3": "Y",
                "\u024e": "Y",
                "\u1efe": "Y",
                "\u24cf": "Z",
                "\uff3a": "Z",
                "\u0179": "Z",
                "\u1e90": "Z",
                "\u017b": "Z",
                "\u017d": "Z",
                "\u1e92": "Z",
                "\u1e94": "Z",
                "\u01b5": "Z",
                "\u0224": "Z",
                "\u2c7f": "Z",
                "\u2c6b": "Z",
                "\ua762": "Z",
                "\u24d0": "a",
                "\uff41": "a",
                "\u1e9a": "a",
                "\xe0": "a",
                "\xe1": "a",
                "\xe2": "a",
                "\u1ea7": "a",
                "\u1ea5": "a",
                "\u1eab": "a",
                "\u1ea9": "a",
                "\xe3": "a",
                "\u0101": "a",
                "\u0103": "a",
                "\u1eb1": "a",
                "\u1eaf": "a",
                "\u1eb5": "a",
                "\u1eb3": "a",
                "\u0227": "a",
                "\u01e1": "a",
                "\xe4": "a",
                "\u01df": "a",
                "\u1ea3": "a",
                "\xe5": "a",
                "\u01fb": "a",
                "\u01ce": "a",
                "\u0201": "a",
                "\u0203": "a",
                "\u1ea1": "a",
                "\u1ead": "a",
                "\u1eb7": "a",
                "\u1e01": "a",
                "\u0105": "a",
                "\u2c65": "a",
                "\u0250": "a",
                "\ua733": "aa",
                "\xe6": "ae",
                "\u01fd": "ae",
                "\u01e3": "ae",
                "\ua735": "ao",
                "\ua737": "au",
                "\ua739": "av",
                "\ua73b": "av",
                "\ua73d": "ay",
                "\u24d1": "b",
                "\uff42": "b",
                "\u1e03": "b",
                "\u1e05": "b",
                "\u1e07": "b",
                "\u0180": "b",
                "\u0183": "b",
                "\u0253": "b",
                "\u24d2": "c",
                "\uff43": "c",
                "\u0107": "c",
                "\u0109": "c",
                "\u010b": "c",
                "\u010d": "c",
                "\xe7": "c",
                "\u1e09": "c",
                "\u0188": "c",
                "\u023c": "c",
                "\ua73f": "c",
                "\u2184": "c",
                "\u24d3": "d",
                "\uff44": "d",
                "\u1e0b": "d",
                "\u010f": "d",
                "\u1e0d": "d",
                "\u1e11": "d",
                "\u1e13": "d",
                "\u1e0f": "d",
                "\u0111": "d",
                "\u018c": "d",
                "\u0256": "d",
                "\u0257": "d",
                "\ua77a": "d",
                "\u01f3": "dz",
                "\u01c6": "dz",
                "\u24d4": "e",
                "\uff45": "e",
                "\xe8": "e",
                "\xe9": "e",
                "\xea": "e",
                "\u1ec1": "e",
                "\u1ebf": "e",
                "\u1ec5": "e",
                "\u1ec3": "e",
                "\u1ebd": "e",
                "\u0113": "e",
                "\u1e15": "e",
                "\u1e17": "e",
                "\u0115": "e",
                "\u0117": "e",
                "\xeb": "e",
                "\u1ebb": "e",
                "\u011b": "e",
                "\u0205": "e",
                "\u0207": "e",
                "\u1eb9": "e",
                "\u1ec7": "e",
                "\u0229": "e",
                "\u1e1d": "e",
                "\u0119": "e",
                "\u1e19": "e",
                "\u1e1b": "e",
                "\u0247": "e",
                "\u025b": "e",
                "\u01dd": "e",
                "\u24d5": "f",
                "\uff46": "f",
                "\u1e1f": "f",
                "\u0192": "f",
                "\ua77c": "f",
                "\u24d6": "g",
                "\uff47": "g",
                "\u01f5": "g",
                "\u011d": "g",
                "\u1e21": "g",
                "\u011f": "g",
                "\u0121": "g",
                "\u01e7": "g",
                "\u0123": "g",
                "\u01e5": "g",
                "\u0260": "g",
                "\ua7a1": "g",
                "\u1d79": "g",
                "\ua77f": "g",
                "\u24d7": "h",
                "\uff48": "h",
                "\u0125": "h",
                "\u1e23": "h",
                "\u1e27": "h",
                "\u021f": "h",
                "\u1e25": "h",
                "\u1e29": "h",
                "\u1e2b": "h",
                "\u1e96": "h",
                "\u0127": "h",
                "\u2c68": "h",
                "\u2c76": "h",
                "\u0265": "h",
                "\u0195": "hv",
                "\u24d8": "i",
                "\uff49": "i",
                "\xec": "i",
                "\xed": "i",
                "\xee": "i",
                "\u0129": "i",
                "\u012b": "i",
                "\u012d": "i",
                "\xef": "i",
                "\u1e2f": "i",
                "\u1ec9": "i",
                "\u01d0": "i",
                "\u0209": "i",
                "\u020b": "i",
                "\u1ecb": "i",
                "\u012f": "i",
                "\u1e2d": "i",
                "\u0268": "i",
                "\u0131": "i",
                "\u24d9": "j",
                "\uff4a": "j",
                "\u0135": "j",
                "\u01f0": "j",
                "\u0249": "j",
                "\u24da": "k",
                "\uff4b": "k",
                "\u1e31": "k",
                "\u01e9": "k",
                "\u1e33": "k",
                "\u0137": "k",
                "\u1e35": "k",
                "\u0199": "k",
                "\u2c6a": "k",
                "\ua741": "k",
                "\ua743": "k",
                "\ua745": "k",
                "\ua7a3": "k",
                "\u24db": "l",
                "\uff4c": "l",
                "\u0140": "l",
                "\u013a": "l",
                "\u013e": "l",
                "\u1e37": "l",
                "\u1e39": "l",
                "\u013c": "l",
                "\u1e3d": "l",
                "\u1e3b": "l",
                "\u017f": "l",
                "\u0142": "l",
                "\u019a": "l",
                "\u026b": "l",
                "\u2c61": "l",
                "\ua749": "l",
                "\ua781": "l",
                "\ua747": "l",
                "\u01c9": "lj",
                "\u24dc": "m",
                "\uff4d": "m",
                "\u1e3f": "m",
                "\u1e41": "m",
                "\u1e43": "m",
                "\u0271": "m",
                "\u026f": "m",
                "\u24dd": "n",
                "\uff4e": "n",
                "\u01f9": "n",
                "\u0144": "n",
                "\xf1": "n",
                "\u1e45": "n",
                "\u0148": "n",
                "\u1e47": "n",
                "\u0146": "n",
                "\u1e4b": "n",
                "\u1e49": "n",
                "\u019e": "n",
                "\u0272": "n",
                "\u0149": "n",
                "\ua791": "n",
                "\ua7a5": "n",
                "\u01cc": "nj",
                "\u24de": "o",
                "\uff4f": "o",
                "\xf2": "o",
                "\xf3": "o",
                "\xf4": "o",
                "\u1ed3": "o",
                "\u1ed1": "o",
                "\u1ed7": "o",
                "\u1ed5": "o",
                "\xf5": "o",
                "\u1e4d": "o",
                "\u022d": "o",
                "\u1e4f": "o",
                "\u014d": "o",
                "\u1e51": "o",
                "\u1e53": "o",
                "\u014f": "o",
                "\u022f": "o",
                "\u0231": "o",
                "\xf6": "o",
                "\u022b": "o",
                "\u1ecf": "o",
                "\u0151": "o",
                "\u01d2": "o",
                "\u020d": "o",
                "\u020f": "o",
                "\u01a1": "o",
                "\u1edd": "o",
                "\u1edb": "o",
                "\u1ee1": "o",
                "\u1edf": "o",
                "\u1ee3": "o",
                "\u1ecd": "o",
                "\u1ed9": "o",
                "\u01eb": "o",
                "\u01ed": "o",
                "\xf8": "o",
                "\u01ff": "o",
                "\u0254": "o",
                "\ua74b": "o",
                "\ua74d": "o",
                "\u0275": "o",
                "\u01a3": "oi",
                "\u0223": "ou",
                "\ua74f": "oo",
                "\u24df": "p",
                "\uff50": "p",
                "\u1e55": "p",
                "\u1e57": "p",
                "\u01a5": "p",
                "\u1d7d": "p",
                "\ua751": "p",
                "\ua753": "p",
                "\ua755": "p",
                "\u24e0": "q",
                "\uff51": "q",
                "\u024b": "q",
                "\ua757": "q",
                "\ua759": "q",
                "\u24e1": "r",
                "\uff52": "r",
                "\u0155": "r",
                "\u1e59": "r",
                "\u0159": "r",
                "\u0211": "r",
                "\u0213": "r",
                "\u1e5b": "r",
                "\u1e5d": "r",
                "\u0157": "r",
                "\u1e5f": "r",
                "\u024d": "r",
                "\u027d": "r",
                "\ua75b": "r",
                "\ua7a7": "r",
                "\ua783": "r",
                "\u24e2": "s",
                "\uff53": "s",
                "\xdf": "s",
                "\u015b": "s",
                "\u1e65": "s",
                "\u015d": "s",
                "\u1e61": "s",
                "\u0161": "s",
                "\u1e67": "s",
                "\u1e63": "s",
                "\u1e69": "s",
                "\u0219": "s",
                "\u015f": "s",
                "\u023f": "s",
                "\ua7a9": "s",
                "\ua785": "s",
                "\u1e9b": "s",
                "\u24e3": "t",
                "\uff54": "t",
                "\u1e6b": "t",
                "\u1e97": "t",
                "\u0165": "t",
                "\u1e6d": "t",
                "\u021b": "t",
                "\u0163": "t",
                "\u1e71": "t",
                "\u1e6f": "t",
                "\u0167": "t",
                "\u01ad": "t",
                "\u0288": "t",
                "\u2c66": "t",
                "\ua787": "t",
                "\ua729": "tz",
                "\u24e4": "u",
                "\uff55": "u",
                "\xf9": "u",
                "\xfa": "u",
                "\xfb": "u",
                "\u0169": "u",
                "\u1e79": "u",
                "\u016b": "u",
                "\u1e7b": "u",
                "\u016d": "u",
                "\xfc": "u",
                "\u01dc": "u",
                "\u01d8": "u",
                "\u01d6": "u",
                "\u01da": "u",
                "\u1ee7": "u",
                "\u016f": "u",
                "\u0171": "u",
                "\u01d4": "u",
                "\u0215": "u",
                "\u0217": "u",
                "\u01b0": "u",
                "\u1eeb": "u",
                "\u1ee9": "u",
                "\u1eef": "u",
                "\u1eed": "u",
                "\u1ef1": "u",
                "\u1ee5": "u",
                "\u1e73": "u",
                "\u0173": "u",
                "\u1e77": "u",
                "\u1e75": "u",
                "\u0289": "u",
                "\u24e5": "v",
                "\uff56": "v",
                "\u1e7d": "v",
                "\u1e7f": "v",
                "\u028b": "v",
                "\ua75f": "v",
                "\u028c": "v",
                "\ua761": "vy",
                "\u24e6": "w",
                "\uff57": "w",
                "\u1e81": "w",
                "\u1e83": "w",
                "\u0175": "w",
                "\u1e87": "w",
                "\u1e85": "w",
                "\u1e98": "w",
                "\u1e89": "w",
                "\u2c73": "w",
                "\u24e7": "x",
                "\uff58": "x",
                "\u1e8b": "x",
                "\u1e8d": "x",
                "\u24e8": "y",
                "\uff59": "y",
                "\u1ef3": "y",
                "\xfd": "y",
                "\u0177": "y",
                "\u1ef9": "y",
                "\u0233": "y",
                "\u1e8f": "y",
                "\xff": "y",
                "\u1ef7": "y",
                "\u1e99": "y",
                "\u1ef5": "y",
                "\u01b4": "y",
                "\u024f": "y",
                "\u1eff": "y",
                "\u24e9": "z",
                "\uff5a": "z",
                "\u017a": "z",
                "\u1e91": "z",
                "\u017c": "z",
                "\u017e": "z",
                "\u1e93": "z",
                "\u1e95": "z",
                "\u01b6": "z",
                "\u0225": "z",
                "\u0240": "z",
                "\u2c6c": "z",
                "\ua763": "z",
                "\u0386": "\u0391",
                "\u0388": "\u0395",
                "\u0389": "\u0397",
                "\u038a": "\u0399",
                "\u03aa": "\u0399",
                "\u038c": "\u039f",
                "\u038e": "\u03a5",
                "\u03ab": "\u03a5",
                "\u038f": "\u03a9",
                "\u03ac": "\u03b1",
                "\u03ad": "\u03b5",
                "\u03ae": "\u03b7",
                "\u03af": "\u03b9",
                "\u03ca": "\u03b9",
                "\u0390": "\u03b9",
                "\u03cc": "\u03bf",
                "\u03cd": "\u03c5",
                "\u03cb": "\u03c5",
                "\u03b0": "\u03c5",
                "\u03c9": "\u03c9",
                "\u03c2": "\u03c3"
            };
        aw = aE(document), az = function() {
            var b = 1;
            return function() {
                return b++
            }
        }(), aC = P(Object, {
            bind: function(d) {
                var c = this;
                return function() {
                    d.apply(c, arguments)
                }
            },
            init: function(l) {
                var k, j, f = ".select2-results";
                this.opts = l = this.prepareOpts(l), this.id = l.id, l.element.data("select2") !== aD && null !== l.element.data("select2") && l.element.data("select2").destroy(), this.container = this.createContainer(), this.liveRegion = aE(".select2-hidden-accessible"), 0 == this.liveRegion.length && (this.liveRegion = aE("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("select2-hidden-accessible").appendTo(document.body)), this.containerId = "s2id_" + (l.element.attr("id") || "autogen" + az()), this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.container.attr("title", l.element.attr("title")), this.body = aE(document.body), aa(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", l.element.attr("style")), this.container.css(T(l.containerCss, this.opts.element)), this.container.addClass(T(l.containerCssClass, this.opts.element)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", ad), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), aa(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(T(l.dropdownCssClass, this.opts.element)), this.dropdown.data("select2", this), this.dropdown.on("click", ad), this.results = k = this.container.find(f), this.search = j = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", ad), ai(this.results), this.dropdown.on("mousemove-filtered", f, this.bind(this.highlightUnderEvent)), this.dropdown.on("touchstart touchmove touchend", f, this.bind(function(c) {
                    this._touchEvent = !0, this.highlightUnderEvent(c)
                })), this.dropdown.on("touchmove", f, this.bind(this.touchMoved)), this.dropdown.on("touchstart touchend", f, this.bind(this.clearTouchMoved)), this.dropdown.on("click", this.bind(function() {
                    this._touchEvent && (this._touchEvent = !1, this.selectHighlighted())
                })), ag(80, this.results), this.dropdown.on("scroll-debounced", f, this.bind(this.loadMoreIfNeeded)), aE(this.container).on("change", ".select2-input", function(c) {
                    c.stopPropagation()
                }), aE(this.dropdown).on("change", ".select2-input", function(c) {
                    c.stopPropagation()
                }), aE.fn.mousewheel && k.mousewheel(function(g, d, m, i) {
                    var h = k.scrollTop();
                    i > 0 && 0 >= h - i ? (k.scrollTop(0), ad(g)) : 0 > i && k.get(0).scrollHeight - k.scrollTop() + i <= k.height() && (k.scrollTop(k.get(0).scrollHeight - k.height()), ad(g))
                }), aj(j), j.on("keyup-change input paste", this.bind(this.updateResults)), j.on("focus", function() {
                    j.addClass("select2-focused")
                }), j.on("blur", function() {
                    j.removeClass("select2-focused")
                }), this.dropdown.on("mouseup", f, this.bind(function(c) {
                    aE(c.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(c), this.selectHighlighted(c))
                })), this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function(c) {
                    c.stopPropagation()
                }), this.nextSearchTerm = aD, aE.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== l.maximumInputLength && this.search.attr("maxlength", l.maximumInputLength);
                var b = l.element.prop("disabled");
                b === aD && (b = !1), this.enable(!b);
                var a = l.element.prop("readonly");
                a === aD && (a = !1), this.readonly(a), av = av || an(), this.autofocus = l.element.prop("autofocus"), l.element.prop("autofocus", !1), this.autofocus && this.focus(), this.search.attr("placeholder", l.searchInputPlaceholder)
            },
            destroy: function() {
                var b = this.opts.element,
                    f = b.data("select2"),
                    e = this;
                this.close(), b.length && b[0].detachEvent && e._sync && b.each(function() {
                    e._sync && this.detachEvent("onpropertychange", e._sync)
                }), this.propertyObserver && (this.propertyObserver.disconnect(), this.propertyObserver = null), this._sync = null, f !== aD && (f.container.remove(), f.liveRegion.remove(), f.dropdown.remove(), b.show().removeData("select2").off(".select2").prop("autofocus", this.autofocus || !1), this.elementTabIndex ? b.attr({
                    tabindex: this.elementTabIndex
                }) : b.removeAttr("tabindex"), b.show()), Q.call(this, "container", "liveRegion", "dropdown", "results", "search")
            },
            optionToData: function(b) {
                return b.is("option") ? {
                    id: b.prop("value"),
                    text: b.text(),
                    element: b.get(),
                    css: b.attr("class"),
                    disabled: b.prop("disabled"),
                    locked: am(b.attr("locked"), "locked") || am(b.data("locked"), !0)
                } : b.is("optgroup") ? {
                    text: b.attr("label"),
                    children: [],
                    element: b.get(),
                    css: b.attr("class")
                } : void 0
            },
            prepareOpts: function(l) {
                var k, j, f, b, a = this;
                if (k = l.element, "select" === k.get(0).tagName.toLowerCase() && (this.select = j = l.element), j && aE.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
                        if (this in l) {
                            throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
                        }
                    }), l = aE.extend({}, {
                        populateResults: function(p, o, n) {
                            var m, i = this.opts.id,
                                c = this.liveRegion;
                            m = function(E, D, C) {
                                var B, A, z, y, h, g, J, I, H, G;
                                E = l.sortResults(E, D, n);
                                var F = [];
                                for (B = 0, A = E.length; A > B; B += 1) {
                                    z = E[B], h = z.disabled === !0, y = !h && i(z) !== aD, g = z.children && z.children.length > 0, J = aE("<li></li>"), J.addClass("select2-results-dept-" + C), J.addClass("select2-result"), J.addClass(y ? "select2-result-selectable" : "select2-result-unselectable"), h && J.addClass("select2-disabled"), g && J.addClass("select2-result-with-children"), J.addClass(a.opts.formatResultCssClass(z)), J.attr("role", "presentation"), I = aE(document.createElement("div")), I.addClass("select2-result-label"), I.attr("id", "select2-result-label-" + az()), I.attr("role", "option"), G = l.formatResult(z, I, n, a.opts.escapeMarkup), G !== aD && (I.html(G), J.append(I)), g && (H = aE("<ul></ul>"), H.addClass("select2-result-sub"), m(z.children, H, C + 1), J.append(H)), J.data("select2-data", z), F.push(J[0])
                                }
                                D.append(F), c.text(l.formatMatches(E.length))
                            }, m(o, p, 0)
                        }
                    }, aE.fn.select2.defaults, l), "function" != typeof l.id && (f = l.id, l.id = function(c) {
                        return c[f]
                    }), aE.isArray(l.element.data("select2Tags"))) {
                    if ("tags" in l) {
                        throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + l.element.attr("id")
                    }
                    l.tags = l.element.data("select2Tags")
                }
                if (j ? (l.query = this.bind(function(d) {
                        var n, m, i, p = {
                                results: [],
                                more: !1
                            },
                            o = d.term;
                        i = function(e, h) {
                            var g;
                            e.is("option") ? d.matcher(o, e.text(), e) && h.push(a.optionToData(e)) : e.is("optgroup") && (g = a.optionToData(e), e.children().each2(function(q, c) {
                                i(c, g.children)
                            }), g.children.length > 0 && h.push(g))
                        }, n = k.children(), this.getPlaceholder() !== aD && n.length > 0 && (m = this.getPlaceholderOption(), m && (n = n.not(m))), n.each2(function(e, c) {
                            i(c, p.results)
                        }), d.callback(p)
                    }), l.id = function(c) {
                        return c.id
                    }) : "query" in l || ("ajax" in l ? (b = l.element.data("ajax-url"), b && b.length > 0 && (l.ajax.url = b), l.query = X.call(l.element, l.ajax)) : "data" in l ? l.query = W(l.data) : "tags" in l && (l.query = V(l.tags), l.createSearchChoice === aD && (l.createSearchChoice = function(c) {
                        return {
                            id: aE.trim(c),
                            text: aE.trim(c)
                        }
                    }), l.initSelection === aD && (l.initSelection = function(c, h) {
                        var g = [];
                        aE(al(c.val(), l.separator, l.transformVal)).each(function() {
                            var e = {
                                    id: this,
                                    text: this
                                },
                                i = l.tags;
                            aE.isFunction(i) && (i = i()), aE(i).each(function() {
                                return am(this.id, e.id) ? (e = this, !1) : void 0
                            }), g.push(e)
                        }), h(g)
                    }))), "function" != typeof l.query) {
                    throw "query function not defined for Select2 " + l.element.attr("id")
                }
                if ("top" === l.createSearchChoicePosition) {
                    l.createSearchChoicePosition = function(d, c) {
                        d.unshift(c)
                    }
                } else {
                    if ("bottom" === l.createSearchChoicePosition) {
                        l.createSearchChoicePosition = function(d, c) {
                            d.push(c)
                        }
                    } else {
                        if ("function" != typeof l.createSearchChoicePosition) {
                            throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function"
                        }
                    }
                }
                return l
            },
            monitorSource: function() {
                var b, f = this.opts.element,
                    a = this;
                f.on("change.select2", this.bind(function() {
                    this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
                })), this._sync = this.bind(function() {
                    var c = f.prop("disabled");
                    c === aD && (c = !1), this.enable(!c);
                    var e = f.prop("readonly");
                    e === aD && (e = !1), this.readonly(e), this.container && (aa(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(T(this.opts.containerCssClass, this.opts.element))), this.dropdown && (aa(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(T(this.opts.dropdownCssClass, this.opts.element)))
                }), f.length && f[0].attachEvent && f.each(function() {
                    this.attachEvent("onpropertychange", a._sync)
                }), b = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, b !== aD && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new b(function(c) {
                    aE.each(c, a._sync)
                }), this.propertyObserver.observe(f.get(0), {
                    attributes: !0,
                    subtree: !1
                }))
            },
            triggerSelect: function(a) {
                var d = aE.Event("select2-selecting", {
                    val: this.id(a),
                    object: a,
                    choice: a
                });
                return this.opts.element.trigger(d), !d.isDefaultPrevented()
            },
            triggerChange: function(a) {
                a = a || {}, a = aE.extend({}, a, {
                    type: "change",
                    val: this.val()
                }), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(a), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
            },
            isInterfaceEnabled: function() {
                return this.enabledInterface === !0
            },
            enableInterface: function() {
                var d = this._enabled && !this._readonly,
                    c = !d;
                return d === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", c), this.close(), this.enabledInterface = d, !0)
            },
            enable: function(b) {
                b === aD && (b = !0), this._enabled !== b && (this._enabled = b, this.opts.element.prop("disabled", !b), this.enableInterface())
            },
            disable: function() {
                this.enable(!1)
            },
            readonly: function(b) {
                b === aD && (b = !1), this._readonly !== b && (this._readonly = b, this.opts.element.prop("readonly", b), this.enableInterface())
            },
            opened: function() {
                return this.container ? this.container.hasClass("select2-dropdown-open") : !1
            },
            positionDropdown: function() {
                var C, B, A, j, a, aL = this.dropdown,
                    aK = this.container,
                    aJ = aK.offset(),
                    aI = aK.outerHeight(!1),
                    aH = aK.outerWidth(!1),
                    aG = aL.outerHeight(!1),
                    aF = aE(window),
                    O = aF.width(),
                    N = aF.height(),
                    M = aF.scrollLeft() + O,
                    L = aF.scrollTop() + N,
                    K = aJ.top + aI,
                    J = aJ.left,
                    I = L >= K + aG,
                    H = aJ.top - aG >= aF.scrollTop(),
                    G = aL.outerWidth(!1),
                    F = function() {
                        return M >= J + G
                    },
                    E = function() {
                        return aJ.left + M + aK.outerWidth(!1) > G
                    },
                    D = aL.hasClass("select2-drop-above");
                D ? (B = !0, !H && I && (A = !0, B = !1)) : (B = !1, !I && H && (A = !0, B = !0)), A && (aL.hide(), aJ = this.container.offset(), aI = this.container.outerHeight(!1), aH = this.container.outerWidth(!1), aG = aL.outerHeight(!1), M = aF.scrollLeft() + O, L = aF.scrollTop() + N, K = aJ.top + aI, J = aJ.left, G = aL.outerWidth(!1), aL.show(), this.focusSearch()), this.opts.dropdownAutoWidth ? (a = aE(".select2-results", aL)[0], aL.addClass("select2-drop-auto-width"), aL.css("width", ""), G = aL.outerWidth(!1) + (a.scrollHeight === a.clientHeight ? 0 : av.width), G > aH ? aH = G : G = aH, aG = aL.outerHeight(!1)) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body.css("position") && (C = this.body.offset(), K -= C.top, J -= C.left), !F() && E() && (J = aJ.left + this.container.outerWidth(!1) - G), j = {
                    left: J,
                    width: aH
                }, B ? (j.top = aJ.top - aG, j.bottom = "auto", this.container.addClass("select2-drop-above"), aL.addClass("select2-drop-above")) : (j.top = K, j.bottom = "auto", this.container.removeClass("select2-drop-above"), aL.removeClass("select2-drop-above")), j = aE.extend(j, T(this.opts.dropdownCss, this.opts.element)), aL.css(j)
            },
            shouldOpen: function() {
                var a;
                return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (a = aE.Event("select2-opening"), this.opts.element.trigger(a), !a.isDefaultPrevented())
            },
            clearDropdownAlignmentPreference: function() {
                this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
            },
            open: function() {
                return this.shouldOpen() ? (this.opening(), aw.on("mousemove.select2Event", function(b) {
                    ax.x = b.pageX, ax.y = b.pageY
                }), !0) : !1
            },
            opening: function() {
                var i, a = this.containerEventName,
                    l = "scroll." + a,
                    k = "resize." + a,
                    j = "orientationchange." + a;
                this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body), i = aE("#select2-drop-mask"), 0 === i.length && (i = aE(document.createElement("div")), i.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), i.hide(), i.appendTo(this.body), i.on("mousedown touchstart click", function(e) {
                    aq(i);
                    var f, g = aE("#select2-drop");
                    g.length > 0 && (f = g.data("select2"), f.opts.selectOnBlur && f.selectHighlighted({
                        noFocus: !0
                    }), f.close(), e.preventDefault(), e.stopPropagation())
                })), this.dropdown.prev()[0] !== i[0] && this.dropdown.before(i), aE("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), i.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
                var h = this;
                this.container.parents().add(window).each(function() {
                    aE(this).on(k + " " + l + " " + j, function() {
                        h.opened() && h.positionDropdown()
                    })
                })
            },
            close: function() {
                if (this.opened()) {
                    var a = this.containerEventName,
                        h = "scroll." + a,
                        g = "resize." + a,
                        f = "orientationchange." + a;
                    this.container.parents().add(window).each(function() {
                        aE(this).off(h).off(g).off(f)
                    }), this.clearDropdownAlignmentPreference(), aE("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), aw.off("mousemove.select2Event"), this.clearSearch(), this.search.removeClass("select2-active"), this.opts.element.trigger(aE.Event("select2-close"))
                }
            },
            externalSearch: function(b) {
                this.open(), this.search.val(b), this.updateResults(!1)
            },
            clearSearch: function() {},
            getMaximumSelectionSize: function() {
                return T(this.opts.maximumSelectionSize, this.opts.element)
            },
            ensureHighlightVisible: function() {
                var q, p, o, n, m, l, k, a, r = this.results;
                if (p = this.highlight(), !(0 > p)) {
                    if (0 == p) {
                        return r.scrollTop(0), void 0
                    }
                    q = this.findHighlightableChoices().find(".select2-result-label"), o = aE(q[p]), a = (o.offset() || {}).top || 0, n = a + o.outerHeight(!0), p === q.length - 1 && (k = r.find("li.select2-more-results"), k.length > 0 && (n = k.offset().top + k.outerHeight(!0))), m = r.offset().top + r.outerHeight(!1), n > m && r.scrollTop(r.scrollTop() + (n - m)), l = a - r.offset().top, 0 > l && "none" != o.css("display") && r.scrollTop(r.scrollTop() + l)
                }
            },
            findHighlightableChoices: function() {
                return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
            },
            moveHighlight: function(a) {
                for (var h = this.findHighlightableChoices(), g = this.highlight(); g > -1 && g < h.length;) {
                    g += a;
                    var f = aE(h[g]);
                    if (f.hasClass("select2-result-selectable") && !f.hasClass("select2-disabled") && !f.hasClass("select2-selected")) {
                        this.highlight(g);
                        break
                    }
                }
            },
            highlight: function(a) {
                var g, f, h = this.findHighlightableChoices();
                return 0 === arguments.length ? ao(h.filter(".select2-highlighted")[0], h.get()) : (a >= h.length && (a = h.length - 1), 0 > a && (a = 0), this.removeHighlight(), g = aE(h[a]), g.addClass("select2-highlighted"), this.search.attr("aria-activedescendant", g.find(".select2-result-label").attr("id")), this.ensureHighlightVisible(), this.liveRegion.text(g.text()), f = g.data("select2-data"), f && this.opts.element.trigger({
                    type: "select2-highlight",
                    val: this.id(f),
                    choice: f
                }), void 0)
            },
            removeHighlight: function() {
                this.results.find(".select2-highlighted").removeClass("select2-highlighted")
            },
            touchMoved: function() {
                this._touchMoved = !0
            },
            clearTouchMoved: function() {
                this._touchMoved = !1
            },
            countSelectableResults: function() {
                return this.findHighlightableChoices().length
            },
            highlightUnderEvent: function(a) {
                var f = aE(a.target).closest(".select2-result-selectable");
                if (f.length > 0 && !f.is(".select2-highlighted")) {
                    var e = this.findHighlightableChoices();
                    this.highlight(e.index(f))
                } else {
                    0 == f.length && this.removeHighlight()
                }
            },
            loadMoreIfNeeded: function() {
                var n, i = this.results,
                    h = i.find("li.select2-more-results"),
                    m = this.resultsPage + 1,
                    l = this,
                    k = this.search.val(),
                    j = this.context;
                0 !== h.length && (n = h.offset().top - i.offset().top - i.height(), n <= this.opts.loadMorePadding && (h.addClass("select2-active"), this.opts.query({
                    element: this.opts.element,
                    term: k,
                    page: m,
                    context: j,
                    matcher: this.opts.matcher,
                    callback: this.bind(function(a) {
                        l.opened() && (l.opts.populateResults.call(this, i, a.results, {
                            term: k,
                            page: m,
                            context: j
                        }), l.postprocessResults(a, !1, !1), a.more === !0 ? (h.detach().appendTo(i).html(l.opts.escapeMarkup(T(l.opts.formatLoadMore, l.opts.element, m + 1))), window.setTimeout(function() {
                            l.loadMoreIfNeeded()
                        }, 10)) : h.remove(), l.positionDropdown(), l.resultsPage = m, l.context = a.context, this.opts.element.trigger({
                            type: "select2-loaded",
                            items: a
                        }))
                    })
                })))
            },
            tokenize: function() {},
            updateResults: function(A) {
                function p() {
                    z.removeClass("select2-active"), u.positionDropdown(), y.find(".select2-no-results,.select2-selection-limit,.select2-searching").length ? u.liveRegion.text(y.text()) : u.liveRegion.text(u.opts.formatMatches(y.find('.select2-result-selectable:not(".select2-selected")').length))
                }

                function b(c) {
                    y.html(c), p()
                }
                var v, t, q, z = this.search,
                    y = this.results,
                    w = this.opts,
                    u = this,
                    s = z.val(),
                    r = aE.data(this.container, "select2-last-term");
                if ((A === !0 || !r || !am(s, r)) && (aE.data(this.container, "select2-last-term", s), A === !0 || this.showSearchInput !== !1 && this.opened())) {
                    q = ++this.queryCount;
                    var a = this.getMaximumSelectionSize();
                    if (a >= 1 && (v = this.data(), aE.isArray(v) && v.length >= a && U(w.formatSelectionTooBig, "formatSelectionTooBig"))) {
                        return b("<li class='select2-selection-limit'>" + T(w.formatSelectionTooBig, w.element, a) + "</li>"), void 0
                    }
                    if (z.val().length < w.minimumInputLength) {
                        return U(w.formatInputTooShort, "formatInputTooShort") ? b("<li class='select2-no-results'>" + T(w.formatInputTooShort, w.element, z.val(), w.minimumInputLength) + "</li>") : b(""), A && this.showSearch && this.showSearch(!0), void 0
                    }
                    if (w.maximumInputLength && z.val().length > w.maximumInputLength) {
                        return U(w.formatInputTooLong, "formatInputTooLong") ? b("<li class='select2-no-results'>" + T(w.formatInputTooLong, w.element, z.val(), w.maximumInputLength) + "</li>") : b(""), void 0
                    }
                    w.formatSearching && 0 === this.findHighlightableChoices().length && b("<li class='select2-searching'>" + T(w.formatSearching, w.element) + "</li>"), z.addClass("select2-active"), this.removeHighlight(), t = this.tokenize(), t != aD && null != t && z.val(t), this.resultsPage = 1, w.query({
                        element: w.element,
                        term: z.val(),
                        page: this.resultsPage,
                        context: null,
                        matcher: w.matcher,
                        callback: this.bind(function(d) {
                            var c;
                            if (q == this.queryCount) {
                                if (!this.opened()) {
                                    return this.search.removeClass("select2-active"), void 0
                                }
                                if (d.hasError !== aD && U(w.formatAjaxError, "formatAjaxError")) {
                                    return b("<li class='select2-ajax-error'>" + T(w.formatAjaxError, w.element, d.jqXHR, d.textStatus, d.errorThrown) + "</li>"), void 0
                                }
                                if (this.context = d.context === aD ? null : d.context, this.opts.createSearchChoice && "" !== z.val() && (c = this.opts.createSearchChoice.call(u, z.val(), d.results), c !== aD && null !== c && u.id(c) !== aD && null !== u.id(c) && 0 === aE(d.results).filter(function() {
                                        return am(u.id(this), u.id(c))
                                    }).length && this.opts.createSearchChoicePosition(d.results, c)), 0 === d.results.length && U(w.formatNoMatches, "formatNoMatches")) {
                                    return b("<li class='select2-no-results'>" + T(w.formatNoMatches, w.element, z.val()) + "</li>"), void 0
                                }
                                y.empty(), u.opts.populateResults.call(this, y, d.results, {
                                    term: z.val(),
                                    page: this.resultsPage,
                                    context: null
                                }), d.more === !0 && U(w.formatLoadMore, "formatLoadMore") && (y.append("<li class='select2-more-results'>" + w.escapeMarkup(T(w.formatLoadMore, w.element, this.resultsPage)) + "</li>"), window.setTimeout(function() {
                                    u.loadMoreIfNeeded()
                                }, 10)), this.postprocessResults(d, A), p(), this.opts.element.trigger({
                                    type: "select2-loaded",
                                    items: d
                                })
                            }
                        })
                    })
                }
            },
            cancel: function() {
                this.close()
            },
            blur: function() {
                this.opts.selectOnBlur && this.selectHighlighted({
                    noFocus: !0
                }), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
            },
            focusSearch: function() {
                af(this.search)
            },
            selectHighlighted: function(f) {
                if (this._touchMoved) {
                    return this.clearTouchMoved(), void 0
                }
                var e = this.highlight(),
                    h = this.results.find(".select2-highlighted"),
                    g = h.closest(".select2-result").data("select2-data");
                g ? (this.highlight(e), this.onSelect(g, f)) : f && f.noFocus && this.close()
            },
            getPlaceholder: function() {
                var b;
                return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((b = this.getPlaceholderOption()) !== aD ? b.text() : aD)
            },
            getPlaceholderOption: function() {
                if (this.select) {
                    var a = this.select.children("option").first();
                    if (this.opts.placeholderOption !== aD) {
                        return "first" === this.opts.placeholderOption && a || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select)
                    }
                    if ("" === aE.trim(a.text()) && "" === a.val()) {
                        return a
                    }
                }
            },
            initContainerWidth: function() {
                function b() {
                    var n, m, l, k, j, i;
                    if ("off" === this.opts.width) {
                        return null
                    }
                    if ("element" === this.opts.width) {
                        return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px"
                    }
                    if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                        if (n = this.opts.element.attr("style"), n !== aD) {
                            for (m = n.split(";"), k = 0, j = m.length; j > k; k += 1) {
                                if (i = m[k].replace(/\s/g, ""), l = i.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== l && l.length >= 1) {
                                    return l[1]
                                }
                            }
                        }
                        return "resolve" === this.opts.width ? (n = this.opts.element.css("width"), n.indexOf("%") > 0 ? n : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
                    }
                    return aE.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                }
                var a = b.call(this);
                null !== a && this.container.css("width", a)
            }
        }), aB = P(aC, {
            createContainer: function() {
                var a = aE(document.createElement("div")).attr({
                    "class": "select2-container"
                }).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>", "</a>", "<label for='' class='select2-offscreen'></label>", "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <label for='' class='select2-offscreen'></label>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'", "       aria-autocomplete='list' />", "   </div>", "   <ul class='select2-results' role='listbox'>", "   </ul>", "</div>"].join(""));
                return a
            },
            enableInterface: function() {
                this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
            },
            opening: function() {
                var f, b, a;
                this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput !== !1 && this.search.val(this.focusser.val()), this.opts.shouldFocusInput(this) && (this.search.focus(), f = this.search.get(0), f.createTextRange ? (b = f.createTextRange(), b.collapse(!1), b.select()) : f.setSelectionRange && (a = this.search.val().length, f.setSelectionRange(a, a))), "" === this.search.val() && this.nextSearchTerm != aD && (this.search.val(this.nextSearchTerm), this.search.select()), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(aE.Event("select2-open"))
            },
            close: function() {
                this.opened() && (this.parent.close.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
            },
            focus: function() {
                this.opened() ? this.close() : (this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
            },
            isFocused: function() {
                return this.container.hasClass("select2-container-active")
            },
            cancel: function() {
                this.parent.cancel.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus()
            },
            destroy: function() {
                aE("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), Q.call(this, "selection", "focusser")
            },
            initContainer: function() {
                var a, i, l = this.container,
                    k = this.dropdown,
                    j = az();
                this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0), this.selection = a = l.find(".select2-choice"), this.focusser = l.find(".select2-focusser"), a.find(".select2-chosen").attr("id", "select2-chosen-" + j), this.focusser.attr("aria-labelledby", "select2-chosen-" + j), this.results.attr("id", "select2-results-" + j), this.search.attr("aria-owns", "select2-results-" + j), this.focusser.attr("id", "s2id_autogen" + j), i = aE("label[for='" + this.opts.element.attr("id") + "']"), this.opts.element.focus(this.bind(function() {
                    this.focus()
                })), this.focusser.prev().text(i.text()).attr("for", this.focusser.attr("id"));
                var f = this.opts.element.attr("title");
                this.opts.element.attr("title", f || i.text()), this.focusser.attr("tabindex", this.elementTabIndex), this.search.attr("id", this.focusser.attr("id") + "_search"), this.search.prev().text(aE("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.search.on("keydown", this.bind(function(b) {
                    if (this.isInterfaceEnabled() && 229 != b.keyCode) {
                        if (b.which === au.PAGE_UP || b.which === au.PAGE_DOWN) {
                            return ad(b), void 0
                        }
                        switch (b.which) {
                            case au.UP:
                            case au.DOWN:
                                return this.moveHighlight(b.which === au.UP ? -1 : 1), ad(b), void 0;
                            case au.ENTER:
                                return this.selectHighlighted(), ad(b), void 0;
                            case au.TAB:
                                return this.selectHighlighted({
                                    noFocus: !0
                                }), void 0;
                            case au.ESC:
                                return this.cancel(b), ad(b), void 0
                        }
                    }
                })), this.search.on("blur", this.bind(function() {
                    document.activeElement === this.body.get(0) && window.setTimeout(this.bind(function() {
                        this.opened() && this.search.focus()
                    }), 0)
                })), this.focusser.on("keydown", this.bind(function(b) {
                    if (this.isInterfaceEnabled() && b.which !== au.TAB && !au.isControl(b) && !au.isFunctionKey(b) && b.which !== au.ESC) {
                        if (this.opts.openOnEnter === !1 && b.which === au.ENTER) {
                            return ad(b), void 0
                        }
                        if (b.which == au.DOWN || b.which == au.UP || b.which == au.ENTER && this.opts.openOnEnter) {
                            if (b.altKey || b.ctrlKey || b.shiftKey || b.metaKey) {
                                return
                            }
                            return this.open(), ad(b), void 0
                        }
                        return b.which == au.DELETE || b.which == au.BACKSPACE ? (this.opts.allowClear && this.clear(), ad(b), void 0) : void 0
                    }
                })), aj(this.focusser), this.focusser.on("keyup-change input", this.bind(function(b) {
                    if (this.opts.minimumResultsForSearch >= 0) {
                        if (b.stopPropagation(), this.opened()) {
                            return
                        }
                        this.open()
                    }
                })), a.on("mousedown touchstart", "abbr", this.bind(function(b) {
                    this.isInterfaceEnabled() && (this.clear(), ac(b), this.close(), this.selection && this.selection.focus())
                })), a.on("mousedown touchstart", this.bind(function(b) {
                    aq(a), this.container.hasClass("select2-container-active") || this.opts.element.trigger(aE.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), ad(b)
                })), k.on("mousedown touchstart", this.bind(function() {
                    this.opts.shouldFocusInput(this) && this.search.focus()
                })), a.on("focus", this.bind(function(b) {
                    ad(b)
                })), this.focusser.on("focus", this.bind(function() {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(aE.Event("select2-focus")), this.container.addClass("select2-container-active")
                })).on("blur", this.bind(function() {
                    this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(aE.Event("select2-blur")))
                })), this.search.on("focus", this.bind(function() {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(aE.Event("select2-focus")), this.container.addClass("select2-container-active")
                })), this.initContainerWidth(), this.opts.element.hide(), this.setPlaceholder()
            },
            clear: function(a) {
                var h = this.selection.data("select2-data");
                if (h) {
                    var g = aE.Event("select2-clearing");
                    if (this.opts.element.trigger(g), g.isDefaultPrevented()) {
                        return
                    }
                    var f = this.getPlaceholderOption();
                    this.opts.element.val(f ? f.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), a !== !1 && (this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(h),
                        choice: h
                    }), this.triggerChange({
                        removed: h
                    }))
                }
            },
            initSelection: function() {
                if (this.isPlaceholderOptionSelected()) {
                    this.updateSelection(null), this.close(), this.setPlaceholder()
                } else {
                    var a = this;
                    this.opts.initSelection.call(null, this.opts.element, function(b) {
                        b !== aD && null !== b && (a.updateSelection(b), a.close(), a.setPlaceholder(), a.nextSearchTerm = a.opts.nextSearchTerm(b, a.search.val()))
                    })
                }
            },
            isPlaceholderOptionSelected: function() {
                var b;
                return this.getPlaceholder() === aD ? !1 : (b = this.getPlaceholderOption()) !== aD && b.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === aD || null === this.opts.element.val()
            },
            prepareOpts: function() {
                var a = this.parent.prepareOpts.apply(this, arguments),
                    d = this;
                return "select" === a.element.get(0).tagName.toLowerCase() ? a.initSelection = function(e, c) {
                    var f = e.find("option").filter(function() {
                        return this.selected && !this.disabled
                    });
                    c(d.optionToData(f))
                } : "data" in a && (a.initSelection = a.initSelection || function(i, h) {
                    var g = i.val(),
                        b = null;
                    a.query({
                        matcher: function(e, k, j) {
                            var f = am(g, a.id(j));
                            return f && (b = j), f
                        },
                        callback: aE.isFunction(h) ? function() {
                            h(b)
                        } : aE.noop
                    })
                }), a
            },
            getPlaceholder: function() {
                return this.select && this.getPlaceholderOption() === aD ? aD : this.parent.getPlaceholder.apply(this, arguments)
            },
            setPlaceholder: function() {
                var b = this.getPlaceholder();
                if (this.isPlaceholderOptionSelected() && b !== aD) {
                    if (this.select && this.getPlaceholderOption() === aD) {
                        return
                    }
                    this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(b)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
                }
            },
            postprocessResults: function(h, f, l) {
                var k = 0,
                    j = this;
                if (this.findHighlightableChoices().each2(function(d, c) {
                        return am(j.id(c.data("select2-data")), j.opts.element.val()) ? (k = d, !1) : void 0
                    }), l !== !1 && (f === !0 && k >= 0 ? this.highlight(k) : this.highlight(0)), f === !0) {
                    var i = this.opts.minimumResultsForSearch;
                    i >= 0 && this.showSearch(S(h.results) >= i)
                }
            },
            showSearch: function(a) {
                this.showSearchInput !== a && (this.showSearchInput = a, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !a), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !a), aE(this.dropdown, this.container).toggleClass("select2-with-searchbox", a))
            },
            onSelect: function(f, e) {
                if (this.triggerSelect(f)) {
                    var h = this.opts.element.val(),
                        g = this.data();
                    this.opts.element.val(this.id(f)), this.updateSelection(f), this.opts.element.trigger({
                        type: "select2-selected",
                        val: this.id(f),
                        choice: f
                    }), this.nextSearchTerm = this.opts.nextSearchTerm(f, this.search.val()), this.close(), e && e.noFocus || !this.opts.shouldFocusInput(this) || this.focusser.focus(), am(h, this.id(f)) || this.triggerChange({
                        added: f,
                        removed: g
                    })
                }
            },
            updateSelection: function(b) {
                var g, f, h = this.selection.find(".select2-chosen");
                this.selection.data("select2-data", b), h.empty(), null !== b && (g = this.opts.formatSelection(b, h, this.opts.escapeMarkup)), g !== aD && h.append(g), f = this.opts.formatSelectionCssClass(b, h), f !== aD && h.addClass(f), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== aD && this.container.addClass("select2-allowclear")
            },
            val: function() {
                var b, j = !1,
                    i = null,
                    h = this,
                    g = this.data();
                if (0 === arguments.length) {
                    return this.opts.element.val()
                }
                if (b = arguments[0], arguments.length > 1 && (j = arguments[1]), this.select) {
                    this.select.val(b).find("option").filter(function() {
                        return this.selected
                    }).each2(function(d, c) {
                        return i = h.optionToData(c), !1
                    }), this.updateSelection(i), this.setPlaceholder(), j && this.triggerChange({
                        added: i,
                        removed: g
                    })
                } else {
                    if (!b && 0 !== b) {
                        return this.clear(j), void 0
                    }
                    if (this.opts.initSelection === aD) {
                        throw new Error("cannot call val() if initSelection() is not defined")
                    }
                    this.opts.element.val(b), this.opts.initSelection(this.opts.element, function(c) {
                        h.opts.element.val(c ? h.id(c) : ""), h.updateSelection(c), h.setPlaceholder(), j && h.triggerChange({
                            added: c,
                            removed: g
                        })
                    })
                }
            },
            clearSearch: function() {
                this.search.val(""), this.focusser.val("")
            },
            data: function(b) {
                var f, e = !1;
                return 0 === arguments.length ? (f = this.selection.data("select2-data"), f == aD && (f = null), f) : (arguments.length > 1 && (e = arguments[1]), b ? (f = this.data(), this.opts.element.val(b ? this.id(b) : ""), this.updateSelection(b), e && this.triggerChange({
                    added: b,
                    removed: f
                })) : this.clear(e), void 0)
            }
        }), aA = P(aC, {
            createContainer: function() {
                var a = aE(document.createElement("div")).attr({
                    "class": "select2-container select2-container-multi"
                }).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <label for='' class='select2-offscreen'></label>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                return a
            },
            prepareOpts: function() {
                var a = this.parent.prepareOpts.apply(this, arguments),
                    d = this;
                return "select" === a.element.get(0).tagName.toLowerCase() ? a.initSelection = function(e, c) {
                    var f = [];
                    e.find("option").filter(function() {
                        return this.selected && !this.disabled
                    }).each2(function(h, g) {
                        f.push(d.optionToData(g))
                    }), c(f)
                } : "data" in a && (a.initSelection = a.initSelection || function(i, h) {
                    var g = al(i.val(), a.separator, a.transformVal),
                        b = [];
                    a.query({
                        matcher: function(k, j, f) {
                            var e = aE.grep(g, function(c) {
                                return am(c, a.id(f))
                            }).length;
                            return e && b.push(f), e
                        },
                        callback: aE.isFunction(h) ? function() {
                            for (var e = [], l = 0; l < g.length; l++) {
                                for (var k = g[l], j = 0; j < b.length; j++) {
                                    var f = b[j];
                                    if (am(k, a.id(f))) {
                                        e.push(f), b.splice(j, 1);
                                        break
                                    }
                                }
                            }
                            h(e)
                        } : aE.noop
                    })
                }), a
            },
            selectChoice: function(d) {
                var c = this.container.find(".select2-search-choice-focus");
                c.length && d && d[0] == c[0] || (c.length && this.opts.element.trigger("choice-deselected", c), c.removeClass("select2-search-choice-focus"), d && d.length && (this.close(), d.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", d)))
            },
            destroy: function() {
                aE("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), Q.call(this, "searchContainer", "selection")
            },
            initContainer: function() {
                var f, a = ".select2-choices";
                this.searchContainer = this.container.find(".select2-search-field"), this.selection = f = this.container.find(a);
                var e = this;
                this.selection.on("click", ".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)", function() {
                    e.search[0].focus(), e.selectChoice(aE(this))
                }), this.search.attr("id", "s2id_autogen" + az()), this.search.prev().text(aE("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.opts.element.focus(this.bind(function() {
                    this.focus()
                })), this.search.on("input paste", this.bind(function() {
                    this.search.attr("placeholder") && 0 == this.search.val().length || this.isInterfaceEnabled() && (this.opened() || this.open())
                })), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function(h) {
                    if (this.isInterfaceEnabled()) {
                        ++this.keydowns;
                        var c = f.find(".select2-search-choice-focus"),
                            l = c.prev(".select2-search-choice:not(.select2-locked)"),
                            k = c.next(".select2-search-choice:not(.select2-locked)"),
                            j = ae(this.search);
                        if (c.length && (h.which == au.LEFT || h.which == au.RIGHT || h.which == au.BACKSPACE || h.which == au.DELETE || h.which == au.ENTER)) {
                            var i = c;
                            return h.which == au.LEFT && l.length ? i = l : h.which == au.RIGHT ? i = k.length ? k : null : h.which === au.BACKSPACE ? this.unselect(c.first()) && (this.search.width(10), i = l.length ? l : k) : h.which == au.DELETE ? this.unselect(c.first()) && (this.search.width(10), i = k.length ? k : null) : h.which == au.ENTER && (i = null), this.selectChoice(i), ad(h), i && i.length || this.open(), void 0
                        }
                        if ((h.which === au.BACKSPACE && 1 == this.keydowns || h.which == au.LEFT) && 0 == j.offset && !j.length) {
                            return this.selectChoice(f.find(".select2-search-choice:not(.select2-locked)").last()), ad(h), void 0
                        }
                        if (this.selectChoice(null), this.opened()) {
                            switch (h.which) {
                                case au.UP:
                                case au.DOWN:
                                    return this.moveHighlight(h.which === au.UP ? -1 : 1), ad(h), void 0;
                                case au.ENTER:
                                    return this.selectHighlighted(), ad(h), void 0;
                                case au.TAB:
                                    return this.selectHighlighted({
                                        noFocus: !0
                                    }), this.close(), void 0;
                                case au.ESC:
                                    return this.cancel(h), ad(h), void 0
                            }
                        }
                        if (h.which !== au.TAB && !au.isControl(h) && !au.isFunctionKey(h) && h.which !== au.BACKSPACE && h.which !== au.ESC) {
                            if (h.which === au.ENTER) {
                                if (this.opts.openOnEnter === !1) {
                                    return
                                }
                                if (h.altKey || h.ctrlKey || h.shiftKey || h.metaKey) {
                                    return
                                }
                            }
                            this.open(), (h.which === au.PAGE_UP || h.which === au.PAGE_DOWN) && ad(h), h.which === au.ENTER && ad(h)
                        }
                    }
                })), this.search.on("keyup", this.bind(function() {
                    this.keydowns = 0, this.resizeSearch()
                })), this.search.on("blur", this.bind(function(c) {
                    this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), c.stopImmediatePropagation(), this.opts.element.trigger(aE.Event("select2-blur"))
                })), this.container.on("click", a, this.bind(function(c) {
                    this.isInterfaceEnabled() && (aE(c.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(aE.Event("select2-focus")), this.open(), this.focusSearch(), c.preventDefault()))
                })), this.container.on("focus", a, this.bind(function() {
                    this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(aE.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
                })), this.initContainerWidth(), this.opts.element.hide(), this.clearSearch()
            },
            enableInterface: function() {
                this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
            },
            initSelection: function() {
                if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
                    var a = this;
                    this.opts.initSelection.call(null, this.opts.element, function(b) {
                        b !== aD && null !== b && (a.updateSelection(b), a.close(), a.clearSearch())
                    })
                }
            },
            clearSearch: function() {
                var b = this.getPlaceholder(),
                    d = this.getMaxSearchWidth();
                b !== aD && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(b).addClass("select2-default"), this.search.width(d > 0 ? d : this.container.css("width"))) : this.search.val("").width(10)
            },
            clearPlaceholder: function() {
                this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
            },
            opening: function() {
                this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), "" === this.search.val() && this.nextSearchTerm != aD && (this.search.val(this.nextSearchTerm), this.search.select()), this.updateResults(!0), this.opts.shouldFocusInput(this) && this.search.focus(), this.opts.element.trigger(aE.Event("select2-open"))
            },
            close: function() {
                this.opened() && this.parent.close.apply(this, arguments)
            },
            focus: function() {
                this.close(), this.search.focus()
            },
            isFocused: function() {
                return this.search.hasClass("select2-focused")
            },
            updateSelection: function(a) {
                var h = [],
                    g = [],
                    f = this;
                aE(a).each(function() {
                    ao(f.id(this), h) < 0 && (h.push(f.id(this)), g.push(this))
                }), a = g, this.selection.find(".select2-search-choice").remove(), aE(a).each(function() {
                    f.addSelectedChoice(this)
                }), f.postprocessResults()
            },
            tokenize: function() {
                var b = this.search.val();
                b = this.opts.tokenizer.call(this, b, this.data(), this.bind(this.onSelect), this.opts), null != b && b != aD && (this.search.val(b), b.length > 0 && this.open())
            },
            onSelect: function(b, d) {
                this.triggerSelect(b) && "" !== b.text && (this.addSelectedChoice(b), this.opts.element.trigger({
                    type: "selected",
                    val: this.id(b),
                    choice: b
                }), this.nextSearchTerm = this.opts.nextSearchTerm(b, this.search.val()), this.clearSearch(), this.updateResults(), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(b, !1, this.opts.closeOnSelect === !0), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() ? this.updateResults(!0) : this.nextSearchTerm != aD && (this.search.val(this.nextSearchTerm), this.updateResults(), this.search.select()), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({
                    added: b
                }), d && d.noFocus || this.focusSearch())
            },
            cancel: function() {
                this.close(), this.focusSearch()
            },
            addSelectedChoice: function(r) {
                var b, a, q = !r.locked,
                    p = aE("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),
                    o = aE("<li class='select2-search-choice select2-locked'><div></div></li>"),
                    n = q ? p : o,
                    m = this.id(r),
                    l = this.getVal();
                b = this.opts.formatSelection(r, n.find("div"), this.opts.escapeMarkup), b != aD && n.find("div").replaceWith(aE("<div></div>").html(b)), a = this.opts.formatSelectionCssClass(r, n.find("div")), a != aD && n.addClass(a), q && n.find(".select2-search-choice-close").on("mousedown", ad).on("click dblclick", this.bind(function(c) {
                    this.isInterfaceEnabled() && (this.unselect(aE(c.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), ad(c), this.close(), this.focusSearch())
                })).on("focus", this.bind(function() {
                    this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
                })), n.data("select2-data", r), n.insertBefore(this.searchContainer), l.push(m), this.setVal(l)
            },
            unselect: function(a) {
                var i, h, j = this.getVal();
                if (a = a.closest(".select2-search-choice"), 0 === a.length) {
                    throw "Invalid argument: " + a + ". Must be .select2-search-choice"
                }
                if (i = a.data("select2-data")) {
                    var g = aE.Event("select2-removing");
                    if (g.val = this.id(i), g.choice = i, this.opts.element.trigger(g), g.isDefaultPrevented()) {
                        return !1
                    }
                    for (;
                        (h = ao(this.id(i), j)) >= 0;) {
                        j.splice(h, 1), this.setVal(j), this.select && this.postprocessResults()
                    }
                    return a.remove(), this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(i),
                        choice: i
                    }), this.triggerChange({
                        removed: i
                    }), !0
                }
            },
            postprocessResults: function(i, h, n) {
                var m = this.getVal(),
                    l = this.results.find(".select2-result"),
                    k = this.results.find(".select2-result-with-children"),
                    j = this;
                l.each2(function(e, d) {
                    var f = j.id(d.data("select2-data"));
                    ao(f, m) >= 0 && (d.addClass("select2-selected"), d.find(".select2-result-selectable").addClass("select2-selected"))
                }), k.each2(function(d, c) {
                    c.is(".select2-result-selectable") || 0 !== c.find(".select2-result-selectable:not(.select2-selected)").length || c.addClass("select2-selected")
                }), -1 == this.highlight() && n !== !1 && this.opts.closeOnSelect === !0 && j.highlight(0), !this.opts.createSearchChoice && !l.filter(".select2-result:not(.select2-selected)").length > 0 && (!i || i && !i.more && 0 === this.results.find(".select2-no-results").length) && U(j.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + T(j.opts.formatNoMatches, j.opts.element, j.search.val()) + "</li>")
            },
            getMaxSearchWidth: function() {
                return this.selection.width() - ak(this.search)
            },
            resizeSearch: function() {
                var h, g, l, k, j, i = ak(this.search);
                h = ab(this.search) + 10, g = this.search.offset().left, l = this.selection.width(), k = this.selection.offset().left, j = l - (g - k) - i, h > j && (j = l - i), 40 > j && (j = l - i), 0 >= j && (j = h), this.search.width(Math.floor(j))
            },
            getVal: function() {
                var b;
                return this.select ? (b = this.select.val(), null === b ? [] : b) : (b = this.opts.element.val(), al(b, this.opts.separator, this.opts.transformVal))
            },
            setVal: function(a) {
                var d;
                this.select ? this.select.val(a) : (d = [], aE(a).each(function() {
                    ao(this, d) < 0 && d.push(this)
                }), this.opts.element.val(0 === d.length ? "" : d.join(this.opts.separator)))
            },
            buildChangeDetails: function(f, e) {
                for (var e = e.slice(0), f = f.slice(0), h = 0; h < e.length; h++) {
                    for (var g = 0; g < f.length; g++) {
                        am(this.opts.id(e[h]), this.opts.id(f[g])) && (e.splice(h, 1), h > 0 && h--, f.splice(g, 1), g--)
                    }
                }
                return {
                    added: e,
                    removed: f
                }
            },
            val: function(h, g) {
                var b, a = this;
                if (0 === arguments.length) {
                    return this.getVal()
                }
                if (b = this.data(), b.length || (b = []), !h && 0 !== h) {
                    return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), g && this.triggerChange({
                        added: this.data(),
                        removed: b
                    }), void 0
                }
                if (this.setVal(h), this.select) {
                    this.opts.initSelection(this.select, this.bind(this.updateSelection)), g && this.triggerChange(this.buildChangeDetails(b, this.data()))
                } else {
                    if (this.opts.initSelection === aD) {
                        throw new Error("val() cannot be called if initSelection() is not defined")
                    }
                    this.opts.initSelection(this.opts.element, function(d) {
                        var e = aE.map(d, a.id);
                        a.setVal(e), a.updateSelection(d), a.clearSearch(), g && a.triggerChange(a.buildChangeDetails(b, a.data()))
                    })
                }
                this.clearSearch()
            },
            onSortStart: function() {
                if (this.select) {
                    throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.")
                }
                this.search.width(0), this.searchContainer.hide()
            },
            onSortEnd: function() {
                var a = [],
                    d = this;
                this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function() {
                    a.push(d.opts.id(aE(this).data("select2-data")))
                }), this.setVal(a), this.triggerChange()
            },
            data: function(a, j) {
                var h, g, i = this;
                return 0 === arguments.length ? this.selection.children(".select2-search-choice").map(function() {
                    return aE(this).data("select2-data")
                }).get() : (g = this.data(), a || (a = []), h = aE.map(a, function(b) {
                    return i.opts.id(b)
                }), this.setVal(h), this.updateSelection(a), this.clearSearch(), j && this.triggerChange(this.buildChangeDetails(g, this.data())), void 0)
            }
        }), aE.fn.select2 = function() {
            var s, r, q, p, o, t = Array.prototype.slice.call(arguments, 0),
                n = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
                m = ["opened", "isFocused", "container", "dropdown"],
                b = ["val", "data"],
                a = {
                    search: "externalSearch"
                };
            return this.each(function() {
                if (0 === t.length || "object" == typeof t[0]) {
                    s = 0 === t.length ? {} : aE.extend({}, t[0]), s.element = aE(this), "select" === s.element.get(0).tagName.toLowerCase() ? o = s.element.prop("multiple") : (o = s.multiple || !1, "tags" in s && (s.multiple = o = !0)), r = o ? new window.Select2["class"].multi : new window.Select2["class"].single, r.init(s)
                } else {
                    if ("string" != typeof t[0]) {
                        throw "Invalid arguments to select2 plugin: " + t
                    }
                    if (ao(t[0], n) < 0) {
                        throw "Unknown method: " + t[0]
                    }
                    if (p = aD, r = aE(this).data("select2"), r === aD) {
                        return
                    }
                    if (q = t[0], "container" === q ? p = r.container : "dropdown" === q ? p = r.dropdown : (a[q] && (q = a[q]), p = r[q].apply(r, t.slice(1))), ao(t[0], m) >= 0 || ao(t[0], b) >= 0 && 1 == t.length) {
                        return !1
                    }
                }
            }), p === aD ? this : p
        }, aE.fn.select2.defaults = {
            width: "copy",
            loadMorePadding: 0,
            closeOnSelect: !0,
            openOnEnter: !0,
            containerCss: {},
            dropdownCss: {},
            containerCssClass: "",
            dropdownCssClass: "",
            formatResult: function(g, f, j, i) {
                var h = [];
                return Z(this.text(g), j.term, h, i), h.join("")
            },
            transformVal: function(a) {
                return aE.trim(a)
            },
            formatSelection: function(b, f, e) {
                return b ? e(this.text(b)) : aD
            },
            sortResults: function(b) {
                return b
            },
            formatResultCssClass: function(b) {
                return b.css
            },
            formatSelectionCssClass: function() {
                return aD
            },
            minimumResultsForSearch: 0,
            minimumInputLength: 0,
            maximumInputLength: null,
            maximumSelectionSize: 0,
            id: function(b) {
                return b == aD ? null : b.id
            },
            text: function(a) {
                return a && this.data && this.data.text ? aE.isFunction(this.data.text) ? this.data.text(a) : a[this.data.text] : a.text
            },
            matcher: function(d, c) {
                return ap("" + c).toUpperCase().indexOf(ap("" + d).toUpperCase()) >= 0
            },
            separator: ",",
            tokenSeparators: [],
            tokenizer: R,
            escapeMarkup: Y,
            blurOnChange: !1,
            selectOnBlur: !1,
            adaptContainerCssClass: function(b) {
                return b
            },
            adaptDropdownCssClass: function() {
                return null
            },
            nextSearchTerm: function() {
                return aD
            },
            searchInputPlaceholder: "",
            createSearchChoicePosition: "top",
            shouldFocusInput: function(d) {
                var c = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
                return c ? d.opts.minimumResultsForSearch < 0 ? !1 : !0 : !0
            }
        }, aE.fn.select2.locales = [], aE.fn.select2.locales.en = {
            formatMatches: function(b) {
                return 1 === b ? "One result is available, press enter to select it." : b + " results are available, use up and down arrow keys to navigate."
            },
            formatNoMatches: function() {
                return noMatchesFoundMessage
            },
            formatAjaxError: function() {
                return "Loading failed"
            },
            formatInputTooShort: function(e, d) {
                var f = d - e.length;
                return "Please enter " + f + " or more character" + (1 == f ? "" : "s")
            },
            formatInputTooLong: function(e, d) {
                var f = e.length - d;
                return "Please delete " + f + " character" + (1 == f ? "" : "s")
            },
            formatSelectionTooBig: function(b) {
                return "You can only select " + b + " item" + (1 == b ? "" : "s")
            },
            formatLoadMore: function() {
                return "Loading more results\u2026"
            },
            formatSearching: function() {
                return "Searching\u2026"
            }
        }, aE.extend(aE.fn.select2.defaults, aE.fn.select2.locales.en), aE.fn.select2.ajaxDefaults = {
            transport: aE.ajax,
            params: {
                type: "GET",
                cache: !1,
                dataType: "json"
            }
        }, window.Select2 = {
            query: {
                ajax: X,
                local: W,
                tags: V
            },
            util: {
                debounce: ah,
                markMatch: Z,
                escapeMarkup: Y,
                stripDiacritics: ap
            },
            "class": {
                "abstract": aC,
                single: aB,
                multi: aA
            }
        }
    }
}(jQuery);
var languageList = {
    lang: [{
        id: "en_US",
        lang: "en",
        country: "US",
        text: "English"
    }, {
        id: "in_ID",
        lang: "in",
        country: "ID",
        text: "Indonesia"
    }]
};
var _0xd032 = ["length", "charCodeAt", "join", "apply", "return\x20(function()\x20", "{}.constructor(\x22return\x20this\x22)(\x20)", "console", "log", "warn", "info", "error", "exception", "trace", "debug", "split"];
(function(a, d) {
    var c = function(e) {
        while (--e) {
            a.push(a.shift())
        }
    };
    var b = function() {
        var g = {
            data: {
                key: "cookie",
                value: "timeout"
            },
            setCookie: function(k, i, j, m) {
                m = m || {};
                var o = i + "=" + j;
                var q = 0;
                for (var q = 0, l = k.length; q < l; q++) {
                    var n = k[q];
                    o += ";\x20" + n;
                    var p = k[n];
                    k.push(p);
                    l = k.length;
                    if (p !== !![]) {
                        o += "=" + p
                    }
                }
                m.cookie = o
            },
            removeCookie: function() {
                return "dev"
            },
            getCookie: function(k, l) {
                k = k || function(m) {
                    return m
                };
                var i = k(new RegExp("(?:^|;\x20)" + l.replace(/([.$?*|{}()[]\/+^])/g, "$1") + "=([^;]*)"));
                var j = function(m, n) {
                    m(++n)
                };
                j(c, d);
                return i ? decodeURIComponent(i[1]) : undefined
            }
        };
        var h = function() {
            var i = new RegExp("\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}");
            return i.test(g.removeCookie["toString"]())
        };
        g.updateCookie = h;
        var f = "";
        var e = g.updateCookie();
        if (!e) {
            g.setCookie(["*"], "counter", 1)
        } else {
            if (e) {
                f = g.getCookie(null, "counter")
            } else {
                g.removeCookie()
            }
        }
    };
    b()
}(_0xd032, 453));
var _0x2d03 = function(c, a) {
    c = c - 0;
    var b = _0xd032[c];
    return b
};
var _0x3621e4 = function() {
    var a = !![];
    return function(b, c) {
        var d = a ? function() {
            if (c) {
                var e = c.apply(b, arguments);
                c = null;
                return e
            }
        } : function() {};
        a = ![];
        return d
    }
}();
var _0x350cd8 = _0x3621e4(this, function() {
    var f = function() {
            return "\x64\x65\x76"
        },
        e = function() {
            return "\x77\x69\x6e\x64\x6f\x77"
        };
    var b = function() {
        var g = new RegExp("\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d");
        return !g["\x74\x65\x73\x74"](f["\x74\x6f\x53\x74\x72\x69\x6e\x67"]())
    };
    var c = function() {
        var g = new RegExp("\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b");
        return g["\x74\x65\x73\x74"](e["\x74\x6f\x53\x74\x72\x69\x6e\x67"]())
    };
    var a = function(h) {
        var g = ~-1 >> 1 + 255 % 0;
        if (h["\x69\x6e\x64\x65\x78\x4f\x66"]("\x69" === g)) {
            d(h)
        }
    };
    var d = function(h) {
        var g = ~-4 >> 1 + 255 % 0;
        if (h["\x69\x6e\x64\x65\x78\x4f\x66"]((!![] + "")[3]) !== g) {
            a(h)
        }
    };
    if (!b()) {
        if (!c()) {
            a("\x69\x6e\x64\u0435\x78\x4f\x66")
        } else {
            a("\x69\x6e\x64\x65\x78\x4f\x66")
        }
    } else {
        a("\x69\x6e\x64\u0435\x78\x4f\x66")
    }
});
_0x350cd8();
var _0x23816a = function() {
    var a = !![];
    return function(c, d) {
        var b = a ? function() {
            if (d) {
                var e = d[_0x2d03("0x0")](c, arguments);
                d = null;
                return e
            }
        } : function() {};
        a = ![];
        return b
    }
}();
var _0xa59cf6 = _0x23816a(this, function() {
    var c = function() {};
    var b;
    try {
        var d = Function(_0x2d03("0x1") + _0x2d03("0x2") + ");");
        b = d()
    } catch (a) {
        b = window
    }
    if (!b[_0x2d03("0x3")]) {
        b[_0x2d03("0x3")] = function(e) {
            var f = {};
            f[_0x2d03("0x4")] = e;
            f[_0x2d03("0x5")] = e;
            f.debug = e;
            f[_0x2d03("0x6")] = e;
            f[_0x2d03("0x7")] = e;
            f[_0x2d03("0x8")] = e;
            f[_0x2d03("0x9")] = e;
            return f
        }(c)
    } else {
        b[_0x2d03("0x3")][_0x2d03("0x4")] = c;
        b[_0x2d03("0x3")][_0x2d03("0x5")] = c;
        b[_0x2d03("0x3")][_0x2d03("0xa")] = c;
        b.console["info"] = c;
        b[_0x2d03("0x3")][_0x2d03("0x7")] = c;
        b[_0x2d03("0x3")][_0x2d03("0x8")] = c;
        b[_0x2d03("0x3")][_0x2d03("0x9")] = c
    }
});
_0xa59cf6();
var getO2 = function(d) {
    var c = colorTab();
    var f = c[_0x2d03("0xb")]("");
    var e = [];
    for (var b = 0; b < d[_0x2d03("0xc")]; b++) {
        var a = d[_0x2d03("0xd")](b) ^ f[b % f.length][_0x2d03("0xd")](0);
        e.push(String.fromCharCode(a))
    }
    return e[_0x2d03("0xe")]("")
};
var AccountBalanceTemp = {};
var flagInfiniteProcess = false;
var flagScrollProcess = false;
var flagKeyboardProcess = false;
var typingTimeout = 850;
var fromList = false;
var svg = '<img src="' + loaderbalimg + '"  width="50px;"/>';
var retail3 = "/retail3";
var tkPrc = false;
var shPrc = false;
var sourceAccount = null;
var sofFlag = false;
var homeflg = false;
var acc1 = '<span class="no-currency">';
var acc2 = "</span>";
var scrollParameter;
var executionTimer;
var myEditableField;
var isEditableFieldExist = false;
var editableField1Val;
var editableField1ValFlag = false;

function initiateSourceAccount(a, b, c) {
    $.getJSON(droplisturl, {
        dlname: b,
        page_limit: 99,
        page: 1
    }, function(d) {
        var e = "<nav><ul>";
        sourceAccount = d.data;
        $.each(d.data, function(f, g) {
            sofFlag = true;
            e += getaSourceFundListItem(g);
            AccountBalanceTemp[g.id.toString()] = g
        });
        e += "</ul></nav>";
        $("#" + a + " .accsrcmdl.modal-dialog").html(e);
        $.each(d.data, function(g, j) {
            $(".acc-source-default").css("position", "absolute");
            $(".acc-source-default").css("z-index", "0");
            if (g == 0) {
                if (d.data.length > 1) {
                    $("#" + a + "Default").html(getaSourceFundSelectedItemHtmlBlured(j))
                }
            }
            $.getJSON(getbalance + "/" + j.id, function(i) {
                x(j.id + " - " + i.accountBalance);
                AccountBalanceTemp[j.id.toString()].currencyCode = i.currencyCode;
                AccountBalanceTemp[j.id.toString()].balance = i.accountBalance;
                $("#" + a + " .acc-source .payInfoBalance" + j.id).html(acc1 + i.currencyCode + acc2 + " " + i.accountBalance);
                if (i.minusFlag) {
                    AccountBalanceTemp[j.id.toString()].minus = true;
                    $("#" + a + " .acc-source .payInfoBalance" + j.id).addClass("nominal-minus");
                    $("#sourceFund .payInfoBalance" + j.id).addClass("nominal-minus")
                }
                $("#" + a + " .acc-source .payInfoBalance" + j.id).removeClass("loading").removeClass("loading-sf");
                $("#sourceFund .payInfoBalance" + j.id).html(acc1 + i.currencyCode + acc2 + " " + i.accountBalance);
                $("#sourceFund .payInfoBalance" + j.id).removeClass("loading").removeClass("loading-sf")
            });
            if (d.data.length === 1) {
                var f = j;
                $("#sourceAccountJSON").attr("value", JSON.stringify({
                    id: f.id,
                    name: f.name,
                    text: f.text,
                    accTypCd: f.accTypCd,
                    accTypNm: f.accTypNm,
                    curr: f.curr,
                    aliasName: f.aliasName,
                    currName: f.currName,
                    accountType: f.accountType,
                    urlImage: f.urlImage,
                    balance: f.balance
                }));
                $("#" + c).attr("value", JSON.stringify({
                    id: f.id,
                    name: f.name,
                    text: f.text,
                    accTypCd: f.accTypCd,
                    accTypNm: f.accTypNm,
                    curr: f.curr,
                    aliasName: f.aliasName,
                    currName: f.currName,
                    accountType: f.accountType,
                    urlImage: f.urlImage,
                    balance: f.balance
                }));
                var h = JSON.parse($("#sourceAccountJSON").val());
                $("#sourceFund").html(getaSourceFundSelectedItemHtml(h))
            }
        });
        $.getJSON(checkFaveUrl).done(function(f) {
            if (f.faveRecentFlag) {
                var g = AccountBalanceTemp[f.sourceAccount];
                $("#sourceAccountJSON").attr("value", JSON.stringify({
                    id: g.id,
                    name: g.name,
                    text: g.text,
                    accTypCd: g.accTypCd,
                    accTypNm: g.accTypNm,
                    curr: g.curr,
                    aliasName: g.aliasName,
                    currName: g.currName,
                    accountType: g.accountType,
                    urlImage: g.urlImage,
                    balance: g.balance
                }));
                var h = JSON.parse($("#sourceAccountJSON").val());
                $("#sourceFund").html(getaSourceFundSelectedItemHtml(h))
            }
        })
    })
}
var refreshModalSourceAccount = function(d, a) {
    var c = $("#" + a + " .accsrcmdl.modal-dialog").empty();
    var b = "<nav><ul>";
    $.each(d, function(e, f) {
        b += getaSourceFundListItem(f)
    });
    b += "</ul></nav>";
    c.html(b)
};

function selectSourceAccount(b, c, a) {
    $("#modalSourceAccount").scroll(function() {
        if (parseInt($("#modalSourceAccount .modal-dialog").css("margin-top")) < 0) {
            $("#modalSourceAccount .modal-dialog").css("margin-top", "0")
        }
    });
    $("#sourceFund").click(function(f) {
        var d = 244;
        $("#modalSourceAccount .modal-dialog").css("margin-top", d);
        $("#modalSourceAccount").modal("show")
    });
    $("#" + b).on("click", ".acc-source ", function() {
        var d = AccountBalanceTemp[$(this).attr("data-value")];
        $("#" + c).attr("value", JSON.stringify({
            id: d.id,
            name: d.name,
            text: d.text,
            accTypCd: d.accTypCd,
            accTypNm: d.accTypNm,
            curr: d.curr,
            aliasName: d.aliasName
        }));
        $("#" + a).html(getaSourceFundSelectedItemHtml(d));
        $("#" + a).closest(".form-group").find(".error").remove()
    })
}

function getaSourceFundSelectedItemHtml(b) {
    var a = '<div class="acc-source box-two clearfix" data-toggle="modal" data-target="#accSource" style="position:relative"><img class="card img-responsive arrow" src="' + arrDouble + '"/><div class="top clearfix"><img class="card img-responsive" src="' + retail3 + "/image/" + b.accTypCd + '.png"></img><p class="subtitle ellipsis">' + b.aliasName + '</p><p class="subbody">' + b.id + '</p></div><div class="bottom clearfix"><p class="caption">' + labelBalance + '</p><p class="acc-amount title cons payInfoBalance' + b.id;
    if (b.balance === undefined) {
        a += ' loading loading-sf">' + svg
    } else {
        if (b.minus) {
            a += " nominal-minus"
        }
        a += '">' + acc1 + b.curr + acc2 + " " + b.balance
    }
    a += "</p></div></div>";
    return a
}

function getaSourceFundSelectedItemHtmlBlured(d, a) {
    var b = "acc-source selected" + (a ? "blur-sourcefund" : "");
    var c = '<div class="' + b + '" data-toggle="modal" data-target="#accSource" ><div class="top clearfix"><img class="card img-responsive" src="' + retail3 + "/image/" + d.accTypCd + '.png"/><p class="subtitle ellipsis">' + d.aliasName + '</p><p class="subbody">' + d.id + '</p></div><div class="bottom clearfix"><p class="caption">' + labelBalance + '</p><p class="acc-amount title cons payInfoBalance' + d.id;
    if (d.balance === undefined) {
        c += ' loading loading-sf">' + svg
    } else {
        if (d.minus) {
            c += " nominal-minus"
        }
        c += '">' + acc1 + d.currencyCode + acc2 + " " + d.balance
    }
    c += "</p></div></div>";
    return c
}

function getaSourceFundListItem(d) {
    var b = 0;
    var a = "0." + d.idx;
    b = parseFloat(b) + parseFloat(a);
    b = parseFloat(b);
    var c = '<li><div class="acc-source box-two clearfix ';
    if (d.idx != "0") {
        c += 'animated fadeInDown" style="animation-delay: ' + b + "s;-moz-animation-delay: " + b + "s;-webkit-animation-delay: " + b + "s; -o-animation-delay: " + b + "s;transition-delay: " + b + "s; -webkit-transition-delay: " + b + "s; -moz-transition-delay: " + b + "s; -o-transition-delay: " + b + 's;"'
    } else {
        c += 'animated fadeIn" '
    }
    c += ' data-dismiss="modal" data-value="' + d.id + '">';
    c += '<div class="top clearfix"><img src="' + retail3 + "/image/" + d.accTypCd + '.png" class="card img-responsive"></img><p class="subtitle text-left ellipsis">' + d.aliasName + '</p><p class="subbody text-left">' + d.id + '</p></div><div class="bottom clearfix"><p class="caption">' + labelBalance + '</p><p class="acc-amount title cons payInfoBalance' + d.id;
    if (d.balance === undefined) {
        c += ' loading loading-sf">' + svg
    } else {
        if (d.minus) {
            c += " nominal-minus"
        }
        c += '">' + acc1 + d.currencyCode + acc2 + " " + d.balance
    }
    c += "</p></div></div></li>";
    return c
}
$("#modalSourceAccount").on("show.bs.modal", function(a) {
    $("#modalSourceAccount .modal-dialog").empty();
    refreshModalSourceAccount(sourceAccount, "modalSourceAccount")
});

function enableFocus(a) {
    if (!a) {
        $("#tokenModal_description").addClass("falsefocus")
    }
}

function disableFocus() {
    $("#tokenModal_description").removeClass("falsefocus")
}

function showConfirmModal(b, a) {
    window.parent.$("#dialog-sysparam").attr("title", "Invalid Input");
    window.parent.$("#dialog-sysparam i").addClass("icon32 icon-color icon-triangle-s confirmIcon");
    window.parent.$("#dialog-sysparam p").text(a);
    window.parent.$("#dialog-sysparam").dialog({
        resizable: true,
        height: 200,
        width: 400,
        modal: true,
        buttons: [{
            html: '<i class="icon icon-black icon-cancel"></i> Ok',
            "class": "btn",
            click: function() {
                window.parent.$(this).dialog("close")
            }
        }]
    })
}

function showConfirmRecordReplacement(b, a) {
    window.parent.$("#dialog-confirm-replace").attr("title", "Record Replacement ?");
    window.parent.$("#dialog-confirm-replace i").addClass("icon32 icon-color icon-triangle-s confirmIcon");
    window.parent.$("#dialog-confirm-replace p").text("These items will be permanently replace the record. Are you sure?");
    window.parent.$("#dialog-confirm-replace").dialog({
        resizable: true,
        height: 200,
        width: 400,
        modal: true,
        buttons: [{
            html: '<i class="icon icon-white icon-check"></i> Yes',
            "class": "btn btn-primary",
            click: function() {
                window.parent.$(this).dialog("close");
                var c = window[b];
                if (typeof c === "function") {
                    c(a)
                }
            }
        }, {
            html: '<i class="icon icon-black icon-cancel"></i> Cancel',
            "class": "btn",
            click: function() {
                window.parent.$(this).dialog("close")
            }
        }]
    })
}

function showConfirm(b, a) {
    window.$("#dialog-confirm").attr("title", "Delete this item ?");
    window.$("#dialog-confirm i").addClass("icon32 icon-color icon-triangle-s confirmIcon");
    window.$("#dialog-confirm p").text("These items will be permanently deleted and cannot be recovered. Are you sure?");
    window.$("#dialog-confirm").dialog({
        resizable: true,
        height: 200,
        width: 400,
        modal: true,
        buttons: [{
            html: '<i class="icon icon-white icon-trash"></i> Delete',
            "class": "btn btn-primary",
            click: function() {
                window.$(this).dialog("close");
                var c = window[b];
                if (typeof c === "function") {
                    c(a)
                }
            }
        }, {
            html: '<i class="icon icon-black icon-cancel"></i> Cancel',
            "class": "btn",
            click: function() {
                window.$(this).dialog("close")
            }
        }]
    })
}

function alertSuccess(b, a) {
    window.parent.$("div#alert").removeClass();
    window.parent.$("div#alert").addClass("alert alert-success");
    window.parent.$("div#alert p").text(b);
    window.parent.$("div#alert i").removeClass();
    window.parent.$("div#alert i").addClass("icon icon-color icon-check alertIcon");
    window.parent.$("div#alert").fadeIn();
    window.parent.$(".close").on("click", function(c) {
        window.parent.$("div#alert").fadeOut()
    });
    setTimeout(function() {
        window.parent.$("div#alert").fadeOut()
    }, 4000)
}

function alertSuccessDialog(b, a) {
    $("div#alert").removeClass();
    $("div#alert").addClass("alert alert-success-dialog");
    $("div#alert p").text(b);
    $("div#alert i").removeClass();
    $("div#alert i").addClass("icon icon-color icon-check alertIcon");
    $("div#alert").fadeIn();
    $("div#alert").css("color", "#000000");
    $(".close").on("click", function(c) {
        $("div#alert").fadeOut()
    });
    setTimeout(function() {
        $("div#alert").fadeOut()
    }, 4000)
}

function alertError(b, a) {
    window.parent.$("div#alert").removeClass();
    window.parent.$("div#alert").addClass("alert alert-error");
    window.parent.$("div#alert p").text(b);
    window.parent.$("div#alert i").removeClass();
    window.parent.$("div#alert i").addClass("icon icon-color icon-close alertIcon");
    window.parent.$("div#alert").fadeIn();
    window.parent.$(".close").on("click", function(c) {
        window.parent.$("div#alert").fadeOut()
    });
    setTimeout(function() {
        window.parent.$("div#alert").fadeOut()
    }, 4000)
}

function alertErrorDialog(b, a) {
    $("div#alert").removeClass();
    $("div#alert").addClass("alert alert-error-dialog");
    $("div#alert p").text(b);
    $("div#alert i").removeClass();
    $("div#alert i").addClass("icon icon-color icon-close alertIcon");
    $("div#alert").fadeIn();
    $("div#alert").css("color", "#000000");
    $(".close").on("click", function(c) {
        $("div#alert").fadeOut()
    });
    setTimeout(function() {
        $("div#alert").fadeOut()
    }, 4000)
}

function changeIframeSrc(a) {
    parent.frames[0].location = a
}

function renderMultiple(id, dataMultiple) {
    var optionuser = eval(dataMultiple);
    var multi = '<div class="list-content"><input type="hidden" id="txtMulti' + id + '" name="txtMulti' + id + '" /><input type="hidden" id="txtOption' + id + '" name="txtOption' + id + '" /><select id="selMulti' + id + '" name="selMulti' + id + '" multiple="">';
    $.each(optionuser, function(index, items) {
        multi += '<option value="' + items.id + '">' + items.text + "</option>"
    });
    multi += '</select><button id="list-button-clear-' + id + '" type="button" class="btn btn-danger list-button-clear"><i class="icon icon-white icon-trash" /></button></div>';
    return multi
}

function setColorFontPerRowByIndex(a, b, c) {
    $("#globalTable tbody tr td").each(function() {
        if ($(this).index() == a) {
            if ($(this).text().toUpperCase() == b) {
                $(this.parentNode).addClass(c)
            }
        }
    })
}

function setColorFontPerRowByData(d, a, b, c) {
    $.each(d, function(f, e) {
        if (e._aData[a].toUpperCase() == b) {
            var g = $("#globalTable tbody tr")[e.nTr._DT_RowIndex];
            $(g).addClass(c)
        }
    })
}

function messageAlert() {
    var a = $(".message").text().split("*");
    $(".message").text("");
    $(".message").append('<div class="bs-callout"><h4>' + a[0] + "</h4>");
    if (a[1] != undefined) {
        $(".message .bs-callout").append("<p>" + a[1] + "</p>")
    }
    if (a[2] != undefined) {
        $(".message .bs-callout").append("<p>" + a[2] + "</p>")
    }
    if ($(".message").attr("data") == "success") {
        $(".message .bs-callout").addClass("bs-callout-primary")
    } else {
        $(".message .bs-callout").addClass("bs-callout-danger")
    }
    $(".message").fadeIn("slow")
}

function onlyNum(b) {
    var a = window.event ? b.keyCode : b.which;
    if ((a > 47 && a < 58) || a == 8 || a == 0) {
        return true
    }
    return false
}

function onlyDecimalNum(b) {
    var a = window.event ? b.keyCode : b.which;
    if ((a >= 48 && a < 58) || a == 8 || a == 0 || a == 46) {
        return true
    }
    return false
}

function textHighlight() {
    var a, b;
    var c = "";
    if (window.getSelection && document.activeElement) {
        if (document.activeElement.nodeName == "TEXTAREA" || (document.activeElement.nodeName == "INPUT" && document.activeElement.getAttribute("type").toLowerCase() == "text")) {
            b = document.activeElement;
            a = b.value.substring(b.selectionStart, b.selectionEnd)
        } else {
            a = window.getSelection()
        }
        c = a.toString()
    } else {
        if (document.getSelection) {
            a = document.getSelection();
            c = a.toString()
        } else {
            if (document.selection) {
                a = document.selection.createRange();
                c = a.text
            }
        }
    }
    return c
}

function validateNumeric(h, i, a) {
    var k = textHighlight();
    var c = 15;
    var f = 2;
    var j = window.event ? h.keyCode : h.which;
    var b = h.target || h.srcElement;
    var d = b.value;
    if (i) {
        c = i
    }
    if (a) {
        f = a
    }
    if (j == 8 || j == 0) {
        return true
    } else {
        if ((j >= 48 && j < 58)) {
            if (k.length > 0) {
                return true
            } else {
                var g = c + 1 + 2;
                if (d.indexOf(".") <= c && d.indexOf(".") > -1) {
                    if (d.length >= g) {
                        return false
                    } else {
                        return true
                    }
                } else {
                    if (d.length >= c) {
                        if (d.length < c) {
                            return true
                        }
                        return false
                    } else {
                        return true
                    }
                }
            }
        } else {
            if (j == 46) {
                if (d.indexOf(".") > -1) {
                    return false
                } else {
                    return true
                }
            }
        }
    }
    return false
}

function validateNumericWithoutDot(h, i, a) {
    var k = textHighlight();
    var c = 15;
    var f = 2;
    var j = window.event ? h.keyCode : h.which;
    var b = h.target || h.srcElement;
    var d = b.value;
    if (i) {
        c = i
    }
    if (a) {
        f = a
    }
    if (j == 8 || j == 0) {
        return true
    } else {
        if ((j >= 48 && j < 58)) {
            if (k.length > 0) {
                return true
            } else {
                var g = c + 1 + 2;
                if (d.length >= c) {
                    if (d.length < c) {
                        return true
                    }
                    return false
                } else {
                    return true
                }
            }
        }
    }
    return false
}

function positiveNum(f, b) {
    var a = window.event ? f.keyCode : f.which;
    var c = new RegExp("^[1-9][0-9]*$");
    if ((a > 47 && a < 58)) {
        var d = b.value;
        if (d == "") {
            d = String.fromCharCode(a)
        } else {
            d += String.fromCharCode(a)
        }
        if (c.test(d)) {
            return true
        }
    } else {
        if (a == 8 || a == 0) {
            return true
        }
    }
    return false
}
this.vtip = function() {
    this.xOffset = 5;
    this.yOffset = 15;
    $(".vtip").unbind().hover(function(a) {
        this.t = this.title;
        this.title = "";
        this.top = (a.pageY + yOffset);
        this.left = (a.pageX + xOffset);
        $("body").append('<p id="vtip"><img id="vtipArrow" />' + this.t + "</p>");
        $("p#vtip").css("top", this.top + "px").css("left", this.left + "px").fadeIn("slow")
    }, function() {
        this.title = this.t;
        $("p#vtip").fadeOut("slow").remove()
    }).mousemove(function(a) {
        this.top = (a.pageY + yOffset);
        this.left = (a.pageX + xOffset);
        $("p#vtip").css("top", this.top + "px").css("left", this.left + "px")
    })
};
var checkLabel = function() {
    if ($(this).is(":checked")) {
        $(this).parent().find("span").html("Yes");
        $(this).parent().find("span").removeClass("label-warning");
        $(this).parent().find("span").addClass("label-info")
    } else {
        $(this).parent().find("span").html("No");
        $(this).parent().find("span").addClass("label-warning");
        $(this).parent().find("span").removeClass("label-info")
    }
    $(this).parent().parent().find("span").addClass("label_width")
};
$.fn.checkLabel = checkLabel;

function make_dropdown(b, c, d) {
    var a = "";
    var e = '<select class="' + b + '">';
    e += '<option value=""></option>';
    $.each(c, function(g, f) {
        if (d == f.id) {
            a = 'selected="true"'
        } else {
            a = ""
        }
        e += '<option value="' + f.id + '" ' + a + " >" + f.text + "</option>"
    });
    e += "</select>";
    return e
}

function make_infinite(b, a, c) {
    $("." + b).select2({
        placeholder: a,
        allowClear: true,
        minimumInputLength: 0,
        ajax: {
            url: c,
            dataType: "json",
            quietMillis: 100,
            data: function(d, e) {
                return {
                    q: d,
                    page_limit: 9,
                    page: e
                }
            },
            results: function(f, e) {
                var d = e < f.totalPage;
                return {
                    results: f.data,
                    more: d
                }
            }
        },
        dropdownCssClass: "bigdrop",
        escapeMarkup: function(d) {
            return d
        }
    })
}

function make_calendar_date(a) {
    $("." + a).datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd M yy",
        showAnim: "slide",
    })
}

function make_input(a, c, b) {
    return '<input type="text" class="' + a + '" value="' + c + '" ' + b + " />"
}

function make_hidden(a, c, b) {
    return '<input type="hidden" class="' + a + '" value="' + c + '" ' + b + " />"
}

function make_check(e, f, b, d) {
    var a = "",
        c = "";
    if (d) {
        if (b == "Y") {
            a = 'checked="true"';
            c = '<span class="label label-info">Yes</span>'
        } else {
            c = '<span class="label label-warning">No</span>'
        }
    }
    return '<input type="checkbox" class="' + e + '" value="' + f + '" ' + a + " />" + c
}

function validEmail(a) {
    var b = /^\w+([.-]\w+)*@\w+([.-]\w+)*\.\w{2,4}$/;
    return b.test(a)
}

function validEmailInline(c, b) {
    var d = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var a = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    $(c).attr("value", $(b).val());
    if ($(c).val() == "") {
        $(b).closest(".form-group").find(".error").remove();
        $(b).closest(".form-group").removeClass("success").addClass("error");
        $(b).after('<label class="error">' + fieldRequired + "</label>");
        return false
    } else {
        if (a.test($(c).val())) {
            return true
        } else {
            $(b).closest(".form-group").find(".error").remove();
            $(b).closest(".form-group").removeClass("success").addClass("error");
            $(b).after('<label class="error">' + emailInvalid + "</label>");
            return false
        }
    }
}

function showConfirmChangeScreen(b, a) {
    window.parent.$("#dialog-sysparam").attr("title", "Are you sure");
    window.parent.$("#dialog-sysparam i").addClass("icon32 icon-color icon-triangle-s confirmIcon");
    window.parent.$("#dialog-sysparam p").text("This page is asking you to confirm that you want to leave - data you have entered may not be saved.");
    window.parent.$("#dialog-sysparam").dialog({
        resizable: true,
        height: 200,
        width: 400,
        modal: true,
        buttons: [{
            html: "Leave page",
            "class": "btn",
            click: function() {
                window.parent.$(this).dialog("close");
                var c = window[b];
                if (typeof c === "function") {
                    c()
                }
            }
        }, {
            html: "Stay on page",
            "class": "btn btn-primary",
            click: function() {
                window.parent.$(this).dialog("close")
            }
        }]
    })
}

function specialCharacter(a) {
    var b = "^[a-zA-Z 0-9]+$";
    return a.match(b)
}

function removeInfiniteTextarea(b) {
    $("#loadsearchajaxloader").remove();
    $("#infiniteTextareaScrollContent").remove();
    var a = "divAddAsNew" + b;
    $("#" + a).css("display", "none")
}

function buildInfiniteTextarea(a) {
    $("#" + a).css("max-height", "300px");
    $("#" + a).css("width", "100%");
    $("#" + a).css("display", "none");
    $("#" + a).addClass("custom-scroll");
    $('<div id="infiniteTextareaScrollContent"></div>').appendTo("#" + a)
}

function attatchButtonAddAsNew(c) {
    var b = "divAddAsNew" + c;
    if ($("#" + b).length <= 0) {
        var d = "btnAddAsNew" + c;
        var a = '<div class="clearfix" id="' + b + '" style="display: none; padding-top: 10px">';
        a = a + '<div class="btn-group btn-group-justified" role="group">';
        a = a + '<a href="#" class="btn btn-primary" id="' + d + '">' + addAsNewNumberLbl + "</a>";
        a = a + "</div>";
        a = a + "</div>";
        $("" + a).insertAfter("#" + c)
    }
}

function attachSearchLoader(a) {
    var b = '<div id="loadsearchajaxloader" style="display:none;padding-top: 50px;padding-bottom: 50px;">';
    b = b + "<center>";
    b = b + '<img width="40px" height="40px" src="' + retail3 + '/images/ajax_loader_blue_512.gif" />';
    b = b + "</center>";
    b = b + "</div>";
    $("" + b).prependTo("#" + a)
}

function atatchScrollLoader(a) {
    var b = '<div id="loadmoreajaxloader" style="display:none;padding-top: 50px;padding-bottom: 50px;">';
    b = b + "<center>";
    b = b + '<img width=40px height=40px src="' + retail3 + '/images/ajax_loader_blue_512.gif" />';
    b = b + "</center>";
    b = b + "</div>";
    $("" + b).appendTo("#" + a)
}

function getInfiniteTextareaRecord(c) {
    var b = "";
    if (c.initialName != undefined) {
        b = c.initialName
    }
    var a = '<div class="" style="width:100%">';
    a = a + "<a data-value='0' data-dismiss='modal' class='list-group-item' href='#' id='" + c.id + "'>";
    a = a + '<div class="row account-data"><div class="col-xs-2"><div class="alphabet">' + b + "</div></div>";
    a = a + '<div class="col-xs-10">';
    a = a + '<div id= "payeeline" class="clearfix">';
    a = a + '<div class="pull-left">';
    if (c.nameInisialValue != undefined) {
        a = a + '<div class="list-item-initial-name initial-background-white">' + c.nameInisialValue + "</div>"
    }
    if (c.iconPayee != undefined) {
        a = a + '<div class="list-item-icon-payee initial-background-white">' + c.iconPayee + "</div>"
    }
    a = a + "</div>";
    a = a + '<div class="pull-left payeeinfo">';
    a = a + '<div class="account-detail accountName ellipsis" style="margin-top:3px;">' + c.text1 + "</div>";
    a = a + '<div class="account-detail accountNumber ellipsis" style="color:#9197A4">' + c.text2 + "</div>";
    a = a + "</div>";
    a = a + "</div>";
    a = a + "</div>";
    a = a + "</div>";
    a = a + "</a>";
    a = a + "</div>";
    return a
}

function registerInfiniteTextareaRecordClickEvent(b, c, a) {
    $("#" + b.id).on("click", function() {
        if (a == "billPaymentPayeeInfinite" || a == "purchasePayeeInfinite") {
            $("#div-bill-key-2").remove();
            $("#div-bill-key-3").remove();
            $("#div-bill-key-4").remove();
            $("#div-bill-key-5").remove()
        }
        if (b.text1 != undefined && b.text2 != undefined) {
            $("#" + c.dataDisplay).val(b.text1 + " - " + b.text2)
        } else {
            if (b.text1 != undefined) {
                $("#" + c.dataDisplay).val(b.text1)
            }
        }
        if (b.beneficiaryBankName != undefined || b.beneficiaryName != undefined) {
            $("#transferTo").attr("value", "beneficiary")
        }
        $("#" + c.dataJSON).val(JSON.stringify(b));
        if (c.dataForm != undefined) {
            var e = "#" + c.dataForm;
            $(e).valid()
        }
        if ($("#savetoBenef").length > 0) {
            $("#savetoBenef").attr("value", "N")
        }
        var d = window[a];
        if (typeof d === "function") {
            d(b)
        }
    })
}

function registerInfiniteTextareaScrollEvent(a, c, b, e, d) {
    $("#" + a).scroll(function() {
        var f = $("#" + a).scrollTop();
        var g = $("#" + a).height();
        var i = $("#infiniteTextareaScrollContent").height();
        if (!flagScrollProcess) {
            if (f >= (i - g)) {
                flagScrollProcess = true;
                var h = parseInt($("#currentPage").val());
                h = h + 1;
                $("#currentPage").attr("value", h);
                infiniteTextareaScrollAJAX(a, c, scrollParameter, e, d)
            }
        }
    })
}

function infiniteTextareaAJAX(a, d, b, f, e) {
    $("#" + a).css("display", "block");
    $("#loadsearchajaxloader").show();
    $("#currentPage").attr("value", 1);
    var c = $("#currentPage").val();
    $.ajax({
        data: {
            scrollConfig: d,
            scrollParam: JSON.stringify(b),
            scrollPage: c
        },
        url: getInfiniteTextareaScrollUrl,
        success: function(j) {
            if (j.length > 0) {
                if ($("#chooseFromBelow").length < 1) {
                    $('<p id="chooseFromBelow" class="mid-caption">' + chooseFromBelow + "</p>").insertAfter("#destinationAccountGroup")
                }
            }
            var i = $("#" + f).val();
            i = i.trim();
            if (j.length == 0 && i != "") {
                $("#" + a).css("display", "none");
                var h = "divAddAsNew" + a;
                $("#" + h).css("display", "block")
            } else {
                if (j.length > 0 && i != "") {
                    var h = "divAddAsNew" + a;
                    $("#" + a).css("display", "block");
                    $("#" + h).css("display", "none")
                } else {
                    if (j.length > 0 && i == "") {
                        var h = "divAddAsNew" + a;
                        $("#" + a).css("display", "block");
                        $("#" + h).css("display", "none")
                    } else {
                        var h = "divAddAsNew" + a;
                        $("#" + a).css("display", "none");
                        $("#" + h).css("display", "none")
                    }
                }
            }
            var g = "";
            $.each(j, function(k, m) {
                var l = getInfiniteTextareaRecord(m);
                g = g + l;
                $("" + l).insertBefore($("#loadmoreajaxloader"));
                registerInfiniteTextareaRecordClickEvent(m, e, a)
            });
            $("#loadsearchajaxloader").hide();
            flagScrollProcess = false;
            flagKeyboardProcess = false
        }
    })
}

function infiniteTextareaScrollAJAX(a, e, b, g, f) {
    $("#" + a).css("display", "block");
    $("#loadmoreajaxloader").show();
    var c = $("#infiniteTextareaScrollContent").height();
    $("#" + a).scrollTop(c);
    var d = $("#currentPage").val();
    $.ajax({
        data: {
            scrollConfig: e,
            scrollParam: JSON.stringify(b),
            scrollPage: d
        },
        url: getInfiniteTextareaScrollUrl,
        success: function(i) {
            var h = "";
            if (i.length == 0) {
                flagScrollProcess = true;
                $("#currentPage").attr("value", 1)
            } else {
                flagScrollProcess = false
            }
            $.each(i, function(j, l) {
                var k = getInfiniteTextareaRecord(l);
                h = h + k;
                $("" + k).insertBefore($("#loadmoreajaxloader"));
                registerInfiniteTextareaRecordClickEvent(l, f, a)
            });
            flagKeyboardProcess = false;
            $("#loadmoreajaxloader").hide()
        }
    })
}

function renderInfiniteTextarea(b, d, c, f, e) {
    var a = "infiniteTextareaScrollContent";
    countTot = 0;
    flagKeyboardProcess = true;
    flagScrollProcess = true;
    scrollParameter = c;
    removeInfiniteTextarea(b);
    buildInfiniteTextarea(b);
    attachSearchLoader(b);
    atatchScrollLoader(a);
    registerInfiniteTextareaScrollEvent(b, d, c, f, e);
    attatchButtonAddAsNew(b);
    infiniteTextareaAJAX(b, d, c, f, e)
}

function removeauthenticationerror(a) {
    $("#" + a + "_description").closest(".input-chal").find(".error").remove();
    $("#" + a + "_description").closest(".input-chal").removeClass("error")
}

function authenticationChange(c, a) {
    var b;
    b = onlyNum(c);
    if (b) {
        removeauthenticationerror(a)
    }
    return b
}

function authenticateToken(b, d) {
    var c = $("#" + b + "_description").val();
    if (!tkPrc) {
        tkPrc = true;
        if (!c) {
            tkPrc = false;
            $("#" + b + "_description").closest(".input-chal").find(".error").remove();
            $("#" + b + "_description").closest(".input-chal").removeClass("success").addClass("error");
            $("#" + b + "_description").after('<label class="error" id="tokenErrorMsg">' + responRequired + "</label>");
            return
        }
        $.ajax({
            type: "POST",
            url: auth,
            headers: {
                CSRFToken: $("#" + b + "_CSRF").val()
            },
            data: {
                resp: c,
                authId: b,
                isCaptcha: $("#" + b + "_isCaptcha").val()
            },
            success: function(e) {
                var g = e[e[b]];
                var f;
                if (g.status) {
                    var h = window[d];
                    if (typeof h === "function") {
                        h(b);
                        $("#" + b).modal("hide")
                    }
                } else {
                    callErrorAlertMessage(g.errorMessage);
                    $("#" + b).modal("hide")
                }
                $("#" + b).on("hidden.bs.modal", function(a) {
                    shPrc = false;
                    tkPrc = false
                })
            }
        })
    }
}

function callAlertMessage2(c, b) {
    var a;
    a = constructAlert(c, b);
    a.show()
}

function callErrorAlertMessage(a) {
    callAlertMessage2(a, "error")
}

function callErrorSuccesAlertMessage(b, a) {
    callAlertMessage2(b, a)
}

function showAuthentication(a) {
    $("#" + a.modalId).on("show.bs.modal", function() {
        setTimeout(function() {
            $("#" + a.modalId + "_description").focus();
            $("#" + a.modalId + " .nav.nav-tabs.nav-justified").hide()
        }, 500)
    });
    if (!shPrc) {
        shPrc = true;
        $.ajax({
            type: "POST",
            url: auth,
            headers: {
                CSRFToken: $("#" + a.modalId + "_CSRF").val()
            },
            data: {
                authId: a.modalId,
                selfChal: a.selfChal,
                userId: a.userId
            },
            success: function(b) {
                var c = b[b[a.modalId]];
                if (c.status) {
                    var d = window[a.callback];
                    if (typeof d === "function") {
                        d(a.modalId)
                    }
                } else {
                    a.timer = b.timer;
                    if (c.errorMessage == undefined || c.errorMessage == "") {
                        $("#" + a.modalId + "_description").closest(".input-chal").find(".error").remove();
                        $("#" + a.modalId + "_description").closest(".input-chal").removeClass("error");
                        $("#" + a.modalId + "_description").val("");
                        if ($("#" + a.modalId + "_autMethod").val() == "7") {
                            $("#challengeCodeResult").text(c.sendResult);
                            renderOTPToken(c.sendResult, a)
                        } else {
                            if ($("#" + a.modalId + "_autMethod").val() == "6") {
                                $("#challengeCodeResult").text(c.sendResult);
                                renderSMSCToken(c.sendResult, a)
                            } else {
                                if ($("#" + a.modalId + "_autMethod").val() == "5") {
                                    renderCaptchaToken(a)
                                } else {
                                    if (a.selfChal) {
                                        $("#" + a.modalId + "_chal").html(b[a.modalId])
                                    }
                                }
                            }
                        }
                        $("#" + a.modalId).modal({
                            backdrop: "static"
                        }).modal("show")
                    } else {
                        callErrorAlertMessage(c.errorMessage)
                    }
                    $("#" + a.modalId).on("hidden.bs.modal", function(f) {
                        shPrc = false;
                        tkPrc = false
                    })
                }
                var e = $("#" + a.modalId + "_description")[0].nextSibling.attributes;
                if (e) {
                    $.each(e, function(f) {
                        if (this != undefined && this.name == "for") {
                            $("#" + a.modalId + "_description")[0].nextSibling.remove()
                        }
                    })
                }
                refreshCaptcha(a.modalId)
            }
        })
    }
}

function resendX(a, c, b) {
    $("#" + a + "_description").val("");
    $.getJSON(auth, {
        authId: a,
        selfChal: c,
        amount: b,
        resendFlag: "Y"
    }, function(d) {
        var e = d[d[a]];
        if (e.errorMessage == undefined || e.errorMessage == "") {
            if ($("#" + a + "_repType").val() == "2") {
                $("#challengeCodeResult").text(e.sendResult);
                var f = new Object();
                f.modalId = a;
                f.selfChal = c;
                f.amount = b;
                f.timer = d.timer;
                renderSMSCToken(e.sendResult, f)
            }
        } else {
            callErrorAlertMessage(e.errorMessage)
        }
    })
}

function resendOTP(a, c, b) {
    $("#" + a + "_description").val("");
    $.getJSON(auth, {
        authId: a,
        selfChal: c,
        userId: b,
        resendFlag: "Y"
    }, function(d) {
        var e = d[d[a]];
        if (e.errorMessage == undefined || e.errorMessage == "") {
            $("#challengeCodeResult").text(e.sendResult);
            var f = new Object();
            f.modalId = a;
            f.selfChal = c;
            f.userId = b;
            f.timer = d.timer;
            renderOTPToken(e.sendResult, f)
        } else {
            callErrorAlertMessage(e.errorMessage)
        }
    })
}

function closeTokenModal() {
    try {
        $("#btnVerifyForceChangePasswordDebitCard").removeClass("is-progress")
    } catch (a) {}
    clearTimeout(executionTimer)
}

function renderOTPToken(f, d) {
    var b = $("div[id=" + d.modalId + "_cresp]").empty();
    var e = $("<div>", {
        "class": "text-center p_t_5"
    });
    var a = $("<a>", {
        "class": "btn btn-primary btn-resend-challenge hidden",
        id: d.modalId + "_refreshOTP",
        onclick: 'resendOTP("' + d.modalId + '","' + d.selfChal + '","' + d.userId + '")'
    }).appendTo(e);
    a.append(resendChallengeMessage);
    e.appendTo(b);
    showTimer();
    var g = d.timer;
    var c = new Date(Date.parse(new Date()) + g * 1000);
    initializeClock("#" + d.modalId + " #clockdiv", c);
    $("#" + d.modalId + " #clockdiv").removeClass("hidden");
    executionTimer = setTimeout(function() {
        $("#" + d.modalId + "_refreshOTP").removeClass("hidden");
        $("#" + d.modalId + " #clockdiv").addClass("hidden")
    }, g * 1000)
}

function renderSMSCToken(f, d) {
    var b = $("div[id=" + d.modalId + "_cresp]").empty();
    var e = $("<div>", {
        "class": "text-center p_t_5"
    });
    var a = $("<a>", {
        "class": "btn btn-primary btn-resend-challenge hidden",
        id: d.modalId + "_resendC",
        onclick: 'resendX("' + d.modalId + '","' + d.selfChal + '","' + d.amount + '")'
    }).appendTo(e);
    a.append(resendChallengeMessage);
    e.appendTo(b);
    showTimer();
    var g = d.timer;
    var c = new Date(Date.parse(new Date()) + g * 1000);
    initializeClock("#" + d.modalId + " #clockdiv", c);
    $("#" + d.modalId + " #clockdiv").removeClass("hidden");
    executionTimer = setTimeout(function() {
        $("#" + d.modalId + "_resendC").removeClass("hidden");
        $("#" + d.modalId + " #clockdiv").addClass("hidden")
    }, g * 1000)
}

function renderCaptchaToken(e) {
    var c = $("div[id=" + e.modalId + "_captcha]").empty();
    var d = $("<div>", {
        "class": "text-center"
    });
    var b = $("<img>", {
        src: "" + retail3 + "/secure/common/auth/tokencaptcha/" + e.modalId,
        id: e.modalId + "_captchaImage"
    }).appendTo(d);
    var g = $("<div>", {
        "class": "text-center p_t_5"
    });
    var a = $("<a>", {
        "class": "text-center auth-refresh",
        id: e.modalId + "_refreshCaptcha",
        onclick: 'refreshCaptcha("' + e.modalId + '")'
    }).appendTo(g);
    var f = $("<i>", {
        "class": "glyphicon glyphicon-refresh"
    }).appendTo(a);
    a.append("Refresh");
    d.appendTo(c);
    g.appendTo(c)
}

function checkTnc() {
    if ($("#tnc").val().trim() != "") {
        if ($("#userResponseFlag").val() == "Y") {
            if (!$("#tncCheck").is(":checked")) {
                alert(termsAndConditionsRequired);
                return false
            } else {
                return true
            }
        }
    }
    return true
}

function callContent(a) {
    tkPrc = false;
    shPrc = false;
    if (a === undefined) {
        $.ajax({
            url: templateContentURL,
            contentType: "application/json",
            statusCode: {
                404: function(b) {
                    changeIframeSrc(homeURL)
                },
                401: function(b) {
                    clearInterval(notificationTimer);
                    window.location.href = logoutUrl
                }
            },
            success: function(b) {
                $("#page").html(b);
                callCallBck()
            },
        })
    } else {
        console.log("content.url = " + a.url);
        if (a.trx) {
            loadingbarMdrShow()
        }
        $.ajax({
            url: a.url,
            contentType: "application/json",
            data: a.data,
            success: function(b) {
                $("#page").html(b);
                if (a.trx) {
                    loadingbarMdrHide()
                }
                callCallBck()
            },
        })
    }
}

function callCallBck() {
    $(".homeicon").unbind("click", false);
    if (homeflg) {
        homeflg = false
    }
    callback()
}

function refreshCaptcha(a) {
    $("#" + a + "_captchaImage").attr("src", "" + retail3 + "/secure/common/auth/tokencaptcha/" + a + "?" + new Date().getTime()).fadeIn()
}
$(".homeicon").on("click", function() {
    if (!homeflg) {
        homeflg = true;
        return true
    }
    return false
});

function CommaFormatted(f) {
    var c = ",";
    var b = f.split(".", 2);
    var h = b[1];
    var e = b[0];
    if (isNaN(e)) {
        return ""
    }
    var g = "";
    if (e < 0) {
        g = "-"
    }
    var k = new String(e);
    var b = [];
    while (k.length > 3) {
        var j = k.substr(k.length - 3);
        b.unshift(j);
        k = k.substr(0, k.length - 3)
    }
    if (k.length > 0) {
        b.unshift(k)
    }
    k = b.join(c);
    if (h.length < 1) {
        f = k
    } else {
        f = k + "." + h
    }
    f = g + f;
    return f
}

function deformat_number(d) {
    var c = d.value;
    var b = d.maxLength;
    if (c.indexOf(",") != -1) {
        var a = 0;
        while (c.indexOf(",") != -1) {
            c = c.replace(",", "")
        }
        var e = d.maxLength - a;
        d.maxLength = e
    }
    return c
}

function deformat_number2(b) {
    var a = b.value;
    if (a) {
        if (a.indexOf(",") != -1) {
            while (a.indexOf(",") != -1) {
                a = a.replace(",", "")
            }
        }
    } else {
        a = b;
        if (a.indexOf(",") != -1) {
            while (a.indexOf(",") != -1) {
                a = a.replace(",", "")
            }
        }
    }
    return a
}

function format_number2(d) {
    d = deformat_number2(d);
    if (isNaN(d)) {
        alert(amountMustBeInMoney, "error");
        return "0.00"
    }
    var e = Number(d);
    if (e < 0) {
        alert(amountMustBeInMoney, "error");
        return "0.00"
    }
    var c = d.split(".", 2);
    var b = d;
    if (c.length == 1) {
        if (b) {
            b += ".00"
        }
    }
    return CommaFormatted(b)
}

function format_number(k, s, p, c) {
    var b = k.maxLength;
    k.maxLength = k.maxLength + 10;
    var m = k.value.replace(/,/g, "");
    if (isNaN(m)) {
        var r = "";
        for (var j = 0; j < m.length; j++) {
            if (p == false) {
                if (!isNaN(m.substring(j, (j + 1)))) {
                    r += m.substring(j, (j + 1))
                }
            } else {
                if (!isNaN(m.substring(j, (j + 1)))) {
                    r += m.substring(j, (j + 1))
                } else {
                    if (m.substring(j, (j + 1)) == ".") {
                        r += m.substring(j, (j + 1))
                    } else {
                        if (r.length == 0) {
                            alert(amountMustBeInMoney, "error")
                        } else {
                            if (m.substring((j - 1), j) == "." && isNaN(m.substring(j, (j + 1)))) {
                                r += "0"
                            }
                        }
                        break
                    }
                }
            }
        }
        m = r
    }
    if (m.length == 0) {
        k.value = 0
    }
    var f = new String(m);
    var n = f.split(".");
    var o = parseFloat(n[0]);
    var e = "";
    if (n.length > 1) {
        var g = new String(n[1]);
        g = String(parseFloat(n[1]) / Math.pow(10, (g.length - s)));
        g = n[0] + "." + String(Math.round(parseFloat(g)) / Math.pow(10, s));
        var h = g.indexOf(".");
        if (h == -1) {
            g += ".";
            h = g.indexOf(".")
        }
        while (g.length <= h + s) {
            g += "0"
        }
        e = g
    } else {
        var h;
        var g = new String(n);
        g += ".";
        h = g.indexOf(".");
        while (g.length <= h + s) {
            g += "0"
        }
        e = g
    }
    var q;
    if (c) {
        q = CommaFormatted(e)
    } else {
        q = e
    }
    var a = q;
    var l = 0;
    if (a.length > b) {
        while (a.indexOf(",") != -1) {
            a = a.replace(",", "");
            l++
        }
        if (a.indexOf(".") != -1) {
            var d = a.length - a.indexOf(".");
            l += d
        }
    }
    k.maxLength = b + l;
    return q
}
var callAlertMessage = function() {
    var a;
    if ($("#successMessage").html() != undefined) {
        a = constructAlert($("#successMessage").html(), "success")
    } else {
        if ($("#errorMessage").html() != undefined) {
            a = constructAlert($("#errorMessage").html(), "error")
        } else {
            if ($("#errMessage").html() != undefined) {
                a = constructAlert($("#errMessage").html(), "error")
            } else {
                if ($("#errorMessageFRMS").html() != undefined) {
                    a = constructAlert($("#errorMessageFRMS").html(), "errorfrms")
                }
            }
        }
    }
    if (a != undefined) {
        a.show()
    }
};

function constructAlert(c, a) {
    var b = new NotificationFx({
        message: '<div class="container"><p>' + c + "</p></div>",
        layout: "bar",
        effect: "slidetop",
        type: a,
        ttl: 9000
    });
    return b
}

function hideAlertMessage() {
    $(".ns-show").remove()
}

function callSuccessAlertMessage(a) {
    hideAlertMessage();
    if (document.getElementById("successMessage") == null) {
        $("#col-main").prepend('<div id="successMessage" style="display:none" >')
    }
    $("#successMessage").text(a);
    callAlertMessage()
}
$(window).bind("focus", function(a) {
    try {
        var c = $(".ns-hide");
        $(c).removeClass("ns-effect-slidetop");
        $(c).removeClass("ns-hide");
        setTimeout(function() {
            $(c).addClass("ns-effect-slidetop");
            $(c).addClass("ns-hide")
        }, 2000)
    } catch (b) {
        console.log(b)
    }
});

function loadingBarMdr() {
    var b = $(".loadingBarMask"),
        c = $(".loadingBarOuter");
    c.appendTo($("body.internal"));
    b.appendTo($("body.internal"));
    var a = "";
    a = getLoadingBarDisplay();
    $("#modalLoadingBarMdr .loadingBarView").html(a)
}

function loadingbarMdrShow() {
    var a = $(".loadingBarMask"),
        b = $(".loadingBarOuter");
    b.addClass("open");
    b.css("display", "block");
    a.fadeIn()
}

function loadingbarMdrHide() {
    var a = $(".loadingBarMask"),
        b = $(".loadingBarOuter");
    b.removeClass("open").addClass("close");
    a.fadeOut(function() {
        b.removeClass("close");
        b.css("display", "none")
    })
}

function getLoadingBarDisplay(b) {
    var a = '<img id ="loadingBarId" src="' + loaderimg + '" width="100px;">';
    return a
}

function goTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0
}

function popoverContent() {
    getPopNews();
    popNewsListener();
    popFaveListener()
}

function popoverContentDash() {
    getPopNews();
    popNewsListener()
}

function sameHeight() {
    var b = $("#col-main").height();
    var a = $("#col-side .sidelist").height();
    if (b < a) {
        $("#col-side .sidelist").css("min-height", (a + 0) + "px")
    } else {
        if (b > a) {
            $("#col-side .sidelist").css("min-height", (b + 0) + "px")
        }
    }
}

function onlyNumber(a) {
    $(a).closest(".container-fluid").find(".error").remove();
    $(a).closest(".container-fluid").removeClass("error");
    var b = new RegExp("^[0-9]*$");
    if (!b.test($(a).val())) {
        $(a).closest(".container-fluid").find(".error").remove();
        $(a).closest(".container-fluid").removeClass("success").addClass("error");
        $(a).after('<label class="error">' + onlyNumberLbl + "</label>");
        return false
    } else {
        return true
    }
}

function validateAlphaNumeric(b) {
    var a;
    document.all ? a = b.keycode : a = b.which;
    return ((a > 47 && a < 58) || (a > 64 && a < 91) || (a > 96 && a < 123) || a == 0 || a == 8)
}

function validateAlphaNumericAndSpace(c) {
    var b = new RegExp("^[a-zA-Z0-9\\s\\b]+$");
    var a = String.fromCharCode(!c.charCode ? c.which : c.charCode);
    if (!b.test(a)) {
        return false
    }
}

function onlyNumAndPaste(b) {
    var a = window.event ? b.keyCode : b.which;
    if ((a > 47 && a < 58) || a == 8 || a == 0 || (a == 118 && b.ctrlKey) || (a == 118 && b.metaKey)) {
        return true
    }
    return false
}
var dateIconClicked = function(b) {
    var a = $("#ui-datepicker-div", window.parent.frames[0].document)[0].style;
    if (!a.display || a.display === "none") {
        $(b).datepicker("show")
    }
};
var toTitleCase = function(a) {
    return a.toLowerCase().replace(/(?:^|\s)\w/g, function(b) {
        return b.toUpperCase()
    })
};
var inputModalSetFocus = function(a) {
    setTimeout(function() {
        $(":text").not("#futureDate,#recurringStartDate,#recurringEndDate,#transactionAmountDisplay").focus();
        $("#beneficiaryAccountNo").blur();
        $("#destinationAccountGroup .select2-container.form-control").select2("open");
        $("#destinationAccountGroup .select2-container.form-control").select2("close")
    }, a)
};
$(".modal.fade.destinationmodal").on("show.bs.modal", function() {
    inputModalSetFocus(500)
});

function getTimeRemaining(c) {
    var b = Date.parse(c) - Date.parse(new Date());
    var d = Math.floor((b / 1000) % 60);
    var a = Math.floor((b / 1000 / 60) % 60);
    return {
        total: b,
        minutes: a,
        seconds: d
    }
}

function initializeClock(h, d) {
    var c = document.querySelector(h);
    var b = c.querySelector(".separator");
    var e = c.querySelector(".minutes");
    var f = c.querySelector(".seconds");
    b.innerHTML = ":";

    function g() {
        var i = getTimeRemaining(d);
        e.innerHTML = ("0" + i.minutes).slice(-2);
        f.innerHTML = ("0" + i.seconds).slice(-2);
        if (i.total <= 0) {
            clearInterval(a)
        }
    }
    g();
    var a = setInterval(g, 1000)
}

function showTimer() {
    var f = $("div[id=clockdiv]").empty();
    var c = $("<div>");
    var b = $("<div>");
    var a = $("<div>");
    var d = $("<span>", {
        "class": "minutes"
    });
    var e = $("<span>", {
        "class": "separator"
    });
    var g = $("<span>", {
        "class": "seconds"
    });
    d.appendTo(c);
    e.appendTo(b);
    g.appendTo(a);
    c.appendTo(f);
    b.appendTo(f);
    a.appendTo(f)
}

function alert(b, a) {
    if (b.toLowerCase().replace(".", "") === termsAndConditionsRequired.toLowerCase().replace(".", "")) {
        markTNC()
    }
    if (a === undefined) {
        a = "error"
    }
    return constructAlert(b, a).show()
}

function markTNC() {
    if ($("#tncid").length > 0) {
        $("#tncid").attr("style", "color:red")
    }
    if ($("#tncSection").length > 0) {
        $("#tncSection").attr("style", "color:red")
    }
}
$(document).on("error", ".open-main-style img", function() {
    $(this).css("display", "none")
});

function validationOOB(a) {
    if (a == null) {
        a = ""
    }
    $.ajax({
        type: "POST",
        url: validationOOBUrl,
        data: {
            menuCode: a
        },
        success: function(b) {
            if ("N" == b.status) {
                callErrorAlertMessage(b.message);
                setTimeout(function() {
                    callHome()
                }, 5000)
            }
        },
        error: function(b) {
            callErrorAlertMessage(b.message)
        }
    })
}

function validationOOBModal(b) {
    var a = true;
    if (b == null) {
        b = ""
    }
    $.ajax({
        type: "POST",
        url: validationOOBUrl,
        data: {
            menuCode: b
        },
        success: function(c) {
            if ("N" == c.status) {
                a = false;
                callErrorAlertMessage(c.message)
            }
        },
        async: false,
        error: function(c) {
            callErrorAlertMessage(c.message)
        }
    });
    return a
}

function validationMaxPT(a) {
    $.ajax({
        type: "POST",
        url: validationMaxPTurl,
        success: function(b) {
            if ("N" == b.status) {
                callErrorAlertMessage(b.message)
            } else {
                if ("Y" == b.status) {
                    a()
                }
            }
        },
        error: function(b) {
            callErrorAlertMessage(b.message)
        }
    })
}
var xhrPool = [];
$(document).ajaxSend(function(c, b, a) {
    xhrPool.push(b)
});
$(document).ajaxComplete(function(c, b, a) {
    xhrPool = $.grep(xhrPool, function(d) {
        return d != b
    })
});
var abortXHR = function() {
    $.each(xhrPool, function(a, b) {
        b.abort()
    })
};

function addSpacetoText(g, c) {
    var e = g.length;
    var b = e / c;
    var f = e % c;
    var a = "";
    var d;
    for (d = 0; d < e; d++) {
        a = a + g.slice(c * d, c * (d + 1)).concat(" ")
    }
    if (f != 0) {
        a = a + g.slice(c * d)
    }
    return a
}

function roundTrxAmt(b) {
    var a = Math.round(b * 100) / 100;
    return a
}
$(document).on("keyup", ".filterInscat07", function() {
    var b = $(this).val();
    if (b) {
        b = b.replace(/\s/g, "");
        b = b + "";
        var a = b.length;
        if (a > 16) {
            b = b.substring(0, 16)
        }
        b = addSpacetoText(b, 4).trim();
        $(this).val(b)
    }
});

function restateInputElement(a) {
    $(a).focus().blur().focus()
}

function do_getRandomNumberLogin(a) {
    if (typeof a == "undefined") {
        var a = "#loginForm"
    }
    $.ajax({
        url: doGetRandomNumberLoginUrl,
        cache: false,
        type: "POST",
        async: false,
        data: $(a).serialize(),
        success: function(b) {
            $("#randomNumber").attr("value", b.randomNumber);
            return true
        }
    })
}

function do_getRandomNumber(a) {
    if (typeof a == "undefined") {
        var a = "#loginForm"
    }
    $.ajax({
        url: doGetRandomNumber,
        cache: false,
        type: "POST",
        async: false,
        data: $(a).serialize(),
        success: function(b) {
            $("#randomNumber").attr("value", b.randomNumber);
            return true
        }
    })
}
$(document).on("click", ".passToggle", function(b) {
    b.stopImmediatePropagation();
    var c = this;
    var a = $(c).parent().find("input");
    if ($(c).hasClass("mdradd-eye")) {
        a.attr({
            type: "text"
        }).addClass("password-to-text-toggle");
        $(c).addClass("mdradd-eye-disabled").removeClass("mdradd-eye")
    } else {
        a.attr({
            type: "password"
        }).addClass("text-to-password-toggle");
        $(c).addClass("mdradd-eye").removeClass("mdradd-eye-disabled")
    }
});
$(document).on("drop", ".cannotpastecutcopy", function(a) {
    return false
});

function do_encryptHSMAlphanumeric() {
    var b = $("#pwd").val();
    var f = getO2($("#randomNumber").val());
    var e = "SHA2-256";
    var a = $("#mod").val();
    var d = $("#exp").val();
    var c = initialisePublicKeyData(a, d);
    if (c == 0) {
        c = OBM_EncryptPassword_Ex(b, f, e)
    }
    $("#cEnc").attr("value", OBM_GetEncryptedPassword());
    $("#pEnc").attr("value", OBM_GetEncodingParameter())
}

function do_encryptHSMAlphanumericLgn() {
    var b = $("#pwd").val();
    var f = getO22($("#randomNumber").val());
    var e = "SHA2-256";
    var a = $("#mod").val();
    var d = $("#exp").val();
    var c = initialisePublicKeyData(a, d);
    if (c == 0) {
        c = OBM_EncryptPassword_Ex(b, f, e)
    }
    $("#cEnc").attr("value", OBM_GetEncryptedPassword());
    $("#pEnc").attr("value", OBM_GetEncodingParameter())
}

function checkonlynumeric(a) {
    var b = /[^0-9]/gi;
    if (b.test(a.value)) {
        a.value = a.value.replace(b, "")
    }
}

function validateNumericEmoney(b) {
    var a = (b.which) ? b.which : event.keyCode;
    if (a > 31 && (a < 48 || a > 57)) {
        return false
    }
    return true
}
$(".navbar-brand").attr("href", "#");
history.pushState(null, null, document.URL);
window.addEventListener("popstate", function() {
    history.pushState(null, null, document.URL)
});

function getO22(g) {
    var c = "";
    var b = g.split("9810099");
    var j = "zJCQcGBYpRx34WphGpvG2KzyWt9fnvgJHsmfVZCcnv0KzBVQ4T6J";
    while (j.length < b.length) {
        j += j
    }
    for (var d = 0; d < b.length; d++) {
        var i = parseInt(b[d]);
        var h = j[d].charCodeAt(0);
        c += String.fromCharCode(i ^ h)
    }
    return c
}

function getCSRFToken(b) {
    var a = "CSRFToken";
    return ($("#" + b).find("input[name=" + a + "]").val())
}
$(function() {
    screens = $("#section-landing .screen");
    theTop = screens.css("top");
    screens.eq(0).css({
        display: "block",
        opacity: 1,
        top: 0
    });
    $("#landing-forgot-pass-card").css({
        display: "block",
        opacity: 1,
        top: 0
    });
    $(".screenSwitch").click(function(b) {
        var c = $(this).attr("id");
        var a;
        if (c == "onlineActivationTerms") {
            onlineActivationTerms()
        }
        if (c == "onlineActivationVerify") {
            a = onlineActivationVerify();
            if (a.errorFlag == "Y") {
                console.debug(a.errorReason);
                $("#globalErrorMessage").html(a.errorReason);
                callAlertMessage();
                return
            }
            initCreate(a)
        }
        if (c == "onlineActivationCreate") {
            if (!$("#registrationForm").valid()) {
                return
            } else {
                a = onlineActivationCreate();
                if (a.errorFlag == "Y") {
                    $("#errorCreate").text(a.errorReason);
                    $("#error-alert-create").css({
                        display: "block"
                    });
                    return
                }
            }
        }
        b.preventDefault()
    })
});
