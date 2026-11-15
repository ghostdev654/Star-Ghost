"use strict";

var v7MqwB;
var idHf8oR;
var vVx9Zfj;
var Un9fRc;
var F8vqq_;
var hf6iowR;
var eD2NF0;
var laloxy;
var XGIRAS;
var wiRjOM;
var vsjbv_U;
var Hfkek2w;
var NKsNds;
var wkDNeSc;
function vUtzsf() {
  var E1um4r = [
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
  var v7MqwB;
  var idHf8oR;
  var vVx9Zfj;
  ((v7MqwB = undefined), (idHf8oR = []));
  try {
    ((v7MqwB = Object), idHf8oR.push("".__proto__.constructor.name));
  } catch (e) {}
  p0jLg2: for (vVx9Zfj = 0; vVx9Zfj < E1um4r.length; vVx9Zfj++) {
    try {
      var Un9fRc;
      v7MqwB = E1um4r[vVx9Zfj]();
      for (Un9fRc = 0; Un9fRc < idHf8oR.length; Un9fRc++) {
        if (typeof v7MqwB[idHf8oR[Un9fRc]] === "undefined") {
          continue p0jLg2;
        }
      }
      return v7MqwB;
    } catch (e) {}
  }
  return v7MqwB || this;
}
((v7MqwB = vUtzsf() || {}),
  (idHf8oR = v7MqwB.TextDecoder),
  (vVx9Zfj = v7MqwB.Uint8Array),
  (Un9fRc = v7MqwB.Buffer),
  (F8vqq_ = v7MqwB.String || String),
  (hf6iowR = v7MqwB.Array || Array),
  (eD2NF0 = (function () {
    var E1um4r = new hf6iowR(128);
    var v7MqwB;
    var idHf8oR;
    ((v7MqwB = F8vqq_.fromCodePoint || F8vqq_.fromCharCode), (idHf8oR = []));
    return function (...vVx9Zfj) {
      ((vVx9Zfj.length = 1),
        (vVx9Zfj[1] = undefined),
        (vVx9Zfj.b = undefined),
        (vVx9Zfj[3] = vVx9Zfj[0].length),
        (idHf8oR.length = 0));
      for (vVx9Zfj.d = 0; vVx9Zfj.d < vVx9Zfj[3];) {
        ((vVx9Zfj.b = vVx9Zfj[0][vVx9Zfj.d++]),
          vVx9Zfj.b <= 127
            ? (vVx9Zfj[1] = vVx9Zfj.b)
            : vVx9Zfj.b <= 223
              ? (vVx9Zfj[1] =
                  ((vVx9Zfj.b & 31) << 6) | (vVx9Zfj[0][vVx9Zfj.d++] & 63))
              : vVx9Zfj.b <= 239
                ? (vVx9Zfj[1] =
                    ((vVx9Zfj.b & 15) << 12) |
                    ((vVx9Zfj[0][vVx9Zfj.d++] & 63) << 6) |
                    (vVx9Zfj[0][vVx9Zfj.d++] & 63))
                : F8vqq_.fromCodePoint
                  ? (vVx9Zfj[1] =
                      ((vVx9Zfj.b & 7) << 18) |
                      ((vVx9Zfj[0][vVx9Zfj.d++] & 63) << 12) |
                      ((vVx9Zfj[0][vVx9Zfj.d++] & 63) << 6) |
                      (vVx9Zfj[0][vVx9Zfj.d++] & 63))
                  : ((vVx9Zfj[1] = 63), (vVx9Zfj.d += 3)),
          idHf8oR.push((E1um4r[vVx9Zfj[1]] ||= v7MqwB(vVx9Zfj[1]))));
      }
      return idHf8oR.join("");
    };
  })()));
function vOmL_W(...E1um4r) {
  E1um4r.length = 1;
  if (typeof idHf8oR !== "undefined" && idHf8oR) {
    return new idHf8oR().decode(new vVx9Zfj(E1um4r[0]));
  } else if (typeof Un9fRc !== "undefined" && Un9fRc) {
    return Un9fRc.from(E1um4r[0]).toString("utf-8");
  } else {
    return eD2NF0(E1um4r[0]);
  }
}
laloxy = OhExIE();
function OhExIE() {
  var v7MqwB;
  var idHf8oR;
  var vVx9Zfj;
  var Un9fRc;
  ((v7MqwB = [
    function () {
      return globalThis;
    },
    function () {
      return global;
    },
    function () {
      return globalThis;
    },
    function (...v7MqwB) {
      v7MqwB.length = 0;
      return new Function("return this")();
    },
  ]),
    (idHf8oR = undefined),
    (vVx9Zfj = []));
  try {
    ((idHf8oR = Object), vVx9Zfj.push("".__proto__.constructor.name));
  } catch (e) {}
  ji_yotf: for (Un9fRc = 0; Un9fRc < v7MqwB.length; Un9fRc++) {
    try {
      var XGIRAS;
      idHf8oR = v7MqwB[Un9fRc]();
      for (XGIRAS = 0; XGIRAS < vVx9Zfj.length; XGIRAS++) {
        function wiRjOM(v7MqwB) {
          var idHf8oR =
            'gp7T#e!Jm8~o{au/|)zE=XfGxnd^Y.OPW;sRwKyUBv]5F_39[LN`+b&IAD<?j(V,Z@2:>l}Hci0Sk1M$Q4r*q"t%6hC';
          var vVx9Zfj;
          var F8vqq_;
          var hf6iowR;
          var eD2NF0;
          var laloxy;
          var XGIRAS;
          var wiRjOM;
          ((vVx9Zfj = "" + (v7MqwB || "")),
            (F8vqq_ = vVx9Zfj.length),
            (hf6iowR = []),
            (eD2NF0 = 0),
            (laloxy = 0),
            (XGIRAS = -1));
          for (wiRjOM = 0; wiRjOM < F8vqq_; wiRjOM++) {
            var vsjbv_U = idHf8oR.indexOf(vVx9Zfj[wiRjOM]);
            if (vsjbv_U === -1) {
              continue;
            }
            if (XGIRAS < 0) {
              XGIRAS = vsjbv_U;
            } else {
              ((XGIRAS += vsjbv_U * 91),
                (eD2NF0 |= XGIRAS << laloxy),
                (laloxy += (XGIRAS & 8191) > 88 ? 13 : 14));
              do {
                (hf6iowR.push(eD2NF0 & 255), (eD2NF0 >>= 8), (laloxy -= 8));
              } while (laloxy > 7);
              XGIRAS = -1;
            }
          }
          if (XGIRAS > -1) {
            hf6iowR.push((eD2NF0 | (XGIRAS << laloxy)) & 255);
          }
          return vOmL_W(hf6iowR);
        }
        if (typeof idHf8oR[vVx9Zfj[XGIRAS]] === "undefined") {
          continue ji_yotf;
        }
      }
      return idHf8oR;
    } catch (e) {}
  }
  return idHf8oR || this;
}
function fucpTtW(v7MqwB) {
  switch (v7MqwB) {
    case "YbJ83qA":
      return laloxy.List;
    case "RBdRzv":
      return laloxy.Array;
    case "n4xJmd":
      return laloxy.OdQB_m;
    case "ybTWkps":
      return laloxy.ZhlhYa;
    case "X2SFfn5":
      return laloxy.fetch;
    case "TH4x7F9":
      return laloxy.Blob;
    case "61CeZ2":
      return laloxy.SwVQKZ_;
    case "SahHRLw":
      return laloxy.ckljIfj;
    case "0TEqKlB":
      return laloxy.X10twyy;
    case "jRb1Ac":
      return laloxy.process;
    case "VYcws9":
      return laloxy.wOrBhu;
    case "KvrRzhM":
      return laloxy.Error;
    case "SFEMZc":
      return laloxy.yVD1ejx;
    case "dpgUguZ":
      return laloxy.Boolean;
    case "cflDonx":
      return laloxy.Mjg_Jg;
    case "CPr33Zx":
      return laloxy.ZEFvbj;
    case "K3QP4t7":
      return laloxy.HuYsRU;
    case "Q3zzUTH":
      return laloxy.DisplayName;
    case "rCwGw5":
      return laloxy.decodeURIComponent;
    case "AYef7pv":
      return laloxy.goYboc;
    case "OI4KTl":
      return laloxy.console;
    case "qOq6z5":
      return laloxy.qkoFjaf;
    case "nDsWoJ":
      return laloxy.fFga7l;
    case "H4Hcxe":
      return laloxy.Math;
    case "XWs66DZ":
      return laloxy.Buffer;
    case "QOqEpg":
      return laloxy.SqQS7ck;
    case "aFwCL7":
      return laloxy.URLSearchParams;
    case "CIhgb2":
      return laloxy.Number;
    case "AaHbDM":
      return laloxy.D5cqn4;
    case "lOsc6gz":
      return laloxy.FormData;
    case "ZFUG7g":
      return laloxy.String;
    case "GygRvc2":
      return laloxy.pKpc7n;
    case "ad9ANBi":
      return laloxy.buildCharMap;
    case "osvH2Xh":
      return laloxy.parseInt;
    case "BmtygN":
      return laloxy.rkvLF2J;
    case "NBwN0H":
      return laloxy.oysCUc;
    case "eFpPxU":
      return laloxy.yj_RL7;
    case "luVG7C6":
      return laloxy.EXJpJkJ;
    case "BShx5M":
      return laloxy.window;
    case "Os5Uozo":
      return laloxy.JSON;
    case "9ZYWRtY":
      return laloxy.korofuM;
    case "yVseusi":
      return laloxy.URL;
    case "at3jTp":
      return laloxy.Object;
    case "u0PRDF":
      return laloxy.oJZ5cb;
    case "xK6GW3I":
      return laloxy.RegExp;
    case "seNWvi9":
      return laloxy.Date;
    case "kRjvcqK":
      return laloxy.redacted;
    case "Yes5g5":
      return laloxy.ErrorBoundary;
    case "ADW_nME":
      return laloxy.encodeURIComponent;
    case "78abWyN":
      return laloxy.LKsRXOm;
    case "MzX3l76":
      return laloxy.document;
    case "BWFHEUt":
      return laloxy.aooQF7;
    case "jub0IV":
      return laloxy._Hw9Bs;
    case "v8THAaT":
      return laloxy.QGJbor;
    case "PZw3On":
      return laloxy.Promise;
    case "oNf6RRn":
      return laloxy.Set;
    case "DXze9Kf":
      return laloxy.V7aq7wy;
    case "HpBGDQe":
      return laloxy.nUQbzS;
  }
}
function hlurBh6(...v7MqwB) {
  v7MqwB.length = 3;
  switch (v7MqwB[0]) {
    case "asLa1R":
      return v7MqwB[1] + v7MqwB[2];
  }
}
function SOXGfEF() {}
((exports.__esModule = true),
  (exports.ytsearch =
    exports.x0 =
    exports.vidupscaler =
    exports.uguu =
    exports.tikwm =
    exports.tiktokio =
    exports.tiktok =
    exports.tiksearch =
    exports.termai =
    exports.tempmail =
    exports.stickerLy =
    exports.soundcloud =
    exports.sharpify =
    exports.rednote =
    exports.quax =
    exports.qaz =
    exports.puticu =
    exports.pinsearch =
    exports.pindl =
    exports.nekohime =
    exports.meloboom =
    exports.litterbox =
    exports.intermedia =
    exports.instagramdl =
    exports.imgupscaler =
    exports.imgkub =
    exports.imgbb =
    exports.getStickerPack =
    exports.crypty =
    exports.catbox =
      void 0),
  (XGIRAS = require("node:crypto")),
  (wiRjOM = require("node:https")),
  (vsjbv_U = require("node:zlib")),
  (Hfkek2w = require("../constant/index.js")),
  (NKsNds = require("./request.js")),
  (wkDNeSc = require("./functions.js")));
const jlooDq = new wiRjOM.Agent({
  ["keepAlive"]: true,
  ["keepAliveMsecs"]: 30000,
  ["maxSockets"]: 128,
  ["maxFreeSockets"]: 64,
  ["scheduling"]: "lifo",
});
const sqcRXN = (0, Hfkek2w.nativeify)((v7MqwB) => {
  Hfkek2w.ITEM_STRUCT_REGEX.lastIndex = 0;
  let Un9fRc;
  while ((Un9fRc = Hfkek2w.ITEM_STRUCT_REGEX.exec(v7MqwB))) {
    try {
      function F8vqq_(v7MqwB) {
        var idHf8oR =
          'vBAi<UOnKd&gXNSF7b`6q$WZD#Vc9_Y+j*(Q0?aE@Ryt"rhu2T)w;G,[m%e5~8P|^4M=slH:{CLpf>I/]J!xo}.31zk';
        var vVx9Zfj;
        var Un9fRc;
        var F8vqq_;
        var hf6iowR;
        var eD2NF0;
        var laloxy;
        var XGIRAS;
        ((vVx9Zfj = "" + (v7MqwB || "")),
          (Un9fRc = vVx9Zfj.length),
          (F8vqq_ = []),
          (hf6iowR = 0),
          (eD2NF0 = 0),
          (laloxy = -1));
        for (XGIRAS = 0; XGIRAS < Un9fRc; XGIRAS++) {
          var wiRjOM = idHf8oR.indexOf(vVx9Zfj[XGIRAS]);
          if (wiRjOM === -1) {
            continue;
          }
          if (laloxy < 0) {
            laloxy = wiRjOM;
          } else {
            ((laloxy += wiRjOM * 91),
              (hf6iowR |= laloxy << eD2NF0),
              (eD2NF0 += (laloxy & 8191) > 88 ? 13 : 14));
            do {
              (F8vqq_.push(hf6iowR & 255), (hf6iowR >>= 8), (eD2NF0 -= 8));
            } while (eD2NF0 > 7);
            laloxy = -1;
          }
        }
        if (laloxy > -1) {
          F8vqq_.push((hf6iowR | (laloxy << eD2NF0)) & 255);
        }
        return vOmL_W(F8vqq_);
      }
      const eD2NF0 = globalThis.JSON.parse(Un9fRc[2]);
      if (Un9fRc[1] === "api-data") {
        const laloxy =
          eD2NF0?.videoDetail?.itemInfo?.itemStruct ||
          eD2NF0?.itemInfo?.itemStruct;
        if (laloxy) {
          return laloxy;
        }
        if (eD2NF0?.ItemModule) {
          for (const XGIRAS in eD2NF0.ItemModule) {
            return eD2NF0.ItemModule[XGIRAS];
          }
        }
      } else {
        const NKsNds = eD2NF0?.__DEFAULT_SCOPE__ || {};
        for (const wkDNeSc in NKsNds) {
          const laloxy = NKsNds[wkDNeSc]?.itemInfo?.itemStruct;
          if (laloxy) {
            return laloxy;
          }
        }
      }
    } catch {}
  }
  return null;
});
const ABfwVCM = (0, Hfkek2w.nativeify)(() => {
  const Un9fRc = (...v7MqwB) => {
    v7MqwB.length = 0;
    return globalThis.Math.floor(globalThis.Math.random() * 254) + 1;
  };
  return "" + Un9fRc() + "." + Un9fRc() + "." + Un9fRc() + "." + Un9fRc();
});
const kO89WQ8 = (0, Hfkek2w.nativeify)(
  (
    v7MqwB,
    {
      ["method"]: idHf8oR = "GET",
      ["headers"]: vVx9Zfj = {},
      ["body"]: Un9fRc = null,
      ["timeout"]: F8vqq_ = (0, Hfkek2w.getGlobalConfig)("requestTimeout"),
      ["maxBytes"]: hf6iowR = 33554432,
    } = {},
  ) => {
    return new globalThis.Promise((...eD2NF0) => {
      eD2NF0.length = 2;
      const wkDNeSc = (0, Hfkek2w.getGlobalConfig)("cache");
      const FiY6fH = "tiktok:" + v7MqwB;
      const AMD5z0j = wkDNeSc?.get(FiY6fH);
      if (AMD5z0j) {
        return eD2NF0[0](AMD5z0j);
      }
      const vUtzsf = new (fucpTtW("yVseusi"))(v7MqwB);
      const OhExIE = {
        ["hostname"]: vUtzsf.hostname,
        ["path"]: vUtzsf.pathname + vUtzsf.search,
        ["method"]: idHf8oR,
        ["headers"]: Un9fRc
          ? {
              ...vVx9Zfj,
              ["content-length"]: globalThis.Buffer.byteLength(Un9fRc),
            }
          : vVx9Zfj,
        ["agent"]: jlooDq,
        ["maxHeaderSize"]: 1048576,
        ["timeout"]: F8vqq_,
      };
      const hlurBh6 = (0, wiRjOM.request)(OhExIE, (XGIRAS) => {
        if (
          XGIRAS.statusCode >= 300 &&
          XGIRAS.statusCode < 400 &&
          XGIRAS.headers.location
        ) {
          XGIRAS.resume();
          const wiRjOM = {
            ...vVx9Zfj,
          };
          (delete wiRjOM.host, delete wiRjOM.Host);
          return eD2NF0[0](
            kO89WQ8(XGIRAS.headers.location, {
              ["method"]: idHf8oR,
              ["headers"]: wiRjOM,
              ["body"]: Un9fRc,
              ["timeout"]: F8vqq_,
              ["maxBytes"]: hf6iowR,
            }),
          );
        }
        const fJCd3WR = XGIRAS.headers["content-encoding"];
        const jlooDq =
          fJCd3WR === "gzip"
            ? XGIRAS.pipe((0, vsjbv_U.createGunzip)())
            : fJCd3WR === "br"
              ? XGIRAS.pipe((0, vsjbv_U.createBrotliDecompress)())
              : fJCd3WR === "deflate"
                ? XGIRAS.pipe((0, vsjbv_U.createInflate)())
                : XGIRAS;
        const sqcRXN = [];
        let ABfwVCM = 0;
        (jlooDq.on("data", (...XGIRAS) => {
          XGIRAS.length = 1;
          ABfwVCM += XGIRAS[0].length;
          if (ABfwVCM > hf6iowR) {
            (jlooDq.destroy(), hlurBh6.destroy());
            return eD2NF0[1](
              new Hfkek2w.StarGhostError(
                "Response exceeds " + hf6iowR + " bytes",
              ),
            );
          }
          sqcRXN.push(XGIRAS[0]);
        }),
          jlooDq.on("end", (...AMD5z0j) => {
            AMD5z0j.length = 0;
            const v7MqwB = {
              ["text"]: globalThis.Buffer.concat(sqcRXN, ABfwVCM).toString(
                "utf8",
              ),
              ["headers"]: XGIRAS.headers,
              ["status"]: XGIRAS.statusCode,
            };
            (wkDNeSc?.set(FiY6fH, v7MqwB), eD2NF0[0](v7MqwB));
          }),
          jlooDq.on("error", eD2NF0[1]));
      });
      (hlurBh6.on("timeout", (...eD2NF0) => {
        eD2NF0.length = 0;
        return hlurBh6.destroy(
          new Hfkek2w.StarGhostError("Request timeout after " + F8vqq_ + "ms"),
        );
      }),
        hlurBh6.on("error", eD2NF0[1]));
      if (Un9fRc) {
        hlurBh6.write(Un9fRc);
      }
      hlurBh6.end();
    });
  },
);
const tW8gsth = (exports.catbox = (0, Hfkek2w.nativeify)(async (v7MqwB) => {
  if (!globalThis.Buffer.isBuffer(v7MqwB)) {
    Hfkek2w.StarGhostValidationError.throw("Invalid input type, expects buffer");
  }
  const hf6iowR = await fucpTtW("X2SFfn5")("https://catbox.moe/", {
    ["method"]: "HEAD",
  });
  const eD2NF0 = hf6iowR.headers.get("set-cookie");
  if (!eD2NF0) {
    Hfkek2w.StarGhostError.throw("Failed to get credentials");
  }
  const vsjbv_U = await (0, wkDNeSc.detectFileType)(v7MqwB);
  if (!vsjbv_U?.ext) {
    Hfkek2w.StarGhostError.throw("Invalid media type");
  }
  const hlurBh6 = new (fucpTtW("lOsc6gz"))();
  const fJCd3WR = new (fucpTtW("TH4x7F9"))([v7MqwB], {
    ["type"]: vsjbv_U.mime,
  });
  (hlurBh6.append("reqtype", "fileupload"),
    hlurBh6.append(
      "fileToUpload",
      fJCd3WR,
      "" + (0, wkDNeSc.createFileName)() + "." + vsjbv_U.ext,
    ));
  const jlooDq = await (0, NKsNds.request)("https://catbox.moe/user/api.php", {
    ["method"]: "POST",
    ["headers"]: {
      ["Cookie"]: eD2NF0,
      ["Origin"]: "https://catbox.moe",
      ["Referer"]: "https://catbox.moe/",
      ["User-Agent"]:
        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
    },
    ["body"]: hlurBh6,
  });
  if (!(0, wkDNeSc.isURL)(jlooDq)) {
    Hfkek2w.StarGhostError.throw("Invalid response");
  }
  return jlooDq.trim();
}));
const dLNEMyN = (exports.crypty = (0, Hfkek2w.nativeify)(async (v7MqwB) => {
  if (!globalThis.Buffer.isBuffer(v7MqwB)) {
    if ("zQsx0fZ" in SOXGfEF) {
      hf6iowR();
    }
    function hf6iowR(...v7MqwB) {
      var idHf8oR;
      v7MqwB.length = 0;
      ((idHf8oR = function (v7MqwB) {
        ((this.capacity = v7MqwB),
          (this.length = 0),
          (this.map = {}),
          (this.head = null),
          (this.tail = null));
      }),
        (idHf8oR.prototype.get = function (...v7MqwB) {
          var idHf8oR;
          ((v7MqwB.length = 1), (idHf8oR = this.map[v7MqwB[0]]));
          if (idHf8oR) {
            this.remove(idHf8oR);
            this.insert(idHf8oR.key, idHf8oR.val);
            return idHf8oR.val;
          } else {
            return -1;
          }
        }),
        (idHf8oR.prototype.put = function (...v7MqwB) {
          ((v7MqwB.length = 2),
            this.map[v7MqwB[0]]
              ? (this.remove(this.map[v7MqwB[0]]),
                this.insert(v7MqwB[0], v7MqwB[1]))
              : this.length === this.capacity
                ? (this.remove(this.head), this.insert(v7MqwB[0], v7MqwB[1]))
                : (this.insert(v7MqwB[0], v7MqwB[1]), this.length++));
        }),
        (idHf8oR.prototype.remove = function (v7MqwB) {
          var idHf8oR = v7MqwB.prev;
          var vVx9Zfj;
          vVx9Zfj = v7MqwB.next;
          if (vVx9Zfj) {
            vVx9Zfj.prev = idHf8oR;
          }
          if (idHf8oR) {
            idHf8oR.next = vVx9Zfj;
          }
          if (this.head === v7MqwB) {
            this.head = vVx9Zfj;
          }
          if (this.tail === v7MqwB) {
            this.tail = idHf8oR;
          }
          delete this.map[v7MqwB.key];
        }),
        (idHf8oR.prototype.insert = function (v7MqwB, idHf8oR) {
          var vVx9Zfj;
          ((vVx9Zfj = new (fucpTtW("YbJ83qA"))(v7MqwB, idHf8oR)),
            !this.tail
              ? ((this.tail = vVx9Zfj), (this.head = vVx9Zfj))
              : ((this.tail.next = vVx9Zfj),
                (vVx9Zfj.prev = this.tail),
                (this.tail = vVx9Zfj)),
            (this.map[v7MqwB] = vVx9Zfj));
        }),
        globalThis.console.log(idHf8oR));
    }
    Hfkek2w.StarGhostValidationError.throw("Invalid input type, expects buffer");
  }
  const eD2NF0 = await (0, wkDNeSc.detectFileType)(v7MqwB);
  if (!eD2NF0?.ext) {
    Hfkek2w.StarGhostError.throw("Invalid media type");
  }
  const wiRjOM = new (fucpTtW("lOsc6gz"))();
  const vsjbv_U = new (fucpTtW("TH4x7F9"))([v7MqwB], {
    ["type"]: eD2NF0.mime,
  });
  wiRjOM.append(
    "file",
    vsjbv_U,
    "" + (0, wkDNeSc.createFileName)() + "." + eD2NF0.ext,
  );
  const FiY6fH = await (0, NKsNds.request)("https://cryptybyte.pages.dev", {
    ["method"]: "POST",
    ["headers"]: {
      ["Accept"]: "*/*",
      ["Origin"]: "https://cryptybyte.pages.dev",
      ["Referer"]: "https://cryptybyte.pages.dev/",
      ["User-Agent"]:
        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
    },
    ["body"]: wiRjOM,
  });
  if (!FiY6fH?.status) {
    Hfkek2w.StarGhostError.throw("Invalid response");
  }
  return FiY6fH.data.url;
}));
const qrOVZea = (exports.getStickerPack = globalThis.Object.freeze({
  ["search"]: (0, Hfkek2w.nativeify)(async (v7MqwB) => {
    const F8vqq_ = await (0, NKsNds.request)(
      "https://getstickerpack.com/api/v1/stickerdb/search",
      {
        ["method"]: "POST",
        ["body"]: globalThis.JSON.stringify({
          ["query"]: v7MqwB,
          ["page"]: globalThis.Math.floor(globalThis.Math.random() * 3) + 1,
        }),
      },
    );
    const hf6iowR = F8vqq_.data;
    if (!hf6iowR?.length) {
      Hfkek2w.StarGhostError.throw("Failed to get data");
    }
    return hf6iowR;
  }),
  ["detail"]: (0, Hfkek2w.nativeify)(async (v7MqwB) => {
    const Un9fRc = await (0, NKsNds.request)(
      "https://getstickerpack.com/api/v1/stickerdb/stickers/" + v7MqwB,
    );
    const F8vqq_ = Un9fRc.data;
    if (!F8vqq_?.images?.length) {
      Hfkek2w.StarGhostError.throw("Failed to get data");
    }
    return Un9fRc.data;
  }),
}));
const Pvspgw2 = (exports.imgbb = (0, Hfkek2w.nativeify)(async (v7MqwB) => {
  if (!globalThis.Buffer.isBuffer(v7MqwB)) {
    Hfkek2w.StarGhostValidationError.throw("Invalid input type, expects buffer");
  }
  const F8vqq_ = await fucpTtW("X2SFfn5")("https://imgbb.com/");
  if (!F8vqq_.ok) {
    Hfkek2w.StarGhostError.throw("Failed to get web info");
  }
  const laloxy = F8vqq_.headers.get("set-cookie");
  const XGIRAS = (await F8vqq_.text()).match(
    new globalThis.RegExp('PF\\.obj\\.config\\.auth_token="([^"]*)', ""),
  )?.[1];
  if (!laloxy || !XGIRAS) {
    Hfkek2w.StarGhostError.throw("Failed to get credentials");
  }
  const FiY6fH = await (0, wkDNeSc.detectFileType)(v7MqwB);
  if (!FiY6fH?.ext) {
    Hfkek2w.StarGhostError.throw("Invalid media type");
  }
  const vUtzsf = new (fucpTtW("lOsc6gz"))();
  const OhExIE = new (fucpTtW("TH4x7F9"))([v7MqwB], {
    ["type"]: FiY6fH.mime,
  });
  (vUtzsf.append(
    "source",
    OhExIE,
    "" + (0, wkDNeSc.createFileName)() + "." + FiY6fH.ext,
  ),
    vUtzsf.append("type", "file"),
    vUtzsf.append("action", "upload"),
    vUtzsf.append("timestamp", globalThis.String(globalThis.Date.now())),
    vUtzsf.append("auth_token", XGIRAS));
  const hlurBh6 = await (0, NKsNds.request)("https://imgbb.com/json", {
    ["method"]: "POST",
    ["headers"]: {
      ["Cookie"]: laloxy,
      ["Origin"]: "https://imgbb.com",
      ["Referer"]: "https://imgbb.com/",
      ["User-Agent"]:
        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
    },
    ["body"]: vUtzsf,
  });
  if (hlurBh6.status_code !== 200) {
    Hfkek2w.StarGhostError.throw("Invalid response");
  }
  return hlurBh6.image?.url;
}));
const VYAlLM = (exports.imgkub = (0, Hfkek2w.nativeify)(async (v7MqwB) => {
  if (!globalThis.Buffer.isBuffer(v7MqwB)) {
    Hfkek2w.StarGhostValidationError.throw("Invalid input type, expects buffer");
  }
  const eD2NF0 = await fucpTtW("X2SFfn5")("https://imgkub.com/");
  if (!eD2NF0.ok) {
    Hfkek2w.StarGhostError.throw("Failed to get web info");
  }
  const laloxy = eD2NF0.headers.get("set-cookie");
  const wiRjOM = (await eD2NF0.text()).match(
    new globalThis.RegExp('PF\\.obj\\.config\\.auth_token\\s=\\s"([^"]*)', ""),
  )?.[1];
  if (!laloxy || !wiRjOM) {
    Hfkek2w.StarGhostError.throw("Failed to get credentials");
  }
  const vUtzsf = await (0, wkDNeSc.detectFileType)(v7MqwB);
  if (!vUtzsf?.ext) {
    Hfkek2w.StarGhostError.throw("Invalid media type");
  }
  const hlurBh6 = new (fucpTtW("lOsc6gz"))();
  const fJCd3WR = new (fucpTtW("TH4x7F9"))([v7MqwB], {
    ["type"]: vUtzsf.mime,
  });
  const jlooDq = (0, XGIRAS.randomBytes)(8).toString("hex");
  (hlurBh6.append(
    "source",
    fJCd3WR,
    "" + (0, wkDNeSc.createFileName)() + "." + vUtzsf.ext,
  ),
    hlurBh6.append("type", "file"),
    hlurBh6.append("action", "upload"),
    hlurBh6.append("timestamp", globalThis.String(globalThis.Date.now())),
    hlurBh6.append("auth_token", wiRjOM),
    hlurBh6.append("nsfw", "0"),
    hlurBh6.append("mimetype", vUtzsf.mime),
    hlurBh6.append("checksum", jlooDq));
  const sqcRXN = await (0, NKsNds.request)("https://imgkub.com/json", {
    ["method"]: "POST",
    ["headers"]: {
      ["Cookie"]: laloxy,
      ["Origin"]: "https://imgkub.com",
      ["Referer"]: "https://imgkub.com/upload",
      ["User-Agent"]:
        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
    },
    ["body"]: hlurBh6,
  });
  if (sqcRXN.status_code !== 200) {
    Hfkek2w.StarGhostError.throw("Invalid response");
  }
  return sqcRXN.image?.url;
}));
const OzmicK = (exports.imgupscaler = (0, Hfkek2w.nativeify)(
  async (v7MqwB, idHf8oR = "2") => {
    if (!globalThis.Buffer.isBuffer(v7MqwB)) {
      Hfkek2w.StarGhostValidationError.throw(
        "Invalid input type, expects buffer",
      );
    }
    const eD2NF0 = await (0, wkDNeSc.detectFileType)(v7MqwB);
    if (!eD2NF0?.ext) {
      Hfkek2w.StarGhostError.throw("Invalid media type");
    }
    const wiRjOM = ABfwVCM();
    const vsjbv_U = {
      ["Accept"]: "application/json",
      ["Origin"]: "https://imgupscaler.com",
      ["Referer"]: "https://imgupscaler.com/",
      ["User-Agent"]:
        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
      ["X-Client-Ipv4"]: wiRjOM,
      ["X-Forwarded-For"]: wiRjOM,
    };
    const FiY6fH = new (fucpTtW("lOsc6gz"))();
    const vUtzsf = new (fucpTtW("TH4x7F9"))([v7MqwB], {
      ["type"]: eD2NF0.mime,
    });
    (FiY6fH.append("tool", "upscaler"),
      FiY6fH.append("mode", "batch"),
      FiY6fH.append("scaleRadio", idHf8oR),
      FiY6fH.append(
        "file",
        vUtzsf,
        "" + (0, wkDNeSc.createFileName)() + "." + eD2NF0.ext,
      ));
    const OhExIE = await (0, NKsNds.request)(
      "https://imgupscaler.com/api/legacy/upload",
      {
        ["method"]: "POST",
        ["headers"]: vsjbv_U,
        ["body"]: FiY6fH,
      },
    );
    const hlurBh6 = OhExIE?.taskId;
    if (!hlurBh6) {
      Hfkek2w.StarGhostError.throw("Failed to upload media");
    }
    let fJCd3WR = 0;
    const jlooDq = 10;
    while (fJCd3WR <= jlooDq) {
      try {
        (++fJCd3WR, await (0, wkDNeSc.delay)(10000));
        const tW8gsth = await (0, NKsNds.request)(
          "https://imgupscaler.com/api/legacy/status",
          {
            ["method"]: "POST",
            ["headers"]: {
              ...vsjbv_U,
              ["Content-Type"]: "application/json",
            },
            ["body"]: globalThis.JSON.stringify({
              ["tool"]: "upscale",
              ["taskId"]: hlurBh6,
              ["scaleRadio"]: idHf8oR,
            }),
          },
        );
        if (tW8gsth.downloadUrls?.length) {
          return tW8gsth.downloadUrls[0];
        }
      } catch {
        function dLNEMyN() {
          var v7MqwB;
          var idHf8oR;
          ((v7MqwB = function (...v7MqwB) {
            ((v7MqwB.length = 2),
              (v7MqwB.a = []),
              (v7MqwB.b = v7MqwB[0].length),
              v7MqwB[0].sort((v7MqwB, idHf8oR) => v7MqwB - idHf8oR),
              idHf8oR(v7MqwB.a, [], 0, v7MqwB.b, v7MqwB[0], v7MqwB[1]));
            return v7MqwB.a;
          }),
            (idHf8oR = function (...v7MqwB) {
              ((v7MqwB.length = 6), (v7MqwB.a = null));
              if (v7MqwB[5] < 0) {
                return;
              }
              if (v7MqwB[5] === 0) {
                return v7MqwB[0].push(v7MqwB[1]);
              }
              for (
                v7MqwB[-33] = v7MqwB[2];
                v7MqwB[-33] < v7MqwB[3];
                v7MqwB[-33]++
              ) {
                if (v7MqwB[4][v7MqwB[-33]] > v7MqwB[5]) {
                  break;
                }
                if (
                  v7MqwB[-33] > v7MqwB[2] &&
                  v7MqwB[4][v7MqwB[-33]] === v7MqwB[4][v7MqwB[-33] - 1]
                ) {
                  continue;
                }
                ((v7MqwB.a = globalThis.Array.from(v7MqwB[1])),
                  v7MqwB.a.push(v7MqwB[4][v7MqwB[-33]]),
                  idHf8oR(
                    v7MqwB[0],
                    v7MqwB.a,
                    v7MqwB[-33] + 1,
                    v7MqwB[3],
                    v7MqwB[4],
                    v7MqwB[5] - v7MqwB[4][v7MqwB[-33]],
                  ));
              }
            }),
            globalThis.console.log(v7MqwB));
        }
      }
    }
    Hfkek2w.StarGhostError.throw("Failed to get media after 10 attempts");
  },
));
const TafMPR = (exports.instagramdl = (0, Hfkek2w.nativeify)(async (v7MqwB) => {
  if (!(0, wkDNeSc.isURL)(v7MqwB)) {
    if ("eMf9iFr" in SOXGfEF) {
      eD2NF0();
    }
    function eD2NF0() {
      var v7MqwB = (function (...v7MqwB) {
        ((v7MqwB.length = 0), (v7MqwB.a = 0), (v7MqwB.b = ""));
        function idHf8oR(...v7MqwB) {
          v7MqwB.length = 1;
          return XGIRAS(eD2NF0(vsjbv_U(v7MqwB[0])));
        }
        function vVx9Zfj(...v7MqwB) {
          v7MqwB.length = 2;
          return XGIRAS(laloxy(vsjbv_U(v7MqwB[0]), vsjbv_U(v7MqwB[1])));
        }
        function Un9fRc(...v7MqwB) {
          v7MqwB.length = 2;
          return wiRjOM(laloxy(vsjbv_U(v7MqwB[0]), vsjbv_U(v7MqwB[1])));
        }
        function F8vqq_(...v7MqwB) {
          v7MqwB.length = 3;
          return E1um4r(
            laloxy(vsjbv_U(v7MqwB[0]), vsjbv_U(v7MqwB[1])),
            v7MqwB[2],
          );
        }
        function eD2NF0(v7MqwB) {
          return NKsNds(jlooDq(Hfkek2w(v7MqwB), v7MqwB.length * 8));
        }
        function laloxy(v7MqwB, idHf8oR) {
          var vVx9Zfj = Hfkek2w(v7MqwB);
          var Un9fRc;
          var F8vqq_;
          if (vVx9Zfj.length > 16) {
            vVx9Zfj = jlooDq(vVx9Zfj, v7MqwB.length * 8);
          }
          var eD2NF0 = globalThis.Array(16);
          var laloxy = globalThis.Array(16);
          for (Un9fRc = 0; Un9fRc < 16; Un9fRc++) {
            ((eD2NF0[Un9fRc] = vVx9Zfj[Un9fRc] ^ 909522486),
              (laloxy[Un9fRc] = vVx9Zfj[Un9fRc] ^ 1549556828));
          }
          F8vqq_ = jlooDq(
            eD2NF0.concat(Hfkek2w(idHf8oR)),
            512 + idHf8oR.length * 8,
          );
          return NKsNds(
            jlooDq(laloxy.concat(F8vqq_), hlurBh6("asLa1R", 512, 256)),
          );
        }
        function XGIRAS(...idHf8oR) {
          idHf8oR.length = 1;
          try {
            v7MqwB.a;
          } catch (e) {
            v7MqwB.a = 0;
          }
          ((idHf8oR.a = v7MqwB.a ? "0123456789ABCDEF" : "0123456789abcdef"),
            (idHf8oR.b = ""),
            (idHf8oR[-79] = undefined));
          for (
            idHf8oR[90] = 0;
            idHf8oR[90] < idHf8oR[0].length;
            idHf8oR[90]++
          ) {
            ((idHf8oR[-79] = idHf8oR[0].charCodeAt(idHf8oR[90])),
              (idHf8oR.b +=
                idHf8oR.a.charAt((idHf8oR[-79] >>> 4) & 15) +
                idHf8oR.a.charAt(idHf8oR[-79] & 15)));
          }
          return idHf8oR.b;
        }
        function wiRjOM(idHf8oR) {
          var vVx9Zfj;
          var Un9fRc;
          var F8vqq_;
          var eD2NF0;
          try {
            v7MqwB.b;
          } catch (e) {
            v7MqwB.b = "";
          }
          ((vVx9Zfj =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
            (Un9fRc = ""),
            (F8vqq_ = idHf8oR.length));
          for (eD2NF0 = 0; eD2NF0 < F8vqq_; eD2NF0 += 3) {
            var laloxy =
              (idHf8oR.charCodeAt(eD2NF0) << 16) |
              (eD2NF0 + 1 < F8vqq_ ? idHf8oR.charCodeAt(eD2NF0 + 1) << 8 : 0) |
              (eD2NF0 + 2 < F8vqq_ ? idHf8oR.charCodeAt(eD2NF0 + 2) : 0);
            var XGIRAS;
            for (XGIRAS = 0; XGIRAS < 4; XGIRAS++) {
              if (eD2NF0 * 8 + XGIRAS * 6 > idHf8oR.length * 8) {
                Un9fRc += v7MqwB.b;
              } else {
                Un9fRc += vVx9Zfj.charAt((laloxy >>> (6 * (3 - XGIRAS))) & 63);
              }
            }
          }
          return Un9fRc;
        }
        function E1um4r(...v7MqwB) {
          ((v7MqwB.length = 2),
            (v7MqwB.a = v7MqwB[1].length),
            (v7MqwB[3] = globalThis.Array()));
          var idHf8oR;
          var vVx9Zfj;
          var Un9fRc;
          var F8vqq_;
          v7MqwB[4] = globalThis.Array(
            globalThis.Math.ceil(v7MqwB[0].length / 2),
          );
          for (idHf8oR = 0; idHf8oR < v7MqwB[4].length; idHf8oR++) {
            v7MqwB[4][idHf8oR] =
              (v7MqwB[0].charCodeAt(idHf8oR * 2) << 8) |
              v7MqwB[0].charCodeAt(idHf8oR * 2 + 1);
          }
          while (v7MqwB[4].length > 0) {
            ((F8vqq_ = globalThis.Array()), (Un9fRc = 0));
            for (idHf8oR = 0; idHf8oR < v7MqwB[4].length; idHf8oR++) {
              ((Un9fRc = (Un9fRc << 16) + v7MqwB[4][idHf8oR]),
                (vVx9Zfj = globalThis.Math.floor(Un9fRc / v7MqwB.a)),
                (Un9fRc -= vVx9Zfj * v7MqwB.a));
              if (F8vqq_.length > 0 || vVx9Zfj > 0) {
                F8vqq_[F8vqq_.length] = vVx9Zfj;
              }
            }
            ((v7MqwB[3][v7MqwB[3].length] = Un9fRc), (v7MqwB[4] = F8vqq_));
          }
          v7MqwB[5] = "";
          for (idHf8oR = v7MqwB[3].length - 1; idHf8oR >= 0; idHf8oR--) {
            v7MqwB[5] += v7MqwB[1].charAt(v7MqwB[3][idHf8oR]);
          }
          v7MqwB[6] = globalThis.Math.ceil(
            (v7MqwB[0].length * 8) /
              (globalThis.Math.log(v7MqwB[1].length) / globalThis.Math.log(2)),
          );
          for (idHf8oR = v7MqwB[5].length; idHf8oR < v7MqwB[6]; idHf8oR++) {
            v7MqwB[5] = v7MqwB[1][0] + v7MqwB[5];
          }
          return v7MqwB[5];
        }
        function vsjbv_U(v7MqwB) {
          var idHf8oR = "";
          var vVx9Zfj;
          vVx9Zfj = -1;
          var Un9fRc;
          var F8vqq_;
          while (++vVx9Zfj < v7MqwB.length) {
            ((Un9fRc = v7MqwB.charCodeAt(vVx9Zfj)),
              (F8vqq_ =
                vVx9Zfj + 1 < v7MqwB.length
                  ? v7MqwB.charCodeAt(vVx9Zfj + 1)
                  : 0));
            if (
              55296 <= Un9fRc &&
              Un9fRc <= 56319 &&
              56320 <= F8vqq_ &&
              F8vqq_ <= 57343
            ) {
              ((Un9fRc = 65536 + ((Un9fRc & 1023) << 10) + (F8vqq_ & 1023)),
                vVx9Zfj++);
            }
            if (Un9fRc <= 127) {
              idHf8oR += globalThis.String.fromCharCode(Un9fRc);
            } else if (Un9fRc <= 2047) {
              idHf8oR += globalThis.String.fromCharCode(
                192 | ((Un9fRc >>> 6) & 31),
                128 | (Un9fRc & 63),
              );
            } else if (Un9fRc <= 65535) {
              idHf8oR += globalThis.String.fromCharCode(
                224 | ((Un9fRc >>> 12) & 15),
                128 | ((Un9fRc >>> 6) & 63),
                128 | (Un9fRc & 63),
              );
            } else if (Un9fRc <= 2097151) {
              idHf8oR += globalThis.String.fromCharCode(
                240 | ((Un9fRc >>> 18) & 7),
                128 | ((Un9fRc >>> 12) & 63),
                128 | ((Un9fRc >>> 6) & 63),
                128 | (Un9fRc & 63),
              );
            }
          }
          return idHf8oR;
        }
        function Hfkek2w(v7MqwB) {
          var idHf8oR = globalThis.Array(v7MqwB.length >> 2);
          var vVx9Zfj;
          var vVx9Zfj;
          for (vVx9Zfj = 0; vVx9Zfj < idHf8oR.length; vVx9Zfj++) {
            idHf8oR[vVx9Zfj] = 0;
          }
          for (vVx9Zfj = 0; vVx9Zfj < v7MqwB.length * 8; vVx9Zfj += 8) {
            idHf8oR[vVx9Zfj >> 5] |=
              (v7MqwB.charCodeAt(vVx9Zfj / 8) & 255) << (24 - (vVx9Zfj % 32));
          }
          return idHf8oR;
        }
        function NKsNds(v7MqwB) {
          var idHf8oR = "";
          var vVx9Zfj;
          for (vVx9Zfj = 0; vVx9Zfj < v7MqwB.length * 32; vVx9Zfj += 8) {
            idHf8oR += globalThis.String.fromCharCode(
              (v7MqwB[vVx9Zfj >> 5] >>> (24 - (vVx9Zfj % 32))) & 255,
            );
          }
          return idHf8oR;
        }
        function wkDNeSc(v7MqwB, idHf8oR) {
          return (v7MqwB >>> idHf8oR) | (v7MqwB << (32 - idHf8oR));
        }
        function FiY6fH(v7MqwB, idHf8oR) {
          return v7MqwB >>> idHf8oR;
        }
        function AMD5z0j(...v7MqwB) {
          v7MqwB.length = 3;
          return (v7MqwB[0] & v7MqwB[1]) ^ (~v7MqwB[0] & v7MqwB[2]);
        }
        function vUtzsf(...v7MqwB) {
          v7MqwB.length = 3;
          return (
            (v7MqwB[0] & v7MqwB[1]) ^
            (v7MqwB[0] & v7MqwB[2]) ^
            (v7MqwB[1] & v7MqwB[2])
          );
        }
        function vOmL_W(v7MqwB) {
          return wkDNeSc(v7MqwB, 2) ^ wkDNeSc(v7MqwB, 13) ^ wkDNeSc(v7MqwB, 22);
        }
        function OhExIE(v7MqwB) {
          return wkDNeSc(v7MqwB, 6) ^ wkDNeSc(v7MqwB, 11) ^ wkDNeSc(v7MqwB, 25);
        }
        function SOXGfEF(...v7MqwB) {
          v7MqwB.length = 1;
          return (
            wkDNeSc(v7MqwB[0], 7) ^
            wkDNeSc(v7MqwB[0], 18) ^
            FiY6fH(v7MqwB[0], 3)
          );
        }
        function fJCd3WR(v7MqwB) {
          return wkDNeSc(v7MqwB, 17) ^ wkDNeSc(v7MqwB, 19) ^ FiY6fH(v7MqwB, 10);
        }
        v7MqwB.c = new globalThis.Array(
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
        function jlooDq(idHf8oR, vVx9Zfj) {
          var Un9fRc = new globalThis.Array(
            1779033703,
            -1150833019,
            1013904242,
            -1521486534,
            1359893119,
            -1694144372,
            528734635,
            1541459225,
          );
          var F8vqq_;
          F8vqq_ = new globalThis.Array(64);
          var eD2NF0;
          var laloxy;
          var XGIRAS;
          var wiRjOM;
          var E1um4r;
          var vsjbv_U;
          var Hfkek2w;
          var NKsNds;
          var wkDNeSc;
          var FiY6fH;
          var jlooDq;
          var hlurBh6;
          ((idHf8oR[vVx9Zfj >> 5] |= 128 << (24 - (vVx9Zfj % 32))),
            (idHf8oR[(((vVx9Zfj + 64) >> 9) << 4) + 15] = vVx9Zfj));
          for (wkDNeSc = 0; wkDNeSc < idHf8oR.length; wkDNeSc += 16) {
            ((eD2NF0 = Un9fRc[0]),
              (laloxy = Un9fRc[1]),
              (XGIRAS = Un9fRc[2]),
              (wiRjOM = Un9fRc[3]),
              (E1um4r = Un9fRc[4]),
              (vsjbv_U = Un9fRc[5]),
              (Hfkek2w = Un9fRc[6]),
              (NKsNds = Un9fRc[7]));
            for (FiY6fH = 0; FiY6fH < 64; FiY6fH++) {
              (FiY6fH < 16
                ? (F8vqq_[FiY6fH] = idHf8oR[FiY6fH + wkDNeSc])
                : (F8vqq_[FiY6fH] = sqcRXN(
                    sqcRXN(
                      sqcRXN(fJCd3WR(F8vqq_[FiY6fH - 2]), F8vqq_[FiY6fH - 7]),
                      SOXGfEF(F8vqq_[FiY6fH - 15]),
                    ),
                    F8vqq_[FiY6fH - 16],
                  )),
                (jlooDq = sqcRXN(
                  sqcRXN(
                    sqcRXN(
                      sqcRXN(NKsNds, OhExIE(E1um4r)),
                      AMD5z0j(E1um4r, vsjbv_U, Hfkek2w),
                    ),
                    v7MqwB.c[FiY6fH],
                  ),
                  F8vqq_[FiY6fH],
                )),
                (hlurBh6 = sqcRXN(
                  vOmL_W(eD2NF0),
                  vUtzsf(eD2NF0, laloxy, XGIRAS),
                )),
                (NKsNds = Hfkek2w),
                (Hfkek2w = vsjbv_U),
                (vsjbv_U = E1um4r),
                (E1um4r = sqcRXN(wiRjOM, jlooDq)),
                (wiRjOM = XGIRAS),
                (XGIRAS = laloxy),
                (laloxy = eD2NF0),
                (eD2NF0 = sqcRXN(jlooDq, hlurBh6)));
            }
            ((Un9fRc[0] = sqcRXN(eD2NF0, Un9fRc[0])),
              (Un9fRc[1] = sqcRXN(laloxy, Un9fRc[1])),
              (Un9fRc[2] = sqcRXN(XGIRAS, Un9fRc[2])),
              (Un9fRc[3] = sqcRXN(wiRjOM, Un9fRc[3])),
              (Un9fRc[4] = sqcRXN(E1um4r, Un9fRc[4])),
              (Un9fRc[5] = sqcRXN(vsjbv_U, Un9fRc[5])),
              (Un9fRc[6] = sqcRXN(Hfkek2w, Un9fRc[6])),
              (Un9fRc[7] = sqcRXN(NKsNds, Un9fRc[7])));
          }
          return Un9fRc;
        }
        function sqcRXN(...v7MqwB) {
          ((v7MqwB.length = 2),
            (v7MqwB[2] = (v7MqwB[0] & 65535) + (v7MqwB[1] & 65535)),
            (v7MqwB[3] =
              (v7MqwB[0] >> 16) + (v7MqwB[1] >> 16) + (v7MqwB[2] >> 16)));
          return (v7MqwB[3] << 16) | (v7MqwB[2] & 65535);
        }
        return {
          hex: idHf8oR,
          b64: Un9fRc,
          any: F8vqq_,
          hex_hmac: vVx9Zfj,
          b64_hmac: Un9fRc,
          any_hmac: F8vqq_,
        };
      })();
      globalThis.console.log(v7MqwB);
    }
    Hfkek2w.StarGhostValidationError.throw("Invalid URL");
  }
  const laloxy = await (0, NKsNds.request)("https://yt1s.io/api/ajaxSearch", {
    ["method"]: "POST",
    ["headers"]: {
      ["Accept"]: "application/json, text/plain, */*",
      ["Content-Type"]: "application/x-www-form-urlencoded; charset=UTF-8",
      ["Origin"]: "https://yt1s.io",
      ["Referer"]: "https://yt1s.io/",
      ["User-Agent"]:
        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
    },
    ["body"]: new (fucpTtW("aFwCL7"))({
      ["q"]: v7MqwB,
      ["w"]: "",
      p: "home",
      ["lang"]: "en",
    }),
  });
  const XGIRAS = (0, wkDNeSc.loadHTML)(laloxy.data);
  const wiRjOM = [];
  XGIRAS(".download-items").each((v7MqwB, idHf8oR) => {
    XGIRAS(idHf8oR)
      .find("a")
      .each((...v7MqwB) => {
        v7MqwB.length = 2;
        const idHf8oR = XGIRAS(v7MqwB[1]).attr("href");
        const Un9fRc = (XGIRAS(v7MqwB[1]).attr("title") || "").toLowerCase();
        v7MqwB[-27] = "unknown";
        if (Un9fRc.includes("thumbnail")) {
          v7MqwB[-27] = "thumbnail";
        } else {
          if (Un9fRc.includes("video")) {
            v7MqwB[-27] = "video";
          } else if (Un9fRc.includes("photo") || Un9fRc.includes("image")) {
            v7MqwB[-27] = "image";
          }
        }
        wiRjOM.push({
          ["type"]: v7MqwB[-27],
          ["url"]: idHf8oR,
        });
      });
  });
  if (!wiRjOM.length) {
    Hfkek2w.StarGhostError.throw("Failed to get data");
  }
  return wiRjOM;
}));
const Xe0scFn = (exports.intermedia = (0, Hfkek2w.nativeify)(async (v7MqwB) => {
  if (!globalThis.Buffer.isBuffer(v7MqwB)) {
    Hfkek2w.StarGhostValidationError.throw("Invalid input type, expects buffer");
  }
  const F8vqq_ = await fucpTtW("X2SFfn5")(
    "https://www.studiointermedia.com/upload",
    {
      ["headers"]: {
        ["User-Agent"]:
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
      },
    },
  );
  if (!F8vqq_.ok) {
    Hfkek2w.StarGhostError.throw("Failed to get web info");
  }
  const XGIRAS = F8vqq_.headers.get("set-cookie");
  const wiRjOM = (await F8vqq_.text()).match(
    new globalThis.RegExp('PF\\.obj\\.config\\.auth_token\\s=\\s"([^"]*)', ""),
  )?.[1];
  if (!XGIRAS || !wiRjOM) {
    Hfkek2w.StarGhostError.throw("Failed to get credentials");
  }
  const vsjbv_U = await (0, wkDNeSc.detectFileType)(v7MqwB);
  if (!vsjbv_U?.ext) {
    Hfkek2w.StarGhostError.throw("Invalid media type");
  }
  const vUtzsf = new (fucpTtW("lOsc6gz"))();
  const OhExIE = new (fucpTtW("TH4x7F9"))([v7MqwB], {
    ["type"]: vsjbv_U.mime,
  });
  (vUtzsf.append(
    "source",
    OhExIE,
    "" + (0, wkDNeSc.createFileName)() + "." + vsjbv_U.ext,
  ),
    vUtzsf.append("type", "file"),
    vUtzsf.append("action", "upload"),
    vUtzsf.append("timestamp", globalThis.String(globalThis.Date.now())),
    vUtzsf.append("auth_token", wiRjOM),
    vUtzsf.append("expiration", ""),
    vUtzsf.append("nsfw", "1"));
  const hlurBh6 = await (0, NKsNds.request)(
    "https://www.studiointermedia.com/json",
    {
      ["method"]: "POST",
      ["headers"]: {
        ["Cookie"]: XGIRAS,
        ["Origin"]: "https://www.studiointermedia.com",
        ["Referer"]: "https://www.studiointermedia.com/upload",
        ["User-Agent"]:
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
      },
      ["body"]: vUtzsf,
    },
  );
  if (hlurBh6.status_code !== 200) {
    Hfkek2w.StarGhostError.throw("Invalid response");
  }
  return hlurBh6.image?.url;
}));
const ZcF0myt = (exports.litterbox = (0, Hfkek2w.nativeify)(async (E1um4r) => {
  if (!globalThis.Buffer.isBuffer(E1um4r)) {
    Hfkek2w.StarGhostValidationError.throw("Invalid input type, expects buffer");
  }
  const v7MqwB = await (0, wkDNeSc.detectFileType)(E1um4r);
  if (!v7MqwB?.ext) {
    Hfkek2w.StarGhostError.throw("Invalid media type");
  }
  const idHf8oR = new (fucpTtW("lOsc6gz"))();
  const vVx9Zfj = new (fucpTtW("TH4x7F9"))([E1um4r], {
    ["type"]: v7MqwB.mime,
  });
  (idHf8oR.append("reqtype", "fileupload"),
    idHf8oR.append("time", "72h"),
    idHf8oR.append(
      "fileToUpload",
      vVx9Zfj,
      "" + (0, wkDNeSc.createFileName)() + "." + v7MqwB.ext,
    ));
  const Un9fRc = await (0, NKsNds.request)(
    "https://litterbox.catbox.moe/resources/internals/api.php",
    {
      ["method"]: "POST",
      ["headers"]: {
        ["Origin"]: "https://litterbox.catbox.moe",
        ["Referer"]: "https://litterbox.catbox.moe/",
        ["User-Agent"]:
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
      },
      ["body"]: idHf8oR,
    },
  );
  if (!(0, wkDNeSc.isURL)(Un9fRc)) {
    Hfkek2w.StarGhostError.throw("Invalid response");
  }
  return Un9fRc.trim();
}));
const sIDPb_ = (exports.meloboom = (0, Hfkek2w.nativeify)(async (E1um4r) => {
  const v7MqwB = await (0, NKsNds.request)(
    "https://meloboom.com/en/search/" + fucpTtW("ADW_nME")(E1um4r),
  );
  const idHf8oR = (0, wkDNeSc.loadHTML)(v7MqwB);
  const vVx9Zfj = [];
  idHf8oR("li").each((...E1um4r) => {
    E1um4r.length = 2;
    const v7MqwB = idHf8oR(E1um4r[1]).find("audio").attr("src");
    if (v7MqwB) {
      vVx9Zfj.push({
        ["title"]: idHf8oR(E1um4r[1]).find("h4").text(),
        ["source"]:
          "https://meloboom.com/" + idHf8oR(E1um4r[1]).find("a").attr("href"),
        ["audio"]: v7MqwB,
      });
    }
  });
  if (!vVx9Zfj.length) {
    Hfkek2w.StarGhostError.throw("Failed to get data");
  }
  return vVx9Zfj;
}));
const POYE24n = (exports.nekohime = (0, Hfkek2w.nativeify)(async (E1um4r) => {
  if (!globalThis.Buffer.isBuffer(E1um4r)) {
    Hfkek2w.StarGhostValidationError.throw("Invalid input type, expects buffer");
  }
  const v7MqwB = await (0, wkDNeSc.detectFileType)(E1um4r);
  if (!v7MqwB?.ext) {
    Hfkek2w.StarGhostError.throw("Invalid media type");
  }
  const idHf8oR = new (fucpTtW("lOsc6gz"))();
  const vVx9Zfj = new (fucpTtW("TH4x7F9"))([E1um4r], {
    ["type"]: v7MqwB.mime,
  });
  idHf8oR.append(
    "file",
    vVx9Zfj,
    "" + (0, wkDNeSc.createFileName)() + "." + v7MqwB.ext,
  );
  const Un9fRc = await (0, NKsNds.request)("https://cdn.nekohime.site/upload", {
    ["method"]: "POST",
    ["headers"]: {
      ["Accept"]: "*/*",
      ["Origin"]: "https://cdn.nekohime.site",
      ["Referer"]: "https://cdn.nekohime.site/",
      ["User-Agent"]:
        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
    },
    ["body"]: idHf8oR,
  });
  const F8vqq_ = Un9fRc.files?.[0]?.url?.trim();
  if (!F8vqq_) {
    Hfkek2w.StarGhostError.throw("Invalid response");
  }
  return F8vqq_;
}));
const TQwx5i = (exports.pindl = (0, Hfkek2w.nativeify)(async (v7MqwB) => {
  v7MqwB = await (0, NKsNds.resolveUrl)(v7MqwB);
  const Un9fRc = v7MqwB.split("/pin/")[1]?.split("/")[0]?.split("?")[0];
  const F8vqq_ = await fucpTtW("X2SFfn5")("https://www.pinterest.com/", {
    ["method"]: "HEAD",
  });
  const hf6iowR = F8vqq_.headers.get("set-cookie");
  if (!hf6iowR) {
    Hfkek2w.StarGhostError.throw("Failed to get credentials");
  }
  const eD2NF0 = await (0, NKsNds.request)(
    "https://www.pinterest.com/resource/PinResource/get/",
    {
      ["method"]: "POST",
      ["headers"]: {
        ["Accept"]: "application/json, text/javascript, */*, q=0.01",
        ["Cookie"]: hf6iowR,
        ["Referer"]: "https://www.pinterest.com/",
        ["User-Agent"]:
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
        ["X-App-Version"]: "f1222d7",
        ["X-CSRFToken"]: hf6iowR.match(
          new globalThis.RegExp("csrftoken=([^;]+)", ""),
        )?.[1],
        ["X-Pinterest-Appstate"]: "active",
        ["x-Pinterest-Pws-Handler"]: "www/[username]/[slug].js",
        ["X-Pinterest-Source-Url"]: "/search/pins/?rs=typed&q=xxx/",
        ["X-Requested-With"]: "XMLHttpRequest",
      },
      ["body"]: new (fucpTtW("aFwCL7"))({
        ["source_url"]: "/pin/" + Un9fRc + "/",
        ["data"]: globalThis.JSON.stringify({
          ["options"]: {
            ["field_set_key"]: "detailed",
            ["id"]: Un9fRc,
          },
          ["context"]: {},
        }),
        ["_"]: globalThis.Date.now(),
      }),
    },
  );
  const laloxy = eD2NF0.resource_response?.data;
  if (!laloxy) {
    Hfkek2w.StarGhostError.throw("Failed to get data");
  }
  const XGIRAS = [];
  const wiRjOM = laloxy.images?.orig;
  if (wiRjOM) {
    const v7MqwB = wiRjOM.url;
    const vsjbv_U = v7MqwB.includes("png");
    const wkDNeSc = v7MqwB.includes("gif");
    XGIRAS.push({
      ["type"]: wkDNeSc ? "gif" : "image",
      ["mime"]: vsjbv_U ? "image/png" : wkDNeSc ? "image/gif" : "image/jpeg",
      ["url"]: v7MqwB,
    });
  }
  const FiY6fH = laloxy.videos?.video_list;
  if (FiY6fH) {
    const [vUtzsf] = globalThis.Object.keys(FiY6fH);
    let v7MqwB = FiY6fH[vUtzsf]?.url;
    if (vUtzsf?.includes("HLS") && v7MqwB?.includes("m3u8")) {
      v7MqwB = v7MqwB.replace("hls", "720p").replace("m3u8", "mp4");
    }
    XGIRAS.push({
      ["type"]: "video",
      ["mime"]: "video/mp4",
      ["url"]: v7MqwB,
    });
  }
  return {
    ["id"]: laloxy.id,
    ["title"]: laloxy.title || laloxy.grid_title,
    ["description"]: laloxy.seo_description || laloxy.description,
    ["media"]: XGIRAS,
  };
}));
const nviYfb = (exports.pinsearch = (0, Hfkek2w.nativeify)(
  async (v7MqwB, idHf8oR = 32) => {
    const F8vqq_ = await (0, NKsNds.request)(
      "https://www.pinterest.com/resource/BaseSearchResource/get/?" +
        new (fucpTtW("aFwCL7"))({
          ["source_url"]: "/search/pins/?q=" + fucpTtW("ADW_nME")(v7MqwB),
          ["data"]: globalThis.JSON.stringify({
            ["options"]: {
              ["isPrefetch"]: false,
              ["auto_correction_disabled"]: false,
              ["query"]: v7MqwB,
              ["redux_normalize_feed"]: true,
              rs: "typed",
              ["scope"]: "pins",
              ["page_size"]: idHf8oR,
            },
            ["context"]: {},
          }),
          ["_"]: globalThis.Date.now(),
        }),
      {
        ["headers"]: {
          ["Accept"]: "application/json, text/javascript, */*, q=0.01",
          ["Accept-Encoding"]: "gzip, deflate",
          ["Accept-Language"]: "en-US,en;q=0.9",
          ["Dnt"]: "1",
          ["Referer"]: "https://www.pinterest.com/",
          ["Sec-Ch-Ua"]:
            '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
          ["Sec-Ch-Ua-Full-Version-List"]:
            '"Not(A:Brand";v="99.0.0.0", "Microsoft Edge";v="133.0.3065.92", "Chromium";v="133.0.6943.142"',
          ["Sec-Ch-Ua-Mobile"]: "?0",
          ["Sec-Ch-Ua-Model"]: '""',
          ["Sec-Ch-Ua-Platform"]: '"Windows"',
          ["Sec-Ch-Ua-Platform-Version"]: '"10.0.0"',
          ["Sec-Fetch-Dest"]: "empty",
          ["Sec-Fetch-Mode"]: "cors",
          ["Sec-Fetch-Site"]: "same-origin",
          ["User-Agent"]:
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0",
          ["X-App-Version"]: "c056fb7",
          ["X-Pinterest-Appstate"]: "active",
          ["X-Pinterest-Pws-Handler"]: "www/[username]/[slug].js",
          ["X-Pinterest-Source-Url"]: "/hargr003/cat-pictures/",
          ["X-Requested-With"]: "XMLHttpRequest",
        },
      },
    );
    if (!F8vqq_.resource_response?.data?.results?.length) {
      Hfkek2w.StarGhostError.throw("Failed to get data");
    }
    return F8vqq_.resource_response.data.results;
  },
));
const Ups9Ne3 = (exports.puticu = (0, Hfkek2w.nativeify)(async (E1um4r) => {
  if (!globalThis.Buffer.isBuffer(E1um4r)) {
    Hfkek2w.StarGhostValidationError.throw("Invalid input type, expects buffer");
  }
  const v7MqwB = await (0, wkDNeSc.detectFileType)(E1um4r);
  if (!v7MqwB?.ext) {
    Hfkek2w.StarGhostError.throw("Invalid media type");
  }
  const idHf8oR = await (0, NKsNds.request)("https://put.icu/upload/", {
    ["method"]: "PUT",
    ["headers"]: {
      ["Accept"]: "application/json",
      ["Content-Type"]: v7MqwB.mime,
    },
    ["body"]: E1um4r,
  });
  const vVx9Zfj = idHf8oR.direct_url || idHf8oR.url;
  if (!vVx9Zfj) {
    Hfkek2w.StarGhostError.throw("Invalid response");
  }
  return vVx9Zfj.trim();
}));
const LiDHWp = (exports.qaz = (0, Hfkek2w.nativeify)(async (E1um4r) => {
  const v7MqwB = await (0, NKsNds.request)(
    "http://qaz.wtf/u/convert.cgi?text=" + fucpTtW("ADW_nME")(E1um4r),
  );
  const idHf8oR = (0, wkDNeSc.loadHTML)(v7MqwB);
  const vVx9Zfj = [];
  idHf8oR("tr").each((E1um4r, v7MqwB) => {
    const Un9fRc = idHf8oR(v7MqwB).find("td").eq(1).text().trim();
    if (Un9fRc) {
      vVx9Zfj.push({
        ["name"]: idHf8oR(v7MqwB).find("td").eq(0).find("span").text(),
        ["result"]: Un9fRc.replace(
          new globalThis.RegExp("&#(x?[0-9A-Fa-f]+);", "g"),
          (...E1um4r) => {
            E1um4r.length = 2;
            const v7MqwB = E1um4r[1].startsWith("x")
              ? fucpTtW("osvH2Xh")(E1um4r[1].slice(1), 16)
              : fucpTtW("osvH2Xh")(E1um4r[1], 10);
            return globalThis.String.fromCodePoint(v7MqwB);
          },
        ),
      });
    }
  });
  if (!vVx9Zfj.length) {
    Hfkek2w.StarGhostError.throw("Failed to get data");
  }
  return vVx9Zfj;
}));
const SOTuAT = (exports.quax = (0, Hfkek2w.nativeify)(async (E1um4r) => {
  if (!globalThis.Buffer.isBuffer(E1um4r)) {
    Hfkek2w.StarGhostValidationError.throw("Invalid input type, expects buffer");
  }
  const v7MqwB = await (0, wkDNeSc.detectFileType)(E1um4r);
  if (!v7MqwB?.ext) {
    Hfkek2w.StarGhostError.throw("Invalid media type");
  }
  const idHf8oR = new (fucpTtW("lOsc6gz"))();
  const vVx9Zfj = new (fucpTtW("TH4x7F9"))([E1um4r], {
    ["type"]: v7MqwB.mime,
  });
  idHf8oR.append("files[]", vVx9Zfj, "file." + v7MqwB.ext);
  const Un9fRc = await (0, NKsNds.request)("https://qu.ax/upload.php", {
    ["method"]: "POST",
    ["headers"]: {
      ["Origin"]: "https://qu.ax",
      ["Referer"]: "https://qu.ax/",
      ["User-Agent"]:
        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
    },
    ["body"]: idHf8oR,
  });
  const F8vqq_ = Un9fRc.files?.[0]?.url;
  if (!F8vqq_) {
    Hfkek2w.StarGhostError.throw("Invalid response");
  }
  return F8vqq_;
}));
const Y4sgnI = (exports.rednote = (0, Hfkek2w.nativeify)(async (E1um4r) => {
  const v7MqwB =
    ((globalThis.Math.random() * 256) | 0) +
    "." +
    ((globalThis.Math.random() * 256) | 0) +
    "." +
    ((globalThis.Math.random() * 256) | 0) +
    "." +
    ((globalThis.Math.random() * 256) | 0);
  const idHf8oR = await (0, NKsNds.request)(
    "https://rednote.savevideodown.com/api/download",
    {
      ["method"]: "POST",
      ["headers"]: {
        ["Client-IP"]: v7MqwB,
        ["Content-Type"]: "application/json",
        ["Origin"]: "https://rednote.savevideodown.com",
        ["Referer"]: "https://rednote.savevideodown.com/",
        ["User-Agent"]:
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
        ["X-Forwarded-For"]: v7MqwB,
        ["X-Real-IP"]: v7MqwB,
      },
      ["body"]: globalThis.JSON.stringify({
        ["url"]: E1um4r,
      }),
    },
  );
  if (!idHf8oR.success) {
    Hfkek2w.StarGhostError.throw("Failed to get data");
  }
  return idHf8oR;
}));
const T5LCqj = (exports.sharpify = (0, Hfkek2w.nativeify)(
  async (E1um4r, v7MqwB = "enhance") => {
    if (!globalThis.Buffer.isBuffer(E1um4r)) {
      Hfkek2w.StarGhostValidationError.throw(
        "Invalid input type, expects buffer",
      );
    }
    const idHf8oR = await (0, wkDNeSc.detectFileType)(E1um4r);
    if (!idHf8oR?.ext) {
      Hfkek2w.StarGhostError.throw("Invalid media type");
    }
    const vVx9Zfj = {
      ["enhance"]: "https://sharpify-api.vercel.app/api/enhance/auto_enhance",
      ["upscale"]: "https://sharpify-api.vercel.app/api/enhance/upscale",
      ["removebg"]: "https://sharpify-api.vercel.app/api/enhance/bgrem",
    };
    const Un9fRc = vVx9Zfj[v7MqwB];
    if (!Un9fRc) {
      Hfkek2w.StarGhostError.throw(
        'Invalid model "' +
          v7MqwB +
          '". Expected one of: ' +
          globalThis.Object.keys(vVx9Zfj).join(", "),
      );
    }
    const F8vqq_ = new (fucpTtW("lOsc6gz"))();
    const hf6iowR = new (fucpTtW("TH4x7F9"))([E1um4r], {
      ["type"]: idHf8oR.mime,
    });
    F8vqq_.append(
      "file",
      hf6iowR,
      "source_" + globalThis.Date.now() + "." + idHf8oR.ext,
    );
    const eD2NF0 = await (0, NKsNds.request)(Un9fRc, {
      ["method"]: "POST",
      ["headers"]: {
        ["Accept-Encoding"]: "gzip",
        ["User-Agent"]: "okhttp/4.9.2",
      },
      ["body"]: F8vqq_,
    });
    if (!eD2NF0?.url) {
      Hfkek2w.StarGhostError.throw("Failed to get data");
    }
    return eD2NF0.url.trim();
  },
));
const cuIYL3 = (exports.soundcloud = globalThis.Object.freeze({
  ["search"]: (0, Hfkek2w.nativeify)(async (E1um4r) => {
    const v7MqwB = await (0, NKsNds.request)(
      "https://api-mobi.soundcloud.com/search?" +
        new (fucpTtW("aFwCL7"))({
          ["q"]: E1um4r,
          ["client_id"]: "KKzJxmw11tYpCs6T24P4uUYhqmjalG6M",
          ["stage"]: "",
        }),
      {
        ["headers"]: {
          ["Accept"]: "application/json, text/javascript, */*; q=0.1",
          ["Content-Type"]: "application/json",
          ["User-Agent"]: "Mozilla/5.0",
        },
      },
    );
    if (!v7MqwB.collection?.length) {
      Hfkek2w.StarGhostError.throw("Failed to get data");
    }
    return v7MqwB.collection;
  }),
  ["download"]: (0, Hfkek2w.nativeify)(async (E1um4r) => {
    const v7MqwB = await (0, NKsNds.request)(
      "https://convertico.com/soundcloud-downloader/soundcloud-downloader.php",
      {
        ["method"]: "POST",
        ["headers"]: {
          ["Accept"]: "*/*",
          ["Origin"]: "https://convertico.com/",
          ["Referer"]: "https://convertico.com/soundcloud-downloader/",
          ["User-Agent"]:
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
        ["body"]: new (fucpTtW("aFwCL7"))({
          ["action"]: "download",
          ["url"]: E1um4r,
          ["quality"]: "192",
          ["is_playlist"]: "0",
        }),
      },
    );
    if (v7MqwB.status !== "success") {
      Hfkek2w.StarGhostError.throw("Failed to get data");
    }
    return "https://convertico.com/soundcloud-downloader/" + v7MqwB.file_url;
  }),
}));
const rWx1DkQ = (exports.stickerLy = (0, Hfkek2w.nativeify)(async (E1um4r) => {
  const v7MqwB = await (0, NKsNds.request)(
    "https://api.sticker.ly/v4/stickerPack/smartSearch",
    {
      ["method"]: "POST",
      ["headers"]: {
        ["Content-Type"]: "application/json",
        ["User-Agent"]:
          "androidapp.stickerly/3.17.0 (Linux; Android 10; Redmi Note 8 Build/QKQ1.200114.002; wv; in-ID)",
      },
      ["body"]: globalThis.JSON.stringify({
        ["keyword"]: E1um4r,
        ["enabledKeywordSearch"]: true,
        ["filter"]: {
          ["extendSearchResult"]: false,
          ["sortBy"]: "RECOMMENDED",
          ["languages"]: ["ALL"],
          ["minStickerCount"]: 5,
          ["searchBy"]: "ALL",
          ["stickerType"]: "ALL",
        },
      }),
    },
  );
  const idHf8oR = v7MqwB.result?.stickerPacks;
  if (!idHf8oR?.length) {
    Hfkek2w.StarGhostError.throw("Failed to get data");
  }
  return idHf8oR;
}));
const KBXE94 = (exports.tempmail = globalThis.Object.freeze({
  ["create"]: (0, Hfkek2w.nativeify)(async () => {
    const E1um4r = await (0, NKsNds.request)(
      "https://api.internal.temp-mail.io/api/v3/email/new",
      {
        ["method"]: "POST",
        ["headers"]: {
          ["Application-Name"]: "web",
          ["Application-Version"]: "4.0.0",
          ["Content-Type"]: "application/json",
          ["Origin"]: "https://temp-mail.io",
          ["Referer"]: "https://temp-mail.io/",
          ["User-Agent"]:
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
          ["X-CORS-Header"]: globalThis.Math.random().toString(36).slice(2),
        },
        ["body"]: '{"min_name_length":10,"max_name_length":12}',
      },
    );
    if (!E1um4r?.email) {
      Hfkek2w.StarGhostError.throw("Failed to get data");
    }
    return E1um4r.email;
  }),
  ["inbox"]: (0, Hfkek2w.nativeify)(async (E1um4r) => {
    const v7MqwB = await (0, NKsNds.request)(
      "https://api.internal.temp-mail.io/api/v3/email/" + E1um4r + "/messages",
      {
        ["headers"]: {
          ["Application-Name"]: "web",
          ["Application-Version"]: "4.0.0",
          ["Content-Type"]: "application/json",
          ["Origin"]: "https://temp-mail.io",
          ["Referer"]: "https://temp-mail.io/",
          ["User-Agent"]:
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
          ["X-CORS-Header"]: globalThis.Math.random().toString(36).slice(2),
        },
      },
    );
    if (!globalThis.Array.isArray(v7MqwB)) {
      Hfkek2w.StarGhostError.throw("Failed to get data");
    }
    return v7MqwB;
  }),
}));
const IHNuuXQ = (exports.termai = (0, Hfkek2w.nativeify)(async (E1um4r) => {
  if (!globalThis.Buffer.isBuffer(E1um4r)) {
    Hfkek2w.StarGhostValidationError.throw("Invalid input type, expects buffer");
  }
  const v7MqwB = await (0, wkDNeSc.detectFileType)(E1um4r);
  if (!v7MqwB?.ext) {
    Hfkek2w.StarGhostError.throw("Invalid media type");
  }
  const idHf8oR = new (fucpTtW("lOsc6gz"))();
  const vVx9Zfj = new (fucpTtW("TH4x7F9"))([E1um4r], {
    ["type"]: v7MqwB.mime,
  });
  idHf8oR.append("file", vVx9Zfj, "file." + v7MqwB.ext);
  const Un9fRc = await (0, NKsNds.request)(
    "https://c.termai.cc/api/upload?key=AIzaBj7z2z3xBjsk",
    {
      ["method"]: "POST",
      ["headers"]: {
        ["Origin"]: "https://c.termai.cc",
        ["Referer"]: "https://c.termai.cc/",
        ["User-Agent"]:
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
      },
      ["body"]: idHf8oR,
    },
  );
  if (!Un9fRc.status) {
    Hfkek2w.StarGhostError.throw("Invalid response");
  }
  return Un9fRc.path;
}));
const bGRBYsS = (exports.tiksearch = (0, Hfkek2w.nativeify)(
  async (E1um4r, v7MqwB = 30) => {
    const idHf8oR = await (0, NKsNds.request)(
      "https://tikwm.com/api/feed/search",
      {
        ["method"]: "POST",
        ["headers"]: {
          ["Accept"]: "application/json, text/javascript, */*; q=0.01",
          ["Accept-Language"]: "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
          ["Content-Type"]: "application/x-www-form-urlencoded; charset=UTF-8",
          ["Origin"]: "https://www.tikwm.com",
          ["Referer"]: "https://www.tikwm.com/",
          ["Sec-Ch-Ua"]: '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
          ["Sec-Ch-Ua-Mobile"]: "?1",
          ["Sec-Ch-Ua-Platform"]: "Android",
          ["Sec-Fetch-Dest"]: "empty",
          ["Sec-Fetch-Mode"]: "cors",
          ["Sec-Fetch-Site"]: "same-origin",
          ["User-Agent"]:
            "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
          ["X-Requested-With"]: "XMLHttpRequest",
        },
        ["body"]: new (fucpTtW("aFwCL7"))({
          ["keywords"]: E1um4r,
          ["count"]: v7MqwB,
          ["cursor"]: 0,
          ["web"]: 1,
          ["hd"]: 1,
        }),
      },
    );
    if (idHf8oR.code != 0 || !idHf8oR.data.videos?.length) {
      Hfkek2w.StarGhostError.throw("Failed to get data");
    }
    return idHf8oR.data.videos;
  },
));
const u3YZj1D = (exports.tiktok = (0, Hfkek2w.nativeify)(async (E1um4r) => {
  if (!E1um4r?.includes?.("tiktok.com")) {
    Hfkek2w.StarGhostValidationError.throw("Invalid URL");
  }
  const {
    ["text"]: v7MqwB,
    ["status"]: idHf8oR,
    ["headers"]: vVx9Zfj,
  } = await kO89WQ8(E1um4r, {
    ["headers"]: {
      ["Accept"]:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      ["Accept-Encoding"]: "gzip, deflate, br",
      ["Accept-Language"]: "id-ID,id;q=0.9,en-AU;q=0.8,en;q=0.7,en-US;q=0.6",
      ["Priority"]: "u=0, i",
      ["Sec-Ch-Ua"]: '"Mises";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
      ["Sec-Ch-Ua-Mobile"]: "?1",
      ["Sec-Ch-Ua-Platform"]: '"Android"',
      ["Sec-Fetch-Dest"]: "document",
      ["Sec-Fetch-Mode"]: "navigate",
      ["Sec-Fetch-Site"]: "same-origin",
      ["Sec-Fetch-User"]: "?1",
      ["Upgrade-Insecure-Requests"]: "1",
      ["User-Agent"]:
        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
    },
  });
  const Un9fRc = sqcRXN(v7MqwB);
  if (!Un9fRc) {
    Hfkek2w.StarGhostError.throw("Failed to get data");
  }
  const F8vqq_ = !!Un9fRc.imagePost;
  let hf6iowR;
  if (F8vqq_) {
    hf6iowR = (Un9fRc.imagePost?.images || []).reduce((...E1um4r) => {
      E1um4r.length = 2;
      return E1um4r[0].concat(E1um4r[1]?.imageURL?.urlList || []);
    }, []);
  } else {
    hf6iowR = [Un9fRc.video?.downloadAddr, Un9fRc.video?.playAddr].filter(
      globalThis.Boolean,
    );
    if (Un9fRc.id) {
      try {
        const eD2NF0 =
          "https://www.tiktok.com/player/api/v1/items?item_ids=" + Un9fRc.id;
        const laloxy = await kO89WQ8(eD2NF0).then((E1um4r) => {
          return E1um4r.text;
        });
        const XGIRAS = globalThis.JSON.parse(laloxy);
        const wiRjOM = XGIRAS.items?.[0]?.video_info?.url_list?.[0];
        if (wiRjOM) {
          hf6iowR.unshift(wiRjOM);
        }
      } catch {}
    }
  }
  hf6iowR = hf6iowR.filter((...E1um4r) => {
    E1um4r.length = 1;
    return !E1um4r[0].includes("webapp");
  });
  if (!hf6iowR.length) {
    Hfkek2w.StarGhostError.throw("Failed to get data");
  }
  return {
    ["cookies"]: (vVx9Zfj["set-cookie"] || [])
      .map((...E1um4r) => {
        E1um4r.length = 1;
        return E1um4r[0].split(";")[0];
      })
      .join("; "),
    ["id"]: Un9fRc.id || Un9fRc.aweme_id || null,
    ["isVideo"]: !F8vqq_,
    ["title"]: Un9fRc.desc || Un9fRc.suggestedWords?.[0] || "",
    ["region"]: Un9fRc.locationCreated || null,
    ["duration"]:
      "" + (Un9fRc.video?.duration || Un9fRc.music?.duration || 0) + " second",
    ["cover"]: Un9fRc.video?.cover || Un9fRc.video?.originCover || null,
    ["stats"]: {
      ["like"]: Un9fRc.stats?.diggCount || 0,
      ["views"]: Un9fRc.stats?.playCount || 0,
      ["share"]: Un9fRc.stats?.shareCount || 0,
      ["comment"]: Un9fRc.stats?.commentCount || 0,
      ["collect"]: Un9fRc.stats?.collectCount || 0,
    },
    ["download"]: hf6iowR,
    ["author"]: {
      ["id"]: Un9fRc.author?.id || "",
      ["secUid"]: Un9fRc.author?.secUid || "",
      ["username"]: Un9fRc.author?.uniqueId || "",
      ["nickname"]: Un9fRc.author?.nickname || "",
      ["avatar"]:
        Un9fRc.author?.avatarLarger ||
        Un9fRc.author?.avatarMedium ||
        Un9fRc.author?.avatarThumb ||
        null,
      ["verified"]: Un9fRc.author?.verified || false,
      ["followers"]:
        Un9fRc.authorStats?.followerCount || Un9fRc.author?.followerCount || 0,
      ["following"]:
        Un9fRc.authorStats?.followingCount ||
        Un9fRc.author?.followingCount ||
        0,
      ["like"]:
        Un9fRc.authorStats?.heartCount || Un9fRc.author?.heartCount || 0,
      ["videoCount"]:
        Un9fRc.authorStats?.videoCount || Un9fRc.author?.videoCount || 0,
    },
    ["music"]: {
      ["id"]: Un9fRc.music?.id || null,
      ["title"]: Un9fRc.music?.title || "",
      ["author"]: Un9fRc.music?.authorName || "",
      ["thumbnail"]:
        Un9fRc.music?.coverLarge ||
        Un9fRc.music?.coverMedium ||
        Un9fRc.music?.coverThumb ||
        null,
      ["duration"]: "" + (Un9fRc.music?.duration || 0) + " second",
      ["url"]: Un9fRc.music?.playUrl || null,
    },
  };
}));
const SIttHFH = (exports.tiktokio = (0, Hfkek2w.nativeify)(async (E1um4r) => {
  if (!E1um4r?.includes?.("tiktok.com")) {
    Hfkek2w.StarGhostValidationError.throw("Invalid URL");
  }
  const v7MqwB = (0, Hfkek2w.getGlobalConfig)("cache");
  const idHf8oR = "tiktokio:" + E1um4r;
  const vVx9Zfj = v7MqwB?.get(idHf8oR);
  if (vVx9Zfj) {
    return vVx9Zfj;
  }
  const Un9fRc = await (0, NKsNds.request)(
    "https://tiktokio.com/api/v1/tk/html",
    {
      ["method"]: "POST",
      ["headers"]: {
        ["Content-Type"]: "application/json",
        ["User-Agent"]:
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36",
        ["Referer"]: "https://tiktokio.com/id/",
      },
      ["body"]: globalThis.JSON.stringify({
        ["prefix"]: "tiktokio.com",
        ["vid"]: E1um4r,
      }),
    },
  );
  const F8vqq_ = (0, wkDNeSc.loadHTML)(Un9fRc);
  const hf6iowR = F8vqq_(".video-info");
  const eD2NF0 = {
    ["title"]: hf6iowR.find("h3").text().trim(),
    ["thumbnail"]: hf6iowR.find("img").first().attr("src") || null,
    ["media"]: [],
  };
  F8vqq_(".download-btn").each((v7MqwB, idHf8oR) => {
    const vVx9Zfj = F8vqq_(idHf8oR);
    const Un9fRc = vVx9Zfj.attr("href") || "";
    if (!Un9fRc) {
      return;
    }
    const hf6iowR = vVx9Zfj.text().trim();
    const laloxy = vVx9Zfj.attr("class") || "";
    let XGIRAS = "other";
    let wiRjOM = "Normal";
    if (laloxy.includes("download-btn-purple")) {
      XGIRAS = "audio";
    } else if (laloxy.includes("download-btn-green")) {
      ((XGIRAS = "video"), (wiRjOM = "HD"));
    } else if (laloxy.includes("download-btn-gray")) {
      ((XGIRAS = "video"), (wiRjOM = "Watermark"));
    } else if (laloxy.includes("download-btn-blue")) {
      let vsjbv_U = idHf8oR.parent;
      while (vsjbv_U) {
        if (
          vsjbv_U.type === "element" &&
          globalThis
            .String(vsjbv_U.attrs?.class || "")
            .split(new globalThis.RegExp("\\s+", ""))
            .includes("image-item")
        ) {
          XGIRAS = "image";
          break;
        }
        vsjbv_U = vsjbv_U.parent;
      }
      if (XGIRAS === "other") {
        XGIRAS = "video";
      }
    }
    eD2NF0.media.push({
      ["quality"]: wiRjOM,
      ["type"]: XGIRAS,
      ["text"]: hf6iowR,
      ["url"]: Un9fRc,
    });
  });
  if (!eD2NF0.media.length) {
    Hfkek2w.StarGhostValidationError.throw("Failed to get data");
  }
  v7MqwB?.set(idHf8oR, eD2NF0);
  return eD2NF0;
}));
const BhOT4j = (exports.tikwm = (0, Hfkek2w.nativeify)(async (E1um4r) => {
  const v7MqwB = await (0, NKsNds.request)("https://www.tikwm.com/api/", {
    ["method"]: "POST",
    ["headers"]: {
      ["Accept"]: "application/json, text/javascript, */*; q=0.01",
      ["Accept-Language"]: "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
      ["Content-Type"]: "application/x-www-form-urlencoded; charset=UTF-8",
      ["Origin"]: "https://www.tikwm.com",
      ["Referer"]: "https://www.tikwm.com/",
      ["Sec-Ch-Ua"]: '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
      ["Sec-Ch-Ua-Mobile"]: "?1",
      ["Sec-Ch-Ua-Platform"]: "Android",
      ["Sec-Fetch-Dest"]: "empty",
      ["Sec-Fetch-Mode"]: "cors",
      ["Sec-Fetch-Site"]: "same-origin",
      ["User-Agent"]:
        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
      ["X-Requested-With"]: "XMLHttpRequest",
    },
    ["body"]: new (fucpTtW("aFwCL7"))({
      ["url"]: E1um4r,
      ["count"]: 12,
      ["cursor"]: 0,
      ["web"]: 1,
      ["hd"]: 1,
    }),
  });
  if (v7MqwB.code != 0) {
    Hfkek2w.StarGhostError.throw("Failed to get data");
  }
  return v7MqwB.data;
}));
const UFSCZnI = (exports.uguu = (0, Hfkek2w.nativeify)(async (E1um4r) => {
  if (!globalThis.Buffer.isBuffer(E1um4r)) {
    Hfkek2w.StarGhostValidationError.throw("Invalid input type, expects buffer");
  }
  const v7MqwB = await (0, wkDNeSc.detectFileType)(E1um4r);
  if (!v7MqwB?.ext) {
    Hfkek2w.StarGhostError.throw("Invalid media type");
  }
  const idHf8oR = new (fucpTtW("lOsc6gz"))();
  const vVx9Zfj = new (fucpTtW("TH4x7F9"))([E1um4r], {
    ["type"]: v7MqwB.mime,
  });
  idHf8oR.append(
    "files[]",
    vVx9Zfj,
    "" + (0, wkDNeSc.createFileName)() + "." + v7MqwB.ext,
  );
  const Un9fRc = await (0, NKsNds.request)("https://uguu.se/upload.php", {
    ["method"]: "POST",
    ["headers"]: {
      ["Origin"]: "https://uguu.se",
      ["Referer"]: "https://uguu.se/",
      ["User-Agent"]:
        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
    },
    ["body"]: idHf8oR,
  });
  const F8vqq_ = Un9fRc.files?.[0]?.url;
  if (!F8vqq_) {
    Hfkek2w.StarGhostError.throw("Invalid response");
  }
  return F8vqq_.trim();
}));
const cCIx1pM = (exports.vidupscaler = (0, Hfkek2w.nativeify)(
  async (E1um4r) => {
    if (!globalThis.Buffer.isBuffer(E1um4r)) {
      Hfkek2w.StarGhostValidationError.throw(
        "Invalid input type, expects buffer",
      );
    }
    const v7MqwB = await UFSCZnI(E1um4r);
    const idHf8oR = await (0, NKsNds.request)(
      "https://api-faa.my.id/faa/hdvid?url=" + v7MqwB,
    );
    if (!idHf8oR.result) {
      Hfkek2w.StarGhostError.throw("Failed to upload media");
    }
    let vVx9Zfj = 0;
    const Un9fRc = 10;
    while (vVx9Zfj <= Un9fRc) {
      try {
        (++vVx9Zfj, await (0, wkDNeSc.delay)(25000));
        const F8vqq_ = await (0, NKsNds.request)(idHf8oR.result);
        if (F8vqq_.result?.download_url) {
          return F8vqq_.result.download_url;
        }
      } catch {}
    }
    Hfkek2w.StarGhostError.throw("Failed to get media after 10 attempts");
  },
));
const etzwtA = (exports.x0 = (0, Hfkek2w.nativeify)(async (E1um4r) => {
  if (!globalThis.Buffer.isBuffer(E1um4r)) {
    Hfkek2w.StarGhostValidationError.throw("Invalid input type, expects buffer");
  }
  const v7MqwB = await (0, wkDNeSc.detectFileType)(E1um4r);
  if (!v7MqwB?.ext) {
    Hfkek2w.StarGhostError.throw("Invalid media type");
  }
  const idHf8oR = new (fucpTtW("lOsc6gz"))();
  const vVx9Zfj = new (fucpTtW("TH4x7F9"))([E1um4r], {
    ["type"]: v7MqwB.mime,
  });
  (idHf8oR.append(
    "file",
    vVx9Zfj,
    "" + (0, wkDNeSc.createFileName)() + "." + v7MqwB.ext,
  ),
    idHf8oR.append("formatted", "true"),
    idHf8oR.append("submit", "Upload"),
    idHf8oR.append("keep_name", "true"));
  const Un9fRc = await (0, NKsNds.request)("https://x0.at", {
    ["method"]: "POST",
    ["headers"]: {
      ["Accept"]: "*/*",
      ["Origin"]: "https://x0.at",
      ["Referer"]: "https://x0.at/",
      ["User-Agent"]:
        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
    },
    ["body"]: idHf8oR,
  });
  const F8vqq_ = (0, wkDNeSc.loadHTML)(Un9fRc);
  const hf6iowR = F8vqq_("a").attr("href");
  if (!(0, wkDNeSc.isURL)(hf6iowR)) {
    Hfkek2w.StarGhostError.throw("Invalid response");
  }
  return hf6iowR;
}));
const epP59P = (exports.ytsearch = (0, Hfkek2w.nativeify)(async (E1um4r) => {
  const v7MqwB = (0, Hfkek2w.getGlobalConfig)("cache");
  const idHf8oR = "ytsearch:" + E1um4r;
  const vVx9Zfj = v7MqwB?.get(idHf8oR);
  if (vVx9Zfj) {
    return vVx9Zfj;
  }
  const Un9fRc = await (0, NKsNds.request)(
    "https://api-faa.my.id/faa/youtube?q=" + fucpTtW("ADW_nME")(E1um4r),
  );
  const F8vqq_ = Un9fRc?.result;
  if (!F8vqq_?.length) {
    Hfkek2w.StarGhostError.throw("Failed to get data");
  }
  v7MqwB?.set(idHf8oR, F8vqq_);
  return F8vqq_;
}));
