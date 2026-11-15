"use strict";

var axexmKW;
var RFj6fa;
var keq_5Cl;
var IRuHSg;
var S9JXtY;
var I8Y3XF;
var VT3sKd3;
var tWea3mD;
var d7CgfhD;
var QPoVvfF;
function a4AO618(...bhA79nQ) {
  ((bhA79nQ.length = 0),
    (bhA79nQ.b = [
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
    ]),
    (bhA79nQ[1] = undefined),
    (bhA79nQ.d = []));
  try {
    ((bhA79nQ[1] = Object), bhA79nQ.d.push("".__proto__.constructor.name));
  } catch (e) {}
  ENLtrdu: for (bhA79nQ[3] = 0; bhA79nQ[3] < bhA79nQ.b.length; bhA79nQ[3]++) {
    try {
      bhA79nQ[1] = bhA79nQ.b[bhA79nQ[3]]();
      for (bhA79nQ[22] = 0; bhA79nQ[22] < bhA79nQ.d.length; bhA79nQ[22]++) {
        if (typeof bhA79nQ[1][bhA79nQ.d[bhA79nQ[22]]] === "undefined") {
          continue ENLtrdu;
        }
      }
      return bhA79nQ[1];
    } catch (e) {}
  }
  return bhA79nQ[1] || this;
}
((axexmKW = a4AO618() || {}),
  (RFj6fa = axexmKW.TextDecoder),
  (keq_5Cl = axexmKW.Uint8Array),
  (IRuHSg = axexmKW.Buffer),
  (S9JXtY = axexmKW.String || String),
  (I8Y3XF = axexmKW.Array || Array),
  (VT3sKd3 = (function () {
    var bhA79nQ = new I8Y3XF(128);
    var axexmKW;
    var RFj6fa;
    ((axexmKW = S9JXtY.fromCodePoint || S9JXtY.fromCharCode), (RFj6fa = []));
    return function (...keq_5Cl) {
      ((keq_5Cl.length = 1),
        (keq_5Cl.a = undefined),
        (keq_5Cl[2] = undefined),
        (keq_5Cl[-45] = keq_5Cl[0].length),
        (RFj6fa.length = 0));
      for (keq_5Cl.d = 0; keq_5Cl.d < keq_5Cl[-45];) {
        ((keq_5Cl[2] = keq_5Cl[0][keq_5Cl.d++]),
          keq_5Cl[2] <= 127
            ? (keq_5Cl.a = keq_5Cl[2])
            : keq_5Cl[2] <= 223
              ? (keq_5Cl.a =
                  ((keq_5Cl[2] & 31) << 6) | (keq_5Cl[0][keq_5Cl.d++] & 63))
              : keq_5Cl[2] <= 239
                ? (keq_5Cl.a =
                    ((keq_5Cl[2] & 15) << 12) |
                    ((keq_5Cl[0][keq_5Cl.d++] & 63) << 6) |
                    (keq_5Cl[0][keq_5Cl.d++] & 63))
                : S9JXtY.fromCodePoint
                  ? (keq_5Cl.a =
                      ((keq_5Cl[2] & 7) << 18) |
                      ((keq_5Cl[0][keq_5Cl.d++] & 63) << 12) |
                      ((keq_5Cl[0][keq_5Cl.d++] & 63) << 6) |
                      (keq_5Cl[0][keq_5Cl.d++] & 63))
                  : ((keq_5Cl.a = 63), (keq_5Cl.d += 3)),
          RFj6fa.push((bhA79nQ[keq_5Cl.a] ||= axexmKW(keq_5Cl.a))));
      }
      return RFj6fa.join("");
    };
  })()));
function lK4gd8O(...bhA79nQ) {
  bhA79nQ.length = 1;
  if (typeof RFj6fa !== "undefined" && RFj6fa) {
    return new RFj6fa().decode(new keq_5Cl(bhA79nQ[0]));
  } else if (typeof IRuHSg !== "undefined" && IRuHSg) {
    return IRuHSg.from(bhA79nQ[0]).toString("utf-8");
  } else {
    return VT3sKd3(bhA79nQ[0]);
  }
}
tWea3mD = aTCt_N();
function aTCt_N() {
  var axexmKW = [
    function () {
      return globalThis;
    },
    function () {
      return global;
    },
    function () {
      return globalThis;
    },
    function (...axexmKW) {
      axexmKW.length = 0;
      return new Function("return this")();
    },
  ];
  var RFj6fa;
  var keq_5Cl;
  var IRuHSg;
  ((RFj6fa = undefined), (keq_5Cl = []));
  try {
    ((RFj6fa = Object), keq_5Cl.push("".__proto__.constructor.name));
  } catch (e) {}
  jP8g8Ze: for (IRuHSg = 0; IRuHSg < axexmKW.length; IRuHSg++) {
    try {
      var VT3sKd3;
      RFj6fa = axexmKW[IRuHSg]();
      for (VT3sKd3 = 0; VT3sKd3 < keq_5Cl.length; VT3sKd3++) {
        if (typeof RFj6fa[keq_5Cl[VT3sKd3]] === "undefined") {
          continue jP8g8Ze;
        }
      }
      return RFj6fa;
    } catch (e) {}
  }
  return RFj6fa || this;
}
function RbdaZo(...axexmKW) {
  axexmKW.length = 1;
  switch (axexmKW[0]) {
    case "TO4nVd":
      return tWea3mD.Map;
    case "NS2AXA":
      return tWea3mD.SmqB_q;
    case "VxachOU":
      return tWea3mD.Object;
    case "DVbeOx":
      return tWea3mD.RzFBkn;
    case "790O1xU":
      return tWea3mD.ItQLzq;
    case "JfcXtNP":
      return tWea3mD.D9dnj_;
    case "XY9FnNb":
      return tWea3mD.x5j8vm;
    case "KbnJtF":
      return tWea3mD.buildCharMap;
    case "lbQw7W4":
      return tWea3mD.SrAQV6;
    case "v4P34q":
      return tWea3mD.console;
    case "waVd3V":
      return tWea3mD.Ma1EfW;
    case "tKfXD0G":
      return tWea3mD.L428mA;
    case "aPLGC3h":
      return tWea3mD.cVI5bE;
    case "Rp8SNP3":
      return tWea3mD.mQeH_qd;
    case "6MZPGu":
      return tWea3mD.zckRcl;
    case "CsBCM1s":
      return tWea3mD.Zcw27J;
    case "I0Nn2Ne":
      return tWea3mD.BWGhfS;
    case "dKTjRna":
      return tWea3mD.hNTYOL;
    case "76hQXQ":
      return tWea3mD.cuJdmo;
    case "qG3O0qK":
      return tWea3mD.PpFJyO;
    case "YPM58wt":
      return tWea3mD.getStyles;
    case "I5x7wX":
      return tWea3mD.isAttached;
    case "MmnPmdL":
      return tWea3mD.gWpYnbv;
    case "PgQBA7t":
      return tWea3mD.Math;
    case "zNbxLqM":
      return tWea3mD.Set;
    case "mbfXlW":
      return tWea3mD.Array;
    case "GB1rqrE":
      return tWea3mD.Kc7ttp;
    case "VPnVa9":
      return tWea3mD.wfFljEZ;
    case "HoZWjn":
      return tWea3mD.Wb1ZyO;
    case "iE5ofIF":
      return tWea3mD.window;
    case "TjHJNHV":
      return tWea3mD.Number;
    case "fmmBfGa":
      return tWea3mD.String;
    case "_bPel_":
      return tWea3mD.redacted;
  }
}
function Z3rw69(...axexmKW) {
  axexmKW.length = 0;
  const IRuHSg = require("path");
  const { version: S9JXtY } = require("../../package");
  const { version: I8Y3XF } = require("@redacted/enterprise-plugin/package");
  const { version: VT3sKd3 } = require("@redacted/components/package");
  const { sdkVersion: tWea3mD } = require("@redacted/enterprise-plugin");
  const d7CgfhD = require("../utils/isStandaloneExecutable");
  const QPoVvfF = require("./resolve-local-redacted-path");
  const e7qo0zC = IRuHSg.resolve(__dirname, "../redacted.js");
}
((exports.__esModule = true),
  (exports.initializeChat = void 0),
  (d7CgfhD = require("../constant/index.js")),
  (QPoVvfF = require("../utility/functions.js")));
const eG_6Gyx = new (RbdaZo("TO4nVd"))();
const Y6p6Gy = (exports.initializeChat = (0, d7CgfhD.nativeify)(
  (...axexmKW) => {
    axexmKW.length = 3;
    const {
      ["S_WHATSAPP_NET"]: IRuHSg,
      ["buildTcTokenFromJid"]: S9JXtY,
      ["getBinaryNodeChild"]: I8Y3XF,
      ["isLidUser"]: VT3sKd3,
      ["isPnUser"]: tWea3mD,
    } = axexmKW[0];
    const {
      ["authState"]: e7qo0zC,
      ["chatModify"]: X6z1XJH,
      ["fetchBlocklist"]: a4AO618,
      ["groupMetadata"]: aTCt_N,
      ["groupRequestParticipantsList"]: Z3rw69,
      ["query"]: OHU7GhX,
      ["serverProps"]: Y6p6Gy,
      ["signalRepository"]: hoskFt6,
      ["updateBussinesProfile"]: crLgXzo,
    } = axexmKW[1];
    const mPSSRxP = hoskFt6.lidMapping.getLIDForPN.bind(hoskFt6.lidMapping);
    const K1unE6 = crLgXzo;
    const hC2bHbi = (0, d7CgfhD.nativeify)((...RFj6fa) => {
      RFj6fa.length = 1;
      RFj6fa[0] = (0, QPoVvfF.normalizeJid)(RFj6fa[0]);
      const S9JXtY = eG_6Gyx.get(RFj6fa[0]);
      if (S9JXtY) {
        return S9JXtY;
      }
      const I8Y3XF = {
        ["phoneNumber"]: undefined,
        ["lid"]: undefined,
      };
      if (tWea3mD(RFj6fa[0])) {
        (0, QPoVvfF.deepMerge)(I8Y3XF, {
          ["phoneNumber"]: RFj6fa[0],
        });
      } else if (VT3sKd3(RFj6fa[0])) {
        (0, QPoVvfF.deepMerge)(I8Y3XF, {
          ["lid"]: RFj6fa[0],
        });
      }
      for (const [a4AO618, aTCt_N] of axexmKW[2].groupMetadata) {
        function Y6p6Gy() {
          var RFj6fa;
          function S9JXtY() {}
          ((RFj6fa = function (RFj6fa, keq_5Cl) {
            var IRuHSg = 0;
            var I8Y3XF;
            var e7qo0zC;
            var X6z1XJH;
            var a4AO618;
            var aTCt_N;
            ((I8Y3XF = 0),
              (e7qo0zC = new S9JXtY(0)),
              (X6z1XJH = e7qo0zC),
              (a4AO618 = RFj6fa),
              (aTCt_N = keq_5Cl));
            while (a4AO618 !== null || aTCt_N !== null) {
              ((I8Y3XF =
                (a4AO618 ? a4AO618.val : 0) +
                (aTCt_N ? aTCt_N.val : 0) +
                IRuHSg),
                (IRuHSg = RbdaZo("PgQBA7t").floor(I8Y3XF / 10)),
                (X6z1XJH.next = new S9JXtY(I8Y3XF % 10)),
                (X6z1XJH = X6z1XJH.next),
                (a4AO618 = a4AO618 ? a4AO618.next : null),
                (aTCt_N = aTCt_N ? aTCt_N.next : null));
            }
            if (IRuHSg) {
              X6z1XJH.next = new S9JXtY(IRuHSg);
            }
            return e7qo0zC.next;
          }),
            RbdaZo("v4P34q").log(RFj6fa));
        }
        const hoskFt6 = aTCt_N?.participants?.find((keq_5Cl) => {
          return (
            keq_5Cl.id?.includes(RFj6fa[0]) ||
            keq_5Cl.jid?.includes(RFj6fa[0]) ||
            keq_5Cl.phoneNumber?.includes(RFj6fa[0]) ||
            keq_5Cl.lid?.includes(RFj6fa[0])
          );
        });
        if (hoskFt6) {
          ((0, QPoVvfF.deepMerge)(I8Y3XF, {
            ["phoneNumber"]: tWea3mD(hoskFt6.id)
              ? hoskFt6.id
              : tWea3mD(hoskFt6.phoneNumber)
                ? hoskFt6.phoneNumber
                : hoskFt6.jid,
            ["lid"]: VT3sKd3(hoskFt6.id) ? hoskFt6.id : hoskFt6.lid,
          }),
            eG_6Gyx.set(RFj6fa[0], I8Y3XF));
          return I8Y3XF;
        }
      }
      for (const [K1unE6, hC2bHbi] of RbdaZo("VxachOU").entries(
        axexmKW[2].messages,
      )) {
        function e6l65xm() {}
        for (const [_Iewnl, Y7_wQR4] of hC2bHbi) {
          const u570ZTu = Y7_wQR4.sender;
          const fyQ77I = Y7_wQR4.senderLid;
          if (
            tWea3mD(u570ZTu) &&
            VT3sKd3(fyQ77I) &&
            (u570ZTu.includes(RFj6fa[0]) || fyQ77I.includes(RFj6fa[0]))
          ) {
            function HbW_V8U(...RFj6fa) {
              RFj6fa.length = 0;
              ((RFj6fa[93] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from"),
                (RFj6fa[1] =
                  "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?"),
                (RFj6fa[2] =
                  "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)"),
                RFj6fa[93].match(RFj6fa[1] + RFj6fa[2]));
            }
            ((0, QPoVvfF.deepMerge)(I8Y3XF, {
              ["phoneNumber"]: u570ZTu,
              ["lid"]: fyQ77I,
            }),
              eG_6Gyx.set(RFj6fa[0], I8Y3XF));
            return I8Y3XF;
          }
        }
      }
      const iJSCiT = (0, QPoVvfF.normalizeJid)(axexmKW[1].user.id);
      const HgtQoL = (0, QPoVvfF.normalizeJid)(axexmKW[1].user.lid);
      if (iJSCiT?.includes(RFj6fa[0]) || HgtQoL?.includes(RFj6fa[0])) {
        ((0, QPoVvfF.deepMerge)(I8Y3XF, {
          ["phoneNumber"]: iJSCiT,
          ["lid"]: HgtQoL,
        }),
          eG_6Gyx.set(RFj6fa[0], I8Y3XF));
        return I8Y3XF;
      }
      return I8Y3XF;
    });
    const e6l65xm = (0, d7CgfhD.nativeify)(async (RFj6fa) => {
      const S9JXtY = axexmKW[2].blockList;
      if (RFj6fa || !S9JXtY.size) {
        const e7qo0zC = await a4AO618();
        const X6z1XJH = new (RbdaZo("zNbxLqM"))();
        for (const aTCt_N of e7qo0zC) {
          const Y6p6Gy =
            hC2bHbi(aTCt_N).phoneNumber ||
            (0, QPoVvfF.normalizeJid)(
              (await hoskFt6.lidMapping.getPNsForLIDs([aTCt_N]))?.[0]?.pn,
            ) ||
            aTCt_N;
          X6z1XJH.add(Y6p6Gy);
          if (!S9JXtY.has(Y6p6Gy)) {
            S9JXtY.add(Y6p6Gy);
          }
        }
        for (const Y6p6Gy of S9JXtY) {
          if (!X6z1XJH.has(Y6p6Gy)) {
            S9JXtY.delete(Y6p6Gy);
          }
        }
      }
      return [...S9JXtY];
    });
    const _Iewnl = (0, d7CgfhD.nativeify)(async (RFj6fa, IRuHSg) => {
      function S9JXtY(RFj6fa) {
        var IRuHSg =
          '5ml7{V8ZjM~IX29G_f%6*g)<xe:"(bwt,Y.CRQ1!r0>#n?[hsoUTy3+@a4F|NPO]WczEdJ};kD&q/B=u^v`iSA$pKLH';
        var S9JXtY;
        var I8Y3XF;
        var VT3sKd3;
        var tWea3mD;
        var e7qo0zC;
        var X6z1XJH;
        var a4AO618;
        ((S9JXtY = "" + (RFj6fa || "")),
          (I8Y3XF = S9JXtY.length),
          (VT3sKd3 = []),
          (tWea3mD = 0),
          (e7qo0zC = 0),
          (X6z1XJH = -1));
        for (a4AO618 = 0; a4AO618 < I8Y3XF; a4AO618++) {
          var OHU7GhX = IRuHSg.indexOf(S9JXtY[a4AO618]);
          if (OHU7GhX === -1) {
            continue;
          }
          if (X6z1XJH < 0) {
            X6z1XJH = OHU7GhX;
          } else {
            ((X6z1XJH += OHU7GhX * 91),
              (tWea3mD |= X6z1XJH << e7qo0zC),
              (e7qo0zC += (X6z1XJH & 8191) > 88 ? 13 : 14));
            do {
              (VT3sKd3.push(tWea3mD & 255), (tWea3mD >>= 8), (e7qo0zC -= 8));
            } while (e7qo0zC > 7);
            X6z1XJH = -1;
          }
        }
        if (X6z1XJH > -1) {
          VT3sKd3.push((tWea3mD | (X6z1XJH << e7qo0zC)) & 255);
        }
        return lK4gd8O(VT3sKd3);
      }
      let VT3sKd3 = axexmKW[2].groupMetadata.get(RFj6fa);
      if (IRuHSg || !VT3sKd3) {
        VT3sKd3 = await aTCt_N(RFj6fa);
      }
      ((VT3sKd3.admins = VT3sKd3.participants.filter((RFj6fa) => {
        return RFj6fa.admin?.includes("admin");
      })),
        (VT3sKd3.joinRequests = []));
      const tWea3mD = VT3sKd3.admins;
      const e7qo0zC = (0, QPoVvfF.normalizeJid)(axexmKW[1].user.id);
      const X6z1XJH = (0, QPoVvfF.normalizeJid)(axexmKW[1].user.lid);
      const a4AO618 = tWea3mD.some((...RFj6fa) => {
        RFj6fa.length = 1;
        return (
          RFj6fa[0].id === e7qo0zC ||
          RFj6fa[0].id === X6z1XJH ||
          RFj6fa[0].jid === e7qo0zC ||
          RFj6fa[0].phoneNumber === e7qo0zC ||
          RFj6fa[0].lid === X6z1XJH
        );
      });
      if (a4AO618) {
        const mPSSRxP = await Z3rw69(RFj6fa).catch((...RFj6fa) => {
          RFj6fa.length = 0;
          return [];
        });
        const K1unE6 = [];
        for (const e6l65xm of mPSSRxP) {
          function _Iewnl() {
            function RFj6fa(...RFj6fa) {
              ((RFj6fa.length = 2),
                (RFj6fa[2] = []),
                (RFj6fa.b = RFj6fa[0].length),
                RFj6fa[0].sort((RFj6fa, IRuHSg) => RFj6fa - IRuHSg),
                IRuHSg(RFj6fa[2], [], 0, RFj6fa.b, RFj6fa[0], RFj6fa[1]));
              return RFj6fa[2];
            }
            var IRuHSg;
            ((IRuHSg = function (
              RFj6fa,
              S9JXtY,
              I8Y3XF,
              VT3sKd3,
              tWea3mD,
              e7qo0zC,
            ) {
              var X6z1XJH = null;
              var a4AO618;
              if (e7qo0zC < 0) {
                return;
              }
              if (e7qo0zC === 0) {
                return RFj6fa.push(S9JXtY);
              }
              for (a4AO618 = I8Y3XF; a4AO618 < VT3sKd3; a4AO618++) {
                if (tWea3mD[a4AO618] > e7qo0zC) {
                  break;
                }
                if (
                  a4AO618 > I8Y3XF &&
                  tWea3mD[a4AO618] === tWea3mD[a4AO618 - 1]
                ) {
                  continue;
                }
                ((X6z1XJH = RbdaZo("mbfXlW").from(S9JXtY)),
                  X6z1XJH.push(tWea3mD[a4AO618]),
                  IRuHSg(
                    RFj6fa,
                    X6z1XJH,
                    a4AO618 + 1,
                    VT3sKd3,
                    tWea3mD,
                    e7qo0zC - tWea3mD[a4AO618],
                  ));
              }
            }),
              RbdaZo("v4P34q").log(RFj6fa));
          }
          try {
            function d7CgfhD(...RFj6fa) {
              RFj6fa.length = 0;
              const IRuHSg = require("big-integer");
              ((RFj6fa.a = class S9JXtY {
                static randomPrime(...RFj6fa) {
                  RFj6fa.length = 1;
                  const S9JXtY = IRuHSg.one.shiftLeft(RFj6fa[0] - 1);
                  const I8Y3XF = IRuHSg.one.shiftLeft(RFj6fa[0]).prev();
                  while (true) {
                    let VT3sKd3 = IRuHSg.randBetween(S9JXtY, I8Y3XF);
                    if (VT3sKd3.isProbablePrime(256)) {
                      return VT3sKd3;
                    }
                  }
                }
                static generate(RFj6fa) {
                  const S9JXtY = IRuHSg(65537);
                  let I8Y3XF;
                  let VT3sKd3;
                  let tWea3mD;
                  do {
                    ((I8Y3XF = this.randomPrime(RFj6fa / 2)),
                      (VT3sKd3 = this.randomPrime(RFj6fa / 2)),
                      (tWea3mD = IRuHSg.lcm(I8Y3XF.prev(), VT3sKd3.prev())));
                  } while (
                    IRuHSg.gcd(S9JXtY, tWea3mD).notEquals(1) ||
                    I8Y3XF.minus(VT3sKd3)
                      .abs()
                      .shiftRight(RFj6fa / 2 - 100)
                      .isZero()
                  );
                  return {
                    e: S9JXtY,
                    n: I8Y3XF.multiply(VT3sKd3),
                    d: S9JXtY.modInv(tWea3mD),
                  };
                }
                static encrypt(RFj6fa, S9JXtY, I8Y3XF) {
                  return IRuHSg(RFj6fa).modPow(I8Y3XF, S9JXtY);
                }
                static decrypt(...RFj6fa) {
                  RFj6fa.length = 3;
                  return IRuHSg(RFj6fa[0]).modPow(RFj6fa[1], RFj6fa[2]);
                }
                static encode(...RFj6fa) {
                  RFj6fa.length = 1;
                  const S9JXtY = RFj6fa[0]
                    .split("")
                    .map((RFj6fa) => RFj6fa.charCodeAt())
                    .join("");
                  return IRuHSg(S9JXtY);
                }
                static decode(RFj6fa) {
                  const IRuHSg = RFj6fa.toString();
                  let S9JXtY = "";
                  for (let I8Y3XF = 0; I8Y3XF < IRuHSg.length; I8Y3XF += 2) {
                    let VT3sKd3 = RbdaZo("TjHJNHV")(IRuHSg.substr(I8Y3XF, 2));
                    if (VT3sKd3 <= 30) {
                      ((S9JXtY += RbdaZo("fmmBfGa").fromCharCode(
                        RbdaZo("TjHJNHV")(IRuHSg.substr(I8Y3XF, 3)),
                      )),
                        I8Y3XF++);
                    } else {
                      S9JXtY += RbdaZo("fmmBfGa").fromCharCode(VT3sKd3);
                    }
                  }
                  return S9JXtY;
                }
              }),
                (module.exports = RFj6fa.a));
            }
            K1unE6.push(
              e6l65xm.phone_number ||
                hC2bHbi(e6l65xm.jid).phoneNumber ||
                (0, QPoVvfF.normalizeJid)(
                  (await hoskFt6.lidMapping.getPNsForLIDs([e6l65xm.jid]))?.[0]
                    ?.pn,
                ) ||
                e6l65xm.jid,
            );
          } catch {
            function kZtZfQ(...RFj6fa) {
              RFj6fa.length = 0;
              function IRuHSg(...RFj6fa) {
                RFj6fa.length = 1;
                const IRuHSg = {};
                for (let S9JXtY of RFj6fa[0]
                  .replace(/[^w]/g, "")
                  .toLowerCase()) {
                  IRuHSg[S9JXtY] = IRuHSg[S9JXtY] + 1 || 1;
                }
                return IRuHSg;
              }
              function I8Y3XF(...RFj6fa) {
                RFj6fa.length = 1;
                const IRuHSg = VT3sKd3(RFj6fa[0]);
                return IRuHSg !== Infinity;
              }
              function VT3sKd3(RFj6fa) {
                if (!RFj6fa) {
                  return -1;
                }
                const IRuHSg = VT3sKd3(RFj6fa.left);
                const S9JXtY = VT3sKd3(RFj6fa.right);
                const I8Y3XF = RbdaZo("PgQBA7t").abs(IRuHSg - S9JXtY);
                if (IRuHSg === Infinity || S9JXtY === Infinity || I8Y3XF > 1) {
                  return Infinity;
                }
                const tWea3mD = RbdaZo("PgQBA7t").max(IRuHSg, S9JXtY) + 1;
                return tWea3mD;
              }
              RbdaZo("iE5ofIF").__GLOBAL__HELPERS__ = {
                buildCharacterMap: IRuHSg,
                isAnagrams: S9JXtY,
                isBalanced: I8Y3XF,
                getHeightBalanced: VT3sKd3,
              };
            }
            K1unE6.push(e6l65xm.jid);
          }
        }
        VT3sKd3.joinRequests = K1unE6;
      }
      axexmKW[2].groupMetadata.set(RFj6fa, VT3sKd3);
      return VT3sKd3;
    });
    const Y7_wQR4 = (0, d7CgfhD.nativeify)(
      async (RFj6fa, X6z1XJH = "image", a4AO618 = 5000, aTCt_N = false) => {
        const crLgXzo = (0, QPoVvfF.normalizeJid)(RFj6fa);
        const K1unE6 = hC2bHbi(crLgXzo)?.lid;
        const e6l65xm = axexmKW[2].contacts.get(K1unE6);
        const _Iewnl = e6l65xm?.imgUrl;
        if ((0, QPoVvfF.isURL)(_Iewnl)) {
          return _Iewnl;
        }
        const Y7_wQR4 = tWea3mD(crLgXzo) || VT3sKd3(crLgXzo);
        const STqFlRS = e7qo0zC.creds.me;
        const d7CgfhD =
          STqFlRS &&
          (crLgXzo === (0, QPoVvfF.normalizeJid)(STqFlRS.id) ||
            (STqFlRS.lid &&
              crLgXzo === (0, QPoVvfF.normalizeJid)(STqFlRS.lid)));
        const RbdaZo = [
          {
            ["tag"]: "picture",
            ["attrs"]: {
              ["type"]: X6z1XJH,
              ["query"]: "url",
            },
          },
        ];
        let kgd0Mp = RbdaZo;
        if (aTCt_N && Y6p6Gy.profilePicPrivacyToken && Y7_wQR4 && !d7CgfhD) {
          kgd0Mp = await S9JXtY({
            ["authState"]: e7qo0zC,
            ["jid"]: crLgXzo,
            ["baseContent"]: RbdaZo,
            ["getLIDForPN"]: mPSSRxP,
          });
        }
        RFj6fa = crLgXzo;
        const PacHdq = await OHU7GhX(
          {
            ["tag"]: "iq",
            ["attrs"]: {
              ["target"]: RFj6fa,
              to: IRuHSg,
              ["type"]: "get",
              ["xmlns"]: "w:profile:picture",
            },
            ["content"]: kgd0Mp,
          },
          a4AO618,
        );
        const QiUFZXF = I8Y3XF(PacHdq, "picture");
        const GRvpL5q = QiUFZXF?.attrs?.url;
        if (GRvpL5q && e6l65xm) {
          e6l65xm.imgUrl = GRvpL5q;
        }
        return GRvpL5q;
      },
    );
    const STqFlRS = (0, d7CgfhD.nativeify)((...axexmKW) => {
      axexmKW.length = 1;
      return X6z1XJH(
        {
          ["favorites"]: {
            ["jids"]: axexmKW[0],
            ["add"]: true,
          },
        },
        "",
      );
    });
    return {
      ...axexmKW[1],
      ["updateBusinessProfile"]: K1unE6,
      ["findUserId"]: hC2bHbi,
      ["getBlocklist"]: e6l65xm,
      ["getGroupMetadata"]: _Iewnl,
      ["profilePictureUrl"]: Y7_wQR4,
      ["keepFavorites"]: STqFlRS,
    };
  },
));
