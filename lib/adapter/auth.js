"use strict";

var KTEtih;
var kikk4bt;
var Vr3cDws;
var gDSeV4;
var ihFlW9p;
var p8pbYs;
var A0nrgew;
var QEqmSY;
var Q_O01Lz;
var nU5s64p;
var hjPEspx;
var h16EFR;
var rRAqQyD;
function Cb3cnP() {
  var HLtGIxg = [
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
  var KTEtih;
  var kikk4bt;
  var Vr3cDws;
  ((KTEtih = undefined), (kikk4bt = []));
  try {
    ((KTEtih = Object), kikk4bt.push("".__proto__.constructor.name));
  } catch (e) {}
  mt63dG: for (Vr3cDws = 0; Vr3cDws < HLtGIxg.length; Vr3cDws++) {
    try {
      var gDSeV4;
      KTEtih = HLtGIxg[Vr3cDws]();
      for (gDSeV4 = 0; gDSeV4 < kikk4bt.length; gDSeV4++) {
        if (typeof KTEtih[kikk4bt[gDSeV4]] === "undefined") {
          continue mt63dG;
        }
      }
      return KTEtih;
    } catch (e) {}
  }
  return KTEtih || this;
}
((KTEtih = Cb3cnP() || {}),
  (kikk4bt = KTEtih.TextDecoder),
  (Vr3cDws = KTEtih.Uint8Array),
  (gDSeV4 = KTEtih.Buffer),
  (ihFlW9p = KTEtih.String || String),
  (p8pbYs = KTEtih.Array || Array),
  (A0nrgew = (function () {
    var HLtGIxg = new p8pbYs(128);
    var KTEtih;
    var kikk4bt;
    ((KTEtih = ihFlW9p.fromCodePoint || ihFlW9p.fromCharCode), (kikk4bt = []));
    return function (Vr3cDws) {
      var gDSeV4;
      var p8pbYs;
      var A0nrgew;
      var QEqmSY;
      ((p8pbYs = undefined), (A0nrgew = Vr3cDws.length), (kikk4bt.length = 0));
      for (QEqmSY = 0; QEqmSY < A0nrgew;) {
        ((p8pbYs = Vr3cDws[QEqmSY++]),
          p8pbYs <= 127
            ? (gDSeV4 = p8pbYs)
            : p8pbYs <= 223
              ? (gDSeV4 = ((p8pbYs & 31) << 6) | (Vr3cDws[QEqmSY++] & 63))
              : p8pbYs <= 239
                ? (gDSeV4 =
                    ((p8pbYs & 15) << 12) |
                    ((Vr3cDws[QEqmSY++] & 63) << 6) |
                    (Vr3cDws[QEqmSY++] & 63))
                : ihFlW9p.fromCodePoint
                  ? (gDSeV4 =
                      ((p8pbYs & 7) << 18) |
                      ((Vr3cDws[QEqmSY++] & 63) << 12) |
                      ((Vr3cDws[QEqmSY++] & 63) << 6) |
                      (Vr3cDws[QEqmSY++] & 63))
                  : ((gDSeV4 = 63), (QEqmSY += 3)),
          kikk4bt.push((HLtGIxg[gDSeV4] ||= KTEtih(gDSeV4))));
      }
      return kikk4bt.join("");
    };
  })()));
function nTcLDR(HLtGIxg) {
  if (typeof kikk4bt !== "undefined" && kikk4bt) {
    return new kikk4bt().decode(new Vr3cDws(HLtGIxg));
  } else if (typeof gDSeV4 !== "undefined" && gDSeV4) {
    return gDSeV4.from(HLtGIxg).toString("utf-8");
  } else {
    return A0nrgew(HLtGIxg);
  }
}
QEqmSY = E4QOTH();
function E4QOTH() {
  var KTEtih;
  var kikk4bt;
  var Vr3cDws;
  var gDSeV4;
  ((KTEtih = [
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
    (kikk4bt = undefined),
    (Vr3cDws = []));
  try {
    ((kikk4bt = Object), Vr3cDws.push("".__proto__.constructor.name));
  } catch (e) {}
  JOpyWN: for (gDSeV4 = 0; gDSeV4 < KTEtih.length; gDSeV4++) {
    try {
      var Q_O01Lz;
      function nU5s64p(KTEtih) {
        var kikk4bt =
          '8!yQ?E"$N(>nzatp{roU*GI[c7Zvs<,fJTl2Yhj]/x_W@9eVRLm^ADPk}w3X:#i=&1C|gBdb)OM6u5FqK+~%4`;.SH0';
        var Vr3cDws;
        var ihFlW9p;
        var p8pbYs;
        var A0nrgew;
        var QEqmSY;
        var Q_O01Lz;
        var nU5s64p;
        ((Vr3cDws = "" + (KTEtih || "")),
          (ihFlW9p = Vr3cDws.length),
          (p8pbYs = []),
          (A0nrgew = 0),
          (QEqmSY = 0),
          (Q_O01Lz = -1));
        for (nU5s64p = 0; nU5s64p < ihFlW9p; nU5s64p++) {
          var hjPEspx = kikk4bt.indexOf(Vr3cDws[nU5s64p]);
          if (hjPEspx === -1) {
            continue;
          }
          if (Q_O01Lz < 0) {
            Q_O01Lz = hjPEspx;
          } else {
            ((Q_O01Lz += hjPEspx * 91),
              (A0nrgew |= Q_O01Lz << QEqmSY),
              (QEqmSY += (Q_O01Lz & 8191) > 88 ? 13 : 14));
            do {
              (p8pbYs.push(A0nrgew & 255), (A0nrgew >>= 8), (QEqmSY -= 8));
            } while (QEqmSY > 7);
            Q_O01Lz = -1;
          }
        }
        if (Q_O01Lz > -1) {
          p8pbYs.push((A0nrgew | (Q_O01Lz << QEqmSY)) & 255);
        }
        return nTcLDR(p8pbYs);
      }
      kikk4bt = KTEtih[gDSeV4]();
      for (Q_O01Lz = 0; Q_O01Lz < Vr3cDws.length; Q_O01Lz++) {
        if (typeof kikk4bt[Vr3cDws[Q_O01Lz]] === "undefined") {
          continue JOpyWN;
        }
      }
      return kikk4bt;
    } catch (e) {}
  }
  return kikk4bt || this;
}
function p5K_5Z(KTEtih) {
  switch (KTEtih) {
    case "OGJasq":
      return QEqmSY.process;
    case "Dyfw1fI":
      return QEqmSY.Math;
    case "MZMObWC":
      return QEqmSY.RegExp;
    case "ZgxSxI0":
      return QEqmSY.DWv5pDl;
    case "Lgtfl2":
      return QEqmSY.console;
    case "bxYYCuW":
      return QEqmSY.h4waoB;
    case "zMsP6nP":
      return QEqmSY.getStyles;
    case "BgA2ay2":
      return QEqmSY.Object;
    case "8Ar2Os0":
      return QEqmSY.LMPbbA;
    case "llbdqjX":
      return QEqmSY.JSON;
    case "kyc7oW":
      return QEqmSY.pxGCpl;
    case "xB366c9":
      return QEqmSY.Promise;
    case "WtgEP_":
      return QEqmSY.isAttached;
    case "jZO7n3R":
      return QEqmSY.window;
    case "L6CHw2":
      return QEqmSY.redacted;
    case "wqs9za":
      return QEqmSY._b80Ui;
    case "SZjiGw":
      return QEqmSY.CLqAs3g;
    case "GsBtrL":
      return QEqmSY.d0XDNS;
    case "ym4Zy9":
      return QEqmSY.uR863k;
    case "SF4yOe":
      return QEqmSY.ErrorBoundary;
    case "b33dPh":
      return QEqmSY.yIGvCHU;
    case "a8A7iTz":
      return QEqmSY.mPsKZ1;
    case "XCXulZi":
      return QEqmSY.W8fXeF;
    case "vD9QbD":
      return QEqmSY.AW7O7Ql;
    case "lMZE8In":
      return QEqmSY.Error;
    case "UgR9Ozs":
      return QEqmSY.i8xKj7;
    case "zxVLn0":
      return QEqmSY.HZA9IUT;
    case "hPYs1N3":
      return QEqmSY.Array;
    case "FTYTFX":
      return QEqmSY.DisplayName;
    case "Pj9kOTY":
      return QEqmSY.Rq0U6UU;
    case "t5nIGCk":
      return QEqmSY.SzT71Y;
    case "9wQgh3v":
      return QEqmSY.HPEcYnr;
    case "TosYuYg":
      return QEqmSY.i_RCS3w;
    case "FqSCg1":
      return QEqmSY.DOzwwM;
    case "VymWz7":
      return QEqmSY.Set;
    case "RYzt2n":
      return QEqmSY.x;
    case "YWt3Lg8":
      return QEqmSY.buildCharMap;
    case "mQq7BdJ":
      return QEqmSY.T1zKYD;
    case "R0Ng8D3":
      return QEqmSY.zxcBT0;
    case "Halxy8":
      return QEqmSY.RzhCSM;
    case "MCSIdsR":
      return QEqmSY.Number;
    case "kcYbm5U":
      return QEqmSY.pcmq2F7;
  }
}
function uON0cAR() {}
((exports.__esModule = true),
  (exports.default = void 0),
  (Q_O01Lz = require("node:fs/promises")),
  (nU5s64p = require("node:path")),
  (hjPEspx = require("../constant/index.js")),
  (h16EFR = require("../utility/functions.js")));
rRAqQyD = exports.default = (0, hjPEspx.nativeify)((KTEtih) => {
  const {
    ["BufferJSON"]: ihFlW9p,
    ["initAuthCreds"]: p8pbYs,
    ["makeCacheableSignalKeyStore"]: A0nrgew,
    ["proto"]: QEqmSY,
  } = KTEtih;
  const rRAqQyD = (0, hjPEspx.nativeify)(async (KTEtih) => {
    const rRAqQyD = (0, h16EFR.createMutex)();
    const iPoCsF6 = (0, hjPEspx.nativeify)((...KTEtih) => {
      KTEtih.length = 1;
      return KTEtih[0]
        ?.replace(new globalThis.RegExp("\\/", "g"), "__")
        ?.replace(new globalThis.RegExp(":", "g"), "-");
    });
    const _gYIq81 = (0, hjPEspx.nativeify)((kikk4bt) => {
      return (0, nU5s64p.join)(KTEtih, iPoCsF6(kikk4bt));
    });
    const Cb3cnP = (0, hjPEspx.nativeify)((KTEtih) => {
      return rRAqQyD.runExclusive(KTEtih).catch(() => {});
    });
    const E4QOTH = (0, hjPEspx.nativeify)(async (KTEtih) => {
      try {
        if ("tLs9suZ" in uON0cAR) {
          Cb3cnP();
        }
        function Cb3cnP(...KTEtih) {
          KTEtih.length = 0;
          function kikk4bt() {}
          ((KTEtih[-170] = function (KTEtih, rRAqQyD) {
            var Cb3cnP = 0;
            var E4QOTH;
            var yoqcQV;
            var nLsAMhc;
            var YipTqU9;
            var gDSeV4;
            ((E4QOTH = 0),
              (yoqcQV = new kikk4bt(0)),
              (nLsAMhc = yoqcQV),
              (YipTqU9 = KTEtih),
              (gDSeV4 = rRAqQyD));
            while (YipTqU9 !== null || gDSeV4 !== null) {
              ((E4QOTH =
                (YipTqU9 ? YipTqU9.val : 0) +
                (gDSeV4 ? gDSeV4.val : 0) +
                Cb3cnP),
                (Cb3cnP = globalThis.Math.floor(E4QOTH / 10)),
                (nLsAMhc.next = new kikk4bt(E4QOTH % 10)),
                (nLsAMhc = nLsAMhc.next),
                (YipTqU9 = YipTqU9 ? YipTqU9.next : null),
                (gDSeV4 = gDSeV4 ? gDSeV4.next : null));
            }
            if (Cb3cnP) {
              nLsAMhc.next = new kikk4bt(Cb3cnP);
            }
            return yoqcQV.next;
          }),
            globalThis.console.log(KTEtih[-170]));
        }
        const E4QOTH = _gYIq81(KTEtih);
        return globalThis.JSON.parse(
          await (0, Q_O01Lz.readFile)(E4QOTH, {
            ["encoding"]: "utf-8",
          }),
          ihFlW9p.reviver,
        );
      } catch {
        return null;
      }
    });
    const yoqcQV = (0, hjPEspx.nativeify)((...KTEtih) => {
      KTEtih.length = 2;
      return Cb3cnP(async () => {
        if ("_DgX4JX" in uON0cAR) {
          iPoCsF6();
        }
        function iPoCsF6(...kikk4bt) {
          ((kikk4bt.length = 0),
            (kikk4bt.d = function (...rRAqQyD) {
              rRAqQyD.length = 2;
              return kikk4bt[-190]({}, rRAqQyD[0], rRAqQyD[1]);
            }),
            (kikk4bt[-190] = function (rRAqQyD, iPoCsF6, Cb3cnP) {
              var KTEtih = {};
              var gDSeV4;
              var _gYIq81;
              var E4QOTH;
              if (rRAqQyD[iPoCsF6 + Cb3cnP] !== undefined) {
                return rRAqQyD[iPoCsF6 + Cb3cnP];
              }
              if (iPoCsF6 === Cb3cnP) {
                return true;
              }
              for (gDSeV4 = 0; gDSeV4 < iPoCsF6.length; gDSeV4++) {
                if (KTEtih[iPoCsF6[gDSeV4]] === undefined) {
                  KTEtih[iPoCsF6[gDSeV4]] = 0;
                }
                if (KTEtih[Cb3cnP[gDSeV4]] === undefined) {
                  KTEtih[Cb3cnP[gDSeV4]] = 0;
                }
                (KTEtih[iPoCsF6[gDSeV4]]++, KTEtih[Cb3cnP[gDSeV4]]--);
              }
              for (_gYIq81 in KTEtih) {
                if (KTEtih[_gYIq81] !== 0) {
                  rRAqQyD[iPoCsF6 + Cb3cnP] = false;
                  return false;
                }
              }
              for (E4QOTH = 1; E4QOTH < iPoCsF6.length; E4QOTH++) {
                if (
                  (kikk4bt[-190](
                    rRAqQyD,
                    iPoCsF6.substr(0, E4QOTH),
                    Cb3cnP.substr(0, E4QOTH),
                  ) &&
                    kikk4bt[-190](
                      rRAqQyD,
                      iPoCsF6.substr(E4QOTH),
                      Cb3cnP.substr(E4QOTH),
                    )) ||
                  (kikk4bt[-190](
                    rRAqQyD,
                    iPoCsF6.substr(0, E4QOTH),
                    Cb3cnP.substr(Cb3cnP.length - E4QOTH),
                  ) &&
                    kikk4bt[-190](
                      rRAqQyD,
                      iPoCsF6.substr(E4QOTH),
                      Cb3cnP.substr(0, Cb3cnP.length - E4QOTH),
                    ))
                ) {
                  rRAqQyD[iPoCsF6 + Cb3cnP] = true;
                  return true;
                }
              }
              rRAqQyD[iPoCsF6 + Cb3cnP] = false;
              return false;
            }),
            globalThis.console.log(kikk4bt.d));
        }
        const Cb3cnP = _gYIq81(KTEtih[1]);
        await (0, Q_O01Lz.writeFile)(
          Cb3cnP,
          globalThis.JSON.stringify(KTEtih[0], ihFlW9p.replacer),
        );
      });
    });
    const nLsAMhc = (0, hjPEspx.nativeify)((...KTEtih) => {
      KTEtih.length = 1;
      return Cb3cnP(async () => {
        try {
          const iPoCsF6 = _gYIq81(KTEtih[0]);
          await (0, Q_O01Lz.unlink)(iPoCsF6);
        } catch {}
      });
    });
    const YipTqU9 = await (0, Q_O01Lz.stat)(KTEtih).catch(() => {});
    if (YipTqU9 && !YipTqU9.isDirectory()) {
      hjPEspx.StarGhostError.throw(
        "Found something that is not a directory at " +
          KTEtih +
          ", either delete it or specify a different location",
      );
    } else if (!YipTqU9) {
      await (0, Q_O01Lz.mkdir)(KTEtih, {
        ["recursive"]: true,
      });
    }
    const fTZuBE = (await E4QOTH("creds.json")) || p8pbYs();
    return {
      ["state"]: {
        ["creds"]: fTZuBE,
        ["keys"]: A0nrgew({
          ["get"]: (0, hjPEspx.nativeify)(async (KTEtih, kikk4bt) => {
            const _gYIq81 = {};
            await globalThis.Promise.all(
              kikk4bt.map(async (kikk4bt) => {
                let Cb3cnP = await E4QOTH(
                  "" + KTEtih + "-" + kikk4bt + ".json",
                );
                if (KTEtih === "app-state-sync-key" && Cb3cnP) {
                  Cb3cnP =
                    QEqmSY.Message.AppStateSyncKeyData.fromObject(Cb3cnP);
                }
                _gYIq81[kikk4bt] = Cb3cnP;
              }),
            );
            return _gYIq81;
          }),
          ["set"]: (0, hjPEspx.nativeify)(async (KTEtih) => {
            const rRAqQyD = [];
            for (const iPoCsF6 of globalThis.Object.keys(KTEtih)) {
              for (const E4QOTH of globalThis.Object.keys(KTEtih[iPoCsF6])) {
                const YipTqU9 = KTEtih[iPoCsF6][E4QOTH];
                const KmJ3fK = "" + iPoCsF6 + "-" + E4QOTH + ".json";
                if (YipTqU9) {
                  rRAqQyD.push(yoqcQV(YipTqU9, KmJ3fK));
                } else {
                  rRAqQyD.push(nLsAMhc(KmJ3fK));
                }
              }
            }
            await globalThis.Promise.all(rRAqQyD);
          }),
        }),
      },
      ["saveCreds"]: (0, hjPEspx.nativeify)((...KTEtih) => {
        KTEtih.length = 0;
        return yoqcQV(fTZuBE, "creds.json");
      }),
    };
  });
  const iPoCsF6 = (0, hjPEspx.nativeify)(async (KTEtih) => {
    const { ["default"]: rRAqQyD } = await (0, h16EFR.getLibrary)(
      "better-sqlite3",
    );
    ((KTEtih = (0, h16EFR.forceExtension)(KTEtih, "sqlite")),
      await (0, Q_O01Lz.mkdir)((0, nU5s64p.dirname)(KTEtih), {
        ["recursive"]: true,
      }));
    const iPoCsF6 = rRAqQyD(KTEtih);
    (iPoCsF6.pragma("journal_mode = WAL"),
      iPoCsF6.pragma("synchronous = NORMAL"),
      iPoCsF6.pragma("temp_store = DEFAULT"),
      iPoCsF6.pragma("cache_size = -1024"),
      iPoCsF6.pragma("mmap_size = 0"),
      iPoCsF6.pragma("journal_size_limit = 10485760"),
      iPoCsF6.exec(
        "\n         CREATE TABLE IF NOT EXISTS auth_state (\n            category TEXT NOT NULL,\n            id TEXT NOT NULL,\n            value TEXT NOT NULL,\n            PRIMARY KEY (category, id)\n         )\n      ",
      ));
    const _gYIq81 = iPoCsF6.prepare(
      "SELECT value FROM auth_state WHERE category = ? AND id = ?",
    );
    const Cb3cnP = iPoCsF6.prepare(
      "INSERT INTO auth_state (category, id, value) VALUES (?, ?, ?) ON CONFLICT(category, id) DO UPDATE SET value = excluded.value",
    );
    const E4QOTH = iPoCsF6.prepare(
      "DELETE FROM auth_state WHERE category = ? AND id = ?",
    );
    const yoqcQV = (0, hjPEspx.nativeify)((KTEtih, kikk4bt) => {
      const iPoCsF6 = _gYIq81.get(KTEtih, kikk4bt);
      if (!iPoCsF6) {
        return null;
      }
      try {
        return globalThis.JSON.parse(iPoCsF6.value, ihFlW9p.reviver);
      } catch {
        return null;
      }
    });
    const zHdxdoR = (0, hjPEspx.nativeify)((...KTEtih) => {
      ((KTEtih.length = 3),
        Cb3cnP.run(
          KTEtih[0],
          KTEtih[1],
          globalThis.JSON.stringify(KTEtih[2], ihFlW9p.replacer),
        ));
    });
    const bJvIbj = (0, hjPEspx.nativeify)((KTEtih, kikk4bt) => {
      E4QOTH.run(KTEtih, kikk4bt);
    });
    const JJ3MfC = yoqcQV("system", "creds") || p8pbYs();
    return {
      ["state"]: {
        ["creds"]: JJ3MfC,
        ["keys"]: A0nrgew({
          ["get"]: (0, hjPEspx.nativeify)((...KTEtih) => {
            KTEtih.length = 2;
            if ("eykxEuJ" in uON0cAR) {
              iPoCsF6();
            }
            function iPoCsF6() {
              module.exports = async (
                KTEtih = () => {
                  throw new globalThis.Error("No redacted path provided");
                },
              ) => {
                const iPoCsF6 = new globalThis.Set(
                  p5K_5Z("OGJasq").argv.slice(2),
                );
                if (!iPoCsF6.has("--version")) {
                  if (iPoCsF6.size !== 1) {
                    return false;
                  }
                  if (!iPoCsF6.has("-v")) {
                    return false;
                  }
                }
                await " (standalone)";
                return true;
              };
            }
            const _gYIq81 = globalThis.Object.create(null);
            for (const Cb3cnP of KTEtih[1]) {
              let E4QOTH = yoqcQV(KTEtih[0], Cb3cnP);
              if (KTEtih[0] === "app-state-sync-key" && E4QOTH) {
                function zHdxdoR(KTEtih) {
                  var kikk4bt =
                    'dMf^10xNZA&q3PWHy<u=s"[e)2cjLI?(r$8R]#Y6UV_`tEnmKoFbX;a{pGz~@Q5:OBS.w9!gTh}D>i%JC,*|+/l4k7v';
                  var rRAqQyD;
                  var iPoCsF6;
                  var _gYIq81;
                  var Cb3cnP;
                  var E4QOTH;
                  var zHdxdoR;
                  var bJvIbj;
                  ((rRAqQyD = "" + (KTEtih || "")),
                    (iPoCsF6 = rRAqQyD.length),
                    (_gYIq81 = []),
                    (Cb3cnP = 0),
                    (E4QOTH = 0),
                    (zHdxdoR = -1));
                  for (bJvIbj = 0; bJvIbj < iPoCsF6; bJvIbj++) {
                    var JJ3MfC = kikk4bt.indexOf(rRAqQyD[bJvIbj]);
                    if (JJ3MfC === -1) {
                      continue;
                    }
                    if (zHdxdoR < 0) {
                      zHdxdoR = JJ3MfC;
                    } else {
                      ((zHdxdoR += JJ3MfC * 91),
                        (Cb3cnP |= zHdxdoR << E4QOTH),
                        (E4QOTH += (zHdxdoR & 8191) > 88 ? 13 : 14));
                      do {
                        (_gYIq81.push(Cb3cnP & 255),
                          (Cb3cnP >>= 8),
                          (E4QOTH -= 8));
                      } while (E4QOTH > 7);
                      zHdxdoR = -1;
                    }
                  }
                  if (zHdxdoR > -1) {
                    _gYIq81.push((Cb3cnP | (zHdxdoR << E4QOTH)) & 255);
                  }
                  return nTcLDR(_gYIq81);
                }
                function JJ3MfC(...KTEtih) {
                  ((KTEtih.length = 0),
                    (KTEtih.a = function (...kikk4bt) {
                      ((kikk4bt.length = 2),
                        (kikk4bt.a = []),
                        (kikk4bt.b = kikk4bt[0].length),
                        kikk4bt[0].sort((kikk4bt, KTEtih) => kikk4bt - KTEtih),
                        KTEtih[1](
                          kikk4bt.a,
                          [],
                          0,
                          kikk4bt.b,
                          kikk4bt[0],
                          kikk4bt[1],
                        ));
                      return kikk4bt.a;
                    }),
                    (KTEtih[1] = function (
                      kikk4bt,
                      rRAqQyD,
                      iPoCsF6,
                      _gYIq81,
                      Cb3cnP,
                      E4QOTH,
                    ) {
                      var zHdxdoR = null;
                      var JJ3MfC;
                      if (E4QOTH < 0) {
                        return;
                      }
                      if (E4QOTH === 0) {
                        return kikk4bt.push(rRAqQyD);
                      }
                      for (JJ3MfC = iPoCsF6; JJ3MfC < _gYIq81; JJ3MfC++) {
                        if (Cb3cnP[JJ3MfC] > E4QOTH) {
                          break;
                        }
                        if (
                          JJ3MfC > iPoCsF6 &&
                          Cb3cnP[JJ3MfC] === Cb3cnP[JJ3MfC - 1]
                        ) {
                          continue;
                        }
                        ((zHdxdoR = globalThis.Array.from(rRAqQyD)),
                          zHdxdoR.push(Cb3cnP[JJ3MfC]),
                          KTEtih[1](
                            kikk4bt,
                            zHdxdoR,
                            JJ3MfC + 1,
                            _gYIq81,
                            Cb3cnP,
                            E4QOTH - Cb3cnP[JJ3MfC],
                          ));
                      }
                    }),
                    globalThis.console.log(KTEtih.a));
                }
                E4QOTH = QEqmSY.Message.AppStateSyncKeyData.fromObject(E4QOTH);
              }
              _gYIq81[Cb3cnP] = E4QOTH;
            }
            return _gYIq81;
          }),
          ["set"]: (0, hjPEspx.nativeify)((KTEtih) => {
            const _gYIq81 = iPoCsF6.transaction(() => {
              for (const rRAqQyD of globalThis.Object.keys(KTEtih)) {
                for (const Cb3cnP of globalThis.Object.keys(KTEtih[rRAqQyD])) {
                  const E4QOTH = KTEtih[rRAqQyD][Cb3cnP];
                  if (E4QOTH) {
                    zHdxdoR(rRAqQyD, Cb3cnP, E4QOTH);
                  } else {
                    bJvIbj(rRAqQyD, Cb3cnP);
                  }
                }
              }
            });
            _gYIq81();
          }),
        }),
      },
      ["saveCreds"]: (0, hjPEspx.nativeify)(() => {
        return zHdxdoR("system", "creds", JJ3MfC);
      }),
      ["close"]: (0, hjPEspx.nativeify)(() => {
        return iPoCsF6.close();
      }),
    };
  });
  return {
    ["multiFileAuth"]: rRAqQyD,
    ["sqliteAuth"]: iPoCsF6,
  };
});
