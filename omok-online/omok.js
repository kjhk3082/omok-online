parcelRequire = (function (e, r, n, t) {
    function i(n, t) {
        function o(e) {
            return i(o.resolve(e));
        }
        function c(r) {
            return e[n][1][r] || r;
        }
        if (!r[n]) {
            if (!e[n]) {
                let l = "function" == typeof parcelRequire && parcelRequire;
                if (!t && l) return l(n, !0);
                if (u) return u(n, !0);
                if (f && "string" == typeof n) return f(n);
                let p = new Error("Cannot find module '" + n + "'");
                throw ((p.code = "MODULE_NOT_FOUND"), p);
            }
            o.resolve = c;
            let a = (r[n] = new i.Module(n));
            e[n][0].call(a.exports, o, a, a.exports, this);
        }
        return r[n].exports;
    }
    function o(e) {
        (this.id = e), (this.bundle = i), (this.exports = {});
    }
    let u = "function" == typeof parcelRequire && parcelRequire,
        f = "function" == typeof require && require;
    (i.isParcelRequire = !0), (i.Module = o), (i.modules = e), (i.cache = r), (i.parent = u);
    for (let c = 0; c < n.length; c++) i(n[c]);
    if (n.length) {
        let l = i(n[n.length - 1]);
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = l)
            : "function" == typeof define && define.amd
            ? define(function () {
                  return l;
              })
            : t && (this[t] = l);
    }
    return i;
})(
    {
        6: [
            function (require, module, exports) {
                let r = (function () {
                    function r(r, t) {
                        for (let o = 0; o < t.length; o++) {
                            let i = t[o];
                            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
                        }
                    }
                    return function (t, o, i) {
                        return o && r(t.prototype, o), i && r(t, i), t;
                    };
                })();
                function t(r, t) {
                    if (!(r instanceof t)) throw new TypeError("Cannot call a class as a function");
                }
                let o = (function () {
                        function o() {
                            t(this, o),
                                (this.line = 15),
                                (this.board = [
                                    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
                                    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
                                    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
                                    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
                                    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
                                    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
                                    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
                                    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
                                    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
                                    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
                                    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
                                    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
                                    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
                                    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
                                    new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
                                ]),
                                (this.player = "●");
                        }
                        return (
                            r(o, [
                                {
                                    key: "turn",
                                    value: function (r) {
                                        let t = r.row,
                                            o = r.col;
                                        "" == this.board[t][o]
                                            ? ((this.board[t][o] = this.player), (this.player = "●" === this.player ? "○" : "●"), (document.querySelector(".currentTurn").textContent = "Current Turn : " + this.player))
                                            : swal({ icon: "error", title: "돌 위에 돌을 둘 수 없습니다.", button: "다시두기" });
                                    },
                                },
                                {
                                    key: "checkWinner",
                                    value: function () {
                                        for (let r = 2; r < this.line - 2; r++)
                                            for (let t = 0; t < this.line; t++) {
                                                if ("●" == this.board[t][r - 2] && "●" == this.board[t][r - 1] && "●" == this.board[t][r] && "●" == this.board[t][r + 1] && "●" == this.board[t][r + 2]) return this.board[t][r];
                                                if ("●" == this.board[r - 2][t] && "●" == this.board[r - 1][t] && "●" == this.board[r][t] && "●" == this.board[r + 1][t] && "●" == this.board[r + 2][t]) return this.board[r][t];
                                            }
                                        for (let o = 2; o < this.line - 2; o++)
                                            for (let i = 2; i < this.line - 2; i++) {
                                                if ("●" == this.board[i - 2][o - 2] && "●" == this.board[i - 1][o - 1] && "●" == this.board[i][o] && "●" == this.board[i + 1][o + 1] && "●" == this.board[i + 2][o + 2])
                                                    return this.board[i][o];
                                                if ("●" == this.board[i + 2][o - 2] && "●" == this.board[i + 1][o - 1] && "●" == this.board[i][o] && "●" == this.board[i - 1][o + 1] && "●" == this.board[i - 2][o + 2])
                                                    return this.board[i][o];
                                            }
                                        for (let a = 2; a < this.line - 2; a++)
                                            for (let n = 0; n < this.line; n++) {
                                                if ("○" == this.board[n][a - 2] && "○" == this.board[n][a - 1] && "○" == this.board[n][a] && "○" == this.board[n][a + 1] && "○" == this.board[n][a + 2]) return this.board[n][a];
                                                if ("○" == this.board[a - 2][n] && "○" == this.board[a - 1][n] && "○" == this.board[a][n] && "○" == this.board[a + 1][n] && "○" == this.board[a + 2][n]) return this.board[a][n];
                                            }
                                        for (let e = 2; e < this.line - 2; e++)
                                            for (let s = 2; s < this.line - 2; s++) {
                                                if ("○" == this.board[s - 2][e - 2] && "○" == this.board[s - 1][e - 1] && "○" == this.board[s][e] && "○" == this.board[s + 1][e + 1] && "○" == this.board[s + 2][e + 2])
                                                    return this.board[s][e];
                                                if ("○" == this.board[s + 2][e - 2] && "○" == this.board[s + 1][e - 1] && "○" == this.board[s][e] && "○" == this.board[s - 1][e + 1] && "○" == this.board[s - 2][e + 2])
                                                    return this.board[s][e];
                                            }
                                    },
                                },
                            ]),
                            o
                        );
                    })(),
                    i = new o(),
                    a = document.querySelectorAll(".board__row");
                function n() {
                    i.board.forEach(function (r, t) {
                        let o = a[t].querySelectorAll(".col__grid");
                        r.forEach(function (r, t) {
                            "●" == r ? o[t].classList.add("black") : "○" == r && o[t].classList.add("white");
                        });
                    });
                    let r = i.checkWinner();
                    r &&
                        ("●" == r
                            ? ((document.querySelector(".currentTurn").textContent = "Game Over"),
                              swal({ icon: "success", title: "축하드립니다! 흑돌(" + r + ")의 승리입니다", button: "다시하기" }).then(function (r) {
                                  window.location.reload();
                              }))
                            : "○" == r &&
                              ((document.querySelector(".currentTurn").textContent = "Game Over"),
                              swal({ icon: "success", title: "축하드립니다! 백돌(" + r + ")의 승리입니다", button: "다시하기" }).then(function (r) {
                                  window.location.reload();
                              })),
                        setTimeout(function () {
                            window.location.reload();
                        }, 1e4));
                }
                a.forEach(function (r, t) {
                    r.querySelectorAll(".board__col").forEach(function (r, o) {
                        r.addEventListener("click", function (r) {
                            i.turn({ row: t, col: o }), n();
                        });
                    });
                });
            },
            {},
        ],
    },
    {},
    [6],
    null
);
