var tr = Object.defineProperty;
var er = (t, e, r) => e in t ? tr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Vt = (t, e, r) => (er(t, typeof e != "symbol" ? e + "" : e, r), r);
function it() {
}
function Pe(t) {
  return t();
}
function de() {
  return /* @__PURE__ */ Object.create(null);
}
function Ot(t) {
  t.forEach(Pe);
}
function De(t) {
  return typeof t == "function";
}
function Ce(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let Ct;
function rr(t, e) {
  return t === e ? !0 : (Ct || (Ct = document.createElement("a")), Ct.href = e, t === Ct.href);
}
function nr(t) {
  return Object.keys(t).length === 0;
}
function C(t, e) {
  t.appendChild(e);
}
function Se(t, e, r) {
  const n = ir(t);
  if (!n.getElementById(e)) {
    const i = B("style");
    i.id = e, i.textContent = r, or(n, i);
  }
}
function ir(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function or(t, e) {
  return C(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function yt(t, e, r) {
  t.insertBefore(e, r || null);
}
function ot(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function B(t) {
  return document.createElement(t);
}
function Ft(t) {
  return document.createTextNode(t);
}
function dt() {
  return Ft(" ");
}
function ar(t, e, r, n) {
  return t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n);
}
function A(t, e, r) {
  r == null ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r);
}
function sr(t) {
  return Array.from(t.childNodes);
}
function ve(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function fr(t, e, { bubbles: r = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: r, cancelable: n });
}
let wt;
function vt(t) {
  wt = t;
}
function je() {
  if (!wt)
    throw new Error("Function called outside component initialization");
  return wt;
}
function Re(t) {
  je().$$.on_mount.push(t);
}
function cr() {
  const t = je();
  return (e, r, { cancelable: n = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const o = fr(
        /** @type {string} */
        e,
        r,
        { cancelable: n }
      );
      return i.slice().forEach((c) => {
        c.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const rt = [], he = [];
let nt = [];
const me = [], ur = /* @__PURE__ */ Promise.resolve();
let zt = !1;
function lr() {
  zt || (zt = !0, ur.then(Be));
}
function Xt(t) {
  nt.push(t);
}
const qt = /* @__PURE__ */ new Set();
let et = 0;
function Be() {
  if (et !== 0)
    return;
  const t = wt;
  do {
    try {
      for (; et < rt.length; ) {
        const e = rt[et];
        et++, vt(e), pr(e.$$);
      }
    } catch (e) {
      throw rt.length = 0, et = 0, e;
    }
    for (vt(null), rt.length = 0, et = 0; he.length; )
      he.pop()();
    for (let e = 0; e < nt.length; e += 1) {
      const r = nt[e];
      qt.has(r) || (qt.add(r), r());
    }
    nt.length = 0;
  } while (rt.length);
  for (; me.length; )
    me.pop()();
  zt = !1, qt.clear(), vt(t);
}
function pr(t) {
  if (t.fragment !== null) {
    t.update(), Ot(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Xt);
  }
}
function dr(t) {
  const e = [], r = [];
  nt.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : r.push(n)), r.forEach((n) => n()), nt = e;
}
const Bt = /* @__PURE__ */ new Set();
let K;
function vr() {
  K = {
    r: 0,
    c: [],
    p: K
    // parent group
  };
}
function hr() {
  K.r || Ot(K.c), K = K.p;
}
function ht(t, e) {
  t && t.i && (Bt.delete(t), t.i(e));
}
function Yt(t, e, r, n) {
  if (t && t.o) {
    if (Bt.has(t))
      return;
    Bt.add(t), K.c.push(() => {
      Bt.delete(t), n && (r && t.d(1), n());
    }), t.o(e);
  } else
    n && n();
}
function mr(t) {
  t && t.c();
}
function Te(t, e, r) {
  const { fragment: n, after_update: i } = t.$$;
  n && n.m(e, r), Xt(() => {
    const o = t.$$.on_mount.map(Pe).filter(De);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : Ot(o), t.$$.on_mount = [];
  }), i.forEach(Xt);
}
function Le(t, e) {
  const r = t.$$;
  r.fragment !== null && (dr(r.after_update), Ot(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function gr(t, e) {
  t.$$.dirty[0] === -1 && (rt.push(t), lr(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Me(t, e, r, n, i, o, c, a = [-1]) {
  const s = wt;
  vt(t);
  const f = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: it,
    not_equal: i,
    bound: de(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: de(),
    dirty: a,
    skip_bound: !1,
    root: e.target || s.$$.root
  };
  c && c(f.root);
  let u = !1;
  if (f.ctx = r ? r(t, e.props || {}, (p, g, ...d) => {
    const x = d.length ? d[0] : g;
    return f.ctx && i(f.ctx[p], f.ctx[p] = x) && (!f.skip_bound && f.bound[p] && f.bound[p](x), u && gr(t, p)), g;
  }) : [], f.update(), u = !0, Ot(f.before_update), f.fragment = n ? n(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const p = sr(e.target);
      f.fragment && f.fragment.l(p), p.forEach(ot);
    } else
      f.fragment && f.fragment.c();
    e.intro && ht(t.$$.fragment), Te(t, e.target, e.anchor), Be();
  }
  vt(s);
}
class We {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Vt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Vt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Le(this, 1), this.$destroy = it;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, r) {
    if (!De(r))
      return it;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(r), () => {
      const i = n.indexOf(r);
      i !== -1 && n.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !nr(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const yr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(yr);
const Ut = (t) => {
  if (typeof t == "string") {
    if (document.querySelector(t))
      return document.querySelector(t);
    throw new Error(`未获取到${t}元素`);
  }
  if (typeof t == "function") {
    if (t())
      return t();
    throw new Error(`未获取到${t}元素`);
  } else
    throw new Error(`未获取到${t}元素`);
}, St = (t, e) => {
  if (!t)
    return !1;
  for (const r in e)
    t.style[r] = e[r];
}, ge = (t) => {
  if (!t)
    return {};
  const e = t.style.position, r = t.style.zIndex, n = t.style.boxShadow;
  return {
    position: e,
    zIndex: r,
    boxShadow: n
  };
};
var S = "top", M = "bottom", W = "right", j = "left", Kt = "auto", _t = [S, M, W, j], at = "start", bt = "end", wr = "clippingParents", Ie = "viewport", pt = "popper", br = "reference", ye = /* @__PURE__ */ _t.reduce(function(t, e) {
  return t.concat([e + "-" + at, e + "-" + bt]);
}, []), Ne = /* @__PURE__ */ [].concat(_t, [Kt]).reduce(function(t, e) {
  return t.concat([e, e + "-" + at, e + "-" + bt]);
}, []), xr = "beforeRead", Or = "read", _r = "afterRead", Er = "beforeMain", $r = "main", Ar = "afterMain", kr = "beforeWrite", Pr = "write", Dr = "afterWrite", Cr = [xr, Or, _r, Er, $r, Ar, kr, Pr, Dr];
function V(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function T(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function Z(t) {
  var e = T(t).Element;
  return t instanceof e || t instanceof Element;
}
function L(t) {
  var e = T(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Qt(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = T(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Sr(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(r) {
    var n = e.styles[r] || {}, i = e.attributes[r] || {}, o = e.elements[r];
    !L(o) || !V(o) || (Object.assign(o.style, n), Object.keys(i).forEach(function(c) {
      var a = i[c];
      a === !1 ? o.removeAttribute(c) : o.setAttribute(c, a === !0 ? "" : a);
    }));
  });
}
function jr(t) {
  var e = t.state, r = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, r.popper), e.styles = r, e.elements.arrow && Object.assign(e.elements.arrow.style, r.arrow), function() {
    Object.keys(e.elements).forEach(function(n) {
      var i = e.elements[n], o = e.attributes[n] || {}, c = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : r[n]), a = c.reduce(function(s, f) {
        return s[f] = "", s;
      }, {});
      !L(i) || !V(i) || (Object.assign(i.style, a), Object.keys(o).forEach(function(s) {
        i.removeAttribute(s);
      }));
    });
  };
}
const Rr = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Sr,
  effect: jr,
  requires: ["computeStyles"]
};
function H(t) {
  return t.split("-")[0];
}
var Q = Math.max, Lt = Math.min, st = Math.round;
function Gt() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function He() {
  return !/^((?!chrome|android).)*safari/i.test(Gt());
}
function ft(t, e, r) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  var n = t.getBoundingClientRect(), i = 1, o = 1;
  e && L(t) && (i = t.offsetWidth > 0 && st(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && st(n.height) / t.offsetHeight || 1);
  var c = Z(t) ? T(t) : window, a = c.visualViewport, s = !He() && r, f = (n.left + (s && a ? a.offsetLeft : 0)) / i, u = (n.top + (s && a ? a.offsetTop : 0)) / o, p = n.width / i, g = n.height / o;
  return {
    width: p,
    height: g,
    top: u,
    right: f + p,
    bottom: u + g,
    left: f,
    x: f,
    y: u
  };
}
function Zt(t) {
  var e = ft(t), r = t.offsetWidth, n = t.offsetHeight;
  return Math.abs(e.width - r) <= 1 && (r = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: r,
    height: n
  };
}
function Ve(t, e) {
  var r = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (r && Qt(r)) {
    var n = e;
    do {
      if (n && t.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function q(t) {
  return T(t).getComputedStyle(t);
}
function Br(t) {
  return ["table", "td", "th"].indexOf(V(t)) >= 0;
}
function z(t) {
  return ((Z(t) ? t.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t.document
  )) || window.document).documentElement;
}
function Mt(t) {
  return V(t) === "html" ? t : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t.parentNode || // DOM Element detected
    (Qt(t) ? t.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    z(t)
  );
}
function we(t) {
  return !L(t) || // https://github.com/popperjs/popper-core/issues/837
  q(t).position === "fixed" ? null : t.offsetParent;
}
function Tr(t) {
  var e = /firefox/i.test(Gt()), r = /Trident/i.test(Gt());
  if (r && L(t)) {
    var n = q(t);
    if (n.position === "fixed")
      return null;
  }
  var i = Mt(t);
  for (Qt(i) && (i = i.host); L(i) && ["html", "body"].indexOf(V(i)) < 0; ) {
    var o = q(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Et(t) {
  for (var e = T(t), r = we(t); r && Br(r) && q(r).position === "static"; )
    r = we(r);
  return r && (V(r) === "html" || V(r) === "body" && q(r).position === "static") ? e : r || Tr(t) || e;
}
function te(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function mt(t, e, r) {
  return Q(t, Lt(e, r));
}
function Lr(t, e, r) {
  var n = mt(t, e, r);
  return n > r ? r : n;
}
function qe() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Fe(t) {
  return Object.assign({}, qe(), t);
}
function ze(t, e) {
  return e.reduce(function(r, n) {
    return r[n] = t, r;
  }, {});
}
var Mr = function(e, r) {
  return e = typeof e == "function" ? e(Object.assign({}, r.rects, {
    placement: r.placement
  })) : e, Fe(typeof e != "number" ? e : ze(e, _t));
};
function Wr(t) {
  var e, r = t.state, n = t.name, i = t.options, o = r.elements.arrow, c = r.modifiersData.popperOffsets, a = H(r.placement), s = te(a), f = [j, W].indexOf(a) >= 0, u = f ? "height" : "width";
  if (!(!o || !c)) {
    var p = Mr(i.padding, r), g = Zt(o), d = s === "y" ? S : j, x = s === "y" ? M : W, m = r.rects.reference[u] + r.rects.reference[s] - c[s] - r.rects.popper[u], w = c[s] - r.rects.reference[s], O = Et(o), v = O ? s === "y" ? O.clientHeight || 0 : O.clientWidth || 0 : 0, y = m / 2 - w / 2, l = p[d], h = v - g[u] - p[x], b = v / 2 - g[u] / 2 + y, _ = mt(l, b, h), k = s;
    r.modifiersData[n] = (e = {}, e[k] = _, e.centerOffset = _ - b, e);
  }
}
function Ir(t) {
  var e = t.state, r = t.options, n = r.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || Ve(e.elements.popper, i) && (e.elements.arrow = i));
}
const Nr = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Wr,
  effect: Ir,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ct(t) {
  return t.split("-")[1];
}
var Hr = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Vr(t, e) {
  var r = t.x, n = t.y, i = e.devicePixelRatio || 1;
  return {
    x: st(r * i) / i || 0,
    y: st(n * i) / i || 0
  };
}
function be(t) {
  var e, r = t.popper, n = t.popperRect, i = t.placement, o = t.variation, c = t.offsets, a = t.position, s = t.gpuAcceleration, f = t.adaptive, u = t.roundOffsets, p = t.isFixed, g = c.x, d = g === void 0 ? 0 : g, x = c.y, m = x === void 0 ? 0 : x, w = typeof u == "function" ? u({
    x: d,
    y: m
  }) : {
    x: d,
    y: m
  };
  d = w.x, m = w.y;
  var O = c.hasOwnProperty("x"), v = c.hasOwnProperty("y"), y = j, l = S, h = window;
  if (f) {
    var b = Et(r), _ = "clientHeight", k = "clientWidth";
    if (b === T(r) && (b = z(r), q(b).position !== "static" && a === "absolute" && (_ = "scrollHeight", k = "scrollWidth")), b = b, i === S || (i === j || i === W) && o === bt) {
      l = M;
      var $ = p && b === h && h.visualViewport ? h.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        b[_]
      );
      m -= $ - n.height, m *= s ? 1 : -1;
    }
    if (i === j || (i === S || i === M) && o === bt) {
      y = W;
      var E = p && b === h && h.visualViewport ? h.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        b[k]
      );
      d -= E - n.width, d *= s ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: a
  }, f && Hr), I = u === !0 ? Vr({
    x: d,
    y: m
  }, T(r)) : {
    x: d,
    y: m
  };
  if (d = I.x, m = I.y, s) {
    var D;
    return Object.assign({}, P, (D = {}, D[l] = v ? "0" : "", D[y] = O ? "0" : "", D.transform = (h.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + m + "px)" : "translate3d(" + d + "px, " + m + "px, 0)", D));
  }
  return Object.assign({}, P, (e = {}, e[l] = v ? m + "px" : "", e[y] = O ? d + "px" : "", e.transform = "", e));
}
function qr(t) {
  var e = t.state, r = t.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, o = r.adaptive, c = o === void 0 ? !0 : o, a = r.roundOffsets, s = a === void 0 ? !0 : a, f = {
    placement: H(e.placement),
    variation: ct(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, be(Object.assign({}, f, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: c,
    roundOffsets: s
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, be(Object.assign({}, f, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const Fr = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: qr,
  data: {}
};
var jt = {
  passive: !0
};
function zr(t) {
  var e = t.state, r = t.instance, n = t.options, i = n.scroll, o = i === void 0 ? !0 : i, c = n.resize, a = c === void 0 ? !0 : c, s = T(e.elements.popper), f = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && f.forEach(function(u) {
    u.addEventListener("scroll", r.update, jt);
  }), a && s.addEventListener("resize", r.update, jt), function() {
    o && f.forEach(function(u) {
      u.removeEventListener("scroll", r.update, jt);
    }), a && s.removeEventListener("resize", r.update, jt);
  };
}
const Xr = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: zr,
  data: {}
};
var Yr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Tt(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return Yr[e];
  });
}
var Ur = {
  start: "end",
  end: "start"
};
function xe(t) {
  return t.replace(/start|end/g, function(e) {
    return Ur[e];
  });
}
function ee(t) {
  var e = T(t), r = e.pageXOffset, n = e.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function re(t) {
  return ft(z(t)).left + ee(t).scrollLeft;
}
function Gr(t, e) {
  var r = T(t), n = z(t), i = r.visualViewport, o = n.clientWidth, c = n.clientHeight, a = 0, s = 0;
  if (i) {
    o = i.width, c = i.height;
    var f = He();
    (f || !f && e === "fixed") && (a = i.offsetLeft, s = i.offsetTop);
  }
  return {
    width: o,
    height: c,
    x: a + re(t),
    y: s
  };
}
function Jr(t) {
  var e, r = z(t), n = ee(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, o = Q(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), c = Q(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), a = -n.scrollLeft + re(t), s = -n.scrollTop;
  return q(i || r).direction === "rtl" && (a += Q(r.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: c,
    x: a,
    y: s
  };
}
function ne(t) {
  var e = q(t), r = e.overflow, n = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Xe(t) {
  return ["html", "body", "#document"].indexOf(V(t)) >= 0 ? t.ownerDocument.body : L(t) && ne(t) ? t : Xe(Mt(t));
}
function gt(t, e) {
  var r;
  e === void 0 && (e = []);
  var n = Xe(t), i = n === ((r = t.ownerDocument) == null ? void 0 : r.body), o = T(n), c = i ? [o].concat(o.visualViewport || [], ne(n) ? n : []) : n, a = e.concat(c);
  return i ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(gt(Mt(c)))
  );
}
function Jt(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function Kr(t, e) {
  var r = ft(t, !1, e === "fixed");
  return r.top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Oe(t, e, r) {
  return e === Ie ? Jt(Gr(t, r)) : Z(e) ? Kr(e, r) : Jt(Jr(z(t)));
}
function Qr(t) {
  var e = gt(Mt(t)), r = ["absolute", "fixed"].indexOf(q(t).position) >= 0, n = r && L(t) ? Et(t) : t;
  return Z(n) ? e.filter(function(i) {
    return Z(i) && Ve(i, n) && V(i) !== "body";
  }) : [];
}
function Zr(t, e, r, n) {
  var i = e === "clippingParents" ? Qr(t) : [].concat(e), o = [].concat(i, [r]), c = o[0], a = o.reduce(function(s, f) {
    var u = Oe(t, f, n);
    return s.top = Q(u.top, s.top), s.right = Lt(u.right, s.right), s.bottom = Lt(u.bottom, s.bottom), s.left = Q(u.left, s.left), s;
  }, Oe(t, c, n));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Ye(t) {
  var e = t.reference, r = t.element, n = t.placement, i = n ? H(n) : null, o = n ? ct(n) : null, c = e.x + e.width / 2 - r.width / 2, a = e.y + e.height / 2 - r.height / 2, s;
  switch (i) {
    case S:
      s = {
        x: c,
        y: e.y - r.height
      };
      break;
    case M:
      s = {
        x: c,
        y: e.y + e.height
      };
      break;
    case W:
      s = {
        x: e.x + e.width,
        y: a
      };
      break;
    case j:
      s = {
        x: e.x - r.width,
        y: a
      };
      break;
    default:
      s = {
        x: e.x,
        y: e.y
      };
  }
  var f = i ? te(i) : null;
  if (f != null) {
    var u = f === "y" ? "height" : "width";
    switch (o) {
      case at:
        s[f] = s[f] - (e[u] / 2 - r[u] / 2);
        break;
      case bt:
        s[f] = s[f] + (e[u] / 2 - r[u] / 2);
        break;
    }
  }
  return s;
}
function xt(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, i = n === void 0 ? t.placement : n, o = r.strategy, c = o === void 0 ? t.strategy : o, a = r.boundary, s = a === void 0 ? wr : a, f = r.rootBoundary, u = f === void 0 ? Ie : f, p = r.elementContext, g = p === void 0 ? pt : p, d = r.altBoundary, x = d === void 0 ? !1 : d, m = r.padding, w = m === void 0 ? 0 : m, O = Fe(typeof w != "number" ? w : ze(w, _t)), v = g === pt ? br : pt, y = t.rects.popper, l = t.elements[x ? v : g], h = Zr(Z(l) ? l : l.contextElement || z(t.elements.popper), s, u, c), b = ft(t.elements.reference), _ = Ye({
    reference: b,
    element: y,
    strategy: "absolute",
    placement: i
  }), k = Jt(Object.assign({}, y, _)), $ = g === pt ? k : b, E = {
    top: h.top - $.top + O.top,
    bottom: $.bottom - h.bottom + O.bottom,
    left: h.left - $.left + O.left,
    right: $.right - h.right + O.right
  }, P = t.modifiersData.offset;
  if (g === pt && P) {
    var I = P[i];
    Object.keys(E).forEach(function(D) {
      var X = [W, M].indexOf(D) >= 0 ? 1 : -1, Y = [S, M].indexOf(D) >= 0 ? "y" : "x";
      E[D] += I[Y] * X;
    });
  }
  return E;
}
function tn(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, i = r.boundary, o = r.rootBoundary, c = r.padding, a = r.flipVariations, s = r.allowedAutoPlacements, f = s === void 0 ? Ne : s, u = ct(n), p = u ? a ? ye : ye.filter(function(x) {
    return ct(x) === u;
  }) : _t, g = p.filter(function(x) {
    return f.indexOf(x) >= 0;
  });
  g.length === 0 && (g = p);
  var d = g.reduce(function(x, m) {
    return x[m] = xt(t, {
      placement: m,
      boundary: i,
      rootBoundary: o,
      padding: c
    })[H(m)], x;
  }, {});
  return Object.keys(d).sort(function(x, m) {
    return d[x] - d[m];
  });
}
function en(t) {
  if (H(t) === Kt)
    return [];
  var e = Tt(t);
  return [xe(t), e, xe(e)];
}
function rn(t) {
  var e = t.state, r = t.options, n = t.name;
  if (!e.modifiersData[n]._skip) {
    for (var i = r.mainAxis, o = i === void 0 ? !0 : i, c = r.altAxis, a = c === void 0 ? !0 : c, s = r.fallbackPlacements, f = r.padding, u = r.boundary, p = r.rootBoundary, g = r.altBoundary, d = r.flipVariations, x = d === void 0 ? !0 : d, m = r.allowedAutoPlacements, w = e.options.placement, O = H(w), v = O === w, y = s || (v || !x ? [Tt(w)] : en(w)), l = [w].concat(y).reduce(function(tt, F) {
      return tt.concat(H(F) === Kt ? tn(e, {
        placement: F,
        boundary: u,
        rootBoundary: p,
        padding: f,
        flipVariations: x,
        allowedAutoPlacements: m
      }) : F);
    }, []), h = e.rects.reference, b = e.rects.popper, _ = /* @__PURE__ */ new Map(), k = !0, $ = l[0], E = 0; E < l.length; E++) {
      var P = l[E], I = H(P), D = ct(P) === at, X = [S, M].indexOf(I) >= 0, Y = X ? "width" : "height", R = xt(e, {
        placement: P,
        boundary: u,
        rootBoundary: p,
        altBoundary: g,
        padding: f
      }), N = X ? D ? W : j : D ? M : S;
      h[Y] > b[Y] && (N = Tt(N));
      var $t = Tt(N), U = [];
      if (o && U.push(R[I] <= 0), a && U.push(R[N] <= 0, R[$t] <= 0), U.every(function(tt) {
        return tt;
      })) {
        $ = P, k = !1;
        break;
      }
      _.set(P, U);
    }
    if (k)
      for (var At = x ? 3 : 1, Wt = function(F) {
        var lt = l.find(function(Pt) {
          var G = _.get(Pt);
          if (G)
            return G.slice(0, F).every(function(It) {
              return It;
            });
        });
        if (lt)
          return $ = lt, "break";
      }, ut = At; ut > 0; ut--) {
        var kt = Wt(ut);
        if (kt === "break")
          break;
      }
    e.placement !== $ && (e.modifiersData[n]._skip = !0, e.placement = $, e.reset = !0);
  }
}
const nn = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: rn,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function _e(t, e, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - r.y,
    right: t.right - e.width + r.x,
    bottom: t.bottom - e.height + r.y,
    left: t.left - e.width - r.x
  };
}
function Ee(t) {
  return [S, W, M, j].some(function(e) {
    return t[e] >= 0;
  });
}
function on(t) {
  var e = t.state, r = t.name, n = e.rects.reference, i = e.rects.popper, o = e.modifiersData.preventOverflow, c = xt(e, {
    elementContext: "reference"
  }), a = xt(e, {
    altBoundary: !0
  }), s = _e(c, n), f = _e(a, i, o), u = Ee(s), p = Ee(f);
  e.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: f,
    isReferenceHidden: u,
    hasPopperEscaped: p
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": p
  });
}
const an = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: on
};
function sn(t, e, r) {
  var n = H(t), i = [j, S].indexOf(n) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, e, {
    placement: t
  })) : r, c = o[0], a = o[1];
  return c = c || 0, a = (a || 0) * i, [j, W].indexOf(n) >= 0 ? {
    x: a,
    y: c
  } : {
    x: c,
    y: a
  };
}
function fn(t) {
  var e = t.state, r = t.options, n = t.name, i = r.offset, o = i === void 0 ? [0, 0] : i, c = Ne.reduce(function(u, p) {
    return u[p] = sn(p, e.rects, o), u;
  }, {}), a = c[e.placement], s = a.x, f = a.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += s, e.modifiersData.popperOffsets.y += f), e.modifiersData[n] = c;
}
const cn = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn
};
function un(t) {
  var e = t.state, r = t.name;
  e.modifiersData[r] = Ye({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const ln = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: un,
  data: {}
};
function pn(t) {
  return t === "x" ? "y" : "x";
}
function dn(t) {
  var e = t.state, r = t.options, n = t.name, i = r.mainAxis, o = i === void 0 ? !0 : i, c = r.altAxis, a = c === void 0 ? !1 : c, s = r.boundary, f = r.rootBoundary, u = r.altBoundary, p = r.padding, g = r.tether, d = g === void 0 ? !0 : g, x = r.tetherOffset, m = x === void 0 ? 0 : x, w = xt(e, {
    boundary: s,
    rootBoundary: f,
    padding: p,
    altBoundary: u
  }), O = H(e.placement), v = ct(e.placement), y = !v, l = te(O), h = pn(l), b = e.modifiersData.popperOffsets, _ = e.rects.reference, k = e.rects.popper, $ = typeof m == "function" ? m(Object.assign({}, e.rects, {
    placement: e.placement
  })) : m, E = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), P = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, I = {
    x: 0,
    y: 0
  };
  if (b) {
    if (o) {
      var D, X = l === "y" ? S : j, Y = l === "y" ? M : W, R = l === "y" ? "height" : "width", N = b[l], $t = N + w[X], U = N - w[Y], At = d ? -k[R] / 2 : 0, Wt = v === at ? _[R] : k[R], ut = v === at ? -k[R] : -_[R], kt = e.elements.arrow, tt = d && kt ? Zt(kt) : {
        width: 0,
        height: 0
      }, F = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : qe(), lt = F[X], Pt = F[Y], G = mt(0, _[R], tt[R]), It = y ? _[R] / 2 - At - G - lt - E.mainAxis : Wt - G - lt - E.mainAxis, Ue = y ? -_[R] / 2 + At + G + Pt + E.mainAxis : ut + G + Pt + E.mainAxis, Nt = e.elements.arrow && Et(e.elements.arrow), Ge = Nt ? l === "y" ? Nt.clientTop || 0 : Nt.clientLeft || 0 : 0, ie = (D = P == null ? void 0 : P[l]) != null ? D : 0, Je = N + It - ie - Ge, Ke = N + Ue - ie, oe = mt(d ? Lt($t, Je) : $t, N, d ? Q(U, Ke) : U);
      b[l] = oe, I[l] = oe - N;
    }
    if (a) {
      var ae, Qe = l === "x" ? S : j, Ze = l === "x" ? M : W, J = b[h], Dt = h === "y" ? "height" : "width", se = J + w[Qe], fe = J - w[Ze], Ht = [S, j].indexOf(O) !== -1, ce = (ae = P == null ? void 0 : P[h]) != null ? ae : 0, ue = Ht ? se : J - _[Dt] - k[Dt] - ce + E.altAxis, le = Ht ? J + _[Dt] + k[Dt] - ce - E.altAxis : fe, pe = d && Ht ? Lr(ue, J, le) : mt(d ? ue : se, J, d ? le : fe);
      b[h] = pe, I[h] = pe - J;
    }
    e.modifiersData[n] = I;
  }
}
const vn = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: dn,
  requiresIfExists: ["offset"]
};
function hn(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function mn(t) {
  return t === T(t) || !L(t) ? ee(t) : hn(t);
}
function gn(t) {
  var e = t.getBoundingClientRect(), r = st(e.width) / t.offsetWidth || 1, n = st(e.height) / t.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function yn(t, e, r) {
  r === void 0 && (r = !1);
  var n = L(e), i = L(e) && gn(e), o = z(e), c = ft(t, i, r), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((V(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ne(o)) && (a = mn(e)), L(e) ? (s = ft(e, !0), s.x += e.clientLeft, s.y += e.clientTop) : o && (s.x = re(o))), {
    x: c.left + a.scrollLeft - s.x,
    y: c.top + a.scrollTop - s.y,
    width: c.width,
    height: c.height
  };
}
function wn(t) {
  var e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  t.forEach(function(o) {
    e.set(o.name, o);
  });
  function i(o) {
    r.add(o.name);
    var c = [].concat(o.requires || [], o.requiresIfExists || []);
    c.forEach(function(a) {
      if (!r.has(a)) {
        var s = e.get(a);
        s && i(s);
      }
    }), n.push(o);
  }
  return t.forEach(function(o) {
    r.has(o.name) || i(o);
  }), n;
}
function bn(t) {
  var e = wn(t);
  return Cr.reduce(function(r, n) {
    return r.concat(e.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function xn(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(r) {
      Promise.resolve().then(function() {
        e = void 0, r(t());
      });
    })), e;
  };
}
function On(t) {
  var e = t.reduce(function(r, n) {
    var i = r[n.name];
    return r[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}
var $e = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ae() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return !e.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function _n(t) {
  t === void 0 && (t = {});
  var e = t, r = e.defaultModifiers, n = r === void 0 ? [] : r, i = e.defaultOptions, o = i === void 0 ? $e : i;
  return function(a, s, f) {
    f === void 0 && (f = o);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, $e, o),
      modifiersData: {},
      elements: {
        reference: a,
        popper: s
      },
      attributes: {},
      styles: {}
    }, p = [], g = !1, d = {
      state: u,
      setOptions: function(O) {
        var v = typeof O == "function" ? O(u.options) : O;
        m(), u.options = Object.assign({}, o, u.options, v), u.scrollParents = {
          reference: Z(a) ? gt(a) : a.contextElement ? gt(a.contextElement) : [],
          popper: gt(s)
        };
        var y = bn(On([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = y.filter(function(l) {
          return l.enabled;
        }), x(), d.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!g) {
          var O = u.elements, v = O.reference, y = O.popper;
          if (Ae(v, y)) {
            u.rects = {
              reference: yn(v, Et(y), u.options.strategy === "fixed"),
              popper: Zt(y)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(E) {
              return u.modifiersData[E.name] = Object.assign({}, E.data);
            });
            for (var l = 0; l < u.orderedModifiers.length; l++) {
              if (u.reset === !0) {
                u.reset = !1, l = -1;
                continue;
              }
              var h = u.orderedModifiers[l], b = h.fn, _ = h.options, k = _ === void 0 ? {} : _, $ = h.name;
              typeof b == "function" && (u = b({
                state: u,
                options: k,
                name: $,
                instance: d
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: xn(function() {
        return new Promise(function(w) {
          d.forceUpdate(), w(u);
        });
      }),
      destroy: function() {
        m(), g = !0;
      }
    };
    if (!Ae(a, s))
      return d;
    d.setOptions(f).then(function(w) {
      !g && f.onFirstUpdate && f.onFirstUpdate(w);
    });
    function x() {
      u.orderedModifiers.forEach(function(w) {
        var O = w.name, v = w.options, y = v === void 0 ? {} : v, l = w.effect;
        if (typeof l == "function") {
          var h = l({
            state: u,
            name: O,
            instance: d,
            options: y
          }), b = function() {
          };
          p.push(h || b);
        }
      });
    }
    function m() {
      p.forEach(function(w) {
        return w();
      }), p = [];
    }
    return d;
  };
}
var En = [Xr, ln, Fr, Rr, cn, nn, vn, Nr, an], $n = /* @__PURE__ */ _n({
  defaultModifiers: En
});
const Rt = 100;
function An(t) {
  Se(t, "svelte-9kkx30", '.web-guide__tip.svelte-9kkx30{background-color:#fff;z-index:9999999;border-radius:10px;max-width:340px}#arrow.svelte-9kkx30,#arrow.svelte-9kkx30::before{position:absolute;width:20px;height:20px;background:inherit}#arrow.svelte-9kkx30{visibility:hidden}#arrow.svelte-9kkx30::before{visibility:visible;content:"";transform:rotate(45deg)}');
}
function kn(t) {
  let e, r;
  return {
    c() {
      e = B("img"), rr(e.src, r = /*piglogo*/
      t[1]) || A(e, "src", r), A(e, "class", "w-80px"), A(e, "alt", "");
    },
    m(n, i) {
      yt(n, e, i);
    },
    p: it,
    d(n) {
      n && ot(e);
    }
  };
}
function Pn(t) {
  let e, r, n, i, o, c, a = (
    /*optItem*/
    t[0].popover.title + ""
  ), s, f, u, p = (
    /*optItem*/
    t[0].popover.description + ""
  ), g, d, x, m, w, O, v, y, l = (
    /*piglogo*/
    t[1] && kn(t)
  );
  return {
    c() {
      e = B("div"), r = B("div"), n = B("div"), l && l.c(), i = dt(), o = B("div"), c = B("h2"), s = Ft(a), f = dt(), u = B("p"), g = Ft(p), d = dt(), x = B("div"), m = B("button"), m.textContent = "结束引导", w = dt(), O = B("div"), A(c, "class", "font-700 text-18px leading-24px text-hex-000"), A(u, "class", "text-14px mt-8px tracking-2px leading-20px text-hex-666 max-h-200px overflow-y-auto"), A(o, "class", "pl-10px"), A(n, "class", "tip__wapper flex items-start"), A(m, "class", "text-12px text-hex-888 cursor-pointer pt-10px"), A(x, "class", "flex justify-end"), A(r, "class", "p-15px"), A(O, "id", "arrow"), A(O, "data-popper-arrow", ""), A(O, "class", "svelte-9kkx30"), A(e, "class", "web-guide__tip svelte-9kkx30"), A(e, "id", "web-guide__tooltip"), A(e, "role", "tooltip");
    },
    m(h, b) {
      yt(h, e, b), C(e, r), C(r, n), l && l.m(n, null), C(n, i), C(n, o), C(o, c), C(c, s), C(o, f), C(o, u), C(u, g), C(r, d), C(r, x), C(x, m), C(e, w), C(e, O), v || (y = ar(
        m,
        "click",
        /*endHandle*/
        t[2]
      ), v = !0);
    },
    p(h, [b]) {
      /*piglogo*/
      h[1] && l.p(h, b), b & /*optItem*/
      1 && a !== (a = /*optItem*/
      h[0].popover.title + "") && ve(s, a), b & /*optItem*/
      1 && p !== (p = /*optItem*/
      h[0].popover.description + "") && ve(g, p);
    },
    i: it,
    o: it,
    d(h) {
      h && ot(e), l && l.d(), v = !1, y();
    }
  };
}
function Dn(t, e, r) {
  const n = cr();
  let { optItem: i } = e, { settings: o } = e;
  const c = o.logo, a = async (f) => {
    const u = Ut(f.element), p = document.querySelector("#web-guide__tooltip");
    $n(u, p, {
      placement: "top",
      strategy: "fixed",
      modifiers: [
        {
          name: "offset",
          options: { offset: [15, 15] }
        }
      ]
    });
  };
  a(i), Re(() => {
    a(i);
  });
  const s = () => {
    n("guideFinish");
  };
  return t.$$set = (f) => {
    "optItem" in f && r(0, i = f.optItem), "settings" in f && r(3, o = f.settings);
  }, t.$$.update = () => {
    t.$$.dirty & /*optItem*/
    1 && a(i);
  }, [i, c, s, o];
}
class Cn extends We {
  constructor(e) {
    super(), Me(this, e, Dn, Pn, Ce, { optItem: 0, settings: 3 }, An);
  }
}
function Sn(t) {
  Se(t, "svelte-tgr6dn", ".web-guide__overlay.svelte-tgr6dn{inset:0px;position:fixed;cursor:pointer;box-sizing:content-box;z-index:999990;opacity:0;transition:all 0.3s ease-out}");
}
function ke(t) {
  let e, r, n, i;
  return n = new Cn({
    props: {
      optItem: (
        /*stepArr*/
        t[3][
          /*step*/
          t[2]
        ]
      ),
      settings: (
        /*settings*/
        t[0]
      )
    }
  }), n.$on(
    "guideFinish",
    /*isFinish*/
    t[4]
  ), {
    c() {
      e = B("div"), r = dt(), mr(n.$$.fragment), A(e, "class", "web-guide__overlay svelte-tgr6dn");
    },
    m(o, c) {
      yt(o, e, c), yt(o, r, c), Te(n, o, c), i = !0;
    },
    p(o, c) {
      const a = {};
      c & /*step*/
      4 && (a.optItem = /*stepArr*/
      o[3][
        /*step*/
        o[2]
      ]), c & /*settings*/
      1 && (a.settings = /*settings*/
      o[0]), n.$set(a);
    },
    i(o) {
      i || (ht(n.$$.fragment, o), i = !0);
    },
    o(o) {
      Yt(n.$$.fragment, o), i = !1;
    },
    d(o) {
      o && (ot(e), ot(r)), Le(n, o);
    }
  };
}
function jn(t) {
  let e, r, n = (
    /*showGuide*/
    t[1] && ke(t)
  );
  return {
    c() {
      e = B("div"), n && n.c(), A(e, "id", "web-guide");
    },
    m(i, o) {
      yt(i, e, o), n && n.m(e, null), r = !0;
    },
    p(i, [o]) {
      /*showGuide*/
      i[1] ? n ? (n.p(i, o), o & /*showGuide*/
      2 && ht(n, 1)) : (n = ke(i), n.c(), ht(n, 1), n.m(e, null)) : n && (vr(), Yt(n, 1, 1, () => {
        n = null;
      }), hr());
    },
    i(i) {
      r || (ht(n), r = !0);
    },
    o(i) {
      Yt(n), r = !1;
    },
    d(i) {
      i && ot(e), n && n.d();
    }
  };
}
function Rn(t, e, r) {
  let { settings: n } = e;
  const i = n.stepArr;
  let o = !1, c = !1, a = !1, s = n.immediate, f = 0, u = {};
  async function p() {
    let v = i[f];
    return Ut(v.element);
  }
  const g = async () => {
    var v;
    r(1, o = !0);
    try {
      const y = await p(), { width: l } = y.getBoundingClientRect();
      u = ge(y), St(y, {
        position: "relative",
        zIndex: "9999998",
        width: l + "px",
        boxShadow: "rgba(33, 33, 33, 0.8) 0px 0px 1px 2px, rgba(33, 33, 33, 0.5) 0px 0px 0px 5000px"
      });
      const h = async () => {
        var b, _;
        if (St(y, u), y.removeEventListener((b = i[f]) == null ? void 0 : b.trigger, () => {
        }), !d())
          return !1;
        r(1, o = !1), setTimeout(
          async () => {
            u = {}, await g();
          },
          ((_ = i[f]) == null ? void 0 : _.delayed) ?? Rt
        );
      };
      n.immediate && y.addEventListener((v = i[f]) == null ? void 0 : v.trigger, h);
    } catch {
      r(1, o = !1), r(2, f = 0), x();
    }
  }, d = () => o ? f >= i.length - 1 ? (m(), !1) : (r(2, f = f + 1), !0) : !1, x = () => {
    const v = document.querySelectorAll("#web-guide");
    v && v.forEach((y, l) => {
      l >= 1 && y.remove();
    });
  }, m = async () => {
    r(1, o = !1), c = !0;
    const v = await p();
    St(v, u), r(2, f = 0), x();
  };
  s && Re(() => {
    setTimeout(
      async () => {
        await g();
      },
      i[f].delayed ?? Rt
    );
  });
  async function w(v) {
    if (!a)
      return !1;
    if (!v.id || !v.status)
      return console.warn("id or status is not exist"), !1;
    if (c)
      return !1;
    r(1, o = !1);
    const y = i.findIndex((h) => h.id === v.id);
    if (v.status === "finish")
      return m(), !1;
    if (v.status === "pause")
      return !1;
    const l = await p();
    if (y > 0) {
      const h = Ut(i[y - 1].element);
      St(h, u);
    }
    r(2, f = y), u = ge(l), setTimeout(
      async () => {
        await g();
      },
      i[f].delayed ?? Rt
    );
  }
  function O() {
    if (c)
      return !1;
    r(1, o = !1), r(2, f = 0), a = !0, setTimeout(
      async () => {
        await g();
      },
      i[f].delayed ?? Rt
    );
  }
  return console.info("v0.0.7"), t.$$set = (v) => {
    "settings" in v && r(0, n = v.settings);
  }, [n, o, f, i, m, w, O];
}
class Tn extends We {
  constructor(e) {
    super(), Me(this, e, Rn, jn, Ce, { settings: 0, next: 5, start: 6 }, Sn);
  }
  get next() {
    return this.$$.ctx[5];
  }
  get start() {
    return this.$$.ctx[6];
  }
}
const Ln = (t) => t;
export {
  Tn as default,
  Ln as defineConfig
};
