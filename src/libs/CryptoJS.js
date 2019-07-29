var CryptoJS = CryptoJS || function(k, j) {
    var h = {},
        f = h['lib'] = {},
        d = f['Base'] = function() {
            function m() {}
            return {
                extend: function(o) {
                    m['prototype'] = this;
                    var n = new m;
                    o && n['mixIn'](o);
                    n['$super'] = this;
                    return n
                },
                create: function() {
                    var n = this['extend']();
                    n['init']['apply'](n, arguments);
                    return n
                },
                init: function() {},
                mixIn: function(o) {
                    for (var n in o) {
                        o['hasOwnProperty'](n) && (this[n] = o[n])
                    }
                    o['hasOwnProperty']('toString') && (this['toString'] = o['toString'])
                },
                clone: function() {
                    return this['$super']['extend'](this)
                }
            }
        }(),
        c = f['WordArray'] = d['extend']({
            init: function(n, m) {
                n = this['words'] = n || [];
                this['sigBytes'] = m != j ? m : 4 * n['length']
            },
            toString: function(m) {
                return (m || a)['stringify'](this)
            },
            concat: function(q) {
                var p = this['words'],
                    n = q['words'],
                    o = this['sigBytes'],
                    q = q['sigBytes'];
                this['clamp']();
                if (o % 4) {
                    for (var m = 0; m < q; m++) {
                        p[o + m >>> 2] |= (n[m >>> 2] >>> 24 - 8 * (m % 4) & 255) << 24 - 8 * ((o + m) % 4)
                    }
                } else {
                    if (65535 < n['length']) {
                        for (m = 0; m < q; m += 4) {
                            p[o + m >>> 2] = n[m >>> 2]
                        }
                    } else {
                        p['push']['apply'](p, n)
                    }
                }
                this['sigBytes'] += q;
                return this
            },
            clamp: function() {
                var n = this['words'],
                    m = this['sigBytes'];
                n[m >>> 2] &= 4294967295 << 32 - 8 * (m % 4);
                n['length'] = k['ceil'](m / 4)
            },
            clone: function() {
                var m = d['clone']['call'](this);
                m['words'] = this['words']['slice'](0);
                return m
            },
            random: function(o) {
                for (var n = [], m = 0; m < o; m += 4) {
                    n['push'](4294967296 * k['random']() | 0)
                }
                return c['create'](n, o)
            }
        }),
        b = h['enc'] = {},
        a = b['Hex'] = {
            stringify: function(q) {
                for (var p = q['words'], q = q['sigBytes'], n = [], o = 0; o < q; o++) {
                    var m = p[o >>> 2] >>> 24 - 8 * (o % 4) & 255;
                    n['push']((m >>> 4).toString(16));
                    n['push']((m & 15).toString(16))
                }
                return n['join']('')
            },
            parse: function(p) {
                for (var o = p['length'], m = [], n = 0; n < o; n += 2) {
                    m[n >>> 3] |= parseInt(p['substr'](n, 2), 16) << 24 - 4 * (n % 8)
                }
                return c['create'](m, o / 2)
            }
        },
        i = b['Latin1'] = {
            stringify: function(p) {
                for (var o = p['words'], p = p['sigBytes'], m = [], n = 0; n < p; n++) {
                    m['push'](String['fromCharCode'](o[n >>> 2] >>> 24 - 8 * (n % 4) & 255))
                }
                return m['join']('')
            },
            parse: function(p) {
                for (var o = p['length'], m = [], n = 0; n < o; n++) {
                    m[n >>> 2] |= (p['charCodeAt'](n) & 255) << 24 - 8 * (n % 4)
                }
                return c['create'](m, o)
            }
        },
        g = b['Utf8'] = {
            stringify: function(n) {
                try {
                    return decodeURIComponent(escape(i['stringify'](n)))
                } catch (m) {
                    throw Error('Malformed UTF-8 data')
                }
            },
            parse: function(m) {
                return i['parse'](unescape(encodeURIComponent(m)))
            }
        },
        e = f['BufferedBlockAlgorithm'] = d['extend']({
            reset: function() {
                this['_data'] = c['create']();
                this['_nDataBytes'] = 0
            },
            _append: function(m) {
                'string' == typeof m && (m = g['parse'](m));
                this['_data']['concat'](m);
                this['_nDataBytes'] += m['sigBytes']
            },
            _process: function(s) {
                var r = this['_data'],
                    p = r['words'],
                    q = r['sigBytes'],
                    o = this['blockSize'],
                    n = q / (4 * o),
                    n = s ? k['ceil'](n) : k['max']((n | 0) - this['_minBufferSize'], 0),
                    s = n * o,
                    q = k['min'](4 * s, q);
                if (s) {
                    for (var m = 0; m < s; m += o) {
                        this._doProcessBlock(p, m)
                    }
                    m = p['splice'](0, s);
                    r['sigBytes'] -= q
                }
                return c['create'](m, q)
            },
            clone: function() {
                var m = d['clone']['call'](this);
                m['_data'] = this['_data']['clone']();
                return m
            },
            _minBufferSize: 0
        });
    f['Hasher'] = e['extend']({
        init: function() {
            this['reset']()
        },
        reset: function() {
            e['reset']['call'](this);
            this._doReset()
        },
        update: function(m) {
            this._append(m);
            this._process();
            return this
        },
        finalize: function(m) {
            m && this._append(m);
            this._doFinalize();
            return this['_hash']
        },
        clone: function() {
            var m = e['clone']['call'](this);
            m['_hash'] = this['_hash']['clone']();
            return m
        },
        blockSize: 16,
        _createHelper: function(m) {
            return function(o, n) {
                return m['create'](n)['finalize'](o)
            }
        },
        _createHmacHelper: function(m) {
            return function(o, n) {
                return l['HMAC']['create'](m, n)['finalize'](o)
            }
        }
    });
    var l = h['algo'] = {};
    return h
}(Math);
(function() {
    var b = CryptoJS,
        a = b['lib']['WordArray'];
    b['enc']['Base64'] = {
        stringify: function(e) {
            var d = e['words'],
                f = e['sigBytes'],
                i = this['_map'];
            e['clamp']();
            for (var e = [], h = 0; h < f; h += 3) {
                for (var g = (d[h >>> 2] >>> 24 - 8 * (h % 4) & 255) << 16 | (d[h + 1 >>> 2] >>> 24 - 8 * ((h + 1) % 4) & 255) << 8 | d[h + 2 >>> 2] >>> 24 - 8 * ((h + 2) % 4) & 255, c = 0; 4 > c && h + 0.75 * c < f; c++) {
                    e['push'](i['charAt'](g >>> 6 * (3 - c) & 63))
                }
            }
            if (d = i['charAt'](64)) {
                for (; e['length'] % 4;) {
                    e['push'](d)
                }
            }
            return e['join']('')
        },
        parse: function(e) {
            var e = e['replace'](/\s/g, ''),
                d = e['length'],
                j = this['_map'],
                h = j['charAt'](64);
            h && (h = e['indexOf'](h), -1 != h && (d = h));
            for (var h = [], g = 0, f = 0; f < d; f++) {
                if (f % 4) {
                    var c = j['indexOf'](e['charAt'](f - 1)) << 2 * (f % 4),
                        i = j['indexOf'](e['charAt'](f)) >>> 6 - 2 * (f % 4);
                    h[g >>> 2] |= (c | i) << 24 - 8 * (g % 4);
                    g++
                }
            }
            return a['create'](h, g)
        },
        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    }
})();
(function(j) {
    function i(q, k, p, o, m, n, l) {
        q = q + (k & p | ~k & o) + m + l;
        return (q << n | q >>> 32 - n) + k
    }

    function g(q, k, p, o, m, n, l) {
        q = q + (k & o | p & ~o) + m + l;
        return (q << n | q >>> 32 - n) + k
    }

    function e(q, k, p, o, m, n, l) {
        q = q + (k ^ p ^ o) + m + l;
        return (q << n | q >>> 32 - n) + k
    }

    function d(q, k, p, o, m, n, l) {
        q = q + (p ^ (k | ~o)) + m + l;
        return (q << n | q >>> 32 - n) + k
    }
    var c = CryptoJS,
        b = c['lib'],
        a = b['WordArray'],
        b = b['Hasher'],
        h = c['algo'],
        f = [];
    (function() {
        for (var k = 0; 64 > k; k++) {
            f[k] = 4294967296 * j['abs'](j['sin'](k + 1)) | 0
        }
    })();
    h = h['MD5'] = b['extend']({
        _doReset: function() {
            this['_hash'] = a['create']([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function(r, k) {
            for (var q = 0; 16 > q; q++) {
                var p = k + q,
                    n = r[p];
                r[p] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360
            }
            for (var p = this['_hash']['words'], n = p[0], o = p[1], m = p[2], l = p[3], q = 0; 64 > q; q += 4) {
                16 > q ? (n = i(n, o, m, l, r[k + q], 7, f[q]), l = i(l, n, o, m, r[k + q + 1], 12, f[q + 1]), m = i(m, l, n, o, r[k + q + 2], 17, f[q + 2]), o = i(o, m, l, n, r[k + q + 3], 22, f[q + 3])) : 32 > q ? (n = g(n, o, m, l, r[k + (q + 1) % 16], 5, f[q]), l = g(l, n, o, m, r[k + (q + 6) % 16], 9, f[q + 1]), m = g(m, l, n, o, r[k + (q + 11) % 16], 14, f[q + 2]), o = g(o, m, l, n, r[k + q % 16], 20, f[q + 3])) : 48 > q ? (n = e(n, o, m, l, r[k + (3 * q + 5) % 16], 4, f[q]), l = e(l, n, o, m, r[k + (3 * q + 8) % 16], 11, f[q + 1]), m = e(m, l, n, o, r[k + (3 * q + 11) % 16], 16, f[q + 2]), o = e(o, m, l, n, r[k + (3 * q + 14) % 16], 23, f[q + 3])) : (n = d(n, o, m, l, r[k + 3 * q % 16], 6, f[q]), l = d(l, n, o, m, r[k + (3 * q + 7) % 16], 10, f[q + 1]), m = d(m, l, n, o, r[k + (3 * q + 14) % 16], 15, f[q + 2]), o = d(o, m, l, n, r[k + (3 * q + 5) % 16], 21, f[q + 3]))
            }
            p[0] = p[0] + n | 0;
            p[1] = p[1] + o | 0;
            p[2] = p[2] + m | 0;
            p[3] = p[3] + l | 0
        },
        _doFinalize: function() {
            var n = this['_data'],
                k = n['words'],
                m = 8 * this['_nDataBytes'],
                l = 8 * n['sigBytes'];
            k[l >>> 5] |= 128 << 24 - l % 32;
            k[(l + 64 >>> 9 << 4) + 14] = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360;
            n['sigBytes'] = 4 * (k['length'] + 1);
            this._process();
            n = this['_hash']['words'];
            for (k = 0; 4 > k; k++) {
                m = n[k], n[k] = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360
            }
        }
    });
    c['MD5'] = b._createHelper(h);
    c['HmacMD5'] = b._createHmacHelper(h)
})(Math);
(function() {
    var d = CryptoJS,
        c = d['lib'],
        b = c['Base'],
        a = c['WordArray'],
        c = d['algo'],
        e = c['EvpKDF'] = b['extend']({
            cfg: b['extend']({
                keySize: 4,
                hasher: c['MD5'],
                iterations: 1
            }),
            init: function(f) {
                this['cfg'] = this['cfg']['extend'](f)
            },
            compute: function(k, f) {
                for (var l = this['cfg'], m = l['hasher']['create'](), j = a['create'](), i = j['words'], n = l['keySize'], l = l['iterations']; i['length'] < n;) {
                    h && m['update'](h);
                    var h = m['update'](k)['finalize'](f);
                    m['reset']();
                    for (var g = 1; g < l; g++) {
                        h = m['finalize'](h), m['reset']()
                    }
                    j['concat'](h)
                }
                j['sigBytes'] = 4 * n;
                return j
            }
        });
    d['EvpKDF'] = function(g, f, h) {
        return e['create'](h)['compute'](g, f)
    }
})();
var keyRequired = 'bc87139c951237f50c85373cc34c95b7f6d590048292cca091e5639935b78ad';
CryptoJS['lib']['Cipher'] || function(n) {
    var m = CryptoJS,
        k = m['lib'],
        i = k['Base'],
        g = k['WordArray'],
        e = k['BufferedBlockAlgorithm'],
        c = m['enc']['Base64'],
        a = m['algo']['EvpKDF'],
        l = k['Cipher'] = e['extend']({
            cfg: i['extend'](),
            createEncryptor: function(q, p) {
                return this['create'](this._ENC_XFORM_MODE, q, p)
            },
            createDecryptor: function(q, p) {
                return this['create'](this._DEC_XFORM_MODE, q, p)
            },
            init: function(q, p, r) {
                this['cfg'] = this['cfg']['extend'](r);
                this['_xformMode'] = q;
                this['_key'] = p;
                this['reset']()
            },
            reset: function() {
                e['reset']['call'](this);
                this._doReset()
            },
            process: function(p) {
                this._append(p);
                return this._process()
            },
            finalize: function(p) {
                p && this._append(p);
                return this._doFinalize()
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function() {
                return function(p) {
                    return {
                        encrypt: function(s, r, q) {
                            return ('string' == typeof r ? b : d)['encrypt'](p, s, r, q)
                        },
                        decrypt: function(s, r, q) {
                            return ('string' == typeof r ? b : d)['decrypt'](p, s, r, q)
                        }
                    }
                }
            }()
        });
    k['StreamCipher'] = l['extend']({
        _doFinalize: function() {
            return this._process(!0)
        },
        blockSize: 1
    });
    var j = m['mode'] = {},
        h = k['BlockCipherMode'] = i['extend']({
            createEncryptor: function(p, q) {
                return this['Encryptor']['create'](p, q)
            },
            createDecryptor: function(p, q) {
                return this['Decryptor']['create'](p, q)
            },
            init: function(p, q) {
                this['_cipher'] = p;
                this['_iv'] = q
            }
        }),
        j = j['CBC'] = function() {
            function p(u, v, s) {
                var r = this['_iv'];
                r ? this['_iv'] = n : r = this['_prevBlock'];
                for (var t = 0; t < s; t++) {
                    u[v + t] ^= r[t]
                }
            }
            var q = h['extend']();
            q['Encryptor'] = q['extend']({
                processBlock: function(u, s) {
                    var r = this['_cipher'],
                        t = r['blockSize'];
                    p['call'](this, u, s, t);
                    r['encryptBlock'](u, s);
                    this['_prevBlock'] = u['slice'](s, s + t)
                }
            });
            q['Decryptor'] = q['extend']({
                processBlock: function(u, s) {
                    var r = this['_cipher'],
                        t = r['blockSize'],
                        v = u['slice'](s, s + t);
                    r['decryptBlock'](u, s);
                    p['call'](this, u, s, t);
                    this['_prevBlock'] = v
                }
            });
            return q
        }(),
        o = (m['pad'] = {})['Pkcs7'] = {
            pad: function(s, t) {
                for (var q = 4 * t, q = q - s['sigBytes'] % q, r = q << 24 | q << 16 | q << 8 | q, u = [], p = 0; p < q; p += 4) {
                    u['push'](r)
                }
                q = g['create'](u, q);
                s['concat'](q)
            },
            unpad: function(p) {
                p['sigBytes'] -= p['words'][p['sigBytes'] - 1 >>> 2] & 255
            }
        };
    k['BlockCipher'] = l['extend']({
        cfg: l['cfg']['extend']({
            mode: j,
            padding: o
        }),
        reset: function() {
            l['reset']['call'](this);
            var q = this['cfg'],
                r = q['iv'],
                q = q['mode'];
            if (this['_xformMode'] == this['_ENC_XFORM_MODE']) {
                var p = q['createEncryptor']
            } else {
                p = q['createDecryptor'], this['_minBufferSize'] = 1
            }
            this['_mode'] = p['call'](q, this, r && r['words'])
        },
        _doProcessBlock: function(p, q) {
            this['_mode']['processBlock'](p, q)
        },
        _doFinalize: function() {
            var p = this['cfg']['padding'];
            if (this['_xformMode'] == this['_ENC_XFORM_MODE']) {
                p['pad'](this._data, this['blockSize']);
                var q = this._process(!0)
            } else {
                q = this._process(!0), p['unpad'](q)
            }
            return q
        },
        blockSize: 4
    });
    var f = k['CipherParams'] = i['extend']({
            init: function(p) {
                this['mixIn'](p)
            },
            toString: function(p) {
                return (p || this['formatter'])['stringify'](this)
            }
        }),
        j = (m['format'] = {})['OpenSSL'] = {
            stringify: function(q) {
                var p = q['ciphertext'],
                    q = q['salt'],
                    p = (q ? g['create']([1398893684, 1701076831])['concat'](q)['concat'](p) : p).toString(c);
                return p = p['replace'](/(.{64})/g, '$1\x0A')
            },
            parse: function(r) {
                var r = c['parse'](r),
                    q = r['words'];
                if (1398893684 == q[0] && 1701076831 == q[1]) {
                    var p = g['create'](q['slice'](2, 4));
                    q['splice'](0, 4);
                    r['sigBytes'] -= 16
                }
                return f['create']({
                    ciphertext: r,
                    salt: p
                })
            }
        },
        d = k['SerializableCipher'] = i['extend']({
            cfg: i['extend']({
                format: j
            }),
            encrypt: function(s, q, p, r) {
                var r = this['cfg']['extend'](r),
                    t = s['createEncryptor'](p, r),
                    q = t['finalize'](q),
                    t = t['cfg'];
                return f['create']({
                    ciphertext: q,
                    key: p,
                    iv: t['iv'],
                    algorithm: s,
                    mode: t['mode'],
                    padding: t['padding'],
                    blockSize: s['blockSize'],
                    formatter: r['format']
                })
            },
            decrypt: function(r, p, q, s) {
                s = this['cfg']['extend'](s);
                p = this._parse(p, s['format']);
                return r['createDecryptor'](q, s)['finalize'](p['ciphertext'])
            },
            _parse: function(q, p) {
                return 'string' == typeof q ? p['parse'](q) : q
            }
        }),
        m = (m['kdf'] = {})['OpenSSL'] = {
            compute: function(r, p, q, s) {
                s || (s = g['random'](8));
                r = a['create']({
                    keySize: p + q
                })['compute'](r, s);
                q = g['create'](r['words']['slice'](p), 4 * q);
                r['sigBytes'] = 4 * p;
                return f['create']({
                    key: r,
                    iv: q,
                    salt: s
                })
            }
        },
        b = k['PasswordBasedCipher'] = d['extend']({
            cfg: d['cfg']['extend']({
                kdf: m
            }),
            encrypt: function(r, q, s, p) {
                p = this['cfg']['extend'](p);
                s = p['kdf']['compute'](s, r['keySize'], r['ivSize']);
                p['iv'] = s['iv'];
                r = d['encrypt']['call'](this, r, q, s['key'], p);
                r['mixIn'](s);
                return r
            },
            decrypt: function(r, q, s, p) {
                p = this['cfg']['extend'](p);
                q = this._parse(q, p['format']);
                s = p['kdf']['compute'](s, r['keySize'], r['ivSize'], q['salt']);
                p['iv'] = s['iv'];
                return d['decrypt']['call'](this, r, q, s['key'], p)
            }
        })
}();
(function() {
    var m = CryptoJS,
        l = m['lib']['BlockCipher'],
        j = m['algo'],
        h = [],
        f = [],
        d = [],
        b = [],
        a = [],
        k = [],
        i = [],
        g = [],
        n = [],
        e = [];
    (function() {
        for (var q = [], p = 0; 256 > p; p++) {
            q[p] = 128 > p ? p << 1 : p << 1 ^ 283
        }
        for (var o = 0, r = 0, p = 0; 256 > p; p++) {
            var w = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4,
                w = w >>> 8 ^ w & 255 ^ 99;
            h[o] = w;
            f[w] = o;
            var s = q[o],
                u = q[s],
                v = q[u],
                t = 257 * q[w] ^ 16843008 * w;
            d[o] = t << 24 | t >>> 8;
            b[o] = t << 16 | t >>> 16;
            a[o] = t << 8 | t >>> 24;
            k[o] = t;
            t = 16843009 * v ^ 65537 * u ^ 257 * s ^ 16843008 * o;
            i[w] = t << 24 | t >>> 8;
            g[w] = t << 16 | t >>> 16;
            n[w] = t << 8 | t >>> 24;
            e[w] = t;
            o ? (o = s ^ q[q[q[v ^ s]]], r ^= q[q[r]]) : o = r = 1
        }
    })();
    var c = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        j = j['AES'] = l['extend']({
            _doReset: function() {
                for (var s = this['_key'], t = s['words'], r = s['sigBytes'] / 4, s = 4 * ((this['_nRounds'] = r + 6) + 1), o = this['_keySchedule'] = [], q = 0; q < s; q++) {
                    if (q < r) {
                        o[q] = t[q]
                    } else {
                        var p = o[q - 1];
                        q % r ? 6 < r && 4 == q % r && (p = h[p >>> 24] << 24 | h[p >>> 16 & 255] << 16 | h[p >>> 8 & 255] << 8 | h[p & 255]) : (p = p << 8 | p >>> 24, p = h[p >>> 24] << 24 | h[p >>> 16 & 255] << 16 | h[p >>> 8 & 255] << 8 | h[p & 255], p ^= c[q / r | 0] << 24);
                        o[q] = o[q - r] ^ p
                    }
                }
                t = this['_invKeySchedule'] = [];
                for (r = 0; r < s; r++) {
                    q = s - r, p = r % 4 ? o[q] : o[q - 4], t[r] = 4 > r || 4 >= q ? p : i[h[p >>> 24]] ^ g[h[p >>> 16 & 255]] ^ n[h[p >>> 8 & 255]] ^ e[h[p & 255]]
                }
            },
            encryptBlock: function(p, o) {
                this._doCryptBlock(p, o, this._keySchedule, d, b, a, k, h)
            },
            decryptBlock: function(p, q) {
                var o = p[q + 1];
                p[q + 1] = p[q + 3];
                p[q + 3] = o;
                this._doCryptBlock(p, q, this._invKeySchedule, i, g, n, e, f);
                o = p[q + 1];
                p[q + 1] = p[q + 3];
                p[q + 3] = o
            },
            _doCryptBlock: function(z, s, r, x, B, C, A, q) {
                for (var y = this['_nRounds'], D = z[s] ^ r[0], u = z[s + 1] ^ r[1], v = z[s + 2] ^ r[2], F = z[s + 3] ^ r[3], E = 4, w = 1; w < y; w++) {
                    var t = x[D >>> 24] ^ B[u >>> 16 & 255] ^ C[v >>> 8 & 255] ^ A[F & 255] ^ r[E++],
                        p = x[u >>> 24] ^ B[v >>> 16 & 255] ^ C[F >>> 8 & 255] ^ A[D & 255] ^ r[E++],
                        o = x[v >>> 24] ^ B[F >>> 16 & 255] ^ C[D >>> 8 & 255] ^ A[u & 255] ^ r[E++],
                        F = x[F >>> 24] ^ B[D >>> 16 & 255] ^ C[u >>> 8 & 255] ^ A[v & 255] ^ r[E++],
                        D = t,
                        u = p,
                        v = o
                }
                t = (q[D >>> 24] << 24 | q[u >>> 16 & 255] << 16 | q[v >>> 8 & 255] << 8 | q[F & 255]) ^ r[E++];
                p = (q[u >>> 24] << 24 | q[v >>> 16 & 255] << 16 | q[F >>> 8 & 255] << 8 | q[D & 255]) ^ r[E++];
                o = (q[v >>> 24] << 24 | q[F >>> 16 & 255] << 16 | q[D >>> 8 & 255] << 8 | q[u & 255]) ^ r[E++];
                F = (q[F >>> 24] << 24 | q[D >>> 16 & 255] << 16 | q[u >>> 8 & 255] << 8 | q[v & 255]) ^ r[E++];
                z[s] = t;
                z[s + 1] = p;
                z[s + 2] = o;
                z[s + 3] = F
            },
            keySize: 8
        });
    m['AES'] = l._createHelper(j)
})();
var AesUtil = function(b, a) {
    this.keySize = b / 32;
    this.iterationCount = a
};
AesUtil.prototype.generateKey = function(b, c) {
    var a = CryptoJS.PBKDF2(c, CryptoJS.enc.Hex.parse(b), {
        keySize: this.keySize,
        iterations: this.iterationCount
    });
    return a
};
AesUtil.prototype.encrypt = function(d, a, f, c) {
    var b = this.generateKey(d, f);
    var e = CryptoJS.AES.encrypt(c, b, {
        iv: CryptoJS.enc.Hex.parse(a)
    });
    return e.ciphertext.toString(CryptoJS.enc.Base64)
};
AesUtil.prototype.decrypt = function(f, c, g, e) {
    var d = this.generateKey(f, g);
    var b = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(e)
    });
    var a = CryptoJS.AES.decrypt(b, d, {
        iv: CryptoJS.enc.Hex.parse(c)
    });
    return a.toString(CryptoJS.enc.Utf8)
};
var CryptoJS = CryptoJS || function(s, q) {
    var t = {},
        w = t.lib = {},
        c = w.Base = function() {
            function b() {}
            return {
                extend: function(d) {
                    b.prototype = this;
                    var f = new b;
                    d && f.mixIn(d);
                    f.$super = this;
                    return f
                },
                create: function() {
                    var d = this.extend();
                    d.init.apply(d, arguments);
                    return d
                },
                init: function() {},
                mixIn: function(d) {
                    for (var f in d) {
                        d.hasOwnProperty(f) && (this[f] = d[f])
                    }
                    d.hasOwnProperty("toString") && (this.toString = d.toString)
                },
                clone: function() {
                    return this.$super.extend(this)
                }
            }
        }(),
        e = w.WordArray = c.extend({
            init: function(b, d) {
                b = this.words = b || [];
                this.sigBytes = d != q ? d : 4 * b.length
            },
            toString: function(b) {
                return (b || v).stringify(this)
            },
            concat: function(f) {
                var g = this.words,
                    i = f.words,
                    h = this.sigBytes,
                    f = f.sigBytes;
                this.clamp();
                if (h % 4) {
                    for (var d = 0; d < f; d++) {
                        g[h + d >>> 2] |= (i[d >>> 2] >>> 24 - 8 * (d % 4) & 255) << 24 - 8 * ((h + d) % 4)
                    }
                } else {
                    if (65535 < i.length) {
                        for (d = 0; d < f; d += 4) {
                            g[h + d >>> 2] = i[d >>> 2]
                        }
                    } else {
                        g.push.apply(g, i)
                    }
                }
                this.sigBytes += f;
                return this
            },
            clamp: function() {
                var b = this.words,
                    d = this.sigBytes;
                b[d >>> 2] &= 4294967295 << 32 - 8 * (d % 4);
                b.length = s.ceil(d / 4)
            },
            clone: function() {
                var b = c.clone.call(this);
                b.words = this.words.slice(0);
                return b
            },
            random: function(b) {
                for (var d = [], f = 0; f < b; f += 4) {
                    d.push(4294967296 * s.random() | 0)
                }
                return e.create(d, b)
            }
        }),
        a = t.enc = {},
        v = a.Hex = {
            stringify: function(g) {
                for (var h = g.words, g = g.sigBytes, j = [], f = 0; f < g; f++) {
                    var i = h[f >>> 2] >>> 24 - 8 * (f % 4) & 255;
                    j.push((i >>> 4).toString(16));
                    j.push((i & 15).toString(16))
                }
                return j.join("")
            },
            parse: function(f) {
                for (var g = f.length, h = [], d = 0; d < g; d += 2) {
                    h[d >>> 3] |= parseInt(f.substr(d, 2), 16) << 24 - 4 * (d % 8)
                }
                return e.create(h, g / 2)
            }
        },
        p = a.Latin1 = {
            stringify: function(g) {
                for (var h = g.words, g = g.sigBytes, f = [], i = 0; i < g; i++) {
                    f.push(String.fromCharCode(h[i >>> 2] >>> 24 - 8 * (i % 4) & 255))
                }
                return f.join("")
            },
            parse: function(g) {
                for (var f = g.length, i = [], h = 0; h < f; h++) {
                    i[h >>> 2] |= (g.charCodeAt(h) & 255) << 24 - 8 * (h % 4)
                }
                return e.create(i, f)
            }
        },
        o = a.Utf8 = {
            stringify: function(f) {
                try {
                    return decodeURIComponent(escape(p.stringify(f)))
                } catch (d) {
                    throw Error("Malformed UTF-8 data")
                }
            },
            parse: function(b) {
                return p.parse(unescape(encodeURIComponent(b)))
            }
        },
        r = w.BufferedBlockAlgorithm = c.extend({
            reset: function() {
                this._data = e.create();
                this._nDataBytes = 0
            },
            _append: function(b) {
                "string" == typeof b && (b = o.parse(b));
                this._data.concat(b);
                this._nDataBytes += b.sigBytes
            },
            _process: function(i) {
                var g = this._data,
                    u = g.words,
                    n = g.sigBytes,
                    k = this.blockSize,
                    l = n / (4 * k),
                    l = i ? s.ceil(l) : s.max((l | 0) - this._minBufferSize, 0),
                    i = l * k,
                    n = s.min(4 * i, n);
                if (i) {
                    for (var m = 0; m < i; m += k) {
                        this._doProcessBlock(u, m)
                    }
                    m = u.splice(0, i);
                    g.sigBytes -= n
                }
                return e.create(m, n)
            },
            clone: function() {
                var b = c.clone.call(this);
                b._data = this._data.clone();
                return b
            },
            _minBufferSize: 0
        });
    w.Hasher = r.extend({
        init: function() {
            this.reset()
        },
        reset: function() {
            r.reset.call(this);
            this._doReset()
        },
        update: function(b) {
            this._append(b);
            this._process();
            return this
        },
        finalize: function(b) {
            b && this._append(b);
            this._doFinalize();
            return this._hash
        },
        clone: function() {
            var b = r.clone.call(this);
            b._hash = this._hash.clone();
            return b
        },
        blockSize: 16,
        _createHelper: function(b) {
            return function(d, f) {
                return b.create(f).finalize(d)
            }
        },
        _createHmacHelper: function(b) {
            return function(d, f) {
                return x.HMAC.create(b, f).finalize(d)
            }
        }
    });
    var x = t.algo = {};
    return t
}(Math);
(function() {
    var e = CryptoJS,
        d = e.lib,
        h = d.WordArray,
        d = d.Hasher,
        c = [],
        a = e.algo.SHA1 = d.extend({
            _doReset: function() {
                this._hash = h.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
            },
            _doProcessBlock: function(p, b) {
                for (var r = this._hash.words, l = r[0], i = r[1], m = r[2], o = r[3], t = r[4], q = 0; 80 > q; q++) {
                    if (16 > q) {
                        c[q] = p[b + q] | 0
                    } else {
                        var s = c[q - 3] ^ c[q - 8] ^ c[q - 14] ^ c[q - 16];
                        c[q] = s << 1 | s >>> 31
                    }
                    s = (l << 5 | l >>> 27) + t + c[q];
                    s = 20 > q ? s + ((i & m | ~i & o) + 1518500249) : 40 > q ? s + ((i ^ m ^ o) + 1859775393) : 60 > q ? s + ((i & m | i & o | m & o) - 1894007588) : s + ((i ^ m ^ o) - 899497514);
                    t = o;
                    o = m;
                    m = i << 30 | i >>> 2;
                    i = l;
                    l = s
                }
                r[0] = r[0] + l | 0;
                r[1] = r[1] + i | 0;
                r[2] = r[2] + m | 0;
                r[3] = r[3] + o | 0;
                r[4] = r[4] + t | 0
            },
            _doFinalize: function() {
                var g = this._data,
                    k = g.words,
                    l = 8 * this._nDataBytes,
                    i = 8 * g.sigBytes;
                k[i >>> 5] |= 128 << 24 - i % 32;
                k[(i + 64 >>> 9 << 4) + 15] = l;
                g.sigBytes = 4 * k.length;
                this._process()
            }
        });
    e.SHA1 = d._createHelper(a);
    e.HmacSHA1 = d._createHmacHelper(a)
})();
(function() {
    var b = CryptoJS,
        a = b.enc.Utf8;
    b.algo.HMAC = b.lib.Base.extend({
        init: function(q, s) {
            q = this._hasher = q.create();
            "string" == typeof s && (s = a.parse(s));
            var p = q.blockSize,
                e = 4 * p;
            s.sigBytes > e && (s = q.finalize(s));
            for (var c = this._oKey = s.clone(), r = this._iKey = s.clone(), m = c.words, i = r.words, o = 0; o < p; o++) {
                m[o] ^= 1549556828, i[o] ^= 909522486
            }
            c.sigBytes = r.sigBytes = e;
            this.reset()
        },
        reset: function() {
            var c = this._hasher;
            c.reset();
            c.update(this._iKey)
        },
        update: function(c) {
            this._hasher.update(c);
            return this
        },
        finalize: function(d) {
            var c = this._hasher,
                d = c.finalize(d);
            c.reset();
            return c.finalize(this._oKey.clone().concat(d))
        }
    })
})();
(function() {
    var h = CryptoJS,
        e = h.lib,
        j = e.Base,
        c = e.WordArray,
        e = h.algo,
        a = e.HMAC,
        d = e.PBKDF2 = j.extend({
            cfg: j.extend({
                keySize: 4,
                hasher: e.SHA1,
                iterations: 1
            }),
            init: function(f) {
                this.cfg = this.cfg.extend(f)
            },
            compute: function(z, B) {
                for (var y = this.cfg, u = a.create(y.hasher, z), x = c.create(), w = c.create([1]), D = x.words, A = w.words, C = y.keySize, y = y.iterations; D.length < C;) {
                    var o = u.update(B).finalize(w);
                    u.reset();
                    for (var m = o.words, F = m.length, b = o, G = 1; G < y; G++) {
                        b = u.finalize(b);
                        u.reset();
                        for (var E = b.words, n = 0; n < F; n++) {
                            m[n] ^= E[n]
                        }
                    }
                    x.concat(o);
                    A[0]++
                }
                x.sigBytes = 4 * C;
                return x
            }
        });
    h.PBKDF2 = function(g, k, i) {
        return d.create(i).compute(g, k)
    }
})();

module.exports = {
  getKeyAndPassCrypto,
};

function getKeyAndPassCrypto(c, h = keyRequired ) {
  var a = 1000;
  var g = 128;
  var b = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
  var d = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
  var e = new AesUtil(g, a);
  var f = e.encrypt(d, b, h, c);
  return {
    userPassCrypto: f,
    key1: b,
    key2: d
  }
}
