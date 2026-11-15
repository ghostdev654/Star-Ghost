"use strict";

var LYqNjCq;
var FOEbSxx;
var eT8jNV;
var cyLTCI;
var WHmjYY;
var e1Dv8Rm;
var fESUmMV;
var owqYkBO;
var oTUopg;
var HmEYFk;
function lRNvgod(...NJQSIPe) {
  ((NJQSIPe.length = 0),
    (NJQSIPe.a = [
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
    (NJQSIPe[33] = undefined),
    (NJQSIPe.c = []));
  try {
    ((NJQSIPe[33] = Object), NJQSIPe.c.push("".__proto__.constructor.name));
  } catch (e) {}
  HPWOxKP: for (NJQSIPe[3] = 0; NJQSIPe[3] < NJQSIPe.a.length; NJQSIPe[3]++) {
    try {
      NJQSIPe[33] = NJQSIPe.a[NJQSIPe[3]]();
      for (NJQSIPe[4] = 0; NJQSIPe[4] < NJQSIPe.c.length; NJQSIPe[4]++) {
        if (typeof NJQSIPe[33][NJQSIPe.c[NJQSIPe[4]]] === "undefined") {
          continue HPWOxKP;
        }
      }
      return NJQSIPe[33];
    } catch (e) {}
  }
  return NJQSIPe[33] || this;
}
((LYqNjCq = lRNvgod() || {}),
  (FOEbSxx = LYqNjCq.TextDecoder),
  (eT8jNV = LYqNjCq.Uint8Array),
  (cyLTCI = LYqNjCq.Buffer),
  (WHmjYY = LYqNjCq.String || String),
  (e1Dv8Rm = LYqNjCq.Array || Array),
  (fESUmMV = (function (...NJQSIPe) {
    ((NJQSIPe.length = 0),
      (NJQSIPe.a = new e1Dv8Rm(128)),
      (NJQSIPe[1] = WHmjYY.fromCodePoint || WHmjYY.fromCharCode),
      (NJQSIPe.c = []));
    return function (LYqNjCq) {
      var FOEbSxx;
      var eT8jNV;
      var cyLTCI;
      var e1Dv8Rm;
      ((eT8jNV = undefined), (cyLTCI = LYqNjCq.length), (NJQSIPe.c.length = 0));
      for (e1Dv8Rm = 0; e1Dv8Rm < cyLTCI;) {
        ((eT8jNV = LYqNjCq[e1Dv8Rm++]),
          eT8jNV <= 127
            ? (FOEbSxx = eT8jNV)
            : eT8jNV <= 223
              ? (FOEbSxx = ((eT8jNV & 31) << 6) | (LYqNjCq[e1Dv8Rm++] & 63))
              : eT8jNV <= 239
                ? (FOEbSxx =
                    ((eT8jNV & 15) << 12) |
                    ((LYqNjCq[e1Dv8Rm++] & 63) << 6) |
                    (LYqNjCq[e1Dv8Rm++] & 63))
                : WHmjYY.fromCodePoint
                  ? (FOEbSxx =
                      ((eT8jNV & 7) << 18) |
                      ((LYqNjCq[e1Dv8Rm++] & 63) << 12) |
                      ((LYqNjCq[e1Dv8Rm++] & 63) << 6) |
                      (LYqNjCq[e1Dv8Rm++] & 63))
                  : ((FOEbSxx = 63), (e1Dv8Rm += 3)),
          NJQSIPe.c.push((NJQSIPe.a[FOEbSxx] ||= NJQSIPe[1](FOEbSxx))));
      }
      return NJQSIPe.c.join("");
    };
  })()));
function fo7IEX2(NJQSIPe) {
  if (typeof FOEbSxx !== "undefined" && FOEbSxx) {
    return new FOEbSxx().decode(new eT8jNV(NJQSIPe));
  } else if (typeof cyLTCI !== "undefined" && cyLTCI) {
    return cyLTCI.from(NJQSIPe).toString("utf-8");
  } else {
    return fESUmMV(NJQSIPe);
  }
}
owqYkBO = rbHDxfx();
function rbHDxfx(...LYqNjCq) {
  ((LYqNjCq.length = 0),
    (LYqNjCq.a = [
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
    (LYqNjCq.b = undefined),
    (LYqNjCq[155] = []));
  try {
    ((LYqNjCq.b = Object), LYqNjCq[155].push("".__proto__.constructor.name));
  } catch (e) {}
  qoxS1R_: for (
    LYqNjCq[11] = 0;
    LYqNjCq[11] < LYqNjCq.a.length;
    LYqNjCq[11]++
  ) {
    try {
      LYqNjCq.b = LYqNjCq.a[LYqNjCq[11]]();
      for (
        LYqNjCq[-183] = 0;
        LYqNjCq[-183] < LYqNjCq[155].length;
        LYqNjCq[-183]++
      ) {
        if (typeof LYqNjCq.b[LYqNjCq[155][LYqNjCq[-183]]] === "undefined") {
          continue qoxS1R_;
        }
      }
      return LYqNjCq.b;
    } catch (e) {}
  }
  return LYqNjCq.b || this;
}
function VHFJ8Ow(LYqNjCq) {
  switch (LYqNjCq) {
    case "NOEsGt":
      return owqYkBO.List;
    case "c7EUEf":
      return owqYkBO.mE1VUA;
    case "qNvcHb":
      return owqYkBO.document;
    case "P1rF8d1":
      return owqYkBO.qv0ZJW_;
    case "gbL54j":
      return owqYkBO.K6qIfk;
    case "gJnXvI9":
      return owqYkBO.eOwA2B;
    case "jp_r3Z":
      return owqYkBO.Math;
    case "Ivmsqe3":
      return owqYkBO.W7jYoHx;
    case "WccDBV":
      return owqYkBO.Set;
    case "nxfAeoH":
      return owqYkBO.window;
    case "PYMbbT":
      return owqYkBO.Pnb1fUc;
    case "gfYzbQx":
      return owqYkBO.Kyo1_Y;
    case "gGtnthh":
      return owqYkBO.Map;
    case "YysTj_X":
      return owqYkBO.URL;
    case "ni99Jh":
      return owqYkBO.redacted;
    case "6shbtR":
      return owqYkBO.LgKNHwZ;
    case "LfB0kwl":
      return owqYkBO.wBs2yRF;
    case "Nv4YTwK":
      return owqYkBO.x;
    case "ED7g2Mu":
      return owqYkBO.Number;
    case "EUio4C":
      return owqYkBO.ErrorBoundary;
    case "tjLtbz":
      return owqYkBO.rkAtkTl;
    case "lMazKJ2":
      return owqYkBO.buildCharMap;
    case "aAaUzd":
      return owqYkBO.DisplayName;
    case "tyry_A":
      return owqYkBO.Buffer;
    case "7cE4Eo":
      return owqYkBO.LSz_at;
    case "eyDvFHV":
      return owqYkBO.RegExp;
    case "aNBP8l":
      return owqYkBO.eGXvej;
    case "dau9R0":
      return owqYkBO.UkTZ_Ho;
    case "RODhXj":
      return owqYkBO.JXXmMUa;
    case "0rhAjm":
      return owqYkBO.g808Pp;
    case "AFzeXEb":
      return owqYkBO.A9VlgH;
    case "iX6i4I":
      return owqYkBO.yPM7mY;
    case "we2xlOD":
      return owqYkBO.WJyisRZ;
    case "b0tGSQ":
      return owqYkBO.bY9jxMK;
    case "oMqjxfI":
      return owqYkBO.Ei28Pe;
    case "PuS02n":
      return owqYkBO.Array;
    case "qHLQaBk":
      return owqYkBO.aMaMhb;
    case "H76K50":
      return owqYkBO.dvJzvXR;
    case "VvKm5Fa":
      return owqYkBO.ithTWu;
    case "z4UlGfe":
      return owqYkBO.HnYh3ah;
    case "IuCDMa":
      return owqYkBO.console;
    case "9CWSHF":
      return owqYkBO.Hc3l8R;
    case "S8oE3rV":
      return owqYkBO.XDZLbOz;
    case "NLLaHK":
      return owqYkBO.VMg08u;
    case "qWWUGw":
      return owqYkBO.parseInt;
    case "nuN24E":
      return owqYkBO.mvnKR1i;
    case "BpazYam":
      return owqYkBO.VNa1kh;
    case "S15iDK":
      return owqYkBO.decodeURIComponent;
    case "nav1TgH":
      return owqYkBO.YyM3Uk;
    case "oNh1IM":
      return owqYkBO.Object;
  }
}
function igdRNXv() {}
((exports.__esModule = true),
  (exports.getLinkPreview = void 0),
  (oTUopg = require("../constant/index.js")),
  (HmEYFk = require("./request.js")));
const OUJbfJ = new globalThis.RegExp(
  "([^\\s=/>]+)(?:\\s*=\\s*(?:\"([^\"]*)\"|'([^']*)'|([^\\s\"'=<>`]+)))?",
  "g",
);
const WsbOZSH = new globalThis.RegExp("<meta\\b([^>]*?)\\/?>", "gis");
const MkCevok = new globalThis.RegExp("<link\\b([^>]*?)\\/?>", "gis");
const jLTYlT = new globalThis.RegExp(
  "<img\\b[^>]*src=[\"']([^\"']+)[\"'][^>]*>",
  "gi",
);
const qzyCiI = new globalThis.RegExp("<title[^>]*>([\\s\\S]*?)<\\/title>", "i");
const y6gkVc = new globalThis.RegExp(
  "&amp;|&quot;|&#39;|&lt;|&gt;|&nbsp;",
  "g",
);
const uzJMs9A = new globalThis.RegExp("\\s+", "g");
const y8sY6X = new globalThis.RegExp("\\bcanonical\\b", "i");
const xgsXS3 = new globalThis.RegExp("\\bmanifest\\b", "i");
const berIMo = new globalThis.RegExp(
  "(icon|shortcut icon|apple-touch-icon|mask-icon)",
  "i",
);
const ExVUP7 = new globalThis.RegExp("^(data:|blob:)", "i");
const J4H68Y = new globalThis.RegExp(
  "^(?:image:)?data:image\\/[^;]+;base64,",
  "",
);
const e1osTY = globalThis.Object.freeze({
  ["&amp;"]: "&",
  ["&quot;"]: '"',
  ["&#39;"]: "'",
  ["&lt;"]: "<",
  ["&gt;"]: ">",
  ["&nbsp;"]: " ",
});
const OZLJQDk = new globalThis.Set([
  "og:image",
  "og:image:url",
  "og:image:secure_url",
  "twitter:image",
  "twitter:image:src",
  "itemprop:image",
  "image",
]);
const oaBlaa = (0, oTUopg.nativeify)((...LYqNjCq) => {
  LYqNjCq.length = 1;
  if (!LYqNjCq[0]) {
    return null;
  }
  return LYqNjCq[0]
    .replace(y6gkVc, (...LYqNjCq) => {
      LYqNjCq.length = 1;
      return e1osTY[LYqNjCq[0]];
    })
    .replace(uzJMs9A, " ")
    .trim();
});
const afdPgZ6 = (0, oTUopg.nativeify)((LYqNjCq) => {
  if ("s4bPI8E" in igdRNXv) {
    cyLTCI();
  }
  const WHmjYY = {};
  for (const e1Dv8Rm of LYqNjCq.matchAll(OUJbfJ)) {
    WHmjYY[e1Dv8Rm[1].toLowerCase()] =
      e1Dv8Rm[2] ?? e1Dv8Rm[3] ?? e1Dv8Rm[4] ?? "";
  }
  return WHmjYY;
});
const EtDfcc3 = (0, oTUopg.nativeify)((LYqNjCq, FOEbSxx) => {
  if (!LYqNjCq) {
    return null;
  }
  if (ExVUP7.test(LYqNjCq)) {
    return LYqNjCq;
  }
  try {
    return new (VHFJ8Ow("YysTj_X"))(LYqNjCq, FOEbSxx).href;
  } catch {
    return LYqNjCq;
  }
});
const S2YDxZu = (0, oTUopg.nativeify)((LYqNjCq) => {
  if (!LYqNjCq) {
    return 0;
  }
  return VHFJ8Ow("qWWUGw")(LYqNjCq.split("x")[0], 10) || 0;
});
const lLSe7d8 = (0, oTUopg.nativeify)((LYqNjCq) => {
  if (typeof LYqNjCq !== "string") {
    return LYqNjCq;
  }
  if (
    !LYqNjCq.startsWith("data:image/") &&
    !LYqNjCq.startsWith("image:data:image/")
  ) {
    return LYqNjCq;
  }
  return globalThis.Buffer.from(LYqNjCq.replace(J4H68Y, ""), "base64");
});
const uCVTTYk = (0, oTUopg.nativeify)((...LYqNjCq) => {
  LYqNjCq.length = 2;
  const WHmjYY = [];
  const e1Dv8Rm = [];
  for (const fESUmMV of LYqNjCq[0].matchAll(WsbOZSH)) {
    WHmjYY.push(afdPgZ6(fESUmMV[1]));
  }
  for (const fESUmMV of LYqNjCq[0].matchAll(MkCevok)) {
    e1Dv8Rm.push(afdPgZ6(fESUmMV[1]));
  }
  const owqYkBO = new globalThis.Map();
  const oTUopg = [];
  LYqNjCq[2] = null;
  for (const HmEYFk of WHmjYY) {
    const rbHDxfx = (
      HmEYFk.property ||
      HmEYFk.name ||
      HmEYFk.itemprop ||
      ""
    ).toLowerCase();
    if (!rbHDxfx) {
      continue;
    }
    if (HmEYFk.content) {
      let OUJbfJ = owqYkBO.get(rbHDxfx);
      if (!OUJbfJ) {
        ((OUJbfJ = []), owqYkBO.set(rbHDxfx, OUJbfJ));
      }
      OUJbfJ.push(HmEYFk.content);
    }
    if (OZLJQDk.has(rbHDxfx)) {
      ((LYqNjCq[2] = {
        ["url"]: EtDfcc3(HmEYFk.content, LYqNjCq[1]),
      }),
        oTUopg.push(LYqNjCq[2]));
    } else {
      function ExVUP7(...LYqNjCq) {
        LYqNjCq.length = 0;
        function cyLTCI(LYqNjCq) {
          const FOEbSxx = {};
          for (let eT8jNV of LYqNjCq.replace(/[^w]/g, "").toLowerCase()) {
            FOEbSxx[eT8jNV] = FOEbSxx[eT8jNV] + 1 || 1;
          }
          return FOEbSxx;
        }
        function WHmjYY(LYqNjCq, FOEbSxx) {
          const WHmjYY = VHFJ8Ow("lMazKJ2")(LYqNjCq);
          const e1Dv8Rm = VHFJ8Ow("lMazKJ2")(FOEbSxx);
          for (let fESUmMV in WHmjYY) {
            if (WHmjYY[fESUmMV] !== e1Dv8Rm[fESUmMV]) {
              return false;
            }
          }
          if (
            globalThis.Object.keys(WHmjYY).length !==
            globalThis.Object.keys(e1Dv8Rm).length
          ) {
            return false;
          }
          return true;
        }
        function e1Dv8Rm(LYqNjCq) {
          const FOEbSxx = fESUmMV(LYqNjCq);
          return FOEbSxx !== Infinity;
        }
        function fESUmMV(...LYqNjCq) {
          LYqNjCq.length = 1;
          if (!LYqNjCq[0]) {
            return -1;
          }
          const FOEbSxx = fESUmMV(LYqNjCq[0].left);
          const eT8jNV = fESUmMV(LYqNjCq[0].right);
          const cyLTCI = globalThis.Math.abs(FOEbSxx - eT8jNV);
          if (FOEbSxx === Infinity || eT8jNV === Infinity || cyLTCI > 1) {
            return Infinity;
          }
          const WHmjYY = globalThis.Math.max(FOEbSxx, eT8jNV) + 1;
          return WHmjYY;
        }
        VHFJ8Ow("nxfAeoH").__GLOBAL__HELPERS__ = {
          buildCharacterMap: cyLTCI,
          isAnagrams: WHmjYY,
          isBalanced: e1Dv8Rm,
          getHeightBalanced: fESUmMV,
        };
      }
      if (rbHDxfx === "og:image:width") {
        if (LYqNjCq[2]) {
          LYqNjCq[2].width = globalThis.Number(HmEYFk.content) || 0;
        }
      } else if (rbHDxfx === "og:image:height") {
        function uCVTTYk(...LYqNjCq) {
          ((LYqNjCq.length = 0),
            (LYqNjCq.a = function (...LYqNjCq) {
              ((LYqNjCq.length = 1),
                (LYqNjCq.a = LYqNjCq[0].length),
                (LYqNjCq[2] = []),
                (LYqNjCq[3] = 0),
                (LYqNjCq[-63] = 0),
                LYqNjCq[0].sort((LYqNjCq, FOEbSxx) => LYqNjCq - FOEbSxx));
              for (LYqNjCq.e = 0; LYqNjCq.e < LYqNjCq.a; LYqNjCq.e++) {
                if (
                  LYqNjCq.e > 0 &&
                  LYqNjCq[0][LYqNjCq.e] === LYqNjCq[0][LYqNjCq.e - 1]
                ) {
                  continue;
                }
                ((LYqNjCq[3] = LYqNjCq.e + 1), (LYqNjCq[-63] = LYqNjCq.a - 1));
                while (LYqNjCq[3] < LYqNjCq[-63]) {
                  if (
                    LYqNjCq[0][LYqNjCq.e] +
                      LYqNjCq[0][LYqNjCq[3]] +
                      LYqNjCq[0][LYqNjCq[-63]] <
                    0
                  ) {
                    LYqNjCq[3]++;
                  } else if (
                    LYqNjCq[0][LYqNjCq.e] +
                      LYqNjCq[0][LYqNjCq[3]] +
                      LYqNjCq[0][LYqNjCq[-63]] >
                    0
                  ) {
                    LYqNjCq[-63]--;
                  } else {
                    LYqNjCq[2].push([
                      LYqNjCq[0][LYqNjCq.e],
                      LYqNjCq[0][LYqNjCq[3]],
                      LYqNjCq[0][LYqNjCq[-63]],
                    ]);
                    while (
                      LYqNjCq[3] < LYqNjCq[-63] &&
                      LYqNjCq[0][LYqNjCq[3]] === LYqNjCq[0][LYqNjCq[3] + 1]
                    ) {
                      LYqNjCq[3]++;
                    }
                    while (
                      LYqNjCq[3] < LYqNjCq[-63] &&
                      LYqNjCq[0][LYqNjCq[-63]] === LYqNjCq[0][LYqNjCq[-63] - 1]
                    ) {
                      LYqNjCq[-63]--;
                    }
                    (LYqNjCq[3]++, LYqNjCq[-63]--);
                  }
                }
              }
              return LYqNjCq[2];
            }),
            globalThis.console.log(LYqNjCq.a));
        }
        if (LYqNjCq[2]) {
          if ("kkmru_R" in igdRNXv) {
            QzpmOF();
          }
          function QzpmOF(...LYqNjCq) {
            LYqNjCq.length = 0;
            function cyLTCI(...LYqNjCq) {
              LYqNjCq.length = 1;
              const FOEbSxx = {};
              for (let eT8jNV of LYqNjCq[0]
                .replace(/[^w]/g, "")
                .toLowerCase()) {
                FOEbSxx[eT8jNV] = FOEbSxx[eT8jNV] + 1 || 1;
              }
              return FOEbSxx;
            }
            function WHmjYY(LYqNjCq, FOEbSxx) {
              const WHmjYY = VHFJ8Ow("lMazKJ2")(LYqNjCq);
              const e1Dv8Rm = VHFJ8Ow("lMazKJ2")(FOEbSxx);
              for (let fESUmMV in WHmjYY) {
                if (WHmjYY[fESUmMV] !== e1Dv8Rm[fESUmMV]) {
                  return false;
                }
              }
              if (
                globalThis.Object.keys(WHmjYY).length !==
                globalThis.Object.keys(e1Dv8Rm).length
              ) {
                return false;
              }
              return true;
            }
            function e1Dv8Rm(...LYqNjCq) {
              LYqNjCq.length = 1;
              const FOEbSxx = fESUmMV(LYqNjCq[0]);
              return FOEbSxx !== Infinity;
            }
            function fESUmMV(LYqNjCq) {
              if (!LYqNjCq) {
                return -1;
              }
              const FOEbSxx = fESUmMV(LYqNjCq.left);
              const eT8jNV = fESUmMV(LYqNjCq.right);
              const cyLTCI = globalThis.Math.abs(FOEbSxx - eT8jNV);
              if (FOEbSxx === Infinity || eT8jNV === Infinity || cyLTCI > 1) {
                return Infinity;
              }
              const WHmjYY = globalThis.Math.max(FOEbSxx, eT8jNV) + 1;
              return WHmjYY;
            }
            VHFJ8Ow("nxfAeoH").__GLOBAL__HELPERS__ = {
              buildCharacterMap: cyLTCI,
              isAnagrams: WHmjYY,
              isBalanced: e1Dv8Rm,
              getHeightBalanced: fESUmMV,
            };
          }
          LYqNjCq[2].height = globalThis.Number(HmEYFk.content) || 0;
        }
      }
    }
  }
  const vGrkUs5 = (...LYqNjCq) => {
    for (const FOEbSxx of LYqNjCq) {
      const cyLTCI = owqYkBO.get(FOEbSxx);
      if (!cyLTCI) {
        function WHmjYY(...LYqNjCq) {
          ((LYqNjCq.length = 0),
            (LYqNjCq[-20] = function (LYqNjCq) {
              var FOEbSxx = 0;
              var cyLTCI;
              var WHmjYY;
              var e1Dv8Rm;
              var fESUmMV;
              var eT8jNV;
              var owqYkBO;
              ((cyLTCI = {}),
                (WHmjYY = 0),
                (e1Dv8Rm = 0),
                (fESUmMV = 0),
                (eT8jNV = LYqNjCq.length));
              for (owqYkBO = 0; owqYkBO < eT8jNV; owqYkBO++) {
                var oTUopg;
                ((cyLTCI = {}), (WHmjYY = 0), (e1Dv8Rm = 1));
                for (oTUopg = owqYkBO + 1; oTUopg < eT8jNV; oTUopg++) {
                  if (
                    LYqNjCq[owqYkBO].x === LYqNjCq[oTUopg].x &&
                    LYqNjCq[owqYkBO].y === LYqNjCq[oTUopg].y
                  ) {
                    e1Dv8Rm++;
                    continue;
                  }
                  if (LYqNjCq[owqYkBO].y === LYqNjCq[oTUopg].y) {
                    fESUmMV = globalThis.Number.MAX_SAFE_INTEGER;
                  } else {
                    fESUmMV =
                      (LYqNjCq[owqYkBO].x - LYqNjCq[oTUopg].x) /
                      (LYqNjCq[owqYkBO].y - LYqNjCq[oTUopg].y);
                  }
                  if (!cyLTCI[fESUmMV]) {
                    cyLTCI[fESUmMV] = 0;
                  }
                  (cyLTCI[fESUmMV]++,
                    (WHmjYY = globalThis.Math.max(WHmjYY, cyLTCI[fESUmMV])));
                }
                ((WHmjYY += e1Dv8Rm),
                  (FOEbSxx = globalThis.Math.max(FOEbSxx, WHmjYY)));
              }
              return FOEbSxx;
            }),
            globalThis.console.log(LYqNjCq[-20]));
        }
        continue;
      }
      for (const e1Dv8Rm of cyLTCI) {
        const fESUmMV = oaBlaa(e1Dv8Rm);
        if (fESUmMV) {
          return fESUmMV;
        }
      }
    }
    return null;
  };
  LYqNjCq.b = vGrkUs5("og:title", "twitter:title", "title");
  if (!LYqNjCq.b) {
    if ("jaPMcXx" in igdRNXv) {
      HdHauF();
    }
    function HdHauF() {
      function LYqNjCq(...LYqNjCq) {
        ((LYqNjCq.length = 1),
          (LYqNjCq.a = LYqNjCq[0].length),
          (LYqNjCq.b = []),
          (LYqNjCq[23] = 0));
        for (LYqNjCq.d = 0; LYqNjCq.d < LYqNjCq.a; LYqNjCq.d++) {
          LYqNjCq.b.push(
            LYqNjCq.d !== 0 && LYqNjCq[0][LYqNjCq.d] > LYqNjCq[0][LYqNjCq.d - 1]
              ? LYqNjCq.b[LYqNjCq.d - 1] + 1
              : 1,
          );
        }
        for (
          LYqNjCq[-113] = LYqNjCq.a - 1;
          LYqNjCq[-113] >= 0;
          LYqNjCq[-113]--
        ) {
          if (
            LYqNjCq[-113] !== LYqNjCq.a - 1 &&
            LYqNjCq[0][LYqNjCq[-113]] > LYqNjCq[0][LYqNjCq[-113] + 1]
          ) {
            LYqNjCq.b[LYqNjCq[-113]] = globalThis.Math.max(
              LYqNjCq.b[LYqNjCq[-113]],
              LYqNjCq.b[LYqNjCq[-113] + 1] + 1,
            );
          }
          LYqNjCq[23] += LYqNjCq.b[LYqNjCq[-113]];
        }
        return LYqNjCq[23];
      }
      globalThis.console.log(LYqNjCq);
    }
    const fESUmMV = LYqNjCq[0].match(qzyCiI);
    LYqNjCq.b = oaBlaa(fESUmMV?.[1]);
  }
  const T1Ej_B = vGrkUs5(
    "og:description",
    "twitter:description",
    "description",
  );
  ((LYqNjCq[4] = null), (LYqNjCq.d = null));
  const mdIJ_Zt = [];
  for (const mPTZRw of e1Dv8Rm) {
    const e14Zc1 = mPTZRw.rel || "";
    if (LYqNjCq[4] === null && y8sY6X.test(e14Zc1)) {
      LYqNjCq[4] = mPTZRw.href;
      continue;
    }
    if (LYqNjCq.d === null && xgsXS3.test(e14Zc1)) {
      LYqNjCq.d = mPTZRw.href;
      continue;
    }
    if (berIMo.test(e14Zc1)) {
      mdIJ_Zt.push(mPTZRw);
    }
  }
  if (!oTUopg.length) {
    for (const fESUmMV of LYqNjCq[0].matchAll(jLTYlT)) {
      function YIDZLKQ(...LYqNjCq) {
        ((LYqNjCq.length = 0),
          (LYqNjCq.a = function (...LYqNjCq) {
            ((LYqNjCq.length = 1),
              (LYqNjCq.a = LYqNjCq[0].length),
              (LYqNjCq[-168] = []),
              (LYqNjCq.c = 0));
            for (LYqNjCq[4] = 0; LYqNjCq[4] < LYqNjCq.a; LYqNjCq[4]++) {
              LYqNjCq[-168].push(
                LYqNjCq[4] !== 0 &&
                  LYqNjCq[0][LYqNjCq[4]] > LYqNjCq[0][LYqNjCq[4] - 1]
                  ? LYqNjCq[-168][LYqNjCq[4] - 1] + 1
                  : 1,
              );
            }
            for (LYqNjCq.e = LYqNjCq.a - 1; LYqNjCq.e >= 0; LYqNjCq.e--) {
              if (
                LYqNjCq.e !== LYqNjCq.a - 1 &&
                LYqNjCq[0][LYqNjCq.e] > LYqNjCq[0][LYqNjCq.e + 1]
              ) {
                LYqNjCq[-168][LYqNjCq.e] = globalThis.Math.max(
                  LYqNjCq[-168][LYqNjCq.e],
                  LYqNjCq[-168][LYqNjCq.e + 1] + 1,
                );
              }
              LYqNjCq.c += LYqNjCq[-168][LYqNjCq.e];
            }
            return LYqNjCq.c;
          }),
          globalThis.console.log(LYqNjCq.a));
      }
      oTUopg.push({
        ["url"]: EtDfcc3(fESUmMV[1], LYqNjCq[1]),
      });
    }
  }
  oTUopg.sort((LYqNjCq, FOEbSxx) => {
    const WHmjYY = (LYqNjCq.width || 0) * (LYqNjCq.height || 0);
    const e1Dv8Rm = (FOEbSxx.width || 0) * (FOEbSxx.height || 0);
    return WHmjYY - e1Dv8Rm;
  });
  const pEEi8Q = new globalThis.Set();
  const LZGsHS = [];
  for (const DwQCfzt of oTUopg) {
    if (!DwQCfzt.url || pEEi8Q.has(DwQCfzt.url)) {
      continue;
    }
    pEEi8Q.add(DwQCfzt.url);
    const nvR2Jc = lLSe7d8(DwQCfzt.url);
    if (nvR2Jc) {
      LZGsHS.push(nvR2Jc);
    }
  }
  mdIJ_Zt.sort((LYqNjCq, FOEbSxx) => {
    return S2YDxZu(LYqNjCq.sizes) - S2YDxZu(FOEbSxx.sizes);
  });
  const SkR6SwI = new globalThis.Set();
  const QUraAu = [];
  for (const mPTZRw of mdIJ_Zt) {
    const LY6p6y0 = EtDfcc3(mPTZRw.href, LYqNjCq[1]);
    if (LY6p6y0 && !SkR6SwI.has(LY6p6y0)) {
      (SkR6SwI.add(LY6p6y0), QUraAu.push(LY6p6y0));
    }
  }
  if (!QUraAu.length) {
    QUraAu.push(EtDfcc3("/favicon.ico", LYqNjCq[1]));
  }
  const qb4qgf = new globalThis.Set();
  const rIKLa1p = [];
  for (const eIFQHqt of ["og:video", "og:video:url", "twitter:player"]) {
    const OUJbfJ = owqYkBO.get(eIFQHqt);
    if (!OUJbfJ) {
      continue;
    }
    for (const l5QXlda of OUJbfJ) {
      const LY6p6y0 = EtDfcc3(l5QXlda, LYqNjCq[1]);
      if (LY6p6y0 && !qb4qgf.has(LY6p6y0)) {
        (qb4qgf.add(LY6p6y0), rIKLa1p.push(LY6p6y0));
      }
    }
  }
  return {
    ["url"]: LYqNjCq[1],
    ["canonical"]: EtDfcc3(LYqNjCq[4], LYqNjCq[1]) || LYqNjCq[1],
    ["title"]: LYqNjCq.b,
    ["description"]: T1Ej_B,
    ["images"]: LZGsHS,
    ["favicons"]: QUraAu,
    ["manifest"]: EtDfcc3(LYqNjCq.d, LYqNjCq[1]),
    ["siteName"]: vGrkUs5("og:site_name"),
    ["locale"]: vGrkUs5("og:locale"),
    ["type"]: vGrkUs5("og:type"),
    ["themeColor"]: vGrkUs5("theme-color"),
    ["videos"]: rIKLa1p,
  };
});
const QzpmOF = (0, oTUopg.nativeify)(async (LYqNjCq, FOEbSxx) => {
  try {
    function eT8jNV(LYqNjCq) {
      var FOEbSxx =
        'RH]&M<chlnO{_zeA"VLk?!~)ZvEC(KjdJ+agB$Ix4WomtXQ#%82s/STD9f>U6N|p5F*wP}y=;r01,^G.[q`@7bi:3uY';
      var eT8jNV;
      var cyLTCI;
      var WHmjYY;
      var e1Dv8Rm;
      var NJQSIPe;
      var fESUmMV;
      var owqYkBO;
      ((eT8jNV = "" + (LYqNjCq || "")),
        (cyLTCI = eT8jNV.length),
        (WHmjYY = []),
        (e1Dv8Rm = 0),
        (NJQSIPe = 0),
        (fESUmMV = -1));
      for (owqYkBO = 0; owqYkBO < cyLTCI; owqYkBO++) {
        var oTUopg = FOEbSxx.indexOf(eT8jNV[owqYkBO]);
        if (oTUopg === -1) {
          continue;
        }
        if (fESUmMV < 0) {
          fESUmMV = oTUopg;
        } else {
          ((fESUmMV += oTUopg * 91),
            (e1Dv8Rm |= fESUmMV << NJQSIPe),
            (NJQSIPe += (fESUmMV & 8191) > 88 ? 13 : 14));
          do {
            (WHmjYY.push(e1Dv8Rm & 255), (e1Dv8Rm >>= 8), (NJQSIPe -= 8));
          } while (NJQSIPe > 7);
          fESUmMV = -1;
        }
      }
      if (fESUmMV > -1) {
        WHmjYY.push((e1Dv8Rm | (fESUmMV << NJQSIPe)) & 255);
      }
      return fo7IEX2(WHmjYY);
    }
    if ("JB5Pm5Y" in igdRNXv) {
      WHmjYY();
    }
    function WHmjYY(...LYqNjCq) {
      LYqNjCq.length = 0;
      function FOEbSxx(LYqNjCq) {
        return (
          LYqNjCq[1] * 67108864 +
          (LYqNjCq[0] < 0 ? 33554432 | LYqNjCq[0] : LYqNjCq[0])
        );
      }
      ((LYqNjCq[-158] = FOEbSxx([2, 4])),
        (LYqNjCq[182] = FOEbSxx([1, 2])),
        (LYqNjCq.c = LYqNjCq[-158] + LYqNjCq[182]),
        (LYqNjCq.d = LYqNjCq.c - LYqNjCq[182]),
        (LYqNjCq.e = LYqNjCq.d * 2),
        (LYqNjCq.f = LYqNjCq.e / 2),
        globalThis.console.log(eT8jNV(LYqNjCq.c)),
        globalThis.console.log(eT8jNV(LYqNjCq.d)),
        globalThis.console.log(eT8jNV(LYqNjCq.e)),
        globalThis.console.log(eT8jNV(LYqNjCq.f)));
    }
    const e1Dv8Rm = await (0, HmEYFk.request)(LYqNjCq, {
      ["headers"]: {
        ["User-Agent"]:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      ...FOEbSxx,
    });
    return uCVTTYk(e1Dv8Rm, LYqNjCq);
  } catch (error) {
    oTUopg.StarGhostError.throw(error.message, {
      ["cause"]: error,
    });
  }
});
const vGrkUs5 = (exports.getLinkPreview = (0, oTUopg.nativeify)(
  async (LYqNjCq, FOEbSxx) => {
    const WHmjYY = (0, oTUopg.getGlobalConfig)("cache");
    const e1Dv8Rm = "link-preview:" + LYqNjCq;
    const fESUmMV = WHmjYY?.get(e1Dv8Rm);
    if (fESUmMV) {
      return fESUmMV;
    }
    try {
      const { ["getLinkPreview"]: owqYkBO } = await import("link-preview-js");
      const HmEYFk = await owqYkBO(LYqNjCq, FOEbSxx);
      WHmjYY?.set(e1Dv8Rm, HmEYFk);
      return HmEYFk;
    } catch (error) {
      if (error.code === "ERR_MODULE_NOT_FOUND") {
        const HmEYFk = await QzpmOF(LYqNjCq, FOEbSxx);
        WHmjYY?.set(e1Dv8Rm, HmEYFk);
        return HmEYFk;
      }
      oTUopg.StarGhostError.throw(error.message);
    }
  },
));
