var Ze = Object.defineProperty;
var tr = (t, e, r) => e in t ? Ze(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Ht = (t, e, r) => (tr(t, typeof e != "symbol" ? e + "" : e, r), r);
function ot() {
}
function ke(t) {
  return t();
}
function le() {
  return /* @__PURE__ */ Object.create(null);
}
function Ot(t) {
  t.forEach(ke);
}
function Ae(t) {
  return typeof t == "function";
}
function Pe(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let Ct;
function er(t, e) {
  return t === e ? !0 : (Ct || (Ct = document.createElement("a")), Ct.href = e, t === Ct.href);
}
function rr(t) {
  return Object.keys(t).length === 0;
}
function C(t, e) {
  t.appendChild(e);
}
function De(t, e, r) {
  const n = nr(t);
  if (!n.getElementById(e)) {
    const i = B("style");
    i.id = e, i.textContent = r, ir(n, i);
  }
}
function nr(t) {
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
function at(t, e, r) {
  t.insertBefore(e, r || null);
}
function Z(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function B(t) {
  return document.createElement(t);
}
function Bt(t) {
  return document.createTextNode(t);
}
function vt() {
  return Bt(" ");
}
function or() {
  return Bt("");
}
function ar(t, e, r, n) {
  return t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n);
}
function k(t, e, r) {
  r == null ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r);
}
function sr(t) {
  return Array.from(t.childNodes);
}
function pe(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function fr(t, e, { bubbles: r = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: r, cancelable: n });
}
let wt;
function ht(t) {
  wt = t;
}
function Ce() {
  if (!wt)
    throw new Error("Function called outside component initialization");
  return wt;
}
function cr(t) {
  Ce().$$.on_mount.push(t);
}
function ur() {
  const t = Ce();
  return (e, r, { cancelable: n = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const o = fr(
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
const nt = [], de = [];
let it = [];
const ve = [], lr = /* @__PURE__ */ Promise.resolve();
let Ft = !1;
function pr() {
  Ft || (Ft = !0, lr.then(Se));
}
function zt(t) {
  it.push(t);
}
const Vt = /* @__PURE__ */ new Set();
let rt = 0;
function Se() {
  if (rt !== 0)
    return;
  const t = wt;
  do {
    try {
      for (; rt < nt.length; ) {
        const e = nt[rt];
        rt++, ht(e), dr(e.$$);
      }
    } catch (e) {
      throw nt.length = 0, rt = 0, e;
    }
    for (ht(null), nt.length = 0, rt = 0; de.length; )
      de.pop()();
    for (let e = 0; e < it.length; e += 1) {
      const r = it[e];
      Vt.has(r) || (Vt.add(r), r());
    }
    it.length = 0;
  } while (nt.length);
  for (; ve.length; )
    ve.pop()();
  Ft = !1, Vt.clear(), ht(t);
}
function dr(t) {
  if (t.fragment !== null) {
    t.update(), Ot(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(zt);
  }
}
function vr(t) {
  const e = [], r = [];
  it.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : r.push(n)), r.forEach((n) => n()), it = e;
}
const jt = /* @__PURE__ */ new Set();
let K;
function hr() {
  K = {
    r: 0,
    c: [],
    p: K
    // parent group
  };
}
function mr() {
  K.r || Ot(K.c), K = K.p;
}
function mt(t, e) {
  t && t.i && (jt.delete(t), t.i(e));
}
function Xt(t, e, r, n) {
  if (t && t.o) {
    if (jt.has(t))
      return;
    jt.add(t), K.c.push(() => {
      jt.delete(t), n && (r && t.d(1), n());
    }), t.o(e);
  } else
    n && n();
}
function gr(t) {
  t && t.c();
}
function je(t, e, r) {
  const { fragment: n, after_update: i } = t.$$;
  n && n.m(e, r), zt(() => {
    const o = t.$$.on_mount.map(ke).filter(Ae);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : Ot(o), t.$$.on_mount = [];
  }), i.forEach(zt);
}
function Re(t, e) {
  const r = t.$$;
  r.fragment !== null && (vr(r.after_update), Ot(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function yr(t, e) {
  t.$$.dirty[0] === -1 && (nt.push(t), pr(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Be(t, e, r, n, i, o, f, a = [-1]) {
  const s = wt;
  ht(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: ot,
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
  if (u.ctx = r ? r(t, e.props || {}, (p, m, ...l) => {
    const v = l.length ? l[0] : m;
    return u.ctx && i(u.ctx[p], u.ctx[p] = v) && (!u.skip_bound && u.bound[p] && u.bound[p](v), c && yr(t, p)), m;
  }) : [], u.update(), c = !0, Ot(u.before_update), u.fragment = n ? n(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const p = sr(e.target);
      u.fragment && u.fragment.l(p), p.forEach(Z);
    } else
      u.fragment && u.fragment.c();
    e.intro && mt(t.$$.fragment), je(t, e.target, e.anchor), Se();
  }
  ht(s);
}
class Te {
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
    Re(this, 1), this.$destroy = ot;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, r) {
    if (!Ae(r))
      return ot;
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
    this.$$set && !rr(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const wr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(wr);
const Le = (t) => new Promise((e, r) => {
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
}, br = (t) => {
  if (!t)
    return {};
  const e = t.style.position, r = t.style.zIndex, n = t.style.boxShadow;
  return {
    position: e,
    zIndex: r,
    boxShadow: n
  };
};
var S = "top", M = "bottom", W = "right", j = "left", Gt = "auto", _t = [S, M, W, j], st = "start", bt = "end", xr = "clippingParents", Me = "viewport", dt = "popper", Or = "reference", he = /* @__PURE__ */ _t.reduce(function(t, e) {
  return t.concat([e + "-" + st, e + "-" + bt]);
}, []), We = /* @__PURE__ */ [].concat(_t, [Gt]).reduce(function(t, e) {
  return t.concat([e, e + "-" + st, e + "-" + bt]);
}, []), _r = "beforeRead", Er = "read", $r = "afterRead", kr = "beforeMain", Ar = "main", Pr = "afterMain", Dr = "beforeWrite", Cr = "write", Sr = "afterWrite", jr = [_r, Er, $r, kr, Ar, Pr, Dr, Cr, Sr];
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
function tt(t) {
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
function Rr(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(r) {
    var n = e.styles[r] || {}, i = e.attributes[r] || {}, o = e.elements[r];
    !L(o) || !V(o) || (Object.assign(o.style, n), Object.keys(i).forEach(function(f) {
      var a = i[f];
      a === !1 ? o.removeAttribute(f) : o.setAttribute(f, a === !0 ? "" : a);
    }));
  });
}
function Br(t) {
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
      !L(i) || !V(i) || (Object.assign(i.style, a), Object.keys(o).forEach(function(s) {
        i.removeAttribute(s);
      }));
    });
  };
}
const Tr = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Rr,
  effect: Br,
  requires: ["computeStyles"]
};
function H(t) {
  return t.split("-")[0];
}
var Q = Math.max, Tt = Math.min, ft = Math.round;
function Yt() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function Ie() {
  return !/^((?!chrome|android).)*safari/i.test(Yt());
}
function ct(t, e, r) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  var n = t.getBoundingClientRect(), i = 1, o = 1;
  e && L(t) && (i = t.offsetWidth > 0 && ft(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && ft(n.height) / t.offsetHeight || 1);
  var f = tt(t) ? T(t) : window, a = f.visualViewport, s = !Ie() && r, u = (n.left + (s && a ? a.offsetLeft : 0)) / i, c = (n.top + (s && a ? a.offsetTop : 0)) / o, p = n.width / i, m = n.height / o;
  return {
    width: p,
    height: m,
    top: c,
    right: u + p,
    bottom: c + m,
    left: u,
    x: u,
    y: c
  };
}
function Kt(t) {
  var e = ct(t), r = t.offsetWidth, n = t.offsetHeight;
  return Math.abs(e.width - r) <= 1 && (r = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: r,
    height: n
  };
}
function Ne(t, e) {
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
function q(t) {
  return T(t).getComputedStyle(t);
}
function Lr(t) {
  return ["table", "td", "th"].indexOf(V(t)) >= 0;
}
function z(t) {
  return ((tt(t) ? t.ownerDocument : (
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
    (Jt(t) ? t.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    z(t)
  );
}
function me(t) {
  return !L(t) || // https://github.com/popperjs/popper-core/issues/837
  q(t).position === "fixed" ? null : t.offsetParent;
}
function Mr(t) {
  var e = /firefox/i.test(Yt()), r = /Trident/i.test(Yt());
  if (r && L(t)) {
    var n = q(t);
    if (n.position === "fixed")
      return null;
  }
  var i = Lt(t);
  for (Jt(i) && (i = i.host); L(i) && ["html", "body"].indexOf(V(i)) < 0; ) {
    var o = q(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Et(t) {
  for (var e = T(t), r = me(t); r && Lr(r) && q(r).position === "static"; )
    r = me(r);
  return r && (V(r) === "html" || V(r) === "body" && q(r).position === "static") ? e : r || Mr(t) || e;
}
function Qt(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function gt(t, e, r) {
  return Q(t, Tt(e, r));
}
function Wr(t, e, r) {
  var n = gt(t, e, r);
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
function Ve(t) {
  return Object.assign({}, He(), t);
}
function qe(t, e) {
  return e.reduce(function(r, n) {
    return r[n] = t, r;
  }, {});
}
var Ir = function(e, r) {
  return e = typeof e == "function" ? e(Object.assign({}, r.rects, {
    placement: r.placement
  })) : e, Ve(typeof e != "number" ? e : qe(e, _t));
};
function Nr(t) {
  var e, r = t.state, n = t.name, i = t.options, o = r.elements.arrow, f = r.modifiersData.popperOffsets, a = H(r.placement), s = Qt(a), u = [j, W].indexOf(a) >= 0, c = u ? "height" : "width";
  if (!(!o || !f)) {
    var p = Ir(i.padding, r), m = Kt(o), l = s === "y" ? S : j, v = s === "y" ? M : W, h = r.rects.reference[c] + r.rects.reference[s] - f[s] - r.rects.popper[c], y = f[s] - r.rects.reference[s], b = Et(o), x = b ? s === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, O = h / 2 - y / 2, d = p[l], g = x - m[c] - p[v], w = x / 2 - m[c] / 2 + O, _ = gt(d, w, g), A = s;
    r.modifiersData[n] = (e = {}, e[A] = _, e.centerOffset = _ - w, e);
  }
}
function Hr(t) {
  var e = t.state, r = t.options, n = r.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || Ne(e.elements.popper, i) && (e.elements.arrow = i));
}
const Vr = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Nr,
  effect: Hr,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ut(t) {
  return t.split("-")[1];
}
var qr = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Fr(t, e) {
  var r = t.x, n = t.y, i = e.devicePixelRatio || 1;
  return {
    x: ft(r * i) / i || 0,
    y: ft(n * i) / i || 0
  };
}
function ge(t) {
  var e, r = t.popper, n = t.popperRect, i = t.placement, o = t.variation, f = t.offsets, a = t.position, s = t.gpuAcceleration, u = t.adaptive, c = t.roundOffsets, p = t.isFixed, m = f.x, l = m === void 0 ? 0 : m, v = f.y, h = v === void 0 ? 0 : v, y = typeof c == "function" ? c({
    x: l,
    y: h
  }) : {
    x: l,
    y: h
  };
  l = y.x, h = y.y;
  var b = f.hasOwnProperty("x"), x = f.hasOwnProperty("y"), O = j, d = S, g = window;
  if (u) {
    var w = Et(r), _ = "clientHeight", A = "clientWidth";
    if (w === T(r) && (w = z(r), q(w).position !== "static" && a === "absolute" && (_ = "scrollHeight", A = "scrollWidth")), w = w, i === S || (i === j || i === W) && o === bt) {
      d = M;
      var $ = p && w === g && g.visualViewport ? g.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[_]
      );
      h -= $ - n.height, h *= s ? 1 : -1;
    }
    if (i === j || (i === S || i === M) && o === bt) {
      O = W;
      var E = p && w === g && g.visualViewport ? g.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[A]
      );
      l -= E - n.width, l *= s ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: a
  }, u && qr), I = c === !0 ? Fr({
    x: l,
    y: h
  }, T(r)) : {
    x: l,
    y: h
  };
  if (l = I.x, h = I.y, s) {
    var D;
    return Object.assign({}, P, (D = {}, D[d] = x ? "0" : "", D[O] = b ? "0" : "", D.transform = (g.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + h + "px)" : "translate3d(" + l + "px, " + h + "px, 0)", D));
  }
  return Object.assign({}, P, (e = {}, e[d] = x ? h + "px" : "", e[O] = b ? l + "px" : "", e.transform = "", e));
}
function zr(t) {
  var e = t.state, r = t.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, o = r.adaptive, f = o === void 0 ? !0 : o, a = r.roundOffsets, s = a === void 0 ? !0 : a, u = {
    placement: H(e.placement),
    variation: ut(e.placement),
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
const Xr = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: zr,
  data: {}
};
var St = {
  passive: !0
};
function Yr(t) {
  var e = t.state, r = t.instance, n = t.options, i = n.scroll, o = i === void 0 ? !0 : i, f = n.resize, a = f === void 0 ? !0 : f, s = T(e.elements.popper), u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, St);
  }), a && s.addEventListener("resize", r.update, St), function() {
    o && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, St);
    }), a && s.removeEventListener("resize", r.update, St);
  };
}
const Ur = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Yr,
  data: {}
};
var Gr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Rt(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return Gr[e];
  });
}
var Jr = {
  start: "end",
  end: "start"
};
function ye(t) {
  return t.replace(/start|end/g, function(e) {
    return Jr[e];
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
  return ct(z(t)).left + Zt(t).scrollLeft;
}
function Kr(t, e) {
  var r = T(t), n = z(t), i = r.visualViewport, o = n.clientWidth, f = n.clientHeight, a = 0, s = 0;
  if (i) {
    o = i.width, f = i.height;
    var u = Ie();
    (u || !u && e === "fixed") && (a = i.offsetLeft, s = i.offsetTop);
  }
  return {
    width: o,
    height: f,
    x: a + te(t),
    y: s
  };
}
function Qr(t) {
  var e, r = z(t), n = Zt(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, o = Q(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), f = Q(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), a = -n.scrollLeft + te(t), s = -n.scrollTop;
  return q(i || r).direction === "rtl" && (a += Q(r.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: f,
    x: a,
    y: s
  };
}
function ee(t) {
  var e = q(t), r = e.overflow, n = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Fe(t) {
  return ["html", "body", "#document"].indexOf(V(t)) >= 0 ? t.ownerDocument.body : L(t) && ee(t) ? t : Fe(Lt(t));
}
function yt(t, e) {
  var r;
  e === void 0 && (e = []);
  var n = Fe(t), i = n === ((r = t.ownerDocument) == null ? void 0 : r.body), o = T(n), f = i ? [o].concat(o.visualViewport || [], ee(n) ? n : []) : n, a = e.concat(f);
  return i ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(yt(Lt(f)))
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
function Zr(t, e) {
  var r = ct(t, !1, e === "fixed");
  return r.top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r;
}
function we(t, e, r) {
  return e === Me ? Ut(Kr(t, r)) : tt(e) ? Zr(e, r) : Ut(Qr(z(t)));
}
function tn(t) {
  var e = yt(Lt(t)), r = ["absolute", "fixed"].indexOf(q(t).position) >= 0, n = r && L(t) ? Et(t) : t;
  return tt(n) ? e.filter(function(i) {
    return tt(i) && Ne(i, n) && V(i) !== "body";
  }) : [];
}
function en(t, e, r, n) {
  var i = e === "clippingParents" ? tn(t) : [].concat(e), o = [].concat(i, [r]), f = o[0], a = o.reduce(function(s, u) {
    var c = we(t, u, n);
    return s.top = Q(c.top, s.top), s.right = Tt(c.right, s.right), s.bottom = Tt(c.bottom, s.bottom), s.left = Q(c.left, s.left), s;
  }, we(t, f, n));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function ze(t) {
  var e = t.reference, r = t.element, n = t.placement, i = n ? H(n) : null, o = n ? ut(n) : null, f = e.x + e.width / 2 - r.width / 2, a = e.y + e.height / 2 - r.height / 2, s;
  switch (i) {
    case S:
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
  var u = i ? Qt(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (o) {
      case st:
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
  var r = e, n = r.placement, i = n === void 0 ? t.placement : n, o = r.strategy, f = o === void 0 ? t.strategy : o, a = r.boundary, s = a === void 0 ? xr : a, u = r.rootBoundary, c = u === void 0 ? Me : u, p = r.elementContext, m = p === void 0 ? dt : p, l = r.altBoundary, v = l === void 0 ? !1 : l, h = r.padding, y = h === void 0 ? 0 : h, b = Ve(typeof y != "number" ? y : qe(y, _t)), x = m === dt ? Or : dt, O = t.rects.popper, d = t.elements[v ? x : m], g = en(tt(d) ? d : d.contextElement || z(t.elements.popper), s, c, f), w = ct(t.elements.reference), _ = ze({
    reference: w,
    element: O,
    strategy: "absolute",
    placement: i
  }), A = Ut(Object.assign({}, O, _)), $ = m === dt ? A : w, E = {
    top: g.top - $.top + b.top,
    bottom: $.bottom - g.bottom + b.bottom,
    left: g.left - $.left + b.left,
    right: $.right - g.right + b.right
  }, P = t.modifiersData.offset;
  if (m === dt && P) {
    var I = P[i];
    Object.keys(E).forEach(function(D) {
      var X = [W, M].indexOf(D) >= 0 ? 1 : -1, Y = [S, M].indexOf(D) >= 0 ? "y" : "x";
      E[D] += I[Y] * X;
    });
  }
  return E;
}
function rn(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, i = r.boundary, o = r.rootBoundary, f = r.padding, a = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? We : s, c = ut(n), p = c ? a ? he : he.filter(function(v) {
    return ut(v) === c;
  }) : _t, m = p.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  m.length === 0 && (m = p);
  var l = m.reduce(function(v, h) {
    return v[h] = xt(t, {
      placement: h,
      boundary: i,
      rootBoundary: o,
      padding: f
    })[H(h)], v;
  }, {});
  return Object.keys(l).sort(function(v, h) {
    return l[v] - l[h];
  });
}
function nn(t) {
  if (H(t) === Gt)
    return [];
  var e = Rt(t);
  return [ye(t), e, ye(e)];
}
function on(t) {
  var e = t.state, r = t.options, n = t.name;
  if (!e.modifiersData[n]._skip) {
    for (var i = r.mainAxis, o = i === void 0 ? !0 : i, f = r.altAxis, a = f === void 0 ? !0 : f, s = r.fallbackPlacements, u = r.padding, c = r.boundary, p = r.rootBoundary, m = r.altBoundary, l = r.flipVariations, v = l === void 0 ? !0 : l, h = r.allowedAutoPlacements, y = e.options.placement, b = H(y), x = b === y, O = s || (x || !v ? [Rt(y)] : nn(y)), d = [y].concat(O).reduce(function(et, F) {
      return et.concat(H(F) === Gt ? rn(e, {
        placement: F,
        boundary: c,
        rootBoundary: p,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: h
      }) : F);
    }, []), g = e.rects.reference, w = e.rects.popper, _ = /* @__PURE__ */ new Map(), A = !0, $ = d[0], E = 0; E < d.length; E++) {
      var P = d[E], I = H(P), D = ut(P) === st, X = [S, M].indexOf(I) >= 0, Y = X ? "width" : "height", R = xt(e, {
        placement: P,
        boundary: c,
        rootBoundary: p,
        altBoundary: m,
        padding: u
      }), N = X ? D ? W : j : D ? M : S;
      g[Y] > w[Y] && (N = Rt(N));
      var $t = Rt(N), U = [];
      if (o && U.push(R[I] <= 0), a && U.push(R[N] <= 0, R[$t] <= 0), U.every(function(et) {
        return et;
      })) {
        $ = P, A = !1;
        break;
      }
      _.set(P, U);
    }
    if (A)
      for (var kt = v ? 3 : 1, Mt = function(F) {
        var pt = d.find(function(Pt) {
          var G = _.get(Pt);
          if (G)
            return G.slice(0, F).every(function(Wt) {
              return Wt;
            });
        });
        if (pt)
          return $ = pt, "break";
      }, lt = kt; lt > 0; lt--) {
        var At = Mt(lt);
        if (At === "break")
          break;
      }
    e.placement !== $ && (e.modifiersData[n]._skip = !0, e.placement = $, e.reset = !0);
  }
}
const an = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: on,
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
  return [S, W, M, j].some(function(e) {
    return t[e] >= 0;
  });
}
function sn(t) {
  var e = t.state, r = t.name, n = e.rects.reference, i = e.rects.popper, o = e.modifiersData.preventOverflow, f = xt(e, {
    elementContext: "reference"
  }), a = xt(e, {
    altBoundary: !0
  }), s = be(f, n), u = be(a, i, o), c = xe(s), p = xe(u);
  e.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: p
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": p
  });
}
const fn = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: sn
};
function cn(t, e, r) {
  var n = H(t), i = [j, S].indexOf(n) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, e, {
    placement: t
  })) : r, f = o[0], a = o[1];
  return f = f || 0, a = (a || 0) * i, [j, W].indexOf(n) >= 0 ? {
    x: a,
    y: f
  } : {
    x: f,
    y: a
  };
}
function un(t) {
  var e = t.state, r = t.options, n = t.name, i = r.offset, o = i === void 0 ? [0, 0] : i, f = We.reduce(function(c, p) {
    return c[p] = cn(p, e.rects, o), c;
  }, {}), a = f[e.placement], s = a.x, u = a.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += s, e.modifiersData.popperOffsets.y += u), e.modifiersData[n] = f;
}
const ln = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: un
};
function pn(t) {
  var e = t.state, r = t.name;
  e.modifiersData[r] = ze({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const dn = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: pn,
  data: {}
};
function vn(t) {
  return t === "x" ? "y" : "x";
}
function hn(t) {
  var e = t.state, r = t.options, n = t.name, i = r.mainAxis, o = i === void 0 ? !0 : i, f = r.altAxis, a = f === void 0 ? !1 : f, s = r.boundary, u = r.rootBoundary, c = r.altBoundary, p = r.padding, m = r.tether, l = m === void 0 ? !0 : m, v = r.tetherOffset, h = v === void 0 ? 0 : v, y = xt(e, {
    boundary: s,
    rootBoundary: u,
    padding: p,
    altBoundary: c
  }), b = H(e.placement), x = ut(e.placement), O = !x, d = Qt(b), g = vn(d), w = e.modifiersData.popperOffsets, _ = e.rects.reference, A = e.rects.popper, $ = typeof h == "function" ? h(Object.assign({}, e.rects, {
    placement: e.placement
  })) : h, E = typeof $ == "number" ? {
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
      var D, X = d === "y" ? S : j, Y = d === "y" ? M : W, R = d === "y" ? "height" : "width", N = w[d], $t = N + y[X], U = N - y[Y], kt = l ? -A[R] / 2 : 0, Mt = x === st ? _[R] : A[R], lt = x === st ? -A[R] : -_[R], At = e.elements.arrow, et = l && At ? Kt(At) : {
        width: 0,
        height: 0
      }, F = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : He(), pt = F[X], Pt = F[Y], G = gt(0, _[R], et[R]), Wt = O ? _[R] / 2 - kt - G - pt - E.mainAxis : Mt - G - pt - E.mainAxis, Ye = O ? -_[R] / 2 + kt + G + Pt + E.mainAxis : lt + G + Pt + E.mainAxis, It = e.elements.arrow && Et(e.elements.arrow), Ue = It ? d === "y" ? It.clientTop || 0 : It.clientLeft || 0 : 0, re = (D = P == null ? void 0 : P[d]) != null ? D : 0, Ge = N + Wt - re - Ue, Je = N + Ye - re, ne = gt(l ? Tt($t, Ge) : $t, N, l ? Q(U, Je) : U);
      w[d] = ne, I[d] = ne - N;
    }
    if (a) {
      var ie, Ke = d === "x" ? S : j, Qe = d === "x" ? M : W, J = w[g], Dt = g === "y" ? "height" : "width", oe = J + y[Ke], ae = J - y[Qe], Nt = [S, j].indexOf(b) !== -1, se = (ie = P == null ? void 0 : P[g]) != null ? ie : 0, fe = Nt ? oe : J - _[Dt] - A[Dt] - se + E.altAxis, ce = Nt ? J + _[Dt] + A[Dt] - se - E.altAxis : ae, ue = l && Nt ? Wr(fe, J, ce) : gt(l ? fe : oe, J, l ? ce : ae);
      w[g] = ue, I[g] = ue - J;
    }
    e.modifiersData[n] = I;
  }
}
const mn = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: hn,
  requiresIfExists: ["offset"]
};
function gn(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function yn(t) {
  return t === T(t) || !L(t) ? Zt(t) : gn(t);
}
function wn(t) {
  var e = t.getBoundingClientRect(), r = ft(e.width) / t.offsetWidth || 1, n = ft(e.height) / t.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function bn(t, e, r) {
  r === void 0 && (r = !1);
  var n = L(e), i = L(e) && wn(e), o = z(e), f = ct(t, i, r), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((V(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ee(o)) && (a = yn(e)), L(e) ? (s = ct(e, !0), s.x += e.clientLeft, s.y += e.clientTop) : o && (s.x = te(o))), {
    x: f.left + a.scrollLeft - s.x,
    y: f.top + a.scrollTop - s.y,
    width: f.width,
    height: f.height
  };
}
function xn(t) {
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
function On(t) {
  var e = xn(t);
  return jr.reduce(function(r, n) {
    return r.concat(e.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function _n(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(r) {
      Promise.resolve().then(function() {
        e = void 0, r(t());
      });
    })), e;
  };
}
function En(t) {
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
function $n(t) {
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
    }, p = [], m = !1, l = {
      state: c,
      setOptions: function(b) {
        var x = typeof b == "function" ? b(c.options) : b;
        h(), c.options = Object.assign({}, o, c.options, x), c.scrollParents = {
          reference: tt(a) ? yt(a) : a.contextElement ? yt(a.contextElement) : [],
          popper: yt(s)
        };
        var O = On(En([].concat(n, c.options.modifiers)));
        return c.orderedModifiers = O.filter(function(d) {
          return d.enabled;
        }), v(), l.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!m) {
          var b = c.elements, x = b.reference, O = b.popper;
          if (_e(x, O)) {
            c.rects = {
              reference: bn(x, Et(O), c.options.strategy === "fixed"),
              popper: Kt(O)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(E) {
              return c.modifiersData[E.name] = Object.assign({}, E.data);
            });
            for (var d = 0; d < c.orderedModifiers.length; d++) {
              if (c.reset === !0) {
                c.reset = !1, d = -1;
                continue;
              }
              var g = c.orderedModifiers[d], w = g.fn, _ = g.options, A = _ === void 0 ? {} : _, $ = g.name;
              typeof w == "function" && (c = w({
                state: c,
                options: A,
                name: $,
                instance: l
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: _n(function() {
        return new Promise(function(y) {
          l.forceUpdate(), y(c);
        });
      }),
      destroy: function() {
        h(), m = !0;
      }
    };
    if (!_e(a, s))
      return l;
    l.setOptions(u).then(function(y) {
      !m && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function v() {
      c.orderedModifiers.forEach(function(y) {
        var b = y.name, x = y.options, O = x === void 0 ? {} : x, d = y.effect;
        if (typeof d == "function") {
          var g = d({
            state: c,
            name: b,
            instance: l,
            options: O
          }), w = function() {
          };
          p.push(g || w);
        }
      });
    }
    function h() {
      p.forEach(function(y) {
        return y();
      }), p = [];
    }
    return l;
  };
}
var kn = [Ur, dn, Xr, Tr, ln, an, mn, Vr, fn], An = /* @__PURE__ */ $n({
  defaultModifiers: kn
});
const Xe = 100;
function Pn(t) {
  De(t, "svelte-9kkx30", '.web-guide__tip.svelte-9kkx30{background-color:#fff;z-index:9999999;border-radius:10px;max-width:340px}#arrow.svelte-9kkx30,#arrow.svelte-9kkx30::before{position:absolute;width:20px;height:20px;background:inherit}#arrow.svelte-9kkx30{visibility:hidden}#arrow.svelte-9kkx30::before{visibility:visible;content:"";transform:rotate(45deg)}');
}
function Ee(t) {
  let e, r, n, i, o, f, a = (
    /*optItem*/
    t[0].popover.title + ""
  ), s, u, c, p = (
    /*optItem*/
    t[0].popover.description + ""
  ), m, l, v, h, y, b, x, O, d = (
    /*piglogo*/
    t[2] && Dn(t)
  );
  return {
    c() {
      e = B("div"), r = B("div"), n = B("div"), d && d.c(), i = vt(), o = B("div"), f = B("h2"), s = Bt(a), u = vt(), c = B("p"), m = Bt(p), l = vt(), v = B("div"), h = B("button"), h.textContent = "结束引导", y = vt(), b = B("div"), k(f, "class", "font-700 text-18px leading-24px text-hex-000"), k(c, "class", "text-14px mt-8px tracking-2px leading-20px text-hex-666 max-h-200px overflow-y-auto"), k(o, "class", "pl-10px"), k(n, "class", "tip__wapper flex items-start"), k(h, "class", "text-12px text-hex-888 cursor-pointer pt-10px"), k(v, "class", "flex justify-end"), k(r, "class", "p-15px"), k(b, "id", "arrow"), k(b, "data-popper-arrow", ""), k(b, "class", "svelte-9kkx30"), k(e, "class", "web-guide__tip svelte-9kkx30"), k(e, "id", "web-guide__tooltip"), k(e, "role", "tooltip");
    },
    m(g, w) {
      at(g, e, w), C(e, r), C(r, n), d && d.m(n, null), C(n, i), C(n, o), C(o, f), C(f, s), C(o, u), C(o, c), C(c, m), C(r, l), C(r, v), C(v, h), C(e, y), C(e, b), x || (O = ar(
        h,
        "click",
        /*endHandle*/
        t[3]
      ), x = !0);
    },
    p(g, w) {
      /*piglogo*/
      g[2] && d.p(g, w), w & /*optItem*/
      1 && a !== (a = /*optItem*/
      g[0].popover.title + "") && pe(s, a), w & /*optItem*/
      1 && p !== (p = /*optItem*/
      g[0].popover.description + "") && pe(m, p);
    },
    d(g) {
      g && Z(e), d && d.d(), x = !1, O();
    }
  };
}
function Dn(t) {
  let e, r;
  return {
    c() {
      e = B("img"), er(e.src, r = /*piglogo*/
      t[2]) || k(e, "src", r), k(e, "class", "w-80px"), k(e, "alt", "");
    },
    m(n, i) {
      at(n, e, i);
    },
    p: ot,
    d(n) {
      n && Z(e);
    }
  };
}
function Cn(t) {
  let e, r = (
    /*showContent*/
    t[1] && Ee(t)
  );
  return {
    c() {
      r && r.c(), e = or();
    },
    m(n, i) {
      r && r.m(n, i), at(n, e, i);
    },
    p(n, [i]) {
      /*showContent*/
      n[1] ? r ? r.p(n, i) : (r = Ee(n), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null);
    },
    i: ot,
    o: ot,
    d(n) {
      n && Z(e), r && r.d(n);
    }
  };
}
function Sn(t, e, r) {
  const n = ur();
  let i = !1, { optItem: o } = e, { settings: f } = e;
  const a = f.logo, s = async (c) => {
    const p = await Le(c.element), m = document.querySelector("#web-guide__tooltip");
    An(p, m, {
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
  s(o);
  const u = () => {
    n("guideFinish");
  };
  return t.$$set = (c) => {
    "optItem" in c && r(0, o = c.optItem), "settings" in c && r(4, f = c.settings);
  }, t.$$.update = () => {
    t.$$.dirty & /*optItem*/
    1 && (r(1, i = !1), setTimeout(
      () => {
        s(o), r(1, i = !0);
      },
      o.delayed ?? Xe
    ));
  }, [o, i, a, u, f];
}
class jn extends Te {
  constructor(e) {
    super(), Be(this, e, Sn, Cn, Pe, { optItem: 0, settings: 4 }, Pn);
  }
}
function Rn(t) {
  De(t, "svelte-tgr6dn", ".web-guide__overlay.svelte-tgr6dn{inset:0px;position:fixed;cursor:pointer;box-sizing:content-box;z-index:999990;opacity:0;transition:all 0.3s ease-out}");
}
function $e(t) {
  let e, r, n, i;
  return n = new jn({
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
      e = B("div"), e.textContent = "111", r = vt(), gr(n.$$.fragment), k(e, "class", "web-guide__overlay svelte-tgr6dn");
    },
    m(o, f) {
      at(o, e, f), at(o, r, f), je(n, o, f), i = !0;
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
      i || (mt(n.$$.fragment, o), i = !0);
    },
    o(o) {
      Xt(n.$$.fragment, o), i = !1;
    },
    d(o) {
      o && (Z(e), Z(r)), Re(n, o);
    }
  };
}
function Bn(t) {
  let e, r, n = !/*finish*/
  t[1] && /*playGuide*/
  t[2] && $e(t);
  return {
    c() {
      e = B("div"), n && n.c(), k(e, "style", "");
    },
    m(i, o) {
      at(i, e, o), n && n.m(e, null), r = !0;
    },
    p(i, [o]) {
      !/*finish*/
      i[1] && /*playGuide*/
      i[2] ? n ? (n.p(i, o), o & /*finish, playGuide*/
      6 && mt(n, 1)) : (n = $e(i), n.c(), mt(n, 1), n.m(e, null)) : n && (hr(), Xt(n, 1, 1, () => {
        n = null;
      }), mr());
    },
    i(i) {
      r || (mt(n), r = !0);
    },
    o(i) {
      Xt(n), r = !1;
    },
    d(i) {
      i && Z(e), n && n.d();
    }
  };
}
function Tn(t, e, r) {
  let { settings: n } = e;
  const i = n.stepArr;
  let o = !1, f = n.immediate, a = 0, s = {};
  async function u() {
    let l = i[a];
    return await Le(l.element);
  }
  const c = async () => {
    let l = i[a];
    const v = await u(), { width: h } = v.getBoundingClientRect();
    s = br(v), qt(v, {
      position: "relative",
      zIndex: "9999998",
      width: h + "px",
      boxShadow: "rgba(33, 33, 33, 0.8) 0px 0px 1px 2px, rgba(33, 33, 33, 0.5) 0px 0px 0px 5000px"
    }), v.addEventListener(l.trigger, async () => {
      if (qt(v, s), v.removeEventListener(l.trigger, () => {
      }), r(3, a = a + 1), a >= i.length)
        return r(3, a = a - 1), p(), !1;
      setTimeout(
        async () => {
          s = {}, await c();
        },
        l.delayed ?? Xe
      );
    });
  }, p = async () => {
    r(1, o = !0);
    const l = await u();
    qt(l, s), l.style.boxShadow = s.boxShadow;
  };
  f && cr(c);
  function m({ step: l }) {
    r(2, f = !0), r(3, a), c();
  }
  return t.$$set = (l) => {
    "settings" in l && r(0, n = l.settings);
  }, [n, o, f, a, i, p, m];
}
class Mn extends Te {
  constructor(e) {
    super(), Be(this, e, Tn, Bn, Pe, { settings: 0, next: 6 }, Rn);
  }
  get next() {
    return this.$$.ctx[6];
  }
}
const Wn = (t) => t;
export {
  Mn as default,
  Wn as defineConfig
};