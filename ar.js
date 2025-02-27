// threejs.org/license
(function(l, xa) {
    "object" === typeof exports && "undefined" !== typeof module ? xa(exports) : "function" === typeof define && define.amd ? define(["exports"], xa) : xa(l.THREE = l.THREE || {})
})(this, function(l) {
    function xa() {}
    function C(a, b) {
        this.x = a || 0;
        this.y = b || 0
    }
    function ba(a, b, c, d, e, f, g, h, k, m) {
        Object.defineProperty(this, "id", {
            value: hf++
        });
        this.uuid = Y.generateUUID();
        this.name = "";
        this.image = void 0 !== a ? a : ba.DEFAULT_IMAGE;
        this.mipmaps = [];
        this.mapping = void 0 !== b ? b : ba.DEFAULT_MAPPING;
        this.wrapS = void 0 !== c ? c : 1001;
        this.wrapT =
        void 0 !== d ? d : 1001;
        this.magFilter = void 0 !== e ? e : 1006;
        this.minFilter = void 0 !== f ? f : 1008;
        this.anisotropy = void 0 !== k ? k : 1;
        this.format = void 0 !== g ? g : 1023;
        this.type = void 0 !== h ? h : 1009;
        this.offset = new C(0, 0);
        this.repeat = new C(1, 1);
        this.generateMipmaps = !0;
        this.premultiplyAlpha = !1;
        this.flipY = !0;
        this.unpackAlignment = 4;
        this.encoding = void 0 !== m ? m : 3E3;
        this.version = 0;
        this.onUpdate = null
    }
    function fa(a, b, c, d) {
        this.x = a || 0;
        this.y = b || 0;
        this.z = c || 0;
        this.w = void 0 !== d ? d : 1
    }
    function Cb(a, b, c) {
        this.uuid = Y.generateUUID();
        this.width =
        a;
        this.height = b;
        this.scissor = new fa(0, 0, a, b);
        this.scissorTest = !1;
        this.viewport = new fa(0, 0, a, b);
        c = c || {};
        void 0 === c.minFilter && (c.minFilter = 1006);
        this.texture = new ba(void 0, void 0, c.wrapS, c.wrapT, c.magFilter, c.minFilter, c.format, c.type, c.anisotropy, c.encoding);
        this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0;
        this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer : !0;
        this.depthTexture = void 0 !== c.depthTexture ? c.depthTexture : null
    }
    function Db(a, b, c) {
        Cb.call(this, a, b, c);
        this.activeMipMapLevel =
        this.activeCubeFace = 0
    }
    function oa(a, b, c, d) {
        this._x = a || 0;
        this._y = b || 0;
        this._z = c || 0;
        this._w = void 0 !== d ? d : 1
    }
    function n(a, b, c) {
        this.x = a || 0;
        this.y = b || 0;
        this.z = c || 0
    }
    function K() {
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }
    function db(a, b, c, d, e, f, g, h, k, m, q, v) {
        ba.call(this, null, f, g, h, k, m, d, e, q, v);
        this.image = {
            data: a,
            width: b,
            height: c
        };
        this.magFilter = void 0 !== k ? k : 1003;
        this.minFilter = void 0 !==
        m ? m : 1003;
        this.flipY = this.generateMipmaps = !1;
        this.unpackAlignment = 1
    }
    function Xa(a, b, c, d, e, f, g, h, k, m) {
        a = void 0 !== a ? a : [];
        ba.call(this, a, void 0 !== b ? b : 301, c, d, e, f, g, h, k, m);
        this.flipY = !1
    }
    function Eb(a, b, c) {
        var d = a[0];
        if (0 >= d || 0 < d)
            return a;
        var e = b * c,
            f = xe[e];
        void 0 === f && (f = new Float32Array(e), xe[e] = f);
        if (0 !== b)
            for (d.toArray(f, 0), d = 1, e = 0; d !== b; ++d)
                e += c, a[d].toArray(f, e);
        return f
    }
    function ye(a, b) {
        var c = ze[b];
        void 0 === c && (c = new Int32Array(b), ze[b] = c);
        for (var d = 0; d !== b; ++d)
            c[d] = a.allocTextureUnit();
        return c
    }
    function jf(a, b) {
        a.uniform1f(this.addr, b)
    }
    function kf(a, b) {
        a.uniform1i(this.addr, b)
    }
    function lf(a, b) {
        void 0 === b.x ? a.uniform2fv(this.addr, b) : a.uniform2f(this.addr, b.x, b.y)
    }
    function mf(a, b) {
        void 0 !== b.x ? a.uniform3f(this.addr, b.x, b.y, b.z) : void 0 !== b.r ? a.uniform3f(this.addr, b.r, b.g, b.b) : a.uniform3fv(this.addr, b)
    }
    function nf(a, b) {
        void 0 === b.x ? a.uniform4fv(this.addr, b) : a.uniform4f(this.addr, b.x, b.y, b.z, b.w)
    }
    function of(a, b) {
        a.uniformMatrix2fv(this.addr, !1, b.elements || b)
    }
    function pf(a, b) {
        void 0 === b.elements ?
        a.uniformMatrix3fv(this.addr, !1, b) : (Ae.set(b.elements), a.uniformMatrix3fv(this.addr, !1, Ae))
    }
    function qf(a, b) {
        void 0 === b.elements ? a.uniformMatrix4fv(this.addr, !1, b) : (Be.set(b.elements), a.uniformMatrix4fv(this.addr, !1, Be))
    }
    function rf(a, b, c) {
        var d = c.allocTextureUnit();
        a.uniform1i(this.addr, d);
        c.setTexture2D(b || Ce, d)
    }
    function sf(a, b, c) {
        var d = c.allocTextureUnit();
        a.uniform1i(this.addr, d);
        c.setTextureCube(b || De, d)
    }
    function Ee(a, b) {
        a.uniform2iv(this.addr, b)
    }
    function Fe(a, b) {
        a.uniform3iv(this.addr, b)
    }
    function Ge(a,
    b) {
        a.uniform4iv(this.addr, b)
    }
    function tf(a) {
        switch (a) {
        case 5126:
            return jf;
        case 35664:
            return lf;
        case 35665:
            return mf;
        case 35666:
            return nf;
        case 35674:
            return of;
        case 35675:
            return pf;
        case 35676:
            return qf;
        case 35678:
        case 36198:
            return rf;
        case 35680:
            return sf;
        case 5124:
        case 35670:
            return kf;
        case 35667:
        case 35671:
            return Ee;
        case 35668:
        case 35672:
            return Fe;
        case 35669:
        case 35673:
            return Ge
        }
    }
    function uf(a, b) {
        a.uniform1fv(this.addr, b)
    }
    function vf(a, b) {
        a.uniform1iv(this.addr, b)
    }
    function wf(a, b) {
        a.uniform2fv(this.addr,
        Eb(b, this.size, 2))
    }
    function xf(a, b) {
        a.uniform3fv(this.addr, Eb(b, this.size, 3))
    }
    function yf(a, b) {
        a.uniform4fv(this.addr, Eb(b, this.size, 4))
    }
    function zf(a, b) {
        a.uniformMatrix2fv(this.addr, !1, Eb(b, this.size, 4))
    }
    function Af(a, b) {
        a.uniformMatrix3fv(this.addr, !1, Eb(b, this.size, 9))
    }
    function Bf(a, b) {
        a.uniformMatrix4fv(this.addr, !1, Eb(b, this.size, 16))
    }
    function Cf(a, b, c) {
        var d = b.length,
            e = ye(c, d);
        a.uniform1iv(this.addr, e);
        for (a = 0; a !== d; ++a)
            c.setTexture2D(b[a] || Ce, e[a])
    }
    function Df(a, b, c) {
        var d = b.length,
            e = ye(c,
            d);
        a.uniform1iv(this.addr, e);
        for (a = 0; a !== d; ++a)
            c.setTextureCube(b[a] || De, e[a])
    }
    function Ef(a) {
        switch (a) {
        case 5126:
            return uf;
        case 35664:
            return wf;
        case 35665:
            return xf;
        case 35666:
            return yf;
        case 35674:
            return zf;
        case 35675:
            return Af;
        case 35676:
            return Bf;
        case 35678:
            return Cf;
        case 35680:
            return Df;
        case 5124:
        case 35670:
            return vf;
        case 35667:
        case 35671:
            return Ee;
        case 35668:
        case 35672:
            return Fe;
        case 35669:
        case 35673:
            return Ge
        }
    }
    function Ff(a, b, c) {
        this.id = a;
        this.addr = c;
        this.setValue = tf(b.type)
    }
    function Gf(a, b,
    c) {
        this.id = a;
        this.addr = c;
        this.size = b.size;
        this.setValue = Ef(b.type)
    }
    function He(a) {
        this.id = a;
        this.seq = [];
        this.map = {}
    }
    function eb(a, b, c) {
        this.seq = [];
        this.map = {};
        this.renderer = c;
        c = a.getProgramParameter(b, a.ACTIVE_UNIFORMS);
        for (var d = 0; d < c; ++d) {
            var e = a.getActiveUniform(b, d),
                f = a.getUniformLocation(b, e.name),
                g = this,
                h = e.name,
                k = h.length;
            for (Pd.lastIndex = 0;;) {
                var m = Pd.exec(h),
                    q = Pd.lastIndex,
                    v = m[1],
                    p = m[3];
                "]" === m[2] && (v |= 0);
                if (void 0 === p || "[" === p && q + 2 === k) {
                    h = g;
                    e = void 0 === p ? new Ff(v, e, f) : new Gf(v, e, f);
                    h.seq.push(e);
                    h.map[e.id] = e;
                    break
                } else
                    p = g.map[v], void 0 === p && (p = new He(v), v = g, g = p, v.seq.push(g), v.map[g.id] = g), g = p
            }
        }
    }
    function G(a, b, c) {
        return void 0 === b && void 0 === c ? this.set(a) : this.setRGB(a, b, c)
    }
    function fd(a, b) {
        this.min = void 0 !== a ? a : new C(Infinity, Infinity);
        this.max = void 0 !== b ? b : new C(-Infinity, -Infinity)
    }
    function Hf(a, b) {
        var c,
            d,
            e,
            f,
            g,
            h,
            k,
            m,
            q,
            v,
            p = a.context,
            r = a.state,
            l,
            t,
            y,
            x,
            u,
            H;
        this.render = function(w, I, W) {
            if (0 !== b.length) {
                w = new n;
                var D = W.w / W.z,
                    O = .5 * W.z,
                    aa = .5 * W.w,
                    F = 16 / W.w,
                    ja = new C(F * D, F),
                    T = new n(1, 1, 0),
                    fb = new C(1,
                    1),
                    Ya = new fd;
                Ya.min.set(W.x, W.y);
                Ya.max.set(W.x + (W.z - 16), W.y + (W.w - 16));
                if (void 0 === x) {
                    var F = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
                        ka = new Uint16Array([0, 1, 2, 0, 2, 3]);
                    l = p.createBuffer();
                    t = p.createBuffer();
                    p.bindBuffer(p.ARRAY_BUFFER, l);
                    p.bufferData(p.ARRAY_BUFFER, F, p.STATIC_DRAW);
                    p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, t);
                    p.bufferData(p.ELEMENT_ARRAY_BUFFER, ka, p.STATIC_DRAW);
                    u = p.createTexture();
                    H = p.createTexture();
                    r.bindTexture(p.TEXTURE_2D, u);
                    p.texImage2D(p.TEXTURE_2D, 0, p.RGB, 16, 16, 0,
                    p.RGB, p.UNSIGNED_BYTE, null);
                    p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE);
                    p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE);
                    p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST);
                    p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST);
                    r.bindTexture(p.TEXTURE_2D, H);
                    p.texImage2D(p.TEXTURE_2D, 0, p.RGBA, 16, 16, 0, p.RGBA, p.UNSIGNED_BYTE, null);
                    p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE);
                    p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE);
                    p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST);
                    p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST);
                    var F = y = {
                            vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                            fragmentShader: "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                        },
                        ka = p.createProgram(),
                        P = p.createShader(p.FRAGMENT_SHADER),
                        M = p.createShader(p.VERTEX_SHADER),
                        V = "precision " + a.getPrecision() + " float;\n";
                    p.shaderSource(P, V + F.fragmentShader);
                    p.shaderSource(M, V + F.vertexShader);
                    p.compileShader(P);
                    p.compileShader(M);
                    p.attachShader(ka, P);
                    p.attachShader(ka, M);
                    p.linkProgram(ka);
                    x = ka;
                    q = p.getAttribLocation(x, "position");
                    v = p.getAttribLocation(x, "uv");
                    c = p.getUniformLocation(x, "renderType");
                    d = p.getUniformLocation(x, "map");
                    e = p.getUniformLocation(x, "occlusionMap");
                    f = p.getUniformLocation(x, "opacity");
                    g = p.getUniformLocation(x, "color");
                    h = p.getUniformLocation(x, "scale");
                    k = p.getUniformLocation(x, "rotation");
                    m = p.getUniformLocation(x, "screenPosition")
                }
                p.useProgram(x);
                r.initAttributes();
                r.enableAttribute(q);
                r.enableAttribute(v);
                r.disableUnusedAttributes();
                p.uniform1i(e, 0);
                p.uniform1i(d, 1);
                p.bindBuffer(p.ARRAY_BUFFER, l);
                p.vertexAttribPointer(q, 2, p.FLOAT, !1, 16, 0);
                p.vertexAttribPointer(v, 2, p.FLOAT, !1, 16, 8);
                p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, t);
                r.disable(p.CULL_FACE);
                r.buffers.depth.setMask(!1);
                ka = 0;
                for (P = b.length; ka < P; ka++)
                    if (F = 16 / W.w,
                    ja.set(F * D, F), M = b[ka], w.set(M.matrixWorld.elements[12], M.matrixWorld.elements[13], M.matrixWorld.elements[14]), w.applyMatrix4(I.matrixWorldInverse), w.applyMatrix4(I.projectionMatrix), T.copy(w), fb.x = W.x + T.x * O + O - 8, fb.y = W.y + T.y * aa + aa - 8, !0 === Ya.containsPoint(fb)) {
                        r.activeTexture(p.TEXTURE0);
                        r.bindTexture(p.TEXTURE_2D, null);
                        r.activeTexture(p.TEXTURE1);
                        r.bindTexture(p.TEXTURE_2D, u);
                        p.copyTexImage2D(p.TEXTURE_2D, 0, p.RGB, fb.x, fb.y, 16, 16, 0);
                        p.uniform1i(c, 0);
                        p.uniform2f(h, ja.x, ja.y);
                        p.uniform3f(m, T.x, T.y, T.z);
                        r.disable(p.BLEND);
                        r.enable(p.DEPTH_TEST);
                        p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0);
                        r.activeTexture(p.TEXTURE0);
                        r.bindTexture(p.TEXTURE_2D, H);
                        p.copyTexImage2D(p.TEXTURE_2D, 0, p.RGBA, fb.x, fb.y, 16, 16, 0);
                        p.uniform1i(c, 1);
                        r.disable(p.DEPTH_TEST);
                        r.activeTexture(p.TEXTURE1);
                        r.bindTexture(p.TEXTURE_2D, u);
                        p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0);
                        M.positionScreen.copy(T);
                        M.customUpdateCallback ? M.customUpdateCallback(M) : M.updateLensFlares();
                        p.uniform1i(c, 2);
                        r.enable(p.BLEND);
                        for (var V = 0, pa = M.lensFlares.length; V <
                        pa; V++) {
                            var S = M.lensFlares[V];
                            .001 < S.opacity && .001 < S.scale && (T.x = S.x, T.y = S.y, T.z = S.z, F = S.size * S.scale / W.w, ja.x = F * D, ja.y = F, p.uniform3f(m, T.x, T.y, T.z), p.uniform2f(h, ja.x, ja.y), p.uniform1f(k, S.rotation), p.uniform1f(f, S.opacity), p.uniform3f(g, S.color.r, S.color.g, S.color.b), r.setBlending(S.blending, S.blendEquation, S.blendSrc, S.blendDst), a.setTexture2D(S.texture, 1), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0))
                        }
                    }
                r.enable(p.CULL_FACE);
                r.enable(p.DEPTH_TEST);
                r.buffers.depth.setMask(!0);
                a.resetGLState()
            }
        }
    }
    function If(a, b) {
        var c,
            d,
            e,
            f,
            g,
            h,
            k,
            m,
            q,
            v,
            p,
            r,
            l,
            t,
            y,
            x,
            u;
        function H(a, b) {
            return a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.z !== b.z ? b.z - a.z : b.id - a.id
        }
        var w = a.context,
            I = a.state,
            W,
            D,
            O,
            aa,
            F = new n,
            ja = new oa,
            T = new n;
        this.render = function(n, Ya) {
            if (0 !== b.length) {
                if (void 0 === O) {
                    var ka = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
                        P = new Uint16Array([0, 1, 2, 0, 2, 3]);
                    W = w.createBuffer();
                    D = w.createBuffer();
                    w.bindBuffer(w.ARRAY_BUFFER, W);
                    w.bufferData(w.ARRAY_BUFFER, ka, w.STATIC_DRAW);
                    w.bindBuffer(w.ELEMENT_ARRAY_BUFFER, D);
                    w.bufferData(w.ELEMENT_ARRAY_BUFFER, P, w.STATIC_DRAW);
                    var ka = w.createProgram(),
                        P = w.createShader(w.VERTEX_SHADER),
                        M = w.createShader(w.FRAGMENT_SHADER);
                    w.shaderSource(P, ["precision " + a.getPrecision() + " float;", "#define SHADER_NAME SpriteMaterial\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
                    w.shaderSource(M, ["precision " + a.getPrecision() + " float;", "#define SHADER_NAME SpriteMaterial\nuniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
                    w.compileShader(P);
                    w.compileShader(M);
                    w.attachShader(ka, P);
                    w.attachShader(ka, M);
                    w.linkProgram(ka);
                    O = ka;
                    x = w.getAttribLocation(O, "position");
                    u = w.getAttribLocation(O, "uv");
                    c = w.getUniformLocation(O, "uvOffset");
                    d = w.getUniformLocation(O, "uvScale");
                    e = w.getUniformLocation(O, "rotation");
                    f = w.getUniformLocation(O, "scale");
                    g = w.getUniformLocation(O, "color");
                    h = w.getUniformLocation(O, "map");
                    k = w.getUniformLocation(O, "opacity");
                    m = w.getUniformLocation(O, "modelViewMatrix");
                    q = w.getUniformLocation(O, "projectionMatrix");
                    v = w.getUniformLocation(O, "fogType");
                    p = w.getUniformLocation(O, "fogDensity");
                    r = w.getUniformLocation(O, "fogNear");
                    l = w.getUniformLocation(O, "fogFar");
                    t = w.getUniformLocation(O, "fogColor");
                    y = w.getUniformLocation(O, "alphaTest");
                    ka = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                    ka.width = 8;
                    ka.height = 8;
                    P = ka.getContext("2d");
                    P.fillStyle = "white";
                    P.fillRect(0, 0, 8, 8);
                    aa = new ba(ka);
                    aa.needsUpdate = !0
                }
                w.useProgram(O);
                I.initAttributes();
                I.enableAttribute(x);
                I.enableAttribute(u);
                I.disableUnusedAttributes();
                I.disable(w.CULL_FACE);
                I.enable(w.BLEND);
                w.bindBuffer(w.ARRAY_BUFFER, W);
                w.vertexAttribPointer(x, 2, w.FLOAT, !1, 16, 0);
                w.vertexAttribPointer(u, 2, w.FLOAT, !1, 16, 8);
                w.bindBuffer(w.ELEMENT_ARRAY_BUFFER, D);
                w.uniformMatrix4fv(q, !1, Ya.projectionMatrix.elements);
                I.activeTexture(w.TEXTURE0);
                w.uniform1i(h, 0);
                P = ka = 0;
                (M = n.fog) ? (w.uniform3f(t, M.color.r, M.color.g, M.color.b), M.isFog ? (w.uniform1f(r, M.near), w.uniform1f(l, M.far), w.uniform1i(v, 1), P = ka = 1) : M.isFogExp2 && (w.uniform1f(p, M.density), w.uniform1i(v, 2), P = ka = 2)) :
                (w.uniform1i(v, 0), P = ka = 0);
                for (var M = 0, V = b.length; M < V; M++) {
                    var pa = b[M];
                    pa.modelViewMatrix.multiplyMatrices(Ya.matrixWorldInverse, pa.matrixWorld);
                    pa.z = -pa.modelViewMatrix.elements[14]
                }
                b.sort(H);
                for (var S = [], M = 0, V = b.length; M < V; M++) {
                    var pa = b[M],
                        N = pa.material;
                    if (!1 !== N.visible) {
                        pa.onBeforeRender(a, n, Ya, void 0, N, void 0);
                        w.uniform1f(y, N.alphaTest);
                        w.uniformMatrix4fv(m, !1, pa.modelViewMatrix.elements);
                        pa.matrixWorld.decompose(F, ja, T);
                        S[0] = T.x;
                        S[1] = T.y;
                        var C = 0;
                        n.fog && N.fog && (C = P);
                        ka !== C && (w.uniform1i(v, C),
                        ka = C);
                        null !== N.map ? (w.uniform2f(c, N.map.offset.x, N.map.offset.y), w.uniform2f(d, N.map.repeat.x, N.map.repeat.y)) : (w.uniform2f(c, 0, 0), w.uniform2f(d, 1, 1));
                        w.uniform1f(k, N.opacity);
                        w.uniform3f(g, N.color.r, N.color.g, N.color.b);
                        w.uniform1f(e, N.rotation);
                        w.uniform2fv(f, S);
                        I.setBlending(N.blending, N.blendEquation, N.blendSrc, N.blendDst, N.blendEquationAlpha, N.blendSrcAlpha, N.blendDstAlpha, N.premultipliedAlpha);
                        I.buffers.depth.setTest(N.depthTest);
                        I.buffers.depth.setMask(N.depthWrite);
                        N.map ? a.setTexture2D(N.map,
                        0) : a.setTexture2D(aa, 0);
                        w.drawElements(w.TRIANGLES, 6, w.UNSIGNED_SHORT, 0);
                        pa.onAfterRender(a, n, Ya, void 0, N, void 0)
                    }
                }
                I.enable(w.CULL_FACE);
                a.resetGLState()
            }
        }
    }
    function U() {
        Object.defineProperty(this, "id", {
            value: Jf++
        });
        this.uuid = Y.generateUUID();
        this.name = "";
        this.type = "Material";
        this.lights = this.fog = !0;
        this.blending = 1;
        this.side = 0;
        this.shading = 2;
        this.vertexColors = 0;
        this.opacity = 1;
        this.transparent = !1;
        this.blendSrc = 204;
        this.blendDst = 205;
        this.blendEquation = 100;
        this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha =
        null;
        this.depthFunc = 3;
        this.depthWrite = this.depthTest = !0;
        this.clippingPlanes = null;
        this.clipShadows = this.clipIntersection = !1;
        this.colorWrite = !0;
        this.precision = null;
        this.polygonOffset = !1;
        this.polygonOffsetUnits = this.polygonOffsetFactor = 0;
        this.dithering = !1;
        this.alphaTest = 0;
        this.premultipliedAlpha = !1;
        this.overdraw = 0;
        this.needsUpdate = this.visible = !0
    }
    function ra(a) {
        U.call(this);
        this.type = "ShaderMaterial";
        this.defines = {};
        this.uniforms = {};
        this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
        this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
        this.linewidth = 1;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.morphNormals = this.morphTargets = this.skinning = this.clipping = this.lights = this.fog = !1;
        this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        };
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        };
        this.index0AttributeName = void 0;
        void 0 !== a && (void 0 !== a.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
        this.setValues(a))
    }
    function Za(a) {
        U.call(this);
        this.type = "MeshDepthMaterial";
        this.depthPacking = 3200;
        this.morphTargets = this.skinning = !1;
        this.displacementMap = this.alphaMap = this.map = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.lights = this.fog = !1;
        this.setValues(a)
    }
    function Ra(a, b) {
        this.min = void 0 !== a ? a : new n(Infinity, Infinity, Infinity);
        this.max = void 0 !== b ? b : new n(-Infinity, -Infinity, -Infinity)
    }
    function Ea(a, b) {
        this.center = void 0 !== a ? a : new n;
        this.radius =
        void 0 !== b ? b : 0
    }
    function Ba() {
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
        0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }
    function Aa(a, b) {
        this.normal = void 0 !== a ? a : new n(1, 0, 0);
        this.constant = void 0 !== b ? b : 0
    }
    function gd(a, b, c, d, e, f) {
        this.planes = [void 0 !== a ? a : new Aa, void 0 !== b ? b : new Aa, void 0 !== c ? c : new Aa, void 0 !== d ? d : new Aa, void 0 !== e ? e : new Aa, void 0 !== f ? f : new Aa]
    }
    function Ie(a, b, c, d) {
        function e(b, c, d, e) {
            var f = b.geometry,
                g;
            g = t;
            var h = b.customDepthMaterial;
            d && (g = y, h = b.customDistanceMaterial);
            h ? g = h : (h = !1, c.morphTargets && (f && f.isBufferGeometry ? h = f.morphAttributes && f.morphAttributes.position && 0 < f.morphAttributes.position.length : f && f.isGeometry && (h = f.morphTargets && 0 < f.morphTargets.length)), b.isSkinnedMesh && !1 === c.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", b), b = b.isSkinnedMesh && c.skinning, f = 0, h && (f |= 1), b && (f |= 2), g = g[f]);
            a.localClippingEnabled && !0 === c.clipShadows && 0 !== c.clippingPlanes.length && (f =
            g.uuid, h = c.uuid, b = x[f], void 0 === b && (b = {}, x[f] = b), f = b[h], void 0 === f && (f = g.clone(), b[h] = f), g = f);
            g.visible = c.visible;
            g.wireframe = c.wireframe;
            h = c.side;
            F.renderSingleSided && 2 == h && (h = 0);
            F.renderReverseSided && (0 === h ? h = 1 : 1 === h && (h = 0));
            g.side = h;
            g.clipShadows = c.clipShadows;
            g.clippingPlanes = c.clippingPlanes;
            g.wireframeLinewidth = c.wireframeLinewidth;
            g.linewidth = c.linewidth;
            d && void 0 !== g.uniforms.lightPos && g.uniforms.lightPos.value.copy(e);
            return g
        }
        function f(b, d, g, h) {
            if (!1 !== b.visible) {
                if (b.layers.test(d.layers) &&
                (b.isMesh || b.isLine || b.isPoints) && b.castShadow && (!b.frustumCulled || k.intersectsObject(b))) {
                    b.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse, b.matrixWorld);
                    var m = c.update(b),
                        p = b.material;
                    if (Array.isArray(p))
                        for (var q = m.groups, v = 0, r = q.length; v < r; v++) {
                            var u = q[v],
                                w = p[u.materialIndex];
                            w && w.visible && (w = e(b, w, h, l), a.renderBufferDirect(g, null, m, w, b, u))
                        }
                    else
                        p.visible && (w = e(b, p, h, l), a.renderBufferDirect(g, null, m, w, b, null))
                }
                b = b.children;
                m = 0;
                for (p = b.length; m < p; m++)
                    f(b[m], d, g, h)
            }
        }
        var g = a.context,
            h = a.state,
            k = new gd,
            m = new K,
            q = b.shadows,
            v = new C,
            p = new C(d.maxTextureSize, d.maxTextureSize),
            r = new n,
            l = new n,
            t = Array(4),
            y = Array(4),
            x = {},
            u = [new n(1, 0, 0), new n(-1, 0, 0), new n(0, 0, 1), new n(0, 0, -1), new n(0, 1, 0), new n(0, -1, 0)],
            H = [new n(0, 1, 0), new n(0, 1, 0), new n(0, 1, 0), new n(0, 1, 0), new n(0, 0, 1), new n(0, 0, -1)],
            w = [new fa, new fa, new fa, new fa, new fa, new fa];
        b = new Za;
        b.depthPacking = 3201;
        b.clipping = !0;
        d = $a.distanceRGBA;
        for (var I = Ca.clone(d.uniforms), W = 0; 4 !== W; ++W) {
            var D = 0 !== (W & 1),
                O = 0 !== (W & 2),
                aa = b.clone();
            aa.morphTargets =
            D;
            aa.skinning = O;
            t[W] = aa;
            D = new ra({
                defines: {
                    USE_SHADOWMAP: ""
                },
                uniforms: I,
                vertexShader: d.vertexShader,
                fragmentShader: d.fragmentShader,
                morphTargets: D,
                skinning: O,
                clipping: !0
            });
            y[W] = D
        }
        var F = this;
        this.enabled = !1;
        this.autoUpdate = !0;
        this.needsUpdate = !1;
        this.type = 1;
        this.renderSingleSided = this.renderReverseSided = !0;
        this.render = function(b, c) {
            if (!1 !== F.enabled && (!1 !== F.autoUpdate || !1 !== F.needsUpdate) && 0 !== q.length) {
                h.disable(g.BLEND);
                h.buffers.color.setClear(1, 1, 1, 1);
                h.buffers.depth.setTest(!0);
                h.setScissorTest(!1);
                for (var d, e = 0, t = q.length; e < t; e++) {
                    var n = q[e];
                    d = n.shadow;
                    var y = n && n.isPointLight;
                    if (void 0 === d)
                        console.warn("THREE.WebGLShadowMap:", n, "has no shadow.");
                    else {
                        var x = d.camera;
                        v.copy(d.mapSize);
                        v.min(p);
                        if (y) {
                            var D = v.x,
                                I = v.y;
                            w[0].set(2 * D, I, D, I);
                            w[1].set(0, I, D, I);
                            w[2].set(3 * D, I, D, I);
                            w[3].set(D, I, D, I);
                            w[4].set(3 * D, 0, D, I);
                            w[5].set(D, 0, D, I);
                            v.x *= 4;
                            v.y *= 2
                        }
                        null === d.map && (d.map = new Cb(v.x, v.y, {
                            minFilter: 1003,
                            magFilter: 1003,
                            format: 1023
                        }), d.map.texture.name = n.name + ".shadowMap", x.updateProjectionMatrix());
                        d.isSpotLightShadow &&
                        d.update(n);
                        D = d.map;
                        I = d.matrix;
                        l.setFromMatrixPosition(n.matrixWorld);
                        x.position.copy(l);
                        y ? (d = 6, I.makeTranslation(-l.x, -l.y, -l.z)) : (d = 1, r.setFromMatrixPosition(n.target.matrixWorld), x.lookAt(r), x.updateMatrixWorld(), I.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), I.multiply(x.projectionMatrix), I.multiply(x.matrixWorldInverse));
                        a.setRenderTarget(D);
                        a.clear();
                        for (n = 0; n < d; n++)
                            y && (r.copy(x.position), r.add(u[n]), x.up.copy(H[n]), x.lookAt(r), x.updateMatrixWorld(), h.viewport(w[n])), m.multiplyMatrices(x.projectionMatrix,
                            x.matrixWorldInverse), k.setFromMatrix(m), f(b, c, x, y)
                    }
                }
                e = a.getClearColor();
                t = a.getClearAlpha();
                a.setClearColor(e, t);
                F.needsUpdate = !1
            }
        }
    }
    function Kf(a) {
        var b = {};
        return {
            get: function(a) {
                a.isInterleavedBufferAttribute && (a = a.data);
                return b[a.uuid]
            },
            remove: function(c) {
                c.isInterleavedBufferAttribute && (c = c.data);
                var d = b[c.uuid];
                d && (a.deleteBuffer(d.buffer), delete b[c.uuid])
            },
            update: function(c, d) {
                c.isInterleavedBufferAttribute && (c = c.data);
                var e = b[c.uuid];
                if (void 0 === e) {
                    var e = c.uuid,
                        f = c,
                        g = f.array,
                        h = f.dynamic ?
                        a.DYNAMIC_DRAW : a.STATIC_DRAW,
                        k = a.createBuffer();
                    a.bindBuffer(d, k);
                    a.bufferData(d, g, h);
                    f.onUploadCallback();
                    h = a.FLOAT;
                    g instanceof Float32Array ? h = a.FLOAT : g instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : g instanceof Uint16Array ? h = a.UNSIGNED_SHORT : g instanceof Int16Array ? h = a.SHORT : g instanceof Uint32Array ? h = a.UNSIGNED_INT : g instanceof Int32Array ? h = a.INT : g instanceof Int8Array ? h = a.BYTE : g instanceof Uint8Array && (h = a.UNSIGNED_BYTE);
                    b[e] = {
                        buffer: k,
                        type: h,
                        bytesPerElement: g.BYTES_PER_ELEMENT,
                        version: f.version
                    }
                } else
                    e.version < c.version && (f = c, g = f.array, k = f.updateRange, a.bindBuffer(d, e.buffer), !1 === f.dynamic ? a.bufferData(d, g, a.STATIC_DRAW) : -1 === k.count ? a.bufferSubData(d, 0, g) : 0 === k.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (a.bufferSubData(d, k.offset * g.BYTES_PER_ELEMENT, g.subarray(k.offset, k.offset +
                    k.count)), k.count = -1), e.version = c.version)
            }
        }
    }
    function ab(a, b, c, d) {
        this._x = a || 0;
        this._y = b || 0;
        this._z = c || 0;
        this._order = d || ab.DefaultOrder
    }
    function Qd() {
        this.mask = 1
    }
    function z() {
        Object.defineProperty(this, "id", {
            value: Lf++
        });
        this.uuid = Y.generateUUID();
        this.name = "";
        this.type = "Object3D";
        this.parent = null;
        this.children = [];
        this.up = z.DefaultUp.clone();
        var a = new n,
            b = new ab,
            c = new oa,
            d = new n(1, 1, 1);
        b.onChange(function() {
            c.setFromEuler(b, !1)
        });
        c.onChange(function() {
            b.setFromQuaternion(c, void 0, !1)
        });
        Object.defineProperties(this,
        {
            position: {
                enumerable: !0,
                value: a
            },
            rotation: {
                enumerable: !0,
                value: b
            },
            quaternion: {
                enumerable: !0,
                value: c
            },
            scale: {
                enumerable: !0,
                value: d
            },
            modelViewMatrix: {
                value: new K
            },
            normalMatrix: {
                value: new Ba
            }
        });
        this.matrix = new K;
        this.matrixWorld = new K;
        this.matrixAutoUpdate = z.DefaultMatrixAutoUpdate;
        this.matrixWorldNeedsUpdate = !1;
        this.layers = new Qd;
        this.visible = !0;
        this.receiveShadow = this.castShadow = !1;
        this.frustumCulled = !0;
        this.renderOrder = 0;
        this.userData = {}
    }
    function Na() {
        z.call(this);
        this.type = "Camera";
        this.matrixWorldInverse =
        new K;
        this.projectionMatrix = new K
    }
    function Fb(a, b, c, d, e, f) {
        Na.call(this);
        this.type = "OrthographicCamera";
        this.zoom = 1;
        this.view = null;
        this.left = a;
        this.right = b;
        this.top = c;
        this.bottom = d;
        this.near = void 0 !== e ? e : .1;
        this.far = void 0 !== f ? f : 2E3;
        this.updateProjectionMatrix()
    }
    function qa(a, b, c, d) {
        Na.call(this);
        this.type = "PerspectiveCamera";
        this.fov = void 0 !== a ? a : 50;
        this.zoom = 1;
        this.near = void 0 !== c ? c : .1;
        this.far = void 0 !== d ? d : 2E3;
        this.focus = 10;
        this.aspect = void 0 !== b ? b : 1;
        this.view = null;
        this.filmGauge = 35;
        this.filmOffset =
        0;
        this.updateProjectionMatrix()
    }
    function Sa(a, b, c, d, e, f) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.normal = d && d.isVector3 ? d : new n;
        this.vertexNormals = Array.isArray(d) ? d : [];
        this.color = e && e.isColor ? e : new G;
        this.vertexColors = Array.isArray(e) ? e : [];
        this.materialIndex = void 0 !== f ? f : 0
    }
    function J() {
        Object.defineProperty(this, "id", {
            value: Rd++
        });
        this.uuid = Y.generateUUID();
        this.name = "";
        this.type = "Geometry";
        this.vertices = [];
        this.colors = [];
        this.faces = [];
        this.faceVertexUvs = [[]];
        this.morphTargets = [];
        this.morphNormals = [];
        this.skinWeights =
        [];
        this.skinIndices = [];
        this.lineDistances = [];
        this.boundingSphere = this.boundingBox = null;
        this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.verticesNeedUpdate = this.elementsNeedUpdate = !1
    }
    function Z(a, b, c) {
        if (Array.isArray(a))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.uuid = Y.generateUUID();
        this.name = "";
        this.array = a;
        this.itemSize = b;
        this.count = void 0 !== a ? a.length / b : 0;
        this.normalized = !0 === c;
        this.dynamic =
        !1;
        this.updateRange = {
            offset: 0,
            count: -1
        };
        this.onUploadCallback = function() {};
        this.version = 0
    }
    function pc(a, b) {
        Z.call(this, new Int8Array(a), b)
    }
    function qc(a, b) {
        Z.call(this, new Uint8Array(a), b)
    }
    function rc(a, b) {
        Z.call(this, new Uint8ClampedArray(a), b)
    }
    function sc(a, b) {
        Z.call(this, new Int16Array(a), b)
    }
    function gb(a, b) {
        Z.call(this, new Uint16Array(a), b)
    }
    function tc(a, b) {
        Z.call(this, new Int32Array(a), b)
    }
    function hb(a, b) {
        Z.call(this, new Uint32Array(a), b)
    }
    function B(a, b) {
        Z.call(this, new Float32Array(a), b)
    }
    function uc(a,
    b) {
        Z.call(this, new Float64Array(a), b)
    }
    function Je() {
        this.indices = [];
        this.vertices = [];
        this.normals = [];
        this.colors = [];
        this.uvs = [];
        this.uvs2 = [];
        this.groups = [];
        this.morphTargets = {};
        this.skinWeights = [];
        this.skinIndices = [];
        this.boundingSphere = this.boundingBox = null;
        this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1
    }
    function Sd(a) {
        if (0 === a.length)
            return -Infinity;
        for (var b = a[0], c = 1, d = a.length; c < d; ++c)
            a[c] > b && (b = a[c]);
        return b
    }
    function E() {
        Object.defineProperty(this,
        "id", {
            value: Rd++
        });
        this.uuid = Y.generateUUID();
        this.name = "";
        this.type = "BufferGeometry";
        this.index = null;
        this.attributes = {};
        this.morphAttributes = {};
        this.groups = [];
        this.boundingSphere = this.boundingBox = null;
        this.drawRange = {
            start: 0,
            count: Infinity
        }
    }
    function Gb(a, b, c, d, e, f) {
        J.call(this);
        this.type = "BoxGeometry";
        this.parameters = {
            width: a,
            height: b,
            depth: c,
            widthSegments: d,
            heightSegments: e,
            depthSegments: f
        };
        this.fromBufferGeometry(new ib(a, b, c, d, e, f));
        this.mergeVertices()
    }
    function ib(a, b, c, d, e, f) {
        function g(a, b,
        c, d, e, f, g, l, W, D, O) {
            var aa = f / W,
                F = g / D,
                ja = f / 2,
                T = g / 2,
                C = l / 2;
            g = W + 1;
            var B = D + 1,
                z = f = 0,
                P,
                M,
                V = new n;
            for (M = 0; M < B; M++) {
                var pa = M * F - T;
                for (P = 0; P < g; P++)
                    V[a] = (P * aa - ja) * d, V[b] = pa * e, V[c] = C, m.push(V.x, V.y, V.z), V[a] = 0, V[b] = 0, V[c] = 0 < l ? 1 : -1, q.push(V.x, V.y, V.z), v.push(P / W), v.push(1 - M / D), f += 1
            }
            for (M = 0; M < D; M++)
                for (P = 0; P < W; P++)
                    a = p + P + g * (M + 1), b = p + (P + 1) + g * (M + 1), c = p + (P + 1) + g * M, k.push(p + P + g * M, a, c), k.push(a, b, c), z += 6;
            h.addGroup(r, z, O);
            r += z;
            p += f
        }
        E.call(this);
        this.type = "BoxBufferGeometry";
        this.parameters = {
            width: a,
            height: b,
            depth: c,
            widthSegments: d,
            heightSegments: e,
            depthSegments: f
        };
        var h = this;
        d = Math.floor(d) || 1;
        e = Math.floor(e) || 1;
        f = Math.floor(f) || 1;
        var k = [],
            m = [],
            q = [],
            v = [],
            p = 0,
            r = 0;
        g("z", "y", "x", -1, -1, c, b, a, f, e, 0);
        g("z", "y", "x", 1, -1, c, b, -a, f, e, 1);
        g("x", "z", "y", 1, 1, a, c, b, d, f, 2);
        g("x", "z", "y", 1, -1, a, c, -b, d, f, 3);
        g("x", "y", "z", 1, -1, a, b, c, d, e, 4);
        g("x", "y", "z", -1, -1, a, b, -c, d, e, 5);
        this.setIndex(k);
        this.addAttribute("position", new B(m, 3));
        this.addAttribute("normal", new B(q, 3));
        this.addAttribute("uv", new B(v, 2))
    }
    function vc(a, b, c, d) {
        J.call(this);
        this.type =
        "PlaneGeometry";
        this.parameters = {
            width: a,
            height: b,
            widthSegments: c,
            heightSegments: d
        };
        this.fromBufferGeometry(new jb(a, b, c, d));
        this.mergeVertices()
    }
    function jb(a, b, c, d) {
        E.call(this);
        this.type = "PlaneBufferGeometry";
        this.parameters = {
            width: a,
            height: b,
            widthSegments: c,
            heightSegments: d
        };
        var e = a / 2,
            f = b / 2;
        c = Math.floor(c) || 1;
        d = Math.floor(d) || 1;
        var g = c + 1,
            h = d + 1,
            k = a / c,
            m = b / d,
            q = [],
            v = [],
            p = [],
            r = [];
        for (a = 0; a < h; a++) {
            var l = a * m - f;
            for (b = 0; b < g; b++)
                v.push(b * k - e, -l, 0), p.push(0, 0, 1), r.push(b / c), r.push(1 - a / d)
        }
        for (a = 0; a < d; a++)
            for (b =
            0; b < c; b++)
                e = b + g * (a + 1), f = b + 1 + g * (a + 1), h = b + 1 + g * a, q.push(b + g * a, e, h), q.push(e, f, h);
        this.setIndex(q);
        this.addAttribute("position", new B(v, 3));
        this.addAttribute("normal", new B(p, 3));
        this.addAttribute("uv", new B(r, 2))
    }
    function ya(a) {
        U.call(this);
        this.type = "MeshBasicMaterial";
        this.color = new G(16777215);
        this.lightMap = this.map = null;
        this.lightMapIntensity = 1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.envMap = this.alphaMap = this.specularMap = null;
        this.combine = 0;
        this.reflectivity = 1;
        this.refractionRatio = .98;
        this.wireframe =
        !1;
        this.wireframeLinewidth = 1;
        this.wireframeLinejoin = this.wireframeLinecap = "round";
        this.lights = this.morphTargets = this.skinning = !1;
        this.setValues(a)
    }
    function kb(a, b) {
        this.origin = void 0 !== a ? a : new n;
        this.direction = void 0 !== b ? b : new n
    }
    function Hb(a, b) {
        this.start = void 0 !== a ? a : new n;
        this.end = void 0 !== b ? b : new n
    }
    function Ta(a, b, c) {
        this.a = void 0 !== a ? a : new n;
        this.b = void 0 !== b ? b : new n;
        this.c = void 0 !== c ? c : new n
    }
    function la(a, b) {
        z.call(this);
        this.type = "Mesh";
        this.geometry = void 0 !== a ? a : new E;
        this.material = void 0 !==
        b ? b : new ya({
            color: 16777215 * Math.random()
        });
        this.drawMode = 0;
        this.updateMorphTargets()
    }
    function Mf(a, b, c, d) {
        function e(a, c) {
            b.buffers.color.setClear(a.r, a.g, a.b, c, d)
        }
        var f = new G(0),
            g = 0,
            h,
            k,
            m,
            q;
        return {
            getClearColor: function() {
                return f
            },
            setClearColor: function(a, b) {
                f.set(a);
                g = void 0 !== b ? b : 1;
                e(f, g)
            },
            getClearAlpha: function() {
                return g
            },
            setClearAlpha: function(a) {
                g = a;
                e(f, g)
            },
            render: function(b, d, r) {
                b = b.background;
                null === b ? e(f, g) : b && b.isColor && (e(b, 1), r = !0);
                (a.autoClear || r) && a.clear(a.autoClearColor, a.autoClearDepth,
                a.autoClearStencil);
                b && b.isCubeTexture ? (void 0 === m && (m = new qa, q = new la(new ib(5, 5, 5), new ra({
                    uniforms: $a.cube.uniforms,
                    vertexShader: $a.cube.vertexShader,
                    fragmentShader: $a.cube.fragmentShader,
                    side: 1,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                }))), m.projectionMatrix.copy(d.projectionMatrix), m.matrixWorld.extractRotation(d.matrixWorld), m.matrixWorldInverse.getInverse(m.matrixWorld), q.material.uniforms.tCube.value = b, q.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse, q.matrixWorld), c.update(q), a.renderBufferDirect(m,
                null, q.geometry, q.material, q, null)) : b && b.isTexture && (void 0 === h && (h = new Fb(-1, 1, 1, -1, 0, 1), k = new la(new jb(2, 2), new ya({
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                }))), k.material.map = b, c.update(k), a.renderBufferDirect(h, null, k.geometry, k.material, k, null))
            }
        }
    }
    function Nf(a, b) {
        return a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.program && b.program && a.program !== b.program ? a.program.id - b.program.id : a.material.id !== b.material.id ? a.material.id - b.material.id : a.z !== b.z ? a.z - b.z : a.id - b.id
    }
    function Of(a, b) {
        return a.renderOrder !==
        b.renderOrder ? a.renderOrder - b.renderOrder : a.z !== b.z ? b.z - a.z : a.id - b.id
    }
    function Pf() {
        var a = [],
            b = -1,
            c = [],
            d = -1;
        return {
            opaque: a,
            transparent: c,
            init: function() {
                d = b = -1
            },
            push: function(e, f, g, h, k) {
                var m,
                    q;
                g.transparent ? (m = c, q = ++d) : (m = a, q = ++b);
                (q = m[q]) ? (q.id = e.id, q.object = e, q.geometry = f, q.material = g, q.program = g.program, q.renderOrder = e.renderOrder, q.z = h, q.group = k) : (q = {
                    id: e.id,
                    object: e,
                    geometry: f,
                    material: g,
                    program: g.program,
                    renderOrder: e.renderOrder,
                    z: h,
                    group: k
                }, m.push(q))
            },
            finish: function() {
                a.length = b + 1;
                c.length =
                d + 1
            },
            sort: function() {
                a.sort(Nf);
                c.sort(Of)
            }
        }
    }
    function Qf() {
        var a = {};
        return {
            get: function(b, c) {
                var d = b.id + "," + c.id,
                    e = a[d];
                void 0 === e && (e = new Pf, a[d] = e);
                return e
            },
            dispose: function() {
                a = {}
            }
        }
    }
    function Rf(a, b, c) {
        var d,
            e,
            f;
        this.setMode = function(a) {
            d = a
        };
        this.setIndex = function(a) {
            e = a.type;
            f = a.bytesPerElement
        };
        this.render = function(b, h) {
            a.drawElements(d, h, e, b * f);
            c.calls++;
            c.vertices += h;
            d === a.TRIANGLES && (c.faces += h / 3)
        };
        this.renderInstances = function(g, h, k) {
            var m = b.get("ANGLE_instanced_arrays");
            null === m ? console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") :
            (m.drawElementsInstancedANGLE(d, k, e, h * f, g.maxInstancedCount), c.calls++, c.vertices += k * g.maxInstancedCount, d === a.TRIANGLES && (c.faces += g.maxInstancedCount * k / 3))
        }
    }
    function Sf(a, b, c) {
        var d;
        this.setMode = function(a) {
            d = a
        };
        this.render = function(b, f) {
            a.drawArrays(d, b, f);
            c.calls++;
            c.vertices += f;
            d === a.TRIANGLES && (c.faces += f / 3)
        };
        this.renderInstances = function(e, f, g) {
            var h = b.get("ANGLE_instanced_arrays");
            if (null === h)
                console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            else {
                var k = e.attributes.position;
                k.isInterleavedBufferAttribute ? (g = k.data.count, h.drawArraysInstancedANGLE(d, 0, g, e.maxInstancedCount)) : h.drawArraysInstancedANGLE(d, f, g, e.maxInstancedCount);
                c.calls++;
                c.vertices += g * e.maxInstancedCount;
                d === a.TRIANGLES && (c.faces += e.maxInstancedCount * g / 3)
            }
        }
    }
    function Tf(a, b, c) {
        function d(a) {
            a = a.target;
            var h = e[a.id];
            null !== h.index && b.remove(h.index);
            for (var k in h.attributes)
                b.remove(h.attributes[k]);
            a.removeEventListener("dispose", d);
            delete e[a.id];
            if (k = f[a.id])
                b.remove(k),
                delete f[a.id];
            if (k = f[h.id])
                b.remove(k), delete f[h.id];
            c.geometries--
        }
        var e = {},
            f = {};
        return {
            get: function(a, b) {
                var f = e[b.id];
                if (f)
                    return f;
                b.addEventListener("dispose", d);
                b.isBufferGeometry ? f = b : b.isGeometry && (void 0 === b._bufferGeometry && (b._bufferGeometry = (new E).setFromObject(a)), f = b._bufferGeometry);
                e[b.id] = f;
                c.geometries++;
                return f
            },
            update: function(c) {
                var d = c.index,
                    e = c.attributes;
                null !== d && b.update(d, a.ELEMENT_ARRAY_BUFFER);
                for (var f in e)
                    b.update(e[f], a.ARRAY_BUFFER);
                c = c.morphAttributes;
                for (f in c)
                    for (var d =
                        c[f], e = 0, q = d.length; e < q; e++)
                        b.update(d[e], a.ARRAY_BUFFER)
            },
            getWireframeAttribute: function(c) {
                var d = f[c.id];
                if (d)
                    return d;
                var d = [],
                    e = c.index,
                    m = c.attributes;
                if (null !== e)
                    for (var e = e.array, m = 0, q = e.length; m < q; m += 3) {
                        var v = e[m + 0],
                            p = e[m + 1],
                            r = e[m + 2];
                        d.push(v, p, p, r, r, v)
                    }
                else
                    for (e = m.position.array, m = 0, q = e.length / 3 - 1; m < q; m += 3)
                        v = m + 0, p = m + 1, r = m + 2, d.push(v, p, p, r, r, v);
                d = new (65535 < Sd(d) ? hb : gb)(d, 1);
                b.update(d, a.ELEMENT_ARRAY_BUFFER);
                return f[c.id] = d
            }
        }
    }
    function Uf() {
        var a = {};
        return {
            get: function(b) {
                if (void 0 !== a[b.id])
                    return a[b.id];
                var c;
                switch (b.type) {
                case "DirectionalLight":
                    c = {
                        direction: new n,
                        color: new G,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new C
                    };
                    break;
                case "SpotLight":
                    c = {
                        position: new n,
                        direction: new n,
                        color: new G,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new C
                    };
                    break;
                case "PointLight":
                    c = {
                        position: new n,
                        color: new G,
                        distance: 0,
                        decay: 0,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new C
                    };
                    break;
                case "HemisphereLight":
                    c = {
                        direction: new n,
                        skyColor: new G,
                        groundColor: new G
                    };
                    break;
                case "RectAreaLight":
                    c = {
                        color: new G,
                        position: new n,
                        halfWidth: new n,
                        halfHeight: new n
                    }
                }
                return a[b.id] = c
            }
        }
    }
    function Vf(a, b, c) {
        var d = {};
        return {
            update: function(a) {
                var f = c.frame,
                    g = a.geometry,
                    h = b.get(a, g);
                d[h.id] !== f && (g.isGeometry && h.updateFromObject(a), b.update(h), d[h.id] = f);
                return h
            },
            clear: function() {
                d = {}
            }
        }
    }
    function Wf(a) {
        a = a.split("\n");
        for (var b = 0; b < a.length; b++)
            a[b] = b + 1 + ": " + a[b];
        return a.join("\n")
    }
    function Ke(a, b, c) {
        var d = a.createShader(b);
        a.shaderSource(d, c);
        a.compileShader(d);
        !1 === a.getShaderParameter(d, a.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile.");
        "" !== a.getShaderInfoLog(d) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", b === a.VERTEX_SHADER ? "vertex" : "fragment", a.getShaderInfoLog(d), Wf(c));
        return d
    }
    function Le(a) {
        switch (a) {
        case 3E3:
            return ["Linear", "( value )"];
        case 3001:
            return ["sRGB", "( value )"];
        case 3002:
            return ["RGBE", "( value )"];
        case 3004:
            return ["RGBM", "( value, 7.0 )"];
        case 3005:
            return ["RGBM", "( value, 16.0 )"];
        case 3006:
            return ["RGBD",
            "( value, 256.0 )"];
        case 3007:
            return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        default:
            throw Error("unsupported encoding: " + a);
        }
    }
    function Td(a, b) {
        var c = Le(b);
        return "vec4 " + a + "( vec4 value ) { return " + c[0] + "ToLinear" + c[1] + "; }"
    }
    function Xf(a, b) {
        var c = Le(b);
        return "vec4 " + a + "( vec4 value ) { return LinearTo" + c[0] + c[1] + "; }"
    }
    function Yf(a, b) {
        var c;
        switch (b) {
        case 1:
            c = "Linear";
            break;
        case 2:
            c = "Reinhard";
            break;
        case 3:
            c = "Uncharted2";
            break;
        case 4:
            c = "OptimizedCineon";
            break;
        default:
            throw Error("unsupported toneMapping: " +
            b);
        }
        return "vec3 " + a + "( vec3 color ) { return " + c + "ToneMapping( color ); }"
    }
    function Zf(a, b, c) {
        a = a || {};
        return [a.derivatives || b.envMapCubeUV || b.bumpMap || b.normalMap || b.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (a.fragDepth || b.logarithmicDepthBuffer) && c.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", a.drawBuffers && c.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (a.shaderTextureLOD || b.envMap) && c.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" :
        ""].filter(wc).join("\n")
    }
    function $f(a) {
        var b = [],
            c;
        for (c in a) {
            var d = a[c];
            !1 !== d && b.push("#define " + c + " " + d)
        }
        return b.join("\n")
    }
    function wc(a) {
        return "" !== a
    }
    function Me(a, b) {
        return a.replace(/NUM_DIR_LIGHTS/g, b.numDirLights).replace(/NUM_SPOT_LIGHTS/g, b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, b.numPointLights).replace(/NUM_HEMI_LIGHTS/g, b.numHemiLights)
    }
    function Ud(a) {
        return a.replace(/^[ \t]*#include +<([\w\d.]+)>/gm, function(a, c) {
            var d = X[c];
            if (void 0 === d)
                throw Error("Can not resolve #include <" + c + ">");
            return Ud(d)
        })
    }
    function Ne(a) {
        return a.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function(a, c, d, e) {
            a = "";
            for (c = parseInt(c); c < parseInt(d); c++)
                a += e.replace(/\[ i \]/g, "[ " + c + " ]");
            return a
        })
    }
    function ag(a, b, c, d, e) {
        var f = a.context,
            g = c.extensions,
            h = c.defines,
            k = d.vertexShader,
            m = d.fragmentShader,
            q = "SHADOWMAP_TYPE_BASIC";
        1 === e.shadowMapType ? q = "SHADOWMAP_TYPE_PCF" : 2 === e.shadowMapType && (q = "SHADOWMAP_TYPE_PCF_SOFT");
        var v = "ENVMAP_TYPE_CUBE",
            p = "ENVMAP_MODE_REFLECTION",
            r = "ENVMAP_BLENDING_MULTIPLY";
        if (e.envMap) {
            switch (c.envMap.mapping) {
            case 301:
            case 302:
                v = "ENVMAP_TYPE_CUBE";
                break;
            case 306:
            case 307:
                v = "ENVMAP_TYPE_CUBE_UV";
                break;
            case 303:
            case 304:
                v = "ENVMAP_TYPE_EQUIREC";
                break;
            case 305:
                v = "ENVMAP_TYPE_SPHERE"
            }
            switch (c.envMap.mapping) {
            case 302:
            case 304:
                p = "ENVMAP_MODE_REFRACTION"
            }
            switch (c.combine) {
            case 0:
                r = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case 1:
                r = "ENVMAP_BLENDING_MIX";
                break;
            case 2:
                r = "ENVMAP_BLENDING_ADD"
            }
        }
        var l = 0 < a.gammaFactor ?
            a.gammaFactor : 1,
            g = Zf(g, e, a.extensions),
            t = $f(h),
            n = f.createProgram();
        c.isRawShaderMaterial ? (h = [t, "\n"].filter(wc).join("\n"), d = [g, t, "\n"].filter(wc).join("\n")) : (h = ["precision " + e.precision + " float;", "precision " + e.precision + " int;", "#define SHADER_NAME " + d.name, t, e.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + l, "#define MAX_BONES " + e.maxBones, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" :
        "", e.envMap ? "#define " + p : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.displacementMap && e.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.vertexColors ? "#define USE_COLOR" : "", e.flatShading ?
        "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.useVertexTexture ? "#define BONE_TEXTURE" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && !1 === e.flatShading ? "#define USE_MORPHNORMALS" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + e.numClippingPlanes, e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + q : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.logarithmicDepthBuffer ?
        "#define USE_LOGDEPTHBUF" : "", e.logarithmicDepthBuffer && a.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;",
        "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(wc).join("\n"),
        d = [g, "precision " + e.precision + " float;", "precision " + e.precision + " int;", "#define SHADER_NAME " + d.name, t, e.alphaTest ? "#define ALPHATEST " + e.alphaTest : "", "#define GAMMA_FACTOR " + l, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + v : "", e.envMap ? "#define " + p : "", e.envMap ? "#define " + r : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.vertexColors ? "#define USE_COLOR" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + e.numClippingPlanes, "#define UNION_CLIPPING_PLANES " +
        (e.numClippingPlanes - e.numClipIntersection), e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + q : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.logarithmicDepthBuffer && a.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", e.envMap && a.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;", 0 !== e.toneMapping ? "#define TONE_MAPPING" : "", 0 !== e.toneMapping ? X.tonemapping_pars_fragment : "", 0 !== e.toneMapping ? Yf("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.outputEncoding || e.mapEncoding || e.envMapEncoding || e.emissiveMapEncoding ? X.encodings_pars_fragment : "", e.mapEncoding ? Td("mapTexelToLinear", e.mapEncoding) : "", e.envMapEncoding ? Td("envMapTexelToLinear", e.envMapEncoding) : "", e.emissiveMapEncoding ? Td("emissiveMapTexelToLinear", e.emissiveMapEncoding) :
        "", e.outputEncoding ? Xf("linearToOutputTexel", e.outputEncoding) : "", e.depthPacking ? "#define DEPTH_PACKING " + c.depthPacking : "", "\n"].filter(wc).join("\n"));
        k = Ud(k);
        k = Me(k, e);
        m = Ud(m);
        m = Me(m, e);
        c.isShaderMaterial || (k = Ne(k), m = Ne(m));
        m = d + m;
        k = Ke(f, f.VERTEX_SHADER, h + k);
        m = Ke(f, f.FRAGMENT_SHADER, m);
        f.attachShader(n, k);
        f.attachShader(n, m);
        void 0 !== c.index0AttributeName ? f.bindAttribLocation(n, 0, c.index0AttributeName) : !0 === e.morphTargets && f.bindAttribLocation(n, 0, "position");
        f.linkProgram(n);
        e = f.getProgramInfoLog(n);
        q = f.getShaderInfoLog(k);
        v = f.getShaderInfoLog(m);
        r = p = !0;
        if (!1 === f.getProgramParameter(n, f.LINK_STATUS))
            p = !1, console.error("THREE.WebGLProgram: shader error: ", f.getError(), "gl.VALIDATE_STATUS", f.getProgramParameter(n, f.VALIDATE_STATUS), "gl.getProgramInfoLog", e, q, v);
        else if ("" !== e)
            console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", e);
        else if ("" === q || "" === v)
            r = !1;
        r && (this.diagnostics = {
            runnable: p,
            material: c,
            programLog: e,
            vertexShader: {
                log: q,
                prefix: h
            },
            fragmentShader: {
                log: v,
                prefix: d
            }
        });
        f.deleteShader(k);
        f.deleteShader(m);
        var x;
        this.getUniforms = function() {
            void 0 === x && (x = new eb(f, n, a));
            return x
        };
        var u;
        this.getAttributes = function() {
            if (void 0 === u) {
                for (var a = {}, b = f.getProgramParameter(n, f.ACTIVE_ATTRIBUTES), c = 0; c < b; c++) {
                    var d = f.getActiveAttrib(n, c).name;
                    a[d] = f.getAttribLocation(n, d)
                }
                u = a
            }
            return u
        };
        this.destroy = function() {
            f.deleteProgram(n);
            this.program = void 0
        };
        Object.defineProperties(this, {
            uniforms: {
                get: function() {
                    console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");
                    return this.getUniforms()
                }
            },
            attributes: {
                get: function() {
                    console.warn("THREE.WebGLProgram: .attributes is now .getAttributes().");
                    return this.getAttributes()
                }
            }
        });
        this.id = bg++;
        this.code = b;
        this.usedTimes = 1;
        this.program = n;
        this.vertexShader = k;
        this.fragmentShader = m;
        return this
    }
    function cg(a, b) {
        function c(a, b) {
            var c;
            a ? a.isTexture ? c = a.encoding : a.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), c = a.texture.encoding) : c = 3E3;
            3E3 ===
            c && b && (c = 3007);
            return c
        }
        var d = [],
            e = {
                MeshDepthMaterial: "depth",
                MeshNormalMaterial: "normal",
                MeshBasicMaterial: "basic",
                MeshLambertMaterial: "lambert",
                MeshPhongMaterial: "phong",
                MeshToonMaterial: "phong",
                MeshStandardMaterial: "physical",
                MeshPhysicalMaterial: "physical",
                LineBasicMaterial: "basic",
                LineDashedMaterial: "dashed",
                PointsMaterial: "points"
            },
            f = "precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering".split(" ");
        this.getParameters = function(d, f, k, m, q, v) {
            var p = e[d.type],
                r;
            if (v.isSkinnedMesh)
                if (r = v.skeleton.bones, b.floatVertexTextures)
                    r = 1024;
                else {
                    var l = Math.min(Math.floor((b.maxVertexUniforms - 20) / 4), r.length);
                    l < r.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + r.length + " bones. This GPU supports " + l + "."), r = 0) : r = l
                }
            else
                r = 0;
            l = a.getPrecision();
            null !== d.precision && (l = b.getMaxPrecision(d.precision), l !== d.precision && console.warn("THREE.WebGLProgram.getParameters:", d.precision, "not supported, using", l, "instead."));
            var t = a.getRenderTarget();
            return {
                shaderID: p,
                precision: l,
                supportsVertexTextures: b.vertexTextures,
                outputEncoding: c(t ? t.texture : null, a.gammaOutput),
                map: !!d.map,
                mapEncoding: c(d.map, a.gammaInput),
                envMap: !!d.envMap,
                envMapMode: d.envMap && d.envMap.mapping,
                envMapEncoding: c(d.envMap, a.gammaInput),
                envMapCubeUV: !!d.envMap && (306 === d.envMap.mapping || 307 === d.envMap.mapping),
                lightMap: !!d.lightMap,
                aoMap: !!d.aoMap,
                emissiveMap: !!d.emissiveMap,
                emissiveMapEncoding: c(d.emissiveMap, a.gammaInput),
                bumpMap: !!d.bumpMap,
                normalMap: !!d.normalMap,
                displacementMap: !!d.displacementMap,
                roughnessMap: !!d.roughnessMap,
                metalnessMap: !!d.metalnessMap,
                specularMap: !!d.specularMap,
                alphaMap: !!d.alphaMap,
                gradientMap: !!d.gradientMap,
                combine: d.combine,
                vertexColors: d.vertexColors,
                fog: !!k,
                useFog: d.fog,
                fogExp: k && k.isFogExp2,
                flatShading: 1 === d.shading,
                sizeAttenuation: d.sizeAttenuation,
                logarithmicDepthBuffer: b.logarithmicDepthBuffer,
                skinning: d.skinning && 0 < r,
                maxBones: r,
                useVertexTexture: b.floatVertexTextures,
                morphTargets: d.morphTargets,
                morphNormals: d.morphNormals,
                maxMorphTargets: a.maxMorphTargets,
                maxMorphNormals: a.maxMorphNormals,
                numDirLights: f.directional.length,
                numPointLights: f.point.length,
                numSpotLights: f.spot.length,
                numRectAreaLights: f.rectArea.length,
                numHemiLights: f.hemi.length,
                numClippingPlanes: m,
                numClipIntersection: q,
                dithering: d.dithering,
                shadowMapEnabled: a.shadowMap.enabled && v.receiveShadow && 0 < f.shadows.length,
                shadowMapType: a.shadowMap.type,
                toneMapping: a.toneMapping,
                physicallyCorrectLights: a.physicallyCorrectLights,
                premultipliedAlpha: d.premultipliedAlpha,
                alphaTest: d.alphaTest,
                doubleSided: 2 === d.side,
                flipSided: 1 === d.side,
                depthPacking: void 0 !== d.depthPacking ? d.depthPacking : !1
            }
        };
        this.getProgramCode = function(b, c) {
            var d = [];
            c.shaderID ? d.push(c.shaderID) : (d.push(b.fragmentShader), d.push(b.vertexShader));
            if (void 0 !== b.defines)
                for (var e in b.defines)
                    d.push(e), d.push(b.defines[e]);
            for (e = 0; e < f.length; e++)
                d.push(c[f[e]]);
            d.push(b.onBeforeCompile.toString());
            d.push(a.gammaOutput);
            return d.join()
        };
        this.acquireProgram = function(b, c, e, f) {
            for (var q, v = 0, p = d.length; v <
            p; v++) {
                var r = d[v];
                if (r.code === f) {
                    q = r;
                    ++q.usedTimes;
                    break
                }
            }
            void 0 === q && (q = new ag(a, f, b, c, e), d.push(q));
            return q
        };
        this.releaseProgram = function(a) {
            if (0 === --a.usedTimes) {
                var b = d.indexOf(a);
                d[b] = d[d.length - 1];
                d.pop();
                a.destroy()
            }
        };
        this.programs = d
    }
    function dg(a, b, c, d, e, f, g) {
        function h(a, b) {
            if (a.width > b || a.height > b) {
                var c = b / Math.max(a.width, a.height),
                    d = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                d.width = Math.floor(a.width * c);
                d.height = Math.floor(a.height * c);
                d.getContext("2d").drawImage(a,
                0, 0, a.width, a.height, 0, 0, d.width, d.height);
                console.warn("THREE.WebGLRenderer: image is too big (" + a.width + "x" + a.height + "). Resized to " + d.width + "x" + d.height, a);
                return d
            }
            return a
        }
        function k(a) {
            return Y.isPowerOfTwo(a.width) && Y.isPowerOfTwo(a.height)
        }
        function m(a, b) {
            return a.generateMipmaps && b && 1003 !== a.minFilter && 1006 !== a.minFilter
        }
        function q(b) {
            return 1003 === b || 1004 === b || 1005 === b ? a.NEAREST : a.LINEAR
        }
        function v(b) {
            b = b.target;
            b.removeEventListener("dispose", v);
            a:
            {
                var c = d.get(b);
                if (b.image && c.__image__webglTextureCube)
                    a.deleteTexture(c.__image__webglTextureCube);
                else {
                    if (void 0 === c.__webglInit)
                        break a;
                    a.deleteTexture(c.__webglTexture)
                }
                d.remove(b)
            }g.textures--
        }
        function p(b) {
            b = b.target;
            b.removeEventListener("dispose", p);
            var c = d.get(b),
                e = d.get(b.texture);
            if (b) {
                void 0 !== e.__webglTexture && a.deleteTexture(e.__webglTexture);
                b.depthTexture && b.depthTexture.dispose();
                if (b.isWebGLRenderTargetCube)
                    for (e = 0; 6 > e; e++)
                        a.deleteFramebuffer(c.__webglFramebuffer[e]), c.__webglDepthbuffer && a.deleteRenderbuffer(c.__webglDepthbuffer[e]);
                else
                    a.deleteFramebuffer(c.__webglFramebuffer),
                    c.__webglDepthbuffer && a.deleteRenderbuffer(c.__webglDepthbuffer);
                d.remove(b.texture);
                d.remove(b)
            }
            g.textures--
        }
        function r(b, p) {
            var q = d.get(b);
            if (0 < b.version && q.__version !== b.version) {
                var r = b.image;
                if (void 0 === r)
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", b);
                else if (!1 === r.complete)
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", b);
                else {
                    void 0 === q.__webglInit && (q.__webglInit = !0, b.addEventListener("dispose", v), q.__webglTexture =
                    a.createTexture(), g.textures++);
                    c.activeTexture(a.TEXTURE0 + p);
                    c.bindTexture(a.TEXTURE_2D, q.__webglTexture);
                    a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, b.flipY);
                    a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.premultiplyAlpha);
                    a.pixelStorei(a.UNPACK_ALIGNMENT, b.unpackAlignment);
                    var t = h(b.image, e.maxTextureSize);
                    if ((1001 !== b.wrapS || 1001 !== b.wrapT || 1003 !== b.minFilter && 1006 !== b.minFilter) && !1 === k(t))
                        if (r = t, r instanceof HTMLImageElement || r instanceof HTMLCanvasElement) {
                            var n = document.createElementNS("http://www.w3.org/1999/xhtml",
                            "canvas");
                            n.width = Y.nearestPowerOfTwo(r.width);
                            n.height = Y.nearestPowerOfTwo(r.height);
                            n.getContext("2d").drawImage(r, 0, 0, n.width, n.height);
                            console.warn("THREE.WebGLRenderer: image is not power of two (" + r.width + "x" + r.height + "). Resized to " + n.width + "x" + n.height, r);
                            t = n
                        } else
                            t = r;
                    var r = k(t),
                        n = f(b.format),
                        y = f(b.type);
                    l(a.TEXTURE_2D, b, r);
                    var aa = b.mipmaps;
                    if (b.isDepthTexture) {
                        aa = a.DEPTH_COMPONENT;
                        if (1015 === b.type) {
                            if (!x)
                                throw Error("Float Depth Texture only supported in WebGL2.0");
                            aa = a.DEPTH_COMPONENT32F
                        } else
                            x &&
                            (aa = a.DEPTH_COMPONENT16);
                        1026 === b.format && aa === a.DEPTH_COMPONENT && 1012 !== b.type && 1014 !== b.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), b.type = 1012, y = f(b.type));
                        1027 === b.format && (aa = a.DEPTH_STENCIL, 1020 !== b.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), b.type = 1020, y = f(b.type)));
                        c.texImage2D(a.TEXTURE_2D, 0, aa, t.width, t.height, 0, n, y, null)
                    } else if (b.isDataTexture)
                        if (0 < aa.length &&
                        r) {
                            for (var F = 0, ja = aa.length; F < ja; F++)
                                t = aa[F], c.texImage2D(a.TEXTURE_2D, F, n, t.width, t.height, 0, n, y, t.data);
                            b.generateMipmaps = !1
                        } else
                            c.texImage2D(a.TEXTURE_2D, 0, n, t.width, t.height, 0, n, y, t.data);
                    else if (b.isCompressedTexture)
                        for (F = 0, ja = aa.length; F < ja; F++)
                            t = aa[F], 1023 !== b.format && 1022 !== b.format ? -1 < c.getCompressedTextureFormats().indexOf(n) ? c.compressedTexImage2D(a.TEXTURE_2D, F, n, t.width, t.height, 0, t.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") :
                            c.texImage2D(a.TEXTURE_2D, F, n, t.width, t.height, 0, n, y, t.data);
                    else if (0 < aa.length && r) {
                        F = 0;
                        for (ja = aa.length; F < ja; F++)
                            t = aa[F], c.texImage2D(a.TEXTURE_2D, F, n, n, y, t);
                        b.generateMipmaps = !1
                    } else
                        c.texImage2D(a.TEXTURE_2D, 0, n, n, y, t);
                    m(b, r) && a.generateMipmap(a.TEXTURE_2D);
                    q.__version = b.version;
                    if (b.onUpdate)
                        b.onUpdate(b);
                    return
                }
            }
            c.activeTexture(a.TEXTURE0 + p);
            c.bindTexture(a.TEXTURE_2D, q.__webglTexture)
        }
        function l(c, g, h) {
            h ? (a.texParameteri(c, a.TEXTURE_WRAP_S, f(g.wrapS)), a.texParameteri(c, a.TEXTURE_WRAP_T, f(g.wrapT)),
            a.texParameteri(c, a.TEXTURE_MAG_FILTER, f(g.magFilter)), a.texParameteri(c, a.TEXTURE_MIN_FILTER, f(g.minFilter))) : (a.texParameteri(c, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(c, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), 1001 === g.wrapS && 1001 === g.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", g), a.texParameteri(c, a.TEXTURE_MAG_FILTER, q(g.magFilter)), a.texParameteri(c, a.TEXTURE_MIN_FILTER, q(g.minFilter)),
            1003 !== g.minFilter && 1006 !== g.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", g));
            !(h = b.get("EXT_texture_filter_anisotropic")) || 1015 === g.type && null === b.get("OES_texture_float_linear") || 1016 === g.type && null === b.get("OES_texture_half_float_linear") || !(1 < g.anisotropy || d.get(g).__currentAnisotropy) || (a.texParameterf(c, h.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(g.anisotropy, e.getMaxAnisotropy())), d.get(g).__currentAnisotropy =
            g.anisotropy)
        }
        function t(b, e, g, h) {
            var k = f(e.texture.format),
                m = f(e.texture.type);
            c.texImage2D(h, 0, k, e.width, e.height, 0, k, m, null);
            a.bindFramebuffer(a.FRAMEBUFFER, b);
            a.framebufferTexture2D(a.FRAMEBUFFER, g, h, d.get(e.texture).__webglTexture, 0);
            a.bindFramebuffer(a.FRAMEBUFFER, null)
        }
        function n(b, c) {
            a.bindRenderbuffer(a.RENDERBUFFER, b);
            c.depthBuffer && !c.stencilBuffer ? (a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_COMPONENT16, c.width, c.height), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.RENDERBUFFER,
            b)) : c.depthBuffer && c.stencilBuffer ? (a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_STENCIL, c.width, c.height), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.RENDERBUFFER, b)) : a.renderbufferStorage(a.RENDERBUFFER, a.RGBA4, c.width, c.height);
            a.bindRenderbuffer(a.RENDERBUFFER, null)
        }
        var x = "undefined" !== typeof WebGL2RenderingContext && a instanceof WebGL2RenderingContext;
        this.setTexture2D = r;
        this.setTextureCube = function(b, p) {
            var q = d.get(b);
            if (6 === b.image.length)
                if (0 < b.version && q.__version !==
                b.version) {
                    q.__image__webglTextureCube || (b.addEventListener("dispose", v), q.__image__webglTextureCube = a.createTexture(), g.textures++);
                    c.activeTexture(a.TEXTURE0 + p);
                    c.bindTexture(a.TEXTURE_CUBE_MAP, q.__image__webglTextureCube);
                    a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, b.flipY);
                    for (var r = b && b.isCompressedTexture, t = b.image[0] && b.image[0].isDataTexture, n = [], y = 0; 6 > y; y++)
                        n[y] = r || t ? t ? b.image[y].image : b.image[y] : h(b.image[y], e.maxCubemapSize);
                    var x = k(n[0]),
                        F = f(b.format),
                        ja = f(b.type);
                    l(a.TEXTURE_CUBE_MAP, b, x);
                    for (y =
                    0; 6 > y; y++)
                        if (r)
                            for (var T, C = n[y].mipmaps, z = 0, B = C.length; z < B; z++)
                                T = C[z], 1023 !== b.format && 1022 !== b.format ? -1 < c.getCompressedTextureFormats().indexOf(F) ? c.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + y, z, F, T.width, T.height, 0, T.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + y, z, F, T.width, T.height, 0, F, ja, T.data);
                        else
                            t ? c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + y, 0, F, n[y].width, n[y].height,
                            0, F, ja, n[y].data) : c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + y, 0, F, F, ja, n[y]);
                    m(b, x) && a.generateMipmap(a.TEXTURE_CUBE_MAP);
                    q.__version = b.version;
                    if (b.onUpdate)
                        b.onUpdate(b)
                } else
                    c.activeTexture(a.TEXTURE0 + p), c.bindTexture(a.TEXTURE_CUBE_MAP, q.__image__webglTextureCube)
        };
        this.setTextureCubeDynamic = function(b, e) {
            c.activeTexture(a.TEXTURE0 + e);
            c.bindTexture(a.TEXTURE_CUBE_MAP, d.get(b).__webglTexture)
        };
        this.setupRenderTarget = function(b) {
            var e = d.get(b),
                f = d.get(b.texture);
            b.addEventListener("dispose", p);
            f.__webglTexture = a.createTexture();
            g.textures++;
            var h = !0 === b.isWebGLRenderTargetCube,
                q = k(b);
            if (h) {
                e.__webglFramebuffer = [];
                for (var v = 0; 6 > v; v++)
                    e.__webglFramebuffer[v] = a.createFramebuffer()
            } else
                e.__webglFramebuffer = a.createFramebuffer();
            if (h) {
                c.bindTexture(a.TEXTURE_CUBE_MAP, f.__webglTexture);
                l(a.TEXTURE_CUBE_MAP, b.texture, q);
                for (v = 0; 6 > v; v++)
                    t(e.__webglFramebuffer[v], b, a.COLOR_ATTACHMENT0, a.TEXTURE_CUBE_MAP_POSITIVE_X + v);
                m(b.texture, q) && a.generateMipmap(a.TEXTURE_CUBE_MAP);
                c.bindTexture(a.TEXTURE_CUBE_MAP,
                null)
            } else
                c.bindTexture(a.TEXTURE_2D, f.__webglTexture), l(a.TEXTURE_2D, b.texture, q), t(e.__webglFramebuffer, b, a.COLOR_ATTACHMENT0, a.TEXTURE_2D), m(b.texture, q) && a.generateMipmap(a.TEXTURE_2D), c.bindTexture(a.TEXTURE_2D, null);
            if (b.depthBuffer) {
                e = d.get(b);
                f = !0 === b.isWebGLRenderTargetCube;
                if (b.depthTexture) {
                    if (f)
                        throw Error("target.depthTexture not supported in Cube render targets");
                    if (b && b.isWebGLRenderTargetCube)
                        throw Error("Depth Texture with cube render targets is not supported!");
                    a.bindFramebuffer(a.FRAMEBUFFER,
                    e.__webglFramebuffer);
                    if (!b.depthTexture || !b.depthTexture.isDepthTexture)
                        throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    d.get(b.depthTexture).__webglTexture && b.depthTexture.image.width === b.width && b.depthTexture.image.height === b.height || (b.depthTexture.image.width = b.width, b.depthTexture.image.height = b.height, b.depthTexture.needsUpdate = !0);
                    r(b.depthTexture, 0);
                    e = d.get(b.depthTexture).__webglTexture;
                    if (1026 === b.depthTexture.format)
                        a.framebufferTexture2D(a.FRAMEBUFFER,
                        a.DEPTH_ATTACHMENT, a.TEXTURE_2D, e, 0);
                    else if (1027 === b.depthTexture.format)
                        a.framebufferTexture2D(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.TEXTURE_2D, e, 0);
                    else
                        throw Error("Unknown depthTexture format");
                } else if (f)
                    for (e.__webglDepthbuffer = [], f = 0; 6 > f; f++)
                        a.bindFramebuffer(a.FRAMEBUFFER, e.__webglFramebuffer[f]), e.__webglDepthbuffer[f] = a.createRenderbuffer(), n(e.__webglDepthbuffer[f], b);
                else
                    a.bindFramebuffer(a.FRAMEBUFFER, e.__webglFramebuffer), e.__webglDepthbuffer = a.createRenderbuffer(), n(e.__webglDepthbuffer,
                    b);
                a.bindFramebuffer(a.FRAMEBUFFER, null)
            }
        };
        this.updateRenderTargetMipmap = function(b) {
            var e = b.texture,
                f = k(b);
            m(e, f) && (b = b.isWebGLRenderTargetCube ? a.TEXTURE_CUBE_MAP : a.TEXTURE_2D, e = d.get(e).__webglTexture, c.bindTexture(b, e), a.generateMipmap(b), c.bindTexture(b, null))
        }
    }
    function eg() {
        var a = {};
        return {
            get: function(b) {
                b = b.uuid;
                var c = a[b];
                void 0 === c && (c = {}, a[b] = c);
                return c
            },
            remove: function(b) {
                delete a[b.uuid]
            },
            clear: function() {
                a = {}
            }
        }
    }
    function fg(a, b, c) {
        function d(b, c, d) {
            var e = new Uint8Array(4),
                f = a.createTexture();
            a.bindTexture(b, f);
            a.texParameteri(b, a.TEXTURE_MIN_FILTER, a.NEAREST);
            a.texParameteri(b, a.TEXTURE_MAG_FILTER, a.NEAREST);
            for (b = 0; b < d; b++)
                a.texImage2D(c + b, 0, a.RGBA, 1, 1, 0, a.RGBA, a.UNSIGNED_BYTE, e);
            return f
        }
        function e(b) {
            !0 !== u[b] && (a.enable(b), u[b] = !0)
        }
        function f(b) {
            !1 !== u[b] && (a.disable(b), u[b] = !1)
        }
        function g(b, d, g, h, k, m, p, q) {
            0 !== b ? e(a.BLEND) : f(a.BLEND);
            5 === b || b === w && q === ja || (2 === b ? q ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.ONE, a.ONE, a.ONE, a.ONE)) : (a.blendEquation(a.FUNC_ADD),
            a.blendFunc(a.SRC_ALPHA, a.ONE)) : 3 === b ? q ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.ZERO, a.ZERO, a.ONE_MINUS_SRC_COLOR, a.ONE_MINUS_SRC_ALPHA)) : (a.blendEquation(a.FUNC_ADD), a.blendFunc(a.ZERO, a.ONE_MINUS_SRC_COLOR)) : 4 === b ? q ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.ZERO, a.SRC_COLOR, a.ZERO, a.SRC_ALPHA)) : (a.blendEquation(a.FUNC_ADD), a.blendFunc(a.ZERO, a.SRC_COLOR)) : q ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.ONE, a.ONE_MINUS_SRC_ALPHA,
            a.ONE, a.ONE_MINUS_SRC_ALPHA)) : (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA, a.ONE, a.ONE_MINUS_SRC_ALPHA)), w = b, ja = q);
            if (5 === b) {
                k = k || d;
                m = m || g;
                p = p || h;
                if (d !== I || k !== O)
                    a.blendEquationSeparate(c(d), c(k)), I = d, O = k;
                if (g !== W || h !== D || m !== aa || p !== F)
                    a.blendFuncSeparate(c(g), c(h), c(m), c(p)), W = g, D = h, aa = m, F = p
            } else
                F = aa = O = D = W = I = null
        }
        function h(b) {
            T !== b && (b ? a.frontFace(a.CW) : a.frontFace(a.CCW), T = b)
        }
        function k(b) {
            0 !== b ? (e(a.CULL_FACE), b !== C && (1 === b ? a.cullFace(a.BACK) :
            2 === b ? a.cullFace(a.FRONT) : a.cullFace(a.FRONT_AND_BACK))) : f(a.CULL_FACE);
            C = b
        }
        function m(b, c, d) {
            if (b) {
                if (e(a.POLYGON_OFFSET_FILL), B !== c || P !== d)
                    a.polygonOffset(c, d), B = c, P = d
            } else
                f(a.POLYGON_OFFSET_FILL)
        }
        function q(b) {
            void 0 === b && (b = a.TEXTURE0 + V - 1);
            S !== b && (a.activeTexture(b), S = b)
        }
        var v = new function() {
                var b = !1,
                    c = new fa,
                    d = null,
                    e = new fa;
                return {
                    setMask: function(c) {
                        d === c || b || (a.colorMask(c, c, c, c), d = c)
                    },
                    setLocked: function(a) {
                        b = a
                    },
                    setClear: function(b, d, f, g, h) {
                        !0 === h && (b *= g, d *= g, f *= g);
                        c.set(b, d, f, g);
                        !1 === e.equals(c) &&
                        (a.clearColor(b, d, f, g), e.copy(c))
                    },
                    reset: function() {
                        b = !1;
                        d = null;
                        e.set(0, 0, 0, 1)
                    }
                }
            },
            p = new function() {
                var b = !1,
                    c = null,
                    d = null,
                    g = null;
                return {
                    setTest: function(b) {
                        b ? e(a.DEPTH_TEST) : f(a.DEPTH_TEST)
                    },
                    setMask: function(d) {
                        c === d || b || (a.depthMask(d), c = d)
                    },
                    setFunc: function(b) {
                        if (d !== b) {
                            if (b)
                                switch (b) {
                                case 0:
                                    a.depthFunc(a.NEVER);
                                    break;
                                case 1:
                                    a.depthFunc(a.ALWAYS);
                                    break;
                                case 2:
                                    a.depthFunc(a.LESS);
                                    break;
                                case 3:
                                    a.depthFunc(a.LEQUAL);
                                    break;
                                case 4:
                                    a.depthFunc(a.EQUAL);
                                    break;
                                case 5:
                                    a.depthFunc(a.GEQUAL);
                                    break;
                                case 6:
                                    a.depthFunc(a.GREATER);
                                    break;
                                case 7:
                                    a.depthFunc(a.NOTEQUAL);
                                    break;
                                default:
                                    a.depthFunc(a.LEQUAL)
                                }
                            else
                                a.depthFunc(a.LEQUAL);
                            d = b
                        }
                    },
                    setLocked: function(a) {
                        b = a
                    },
                    setClear: function(b) {
                        g !== b && (a.clearDepth(b), g = b)
                    },
                    reset: function() {
                        b = !1;
                        g = d = c = null
                    }
                }
            },
            r = new function() {
                var b = !1,
                    c = null,
                    d = null,
                    g = null,
                    h = null,
                    k = null,
                    m = null,
                    p = null,
                    q = null;
                return {
                    setTest: function(b) {
                        b ? e(a.STENCIL_TEST) : f(a.STENCIL_TEST)
                    },
                    setMask: function(d) {
                        c === d || b || (a.stencilMask(d), c = d)
                    },
                    setFunc: function(b, c, e) {
                        if (d !== b || g !== c || h !== e)
                            a.stencilFunc(b, c, e), d = b, g = c, h = e
                    },
                    setOp: function(b, c, d) {
                        if (k !== b || m !== c || p !== d)
                            a.stencilOp(b, c, d), k = b, m = c, p = d
                    },
                    setLocked: function(a) {
                        b = a
                    },
                    setClear: function(b) {
                        q !== b && (a.clearStencil(b), q = b)
                    },
                    reset: function() {
                        b = !1;
                        q = p = m = k = h = g = d = c = null
                    }
                }
            },
            l = a.getParameter(a.MAX_VERTEX_ATTRIBS),
            t = new Uint8Array(l),
            n = new Uint8Array(l),
            x = new Uint8Array(l),
            u = {},
            H = null,
            w = null,
            I = null,
            W = null,
            D = null,
            O = null,
            aa = null,
            F = null,
            ja = !1,
            T = null,
            C = null,
            z = null,
            B = null,
            P = null,
            M = null,
            V = a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
            l = parseFloat(/^WebGL\ ([0-9])/.exec(a.getParameter(a.VERSION))[1]),
            pa = 1 <= parseFloat(l),
            S = null,
            N = {},
            E = new fa,
            G = new fa,
            K = {};
        K[a.TEXTURE_2D] = d(a.TEXTURE_2D, a.TEXTURE_2D, 1);
        K[a.TEXTURE_CUBE_MAP] = d(a.TEXTURE_CUBE_MAP, a.TEXTURE_CUBE_MAP_POSITIVE_X, 6);
        return {
            buffers: {
                color: v,
                depth: p,
                stencil: r
            },
            init: function() {
                v.setClear(0, 0, 0, 1);
                p.setClear(1);
                r.setClear(0);
                e(a.DEPTH_TEST);
                p.setFunc(3);
                h(!1);
                k(1);
                e(a.CULL_FACE);
                e(a.BLEND);
                g(1)
            },
            initAttributes: function() {
                for (var a = 0, b = t.length; a < b; a++)
                    t[a] = 0
            },
            enableAttribute: function(c) {
                t[c] = 1;
                0 === n[c] && (a.enableVertexAttribArray(c), n[c] =
                1);
                0 !== x[c] && (b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c, 0), x[c] = 0)
            },
            enableAttributeAndDivisor: function(c, d) {
                t[c] = 1;
                0 === n[c] && (a.enableVertexAttribArray(c), n[c] = 1);
                x[c] !== d && (b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c, d), x[c] = d)
            },
            disableUnusedAttributes: function() {
                for (var b = 0, c = n.length; b !== c; ++b)
                    n[b] !== t[b] && (a.disableVertexAttribArray(b), n[b] = 0)
            },
            enable: e,
            disable: f,
            getCompressedTextureFormats: function() {
                if (null === H && (H = [], b.get("WEBGL_compressed_texture_pvrtc") ||
                b.get("WEBGL_compressed_texture_s3tc") || b.get("WEBGL_compressed_texture_etc1")))
                    for (var c = a.getParameter(a.COMPRESSED_TEXTURE_FORMATS), d = 0; d < c.length; d++)
                        H.push(c[d]);
                return H
            },
            setBlending: g,
            setMaterial: function(b) {
                2 === b.side ? f(a.CULL_FACE) : e(a.CULL_FACE);
                h(1 === b.side);
                !0 === b.transparent ? g(b.blending, b.blendEquation, b.blendSrc, b.blendDst, b.blendEquationAlpha, b.blendSrcAlpha, b.blendDstAlpha, b.premultipliedAlpha) : g(0);
                p.setFunc(b.depthFunc);
                p.setTest(b.depthTest);
                p.setMask(b.depthWrite);
                v.setMask(b.colorWrite);
                m(b.polygonOffset, b.polygonOffsetFactor, b.polygonOffsetUnits)
            },
            setFlipSided: h,
            setCullFace: k,
            setLineWidth: function(b) {
                b !== z && (pa && a.lineWidth(b), z = b)
            },
            setPolygonOffset: m,
            getScissorTest: function() {
                return M
            },
            setScissorTest: function(b) {
                (M = b) ? e(a.SCISSOR_TEST) : f(a.SCISSOR_TEST)
            },
            activeTexture: q,
            bindTexture: function(b, c) {
                null === S && q();
                var d = N[S];
                void 0 === d && (d = {
                    type: void 0,
                    texture: void 0
                }, N[S] = d);
                if (d.type !== b || d.texture !== c)
                    a.bindTexture(b, c || K[b]), d.type = b, d.texture = c
            },
            compressedTexImage2D: function() {
                try {
                    a.compressedTexImage2D.apply(a,
                    arguments)
                } catch (b) {
                    console.error("THREE.WebGLState:", b)
                }
            },
            texImage2D: function() {
                try {
                    a.texImage2D.apply(a, arguments)
                } catch (b) {
                    console.error("THREE.WebGLState:", b)
                }
            },
            scissor: function(b) {
                !1 === E.equals(b) && (a.scissor(b.x, b.y, b.z, b.w), E.copy(b))
            },
            viewport: function(b) {
                !1 === G.equals(b) && (a.viewport(b.x, b.y, b.z, b.w), G.copy(b))
            },
            reset: function() {
                for (var b = 0; b < n.length; b++)
                    1 === n[b] && (a.disableVertexAttribArray(b), n[b] = 0);
                u = {};
                S = H = null;
                N = {};
                C = T = w = null;
                v.reset();
                p.reset();
                r.reset()
            }
        }
    }
    function gg(a, b, c) {
        function d(b) {
            if ("highp" ===
            b) {
                if (0 < a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision && 0 < a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision)
                    return "highp";
                b = "mediump"
            }
            return "mediump" === b && 0 < a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision && 0 < a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).precision ? "mediump" : "lowp"
        }
        var e,
            f = void 0 !== c.precision ? c.precision : "highp",
            g = d(f);
        g !== f && (console.warn("THREE.WebGLRenderer:", f, "not supported, using", g, "instead."), f = g);
        c =
        !0 === c.logarithmicDepthBuffer && !!b.get("EXT_frag_depth");
        var g = a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),
            h = a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
            k = a.getParameter(a.MAX_TEXTURE_SIZE),
            m = a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),
            q = a.getParameter(a.MAX_VERTEX_ATTRIBS),
            v = a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),
            p = a.getParameter(a.MAX_VARYING_VECTORS),
            r = a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),
            l = 0 < h,
            t = !!b.get("OES_texture_float");
        return {
            getMaxAnisotropy: function() {
                if (void 0 !== e)
                    return e;
                var c = b.get("EXT_texture_filter_anisotropic");
                return e = null !== c ? a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
            },
            getMaxPrecision: d,
            precision: f,
            logarithmicDepthBuffer: c,
            maxTextures: g,
            maxVertexTextures: h,
            maxTextureSize: k,
            maxCubemapSize: m,
            maxAttributes: q,
            maxVertexUniforms: v,
            maxVaryings: p,
            maxFragmentUniforms: r,
            vertexTextures: l,
            floatFragmentTextures: t,
            floatVertexTextures: l && t
        }
    }
    function kd(a) {
        qa.call(this);
        this.cameras = a || []
    }
    function hg(a) {
        var b = this,
            c = null,
            d = null;
        "VRFrameData" in window && (d = new window.VRFrameData);
        var e = new K,
            f = new K,
            g = new K,
            h = new qa;
        h.bounds = new fa(0, 0, .5, 1);
        h.layers.enable(1);
        var k = new qa;
        k.bounds = new fa(.5, 0, .5, 1);
        k.layers.enable(2);
        var m = new kd([h, k]);
        m.layers.enable(1);
        m.layers.enable(2);
        var q,
            v;
        window.addEventListener("vrdisplaypresentchange", function() {
            if (c.isPresenting) {
                var d = c.getEyeParameters("left"),
                    e = d.renderWidth,
                    d = d.renderHeight;
                v = a.getPixelRatio();
                q = a.getSize();
                a.setDrawingBufferSize(2 * e, d, 1)
            } else
                b.enabled && a.setDrawingBufferSize(q.width, q.height, v)
        }, !1);
        this.standing = this.enabled =
        !1;
        this.getDevice = function() {
            return c
        };
        this.setDevice = function(a) {
            void 0 !== a && (c = a)
        };
        this.getCamera = function(a) {
            if (null === c)
                return a;
            c.depthNear = a.near;
            c.depthFar = a.far;
            c.getFrameData(d);
            var b = d.pose;
            null !== b.position ? a.position.fromArray(b.position) : a.position.set(0, 0, 0);
            null !== b.orientation && a.quaternion.fromArray(b.orientation);
            a.updateMatrixWorld();
            b = c.stageParameters;
            this.standing && b && (f.fromArray(b.sittingToStandingTransform), g.getInverse(f), a.matrixWorld.multiply(f), a.matrixWorldInverse.multiply(g));
            if (!1 === c.isPresenting)
                return a;
            m.matrixWorld.copy(a.matrixWorld);
            m.matrixWorldInverse.copy(a.matrixWorldInverse);
            h.matrixWorldInverse.fromArray(d.leftViewMatrix);
            k.matrixWorldInverse.fromArray(d.rightViewMatrix);
            this.standing && b && (h.matrixWorldInverse.multiply(g), k.matrixWorldInverse.multiply(g));
            a = a.parent;
            null !== a && (e.getInverse(a.matrixWorld), h.matrixWorldInverse.multiply(e), k.matrixWorldInverse.multiply(e));
            h.matrixWorld.getInverse(h.matrixWorldInverse);
            k.matrixWorld.getInverse(k.matrixWorldInverse);
            h.projectionMatrix.fromArray(d.leftProjectionMatrix);
            k.projectionMatrix.fromArray(d.rightProjectionMatrix);
            m.projectionMatrix.copy(h.projectionMatrix);
            a = c.getLayers();
            a.length && (a = a[0], null !== a.leftBounds && 4 === a.leftBounds.length && h.bounds.fromArray(a.leftBounds), null !== a.rightBounds && 4 === a.rightBounds.length && k.bounds.fromArray(a.rightBounds));
            return m
        };
        this.getStandingMatrix = function() {
            return f
        };
        this.submitFrame = function() {
            c && c.isPresenting && c.submitFrame()
        }
    }
    function ig(a) {
        var b = {};
        return {
            get: function(c) {
                if (void 0 !==
                b[c])
                    return b[c];
                var d;
                switch (c) {
                case "WEBGL_depth_texture":
                    d = a.getExtension("WEBGL_depth_texture") || a.getExtension("MOZ_WEBGL_depth_texture") || a.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    d = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    d = a.getExtension("WEBGL_compressed_texture_s3tc") || a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
                    a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    d = a.getExtension("WEBGL_compressed_texture_pvrtc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                case "WEBGL_compressed_texture_etc1":
                    d = a.getExtension("WEBGL_compressed_texture_etc1");
                    break;
                default:
                    d = a.getExtension(c)
                }
                null === d && console.warn("THREE.WebGLRenderer: " + c + " extension not supported.");
                return b[c] = d
            }
        }
    }
    function jg() {
        function a() {
            m.value !== d && (m.value = d, m.needsUpdate = 0 < e);
            c.numPlanes =
            e;
            c.numIntersection = 0
        }
        function b(a, b, d, e) {
            var f = null !== a ? a.length : 0,
                g = null;
            if (0 !== f) {
                g = m.value;
                if (!0 !== e || null === g) {
                    e = d + 4 * f;
                    b = b.matrixWorldInverse;
                    k.getNormalMatrix(b);
                    if (null === g || g.length < e)
                        g = new Float32Array(e);
                    for (e = 0; e !== f; ++e, d += 4)
                        h.copy(a[e]).applyMatrix4(b, k), h.normal.toArray(g, d), g[d + 3] = h.constant
                }
                m.value = g;
                m.needsUpdate = !0
            }
            c.numPlanes = f;
            return g
        }
        var c = this,
            d = null,
            e = 0,
            f = !1,
            g = !1,
            h = new Aa,
            k = new Ba,
            m = {
                value: null,
                needsUpdate: !1
            };
        this.uniform = m;
        this.numIntersection = this.numPlanes = 0;
        this.init =
        function(a, c, g) {
            var h = 0 !== a.length || c || 0 !== e || f;
            f = c;
            d = b(a, g, 0);
            e = a.length;
            return h
        };
        this.beginShadows = function() {
            g = !0;
            b(null)
        };
        this.endShadows = function() {
            g = !1;
            a()
        };
        this.setState = function(c, h, k, r, l, t) {
            if (!f || null === c || 0 === c.length || g && !k)
                g ? b(null) : a();
            else {
                k = g ? 0 : e;
                var n = 4 * k,
                    x = l.clippingState || null;
                m.value = x;
                x = b(c, r, n, t);
                for (c = 0; c !== n; ++c)
                    x[c] = d[c];
                l.clippingState = x;
                this.numIntersection = h ? this.numPlanes : 0;
                this.numPlanes += k
            }
        }
    }
    function Xd(a) {
        function b() {
            ga.init();
            ga.scissor(J.copy(ea).multiplyScalar(Q));
            ga.viewport(U.copy(hd).multiplyScalar(Q))
        }
        function c() {
            S = G = null;
            pa = "";
            V = -1;
            ga.reset()
        }
        function d(a) {
            a.preventDefault();
            c();
            b();
            ha.clear();
            xa.clear()
        }
        function e(a) {
            a = a.target;
            a.removeEventListener("dispose", e);
            f(a);
            ha.remove(a)
        }
        function f(a) {
            var b = ha.get(a).program;
            a.program = void 0;
            void 0 !== b && va.releaseProgram(b)
        }
        function g(a, b, c) {
            a.render(function(a) {
                B.renderBufferImmediate(a, b, c)
            })
        }
        function h(a, b) {
            return Math.abs(b[0]) - Math.abs(a[0])
        }
        function k(a, b, c) {
            if (a.visible) {
                if (a.layers.test(b.layers))
                    if (a.isLight)
                        aa.push(a);
                    else if (a.isSprite)
                        a.frustumCulled && !Vd.intersectsSprite(a) || C.push(a);
                    else if (a.isLensFlare)
                        z.push(a);
                    else if (a.isImmediateRenderObject)
                        c && Oa.setFromMatrixPosition(a.matrixWorld).applyMatrix4(jd), F.push(a, null, a.material, Oa.z, null);
                    else if (a.isMesh || a.isLine || a.isPoints)
                        if (a.isSkinnedMesh && a.skeleton.update(), !a.frustumCulled || Vd.intersectsObject(a)) {
                            c && Oa.setFromMatrixPosition(a.matrixWorld).applyMatrix4(jd);
                            var d = xa.update(a),
                                e = a.material;
                            if (Array.isArray(e))
                                for (var f = d.groups, g = 0, h = f.length; g <
                                h; g++) {
                                    var m = f[g],
                                        q = e[m.materialIndex];
                                    q && q.visible && F.push(a, d, q, Oa.z, m)
                                }
                            else
                                e.visible && F.push(a, d, e, Oa.z, null)
                        }
                a = a.children;
                g = 0;
                for (h = a.length; g < h; g++)
                    k(a[g], b, c)
            }
        }
        function m(a, b, c, d) {
            for (var e = 0, f = a.length; e < f; e++) {
                var g = a[e],
                    h = g.object,
                    k = g.geometry,
                    m = void 0 === d ? g.material : d,
                    g = g.group;
                if (c.isArrayCamera) {
                    N = c;
                    for (var p = c.cameras, v = 0, r = p.length; v < r; v++) {
                        var l = p[v];
                        if (h.layers.test(l.layers)) {
                            var t = l.bounds,
                                n = t.x * ba,
                                ca = t.y * L,
                                u = t.z * ba,
                                t = t.w * L;
                            B.setViewport(n, ca, u, t);
                            B.setScissor(n, ca, u, t);
                            B.setScissorTest(!0);
                            q(h, b, l, k, m, g)
                        }
                    }
                } else
                    N = null, q(h, b, c, k, m, g)
            }
        }
        function q(a, b, c, d, e, f) {
            a.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse, a.matrixWorld);
            a.normalMatrix.getNormalMatrix(a.modelViewMatrix);
            a.onBeforeRender(B, b, c, d, e, f);
            if (a.isImmediateRenderObject) {
                ga.setMaterial(e);
                var h = p(c, b.fog, e, a);
                pa = "";
                g(a, h, e)
            } else
                B.renderBufferDirect(c, b.fog, d, e, a, f);
            a.onAfterRender(B, b, c, d, e, f)
        }
        function v(a, b, c) {
            var d = ha.get(a);
            c = va.getParameters(a, da, b, Ha.numPlanes, Ha.numIntersection, c);
            var g = va.getProgramCode(a, c),
                h =
                d.program,
                k = !0;
            if (void 0 === h)
                a.addEventListener("dispose", e);
            else if (h.code !== g)
                f(a);
            else {
                if (void 0 !== c.shaderID)
                    return;
                k = !1
            }
            k && (c.shaderID ? (h = $a[c.shaderID], d.shader = {
                name: a.type,
                uniforms: Ca.clone(h.uniforms),
                vertexShader: h.vertexShader,
                fragmentShader: h.fragmentShader
            }) : d.shader = {
                name: a.type,
                uniforms: a.uniforms,
                vertexShader: a.vertexShader,
                fragmentShader: a.fragmentShader
            }, a.onBeforeCompile(d.shader), h = va.acquireProgram(a, d.shader, c, g), d.program = h, a.program = h);
            c = h.getAttributes();
            if (a.morphTargets)
                for (g =
                a.numSupportedMorphTargets = 0; g < B.maxMorphTargets; g++)
                    0 <= c["morphTarget" + g] && a.numSupportedMorphTargets++;
            if (a.morphNormals)
                for (g = a.numSupportedMorphNormals = 0; g < B.maxMorphNormals; g++)
                    0 <= c["morphNormal" + g] && a.numSupportedMorphNormals++;
            c = d.shader.uniforms;
            if (!a.isShaderMaterial && !a.isRawShaderMaterial || !0 === a.clipping)
                d.numClippingPlanes = Ha.numPlanes, d.numIntersection = Ha.numIntersection, c.clippingPlanes = Ha.uniform;
            d.fog = b;
            d.lightsHash = da.hash;
            a.lights && (c.ambientLightColor.value = da.ambient, c.directionalLights.value =
            da.directional, c.spotLights.value = da.spot, c.rectAreaLights.value = da.rectArea, c.pointLights.value = da.point, c.hemisphereLights.value = da.hemi, c.directionalShadowMap.value = da.directionalShadowMap, c.directionalShadowMatrix.value = da.directionalShadowMatrix, c.spotShadowMap.value = da.spotShadowMap, c.spotShadowMatrix.value = da.spotShadowMatrix, c.pointShadowMap.value = da.pointShadowMap, c.pointShadowMatrix.value = da.pointShadowMatrix);
            a = d.program.getUniforms();
            a = eb.seqWithValue(a.seq, c);
            d.uniformsList = a
        }
        function p(a,
        b, c, d) {
            X = 0;
            var e = ha.get(c);
            id && (Wd || a !== S) && Ha.setState(c.clippingPlanes, c.clipIntersection, c.clipShadows, a, e, a === S && c.id === V);
            !1 === c.needsUpdate && (void 0 === e.program ? c.needsUpdate = !0 : c.fog && e.fog !== b ? c.needsUpdate = !0 : c.lights && e.lightsHash !== da.hash ? c.needsUpdate = !0 : void 0 === e.numClippingPlanes || e.numClippingPlanes === Ha.numPlanes && e.numIntersection === Ha.numIntersection || (c.needsUpdate = !0));
            c.needsUpdate && (v(c, b, d), c.needsUpdate = !1);
            var f = !1,
                g = !1,
                h = !1,
                k = e.program,
                m = k.getUniforms(),
                q = e.shader.uniforms;
            k.id !== G && (A.useProgram(k.program), G = k.id, h = g = f = !0);
            c.id !== V && (V = c.id, g = !0);
            if (f || a !== S) {
                m.setValue(A, "projectionMatrix", a.projectionMatrix);
                ia.logarithmicDepthBuffer && m.setValue(A, "logDepthBufFC", 2 / (Math.log(a.far + 1) / Math.LN2));
                S !== (N || a) && (S = N || a, h = g = !0);
                if (c.isShaderMaterial || c.isMeshPhongMaterial || c.isMeshStandardMaterial || c.envMap)
                    f = m.map.cameraPosition, void 0 !== f && f.setValue(A, Oa.setFromMatrixPosition(a.matrixWorld));
                (c.isMeshPhongMaterial || c.isMeshLambertMaterial || c.isMeshBasicMaterial || c.isMeshStandardMaterial ||
                c.isShaderMaterial || c.skinning) && m.setValue(A, "viewMatrix", a.matrixWorldInverse)
            }
            if (c.skinning && (m.setOptional(A, d, "bindMatrix"), m.setOptional(A, d, "bindMatrixInverse"), a = d.skeleton))
                if (f = a.bones, ia.floatVertexTextures) {
                    if (void 0 === a.boneTexture) {
                        var f = Math.sqrt(4 * f.length),
                            f = Y.nextPowerOfTwo(Math.ceil(f)),
                            f = Math.max(f, 4),
                            p = new Float32Array(f * f * 4);
                        p.set(a.boneMatrices);
                        var t = new db(p, f, f, 1023, 1015);
                        a.boneMatrices = p;
                        a.boneTexture = t;
                        a.boneTextureSize = f
                    }
                    m.setValue(A, "boneTexture", a.boneTexture);
                    m.setValue(A,
                    "boneTextureSize", a.boneTextureSize)
                } else
                    m.setOptional(A, a, "boneMatrices");
            if (g) {
                m.setValue(A, "toneMappingExposure", B.toneMappingExposure);
                m.setValue(A, "toneMappingWhitePoint", B.toneMappingWhitePoint);
                c.lights && (g = h, q.ambientLightColor.needsUpdate = g, q.directionalLights.needsUpdate = g, q.pointLights.needsUpdate = g, q.spotLights.needsUpdate = g, q.rectAreaLights.needsUpdate = g, q.hemisphereLights.needsUpdate = g);
                b && c.fog && (q.fogColor.value = b.color, b.isFog ? (q.fogNear.value = b.near, q.fogFar.value = b.far) : b.isFogExp2 &&
                (q.fogDensity.value = b.density));
                if (c.isMeshBasicMaterial || c.isMeshLambertMaterial || c.isMeshPhongMaterial || c.isMeshStandardMaterial || c.isMeshNormalMaterial || c.isMeshDepthMaterial) {
                    q.opacity.value = c.opacity;
                    q.diffuse.value = c.color;
                    c.emissive && q.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity);
                    q.map.value = c.map;
                    q.specularMap.value = c.specularMap;
                    q.alphaMap.value = c.alphaMap;
                    c.lightMap && (q.lightMap.value = c.lightMap, q.lightMapIntensity.value = c.lightMapIntensity);
                    c.aoMap && (q.aoMap.value =
                    c.aoMap, q.aoMapIntensity.value = c.aoMapIntensity);
                    var n;
                    c.map ? n = c.map : c.specularMap ? n = c.specularMap : c.displacementMap ? n = c.displacementMap : c.normalMap ? n = c.normalMap : c.bumpMap ? n = c.bumpMap : c.roughnessMap ? n = c.roughnessMap : c.metalnessMap ? n = c.metalnessMap : c.alphaMap ? n = c.alphaMap : c.emissiveMap && (n = c.emissiveMap);
                    void 0 !== n && (n.isWebGLRenderTarget && (n = n.texture), b = n.offset, n = n.repeat, q.offsetRepeat.value.set(b.x, b.y, n.x, n.y));
                    q.envMap.value = c.envMap;
                    q.flipEnvMap.value = c.envMap && c.envMap.isCubeTexture ? -1 : 1;
                    q.reflectivity.value = c.reflectivity;
                    q.refractionRatio.value = c.refractionRatio
                }
                c.isLineBasicMaterial ? (q.diffuse.value = c.color, q.opacity.value = c.opacity) : c.isLineDashedMaterial ? (q.diffuse.value = c.color, q.opacity.value = c.opacity, q.dashSize.value = c.dashSize, q.totalSize.value = c.dashSize + c.gapSize, q.scale.value = c.scale) : c.isPointsMaterial ? (q.diffuse.value = c.color, q.opacity.value = c.opacity, q.size.value = c.size * Q, q.scale.value = .5 * L, q.map.value = c.map, null !== c.map && (n = c.map.offset, c = c.map.repeat, q.offsetRepeat.value.set(n.x,
                n.y, c.x, c.y))) : c.isMeshLambertMaterial ? c.emissiveMap && (q.emissiveMap.value = c.emissiveMap) : c.isMeshToonMaterial ? (r(q, c), c.gradientMap && (q.gradientMap.value = c.gradientMap)) : c.isMeshPhongMaterial ? r(q, c) : c.isMeshPhysicalMaterial ? (q.clearCoat.value = c.clearCoat, q.clearCoatRoughness.value = c.clearCoatRoughness, l(q, c)) : c.isMeshStandardMaterial ? l(q, c) : c.isMeshDepthMaterial ? c.displacementMap && (q.displacementMap.value = c.displacementMap, q.displacementScale.value = c.displacementScale, q.displacementBias.value = c.displacementBias) :
                c.isMeshNormalMaterial && (c.bumpMap && (q.bumpMap.value = c.bumpMap, q.bumpScale.value = c.bumpScale), c.normalMap && (q.normalMap.value = c.normalMap, q.normalScale.value.copy(c.normalScale)), c.displacementMap && (q.displacementMap.value = c.displacementMap, q.displacementScale.value = c.displacementScale, q.displacementBias.value = c.displacementBias));
                void 0 !== q.ltcMat && (q.ltcMat.value = R.LTC_MAT_TEXTURE);
                void 0 !== q.ltcMag && (q.ltcMag.value = R.LTC_MAG_TEXTURE);
                eb.upload(A, e.uniformsList, q, B)
            }
            m.setValue(A, "modelViewMatrix",
            d.modelViewMatrix);
            m.setValue(A, "normalMatrix", d.normalMatrix);
            m.setValue(A, "modelMatrix", d.matrixWorld);
            return k
        }
        function r(a, b) {
            a.specular.value = b.specular;
            a.shininess.value = Math.max(b.shininess, 1E-4);
            b.emissiveMap && (a.emissiveMap.value = b.emissiveMap);
            b.bumpMap && (a.bumpMap.value = b.bumpMap, a.bumpScale.value = b.bumpScale);
            b.normalMap && (a.normalMap.value = b.normalMap, a.normalScale.value.copy(b.normalScale));
            b.displacementMap && (a.displacementMap.value = b.displacementMap, a.displacementScale.value = b.displacementScale,
            a.displacementBias.value = b.displacementBias)
        }
        function l(a, b) {
            a.roughness.value = b.roughness;
            a.metalness.value = b.metalness;
            b.roughnessMap && (a.roughnessMap.value = b.roughnessMap);
            b.metalnessMap && (a.metalnessMap.value = b.metalnessMap);
            b.emissiveMap && (a.emissiveMap.value = b.emissiveMap);
            b.bumpMap && (a.bumpMap.value = b.bumpMap, a.bumpScale.value = b.bumpScale);
            b.normalMap && (a.normalMap.value = b.normalMap, a.normalScale.value.copy(b.normalScale));
            b.displacementMap && (a.displacementMap.value = b.displacementMap, a.displacementScale.value =
            b.displacementScale, a.displacementBias.value = b.displacementBias);
            b.envMap && (a.envMapIntensity.value = b.envMapIntensity)
        }
        function t(a, b) {
            var c,
                d,
                e,
                f,
                g = 0,
                h = 0,
                k = 0,
                m,
                q,
                p,
                v = b.matrixWorldInverse,
                r = 0,
                l = 0,
                n = 0,
                t = 0,
                ca = 0;
            c = 0;
            for (d = a.length; c < d; c++)
                if (e = a[c], f = e.color, m = e.intensity, q = e.distance, p = e.shadow && e.shadow.map ? e.shadow.map.texture : null, e.isAmbientLight)
                    g += f.r * m, h += f.g * m, k += f.b * m;
                else if (e.isDirectionalLight) {
                    var u = wa.get(e);
                    u.color.copy(e.color).multiplyScalar(e.intensity);
                    u.direction.setFromMatrixPosition(e.matrixWorld);
                    Oa.setFromMatrixPosition(e.target.matrixWorld);
                    u.direction.sub(Oa);
                    u.direction.transformDirection(v);
                    if (u.shadow = e.castShadow)
                        f = e.shadow, u.shadowBias = f.bias, u.shadowRadius = f.radius, u.shadowMapSize = f.mapSize;
                    da.directionalShadowMap[r] = p;
                    da.directionalShadowMatrix[r] = e.shadow.matrix;
                    da.directional[r] = u;
                    r++
                } else if (e.isSpotLight) {
                    u = wa.get(e);
                    u.position.setFromMatrixPosition(e.matrixWorld);
                    u.position.applyMatrix4(v);
                    u.color.copy(f).multiplyScalar(m);
                    u.distance = q;
                    u.direction.setFromMatrixPosition(e.matrixWorld);
                    Oa.setFromMatrixPosition(e.target.matrixWorld);
                    u.direction.sub(Oa);
                    u.direction.transformDirection(v);
                    u.coneCos = Math.cos(e.angle);
                    u.penumbraCos = Math.cos(e.angle * (1 - e.penumbra));
                    u.decay = 0 === e.distance ? 0 : e.decay;
                    if (u.shadow = e.castShadow)
                        f = e.shadow, u.shadowBias = f.bias, u.shadowRadius = f.radius, u.shadowMapSize = f.mapSize;
                    da.spotShadowMap[n] = p;
                    da.spotShadowMatrix[n] = e.shadow.matrix;
                    da.spot[n] = u;
                    n++
                } else if (e.isRectAreaLight)
                    u = wa.get(e), u.color.copy(f).multiplyScalar(m / (e.width * e.height)), u.position.setFromMatrixPosition(e.matrixWorld),
                    u.position.applyMatrix4(v), oa.identity(), qa.copy(e.matrixWorld), qa.premultiply(v), oa.extractRotation(qa), u.halfWidth.set(.5 * e.width, 0, 0), u.halfHeight.set(0, .5 * e.height, 0), u.halfWidth.applyMatrix4(oa), u.halfHeight.applyMatrix4(oa), da.rectArea[t] = u, t++;
                else if (e.isPointLight) {
                    u = wa.get(e);
                    u.position.setFromMatrixPosition(e.matrixWorld);
                    u.position.applyMatrix4(v);
                    u.color.copy(e.color).multiplyScalar(e.intensity);
                    u.distance = e.distance;
                    u.decay = 0 === e.distance ? 0 : e.decay;
                    if (u.shadow = e.castShadow)
                        f = e.shadow,
                        u.shadowBias = f.bias, u.shadowRadius = f.radius, u.shadowMapSize = f.mapSize;
                    da.pointShadowMap[l] = p;
                    da.pointShadowMatrix[l] = e.shadow.matrix;
                    da.point[l] = u;
                    l++
                } else
                    e.isHemisphereLight && (u = wa.get(e), u.direction.setFromMatrixPosition(e.matrixWorld), u.direction.transformDirection(v), u.direction.normalize(), u.skyColor.copy(e.color).multiplyScalar(m), u.groundColor.copy(e.groundColor).multiplyScalar(m), da.hemi[ca] = u, ca++);
            da.ambient[0] = g;
            da.ambient[1] = h;
            da.ambient[2] = k;
            da.directional.length = r;
            da.spot.length = n;
            da.rectArea.length = t;
            da.point.length = l;
            da.hemi.length = ca;
            da.hash = r + "," + l + "," + n + "," + t + "," + ca + "," + da.shadows.length
        }
        function y(a) {
            var b;
            if (1E3 === a)
                return A.REPEAT;
            if (1001 === a)
                return A.CLAMP_TO_EDGE;
            if (1002 === a)
                return A.MIRRORED_REPEAT;
            if (1003 === a)
                return A.NEAREST;
            if (1004 === a)
                return A.NEAREST_MIPMAP_NEAREST;
            if (1005 === a)
                return A.NEAREST_MIPMAP_LINEAR;
            if (1006 === a)
                return A.LINEAR;
            if (1007 === a)
                return A.LINEAR_MIPMAP_NEAREST;
            if (1008 === a)
                return A.LINEAR_MIPMAP_LINEAR;
            if (1009 === a)
                return A.UNSIGNED_BYTE;
            if (1017 ===
            a)
                return A.UNSIGNED_SHORT_4_4_4_4;
            if (1018 === a)
                return A.UNSIGNED_SHORT_5_5_5_1;
            if (1019 === a)
                return A.UNSIGNED_SHORT_5_6_5;
            if (1010 === a)
                return A.BYTE;
            if (1011 === a)
                return A.SHORT;
            if (1012 === a)
                return A.UNSIGNED_SHORT;
            if (1013 === a)
                return A.INT;
            if (1014 === a)
                return A.UNSIGNED_INT;
            if (1015 === a)
                return A.FLOAT;
            if (1016 === a && (b = ma.get("OES_texture_half_float"), null !== b))
                return b.HALF_FLOAT_OES;
            if (1021 === a)
                return A.ALPHA;
            if (1022 === a)
                return A.RGB;
            if (1023 === a)
                return A.RGBA;
            if (1024 === a)
                return A.LUMINANCE;
            if (1025 === a)
                return A.LUMINANCE_ALPHA;
            if (1026 === a)
                return A.DEPTH_COMPONENT;
            if (1027 === a)
                return A.DEPTH_STENCIL;
            if (100 === a)
                return A.FUNC_ADD;
            if (101 === a)
                return A.FUNC_SUBTRACT;
            if (102 === a)
                return A.FUNC_REVERSE_SUBTRACT;
            if (200 === a)
                return A.ZERO;
            if (201 === a)
                return A.ONE;
            if (202 === a)
                return A.SRC_COLOR;
            if (203 === a)
                return A.ONE_MINUS_SRC_COLOR;
            if (204 === a)
                return A.SRC_ALPHA;
            if (205 === a)
                return A.ONE_MINUS_SRC_ALPHA;
            if (206 === a)
                return A.DST_ALPHA;
            if (207 === a)
                return A.ONE_MINUS_DST_ALPHA;
            if (208 === a)
                return A.DST_COLOR;
            if (209 === a)
                return A.ONE_MINUS_DST_COLOR;
            if (210 === a)
                return A.SRC_ALPHA_SATURATE;
            if (2001 === a || 2002 === a || 2003 === a || 2004 === a)
                if (b = ma.get("WEBGL_compressed_texture_s3tc"), null !== b) {
                    if (2001 === a)
                        return b.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (2002 === a)
                        return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (2003 === a)
                        return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (2004 === a)
                        return b.COMPRESSED_RGBA_S3TC_DXT5_EXT
                }
            if (2100 === a || 2101 === a || 2102 === a || 2103 === a)
                if (b = ma.get("WEBGL_compressed_texture_pvrtc"), null !== b) {
                    if (2100 === a)
                        return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (2101 === a)
                        return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (2102 === a)
                        return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (2103 === a)
                        return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                }
            if (2151 === a && (b = ma.get("WEBGL_compressed_texture_etc1"), null !== b))
                return b.COMPRESSED_RGB_ETC1_WEBGL;
            if (103 === a || 104 === a)
                if (b = ma.get("EXT_blend_minmax"), null !== b) {
                    if (103 === a)
                        return b.MIN_EXT;
                    if (104 === a)
                        return b.MAX_EXT
                }
            return 1020 === a && (b = ma.get("WEBGL_depth_texture"), null !== b) ? b.UNSIGNED_INT_24_8_WEBGL : 0
        }
        console.log("THREE.WebGLRenderer", "86");
        a = a || {};
        var x = void 0 !== a.canvas ? a.canvas : document.createElementNS("http://www.w3.org/1999/xhtml",
            "canvas"),
            u = void 0 !== a.context ? a.context : null,
            H = void 0 !== a.alpha ? a.alpha : !1,
            w = void 0 !== a.depth ? a.depth : !0,
            I = void 0 !== a.stencil ? a.stencil : !0,
            W = void 0 !== a.antialias ? a.antialias : !1,
            D = void 0 !== a.premultipliedAlpha ? a.premultipliedAlpha : !0,
            O = void 0 !== a.preserveDrawingBuffer ? a.preserveDrawingBuffer : !1,
            aa = [],
            F = null,
            ja = new Float32Array(8),
            C = [],
            z = [];
        this.domElement = x;
        this.context = null;
        this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0;
        this.clippingPlanes = [];
        this.localClippingEnabled =
        !1;
        this.gammaFactor = 2;
        this.physicallyCorrectLights = this.gammaOutput = this.gammaInput = !1;
        this.toneMappingWhitePoint = this.toneMappingExposure = this.toneMapping = 1;
        this.maxMorphTargets = 8;
        this.maxMorphNormals = 4;
        var B = this,
            G = null,
            P = null,
            M = null,
            V = -1,
            pa = "",
            S = null,
            N = null,
            J = new fa,
            Z = null,
            U = new fa,
            X = 0,
            ba = x.width,
            L = x.height,
            Q = 1,
            ea = new fa(0, 0, ba, L),
            na = !1,
            hd = new fa(0, 0, ba, L),
            Vd = new gd,
            Ha = new jg,
            id = !1,
            Wd = !1,
            jd = new K,
            Oa = new n,
            qa = new K,
            oa = new K,
            da = {
                hash: "",
                ambient: [0, 0, 0],
                directional: [],
                directionalShadowMap: [],
                directionalShadowMatrix: [],
                spot: [],
                spotShadowMap: [],
                spotShadowMatrix: [],
                rectArea: [],
                point: [],
                pointShadowMap: [],
                pointShadowMatrix: [],
                hemi: [],
                shadows: []
            },
            ta = {
                geometries: 0,
                textures: 0
            },
            la = {
                frame: 0,
                calls: 0,
                vertices: 0,
                faces: 0,
                points: 0
            };
        this.info = {
            render: la,
            memory: ta,
            programs: null
        };
        var A;
        try {
            H = {
                alpha: H,
                depth: w,
                stencil: I,
                antialias: W,
                premultipliedAlpha: D,
                preserveDrawingBuffer: O
            };
            A = u || x.getContext("webgl", H) || x.getContext("experimental-webgl", H);
            if (null === A) {
                if (null !== x.getContext("webgl"))
                    throw "Error creating WebGL context with your selected attributes.";
                throw "Error creating WebGL context.";
            }
            void 0 === A.getShaderPrecisionFormat && (A.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            });
            x.addEventListener("webglcontextlost", d, !1)
        } catch (kg) {
            console.error("THREE.WebGLRenderer: " + kg)
        }
        var ma = new ig(A);
        ma.get("WEBGL_depth_texture");
        ma.get("OES_texture_float");
        ma.get("OES_texture_float_linear");
        ma.get("OES_texture_half_float");
        ma.get("OES_texture_half_float_linear");
        ma.get("OES_standard_derivatives");
        ma.get("ANGLE_instanced_arrays");
        ma.get("OES_element_index_uint") && (E.MaxIndex = 4294967296);
        var ia = new gg(A, ma, a),
            ga = new fg(A, ma, y),
            ha = new eg,
            ra = new dg(A, ma, ga, ha, ia, y, ta),
            ua = new Kf(A),
            za = new Tf(A, ua, ta),
            xa = new Vf(A, za, la),
            va = new cg(this, ia),
            wa = new Uf,
            Aa = new Qf,
            ya = new Mf(this, ga, xa, D),
            sa = new hg(this);
        this.info.programs = va.programs;
        var Da = new Sf(A, ma, la),
            Ea = new Rf(A, ma, la);
        b();
        this.context = A;
        this.capabilities = ia;
        this.extensions = ma;
        this.properties = ha;
        this.renderLists = Aa;
        this.state = ga;
        this.vr = sa;
        var Ba = new Ie(this, da, xa, ia);
        this.shadowMap =
        Ba;
        var Fa = new If(this, C),
            Ga = new Hf(this, z);
        this.getContext = function() {
            return A
        };
        this.getContextAttributes = function() {
            return A.getContextAttributes()
        };
        this.forceContextLoss = function() {
            var a = ma.get("WEBGL_lose_context");
            a && a.loseContext()
        };
        this.getMaxAnisotropy = function() {
            return ia.getMaxAnisotropy()
        };
        this.getPrecision = function() {
            return ia.precision
        };
        this.getPixelRatio = function() {
            return Q
        };
        this.setPixelRatio = function(a) {
            void 0 !== a && (Q = a, this.setSize(ba, L, !1))
        };
        this.getSize = function() {
            return {
                width: ba,
                height: L
            }
        };
        this.setSize = function(a, b, c) {
            var d = sa.getDevice();
            d && d.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (ba = a, L = b, x.width = a * Q, x.height = b * Q, !1 !== c && (x.style.width = a + "px", x.style.height = b + "px"), this.setViewport(0, 0, a, b))
        };
        this.getDrawingBufferSize = function() {
            return {
                width: ba * Q,
                height: L * Q
            }
        };
        this.setDrawingBufferSize = function(a, b, c) {
            ba = a;
            L = b;
            Q = c;
            x.width = a * c;
            x.height = b * c;
            this.setViewport(0, 0, a, b)
        };
        this.setViewport = function(a, b, c, d) {
            hd.set(a, L -
            b - d, c, d);
            ga.viewport(U.copy(hd).multiplyScalar(Q))
        };
        this.setScissor = function(a, b, c, d) {
            ea.set(a, L - b - d, c, d);
            ga.scissor(J.copy(ea).multiplyScalar(Q))
        };
        this.setScissorTest = function(a) {
            ga.setScissorTest(na = a)
        };
        this.getClearColor = ya.getClearColor;
        this.setClearColor = ya.setClearColor;
        this.getClearAlpha = ya.getClearAlpha;
        this.setClearAlpha = ya.setClearAlpha;
        this.clear = function(a, b, c) {
            var d = 0;
            if (void 0 === a || a)
                d |= A.COLOR_BUFFER_BIT;
            if (void 0 === b || b)
                d |= A.DEPTH_BUFFER_BIT;
            if (void 0 === c || c)
                d |= A.STENCIL_BUFFER_BIT;
            A.clear(d)
        };
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        };
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        };
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        };
        this.clearTarget = function(a, b, c, d) {
            this.setRenderTarget(a);
            this.clear(b, c, d)
        };
        this.resetGLState = c;
        this.dispose = function() {
            x.removeEventListener("webglcontextlost", d, !1);
            Aa.dispose()
        };
        this.renderBufferImmediate = function(a, b, c) {
            ga.initAttributes();
            var d = ha.get(a);
            a.hasPositions && !d.position && (d.position = A.createBuffer());
            a.hasNormals && !d.normal &&
            (d.normal = A.createBuffer());
            a.hasUvs && !d.uv && (d.uv = A.createBuffer());
            a.hasColors && !d.color && (d.color = A.createBuffer());
            b = b.getAttributes();
            a.hasPositions && (A.bindBuffer(A.ARRAY_BUFFER, d.position), A.bufferData(A.ARRAY_BUFFER, a.positionArray, A.DYNAMIC_DRAW), ga.enableAttribute(b.position), A.vertexAttribPointer(b.position, 3, A.FLOAT, !1, 0, 0));
            if (a.hasNormals) {
                A.bindBuffer(A.ARRAY_BUFFER, d.normal);
                if (!c.isMeshPhongMaterial && !c.isMeshStandardMaterial && !c.isMeshNormalMaterial && 1 === c.shading)
                    for (var e = 0, f =
                        3 * a.count; e < f; e += 9) {
                        var g = a.normalArray,
                            h = (g[e + 0] + g[e + 3] + g[e + 6]) / 3,
                            k = (g[e + 1] + g[e + 4] + g[e + 7]) / 3,
                            m = (g[e + 2] + g[e + 5] + g[e + 8]) / 3;
                        g[e + 0] = h;
                        g[e + 1] = k;
                        g[e + 2] = m;
                        g[e + 3] = h;
                        g[e + 4] = k;
                        g[e + 5] = m;
                        g[e + 6] = h;
                        g[e + 7] = k;
                        g[e + 8] = m
                    }
                A.bufferData(A.ARRAY_BUFFER, a.normalArray, A.DYNAMIC_DRAW);
                ga.enableAttribute(b.normal);
                A.vertexAttribPointer(b.normal, 3, A.FLOAT, !1, 0, 0)
            }
            a.hasUvs && c.map && (A.bindBuffer(A.ARRAY_BUFFER, d.uv), A.bufferData(A.ARRAY_BUFFER, a.uvArray, A.DYNAMIC_DRAW), ga.enableAttribute(b.uv), A.vertexAttribPointer(ua.uv, 2, A.FLOAT,
            !1, 0, 0));
            a.hasColors && 0 !== c.vertexColors && (A.bindBuffer(A.ARRAY_BUFFER, d.color), A.bufferData(A.ARRAY_BUFFER, a.colorArray, A.DYNAMIC_DRAW), ga.enableAttribute(b.color), A.vertexAttribPointer(b.color, 3, A.FLOAT, !1, 0, 0));
            ga.disableUnusedAttributes();
            A.drawArrays(A.TRIANGLES, 0, a.count);
            a.count = 0
        };
        this.renderBufferDirect = function(a, b, c, d, e, f) {
            ga.setMaterial(d);
            var g = p(a, b, d, e);
            a = c.id + "_" + g.id + "_" + (!0 === d.wireframe);
            var k = !1;
            a !== pa && (pa = a, k = !0);
            b = e.morphTargetInfluences;
            if (void 0 !== b) {
                var m = [];
                a = 0;
                for (var q =
                b.length; a < q; a++)
                    k = b[a], m.push([k, a]);
                m.sort(h);
                8 < m.length && (m.length = 8);
                var v = c.morphAttributes;
                a = 0;
                for (q = m.length; a < q; a++)
                    k = m[a], ja[a] = k[0], 0 !== k[0] ? (b = k[1], !0 === d.morphTargets && v.position && c.addAttribute("morphTarget" + a, v.position[b]), !0 === d.morphNormals && v.normal && c.addAttribute("morphNormal" + a, v.normal[b])) : (!0 === d.morphTargets && c.removeAttribute("morphTarget" + a), !0 === d.morphNormals && c.removeAttribute("morphNormal" + a));
                a = m.length;
                for (b = ja.length; a < b; a++)
                    ja[a] = 0;
                g.getUniforms().setValue(A, "morphTargetInfluences",
                ja);
                k = !0
            }
            b = c.index;
            q = c.attributes.position;
            m = 1;
            !0 === d.wireframe && (b = za.getWireframeAttribute(c), m = 2);
            var r;
            a = Da;
            null !== b && (r = ua.get(b), a = Ea, a.setIndex(r));
            if (k) {
                k = void 0;
                if (c && c.isInstancedBufferGeometry && null === ma.get("ANGLE_instanced_arrays"))
                    console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                else {
                    void 0 === k && (k = 0);
                    ga.initAttributes();
                    var v = c.attributes,
                        g = g.getAttributes(),
                        l = d.defaultAttributeValues,
                        n;
                    for (n in g) {
                        var t = g[n];
                        if (0 <= t) {
                            var u = v[n];
                            if (void 0 !== u) {
                                var ca = u.normalized,
                                    w = u.itemSize,
                                    x = ua.get(u),
                                    y = x.buffer,
                                    H = x.type,
                                    x = x.bytesPerElement;
                                if (u.isInterleavedBufferAttribute) {
                                    var I = u.data,
                                        D = I.stride,
                                        u = u.offset;
                                    I && I.isInstancedInterleavedBuffer ? (ga.enableAttributeAndDivisor(t, I.meshPerAttribute), void 0 === c.maxInstancedCount && (c.maxInstancedCount = I.meshPerAttribute * I.count)) : ga.enableAttribute(t);
                                    A.bindBuffer(A.ARRAY_BUFFER, y);
                                    A.vertexAttribPointer(t, w, H, ca, D * x, (k * D + u) * x)
                                } else
                                    u.isInstancedBufferAttribute ?
                                    (ga.enableAttributeAndDivisor(t, u.meshPerAttribute), void 0 === c.maxInstancedCount && (c.maxInstancedCount = u.meshPerAttribute * u.count)) : ga.enableAttribute(t), A.bindBuffer(A.ARRAY_BUFFER, y), A.vertexAttribPointer(t, w, H, ca, 0, k * w * x)
                            } else if (void 0 !== l && (ca = l[n], void 0 !== ca))
                                switch (ca.length) {
                                case 2:
                                    A.vertexAttrib2fv(t, ca);
                                    break;
                                case 3:
                                    A.vertexAttrib3fv(t, ca);
                                    break;
                                case 4:
                                    A.vertexAttrib4fv(t, ca);
                                    break;
                                default:
                                    A.vertexAttrib1fv(t, ca)
                                }
                        }
                    }
                    ga.disableUnusedAttributes()
                }
                null !== b && A.bindBuffer(A.ELEMENT_ARRAY_BUFFER,
                r.buffer)
            }
            r = 0;
            null !== b ? r = b.count : void 0 !== q && (r = q.count);
            b = c.drawRange.start * m;
            q = null !== f ? f.start * m : 0;
            n = Math.max(b, q);
            f = Math.max(0, Math.min(r, b + c.drawRange.count * m, q + (null !== f ? f.count * m : Infinity)) - 1 - n + 1);
            if (0 !== f) {
                if (e.isMesh)
                    if (!0 === d.wireframe)
                        ga.setLineWidth(d.wireframeLinewidth * (null === P ? Q : 1)), a.setMode(A.LINES);
                    else
                        switch (e.drawMode) {
                        case 0:
                            a.setMode(A.TRIANGLES);
                            break;
                        case 1:
                            a.setMode(A.TRIANGLE_STRIP);
                            break;
                        case 2:
                            a.setMode(A.TRIANGLE_FAN)
                        }
                else
                    e.isLine ? (d = d.linewidth, void 0 === d && (d = 1), ga.setLineWidth(d *
                    (null === P ? Q : 1)), e.isLineSegments ? a.setMode(A.LINES) : e.isLineLoop ? a.setMode(A.LINE_LOOP) : a.setMode(A.LINE_STRIP)) : e.isPoints && a.setMode(A.POINTS);
                c && c.isInstancedBufferGeometry ? 0 < c.maxInstancedCount && a.renderInstances(c, n, f) : a.render(n, f)
            }
        };
        this.compile = function(a, b) {
            aa = [];
            a.traverse(function(a) {
                a.isLight && aa.push(a)
            });
            t(aa, b);
            a.traverse(function(b) {
                if (b.material)
                    if (Array.isArray(b.material))
                        for (var c = 0; c < b.material.length; c++)
                            v(b.material[c], a.fog, b);
                    else
                        v(b.material, a.fog, b)
            })
        };
        this.animate = function(a) {
            function b() {
                a();
                (sa.getDevice() || window).requestAnimationFrame(b)
            }
            (sa.getDevice() || window).requestAnimationFrame(b)
        };
        this.render = function(a, b, c, d) {
            if (b && b.isCamera) {
                pa = "";
                V = -1;
                S = null;
                !0 === a.autoUpdate && a.updateMatrixWorld();
                null === b.parent && b.updateMatrixWorld();
                sa.enabled && (b = sa.getCamera(b));
                jd.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse);
                Vd.setFromMatrix(jd);
                aa.length = 0;
                C.length = 0;
                z.length = 0;
                Wd = this.localClippingEnabled;
                id = Ha.init(this.clippingPlanes, Wd, b);
                F = Aa.get(a, b);
                F.init();
                k(a, b, B.sortObjects);
                F.finish();
                !0 === B.sortObjects && F.sort();
                id && Ha.beginShadows();
                for (var e = aa, f = 0, g = 0, h = e.length; g < h; g++) {
                    var q = e[g];
                    q.castShadow && (da.shadows[f] = q, f++)
                }
                da.shadows.length = f;
                Ba.render(a, b);
                t(aa, b);
                id && Ha.endShadows();
                la.frame++;
                la.calls = 0;
                la.vertices = 0;
                la.faces = 0;
                la.points = 0;
                void 0 === c && (c = null);
                this.setRenderTarget(c);
                ya.render(a, b, d);
                d = F.opaque;
                e = F.transparent;
                a.overrideMaterial ? (f = a.overrideMaterial, d.length && m(d, a, b, f), e.length && m(e, a, b, f)) : (d.length && m(d, a, b), e.length && m(e, a, b));
                Fa.render(a, b);
                Ga.render(a,
                b, U);
                c && ra.updateRenderTargetMipmap(c);
                ga.buffers.depth.setTest(!0);
                ga.buffers.depth.setMask(!0);
                ga.buffers.color.setMask(!0);
                b.isArrayCamera && B.setScissorTest(!1);
                sa.enabled && sa.submitFrame()
            } else
                console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
        };
        this.setFaceCulling = function(a, b) {
            ga.setCullFace(a);
            ga.setFlipSided(0 === b)
        };
        this.allocTextureUnit = function() {
            var a = X;
            a >= ia.maxTextures && console.warn("THREE.WebGLRenderer: Trying to use " + a + " texture units while this GPU supports only " +
            ia.maxTextures);
            X += 1;
            return a
        };
        this.setTexture2D = function() {
            var a = !1;
            return function(b, c) {
                b && b.isWebGLRenderTarget && (a || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), a = !0), b = b.texture);
                ra.setTexture2D(b, c)
            }
        }();
        this.setTexture = function() {
            var a = !1;
            return function(b, c) {
                a || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), a = !0);
                ra.setTexture2D(b, c)
            }
        }();
        this.setTextureCube = function() {
            var a =
            !1;
            return function(b, c) {
                b && b.isWebGLRenderTargetCube && (a || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), a = !0), b = b.texture);
                b && b.isCubeTexture || Array.isArray(b.image) && 6 === b.image.length ? ra.setTextureCube(b, c) : ra.setTextureCubeDynamic(b, c)
            }
        }();
        this.getRenderTarget = function() {
            return P
        };
        this.setRenderTarget = function(a) {
            (P = a) && void 0 === ha.get(a).__webglFramebuffer && ra.setupRenderTarget(a);
            var b = a && a.isWebGLRenderTargetCube,
                c;
            a ? (c = ha.get(a), c = b ? c.__webglFramebuffer[a.activeCubeFace] : c.__webglFramebuffer, J.copy(a.scissor), Z = a.scissorTest, U.copy(a.viewport)) : (c = null, J.copy(ea).multiplyScalar(Q), Z = na, U.copy(hd).multiplyScalar(Q));
            M !== c && (A.bindFramebuffer(A.FRAMEBUFFER, c), M = c);
            ga.scissor(J);
            ga.setScissorTest(Z);
            ga.viewport(U);
            b && (b = ha.get(a.texture), A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_CUBE_MAP_POSITIVE_X + a.activeCubeFace, b.__webglTexture, a.activeMipMapLevel))
        };
        this.readRenderTargetPixels =
        function(a, b, c, d, e, f) {
            if (a && a.isWebGLRenderTarget) {
                var g = ha.get(a).__webglFramebuffer;
                if (g) {
                    var h = !1;
                    g !== M && (A.bindFramebuffer(A.FRAMEBUFFER, g), h = !0);
                    try {
                        var k = a.texture,
                            m = k.format,
                            q = k.type;
                        1023 !== m && y(m) !== A.getParameter(A.IMPLEMENTATION_COLOR_READ_FORMAT) ? console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.") : 1009 === q || y(q) === A.getParameter(A.IMPLEMENTATION_COLOR_READ_TYPE) || 1015 === q && (ma.get("OES_texture_float") || ma.get("WEBGL_color_buffer_float")) ||
                        1016 === q && ma.get("EXT_color_buffer_half_float") ? A.checkFramebufferStatus(A.FRAMEBUFFER) === A.FRAMEBUFFER_COMPLETE ? 0 <= b && b <= a.width - d && 0 <= c && c <= a.height - e && A.readPixels(b, c, d, e, y(m), y(q), f) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") : console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")
                    } finally {
                        h && A.bindFramebuffer(A.FRAMEBUFFER, M)
                    }
                }
            } else
                console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
        }
    }
    function Ib(a, b) {
        this.name = "";
        this.color = new G(a);
        this.density = void 0 !== b ? b : 2.5E-4
    }
    function Jb(a, b, c) {
        this.name = "";
        this.color = new G(a);
        this.near = void 0 !== b ? b : 1;
        this.far = void 0 !== c ? c : 1E3
    }
    function ld() {
        z.call(this);
        this.type = "Scene";
        this.overrideMaterial = this.fog = this.background = null;
        this.autoUpdate = !0
    }
    function Yd(a, b, c, d, e) {
        z.call(this);
        this.lensFlares = [];
        this.positionScreen = new n;
        this.customUpdateCallback = void 0;
        void 0 !== a && this.add(a, b, c, d, e)
    }
    function bb(a) {
        U.call(this);
        this.type = "SpriteMaterial";
        this.color = new G(16777215);
        this.map = null;
        this.rotation = 0;
        this.lights = this.fog = !1;
        this.setValues(a)
    }
    function xc(a) {
        z.call(this);
        this.type = "Sprite";
        this.material = void 0 !== a ? a : new bb
    }
    function yc() {
        z.call(this);
        this.type = "LOD";
        Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            }
        })
    }
    function zc(a, b) {
        a = a || [];
        this.bones = a.slice(0);
        this.boneMatrices = new Float32Array(16 * this.bones.length);
        if (void 0 === b)
            this.calculateInverses();
        else if (this.bones.length === b.length)
            this.boneInverses = b.slice(0);
        else {
            console.warn("THREE.Skeleton boneInverses is the wrong length.");
            this.boneInverses = [];
            for (var c = 0, d = this.bones.length; c < d; c++)
                this.boneInverses.push(new K)
        }
    }
    function md() {
        z.call(this);
        this.type = "Bone"
    }
    function nd(a, b) {
        la.call(this, a, b);
        this.type = "SkinnedMesh";
        this.bindMode = "attached";
        this.bindMatrix = new K;
        this.bindMatrixInverse = new K;
        var c = this.initBones(),
            c = new zc(c);
        this.bind(c, this.matrixWorld);
        this.normalizeSkinWeights()
    }
    function ea(a) {
        U.call(this);
        this.type = "LineBasicMaterial";
        this.color = new G(16777215);
        this.linewidth = 1;
        this.linejoin = this.linecap = "round";
        this.lights = !1;
        this.setValues(a)
    }
    function sa(a, b, c) {
        if (1 === c)
            return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."), new Q(a, b);
        z.call(this);
        this.type = "Line";
        this.geometry = void 0 !== a ? a : new E;
        this.material = void 0 !== b ? b : new ea({
            color: 16777215 * Math.random()
        })
    }
    function Q(a, b) {
        sa.call(this, a, b);
        this.type = "LineSegments"
    }
    function od(a, b) {
        sa.call(this, a, b);
        this.type = "LineLoop"
    }
    function Fa(a) {
        U.call(this);
        this.type = "PointsMaterial";
        this.color =
        new G(16777215);
        this.map = null;
        this.size = 1;
        this.sizeAttenuation = !0;
        this.lights = !1;
        this.setValues(a)
    }
    function Kb(a, b) {
        z.call(this);
        this.type = "Points";
        this.geometry = void 0 !== a ? a : new E;
        this.material = void 0 !== b ? b : new Fa({
            color: 16777215 * Math.random()
        })
    }
    function Ac() {
        z.call(this);
        this.type = "Group"
    }
    function pd(a, b, c, d, e, f, g, h, k) {
        function m() {
            requestAnimationFrame(m);
            a.readyState >= a.HAVE_CURRENT_DATA && (q.needsUpdate = !0)
        }
        ba.call(this, a, b, c, d, e, f, g, h, k);
        this.generateMipmaps = !1;
        var q = this;
        m()
    }
    function Lb(a, b,
    c, d, e, f, g, h, k, m, q, v) {
        ba.call(this, null, f, g, h, k, m, d, e, q, v);
        this.image = {
            width: b,
            height: c
        };
        this.mipmaps = a;
        this.generateMipmaps = this.flipY = !1
    }
    function qd(a, b, c, d, e, f, g, h, k) {
        ba.call(this, a, b, c, d, e, f, g, h, k);
        this.needsUpdate = !0
    }
    function Bc(a, b, c, d, e, f, g, h, k, m) {
        m = void 0 !== m ? m : 1026;
        if (1026 !== m && 1027 !== m)
            throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === c && 1026 === m && (c = 1012);
        void 0 === c && 1027 === m && (c = 1020);
        ba.call(this, null, d, e, f, g, h, m, c, k);
        this.image = {
            width: a,
            height: b
        };
        this.magFilter = void 0 !== g ? g : 1003;
        this.minFilter = void 0 !== h ? h : 1003;
        this.generateMipmaps = this.flipY = !1
    }
    function Mb(a) {
        E.call(this);
        this.type = "WireframeGeometry";
        var b = [],
            c,
            d,
            e,
            f,
            g = [0, 0],
            h = {},
            k,
            m,
            q = ["a", "b", "c"];
        if (a && a.isGeometry) {
            var v = a.faces;
            c = 0;
            for (e = v.length; c < e; c++) {
                var p = v[c];
                for (d = 0; 3 > d; d++)
                    k = p[q[d]], m = p[q[(d + 1) % 3]], g[0] = Math.min(k, m), g[1] = Math.max(k, m), k = g[0] + "," + g[1], void 0 === h[k] && (h[k] = {
                        index1: g[0],
                        index2: g[1]
                    })
            }
            for (k in h)
                c = h[k], q = a.vertices[c.index1], b.push(q.x, q.y, q.z), q = a.vertices[c.index2],
                b.push(q.x, q.y, q.z)
        } else if (a && a.isBufferGeometry) {
            var r,
                q = new n;
            if (null !== a.index) {
                v = a.attributes.position;
                p = a.index;
                r = a.groups;
                0 === r.length && (r = [{
                    start: 0,
                    count: p.count,
                    materialIndex: 0
                }]);
                a = 0;
                for (f = r.length; a < f; ++a)
                    for (c = r[a], d = c.start, e = c.count, c = d, e = d + e; c < e; c += 3)
                        for (d = 0; 3 > d; d++)
                            k = p.getX(c + d), m = p.getX(c + (d + 1) % 3), g[0] = Math.min(k, m), g[1] = Math.max(k, m), k = g[0] + "," + g[1], void 0 === h[k] && (h[k] = {
                                index1: g[0],
                                index2: g[1]
                            });
                for (k in h)
                    c = h[k], q.fromBufferAttribute(v, c.index1), b.push(q.x, q.y, q.z), q.fromBufferAttribute(v,
                    c.index2), b.push(q.x, q.y, q.z)
            } else
                for (v = a.attributes.position, c = 0, e = v.count / 3; c < e; c++)
                    for (d = 0; 3 > d; d++)
                        h = 3 * c + d, q.fromBufferAttribute(v, h), b.push(q.x, q.y, q.z), h = 3 * c + (d + 1) % 3, q.fromBufferAttribute(v, h), b.push(q.x, q.y, q.z)
        }
        this.addAttribute("position", new B(b, 3))
    }
    function Cc(a, b, c) {
        J.call(this);
        this.type = "ParametricGeometry";
        this.parameters = {
            func: a,
            slices: b,
            stacks: c
        };
        this.fromBufferGeometry(new Nb(a, b, c));
        this.mergeVertices()
    }
    function Nb(a, b, c) {
        E.call(this);
        this.type = "ParametricBufferGeometry";
        this.parameters =
        {
            func: a,
            slices: b,
            stacks: c
        };
        var d = [],
            e = [],
            f = [],
            g = [],
            h = new n,
            k = new n,
            m = new n,
            q = new n,
            v = new n,
            p,
            r,
            l = b + 1;
        for (p = 0; p <= c; p++) {
            var t = p / c;
            for (r = 0; r <= b; r++) {
                var y = r / b,
                    k = a(y, t, k);
                e.push(k.x, k.y, k.z);
                0 <= y - 1E-5 ? (m = a(y - 1E-5, t, m), q.subVectors(k, m)) : (m = a(y + 1E-5, t, m), q.subVectors(m, k));
                0 <= t - 1E-5 ? (m = a(y, t - 1E-5, m), v.subVectors(k, m)) : (m = a(y, t + 1E-5, m), v.subVectors(m, k));
                h.crossVectors(q, v).normalize();
                f.push(h.x, h.y, h.z);
                g.push(y, t)
            }
        }
        for (p = 0; p < c; p++)
            for (r = 0; r < b; r++)
                a = p * l + r + 1, h = (p + 1) * l + r + 1, k = (p + 1) * l + r, d.push(p * l + r, a, k),
                d.push(a, h, k);
        this.setIndex(d);
        this.addAttribute("position", new B(e, 3));
        this.addAttribute("normal", new B(f, 3));
        this.addAttribute("uv", new B(g, 2))
    }
    function Dc(a, b, c, d) {
        J.call(this);
        this.type = "PolyhedronGeometry";
        this.parameters = {
            vertices: a,
            indices: b,
            radius: c,
            detail: d
        };
        this.fromBufferGeometry(new za(a, b, c, d));
        this.mergeVertices()
    }
    function za(a, b, c, d) {
        function e(a) {
            h.push(a.x, a.y, a.z)
        }
        function f(b, c) {
            var d = 3 * b;
            c.x = a[d + 0];
            c.y = a[d + 1];
            c.z = a[d + 2]
        }
        function g(a, b, c, d) {
            0 > d && 1 === a.x && (k[b] = a.x - 1);
            0 === c.x && 0 ===
            c.z && (k[b] = d / 2 / Math.PI + .5)
        }
        E.call(this);
        this.type = "PolyhedronBufferGeometry";
        this.parameters = {
            vertices: a,
            indices: b,
            radius: c,
            detail: d
        };
        c = c || 1;
        d = d || 0;
        var h = [],
            k = [];
        (function(a) {
            for (var c = new n, d = new n, g = new n, h = 0; h < b.length; h += 3) {
                f(b[h + 0], c);
                f(b[h + 1], d);
                f(b[h + 2], g);
                var k = c,
                    l = d,
                    y = g,
                    x = Math.pow(2, a),
                    u = [],
                    H,
                    w;
                for (H = 0; H <= x; H++) {
                    u[H] = [];
                    var I = k.clone().lerp(y, H / x),
                        W = l.clone().lerp(y, H / x),
                        D = x - H;
                    for (w = 0; w <= D; w++)
                        u[H][w] = 0 === w && H === x ? I : I.clone().lerp(W, w / D)
                }
                for (H = 0; H < x; H++)
                    for (w = 0; w < 2 * (x - H) - 1; w++)
                        k = Math.floor(w /
                        2), 0 === w % 2 ? (e(u[H][k + 1]), e(u[H + 1][k]), e(u[H][k])) : (e(u[H][k + 1]), e(u[H + 1][k + 1]), e(u[H + 1][k]))
            }
        })(d);
        (function(a) {
            for (var b = new n, c = 0; c < h.length; c += 3)
                b.x = h[c + 0], b.y = h[c + 1], b.z = h[c + 2], b.normalize().multiplyScalar(a), h[c + 0] = b.x, h[c + 1] = b.y, h[c + 2] = b.z
        })(c);
        (function() {
            for (var a = new n, b = 0; b < h.length; b += 3)
                a.x = h[b + 0], a.y = h[b + 1], a.z = h[b + 2], k.push(Math.atan2(a.z, -a.x) / 2 / Math.PI + .5, 1 - (Math.atan2(-a.y, Math.sqrt(a.x * a.x + a.z * a.z)) / Math.PI + .5));
            for (var a = new n, b = new n, c = new n, d = new n, e = new C, f = new C, l = new C, y = 0,
                x = 0; y < h.length; y += 9, x += 6) {
                a.set(h[y + 0], h[y + 1], h[y + 2]);
                b.set(h[y + 3], h[y + 4], h[y + 5]);
                c.set(h[y + 6], h[y + 7], h[y + 8]);
                e.set(k[x + 0], k[x + 1]);
                f.set(k[x + 2], k[x + 3]);
                l.set(k[x + 4], k[x + 5]);
                d.copy(a).add(b).add(c).divideScalar(3);
                var u = Math.atan2(d.z, -d.x);
                g(e, x + 0, a, u);
                g(f, x + 2, b, u);
                g(l, x + 4, c, u)
            }
            for (a = 0; a < k.length; a += 6)
                b = k[a + 0], c = k[a + 2], d = k[a + 4], e = Math.min(b, c, d), .9 < Math.max(b, c, d) && .1 > e && (.2 > b && (k[a + 0] += 1), .2 > c && (k[a + 2] += 1), .2 > d && (k[a + 4] += 1))
        })();
        this.addAttribute("position", new B(h, 3));
        this.addAttribute("normal",
        new B(h.slice(), 3));
        this.addAttribute("uv", new B(k, 2));
        0 === d ? this.computeVertexNormals() : this.normalizeNormals()
    }
    function Ec(a, b) {
        J.call(this);
        this.type = "TetrahedronGeometry";
        this.parameters = {
            radius: a,
            detail: b
        };
        this.fromBufferGeometry(new Ob(a, b));
        this.mergeVertices()
    }
    function Ob(a, b) {
        za.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], a, b);
        this.type = "TetrahedronBufferGeometry";
        this.parameters = {
            radius: a,
            detail: b
        }
    }
    function Fc(a, b) {
        J.call(this);
        this.type = "OctahedronGeometry";
        this.parameters =
        {
            radius: a,
            detail: b
        };
        this.fromBufferGeometry(new lb(a, b));
        this.mergeVertices()
    }
    function lb(a, b) {
        za.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], a, b);
        this.type = "OctahedronBufferGeometry";
        this.parameters = {
            radius: a,
            detail: b
        }
    }
    function Gc(a, b) {
        J.call(this);
        this.type = "IcosahedronGeometry";
        this.parameters = {
            radius: a,
            detail: b
        };
        this.fromBufferGeometry(new Pb(a, b));
        this.mergeVertices()
    }
    function Pb(a, b) {
        var c = (1 + Math.sqrt(5)) / 2;
        za.call(this, [-1, c, 0, 1, c, 0,
        -1, -c, 0, 1, -c, 0, 0, -1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, c, 0, -1, c, 0, 1, -c, 0, -1, -c, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], a, b);
        this.type = "IcosahedronBufferGeometry";
        this.parameters = {
            radius: a,
            detail: b
        }
    }
    function Hc(a, b) {
        J.call(this);
        this.type = "DodecahedronGeometry";
        this.parameters = {
            radius: a,
            detail: b
        };
        this.fromBufferGeometry(new Qb(a, b));
        this.mergeVertices()
    }
    function Qb(a, b) {
        var c = (1 + Math.sqrt(5)) / 2,
            d = 1 / c;
        za.call(this,
        [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, 0, -c, 0, -d, c, 0, -d, -c, 0, d, c, 0, d], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], a, b);
        this.type = "DodecahedronBufferGeometry";
        this.parameters = {
            radius: a,
            detail: b
        }
    }
    function Ic(a,
    b, c, d, e, f) {
        J.call(this);
        this.type = "TubeGeometry";
        this.parameters = {
            path: a,
            tubularSegments: b,
            radius: c,
            radialSegments: d,
            closed: e
        };
        void 0 !== f && console.warn("THREE.TubeGeometry: taper has been removed.");
        a = new Rb(a, b, c, d, e);
        this.tangents = a.tangents;
        this.normals = a.normals;
        this.binormals = a.binormals;
        this.fromBufferGeometry(a);
        this.mergeVertices()
    }
    function Rb(a, b, c, d, e) {
        function f(e) {
            var f = a.getPointAt(e / b),
                m = g.normals[e];
            e = g.binormals[e];
            for (v = 0; v <= d; v++) {
                var q = v / d * Math.PI * 2,
                    l = Math.sin(q),
                    q = -Math.cos(q);
                k.x = q * m.x + l * e.x;
                k.y = q * m.y + l * e.y;
                k.z = q * m.z + l * e.z;
                k.normalize();
                r.push(k.x, k.y, k.z);
                h.x = f.x + c * k.x;
                h.y = f.y + c * k.y;
                h.z = f.z + c * k.z;
                p.push(h.x, h.y, h.z)
            }
        }
        E.call(this);
        this.type = "TubeBufferGeometry";
        this.parameters = {
            path: a,
            tubularSegments: b,
            radius: c,
            radialSegments: d,
            closed: e
        };
        b = b || 64;
        c = c || 1;
        d = d || 8;
        e = e || !1;
        var g = a.computeFrenetFrames(b, e);
        this.tangents = g.tangents;
        this.normals = g.normals;
        this.binormals = g.binormals;
        var h = new n,
            k = new n,
            m = new C,
            q,
            v,
            p = [],
            r = [],
            l = [],
            t = [];
        for (q = 0; q < b; q++)
            f(q);
        f(!1 === e ? b : 0);
        for (q = 0; q <=
        b; q++)
            for (v = 0; v <= d; v++)
                m.x = q / b, m.y = v / d, l.push(m.x, m.y);
        (function() {
            for (v = 1; v <= b; v++)
                for (q = 1; q <= d; q++) {
                    var a = (d + 1) * v + (q - 1),
                        c = (d + 1) * v + q,
                        e = (d + 1) * (v - 1) + q;
                    t.push((d + 1) * (v - 1) + (q - 1), a, e);
                    t.push(a, c, e)
                }
        })();
        this.setIndex(t);
        this.addAttribute("position", new B(p, 3));
        this.addAttribute("normal", new B(r, 3));
        this.addAttribute("uv", new B(l, 2))
    }
    function Jc(a, b, c, d, e, f, g) {
        J.call(this);
        this.type = "TorusKnotGeometry";
        this.parameters = {
            radius: a,
            tube: b,
            tubularSegments: c,
            radialSegments: d,
            p: e,
            q: f
        };
        void 0 !== g && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");
        this.fromBufferGeometry(new Sb(a, b, c, d, e, f));
        this.mergeVertices()
    }
    function Sb(a, b, c, d, e, f) {
        function g(a, b, c, d, e) {
            var f = Math.sin(a);
            b = c / b * a;
            c = Math.cos(b);
            e.x = d * (2 + c) * .5 * Math.cos(a);
            e.y = d * (2 + c) * f * .5;
            e.z = d * Math.sin(b) * .5
        }
        E.call(this);
        this.type = "TorusKnotBufferGeometry";
        this.parameters = {
            radius: a,
            tube: b,
            tubularSegments: c,
            radialSegments: d,
            p: e,
            q: f
        };
        a = a || 100;
        b = b || 40;
        c = Math.floor(c) || 64;
        d = Math.floor(d) || 8;
        e = e || 2;
        f = f || 3;
        var h = [],
            k = [],
            m = [],
            q = [],
            v,
            p,
            r = new n,
            l = new n,
            t = new n,
            y = new n,
            x = new n,
            u = new n,
            H = new n;
        for (v =
        0; v <= c; ++v)
            for (p = v / c * e * Math.PI * 2, g(p, e, f, a, t), g(p + .01, e, f, a, y), u.subVectors(y, t), H.addVectors(y, t), x.crossVectors(u, H), H.crossVectors(x, u), x.normalize(), H.normalize(), p = 0; p <= d; ++p) {
                var w = p / d * Math.PI * 2,
                    I = -b * Math.cos(w),
                    w = b * Math.sin(w);
                r.x = t.x + (I * H.x + w * x.x);
                r.y = t.y + (I * H.y + w * x.y);
                r.z = t.z + (I * H.z + w * x.z);
                k.push(r.x, r.y, r.z);
                l.subVectors(r, t).normalize();
                m.push(l.x, l.y, l.z);
                q.push(v / c);
                q.push(p / d)
            }
        for (p = 1; p <= c; p++)
            for (v = 1; v <= d; v++)
                a = (d + 1) * p + (v - 1), b = (d + 1) * p + v, e = (d + 1) * (p - 1) + v, h.push((d + 1) * (p - 1) + (v - 1), a, e),
                h.push(a, b, e);
        this.setIndex(h);
        this.addAttribute("position", new B(k, 3));
        this.addAttribute("normal", new B(m, 3));
        this.addAttribute("uv", new B(q, 2))
    }
    function Kc(a, b, c, d, e) {
        J.call(this);
        this.type = "TorusGeometry";
        this.parameters = {
            radius: a,
            tube: b,
            radialSegments: c,
            tubularSegments: d,
            arc: e
        };
        this.fromBufferGeometry(new Tb(a, b, c, d, e));
        this.mergeVertices()
    }
    function Tb(a, b, c, d, e) {
        E.call(this);
        this.type = "TorusBufferGeometry";
        this.parameters = {
            radius: a,
            tube: b,
            radialSegments: c,
            tubularSegments: d,
            arc: e
        };
        a = a || 100;
        b =
        b || 40;
        c = Math.floor(c) || 8;
        d = Math.floor(d) || 6;
        e = e || 2 * Math.PI;
        var f = [],
            g = [],
            h = [],
            k = [],
            m = new n,
            q = new n,
            v = new n,
            p,
            r;
        for (p = 0; p <= c; p++)
            for (r = 0; r <= d; r++) {
                var l = r / d * e,
                    t = p / c * Math.PI * 2;
                q.x = (a + b * Math.cos(t)) * Math.cos(l);
                q.y = (a + b * Math.cos(t)) * Math.sin(l);
                q.z = b * Math.sin(t);
                g.push(q.x, q.y, q.z);
                m.x = a * Math.cos(l);
                m.y = a * Math.sin(l);
                v.subVectors(q, m).normalize();
                h.push(v.x, v.y, v.z);
                k.push(r / d);
                k.push(p / c)
            }
        for (p = 1; p <= c; p++)
            for (r = 1; r <= d; r++)
                a = (d + 1) * (p - 1) + r - 1, b = (d + 1) * (p - 1) + r, e = (d + 1) * p + r, f.push((d + 1) * p + r - 1, a, e), f.push(a,
                b, e);
        this.setIndex(f);
        this.addAttribute("position", new B(g, 3));
        this.addAttribute("normal", new B(h, 3));
        this.addAttribute("uv", new B(k, 2))
    }
    function cb(a, b) {
        J.call(this);
        this.type = "ExtrudeGeometry";
        this.parameters = {
            shapes: a,
            options: b
        };
        this.fromBufferGeometry(new Ga(a, b));
        this.mergeVertices()
    }
    function Ga(a, b) {
        "undefined" !== typeof a && (E.call(this), this.type = "ExtrudeBufferGeometry", a = Array.isArray(a) ? a : [a], this.addShapeList(a, b), this.computeVertexNormals())
    }
    function Lc(a, b) {
        J.call(this);
        this.type = "TextGeometry";
        this.parameters = {
            text: a,
            parameters: b
        };
        this.fromBufferGeometry(new Ub(a, b));
        this.mergeVertices()
    }
    function Ub(a, b) {
        b = b || {};
        var c = b.font;
        if (!c || !c.isFont)
            return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new J;
        c = c.generateShapes(a, b.size, b.curveSegments);
        b.amount = void 0 !== b.height ? b.height : 50;
        void 0 === b.bevelThickness && (b.bevelThickness = 10);
        void 0 === b.bevelSize && (b.bevelSize = 8);
        void 0 === b.bevelEnabled && (b.bevelEnabled = !1);
        Ga.call(this, c, b);
        this.type = "TextBufferGeometry"
    }
    function Mc(a, b, c, d, e, f, g) {
        J.call(this);
        this.type = "SphereGeometry";
        this.parameters = {
            radius: a,
            widthSegments: b,
            heightSegments: c,
            phiStart: d,
            phiLength: e,
            thetaStart: f,
            thetaLength: g
        };
        this.fromBufferGeometry(new mb(a, b, c, d, e, f, g));
        this.mergeVertices()
    }
    function mb(a, b, c, d, e, f, g) {
        E.call(this);
        this.type = "SphereBufferGeometry";
        this.parameters = {
            radius: a,
            widthSegments: b,
            heightSegments: c,
            phiStart: d,
            phiLength: e,
            thetaStart: f,
            thetaLength: g
        };
        a = a || 50;
        b = Math.max(3, Math.floor(b) || 8);
        c = Math.max(2, Math.floor(c) || 6);
        d = void 0 !==
        d ? d : 0;
        e = void 0 !== e ? e : 2 * Math.PI;
        f = void 0 !== f ? f : 0;
        g = void 0 !== g ? g : Math.PI;
        var h = f + g,
            k,
            m,
            q = 0,
            v = [],
            p = new n,
            r = new n,
            l = [],
            t = [],
            y = [],
            x = [];
        for (m = 0; m <= c; m++) {
            var u = [],
                H = m / c;
            for (k = 0; k <= b; k++) {
                var w = k / b;
                p.x = -a * Math.cos(d + w * e) * Math.sin(f + H * g);
                p.y = a * Math.cos(f + H * g);
                p.z = a * Math.sin(d + w * e) * Math.sin(f + H * g);
                t.push(p.x, p.y, p.z);
                r.set(p.x, p.y, p.z).normalize();
                y.push(r.x, r.y, r.z);
                x.push(w, 1 - H);
                u.push(q++)
            }
            v.push(u)
        }
        for (m = 0; m < c; m++)
            for (k = 0; k < b; k++)
                a = v[m][k + 1], d = v[m][k], e = v[m + 1][k], g = v[m + 1][k + 1], (0 !== m || 0 < f) && l.push(a, d,
                g), (m !== c - 1 || h < Math.PI) && l.push(d, e, g);
        this.setIndex(l);
        this.addAttribute("position", new B(t, 3));
        this.addAttribute("normal", new B(y, 3));
        this.addAttribute("uv", new B(x, 2))
    }
    function Nc(a, b, c, d, e, f) {
        J.call(this);
        this.type = "RingGeometry";
        this.parameters = {
            innerRadius: a,
            outerRadius: b,
            thetaSegments: c,
            phiSegments: d,
            thetaStart: e,
            thetaLength: f
        };
        this.fromBufferGeometry(new Vb(a, b, c, d, e, f));
        this.mergeVertices()
    }
    function Vb(a, b, c, d, e, f) {
        E.call(this);
        this.type = "RingBufferGeometry";
        this.parameters = {
            innerRadius: a,
            outerRadius: b,
            thetaSegments: c,
            phiSegments: d,
            thetaStart: e,
            thetaLength: f
        };
        a = a || 20;
        b = b || 50;
        e = void 0 !== e ? e : 0;
        f = void 0 !== f ? f : 2 * Math.PI;
        c = void 0 !== c ? Math.max(3, c) : 8;
        d = void 0 !== d ? Math.max(1, d) : 1;
        var g = [],
            h = [],
            k = [],
            m = [],
            q = a,
            v = (b - a) / d,
            p = new n,
            r = new C,
            l,
            t;
        for (l = 0; l <= d; l++) {
            for (t = 0; t <= c; t++)
                a = e + t / c * f, p.x = q * Math.cos(a), p.y = q * Math.sin(a), h.push(p.x, p.y, p.z), k.push(0, 0, 1), r.x = (p.x / b + 1) / 2, r.y = (p.y / b + 1) / 2, m.push(r.x, r.y);
            q += v
        }
        for (l = 0; l < d; l++)
            for (b = l * (c + 1), t = 0; t < c; t++)
                a = t + b, e = a + c + 1, f = a + c + 2, q = a + 1, g.push(a, e, q), g.push(e,
                f, q);
        this.setIndex(g);
        this.addAttribute("position", new B(h, 3));
        this.addAttribute("normal", new B(k, 3));
        this.addAttribute("uv", new B(m, 2))
    }
    function Oc(a, b, c, d) {
        J.call(this);
        this.type = "LatheGeometry";
        this.parameters = {
            points: a,
            segments: b,
            phiStart: c,
            phiLength: d
        };
        this.fromBufferGeometry(new Wb(a, b, c, d));
        this.mergeVertices()
    }
    function Wb(a, b, c, d) {
        E.call(this);
        this.type = "LatheBufferGeometry";
        this.parameters = {
            points: a,
            segments: b,
            phiStart: c,
            phiLength: d
        };
        b = Math.floor(b) || 12;
        c = c || 0;
        d = d || 2 * Math.PI;
        d = Y.clamp(d,
        0, 2 * Math.PI);
        var e = [],
            f = [],
            g = [],
            h = 1 / b,
            k = new n,
            m = new C,
            q,
            v;
        for (q = 0; q <= b; q++) {
            v = c + q * h * d;
            var p = Math.sin(v),
                r = Math.cos(v);
            for (v = 0; v <= a.length - 1; v++)
                k.x = a[v].x * p, k.y = a[v].y, k.z = a[v].x * r, f.push(k.x, k.y, k.z), m.x = q / b, m.y = v / (a.length - 1), g.push(m.x, m.y)
        }
        for (q = 0; q < b; q++)
            for (v = 0; v < a.length - 1; v++)
                c = v + q * a.length, h = c + a.length, k = c + a.length + 1, m = c + 1, e.push(c, h, m), e.push(h, k, m);
        this.setIndex(e);
        this.addAttribute("position", new B(f, 3));
        this.addAttribute("uv", new B(g, 2));
        this.computeVertexNormals();
        if (d === 2 * Math.PI)
            for (d =
            this.attributes.normal.array, e = new n, f = new n, g = new n, c = b * a.length * 3, v = q = 0; q < a.length; q++, v += 3)
                e.x = d[v + 0], e.y = d[v + 1], e.z = d[v + 2], f.x = d[c + v + 0], f.y = d[c + v + 1], f.z = d[c + v + 2], g.addVectors(e, f).normalize(), d[v + 0] = d[c + v + 0] = g.x, d[v + 1] = d[c + v + 1] = g.y, d[v + 2] = d[c + v + 2] = g.z
    }
    function Xb(a, b) {
        J.call(this);
        this.type = "ShapeGeometry";
        "object" === typeof b && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), b = b.curveSegments);
        this.parameters = {
            shapes: a,
            curveSegments: b
        };
        this.fromBufferGeometry(new Yb(a,
        b));
        this.mergeVertices()
    }
    function Yb(a, b) {
        function c(a) {
            var c,
                h,
                m = e.length / 3;
            a = a.extractPoints(b);
            var l = a.shape,
                n = a.holes;
            if (!1 === Ia.isClockWise(l))
                for (l = l.reverse(), a = 0, c = n.length; a < c; a++)
                    h = n[a], !0 === Ia.isClockWise(h) && (n[a] = h.reverse());
            var y = Ia.triangulateShape(l, n);
            a = 0;
            for (c = n.length; a < c; a++)
                h = n[a], l = l.concat(h);
            a = 0;
            for (c = l.length; a < c; a++)
                h = l[a], e.push(h.x, h.y, 0), f.push(0, 0, 1), g.push(h.x, h.y);
            a = 0;
            for (c = y.length; a < c; a++)
                l = y[a], d.push(l[0] + m, l[1] + m, l[2] + m), k += 3
        }
        E.call(this);
        this.type = "ShapeBufferGeometry";
        this.parameters = {
            shapes: a,
            curveSegments: b
        };
        b = b || 12;
        var d = [],
            e = [],
            f = [],
            g = [],
            h = 0,
            k = 0;
        if (!1 === Array.isArray(a))
            c(a);
        else
            for (var m = 0; m < a.length; m++)
                c(a[m]), this.addGroup(h, k, m), h += k, k = 0;
        this.setIndex(d);
        this.addAttribute("position", new B(e, 3));
        this.addAttribute("normal", new B(f, 3));
        this.addAttribute("uv", new B(g, 2))
    }
    function Zb(a, b) {
        E.call(this);
        this.type = "EdgesGeometry";
        this.parameters = {
            thresholdAngle: b
        };
        var c = [],
            d = Math.cos(Y.DEG2RAD * (void 0 !== b ? b : 1)),
            e = [0, 0],
            f = {},
            g,
            h,
            k = ["a", "b", "c"],
            m;
        a.isBufferGeometry ?
        (m = new J, m.fromBufferGeometry(a)) : m = a.clone();
        m.mergeVertices();
        m.computeFaceNormals();
        var q = m.vertices;
        m = m.faces;
        for (var v = 0, p = m.length; v < p; v++)
            for (var l = m[v], n = 0; 3 > n; n++)
                g = l[k[n]], h = l[k[(n + 1) % 3]], e[0] = Math.min(g, h), e[1] = Math.max(g, h), g = e[0] + "," + e[1], void 0 === f[g] ? f[g] = {
                    index1: e[0],
                    index2: e[1],
                    face1: v,
                    face2: void 0
                } : f[g].face2 = v;
        for (g in f)
            if (e = f[g], void 0 === e.face2 || m[e.face1].normal.dot(m[e.face2].normal) <= d)
                k = q[e.index1], c.push(k.x, k.y, k.z), k = q[e.index2], c.push(k.x, k.y, k.z);
        this.addAttribute("position",
        new B(c, 3))
    }
    function nb(a, b, c, d, e, f, g, h) {
        J.call(this);
        this.type = "CylinderGeometry";
        this.parameters = {
            radiusTop: a,
            radiusBottom: b,
            height: c,
            radialSegments: d,
            heightSegments: e,
            openEnded: f,
            thetaStart: g,
            thetaLength: h
        };
        this.fromBufferGeometry(new Ua(a, b, c, d, e, f, g, h));
        this.mergeVertices()
    }
    function Ua(a, b, c, d, e, f, g, h) {
        function k(c) {
            var e,
                f,
                k,
                t = new C,
                D = new n,
                O = 0,
                aa = !0 === c ? a : b,
                F = !0 === c ? 1 : -1;
            f = ca;
            for (e = 1; e <= d; e++)
                v.push(0, y * F, 0), p.push(0, F, 0), l.push(.5, .5), ca++;
            k = ca;
            for (e = 0; e <= d; e++) {
                var B = e / d * h + g,
                    z = Math.cos(B),
                    B = Math.sin(B);
                D.x = aa * B;
                D.y = y * F;
                D.z = aa * z;
                v.push(D.x, D.y, D.z);
                p.push(0, F, 0);
                t.x = .5 * z + .5;
                t.y = .5 * B * F + .5;
                l.push(t.x, t.y);
                ca++
            }
            for (e = 0; e < d; e++)
                t = f + e, D = k + e, !0 === c ? q.push(D, D + 1, t) : q.push(D + 1, D, t), O += 3;
            m.addGroup(x, O, !0 === c ? 1 : 2);
            x += O
        }
        E.call(this);
        this.type = "CylinderBufferGeometry";
        this.parameters = {
            radiusTop: a,
            radiusBottom: b,
            height: c,
            radialSegments: d,
            heightSegments: e,
            openEnded: f,
            thetaStart: g,
            thetaLength: h
        };
        var m = this;
        a = void 0 !== a ? a : 20;
        b = void 0 !== b ? b : 20;
        c = void 0 !== c ? c : 100;
        d = Math.floor(d) || 8;
        e = Math.floor(e) ||
        1;
        f = void 0 !== f ? f : !1;
        g = void 0 !== g ? g : 0;
        h = void 0 !== h ? h : 2 * Math.PI;
        var q = [],
            v = [],
            p = [],
            l = [],
            ca = 0,
            t = [],
            y = c / 2,
            x = 0;
        (function() {
            var f,
                k,
                w = new n,
                I = new n,
                W = 0,
                D = (b - a) / c;
            for (k = 0; k <= e; k++) {
                var O = [],
                    aa = k / e,
                    F = aa * (b - a) + a;
                for (f = 0; f <= d; f++) {
                    var B = f / d,
                        C = B * h + g,
                        z = Math.sin(C),
                        C = Math.cos(C);
                    I.x = F * z;
                    I.y = -aa * c + y;
                    I.z = F * C;
                    v.push(I.x, I.y, I.z);
                    w.set(z, D, C).normalize();
                    p.push(w.x, w.y, w.z);
                    l.push(B, 1 - aa);
                    O.push(ca++)
                }
                t.push(O)
            }
            for (f = 0; f < d; f++)
                for (k = 0; k < e; k++)
                    w = t[k + 1][f], I = t[k + 1][f + 1], D = t[k][f + 1], q.push(t[k][f], w, D), q.push(w, I, D),
                    W += 6;
            m.addGroup(x, W, 0);
            x += W
        })();
        !1 === f && (0 < a && k(!0), 0 < b && k(!1));
        this.setIndex(q);
        this.addAttribute("position", new B(v, 3));
        this.addAttribute("normal", new B(p, 3));
        this.addAttribute("uv", new B(l, 2))
    }
    function Pc(a, b, c, d, e, f, g) {
        nb.call(this, 0, a, b, c, d, e, f, g);
        this.type = "ConeGeometry";
        this.parameters = {
            radius: a,
            height: b,
            radialSegments: c,
            heightSegments: d,
            openEnded: e,
            thetaStart: f,
            thetaLength: g
        }
    }
    function Qc(a, b, c, d, e, f, g) {
        Ua.call(this, 0, a, b, c, d, e, f, g);
        this.type = "ConeBufferGeometry";
        this.parameters = {
            radius: a,
            height: b,
            radialSegments: c,
            heightSegments: d,
            openEnded: e,
            thetaStart: f,
            thetaLength: g
        }
    }
    function Rc(a, b, c, d) {
        J.call(this);
        this.type = "CircleGeometry";
        this.parameters = {
            radius: a,
            segments: b,
            thetaStart: c,
            thetaLength: d
        };
        this.fromBufferGeometry(new $b(a, b, c, d));
        this.mergeVertices()
    }
    function $b(a, b, c, d) {
        E.call(this);
        this.type = "CircleBufferGeometry";
        this.parameters = {
            radius: a,
            segments: b,
            thetaStart: c,
            thetaLength: d
        };
        a = a || 50;
        b = void 0 !== b ? Math.max(3, b) : 8;
        c = void 0 !== c ? c : 0;
        d = void 0 !== d ? d : 2 * Math.PI;
        var e = [],
            f = [],
            g = [],
            h = [],
            k,
            m,
            q = new n,
            v = new C;
        f.push(0, 0, 0);
        g.push(0, 0, 1);
        h.push(.5, .5);
        m = 0;
        for (k = 3; m <= b; m++, k += 3) {
            var p = c + m / b * d;
            q.x = a * Math.cos(p);
            q.y = a * Math.sin(p);
            f.push(q.x, q.y, q.z);
            g.push(0, 0, 1);
            v.x = (f[k] / a + 1) / 2;
            v.y = (f[k + 1] / a + 1) / 2;
            h.push(v.x, v.y)
        }
        for (k = 1; k <= b; k++)
            e.push(k, k + 1, 0);
        this.setIndex(e);
        this.addAttribute("position", new B(f, 3));
        this.addAttribute("normal", new B(g, 3));
        this.addAttribute("uv", new B(h, 2))
    }
    function ac(a) {
        ra.call(this, {
            uniforms: Ca.merge([R.lights, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: X.shadow_vert,
            fragmentShader: X.shadow_frag
        });
        this.transparent = this.lights = !0;
        Object.defineProperties(this, {
            opacity: {
                enumerable: !0,
                get: function() {
                    return this.uniforms.opacity.value
                },
                set: function(a) {
                    this.uniforms.opacity.value = a
                }
            }
        });
        this.setValues(a)
    }
    function bc(a) {
        ra.call(this, a);
        this.type = "RawShaderMaterial"
    }
    function Pa(a) {
        U.call(this);
        this.defines = {
            STANDARD: ""
        };
        this.type = "MeshStandardMaterial";
        this.color = new G(16777215);
        this.metalness = this.roughness = .5;
        this.lightMap = this.map = null;
        this.lightMapIntensity = 1;
        this.aoMap =
        null;
        this.aoMapIntensity = 1;
        this.emissive = new G(0);
        this.emissiveIntensity = 1;
        this.bumpMap = this.emissiveMap = null;
        this.bumpScale = 1;
        this.normalMap = null;
        this.normalScale = new C(1, 1);
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.envMap = this.alphaMap = this.metalnessMap = this.roughnessMap = null;
        this.envMapIntensity = 1;
        this.refractionRatio = .98;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.wireframeLinejoin = this.wireframeLinecap = "round";
        this.morphNormals = this.morphTargets = this.skinning =
        !1;
        this.setValues(a)
    }
    function ob(a) {
        Pa.call(this);
        this.defines = {
            PHYSICAL: ""
        };
        this.type = "MeshPhysicalMaterial";
        this.reflectivity = .5;
        this.clearCoatRoughness = this.clearCoat = 0;
        this.setValues(a)
    }
    function Ja(a) {
        U.call(this);
        this.type = "MeshPhongMaterial";
        this.color = new G(16777215);
        this.specular = new G(1118481);
        this.shininess = 30;
        this.lightMap = this.map = null;
        this.lightMapIntensity = 1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.emissive = new G(0);
        this.emissiveIntensity = 1;
        this.bumpMap = this.emissiveMap = null;
        this.bumpScale =
        1;
        this.normalMap = null;
        this.normalScale = new C(1, 1);
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.envMap = this.alphaMap = this.specularMap = null;
        this.combine = 0;
        this.reflectivity = 1;
        this.refractionRatio = .98;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.wireframeLinejoin = this.wireframeLinecap = "round";
        this.morphNormals = this.morphTargets = this.skinning = !1;
        this.setValues(a)
    }
    function pb(a) {
        Ja.call(this);
        this.defines = {
            TOON: ""
        };
        this.type = "MeshToonMaterial";
        this.gradientMap = null;
        this.setValues(a)
    }
    function qb(a) {
        U.call(this);
        this.type = "MeshNormalMaterial";
        this.bumpMap = null;
        this.bumpScale = 1;
        this.normalMap = null;
        this.normalScale = new C(1, 1);
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.morphNormals = this.morphTargets = this.skinning = this.lights = this.fog = !1;
        this.setValues(a)
    }
    function rb(a) {
        U.call(this);
        this.type = "MeshLambertMaterial";
        this.color = new G(16777215);
        this.lightMap = this.map = null;
        this.lightMapIntensity =
        1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.emissive = new G(0);
        this.emissiveIntensity = 1;
        this.envMap = this.alphaMap = this.specularMap = this.emissiveMap = null;
        this.combine = 0;
        this.reflectivity = 1;
        this.refractionRatio = .98;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.wireframeLinejoin = this.wireframeLinecap = "round";
        this.morphNormals = this.morphTargets = this.skinning = !1;
        this.setValues(a)
    }
    function sb(a) {
        U.call(this);
        this.type = "LineDashedMaterial";
        this.color = new G(16777215);
        this.scale = this.linewidth = 1;
        this.dashSize =
        3;
        this.gapSize = 1;
        this.lights = !1;
        this.setValues(a)
    }
    function Zd(a, b, c) {
        var d = this,
            e = !1,
            f = 0,
            g = 0;
        this.onStart = void 0;
        this.onLoad = a;
        this.onProgress = b;
        this.onError = c;
        this.itemStart = function(a) {
            g++;
            if (!1 === e && void 0 !== d.onStart)
                d.onStart(a, f, g);
            e = !0
        };
        this.itemEnd = function(a) {
            f++;
            if (void 0 !== d.onProgress)
                d.onProgress(a, f, g);
            if (f === g && (e = !1, void 0 !== d.onLoad))
                d.onLoad()
        };
        this.itemError = function(a) {
            if (void 0 !== d.onError)
                d.onError(a)
        }
    }
    function Ka(a) {
        this.manager = void 0 !== a ? a : va
    }
    function Oe(a) {
        this.manager = void 0 !==
        a ? a : va;
        this._parser = null
    }
    function $d(a) {
        this.manager = void 0 !== a ? a : va;
        this._parser = null
    }
    function Sc(a) {
        this.manager = void 0 !== a ? a : va
    }
    function ae(a) {
        this.manager = void 0 !== a ? a : va
    }
    function rd(a) {
        this.manager = void 0 !== a ? a : va
    }
    function na(a, b) {
        z.call(this);
        this.type = "Light";
        this.color = new G(a);
        this.intensity = void 0 !== b ? b : 1;
        this.receiveShadow = void 0
    }
    function sd(a, b, c) {
        na.call(this, a, c);
        this.type = "HemisphereLight";
        this.castShadow = void 0;
        this.position.copy(z.DefaultUp);
        this.updateMatrix();
        this.groundColor = new G(b)
    }
    function tb(a) {
        this.camera = a;
        this.bias = 0;
        this.radius = 1;
        this.mapSize = new C(512, 512);
        this.map = null;
        this.matrix = new K
    }
    function td() {
        tb.call(this, new qa(50, 1, .5, 500))
    }
    function ud(a, b, c, d, e, f) {
        na.call(this, a, b);
        this.type = "SpotLight";
        this.position.copy(z.DefaultUp);
        this.updateMatrix();
        this.target = new z;
        Object.defineProperty(this, "power", {
            get: function() {
                return this.intensity * Math.PI
            },
            set: function(a) {
                this.intensity = a / Math.PI
            }
        });
        this.distance = void 0 !== c ? c : 0;
        this.angle = void 0 !== d ? d : Math.PI / 3;
        this.penumbra =
        void 0 !== e ? e : 0;
        this.decay = void 0 !== f ? f : 1;
        this.shadow = new td
    }
    function vd(a, b, c, d) {
        na.call(this, a, b);
        this.type = "PointLight";
        Object.defineProperty(this, "power", {
            get: function() {
                return 4 * this.intensity * Math.PI
            },
            set: function(a) {
                this.intensity = a / (4 * Math.PI)
            }
        });
        this.distance = void 0 !== c ? c : 0;
        this.decay = void 0 !== d ? d : 1;
        this.shadow = new tb(new qa(90, 1, .5, 500))
    }
    function wd() {
        tb.call(this, new Fb(-5, 5, 5, -5, .5, 500))
    }
    function xd(a, b) {
        na.call(this, a, b);
        this.type = "DirectionalLight";
        this.position.copy(z.DefaultUp);
        this.updateMatrix();
        this.target = new z;
        this.shadow = new wd
    }
    function yd(a, b) {
        na.call(this, a, b);
        this.type = "AmbientLight";
        this.castShadow = void 0
    }
    function zd(a, b, c, d) {
        na.call(this, a, b);
        this.type = "RectAreaLight";
        this.position.set(0, 1, 0);
        this.updateMatrix();
        this.width = void 0 !== c ? c : 10;
        this.height = void 0 !== d ? d : 10
    }
    function wa(a, b, c, d) {
        this.parameterPositions = a;
        this._cachedIndex = 0;
        this.resultBuffer = void 0 !== d ? d : new b.constructor(c);
        this.sampleValues = b;
        this.valueSize = c
    }
    function Ad(a, b, c, d) {
        wa.call(this, a, b, c, d);
        this._offsetNext =
        this._weightNext = this._offsetPrev = this._weightPrev = -0
    }
    function Tc(a, b, c, d) {
        wa.call(this, a, b, c, d)
    }
    function Bd(a, b, c, d) {
        wa.call(this, a, b, c, d)
    }
    function ub(a, b, c, d) {
        if (void 0 === a)
            throw Error("track name is undefined");
        if (void 0 === b || 0 === b.length)
            throw Error("no keyframes in track named " + a);
        this.name = a;
        this.times = ia.convertArray(b, this.TimeBufferType);
        this.values = ia.convertArray(c, this.ValueBufferType);
        this.setInterpolation(d || this.DefaultInterpolation);
        this.validate();
        this.optimize()
    }
    function cc(a, b,
    c, d) {
        ub.call(this, a, b, c, d)
    }
    function Cd(a, b, c, d) {
        wa.call(this, a, b, c, d)
    }
    function Uc(a, b, c, d) {
        ub.call(this, a, b, c, d)
    }
    function dc(a, b, c, d) {
        ub.call(this, a, b, c, d)
    }
    function Dd(a, b, c, d) {
        ub.call(this, a, b, c, d)
    }
    function Ed(a, b, c) {
        ub.call(this, a, b, c)
    }
    function Fd(a, b, c, d) {
        ub.call(this, a, b, c, d)
    }
    function vb(a, b, c, d) {
        ub.apply(this, arguments)
    }
    function Da(a, b, c) {
        this.name = a;
        this.tracks = c;
        this.duration = void 0 !== b ? b : -1;
        this.uuid = Y.generateUUID();
        0 > this.duration && this.resetDuration();
        this.optimize()
    }
    function Gd(a) {
        this.manager =
        void 0 !== a ? a : va;
        this.textures = {}
    }
    function be(a) {
        this.manager = void 0 !== a ? a : va
    }
    function ec() {
        this.onLoadStart = function() {};
        this.onLoadProgress = function() {};
        this.onLoadComplete = function() {}
    }
    function ce(a) {
        "boolean" === typeof a && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), a = void 0);
        this.manager = void 0 !== a ? a : va;
        this.withCredentials = !1
    }
    function Pe(a) {
        this.manager = void 0 !== a ? a : va;
        this.texturePath = ""
    }
    function Qe(a, b, c, d, e) {
        b = .5 * (d - b);
        e = .5 * (e - c);
        var f = a * a;
        return (2 *
        c - 2 * d + b + e) * a * f + (-3 * c + 3 * d - 2 * b - e) * f + b * a + c
    }
    function wb(a, b, c, d) {
        var e = 1 - a;
        return e * e * b + 2 * (1 - a) * a * c + a * a * d
    }
    function xb(a, b, c, d, e) {
        var f = 1 - a,
            g = 1 - a;
        return f * f * f * b + 3 * g * g * a * c + 3 * (1 - a) * a * a * d + a * a * a * e
    }
    function ua() {
        this.arcLengthDivisions = 200
    }
    function Qa(a, b) {
        this.arcLengthDivisions = 200;
        this.v1 = a;
        this.v2 = b
    }
    function Vc() {
        this.arcLengthDivisions = 200;
        this.curves = [];
        this.autoClose = !1
    }
    function Va(a, b, c, d, e, f, g, h) {
        this.arcLengthDivisions = 200;
        this.aX = a;
        this.aY = b;
        this.xRadius = c;
        this.yRadius = d;
        this.aStartAngle = e;
        this.aEndAngle =
        f;
        this.aClockwise = g;
        this.aRotation = h || 0
    }
    function yb(a) {
        this.arcLengthDivisions = 200;
        this.points = void 0 === a ? [] : a
    }
    function fc(a, b, c, d) {
        this.arcLengthDivisions = 200;
        this.v0 = a;
        this.v1 = b;
        this.v2 = c;
        this.v3 = d
    }
    function gc(a, b, c) {
        this.arcLengthDivisions = 200;
        this.v0 = a;
        this.v1 = b;
        this.v2 = c
    }
    function Wc(a) {
        Vc.call(this);
        this.currentPoint = new C;
        a && this.fromPoints(a)
    }
    function zb() {
        Wc.apply(this, arguments);
        this.holes = []
    }
    function de() {
        this.subPaths = [];
        this.currentPath = null
    }
    function ee(a) {
        this.data = a
    }
    function Re(a) {
        this.manager =
        void 0 !== a ? a : va
    }
    function fe(a) {
        this.manager = void 0 !== a ? a : va
    }
    function Se() {
        this.type = "StereoCamera";
        this.aspect = 1;
        this.eyeSep = .064;
        this.cameraL = new qa;
        this.cameraL.layers.enable(1);
        this.cameraL.matrixAutoUpdate = !1;
        this.cameraR = new qa;
        this.cameraR.layers.enable(2);
        this.cameraR.matrixAutoUpdate = !1
    }
    function Hd(a, b, c) {
        z.call(this);
        this.type = "CubeCamera";
        var d = new qa(90, 1, a, b);
        d.up.set(0, -1, 0);
        d.lookAt(new n(1, 0, 0));
        this.add(d);
        var e = new qa(90, 1, a, b);
        e.up.set(0, -1, 0);
        e.lookAt(new n(-1, 0, 0));
        this.add(e);
        var f = new qa(90, 1, a, b);
        f.up.set(0, 0, 1);
        f.lookAt(new n(0, 1, 0));
        this.add(f);
        var g = new qa(90, 1, a, b);
        g.up.set(0, 0, -1);
        g.lookAt(new n(0, -1, 0));
        this.add(g);
        var h = new qa(90, 1, a, b);
        h.up.set(0, -1, 0);
        h.lookAt(new n(0, 0, 1));
        this.add(h);
        var k = new qa(90, 1, a, b);
        k.up.set(0, -1, 0);
        k.lookAt(new n(0, 0, -1));
        this.add(k);
        this.renderTarget = new Db(c, c, {
            format: 1022,
            magFilter: 1006,
            minFilter: 1006
        });
        this.renderTarget.texture.name = "CubeCamera";
        this.updateCubeMap = function(a, b) {
            null === this.parent && this.updateMatrixWorld();
            var c =
                this.renderTarget,
                p = c.texture.generateMipmaps;
            c.texture.generateMipmaps = !1;
            c.activeCubeFace = 0;
            a.render(b, d, c);
            c.activeCubeFace = 1;
            a.render(b, e, c);
            c.activeCubeFace = 2;
            a.render(b, f, c);
            c.activeCubeFace = 3;
            a.render(b, g, c);
            c.activeCubeFace = 4;
            a.render(b, h, c);
            c.texture.generateMipmaps = p;
            c.activeCubeFace = 5;
            a.render(b, k, c);
            a.setRenderTarget(null)
        }
    }
    function ge() {
        z.call(this);
        this.type = "AudioListener";
        this.context = he.getContext();
        this.gain = this.context.createGain();
        this.gain.connect(this.context.destination);
        this.filter =
        null
    }
    function hc(a) {
        z.call(this);
        this.type = "Audio";
        this.context = a.context;
        this.gain = this.context.createGain();
        this.gain.connect(a.getInput());
        this.autoplay = !1;
        this.buffer = null;
        this.loop = !1;
        this.startTime = 0;
        this.playbackRate = 1;
        this.isPlaying = !1;
        this.hasPlaybackControl = !0;
        this.sourceType = "empty";
        this.filters = []
    }
    function ie(a) {
        hc.call(this, a);
        this.panner = this.context.createPanner();
        this.panner.connect(this.gain)
    }
    function je(a, b) {
        this.analyser = a.context.createAnalyser();
        this.analyser.fftSize = void 0 !==
        b ? b : 2048;
        this.data = new Uint8Array(this.analyser.frequencyBinCount);
        a.getOutput().connect(this.analyser)
    }
    function ke(a, b, c) {
        this.binding = a;
        this.valueSize = c;
        a = Float64Array;
        switch (b) {
        case "quaternion":
            b = this._slerp;
            break;
        case "string":
        case "bool":
            a = Array;
            b = this._select;
            break;
        default:
            b = this._lerp
        }
        this.buffer = new a(4 * c);
        this._mixBufferRegion = b;
        this.referenceCount = this.useCount = this.cumulativeWeight = 0
    }
    function Te(a, b, c) {
        c = c || ha.parseTrackName(b);
        this._targetGroup = a;
        this._bindings = a.subscribe_(b, c)
    }
    function ha(a,
    b, c) {
        this.path = b;
        this.parsedPath = c || ha.parseTrackName(b);
        this.node = ha.findNode(a, this.parsedPath.nodeName) || a;
        this.rootNode = a
    }
    function Ue(a) {
        this.uuid = Y.generateUUID();
        this._objects = Array.prototype.slice.call(arguments);
        this.nCachedObjects_ = 0;
        var b = {};
        this._indicesByUUID = b;
        for (var c = 0, d = arguments.length; c !== d; ++c)
            b[arguments[c].uuid] = c;
        this._paths = [];
        this._parsedPaths = [];
        this._bindings = [];
        this._bindingsIndicesByPath = {};
        var e = this;
        this.stats = {
            objects: {
                get total() {
                    return e._objects.length
                },
                get inUse() {
                    return this.total -
                    e.nCachedObjects_
                }
            },
            get bindingsPerObject() {
                return e._bindings.length
            }
        }
    }
    function Ve(a, b, c) {
        this._mixer = a;
        this._clip = b;
        this._localRoot = c || null;
        a = b.tracks;
        b = a.length;
        c = Array(b);
        for (var d = {
                endingStart: 2400,
                endingEnd: 2400
            }, e = 0; e !== b; ++e) {
            var f = a[e].createInterpolant(null);
            c[e] = f;
            f.settings = d
        }
        this._interpolantSettings = d;
        this._interpolants = c;
        this._propertyBindings = Array(b);
        this._weightInterpolant = this._timeScaleInterpolant = this._byClipCacheIndex = this._cacheIndex = null;
        this.loop = 2201;
        this._loopCount = -1;
        this._startTime =
        null;
        this.time = 0;
        this._effectiveWeight = this.weight = this._effectiveTimeScale = this.timeScale = 1;
        this.repetitions = Infinity;
        this.paused = !1;
        this.enabled = !0;
        this.clampWhenFinished = !1;
        this.zeroSlopeAtEnd = this.zeroSlopeAtStart = !0
    }
    function We(a) {
        this._root = a;
        this._initMemoryManager();
        this.time = this._accuIndex = 0;
        this.timeScale = 1
    }
    function Id(a, b) {
        "string" === typeof a && (console.warn("THREE.Uniform: Type parameter is no longer needed."), a = b);
        this.value = a
    }
    function le() {
        E.call(this);
        this.type = "InstancedBufferGeometry";
        this.maxInstancedCount = void 0
    }
    function me(a, b, c, d) {
        this.uuid = Y.generateUUID();
        this.data = a;
        this.itemSize = b;
        this.offset = c;
        this.normalized = !0 === d
    }
    function ic(a, b) {
        this.uuid = Y.generateUUID();
        this.array = a;
        this.stride = b;
        this.count = void 0 !== a ? a.length / b : 0;
        this.dynamic = !1;
        this.updateRange = {
            offset: 0,
            count: -1
        };
        this.onUploadCallback = function() {};
        this.version = 0
    }
    function ne(a, b, c) {
        ic.call(this, a, b);
        this.meshPerAttribute = c || 1
    }
    function oe(a, b, c) {
        Z.call(this, a, b);
        this.meshPerAttribute = c || 1
    }
    function Xe(a, b, c, d) {
        this.ray =
        new kb(a, b);
        this.near = c || 0;
        this.far = d || Infinity;
        this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        };
        Object.defineProperties(this.params, {
            PointCloud: {
                get: function() {
                    console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");
                    return this.Points
                }
            }
        })
    }
    function Ye(a, b) {
        return a.distance - b.distance
    }
    function pe(a, b, c, d) {
        if (!1 !== a.visible && (a.raycast(b, c), !0 === d)) {
            a = a.children;
            d = 0;
            for (var e = a.length; d < e; d++)
                pe(a[d], b, c, !0)
        }
    }
    function Ze(a) {
        this.autoStart = void 0 !== a ?
        a : !0;
        this.elapsedTime = this.oldTime = this.startTime = 0;
        this.running = !1
    }
    function $e(a, b, c) {
        this.radius = void 0 !== a ? a : 1;
        this.phi = void 0 !== b ? b : 0;
        this.theta = void 0 !== c ? c : 0;
        return this
    }
    function af(a, b, c) {
        this.radius = void 0 !== a ? a : 1;
        this.theta = void 0 !== b ? b : 0;
        this.y = void 0 !== c ? c : 0;
        return this
    }
    function ta(a, b) {
        la.call(this, a, b);
        this.animationsMap = {};
        this.animationsList = [];
        var c = this.geometry.morphTargets.length;
        this.createAnimation("__default", 0, c - 1, c / 1);
        this.setAnimationWeight("__default", 1)
    }
    function Xc(a) {
        z.call(this);
        this.material = a;
        this.render = function(a) {}
    }
    function Yc(a, b, c, d) {
        this.object = a;
        this.size = void 0 !== b ? b : 1;
        a = void 0 !== c ? c : 16711680;
        d = void 0 !== d ? d : 1;
        b = 0;
        (c = this.object.geometry) && c.isGeometry ? b = 3 * c.faces.length : c && c.isBufferGeometry && (b = c.attributes.normal.count);
        c = new E;
        b = new B(6 * b, 3);
        c.addAttribute("position", b);
        Q.call(this, c, new ea({
            color: a,
            linewidth: d
        }));
        this.matrixAutoUpdate = !1;
        this.update()
    }
    function jc(a) {
        z.call(this);
        this.light = a;
        this.light.updateMatrixWorld();
        this.matrix = a.matrixWorld;
        this.matrixAutoUpdate =
        !1;
        a = new E;
        for (var b = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], c = 0, d = 1; 32 > c; c++, d++) {
            var e = c / 32 * Math.PI * 2,
                f = d / 32 * Math.PI * 2;
            b.push(Math.cos(e), Math.sin(e), 1, Math.cos(f), Math.sin(f), 1)
        }
        a.addAttribute("position", new B(b, 3));
        b = new ea({
            fog: !1
        });
        this.cone = new Q(a, b);
        this.add(this.cone);
        this.update()
    }
    function bf(a) {
        var b = [];
        a && a.isBone && b.push(a);
        for (var c = 0; c < a.children.length; c++)
            b.push.apply(b, bf(a.children[c]));
        return b
    }
    function kc(a) {
        for (var b = bf(a), c = new E, d = [], e = [], f = new G(0,
            0, 1), g = new G(0, 1, 0), h = 0; h < b.length; h++) {
            var k = b[h];
            k.parent && k.parent.isBone && (d.push(0, 0, 0), d.push(0, 0, 0), e.push(f.r, f.g, f.b), e.push(g.r, g.g, g.b))
        }
        c.addAttribute("position", new B(d, 3));
        c.addAttribute("color", new B(e, 3));
        d = new ea({
            vertexColors: 2,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        });
        Q.call(this, c, d);
        this.root = a;
        this.bones = b;
        this.matrix = a.matrixWorld;
        this.matrixAutoUpdate = !1;
        this.onBeforeRender()
    }
    function lc(a, b) {
        this.light = a;
        this.light.updateMatrixWorld();
        var c = new mb(b, 4, 2),
            d = new ya({
                wireframe: !0,
                fog: !1
            });
        d.color.copy(this.light.color);
        la.call(this, c, d);
        this.matrix = this.light.matrixWorld;
        this.matrixAutoUpdate = !1
    }
    function mc(a) {
        z.call(this);
        this.light = a;
        this.light.updateMatrixWorld();
        this.matrix = a.matrixWorld;
        this.matrixAutoUpdate = !1;
        a = new ea({
            color: a.color
        });
        var b = new E;
        b.addAttribute("position", new Z(new Float32Array(15), 3));
        this.add(new sa(b, a));
        this.update()
    }
    function nc(a, b) {
        z.call(this);
        this.light = a;
        this.light.updateMatrixWorld();
        this.matrix = a.matrixWorld;
        this.matrixAutoUpdate = !1;
        var c =
        new lb(b);
        c.rotateY(.5 * Math.PI);
        var d = new ya({
                vertexColors: 2,
                wireframe: !0
            }),
            e = c.getAttribute("position"),
            e = new Float32Array(3 * e.count);
        c.addAttribute("color", new Z(e, 3));
        this.add(new la(c, d));
        this.update()
    }
    function Zc(a, b, c, d) {
        a = a || 10;
        b = b || 10;
        c = new G(void 0 !== c ? c : 4473924);
        d = new G(void 0 !== d ? d : 8947848);
        var e = b / 2,
            f = a / b,
            g = a / 2;
        a = [];
        for (var h = [], k = 0, m = 0, q = -g; k <= b; k++, q += f) {
            a.push(-g, 0, q, g, 0, q);
            a.push(q, 0, -g, q, 0, g);
            var l = k === e ? c : d;
            l.toArray(h, m);
            m += 3;
            l.toArray(h, m);
            m += 3;
            l.toArray(h, m);
            m += 3;
            l.toArray(h,
            m);
            m += 3
        }
        b = new E;
        b.addAttribute("position", new B(a, 3));
        b.addAttribute("color", new B(h, 3));
        c = new ea({
            vertexColors: 2
        });
        Q.call(this, b, c)
    }
    function Jd(a, b, c, d, e, f) {
        a = a || 10;
        b = b || 16;
        c = c || 8;
        d = d || 64;
        e = new G(void 0 !== e ? e : 4473924);
        f = new G(void 0 !== f ? f : 8947848);
        var g = [],
            h = [],
            k,
            m,
            q,
            l,
            p;
        for (q = 0; q <= b; q++)
            m = q / b * 2 * Math.PI, k = Math.sin(m) * a, m = Math.cos(m) * a, g.push(0, 0, 0), g.push(k, 0, m), p = q & 1 ? e : f, h.push(p.r, p.g, p.b), h.push(p.r, p.g, p.b);
        for (q = 0; q <= c; q++)
            for (p = q & 1 ? e : f, l = a - a / c * q, b = 0; b < d; b++)
                m = b / d * 2 * Math.PI, k = Math.sin(m) * l,
                m = Math.cos(m) * l, g.push(k, 0, m), h.push(p.r, p.g, p.b), m = (b + 1) / d * 2 * Math.PI, k = Math.sin(m) * l, m = Math.cos(m) * l, g.push(k, 0, m), h.push(p.r, p.g, p.b);
        a = new E;
        a.addAttribute("position", new B(g, 3));
        a.addAttribute("color", new B(h, 3));
        g = new ea({
            vertexColors: 2
        });
        Q.call(this, a, g)
    }
    function $c(a, b, c, d) {
        this.object = a;
        this.size = void 0 !== b ? b : 1;
        a = void 0 !== c ? c : 16776960;
        d = void 0 !== d ? d : 1;
        b = 0;
        (c = this.object.geometry) && c.isGeometry ? b = c.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
        c = new E;
        b = new B(6 * b, 3);
        c.addAttribute("position", b);
        Q.call(this, c, new ea({
            color: a,
            linewidth: d
        }));
        this.matrixAutoUpdate = !1;
        this.update()
    }
    function oc(a, b) {
        z.call(this);
        this.light = a;
        this.light.updateMatrixWorld();
        this.matrix = a.matrixWorld;
        this.matrixAutoUpdate = !1;
        void 0 === b && (b = 1);
        var c = new E;
        c.addAttribute("position", new B([-b, b, 0, b, b, 0, b, -b, 0, -b, -b, 0, -b, b, 0], 3));
        var d = new ea({
            fog: !1
        });
        this.add(new sa(c, d));
        c = new E;
        c.addAttribute("position", new B([0, 0, 0, 0, 0, 1], 3));
        this.add(new sa(c, d));
        this.update()
    }
    function ad(a) {
        function b(a, b, d) {
            c(a, d);
            c(b, d)
        }
        function c(a, b) {
            f.push(0, 0, 0);
            g.push(b.r, b.g, b.b);
            void 0 === h[a] && (h[a] = []);
            h[a].push(f.length / 3 - 1)
        }
        var d = new E,
            e = new ea({
                color: 16777215,
                vertexColors: 1
            }),
            f = [],
            g = [],
            h = {},
            k = new G(16755200),
            m = new G(16711680),
            q = new G(43775),
            l = new G(16777215),
            p = new G(3355443);
        b("n1", "n2", k);
        b("n2", "n4", k);
        b("n4", "n3", k);
        b("n3", "n1", k);
        b("f1", "f2", k);
        b("f2", "f4", k);
        b("f4", "f3", k);
        b("f3", "f1", k);
        b("n1", "f1", k);
        b("n2", "f2", k);
        b("n3", "f3", k);
        b("n4", "f4", k);
        b("p", "n1", m);
        b("p",
        "n2", m);
        b("p", "n3", m);
        b("p", "n4", m);
        b("u1", "u2", q);
        b("u2", "u3", q);
        b("u3", "u1", q);
        b("c", "t", l);
        b("p", "c", p);
        b("cn1", "cn2", p);
        b("cn3", "cn4", p);
        b("cf1", "cf2", p);
        b("cf3", "cf4", p);
        d.addAttribute("position", new B(f, 3));
        d.addAttribute("color", new B(g, 3));
        Q.call(this, d, e);
        this.camera = a;
        this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix();
        this.matrix = a.matrixWorld;
        this.matrixAutoUpdate = !1;
        this.pointMap = h;
        this.update()
    }
    function Ab(a, b) {
        this.object = a;
        void 0 === b && (b = 16776960);
        var c = new Uint16Array([0,
            1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            d = new Float32Array(24),
            e = new E;
        e.setIndex(new Z(c, 1));
        e.addAttribute("position", new Z(d, 3));
        Q.call(this, e, new ea({
            color: b
        }));
        this.matrixAutoUpdate = !1;
        this.update()
    }
    function Bb(a, b, c, d, e, f) {
        z.call(this);
        void 0 === d && (d = 16776960);
        void 0 === c && (c = 1);
        void 0 === e && (e = .2 * c);
        void 0 === f && (f = .2 * e);
        void 0 === Kd && (Kd = new E, Kd.addAttribute("position", new B([0, 0, 0, 0, 1, 0], 3)), qe = new Ua(0, .5, 1, 5, 1), qe.translate(0, -.5, 0));
        this.position.copy(b);
        this.line = new sa(Kd, new ea({
            color: d
        }));
        this.line.matrixAutoUpdate = !1;
        this.add(this.line);
        this.cone = new la(qe, new ya({
            color: d
        }));
        this.cone.matrixAutoUpdate = !1;
        this.add(this.cone);
        this.setDirection(a);
        this.setLength(c, e, f)
    }
    function Ld(a) {
        a = a || 1;
        var b = [0, 0, 0, a, 0, 0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, 0, a];
        a = new E;
        a.addAttribute("position", new B(b, 3));
        a.addAttribute("color", new B([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
        b = new ea({
            vertexColors: 2
        });
        Q.call(this, a, b)
    }
    function re() {
        var a = 0,
            b = 0,
            c = 0,
            d = 0;
        return {
            initCatmullRom: function(e, f, g, h, k) {
                e = k * (g - e);
                h = k *
                (h - f);
                a = f;
                b = e;
                c = -3 * f + 3 * g - 2 * e - h;
                d = 2 * f - 2 * g + e + h
            },
            initNonuniformCatmullRom: function(e, f, g, h, k, m, q) {
                e = ((f - e) / k - (g - e) / (k + m) + (g - f) / m) * m;
                h = ((g - f) / m - (h - f) / (m + q) + (h - g) / q) * m;
                a = f;
                b = e;
                c = -3 * f + 3 * g - 2 * e - h;
                d = 2 * f - 2 * g + e + h
            },
            calc: function(e) {
                var f = e * e;
                return a + b * e + c * f + d * f * e
            }
        }
    }
    function La(a) {
        this.arcLengthDivisions = 200;
        2 > a.length && console.warn("THREE.CatmullRomCurve3: Points array needs at least two entries.");
        this.points = a || [];
        this.closed = !1
    }
    function bd(a, b, c, d) {
        this.arcLengthDivisions = 200;
        this.v0 = a;
        this.v1 = b;
        this.v2 =
        c;
        this.v3 = d
    }
    function cd(a, b, c) {
        this.arcLengthDivisions = 200;
        this.v0 = a;
        this.v1 = b;
        this.v2 = c
    }
    function dd(a, b) {
        this.arcLengthDivisions = 200;
        this.v1 = a;
        this.v2 = b
    }
    function Md(a, b, c, d, e, f) {
        Va.call(this, a, b, c, c, d, e, f)
    }
    function cf(a) {
        console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");
        La.call(this, a);
        this.type = "catmullrom";
        this.closed = !0
    }
    function df(a) {
        console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");
        La.call(this, a);
        this.type =
        "catmullrom"
    }
    function se(a) {
        console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");
        La.call(this, a);
        this.type = "catmullrom"
    }
    void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52));
    void 0 === Number.isInteger && (Number.isInteger = function(a) {
        return "number" === typeof a && isFinite(a) && Math.floor(a) === a
    });
    void 0 === Math.sign && (Math.sign = function(a) {
        return 0 > a ? -1 : 0 < a ? 1 : +a
    });
    void 0 === Function.prototype.name && Object.defineProperty(Function.prototype, "name", {
        get: function() {
            return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
        }
    });
    void 0 === Object.assign && function() {
        Object.assign = function(a) {
            if (void 0 === a || null === a)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var b = Object(a), c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (void 0 !== d && null !== d)
                    for (var e in d)
                        Object.prototype.hasOwnProperty.call(d, e) && (b[e] = d[e])
            }
            return b
        }
    }();
    Object.assign(xa.prototype, {
        addEventListener: function(a, b) {
            void 0 === this._listeners && (this._listeners = {});
            var c = this._listeners;
            void 0 === c[a] && (c[a] = []);
            -1 === c[a].indexOf(b) && c[a].push(b)
        },
        hasEventListener: function(a, b) {
            if (void 0 === this._listeners)
                return !1;
            var c = this._listeners;
            return void 0 !== c[a] && -1 !== c[a].indexOf(b)
        },
        removeEventListener: function(a, b) {
            if (void 0 !== this._listeners) {
                var c = this._listeners[a];
                if (void 0 !== c) {
                    var d = c.indexOf(b);
                    -1 !== d && c.splice(d, 1)
                }
            }
        },
        dispatchEvent: function(a) {
            if (void 0 !== this._listeners) {
                var b = this._listeners[a.type];
                if (void 0 !== b) {
                    a.target = this;
                    for (var b = b.slice(0), c = 0, d = b.length; c < d; c++)
                        b[c].call(this, a)
                }
            }
        }
    });
    var Y = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 /
        Math.PI,
        generateUUID: function() {
            var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                b = Array(36),
                c = 0,
                d;
            return function() {
                for (var e = 0; 36 > e; e++)
                    8 === e || 13 === e || 18 === e || 23 === e ? b[e] = "-" : 14 === e ? b[e] = "4" : (2 >= c && (c = 33554432 + 16777216 * Math.random() | 0), d = c & 15, c >>= 4, b[e] = a[19 === e ? d & 3 | 8 : d]);
                return b.join("")
            }
        }(),
        clamp: function(a, b, c) {
            return Math.max(b, Math.min(c, a))
        },
        euclideanModulo: function(a, b) {
            return (a % b + b) % b
        },
        mapLinear: function(a, b, c, d, e) {
            return d + (a - b) * (e - d) / (c - b)
        },
        lerp: function(a,
        b, c) {
            return (1 - c) * a + c * b
        },
        smoothstep: function(a, b, c) {
            if (a <= b)
                return 0;
            if (a >= c)
                return 1;
            a = (a - b) / (c - b);
            return a * a * (3 - 2 * a)
        },
        smootherstep: function(a, b, c) {
            if (a <= b)
                return 0;
            if (a >= c)
                return 1;
            a = (a - b) / (c - b);
            return a * a * a * (a * (6 * a - 15) + 10)
        },
        randInt: function(a, b) {
            return a + Math.floor(Math.random() * (b - a + 1))
        },
        randFloat: function(a, b) {
            return a + Math.random() * (b - a)
        },
        randFloatSpread: function(a) {
            return a * (.5 - Math.random())
        },
        degToRad: function(a) {
            return a * Y.DEG2RAD
        },
        radToDeg: function(a) {
            return a * Y.RAD2DEG
        },
        isPowerOfTwo: function(a) {
            return 0 ===
                (a & a - 1) && 0 !== a
        },
        nearestPowerOfTwo: function(a) {
            return Math.pow(2, Math.round(Math.log(a) / Math.LN2))
        },
        nextPowerOfTwo: function(a) {
            a--;
            a |= a >> 1;
            a |= a >> 2;
            a |= a >> 4;
            a |= a >> 8;
            a |= a >> 16;
            a++;
            return a
        }
    };
    Object.defineProperties(C.prototype, {
        width: {
            get: function() {
                return this.x
            },
            set: function(a) {
                this.x = a
            }
        },
        height: {
            get: function() {
                return this.y
            },
            set: function(a) {
                this.y = a
            }
        }
    });
    Object.assign(C.prototype, {
        isVector2: !0,
        set: function(a, b) {
            this.x = a;
            this.y = b;
            return this
        },
        setScalar: function(a) {
            this.y = this.x = a;
            return this
        },
        setX: function(a) {
            this.x =
            a;
            return this
        },
        setY: function(a) {
            this.y = a;
            return this
        },
        setComponent: function(a, b) {
            switch (a) {
            case 0:
                this.x = b;
                break;
            case 1:
                this.y = b;
                break;
            default:
                throw Error("index is out of range: " + a);
            }
            return this
        },
        getComponent: function(a) {
            switch (a) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw Error("index is out of range: " + a);
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y)
        },
        copy: function(a) {
            this.x = a.x;
            this.y = a.y;
            return this
        },
        add: function(a, b) {
            if (void 0 !== b)
                return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
                this.addVectors(a, b);
            this.x += a.x;
            this.y += a.y;
            return this
        },
        addScalar: function(a) {
            this.x += a;
            this.y += a;
            return this
        },
        addVectors: function(a, b) {
            this.x = a.x + b.x;
            this.y = a.y + b.y;
            return this
        },
        addScaledVector: function(a, b) {
            this.x += a.x * b;
            this.y += a.y * b;
            return this
        },
        sub: function(a, b) {
            if (void 0 !== b)
                return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
            this.x -= a.x;
            this.y -= a.y;
            return this
        },
        subScalar: function(a) {
            this.x -= a;
            this.y -= a;
            return this
        },
        subVectors: function(a, b) {
            this.x = a.x - b.x;
            this.y = a.y - b.y;
            return this
        },
        multiply: function(a) {
            this.x *= a.x;
            this.y *= a.y;
            return this
        },
        multiplyScalar: function(a) {
            this.x *= a;
            this.y *= a;
            return this
        },
        divide: function(a) {
            this.x /= a.x;
            this.y /= a.y;
            return this
        },
        divideScalar: function(a) {
            return this.multiplyScalar(1 / a)
        },
        min: function(a) {
            this.x = Math.min(this.x, a.x);
            this.y = Math.min(this.y, a.y);
            return this
        },
        max: function(a) {
            this.x = Math.max(this.x, a.x);
            this.y = Math.max(this.y, a.y);
            return this
        },
        clamp: function(a, b) {
            this.x = Math.max(a.x,
            Math.min(b.x, this.x));
            this.y = Math.max(a.y, Math.min(b.y, this.y));
            return this
        },
        clampScalar: function() {
            var a = new C,
                b = new C;
            return function(c, d) {
                a.set(c, c);
                b.set(d, d);
                return this.clamp(a, b)
            }
        }(),
        clampLength: function(a, b) {
            var c = this.length();
            return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b, c)))
        },
        floor: function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this
        },
        ceil: function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this
        },
        round: function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this
        },
        roundToZero: function() {
            this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
            this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
            return this
        },
        negate: function() {
            this.x = -this.x;
            this.y = -this.y;
            return this
        },
        dot: function(a) {
            return this.x * a.x + this.y * a.y
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y)
        },
        normalize: function() {
            return this.divideScalar(this.length() ||
            1)
        },
        angle: function() {
            var a = Math.atan2(this.y, this.x);
            0 > a && (a += 2 * Math.PI);
            return a
        },
        distanceTo: function(a) {
            return Math.sqrt(this.distanceToSquared(a))
        },
        distanceToSquared: function(a) {
            var b = this.x - a.x;
            a = this.y - a.y;
            return b * b + a * a
        },
        distanceToManhattan: function(a) {
            return Math.abs(this.x - a.x) + Math.abs(this.y - a.y)
        },
        setLength: function(a) {
            return this.normalize().multiplyScalar(a)
        },
        lerp: function(a, b) {
            this.x += (a.x - this.x) * b;
            this.y += (a.y - this.y) * b;
            return this
        },
        lerpVectors: function(a, b, c) {
            return this.subVectors(b,
            a).multiplyScalar(c).add(a)
        },
        equals: function(a) {
            return a.x === this.x && a.y === this.y
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            this.x = a[b];
            this.y = a[b + 1];
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this.x;
            a[b + 1] = this.y;
            return a
        },
        fromBufferAttribute: function(a, b, c) {
            void 0 !== c && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");
            this.x = a.getX(b);
            this.y = a.getY(b);
            return this
        },
        rotateAround: function(a, b) {
            var c = Math.cos(b),
                d = Math.sin(b),
                e = this.x -
                a.x,
                f = this.y - a.y;
            this.x = e * c - f * d + a.x;
            this.y = e * d + f * c + a.y;
            return this
        }
    });
    var hf = 0;
    ba.DEFAULT_IMAGE = void 0;
    ba.DEFAULT_MAPPING = 300;
    Object.defineProperty(ba.prototype, "needsUpdate", {
        set: function(a) {
            !0 === a && this.version++
        }
    });
    Object.assign(ba.prototype, xa.prototype, {
        constructor: ba,
        isTexture: !0,
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.name = a.name;
            this.image = a.image;
            this.mipmaps = a.mipmaps.slice(0);
            this.mapping = a.mapping;
            this.wrapS = a.wrapS;
            this.wrapT = a.wrapT;
            this.magFilter =
            a.magFilter;
            this.minFilter = a.minFilter;
            this.anisotropy = a.anisotropy;
            this.format = a.format;
            this.type = a.type;
            this.offset.copy(a.offset);
            this.repeat.copy(a.repeat);
            this.generateMipmaps = a.generateMipmaps;
            this.premultiplyAlpha = a.premultiplyAlpha;
            this.flipY = a.flipY;
            this.unpackAlignment = a.unpackAlignment;
            this.encoding = a.encoding;
            return this
        },
        toJSON: function(a) {
            if (void 0 !== a.textures[this.uuid])
                return a.textures[this.uuid];
            var b = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                wrap: [this.wrapS, this.wrapT],
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY
            };
            if (void 0 !== this.image) {
                var c = this.image;
                void 0 === c.uuid && (c.uuid = Y.generateUUID());
                if (void 0 === a.images[c.uuid]) {
                    var d = a.images,
                        e = c.uuid,
                        f = c.uuid,
                        g;
                    void 0 !== c.toDataURL ? g = c : (g = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), g.width = c.width, g.height =
                    c.height, g.getContext("2d").drawImage(c, 0, 0, c.width, c.height));
                    g = 2048 < g.width || 2048 < g.height ? g.toDataURL("image/jpeg", .6) : g.toDataURL("image/png");
                    d[e] = {
                        uuid: f,
                        url: g
                    }
                }
                b.image = c.uuid
            }
            return a.textures[this.uuid] = b
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        },
        transformUv: function(a) {
            if (300 === this.mapping) {
                a.multiply(this.repeat);
                a.add(this.offset);
                if (0 > a.x || 1 < a.x)
                    switch (this.wrapS) {
                    case 1E3:
                        a.x -= Math.floor(a.x);
                        break;
                    case 1001:
                        a.x = 0 > a.x ? 0 : 1;
                        break;
                    case 1002:
                        a.x = 1 === Math.abs(Math.floor(a.x) %
                        2) ? Math.ceil(a.x) - a.x : a.x - Math.floor(a.x)
                    }
                if (0 > a.y || 1 < a.y)
                    switch (this.wrapT) {
                    case 1E3:
                        a.y -= Math.floor(a.y);
                        break;
                    case 1001:
                        a.y = 0 > a.y ? 0 : 1;
                        break;
                    case 1002:
                        a.y = 1 === Math.abs(Math.floor(a.y) % 2) ? Math.ceil(a.y) - a.y : a.y - Math.floor(a.y)
                    }
                this.flipY && (a.y = 1 - a.y)
            }
        }
    });
    Object.assign(fa.prototype, {
        isVector4: !0,
        set: function(a, b, c, d) {
            this.x = a;
            this.y = b;
            this.z = c;
            this.w = d;
            return this
        },
        setScalar: function(a) {
            this.w = this.z = this.y = this.x = a;
            return this
        },
        setX: function(a) {
            this.x = a;
            return this
        },
        setY: function(a) {
            this.y = a;
            return this
        },
        setZ: function(a) {
            this.z = a;
            return this
        },
        setW: function(a) {
            this.w = a;
            return this
        },
        setComponent: function(a, b) {
            switch (a) {
            case 0:
                this.x = b;
                break;
            case 1:
                this.y = b;
                break;
            case 2:
                this.z = b;
                break;
            case 3:
                this.w = b;
                break;
            default:
                throw Error("index is out of range: " + a);
            }
            return this
        },
        getComponent: function(a) {
            switch (a) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw Error("index is out of range: " + a);
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y, this.z,
            this.w)
        },
        copy: function(a) {
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            this.w = void 0 !== a.w ? a.w : 1;
            return this
        },
        add: function(a, b) {
            if (void 0 !== b)
                return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
            this.x += a.x;
            this.y += a.y;
            this.z += a.z;
            this.w += a.w;
            return this
        },
        addScalar: function(a) {
            this.x += a;
            this.y += a;
            this.z += a;
            this.w += a;
            return this
        },
        addVectors: function(a, b) {
            this.x = a.x + b.x;
            this.y = a.y + b.y;
            this.z = a.z + b.z;
            this.w = a.w + b.w;
            return this
        },
        addScaledVector: function(a,
        b) {
            this.x += a.x * b;
            this.y += a.y * b;
            this.z += a.z * b;
            this.w += a.w * b;
            return this
        },
        sub: function(a, b) {
            if (void 0 !== b)
                return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
            this.x -= a.x;
            this.y -= a.y;
            this.z -= a.z;
            this.w -= a.w;
            return this
        },
        subScalar: function(a) {
            this.x -= a;
            this.y -= a;
            this.z -= a;
            this.w -= a;
            return this
        },
        subVectors: function(a, b) {
            this.x = a.x - b.x;
            this.y = a.y - b.y;
            this.z = a.z - b.z;
            this.w = a.w - b.w;
            return this
        },
        multiplyScalar: function(a) {
            this.x *=
            a;
            this.y *= a;
            this.z *= a;
            this.w *= a;
            return this
        },
        applyMatrix4: function(a) {
            var b = this.x,
                c = this.y,
                d = this.z,
                e = this.w;
            a = a.elements;
            this.x = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
            this.y = a[1] * b + a[5] * c + a[9] * d + a[13] * e;
            this.z = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
            this.w = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
            return this
        },
        divideScalar: function(a) {
            return this.multiplyScalar(1 / a)
        },
        setAxisAngleFromQuaternion: function(a) {
            this.w = 2 * Math.acos(a.w);
            var b = Math.sqrt(1 - a.w * a.w);
            1E-4 > b ? (this.x = 1, this.z = this.y = 0) : (this.x = a.x / b, this.y = a.y / b, this.z = a.z /
            b);
            return this
        },
        setAxisAngleFromRotationMatrix: function(a) {
            var b,
                c,
                d;
            a = a.elements;
            var e = a[0];
            d = a[4];
            var f = a[8],
                g = a[1],
                h = a[5],
                k = a[9];
            c = a[2];
            b = a[6];
            var m = a[10];
            if (.01 > Math.abs(d - g) && .01 > Math.abs(f - c) && .01 > Math.abs(k - b)) {
                if (.1 > Math.abs(d + g) && .1 > Math.abs(f + c) && .1 > Math.abs(k + b) && .1 > Math.abs(e + h + m - 3))
                    return this.set(1, 0, 0, 0), this;
                a = Math.PI;
                e = (e + 1) / 2;
                h = (h + 1) / 2;
                m = (m + 1) / 2;
                d = (d + g) / 4;
                f = (f + c) / 4;
                k = (k + b) / 4;
                e > h && e > m ? .01 > e ? (b = 0, d = c = .707106781) : (b = Math.sqrt(e), c = d / b, d = f / b) : h > m ? .01 > h ? (b = .707106781, c = 0, d = .707106781) :
                (c = Math.sqrt(h), b = d / c, d = k / c) : .01 > m ? (c = b = .707106781, d = 0) : (d = Math.sqrt(m), b = f / d, c = k / d);
                this.set(b, c, d, a);
                return this
            }
            a = Math.sqrt((b - k) * (b - k) + (f - c) * (f - c) + (g - d) * (g - d));
            .001 > Math.abs(a) && (a = 1);
            this.x = (b - k) / a;
            this.y = (f - c) / a;
            this.z = (g - d) / a;
            this.w = Math.acos((e + h + m - 1) / 2);
            return this
        },
        min: function(a) {
            this.x = Math.min(this.x, a.x);
            this.y = Math.min(this.y, a.y);
            this.z = Math.min(this.z, a.z);
            this.w = Math.min(this.w, a.w);
            return this
        },
        max: function(a) {
            this.x = Math.max(this.x, a.x);
            this.y = Math.max(this.y, a.y);
            this.z = Math.max(this.z,
            a.z);
            this.w = Math.max(this.w, a.w);
            return this
        },
        clamp: function(a, b) {
            this.x = Math.max(a.x, Math.min(b.x, this.x));
            this.y = Math.max(a.y, Math.min(b.y, this.y));
            this.z = Math.max(a.z, Math.min(b.z, this.z));
            this.w = Math.max(a.w, Math.min(b.w, this.w));
            return this
        },
        clampScalar: function() {
            var a,
                b;
            return function(c, d) {
                void 0 === a && (a = new fa, b = new fa);
                a.set(c, c, c, c);
                b.set(d, d, d, d);
                return this.clamp(a, b)
            }
        }(),
        clampLength: function(a, b) {
            var c = this.length();
            return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b,
            c)))
        },
        floor: function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            this.z = Math.floor(this.z);
            this.w = Math.floor(this.w);
            return this
        },
        ceil: function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            this.z = Math.ceil(this.z);
            this.w = Math.ceil(this.w);
            return this
        },
        round: function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            this.z = Math.round(this.z);
            this.w = Math.round(this.w);
            return this
        },
        roundToZero: function() {
            this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
            this.y = 0 > this.y ? Math.ceil(this.y) :
            Math.floor(this.y);
            this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
            this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w);
            return this
        },
        negate: function() {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
            this.w = -this.w;
            return this
        },
        dot: function(a) {
            return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) +
            Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function(a) {
            return this.normalize().multiplyScalar(a)
        },
        lerp: function(a, b) {
            this.x += (a.x - this.x) * b;
            this.y += (a.y - this.y) * b;
            this.z += (a.z - this.z) * b;
            this.w += (a.w - this.w) * b;
            return this
        },
        lerpVectors: function(a, b, c) {
            return this.subVectors(b, a).multiplyScalar(c).add(a)
        },
        equals: function(a) {
            return a.x === this.x && a.y === this.y && a.z === this.z && a.w === this.w
        },
        fromArray: function(a, b) {
            void 0 ===
            b && (b = 0);
            this.x = a[b];
            this.y = a[b + 1];
            this.z = a[b + 2];
            this.w = a[b + 3];
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this.x;
            a[b + 1] = this.y;
            a[b + 2] = this.z;
            a[b + 3] = this.w;
            return a
        },
        fromBufferAttribute: function(a, b, c) {
            void 0 !== c && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");
            this.x = a.getX(b);
            this.y = a.getY(b);
            this.z = a.getZ(b);
            this.w = a.getW(b);
            return this
        }
    });
    Object.assign(Cb.prototype, xa.prototype, {
        isWebGLRenderTarget: !0,
        setSize: function(a, b) {
            if (this.width !==
            a || this.height !== b)
                this.width = a, this.height = b, this.dispose();
            this.viewport.set(0, 0, a, b);
            this.scissor.set(0, 0, a, b)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.width = a.width;
            this.height = a.height;
            this.viewport.copy(a.viewport);
            this.texture = a.texture.clone();
            this.depthBuffer = a.depthBuffer;
            this.stencilBuffer = a.stencilBuffer;
            this.depthTexture = a.depthTexture;
            return this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    });
    Db.prototype = Object.create(Cb.prototype);
    Db.prototype.constructor = Db;
    Db.prototype.isWebGLRenderTargetCube = !0;
    Object.assign(oa, {
        slerp: function(a, b, c, d) {
            return c.copy(a).slerp(b, d)
        },
        slerpFlat: function(a, b, c, d, e, f, g) {
            var h = c[d + 0],
                k = c[d + 1],
                m = c[d + 2];
            c = c[d + 3];
            d = e[f + 0];
            var q = e[f + 1],
                l = e[f + 2];
            e = e[f + 3];
            if (c !== e || h !== d || k !== q || m !== l) {
                f = 1 - g;
                var p = h * d + k * q + m * l + c * e,
                    r = 0 <= p ? 1 : -1,
                    n = 1 - p * p;
                n > Number.EPSILON && (n = Math.sqrt(n), p = Math.atan2(n, p * r), f = Math.sin(f * p) / n, g = Math.sin(g * p) / n);
                r *= g;
                h = h * f + d * r;
                k = k * f + q * r;
                m = m * f + l * r;
                c = c * f + e * r;
                f === 1 - g && (g = 1 / Math.sqrt(h * h + k * k + m *
                m + c * c), h *= g, k *= g, m *= g, c *= g)
            }
            a[b] = h;
            a[b + 1] = k;
            a[b + 2] = m;
            a[b + 3] = c
        }
    });
    Object.defineProperties(oa.prototype, {
        x: {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._x = a;
                this.onChangeCallback()
            }
        },
        y: {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y = a;
                this.onChangeCallback()
            }
        },
        z: {
            get: function() {
                return this._z
            },
            set: function(a) {
                this._z = a;
                this.onChangeCallback()
            }
        },
        w: {
            get: function() {
                return this._w
            },
            set: function(a) {
                this._w = a;
                this.onChangeCallback()
            }
        }
    });
    Object.assign(oa.prototype, {
        set: function(a, b, c, d) {
            this._x =
            a;
            this._y = b;
            this._z = c;
            this._w = d;
            this.onChangeCallback();
            return this
        },
        clone: function() {
            return new this.constructor(this._x, this._y, this._z, this._w)
        },
        copy: function(a) {
            this._x = a.x;
            this._y = a.y;
            this._z = a.z;
            this._w = a.w;
            this.onChangeCallback();
            return this
        },
        setFromEuler: function(a, b) {
            if (!a || !a.isEuler)
                throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            var c = a._x,
                d = a._y,
                e = a._z,
                f = a.order,
                g = Math.cos,
                h = Math.sin,
                k = g(c / 2),
                m = g(d / 2),
                g = g(e / 2),
                c = h(c / 2),
                d =
                h(d / 2),
                e = h(e / 2);
            "XYZ" === f ? (this._x = c * m * g + k * d * e, this._y = k * d * g - c * m * e, this._z = k * m * e + c * d * g, this._w = k * m * g - c * d * e) : "YXZ" === f ? (this._x = c * m * g + k * d * e, this._y = k * d * g - c * m * e, this._z = k * m * e - c * d * g, this._w = k * m * g + c * d * e) : "ZXY" === f ? (this._x = c * m * g - k * d * e, this._y = k * d * g + c * m * e, this._z = k * m * e + c * d * g, this._w = k * m * g - c * d * e) : "ZYX" === f ? (this._x = c * m * g - k * d * e, this._y = k * d * g + c * m * e, this._z = k * m * e - c * d * g, this._w = k * m * g + c * d * e) : "YZX" === f ? (this._x = c * m * g + k * d * e, this._y = k * d * g + c * m * e, this._z = k * m * e - c * d * g, this._w = k * m * g - c * d * e) : "XZY" === f && (this._x = c * m * g -
            k * d * e, this._y = k * d * g - c * m * e, this._z = k * m * e + c * d * g, this._w = k * m * g + c * d * e);
            if (!1 !== b)
                this.onChangeCallback();
            return this
        },
        setFromAxisAngle: function(a, b) {
            var c = b / 2,
                d = Math.sin(c);
            this._x = a.x * d;
            this._y = a.y * d;
            this._z = a.z * d;
            this._w = Math.cos(c);
            this.onChangeCallback();
            return this
        },
        setFromRotationMatrix: function(a) {
            var b = a.elements,
                c = b[0];
            a = b[4];
            var d = b[8],
                e = b[1],
                f = b[5],
                g = b[9],
                h = b[2],
                k = b[6],
                b = b[10],
                m = c + f + b;
            0 < m ? (c = .5 / Math.sqrt(m + 1), this._w = .25 / c, this._x = (k - g) * c, this._y = (d - h) * c, this._z = (e - a) * c) : c > f && c > b ? (c = 2 * Math.sqrt(1 +
            c - f - b), this._w = (k - g) / c, this._x = .25 * c, this._y = (a + e) / c, this._z = (d + h) / c) : f > b ? (c = 2 * Math.sqrt(1 + f - c - b), this._w = (d - h) / c, this._x = (a + e) / c, this._y = .25 * c, this._z = (g + k) / c) : (c = 2 * Math.sqrt(1 + b - c - f), this._w = (e - a) / c, this._x = (d + h) / c, this._y = (g + k) / c, this._z = .25 * c);
            this.onChangeCallback();
            return this
        },
        setFromUnitVectors: function() {
            var a = new n,
                b;
            return function(c, d) {
                void 0 === a && (a = new n);
                b = c.dot(d) + 1;
                1E-6 > b ? (b = 0, Math.abs(c.x) > Math.abs(c.z) ? a.set(-c.y, c.x, 0) : a.set(0, -c.z, c.y)) : a.crossVectors(c, d);
                this._x = a.x;
                this._y =
                a.y;
                this._z = a.z;
                this._w = b;
                return this.normalize()
            }
        }(),
        inverse: function() {
            return this.conjugate().normalize()
        },
        conjugate: function() {
            this._x *= -1;
            this._y *= -1;
            this._z *= -1;
            this.onChangeCallback();
            return this
        },
        dot: function(a) {
            return this._x * a._x + this._y * a._y + this._z * a._z + this._w * a._w
        },
        lengthSq: function() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function() {
            var a = this.length();
            0 === a ? (this._z = this._y = this._x = 0, this._w = 1) : (a = 1 / a, this._x *= a, this._y *= a, this._z *= a, this._w *= a);
            this.onChangeCallback();
            return this
        },
        multiply: function(a, b) {
            return void 0 !== b ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(a, b)) : this.multiplyQuaternions(this, a)
        },
        premultiply: function(a) {
            return this.multiplyQuaternions(a, this)
        },
        multiplyQuaternions: function(a, b) {
            var c = a._x,
                d = a._y,
                e = a._z,
                f = a._w,
                g = b._x,
                h = b._y,
                k = b._z,
                m = b._w;
            this._x = c * m + f * g + d * k - e * h;
            this._y = d * m + f * h + e * g - c * k;
            this._z = e * m + f * k + c * h - d * g;
            this._w = f * m - c * g - d * h - e * k;
            this.onChangeCallback();
            return this
        },
        slerp: function(a, b) {
            if (0 === b)
                return this;
            if (1 === b)
                return this.copy(a);
            var c = this._x,
                d = this._y,
                e = this._z,
                f = this._w,
                g = f * a._w + c * a._x + d * a._y + e * a._z;
            0 > g ? (this._w = -a._w, this._x = -a._x, this._y = -a._y, this._z = -a._z, g = -g) : this.copy(a);
            if (1 <= g)
                return this._w = f, this._x = c, this._y = d, this._z = e, this;
            var h = Math.sqrt(1 - g * g);
            if (.001 > Math.abs(h))
                return this._w = .5 * (f + this._w),
                this._x = .5 * (c + this._x), this._y = .5 * (d + this._y), this._z = .5 * (e + this._z), this;
            var k = Math.atan2(h, g),
                g = Math.sin((1 - b) * k) / h,
                h = Math.sin(b * k) / h;
            this._w = f * g + this._w * h;
            this._x = c * g + this._x * h;
            this._y = d * g + this._y * h;
            this._z = e * g + this._z * h;
            this.onChangeCallback();
            return this
        },
        equals: function(a) {
            return a._x === this._x && a._y === this._y && a._z === this._z && a._w === this._w
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            this._x = a[b];
            this._y = a[b + 1];
            this._z = a[b + 2];
            this._w = a[b + 3];
            this.onChangeCallback();
            return this
        },
        toArray: function(a,
        b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this._x;
            a[b + 1] = this._y;
            a[b + 2] = this._z;
            a[b + 3] = this._w;
            return a
        },
        onChange: function(a) {
            this.onChangeCallback = a;
            return this
        },
        onChangeCallback: function() {}
    });
    Object.assign(n.prototype, {
        isVector3: !0,
        set: function(a, b, c) {
            this.x = a;
            this.y = b;
            this.z = c;
            return this
        },
        setScalar: function(a) {
            this.z = this.y = this.x = a;
            return this
        },
        setX: function(a) {
            this.x = a;
            return this
        },
        setY: function(a) {
            this.y = a;
            return this
        },
        setZ: function(a) {
            this.z = a;
            return this
        },
        setComponent: function(a, b) {
            switch (a) {
            case 0:
                this.x =
                b;
                break;
            case 1:
                this.y = b;
                break;
            case 2:
                this.z = b;
                break;
            default:
                throw Error("index is out of range: " + a);
            }
            return this
        },
        getComponent: function(a) {
            switch (a) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw Error("index is out of range: " + a);
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y, this.z)
        },
        copy: function(a) {
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            return this
        },
        add: function(a, b) {
            if (void 0 !== b)
                return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
                this.addVectors(a, b);
            this.x += a.x;
            this.y += a.y;
            this.z += a.z;
            return this
        },
        addScalar: function(a) {
            this.x += a;
            this.y += a;
            this.z += a;
            return this
        },
        addVectors: function(a, b) {
            this.x = a.x + b.x;
            this.y = a.y + b.y;
            this.z = a.z + b.z;
            return this
        },
        addScaledVector: function(a, b) {
            this.x += a.x * b;
            this.y += a.y * b;
            this.z += a.z * b;
            return this
        },
        sub: function(a, b) {
            if (void 0 !== b)
                return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
            this.x -= a.x;
            this.y -= a.y;
            this.z -= a.z;
            return this
        },
        subScalar: function(a) {
            this.x -= a;
            this.y -= a;
            this.z -= a;
            return this
        },
        subVectors: function(a, b) {
            this.x = a.x - b.x;
            this.y = a.y - b.y;
            this.z = a.z - b.z;
            return this
        },
        multiply: function(a, b) {
            if (void 0 !== b)
                return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(a, b);
            this.x *= a.x;
            this.y *= a.y;
            this.z *= a.z;
            return this
        },
        multiplyScalar: function(a) {
            this.x *= a;
            this.y *= a;
            this.z *= a;
            return this
        },
        multiplyVectors: function(a, b) {
            this.x = a.x *
            b.x;
            this.y = a.y * b.y;
            this.z = a.z * b.z;
            return this
        },
        applyEuler: function() {
            var a = new oa;
            return function(b) {
                b && b.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");
                return this.applyQuaternion(a.setFromEuler(b))
            }
        }(),
        applyAxisAngle: function() {
            var a = new oa;
            return function(b, c) {
                return this.applyQuaternion(a.setFromAxisAngle(b, c))
            }
        }(),
        applyMatrix3: function(a) {
            var b = this.x,
                c = this.y,
                d = this.z;
            a = a.elements;
            this.x = a[0] * b + a[3] * c + a[6] * d;
            this.y = a[1] *
            b + a[4] * c + a[7] * d;
            this.z = a[2] * b + a[5] * c + a[8] * d;
            return this
        },
        applyMatrix4: function(a) {
            var b = this.x,
                c = this.y,
                d = this.z;
            a = a.elements;
            var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
            this.x = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
            this.y = (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
            this.z = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
            return this
        },
        applyQuaternion: function(a) {
            var b = this.x,
                c = this.y,
                d = this.z,
                e = a.x,
                f = a.y,
                g = a.z;
            a = a.w;
            var h = a * b + f * d - g * c,
                k = a * c + g * b - e * d,
                m = a * d + e * c - f * b,
                b = -e * b - f * c - g * d;
            this.x = h * a + b * -e + k * -g - m * -f;
            this.y = k * a + b * -f + m * -e - h * -g;
            this.z = m * a + b *
            -g + h * -f - k * -e;
            return this
        },
        project: function() {
            var a = new K;
            return function(b) {
                a.multiplyMatrices(b.projectionMatrix, a.getInverse(b.matrixWorld));
                return this.applyMatrix4(a)
            }
        }(),
        unproject: function() {
            var a = new K;
            return function(b) {
                a.multiplyMatrices(b.matrixWorld, a.getInverse(b.projectionMatrix));
                return this.applyMatrix4(a)
            }
        }(),
        transformDirection: function(a) {
            var b = this.x,
                c = this.y,
                d = this.z;
            a = a.elements;
            this.x = a[0] * b + a[4] * c + a[8] * d;
            this.y = a[1] * b + a[5] * c + a[9] * d;
            this.z = a[2] * b + a[6] * c + a[10] * d;
            return this.normalize()
        },
        divide: function(a) {
            this.x /= a.x;
            this.y /= a.y;
            this.z /= a.z;
            return this
        },
        divideScalar: function(a) {
            return this.multiplyScalar(1 / a)
        },
        min: function(a) {
            this.x = Math.min(this.x, a.x);
            this.y = Math.min(this.y, a.y);
            this.z = Math.min(this.z, a.z);
            return this
        },
        max: function(a) {
            this.x = Math.max(this.x, a.x);
            this.y = Math.max(this.y, a.y);
            this.z = Math.max(this.z, a.z);
            return this
        },
        clamp: function(a, b) {
            this.x = Math.max(a.x, Math.min(b.x, this.x));
            this.y = Math.max(a.y, Math.min(b.y, this.y));
            this.z = Math.max(a.z, Math.min(b.z, this.z));
            return this
        },
        clampScalar: function() {
            var a = new n,
                b = new n;
            return function(c, d) {
                a.set(c, c, c);
                b.set(d, d, d);
                return this.clamp(a, b)
            }
        }(),
        clampLength: function(a, b) {
            var c = this.length();
            return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b, c)))
        },
        floor: function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            this.z = Math.floor(this.z);
            return this
        },
        ceil: function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            this.z = Math.ceil(this.z);
            return this
        },
        round: function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            this.z = Math.round(this.z);
            return this
        },
        roundToZero: function() {
            this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
            this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
            this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
            return this
        },
        negate: function() {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
            return this
        },
        dot: function(a) {
            return this.x * a.x + this.y * a.y + this.z * a.z
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z *
            this.z)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function(a) {
            return this.normalize().multiplyScalar(a)
        },
        lerp: function(a, b) {
            this.x += (a.x - this.x) * b;
            this.y += (a.y - this.y) * b;
            this.z += (a.z - this.z) * b;
            return this
        },
        lerpVectors: function(a, b, c) {
            return this.subVectors(b, a).multiplyScalar(c).add(a)
        },
        cross: function(a, b) {
            if (void 0 !== b)
                return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
                this.crossVectors(a, b);
            var c = this.x,
                d = this.y,
                e = this.z;
            this.x = d * a.z - e * a.y;
            this.y = e * a.x - c * a.z;
            this.z = c * a.y - d * a.x;
            return this
        },
        crossVectors: function(a, b) {
            var c = a.x,
                d = a.y,
                e = a.z,
                f = b.x,
                g = b.y,
                h = b.z;
            this.x = d * h - e * g;
            this.y = e * f - c * h;
            this.z = c * g - d * f;
            return this
        },
        projectOnVector: function(a) {
            var b = a.dot(this) / a.lengthSq();
            return this.copy(a).multiplyScalar(b)
        },
        projectOnPlane: function() {
            var a = new n;
            return function(b) {
                a.copy(this).projectOnVector(b);
                return this.sub(a)
            }
        }(),
        reflect: function() {
            var a = new n;
            return function(b) {
                return this.sub(a.copy(b).multiplyScalar(2 *
                this.dot(b)))
            }
        }(),
        angleTo: function(a) {
            a = this.dot(a) / Math.sqrt(this.lengthSq() * a.lengthSq());
            return Math.acos(Y.clamp(a, -1, 1))
        },
        distanceTo: function(a) {
            return Math.sqrt(this.distanceToSquared(a))
        },
        distanceToSquared: function(a) {
            var b = this.x - a.x,
                c = this.y - a.y;
            a = this.z - a.z;
            return b * b + c * c + a * a
        },
        distanceToManhattan: function(a) {
            return Math.abs(this.x - a.x) + Math.abs(this.y - a.y) + Math.abs(this.z - a.z)
        },
        setFromSpherical: function(a) {
            var b = Math.sin(a.phi) * a.radius;
            this.x = b * Math.sin(a.theta);
            this.y = Math.cos(a.phi) *
            a.radius;
            this.z = b * Math.cos(a.theta);
            return this
        },
        setFromCylindrical: function(a) {
            this.x = a.radius * Math.sin(a.theta);
            this.y = a.y;
            this.z = a.radius * Math.cos(a.theta);
            return this
        },
        setFromMatrixPosition: function(a) {
            a = a.elements;
            this.x = a[12];
            this.y = a[13];
            this.z = a[14];
            return this
        },
        setFromMatrixScale: function(a) {
            var b = this.setFromMatrixColumn(a, 0).length(),
                c = this.setFromMatrixColumn(a, 1).length();
            a = this.setFromMatrixColumn(a, 2).length();
            this.x = b;
            this.y = c;
            this.z = a;
            return this
        },
        setFromMatrixColumn: function(a, b) {
            return this.fromArray(a.elements,
            4 * b)
        },
        equals: function(a) {
            return a.x === this.x && a.y === this.y && a.z === this.z
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            this.x = a[b];
            this.y = a[b + 1];
            this.z = a[b + 2];
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this.x;
            a[b + 1] = this.y;
            a[b + 2] = this.z;
            return a
        },
        fromBufferAttribute: function(a, b, c) {
            void 0 !== c && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");
            this.x = a.getX(b);
            this.y = a.getY(b);
            this.z = a.getZ(b);
            return this
        }
    });
    Object.assign(K.prototype,
    {
        isMatrix4: !0,
        set: function(a, b, c, d, e, f, g, h, k, m, q, l, p, r, n, t) {
            var y = this.elements;
            y[0] = a;
            y[4] = b;
            y[8] = c;
            y[12] = d;
            y[1] = e;
            y[5] = f;
            y[9] = g;
            y[13] = h;
            y[2] = k;
            y[6] = m;
            y[10] = q;
            y[14] = l;
            y[3] = p;
            y[7] = r;
            y[11] = n;
            y[15] = t;
            return this
        },
        identity: function() {
            this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            return this
        },
        clone: function() {
            return (new K).fromArray(this.elements)
        },
        copy: function(a) {
            var b = this.elements;
            a = a.elements;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            b[3] = a[3];
            b[4] = a[4];
            b[5] = a[5];
            b[6] = a[6];
            b[7] = a[7];
            b[8] = a[8];
            b[9] = a[9];
            b[10] = a[10];
            b[11] = a[11];
            b[12] = a[12];
            b[13] = a[13];
            b[14] = a[14];
            b[15] = a[15];
            return this
        },
        copyPosition: function(a) {
            var b = this.elements;
            a = a.elements;
            b[12] = a[12];
            b[13] = a[13];
            b[14] = a[14];
            return this
        },
        extractBasis: function(a, b, c) {
            a.setFromMatrixColumn(this, 0);
            b.setFromMatrixColumn(this, 1);
            c.setFromMatrixColumn(this, 2);
            return this
        },
        makeBasis: function(a, b, c) {
            this.set(a.x, b.x, c.x, 0, a.y, b.y, c.y, 0, a.z, b.z, c.z, 0, 0, 0, 0, 1);
            return this
        },
        extractRotation: function() {
            var a = new n;
            return function(b) {
                var c = this.elements,
                    d = b.elements,
                    e = 1 / a.setFromMatrixColumn(b, 0).length(),
                    f = 1 / a.setFromMatrixColumn(b, 1).length();
                b = 1 / a.setFromMatrixColumn(b, 2).length();
                c[0] = d[0] * e;
                c[1] = d[1] * e;
                c[2] = d[2] * e;
                c[4] = d[4] * f;
                c[5] = d[5] * f;
                c[6] = d[6] * f;
                c[8] = d[8] * b;
                c[9] = d[9] * b;
                c[10] = d[10] * b;
                return this
            }
        }(),
        makeRotationFromEuler: function(a) {
            a && a.isEuler || console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var b = this.elements,
                c = a.x,
                d = a.y,
                e = a.z,
                f = Math.cos(c),
                c = Math.sin(c),
                g = Math.cos(d),
                d = Math.sin(d),
                h = Math.cos(e),
                e = Math.sin(e);
            if ("XYZ" === a.order) {
                a = f * h;
                var k = f * e,
                    m = c * h,
                    q = c * e;
                b[0] = g * h;
                b[4] = -g * e;
                b[8] = d;
                b[1] = k + m * d;
                b[5] = a - q * d;
                b[9] = -c * g;
                b[2] = q - a * d;
                b[6] = m + k * d;
                b[10] = f * g
            } else
                "YXZ" === a.order ? (a = g * h, k = g * e, m = d * h, q = d * e, b[0] = a + q * c, b[4] = m * c - k, b[8] = f * d, b[1] = f * e, b[5] = f * h, b[9] = -c, b[2] = k * c - m, b[6] = q + a * c, b[10] = f * g) : "ZXY" === a.order ? (a = g * h, k = g * e, m = d * h, q = d * e, b[0] = a - q * c, b[4] = -f * e, b[8] = m + k * c, b[1] = k + m * c, b[5] = f * h, b[9] = q - a * c, b[2] = -f * d, b[6] = c, b[10] = f * g) : "ZYX" === a.order ? (a = f * h, k = f * e, m = c * h, q = c * e, b[0] = g * h, b[4] = m * d - k, b[8] = a *
                d + q, b[1] = g * e, b[5] = q * d + a, b[9] = k * d - m, b[2] = -d, b[6] = c * g, b[10] = f * g) : "YZX" === a.order ? (a = f * g, k = f * d, m = c * g, q = c * d, b[0] = g * h, b[4] = q - a * e, b[8] = m * e + k, b[1] = e, b[5] = f * h, b[9] = -c * h, b[2] = -d * h, b[6] = k * e + m, b[10] = a - q * e) : "XZY" === a.order && (a = f * g, k = f * d, m = c * g, q = c * d, b[0] = g * h, b[4] = -e, b[8] = d * h, b[1] = a * e + q, b[5] = f * h, b[9] = k * e - m, b[2] = m * e - k, b[6] = c * h, b[10] = q * e + a);
            b[3] = 0;
            b[7] = 0;
            b[11] = 0;
            b[12] = 0;
            b[13] = 0;
            b[14] = 0;
            b[15] = 1;
            return this
        },
        makeRotationFromQuaternion: function(a) {
            var b = this.elements,
                c = a._x,
                d = a._y,
                e = a._z,
                f = a._w,
                g = c + c,
                h = d + d,
                k = e + e;
            a =
            c * g;
            var m = c * h,
                c = c * k,
                q = d * h,
                d = d * k,
                e = e * k,
                g = f * g,
                h = f * h,
                f = f * k;
            b[0] = 1 - (q + e);
            b[4] = m - f;
            b[8] = c + h;
            b[1] = m + f;
            b[5] = 1 - (a + e);
            b[9] = d - g;
            b[2] = c - h;
            b[6] = d + g;
            b[10] = 1 - (a + q);
            b[3] = 0;
            b[7] = 0;
            b[11] = 0;
            b[12] = 0;
            b[13] = 0;
            b[14] = 0;
            b[15] = 1;
            return this
        },
        lookAt: function() {
            var a = new n,
                b = new n,
                c = new n;
            return function(d, e, f) {
                var g = this.elements;
                c.subVectors(d, e);
                0 === c.lengthSq() && (c.z = 1);
                c.normalize();
                a.crossVectors(f, c);
                0 === a.lengthSq() && (1 === Math.abs(f.z) ? c.x += 1E-4 : c.z += 1E-4, c.normalize(), a.crossVectors(f, c));
                a.normalize();
                b.crossVectors(c,
                a);
                g[0] = a.x;
                g[4] = b.x;
                g[8] = c.x;
                g[1] = a.y;
                g[5] = b.y;
                g[9] = c.y;
                g[2] = a.z;
                g[6] = b.z;
                g[10] = c.z;
                return this
            }
        }(),
        multiply: function(a, b) {
            return void 0 !== b ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(a, b)) : this.multiplyMatrices(this, a)
        },
        premultiply: function(a) {
            return this.multiplyMatrices(a, this)
        },
        multiplyMatrices: function(a, b) {
            var c = a.elements,
                d = b.elements,
                e = this.elements,
                f = c[0],
                g = c[4],
                h = c[8],
                k = c[12],
                m = c[1],
                q = c[5],
                l = c[9],
                p = c[13],
                r = c[2],
                n = c[6],
                t = c[10],
                y = c[14],
                x = c[3],
                u = c[7],
                H = c[11],
                c = c[15],
                w = d[0],
                I = d[4],
                W = d[8],
                D = d[12],
                O = d[1],
                B = d[5],
                F = d[9],
                C = d[13],
                z = d[2],
                E = d[6],
                G = d[10],
                K = d[14],
                P = d[3],
                M = d[7],
                V = d[11],
                d = d[15];
            e[0] = f * w + g * O + h * z + k * P;
            e[4] = f * I + g * B + h * E + k * M;
            e[8] = f * W + g * F + h * G + k * V;
            e[12] = f * D + g * C + h * K + k * d;
            e[1] = m * w + q * O + l * z + p * P;
            e[5] = m * I + q * B + l * E + p * M;
            e[9] = m * W + q * F + l * G + p * V;
            e[13] = m * D + q * C + l * K + p * d;
            e[2] = r * w + n * O + t * z + y * P;
            e[6] = r * I + n * B + t * E + y * M;
            e[10] = r * W + n * F + t * G + y * V;
            e[14] = r * D + n * C + t * K + y * d;
            e[3] = x * w + u * O + H * z + c * P;
            e[7] = x * I + u * B + H * E + c * M;
            e[11] = x * W + u * F + H * G +
            c * V;
            e[15] = x * D + u * C + H * K + c * d;
            return this
        },
        multiplyScalar: function(a) {
            var b = this.elements;
            b[0] *= a;
            b[4] *= a;
            b[8] *= a;
            b[12] *= a;
            b[1] *= a;
            b[5] *= a;
            b[9] *= a;
            b[13] *= a;
            b[2] *= a;
            b[6] *= a;
            b[10] *= a;
            b[14] *= a;
            b[3] *= a;
            b[7] *= a;
            b[11] *= a;
            b[15] *= a;
            return this
        },
        applyToBufferAttribute: function() {
            var a = new n;
            return function(b) {
                for (var c = 0, d = b.count; c < d; c++)
                    a.x = b.getX(c), a.y = b.getY(c), a.z = b.getZ(c), a.applyMatrix4(this), b.setXYZ(c, a.x, a.y, a.z);
                return b
            }
        }(),
        determinant: function() {
            var a = this.elements,
                b = a[0],
                c = a[4],
                d = a[8],
                e = a[12],
                f =
                a[1],
                g = a[5],
                h = a[9],
                k = a[13],
                m = a[2],
                q = a[6],
                l = a[10],
                p = a[14];
            return a[3] * (+e * h * q - d * k * q - e * g * l + c * k * l + d * g * p - c * h * p) + a[7] * (+b * h * p - b * k * l + e * f * l - d * f * p + d * k * m - e * h * m) + a[11] * (+b * k * q - b * g * p - e * f * q + c * f * p + e * g * m - c * k * m) + a[15] * (-d * g * m - b * h * q + b * g * l + d * f * q - c * f * l + c * h * m)
        },
        transpose: function() {
            var a = this.elements,
                b;
            b = a[1];
            a[1] = a[4];
            a[4] = b;
            b = a[2];
            a[2] = a[8];
            a[8] = b;
            b = a[6];
            a[6] = a[9];
            a[9] = b;
            b = a[3];
            a[3] = a[12];
            a[12] = b;
            b = a[7];
            a[7] = a[13];
            a[13] = b;
            b = a[11];
            a[11] = a[14];
            a[14] = b;
            return this
        },
        setPosition: function(a) {
            var b = this.elements;
            b[12] =
            a.x;
            b[13] = a.y;
            b[14] = a.z;
            return this
        },
        getInverse: function(a, b) {
            var c = this.elements,
                d = a.elements,
                e = d[0],
                f = d[1],
                g = d[2],
                h = d[3],
                k = d[4],
                m = d[5],
                q = d[6],
                l = d[7],
                p = d[8],
                r = d[9],
                n = d[10],
                t = d[11],
                y = d[12],
                x = d[13],
                u = d[14],
                d = d[15],
                H = r * u * l - x * n * l + x * q * t - m * u * t - r * q * d + m * n * d,
                w = y * n * l - p * u * l - y * q * t + k * u * t + p * q * d - k * n * d,
                I = p * x * l - y * r * l + y * m * t - k * x * t - p * m * d + k * r * d,
                W = y * r * q - p * x * q - y * m * n + k * x * n + p * m * u - k * r * u,
                D = e * H + f * w + g * I + h * W;
            if (0 === D) {
                if (!0 === b)
                    throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
                console.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
                return this.identity()
            }
            D = 1 / D;
            c[0] = H * D;
            c[1] = (x * n * h - r * u * h - x * g * t + f * u * t + r * g * d - f * n * d) * D;
            c[2] = (m * u * h - x * q * h + x * g * l - f * u * l - m * g * d + f * q * d) * D;
            c[3] = (r * q * h - m * n * h - r * g * l + f * n * l + m * g * t - f * q * t) * D;
            c[4] = w * D;
            c[5] = (p * u * h - y * n * h + y * g * t - e * u * t - p * g * d + e * n * d) * D;
            c[6] = (y * q * h - k * u * h - y * g * l + e * u * l + k * g * d - e * q * d) * D;
            c[7] = (k * n * h - p * q * h + p * g * l - e * n * l - k * g * t + e * q * t) * D;
            c[8] = I * D;
            c[9] = (y * r * h - p * x * h - y * f * t + e * x * t + p * f * d - e * r * d) * D;
            c[10] = (k * x * h - y * m * h + y * f * l - e * x * l - k * f * d + e * m * d) * D;
            c[11] = (p * m * h - k * r * h - p * f * l + e * r * l + k * f * t - e * m * t) * D;
            c[12] = W * D;
            c[13] = (p * x * g - y * r * g + y * f * n - e * x *
            n - p * f * u + e * r * u) * D;
            c[14] = (y * m * g - k * x * g - y * f * q + e * x * q + k * f * u - e * m * u) * D;
            c[15] = (k * r * g - p * m * g + p * f * q - e * r * q - k * f * n + e * m * n) * D;
            return this
        },
        scale: function(a) {
            var b = this.elements,
                c = a.x,
                d = a.y;
            a = a.z;
            b[0] *= c;
            b[4] *= d;
            b[8] *= a;
            b[1] *= c;
            b[5] *= d;
            b[9] *= a;
            b[2] *= c;
            b[6] *= d;
            b[10] *= a;
            b[3] *= c;
            b[7] *= d;
            b[11] *= a;
            return this
        },
        getMaxScaleOnAxis: function() {
            var a = this.elements;
            return Math.sqrt(Math.max(a[0] * a[0] + a[1] * a[1] + a[2] * a[2], a[4] * a[4] + a[5] * a[5] + a[6] * a[6], a[8] * a[8] + a[9] * a[9] + a[10] * a[10]))
        },
        makeTranslation: function(a, b, c) {
            this.set(1,
            0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1);
            return this
        },
        makeRotationX: function(a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1);
            return this
        },
        makeRotationY: function(a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1);
            return this
        },
        makeRotationZ: function(a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            return this
        },
        makeRotationAxis: function(a, b) {
            var c = Math.cos(b),
                d = Math.sin(b),
                e = 1 - c,
                f = a.x,
                g = a.y,
                h = a.z,
                k = e * f,
                m = e * g;
            this.set(k * f + c, k *
            g - d * h, k * h + d * g, 0, k * g + d * h, m * g + c, m * h - d * f, 0, k * h - d * g, m * h + d * f, e * h * h + c, 0, 0, 0, 0, 1);
            return this
        },
        makeScale: function(a, b, c) {
            this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1);
            return this
        },
        makeShear: function(a, b, c) {
            this.set(1, b, c, 0, a, 1, c, 0, a, b, 1, 0, 0, 0, 0, 1);
            return this
        },
        compose: function(a, b, c) {
            this.makeRotationFromQuaternion(b);
            this.scale(c);
            this.setPosition(a);
            return this
        },
        decompose: function() {
            var a = new n,
                b = new K;
            return function(c, d, e) {
                var f = this.elements,
                    g = a.set(f[0], f[1], f[2]).length(),
                    h = a.set(f[4], f[5], f[6]).length(),
                    k = a.set(f[8], f[9], f[10]).length();
                0 > this.determinant() && (g = -g);
                c.x = f[12];
                c.y = f[13];
                c.z = f[14];
                b.copy(this);
                c = 1 / g;
                var f = 1 / h,
                    m = 1 / k;
                b.elements[0] *= c;
                b.elements[1] *= c;
                b.elements[2] *= c;
                b.elements[4] *= f;
                b.elements[5] *= f;
                b.elements[6] *= f;
                b.elements[8] *= m;
                b.elements[9] *= m;
                b.elements[10] *= m;
                d.setFromRotationMatrix(b);
                e.x = g;
                e.y = h;
                e.z = k;
                return this
            }
        }(),
        makePerspective: function(a, b, c, d, e, f) {
            void 0 === f && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            var g = this.elements;
            g[0] = 2 * e / (b - a);
            g[4] = 0;
            g[8] = (b + a) / (b - a);
            g[12] = 0;
            g[1] = 0;
            g[5] = 2 * e / (c - d);
            g[9] = (c + d) / (c - d);
            g[13] = 0;
            g[2] = 0;
            g[6] = 0;
            g[10] = -(f + e) / (f - e);
            g[14] = -2 * f * e / (f - e);
            g[3] = 0;
            g[7] = 0;
            g[11] = -1;
            g[15] = 0;
            return this
        },
        makeOrthographic: function(a, b, c, d, e, f) {
            var g = this.elements,
                h = 1 / (b - a),
                k = 1 / (c - d),
                m = 1 / (f - e);
            g[0] = 2 * h;
            g[4] = 0;
            g[8] = 0;
            g[12] = -((b + a) * h);
            g[1] = 0;
            g[5] = 2 * k;
            g[9] = 0;
            g[13] = -((c + d) * k);
            g[2] = 0;
            g[6] = 0;
            g[10] = -2 * m;
            g[14] = -((f + e) * m);
            g[3] = 0;
            g[7] = 0;
            g[11] = 0;
            g[15] = 1;
            return this
        },
        equals: function(a) {
            var b = this.elements;
            a = a.elements;
            for (var c = 0; 16 > c; c++)
                if (b[c] !== a[c])
                    return !1;
            return !0
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            for (var c = 0; 16 > c; c++)
                this.elements[c] = a[c + b];
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            var c = this.elements;
            a[b] = c[0];
            a[b + 1] = c[1];
            a[b + 2] = c[2];
            a[b + 3] = c[3];
            a[b + 4] = c[4];
            a[b + 5] = c[5];
            a[b + 6] = c[6];
            a[b + 7] = c[7];
            a[b + 8] = c[8];
            a[b + 9] = c[9];
            a[b + 10] = c[10];
            a[b + 11] = c[11];
            a[b + 12] = c[12];
            a[b + 13] = c[13];
            a[b + 14] = c[14];
            a[b + 15] = c[15];
            return a
        }
    });
    db.prototype = Object.create(ba.prototype);
    db.prototype.constructor = db;
    db.prototype.isDataTexture = !0;
    Xa.prototype = Object.create(ba.prototype);
    Xa.prototype.constructor = Xa;
    Xa.prototype.isCubeTexture = !0;
    Object.defineProperty(Xa.prototype, "images", {
        get: function() {
            return this.image
        },
        set: function(a) {
            this.image = a
        }
    });
    var Ce = new ba,
        De = new Xa,
        xe = [],
        ze = [],
        Be = new Float32Array(16),
        Ae = new Float32Array(9);
    He.prototype.setValue = function(a, b) {
        for (var c = this.seq, d = 0, e = c.length; d !== e; ++d) {
            var f = c[d];
            f.setValue(a, b[f.id])
        }
    };
    var Pd = /([\w\d_]+)(\])?(\[|\.)?/g;
    eb.prototype.setValue = function(a, b, c) {
        b = this.map[b];
        void 0 !== b && b.setValue(a, c, this.renderer)
    };
    eb.prototype.setOptional = function(a, b, c) {
        b = b[c];
        void 0 !== b && this.setValue(a, c, b)
    };
    eb.upload = function(a, b, c, d) {
        for (var e = 0, f = b.length; e !== f; ++e) {
            var g = b[e],
                h = c[g.id];
            !1 !== h.needsUpdate && g.setValue(a, h.value, d)
        }
    };
    eb.seqWithValue = function(a, b) {
        for (var c = [], d = 0, e = a.length; d !== e; ++d) {
            var f = a[d];
            f.id in b && c.push(f)
        }
        return c
    };
    var lg = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    Object.assign(G.prototype, {
        isColor: !0,
        r: 1,
        g: 1,
        b: 1,
        set: function(a) {
            a && a.isColor ? this.copy(a) : "number" === typeof a ? this.setHex(a) : "string" === typeof a && this.setStyle(a);
            return this
        },
        setScalar: function(a) {
            this.b = this.g = this.r = a;
            return this
        },
        setHex: function(a) {
            a = Math.floor(a);
            this.r = (a >> 16 & 255) / 255;
            this.g = (a >> 8 & 255) / 255;
            this.b = (a & 255) / 255;
            return this
        },
        setRGB: function(a, b, c) {
            this.r = a;
            this.g = b;
            this.b = c;
            return this
        },
        setHSL: function() {
            function a(a, c, d) {
                0 > d && (d += 1);
                1 < d &&
                --d;
                return d < 1 / 6 ? a + 6 * (c - a) * d : .5 > d ? c : d < 2 / 3 ? a + 6 * (c - a) * (2 / 3 - d) : a
            }
            return function(b, c, d) {
                b = Y.euclideanModulo(b, 1);
                c = Y.clamp(c, 0, 1);
                d = Y.clamp(d, 0, 1);
                0 === c ? this.r = this.g = this.b = d : (c = .5 >= d ? d * (1 + c) : d + c - d * c, d = 2 * d - c, this.r = a(d, c, b + 1 / 3), this.g = a(d, c, b), this.b = a(d, c, b - 1 / 3));
                return this
            }
        }(),
        setStyle: function(a) {
            function b(b) {
                void 0 !== b && 1 > parseFloat(b) && console.warn("THREE.Color: Alpha component of " + a + " will be ignored.")
            }
            var c;
            if (c = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)) {
                var d = c[2];
                switch (c[1]) {
                case "rgb":
                case "rgba":
                    if (c =
                    /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))
                        return this.r = Math.min(255, parseInt(c[1], 10)) / 255, this.g = Math.min(255, parseInt(c[2], 10)) / 255, this.b = Math.min(255, parseInt(c[3], 10)) / 255, b(c[5]), this;
                    if (c = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))
                        return this.r = Math.min(100, parseInt(c[1], 10)) / 100, this.g = Math.min(100, parseInt(c[2], 10)) / 100, this.b = Math.min(100, parseInt(c[3], 10)) / 100, b(c[5]), this;
                    break;
                case "hsl":
                case "hsla":
                    if (c = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) {
                        var d =
                            parseFloat(c[1]) / 360,
                            e = parseInt(c[2], 10) / 100,
                            f = parseInt(c[3], 10) / 100;
                        b(c[5]);
                        return this.setHSL(d, e, f)
                    }
                }
            } else if (c = /^\#([A-Fa-f0-9]+)$/.exec(a)) {
                c = c[1];
                d = c.length;
                if (3 === d)
                    return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255, this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255, this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255, this;
                if (6 === d)
                    return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255, this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255, this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255, this
            }
            a && 0 < a.length &&
            (c = lg[a], void 0 !== c ? this.setHex(c) : console.warn("THREE.Color: Unknown color " + a));
            return this
        },
        clone: function() {
            return new this.constructor(this.r, this.g, this.b)
        },
        copy: function(a) {
            this.r = a.r;
            this.g = a.g;
            this.b = a.b;
            return this
        },
        copyGammaToLinear: function(a, b) {
            void 0 === b && (b = 2);
            this.r = Math.pow(a.r, b);
            this.g = Math.pow(a.g, b);
            this.b = Math.pow(a.b, b);
            return this
        },
        copyLinearToGamma: function(a, b) {
            void 0 === b && (b = 2);
            var c = 0 < b ? 1 / b : 1;
            this.r = Math.pow(a.r, c);
            this.g = Math.pow(a.g, c);
            this.b = Math.pow(a.b, c);
            return this
        },
        convertGammaToLinear: function() {
            var a = this.r,
                b = this.g,
                c = this.b;
            this.r = a * a;
            this.g = b * b;
            this.b = c * c;
            return this
        },
        convertLinearToGamma: function() {
            this.r = Math.sqrt(this.r);
            this.g = Math.sqrt(this.g);
            this.b = Math.sqrt(this.b);
            return this
        },
        getHex: function() {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        getHexString: function() {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        },
        getHSL: function(a) {
            a = a || {
                h: 0,
                s: 0,
                l: 0
            };
            var b = this.r,
                c = this.g,
                d = this.b,
                e = Math.max(b, c, d),
                f = Math.min(b, c, d),
                g,
                h = (f + e) / 2;
            if (f ===
            e)
                f = g = 0;
            else {
                var k = e - f,
                    f = .5 >= h ? k / (e + f) : k / (2 - e - f);
                switch (e) {
                case b:
                    g = (c - d) / k + (c < d ? 6 : 0);
                    break;
                case c:
                    g = (d - b) / k + 2;
                    break;
                case d:
                    g = (b - c) / k + 4
                }
                g /= 6
            }
            a.h = g;
            a.s = f;
            a.l = h;
            return a
        },
        getStyle: function() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        },
        offsetHSL: function(a, b, c) {
            var d = this.getHSL();
            d.h += a;
            d.s += b;
            d.l += c;
            this.setHSL(d.h, d.s, d.l);
            return this
        },
        add: function(a) {
            this.r += a.r;
            this.g += a.g;
            this.b += a.b;
            return this
        },
        addColors: function(a, b) {
            this.r = a.r + b.r;
            this.g = a.g + b.g;
            this.b = a.b + b.b;
            return this
        },
        addScalar: function(a) {
            this.r += a;
            this.g += a;
            this.b += a;
            return this
        },
        sub: function(a) {
            this.r = Math.max(0, this.r - a.r);
            this.g = Math.max(0, this.g - a.g);
            this.b = Math.max(0, this.b - a.b);
            return this
        },
        multiply: function(a) {
            this.r *= a.r;
            this.g *= a.g;
            this.b *= a.b;
            return this
        },
        multiplyScalar: function(a) {
            this.r *= a;
            this.g *= a;
            this.b *= a;
            return this
        },
        lerp: function(a, b) {
            this.r += (a.r - this.r) * b;
            this.g += (a.g - this.g) * b;
            this.b += (a.b - this.b) * b;
            return this
        },
        equals: function(a) {
            return a.r === this.r && a.g === this.g && a.b === this.b
        },
        fromArray: function(a,
        b) {
            void 0 === b && (b = 0);
            this.r = a[b];
            this.g = a[b + 1];
            this.b = a[b + 2];
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this.r;
            a[b + 1] = this.g;
            a[b + 2] = this.b;
            return a
        },
        toJSON: function() {
            return this.getHex()
        }
    });
    var R = {
            common: {
                diffuse: {
                    value: new G(15658734)
                },
                opacity: {
                    value: 1
                },
                map: {
                    value: null
                },
                offsetRepeat: {
                    value: new fa(0, 0, 1, 1)
                },
                specularMap: {
                    value: null
                },
                alphaMap: {
                    value: null
                },
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                },
                reflectivity: {
                    value: 1
                },
                refractionRatio: {
                    value: .98
                }
            },
            aomap: {
                aoMap: {
                    value: null
                },
                aoMapIntensity: {
                    value: 1
                }
            },
            lightmap: {
                lightMap: {
                    value: null
                },
                lightMapIntensity: {
                    value: 1
                }
            },
            emissivemap: {
                emissiveMap: {
                    value: null
                }
            },
            bumpmap: {
                bumpMap: {
                    value: null
                },
                bumpScale: {
                    value: 1
                }
            },
            normalmap: {
                normalMap: {
                    value: null
                },
                normalScale: {
                    value: new C(1, 1)
                }
            },
            displacementmap: {
                displacementMap: {
                    value: null
                },
                displacementScale: {
                    value: 1
                },
                displacementBias: {
                    value: 0
                }
            },
            roughnessmap: {
                roughnessMap: {
                    value: null
                }
            },
            metalnessmap: {
                metalnessMap: {
                    value: null
                }
            },
            gradientmap: {
                gradientMap: {
                    value: null
                }
            },
            fog: {
                fogDensity: {
                    value: 2.5E-4
                },
                fogNear: {
                    value: 1
                },
                fogFar: {
                    value: 2E3
                },
                fogColor: {
                    value: new G(16777215)
                }
            },
            lights: {
                ambientLightColor: {
                    value: []
                },
                directionalLights: {
                    value: [],
                    properties: {
                        direction: {},
                        color: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                directionalShadowMap: {
                    value: []
                },
                directionalShadowMatrix: {
                    value: []
                },
                spotLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        direction: {},
                        distance: {},
                        coneCos: {},
                        penumbraCos: {},
                        decay: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                spotShadowMap: {
                    value: []
                },
                spotShadowMatrix: {
                    value: []
                },
                pointLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        decay: {},
                        distance: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                pointShadowMap: {
                    value: []
                },
                pointShadowMatrix: {
                    value: []
                },
                hemisphereLights: {
                    value: [],
                    properties: {
                        direction: {},
                        skyColor: {},
                        groundColor: {}
                    }
                },
                rectAreaLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        width: {},
                        height: {}
                    }
                }
            },
            points: {
                diffuse: {
                    value: new G(15658734)
                },
                opacity: {
                    value: 1
                },
                size: {
                    value: 1
                },
                scale: {
                    value: 1
                },
                map: {
                    value: null
                },
                offsetRepeat: {
                    value: new fa(0, 0, 1, 1)
                }
            }
        },
        Ca = {
            merge: function(a) {
                for (var b =
                    {}, c = 0; c < a.length; c++) {
                    var d = this.clone(a[c]),
                        e;
                    for (e in d)
                        b[e] = d[e]
                }
                return b
            },
            clone: function(a) {
                var b = {},
                    c;
                for (c in a) {
                    b[c] = {};
                    for (var d in a[c]) {
                        var e = a[c][d];
                        e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture) ? b[c][d] = e.clone() : Array.isArray(e) ? b[c][d] = e.slice() : b[c][d] = e
                    }
                }
                return b
            }
        },
        X = {
            alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
            alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
            alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
            aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
            aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
            begin_vertex: "\nvec3 transformed = vec3( position );\n",
            beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n",
            bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.86267 + (0.49788 + 0.01436 * y ) * y;\n\tfloat b = 3.45068 + (4.18814 + y) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = (x > 0.0) ? v : 0.5 * inversesqrt( 1.0 - x * x ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tvec3 result = vec3( LTC_ClippedSphereFormFactor( vectorFormFactor ) );\n\treturn result;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
            bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
            clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n",
            clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
            clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",
            clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
            color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
            color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
            color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
            color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
            common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transpose( const in mat3 v ) {\n\tmat3 tmp;\n\ttmp[0] = vec3(v[0].x, v[1].x, v[2].x);\n\ttmp[1] = vec3(v[0].y, v[1].y, v[2].y);\n\ttmp[2] = vec3(v[0].z, v[1].z, v[2].z);\n\treturn tmp;\n}\n",
            cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
            defaultnormal_vertex: "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n",
            displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
            displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
            emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
            emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
            encodings_fragment: "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
            encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",
            envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = asin( flipNormal * reflectVec.y ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
            envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
            envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",
            envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
            fog_vertex: "\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",
            fog_pars_vertex: "#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",
            fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
            fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
            gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",
            lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
            lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
            lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
            lights_pars: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
            lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
            lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
            lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
            lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tfloat norm = texture2D( ltcMag, uv ).a;\n\t\tvec4 t = texture2D( ltcMat, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3(   1,   0, t.y ),\n\t\t\tvec3(   0, t.z,   0 ),\n\t\t\tvec3( t.w,   0, t.x )\n\t\t);\n\t\treflectedLight.directSpecular += lightColor * material.specularColor * norm * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
            lights_template: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
            logdepthbuf_fragment: "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif",
            logdepthbuf_pars_fragment: "#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",
            logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",
            logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n",
            map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
            map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
            map_particle_fragment: "#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
            map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n",
            metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",
            metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
            morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
            morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
            morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
            normal_flip: "#ifdef DOUBLE_SIDED\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n\tfloat flipNormal = 1.0;\n#endif\n",
            normal_fragment: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
            normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
            packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
            premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
            project_vertex: "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",
            dithering_fragment: "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",
            dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
            roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",
            roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
            shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
            shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
            shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
            shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
            skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
            skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
            skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",
            skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
            specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
            specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
            tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
            tonemapping_pars_fragment: "#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
            uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
            uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n",
            uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",
            uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
            uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
            uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
            worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",
            cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
            cube_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
            depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
            depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
            distanceRGBA_frag: "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n",
            distanceRGBA_vert: "varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition;\n}\n",
            equirect_frag: "uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
            equirect_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
            linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
            linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
            meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
            meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
            meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
            meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
            meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
            meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
            normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
            points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
            points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            shadow_frag: "uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0 - getShadowMask() ) );\n}\n",
            shadow_vert: "#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n"
        },
        $a = {
            basic: {
                uniforms: Ca.merge([R.common,
                R.aomap, R.lightmap, R.fog]),
                vertexShader: X.meshbasic_vert,
                fragmentShader: X.meshbasic_frag
            },
            lambert: {
                uniforms: Ca.merge([R.common, R.aomap, R.lightmap, R.emissivemap, R.fog, R.lights, {
                    emissive: {
                        value: new G(0)
                    }
                }]),
                vertexShader: X.meshlambert_vert,
                fragmentShader: X.meshlambert_frag
            },
            phong: {
                uniforms: Ca.merge([R.common, R.aomap, R.lightmap, R.emissivemap, R.bumpmap, R.normalmap, R.displacementmap, R.gradientmap, R.fog, R.lights, {
                    emissive: {
                        value: new G(0)
                    },
                    specular: {
                        value: new G(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }]),
                vertexShader: X.meshphong_vert,
                fragmentShader: X.meshphong_frag
            },
            standard: {
                uniforms: Ca.merge([R.common, R.aomap, R.lightmap, R.emissivemap, R.bumpmap, R.normalmap, R.displacementmap, R.roughnessmap, R.metalnessmap, R.fog, R.lights, {
                    emissive: {
                        value: new G(0)
                    },
                    roughness: {
                        value: .5
                    },
                    metalness: {
                        value: .5
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }]),
                vertexShader: X.meshphysical_vert,
                fragmentShader: X.meshphysical_frag
            },
            points: {
                uniforms: Ca.merge([R.points, R.fog]),
                vertexShader: X.points_vert,
                fragmentShader: X.points_frag
            },
            dashed: {
                uniforms: Ca.merge([R.common, R.fog, {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }]),
                vertexShader: X.linedashed_vert,
                fragmentShader: X.linedashed_frag
            },
            depth: {
                uniforms: Ca.merge([R.common, R.displacementmap]),
                vertexShader: X.depth_vert,
                fragmentShader: X.depth_frag
            },
            normal: {
                uniforms: Ca.merge([R.common, R.bumpmap, R.normalmap, R.displacementmap, {
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: X.normal_vert,
                fragmentShader: X.normal_frag
            },
            cube: {
                uniforms: {
                    tCube: {
                        value: null
                    },
                    tFlip: {
                        value: -1
                    },
                    opacity: {
                        value: 1
                    }
                },
                vertexShader: X.cube_vert,
                fragmentShader: X.cube_frag
            },
            equirect: {
                uniforms: {
                    tEquirect: {
                        value: null
                    },
                    tFlip: {
                        value: -1
                    }
                },
                vertexShader: X.equirect_vert,
                fragmentShader: X.equirect_frag
            },
            distanceRGBA: {
                uniforms: {
                    lightPos: {
                        value: new n
                    }
                },
                vertexShader: X.distanceRGBA_vert,
                fragmentShader: X.distanceRGBA_frag
            }
        };
    $a.physical = {
        uniforms: Ca.merge([$a.standard.uniforms, {
            clearCoat: {
                value: 0
            },
            clearCoatRoughness: {
                value: 0
            }
        }]),
        vertexShader: X.meshphysical_vert,
        fragmentShader: X.meshphysical_frag
    };
    Object.assign(fd.prototype, {
        set: function(a, b) {
            this.min.copy(a);
            this.max.copy(b);
            return this
        },
        setFromPoints: function(a) {
            this.makeEmpty();
            for (var b = 0, c = a.length; b < c; b++)
                this.expandByPoint(a[b]);
            return this
        },
        setFromCenterAndSize: function() {
            var a = new C;
            return function(b, c) {
                var d = a.copy(c).multiplyScalar(.5);
                this.min.copy(b).sub(d);
                this.max.copy(b).add(d);
                return this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.min.copy(a.min);
            this.max.copy(a.max);
            return this
        },
        makeEmpty: function() {
            this.min.x = this.min.y = Infinity;
            this.max.x = this.max.y = -Infinity;
            return this
        },
        isEmpty: function() {
            return this.max.x < this.min.x ||
                this.max.y < this.min.y
        },
        getCenter: function(a) {
            a = a || new C;
            return this.isEmpty() ? a.set(0, 0) : a.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(a) {
            a = a || new C;
            return this.isEmpty() ? a.set(0, 0) : a.subVectors(this.max, this.min)
        },
        expandByPoint: function(a) {
            this.min.min(a);
            this.max.max(a);
            return this
        },
        expandByVector: function(a) {
            this.min.sub(a);
            this.max.add(a);
            return this
        },
        expandByScalar: function(a) {
            this.min.addScalar(-a);
            this.max.addScalar(a);
            return this
        },
        containsPoint: function(a) {
            return a.x <
            this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y ? !1 : !0
        },
        containsBox: function(a) {
            return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y
        },
        getParameter: function(a, b) {
            return (b || new C).set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y))
        },
        intersectsBox: function(a) {
            return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y ? !1 : !0
        },
        clampPoint: function(a, b) {
            return (b || new C).copy(a).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var a = new C;
            return function(b) {
                return a.copy(b).clamp(this.min, this.max).sub(b).length()
            }
        }(),
        intersect: function(a) {
            this.min.max(a.min);
            this.max.min(a.max);
            return this
        },
        union: function(a) {
            this.min.min(a.min);
            this.max.max(a.max);
            return this
        },
        translate: function(a) {
            this.min.add(a);
            this.max.add(a);
            return this
        },
        equals: function(a) {
            return a.min.equals(this.min) && a.max.equals(this.max)
        }
    });
    var Jf = 0;
    Object.assign(U.prototype, xa.prototype, {
        isMaterial: !0,
        onBeforeCompile: function() {},
        setValues: function(a) {
            if (void 0 !== a)
                for (var b in a) {
                    var c = a[b];
                    if (void 0 === c)
                        console.warn("THREE.Material: '" + b + "' parameter is undefined.");
                    else {
                        var d = this[b];
                        void 0 === d ? console.warn("THREE." + this.type + ": '" + b + "' is not a property of this material.") : d && d.isColor ? d.set(c) : d && d.isVector3 && c && c.isVector3 ? d.copy(c) : this[b] = "overdraw" === b ? Number(c) : c
                    }
                }
        },
        toJSON: function(a) {
            function b(a) {
                var b = [],
                    c;
                for (c in a) {
                    var d = a[c];
                    delete d.metadata;
                    b.push(d)
                }
                return b
            }
            var c = void 0 === a;
            c && (a = {
                textures: {},
                images: {}
            });
            var d = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            d.uuid = this.uuid;
            d.type = this.type;
            "" !== this.name && (d.name = this.name);
            this.color && this.color.isColor && (d.color = this.color.getHex());
            void 0 !== this.roughness && (d.roughness = this.roughness);
            void 0 !== this.metalness && (d.metalness = this.metalness);
            this.emissive && this.emissive.isColor && (d.emissive = this.emissive.getHex());
            this.specular && this.specular.isColor && (d.specular = this.specular.getHex());
            void 0 !== this.shininess && (d.shininess = this.shininess);
            void 0 !== this.clearCoat && (d.clearCoat = this.clearCoat);
            void 0 !== this.clearCoatRoughness && (d.clearCoatRoughness = this.clearCoatRoughness);
            this.map && this.map.isTexture && (d.map = this.map.toJSON(a).uuid);
            this.alphaMap && this.alphaMap.isTexture && (d.alphaMap = this.alphaMap.toJSON(a).uuid);
            this.lightMap && this.lightMap.isTexture && (d.lightMap = this.lightMap.toJSON(a).uuid);
            this.bumpMap && this.bumpMap.isTexture && (d.bumpMap = this.bumpMap.toJSON(a).uuid, d.bumpScale = this.bumpScale);
            this.normalMap && this.normalMap.isTexture &&
            (d.normalMap = this.normalMap.toJSON(a).uuid, d.normalScale = this.normalScale.toArray());
            this.displacementMap && this.displacementMap.isTexture && (d.displacementMap = this.displacementMap.toJSON(a).uuid, d.displacementScale = this.displacementScale, d.displacementBias = this.displacementBias);
            this.roughnessMap && this.roughnessMap.isTexture && (d.roughnessMap = this.roughnessMap.toJSON(a).uuid);
            this.metalnessMap && this.metalnessMap.isTexture && (d.metalnessMap = this.metalnessMap.toJSON(a).uuid);
            this.emissiveMap && this.emissiveMap.isTexture &&
            (d.emissiveMap = this.emissiveMap.toJSON(a).uuid);
            this.specularMap && this.specularMap.isTexture && (d.specularMap = this.specularMap.toJSON(a).uuid);
            this.envMap && this.envMap.isTexture && (d.envMap = this.envMap.toJSON(a).uuid, d.reflectivity = this.reflectivity);
            this.gradientMap && this.gradientMap.isTexture && (d.gradientMap = this.gradientMap.toJSON(a).uuid);
            void 0 !== this.size && (d.size = this.size);
            void 0 !== this.sizeAttenuation && (d.sizeAttenuation = this.sizeAttenuation);
            1 !== this.blending && (d.blending = this.blending);
            2 !==
            this.shading && (d.shading = this.shading);
            0 !== this.side && (d.side = this.side);
            0 !== this.vertexColors && (d.vertexColors = this.vertexColors);
            1 > this.opacity && (d.opacity = this.opacity);
            !0 === this.transparent && (d.transparent = this.transparent);
            d.depthFunc = this.depthFunc;
            d.depthTest = this.depthTest;
            d.depthWrite = this.depthWrite;
            0 < this.alphaTest && (d.alphaTest = this.alphaTest);
            !0 === this.premultipliedAlpha && (d.premultipliedAlpha = this.premultipliedAlpha);
            !0 === this.wireframe && (d.wireframe = this.wireframe);
            1 < this.wireframeLinewidth &&
            (d.wireframeLinewidth = this.wireframeLinewidth);
            "round" !== this.wireframeLinecap && (d.wireframeLinecap = this.wireframeLinecap);
            "round" !== this.wireframeLinejoin && (d.wireframeLinejoin = this.wireframeLinejoin);
            d.skinning = this.skinning;
            d.morphTargets = this.morphTargets;
            d.dithering = this.dithering;
            c && (c = b(a.textures), a = b(a.images), 0 < c.length && (d.textures = c), 0 < a.length && (d.images = a));
            return d
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.name = a.name;
            this.fog = a.fog;
            this.lights =
            a.lights;
            this.blending = a.blending;
            this.side = a.side;
            this.shading = a.shading;
            this.vertexColors = a.vertexColors;
            this.opacity = a.opacity;
            this.transparent = a.transparent;
            this.blendSrc = a.blendSrc;
            this.blendDst = a.blendDst;
            this.blendEquation = a.blendEquation;
            this.blendSrcAlpha = a.blendSrcAlpha;
            this.blendDstAlpha = a.blendDstAlpha;
            this.blendEquationAlpha = a.blendEquationAlpha;
            this.depthFunc = a.depthFunc;
            this.depthTest = a.depthTest;
            this.depthWrite = a.depthWrite;
            this.colorWrite = a.colorWrite;
            this.precision = a.precision;
            this.polygonOffset =
            a.polygonOffset;
            this.polygonOffsetFactor = a.polygonOffsetFactor;
            this.polygonOffsetUnits = a.polygonOffsetUnits;
            this.dithering = a.dithering;
            this.alphaTest = a.alphaTest;
            this.premultipliedAlpha = a.premultipliedAlpha;
            this.overdraw = a.overdraw;
            this.visible = a.visible;
            this.clipShadows = a.clipShadows;
            this.clipIntersection = a.clipIntersection;
            a = a.clippingPlanes;
            var b = null;
            if (null !== a)
                for (var c = a.length, b = Array(c), d = 0; d !== c; ++d)
                    b[d] = a[d].clone();
            this.clippingPlanes = b;
            return this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    });
    ra.prototype = Object.create(U.prototype);
    ra.prototype.constructor = ra;
    ra.prototype.isShaderMaterial = !0;
    ra.prototype.copy = function(a) {
        U.prototype.copy.call(this, a);
        this.fragmentShader = a.fragmentShader;
        this.vertexShader = a.vertexShader;
        this.uniforms = Ca.clone(a.uniforms);
        this.defines = a.defines;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.lights = a.lights;
        this.clipping = a.clipping;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        this.extensions =
        a.extensions;
        return this
    };
    ra.prototype.toJSON = function(a) {
        a = U.prototype.toJSON.call(this, a);
        a.uniforms = this.uniforms;
        a.vertexShader = this.vertexShader;
        a.fragmentShader = this.fragmentShader;
        return a
    };
    Za.prototype = Object.create(U.prototype);
    Za.prototype.constructor = Za;
    Za.prototype.isMeshDepthMaterial = !0;
    Za.prototype.copy = function(a) {
        U.prototype.copy.call(this, a);
        this.depthPacking = a.depthPacking;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.map = a.map;
        this.alphaMap = a.alphaMap;
        this.displacementMap =
        a.displacementMap;
        this.displacementScale = a.displacementScale;
        this.displacementBias = a.displacementBias;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        return this
    };
    Object.assign(Ra.prototype, {
        isBox3: !0,
        set: function(a, b) {
            this.min.copy(a);
            this.max.copy(b);
            return this
        },
        setFromArray: function(a) {
            for (var b = Infinity, c = Infinity, d = Infinity, e = -Infinity, f = -Infinity, g = -Infinity, h = 0, k = a.length; h < k; h += 3) {
                var m = a[h],
                    q = a[h + 1],
                    l = a[h + 2];
                m < b && (b = m);
                q < c && (c = q);
                l < d && (d = l);
                m > e && (e = m);
                q > f && (f = q);
                l > g && (g = l)
            }
            this.min.set(b, c, d);
            this.max.set(e, f, g);
            return this
        },
        setFromBufferAttribute: function(a) {
            for (var b = Infinity, c = Infinity, d = Infinity, e = -Infinity, f = -Infinity, g = -Infinity, h = 0, k = a.count; h < k; h++) {
                var m = a.getX(h),
                    q = a.getY(h),
                    l = a.getZ(h);
                m < b && (b = m);
                q < c && (c = q);
                l < d && (d = l);
                m > e && (e = m);
                q > f && (f = q);
                l > g && (g = l)
            }
            this.min.set(b, c, d);
            this.max.set(e, f, g);
            return this
        },
        setFromPoints: function(a) {
            this.makeEmpty();
            for (var b = 0, c = a.length; b < c; b++)
                this.expandByPoint(a[b]);
            return this
        },
        setFromCenterAndSize: function() {
            var a =
            new n;
            return function(b, c) {
                var d = a.copy(c).multiplyScalar(.5);
                this.min.copy(b).sub(d);
                this.max.copy(b).add(d);
                return this
            }
        }(),
        setFromObject: function(a) {
            this.makeEmpty();
            return this.expandByObject(a)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.min.copy(a.min);
            this.max.copy(a.max);
            return this
        },
        makeEmpty: function() {
            this.min.x = this.min.y = this.min.z = Infinity;
            this.max.x = this.max.y = this.max.z = -Infinity;
            return this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y <
                this.min.y || this.max.z < this.min.z
        },
        getCenter: function(a) {
            a = a || new n;
            return this.isEmpty() ? a.set(0, 0, 0) : a.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(a) {
            a = a || new n;
            return this.isEmpty() ? a.set(0, 0, 0) : a.subVectors(this.max, this.min)
        },
        expandByPoint: function(a) {
            this.min.min(a);
            this.max.max(a);
            return this
        },
        expandByVector: function(a) {
            this.min.sub(a);
            this.max.add(a);
            return this
        },
        expandByScalar: function(a) {
            this.min.addScalar(-a);
            this.max.addScalar(a);
            return this
        },
        expandByObject: function() {
            var a =
            new n;
            return function(b) {
                var c = this;
                b.updateMatrixWorld(!0);
                b.traverse(function(b) {
                    var e,
                        f;
                    e = b.geometry;
                    if (void 0 !== e)
                        if (e.isGeometry) {
                            var g = e.vertices;
                            e = 0;
                            for (f = g.length; e < f; e++)
                                a.copy(g[e]), a.applyMatrix4(b.matrixWorld), c.expandByPoint(a)
                        } else if (e.isBufferGeometry && (g = e.attributes.position, void 0 !== g))
                            for (e = 0, f = g.count; e < f; e++)
                                a.fromBufferAttribute(g, e).applyMatrix4(b.matrixWorld), c.expandByPoint(a)
                });
                return this
            }
        }(),
        containsPoint: function(a) {
            return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y ||
            a.y > this.max.y || a.z < this.min.z || a.z > this.max.z ? !1 : !0
        },
        containsBox: function(a) {
            return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z
        },
        getParameter: function(a, b) {
            return (b || new n).set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z))
        },
        intersectsBox: function(a) {
            return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y || a.max.z <
            this.min.z || a.min.z > this.max.z ? !1 : !0
        },
        intersectsSphere: function() {
            var a = new n;
            return function(b) {
                this.clampPoint(b.center, a);
                return a.distanceToSquared(b.center) <= b.radius * b.radius
            }
        }(),
        intersectsPlane: function(a) {
            var b,
                c;
            0 < a.normal.x ? (b = a.normal.x * this.min.x, c = a.normal.x * this.max.x) : (b = a.normal.x * this.max.x, c = a.normal.x * this.min.x);
            0 < a.normal.y ? (b += a.normal.y * this.min.y, c += a.normal.y * this.max.y) : (b += a.normal.y * this.max.y, c += a.normal.y * this.min.y);
            0 < a.normal.z ? (b += a.normal.z * this.min.z, c += a.normal.z *
            this.max.z) : (b += a.normal.z * this.max.z, c += a.normal.z * this.min.z);
            return b <= a.constant && c >= a.constant
        },
        clampPoint: function(a, b) {
            return (b || new n).copy(a).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var a = new n;
            return function(b) {
                return a.copy(b).clamp(this.min, this.max).sub(b).length()
            }
        }(),
        getBoundingSphere: function() {
            var a = new n;
            return function(b) {
                b = b || new Ea;
                this.getCenter(b.center);
                b.radius = .5 * this.getSize(a).length();
                return b
            }
        }(),
        intersect: function(a) {
            this.min.max(a.min);
            this.max.min(a.max);
            this.isEmpty() && this.makeEmpty();
            return this
        },
        union: function(a) {
            this.min.min(a.min);
            this.max.max(a.max);
            return this
        },
        applyMatrix4: function() {
            var a = [new n, new n, new n, new n, new n, new n, new n, new n];
            return function(b) {
                if (this.isEmpty())
                    return this;
                a[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(b);
                a[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(b);
                a[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(b);
                a[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(b);
                a[4].set(this.max.x,
                this.min.y, this.min.z).applyMatrix4(b);
                a[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(b);
                a[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(b);
                a[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(b);
                this.setFromPoints(a);
                return this
            }
        }(),
        translate: function(a) {
            this.min.add(a);
            this.max.add(a);
            return this
        },
        equals: function(a) {
            return a.min.equals(this.min) && a.max.equals(this.max)
        }
    });
    Object.assign(Ea.prototype, {
        set: function(a, b) {
            this.center.copy(a);
            this.radius = b;
            return this
        },
        setFromPoints: function() {
            var a =
            new Ra;
            return function(b, c) {
                var d = this.center;
                void 0 !== c ? d.copy(c) : a.setFromPoints(b).getCenter(d);
                for (var e = 0, f = 0, g = b.length; f < g; f++)
                    e = Math.max(e, d.distanceToSquared(b[f]));
                this.radius = Math.sqrt(e);
                return this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.center.copy(a.center);
            this.radius = a.radius;
            return this
        },
        empty: function() {
            return 0 >= this.radius
        },
        containsPoint: function(a) {
            return a.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function(a) {
            return a.distanceTo(this.center) -
            this.radius
        },
        intersectsSphere: function(a) {
            var b = this.radius + a.radius;
            return a.center.distanceToSquared(this.center) <= b * b
        },
        intersectsBox: function(a) {
            return a.intersectsSphere(this)
        },
        intersectsPlane: function(a) {
            return Math.abs(this.center.dot(a.normal) - a.constant) <= this.radius
        },
        clampPoint: function(a, b) {
            var c = this.center.distanceToSquared(a),
                d = b || new n;
            d.copy(a);
            c > this.radius * this.radius && (d.sub(this.center).normalize(), d.multiplyScalar(this.radius).add(this.center));
            return d
        },
        getBoundingBox: function(a) {
            a =
            a || new Ra;
            a.set(this.center, this.center);
            a.expandByScalar(this.radius);
            return a
        },
        applyMatrix4: function(a) {
            this.center.applyMatrix4(a);
            this.radius *= a.getMaxScaleOnAxis();
            return this
        },
        translate: function(a) {
            this.center.add(a);
            return this
        },
        equals: function(a) {
            return a.center.equals(this.center) && a.radius === this.radius
        }
    });
    Object.assign(Ba.prototype, {
        isMatrix3: !0,
        set: function(a, b, c, d, e, f, g, h, k) {
            var m = this.elements;
            m[0] = a;
            m[1] = d;
            m[2] = g;
            m[3] = b;
            m[4] = e;
            m[5] = h;
            m[6] = c;
            m[7] = f;
            m[8] = k;
            return this
        },
        identity: function() {
            this.set(1,
            0, 0, 0, 1, 0, 0, 0, 1);
            return this
        },
        clone: function() {
            return (new this.constructor).fromArray(this.elements)
        },
        copy: function(a) {
            var b = this.elements;
            a = a.elements;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            b[3] = a[3];
            b[4] = a[4];
            b[5] = a[5];
            b[6] = a[6];
            b[7] = a[7];
            b[8] = a[8];
            return this
        },
        setFromMatrix4: function(a) {
            a = a.elements;
            this.set(a[0], a[4], a[8], a[1], a[5], a[9], a[2], a[6], a[10]);
            return this
        },
        applyToBufferAttribute: function() {
            var a = new n;
            return function(b) {
                for (var c = 0, d = b.count; c < d; c++)
                    a.x = b.getX(c), a.y = b.getY(c), a.z = b.getZ(c),
                    a.applyMatrix3(this), b.setXYZ(c, a.x, a.y, a.z);
                return b
            }
        }(),
        multiply: function(a) {
            return this.multiplyMatrices(this, a)
        },
        premultiply: function(a) {
            return this.multiplyMatrices(a, this)
        },
        multiplyMatrices: function(a, b) {
            var c = a.elements,
                d = b.elements,
                e = this.elements,
                f = c[0],
                g = c[3],
                h = c[6],
                k = c[1],
                m = c[4],
                q = c[7],
                l = c[2],
                p = c[5],
                c = c[8],
                r = d[0],
                n = d[3],
                t = d[6],
                y = d[1],
                x = d[4],
                u = d[7],
                H = d[2],
                w = d[5],
                d = d[8];
            e[0] = f * r + g * y + h * H;
            e[3] = f * n + g * x + h * w;
            e[6] = f * t + g * u + h * d;
            e[1] = k * r + m * y + q * H;
            e[4] = k * n + m * x + q * w;
            e[7] = k * t + m * u + q * d;
            e[2] = l * r + p * y + c * H;
            e[5] = l * n + p * x + c * w;
            e[8] = l * t + p * u + c * d;
            return this
        },
        multiplyScalar: function(a) {
            var b = this.elements;
            b[0] *= a;
            b[3] *= a;
            b[6] *= a;
            b[1] *= a;
            b[4] *= a;
            b[7] *= a;
            b[2] *= a;
            b[5] *= a;
            b[8] *= a;
            return this
        },
        determinant: function() {
            var a = this.elements,
                b = a[0],
                c = a[1],
                d = a[2],
                e = a[3],
                f = a[4],
                g = a[5],
                h = a[6],
                k = a[7],
                a = a[8];
            return b * f * a - b * g * k - c * e * a + c * g * h + d * e * k - d * f * h
        },
        getInverse: function(a, b) {
            a && a.isMatrix4 && console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");
            var c = a.elements,
                d = this.elements,
                e = c[0],
                f = c[1],
                g = c[2],
                h = c[3],
                k = c[4],
                m = c[5],
                q = c[6],
                l = c[7],
                c = c[8],
                p = c * k - m * l,
                r = m * q - c * h,
                n = l * h - k * q,
                t = e * p + f * r + g * n;
            if (0 === t) {
                if (!0 === b)
                    throw Error("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");
                console.warn("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");
                return this.identity()
            }
            t = 1 / t;
            d[0] = p * t;
            d[1] = (g * l - c * f) * t;
            d[2] = (m * f - g * k) * t;
            d[3] = r * t;
            d[4] = (c * e - g * q) * t;
            d[5] = (g * h - m * e) * t;
            d[6] = n * t;
            d[7] = (f * q - l * e) * t;
            d[8] = (k * e - f * h) * t;
            return this
        },
        transpose: function() {
            var a,
                b = this.elements;
            a = b[1];
            b[1] = b[3];
            b[3] =
            a;
            a = b[2];
            b[2] = b[6];
            b[6] = a;
            a = b[5];
            b[5] = b[7];
            b[7] = a;
            return this
        },
        getNormalMatrix: function(a) {
            return this.setFromMatrix4(a).getInverse(this).transpose()
        },
        transposeIntoArray: function(a) {
            var b = this.elements;
            a[0] = b[0];
            a[1] = b[3];
            a[2] = b[6];
            a[3] = b[1];
            a[4] = b[4];
            a[5] = b[7];
            a[6] = b[2];
            a[7] = b[5];
            a[8] = b[8];
            return this
        },
        equals: function(a) {
            var b = this.elements;
            a = a.elements;
            for (var c = 0; 9 > c; c++)
                if (b[c] !== a[c])
                    return !1;
            return !0
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            for (var c = 0; 9 > c; c++)
                this.elements[c] = a[c + b];
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            var c = this.elements;
            a[b] = c[0];
            a[b + 1] = c[1];
            a[b + 2] = c[2];
            a[b + 3] = c[3];
            a[b + 4] = c[4];
            a[b + 5] = c[5];
            a[b + 6] = c[6];
            a[b + 7] = c[7];
            a[b + 8] = c[8];
            return a
        }
    });
    Object.assign(Aa.prototype, {
        set: function(a, b) {
            this.normal.copy(a);
            this.constant = b;
            return this
        },
        setComponents: function(a, b, c, d) {
            this.normal.set(a, b, c);
            this.constant = d;
            return this
        },
        setFromNormalAndCoplanarPoint: function(a, b) {
            this.normal.copy(a);
            this.constant = -b.dot(this.normal);
            return this
        },
        setFromCoplanarPoints: function() {
            var a =
                new n,
                b = new n;
            return function(c, d, e) {
                d = a.subVectors(e, d).cross(b.subVectors(c, d)).normalize();
                this.setFromNormalAndCoplanarPoint(d, c);
                return this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.normal.copy(a.normal);
            this.constant = a.constant;
            return this
        },
        normalize: function() {
            var a = 1 / this.normal.length();
            this.normal.multiplyScalar(a);
            this.constant *= a;
            return this
        },
        negate: function() {
            this.constant *= -1;
            this.normal.negate();
            return this
        },
        distanceToPoint: function(a) {
            return this.normal.dot(a) +
            this.constant
        },
        distanceToSphere: function(a) {
            return this.distanceToPoint(a.center) - a.radius
        },
        projectPoint: function(a, b) {
            return this.orthoPoint(a, b).sub(a).negate()
        },
        orthoPoint: function(a, b) {
            var c = this.distanceToPoint(a);
            return (b || new n).copy(this.normal).multiplyScalar(c)
        },
        intersectLine: function() {
            var a = new n;
            return function(b, c) {
                var d = c || new n,
                    e = b.delta(a),
                    f = this.normal.dot(e);
                if (0 === f) {
                    if (0 === this.distanceToPoint(b.start))
                        return d.copy(b.start)
                } else
                    return f = -(b.start.dot(this.normal) + this.constant) /
                    f, 0 > f || 1 < f ? void 0 : d.copy(e).multiplyScalar(f).add(b.start)
            }
        }(),
        intersectsLine: function(a) {
            var b = this.distanceToPoint(a.start);
            a = this.distanceToPoint(a.end);
            return 0 > b && 0 < a || 0 > a && 0 < b
        },
        intersectsBox: function(a) {
            return a.intersectsPlane(this)
        },
        intersectsSphere: function(a) {
            return a.intersectsPlane(this)
        },
        coplanarPoint: function(a) {
            return (a || new n).copy(this.normal).multiplyScalar(-this.constant)
        },
        applyMatrix4: function() {
            var a = new n,
                b = new Ba;
            return function(c, d) {
                var e = this.coplanarPoint(a).applyMatrix4(c),
                    f = d || b.getNormalMatrix(c),
                    f = this.normal.applyMatrix3(f).normalize();
                this.constant = -e.dot(f);
                return this
            }
        }(),
        translate: function(a) {
            this.constant -= a.dot(this.normal);
            return this
        },
        equals: function(a) {
            return a.normal.equals(this.normal) && a.constant === this.constant
        }
    });
    Object.assign(gd.prototype, {
        set: function(a, b, c, d, e, f) {
            var g = this.planes;
            g[0].copy(a);
            g[1].copy(b);
            g[2].copy(c);
            g[3].copy(d);
            g[4].copy(e);
            g[5].copy(f);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            for (var b =
                this.planes, c = 0; 6 > c; c++)
                b[c].copy(a.planes[c]);
            return this
        },
        setFromMatrix: function(a) {
            var b = this.planes,
                c = a.elements;
            a = c[0];
            var d = c[1],
                e = c[2],
                f = c[3],
                g = c[4],
                h = c[5],
                k = c[6],
                m = c[7],
                q = c[8],
                l = c[9],
                p = c[10],
                r = c[11],
                n = c[12],
                t = c[13],
                y = c[14],
                c = c[15];
            b[0].setComponents(f - a, m - g, r - q, c - n).normalize();
            b[1].setComponents(f + a, m + g, r + q, c + n).normalize();
            b[2].setComponents(f + d, m + h, r + l, c + t).normalize();
            b[3].setComponents(f - d, m - h, r - l, c - t).normalize();
            b[4].setComponents(f - e, m - k, r - p, c - y).normalize();
            b[5].setComponents(f + e,
            m + k, r + p, c + y).normalize();
            return this
        },
        intersectsObject: function() {
            var a = new Ea;
            return function(b) {
                var c = b.geometry;
                null === c.boundingSphere && c.computeBoundingSphere();
                a.copy(c.boundingSphere).applyMatrix4(b.matrixWorld);
                return this.intersectsSphere(a)
            }
        }(),
        intersectsSprite: function() {
            var a = new Ea;
            return function(b) {
                a.center.set(0, 0, 0);
                a.radius = .7071067811865476;
                a.applyMatrix4(b.matrixWorld);
                return this.intersectsSphere(a)
            }
        }(),
        intersectsSphere: function(a) {
            var b = this.planes,
                c = a.center;
            a = -a.radius;
            for (var d =
            0; 6 > d; d++)
                if (b[d].distanceToPoint(c) < a)
                    return !1;
            return !0
        },
        intersectsBox: function() {
            var a = new n,
                b = new n;
            return function(c) {
                for (var d = this.planes, e = 0; 6 > e; e++) {
                    var f = d[e];
                    a.x = 0 < f.normal.x ? c.min.x : c.max.x;
                    b.x = 0 < f.normal.x ? c.max.x : c.min.x;
                    a.y = 0 < f.normal.y ? c.min.y : c.max.y;
                    b.y = 0 < f.normal.y ? c.max.y : c.min.y;
                    a.z = 0 < f.normal.z ? c.min.z : c.max.z;
                    b.z = 0 < f.normal.z ? c.max.z : c.min.z;
                    var g = f.distanceToPoint(a),
                        f = f.distanceToPoint(b);
                    if (0 > g && 0 > f)
                        return !1
                }
                return !0
            }
        }(),
        containsPoint: function(a) {
            for (var b = this.planes, c = 0; 6 >
            c; c++)
                if (0 > b[c].distanceToPoint(a))
                    return !1;
            return !0
        }
    });
    ab.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" ");
    ab.DefaultOrder = "XYZ";
    Object.defineProperties(ab.prototype, {
        x: {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._x = a;
                this.onChangeCallback()
            }
        },
        y: {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y = a;
                this.onChangeCallback()
            }
        },
        z: {
            get: function() {
                return this._z
            },
            set: function(a) {
                this._z = a;
                this.onChangeCallback()
            }
        },
        order: {
            get: function() {
                return this._order
            },
            set: function(a) {
                this._order = a;
                this.onChangeCallback()
            }
        }
    });
    Object.assign(ab.prototype, {
        isEuler: !0,
        set: function(a, b, c, d) {
            this._x = a;
            this._y = b;
            this._z = c;
            this._order = d || this._order;
            this.onChangeCallback();
            return this
        },
        clone: function() {
            return new this.constructor(this._x, this._y, this._z, this._order)
        },
        copy: function(a) {
            this._x = a._x;
            this._y = a._y;
            this._z = a._z;
            this._order = a._order;
            this.onChangeCallback();
            return this
        },
        setFromRotationMatrix: function(a, b, c) {
            var d = Y.clamp,
                e = a.elements;
            a = e[0];
            var f = e[4],
                g = e[8],
                h = e[1],
                k = e[5],
                m = e[9],
                q = e[2],
                l = e[6],
                e = e[10];
            b = b || this._order;
            "XYZ" === b ? (this._y = Math.asin(d(g, -1, 1)), .99999 > Math.abs(g) ? (this._x = Math.atan2(-m, e), this._z = Math.atan2(-f, a)) : (this._x = Math.atan2(l, k), this._z = 0)) : "YXZ" === b ? (this._x = Math.asin(-d(m, -1, 1)), .99999 > Math.abs(m) ? (this._y = Math.atan2(g, e), this._z = Math.atan2(h, k)) : (this._y = Math.atan2(-q, a), this._z = 0)) : "ZXY" === b ? (this._x = Math.asin(d(l, -1, 1)), .99999 > Math.abs(l) ? (this._y = Math.atan2(-q, e), this._z = Math.atan2(-f, k)) : (this._y = 0, this._z = Math.atan2(h, a))) : "ZYX" === b ? (this._y = Math.asin(-d(q,
            -1, 1)), .99999 > Math.abs(q) ? (this._x = Math.atan2(l, e), this._z = Math.atan2(h, a)) : (this._x = 0, this._z = Math.atan2(-f, k))) : "YZX" === b ? (this._z = Math.asin(d(h, -1, 1)), .99999 > Math.abs(h) ? (this._x = Math.atan2(-m, k), this._y = Math.atan2(-q, a)) : (this._x = 0, this._y = Math.atan2(g, e))) : "XZY" === b ? (this._z = Math.asin(-d(f, -1, 1)), .99999 > Math.abs(f) ? (this._x = Math.atan2(l, k), this._y = Math.atan2(g, a)) : (this._x = Math.atan2(-m, e), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + b);
            this._order =
            b;
            if (!1 !== c)
                this.onChangeCallback();
            return this
        },
        setFromQuaternion: function() {
            var a = new K;
            return function(b, c, d) {
                a.makeRotationFromQuaternion(b);
                return this.setFromRotationMatrix(a, c, d)
            }
        }(),
        setFromVector3: function(a, b) {
            return this.set(a.x, a.y, a.z, b || this._order)
        },
        reorder: function() {
            var a = new oa;
            return function(b) {
                a.setFromEuler(this);
                return this.setFromQuaternion(a, b)
            }
        }(),
        equals: function(a) {
            return a._x === this._x && a._y === this._y && a._z === this._z && a._order === this._order
        },
        fromArray: function(a) {
            this._x =
            a[0];
            this._y = a[1];
            this._z = a[2];
            void 0 !== a[3] && (this._order = a[3]);
            this.onChangeCallback();
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this._x;
            a[b + 1] = this._y;
            a[b + 2] = this._z;
            a[b + 3] = this._order;
            return a
        },
        toVector3: function(a) {
            return a ? a.set(this._x, this._y, this._z) : new n(this._x, this._y, this._z)
        },
        onChange: function(a) {
            this.onChangeCallback = a;
            return this
        },
        onChangeCallback: function() {}
    });
    Object.assign(Qd.prototype, {
        set: function(a) {
            this.mask = 1 << a | 0
        },
        enable: function(a) {
            this.mask =
            this.mask | 1 << a | 0
        },
        toggle: function(a) {
            this.mask ^= 1 << a | 0
        },
        disable: function(a) {
            this.mask &= ~(1 << a | 0)
        },
        test: function(a) {
            return 0 !== (this.mask & a.mask)
        }
    });
    var Lf = 0;
    z.DefaultUp = new n(0, 1, 0);
    z.DefaultMatrixAutoUpdate = !0;
    Object.assign(z.prototype, xa.prototype, {
        isObject3D: !0,
        onBeforeRender: function() {},
        onAfterRender: function() {},
        applyMatrix: function(a) {
            this.matrix.multiplyMatrices(a, this.matrix);
            this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        applyQuaternion: function(a) {
            this.quaternion.premultiply(a);
            return this
        },
        setRotationFromAxisAngle: function(a, b) {
            this.quaternion.setFromAxisAngle(a, b)
        },
        setRotationFromEuler: function(a) {
            this.quaternion.setFromEuler(a, !0)
        },
        setRotationFromMatrix: function(a) {
            this.quaternion.setFromRotationMatrix(a)
        },
        setRotationFromQuaternion: function(a) {
            this.quaternion.copy(a)
        },
        rotateOnAxis: function() {
            var a = new oa;
            return function(b, c) {
                a.setFromAxisAngle(b, c);
                this.quaternion.multiply(a);
                return this
            }
        }(),
        rotateX: function() {
            var a = new n(1, 0, 0);
            return function(b) {
                return this.rotateOnAxis(a,
                b)
            }
        }(),
        rotateY: function() {
            var a = new n(0, 1, 0);
            return function(b) {
                return this.rotateOnAxis(a, b)
            }
        }(),
        rotateZ: function() {
            var a = new n(0, 0, 1);
            return function(b) {
                return this.rotateOnAxis(a, b)
            }
        }(),
        translateOnAxis: function() {
            var a = new n;
            return function(b, c) {
                a.copy(b).applyQuaternion(this.quaternion);
                this.position.add(a.multiplyScalar(c));
                return this
            }
        }(),
        translateX: function() {
            var a = new n(1, 0, 0);
            return function(b) {
                return this.translateOnAxis(a, b)
            }
        }(),
        translateY: function() {
            var a = new n(0, 1, 0);
            return function(b) {
                return this.translateOnAxis(a,
                b)
            }
        }(),
        translateZ: function() {
            var a = new n(0, 0, 1);
            return function(b) {
                return this.translateOnAxis(a, b)
            }
        }(),
        localToWorld: function(a) {
            return a.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: function() {
            var a = new K;
            return function(b) {
                return b.applyMatrix4(a.getInverse(this.matrixWorld))
            }
        }(),
        lookAt: function() {
            var a = new K;
            return function(b) {
                this.isCamera ? a.lookAt(this.position, b, this.up) : a.lookAt(b, this.position, this.up);
                this.quaternion.setFromRotationMatrix(a)
            }
        }(),
        add: function(a) {
            if (1 < arguments.length) {
                for (var b =
                0; b < arguments.length; b++)
                    this.add(arguments[b]);
                return this
            }
            if (a === this)
                return console.error("THREE.Object3D.add: object can't be added as a child of itself.", a), this;
            a && a.isObject3D ? (null !== a.parent && a.parent.remove(a), a.parent = this, a.dispatchEvent({
                type: "added"
            }), this.children.push(a)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", a);
            return this
        },
        remove: function(a) {
            if (1 < arguments.length) {
                for (var b = 0; b < arguments.length; b++)
                    this.remove(arguments[b]);
                return this
            }
            b = this.children.indexOf(a);
            -1 !== b && (a.parent = null, a.dispatchEvent({
                type: "removed"
            }), this.children.splice(b, 1));
            return this
        },
        getObjectById: function(a) {
            return this.getObjectByProperty("id", a)
        },
        getObjectByName: function(a) {
            return this.getObjectByProperty("name", a)
        },
        getObjectByProperty: function(a, b) {
            if (this[a] === b)
                return this;
            for (var c = 0, d = this.children.length; c < d; c++) {
                var e = this.children[c].getObjectByProperty(a, b);
                if (void 0 !== e)
                    return e
            }
        },
        getWorldPosition: function(a) {
            a = a || new n;
            this.updateMatrixWorld(!0);
            return a.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: function() {
            var a = new n,
                b = new n;
            return function(c) {
                c = c || new oa;
                this.updateMatrixWorld(!0);
                this.matrixWorld.decompose(a, c, b);
                return c
            }
        }(),
        getWorldRotation: function() {
            var a = new oa;
            return function(b) {
                b = b || new ab;
                this.getWorldQuaternion(a);
                return b.setFromQuaternion(a, this.rotation.order, !1)
            }
        }(),
        getWorldScale: function() {
            var a = new n,
                b = new oa;
            return function(c) {
                c = c || new n;
                this.updateMatrixWorld(!0);
                this.matrixWorld.decompose(a, b, c);
                return c
            }
        }(),
        getWorldDirection: function() {
            var a = new oa;
            return function(b) {
                b = b || new n;
                this.getWorldQuaternion(a);
                return b.set(0, 0, 1).applyQuaternion(a)
            }
        }(),
        raycast: function() {},
        traverse: function(a) {
            a(this);
            for (var b = this.children, c = 0, d = b.length; c < d; c++)
                b[c].traverse(a)
        },
        traverseVisible: function(a) {
            if (!1 !== this.visible) {
                a(this);
                for (var b = this.children, c = 0, d = b.length; c < d; c++)
                    b[c].traverseVisible(a)
            }
        },
        traverseAncestors: function(a) {
            var b = this.parent;
            null !== b && (a(b), b.traverseAncestors(a))
        },
        updateMatrix: function() {
            this.matrix.compose(this.position, this.quaternion,
            this.scale);
            this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function(a) {
            this.matrixAutoUpdate && this.updateMatrix();
            if (this.matrixWorldNeedsUpdate || a)
                null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, a = !0;
            for (var b = this.children, c = 0, d = b.length; c < d; c++)
                b[c].updateMatrixWorld(a)
        },
        toJSON: function(a) {
            function b(b, c) {
                void 0 === b[c.uuid] && (b[c.uuid] = c.toJSON(a));
                return c.uuid
            }
            function c(a) {
                var b = [],
                    c;
                for (c in a) {
                    var d = a[c];
                    delete d.metadata;
                    b.push(d)
                }
                return b
            }
            var d = void 0 === a || "" === a,
                e = {};
            d && (a = {
                geometries: {},
                materials: {},
                textures: {},
                images: {}
            }, e.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var f = {};
            f.uuid = this.uuid;
            f.type = this.type;
            "" !== this.name && (f.name = this.name);
            "{}" !== JSON.stringify(this.userData) && (f.userData = this.userData);
            !0 === this.castShadow && (f.castShadow = !0);
            !0 === this.receiveShadow && (f.receiveShadow = !0);
            !1 === this.visible && (f.visible = !1);
            f.matrix = this.matrix.toArray();
            void 0 !== this.geometry && (f.geometry = b(a.geometries, this.geometry));
            if (void 0 !== this.material)
                if (Array.isArray(this.material)) {
                    for (var g = [], h = 0, k = this.material.length; h < k; h++)
                        g.push(b(a.materials, this.material[h]));
                    f.material = g
                } else
                    f.material = b(a.materials, this.material);
            if (0 < this.children.length)
                for (f.children = [], h = 0; h < this.children.length; h++)
                    f.children.push(this.children[h].toJSON(a).object);
            d && (d = c(a.geometries), g = c(a.materials), h = c(a.textures), k = c(a.images), 0 < d.length && (e.geometries = d), 0 < g.length &&
            (e.materials = g), 0 < h.length && (e.textures = h), 0 < k.length && (e.images = k));
            e.object = f;
            return e
        },
        clone: function(a) {
            return (new this.constructor).copy(this, a)
        },
        copy: function(a, b) {
            void 0 === b && (b = !0);
            this.name = a.name;
            this.up.copy(a.up);
            this.position.copy(a.position);
            this.quaternion.copy(a.quaternion);
            this.scale.copy(a.scale);
            this.matrix.copy(a.matrix);
            this.matrixWorld.copy(a.matrixWorld);
            this.matrixAutoUpdate = a.matrixAutoUpdate;
            this.matrixWorldNeedsUpdate = a.matrixWorldNeedsUpdate;
            this.layers.mask = a.layers.mask;
            this.visible = a.visible;
            this.castShadow = a.castShadow;
            this.receiveShadow = a.receiveShadow;
            this.frustumCulled = a.frustumCulled;
            this.renderOrder = a.renderOrder;
            this.userData = JSON.parse(JSON.stringify(a.userData));
            if (!0 === b)
                for (var c = 0; c < a.children.length; c++)
                    this.add(a.children[c].clone());
            return this
        }
    });
    Na.prototype = Object.assign(Object.create(z.prototype), {
        constructor: Na,
        isCamera: !0,
        copy: function(a, b) {
            z.prototype.copy.call(this, a, b);
            this.matrixWorldInverse.copy(a.matrixWorldInverse);
            this.projectionMatrix.copy(a.projectionMatrix);
            return this
        },
        getWorldDirection: function() {
            var a = new oa;
            return function(b) {
                b = b || new n;
                this.getWorldQuaternion(a);
                return b.set(0, 0, -1).applyQuaternion(a)
            }
        }(),
        updateMatrixWorld: function(a) {
            z.prototype.updateMatrixWorld.call(this, a);
            this.matrixWorldInverse.getInverse(this.matrixWorld)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    });
    Fb.prototype = Object.assign(Object.create(Na.prototype), {
        constructor: Fb,
        isOrthographicCamera: !0,
        copy: function(a, b) {
            Na.prototype.copy.call(this, a, b);
            this.left = a.left;
            this.right = a.right;
            this.top = a.top;
            this.bottom = a.bottom;
            this.near = a.near;
            this.far = a.far;
            this.zoom = a.zoom;
            this.view = null === a.view ? null : Object.assign({}, a.view);
            return this
        },
        setViewOffset: function(a, b, c, d, e, f) {
            this.view = {
                fullWidth: a,
                fullHeight: b,
                offsetX: c,
                offsetY: d,
                width: e,
                height: f
            };
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            this.view = null;
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var a = (this.right - this.left) / (2 * this.zoom),
                b = (this.top - this.bottom) / (2 * this.zoom),
                c = (this.right + this.left) / 2,
                d = (this.top + this.bottom) / 2,
                e = c - a,
                c = c + a,
                a = d + b,
                b = d - b;
            if (null !== this.view)
                var c = this.zoom / (this.view.width / this.view.fullWidth),
                    b = this.zoom / (this.view.height / this.view.fullHeight),
                    f = (this.right - this.left) / this.view.width,
                    d = (this.top - this.bottom) / this.view.height,
                    e = e + this.view.offsetX / c * f,
                    c = e + this.view.width / c * f,
                    a = a - this.view.offsetY / b * d,
                    b = a - this.view.height / b * d;
            this.projectionMatrix.makeOrthographic(e, c, a, b, this.near, this.far)
        },
        toJSON: function(a) {
            a = z.prototype.toJSON.call(this,
            a);
            a.object.zoom = this.zoom;
            a.object.left = this.left;
            a.object.right = this.right;
            a.object.top = this.top;
            a.object.bottom = this.bottom;
            a.object.near = this.near;
            a.object.far = this.far;
            null !== this.view && (a.object.view = Object.assign({}, this.view));
            return a
        }
    });
    qa.prototype = Object.assign(Object.create(Na.prototype), {
        constructor: qa,
        isPerspectiveCamera: !0,
        copy: function(a, b) {
            Na.prototype.copy.call(this, a, b);
            this.fov = a.fov;
            this.zoom = a.zoom;
            this.near = a.near;
            this.far = a.far;
            this.focus = a.focus;
            this.aspect = a.aspect;
            this.view =
            null === a.view ? null : Object.assign({}, a.view);
            this.filmGauge = a.filmGauge;
            this.filmOffset = a.filmOffset;
            return this
        },
        setFocalLength: function(a) {
            a = .5 * this.getFilmHeight() / a;
            this.fov = 2 * Y.RAD2DEG * Math.atan(a);
            this.updateProjectionMatrix()
        },
        getFocalLength: function() {
            var a = Math.tan(.5 * Y.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / a
        },
        getEffectiveFOV: function() {
            return 2 * Y.RAD2DEG * Math.atan(Math.tan(.5 * Y.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function() {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function() {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function(a, b, c, d, e, f) {
            this.aspect = a / b;
            this.view = {
                fullWidth: a,
                fullHeight: b,
                offsetX: c,
                offsetY: d,
                width: e,
                height: f
            };
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            this.view = null;
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var a = this.near,
                b = a * Math.tan(.5 * Y.DEG2RAD * this.fov) / this.zoom,
                c = 2 * b,
                d = this.aspect * c,
                e = -.5 * d,
                f = this.view;
            if (null !== f)
                var g = f.fullWidth,
                    h = f.fullHeight,
                    e = e + f.offsetX * d /
                    g,
                    b = b - f.offsetY * c / h,
                    d = f.width / g * d,
                    c = f.height / h * c;
            f = this.filmOffset;
            0 !== f && (e += a * f / this.getFilmWidth());
            this.projectionMatrix.makePerspective(e, e + d, b, b - c, a, this.far)
        },
        toJSON: function(a) {
            a = z.prototype.toJSON.call(this, a);
            a.object.fov = this.fov;
            a.object.zoom = this.zoom;
            a.object.near = this.near;
            a.object.far = this.far;
            a.object.focus = this.focus;
            a.object.aspect = this.aspect;
            null !== this.view && (a.object.view = Object.assign({}, this.view));
            a.object.filmGauge = this.filmGauge;
            a.object.filmOffset = this.filmOffset;
            return a
        }
    });
    Object.assign(Sa.prototype, {
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.a = a.a;
            this.b = a.b;
            this.c = a.c;
            this.normal.copy(a.normal);
            this.color.copy(a.color);
            this.materialIndex = a.materialIndex;
            for (var b = 0, c = a.vertexNormals.length; b < c; b++)
                this.vertexNormals[b] = a.vertexNormals[b].clone();
            b = 0;
            for (c = a.vertexColors.length; b < c; b++)
                this.vertexColors[b] = a.vertexColors[b].clone();
            return this
        }
    });
    var Rd = 0;
    Object.assign(J.prototype, xa.prototype, {
        isGeometry: !0,
        applyMatrix: function(a) {
            for (var b =
                (new Ba).getNormalMatrix(a), c = 0, d = this.vertices.length; c < d; c++)
                this.vertices[c].applyMatrix4(a);
            c = 0;
            for (d = this.faces.length; c < d; c++) {
                a = this.faces[c];
                a.normal.applyMatrix3(b).normalize();
                for (var e = 0, f = a.vertexNormals.length; e < f; e++)
                    a.vertexNormals[e].applyMatrix3(b).normalize()
            }
            null !== this.boundingBox && this.computeBoundingBox();
            null !== this.boundingSphere && this.computeBoundingSphere();
            this.normalsNeedUpdate = this.verticesNeedUpdate = !0;
            return this
        },
        rotateX: function() {
            var a = new K;
            return function(b) {
                a.makeRotationX(b);
                this.applyMatrix(a);
                return this
            }
        }(),
        rotateY: function() {
            var a = new K;
            return function(b) {
                a.makeRotationY(b);
                this.applyMatrix(a);
                return this
            }
        }(),
        rotateZ: function() {
            var a = new K;
            return function(b) {
                a.makeRotationZ(b);
                this.applyMatrix(a);
                return this
            }
        }(),
        translate: function() {
            var a = new K;
            return function(b, c, d) {
                a.makeTranslation(b, c, d);
                this.applyMatrix(a);
                return this
            }
        }(),
        scale: function() {
            var a = new K;
            return function(b, c, d) {
                a.makeScale(b, c, d);
                this.applyMatrix(a);
                return this
            }
        }(),
        lookAt: function() {
            var a = new z;
            return function(b) {
                a.lookAt(b);
                a.updateMatrix();
                this.applyMatrix(a.matrix)
            }
        }(),
        fromBufferGeometry: function(a) {
            function b(a, b, d, e) {
                var f = void 0 !== g ? [q[a].clone(), q[b].clone(), q[d].clone()] : [],
                    r = void 0 !== h ? [c.colors[a].clone(), c.colors[b].clone(), c.colors[d].clone()] : [];
                e = new Sa(a, b, d, f, r, e);
                c.faces.push(e);
                void 0 !== k && c.faceVertexUvs[0].push([l[a].clone(), l[b].clone(), l[d].clone()]);
                void 0 !== m && c.faceVertexUvs[1].push([p[a].clone(), p[b].clone(), p[d].clone()])
            }
            var c = this,
                d = null !== a.index ? a.index.array : void 0,
                e = a.attributes,
                f = e.position.array,
                g = void 0 !== e.normal ? e.normal.array : void 0,
                h = void 0 !== e.color ? e.color.array : void 0,
                k = void 0 !== e.uv ? e.uv.array : void 0,
                m = void 0 !== e.uv2 ? e.uv2.array : void 0;
            void 0 !== m && (this.faceVertexUvs[1] = []);
            for (var q = [], l = [], p = [], r = e = 0; e < f.length; e += 3, r += 2)
                c.vertices.push(new n(f[e], f[e + 1], f[e + 2])), void 0 !== g && q.push(new n(g[e], g[e + 1], g[e + 2])), void 0 !== h && c.colors.push(new G(h[e], h[e + 1], h[e + 2])), void 0 !== k && l.push(new C(k[r], k[r + 1])), void 0 !== m && p.push(new C(m[r], m[r + 1]));
            var ca = a.groups;
            if (0 < ca.length)
                for (e = 0; e <
                ca.length; e++)
                    for (var f = ca[e], t = f.start, y = f.count, r = t, t = t + y; r < t; r += 3)
                        void 0 !== d ? b(d[r], d[r + 1], d[r + 2], f.materialIndex) : b(r, r + 1, r + 2, f.materialIndex);
            else if (void 0 !== d)
                for (e = 0; e < d.length; e += 3)
                    b(d[e], d[e + 1], d[e + 2]);
            else
                for (e = 0; e < f.length / 3; e += 3)
                    b(e, e + 1, e + 2);
            this.computeFaceNormals();
            null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
            null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
            return this
        },
        center: function() {
            this.computeBoundingBox();
            var a = this.boundingBox.getCenter().negate();
            this.translate(a.x, a.y, a.z);
            return a
        },
        normalize: function() {
            this.computeBoundingSphere();
            var a = this.boundingSphere.center,
                b = this.boundingSphere.radius,
                b = 0 === b ? 1 : 1 / b,
                c = new K;
            c.set(b, 0, 0, -b * a.x, 0, b, 0, -b * a.y, 0, 0, b, -b * a.z, 0, 0, 0, 1);
            this.applyMatrix(c);
            return this
        },
        computeFaceNormals: function() {
            for (var a = new n, b = new n, c = 0, d = this.faces.length; c < d; c++) {
                var e = this.faces[c],
                    f = this.vertices[e.a],
                    g = this.vertices[e.b];
                a.subVectors(this.vertices[e.c], g);
                b.subVectors(f, g);
                a.cross(b);
                a.normalize();
                e.normal.copy(a)
            }
        },
        computeVertexNormals: function(a) {
            void 0 === a && (a = !0);
            var b,
                c,
                d;
            d = Array(this.vertices.length);
            b = 0;
            for (c = this.vertices.length; b < c; b++)
                d[b] = new n;
            if (a) {
                var e,
                    f,
                    g,
                    h = new n,
                    k = new n;
                a = 0;
                for (b = this.faces.length; a < b; a++)
                    c = this.faces[a], e = this.vertices[c.a], f = this.vertices[c.b], g = this.vertices[c.c], h.subVectors(g, f), k.subVectors(e, f), h.cross(k), d[c.a].add(h), d[c.b].add(h), d[c.c].add(h)
            } else
                for (this.computeFaceNormals(), a = 0, b = this.faces.length; a < b; a++)
                    c = this.faces[a], d[c.a].add(c.normal), d[c.b].add(c.normal),
                    d[c.c].add(c.normal);
            b = 0;
            for (c = this.vertices.length; b < c; b++)
                d[b].normalize();
            a = 0;
            for (b = this.faces.length; a < b; a++)
                c = this.faces[a], e = c.vertexNormals, 3 === e.length ? (e[0].copy(d[c.a]), e[1].copy(d[c.b]), e[2].copy(d[c.c])) : (e[0] = d[c.a].clone(), e[1] = d[c.b].clone(), e[2] = d[c.c].clone());
            0 < this.faces.length && (this.normalsNeedUpdate = !0)
        },
        computeFlatVertexNormals: function() {
            var a,
                b,
                c;
            this.computeFaceNormals();
            a = 0;
            for (b = this.faces.length; a < b; a++) {
                c = this.faces[a];
                var d = c.vertexNormals;
                3 === d.length ? (d[0].copy(c.normal),
                d[1].copy(c.normal), d[2].copy(c.normal)) : (d[0] = c.normal.clone(), d[1] = c.normal.clone(), d[2] = c.normal.clone())
            }
            0 < this.faces.length && (this.normalsNeedUpdate = !0)
        },
        computeMorphNormals: function() {
            var a,
                b,
                c,
                d,
                e;
            c = 0;
            for (d = this.faces.length; c < d; c++)
                for (e = this.faces[c], e.__originalFaceNormal ? e.__originalFaceNormal.copy(e.normal) : e.__originalFaceNormal = e.normal.clone(), e.__originalVertexNormals || (e.__originalVertexNormals = []), a = 0, b = e.vertexNormals.length; a < b; a++)
                    e.__originalVertexNormals[a] ? e.__originalVertexNormals[a].copy(e.vertexNormals[a]) :
                    e.__originalVertexNormals[a] = e.vertexNormals[a].clone();
            var f = new J;
            f.faces = this.faces;
            a = 0;
            for (b = this.morphTargets.length; a < b; a++) {
                if (!this.morphNormals[a]) {
                    this.morphNormals[a] = {};
                    this.morphNormals[a].faceNormals = [];
                    this.morphNormals[a].vertexNormals = [];
                    e = this.morphNormals[a].faceNormals;
                    var g = this.morphNormals[a].vertexNormals,
                        h,
                        k;
                    c = 0;
                    for (d = this.faces.length; c < d; c++)
                        h = new n, k = {
                            a: new n,
                            b: new n,
                            c: new n
                        }, e.push(h), g.push(k)
                }
                g = this.morphNormals[a];
                f.vertices = this.morphTargets[a].vertices;
                f.computeFaceNormals();
                f.computeVertexNormals();
                c = 0;
                for (d = this.faces.length; c < d; c++)
                    e = this.faces[c], h = g.faceNormals[c], k = g.vertexNormals[c], h.copy(e.normal), k.a.copy(e.vertexNormals[0]), k.b.copy(e.vertexNormals[1]), k.c.copy(e.vertexNormals[2])
            }
            c = 0;
            for (d = this.faces.length; c < d; c++)
                e = this.faces[c], e.normal = e.__originalFaceNormal, e.vertexNormals = e.__originalVertexNormals
        },
        computeLineDistances: function() {
            for (var a = 0, b = this.vertices, c = 0, d = b.length; c < d; c++)
                0 < c && (a += b[c].distanceTo(b[c - 1])), this.lineDistances[c] = a
        },
        computeBoundingBox: function() {
            null ===
            this.boundingBox && (this.boundingBox = new Ra);
            this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new Ea);
            this.boundingSphere.setFromPoints(this.vertices)
        },
        merge: function(a, b, c) {
            if (a && a.isGeometry) {
                var d,
                    e = this.vertices.length,
                    f = this.vertices,
                    g = a.vertices,
                    h = this.faces,
                    k = a.faces,
                    m = this.faceVertexUvs[0],
                    q = a.faceVertexUvs[0],
                    l = this.colors,
                    p = a.colors;
                void 0 === c && (c = 0);
                void 0 !== b && (d = (new Ba).getNormalMatrix(b));
                a = 0;
                for (var r = g.length; a <
                r; a++) {
                    var n = g[a].clone();
                    void 0 !== b && n.applyMatrix4(b);
                    f.push(n)
                }
                a = 0;
                for (r = p.length; a < r; a++)
                    l.push(p[a].clone());
                a = 0;
                for (r = k.length; a < r; a++) {
                    var g = k[a],
                        t = g.vertexNormals,
                        p = g.vertexColors,
                        l = new Sa(g.a + e, g.b + e, g.c + e);
                    l.normal.copy(g.normal);
                    void 0 !== d && l.normal.applyMatrix3(d).normalize();
                    b = 0;
                    for (f = t.length; b < f; b++)
                        n = t[b].clone(), void 0 !== d && n.applyMatrix3(d).normalize(), l.vertexNormals.push(n);
                    l.color.copy(g.color);
                    b = 0;
                    for (f = p.length; b < f; b++)
                        n = p[b], l.vertexColors.push(n.clone());
                    l.materialIndex = g.materialIndex +
                    c;
                    h.push(l)
                }
                a = 0;
                for (r = q.length; a < r; a++)
                    if (c = q[a], d = [], void 0 !== c) {
                        b = 0;
                        for (f = c.length; b < f; b++)
                            d.push(c[b].clone());
                        m.push(d)
                    }
            } else
                console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", a)
        },
        mergeMesh: function(a) {
            a && a.isMesh ? (a.matrixAutoUpdate && a.updateMatrix(), this.merge(a.geometry, a.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", a)
        },
        mergeVertices: function() {
            var a = {},
                b = [],
                c = [],
                d,
                e = Math.pow(10, 4),
                f,
                g;
            f = 0;
            for (g = this.vertices.length; f <
            g; f++)
                d = this.vertices[f], d = Math.round(d.x * e) + "_" + Math.round(d.y * e) + "_" + Math.round(d.z * e), void 0 === a[d] ? (a[d] = f, b.push(this.vertices[f]), c[f] = b.length - 1) : c[f] = c[a[d]];
            a = [];
            f = 0;
            for (g = this.faces.length; f < g; f++)
                for (e = this.faces[f], e.a = c[e.a], e.b = c[e.b], e.c = c[e.c], e = [e.a, e.b, e.c], d = 0; 3 > d; d++)
                    if (e[d] === e[(d + 1) % 3]) {
                        a.push(f);
                        break
                    }
            for (f = a.length - 1; 0 <= f; f--)
                for (e = a[f], this.faces.splice(e, 1), c = 0, g = this.faceVertexUvs.length; c < g; c++)
                    this.faceVertexUvs[c].splice(e, 1);
            f = this.vertices.length - b.length;
            this.vertices =
            b;
            return f
        },
        sortFacesByMaterialIndex: function() {
            for (var a = this.faces, b = a.length, c = 0; c < b; c++)
                a[c]._id = c;
            a.sort(function(a, b) {
                return a.materialIndex - b.materialIndex
            });
            var d = this.faceVertexUvs[0],
                e = this.faceVertexUvs[1],
                f,
                g;
            d && d.length === b && (f = []);
            e && e.length === b && (g = []);
            for (c = 0; c < b; c++) {
                var h = a[c]._id;
                f && f.push(d[h]);
                g && g.push(e[h])
            }
            f && (this.faceVertexUvs[0] = f);
            g && (this.faceVertexUvs[1] = g)
        },
        toJSON: function() {
            function a(a, b, c) {
                return c ? a | 1 << b : a & ~(1 << b)
            }
            function b(a) {
                var b = a.x.toString() + a.y.toString() +
                a.z.toString();
                if (void 0 !== m[b])
                    return m[b];
                m[b] = k.length / 3;
                k.push(a.x, a.y, a.z);
                return m[b]
            }
            function c(a) {
                var b = a.r.toString() + a.g.toString() + a.b.toString();
                if (void 0 !== l[b])
                    return l[b];
                l[b] = q.length;
                q.push(a.getHex());
                return l[b]
            }
            function d(a) {
                var b = a.x.toString() + a.y.toString();
                if (void 0 !== r[b])
                    return r[b];
                r[b] = p.length / 2;
                p.push(a.x, a.y);
                return r[b]
            }
            var e = {
                metadata: {
                    version: 4.5,
                    type: "Geometry",
                    generator: "Geometry.toJSON"
                }
            };
            e.uuid = this.uuid;
            e.type = this.type;
            "" !== this.name && (e.name = this.name);
            if (void 0 !==
            this.parameters) {
                var f = this.parameters,
                    g;
                for (g in f)
                    void 0 !== f[g] && (e[g] = f[g]);
                return e
            }
            f = [];
            for (g = 0; g < this.vertices.length; g++) {
                var h = this.vertices[g];
                f.push(h.x, h.y, h.z)
            }
            var h = [],
                k = [],
                m = {},
                q = [],
                l = {},
                p = [],
                r = {};
            for (g = 0; g < this.faces.length; g++) {
                var n = this.faces[g],
                    t = void 0 !== this.faceVertexUvs[0][g],
                    y = 0 < n.normal.length(),
                    x = 0 < n.vertexNormals.length,
                    u = 1 !== n.color.r || 1 !== n.color.g || 1 !== n.color.b,
                    H = 0 < n.vertexColors.length,
                    w = 0,
                    w = a(w, 0, 0),
                    w = a(w, 1, !0),
                    w = a(w, 2, !1),
                    w = a(w, 3, t),
                    w = a(w, 4, y),
                    w = a(w, 5, x),
                    w = a(w, 6,
                    u),
                    w = a(w, 7, H);
                h.push(w);
                h.push(n.a, n.b, n.c);
                h.push(n.materialIndex);
                t && (t = this.faceVertexUvs[0][g], h.push(d(t[0]), d(t[1]), d(t[2])));
                y && h.push(b(n.normal));
                x && (y = n.vertexNormals, h.push(b(y[0]), b(y[1]), b(y[2])));
                u && h.push(c(n.color));
                H && (n = n.vertexColors, h.push(c(n[0]), c(n[1]), c(n[2])))
            }
            e.data = {};
            e.data.vertices = f;
            e.data.normals = k;
            0 < q.length && (e.data.colors = q);
            0 < p.length && (e.data.uvs = [p]);
            e.data.faces = h;
            return e
        },
        clone: function() {
            return (new J).copy(this)
        },
        copy: function(a) {
            var b,
                c,
                d,
                e,
                f,
                g;
            this.vertices =
            [];
            this.colors = [];
            this.faces = [];
            this.faceVertexUvs = [[]];
            this.morphTargets = [];
            this.morphNormals = [];
            this.skinWeights = [];
            this.skinIndices = [];
            this.lineDistances = [];
            this.boundingSphere = this.boundingBox = null;
            this.name = a.name;
            d = a.vertices;
            b = 0;
            for (c = d.length; b < c; b++)
                this.vertices.push(d[b].clone());
            d = a.colors;
            b = 0;
            for (c = d.length; b < c; b++)
                this.colors.push(d[b].clone());
            d = a.faces;
            b = 0;
            for (c = d.length; b < c; b++)
                this.faces.push(d[b].clone());
            b = 0;
            for (c = a.faceVertexUvs.length; b < c; b++) {
                var h = a.faceVertexUvs[b];
                void 0 ===
                this.faceVertexUvs[b] && (this.faceVertexUvs[b] = []);
                d = 0;
                for (e = h.length; d < e; d++) {
                    var k = h[d],
                        m = [];
                    f = 0;
                    for (g = k.length; f < g; f++)
                        m.push(k[f].clone());
                    this.faceVertexUvs[b].push(m)
                }
            }
            f = a.morphTargets;
            b = 0;
            for (c = f.length; b < c; b++) {
                g = {};
                g.name = f[b].name;
                if (void 0 !== f[b].vertices)
                    for (g.vertices = [], d = 0, e = f[b].vertices.length; d < e; d++)
                        g.vertices.push(f[b].vertices[d].clone());
                if (void 0 !== f[b].normals)
                    for (g.normals = [], d = 0, e = f[b].normals.length; d < e; d++)
                        g.normals.push(f[b].normals[d].clone());
                this.morphTargets.push(g)
            }
            f =
            a.morphNormals;
            b = 0;
            for (c = f.length; b < c; b++) {
                g = {};
                if (void 0 !== f[b].vertexNormals)
                    for (g.vertexNormals = [], d = 0, e = f[b].vertexNormals.length; d < e; d++)
                        h = f[b].vertexNormals[d], k = {}, k.a = h.a.clone(), k.b = h.b.clone(), k.c = h.c.clone(), g.vertexNormals.push(k);
                if (void 0 !== f[b].faceNormals)
                    for (g.faceNormals = [], d = 0, e = f[b].faceNormals.length; d < e; d++)
                        g.faceNormals.push(f[b].faceNormals[d].clone());
                this.morphNormals.push(g)
            }
            d = a.skinWeights;
            b = 0;
            for (c = d.length; b < c; b++)
                this.skinWeights.push(d[b].clone());
            d = a.skinIndices;
            b =
            0;
            for (c = d.length; b < c; b++)
                this.skinIndices.push(d[b].clone());
            d = a.lineDistances;
            b = 0;
            for (c = d.length; b < c; b++)
                this.lineDistances.push(d[b]);
            b = a.boundingBox;
            null !== b && (this.boundingBox = b.clone());
            b = a.boundingSphere;
            null !== b && (this.boundingSphere = b.clone());
            this.elementsNeedUpdate = a.elementsNeedUpdate;
            this.verticesNeedUpdate = a.verticesNeedUpdate;
            this.uvsNeedUpdate = a.uvsNeedUpdate;
            this.normalsNeedUpdate = a.normalsNeedUpdate;
            this.colorsNeedUpdate = a.colorsNeedUpdate;
            this.lineDistancesNeedUpdate = a.lineDistancesNeedUpdate;
            this.groupsNeedUpdate = a.groupsNeedUpdate;
            return this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    });
    Object.defineProperty(Z.prototype, "needsUpdate", {
        set: function(a) {
            !0 === a && this.version++
        }
    });
    Object.assign(Z.prototype, {
        isBufferAttribute: !0,
        setArray: function(a) {
            if (Array.isArray(a))
                throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.count = void 0 !== a ? a.length / this.itemSize : 0;
            this.array = a
        },
        setDynamic: function(a) {
            this.dynamic = a;
            return this
        },
        copy: function(a) {
            this.array =
            new a.array.constructor(a.array);
            this.itemSize = a.itemSize;
            this.count = a.count;
            this.normalized = a.normalized;
            this.dynamic = a.dynamic;
            return this
        },
        copyAt: function(a, b, c) {
            a *= this.itemSize;
            c *= b.itemSize;
            for (var d = 0, e = this.itemSize; d < e; d++)
                this.array[a + d] = b.array[c + d];
            return this
        },
        copyArray: function(a) {
            this.array.set(a);
            return this
        },
        copyColorsArray: function(a) {
            for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
                var f = a[d];
                void 0 === f && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",
                d), f = new G);
                b[c++] = f.r;
                b[c++] = f.g;
                b[c++] = f.b
            }
            return this
        },
        copyIndicesArray: function(a) {
            for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
                var f = a[d];
                b[c++] = f.a;
                b[c++] = f.b;
                b[c++] = f.c
            }
            return this
        },
        copyVector2sArray: function(a) {
            for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
                var f = a[d];
                void 0 === f && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", d), f = new C);
                b[c++] = f.x;
                b[c++] = f.y
            }
            return this
        },
        copyVector3sArray: function(a) {
            for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
                var f =
                a[d];
                void 0 === f && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", d), f = new n);
                b[c++] = f.x;
                b[c++] = f.y;
                b[c++] = f.z
            }
            return this
        },
        copyVector4sArray: function(a) {
            for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
                var f = a[d];
                void 0 === f && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", d), f = new fa);
                b[c++] = f.x;
                b[c++] = f.y;
                b[c++] = f.z;
                b[c++] = f.w
            }
            return this
        },
        set: function(a, b) {
            void 0 === b && (b = 0);
            this.array.set(a, b);
            return this
        },
        getX: function(a) {
            return this.array[a *
            this.itemSize]
        },
        setX: function(a, b) {
            this.array[a * this.itemSize] = b;
            return this
        },
        getY: function(a) {
            return this.array[a * this.itemSize + 1]
        },
        setY: function(a, b) {
            this.array[a * this.itemSize + 1] = b;
            return this
        },
        getZ: function(a) {
            return this.array[a * this.itemSize + 2]
        },
        setZ: function(a, b) {
            this.array[a * this.itemSize + 2] = b;
            return this
        },
        getW: function(a) {
            return this.array[a * this.itemSize + 3]
        },
        setW: function(a, b) {
            this.array[a * this.itemSize + 3] = b;
            return this
        },
        setXY: function(a, b, c) {
            a *= this.itemSize;
            this.array[a + 0] = b;
            this.array[a +
            1] = c;
            return this
        },
        setXYZ: function(a, b, c, d) {
            a *= this.itemSize;
            this.array[a + 0] = b;
            this.array[a + 1] = c;
            this.array[a + 2] = d;
            return this
        },
        setXYZW: function(a, b, c, d, e) {
            a *= this.itemSize;
            this.array[a + 0] = b;
            this.array[a + 1] = c;
            this.array[a + 2] = d;
            this.array[a + 3] = e;
            return this
        },
        onUpload: function(a) {
            this.onUploadCallback = a;
            return this
        },
        clone: function() {
            return (new this.constructor(this.array, this.itemSize)).copy(this)
        }
    });
    pc.prototype = Object.create(Z.prototype);
    pc.prototype.constructor = pc;
    qc.prototype = Object.create(Z.prototype);
    qc.prototype.constructor = qc;
    rc.prototype = Object.create(Z.prototype);
    rc.prototype.constructor = rc;
    sc.prototype = Object.create(Z.prototype);
    sc.prototype.constructor = sc;
    gb.prototype = Object.create(Z.prototype);
    gb.prototype.constructor = gb;
    tc.prototype = Object.create(Z.prototype);
    tc.prototype.constructor = tc;
    hb.prototype = Object.create(Z.prototype);
    hb.prototype.constructor = hb;
    B.prototype = Object.create(Z.prototype);
    B.prototype.constructor = B;
    uc.prototype = Object.create(Z.prototype);
    uc.prototype.constructor = uc;
    Object.assign(Je.prototype, {
        computeGroups: function(a) {
            var b,
                c = [],
                d = void 0;
            a = a.faces;
            for (var e = 0; e < a.length; e++) {
                var f = a[e];
                f.materialIndex !== d && (d = f.materialIndex, void 0 !== b && (b.count = 3 * e - b.start, c.push(b)), b = {
                    start: 3 * e,
                    materialIndex: d
                })
            }
            void 0 !== b && (b.count = 3 * e - b.start, c.push(b));
            this.groups = c
        },
        fromGeometry: function(a) {
            var b = a.faces,
                c = a.vertices,
                d = a.faceVertexUvs,
                e = d[0] && 0 < d[0].length,
                f = d[1] && 0 < d[1].length,
                g = a.morphTargets,
                h = g.length,
                k;
            if (0 < h) {
                k = [];
                for (var m = 0; m < h; m++)
                    k[m] = [];
                this.morphTargets.position =
                k
            }
            var q = a.morphNormals,
                l = q.length,
                p;
            if (0 < l) {
                p = [];
                for (m = 0; m < l; m++)
                    p[m] = [];
                this.morphTargets.normal = p
            }
            for (var r = a.skinIndices, n = a.skinWeights, t = r.length === c.length, y = n.length === c.length, m = 0; m < b.length; m++) {
                var x = b[m];
                this.vertices.push(c[x.a], c[x.b], c[x.c]);
                var u = x.vertexNormals;
                3 === u.length ? this.normals.push(u[0], u[1], u[2]) : (u = x.normal, this.normals.push(u, u, u));
                u = x.vertexColors;
                3 === u.length ? this.colors.push(u[0], u[1], u[2]) : (u = x.color, this.colors.push(u, u, u));
                !0 === e && (u = d[0][m], void 0 !== u ? this.uvs.push(u[0],
                u[1], u[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", m), this.uvs.push(new C, new C, new C)));
                !0 === f && (u = d[1][m], void 0 !== u ? this.uvs2.push(u[0], u[1], u[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", m), this.uvs2.push(new C, new C, new C)));
                for (u = 0; u < h; u++) {
                    var H = g[u].vertices;
                    k[u].push(H[x.a], H[x.b], H[x.c])
                }
                for (u = 0; u < l; u++)
                    H = q[u].vertexNormals[m], p[u].push(H.a, H.b, H.c);
                t && this.skinIndices.push(r[x.a], r[x.b], r[x.c]);
                y && this.skinWeights.push(n[x.a],
                n[x.b], n[x.c])
            }
            this.computeGroups(a);
            this.verticesNeedUpdate = a.verticesNeedUpdate;
            this.normalsNeedUpdate = a.normalsNeedUpdate;
            this.colorsNeedUpdate = a.colorsNeedUpdate;
            this.uvsNeedUpdate = a.uvsNeedUpdate;
            this.groupsNeedUpdate = a.groupsNeedUpdate;
            return this
        }
    });
    E.MaxIndex = 65535;
    Object.assign(E.prototype, xa.prototype, {
        isBufferGeometry: !0,
        getIndex: function() {
            return this.index
        },
        setIndex: function(a) {
            Array.isArray(a) ? this.index = new (65535 < Sd(a) ? hb : gb)(a, 1) : this.index = a
        },
        addAttribute: function(a, b, c) {
            if (b && b.isBufferAttribute ||
            b && b.isInterleavedBufferAttribute)
                if ("index" === a)
                    console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(b);
                else
                    return this.attributes[a] = b, this;
            else
                console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(a, new Z(b, c))
        },
        getAttribute: function(a) {
            return this.attributes[a]
        },
        removeAttribute: function(a) {
            delete this.attributes[a];
            return this
        },
        addGroup: function(a, b, c) {
            this.groups.push({
                start: a,
                count: b,
                materialIndex: void 0 !==
                c ? c : 0
            })
        },
        clearGroups: function() {
            this.groups = []
        },
        setDrawRange: function(a, b) {
            this.drawRange.start = a;
            this.drawRange.count = b
        },
        applyMatrix: function(a) {
            var b = this.attributes.position;
            void 0 !== b && (a.applyToBufferAttribute(b), b.needsUpdate = !0);
            b = this.attributes.normal;
            void 0 !== b && ((new Ba).getNormalMatrix(a).applyToBufferAttribute(b), b.needsUpdate = !0);
            null !== this.boundingBox && this.computeBoundingBox();
            null !== this.boundingSphere && this.computeBoundingSphere();
            return this
        },
        rotateX: function() {
            var a = new K;
            return function(b) {
                a.makeRotationX(b);
                this.applyMatrix(a);
                return this
            }
        }(),
        rotateY: function() {
            var a = new K;
            return function(b) {
                a.makeRotationY(b);
                this.applyMatrix(a);
                return this
            }
        }(),
        rotateZ: function() {
            var a = new K;
            return function(b) {
                a.makeRotationZ(b);
                this.applyMatrix(a);
                return this
            }
        }(),
        translate: function() {
            var a = new K;
            return function(b, c, d) {
                a.makeTranslation(b, c, d);
                this.applyMatrix(a);
                return this
            }
        }(),
        scale: function() {
            var a = new K;
            return function(b, c, d) {
                a.makeScale(b, c, d);
                this.applyMatrix(a);
                return this
            }
        }(),
        lookAt: function() {
            var a = new z;
            return function(b) {
                a.lookAt(b);
                a.updateMatrix();
                this.applyMatrix(a.matrix)
            }
        }(),
        center: function() {
            this.computeBoundingBox();
            var a = this.boundingBox.getCenter().negate();
            this.translate(a.x, a.y, a.z);
            return a
        },
        setFromObject: function(a) {
            var b = a.geometry;
            if (a.isPoints || a.isLine) {
                a = new B(3 * b.vertices.length, 3);
                var c = new B(3 * b.colors.length, 3);
                this.addAttribute("position", a.copyVector3sArray(b.vertices));
                this.addAttribute("color", c.copyColorsArray(b.colors));
                b.lineDistances && b.lineDistances.length === b.vertices.length && (a = new B(b.lineDistances.length,
                1), this.addAttribute("lineDistance", a.copyArray(b.lineDistances)));
                null !== b.boundingSphere && (this.boundingSphere = b.boundingSphere.clone());
                null !== b.boundingBox && (this.boundingBox = b.boundingBox.clone())
            } else
                a.isMesh && b && b.isGeometry && this.fromGeometry(b);
            return this
        },
        updateFromObject: function(a) {
            var b = a.geometry;
            if (a.isMesh) {
                var c = b.__directGeometry;
                !0 === b.elementsNeedUpdate && (c = void 0, b.elementsNeedUpdate = !1);
                if (void 0 === c)
                    return this.fromGeometry(b);
                c.verticesNeedUpdate = b.verticesNeedUpdate;
                c.normalsNeedUpdate =
                b.normalsNeedUpdate;
                c.colorsNeedUpdate = b.colorsNeedUpdate;
                c.uvsNeedUpdate = b.uvsNeedUpdate;
                c.groupsNeedUpdate = b.groupsNeedUpdate;
                b.verticesNeedUpdate = !1;
                b.normalsNeedUpdate = !1;
                b.colorsNeedUpdate = !1;
                b.uvsNeedUpdate = !1;
                b.groupsNeedUpdate = !1;
                b = c
            }
            !0 === b.verticesNeedUpdate && (c = this.attributes.position, void 0 !== c && (c.copyVector3sArray(b.vertices), c.needsUpdate = !0), b.verticesNeedUpdate = !1);
            !0 === b.normalsNeedUpdate && (c = this.attributes.normal, void 0 !== c && (c.copyVector3sArray(b.normals), c.needsUpdate = !0), b.normalsNeedUpdate =
            !1);
            !0 === b.colorsNeedUpdate && (c = this.attributes.color, void 0 !== c && (c.copyColorsArray(b.colors), c.needsUpdate = !0), b.colorsNeedUpdate = !1);
            b.uvsNeedUpdate && (c = this.attributes.uv, void 0 !== c && (c.copyVector2sArray(b.uvs), c.needsUpdate = !0), b.uvsNeedUpdate = !1);
            b.lineDistancesNeedUpdate && (c = this.attributes.lineDistance, void 0 !== c && (c.copyArray(b.lineDistances), c.needsUpdate = !0), b.lineDistancesNeedUpdate = !1);
            b.groupsNeedUpdate && (b.computeGroups(a.geometry), this.groups = b.groups, b.groupsNeedUpdate = !1);
            return this
        },
        fromGeometry: function(a) {
            a.__directGeometry = (new Je).fromGeometry(a);
            return this.fromDirectGeometry(a.__directGeometry)
        },
        fromDirectGeometry: function(a) {
            var b = new Float32Array(3 * a.vertices.length);
            this.addAttribute("position", (new Z(b, 3)).copyVector3sArray(a.vertices));
            0 < a.normals.length && (b = new Float32Array(3 * a.normals.length), this.addAttribute("normal", (new Z(b, 3)).copyVector3sArray(a.normals)));
            0 < a.colors.length && (b = new Float32Array(3 * a.colors.length), this.addAttribute("color", (new Z(b, 3)).copyColorsArray(a.colors)));
            0 < a.uvs.length && (b = new Float32Array(2 * a.uvs.length), this.addAttribute("uv", (new Z(b, 2)).copyVector2sArray(a.uvs)));
            0 < a.uvs2.length && (b = new Float32Array(2 * a.uvs2.length), this.addAttribute("uv2", (new Z(b, 2)).copyVector2sArray(a.uvs2)));
            0 < a.indices.length && (b = new (65535 < Sd(a.indices) ? Uint32Array : Uint16Array)(3 * a.indices.length), this.setIndex((new Z(b, 1)).copyIndicesArray(a.indices)));
            this.groups = a.groups;
            for (var c in a.morphTargets) {
                for (var b = [], d = a.morphTargets[c], e = 0, f = d.length; e < f; e++) {
                    var g = d[e],
                        h = new B(3 * g.length, 3);
                    b.push(h.copyVector3sArray(g))
                }
                this.morphAttributes[c] = b
            }
            0 < a.skinIndices.length && (c = new B(4 * a.skinIndices.length, 4), this.addAttribute("skinIndex", c.copyVector4sArray(a.skinIndices)));
            0 < a.skinWeights.length && (c = new B(4 * a.skinWeights.length, 4), this.addAttribute("skinWeight", c.copyVector4sArray(a.skinWeights)));
            null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
            null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
            return this
        },
        computeBoundingBox: function() {
            null ===
            this.boundingBox && (this.boundingBox = new Ra);
            var a = this.attributes.position;
            void 0 !== a ? this.boundingBox.setFromBufferAttribute(a) : this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        },
        computeBoundingSphere: function() {
            var a = new Ra,
                b = new n;
            return function() {
                null === this.boundingSphere &&
                (this.boundingSphere = new Ea);
                var c = this.attributes.position;
                if (c) {
                    var d = this.boundingSphere.center;
                    a.setFromBufferAttribute(c);
                    a.getCenter(d);
                    for (var e = 0, f = 0, g = c.count; f < g; f++)
                        b.x = c.getX(f), b.y = c.getY(f), b.z = c.getZ(f), e = Math.max(e, d.distanceToSquared(b));
                    this.boundingSphere.radius = Math.sqrt(e);
                    isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }
        }(),
        computeFaceNormals: function() {},
        computeVertexNormals: function() {
            var a = this.index,
                b = this.attributes,
                c = this.groups;
            if (b.position) {
                var d = b.position.array;
                if (void 0 === b.normal)
                    this.addAttribute("normal", new Z(new Float32Array(d.length), 3));
                else
                    for (var e = b.normal.array, f = 0, g = e.length; f < g; f++)
                        e[f] = 0;
                var e = b.normal.array,
                    h,
                    k,
                    m,
                    q = new n,
                    l = new n,
                    p = new n,
                    r = new n,
                    ca = new n;
                if (a) {
                    a = a.array;
                    0 === c.length && this.addGroup(0, a.length);
                    for (var t = 0, y = c.length; t < y; ++t)
                        for (f = c[t], g = f.start, h = f.count, f = g, g += h; f < g; f += 3)
                            h = 3 * a[f + 0], k = 3 * a[f + 1], m = 3 * a[f + 2],
                            q.fromArray(d, h), l.fromArray(d, k), p.fromArray(d, m), r.subVectors(p, l), ca.subVectors(q, l), r.cross(ca), e[h] += r.x, e[h + 1] += r.y, e[h + 2] += r.z, e[k] += r.x, e[k + 1] += r.y, e[k + 2] += r.z, e[m] += r.x, e[m + 1] += r.y, e[m + 2] += r.z
                } else
                    for (f = 0, g = d.length; f < g; f += 9)
                        q.fromArray(d, f), l.fromArray(d, f + 3), p.fromArray(d, f + 6), r.subVectors(p, l), ca.subVectors(q, l), r.cross(ca), e[f] = r.x, e[f + 1] = r.y, e[f + 2] = r.z, e[f + 3] = r.x, e[f + 4] = r.y, e[f + 5] = r.z, e[f + 6] = r.x, e[f + 7] = r.y, e[f + 8] = r.z;
                this.normalizeNormals();
                b.normal.needsUpdate = !0
            }
        },
        merge: function(a,
        b) {
            if (a && a.isBufferGeometry) {
                void 0 === b && (b = 0);
                var c = this.attributes,
                    d;
                for (d in c)
                    if (void 0 !== a.attributes[d])
                        for (var e = c[d].array, f = a.attributes[d], g = f.array, h = 0, f = f.itemSize * b; h < g.length; h++, f++)
                            e[f] = g[h];
                return this
            }
            console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", a)
        },
        normalizeNormals: function() {
            for (var a = this.attributes.normal, b, c, d, e, f = 0, g = a.count; f < g; f++)
                b = a.getX(f), c = a.getY(f), d = a.getZ(f), e = 1 / Math.sqrt(b * b + c * c + d * d), a.setXYZ(f, b * e, c * e, d * e)
        },
        toNonIndexed: function() {
            if (null ===
            this.index)
                return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
            var a = new E,
                b = this.index.array,
                c = this.attributes,
                d;
            for (d in c) {
                for (var e = c[d], f = e.array, e = e.itemSize, g = new f.constructor(b.length * e), h, k = 0, m = 0, q = b.length; m < q; m++) {
                    h = b[m] * e;
                    for (var l = 0; l < e; l++)
                        g[k++] = f[h++]
                }
                a.addAttribute(d, new Z(g, e))
            }
            return a
        },
        toJSON: function() {
            var a = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            a.uuid = this.uuid;
            a.type = this.type;
            "" !== this.name &&
            (a.name = this.name);
            if (void 0 !== this.parameters) {
                var b = this.parameters,
                    c;
                for (c in b)
                    void 0 !== b[c] && (a[c] = b[c]);
                return a
            }
            a.data = {
                attributes: {}
            };
            var d = this.index;
            null !== d && (b = Array.prototype.slice.call(d.array), a.data.index = {
                type: d.array.constructor.name,
                array: b
            });
            d = this.attributes;
            for (c in d) {
                var e = d[c],
                    b = Array.prototype.slice.call(e.array);
                a.data.attributes[c] = {
                    itemSize: e.itemSize,
                    type: e.array.constructor.name,
                    array: b,
                    normalized: e.normalized
                }
            }
            c = this.groups;
            0 < c.length && (a.data.groups = JSON.parse(JSON.stringify(c)));
            c = this.boundingSphere;
            null !== c && (a.data.boundingSphere = {
                center: c.center.toArray(),
                radius: c.radius
            });
            return a
        },
        clone: function() {
            return (new E).copy(this)
        },
        copy: function(a) {
            var b,
                c,
                d;
            this.index = null;
            this.attributes = {};
            this.morphAttributes = {};
            this.groups = [];
            this.boundingSphere = this.boundingBox = null;
            this.name = a.name;
            c = a.index;
            null !== c && this.setIndex(c.clone());
            c = a.attributes;
            for (b in c)
                this.addAttribute(b, c[b].clone());
            var e = a.morphAttributes;
            for (b in e) {
                var f = [],
                    g = e[b];
                c = 0;
                for (d = g.length; c < d; c++)
                    f.push(g[c].clone());
                this.morphAttributes[b] = f
            }
            b = a.groups;
            c = 0;
            for (d = b.length; c < d; c++)
                e = b[c], this.addGroup(e.start, e.count, e.materialIndex);
            b = a.boundingBox;
            null !== b && (this.boundingBox = b.clone());
            b = a.boundingSphere;
            null !== b && (this.boundingSphere = b.clone());
            this.drawRange.start = a.drawRange.start;
            this.drawRange.count = a.drawRange.count;
            return this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    });
    Gb.prototype = Object.create(J.prototype);
    Gb.prototype.constructor = Gb;
    ib.prototype = Object.create(E.prototype);
    ib.prototype.constructor =
    ib;
    vc.prototype = Object.create(J.prototype);
    vc.prototype.constructor = vc;
    jb.prototype = Object.create(E.prototype);
    jb.prototype.constructor = jb;
    ya.prototype = Object.create(U.prototype);
    ya.prototype.constructor = ya;
    ya.prototype.isMeshBasicMaterial = !0;
    ya.prototype.copy = function(a) {
        U.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.map = a.map;
        this.lightMap = a.lightMap;
        this.lightMapIntensity = a.lightMapIntensity;
        this.aoMap = a.aoMap;
        this.aoMapIntensity = a.aoMapIntensity;
        this.specularMap = a.specularMap;
        this.alphaMap =
        a.alphaMap;
        this.envMap = a.envMap;
        this.combine = a.combine;
        this.reflectivity = a.reflectivity;
        this.refractionRatio = a.refractionRatio;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.wireframeLinecap = a.wireframeLinecap;
        this.wireframeLinejoin = a.wireframeLinejoin;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        return this
    };
    Object.assign(kb.prototype, {
        set: function(a, b) {
            this.origin.copy(a);
            this.direction.copy(b);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.origin.copy(a.origin);
            this.direction.copy(a.direction);
            return this
        },
        at: function(a, b) {
            return (b || new n).copy(this.direction).multiplyScalar(a).add(this.origin)
        },
        lookAt: function(a) {
            this.direction.copy(a).sub(this.origin).normalize();
            return this
        },
        recast: function() {
            var a = new n;
            return function(b) {
                this.origin.copy(this.at(b, a));
                return this
            }
        }(),
        closestPointToPoint: function(a, b) {
            var c = b || new n;
            c.subVectors(a, this.origin);
            var d = c.dot(this.direction);
            return 0 > d ? c.copy(this.origin) : c.copy(this.direction).multiplyScalar(d).add(this.origin)
        },
        distanceToPoint: function(a) {
            return Math.sqrt(this.distanceSqToPoint(a))
        },
        distanceSqToPoint: function() {
            var a = new n;
            return function(b) {
                var c = a.subVectors(b, this.origin).dot(this.direction);
                if (0 > c)
                    return this.origin.distanceToSquared(b);
                a.copy(this.direction).multiplyScalar(c).add(this.origin);
                return a.distanceToSquared(b)
            }
        }(),
        distanceSqToSegment: function() {
            var a = new n,
                b = new n,
                c = new n;
            return function(d, e, f, g) {
                a.copy(d).add(e).multiplyScalar(.5);
                b.copy(e).sub(d).normalize();
                c.copy(this.origin).sub(a);
                var h = .5 * d.distanceTo(e),
                    k = -this.direction.dot(b),
                    m = c.dot(this.direction),
                    q = -c.dot(b),
                    l = c.lengthSq(),
                    p = Math.abs(1 - k * k),
                    r;
                0 < p ? (d = k * q - m, e = k * m - q, r = h * p, 0 <= d ? e >= -r ? e <= r ? (h = 1 / p, d *= h, e *= h, k = d * (d + k * e + 2 * m) + e * (k * d + e + 2 * q) + l) : (e = h, d = Math.max(0, -(k * e + m)), k = -d * d + e * (e + 2 * q) + l) : (e = -h, d = Math.max(0, -(k * e + m)), k = -d * d + e * (e + 2 * q) + l) : e <= -r ? (d = Math.max(0, -(-k * h + m)), e = 0 < d ? -h : Math.min(Math.max(-h, -q), h), k = -d * d + e * (e + 2 * q) + l) : e <= r ? (d = 0, e = Math.min(Math.max(-h, -q), h), k = e * (e + 2 * q) + l) : (d = Math.max(0, -(k * h + m)), e = 0 < d ? h : Math.min(Math.max(-h,
                -q), h), k = -d * d + e * (e + 2 * q) + l)) : (e = 0 < k ? -h : h, d = Math.max(0, -(k * e + m)), k = -d * d + e * (e + 2 * q) + l);
                f && f.copy(this.direction).multiplyScalar(d).add(this.origin);
                g && g.copy(b).multiplyScalar(e).add(a);
                return k
            }
        }(),
        intersectSphere: function() {
            var a = new n;
            return function(b, c) {
                a.subVectors(b.center, this.origin);
                var d = a.dot(this.direction),
                    e = a.dot(a) - d * d,
                    f = b.radius * b.radius;
                if (e > f)
                    return null;
                f = Math.sqrt(f - e);
                e = d - f;
                d += f;
                return 0 > e && 0 > d ? null : 0 > e ? this.at(d, c) : this.at(e, c)
            }
        }(),
        intersectsSphere: function(a) {
            return this.distanceToPoint(a.center) <=
            a.radius
        },
        distanceToPlane: function(a) {
            var b = a.normal.dot(this.direction);
            if (0 === b)
                return 0 === a.distanceToPoint(this.origin) ? 0 : null;
            a = -(this.origin.dot(a.normal) + a.constant) / b;
            return 0 <= a ? a : null
        },
        intersectPlane: function(a, b) {
            var c = this.distanceToPlane(a);
            return null === c ? null : this.at(c, b)
        },
        intersectsPlane: function(a) {
            var b = a.distanceToPoint(this.origin);
            return 0 === b || 0 > a.normal.dot(this.direction) * b ? !0 : !1
        },
        intersectBox: function(a, b) {
            var c,
                d,
                e,
                f,
                g;
            d = 1 / this.direction.x;
            f = 1 / this.direction.y;
            g = 1 / this.direction.z;
            var h = this.origin;
            0 <= d ? (c = (a.min.x - h.x) * d, d *= a.max.x - h.x) : (c = (a.max.x - h.x) * d, d *= a.min.x - h.x);
            0 <= f ? (e = (a.min.y - h.y) * f, f *= a.max.y - h.y) : (e = (a.max.y - h.y) * f, f *= a.min.y - h.y);
            if (c > f || e > d)
                return null;
            if (e > c || c !== c)
                c = e;
            if (f < d || d !== d)
                d = f;
            0 <= g ? (e = (a.min.z - h.z) * g, g *= a.max.z - h.z) : (e = (a.max.z - h.z) * g, g *= a.min.z - h.z);
            if (c > g || e > d)
                return null;
            if (e > c || c !== c)
                c = e;
            if (g < d || d !== d)
                d = g;
            return 0 > d ? null : this.at(0 <= c ? c : d, b)
        },
        intersectsBox: function() {
            var a = new n;
            return function(b) {
                return null !== this.intersectBox(b, a)
            }
        }(),
        intersectTriangle: function() {
            var a =
                new n,
                b = new n,
                c = new n,
                d = new n;
            return function(e, f, g, h, k) {
                b.subVectors(f, e);
                c.subVectors(g, e);
                d.crossVectors(b, c);
                f = this.direction.dot(d);
                if (0 < f) {
                    if (h)
                        return null;
                    h = 1
                } else if (0 > f)
                    h = -1, f = -f;
                else
                    return null;
                a.subVectors(this.origin, e);
                e = h * this.direction.dot(c.crossVectors(a, c));
                if (0 > e)
                    return null;
                g = h * this.direction.dot(b.cross(a));
                if (0 > g || e + g > f)
                    return null;
                e = -h * a.dot(d);
                return 0 > e ? null : this.at(e / f, k)
            }
        }(),
        applyMatrix4: function(a) {
            this.origin.applyMatrix4(a);
            this.direction.transformDirection(a);
            return this
        },
        equals: function(a) {
            return a.origin.equals(this.origin) && a.direction.equals(this.direction)
        }
    });
    Object.assign(Hb.prototype, {
        set: function(a, b) {
            this.start.copy(a);
            this.end.copy(b);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.start.copy(a.start);
            this.end.copy(a.end);
            return this
        },
        getCenter: function(a) {
            return (a || new n).addVectors(this.start, this.end).multiplyScalar(.5)
        },
        delta: function(a) {
            return (a || new n).subVectors(this.end, this.start)
        },
        distanceSq: function() {
            return this.start.distanceToSquared(this.end)
        },
        distance: function() {
            return this.start.distanceTo(this.end)
        },
        at: function(a, b) {
            var c = b || new n;
            return this.delta(c).multiplyScalar(a).add(this.start)
        },
        closestPointToPointParameter: function() {
            var a = new n,
                b = new n;
            return function(c, d) {
                a.subVectors(c, this.start);
                b.subVectors(this.end, this.start);
                var e = b.dot(b),
                    e = b.dot(a) / e;
                d && (e = Y.clamp(e, 0, 1));
                return e
            }
        }(),
        closestPointToPoint: function(a, b, c) {
            a = this.closestPointToPointParameter(a, b);
            c = c || new n;
            return this.delta(c).multiplyScalar(a).add(this.start)
        },
        applyMatrix4: function(a) {
            this.start.applyMatrix4(a);
            this.end.applyMatrix4(a);
            return this
        },
        equals: function(a) {
            return a.start.equals(this.start) && a.end.equals(this.end)
        }
    });
    Object.assign(Ta, {
        normal: function() {
            var a = new n;
            return function(b, c, d, e) {
                e = e || new n;
                e.subVectors(d, c);
                a.subVectors(b, c);
                e.cross(a);
                b = e.lengthSq();
                return 0 < b ? e.multiplyScalar(1 / Math.sqrt(b)) : e.set(0, 0, 0)
            }
        }(),
        barycoordFromPoint: function() {
            var a = new n,
                b = new n,
                c = new n;
            return function(d, e, f, g, h) {
                a.subVectors(g, e);
                b.subVectors(f, e);
                c.subVectors(d, e);
                d = a.dot(a);
                e = a.dot(b);
                f = a.dot(c);
                var k =
                b.dot(b);
                g = b.dot(c);
                var m = d * k - e * e;
                h = h || new n;
                if (0 === m)
                    return h.set(-2, -1, -1);
                m = 1 / m;
                k = (k * f - e * g) * m;
                d = (d * g - e * f) * m;
                return h.set(1 - k - d, d, k)
            }
        }(),
        containsPoint: function() {
            var a = new n;
            return function(b, c, d, e) {
                b = Ta.barycoordFromPoint(b, c, d, e, a);
                return 0 <= b.x && 0 <= b.y && 1 >= b.x + b.y
            }
        }()
    });
    Object.assign(Ta.prototype, {
        set: function(a, b, c) {
            this.a.copy(a);
            this.b.copy(b);
            this.c.copy(c);
            return this
        },
        setFromPointsAndIndices: function(a, b, c, d) {
            this.a.copy(a[b]);
            this.b.copy(a[c]);
            this.c.copy(a[d]);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.a.copy(a.a);
            this.b.copy(a.b);
            this.c.copy(a.c);
            return this
        },
        area: function() {
            var a = new n,
                b = new n;
            return function() {
                a.subVectors(this.c, this.b);
                b.subVectors(this.a, this.b);
                return .5 * a.cross(b).length()
            }
        }(),
        midpoint: function(a) {
            return (a || new n).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        },
        normal: function(a) {
            return Ta.normal(this.a, this.b, this.c, a)
        },
        plane: function(a) {
            return (a || new Aa).setFromCoplanarPoints(this.a, this.b, this.c)
        },
        barycoordFromPoint: function(a, b) {
            return Ta.barycoordFromPoint(a,
            this.a, this.b, this.c, b)
        },
        containsPoint: function(a) {
            return Ta.containsPoint(a, this.a, this.b, this.c)
        },
        closestPointToPoint: function() {
            var a = new Aa,
                b = [new Hb, new Hb, new Hb],
                c = new n,
                d = new n;
            return function(e, f) {
                var g = f || new n,
                    h = Infinity;
                a.setFromCoplanarPoints(this.a, this.b, this.c);
                a.projectPoint(e, c);
                if (!0 === this.containsPoint(c))
                    g.copy(c);
                else {
                    b[0].set(this.a, this.b);
                    b[1].set(this.b, this.c);
                    b[2].set(this.c, this.a);
                    for (var k = 0; k < b.length; k++) {
                        b[k].closestPointToPoint(c, !0, d);
                        var m = c.distanceToSquared(d);
                        m < h && (h = m, g.copy(d))
                    }
                }
                return g
            }
        }(),
        equals: function(a) {
            return a.a.equals(this.a) && a.b.equals(this.b) && a.c.equals(this.c)
        }
    });
    la.prototype = Object.assign(Object.create(z.prototype), {
        constructor: la,
        isMesh: !0,
        setDrawMode: function(a) {
            this.drawMode = a
        },
        copy: function(a) {
            z.prototype.copy.call(this, a);
            this.drawMode = a.drawMode;
            return this
        },
        updateMorphTargets: function() {
            var a = this.geometry,
                b,
                c;
            if (a.isBufferGeometry) {
                if (a = a.morphAttributes, b = Object.keys(a), 0 < b.length) {
                    var d = a[b[0]];
                    if (void 0 !== d)
                        for (this.morphTargetInfluences =
                        [], this.morphTargetDictionary = {}, a = 0, b = d.length; a < b; a++)
                            c = d[a].name || String(a), this.morphTargetInfluences.push(0), this.morphTargetDictionary[c] = a
                }
            } else if (d = a.morphTargets, void 0 !== d && 0 < d.length)
                for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, a = 0, b = d.length; a < b; a++)
                    c = d[a].name || String(a), this.morphTargetInfluences.push(0), this.morphTargetDictionary[c] = a
        },
        raycast: function() {
            function a(a, b, c, d, e, f, g) {
                Ta.barycoordFromPoint(a, b, c, d, t);
                e.multiplyScalar(t.x);
                f.multiplyScalar(t.y);
                g.multiplyScalar(t.z);
                e.add(f).add(g);
                return e.clone()
            }
            function b(a, b, c, d, e, f, g) {
                var h = a.material;
                if (null === (1 === h.side ? c.intersectTriangle(f, e, d, !0, g) : c.intersectTriangle(d, e, f, 2 !== h.side, g)))
                    return null;
                x.copy(g);
                x.applyMatrix4(a.matrixWorld);
                c = b.ray.origin.distanceTo(x);
                return c < b.near || c > b.far ? null : {
                    distance: c,
                    point: x.clone(),
                    object: a
                }
            }
            function c(c, d, e, f, m, q, l, n) {
                g.fromBufferAttribute(f, q);
                h.fromBufferAttribute(f, l);
                k.fromBufferAttribute(f, n);
                if (c = b(c, d, e, g, h, k, y))
                    m && (p.fromBufferAttribute(m, q), r.fromBufferAttribute(m,
                    l), ca.fromBufferAttribute(m, n), c.uv = a(y, g, h, k, p, r, ca)), c.face = new Sa(q, l, n, Ta.normal(g, h, k)), c.faceIndex = q;
                return c
            }
            var d = new K,
                e = new kb,
                f = new Ea,
                g = new n,
                h = new n,
                k = new n,
                m = new n,
                q = new n,
                l = new n,
                p = new C,
                r = new C,
                ca = new C,
                t = new n,
                y = new n,
                x = new n;
            return function(n, t) {
                var w = this.geometry,
                    x = this.material,
                    B = this.matrixWorld;
                if (void 0 !== x && (null === w.boundingSphere && w.computeBoundingSphere(), f.copy(w.boundingSphere), f.applyMatrix4(B), !1 !== n.ray.intersectsSphere(f) && (d.getInverse(B), e.copy(n.ray).applyMatrix4(d),
                null === w.boundingBox || !1 !== e.intersectsBox(w.boundingBox)))) {
                    var D;
                    if (w.isBufferGeometry) {
                        var O,
                            C,
                            x = w.index,
                            F = w.attributes.position,
                            B = w.attributes.uv,
                            z,
                            T;
                        if (null !== x)
                            for (z = 0, T = x.count; z < T; z += 3) {
                                if (w = x.getX(z), O = x.getX(z + 1), C = x.getX(z + 2), D = c(this, n, e, F, B, w, O, C))
                                    D.faceIndex = Math.floor(z / 3), t.push(D)
                            }
                        else
                            for (z = 0, T = F.count; z < T; z += 3)
                                if (w = z, O = z + 1, C = z + 2, D = c(this, n, e, F, B, w, O, C))
                                    D.index = w, t.push(D)
                    } else if (w.isGeometry) {
                        var E,
                            B = Array.isArray(x);
                        z = w.vertices;
                        T = w.faces;
                        O = w.faceVertexUvs[0];
                        0 < O.length && (F = O);
                        for (var G = 0, K = T.length; G < K; G++) {
                            var P = T[G];
                            D = B ? x[P.materialIndex] : x;
                            if (void 0 !== D) {
                                O = z[P.a];
                                C = z[P.b];
                                E = z[P.c];
                                if (!0 === D.morphTargets) {
                                    D = w.morphTargets;
                                    var M = this.morphTargetInfluences;
                                    g.set(0, 0, 0);
                                    h.set(0, 0, 0);
                                    k.set(0, 0, 0);
                                    for (var V = 0, pa = D.length; V < pa; V++) {
                                        var S = M[V];
                                        if (0 !== S) {
                                            var N = D[V].vertices;
                                            g.addScaledVector(m.subVectors(N[P.a], O), S);
                                            h.addScaledVector(q.subVectors(N[P.b], C), S);
                                            k.addScaledVector(l.subVectors(N[P.c], E), S)
                                        }
                                    }
                                    g.add(O);
                                    h.add(C);
                                    k.add(E);
                                    O = g;
                                    C = h;
                                    E = k
                                }
                                if (D = b(this, n, e, O, C, E, y))
                                    F && F[G] &&
                                    (M = F[G], p.copy(M[0]), r.copy(M[1]), ca.copy(M[2]), D.uv = a(y, O, C, E, p, r, ca)), D.face = P, D.faceIndex = G, t.push(D)
                            }
                        }
                    }
                }
            }
        }(),
        clone: function() {
            return (new this.constructor(this.geometry, this.material)).copy(this)
        }
    });
    var bg = 0;
    kd.prototype = Object.assign(Object.create(qa.prototype), {
        constructor: kd,
        isArrayCamera: !0
    });
    Ib.prototype.isFogExp2 = !0;
    Ib.prototype.clone = function() {
        return new Ib(this.color.getHex(), this.density)
    };
    Ib.prototype.toJSON = function(a) {
        return {
            type: "FogExp2",
            color: this.color.getHex(),
            density: this.density
        }
    };
    Jb.prototype.isFog = !0;
    Jb.prototype.clone = function() {
        return new Jb(this.color.getHex(), this.near, this.far)
    };
    Jb.prototype.toJSON = function(a) {
        return {
            type: "Fog",
            color: this.color.getHex(),
            near: this.near,
            far: this.far
        }
    };
    ld.prototype = Object.assign(Object.create(z.prototype), {
        constructor: ld,
        copy: function(a, b) {
            z.prototype.copy.call(this, a, b);
            null !== a.background && (this.background = a.background.clone());
            null !== a.fog && (this.fog = a.fog.clone());
            null !== a.overrideMaterial && (this.overrideMaterial = a.overrideMaterial.clone());
            this.autoUpdate = a.autoUpdate;
            this.matrixAutoUpdate = a.matrixAutoUpdate;
            return this
        },
        toJSON: function(a) {
            var b = z.prototype.toJSON.call(this, a);
            null !== this.background && (b.object.background = this.background.toJSON(a));
            null !== this.fog && (b.object.fog = this.fog.toJSON());
            return b
        }
    });
    Yd.prototype = Object.assign(Object.create(z.prototype), {
        constructor: Yd,
        isLensFlare: !0,
        copy: function(a) {
            z.prototype.copy.call(this, a);
            this.positionScreen.copy(a.positionScreen);
            this.customUpdateCallback = a.customUpdateCallback;
            for (var b =
                0, c = a.lensFlares.length; b < c; b++)
                this.lensFlares.push(a.lensFlares[b]);
            return this
        },
        add: function(a, b, c, d, e, f) {
            void 0 === b && (b = -1);
            void 0 === c && (c = 0);
            void 0 === f && (f = 1);
            void 0 === e && (e = new G(16777215));
            void 0 === d && (d = 1);
            c = Math.min(c, Math.max(0, c));
            this.lensFlares.push({
                texture: a,
                size: b,
                distance: c,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                rotation: 0,
                opacity: f,
                color: e,
                blending: d
            })
        },
        updateLensFlares: function() {
            var a,
                b = this.lensFlares.length,
                c,
                d = 2 * -this.positionScreen.x,
                e = 2 * -this.positionScreen.y;
            for (a = 0; a < b; a++)
                c = this.lensFlares[a],
                c.x = this.positionScreen.x + d * c.distance, c.y = this.positionScreen.y + e * c.distance, c.wantedRotation = c.x * Math.PI * .25, c.rotation += .25 * (c.wantedRotation - c.rotation)
        }
    });
    bb.prototype = Object.create(U.prototype);
    bb.prototype.constructor = bb;
    bb.prototype.isSpriteMaterial = !0;
    bb.prototype.copy = function(a) {
        U.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.map = a.map;
        this.rotation = a.rotation;
        return this
    };
    xc.prototype = Object.assign(Object.create(z.prototype), {
        constructor: xc,
        isSprite: !0,
        raycast: function() {
            var a =
                new n,
                b = new n,
                c = new n;
            return function(d, e) {
                b.setFromMatrixPosition(this.matrixWorld);
                d.ray.closestPointToPoint(b, a);
                c.setFromMatrixScale(this.matrixWorld);
                var f = c.x * c.y / 4;
                b.distanceToSquared(a) > f || (f = d.ray.origin.distanceTo(a), f < d.near || f > d.far || e.push({
                    distance: f,
                    point: a.clone(),
                    face: null,
                    object: this
                }))
            }
        }(),
        clone: function() {
            return (new this.constructor(this.material)).copy(this)
        }
    });
    yc.prototype = Object.assign(Object.create(z.prototype), {
        constructor: yc,
        copy: function(a) {
            z.prototype.copy.call(this, a,
            !1);
            a = a.levels;
            for (var b = 0, c = a.length; b < c; b++) {
                var d = a[b];
                this.addLevel(d.object.clone(), d.distance)
            }
            return this
        },
        addLevel: function(a, b) {
            void 0 === b && (b = 0);
            b = Math.abs(b);
            for (var c = this.levels, d = 0; d < c.length && !(b < c[d].distance); d++)
                ;
            c.splice(d, 0, {
                distance: b,
                object: a
            });
            this.add(a)
        },
        getObjectForDistance: function(a) {
            for (var b = this.levels, c = 1, d = b.length; c < d && !(a < b[c].distance); c++)
                ;
            return b[c - 1].object
        },
        raycast: function() {
            var a = new n;
            return function(b, c) {
                a.setFromMatrixPosition(this.matrixWorld);
                var d =
                b.ray.origin.distanceTo(a);
                this.getObjectForDistance(d).raycast(b, c)
            }
        }(),
        update: function() {
            var a = new n,
                b = new n;
            return function(c) {
                var d = this.levels;
                if (1 < d.length) {
                    a.setFromMatrixPosition(c.matrixWorld);
                    b.setFromMatrixPosition(this.matrixWorld);
                    c = a.distanceTo(b);
                    d[0].object.visible = !0;
                    for (var e = 1, f = d.length; e < f; e++)
                        if (c >= d[e].distance)
                            d[e - 1].object.visible = !1, d[e].object.visible = !0;
                        else
                            break;
                    for (; e < f; e++)
                        d[e].object.visible = !1
                }
            }
        }(),
        toJSON: function(a) {
            a = z.prototype.toJSON.call(this, a);
            a.object.levels =
            [];
            for (var b = this.levels, c = 0, d = b.length; c < d; c++) {
                var e = b[c];
                a.object.levels.push({
                    object: e.object.uuid,
                    distance: e.distance
                })
            }
            return a
        }
    });
    Object.assign(zc.prototype, {
        calculateInverses: function() {
            this.boneInverses = [];
            for (var a = 0, b = this.bones.length; a < b; a++) {
                var c = new K;
                this.bones[a] && c.getInverse(this.bones[a].matrixWorld);
                this.boneInverses.push(c)
            }
        },
        pose: function() {
            var a,
                b,
                c;
            b = 0;
            for (c = this.bones.length; b < c; b++)
                (a = this.bones[b]) && a.matrixWorld.getInverse(this.boneInverses[b]);
            b = 0;
            for (c = this.bones.length; b <
            c; b++)
                if (a = this.bones[b])
                    a.parent && a.parent.isBone ? (a.matrix.getInverse(a.parent.matrixWorld), a.matrix.multiply(a.matrixWorld)) : a.matrix.copy(a.matrixWorld), a.matrix.decompose(a.position, a.quaternion, a.scale)
        },
        update: function() {
            var a = new K,
                b = new K;
            return function() {
                for (var c = this.bones, d = this.boneInverses, e = this.boneMatrices, f = this.boneTexture, g = 0, h = c.length; g < h; g++)
                    a.multiplyMatrices(c[g] ? c[g].matrixWorld : b, d[g]), a.toArray(e, 16 * g);
                void 0 !== f && (f.needsUpdate = !0)
            }
        }(),
        clone: function() {
            return new zc(this.bones,
            this.boneInverses)
        }
    });
    md.prototype = Object.assign(Object.create(z.prototype), {
        constructor: md,
        isBone: !0
    });
    nd.prototype = Object.assign(Object.create(la.prototype), {
        constructor: nd,
        isSkinnedMesh: !0,
        initBones: function() {
            var a = [],
                b,
                c,
                d,
                e;
            if (this.geometry && void 0 !== this.geometry.bones) {
                d = 0;
                for (e = this.geometry.bones.length; d < e; d++)
                    c = this.geometry.bones[d], b = new md, a.push(b), b.name = c.name, b.position.fromArray(c.pos), b.quaternion.fromArray(c.rotq), void 0 !== c.scl && b.scale.fromArray(c.scl);
                d = 0;
                for (e = this.geometry.bones.length; d <
                e; d++)
                    c = this.geometry.bones[d], -1 !== c.parent && null !== c.parent && void 0 !== a[c.parent] ? a[c.parent].add(a[d]) : this.add(a[d])
            }
            this.updateMatrixWorld(!0);
            return a
        },
        bind: function(a, b) {
            this.skeleton = a;
            void 0 === b && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), b = this.matrixWorld);
            this.bindMatrix.copy(b);
            this.bindMatrixInverse.getInverse(b)
        },
        pose: function() {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function() {
            var a,
                b;
            if (this.geometry && this.geometry.isGeometry)
                for (b = 0; b < this.geometry.skinWeights.length; b++) {
                    var c =
                    this.geometry.skinWeights[b];
                    a = 1 / c.lengthManhattan();
                    Infinity !== a ? c.multiplyScalar(a) : c.set(1, 0, 0, 0)
                }
            else if (this.geometry && this.geometry.isBufferGeometry) {
                var c = new fa,
                    d = this.geometry.attributes.skinWeight;
                for (b = 0; b < d.count; b++)
                    c.x = d.getX(b), c.y = d.getY(b), c.z = d.getZ(b), c.w = d.getW(b), a = 1 / c.lengthManhattan(), Infinity !== a ? c.multiplyScalar(a) : c.set(1, 0, 0, 0), d.setXYZW(b, c.x, c.y, c.z, c.w)
            }
        },
        updateMatrixWorld: function(a) {
            la.prototype.updateMatrixWorld.call(this, a);
            "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) :
            "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
        },
        clone: function() {
            return (new this.constructor(this.geometry, this.material)).copy(this)
        }
    });
    ea.prototype = Object.create(U.prototype);
    ea.prototype.constructor = ea;
    ea.prototype.isLineBasicMaterial = !0;
    ea.prototype.copy = function(a) {
        U.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.linewidth = a.linewidth;
        this.linecap = a.linecap;
        this.linejoin = a.linejoin;
        return this
    };
    sa.prototype = Object.assign(Object.create(z.prototype), {
        constructor: sa,
        isLine: !0,
        raycast: function() {
            var a = new K,
                b = new kb,
                c = new Ea;
            return function(d, e) {
                var f = d.linePrecision,
                    f = f * f,
                    g = this.geometry,
                    h = this.matrixWorld;
                null === g.boundingSphere && g.computeBoundingSphere();
                c.copy(g.boundingSphere);
                c.applyMatrix4(h);
                if (!1 !== d.ray.intersectsSphere(c)) {
                    a.getInverse(h);
                    b.copy(d.ray).applyMatrix4(a);
                    var k = new n,
                        m = new n,
                        h = new n,
                        q = new n,
                        l = this && this.isLineSegments ? 2 : 1;
                    if (g.isBufferGeometry) {
                        var p = g.index,
                            r = g.attributes.position.array;
                        if (null !== p)
                            for (var p = p.array, g = 0, ca = p.length - 1; g < ca; g += l) {
                                var t = p[g + 1];
                                k.fromArray(r, 3 * p[g]);
                                m.fromArray(r, 3 * t);
                                t = b.distanceSqToSegment(k, m, q, h);
                                t > f || (q.applyMatrix4(this.matrixWorld), t = d.ray.origin.distanceTo(q), t < d.near || t > d.far || e.push({
                                    distance: t,
                                    point: h.clone().applyMatrix4(this.matrixWorld),
                                    index: g,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                }))
                            }
                        else
                            for (g = 0, ca = r.length / 3 - 1; g < ca; g += l)
                                k.fromArray(r, 3 * g), m.fromArray(r, 3 * g + 3), t = b.distanceSqToSegment(k, m, q, h), t > f || (q.applyMatrix4(this.matrixWorld),
                                t = d.ray.origin.distanceTo(q), t < d.near || t > d.far || e.push({
                                    distance: t,
                                    point: h.clone().applyMatrix4(this.matrixWorld),
                                    index: g,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                }))
                    } else if (g.isGeometry)
                        for (k = g.vertices, m = k.length, g = 0; g < m - 1; g += l)
                            t = b.distanceSqToSegment(k[g], k[g + 1], q, h), t > f || (q.applyMatrix4(this.matrixWorld), t = d.ray.origin.distanceTo(q), t < d.near || t > d.far || e.push({
                                distance: t,
                                point: h.clone().applyMatrix4(this.matrixWorld),
                                index: g,
                                face: null,
                                faceIndex: null,
                                object: this
                            }))
                }
            }
        }(),
        clone: function() {
            return (new this.constructor(this.geometry,
            this.material)).copy(this)
        }
    });
    Q.prototype = Object.assign(Object.create(sa.prototype), {
        constructor: Q,
        isLineSegments: !0
    });
    od.prototype = Object.assign(Object.create(sa.prototype), {
        constructor: od,
        isLineLoop: !0
    });
    Fa.prototype = Object.create(U.prototype);
    Fa.prototype.constructor = Fa;
    Fa.prototype.isPointsMaterial = !0;
    Fa.prototype.copy = function(a) {
        U.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.map = a.map;
        this.size = a.size;
        this.sizeAttenuation = a.sizeAttenuation;
        return this
    };
    Kb.prototype = Object.assign(Object.create(z.prototype),
    {
        constructor: Kb,
        isPoints: !0,
        raycast: function() {
            var a = new K,
                b = new kb,
                c = new Ea;
            return function(d, e) {
                function f(a, c) {
                    var f = b.distanceSqToPoint(a);
                    if (f < q) {
                        var h = b.closestPointToPoint(a);
                        h.applyMatrix4(k);
                        var m = d.ray.origin.distanceTo(h);
                        m < d.near || m > d.far || e.push({
                            distance: m,
                            distanceToRay: Math.sqrt(f),
                            point: h.clone(),
                            index: c,
                            face: null,
                            object: g
                        })
                    }
                }
                var g = this,
                    h = this.geometry,
                    k = this.matrixWorld,
                    m = d.params.Points.threshold;
                null === h.boundingSphere && h.computeBoundingSphere();
                c.copy(h.boundingSphere);
                c.applyMatrix4(k);
                c.radius += m;
                if (!1 !== d.ray.intersectsSphere(c)) {
                    a.getInverse(k);
                    b.copy(d.ray).applyMatrix4(a);
                    var m = m / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                        q = m * m,
                        m = new n;
                    if (h.isBufferGeometry) {
                        var l = h.index,
                            h = h.attributes.position.array;
                        if (null !== l)
                            for (var p = l.array, l = 0, r = p.length; l < r; l++) {
                                var ca = p[l];
                                m.fromArray(h, 3 * ca);
                                f(m, ca)
                            }
                        else
                            for (l = 0, p = h.length / 3; l < p; l++)
                                m.fromArray(h, 3 * l), f(m, l)
                    } else
                        for (m = h.vertices, l = 0, p = m.length; l < p; l++)
                            f(m[l], l)
                }
            }
        }(),
        clone: function() {
            return (new this.constructor(this.geometry, this.material)).copy(this)
        }
    });
    Ac.prototype = Object.assign(Object.create(z.prototype), {
        constructor: Ac
    });
    pd.prototype = Object.create(ba.prototype);
    pd.prototype.constructor = pd;
    Lb.prototype = Object.create(ba.prototype);
    Lb.prototype.constructor = Lb;
    Lb.prototype.isCompressedTexture = !0;
    qd.prototype = Object.create(ba.prototype);
    qd.prototype.constructor = qd;
    Bc.prototype = Object.create(ba.prototype);
    Bc.prototype.constructor = Bc;
    Bc.prototype.isDepthTexture = !0;
    Mb.prototype = Object.create(E.prototype);
    Mb.prototype.constructor = Mb;
    Cc.prototype = Object.create(J.prototype);
    Cc.prototype.constructor = Cc;
    Nb.prototype = Object.create(E.prototype);
    Nb.prototype.constructor = Nb;
    Dc.prototype = Object.create(J.prototype);
    Dc.prototype.constructor = Dc;
    za.prototype = Object.create(E.prototype);
    za.prototype.constructor = za;
    Ec.prototype = Object.create(J.prototype);
    Ec.prototype.constructor = Ec;
    Ob.prototype = Object.create(za.prototype);
    Ob.prototype.constructor = Ob;
    Fc.prototype = Object.create(J.prototype);
    Fc.prototype.constructor = Fc;
    lb.prototype = Object.create(za.prototype);
    lb.prototype.constructor =
    lb;
    Gc.prototype = Object.create(J.prototype);
    Gc.prototype.constructor = Gc;
    Pb.prototype = Object.create(za.prototype);
    Pb.prototype.constructor = Pb;
    Hc.prototype = Object.create(J.prototype);
    Hc.prototype.constructor = Hc;
    Qb.prototype = Object.create(za.prototype);
    Qb.prototype.constructor = Qb;
    Ic.prototype = Object.create(J.prototype);
    Ic.prototype.constructor = Ic;
    Rb.prototype = Object.create(E.prototype);
    Rb.prototype.constructor = Rb;
    Jc.prototype = Object.create(J.prototype);
    Jc.prototype.constructor = Jc;
    Sb.prototype = Object.create(E.prototype);
    Sb.prototype.constructor = Sb;
    Kc.prototype = Object.create(J.prototype);
    Kc.prototype.constructor = Kc;
    Tb.prototype = Object.create(E.prototype);
    Tb.prototype.constructor = Tb;
    var Ia = {
        area: function(a) {
            for (var b = a.length, c = 0, d = b - 1, e = 0; e < b; d = e++)
                c += a[d].x * a[e].y - a[e].x * a[d].y;
            return .5 * c
        },
        triangulate: function() {
            return function(a, b) {
                var c = a.length;
                if (3 > c)
                    return null;
                var d = [],
                    e = [],
                    f = [],
                    g,
                    h,
                    k;
                if (0 < Ia.area(a))
                    for (h = 0; h < c; h++)
                        e[h] = h;
                else
                    for (h = 0; h < c; h++)
                        e[h] = c - 1 - h;
                var m = 2 * c;
                for (h = c - 1; 2 < c;) {
                    if (0 >= m--) {
                        console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()");
                        break
                    }
                    g = h;
                    c <= g && (g = 0);
                    h = g + 1;
                    c <= h && (h = 0);
                    k = h + 1;
                    c <= k && (k = 0);
                    var q;
                    a:
                    {
                        var l,
                            p,
                            r,
                            n,
                            t,
                            y,
                            x,
                            u;
                        l = a[e[g]].x;
                        p = a[e[g]].y;
                        r = a[e[h]].x;
                        n = a[e[h]].y;
                        t = a[e[k]].x;
                        y = a[e[k]].y;
                        if (0 >= (r - l) * (y - p) - (n - p) * (t - l))
                            q = !1;
                        else {
                            var H,
                                w,
                                I,
                                z,
                                D,
                                O,
                                B,
                                C,
                                E,
                                G;
                            H = t - r;
                            w = y - n;
                            I = l - t;
                            z = p - y;
                            D = r - l;
                            O = n - p;
                            for (q = 0; q < c; q++)
                                if (x = a[e[q]].x, u = a[e[q]].y, !(x === l && u === p || x === r && u === n || x === t && u === y) && (B = x - l, C = u - p, E = x - r, G = u - n, x -= t, u -= y, E = H * G - w * E, B = D * C - O * B, C = I * u - z * x, E >= -Number.EPSILON && C >= -Number.EPSILON && B >= -Number.EPSILON)) {
                                    q = !1;
                                    break a
                                }
                            q = !0
                        }
                    }if (q) {
                        d.push([a[e[g]],
                        a[e[h]], a[e[k]]]);
                        f.push([e[g], e[h], e[k]]);
                        g = h;
                        for (k = h + 1; k < c; g++, k++)
                            e[g] = e[k];
                        c--;
                        m = 2 * c
                    }
                }
                return b ? f : d
            }
        }(),
        triangulateShape: function(a, b) {
            function c(a) {
                var b = a.length;
                2 < b && a[b - 1].equals(a[0]) && a.pop()
            }
            function d(a, b, c) {
                return a.x !== b.x ? a.x < b.x ? a.x <= c.x && c.x <= b.x : b.x <= c.x && c.x <= a.x : a.y < b.y ? a.y <= c.y && c.y <= b.y : b.y <= c.y && c.y <= a.y
            }
            function e(a, b, c, e, f) {
                var g = b.x - a.x,
                    h = b.y - a.y,
                    k = e.x - c.x,
                    m = e.y - c.y,
                    q = a.x - c.x,
                    l = a.y - c.y,
                    p = h * k - g * m,
                    n = h * q - g * l;
                if (Math.abs(p) > Number.EPSILON) {
                    if (0 < p) {
                        if (0 > n || n > p)
                            return [];
                        k = m * q - k *
                        l;
                        if (0 > k || k > p)
                            return []
                    } else {
                        if (0 < n || n < p)
                            return [];
                        k = m * q - k * l;
                        if (0 < k || k < p)
                            return []
                    }
                    if (0 === k)
                        return !f || 0 !== n && n !== p ? [a] : [];
                    if (k === p)
                        return !f || 0 !== n && n !== p ? [b] : [];
                    if (0 === n)
                        return [c];
                    if (n === p)
                        return [e];
                    f = k / p;
                    return [{
                        x: a.x + f * g,
                        y: a.y + f * h
                    }]
                }
                if (0 !== n || m * q !== k * l)
                    return [];
                h = 0 === g && 0 === h;
                k = 0 === k && 0 === m;
                if (h && k)
                    return a.x !== c.x || a.y !== c.y ? [] : [a];
                if (h)
                    return d(c, e, a) ? [a] : [];
                if (k)
                    return d(a, b, c) ? [c] : [];
                0 !== g ? (a.x < b.x ? (g = a, k = a.x, h = b, a = b.x) : (g = b, k = b.x, h = a, a = a.x), c.x < e.x ? (b = c, p = c.x, m = e, c = e.x) : (b = e, p = e.x, m = c, c = c.x)) :
                (a.y < b.y ? (g = a, k = a.y, h = b, a = b.y) : (g = b, k = b.y, h = a, a = a.y), c.y < e.y ? (b = c, p = c.y, m = e, c = e.y) : (b = e, p = e.y, m = c, c = c.y));
                return k <= p ? a < p ? [] : a === p ? f ? [] : [b] : a <= c ? [b, h] : [b, m] : k > c ? [] : k === c ? f ? [] : [g] : a <= c ? [g, h] : [g, m]
            }
            function f(a, b, c, d) {
                var e = b.x - a.x,
                    f = b.y - a.y;
                b = c.x - a.x;
                c = c.y - a.y;
                var g = d.x - a.x;
                d = d.y - a.y;
                a = e * c - f * b;
                e = e * d - f * g;
                return Math.abs(a) > Number.EPSILON ? (b = g * c - d * b, 0 < a ? 0 <= e && 0 <= b : 0 <= e || 0 <= b) : 0 < e
            }
            c(a);
            b.forEach(c);
            var g,
                h,
                k,
                m,
                q,
                l = {};
            k = a.concat();
            g = 0;
            for (h = b.length; g < h; g++)
                Array.prototype.push.apply(k, b[g]);
            g = 0;
            for (h =
            k.length; g < h; g++)
                q = k[g].x + ":" + k[g].y, void 0 !== l[q] && console.warn("THREE.ShapeUtils: Duplicate point", q, g), l[q] = g;
            g = function(a, b) {
                function c(a, b) {
                    var d = h.length - 1,
                        e = a - 1;
                    0 > e && (e = d);
                    var g = a + 1;
                    g > d && (g = 0);
                    d = f(h[a], h[e], h[g], k[b]);
                    if (!d)
                        return !1;
                    d = k.length - 1;
                    e = b - 1;
                    0 > e && (e = d);
                    g = b + 1;
                    g > d && (g = 0);
                    return (d = f(k[b], k[e], k[g], h[a])) ? !0 : !1
                }
                function d(a, b) {
                    var c,
                        f;
                    for (c = 0; c < h.length; c++)
                        if (f = c + 1, f %= h.length, f = e(a, b, h[c], h[f], !0), 0 < f.length)
                            return !0;
                    return !1
                }
                function g(a, c) {
                    var d,
                        f,
                        h,
                        k;
                    for (d = 0; d < m.length; d++)
                        for (f =
                        b[m[d]], h = 0; h < f.length; h++)
                            if (k = h + 1, k %= f.length, k = e(a, c, f[h], f[k], !0), 0 < k.length)
                                return !0;
                    return !1
                }
                var h = a.concat(),
                    k,
                    m = [],
                    q,
                    l,
                    p,
                    n,
                    v,
                    B = [],
                    C,
                    z,
                    E,
                    G = 0;
                for (q = b.length; G < q; G++)
                    m.push(G);
                C = 0;
                for (var K = 2 * m.length; 0 < m.length;) {
                    K--;
                    if (0 > K) {
                        console.log("Infinite Loop! Holes left:" + m.length + ", Probably Hole outside Shape!");
                        break
                    }
                    for (l = C; l < h.length; l++) {
                        p = h[l];
                        q = -1;
                        for (G = 0; G < m.length; G++)
                            if (n = m[G], v = p.x + ":" + p.y + ":" + n, void 0 === B[v]) {
                                k = b[n];
                                for (z = 0; z < k.length; z++)
                                    if (n = k[z], c(l, z) && !d(p, n) && !g(p, n)) {
                                        q = z;
                                        m.splice(G,
                                        1);
                                        C = h.slice(0, l + 1);
                                        n = h.slice(l);
                                        z = k.slice(q);
                                        E = k.slice(0, q + 1);
                                        h = C.concat(z).concat(E).concat(n);
                                        C = l;
                                        break
                                    }
                                if (0 <= q)
                                    break;
                                B[v] = !0
                            }
                        if (0 <= q)
                            break
                    }
                }
                return h
            }(a, b);
            var p = Ia.triangulate(g, !1);
            g = 0;
            for (h = p.length; g < h; g++)
                for (m = p[g], k = 0; 3 > k; k++)
                    q = m[k].x + ":" + m[k].y, q = l[q], void 0 !== q && (m[k] = q);
            return p.concat()
        },
        isClockWise: function(a) {
            return 0 > Ia.area(a)
        }
    };
    cb.prototype = Object.create(J.prototype);
    cb.prototype.constructor = cb;
    Ga.prototype = Object.create(E.prototype);
    Ga.prototype.constructor = Ga;
    Ga.prototype.getArrays =
    function() {
        var a = this.getAttribute("position"),
            a = a ? Array.prototype.slice.call(a.array) : [],
            b = this.getAttribute("uv"),
            b = b ? Array.prototype.slice.call(b.array) : [],
            c = this.index,
            c = c ? Array.prototype.slice.call(c.array) : [];
        return {
            position: a,
            uv: b,
            index: c
        }
    };
    Ga.prototype.addShapeList = function(a, b) {
        var c = a.length;
        b.arrays = this.getArrays();
        for (var d = 0; d < c; d++)
            this.addShape(a[d], b);
        this.setIndex(b.arrays.index);
        this.addAttribute("position", new B(b.arrays.position, 3));
        this.addAttribute("uv", new B(b.arrays.uv, 2))
    };
    Ga.prototype.addShape = function(a, b) {
        function c(a, b, c) {
            b || console.error("THREE.ExtrudeGeometry: vec does not exist");
            return b.clone().multiplyScalar(c).add(a)
        }
        function d(a, b, c) {
            var d,
                e,
                f;
            e = a.x - b.x;
            f = a.y - b.y;
            d = c.x - a.x;
            var g = c.y - a.y,
                h = e * e + f * f;
            if (Math.abs(e * g - f * d) > Number.EPSILON) {
                var k = Math.sqrt(h),
                    m = Math.sqrt(d * d + g * g),
                    h = b.x - f / k;
                b = b.y + e / k;
                g = ((c.x - g / m - h) * g - (c.y + d / m - b) * d) / (e * g - f * d);
                d = h + e * g - a.x;
                e = b + f * g - a.y;
                f = d * d + e * e;
                if (2 >= f)
                    return new C(d, e);
                f = Math.sqrt(f / 2)
            } else
                a = !1, e > Number.EPSILON ? d > Number.EPSILON &&
                (a = !0) : e < -Number.EPSILON ? d < -Number.EPSILON && (a = !0) : Math.sign(f) === Math.sign(g) && (a = !0), a ? (d = -f, f = Math.sqrt(h)) : (d = e, e = f, f = Math.sqrt(h / 2));
            return new C(d / f, e / f)
        }
        function e(a, b) {
            var c,
                d;
            for (L = a.length; 0 <= --L;) {
                c = L;
                d = L - 1;
                0 > d && (d = a.length - 1);
                var e,
                    f = H + 2 * y;
                for (e = 0; e < f; e++) {
                    var g = ba * e,
                        m = ba * (e + 1),
                        l = b + d + g,
                        p = b + d + m,
                        m = b + c + m;
                    h(b + c + g);
                    h(l);
                    h(m);
                    h(l);
                    h(p);
                    h(m);
                    g = q.length / 3;
                    g = D.generateSideWallUV(Z, q, g - 6, g - 3, g - 2, g - 1);
                    k(g[0]);
                    k(g[1]);
                    k(g[3]);
                    k(g[1]);
                    k(g[2]);
                    k(g[3])
                }
            }
        }
        function f(a, b, c) {
            r.push(a);
            r.push(b);
            r.push(c)
        }
        function g(a, b, c) {
            h(a);
            h(b);
            h(c);
            a = q.length / 3;
            a = D.generateTopUV(Z, q, a - 3, a - 2, a - 1);
            k(a[0]);
            k(a[1]);
            k(a[2])
        }
        function h(a) {
            l.push(q.length / 3);
            q.push(r[3 * a + 0]);
            q.push(r[3 * a + 1]);
            q.push(r[3 * a + 2])
        }
        function k(a) {
            p.push(a.x);
            p.push(a.y)
        }
        var m = b.arrays ? b.arrays : this.getArrays(),
            q = m.position,
            l = m.index,
            p = m.uv,
            r = [],
            m = void 0 !== b.amount ? b.amount : 100,
            z = void 0 !== b.bevelThickness ? b.bevelThickness : 6,
            t = void 0 !== b.bevelSize ? b.bevelSize : z - 2,
            y = void 0 !== b.bevelSegments ? b.bevelSegments : 3,
            x = void 0 !== b.bevelEnabled ? b.bevelEnabled :
            !0,
            u = void 0 !== b.curveSegments ? b.curveSegments : 12,
            H = void 0 !== b.steps ? b.steps : 1,
            w = b.extrudePath,
            I,
            G = !1,
            D = void 0 !== b.UVGenerator ? b.UVGenerator : cb.WorldUVGenerator,
            O,
            E,
            F,
            K;
        w && (I = w.getSpacedPoints(H), G = !0, x = !1, O = void 0 !== b.frames ? b.frames : w.computeFrenetFrames(H, !1), E = new n, F = new n, K = new n);
        x || (t = z = y = 0);
        var T,
            J,
            U,
            Z = this,
            w = a.extractPoints(u),
            u = w.shape,
            P = w.holes;
        if (!Ia.isClockWise(u))
            for (u = u.reverse(), J = 0, U = P.length; J < U; J++)
                T = P[J], Ia.isClockWise(T) && (P[J] = T.reverse());
        var M = Ia.triangulateShape(u, P),
            V = u;
        J = 0;
        for (U = P.length; J < U; J++)
            T = P[J], u = u.concat(T);
        var R,
            S,
            N,
            Y,
            Q,
            ba = u.length,
            X,
            fa = M.length,
            w = [],
            L = 0;
        N = V.length;
        R = N - 1;
        for (S = L + 1; L < N; L++, R++, S++)
            R === N && (R = 0), S === N && (S = 0), w[L] = d(V[L], V[R], V[S]);
        var ha = [],
            ea,
            ia = w.concat();
        J = 0;
        for (U = P.length; J < U; J++) {
            T = P[J];
            ea = [];
            L = 0;
            N = T.length;
            R = N - 1;
            for (S = L + 1; L < N; L++, R++, S++)
                R === N && (R = 0), S === N && (S = 0), ea[L] = d(T[L], T[R], T[S]);
            ha.push(ea);
            ia = ia.concat(ea)
        }
        for (R = 0; R < y; R++) {
            N = R / y;
            Y = z * Math.cos(N * Math.PI / 2);
            S = t * Math.sin(N * Math.PI / 2);
            L = 0;
            for (N = V.length; L < N; L++)
                Q = c(V[L], w[L], S),
                f(Q.x, Q.y, -Y);
            J = 0;
            for (U = P.length; J < U; J++)
                for (T = P[J], ea = ha[J], L = 0, N = T.length; L < N; L++)
                    Q = c(T[L], ea[L], S), f(Q.x, Q.y, -Y)
        }
        S = t;
        for (L = 0; L < ba; L++)
            Q = x ? c(u[L], ia[L], S) : u[L], G ? (F.copy(O.normals[0]).multiplyScalar(Q.x), E.copy(O.binormals[0]).multiplyScalar(Q.y), K.copy(I[0]).add(F).add(E), f(K.x, K.y, K.z)) : f(Q.x, Q.y, 0);
        for (N = 1; N <= H; N++)
            for (L = 0; L < ba; L++)
                Q = x ? c(u[L], ia[L], S) : u[L], G ? (F.copy(O.normals[N]).multiplyScalar(Q.x), E.copy(O.binormals[N]).multiplyScalar(Q.y), K.copy(I[N]).add(F).add(E), f(K.x, K.y, K.z)) : f(Q.x, Q.y,
                m / H * N);
        for (R = y - 1; 0 <= R; R--) {
            N = R / y;
            Y = z * Math.cos(N * Math.PI / 2);
            S = t * Math.sin(N * Math.PI / 2);
            L = 0;
            for (N = V.length; L < N; L++)
                Q = c(V[L], w[L], S), f(Q.x, Q.y, m + Y);
            J = 0;
            for (U = P.length; J < U; J++)
                for (T = P[J], ea = ha[J], L = 0, N = T.length; L < N; L++)
                    Q = c(T[L], ea[L], S), G ? f(Q.x, Q.y + I[H - 1].y, I[H - 1].x + Y) : f(Q.x, Q.y, m + Y)
        }
        (function() {
            var a = q.length / 3;
            if (x) {
                var c = 0 * ba;
                for (L = 0; L < fa; L++)
                    X = M[L], g(X[2] + c, X[1] + c, X[0] + c);
                c = ba * (H + 2 * y);
                for (L = 0; L < fa; L++)
                    X = M[L], g(X[0] + c, X[1] + c, X[2] + c)
            } else {
                for (L = 0; L < fa; L++)
                    X = M[L], g(X[2], X[1], X[0]);
                for (L = 0; L < fa; L++)
                    X =
                    M[L], g(X[0] + ba * H, X[1] + ba * H, X[2] + ba * H)
            }
            Z.addGroup(a, q.length / 3 - a, void 0 !== b.material ? b.material : 0)
        })();
        (function() {
            var a = q.length / 3,
                c = 0;
            e(V, c);
            c += V.length;
            J = 0;
            for (U = P.length; J < U; J++)
                T = P[J], e(T, c), c += T.length;
            Z.addGroup(a, q.length / 3 - a, void 0 !== b.extrudeMaterial ? b.extrudeMaterial : 1)
        })();
        b.arrays || (this.setIndex(l), this.addAttribute("position", new B(q, 3)), this.addAttribute("uv", new B(b.arrays.uv, 2)))
    };
    cb.WorldUVGenerator = {
        generateTopUV: function(a, b, c, d, e) {
            a = b[3 * d];
            d = b[3 * d + 1];
            var f = b[3 * e];
            e = b[3 * e + 1];
            return [new C(b[3 *
            c], b[3 * c + 1]), new C(a, d), new C(f, e)]
        },
        generateSideWallUV: function(a, b, c, d, e, f) {
            a = b[3 * c];
            var g = b[3 * c + 1];
            c = b[3 * c + 2];
            var h = b[3 * d],
                k = b[3 * d + 1];
            d = b[3 * d + 2];
            var m = b[3 * e],
                l = b[3 * e + 1];
            e = b[3 * e + 2];
            var n = b[3 * f],
                p = b[3 * f + 1];
            b = b[3 * f + 2];
            return .01 > Math.abs(g - k) ? [new C(a, 1 - c), new C(h, 1 - d), new C(m, 1 - e), new C(n, 1 - b)] : [new C(g, 1 - c), new C(k, 1 - d), new C(l, 1 - e), new C(p, 1 - b)]
        }
    };
    Lc.prototype = Object.create(J.prototype);
    Lc.prototype.constructor = Lc;
    Ub.prototype = Object.create(Ga.prototype);
    Ub.prototype.constructor = Ub;
    Mc.prototype =
    Object.create(J.prototype);
    Mc.prototype.constructor = Mc;
    mb.prototype = Object.create(E.prototype);
    mb.prototype.constructor = mb;
    Nc.prototype = Object.create(J.prototype);
    Nc.prototype.constructor = Nc;
    Vb.prototype = Object.create(E.prototype);
    Vb.prototype.constructor = Vb;
    Oc.prototype = Object.create(J.prototype);
    Oc.prototype.constructor = Oc;
    Wb.prototype = Object.create(E.prototype);
    Wb.prototype.constructor = Wb;
    Xb.prototype = Object.create(J.prototype);
    Xb.prototype.constructor = Xb;
    Yb.prototype = Object.create(E.prototype);
    Yb.prototype.constructor = Yb;
    Zb.prototype = Object.create(E.prototype);
    Zb.prototype.constructor = Zb;
    nb.prototype = Object.create(J.prototype);
    nb.prototype.constructor = nb;
    Ua.prototype = Object.create(E.prototype);
    Ua.prototype.constructor = Ua;
    Pc.prototype = Object.create(nb.prototype);
    Pc.prototype.constructor = Pc;
    Qc.prototype = Object.create(Ua.prototype);
    Qc.prototype.constructor = Qc;
    Rc.prototype = Object.create(J.prototype);
    Rc.prototype.constructor = Rc;
    $b.prototype = Object.create(E.prototype);
    $b.prototype.constructor =
    $b;
    var Ma = Object.freeze({
        WireframeGeometry: Mb,
        ParametricGeometry: Cc,
        ParametricBufferGeometry: Nb,
        TetrahedronGeometry: Ec,
        TetrahedronBufferGeometry: Ob,
        OctahedronGeometry: Fc,
        OctahedronBufferGeometry: lb,
        IcosahedronGeometry: Gc,
        IcosahedronBufferGeometry: Pb,
        DodecahedronGeometry: Hc,
        DodecahedronBufferGeometry: Qb,
        PolyhedronGeometry: Dc,
        PolyhedronBufferGeometry: za,
        TubeGeometry: Ic,
        TubeBufferGeometry: Rb,
        TorusKnotGeometry: Jc,
        TorusKnotBufferGeometry: Sb,
        TorusGeometry: Kc,
        TorusBufferGeometry: Tb,
        TextGeometry: Lc,
        TextBufferGeometry: Ub,
        SphereGeometry: Mc,
        SphereBufferGeometry: mb,
        RingGeometry: Nc,
        RingBufferGeometry: Vb,
        PlaneGeometry: vc,
        PlaneBufferGeometry: jb,
        LatheGeometry: Oc,
        LatheBufferGeometry: Wb,
        ShapeGeometry: Xb,
        ShapeBufferGeometry: Yb,
        ExtrudeGeometry: cb,
        ExtrudeBufferGeometry: Ga,
        EdgesGeometry: Zb,
        ConeGeometry: Pc,
        ConeBufferGeometry: Qc,
        CylinderGeometry: nb,
        CylinderBufferGeometry: Ua,
        CircleGeometry: Rc,
        CircleBufferGeometry: $b,
        BoxGeometry: Gb,
        BoxBufferGeometry: ib
    });
    ac.prototype = Object.create(ra.prototype);
    ac.prototype.constructor = ac;
    ac.prototype.isShadowMaterial =
    !0;
    bc.prototype = Object.create(ra.prototype);
    bc.prototype.constructor = bc;
    bc.prototype.isRawShaderMaterial = !0;
    Pa.prototype = Object.create(U.prototype);
    Pa.prototype.constructor = Pa;
    Pa.prototype.isMeshStandardMaterial = !0;
    Pa.prototype.copy = function(a) {
        U.prototype.copy.call(this, a);
        this.defines = {
            STANDARD: ""
        };
        this.color.copy(a.color);
        this.roughness = a.roughness;
        this.metalness = a.metalness;
        this.map = a.map;
        this.lightMap = a.lightMap;
        this.lightMapIntensity = a.lightMapIntensity;
        this.aoMap = a.aoMap;
        this.aoMapIntensity =
        a.aoMapIntensity;
        this.emissive.copy(a.emissive);
        this.emissiveMap = a.emissiveMap;
        this.emissiveIntensity = a.emissiveIntensity;
        this.bumpMap = a.bumpMap;
        this.bumpScale = a.bumpScale;
        this.normalMap = a.normalMap;
        this.normalScale.copy(a.normalScale);
        this.displacementMap = a.displacementMap;
        this.displacementScale = a.displacementScale;
        this.displacementBias = a.displacementBias;
        this.roughnessMap = a.roughnessMap;
        this.metalnessMap = a.metalnessMap;
        this.alphaMap = a.alphaMap;
        this.envMap = a.envMap;
        this.envMapIntensity = a.envMapIntensity;
        this.refractionRatio = a.refractionRatio;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.wireframeLinecap = a.wireframeLinecap;
        this.wireframeLinejoin = a.wireframeLinejoin;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        return this
    };
    ob.prototype = Object.create(Pa.prototype);
    ob.prototype.constructor = ob;
    ob.prototype.isMeshPhysicalMaterial = !0;
    ob.prototype.copy = function(a) {
        Pa.prototype.copy.call(this, a);
        this.defines = {
            PHYSICAL: ""
        };
        this.reflectivity =
        a.reflectivity;
        this.clearCoat = a.clearCoat;
        this.clearCoatRoughness = a.clearCoatRoughness;
        return this
    };
    Ja.prototype = Object.create(U.prototype);
    Ja.prototype.constructor = Ja;
    Ja.prototype.isMeshPhongMaterial = !0;
    Ja.prototype.copy = function(a) {
        U.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.specular.copy(a.specular);
        this.shininess = a.shininess;
        this.map = a.map;
        this.lightMap = a.lightMap;
        this.lightMapIntensity = a.lightMapIntensity;
        this.aoMap = a.aoMap;
        this.aoMapIntensity = a.aoMapIntensity;
        this.emissive.copy(a.emissive);
        this.emissiveMap = a.emissiveMap;
        this.emissiveIntensity = a.emissiveIntensity;
        this.bumpMap = a.bumpMap;
        this.bumpScale = a.bumpScale;
        this.normalMap = a.normalMap;
        this.normalScale.copy(a.normalScale);
        this.displacementMap = a.displacementMap;
        this.displacementScale = a.displacementScale;
        this.displacementBias = a.displacementBias;
        this.specularMap = a.specularMap;
        this.alphaMap = a.alphaMap;
        this.envMap = a.envMap;
        this.combine = a.combine;
        this.reflectivity = a.reflectivity;
        this.refractionRatio = a.refractionRatio;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.wireframeLinecap = a.wireframeLinecap;
        this.wireframeLinejoin = a.wireframeLinejoin;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        return this
    };
    pb.prototype = Object.create(Ja.prototype);
    pb.prototype.constructor = pb;
    pb.prototype.isMeshToonMaterial = !0;
    pb.prototype.copy = function(a) {
        Ja.prototype.copy.call(this, a);
        this.gradientMap = a.gradientMap;
        return this
    };
    qb.prototype = Object.create(U.prototype);
    qb.prototype.constructor =
    qb;
    qb.prototype.isMeshNormalMaterial = !0;
    qb.prototype.copy = function(a) {
        U.prototype.copy.call(this, a);
        this.bumpMap = a.bumpMap;
        this.bumpScale = a.bumpScale;
        this.normalMap = a.normalMap;
        this.normalScale.copy(a.normalScale);
        this.displacementMap = a.displacementMap;
        this.displacementScale = a.displacementScale;
        this.displacementBias = a.displacementBias;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        return this
    };
    rb.prototype = Object.create(U.prototype);
    rb.prototype.constructor = rb;
    rb.prototype.isMeshLambertMaterial = !0;
    rb.prototype.copy = function(a) {
        U.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.map = a.map;
        this.lightMap = a.lightMap;
        this.lightMapIntensity = a.lightMapIntensity;
        this.aoMap = a.aoMap;
        this.aoMapIntensity = a.aoMapIntensity;
        this.emissive.copy(a.emissive);
        this.emissiveMap = a.emissiveMap;
        this.emissiveIntensity = a.emissiveIntensity;
        this.specularMap = a.specularMap;
        this.alphaMap = a.alphaMap;
        this.envMap =
        a.envMap;
        this.combine = a.combine;
        this.reflectivity = a.reflectivity;
        this.refractionRatio = a.refractionRatio;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.wireframeLinecap = a.wireframeLinecap;
        this.wireframeLinejoin = a.wireframeLinejoin;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        return this
    };
    sb.prototype = Object.create(U.prototype);
    sb.prototype.constructor = sb;
    sb.prototype.isLineDashedMaterial = !0;
    sb.prototype.copy = function(a) {
        U.prototype.copy.call(this,
        a);
        this.color.copy(a.color);
        this.linewidth = a.linewidth;
        this.scale = a.scale;
        this.dashSize = a.dashSize;
        this.gapSize = a.gapSize;
        return this
    };
    var mg = Object.freeze({
            ShadowMaterial: ac,
            SpriteMaterial: bb,
            RawShaderMaterial: bc,
            ShaderMaterial: ra,
            PointsMaterial: Fa,
            MeshPhysicalMaterial: ob,
            MeshStandardMaterial: Pa,
            MeshPhongMaterial: Ja,
            MeshToonMaterial: pb,
            MeshNormalMaterial: qb,
            MeshLambertMaterial: rb,
            MeshDepthMaterial: Za,
            MeshBasicMaterial: ya,
            LineDashedMaterial: sb,
            LineBasicMaterial: ea,
            Material: U
        }),
        ed = {
            enabled: !1,
            files: {},
            add: function(a, b) {
                !1 !== this.enabled && (this.files[a] = b)
            },
            get: function(a) {
                if (!1 !== this.enabled)
                    return this.files[a]
            },
            remove: function(a) {
                delete this.files[a]
            },
            clear: function() {
                this.files = {}
            }
        },
        va = new Zd;
    Object.assign(Ka.prototype, {
        load: function(a, b, c, d) {
            void 0 === a && (a = "");
            void 0 !== this.path && (a = this.path + a);
            var e = this,
                f = ed.get(a);
            if (void 0 !== f)
                return e.manager.itemStart(a), setTimeout(function() {
                    b && b(f);
                    e.manager.itemEnd(a)
                }, 0), f;
            var g = a.match(/^data:(.*?)(;base64)?,(.*)$/);
            if (g) {
                var h = g[1],
                    k = !!g[2],
                    g =
                    g[3],
                    g = window.decodeURIComponent(g);
                k && (g = window.atob(g));
                try {
                    var m,
                        l = (this.responseType || "").toLowerCase();
                    switch (l) {
                    case "arraybuffer":
                    case "blob":
                        m = new ArrayBuffer(g.length);
                        for (var n = new Uint8Array(m), k = 0; k < g.length; k++)
                            n[k] = g.charCodeAt(k);
                        "blob" === l && (m = new Blob([m], {
                            type: h
                        }));
                        break;
                    case "document":
                        m = (new DOMParser).parseFromString(g, h);
                        break;
                    case "json":
                        m = JSON.parse(g);
                        break;
                    default:
                        m = g
                    }
                    window.setTimeout(function() {
                        b && b(m);
                        e.manager.itemEnd(a)
                    }, 0)
                } catch (r) {
                    window.setTimeout(function() {
                        d && d(r);
                        e.manager.itemEnd(a);
                        e.manager.itemError(a)
                    }, 0)
                }
            } else {
                var p = new XMLHttpRequest;
                p.open("GET", a, !0);
                p.addEventListener("load", function(c) {
                    var f = c.target.response;
                    ed.add(a, f);
                    200 === this.status ? (b && b(f), e.manager.itemEnd(a)) : 0 === this.status ? (console.warn("THREE.FileLoader: HTTP Status 0 received."), b && b(f), e.manager.itemEnd(a)) : (d && d(c), e.manager.itemEnd(a), e.manager.itemError(a))
                }, !1);
                void 0 !== c && p.addEventListener("progress", function(a) {
                    c(a)
                }, !1);
                p.addEventListener("error", function(b) {
                    d && d(b);
                    e.manager.itemEnd(a);
                    e.manager.itemError(a)
                }, !1);
                void 0 !== this.responseType && (p.responseType = this.responseType);
                void 0 !== this.withCredentials && (p.withCredentials = this.withCredentials);
                p.overrideMimeType && p.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
                for (h in this.requestHeader)
                    p.setRequestHeader(h, this.requestHeader[h]);
                p.send(null)
            }
            e.manager.itemStart(a);
            return p
        },
        setPath: function(a) {
            this.path = a;
            return this
        },
        setResponseType: function(a) {
            this.responseType = a;
            return this
        },
        setWithCredentials: function(a) {
            this.withCredentials =
            a;
            return this
        },
        setMimeType: function(a) {
            this.mimeType = a;
            return this
        },
        setRequestHeader: function(a) {
            this.requestHeader = a;
            return this
        }
    });
    Object.assign(Oe.prototype, {
        load: function(a, b, c, d) {
            function e(e) {
                k.load(a[e], function(a) {
                    a = f._parser(a, !0);
                    g[e] = {
                        width: a.width,
                        height: a.height,
                        format: a.format,
                        mipmaps: a.mipmaps
                    };
                    m += 1;
                    6 === m && (1 === a.mipmapCount && (h.minFilter = 1006), h.format = a.format, h.needsUpdate = !0, b && b(h))
                }, c, d)
            }
            var f = this,
                g = [],
                h = new Lb;
            h.image = g;
            var k = new Ka(this.manager);
            k.setPath(this.path);
            k.setResponseType("arraybuffer");
            if (Array.isArray(a))
                for (var m = 0, l = 0, n = a.length; l < n; ++l)
                    e(l);
            else
                k.load(a, function(a) {
                    a = f._parser(a, !0);
                    if (a.isCubemap)
                        for (var c = a.mipmaps.length / a.mipmapCount, d = 0; d < c; d++) {
                            g[d] = {
                                mipmaps: []
                            };
                            for (var e = 0; e < a.mipmapCount; e++)
                                g[d].mipmaps.push(a.mipmaps[d * a.mipmapCount + e]), g[d].format = a.format, g[d].width = a.width, g[d].height = a.height
                        }
                    else
                        h.image.width = a.width, h.image.height = a.height, h.mipmaps = a.mipmaps;
                    1 === a.mipmapCount && (h.minFilter = 1006);
                    h.format = a.format;
                    h.needsUpdate = !0;
                    b && b(h)
                }, c, d);
            return h
        },
        setPath: function(a) {
            this.path =
            a;
            return this
        }
    });
    Object.assign($d.prototype, {
        load: function(a, b, c, d) {
            var e = this,
                f = new db,
                g = new Ka(this.manager);
            g.setResponseType("arraybuffer");
            g.load(a, function(a) {
                if (a = e._parser(a))
                    void 0 !== a.image ? f.image = a.image : void 0 !== a.data && (f.image.width = a.width, f.image.height = a.height, f.image.data = a.data), f.wrapS = void 0 !== a.wrapS ? a.wrapS : 1001, f.wrapT = void 0 !== a.wrapT ? a.wrapT : 1001, f.magFilter = void 0 !== a.magFilter ? a.magFilter : 1006, f.minFilter = void 0 !== a.minFilter ? a.minFilter : 1008, f.anisotropy = void 0 !== a.anisotropy ?
                    a.anisotropy : 1, void 0 !== a.format && (f.format = a.format), void 0 !== a.type && (f.type = a.type), void 0 !== a.mipmaps && (f.mipmaps = a.mipmaps), 1 === a.mipmapCount && (f.minFilter = 1006), f.needsUpdate = !0, b && b(f, a)
            }, c, d);
            return f
        }
    });
    Object.assign(Sc.prototype, {
        load: function(a, b, c, d) {
            void 0 === a && (a = "");
            void 0 !== this.path && (a = this.path + a);
            var e = this,
                f = ed.get(a);
            if (void 0 !== f)
                return e.manager.itemStart(a), setTimeout(function() {
                    b && b(f);
                    e.manager.itemEnd(a)
                }, 0), f;
            c = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            c.addEventListener("load", function() {
                ed.add(a, this);
                b && b(this);
                e.manager.itemEnd(a)
            }, !1);
            c.addEventListener("error", function(b) {
                d && d(b);
                e.manager.itemEnd(a);
                e.manager.itemError(a)
            }, !1);
            "data:" !== a.substr(0, 5) && void 0 !== this.crossOrigin && (c.crossOrigin = this.crossOrigin);
            e.manager.itemStart(a);
            c.src = a;
            return c
        },
        setCrossOrigin: function(a) {
            this.crossOrigin = a;
            return this
        },
        setPath: function(a) {
            this.path = a;
            return this
        }
    });
    Object.assign(ae.prototype, {
        load: function(a, b, c, d) {
            function e(c) {
                g.load(a[c], function(a) {
                    f.images[c] =
                    a;
                    h++;
                    6 === h && (f.needsUpdate = !0, b && b(f))
                }, void 0, d)
            }
            var f = new Xa,
                g = new Sc(this.manager);
            g.setCrossOrigin(this.crossOrigin);
            g.setPath(this.path);
            var h = 0;
            for (c = 0; c < a.length; ++c)
                e(c);
            return f
        },
        setCrossOrigin: function(a) {
            this.crossOrigin = a;
            return this
        },
        setPath: function(a) {
            this.path = a;
            return this
        }
    });
    Object.assign(rd.prototype, {
        load: function(a, b, c, d) {
            var e = new Sc(this.manager);
            e.setCrossOrigin(this.crossOrigin);
            e.setPath(this.path);
            var f = new ba;
            f.image = e.load(a, function() {
                var c = 0 < a.search(/\.(jpg|jpeg)$/) ||
                0 === a.search(/^data\:image\/jpeg/);
                f.format = c ? 1022 : 1023;
                f.needsUpdate = !0;
                void 0 !== b && b(f)
            }, c, d);
            return f
        },
        setCrossOrigin: function(a) {
            this.crossOrigin = a;
            return this
        },
        setPath: function(a) {
            this.path = a;
            return this
        }
    });
    na.prototype = Object.assign(Object.create(z.prototype), {
        constructor: na,
        isLight: !0,
        copy: function(a) {
            z.prototype.copy.call(this, a);
            this.color.copy(a.color);
            this.intensity = a.intensity;
            return this
        },
        toJSON: function(a) {
            a = z.prototype.toJSON.call(this, a);
            a.object.color = this.color.getHex();
            a.object.intensity =
            this.intensity;
            void 0 !== this.groundColor && (a.object.groundColor = this.groundColor.getHex());
            void 0 !== this.distance && (a.object.distance = this.distance);
            void 0 !== this.angle && (a.object.angle = this.angle);
            void 0 !== this.decay && (a.object.decay = this.decay);
            void 0 !== this.penumbra && (a.object.penumbra = this.penumbra);
            void 0 !== this.shadow && (a.object.shadow = this.shadow.toJSON());
            return a
        }
    });
    sd.prototype = Object.assign(Object.create(na.prototype), {
        constructor: sd,
        isHemisphereLight: !0,
        copy: function(a) {
            na.prototype.copy.call(this,
            a);
            this.groundColor.copy(a.groundColor);
            return this
        }
    });
    Object.assign(tb.prototype, {
        copy: function(a) {
            this.camera = a.camera.clone();
            this.bias = a.bias;
            this.radius = a.radius;
            this.mapSize.copy(a.mapSize);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        toJSON: function() {
            var a = {};
            0 !== this.bias && (a.bias = this.bias);
            1 !== this.radius && (a.radius = this.radius);
            if (512 !== this.mapSize.x || 512 !== this.mapSize.y)
                a.mapSize = this.mapSize.toArray();
            a.camera = this.camera.toJSON(!1).object;
            delete a.camera.matrix;
            return a
        }
    });
    td.prototype = Object.assign(Object.create(tb.prototype), {
        constructor: td,
        isSpotLightShadow: !0,
        update: function(a) {
            var b = this.camera,
                c = 2 * Y.RAD2DEG * a.angle,
                d = this.mapSize.width / this.mapSize.height;
            a = a.distance || b.far;
            if (c !== b.fov || d !== b.aspect || a !== b.far)
                b.fov = c, b.aspect = d, b.far = a, b.updateProjectionMatrix()
        }
    });
    ud.prototype = Object.assign(Object.create(na.prototype), {
        constructor: ud,
        isSpotLight: !0,
        copy: function(a) {
            na.prototype.copy.call(this, a);
            this.distance = a.distance;
            this.angle = a.angle;
            this.penumbra =
            a.penumbra;
            this.decay = a.decay;
            this.target = a.target.clone();
            this.shadow = a.shadow.clone();
            return this
        }
    });
    vd.prototype = Object.assign(Object.create(na.prototype), {
        constructor: vd,
        isPointLight: !0,
        copy: function(a) {
            na.prototype.copy.call(this, a);
            this.distance = a.distance;
            this.decay = a.decay;
            this.shadow = a.shadow.clone();
            return this
        }
    });
    wd.prototype = Object.assign(Object.create(tb.prototype), {
        constructor: wd
    });
    xd.prototype = Object.assign(Object.create(na.prototype), {
        constructor: xd,
        isDirectionalLight: !0,
        copy: function(a) {
            na.prototype.copy.call(this,
            a);
            this.target = a.target.clone();
            this.shadow = a.shadow.clone();
            return this
        }
    });
    yd.prototype = Object.assign(Object.create(na.prototype), {
        constructor: yd,
        isAmbientLight: !0
    });
    zd.prototype = Object.assign(Object.create(na.prototype), {
        constructor: zd,
        isRectAreaLight: !0,
        copy: function(a) {
            na.prototype.copy.call(this, a);
            this.width = a.width;
            this.height = a.height;
            return this
        },
        toJSON: function(a) {
            a = na.prototype.toJSON.call(this, a);
            a.object.width = this.width;
            a.object.height = this.height;
            return a
        }
    });
    var ia = {
        arraySlice: function(a,
        b, c) {
            return ia.isTypedArray(a) ? new a.constructor(a.subarray(b, void 0 !== c ? c : a.length)) : a.slice(b, c)
        },
        convertArray: function(a, b, c) {
            return !a || !c && a.constructor === b ? a : "number" === typeof b.BYTES_PER_ELEMENT ? new b(a) : Array.prototype.slice.call(a)
        },
        isTypedArray: function(a) {
            return ArrayBuffer.isView(a) && !(a instanceof DataView)
        },
        getKeyframeOrder: function(a) {
            for (var b = a.length, c = Array(b), d = 0; d !== b; ++d)
                c[d] = d;
            c.sort(function(b, c) {
                return a[b] - a[c]
            });
            return c
        },
        sortedArray: function(a, b, c) {
            for (var d = a.length, e =
                new a.constructor(d), f = 0, g = 0; g !== d; ++f)
                for (var h = c[f] * b, k = 0; k !== b; ++k)
                    e[g++] = a[h + k];
            return e
        },
        flattenJSON: function(a, b, c, d) {
            for (var e = 1, f = a[0]; void 0 !== f && void 0 === f[d];)
                f = a[e++];
            if (void 0 !== f) {
                var g = f[d];
                if (void 0 !== g)
                    if (Array.isArray(g)) {
                        do g = f[d], void 0 !== g && (b.push(f.time), c.push.apply(c, g)), f = a[e++];
                        while (void 0 !== f)
                    } else if (void 0 !== g.toArray) {
                        do g = f[d], void 0 !== g && (b.push(f.time), g.toArray(c, c.length)), f = a[e++];
                        while (void 0 !== f)
                    } else {
                        do g = f[d], void 0 !== g && (b.push(f.time), c.push(g)), f = a[e++];
                        while (void 0 !== f)
                    }
            }
        }
    };
    Object.assign(wa.prototype, {
        evaluate: function(a) {
            var b = this.parameterPositions,
                c = this._cachedIndex,
                d = b[c],
                e = b[c - 1];
            a:
            {
                b:
                {
                    c:
                    {
                        d:
                        if (!(a < d)) {
                            for (var f = c + 2;;) {
                                if (void 0 === d) {
                                    if (a < e)
                                        break d;
                                    this._cachedIndex = c = b.length;
                                    return this.afterEnd_(c - 1, a, e)
                                }
                                if (c === f)
                                    break;
                                e = d;
                                d = b[++c];
                                if (a < d)
                                    break b
                            }
                            d = b.length;
                            break c
                        }
                        if (a >= e)
                            break a;
                        else {
                            f = b[1];
                            a < f && (c = 2, e = f);
                            for (f = c - 2;;) {
                                if (void 0 === e)
                                    return this._cachedIndex = 0, this.beforeStart_(0, a, d);
                                if (c === f)
                                    break;
                                d = e;
                                e = b[--c - 1];
                                if (a >= e)
                                    break b
                            }
                            d = c;
                            c =
                            0
                        }
                    }for (; c < d;)
                        e = c + d >>> 1, a < b[e] ? d = e : c = e + 1;
                    d = b[c];
                    e = b[c - 1];
                    if (void 0 === e)
                        return this._cachedIndex = 0, this.beforeStart_(0, a, d);
                    if (void 0 === d)
                        return this._cachedIndex = c = b.length, this.afterEnd_(c - 1, e, a)
                }this._cachedIndex = c;
                this.intervalChanged_(c, e, d)
            }return this.interpolate_(c, e, a, d)
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function() {
            return this.settings || this.DefaultSettings_
        },
        copySampleValue_: function(a) {
            var b = this.resultBuffer,
                c = this.sampleValues,
                d = this.valueSize;
            a *= d;
            for (var e = 0; e !== d; ++e)
                b[e] =
                c[a + e];
            return b
        },
        interpolate_: function(a, b, c, d) {
            throw Error("call to abstract method");
        },
        intervalChanged_: function(a, b, c) {}
    });
    Object.assign(wa.prototype, {
        beforeStart_: wa.prototype.copySampleValue_,
        afterEnd_: wa.prototype.copySampleValue_
    });
    Ad.prototype = Object.assign(Object.create(wa.prototype), {
        constructor: Ad,
        DefaultSettings_: {
            endingStart: 2400,
            endingEnd: 2400
        },
        intervalChanged_: function(a, b, c) {
            var d = this.parameterPositions,
                e = a - 2,
                f = a + 1,
                g = d[e],
                h = d[f];
            if (void 0 === g)
                switch (this.getSettings_().endingStart) {
                case 2401:
                    e =
                    a;
                    g = 2 * b - c;
                    break;
                case 2402:
                    e = d.length - 2;
                    g = b + d[e] - d[e + 1];
                    break;
                default:
                    e = a, g = c
                }
            if (void 0 === h)
                switch (this.getSettings_().endingEnd) {
                case 2401:
                    f = a;
                    h = 2 * c - b;
                    break;
                case 2402:
                    f = 1;
                    h = c + d[1] - d[0];
                    break;
                default:
                    f = a - 1, h = b
                }
            a = .5 * (c - b);
            d = this.valueSize;
            this._weightPrev = a / (b - g);
            this._weightNext = a / (h - c);
            this._offsetPrev = e * d;
            this._offsetNext = f * d
        },
        interpolate_: function(a, b, c, d) {
            var e = this.resultBuffer,
                f = this.sampleValues,
                g = this.valueSize;
            a *= g;
            var h = a - g,
                k = this._offsetPrev,
                m = this._offsetNext,
                l = this._weightPrev,
                n = this._weightNext,
                p = (c - b) / (d - b);
            c = p * p;
            d = c * p;
            b = -l * d + 2 * l * c - l * p;
            l = (1 + l) * d + (-1.5 - 2 * l) * c + (-.5 + l) * p + 1;
            p = (-1 - n) * d + (1.5 + n) * c + .5 * p;
            n = n * d - n * c;
            for (c = 0; c !== g; ++c)
                e[c] = b * f[k + c] + l * f[h + c] + p * f[a + c] + n * f[m + c];
            return e
        }
    });
    Tc.prototype = Object.assign(Object.create(wa.prototype), {
        constructor: Tc,
        interpolate_: function(a, b, c, d) {
            var e = this.resultBuffer,
                f = this.sampleValues,
                g = this.valueSize;
            a *= g;
            var h = a - g;
            b = (c - b) / (d - b);
            c = 1 - b;
            for (d = 0; d !== g; ++d)
                e[d] = f[h + d] * c + f[a + d] * b;
            return e
        }
    });
    Bd.prototype = Object.assign(Object.create(wa.prototype), {
        constructor: Bd,
        interpolate_: function(a, b, c, d) {
            return this.copySampleValue_(a - 1)
        }
    });
    var Wa;
    Wa = {
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodDiscrete: function(a) {
            return new Bd(this.times, this.values, this.getValueSize(), a)
        },
        InterpolantFactoryMethodLinear: function(a) {
            return new Tc(this.times, this.values, this.getValueSize(), a)
        },
        InterpolantFactoryMethodSmooth: function(a) {
            return new Ad(this.times, this.values, this.getValueSize(), a)
        },
        setInterpolation: function(a) {
            var b;
            switch (a) {
            case 2300:
                b = this.InterpolantFactoryMethodDiscrete;
                break;
            case 2301:
                b = this.InterpolantFactoryMethodLinear;
                break;
            case 2302:
                b = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 === b) {
                b = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant)
                    if (a !== this.DefaultInterpolation)
                        this.setInterpolation(this.DefaultInterpolation);
                    else
                        throw Error(b);
                console.warn("THREE.KeyframeTrackPrototype:", b)
            } else
                this.createInterpolant = b
        },
        getInterpolation: function() {
            switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
                return 2300;
            case this.InterpolantFactoryMethodLinear:
                return 2301;
            case this.InterpolantFactoryMethodSmooth:
                return 2302
            }
        },
        getValueSize: function() {
            return this.values.length / this.times.length
        },
        shift: function(a) {
            if (0 !== a)
                for (var b = this.times, c = 0, d = b.length; c !== d; ++c)
                    b[c] += a;
            return this
        },
        scale: function(a) {
            if (1 !== a)
                for (var b = this.times, c = 0, d = b.length; c !== d; ++c)
                    b[c] *= a;
            return this
        },
        trim: function(a, b) {
            for (var c = this.times, d = c.length, e = 0, f = d - 1; e !== d && c[e] < a;)
                ++e;
            for (; -1 !== f && c[f] > b;)
                --f;
            ++f;
            if (0 !== e || f !== d)
                e >= f && (f = Math.max(f,
                1), e = f - 1), d = this.getValueSize(), this.times = ia.arraySlice(c, e, f), this.values = ia.arraySlice(this.values, e * d, f * d);
            return this
        },
        validate: function() {
            var a = !0,
                b = this.getValueSize();
            0 !== b - Math.floor(b) && (console.error("THREE.KeyframeTrackPrototype: Invalid value size in track.", this), a = !1);
            var c = this.times,
                b = this.values,
                d = c.length;
            0 === d && (console.error("THREE.KeyframeTrackPrototype: Track is empty.", this), a = !1);
            for (var e = null, f = 0; f !== d; f++) {
                var g = c[f];
                if ("number" === typeof g && isNaN(g)) {
                    console.error("THREE.KeyframeTrackPrototype: Time is not a valid number.",
                    this, f, g);
                    a = !1;
                    break
                }
                if (null !== e && e > g) {
                    console.error("THREE.KeyframeTrackPrototype: Out of order keys.", this, f, g, e);
                    a = !1;
                    break
                }
                e = g
            }
            if (void 0 !== b && ia.isTypedArray(b))
                for (f = 0, c = b.length; f !== c; ++f)
                    if (d = b[f], isNaN(d)) {
                        console.error("THREE.KeyframeTrackPrototype: Value is not a valid number.", this, f, d);
                        a = !1;
                        break
                    }
            return a
        },
        optimize: function() {
            for (var a = this.times, b = this.values, c = this.getValueSize(), d = 2302 === this.getInterpolation(), e = 1, f = a.length - 1, g = 1; g < f; ++g) {
                var h = !1,
                    k = a[g];
                if (k !== a[g + 1] && (1 !== g || k !==
                k[0]))
                    if (d)
                        h = !0;
                    else
                        for (var m = g * c, l = m - c, n = m + c, k = 0; k !== c; ++k) {
                            var p = b[m + k];
                            if (p !== b[l + k] || p !== b[n + k]) {
                                h = !0;
                                break
                            }
                        }
                if (h) {
                    if (g !== e)
                        for (a[e] = a[g], h = g * c, m = e * c, k = 0; k !== c; ++k)
                            b[m + k] = b[h + k];
                    ++e
                }
            }
            if (0 < f) {
                a[e] = a[f];
                h = f * c;
                m = e * c;
                for (k = 0; k !== c; ++k)
                    b[m + k] = b[h + k];
                ++e
            }
            e !== a.length && (this.times = ia.arraySlice(a, 0, e), this.values = ia.arraySlice(b, 0, e * c));
            return this
        }
    };
    cc.prototype = Object.assign(Object.create(Wa), {
        constructor: cc,
        ValueTypeName: "vector"
    });
    Cd.prototype = Object.assign(Object.create(wa.prototype), {
        constructor: Cd,
        interpolate_: function(a, b, c, d) {
            var e = this.resultBuffer,
                f = this.sampleValues,
                g = this.valueSize;
            a *= g;
            b = (c - b) / (d - b);
            for (c = a + g; a !== c; a += 4)
                oa.slerpFlat(e, 0, f, a - g, f, a, b);
            return e
        }
    });
    Uc.prototype = Object.assign(Object.create(Wa), {
        constructor: Uc,
        ValueTypeName: "quaternion",
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodLinear: function(a) {
            return new Cd(this.times, this.values, this.getValueSize(), a)
        },
        InterpolantFactoryMethodSmooth: void 0
    });
    dc.prototype = Object.assign(Object.create(Wa), {
        constructor: dc,
        ValueTypeName: "number"
    });
    Dd.prototype = Object.assign(Object.create(Wa), {
        constructor: Dd,
        ValueTypeName: "string",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    });
    Ed.prototype = Object.assign(Object.create(Wa), {
        constructor: Ed,
        ValueTypeName: "bool",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    });
    Fd.prototype = Object.assign(Object.create(Wa), {
        constructor: Fd,
        ValueTypeName: "color"
    });
    vb.prototype = Wa;
    Wa.constructor = vb;
    Object.assign(vb, {
        parse: function(a) {
            if (void 0 === a.type)
                throw Error("track type undefined, can not parse");
            var b = vb._getTrackTypeForValueTypeName(a.type);
            if (void 0 === a.times) {
                var c = [],
                    d = [];
                ia.flattenJSON(a.keys, c, d, "value");
                a.times = c;
                a.values = d
            }
            return void 0 !== b.parse ? b.parse(a) : new b(a.name, a.times, a.values, a.interpolation)
        },
        toJSON: function(a) {
            var b = a.constructor;
            if (void 0 !== b.toJSON)
                b = b.toJSON(a);
            else {
                var b = {
                        name: a.name,
                        times: ia.convertArray(a.times, Array),
                        values: ia.convertArray(a.values,
                        Array)
                    },
                    c = a.getInterpolation();
                c !== a.DefaultInterpolation && (b.interpolation = c)
            }
            b.type = a.ValueTypeName;
            return b
        },
        _getTrackTypeForValueTypeName: function(a) {
            switch (a.toLowerCase()) {
            case "scalar":
            case "double":
            case "float":
            case "number":
            case "integer":
                return dc;
            case "vector":
            case "vector2":
            case "vector3":
            case "vector4":
                return cc;
            case "color":
                return Fd;
            case "quaternion":
                return Uc;
            case "bool":
            case "boolean":
                return Ed;
            case "string":
                return Dd
            }
            throw Error("Unsupported typeName: " + a);
        }
    });
    Object.assign(Da, {
        parse: function(a) {
            for (var b =
                [], c = a.tracks, d = 1 / (a.fps || 1), e = 0, f = c.length; e !== f; ++e)
                b.push(vb.parse(c[e]).scale(d));
            return new Da(a.name, a.duration, b)
        },
        toJSON: function(a) {
            var b = [],
                c = a.tracks;
            a = {
                name: a.name,
                duration: a.duration,
                tracks: b
            };
            for (var d = 0, e = c.length; d !== e; ++d)
                b.push(vb.toJSON(c[d]));
            return a
        },
        CreateFromMorphTargetSequence: function(a, b, c, d) {
            for (var e = b.length, f = [], g = 0; g < e; g++) {
                var h = [],
                    k = [];
                h.push((g + e - 1) % e, g, (g + 1) % e);
                k.push(0, 1, 0);
                var m = ia.getKeyframeOrder(h),
                    h = ia.sortedArray(h, 1, m),
                    k = ia.sortedArray(k, 1, m);
                d || 0 !== h[0] ||
                (h.push(e), k.push(k[0]));
                f.push((new dc(".morphTargetInfluences[" + b[g].name + "]", h, k)).scale(1 / c))
            }
            return new Da(a, -1, f)
        },
        findByName: function(a, b) {
            var c = a;
            Array.isArray(a) || (c = a.geometry && a.geometry.animations || a.animations);
            for (var d = 0; d < c.length; d++)
                if (c[d].name === b)
                    return c[d];
            return null
        },
        CreateClipsFromMorphTargetSequences: function(a, b, c) {
            for (var d = {}, e = /^([\w-]*?)([\d]+)$/, f = 0, g = a.length; f < g; f++) {
                var h = a[f],
                    k = h.name.match(e);
                if (k && 1 < k.length) {
                    var m = k[1];
                    (k = d[m]) || (d[m] = k = []);
                    k.push(h)
                }
            }
            a = [];
            for (m in d)
                a.push(Da.CreateFromMorphTargetSequence(m, d[m], b, c));
            return a
        },
        parseAnimation: function(a, b) {
            if (!a)
                return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
            for (var c = function(a, b, c, d, e) {
                    if (0 !== c.length) {
                        var f = [],
                            g = [];
                        ia.flattenJSON(c, f, g, d);
                        0 !== f.length && e.push(new a(b, f, g))
                    }
                }, d = [], e = a.name || "default", f = a.length || -1, g = a.fps || 30, h = a.hierarchy || [], k = 0; k < h.length; k++) {
                var m = h[k].keys;
                if (m && 0 !== m.length)
                    if (m[0].morphTargets) {
                        for (var f = {}, l = 0; l < m.length; l++)
                            if (m[l].morphTargets)
                                for (var n =
                                0; n < m[l].morphTargets.length; n++)
                                    f[m[l].morphTargets[n]] = -1;
                        for (var p in f) {
                            for (var r = [], z = [], n = 0; n !== m[l].morphTargets.length; ++n) {
                                var t = m[l];
                                r.push(t.time);
                                z.push(t.morphTarget === p ? 1 : 0)
                            }
                            d.push(new dc(".morphTargetInfluence[" + p + "]", r, z))
                        }
                        f = f.length * (g || 1)
                    } else
                        l = ".bones[" + b[k].name + "]", c(cc, l + ".position", m, "pos", d), c(Uc, l + ".quaternion", m, "rot", d), c(cc, l + ".scale", m, "scl", d)
            }
            return 0 === d.length ? null : new Da(e, f, d)
        }
    });
    Object.assign(Da.prototype, {
        resetDuration: function() {
            for (var a = 0, b = 0, c = this.tracks.length; b !==
            c; ++b)
                var d = this.tracks[b],
                    a = Math.max(a, d.times[d.times.length - 1]);
            this.duration = a
        },
        trim: function() {
            for (var a = 0; a < this.tracks.length; a++)
                this.tracks[a].trim(0, this.duration);
            return this
        },
        optimize: function() {
            for (var a = 0; a < this.tracks.length; a++)
                this.tracks[a].optimize();
            return this
        }
    });
    Object.assign(Gd.prototype, {
        load: function(a, b, c, d) {
            var e = this;
            (new Ka(e.manager)).load(a, function(a) {
                b(e.parse(JSON.parse(a)))
            }, c, d)
        },
        setTextures: function(a) {
            this.textures = a
        },
        parse: function(a) {
            function b(a) {
                void 0 ===
                c[a] && console.warn("THREE.MaterialLoader: Undefined texture", a);
                return c[a]
            }
            var c = this.textures,
                d = new mg[a.type];
            void 0 !== a.uuid && (d.uuid = a.uuid);
            void 0 !== a.name && (d.name = a.name);
            void 0 !== a.color && d.color.setHex(a.color);
            void 0 !== a.roughness && (d.roughness = a.roughness);
            void 0 !== a.metalness && (d.metalness = a.metalness);
            void 0 !== a.emissive && d.emissive.setHex(a.emissive);
            void 0 !== a.specular && d.specular.setHex(a.specular);
            void 0 !== a.shininess && (d.shininess = a.shininess);
            void 0 !== a.clearCoat && (d.clearCoat =
            a.clearCoat);
            void 0 !== a.clearCoatRoughness && (d.clearCoatRoughness = a.clearCoatRoughness);
            void 0 !== a.uniforms && (d.uniforms = a.uniforms);
            void 0 !== a.vertexShader && (d.vertexShader = a.vertexShader);
            void 0 !== a.fragmentShader && (d.fragmentShader = a.fragmentShader);
            void 0 !== a.vertexColors && (d.vertexColors = a.vertexColors);
            void 0 !== a.fog && (d.fog = a.fog);
            void 0 !== a.shading && (d.shading = a.shading);
            void 0 !== a.blending && (d.blending = a.blending);
            void 0 !== a.side && (d.side = a.side);
            void 0 !== a.opacity && (d.opacity = a.opacity);
            void 0 !== a.transparent && (d.transparent = a.transparent);
            void 0 !== a.alphaTest && (d.alphaTest = a.alphaTest);
            void 0 !== a.depthTest && (d.depthTest = a.depthTest);
            void 0 !== a.depthWrite && (d.depthWrite = a.depthWrite);
            void 0 !== a.colorWrite && (d.colorWrite = a.colorWrite);
            void 0 !== a.wireframe && (d.wireframe = a.wireframe);
            void 0 !== a.wireframeLinewidth && (d.wireframeLinewidth = a.wireframeLinewidth);
            void 0 !== a.wireframeLinecap && (d.wireframeLinecap = a.wireframeLinecap);
            void 0 !== a.wireframeLinejoin && (d.wireframeLinejoin = a.wireframeLinejoin);
            void 0 !== a.skinning && (d.skinning = a.skinning);
            void 0 !== a.morphTargets && (d.morphTargets = a.morphTargets);
            void 0 !== a.size && (d.size = a.size);
            void 0 !== a.sizeAttenuation && (d.sizeAttenuation = a.sizeAttenuation);
            void 0 !== a.map && (d.map = b(a.map));
            void 0 !== a.alphaMap && (d.alphaMap = b(a.alphaMap), d.transparent = !0);
            void 0 !== a.bumpMap && (d.bumpMap = b(a.bumpMap));
            void 0 !== a.bumpScale && (d.bumpScale = a.bumpScale);
            void 0 !== a.normalMap && (d.normalMap = b(a.normalMap));
            if (void 0 !== a.normalScale) {
                var e = a.normalScale;
                !1 === Array.isArray(e) &&
                (e = [e, e]);
                d.normalScale = (new C).fromArray(e)
            }
            void 0 !== a.displacementMap && (d.displacementMap = b(a.displacementMap));
            void 0 !== a.displacementScale && (d.displacementScale = a.displacementScale);
            void 0 !== a.displacementBias && (d.displacementBias = a.displacementBias);
            void 0 !== a.roughnessMap && (d.roughnessMap = b(a.roughnessMap));
            void 0 !== a.metalnessMap && (d.metalnessMap = b(a.metalnessMap));
            void 0 !== a.emissiveMap && (d.emissiveMap = b(a.emissiveMap));
            void 0 !== a.emissiveIntensity && (d.emissiveIntensity = a.emissiveIntensity);
            void 0 !== a.specularMap && (d.specularMap = b(a.specularMap));
            void 0 !== a.envMap && (d.envMap = b(a.envMap));
            void 0 !== a.reflectivity && (d.reflectivity = a.reflectivity);
            void 0 !== a.lightMap && (d.lightMap = b(a.lightMap));
            void 0 !== a.lightMapIntensity && (d.lightMapIntensity = a.lightMapIntensity);
            void 0 !== a.aoMap && (d.aoMap = b(a.aoMap));
            void 0 !== a.aoMapIntensity && (d.aoMapIntensity = a.aoMapIntensity);
            void 0 !== a.gradientMap && (d.gradientMap = b(a.gradientMap));
            return d
        }
    });
    Object.assign(be.prototype, {
        load: function(a, b, c, d) {
            var e =
            this;
            (new Ka(e.manager)).load(a, function(a) {
                b(e.parse(JSON.parse(a)))
            }, c, d)
        },
        parse: function(a) {
            var b = new E,
                c = a.data.index;
            void 0 !== c && (c = new ef[c.type](c.array), b.setIndex(new Z(c, 1)));
            var d = a.data.attributes,
                e;
            for (e in d) {
                var f = d[e],
                    c = new ef[f.type](f.array);
                b.addAttribute(e, new Z(c, f.itemSize, f.normalized))
            }
            e = a.data.groups || a.data.drawcalls || a.data.offsets;
            if (void 0 !== e)
                for (c = 0, d = e.length; c !== d; ++c)
                    f = e[c], b.addGroup(f.start, f.count, f.materialIndex);
            a = a.data.boundingSphere;
            void 0 !== a && (e = new n, void 0 !==
            a.center && e.fromArray(a.center), b.boundingSphere = new Ea(e, a.radius));
            return b
        }
    });
    var ef = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: "undefined" !== typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };
    ec.Handlers = {
        handlers: [],
        add: function(a, b) {
            this.handlers.push(a, b)
        },
        get: function(a) {
            for (var b = this.handlers, c = 0, d = b.length; c < d; c += 2) {
                var e =
                b[c + 1];
                if (b[c].test(a))
                    return e
            }
            return null
        }
    };
    Object.assign(ec.prototype, {
        crossOrigin: void 0,
        extractUrlBase: function(a) {
            a = a.split("/");
            if (1 === a.length)
                return "./";
            a.pop();
            return a.join("/") + "/"
        },
        initMaterials: function(a, b, c) {
            for (var d = [], e = 0; e < a.length; ++e)
                d[e] = this.createMaterial(a[e], b, c);
            return d
        },
        createMaterial: function() {
            var a = {
                    NoBlending: 0,
                    NormalBlending: 1,
                    AdditiveBlending: 2,
                    SubtractiveBlending: 3,
                    MultiplyBlending: 4,
                    CustomBlending: 5
                },
                b = new G,
                c = new rd,
                d = new Gd;
            return function(e, f, g) {
                function h(a,
                b, d, e, h) {
                    a = f + a;
                    var m = ec.Handlers.get(a);
                    null !== m ? a = m.load(a) : (c.setCrossOrigin(g), a = c.load(a));
                    void 0 !== b && (a.repeat.fromArray(b), 1 !== b[0] && (a.wrapS = 1E3), 1 !== b[1] && (a.wrapT = 1E3));
                    void 0 !== d && a.offset.fromArray(d);
                    void 0 !== e && ("repeat" === e[0] && (a.wrapS = 1E3), "mirror" === e[0] && (a.wrapS = 1002), "repeat" === e[1] && (a.wrapT = 1E3), "mirror" === e[1] && (a.wrapT = 1002));
                    void 0 !== h && (a.anisotropy = h);
                    b = Y.generateUUID();
                    k[b] = a;
                    return b
                }
                var k = {},
                    m = {
                        uuid: Y.generateUUID(),
                        type: "MeshLambertMaterial"
                    },
                    l;
                for (l in e) {
                    var n = e[l];
                    switch (l) {
                    case "DbgColor":
                    case "DbgIndex":
                    case "opticalDensity":
                    case "illumination":
                        break;
                    case "DbgName":
                        m.name = n;
                        break;
                    case "blending":
                        m.blending = a[n];
                        break;
                    case "colorAmbient":
                    case "mapAmbient":
                        console.warn("THREE.Loader.createMaterial:", l, "is no longer supported.");
                        break;
                    case "colorDiffuse":
                        m.color = b.fromArray(n).getHex();
                        break;
                    case "colorSpecular":
                        m.specular = b.fromArray(n).getHex();
                        break;
                    case "colorEmissive":
                        m.emissive = b.fromArray(n).getHex();
                        break;
                    case "specularCoef":
                        m.shininess = n;
                        break;
                    case "shading":
                        "basic" ===
                        n.toLowerCase() && (m.type = "MeshBasicMaterial");
                        "phong" === n.toLowerCase() && (m.type = "MeshPhongMaterial");
                        "standard" === n.toLowerCase() && (m.type = "MeshStandardMaterial");
                        break;
                    case "mapDiffuse":
                        m.map = h(n, e.mapDiffuseRepeat, e.mapDiffuseOffset, e.mapDiffuseWrap, e.mapDiffuseAnisotropy);
                        break;
                    case "mapDiffuseRepeat":
                    case "mapDiffuseOffset":
                    case "mapDiffuseWrap":
                    case "mapDiffuseAnisotropy":
                        break;
                    case "mapEmissive":
                        m.emissiveMap = h(n, e.mapEmissiveRepeat, e.mapEmissiveOffset, e.mapEmissiveWrap, e.mapEmissiveAnisotropy);
                        break;
                    case "mapEmissiveRepeat":
                    case "mapEmissiveOffset":
                    case "mapEmissiveWrap":
                    case "mapEmissiveAnisotropy":
                        break;
                    case "mapLight":
                        m.lightMap = h(n, e.mapLightRepeat, e.mapLightOffset, e.mapLightWrap, e.mapLightAnisotropy);
                        break;
                    case "mapLightRepeat":
                    case "mapLightOffset":
                    case "mapLightWrap":
                    case "mapLightAnisotropy":
                        break;
                    case "mapAO":
                        m.aoMap = h(n, e.mapAORepeat, e.mapAOOffset, e.mapAOWrap, e.mapAOAnisotropy);
                        break;
                    case "mapAORepeat":
                    case "mapAOOffset":
                    case "mapAOWrap":
                    case "mapAOAnisotropy":
                        break;
                    case "mapBump":
                        m.bumpMap =
                        h(n, e.mapBumpRepeat, e.mapBumpOffset, e.mapBumpWrap, e.mapBumpAnisotropy);
                        break;
                    case "mapBumpScale":
                        m.bumpScale = n;
                        break;
                    case "mapBumpRepeat":
                    case "mapBumpOffset":
                    case "mapBumpWrap":
                    case "mapBumpAnisotropy":
                        break;
                    case "mapNormal":
                        m.normalMap = h(n, e.mapNormalRepeat, e.mapNormalOffset, e.mapNormalWrap, e.mapNormalAnisotropy);
                        break;
                    case "mapNormalFactor":
                        m.normalScale = [n, n];
                        break;
                    case "mapNormalRepeat":
                    case "mapNormalOffset":
                    case "mapNormalWrap":
                    case "mapNormalAnisotropy":
                        break;
                    case "mapSpecular":
                        m.specularMap =
                        h(n, e.mapSpecularRepeat, e.mapSpecularOffset, e.mapSpecularWrap, e.mapSpecularAnisotropy);
                        break;
                    case "mapSpecularRepeat":
                    case "mapSpecularOffset":
                    case "mapSpecularWrap":
                    case "mapSpecularAnisotropy":
                        break;
                    case "mapMetalness":
                        m.metalnessMap = h(n, e.mapMetalnessRepeat, e.mapMetalnessOffset, e.mapMetalnessWrap, e.mapMetalnessAnisotropy);
                        break;
                    case "mapMetalnessRepeat":
                    case "mapMetalnessOffset":
                    case "mapMetalnessWrap":
                    case "mapMetalnessAnisotropy":
                        break;
                    case "mapRoughness":
                        m.roughnessMap = h(n, e.mapRoughnessRepeat,
                        e.mapRoughnessOffset, e.mapRoughnessWrap, e.mapRoughnessAnisotropy);
                        break;
                    case "mapRoughnessRepeat":
                    case "mapRoughnessOffset":
                    case "mapRoughnessWrap":
                    case "mapRoughnessAnisotropy":
                        break;
                    case "mapAlpha":
                        m.alphaMap = h(n, e.mapAlphaRepeat, e.mapAlphaOffset, e.mapAlphaWrap, e.mapAlphaAnisotropy);
                        break;
                    case "mapAlphaRepeat":
                    case "mapAlphaOffset":
                    case "mapAlphaWrap":
                    case "mapAlphaAnisotropy":
                        break;
                    case "flipSided":
                        m.side = 1;
                        break;
                    case "doubleSided":
                        m.side = 2;
                        break;
                    case "transparency":
                        console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity");
                        m.opacity = n;
                        break;
                    case "depthTest":
                    case "depthWrite":
                    case "colorWrite":
                    case "opacity":
                    case "reflectivity":
                    case "transparent":
                    case "visible":
                    case "wireframe":
                        m[l] = n;
                        break;
                    case "vertexColors":
                        !0 === n && (m.vertexColors = 2);
                        "face" === n && (m.vertexColors = 1);
                        break;
                    default:
                        console.error("THREE.Loader.createMaterial: Unsupported", l, n)
                    }
                }
                "MeshBasicMaterial" === m.type && delete m.emissive;
                "MeshPhongMaterial" !== m.type && delete m.specular;
                1 > m.opacity && (m.transparent = !0);
                d.setTextures(k);
                return d.parse(m)
            }
        }()
    });
    Object.assign(ce.prototype,
    {
        load: function(a, b, c, d) {
            var e = this,
                f = this.texturePath && "string" === typeof this.texturePath ? this.texturePath : ec.prototype.extractUrlBase(a),
                g = new Ka(this.manager);
            g.setWithCredentials(this.withCredentials);
            g.load(a, function(c) {
                c = JSON.parse(c);
                var d = c.metadata;
                if (void 0 !== d && (d = d.type, void 0 !== d)) {
                    if ("object" === d.toLowerCase()) {
                        console.error("THREE.JSONLoader: " + a + " should be loaded with THREE.ObjectLoader instead.");
                        return
                    }
                    if ("scene" === d.toLowerCase()) {
                        console.error("THREE.JSONLoader: " + a + " should be loaded with THREE.SceneLoader instead.");
                        return
                    }
                }
                c = e.parse(c, f);
                b(c.geometry, c.materials)
            }, c, d)
        },
        setTexturePath: function(a) {
            this.texturePath = a
        },
        parse: function() {
            return function(a, b) {
                void 0 !== a.data && (a = a.data);
                a.scale = void 0 !== a.scale ? 1 / a.scale : 1;
                var c = new J,
                    d = a,
                    e,
                    f,
                    g,
                    h,
                    k,
                    m,
                    l,
                    v,
                    p,
                    r,
                    z,
                    t,
                    y,
                    x,
                    u = d.faces;
                p = d.vertices;
                var B = d.normals,
                    w = d.colors;
                m = d.scale;
                var I = 0;
                if (void 0 !== d.uvs) {
                    for (e = 0; e < d.uvs.length; e++)
                        d.uvs[e].length && I++;
                    for (e = 0; e < I; e++)
                        c.faceVertexUvs[e] = []
                }
                h = 0;
                for (k = p.length; h < k;)
                    e = new n, e.x = p[h++] * m, e.y = p[h++] * m, e.z = p[h++] * m, c.vertices.push(e);
                h = 0;
                for (k = u.length; h < k;)
                    if (p = u[h++], r = p & 1, g = p & 2, e = p & 8, l = p & 16, z = p & 32, m = p & 64, p &= 128, r) {
                        r = new Sa;
                        r.a = u[h];
                        r.b = u[h + 1];
                        r.c = u[h + 3];
                        t = new Sa;
                        t.a = u[h + 1];
                        t.b = u[h + 2];
                        t.c = u[h + 3];
                        h += 4;
                        g && (g = u[h++], r.materialIndex = g, t.materialIndex = g);
                        g = c.faces.length;
                        if (e)
                            for (e = 0; e < I; e++)
                                for (y = d.uvs[e], c.faceVertexUvs[e][g] = [], c.faceVertexUvs[e][g + 1] = [], f = 0; 4 > f; f++)
                                    v = u[h++], x = y[2 * v], v = y[2 * v + 1], x = new C(x, v), 2 !== f && c.faceVertexUvs[e][g].push(x), 0 !== f && c.faceVertexUvs[e][g + 1].push(x);
                        l && (l = 3 * u[h++], r.normal.set(B[l++], B[l++], B[l]),
                        t.normal.copy(r.normal));
                        if (z)
                            for (e = 0; 4 > e; e++)
                                l = 3 * u[h++], z = new n(B[l++], B[l++], B[l]), 2 !== e && r.vertexNormals.push(z), 0 !== e && t.vertexNormals.push(z);
                        m && (m = u[h++], m = w[m], r.color.setHex(m), t.color.setHex(m));
                        if (p)
                            for (e = 0; 4 > e; e++)
                                m = u[h++], m = w[m], 2 !== e && r.vertexColors.push(new G(m)), 0 !== e && t.vertexColors.push(new G(m));
                        c.faces.push(r);
                        c.faces.push(t)
                    } else {
                        r = new Sa;
                        r.a = u[h++];
                        r.b = u[h++];
                        r.c = u[h++];
                        g && (g = u[h++], r.materialIndex = g);
                        g = c.faces.length;
                        if (e)
                            for (e = 0; e < I; e++)
                                for (y = d.uvs[e], c.faceVertexUvs[e][g] =
                                [], f = 0; 3 > f; f++)
                                    v = u[h++], x = y[2 * v], v = y[2 * v + 1], x = new C(x, v), c.faceVertexUvs[e][g].push(x);
                        l && (l = 3 * u[h++], r.normal.set(B[l++], B[l++], B[l]));
                        if (z)
                            for (e = 0; 3 > e; e++)
                                l = 3 * u[h++], z = new n(B[l++], B[l++], B[l]), r.vertexNormals.push(z);
                        m && (m = u[h++], r.color.setHex(w[m]));
                        if (p)
                            for (e = 0; 3 > e; e++)
                                m = u[h++], r.vertexColors.push(new G(w[m]));
                        c.faces.push(r)
                    }
                d = a;
                h = void 0 !== d.influencesPerVertex ? d.influencesPerVertex : 2;
                if (d.skinWeights)
                    for (k = 0, u = d.skinWeights.length; k < u; k += h)
                        c.skinWeights.push(new fa(d.skinWeights[k], 1 < h ? d.skinWeights[k +
                        1] : 0, 2 < h ? d.skinWeights[k + 2] : 0, 3 < h ? d.skinWeights[k + 3] : 0));
                if (d.skinIndices)
                    for (k = 0, u = d.skinIndices.length; k < u; k += h)
                        c.skinIndices.push(new fa(d.skinIndices[k], 1 < h ? d.skinIndices[k + 1] : 0, 2 < h ? d.skinIndices[k + 2] : 0, 3 < h ? d.skinIndices[k + 3] : 0));
                c.bones = d.bones;
                c.bones && 0 < c.bones.length && (c.skinWeights.length !== c.skinIndices.length || c.skinIndices.length !== c.vertices.length) && console.warn("When skinning, number of vertices (" + c.vertices.length + "), skinIndices (" + c.skinIndices.length + "), and skinWeights (" + c.skinWeights.length +
                ") should match.");
                k = a;
                u = k.scale;
                if (void 0 !== k.morphTargets)
                    for (d = 0, h = k.morphTargets.length; d < h; d++)
                        for (c.morphTargets[d] = {}, c.morphTargets[d].name = k.morphTargets[d].name, c.morphTargets[d].vertices = [], B = c.morphTargets[d].vertices, w = k.morphTargets[d].vertices, I = 0, p = w.length; I < p; I += 3)
                            m = new n, m.x = w[I] * u, m.y = w[I + 1] * u, m.z = w[I + 2] * u, B.push(m);
                if (void 0 !== k.morphColors && 0 < k.morphColors.length)
                    for (console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'), u = c.faces, k = k.morphColors[0].colors,
                    d = 0, h = u.length; d < h; d++)
                        u[d].color.fromArray(k, 3 * d);
                k = a;
                d = [];
                h = [];
                void 0 !== k.animation && h.push(k.animation);
                void 0 !== k.animations && (k.animations.length ? h = h.concat(k.animations) : h.push(k.animations));
                for (k = 0; k < h.length; k++)
                    (u = Da.parseAnimation(h[k], c.bones)) && d.push(u);
                c.morphTargets && (h = Da.CreateClipsFromMorphTargetSequences(c.morphTargets, 10), d = d.concat(h));
                0 < d.length && (c.animations = d);
                c.computeFaceNormals();
                c.computeBoundingSphere();
                if (void 0 === a.materials || 0 === a.materials.length)
                    return {
                        geometry: c
                    };
                d = ec.prototype.initMaterials(a.materials, b, this.crossOrigin);
                return {
                    geometry: c,
                    materials: d
                }
            }
        }()
    });
    Object.assign(Pe.prototype, {
        load: function(a, b, c, d) {
            "" === this.texturePath && (this.texturePath = a.substring(0, a.lastIndexOf("/") + 1));
            var e = this;
            (new Ka(e.manager)).load(a, function(c) {
                var g = null;
                try {
                    g = JSON.parse(c)
                } catch (h) {
                    void 0 !== d && d(h);
                    console.error("THREE:ObjectLoader: Can't parse " + a + ".", h.message);
                    return
                }
                c = g.metadata;
                void 0 === c || void 0 === c.type || "geometry" === c.type.toLowerCase() ? console.error("THREE.ObjectLoader: Can't load " +
                a + ". Use THREE.JSONLoader instead.") : e.parse(g, b)
            }, c, d)
        },
        setTexturePath: function(a) {
            this.texturePath = a
        },
        setCrossOrigin: function(a) {
            this.crossOrigin = a
        },
        parse: function(a, b) {
            var c = this.parseGeometries(a.geometries),
                d = this.parseImages(a.images, function() {
                    void 0 !== b && b(e)
                }),
                d = this.parseTextures(a.textures, d),
                d = this.parseMaterials(a.materials, d),
                e = this.parseObject(a.object, c, d);
            a.animations && (e.animations = this.parseAnimations(a.animations));
            void 0 !== a.images && 0 !== a.images.length || void 0 === b || b(e);
            return e
        },
        parseGeometries: function(a) {
            var b = {};
            if (void 0 !== a)
                for (var c = new ce, d = new be, e = 0, f = a.length; e < f; e++) {
                    var g,
                        h = a[e];
                    switch (h.type) {
                    case "PlaneGeometry":
                    case "PlaneBufferGeometry":
                        g = new Ma[h.type](h.width, h.height, h.widthSegments, h.heightSegments);
                        break;
                    case "BoxGeometry":
                    case "BoxBufferGeometry":
                    case "CubeGeometry":
                        g = new Ma[h.type](h.width, h.height, h.depth, h.widthSegments, h.heightSegments, h.depthSegments);
                        break;
                    case "CircleGeometry":
                    case "CircleBufferGeometry":
                        g = new Ma[h.type](h.radius, h.segments, h.thetaStart,
                        h.thetaLength);
                        break;
                    case "CylinderGeometry":
                    case "CylinderBufferGeometry":
                        g = new Ma[h.type](h.radiusTop, h.radiusBottom, h.height, h.radialSegments, h.heightSegments, h.openEnded, h.thetaStart, h.thetaLength);
                        break;
                    case "ConeGeometry":
                    case "ConeBufferGeometry":
                        g = new Ma[h.type](h.radius, h.height, h.radialSegments, h.heightSegments, h.openEnded, h.thetaStart, h.thetaLength);
                        break;
                    case "SphereGeometry":
                    case "SphereBufferGeometry":
                        g = new Ma[h.type](h.radius, h.widthSegments, h.heightSegments, h.phiStart, h.phiLength,
                        h.thetaStart, h.thetaLength);
                        break;
                    case "DodecahedronGeometry":
                    case "IcosahedronGeometry":
                    case "OctahedronGeometry":
                    case "TetrahedronGeometry":
                        g = new Ma[h.type](h.radius, h.detail);
                        break;
                    case "RingGeometry":
                    case "RingBufferGeometry":
                        g = new Ma[h.type](h.innerRadius, h.outerRadius, h.thetaSegments, h.phiSegments, h.thetaStart, h.thetaLength);
                        break;
                    case "TorusGeometry":
                    case "TorusBufferGeometry":
                        g = new Ma[h.type](h.radius, h.tube, h.radialSegments, h.tubularSegments, h.arc);
                        break;
                    case "TorusKnotGeometry":
                    case "TorusKnotBufferGeometry":
                        g =
                        new Ma[h.type](h.radius, h.tube, h.tubularSegments, h.radialSegments, h.p, h.q);
                        break;
                    case "LatheGeometry":
                    case "LatheBufferGeometry":
                        g = new Ma[h.type](h.points, h.segments, h.phiStart, h.phiLength);
                        break;
                    case "BufferGeometry":
                        g = d.parse(h);
                        break;
                    case "Geometry":
                        g = c.parse(h, this.texturePath).geometry;
                        break;
                    default:
                        console.warn('THREE.ObjectLoader: Unsupported geometry type "' + h.type + '"');
                        continue
                    }
                    g.uuid = h.uuid;
                    void 0 !== h.name && (g.name = h.name);
                    b[h.uuid] = g
                }
            return b
        },
        parseMaterials: function(a, b) {
            var c = {};
            if (void 0 !==
            a) {
                var d = new Gd;
                d.setTextures(b);
                for (var e = 0, f = a.length; e < f; e++) {
                    var g = a[e];
                    if ("MultiMaterial" === g.type) {
                        for (var h = [], k = 0; k < g.materials.length; k++)
                            h.push(d.parse(g.materials[k]));
                        c[g.uuid] = h
                    } else
                        c[g.uuid] = d.parse(g)
                }
            }
            return c
        },
        parseAnimations: function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = Da.parse(a[c]);
                b.push(d)
            }
            return b
        },
        parseImages: function(a, b) {
            function c(a) {
                d.manager.itemStart(a);
                return g.load(a, function() {
                    d.manager.itemEnd(a)
                }, void 0, function() {
                    d.manager.itemEnd(a);
                    d.manager.itemError(a)
                })
            }
            var d = this,
                e = {};
            if (void 0 !== a && 0 < a.length) {
                var f = new Zd(b),
                    g = new Sc(f);
                g.setCrossOrigin(this.crossOrigin);
                for (var f = 0, h = a.length; f < h; f++) {
                    var k = a[f],
                        m = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(k.url) ? k.url : d.texturePath + k.url;
                    e[k.uuid] = c(m)
                }
            }
            return e
        },
        parseTextures: function(a, b) {
            function c(a, b) {
                if ("number" === typeof a)
                    return a;
                console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", a);
                return b[a]
            }
            var d = {};
            if (void 0 !== a)
                for (var e = 0, f = a.length; e < f; e++) {
                    var g = a[e];
                    void 0 === g.image &&
                    console.warn('THREE.ObjectLoader: No "image" specified for', g.uuid);
                    void 0 === b[g.image] && console.warn("THREE.ObjectLoader: Undefined image", g.image);
                    var h = new ba(b[g.image]);
                    h.needsUpdate = !0;
                    h.uuid = g.uuid;
                    void 0 !== g.name && (h.name = g.name);
                    void 0 !== g.mapping && (h.mapping = c(g.mapping, ng));
                    void 0 !== g.offset && h.offset.fromArray(g.offset);
                    void 0 !== g.repeat && h.repeat.fromArray(g.repeat);
                    void 0 !== g.wrap && (h.wrapS = c(g.wrap[0], ff), h.wrapT = c(g.wrap[1], ff));
                    void 0 !== g.minFilter && (h.minFilter = c(g.minFilter, gf));
                    void 0 !== g.magFilter && (h.magFilter = c(g.magFilter, gf));
                    void 0 !== g.anisotropy && (h.anisotropy = g.anisotropy);
                    void 0 !== g.flipY && (h.flipY = g.flipY);
                    d[g.uuid] = h
                }
            return d
        },
        parseObject: function() {
            var a = new K;
            return function(b, c, d) {
                function e(a) {
                    void 0 === c[a] && console.warn("THREE.ObjectLoader: Undefined geometry", a);
                    return c[a]
                }
                function f(a) {
                    if (void 0 !== a) {
                        if (Array.isArray(a)) {
                            for (var b = [], c = 0, e = a.length; c < e; c++) {
                                var f = a[c];
                                void 0 === d[f] && console.warn("THREE.ObjectLoader: Undefined material", f);
                                b.push(d[f])
                            }
                            return b
                        }
                        void 0 ===
                        d[a] && console.warn("THREE.ObjectLoader: Undefined material", a);
                        return d[a]
                    }
                }
                var g;
                switch (b.type) {
                case "Scene":
                    g = new ld;
                    void 0 !== b.background && Number.isInteger(b.background) && (g.background = new G(b.background));
                    void 0 !== b.fog && ("Fog" === b.fog.type ? g.fog = new Jb(b.fog.color, b.fog.near, b.fog.far) : "FogExp2" === b.fog.type && (g.fog = new Ib(b.fog.color, b.fog.density)));
                    break;
                case "PerspectiveCamera":
                    g = new qa(b.fov, b.aspect, b.near, b.far);
                    void 0 !== b.focus && (g.focus = b.focus);
                    void 0 !== b.zoom && (g.zoom = b.zoom);
                    void 0 !==
                    b.filmGauge && (g.filmGauge = b.filmGauge);
                    void 0 !== b.filmOffset && (g.filmOffset = b.filmOffset);
                    void 0 !== b.view && (g.view = Object.assign({}, b.view));
                    break;
                case "OrthographicCamera":
                    g = new Fb(b.left, b.right, b.top, b.bottom, b.near, b.far);
                    break;
                case "AmbientLight":
                    g = new yd(b.color, b.intensity);
                    break;
                case "DirectionalLight":
                    g = new xd(b.color, b.intensity);
                    break;
                case "PointLight":
                    g = new vd(b.color, b.intensity, b.distance, b.decay);
                    break;
                case "RectAreaLight":
                    g = new zd(b.color, b.intensity, b.width, b.height);
                    break;
                case "SpotLight":
                    g =
                    new ud(b.color, b.intensity, b.distance, b.angle, b.penumbra, b.decay);
                    break;
                case "HemisphereLight":
                    g = new sd(b.color, b.groundColor, b.intensity);
                    break;
                case "SkinnedMesh":
                    console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
                case "Mesh":
                    g = e(b.geometry);
                    var h = f(b.material);
                    g = g.bones && 0 < g.bones.length ? new nd(g, h) : new la(g, h);
                    break;
                case "LOD":
                    g = new yc;
                    break;
                case "Line":
                    g = new sa(e(b.geometry), f(b.material), b.mode);
                    break;
                case "LineLoop":
                    g = new od(e(b.geometry), f(b.material));
                    break;
                case "LineSegments":
                    g = new Q(e(b.geometry), f(b.material));
                    break;
                case "PointCloud":
                case "Points":
                    g = new Kb(e(b.geometry), f(b.material));
                    break;
                case "Sprite":
                    g = new xc(f(b.material));
                    break;
                case "Group":
                    g = new Ac;
                    break;
                default:
                    g = new z
                }
                g.uuid = b.uuid;
                void 0 !== b.name && (g.name = b.name);
                void 0 !== b.matrix ? (a.fromArray(b.matrix), a.decompose(g.position, g.quaternion, g.scale)) : (void 0 !== b.position && g.position.fromArray(b.position), void 0 !== b.rotation && g.rotation.fromArray(b.rotation), void 0 !== b.quaternion && g.quaternion.fromArray(b.quaternion),
                void 0 !== b.scale && g.scale.fromArray(b.scale));
                void 0 !== b.castShadow && (g.castShadow = b.castShadow);
                void 0 !== b.receiveShadow && (g.receiveShadow = b.receiveShadow);
                b.shadow && (void 0 !== b.shadow.bias && (g.shadow.bias = b.shadow.bias), void 0 !== b.shadow.radius && (g.shadow.radius = b.shadow.radius), void 0 !== b.shadow.mapSize && g.shadow.mapSize.fromArray(b.shadow.mapSize), void 0 !== b.shadow.camera && (g.shadow.camera = this.parseObject(b.shadow.camera)));
                void 0 !== b.visible && (g.visible = b.visible);
                void 0 !== b.userData && (g.userData =
                b.userData);
                if (void 0 !== b.children)
                    for (var k in b.children)
                        g.add(this.parseObject(b.children[k], c, d));
                if ("LOD" === b.type)
                    for (b = b.levels, h = 0; h < b.length; h++) {
                        var m = b[h];
                        k = g.getObjectByProperty("uuid", m.object);
                        void 0 !== k && g.addLevel(k, m.distance)
                    }
                return g
            }
        }()
    });
    var ng = {
            UVMapping: 300,
            CubeReflectionMapping: 301,
            CubeRefractionMapping: 302,
            EquirectangularReflectionMapping: 303,
            EquirectangularRefractionMapping: 304,
            SphericalReflectionMapping: 305,
            CubeUVReflectionMapping: 306,
            CubeUVRefractionMapping: 307
        },
        ff = {
            RepeatWrapping: 1E3,
            ClampToEdgeWrapping: 1001,
            MirroredRepeatWrapping: 1002
        },
        gf = {
            NearestFilter: 1003,
            NearestMipMapNearestFilter: 1004,
            NearestMipMapLinearFilter: 1005,
            LinearFilter: 1006,
            LinearMipMapNearestFilter: 1007,
            LinearMipMapLinearFilter: 1008
        };
    Object.assign(ua.prototype, {
        getPoint: function() {
            console.warn("THREE.Curve: .getPoint() not implemented.");
            return null
        },
        getPointAt: function(a) {
            a = this.getUtoTmapping(a);
            return this.getPoint(a)
        },
        getPoints: function(a) {
            void 0 === a && (a = 5);
            for (var b = [], c = 0; c <= a; c++)
                b.push(this.getPoint(c /
                a));
            return b
        },
        getSpacedPoints: function(a) {
            void 0 === a && (a = 5);
            for (var b = [], c = 0; c <= a; c++)
                b.push(this.getPointAt(c / a));
            return b
        },
        getLength: function() {
            var a = this.getLengths();
            return a[a.length - 1]
        },
        getLengths: function(a) {
            void 0 === a && (a = this.arcLengthDivisions);
            if (this.cacheArcLengths && this.cacheArcLengths.length === a + 1 && !this.needsUpdate)
                return this.cacheArcLengths;
            this.needsUpdate = !1;
            var b = [],
                c,
                d = this.getPoint(0),
                e,
                f = 0;
            b.push(0);
            for (e = 1; e <= a; e++)
                c = this.getPoint(e / a), f += c.distanceTo(d), b.push(f), d = c;
            return this.cacheArcLengths =
            b
        },
        updateArcLengths: function() {
            this.needsUpdate = !0;
            this.getLengths()
        },
        getUtoTmapping: function(a, b) {
            var c = this.getLengths(),
                d,
                e = c.length,
                f;
            f = b ? b : a * c[e - 1];
            for (var g = 0, h = e - 1, k; g <= h;)
                if (d = Math.floor(g + (h - g) / 2), k = c[d] - f, 0 > k)
                    g = d + 1;
                else if (0 < k)
                    h = d - 1;
                else {
                    h = d;
                    break
                }
            d = h;
            if (c[d] === f)
                return d / (e - 1);
            g = c[d];
            return (d + (f - g) / (c[d + 1] - g)) / (e - 1)
        },
        getTangent: function(a) {
            var b = a - 1E-4;
            a += 1E-4;
            0 > b && (b = 0);
            1 < a && (a = 1);
            b = this.getPoint(b);
            return this.getPoint(a).clone().sub(b).normalize()
        },
        getTangentAt: function(a) {
            a = this.getUtoTmapping(a);
            return this.getTangent(a)
        },
        computeFrenetFrames: function(a, b) {
            var c = new n,
                d = [],
                e = [],
                f = [],
                g = new n,
                h = new K,
                k,
                m;
            for (k = 0; k <= a; k++)
                m = k / a, d[k] = this.getTangentAt(m), d[k].normalize();
            e[0] = new n;
            f[0] = new n;
            k = Number.MAX_VALUE;
            m = Math.abs(d[0].x);
            var l = Math.abs(d[0].y),
                v = Math.abs(d[0].z);
            m <= k && (k = m, c.set(1, 0, 0));
            l <= k && (k = l, c.set(0, 1, 0));
            v <= k && c.set(0, 0, 1);
            g.crossVectors(d[0], c).normalize();
            e[0].crossVectors(d[0], g);
            f[0].crossVectors(d[0], e[0]);
            for (k = 1; k <= a; k++)
                e[k] = e[k - 1].clone(), f[k] = f[k - 1].clone(), g.crossVectors(d[k -
                1], d[k]), g.length() > Number.EPSILON && (g.normalize(), c = Math.acos(Y.clamp(d[k - 1].dot(d[k]), -1, 1)), e[k].applyMatrix4(h.makeRotationAxis(g, c))), f[k].crossVectors(d[k], e[k]);
            if (!0 === b)
                for (c = Math.acos(Y.clamp(e[0].dot(e[a]), -1, 1)), c /= a, 0 < d[0].dot(g.crossVectors(e[0], e[a])) && (c = -c), k = 1; k <= a; k++)
                    e[k].applyMatrix4(h.makeRotationAxis(d[k], c * k)), f[k].crossVectors(d[k], e[k]);
            return {
                tangents: d,
                normals: e,
                binormals: f
            }
        }
    });
    Qa.prototype = Object.create(ua.prototype);
    Qa.prototype.constructor = Qa;
    Qa.prototype.isLineCurve =
    !0;
    Qa.prototype.getPoint = function(a) {
        if (1 === a)
            return this.v2.clone();
        var b = this.v2.clone().sub(this.v1);
        b.multiplyScalar(a).add(this.v1);
        return b
    };
    Qa.prototype.getPointAt = function(a) {
        return this.getPoint(a)
    };
    Qa.prototype.getTangent = function(a) {
        return this.v2.clone().sub(this.v1).normalize()
    };
    Vc.prototype = Object.assign(Object.create(ua.prototype), {
        constructor: Vc,
        add: function(a) {
            this.curves.push(a)
        },
        closePath: function() {
            var a = this.curves[0].getPoint(0),
                b = this.curves[this.curves.length - 1].getPoint(1);
            a.equals(b) || this.curves.push(new Qa(b, a))
        },
        getPoint: function(a) {
            var b = a * this.getLength(),
                c = this.getCurveLengths();
            for (a = 0; a < c.length;) {
                if (c[a] >= b)
                    return b = c[a] - b, a = this.curves[a], c = a.getLength(), a.getPointAt(0 === c ? 0 : 1 - b / c);
                a++
            }
            return null
        },
        getLength: function() {
            var a = this.getCurveLengths();
            return a[a.length - 1]
        },
        updateArcLengths: function() {
            this.needsUpdate = !0;
            this.cacheLengths = null;
            this.getCurveLengths()
        },
        getCurveLengths: function() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
                return this.cacheLengths;
            for (var a = [], b = 0, c = 0, d = this.curves.length; c < d; c++)
                b += this.curves[c].getLength(), a.push(b);
            return this.cacheLengths = a
        },
        getSpacedPoints: function(a) {
            void 0 === a && (a = 40);
            for (var b = [], c = 0; c <= a; c++)
                b.push(this.getPoint(c / a));
            this.autoClose && b.push(b[0]);
            return b
        },
        getPoints: function(a) {
            a = a || 12;
            for (var b = [], c, d = 0, e = this.curves; d < e.length; d++)
                for (var f = e[d], f = f.getPoints(f && f.isEllipseCurve ? 2 * a : f && f.isLineCurve ? 1 : f && f.isSplineCurve ? a * f.points.length : a), g = 0; g < f.length; g++) {
                    var h = f[g];
                    c && c.equals(h) || (b.push(h),
                    c = h)
                }
            this.autoClose && 1 < b.length && !b[b.length - 1].equals(b[0]) && b.push(b[0]);
            return b
        },
        createPointsGeometry: function(a) {
            a = this.getPoints(a);
            return this.createGeometry(a)
        },
        createSpacedPointsGeometry: function(a) {
            a = this.getSpacedPoints(a);
            return this.createGeometry(a)
        },
        createGeometry: function(a) {
            for (var b = new J, c = 0, d = a.length; c < d; c++) {
                var e = a[c];
                b.vertices.push(new n(e.x, e.y, e.z || 0))
            }
            return b
        }
    });
    Va.prototype = Object.create(ua.prototype);
    Va.prototype.constructor = Va;
    Va.prototype.isEllipseCurve = !0;
    Va.prototype.getPoint =
    function(a) {
        for (var b = 2 * Math.PI, c = this.aEndAngle - this.aStartAngle, d = Math.abs(c) < Number.EPSILON; 0 > c;)
            c += b;
        for (; c > b;)
            c -= b;
        c < Number.EPSILON && (c = d ? 0 : b);
        !0 !== this.aClockwise || d || (c = c === b ? -b : c - b);
        b = this.aStartAngle + a * c;
        a = this.aX + this.xRadius * Math.cos(b);
        var e = this.aY + this.yRadius * Math.sin(b);
        0 !== this.aRotation && (b = Math.cos(this.aRotation), c = Math.sin(this.aRotation), d = a - this.aX, e -= this.aY, a = d * b - e * c + this.aX, e = d * c + e * b + this.aY);
        return new C(a, e)
    };
    yb.prototype = Object.create(ua.prototype);
    yb.prototype.constructor =
    yb;
    yb.prototype.isSplineCurve = !0;
    yb.prototype.getPoint = function(a) {
        var b = this.points,
            c = (b.length - 1) * a;
        a = Math.floor(c);
        var c = c - a,
            d = b[0 === a ? a : a - 1],
            e = b[a],
            f = b[a > b.length - 2 ? b.length - 1 : a + 1],
            b = b[a > b.length - 3 ? b.length - 1 : a + 2];
        return new C(Qe(c, d.x, e.x, f.x, b.x), Qe(c, d.y, e.y, f.y, b.y))
    };
    fc.prototype = Object.create(ua.prototype);
    fc.prototype.constructor = fc;
    fc.prototype.getPoint = function(a) {
        var b = this.v0,
            c = this.v1,
            d = this.v2,
            e = this.v3;
        return new C(xb(a, b.x, c.x, d.x, e.x), xb(a, b.y, c.y, d.y, e.y))
    };
    gc.prototype = Object.create(ua.prototype);
    gc.prototype.constructor = gc;
    gc.prototype.getPoint = function(a) {
        var b = this.v0,
            c = this.v1,
            d = this.v2;
        return new C(wb(a, b.x, c.x, d.x), wb(a, b.y, c.y, d.y))
    };
    var te = Object.assign(Object.create(Vc.prototype), {
        fromPoints: function(a) {
            this.moveTo(a[0].x, a[0].y);
            for (var b = 1, c = a.length; b < c; b++)
                this.lineTo(a[b].x, a[b].y)
        },
        moveTo: function(a, b) {
            this.currentPoint.set(a, b)
        },
        lineTo: function(a, b) {
            var c = new Qa(this.currentPoint.clone(), new C(a, b));
            this.curves.push(c);
            this.currentPoint.set(a, b)
        },
        quadraticCurveTo: function(a,
        b, c, d) {
            a = new gc(this.currentPoint.clone(), new C(a, b), new C(c, d));
            this.curves.push(a);
            this.currentPoint.set(c, d)
        },
        bezierCurveTo: function(a, b, c, d, e, f) {
            a = new fc(this.currentPoint.clone(), new C(a, b), new C(c, d), new C(e, f));
            this.curves.push(a);
            this.currentPoint.set(e, f)
        },
        splineThru: function(a) {
            var b = [this.currentPoint.clone()].concat(a),
                b = new yb(b);
            this.curves.push(b);
            this.currentPoint.copy(a[a.length - 1])
        },
        arc: function(a, b, c, d, e, f) {
            this.absarc(a + this.currentPoint.x, b + this.currentPoint.y, c, d, e, f)
        },
        absarc: function(a,
        b, c, d, e, f) {
            this.absellipse(a, b, c, c, d, e, f)
        },
        ellipse: function(a, b, c, d, e, f, g, h) {
            this.absellipse(a + this.currentPoint.x, b + this.currentPoint.y, c, d, e, f, g, h)
        },
        absellipse: function(a, b, c, d, e, f, g, h) {
            a = new Va(a, b, c, d, e, f, g, h);
            0 < this.curves.length && (b = a.getPoint(0), b.equals(this.currentPoint) || this.lineTo(b.x, b.y));
            this.curves.push(a);
            a = a.getPoint(1);
            this.currentPoint.copy(a)
        }
    });
    Wc.prototype = te;
    te.constructor = Wc;
    zb.prototype = Object.assign(Object.create(te), {
        constructor: zb,
        getPointsHoles: function(a) {
            for (var b =
                [], c = 0, d = this.holes.length; c < d; c++)
                b[c] = this.holes[c].getPoints(a);
            return b
        },
        extractAllPoints: function(a) {
            return {
                shape: this.getPoints(a),
                holes: this.getPointsHoles(a)
            }
        },
        extractPoints: function(a) {
            return this.extractAllPoints(a)
        }
    });
    Object.assign(de.prototype, {
        moveTo: function(a, b) {
            this.currentPath = new Wc;
            this.subPaths.push(this.currentPath);
            this.currentPath.moveTo(a, b)
        },
        lineTo: function(a, b) {
            this.currentPath.lineTo(a, b)
        },
        quadraticCurveTo: function(a, b, c, d) {
            this.currentPath.quadraticCurveTo(a, b, c, d)
        },
        bezierCurveTo: function(a,
        b, c, d, e, f) {
            this.currentPath.bezierCurveTo(a, b, c, d, e, f)
        },
        splineThru: function(a) {
            this.currentPath.splineThru(a)
        },
        toShapes: function(a, b) {
            function c(a) {
                for (var b = [], c = 0, d = a.length; c < d; c++) {
                    var e = a[c],
                        f = new zb;
                    f.curves = e.curves;
                    b.push(f)
                }
                return b
            }
            function d(a, b) {
                for (var c = b.length, d = !1, e = c - 1, f = 0; f < c; e = f++) {
                    var g = b[e],
                        h = b[f],
                        k = h.x - g.x,
                        m = h.y - g.y;
                    if (Math.abs(m) > Number.EPSILON) {
                        if (0 > m && (g = b[f], k = -k, h = b[e], m = -m), !(a.y < g.y || a.y > h.y))
                            if (a.y === g.y) {
                                if (a.x === g.x)
                                    return !0
                            } else {
                                e = m * (a.x - g.x) - k * (a.y - g.y);
                                if (0 === e)
                                    return !0;
                                0 > e || (d = !d)
                            }
                    } else if (a.y === g.y && (h.x <= a.x && a.x <= g.x || g.x <= a.x && a.x <= h.x))
                        return !0
                }
                return d
            }
            var e = Ia.isClockWise,
                f = this.subPaths;
            if (0 === f.length)
                return [];
            if (!0 === b)
                return c(f);
            var g,
                h,
                k,
                m = [];
            if (1 === f.length)
                return h = f[0], k = new zb, k.curves = h.curves, m.push(k), m;
            var l = !e(f[0].getPoints()),
                l = a ? !l : l;
            k = [];
            var n = [],
                p = [],
                r = 0,
                z;
            n[r] = void 0;
            p[r] = [];
            for (var t = 0, y = f.length; t < y; t++)
                h = f[t], z = h.getPoints(), g = e(z), (g = a ? !g : g) ? (!l && n[r] && r++, n[r] = {
                    s: new zb,
                    p: z
                }, n[r].s.curves = h.curves, l && r++, p[r] = []) : p[r].push({
                    h: h,
                    p: z[0]
                });
            if (!n[0])
                return c(f);
            if (1 < n.length) {
                t = !1;
                h = [];
                e = 0;
                for (f = n.length; e < f; e++)
                    k[e] = [];
                e = 0;
                for (f = n.length; e < f; e++)
                    for (g = p[e], l = 0; l < g.length; l++) {
                        r = g[l];
                        z = !0;
                        for (y = 0; y < n.length; y++)
                            d(r.p, n[y].p) && (e !== y && h.push({
                                froms: e,
                                tos: y,
                                hole: l
                            }), z ? (z = !1, k[y].push(r)) : t = !0);
                        z && k[e].push(r)
                    }
                0 < h.length && (t || (p = k))
            }
            t = 0;
            for (e = n.length; t < e; t++)
                for (k = n[t].s, m.push(k), h = p[t], f = 0, g = h.length; f < g; f++)
                    k.holes.push(h[f].h);
            return m
        }
    });
    Object.assign(ee.prototype, {
        isFont: !0,
        generateShapes: function(a, b, c) {
            void 0 === b && (b =
            100);
            void 0 === c && (c = 4);
            var d = this.data;
            a = String(a).split("");
            var e = b / d.resolution,
                f = (d.boundingBox.yMax - d.boundingBox.yMin + d.underlineThickness) * e,
                g = 0,
                h = 0;
            b = [];
            for (var k = 0; k < a.length; k++) {
                var m = a[k];
                if ("\n" === m)
                    g = 0, h -= f;
                else {
                    var l;
                    l = e;
                    var n = g,
                        p = h;
                    if (m = d.glyphs[m] || d.glyphs["?"]) {
                        var r = new de,
                            z = [],
                            t,
                            y,
                            x,
                            u,
                            B,
                            w,
                            C,
                            G;
                        if (m.o)
                            for (var D = m._cachedOutline || (m._cachedOutline = m.o.split(" ")), E = 0, J = D.length; E < J;)
                                switch (D[E++]) {
                                case "m":
                                    t = D[E++] * l + n;
                                    y = D[E++] * l + p;
                                    r.moveTo(t, y);
                                    break;
                                case "l":
                                    t = D[E++] * l + n;
                                    y = D[E++] *
                                    l + p;
                                    r.lineTo(t, y);
                                    break;
                                case "q":
                                    t = D[E++] * l + n;
                                    y = D[E++] * l + p;
                                    B = D[E++] * l + n;
                                    w = D[E++] * l + p;
                                    r.quadraticCurveTo(B, w, t, y);
                                    if (u = z[z.length - 1]) {
                                        x = u.x;
                                        u = u.y;
                                        for (var F = 1; F <= c; F++) {
                                            var K = F / c;
                                            wb(K, x, B, t);
                                            wb(K, u, w, y)
                                        }
                                    }
                                    break;
                                case "b":
                                    if (t = D[E++] * l + n, y = D[E++] * l + p, B = D[E++] * l + n, w = D[E++] * l + p, C = D[E++] * l + n, G = D[E++] * l + p, r.bezierCurveTo(B, w, C, G, t, y), u = z[z.length - 1])
                                        for (x = u.x, u = u.y, F = 1; F <= c; F++)
                                            K = F / c, xb(K, x, B, C, t), xb(K, u, w, G, y)
                                }
                        l = {
                            offsetX: m.ha * l,
                            path: r
                        }
                    } else
                        l = void 0;
                    g += l.offsetX;
                    b.push(l.path)
                }
            }
            c = [];
            d = 0;
            for (a = b.length; d <
            a; d++)
                Array.prototype.push.apply(c, b[d].toShapes());
            return c
        }
    });
    Object.assign(Re.prototype, {
        load: function(a, b, c, d) {
            var e = this;
            (new Ka(this.manager)).load(a, function(a) {
                var c;
                try {
                    c = JSON.parse(a)
                } catch (d) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), c = JSON.parse(a.substring(65, a.length - 2))
                }
                a = e.parse(c);
                b && b(a)
            }, c, d)
        },
        parse: function(a) {
            return new ee(a)
        }
    });
    var Nd,
        he = {
            getContext: function() {
                void 0 === Nd && (Nd = new (window.AudioContext || window.webkitAudioContext));
                return Nd
            },
            setContext: function(a) {
                Nd = a
            }
        };
    Object.assign(fe.prototype, {
        load: function(a, b, c, d) {
            var e = new Ka(this.manager);
            e.setResponseType("arraybuffer");
            e.load(a, function(a) {
                he.getContext().decodeAudioData(a, function(a) {
                    b(a)
                })
            }, c, d)
        }
    });
    Object.assign(Se.prototype, {
        update: function() {
            var a,
                b,
                c,
                d,
                e,
                f,
                g,
                h,
                k = new K,
                m = new K;
            return function(l) {
                if (a !== this || b !== l.focus || c !== l.fov || d !== l.aspect * this.aspect || e !== l.near || f !== l.far || g !== l.zoom || h !== this.eyeSep) {
                    a = this;
                    b = l.focus;
                    c = l.fov;
                    d = l.aspect * this.aspect;
                    e =
                    l.near;
                    f = l.far;
                    g = l.zoom;
                    var n = l.projectionMatrix.clone();
                    h = this.eyeSep / 2;
                    var p = h * e / b,
                        r = e * Math.tan(Y.DEG2RAD * c * .5) / g,
                        z,
                        t;
                    m.elements[12] = -h;
                    k.elements[12] = h;
                    z = -r * d + p;
                    t = r * d + p;
                    n.elements[0] = 2 * e / (t - z);
                    n.elements[8] = (t + z) / (t - z);
                    this.cameraL.projectionMatrix.copy(n);
                    z = -r * d - p;
                    t = r * d - p;
                    n.elements[0] = 2 * e / (t - z);
                    n.elements[8] = (t + z) / (t - z);
                    this.cameraR.projectionMatrix.copy(n)
                }
                this.cameraL.matrixWorld.copy(l.matrixWorld).multiply(m);
                this.cameraR.matrixWorld.copy(l.matrixWorld).multiply(k)
            }
        }()
    });
    Hd.prototype = Object.create(z.prototype);
    Hd.prototype.constructor = Hd;
    ge.prototype = Object.assign(Object.create(z.prototype), {
        constructor: ge,
        getInput: function() {
            return this.gain
        },
        removeFilter: function() {
            null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null)
        },
        getFilter: function() {
            return this.filter
        },
        setFilter: function(a) {
            null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination);
            this.filter = a;
            this.gain.connect(this.filter);
            this.filter.connect(this.context.destination)
        },
        getMasterVolume: function() {
            return this.gain.gain.value
        },
        setMasterVolume: function(a) {
            this.gain.gain.value = a
        },
        updateMatrixWorld: function() {
            var a = new n,
                b = new oa,
                c = new n,
                d = new n;
            return function(e) {
                z.prototype.updateMatrixWorld.call(this, e);
                e = this.context.listener;
                var f = this.up;
                this.matrixWorld.decompose(a, b, c);
                d.set(0, 0, -1).applyQuaternion(b);
                e.positionX ? (e.positionX.setValueAtTime(a.x, this.context.currentTime),
                e.positionY.setValueAtTime(a.y, this.context.currentTime), e.positionZ.setValueAtTime(a.z, this.context.currentTime), e.forwardX.setValueAtTime(d.x, this.context.currentTime), e.forwardY.setValueAtTime(d.y, this.context.currentTime), e.forwardZ.setValueAtTime(d.z, this.context.currentTime), e.upX.setValueAtTime(f.x, this.context.currentTime), e.upY.setValueAtTime(f.y, this.context.currentTime), e.upZ.setValueAtTime(f.z, this.context.currentTime)) : (e.setPosition(a.x, a.y, a.z), e.setOrientation(d.x, d.y, d.z, f.x, f.y,
                f.z))
            }
        }()
    });
    hc.prototype = Object.assign(Object.create(z.prototype), {
        constructor: hc,
        getOutput: function() {
            return this.gain
        },
        setNodeSource: function(a) {
            this.hasPlaybackControl = !1;
            this.sourceType = "audioNode";
            this.source = a;
            this.connect();
            return this
        },
        setBuffer: function(a) {
            this.buffer = a;
            this.sourceType = "buffer";
            this.autoplay && this.play();
            return this
        },
        play: function() {
            if (!0 === this.isPlaying)
                console.warn("THREE.Audio: Audio is already playing.");
            else if (!1 === this.hasPlaybackControl)
                console.warn("THREE.Audio: this Audio has no playback control.");
            else {
                var a = this.context.createBufferSource();
                a.buffer = this.buffer;
                a.loop = this.loop;
                a.onended = this.onEnded.bind(this);
                a.playbackRate.setValueAtTime(this.playbackRate, this.startTime);
                a.start(0, this.startTime);
                this.isPlaying = !0;
                this.source = a;
                return this.connect()
            }
        },
        pause: function() {
            if (!1 === this.hasPlaybackControl)
                console.warn("THREE.Audio: this Audio has no playback control.");
            else
                return this.source.stop(), this.startTime = this.context.currentTime, this.isPlaying = !1, this
        },
        stop: function() {
            if (!1 === this.hasPlaybackControl)
                console.warn("THREE.Audio: this Audio has no playback control.");
            else
                return this.source.stop(), this.startTime = 0, this.isPlaying = !1, this
        },
        connect: function() {
            if (0 < this.filters.length) {
                this.source.connect(this.filters[0]);
                for (var a = 1, b = this.filters.length; a < b; a++)
                    this.filters[a - 1].connect(this.filters[a]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else
                this.source.connect(this.getOutput());
            return this
        },
        disconnect: function() {
            if (0 < this.filters.length) {
                this.source.disconnect(this.filters[0]);
                for (var a = 1, b = this.filters.length; a < b; a++)
                    this.filters[a -
                    1].disconnect(this.filters[a]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else
                this.source.disconnect(this.getOutput());
            return this
        },
        getFilters: function() {
            return this.filters
        },
        setFilters: function(a) {
            a || (a = []);
            !0 === this.isPlaying ? (this.disconnect(), this.filters = a, this.connect()) : this.filters = a;
            return this
        },
        getFilter: function() {
            return this.getFilters()[0]
        },
        setFilter: function(a) {
            return this.setFilters(a ? [a] : [])
        },
        setPlaybackRate: function(a) {
            if (!1 === this.hasPlaybackControl)
                console.warn("THREE.Audio: this Audio has no playback control.");
            else
                return this.playbackRate = a, !0 === this.isPlaying && this.source.playbackRate.setValueAtTime(this.playbackRate, this.context.currentTime), this
        },
        getPlaybackRate: function() {
            return this.playbackRate
        },
        onEnded: function() {
            this.isPlaying = !1
        },
        getLoop: function() {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
        },
        setLoop: function(a) {
            if (!1 === this.hasPlaybackControl)
                console.warn("THREE.Audio: this Audio has no playback control.");
            else
                return this.loop =
                a, !0 === this.isPlaying && (this.source.loop = this.loop), this
        },
        getVolume: function() {
            return this.gain.gain.value
        },
        setVolume: function(a) {
            this.gain.gain.value = a;
            return this
        }
    });
    ie.prototype = Object.assign(Object.create(hc.prototype), {
        constructor: ie,
        getOutput: function() {
            return this.panner
        },
        getRefDistance: function() {
            return this.panner.refDistance
        },
        setRefDistance: function(a) {
            this.panner.refDistance = a
        },
        getRolloffFactor: function() {
            return this.panner.rolloffFactor
        },
        setRolloffFactor: function(a) {
            this.panner.rolloffFactor =
            a
        },
        getDistanceModel: function() {
            return this.panner.distanceModel
        },
        setDistanceModel: function(a) {
            this.panner.distanceModel = a
        },
        getMaxDistance: function() {
            return this.panner.maxDistance
        },
        setMaxDistance: function(a) {
            this.panner.maxDistance = a
        },
        updateMatrixWorld: function() {
            var a = new n;
            return function(b) {
                z.prototype.updateMatrixWorld.call(this, b);
                a.setFromMatrixPosition(this.matrixWorld);
                this.panner.setPosition(a.x, a.y, a.z)
            }
        }()
    });
    Object.assign(je.prototype, {
        getFrequencyData: function() {
            this.analyser.getByteFrequencyData(this.data);
            return this.data
        },
        getAverageFrequency: function() {
            for (var a = 0, b = this.getFrequencyData(), c = 0; c < b.length; c++)
                a += b[c];
            return a / b.length
        }
    });
    Object.assign(ke.prototype, {
        accumulate: function(a, b) {
            var c = this.buffer,
                d = this.valueSize,
                e = a * d + d,
                f = this.cumulativeWeight;
            if (0 === f) {
                for (f = 0; f !== d; ++f)
                    c[e + f] = c[f];
                f = b
            } else
                f += b, this._mixBufferRegion(c, e, 0, b / f, d);
            this.cumulativeWeight = f
        },
        apply: function(a) {
            var b = this.valueSize,
                c = this.buffer;
            a = a * b + b;
            var d = this.cumulativeWeight,
                e = this.binding;
            this.cumulativeWeight = 0;
            1 > d &&
            this._mixBufferRegion(c, a, 3 * b, 1 - d, b);
            for (var d = b, f = b + b; d !== f; ++d)
                if (c[d] !== c[d + b]) {
                    e.setValue(c, a);
                    break
                }
        },
        saveOriginalState: function() {
            var a = this.buffer,
                b = this.valueSize,
                c = 3 * b;
            this.binding.getValue(a, c);
            for (var d = b; d !== c; ++d)
                a[d] = a[c + d % b];
            this.cumulativeWeight = 0
        },
        restoreOriginalState: function() {
            this.binding.setValue(this.buffer, 3 * this.valueSize)
        },
        _select: function(a, b, c, d, e) {
            if (.5 <= d)
                for (d = 0; d !== e; ++d)
                    a[b + d] = a[c + d]
        },
        _slerp: function(a, b, c, d) {
            oa.slerpFlat(a, b, a, b, a, c, d)
        },
        _lerp: function(a, b, c, d, e) {
            for (var f =
                1 - d, g = 0; g !== e; ++g) {
                var h = b + g;
                a[h] = a[h] * f + a[c + g] * d
            }
        }
    });
    Object.assign(Te.prototype, {
        getValue: function(a, b) {
            this.bind();
            var c = this._bindings[this._targetGroup.nCachedObjects_];
            void 0 !== c && c.getValue(a, b)
        },
        setValue: function(a, b) {
            for (var c = this._bindings, d = this._targetGroup.nCachedObjects_, e = c.length; d !== e; ++d)
                c[d].setValue(a, b)
        },
        bind: function() {
            for (var a = this._bindings, b = this._targetGroup.nCachedObjects_, c = a.length; b !== c; ++b)
                a[b].bind()
        },
        unbind: function() {
            for (var a = this._bindings, b = this._targetGroup.nCachedObjects_,
                c = a.length; b !== c; ++b)
                a[b].unbind()
        }
    });
    Object.assign(ha, {
        Composite: Te,
        create: function(a, b, c) {
            return a && a.isAnimationObjectGroup ? new ha.Composite(a, b, c) : new ha(a, b, c)
        },
        sanitizeNodeName: function(a) {
            return a.replace(/\s/g, "_").replace(/[^\w-]/g, "")
        },
        parseTrackName: function() {
            var a = new RegExp("^" + /((?:[\w-]+[\/:])*)/.source + /([\w-\.]+)?/.source + /(?:\.([\w-]+)(?:\[(.+)\])?)?/.source + /\.([\w-]+)(?:\[(.+)\])?/.source + "$"),
                b = ["material", "materials", "bones"];
            return function(c) {
                var d = a.exec(c);
                if (!d)
                    throw Error("PropertyBinding: Cannot parse trackName: " +
                    c);
                var d = {
                        nodeName: d[2],
                        objectName: d[3],
                        objectIndex: d[4],
                        propertyName: d[5],
                        propertyIndex: d[6]
                    },
                    e = d.nodeName && d.nodeName.lastIndexOf(".");
                if (void 0 !== e && -1 !== e) {
                    var f = d.nodeName.substring(e + 1);
                    -1 !== b.indexOf(f) && (d.nodeName = d.nodeName.substring(0, e), d.objectName = f)
                }
                if (null === d.propertyName || 0 === d.propertyName.length)
                    throw Error("PropertyBinding: can not parse propertyName from trackName: " + c);
                return d
            }
        }(),
        findNode: function(a, b) {
            if (!b || "" === b || "root" === b || "." === b || -1 === b || b === a.name || b === a.uuid)
                return a;
            if (a.skeleton) {
                var c = function(a) {
                    for (var c = 0; c < a.bones.length; c++) {
                        var d = a.bones[c];
                        if (d.name === b)
                            return d
                    }
                    return null
                }(a.skeleton);
                if (c)
                    return c
            }
            if (a.children) {
                var d = function(a) {
                    for (var c = 0; c < a.length; c++) {
                        var g = a[c];
                        if (g.name === b || g.uuid === b || (g = d(g.children)))
                            return g
                    }
                    return null
                };
                if (c = d(a.children))
                    return c
            }
            return null
        }
    });
    Object.assign(ha.prototype, {
        _getValue_unavailable: function() {},
        _setValue_unavailable: function() {},
        BindingType: {
            Direct: 0,
            EntireArray: 1,
            ArrayElement: 2,
            HasFromToArray: 3
        },
        Versioning: {
            None: 0,
            NeedsUpdate: 1,
            MatrixWorldNeedsUpdate: 2
        },
        GetterByBindingType: [function(a, b) {
            a[b] = this.node[this.propertyName]
        }, function(a, b) {
            for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)
                a[b++] = c[d]
        }, function(a, b) {
            a[b] = this.resolvedProperty[this.propertyIndex]
        }, function(a, b) {
            this.resolvedProperty.toArray(a, b)
        }],
        SetterByBindingTypeAndVersioning: [[function(a, b) {
            this.node[this.propertyName] = a[b]
        }, function(a, b) {
            this.node[this.propertyName] = a[b];
            this.targetObject.needsUpdate = !0
        }, function(a, b) {
            this.node[this.propertyName] =
            a[b];
            this.targetObject.matrixWorldNeedsUpdate = !0
        }], [function(a, b) {
            for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)
                c[d] = a[b++]
        }, function(a, b) {
            for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)
                c[d] = a[b++];
            this.targetObject.needsUpdate = !0
        }, function(a, b) {
            for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)
                c[d] = a[b++];
            this.targetObject.matrixWorldNeedsUpdate = !0
        }], [function(a, b) {
            this.resolvedProperty[this.propertyIndex] = a[b]
        }, function(a, b) {
            this.resolvedProperty[this.propertyIndex] =
            a[b];
            this.targetObject.needsUpdate = !0
        }, function(a, b) {
            this.resolvedProperty[this.propertyIndex] = a[b];
            this.targetObject.matrixWorldNeedsUpdate = !0
        }], [function(a, b) {
            this.resolvedProperty.fromArray(a, b)
        }, function(a, b) {
            this.resolvedProperty.fromArray(a, b);
            this.targetObject.needsUpdate = !0
        }, function(a, b) {
            this.resolvedProperty.fromArray(a, b);
            this.targetObject.matrixWorldNeedsUpdate = !0
        }]],
        getValue: function(a, b) {
            this.bind();
            this.getValue(a, b)
        },
        setValue: function(a, b) {
            this.bind();
            this.setValue(a, b)
        },
        bind: function() {
            var a =
                this.node,
                b = this.parsedPath,
                c = b.objectName,
                d = b.propertyName,
                e = b.propertyIndex;
            a || (this.node = a = ha.findNode(this.rootNode, b.nodeName) || this.rootNode);
            this.getValue = this._getValue_unavailable;
            this.setValue = this._setValue_unavailable;
            if (a) {
                if (c) {
                    var f = b.objectIndex;
                    switch (c) {
                    case "materials":
                        if (!a.material) {
                            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                            return
                        }
                        if (!a.material.materials) {
                            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
                            this);
                            return
                        }
                        a = a.material.materials;
                        break;
                    case "bones":
                        if (!a.skeleton) {
                            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                            return
                        }
                        a = a.skeleton.bones;
                        for (c = 0; c < a.length; c++)
                            if (a[c].name === f) {
                                f = c;
                                break
                            }
                        break;
                    default:
                        if (void 0 === a[c]) {
                            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                            return
                        }
                        a = a[c]
                    }
                    if (void 0 !== f) {
                        if (void 0 === a[f]) {
                            console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
                            this, a);
                            return
                        }
                        a = a[f]
                    }
                }
                f = a[d];
                if (void 0 === f)
                    console.error("THREE.PropertyBinding: Trying to update property for track: " + b.nodeName + "." + d + " but it wasn't found.", a);
                else {
                    b = this.Versioning.None;
                    void 0 !== a.needsUpdate ? (b = this.Versioning.NeedsUpdate, this.targetObject = a) : void 0 !== a.matrixWorldNeedsUpdate && (b = this.Versioning.MatrixWorldNeedsUpdate, this.targetObject = a);
                    c = this.BindingType.Direct;
                    if (void 0 !== e) {
                        if ("morphTargetInfluences" === d) {
                            if (!a.geometry) {
                                console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
                                this);
                                return
                            }
                            if (a.geometry.isBufferGeometry) {
                                if (!a.geometry.morphAttributes) {
                                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                                    return
                                }
                                for (c = 0; c < this.node.geometry.morphAttributes.position.length; c++)
                                    if (a.geometry.morphAttributes.position[c].name === e) {
                                        e = c;
                                        break
                                    }
                            } else {
                                if (!a.geometry.morphTargets) {
                                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.",
                                    this);
                                    return
                                }
                                for (c = 0; c < this.node.geometry.morphTargets.length; c++)
                                    if (a.geometry.morphTargets[c].name === e) {
                                        e = c;
                                        break
                                    }
                            }
                        }
                        c = this.BindingType.ArrayElement;
                        this.resolvedProperty = f;
                        this.propertyIndex = e
                    } else
                        void 0 !== f.fromArray && void 0 !== f.toArray ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = f) : Array.isArray(f) ? (c = this.BindingType.EntireArray, this.resolvedProperty = f) : this.propertyName = d;
                    this.getValue = this.GetterByBindingType[c];
                    this.setValue = this.SetterByBindingTypeAndVersioning[c][b]
                }
            } else
                console.error("THREE.PropertyBinding: Trying to update node for track: " +
                this.path + " but it wasn't found.")
        },
        unbind: function() {
            this.node = null;
            this.getValue = this._getValue_unbound;
            this.setValue = this._setValue_unbound
        }
    });
    Object.assign(ha.prototype, {
        _getValue_unbound: ha.prototype.getValue,
        _setValue_unbound: ha.prototype.setValue
    });
    Object.assign(Ue.prototype, {
        isAnimationObjectGroup: !0,
        add: function(a) {
            for (var b = this._objects, c = b.length, d = this.nCachedObjects_, e = this._indicesByUUID, f = this._paths, g = this._parsedPaths, h = this._bindings, k = h.length, m = 0, l = arguments.length; m !== l; ++m) {
                var n =
                    arguments[m],
                    p = n.uuid,
                    r = e[p];
                if (void 0 === r) {
                    r = c++;
                    e[p] = r;
                    b.push(n);
                    for (var p = 0, z = k; p !== z; ++p)
                        h[p].push(new ha(n, f[p], g[p]))
                } else if (r < d) {
                    var t = --d,
                        z = b[t];
                    e[z.uuid] = r;
                    b[r] = z;
                    e[p] = t;
                    b[t] = n;
                    p = 0;
                    for (z = k; p !== z; ++p) {
                        var y = h[p],
                            x = y[r];
                        y[r] = y[t];
                        void 0 === x && (x = new ha(n, f[p], g[p]));
                        y[t] = x
                    }
                } else
                    void 0 !== b[r] && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
            }
            this.nCachedObjects_ = d
        },
        remove: function(a) {
            for (var b =
                this._objects, c = this.nCachedObjects_, d = this._indicesByUUID, e = this._bindings, f = e.length, g = 0, h = arguments.length; g !== h; ++g) {
                var k = arguments[g],
                    m = k.uuid,
                    l = d[m];
                if (void 0 !== l && l >= c) {
                    var n = c++,
                        p = b[n];
                    d[p.uuid] = l;
                    b[l] = p;
                    d[m] = n;
                    b[n] = k;
                    k = 0;
                    for (m = f; k !== m; ++k) {
                        var p = e[k],
                            r = p[l];
                        p[l] = p[n];
                        p[n] = r
                    }
                }
            }
            this.nCachedObjects_ = c
        },
        uncache: function(a) {
            for (var b = this._objects, c = b.length, d = this.nCachedObjects_, e = this._indicesByUUID, f = this._bindings, g = f.length, h = 0, k = arguments.length; h !== k; ++h) {
                var l = arguments[h].uuid,
                    n = e[l];
                if (void 0 !== n)
                    if (delete e[l], n < d) {
                        var l = --d,
                            v = b[l],
                            p = --c,
                            r = b[p];
                        e[v.uuid] = n;
                        b[n] = v;
                        e[r.uuid] = l;
                        b[l] = r;
                        b.pop();
                        v = 0;
                        for (r = g; v !== r; ++v) {
                            var z = f[v],
                                t = z[p];
                            z[n] = z[l];
                            z[l] = t;
                            z.pop()
                        }
                    } else
                        for (p = --c, r = b[p], e[r.uuid] = n, b[n] = r, b.pop(), v = 0, r = g; v !== r; ++v)
                            z = f[v], z[n] = z[p], z.pop()
            }
            this.nCachedObjects_ = d
        },
        subscribe_: function(a, b) {
            var c = this._bindingsIndicesByPath,
                d = c[a],
                e = this._bindings;
            if (void 0 !== d)
                return e[d];
            var f = this._paths,
                g = this._parsedPaths,
                h = this._objects,
                k = this.nCachedObjects_,
                l = Array(h.length),
                d = e.length;
            c[a] = d;
            f.push(a);
            g.push(b);
            e.push(l);
            c = k;
            for (d = h.length; c !== d; ++c)
                l[c] = new ha(h[c], a, b);
            return l
        },
        unsubscribe_: function(a) {
            var b = this._bindingsIndicesByPath,
                c = b[a];
            if (void 0 !== c) {
                var d = this._paths,
                    e = this._parsedPaths,
                    f = this._bindings,
                    g = f.length - 1,
                    h = f[g];
                b[a[g]] = c;
                f[c] = h;
                f.pop();
                e[c] = e[g];
                e.pop();
                d[c] = d[g];
                d.pop()
            }
        }
    });
    Object.assign(Ve.prototype, {
        play: function() {
            this._mixer._activateAction(this);
            return this
        },
        stop: function() {
            this._mixer._deactivateAction(this);
            return this.reset()
        },
        reset: function() {
            this.paused =
            !1;
            this.enabled = !0;
            this.time = 0;
            this._loopCount = -1;
            this._startTime = null;
            return this.stopFading().stopWarping()
        },
        isRunning: function() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        },
        isScheduled: function() {
            return this._mixer._isActiveAction(this)
        },
        startAt: function(a) {
            this._startTime = a;
            return this
        },
        setLoop: function(a, b) {
            this.loop = a;
            this.repetitions = b;
            return this
        },
        setEffectiveWeight: function(a) {
            this.weight = a;
            this._effectiveWeight = this.enabled ?
            a : 0;
            return this.stopFading()
        },
        getEffectiveWeight: function() {
            return this._effectiveWeight
        },
        fadeIn: function(a) {
            return this._scheduleFading(a, 0, 1)
        },
        fadeOut: function(a) {
            return this._scheduleFading(a, 1, 0)
        },
        crossFadeFrom: function(a, b, c) {
            a.fadeOut(b);
            this.fadeIn(b);
            if (c) {
                c = this._clip.duration;
                var d = a._clip.duration,
                    e = c / d;
                a.warp(1, d / c, b);
                this.warp(e, 1, b)
            }
            return this
        },
        crossFadeTo: function(a, b, c) {
            return a.crossFadeFrom(this, b, c)
        },
        stopFading: function() {
            var a = this._weightInterpolant;
            null !== a && (this._weightInterpolant =
            null, this._mixer._takeBackControlInterpolant(a));
            return this
        },
        setEffectiveTimeScale: function(a) {
            this.timeScale = a;
            this._effectiveTimeScale = this.paused ? 0 : a;
            return this.stopWarping()
        },
        getEffectiveTimeScale: function() {
            return this._effectiveTimeScale
        },
        setDuration: function(a) {
            this.timeScale = this._clip.duration / a;
            return this.stopWarping()
        },
        syncWith: function(a) {
            this.time = a.time;
            this.timeScale = a.timeScale;
            return this.stopWarping()
        },
        halt: function(a) {
            return this.warp(this._effectiveTimeScale, 0, a)
        },
        warp: function(a,
        b, c) {
            var d = this._mixer,
                e = d.time,
                f = this._timeScaleInterpolant,
                g = this.timeScale;
            null === f && (this._timeScaleInterpolant = f = d._lendControlInterpolant());
            d = f.parameterPositions;
            f = f.sampleValues;
            d[0] = e;
            d[1] = e + c;
            f[0] = a / g;
            f[1] = b / g;
            return this
        },
        stopWarping: function() {
            var a = this._timeScaleInterpolant;
            null !== a && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(a));
            return this
        },
        getMixer: function() {
            return this._mixer
        },
        getClip: function() {
            return this._clip
        },
        getRoot: function() {
            return this._localRoot ||
                this._mixer._root
        },
        _update: function(a, b, c, d) {
            if (this.enabled) {
                var e = this._startTime;
                if (null !== e) {
                    b = (a - e) * c;
                    if (0 > b || 0 === c)
                        return;
                    this._startTime = null;
                    b *= c
                }
                b *= this._updateTimeScale(a);
                c = this._updateTime(b);
                a = this._updateWeight(a);
                if (0 < a) {
                    b = this._interpolants;
                    for (var e = this._propertyBindings, f = 0, g = b.length; f !== g; ++f)
                        b[f].evaluate(c), e[f].accumulate(d, a)
                }
            } else
                this._updateWeight(a)
        },
        _updateWeight: function(a) {
            var b = 0;
            if (this.enabled) {
                var b = this.weight,
                    c = this._weightInterpolant;
                if (null !== c) {
                    var d = c.evaluate(a)[0],
                        b = b * d;
                    a > c.parameterPositions[1] && (this.stopFading(), 0 === d && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = b
        },
        _updateTimeScale: function(a) {
            var b = 0;
            if (!this.paused) {
                var b = this.timeScale,
                    c = this._timeScaleInterpolant;
                if (null !== c) {
                    var d = c.evaluate(a)[0],
                        b = b * d;
                    a > c.parameterPositions[1] && (this.stopWarping(), 0 === b ? this.paused = !0 : this.timeScale = b)
                }
            }
            return this._effectiveTimeScale = b
        },
        _updateTime: function(a) {
            var b = this.time + a;
            if (0 === a)
                return b;
            var c = this._clip.duration,
                d = this.loop,
                e = this._loopCount;
            if (2200 ===
            d)
                a:
                {
                    if (-1 === e && (this._loopCount = 0, this._setEndings(!0, !0, !1)), b >= c)
                        b = c;
                    else if (0 > b)
                        b = 0;
                    else
                        break a;
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1;
                    this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: 0 > a ? -1 : 1
                    })
                } else {
                d = 2202 === d;
                -1 === e && (0 <= a ? (e = 0, this._setEndings(!0, 0 === this.repetitions, d)) : this._setEndings(0 === this.repetitions, !0, d));
                if (b >= c || 0 > b) {
                    var f = Math.floor(b / c),
                        b = b - c * f,
                        e = e + Math.abs(f),
                        g = this.repetitions - e;
                    0 > g ? (this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, b = 0 < a ?
                    c : 0, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: 0 < a ? 1 : -1
                    })) : (0 === g ? (a = 0 > a, this._setEndings(a, !a, d)) : this._setEndings(!1, !1, d), this._loopCount = e, this._mixer.dispatchEvent({
                        type: "loop",
                        action: this,
                        loopDelta: f
                    }))
                }
                if (d && 1 === (e & 1))
                    return this.time = b, c - b
            }
            return this.time = b
        },
        _setEndings: function(a, b, c) {
            var d = this._interpolantSettings;
            c ? (d.endingStart = 2401, d.endingEnd = 2401) : (d.endingStart = a ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402, d.endingEnd = b ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402)
        },
        _scheduleFading: function(a,
        b, c) {
            var d = this._mixer,
                e = d.time,
                f = this._weightInterpolant;
            null === f && (this._weightInterpolant = f = d._lendControlInterpolant());
            d = f.parameterPositions;
            f = f.sampleValues;
            d[0] = e;
            f[0] = b;
            d[1] = e + a;
            f[1] = c;
            return this
        }
    });
    Object.assign(We.prototype, xa.prototype, {
        _bindAction: function(a, b) {
            var c = a._localRoot || this._root,
                d = a._clip.tracks,
                e = d.length,
                f = a._propertyBindings,
                g = a._interpolants,
                h = c.uuid,
                k = this._bindingsByRootAndName,
                l = k[h];
            void 0 === l && (l = {}, k[h] = l);
            for (k = 0; k !== e; ++k) {
                var n = d[k],
                    v = n.name,
                    p = l[v];
                if (void 0 ===
                p) {
                    p = f[k];
                    if (void 0 !== p) {
                        null === p._cacheIndex && (++p.referenceCount, this._addInactiveBinding(p, h, v));
                        continue
                    }
                    p = new ke(ha.create(c, v, b && b._propertyBindings[k].binding.parsedPath), n.ValueTypeName, n.getValueSize());
                    ++p.referenceCount;
                    this._addInactiveBinding(p, h, v)
                }
                f[k] = p;
                g[k].resultBuffer = p.buffer
            }
        },
        _activateAction: function(a) {
            if (!this._isActiveAction(a)) {
                if (null === a._cacheIndex) {
                    var b = (a._localRoot || this._root).uuid,
                        c = a._clip.uuid,
                        d = this._actionsByClip[c];
                    this._bindAction(a, d && d.knownActions[0]);
                    this._addInactiveAction(a,
                    c, b)
                }
                b = a._propertyBindings;
                c = 0;
                for (d = b.length; c !== d; ++c) {
                    var e = b[c];
                    0 === e.useCount++ && (this._lendBinding(e), e.saveOriginalState())
                }
                this._lendAction(a)
            }
        },
        _deactivateAction: function(a) {
            if (this._isActiveAction(a)) {
                for (var b = a._propertyBindings, c = 0, d = b.length; c !== d; ++c) {
                    var e = b[c];
                    0 === --e.useCount && (e.restoreOriginalState(), this._takeBackBinding(e))
                }
                this._takeBackAction(a)
            }
        },
        _initMemoryManager: function() {
            this._actions = [];
            this._nActiveActions = 0;
            this._actionsByClip = {};
            this._bindings = [];
            this._nActiveBindings =
            0;
            this._bindingsByRootAndName = {};
            this._controlInterpolants = [];
            this._nActiveControlInterpolants = 0;
            var a = this;
            this.stats = {
                actions: {
                    get total() {
                        return a._actions.length
                    },
                    get inUse() {
                        return a._nActiveActions
                    }
                },
                bindings: {
                    get total() {
                        return a._bindings.length
                    },
                    get inUse() {
                        return a._nActiveBindings
                    }
                },
                controlInterpolants: {
                    get total() {
                        return a._controlInterpolants.length
                    },
                    get inUse() {
                        return a._nActiveControlInterpolants
                    }
                }
            }
        },
        _isActiveAction: function(a) {
            a = a._cacheIndex;
            return null !== a && a < this._nActiveActions
        },
        _addInactiveAction: function(a, b, c) {
            var d = this._actions,
                e = this._actionsByClip,
                f = e[b];
            void 0 === f ? (f = {
                knownActions: [a],
                actionByRoot: {}
            }, a._byClipCacheIndex = 0, e[b] = f) : (b = f.knownActions, a._byClipCacheIndex = b.length, b.push(a));
            a._cacheIndex = d.length;
            d.push(a);
            f.actionByRoot[c] = a
        },
        _removeInactiveAction: function(a) {
            var b = this._actions,
                c = b[b.length - 1],
                d = a._cacheIndex;
            c._cacheIndex = d;
            b[d] = c;
            b.pop();
            a._cacheIndex = null;
            var b = a._clip.uuid,
                c = this._actionsByClip,
                d = c[b],
                e = d.knownActions,
                f = e[e.length - 1],
                g = a._byClipCacheIndex;
            f._byClipCacheIndex = g;
            e[g] = f;
            e.pop();
            a._byClipCacheIndex = null;
            delete d.actionByRoot[(a._localRoot || this._root).uuid];
            0 === e.length && delete c[b];
            this._removeInactiveBindingsForAction(a)
        },
        _removeInactiveBindingsForAction: function(a) {
            a = a._propertyBindings;
            for (var b = 0, c = a.length; b !== c; ++b) {
                var d = a[b];
                0 === --d.referenceCount && this._removeInactiveBinding(d)
            }
        },
        _lendAction: function(a) {
            var b = this._actions,
                c = a._cacheIndex,
                d = this._nActiveActions++,
                e = b[d];
            a._cacheIndex = d;
            b[d] = a;
            e._cacheIndex = c;
            b[c] = e
        },
        _takeBackAction: function(a) {
            var b =
                this._actions,
                c = a._cacheIndex,
                d = --this._nActiveActions,
                e = b[d];
            a._cacheIndex = d;
            b[d] = a;
            e._cacheIndex = c;
            b[c] = e
        },
        _addInactiveBinding: function(a, b, c) {
            var d = this._bindingsByRootAndName,
                e = d[b],
                f = this._bindings;
            void 0 === e && (e = {}, d[b] = e);
            e[c] = a;
            a._cacheIndex = f.length;
            f.push(a)
        },
        _removeInactiveBinding: function(a) {
            var b = this._bindings,
                c = a.binding,
                d = c.rootNode.uuid,
                c = c.path,
                e = this._bindingsByRootAndName,
                f = e[d],
                g = b[b.length - 1];
            a = a._cacheIndex;
            g._cacheIndex = a;
            b[a] = g;
            b.pop();
            delete f[c];
            a:
            {
                for (var h in f)
                    break a;
                delete e[d]
            }
        },
        _lendBinding: function(a) {
            var b = this._bindings,
                c = a._cacheIndex,
                d = this._nActiveBindings++,
                e = b[d];
            a._cacheIndex = d;
            b[d] = a;
            e._cacheIndex = c;
            b[c] = e
        },
        _takeBackBinding: function(a) {
            var b = this._bindings,
                c = a._cacheIndex,
                d = --this._nActiveBindings,
                e = b[d];
            a._cacheIndex = d;
            b[d] = a;
            e._cacheIndex = c;
            b[c] = e
        },
        _lendControlInterpolant: function() {
            var a = this._controlInterpolants,
                b = this._nActiveControlInterpolants++,
                c = a[b];
            void 0 === c && (c = new Tc(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer),
            c.__cacheIndex = b, a[b] = c);
            return c
        },
        _takeBackControlInterpolant: function(a) {
            var b = this._controlInterpolants,
                c = a.__cacheIndex,
                d = --this._nActiveControlInterpolants,
                e = b[d];
            a.__cacheIndex = d;
            b[d] = a;
            e.__cacheIndex = c;
            b[c] = e
        },
        _controlInterpolantsResultBuffer: new Float32Array(1),
        clipAction: function(a, b) {
            var c = b || this._root,
                d = c.uuid,
                e = "string" === typeof a ? Da.findByName(c, a) : a,
                c = null !== e ? e.uuid : a,
                f = this._actionsByClip[c],
                g = null;
            if (void 0 !== f) {
                g = f.actionByRoot[d];
                if (void 0 !== g)
                    return g;
                g = f.knownActions[0];
                null ===
                e && (e = g._clip)
            }
            if (null === e)
                return null;
            e = new Ve(this, e, b);
            this._bindAction(e, g);
            this._addInactiveAction(e, c, d);
            return e
        },
        existingAction: function(a, b) {
            var c = b || this._root,
                d = c.uuid,
                c = "string" === typeof a ? Da.findByName(c, a) : a,
                c = this._actionsByClip[c ? c.uuid : a];
            return void 0 !== c ? c.actionByRoot[d] || null : null
        },
        stopAllAction: function() {
            for (var a = this._actions, b = this._nActiveActions, c = this._bindings, d = this._nActiveBindings, e = this._nActiveBindings = this._nActiveActions = 0; e !== b; ++e)
                a[e].reset();
            for (e = 0; e !== d; ++e)
                c[e].useCount =
                0;
            return this
        },
        update: function(a) {
            a *= this.timeScale;
            for (var b = this._actions, c = this._nActiveActions, d = this.time += a, e = Math.sign(a), f = this._accuIndex ^= 1, g = 0; g !== c; ++g)
                b[g]._update(d, a, e, f);
            a = this._bindings;
            b = this._nActiveBindings;
            for (g = 0; g !== b; ++g)
                a[g].apply(f);
            return this
        },
        getRoot: function() {
            return this._root
        },
        uncacheClip: function(a) {
            var b = this._actions;
            a = a.uuid;
            var c = this._actionsByClip,
                d = c[a];
            if (void 0 !== d) {
                for (var d = d.knownActions, e = 0, f = d.length; e !== f; ++e) {
                    var g = d[e];
                    this._deactivateAction(g);
                    var h =
                        g._cacheIndex,
                        k = b[b.length - 1];
                    g._cacheIndex = null;
                    g._byClipCacheIndex = null;
                    k._cacheIndex = h;
                    b[h] = k;
                    b.pop();
                    this._removeInactiveBindingsForAction(g)
                }
                delete c[a]
            }
        },
        uncacheRoot: function(a) {
            a = a.uuid;
            var b = this._actionsByClip,
                c;
            for (c in b) {
                var d = b[c].actionByRoot[a];
                void 0 !== d && (this._deactivateAction(d), this._removeInactiveAction(d))
            }
            c = this._bindingsByRootAndName[a];
            if (void 0 !== c)
                for (var e in c)
                    a = c[e], a.restoreOriginalState(), this._removeInactiveBinding(a)
        },
        uncacheAction: function(a, b) {
            var c = this.existingAction(a,
            b);
            null !== c && (this._deactivateAction(c), this._removeInactiveAction(c))
        }
    });
    Id.prototype.clone = function() {
        return new Id(void 0 === this.value.clone ? this.value : this.value.clone())
    };
    le.prototype = Object.assign(Object.create(E.prototype), {
        constructor: le,
        isInstancedBufferGeometry: !0,
        addGroup: function(a, b, c) {
            this.groups.push({
                start: a,
                count: b,
                materialIndex: c
            })
        },
        copy: function(a) {
            var b = a.index;
            null !== b && this.setIndex(b.clone());
            var b = a.attributes,
                c;
            for (c in b)
                this.addAttribute(c, b[c].clone());
            a = a.groups;
            c = 0;
            for (b =
            a.length; c < b; c++) {
                var d = a[c];
                this.addGroup(d.start, d.count, d.materialIndex)
            }
            return this
        }
    });
    Object.defineProperties(me.prototype, {
        count: {
            get: function() {
                return this.data.count
            }
        },
        array: {
            get: function() {
                return this.data.array
            }
        }
    });
    Object.assign(me.prototype, {
        isInterleavedBufferAttribute: !0,
        setX: function(a, b) {
            this.data.array[a * this.data.stride + this.offset] = b;
            return this
        },
        setY: function(a, b) {
            this.data.array[a * this.data.stride + this.offset + 1] = b;
            return this
        },
        setZ: function(a, b) {
            this.data.array[a * this.data.stride +
            this.offset + 2] = b;
            return this
        },
        setW: function(a, b) {
            this.data.array[a * this.data.stride + this.offset + 3] = b;
            return this
        },
        getX: function(a) {
            return this.data.array[a * this.data.stride + this.offset]
        },
        getY: function(a) {
            return this.data.array[a * this.data.stride + this.offset + 1]
        },
        getZ: function(a) {
            return this.data.array[a * this.data.stride + this.offset + 2]
        },
        getW: function(a) {
            return this.data.array[a * this.data.stride + this.offset + 3]
        },
        setXY: function(a, b, c) {
            a = a * this.data.stride + this.offset;
            this.data.array[a + 0] = b;
            this.data.array[a +
            1] = c;
            return this
        },
        setXYZ: function(a, b, c, d) {
            a = a * this.data.stride + this.offset;
            this.data.array[a + 0] = b;
            this.data.array[a + 1] = c;
            this.data.array[a + 2] = d;
            return this
        },
        setXYZW: function(a, b, c, d, e) {
            a = a * this.data.stride + this.offset;
            this.data.array[a + 0] = b;
            this.data.array[a + 1] = c;
            this.data.array[a + 2] = d;
            this.data.array[a + 3] = e;
            return this
        }
    });
    Object.defineProperty(ic.prototype, "needsUpdate", {
        set: function(a) {
            !0 === a && this.version++
        }
    });
    Object.assign(ic.prototype, {
        isInterleavedBuffer: !0,
        setArray: function(a) {
            if (Array.isArray(a))
                throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.count = void 0 !== a ? a.length / this.stride : 0;
            this.array = a
        },
        setDynamic: function(a) {
            this.dynamic = a;
            return this
        },
        copy: function(a) {
            this.array = new a.array.constructor(a.array);
            this.count = a.count;
            this.stride = a.stride;
            this.dynamic = a.dynamic;
            return this
        },
        copyAt: function(a, b, c) {
            a *= this.stride;
            c *= b.stride;
            for (var d = 0, e = this.stride; d < e; d++)
                this.array[a + d] = b.array[c + d];
            return this
        },
        set: function(a, b) {
            void 0 === b && (b = 0);
            this.array.set(a, b);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        onUpload: function(a) {
            this.onUploadCallback =
            a;
            return this
        }
    });
    ne.prototype = Object.assign(Object.create(ic.prototype), {
        constructor: ne,
        isInstancedInterleavedBuffer: !0,
        copy: function(a) {
            ic.prototype.copy.call(this, a);
            this.meshPerAttribute = a.meshPerAttribute;
            return this
        }
    });
    oe.prototype = Object.assign(Object.create(Z.prototype), {
        constructor: oe,
        isInstancedBufferAttribute: !0,
        copy: function(a) {
            Z.prototype.copy.call(this, a);
            this.meshPerAttribute = a.meshPerAttribute;
            return this
        }
    });
    Object.assign(Xe.prototype, {
        linePrecision: 1,
        set: function(a, b) {
            this.ray.set(a,
            b)
        },
        setFromCamera: function(a, b) {
            b && b.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(b.matrixWorld), this.ray.direction.set(a.x, a.y, .5).unproject(b).sub(this.ray.origin).normalize()) : b && b.isOrthographicCamera ? (this.ray.origin.set(a.x, a.y, (b.near + b.far) / (b.near - b.far)).unproject(b), this.ray.direction.set(0, 0, -1).transformDirection(b.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
        },
        intersectObject: function(a, b) {
            var c = [];
            pe(a, this, c, b);
            c.sort(Ye);
            return c
        },
        intersectObjects: function(a,
        b) {
            var c = [];
            if (!1 === Array.isArray(a))
                return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), c;
            for (var d = 0, e = a.length; d < e; d++)
                pe(a[d], this, c, b);
            c.sort(Ye);
            return c
        }
    });
    Object.assign(Ze.prototype, {
        start: function() {
            this.oldTime = this.startTime = ("undefined" === typeof performance ? Date : performance).now();
            this.elapsedTime = 0;
            this.running = !0
        },
        stop: function() {
            this.getElapsedTime();
            this.autoStart = this.running = !1
        },
        getElapsedTime: function() {
            this.getDelta();
            return this.elapsedTime
        },
        getDelta: function() {
            var a =
            0;
            if (this.autoStart && !this.running)
                return this.start(), 0;
            if (this.running) {
                var b = ("undefined" === typeof performance ? Date : performance).now(),
                    a = (b - this.oldTime) / 1E3;
                this.oldTime = b;
                this.elapsedTime += a
            }
            return a
        }
    });
    Object.assign($e.prototype, {
        set: function(a, b, c) {
            this.radius = a;
            this.phi = b;
            this.theta = c;
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.radius = a.radius;
            this.phi = a.phi;
            this.theta = a.theta;
            return this
        },
        makeSafe: function() {
            this.phi = Math.max(1E-6, Math.min(Math.PI -
            1E-6, this.phi));
            return this
        },
        setFromVector3: function(a) {
            this.radius = a.length();
            0 === this.radius ? this.phi = this.theta = 0 : (this.theta = Math.atan2(a.x, a.z), this.phi = Math.acos(Y.clamp(a.y / this.radius, -1, 1)));
            return this
        }
    });
    Object.assign(af.prototype, {
        set: function(a, b, c) {
            this.radius = a;
            this.theta = b;
            this.y = c;
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.radius = a.radius;
            this.theta = a.theta;
            this.y = a.y;
            return this
        },
        setFromVector3: function(a) {
            this.radius = Math.sqrt(a.x *
            a.x + a.z * a.z);
            this.theta = Math.atan2(a.x, a.z);
            this.y = a.y;
            return this
        }
    });
    ta.prototype = Object.create(la.prototype);
    ta.prototype.constructor = ta;
    ta.prototype.createAnimation = function(a, b, c, d) {
        b = {
            start: b,
            end: c,
            length: c - b + 1,
            fps: d,
            duration: (c - b) / d,
            lastFrame: 0,
            currentFrame: 0,
            active: !1,
            time: 0,
            direction: 1,
            weight: 1,
            directionBackwards: !1,
            mirroredLoop: !1
        };
        this.animationsMap[a] = b;
        this.animationsList.push(b)
    };
    ta.prototype.autoCreateAnimations = function(a) {
        for (var b = /([a-z]+)_?(\d+)/i, c, d = {}, e = this.geometry, f = 0, g = e.morphTargets.length; f <
        g; f++) {
            var h = e.morphTargets[f].name.match(b);
            if (h && 1 < h.length) {
                var k = h[1];
                d[k] || (d[k] = {
                    start: Infinity,
                    end: -Infinity
                });
                h = d[k];
                f < h.start && (h.start = f);
                f > h.end && (h.end = f);
                c || (c = k)
            }
        }
        for (k in d)
            h = d[k], this.createAnimation(k, h.start, h.end, a);
        this.firstAnimation = c
    };
    ta.prototype.setAnimationDirectionForward = function(a) {
        if (a = this.animationsMap[a])
            a.direction = 1, a.directionBackwards = !1
    };
    ta.prototype.setAnimationDirectionBackward = function(a) {
        if (a = this.animationsMap[a])
            a.direction = -1, a.directionBackwards = !0
    };
    ta.prototype.setAnimationFPS =
    function(a, b) {
        var c = this.animationsMap[a];
        c && (c.fps = b, c.duration = (c.end - c.start) / c.fps)
    };
    ta.prototype.setAnimationDuration = function(a, b) {
        var c = this.animationsMap[a];
        c && (c.duration = b, c.fps = (c.end - c.start) / c.duration)
    };
    ta.prototype.setAnimationWeight = function(a, b) {
        var c = this.animationsMap[a];
        c && (c.weight = b)
    };
    ta.prototype.setAnimationTime = function(a, b) {
        var c = this.animationsMap[a];
        c && (c.time = b)
    };
    ta.prototype.getAnimationTime = function(a) {
        var b = 0;
        if (a = this.animationsMap[a])
            b = a.time;
        return b
    };
    ta.prototype.getAnimationDuration =
    function(a) {
        var b = -1;
        if (a = this.animationsMap[a])
            b = a.duration;
        return b
    };
    ta.prototype.playAnimation = function(a) {
        var b = this.animationsMap[a];
        b ? (b.time = 0, b.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + a + "] undefined in .playAnimation()")
    };
    ta.prototype.stopAnimation = function(a) {
        if (a = this.animationsMap[a])
            a.active = !1
    };
    ta.prototype.update = function(a) {
        for (var b = 0, c = this.animationsList.length; b < c; b++) {
            var d = this.animationsList[b];
            if (d.active) {
                var e = d.duration / d.length;
                d.time += d.direction * a;
                if (d.mirroredLoop) {
                    if (d.time >
                    d.duration || 0 > d.time)
                        d.direction *= -1, d.time > d.duration && (d.time = d.duration, d.directionBackwards = !0), 0 > d.time && (d.time = 0, d.directionBackwards = !1)
                } else
                    d.time %= d.duration, 0 > d.time && (d.time += d.duration);
                var f = d.start + Y.clamp(Math.floor(d.time / e), 0, d.length - 1),
                    g = d.weight;
                f !== d.currentFrame && (this.morphTargetInfluences[d.lastFrame] = 0, this.morphTargetInfluences[d.currentFrame] = 1 * g, this.morphTargetInfluences[f] = 0, d.lastFrame = d.currentFrame, d.currentFrame = f);
                e = d.time % e / e;
                d.directionBackwards && (e = 1 - e);
                d.currentFrame !==
                d.lastFrame ? (this.morphTargetInfluences[d.currentFrame] = e * g, this.morphTargetInfluences[d.lastFrame] = (1 - e) * g) : this.morphTargetInfluences[d.currentFrame] = g
            }
        }
    };
    Xc.prototype = Object.create(z.prototype);
    Xc.prototype.constructor = Xc;
    Xc.prototype.isImmediateRenderObject = !0;
    Yc.prototype = Object.create(Q.prototype);
    Yc.prototype.constructor = Yc;
    Yc.prototype.update = function() {
        var a = new n,
            b = new n,
            c = new Ba;
        return function() {
            var d = ["a", "b", "c"];
            this.object.updateMatrixWorld(!0);
            c.getNormalMatrix(this.object.matrixWorld);
            var e = this.object.matrixWorld,
                f = this.geometry.attributes.position,
                g = this.object.geometry;
            if (g && g.isGeometry)
                for (var h = g.vertices, k = g.faces, l = g = 0, n = k.length; l < n; l++)
                    for (var v = k[l], p = 0, r = v.vertexNormals.length; p < r; p++) {
                        var z = v.vertexNormals[p];
                        a.copy(h[v[d[p]]]).applyMatrix4(e);
                        b.copy(z).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);
                        f.setXYZ(g, a.x, a.y, a.z);
                        g += 1;
                        f.setXYZ(g, b.x, b.y, b.z);
                        g += 1
                    }
            else if (g && g.isBufferGeometry)
                for (d = g.attributes.position, h = g.attributes.normal, p = g = 0, r = d.count; p <
                r; p++)
                    a.set(d.getX(p), d.getY(p), d.getZ(p)).applyMatrix4(e), b.set(h.getX(p), h.getY(p), h.getZ(p)), b.applyMatrix3(c).normalize().multiplyScalar(this.size).add(a), f.setXYZ(g, a.x, a.y, a.z), g += 1, f.setXYZ(g, b.x, b.y, b.z), g += 1;
            f.needsUpdate = !0
        }
    }();
    jc.prototype = Object.create(z.prototype);
    jc.prototype.constructor = jc;
    jc.prototype.dispose = function() {
        this.cone.geometry.dispose();
        this.cone.material.dispose()
    };
    jc.prototype.update = function() {
        var a = new n,
            b = new n;
        return function() {
            this.light.updateMatrixWorld();
            var c =
                this.light.distance ? this.light.distance : 1E3,
                d = c * Math.tan(this.light.angle);
            this.cone.scale.set(d, d, c);
            a.setFromMatrixPosition(this.light.matrixWorld);
            b.setFromMatrixPosition(this.light.target.matrixWorld);
            this.cone.lookAt(b.sub(a));
            this.cone.material.color.copy(this.light.color)
        }
    }();
    kc.prototype = Object.create(Q.prototype);
    kc.prototype.constructor = kc;
    kc.prototype.onBeforeRender = function() {
        var a = new n,
            b = new K,
            c = new K;
        return function() {
            var d = this.bones,
                e = this.geometry,
                f = e.getAttribute("position");
            c.getInverse(this.root.matrixWorld);
            for (var g = 0, h = 0; g < d.length; g++) {
                var k = d[g];
                k.parent && k.parent.isBone && (b.multiplyMatrices(c, k.matrixWorld), a.setFromMatrixPosition(b), f.setXYZ(h, a.x, a.y, a.z), b.multiplyMatrices(c, k.parent.matrixWorld), a.setFromMatrixPosition(b), f.setXYZ(h + 1, a.x, a.y, a.z), h += 2)
            }
            e.getAttribute("position").needsUpdate = !0
        }
    }();
    lc.prototype = Object.create(la.prototype);
    lc.prototype.constructor = lc;
    lc.prototype.dispose = function() {
        this.geometry.dispose();
        this.material.dispose()
    };
    lc.prototype.update = function() {
        this.material.color.copy(this.light.color)
    };
    mc.prototype = Object.create(z.prototype);
    mc.prototype.constructor = mc;
    mc.prototype.dispose = function() {
        this.children[0].geometry.dispose();
        this.children[0].material.dispose()
    };
    mc.prototype.update = function() {
        var a = this.children[0];
        a.material.color.copy(this.light.color);
        var b = .5 * this.light.width,
            c = .5 * this.light.height,
            a = a.geometry.attributes.position,
            d = a.array;
        d[0] = b;
        d[1] = -c;
        d[2] = 0;
        d[3] = b;
        d[4] = c;
        d[5] = 0;
        d[6] = -b;
        d[7] = c;
        d[8] = 0;
        d[9] = -b;
        d[10] = -c;
        d[11] = 0;
        d[12] = b;
        d[13] = -c;
        d[14] = 0;
        a.needsUpdate = !0
    };
    nc.prototype =
    Object.create(z.prototype);
    nc.prototype.constructor = nc;
    nc.prototype.dispose = function() {
        this.children[0].geometry.dispose();
        this.children[0].material.dispose()
    };
    nc.prototype.update = function() {
        var a = new n,
            b = new G,
            c = new G;
        return function() {
            var d = this.children[0],
                e = d.geometry.getAttribute("color");
            b.copy(this.light.color);
            c.copy(this.light.groundColor);
            for (var f = 0, g = e.count; f < g; f++) {
                var h = f < g / 2 ? b : c;
                e.setXYZ(f, h.r, h.g, h.b)
            }
            d.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());
            e.needsUpdate =
            !0
        }
    }();
    Zc.prototype = Object.create(Q.prototype);
    Zc.prototype.constructor = Zc;
    Jd.prototype = Object.create(Q.prototype);
    Jd.prototype.constructor = Jd;
    $c.prototype = Object.create(Q.prototype);
    $c.prototype.constructor = $c;
    $c.prototype.update = function() {
        var a = new n,
            b = new n,
            c = new Ba;
        return function() {
            this.object.updateMatrixWorld(!0);
            c.getNormalMatrix(this.object.matrixWorld);
            for (var d = this.object.matrixWorld, e = this.geometry.attributes.position, f = this.object.geometry, g = f.vertices, f = f.faces, h = 0, k = 0, l = f.length; k <
            l; k++) {
                var n = f[k],
                    v = n.normal;
                a.copy(g[n.a]).add(g[n.b]).add(g[n.c]).divideScalar(3).applyMatrix4(d);
                b.copy(v).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);
                e.setXYZ(h, a.x, a.y, a.z);
                h += 1;
                e.setXYZ(h, b.x, b.y, b.z);
                h += 1
            }
            e.needsUpdate = !0
        }
    }();
    oc.prototype = Object.create(z.prototype);
    oc.prototype.constructor = oc;
    oc.prototype.dispose = function() {
        var a = this.children[0],
            b = this.children[1];
        a.geometry.dispose();
        a.material.dispose();
        b.geometry.dispose();
        b.material.dispose()
    };
    oc.prototype.update = function() {
        var a =
            new n,
            b = new n,
            c = new n;
        return function() {
            a.setFromMatrixPosition(this.light.matrixWorld);
            b.setFromMatrixPosition(this.light.target.matrixWorld);
            c.subVectors(b, a);
            var d = this.children[0],
                e = this.children[1];
            d.lookAt(c);
            d.material.color.copy(this.light.color);
            e.lookAt(c);
            e.scale.z = c.length()
        }
    }();
    ad.prototype = Object.create(Q.prototype);
    ad.prototype.constructor = ad;
    ad.prototype.update = function() {
        function a(a, g, h, k) {
            d.set(g, h, k).unproject(e);
            a = c[a];
            if (void 0 !== a)
                for (g = b.getAttribute("position"), h = 0, k = a.length; h <
                k; h++)
                    g.setXYZ(a[h], d.x, d.y, d.z)
        }
        var b,
            c,
            d = new n,
            e = new Na;
        return function() {
            b = this.geometry;
            c = this.pointMap;
            e.projectionMatrix.copy(this.camera.projectionMatrix);
            a("c", 0, 0, -1);
            a("t", 0, 0, 1);
            a("n1", -1, -1, -1);
            a("n2", 1, -1, -1);
            a("n3", -1, 1, -1);
            a("n4", 1, 1, -1);
            a("f1", -1, -1, 1);
            a("f2", 1, -1, 1);
            a("f3", -1, 1, 1);
            a("f4", 1, 1, 1);
            a("u1", .7, 1.1, -1);
            a("u2", -.7, 1.1, -1);
            a("u3", 0, 2, -1);
            a("cf1", -1, 0, 1);
            a("cf2", 1, 0, 1);
            a("cf3", 0, -1, 1);
            a("cf4", 0, 1, 1);
            a("cn1", -1, 0, -1);
            a("cn2", 1, 0, -1);
            a("cn3", 0, -1, -1);
            a("cn4", 0, 1, -1);
            b.getAttribute("position").needsUpdate =
            !0
        }
    }();
    Ab.prototype = Object.create(Q.prototype);
    Ab.prototype.constructor = Ab;
    Ab.prototype.update = function() {
        var a = new Ra;
        return function(b) {
            void 0 !== b && console.warn("THREE.BoxHelper: .update() has no longer arguments.");
            void 0 !== this.object && a.setFromObject(this.object);
            if (!a.isEmpty()) {
                b = a.min;
                var c = a.max,
                    d = this.geometry.attributes.position,
                    e = d.array;
                e[0] = c.x;
                e[1] = c.y;
                e[2] = c.z;
                e[3] = b.x;
                e[4] = c.y;
                e[5] = c.z;
                e[6] = b.x;
                e[7] = b.y;
                e[8] = c.z;
                e[9] = c.x;
                e[10] = b.y;
                e[11] = c.z;
                e[12] = c.x;
                e[13] = c.y;
                e[14] = b.z;
                e[15] = b.x;
                e[16] = c.y;
                e[17] = b.z;
                e[18] = b.x;
                e[19] = b.y;
                e[20] = b.z;
                e[21] = c.x;
                e[22] = b.y;
                e[23] = b.z;
                d.needsUpdate = !0;
                this.geometry.computeBoundingSphere()
            }
        }
    }();
    Ab.prototype.setFromObject = function(a) {
        this.object = a;
        this.update();
        return this
    };
    var Kd,
        qe;
    Bb.prototype = Object.create(z.prototype);
    Bb.prototype.constructor = Bb;
    Bb.prototype.setDirection = function() {
        var a = new n,
            b;
        return function(c) {
            .99999 < c.y ? this.quaternion.set(0, 0, 0, 1) : -.99999 > c.y ? this.quaternion.set(1, 0, 0, 0) : (a.set(c.z, 0, -c.x).normalize(), b = Math.acos(c.y), this.quaternion.setFromAxisAngle(a,
            b))
        }
    }();
    Bb.prototype.setLength = function(a, b, c) {
        void 0 === b && (b = .2 * a);
        void 0 === c && (c = .2 * b);
        this.line.scale.set(1, Math.max(0, a - b), 1);
        this.line.updateMatrix();
        this.cone.scale.set(c, b, c);
        this.cone.position.y = a;
        this.cone.updateMatrix()
    };
    Bb.prototype.setColor = function(a) {
        this.line.material.color.copy(a);
        this.cone.material.color.copy(a)
    };
    Ld.prototype = Object.create(Q.prototype);
    Ld.prototype.constructor = Ld;
    var Od = new n,
        ue = new re,
        ve = new re,
        we = new re;
    La.prototype = Object.create(ua.prototype);
    La.prototype.constructor =
    La;
    La.prototype.getPoint = function(a) {
        var b = this.points,
            c = b.length;
        a *= c - (this.closed ? 0 : 1);
        var d = Math.floor(a);
        a -= d;
        this.closed ? d += 0 < d ? 0 : (Math.floor(Math.abs(d) / b.length) + 1) * b.length : 0 === a && d === c - 1 && (d = c - 2, a = 1);
        var e,
            f,
            g;
        this.closed || 0 < d ? e = b[(d - 1) % c] : (Od.subVectors(b[0], b[1]).add(b[0]), e = Od);
        f = b[d % c];
        g = b[(d + 1) % c];
        this.closed || d + 2 < c ? b = b[(d + 2) % c] : (Od.subVectors(b[c - 1], b[c - 2]).add(b[c - 1]), b = Od);
        if (void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
            var h = "chordal" === this.type ? .5 : .25,
                c = Math.pow(e.distanceToSquared(f), h),
                d = Math.pow(f.distanceToSquared(g), h),
                h = Math.pow(g.distanceToSquared(b), h);
            1E-4 > d && (d = 1);
            1E-4 > c && (c = d);
            1E-4 > h && (h = d);
            ue.initNonuniformCatmullRom(e.x, f.x, g.x, b.x, c, d, h);
            ve.initNonuniformCatmullRom(e.y, f.y, g.y, b.y, c, d, h);
            we.initNonuniformCatmullRom(e.z, f.z, g.z, b.z, c, d, h)
        } else
            "catmullrom" === this.type && (c = void 0 !== this.tension ? this.tension : .5, ue.initCatmullRom(e.x, f.x, g.x, b.x, c), ve.initCatmullRom(e.y, f.y, g.y, b.y, c), we.initCatmullRom(e.z, f.z, g.z, b.z, c));
        return new n(ue.calc(a),
        ve.calc(a), we.calc(a))
    };
    bd.prototype = Object.create(ua.prototype);
    bd.prototype.constructor = bd;
    bd.prototype.getPoint = function(a) {
        var b = this.v0,
            c = this.v1,
            d = this.v2,
            e = this.v3;
        return new n(xb(a, b.x, c.x, d.x, e.x), xb(a, b.y, c.y, d.y, e.y), xb(a, b.z, c.z, d.z, e.z))
    };
    cd.prototype = Object.create(ua.prototype);
    cd.prototype.constructor = cd;
    cd.prototype.getPoint = function(a) {
        var b = this.v0,
            c = this.v1,
            d = this.v2;
        return new n(wb(a, b.x, c.x, d.x), wb(a, b.y, c.y, d.y), wb(a, b.z, c.z, d.z))
    };
    dd.prototype = Object.create(ua.prototype);
    dd.prototype.constructor =
    dd;
    dd.prototype.getPoint = function(a) {
        if (1 === a)
            return this.v2.clone();
        var b = new n;
        b.subVectors(this.v2, this.v1);
        b.multiplyScalar(a);
        b.add(this.v1);
        return b
    };
    Md.prototype = Object.create(Va.prototype);
    Md.prototype.constructor = Md;
    ua.create = function(a, b) {
        console.log("THREE.Curve.create() has been deprecated");
        a.prototype = Object.create(ua.prototype);
        a.prototype.constructor = a;
        a.prototype.getPoint = b;
        return a
    };
    cf.prototype = Object.create(La.prototype);
    df.prototype = Object.create(La.prototype);
    se.prototype = Object.create(La.prototype);
    Object.assign(se.prototype, {
        initFromArray: function(a) {
            console.error("THREE.Spline: .initFromArray() has been removed.")
        },
        getControlPointsArray: function(a) {
            console.error("THREE.Spline: .getControlPointsArray() has been removed.")
        },
        reparametrizeByArcLength: function(a) {
            console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
        }
    });
    Zc.prototype.setColors = function() {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    };
    kc.prototype.update =
    function() {
        console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
    };
    Object.assign(fd.prototype, {
        center: function(a) {
            console.warn("THREE.Box2: .center() has been renamed to .getCenter().");
            return this.getCenter(a)
        },
        empty: function() {
            console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");
            return this.isEmpty()
        },
        isIntersectionBox: function(a) {
            console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");
            return this.intersectsBox(a)
        },
        size: function(a) {
            console.warn("THREE.Box2: .size() has been renamed to .getSize().");
            return this.getSize(a)
        }
    });
    Object.assign(Ra.prototype, {
        center: function(a) {
            console.warn("THREE.Box3: .center() has been renamed to .getCenter().");
            return this.getCenter(a)
        },
        empty: function() {
            console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");
            return this.isEmpty()
        },
        isIntersectionBox: function(a) {
            console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");
            return this.intersectsBox(a)
        },
        isIntersectionSphere: function(a) {
            console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");
            return this.intersectsSphere(a)
        },
        size: function(a) {
            console.warn("THREE.Box3: .size() has been renamed to .getSize().");
            return this.getSize(a)
        }
    });
    Hb.prototype.center = function(a) {
        console.warn("THREE.Line3: .center() has been renamed to .getCenter().");
        return this.getCenter(a)
    };
    Y.random16 = function() {
        console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead.");
        return Math.random()
    };
    Object.assign(Ba.prototype, {
        flattenToArrayOffset: function(a, b) {
            console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
            return this.toArray(a, b)
        },
        multiplyVector3: function(a) {
            console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
            return a.applyMatrix3(this)
        },
        multiplyVector3Array: function(a) {
            console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
        },
        applyToBuffer: function(a, b, c) {
            console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");
            return this.applyToBufferAttribute(a)
        },
        applyToVector3Array: function(a,
        b, c) {
            console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
        }
    });
    Object.assign(K.prototype, {
        extractPosition: function(a) {
            console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
            return this.copyPosition(a)
        },
        flattenToArrayOffset: function(a, b) {
            console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
            return this.toArray(a, b)
        },
        getPosition: function() {
            var a;
            return function() {
                void 0 === a && (a = new n);
                console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
                return a.setFromMatrixColumn(this, 3)
            }
        }(),
        setRotationFromQuaternion: function(a) {
            console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
            return this.makeRotationFromQuaternion(a)
        },
        multiplyToArray: function() {
            console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
        },
        multiplyVector3: function(a) {
            console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");
            return a.applyMatrix4(this)
        },
        multiplyVector4: function(a) {
            console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
            return a.applyMatrix4(this)
        },
        multiplyVector3Array: function(a) {
            console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
        },
        rotateAxis: function(a) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
            a.transformDirection(this)
        },
        crossVector: function(a) {
            console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
            return a.applyMatrix4(this)
        },
        translate: function() {
            console.error("THREE.Matrix4: .translate() has been removed.")
        },
        rotateX: function() {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        },
        rotateY: function() {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        },
        rotateZ: function() {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        },
        rotateByAxis: function() {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        },
        applyToBuffer: function(a, b, c) {
            console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");
            return this.applyToBufferAttribute(a)
        },
        applyToVector3Array: function(a, b, c) {
            console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
        },
        makeFrustum: function(a, b, c, d, e, f) {
            console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");
            return this.makePerspective(a, b, d, c, e, f)
        }
    });
    Aa.prototype.isIntersectionLine = function(a) {
        console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");
        return this.intersectsLine(a)
    };
    oa.prototype.multiplyVector3 =
    function(a) {
        console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
        return a.applyQuaternion(this)
    };
    Object.assign(kb.prototype, {
        isIntersectionBox: function(a) {
            console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");
            return this.intersectsBox(a)
        },
        isIntersectionPlane: function(a) {
            console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");
            return this.intersectsPlane(a)
        },
        isIntersectionSphere: function(a) {
            console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");
            return this.intersectsSphere(a)
        }
    });
    Object.assign(zb.prototype, {
        extrude: function(a) {
            console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");
            return new cb(this, a)
        },
        makeGeometry: function(a) {
            console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");
            return new Xb(this, a)
        }
    });
    Object.assign(C.prototype, {
        fromAttribute: function(a, b, c) {
            console.error("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");
            return this.fromBufferAttribute(a,
            b, c)
        }
    });
    Object.assign(n.prototype, {
        setEulerFromRotationMatrix: function() {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        },
        setEulerFromQuaternion: function() {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        },
        getPositionFromMatrix: function(a) {
            console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");
            return this.setFromMatrixPosition(a)
        },
        getScaleFromMatrix: function(a) {
            console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");
            return this.setFromMatrixScale(a)
        },
        getColumnFromMatrix: function(a, b) {
            console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");
            return this.setFromMatrixColumn(b, a)
        },
        applyProjection: function(a) {
            console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");
            return this.applyMatrix4(a)
        },
        fromAttribute: function(a,
        b, c) {
            console.error("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");
            return this.fromBufferAttribute(a, b, c)
        }
    });
    Object.assign(fa.prototype, {
        fromAttribute: function(a, b, c) {
            console.error("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");
            return this.fromBufferAttribute(a, b, c)
        }
    });
    J.prototype.computeTangents = function() {
        console.warn("THREE.Geometry: .computeTangents() has been removed.")
    };
    Object.assign(z.prototype, {
        getChildByName: function(a) {
            console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
            return this.getObjectByName(a)
        },
        renderDepth: function() {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        },
        translate: function(a, b) {
            console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");
            return this.translateOnAxis(b, a)
        }
    });
    Object.defineProperties(z.prototype, {
        eulerOrder: {
            get: function() {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
                return this.rotation.order
            },
            set: function(a) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
                this.rotation.order = a
            }
        },
        useQuaternion: {
            get: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }
        }
    });
    Object.defineProperties(yc.prototype, {
        objects: {
            get: function() {
                console.warn("THREE.LOD: .objects has been renamed to .levels.");
                return this.levels
            }
        }
    });
    Object.defineProperty(zc.prototype, "useVertexTexture", {
        get: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        },
        set: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        }
    });
    Object.defineProperty(ua.prototype, "__arcLengthDivisions", {
        get: function() {
            console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");
            return this.arcLengthDivisions
        },
        set: function(a) {
            console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");
            this.arcLengthDivisions = a
        }
    });
    qa.prototype.setLens = function(a, b) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");
        void 0 !== b && (this.filmGauge = b);
        this.setFocalLength(a)
    };
    Object.defineProperties(na.prototype, {
        onlyShadow: {
            set: function() {
                console.warn("THREE.Light: .onlyShadow has been removed.")
            }
        },
        shadowCameraFov: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");
                this.shadow.camera.fov = a
            }
        },
        shadowCameraLeft: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");
                this.shadow.camera.left = a
            }
        },
        shadowCameraRight: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");
                this.shadow.camera.right = a
            }
        },
        shadowCameraTop: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");
                this.shadow.camera.top = a
            }
        },
        shadowCameraBottom: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");
                this.shadow.camera.bottom = a
            }
        },
        shadowCameraNear: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");
                this.shadow.camera.near = a
            }
        },
        shadowCameraFar: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");
                this.shadow.camera.far = a
            }
        },
        shadowCameraVisible: {
            set: function() {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
            }
        },
        shadowBias: {
            set: function(a) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias.");
                this.shadow.bias = a
            }
        },
        shadowDarkness: {
            set: function() {
                console.warn("THREE.Light: .shadowDarkness has been removed.")
            }
        },
        shadowMapWidth: {
            set: function(a) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");
                this.shadow.mapSize.width = a
            }
        },
        shadowMapHeight: {
            set: function(a) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");
                this.shadow.mapSize.height = a
            }
        }
    });
    Object.defineProperties(Z.prototype, {
        length: {
            get: function() {
                console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");
                return this.array.length
            }
        }
    });
    Object.assign(E.prototype, {
        addIndex: function(a) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");
            this.setIndex(a)
        },
        addDrawCall: function(a,
        b, c) {
            void 0 !== c && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");
            console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");
            this.addGroup(a, b)
        },
        clearDrawCalls: function() {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");
            this.clearGroups()
        },
        computeTangents: function() {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        },
        computeOffsets: function() {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }
    });
    Object.defineProperties(E.prototype, {
        drawcalls: {
            get: function() {
                console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");
                return this.groups
            }
        },
        offsets: {
            get: function() {
                console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");
                return this.groups
            }
        }
    });
    Object.defineProperties(Id.prototype, {
        dynamic: {
            set: function() {
                console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
            }
        },
        onUpdate: {
            value: function() {
                console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");
                return this
            }
        }
    });
    Object.defineProperties(U.prototype, {
        wrapAround: {
            get: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            },
            set: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            }
        },
        wrapRGB: {
            get: function() {
                console.warn("THREE.Material: .wrapRGB has been removed.");
                return new G
            }
        }
    });
    Object.defineProperties(Ja.prototype, {
        metal: {
            get: function() {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");
                return !1
            },
            set: function() {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
            }
        }
    });
    Object.defineProperties(ra.prototype, {
        derivatives: {
            get: function() {
                console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
                return this.extensions.derivatives
            },
            set: function(a) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
                this.extensions.derivatives = a
            }
        }
    });
    Object.assign(Xd.prototype, {
        getCurrentRenderTarget: function() {
            console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().");
            return this.getRenderTarget()
        },
        supportsFloatTextures: function() {
            console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");
            return this.extensions.get("OES_texture_float")
        },
        supportsHalfFloatTextures: function() {
            console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");
            return this.extensions.get("OES_texture_half_float")
        },
        supportsStandardDerivatives: function() {
            console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
            return this.extensions.get("OES_standard_derivatives")
        },
        supportsCompressedTextureS3TC: function() {
            console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");
            return this.extensions.get("WEBGL_compressed_texture_s3tc")
        },
        supportsCompressedTexturePVRTC: function() {
            console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");
            return this.extensions.get("WEBGL_compressed_texture_pvrtc")
        },
        supportsBlendMinMax: function() {
            console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");
            return this.extensions.get("EXT_blend_minmax")
        },
        supportsVertexTextures: function() {
            console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");
            return this.capabilities.vertexTextures
        },
        supportsInstancedArrays: function() {
            console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");
            return this.extensions.get("ANGLE_instanced_arrays")
        },
        enableScissorTest: function(a) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");
            this.setScissorTest(a)
        },
        initMaterial: function() {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        },
        addPrePlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        },
        addPostPlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        },
        updateShadowMap: function() {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        }
    });
    Object.defineProperties(Xd.prototype, {
        shadowMapEnabled: {
            get: function() {
                return this.shadowMap.enabled
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");
                this.shadowMap.enabled = a
            }
        },
        shadowMapType: {
            get: function() {
                return this.shadowMap.type
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");
                this.shadowMap.type = a
            }
        },
        shadowMapCullFace: {
            get: function() {
                return this.shadowMap.cullFace
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace.");
                this.shadowMap.cullFace = a
            }
        }
    });
    Object.defineProperties(Ie.prototype, {
        cullFace: {
            get: function() {
                return this.renderReverseSided ? 2 : 1
            },
            set: function(a) {
                a = 1 !== a;
                console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to " + a + ".");
                this.renderReverseSided = a
            }
        }
    });
    Object.defineProperties(Cb.prototype, {
        wrapS: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
                return this.texture.wrapS
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
                this.texture.wrapS = a
            }
        },
        wrapT: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
                return this.texture.wrapT
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
                this.texture.wrapT = a
            }
        },
        magFilter: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
                return this.texture.magFilter
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
                this.texture.magFilter =
                a
            }
        },
        minFilter: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
                return this.texture.minFilter
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
                this.texture.minFilter = a
            }
        },
        anisotropy: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
                return this.texture.anisotropy
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
                this.texture.anisotropy =
                a
            }
        },
        offset: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
                return this.texture.offset
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
                this.texture.offset = a
            }
        },
        repeat: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
                return this.texture.repeat
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
                this.texture.repeat = a
            }
        },
        format: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
                return this.texture.format
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
                this.texture.format = a
            }
        },
        type: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
                return this.texture.type
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
                this.texture.type = a
            }
        },
        generateMipmaps: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
                return this.texture.generateMipmaps
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
                this.texture.generateMipmaps = a
            }
        }
    });
    hc.prototype.load = function(a) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        var b = this;
        (new fe).load(a, function(a) {
            b.setBuffer(a)
        });
        return this
    };
    je.prototype.getData = function() {
        console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");
        return this.getFrequencyData()
    };
    l.WebGLRenderTargetCube = Db;
    l.WebGLRenderTarget =
    Cb;
    l.WebGLRenderer = Xd;
    l.ShaderLib = $a;
    l.UniformsLib = R;
    l.UniformsUtils = Ca;
    l.ShaderChunk = X;
    l.FogExp2 = Ib;
    l.Fog = Jb;
    l.Scene = ld;
    l.LensFlare = Yd;
    l.Sprite = xc;
    l.LOD = yc;
    l.SkinnedMesh = nd;
    l.Skeleton = zc;
    l.Bone = md;
    l.Mesh = la;
    l.LineSegments = Q;
    l.LineLoop = od;
    l.Line = sa;
    l.Points = Kb;
    l.Group = Ac;
    l.VideoTexture = pd;
    l.DataTexture = db;
    l.CompressedTexture = Lb;
    l.CubeTexture = Xa;
    l.CanvasTexture = qd;
    l.DepthTexture = Bc;
    l.Texture = ba;
    l.CompressedTextureLoader = Oe;
    l.DataTextureLoader = $d;
    l.CubeTextureLoader = ae;
    l.TextureLoader = rd;
    l.ObjectLoader =
    Pe;
    l.MaterialLoader = Gd;
    l.BufferGeometryLoader = be;
    l.DefaultLoadingManager = va;
    l.LoadingManager = Zd;
    l.JSONLoader = ce;
    l.ImageLoader = Sc;
    l.FontLoader = Re;
    l.FileLoader = Ka;
    l.Loader = ec;
    l.Cache = ed;
    l.AudioLoader = fe;
    l.SpotLightShadow = td;
    l.SpotLight = ud;
    l.PointLight = vd;
    l.RectAreaLight = zd;
    l.HemisphereLight = sd;
    l.DirectionalLightShadow = wd;
    l.DirectionalLight = xd;
    l.AmbientLight = yd;
    l.LightShadow = tb;
    l.Light = na;
    l.StereoCamera = Se;
    l.PerspectiveCamera = qa;
    l.OrthographicCamera = Fb;
    l.CubeCamera = Hd;
    l.ArrayCamera = kd;
    l.Camera = Na;
    l.AudioListener =
    ge;
    l.PositionalAudio = ie;
    l.AudioContext = he;
    l.AudioAnalyser = je;
    l.Audio = hc;
    l.VectorKeyframeTrack = cc;
    l.StringKeyframeTrack = Dd;
    l.QuaternionKeyframeTrack = Uc;
    l.NumberKeyframeTrack = dc;
    l.ColorKeyframeTrack = Fd;
    l.BooleanKeyframeTrack = Ed;
    l.PropertyMixer = ke;
    l.PropertyBinding = ha;
    l.KeyframeTrack = vb;
    l.AnimationUtils = ia;
    l.AnimationObjectGroup = Ue;
    l.AnimationMixer = We;
    l.AnimationClip = Da;
    l.Uniform = Id;
    l.InstancedBufferGeometry = le;
    l.BufferGeometry = E;
    l.GeometryIdCount = function() {
        return Rd++
    };
    l.Geometry = J;
    l.InterleavedBufferAttribute =
    me;
    l.InstancedInterleavedBuffer = ne;
    l.InterleavedBuffer = ic;
    l.InstancedBufferAttribute = oe;
    l.Face3 = Sa;
    l.Object3D = z;
    l.Raycaster = Xe;
    l.Layers = Qd;
    l.EventDispatcher = xa;
    l.Clock = Ze;
    l.QuaternionLinearInterpolant = Cd;
    l.LinearInterpolant = Tc;
    l.DiscreteInterpolant = Bd;
    l.CubicInterpolant = Ad;
    l.Interpolant = wa;
    l.Triangle = Ta;
    l.Math = Y;
    l.Spherical = $e;
    l.Cylindrical = af;
    l.Plane = Aa;
    l.Frustum = gd;
    l.Sphere = Ea;
    l.Ray = kb;
    l.Matrix4 = K;
    l.Matrix3 = Ba;
    l.Box3 = Ra;
    l.Box2 = fd;
    l.Line3 = Hb;
    l.Euler = ab;
    l.Vector4 = fa;
    l.Vector3 = n;
    l.Vector2 = C;
    l.Quaternion =
    oa;
    l.Color = G;
    l.MorphBlendMesh = ta;
    l.ImmediateRenderObject = Xc;
    l.VertexNormalsHelper = Yc;
    l.SpotLightHelper = jc;
    l.SkeletonHelper = kc;
    l.PointLightHelper = lc;
    l.RectAreaLightHelper = mc;
    l.HemisphereLightHelper = nc;
    l.GridHelper = Zc;
    l.PolarGridHelper = Jd;
    l.FaceNormalsHelper = $c;
    l.DirectionalLightHelper = oc;
    l.CameraHelper = ad;
    l.BoxHelper = Ab;
    l.ArrowHelper = Bb;
    l.AxisHelper = Ld;
    l.CatmullRomCurve3 = La;
    l.CubicBezierCurve3 = bd;
    l.QuadraticBezierCurve3 = cd;
    l.LineCurve3 = dd;
    l.ArcCurve = Md;
    l.EllipseCurve = Va;
    l.SplineCurve = yb;
    l.CubicBezierCurve =
    fc;
    l.QuadraticBezierCurve = gc;
    l.LineCurve = Qa;
    l.Shape = zb;
    l.Path = Wc;
    l.ShapePath = de;
    l.Font = ee;
    l.CurvePath = Vc;
    l.Curve = ua;
    l.ShapeUtils = Ia;
    l.SceneUtils = {
        createMultiMaterialObject: function(a, b) {
            for (var c = new Ac, d = 0, e = b.length; d < e; d++)
                c.add(new la(a, b[d]));
            return c
        },
        detach: function(a, b, c) {
            a.applyMatrix(b.matrixWorld);
            b.remove(a);
            c.add(a)
        },
        attach: function(a, b, c) {
            a.applyMatrix((new K).getInverse(c.matrixWorld));
            b.remove(a);
            c.add(a)
        }
    };
    l.WireframeGeometry = Mb;
    l.ParametricGeometry = Cc;
    l.ParametricBufferGeometry =
    Nb;
    l.TetrahedronGeometry = Ec;
    l.TetrahedronBufferGeometry = Ob;
    l.OctahedronGeometry = Fc;
    l.OctahedronBufferGeometry = lb;
    l.IcosahedronGeometry = Gc;
    l.IcosahedronBufferGeometry = Pb;
    l.DodecahedronGeometry = Hc;
    l.DodecahedronBufferGeometry = Qb;
    l.PolyhedronGeometry = Dc;
    l.PolyhedronBufferGeometry = za;
    l.TubeGeometry = Ic;
    l.TubeBufferGeometry = Rb;
    l.TorusKnotGeometry = Jc;
    l.TorusKnotBufferGeometry = Sb;
    l.TorusGeometry = Kc;
    l.TorusBufferGeometry = Tb;
    l.TextGeometry = Lc;
    l.TextBufferGeometry = Ub;
    l.SphereGeometry = Mc;
    l.SphereBufferGeometry =
    mb;
    l.RingGeometry = Nc;
    l.RingBufferGeometry = Vb;
    l.PlaneGeometry = vc;
    l.PlaneBufferGeometry = jb;
    l.LatheGeometry = Oc;
    l.LatheBufferGeometry = Wb;
    l.ShapeGeometry = Xb;
    l.ShapeBufferGeometry = Yb;
    l.ExtrudeGeometry = cb;
    l.ExtrudeBufferGeometry = Ga;
    l.EdgesGeometry = Zb;
    l.ConeGeometry = Pc;
    l.ConeBufferGeometry = Qc;
    l.CylinderGeometry = nb;
    l.CylinderBufferGeometry = Ua;
    l.CircleGeometry = Rc;
    l.CircleBufferGeometry = $b;
    l.BoxGeometry = Gb;
    l.BoxBufferGeometry = ib;
    l.ShadowMaterial = ac;
    l.SpriteMaterial = bb;
    l.RawShaderMaterial = bc;
    l.ShaderMaterial =
    ra;
    l.PointsMaterial = Fa;
    l.MeshPhysicalMaterial = ob;
    l.MeshStandardMaterial = Pa;
    l.MeshPhongMaterial = Ja;
    l.MeshToonMaterial = pb;
    l.MeshNormalMaterial = qb;
    l.MeshLambertMaterial = rb;
    l.MeshDepthMaterial = Za;
    l.MeshBasicMaterial = ya;
    l.LineDashedMaterial = sb;
    l.LineBasicMaterial = ea;
    l.Material = U;
    l.Float64BufferAttribute = uc;
    l.Float32BufferAttribute = B;
    l.Uint32BufferAttribute = hb;
    l.Int32BufferAttribute = tc;
    l.Uint16BufferAttribute = gb;
    l.Int16BufferAttribute = sc;
    l.Uint8ClampedBufferAttribute = rc;
    l.Uint8BufferAttribute = qc;
    l.Int8BufferAttribute =
    pc;
    l.BufferAttribute = Z;
    l.REVISION = "86";
    l.MOUSE = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2
    };
    l.CullFaceNone = 0;
    l.CullFaceBack = 1;
    l.CullFaceFront = 2;
    l.CullFaceFrontBack = 3;
    l.FrontFaceDirectionCW = 0;
    l.FrontFaceDirectionCCW = 1;
    l.BasicShadowMap = 0;
    l.PCFShadowMap = 1;
    l.PCFSoftShadowMap = 2;
    l.FrontSide = 0;
    l.BackSide = 1;
    l.DoubleSide = 2;
    l.FlatShading = 1;
    l.SmoothShading = 2;
    l.NoColors = 0;
    l.FaceColors = 1;
    l.VertexColors = 2;
    l.NoBlending = 0;
    l.NormalBlending = 1;
    l.AdditiveBlending = 2;
    l.SubtractiveBlending = 3;
    l.MultiplyBlending = 4;
    l.CustomBlending = 5;
    l.AddEquation =
    100;
    l.SubtractEquation = 101;
    l.ReverseSubtractEquation = 102;
    l.MinEquation = 103;
    l.MaxEquation = 104;
    l.ZeroFactor = 200;
    l.OneFactor = 201;
    l.SrcColorFactor = 202;
    l.OneMinusSrcColorFactor = 203;
    l.SrcAlphaFactor = 204;
    l.OneMinusSrcAlphaFactor = 205;
    l.DstAlphaFactor = 206;
    l.OneMinusDstAlphaFactor = 207;
    l.DstColorFactor = 208;
    l.OneMinusDstColorFactor = 209;
    l.SrcAlphaSaturateFactor = 210;
    l.NeverDepth = 0;
    l.AlwaysDepth = 1;
    l.LessDepth = 2;
    l.LessEqualDepth = 3;
    l.EqualDepth = 4;
    l.GreaterEqualDepth = 5;
    l.GreaterDepth = 6;
    l.NotEqualDepth = 7;
    l.MultiplyOperation =
    0;
    l.MixOperation = 1;
    l.AddOperation = 2;
    l.NoToneMapping = 0;
    l.LinearToneMapping = 1;
    l.ReinhardToneMapping = 2;
    l.Uncharted2ToneMapping = 3;
    l.CineonToneMapping = 4;
    l.UVMapping = 300;
    l.CubeReflectionMapping = 301;
    l.CubeRefractionMapping = 302;
    l.EquirectangularReflectionMapping = 303;
    l.EquirectangularRefractionMapping = 304;
    l.SphericalReflectionMapping = 305;
    l.CubeUVReflectionMapping = 306;
    l.CubeUVRefractionMapping = 307;
    l.RepeatWrapping = 1E3;
    l.ClampToEdgeWrapping = 1001;
    l.MirroredRepeatWrapping = 1002;
    l.NearestFilter = 1003;
    l.NearestMipMapNearestFilter =
    1004;
    l.NearestMipMapLinearFilter = 1005;
    l.LinearFilter = 1006;
    l.LinearMipMapNearestFilter = 1007;
    l.LinearMipMapLinearFilter = 1008;
    l.UnsignedByteType = 1009;
    l.ByteType = 1010;
    l.ShortType = 1011;
    l.UnsignedShortType = 1012;
    l.IntType = 1013;
    l.UnsignedIntType = 1014;
    l.FloatType = 1015;
    l.HalfFloatType = 1016;
    l.UnsignedShort4444Type = 1017;
    l.UnsignedShort5551Type = 1018;
    l.UnsignedShort565Type = 1019;
    l.UnsignedInt248Type = 1020;
    l.AlphaFormat = 1021;
    l.RGBFormat = 1022;
    l.RGBAFormat = 1023;
    l.LuminanceFormat = 1024;
    l.LuminanceAlphaFormat = 1025;
    l.RGBEFormat =
    1023;
    l.DepthFormat = 1026;
    l.DepthStencilFormat = 1027;
    l.RGB_S3TC_DXT1_Format = 2001;
    l.RGBA_S3TC_DXT1_Format = 2002;
    l.RGBA_S3TC_DXT3_Format = 2003;
    l.RGBA_S3TC_DXT5_Format = 2004;
    l.RGB_PVRTC_4BPPV1_Format = 2100;
    l.RGB_PVRTC_2BPPV1_Format = 2101;
    l.RGBA_PVRTC_4BPPV1_Format = 2102;
    l.RGBA_PVRTC_2BPPV1_Format = 2103;
    l.RGB_ETC1_Format = 2151;
    l.LoopOnce = 2200;
    l.LoopRepeat = 2201;
    l.LoopPingPong = 2202;
    l.InterpolateDiscrete = 2300;
    l.InterpolateLinear = 2301;
    l.InterpolateSmooth = 2302;
    l.ZeroCurvatureEnding = 2400;
    l.ZeroSlopeEnding = 2401;
    l.WrapAroundEnding =
    2402;
    l.TrianglesDrawMode = 0;
    l.TriangleStripDrawMode = 1;
    l.TriangleFanDrawMode = 2;
    l.LinearEncoding = 3E3;
    l.sRGBEncoding = 3001;
    l.GammaEncoding = 3007;
    l.RGBEEncoding = 3002;
    l.LogLuvEncoding = 3003;
    l.RGBM7Encoding = 3004;
    l.RGBM16Encoding = 3005;
    l.RGBDEncoding = 3006;
    l.BasicDepthPacking = 3200;
    l.RGBADepthPacking = 3201;
    l.CubeGeometry = Gb;
    l.Face4 = function(a, b, c, d, e, f, g) {
        console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");
        return new Sa(a, b, c, e, f, g)
    };
    l.LineStrip = 0;
    l.LinePieces = 1;
    l.MeshFaceMaterial =
    function(a) {
        console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead.");
        return a
    };
    l.MultiMaterial = function(a) {
        void 0 === a && (a = []);
        console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");
        a.isMultiMaterial = !0;
        a.materials = a;
        a.clone = function() {
            return a.slice()
        };
        return a
    };
    l.PointCloud = function(a, b) {
        console.warn("THREE.PointCloud has been renamed to THREE.Points.");
        return new Kb(a, b)
    };
    l.Particle = function(a) {
        console.warn("THREE.Particle has been renamed to THREE.Sprite.");
        return new xc(a)
    };
    l.ParticleSystem = function(a, b) {
        console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");
        return new Kb(a, b)
    };
    l.PointCloudMaterial = function(a) {
        console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");
        return new Fa(a)
    };
    l.ParticleBasicMaterial = function(a) {
        console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");
        return new Fa(a)
    };
    l.ParticleSystemMaterial = function(a) {
        console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");
        return new Fa(a)
    };
    l.Vertex = function(a, b, c) {
        console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");
        return new n(a, b, c)
    };
    l.DynamicBufferAttribute = function(a, b) {
        console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");
        return (new Z(a, b)).setDynamic(!0)
    };
    l.Int8Attribute = function(a, b) {
        console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");
        return new pc(a, b)
    };
    l.Uint8Attribute =
    function(a, b) {
        console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");
        return new qc(a, b)
    };
    l.Uint8ClampedAttribute = function(a, b) {
        console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");
        return new rc(a, b)
    };
    l.Int16Attribute = function(a, b) {
        console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");
        return new sc(a, b)
    };
    l.Uint16Attribute = function(a, b) {
        console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");
        return new gb(a, b)
    };
    l.Int32Attribute = function(a, b) {
        console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");
        return new tc(a, b)
    };
    l.Uint32Attribute = function(a, b) {
        console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");
        return new hb(a, b)
    };
    l.Float32Attribute = function(a, b) {
        console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");
        return new B(a, b)
    };
    l.Float64Attribute =
    function(a, b) {
        console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");
        return new uc(a, b)
    };
    l.ClosedSplineCurve3 = cf;
    l.SplineCurve3 = df;
    l.Spline = se;
    l.BoundingBoxHelper = function(a, b) {
        console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");
        return new Ab(a, b)
    };
    l.EdgesHelper = function(a, b) {
        console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");
        return new Q(new Zb(a.geometry), new ea({
            color: void 0 !==
            b ? b : 16777215
        }))
    };
    l.WireframeHelper = function(a, b) {
        console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");
        return new Q(new Mb(a.geometry), new ea({
            color: void 0 !== b ? b : 16777215
        }))
    };
    l.XHRLoader = function(a) {
        console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");
        return new Ka(a)
    };
    l.BinaryTextureLoader = function(a) {
        console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");
        return new $d(a)
    };
    l.GeometryUtils = {
        merge: function(a, b,
        c) {
            console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
            var d;
            b.isMesh && (b.matrixAutoUpdate && b.updateMatrix(), d = b.matrix, b = b.geometry);
            a.merge(b, d, c)
        },
        center: function(a) {
            console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");
            return a.center()
        }
    };
    l.ImageUtils = {
        crossOrigin: void 0,
        loadTexture: function(a, b, c, d) {
            console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
            var e = new rd;
            e.setCrossOrigin(this.crossOrigin);
            a = e.load(a, c, void 0, d);
            b && (a.mapping = b);
            return a
        },
        loadTextureCube: function(a, b, c, d) {
            console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
            var e = new ae;
            e.setCrossOrigin(this.crossOrigin);
            a = e.load(a, c, void 0, d);
            b && (a.mapping = b);
            return a
        },
        loadCompressedTexture: function() {
            console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
        },
        loadCompressedTextureCube: function() {
            console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
        }
    };
    l.Projector = function() {
        console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");
        this.projectVector = function(a, b) {
            console.warn("THREE.Projector: .projectVector() is now vector.project().");
            a.project(b)
        };
        this.unprojectVector = function(a, b) {
            console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");
            a.unproject(b)
        };
        this.pickingRay = function() {
            console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
        }
    };
    l.CanvasRenderer = function() {
        console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");
        this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
        this.clear = function() {};
        this.render = function() {};
        this.setClearColor = function() {};
        this.setSize = function() {}
    };
    Object.defineProperty(l, "__esModule", {
        value: !0
    })
});

