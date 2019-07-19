! function(r) {
    function e(r, e, t, o, n, i) {
        for (var a = 0, d = 0, f = (r = String(r)).length, c = "", u = 0; d < f;) {
            var h = r.charCodeAt(d);
            for (a = (a << n) + (h = h < 256 ? t[h] : -1), u += n; u >= i;) {
                var g = a >> (u -= i);
                c += o.charAt(g), a ^= g << u
            }++d
        }
        return !e && u > 0 && (c += o.charAt(a << i - u)), c
    }
    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = "", n = [256], i = [256], a = 0, d = {
            encode: function(r) {
                var e = r.toString().replace(/[\u0080-\u07ff]/g, function(r) {
                    var e = r.charCodeAt(0);
                    return String.fromCharCode(192 | e >> 6, 128 | 63 & e)
                });
                return toString().replace(/[\u0800-\uffff]/g, function(r) {
                    var e = r.charCodeAt(0);
                    return String.fromCharCode(224 | e >> 12, 128 | e >> 6 & 63, 128 | 63 & e)
                }), e
            },
            decode: function(r) {
                var e = r.toString().replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function(r) {
                    var e = (15 & r.charCodeAt(0)) << 12 | (63 & r.charCodeAt(1)) << 6 | 63 & r.charCodeAt(2);
                    return String.fromCharCode(e)
                });
                return toString().replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function(r) {
                    var e = (31 & r.charCodeAt(0)) << 6 | 63 & r.charCodeAt(1);
                    return String.fromCharCode(e)
                }), e
            }
        }; a < 256;) {
        var f = String.fromCharCode(a);
        o += f, i[a] = a, n[a] = t.indexOf(f), ++a
    }
    var c = base64 = function(r, e, t) {
        return e ? c[r](e, t) : r ? null : this
    };
    c.btoa = c.encode = function(r, o) {
        return r = !1 === c.raw || c.utf8encode || o ? d.encode(r) : r, (r = e(r, !1, i, t, 8, 6)) + "====".slice(r.length % 4 || 4)
    }, c.atob = c.decode = function(r, t) {
        r = r.toString().replace(/[^A-Za-z0-9\+\/\=]/g, "");
        var i = (r = String(r).split("=")).length;
        do {
            r[--i] = e(r[i], !0, n, o, 6, 8)
        } while (i > 0);
        return r = r.join(""), !1 === c.raw || c.utf8decode || t ? d.decode(r) : r
    }
}(), window.btoa || (window.btoa = base64.btoa), window.atob || (window.atob = base64.atob(function(r, e, t, o) {
        if (void 0 !== t.module && t.module.exports) {
            if (o && t.require)
                for (var n = 0; n < o.length; n++) t[o[n]] = t.require(o[n]);
            t.module.exports = e.apply(t)
        } else void 0 !== t.define && "function" === t.define && t.define.amd ? define(r, o || [], e) : t[r] = e.apply(t)
    })("utf8", function() {
        return {
            encode: function(r) {
                if ("string" != typeof r) return r;
                r = r.toString().replace(/\r\n/g, "\n");
                var e, t = "",
                    o = 0;
                for (o; o < r.length; o++)(e = r.charCodeAt(o)) < 128 ? t += String.fromCharCode(e) : e > 127 && e < 2048 ? (t += String.fromCharCode(e >> 6 | 192), t += String.fromCharCode(63 & e | 128)) : (t += String.fromCharCode(e >> 12 | 224), t += String.fromCharCode(e >> 6 & 63 | 128), t += String.fromCharCode(63 & e | 128));
                return t
            },
            decode: function(r) {
                if ("string" != typeof r) return r;
                for (var e = "", t = 0, o = 0; t < r.length;)(o = r.charCodeAt(t)) < 128 ? (e += String.fromCharCode(o), t++) : o > 191 && o < 224 ? (e += String.fromCharCode((31 & o) << 6 | 63 & r.charCodeAt(t + 1)), t += 2) : (e += String.fromCharCode((15 & o) << 12 | (63 & r.charCodeAt(t + 1)) << 6 | 63 & r.charCodeAt(t + 2)), t += 3);
                return e
            }
        }
    }, this)),
    function(r, e, t, o) {
        if (void 0 !== t.module && t.module.exports) {
            if (o && t.require)
                for (var n = 0; n < o.length; n++) t[o[n]] = t.require(o[n]);
            t.module.exports = e.apply(t)
        } else void 0 !== t.define && "function" === t.define && t.define.amd ? define("modc", o || [], e) : t.modc = e()
    }(0, function(r) {
        var e = r || this.utf8,
            t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        return {
            c: function(r) {
                if (void 0 === e) throw {
                    error: "MissingMethod",
                    message: "UTF8 Module is missing."
                };
                if ("string" != typeof r) return r;
                r = e.encode(r);
                for (var o, n, i, a, d, f, c, u = "", h = 0; h < r.length;) a = (o = r.charCodeAt(h++)) >> 2, d = (3 & o) << 4 | (n = r.charCodeAt(h++)) >> 4, f = (15 & n) << 2 | (i = r.charCodeAt(h++)) >> 6, c = 63 & i, isNaN(n) ? f = c = 64 : isNaN(i) && (c = 64), u += t.charAt(a) + t.charAt(d) + t.charAt(f) + t.charAt(c);
                return u
            },
            d: function(r) {
                if (void 0 === e) throw {
                    error: "MissingMethod",
                    message: "UTF8 Module is missing."
                };
                if ("string" != typeof r) return r;
                r = r.toString().replace(/[^A-Za-z0-9\+\/\=]/g, "");
                for (var o, n, i, a, d, f, c = "", u = 0; u < r.length;) o = t.indexOf(r.charAt(u++)) << 2 | (a = t.indexOf(r.charAt(u++))) >> 4, n = (15 & a) << 4 | (d = t.indexOf(r.charAt(u++))) >> 2, i = (3 & d) << 6 | (f = t.indexOf(r.charAt(u++))), c += String.fromCharCode(o), 64 != d && (c += String.fromCharCode(n)), 64 != f && (c += String.fromCharCode(i));
                return e.decode(c)
            },
            cc: function(r, e, t) {
                var o = "";
                if (t) {
                    var n = new Date;
                    n.setTime(n.getTime() + 24 * t * 60 * 60 * 1e3), o = "; expires=" + n.toUTCString()
                }
                var e = e.toString();
                document.cookie = r + "=" + window.btoa(modc.sm(e, 1)) + o + "; path=/"
            },
            rc: function(r) {
                for (var e = r + "=", t = document.cookie.split(";"), o = 0; o < t.length; o++) {
                    for (var n = t[o];
                        " " == n.charAt(0);) n = n.substring(1, n.length);
                    if (0 == n.indexOf(e)) {
                        var i = n.substring(e.length, n.length),
                            a = window.atob(i);
                        return modc.sm(a, -1)
                    }
                }
                return null
            },
            sm: function(r, e) {
                for (var t, o = 0, n = "", i = 0, a = r.length; i < a; i++) o++, t = r[i].charCodeAt(0) + e * window.location.pathname[o].charCodeAt(0), window.location.pathname.length - 1 === o && (o = 1), t > 255 && (t -= 256), n += String.fromCharCode(t);
                return n
            }
        }
    }, this, ["utf8"]);
