var tr = Object.defineProperty;
var er = (t, e, r) => e in t ? tr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var It = (t, e, r) => (er(t, typeof e != "symbol" ? e + "" : e, r), r);
function ot() {
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
  const n = or(t);
  if (!n.getElementById(e)) {
    const o = B("style");
    o.id = e, o.textContent = r, ir(n, o);
  }
}
function or(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function ir(t, e) {
  return C(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function yt(t, e, r) {
  t.insertBefore(e, r || null);
}
function it(t) {
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
    const o = t.$$.callbacks[e];
    if (o) {
      const i = fr(
        /** @type {string} */
        e,
        r,
        { cancelable: n }
      );
      return o.slice().forEach((f) => {
        f.call(t, i);
      }), !i.defaultPrevented;
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
const Vt = /* @__PURE__ */ new Set();
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
      Vt.has(r) || (Vt.add(r), r());
    }
    nt.length = 0;
  } while (rt.length);
  for (; me.length; )
    me.pop()();
  zt = !1, Vt.clear(), vt(t);
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
const Rt = /* @__PURE__ */ new Set();
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
  t && t.i && (Rt.delete(t), t.i(e));
}
function Yt(t, e, r, n) {
  if (t && t.o) {
    if (Rt.has(t))
      return;
    Rt.add(t), K.c.push(() => {
      Rt.delete(t), n && (r && t.d(1), n());
    }), t.o(e);
  } else
    n && n();
}
function mr(t) {
  t && t.c();
}
function Te(t, e, r) {
  const { fragment: n, after_update: o } = t.$$;
  n && n.m(e, r), Xt(() => {
    const i = t.$$.on_mount.map(Pe).filter(De);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : Ot(i), t.$$.on_mount = [];
  }), o.forEach(Xt);
}
function Le(t, e) {
  const r = t.$$;
  r.fragment !== null && (dr(r.after_update), Ot(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function gr(t, e) {
  t.$$.dirty[0] === -1 && (rt.push(t), lr(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Me(t, e, r, n, o, i, f, s = [-1]) {
  const a = wt;
  vt(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: ot,
    not_equal: o,
    bound: de(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: de(),
    dirty: s,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  f && f(c.root);
  let u = !1;
  if (c.ctx = r ? r(t, e.props || {}, (p, w, ...d) => {
    const y = d.length ? d[0] : w;
    return c.ctx && o(c.ctx[p], c.ctx[p] = y) && (!c.skip_bound && c.bound[p] && c.bound[p](y), u && gr(t, p)), w;
  }) : [], c.update(), u = !0, Ot(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const p = sr(e.target);
      c.fragment && c.fragment.l(p), p.forEach(it);
    } else
      c.fragment && c.fragment.c();
    e.intro && ht(t.$$.fragment), Te(t, e.target, e.anchor), Be();
  }
  vt(a);
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
    It(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    It(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Le(this, 1), this.$destroy = ot;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, r) {
    if (!De(r))
      return ot;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(r), () => {
      const o = n.indexOf(r);
      o !== -1 && n.splice(o, 1);
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
var S = "top", M = "bottom", W = "right", j = "left", Kt = "auto", _t = [S, M, W, j], at = "start", bt = "end", wr = "clippingParents", Ne = "viewport", pt = "popper", br = "reference", ye = /* @__PURE__ */ _t.reduce(function(t, e) {
  return t.concat([e + "-" + at, e + "-" + bt]);
}, []), He = /* @__PURE__ */ [].concat(_t, [Kt]).reduce(function(t, e) {
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
    var n = e.styles[r] || {}, o = e.attributes[r] || {}, i = e.elements[r];
    !L(i) || !V(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(f) {
      var s = o[f];
      s === !1 ? i.removeAttribute(f) : i.setAttribute(f, s === !0 ? "" : s);
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
      var o = e.elements[n], i = e.attributes[n] || {}, f = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : r[n]), s = f.reduce(function(a, c) {
        return a[c] = "", a;
      }, {});
      !L(o) || !V(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(a) {
        o.removeAttribute(a);
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
function I(t) {
  return t.split("-")[0];
}
var Q = Math.max, Tt = Math.min, st = Math.round;
function Gt() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function Ie() {
  return !/^((?!chrome|android).)*safari/i.test(Gt());
}
function ft(t, e, r) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  var n = t.getBoundingClientRect(), o = 1, i = 1;
  e && L(t) && (o = t.offsetWidth > 0 && st(n.width) / t.offsetWidth || 1, i = t.offsetHeight > 0 && st(n.height) / t.offsetHeight || 1);
  var f = Z(t) ? T(t) : window, s = f.visualViewport, a = !Ie() && r, c = (n.left + (a && s ? s.offsetLeft : 0)) / o, u = (n.top + (a && s ? s.offsetTop : 0)) / i, p = n.width / o, w = n.height / i;
  return {
    width: p,
    height: w,
    top: u,
    right: c + p,
    bottom: u + w,
    left: c,
    x: c,
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
function Lt(t) {
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
  var o = Lt(t);
  for (Qt(o) && (o = o.host); L(o) && ["html", "body"].indexOf(V(o)) < 0; ) {
    var i = q(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || e && i.willChange === "filter" || e && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
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
  return Q(t, Tt(e, r));
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
  var e, r = t.state, n = t.name, o = t.options, i = r.elements.arrow, f = r.modifiersData.popperOffsets, s = I(r.placement), a = te(s), c = [j, W].indexOf(s) >= 0, u = c ? "height" : "width";
  if (!(!i || !f)) {
    var p = Mr(o.padding, r), w = Zt(i), d = a === "y" ? S : j, y = a === "y" ? M : W, g = r.rects.reference[u] + r.rects.reference[a] - f[a] - r.rects.popper[u], l = f[a] - r.rects.reference[a], h = Et(i), x = h ? a === "y" ? h.clientHeight || 0 : h.clientWidth || 0 : 0, O = g / 2 - l / 2, v = p[d], m = x - w[u] - p[y], b = x / 2 - w[u] / 2 + O, _ = mt(v, b, m), k = a;
    r.modifiersData[n] = (e = {}, e[k] = _, e.centerOffset = _ - b, e);
  }
}
function Nr(t) {
  var e = t.state, r = t.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = e.elements.popper.querySelector(o), !o) || Ve(e.elements.popper, o) && (e.elements.arrow = o));
}
const Hr = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Wr,
  effect: Nr,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ct(t) {
  return t.split("-")[1];
}
var Ir = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Vr(t, e) {
  var r = t.x, n = t.y, o = e.devicePixelRatio || 1;
  return {
    x: st(r * o) / o || 0,
    y: st(n * o) / o || 0
  };
}
function be(t) {
  var e, r = t.popper, n = t.popperRect, o = t.placement, i = t.variation, f = t.offsets, s = t.position, a = t.gpuAcceleration, c = t.adaptive, u = t.roundOffsets, p = t.isFixed, w = f.x, d = w === void 0 ? 0 : w, y = f.y, g = y === void 0 ? 0 : y, l = typeof u == "function" ? u({
    x: d,
    y: g
  }) : {
    x: d,
    y: g
  };
  d = l.x, g = l.y;
  var h = f.hasOwnProperty("x"), x = f.hasOwnProperty("y"), O = j, v = S, m = window;
  if (c) {
    var b = Et(r), _ = "clientHeight", k = "clientWidth";
    if (b === T(r) && (b = z(r), q(b).position !== "static" && s === "absolute" && (_ = "scrollHeight", k = "scrollWidth")), b = b, o === S || (o === j || o === W) && i === bt) {
      v = M;
      var $ = p && b === m && m.visualViewport ? m.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        b[_]
      );
      g -= $ - n.height, g *= a ? 1 : -1;
    }
    if (o === j || (o === S || o === M) && i === bt) {
      O = W;
      var E = p && b === m && m.visualViewport ? m.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        b[k]
      );
      d -= E - n.width, d *= a ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: s
  }, c && Ir), N = u === !0 ? Vr({
    x: d,
    y: g
  }, T(r)) : {
    x: d,
    y: g
  };
  if (d = N.x, g = N.y, a) {
    var D;
    return Object.assign({}, P, (D = {}, D[v] = x ? "0" : "", D[O] = h ? "0" : "", D.transform = (m.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + g + "px)" : "translate3d(" + d + "px, " + g + "px, 0)", D));
  }
  return Object.assign({}, P, (e = {}, e[v] = x ? g + "px" : "", e[O] = h ? d + "px" : "", e.transform = "", e));
}
function qr(t) {
  var e = t.state, r = t.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, f = i === void 0 ? !0 : i, s = r.roundOffsets, a = s === void 0 ? !0 : s, c = {
    placement: I(e.placement),
    variation: ct(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: o,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, be(Object.assign({}, c, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: f,
    roundOffsets: a
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, be(Object.assign({}, c, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
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
  var e = t.state, r = t.instance, n = t.options, o = n.scroll, i = o === void 0 ? !0 : o, f = n.resize, s = f === void 0 ? !0 : f, a = T(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return i && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, jt);
  }), s && a.addEventListener("resize", r.update, jt), function() {
    i && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, jt);
    }), s && a.removeEventListener("resize", r.update, jt);
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
function Bt(t) {
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
  var r = T(t), n = z(t), o = r.visualViewport, i = n.clientWidth, f = n.clientHeight, s = 0, a = 0;
  if (o) {
    i = o.width, f = o.height;
    var c = Ie();
    (c || !c && e === "fixed") && (s = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: f,
    x: s + re(t),
    y: a
  };
}
function Jr(t) {
  var e, r = z(t), n = ee(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, i = Q(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), f = Q(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + re(t), a = -n.scrollTop;
  return q(o || r).direction === "rtl" && (s += Q(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: f,
    x: s,
    y: a
  };
}
function ne(t) {
  var e = q(t), r = e.overflow, n = e.overflowX, o = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function Xe(t) {
  return ["html", "body", "#document"].indexOf(V(t)) >= 0 ? t.ownerDocument.body : L(t) && ne(t) ? t : Xe(Lt(t));
}
function gt(t, e) {
  var r;
  e === void 0 && (e = []);
  var n = Xe(t), o = n === ((r = t.ownerDocument) == null ? void 0 : r.body), i = T(n), f = o ? [i].concat(i.visualViewport || [], ne(n) ? n : []) : n, s = e.concat(f);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(gt(Lt(f)))
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
  return e === Ne ? Jt(Gr(t, r)) : Z(e) ? Kr(e, r) : Jt(Jr(z(t)));
}
function Qr(t) {
  var e = gt(Lt(t)), r = ["absolute", "fixed"].indexOf(q(t).position) >= 0, n = r && L(t) ? Et(t) : t;
  return Z(n) ? e.filter(function(o) {
    return Z(o) && Ve(o, n) && V(o) !== "body";
  }) : [];
}
function Zr(t, e, r, n) {
  var o = e === "clippingParents" ? Qr(t) : [].concat(e), i = [].concat(o, [r]), f = i[0], s = i.reduce(function(a, c) {
    var u = Oe(t, c, n);
    return a.top = Q(u.top, a.top), a.right = Tt(u.right, a.right), a.bottom = Tt(u.bottom, a.bottom), a.left = Q(u.left, a.left), a;
  }, Oe(t, f, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Ye(t) {
  var e = t.reference, r = t.element, n = t.placement, o = n ? I(n) : null, i = n ? ct(n) : null, f = e.x + e.width / 2 - r.width / 2, s = e.y + e.height / 2 - r.height / 2, a;
  switch (o) {
    case S:
      a = {
        x: f,
        y: e.y - r.height
      };
      break;
    case M:
      a = {
        x: f,
        y: e.y + e.height
      };
      break;
    case W:
      a = {
        x: e.x + e.width,
        y: s
      };
      break;
    case j:
      a = {
        x: e.x - r.width,
        y: s
      };
      break;
    default:
      a = {
        x: e.x,
        y: e.y
      };
  }
  var c = o ? te(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (i) {
      case at:
        a[c] = a[c] - (e[u] / 2 - r[u] / 2);
        break;
      case bt:
        a[c] = a[c] + (e[u] / 2 - r[u] / 2);
        break;
    }
  }
  return a;
}
function xt(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, o = n === void 0 ? t.placement : n, i = r.strategy, f = i === void 0 ? t.strategy : i, s = r.boundary, a = s === void 0 ? wr : s, c = r.rootBoundary, u = c === void 0 ? Ne : c, p = r.elementContext, w = p === void 0 ? pt : p, d = r.altBoundary, y = d === void 0 ? !1 : d, g = r.padding, l = g === void 0 ? 0 : g, h = Fe(typeof l != "number" ? l : ze(l, _t)), x = w === pt ? br : pt, O = t.rects.popper, v = t.elements[y ? x : w], m = Zr(Z(v) ? v : v.contextElement || z(t.elements.popper), a, u, f), b = ft(t.elements.reference), _ = Ye({
    reference: b,
    element: O,
    strategy: "absolute",
    placement: o
  }), k = Jt(Object.assign({}, O, _)), $ = w === pt ? k : b, E = {
    top: m.top - $.top + h.top,
    bottom: $.bottom - m.bottom + h.bottom,
    left: m.left - $.left + h.left,
    right: $.right - m.right + h.right
  }, P = t.modifiersData.offset;
  if (w === pt && P) {
    var N = P[o];
    Object.keys(E).forEach(function(D) {
      var X = [W, M].indexOf(D) >= 0 ? 1 : -1, Y = [S, M].indexOf(D) >= 0 ? "y" : "x";
      E[D] += N[Y] * X;
    });
  }
  return E;
}
function tn(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, o = r.boundary, i = r.rootBoundary, f = r.padding, s = r.flipVariations, a = r.allowedAutoPlacements, c = a === void 0 ? He : a, u = ct(n), p = u ? s ? ye : ye.filter(function(y) {
    return ct(y) === u;
  }) : _t, w = p.filter(function(y) {
    return c.indexOf(y) >= 0;
  });
  w.length === 0 && (w = p);
  var d = w.reduce(function(y, g) {
    return y[g] = xt(t, {
      placement: g,
      boundary: o,
      rootBoundary: i,
      padding: f
    })[I(g)], y;
  }, {});
  return Object.keys(d).sort(function(y, g) {
    return d[y] - d[g];
  });
}
function en(t) {
  if (I(t) === Kt)
    return [];
  var e = Bt(t);
  return [xe(t), e, xe(e)];
}
function rn(t) {
  var e = t.state, r = t.options, n = t.name;
  if (!e.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, f = r.altAxis, s = f === void 0 ? !0 : f, a = r.fallbackPlacements, c = r.padding, u = r.boundary, p = r.rootBoundary, w = r.altBoundary, d = r.flipVariations, y = d === void 0 ? !0 : d, g = r.allowedAutoPlacements, l = e.options.placement, h = I(l), x = h === l, O = a || (x || !y ? [Bt(l)] : en(l)), v = [l].concat(O).reduce(function(tt, F) {
      return tt.concat(I(F) === Kt ? tn(e, {
        placement: F,
        boundary: u,
        rootBoundary: p,
        padding: c,
        flipVariations: y,
        allowedAutoPlacements: g
      }) : F);
    }, []), m = e.rects.reference, b = e.rects.popper, _ = /* @__PURE__ */ new Map(), k = !0, $ = v[0], E = 0; E < v.length; E++) {
      var P = v[E], N = I(P), D = ct(P) === at, X = [S, M].indexOf(N) >= 0, Y = X ? "width" : "height", R = xt(e, {
        placement: P,
        boundary: u,
        rootBoundary: p,
        altBoundary: w,
        padding: c
      }), H = X ? D ? W : j : D ? M : S;
      m[Y] > b[Y] && (H = Bt(H));
      var $t = Bt(H), U = [];
      if (i && U.push(R[N] <= 0), s && U.push(R[H] <= 0, R[$t] <= 0), U.every(function(tt) {
        return tt;
      })) {
        $ = P, k = !1;
        break;
      }
      _.set(P, U);
    }
    if (k)
      for (var At = y ? 3 : 1, Mt = function(F) {
        var lt = v.find(function(Pt) {
          var G = _.get(Pt);
          if (G)
            return G.slice(0, F).every(function(Wt) {
              return Wt;
            });
        });
        if (lt)
          return $ = lt, "break";
      }, ut = At; ut > 0; ut--) {
        var kt = Mt(ut);
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
  var e = t.state, r = t.name, n = e.rects.reference, o = e.rects.popper, i = e.modifiersData.preventOverflow, f = xt(e, {
    elementContext: "reference"
  }), s = xt(e, {
    altBoundary: !0
  }), a = _e(f, n), c = _e(s, o, i), u = Ee(a), p = Ee(c);
  e.modifiersData[r] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: c,
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
  var n = I(t), o = [j, S].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, e, {
    placement: t
  })) : r, f = i[0], s = i[1];
  return f = f || 0, s = (s || 0) * o, [j, W].indexOf(n) >= 0 ? {
    x: s,
    y: f
  } : {
    x: f,
    y: s
  };
}
function fn(t) {
  var e = t.state, r = t.options, n = t.name, o = r.offset, i = o === void 0 ? [0, 0] : o, f = He.reduce(function(u, p) {
    return u[p] = sn(p, e.rects, i), u;
  }, {}), s = f[e.placement], a = s.x, c = s.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += a, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = f;
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
  var e = t.state, r = t.options, n = t.name, o = r.mainAxis, i = o === void 0 ? !0 : o, f = r.altAxis, s = f === void 0 ? !1 : f, a = r.boundary, c = r.rootBoundary, u = r.altBoundary, p = r.padding, w = r.tether, d = w === void 0 ? !0 : w, y = r.tetherOffset, g = y === void 0 ? 0 : y, l = xt(e, {
    boundary: a,
    rootBoundary: c,
    padding: p,
    altBoundary: u
  }), h = I(e.placement), x = ct(e.placement), O = !x, v = te(h), m = pn(v), b = e.modifiersData.popperOffsets, _ = e.rects.reference, k = e.rects.popper, $ = typeof g == "function" ? g(Object.assign({}, e.rects, {
    placement: e.placement
  })) : g, E = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), P = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, N = {
    x: 0,
    y: 0
  };
  if (b) {
    if (i) {
      var D, X = v === "y" ? S : j, Y = v === "y" ? M : W, R = v === "y" ? "height" : "width", H = b[v], $t = H + l[X], U = H - l[Y], At = d ? -k[R] / 2 : 0, Mt = x === at ? _[R] : k[R], ut = x === at ? -k[R] : -_[R], kt = e.elements.arrow, tt = d && kt ? Zt(kt) : {
        width: 0,
        height: 0
      }, F = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : qe(), lt = F[X], Pt = F[Y], G = mt(0, _[R], tt[R]), Wt = O ? _[R] / 2 - At - G - lt - E.mainAxis : Mt - G - lt - E.mainAxis, Ue = O ? -_[R] / 2 + At + G + Pt + E.mainAxis : ut + G + Pt + E.mainAxis, Nt = e.elements.arrow && Et(e.elements.arrow), Ge = Nt ? v === "y" ? Nt.clientTop || 0 : Nt.clientLeft || 0 : 0, oe = (D = P == null ? void 0 : P[v]) != null ? D : 0, Je = H + Wt - oe - Ge, Ke = H + Ue - oe, ie = mt(d ? Tt($t, Je) : $t, H, d ? Q(U, Ke) : U);
      b[v] = ie, N[v] = ie - H;
    }
    if (s) {
      var ae, Qe = v === "x" ? S : j, Ze = v === "x" ? M : W, J = b[m], Dt = m === "y" ? "height" : "width", se = J + l[Qe], fe = J - l[Ze], Ht = [S, j].indexOf(h) !== -1, ce = (ae = P == null ? void 0 : P[m]) != null ? ae : 0, ue = Ht ? se : J - _[Dt] - k[Dt] - ce + E.altAxis, le = Ht ? J + _[Dt] + k[Dt] - ce - E.altAxis : fe, pe = d && Ht ? Lr(ue, J, le) : mt(d ? ue : se, J, d ? le : fe);
      b[m] = pe, N[m] = pe - J;
    }
    e.modifiersData[n] = N;
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
  var n = L(e), o = L(e) && gn(e), i = z(e), f = ft(t, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((V(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ne(i)) && (s = mn(e)), L(e) ? (a = ft(e, !0), a.x += e.clientLeft, a.y += e.clientTop) : i && (a.x = re(i))), {
    x: f.left + s.scrollLeft - a.x,
    y: f.top + s.scrollTop - a.y,
    width: f.width,
    height: f.height
  };
}
function wn(t) {
  var e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  t.forEach(function(i) {
    e.set(i.name, i);
  });
  function o(i) {
    r.add(i.name);
    var f = [].concat(i.requires || [], i.requiresIfExists || []);
    f.forEach(function(s) {
      if (!r.has(s)) {
        var a = e.get(s);
        a && o(a);
      }
    }), n.push(i);
  }
  return t.forEach(function(i) {
    r.has(i.name) || o(i);
  }), n;
}
function bn(t) {
  var e = wn(t);
  return Cr.reduce(function(r, n) {
    return r.concat(e.filter(function(o) {
      return o.phase === n;
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
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
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
  var e = t, r = e.defaultModifiers, n = r === void 0 ? [] : r, o = e.defaultOptions, i = o === void 0 ? $e : o;
  return function(s, a, c) {
    c === void 0 && (c = i);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, $e, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: a
      },
      attributes: {},
      styles: {}
    }, p = [], w = !1, d = {
      state: u,
      setOptions: function(h) {
        var x = typeof h == "function" ? h(u.options) : h;
        g(), u.options = Object.assign({}, i, u.options, x), u.scrollParents = {
          reference: Z(s) ? gt(s) : s.contextElement ? gt(s.contextElement) : [],
          popper: gt(a)
        };
        var O = bn(On([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = O.filter(function(v) {
          return v.enabled;
        }), y(), d.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!w) {
          var h = u.elements, x = h.reference, O = h.popper;
          if (Ae(x, O)) {
            u.rects = {
              reference: yn(x, Et(O), u.options.strategy === "fixed"),
              popper: Zt(O)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(E) {
              return u.modifiersData[E.name] = Object.assign({}, E.data);
            });
            for (var v = 0; v < u.orderedModifiers.length; v++) {
              if (u.reset === !0) {
                u.reset = !1, v = -1;
                continue;
              }
              var m = u.orderedModifiers[v], b = m.fn, _ = m.options, k = _ === void 0 ? {} : _, $ = m.name;
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
        return new Promise(function(l) {
          d.forceUpdate(), l(u);
        });
      }),
      destroy: function() {
        g(), w = !0;
      }
    };
    if (!Ae(s, a))
      return d;
    d.setOptions(c).then(function(l) {
      !w && c.onFirstUpdate && c.onFirstUpdate(l);
    });
    function y() {
      u.orderedModifiers.forEach(function(l) {
        var h = l.name, x = l.options, O = x === void 0 ? {} : x, v = l.effect;
        if (typeof v == "function") {
          var m = v({
            state: u,
            name: h,
            instance: d,
            options: O
          }), b = function() {
          };
          p.push(m || b);
        }
      });
    }
    function g() {
      p.forEach(function(l) {
        return l();
      }), p = [];
    }
    return d;
  };
}
var En = [Xr, ln, Fr, Rr, cn, nn, vn, Hr, an], $n = /* @__PURE__ */ _n({
  defaultModifiers: En
});
const qt = 100;
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
    m(n, o) {
      yt(n, e, o);
    },
    p: ot,
    d(n) {
      n && it(e);
    }
  };
}
function Pn(t) {
  let e, r, n, o, i, f, s = (
    /*optItem*/
    t[0].popover.title + ""
  ), a, c, u, p = (
    /*optItem*/
    t[0].popover.description + ""
  ), w, d, y, g, l, h, x, O, v = (
    /*piglogo*/
    t[1] && kn(t)
  );
  return {
    c() {
      e = B("div"), r = B("div"), n = B("div"), v && v.c(), o = dt(), i = B("div"), f = B("h2"), a = Ft(s), c = dt(), u = B("p"), w = Ft(p), d = dt(), y = B("div"), g = B("button"), g.textContent = "结束引导", l = dt(), h = B("div"), A(f, "class", "font-700 text-18px leading-24px text-hex-000"), A(u, "class", "text-14px mt-8px tracking-2px leading-20px text-hex-666 max-h-200px overflow-y-auto"), A(i, "class", "pl-10px"), A(n, "class", "tip__wapper flex items-start"), A(g, "class", "text-12px text-hex-888 cursor-pointer pt-10px"), A(y, "class", "flex justify-end"), A(r, "class", "p-15px"), A(h, "id", "arrow"), A(h, "data-popper-arrow", ""), A(h, "class", "svelte-9kkx30"), A(e, "class", "web-guide__tip svelte-9kkx30"), A(e, "id", "web-guide__tooltip"), A(e, "role", "tooltip");
    },
    m(m, b) {
      yt(m, e, b), C(e, r), C(r, n), v && v.m(n, null), C(n, o), C(n, i), C(i, f), C(f, a), C(i, c), C(i, u), C(u, w), C(r, d), C(r, y), C(y, g), C(e, l), C(e, h), x || (O = ar(
        g,
        "click",
        /*endHandle*/
        t[2]
      ), x = !0);
    },
    p(m, [b]) {
      /*piglogo*/
      m[1] && v.p(m, b), b & /*optItem*/
      1 && s !== (s = /*optItem*/
      m[0].popover.title + "") && ve(a, s), b & /*optItem*/
      1 && p !== (p = /*optItem*/
      m[0].popover.description + "") && ve(w, p);
    },
    i: ot,
    o: ot,
    d(m) {
      m && it(e), v && v.d(), x = !1, O();
    }
  };
}
function Dn(t, e, r) {
  const n = cr();
  let { optItem: o } = e, { settings: i } = e;
  const f = i.logo, s = async (c) => {
    const u = Ut(c.element), p = document.querySelector("#web-guide__tooltip");
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
  s(o), Re(() => {
    s(o);
  });
  const a = () => {
    n("guideFinish");
  };
  return t.$$set = (c) => {
    "optItem" in c && r(0, o = c.optItem), "settings" in c && r(3, i = c.settings);
  }, t.$$.update = () => {
    t.$$.dirty & /*optItem*/
    1 && s(o);
  }, [o, f, a, i];
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
  let e, r, n, o;
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
    m(i, f) {
      yt(i, e, f), yt(i, r, f), Te(n, i, f), o = !0;
    },
    p(i, f) {
      const s = {};
      f & /*step*/
      4 && (s.optItem = /*stepArr*/
      i[3][
        /*step*/
        i[2]
      ]), f & /*settings*/
      1 && (s.settings = /*settings*/
      i[0]), n.$set(s);
    },
    i(i) {
      o || (ht(n.$$.fragment, i), o = !0);
    },
    o(i) {
      Yt(n.$$.fragment, i), o = !1;
    },
    d(i) {
      i && (it(e), it(r)), Le(n, i);
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
    m(o, i) {
      yt(o, e, i), n && n.m(e, null), r = !0;
    },
    p(o, [i]) {
      /*showGuide*/
      o[1] ? n ? (n.p(o, i), i & /*showGuide*/
      2 && ht(n, 1)) : (n = ke(o), n.c(), ht(n, 1), n.m(e, null)) : n && (vr(), Yt(n, 1, 1, () => {
        n = null;
      }), hr());
    },
    i(o) {
      r || (ht(n), r = !0);
    },
    o(o) {
      Yt(n), r = !1;
    },
    d(o) {
      o && it(e), n && n.d();
    }
  };
}
function Rn(t, e, r) {
  let { settings: n } = e;
  const o = n.stepArr;
  let i = !1, f = !1, s = n.immediate, a = 0, c = {};
  async function u() {
    let l = o[a];
    return Ut(l.element);
  }
  const p = async () => {
    var l;
    r(1, i = !0);
    try {
      const h = await u();
      console.log("ele", h);
      const { width: x } = h.getBoundingClientRect();
      c = ge(h), St(h, {
        position: "relative",
        zIndex: "9999998",
        width: x + "px",
        boxShadow: "rgba(33, 33, 33, 0.8) 0px 0px 1px 2px, rgba(33, 33, 33, 0.5) 0px 0px 0px 5000px"
      });
      const O = async () => {
        var v, m;
        if (St(h, c), h.removeEventListener((v = o[a]) == null ? void 0 : v.trigger, () => {
        }), !w())
          return !1;
        r(1, i = !1), setTimeout(
          async () => {
            c = {}, await p();
          },
          ((m = o[a]) == null ? void 0 : m.delayed) ?? qt
        );
      };
      n.immediate && h.addEventListener((l = o[a]) == null ? void 0 : l.trigger, O);
    } catch {
      r(1, i = !1), r(2, a = 0), d();
    }
  }, w = () => i ? a >= o.length - 1 ? (y(), !1) : (r(2, a = a + 1), !0) : !1, d = () => {
    const l = document.querySelectorAll("#web-guide");
    l && l.forEach((h, x) => {
      x >= 1 && h.remove();
    });
  }, y = async () => {
    r(1, i = !1), f = !0;
    const l = await u();
    St(l, c), r(2, a = 0), d();
  };
  s && Re(() => {
    setTimeout(
      async () => {
        await p();
      },
      o[a].delayed ?? qt
    );
  });
  async function g(l) {
    if (f)
      return !1;
    if (r(1, i = !1), l === "finish")
      return y(), !1;
    const h = await u();
    if (l > 0) {
      const x = Ut(o[l - 1].element);
      St(x, c);
    }
    r(2, a = l), c = ge(h), setTimeout(
      async () => {
        await p();
      },
      o[a].delayed ?? qt
    );
  }
  return t.$$set = (l) => {
    "settings" in l && r(0, n = l.settings);
  }, [n, i, a, o, y, g];
}
class Tn extends We {
  constructor(e) {
    super(), Me(this, e, Rn, jn, Ce, { settings: 0, next: 5 }, Sn);
  }
  get next() {
    return this.$$.ctx[5];
  }
}
const Ln = (t) => t;
export {
  Tn as default,
  Ln as defineConfig
};
