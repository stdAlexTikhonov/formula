(this["webpackJsonpformula-editor"] =
  this["webpackJsonpformula-editor"] || []).push([
  [0],
  {
    103: function (e, t, n) {},
    110: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0),
        a = n.n(r),
        i = n(11),
        o = n.n(i),
        s = (n(103), n(152)),
        c = n(10),
        u = n(51),
        l = function () {
          return Object(u.b)();
        },
        d = u.c,
        p = n(60),
        b = Object(p.b)({
          name: "code",
          initialState: {
            value: "",
            index: 0,
            brace: !1,
            update_tree: !1,
            data: {},
            drawer: !1,
            text: !0,
            animation: !1,
          },
          reducers: {
            setCode: function (e, t) {
              e.value = t.payload;
            },
            setData: function (e, t) {
              e.data = t.payload;
            },
            setCurrentIndex: function (e, t) {
              e.index = t.payload;
            },
            toggleBrace: function (e) {
              e.brace = !e.brace;
            },
            updateTree: function (e) {
              e.update_tree = !e.update_tree;
            },
            toggleDrawer: function (e) {
              e.drawer = !e.drawer;
            },
            toggleText: function (e) {
              e.text = !e.text;
            },
            toggleAnimation: function (e) {
              e.animation = !e.animation;
            },
          },
        }),
        g = b.actions,
        h = g.setCode,
        f = g.setCurrentIndex,
        j = g.toggleBrace,
        m = g.updateTree,
        y = g.setData,
        x = (g.toggleDrawer, g.toggleText),
        O = g.toggleAnimation,
        _ = function (e) {
          return e.code.value;
        },
        v = function (e) {
          return e.code.index;
        },
        N = function (e) {
          return e.code.brace;
        },
        F = function (e) {
          return e.code.update_tree;
        },
        k = function (e) {
          return e.code.data;
        },
        w = function (e) {
          return e.code.drawer;
        },
        R = function (e) {
          return e.code.text;
        },
        C = function (e) {
          return e.code.animation;
        },
        S = b.reducer,
        T = n(140),
        E = Object(T.a)({
          box: {
            display: "flex",
            alignItems: "center",
            flexDirection: function (e) {
              return e.state ? "column" : "row";
            },
            cursor: "pointer",
            borderLeft: function (e) {
              return e.brace ? "2px solid black" : "none";
            },
            borderRight: function (e) {
              return e.brace ? "2px solid black" : "none";
            },
            margin: 5,
            padding: 5,
            position: "relative",
            borderRadius: 10,
          },
          button: {},
          block: { borderRadius: 10, transition: "transform 1s" },
          block_transform: {
            transform: function (e) {
              return e.state ? "rotate(-90deg)" : "rotate(90deg)";
            },
          },
          node: { transition: "transform 1s" },
          node_transform: {
            transform: function (e) {
              return e.state ? "rotate(90deg)" : "rotate(-90deg)";
            },
          },
          btn: { position: "absolute", top: -18, right: -12 },
          icon: { fontSize: 15 },
        }),
        A = n(158),
        P = n(151),
        I = n(145),
        D = n(72),
        z = n(73),
        L = (function () {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "OPERAND";
            Object(D.a)(this, e),
              (this.node_type = void 0),
              (this.index = void 0),
              (this.value = void 0),
              (this.left = void 0),
              (this.right = void 0),
              (this.args = void 0),
              (this.arbitrary_args = void 0),
              (this.user_input = void 0),
              (this.expected_type = void 0),
              (this.type = void 0),
              (this.type_error = void 0),
              (this.index = t),
              (this.node_type = n),
              (this.value = ""),
              (this.left = null),
              (this.right = null),
              (this.args = []),
              (this.user_input = !1),
              (this.arbitrary_args = !1),
              (this.expected_type = "any"),
              (this.type = "any"),
              (this.type_error = !1);
          }
          return (
            Object(z.a)(e, [
              {
                key: "setValue",
                value: function (e) {
                  this.value = e;
                },
              },
              {
                key: "addArguments",
                value: function (t) {
                  for (var n = 0, r = t ? t.length : 1; n < r; ) {
                    e.count++;
                    var a = new e(e.count);
                    (a.expected_type = t ? t[n] : this.args[0].type),
                      this.args.push(a),
                      n++;
                  }
                },
              },
              {
                key: "setLeft",
                value: function (t) {
                  e.count++,
                    (this.left = new e(e.count)),
                    (this.left.expected_type = t);
                },
              },
              {
                key: "setRight",
                value: function (t) {
                  e.count++,
                    (this.right = new e(e.count)),
                    (this.right.expected_type = t);
                },
              },
              {
                key: "setArgs",
                value: function (t, n) {
                  e.count++,
                    (this.right = new e(e.count, "ARGS")),
                    (this.right.arbitrary_args = t),
                    n && this.right.addArguments(n);
                },
              },
              {
                key: "checkType",
                value: function () {
                  this.type_error =
                    "any" !== this.expected_type &&
                    this.expected_type !== this.type;
                },
              },
            ]),
            e
          );
        })();
      L.count = 0;
      var U = new ((function () {
          function e() {
            Object(D.a)(this, e), (this.root = new L());
          }
          return (
            Object(z.a)(e, [
              {
                key: "find",
                value: function (e) {
                  return this.root.index === e
                    ? this.root
                    : "OPERAND" === this.root.node_type ||
                      "OPERATOR" === this.root.node_type
                    ? this._find(this.root.left, e) ||
                      this._find(this.root.right, e)
                    : "FUNCTION" === this.root.node_type
                    ? this._find(this.root.args[0], e) ||
                      this._find(this.root.args[1], e) ||
                      this._find(this.root.args[2], e) ||
                      this._find(this.root.args[3], e) ||
                      this._find(this.root.args[4], e) ||
                      this._find(this.root.args[5], e) ||
                      this._find(this.root.args[6], e) ||
                      this._find(this.root.args[7], e) ||
                      this._find(this.root.args[8], e) ||
                      this._find(this.root.args[9], e)
                    : null;
                },
              },
              {
                key: "_find",
                value: function (e, t) {
                  if (e)
                    return e.index === t
                      ? e
                      : "OPERAND" === e.node_type || "OPERATOR" === e.node_type
                      ? this._find(e.left, t) || this._find(e.right, t)
                      : "FUNCTION" === e.node_type || "ARGS" === e.node_type
                      ? this._find(e.args[0], t) ||
                        this._find(e.args[1], t) ||
                        this._find(e.args[2], t) ||
                        this._find(e.args[3], t) ||
                        this._find(e.args[4], t) ||
                        this._find(e.args[5], t) ||
                        this._find(e.args[6], t) ||
                        this._find(e.args[7], t) ||
                        this._find(e.args[8], t) ||
                        this._find(e.args[9], t)
                      : null;
                },
              },
              {
                key: "delete",
                value: function (e) {
                  if (this.root.index === e) this.root = new L();
                  else if (this.root.left && this.root.left.index === e)
                    this.root.left = new L(this.root.left.index);
                  else {
                    if (!this.root.right || this.root.right.index !== e) {
                      if ("FUNCTION" === this.root.node_type) {
                        for (var t = 0; t < this.root.args.length; t++)
                          this.root.args[t].index === e &&
                            (this.root.args[t] = new L(
                              this.root.args[t].index
                            ));
                        return (
                          this._delete(this.root.args[0], e) ||
                          this._delete(this.root.args[1], e) ||
                          this._delete(this.root.args[2], e) ||
                          this._delete(this.root.args[3], e) ||
                          this._delete(this.root.args[4], e) ||
                          this._delete(this.root.args[5], e) ||
                          this._delete(this.root.args[6], e) ||
                          this._delete(this.root.args[7], e) ||
                          this._delete(this.root.args[8], e) ||
                          this._delete(this.root.args[9], e)
                        );
                      }
                      return (
                        this._delete(this.root.left, e) ||
                        this._delete(this.root.right, e)
                      );
                    }
                    this.root.right = new L(this.root.right.index);
                  }
                },
              },
              {
                key: "_delete",
                value: function (e, t) {
                  if (e)
                    if (e.index === t) e = new L(e.index);
                    else if (e.left && e.left.index === t)
                      e.left = new L(e.left.index);
                    else {
                      if (!e.right || e.right.index !== t) {
                        if (
                          "FUNCTION" === e.node_type ||
                          "ARGS" === e.node_type
                        ) {
                          for (var n = 0; n < e.args.length; n++)
                            e.args[n].index === t &&
                              (e.args[n] = new L(e.args[n].index));
                          return (
                            this._delete(e.args[0], t) ||
                            this._delete(e.args[1], t) ||
                            this._delete(e.args[2], t) ||
                            this._delete(e.args[3], t) ||
                            this._delete(e.args[4], t) ||
                            this._delete(e.args[5], t) ||
                            this._delete(e.args[6], t) ||
                            this._delete(e.args[7], t) ||
                            this._delete(e.args[8], t) ||
                            this._delete(e.args[9], t)
                          );
                        }
                        return (
                          this._delete(e.left, t) || this._delete(e.right, t)
                        );
                      }
                      e.right = new L(e.right.index);
                    }
                },
              },
              {
                key: "swap_with_left",
                value: function (e) {
                  var t = this.find(e),
                    n = t.left;
                  if (t) {
                    if (
                      "OPERATOR" !== t.node_type ||
                      "OPERATOR" !== n.node_type ||
                      "in" === n.value
                    )
                      return !1;
                    var r = [n.value, t.value];
                    (t.value = r[0]), (n.value = r[1]);
                    var a = [n.type, t.type];
                    (t.type = a[0]), (n.type = a[1]);
                    var i = [n.expected_type, t.expected_type];
                    (t.expected_type = i[0]), (n.expected_type = i[1]);
                  }
                  return !1;
                },
              },
              {
                key: "swap_with_right",
                value: function (e) {
                  var t = this.find(e),
                    n = t.right;
                  if (t) {
                    if (
                      "OPERATOR" !== t.node_type ||
                      "OPERATOR" !== n.node_type ||
                      "in" === n.value
                    )
                      return !1;
                    var r = [n.value, t.value];
                    (t.value = r[0]), (n.value = r[1]);
                    var a = [n.type, t.type];
                    (t.type = a[0]), (n.type = a[1]);
                    var i = [n.expected_type, t.expected_type];
                    (t.expected_type = i[0]), (n.expected_type = i[1]);
                  }
                  return !1;
                },
              },
              {
                key: "print",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "";
                  return (
                    e &&
                      ("OPERATOR" === e.node_type &&
                        ((t += "("),
                        (t = this.print(e.left, t)),
                        (t += " "),
                        (t += e.value.toUpperCase()),
                        (t += " "),
                        (t = this.print(e.right, t)),
                        (t += ")")),
                      ("FUNCTION" !== e.node_type && "ARGS" !== e.node_type) ||
                        ((t += e.value.toUpperCase() + "("),
                        e.args[0] && (t = this.print(e.args[0], t) + ", "),
                        e.args[1] && (t = this.print(e.args[1], t) + ", "),
                        e.args[2] && (t = this.print(e.args[2], t) + ", "),
                        e.args[3] && (t = this.print(e.args[3], t) + ", "),
                        e.args[4] && (t = this.print(e.args[4], t) + ", "),
                        e.args[5] && (t = this.print(e.args[5], t) + ", "),
                        e.args[6] && (t = this.print(e.args[6], t) + ", "),
                        e.args[7] && (t = this.print(e.args[7], t) + ", "),
                        e.args[8] && (t = this.print(e.args[8], t) + ", "),
                        e.args[9] && (t = this.print(e.args[9], t)),
                        (t += ")")),
                      "OPERAND" === e.node_type &&
                        ("string" === e.type && e.user_input
                          ? (t += ' "')
                          : (t += " "),
                        (t += e.value),
                        "string" === e.type && e.user_input
                          ? (t += '" ')
                          : (t += " "))),
                    t
                  );
                },
              },
            ]),
            e
          );
        })())(),
        G = n(2),
        M = function (e) {
          var t = e.setNode,
            n = e.onClose,
            r = l(),
            i = d(v),
            o = U.find(i),
            u = a.a.useState(o.user_input ? o.value : ""),
            p = Object(c.a)(u, 2),
            b = p[0],
            g = p[1];
          return Object(G.jsxs)(s.a, {
            display: "flex",
            padding: 1,
            maxWidth: "300px",
            children: [
              Object(G.jsx)(P.a, {
                autoFocus: !0,
                style: { alignSelf: "center", flexGrow: 1 },
                placeholder:
                  "\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0432\u0432\u043e\u0434",
                value: b,
                onChange: function (e) {
                  (o.type = isNaN(parseInt(e.target.value))
                    ? "string"
                    : "number"),
                    g(e.target.value);
                },
              }),
              Object(G.jsx)(I.a, {
                onClick: function (e) {
                  r(h(b)),
                    (o.node_type = "OPERAND"),
                    (o.left = null),
                    (o.right = null),
                    (o.user_input = !0),
                    (o.type = isNaN(parseInt(b)) ? "string" : "number"),
                    (o.value = b),
                    o.checkType(),
                    t(o),
                    r(m()),
                    n && n(e);
                },
                children: "Ok",
              }),
            ],
          });
        },
        V = n(144),
        B = n(147),
        W = n(150),
        H = n(148),
        q = n(75),
        J = n.n(q),
        Y = n(159),
        K = Object(T.a)(function (e) {
          return Object(Y.a)({
            root: {
              width: "100%",
              backgroundColor: e.palette.background.paper,
            },
          });
        }),
        Q = n(62),
        X = n(146),
        Z = { n: "num", s: "str", b: "bool", d: "date", a: "any" },
        $ = {
          n: "\u0427\u0438\u0441\u043b\u043e\u0432\u044b\u0435",
          s: "\u0421\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435",
          b: "\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435",
          d: "\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0434\u0430\u0442\u0430\u043c\u0438",
          a: "\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435",
        },
        ee = function (e) {
          var t = e.items,
            n = e.type,
            i = l(),
            o = d(v),
            s = K(),
            u = a.a.useState(-1),
            p = Object(c.a)(u, 2),
            b = p[0],
            g = p[1],
            f = Object(r.useState)({}),
            j = Object(c.a)(f, 1)[0],
            y = Object(r.useState)([]),
            x = Object(c.a)(y, 2),
            O = x[0],
            _ = x[1];
          Object(r.useEffect)(function () {
            t.forEach(function (e) {
              e &&
                (j["".concat(e.group[0])]
                  ? j["".concat(e.group[0])].push(e)
                  : (j["".concat(e.group[0])] = [e]));
            }),
              _(Object.keys(j));
          }, []);
          return Object(G.jsx)("div", {
            className: s.root,
            children: O.map(function (e) {
              return j[e].length > 0
                ? Object(G.jsxs)(G.Fragment, {
                    children: [
                      Object(G.jsx)(Q.a, {
                        variant: "caption",
                        style: { paddingLeft: 15 },
                        children: $[e] ? $[e] : j[e][0].group,
                      }),
                      Object(G.jsx)(X.a, {}),
                      Object(G.jsx)(V.a, {
                        component: "nav",
                        children: j[e].map(function (e, r) {
                          return Object(G.jsxs)(
                            B.a,
                            {
                              button: !0,
                              selected: b === r,
                              onClick: function (a) {
                                return (function (e, r, a) {
                                  e.stopPropagation(), g(r), i(h(a));
                                  var s = U.find(o);
                                  s &&
                                    ((s.value = a),
                                    (s.node_type = t[r].is_operator
                                      ? "OPERATOR"
                                      : "functions" === n
                                      ? "FUNCTION"
                                      : "OPERAND"),
                                    (s.left = null),
                                    (s.right = null),
                                    (s.user_input = !1),
                                    "functions" === n
                                      ? (t[r].is_operator
                                          ? (s.setLeft(t[r].arguments_types[0]),
                                            s.setArgs(
                                              t[r].arbitrary_args,
                                              t[r].arguments_types
                                            ))
                                          : ((s.args = []),
                                            s.addArguments(
                                              t[r].arguments_types
                                            ),
                                            (s.arbitrary_args =
                                              t[r].arbitrary_args)),
                                        (s.type = t[r].return_type))
                                      : (s.type = t[r].type),
                                    s.checkType(),
                                    i(m()));
                                })(a, r, e.name);
                              },
                              children: [
                                Object(G.jsx)(Q.a, {
                                  variant: "subtitle2",
                                  style: {
                                    fontStyle: "italic",
                                    paddingRight: 10,
                                    minWidth: 30,
                                  },
                                  children: Z[e.group[0]],
                                }),
                                Object(G.jsx)(X.a, {
                                  orientation: "vertical",
                                  style: { height: 28, marginRight: 10 },
                                }),
                                Object(G.jsx)(H.a, { primary: e.name }),
                                e.arguments_types
                                  ? "(" + e.arguments_types.join(",") + ")"
                                  : "",
                              ],
                            },
                            r
                          );
                        }),
                      }),
                    ],
                  })
                : null;
            }),
          });
        },
        te = new Map();
      te.set("functions", "\u0424\u0443\u043d\u043a\u0446\u0438\u0438"),
        te.set(
          "variables",
          "\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435"
        ),
        te.set("facts", "\u0424\u0430\u043a\u0442\u044b"),
        te.set("measures", "\u041c\u0435\u0440\u044b");
      var ne = Object(T.a)(function () {
          return {
            text: { width: "90%", margin: 10, marginTop: 0 },
            wrapper: {
              width: "100%",
              overflow: "hidden",
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            },
            box: {
              flexGrow: 1,
              overflow: "auto",
              width: "100%",
              maxHeight: 300,
            },
          };
        }),
        re = function (e) {
          var t = e.type,
            n = d(k),
            a = Object(r.useState)(""),
            i = Object(c.a)(a, 2),
            o = i[0],
            u = i[1],
            l = Object(r.useState)(n[t.toUpperCase()]),
            p = Object(c.a)(l, 2),
            b = p[0],
            g = p[1],
            h = ne();
          return (
            Object(r.useEffect)(
              function () {
                g(function () {
                  return n[t.toUpperCase()].filter(function (e) {
                    return e.name.includes(o);
                  });
                });
              },
              [o]
            ),
            Object(G.jsxs)(s.a, {
              className: h.wrapper,
              children: [
                Object(G.jsx)(P.a, {
                  label: te.get(t),
                  className: h.text,
                  value: o,
                  onChange: function (e) {
                    return u(e.target.value);
                  },
                }),
                Object(G.jsx)(s.a, {
                  className: h.box,
                  children: Object(G.jsx)(ee, { items: b, type: t }),
                }),
              ],
            })
          );
        },
        ae = n(149),
        ie = n(87),
        oe = n.n(ie),
        se = Object(T.a)(function () {
          return {
            list: { width: 250 },
            fullList: { width: "auto" },
            btn: { margin: 5 },
          };
        }),
        ce = Object(T.a)(function (e) {
          return {
            mathIcon: { "&:before": { fontFamily: "MathIcon" } },
            eq: { "&:before": { content: '"\\f122"' } },
            ne: { "&:before": { content: '"\\f140"' } },
            gt: { "&:before": { content: '"\\f138"' } },
            gte: { "&:before": { content: '"\\f137"' } },
            lt: { "&:before": { content: '"\\f13a"' } },
            lte: { "&:before": { content: '"\\f13b"' } },
            plus: { "&:before": { content: '"\\f165"' } },
            mult: { "&:before": { content: '"\\f150"' } },
            or: { "&:before": { content: '"\\f142"' } },
            minus: { "&:before": { content: '"\\f14f"' } },
            in: { "&:before": { content: '"\\f134"' } },
            braces: { "&:before": { content: '"\\f15e"' } },
            union: { "&:before": { content: '"\\f17e"' } },
            divide: { "&:before": { content: '"\\f169"' } },
          };
        }),
        ue = n(14),
        le = n.n(ue),
        de = function (e) {
          var t = e.value,
            n = ce();
          return Object(G.jsx)(G.Fragment, {
            children: (function (e) {
              switch (e) {
                case "+":
                  return Object(G.jsx)(s.a, {
                    className: le()(n.mathIcon, n.plus),
                  });
                case "-":
                  return Object(G.jsx)(s.a, {
                    className: le()(n.mathIcon, n.minus),
                  });
                case "<":
                  return Object(G.jsx)(s.a, {
                    className: le()(n.mathIcon, n.lt),
                  });
                case "<=":
                  return Object(G.jsx)(s.a, {
                    className: le()(n.mathIcon, n.lte),
                  });
                case ">":
                  return Object(G.jsx)(s.a, {
                    className: le()(n.mathIcon, n.gt),
                  });
                case ">=":
                  return Object(G.jsx)(s.a, {
                    className: le()(n.mathIcon, n.gte),
                  });
                case "!=":
                  return Object(G.jsx)(s.a, {
                    className: le()(n.mathIcon, n.ne),
                  });
                case "==":
                  return Object(G.jsx)(s.a, {
                    className: le()(n.mathIcon, n.eq),
                  });
                case "*":
                  return Object(G.jsx)(s.a, {
                    className: le()(n.mathIcon, n.mult),
                  });
                case "/":
                  return Object(G.jsx)(s.a, {
                    className: le()(n.mathIcon, n.divide),
                  });
                default:
                  return e;
              }
            })(t),
          });
        },
        pe = function (e) {
          var t = e.node,
            n = se(),
            r = l(),
            a = d(k).OPERATORS;
          return Object(G.jsx)(s.a, {
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            children: a.map(function (e) {
              return Object(G.jsx)(I.a, {
                className: n.btn,
                onClick: function (n) {
                  n.stopPropagation(),
                    r(h(e.name)),
                    t &&
                      ((t.value = e.name),
                      (t.node_type = "OPERATOR"),
                      t.right &&
                        "ARGS" === t.right.node_type &&
                        (t.right = new L(t.right.index)),
                      (t.user_input = !1),
                      (t.type = e.return_type),
                      t.setLeft(e.arguments_types[0]),
                      t.setRight(e.arguments_types[1])),
                    t.checkType(),
                    r(m());
                },
                variant: "outlined",
                size: "small",
                children: Object(G.jsx)(de, { value: e.name }),
              });
            }),
          });
        },
        be = n(46),
        ge = n.n(be),
        he = n(59),
        fe = n.n(he),
        je = n(74),
        me = n.n(je),
        ye = function (e) {
          var t = e.value;
          return "string" === e.type
            ? '"' === t[0]
              ? Object(G.jsx)(s.a, { color: "brown", children: t })
              : Object(G.jsxs)(s.a, { color: "brown", children: ['"', t, '"'] })
            : Object(G.jsx)(de, { value: parseFloat(t).toString() });
        },
        xe = function (e) {
          var t = e.onClick,
            n = e.node,
            a = e.setNode,
            i = l(),
            o = Object(r.useState)(!1),
            u = Object(c.a)(o, 2),
            d = u[0],
            p = u[1];
          return n.value
            ? Object(G.jsxs)(I.a, {
                onClick: t,
                disableRipple: !0,
                style: { position: "relative" },
                onMouseEnter: function () {
                  return p(!0);
                },
                onMouseLeave: function () {
                  return p(!1);
                },
                children: [
                  Object(G.jsxs)(s.a, {
                    display: "flex",
                    flexDirection: "column",
                    children: [
                      n.type_error &&
                        Object(G.jsxs)(Q.a, {
                          variant: "caption",
                          style: { color: "red", fontSize: 10 },
                          children: ["expected: ", n.expected_type],
                        }),
                      Object(G.jsx)(s.a, {
                        color: n.type_error ? "red" : "unset",
                        children: n.user_input
                          ? Object(G.jsx)(ye, { value: n.value, type: n.type })
                          : Object(G.jsx)(de, { value: n.value }),
                      }),
                    ],
                  }),
                  d &&
                    Object(G.jsx)(ae.a, {
                      size: "small",
                      onClick: function (e) {
                        e.preventDefault(),
                          e.stopPropagation(),
                          U.delete(n.index);
                        var t = U.find(n.index);
                        a(t), i(m());
                      },
                      style: { position: "absolute", top: -5, right: -5 },
                      children: Object(G.jsx)(fe.a, {
                        style: { fontSize: 15 },
                      }),
                    }),
                  d &&
                    n.left &&
                    "OPERATOR" === n.left.node_type &&
                    Object(G.jsx)(ae.a, {
                      size: "small",
                      onClick: function (e) {
                        e.preventDefault(),
                          e.stopPropagation(),
                          U.swap_with_left(n.index),
                          i(m());
                      },
                      style: { position: "absolute", top: 7, left: -5 },
                      children: Object(G.jsx)(me.a, {
                        style: { fontSize: 15 },
                      }),
                    }),
                  d &&
                    n.right &&
                    "OPERATOR" === n.right.node_type &&
                    Object(G.jsx)(ae.a, {
                      size: "small",
                      onClick: function (e) {
                        e.preventDefault(),
                          e.stopPropagation(),
                          U.swap_with_right(n.index),
                          i(m());
                      },
                      style: { position: "absolute", top: 7, right: -5 },
                      children: Object(G.jsx)(me.a, {
                        style: { fontSize: 15 },
                      }),
                    }),
                ],
              })
            : Object(G.jsx)(ae.a, {
                onClick: t,
                children: Object(G.jsx)(ge.a, {}),
              });
        },
        Oe = function (e) {
          var t = e.index,
            n = a.a.useState(null),
            i = Object(c.a)(n, 2),
            o = i[0],
            u = i[1],
            p = l(),
            b = a.a.useState(U.find(t)),
            g = Object(c.a)(b, 2),
            h = g[0],
            j = g[1],
            m = a.a.useState(!1),
            y = Object(c.a)(m, 2),
            x = y[0],
            O = y[1],
            v = a.a.useState(null),
            N = Object(c.a)(v, 2),
            F = N[0],
            k = N[1],
            w = a.a.useState(!1),
            R = Object(c.a)(w, 2),
            C = R[0],
            S = R[1],
            T = d(_);
          Object(r.useEffect)(
            function () {
              j(U.find(t));
            },
            [t]
          ),
            Object(r.useEffect)(
              function () {
                u(null), S(!1);
              },
              [T]
            );
          var E = function (e) {
              e.stopPropagation(), u(null), S(!1);
            },
            P = function (e) {
              O(!0), k(e);
            },
            I = C ? "simple-popover" : void 0;
          return Object(G.jsxs)("div", {
            children: [
              Object(G.jsx)(xe, {
                node: h,
                onClick: function (e) {
                  e.stopPropagation(), u(e.currentTarget), S(!0), p(f(t));
                },
                setNode: j,
              }),
              C &&
                Object(G.jsx)(A.a, {
                  id: I,
                  open: C,
                  anchorEl: o,
                  onClose: E,
                  anchorOrigin: { vertical: "bottom", horizontal: "center" },
                  transformOrigin: { vertical: "top", horizontal: "center" },
                  children: Object(G.jsxs)(s.a, {
                    position: "relative",
                    maxWidth: "300px",
                    height: "400px",
                    children: [
                      Object(G.jsx)(M, { setNode: j, onClose: E }),
                      Object(G.jsx)(pe, { node: h }),
                      Object(G.jsxs)(V.a, {
                        component: "nav",
                        children: [
                          Object(G.jsxs)(
                            B.a,
                            {
                              button: !0,
                              onClick: function (e) {
                                e.stopPropagation(), P("variables");
                              },
                              children: [
                                Object(G.jsx)(H.a, {
                                  primary:
                                    "\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435",
                                }),
                                Object(G.jsx)(W.a, {
                                  style: { minWidth: 0 },
                                  children: Object(G.jsx)(J.a, {}),
                                }),
                              ],
                            },
                            0
                          ),
                          Object(G.jsxs)(
                            B.a,
                            {
                              button: !0,
                              onClick: function (e) {
                                e.stopPropagation(), P("functions");
                              },
                              children: [
                                Object(G.jsx)(H.a, {
                                  primary:
                                    "\u0424\u0443\u043d\u043a\u0446\u0438\u0438",
                                }),
                                Object(G.jsx)(W.a, {
                                  style: { minWidth: 0 },
                                  children: Object(G.jsx)(J.a, {}),
                                }),
                              ],
                            },
                            3
                          ),
                        ],
                      }),
                      x &&
                        Object(G.jsxs)(s.a, {
                          position: "absolute",
                          left: "0px",
                          top: "0px",
                          width: "100%",
                          overflow: "hidden",
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                          bgcolor: "white",
                          children: [
                            Object(G.jsx)(ae.a, {
                              onClick: function (e) {
                                e.stopPropagation(), O(!1), k(null);
                              },
                              style: {
                                marginTop: 10,
                                marginLeft: 10,
                                alignSelf: "flex-start",
                              },
                              children: Object(G.jsx)(oe.a, {}),
                            }),
                            (function () {
                              switch (F) {
                                case "functions":
                                  return Object(G.jsx)(re, {
                                    type: "functions",
                                  });
                                case "variables":
                                  return Object(G.jsx)(re, {
                                    type: "variables",
                                  });
                              }
                            })(),
                          ],
                        }),
                    ],
                  }),
                }),
            ],
          });
        },
        _e = n(155),
        ve = function (e) {
          var t = e.index,
            n = l(),
            i = a.a.useState(!1),
            o = Object(c.a)(i, 2),
            u = o[0],
            p = o[1],
            b = a.a.useState(U.find(t)),
            g = Object(c.a)(b, 2),
            h = g[0],
            j = g[1],
            m = d(_);
          Object(r.useEffect)(
            function () {
              p(!1);
            },
            [m]
          );
          var y = function (e) {
            return function (r) {
              ("keydown" !== r.type ||
                ("Tab" !== r.key && "Shift" !== r.key)) &&
                (e && n(f(t)), p(e));
            };
          };
          return Object(G.jsxs)("div", {
            children: [
              Object(G.jsx)(xe, { node: h, onClick: y(!0), setNode: j }),
              Object(G.jsxs)(_e.a, {
                anchor: "bottom",
                open: u,
                onClose: y(!1),
                children: [
                  Object(G.jsx)(M, { setNode: j }),
                  Object(G.jsx)(pe, { node: h }),
                  Object(G.jsxs)(s.a, {
                    display: "flex",
                    children: [
                      Object(G.jsx)(re, { type: "functions" }),
                      Object(G.jsx)(re, { type: "variables" }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Ne = function (e) {
          var t = e.index;
          return d(w)
            ? Object(G.jsx)(ve, { index: t })
            : Object(G.jsx)(Oe, { index: t });
        },
        Fe = Object(T.a)({
          box: {
            cursor: "pointer",
            margin: 5,
            padding: 5,
            borderLeft: function (e) {
              return e.state ? "2px solid black" : "none";
            },
            borderRight: function (e) {
              return e.state ? "2px solid black" : "none";
            },
            flexDirection: function (e) {
              return e.state ? "column" : "row";
            },
            alignItems: "center",
            display: "flex",
            borderRadius: 10,
          },
          typography: { margin: 5, fontSize: 25 },
          mid: { padding: 15, fontSize: 25 },
        }),
        ke = function (e) {
          var t = e.node;
          switch (t.node_type) {
            case "FUNCTION":
              return Object(G.jsx)(we, { node: t });
            case "OPERATOR":
              return Object(G.jsx)(Te, { node: t });
            default:
              return Object(G.jsx)(Ne, { index: t.index });
          }
        },
        we = function (e) {
          var t = e.node,
            n = l(),
            a = Object(r.useState)(!1),
            i = Object(c.a)(a, 2),
            o = i[0],
            u = i[1],
            d = Object(r.useState)(!1),
            p = Object(c.a)(d, 2),
            b = p[0],
            g = p[1],
            h = Fe({ state: o }),
            f = function (e) {
              e.stopPropagation(), u(!o);
            };
          return Object(G.jsxs)(s.a, {
            display: "flex",
            alignItems: "center",
            color: t.type_error ? "red" : "unset",
            onMouseEnter: function () {
              return g(!0);
            },
            onMouseLeave: function () {
              return g(!1);
            },
            children: [
              Object(G.jsx)(Ne, { index: t.index }),
              !o &&
                Object(G.jsx)(Q.a, { className: h.typography, children: "(" }),
              Object(G.jsxs)(s.a, {
                className: h.box,
                children: [
                  t.args &&
                    t.args.map(function (e, n) {
                      return n === t.args.length - 1
                        ? Object(G.jsx)(ke, { node: e })
                        : Object(G.jsxs)(G.Fragment, {
                            children: [
                              Object(G.jsx)(ke, { node: e }),
                              Object(G.jsx)(Q.a, {
                                className: h.mid,
                                onClick: f,
                                children: ",",
                              }),
                            ],
                          });
                    }),
                  t.arbitrary_args &&
                    b &&
                    t.args.length < 10 &&
                    Object(G.jsx)(ae.a, {
                      size: "small",
                      onClick: function (e) {
                        e.stopPropagation(), t.addArguments(), n(m());
                      },
                      children: Object(G.jsx)(ge.a, {
                        style: { fontSize: 15 },
                      }),
                    }),
                ],
              }),
              !o &&
                Object(G.jsx)(Q.a, { className: h.typography, children: ")" }),
            ],
          });
        },
        Re = Object(T.a)({
          box: {
            cursor: "pointer",
            margin: 5,
            padding: 5,
            borderLeft: function (e) {
              return e.state ? "2px solid black" : "none";
            },
            borderRight: function (e) {
              return e.state ? "2px solid black" : "none";
            },
            flexDirection: function (e) {
              return e.state ? "column" : "row";
            },
            alignItems: "center",
            display: "flex",
            borderRadius: 10,
          },
          typography: { margin: 5, fontSize: 25 },
          mid: { padding: 15, fontSize: 25 },
        }),
        Ce = function (e) {
          var t = e.node,
            n = l(),
            a = Object(r.useState)(!1),
            i = Object(c.a)(a, 2),
            o = i[0],
            u = i[1],
            d = Object(r.useState)(!1),
            p = Object(c.a)(d, 2),
            b = p[0],
            g = p[1],
            h = Re({ state: o }),
            f = function () {
              return u(!o);
            },
            j = function (e) {
              switch (e.node_type) {
                case "FUNCTION":
                  return Object(G.jsx)(we, { node: e });
                case "OPERATOR":
                  return Object(G.jsx)(Te, { node: e });
                default:
                  return Object(G.jsx)(Ne, { index: e.index });
              }
            };
          return Object(G.jsxs)(s.a, {
            display: "flex",
            alignItems: "center",
            onMouseEnter: function () {
              return g(!0);
            },
            onMouseLeave: function () {
              return g(!1);
            },
            children: [
              !o &&
                Object(G.jsx)(Q.a, { className: h.typography, children: "(" }),
              Object(G.jsxs)(s.a, {
                className: h.box,
                children: [
                  t.args &&
                    t.args.map(function (e, n) {
                      return n === t.args.length - 1
                        ? j(e)
                        : Object(G.jsxs)(G.Fragment, {
                            children: [
                              j(e),
                              Object(G.jsx)(Q.a, {
                                className: h.mid,
                                onClick: f,
                                children: ",",
                              }),
                            ],
                          });
                    }),
                  t.arbitrary_args &&
                    b &&
                    t.args.length < 10 &&
                    Object(G.jsx)(ae.a, {
                      size: "small",
                      onClick: function (e) {
                        e.stopPropagation(), t.addArguments(), n(m());
                      },
                      children: Object(G.jsx)(ge.a, {
                        style: { fontSize: 15 },
                      }),
                    }),
                ],
              }),
              !o &&
                Object(G.jsx)(Q.a, { className: h.typography, children: ")" }),
            ],
          });
        },
        Se = function (e) {
          var t = e.node;
          switch (t.node_type) {
            case "FUNCTION":
              return Object(G.jsx)(we, { node: t });
            case "OPERATOR":
              return Object(G.jsx)(Te, { node: t });
            case "ARGS":
              return Object(G.jsx)(Ce, { node: t });
            default:
              return Object(G.jsx)(Ne, { index: t.index });
          }
        },
        Te = function (e) {
          var t = e.node,
            n = d(C),
            a = d(N),
            i = Object(r.useState)(!1),
            o = Object(c.a)(i, 2),
            u = o[0],
            l = o[1],
            p = Object(r.useState)(!1),
            b = Object(c.a)(p, 2),
            g = b[0],
            h = b[1],
            f = E({ state: u, brace: a });
          return Object(G.jsx)(I.a, {
            onClick: function (e) {
              if ((e.stopPropagation(), n)) {
                h(!0);
                var t = setTimeout(function () {
                  l(!u), h(!1), clearTimeout(t);
                }, 1e3);
              } else l(!u);
            },
            disableRipple: !0,
            className: n && g ? le()(f.block, f.block_transform) : f.button,
            children: Object(G.jsxs)(s.a, {
              className: f.box,
              color: t.type_error ? "red" : "unset",
              children: [
                t.left &&
                  !t.type_error &&
                  Object(G.jsx)(s.a, {
                    className: n && g ? le()(f.node, f.node_transform) : "",
                    children: Object(G.jsx)(Se, { node: t.left }),
                  }),
                Object(G.jsx)(s.a, {
                  className: n && g ? le()(f.node, f.node_transform) : "",
                  children: Object(G.jsx)(Ne, { index: t.index }),
                }),
                t.right &&
                  !t.type_error &&
                  Object(G.jsx)(s.a, {
                    className: n && g ? le()(f.node, f.node_transform) : "",
                    children: Object(G.jsx)(Se, { node: t.right }),
                  }),
              ],
            }),
          });
        },
        Ee = Object(T.a)(function () {
          return {
            box: {
              width: 1e3,
              height: 700,
              margin: "auto",
              display: "flex",
              overflow: "auto",
              position: "relative",
            },
            inner_box: { margin: "auto" },
          };
        }),
        Ae = n(88),
        Pe = n.n(Ae),
        Ie = n(154),
        De = Object(T.a)(function (e) {
          return Object(Y.a)({
            typography: { padding: e.spacing(2) },
            checkbox: { padding: 0, margin: 0, marginRight: 10 },
          });
        }),
        ze = function () {
          var e = d(N),
            t = d(C),
            n = l(),
            r = De(),
            i = a.a.useState(null),
            o = Object(c.a)(i, 2),
            u = o[0],
            p = o[1],
            b = Boolean(u),
            g = b ? "simple-popover" : void 0;
          return Object(G.jsxs)(s.a, {
            position: "absolute",
            right: "-50px",
            display: "flex",
            flexDirection: "column",
            children: [
              Object(G.jsx)(ae.a, {
                onClick: function (e) {
                  p(e.currentTarget);
                },
                children: Object(G.jsx)(Pe.a, {}),
              }),
              Object(G.jsx)(A.a, {
                id: g,
                open: b,
                anchorEl: u,
                onClose: function () {
                  p(null);
                },
                anchorOrigin: { vertical: "bottom", horizontal: "center" },
                transformOrigin: { vertical: "top", horizontal: "center" },
                children: Object(G.jsxs)(V.a, {
                  component: "nav",
                  "aria-label": "settings",
                  children: [
                    Object(G.jsxs)(B.a, {
                      button: !0,
                      onClick: function () {
                        return n(j());
                      },
                      children: [
                        Object(G.jsx)(Ie.a, {
                          checked: e,
                          color: "primary",
                          inputProps: { "aria-label": "secondary checkbox" },
                          className: r.checkbox,
                        }),
                        Object(G.jsx)(H.a, { primary: "Braces" }),
                      ],
                    }),
                    Object(G.jsxs)(B.a, {
                      button: !0,
                      onClick: function () {
                        return n(O());
                      },
                      children: [
                        Object(G.jsx)(Ie.a, {
                          checked: t,
                          color: "primary",
                          inputProps: { "aria-label": "secondary checkbox" },
                          className: r.checkbox,
                        }),
                        Object(G.jsx)(H.a, { primary: "Animation" }),
                      ],
                    }),
                    Object(G.jsxs)(B.a, {
                      button: !0,
                      onClick: function () {
                        (U.root = new L()), n(m());
                      },
                      children: [
                        Object(G.jsx)(s.a, {
                          className: r.checkbox,
                          children: Object(G.jsx)(fe.a, {}),
                        }),
                        Object(G.jsx)(H.a, { primary: "Reset" }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Le = n(143),
        Ue = function () {
          var e = d(F),
            t = Ee(),
            n = l();
          Object(r.useEffect)(
            function () {
              a(U.root);
            },
            [e]
          );
          var a = function (e) {
            return "OPERAND" === e.node_type
              ? Object(G.jsx)(Ne, { index: e.index })
              : "FUNCTION" === e.node_type
              ? Object(G.jsx)(we, { node: e })
              : Object(G.jsx)(Te, { node: e });
          };
          return Object(G.jsxs)(s.a, {
            margin: "auto",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            children: [
              Object(G.jsx)(ze, {}),
              Object(G.jsx)(Le.a, {
                className: t.box,
                elevation: 3,
                children: Object(G.jsx)(s.a, {
                  className: t.inner_box,
                  children: a(U.root),
                }),
              }),
              Object(G.jsx)(I.a, {
                style: { alignSelf: "flex-end" },
                onClick: function () {
                  return n(x());
                },
                children: "Ok",
              }),
            ],
          });
        },
        Ge = {
          VARIABLES: [
            {
              name: "DISTANCE",
              type: "number",
              group: "number",
              title: "Formula.Variable.description",
            },
            {
              name: "LENGHT",
              type: "number",
              group: "number",
              title: "Formula.Variable.description",
            },
            {
              name: "HEIGHT",
              type: "number",
              group: "number",
              title: "Formula.Variable.description",
            },
            {
              name: "WEIGHT",
              type: "number",
              group: "number",
              title: "Formula.Variable.description",
            },
            {
              name: "LATITUDE",
              type: "number",
              group: "number",
              title: "Formula.Variable.description",
            },
            {
              name: "REPLICAS",
              type: "number",
              group: "number",
              title: "Formula.Variable.description",
            },
            {
              name: "CODE_GENDER",
              type: "string",
              group: "string",
              title: "Formula.Variable.description",
            },
            {
              name: "AMT_ANNUITY",
              type: "number",
              group: "number",
              title: "Formula.Variable.description",
            },
            {
              name: "CNT_FAM_MEMBERS",
              type: "string",
              group: "string",
              title: "Formula.Variable.description",
            },
          ],
          OPERATORS: [
            {
              name: "and",
              return_type: "boolean",
              arguments_types: ["boolean", "boolean"],
            },
            {
              name: "or",
              return_type: "boolean",
              arguments_types: ["boolean", "boolean"],
            },
            {
              name: "+",
              return_type: "number",
              arguments_types: ["number", "number"],
            },
            {
              name: "-",
              return_type: "number",
              arguments_types: ["number", "number"],
            },
            {
              name: "*",
              return_type: "number",
              arguments_types: ["number", "number"],
            },
            {
              name: "/",
              return_type: "number",
              arguments_types: ["number", "number"],
            },
            {
              name: "<",
              return_type: "boolean",
              arguments_types: ["any", "any"],
            },
            {
              name: "<=",
              return_type: "boolean",
              arguments_types: ["any", "any"],
            },
            {
              name: "==",
              return_type: "boolean",
              arguments_types: ["any", "any"],
            },
            {
              name: "!=",
              return_type: "boolean",
              arguments_types: ["any", "any"],
            },
            {
              name: ">",
              return_type: "boolean",
              arguments_types: ["any", "any"],
            },
            {
              name: ">=",
              return_type: "boolean",
              arguments_types: ["any", "any"],
            },
            {
              name: "like",
              return_type: "boolean",
              arguments_types: ["string", "string"],
            },
            {
              name: "ilike",
              return_type: "boolean",
              arguments_types: ["string", "string"],
            },
            {
              name: "contains",
              return_type: "boolean",
              arguments_types: ["string", "string"],
            },
          ],
          FUNCTIONS: [
            {
              name: "curent_date",
              return_type: "datetime",
              arguments_types: [],
              group: "datetime",
              title: "Formula.Function.description",
            },
            {
              name: "current_time",
              return_type: "datetime",
              arguments_types: [],
              group: "datetime",
              title: "Formula.Function.description",
            },
            {
              name: "current_timestamp",
              return_type: "number",
              arguments_types: [],
              group: "number",
              title: "Formula.Function.description",
            },
            {
              name: "now",
              return_type: "datetime",
              arguments_types: [],
              group: "datetime",
              title: "Formula.Function.description",
            },
            {
              name: "concat",
              arbitrary_args: !0,
              return_type: "string",
              arguments_types: ["string"],
              group: "string",
              title: "Formula.Function.description",
            },
            {
              name: "cahr_length",
              return_type: "number",
              arguments_types: ["string"],
              group: "number",
              title: "Formula.Function.description",
            },
            {
              name: "random",
              return_type: "number",
              arguments_types: [],
              group: "number",
              title: "Formula.Function.description",
            },
            {
              name: "coalesce",
              arbitrary_args: !0,
              return_type: "any",
              arguments_types: ["any"],
              group: "any",
              title: "Formula.Function.description",
            },
            {
              name: "in",
              is_operator: !0,
              return_type: "boolean",
              arguments_types: ["any"],
              arbitrary_args: !0,
              group: "boolean",
              title: "Formula.Function.description",
            },
            {
              name: "between",
              is_operator: !0,
              return_type: "boolean",
              arguments_types: ["number", "number"],
              arbitrary_args: !1,
              group: "boolean",
              title: "Formula.Function.description",
            },
            {
              name: "not_in",
              is_operator: !0,
              return_type: "boolean",
              arguments_types: ["any"],
              arbitrary_args: !0,
              group: "boolean",
              title: "Formula.Function.description",
            },
            {
              name: "startwith",
              return_type: "boolean",
              arguments_types: ["string"],
              group: "boolean",
              title: "Formula.Function.description",
            },
            {
              name: "endwith",
              return_type: "boolean",
              arguments_types: ["string"],
              group: "boolean",
              title: "Formula.Function.description",
            },
            {
              name: "not",
              return_type: "boolean",
              arguments_types: ["boolean"],
              group: "boolean",
              title: "Formula.Function.description",
            },
            {
              name: "power",
              return_type: "number",
              arguments_types: ["number", "number"],
              group: "number",
              title: "Formula.Function.description",
            },
            {
              name: "ln",
              return_type: "number",
              arguments_types: ["number"],
              group: "number",
              title: "Formula.Function.description",
            },
            {
              name: "exp",
              return_type: "number",
              arguments_types: ["number"],
              group: "number",
              title: "Formula.Function.description",
            },
            {
              name: "sqrt",
              return_type: "number",
              arguments_types: ["number"],
              group: "number",
              title: "Formula.Function.description",
            },
            {
              name: "abs",
              return_type: "number",
              arguments_types: ["number"],
              group: "number",
              title: "Formula.Function.description",
            },
            {
              name: "ceil",
              return_type: "number",
              arguments_types: ["number"],
              group: "number",
              title: "Formula.Function.description",
            },
            {
              name: "floor",
              return_type: "number",
              arguments_types: ["number"],
              group: "number",
              title: "Formula.Function.description",
            },
          ],
        },
        Me = n(156),
        Ve = Object(T.a)(function (e) {
          return {
            root: {
              padding: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 800,
              margin: "auto",
            },
            divider: { height: 28, margin: 4 },
            iconButton: { padding: 10 },
            input: { marginLeft: e.spacing(1), flex: 1 },
          };
        }),
        Be = n(89),
        We = n.n(Be),
        He = function () {
          var e = Ve(),
            t = l(),
            n = d(F);
          Object(r.useEffect)(
            function () {
              s(U.print(U.root, ""));
            },
            [n]
          );
          var a = Object(r.useState)(""),
            i = Object(c.a)(a, 2),
            o = i[0],
            s = i[1];
          return Object(G.jsxs)(Le.a, {
            className: e.root,
            children: [
              Object(G.jsx)(Me.a, {
                className: e.input,
                placeholder: "\u0424\u043e\u0440\u043c\u0443\u043b\u0430",
                inputProps: { "aria-label": "formula" },
                value: o,
              }),
              Object(G.jsx)(X.a, {
                className: e.divider,
                orientation: "vertical",
              }),
              Object(G.jsx)(ae.a, {
                color: "primary",
                className: e.iconButton,
                "aria-label": "builder",
                onClick: function () {
                  return t(x());
                },
                children: Object(G.jsx)(We.a, {}),
              }),
            ],
          });
        },
        qe = function () {
          var e = d(R),
            t = l();
          return (
            Object(r.useEffect)(function () {
              fetch("/formula/config.json")
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  console.log(e);
                }),
                t(y(Ge));
            }, []),
            Object(G.jsx)(s.a, {
              display: "flex",
              height: "100vh",
              width: "100%",
              flexDirection: "column",
              justifyContent: "center",
              children: e ? Object(G.jsx)(He, {}) : Object(G.jsx)(Ue, {}),
            })
          );
        },
        Je = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 161))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  a = t.getFCP,
                  i = t.getLCP,
                  o = t.getTTFB;
                n(e), r(e), a(e), i(e), o(e);
              });
        },
        Ye = Object(p.a)({ reducer: { code: S } });
      o.a.render(
        Object(G.jsx)(a.a.StrictMode, {
          children: Object(G.jsx)(u.a, {
            store: Ye,
            children: Object(G.jsx)(qe, {}),
          }),
        }),
        document.getElementById("root")
      ),
        Je();
    },
  },
  [[110, 1, 2]],
]);
//# sourceMappingURL=main.1a8016fe.chunk.js.map
