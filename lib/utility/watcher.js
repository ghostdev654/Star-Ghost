"use strict";

var x_F5Cv;
var hr78018;
var KfUf7L;
var gl01_j_;
var sRrEWjg;
var PV877Q;
var JVdu31A;
var QKQPPG;
var WIrrJpC;
var byBPyE;
var JpzkDm;
var zf6_zP;
var WecDyox;
var RWS4gx;
function YQOg0md() {
  var _y64Jqc = [
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
  var x_F5Cv;
  var hr78018;
  var KfUf7L;
  ((x_F5Cv = undefined), (hr78018 = []));
  try {
    ((x_F5Cv = Object), hr78018.push("".__proto__.constructor.name));
  } catch (e) {}
  mIoEOk: for (KfUf7L = 0; KfUf7L < _y64Jqc.length; KfUf7L++) {
    try {
      var gl01_j_;
      x_F5Cv = _y64Jqc[KfUf7L]();
      for (gl01_j_ = 0; gl01_j_ < hr78018.length; gl01_j_++) {
        if (typeof x_F5Cv[hr78018[gl01_j_]] === "undefined") {
          continue mIoEOk;
        }
      }
      return x_F5Cv;
    } catch (e) {}
  }
  return x_F5Cv || this;
}
((x_F5Cv = YQOg0md() || {}),
  (hr78018 = x_F5Cv.TextDecoder),
  (KfUf7L = x_F5Cv.Uint8Array),
  (gl01_j_ = x_F5Cv.Buffer),
  (sRrEWjg = x_F5Cv.String || String),
  (PV877Q = x_F5Cv.Array || Array),
  (JVdu31A = (function () {
    var _y64Jqc = new PV877Q(128);
    var x_F5Cv;
    var hr78018;
    ((x_F5Cv = sRrEWjg.fromCodePoint || sRrEWjg.fromCharCode), (hr78018 = []));
    return function (KfUf7L) {
      var gl01_j_;
      var PV877Q;
      var JVdu31A;
      var QKQPPG;
      ((PV877Q = undefined), (JVdu31A = KfUf7L.length), (hr78018.length = 0));
      for (QKQPPG = 0; QKQPPG < JVdu31A;) {
        ((PV877Q = KfUf7L[QKQPPG++]),
          PV877Q <= 127
            ? (gl01_j_ = PV877Q)
            : PV877Q <= 223
              ? (gl01_j_ = ((PV877Q & 31) << 6) | (KfUf7L[QKQPPG++] & 63))
              : PV877Q <= 239
                ? (gl01_j_ =
                    ((PV877Q & 15) << 12) |
                    ((KfUf7L[QKQPPG++] & 63) << 6) |
                    (KfUf7L[QKQPPG++] & 63))
                : sRrEWjg.fromCodePoint
                  ? (gl01_j_ =
                      ((PV877Q & 7) << 18) |
                      ((KfUf7L[QKQPPG++] & 63) << 12) |
                      ((KfUf7L[QKQPPG++] & 63) << 6) |
                      (KfUf7L[QKQPPG++] & 63))
                  : ((gl01_j_ = 63), (QKQPPG += 3)),
          hr78018.push((_y64Jqc[gl01_j_] ||= x_F5Cv(gl01_j_))));
      }
      return hr78018.join("");
    };
  })()));
function QlY3XR(..._y64Jqc) {
  _y64Jqc.length = 1;
  if (typeof hr78018 !== "undefined" && hr78018) {
    return new hr78018().decode(new KfUf7L(_y64Jqc[0]));
  } else if (typeof gl01_j_ !== "undefined" && gl01_j_) {
    return gl01_j_.from(_y64Jqc[0]).toString("utf-8");
  } else {
    return JVdu31A(_y64Jqc[0]);
  }
}
QKQPPG = JNA3HC();
function JNA3HC() {
  var x_F5Cv;
  var hr78018;
  var KfUf7L;
  var gl01_j_;
  ((x_F5Cv = [
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
    (hr78018 = undefined),
    (KfUf7L = []));
  try {
    ((hr78018 = Object), KfUf7L.push("".__proto__.constructor.name));
  } catch (e) {}
  ujUpdc: for (gl01_j_ = 0; gl01_j_ < x_F5Cv.length; gl01_j_++) {
    try {
      var WIrrJpC;
      hr78018 = x_F5Cv[gl01_j_]();
      for (WIrrJpC = 0; WIrrJpC < KfUf7L.length; WIrrJpC++) {
        if (typeof hr78018[KfUf7L[WIrrJpC]] === "undefined") {
          continue ujUpdc;
        }
      }
      return hr78018;
    } catch (e) {}
  }
  return hr78018 || this;
}
function RfuDTC(...x_F5Cv) {
  x_F5Cv.length = 1;
  switch (x_F5Cv[0]) {
    case "zOPfSQ3":
      return QKQPPG.process;
    case "IQjpkE":
      return QKQPPG.setTimeout;
    case "RSuv31":
      return QKQPPG.clearTimeout;
    case "pBTI3Q":
      return QKQPPG.WNK8QL;
    case "Gvyb04":
      return QKQPPG.Vq3FxC3;
    case "kepRc1":
      return QKQPPG.GUO29f;
    case "JJ7d3N":
      return QKQPPG.Math;
    case "xnxhBz":
      return QKQPPG.Object;
    case "RHIpMa":
      return QKQPPG.W5CBrV7;
    case "ybSI5ys":
      return QKQPPG.Dd6psU;
    case "BCu4IaS":
      return QKQPPG.JCKKKN6;
    case "gIE76BI":
      return QKQPPG.xBw1BE;
    case "oRgOI2m":
      return QKQPPG.xOH_zd;
    case "SbvsaMl":
      return QKQPPG.pIf0_V;
    case "FekTSb":
      return QKQPPG.document;
    case "pIGN8NS":
      return QKQPPG.kA4dW8;
    case "LmsZxa":
      return QKQPPG.ZuE_l6;
    case "FkdKYjP":
      return QKQPPG._oRF0Mz;
    case "IvHUOaU":
      return QKQPPG.buildCharMap;
    case "nhJYqtj":
      return QKQPPG.oESOiu;
    case "aONzilE":
      return QKQPPG.getStyles;
    case "jhftVo":
      return QKQPPG.qBruUNP;
    case "tPPoIIc":
      return QKQPPG.sYtODW;
    case "mMtopa":
      return QKQPPG.Error;
    case "Pu1p9t":
      return QKQPPG.ixoakox;
    case "CNl2vUz":
      return QKQPPG.GF2sIz;
    case "LlaoC4":
      return QKQPPG.Map;
    case "kG2b1oQ":
      return QKQPPG.slddHf;
    case "OQuS8u":
      return QKQPPG.LfxMJR9;
    case "KlVOvU0":
      return QKQPPG.isAttached;
    case "o4OUia":
      return QKQPPG.URL;
    case "Bsudj3":
      return QKQPPG.rKrprh;
    case "KWI1tl":
      return QKQPPG.YEQMbz;
    case "RAi1yvn":
      return QKQPPG.TKnkWP3;
    case "7Nh7vX0":
      return QKQPPG.mLhHR1;
    case "YPOyZqO":
      return QKQPPG.redacted;
    case "kucZOe7":
      return QKQPPG.Promise;
    case "qd9OP7g":
      return QKQPPG.JSON;
    case "lSZOZwP":
      return QKQPPG.FqYx14;
    case "OwhSRs":
      return QKQPPG.Set;
    case "WIE67A":
      return QKQPPG.prPEpM8;
    case "hbSxDyR":
      return QKQPPG.QdNO5u;
    case "JoXtSr":
      return QKQPPG.lqSwoJ;
    case "uf8o8gC":
      return QKQPPG.eASPTF;
    case "KXbgoS0":
      return QKQPPG.aaloY7;
    case "i9fmLqF":
      return QKQPPG.Date;
    case "Vto8VcB":
      return QKQPPG.Array;
    case "1YMtDl":
      return QKQPPG.s4ZQki;
    case "tSd540":
      return QKQPPG.WMJr2l9;
    case "3wXmD1":
      return QKQPPG.K2c4jd;
    case "m1Bbcxb":
      return QKQPPG.window;
    case "Q2B5lb":
      return QKQPPG.n76hmqg;
    case "mzXYegV":
      return QKQPPG.xGBLWc5;
    case "P9zzXDh":
      return QKQPPG.s9y8Whr;
    case "PtZS9t":
      return QKQPPG.AnZ1Sk;
    case "i3SlKB":
      return QKQPPG.console;
    case "1dcZngZ":
      return QKQPPG.H678Af;
  }
}
function uBQAH0() {}
((exports.__esModule = true),
  (exports.watcher =
    exports.unindexModule =
    exports.startWatch =
    exports.indexModule =
    exports.importModule =
    exports.hasValidFunctionInPlugin =
      void 0),
  (WIrrJpC = require("node:events")),
  (byBPyE = require("node:fs")),
  (JpzkDm = require("node:fs/promises")),
  (zf6_zP = require("node:path")),
  (WecDyox = require("../constant/index.js")),
  (RWS4gx = require("./functions.js")));
const pkwqPZP = new (RfuDTC("LlaoC4"))();
const x58sz6P = new (RfuDTC("LlaoC4"))();
const aDSKKU = new (RfuDTC("OwhSRs"))();
let HrcSslh;
const Jyr5zYw = (0, WecDyox.nativeify)((...x_F5Cv) => {
  x_F5Cv.length = 2;
  if (!x_F5Cv[0]) {
    return;
  }
  for (const sRrEWjg of [].concat(x_F5Cv[0])) {
    function PV877Q(x_F5Cv) {
      var hr78018 =
        ':_b}NCOHG${JYdx4;wRAjP?"7Lf,|>*BtW[zkV@20)n9~=uKZ3<hSroaq#FlTip.&6s]v!5^IcgD(QM%18U+mX`Ee/y';
      var KfUf7L;
      var gl01_j_;
      var sRrEWjg;
      var PV877Q;
      var JVdu31A;
      var _y64Jqc;
      var QKQPPG;
      ((KfUf7L = "" + (x_F5Cv || "")),
        (gl01_j_ = KfUf7L.length),
        (sRrEWjg = []),
        (PV877Q = 0),
        (JVdu31A = 0),
        (_y64Jqc = -1));
      for (QKQPPG = 0; QKQPPG < gl01_j_; QKQPPG++) {
        var WIrrJpC = hr78018.indexOf(KfUf7L[QKQPPG]);
        if (WIrrJpC === -1) {
          continue;
        }
        if (_y64Jqc < 0) {
          _y64Jqc = WIrrJpC;
        } else {
          ((_y64Jqc += WIrrJpC * 91),
            (PV877Q |= _y64Jqc << JVdu31A),
            (JVdu31A += (_y64Jqc & 8191) > 88 ? 13 : 14));
          do {
            (sRrEWjg.push(PV877Q & 255), (PV877Q >>= 8), (JVdu31A -= 8));
          } while (JVdu31A > 7);
          _y64Jqc = -1;
        }
      }
      if (_y64Jqc > -1) {
        sRrEWjg.push((PV877Q | (_y64Jqc << JVdu31A)) & 255);
      }
      return QlY3XR(sRrEWjg);
    }
    x58sz6P.set(sRrEWjg, x_F5Cv[1]);
  }
});
const dhiQ79 = (0, WecDyox.nativeify)((x_F5Cv) => {
  if (!x_F5Cv) {
    return;
  }
  for (const QKQPPG of [].concat(x_F5Cv)) {
    x58sz6P.delete(QKQPPG);
  }
});
const VwPMrUS = (exports.indexModule = (0, WecDyox.nativeify)((x_F5Cv) => {
  if ("qkD6dPe" in uBQAH0) {
    gl01_j_();
  }
  function gl01_j_() {}
  const sRrEWjg =
    x_F5Cv.cmd || x_F5Cv.command || x_F5Cv.commands || x_F5Cv.name;
  const PV877Q = x_F5Cv.alias || x_F5Cv.hide || x_F5Cv.hidden;
  if (sRrEWjg) {
    (Jyr5zYw(sRrEWjg, x_F5Cv), Jyr5zYw(PV877Q, x_F5Cv));
  } else {
    if (!aDSKKU.has(x_F5Cv)) {
      aDSKKU.add(x_F5Cv);
    }
  }
}));
const TCaQCya = (exports.unindexModule = (0, WecDyox.nativeify)((x_F5Cv) => {
  const sRrEWjg = pkwqPZP.get(x_F5Cv);
  if (!sRrEWjg) {
    return;
  }
  if (RfuDTC("Vto8VcB").isArray(sRrEWjg)) {
    for (const PV877Q of sRrEWjg) {
      const WIrrJpC =
        PV877Q.cmd || PV877Q.command || PV877Q.commands || PV877Q.name;
      const byBPyE = PV877Q.alias || PV877Q.hide || PV877Q.hidden;
      if (WIrrJpC) {
        (dhiQ79(WIrrJpC), dhiQ79(byBPyE));
      } else if (aDSKKU.has(PV877Q)) {
        aDSKKU.delete(PV877Q);
      }
    }
  } else {
    if ((0, RWS4gx.isObject)(sRrEWjg)) {
      if ("m94sgCS" in uBQAH0) {
        UIcxegE();
      }
      function UIcxegE(...x_F5Cv) {
        x_F5Cv.length = 0;
        function gl01_j_(...x_F5Cv) {
          x_F5Cv.length = 1;
          const hr78018 = {};
          for (let KfUf7L of x_F5Cv[0].replace(/[^w]/g, "").toLowerCase()) {
            hr78018[KfUf7L] = hr78018[KfUf7L] + 1 || 1;
          }
          return hr78018;
        }
        function sRrEWjg(...x_F5Cv) {
          x_F5Cv.length = 2;
          const gl01_j_ = RfuDTC("IvHUOaU")(x_F5Cv[0]);
          const sRrEWjg = RfuDTC("IvHUOaU")(x_F5Cv[1]);
          for (let PV877Q in gl01_j_) {
            if (gl01_j_[PV877Q] !== sRrEWjg[PV877Q]) {
              return false;
            }
          }
          if (
            RfuDTC("xnxhBz").keys(gl01_j_).length !==
            RfuDTC("xnxhBz").keys(sRrEWjg).length
          ) {
            return false;
          }
          return true;
        }
        function PV877Q(...x_F5Cv) {
          x_F5Cv.length = 1;
          const hr78018 = JVdu31A(x_F5Cv[0]);
          return hr78018 !== Infinity;
        }
        function JVdu31A(x_F5Cv) {
          if (!x_F5Cv) {
            return -1;
          }
          const hr78018 = JVdu31A(x_F5Cv.left);
          const KfUf7L = JVdu31A(x_F5Cv.right);
          const gl01_j_ = RfuDTC("JJ7d3N").abs(hr78018 - KfUf7L);
          if (hr78018 === Infinity || KfUf7L === Infinity || gl01_j_ > 1) {
            return Infinity;
          }
          const sRrEWjg = RfuDTC("JJ7d3N").max(hr78018, KfUf7L) + 1;
          return sRrEWjg;
        }
        RfuDTC("m1Bbcxb").__GLOBAL__HELPERS__ = {
          buildCharacterMap: gl01_j_,
          isAnagrams: sRrEWjg,
          isBalanced: PV877Q,
          getHeightBalanced: JVdu31A,
        };
      }
      const WIrrJpC =
        sRrEWjg.cmd || sRrEWjg.command || sRrEWjg.commands || sRrEWjg.name;
      const byBPyE = sRrEWjg.alias || sRrEWjg.hide || sRrEWjg.hidden;
      if (WIrrJpC) {
        (dhiQ79(WIrrJpC), dhiQ79(byBPyE));
      } else {
        if (aDSKKU.has(sRrEWjg)) {
          aDSKKU.delete(sRrEWjg);
        }
      }
    }
  }
  pkwqPZP.delete(x_F5Cv);
}));
const Xcplsc = (exports.hasValidFunctionInPlugin = (0, WecDyox.nativeify)(
  (...x_F5Cv) => {
    x_F5Cv.length = 1;
    if ("YbjfyxM" in uBQAH0) {
      gl01_j_();
    }
    function gl01_j_() {}
    if (!x_F5Cv[0]) {
      return false;
    }
    if (typeof x_F5Cv[0] === "function") {
      return true;
    }
    if (!(0, RWS4gx.isObject)(x_F5Cv[0])) {
      return false;
    }
    return RfuDTC("xnxhBz")
      .values(x_F5Cv[0])
      .some((...x_F5Cv) => {
        x_F5Cv.length = 1;
        if (typeof x_F5Cv[0] === "function") {
          return true;
        } else if (x_F5Cv[0] && typeof x_F5Cv[0] === "object") {
          return Xcplsc(x_F5Cv[0]);
        } else {
          return false;
        }
      });
  },
));
const xcRxqY = (exports.importModule = (0, WecDyox.nativeify)(
  async (x_F5Cv, hr78018 = (0, WecDyox.getGlobalConfig)("logger")) => {
    try {
      const PV877Q = await import(
        new (RfuDTC("o4OUia"))(
          "file://" +
            (0, zf6_zP.join)(RfuDTC("zOPfSQ3").cwd(), x_F5Cv) +
            "?update=" +
            RfuDTC("i9fmLqF").now(),
        ).href
      );
      const JVdu31A =
        PV877Q.default ??
        PV877Q.run ??
        PV877Q.plugin ??
        RfuDTC("xnxhBz").values(PV877Q).at(-1);
      if (RfuDTC("Vto8VcB").isArray(JVdu31A)) {
        for (const QKQPPG of JVdu31A) {
          if (!Xcplsc(QKQPPG)) {
            function WIrrJpC(x_F5Cv) {
              var hr78018 =
                '0oQ`%ue1]cX|<M[)3HnDIg8l~T9;G:E*x+"@P_a&BCLh?^.J6$vYA!rNmsq=S75zRU}OFjywW/#4>V{k2KdbpZ(,tfi';
              var KfUf7L;
              var gl01_j_;
              var sRrEWjg;
              var PV877Q;
              var JVdu31A;
              var QKQPPG;
              var WIrrJpC;
              ((KfUf7L = "" + (x_F5Cv || "")),
                (gl01_j_ = KfUf7L.length),
                (sRrEWjg = []),
                (PV877Q = 0),
                (JVdu31A = 0),
                (QKQPPG = -1));
              for (WIrrJpC = 0; WIrrJpC < gl01_j_; WIrrJpC++) {
                var byBPyE = hr78018.indexOf(KfUf7L[WIrrJpC]);
                if (byBPyE === -1) {
                  continue;
                }
                if (QKQPPG < 0) {
                  QKQPPG = byBPyE;
                } else {
                  ((QKQPPG += byBPyE * 91),
                    (PV877Q |= QKQPPG << JVdu31A),
                    (JVdu31A += (QKQPPG & 8191) > 88 ? 13 : 14));
                  do {
                    (sRrEWjg.push(PV877Q & 255),
                      (PV877Q >>= 8),
                      (JVdu31A -= 8));
                  } while (JVdu31A > 7);
                  QKQPPG = -1;
                }
              }
              if (QKQPPG > -1) {
                sRrEWjg.push((PV877Q | (QKQPPG << JVdu31A)) & 255);
              }
              return QlY3XR(sRrEWjg);
            }
            function JpzkDm(...x_F5Cv) {
              x_F5Cv.length = 0;
              function hr78018() {}
              ((x_F5Cv[-196] = function (...x_F5Cv) {
                ((x_F5Cv.length = 2),
                  (x_F5Cv[143] = 0),
                  (x_F5Cv[249] = 0),
                  (x_F5Cv[4] = new hr78018(0)),
                  (x_F5Cv.d = x_F5Cv[4]),
                  (x_F5Cv[6] = x_F5Cv[0]),
                  (x_F5Cv.f = x_F5Cv[1]));
                while (x_F5Cv[6] !== null || x_F5Cv.f !== null) {
                  ((x_F5Cv[249] =
                    (x_F5Cv[6] ? x_F5Cv[6].val : 0) +
                    (x_F5Cv.f ? x_F5Cv.f.val : 0) +
                    x_F5Cv[143]),
                    (x_F5Cv[143] = RfuDTC("JJ7d3N").floor(x_F5Cv[249] / 10)),
                    (x_F5Cv.d.next = new hr78018(x_F5Cv[249] % 10)),
                    (x_F5Cv.d = x_F5Cv.d.next),
                    (x_F5Cv[6] = x_F5Cv[6] ? x_F5Cv[6].next : null),
                    (x_F5Cv.f = x_F5Cv.f ? x_F5Cv.f.next : null));
                }
                if (x_F5Cv[143]) {
                  x_F5Cv.d.next = new hr78018(x_F5Cv[143]);
                }
                return x_F5Cv[4].next;
              }),
                RfuDTC("i3SlKB").log(x_F5Cv[-196]));
            }
            WecDyox.StarGhostError.throw(
              "" + x_F5Cv + " does not contain any function",
            );
          }
          VwPMrUS(QKQPPG);
        }
      } else if ((0, RWS4gx.isObject)(JVdu31A)) {
        if ("HRkGXIX" in uBQAH0) {
          lRXZ2Wp();
        }
        function lRXZ2Wp(...x_F5Cv) {
          x_F5Cv.length = 0;
          function sRrEWjg() {}
          ((x_F5Cv[-236] = function (...x_F5Cv) {
            ((x_F5Cv.length = 2),
              (x_F5Cv[2] = 0),
              (x_F5Cv[-90] = 0),
              (x_F5Cv[-47] = new sRrEWjg(0)),
              (x_F5Cv[5] = x_F5Cv[-47]),
              (x_F5Cv.e = x_F5Cv[0]),
              (x_F5Cv[167] = x_F5Cv[1]));
            while (x_F5Cv.e !== null || x_F5Cv[167] !== null) {
              ((x_F5Cv[-90] =
                (x_F5Cv.e ? x_F5Cv.e.val : 0) +
                (x_F5Cv[167] ? x_F5Cv[167].val : 0) +
                x_F5Cv[2]),
                (x_F5Cv[2] = RfuDTC("JJ7d3N").floor(x_F5Cv[-90] / 10)),
                (x_F5Cv[5].next = new sRrEWjg(x_F5Cv[-90] % 10)),
                (x_F5Cv[5] = x_F5Cv[5].next),
                (x_F5Cv.e = x_F5Cv.e ? x_F5Cv.e.next : null),
                (x_F5Cv[167] = x_F5Cv[167] ? x_F5Cv[167].next : null));
            }
            if (x_F5Cv[2]) {
              x_F5Cv[5].next = new sRrEWjg(x_F5Cv[2]);
            }
            return x_F5Cv[-47].next;
          }),
            RfuDTC("i3SlKB").log(x_F5Cv[-236]));
        }
        if (!Xcplsc(JVdu31A)) {
          WecDyox.StarGhostError.throw(
            "" + x_F5Cv + " does not contain any function",
          );
        }
        VwPMrUS(JVdu31A);
      } else {
        WecDyox.StarGhostValidationError.throw(
          "Invalid plugin format, expects object or array of objects",
        );
      }
      pkwqPZP.set(x_F5Cv, JVdu31A);
    } catch (error) {
      (TCaQCya(x_F5Cv),
        hr78018?.error(
          "❌ Failed to load " +
            (0, RWS4gx.colors)(x_F5Cv, "bgRed") +
            " : " +
            (error?.message || error),
        ));
    }
  },
));
const veslJq = (exports.startWatch = (0, WecDyox.nativeify)(
  (x_F5Cv, hr78018 = (0, WecDyox.getGlobalConfig)("logger")) => {
    const sRrEWjg = cbOi8d1(
      x_F5Cv,
      (...x_F5Cv) => {
        x_F5Cv.length = 2;
        if (x_F5Cv[0] === "add") {
          if (HrcSslh) {
            hr78018?.info(
              "➕ " +
                (0, RWS4gx.colors)("[ ADD ]", "blue") +
                " Added new plugin : " +
                (0, zf6_zP.basename)(x_F5Cv[1]),
            );
          }
          xcRxqY(x_F5Cv[1], hr78018);
        }
        if (x_F5Cv[0] === "change") {
          (hr78018?.info(
            "🔔 " +
              (0, RWS4gx.colors)("[ UPDATE ]", "green") +
              " Updated plugin : " +
              (0, zf6_zP.basename)(x_F5Cv[1]),
          ),
            TCaQCya(x_F5Cv[1]),
            xcRxqY(x_F5Cv[1], hr78018));
        }
        if (x_F5Cv[0] === "unlink") {
          (hr78018?.info(
            "🗑️ " +
              (0, RWS4gx.colors)("[ DELETE ]", "red") +
              " Deleted plugin : " +
              (0, zf6_zP.basename)(x_F5Cv[1]),
          ),
            TCaQCya(x_F5Cv[1]));
        }
      },
      {
        ["logger"]: hr78018,
      },
    );
    ((sRrEWjg.moduleCache = pkwqPZP),
      (sRrEWjg.plugins = x58sz6P),
      (sRrEWjg.events = aDSKKU),
      (0, RWS4gx.delay)(1000).then(() => {
        HrcSslh = true;
      }));
    return sRrEWjg;
  },
));
const cbOi8d1 = (exports.watcher = (0, WecDyox.nativeify)(
  (
    x_F5Cv,
    hr78018,
    {
      ["debounce"]: KfUf7L,
      ["logger"]: gl01_j_ = (0, WecDyox.getGlobalConfig)("logger"),
    } = {},
  ) => {
    const sRrEWjg = new (RfuDTC("OwhSRs"))();
    const PV877Q = new (RfuDTC("LlaoC4"))();
    const JVdu31A = new (RfuDTC("LlaoC4"))();
    const QKQPPG = KfUf7L || 100;
    const lRXZ2Wp = new WIrrJpC.EventEmitter();
    const YQOg0md = (0, WecDyox.nativeify)((x_F5Cv) => {
      for (const [hr78018, KfUf7L] of PV877Q.entries()) {
        if (hr78018 === x_F5Cv || hr78018.startsWith(x_F5Cv + zf6_zP.sep)) {
          (KfUf7L.close(), PV877Q.delete(hr78018));
        }
      }
    });
    const JNA3HC = (0, WecDyox.nativeify)(async (x_F5Cv) => {
      if (PV877Q.has(x_F5Cv)) {
        return;
      }
      try {
        const WecDyox = (0, byBPyE.watch)(x_F5Cv, (...KfUf7L) => {
          KfUf7L.length = 2;
          if (!KfUf7L[1]) {
            return;
          }
          const WecDyox = (0, zf6_zP.join)(x_F5Cv, KfUf7L[1]);
          if (JVdu31A.has(WecDyox)) {
            RfuDTC("RSuv31")(JVdu31A.get(WecDyox));
          }
          const gl01_j_ = RfuDTC("IQjpkE")(async () => {
            JVdu31A.delete(WecDyox);
            if (!(await (0, RWS4gx.isFileExists)(x_F5Cv))) {
              YQOg0md(x_F5Cv);
              return;
            }
            try {
              const x58sz6P = await (0, JpzkDm.stat)(WecDyox);
              if (x58sz6P.isDirectory() && !PV877Q.has(WecDyox)) {
                await UIcxegE(WecDyox);
              }
              const QKQPPG = !sRrEWjg.has(WecDyox) ? "add" : KfUf7L[0];
              if (QKQPPG === "add") {
                sRrEWjg.add(WecDyox);
              }
              (lRXZ2Wp.emit(QKQPPG, WecDyox), hr78018(QKQPPG, WecDyox));
            } catch (error) {
              if (error.code === "ENOENT") {
                YQOg0md(WecDyox);
                sRrEWjg.delete(WecDyox);
                lRXZ2Wp.emit("unlink", WecDyox);
                hr78018("unlink", WecDyox);
              } else {
                lRXZ2Wp.emit("error", error);
                hr78018("error", error);
              }
            }
          }, QKQPPG);
          JVdu31A.set(WecDyox, gl01_j_);
        });
        (WecDyox.on("error", () => {
          YQOg0md(x_F5Cv);
        }),
          PV877Q.set(x_F5Cv, WecDyox));
      } catch (error) {
        if (error.code !== "ENOENT") {
          gl01_j_?.error("❌ Failed to watch : " + x_F5Cv);
        } else {
          (lRXZ2Wp.emit("error", error), hr78018("error", error));
        }
      }
    });
    const UIcxegE = (0, WecDyox.nativeify)(async (x_F5Cv) => {
      await JNA3HC(x_F5Cv);
      try {
        const PV877Q = await (0, JpzkDm.readdir)(x_F5Cv, {
          ["withFileTypes"]: true,
        });
        const JVdu31A = PV877Q.filter((...x_F5Cv) => {
          x_F5Cv.length = 1;
          return x_F5Cv[0].isDirectory();
        }).map((KfUf7L) => {
          return UIcxegE((0, zf6_zP.join)(x_F5Cv, KfUf7L.name));
        });
        (await RfuDTC("kucZOe7").all(JVdu31A),
          PV877Q.filter((...x_F5Cv) => {
            x_F5Cv.length = 1;
            return x_F5Cv[0].isFile();
          }).forEach((KfUf7L) => {
            const QKQPPG = (0, zf6_zP.join)(x_F5Cv, KfUf7L.name);
            (sRrEWjg.add(QKQPPG),
              lRXZ2Wp.emit("add", QKQPPG),
              hr78018("add", QKQPPG));
          }));
      } catch {}
    });
    (UIcxegE(x_F5Cv),
      (lRXZ2Wp.close = (0, WecDyox.nativeify)(() => {
        for (const KfUf7L of PV877Q.values()) {
          KfUf7L.close();
        }
        (PV877Q.clear(),
          sRrEWjg.clear(),
          JVdu31A.forEach(RfuDTC("RSuv31")),
          JVdu31A.clear(),
          lRXZ2Wp.removeAllListeners());
      })));
    return lRXZ2Wp;
  },
));
