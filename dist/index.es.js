var Qe = Object.defineProperty;
var Ze = (t, e, r) => e in t ? Qe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Ht = (t, e, r) => (Ze(t, typeof e != "symbol" ? e + "" : e, r), r);
function it() {
}
function $e(t) {
  return t();
}
function le() {
  return /* @__PURE__ */ Object.create(null);
}
function Ot(t) {
  t.forEach($e);
}
function Ae(t) {
  return typeof t == "function";
}
function ke(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let Ct;
function tr(t, e) {
  return t === e ? !0 : (Ct || (Ct = document.createElement("a")), Ct.href = e, t === Ct.href);
}
function er(t) {
  return Object.keys(t).length === 0;
}
function C(t, e) {
  t.appendChild(e);
}
function Pe(t, e, r) {
  const n = rr(t);
  if (!n.getElementById(e)) {
    const i = B("style");
    i.id = e, i.textContent = r, nr(n, i);
  }
}
function rr(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function nr(t, e) {
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
function Vt(t) {
  return document.createTextNode(t);
}
function dt() {
  return Vt(" ");
}
function ir(t, e, r, n) {
  return t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n);
}
function A(t, e, r) {
  r == null ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r);
}
function or(t) {
  return Array.from(t.childNodes);
}
function pe(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function ar(t, e, { bubbles: r = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: r, cancelable: n });
}
let wt;
function vt(t) {
  wt = t;
}
function De() {
  if (!wt)
    throw new Error("Function called outside component initialization");
  return wt;
}
function sr(t) {
  De().$$.on_mount.push(t);
}
function fr() {
  const t = De();
  return (e, r, { cancelable: n = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const o = ar(
        /** @type {string} */
        e,
        r,
        { cancelable: n }
      );
      return i.slice().forEach((f) => {
        f.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const rt = [], de = [];
let nt = [];
const ve = [], cr = /* @__PURE__ */ Promise.resolve();
let Ft = !1;
function ur() {
  Ft || (Ft = !0, cr.then(Ce));
}
function zt(t) {
  nt.push(t);
}
const Nt = /* @__PURE__ */ new Set();
let et = 0;
function Ce() {
  if (et !== 0)
    return;
  const t = wt;
  do {
    try {
      for (; et < rt.length; ) {
        const e = rt[et];
        et++, vt(e), lr(e.$$);
      }
    } catch (e) {
      throw rt.length = 0, et = 0, e;
    }
    for (vt(null), rt.length = 0, et = 0; de.length; )
      de.pop()();
    for (let e = 0; e < nt.length; e += 1) {
      const r = nt[e];
      Nt.has(r) || (Nt.add(r), r());
    }
    nt.length = 0;
  } while (rt.length);
  for (; ve.length; )
    ve.pop()();
  Ft = !1, Nt.clear(), vt(t);
}
function lr(t) {
  if (t.fragment !== null) {
    t.update(), Ot(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(zt);
  }
}
function pr(t) {
  const e = [], r = [];
  nt.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : r.push(n)), r.forEach((n) => n()), nt = e;
}
const St = /* @__PURE__ */ new Set();
let K;
function dr() {
  K = {
    r: 0,
    c: [],
    p: K
    // parent group
  };
}
function vr() {
  K.r || Ot(K.c), K = K.p;
}
function ht(t, e) {
  t && t.i && (St.delete(t), t.i(e));
}
function Xt(t, e, r, n) {
  if (t && t.o) {
    if (St.has(t))
      return;
    St.add(t), K.c.push(() => {
      St.delete(t), n && (r && t.d(1), n());
    }), t.o(e);
  } else
    n && n();
}
function hr(t) {
  t && t.c();
}
function je(t, e, r) {
  const { fragment: n, after_update: i } = t.$$;
  n && n.m(e, r), zt(() => {
    const o = t.$$.on_mount.map($e).filter(Ae);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : Ot(o), t.$$.on_mount = [];
  }), i.forEach(zt);
}
function Se(t, e) {
  const r = t.$$;
  r.fragment !== null && (pr(r.after_update), Ot(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function mr(t, e) {
  t.$$.dirty[0] === -1 && (rt.push(t), ur(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Re(t, e, r, n, i, o, f, a = [-1]) {
  const s = wt;
  vt(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: it,
    not_equal: i,
    bound: le(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: le(),
    dirty: a,
    skip_bound: !1,
    root: e.target || s.$$.root
  };
  f && f(u.root);
  let c = !1;
  if (u.ctx = r ? r(t, e.props || {}, (l, y, ...p) => {
    const d = p.length ? p[0] : y;
    return u.ctx && i(u.ctx[l], u.ctx[l] = d) && (!u.skip_bound && u.bound[l] && u.bound[l](d), c && mr(t, l)), y;
  }) : [], u.update(), c = !0, Ot(u.before_update), u.fragment = n ? n(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const l = or(e.target);
      u.fragment && u.fragment.l(l), l.forEach(ot);
    } else
      u.fragment && u.fragment.c();
    e.intro && ht(t.$$.fragment), je(t, e.target, e.anchor), Ce();
  }
  vt(s);
}
class Be {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ht(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ht(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Se(this, 1), this.$destroy = it;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, r) {
    if (!Ae(r))
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
    this.$$set && !er(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const gr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(gr);
const Te = (t) => new Promise((e, r) => {
  setTimeout(() => {
    if (typeof t == "string") {
      if (document.querySelector(t))
        e(document.querySelector(t));
      else
        throw new Error("未获取到element");
      return;
    }
    if (typeof t == "function") {
      if (t())
        e(t());
      else
        throw new Error("未获取到element");
      return;
    }
    throw new Error("未获取到element");
  }, 0);
}), qt = (t, e) => {
  if (!t)
    return !1;
  for (const r in e)
    t.style[r] = e[r];
}, yr = (t) => {
  if (!t)
    return {};
  const e = t.style.position, r = t.style.zIndex, n = t.style.boxShadow;
  return {
    position: e,
    zIndex: r,
    boxShadow: n
  };
};
var j = "top", M = "bottom", W = "right", S = "left", Gt = "auto", _t = [j, M, W, S], at = "start", bt = "end", wr = "clippingParents", Le = "viewport", pt = "popper", br = "reference", he = /* @__PURE__ */ _t.reduce(function(t, e) {
  return t.concat([e + "-" + at, e + "-" + bt]);
}, []), Me = /* @__PURE__ */ [].concat(_t, [Gt]).reduce(function(t, e) {
  return t.concat([e, e + "-" + at, e + "-" + bt]);
}, []), xr = "beforeRead", Or = "read", _r = "afterRead", Er = "beforeMain", $r = "main", Ar = "afterMain", kr = "beforeWrite", Pr = "write", Dr = "afterWrite", Cr = [xr, Or, _r, Er, $r, Ar, kr, Pr, Dr];
function q(t) {
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
function Jt(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = T(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function jr(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(r) {
    var n = e.styles[r] || {}, i = e.attributes[r] || {}, o = e.elements[r];
    !L(o) || !q(o) || (Object.assign(o.style, n), Object.keys(i).forEach(function(f) {
      var a = i[f];
      a === !1 ? o.removeAttribute(f) : o.setAttribute(f, a === !0 ? "" : a);
    }));
  });
}
function Sr(t) {
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
      var i = e.elements[n], o = e.attributes[n] || {}, f = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : r[n]), a = f.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !L(i) || !q(i) || (Object.assign(i.style, a), Object.keys(o).forEach(function(s) {
        i.removeAttribute(s);
      }));
    });
  };
}
const Rr = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: jr,
  effect: Sr,
  requires: ["computeStyles"]
};
function N(t) {
  return t.split("-")[0];
}
var Q = Math.max, Bt = Math.min, st = Math.round;
function Yt() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function We() {
  return !/^((?!chrome|android).)*safari/i.test(Yt());
}
function ft(t, e, r) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  var n = t.getBoundingClientRect(), i = 1, o = 1;
  e && L(t) && (i = t.offsetWidth > 0 && st(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && st(n.height) / t.offsetHeight || 1);
  var f = Z(t) ? T(t) : window, a = f.visualViewport, s = !We() && r, u = (n.left + (s && a ? a.offsetLeft : 0)) / i, c = (n.top + (s && a ? a.offsetTop : 0)) / o, l = n.width / i, y = n.height / o;
  return {
    width: l,
    height: y,
    top: c,
    right: u + l,
    bottom: c + y,
    left: u,
    x: u,
    y: c
  };
}
function Kt(t) {
  var e = ft(t), r = t.offsetWidth, n = t.offsetHeight;
  return Math.abs(e.width - r) <= 1 && (r = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: r,
    height: n
  };
}
function Ie(t, e) {
  var r = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (r && Jt(r)) {
    var n = e;
    do {
      if (n && t.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function V(t) {
  return T(t).getComputedStyle(t);
}
function Br(t) {
  return ["table", "td", "th"].indexOf(q(t)) >= 0;
}
function z(t) {
  return ((Z(t) ? t.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t.document
  )) || window.document).documentElement;
}
function Tt(t) {
  return q(t) === "html" ? t : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t.parentNode || // DOM Element detected
    (Jt(t) ? t.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    z(t)
  );
}
function me(t) {
  return !L(t) || // https://github.com/popperjs/popper-core/issues/837
  V(t).position === "fixed" ? null : t.offsetParent;
}
function Tr(t) {
  var e = /firefox/i.test(Yt()), r = /Trident/i.test(Yt());
  if (r && L(t)) {
    var n = V(t);
    if (n.position === "fixed")
      return null;
  }
  var i = Tt(t);
  for (Jt(i) && (i = i.host); L(i) && ["html", "body"].indexOf(q(i)) < 0; ) {
    var o = V(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Et(t) {
  for (var e = T(t), r = me(t); r && Br(r) && V(r).position === "static"; )
    r = me(r);
  return r && (q(r) === "html" || q(r) === "body" && V(r).position === "static") ? e : r || Tr(t) || e;
}
function Qt(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function mt(t, e, r) {
  return Q(t, Bt(e, r));
}
function Lr(t, e, r) {
  var n = mt(t, e, r);
  return n > r ? r : n;
}
function He() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ne(t) {
  return Object.assign({}, He(), t);
}
function qe(t, e) {
  return e.reduce(function(r, n) {
    return r[n] = t, r;
  }, {});
}
var Mr = function(e, r) {
  return e = typeof e == "function" ? e(Object.assign({}, r.rects, {
    placement: r.placement
  })) : e, Ne(typeof e != "number" ? e : qe(e, _t));
};
function Wr(t) {
  var e, r = t.state, n = t.name, i = t.options, o = r.elements.arrow, f = r.modifiersData.popperOffsets, a = N(r.placement), s = Qt(a), u = [S, W].indexOf(a) >= 0, c = u ? "height" : "width";
  if (!(!o || !f)) {
    var l = Mr(i.padding, r), y = Kt(o), p = s === "y" ? j : S, d = s === "y" ? M : W, v = r.rects.reference[c] + r.rects.reference[s] - f[s] - r.rects.popper[c], m = f[s] - r.rects.reference[s], b = Et(o), x = b ? s === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, O = v / 2 - m / 2, h = l[p], g = x - y[c] - l[d], w = x / 2 - y[c] / 2 + O, _ = mt(h, w, g), k = s;
    r.modifiersData[n] = (e = {}, e[k] = _, e.centerOffset = _ - w, e);
  }
}
function Ir(t) {
  var e = t.state, r = t.options, n = r.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || Ie(e.elements.popper, i) && (e.elements.arrow = i));
}
const Hr = {
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
var Nr = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function qr(t, e) {
  var r = t.x, n = t.y, i = e.devicePixelRatio || 1;
  return {
    x: st(r * i) / i || 0,
    y: st(n * i) / i || 0
  };
}
function ge(t) {
  var e, r = t.popper, n = t.popperRect, i = t.placement, o = t.variation, f = t.offsets, a = t.position, s = t.gpuAcceleration, u = t.adaptive, c = t.roundOffsets, l = t.isFixed, y = f.x, p = y === void 0 ? 0 : y, d = f.y, v = d === void 0 ? 0 : d, m = typeof c == "function" ? c({
    x: p,
    y: v
  }) : {
    x: p,
    y: v
  };
  p = m.x, v = m.y;
  var b = f.hasOwnProperty("x"), x = f.hasOwnProperty("y"), O = S, h = j, g = window;
  if (u) {
    var w = Et(r), _ = "clientHeight", k = "clientWidth";
    if (w === T(r) && (w = z(r), V(w).position !== "static" && a === "absolute" && (_ = "scrollHeight", k = "scrollWidth")), w = w, i === j || (i === S || i === W) && o === bt) {
      h = M;
      var $ = l && w === g && g.visualViewport ? g.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[_]
      );
      v -= $ - n.height, v *= s ? 1 : -1;
    }
    if (i === S || (i === j || i === M) && o === bt) {
      O = W;
      var E = l && w === g && g.visualViewport ? g.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[k]
      );
      p -= E - n.width, p *= s ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: a
  }, u && Nr), I = c === !0 ? qr({
    x: p,
    y: v
  }, T(r)) : {
    x: p,
    y: v
  };
  if (p = I.x, v = I.y, s) {
    var D;
    return Object.assign({}, P, (D = {}, D[h] = x ? "0" : "", D[O] = b ? "0" : "", D.transform = (g.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + v + "px)" : "translate3d(" + p + "px, " + v + "px, 0)", D));
  }
  return Object.assign({}, P, (e = {}, e[h] = x ? v + "px" : "", e[O] = b ? p + "px" : "", e.transform = "", e));
}
function Vr(t) {
  var e = t.state, r = t.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, o = r.adaptive, f = o === void 0 ? !0 : o, a = r.roundOffsets, s = a === void 0 ? !0 : a, u = {
    placement: N(e.placement),
    variation: ct(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, ge(Object.assign({}, u, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: f,
    roundOffsets: s
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, ge(Object.assign({}, u, {
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
  fn: Vr,
  data: {}
};
var jt = {
  passive: !0
};
function zr(t) {
  var e = t.state, r = t.instance, n = t.options, i = n.scroll, o = i === void 0 ? !0 : i, f = n.resize, a = f === void 0 ? !0 : f, s = T(e.elements.popper), u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, jt);
  }), a && s.addEventListener("resize", r.update, jt), function() {
    o && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, jt);
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
function Rt(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return Yr[e];
  });
}
var Ur = {
  start: "end",
  end: "start"
};
function ye(t) {
  return t.replace(/start|end/g, function(e) {
    return Ur[e];
  });
}
function Zt(t) {
  var e = T(t), r = e.pageXOffset, n = e.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function te(t) {
  return ft(z(t)).left + Zt(t).scrollLeft;
}
function Gr(t, e) {
  var r = T(t), n = z(t), i = r.visualViewport, o = n.clientWidth, f = n.clientHeight, a = 0, s = 0;
  if (i) {
    o = i.width, f = i.height;
    var u = We();
    (u || !u && e === "fixed") && (a = i.offsetLeft, s = i.offsetTop);
  }
  return {
    width: o,
    height: f,
    x: a + te(t),
    y: s
  };
}
function Jr(t) {
  var e, r = z(t), n = Zt(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, o = Q(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), f = Q(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), a = -n.scrollLeft + te(t), s = -n.scrollTop;
  return V(i || r).direction === "rtl" && (a += Q(r.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: f,
    x: a,
    y: s
  };
}
function ee(t) {
  var e = V(t), r = e.overflow, n = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Ve(t) {
  return ["html", "body", "#document"].indexOf(q(t)) >= 0 ? t.ownerDocument.body : L(t) && ee(t) ? t : Ve(Tt(t));
}
function gt(t, e) {
  var r;
  e === void 0 && (e = []);
  var n = Ve(t), i = n === ((r = t.ownerDocument) == null ? void 0 : r.body), o = T(n), f = i ? [o].concat(o.visualViewport || [], ee(n) ? n : []) : n, a = e.concat(f);
  return i ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(gt(Tt(f)))
  );
}
function Ut(t) {
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
function we(t, e, r) {
  return e === Le ? Ut(Gr(t, r)) : Z(e) ? Kr(e, r) : Ut(Jr(z(t)));
}
function Qr(t) {
  var e = gt(Tt(t)), r = ["absolute", "fixed"].indexOf(V(t).position) >= 0, n = r && L(t) ? Et(t) : t;
  return Z(n) ? e.filter(function(i) {
    return Z(i) && Ie(i, n) && q(i) !== "body";
  }) : [];
}
function Zr(t, e, r, n) {
  var i = e === "clippingParents" ? Qr(t) : [].concat(e), o = [].concat(i, [r]), f = o[0], a = o.reduce(function(s, u) {
    var c = we(t, u, n);
    return s.top = Q(c.top, s.top), s.right = Bt(c.right, s.right), s.bottom = Bt(c.bottom, s.bottom), s.left = Q(c.left, s.left), s;
  }, we(t, f, n));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Fe(t) {
  var e = t.reference, r = t.element, n = t.placement, i = n ? N(n) : null, o = n ? ct(n) : null, f = e.x + e.width / 2 - r.width / 2, a = e.y + e.height / 2 - r.height / 2, s;
  switch (i) {
    case j:
      s = {
        x: f,
        y: e.y - r.height
      };
      break;
    case M:
      s = {
        x: f,
        y: e.y + e.height
      };
      break;
    case W:
      s = {
        x: e.x + e.width,
        y: a
      };
      break;
    case S:
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
  var u = i ? Qt(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (o) {
      case at:
        s[u] = s[u] - (e[c] / 2 - r[c] / 2);
        break;
      case bt:
        s[u] = s[u] + (e[c] / 2 - r[c] / 2);
        break;
    }
  }
  return s;
}
function xt(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, i = n === void 0 ? t.placement : n, o = r.strategy, f = o === void 0 ? t.strategy : o, a = r.boundary, s = a === void 0 ? wr : a, u = r.rootBoundary, c = u === void 0 ? Le : u, l = r.elementContext, y = l === void 0 ? pt : l, p = r.altBoundary, d = p === void 0 ? !1 : p, v = r.padding, m = v === void 0 ? 0 : v, b = Ne(typeof m != "number" ? m : qe(m, _t)), x = y === pt ? br : pt, O = t.rects.popper, h = t.elements[d ? x : y], g = Zr(Z(h) ? h : h.contextElement || z(t.elements.popper), s, c, f), w = ft(t.elements.reference), _ = Fe({
    reference: w,
    element: O,
    strategy: "absolute",
    placement: i
  }), k = Ut(Object.assign({}, O, _)), $ = y === pt ? k : w, E = {
    top: g.top - $.top + b.top,
    bottom: $.bottom - g.bottom + b.bottom,
    left: g.left - $.left + b.left,
    right: $.right - g.right + b.right
  }, P = t.modifiersData.offset;
  if (y === pt && P) {
    var I = P[i];
    Object.keys(E).forEach(function(D) {
      var X = [W, M].indexOf(D) >= 0 ? 1 : -1, Y = [j, M].indexOf(D) >= 0 ? "y" : "x";
      E[D] += I[Y] * X;
    });
  }
  return E;
}
function tn(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, i = r.boundary, o = r.rootBoundary, f = r.padding, a = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Me : s, c = ct(n), l = c ? a ? he : he.filter(function(d) {
    return ct(d) === c;
  }) : _t, y = l.filter(function(d) {
    return u.indexOf(d) >= 0;
  });
  y.length === 0 && (y = l);
  var p = y.reduce(function(d, v) {
    return d[v] = xt(t, {
      placement: v,
      boundary: i,
      rootBoundary: o,
      padding: f
    })[N(v)], d;
  }, {});
  return Object.keys(p).sort(function(d, v) {
    return p[d] - p[v];
  });
}
function en(t) {
  if (N(t) === Gt)
    return [];
  var e = Rt(t);
  return [ye(t), e, ye(e)];
}
function rn(t) {
  var e = t.state, r = t.options, n = t.name;
  if (!e.modifiersData[n]._skip) {
    for (var i = r.mainAxis, o = i === void 0 ? !0 : i, f = r.altAxis, a = f === void 0 ? !0 : f, s = r.fallbackPlacements, u = r.padding, c = r.boundary, l = r.rootBoundary, y = r.altBoundary, p = r.flipVariations, d = p === void 0 ? !0 : p, v = r.allowedAutoPlacements, m = e.options.placement, b = N(m), x = b === m, O = s || (x || !d ? [Rt(m)] : en(m)), h = [m].concat(O).reduce(function(tt, F) {
      return tt.concat(N(F) === Gt ? tn(e, {
        placement: F,
        boundary: c,
        rootBoundary: l,
        padding: u,
        flipVariations: d,
        allowedAutoPlacements: v
      }) : F);
    }, []), g = e.rects.reference, w = e.rects.popper, _ = /* @__PURE__ */ new Map(), k = !0, $ = h[0], E = 0; E < h.length; E++) {
      var P = h[E], I = N(P), D = ct(P) === at, X = [j, M].indexOf(I) >= 0, Y = X ? "width" : "height", R = xt(e, {
        placement: P,
        boundary: c,
        rootBoundary: l,
        altBoundary: y,
        padding: u
      }), H = X ? D ? W : S : D ? M : j;
      g[Y] > w[Y] && (H = Rt(H));
      var $t = Rt(H), U = [];
      if (o && U.push(R[I] <= 0), a && U.push(R[H] <= 0, R[$t] <= 0), U.every(function(tt) {
        return tt;
      })) {
        $ = P, k = !1;
        break;
      }
      _.set(P, U);
    }
    if (k)
      for (var At = d ? 3 : 1, Lt = function(F) {
        var lt = h.find(function(Pt) {
          var G = _.get(Pt);
          if (G)
            return G.slice(0, F).every(function(Mt) {
              return Mt;
            });
        });
        if (lt)
          return $ = lt, "break";
      }, ut = At; ut > 0; ut--) {
        var kt = Lt(ut);
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
function be(t, e, r) {
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
function xe(t) {
  return [j, W, M, S].some(function(e) {
    return t[e] >= 0;
  });
}
function on(t) {
  var e = t.state, r = t.name, n = e.rects.reference, i = e.rects.popper, o = e.modifiersData.preventOverflow, f = xt(e, {
    elementContext: "reference"
  }), a = xt(e, {
    altBoundary: !0
  }), s = be(f, n), u = be(a, i, o), c = xe(s), l = xe(u);
  e.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: l
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": l
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
  var n = N(t), i = [S, j].indexOf(n) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, e, {
    placement: t
  })) : r, f = o[0], a = o[1];
  return f = f || 0, a = (a || 0) * i, [S, W].indexOf(n) >= 0 ? {
    x: a,
    y: f
  } : {
    x: f,
    y: a
  };
}
function fn(t) {
  var e = t.state, r = t.options, n = t.name, i = r.offset, o = i === void 0 ? [0, 0] : i, f = Me.reduce(function(c, l) {
    return c[l] = sn(l, e.rects, o), c;
  }, {}), a = f[e.placement], s = a.x, u = a.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += s, e.modifiersData.popperOffsets.y += u), e.modifiersData[n] = f;
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
  e.modifiersData[r] = Fe({
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
  var e = t.state, r = t.options, n = t.name, i = r.mainAxis, o = i === void 0 ? !0 : i, f = r.altAxis, a = f === void 0 ? !1 : f, s = r.boundary, u = r.rootBoundary, c = r.altBoundary, l = r.padding, y = r.tether, p = y === void 0 ? !0 : y, d = r.tetherOffset, v = d === void 0 ? 0 : d, m = xt(e, {
    boundary: s,
    rootBoundary: u,
    padding: l,
    altBoundary: c
  }), b = N(e.placement), x = ct(e.placement), O = !x, h = Qt(b), g = pn(h), w = e.modifiersData.popperOffsets, _ = e.rects.reference, k = e.rects.popper, $ = typeof v == "function" ? v(Object.assign({}, e.rects, {
    placement: e.placement
  })) : v, E = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), P = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, I = {
    x: 0,
    y: 0
  };
  if (w) {
    if (o) {
      var D, X = h === "y" ? j : S, Y = h === "y" ? M : W, R = h === "y" ? "height" : "width", H = w[h], $t = H + m[X], U = H - m[Y], At = p ? -k[R] / 2 : 0, Lt = x === at ? _[R] : k[R], ut = x === at ? -k[R] : -_[R], kt = e.elements.arrow, tt = p && kt ? Kt(kt) : {
        width: 0,
        height: 0
      }, F = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : He(), lt = F[X], Pt = F[Y], G = mt(0, _[R], tt[R]), Mt = O ? _[R] / 2 - At - G - lt - E.mainAxis : Lt - G - lt - E.mainAxis, Xe = O ? -_[R] / 2 + At + G + Pt + E.mainAxis : ut + G + Pt + E.mainAxis, Wt = e.elements.arrow && Et(e.elements.arrow), Ye = Wt ? h === "y" ? Wt.clientTop || 0 : Wt.clientLeft || 0 : 0, re = (D = P == null ? void 0 : P[h]) != null ? D : 0, Ue = H + Mt - re - Ye, Ge = H + Xe - re, ne = mt(p ? Bt($t, Ue) : $t, H, p ? Q(U, Ge) : U);
      w[h] = ne, I[h] = ne - H;
    }
    if (a) {
      var ie, Je = h === "x" ? j : S, Ke = h === "x" ? M : W, J = w[g], Dt = g === "y" ? "height" : "width", oe = J + m[Je], ae = J - m[Ke], It = [j, S].indexOf(b) !== -1, se = (ie = P == null ? void 0 : P[g]) != null ? ie : 0, fe = It ? oe : J - _[Dt] - k[Dt] - se + E.altAxis, ce = It ? J + _[Dt] + k[Dt] - se - E.altAxis : ae, ue = p && It ? Lr(fe, J, ce) : mt(p ? fe : oe, J, p ? ce : ae);
      w[g] = ue, I[g] = ue - J;
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
  return t === T(t) || !L(t) ? Zt(t) : hn(t);
}
function gn(t) {
  var e = t.getBoundingClientRect(), r = st(e.width) / t.offsetWidth || 1, n = st(e.height) / t.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function yn(t, e, r) {
  r === void 0 && (r = !1);
  var n = L(e), i = L(e) && gn(e), o = z(e), f = ft(t, i, r), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((q(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ee(o)) && (a = mn(e)), L(e) ? (s = ft(e, !0), s.x += e.clientLeft, s.y += e.clientTop) : o && (s.x = te(o))), {
    x: f.left + a.scrollLeft - s.x,
    y: f.top + a.scrollTop - s.y,
    width: f.width,
    height: f.height
  };
}
function wn(t) {
  var e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  t.forEach(function(o) {
    e.set(o.name, o);
  });
  function i(o) {
    r.add(o.name);
    var f = [].concat(o.requires || [], o.requiresIfExists || []);
    f.forEach(function(a) {
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
var Oe = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function _e() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return !e.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function _n(t) {
  t === void 0 && (t = {});
  var e = t, r = e.defaultModifiers, n = r === void 0 ? [] : r, i = e.defaultOptions, o = i === void 0 ? Oe : i;
  return function(a, s, u) {
    u === void 0 && (u = o);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Oe, o),
      modifiersData: {},
      elements: {
        reference: a,
        popper: s
      },
      attributes: {},
      styles: {}
    }, l = [], y = !1, p = {
      state: c,
      setOptions: function(b) {
        var x = typeof b == "function" ? b(c.options) : b;
        v(), c.options = Object.assign({}, o, c.options, x), c.scrollParents = {
          reference: Z(a) ? gt(a) : a.contextElement ? gt(a.contextElement) : [],
          popper: gt(s)
        };
        var O = bn(On([].concat(n, c.options.modifiers)));
        return c.orderedModifiers = O.filter(function(h) {
          return h.enabled;
        }), d(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!y) {
          var b = c.elements, x = b.reference, O = b.popper;
          if (_e(x, O)) {
            c.rects = {
              reference: yn(x, Et(O), c.options.strategy === "fixed"),
              popper: Kt(O)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(E) {
              return c.modifiersData[E.name] = Object.assign({}, E.data);
            });
            for (var h = 0; h < c.orderedModifiers.length; h++) {
              if (c.reset === !0) {
                c.reset = !1, h = -1;
                continue;
              }
              var g = c.orderedModifiers[h], w = g.fn, _ = g.options, k = _ === void 0 ? {} : _, $ = g.name;
              typeof w == "function" && (c = w({
                state: c,
                options: k,
                name: $,
                instance: p
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: xn(function() {
        return new Promise(function(m) {
          p.forceUpdate(), m(c);
        });
      }),
      destroy: function() {
        v(), y = !0;
      }
    };
    if (!_e(a, s))
      return p;
    p.setOptions(u).then(function(m) {
      !y && u.onFirstUpdate && u.onFirstUpdate(m);
    });
    function d() {
      c.orderedModifiers.forEach(function(m) {
        var b = m.name, x = m.options, O = x === void 0 ? {} : x, h = m.effect;
        if (typeof h == "function") {
          var g = h({
            state: c,
            name: b,
            instance: p,
            options: O
          }), w = function() {
          };
          l.push(g || w);
        }
      });
    }
    function v() {
      l.forEach(function(m) {
        return m();
      }), l = [];
    }
    return p;
  };
}
var En = [Xr, ln, Fr, Rr, cn, nn, vn, Hr, an], $n = /* @__PURE__ */ _n({
  defaultModifiers: En
});
const ze = 100;
function An(t) {
  Pe(t, "svelte-9kkx30", '.web-guide__tip.svelte-9kkx30{background-color:#fff;z-index:9999999;border-radius:10px;max-width:340px}#arrow.svelte-9kkx30,#arrow.svelte-9kkx30::before{position:absolute;width:20px;height:20px;background:inherit}#arrow.svelte-9kkx30{visibility:hidden}#arrow.svelte-9kkx30::before{visibility:visible;content:"";transform:rotate(45deg)}');
}
function kn(t) {
  let e, r;
  return {
    c() {
      e = B("img"), tr(e.src, r = /*piglogo*/
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
  let e, r, n, i, o, f, a = (
    /*optItem*/
    t[0].popover.title + ""
  ), s, u, c, l = (
    /*optItem*/
    t[0].popover.description + ""
  ), y, p, d, v, m, b, x, O, h = (
    /*piglogo*/
    t[1] && kn(t)
  );
  return {
    c() {
      e = B("div"), r = B("div"), n = B("div"), h && h.c(), i = dt(), o = B("div"), f = B("h2"), s = Vt(a), u = dt(), c = B("p"), y = Vt(l), p = dt(), d = B("div"), v = B("button"), v.textContent = "结束引导", m = dt(), b = B("div"), A(f, "class", "font-700 text-18px leading-24px text-hex-000"), A(c, "class", "text-14px mt-8px tracking-2px leading-20px text-hex-666 max-h-200px overflow-y-auto"), A(o, "class", "pl-10px"), A(n, "class", "tip__wapper flex items-start"), A(v, "class", "text-12px text-hex-888 cursor-pointer pt-10px"), A(d, "class", "flex justify-end"), A(r, "class", "p-15px"), A(b, "id", "arrow"), A(b, "data-popper-arrow", ""), A(b, "class", "svelte-9kkx30"), A(e, "class", "web-guide__tip svelte-9kkx30"), A(e, "id", "web-guide__tooltip"), A(e, "role", "tooltip");
    },
    m(g, w) {
      yt(g, e, w), C(e, r), C(r, n), h && h.m(n, null), C(n, i), C(n, o), C(o, f), C(f, s), C(o, u), C(o, c), C(c, y), C(r, p), C(r, d), C(d, v), C(e, m), C(e, b), x || (O = ir(
        v,
        "click",
        /*endHandle*/
        t[2]
      ), x = !0);
    },
    p(g, [w]) {
      /*piglogo*/
      g[1] && h.p(g, w), w & /*optItem*/
      1 && a !== (a = /*optItem*/
      g[0].popover.title + "") && pe(s, a), w & /*optItem*/
      1 && l !== (l = /*optItem*/
      g[0].popover.description + "") && pe(y, l);
    },
    i: it,
    o: it,
    d(g) {
      g && ot(e), h && h.d(), x = !1, O();
    }
  };
}
function Dn(t, e, r) {
  const n = fr();
  let { optItem: i } = e, { settings: o } = e;
  const f = o.logo, a = async (u) => {
    const c = await Te(u.element), l = document.querySelector("#web-guide__tooltip");
    $n(c, l, {
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
  a(i);
  const s = () => {
    n("guideFinish");
  };
  return t.$$set = (u) => {
    "optItem" in u && r(0, i = u.optItem), "settings" in u && r(3, o = u.settings);
  }, t.$$.update = () => {
    t.$$.dirty & /*optItem*/
    1 && setTimeout(
      () => {
        a(i);
      },
      i.delayed ?? ze
    );
  }, [i, f, s, o];
}
class Cn extends Be {
  constructor(e) {
    super(), Re(this, e, Dn, Pn, ke, { optItem: 0, settings: 3 }, An);
  }
}
function jn(t) {
  Pe(t, "svelte-tgr6dn", ".web-guide__overlay.svelte-tgr6dn{inset:0px;position:fixed;cursor:pointer;box-sizing:content-box;z-index:999990;opacity:0;transition:all 0.3s ease-out}");
}
function Ee(t) {
  let e, r, n, i;
  return n = new Cn({
    props: {
      optItem: (
        /*stepArr*/
        t[4][
          /*step*/
          t[3]
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
    t[5]
  ), {
    c() {
      e = B("div"), r = dt(), hr(n.$$.fragment), A(e, "class", "web-guide__overlay svelte-tgr6dn");
    },
    m(o, f) {
      yt(o, e, f), yt(o, r, f), je(n, o, f), i = !0;
    },
    p(o, f) {
      const a = {};
      f & /*step*/
      8 && (a.optItem = /*stepArr*/
      o[4][
        /*step*/
        o[3]
      ]), f & /*settings*/
      1 && (a.settings = /*settings*/
      o[0]), n.$set(a);
    },
    i(o) {
      i || (ht(n.$$.fragment, o), i = !0);
    },
    o(o) {
      Xt(n.$$.fragment, o), i = !1;
    },
    d(o) {
      o && (ot(e), ot(r)), Se(n, o);
    }
  };
}
function Sn(t) {
  let e, r, n = !/*finish*/
  t[1] && /*playGuide*/
  t[2] && Ee(t);
  return {
    c() {
      e = B("div"), n && n.c(), A(e, "id", "web-guide");
    },
    m(i, o) {
      yt(i, e, o), n && n.m(e, null), r = !0;
    },
    p(i, [o]) {
      !/*finish*/
      i[1] && /*playGuide*/
      i[2] ? n ? (n.p(i, o), o & /*finish, playGuide*/
      6 && ht(n, 1)) : (n = Ee(i), n.c(), ht(n, 1), n.m(e, null)) : n && (dr(), Xt(n, 1, 1, () => {
        n = null;
      }), vr());
    },
    i(i) {
      r || (ht(n), r = !0);
    },
    o(i) {
      Xt(n), r = !1;
    },
    d(i) {
      i && ot(e), n && n.d();
    }
  };
}
function Rn(t, e, r) {
  let { settings: n } = e;
  const i = n.stepArr;
  let o = !1, f = n.immediate, a = 0, s = {};
  async function u() {
    let d = i[a];
    return await Te(d.element);
  }
  const c = async () => {
    if (o)
      return !1;
    let d = i[a];
    const v = await u(), { width: m } = v.getBoundingClientRect();
    s = yr(v), qt(v, {
      position: "relative",
      zIndex: "9999998",
      width: m + "px",
      boxShadow: "rgba(33, 33, 33, 0.8) 0px 0px 1px 2px, rgba(33, 33, 33, 0.5) 0px 0px 0px 5000px"
    }), v.addEventListener(d.trigger, async () => {
      if (qt(v, s), v.removeEventListener(d.trigger, () => {
      }), r(3, a = a + 1), a >= i.length)
        return r(3, a = a - 1), y(), !1;
      setTimeout(
        async () => {
          s = {}, await c();
        },
        d.delayed ?? ze
      );
    });
  }, l = () => {
    const d = document.querySelectorAll("#web-guide");
    d && d.forEach((v, m) => {
      m >= 1 && v.remove();
    });
  }, y = async () => {
    r(1, o = !0);
    const d = await u();
    qt(d, s), r(3, a = 0), l();
  };
  f && sr(c);
  function p() {
    r(2, f = !0), r(1, o = !1), c();
  }
  return t.$$set = (d) => {
    "settings" in d && r(0, n = d.settings);
  }, [n, o, f, a, i, y, p];
}
class Tn extends Be {
  constructor(e) {
    super(), Re(this, e, Rn, Sn, ke, { settings: 0, next: 6 }, jn);
  }
  get next() {
    return this.$$.ctx[6];
  }
}
const Ln = (t) => t;
export {
  Tn as default,
  Ln as defineConfig
};
