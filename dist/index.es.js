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
function _t(t) {
  t.forEach(Pe);
}
function De(t) {
  return typeof t == "function";
}
function Ce(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let St;
function rr(t, e) {
  return t === e ? !0 : (St || (St = document.createElement("a")), St.href = e, t === St.href);
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
function wt(t, e, r) {
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
function vt() {
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
let bt;
function ht(t) {
  bt = t;
}
function je() {
  if (!bt)
    throw new Error("Function called outside component initialization");
  return bt;
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
      return i.slice().forEach((u) => {
        u.call(t, o);
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
  const t = bt;
  do {
    try {
      for (; et < rt.length; ) {
        const e = rt[et];
        et++, ht(e), pr(e.$$);
      }
    } catch (e) {
      throw rt.length = 0, et = 0, e;
    }
    for (ht(null), rt.length = 0, et = 0; he.length; )
      he.pop()();
    for (let e = 0; e < nt.length; e += 1) {
      const r = nt[e];
      qt.has(r) || (qt.add(r), r());
    }
    nt.length = 0;
  } while (rt.length);
  for (; me.length; )
    me.pop()();
  zt = !1, qt.clear(), ht(t);
}
function pr(t) {
  if (t.fragment !== null) {
    t.update(), _t(t.before_update);
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
  K.r || _t(K.c), K = K.p;
}
function mt(t, e) {
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
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : _t(o), t.$$.on_mount = [];
  }), i.forEach(Xt);
}
function Le(t, e) {
  const r = t.$$;
  r.fragment !== null && (dr(r.after_update), _t(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function gr(t, e) {
  t.$$.dirty[0] === -1 && (rt.push(t), lr(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Me(t, e, r, n, i, o, u, a = [-1]) {
  const s = bt;
  ht(t);
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
  u && u(f.root);
  let c = !1;
  if (f.ctx = r ? r(t, e.props || {}, (l, y, ...d) => {
    const x = d.length ? d[0] : y;
    return f.ctx && i(f.ctx[l], f.ctx[l] = x) && (!f.skip_bound && f.bound[l] && f.bound[l](x), c && gr(t, l)), y;
  }) : [], f.update(), c = !0, _t(f.before_update), f.fragment = n ? n(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const l = sr(e.target);
      f.fragment && f.fragment.l(l), l.forEach(ot);
    } else
      f.fragment && f.fragment.c();
    e.intro && mt(t.$$.fragment), Te(t, e.target, e.anchor), Be();
  }
  ht(s);
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
}, pt = (t, e) => {
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
var S = "top", M = "bottom", W = "right", j = "left", Kt = "auto", Et = [S, M, W, j], at = "start", xt = "end", wr = "clippingParents", Ie = "viewport", dt = "popper", br = "reference", ye = /* @__PURE__ */ Et.reduce(function(t, e) {
  return t.concat([e + "-" + at, e + "-" + xt]);
}, []), Ne = /* @__PURE__ */ [].concat(Et, [Kt]).reduce(function(t, e) {
  return t.concat([e, e + "-" + at, e + "-" + xt]);
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
    !L(o) || !V(o) || (Object.assign(o.style, n), Object.keys(i).forEach(function(u) {
      var a = i[u];
      a === !1 ? o.removeAttribute(u) : o.setAttribute(u, a === !0 ? "" : a);
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
      var i = e.elements[n], o = e.attributes[n] || {}, u = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : r[n]), a = u.reduce(function(s, f) {
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
  var u = Z(t) ? T(t) : window, a = u.visualViewport, s = !He() && r, f = (n.left + (s && a ? a.offsetLeft : 0)) / i, c = (n.top + (s && a ? a.offsetTop : 0)) / o, l = n.width / i, y = n.height / o;
  return {
    width: l,
    height: y,
    top: c,
    right: f + l,
    bottom: c + y,
    left: f,
    x: f,
    y: c
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
function $t(t) {
  for (var e = T(t), r = we(t); r && Br(r) && q(r).position === "static"; )
    r = we(r);
  return r && (V(r) === "html" || V(r) === "body" && q(r).position === "static") ? e : r || Tr(t) || e;
}
function te(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function gt(t, e, r) {
  return Q(t, Lt(e, r));
}
function Lr(t, e, r) {
  var n = gt(t, e, r);
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
  })) : e, Fe(typeof e != "number" ? e : ze(e, Et));
};
function Wr(t) {
  var e, r = t.state, n = t.name, i = t.options, o = r.elements.arrow, u = r.modifiersData.popperOffsets, a = H(r.placement), s = te(a), f = [j, W].indexOf(a) >= 0, c = f ? "height" : "width";
  if (!(!o || !u)) {
    var l = Mr(i.padding, r), y = Zt(o), d = s === "y" ? S : j, x = s === "y" ? M : W, m = r.rects.reference[c] + r.rects.reference[s] - u[s] - r.rects.popper[c], w = u[s] - r.rects.reference[s], O = $t(o), h = O ? s === "y" ? O.clientHeight || 0 : O.clientWidth || 0 : 0, g = m / 2 - w / 2, p = l[d], v = h - y[c] - l[x], b = h / 2 - y[c] / 2 + g, _ = gt(p, b, v), k = s;
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
  var e, r = t.popper, n = t.popperRect, i = t.placement, o = t.variation, u = t.offsets, a = t.position, s = t.gpuAcceleration, f = t.adaptive, c = t.roundOffsets, l = t.isFixed, y = u.x, d = y === void 0 ? 0 : y, x = u.y, m = x === void 0 ? 0 : x, w = typeof c == "function" ? c({
    x: d,
    y: m
  }) : {
    x: d,
    y: m
  };
  d = w.x, m = w.y;
  var O = u.hasOwnProperty("x"), h = u.hasOwnProperty("y"), g = j, p = S, v = window;
  if (f) {
    var b = $t(r), _ = "clientHeight", k = "clientWidth";
    if (b === T(r) && (b = z(r), q(b).position !== "static" && a === "absolute" && (_ = "scrollHeight", k = "scrollWidth")), b = b, i === S || (i === j || i === W) && o === xt) {
      p = M;
      var $ = l && b === v && v.visualViewport ? v.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        b[_]
      );
      m -= $ - n.height, m *= s ? 1 : -1;
    }
    if (i === j || (i === S || i === M) && o === xt) {
      g = W;
      var E = l && b === v && v.visualViewport ? v.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        b[k]
      );
      d -= E - n.width, d *= s ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: a
  }, f && Hr), I = c === !0 ? Vr({
    x: d,
    y: m
  }, T(r)) : {
    x: d,
    y: m
  };
  if (d = I.x, m = I.y, s) {
    var D;
    return Object.assign({}, P, (D = {}, D[p] = h ? "0" : "", D[g] = O ? "0" : "", D.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + m + "px)" : "translate3d(" + d + "px, " + m + "px, 0)", D));
  }
  return Object.assign({}, P, (e = {}, e[p] = h ? m + "px" : "", e[g] = O ? d + "px" : "", e.transform = "", e));
}
function qr(t) {
  var e = t.state, r = t.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, o = r.adaptive, u = o === void 0 ? !0 : o, a = r.roundOffsets, s = a === void 0 ? !0 : a, f = {
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
    adaptive: u,
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
  var e = t.state, r = t.instance, n = t.options, i = n.scroll, o = i === void 0 ? !0 : i, u = n.resize, a = u === void 0 ? !0 : u, s = T(e.elements.popper), f = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && f.forEach(function(c) {
    c.addEventListener("scroll", r.update, jt);
  }), a && s.addEventListener("resize", r.update, jt), function() {
    o && f.forEach(function(c) {
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
  var r = T(t), n = z(t), i = r.visualViewport, o = n.clientWidth, u = n.clientHeight, a = 0, s = 0;
  if (i) {
    o = i.width, u = i.height;
    var f = He();
    (f || !f && e === "fixed") && (a = i.offsetLeft, s = i.offsetTop);
  }
  return {
    width: o,
    height: u,
    x: a + re(t),
    y: s
  };
}
function Jr(t) {
  var e, r = z(t), n = ee(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, o = Q(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), u = Q(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), a = -n.scrollLeft + re(t), s = -n.scrollTop;
  return q(i || r).direction === "rtl" && (a += Q(r.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: u,
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
function yt(t, e) {
  var r;
  e === void 0 && (e = []);
  var n = Xe(t), i = n === ((r = t.ownerDocument) == null ? void 0 : r.body), o = T(n), u = i ? [o].concat(o.visualViewport || [], ne(n) ? n : []) : n, a = e.concat(u);
  return i ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(yt(Mt(u)))
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
  var e = yt(Mt(t)), r = ["absolute", "fixed"].indexOf(q(t).position) >= 0, n = r && L(t) ? $t(t) : t;
  return Z(n) ? e.filter(function(i) {
    return Z(i) && Ve(i, n) && V(i) !== "body";
  }) : [];
}
function Zr(t, e, r, n) {
  var i = e === "clippingParents" ? Qr(t) : [].concat(e), o = [].concat(i, [r]), u = o[0], a = o.reduce(function(s, f) {
    var c = Oe(t, f, n);
    return s.top = Q(c.top, s.top), s.right = Lt(c.right, s.right), s.bottom = Lt(c.bottom, s.bottom), s.left = Q(c.left, s.left), s;
  }, Oe(t, u, n));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Ye(t) {
  var e = t.reference, r = t.element, n = t.placement, i = n ? H(n) : null, o = n ? ct(n) : null, u = e.x + e.width / 2 - r.width / 2, a = e.y + e.height / 2 - r.height / 2, s;
  switch (i) {
    case S:
      s = {
        x: u,
        y: e.y - r.height
      };
      break;
    case M:
      s = {
        x: u,
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
    var c = f === "y" ? "height" : "width";
    switch (o) {
      case at:
        s[f] = s[f] - (e[c] / 2 - r[c] / 2);
        break;
      case xt:
        s[f] = s[f] + (e[c] / 2 - r[c] / 2);
        break;
    }
  }
  return s;
}
function Ot(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, i = n === void 0 ? t.placement : n, o = r.strategy, u = o === void 0 ? t.strategy : o, a = r.boundary, s = a === void 0 ? wr : a, f = r.rootBoundary, c = f === void 0 ? Ie : f, l = r.elementContext, y = l === void 0 ? dt : l, d = r.altBoundary, x = d === void 0 ? !1 : d, m = r.padding, w = m === void 0 ? 0 : m, O = Fe(typeof w != "number" ? w : ze(w, Et)), h = y === dt ? br : dt, g = t.rects.popper, p = t.elements[x ? h : y], v = Zr(Z(p) ? p : p.contextElement || z(t.elements.popper), s, c, u), b = ft(t.elements.reference), _ = Ye({
    reference: b,
    element: g,
    strategy: "absolute",
    placement: i
  }), k = Jt(Object.assign({}, g, _)), $ = y === dt ? k : b, E = {
    top: v.top - $.top + O.top,
    bottom: $.bottom - v.bottom + O.bottom,
    left: v.left - $.left + O.left,
    right: $.right - v.right + O.right
  }, P = t.modifiersData.offset;
  if (y === dt && P) {
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
  var r = e, n = r.placement, i = r.boundary, o = r.rootBoundary, u = r.padding, a = r.flipVariations, s = r.allowedAutoPlacements, f = s === void 0 ? Ne : s, c = ct(n), l = c ? a ? ye : ye.filter(function(x) {
    return ct(x) === c;
  }) : Et, y = l.filter(function(x) {
    return f.indexOf(x) >= 0;
  });
  y.length === 0 && (y = l);
  var d = y.reduce(function(x, m) {
    return x[m] = Ot(t, {
      placement: m,
      boundary: i,
      rootBoundary: o,
      padding: u
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
    for (var i = r.mainAxis, o = i === void 0 ? !0 : i, u = r.altAxis, a = u === void 0 ? !0 : u, s = r.fallbackPlacements, f = r.padding, c = r.boundary, l = r.rootBoundary, y = r.altBoundary, d = r.flipVariations, x = d === void 0 ? !0 : d, m = r.allowedAutoPlacements, w = e.options.placement, O = H(w), h = O === w, g = s || (h || !x ? [Tt(w)] : en(w)), p = [w].concat(g).reduce(function(tt, F) {
      return tt.concat(H(F) === Kt ? tn(e, {
        placement: F,
        boundary: c,
        rootBoundary: l,
        padding: f,
        flipVariations: x,
        allowedAutoPlacements: m
      }) : F);
    }, []), v = e.rects.reference, b = e.rects.popper, _ = /* @__PURE__ */ new Map(), k = !0, $ = p[0], E = 0; E < p.length; E++) {
      var P = p[E], I = H(P), D = ct(P) === at, X = [S, M].indexOf(I) >= 0, Y = X ? "width" : "height", R = Ot(e, {
        placement: P,
        boundary: c,
        rootBoundary: l,
        altBoundary: y,
        padding: f
      }), N = X ? D ? W : j : D ? M : S;
      v[Y] > b[Y] && (N = Tt(N));
      var At = Tt(N), U = [];
      if (o && U.push(R[I] <= 0), a && U.push(R[N] <= 0, R[At] <= 0), U.every(function(tt) {
        return tt;
      })) {
        $ = P, k = !1;
        break;
      }
      _.set(P, U);
    }
    if (k)
      for (var kt = x ? 3 : 1, Wt = function(F) {
        var lt = p.find(function(Dt) {
          var G = _.get(Dt);
          if (G)
            return G.slice(0, F).every(function(It) {
              return It;
            });
        });
        if (lt)
          return $ = lt, "break";
      }, ut = kt; ut > 0; ut--) {
        var Pt = Wt(ut);
        if (Pt === "break")
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
  var e = t.state, r = t.name, n = e.rects.reference, i = e.rects.popper, o = e.modifiersData.preventOverflow, u = Ot(e, {
    elementContext: "reference"
  }), a = Ot(e, {
    altBoundary: !0
  }), s = _e(u, n), f = _e(a, i, o), c = Ee(s), l = Ee(f);
  e.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: f,
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
  var n = H(t), i = [j, S].indexOf(n) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, e, {
    placement: t
  })) : r, u = o[0], a = o[1];
  return u = u || 0, a = (a || 0) * i, [j, W].indexOf(n) >= 0 ? {
    x: a,
    y: u
  } : {
    x: u,
    y: a
  };
}
function fn(t) {
  var e = t.state, r = t.options, n = t.name, i = r.offset, o = i === void 0 ? [0, 0] : i, u = Ne.reduce(function(c, l) {
    return c[l] = sn(l, e.rects, o), c;
  }, {}), a = u[e.placement], s = a.x, f = a.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += s, e.modifiersData.popperOffsets.y += f), e.modifiersData[n] = u;
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
  var e = t.state, r = t.options, n = t.name, i = r.mainAxis, o = i === void 0 ? !0 : i, u = r.altAxis, a = u === void 0 ? !1 : u, s = r.boundary, f = r.rootBoundary, c = r.altBoundary, l = r.padding, y = r.tether, d = y === void 0 ? !0 : y, x = r.tetherOffset, m = x === void 0 ? 0 : x, w = Ot(e, {
    boundary: s,
    rootBoundary: f,
    padding: l,
    altBoundary: c
  }), O = H(e.placement), h = ct(e.placement), g = !h, p = te(O), v = pn(p), b = e.modifiersData.popperOffsets, _ = e.rects.reference, k = e.rects.popper, $ = typeof m == "function" ? m(Object.assign({}, e.rects, {
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
      var D, X = p === "y" ? S : j, Y = p === "y" ? M : W, R = p === "y" ? "height" : "width", N = b[p], At = N + w[X], U = N - w[Y], kt = d ? -k[R] / 2 : 0, Wt = h === at ? _[R] : k[R], ut = h === at ? -k[R] : -_[R], Pt = e.elements.arrow, tt = d && Pt ? Zt(Pt) : {
        width: 0,
        height: 0
      }, F = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : qe(), lt = F[X], Dt = F[Y], G = gt(0, _[R], tt[R]), It = g ? _[R] / 2 - kt - G - lt - E.mainAxis : Wt - G - lt - E.mainAxis, Ue = g ? -_[R] / 2 + kt + G + Dt + E.mainAxis : ut + G + Dt + E.mainAxis, Nt = e.elements.arrow && $t(e.elements.arrow), Ge = Nt ? p === "y" ? Nt.clientTop || 0 : Nt.clientLeft || 0 : 0, ie = (D = P == null ? void 0 : P[p]) != null ? D : 0, Je = N + It - ie - Ge, Ke = N + Ue - ie, oe = gt(d ? Lt(At, Je) : At, N, d ? Q(U, Ke) : U);
      b[p] = oe, I[p] = oe - N;
    }
    if (a) {
      var ae, Qe = p === "x" ? S : j, Ze = p === "x" ? M : W, J = b[v], Ct = v === "y" ? "height" : "width", se = J + w[Qe], fe = J - w[Ze], Ht = [S, j].indexOf(O) !== -1, ce = (ae = P == null ? void 0 : P[v]) != null ? ae : 0, ue = Ht ? se : J - _[Ct] - k[Ct] - ce + E.altAxis, le = Ht ? J + _[Ct] + k[Ct] - ce - E.altAxis : fe, pe = d && Ht ? Lr(ue, J, le) : gt(d ? ue : se, J, d ? le : fe);
      b[v] = pe, I[v] = pe - J;
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
  var n = L(e), i = L(e) && gn(e), o = z(e), u = ft(t, i, r), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((V(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ne(o)) && (a = mn(e)), L(e) ? (s = ft(e, !0), s.x += e.clientLeft, s.y += e.clientTop) : o && (s.x = re(o))), {
    x: u.left + a.scrollLeft - s.x,
    y: u.top + a.scrollTop - s.y,
    width: u.width,
    height: u.height
  };
}
function wn(t) {
  var e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  t.forEach(function(o) {
    e.set(o.name, o);
  });
  function i(o) {
    r.add(o.name);
    var u = [].concat(o.requires || [], o.requiresIfExists || []);
    u.forEach(function(a) {
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
    var c = {
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
    }, l = [], y = !1, d = {
      state: c,
      setOptions: function(O) {
        var h = typeof O == "function" ? O(c.options) : O;
        m(), c.options = Object.assign({}, o, c.options, h), c.scrollParents = {
          reference: Z(a) ? yt(a) : a.contextElement ? yt(a.contextElement) : [],
          popper: yt(s)
        };
        var g = bn(On([].concat(n, c.options.modifiers)));
        return c.orderedModifiers = g.filter(function(p) {
          return p.enabled;
        }), x(), d.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!y) {
          var O = c.elements, h = O.reference, g = O.popper;
          if (Ae(h, g)) {
            c.rects = {
              reference: yn(h, $t(g), c.options.strategy === "fixed"),
              popper: Zt(g)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(E) {
              return c.modifiersData[E.name] = Object.assign({}, E.data);
            });
            for (var p = 0; p < c.orderedModifiers.length; p++) {
              if (c.reset === !0) {
                c.reset = !1, p = -1;
                continue;
              }
              var v = c.orderedModifiers[p], b = v.fn, _ = v.options, k = _ === void 0 ? {} : _, $ = v.name;
              typeof b == "function" && (c = b({
                state: c,
                options: k,
                name: $,
                instance: d
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: xn(function() {
        return new Promise(function(w) {
          d.forceUpdate(), w(c);
        });
      }),
      destroy: function() {
        m(), y = !0;
      }
    };
    if (!Ae(a, s))
      return d;
    d.setOptions(f).then(function(w) {
      !y && f.onFirstUpdate && f.onFirstUpdate(w);
    });
    function x() {
      c.orderedModifiers.forEach(function(w) {
        var O = w.name, h = w.options, g = h === void 0 ? {} : h, p = w.effect;
        if (typeof p == "function") {
          var v = p({
            state: c,
            name: O,
            instance: d,
            options: g
          }), b = function() {
          };
          l.push(v || b);
        }
      });
    }
    function m() {
      l.forEach(function(w) {
        return w();
      }), l = [];
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
      wt(n, e, i);
    },
    p: it,
    d(n) {
      n && ot(e);
    }
  };
}
function Pn(t) {
  let e, r, n, i, o, u, a = (
    /*optItem*/
    t[0].popover.title + ""
  ), s, f, c, l = (
    /*optItem*/
    t[0].popover.description + ""
  ), y, d, x, m, w, O, h, g, p = (
    /*piglogo*/
    t[1] && kn(t)
  );
  return {
    c() {
      e = B("div"), r = B("div"), n = B("div"), p && p.c(), i = vt(), o = B("div"), u = B("h2"), s = Ft(a), f = vt(), c = B("p"), y = Ft(l), d = vt(), x = B("div"), m = B("button"), m.textContent = "结束引导", w = vt(), O = B("div"), A(u, "class", "font-700 text-18px leading-24px text-hex-000"), A(c, "class", "text-14px mt-8px tracking-2px leading-20px text-hex-666 max-h-200px overflow-y-auto"), A(o, "class", "pl-10px"), A(n, "class", "tip__wapper flex items-start"), A(m, "class", "text-12px text-hex-888 cursor-pointer pt-10px"), A(x, "class", "flex justify-end"), A(r, "class", "p-15px"), A(O, "id", "arrow"), A(O, "data-popper-arrow", ""), A(O, "class", "svelte-9kkx30"), A(e, "class", "web-guide__tip svelte-9kkx30"), A(e, "id", "web-guide__tooltip"), A(e, "role", "tooltip");
    },
    m(v, b) {
      wt(v, e, b), C(e, r), C(r, n), p && p.m(n, null), C(n, i), C(n, o), C(o, u), C(u, s), C(o, f), C(o, c), C(c, y), C(r, d), C(r, x), C(x, m), C(e, w), C(e, O), h || (g = ar(
        m,
        "click",
        /*endHandle*/
        t[2]
      ), h = !0);
    },
    p(v, [b]) {
      /*piglogo*/
      v[1] && p.p(v, b), b & /*optItem*/
      1 && a !== (a = /*optItem*/
      v[0].popover.title + "") && ve(s, a), b & /*optItem*/
      1 && l !== (l = /*optItem*/
      v[0].popover.description + "") && ve(y, l);
    },
    i: it,
    o: it,
    d(v) {
      v && ot(e), p && p.d(), h = !1, g();
    }
  };
}
function Dn(t, e, r) {
  const n = cr();
  let { optItem: i } = e, { settings: o } = e;
  const u = o.logo, a = async (f) => {
    const c = Ut(f.element), l = document.querySelector("#web-guide__tooltip");
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
  }, [i, u, s, o];
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
      e = B("div"), r = vt(), mr(n.$$.fragment), A(e, "class", "web-guide__overlay svelte-tgr6dn");
    },
    m(o, u) {
      wt(o, e, u), wt(o, r, u), Te(n, o, u), i = !0;
    },
    p(o, u) {
      const a = {};
      u & /*step*/
      4 && (a.optItem = /*stepArr*/
      o[3][
        /*step*/
        o[2]
      ]), u & /*settings*/
      1 && (a.settings = /*settings*/
      o[0]), n.$set(a);
    },
    i(o) {
      i || (mt(n.$$.fragment, o), i = !0);
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
      wt(i, e, o), n && n.m(e, null), r = !0;
    },
    p(i, [o]) {
      /*showGuide*/
      i[1] ? n ? (n.p(i, o), o & /*showGuide*/
      2 && mt(n, 1)) : (n = ke(i), n.c(), mt(n, 1), n.m(e, null)) : n && (vr(), Yt(n, 1, 1, () => {
        n = null;
      }), hr());
    },
    i(i) {
      r || (mt(n), r = !0);
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
  let o = !1, u = !1, a = !1, s = n.immediate, f = 0, c = {};
  async function l() {
    let h = i[f];
    return Ut(h.element);
  }
  const y = async () => {
    var h;
    r(1, o = !0);
    try {
      const g = await l(), { width: p } = g.getBoundingClientRect();
      c = ge(g), console.log("ele", g, c), pt(g, {
        position: "relative",
        zIndex: "9999998",
        width: p + "px",
        boxShadow: "rgba(33, 33, 33, 0.8) 0px 0px 1px 2px, rgba(33, 33, 33, 0.5) 0px 0px 0px 5000px"
      });
      const v = async () => {
        var b, _;
        if (pt(g, c), g.removeEventListener((b = i[f]) == null ? void 0 : b.trigger, () => {
        }), !d())
          return !1;
        r(1, o = !1), setTimeout(
          async () => {
            c = {}, await y();
          },
          ((_ = i[f]) == null ? void 0 : _.delayed) ?? Rt
        );
      };
      n.immediate && g.addEventListener((h = i[f]) == null ? void 0 : h.trigger, v);
    } catch {
      r(1, o = !1), r(2, f = 0), x();
    }
  }, d = () => o ? f >= i.length - 1 ? (m(), !1) : (r(2, f = f + 1), !0) : !1, x = () => {
    const h = document.querySelectorAll("#web-guide");
    h && h.forEach((g, p) => {
      p >= 1 && g.remove();
    });
  }, m = async () => {
    r(1, o = !1), u = !0;
    const h = await l();
    pt(h, c), r(2, f = 0), x();
  };
  s && Re(() => {
    setTimeout(
      async () => {
        await y();
      },
      i[f].delayed ?? Rt
    );
  });
  async function w(h) {
    if (!a)
      return !1;
    if (!h.id || !h.status)
      return console.warn("id or status is not exist"), !1;
    if (u)
      return !1;
    r(1, o = !1);
    const g = i.findIndex((v) => v.id === h.id);
    if (h.status === "finish")
      return m(), !1;
    if (h.status === "pause") {
      const v = await l();
      return console.log("oldStyles", c), pt(v, c), !1;
    }
    const p = await l();
    if (g > 0) {
      const v = Ut(i[g - 1].element);
      pt(v, c);
    }
    r(2, f = g), c = ge(p), setTimeout(
      async () => {
        await y();
      },
      i[f].delayed ?? Rt
    );
  }
  function O() {
    if (u)
      return !1;
    r(1, o = !1), r(2, f = 0), a = !0, setTimeout(
      async () => {
        await y();
      },
      i[f].delayed ?? Rt
    );
  }
  return console.info("v0.0.7"), t.$$set = (h) => {
    "settings" in h && r(0, n = h.settings);
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
