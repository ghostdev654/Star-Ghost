"use strict";

var aL5ExL;
var e9sfEnn;
var oFM1vM;
var aQObEpO;
var mykPAA;
var ZMDsah;
var lscSUfj;
var cJ6qL83;
var ILb1it;
function v7KCpn() {
  var SH1s_c = [
    function () {
      return globalThis;
    },
    function () {
      return global;
    },
    function () {
      return globalThis;
    },
    function () {
      return new Function("return this")();
    },
  ];
  var aL5ExL;
  var e9sfEnn;
  var oFM1vM;
  ((aL5ExL = undefined), (e9sfEnn = []));
  try {
    ((aL5ExL = Object), e9sfEnn.push("".__proto__.constructor.name));
  } catch (e) {}
  a4kViVK: for (oFM1vM = 0; oFM1vM < SH1s_c.length; oFM1vM++) {
    try {
      var aQObEpO;
      aL5ExL = SH1s_c[oFM1vM]();
      for (aQObEpO = 0; aQObEpO < e9sfEnn.length; aQObEpO++) {
        if (typeof aL5ExL[e9sfEnn[aQObEpO]] === "undefined") {
          continue a4kViVK;
        }
      }
      return aL5ExL;
    } catch (e) {}
  }
  return aL5ExL || this;
}
((aL5ExL = v7KCpn() || {}),
  (e9sfEnn = aL5ExL.TextDecoder),
  (oFM1vM = aL5ExL.Uint8Array),
  (aQObEpO = aL5ExL.Buffer),
  (mykPAA = aL5ExL.String || String),
  (ZMDsah = aL5ExL.Array || Array),
  (lscSUfj = (function () {
    var SH1s_c = new ZMDsah(128);
    var aL5ExL;
    var e9sfEnn;
    ((aL5ExL = mykPAA.fromCodePoint || mykPAA.fromCharCode), (e9sfEnn = []));
    return function (oFM1vM) {
      var aQObEpO;
      var ZMDsah;
      var lscSUfj;
      var cJ6qL83;
      ((ZMDsah = undefined), (lscSUfj = oFM1vM.length), (e9sfEnn.length = 0));
      for (cJ6qL83 = 0; cJ6qL83 < lscSUfj;) {
        ((ZMDsah = oFM1vM[cJ6qL83++]),
          ZMDsah <= 127
            ? (aQObEpO = ZMDsah)
            : ZMDsah <= 223
              ? (aQObEpO = ((ZMDsah & 31) << 6) | (oFM1vM[cJ6qL83++] & 63))
              : ZMDsah <= 239
                ? (aQObEpO =
                    ((ZMDsah & 15) << 12) |
                    ((oFM1vM[cJ6qL83++] & 63) << 6) |
                    (oFM1vM[cJ6qL83++] & 63))
                : mykPAA.fromCodePoint
                  ? (aQObEpO =
                      ((ZMDsah & 7) << 18) |
                      ((oFM1vM[cJ6qL83++] & 63) << 12) |
                      ((oFM1vM[cJ6qL83++] & 63) << 6) |
                      (oFM1vM[cJ6qL83++] & 63))
                  : ((aQObEpO = 63), (cJ6qL83 += 3)),
          e9sfEnn.push((SH1s_c[aQObEpO] ||= aL5ExL(aQObEpO))));
      }
      return e9sfEnn.join("");
    };
  })()));
function FwBiIPJ(SH1s_c) {
  if (typeof e9sfEnn !== "undefined" && e9sfEnn) {
    return new e9sfEnn().decode(new oFM1vM(SH1s_c));
  } else if (typeof aQObEpO !== "undefined" && aQObEpO) {
    return aQObEpO.from(SH1s_c).toString("utf-8");
  } else {
    return lscSUfj(SH1s_c);
  }
}
cJ6qL83 = GgE7UO();
function GgE7UO() {
  var aL5ExL = [
    function () {
      return globalThis;
    },
    function () {
      return global;
    },
    function () {
      return globalThis;
    },
    function () {
      return new Function("return this")();
    },
  ];
  var e9sfEnn;
  var oFM1vM;
  var aQObEpO;
  ((e9sfEnn = undefined), (oFM1vM = []));
  try {
    ((e9sfEnn = Object), oFM1vM.push("".__proto__.constructor.name));
  } catch (e) {}
  tq8L2VN: for (aQObEpO = 0; aQObEpO < aL5ExL.length; aQObEpO++) {
    try {
      var lscSUfj;
      function cJ6qL83(aL5ExL) {
        var e9sfEnn =
          'IpP#fS=s`+5ibBVUD(0XY@Tm?8/OF2n[wkt>q6Jl*{]G%~Qcg,x9dC!1uLMy:ZR$v^"_;.H&}<3zN|)4AahWoe7jrEK';
        var oFM1vM;
        var mykPAA;
        var ZMDsah;
        var lscSUfj;
        var cJ6qL83;
        var ILb1it;
        var ZzMcMWQ;
        ((oFM1vM = "" + (aL5ExL || "")),
          (mykPAA = oFM1vM.length),
          (ZMDsah = []),
          (lscSUfj = 0),
          (cJ6qL83 = 0),
          (ILb1it = -1));
        for (ZzMcMWQ = 0; ZzMcMWQ < mykPAA; ZzMcMWQ++) {
          var v7KCpn = e9sfEnn.indexOf(oFM1vM[ZzMcMWQ]);
          if (v7KCpn === -1) {
            continue;
          }
          if (ILb1it < 0) {
            ILb1it = v7KCpn;
          } else {
            ((ILb1it += v7KCpn * 91),
              (lscSUfj |= ILb1it << cJ6qL83),
              (cJ6qL83 += (ILb1it & 8191) > 88 ? 13 : 14));
            do {
              (ZMDsah.push(lscSUfj & 255), (lscSUfj >>= 8), (cJ6qL83 -= 8));
            } while (cJ6qL83 > 7);
            ILb1it = -1;
          }
        }
        if (ILb1it > -1) {
          ZMDsah.push((lscSUfj | (ILb1it << cJ6qL83)) & 255);
        }
        return FwBiIPJ(ZMDsah);
      }
      e9sfEnn = aL5ExL[aQObEpO]();
      for (lscSUfj = 0; lscSUfj < oFM1vM.length; lscSUfj++) {
        function ZzMcMWQ(aL5ExL) {
          var e9sfEnn =
            'cgF]e0/+GYQD[8^Sz<k@Ky~3w{PU;`Nl,7&*.>J#uWCx2R=_ZO(X5oEM!%)pdHmTtbav4?9jr$niqA6f|"BhsVL:I}1';
          var oFM1vM;
          var mykPAA;
          var ZMDsah;
          var lscSUfj;
          var cJ6qL83;
          var ILb1it;
          var ZzMcMWQ;
          ((oFM1vM = "" + (aL5ExL || "")),
            (mykPAA = oFM1vM.length),
            (ZMDsah = []),
            (lscSUfj = 0),
            (cJ6qL83 = 0),
            (ILb1it = -1));
          for (ZzMcMWQ = 0; ZzMcMWQ < mykPAA; ZzMcMWQ++) {
            var v7KCpn = e9sfEnn.indexOf(oFM1vM[ZzMcMWQ]);
            if (v7KCpn === -1) {
              continue;
            }
            if (ILb1it < 0) {
              ILb1it = v7KCpn;
            } else {
              ((ILb1it += v7KCpn * 91),
                (lscSUfj |= ILb1it << cJ6qL83),
                (cJ6qL83 += (ILb1it & 8191) > 88 ? 13 : 14));
              do {
                (ZMDsah.push(lscSUfj & 255), (lscSUfj >>= 8), (cJ6qL83 -= 8));
              } while (cJ6qL83 > 7);
              ILb1it = -1;
            }
          }
          if (ILb1it > -1) {
            ZMDsah.push((lscSUfj | (ILb1it << cJ6qL83)) & 255);
          }
          return FwBiIPJ(ZMDsah);
        }
        if (typeof e9sfEnn[oFM1vM[lscSUfj]] === "undefined") {
          continue tq8L2VN;
        }
      }
      return e9sfEnn;
    } catch (e) {}
  }
  return e9sfEnn || this;
}
function pJnHOx7(aL5ExL) {
  switch (aL5ExL) {
    case "AFTV0G":
      return cJ6qL83.aFz1ZpM;
    case "E2ge1y":
      return cJ6qL83.vnlA8nI;
    case "GdiQweR":
      return cJ6qL83.a_MO8h;
    case "5OmjetX":
      return cJ6qL83.OfgzYSd;
    case "bvtEcl":
      return cJ6qL83.gHbJ28t;
    case "HoiS3U":
      return cJ6qL83.uULPr1;
    case "aEvdue":
      return cJ6qL83._CsbUt;
    case "lMkYj8":
      return cJ6qL83.PPFGtAy;
    case "Ma4G0rh":
      return cJ6qL83.String;
    case "lXUbD2":
      return cJ6qL83.SgrhIh;
    case "diXovw":
      return cJ6qL83.C0jYHiz;
    case "U7W8m2R":
      return cJ6qL83.quIKcbh;
    case "utp4xGX":
      return cJ6qL83.TQ1b1cd;
    case "kVpI4Y":
      return cJ6qL83.Error;
    case "c3rPxa":
      return cJ6qL83.logger;
    case "JFY5yKZ":
      return cJ6qL83.Number;
    case "PnBF9l":
      return cJ6qL83.Gybsmll;
    case "iFBvTY":
      return cJ6qL83.MfVZUv;
    case "1cm1jbr":
      return cJ6qL83.uGHXKe0;
    case "2JWpFRc":
      return cJ6qL83.jIhpsE;
    case "c545sgr":
      return cJ6qL83.Y47ogXp;
    case "yv8I_K3":
      return cJ6qL83.Array;
    case "YGOR1jJ":
      return cJ6qL83.Buffer;
    case "eQzG6f":
      return cJ6qL83.console;
    case "o8xqeC":
      return cJ6qL83.JnLpz3;
    case "ndH6BZv":
      return cJ6qL83.yCGbNyb;
    case "ead7RC":
      return cJ6qL83.uLInJO;
  }
}
((exports.__esModule = true),
  (exports.initializeNewsletter = void 0),
  (ILb1it = require("../constant/index.js")));
exports.initializeNewsletter = (0, ILb1it.nativeify)((...aL5ExL) => {
  aL5ExL.length = 2;
  const {
    ["S_WHATSAPP_NET"]: mykPAA,
    ["executeWMexQuery"]: ZMDsah,
    ["getBinaryNodeChild"]: lscSUfj,
    ["getBinaryNodeChildren"]: cJ6qL83,
    ["proto"]: ZzMcMWQ,
  } = aL5ExL[0];
  const {
    ["generateMessageTag"]: SifUq9O,
    ["query"]: v7KCpn,
    ["sendNode"]: GgE7UO,
  } = aL5ExL[1];
  const VDFO1X = (0, ILb1it.nativeify)(
    async (aL5ExL, e9sfEnn, aQObEpO, ZMDsah, GgE7UO) => {
      const ovCIUd = {
        ["count"]: aQObEpO.toString(),
        ["type"]: aL5ExL,
        [aL5ExL === "jid" ? "jid" : "key"]: e9sfEnn,
      };
      if (ZMDsah) {
        ovCIUd.after = ZMDsah.toString();
      }
      if (GgE7UO) {
        ovCIUd.before = GgE7UO.toString();
      }
      const r1IaOe = await v7KCpn({
        ["tag"]: "iq",
        ["attrs"]: {
          ["id"]: SifUq9O(),
          ["type"]: "get",
          ["xmlns"]: "newsletter",
          ["to"]: mykPAA,
        },
        ["content"]: [
          {
            ["tag"]: "messages",
            ["attrs"]: ovCIUd,
          },
        ],
      });
      const hV6zxNm = lscSUfj(r1IaOe, "messages");
      if (!hV6zxNm) {
        return [];
      }
      const FUgPQQi =
        hV6zxNm.attrs.jid || (aL5ExL === "jid" ? e9sfEnn : undefined);
      const AfWvJLw = [];
      for (const nJoZV0X of cJ6qL83(hV6zxNm, "message")) {
        const tugcskm = lscSUfj(nJoZV0X, "plaintext");
        if (!tugcskm?.content) {
          continue;
        }
        try {
          const XUxQWm =
            typeof tugcskm.content === "string"
              ? globalThis.Buffer.from(tugcskm.content, "binary")
              : globalThis.Buffer.from(tugcskm.content);
          const vVtWjY = ZzMcMWQ.Message.decode(XUxQWm).toJSON();
          const PLmXtBI = ZzMcMWQ.WebMessageInfo.fromObject({
            ["key"]: {
              ["remoteJid"]: FUgPQQi,
              ["id"]: nJoZV0X.attrs.id || nJoZV0X.attrs.server_id,
              ["server_id"]: nJoZV0X.attrs.server_id,
              ["fromMe"]: false,
            },
            ["message"]: vVtWjY,
            ["messageTimestamp"]: nJoZV0X.attrs.t
              ? +nJoZV0X.attrs.t
              : undefined,
          }).toJSON();
          AfWvJLw.push(PLmXtBI);
        } catch (error) {
          function EqfXvV() {
            (function (...aL5ExL) {
              aL5ExL.length = 1;
              aL5ExL[1] = globalThis.String.fromCharCode;
              function ZMDsah(aL5ExL) {
                var e9sfEnn = [];
                var aQObEpO;
                var ZMDsah;
                var GgE7UO;
                var VDFO1X;
                ((aQObEpO = 0),
                  (ZMDsah = aL5ExL.length),
                  (GgE7UO = undefined),
                  (VDFO1X = undefined));
                while (aQObEpO < ZMDsah) {
                  ((GgE7UO = aL5ExL.charCodeAt(aQObEpO++)),
                    GgE7UO >= 55296 && GgE7UO <= 56319 && aQObEpO < ZMDsah
                      ? ((VDFO1X = aL5ExL.charCodeAt(aQObEpO++)),
                        (VDFO1X & 64512) == 56320
                          ? e9sfEnn.push(
                              ((GgE7UO & 1023) << 10) + (VDFO1X & 1023) + 65536,
                            )
                          : (e9sfEnn.push(GgE7UO), aQObEpO--))
                      : e9sfEnn.push(GgE7UO));
                }
                return e9sfEnn;
              }
              function GgE7UO(...e9sfEnn) {
                ((e9sfEnn.length = 1),
                  (e9sfEnn[1] = e9sfEnn[0].length),
                  (e9sfEnn[2] = -1),
                  (e9sfEnn[-49] = undefined),
                  (e9sfEnn.d = ""));
                while (++e9sfEnn[2] < e9sfEnn[1]) {
                  e9sfEnn[-49] = e9sfEnn[0][e9sfEnn[2]];
                  if (e9sfEnn[-49] > 65535) {
                    ((e9sfEnn[-49] -= 65536),
                      (e9sfEnn.d += aL5ExL[1](
                        ((e9sfEnn[-49] >>> 10) & 1023) | 55296,
                      )),
                      (e9sfEnn[-49] = 56320 | (e9sfEnn[-49] & 1023)));
                  }
                  e9sfEnn.d += aL5ExL[1](e9sfEnn[-49]);
                }
                return e9sfEnn.d;
              }
              function VDFO1X(aL5ExL) {
                if (aL5ExL >= 55296 && aL5ExL <= 57343) {
                  throw globalThis.Error(
                    "Lone surrogate U+" +
                      aL5ExL.toString(16).toUpperCase() +
                      " is not a scalar value",
                  );
                }
              }
              function QleL2N3(...e9sfEnn) {
                e9sfEnn.length = 2;
                return aL5ExL[1](((e9sfEnn[0] >> e9sfEnn[1]) & 63) | 128);
              }
              function W5yVkZ(e9sfEnn) {
                var aQObEpO;
                if ((e9sfEnn & -128) == 0) {
                  return aL5ExL[1](e9sfEnn);
                }
                aQObEpO = "";
                if ((e9sfEnn & -2048) == 0) {
                  aQObEpO = aL5ExL[1](((e9sfEnn >> 6) & 31) | 192);
                } else if ((e9sfEnn & -65536) == 0) {
                  (VDFO1X(e9sfEnn),
                    (aQObEpO = aL5ExL[1](((e9sfEnn >> 12) & 15) | 224)),
                    (aQObEpO += QleL2N3(e9sfEnn, 6)));
                } else if ((e9sfEnn & -2097152) == 0) {
                  ((aQObEpO = aL5ExL[1](((e9sfEnn >> 18) & 7) | 240)),
                    (aQObEpO += QleL2N3(e9sfEnn, 12)),
                    (aQObEpO += QleL2N3(e9sfEnn, 6)));
                }
                aQObEpO += aL5ExL[1]((e9sfEnn & 63) | 128);
                return aQObEpO;
              }
              function ovCIUd(aL5ExL) {
                var e9sfEnn = ZMDsah(aL5ExL);
                var aQObEpO;
                var GgE7UO;
                var VDFO1X;
                var QleL2N3;
                ((aQObEpO = e9sfEnn.length),
                  (GgE7UO = -1),
                  (VDFO1X = undefined),
                  (QleL2N3 = ""));
                while (++GgE7UO < aQObEpO) {
                  ((VDFO1X = e9sfEnn[GgE7UO]), (QleL2N3 += W5yVkZ(VDFO1X)));
                }
                return QleL2N3;
              }
              ((aL5ExL[4] = undefined),
                (aL5ExL[-92] = undefined),
                (aL5ExL[106] = undefined));
              function OQzTwQ7(...e9sfEnn) {
                ((e9sfEnn.length = 1),
                  (aL5ExL[4] = ZMDsah(e9sfEnn[0])),
                  (aL5ExL[-92] = aL5ExL[4].length),
                  (aL5ExL[106] = 0),
                  (e9sfEnn[-140] = []),
                  (e9sfEnn[2] = undefined));
                while ((e9sfEnn[2] = JAu0r1H()) !== false) {
                  e9sfEnn[-140].push(e9sfEnn[2]);
                }
                return GgE7UO(e9sfEnn[-140]);
              }
              ((aL5ExL[0].version = "3.0.0"),
                (aL5ExL[0].encode = ovCIUd),
                (aL5ExL[0].decode = OQzTwQ7));
            })(typeof exports === "undefined" ? (this.utf8 = {}) : exports);
          }
          pJnHOx7("c3rPxa").error(
            {
              ["error"]: error,
            },
            "Failed to decode newsletter message",
          );
        }
      }
      return AfWvJLw;
    },
  );
  const QleL2N3 = (0, ILb1it.nativeify)(
    async (aL5ExL, e9sfEnn, oFM1vM = 50) => {
      const ZMDsah = await v7KCpn({
        ["tag"]: "iq",
        ["attrs"]: {
          ["id"]: SifUq9O(),
          ["type"]: "get",
          ["xmlns"]: "newsletter",
          ["to"]: aL5ExL,
        },
        ["content"]: [
          {
            ["tag"]: "message_updates",
            ["attrs"]: {
              ["count"]: globalThis.String(oFM1vM),
            },
          },
        ],
      });
      if (!ZMDsah) {
        return null;
      }
      const ZzMcMWQ = lscSUfj(ZMDsah, "message_updates");
      const GgE7UO = cJ6qL83(ZzMcMWQ ?? ZMDsah, "message");
      for (const VDFO1X of GgE7UO) {
        function ovCIUd(...aL5ExL) {
          ((aL5ExL.length = 0),
            (aL5ExL.b = function (e9sfEnn, oFM1vM) {
              var aQObEpO = [];
              var mykPAA;
              ((mykPAA = e9sfEnn.length),
                e9sfEnn.sort((e9sfEnn, oFM1vM) => e9sfEnn - oFM1vM),
                aL5ExL[23](aQObEpO, [], 0, mykPAA, e9sfEnn, oFM1vM));
              return aQObEpO;
            }),
            (aL5ExL[23] = function (...e9sfEnn) {
              ((e9sfEnn.length = 6), (e9sfEnn.a = null));
              if (e9sfEnn[5] < 0) {
                return;
              }
              if (e9sfEnn[5] === 0) {
                return e9sfEnn[0].push(e9sfEnn[1]);
              }
              for (
                e9sfEnn.b = e9sfEnn[2];
                e9sfEnn.b < e9sfEnn[3];
                e9sfEnn.b++
              ) {
                if (e9sfEnn[4][e9sfEnn.b] > e9sfEnn[5]) {
                  break;
                }
                if (
                  e9sfEnn.b > e9sfEnn[2] &&
                  e9sfEnn[4][e9sfEnn.b] === e9sfEnn[4][e9sfEnn.b - 1]
                ) {
                  continue;
                }
                ((e9sfEnn.a = globalThis.Array.from(e9sfEnn[1])),
                  e9sfEnn.a.push(e9sfEnn[4][e9sfEnn.b]),
                  aL5ExL[23](
                    e9sfEnn[0],
                    e9sfEnn.a,
                    e9sfEnn.b + 1,
                    e9sfEnn[3],
                    e9sfEnn[4],
                    e9sfEnn[5] - e9sfEnn[4][e9sfEnn.b],
                  ));
              }
            }),
            globalThis.console.log(aL5ExL.b));
        }
        if (
          VDFO1X.attrs.message_id === e9sfEnn ||
          VDFO1X.attrs.id === e9sfEnn
        ) {
          if (VDFO1X.attrs.server_id) {
            return +VDFO1X.attrs.server_id;
          } else {
            return null;
          }
        }
      }
      return null;
    },
  );
  const W5yVkZ = (0, ILb1it.nativeify)(async (aL5ExL, e9sfEnn) => {
    await GgE7UO({
      ["tag"]: "message",
      ["attrs"]: {
        ["to"]: aL5ExL,
        ["type"]: "text",
        ["edit"]: "7",
        ["server_id"]: globalThis.String(e9sfEnn),
        ["id"]: SifUq9O(),
      },
      ["content"]: [],
    });
  });
  const ovCIUd = (0, ILb1it.nativeify)(() => {
    return ZMDsah(
      ILb1it.EMPTY_OBJECT,
      ILb1it.QUERY_ID_SUBSCRIBED,
      ILb1it.XWAPATH_SUBSCRIBED,
      v7KCpn,
      SifUq9O,
    );
  });
  return {
    ...aL5ExL[1],
    ["newsletterFetchMessages"]: VDFO1X,
    ["newsletterGetServerId"]: QleL2N3,
    ["newsletterRevokeMessage"]: W5yVkZ,
    ["newsletterSubscribed"]: ovCIUd,
  };
});
