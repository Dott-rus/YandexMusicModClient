(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5623],
  {
    98463: function (t, e, a) {
      Promise.resolve().then(a.bind(a, 10032));
    },
    10032: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(9753),
        i = a(74717),
        r = a(95946);
      e.default = () => {
        let t = (0, i.useSearchParams)().get("metatagId");
        return t || (0, i.notFound)(), (0, n.jsx)(r.Fe, { metatagId: t });
      };
    },
    87908: function (t, e, a) {
      "use strict";
      a.d(e, {
        IT: function () {
          return l.ArtistCard;
        },
        xG: function () {
          return s.ArtistContextMenu;
        },
        o9: function () {
          return r;
        },
        Op: function () {
          return o;
        },
        v2: function () {
          return u.useArtistDisclaimer;
        },
      });
      var n = a(42288),
        i = a(33589);
      let r = n.V5.model("ArtistMeta", {
        artist: i.Go,
        lastMonthListeners: n.V5.maybe(n.V5.number),
      });
      var l = a(99654),
        s = a(54864);
      let o = function () {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          e = t.reduce((t, e) => {
            var a, n;
            return (
              t +
              (null !==
                (n =
                  null === (a = e.decomposed) || void 0 === a
                    ? void 0
                    : a.length) && void 0 !== n
                ? n
                : 0)
            );
          }, 0);
        return t.length + e;
      };
      var u = a(66975);
    },
    66975: function (t, e, a) {
      "use strict";
      a.d(e, {
        useArtistDisclaimer: function () {
          return l;
        },
      });
      var n = a(98639),
        i = a(3429),
        r = a(63394);
      let l = (t) => {
        let { artist: e, callback: a, shouldHistoryBack: l } = t,
          {
            disclaimer: s,
            modals: { disclaimerModal: o },
          } = (0, r.oR)(),
          u = (0, n.useRef)(String((0, i.Z)())),
          d = (0, n.useRef)(!1),
          c = (0, r.uK)().get(r.ce);
        return (
          (0, n.useEffect)(() => {
            s.isUnsafeDisclaimerConfirmed &&
              s.id === u.current &&
              !d.current &&
              (null == a || a(), (d.current = !0));
          }, [a, s.id, s.isUnsafeDisclaimerConfirmed]),
          (0, n.useCallback)(
            async (t) => {
              let n = c.get(r.BU.ExEx);
              if (
                (null == e ? void 0 : e.isUnsafeLegal) &&
                (null == n
                  ? void 0
                  : n.includes("".concat(r.co.ARTIST, "_").concat(e.id)))
              ) {
                null == a || a();
                return;
              }
              if (
                (null == e ? void 0 : e.isLegalRejected) ||
                (null == e ? void 0 : e.isUnsafeLegal)
              ) {
                null == t || t.preventDefault(),
                  await s.getArtistDisclaimer({ artistId: e.id }),
                  e.isUnsafeLegal && s.setType(r.Gq.UNSAFE),
                  s.setId(u.current),
                  s.setEntityId(e.id),
                  s.setEntityType(r.co.ARTIST),
                  s.setShouldHistoryBack(!!l),
                  (d.current = !1),
                  o.open();
                return;
              }
              null == t || t.preventDefault(), null == a || a();
            },
            [
              null == e ? void 0 : e.id,
              null == e ? void 0 : e.isLegalRejected,
              null == e ? void 0 : e.isUnsafeLegal,
              a,
              s,
              o,
              c,
              l,
            ],
          )
        );
      };
    },
    99654: function (t, e, a) {
      "use strict";
      a.d(e, {
        ArtistCard: function () {
          return E;
        },
      });
      var n = a(9753),
        i = a(60836),
        r = a(9544),
        l = a(98639),
        s = a(80542),
        o = a(31014),
        u = a(52122),
        d = a(23881),
        c = a(84338),
        g = a(39513),
        m = a(27491),
        p = a(28852),
        v = a(12404),
        _ = a(2570),
        f = a(33589),
        S = a(63394),
        N = a(67868),
        C = a(66975),
        b = a(54864),
        h = a(62914),
        y = a.n(h);
      let E = (0, r.Pi)((t) => {
        let { artist: e, className: a, children: r, contentLinesCount: h } = t,
          { ref: E, intersectionPropertyId: x } = (0, S.Vf)(),
          G = (0, S.x5)(),
          { formatMessage: T } = (0, s.Z)(),
          [P, V] = (0, l.useState)(!1),
          [A, k] = (0, l.useState)(!1),
          [j, D] = (0, l.useState)(!1),
          {
            sendLikeSearchFeedback: R,
            sendNavigateSearchFeedback: I,
            sendPlaySearchFeedback: L,
          } = (0, S.sA)(),
          W = (0, S.zx)(),
          O = (0, f.SB)(e),
          B = (0, f.BV)(e),
          { id: F, name: U, coverUri: w, isLiked: q } = e,
          z = (0, S.s0)(e.url),
          M = (0, S.s0)(e.url, !0),
          [J, Z] = (0, l.useState)(!1),
          Q = (0, l.useMemo)(() => {
            let t = T({ id: "entity-names.artist-name" }, { artistName: U }),
              e = q ? T({ id: "entity-names.has-your-like" }) : "";
            return "".concat(t, " ").concat(e);
          }, [U, q, T]),
          { isPlaying: K, togglePlay: H } = (0, S.qm)({
            playContextParams: {
              contextData: {
                type: c.Ak.Artist,
                meta: { id: Number(F) },
                from: G,
              },
              loadContextMeta: !0,
            },
          }),
          X = (0, C.useArtistDisclaimer)({ artist: e, callback: z }),
          Y = (0, C.useArtistDisclaimer)({ artist: e, callback: M }),
          $ = (0, C.useArtistDisclaimer)({ artist: e, callback: H }),
          tt = (0, f.ik)(Y, X),
          te = (0, l.useCallback)(
            (t) => {
              null == I || I(), W({ to: u.qU.ArtistScreen }), tt(t);
            },
            [I, W, tt],
          ),
          ta = (0, l.useCallback)(
            (t) => {
              te(t);
            },
            [te],
          ),
          tn = (0, l.useCallback)(() => {
            P || K || (V(!0), null == L || L()), $();
          }, [K, P, L, $]),
          ti = (0, l.useCallback)(() => {
            A || q || (k(!0), null == R || R()), O();
          }, [q, O, A, R]),
          tr = (0, l.useCallback)((t) => {
            t.preventDefault(), t.stopPropagation();
          }, []),
          tl = (0, l.useCallback)(() => {
            D(!j), Z(!j);
          }, [j]),
          ts = (0, l.useMemo)(
            () =>
              (0, n.jsx)(b.ArtistContextMenu, {
                artist: e,
                onOpenChange: tl,
                open: j,
                returnFocus: !1,
                reference: (0, n.jsx)(g.z, {
                  onClick: tr,
                  className: (0, i.W)(y().menuButton, y().control),
                  "aria-label": T({ id: "interface-actions.context-menu" }),
                  icon: (0, n.jsx)(p.J, { size: "xxs", variant: "more" }),
                  size: "s",
                  radius: "round",
                  ...(0, d.BA)(d.bG.artist.ARTIST_CONTEXT_MENU_BUTTON),
                }),
              }),
            [e, T, tr, tl, j],
          ),
          to = (0, l.useMemo)(() => {
            if (e.isAvailable)
              return (0, n.jsx)(m.kk, {
                isVisible: j || J,
                className: y().controls,
                radius: "round",
                playControl: (0, n.jsx)(N.JM, {
                  buttonVariant: "default",
                  withHover: !1,
                  className: (0, i.W)(y().playButton, y().control),
                  iconSize: "xl",
                  variant: "filled",
                  onClick: tn,
                  isPlaying: K,
                  disabled: !e.isAvailableForPlaying,
                }),
                likeControl: (0, n.jsx)(N.dJ, {
                  className: (0, i.W)(y().likeButton, y().control),
                  isLiked: q,
                  onClick: ti,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                }),
                menuControl: ts,
                pinControl: (0, n.jsx)(N.RT, {
                  onClick: B,
                  isPinned: e.isPinned,
                  className: (0, i.W)(y().pinButton, y().control),
                  withRipple: !1,
                }),
              });
          }, [
            e.isAvailable,
            e.isAvailableForPlaying,
            ts,
            ti,
            tn,
            j,
            J,
            q,
            K,
            e.isPinned,
            B,
          ]),
          tu = (0, l.useMemo)(
            () =>
              (0, n.jsx)(v.Paper, {
                className: y().cover,
                radius: "round",
                withShadow: !0,
                ...(0, d.BA)(d.bG.artist.ARTIST_CARD),
                children: (0, n.jsxs)("div", {
                  className: y().coverBlock,
                  onClick: ta,
                  children: [
                    (0, n.jsx)(N.BE, {
                      className: y().image,
                      src: w,
                      size: 200,
                      fit: "cover",
                      alt: Q,
                      withAvatarReplace: !0,
                      isAvailable: e.isAvailable,
                      "aria-hidden": !0,
                    }),
                    to,
                  ],
                }),
              }),
            [ta, w, Q, e.isAvailable, to],
          );
        return (0, n.jsx)(m.m7, {
          ref: E,
          className: (0, i.W)(y().root, a),
          textPosition: "center",
          "aria-label": Q,
          title: (0, n.jsx)(_.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            children: (0, n.jsx)(N.rU, {
              className: y().titleLink,
              href: e.url,
              "aria-label": Q,
              onClick: te,
              ...(0, d.BA)(d.bG.artist.ARTIST_TITLE),
              children: U,
            }),
          }),
          srTitle: (0, n.jsx)(N.rU, { href: e.url, onClick: te, children: Q }),
          "data-intersection-property-id": x,
          description: (0, n.jsx)(_.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            ...(0, d.BA)(d.bG.artist.ARTIST_SUBTITLE),
            children: (0, n.jsx)(o.Z, { id: "entity-names.singer" }),
          }),
          contentLinesCount: h,
          view: tu,
          ...(0, d.BA)(d.bG.artist.ARTIST_ITEM),
          children: r,
        });
      });
    },
    54864: function (t, e, a) {
      "use strict";
      a.d(e, {
        ArtistContextMenu: function () {
          return d;
        },
      });
      var n = a(9753),
        i = a(9544),
        r = a(98639),
        l = a(385),
        s = a(33589),
        o = a(63394),
        u = a(67868);
      let d = (0, i.Pi)((t) => {
        var e, a;
        let {
            artist: i,
            lastMonthListeners: d,
            reference: c,
            onOpenChange: g,
            open: m,
            returnFocus: p,
          } = t,
          { settings: v, experiments: _, trailer: f } = (0, o.oR)(),
          S = (0, s.BV)(i),
          N = (0, s.SB)(i),
          C = "".concat(o.aU.ARTIST, "-").concat(null == i ? void 0 : i.id),
          b = v.layout === o.t8.Mobile,
          h =
            _.checkExperiment(o.pe.WebNextEntityTrailer, "on") &&
            true &&
            (null == i ? void 0 : i.hasTrailer),
          { href: y } = (0, o.qK)(
            null !== (e = null == i ? void 0 : i.url) && void 0 !== e ? e : "",
          ),
          { isPlaying: E, togglePlay: x } = (0, o.Qh)({
            seeds:
              null !== (a = null == i ? void 0 : i.seeds) && void 0 !== a
                ? a
                : [],
            pageIdForFrom: o.Rh.RADIO,
            blockIdForFrom: C,
          }),
          G = (0, r.useCallback)(() => {
            E || x();
          }, [E, x]),
          T = (0, r.useCallback)(() => {
            (null == i ? void 0 : i.id) &&
              f.openArtistTrailer(null == i ? void 0 : i.id);
          }, [null == i ? void 0 : i.id, f]);
        return (
          (0, o.ZP)(m),
          (0, n.jsxs)(l.v2, {
            reference: c,
            isMobile: b,
            title: null == i ? void 0 : i.name,
            description: d,
            offsetOptions: 10,
            open: m,
            onOpenChange: g,
            returnFocus: p,
            children: [
              !b &&
                (0, n.jsx)(u.Zd, {
                  onClick: S,
                  isPinned: null == i ? void 0 : i.isPinned,
                }),
              (0, n.jsx)(u.xZ, {
                onClick: N,
                isLiked: null == i ? void 0 : i.isLiked,
                disabled: !(null == i ? void 0 : i.isAvailable),
              }),
              h && (0, n.jsx)(u.NB, { onClick: T }),
              (0, n.jsx)(u.GQ, {
                onClick: G,
                disabled: !(null == i ? void 0 : i.isAvailable),
                variant: "artist",
              }),
              (0, n.jsx)(u.zq, {
                disabled: !i,
                shareLink: y,
                entityVariant: "artist",
                entityTitle: null == i ? void 0 : i.name,
              }),
            ],
          })
        );
      });
    },
    5293: function (t, e, a) {
      "use strict";
      a.d(e, {
        I7: function () {
          return v;
        },
        b4: function () {
          return s;
        },
        at: function () {
          return f;
        },
        zU: function () {
          return _;
        },
      });
      var n = a(9753),
        i = a(98639),
        r = a.t(i, 2),
        l = a(67868);
      let s = (t) => {
        let { children: e, title: a, className: r } = t,
          { setTitleElement: s, setTitle: o } = (0, i.useContext)(l.pI),
          u = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            (null == u ? void 0 : u.current) && s(u), a && o(a);
          }, [u, a, s, o]),
          (0, i.useEffect)(
            () => () => {
              o("");
            },
            [o],
          ),
          (0, n.jsx)("div", { ref: u, className: r, children: e })
        );
      };
      var o = a(9544),
        u = {
          810: (t) => {
            t.exports = r;
          },
        },
        d = {},
        c = {};
      (() => {
        Object.defineProperty(c, "__esModule", { value: !0 }),
          (c.useScroll = void 0);
        let t = (function t(e) {
          var a = d[e];
          if (void 0 !== a) return a.exports;
          var n = (d[e] = { exports: {} });
          return u[e](n, n.exports, t), n.exports;
        })(810);
        c.useScroll = (e) => {
          (0, t.useEffect)(
            () => (
              window.addEventListener("scroll", e, {
                capture: !0,
                passive: !0,
              }),
              () => {
                window.removeEventListener("scroll", e);
              }
            ),
            [e],
          );
        };
      })(),
        c.__esModule;
      var g = c.useScroll,
        m = a(63394);
      let p = (t) => {
          let { element: e, scrollTop: a, isMobile: n } = t,
            i = 0.4 * e.clientHeight;
          return a + (n ? 56 : 72) >= e.offsetTop + i;
        },
        v = (0, o.Pi)((t) => {
          let {
              children: e,
              scrollElement: a,
              outerTitle: r = "",
              headerElement: s,
              headerThreshold: o,
            } = t,
            [u, d] = (0, i.useState)(r),
            [c, v] = (0, i.useState)(null),
            [_, f] = (0, i.useState)(!1),
            [S, N] = (0, i.useState)(!1),
            { settings: C } = (0, m.oR)(),
            b = C.layout === m.t8.Mobile;
          (0, i.useLayoutEffect)(() => {
            d(r);
          }, [r]);
          let h = (0, i.useCallback)(() => {
            if (!a) return;
            let t = null != o ? o : 10,
              e = s ? Number(s.offsetTop) - t : t;
            e < 0 && (e = 0),
              N(a.scrollTop > e),
              (null == c ? void 0 : c.current) &&
                f(
                  p({
                    element: null == c ? void 0 : c.current,
                    scrollTop: a.scrollTop,
                    isMobile: b,
                  }),
                );
          }, [a, o, s, c, b]);
          (0, i.useEffect)(() => {
            (a && (null == a ? void 0 : a.scrollTop) !== 0) || N(!1);
          }, [a, null == a ? void 0 : a.scrollTop]),
            g(h);
          let y = (0, i.useMemo)(
            () => ({
              title: u,
              setTitle: d,
              titleElement: c,
              scrollElement: a,
              setTitleElement: v,
              isScrolledTitle: _,
              isScrolling: S,
            }),
            [u, _, c, a, S],
          );
          return (0, n.jsx)(l.pI.Provider, { value: y, children: e });
        });
      a(66414);
      let _ = () => {
          let [t, e] = (0, i.useState)(null),
            a = (0, i.useCallback)(
              (a) => {
                t !== a && e(a);
              },
              [t],
            );
          return [t, a];
        },
        f = (t, e) => (
          (0, m.uK)().get(m.Xt),
          [
            (0, i.useMemo)(() => {
              if (void 0 !== e) {
                let a = e - 17;
                return {
                  "--average-color-background": t,
                  transform: "translateY(".concat(e >= 17 ? 0 : a, "px)"),
                  opacity: 1,
                };
              }
              return {};
            }, [e, !1, t]),
            (0, i.useMemo)(() => ({ "--average-color-background": t }), [t]),
          ]
        );
    },
    55784: function (t, e, a) {
      "use strict";
      a.d(e, {
        h: function () {
          return i.h;
        },
        n: function () {
          return n.n;
        },
      });
      var n = a(33861),
        i = a(34906);
    },
    95946: function (t, e, a) {
      "use strict";
      a.d(e, {
        rT: function () {
          return i.GenreAlbumsPage;
        },
        eq: function () {
          return r.GenreArtistsPage;
        },
        a0: function () {
          return n.GenrePage;
        },
        Kx: function () {
          return S;
        },
        Fe: function () {
          return l.GenrePlaylistsPage;
        },
      });
      var n = a(5112),
        i = a(70660),
        r = a(12788),
        l = a(91477);
      a(20806);
      var s = a(42288),
        o = a(10542),
        u = a(93490),
        d = a(31579),
        c = a(33589),
        g = a(63394),
        m = a(58421);
      let p = s.V5.model("GenreAlbumsPage", {
          loadingState: s.V5.enumeration(Object.values(g.Gu)),
          pager: s.V5.maybeNull(m.Vn),
          alreadyRequestedPages: s.V5.map(s.V5.number),
          pendingPages: s.V5.map(s.V5.number),
          requests: s.V5.maybeNull(s.V5.number),
          errorStatusCode: s.V5.maybeNull(s.V5.number),
          fullTitle: s.V5.maybeNull(s.V5.string),
          items: s.V5.array(s.V5.maybeNull(u.ug)),
        })
          .views((t) => ({
            get isNotFound() {
              var e;
              let a =
                  t.loadingState === g.Gu.RESOLVE &&
                  (null === (e = t.pager) || void 0 === e
                    ? void 0
                    : e.total) === 0,
                n =
                  t.errorStatusCode === o.CN.NOT_FOUND ||
                  t.errorStatusCode === o.CN.BAD_REQUEST;
              return (t.loadingState === g.Gu.REJECT && n) || a;
            },
            get isSomethingWrong() {
              return t.loadingState === g.Gu.REJECT && !this.isNotFound;
            },
          }))
          .actions((t) => ({
            getData: (0, s.ls)(function* (e) {
              let { metatagId: a, page: n = 0, pageSize: i = 20 } = e,
                { metatagsResource: r, modelActionsLogger: l } = (0, s.dU)(t);
              if (
                !(
                  (t.loadingState === g.Gu.PENDING &&
                    t.pendingPages.has("".concat(n))) ||
                  t.alreadyRequestedPages.has("".concat(n))
                )
              ) {
                "number" == typeof n &&
                  t.alreadyRequestedPages.set("".concat(n), n);
                try {
                  var d;
                  (t.loadingState = g.Gu.PENDING),
                    t.pendingPages.set("".concat(n), n);
                  let e = yield r.getMetatagAlbums({
                    id: a,
                    offset: n,
                    limit: i,
                  });
                  t.fullTitle = e.title.fullTitle;
                  let l = { page: n, perPage: i, total: e.pager.total };
                  0 === t.items.length &&
                    (t.items = (0, s.pj)(
                      Array.from({ length: l.total }, () => null),
                    ));
                  let o = e.albums.map(u.ym);
                  (0, g.AG)({
                    items: t.items,
                    mappedRawItems: o,
                    page: n,
                    pageSize: i,
                  }),
                    (t.pager = l),
                    (t.requests =
                      (null !== (d = t.requests) && void 0 !== d ? d : 0) + 1),
                    t.loadingState !== g.Gu.IDLE &&
                      (t.loadingState = g.Gu.RESOLVE);
                } catch (e) {
                  l.error(e),
                    e instanceof o.du &&
                      (e.statusCode === o.CN.NOT_FOUND ||
                        e.statusCode === o.CN.BAD_REQUEST) &&
                      (t.errorStatusCode = o.CN.NOT_FOUND),
                    t.loadingState !== g.Gu.IDLE &&
                      (t.loadingState = g.Gu.REJECT);
                } finally {
                  t.pendingPages.delete("".concat(n));
                }
              }
            }),
            reset() {
              (t.loadingState = g.Gu.IDLE),
                t.pendingPages.clear(),
                (t.pager = null),
                t.alreadyRequestedPages.clear(),
                (t.errorStatusCode = null),
                (t.items = (0, s.pj)([]));
            },
          })),
        v = s.V5.model("GenreArtistsPage", {
          loadingState: s.V5.enumeration(Object.values(g.Gu)),
          pager: s.V5.maybeNull(m.Vn),
          alreadyRequestedPages: s.V5.map(s.V5.number),
          pendingPages: s.V5.map(s.V5.number),
          requests: s.V5.maybeNull(s.V5.number),
          errorStatusCode: s.V5.maybeNull(s.V5.number),
          fullTitle: s.V5.maybeNull(s.V5.string),
          items: s.V5.array(s.V5.maybeNull(c.Go)),
        })
          .views((t) => ({
            get isNotFound() {
              var e;
              let a =
                  t.loadingState === g.Gu.RESOLVE &&
                  (null === (e = t.pager) || void 0 === e
                    ? void 0
                    : e.total) === 0,
                n =
                  t.errorStatusCode === o.CN.NOT_FOUND ||
                  t.errorStatusCode === o.CN.BAD_REQUEST;
              return (t.loadingState === g.Gu.REJECT && n) || a;
            },
            get isSomethingWrong() {
              return t.loadingState === g.Gu.REJECT && !this.isNotFound;
            },
          }))
          .actions((t) => ({
            getData: (0, s.ls)(function* (e) {
              let { metatagId: a, page: n = 0, pageSize: i = 20 } = e,
                { metatagsResource: r, modelActionsLogger: l } = (0, s.dU)(t);
              if (
                !(
                  (t.loadingState === g.Gu.PENDING &&
                    t.pendingPages.has("".concat(n))) ||
                  t.alreadyRequestedPages.has("".concat(n))
                )
              ) {
                "number" == typeof n &&
                  t.alreadyRequestedPages.set("".concat(n), n);
                try {
                  var u;
                  (t.loadingState = g.Gu.PENDING),
                    t.pendingPages.set("".concat(n), n);
                  let e = yield r.getMetatagArtists({
                    id: a,
                    offset: n,
                    limit: i,
                    period: "week",
                  });
                  t.fullTitle = e.title.fullTitle;
                  let l = { page: n, perPage: i, total: e.pager.total };
                  0 === t.items.length &&
                    (t.items = (0, s.pj)(
                      Array.from({ length: l.total }, () => null),
                    ));
                  let o = e.artists.map((t) => (0, c.d)(t.artist));
                  (0, g.AG)({
                    items: t.items,
                    mappedRawItems: o,
                    page: n,
                    pageSize: i,
                  }),
                    (t.pager = l),
                    (t.requests =
                      (null !== (u = t.requests) && void 0 !== u ? u : 0) + 1),
                    t.loadingState !== g.Gu.IDLE &&
                      (t.loadingState = g.Gu.RESOLVE);
                } catch (e) {
                  l.error(e),
                    e instanceof o.du &&
                      (e.statusCode === o.CN.NOT_FOUND ||
                        e.statusCode === o.CN.BAD_REQUEST) &&
                      (t.errorStatusCode = o.CN.NOT_FOUND),
                    t.loadingState !== g.Gu.IDLE &&
                      (t.loadingState = g.Gu.REJECT);
                } finally {
                  t.pendingPages.delete("".concat(n));
                }
              }
            }),
            reset() {
              (t.loadingState = g.Gu.IDLE),
                t.pendingPages.clear(),
                (t.pager = null),
                t.alreadyRequestedPages.clear(),
                (t.errorStatusCode = null),
                (t.items = (0, s.pj)([]));
            },
          }));
      var _ = a(12090);
      let f = s.V5.model("GenrePlaylistsPage", {
          loadingState: s.V5.enumeration(Object.values(g.Gu)),
          pager: s.V5.maybeNull(m.Vn),
          alreadyRequestedPages: s.V5.map(s.V5.number),
          pendingPages: s.V5.map(s.V5.number),
          requests: s.V5.maybeNull(s.V5.number),
          errorStatusCode: s.V5.maybeNull(s.V5.number),
          fullTitle: s.V5.maybeNull(s.V5.string),
          items: s.V5.array(s.V5.maybeNull(_.Cd)),
        })
          .views((t) => ({
            get isNotFound() {
              var e;
              let a =
                  t.loadingState === g.Gu.RESOLVE &&
                  (null === (e = t.pager) || void 0 === e
                    ? void 0
                    : e.total) === 0,
                n =
                  t.errorStatusCode === o.CN.NOT_FOUND ||
                  t.errorStatusCode === o.CN.BAD_REQUEST;
              return (t.loadingState === g.Gu.REJECT && n) || a;
            },
            get isSomethingWrong() {
              return (
                !this.isNotFound &&
                t.loadingState === g.Gu.REJECT &&
                0 === t.alreadyRequestedPages.size
              );
            },
          }))
          .actions((t) => ({
            getData: (0, s.ls)(function* (e) {
              let { metatagId: a, page: n = 0, pageSize: i = 20 } = e,
                { metatagsResource: r, modelActionsLogger: l } = (0, s.dU)(t);
              if (
                !(
                  (t.loadingState === g.Gu.PENDING &&
                    t.pendingPages.has("".concat(n))) ||
                  t.alreadyRequestedPages.has("".concat(n))
                )
              ) {
                "number" == typeof n &&
                  t.alreadyRequestedPages.set("".concat(n), n);
                try {
                  var o;
                  (t.loadingState = g.Gu.PENDING),
                    t.pendingPages.set("".concat(n), n);
                  let e = yield r.getMetatagPlaylists({
                    id: a,
                    offset: n,
                    limit: i,
                    withLikesCount: !0,
                  });
                  t.fullTitle = e.title.fullTitle;
                  let l = { page: n, perPage: i, total: e.pager.total };
                  0 === t.items.length &&
                    (t.items = (0, s.pj)(
                      Array.from({ length: l.total }, () => null),
                    ));
                  let u = e.playlists.map(_.PV);
                  (0, g.AG)({
                    items: t.items,
                    mappedRawItems: u,
                    page: n,
                    pageSize: i,
                  }),
                    (t.pager = l),
                    (t.requests =
                      (null !== (o = t.requests) && void 0 !== o ? o : 0) + 1),
                    t.loadingState !== g.Gu.IDLE &&
                      (t.loadingState = g.Gu.RESOLVE);
                } catch (e) {
                  l.error(e),
                    t.alreadyRequestedPages.delete("".concat(n)),
                    t.loadingState !== g.Gu.IDLE &&
                      (t.loadingState = g.Gu.REJECT);
                } finally {
                  t.pendingPages.delete("".concat(n));
                }
              }
            }),
            reset() {
              (t.loadingState = g.Gu.IDLE),
                t.pendingPages.clear(),
                (t.pager = null),
                t.alreadyRequestedPages.clear(),
                (t.errorStatusCode = null),
                (t.items = (0, s.pj)([]));
            },
          })),
        S = s.V5.model("GenrePage", {
          id: s.V5.maybeNull(s.V5.string),
          errorStatusCode: s.V5.maybeNull(s.V5.number),
          loadingState: s.V5.enumeration(Object.values(g.Gu)),
          fullTitle: s.V5.maybeNull(s.V5.string),
          artists: s.V5.array(c.Go),
          albums: s.V5.array(u.ug),
          playlists: s.V5.array(d.d2),
          albumsSubpage: p,
          artistsSubpage: v,
          playlistsSubpage: f,
        })
          .views((t) => ({
            get isLoading() {
              return (
                t.loadingState === g.Gu.IDLE || t.loadingState === g.Gu.PENDING
              );
            },
            get hasAlbums() {
              return (
                t.loadingState === g.Gu.IDLE ||
                t.loadingState === g.Gu.PENDING ||
                t.albums.length > 0
              );
            },
            get hasArtists() {
              return (
                t.loadingState === g.Gu.IDLE ||
                t.loadingState === g.Gu.PENDING ||
                t.artists.length > 0
              );
            },
            get hasPlaylists() {
              return (
                t.loadingState === g.Gu.IDLE ||
                t.loadingState === g.Gu.PENDING ||
                t.playlists.length > 0
              );
            },
            get isNotFound() {
              let e =
                  t.loadingState === g.Gu.RESOLVE &&
                  !this.hasAlbums &&
                  !this.hasArtists &&
                  !this.hasPlaylists,
                a =
                  t.errorStatusCode === o.CN.NOT_FOUND ||
                  t.errorStatusCode === o.CN.BAD_REQUEST;
              return (t.loadingState === g.Gu.REJECT && a) || e;
            },
          }))
          .actions((t) => ({
            getData: (0, s.ls)(function* (e) {
              let { id: a } = e,
                { metatagsResource: n, modelActionsLogger: i } = (0, s.dU)(t);
              if (t.loadingState !== g.Gu.PENDING)
                try {
                  t.loadingState = g.Gu.PENDING;
                  let e = yield n.getMetatagById({ id: a });
                  (t.id = e.id),
                    (t.fullTitle = e.title.fullTitle),
                    (t.artists = (0, s.pj)(e.artists.map(c.d))),
                    (t.albums = (0, s.pj)(e.albums.map(u.ym))),
                    (t.playlists = (0, s.pj)(e.playlists.map(d.Q9))),
                    t.loadingState !== g.Gu.IDLE &&
                      (t.loadingState = g.Gu.RESOLVE);
                } catch (e) {
                  i.error(e),
                    e instanceof o.du &&
                      (e.statusCode === o.CN.NOT_FOUND ||
                        e.statusCode === o.CN.BAD_REQUEST) &&
                      (t.errorStatusCode = o.CN.NOT_FOUND),
                    t.loadingState !== g.Gu.IDLE &&
                      (t.loadingState = g.Gu.REJECT);
                }
            }),
            reset() {
              (t.loadingState = g.Gu.IDLE),
                (t.fullTitle = null),
                (t.artists = (0, s.pj)([])),
                (t.albums = (0, s.pj)([])),
                (t.playlists = (0, s.pj)([]));
            },
          }));
    },
    23948: function (t, e, a) {
      "use strict";
      a.d(e, {
        T: function () {
          return n.NotFound;
        },
      });
      var n = a(8964);
    },
    8964: function (t, e, a) {
      "use strict";
      a.d(e, {
        NotFound: function () {
          return p;
        },
      });
      var n = a(9753),
        i = a(60836),
        r = a(9544),
        l = a(31014),
        s = a(39513),
        o = a(28852),
        u = a(2570),
        d = a(55784),
        c = a(63394),
        g = a(23067),
        m = a.n(g);
      let p = (0, r.Pi)((t) => {
        let { className: e } = t,
          { contentRef: a } = (0, c.$Y)(),
          r = (0, c.s0)("/");
        return (
          (0, c.ZP)(!0),
          (0, n.jsxs)("div", {
            className: (0, i.W)(m().root, { [m().root_desktop]: !a }, e),
            children: [
              (0, n.jsx)(d.n, {
                withBackwardFallback: "/",
                className: m().navigation,
                withForwardControl: !1,
              }),
              (0, n.jsxs)("div", {
                className: m().content,
                children: [
                  (0, n.jsx)(o.J, {
                    className: m().icon,
                    variant: "musicLogo",
                    size: "xxl",
                  }),
                  (0, n.jsx)(u.Heading, {
                    className: (0, i.W)(m().title, m().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, n.jsx)(l.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, n.jsx)(u.Caption, {
                    className: (0, i.W)(m().text, m().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, n.jsx)(l.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, n.jsx)(s.z, {
                    onClick: r,
                    className: m().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, n.jsx)(u.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, n.jsx)(l.Z, { id: "navigation.page-main" }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      });
    },
    68106: function (t, e, a) {
      "use strict";
      a.d(e, {
        D: function () {
          return n.SomethingWentWrong;
        },
      });
      var n = a(18723);
    },
    18723: function (t, e, a) {
      "use strict";
      a.d(e, {
        SomethingWentWrong: function () {
          return v;
        },
      });
      var n = a(9753),
        i = a(60836),
        r = a(9544),
        l = a(98639),
        s = a(31014),
        o = a(39513),
        u = a(28852),
        d = a(2570),
        c = a(55784),
        g = a(63394),
        m = a(88178),
        p = a.n(m);
      let v = (0, r.Pi)((t) => {
        let { className: e, withBackwardControl: a = !0 } = t,
          r = (0, l.useCallback)(() => {
            window.location.href = "/";
          }, []),
          { contentRef: m } = (0, g.$Y)();
        return (0, n.jsxs)("div", {
          className: (0, i.W)(p().root, e),
          children: [
            a &&
              (0, n.jsx)(c.n, {
                withBackwardFallback: "/",
                className: (0, i.W)(p().navigation, {
                  [p().navigation_desktop]: !m,
                }),
                withForwardControl: !1,
              }),
            (0, n.jsxs)("div", {
              className: (0, i.W)(p().content, { [p().content_shrink]: !a }),
              children: [
                (0, n.jsx)(u.J, {
                  className: p().icon,
                  variant: "attention",
                  size: "xxl",
                }),
                (0, n.jsx)(d.Heading, {
                  className: (0, i.W)(p().title, p().important),
                  variant: "h3",
                  size: "xs",
                  children: (0, n.jsx)(s.Z, {
                    id: "error-messages.something-went-wrong",
                  }),
                }),
                (0, n.jsxs)(d.Caption, {
                  className: (0, i.W)(p().text, p().important),
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: [
                    !1,
                    (0, n.jsx)(s.Z, { id: "page-error.try-to-restart-app" }),
                  ],
                }),
                (0, n.jsx)(o.z, {
                  onClick: r,
                  className: p().button,
                  role: "link",
                  color: "secondary",
                  size: "l",
                  radius: "xxxl",
                  children: (0, n.jsxs)(d.Caption, {
                    type: "controls",
                    variant: "span",
                    size: "m",
                    children: [
                      !1,
                      (0, n.jsx)(s.Z, { id: "page-error.restart-app-button" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      });
    },
    62914: function (t) {
      t.exports = {
        root: "ArtistCard_root__x67BK",
        controls: "ArtistCard_controls__jsqqI",
        cover: "ArtistCard_cover__29ShU",
        coverBlock: "ArtistCard_coverBlock__dBL4x",
        image: "ArtistCard_image__pONJx",
        titleLink: "ArtistCard_titleLink__G8Puz",
        playButton: "ArtistCard_playButton__XZoTr",
        likeButton: "ArtistCard_likeButton__LU9TL",
        menuButton: "ArtistCard_menuButton__EynXG",
        pinButton: "ArtistCard_pinButton__G_VOi",
        control: "ArtistCard_control___qv5j",
      };
    },
    23067: function (t) {
      t.exports = {
        root: "NotFound_root__47ZX6",
        root_desktop: "NotFound_root_desktop___QqSb",
        navigation: "NotFound_navigation__q8rIW",
        content: "NotFound_content__3kry_",
        icon: "NotFound_icon___Wa9y",
        title: "NotFound_title__akG_o",
        important: "NotFound_important__z1LWl",
        text: "NotFound_text__oxDZv",
        button: "NotFound_button__jF4uH",
      };
    },
    88178: function (t) {
      t.exports = {
        root: "SomethingWentWrong_root__d77VJ",
        content: "SomethingWentWrong_content__8_YkJ",
        content_shrink: "SomethingWentWrong_content_shrink__GOR_7",
        navigation: "SomethingWentWrong_navigation__a8eMG",
        navigation_desktop: "SomethingWentWrong_navigation_desktop__WGGBX",
        icon: "SomethingWentWrong_icon__f15_y",
        title: "SomethingWentWrong_title__Kn89B",
        important: "SomethingWentWrong_important__namIb",
        text: "SomethingWentWrong_text__KEfGc",
        button: "SomethingWentWrong_button__dmh7t",
      };
    },
  },
  function (t) {
    t.O(
      0,
      [
        8609, 8670, 953, 899, 2903, 6088, 2498, 7873, 8695, 3621, 3394, 7868,
        4901, 3490, 1579, 1055, 154, 2171, 361, 1744,
      ],
      function () {
        return t((t.s = 98463));
      },
    ),
      (_N_E = t.O());
  },
]);
