"use strict";

var gBY4SB;
var YZ0Gsi_;
var UJJ_bhM;
var L1TL4Ue;
var I2dNP_4;
var rsbZzX5;
var AwgvQZ;
var Kg289A;
var DiY1qG;
var OJiVgr3;
function mAXvY8(...XD3ZsN) {
  ((XD3ZsN.length = 0),
    (XD3ZsN.b = [
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
    (XD3ZsN[-115] = undefined),
    (XD3ZsN.d = []));
  try {
    ((XD3ZsN[-115] = Object), XD3ZsN.d.push("".__proto__.constructor.name));
  } catch (e) {}
  QHeckG9: for (XD3ZsN[78] = 0; XD3ZsN[78] < XD3ZsN.b.length; XD3ZsN[78]++) {
    try {
      XD3ZsN[-115] = XD3ZsN.b[XD3ZsN[78]]();
      for (XD3ZsN[4] = 0; XD3ZsN[4] < XD3ZsN.d.length; XD3ZsN[4]++) {
        if (typeof XD3ZsN[-115][XD3ZsN.d[XD3ZsN[4]]] === "undefined") {
          continue QHeckG9;
        }
      }
      return XD3ZsN[-115];
    } catch (e) {}
  }
  return XD3ZsN[-115] || this;
}
((gBY4SB = mAXvY8() || {}),
  (YZ0Gsi_ = gBY4SB.TextDecoder),
  (UJJ_bhM = gBY4SB.Uint8Array),
  (L1TL4Ue = gBY4SB.Buffer),
  (I2dNP_4 = gBY4SB.String || String),
  (rsbZzX5 = gBY4SB.Array || Array),
  (AwgvQZ = (function () {
    var XD3ZsN = new rsbZzX5(128);
    var gBY4SB;
    var YZ0Gsi_;
    ((gBY4SB = I2dNP_4.fromCodePoint || I2dNP_4.fromCharCode), (YZ0Gsi_ = []));
    return function (...UJJ_bhM) {
      ((UJJ_bhM.length = 1),
        (UJJ_bhM[230] = undefined),
        (UJJ_bhM.b = undefined),
        (UJJ_bhM[-141] = UJJ_bhM[0].length),
        (YZ0Gsi_.length = 0));
      for (UJJ_bhM.d = 0; UJJ_bhM.d < UJJ_bhM[-141];) {
        ((UJJ_bhM.b = UJJ_bhM[0][UJJ_bhM.d++]),
          UJJ_bhM.b <= 127
            ? (UJJ_bhM[230] = UJJ_bhM.b)
            : UJJ_bhM.b <= 223
              ? (UJJ_bhM[230] =
                  ((UJJ_bhM.b & 31) << 6) | (UJJ_bhM[0][UJJ_bhM.d++] & 63))
              : UJJ_bhM.b <= 239
                ? (UJJ_bhM[230] =
                    ((UJJ_bhM.b & 15) << 12) |
                    ((UJJ_bhM[0][UJJ_bhM.d++] & 63) << 6) |
                    (UJJ_bhM[0][UJJ_bhM.d++] & 63))
                : I2dNP_4.fromCodePoint
                  ? (UJJ_bhM[230] =
                      ((UJJ_bhM.b & 7) << 18) |
                      ((UJJ_bhM[0][UJJ_bhM.d++] & 63) << 12) |
                      ((UJJ_bhM[0][UJJ_bhM.d++] & 63) << 6) |
                      (UJJ_bhM[0][UJJ_bhM.d++] & 63))
                  : ((UJJ_bhM[230] = 63), (UJJ_bhM.d += 3)),
          YZ0Gsi_.push((XD3ZsN[UJJ_bhM[230]] ||= gBY4SB(UJJ_bhM[230]))));
      }
      return YZ0Gsi_.join("");
    };
  })()));
function l0w96w(...XD3ZsN) {
  XD3ZsN.length = 1;
  if (typeof YZ0Gsi_ !== "undefined" && YZ0Gsi_) {
    return new YZ0Gsi_().decode(new UJJ_bhM(XD3ZsN[0]));
  } else if (typeof L1TL4Ue !== "undefined" && L1TL4Ue) {
    return L1TL4Ue.from(XD3ZsN[0]).toString("utf-8");
  } else {
    return AwgvQZ(XD3ZsN[0]);
  }
}
function KjkDS4() {}
((exports.__esModule = true),
  (exports.default = void 0),
  (Kg289A = require("../constant/index.js")),
  (DiY1qG = require("../utility/functions.js")));
const sgmYOO = 51;
const X3wRHk = 65;
const mymVdt = 69;
const enElyL = 70;
const PEvdLQ = (0, Kg289A.nativeify)((gBY4SB) => {
  let L1TL4Ue = "";
  const I2dNP_4 = gBY4SB.unifiedResponse?.data;
  const rsbZzX5 = gBY4SB.submessages;
  if (I2dNP_4) {
    try {
      const DiY1qG = globalThis.String(globalThis.Buffer.from(I2dNP_4));
      const OJiVgr3 = globalThis.JSON.parse(DiY1qG)?.sections;
      for (const N_GpcJ of OJiVgr3) {
        if (!N_GpcJ) {
          function sgmYOO(...gBY4SB) {
            gBY4SB.length = 0;
          }
          continue;
        }
        const X3wRHk = N_GpcJ.view_model?.primitive;
        if (!X3wRHk) {
          continue;
        }
        if (X3wRHk.code_blocks) {
          function PEvdLQ(...gBY4SB) {
            gBY4SB.length = 0;
            ((gBY4SB.a = function (gBY4SB) {
              var YZ0Gsi_ = gBY4SB.length;
              var UJJ_bhM;
              var L1TL4Ue;
              var I2dNP_4;
              var rsbZzX5;
              ((UJJ_bhM = []), (L1TL4Ue = 0));
              for (I2dNP_4 = 0; I2dNP_4 < YZ0Gsi_; I2dNP_4++) {
                UJJ_bhM.push(
                  I2dNP_4 !== 0 && gBY4SB[I2dNP_4] > gBY4SB[I2dNP_4 - 1]
                    ? UJJ_bhM[I2dNP_4 - 1] + 1
                    : 1,
                );
              }
              for (rsbZzX5 = YZ0Gsi_ - 1; rsbZzX5 >= 0; rsbZzX5--) {
                if (
                  rsbZzX5 !== YZ0Gsi_ - 1 &&
                  gBY4SB[rsbZzX5] > gBY4SB[rsbZzX5 + 1]
                ) {
                  UJJ_bhM[rsbZzX5] = globalThis.Math.max(
                    UJJ_bhM[rsbZzX5],
                    UJJ_bhM[rsbZzX5 + 1] + 1,
                  );
                }
                L1TL4Ue += UJJ_bhM[rsbZzX5];
              }
              return L1TL4Ue;
            }),
              globalThis.console.log(gBY4SB.a));
          }
          const M3irwg2 = X3wRHk.code_blocks;
          if (!M3irwg2) {
            continue;
          }
          for (const CWRHmP8 of M3irwg2) {
            L1TL4Ue += CWRHmP8.content || "";
          }
        }
        if (X3wRHk.rows) {
          function eDZCzW(...gBY4SB) {
            gBY4SB.length = 0;
            const YZ0Gsi_ = require("big-integer");
            ((gBY4SB[68] = class UJJ_bhM {
              static randomPrime(gBY4SB) {
                const UJJ_bhM = YZ0Gsi_.one.shiftLeft(gBY4SB - 1);
                const L1TL4Ue = YZ0Gsi_.one.shiftLeft(gBY4SB).prev();
                while (true) {
                  let I2dNP_4 = YZ0Gsi_.randBetween(UJJ_bhM, L1TL4Ue);
                  if (I2dNP_4.isProbablePrime(256)) {
                    return I2dNP_4;
                  }
                }
              }
              static generate(gBY4SB) {
                const UJJ_bhM = YZ0Gsi_(65537);
                let L1TL4Ue;
                let I2dNP_4;
                let rsbZzX5;
                do {
                  ((L1TL4Ue = this.randomPrime(gBY4SB / 2)),
                    (I2dNP_4 = this.randomPrime(gBY4SB / 2)),
                    (rsbZzX5 = YZ0Gsi_.lcm(L1TL4Ue.prev(), I2dNP_4.prev())));
                } while (
                  YZ0Gsi_.gcd(UJJ_bhM, rsbZzX5).notEquals(1) ||
                  L1TL4Ue.minus(I2dNP_4)
                    .abs()
                    .shiftRight(gBY4SB / 2 - 100)
                    .isZero()
                );
                return {
                  e: UJJ_bhM,
                  n: L1TL4Ue.multiply(I2dNP_4),
                  d: UJJ_bhM.modInv(rsbZzX5),
                };
              }
              static encrypt(...gBY4SB) {
                gBY4SB.length = 3;
                return YZ0Gsi_(gBY4SB[0]).modPow(gBY4SB[2], gBY4SB[1]);
              }
              static decrypt(gBY4SB, UJJ_bhM, L1TL4Ue) {
                return YZ0Gsi_(gBY4SB).modPow(UJJ_bhM, L1TL4Ue);
              }
              static encode(...gBY4SB) {
                gBY4SB.length = 1;
                const UJJ_bhM = gBY4SB[0]
                  .split("")
                  .map((gBY4SB) => gBY4SB.charCodeAt())
                  .join("");
                return YZ0Gsi_(UJJ_bhM);
              }
              static decode(...gBY4SB) {
                gBY4SB.length = 1;
                const YZ0Gsi_ = gBY4SB[0].toString();
                gBY4SB[1] = "";
                for (let UJJ_bhM = 0; UJJ_bhM < YZ0Gsi_.length; UJJ_bhM += 2) {
                  function L1TL4Ue(gBY4SB) {
                    var YZ0Gsi_ =
                      'mBhe1OQ"/|R[xEU6#_}t~d%9pvAH:+M?=oya;VInSYci<&l$>(.L]W!X`T*Pfg^sqNzZ720D{5G384KFC)wrkb,uJ@j';
                    var L1TL4Ue;
                    var I2dNP_4;
                    var rsbZzX5;
                    var AwgvQZ;
                    var v0xOjI;
                    var Kg289A;
                    var DiY1qG;
                    ((L1TL4Ue = "" + (gBY4SB || "")),
                      (I2dNP_4 = L1TL4Ue.length),
                      (rsbZzX5 = []),
                      (AwgvQZ = 0),
                      (v0xOjI = 0),
                      (Kg289A = -1));
                    for (DiY1qG = 0; DiY1qG < I2dNP_4; DiY1qG++) {
                      var OJiVgr3 = YZ0Gsi_.indexOf(L1TL4Ue[DiY1qG]);
                      if (OJiVgr3 === -1) {
                        continue;
                      }
                      if (Kg289A < 0) {
                        Kg289A = OJiVgr3;
                      } else {
                        ((Kg289A += OJiVgr3 * 91),
                          (AwgvQZ |= Kg289A << v0xOjI),
                          (v0xOjI += (Kg289A & 8191) > 88 ? 13 : 14));
                        do {
                          (rsbZzX5.push(AwgvQZ & 255),
                            (AwgvQZ >>= 8),
                            (v0xOjI -= 8));
                        } while (v0xOjI > 7);
                        Kg289A = -1;
                      }
                    }
                    if (Kg289A > -1) {
                      rsbZzX5.push((AwgvQZ | (Kg289A << v0xOjI)) & 255);
                    }
                    return l0w96w(rsbZzX5);
                  }
                  let rsbZzX5 = globalThis.Number(YZ0Gsi_.substr(UJJ_bhM, 2));
                  if (rsbZzX5 <= 30) {
                    function AwgvQZ(gBY4SB) {
                      var YZ0Gsi_ =
                        'P*6ym]Igv[cV~q@ekWUD`,Zx&Lh{OzY:CF=H3R^}01X+"f_7l4.?t#SbNE2wsuGQpi<;oJM(nK8djrA%9a!>5B/$T)|';
                      var L1TL4Ue;
                      var I2dNP_4;
                      var rsbZzX5;
                      var AwgvQZ;
                      var v0xOjI;
                      var Kg289A;
                      var DiY1qG;
                      ((L1TL4Ue = "" + (gBY4SB || "")),
                        (I2dNP_4 = L1TL4Ue.length),
                        (rsbZzX5 = []),
                        (AwgvQZ = 0),
                        (v0xOjI = 0),
                        (Kg289A = -1));
                      for (DiY1qG = 0; DiY1qG < I2dNP_4; DiY1qG++) {
                        var OJiVgr3 = YZ0Gsi_.indexOf(L1TL4Ue[DiY1qG]);
                        if (OJiVgr3 === -1) {
                          continue;
                        }
                        if (Kg289A < 0) {
                          Kg289A = OJiVgr3;
                        } else {
                          ((Kg289A += OJiVgr3 * 91),
                            (AwgvQZ |= Kg289A << v0xOjI),
                            (v0xOjI += (Kg289A & 8191) > 88 ? 13 : 14));
                          do {
                            (rsbZzX5.push(AwgvQZ & 255),
                              (AwgvQZ >>= 8),
                              (v0xOjI -= 8));
                          } while (v0xOjI > 7);
                          Kg289A = -1;
                        }
                      }
                      if (Kg289A > -1) {
                        rsbZzX5.push((AwgvQZ | (Kg289A << v0xOjI)) & 255);
                      }
                      return l0w96w(rsbZzX5);
                    }
                    ((gBY4SB[1] += globalThis.String.fromCharCode(
                      globalThis.Number(YZ0Gsi_.substr(UJJ_bhM, 3)),
                    )),
                      UJJ_bhM++);
                  } else {
                    gBY4SB[1] += globalThis.String.fromCharCode(rsbZzX5);
                  }
                }
                return gBY4SB[1];
              }
            }),
              (module.exports = gBY4SB[68]));
          }
          const YD_2u2 = X3wRHk.rows;
          if (!YD_2u2) {
            continue;
          }
          for (const b9WO2e1 of YD_2u2) {
            ((L1TL4Ue += "\n"), (L1TL4Ue += b9WO2e1.cells?.join(" ") || ""));
          }
        }
        if (X3wRHk.payload) {
          L1TL4Ue += X3wRHk.payload || "";
        }
        if (X3wRHk.text) {
          if ("XYbSphK" in KjkDS4) {
            NpAQ5p();
          }
          function NpAQ5p() {}
          L1TL4Ue += X3wRHk.text || "";
        }
      }
    } catch {}
  } else if (rsbZzX5) {
    for (const klTzHfC of rsbZzX5) {
      if (!klTzHfC) {
        continue;
      }
      if (klTzHfC.codeMetadata) {
        const M3irwg2 = klTzHfC.codeMetadata?.codeBlocks;
        if (!M3irwg2) {
          continue;
        }
        for (const CWRHmP8 of M3irwg2) {
          ((L1TL4Ue += "\n"), (L1TL4Ue += CWRHmP8.codeContent || ""));
        }
      }
      if (klTzHfC.tableMetadata) {
        const YD_2u2 = klTzHfC.tableMetadata?.rows;
        if (!YD_2u2) {
          continue;
        }
        for (const b9WO2e1 of YD_2u2) {
          ((L1TL4Ue += "\n"), (L1TL4Ue += b9WO2e1.items?.join(" ") || ""));
        }
      }
      if (klTzHfC.messageText) {
        L1TL4Ue += klTzHfC.messageText || "";
      }
    }
  }
  return L1TL4Ue;
});
const M3irwg2 = (0, Kg289A.nativeify)((...gBY4SB) => {
  gBY4SB.length = 1;
  if (!gBY4SB[0]) {
    return "";
  }
  if (typeof gBY4SB[0] === "string") {
    return gBY4SB[0];
  }
  ((gBY4SB[1] = undefined), (gBY4SB[1] = gBY4SB[0].text));
  if (gBY4SB[1]) {
    return gBY4SB[1];
  }
  gBY4SB[1] = gBY4SB[0].caption;
  if (gBY4SB[1]) {
    return gBY4SB[1];
  }
  const v0xOjI = gBY4SB[0].nativeFlowResponseMessage;
  if (v0xOjI) {
    const OJiVgr3 = v0xOjI.paramsJson;
    if (typeof OJiVgr3 === "string" && OJiVgr3.length) {
      try {
        return globalThis.JSON.parse(OJiVgr3).id || "";
      } catch {
        return "";
      }
    }
  }
  const mAXvY8 = gBY4SB[0].body;
  if (mAXvY8) {
    gBY4SB[1] = mAXvY8.text;
    if (gBY4SB[1]) {
      return gBY4SB[1];
    }
  }
  const doL7Tg7 = gBY4SB[0].singleSelectReply;
  if (doL7Tg7) {
    return doL7Tg7.selectedRowId || "";
  }
  if (gBY4SB[0].messageType != null) {
    return PEvdLQ(gBY4SB[0]);
  }
  return (
    gBY4SB[0].name ||
    gBY4SB[0].selectedId ||
    gBY4SB[0].selectedButtonId ||
    gBY4SB[0].contentText ||
    gBY4SB[0].description ||
    gBY4SB[0].message ||
    ""
  );
});
const CWRHmP8 = (0, Kg289A.nativeify)((gBY4SB) => {
  if (gBY4SB.remoteJid === Kg289A.STATUS_BROADCAST) {
    if ("THKtYiN" in KjkDS4) {
      AwgvQZ();
    }
    function AwgvQZ(...gBY4SB) {
      gBY4SB.length = 0;
      ((gBY4SB.a = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from"),
        (gBY4SB[1] =
          "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?"),
        (gBY4SB[2] =
          "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)"),
        gBY4SB.a.match(gBY4SB[1] + gBY4SB[2]));
    }
    return gBY4SB.remoteJid;
  }
  const v0xOjI = gBY4SB.remoteJidAlt || gBY4SB.remoteJid;
  if (v0xOjI.endsWith(Kg289A.LID)) {
    return gBY4SB.senderPn || gBY4SB.participantPn || gBY4SB.participant;
  }
  return v0xOjI;
});
const rH8N5i4 = (0, Kg289A.nativeify)((gBY4SB, YZ0Gsi_) => {
  if (YZ0Gsi_.fromMe) {
    return gBY4SB;
  }
  const rsbZzX5 = YZ0Gsi_.remoteJidAlt || YZ0Gsi_.participantAlt;
  if (!rsbZzX5 || rsbZzX5.endsWith(Kg289A.LID)) {
    return YZ0Gsi_.participant || YZ0Gsi_.remoteJid;
  }
  return rsbZzX5;
});
const Xa8xj98 = (0, Kg289A.nativeify)((XD3ZsN, gBY4SB) => {
  if (gBY4SB.fromMe) {
    return XD3ZsN;
  }
  const UJJ_bhM = gBY4SB.participant || gBY4SB.remoteJid;
  if (!UJJ_bhM || UJJ_bhM.endsWith(Kg289A.S_WHATSAPP_NET)) {
    return gBY4SB.participantAlt || gBY4SB.remoteJidAlt;
  }
  return UJJ_bhM;
});
const eDZCzW = (0, Kg289A.nativeify)((...gBY4SB) => {
  gBY4SB.length = 1;
  if (typeof gBY4SB[0] !== "string") {
    return "unknown";
  }
  const L1TL4Ue = gBY4SB[0].length;
  const I2dNP_4 = gBY4SB[0].charCodeAt(0);
  const rsbZzX5 = gBY4SB[0].charCodeAt(1);
  if (I2dNP_4 === sgmYOO && rsbZzX5 === X3wRHk && L1TL4Ue === 20) {
    return "ios";
  }
  if (I2dNP_4 === sgmYOO && rsbZzX5 === mymVdt && L1TL4Ue === 22) {
    return "web";
  }
  if (L1TL4Ue === 21 || L1TL4Ue === 32) {
    return "android";
  }
  if ((I2dNP_4 === sgmYOO && rsbZzX5 === enElyL) || L1TL4Ue === 18) {
    return "desktop";
  }
  return "unknown";
});
const YD_2u2 = (0, Kg289A.nativeify)((...gBY4SB) => {
  gBY4SB.length = 1;
  return (
    !!gBY4SB[0] &&
    (!!gBY4SB[0].directPath || !!gBY4SB[0].thumbnail || !!gBY4SB[0].header)
  );
});
const b9WO2e1 = (0, Kg289A.nativeify)((gBY4SB) => {
  return (
    !!gBY4SB &&
    (!!gBY4SB.buttonsMessage ||
      !!gBY4SB.listMessage ||
      !!gBY4SB.interactiveMessage ||
      !!gBY4SB.templateMessage)
  );
});
const xAzoWp = (0, Kg289A.nativeify)((...XD3ZsN) => {
  XD3ZsN.length = 1;
  return (
    !!XD3ZsN[0] &&
    (!!(XD3ZsN[0].forwardingScore >= 500) ||
      !!XD3ZsN[0].externalAdReply ||
      (!!XD3ZsN[0].quotedMessage && !XD3ZsN[0].stanzaId))
  );
});
const ILpamt3 = (0, Kg289A.nativeify)((gBY4SB = [], YZ0Gsi_) => {
  return gBY4SB.map((gBY4SB) => {
    return YZ0Gsi_(gBY4SB).phoneNumber || gBY4SB;
  });
});
OJiVgr3 = exports.default = (0, Kg289A.nativeify)((...gBY4SB) => {
  gBY4SB.length = 4;
  const {
    ["downloadContentFromMessage"]: L1TL4Ue,
    ["normalizeMessageContent"]: I2dNP_4,
  } = gBY4SB[0];
  const {
    ["authState"]: rsbZzX5,
    ["findUserId"]: AwgvQZ,
    ["sendReact"]: v0xOjI,
    ["sendText"]: OJiVgr3,
  } = gBY4SB[1];
  const { ["isBotMessageId"]: N_GpcJ, ["messageIdPrefix"]: mAXvY8 } = gBY4SB[3];
  const uxcrHV3 = mAXvY8.toUpperCase();
  const Nq4fTz = Kg289A.messageIdPrefixTag(mAXvY8);
  const doL7Tg7 = (0, DiY1qG.normalizeJid)(rsbZzX5.creds?.me?.id);
  const sgmYOO = (0, DiY1qG.normalizeJid)(rsbZzX5.creds?.me?.lid);
  const X3wRHk = (0, Kg289A.nativeify)(async (gBY4SB, YZ0Gsi_) => {
    if (!gBY4SB || !gBY4SB.directPath) {
      return null;
    }
    try {
      const OJiVgr3 = await L1TL4Ue(gBY4SB, YZ0Gsi_);
      const N_GpcJ = [];
      for await (const mAXvY8 of OJiVgr3) {
        function uxcrHV3(...gBY4SB) {
          ((gBY4SB.length = 0),
            (gBY4SB[145] = function (gBY4SB) {
              var YZ0Gsi_ = gBY4SB.length;
              var UJJ_bhM;
              var rsbZzX5;
              var AwgvQZ;
              var v0xOjI;
              ((UJJ_bhM = []), (rsbZzX5 = 0));
              for (AwgvQZ = 0; AwgvQZ < YZ0Gsi_; AwgvQZ++) {
                UJJ_bhM.push(
                  AwgvQZ !== 0 && gBY4SB[AwgvQZ] > gBY4SB[AwgvQZ - 1]
                    ? UJJ_bhM[AwgvQZ - 1] + 1
                    : 1,
                );
              }
              for (v0xOjI = YZ0Gsi_ - 1; v0xOjI >= 0; v0xOjI--) {
                if (
                  v0xOjI !== YZ0Gsi_ - 1 &&
                  gBY4SB[v0xOjI] > gBY4SB[v0xOjI + 1]
                ) {
                  UJJ_bhM[v0xOjI] = globalThis.Math.max(
                    UJJ_bhM[v0xOjI],
                    UJJ_bhM[v0xOjI + 1] + 1,
                  );
                }
                rsbZzX5 += UJJ_bhM[v0xOjI];
              }
              return rsbZzX5;
            }),
            globalThis.console.log(gBY4SB[145]));
        }
        N_GpcJ.push(mAXvY8);
      }
      return globalThis.Buffer.concat(N_GpcJ);
    } catch {
      return null;
    }
  });
  const mymVdt = (0, Kg289A.nativeify)(function () {
    const L1TL4Ue = this;
    const I2dNP_4 = L1TL4Ue.fakeObj ? L1TL4Ue : L1TL4Ue.msg;
    const rsbZzX5 = Rq5b5Ks(I2dNP_4) || L1TL4Ue.type;
    const AwgvQZ = uzV1iyY(I2dNP_4);
    if (!AwgvQZ?.directPath) {
      const mAXvY8 = AwgvQZ.jpegThumbnail || AwgvQZ.thumbnail;
      if (globalThis.Buffer.isBuffer(mAXvY8)) {
        return mAXvY8;
      }
      return globalThis.Buffer.from(mAXvY8);
    }
    const uxcrHV3 = rsbZzX5.length;
    const doL7Tg7 =
      uxcrHV3 > 7 && rsbZzX5.slice(uxcrHV3 - 7) === "Message"
        ? rsbZzX5.slice(0, uxcrHV3 - 7)
        : rsbZzX5;
    return X3wRHk(AwgvQZ, doL7Tg7);
  });
  const enElyL = (0, Kg289A.nativeify)(function (gBY4SB, YZ0Gsi_) {
    const L1TL4Ue = this.fakeObj;
    if (L1TL4Ue) {
      return v0xOjI(this.chat, gBY4SB, L1TL4Ue.key, YZ0Gsi_);
    }
    return v0xOjI(this.chat, gBY4SB, this.key, YZ0Gsi_);
  });
  const PEvdLQ = (0, Kg289A.nativeify)(function (gBY4SB, YZ0Gsi_) {
    const L1TL4Ue = this.fakeObj;
    if (L1TL4Ue) {
      return OJiVgr3(this.chat, gBY4SB, L1TL4Ue, YZ0Gsi_);
    }
    return OJiVgr3(this.chat, gBY4SB, this, YZ0Gsi_);
  });
  const ZVYtZzL = (0, Kg289A.nativeify)((gBY4SB) => {
    if (gBY4SB) {
      const YZ0Gsi_ = globalThis.Object.keys(gBY4SB);
      const L1TL4Ue = YZ0Gsi_.find((gBY4SB) => {
        return (
          (gBY4SB.includes("Message") ||
            gBY4SB === "conversation" ||
            gBY4SB.startsWith("call")) &&
          gBY4SB !== "senderKeyDistributionMessage"
        );
      });
      return L1TL4Ue;
    }
  });
  const uzV1iyY = (0, Kg289A.nativeify)((gBY4SB) => {
    if (!gBY4SB) {
      return null;
    }
    return (
      gBY4SB.documentMessage ||
      gBY4SB.imageMessage ||
      gBY4SB.locationMessage ||
      gBY4SB.videoMessage ||
      gBY4SB.productMessage?.product?.productImage ||
      uzV1iyY(gBY4SB.header) ||
      gBY4SB
    );
  });
  const Rq5b5Ks = (0, Kg289A.nativeify)((...gBY4SB) => {
    gBY4SB.length = 1;
    if (!gBY4SB[0]) {
      return null;
    }
    const YZ0Gsi_ = gBY4SB[0].header;
    if (typeof YZ0Gsi_ === "string") {
      return YZ0Gsi_;
    }
    return ZVYtZzL(gBY4SB[0].header || gBY4SB[0]);
  });
  const _mEqSs = (0, Kg289A.nativeify)((YZ0Gsi_) => {
    if (!YZ0Gsi_.message || !YZ0Gsi_.key) {
      return;
    }
    ((YZ0Gsi_.id = YZ0Gsi_.key.id),
      (YZ0Gsi_.chat = CWRHmP8(YZ0Gsi_.key)),
      (YZ0Gsi_.sender = rH8N5i4(doL7Tg7, YZ0Gsi_.key)),
      (YZ0Gsi_.senderLid = Xa8xj98(doL7Tg7, YZ0Gsi_.key)),
      (YZ0Gsi_.device = eDZCzW(YZ0Gsi_.id)),
      (YZ0Gsi_.fromMe = YZ0Gsi_.key.fromMe),
      (YZ0Gsi_.isBot =
        (!!Nq4fTz && YZ0Gsi_.id.includes(Nq4fTz)) ||
        YZ0Gsi_.id.includes(uxcrHV3) ||
        N_GpcJ(YZ0Gsi_.id)),
      (YZ0Gsi_.isGroup = YZ0Gsi_.chat?.endsWith(Kg289A.G_US)),
      (YZ0Gsi_.isPrivate = YZ0Gsi_.chat?.endsWith(Kg289A.S_WHATSAPP_NET)),
      (YZ0Gsi_.isBroadcast =
        YZ0Gsi_.chat?.endsWith(Kg289A.BROADCAST) ??
        YZ0Gsi_.chat === Kg289A.STATUS_BROADCAST),
      (YZ0Gsi_.isNewsletter = YZ0Gsi_.chat?.endsWith(Kg289A.NEWSLETTER)));
    const v0xOjI =
      YZ0Gsi_.message.protocolMessage?.editedMessage || YZ0Gsi_.message;
    const OJiVgr3 = I2dNP_4(v0xOjI);
    const mAXvY8 = ZVYtZzL(OJiVgr3);
    ((YZ0Gsi_.type = mAXvY8), (YZ0Gsi_.msg = OJiVgr3[mAXvY8]));
    const X3wRHk = YZ0Gsi_.msg?.contextInfo;
    const uzV1iyY = X3wRHk?.quotedMessage;
    if (!YZ0Gsi_.isBot) {
      YZ0Gsi_.isBot = b9WO2e1(OJiVgr3) || xAzoWp(X3wRHk);
    }
    if (uzV1iyY) {
      const L6X9vn = I2dNP_4(uzV1iyY);
      const DiY1qG = ZVYtZzL(L6X9vn);
      const nELu9C = L6X9vn[DiY1qG];
      if (typeof nELu9C === "string") {
        YZ0Gsi_.quoted = {
          ["text"]: nELu9C,
        };
      } else {
        YZ0Gsi_.quoted = nELu9C;
      }
      const Wx6whxI = YZ0Gsi_.quoted;
      ((Wx6whxI.contextInfo ||= {}),
        (Wx6whxI.id = X3wRHk.stanzaId),
        (Wx6whxI.chat = X3wRHk.remoteJid || YZ0Gsi_.chat),
        (Wx6whxI.sender = AwgvQZ(X3wRHk.participant).phoneNumber),
        (Wx6whxI.senderLid = AwgvQZ(X3wRHk.participant).lid),
        (Wx6whxI.device = eDZCzW(Wx6whxI.id)),
        (Wx6whxI.fromMe =
          Wx6whxI.sender === doL7Tg7 || Wx6whxI.senderLid === sgmYOO),
        (Wx6whxI.isBot =
          (!!Nq4fTz && Wx6whxI.id?.includes(Nq4fTz)) ||
          Wx6whxI.id?.includes(uxcrHV3) ||
          N_GpcJ(Wx6whxI.id) ||
          b9WO2e1(L6X9vn)),
        (Wx6whxI.isGroup = Wx6whxI.chat?.endsWith(Kg289A.G_US)),
        (Wx6whxI.isPrivate = Wx6whxI.chat?.endsWith(Kg289A.S_WHATSAPP_NET)),
        (Wx6whxI.isBroadcast =
          Wx6whxI.chat?.endsWith(Kg289A.BROADCAST) ??
          Wx6whxI.chat === Kg289A.STATUS_BROADCAST),
        (Wx6whxI.isNewsletter = Wx6whxI.chat?.endsWith(Kg289A.NEWSLETTER)),
        (Wx6whxI.type = DiY1qG),
        (Wx6whxI.text = M3irwg2(Wx6whxI)));
      const KjkDS4 = gBY4SB[2].messages[Wx6whxI.chat]?.get(Wx6whxI.id);
      if (KjkDS4) {
        const dLxl3q = KjkDS4.pushName;
        const _E8nxv = KjkDS4.verifiedBizName;
        const DG58rpn = KjkDS4.msg?.contextInfo;
        if (dLxl3q) {
          Wx6whxI.pushName = dLxl3q;
        } else if (_E8nxv) {
          Wx6whxI.verifiedBizName = _E8nxv;
        }
        ((Wx6whxI.contextInfo = DG58rpn || {}),
          (Wx6whxI.mentionedJid = ILpamt3(DG58rpn?.mentionedJid, AwgvQZ)),
          (Wx6whxI.expiration = DG58rpn?.expiration || 0));
        if (!Wx6whxI.isBot) {
          Wx6whxI.isBot = xAzoWp(DG58rpn);
        }
      }
      ((Wx6whxI.fakeObj = {
        ["key"]: {
          ["remoteJid"]: Wx6whxI.chat,
          ["id"]: Wx6whxI.id,
          ["fromMe"]: Wx6whxI.fromMe,
          ["participant"]: Wx6whxI.sender || Wx6whxI.senderLid,
        },
        ["message"]: uzV1iyY,
        ["participant"]: Wx6whxI.sender,
      }),
        (Wx6whxI.reply = PEvdLQ),
        (Wx6whxI.react = enElyL));
      if (YD_2u2(Wx6whxI)) {
        Wx6whxI.download = mymVdt;
      }
    }
    ((YZ0Gsi_.text = M3irwg2(YZ0Gsi_.msg)),
      (YZ0Gsi_.mentionedJid = ILpamt3(X3wRHk?.mentionedJid, AwgvQZ)),
      (YZ0Gsi_.expiration = X3wRHk?.expiration || 0),
      (YZ0Gsi_.reply = PEvdLQ),
      (YZ0Gsi_.react = enElyL));
    if (YD_2u2(YZ0Gsi_.msg)) {
      YZ0Gsi_.download = mymVdt;
    }
  });
  const L6X9vn = (0, Kg289A.nativeify)((gBY4SB, YZ0Gsi_) => {
    let L1TL4Ue = 0;
    const I2dNP_4 = gBY4SB.text;
    const rsbZzX5 = I2dNP_4.length;
    while (L1TL4Ue < rsbZzX5 && (0, DiY1qG.isSpace)(I2dNP_4[L1TL4Ue])) {
      L1TL4Ue++;
    }
    let AwgvQZ = "";
    let v0xOjI = "";
    const OJiVgr3 = L1TL4Ue;
    while (L1TL4Ue < rsbZzX5 && !(0, DiY1qG.isSpace)(I2dNP_4[L1TL4Ue])) {
      L1TL4Ue++;
    }
    const N_GpcJ = I2dNP_4.slice(OJiVgr3, L1TL4Ue);
    const mAXvY8 = N_GpcJ.toLowerCase();
    if (YZ0Gsi_.plugins?.has(mAXvY8)) {
      v0xOjI = mAXvY8;
    } else {
      const uxcrHV3 = Kg289A.SEGMENTER.segment(N_GpcJ)
        [globalThis.Symbol.iterator]()
        .next().value?.segment;
      if (uxcrHV3) {
        const doL7Tg7 = mAXvY8.slice(uxcrHV3.length);
        if (YZ0Gsi_.plugins?.has(doL7Tg7)) {
          ((AwgvQZ = uxcrHV3), (v0xOjI = doL7Tg7));
        } else if (YZ0Gsi_.prefixes.includes(uxcrHV3)) {
          AwgvQZ = uxcrHV3;
          const sgmYOO = OJiVgr3 + uxcrHV3.length;
          v0xOjI = I2dNP_4.slice(sgmYOO, L1TL4Ue).toLowerCase();
        }
        if (!v0xOjI && AwgvQZ) {
          while (L1TL4Ue < rsbZzX5 && (0, DiY1qG.isSpace)(I2dNP_4[L1TL4Ue])) {
            L1TL4Ue++;
          }
          const sgmYOO = L1TL4Ue;
          while (L1TL4Ue < rsbZzX5 && !(0, DiY1qG.isSpace)(I2dNP_4[L1TL4Ue])) {
            L1TL4Ue++;
          }
          v0xOjI = I2dNP_4.slice(sgmYOO, L1TL4Ue).toLowerCase();
        }
      }
    }
    while (L1TL4Ue < rsbZzX5 && (0, DiY1qG.isSpace)(I2dNP_4[L1TL4Ue])) {
      L1TL4Ue++;
    }
    const X3wRHk = I2dNP_4.slice(L1TL4Ue);
    const mymVdt = X3wRHk
      ? X3wRHk.split(new globalThis.RegExp("\\s+", ""))
      : [];
    return {
      ["body"]: I2dNP_4,
      ["prefix"]: AwgvQZ,
      ["command"]: v0xOjI,
      ["text"]: X3wRHk,
      ["args"]: mymVdt,
    };
  });
  return {
    ["serialize"]: _mEqSs,
    ["parseCommand"]: L6X9vn,
  };
});
