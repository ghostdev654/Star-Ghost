"use strict";

var VsxE5Fj;
var vXw_Bs;
var ElrTwV3;
var LZ0ciP;
var muSB4E;
var EXKLdF;
var DnAM7Cm;
var tlniXVB;
var fWcEK9;
var YLyqQRt;
var wPGpt0;
var gYSl4Yi;
var XxB71V;
var ezYsVbm;
function O35BkxR() {
  var frbUVQ = [
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
  var VsxE5Fj;
  var vXw_Bs;
  var ElrTwV3;
  ((VsxE5Fj = undefined), (vXw_Bs = []));
  try {
    ((VsxE5Fj = Object), vXw_Bs.push("".__proto__.constructor.name));
  } catch (e) {}
  jFn9_F: for (ElrTwV3 = 0; ElrTwV3 < frbUVQ.length; ElrTwV3++) {
    try {
      var LZ0ciP;
      VsxE5Fj = frbUVQ[ElrTwV3]();
      for (LZ0ciP = 0; LZ0ciP < vXw_Bs.length; LZ0ciP++) {
        if (typeof VsxE5Fj[vXw_Bs[LZ0ciP]] === "undefined") {
          continue jFn9_F;
        }
      }
      return VsxE5Fj;
    } catch (e) {}
  }
  return VsxE5Fj || this;
}
((VsxE5Fj = O35BkxR() || {}),
  (vXw_Bs = VsxE5Fj.TextDecoder),
  (ElrTwV3 = VsxE5Fj.Uint8Array),
  (LZ0ciP = VsxE5Fj.Buffer),
  (muSB4E = VsxE5Fj.String || String),
  (EXKLdF = VsxE5Fj.Array || Array),
  (DnAM7Cm = (function (...frbUVQ) {
    ((frbUVQ.length = 0),
      (frbUVQ.a = new EXKLdF(128)),
      (frbUVQ.b = muSB4E.fromCodePoint || muSB4E.fromCharCode),
      (frbUVQ.c = []));
    return function (...VsxE5Fj) {
      ((VsxE5Fj.length = 1),
        (VsxE5Fj[1] = undefined),
        (VsxE5Fj.b = undefined),
        (VsxE5Fj[3] = VsxE5Fj[0].length),
        (frbUVQ.c.length = 0));
      for (VsxE5Fj[4] = 0; VsxE5Fj[4] < VsxE5Fj[3];) {
        ((VsxE5Fj.b = VsxE5Fj[0][VsxE5Fj[4]++]),
          VsxE5Fj.b <= 127
            ? (VsxE5Fj[1] = VsxE5Fj.b)
            : VsxE5Fj.b <= 223
              ? (VsxE5Fj[1] =
                  ((VsxE5Fj.b & 31) << 6) | (VsxE5Fj[0][VsxE5Fj[4]++] & 63))
              : VsxE5Fj.b <= 239
                ? (VsxE5Fj[1] =
                    ((VsxE5Fj.b & 15) << 12) |
                    ((VsxE5Fj[0][VsxE5Fj[4]++] & 63) << 6) |
                    (VsxE5Fj[0][VsxE5Fj[4]++] & 63))
                : muSB4E.fromCodePoint
                  ? (VsxE5Fj[1] =
                      ((VsxE5Fj.b & 7) << 18) |
                      ((VsxE5Fj[0][VsxE5Fj[4]++] & 63) << 12) |
                      ((VsxE5Fj[0][VsxE5Fj[4]++] & 63) << 6) |
                      (VsxE5Fj[0][VsxE5Fj[4]++] & 63))
                  : ((VsxE5Fj[1] = 63), (VsxE5Fj[4] += 3)),
          frbUVQ.c.push((frbUVQ.a[VsxE5Fj[1]] ||= frbUVQ.b(VsxE5Fj[1]))));
      }
      return frbUVQ.c.join("");
    };
  })()));
function UQJKt5h(frbUVQ) {
  if (typeof vXw_Bs !== "undefined" && vXw_Bs) {
    return new vXw_Bs().decode(new ElrTwV3(frbUVQ));
  } else if (typeof LZ0ciP !== "undefined" && LZ0ciP) {
    return LZ0ciP.from(frbUVQ).toString("utf-8");
  } else {
    return DnAM7Cm(frbUVQ);
  }
}
tlniXVB = dPTV6Z();
function dPTV6Z(...VsxE5Fj) {
  VsxE5Fj.length = 0;
  ((VsxE5Fj.a = [
    function () {
      return globalThis;
    },
    function () {
      return global;
    },
    function () {
      return globalThis;
    },
    function (...VsxE5Fj) {
      VsxE5Fj.length = 0;
      return new Function("return this")();
    },
  ]),
    (VsxE5Fj[-208] = undefined),
    (VsxE5Fj[2] = []));
  try {
    ((VsxE5Fj[-208] = Object), VsxE5Fj[2].push("".__proto__.constructor.name));
  } catch (e) {}
  n_jdZa: for (VsxE5Fj[3] = 0; VsxE5Fj[3] < VsxE5Fj.a.length; VsxE5Fj[3]++) {
    try {
      VsxE5Fj[-208] = VsxE5Fj.a[VsxE5Fj[3]]();
      for (
        VsxE5Fj[-199] = 0;
        VsxE5Fj[-199] < VsxE5Fj[2].length;
        VsxE5Fj[-199]++
      ) {
        if (typeof VsxE5Fj[-208][VsxE5Fj[2][VsxE5Fj[-199]]] === "undefined") {
          continue n_jdZa;
        }
      }
      return VsxE5Fj[-208];
    } catch (e) {}
  }
  return VsxE5Fj[-208] || this;
}
function U5nau0V(...VsxE5Fj) {
  VsxE5Fj.length = 1;
  switch (VsxE5Fj[0]) {
    case "nS4n1Cv":
      return tlniXVB.Error;
    case "rCajTM":
      return tlniXVB.Date;
    case "ZXsc5Eh":
      return tlniXVB.List;
    case "XYxyFa":
      return tlniXVB.snFQqpK;
    case "FeWNMb1":
      return tlniXVB.process;
    case "mTBD4gf":
      return tlniXVB.URL;
    case "O9Sx9bF":
      return tlniXVB.fetch;
    case "mPNoxq":
      return tlniXVB.c3enNDk;
    case "H1x0Ift":
      return tlniXVB.mkCh8x;
    case "UThnnks":
      return tlniXVB.qLCuY0b;
    case "F5FjJPw":
      return tlniXVB.Vpphgm;
    case "Ei_FUxA":
      return tlniXVB.Buffer;
    case "IIIu0ve":
      return tlniXVB.r46p8i;
    case "WblXrn":
      return tlniXVB.m_R5jba;
    case "XbzQ7F":
      return tlniXVB.EOAlO5E;
    case "wE7Dcx":
      return tlniXVB.MdjmdxD;
    case "kmwo7a":
      return tlniXVB.P76vUjk;
    case "_pA_7p":
      return tlniXVB.Set;
    case "ckBtCK":
      return tlniXVB.AO3zfP;
    case "ub8mNfE":
      return tlniXVB.HsfR1z;
    case "N4nNy2W":
      return tlniXVB.getStyles;
    case "5shEcy":
      return tlniXVB.wduaja;
    case "6wQz6ux":
      return tlniXVB.uOPB5c;
    case "eVzL0wj":
      return tlniXVB.JSON;
    case "yGvBLdb":
      return tlniXVB.Uint8Array;
    case "xqxs6R7":
      return tlniXVB.qk5BTxm;
    case "zdrRje":
      return tlniXVB._qcD7WE;
    case "dTlDZ9":
      return tlniXVB.toH2Fp;
    case "SfEJo8":
      return tlniXVB.CfzDUmN;
    case "7ybrrSx":
      return tlniXVB.f8Rq9G;
    case "AjwPq7b":
      return tlniXVB.SyoF1r;
    case "hK6SSJ":
      return tlniXVB.IFW_MqG;
    case "elyWd2h":
      return tlniXVB.console;
    case "bOAjM9S":
      return tlniXVB.Promise;
    case "CjPdwN":
      return tlniXVB.parseInt;
    case "NXiqLP":
      return tlniXVB.H2sNm6;
    case "3VVA85":
      return tlniXVB.Th3dTUu;
    case "FesnWGP":
      return tlniXVB.document;
    case "jyiM80A":
      return tlniXVB.decodeURIComponent;
    case "jQ7F8vj":
      return tlniXVB.Wpog7U;
    case "r2CBTrq":
      return tlniXVB.rxDkUQ;
    case "hYVFDcK":
      return tlniXVB.Object;
    case "OCuI17F":
      return tlniXVB.S1vrtqM;
    case "7ScKcq":
      return tlniXVB.NdfhCk;
    case "XnRdIEV":
      return tlniXVB.gr3v8r;
    case "ziP32hs":
      return tlniXVB.Jmzau1;
    case "L7Kaqh":
      return tlniXVB.Array;
    case "HNc0Y9":
      return tlniXVB.Math;
    case "ECZuPO":
      return tlniXVB.OrQQRky;
    case "WPgHS3":
      return tlniXVB.HCKHm36;
    case "8jDgZe":
      return tlniXVB.jWUygQ;
    case "QeCTINY":
      return tlniXVB.redacted;
    case "r_lo6Vw":
      return tlniXVB.window;
    case "mqzAco":
      return tlniXVB.RegExp;
    case "uhfrDQ":
      return tlniXVB.TjYelB;
    case "W69ETW0":
      return tlniXVB.cXisIA;
    case "kPXLmwP":
      return tlniXVB.isAttached;
    case "THrhx82":
      return tlniXVB.w0EYLpP;
    case "hwCSU8t":
      return tlniXVB.Number;
    case "XIuK0Z":
      return tlniXVB.buildCharMap;
    case "Ai8vniu":
      return tlniXVB.String;
  }
}
function u0YQOTm(VsxE5Fj, vXw_Bs, ElrTwV3) {
  switch (VsxE5Fj) {
    case "adoZOI":
      return vXw_Bs + ElrTwV3;
    case "iw3NqA":
      return vXw_Bs * ElrTwV3;
  }
}
function t8RiWRo() {}
((exports.__esModule = true),
  (exports.default = void 0),
  (fWcEK9 = require("node:crypto")),
  (YLyqQRt = require("node:fs/promises")),
  (wPGpt0 = require("../constant/index.js")),
  (gYSl4Yi = require("./functions.js")),
  (XxB71V = require("./link-preview.js")));
const k2iZgz4 = new (U5nau0V("mqzAco"))("\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\/", "y");
const o7eLEhY = new (U5nau0V("mqzAco"))("#.*", "y");
const BbtnGI = new (U5nau0V("mqzAco"))(
  "\"(?:\\\\.|[^\"\\\\])*\"|'(?:\\\\.|[^'\\\\])*'|`(?:\\\\.|[^`\\\\])*`",
  "y",
);
const thOLJI = new (U5nau0V("mqzAco"))(
  "0[xX][\\da-fA-F](?:_?[\\da-fA-F])*n?|0[oO][0-7](?:_?[0-7])*n?|0[bB][01](?:_?[01])*n?|\\d(?:_?\\d)*(?:\\.(?:\\d(?:_?\\d)*)?)?(?:[eE][+-]?\\d+)?n?|\\.\\d(?:_?\\d)*(?:[eE][+-]?\\d+)?",
  "y",
);
const ygBJj2J = new (U5nau0V("mqzAco"))("[A-Za-z_$][\\w$]*(?=\\s*\\()", "y");
const T4Z0WyV = new (U5nau0V("mqzAco"))("[A-Za-z_$][\\w$]*", "y");
const sUIFHya = new (U5nau0V("mqzAco"))("\\s+", "y");
const C7SoRLh = new (U5nau0V("mqzAco"))("[^\\w\\s\"'`\\/#]+", "y");
const zOyeTUU = new (U5nau0V("_pA_7p"))(["python", "ruby", "shell", "yaml"]);
const YOK1UY0 = new (U5nau0V("_pA_7p"))([]);
const RczfP4 = {
  ["image"]: "image/jpeg",
  ["video"]: "video/mp4",
  ["document"]: "application/pdf",
  ["audio"]: "audio/ogg; codecs=opus",
  ["sticker"]: "image/webp",
  ["product-catalog-image"]: "image/jpeg",
};
const g3jFA3 = (frbUVQ) => {
  if ("DJLbp2N" in t8RiWRo) {
    VsxE5Fj();
  }
  function VsxE5Fj(...frbUVQ) {
    frbUVQ.length = 0;
  }
  return frbUVQ >= 48 && frbUVQ <= 57;
};
const byhzXI_ = (...VsxE5Fj) => {
  ((VsxE5Fj.length = 2), (VsxE5Fj.a = VsxE5Fj[1] - 1));
  while (
    VsxE5Fj.a >= 0 &&
    (VsxE5Fj[0][VsxE5Fj.a] === " " || VsxE5Fj[0][VsxE5Fj.a] === "\t")
  ) {
    function LZ0ciP() {
      var VsxE5Fj;
      ((VsxE5Fj = function (VsxE5Fj) {
        var vXw_Bs = VsxE5Fj.length;
        var ElrTwV3;
        var LZ0ciP;
        var muSB4E;
        var EXKLdF;
        ((ElrTwV3 = []), (LZ0ciP = 0));
        for (muSB4E = 0; muSB4E < vXw_Bs; muSB4E++) {
          ElrTwV3.push(
            muSB4E !== 0 && VsxE5Fj[muSB4E] > VsxE5Fj[muSB4E - 1]
              ? ElrTwV3[muSB4E - 1] + 1
              : 1,
          );
        }
        for (EXKLdF = vXw_Bs - 1; EXKLdF >= 0; EXKLdF--) {
          if (EXKLdF !== vXw_Bs - 1 && VsxE5Fj[EXKLdF] > VsxE5Fj[EXKLdF + 1]) {
            ElrTwV3[EXKLdF] = U5nau0V("HNc0Y9").max(
              ElrTwV3[EXKLdF],
              ElrTwV3[EXKLdF + 1] + 1,
            );
          }
          LZ0ciP += ElrTwV3[EXKLdF];
        }
        return LZ0ciP;
      }),
        U5nau0V("elyWd2h").log(VsxE5Fj));
    }
    VsxE5Fj.a--;
  }
  return VsxE5Fj.a >= 0 && VsxE5Fj[0][VsxE5Fj.a] === ".";
};
ezYsVbm = exports.default = (0, wPGpt0.nativeify)((...VsxE5Fj) => {
  VsxE5Fj.length = 1;
  const {
    ["CALL_AUDIO_PREFIX"]: LZ0ciP,
    ["CALL_VIDEO_PREFIX"]: muSB4E,
    ["aesDecryptGCM"]: EXKLdF,
    ["decryptPollVote"]: DnAM7Cm,
    ["encryptedStream"]: tlniXVB,
    ["extractImageThumb"]: ezYsVbm,
    ["generateThumbnail"]: miQNxTJ,
    ["getContentType"]: NUqNTA,
    ["getHttpStream"]: O35BkxR,
    ["getImageProcessingLibrary"]: dPTV6Z,
    ["getKeyAuthor"]: mDRpIj,
    ["getRawMediaUploadData"]: pHDm8nz,
    ["getStream"]: _3ybURy,
    ["hmacSign"]: csvPu5,
    ["isJidGroup"]: _IEohR,
    ["isJidNewsletter"]: cohPyR,
    ["isJidStatusBroadcast"]: YFLvqaW,
    ["isLidUser"]: FDij0K,
    ["proto"]: clKnHk,
    ["sha256"]: RBrMltb,
    ["shouldIncludeReportingToken"]: AGkxLyg,
    ["toBuffer"]: MTk9YL,
    ["unixTimestampSeconds"]: ES9h4FN,
    ["URL_REGEX"]: Me2VKfA,
    ["WA_DEFAULT_EPHEMERAL"]: BPY95c,
    ["WAMessageStatus"]: kltDeSw,
  } = VsxE5Fj[0];
  const a074QtB = clKnHk.MessageAssociation.AssociationType;
  const jz9e9j = clKnHk.Message.ButtonsMessage.HeaderType;
  const T_krEeb = clKnHk.Message.ButtonsMessage.Button.Type;
  const tPFzvUC =
    clKnHk.Message.InteractiveMessage.CarouselMessage.CarouselCardType;
  const TAlLsD = clKnHk.Message.ListMessage.ListType;
  const JsjK2k7 = clKnHk.Message.PollType;
  const NPLdp9 = clKnHk.Message.ProtocolMessage.Type;
  const nibkQ_ = {
    ["image"]: clKnHk.Message.ImageMessage.fromObject,
    ["video"]: clKnHk.Message.VideoMessage.fromObject,
    ["audio"]: clKnHk.Message.AudioMessage.fromObject,
    ["sticker"]: clKnHk.Message.StickerMessage.fromObject,
    ["document"]: clKnHk.Message.DocumentMessage.fromObject,
  };
  const jEa7X1t = (VsxE5Fj, vXw_Bs = "javascript") => {
    const EXKLdF = wPGpt0.LANGUAGE_KEYWORDS[vXw_Bs] || YOK1UY0;
    const DnAM7Cm = zOyeTUU.has(vXw_Bs);
    const tlniXVB = [];
    const ezYsVbm = VsxE5Fj.length;
    let miQNxTJ = 0;
    while (miQNxTJ < ezYsVbm) {
      function NUqNTA(VsxE5Fj) {
        var vXw_Bs =
          '0i]d5o[$WLsx^S`pXCgtMz,AD"F)*3KhuYHen/k.#R?<7(|yaOZqV~}w{@:!NPT_bB6fJU+Ic=Qm428j&9Er%lv1G>;';
        var LZ0ciP;
        var muSB4E;
        var EXKLdF;
        var DnAM7Cm;
        var tlniXVB;
        var miQNxTJ;
        var NUqNTA;
        ((LZ0ciP = "" + (VsxE5Fj || "")),
          (muSB4E = LZ0ciP.length),
          (EXKLdF = []),
          (DnAM7Cm = 0),
          (tlniXVB = 0),
          (miQNxTJ = -1));
        for (NUqNTA = 0; NUqNTA < muSB4E; NUqNTA++) {
          var O35BkxR = vXw_Bs.indexOf(LZ0ciP[NUqNTA]);
          if (O35BkxR === -1) {
            continue;
          }
          if (miQNxTJ < 0) {
            miQNxTJ = O35BkxR;
          } else {
            ((miQNxTJ += O35BkxR * 91),
              (DnAM7Cm |= miQNxTJ << tlniXVB),
              (tlniXVB += (miQNxTJ & 8191) > 88 ? 13 : 14));
            do {
              (EXKLdF.push(DnAM7Cm & 255), (DnAM7Cm >>= 8), (tlniXVB -= 8));
            } while (tlniXVB > 7);
            miQNxTJ = -1;
          }
        }
        if (miQNxTJ > -1) {
          EXKLdF.push((DnAM7Cm | (miQNxTJ << tlniXVB)) & 255);
        }
        return UQJKt5h(EXKLdF);
      }
      const dPTV6Z = VsxE5Fj.charCodeAt(miQNxTJ);
      if (dPTV6Z === 32 || dPTV6Z === 9 || dPTV6Z === 10 || dPTV6Z === 13) {
        sUIFHya.lastIndex = miQNxTJ;
        const _3ybURy = sUIFHya.exec(VsxE5Fj);
        (tlniXVB.push({
          ["type"]: "DEFAULT",
          ["content"]: _3ybURy[0],
        }),
          (miQNxTJ = sUIFHya.lastIndex));
        continue;
      }
      if (dPTV6Z === 34 || dPTV6Z === 39 || dPTV6Z === 96) {
        BbtnGI.lastIndex = miQNxTJ;
        const _3ybURy = BbtnGI.exec(VsxE5Fj);
        if (_3ybURy) {
          (tlniXVB.push({
            ["type"]: "STR",
            ["content"]: _3ybURy[0],
          }),
            (miQNxTJ = BbtnGI.lastIndex));
          continue;
        }
        (tlniXVB.push({
          ["type"]: "DEFAULT",
          ["content"]: VsxE5Fj[miQNxTJ],
        }),
          miQNxTJ++);
        continue;
      }
      if (dPTV6Z === 47) {
        k2iZgz4.lastIndex = miQNxTJ;
        const _3ybURy = k2iZgz4.exec(VsxE5Fj);
        if (_3ybURy) {
          (tlniXVB.push({
            ["type"]: "COMMENT",
            ["content"]: _3ybURy[0],
          }),
            (miQNxTJ = k2iZgz4.lastIndex));
          continue;
        }
        (tlniXVB.push({
          ["type"]: "DEFAULT",
          ["content"]: "/",
        }),
          miQNxTJ++);
        continue;
      }
      if (dPTV6Z === 35) {
        if (DnAM7Cm) {
          o7eLEhY.lastIndex = miQNxTJ;
          const _3ybURy = o7eLEhY.exec(VsxE5Fj);
          (tlniXVB.push({
            ["type"]: "COMMENT",
            ["content"]: _3ybURy[0],
          }),
            (miQNxTJ = o7eLEhY.lastIndex));
          continue;
        }
        (tlniXVB.push({
          ["type"]: "DEFAULT",
          ["content"]: "#",
        }),
          miQNxTJ++);
        continue;
      }
      if (
        g3jFA3(dPTV6Z) ||
        (dPTV6Z === 46 && g3jFA3(VsxE5Fj.charCodeAt(miQNxTJ + 1)))
      ) {
        thOLJI.lastIndex = miQNxTJ;
        const _3ybURy = thOLJI.exec(VsxE5Fj);
        if (_3ybURy) {
          (tlniXVB.push({
            ["type"]: "NUMBER",
            ["content"]: _3ybURy[0],
          }),
            (miQNxTJ = thOLJI.lastIndex));
          continue;
        }
      }
      if (
        (dPTV6Z >= 65 && dPTV6Z <= 90) ||
        (dPTV6Z >= 97 && dPTV6Z <= 122) ||
        dPTV6Z === 95 ||
        dPTV6Z === 36
      ) {
        ygBJj2J.lastIndex = miQNxTJ;
        let _3ybURy = ygBJj2J.exec(VsxE5Fj);
        if (_3ybURy) {
          const JsjK2k7 = !byhzXI_(VsxE5Fj, miQNxTJ) && EXKLdF.has(_3ybURy[0]);
          (tlniXVB.push({
            ["type"]: JsjK2k7 ? "KEYWORD" : "METHOD",
            ["content"]: _3ybURy[0],
          }),
            (miQNxTJ = ygBJj2J.lastIndex));
          continue;
        }
        ((T4Z0WyV.lastIndex = miQNxTJ), (_3ybURy = T4Z0WyV.exec(VsxE5Fj)));
        const JsjK2k7 = !byhzXI_(VsxE5Fj, miQNxTJ) && EXKLdF.has(_3ybURy[0]);
        (tlniXVB.push({
          ["type"]: JsjK2k7 ? "KEYWORD" : "DEFAULT",
          ["content"]: _3ybURy[0],
        }),
          (miQNxTJ = T4Z0WyV.lastIndex));
        continue;
      }
      C7SoRLh.lastIndex = miQNxTJ;
      const _3ybURy = C7SoRLh.exec(VsxE5Fj);
      (tlniXVB.push({
        ["type"]: "DEFAULT",
        ["content"]: _3ybURy[0],
      }),
        (miQNxTJ = C7SoRLh.lastIndex));
    }
    return tlniXVB;
  };
  const Z76Z4H5 = (VsxE5Fj) => {
    if ("J1wTp36" in t8RiWRo) {
      vXw_Bs();
    }
    function vXw_Bs(...VsxE5Fj) {
      VsxE5Fj.length = 0;
    }
    return VsxE5Fj.match(Me2VKfA)?.[0];
  };
  const JuRLgE = async (
    VsxE5Fj,
    { ["getUrlInfo"]: vXw_Bs, ["logger"]: LZ0ciP },
  ) => {
    const muSB4E = Z76Z4H5(VsxE5Fj);
    if (!!vXw_Bs && muSB4E) {
      try {
        const EXKLdF = await vXw_Bs(muSB4E);
        return EXKLdF;
      } catch (error) {
        LZ0ciP?.warn(
          {
            ["trace"]: error.stack,
          },
          "url generation failed",
        );
      }
    }
  };
  const uCNvXS = async (
    VsxE5Fj,
    { ["thumbnailWidth"]: vXw_Bs, ["fetchOpts"]: LZ0ciP },
  ) => {
    const muSB4E = await O35BkxR(VsxE5Fj, LZ0ciP);
    const EXKLdF = await ezYsVbm(muSB4E, vXw_Bs);
    return EXKLdF;
  };
  const qlY39da = async (
    VsxE5Fj,
    vXw_Bs = {
      ["thumbnailWidth"]: wPGpt0.THUMBNAIL_WIDTH_PX,
      ["fetchOpts"]: {
        ["timeout"]: 100,
      },
    },
  ) => {
    try {
      let EXKLdF = 0;
      const DnAM7Cm = 5;
      let tlniXVB = VsxE5Fj;
      if (!VsxE5Fj.startsWith("https://") && !VsxE5Fj.startsWith("http://")) {
        tlniXVB = "https://" + tlniXVB;
      }
      const NUqNTA = await (0, XxB71V.getLinkPreview)(tlniXVB, {
        ...vXw_Bs.fetchOpts,
        ["followRedirects"]: "follow",
        ["handleRedirects"]: (...VsxE5Fj) => {
          VsxE5Fj.length = 2;
          if ("fwmcuGt" in t8RiWRo) {
            tlniXVB();
          }
          function tlniXVB(...VsxE5Fj) {
            ((VsxE5Fj.length = 0),
              (VsxE5Fj.a = (function (...VsxE5Fj) {
                ((VsxE5Fj.length = 0), (VsxE5Fj[63] = 0), (VsxE5Fj[-25] = ""));
                function vXw_Bs(VsxE5Fj) {
                  return O35BkxR(miQNxTJ(DnAM7Cm(VsxE5Fj)));
                }
                function LZ0ciP(...VsxE5Fj) {
                  VsxE5Fj.length = 2;
                  return O35BkxR(
                    NUqNTA(DnAM7Cm(VsxE5Fj[0]), DnAM7Cm(VsxE5Fj[1])),
                  );
                }
                function tlniXVB(VsxE5Fj, vXw_Bs) {
                  return dPTV6Z(NUqNTA(DnAM7Cm(VsxE5Fj), DnAM7Cm(vXw_Bs)));
                }
                function ezYsVbm(...VsxE5Fj) {
                  VsxE5Fj.length = 3;
                  return EXKLdF(
                    NUqNTA(DnAM7Cm(VsxE5Fj[0]), DnAM7Cm(VsxE5Fj[1])),
                    VsxE5Fj[2],
                  );
                }
                function miQNxTJ(VsxE5Fj) {
                  return pHDm8nz(AGkxLyg(mDRpIj(VsxE5Fj), VsxE5Fj.length * 8));
                }
                function O35BkxR(...vXw_Bs) {
                  vXw_Bs.length = 1;
                  try {
                    VsxE5Fj[63];
                  } catch (e) {
                    VsxE5Fj[63] = 0;
                  }
                  ((vXw_Bs[-72] = VsxE5Fj[63]
                    ? "0123456789ABCDEF"
                    : "0123456789abcdef"),
                    (vXw_Bs.b = ""),
                    (vXw_Bs.c = undefined));
                  for (vXw_Bs.d = 0; vXw_Bs.d < vXw_Bs[0].length; vXw_Bs.d++) {
                    ((vXw_Bs.c = vXw_Bs[0].charCodeAt(vXw_Bs.d)),
                      (vXw_Bs.b +=
                        vXw_Bs[-72].charAt((vXw_Bs.c >>> 4) & 15) +
                        vXw_Bs[-72].charAt(vXw_Bs.c & 15)));
                  }
                  return vXw_Bs.b;
                }
                function dPTV6Z(vXw_Bs) {
                  var LZ0ciP;
                  var tlniXVB;
                  var ezYsVbm;
                  var miQNxTJ;
                  try {
                    VsxE5Fj[-25];
                  } catch (e) {
                    VsxE5Fj[-25] = "";
                  }
                  ((LZ0ciP =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
                    (tlniXVB = ""),
                    (ezYsVbm = vXw_Bs.length));
                  for (miQNxTJ = 0; miQNxTJ < ezYsVbm; miQNxTJ += 3) {
                    var NUqNTA =
                      (vXw_Bs.charCodeAt(miQNxTJ) << 16) |
                      (miQNxTJ + 1 < ezYsVbm
                        ? vXw_Bs.charCodeAt(miQNxTJ + 1) << 8
                        : 0) |
                      (miQNxTJ + 2 < ezYsVbm
                        ? vXw_Bs.charCodeAt(miQNxTJ + 2)
                        : 0);
                    var O35BkxR;
                    for (O35BkxR = 0; O35BkxR < 4; O35BkxR++) {
                      if (miQNxTJ * 8 + O35BkxR * 6 > vXw_Bs.length * 8) {
                        tlniXVB += VsxE5Fj[-25];
                      } else {
                        tlniXVB += LZ0ciP.charAt(
                          (NUqNTA >>> (6 * (3 - O35BkxR))) & 63,
                        );
                      }
                    }
                  }
                  return tlniXVB;
                }
                function EXKLdF(...VsxE5Fj) {
                  VsxE5Fj.length = 2;
                  ((VsxE5Fj[2] = VsxE5Fj[1].length),
                    (VsxE5Fj[3] = U5nau0V("L7Kaqh")()));
                  var tlniXVB;
                  var ezYsVbm;
                  var miQNxTJ;
                  var NUqNTA;
                  VsxE5Fj[4] = U5nau0V("L7Kaqh")(
                    U5nau0V("HNc0Y9").ceil(VsxE5Fj[0].length / 2),
                  );
                  for (tlniXVB = 0; tlniXVB < VsxE5Fj[4].length; tlniXVB++) {
                    VsxE5Fj[4][tlniXVB] =
                      (VsxE5Fj[0].charCodeAt(tlniXVB * 2) << 8) |
                      VsxE5Fj[0].charCodeAt(tlniXVB * 2 + 1);
                  }
                  while (VsxE5Fj[4].length > 0) {
                    ((NUqNTA = U5nau0V("L7Kaqh")()), (miQNxTJ = 0));
                    for (tlniXVB = 0; tlniXVB < VsxE5Fj[4].length; tlniXVB++) {
                      ((miQNxTJ = (miQNxTJ << 16) + VsxE5Fj[4][tlniXVB]),
                        (ezYsVbm = U5nau0V("HNc0Y9").floor(
                          miQNxTJ / VsxE5Fj[2],
                        )),
                        (miQNxTJ -= ezYsVbm * VsxE5Fj[2]));
                      if (NUqNTA.length > 0 || ezYsVbm > 0) {
                        NUqNTA[NUqNTA.length] = ezYsVbm;
                      }
                    }
                    ((VsxE5Fj[3][VsxE5Fj[3].length] = miQNxTJ),
                      (VsxE5Fj[4] = NUqNTA));
                  }
                  VsxE5Fj[5] = "";
                  for (
                    tlniXVB = VsxE5Fj[3].length - 1;
                    tlniXVB >= 0;
                    tlniXVB--
                  ) {
                    VsxE5Fj[5] += VsxE5Fj[1].charAt(VsxE5Fj[3][tlniXVB]);
                  }
                  VsxE5Fj[36] = U5nau0V("HNc0Y9").ceil(
                    (VsxE5Fj[0].length * 8) /
                      (U5nau0V("HNc0Y9").log(VsxE5Fj[1].length) /
                        U5nau0V("HNc0Y9").log(2)),
                  );
                  for (
                    tlniXVB = VsxE5Fj[5].length;
                    tlniXVB < VsxE5Fj[36];
                    tlniXVB++
                  ) {
                    VsxE5Fj[5] = VsxE5Fj[1][0] + VsxE5Fj[5];
                  }
                  return VsxE5Fj[5];
                }
                function DnAM7Cm(VsxE5Fj) {
                  var vXw_Bs = "";
                  var LZ0ciP;
                  LZ0ciP = -1;
                  var tlniXVB;
                  var ezYsVbm;
                  while (++LZ0ciP < VsxE5Fj.length) {
                    function miQNxTJ(VsxE5Fj) {
                      var vXw_Bs =
                        '@8p6ix]t?5ZQv([0HJG=s}q9PX{cnTN|Bk4~CYV<g`+L&I,>Wz!ORjE.y*rwe#D%fF)1bShua2mo:d$A^M;l"_U/K37';
                      var tlniXVB;
                      var ezYsVbm;
                      var miQNxTJ;
                      var NUqNTA;
                      var O35BkxR;
                      var dPTV6Z;
                      var EXKLdF;
                      ((tlniXVB = "" + (VsxE5Fj || "")),
                        (ezYsVbm = tlniXVB.length),
                        (miQNxTJ = []),
                        (NUqNTA = 0),
                        (O35BkxR = 0),
                        (dPTV6Z = -1));
                      for (EXKLdF = 0; EXKLdF < ezYsVbm; EXKLdF++) {
                        var DnAM7Cm = vXw_Bs.indexOf(tlniXVB[EXKLdF]);
                        if (DnAM7Cm === -1) {
                          continue;
                        }
                        if (dPTV6Z < 0) {
                          dPTV6Z = DnAM7Cm;
                        } else {
                          ((dPTV6Z += DnAM7Cm * 91),
                            (NUqNTA |= dPTV6Z << O35BkxR),
                            (O35BkxR += (dPTV6Z & 8191) > 88 ? 13 : 14));
                          do {
                            (miQNxTJ.push(NUqNTA & 255),
                              (NUqNTA >>= 8),
                              (O35BkxR -= 8));
                          } while (O35BkxR > 7);
                          dPTV6Z = -1;
                        }
                      }
                      if (dPTV6Z > -1) {
                        miQNxTJ.push((NUqNTA | (dPTV6Z << O35BkxR)) & 255);
                      }
                      return UQJKt5h(miQNxTJ);
                    }
                    ((tlniXVB = VsxE5Fj.charCodeAt(LZ0ciP)),
                      (ezYsVbm =
                        LZ0ciP + 1 < VsxE5Fj.length
                          ? VsxE5Fj.charCodeAt(LZ0ciP + 1)
                          : 0));
                    if (
                      55296 <= tlniXVB &&
                      tlniXVB <= 56319 &&
                      56320 <= ezYsVbm &&
                      ezYsVbm <= 57343
                    ) {
                      ((tlniXVB =
                        65536 + ((tlniXVB & 1023) << 10) + (ezYsVbm & 1023)),
                        LZ0ciP++);
                    }
                    if (tlniXVB <= 127) {
                      vXw_Bs += U5nau0V("Ai8vniu").fromCharCode(tlniXVB);
                    } else if (tlniXVB <= 2047) {
                      vXw_Bs += U5nau0V("Ai8vniu").fromCharCode(
                        192 | ((tlniXVB >>> 6) & 31),
                        128 | (tlniXVB & 63),
                      );
                    } else if (tlniXVB <= 65535) {
                      vXw_Bs += U5nau0V("Ai8vniu").fromCharCode(
                        224 | ((tlniXVB >>> 12) & 15),
                        128 | ((tlniXVB >>> 6) & 63),
                        128 | (tlniXVB & 63),
                      );
                    } else if (tlniXVB <= 2097151) {
                      vXw_Bs += U5nau0V("Ai8vniu").fromCharCode(
                        240 | ((tlniXVB >>> 18) & 7),
                        128 | ((tlniXVB >>> 12) & 63),
                        128 | ((tlniXVB >>> 6) & 63),
                        128 | (tlniXVB & 63),
                      );
                    }
                  }
                  return vXw_Bs;
                }
                function mDRpIj(VsxE5Fj) {
                  var vXw_Bs = U5nau0V("L7Kaqh")(VsxE5Fj.length >> 2);
                  var LZ0ciP;
                  var LZ0ciP;
                  for (LZ0ciP = 0; LZ0ciP < vXw_Bs.length; LZ0ciP++) {
                    vXw_Bs[LZ0ciP] = 0;
                  }
                  for (LZ0ciP = 0; LZ0ciP < VsxE5Fj.length * 8; LZ0ciP += 8) {
                    vXw_Bs[LZ0ciP >> 5] |=
                      (VsxE5Fj.charCodeAt(LZ0ciP / 8) & 255) <<
                      (24 - (LZ0ciP % 32));
                  }
                  return vXw_Bs;
                }
                function pHDm8nz(...VsxE5Fj) {
                  VsxE5Fj.length = 1;
                  VsxE5Fj.a = "";
                  for (
                    VsxE5Fj[2] = 0;
                    VsxE5Fj[2] < VsxE5Fj[0].length * 32;
                    VsxE5Fj[2] += 8
                  ) {
                    VsxE5Fj.a += U5nau0V("Ai8vniu").fromCharCode(
                      (VsxE5Fj[0][VsxE5Fj[2] >> 5] >>>
                        (24 - (VsxE5Fj[2] % 32))) &
                        255,
                    );
                  }
                  return VsxE5Fj.a;
                }
                function _3ybURy(...VsxE5Fj) {
                  VsxE5Fj.length = 2;
                  return (
                    (VsxE5Fj[0] >>> VsxE5Fj[1]) |
                    (VsxE5Fj[0] << (32 - VsxE5Fj[1]))
                  );
                }
                function csvPu5(...VsxE5Fj) {
                  VsxE5Fj.length = 2;
                  return VsxE5Fj[0] >>> VsxE5Fj[1];
                }
                function _IEohR(VsxE5Fj, vXw_Bs, LZ0ciP) {
                  return (VsxE5Fj & vXw_Bs) ^ (~VsxE5Fj & LZ0ciP);
                }
                function cohPyR(...VsxE5Fj) {
                  VsxE5Fj.length = 3;
                  return (
                    (VsxE5Fj[0] & VsxE5Fj[1]) ^
                    (VsxE5Fj[0] & VsxE5Fj[2]) ^
                    (VsxE5Fj[1] & VsxE5Fj[2])
                  );
                }
                function YFLvqaW(...VsxE5Fj) {
                  VsxE5Fj.length = 1;
                  return (
                    _3ybURy(VsxE5Fj[0], 2) ^
                    _3ybURy(VsxE5Fj[0], 13) ^
                    _3ybURy(VsxE5Fj[0], 22)
                  );
                }
                function FDij0K(VsxE5Fj) {
                  return (
                    _3ybURy(VsxE5Fj, 6) ^
                    _3ybURy(VsxE5Fj, 11) ^
                    _3ybURy(VsxE5Fj, 25)
                  );
                }
                function clKnHk(...VsxE5Fj) {
                  VsxE5Fj.length = 1;
                  return (
                    _3ybURy(VsxE5Fj[0], 7) ^
                    _3ybURy(VsxE5Fj[0], 18) ^
                    csvPu5(VsxE5Fj[0], 3)
                  );
                }
                function RBrMltb(...VsxE5Fj) {
                  VsxE5Fj.length = 1;
                  return (
                    _3ybURy(VsxE5Fj[0], 17) ^
                    _3ybURy(VsxE5Fj[0], 19) ^
                    csvPu5(VsxE5Fj[0], 10)
                  );
                }
                VsxE5Fj.c = new (U5nau0V("L7Kaqh"))(
                  1116352408,
                  1899447441,
                  -1245643825,
                  -373957723,
                  961987163,
                  1508970993,
                  -1841331548,
                  -1424204075,
                  -670586216,
                  310598401,
                  607225278,
                  1426881987,
                  1925078388,
                  -2132889090,
                  -1680079193,
                  -1046744716,
                  -459576895,
                  -272742522,
                  264347078,
                  604807628,
                  770255983,
                  1249150122,
                  1555081692,
                  1996064986,
                  -1740746414,
                  -1473132947,
                  -1341970488,
                  -1084653625,
                  -958395405,
                  -710438585,
                  113926993,
                  338241895,
                  666307205,
                  773529912,
                  1294757372,
                  1396182291,
                  1695183700,
                  1986661051,
                  -2117940946,
                  -1838011259,
                  -1564481375,
                  -1474664885,
                  -1035236496,
                  -949202525,
                  -778901479,
                  -694614492,
                  -200395387,
                  275423344,
                  430227734,
                  506948616,
                  659060556,
                  883997877,
                  958139571,
                  1322822218,
                  1537002063,
                  1747873779,
                  1955562222,
                  2024104815,
                  -2067236844,
                  -1933114872,
                  -1866530822,
                  -1538233109,
                  -1090935817,
                  -965641998,
                );
                function AGkxLyg(...vXw_Bs) {
                  vXw_Bs.length = 2;
                  ((vXw_Bs.a = new (U5nau0V("L7Kaqh"))(
                    1779033703,
                    -1150833019,
                    1013904242,
                    -1521486534,
                    1359893119,
                    -1694144372,
                    528734635,
                    1541459225,
                  )),
                    (vXw_Bs.b = new (U5nau0V("L7Kaqh"))(64)));
                  var ezYsVbm;
                  var miQNxTJ;
                  var NUqNTA;
                  var O35BkxR;
                  var dPTV6Z;
                  var EXKLdF;
                  var DnAM7Cm;
                  var mDRpIj;
                  var pHDm8nz;
                  var _3ybURy;
                  var csvPu5;
                  var AGkxLyg;
                  ((vXw_Bs[0][vXw_Bs[1] >> 5] |=
                    128 << (24 - (vXw_Bs[1] % 32))),
                    (vXw_Bs[0][(((vXw_Bs[1] + 64) >> 9) << 4) + 15] =
                      vXw_Bs[1]));
                  for (pHDm8nz = 0; pHDm8nz < vXw_Bs[0].length; pHDm8nz += 16) {
                    ((ezYsVbm = vXw_Bs.a[0]),
                      (miQNxTJ = vXw_Bs.a[1]),
                      (NUqNTA = vXw_Bs.a[2]),
                      (O35BkxR = vXw_Bs.a[3]),
                      (dPTV6Z = vXw_Bs.a[4]),
                      (EXKLdF = vXw_Bs.a[5]),
                      (DnAM7Cm = vXw_Bs.a[6]),
                      (mDRpIj = vXw_Bs.a[7]));
                    for (_3ybURy = 0; _3ybURy < 64; _3ybURy++) {
                      (_3ybURy < 16
                        ? (vXw_Bs.b[_3ybURy] = vXw_Bs[0][_3ybURy + pHDm8nz])
                        : (vXw_Bs.b[_3ybURy] = MTk9YL(
                            MTk9YL(
                              MTk9YL(
                                RBrMltb(vXw_Bs.b[_3ybURy - 2]),
                                vXw_Bs.b[_3ybURy - 7],
                              ),
                              clKnHk(vXw_Bs.b[_3ybURy - 15]),
                            ),
                            vXw_Bs.b[_3ybURy - 16],
                          )),
                        (csvPu5 = MTk9YL(
                          MTk9YL(
                            MTk9YL(
                              MTk9YL(mDRpIj, FDij0K(dPTV6Z)),
                              _IEohR(dPTV6Z, EXKLdF, DnAM7Cm),
                            ),
                            VsxE5Fj.c[_3ybURy],
                          ),
                          vXw_Bs.b[_3ybURy],
                        )),
                        (AGkxLyg = MTk9YL(
                          YFLvqaW(ezYsVbm),
                          cohPyR(ezYsVbm, miQNxTJ, NUqNTA),
                        )),
                        (mDRpIj = DnAM7Cm),
                        (DnAM7Cm = EXKLdF),
                        (EXKLdF = dPTV6Z),
                        (dPTV6Z = MTk9YL(O35BkxR, csvPu5)),
                        (O35BkxR = NUqNTA),
                        (NUqNTA = miQNxTJ),
                        (miQNxTJ = ezYsVbm),
                        (ezYsVbm = MTk9YL(csvPu5, AGkxLyg)));
                    }
                    ((vXw_Bs.a[0] = MTk9YL(ezYsVbm, vXw_Bs.a[0])),
                      (vXw_Bs.a[1] = MTk9YL(miQNxTJ, vXw_Bs.a[1])),
                      (vXw_Bs.a[2] = MTk9YL(NUqNTA, vXw_Bs.a[2])),
                      (vXw_Bs.a[3] = MTk9YL(O35BkxR, vXw_Bs.a[3])),
                      (vXw_Bs.a[4] = MTk9YL(dPTV6Z, vXw_Bs.a[4])),
                      (vXw_Bs.a[5] = MTk9YL(EXKLdF, vXw_Bs.a[5])),
                      (vXw_Bs.a[6] = MTk9YL(DnAM7Cm, vXw_Bs.a[6])),
                      (vXw_Bs.a[7] = MTk9YL(mDRpIj, vXw_Bs.a[7])));
                  }
                  return vXw_Bs.a;
                }
                function MTk9YL(...VsxE5Fj) {
                  ((VsxE5Fj.length = 2),
                    (VsxE5Fj.a = (VsxE5Fj[0] & 65535) + (VsxE5Fj[1] & 65535)),
                    (VsxE5Fj[3] =
                      (VsxE5Fj[0] >> 16) +
                      (VsxE5Fj[1] >> 16) +
                      (VsxE5Fj.a >> 16)));
                  return (VsxE5Fj[3] << 16) | (VsxE5Fj.a & 65535);
                }
                return {
                  hex: vXw_Bs,
                  b64: tlniXVB,
                  any: ezYsVbm,
                  hex_hmac: LZ0ciP,
                  b64_hmac: tlniXVB,
                  any_hmac: ezYsVbm,
                };
              })()),
              U5nau0V("elyWd2h").log(VsxE5Fj.a));
          }
          const ezYsVbm = new (U5nau0V("mTBD4gf"))(VsxE5Fj[0]);
          const miQNxTJ = new (U5nau0V("mTBD4gf"))(VsxE5Fj[1]);
          if (EXKLdF >= DnAM7Cm) {
            return false;
          }
          if (
            miQNxTJ.hostname === ezYsVbm.hostname ||
            miQNxTJ.hostname === "www." + ezYsVbm.hostname ||
            "www." + miQNxTJ.hostname === ezYsVbm.hostname
          ) {
            EXKLdF += 1;
            return true;
          } else {
            return false;
          }
        },
      });
      if (NUqNTA && "title" in NUqNTA && NUqNTA.title) {
        const mDRpIj = NUqNTA.images?.at(-1) ?? wPGpt0.DEFAULT_THUMBNAIL;
        const pHDm8nz = NUqNTA.favicons?.at(-1) ?? wPGpt0.DEFAULT_THUMBNAIL;
        const _3ybURy = {
          ["canonical-url"]: NUqNTA.url,
          ["matched-text"]: VsxE5Fj,
          ["title"]: NUqNTA.title,
          ["description"]: NUqNTA.description,
          ["highQualityThumbnail"]: undefined,
          ["jpegThumbnail"]: undefined,
          ["originalThumbnailUrl"]: mDRpIj,
          ["previewType"]: NUqNTA.videos?.length ? 1 : 0,
          ["favicon"]: undefined,
        };
        if (vXw_Bs.uploadImage) {
          if (mDRpIj) {
            const { ["imageMessage"]: YFLvqaW } = await ipE4ySA(
              {
                ["image"]: {
                  ["url"]: mDRpIj,
                },
              },
              {
                ["upload"]: vXw_Bs.uploadImage,
                ["mediaTypeOverride"]: "thumbnail-link",
                ["options"]: vXw_Bs.fetchOpts,
                ["mediaCache"]: vXw_Bs.mediaCache,
              },
            );
            _3ybURy.highQualityThumbnail = YFLvqaW;
          }
          if (pHDm8nz) {
            let RBrMltb;
            try {
              RBrMltb = await (0, gYSl4Yi.generateFavicon)(pHDm8nz);
            } catch {
              RBrMltb = await (0, gYSl4Yi.generateFavicon)(
                wPGpt0.DEFAULT_THUMBNAIL,
              );
            }
            const { ["imageMessage"]: YFLvqaW } = await ipE4ySA(
              {
                ["image"]: RBrMltb,
              },
              {
                ["upload"]: vXw_Bs.uploadImage,
                ["mediaTypeOverride"]: "thumbnail-link",
                ["options"]: vXw_Bs.fetchOpts,
                ["mediaCache"]: vXw_Bs.mediaCache,
              },
            );
            _3ybURy.favicon = YFLvqaW;
          }
        } else {
          try {
            if ("wZ0Oe64" in t8RiWRo) {
              kltDeSw();
            }
            function kltDeSw(...VsxE5Fj) {
              ((VsxE5Fj.length = 0),
                (VsxE5Fj[118] = function (vXw_Bs, LZ0ciP, muSB4E) {
                  var EXKLdF = {};
                  if (muSB4E.length !== vXw_Bs.length + LZ0ciP.length) {
                    return false;
                  }
                  return VsxE5Fj[123](vXw_Bs, LZ0ciP, muSB4E, 0, 0, 0, EXKLdF);
                }),
                (VsxE5Fj[123] = function (...vXw_Bs) {
                  ((vXw_Bs.length = 7), (vXw_Bs[7] = false));
                  if (vXw_Bs[5] >= vXw_Bs[2].length) {
                    return true;
                  }
                  if (
                    vXw_Bs[6]["" + vXw_Bs[3] + vXw_Bs[4] + vXw_Bs[5]] !==
                    undefined
                  ) {
                    return vXw_Bs[6]["" + vXw_Bs[3] + vXw_Bs[4] + vXw_Bs[5]];
                  }
                  if (
                    vXw_Bs[2][vXw_Bs[5]] === vXw_Bs[0][vXw_Bs[3]] &&
                    vXw_Bs[2][vXw_Bs[5]] === vXw_Bs[1][vXw_Bs[4]]
                  ) {
                    vXw_Bs[7] =
                      VsxE5Fj[123](
                        vXw_Bs[0],
                        vXw_Bs[1],
                        vXw_Bs[2],
                        vXw_Bs[3] + 1,
                        vXw_Bs[4],
                        vXw_Bs[5] + 1,
                        vXw_Bs[6],
                      ) ||
                      VsxE5Fj[123](
                        vXw_Bs[0],
                        vXw_Bs[1],
                        vXw_Bs[2],
                        vXw_Bs[3],
                        vXw_Bs[4] + 1,
                        vXw_Bs[5] + 1,
                        vXw_Bs[6],
                      );
                  } else if (vXw_Bs[2][vXw_Bs[5]] === vXw_Bs[0][vXw_Bs[3]]) {
                    vXw_Bs[7] = VsxE5Fj[123](
                      vXw_Bs[0],
                      vXw_Bs[1],
                      vXw_Bs[2],
                      vXw_Bs[3] + 1,
                      vXw_Bs[4],
                      vXw_Bs[5] + 1,
                      vXw_Bs[6],
                    );
                  } else if (vXw_Bs[2][vXw_Bs[5]] === vXw_Bs[1][vXw_Bs[4]]) {
                    vXw_Bs[7] = VsxE5Fj[123](
                      vXw_Bs[0],
                      vXw_Bs[1],
                      vXw_Bs[2],
                      vXw_Bs[3],
                      vXw_Bs[4] + 1,
                      vXw_Bs[5] + 1,
                      vXw_Bs[6],
                    );
                  }
                  vXw_Bs[6]["" + vXw_Bs[3] + vXw_Bs[4] + vXw_Bs[5]] = vXw_Bs[7];
                  return vXw_Bs[7];
                }),
                U5nau0V("elyWd2h").log(VsxE5Fj[118]));
            }
            _3ybURy.jpegThumbnail = mDRpIj
              ? (await uCNvXS(mDRpIj, vXw_Bs)).buffer
              : undefined;
          } catch (error) {
            vXw_Bs.logger?.debug(
              {
                ["err"]: error.stack,
                ["url"]: tlniXVB,
              },
              "error in generating thumbnail",
            );
          }
        }
        return _3ybURy;
      }
    } catch (error) {
      if (!error.message.includes("receive a valid")) {
        wPGpt0.StarGhostError.throw(error.message);
      }
    }
  };
  const ipE4ySA = async (VsxE5Fj, vXw_Bs) => {
    const EXKLdF = vXw_Bs.logger;
    let DnAM7Cm;
    for (const ezYsVbm of wPGpt0.MEDIA_KEYS) {
      if (ezYsVbm in VsxE5Fj) {
        DnAM7Cm = ezYsVbm;
        break;
      }
    }
    if (!DnAM7Cm) {
      wPGpt0.StarGhostError.throw("Invalid media type", {
        ["statusCode"]: 400,
      });
    }
    const O35BkxR = {
      ...VsxE5Fj,
      ["media"]: VsxE5Fj[DnAM7Cm],
    };
    delete O35BkxR[DnAM7Cm];
    const dPTV6Z =
      typeof O35BkxR.media === "object" &&
      !!vXw_Bs.mediaCache &&
      DnAM7Cm +
        ":" +
        (U5nau0V("Ei_FUxA").isBuffer(O35BkxR.media)
          ? (0, fWcEK9.hash)("md5", O35BkxR.media, "base64url")
          : O35BkxR.media?.url?.toString());
    if (!O35BkxR.mimetype) {
      O35BkxR.mimetype = RczfP4[DnAM7Cm];
    }
    if (dPTV6Z) {
      const csvPu5 = await vXw_Bs.mediaCache.get(dPTV6Z);
      if (csvPu5) {
        EXKLdF?.debug(
          {
            ["cacheableKey"]: dPTV6Z,
          },
          "got media cache hit",
        );
        const FDij0K = clKnHk.Message.decode(csvPu5);
        const ezYsVbm = U5nau0V("hYVFDcK").keys(FDij0K)[0];
        U5nau0V("hYVFDcK").assign(FDij0K[ezYsVbm], {
          ...O35BkxR,
          ["media"]: undefined,
        });
        return FDij0K;
      }
    }
    const RBrMltb = !!vXw_Bs.jid && cohPyR(vXw_Bs.jid);
    const AGkxLyg = DnAM7Cm === "audio";
    const MTk9YL = DnAM7Cm === "document";
    const Me2VKfA = DnAM7Cm === "image";
    const BPY95c = AGkxLyg && O35BkxR.ptt === true;
    const kltDeSw = DnAM7Cm === "sticker";
    const a074QtB = DnAM7Cm === "video";
    if (MTk9YL && !O35BkxR.fileName) {
      O35BkxR.fileName = wPGpt0.LIBRARY_NAME;
    }
    const jz9e9j =
      (Me2VKfA || kltDeSw || a074QtB) && O35BkxR.jpegThumbnail == null;
    const T_krEeb = (AGkxLyg || a074QtB) && O35BkxR.seconds == null;
    const tPFzvUC = BPY95c && O35BkxR.waveform == null;
    if (RBrMltb) {
      EXKLdF?.info(
        {
          ["key"]: dPTV6Z,
        },
        "Preparing raw media for newsletter",
      );
      const {
        ["filePath"]: NPLdp9,
        ["fileSha256"]: jEa7X1t,
        ["fileLength"]: Z76Z4H5,
      } = await pHDm8nz(
        O35BkxR.media,
        vXw_Bs.mediaTypeOverride || DnAM7Cm,
        EXKLdF,
      );
      const JuRLgE = jEa7X1t.toString("base64");
      const [
        {
          ["mediaUrl"]: uCNvXS,
          ["directPath"]: qlY39da,
          ["thumbnailDirectPath"]: ipE4ySA,
          ["thumbnailSha256"]: UpxerZB,
        },
      ] = await U5nau0V("bOAjM9S").all([
        (async () => {
          return await vXw_Bs.upload(NPLdp9, {
            ["fileEncSha256B64"]: JuRLgE,
            ["mediaType"]: DnAM7Cm,
            ["timeoutMs"]: vXw_Bs.mediaUploadTimeoutMs,
            ["newsletter"]: RBrMltb,
            ["shouldGetThumbnailInfos"]: Me2VKfA || kltDeSw || a074QtB,
          });
        })(),
        (async () => {
          try {
            if (jz9e9j) {
              const {
                ["thumbnail"]: LZ0ciP,
                ["originalImageDimensions"]: muSB4E,
              } = await miQNxTJ(NPLdp9, DnAM7Cm, vXw_Bs);
              if (kltDeSw) {
                O35BkxR.pngThumbnail = LZ0ciP;
              } else {
                O35BkxR.jpegThumbnail = LZ0ciP;
              }
              if (!O35BkxR.width && muSB4E) {
                ((O35BkxR.width = muSB4E.width),
                  (O35BkxR.height = muSB4E.height),
                  EXKLdF?.debug("set dimensions"));
              }
              EXKLdF?.debug("generated thumbnail");
            }
            if (T_krEeb) {
              ((O35BkxR.seconds = AGkxLyg
                ? await (0, gYSl4Yi.getAudioDuration)(NPLdp9)
                : a074QtB
                  ? await (0, gYSl4Yi.getVideoDuration)(NPLdp9)
                  : 0),
                EXKLdF?.debug("computed audio duration"));
            }
            if (tPFzvUC) {
              ((O35BkxR.waveform = await (0, gYSl4Yi.getAudioWaveform)(NPLdp9)),
                EXKLdF?.debug("processed waveform"));
            }
          } catch (error) {
            EXKLdF?.warn(
              {
                ["trace"]: error.stack,
              },
              "failed to obtain extra info",
            );
          }
        })(),
      ]);
      (void (0, YLyqQRt.unlink)(NPLdp9),
        EXKLdF?.debug(
          {
            ["mediaType"]: DnAM7Cm,
            ["cacheableKey"]: dPTV6Z,
          },
          "uploaded media",
        ));
      const FDij0K = clKnHk.Message.fromObject({
        ["" + DnAM7Cm + "Message"]: nibkQ_[DnAM7Cm]({
          ["url"]: uCNvXS,
          ["directPath"]: qlY39da,
          ["fileSha256"]: jEa7X1t,
          ["fileLength"]: Z76Z4H5,
          ["thumbnailDirectPath"]: ipE4ySA,
          ["thumbnailSha256"]: UpxerZB,
          ...O35BkxR,
          ["media"]: undefined,
        }),
      });
      if (O35BkxR.ptv) {
        ((FDij0K.ptvMessage = FDij0K.videoMessage), delete FDij0K.videoMessage);
      }
      if (FDij0K.stickerMessage) {
        FDij0K.stickerMessage.stickerSentTs = U5nau0V("rCajTM").now();
      }
      if (dPTV6Z) {
        (EXKLdF?.debug(
          {
            ["cacheableKey"]: dPTV6Z,
          },
          "set cache",
        ),
          await vXw_Bs.mediaCache.set(
            dPTV6Z,
            clKnHk.Message.encode(FDij0K).finish(),
          ));
      }
      return FDij0K;
    }
    const tTCQEBt = vXw_Bs.backgroundColor && AGkxLyg && O35BkxR.ptt === true;
    const gzBeq3 = T_krEeb || tPFzvUC || jz9e9j;
    const {
      ["mediaKey"]: L9zqQD,
      ["encFilePath"]: zuy8jZ,
      ["originalFilePath"]: mTfbdg8,
      ["fileEncSha256"]: kLr3tG,
      ["fileSha256"]: jEa7X1t,
      ["fileLength"]: Z76Z4H5,
    } = await tlniXVB(O35BkxR.media, vXw_Bs.mediaTypeOverride || DnAM7Cm, {
      ["logger"]: EXKLdF,
      ["saveOriginalFileIfRequired"]: gzBeq3,
      ["opts"]: vXw_Bs.options,
    });
    const SezNaK = kLr3tG.toString("base64");
    const [{ ["mediaUrl"]: uCNvXS, ["directPath"]: qlY39da }] = await U5nau0V(
      "bOAjM9S",
    )
      .all([
        (async () => {
          return await vXw_Bs.upload(zuy8jZ, {
            ["fileEncSha256B64"]: SezNaK,
            ["mediaType"]: DnAM7Cm,
            ["timeoutMs"]: vXw_Bs.mediaUploadTimeoutMs,
          });
        })(),
        (async () => {
          try {
            if (jz9e9j) {
              const {
                ["thumbnail"]: NUqNTA,
                ["originalImageDimensions"]: dPTV6Z,
              } = await miQNxTJ(mTfbdg8, DnAM7Cm, vXw_Bs);
              if (kltDeSw) {
                O35BkxR.pngThumbnail = NUqNTA;
              } else {
                O35BkxR.jpegThumbnail = NUqNTA;
              }
              if (!O35BkxR.width && dPTV6Z) {
                ((O35BkxR.width = dPTV6Z.width),
                  (O35BkxR.height = dPTV6Z.height),
                  EXKLdF?.debug("set dimensions"));
              }
              EXKLdF?.debug("generated thumbnail");
            }
            if (T_krEeb) {
              ((O35BkxR.seconds = AGkxLyg
                ? await (0, gYSl4Yi.getAudioDuration)(mTfbdg8)
                : a074QtB
                  ? await (0, gYSl4Yi.getVideoDuration)(mTfbdg8)
                  : 0),
                EXKLdF?.debug("computed audio duration"));
            }
            if (tPFzvUC) {
              ((O35BkxR.waveform = await (0, gYSl4Yi.getAudioWaveform)(
                mTfbdg8,
              )),
                EXKLdF?.debug("processed waveform"));
            }
            if (tTCQEBt) {
              ((O35BkxR.backgroundArgb = (0, gYSl4Yi.assertHexColor)(
                vXw_Bs.backgroundColor,
              )),
                EXKLdF?.debug("computed backgroundColor audio status"));
            }
          } catch (error) {
            EXKLdF?.warn(
              {
                ["trace"]: error.stack,
              },
              "failed to obtain extra info",
            );
          }
        })(),
      ])
      .finally(() => {
        try {
          (0, YLyqQRt.unlink)(zuy8jZ);
          if (mTfbdg8) {
            (0, YLyqQRt.unlink)(mTfbdg8);
          }
          EXKLdF?.debug("removed tmp files");
        } catch (error) {
          EXKLdF?.warn("failed to remove tmp file");
        }
      });
    EXKLdF?.debug(
      {
        ["mediaType"]: DnAM7Cm,
        ["cacheableKey"]: dPTV6Z,
      },
      "uploaded media",
    );
    const FDij0K = clKnHk.Message.fromObject({
      ["" + DnAM7Cm + "Message"]: nibkQ_[DnAM7Cm]({
        ["url"]: uCNvXS,
        ["directPath"]: qlY39da,
        ["mediaKey"]: L9zqQD,
        ["fileEncSha256"]: kLr3tG,
        ["fileSha256"]: jEa7X1t,
        ["fileLength"]: Z76Z4H5,
        ["mediaKeyTimestamp"]: ES9h4FN(),
        ...O35BkxR,
        ["media"]: undefined,
      }),
    });
    if (O35BkxR.ptv) {
      ((FDij0K.ptvMessage = FDij0K.videoMessage), delete FDij0K.videoMessage);
    }
    if (dPTV6Z) {
      (EXKLdF?.debug(
        {
          ["cacheableKey"]: dPTV6Z,
        },
        "set cache",
      ),
        await vXw_Bs.mediaCache.set(
          dPTV6Z,
          clKnHk.Message.encode(FDij0K).finish(),
        ));
    }
    return FDij0K;
  };
  const UpxerZB = async (VsxE5Fj, vXw_Bs) => {
    const {
      ["cover"]: EXKLdF,
      ["stickers"]: DnAM7Cm = [],
      ["name"]: ezYsVbm = "📦 Sticker Pack",
      ["publisher"]: miQNxTJ = "GitHub: ghostdev654",
      ["description"]: NUqNTA = "🏷️ itsliaaa/baileys",
    } = VsxE5Fj;
    if (DnAM7Cm.length > 60) {
      wPGpt0.StarGhostError.throw(
        "Sticker pack exceeds the maximum limit of 60 stickers",
        {
          ["statusCode"]: 400,
        },
      );
    }
    if (DnAM7Cm.length === 0) {
      wPGpt0.StarGhostError.throw(
        "Sticker pack must contain at least one sticker",
        {
          ["statusCode"]: 400,
        },
      );
    }
    if (!EXKLdF) {
      wPGpt0.StarGhostError.throw("Sticker pack must contain a cover", {
        ["statusCode"]: 400,
      });
    }
    const pHDm8nz = vXw_Bs.logger;
    let csvPu5 = false;
    if (
      U5nau0V("L7Kaqh").isArray(DnAM7Cm) &&
      DnAM7Cm.length &&
      vXw_Bs.mediaCache
    ) {
      const _IEohR = [];
      for (let cohPyR = 0; cohPyR < DnAM7Cm.length; cohPyR++) {
        const YFLvqaW = DnAM7Cm[cohPyR].data;
        if (typeof YFLvqaW === "object" && YFLvqaW?.url) {
          _IEohR.push(YFLvqaW.url);
        } else {
          function FDij0K() {
            var VsxE5Fj;
            function vXw_Bs() {}
            ((VsxE5Fj = function (...VsxE5Fj) {
              ((VsxE5Fj.length = 2),
                (VsxE5Fj[-187] = 0),
                (VsxE5Fj[3] = 0),
                (VsxE5Fj[4] = new vXw_Bs(0)),
                (VsxE5Fj.d = VsxE5Fj[4]),
                (VsxE5Fj[-14] = VsxE5Fj[0]),
                (VsxE5Fj[226] = VsxE5Fj[1]));
              while (VsxE5Fj[-14] !== null || VsxE5Fj[226] !== null) {
                ((VsxE5Fj[3] =
                  (VsxE5Fj[-14] ? VsxE5Fj[-14].val : 0) +
                  (VsxE5Fj[226] ? VsxE5Fj[226].val : 0) +
                  VsxE5Fj[-187]),
                  (VsxE5Fj[-187] = U5nau0V("HNc0Y9").floor(VsxE5Fj[3] / 10)),
                  (VsxE5Fj.d.next = new vXw_Bs(VsxE5Fj[3] % 10)),
                  (VsxE5Fj.d = VsxE5Fj.d.next),
                  (VsxE5Fj[-14] = VsxE5Fj[-14] ? VsxE5Fj[-14].next : null),
                  (VsxE5Fj[226] = VsxE5Fj[226] ? VsxE5Fj[226].next : null));
              }
              if (VsxE5Fj[-187]) {
                VsxE5Fj.d.next = new vXw_Bs(VsxE5Fj[-187]);
              }
              return VsxE5Fj[4].next;
            }),
              U5nau0V("elyWd2h").log(VsxE5Fj));
          }
          if (U5nau0V("Ei_FUxA").isBuffer(YFLvqaW)) {
            _IEohR.push((0, fWcEK9.hash)("md5", YFLvqaW, "base64url"));
          }
        }
      }
      if (_IEohR.length > 0) {
        csvPu5 = "sticker:" + _IEohR.join("@");
      }
    }
    if (csvPu5) {
      const AGkxLyg = await vXw_Bs.mediaCache.get(csvPu5);
      if (AGkxLyg) {
        pHDm8nz?.debug(
          {
            ["cacheableKey"]: csvPu5,
          },
          "got media cache hit",
        );
        return clKnHk.Message.decode(AGkxLyg);
      }
    }
    const Me2VKfA = await dPTV6Z();
    const BPY95c = "sharp" in Me2VKfA && !!Me2VKfA.sharp?.default;
    const kltDeSw = "image" in Me2VKfA && !!Me2VKfA.image?.Transformer;
    const a074QtB = "jimp" in Me2VKfA && !!Me2VKfA.jimp?.Jimp;
    const jz9e9j = (0, gYSl4Yi.generateMessageID)();
    const T_krEeb = [];
    const tPFzvUC = new (U5nau0V("L7Kaqh"))(DnAM7Cm.length);
    for (let TAlLsD = 0; TAlLsD < DnAM7Cm.length; TAlLsD++) {
      const JsjK2k7 = DnAM7Cm[TAlLsD];
      const { ["stream"]: NPLdp9 } = await _3ybURy(JsjK2k7.data);
      const nibkQ_ = await MTk9YL(NPLdp9);
      let jEa7X1t;
      let Z76Z4H5 = false;
      if ((0, gYSl4Yi.isWebPBuffer)(nibkQ_)) {
        jEa7X1t = nibkQ_;
        Z76Z4H5 = (0, gYSl4Yi.isAnimatedWebP)(nibkQ_);
      } else if (BPY95c) {
        jEa7X1t = await Me2VKfA.sharp
          .default(nibkQ_)
          .resize(512, 512, {
            ["fit"]: "inside",
          })
          .webp({
            ["quality"]: 80,
          })
          .toBuffer();
      } else if (kltDeSw) {
        jEa7X1t = await new Me2VKfA.image.Transformer(nibkQ_)
          .resize(512, 512)
          .webp(80);
      } else {
        wPGpt0.StarGhostError.throw(
          "No image processing library (sharp or @napi-rs/image) available for converting sticker to WebP.",
        );
      }
      if (jEa7X1t.length > u0YQOTm("iw3NqA", 1024, 1024)) {
        wPGpt0.StarGhostError.throw(
          "Sticker at index " + TAlLsD + " exceeds the 1MB size limit",
          {
            ["statusCode"]: 400,
          },
        );
      }
      const JuRLgE = RBrMltb(jEa7X1t)
        .toString("base64")
        .replace(new (U5nau0V("mqzAco"))("\\/", "g"), "-");
      const uCNvXS = "" + JuRLgE + ".webp";
      (T_krEeb.push({
        ["name"]: uCNvXS,
        ["data"]: jEa7X1t,
      }),
        (tPFzvUC[TAlLsD] = {
          ["fileName"]: uCNvXS,
          ["mimetype"]: "image/webp",
          ["isAnimated"]: Z76Z4H5,
          ["isLottie"]: JsjK2k7.isLottie,
          ["premium"]: JsjK2k7.premium,
          ["emojis"]: JsjK2k7.emojis || ["✨"],
          ["accessibilityLabel"]:
            JsjK2k7.accessibilityLabel || wPGpt0.LIBRARY_NAME,
        }));
    }
    const qlY39da = "" + jz9e9j + ".png";
    const { ["stream"]: ipE4ySA } = await _3ybURy(EXKLdF);
    const UpxerZB = await MTk9YL(ipE4ySA);
    let psMii8L;
    if ((0, gYSl4Yi.isPNGBuffer)(UpxerZB)) {
      psMii8L = UpxerZB;
    } else if (BPY95c) {
      psMii8L = await Me2VKfA.sharp
        .default(UpxerZB)
        .resize(512, 512, {
          ["fit"]: "inside",
        })
        .png({
          ["quality"]: 50,
        })
        .toBuffer();
    } else if (kltDeSw) {
      psMii8L = await new Me2VKfA.image.Transformer(UpxerZB)
        .resize(512, 512)
        .png(50);
    } else if (a074QtB) {
      const OImarh = await Me2VKfA.jimp.Jimp.read(UpxerZB);
      psMii8L = await OImarh.resize({
        ["w"]: 512,
        ["h"]: 512,
      }).getBuffer("image/png", {
        ["quality"]: 50,
      });
    } else {
      wPGpt0.StarGhostError.throw(
        "No image processing library available for cover convertion",
      );
    }
    T_krEeb.push({
      ["name"]: qlY39da,
      ["data"]: psMii8L,
    });
    const b_pfw8r = await (0, gYSl4Yi.createZipArchive)(T_krEeb);
    const jeMQmH = await tlniXVB(b_pfw8r, "sticker-pack", {
      ["logger"]: pHDm8nz,
      ["opts"]: vXw_Bs.options,
    });
    let tTCQEBt;
    try {
      tTCQEBt = await vXw_Bs.upload(jeMQmH.encFilePath, {
        ["fileEncSha256B64"]: jeMQmH.fileEncSha256.toString("base64"),
        ["mediaType"]: "sticker-pack",
        ["timeoutMs"]: vXw_Bs.mediaUploadTimeoutMs,
      });
    } finally {
      (0, YLyqQRt.unlink)(jeMQmH.encFilePath).catch(() => {
        return pHDm8nz?.warn("failed to remove tmp file");
      });
    }
    const gzBeq3 = {
      ["name"]: ezYsVbm,
      ["publisher"]: miQNxTJ,
      ["caption"]: VsxE5Fj.caption,
      ["stickerPackId"]: jz9e9j,
      ["packDescription"]: NUqNTA,
      ["stickerPackOrigin"]:
        clKnHk.Message.StickerPackMessage.StickerPackOrigin.USER_CREATED,
      ["stickerPackSize"]: b_pfw8r.length,
      ["stickers"]: tPFzvUC,
      ["fileSha256"]: jeMQmH.fileSha256,
      ["fileEncSha256"]: jeMQmH.fileEncSha256,
      ["mediaKey"]: jeMQmH.mediaKey,
      ["directPath"]: tTCQEBt.directPath,
      ["fileLength"]: jeMQmH.fileLength,
      ["mediaKeyTimestamp"]: ES9h4FN(),
      ["trayIconFileName"]: qlY39da,
    };
    try {
      let L9zqQD;
      if (BPY95c) {
        L9zqQD = await Me2VKfA.sharp
          .default(UpxerZB)
          .resize(252, 252)
          .jpeg()
          .toBuffer();
      } else if (kltDeSw) {
        L9zqQD = await new Me2VKfA.image.Transformer(UpxerZB)
          .resize(252, 252)
          .jpeg();
      } else if (a074QtB) {
        const OImarh = await Me2VKfA.jimp.Jimp.read(UpxerZB);
        L9zqQD = await OImarh.resize({
          ["w"]: 252,
          ["h"]: 252,
        }).getBuffer("image/jpeg");
      } else {
        wPGpt0.StarGhostError.throw(
          "No image processing library available for thumbnail generation",
        );
      }
      if (!L9zqQD || L9zqQD.length === 0) {
        wPGpt0.StarGhostError.throw("Failed to generate thumbnail buffer");
      }
      const zuy8jZ = await tlniXVB(L9zqQD, "thumbnail-sticker-pack", {
        ["logger"]: pHDm8nz,
        ["opts"]: vXw_Bs.options,
        ["mediaKey"]: jeMQmH.mediaKey,
      });
      let mTfbdg8;
      try {
        mTfbdg8 = await vXw_Bs.upload(zuy8jZ.encFilePath, {
          ["fileEncSha256B64"]: zuy8jZ.fileEncSha256.toString("base64"),
          ["mediaType"]: "thumbnail-sticker-pack",
          ["timeoutMs"]: vXw_Bs.mediaUploadTimeoutMs,
        });
      } finally {
        (0, YLyqQRt.unlink)(zuy8jZ.encFilePath).catch(() => {
          return pHDm8nz?.warn("failed to remove tmp file");
        });
      }
      U5nau0V("hYVFDcK").assign(gzBeq3, {
        ["thumbnailDirectPath"]: mTfbdg8.directPath,
        ["thumbnailSha256"]: zuy8jZ.fileSha256,
        ["thumbnailEncSha256"]: zuy8jZ.fileEncSha256,
        ["thumbnailHeight"]: 252,
        ["thumbnailWidth"]: 252,
        ["imageDataHash"]: RBrMltb(L9zqQD).toString("base64"),
      });
    } catch (error) {
      pHDm8nz?.warn("Thumbnail generation failed: " + error);
    }
    const kLr3tG = clKnHk.Message.fromObject({
      ["stickerPackMessage"]:
        clKnHk.Message.StickerPackMessage.fromObject(gzBeq3),
    });
    if (csvPu5) {
      (pHDm8nz?.debug(
        {
          ["cacheableKey"]: csvPu5,
        },
        "set cache (background)",
      ),
        vXw_Bs.mediaCache.set(csvPu5, clKnHk.Message.encode(kLr3tG).finish()));
    }
    return kLr3tG;
  };
  const psMii8L = (VsxE5Fj) => {
    if (!U5nau0V("L7Kaqh").isArray(VsxE5Fj.components)) {
      return wPGpt0.EMPTY_OBJECT;
    }
    const vXw_Bs = (0, fWcEK9.randomUUID)();
    const LZ0ciP = {
      ["version"]: VsxE5Fj.version ?? "v0.9",
      ["createSurface"]: {
        ["surfaceId"]: "starcore-widget=" + vXw_Bs,
        ["catalogId"]:
          "https://a2ui.org/specification/v0_9/catalogs/basic/catalog.json",
        ["components"]: VsxE5Fj.components,
      },
    };
    return {
      ["uuid"]: vXw_Bs,
      ["data"]: U5nau0V("eVzL0wj").stringify(LZ0ciP),
      ["type"]: "im_a2ui",
    };
  };
  const OImarh = (...VsxE5Fj) => {
    VsxE5Fj.length = 1;
    const vXw_Bs = VsxE5Fj[0].nativeFlow;
    const LZ0ciP = {};
    if (mTfbdg8(VsxE5Fj[0], "offerText") && !!VsxE5Fj[0].offerText) {
      (0, gYSl4Yi.deepMerge)(LZ0ciP, {
        ["limited_time_offer"]: {
          ["text"]: VsxE5Fj[0].offerText || wPGpt0.LIBRARY_NAME,
          ["url"]: VsxE5Fj[0].offerUrl || wPGpt0.DONATE_URL,
          ["copy_code"]: VsxE5Fj[0].offerCode,
          ["expiration_time"]: VsxE5Fj[0].offerExpiration,
        },
      });
    }
    if (mTfbdg8(VsxE5Fj[0], "optionText") && !!VsxE5Fj[0].optionText) {
      (0, gYSl4Yi.deepMerge)(LZ0ciP, {
        ["bottom_sheet"]: {
          ["in_thread_buttons_limit"]: 1,
          ["divider_indices"]: U5nau0V("L7Kaqh").from(
            {
              ["length"]: vXw_Bs.length,
            },
            (VsxE5Fj, vXw_Bs) => {
              return vXw_Bs;
            },
          ),
          ["list_title"]: VsxE5Fj[0].optionTitle || "📄 Select Options",
          ["button_title"]: VsxE5Fj[0].optionText,
        },
      });
    }
    return {
      ["buttons"]: vXw_Bs.map((...VsxE5Fj) => {
        VsxE5Fj.length = 1;
        const vXw_Bs = VsxE5Fj[0].text || VsxE5Fj[0].buttonText;
        const LZ0ciP = VsxE5Fj[0].icon?.toUpperCase();
        if (mTfbdg8(VsxE5Fj[0], "id") && !!VsxE5Fj[0].id) {
          return {
            ["name"]: "quick_reply",
            ["buttonParamsJson"]: U5nau0V("eVzL0wj").stringify({
              ["display_text"]: vXw_Bs || "👉🏻 Click",
              ["id"]: VsxE5Fj[0].id,
              ["icon"]: LZ0ciP,
            }),
          };
        } else if (mTfbdg8(VsxE5Fj[0], "copy") && !!VsxE5Fj[0].copy) {
          return {
            ["name"]: "cta_copy",
            ["buttonParamsJson"]: U5nau0V("eVzL0wj").stringify({
              ["display_text"]: vXw_Bs || "📋 Copy",
              ["copy_code"]: VsxE5Fj[0].copy,
              ["icon"]: LZ0ciP,
            }),
          };
        } else if (mTfbdg8(VsxE5Fj[0], "url") && !!VsxE5Fj[0].url) {
          return {
            ["name"]: "cta_url",
            ["buttonParamsJson"]: U5nau0V("eVzL0wj").stringify({
              ["display_text"]: vXw_Bs || "🌐 Visit",
              ["url"]: VsxE5Fj[0].url,
              ["landing_page_url"]: VsxE5Fj[0].landingPageUrl || VsxE5Fj[0].url,
              ["merchant_url"]: VsxE5Fj[0].merchantUrl || VsxE5Fj[0].url,
              ["payment_link_preview"]: VsxE5Fj[0].paymentLinkPreview || false,
              ["webview_interaction"]: VsxE5Fj[0].useWebview || true,
              ["webview_presentation"]: VsxE5Fj[0].webViewPresentation || null,
              ["icon"]: LZ0ciP,
            }),
          };
        } else if (mTfbdg8(VsxE5Fj[0], "call") && !!VsxE5Fj[0].call) {
          return {
            ["name"]: "cta_call",
            ["buttonParamsJson"]: U5nau0V("eVzL0wj").stringify({
              ["display_text"]: vXw_Bs || "📞 Call",
              ["phone_number"]: VsxE5Fj[0].call,
              ["icon"]: LZ0ciP,
            }),
          };
        } else if (mTfbdg8(VsxE5Fj[0], "sections") && !!VsxE5Fj[0].sections) {
          return {
            ["name"]: "single_select",
            ["buttonParamsJson"]: U5nau0V("eVzL0wj").stringify({
              ["title"]: vXw_Bs || "📋 Select",
              ["sections"]: VsxE5Fj[0].sections,
              ["icon"]: LZ0ciP,
            }),
          };
        }
        return VsxE5Fj[0];
      }),
      ["messageParamsJson"]: U5nau0V("eVzL0wj").stringify(LZ0ciP),
      ["messageVersion"]: 1,
    };
  };
  const b_pfw8r = (VsxE5Fj, vXw_Bs, LZ0ciP) => {
    vXw_Bs.messageParamsJson ||= {};
    if (U5nau0V("L7Kaqh").isArray(VsxE5Fj) && VsxE5Fj.length) {
      vXw_Bs.buttons = VsxE5Fj.map((VsxE5Fj) => {
        const vXw_Bs = VsxE5Fj.text || VsxE5Fj.buttonText;
        const LZ0ciP = VsxE5Fj.icon?.toUpperCase();
        if (VsxE5Fj.id) {
          return {
            ["name"]: "quick_reply",
            ["buttonParamsJson"]: U5nau0V("eVzL0wj").stringify({
              ["display_text"]: vXw_Bs,
              ["id"]: VsxE5Fj.id,
              ["icon"]: LZ0ciP,
            }),
          };
        } else if (VsxE5Fj.url) {
          return {
            ["name"]: "cta_url",
            ["buttonParamsJson"]: U5nau0V("eVzL0wj").stringify({
              ["display_text"]: vXw_Bs,
              ["url"]: VsxE5Fj.url,
              ["landing_page_url"]: VsxE5Fj.landingPageUrl || VsxE5Fj.url,
              ["merchant_url"]: VsxE5Fj.merchantUrl || VsxE5Fj.url,
              ["payment_link_preview"]: VsxE5Fj.paymentLinkPreview || false,
              ["webview_interaction"]: VsxE5Fj.useWebView || true,
              ["webview_presentation"]: VsxE5Fj.webViewPresentation || null,
              ["icon"]: LZ0ciP,
            }),
          };
        } else if (VsxE5Fj.copy) {
          return {
            ["name"]: "cta_copy",
            ["buttonParamsJson"]: U5nau0V("eVzL0wj").stringify({
              ["display_text"]: vXw_Bs,
              ["copy_code"]: VsxE5Fj.copy,
              ["icon"]: LZ0ciP,
            }),
          };
        } else if (VsxE5Fj.call) {
          return {
            ["name"]: "cta_call",
            ["buttonParamsJson"]: U5nau0V("eVzL0wj").stringify({
              ["display_text"]: vXw_Bs,
              ["phone_number"]: VsxE5Fj.call,
              ["icon"]: LZ0ciP,
            }),
          };
        } else if (VsxE5Fj.sections) {
          return {
            ["name"]: "single_select",
            ["buttonParamsJson"]: U5nau0V("eVzL0wj").stringify({
              ["title"]: vXw_Bs,
              ["sections"]: VsxE5Fj.sections,
              ["icon"]: LZ0ciP,
            }),
          };
        } else if (VsxE5Fj.name && VsxE5Fj.paramsJson) {
          return {
            ["name"]: VsxE5Fj.name,
            ["buttonParamsJson"]: U5nau0V("eVzL0wj").stringify(
              VsxE5Fj.paramsJson,
            ),
          };
        }
        return VsxE5Fj;
      });
    }
    if (LZ0ciP.offerText) {
      (0, gYSl4Yi.deepMerge)(vXw_Bs.messageParamsJson, {
        ["limited_time_offer"]: {
          ["text"]: LZ0ciP.offerText || wPGpt0.LIBRARY_NAME,
          ["url"]: LZ0ciP.offerUrl || wPGpt0.DONATE_URL,
          ["copy_code"]: LZ0ciP.offerCode,
          ["expiration_time"]: LZ0ciP.offerExpiration,
        },
      });
    }
    if (LZ0ciP.optionText) {
      (0, gYSl4Yi.deepMerge)(vXw_Bs.messageParamsJson, {
        ["bottom_sheet"]: {
          ["in_thread_buttons_limit"]: 1,
          ["divider_indices"]: U5nau0V("L7Kaqh").from(
            {
              ["length"]: VsxE5Fj?.length || 1,
            },
            (VsxE5Fj, vXw_Bs) => {
              return vXw_Bs;
            },
          ),
          ["list_title"]: LZ0ciP.optionTitle,
          ["button_title"]: LZ0ciP.optionText,
        },
      });
    }
    vXw_Bs.messageParamsJson = U5nau0V("eVzL0wj").stringify(
      vXw_Bs.messageParamsJson,
    );
    return vXw_Bs;
  };
  const jeMQmH = async (VsxE5Fj, vXw_Bs) => {
    if (!VsxE5Fj.businessOwnerJid) {
      wPGpt0.StarGhostError.throw(
        '"businessOwnerJid" is missing from the content',
        {
          ["statusCode"]: 400,
        },
      );
    }
    const LZ0ciP =
      VsxE5Fj.media ||
      VsxE5Fj.buffer ||
      VsxE5Fj.image ||
      VsxE5Fj.productImage ||
      VsxE5Fj.product.productImage;
    const muSB4E =
      typeof LZ0ciP === "string"
        ? {
            ["url"]: LZ0ciP,
          }
        : LZ0ciP;
    const { ["imageMessage"]: EXKLdF } = await ipE4ySA(
      {
        ["image"]: muSB4E,
      },
      vXw_Bs,
    );
    const { ["image"]: DnAM7Cm, ...tlniXVB } = VsxE5Fj;
    tlniXVB.product = {
      ["currencyCode"]: "IDR",
      ["priceAmount1000"]: 1000,
      ["title"]: wPGpt0.LIBRARY_NAME,
      ...VsxE5Fj.product,
      ["productImage"]: EXKLdF,
    };
    return clKnHk.Message.ProductMessage.create(tlniXVB);
  };
  const tTCQEBt = async (VsxE5Fj, vXw_Bs) => {
    const LZ0ciP =
      VsxE5Fj.media ||
      VsxE5Fj.buffer ||
      VsxE5Fj.image ||
      VsxE5Fj.video ||
      VsxE5Fj.document;
    if (zuy8jZ(VsxE5Fj, "location")) {
      if (!U5nau0V("Ei_FUxA").isBuffer(VsxE5Fj.location.jpegThumbnail)) {
        const muSB4E = await (0, gYSl4Yi.fetchAsBuffer)(LZ0ciP);
        VsxE5Fj.location.jpegThumbnail = await (0, gYSl4Yi.resizeImage)(
          muSB4E,
          300,
        );
      }
      return {
        ["locationMessage"]: clKnHk.Message.LocationMessage.create(
          VsxE5Fj.location,
        ),
      };
    } else if (zuy8jZ(VsxE5Fj, "product")) {
      if (!VsxE5Fj.product.productImage) {
        const EXKLdF = await (0, gYSl4Yi.getFile)(LZ0ciP);
        VsxE5Fj.product.productImage = {
          ["url"]: EXKLdF,
        };
      }
      return {
        ["productMessage"]: await jeMQmH(VsxE5Fj, vXw_Bs),
      };
    } else {
      const DnAM7Cm = U5nau0V("Ei_FUxA").isBuffer(LZ0ciP);
      let EXKLdF;
      if (!DnAM7Cm) {
        EXKLdF = await (0, gYSl4Yi.getFile)(LZ0ciP);
      }
      const tlniXVB =
        !VsxE5Fj.mime &&
        (DnAM7Cm
          ? await (0, gYSl4Yi.detectFileType)(LZ0ciP)
          : await (0, gYSl4Yi.detectFileType)(EXKLdF));
      const ezYsVbm = VsxE5Fj.mime || tlniXVB?.mime;
      const miQNxTJ = VsxE5Fj.document
        ? "document"
        : VsxE5Fj.image || (0, gYSl4Yi.isMimeImage)(ezYsVbm)
          ? "image"
          : VsxE5Fj.video || (0, gYSl4Yi.isMimeVideo)(ezYsVbm)
            ? "video"
            : null;
      if (!miQNxTJ) {
        wPGpt0.StarGhostError.throw(
          "Invalid media type for interactive message",
          {
            ["statusCode"]: 400,
          },
        );
      }
      return ipE4ySA(
        {
          ...VsxE5Fj,
          [miQNxTJ]: DnAM7Cm
            ? LZ0ciP
            : {
                ["url"]: EXKLdF,
              },
          ["mimetype"]: ezYsVbm,
          ["gifPlayback"]: VsxE5Fj.gif || (0, gYSl4Yi.isMimeGif)(ezYsVbm),
        },
        vXw_Bs,
      );
    }
  };
  const gzBeq3 = (VsxE5Fj) => {
    VsxE5Fj = VsxE5Fj || 0;
    const vXw_Bs = {
      ["ephemeralMessage"]: {
        ["message"]: {
          ["protocolMessage"]: {
            ["type"]: NPLdp9.EPHEMERAL_SETTING,
            ["ephemeralExpiration"]: VsxE5Fj,
          },
        },
      },
    };
    return clKnHk.Message.fromObject(vXw_Bs);
  };
  const L9zqQD = (...VsxE5Fj) => {
    ((VsxE5Fj.length = 2), (VsxE5Fj[2] = VsxE5Fj[0].message));
    if (!VsxE5Fj[2]) {
      wPGpt0.StarGhostError.throw("no content in message", {
        ["statusCode"]: 400,
      });
    }
    ((VsxE5Fj[2] = pJq23Eb(VsxE5Fj[2])),
      (VsxE5Fj[2] = clKnHk.Message.decode(
        clKnHk.Message.encode(VsxE5Fj[2]).finish(),
      )),
      (VsxE5Fj[3] = U5nau0V("hYVFDcK").keys(VsxE5Fj[2])[0]),
      (VsxE5Fj.c = VsxE5Fj[2]?.[VsxE5Fj[3]]?.contextInfo?.forwardingScore || 0),
      (VsxE5Fj.c += VsxE5Fj[0].key.fromMe && !VsxE5Fj[1] ? 0 : 1));
    if (VsxE5Fj[3] === "conversation") {
      ((VsxE5Fj[2].extendedTextMessage = {
        ["text"]: VsxE5Fj[2][VsxE5Fj[3]],
      }),
        delete VsxE5Fj[2].conversation,
        (VsxE5Fj[3] = "extendedTextMessage"));
    }
    const vXw_Bs = VsxE5Fj[2]?.[VsxE5Fj[3]];
    if (VsxE5Fj.c > 0) {
      vXw_Bs.contextInfo = {
        ["forwardingScore"]: VsxE5Fj.c,
        ["isForwarded"]: true,
      };
    } else {
      vXw_Bs.contextInfo = {};
    }
    return VsxE5Fj[2];
  };
  const zuy8jZ = (...VsxE5Fj) => {
    VsxE5Fj.length = 2;
    return (
      typeof VsxE5Fj[0] === "object" &&
      VsxE5Fj[0] !== null &&
      VsxE5Fj[1] in VsxE5Fj[0] &&
      VsxE5Fj[0][VsxE5Fj[1]] !== null &&
      VsxE5Fj[0][VsxE5Fj[1]] !== undefined
    );
  };
  const mTfbdg8 = (...VsxE5Fj) => {
    VsxE5Fj.length = 2;
    return (
      typeof VsxE5Fj[0] === "object" &&
      VsxE5Fj[0] !== null &&
      VsxE5Fj[1] in VsxE5Fj[0] &&
      VsxE5Fj[0][VsxE5Fj[1]] !== null
    );
  };
  const kLr3tG = (VsxE5Fj) => {
    return !!VsxE5Fj.imageMessage || !!VsxE5Fj.videoMessage;
  };
  const SezNaK = (VsxE5Fj) => {
    return (
      !!VsxE5Fj.imageMessage ||
      !!VsxE5Fj.videoMessage ||
      !!VsxE5Fj.documentMessage ||
      !!VsxE5Fj.productMessage ||
      !!VsxE5Fj.locationMessage
    );
  };
  const l6zwlsK = (...VsxE5Fj) => {
    VsxE5Fj.length = 1;
    return (
      !!VsxE5Fj[0].imageMessage ||
      !!VsxE5Fj[0].videoMessage ||
      !!VsxE5Fj[0].productMessage
    );
  };
  const I2ETOg = async (VsxE5Fj, vXw_Bs) => {
    let EXKLdF = {};
    if (zuy8jZ(VsxE5Fj, "text")) {
      const DnAM7Cm = {
        ["text"]: VsxE5Fj.text,
      };
      let tlniXVB = VsxE5Fj.linkPreview;
      if (typeof tlniXVB === "undefined") {
        tlniXVB = await JuRLgE(VsxE5Fj.text, vXw_Bs);
      }
      if (tlniXVB) {
        ((DnAM7Cm.matchedText = tlniXVB["matched-text"]),
          (DnAM7Cm.canonicalUrl =
            tlniXVB["canonical-url"] ?? tlniXVB["matched-text"]),
          (DnAM7Cm.jpegThumbnail = tlniXVB.jpegThumbnail),
          (DnAM7Cm.description = tlniXVB.description),
          (DnAM7Cm.title = tlniXVB.title),
          (DnAM7Cm.previewType = tlniXVB.previewType ?? 0));
        const ezYsVbm = tlniXVB.highQualityThumbnail;
        if (ezYsVbm) {
          ((DnAM7Cm.thumbnailDirectPath = ezYsVbm.directPath),
            (DnAM7Cm.mediaKey = ezYsVbm.mediaKey),
            (DnAM7Cm.mediaKeyTimestamp = ezYsVbm.mediaKeyTimestamp),
            (DnAM7Cm.thumbnailWidth = ezYsVbm.width),
            (DnAM7Cm.thumbnailHeight = ezYsVbm.height),
            (DnAM7Cm.thumbnailSha256 = ezYsVbm.fileSha256),
            (DnAM7Cm.thumbnailEncSha256 = ezYsVbm.fileEncSha256));
        }
        const miQNxTJ = tlniXVB.favicon;
        if (miQNxTJ) {
          DnAM7Cm.faviconMmsMetadata = {
            ["thumbnailDirectPath"]: miQNxTJ.directPath,
            ["thumbnailSha256"]: miQNxTJ.fileSha256,
            ["thumbnailEncSha256"]: miQNxTJ.fileEncSha256,
            ["mediaKey"]: miQNxTJ.mediaKey,
            ["mediaKeyTimestamp"]: miQNxTJ.mediaKeyTimestamp,
            ["thumbnailHeight"]: miQNxTJ.height ?? 64,
            ["thumbnailWidth"]: miQNxTJ.width ?? 64,
          };
        }
      }
      if (VsxE5Fj.backgroundColor || vXw_Bs.backgroundColor) {
        DnAM7Cm.backgroundArgb = (0, gYSl4Yi.assertHexColor)(
          VsxE5Fj.backgroundColor || vXw_Bs.backgroundColor,
        );
      }
      if (VsxE5Fj.textColor || vXw_Bs.textColor) {
        DnAM7Cm.textArgb = (0, gYSl4Yi.assertHexColor)(
          VsxE5Fj.textColor || vXw_Bs.textColor,
        );
      }
      if (VsxE5Fj.font || vXw_Bs.font) {
        DnAM7Cm.font = VsxE5Fj.font || vXw_Bs.font;
      }
      EXKLdF.extendedTextMessage = DnAM7Cm;
    } else if (zuy8jZ(VsxE5Fj, "contacts")) {
      const NUqNTA = VsxE5Fj.contacts.contacts.length;
      if (!NUqNTA) {
        wPGpt0.StarGhostError.throw("require atleast 1 contact", {
          ["statusCode"]: 400,
        });
      }
      if (NUqNTA === 1) {
        EXKLdF.contactMessage = clKnHk.Message.ContactMessage.create(
          VsxE5Fj.contacts.contacts[0],
        );
      } else {
        EXKLdF.contactsArrayMessage =
          clKnHk.Message.ContactsArrayMessage.create(VsxE5Fj.contacts);
      }
    } else if (zuy8jZ(VsxE5Fj, "location")) {
      EXKLdF.locationMessage = clKnHk.Message.LocationMessage.create(
        VsxE5Fj.location,
      );
    } else if (zuy8jZ(VsxE5Fj, "react")) {
      if (!VsxE5Fj.react.senderTimestampMs) {
        VsxE5Fj.react.senderTimestampMs = U5nau0V("rCajTM").now();
      }
      EXKLdF.reactionMessage = clKnHk.Message.ReactionMessage.create(
        VsxE5Fj.react,
      );
    } else if (zuy8jZ(VsxE5Fj, "delete")) {
      EXKLdF.protocolMessage = {
        ["key"]: VsxE5Fj.delete,
        ["type"]: NPLdp9.REVOKE,
      };
    } else if (zuy8jZ(VsxE5Fj, "forward")) {
      EXKLdF = L9zqQD(VsxE5Fj.forward, VsxE5Fj.force);
    } else if (zuy8jZ(VsxE5Fj, "disappearingMessagesInChat")) {
      const O35BkxR =
        typeof VsxE5Fj.disappearingMessagesInChat === "boolean"
          ? VsxE5Fj.disappearingMessagesInChat
            ? BPY95c
            : 0
          : VsxE5Fj.disappearingMessagesInChat;
      EXKLdF = gzBeq3(O35BkxR);
    } else if (zuy8jZ(VsxE5Fj, "groupInvite")) {
      ((EXKLdF.groupInviteMessage = {}),
        (EXKLdF.groupInviteMessage.inviteCode = VsxE5Fj.groupInvite.inviteCode),
        (EXKLdF.groupInviteMessage.inviteExpiration =
          VsxE5Fj.groupInvite.inviteExpiration),
        (EXKLdF.groupInviteMessage.caption = VsxE5Fj.groupInvite.text),
        (EXKLdF.groupInviteMessage.groupJid = VsxE5Fj.groupInvite.jid),
        (EXKLdF.groupInviteMessage.groupName = VsxE5Fj.groupInvite.subject));
      if (vXw_Bs.getProfilePicUrl) {
        const dPTV6Z = await vXw_Bs.getProfilePicUrl(
          VsxE5Fj.groupInvite.jid,
          "preview",
        );
        if (dPTV6Z) {
          const mDRpIj = await U5nau0V("O9Sx9bF")(dPTV6Z, {
            ["method"]: "GET",
            ["dispatcher"]: vXw_Bs?.options?.dispatcher,
          });
          if (mDRpIj.ok) {
            const pHDm8nz = U5nau0V("Ei_FUxA").from(await mDRpIj.arrayBuffer());
            EXKLdF.groupInviteMessage.jpegThumbnail = pHDm8nz;
          }
        }
      }
    } else if (zuy8jZ(VsxE5Fj, "pin")) {
      ((EXKLdF.pinInChatMessage = {}),
        (EXKLdF.messageContextInfo = {}),
        (EXKLdF.pinInChatMessage.key = VsxE5Fj.pin),
        (EXKLdF.pinInChatMessage.type = VsxE5Fj.type),
        (EXKLdF.pinInChatMessage.senderTimestampMs = U5nau0V("rCajTM").now()),
        (EXKLdF.messageContextInfo.messageAddOnDurationInSecs =
          VsxE5Fj.type === 1 ? VsxE5Fj.time || 86400 : 0));
    } else if (zuy8jZ(VsxE5Fj, "keep")) {
      ((EXKLdF.keepInChatMessage = {}),
        (EXKLdF.keepInChatMessage.key = VsxE5Fj.keep),
        (EXKLdF.keepInChatMessage.keepType = VsxE5Fj.type),
        (EXKLdF.keepInChatMessage.timestampMs = U5nau0V("rCajTM").now()));
    } else if (zuy8jZ(VsxE5Fj, "flowReply")) {
      EXKLdF.interactiveResponseMessage = {
        ["body"]: {
          ["format"]:
            VsxE5Fj.flowReply.format ||
            clKnHk.Message.InteractiveResponseMessage.Body.Format.DEFAULT,
          ["text"]: VsxE5Fj.flowReply.text,
        },
        ["nativeFlowResponseMessage"]: {
          ["name"]: VsxE5Fj.flowReply.name,
          ["paramsJson"]: VsxE5Fj.flowReply.paramsJson || "{}",
          ["version"]: VsxE5Fj.flowReply.version || 1,
        },
      };
    } else if (zuy8jZ(VsxE5Fj, "buttonReply")) {
      switch (VsxE5Fj.type) {
        case "template":
          EXKLdF.templateButtonReplyMessage = {
            ["selectedDisplayText"]: VsxE5Fj.buttonReply.displayText,
            ["selectedId"]: VsxE5Fj.buttonReply.id,
            ["selectedIndex"]: VsxE5Fj.buttonReply.index,
          };
          break;
        case "plain":
          EXKLdF.buttonsResponseMessage = {
            ["selectedButtonId"]: VsxE5Fj.buttonReply.id,
            ["selectedDisplayText"]: VsxE5Fj.buttonReply.displayText,
            ["type"]: clKnHk.Message.ButtonsResponseMessage.Type.DISPLAY_TEXT,
          };
          break;
      }
    } else if (zuy8jZ(VsxE5Fj, "listReply")) {
      EXKLdF.listResponseMessage = {
        ["description"]: VsxE5Fj.listReply.description,
        ["listType"]: clKnHk.Message.ListResponseMessage.ListType.SINGLE_SELECT,
        ["singleSelectReply"]: {
          ["selectedRowId"]: VsxE5Fj.listReply.id,
        },
        ["title"]: VsxE5Fj.listReply.title,
      };
    } else if (mTfbdg8(VsxE5Fj, "ptv") && VsxE5Fj.ptv) {
      const { ["videoMessage"]: _3ybURy } = await ipE4ySA(
        {
          ["video"]: VsxE5Fj.video,
        },
        vXw_Bs,
      );
      EXKLdF.ptvMessage = _3ybURy;
    } else if (zuy8jZ(VsxE5Fj, "product")) {
      EXKLdF.productMessage = await jeMQmH(VsxE5Fj, vXw_Bs);
    } else if (zuy8jZ(VsxE5Fj, "event")) {
      EXKLdF.eventMessage = {};
      const csvPu5 = U5nau0V("HNc0Y9").floor(VsxE5Fj.event.startDate / 1000);
      if (VsxE5Fj.event.call && vXw_Bs.getCallLink) {
        const _IEohR = await vXw_Bs.getCallLink(VsxE5Fj.event.call, {
          ["startTime"]: csvPu5,
        });
        EXKLdF.eventMessage.joinLink =
          (VsxE5Fj.event.call === "audio" ? LZ0ciP : muSB4E) + _IEohR;
      }
      ((EXKLdF.messageContextInfo = {
        ["messageSecret"]:
          VsxE5Fj.event.messageSecret || (0, fWcEK9.randomBytes)(32),
      }),
        (EXKLdF.eventMessage.name = VsxE5Fj.event.name),
        (EXKLdF.eventMessage.description = VsxE5Fj.event.description),
        (EXKLdF.eventMessage.startTime = csvPu5),
        (EXKLdF.eventMessage.endTime = VsxE5Fj.event.endDate
          ? VsxE5Fj.event.endDate / 1000
          : undefined),
        (EXKLdF.eventMessage.isCanceled = VsxE5Fj.event.isCancelled ?? false),
        (EXKLdF.eventMessage.extraGuestsAllowed =
          VsxE5Fj.event.extraGuestsAllowed),
        (EXKLdF.eventMessage.isScheduleCall =
          VsxE5Fj.event.isScheduleCall ?? false),
        (EXKLdF.eventMessage.location = VsxE5Fj.event.location));
    } else if (zuy8jZ(VsxE5Fj, "poll")) {
      ((VsxE5Fj.poll.selectableCount ??= 0),
        (VsxE5Fj.poll.toAnnouncementGroup ??= false));
      if (!U5nau0V("L7Kaqh").isArray(VsxE5Fj.poll.values)) {
        wPGpt0.StarGhostError.throw("Invalid poll values", {
          ["statusCode"]: 400,
        });
      }
      if (
        VsxE5Fj.poll.selectableCount < 0 ||
        VsxE5Fj.poll.selectableCount > VsxE5Fj.poll.values.length
      ) {
        wPGpt0.StarGhostError.throw(
          "poll.selectableCount in poll should be >= 0 and <= " +
            VsxE5Fj.poll.values.length,
          {
            ["statusCode"]: 400,
          },
        );
      }
      const cohPyR = {
        ["name"]: VsxE5Fj.poll.name || "",
        ["selectableOptionsCount"]: VsxE5Fj.poll.selectableCount,
        ["options"]: VsxE5Fj.poll.values.map((VsxE5Fj) => {
          return {
            ["optionName"]: VsxE5Fj,
          };
        }),
        ["pollType"]: JsjK2k7.POLL,
        ["endTime"]: VsxE5Fj.poll.endDate ? VsxE5Fj.poll.endDate : undefined,
        ["hideParticipantName"]: VsxE5Fj.poll.hideVoter ?? false,
        ["allowAddOption"]: VsxE5Fj.poll.canAddOption ?? false,
      };
      if (VsxE5Fj.poll.toAnnouncementGroup) {
        EXKLdF.pollCreationMessageV2 = cohPyR;
      } else if (VsxE5Fj.poll.pollType === 1) {
        if (!VsxE5Fj.poll.correctAnswer) {
          wPGpt0.StarGhostError.throw("No `correctAnswer` provided for quiz", {
            ["statusCode"]: 400,
          });
        }
        EXKLdF.pollCreationMessageV5 = (0, gYSl4Yi.deepMerge)(cohPyR, {
          ["correctAnswer"]: {
            ["optionName"]: VsxE5Fj.poll.correctAnswer.toString(),
          },
          ["pollType"]: 1,
          ["selectableOptionsCount"]: 1,
        });
      } else if (
        VsxE5Fj.poll.endDate ||
        VsxE5Fj.poll.hideVoter ||
        VsxE5Fj.poll.canAddOption
      ) {
        EXKLdF.pollCreationMessageV6 = cohPyR;
      } else if (VsxE5Fj.poll.selectableCount === 1) {
        EXKLdF.pollCreationMessageV3 = cohPyR;
      } else {
        EXKLdF.pollCreationMessage = cohPyR;
      }
      EXKLdF.messageContextInfo = {
        ["messageSecret"]:
          VsxE5Fj.poll.messageSecret || (0, fWcEK9.randomBytes)(32),
      };
    } else if (zuy8jZ(VsxE5Fj, "pollResult")) {
      const YFLvqaW = {
        ["name"]: VsxE5Fj.pollResult.name,
        ["pollVotes"]: VsxE5Fj.pollResult.votes.map((VsxE5Fj) => {
          return {
            ["optionName"]: VsxE5Fj.name,
            ["optionVoteCount"]: U5nau0V("CjPdwN")(VsxE5Fj.voteCount),
          };
        }),
      };
      if (VsxE5Fj.pollResult.pollType === 1) {
        YFLvqaW.pollType = JsjK2k7.QUIZ;
        EXKLdF.pollResultSnapshotMessageV3 = YFLvqaW;
      } else {
        YFLvqaW.pollType = JsjK2k7.POLL;
        EXKLdF.pollResultSnapshotMessage = YFLvqaW;
      }
    } else if (zuy8jZ(VsxE5Fj, "pollUpdate")) {
      if (!VsxE5Fj.pollUpdate.key) {
        wPGpt0.StarGhostError.throw("Message key is required", {
          ["statusCode"]: 400,
        });
      }
      if (!VsxE5Fj.pollUpdate.vote) {
        wPGpt0.StarGhostError.throw("Encrypted vote payload is required", {
          ["statusCode"]: 400,
        });
      }
      EXKLdF.pollUpdateMessage = {
        ["metadata"]: VsxE5Fj.pollUpdate.metadata,
        ["pollCreationMessageKey"]: VsxE5Fj.pollUpdate.key,
        ["senderTimestampMs"]: U5nau0V("rCajTM").now(),
        ["vote"]: VsxE5Fj.pollUpdate.vote,
      };
    } else if (zuy8jZ(VsxE5Fj, "paymentInviteServiceType")) {
      EXKLdF.paymentInviteMessage = {
        ["expiryTimestamp"]: U5nau0V("rCajTM").now(),
        ["serviceType"]: VsxE5Fj.paymentInviteServiceType,
      };
    } else if (zuy8jZ(VsxE5Fj, "orderText")) {
      if (!U5nau0V("Ei_FUxA").isBuffer(VsxE5Fj.thumbnail)) {
        wPGpt0.StarGhostError.throw(
          "Must provide thumbnail buffer in order message",
          {
            ["statusCode"]: 400,
          },
        );
      }
      EXKLdF.orderMessage = {
        ["itemCount"]: 1,
        ["messageVersion"]: 1,
        ["orderTitle"]: wPGpt0.LIBRARY_NAME,
        ["status"]: clKnHk.Message.OrderMessage.OrderStatus.INQUIRY,
        ["surface"]: clKnHk.Message.OrderMessage.OrderSurface.CATALOG,
        ["token"]: (0, gYSl4Yi.generateMessageID)(),
        ["totalAmount1000"]: 1000,
        ["totalCurrencyCode"]: "IDR",
        ...VsxE5Fj,
        ["message"]: VsxE5Fj.orderText,
      };
    } else if (zuy8jZ(VsxE5Fj, "album")) {
      if (U5nau0V("L7Kaqh").isArray(VsxE5Fj.album)) {
        let FDij0K = 0;
        for (let RBrMltb = 0; RBrMltb < VsxE5Fj.album.length; RBrMltb++) {
          if (VsxE5Fj.album[RBrMltb].video) {
            FDij0K++;
          }
        }
        let MTk9YL = 0;
        for (let RBrMltb = 0; RBrMltb < VsxE5Fj.album.length; RBrMltb++) {
          if (VsxE5Fj.album[RBrMltb].image) {
            MTk9YL++;
          }
        }
        if (FDij0K + MTk9YL < 2) {
          wPGpt0.StarGhostError.throw(
            "Minimum provide 2 media to upload album message",
            {
              ["statusCode"]: 400,
            },
          );
        }
        EXKLdF.albumMessage = {
          ["expectedImageCount"]: MTk9YL,
          ["expectedVideoCount"]: FDij0K,
        };
      } else {
        EXKLdF.albumMessage = {
          ["expectedImageCount"]: VsxE5Fj.album.expectedImageCount,
          ["expectedVideoCount"]: VsxE5Fj.album.expectedVideoCount,
        };
      }
    } else if (zuy8jZ(VsxE5Fj, "sharePhoneNumber")) {
      EXKLdF.protocolMessage = {
        ["type"]: NPLdp9.SHARE_PHONE_NUMBER,
      };
    } else if (zuy8jZ(VsxE5Fj, "requestPhoneNumber")) {
      EXKLdF.requestPhoneNumberMessage = {};
    } else if (zuy8jZ(VsxE5Fj, "limitSharing")) {
      EXKLdF.protocolMessage = {
        ["type"]: NPLdp9.LIMIT_SHARING,
        ["limitSharing"]: {
          ["sharingLimited"]: VsxE5Fj.limitSharing === true,
          ["trigger"]: 1,
          ["limitSharingSettingTimestamp"]: U5nau0V("rCajTM").now(),
          ["initiatedByMe"]: true,
        },
      };
    } else if (zuy8jZ(VsxE5Fj, "stickers")) {
      EXKLdF = await UpxerZB(VsxE5Fj, vXw_Bs);
    } else {
      EXKLdF = await ipE4ySA(VsxE5Fj, vXw_Bs);
    }
    if (zuy8jZ(VsxE5Fj, "buttons")) {
      const ES9h4FN = {
        ["buttons"]: VsxE5Fj.buttons.map((VsxE5Fj) => {
          const vXw_Bs = VsxE5Fj.text || VsxE5Fj.buttonText;
          if (mTfbdg8(VsxE5Fj, "sections")) {
            return {
              ["nativeFlowInfo"]: {
                ["name"]: "single_select",
                ["paramsJson"]: U5nau0V("eVzL0wj").stringify({
                  ["title"]: vXw_Bs,
                  ["sections"]: VsxE5Fj.sections,
                }),
              },
              ["type"]: T_krEeb.NATIVE_FLOW,
            };
          } else if (mTfbdg8(VsxE5Fj, "name")) {
            return {
              ["nativeFlowInfo"]: {
                ["name"]: VsxE5Fj.name,
                ["paramsJson"]: VsxE5Fj.paramsJson,
              },
              ["type"]: T_krEeb.NATIVE_FLOW,
            };
          }
          return {
            ["buttonId"]: VsxE5Fj.id || VsxE5Fj.buttonId,
            ["buttonText"]:
              typeof vXw_Bs === "string"
                ? {
                    ["displayText"]: vXw_Bs,
                  }
                : vXw_Bs,
            ["type"]: VsxE5Fj.type || T_krEeb.RESPONSE,
          };
        }),
      };
      if (mTfbdg8(VsxE5Fj, "text")) {
        ((ES9h4FN.contentText = VsxE5Fj.text),
          (ES9h4FN.headerType = jz9e9j.EMPTY));
      } else {
        if (mTfbdg8(VsxE5Fj, "caption")) {
          ES9h4FN.contentText = VsxE5Fj.caption;
        }
        const Me2VKfA = U5nau0V("hYVFDcK")
          .keys(EXKLdF)[0]
          .replace("Message", "")
          .toUpperCase();
        ((ES9h4FN.headerType = jz9e9j[Me2VKfA]),
          U5nau0V("hYVFDcK").assign(ES9h4FN, EXKLdF));
      }
      if (mTfbdg8(VsxE5Fj, "footer")) {
        ES9h4FN.footerText = VsxE5Fj.footer;
      }
      EXKLdF = {
        ["buttonsMessage"]: clKnHk.Message.ButtonsMessage.create(ES9h4FN),
      };
    } else if (zuy8jZ(VsxE5Fj, "sections")) {
      const kltDeSw = {
        ["sections"]: VsxE5Fj.sections,
        ["buttonText"]: VsxE5Fj.buttonText,
        ["title"]: VsxE5Fj.title,
        ["footerText"]: VsxE5Fj.footer,
        ["description"]: VsxE5Fj.text,
        ["listType"]: TAlLsD.SINGLE_SELECT,
      };
      EXKLdF = {
        ["listMessage"]: clKnHk.Message.ListMessage.create(kltDeSw),
      };
    } else if (zuy8jZ(VsxE5Fj, "templateButtons")) {
      const nibkQ_ = {
        ["hydratedButtons"]: VsxE5Fj.templateButtons.map((...VsxE5Fj) => {
          VsxE5Fj.length = 2;
          const vXw_Bs = VsxE5Fj[0].text || VsxE5Fj[0].buttonText;
          if (mTfbdg8(VsxE5Fj[0], "id")) {
            return {
              ["index"]: VsxE5Fj[1],
              ["quickReplyButton"]: {
                ["displayText"]: vXw_Bs || "👉🏻 Click",
                ["id"]: VsxE5Fj[0].id,
              },
            };
          } else if (mTfbdg8(VsxE5Fj[0], "url")) {
            return {
              ["index"]: VsxE5Fj[1],
              ["urlButton"]: {
                ["displayText"]: vXw_Bs || "🌐 Visit",
                ["url"]: VsxE5Fj[0].url,
              },
            };
          } else if (mTfbdg8(VsxE5Fj[0], "call")) {
            return {
              ["index"]: VsxE5Fj[1],
              ["callButton"]: {
                ["displayText"]: vXw_Bs || "📞 Call",
                ["phoneNumber"]: VsxE5Fj[0].call,
              },
            };
          }
          VsxE5Fj[0].index = VsxE5Fj[0].index || VsxE5Fj[1];
          return VsxE5Fj[0];
        }),
      };
      if (mTfbdg8(VsxE5Fj, "text")) {
        nibkQ_.hydratedContentText = VsxE5Fj.text;
      } else {
        if (mTfbdg8(VsxE5Fj, "caption")) {
          ((nibkQ_.hydratedTitleText = VsxE5Fj.title),
            (nibkQ_.hydratedContentText = VsxE5Fj.caption));
        }
        U5nau0V("hYVFDcK").assign(nibkQ_, EXKLdF);
      }
      if (mTfbdg8(VsxE5Fj, "footer")) {
        nibkQ_.hydratedFooterText = VsxE5Fj.footer;
      }
      ((nibkQ_.templateId =
        VsxE5Fj.id || "template-" + U5nau0V("rCajTM").now()),
        (EXKLdF = {
          ["templateMessage"]: clKnHk.Message.TemplateMessage.create({
            ["hydratedFourRowTemplate"]: nibkQ_,
            ["hydratedTemplate"]: nibkQ_,
          }),
        }));
    } else if (zuy8jZ(VsxE5Fj, "nativeFlow")) {
      const jEa7X1t = {
        ["nativeFlowMessage"]: OImarh(VsxE5Fj),
      };
      if (mTfbdg8(VsxE5Fj, "bizJid")) {
        jEa7X1t.collectionMessage = {
          ["bizJid"]: VsxE5Fj.bizJid,
          ["id"]: VsxE5Fj.id,
          ["messageVersion"]: 1,
        };
      } else if (mTfbdg8(VsxE5Fj, "shopSurface")) {
        jEa7X1t.shopStorefrontMessage = {
          ["surface"]: VsxE5Fj.shopSurface,
          ["id"]: VsxE5Fj.id,
          ["messageVersion"]: 1,
        };
      }
      if (mTfbdg8(VsxE5Fj, "text")) {
        jEa7X1t.body = {
          ["text"]: VsxE5Fj.text,
        };
      } else {
        if (mTfbdg8(VsxE5Fj, "caption")) {
          const Z76Z4H5 = SezNaK(EXKLdF);
          if (Z76Z4H5) {
            jEa7X1t.header = {
              ["title"]: VsxE5Fj.title,
              ["subtitle"]: VsxE5Fj.subtitle,
              ["hasMediaAttachment"]: true,
            };
          }
          jEa7X1t.body = {
            ["text"]: VsxE5Fj.caption,
          };
        }
        if (mTfbdg8(VsxE5Fj, "jpegThumbnail") && !!VsxE5Fj.jpegThumbnail) {
          jEa7X1t.jpegThumbnail = VsxE5Fj.jpegThumbnail;
        }
        U5nau0V("hYVFDcK").assign(jEa7X1t.header, EXKLdF);
      }
      if (mTfbdg8(VsxE5Fj, "audioFooter")) {
        const { ["audioMessage"]: uCNvXS } = await ipE4ySA(
          {
            ["audio"]: VsxE5Fj.audioFooter,
            ["mimetype"]: VsxE5Fj.mimetype,
            ["ptt"]: VsxE5Fj.ptt,
          },
          vXw_Bs,
        );
        jEa7X1t.footer = {
          ["audioMessage"]: uCNvXS,
          ["hasMediaAttachment"]: true,
        };
      } else if (mTfbdg8(VsxE5Fj, "footer")) {
        jEa7X1t.footer = {
          ["text"]: VsxE5Fj.footer,
        };
      }
      if (mTfbdg8(VsxE5Fj, "components")) {
        jEa7X1t.bloksWidget = psMii8L(VsxE5Fj);
      }
      EXKLdF = {
        ["interactiveMessage"]:
          clKnHk.Message.InteractiveMessage.create(jEa7X1t),
      };
    } else if (zuy8jZ(VsxE5Fj, "cards")) {
      const jEa7X1t = {
        ["carouselMessage"]: {
          ["cards"]: await U5nau0V("bOAjM9S").all(
            VsxE5Fj.cards.map(async (VsxE5Fj) => {
              let EXKLdF = {};
              if (zuy8jZ(VsxE5Fj, "product")) {
                EXKLdF.productMessage = await jeMQmH(VsxE5Fj, vXw_Bs);
              } else {
                EXKLdF = await ipE4ySA(VsxE5Fj, vXw_Bs).catch(() => {
                  return {};
                });
              }
              const DnAM7Cm = l6zwlsK(EXKLdF);
              if (!DnAM7Cm) {
                wPGpt0.StarGhostError.throw(
                  "Invalid media type for carousel card",
                  {
                    ["statusCode"]: 400,
                  },
                );
              }
              const tlniXVB = {
                ["nativeFlowMessage"]: OImarh(
                  VsxE5Fj.nativeFlow ? VsxE5Fj : [],
                ),
              };
              if (mTfbdg8(VsxE5Fj, "text")) {
                tlniXVB.body = {
                  ["text"]: VsxE5Fj.text,
                };
              } else {
                if (mTfbdg8(VsxE5Fj, "caption")) {
                  ((tlniXVB.header = {
                    ["title"]: VsxE5Fj.title,
                    ["subtitle"]: VsxE5Fj.subtitle,
                    ["hasMediaAttachment"]: true,
                  }),
                    (tlniXVB.body = {
                      ["text"]: VsxE5Fj.caption,
                    }));
                }
                if (
                  mTfbdg8(VsxE5Fj, "jpegThumbnail") &&
                  !!VsxE5Fj.jpegThumbnail
                ) {
                  tlniXVB.jpegThumbnail = VsxE5Fj.jpegThumbnail;
                }
                U5nau0V("hYVFDcK").assign(tlniXVB.header, EXKLdF);
              }
              if (mTfbdg8(VsxE5Fj, "audioFooter")) {
                const { ["audioMessage"]: ezYsVbm } = await ipE4ySA(
                  {
                    ["audio"]: VsxE5Fj.audioFooter,
                    ["mimetype"]: VsxE5Fj.mimetype,
                    ["ptt"]: VsxE5Fj.ptt,
                  },
                  vXw_Bs,
                );
                tlniXVB.footer = {
                  ["audioMessage"]: ezYsVbm,
                  ["hasMediaAttachment"]: true,
                };
              } else if (mTfbdg8(VsxE5Fj, "footer")) {
                tlniXVB.footer = {
                  ["text"]: VsxE5Fj.footer,
                };
              }
              if (mTfbdg8(VsxE5Fj, "components")) {
                tlniXVB.bloksWidget = psMii8L(VsxE5Fj);
              }
              return clKnHk.Message.InteractiveMessage.create(tlniXVB);
            }),
          ),
          ["carouselCardType"]: tPFzvUC.UNKNOWN,
          ["messageVersion"]: 1,
        },
      };
      if (mTfbdg8(VsxE5Fj, "text")) {
        jEa7X1t.body = {
          ["text"]: VsxE5Fj.text,
        };
      }
      if (mTfbdg8(VsxE5Fj, "footer")) {
        jEa7X1t.footer = {
          ["text"]: VsxE5Fj.footer,
        };
      }
      EXKLdF = {
        ["interactiveMessage"]:
          clKnHk.Message.InteractiveMessage.create(jEa7X1t),
      };
    } else if (zuy8jZ(VsxE5Fj, "requestPaymentFrom")) {
      const qlY39da = {
        ["amount"]: {
          ["currencyCode"]: "IDR",
          ["offset"]: 1000,
          ["value"]: 1000,
        },
        ["amount1000"]: 1000,
        ["currencyCodeIso4217"]: "IDR",
        ["expiryTimestamp"]: U5nau0V("rCajTM").now(),
        ["noteMessage"]: EXKLdF,
        ["requestFrom"]: VsxE5Fj.requestPaymentFrom,
        ...VsxE5Fj,
      };
      (zuy8jZ(EXKLdF, "extendedTextMessage") || zuy8jZ(EXKLdF, "stickerMessage")
        ? U5nau0V("hYVFDcK").assign(qlY39da.noteMessage, EXKLdF)
        : wPGpt0.StarGhostError.throw(
            "Invalid message type for request payment note message",
            {
              ["statusCode"]: 400,
            },
          ),
        (EXKLdF = {
          ["requestPaymentMessage"]: qlY39da,
        }));
    } else if (zuy8jZ(VsxE5Fj, "invoiceNote")) {
      const b_pfw8r = EXKLdF.imageMessage || EXKLdF.documentMessage;
      const Me2VKfA = U5nau0V("hYVFDcK")
        .keys(EXKLdF)[0]
        .replace("Message", "")
        .toUpperCase();
      const tTCQEBt = {
        ["attachmentType"]:
          clKnHk.Message.InvoiceMessage.AttachmentType[
            Me2VKfA === "DOCUMENT" ? "PDF" : "IMAGE"
          ],
        ["note"]: VsxE5Fj.invoiceNote,
      };
      if (b_pfw8r) {
        const {
          ["directPath"]: kLr3tG,
          ["fileEncSha256"]: I2ETOg,
          ["fileSha256"]: htbmBhz,
          ["jpegThumbnail"]: HF9XwAi = undefined,
          ["mediaKey"]: OzsqUsG,
          ["mediaKeyTimestamp"]: neVxOt,
          ["mimetype"]: pJq23Eb,
        } = b_pfw8r;
        U5nau0V("hYVFDcK").assign(tTCQEBt, {
          ["attachmentDirectPath"]: kLr3tG,
          ["attachmentFileEncSha256"]: I2ETOg,
          ["attachmentFileSha256"]: htbmBhz,
          ["attachmentJpegThumbnail"]: HF9XwAi,
          ["attachmentMediaKey"]: OzsqUsG,
          ["attachmentMediaKeyTimestamp"]: neVxOt,
          ["attachmentMimetype"]: pJq23Eb,
          ["token"]: (0, gYSl4Yi.generateMessageID)(),
        });
      } else {
        wPGpt0.StarGhostError.throw("Invalid media type for invoice message", {
          ["statusCode"]: 400,
        });
      }
      EXKLdF = {
        ["invoiceMessage"]: tTCQEBt,
      };
    }
    if (mTfbdg8(VsxE5Fj, "externalAdReply") && !!VsxE5Fj.externalAdReply) {
      const ie0mZJ = U5nau0V("hYVFDcK").keys(EXKLdF)[0];
      const zzqN7Iz = EXKLdF[ie0mZJ];
      const KrADmb = VsxE5Fj.externalAdReply;
      if (
        "thumbnail" in KrADmb &&
        !U5nau0V("Ei_FUxA").isBuffer(KrADmb.thumbnail)
      ) {
        wPGpt0.StarGhostError.throw("Thumbnail must in buffer type", {
          ["statusCode"]: 400,
        });
      }
      if (!KrADmb.url || typeof KrADmb.url !== "string") {
        KrADmb.url = wPGpt0.DONATE_URL;
      }
      const bIVF6x = {
        ...KrADmb,
        ["body"]: KrADmb.body,
        ["mediaType"]: KrADmb.mediaType || 1,
        ["mediaUrl"]: KrADmb.url,
        ["renderLargerThumbnail"]: KrADmb.largeThumbnail,
        ["sourceUrl"]: KrADmb.url,
        ["thumbnail"]: KrADmb.thumbnail,
        ["thumbnailUrl"]: KrADmb.url + "?update=" + U5nau0V("rCajTM").now(),
        ["title"]: KrADmb.title || wPGpt0.LIBRARY_NAME,
      };
      if ("contextInfo" in zzqN7Iz && !!zzqN7Iz.contextInfo) {
        zzqN7Iz.contextInfo.externalAdReply = {
          ...zzqN7Iz.contextInfo.externalAdReply,
          ...bIVF6x,
        };
      } else if (zzqN7Iz) {
        zzqN7Iz.contextInfo = {
          ["externalAdReply"]: bIVF6x,
        };
      }
    }
    if (
      (mTfbdg8(VsxE5Fj, "mentions") && VsxE5Fj.mentions?.length) ||
      (mTfbdg8(VsxE5Fj, "mentionAll") && VsxE5Fj.mentionAll)
    ) {
      const ie0mZJ = U5nau0V("hYVFDcK").keys(EXKLdF)[0];
      const zzqN7Iz = EXKLdF[ie0mZJ];
      if (zzqN7Iz && "contextInfo" in zzqN7Iz) {
        zzqN7Iz.contextInfo = zzqN7Iz.contextInfo || {};
        if (VsxE5Fj.mentions?.length) {
          zzqN7Iz.contextInfo.mentionedJid = VsxE5Fj.mentions;
        }
        if (VsxE5Fj.mentionAll) {
          zzqN7Iz.contextInfo.nonJidMentions = 1;
        }
      } else if (zzqN7Iz) {
        zzqN7Iz.contextInfo = {
          ["mentionedJid"]: VsxE5Fj.mentions,
          ["nonJidMentions"]: VsxE5Fj.mentionAll ? 1 : 0,
        };
      }
    }
    if (mTfbdg8(VsxE5Fj, "contextInfo") && !!VsxE5Fj.contextInfo) {
      const ie0mZJ = U5nau0V("hYVFDcK").keys(EXKLdF)[0];
      const zzqN7Iz = EXKLdF[ie0mZJ];
      if ("contextInfo" in zzqN7Iz && !!zzqN7Iz.contextInfo) {
        zzqN7Iz.contextInfo = (0, gYSl4Yi.deepMerge)(
          (zzqN7Iz.contextInfo ??= {}),
          VsxE5Fj.contextInfo,
        );
      } else if (zzqN7Iz) {
        zzqN7Iz.contextInfo = VsxE5Fj.contextInfo;
      }
    }
    if (mTfbdg8(VsxE5Fj, "asTemplate") && !!VsxE5Fj.asTemplate) {
      if (!EXKLdF.interactiveMessage) {
        wPGpt0.StarGhostError.throw("Invalid message type for template", {
          ["statusCode"]: 400,
        });
      }
      EXKLdF = {
        ["templateMessage"]: {
          ["interactiveMessageTemplate"]: EXKLdF.interactiveMessage,
          ["templateId"]: VsxE5Fj.id || "template-" + U5nau0V("rCajTM").now(),
        },
      };
    }
    if (mTfbdg8(VsxE5Fj, "groupStatus") && !!VsxE5Fj.groupStatus) {
      const ie0mZJ = U5nau0V("hYVFDcK").keys(EXKLdF)[0];
      const zzqN7Iz = EXKLdF[ie0mZJ];
      if (zzqN7Iz && "contextInfo" in zzqN7Iz) {
        ((zzqN7Iz.contextInfo = zzqN7Iz.contextInfo || {}),
          (zzqN7Iz.contextInfo.isGroupStatus = true));
      } else if (zzqN7Iz) {
        zzqN7Iz.contextInfo = {
          ["isGroupStatus"]: true,
        };
      }
      if (ie0mZJ !== "audioMessage") {
        EXKLdF = {
          ["groupStatusMessageV2"]: {
            ["message"]: EXKLdF,
          },
        };
      }
    }
    if (mTfbdg8(VsxE5Fj, "spoiler") && !!VsxE5Fj.spoiler) {
      const ie0mZJ = U5nau0V("hYVFDcK").keys(EXKLdF)[0];
      const zzqN7Iz = EXKLdF[ie0mZJ];
      if ("contextInfo" in zzqN7Iz && !!zzqN7Iz.contextInfo) {
        zzqN7Iz.contextInfo.isSpoiler = VsxE5Fj.spoiler;
      } else if (zzqN7Iz) {
        zzqN7Iz.contextInfo = {
          ["isSpoiler"]: VsxE5Fj.spoiler,
        };
      }
      EXKLdF = {
        ["spoilerMessage"]: {
          ["message"]: EXKLdF,
        },
      };
    }
    if (mTfbdg8(VsxE5Fj, "ephemeral") && !!VsxE5Fj.ephemeral) {
      EXKLdF = {
        ["ephemeralMessage"]: {
          ["message"]: EXKLdF,
        },
      };
    }
    if (mTfbdg8(VsxE5Fj, "isLottie") && !!VsxE5Fj.isLottie) {
      EXKLdF = {
        ["lottieStickerMessage"]: {
          ["message"]: EXKLdF,
        },
      };
    }
    if (mTfbdg8(VsxE5Fj, "viewOnce") && !!VsxE5Fj.viewOnce) {
      EXKLdF = {
        ["viewOnceMessage"]: {
          ["message"]: EXKLdF,
        },
      };
    }
    if (mTfbdg8(VsxE5Fj, "viewOnceV2") && !!VsxE5Fj.viewOnceV2) {
      ((EXKLdF.viewOnce = true),
        (EXKLdF = {
          ["viewOnceMessageV2"]: {
            ["message"]: EXKLdF,
          },
        }));
    }
    if (
      mTfbdg8(VsxE5Fj, "viewOnceV2Extension") &&
      !!VsxE5Fj.viewOnceV2Extension
    ) {
      ((EXKLdF.viewOnce = true),
        (EXKLdF = {
          ["viewOnceMessageV2Extension"]: {
            ["message"]: EXKLdF,
          },
        }));
    }
    if (mTfbdg8(VsxE5Fj, "edit")) {
      let t7Xk2q = VsxE5Fj.edit;
      if (t7Xk2q && typeof t7Xk2q === "object") {
        t7Xk2q = {
          ...t7Xk2q,
          ["fromMe"]: t7Xk2q.fromMe ?? true,
          ["remoteJid"]: t7Xk2q.remoteJid ?? vXw_Bs?.jid,
        };
      }
      EXKLdF = {
        ["protocolMessage"]: {
          ["key"]: t7Xk2q,
          ["editedMessage"]: EXKLdF,
          ["timestampMs"]: U5nau0V("rCajTM").now(),
          ["type"]: NPLdp9.MESSAGE_EDIT,
        },
      };
    }
    if (mTfbdg8(VsxE5Fj, "albumParentKey") && !!VsxE5Fj.albumParentKey) {
      EXKLdF.messageContextInfo = (0, gYSl4Yi.deepMerge)(
        (EXKLdF.messageContextInfo ??= {}),
        {
          ["messageAssociation"]: {
            ["associationType"]: a074QtB.MEDIA_ALBUM,
            ["parentMessageKey"]: VsxE5Fj.albumParentKey,
          },
        },
      );
    }
    if (AGkxLyg(EXKLdF)) {
      EXKLdF.messageContextInfo = EXKLdF.messageContextInfo || {};
      if (!EXKLdF.messageContextInfo.messageSecret) {
        EXKLdF.messageContextInfo.messageSecret = (0, fWcEK9.randomBytes)(32);
      }
    }
    return EXKLdF;
  };
  const htbmBhz = (...VsxE5Fj) => {
    VsxE5Fj.length = 3;
    if (mTfbdg8(VsxE5Fj[2], "contextInfo") && !!VsxE5Fj[2].contextInfo) {
      const vXw_Bs = U5nau0V("hYVFDcK").keys(VsxE5Fj[1])[0];
      const LZ0ciP = VsxE5Fj[1][vXw_Bs];
      if ("contextInfo" in LZ0ciP && !!LZ0ciP.contextInfo) {
        LZ0ciP.contextInfo = (0, gYSl4Yi.deepMerge)(
          (LZ0ciP.contextInfo ??= {}),
          VsxE5Fj[2].contextInfo,
        );
      } else if (LZ0ciP) {
        LZ0ciP.contextInfo = VsxE5Fj[2].contextInfo;
      }
    }
    if (
      (mTfbdg8(VsxE5Fj[2], "mentions") && VsxE5Fj[2].mentions?.length) ||
      (mTfbdg8(VsxE5Fj[2], "mentionAll") && VsxE5Fj[2].mentionAll)
    ) {
      const vXw_Bs = U5nau0V("hYVFDcK").keys(VsxE5Fj[1])[0];
      const LZ0ciP = VsxE5Fj[1][vXw_Bs];
      if (LZ0ciP && "contextInfo" in LZ0ciP) {
        LZ0ciP.contextInfo = LZ0ciP.contextInfo || {};
        if (VsxE5Fj[2].mentions?.length) {
          LZ0ciP.contextInfo.mentionedJid = VsxE5Fj[2].mentions;
        }
        if (VsxE5Fj[2].mentionAll) {
          LZ0ciP.contextInfo.nonJidMentions = 1;
        }
      } else if (LZ0ciP) {
        LZ0ciP.contextInfo = {
          ["mentionedJid"]: VsxE5Fj[2].mentions,
          ["nonJidMentions"]: VsxE5Fj[2].mentionAll ? 1 : 0,
        };
      }
    }
    if (mTfbdg8(VsxE5Fj[2], "asTemplate") && !!VsxE5Fj[2].asTemplate) {
      if (!VsxE5Fj[1].interactiveMessage) {
        wPGpt0.StarGhostError.throw("Invalid message type for template", {
          ["statusCode"]: 400,
        });
      }
      VsxE5Fj[1] = {
        ["templateMessage"]: {
          ["interactiveMessageTemplate"]: VsxE5Fj[1].interactiveMessage,
          ["templateId"]:
            VsxE5Fj[2].id || "template-" + U5nau0V("rCajTM").now(),
        },
      };
    }
    if (mTfbdg8(VsxE5Fj[2], "groupStatus") && !!VsxE5Fj[2].groupStatus) {
      const vXw_Bs = U5nau0V("hYVFDcK").keys(VsxE5Fj[1])[0];
      const LZ0ciP = VsxE5Fj[1][vXw_Bs];
      if (LZ0ciP && "contextInfo" in LZ0ciP) {
        ((LZ0ciP.contextInfo = LZ0ciP.contextInfo || {}),
          (LZ0ciP.contextInfo.isGroupStatus = true));
      } else if (LZ0ciP) {
        LZ0ciP.contextInfo = {
          ["isGroupStatus"]: true,
        };
      }
      if (vXw_Bs !== "audioMessage") {
        VsxE5Fj[1] = {
          ["groupStatusMessageV2"]: {
            ["message"]: VsxE5Fj[1],
          },
        };
      }
    }
    if (mTfbdg8(VsxE5Fj[2], "isLottie") && !!VsxE5Fj[2].isLottie) {
      VsxE5Fj[1] = {
        ["lottieStickerMessage"]: {
          ["message"]: VsxE5Fj[1],
        },
      };
    }
    if (mTfbdg8(VsxE5Fj[2], "viewOnce") && !!VsxE5Fj[2].viewOnce) {
      VsxE5Fj[1] = {
        ["viewOnceMessage"]: {
          ["message"]: VsxE5Fj[1],
        },
      };
    }
    if (AGkxLyg(VsxE5Fj[1])) {
      VsxE5Fj[1].messageContextInfo = VsxE5Fj[1].messageContextInfo || {};
      if (!VsxE5Fj[1].messageContextInfo.messageSecret) {
        VsxE5Fj[1].messageContextInfo.messageSecret = (0, fWcEK9.randomBytes)(
          32,
        );
      }
    }
    return HF9XwAi(VsxE5Fj[0], VsxE5Fj[1], VsxE5Fj[2]);
  };
  const HF9XwAi = (VsxE5Fj, vXw_Bs, LZ0ciP = {}) => {
    if (!LZ0ciP.timestamp) {
      LZ0ciP.timestamp = new (U5nau0V("rCajTM"))();
    }
    const muSB4E = cohPyR(VsxE5Fj);
    const EXKLdF = pJq23Eb(vXw_Bs);
    const DnAM7Cm = NUqNTA(EXKLdF);
    const tlniXVB = ES9h4FN(LZ0ciP.timestamp);
    const { ["quoted"]: ezYsVbm, ["userJid"]: miQNxTJ } = LZ0ciP;
    if (ezYsVbm) {
      const O35BkxR = ezYsVbm.key.fromMe
        ? miQNxTJ
        : ezYsVbm.participant ||
          ezYsVbm.key.participant ||
          ezYsVbm.key.remoteJid;
      let dPTV6Z = pJq23Eb(ezYsVbm.message);
      const mDRpIj = NUqNTA(dPTV6Z);
      dPTV6Z = clKnHk.Message.create({
        [mDRpIj]: dPTV6Z[mDRpIj],
      });
      const pHDm8nz = dPTV6Z[mDRpIj];
      if (typeof pHDm8nz === "object" && pHDm8nz && "contextInfo" in pHDm8nz) {
        delete pHDm8nz.contextInfo;
      }
      const _3ybURy =
        ("contextInfo" in EXKLdF[DnAM7Cm] && EXKLdF[DnAM7Cm]?.contextInfo) ||
        {};
      ((_3ybURy.participant = (0, gYSl4Yi.normalizeJid)(O35BkxR)),
        (_3ybURy.stanzaId = ezYsVbm.key.id),
        (_3ybURy.quotedMessage = dPTV6Z));
      if (VsxE5Fj !== ezYsVbm.key.remoteJid) {
        _3ybURy.remoteJid = ezYsVbm.key.remoteJid;
      }
      if (_3ybURy && EXKLdF[DnAM7Cm]) {
        EXKLdF[DnAM7Cm].contextInfo = _3ybURy;
      }
    }
    if (
      !!LZ0ciP.ephemeralExpiration &&
      DnAM7Cm !== "protocolMessage" &&
      DnAM7Cm !== "ephemeralMessage" &&
      !muSB4E
    ) {
      EXKLdF[DnAM7Cm].contextInfo = (0, gYSl4Yi.deepMerge)(
        EXKLdF[DnAM7Cm].contextInfo || {},
        {
          ["expiration"]: LZ0ciP.ephemeralExpiration || BPY95c,
        },
      );
    }
    vXw_Bs = clKnHk.Message.create(vXw_Bs);
    const csvPu5 = {
      ["key"]: {
        ["remoteJid"]: VsxE5Fj,
        ["fromMe"]: true,
        ["id"]: LZ0ciP.messageId || (0, gYSl4Yi.generateMessageID)(),
      },
      ["message"]: vXw_Bs,
      ["messageTimestamp"]: tlniXVB,
      ["messageStubParameters"]: [],
      ["participant"]:
        _IEohR(VsxE5Fj) || YFLvqaW(VsxE5Fj) ? miQNxTJ : undefined,
      ["status"]: kltDeSw.PENDING,
    };
    return clKnHk.WebMessageInfo.fromObject(csvPu5);
  };
  const OzsqUsG = async (VsxE5Fj, vXw_Bs, LZ0ciP = {}) => {
    if (VsxE5Fj) {
      LZ0ciP.jid = VsxE5Fj;
    }
    LZ0ciP.logger = LZ0ciP.logger?.child({
      ["msgId"]: LZ0ciP.messageId,
    });
    return HF9XwAi(VsxE5Fj, await I2ETOg(vXw_Bs, LZ0ciP), LZ0ciP);
  };
  const neVxOt = (VsxE5Fj) => {
    return (
      VsxE5Fj?.associatedChildMessage ||
      VsxE5Fj?.botForwardedMessage ||
      VsxE5Fj?.botInvokeMessage ||
      VsxE5Fj?.botTaskMessage ||
      VsxE5Fj?.documentWithCaptionMessage ||
      VsxE5Fj?.editedMessage ||
      VsxE5Fj?.ephemeralMessage ||
      VsxE5Fj?.eventCoverImage ||
      VsxE5Fj?.groupMentionedMessage ||
      VsxE5Fj?.groupStatusMentionMessage ||
      VsxE5Fj?.groupStatusMessage ||
      VsxE5Fj?.groupStatusMessageV2 ||
      VsxE5Fj?.limitSharingMessage ||
      VsxE5Fj?.lottieStickerMessage ||
      VsxE5Fj?.newsletterAdminProfileMessage ||
      VsxE5Fj?.newsletterAdminProfileMessageV2 ||
      VsxE5Fj?.newsletterAdminProfileStatusMessage ||
      VsxE5Fj?.pollCreationMessageV4 ||
      VsxE5Fj?.pollCreationOptionImageMessage ||
      VsxE5Fj?.questionMessage ||
      VsxE5Fj?.questionReplyMessage ||
      VsxE5Fj?.spoilerMessage ||
      VsxE5Fj?.statusAddYours ||
      VsxE5Fj?.statusMentionMessage ||
      VsxE5Fj?.viewOnceMessage ||
      VsxE5Fj?.viewOnceMessageV2 ||
      VsxE5Fj?.viewOnceMessageV2Extension
    );
  };
  const pJq23Eb = (...VsxE5Fj) => {
    VsxE5Fj.length = 1;
    if (!VsxE5Fj[0]) {
      return undefined;
    }
    for (let vXw_Bs = 0; vXw_Bs < 5; vXw_Bs++) {
      const LZ0ciP = neVxOt(VsxE5Fj[0]);
      if (!LZ0ciP) {
        break;
      }
      VsxE5Fj[0] = LZ0ciP.message;
    }
    return VsxE5Fj[0];
  };
  const ie0mZJ = (
    VsxE5Fj,
    {
      ["pollEncKey"]: vXw_Bs,
      ["pollCreationMsgKey"]: LZ0ciP,
      ["voteMsgKey"]: muSB4E,
      ["meId"]: EXKLdF,
      ["meLid"]: tlniXVB,
    },
  ) => {
    const ezYsVbm = (0, gYSl4Yi.normalizeJid)(EXKLdF);
    const miQNxTJ = tlniXVB ? (0, gYSl4Yi.normalizeJid)(tlniXVB) : undefined;
    const NUqNTA = mDRpIj(LZ0ciP, ezYsVbm);
    const O35BkxR =
      LZ0ciP.fromMe && miQNxTJ
        ? miQNxTJ
        : LZ0ciP.participant && FDij0K(LZ0ciP.participant)
          ? (0, gYSl4Yi.normalizeJid)(LZ0ciP.participant)
          : LZ0ciP.participantAlt && FDij0K(LZ0ciP.participantAlt)
            ? (0, gYSl4Yi.normalizeJid)(LZ0ciP.participantAlt)
            : LZ0ciP.remoteJid && FDij0K(LZ0ciP.remoteJid)
              ? (0, gYSl4Yi.normalizeJid)(LZ0ciP.remoteJid)
              : LZ0ciP.remoteJidAlt && FDij0K(LZ0ciP.remoteJidAlt)
                ? (0, gYSl4Yi.normalizeJid)(LZ0ciP.remoteJidAlt)
                : undefined;
    const dPTV6Z = [NUqNTA];
    if (O35BkxR && O35BkxR !== NUqNTA) {
      dPTV6Z.push(O35BkxR);
    }
    const pHDm8nz = mDRpIj(muSB4E, ezYsVbm);
    const _3ybURy =
      muSB4E.fromMe && miQNxTJ
        ? miQNxTJ
        : muSB4E.participant && FDij0K(muSB4E.participant)
          ? (0, gYSl4Yi.normalizeJid)(muSB4E.participant)
          : muSB4E.participantAlt && FDij0K(muSB4E.participantAlt)
            ? (0, gYSl4Yi.normalizeJid)(muSB4E.participantAlt)
            : muSB4E.remoteJid && FDij0K(muSB4E.remoteJid)
              ? (0, gYSl4Yi.normalizeJid)(muSB4E.remoteJid)
              : muSB4E.remoteJidAlt && FDij0K(muSB4E.remoteJidAlt)
                ? (0, gYSl4Yi.normalizeJid)(muSB4E.remoteJidAlt)
                : undefined;
    const csvPu5 = [pHDm8nz];
    if (_3ybURy && _3ybURy !== pHDm8nz) {
      csvPu5.push(_3ybURy);
    }
    for (const _IEohR of dPTV6Z) {
      for (const cohPyR of csvPu5) {
        try {
          return DnAM7Cm(VsxE5Fj, {
            ["pollEncKey"]: vXw_Bs,
            ["pollCreatorJid"]: _IEohR,
            ["pollMsgId"]: LZ0ciP.id,
            ["voterJid"]: cohPyR,
          });
        } catch {}
      }
    }
    return undefined;
  };
  const zzqN7Iz = (VsxE5Fj) => {
    return U5nau0V("Ei_FUxA").from(VsxE5Fj);
  };
  const KrADmb = (
    { ["encPayload"]: VsxE5Fj, ["encIv"]: vXw_Bs },
    {
      ["originalSenderJid"]: LZ0ciP,
      ["originalMsgId"]: muSB4E,
      ["editEncKey"]: DnAM7Cm,
      ["editorJid"]: tlniXVB,
    },
  ) => {
    const ezYsVbm = U5nau0V("Ei_FUxA").concat([
      zzqN7Iz(muSB4E),
      zzqN7Iz(LZ0ciP),
      zzqN7Iz(tlniXVB),
      zzqN7Iz("Message Edit"),
      new (U5nau0V("yGvBLdb"))([1]),
    ]);
    const miQNxTJ = csvPu5(DnAM7Cm, new (U5nau0V("yGvBLdb"))(32), "sha256");
    const NUqNTA = csvPu5(ezYsVbm, miQNxTJ, "sha256");
    const O35BkxR = U5nau0V("Ei_FUxA").alloc(0);
    const dPTV6Z = EXKLdF(VsxE5Fj, NUqNTA, vXw_Bs, O35BkxR);
    return clKnHk.Message.decode(dPTV6Z);
  };
  const bIVF6x = (
    { ["encPayload"]: VsxE5Fj, ["encIv"]: vXw_Bs },
    {
      ["editEncKey"]: LZ0ciP,
      ["parentMsgKey"]: muSB4E,
      ["editMsgKey"]: EXKLdF,
      ["meId"]: DnAM7Cm,
      ["meLid"]: tlniXVB,
    },
  ) => {
    const ezYsVbm = (0, gYSl4Yi.normalizeJid)(DnAM7Cm);
    const miQNxTJ = tlniXVB ? (0, gYSl4Yi.normalizeJid)(tlniXVB) : undefined;
    const NUqNTA = mDRpIj(muSB4E, ezYsVbm);
    const O35BkxR =
      muSB4E.fromMe && miQNxTJ
        ? miQNxTJ
        : muSB4E.participant && FDij0K(muSB4E.participant)
          ? (0, gYSl4Yi.normalizeJid)(muSB4E.participant)
          : muSB4E.participantAlt && FDij0K(muSB4E.participantAlt)
            ? (0, gYSl4Yi.normalizeJid)(muSB4E.participantAlt)
            : muSB4E.remoteJid && FDij0K(muSB4E.remoteJid)
              ? (0, gYSl4Yi.normalizeJid)(muSB4E.remoteJid)
              : muSB4E.remoteJidAlt && FDij0K(muSB4E.remoteJidAlt)
                ? (0, gYSl4Yi.normalizeJid)(muSB4E.remoteJidAlt)
                : undefined;
    const dPTV6Z = [NUqNTA];
    if (O35BkxR && O35BkxR !== NUqNTA) {
      dPTV6Z.push(O35BkxR);
    }
    const pHDm8nz = mDRpIj(EXKLdF, ezYsVbm);
    const _3ybURy =
      EXKLdF.fromMe && miQNxTJ
        ? miQNxTJ
        : EXKLdF.participant && FDij0K(EXKLdF.participant)
          ? (0, gYSl4Yi.normalizeJid)(EXKLdF.participant)
          : EXKLdF.participantAlt && FDij0K(EXKLdF.participantAlt)
            ? (0, gYSl4Yi.normalizeJid)(EXKLdF.participantAlt)
            : EXKLdF.remoteJid && FDij0K(EXKLdF.remoteJid)
              ? (0, gYSl4Yi.normalizeJid)(EXKLdF.remoteJid)
              : EXKLdF.remoteJidAlt && FDij0K(EXKLdF.remoteJidAlt)
                ? (0, gYSl4Yi.normalizeJid)(EXKLdF.remoteJidAlt)
                : undefined;
    const csvPu5 = [pHDm8nz];
    if (_3ybURy && _3ybURy !== pHDm8nz) {
      csvPu5.push(_3ybURy);
    }
    for (const _IEohR of dPTV6Z) {
      for (const cohPyR of csvPu5) {
        try {
          return KrADmb(
            {
              ["encPayload"]: VsxE5Fj,
              ["encIv"]: vXw_Bs,
            },
            {
              ["editEncKey"]: LZ0ciP,
              ["originalSenderJid"]: _IEohR,
              ["originalMsgId"]: muSB4E.id,
              ["editorJid"]: cohPyR,
            },
          );
        } catch {}
      }
    }
    return undefined;
  };
  const rmmRJCp = (
    {
      ["options"]: VsxE5Fj,
      ["pollUpdateMessageKey"]: vXw_Bs,
      ["vote"]: LZ0ciP,
    },
    muSB4E,
  ) => {
    muSB4E = (0, gYSl4Yi.normalizeJid)(muSB4E);
    const EXKLdF = VsxE5Fj || [];
    const DnAM7Cm = EXKLdF.reduce((VsxE5Fj, vXw_Bs) => {
      const LZ0ciP = RBrMltb(
        U5nau0V("Ei_FUxA").from(vXw_Bs.optionName || ""),
      ).toString();
      VsxE5Fj[LZ0ciP] = {
        ["name"]: vXw_Bs.optionName || "",
        ["voters"]: [],
      };
      return VsxE5Fj;
    }, {});
    for (const tlniXVB of LZ0ciP.selectedOptions || []) {
      const ezYsVbm = tlniXVB.toString();
      let miQNxTJ = DnAM7Cm[ezYsVbm];
      if (!miQNxTJ) {
        ((DnAM7Cm[ezYsVbm] = {
          ["name"]: "Unknown",
          ["voters"]: [],
        }),
          (miQNxTJ = DnAM7Cm[ezYsVbm]));
      }
      DnAM7Cm[ezYsVbm].voters.push(mDRpIj(vXw_Bs, muSB4E));
    }
    return U5nau0V("hYVFDcK").values(DnAM7Cm);
  };
  (0, gYSl4Yi.deepMerge)(VsxE5Fj[0], {
    ["decryptMessageEditWithLidFallback"]: bIVF6x,
    ["decryptPollVoteWithLidFallback"]: ie0mZJ,
    ["extractUrlFromText"]: Z76Z4H5,
    ["generateForwardMessageContent"]: L9zqQD,
    ["generateLinkPreviewIfRequired"]: JuRLgE,
    ["generateWAMessage"]: OzsqUsG,
    ["generateWAMessageContent"]: I2ETOg,
    ["generateWAMessageFromContent"]: HF9XwAi,
    ["generateWAMessageFromRawContent"]: htbmBhz,
    ["getAggregateVotesInPollMessageV2"]: rmmRJCp,
    ["getUrlInfo"]: qlY39da,
    ["hasNonNullishProperty"]: zuy8jZ,
    ["hasOptionalProperty"]: mTfbdg8,
    ["hasValidAlbumMedia"]: kLr3tG,
    ["hasValidCarouselHeader"]: l6zwlsK,
    ["hasValidInteractiveHeader"]: SezNaK,
    ["normalizeMessageContent"]: pJq23Eb,
    ["prepareBloksWidget"]: psMii8L,
    ["prepareDisappearingMessageSettingContent"]: gzBeq3,
    ["prepareMediaForInteractiveMessage"]: tTCQEBt,
    ["prepareNativeFlowMessage"]: OImarh,
    ["prepareNativeFlowMessageV2"]: b_pfw8r,
    ["prepareProductMessage"]: jeMQmH,
    ["prepareStickerPackMessage"]: UpxerZB,
    ["prepareWAMessageMedia"]: ipE4ySA,
    ["tokenizeCode"]: jEa7X1t,
  });
});
