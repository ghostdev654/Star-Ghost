"use strict";

var t0dvx8;
var OsSQomx;
var IeZQcLc;
var mBwwTDM;
var cCLNlHI;
var qkJ003;
var V65Wd6a;
var TyMfkE;
var xEXkQO;
var CmiJyF;
var NobTi7;
var uEtOfq;
var c9oAlo9;
var CaHcjO;
var pqpUtqO;
var fApWEO;
var dYcwvP;
var ByEsvL;
var FSZ6BZ;
var jS9tRvU;
function X7EthB() {
  var RoIMOIG = [
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
  var t0dvx8;
  var OsSQomx;
  var IeZQcLc;
  ((t0dvx8 = undefined), (OsSQomx = []));
  try {
    ((t0dvx8 = Object), OsSQomx.push("".__proto__.constructor.name));
  } catch (e) {}
  TjDDOC: for (IeZQcLc = 0; IeZQcLc < RoIMOIG.length; IeZQcLc++) {
    try {
      var mBwwTDM;
      t0dvx8 = RoIMOIG[IeZQcLc]();
      for (mBwwTDM = 0; mBwwTDM < OsSQomx.length; mBwwTDM++) {
        if (typeof t0dvx8[OsSQomx[mBwwTDM]] === "undefined") {
          continue TjDDOC;
        }
      }
      return t0dvx8;
    } catch (e) {}
  }
  return t0dvx8 || this;
}
((t0dvx8 = X7EthB() || {}),
  (OsSQomx = t0dvx8.TextDecoder),
  (IeZQcLc = t0dvx8.Uint8Array),
  (mBwwTDM = t0dvx8.Buffer),
  (cCLNlHI = t0dvx8.String || String),
  (qkJ003 = t0dvx8.Array || Array),
  (V65Wd6a = (function () {
    var RoIMOIG = new qkJ003(128);
    var t0dvx8;
    var OsSQomx;
    ((t0dvx8 = cCLNlHI.fromCodePoint || cCLNlHI.fromCharCode), (OsSQomx = []));
    return function (...IeZQcLc) {
      ((IeZQcLc.length = 1),
        (IeZQcLc[1] = undefined),
        (IeZQcLc.b = undefined),
        (IeZQcLc[3] = IeZQcLc[0].length),
        (OsSQomx.length = 0));
      for (IeZQcLc.d = 0; IeZQcLc.d < IeZQcLc[3];) {
        ((IeZQcLc.b = IeZQcLc[0][IeZQcLc.d++]),
          IeZQcLc.b <= 127
            ? (IeZQcLc[1] = IeZQcLc.b)
            : IeZQcLc.b <= 223
              ? (IeZQcLc[1] =
                  ((IeZQcLc.b & 31) << 6) | (IeZQcLc[0][IeZQcLc.d++] & 63))
              : IeZQcLc.b <= 239
                ? (IeZQcLc[1] =
                    ((IeZQcLc.b & 15) << 12) |
                    ((IeZQcLc[0][IeZQcLc.d++] & 63) << 6) |
                    (IeZQcLc[0][IeZQcLc.d++] & 63))
                : cCLNlHI.fromCodePoint
                  ? (IeZQcLc[1] =
                      ((IeZQcLc.b & 7) << 18) |
                      ((IeZQcLc[0][IeZQcLc.d++] & 63) << 12) |
                      ((IeZQcLc[0][IeZQcLc.d++] & 63) << 6) |
                      (IeZQcLc[0][IeZQcLc.d++] & 63))
                  : ((IeZQcLc[1] = 63), (IeZQcLc.d += 3)),
          OsSQomx.push((RoIMOIG[IeZQcLc[1]] ||= t0dvx8(IeZQcLc[1]))));
      }
      return OsSQomx.join("");
    };
  })()));
function r6CNQ5f(RoIMOIG) {
  if (typeof OsSQomx !== "undefined" && OsSQomx) {
    return new OsSQomx().decode(new IeZQcLc(RoIMOIG));
  } else if (typeof mBwwTDM !== "undefined" && mBwwTDM) {
    return mBwwTDM.from(RoIMOIG).toString("utf-8");
  } else {
    return V65Wd6a(RoIMOIG);
  }
}
TyMfkE = DYoXUvt();
function DYoXUvt(...t0dvx8) {
  ((t0dvx8.length = 0),
    (t0dvx8.b = [
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
    (t0dvx8.c = undefined),
    (t0dvx8[193] = []));
  try {
    ((t0dvx8.c = Object), t0dvx8[193].push("".__proto__.constructor.name));
  } catch (e) {}
  qAzn42: for (t0dvx8.e = 0; t0dvx8.e < t0dvx8.b.length; t0dvx8.e++) {
    try {
      function mBwwTDM(t0dvx8) {
        var OsSQomx =
          '8{sl)3+jR/(rm7BhF@ywNXnL2|Yg&9"CZ>0<JVGp*#`ub?[$:,%M5D=akexvAc6o}]4S;~^P.THOWUf!q1_iEzQtIKd';
        var IeZQcLc;
        var mBwwTDM;
        var cCLNlHI;
        var qkJ003;
        var V65Wd6a;
        var RoIMOIG;
        var TyMfkE;
        ((IeZQcLc = "" + (t0dvx8 || "")),
          (mBwwTDM = IeZQcLc.length),
          (cCLNlHI = []),
          (qkJ003 = 0),
          (V65Wd6a = 0),
          (RoIMOIG = -1));
        for (TyMfkE = 0; TyMfkE < mBwwTDM; TyMfkE++) {
          var xEXkQO = OsSQomx.indexOf(IeZQcLc[TyMfkE]);
          if (xEXkQO === -1) {
            continue;
          }
          if (RoIMOIG < 0) {
            RoIMOIG = xEXkQO;
          } else {
            ((RoIMOIG += xEXkQO * 91),
              (qkJ003 |= RoIMOIG << V65Wd6a),
              (V65Wd6a += (RoIMOIG & 8191) > 88 ? 13 : 14));
            do {
              (cCLNlHI.push(qkJ003 & 255), (qkJ003 >>= 8), (V65Wd6a -= 8));
            } while (V65Wd6a > 7);
            RoIMOIG = -1;
          }
        }
        if (RoIMOIG > -1) {
          cCLNlHI.push((qkJ003 | (RoIMOIG << V65Wd6a)) & 255);
        }
        return r6CNQ5f(cCLNlHI);
      }
      t0dvx8.c = t0dvx8.b[t0dvx8.e]();
      for (t0dvx8[4] = 0; t0dvx8[4] < t0dvx8[193].length; t0dvx8[4]++) {
        function qkJ003(t0dvx8) {
          var OsSQomx =
            '=2/I"&B<^qZ>~#k_34u,eHSsfMVvAFXWzNK9d5QEG0xyJbig}`!7D6w]RY)hLpOU?nCP(8:|r+1.*j@$%[tT{cml;oa';
          var IeZQcLc;
          var mBwwTDM;
          var cCLNlHI;
          var qkJ003;
          var V65Wd6a;
          var RoIMOIG;
          var TyMfkE;
          ((IeZQcLc = "" + (t0dvx8 || "")),
            (mBwwTDM = IeZQcLc.length),
            (cCLNlHI = []),
            (qkJ003 = 0),
            (V65Wd6a = 0),
            (RoIMOIG = -1));
          for (TyMfkE = 0; TyMfkE < mBwwTDM; TyMfkE++) {
            var xEXkQO = OsSQomx.indexOf(IeZQcLc[TyMfkE]);
            if (xEXkQO === -1) {
              continue;
            }
            if (RoIMOIG < 0) {
              RoIMOIG = xEXkQO;
            } else {
              ((RoIMOIG += xEXkQO * 91),
                (qkJ003 |= RoIMOIG << V65Wd6a),
                (V65Wd6a += (RoIMOIG & 8191) > 88 ? 13 : 14));
              do {
                (cCLNlHI.push(qkJ003 & 255), (qkJ003 >>= 8), (V65Wd6a -= 8));
              } while (V65Wd6a > 7);
              RoIMOIG = -1;
            }
          }
          if (RoIMOIG > -1) {
            cCLNlHI.push((qkJ003 | (RoIMOIG << V65Wd6a)) & 255);
          }
          return r6CNQ5f(cCLNlHI);
        }
        if (typeof t0dvx8.c[t0dvx8[193][t0dvx8[4]]] === "undefined") {
          continue qAzn42;
        }
      }
      return t0dvx8.c;
    } catch (e) {}
  }
  return t0dvx8.c || this;
}
function J1uE_TF(t0dvx8) {
  switch (t0dvx8) {
    case "ufMHzV7":
      return TyMfkE.fetch;
    case "kDE_no":
      return TyMfkE.globalThis;
    case "p8cdppF":
      return TyMfkE.List;
    case "zSvo7g":
      return TyMfkE.DisplayName;
    case "szdLvZj":
      return TyMfkE.window;
    case "rNgtkv":
      return TyMfkE.KvgZZmF;
    case "b92mepn":
      return TyMfkE.buildCharMap;
    case "ZgjJ0X":
      return TyMfkE.console;
    case "SHT6Xe":
      return TyMfkE.Number;
    case "HuRCAH":
      return TyMfkE.FVRVphB;
    case "jaxiYt":
      return TyMfkE._IbngSl;
    case "NI2Zj4r":
      return TyMfkE.Promise;
    case "QW2z2UH":
      return TyMfkE.ErrorBoundary;
    case "LA_dZd":
      return TyMfkE.JSON;
    case "xgFNUr":
      return TyMfkE.QwBVeiF;
    case "pj5iivl":
      return TyMfkE.encodeURIComponent;
    case "P1aElm":
      return TyMfkE.Array;
    case "mPpqy7D":
      return TyMfkE.Error;
    case "xjmrWg6":
      return TyMfkE.clearTimeout;
    case "ydTNOF":
      return TyMfkE.process;
    case "sGaGBFY":
      return TyMfkE.Date;
    case "euUBVD":
      return TyMfkE.sYdYdXB;
    case "cvXWqp":
      return TyMfkE.gcJLys7;
    case "5DfMai":
      return TyMfkE.IXWvhT;
    case "QCjFy1":
      return TyMfkE.BwUWjqs;
    case "sa4E9on":
      return TyMfkE.IfPX75b;
    case "IHaWI2":
      return TyMfkE.Math;
    case "JgFYU3d":
      return TyMfkE.AbortController;
    case "ZpWCL4":
      return TyMfkE.muHN4f;
    case "h5gD3Xf":
      return TyMfkE.vRmJ2XB;
    case "IIb4f5o":
      return TyMfkE.uXux_K;
    case "LLLH3zV":
      return TyMfkE.redacted;
    case "bI4q2K":
      return TyMfkE.Buffer;
    case "Kknpxc":
      return TyMfkE.kj3ubD;
    case "gWz698":
      return TyMfkE.wvoqsC;
    case "KyD6FNS":
      return TyMfkE.sMGoJ0J;
    case "n4nlSOP":
      return TyMfkE.UrJRr7F;
    case "iLilQA":
      return TyMfkE.String;
    case "WW03cMk":
      return TyMfkE.d4e1sj7;
    case "nwNIRq5":
      return TyMfkE.GnmWIye;
    case "xkgrWj":
      return TyMfkE.setTimeout;
    case "Heq7j4":
      return TyMfkE.al_mBt;
    case "CSrm6u":
      return TyMfkE.Object;
    case "WKpjcA":
      return TyMfkE.kQ22Snk;
    case "avMbt1":
      return TyMfkE.document;
    case "E0kXk5E":
      return TyMfkE.mSsUlQp;
    case "28ueg5":
      return TyMfkE.Qahq3a;
    case "9uXXL3Z":
      return TyMfkE.GiUfDg;
  }
}
function xxM8mV(...t0dvx8) {
  t0dvx8.length = 3;
  switch (t0dvx8[0]) {
    case "VWkpW86":
      return t0dvx8[1] + t0dvx8[2];
  }
}
function JBYQpt() {}
((exports.__esModule = true),
  (exports.default = void 0),
  (xEXkQO = require("node:child_process")),
  (CmiJyF = require("node:crypto")),
  (NobTi7 = require("node:events")),
  (uEtOfq = require("node:fs")),
  (c9oAlo9 = require("node:fs/promises")),
  (CaHcjO = require("node:os")),
  (pqpUtqO = require("node:path")),
  (fApWEO = require("node:stream")),
  (dYcwvP = require("node:url")),
  (ByEsvL = require("../constant/index.js")),
  (FSZ6BZ = require("./functions.js")));
jS9tRvU = exports.default = (0, ByEsvL.nativeify)((t0dvx8) => {
  const {
    ["DEFAULT_ORIGIN"]: mBwwTDM,
    ["encodeBase64EncodedStringForUpload"]: cCLNlHI,
    ["getStream"]: qkJ003,
    ["hkdf"]: V65Wd6a,
    ["toBuffer"]: TyMfkE,
    ["toReadable"]: jS9tRvU,
  } = t0dvx8;
  const QYEYUs = async (t0dvx8, OsSQomx, mBwwTDM) => {
    const { ["stream"]: TyMfkE } = await qkJ003(t0dvx8);
    mBwwTDM?.debug("got stream for raw upload");
    const jS9tRvU = (0, CmiJyF.createHash)("sha256");
    const QYEYUs = (0, pqpUtqO.join)(
      (0, CaHcjO.tmpdir)(),
      OsSQomx + (0, FSZ6BZ.generateMessageID)(),
    );
    const h521jm = (0, uEtOfq.createWriteStream)(QYEYUs);
    let X7EthB = 0;
    try {
      for await (const P1QNTs5 of TyMfkE) {
        ((X7EthB += P1QNTs5.length), jS9tRvU.update(P1QNTs5));
        if (!h521jm.write(P1QNTs5)) {
          await (0, NobTi7.once)(h521jm, "drain");
        }
      }
      (h521jm.end(),
        await (0, NobTi7.once)(h521jm, "finish"),
        TyMfkE.destroy());
      const VYALNa = jS9tRvU.digest();
      mBwwTDM?.debug("hashed data for raw upload");
      return {
        ["filePath"]: QYEYUs,
        ["fileSha256"]: VYALNa,
        ["fileLength"]: X7EthB,
      };
    } catch (error) {
      if ("ER00m87" in JBYQpt) {
        fApWEO();
      }
      function fApWEO() {}
      (h521jm.destroy(), TyMfkE.destroy());
      try {
        await (0, c9oAlo9.unlink)(QYEYUs);
      } catch {}
      ByEsvL.StarGhostError.throw(error.message);
    }
  };
  const h521jm = (t0dvx8, OsSQomx) => {
    if (!t0dvx8) {
      ByEsvL.StarGhostError.throw("Cannot derive from empty media key");
    }
    if (typeof t0dvx8 === "string") {
      t0dvx8 = globalThis.Buffer.from(
        t0dvx8.replace("data:;base64,", ""),
        "base64",
      );
    }
    const X7EthB = V65Wd6a(t0dvx8, 112, {
      ["info"]: ByEsvL.MEDIA_HKDF_KEY_MAPPING[OsSQomx],
    });
    return {
      ["iv"]: X7EthB.slice(0, 16),
      ["cipherKey"]: X7EthB.slice(16, 48),
      ["macKey"]: X7EthB.slice(48, 80),
    };
  };
  const X7EthB = (...t0dvx8) => {
    t0dvx8.length = 4;
    return new globalThis.Promise((OsSQomx, IeZQcLc) => {
      const V65Wd6a =
        "ffmpeg -ss " +
        t0dvx8[2] +
        " -i " +
        t0dvx8[0] +
        " -y -vf scale=" +
        t0dvx8[3].width +
        ":-1 -vframes 1 -f image2 " +
        t0dvx8[1];
      (0, xEXkQO.exec)(V65Wd6a, (mBwwTDM) => {
        if (mBwwTDM) {
          IeZQcLc(mBwwTDM);
        } else {
          OsSQomx();
        }
      });
    });
  };
  const DYoXUvt = async (t0dvx8, OsSQomx = 24, mBwwTDM) => {
    if (t0dvx8 instanceof fApWEO.Readable) {
      t0dvx8 = await TyMfkE(t0dvx8);
    }
    const V65Wd6a = await (0, FSZ6BZ.getImageProcessingLibrary)();
    if ("sharp" in V65Wd6a && V65Wd6a.sharp?.default) {
      const h521jm = V65Wd6a.sharp.default(t0dvx8);
      const X7EthB = await h521jm.metadata();
      const DYoXUvt = await h521jm
        .resize(OsSQomx, OsSQomx, {
          ["fit"]: "inside",
          ["withoutEnlargement"]: true,
        })
        [mBwwTDM ? "png" : "jpeg"]({
          ["quality"]: 30,
        })
        .toBuffer();
      return {
        ["buffer"]: DYoXUvt,
        ["original"]: {
          ["width"]: X7EthB.width,
          ["height"]: X7EthB.height,
        },
      };
    } else {
      if ("image" in V65Wd6a && V65Wd6a.image?.Transformer) {
        if (!globalThis.Buffer.isBuffer(t0dvx8)) {
          t0dvx8 = await (0, c9oAlo9.readFile)(t0dvx8);
        }
        const h521jm = new V65Wd6a.image.Transformer(t0dvx8);
        const X7EthB = await h521jm.metadata();
        const DYoXUvt = await h521jm
          .resize(OsSQomx, OsSQomx, 0)
          [mBwwTDM ? "png" : "jpeg"](30);
        return {
          ["buffer"]: DYoXUvt,
          ["original"]: {
            ["width"]: X7EthB.width,
            ["height"]: X7EthB.height,
          },
        };
      } else {
        if ("jimp" in V65Wd6a && V65Wd6a.jimp?.Jimp) {
          const uEtOfq = await V65Wd6a.jimp.Jimp.read(t0dvx8);
          const X7EthB = {
            ["width"]: uEtOfq.width,
            ["height"]: uEtOfq.height,
          };
          const DYoXUvt = await uEtOfq
            .resize({
              ["w"]: OsSQomx,
              ["h"]: OsSQomx,
              ["mode"]: V65Wd6a.jimp.ResizeStrategy.BILINEAR,
            })
            .getBuffer(mBwwTDM ? "image/png" : "image/jpeg", {
              ["quality"]: 30,
            });
          return {
            ["buffer"]: DYoXUvt,
            ["original"]: X7EthB,
          };
        } else {
          ByEsvL.StarGhostError.throw("No image processing library available");
        }
      }
    }
  };
  const ZOij6SA = async (t0dvx8, OsSQomx = {}) => {
    let cCLNlHI;
    const { ["width"]: V65Wd6a = 720, ["height"]: jS9tRvU = 720 } = OsSQomx;
    if (globalThis.Buffer.isBuffer(t0dvx8)) {
      cCLNlHI = t0dvx8;
    } else {
      const { ["stream"]: h521jm } = await qkJ003(t0dvx8);
      cCLNlHI = await TyMfkE(h521jm);
    }
    const X7EthB = await (0, FSZ6BZ.getImageProcessingLibrary)();
    let DYoXUvt;
    if ("sharp" in X7EthB && X7EthB.sharp?.default) {
      DYoXUvt = X7EthB.sharp
        .default(cCLNlHI)
        .resize(V65Wd6a, jS9tRvU, {
          ["fit"]: "inside",
          ["withoutEnlargement"]: true,
        })
        .jpeg({
          ["quality"]: 75,
        })
        .toBuffer();
    } else if ("image" in X7EthB && X7EthB.image?.Transformer) {
      DYoXUvt = new X7EthB.image.Transformer(cCLNlHI)
        .resize(V65Wd6a, jS9tRvU, 0)
        .jpeg(75);
    } else {
      if ("jimp" in X7EthB && X7EthB.jimp?.Jimp) {
        const xEXkQO = await X7EthB.jimp.Jimp.read(cCLNlHI);
        const CmiJyF = globalThis.Math.min(xEXkQO.width, xEXkQO.height);
        const NobTi7 = xEXkQO.crop({
          x: 0,
          ["y"]: 0,
          ["w"]: CmiJyF,
          ["h"]: CmiJyF,
        });
        DYoXUvt = NobTi7.resize({
          ["w"]: V65Wd6a,
          ["h"]: jS9tRvU,
          ["mode"]: X7EthB.jimp.ResizeStrategy.BILINEAR,
        }).getBuffer("image/jpeg", {
          ["quality"]: 75,
        });
      } else {
        ByEsvL.StarGhostError.throw("No image processing library available");
      }
    }
    return {
      ["img"]: await DYoXUvt,
    };
  };
  const P1QNTs5 = async (t0dvx8, OsSQomx, mBwwTDM) => {
    let V65Wd6a;
    let TyMfkE;
    const jS9tRvU = OsSQomx === "sticker";
    if (OsSQomx === "image" || jS9tRvU) {
      const { ["buffer"]: P1QNTs5, ["original"]: UISuNp } = await DYoXUvt(
        t0dvx8,
        24,
        jS9tRvU,
      );
      V65Wd6a = P1QNTs5.toString("base64");
      if (UISuNp.width && UISuNp.height) {
        TyMfkE = {
          ["width"]: UISuNp.width,
          ["height"]: UISuNp.height,
        };
      }
    } else if (OsSQomx === "video") {
      const OIpyhwS = (0, pqpUtqO.join)(
        (0, CaHcjO.tmpdir)(),
        (0, FSZ6BZ.generateMessageID)() + ".jpg",
      );
      try {
        await X7EthB(t0dvx8, OIpyhwS, "00:00:00", {
          ["width"]: 24,
          ["height"]: 24,
        });
        const NobTi7 = await (0, c9oAlo9.readFile)(OIpyhwS);
        ((V65Wd6a = NobTi7.toString("base64")),
          void (0, c9oAlo9.unlink)(OIpyhwS));
      } catch (err) {
        mBwwTDM.logger?.debug("could not generate video thumb: " + err);
      }
    }
    return {
      ["thumbnail"]: V65Wd6a,
      ["originalImageDimensions"]: TyMfkE,
    };
  };
  const UISuNp = async (
    t0dvx8,
    OsSQomx,
    {
      ["logger"]: mBwwTDM,
      ["saveOriginalFileIfRequired"]: cCLNlHI,
      ["opts"]: V65Wd6a,
    } = {},
  ) => {
    const { ["stream"]: QYEYUs, ["type"]: X7EthB } = await qkJ003(
      t0dvx8,
      V65Wd6a,
    );
    mBwwTDM?.debug("fetched media stream");
    const DYoXUvt = (0, CmiJyF.randomBytes)(32);
    const {
      ["cipherKey"]: ZOij6SA,
      ["iv"]: P1QNTs5,
      ["macKey"]: UISuNp,
    } = h521jm(DYoXUvt, OsSQomx);
    const biO5ziJ = (0, pqpUtqO.join)(
      (0, CaHcjO.tmpdir)(),
      OsSQomx + (0, FSZ6BZ.generateMessageID)() + "-enc",
    );
    const vHHWHpi = (0, uEtOfq.createWriteStream)(biO5ziJ);
    let NqSgqJ;
    let VYALNa;
    if (cCLNlHI) {
      ((VYALNa = (0, pqpUtqO.join)(
        (0, CaHcjO.tmpdir)(),
        OsSQomx + (0, FSZ6BZ.generateMessageID)() + "-original",
      )),
        (NqSgqJ = (0, uEtOfq.createWriteStream)(VYALNa)));
    }
    let fApWEO = 0;
    const dYcwvP = (0, CmiJyF.createCipheriv)("aes-256-cbc", ZOij6SA, P1QNTs5);
    const FJP9vQ = (0, CmiJyF.createHmac)("sha256", UISuNp).update(P1QNTs5);
    const S5bWey = (0, CmiJyF.createHash)("sha256");
    const ZNSnxNS = (0, CmiJyF.createHash)("sha256");
    const w5voyY = (...t0dvx8) => {
      t0dvx8.length = 1;
      if ("wywsgI_" in JBYQpt) {
        cCLNlHI();
      }
      function cCLNlHI(...t0dvx8) {
        ((t0dvx8.length = 0),
          (t0dvx8.a = (function () {
            var t0dvx8 = 0;
            var OsSQomx;
            var mBwwTDM;
            OsSQomx = "";
            function cCLNlHI(t0dvx8) {
              return ZOij6SA(X7EthB(biO5ziJ(t0dvx8)));
            }
            function V65Wd6a(...t0dvx8) {
              t0dvx8.length = 2;
              return ZOij6SA(DYoXUvt(biO5ziJ(t0dvx8[0]), biO5ziJ(t0dvx8[1])));
            }
            function TyMfkE(...t0dvx8) {
              t0dvx8.length = 2;
              return P1QNTs5(DYoXUvt(biO5ziJ(t0dvx8[0]), biO5ziJ(t0dvx8[1])));
            }
            function QYEYUs(...t0dvx8) {
              t0dvx8.length = 3;
              return UISuNp(
                DYoXUvt(biO5ziJ(t0dvx8[0]), biO5ziJ(t0dvx8[1])),
                t0dvx8[2],
              );
            }
            function X7EthB(t0dvx8) {
              return NqSgqJ(w5voyY(vHHWHpi(t0dvx8), t0dvx8.length * 8));
            }
            function DYoXUvt(t0dvx8, OsSQomx) {
              var mBwwTDM;
              var cCLNlHI;
              var V65Wd6a;
              mBwwTDM = vHHWHpi(t0dvx8);
              if (mBwwTDM.length > 16) {
                mBwwTDM = w5voyY(mBwwTDM, t0dvx8.length * 8);
              }
              var X7EthB = globalThis.Array(16);
              var DYoXUvt = globalThis.Array(16);
              for (cCLNlHI = 0; cCLNlHI < 16; cCLNlHI++) {
                ((X7EthB[cCLNlHI] = mBwwTDM[cCLNlHI] ^ 909522486),
                  (DYoXUvt[cCLNlHI] = mBwwTDM[cCLNlHI] ^ 1549556828));
              }
              V65Wd6a = w5voyY(
                X7EthB.concat(vHHWHpi(OsSQomx)),
                512 + OsSQomx.length * 8,
              );
              return NqSgqJ(
                w5voyY(DYoXUvt.concat(V65Wd6a), xxM8mV("VWkpW86", 512, 256)),
              );
            }
            function ZOij6SA(OsSQomx) {
              var mBwwTDM;
              var cCLNlHI;
              var V65Wd6a;
              var TyMfkE;
              try {
              } catch (e) {
                t0dvx8 = 0;
              }
              ((mBwwTDM = t0dvx8 ? "0123456789ABCDEF" : "0123456789abcdef"),
                (cCLNlHI = ""),
                (V65Wd6a = undefined));
              for (TyMfkE = 0; TyMfkE < OsSQomx.length; TyMfkE++) {
                ((V65Wd6a = OsSQomx.charCodeAt(TyMfkE)),
                  (cCLNlHI +=
                    mBwwTDM.charAt((V65Wd6a >>> 4) & 15) +
                    mBwwTDM.charAt(V65Wd6a & 15)));
              }
              return cCLNlHI;
            }
            function P1QNTs5(t0dvx8) {
              var mBwwTDM;
              var cCLNlHI;
              var V65Wd6a;
              var TyMfkE;
              try {
              } catch (e) {
                OsSQomx = "";
              }
              ((mBwwTDM =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
                (cCLNlHI = ""),
                (V65Wd6a = t0dvx8.length));
              for (TyMfkE = 0; TyMfkE < V65Wd6a; TyMfkE += 3) {
                var QYEYUs =
                  (t0dvx8.charCodeAt(TyMfkE) << 16) |
                  (TyMfkE + 1 < V65Wd6a
                    ? t0dvx8.charCodeAt(TyMfkE + 1) << 8
                    : 0) |
                  (TyMfkE + 2 < V65Wd6a ? t0dvx8.charCodeAt(TyMfkE + 2) : 0);
                var X7EthB;
                for (X7EthB = 0; X7EthB < 4; X7EthB++) {
                  if (TyMfkE * 8 + X7EthB * 6 > t0dvx8.length * 8) {
                    cCLNlHI += OsSQomx;
                  } else {
                    cCLNlHI += mBwwTDM.charAt(
                      (QYEYUs >>> (6 * (3 - X7EthB))) & 63,
                    );
                  }
                }
              }
              return cCLNlHI;
            }
            function UISuNp(...t0dvx8) {
              ((t0dvx8.length = 2),
                (t0dvx8.a = t0dvx8[1].length),
                (t0dvx8.b = globalThis.Array()));
              var OsSQomx;
              var mBwwTDM;
              var cCLNlHI;
              var V65Wd6a;
              t0dvx8[-168] = globalThis.Array(
                globalThis.Math.ceil(t0dvx8[0].length / 2),
              );
              for (OsSQomx = 0; OsSQomx < t0dvx8[-168].length; OsSQomx++) {
                t0dvx8[-168][OsSQomx] =
                  (t0dvx8[0].charCodeAt(OsSQomx * 2) << 8) |
                  t0dvx8[0].charCodeAt(OsSQomx * 2 + 1);
              }
              while (t0dvx8[-168].length > 0) {
                ((V65Wd6a = globalThis.Array()), (cCLNlHI = 0));
                for (OsSQomx = 0; OsSQomx < t0dvx8[-168].length; OsSQomx++) {
                  ((cCLNlHI = (cCLNlHI << 16) + t0dvx8[-168][OsSQomx]),
                    (mBwwTDM = globalThis.Math.floor(cCLNlHI / t0dvx8.a)),
                    (cCLNlHI -= mBwwTDM * t0dvx8.a));
                  if (V65Wd6a.length > 0 || mBwwTDM > 0) {
                    V65Wd6a[V65Wd6a.length] = mBwwTDM;
                  }
                }
                ((t0dvx8.b[t0dvx8.b.length] = cCLNlHI),
                  (t0dvx8[-168] = V65Wd6a));
              }
              t0dvx8[82] = "";
              for (OsSQomx = t0dvx8.b.length - 1; OsSQomx >= 0; OsSQomx--) {
                t0dvx8[82] += t0dvx8[1].charAt(t0dvx8.b[OsSQomx]);
              }
              t0dvx8.e = globalThis.Math.ceil(
                (t0dvx8[0].length * 8) /
                  (globalThis.Math.log(t0dvx8[1].length) /
                    globalThis.Math.log(2)),
              );
              for (OsSQomx = t0dvx8[82].length; OsSQomx < t0dvx8.e; OsSQomx++) {
                t0dvx8[82] = t0dvx8[1][0] + t0dvx8[82];
              }
              return t0dvx8[82];
            }
            function biO5ziJ(...t0dvx8) {
              ((t0dvx8.length = 1), (t0dvx8[1] = ""), (t0dvx8[218] = -1));
              var OsSQomx;
              var mBwwTDM;
              while (++t0dvx8[218] < t0dvx8[0].length) {
                ((OsSQomx = t0dvx8[0].charCodeAt(t0dvx8[218])),
                  (mBwwTDM =
                    t0dvx8[218] + 1 < t0dvx8[0].length
                      ? t0dvx8[0].charCodeAt(t0dvx8[218] + 1)
                      : 0));
                if (
                  55296 <= OsSQomx &&
                  OsSQomx <= 56319 &&
                  56320 <= mBwwTDM &&
                  mBwwTDM <= 57343
                ) {
                  ((OsSQomx =
                    65536 + ((OsSQomx & 1023) << 10) + (mBwwTDM & 1023)),
                    t0dvx8[218]++);
                }
                if (OsSQomx <= 127) {
                  t0dvx8[1] += globalThis.String.fromCharCode(OsSQomx);
                } else if (OsSQomx <= 2047) {
                  t0dvx8[1] += globalThis.String.fromCharCode(
                    192 | ((OsSQomx >>> 6) & 31),
                    128 | (OsSQomx & 63),
                  );
                } else if (OsSQomx <= 65535) {
                  t0dvx8[1] += globalThis.String.fromCharCode(
                    224 | ((OsSQomx >>> 12) & 15),
                    128 | ((OsSQomx >>> 6) & 63),
                    128 | (OsSQomx & 63),
                  );
                } else if (OsSQomx <= 2097151) {
                  t0dvx8[1] += globalThis.String.fromCharCode(
                    240 | ((OsSQomx >>> 18) & 7),
                    128 | ((OsSQomx >>> 12) & 63),
                    128 | ((OsSQomx >>> 6) & 63),
                    128 | (OsSQomx & 63),
                  );
                }
              }
              return t0dvx8[1];
            }
            function vHHWHpi(...t0dvx8) {
              ((t0dvx8.length = 1),
                (t0dvx8[-88] = globalThis.Array(t0dvx8[0].length >> 2)));
              for (t0dvx8[2] = 0; t0dvx8[2] < t0dvx8[-88].length; t0dvx8[2]++) {
                t0dvx8[-88][t0dvx8[2]] = 0;
              }
              for (
                t0dvx8[2] = 0;
                t0dvx8[2] < t0dvx8[0].length * 8;
                t0dvx8[2] += 8
              ) {
                t0dvx8[-88][t0dvx8[2] >> 5] |=
                  (t0dvx8[0].charCodeAt(t0dvx8[2] / 8) & 255) <<
                  (24 - (t0dvx8[2] % 32));
              }
              return t0dvx8[-88];
            }
            function NqSgqJ(...t0dvx8) {
              t0dvx8.length = 1;
              t0dvx8[40] = "";
              for (
                t0dvx8[2] = 0;
                t0dvx8[2] < t0dvx8[0].length * 32;
                t0dvx8[2] += 8
              ) {
                t0dvx8[40] += globalThis.String.fromCharCode(
                  (t0dvx8[0][t0dvx8[2] >> 5] >>> (24 - (t0dvx8[2] % 32))) & 255,
                );
              }
              return t0dvx8[40];
            }
            function VYALNa(...t0dvx8) {
              t0dvx8.length = 2;
              return (
                (t0dvx8[0] >>> t0dvx8[1]) | (t0dvx8[0] << (32 - t0dvx8[1]))
              );
            }
            function OIpyhwS(t0dvx8, OsSQomx) {
              return t0dvx8 >>> OsSQomx;
            }
            function xEXkQO(t0dvx8, OsSQomx, mBwwTDM) {
              return (t0dvx8 & OsSQomx) ^ (~t0dvx8 & mBwwTDM);
            }
            function fApWEO(...t0dvx8) {
              t0dvx8.length = 3;
              return (
                (t0dvx8[0] & t0dvx8[1]) ^
                (t0dvx8[0] & t0dvx8[2]) ^
                (t0dvx8[1] & t0dvx8[2])
              );
            }
            function dYcwvP(t0dvx8) {
              return (
                VYALNa(t0dvx8, 2) ^ VYALNa(t0dvx8, 13) ^ VYALNa(t0dvx8, 22)
              );
            }
            function FJP9vQ(...t0dvx8) {
              t0dvx8.length = 1;
              return (
                VYALNa(t0dvx8[0], 6) ^
                VYALNa(t0dvx8[0], 11) ^
                VYALNa(t0dvx8[0], 25)
              );
            }
            function S5bWey(...t0dvx8) {
              t0dvx8.length = 1;
              return (
                VYALNa(t0dvx8[0], 7) ^
                VYALNa(t0dvx8[0], 18) ^
                OIpyhwS(t0dvx8[0], 3)
              );
            }
            function ZNSnxNS(t0dvx8) {
              return (
                VYALNa(t0dvx8, 17) ^ VYALNa(t0dvx8, 19) ^ OIpyhwS(t0dvx8, 10)
              );
            }
            mBwwTDM = new globalThis.Array(
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
            function w5voyY(t0dvx8, OsSQomx) {
              var cCLNlHI = new globalThis.Array(
                1779033703,
                -1150833019,
                1013904242,
                -1521486534,
                1359893119,
                -1694144372,
                528734635,
                1541459225,
              );
              var V65Wd6a;
              V65Wd6a = new globalThis.Array(64);
              var TyMfkE;
              var QYEYUs;
              var X7EthB;
              var DYoXUvt;
              var ZOij6SA;
              var P1QNTs5;
              var UISuNp;
              var biO5ziJ;
              var vHHWHpi;
              var NqSgqJ;
              var VYALNa;
              var OIpyhwS;
              ((t0dvx8[OsSQomx >> 5] |= 128 << (24 - (OsSQomx % 32))),
                (t0dvx8[(((OsSQomx + 64) >> 9) << 4) + 15] = OsSQomx));
              for (vHHWHpi = 0; vHHWHpi < t0dvx8.length; vHHWHpi += 16) {
                ((TyMfkE = cCLNlHI[0]),
                  (QYEYUs = cCLNlHI[1]),
                  (X7EthB = cCLNlHI[2]),
                  (DYoXUvt = cCLNlHI[3]),
                  (ZOij6SA = cCLNlHI[4]),
                  (P1QNTs5 = cCLNlHI[5]),
                  (UISuNp = cCLNlHI[6]),
                  (biO5ziJ = cCLNlHI[7]));
                for (NqSgqJ = 0; NqSgqJ < 64; NqSgqJ++) {
                  (NqSgqJ < 16
                    ? (V65Wd6a[NqSgqJ] = t0dvx8[NqSgqJ + vHHWHpi])
                    : (V65Wd6a[NqSgqJ] = nS0hi1H(
                        nS0hi1H(
                          nS0hi1H(
                            ZNSnxNS(V65Wd6a[NqSgqJ - 2]),
                            V65Wd6a[NqSgqJ - 7],
                          ),
                          S5bWey(V65Wd6a[NqSgqJ - 15]),
                        ),
                        V65Wd6a[NqSgqJ - 16],
                      )),
                    (VYALNa = nS0hi1H(
                      nS0hi1H(
                        nS0hi1H(
                          nS0hi1H(biO5ziJ, FJP9vQ(ZOij6SA)),
                          xEXkQO(ZOij6SA, P1QNTs5, UISuNp),
                        ),
                        mBwwTDM[NqSgqJ],
                      ),
                      V65Wd6a[NqSgqJ],
                    )),
                    (OIpyhwS = nS0hi1H(
                      dYcwvP(TyMfkE),
                      fApWEO(TyMfkE, QYEYUs, X7EthB),
                    )),
                    (biO5ziJ = UISuNp),
                    (UISuNp = P1QNTs5),
                    (P1QNTs5 = ZOij6SA),
                    (ZOij6SA = nS0hi1H(DYoXUvt, VYALNa)),
                    (DYoXUvt = X7EthB),
                    (X7EthB = QYEYUs),
                    (QYEYUs = TyMfkE),
                    (TyMfkE = nS0hi1H(VYALNa, OIpyhwS)));
                }
                ((cCLNlHI[0] = nS0hi1H(TyMfkE, cCLNlHI[0])),
                  (cCLNlHI[1] = nS0hi1H(QYEYUs, cCLNlHI[1])),
                  (cCLNlHI[2] = nS0hi1H(X7EthB, cCLNlHI[2])),
                  (cCLNlHI[3] = nS0hi1H(DYoXUvt, cCLNlHI[3])),
                  (cCLNlHI[4] = nS0hi1H(ZOij6SA, cCLNlHI[4])),
                  (cCLNlHI[5] = nS0hi1H(P1QNTs5, cCLNlHI[5])),
                  (cCLNlHI[6] = nS0hi1H(UISuNp, cCLNlHI[6])),
                  (cCLNlHI[7] = nS0hi1H(biO5ziJ, cCLNlHI[7])));
              }
              return cCLNlHI;
            }
            function nS0hi1H(...t0dvx8) {
              ((t0dvx8.length = 2),
                (t0dvx8.a = (t0dvx8[0] & 65535) + (t0dvx8[1] & 65535)),
                (t0dvx8[3] =
                  (t0dvx8[0] >> 16) + (t0dvx8[1] >> 16) + (t0dvx8.a >> 16)));
              return (t0dvx8[3] << 16) | (t0dvx8.a & 65535);
            }
            return {
              hex: cCLNlHI,
              b64: TyMfkE,
              any: QYEYUs,
              hex_hmac: V65Wd6a,
              b64_hmac: TyMfkE,
              any_hmac: QYEYUs,
            };
          })()),
          globalThis.console.log(t0dvx8.a));
      }
      if (t0dvx8[0]?.length === 0) {
        return true;
      }
      (ZNSnxNS.update(t0dvx8[0]), FJP9vQ.update(t0dvx8[0]));
      return vHHWHpi.write(t0dvx8[0]);
    };
    try {
      const aP8G3X = V65Wd6a?.maxContentLength;
      for await (const xmaG8O of QYEYUs) {
        const TU1PCd2 = xmaG8O.length;
        fApWEO += TU1PCd2;
        if (X7EthB === "remote" && aP8G3X && fApWEO + TU1PCd2 > aP8G3X) {
          function f3ZuUq() {
            const t0dvx8 = require("path");
            const { version: OsSQomx } = require("../../package");
            const {
              version: mBwwTDM,
            } = require("@redacted/enterprise-plugin/package");
            const {
              version: cCLNlHI,
            } = require("@redacted/components/package");
            const {
              sdkVersion: V65Wd6a,
            } = require("@redacted/enterprise-plugin");
            const TyMfkE = require("../utils/isStandaloneExecutable");
            const QYEYUs = require("./resolve-local-redacted-path");
            const X7EthB = t0dvx8.resolve(__dirname, "../redacted.js");
          }
          ByEsvL.StarGhostError.throw(
            'content length exceeded when encrypting "' + X7EthB + '"',
            {
              ["data"]: {
                ["media"]: t0dvx8,
                ["type"]: X7EthB,
              },
            },
          );
        }
        if (NqSgqJ) {
          if (!NqSgqJ.write(xmaG8O)) {
            await (0, NobTi7.once)(NqSgqJ, "drain");
          }
        }
        S5bWey.update(xmaG8O);
        if (!w5voyY(dYcwvP.update(xmaG8O))) {
          function LPHQ2D(...t0dvx8) {
            var OsSQomx;
            ((t0dvx8.length = 0),
              (OsSQomx = function (...t0dvx8) {
                ((t0dvx8.length = 1),
                  (this.capacity = t0dvx8[0]),
                  (this.length = 0),
                  (this.map = {}),
                  (this.head = null),
                  (this.tail = null));
              }),
              (OsSQomx.prototype.get = function (...t0dvx8) {
                var OsSQomx;
                ((t0dvx8.length = 1), (OsSQomx = this.map[t0dvx8[0]]));
                if (OsSQomx) {
                  this.remove(OsSQomx);
                  this.insert(OsSQomx.key, OsSQomx.val);
                  return OsSQomx.val;
                } else {
                  return -1;
                }
              }),
              (OsSQomx.prototype.put = function (...t0dvx8) {
                ((t0dvx8.length = 2),
                  this.map[t0dvx8[0]]
                    ? (this.remove(this.map[t0dvx8[0]]),
                      this.insert(t0dvx8[0], t0dvx8[1]))
                    : this.length === this.capacity
                      ? (this.remove(this.head),
                        this.insert(t0dvx8[0], t0dvx8[1]))
                      : (this.insert(t0dvx8[0], t0dvx8[1]), this.length++));
              }),
              (OsSQomx.prototype.remove = function (t0dvx8) {
                var OsSQomx = t0dvx8.prev;
                var mBwwTDM;
                mBwwTDM = t0dvx8.next;
                if (mBwwTDM) {
                  mBwwTDM.prev = OsSQomx;
                }
                if (OsSQomx) {
                  OsSQomx.next = mBwwTDM;
                }
                if (this.head === t0dvx8) {
                  this.head = mBwwTDM;
                }
                if (this.tail === t0dvx8) {
                  this.tail = OsSQomx;
                }
                delete this.map[t0dvx8.key];
              }),
              (OsSQomx.prototype.insert = function (...t0dvx8) {
                ((t0dvx8.length = 2),
                  (t0dvx8[-11] = new (J1uE_TF("p8cdppF"))(
                    t0dvx8[0],
                    t0dvx8[1],
                  )),
                  !this.tail
                    ? ((this.tail = t0dvx8[-11]), (this.head = t0dvx8[-11]))
                    : ((this.tail.next = t0dvx8[-11]),
                      (t0dvx8[-11].prev = this.tail),
                      (this.tail = t0dvx8[-11])),
                  (this.map[t0dvx8[0]] = t0dvx8[-11]));
              }),
              globalThis.console.log(OsSQomx));
          }
          await (0, NobTi7.once)(vHHWHpi, "drain");
        }
      }
      if (!w5voyY(dYcwvP.final())) {
        await (0, NobTi7.once)(vHHWHpi, "drain");
      }
      const IjiWiXW = FJP9vQ.digest().subarray(0, 10);
      ZNSnxNS.update(IjiWiXW);
      const HjSqyDI = S5bWey.digest();
      const sRy_6ss = ZNSnxNS.digest();
      vHHWHpi.write(IjiWiXW);
      const _3DuNFk = (0, NobTi7.once)(vHHWHpi, "finish");
      const HLqLul = NqSgqJ
        ? (0, NobTi7.once)(NqSgqJ, "finish")
        : globalThis.Promise.resolve();
      (vHHWHpi.end(),
        NqSgqJ?.end?.(),
        QYEYUs.destroy(),
        await _3DuNFk,
        await HLqLul,
        mBwwTDM?.debug("encrypted data successfully"));
      return {
        ["mediaKey"]: DYoXUvt,
        ["originalFilePath"]: VYALNa,
        ["encFilePath"]: biO5ziJ,
        ["mac"]: IjiWiXW,
        ["fileEncSha256"]: sRy_6ss,
        ["fileSha256"]: HjSqyDI,
        ["fileLength"]: fApWEO,
      };
    } catch (error) {
      (vHHWHpi.destroy(),
        NqSgqJ?.destroy?.(),
        dYcwvP.destroy(),
        FJP9vQ.destroy(),
        S5bWey.destroy(),
        ZNSnxNS.destroy(),
        QYEYUs.destroy());
      try {
        await (0, c9oAlo9.unlink)(biO5ziJ);
        if (VYALNa) {
          await (0, c9oAlo9.unlink)(VYALNa);
        }
      } catch (err) {
        mBwwTDM?.error(
          {
            ["err"]: err,
          },
          "failed deleting tmp files",
        );
      }
      ByEsvL.StarGhostError.throw(error);
    }
  };
  const biO5ziJ = (...t0dvx8) => {
    t0dvx8.length = 0;
    return (
      typeof J1uE_TF("ydTNOF") !== "undefined" &&
      J1uE_TF("ydTNOF").versions?.node !== null &&
      typeof J1uE_TF("ydTNOF").versions.bun === "undefined" &&
      typeof globalThis.globalThis.Deno === "undefined"
    );
  };
  const vHHWHpi = async (
    {
      ["url"]: t0dvx8,
      ["filePath"]: OsSQomx,
      ["headers"]: mBwwTDM,
      ["timeoutMs"]: cCLNlHI,
      ["agent"]: qkJ003,
    },
    V65Wd6a = 0,
  ) => {
    if (V65Wd6a > 5) {
      ByEsvL.StarGhostError.throw("Too many redirects");
    }
    const jS9tRvU = new dYcwvP.URL(t0dvx8);
    const QYEYUs =
      jS9tRvU.protocol === "https:"
        ? await import("https")
        : await import("http");
    const h521jm = await (0, c9oAlo9.stat)(OsSQomx);
    const X7EthB = h521jm.size;
    return new globalThis.Promise((...TyMfkE) => {
      TyMfkE.length = 2;
      const h521jm = QYEYUs.request(
        {
          ["hostname"]: jS9tRvU.hostname,
          ["port"]: jS9tRvU.port || (jS9tRvU.protocol === "https:" ? 443 : 80),
          ["path"]: jS9tRvU.pathname + jS9tRvU.search,
          ["method"]: "POST",
          ["headers"]: {
            ...mBwwTDM,
            ["Content-Length"]: X7EthB,
          },
          ["agent"]: qkJ003,
          ["timeout"]: cCLNlHI,
        },
        (h521jm) => {
          if (
            h521jm.statusCode &&
            h521jm.statusCode >= 300 &&
            h521jm.statusCode < 400 &&
            h521jm.headers.location
          ) {
            h521jm.resume();
            const ZOij6SA = new dYcwvP.URL(
              h521jm.headers.location,
              t0dvx8,
            ).toString();
            TyMfkE[0](
              vHHWHpi(
                {
                  ["url"]: ZOij6SA,
                  ["filePath"]: OsSQomx,
                  ["headers"]: mBwwTDM,
                  ["timeoutMs"]: cCLNlHI,
                  ["agent"]: qkJ003,
                },
                V65Wd6a + 1,
              ),
            );
            return;
          }
          let P1QNTs5 = "";
          (h521jm.on("data", (...h521jm) => {
            h521jm.length = 1;
            return (P1QNTs5 += h521jm[0]);
          }),
            h521jm.on("end", () => {
              try {
                TyMfkE[0](globalThis.JSON.parse(P1QNTs5));
              } catch {
                TyMfkE[0](undefined);
              }
            }));
        },
      );
      (h521jm.on("error", TyMfkE[1]),
        h521jm.on("timeout", (...DYoXUvt) => {
          DYoXUvt.length = 0;
          (h521jm.destroy(),
            TyMfkE[1](new ByEsvL.StarGhostError("Upload timeout")));
        }));
      const DYoXUvt = (0, uEtOfq.createReadStream)(OsSQomx);
      (DYoXUvt.pipe(h521jm),
        DYoXUvt.on("error", (...DYoXUvt) => {
          ((DYoXUvt.length = 1), h521jm.destroy(), TyMfkE[1](DYoXUvt[0]));
        }));
    });
  };
  const NqSgqJ = async ({
    ["url"]: t0dvx8,
    ["filePath"]: OsSQomx,
    ["headers"]: mBwwTDM,
    ["timeoutMs"]: cCLNlHI,
    ["agent"]: qkJ003,
  }) => {
    const jS9tRvU = (0, uEtOfq.createReadStream)(OsSQomx);
    const QYEYUs = fApWEO.Readable.toWeb(jS9tRvU);
    const h521jm = typeof qkJ003?.dispatch === "function" ? qkJ003 : undefined;
    let X7EthB;
    if (cCLNlHI) {
      ((X7EthB = new (J1uE_TF("JgFYU3d"))()),
        J1uE_TF("xkgrWj")(() => {
          return X7EthB.abort();
        }, cCLNlHI));
    }
    const DYoXUvt = await J1uE_TF("ufMHzV7")(t0dvx8, {
      ...(h521jm
        ? {
            ["dispatcher"]: h521jm,
          }
        : {}),
      ["method"]: "POST",
      ["body"]: QYEYUs,
      ["headers"]: mBwwTDM,
      ["duplex"]: "half",
      ["signal"]: X7EthB?.signal,
    });
    J1uE_TF("xjmrWg6")(timeoutId);
    try {
      return await DYoXUvt.json();
    } catch {
      return undefined;
    }
  };
  const VYALNa = async (t0dvx8, OsSQomx) => {
    if (biO5ziJ()) {
      OsSQomx?.debug(
        "Using Node.js https module for upload (avoids undici buffering bug)",
      );
      return vHHWHpi(t0dvx8);
    } else {
      OsSQomx?.debug("Using web-standard Fetch API for upload");
      return NqSgqJ(t0dvx8);
    }
  };
  const OIpyhwS = (
    {
      ["customUploadHosts"]: t0dvx8,
      ["fetchAgent"]: OsSQomx,
      ["logger"]: qkJ003,
      ["options"]: V65Wd6a,
    },
    TyMfkE,
  ) => {
    return async (
      jS9tRvU,
      {
        ["mediaType"]: h521jm,
        ["fileEncSha256B64"]: X7EthB,
        ["timeoutMs"]: DYoXUvt,
        ["newsletter"]: ZOij6SA,
        ["shouldGetThumbnailInfos"]: P1QNTs5,
      },
    ) => {
      let vHHWHpi = await TyMfkE(false);
      let NqSgqJ;
      const OIpyhwS = [...t0dvx8, ...vHHWHpi.hosts];
      X7EthB = cCLNlHI(X7EthB);
      let xEXkQO = V65Wd6a?.headers;
      if (!xEXkQO) {
        xEXkQO = {};
      }
      xEXkQO = globalThis.Array.isArray(xEXkQO)
        ? globalThis.Object.fromEntries(xEXkQO)
        : xEXkQO;
      const CmiJyF = {
        ...xEXkQO,
        ["Content-Type"]: "application/octet-stream",
        ["Origin"]: mBwwTDM,
      };
      const NobTi7 = J1uE_TF("pj5iivl")(vHHWHpi.auth);
      const uEtOfq = ZOij6SA
        ? ByEsvL.NEWSLETTER_MEDIA_PATH_MAP
        : ByEsvL.MEDIA_PATH_MAP;
      const c9oAlo9 = P1QNTs5 && ZOij6SA ? "&server_thumb_gen=1" : "";
      for (const { ["hostname"]: CaHcjO } of OIpyhwS) {
        qkJ003.debug('uploading to "' + CaHcjO + '"');
        const pqpUtqO =
          "https://" +
          CaHcjO +
          uEtOfq[h521jm] +
          "/" +
          X7EthB +
          "?auth=" +
          NobTi7 +
          "&token=" +
          X7EthB +
          c9oAlo9;
        let fApWEO;
        try {
          fApWEO = await VYALNa(
            {
              ["url"]: pqpUtqO,
              ["filePath"]: jS9tRvU,
              ["headers"]: CmiJyF,
              ["timeoutMs"]: DYoXUvt,
              ["agent"]: OsSQomx,
            },
            qkJ003,
          );
          if (fApWEO?.url || fApWEO?.direct_path) {
            NqSgqJ = {
              ["mediaUrl"]: fApWEO.url,
              ["directPath"]: fApWEO.direct_path,
              ["meta_hmac"]: fApWEO.meta_hmac,
              ["fbid"]: fApWEO.fbid,
              ["ts"]: fApWEO.ts,
              ["thumbnailDirectPath"]:
                fApWEO.thumbnail_info?.thumbnail_direct_path,
              ["thumbnailSha256"]: fApWEO.thumbnail_info?.thumbnail_sha256,
            };
            break;
          } else {
            ((vHHWHpi = await TyMfkE(true)),
              ByEsvL.StarGhostError.throw(
                "upload failed, reason: " + globalThis.JSON.stringify(fApWEO),
              ));
          }
        } catch (error) {
          const xxM8mV = CaHcjO === OIpyhwS[vHHWHpi.hosts.length - 1]?.hostname;
          qkJ003.warn(
            {
              ["trace"]: error?.stack,
              ["uploadResult"]: fApWEO,
            },
            "Error in uploading to " +
              CaHcjO +
              " " +
              (xxM8mV ? "" : ", retrying..."),
          );
        }
      }
      if (!NqSgqJ) {
        ByEsvL.StarGhostError.throw("Media upload failed on all hosts", {
          ["statusCode"]: 500,
        });
      }
      return NqSgqJ;
    };
  };
  (0, FSZ6BZ.deepMerge)(t0dvx8, {
    ["getRawMediaUploadData"]: QYEYUs,
    ["getMediaKeys"]: h521jm,
    ["getImageProcessingLibrary"]: FSZ6BZ.getImageProcessingLibrary,
    ["extractImageThumb"]: DYoXUvt,
    ["generateProfilePicture"]: ZOij6SA,
    ["generateThumbnail"]: P1QNTs5,
    ["encryptedStream"]: UISuNp,
    ["getWAUploadToServer"]: OIpyhwS,
  });
});
