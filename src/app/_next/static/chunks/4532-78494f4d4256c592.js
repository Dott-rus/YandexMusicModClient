(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4532],
  {
    70171: function (e, t, a) {
      "use strict";
      a.d(t, {
        e: function () {
          return d;
        },
      });
      var i,
        r = a(98639),
        l = {
          2067: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useScroll = void 0);
            let i = a(810);
            t.useScroll = (e) => {
              (0, i.useEffect)(
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
          },
          810: (e) => {
            e.exports = i || (i = a.t(r, 2));
          },
        },
        o = {};
      function n(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var a = (o[e] = { exports: {} });
        return l[e](a, a.exports, n), a.exports;
      }
      var s = {};
      (() => {
        Object.defineProperty(s, "__esModule", { value: !0 }),
          (s.useElementOffsetY = void 0);
        let e = n(810),
          t = n(2067);
        s.useElementOffsetY = () => {
          let a = (0, e.useRef)(null),
            [i, r] = (0, e.useState)(),
            l = (0, e.useCallback)(() => {
              var e;
              let t =
                null === (e = a.current) || void 0 === e
                  ? void 0
                  : e.getBoundingClientRect();
              t && r(t.y);
            }, []);
          return (
            (0, e.useLayoutEffect)(l),
            (0, t.useScroll)(l),
            { ref: a, offsetY: i }
          );
        };
      })(),
        s.__esModule;
      var d = s.useElementOffsetY;
    },
    21351: function (e, t, a) {
      "use strict";
      a.d(t, {
        zp: function () {
          return r;
        },
      });
      var i = {};
      (() => {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.createAvatarUrl = i.AVAILABLE_SIZES = i.DEFAULT_SIZE = void 0),
          (i.DEFAULT_SIZE = 100),
          (i.AVAILABLE_SIZES = [30, 50, 80, 100, 200, 300, 400, 600, 800]);
        let e = (e) => "https://".concat(e.replace(/^(https*:\/\/)/, ""));
        i.createAvatarUrl = (t, a, i) => {
          let r;
          return (
            (r =
              "orig" === a
                ? "orig"
                : i
                  ? "m".concat(a, "x").concat(a)
                  : "".concat(a, "x").concat(a)),
            e(t.replace("%%", r))
          );
        };
      })(),
        i.AVAILABLE_SIZES,
        i.DEFAULT_SIZE,
        i.__esModule;
      var r = i.createAvatarUrl;
    },
    5293: function (e, t, a) {
      "use strict";
      a.d(t, {
        I7: function () {
          return x;
        },
        b4: function () {
          return n;
        },
        at: function () {
          return f;
        },
        zU: function () {
          return v;
        },
      });
      var i = a(9753),
        r = a(98639),
        l = a.t(r, 2),
        o = a(67868);
      let n = (e) => {
        let { children: t, title: a, className: l } = e,
          { setTitleElement: n, setTitle: s } = (0, r.useContext)(o.pI),
          d = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            (null == d ? void 0 : d.current) && n(d), a && s(a);
          }, [d, a, n, s]),
          (0, r.useEffect)(
            () => () => {
              s("");
            },
            [s],
          ),
          (0, i.jsx)("div", { ref: d, className: l, children: t })
        );
      };
      var s = a(9544),
        d = {
          810: (e) => {
            e.exports = l;
          },
        },
        c = {},
        u = {};
      (() => {
        Object.defineProperty(u, "__esModule", { value: !0 }),
          (u.useScroll = void 0);
        let e = (function e(t) {
          var a = c[t];
          if (void 0 !== a) return a.exports;
          var i = (c[t] = { exports: {} });
          return d[t](i, i.exports, e), i.exports;
        })(810);
        u.useScroll = (t) => {
          (0, e.useEffect)(
            () => (
              window.addEventListener("scroll", t, {
                capture: !0,
                passive: !0,
              }),
              () => {
                window.removeEventListener("scroll", t);
              }
            ),
            [t],
          );
        };
      })(),
        u.__esModule;
      var _ = u.useScroll,
        p = a(63394);
      let m = (e) => {
          let { element: t, scrollTop: a, isMobile: i } = e,
            r = 0.4 * t.clientHeight;
          return a + (i ? 56 : 72) >= t.offsetTop + r;
        },
        x = (0, s.Pi)((e) => {
          let {
              children: t,
              scrollElement: a,
              outerTitle: l = "",
              headerElement: n,
              headerThreshold: s,
            } = e,
            [d, c] = (0, r.useState)(l),
            [u, x] = (0, r.useState)(null),
            [v, f] = (0, r.useState)(!1),
            [h, g] = (0, r.useState)(!1),
            { settings: y } = (0, p.oR)(),
            b = y.layout === p.t8.Mobile;
          (0, r.useLayoutEffect)(() => {
            c(l);
          }, [l]);
          let C = (0, r.useCallback)(() => {
            if (!a) return;
            let e = null != s ? s : 10,
              t = n ? Number(n.offsetTop) - e : e;
            t < 0 && (t = 0),
              g(a.scrollTop > t),
              (null == u ? void 0 : u.current) &&
                f(
                  m({
                    element: null == u ? void 0 : u.current,
                    scrollTop: a.scrollTop,
                    isMobile: b,
                  }),
                );
          }, [a, s, n, u, b]);
          (0, r.useEffect)(() => {
            (a && (null == a ? void 0 : a.scrollTop) !== 0) || g(!1);
          }, [a, null == a ? void 0 : a.scrollTop]),
            _(C);
          let P = (0, r.useMemo)(
            () => ({
              title: d,
              setTitle: c,
              titleElement: u,
              scrollElement: a,
              setTitleElement: x,
              isScrolledTitle: v,
              isScrolling: h,
            }),
            [d, v, u, a, h],
          );
          return (0, i.jsx)(o.pI.Provider, { value: P, children: t });
        });
      a(66414);
      let v = () => {
          let [e, t] = (0, r.useState)(null),
            a = (0, r.useCallback)(
              (a) => {
                e !== a && t(a);
              },
              [e],
            );
          return [e, a];
        },
        f = (e, t) => (
          (0, p.uK)().get(p.Xt),
          [
            (0, r.useMemo)(() => {
              if (void 0 !== t) {
                let a = t - 17;
                return {
                  "--average-color-background": e,
                  transform: "translateY(".concat(t >= 17 ? 0 : a, "px)"),
                  opacity: 1,
                };
              }
              return {};
            }, [t, !1, e]),
            (0, r.useMemo)(() => ({ "--average-color-background": e }), [e]),
          ]
        );
    },
    23948: function (e, t, a) {
      "use strict";
      a.d(t, {
        T: function () {
          return i.NotFound;
        },
      });
      var i = a(8964);
    },
    8964: function (e, t, a) {
      "use strict";
      a.d(t, {
        NotFound: function () {
          return m;
        },
      });
      var i = a(9753),
        r = a(60836),
        l = a(9544),
        o = a(31014),
        n = a(39513),
        s = a(28852),
        d = a(2570),
        c = a(55784),
        u = a(63394),
        _ = a(23067),
        p = a.n(_);
      let m = (0, l.Pi)((e) => {
        let { className: t } = e,
          { contentRef: a } = (0, u.$Y)(),
          l = (0, u.s0)("/");
        return (
          (0, u.ZP)(!0),
          (0, i.jsxs)("div", {
            className: (0, r.W)(p().root, { [p().root_desktop]: !a }, t),
            children: [
              (0, i.jsx)(c.n, {
                withBackwardFallback: "/",
                className: p().navigation,
                withForwardControl: !1,
              }),
              (0, i.jsxs)("div", {
                className: p().content,
                children: [
                  (0, i.jsx)(s.J, {
                    className: p().icon,
                    variant: "musicLogo",
                    size: "xxl",
                  }),
                  (0, i.jsx)(d.Heading, {
                    className: (0, r.W)(p().title, p().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, i.jsx)(o.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, i.jsx)(d.Caption, {
                    className: (0, r.W)(p().text, p().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, i.jsx)(o.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, i.jsx)(n.z, {
                    onClick: l,
                    className: p().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, i.jsx)(d.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, i.jsx)(o.Z, { id: "navigation.page-main" }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      });
    },
    95772: function (e, t, a) {
      "use strict";
      a.d(t, {
        hx: function () {
          return J;
        },
        f3: function () {
          return ec;
        },
        HZ: function () {
          return em;
        },
        Vm: function () {
          return eB;
        },
        KC: function () {
          return eF;
        },
      });
      var i,
        r = a(9753),
        l = a(9544),
        o = a(98639),
        n = a.t(o, 2),
        s = a(31014),
        d = a(84338),
        c = a(38360),
        u = a(63394),
        _ = a(67868),
        p = a(80542),
        m = a(23881),
        x = a(39513),
        v = a(28852),
        f = a(93490),
        h = a(60184),
        g = a.n(h);
      let y = (0, l.Pi)((e) => {
        let { album: t, likeButtonAriaLabel: a } = e,
          { settings: i, experiments: l, trailer: n } = (0, u.oR)(),
          [d, h] = (0, o.useState)(!1),
          y = i.layout === u.t8.Mobile,
          b = (0, c.SB)(t),
          C = (0, c.BV)(t),
          { formatMessage: P } = (0, p.Z)(),
          j = y ? "l" : "s",
          k = y ? "m" : "xxs",
          N = (0, o.useCallback)(() => {
            n.openAlbumTrailer(t.id);
          }, [t.id, n]),
          A = (0, o.useMemo)(
            () =>
              !(
                l.checkExperiment(u.pe.WebNextEntityTrailer, "on") &&
                true &&
                t.hasTrailer
              ) || y
                ? null
                : (0, r.jsx)(_.eP, {
                    size: "s",
                    radius: "xxxl",
                    iconSize: "xxs",
                    className: g().trailerControl,
                    onClick: N,
                    children: (0, r.jsx)(s.Z, { id: "entity-names.trailer" }),
                  }),
            [t.hasTrailer, l, N, y],
          );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            A,
            (0, r.jsx)(_.dJ, {
              className: g().likeControl,
              isLiked: t.isLiked,
              onClick: b,
              variant: "default",
              size: j,
              iconSize: k,
              withRipple: !y,
              disabled: !t.isAvailable,
              "aria-label": a,
            }),
            !y &&
              (0, r.jsx)(_.RT, {
                onClick: C,
                isPinned: t.isPinned,
                isDisabled: !t.isAvailable,
                className: g().pinControl,
              }),
            (0, r.jsx)(f.oK, {
              album: t,
              open: d,
              onOpenChange: h,
              reference: (0, r.jsx)(x.z, {
                className: g().menuControl,
                size: j,
                radius: "round",
                withRipple: !y,
                "aria-label": P({ id: "interface-actions.context-menu" }),
                icon: (0, r.jsx)(v.J, { size: k, variant: "more" }),
                ...(0, m.BA)(m.QM.pageHeader.ALBUM_HEADER_CONTEXT_MENU),
              }),
            }),
          ],
        });
      });
      var b = a(60836),
        C = a(12404),
        P = a(2570),
        j = a(33589);
      let k = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = e.filter((e) => !e.composer),
          a = t.filter((e) => !e.various),
          i = e.filter((e) => e.composer && !e.various),
          r = [];
        return a.length > 0 ? (r = a) : t.length > 0 && (r = t), r.concat(i);
      };
      var N = a(72408),
        A = a.n(N);
      let w = (0, l.Pi)((e) => {
        var t, a, i;
        let { album: l } = e,
          { settings: n } = (0, u.oR)(),
          s = n.layout === u.t8.Mobile,
          d = (0, o.useMemo)(() => k(l.artists), [l.artists]),
          c =
            (null == d ? void 0 : d.length) === 1 &&
            !(null === (t = d[0]) || void 0 === t ? void 0 : t.decomposed) &&
            !(null === (a = d[0]) || void 0 === a ? void 0 : a.various);
        return (0, r.jsxs)("div", {
          className: A().meta,
          children: [
            c &&
              (0, r.jsx)(C.Paper, {
                radius: "round",
                className: A().artistCover,
                children: (0, r.jsx)(_.BE, {
                  src:
                    null === (i = d[0]) || void 0 === i ? void 0 : i.coverUri,
                  size: 30,
                  withAvatarReplace: !0,
                }),
              }),
            (0, r.jsx)(j.jO, {
              artists: d,
              lineClamp: s ? 1 : void 0,
              className: A().artists,
              spoilerClassName: A().artistsSpoiler,
              visibleArtistsCount: s ? void 0 : 2,
              linkClassName: A().artistLink,
              captionClassName: A().artistLabel,
              variant: s ? "breakAll" : "breakWord",
            }),
            l.year &&
              (0, r.jsx)(P.Caption, {
                variant: "div",
                type: "text",
                size: "m",
                weight: "medium",
                className: (0, b.W)(A().year, { [A().year_dot]: d.length > 0 }),
                ...(0, m.BA)(m.QM.pageHeader.ALBUM_RELEASE_DATE),
                children: l.year,
              }),
          ],
        });
      });
      var T = a(77225),
        M = a.n(T),
        S = a(5293),
        R = a(69516),
        H = a.n(R);
      let E = (0, l.Pi)((e) => {
        let {
            className: t,
            text: a = "",
            maxTextLength: i,
            minTextLength: l,
            variant: n = "input",
            shouldFinishOnKeyPress: s = !1,
            placeholder: d,
            onChangeFinish: c,
          } = e,
          [u, _] = (0, o.useState)(a),
          p = (0, o.useRef)(!1),
          m = (0, o.useRef)(null),
          x = (0, o.useCallback)((e) => {
            _(e.target.value);
          }, []),
          v = (0, o.useCallback)(
            (e) => {
              if (s && ["Enter", "Escape"].includes(e.key)) {
                var t;
                "Escape" === e.key && (p.current = !0),
                  null === (t = e.currentTarget) || void 0 === t || t.blur();
              }
            },
            [s],
          ),
          f = (0, o.useCallback)(() => {
            let e = u.trim();
            p.current || (l && e.length < l)
              ? ((p.current = !1), null == c || c(a))
              : null == c || c(e);
          }, [u, p, l, c, a]);
        (0, o.useEffect)(() => {
          m.current &&
            ((m.current.selectionStart = m.current.value.length),
            (m.current.selectionEnd = m.current.value.length));
        }, []),
          (0, o.useLayoutEffect)(() => {
            let e = m.current;
            if (e) {
              e.style.height = "0px";
              let t = e.scrollHeight;
              e.style.height = "".concat(t, "px");
            }
          }, [m, u]);
        let h = (0, o.useMemo)(
          () =>
            "textarea" === n
              ? (e) => (0, r.jsx)("textarea", { ref: m, rows: 6, ...e })
              : (e) => (0, r.jsx)("input", { ...e }),
          [n],
        );
        return (0, r.jsx)(h, {
          className: (0, b.W)(H().root, t, {
            [H().root_textarea]: "textarea" === n,
          }),
          type: "text",
          value: u,
          maxLength: i,
          onBlur: f,
          onChange: x,
          onKeyDown: v,
          placeholder: d,
          autoFocus: !0,
        });
      });
      var L = a(35611),
        z = a.n(L);
      let B = (0, l.Pi)((e) => {
          let {
              title: t = "",
              "aria-labelledby": a,
              canChange: i = !1,
              onChange: l,
              maxTitleLength: n,
              version: s = "",
              onVersionClick: d,
              className: c,
            } = e,
            { settings: _ } = (0, u.oR)(),
            { formatMessage: f } = (0, p.Z)(),
            [h, g] = (0, o.useState)(!1),
            y = (0, o.useRef)(null),
            C = _.layout === u.t8.Mobile,
            j = t.length + s.length > 25,
            k = (0, o.useMemo)(
              () => (C ? z().font_mobile : j ? z().font_long : z().font_short),
              [C, j],
            ),
            N = !C && i && h,
            A = (0, o.useCallback)(() => {
              var e;
              g(!0), null === (e = y.current) || void 0 === e || e.focus();
            }, []),
            w = (0, o.useCallback)(
              (e) => {
                g(!1), null == l || l(e);
              },
              [l],
            );
          return (0, r.jsxs)(r.Fragment, {
            children: [
              !N &&
                (0, r.jsxs)("div", {
                  className: (0, b.W)(z().root, c),
                  children: [
                    (0, r.jsx)(S.b4, {
                      title: t,
                      className: z().stickyTitle,
                      children: (0, r.jsxs)(P.Heading, {
                        variant: "h2",
                        id: a,
                        className: (0, b.W)(z().heading, {
                          [z().heading_withVersion]: s,
                        }),
                        ...(0, m.BA)(m.QM.pageHeader.ENTITY_TITLE),
                        children: [
                          (0, r.jsx)(P.Caption, {
                            className: (0, b.W)(z().font, k, z().title),
                            variant: "span",
                            children: t,
                          }),
                          s &&
                            (0, r.jsx)(P.Caption, {
                              onClick: d,
                              className: (0, b.W)(z().font, k, z().version, {
                                [z().version_withOtherVersions]: d,
                              }),
                              variant: "span",
                              ...(0, m.BA)(m.QM.pageHeader.ENTITY_VERSION),
                              children: " ".concat(s),
                            }),
                        ],
                      }),
                    }),
                    i &&
                      (0, r.jsx)("div", {
                        className: (0, b.W)(z().editButton, {
                          [z().editButton_centered]: !j && !C,
                        }),
                        children: (0, r.jsx)(x.z, {
                          onClick: A,
                          "aria-label": f({
                            id: "playlist-actions.change-title",
                          }),
                          icon: (0, r.jsx)(v.J, {
                            size: "xxs",
                            variant: "pencil",
                          }),
                          size: "s",
                          radius: "round",
                          ...(0, m.BA)(m.QM.pageHeader.EDIT_TITLE_BUTTON),
                        }),
                      }),
                  ],
                }),
              N &&
                (0, r.jsx)("div", {
                  className: z().textFieldContainer,
                  children: (0, r.jsx)(E, {
                    text: t,
                    className: (0, b.W)(z().font, k, z().textField, z().title, {
                      [z().textField_long]: j && !C,
                    }),
                    onChangeFinish: w,
                    maxTextLength: n,
                    minTextLength: 1,
                    placeholder: f({ id: "playlist-actions.enter-title" }),
                    shouldFinishOnKeyPress: !0,
                  }),
                }),
            ],
          });
        }),
        O = (0, l.Pi)((e) => {
          let {
              "aria-labelledby": t,
              entityName: a,
              title: i,
              meta: l,
              controls: n,
              className: s,
              forwardRef: d,
              canChangeTitle: c = !1,
              maxTitleLength: u,
              onTitleChange: _,
              cover: p,
              version: x,
              onVersionClick: v,
              disclaimerLabel: f,
              entityNameIcon: h,
            } = e,
            g = (0, o.isValidElement)(f),
            y = (0, o.useMemo)(
              () =>
                g
                  ? (0, r.jsx)("div", {
                      className: M().entityContainer,
                      children: f,
                    })
                  : (0, r.jsxs)(P.Caption, {
                      variant: "div",
                      type: "text",
                      size: "m",
                      weight: "medium",
                      className: M().entityName,
                      children: [a, h],
                    }),
              [f, a, h, g],
            );
          return (0, r.jsxs)("div", {
            className: (0, b.W)(M().root, s),
            ref: d,
            ...(0, m.BA)(m.QM.pageHeader.ENTITY_HEADER),
            children: [
              (0, r.jsx)("div", { className: M().coverCell, children: p }),
              (0, r.jsxs)("div", {
                className: M().content,
                children: [
                  (0, r.jsxs)("div", {
                    className: M().info,
                    children: [
                      y,
                      (0, r.jsx)(B, {
                        className: (0, b.W)(M().title, {
                          [M().title_withDisclaimerLabel]: g,
                        }),
                        title: i,
                        "aria-labelledby": t,
                        canChange: c,
                        maxTitleLength: u,
                        onChange: _,
                        version: x,
                        onVersionClick: v,
                      }),
                      !!l &&
                        (0, r.jsx)("div", {
                          className: (0, b.W)(M().meta, {
                            [M().meta_withDisclaimerLabel]: g,
                          }),
                          children: l,
                        }),
                    ],
                  }),
                  (0, r.jsx)("div", { className: M().controls, children: n }),
                ],
              }),
            ],
          });
        }),
        D = (0, o.forwardRef)((e, t) => (0, r.jsx)(O, { forwardRef: t, ...e }));
      var U = a(55608),
        F = a.n(U);
      let I = (e) => {
        let {
          coverVariant: t,
          coverUri: a,
          isAvailable: i,
          className: l,
          withBookmateBadge: o,
        } = e;
        return (0, r.jsxs)(C.Paper, {
          radius: "round" === t ? "round" : "m",
          className: l,
          children: [
            (0, r.jsx)(_.BE, {
              fit: "cover",
              src: a,
              size: 300,
              className: F().coverImage,
              withAvatarReplace: !0,
              isAvailable: i,
            }),
            o &&
              (0, r.jsx)(v.J, {
                variant: "bookmateBadge",
                className: F().bookmateBadge,
              }),
          ],
        });
      };
      var W = a(79495),
        Z = a.n(W);
      let V = (0, l.Pi)((e) => {
          let {
              album: t,
              actionButton: a,
              className: i,
              "aria-labelledby": l,
              forwardRef: n,
              onVersionClick: p,
            } = e,
            m = (0, u.x5)({ pageId: u.Rh.ALBUM, blockId: u.aU.ALBUM }),
            {
              settings: x,
              sonataState: { unloadedEntitiesData: v },
            } = (0, u.oR)(),
            f = x.layout === u.t8.Mobile,
            h = (0, c.H0)(t.type),
            { isPlaying: g, togglePlay: b } = (0, u.qm)({
              playContextParams: {
                contextData: { type: d.Ak.Album, meta: { id: t.id }, from: m },
                loadContextMeta: !0,
                entitiesData: v,
              },
            }),
            C = (0, o.useMemo)(
              () =>
                f
                  ? (0, r.jsx)(_.JM, {
                      className: Z().playControl,
                      color: "primary",
                      buttonVariant: "default",
                      iconSize: "xxl",
                      isPlaying: g,
                      onClick: b,
                      variant: "filled",
                      disabled: !t.isAvailable,
                    })
                  : (0, r.jsx)(_.JM, {
                      className: Z().playControl,
                      withRipple: !0,
                      buttonVariant: "default",
                      radius: "xxxl",
                      size: "s",
                      color: "primary",
                      iconSize: "xxs",
                      isPlaying: g,
                      onClick: b,
                      disabled: !t.isAvailable,
                      children: (0, r.jsx)(s.Z, {
                        id: "player-actions.listen",
                      }),
                    }),
              [t.isAvailable, f, g, b],
            ),
            P = (0, o.useMemo)(
              () =>
                (0, r.jsxs)("div", {
                  className: Z().controlsContainer,
                  children: [
                    (0, r.jsxs)("div", {
                      className: Z().controls,
                      children: [C, (0, r.jsx)(y, { album: t })],
                    }),
                    a &&
                      (0, r.jsx)("div", {
                        className: Z().controls,
                        children: a,
                      }),
                  ],
                }),
              [C, t, a],
            );
          return (0, r.jsx)(D, {
            ref: n,
            className: i,
            controls: P,
            meta: (0, r.jsx)(w, { album: t }),
            entityName: h,
            title: t.title,
            cover: (0, r.jsx)(I, {
              coverVariant: "square",
              coverUri: t.coverUri,
              isAvailable: t.isAvailable,
            }),
            "aria-labelledby": l,
            version: t.version,
            onVersionClick: p,
          });
        }),
        J = (0, o.forwardRef)((e, t) => (0, r.jsx)(V, { forwardRef: t, ...e }));
      var Y = a(69869),
        Q = {
          5881: (e, t, a) => {
            function i() {
              for (var e, t, a = 0, i = ""; a < arguments.length; )
                (e = arguments[a++]) &&
                  (t = (function e(t) {
                    var a,
                      i,
                      r = "";
                    if ("string" == typeof t || "number" == typeof t) r += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (a = 0; a < t.length; a++)
                          t[a] && (i = e(t[a])) && (r && (r += " "), (r += i));
                      else for (a in t) t[a] && (r && (r += " "), (r += a));
                    }
                    return r;
                  })(e)) &&
                  (i && (i += " "), (i += t));
              return i;
            }
            a.r(t), a.d(t, { clsx: () => i, default: () => r });
            let r = i;
          },
          2994: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            let i = { root: "LizdJ2L0HW7JWOvPrfly" };
          },
          390: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            let i = {
              root_controls_xxs: "tRaaBpDMg9Qu8v6gKjtn",
              root_entity_xxs: "M9zvtlcpLUVn6DKdcHhj",
              root_text_xxs: "ln0PYYwDmFnfYxCDJsFU",
              root_controls_xs: "n5AeWEsJC3_AYXcbK4Lt",
              root_entity_xs: "__hrMKGmNbw54T54IUyh",
              root_text_xs: "SehSa7OyRpC2nzYTVb2Q",
              root_controls_s: "_oBLf5gprWsKjCw4Ce58",
              root_entity_s: "mxSPe5xpZnie9gpIqacd",
              root_text_s: "Ai2iRN9elHpk_u5splD6",
              root_controls_m: "tk7ahHRDYXJMMB879KUA",
              root_entity_m: "Z_WIr2W8JU4MPQek3hgR",
              root_text_m: "g3qWNP6xl__7qxNmtrvd",
              root_controls_l: "grvxapJE3vGArOKDWf6n",
              root_entity_l: "Esj5A1UeSi4xV4tZ839D",
              root_text_l: "V3WU123oO65AxsprotU9",
              root_weight_normal: "ZYV27jeWd30QDXu4GhaH",
              root_weight_medium: "_3_Mxw7Si7j2g4kWjlpR",
              root_weight_bold: "Vi7Rd0SZWqD17F0872TB",
            };
          },
          8544: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            let i = {
              root_size_xs: "qJJ288377iHlWN_RXeEE",
              root_size_s: "_sd8Q9d_Ttn0Ufe4ISWS",
              root_size_m: "Ctk8dbecq31Qh7isOJPQ",
              root_size_l: "M_Djh6ppIkCO3A2k_BTA",
              root_size_xl: "dtxlzGQMPAbM2MEndXWX",
              root_size_xxl: "IUb9XLplTAoZqne9rNUL",
              root_size_xxxl: "ZYZamUwql_rfFR4RpI2B",
              root_size_xxxxl: "ZBZyxow5njdq8z5dnRPY",
              root_weight_bold: "nSU6fV9y80WrZEfafvww",
              root_weight_black: "KBeGPPK4DinQzAP41Y_N",
            };
          },
          2524: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            let i = {
              root: "_MWOVuZRvUQdXKTMcOPx",
              root_clamp: "LezmJlldtbHWqU7l1950",
              root_clamp_oneline: "oyQL2RSmoNbNQf3Vc6YI",
              root_clamp_multiline: "jMyoZB5J9iZbzJmWOrF0",
            };
          },
          6161: (e, t, a) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var i = a(810),
              r = Symbol.for("react.element"),
              l = Symbol.for("react.fragment"),
              o = Object.prototype.hasOwnProperty,
              n =
                i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function d(e, t, a) {
              var i,
                l = {},
                d = null,
                c = null;
              for (i in (void 0 !== a && (d = "" + a),
              void 0 !== t.key && (d = "" + t.key),
              void 0 !== t.ref && (c = t.ref),
              t))
                o.call(t, i) && !s.hasOwnProperty(i) && (l[i] = t[i]);
              if (e && e.defaultProps)
                for (i in (t = e.defaultProps))
                  void 0 === l[i] && (l[i] = t[i]);
              return {
                $$typeof: r,
                type: e,
                key: d,
                ref: c,
                props: l,
                _owner: n.current,
              };
            }
            (t.Fragment = l), (t.jsx = d), (t.jsxs = d);
          },
          9541: (e, t, a) => {
            e.exports = a(6161);
          },
          2: function (e, t, a) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Label = void 0);
            let r = a(9541),
              l = a(5881),
              o = a(2582),
              n = i(a(2994));
            t.Label = (e) => {
              let { children: t, className: a, size: i = "s" } = e;
              return (0, r.jsx)(o.Caption, {
                variant: "div",
                type: "text",
                size: i,
                lineClamp: 1,
                className: (0, l.clsx)(n.default.root, a),
                children: t,
              });
            };
          },
          7743: function (e, t, a) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Caption = t.CaptionComponent = void 0);
            let r = a(9541),
              l = a(5881),
              o = a(810),
              n = a(4721),
              s = i(a(390));
            function d(e) {
              let {
                forwardRef: t,
                variant: a,
                type: i = "text",
                size: o = "s",
                className: d,
                children: c,
                weight: u = "medium",
                ..._
              } = e;
              return (0, r.jsx)(n.Typography, {
                variant: a,
                ref: t,
                className: (0, l.clsx)(
                  s.default.root,
                  s.default["root_".concat(i, "_").concat(o)],
                  s.default["root_weight_".concat(u)],
                  d,
                ),
                ..._,
                children: c,
              });
            }
            (t.CaptionComponent = d),
              (t.Caption = (0, o.forwardRef)((e, t) =>
                (0, r.jsx)(d, { forwardRef: t, ...e }),
              ));
          },
          404: function (e, t, a) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Heading = t.HeadingComponent = void 0);
            let r = a(9541),
              l = a(5881),
              o = a(810),
              n = a(4721),
              s = i(a(8544));
            (t.HeadingComponent = (e) => {
              let {
                forwardRef: t,
                variant: a,
                weight: i = "bold",
                size: o = "s",
                className: d,
                children: c,
                ...u
              } = e;
              return (0, r.jsx)(n.Typography, {
                variant: a,
                ref: t,
                className: (0, l.clsx)(
                  s.default.root,
                  s.default["root_size_".concat(o)],
                  s.default["root_weight_".concat(i)],
                  d,
                ),
                ...u,
                children: c,
              });
            }),
              (t.Heading = (0, o.forwardRef)((e, a) =>
                (0, r.jsx)(t.HeadingComponent, { forwardRef: a, ...e }),
              ));
          },
          4721: function (e, t, a) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Typography = t.TypographyComponent = void 0);
            let r = a(9541),
              l = a(5881),
              o = a(810),
              n = i(a(2524));
            function s(e) {
              let {
                  forwardRef: t,
                  style: a,
                  className: i,
                  children: o,
                  variant: s,
                  lineClamp: d,
                  ...c
                } = e,
                u = d && "string" == typeof o ? o : void 0;
              return (0, r.jsx)(s, {
                style: { ...a, WebkitLineClamp: d },
                ref: t,
                title: u,
                className: (0, l.clsx)(
                  n.default.root,
                  {
                    [n.default.root_clamp]: d && d > 0,
                    [n.default.root_clamp_oneline]: d && 1 === d,
                    [n.default.root_clamp_multiline]: d && d > 1,
                  },
                  i,
                ),
                ...c,
                children: o,
              });
            }
            (t.TypographyComponent = s),
              (t.Typography = (0, o.forwardRef)((e, t) =>
                (0, r.jsx)(s, { forwardRef: t, ...e }),
              ));
          },
          2582: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Heading = t.Caption = void 0);
            var i = a(7743);
            Object.defineProperty(t, "Caption", {
              enumerable: !0,
              get: function () {
                return i.Caption;
              },
            });
            var r = a(404);
            Object.defineProperty(t, "Heading", {
              enumerable: !0,
              get: function () {
                return r.Heading;
              },
            });
          },
          810: (e) => {
            e.exports = n;
          },
        },
        q = {};
      function K(e) {
        var t = q[e];
        if (void 0 !== t) return t.exports;
        var a = (q[e] = { exports: {} });
        return Q[e].call(a.exports, a, a.exports, K), a.exports;
      }
      (K.d = (e, t) => {
        for (var a in t)
          K.o(t, a) &&
            !K.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      }),
        (K.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (K.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var X = {};
      Object.defineProperty(X, "__esModule", { value: !0 }),
        (X.Label = void 0),
        (i = K(2)),
        Object.defineProperty(X, "Label", {
          enumerable: !0,
          get: function () {
            return i.Label;
          },
        });
      var G = X.Label;
      X.__esModule;
      var $ = a(87908);
      let ee = (e) => {
          let {
            isMobile: t,
            rewindButton: a,
            pinButton: i,
            trailerButton: r,
          } = e;
          return t
            ? a
              ? "'menu play like' 'rewind rewind rewind'"
              : "'menu play like'"
            : "'play "
                .concat(r ? "trailer" : "", " ")
                .concat(a ? "rewind" : "", " like ")
                .concat(i ? "pin" : "", " menu'");
        },
        et = /^https:\/\/tips\.yandex\.ru\//,
        ea = (e) => {
          var t;
          return (
            e.type === Y.r1.DONATION &&
            et.test(null !== (t = e.url) && void 0 !== t ? t : "")
          );
        };
      var ei = a(17295),
        er = a(5773),
        el = a(24016),
        eo = a.n(el);
      let en = {
          width: 20,
          height: 8,
          tipRadius: 2,
          fill: "var(--ym-background-color-primary-enabled-tooltip)",
        },
        es = (0, l.Pi)((e) => {
          let { action: t } = e,
            { settings: a } = (0, u.oR)(),
            i = (0, u.s0)(null == t ? void 0 : t.url),
            l = a.layout === u.t8.Mobile,
            { contentRef: n } = (0, u.$Y)(),
            d = (0, u.uK)().get(u.ce),
            { state: c, toggleTrue: _, toggleFalse: p } = (0, ei.O)(!1),
            m = (0, o.useCallback)(
              (e) => {
                e || p();
              },
              [p],
            );
          return (
            (0, o.useEffect)(() => {
              if (!d.get(u.BU.ArtistDonationButtonOnbordingShowed)) {
                _();
                let e = new Date(),
                  t = e.setMonth(e.getMonth() + 3);
                d.set(u.BU.ArtistDonationButtonOnbordingShowed, !0, {
                  expires: new Date(t),
                });
              }
            }, [d, _]),
            (0, r.jsxs)(er.u, {
              placement: l ? "top" : "right",
              arrowProps: en,
              offsetOptions: 14,
              isHoverEnabled: !1,
              open: c,
              onOpenChange: m,
              enableAriaDescribedby: !0,
              children: [
                (0, r.jsxs)(x.z, {
                  onClick: i,
                  role: "link",
                  color: "secondary",
                  className: eo().label,
                  withRipple: !1,
                  children: [
                    (0, r.jsx)(v.J, { variant: "donation", size: "xxxs" }),
                    (0, r.jsx)(P.Caption, {
                      type: "text",
                      size: "m",
                      weight: "medium",
                      variant: "span",
                      children: t.title,
                    }),
                  ],
                }),
                (0, r.jsxs)(er._v, {
                  className: eo().donationButtonTooltip,
                  rootNode: n,
                  children: [
                    (0, r.jsx)(x.z, {
                      icon: (0, r.jsx)(v.J, { variant: "close", size: "xxs" }),
                      onClick: p,
                      variant: "text",
                      className: eo().closeTooltip,
                      withRipple: !1,
                    }),
                    (0, r.jsx)(s.Z, {
                      id: "onboarding.artist-donation-button-1",
                      values: { br: (0, r.jsx)("br", {}) },
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        ed = (0, l.Pi)((e) => {
          var t, a, i;
          let { artistMeta: l, className: n, forwardRef: c } = e,
            f = (0, u.s0)(
              "/slides/artist/".concat(null == l ? void 0 : l.artist.id, "/"),
            ),
            h = (0, u.x5)({ pageId: u.Rh.ARTIST, blockId: u.aU.ARTIST }),
            g = (0, j.SB)(null == l ? void 0 : l.artist),
            y = (0, j.BV)(null == l ? void 0 : l.artist),
            { formatMessage: C } = (0, p.Z)(),
            [k, N] = (0, o.useState)(!1),
            { settings: A, experiments: w, trailer: T } = (0, u.oR)(),
            M = A.layout === u.t8.Mobile,
            S =
              w.checkExperiment(u.pe.WebNextEntityTrailer, "on") &&
              true &&
              (null == l ? void 0 : l.artist.hasTrailer) &&
              !M,
            R = (0, o.useMemo)(
              () =>
                (null == l ? void 0 : l.artist.composer)
                  ? C({ id: "entity-names.composer" })
                  : C({ id: "entity-names.singer" }),
              [C, null == l ? void 0 : l.artist.composer],
            ),
            H = (0, o.useMemo)(() => {
              if (null == l ? void 0 : l.lastMonthListeners)
                return (0, r.jsx)(s.Z, {
                  id: "entity-names.listeners-per-month",
                  values: { counter: l.lastMonthListeners },
                });
            }, [null == l ? void 0 : l.lastMonthListeners]),
            E = (0, o.useMemo)(() => {
              var e;
              return null == l
                ? void 0
                : null === (e = l.artist.extraActions) || void 0 === e
                  ? void 0
                  : e.find((e) => e.type === Y.r1.REWIND);
            }, [null == l ? void 0 : l.artist.extraActions]),
            { isPlaying: L, togglePlay: z } = (0, u.qm)({
              playContextParams: {
                contextData: {
                  type: d.Ak.Artist,
                  meta: { id: Number(null == l ? void 0 : l.artist.id) },
                  from: h,
                },
                loadContextMeta: !0,
              },
            }),
            B = (0, o.useMemo)(() => {
              var e, t;
              return M
                ? (0, r.jsx)(_.JM, {
                    className: eo().playControl,
                    color: "primary",
                    buttonVariant: "default",
                    iconSize: "xxl",
                    isPlaying: L,
                    variant: "filled",
                    onClick: z,
                    disabled:
                      !(null == l
                        ? void 0
                        : null === (t = l.artist) || void 0 === t
                          ? void 0
                          : t.isAvailableForPlaying) || !l.artist.isAvailable,
                  })
                : (0, r.jsx)(_.JM, {
                    className: eo().playControl,
                    withRipple: !0,
                    buttonVariant: "default",
                    radius: "xxxl",
                    size: "s",
                    color: "primary",
                    iconSize: "xxs",
                    isPlaying: L,
                    disabled:
                      !(null == l
                        ? void 0
                        : null === (e = l.artist) || void 0 === e
                          ? void 0
                          : e.isAvailableForPlaying) || !l.artist.isAvailable,
                    onClick: z,
                    variant: "default",
                    children: (0, r.jsx)(s.Z, { id: "player-actions.listen" }),
                  });
            }, [
              null == l ? void 0 : l.artist.isAvailable,
              null == l
                ? void 0
                : null === (t = l.artist) || void 0 === t
                  ? void 0
                  : t.isAvailableForPlaying,
              M,
              L,
              z,
            ]),
            O = (0, o.useCallback)(() => {
              (null == l ? void 0 : l.artist.id) &&
                T.openArtistTrailer(null == l ? void 0 : l.artist.id);
            }, [null == l ? void 0 : l.artist.id, T]),
            U = (0, o.useMemo)(
              () =>
                S
                  ? (0, r.jsx)(_.eP, {
                      size: "s",
                      radius: "xxxl",
                      iconSize: "xxs",
                      className: eo().trailerControl,
                      onClick: O,
                      children: (0, r.jsx)(s.Z, { id: "entity-names.trailer" }),
                    })
                  : null,
              [O, S],
            ),
            F = (0, o.useMemo)(() => {
              var e;
              return null == l
                ? void 0
                : null === (e = l.artist.extraActions) || void 0 === e
                  ? void 0
                  : e.find(ea);
            }, [null == l ? void 0 : l.artist.extraActions]),
            W = (0, o.useMemo)(() => {
              if (null == l ? void 0 : l.artist.isForeignAgent)
                return (0, r.jsx)(G, {
                  className: eo().disclaimerLabel,
                  size: "m",
                  children: (0, r.jsx)(s.Z, {
                    id: "extra-explicit.foreign-agent",
                  }),
                });
            }, [null == l ? void 0 : l.artist.isForeignAgent]),
            Z = (0, o.useMemo)(() => {
              let e = M ? "l" : "s",
                t = M ? "m" : "xxs",
                a = {
                  gridTemplateAreas: "".concat(
                    ee({
                      isMobile: M,
                      rewindButton: !!E,
                      pinButton: !M,
                      trailerButton: !!S,
                    }),
                  ),
                };
              return (0, r.jsxs)("div", {
                style: a,
                className: eo().controls,
                children: [
                  B,
                  U,
                  !!E &&
                    (0, r.jsx)(x.z, {
                      className: eo().rewindControl,
                      withRipple: !M,
                      radius: "xxxl",
                      size: "s",
                      color: "primary",
                      onClick: f,
                      variant: "default",
                      role: "link",
                      children: null == E ? void 0 : E.title,
                    }),
                  (0, r.jsx)(_.dJ, {
                    className: eo().likeControl,
                    isLiked: null == l ? void 0 : l.artist.isLiked,
                    onClick: g,
                    withRipple: !M,
                    iconSize: t,
                    size: e,
                    variant: "default",
                    iconClassName: eo().likeIcon,
                    disabled: !(null == l ? void 0 : l.artist.isAvailable),
                  }),
                  !M &&
                    (0, r.jsx)(_.RT, {
                      onClick: y,
                      isPinned: null == l ? void 0 : l.artist.isPinned,
                      className: eo().pinControl,
                      isDisabled: !(null == l ? void 0 : l.artist.isAvailable),
                    }),
                  (0, r.jsx)($.xG, {
                    artist: null == l ? void 0 : l.artist,
                    lastMonthListeners: H,
                    open: k,
                    onOpenChange: N,
                    reference: (0, r.jsx)(x.z, {
                      className: eo().menuControl,
                      size: e,
                      radius: "round",
                      "aria-label": C({ id: "interface-actions.context-menu" }),
                      icon: (0, r.jsx)(v.J, { size: t, variant: "more" }),
                      withRipple: !M,
                      ...(0, m.BA)(m.QM.pageHeader.ARTIST_HEADER_CONTEXT_MENU),
                    }),
                  }),
                ],
              });
            }, [
              M,
              E,
              S,
              B,
              U,
              f,
              null == l ? void 0 : l.artist,
              g,
              y,
              H,
              k,
              C,
            ]),
            V = (0, o.useMemo)(
              () =>
                (0, r.jsxs)("div", {
                  className: eo().meta,
                  children: [
                    (null == l ? void 0 : l.lastMonthListeners) &&
                      (0, r.jsxs)("div", {
                        className: eo().label,
                        ...(0, m.BA)(m.QM.pageHeader.ARTIST_LISTENERS_COUNT),
                        children: [
                          (0, r.jsx)(v.J, { variant: "users", size: "xxxs" }),
                          (0, r.jsx)(P.Caption, {
                            type: "text",
                            size: "m",
                            weight: "medium",
                            variant: "span",
                            children: H,
                          }),
                        ],
                      }),
                    F && (0, r.jsx)(es, { action: F }),
                  ],
                }),
              [null == l ? void 0 : l.lastMonthListeners, F, H],
            );
          return (0, r.jsx)(D, {
            ref: c,
            className: (0, b.W)(eo().root, n),
            entityName: R,
            title:
              (null == l
                ? void 0
                : null === (a = l.artist) || void 0 === a
                  ? void 0
                  : a.name) || "",
            meta: V,
            cover: (0, r.jsx)(I, {
              coverVariant: "round",
              coverUri:
                null == l
                  ? void 0
                  : null === (i = l.artist) || void 0 === i
                    ? void 0
                    : i.coverUri,
              isAvailable: null == l ? void 0 : l.artist.isAvailable,
            }),
            controls: Z,
            disclaimerLabel: W,
          });
        }),
        ec = (0, o.forwardRef)((e, t) =>
          (0, r.jsx)(ed, { forwardRef: t, ...e }),
        );
      var eu = a(30259),
        e_ = a.n(eu);
      let ep = (0, l.Pi)((e) => {
          let {
              album: t,
              className: a,
              "aria-labelledby": i,
              forwardRef: l,
              onVersionClick: n,
            } = e,
            p = (0, u.x5)({ pageId: u.Rh.ALBUM, blockId: u.aU.ALBUM }),
            {
              settings: m,
              sonataState: { unloadedEntitiesData: x },
            } = (0, u.oR)(),
            f = m.layout === u.t8.Mobile,
            h = (0, c.TL)(t),
            g = (0, u.Sf)(t.isLiked, t.type),
            b = (0, c.H0)(t.type),
            { isPlaying: C, togglePlay: P } = (0, u.qm)({
              playContextParams: {
                contextData: { type: d.Ak.Album, meta: { id: t.id }, from: p },
                loadContextMeta: !0,
                entitiesData: x,
              },
            }),
            j = (0, o.useMemo)(
              () =>
                f
                  ? (0, r.jsx)(_.JM, {
                      className: e_().playControl,
                      color: "primary",
                      buttonVariant: "default",
                      iconSize: "xxl",
                      isPlaying: C,
                      onClick: P,
                      variant: "filled",
                      disabled: !t.isAvailable,
                    })
                  : (0, r.jsx)(_.JM, {
                      className: e_().playControl,
                      withRipple: !0,
                      buttonVariant: "default",
                      radius: "xxxl",
                      size: "s",
                      color: "primary",
                      iconSize: "xxs",
                      isPlaying: C,
                      onClick: P,
                      disabled: !t.isAvailable,
                      children: (0, r.jsx)(s.Z, {
                        id: "player-actions.listen",
                      }),
                    }),
              [t.isAvailable, f, C, P],
            ),
            k = (0, o.useMemo)(
              () =>
                (0, r.jsxs)("div", {
                  className: e_().controls,
                  children: [
                    j,
                    (0, r.jsx)(y, { album: t, likeButtonAriaLabel: g }),
                  ],
                }),
              [j, t, g],
            ),
            N = (0, o.useMemo)(() => {
              if (h)
                return (0, r.jsx)(v.J, {
                  variant: "bookmateLogo",
                  className: e_().bookmateLogo,
                });
            }, [h]);
          return (0, r.jsx)(D, {
            ref: l,
            className: a,
            controls: k,
            meta: (0, r.jsx)(w, { album: t }),
            entityName: b,
            entityNameIcon: N,
            title: t.title,
            cover: (0, r.jsx)(I, {
              coverVariant: "square",
              coverUri: t.coverUri,
              isAvailable: t.isAvailable,
              withBookmateBadge: h,
            }),
            "aria-labelledby": i,
            version: t.version,
            onVersionClick: n,
          });
        }),
        em = (0, o.forwardRef)((e, t) =>
          (0, r.jsx)(ep, { forwardRef: t, ...e }),
        );
      var ex = a(12090),
        ev = a(36525),
        ef = a.n(ev),
        eh = a(21351);
      let eg = ["image/png", "image/jpeg", "image/jpg"],
        ey = (e) => eg.includes(e),
        eb = (e) => e > 0 && e <= 2e7,
        eC = (e) => {
          if (!e) return;
          let t = 2 * e.naturalHeight || e.height,
            a = 2 * e.naturalWidth || e.width;
          return t < 5e3 && a < 5e3;
        };
      var eP = a(74708),
        ej = a.n(eP);
      let ek = (0, l.Pi)((e) => {
          let { className: t, playlist: a } = e,
            { settings: i } = (0, u.oR)(),
            l = a.coverUri,
            n = i.layout === u.t8.Mobile,
            s = a.canUserChange && !n,
            { notify: d } = (0, u.d$)(),
            { formatMessage: c } = (0, p.Z)(),
            m = (0, o.useRef)(null),
            [v, f] = (0, o.useState)(l || ""),
            [h, g] = (0, o.useState)(s),
            [y, P] = (0, o.useState)(new FormData()),
            j = (0, eh.zp)(l || "", 600, !1),
            k = (0, eh.zp)(l || "", 300, !1),
            [N, A] = (0, o.useState)(j);
          (0, o.useEffect)(() => {
            h !== s && g(s);
          }, [s, h]);
          let w = (0, o.useCallback)(
              () =>
                d(
                  (0, r.jsx)(_.Q, {
                    error: c({ id: "playlist-errors.failed-to-change-poster" }),
                  }),
                  { containerId: u.W$.ERROR },
                ),
              [d, c],
            ),
            T = (0, o.useCallback)(() => {
              var e;
              null == m ||
                null === (e = m.current) ||
                void 0 === e ||
                e.click();
            }, [m]),
            M = (0, o.useCallback)(
              (e) => {
                "Enter" === e.key && T();
              },
              [T],
            ),
            S = (0, o.useCallback)(
              (e) => {
                let t = e.target,
                  a = (t.files || [])[0] || null;
                if (((t.value = ""), !a || !ey(a.type) || !eb(a.size))) {
                  w();
                  return;
                }
                v && A(v), g(!1), f(URL.createObjectURL(a));
                let i = new FormData();
                i.append("image", a), P(i);
              },
              [w, v],
            ),
            R = (0, o.useCallback)(
              async (e) => {
                let t = e.target,
                  i = () => {
                    f(N), w(), g(!0);
                  };
                if (
                  (!l || (t.currentSrc !== j && t.currentSrc !== k)) &&
                  s &&
                  N !== t.currentSrc
                ) {
                  if (!eC(t)) {
                    i();
                    return;
                  }
                  (await a.changePlaylistCover(y)) === u.SL.ERROR ? i() : g(!0);
                }
              },
              [w, N, a, y, l, s, j, k],
            ),
            H = (0, o.useMemo)(
              () =>
                v
                  ? c({ id: "playlist-actions.change-poster" })
                  : c({ id: "playlist-actions.add-poster" }),
              [v, c],
            );
          return (0, r.jsxs)(C.Paper, {
            radius: "m",
            className: (0, b.W)(ej().root, t),
            children: [
              (0, r.jsx)(_.BE, {
                fit: "cover",
                src: v,
                size: 300,
                className: ej().coverImage,
                withAvatarReplace: !0,
                onLoad: R,
              }),
              h &&
                (0, r.jsx)("div", {
                  className: (0, b.W)(ej().buttonContainer, {
                    [ej().buttonContainer_withCursorPointer]: v,
                  }),
                  children: (0, r.jsxs)("div", {
                    className: (0, b.W)(ej().fileUploadContainer, {
                      [ej().fileUploadContainer_hovered]: v,
                    }),
                    children: [
                      (0, r.jsx)(x.z, {
                        className: ej().button,
                        radius: "xxxl",
                        size: "xxs",
                        color: "secondary",
                        withRipple: !1,
                        onClick: T,
                        onKeyUp: M,
                        "aria-label": c({ id: "playlist-actions.add-poster" }),
                        children: H,
                      }),
                      (0, r.jsx)("form", {
                        className: ej().formFile,
                        encType: "multipart/form-data",
                        children: (0, r.jsx)("input", {
                          ref: m,
                          type: "file",
                          name: "file",
                          accept: "image/jpeg, image/png, image/jpg",
                          onChange: S,
                        }),
                      }),
                    ],
                  }),
                }),
            ],
          });
        }),
        eN = /\[([^([\])]+)\]\(([^(()\s)]+)\)/g,
        eA = /\[[^([\])]+\]\([^(()\s)]+\)/,
        ew = (e, t) => {
          if (!e) return [];
          let a = [...e.matchAll(eN)];
          return e.split(eA).reduce((e, i, l) => {
            e.push(i);
            let { 1: o, 2: n } = a[l] || [];
            return (
              o &&
                n &&
                e.push(
                  (0, r.jsx)(_.rU, { href: n, className: t, children: o }),
                ),
              e
            );
          }, []);
        };
      var eT = a(60656),
        eM = a.n(eT);
      let eS = (0, l.Pi)((e) => {
          let { playlist: t, className: a } = e,
            { formatMessage: i } = (0, p.Z)(),
            l = (0, o.useCallback)(
              (e, t) => {
                switch (e) {
                  case u.Uv.TODAY:
                    return i(
                      { id: "interface-actions.playlist-made-for-today" },
                      t,
                    );
                  case u.Uv.YESTERDAY:
                    return i(
                      { id: "interface-actions.playlist-made-for-yesterday" },
                      t,
                    );
                  case u.Uv.DATE_WITH_YEAR:
                    return i(
                      {
                        id: "interface-actions.playlist-made-for-date-with-year",
                      },
                      t,
                    );
                  default:
                    return i(
                      { id: "interface-actions.playlist-made-for-date" },
                      t,
                    );
                }
              },
              [i],
            ),
            n = (0, o.useCallback)(
              (e, t) => {
                switch (e) {
                  case u.Uv.TODAY:
                    return i(
                      { id: "interface-actions.he-updated-playlist-today" },
                      t,
                    );
                  case u.Uv.YESTERDAY:
                    return i(
                      { id: "interface-actions.he-updated-playlist-yesterday" },
                      t,
                    );
                  case u.Uv.DATE_WITH_YEAR:
                    return i(
                      {
                        id: "interface-actions.he-updated-playlist-date-with-year",
                      },
                      t,
                    );
                  default:
                    return i(
                      { id: "interface-actions.he-updated-playlist-date" },
                      t,
                    );
                }
              },
              [i],
            ),
            s = (0, o.useCallback)(
              (e, t) => {
                switch (e) {
                  case u.Uv.TODAY:
                    return i(
                      { id: "interface-actions.she-updated-playlist-today" },
                      t,
                    );
                  case u.Uv.YESTERDAY:
                    return i(
                      {
                        id: "interface-actions.she-updated-playlist-yesterday",
                      },
                      t,
                    );
                  case u.Uv.DATE_WITH_YEAR:
                    return i(
                      {
                        id: "interface-actions.she-updated-playlist-date-with-year",
                      },
                      t,
                    );
                  default:
                    return i(
                      { id: "interface-actions.she-updated-playlist-date" },
                      t,
                    );
                }
              },
              [i],
            ),
            d = (0, o.useMemo)(() => {
              var e, a, i, r, o, d, c;
              let _ = new Date(t.modified),
                p = (0, u.u9)(_);
              if (t.madeFor)
                return l(p, {
                  playlistReceiver:
                    (null == t
                      ? void 0
                      : null === (r = t.madeFor) || void 0 === r
                        ? void 0
                        : null === (i = r.caseForms) || void 0 === i
                          ? void 0
                          : i.genitive) ||
                    (null == t
                      ? void 0
                      : null === (d = t.madeFor) || void 0 === d
                        ? void 0
                        : null === (o = d.userInfo) || void 0 === o
                          ? void 0
                          : o.login) ||
                    "",
                  updateDate: _,
                });
              if (t.isFavouritePlaylist)
                return (
                  (null === (c = t.owner) || void 0 === c ? void 0 : c.name) ||
                  ""
                );
              let m = {
                updateDate: new Date(t.modified),
                ownerName:
                  (null === (e = t.owner) || void 0 === e ? void 0 : e.name) ||
                  "",
              };
              return (null === (a = t.owner) || void 0 === a
                ? void 0
                : a.sex) === Y.oF.FEMALE
                ? s(p, m)
                : n(p, m);
            }, [t, n, l, s]);
          return (0, r.jsx)(P.Caption, {
            variant: "span",
            className: a,
            type: "text",
            size: "m",
            weight: "medium",
            lineClamp: 1,
            children: d,
          });
        }),
        eR = (0, l.Pi)((e) => {
          let { playlist: t } = e,
            { formatMessage: a } = (0, p.Z)(),
            { settings: i } = (0, u.oR)(),
            { notify: l } = (0, u.d$)(),
            n = i.layout === u.t8.Mobile,
            d = t.canUserChange && !n,
            c = !!t.description,
            { state: m, toggleTrue: v, toggleFalse: f } = (0, ei.O)(!1),
            [h, g] = (0, o.useState)(t.description || ""),
            y = (0, o.useCallback)(async () => {
              f(),
                (await t.changeDescription(h)) === u.SL.ERROR &&
                  l(
                    (0, r.jsx)(_.Q, {
                      error: a({
                        id: "playlist-errors.failed-to-change-description",
                      }),
                    }),
                    { containerId: u.W$.ERROR },
                  );
            }, [a, h, l, t, f]),
            C = (0, o.useCallback)((e) => {
              g(e);
            }, []);
          return (0, r.jsxs)("div", {
            className: eM().root,
            children: [
              c &&
                !m &&
                (0, r.jsxs)(P.Caption, {
                  variant: "span",
                  className: eM().description,
                  type: "text",
                  size: "m",
                  weight: "medium",
                  children: [
                    ew(t.description, eM().descriptionLink),
                    d &&
                      (0, r.jsx)(x.z, {
                        variant: "text",
                        withRipple: !1,
                        onClick: v,
                        className: (0, b.W)(
                          eM().descriptionActionLink,
                          eM().addDescription,
                        ),
                        "aria-label": a({
                          id: "playlist-actions.change-description",
                        }),
                        color: "primary",
                        children: (0, r.jsx)(P.Caption, {
                          variant: "span",
                          size: "m",
                          type: "text",
                          className: eM().button,
                          children: (0, r.jsx)(s.Z, {
                            id: "playlist-actions.change-description-abbr",
                          }),
                        }),
                      }),
                  ],
                }),
              !c &&
                d &&
                !m &&
                (0, r.jsx)(x.z, {
                  variant: "text",
                  withRipple: !1,
                  onClick: v,
                  className: eM().descriptionActionLink,
                  "aria-label": a({ id: "playlist-actions.add-description" }),
                  color: "primary",
                  children: (0, r.jsxs)(P.Caption, {
                    variant: "span",
                    size: "m",
                    type: "text",
                    className: eM().button,
                    children: [
                      (0, r.jsx)(s.Z, {
                        id: "playlist-actions.add-description",
                      }),
                      "...",
                    ],
                  }),
                }),
              d &&
                m &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(E, {
                      text: t.description,
                      className: eM().textField,
                      placeholder: "".concat(
                        a({ id: "playlist-actions.add-description" }),
                        "...",
                      ),
                      maxTextLength: ex.Zn,
                      onChangeFinish: C,
                      variant: "textarea",
                    }),
                    (0, r.jsxs)("div", {
                      className: eM().actionButtons,
                      children: [
                        (0, r.jsx)(x.z, {
                          className: eM().saveButton,
                          color: "secondary",
                          radius: "xxxl",
                          size: "s",
                          "aria-label": a({ id: "interface-actions.save" }),
                          onClick: y,
                          withHover: !0,
                          children: (0, r.jsx)(s.Z, {
                            id: "interface-actions.save",
                          }),
                        }),
                        (0, r.jsx)(x.z, {
                          variant: "text",
                          withRipple: !1,
                          onClick: f,
                          className: eM().cancelButton,
                          "aria-label": a({ id: "interface-actions.cancel" }),
                          color: "primary",
                          children: (0, r.jsx)(P.Caption, {
                            variant: "span",
                            size: "m",
                            type: "text",
                            className: eM().button,
                            children: (0, r.jsx)(s.Z, {
                              id: "interface-actions.cancel",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              (0, r.jsx)(eS, { className: eM().updatedText, playlist: t }),
            ],
          });
        });
      var eH = a(74717),
        eE = a(385);
      let eL = (0, l.Pi)((e) => {
          var t, a;
          let { playlist: i, reference: l, onOpenChange: n, open: d } = e,
            { settings: c, experiments: m, trailer: x } = (0, u.oR)(),
            f = (0, ex.SB)(i),
            h = (0, ex.BV)(i),
            g = "".concat(u.aU.PLAYLIST, "-").concat(i.uid, "_").concat(i.kind),
            y = c.layout === u.t8.Mobile,
            b = i.canUserChange,
            C =
              m.checkExperiment(u.pe.WebNextEntityTrailer, "on") &&
              true &&
              i.hasTrailer,
            { notify: P } = (0, u.d$)(),
            { formatMessage: j } = (0, p.Z)(),
            k = (0, eH.useRouter)(),
            { href: N } = (0, u.qK)(
              "/users/"
                .concat(
                  null === (t = i.owner) || void 0 === t ? void 0 : t.login,
                  "/playlists/",
                )
                .concat(i.kind),
            ),
            { isPlaying: A, togglePlay: w } = (0, u.Qh)({
              seeds: null !== (a = i.seeds) && void 0 !== a ? a : [],
              pageIdForFrom: u.Rh.RADIO,
              blockIdForFrom: g,
            }),
            T = (0, o.useCallback)(() => {
              A || w();
            }, [A, w]),
            M = (0, o.useCallback)(() => {
              x.openPlaylistTrailer(i.uid, i.kind);
            }, [i.kind, i.uid, x]),
            S = (0, o.useCallback)(async () => {
              if ((await i.deletePlaylist()) === u.SL.ERROR) {
                P(
                  (0, r.jsx)(_.Q, {
                    error: j({
                      id: "playlist-errors.failed-to-remove-playlist",
                    }),
                  }),
                  { containerId: u.W$.ERROR },
                );
                return;
              }
              k.push("/collection");
            }, [j, P, i, k]);
          (0, u.ZP)(d);
          let R = (i.isPublic || i.isFavouritePlaylist) && i.isAvailable;
          return (0, r.jsxs)(eE.v2, {
            reference: l,
            isMobile: y,
            title: i.title,
            description: i.description,
            offsetOptions: 10,
            open: d,
            onOpenChange: n,
            children: [
              !y && (0, r.jsx)(_.Zd, { onClick: h, isPinned: i.isPinned }),
              !i.isFavouritePlaylist &&
                (0, r.jsx)(_.xZ, { onClick: f, isLiked: i.isLiked }),
              C && (0, r.jsx)(_.NB, { onClick: M }),
              (0, r.jsx)(_.GQ, {
                disabled: !i.isAvailable,
                onClick: T,
                variant: "playlist",
              }),
              (0, r.jsx)(_.zq, {
                disabled: !R,
                shareLink: N,
                entityVariant: "playlist",
                entityTitle: i.title,
              }),
              b &&
                (0, r.jsx)(eE.sN, {
                  icon: (0, r.jsx)(v.J, { variant: "bucket" }),
                  onClick: S,
                  children: (0, r.jsx)(s.Z, {
                    id: "playlist-actions.remove-playlist",
                  }),
                }),
            ],
          });
        }),
        ez = (0, l.Pi)((e) => {
          let { playlist: t, isDisabled: a, className: i, forwardRef: l } = e,
            n = (0, u.x5)({ pageId: u.Rh.PLAYLIST, blockId: u.aU.PLAYLIST }),
            {
              settings: c,
              sonataState: { unloadedEntitiesDataFromModels: f },
              experiments: h,
              trailer: g,
            } = (0, u.oR)(),
            { formatMessage: y, formatNumber: b } = (0, p.Z)(),
            [C, j] = (0, o.useState)(!1),
            k = (0, ex.SB)(t),
            N = (0, ex.BV)(t),
            A = c.layout === u.t8.Mobile,
            w = A ? "l" : "s",
            T = A ? "m" : "xxs",
            { notify: M } = (0, u.d$)(),
            S = t.canUserChange && !A,
            R = (0, o.useCallback)(
              async (e) => {
                (await t.changeTitle(e)) === u.SL.ERROR &&
                  M(
                    (0, r.jsx)(_.Q, {
                      error: y({
                        id: "playlist-errors.failed-to-change-title",
                      }),
                    }),
                    { containerId: u.W$.ERROR },
                  );
              },
              [y, M, t],
            ),
            { isPlaying: H, togglePlay: E } = (0, u.qm)({
              playContextParams: {
                contextData: {
                  type: d.Ak.Playlist,
                  meta: { id: t.id, uuid: t.uuid },
                  from: n,
                },
                loadContextMeta: !0,
                entitiesData: f,
              },
            }),
            L = (0, o.useMemo)(() => {
              if (t.actualLikesCount && t.actualLikesCount > 0)
                return (0, r.jsx)(P.Caption, {
                  variant: "span",
                  type: "controls",
                  size: "s",
                  weight: "medium",
                  children: t.actualLikesCount && b(t.actualLikesCount),
                });
            }, [t.actualLikesCount, b]),
            z = (0, o.useMemo)(
              () =>
                A
                  ? (0, r.jsx)(_.JM, {
                      className: ef().playControl,
                      color: "primary",
                      buttonVariant: "default",
                      iconSize: "xxl",
                      isPlaying: H,
                      variant: "filled",
                      onClick: E,
                      disabled: a,
                    })
                  : (0, r.jsx)(_.JM, {
                      className: ef().playControl,
                      withRipple: !0,
                      buttonVariant: "default",
                      radius: "xxxl",
                      size: "s",
                      color: "primary",
                      iconSize: "xxs",
                      isPlaying: H,
                      onClick: E,
                      disabled: a,
                      children: (0, r.jsx)(s.Z, {
                        id: "player-actions.listen",
                      }),
                    }),
              [a, A, H, E],
            ),
            B = (0, o.useCallback)(() => {
              g.openPlaylistTrailer(t.uid, t.kind);
            }, [t.kind, t.uid, g]),
            O = (0, o.useMemo)(
              () =>
                !(
                  h.checkExperiment(u.pe.WebNextEntityTrailer, "on") &&
                  true &&
                  t.hasTrailer
                ) || A
                  ? null
                  : (0, r.jsx)(_.eP, {
                      size: "s",
                      radius: "xxxl",
                      iconSize: "xxs",
                      className: ef().trailerControl,
                      onClick: B,
                      children: (0, r.jsx)(s.Z, { id: "entity-names.trailer" }),
                    }),
              [h, B, A, t.hasTrailer],
            ),
            U = (0, o.useMemo)(
              () =>
                t.isFavouritePlaylist
                  ? void 0
                  : A
                    ? (0, r.jsx)(_.dJ, {
                        className: ef().likeControl,
                        isLiked: t.isLiked,
                        onClick: k,
                        variant: "default",
                        size: w,
                        iconSize: T,
                        iconClassName: ef().likeIcon,
                      })
                    : (0, r.jsx)(_.dJ, {
                        className: ef().likeControl,
                        isLiked: t.isLiked,
                        onClick: k,
                        withRipple: !0,
                        iconSize: T,
                        size: w,
                        variant: "default",
                        iconClassName: ef().likeIcon,
                        children: L,
                      }),
              [w, k, T, A, L, t.isFavouritePlaylist, t.isLiked],
            ),
            F = (0, o.useMemo)(
              () =>
                (0, r.jsxs)("div", {
                  className: ef().controls,
                  children: [
                    z,
                    O,
                    U,
                    !A &&
                      (0, r.jsx)(_.RT, {
                        onClick: N,
                        isPinned: t.isPinned,
                        className: ef().pinControl,
                      }),
                    (0, r.jsx)(eL, {
                      playlist: t,
                      open: C,
                      onOpenChange: j,
                      reference: (0, r.jsx)(x.z, {
                        className: ef().menuControl,
                        size: w,
                        radius: "round",
                        "aria-label": y({
                          id: "interface-actions.context-menu",
                        }),
                        icon: (0, r.jsx)(v.J, { size: T, variant: "more" }),
                        withRipple: !A,
                        ...(0, m.BA)(
                          m.QM.pageHeader.PLAYLIST_HEADER_CONTEXT_MENU,
                        ),
                      }),
                    }),
                  ],
                }),
              [z, O, U, N, t, C, w, y, T, A],
            );
          return (0, r.jsx)(D, {
            ref: l,
            className: i,
            controls: F,
            meta: (0, r.jsx)(eR, { playlist: t }),
            entityName: y({ id: "entity-names.playlist" }),
            title: t.title,
            canChangeTitle: S,
            maxTitleLength: ex.cp,
            onTitleChange: R,
            cover: (0, r.jsx)(ek, { playlist: t }),
          });
        }),
        eB = (0, o.forwardRef)((e, t) =>
          (0, r.jsx)(ez, { forwardRef: t, ...e }),
        );
      var eO = a(90679),
        eD = a(19099),
        eU = a.n(eD);
      let eF = (0, l.Pi)((e) => {
        let { className: t, coverRadius: a = "m", isActive: i } = e,
          { settings: l } = (0, u.oR)(),
          n = (0, o.useMemo)(
            () =>
              l.layout === u.t8.Mobile
                ? (0, r.jsxs)("div", {
                    className: eU().controls,
                    children: [
                      (0, r.jsx)(eO.Shimmer, {
                        className: eU().button,
                        radius: "round",
                        isActive: i,
                      }),
                      (0, r.jsx)(eO.Shimmer, {
                        className: eU().button,
                        radius: "round",
                        isActive: i,
                      }),
                      (0, r.jsx)(eO.Shimmer, {
                        className: eU().button,
                        radius: "round",
                        isActive: i,
                      }),
                    ],
                  })
                : (0, r.jsxs)("div", {
                    className: eU().controls,
                    children: [
                      (0, r.jsx)(eO.Shimmer, {
                        className: eU().desktopPlayButton,
                        isActive: i,
                      }),
                      (0, r.jsx)(eO.Shimmer, {
                        className: eU().button,
                        radius: "round",
                        isActive: i,
                      }),
                      (0, r.jsx)(eO.Shimmer, {
                        className: eU().button,
                        radius: "round",
                        isActive: i,
                      }),
                      (0, r.jsx)(eO.Shimmer, {
                        className: eU().button,
                        radius: "round",
                        isActive: i,
                      }),
                    ],
                  }),
            [i, l.layout],
          );
        return (0, r.jsxs)("div", {
          className: (0, b.W)(eU().root, t),
          children: [
            (0, r.jsx)(eO.Shimmer, {
              className: eU().cover,
              radius: a,
              isActive: i,
            }),
            (0, r.jsxs)("div", {
              className: eU().content,
              children: [
                (0, r.jsxs)("div", {
                  className: eU().info,
                  children: [
                    (0, r.jsx)(eO.Shimmer, {
                      className: eU().entityName,
                      radius: "s",
                      isActive: i,
                    }),
                    (0, r.jsx)(eO.Shimmer, {
                      className: eU().title,
                      radius: "xl",
                      isActive: i,
                    }),
                    (0, r.jsx)(eO.Shimmer, {
                      className: eU().meta,
                      radius: "s",
                      isActive: i,
                    }),
                  ],
                }),
                n,
              ],
            }),
          ],
        });
      });
    },
    23067: function (e) {
      e.exports = {
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
    60184: function (e) {
      e.exports = {
        menuControl: "PageHeaderAlbumControls_menuControl__wlqyr",
        likeControl: "PageHeaderAlbumControls_likeControl__eohAO",
        pinControl: "PageHeaderAlbumControls_pinControl__kq6_T",
        trailerControl: "PageHeaderAlbumControls_trailerControl___HcW0",
      };
    },
    72408: function (e) {
      e.exports = {
        meta: "PageHeaderAlbumMeta_meta__zsMI8",
        artistCover: "PageHeaderAlbumMeta_artistCover__L3jJ0",
        artistLabel: "PageHeaderAlbumMeta_artistLabel__2WZSM",
        year: "PageHeaderAlbumMeta_year__2X3NO",
        artists: "PageHeaderAlbumMeta_artists__Nfdob",
        artistsSpoiler: "PageHeaderAlbumMeta_artistsSpoiler__VOkfE",
        artistLink: "PageHeaderAlbumMeta_artistLink__eTSrZ",
        year_dot: "PageHeaderAlbumMeta_year_dot__TrSFr",
      };
    },
    77225: function (e) {
      e.exports = {
        root: "PageHeaderBase_root__xMIBu",
        coverCell: "PageHeaderBase_coverCell__nBx4c",
        content: "PageHeaderBase_content___DNyv",
        info: "PageHeaderBase_info__GRcah",
        entityContainer: "PageHeaderBase_entityContainer__BDwxT",
        title_withDisclaimerLabel:
          "PageHeaderBase_title_withDisclaimerLabel__Apuhc",
        entityName: "PageHeaderBase_entityName__9Sj_Q",
        meta: "PageHeaderBase_meta__bMvfR",
        meta_withDisclaimerLabel:
          "PageHeaderBase_meta_withDisclaimerLabel__nxckS",
        controls: "PageHeaderBase_controls__HzGgE",
      };
    },
    69516: function (e) {
      e.exports = {
        root: "PageHeaderTextField_root__Aq9UL",
        root_textarea: "PageHeaderTextField_root_textarea__OgDzd",
      };
    },
    35611: function (e) {
      e.exports = {
        root: "PageHeaderTitle_root__ESu2q",
        editButton: "PageHeaderTitle_editButton__KF4eh",
        editButton_centered: "PageHeaderTitle_editButton_centered__W9EwU",
        textField: "PageHeaderTitle_textField__LXJ3X",
        textField_long: "PageHeaderTitle_textField_long__ReeJz",
        title: "PageHeaderTitle_title__caKyB",
        version: "PageHeaderTitle_version__g5BeO",
        version_withOtherVersions:
          "PageHeaderTitle_version_withOtherVersions__Amfwk",
        heading: "PageHeaderTitle_heading__UADXi",
        heading_withVersion: "PageHeaderTitle_heading_withVersion__jw12r",
        textFieldContainer: "PageHeaderTitle_textFieldContainer__FSD_B",
        font_long: "PageHeaderTitle_font_long__q9Leq",
        font_short: "PageHeaderTitle_font_short__76VRG",
        font_mobile: "PageHeaderTitle_font_mobile__M1__v",
        stickyTitle: "PageHeaderTitle_stickyTitle__CL1m4",
      };
    },
    55608: function (e) {
      e.exports = {
        coverImage: "PageHeaderCover_coverImage__i0wBv",
        bookmateBadge: "PageHeaderCover_bookmateBadge__VBelf",
      };
    },
    19099: function (e) {
      e.exports = {
        root: "PageHeaderShimmer_root__kqSwa",
        cover: "PageHeaderShimmer_cover__ay2cr",
        content: "PageHeaderShimmer_content__SdBKK",
        info: "PageHeaderShimmer_info__cZkS2",
        entityName: "PageHeaderShimmer_entityName__tlWnA",
        title: "PageHeaderShimmer_title__xKG4e",
        meta: "PageHeaderShimmer_meta__YWx0m",
        controls: "PageHeaderShimmer_controls__gPErM",
        desktopPlayButton: "PageHeaderShimmer_desktopPlayButton__R7EmH",
        button: "PageHeaderShimmer_button__13qrG",
      };
    },
    79495: function (e) {
      e.exports = {
        playControl: "PageHeaderAlbum_playControl__fFyS9",
        controlsContainer: "PageHeaderAlbum_controlsContainer__0djMk",
        controls: "PageHeaderAlbum_controls__e3QCT",
      };
    },
    24016: function (e) {
      e.exports = {
        playControl: "PageHeaderArtist_playControl__N_3l_",
        trailerControl: "PageHeaderArtist_trailerControl__BWQXJ",
        likeControl: "PageHeaderArtist_likeControl__oEdXe",
        menuControl: "PageHeaderArtist_menuControl__8qi0J",
        pinControl: "PageHeaderArtist_pinControl__dQToz",
        controls: "PageHeaderArtist_controls__U_6g7",
        disclaimerLabel: "PageHeaderArtist_disclaimerLabel__IhLi8",
        main: "PageHeaderArtist_main__VNnip",
        rewindControl: "PageHeaderArtist_rewindControl__BWibU",
        meta: "PageHeaderArtist_meta__ZAlx_",
        label: "PageHeaderArtist_label__rXyrB",
        donationButtonTooltip: "PageHeaderArtist_donationButtonTooltip__G7XtX",
        closeTooltip: "PageHeaderArtist_closeTooltip__z2w_O",
      };
    },
    30259: function (e) {
      e.exports = {
        playControl: "PageHeaderNonMusic_playControl__g_ILX",
        controls: "PageHeaderNonMusic_controls__IlqCY",
        bookmateLogo: "PageHeaderNonMusic_bookmateLogo__ic4zt",
      };
    },
    36525: function (e) {
      e.exports = {
        trailerControl: "PageHeaderPlaylist_trailerControl__grrD9",
        pinControl: "PageHeaderPlaylist_pinControl__hJOde",
        menuControl: "PageHeaderPlaylist_menuControl__RGH0G",
        likeControl: "PageHeaderPlaylist_likeControl__bCypn",
        playControl: "PageHeaderPlaylist_playControl__yRQfm",
        controls: "PageHeaderPlaylist_controls__uSwwK",
      };
    },
    74708: function (e) {
      e.exports = {
        root: "PageHeaderPlaylistCover_root__Vdn75",
        coverImage: "PageHeaderPlaylistCover_coverImage__OC58K",
        button: "PageHeaderPlaylistCover_button__vCYgD",
        fileUploadContainer:
          "PageHeaderPlaylistCover_fileUploadContainer___JnqP",
        fileUploadContainer_hovered:
          "PageHeaderPlaylistCover_fileUploadContainer_hovered__RtD_X",
        buttonContainer: "PageHeaderPlaylistCover_buttonContainer__OkEaT",
        buttonContainer_withCursorPointer:
          "PageHeaderPlaylistCover_buttonContainer_withCursorPointer__pnzha",
        formFile: "PageHeaderPlaylistCover_formFile__1xnry",
      };
    },
    60656: function (e) {
      e.exports = {
        root: "PageHeaderPlaylistMeta_root__9SHZ0",
        description: "PageHeaderPlaylistMeta_description__edoVx",
        descriptionButton: "PageHeaderPlaylistMeta_descriptionButton__Jkbg9",
        descriptionLink: "PageHeaderPlaylistMeta_descriptionLink__OcY5m",
        updatedText: "PageHeaderPlaylistMeta_updatedText__FSo_0",
        descriptionActionLink:
          "PageHeaderPlaylistMeta_descriptionActionLink__aGgtK",
        addDescription: "PageHeaderPlaylistMeta_addDescription__bFw2Y",
        textField: "PageHeaderPlaylistMeta_textField__J5QMd",
        actionButtons: "PageHeaderPlaylistMeta_actionButtons__EYX8Z",
        saveButton: "PageHeaderPlaylistMeta_saveButton__rZbPS",
        cancelButton: "PageHeaderPlaylistMeta_cancelButton__Qc5lG",
      };
    },
  },
]);
