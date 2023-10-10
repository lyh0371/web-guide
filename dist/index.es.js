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
function je(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let Ct;
function rr(t, e) {
  return t === e ? !0 : (Ct || (Ct = document.createElement("a")), Ct.href = e, t === Ct.href);
}
function nr(t) {
  return Object.keys(t).length === 0;
}
function j(t, e) {
  t.appendChild(e);
}
function Ce(t, e, r) {
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
  return j(
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
let xt;
function ht(t) {
  xt = t;
}
function Se() {
  if (!xt)
    throw new Error("Function called outside component initialization");
  return xt;
}
function Re(t) {
  Se().$$.on_mount.push(t);
}
function cr() {
  const t = Se();
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
  const t = xt;
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
  const s = xt;
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
  if (f.ctx = r ? r(t, e.props || {}, (p, y, ...d) => {
    const x = d.length ? d[0] : y;
    return f.ctx && i(f.ctx[p], f.ctx[p] = x) && (!f.skip_bound && f.bound[p] && f.bound[p](x), c && gr(t, p)), y;
  }) : [], f.update(), c = !0, _t(f.before_update), f.fragment = n ? n(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const p = sr(e.target);
      f.fragment && f.fragment.l(p), p.forEach(ot);
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
var C = "top", M = "bottom", W = "right", S = "left", Kt = "auto", Et = [C, M, W, S], at = "start", bt = "end", wr = "clippingParents", Ie = "viewport", dt = "popper", xr = "reference", ye = /* @__PURE__ */ Et.reduce(function(t, e) {
  return t.concat([e + "-" + at, e + "-" + bt]);
}, []), Ne = /* @__PURE__ */ [].concat(Et, [Kt]).reduce(function(t, e) {
  return t.concat([e, e + "-" + at, e + "-" + bt]);
}, []), br = "beforeRead", Or = "read", _r = "afterRead", Er = "beforeMain", $r = "main", kr = "afterMain", Ar = "beforeWrite", Pr = "write", Dr = "afterWrite", jr = [br, Or, _r, Er, $r, kr, Ar, Pr, Dr];
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
function Cr(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(r) {
    var n = e.styles[r] || {}, i = e.attributes[r] || {}, o = e.elements[r];
    !L(o) || !V(o) || (Object.assign(o.style, n), Object.keys(i).forEach(function(u) {
      var a = i[u];
      a === !1 ? o.removeAttribute(u) : o.setAttribute(u, a === !0 ? "" : a);
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
  fn: Cr,
  effect: Sr,
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
  var u = Z(t) ? T(t) : window, a = u.visualViewport, s = !He() && r, f = (n.left + (s && a ? a.offsetLeft : 0)) / i, c = (n.top + (s && a ? a.offsetTop : 0)) / o, p = n.width / i, y = n.height / o;
  return {
    width: p,
    height: y,
    top: c,
    right: f + p,
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
  var e, r = t.state, n = t.name, i = t.options, o = r.elements.arrow, u = r.modifiersData.popperOffsets, a = H(r.placement), s = te(a), f = [S, W].indexOf(a) >= 0, c = f ? "height" : "width";
  if (!(!o || !u)) {
    var p = Mr(i.padding, r), y = Zt(o), d = s === "y" ? C : S, x = s === "y" ? M : W, g = r.rects.reference[c] + r.rects.reference[s] - u[s] - r.rects.popper[c], w = u[s] - r.rects.reference[s], b = $t(o), O = b ? s === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, h = g / 2 - w / 2, l = p[d], v = O - y[c] - p[x], m = O / 2 - y[c] / 2 + h, _ = gt(l, m, v), E = s;
    r.modifiersData[n] = (e = {}, e[E] = _, e.centerOffset = _ - m, e);
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
function xe(t) {
  var e, r = t.popper, n = t.popperRect, i = t.placement, o = t.variation, u = t.offsets, a = t.position, s = t.gpuAcceleration, f = t.adaptive, c = t.roundOffsets, p = t.isFixed, y = u.x, d = y === void 0 ? 0 : y, x = u.y, g = x === void 0 ? 0 : x, w = typeof c == "function" ? c({
    x: d,
    y: g
  }) : {
    x: d,
    y: g
  };
  d = w.x, g = w.y;
  var b = u.hasOwnProperty("x"), O = u.hasOwnProperty("y"), h = S, l = C, v = window;
  if (f) {
    var m = $t(r), _ = "clientHeight", E = "clientWidth";
    if (m === T(r) && (m = z(r), q(m).position !== "static" && a === "absolute" && (_ = "scrollHeight", E = "scrollWidth")), m = m, i === C || (i === S || i === W) && o === bt) {
      l = M;
      var k = p && m === v && v.visualViewport ? v.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        m[_]
      );
      g -= k - n.height, g *= s ? 1 : -1;
    }
    if (i === S || (i === C || i === M) && o === bt) {
      h = W;
      var $ = p && m === v && v.visualViewport ? v.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        m[E]
      );
      d -= $ - n.width, d *= s ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: a
  }, f && Hr), I = c === !0 ? Vr({
    x: d,
    y: g
  }, T(r)) : {
    x: d,
    y: g
  };
  if (d = I.x, g = I.y, s) {
    var D;
    return Object.assign({}, P, (D = {}, D[l] = O ? "0" : "", D[h] = b ? "0" : "", D.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + g + "px)" : "translate3d(" + d + "px, " + g + "px, 0)", D));
  }
  return Object.assign({}, P, (e = {}, e[l] = O ? g + "px" : "", e[h] = b ? d + "px" : "", e.transform = "", e));
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
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, xe(Object.assign({}, f, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: u,
    roundOffsets: s
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, xe(Object.assign({}, f, {
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
var St = {
  passive: !0
};
function zr(t) {
  var e = t.state, r = t.instance, n = t.options, i = n.scroll, o = i === void 0 ? !0 : i, u = n.resize, a = u === void 0 ? !0 : u, s = T(e.elements.popper), f = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && f.forEach(function(c) {
    c.addEventListener("scroll", r.update, St);
  }), a && s.addEventListener("resize", r.update, St), function() {
    o && f.forEach(function(c) {
      c.removeEventListener("scroll", r.update, St);
    }), a && s.removeEventListener("resize", r.update, St);
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
function be(t) {
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
    case C:
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
  var f = i ? te(i) : null;
  if (f != null) {
    var c = f === "y" ? "height" : "width";
    switch (o) {
      case at:
        s[f] = s[f] - (e[c] / 2 - r[c] / 2);
        break;
      case bt:
        s[f] = s[f] + (e[c] / 2 - r[c] / 2);
        break;
    }
  }
  return s;
}
function Ot(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, i = n === void 0 ? t.placement : n, o = r.strategy, u = o === void 0 ? t.strategy : o, a = r.boundary, s = a === void 0 ? wr : a, f = r.rootBoundary, c = f === void 0 ? Ie : f, p = r.elementContext, y = p === void 0 ? dt : p, d = r.altBoundary, x = d === void 0 ? !1 : d, g = r.padding, w = g === void 0 ? 0 : g, b = Fe(typeof w != "number" ? w : ze(w, Et)), O = y === dt ? xr : dt, h = t.rects.popper, l = t.elements[x ? O : y], v = Zr(Z(l) ? l : l.contextElement || z(t.elements.popper), s, c, u), m = ft(t.elements.reference), _ = Ye({
    reference: m,
    element: h,
    strategy: "absolute",
    placement: i
  }), E = Jt(Object.assign({}, h, _)), k = y === dt ? E : m, $ = {
    top: v.top - k.top + b.top,
    bottom: k.bottom - v.bottom + b.bottom,
    left: v.left - k.left + b.left,
    right: k.right - v.right + b.right
  }, P = t.modifiersData.offset;
  if (y === dt && P) {
    var I = P[i];
    Object.keys($).forEach(function(D) {
      var X = [W, M].indexOf(D) >= 0 ? 1 : -1, Y = [C, M].indexOf(D) >= 0 ? "y" : "x";
      $[D] += I[Y] * X;
    });
  }
  return $;
}
function tn(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, i = r.boundary, o = r.rootBoundary, u = r.padding, a = r.flipVariations, s = r.allowedAutoPlacements, f = s === void 0 ? Ne : s, c = ct(n), p = c ? a ? ye : ye.filter(function(x) {
    return ct(x) === c;
  }) : Et, y = p.filter(function(x) {
    return f.indexOf(x) >= 0;
  });
  y.length === 0 && (y = p);
  var d = y.reduce(function(x, g) {
    return x[g] = Ot(t, {
      placement: g,
      boundary: i,
      rootBoundary: o,
      padding: u
    })[H(g)], x;
  }, {});
  return Object.keys(d).sort(function(x, g) {
    return d[x] - d[g];
  });
}
function en(t) {
  if (H(t) === Kt)
    return [];
  var e = Tt(t);
  return [be(t), e, be(e)];
}
function rn(t) {
  var e = t.state, r = t.options, n = t.name;
  if (!e.modifiersData[n]._skip) {
    for (var i = r.mainAxis, o = i === void 0 ? !0 : i, u = r.altAxis, a = u === void 0 ? !0 : u, s = r.fallbackPlacements, f = r.padding, c = r.boundary, p = r.rootBoundary, y = r.altBoundary, d = r.flipVariations, x = d === void 0 ? !0 : d, g = r.allowedAutoPlacements, w = e.options.placement, b = H(w), O = b === w, h = s || (O || !x ? [Tt(w)] : en(w)), l = [w].concat(h).reduce(function(tt, F) {
      return tt.concat(H(F) === Kt ? tn(e, {
        placement: F,
        boundary: c,
        rootBoundary: p,
        padding: f,
        flipVariations: x,
        allowedAutoPlacements: g
      }) : F);
    }, []), v = e.rects.reference, m = e.rects.popper, _ = /* @__PURE__ */ new Map(), E = !0, k = l[0], $ = 0; $ < l.length; $++) {
      var P = l[$], I = H(P), D = ct(P) === at, X = [C, M].indexOf(I) >= 0, Y = X ? "width" : "height", R = Ot(e, {
        placement: P,
        boundary: c,
        rootBoundary: p,
        altBoundary: y,
        padding: f
      }), N = X ? D ? W : S : D ? M : C;
      v[Y] > m[Y] && (N = Tt(N));
      var kt = Tt(N), U = [];
      if (o && U.push(R[I] <= 0), a && U.push(R[N] <= 0, R[kt] <= 0), U.every(function(tt) {
        return tt;
      })) {
        k = P, E = !1;
        break;
      }
      _.set(P, U);
    }
    if (E)
      for (var At = x ? 3 : 1, Wt = function(F) {
        var lt = l.find(function(Dt) {
          var G = _.get(Dt);
          if (G)
            return G.slice(0, F).every(function(It) {
              return It;
            });
        });
        if (lt)
          return k = lt, "break";
      }, ut = At; ut > 0; ut--) {
        var Pt = Wt(ut);
        if (Pt === "break")
          break;
      }
    e.placement !== k && (e.modifiersData[n]._skip = !0, e.placement = k, e.reset = !0);
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
  return [C, W, M, S].some(function(e) {
    return t[e] >= 0;
  });
}
function on(t) {
  var e = t.state, r = t.name, n = e.rects.reference, i = e.rects.popper, o = e.modifiersData.preventOverflow, u = Ot(e, {
    elementContext: "reference"
  }), a = Ot(e, {
    altBoundary: !0
  }), s = _e(u, n), f = _e(a, i, o), c = Ee(s), p = Ee(f);
  e.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: f,
    isReferenceHidden: c,
    hasPopperEscaped: p
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": c,
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
  var n = H(t), i = [S, C].indexOf(n) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, e, {
    placement: t
  })) : r, u = o[0], a = o[1];
  return u = u || 0, a = (a || 0) * i, [S, W].indexOf(n) >= 0 ? {
    x: a,
    y: u
  } : {
    x: u,
    y: a
  };
}
function fn(t) {
  var e = t.state, r = t.options, n = t.name, i = r.offset, o = i === void 0 ? [0, 0] : i, u = Ne.reduce(function(c, p) {
    return c[p] = sn(p, e.rects, o), c;
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
  var e = t.state, r = t.options, n = t.name, i = r.mainAxis, o = i === void 0 ? !0 : i, u = r.altAxis, a = u === void 0 ? !1 : u, s = r.boundary, f = r.rootBoundary, c = r.altBoundary, p = r.padding, y = r.tether, d = y === void 0 ? !0 : y, x = r.tetherOffset, g = x === void 0 ? 0 : x, w = Ot(e, {
    boundary: s,
    rootBoundary: f,
    padding: p,
    altBoundary: c
  }), b = H(e.placement), O = ct(e.placement), h = !O, l = te(b), v = pn(l), m = e.modifiersData.popperOffsets, _ = e.rects.reference, E = e.rects.popper, k = typeof g == "function" ? g(Object.assign({}, e.rects, {
    placement: e.placement
  })) : g, $ = typeof k == "number" ? {
    mainAxis: k,
    altAxis: k
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, k), P = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, I = {
    x: 0,
    y: 0
  };
  if (m) {
    if (o) {
      var D, X = l === "y" ? C : S, Y = l === "y" ? M : W, R = l === "y" ? "height" : "width", N = m[l], kt = N + w[X], U = N - w[Y], At = d ? -E[R] / 2 : 0, Wt = O === at ? _[R] : E[R], ut = O === at ? -E[R] : -_[R], Pt = e.elements.arrow, tt = d && Pt ? Zt(Pt) : {
        width: 0,
        height: 0
      }, F = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : qe(), lt = F[X], Dt = F[Y], G = gt(0, _[R], tt[R]), It = h ? _[R] / 2 - At - G - lt - $.mainAxis : Wt - G - lt - $.mainAxis, Ue = h ? -_[R] / 2 + At + G + Dt + $.mainAxis : ut + G + Dt + $.mainAxis, Nt = e.elements.arrow && $t(e.elements.arrow), Ge = Nt ? l === "y" ? Nt.clientTop || 0 : Nt.clientLeft || 0 : 0, ie = (D = P == null ? void 0 : P[l]) != null ? D : 0, Je = N + It - ie - Ge, Ke = N + Ue - ie, oe = gt(d ? Lt(kt, Je) : kt, N, d ? Q(U, Ke) : U);
      m[l] = oe, I[l] = oe - N;
    }
    if (a) {
      var ae, Qe = l === "x" ? C : S, Ze = l === "x" ? M : W, J = m[v], jt = v === "y" ? "height" : "width", se = J + w[Qe], fe = J - w[Ze], Ht = [C, S].indexOf(b) !== -1, ce = (ae = P == null ? void 0 : P[v]) != null ? ae : 0, ue = Ht ? se : J - _[jt] - E[jt] - ce + $.altAxis, le = Ht ? J + _[jt] + E[jt] - ce - $.altAxis : fe, pe = d && Ht ? Lr(ue, J, le) : gt(d ? ue : se, J, d ? le : fe);
      m[v] = pe, I[v] = pe - J;
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
function xn(t) {
  var e = wn(t);
  return jr.reduce(function(r, n) {
    return r.concat(e.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function bn(t) {
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
function ke() {
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
    }, p = [], y = !1, d = {
      state: c,
      setOptions: function(b) {
        var O = typeof b == "function" ? b(c.options) : b;
        g(), c.options = Object.assign({}, o, c.options, O), c.scrollParents = {
          reference: Z(a) ? yt(a) : a.contextElement ? yt(a.contextElement) : [],
          popper: yt(s)
        };
        var h = xn(On([].concat(n, c.options.modifiers)));
        return c.orderedModifiers = h.filter(function(l) {
          return l.enabled;
        }), x(), d.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!y) {
          var b = c.elements, O = b.reference, h = b.popper;
          if (ke(O, h)) {
            c.rects = {
              reference: yn(O, $t(h), c.options.strategy === "fixed"),
              popper: Zt(h)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function($) {
              return c.modifiersData[$.name] = Object.assign({}, $.data);
            });
            for (var l = 0; l < c.orderedModifiers.length; l++) {
              if (c.reset === !0) {
                c.reset = !1, l = -1;
                continue;
              }
              var v = c.orderedModifiers[l], m = v.fn, _ = v.options, E = _ === void 0 ? {} : _, k = v.name;
              typeof m == "function" && (c = m({
                state: c,
                options: E,
                name: k,
                instance: d
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: bn(function() {
        return new Promise(function(w) {
          d.forceUpdate(), w(c);
        });
      }),
      destroy: function() {
        g(), y = !0;
      }
    };
    if (!ke(a, s))
      return d;
    d.setOptions(f).then(function(w) {
      !y && f.onFirstUpdate && f.onFirstUpdate(w);
    });
    function x() {
      c.orderedModifiers.forEach(function(w) {
        var b = w.name, O = w.options, h = O === void 0 ? {} : O, l = w.effect;
        if (typeof l == "function") {
          var v = l({
            state: c,
            name: b,
            instance: d,
            options: h
          }), m = function() {
          };
          p.push(v || m);
        }
      });
    }
    function g() {
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
function kn(t) {
  Ce(t, "svelte-9kkx30", '.web-guide__tip.svelte-9kkx30{background-color:#fff;z-index:9999999;border-radius:10px;max-width:340px}#arrow.svelte-9kkx30,#arrow.svelte-9kkx30::before{position:absolute;width:20px;height:20px;background:inherit}#arrow.svelte-9kkx30{visibility:hidden}#arrow.svelte-9kkx30::before{visibility:visible;content:"";transform:rotate(45deg)}');
}
function An(t) {
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
  ), s, f, c, p = (
    /*optItem*/
    t[0].popover.description + ""
  ), y, d, x, g, w, b, O, h, l = (
    /*piglogo*/
    t[1] && An(t)
  );
  return {
    c() {
      e = B("div"), r = B("div"), n = B("div"), l && l.c(), i = vt(), o = B("div"), u = B("h2"), s = Ft(a), f = vt(), c = B("p"), y = Ft(p), d = vt(), x = B("div"), g = B("button"), g.textContent = "结束引导", w = vt(), b = B("div"), A(u, "class", "font-700 text-18px leading-24px text-hex-000"), A(c, "class", "text-14px mt-8px tracking-2px leading-20px text-hex-666 max-h-200px overflow-y-auto"), A(o, "class", "pl-10px"), A(n, "class", "tip__wapper flex items-start"), A(g, "class", "text-12px text-hex-888 cursor-pointer pt-10px"), A(x, "class", "flex justify-end"), A(r, "class", "p-15px"), A(b, "id", "arrow"), A(b, "data-popper-arrow", ""), A(b, "class", "svelte-9kkx30"), A(e, "class", "web-guide__tip svelte-9kkx30"), A(e, "id", "web-guide__tooltip"), A(e, "role", "tooltip");
    },
    m(v, m) {
      wt(v, e, m), j(e, r), j(r, n), l && l.m(n, null), j(n, i), j(n, o), j(o, u), j(u, s), j(o, f), j(o, c), j(c, y), j(r, d), j(r, x), j(x, g), j(e, w), j(e, b), O || (h = ar(
        g,
        "click",
        /*endHandle*/
        t[2]
      ), O = !0);
    },
    p(v, [m]) {
      /*piglogo*/
      v[1] && l.p(v, m), m & /*optItem*/
      1 && a !== (a = /*optItem*/
      v[0].popover.title + "") && ve(s, a), m & /*optItem*/
      1 && p !== (p = /*optItem*/
      v[0].popover.description + "") && ve(y, p);
    },
    i: it,
    o: it,
    d(v) {
      v && ot(e), l && l.d(), O = !1, h();
    }
  };
}
function Dn(t, e, r) {
  const n = cr();
  let { optItem: i } = e, { settings: o } = e;
  const u = o.logo, a = async (f) => {
    const c = Ut(f.element), p = document.querySelector("#web-guide__tooltip");
    $n(c, p, {
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
class jn extends We {
  constructor(e) {
    super(), Me(this, e, Dn, Pn, je, { optItem: 0, settings: 3 }, kn);
  }
}
const Cn = "@liuyahui666/web-guide", Sn = "0.0.9", Rn = "module", Bn = "与框架无关的前端动态新手引导组件", Tn = "index.js", Ln = "./index.es.js", Mn = "./lib/index.d.ts", Wn = {
  name: Cn,
  version: Sn,
  type: Rn,
  description: Bn,
  main: Tn,
  module: Ln,
  types: Mn
};
function In(t) {
  Ce(t, "svelte-tgr6dn", ".web-guide__overlay.svelte-tgr6dn{inset:0px;position:fixed;cursor:pointer;box-sizing:content-box;z-index:999990;opacity:0;transition:all 0.3s ease-out}");
}
function Ae(t) {
  let e, r, n, i;
  return n = new jn({
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
function Nn(t) {
  let e, r, n = (
    /*showGuide*/
    t[1] && Ae(t)
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
      2 && mt(n, 1)) : (n = Ae(i), n.c(), mt(n, 1), n.m(e, null)) : n && (vr(), Yt(n, 1, 1, () => {
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
function Hn(t, e, r) {
  let { settings: n } = e;
  const i = n.stepArr;
  let o = !1, u = !1, a = !1, s = n.immediate || !1, f = 0, c = {};
  async function p() {
    let h = i[f];
    return Ut(h.element);
  }
  const y = async () => {
    var h;
    r(1, o = !0);
    try {
      const l = await p(), { width: v } = l.getBoundingClientRect();
      c = ge(l), pt(l, {
        position: "relative",
        zIndex: "9999998",
        width: v + "px",
        boxShadow: "rgba(33, 33, 33, 0.8) 0px 0px 1px 2px, rgba(33, 33, 33, 0.5) 0px 0px 0px 5000px"
      });
      const m = async () => {
        var _, E;
        if (pt(l, c), l.removeEventListener(((_ = i[f]) == null ? void 0 : _.trigger) || "click", () => {
        }), !d())
          return !1;
        r(1, o = !1), setTimeout(
          async () => {
            c = {}, await y();
          },
          ((E = i[f]) == null ? void 0 : E.delayed) ?? Rt
        );
      };
      n.immediate && l.addEventListener(((h = i[f]) == null ? void 0 : h.trigger) || "click", m);
    } catch {
      r(1, o = !1), r(2, f = 0), x();
    }
  }, d = () => o ? f >= i.length - 1 ? (g(), !1) : (r(2, f = f + 1), !0) : !1, x = () => {
    const h = document.querySelectorAll("#web-guide");
    h && h.forEach((l, v) => {
      v >= 1 && l.remove();
    });
  }, g = async () => {
    r(1, o = !1), u = !0;
    const h = await p();
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
    const l = i.findIndex((m) => m.id === h.id);
    if (h.status === "end") {
      const m = await p();
      return pt(m, c), !1;
    }
    const v = await p();
    if (l > 0) {
      const m = Ut(i[l - 1].element);
      pt(m, c);
    }
    r(2, f = l), c = ge(v), setTimeout(
      async () => {
        await y();
      },
      i[f].delayed ?? Rt
    );
  }
  function b() {
    r(1, o = !1), r(2, f = 0), a = !0, setTimeout(
      async () => {
        await y();
      },
      i[f].delayed ?? Rt
    );
  }
  function O() {
    g();
  }
  return console.info("web-guide当前使用版本", Wn.version), t.$$set = (h) => {
    "settings" in h && r(0, n = h.settings);
  }, [n, o, f, i, g, w, b, O];
}
class qn extends We {
  constructor(e) {
    super(), Me(this, e, Hn, Nn, je, { settings: 0, next: 5, start: 6, end: 7 }, In);
  }
  get next() {
    return this.$$.ctx[5];
  }
  get start() {
    return this.$$.ctx[6];
  }
  get end() {
    return this.$$.ctx[7];
  }
}
const Fn = (t) => t;
export {
  qn as default,
  Fn as defineConfig
};
