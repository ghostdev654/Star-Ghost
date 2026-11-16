"use strict";

var f3ZjOq;
var hoGUjL;
var KzH044;
var alCOENz;
var eYUcJi;
var hp1uDD;
var aZRl42;
var iJ2wWkz;
var ZJb4zgJ;
var oWb0MkZ;
function uTIiT0(...ohKpqu) {
  ((ohKpqu.length = 0),
    (ohKpqu[222] = [
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
    (ohKpqu[-76] = undefined),
    (ohKpqu.d = []));
  try {
    ((ohKpqu[-76] = Object), ohKpqu.d.push("".__proto__.constructor.name));
  } catch (e) {}
  n4V9iS: for (ohKpqu.e = 0; ohKpqu.e < ohKpqu[222].length; ohKpqu.e++) {
    try {
      ohKpqu[-76] = ohKpqu[222][ohKpqu.e]();
      for (ohKpqu.f = 0; ohKpqu.f < ohKpqu.d.length; ohKpqu.f++) {
        if (typeof ohKpqu[-76][ohKpqu.d[ohKpqu.f]] === "undefined") {
          continue n4V9iS;
        }
      }
      return ohKpqu[-76];
    } catch (e) {}
  }
  return ohKpqu[-76] || this;
}
((f3ZjOq = uTIiT0() || {}),
  (hoGUjL = f3ZjOq.TextDecoder),
  (KzH044 = f3ZjOq.Uint8Array),
  (alCOENz = f3ZjOq.Buffer),
  (eYUcJi = f3ZjOq.String || String),
  (hp1uDD = f3ZjOq.Array || Array),
  (aZRl42 = (function () {
    var ohKpqu = new hp1uDD(128);
    var f3ZjOq;
    var hoGUjL;
    ((f3ZjOq = eYUcJi.fromCodePoint || eYUcJi.fromCharCode), (hoGUjL = []));
    return function (...KzH044) {
      ((KzH044.length = 1),
        (KzH044[1] = undefined),
        (KzH044.b = undefined),
        (KzH044[49] = KzH044[0].length),
        (hoGUjL.length = 0));
      for (KzH044[147] = 0; KzH044[147] < KzH044[49];) {
        ((KzH044.b = KzH044[0][KzH044[147]++]),
          KzH044.b <= 127
            ? (KzH044[1] = KzH044.b)
            : KzH044.b <= 223
              ? (KzH044[1] =
                  ((KzH044.b & 31) << 6) | (KzH044[0][KzH044[147]++] & 63))
              : KzH044.b <= 239
                ? (KzH044[1] =
                    ((KzH044.b & 15) << 12) |
                    ((KzH044[0][KzH044[147]++] & 63) << 6) |
                    (KzH044[0][KzH044[147]++] & 63))
                : eYUcJi.fromCodePoint
                  ? (KzH044[1] =
                      ((KzH044.b & 7) << 18) |
                      ((KzH044[0][KzH044[147]++] & 63) << 12) |
                      ((KzH044[0][KzH044[147]++] & 63) << 6) |
                      (KzH044[0][KzH044[147]++] & 63))
                  : ((KzH044[1] = 63), (KzH044[147] += 3)),
          hoGUjL.push((ohKpqu[KzH044[1]] ||= f3ZjOq(KzH044[1]))));
      }
      return hoGUjL.join("");
    };
  })()));
function QC_kDYE(...ohKpqu) {
  ohKpqu.length = 1;
  if (typeof hoGUjL !== "undefined" && hoGUjL) {
    return new hoGUjL().decode(new KzH044(ohKpqu[0]));
  } else if (typeof alCOENz !== "undefined" && alCOENz) {
    return alCOENz.from(ohKpqu[0]).toString("utf-8");
  } else {
    return aZRl42(ohKpqu[0]);
  }
}
function M11cRUT() {}
((exports.__esModule = true),
  (exports.default = void 0),
  (iJ2wWkz = require("../constant/index.js")),
  (ZJb4zgJ = require("../utility/functions.js")));
oWb0MkZ = exports.default = (0, iJ2wWkz.nativeify)(
  async (
    f3ZjOq,
    hoGUjL = {},
    { ["baileysModule"]: KzH044, ["store"]: alCOENz, ["serialize"]: eYUcJi },
  ) => {
    eYUcJi = eYUcJi || ((...args) => {});
    const {
      ["decryptMessageEditWithLidFallback"]: dR1JCh7,
      ["decryptPollVoteWithLidFallback"]: oWb0MkZ,
      ["delay"]: GfKJBB_,
      ["getAggregateVotesInPollMessageV2"]: uTIiT0,
      ["isLidUser"]: kQ444p,
    } = KzH044;
    (f3ZjOq.ev.on(
      "connection.update",
      async ({
        ["connection"]: hoGUjL,
        ["receivedPendingNotifications"]: KzH044,
      }) => {
        if (KzH044) {
          (void f3ZjOq.getBlocklist(true).catch(() => {}), f3ZjOq.ev.flush());
        }
      },
    ),
      f3ZjOq.ev.on("contacts.update", async (hoGUjL) => {
        for (const aZRl42 of hoGUjL) {
          function dR1JCh7(hoGUjL) {
            var KzH044 =
              'C(z&c9gAWb!N_sD[EMT,%<u3+Ld7o}=HfQxGFa>.]v#B/@XmyV8OZe^|jkY?:P4{l;1t5I"2Rh~q$iUp)SJrw0*Kn`6';
            var eYUcJi;
            var hp1uDD;
            var aZRl42;
            var dR1JCh7;
            var oWb0MkZ;
            var GfKJBB_;
            var uTIiT0;
            ((eYUcJi = "" + (hoGUjL || "")),
              (hp1uDD = eYUcJi.length),
              (aZRl42 = []),
              (dR1JCh7 = 0),
              (oWb0MkZ = 0),
              (GfKJBB_ = -1));
            for (uTIiT0 = 0; uTIiT0 < hp1uDD; uTIiT0++) {
              var kQ444p = KzH044.indexOf(eYUcJi[uTIiT0]);
              if (kQ444p === -1) {
                continue;
              }
              if (GfKJBB_ < 0) {
                GfKJBB_ = kQ444p;
              } else {
                ((GfKJBB_ += kQ444p * 91),
                  (dR1JCh7 |= GfKJBB_ << oWb0MkZ),
                  (oWb0MkZ += (GfKJBB_ & 8191) > 88 ? 13 : 14));
                do {
                  (aZRl42.push(dR1JCh7 & 255), (dR1JCh7 >>= 8), (oWb0MkZ -= 8));
                } while (oWb0MkZ > 7);
                GfKJBB_ = -1;
              }
            }
            if (GfKJBB_ > -1) {
              aZRl42.push((dR1JCh7 | (GfKJBB_ << oWb0MkZ)) & 255);
            }
            return QC_kDYE(aZRl42);
          }
          let GfKJBB_ = alCOENz.contacts.get(aZRl42.id);
          if (!GfKJBB_) {
            function uTIiT0(hoGUjL) {
              var KzH044 =
                '7eZL|C)FckQPEAY,OVzvW/}{I"b_up;@*o31T]tUsGm%(yfiBnN:`J45>96x<M~r&jw=Kh.H$S!D#0a8lq[X^+dR?g2';
              var eYUcJi;
              var hp1uDD;
              var aZRl42;
              var dR1JCh7;
              var oWb0MkZ;
              var GfKJBB_;
              var uTIiT0;
              ((eYUcJi = "" + (hoGUjL || "")),
                (hp1uDD = eYUcJi.length),
                (aZRl42 = []),
                (dR1JCh7 = 0),
                (oWb0MkZ = 0),
                (GfKJBB_ = -1));
              for (uTIiT0 = 0; uTIiT0 < hp1uDD; uTIiT0++) {
                var kQ444p = KzH044.indexOf(eYUcJi[uTIiT0]);
                if (kQ444p === -1) {
                  continue;
                }
                if (GfKJBB_ < 0) {
                  GfKJBB_ = kQ444p;
                } else {
                  ((GfKJBB_ += kQ444p * 91),
                    (dR1JCh7 |= GfKJBB_ << oWb0MkZ),
                    (oWb0MkZ += (GfKJBB_ & 8191) > 88 ? 13 : 14));
                  do {
                    (aZRl42.push(dR1JCh7 & 255),
                      (dR1JCh7 >>= 8),
                      (oWb0MkZ -= 8));
                  } while (oWb0MkZ > 7);
                  GfKJBB_ = -1;
                }
              }
              if (GfKJBB_ > -1) {
                aZRl42.push((dR1JCh7 | (GfKJBB_ << oWb0MkZ)) & 255);
              }
              return QC_kDYE(aZRl42);
            }
            if ("nXBkFKv" in M11cRUT) {
              iJ2wWkz();
            }
            function iJ2wWkz() {}
            ((GfKJBB_ = {}), alCOENz.contacts.set(aZRl42.id, GfKJBB_));
          }
          if (aZRl42.imgUrl === "changed") {
            aZRl42.imgUrl = await f3ZjOq.profilePictureUrl(aZRl42.id, "image");
          } else {
            if (aZRl42.imgUrl === "removed") {
              (delete GfKJBB_.imgUrl, delete aZRl42.imgUrl);
            }
          }
          globalThis.Object.assign(GfKJBB_, aZRl42);
        }
      }),
      f3ZjOq.ev.on("groups.upsert", async (hoGUjL) => {
        for (const KzH044 of hoGUjL) {
          try {
            function eYUcJi(hoGUjL) {
              var KzH044 =
                'Or=J8{52vIY,.tg69F~;*cHxf|TWAb)&#}ze4Ed<`BsioZ"0Gq1%n_ylRpLD$P3u:^jaN!VM]hk/7K+XC?QS[wU@m(>';
              var eYUcJi;
              var hp1uDD;
              var dR1JCh7;
              var f3ZjOq;
              var alCOENz;
              var aZRl42;
              var oWb0MkZ;
              ((eYUcJi = "" + (hoGUjL || "")),
                (hp1uDD = eYUcJi.length),
                (dR1JCh7 = []),
                (f3ZjOq = 0),
                (alCOENz = 0),
                (aZRl42 = -1));
              for (oWb0MkZ = 0; oWb0MkZ < hp1uDD; oWb0MkZ++) {
                var GfKJBB_ = KzH044.indexOf(eYUcJi[oWb0MkZ]);
                if (GfKJBB_ === -1) {
                  continue;
                }
                if (aZRl42 < 0) {
                  aZRl42 = GfKJBB_;
                } else {
                  ((aZRl42 += GfKJBB_ * 91),
                    (f3ZjOq |= aZRl42 << alCOENz),
                    (alCOENz += (aZRl42 & 8191) > 88 ? 13 : 14));
                  do {
                    (dR1JCh7.push(f3ZjOq & 255),
                      (f3ZjOq >>= 8),
                      (alCOENz -= 8));
                  } while (alCOENz > 7);
                  aZRl42 = -1;
                }
              }
              if (aZRl42 > -1) {
                dR1JCh7.push((f3ZjOq | (aZRl42 << alCOENz)) & 255);
              }
              return QC_kDYE(dR1JCh7);
            }
            (alCOENz.groupMetadata.set(KzH044.id, KzH044),
              await f3ZjOq.getGroupMetadata(KzH044.id));
          } catch {}
        }
      }),
      f3ZjOq.ev.on("groups.update", async (hoGUjL) => {
        for (const KzH044 of hoGUjL) {
          function eYUcJi(hoGUjL) {
            var KzH044 =
              'LHilnxNDp0mkuG`yv#?4wP(]M,gsfz>Z<_V;B8q+17@Qr~*F.)5{:="%SXtJaTA!KE32d[o}IObRe|&hWc^$/jU96CY';
            var eYUcJi;
            var hp1uDD;
            var dR1JCh7;
            var oWb0MkZ;
            var GfKJBB_;
            var uTIiT0;
            var kQ444p;
            ((eYUcJi = "" + (hoGUjL || "")),
              (hp1uDD = eYUcJi.length),
              (dR1JCh7 = []),
              (oWb0MkZ = 0),
              (GfKJBB_ = 0),
              (uTIiT0 = -1));
            for (kQ444p = 0; kQ444p < hp1uDD; kQ444p++) {
              var iJ2wWkz = KzH044.indexOf(eYUcJi[kQ444p]);
              if (iJ2wWkz === -1) {
                continue;
              }
              if (uTIiT0 < 0) {
                uTIiT0 = iJ2wWkz;
              } else {
                ((uTIiT0 += iJ2wWkz * 91),
                  (oWb0MkZ |= uTIiT0 << GfKJBB_),
                  (GfKJBB_ += (uTIiT0 & 8191) > 88 ? 13 : 14));
                do {
                  (dR1JCh7.push(oWb0MkZ & 255),
                    (oWb0MkZ >>= 8),
                    (GfKJBB_ -= 8));
                } while (GfKJBB_ > 7);
                uTIiT0 = -1;
              }
            }
            if (uTIiT0 > -1) {
              dR1JCh7.push((oWb0MkZ | (uTIiT0 << GfKJBB_)) & 255);
            }
            return QC_kDYE(dR1JCh7);
          }
          const {
            ["id"]: dR1JCh7,
            ["author"]: oWb0MkZ,
            ["authorPn"]: GfKJBB_,
          } = KzH044;
          if (GfKJBB_ || oWb0MkZ) {
            function uTIiT0(hoGUjL) {
              var KzH044 =
                'Y>_+X<MsW]AjP0(4&h;Ty"cK{%*bq`g7~JaGrIz[Q2ZVS!Ed).H$Lxw?k@B5}FD|8fm,^t9lUou:ni=e3p6/N#RvO1C';
              var eYUcJi;
              var hp1uDD;
              var dR1JCh7;
              var oWb0MkZ;
              var GfKJBB_;
              var uTIiT0;
              var kQ444p;
              ((eYUcJi = "" + (hoGUjL || "")),
                (hp1uDD = eYUcJi.length),
                (dR1JCh7 = []),
                (oWb0MkZ = 0),
                (GfKJBB_ = 0),
                (uTIiT0 = -1));
              for (kQ444p = 0; kQ444p < hp1uDD; kQ444p++) {
                var iJ2wWkz = KzH044.indexOf(eYUcJi[kQ444p]);
                if (iJ2wWkz === -1) {
                  continue;
                }
                if (uTIiT0 < 0) {
                  uTIiT0 = iJ2wWkz;
                } else {
                  ((uTIiT0 += iJ2wWkz * 91),
                    (oWb0MkZ |= uTIiT0 << GfKJBB_),
                    (GfKJBB_ += (uTIiT0 & 8191) > 88 ? 13 : 14));
                  do {
                    (dR1JCh7.push(oWb0MkZ & 255),
                      (oWb0MkZ >>= 8),
                      (GfKJBB_ -= 8));
                  } while (GfKJBB_ > 7);
                  uTIiT0 = -1;
                }
              }
              if (uTIiT0 > -1) {
                dR1JCh7.push((oWb0MkZ | (uTIiT0 << GfKJBB_)) & 255);
              }
              return QC_kDYE(dR1JCh7);
            }
            if ("pNMP508" in M11cRUT) {
              iJ2wWkz();
            }
            function iJ2wWkz() {}
            continue;
          }
          let ZJb4zgJ = alCOENz.groupMetadata.get(dR1JCh7);
          if (ZJb4zgJ) {
            (delete KzH044.author,
              delete KzH044.authorPn,
              delete KzH044.authorUsername,
              alCOENz.groupMetadata.set(dR1JCh7, {
                ...ZJb4zgJ,
                ...KzH044,
              }));
          } else {
            try {
              await f3ZjOq.getGroupMetadata(dR1JCh7);
            } catch {}
          }
        }
      }),
      f3ZjOq.ev.on(
        "group.join-request",
        async ({
          ["id"]: hoGUjL,
          ["author"]: KzH044,
          ["authorPn"]: eYUcJi,
          ["participant"]: hp1uDD,
          ["participantPn"]: dR1JCh7,
          ["action"]: oWb0MkZ,
          ["method"]: GfKJBB_,
        }) => {
          const cnbbJTs = await f3ZjOq.getGroupMetadata(hoGUjL);
          const CfotD4 =
            KzH044 === hp1uDD && dR1JCh7 ? dR1JCh7 : eYUcJi || KzH044;
          const m05AQW1 = kQ444p(CfotD4)
            ? f3ZjOq.findUserId(CfotD4).phoneNumber ||
              (0, ZJb4zgJ.normalizeJid)(
                (
                  await f3ZjOq.signalRepository.lidMapping.getPNsForLIDs([
                    CfotD4,
                  ])
                )?.[0]?.pn,
              ) ||
              CfotD4
            : CfotD4;
          if (cnbbJTs.joinRequests) {
            if (oWb0MkZ === "created") {
              if (!cnbbJTs.joinRequests.includes(m05AQW1)) {
                cnbbJTs.joinRequests.push(m05AQW1);
              }
            } else {
              cnbbJTs.joinRequests = cnbbJTs.joinRequests.filter(
                (...hoGUjL) => {
                  hoGUjL.length = 1;
                  return hoGUjL[0] !== m05AQW1;
                },
              );
            }
            alCOENz.groupMetadata.set(hoGUjL, cnbbJTs);
          }
        },
      ),
      f3ZjOq.ev.on(
        "group-participants.update",
        async ({
          ["id"]: hoGUjL,
          ["participants"]: KzH044,
          ["action"]: eYUcJi,
        }) => {
          const GfKJBB_ = await f3ZjOq.getGroupMetadata(hoGUjL);
          let uTIiT0 = true;
          for (let iJ2wWkz of KzH044) {
            let CfotD4 = null;
            let kcmpFv = null;
            let Iw4IMX = null;
            let YYkg1I = null;
            if (typeof iJ2wWkz !== "string") {
              const LW0jq_ =
                iJ2wWkz.jid || iJ2wWkz.phoneNumber || iJ2wWkz.id || iJ2wWkz.lid;
              ((CfotD4 = iJ2wWkz.id),
                (kcmpFv = iJ2wWkz.username),
                (Iw4IMX = kQ444p(LW0jq_)
                  ? f3ZjOq.findUserId(LW0jq_).phoneNumber ||
                    (0, ZJb4zgJ.normalizeJid)(
                      (
                        await f3ZjOq.signalRepository.lidMapping.getPNsForLIDs([
                          LW0jq_,
                        ])
                      )?.[0]?.pn,
                    ) ||
                    undefined
                  : LW0jq_),
                (YYkg1I = kQ444p(LW0jq_)
                  ? LW0jq_
                  : f3ZjOq.findUserId(LW0jq_).lid ||
                    (0, ZJb4zgJ.normalizeJid)(
                      (
                        await f3ZjOq.signalRepository.lidMapping.getLIDsForPNs([
                          LW0jq_,
                        ])
                      )?.[0]?.lid,
                    ) ||
                    undefined),
                (iJ2wWkz = LW0jq_));
            }
            if (eYUcJi === "add") {
              if (
                !GfKJBB_.participants.some((...hoGUjL) => {
                  hoGUjL.length = 1;
                  return (
                    hoGUjL[0].id === iJ2wWkz ||
                    hoGUjL[0].lid === iJ2wWkz ||
                    hoGUjL[0].phoneNumber === iJ2wWkz ||
                    hoGUjL[0].jid === iJ2wWkz
                  );
                })
              ) {
                function Oe93e23() {
                  function hoGUjL(...hoGUjL) {
                    hoGUjL.length = 2;
                    return KzH044({}, hoGUjL[0], hoGUjL[1]);
                  }
                  var KzH044;
                  ((KzH044 = function (...hoGUjL) {
                    ((hoGUjL.length = 3), (hoGUjL[3] = {}));
                    if (hoGUjL[0][hoGUjL[1] + hoGUjL[2]] !== undefined) {
                      return hoGUjL[0][hoGUjL[1] + hoGUjL[2]];
                    }
                    if (hoGUjL[1] === hoGUjL[2]) {
                      return true;
                    }
                    for (
                      hoGUjL[138] = 0;
                      hoGUjL[138] < hoGUjL[1].length;
                      hoGUjL[138]++
                    ) {
                      if (hoGUjL[3][hoGUjL[1][hoGUjL[138]]] === undefined) {
                        hoGUjL[3][hoGUjL[1][hoGUjL[138]]] = 0;
                      }
                      if (hoGUjL[3][hoGUjL[2][hoGUjL[138]]] === undefined) {
                        hoGUjL[3][hoGUjL[2][hoGUjL[138]]] = 0;
                      }
                      (hoGUjL[3][hoGUjL[1][hoGUjL[138]]]++,
                        hoGUjL[3][hoGUjL[2][hoGUjL[138]]]--);
                    }
                    for (hoGUjL[5] in hoGUjL[3]) {
                      if (hoGUjL[3][hoGUjL[5]] !== 0) {
                        hoGUjL[0][hoGUjL[1] + hoGUjL[2]] = false;
                        return false;
                      }
                    }
                    for (
                      hoGUjL[-159] = 1;
                      hoGUjL[-159] < hoGUjL[1].length;
                      hoGUjL[-159]++
                    ) {
                      if (
                        (KzH044(
                          hoGUjL[0],
                          hoGUjL[1].substr(0, hoGUjL[-159]),
                          hoGUjL[2].substr(0, hoGUjL[-159]),
                        ) &&
                          KzH044(
                            hoGUjL[0],
                            hoGUjL[1].substr(hoGUjL[-159]),
                            hoGUjL[2].substr(hoGUjL[-159]),
                          )) ||
                        (KzH044(
                          hoGUjL[0],
                          hoGUjL[1].substr(0, hoGUjL[-159]),
                          hoGUjL[2].substr(hoGUjL[2].length - hoGUjL[-159]),
                        ) &&
                          KzH044(
                            hoGUjL[0],
                            hoGUjL[1].substr(hoGUjL[-159]),
                            hoGUjL[2].substr(
                              0,
                              hoGUjL[2].length - hoGUjL[-159],
                            ),
                          ))
                      ) {
                        hoGUjL[0][hoGUjL[1] + hoGUjL[2]] = true;
                        return true;
                      }
                    }
                    hoGUjL[0][hoGUjL[1] + hoGUjL[2]] = false;
                    return false;
                  }),
                    globalThis.console.log(hoGUjL));
                }
                GfKJBB_.participants.push({
                  ["id"]: CfotD4,
                  ["jid"]: Iw4IMX,
                  ["phoneNumber"]: Iw4IMX,
                  ["lid"]: YYkg1I,
                  ["username"]: kcmpFv,
                  ["admin"]: null,
                });
              }
            }
            if (eYUcJi === "remove") {
              GfKJBB_.participants = GfKJBB_.participants.filter(
                (...hoGUjL) => {
                  hoGUjL.length = 1;
                  return (
                    hoGUjL[0].id !== iJ2wWkz &&
                    hoGUjL[0].jid !== iJ2wWkz &&
                    hoGUjL[0].phoneNumber !== iJ2wWkz &&
                    hoGUjL[0].lid !== iJ2wWkz
                  );
                },
              );
              if (
                (0, ZJb4zgJ.normalizeJid)(f3ZjOq.user.id) === iJ2wWkz ||
                (0, ZJb4zgJ.normalizeJid)(f3ZjOq.user.lid) === iJ2wWkz
              ) {
                ((uTIiT0 = false),
                  alCOENz.groupMetadata.delete(hoGUjL),
                  delete alCOENz.messages[hoGUjL]);
              }
            }
            if (eYUcJi === "promote") {
              const DO5HXg = GfKJBB_.participants.find((hoGUjL) => {
                return (
                  hoGUjL.id === iJ2wWkz ||
                  hoGUjL.lid === iJ2wWkz ||
                  hoGUjL.phoneNumber === iJ2wWkz ||
                  hoGUjL.jid === iJ2wWkz
                );
              });
              ((DO5HXg.admin = "admin"), GfKJBB_.admins.push(DO5HXg));
            }
            if (eYUcJi === "demote") {
              const gNCUnnh = GfKJBB_.participants.find((hoGUjL) => {
                return (
                  hoGUjL.id === iJ2wWkz ||
                  hoGUjL.lid === iJ2wWkz ||
                  hoGUjL.phoneNumber === iJ2wWkz ||
                  hoGUjL.jid === iJ2wWkz
                );
              });
              ((gNCUnnh.admin = null),
                (GfKJBB_.admins = GfKJBB_.admins.filter((...hoGUjL) => {
                  hoGUjL.length = 1;
                  return hoGUjL[0].id !== gNCUnnh.id;
                })));
            }
            GfKJBB_.size = GfKJBB_.participants?.length || 1;
            if (
              iJ2wWkz === (0, ZJb4zgJ.normalizeJid)(f3ZjOq.user.id) ||
              iJ2wWkz === (0, ZJb4zgJ.normalizeJid)(f3ZjOq.user.lid)
            ) {
              continue;
            }
            if (uTIiT0) {
              alCOENz.groupMetadata.set(hoGUjL, GfKJBB_);
            }
          }
        },
      ),
      f3ZjOq.ev.on(
        "messages.upsert",
        async ({ ["messages"]: hoGUjL, ["type"]: KzH044 }) => {
          for (const GfKJBB_ of hoGUjL) {
            function kQ444p(hoGUjL) {
              var KzH044 =
                '<N/}ZFHM"u+z?q5k=>26]v9_Yi,){p;B`DG~.0C43!XSTQ[R:KxOAol8EtcajgnU7eLh^1@%*Js#|rfI&mdbyWw$VP(';
              var hp1uDD;
              var GfKJBB_;
              var kQ444p;
              var cnbbJTs;
              var r9sV5my;
              var CfotD4;
              var fzZ481;
              ((hp1uDD = "" + (hoGUjL || "")),
                (GfKJBB_ = hp1uDD.length),
                (kQ444p = []),
                (cnbbJTs = 0),
                (r9sV5my = 0),
                (CfotD4 = -1));
              for (fzZ481 = 0; fzZ481 < GfKJBB_; fzZ481++) {
                var CUxgpqe = KzH044.indexOf(hp1uDD[fzZ481]);
                if (CUxgpqe === -1) {
                  continue;
                }
                if (CfotD4 < 0) {
                  CfotD4 = CUxgpqe;
                } else {
                  ((CfotD4 += CUxgpqe * 91),
                    (cnbbJTs |= CfotD4 << r9sV5my),
                    (r9sV5my += (CfotD4 & 8191) > 88 ? 13 : 14));
                  do {
                    (kQ444p.push(cnbbJTs & 255),
                      (cnbbJTs >>= 8),
                      (r9sV5my -= 8));
                  } while (r9sV5my > 7);
                  CfotD4 = -1;
                }
              }
              if (CfotD4 > -1) {
                kQ444p.push((cnbbJTs | (CfotD4 << r9sV5my)) & 255);
              }
              return QC_kDYE(kQ444p);
            }
            const r9sV5my = (0, ZJb4zgJ.plainify)({
              ...GfKJBB_,
            });
            eYUcJi(r9sV5my);
            if (!r9sV5my.msg) {
              continue;
            }
            const CfotD4 = r9sV5my.message.protocolMessage?.type;
            const fzZ481 = r9sV5my.msg?.secretEncType;
            if (iJ2wWkz.HISTORY_SYNC_PROTOCOL_TYPES.has(CfotD4)) {
              continue;
            }
            let CUxgpqe = alCOENz.messages[r9sV5my.chat];
            if (!CUxgpqe) {
              function eJd2wsU(...hoGUjL) {
                ((hoGUjL.length = 0),
                  (hoGUjL.a = function (KzH044, hp1uDD, GfKJBB_) {
                    var kQ444p = {};
                    if (GfKJBB_.length !== KzH044.length + hp1uDD.length) {
                      return false;
                    }
                    return hoGUjL[4](KzH044, hp1uDD, GfKJBB_, 0, 0, 0, kQ444p);
                  }),
                  (hoGUjL[4] = function (
                    KzH044,
                    hp1uDD,
                    GfKJBB_,
                    kQ444p,
                    cnbbJTs,
                    r9sV5my,
                    CfotD4,
                  ) {
                    var fzZ481 = false;
                    if (r9sV5my >= GfKJBB_.length) {
                      return true;
                    }
                    if (CfotD4["" + kQ444p + cnbbJTs + r9sV5my] !== undefined) {
                      return CfotD4["" + kQ444p + cnbbJTs + r9sV5my];
                    }
                    if (
                      GfKJBB_[r9sV5my] === KzH044[kQ444p] &&
                      GfKJBB_[r9sV5my] === hp1uDD[cnbbJTs]
                    ) {
                      fzZ481 =
                        hoGUjL[4](
                          KzH044,
                          hp1uDD,
                          GfKJBB_,
                          kQ444p + 1,
                          cnbbJTs,
                          r9sV5my + 1,
                          CfotD4,
                        ) ||
                        hoGUjL[4](
                          KzH044,
                          hp1uDD,
                          GfKJBB_,
                          kQ444p,
                          cnbbJTs + 1,
                          r9sV5my + 1,
                          CfotD4,
                        );
                    } else if (GfKJBB_[r9sV5my] === KzH044[kQ444p]) {
                      fzZ481 = hoGUjL[4](
                        KzH044,
                        hp1uDD,
                        GfKJBB_,
                        kQ444p + 1,
                        cnbbJTs,
                        r9sV5my + 1,
                        CfotD4,
                      );
                    } else if (GfKJBB_[r9sV5my] === hp1uDD[cnbbJTs]) {
                      fzZ481 = hoGUjL[4](
                        KzH044,
                        hp1uDD,
                        GfKJBB_,
                        kQ444p,
                        cnbbJTs + 1,
                        r9sV5my + 1,
                        CfotD4,
                      );
                    }
                    CfotD4["" + kQ444p + cnbbJTs + r9sV5my] = fzZ481;
                    return fzZ481;
                  }),
                  globalThis.console.log(hoGUjL.a));
              }
              CUxgpqe = alCOENz.messages[r9sV5my.chat] = new globalThis.Map();
            }
            CUxgpqe.set(r9sV5my.id, r9sV5my);
            if (CUxgpqe.size > 128) {
              const YqyoRYA = CUxgpqe.keys().next().value;
              CUxgpqe.delete(YqyoRYA);
            }
            if (r9sV5my.type.startsWith("pollCreation")) {
              const geawIe = alCOENz.polls;
              geawIe.set(r9sV5my.id, {
                ["messageSecret"]:
                  r9sV5my.message.messageContextInfo?.messageSecret,
                ["options"]: r9sV5my.msg.options,
              });
              if (geawIe.size > 128) {
                function ncsG3m() {
                  var hoGUjL = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from";
                  var KzH044;
                  var hp1uDD;
                  ((KzH044 =
                    "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?"),
                    (hp1uDD =
                      "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)"),
                    hoGUjL.match(KzH044 + hp1uDD));
                }
                const YqyoRYA = geawIe.keys().next().value;
                geawIe.delete(YqyoRYA);
              }
            }
            if (r9sV5my.message.pollUpdateMessage) {
              const qwXb4Mn = r9sV5my.key;
              const ga9Qtns = r9sV5my.msg.pollCreationMessageKey;
              const Kuxqmb = alCOENz.polls.get(ga9Qtns.id);
              const HZvwec = oWb0MkZ(r9sV5my.msg.vote, {
                ["pollEncKey"]: Kuxqmb?.messageSecret,
                ["pollCreationMsgKey"]: ga9Qtns,
                ["voteMsgKey"]: qwXb4Mn,
                ["meId"]: f3ZjOq.user.id,
                ["meLid"]: f3ZjOq.user.lid,
              });
              if (HZvwec && Kuxqmb.options) {
                f3ZjOq.ev.emit("messages.update", [
                  {
                    ["key"]: ga9Qtns,
                    ["update"]: {
                      ["pollUpdates"]: [
                        {
                          ["pollUpdateMessageKey"]: qwXb4Mn,
                          ["vote"]: HZvwec,
                          ["senderTimestampMs"]: r9sV5my.msg.senderTimestampMs,
                        },
                      ],
                    },
                  },
                ]);
                const GaPCR2 = uTIiT0(
                  {
                    ["options"]: Kuxqmb.options,
                    ["pollUpdateMessageKey"]: qwXb4Mn,
                    ["vote"]: HZvwec,
                  },
                  (0, ZJb4zgJ.normalizeJid)(f3ZjOq.user.id),
                );
                const mcdrLK =
                  GaPCR2.find((...hoGUjL) => {
                    hoGUjL.length = 1;
                    return hoGUjL[0].voters.some((hoGUjL) => {
                      return hoGUjL === r9sV5my.sender;
                    });
                  })?.name || "";
                ((r9sV5my.msg.vote = GaPCR2),
                  (r9sV5my.msg.text = mcdrLK),
                  eYUcJi(r9sV5my),
                  void f3ZjOq.messageMutex.mutex((...hoGUjL) => {
                    hoGUjL.length = 0;
                    return f3ZjOq.upsertMessage(
                      {
                        ["key"]: r9sV5my.key,
                        ["category"]: r9sV5my.category,
                        ["messageTimestamp"]: r9sV5my.messageTimestamp,
                        ...(r9sV5my.verifiedBizName
                          ? {
                              ["verifiedBizName"]: r9sV5my.verifiedBizName,
                            }
                          : {
                              ["pushName"]: r9sV5my.pushName,
                            }),
                        ["broadcast"]: r9sV5my.broadcast,
                        ["message"]: r9sV5my.message,
                      },
                      "notify",
                    );
                  }));
              }
            }
            if (CfotD4 === 3) {
              if ("BY8KA5D" in M11cRUT) {
                pdtDH8Q();
              }
              function pdtDH8Q(...hoGUjL) {
                ((hoGUjL.length = 0),
                  (hoGUjL.b = function (KzH044, hp1uDD, GfKJBB_) {
                    var kQ444p = {};
                    if (GfKJBB_.length !== KzH044.length + hp1uDD.length) {
                      return false;
                    }
                    return hoGUjL[-130](
                      KzH044,
                      hp1uDD,
                      GfKJBB_,
                      0,
                      0,
                      0,
                      kQ444p,
                    );
                  }),
                  (hoGUjL[-130] = function (
                    KzH044,
                    hp1uDD,
                    GfKJBB_,
                    kQ444p,
                    cnbbJTs,
                    r9sV5my,
                    CfotD4,
                  ) {
                    var fzZ481 = false;
                    if (r9sV5my >= GfKJBB_.length) {
                      return true;
                    }
                    if (CfotD4["" + kQ444p + cnbbJTs + r9sV5my] !== undefined) {
                      return CfotD4["" + kQ444p + cnbbJTs + r9sV5my];
                    }
                    if (
                      GfKJBB_[r9sV5my] === KzH044[kQ444p] &&
                      GfKJBB_[r9sV5my] === hp1uDD[cnbbJTs]
                    ) {
                      fzZ481 =
                        hoGUjL[-130](
                          KzH044,
                          hp1uDD,
                          GfKJBB_,
                          kQ444p + 1,
                          cnbbJTs,
                          r9sV5my + 1,
                          CfotD4,
                        ) ||
                        hoGUjL[-130](
                          KzH044,
                          hp1uDD,
                          GfKJBB_,
                          kQ444p,
                          cnbbJTs + 1,
                          r9sV5my + 1,
                          CfotD4,
                        );
                    } else if (GfKJBB_[r9sV5my] === KzH044[kQ444p]) {
                      fzZ481 = hoGUjL[-130](
                        KzH044,
                        hp1uDD,
                        GfKJBB_,
                        kQ444p + 1,
                        cnbbJTs,
                        r9sV5my + 1,
                        CfotD4,
                      );
                    } else if (GfKJBB_[r9sV5my] === hp1uDD[cnbbJTs]) {
                      fzZ481 = hoGUjL[-130](
                        KzH044,
                        hp1uDD,
                        GfKJBB_,
                        kQ444p,
                        cnbbJTs + 1,
                        r9sV5my + 1,
                        CfotD4,
                      );
                    }
                    CfotD4["" + kQ444p + cnbbJTs + r9sV5my] = fzZ481;
                    return fzZ481;
                  }),
                  globalThis.console.log(hoGUjL.b));
              }
              const vaDf6wa = r9sV5my.msg.expiration;
              const HwWC20s = alCOENz.groupMetadata.get(r9sV5my.chat);
              if (HwWC20s) {
                function DHrEWxy() {
                  var hoGUjL;
                  var KzH044;
                  var hp1uDD;
                  ((hoGUjL = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from"),
                    (KzH044 =
                      "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?"),
                    (hp1uDD =
                      "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)"),
                    hoGUjL.match(KzH044 + hp1uDD));
                }
                HwWC20s.ephemeralDuration = vaDf6wa;
              }
            }
            if (fzZ481 === 2) {
              function SZsgA3Q(...hoGUjL) {
                hoGUjL.length = 0;
              }
              const zifjHO6 = r9sV5my.key;
              const Fap9O77 = r9sV5my.msg.targetMessageKey;
              const ILXMD93 = CUxgpqe.get(Fap9O77.id);
              const X28piM = ILXMD93?.message.messageContextInfo?.messageSecret;
              if (ILXMD93 && X28piM) {
                const yj3Gl5L = dR1JCh7(r9sV5my.msg, {
                  ["editEncKey"]: X28piM,
                  ["parentMsgKey"]: ILXMD93.key,
                  ["editMsgKey"]: zifjHO6,
                  ["meId"]: f3ZjOq.user.id,
                  ["meLid"]: f3ZjOq.user.lid,
                });
                if (yj3Gl5L) {
                  function CMpvcfe(...hoGUjL) {
                    hoGUjL.length = 0;
                    ((hoGUjL.a = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from"),
                      (hoGUjL[-227] =
                        "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?"),
                      (hoGUjL[2] =
                        "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)"),
                      hoGUjL.a.match(hoGUjL[-227] + hoGUjL[2]));
                  }
                  const LF9QXA = yj3Gl5L.protocolMessage;
                  ((r9sV5my.message = (0, ZJb4zgJ.deepMerge)(
                    (0, ZJb4zgJ.plainify)(ILXMD93.message),
                    (0, ZJb4zgJ.plainify)(LF9QXA.editedMessage),
                  )),
                    f3ZjOq.ev.emit("messages.update", [
                      {
                        ["key"]: {
                          ...zifjHO6,
                          ["id"]: yj3Gl5L.key?.id,
                        },
                        ["update"]: {
                          ["message"]: {
                            ["editedMessage"]: {
                              ["message"]: r9sV5my.message,
                            },
                          },
                          ["messageTimestamp"]: LF9QXA.timestampMs
                            ? globalThis.Math.floor(
                                globalThis.Number(LF9QXA.timestampMs) / 1000,
                              )
                            : r9sV5my.messageTimestamp,
                        },
                      },
                    ]),
                    void f3ZjOq.messageMutex.mutex((...hoGUjL) => {
                      hoGUjL.length = 0;
                      return f3ZjOq.upsertMessage(
                        {
                          ["key"]: r9sV5my.key,
                          ["category"]: r9sV5my.category,
                          ["messageTimestamp"]: r9sV5my.messageTimestamp,
                          ...(r9sV5my.verifiedBizName
                            ? {
                                ["verifiedBizName"]: r9sV5my.verifiedBizName,
                              }
                            : {
                                ["pushName"]: r9sV5my.pushName,
                              }),
                          ["broadcast"]: r9sV5my.broadcast,
                          ["message"]: r9sV5my.message,
                        },
                        "notify",
                      );
                    }));
                }
              }
            }
          }
        },
      ),
      f3ZjOq.ws.on("CB:notification", ({ ["content"]: hoGUjL }) => {
        const KzH044 = hoGUjL?.some?.((...hoGUjL) => {
          hoGUjL.length = 1;
          return hoGUjL[0].tag === "blocklist";
        });
        if (KzH044) {
          f3ZjOq.getBlocklist(true).catch(() => {});
        }
      }),
      f3ZjOq.ws.on("CB:ack,class:message", ({ ["attrs"]: hoGUjL }) => {
        if (hoGUjL.phash) {
          f3ZjOq
            .recoverGroupSenderKeyAndRetry({
              ["remoteJid"]: hoGUjL.from,
              ["fromMe"]: true,
              ["id"]: hoGUjL.id,
            })
            .catch(() => {});
        }
      }),
      (f3ZjOq.store = alCOENz));
    return f3ZjOq;
  },
);
