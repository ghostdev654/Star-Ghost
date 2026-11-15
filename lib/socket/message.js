"use strict";

var BKkZ38;
var Wi4UFs;
var _nlyYH2;
var cceDhC6;
BKkZ38 = JVZ5CJc();
function JVZ5CJc(...rAPpLC) {
  ((rAPpLC.length = 0),
    (rAPpLC[-142] = [
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
    (rAPpLC[1] = undefined),
    (rAPpLC[106] = []));
  try {
    ((rAPpLC[1] = Object), rAPpLC[106].push("".__proto__.constructor.name));
  } catch (e) {}
  lOqSlW: for (rAPpLC.d = 0; rAPpLC.d < rAPpLC[-142].length; rAPpLC.d++) {
    try {
      rAPpLC[1] = rAPpLC[-142][rAPpLC.d]();
      for (rAPpLC[4] = 0; rAPpLC[4] < rAPpLC[106].length; rAPpLC[4]++) {
        if (typeof rAPpLC[1][rAPpLC[106][rAPpLC[4]]] === "undefined") {
          continue lOqSlW;
        }
      }
      return rAPpLC[1];
    } catch (e) {}
  }
  return rAPpLC[1] || this;
}
function cganYo(...rAPpLC) {
  rAPpLC.length = 1;
  switch (rAPpLC[0]) {
    case "0mRk1o":
      return BKkZ38.CPnTvx_;
    case "qmDMHFE":
      return BKkZ38.Buffer;
    case "Px8jEx":
      return BKkZ38.buildCharMap;
    case "w2E4KP2":
      return BKkZ38.ddEWRQT;
    case "528mAV":
      return BKkZ38.gpzxVT;
    case "hPfGGc":
      return BKkZ38.getStyles;
    case "CEw66Y":
      return BKkZ38.document;
    case "HxbgtT":
      return BKkZ38.window;
    case "rCCwvAT":
      return BKkZ38.Set;
    case "R2Y6gi":
      return BKkZ38.Number;
    case "bQoh_4n":
      return BKkZ38.groupToggleEphemeral;
    case "HUgXRO":
      return BKkZ38.Object;
    case "zqO790":
      return BKkZ38.arG4qM3;
    case "FZKfIXW":
      return BKkZ38.upA3meq;
    case "QdNWxX":
      return BKkZ38.zrev2E;
    case "OSAxIEx":
      return BKkZ38.List;
    case "AowD74":
      return BKkZ38.XdJuMco;
    case "TDp3UTy":
      return BKkZ38.Y61K6Xp;
    case "K0n1ec5":
      return BKkZ38.Error;
    case "hiDEhb":
      return BKkZ38.HXEF9E;
    case "ou2eXq":
      return BKkZ38.cxzq4OZ;
    case "VGG3BXh":
      return BKkZ38.u8Rf64;
    case "dRhkZmC":
      return BKkZ38.uhHa0G;
    case "XBepPvf":
      return BKkZ38.T5AbP4;
    case "XpIVo4":
      return BKkZ38.uM94ub;
    case "KEkFFg":
      return BKkZ38.parseInt;
    case "aR3KBZP":
      return BKkZ38.wSQAgV;
    case "Lq7Whj":
      return BKkZ38.Promise;
    case "OegQfMf":
      return BKkZ38.pdpEnY;
    case "DY8QZCX":
      return BKkZ38.LFw2MWg;
    case "8UM5Og":
      return BKkZ38.xIWqgw8;
    case "jPWm90u":
      return BKkZ38.process;
    case "AXOYUGs":
      return BKkZ38.oty2r3E;
    case "W4eFYYt":
      return BKkZ38.String;
    case "EeRqOly":
      return BKkZ38.Array;
    case "b_qFCDp":
      return BKkZ38.Uint8Array;
    case "ZWknuzS":
      return BKkZ38.JSON;
    case "H7No0v":
      return BKkZ38.bbGph8A;
    case "l1kwAAr":
      return BKkZ38.lPvPOw;
    case "DXNE30j":
      return BKkZ38.Date;
    case "BIce7k":
      return BKkZ38.w2_kagK;
    case "f_VtJQ":
      return BKkZ38.console;
    case "kZbZ28":
      return BKkZ38.GrAngj;
    case "hpDxyXU":
      return BKkZ38.ks0XFj;
    case "vd0DoM":
      return BKkZ38.NqEiRR;
    case "ra2azh":
      return BKkZ38.Math;
    case "5nSDS9":
      return BKkZ38.fCjQ3bI;
    case "EtV6uD":
      return BKkZ38.TextEncoder;
    case "lILvcF":
      return BKkZ38.z2_1SR;
    case "gacrXdb":
      return BKkZ38.UzZl5CZ;
    case "V43FP2r":
      return BKkZ38.o4WHQ4;
    case "O3vKk04":
      return BKkZ38.BPG5dd;
    case "Q0tKiR":
      return BKkZ38.rE8EOBU;
    case "RUQOQ8X":
      return BKkZ38.redacted;
    case "ocKiVU8":
      return BKkZ38.isAttached;
    case "wJ5yJa":
      return BKkZ38.S4vbzk;
    case "jiAMA1D":
      return BKkZ38.yNnzTJ;
  }
}
((exports.__esModule = true),
  (exports.initializeMessage = void 0),
  (Wi4UFs = require("node:crypto")),
  (_nlyYH2 = require("../constant/index.js")),
  (cceDhC6 = require("../utility/functions.js")));
const aQJNCU9 = new (cganYo("EtV6uD"))().encode("star-ghost");
const editMessageSecretCache = new Map();
const readMessageSecret = (message, fallbackMessage) => {
  for (const source of [
    message,
    message?.message,
    fallbackMessage,
    fallbackMessage?.message,
  ]) {
    const secret = source?.messageContextInfo?.messageSecret;
    if (secret instanceof Uint8Array && secret.length === 32) {
      return secret;
    }
  }
  return undefined;
};
const rememberMessageSecret = (message) => {
  const id = message?.key?.id;
  const secret = readMessageSecret(message);
  if (!id || !secret) {
    return;
  }
  editMessageSecretCache.set(id, secret);
  if (editMessageSecretCache.size > 1024) {
    editMessageSecretCache.delete(editMessageSecretCache.keys().next().value);
  }
};
const g9elCb = (0, _nlyYH2.nativeify)((rAPpLC) => {
  const wJgwdj =
    rAPpLC.interactiveMessage?.carouselMessage?.cards?.[0]?.nativeFlowMessage ||
    rAPpLC.interactiveMessage?.nativeFlowMessage;
  const NolGaU = wJgwdj?.buttons?.[0]?.name;
  const Ye2JAg3 = {
    ["tag"]: "quality_control",
    ["attrs"]: {
      ["decision_id"]: (0, Wi4UFs.randomBytes)(20).toString("hex"),
      ["source_type"]: "third_party",
    },
    ["content"]: _nlyYH2.DECISION_SOURCE_CONTENT,
  };
  const e7yIKsH = {
    ["actual_actors"]: "2",
    ["host_storage"]: "2",
    ["privacy_mode_ts"]: cganYo("W4eFYYt")(
      (cganYo("DXNE30j").now() / 1000) | 0,
    ),
  };
  if (NolGaU === "review_and_pay" || NolGaU === "payment_info") {
    e7yIKsH.native_flow_name =
      NolGaU === "review_and_pay" ? "order_details" : NolGaU;
    return {
      ["tag"]: "biz",
      ["attrs"]: e7yIKsH,
      ["content"]: [Ye2JAg3],
    };
  }
  if (NolGaU && _nlyYH2.FLOWS_MAP[NolGaU]) {
    return {
      ["tag"]: "biz",
      ["attrs"]: e7yIKsH,
      ["content"]: [
        {
          ["tag"]: "interactive",
          ["attrs"]: _nlyYH2.NATIVE_FLOW_ATTRIBUTE,
          ["content"]: [
            {
              ["tag"]: "native_flow",
              ["attrs"]: {
                v: "2",
                ["name"]: NolGaU,
              },
            },
          ],
        },
        Ye2JAg3,
      ],
    };
  }
  if (wJgwdj || rAPpLC.buttonsMessage || rAPpLC.templateMessage) {
    return {
      ["tag"]: "biz",
      ["attrs"]: e7yIKsH,
      ["content"]: [_nlyYH2.MIXED_NATIVE_FLOW, Ye2JAg3],
    };
  }
  if (rAPpLC.listMessage) {
    return {
      ["tag"]: "biz",
      ["attrs"]: e7yIKsH,
      ["content"]: [_nlyYH2.LIST_TYPE_CONTENT, Ye2JAg3],
    };
  }
  return {
    ["tag"]: "biz",
    ["attrs"]: e7yIKsH,
    ["content"]: [Ye2JAg3],
  };
});
const HJEME97 = (0, _nlyYH2.nativeify)((rAPpLC) => {
  return (
    !!rAPpLC.buttonsMessage ||
    !!rAPpLC.listMessage ||
    !!rAPpLC.templateMessage ||
    !!rAPpLC.interactiveMessage
  );
});
const Qh5AlnT = (0, _nlyYH2.nativeify)((rAPpLC = 685) => {
  const NolGaU = new (cganYo("b_qFCDp"))(rAPpLC);
  (NolGaU.set(aQJNCU9, 0),
    (0, Wi4UFs.getRandomValues)(NolGaU.subarray(aQJNCU9.length)));
  return NolGaU;
});
const dc6p94 = (0, _nlyYH2.nativeify)((...rAPpLC) => {
  rAPpLC.length = 0;
  const NolGaU = new (cganYo("b_qFCDp"))(64);
  (NolGaU.set(aQJNCU9, 0),
    (0, Wi4UFs.getRandomValues)(NolGaU.subarray(aQJNCU9.length)));
  return NolGaU;
});
const brLoj0 = (0, _nlyYH2.nativeify)(async (rAPpLC, zYWW0U) => {
  let NolGaU = [];
  for (let Ye2JAg3 = 0; Ye2JAg3 < rAPpLC.length; Ye2JAg3++) {
    function Wi4UFs(...rAPpLC) {
      rAPpLC.length = 0;
      function wJgwdj(...rAPpLC) {
        rAPpLC.length = 1;
        const zYWW0U = {};
        for (let _BIcrt of rAPpLC[0].replace(/[^w]/g, "").toLowerCase()) {
          zYWW0U[_BIcrt] = zYWW0U[_BIcrt] + 1 || 1;
        }
        return zYWW0U;
      }
      function NolGaU(rAPpLC, zYWW0U) {
        const NolGaU = cganYo("Px8jEx")(rAPpLC);
        const e7yIKsH = cganYo("Px8jEx")(zYWW0U);
        for (let Wi4UFs in NolGaU) {
          if (NolGaU[Wi4UFs] !== e7yIKsH[Wi4UFs]) {
            return false;
          }
        }
        if (
          cganYo("HUgXRO").keys(NolGaU).length !==
          cganYo("HUgXRO").keys(e7yIKsH).length
        ) {
          return false;
        }
        return true;
      }
      function e7yIKsH(...rAPpLC) {
        rAPpLC.length = 1;
        const zYWW0U = Wi4UFs(rAPpLC[0]);
        return zYWW0U !== Infinity;
      }
      function Wi4UFs(...rAPpLC) {
        rAPpLC.length = 1;
        if (!rAPpLC[0]) {
          return -1;
        }
        const zYWW0U = Wi4UFs(rAPpLC[0].left);
        const _BIcrt = Wi4UFs(rAPpLC[0].right);
        const wJgwdj = cganYo("ra2azh").abs(zYWW0U - _BIcrt);
        if (zYWW0U === Infinity || _BIcrt === Infinity || wJgwdj > 1) {
          return Infinity;
        }
        const NolGaU = cganYo("ra2azh").max(zYWW0U, _BIcrt) + 1;
        return NolGaU;
      }
      cganYo("HxbgtT").__GLOBAL__HELPERS__ = {
        buildCharacterMap: wJgwdj,
        isAnagrams: NolGaU,
        isBalanced: e7yIKsH,
        getHeightBalanced: Wi4UFs,
      };
    }
    (NolGaU.push(rAPpLC[Ye2JAg3]),
      zYWW0U([...NolGaU]),
      await (0, cceDhC6.delay)((0, cceDhC6.randomInteger)(100, 500)));
  }
});
const I5Y1Mem = (exports.initializeMessage = (0, _nlyYH2.nativeify)(
  (...rAPpLC) => {
    rAPpLC.length = 4;
    const {
      ["generateForwardMessageContent"]: wJgwdj,
      ["generateLinkPreviewIfRequired"]: NolGaU,
      ["generateWAMessage"]: Ye2JAg3,
      ["generateWAMessageFromContent"]: e7yIKsH,
      ["generateWAMessageFromRawContent"]: BKkZ38,
      ["getContentType"]: vHgRZBY,
      ["encryptMessageEdit"]: encryptMessageEdit,
      ["getUrlInfo"]: awwgyka,
      ["getWAUploadToServer"]: PCxbp44,
      ["hasValidAlbumMedia"]: JVZ5CJc,
      ["isJidGroup"]: kvmxvM,
      ["isJidNewsletter"]: aQJNCU9,
      ["isLidUser"]: I5Y1Mem,
      ["isPnUser"]: S6S63X,
      ["normalizeMessageContent"]: utuUVRe,
      ["prepareBloksWidget"]: KmEmVE,
      ["prepareMediaForInteractiveMessage"]: Iw3M6S7,
      ["prepareNativeFlowMessageV2"]: bDfRTTb,
      ["prepareStickerPackMessage"]: AdrDi2a,
      ["prepareWAMessageMedia"]: OA7rYsj,
      ["proto"]: BtHoGi,
      ["tokenizeCode"]: BuaPcRp,
      ["WA_DEFAULT_EPHEMERAL"]: CUMzBaj,
    } = rAPpLC[0];
    const {
      ["cachedGroupMetadata"]: AUfqKAV,
      ["emitOwnEvents"]: O9mogJ,
      ["logger"]: nlv0E9I,
      ["mediaCache"]: YPRosV,
      ["options"]: HXAKfz,
    } = rAPpLC[1].ws.config;
    const {
      ["authState"]: Xq4DAK,
      ["createCallLink"]: ywyYTLW,
      ["groupMetadata"]: rdMpzF,
      ["messageMutex"]: gKNjoj,
      ["profilePictureUrl"]: orC_txY,
      ["refreshMediaConn"]: knYdCga,
      ["relayMessage"]: o32ydN,
      ["sendPresenceUpdate"]: uA9D8d1,
      ["upsertMessage"]: GvJ5lZW,
    } = rAPpLC[1];
    const {
      ["linkPreview"]: bFZ7Dp,
      ["messageIdPrefix"]: hwrorqQ,
      ["newsletterAnnotation"]: Zi3OJS,
      ["onFailedProcess"]: qekTmEX,
      ["updatePresence"]: p4Nf8K_,
    } = rAPpLC[3];
    const {
      ["enabled"]: weVMwkH,
      ["fetchTimeoutMs"]: oZUmCOP,
      ["thumbnailWidth"]: jnFkZtR,
      ["uploadHqThumbnail"]: aoCFlz,
    } = bFZ7Dp || {};
    const Fc6wWlk = BtHoGi.MessageAssociation.AssociationType;
    const qjxI5v = BtHoGi.Message.ButtonsMessage.HeaderType;
    const GX1Htu = BtHoGi.Message.ButtonsMessage.Button.Type;
    const n7Np0z =
      BtHoGi.Message.InteractiveMessage.CarouselMessage.CarouselCardType;
    const uzL5KG = BtHoGi.Message.ListMessage.ListType;
    const hDRDTS8 = BtHoGi.Message.OrderMessage.OrderStatus;
    const jbmCCU = BtHoGi.Message.OrderMessage.OrderSurface;
    const EuUqM8 = BtHoGi.Message.PollType;
    const m7bIcP = BtHoGi.Message.ProtocolMessage.Type;
    const PwGMNv = new (cganYo("rCCwvAT"))();
    const mcTrwiQ = (0, cceDhC6.isObject)(Zi3OJS)
      ? [
          {
            ["polygonVertices"]: [
              {
                ["x"]: 60.71664810180664,
                ["y"]: -36.39784622192383,
              },
              {
                ["x"]: -16.710189819335938,
                ["y"]: 49.263675689697266,
              },
              {
                ["x"]: -56.585853576660156,
                ["y"]: 37.85963439941406,
              },
              {
                ["x"]: 20.840980529785156,
                ["y"]: -47.80188751220703,
              },
            ],
            ["newsletter"]: Zi3OJS,
          },
        ]
      : undefined;
    const sRjd79Q = PCxbp44(rAPpLC[1].ws.config, knYdCga);
    const aHaGVbY = {
      ["thumbnailWidth"]: jnFkZtR,
      ["fetchOpts"]: (0, cceDhC6.deepMerge)(
        {
          ["timeout"]: oZUmCOP,
        },
        HXAKfz || {},
      ),
      ["logger"]: nlv0E9I,
      ["uploadImage"]: aoCFlz ? sRjd79Q : undefined,
      ["mediaCache"]: YPRosV,
    };
    const enfLpja = (0, _nlyYH2.nativeify)(
      weVMwkH
        ? (...rAPpLC) => {
            rAPpLC.length = 1;
            return awwgyka(rAPpLC[0], aHaGVbY);
          }
        : () => {
            return null;
          },
    );
    const lBe9pk = (0, _nlyYH2.nativeify)((...zYWW0U) => {
      zYWW0U.length = 1;
      const wJgwdj = rAPpLC[2].groupMetadata.get(zYWW0U[0]);
      if (wJgwdj) {
        return wJgwdj.ephemeralDuration || 0;
      }
      const e7yIKsH = rAPpLC[2].messages[zYWW0U[0]];
      if (e7yIKsH) {
        let PCxbp44;
        for (const JVZ5CJc of e7yIKsH.values()) {
          function kvmxvM(...zYWW0U) {
            zYWW0U.length = 0;
          }
          PCxbp44 = JVZ5CJc;
        }
        return PCxbp44?.expiration;
      }
      return CUMzBaj;
    });
    const editMessageStore = rAPpLC[2];
    const editMessageSocket = rAPpLC[1];
    const resolveEditMessageSecret = async (edit, fallbackRemoteJid) => {
      if (!edit || typeof edit !== "object") {
        return undefined;
      }
      const direct = readMessageSecret(edit);
      if (direct) {
        return direct;
      }
      const key = edit.key && typeof edit.key === "object" ? edit.key : edit;
      if (!key?.id) {
        return undefined;
      }
      const cached = editMessageSecretCache.get(key.id);
      if (cached) {
        return cached;
      }
      const remoteJid = key.remoteJid || fallbackRemoteJid;
      if (remoteJid) {
        try {
          const stored = editMessageStore?.messages?.[remoteJid]?.get?.(key.id);
          const secret = readMessageSecret(stored);
          if (secret) {
            editMessageSecretCache.set(key.id, secret);
            return secret;
          }
        } catch {}
      }
      try {
        const getMessage = editMessageSocket?.ws?.config?.getMessage;
        if (typeof getMessage === "function" && remoteJid) {
          const loaded = await getMessage({
            ["remoteJid"]: remoteJid,
            ["id"]: key.id,
          });
          const secret = readMessageSecret(loaded);
          if (secret) {
            editMessageSecretCache.set(key.id, secret);
            return secret;
          }
        }
      } catch {}
      return undefined;
    };
    const ROc8YnO = (0, _nlyYH2.nativeify)(
      async (rAPpLC, zYWW0U = "composing") => {
        if (!p4Nf8K_) {
          return;
        }
        if (PwGMNv.has(rAPpLC)) {
          return;
        }
        PwGMNv.add(rAPpLC);
        try {
          (await uA9D8d1(zYWW0U, rAPpLC), await (0, cceDhC6.delay)(500));
        } finally {
          PwGMNv.delete(rAPpLC);
        }
      },
    );
    const l28KBN = (0, _nlyYH2.nativeify)(
      async (rAPpLC, zYWW0U, wJgwdj = _nlyYH2.EMPTY_OBJECT) => {
        const vHgRZBY = Xq4DAK.creds.me.id;
        if (cganYo("EeRqOly").isArray(rAPpLC)) {
          const { ["delayMs"]: Iw3M6S7 = 1500 } = wJgwdj;
          const bDfRTTb = new (cganYo("rCCwvAT"))();
          const AdrDi2a = await Ye2JAg3("status@broadcast", zYWW0U, {
            ["jid"]: rAPpLC,
            ["logger"]: nlv0E9I,
            ["userJid"]: vHgRZBY,
            ["upload"]: sRjd79Q,
            ["backgroundColor"]: (0, cceDhC6.randomHexColor)(),
            ["font"]: 0,
            ["mediaCache"]: YPRosV,
            ["options"]: HXAKfz,
            ...wJgwdj,
            ["messageId"]: (0, cceDhC6.generateMessageID)(vHgRZBY, hwrorqQ),
          });
          const OA7rYsj = !!zYWW0U.mention;
          const BtHoGi = !!zYWW0U.closeFriends;
          zYWW0U.contextInfo = (0, cceDhC6.deepMerge)(
            (zYWW0U.contextInfo ??= {}),
            {
              ["featureEligibilities"]: {
                ["canReceiveMultiReact"]: true,
                ["canBeReshared"]: true,
                ["cannotBeRanked"]: false,
              },
            },
          );
          if (zYWW0U !== _nlyYH2.EMPTY_OBJECT) {
            if (OA7rYsj) {
              zYWW0U.contextInfo = (0, cceDhC6.deepMerge)(zYWW0U.contextInfo, {
                ["statusAttributions"]: [
                  {
                    ["type"]: 4,
                  },
                ],
              });
            }
            if (BtHoGi) {
              zYWW0U.contextInfo = (0, cceDhC6.deepMerge)(zYWW0U.contextInfo, {
                ["statusSourceType"]: 4,
                ["statusAttributions"]: [
                  {
                    ["type"]: 10,
                  },
                ],
                ["statusAudienceMetadata"]: {
                  ["audienceType"]: 2,
                  ["listName"]:
                    zYWW0U.closeFriends?.name || _nlyYH2.LIBRARY_NAME,
                  ["listEmoji"]: zYWW0U.closeFriends?.emoji || "✨",
                },
              });
            }
          }
          for (const qekTmEX of rAPpLC) {
            if (kvmxvM(qekTmEX)) {
              function p4Nf8K_(...rAPpLC) {
                rAPpLC.length = 0;
                const zYWW0U = require("big-integer");
                ((rAPpLC[9] = class wJgwdj {
                  static randomPrime(rAPpLC) {
                    const wJgwdj = zYWW0U.one.shiftLeft(rAPpLC - 1);
                    const NolGaU = zYWW0U.one.shiftLeft(rAPpLC).prev();
                    while (true) {
                      let BKkZ38 = zYWW0U.randBetween(wJgwdj, NolGaU);
                      if (BKkZ38.isProbablePrime(256)) {
                        return BKkZ38;
                      }
                    }
                  }
                  static generate(rAPpLC) {
                    const wJgwdj = zYWW0U(65537);
                    let NolGaU;
                    let BKkZ38;
                    let vHgRZBY;
                    do {
                      ((NolGaU = this.randomPrime(rAPpLC / 2)),
                        (BKkZ38 = this.randomPrime(rAPpLC / 2)),
                        (vHgRZBY = zYWW0U.lcm(NolGaU.prev(), BKkZ38.prev())));
                    } while (
                      zYWW0U.gcd(wJgwdj, vHgRZBY).notEquals(1) ||
                      NolGaU.minus(BKkZ38)
                        .abs()
                        .shiftRight(rAPpLC / 2 - 100)
                        .isZero()
                    );
                    return {
                      e: wJgwdj,
                      n: NolGaU.multiply(BKkZ38),
                      d: wJgwdj.modInv(vHgRZBY),
                    };
                  }
                  static encrypt(...rAPpLC) {
                    rAPpLC.length = 3;
                    return zYWW0U(rAPpLC[0]).modPow(rAPpLC[2], rAPpLC[1]);
                  }
                  static decrypt(rAPpLC, wJgwdj, NolGaU) {
                    return zYWW0U(rAPpLC).modPow(wJgwdj, NolGaU);
                  }
                  static encode(rAPpLC) {
                    const wJgwdj = rAPpLC
                      .split("")
                      .map((rAPpLC) => rAPpLC.charCodeAt())
                      .join("");
                    return zYWW0U(wJgwdj);
                  }
                  static decode(rAPpLC) {
                    const zYWW0U = rAPpLC.toString();
                    let wJgwdj = "";
                    for (let NolGaU = 0; NolGaU < zYWW0U.length; NolGaU += 2) {
                      let BKkZ38 = cganYo("R2Y6gi")(zYWW0U.substr(NolGaU, 2));
                      if (BKkZ38 <= 30) {
                        wJgwdj += cganYo("W4eFYYt").fromCharCode(
                          cganYo("R2Y6gi")(zYWW0U.substr(NolGaU, 3)),
                        );
                        NolGaU++;
                      } else {
                        wJgwdj += cganYo("W4eFYYt").fromCharCode(BKkZ38);
                      }
                    }
                    return wJgwdj;
                  }
                }),
                  (module.exports = rAPpLC[9]));
              }
              try {
                const jnFkZtR =
                  (AUfqKAV ? await AUfqKAV(qekTmEX) : null) ||
                  (await rdMpzF(qekTmEX));
                for (const aoCFlz of jnFkZtR.participants) {
                  function n7Np0z() {
                    function rAPpLC(rAPpLC) {
                      var zYWW0U;
                      var wJgwdj;
                      var NolGaU;
                      var BKkZ38;
                      var vHgRZBY;
                      var awwgyka;
                      var PCxbp44;
                      var KmEmVE;
                      var Iw3M6S7;
                      var bDfRTTb;
                      var AdrDi2a;
                      zYWW0U = rAPpLC.length;
                      if (zYWW0U < 2) {
                        return 0;
                      }
                      ((wJgwdj = cganYo("ra2azh").max(...rAPpLC)),
                        (NolGaU = cganYo("ra2azh").min(...rAPpLC)));
                      if (wJgwdj === NolGaU) {
                        return 0;
                      }
                      ((BKkZ38 = cganYo("EeRqOly")(zYWW0U - 1).fill(
                        cganYo("R2Y6gi").MAX_SAFE_INTEGER,
                      )),
                        (vHgRZBY = cganYo("EeRqOly")(zYWW0U - 1).fill(
                          cganYo("R2Y6gi").MIN_SAFE_INTEGER,
                        )),
                        (awwgyka = cganYo("ra2azh").ceil(
                          (wJgwdj - NolGaU) / (zYWW0U - 1),
                        )),
                        (PCxbp44 = 0));
                      for (KmEmVE = 0; KmEmVE < zYWW0U; KmEmVE++) {
                        if (
                          rAPpLC[KmEmVE] === NolGaU ||
                          rAPpLC[KmEmVE] === wJgwdj
                        ) {
                          continue;
                        }
                        ((PCxbp44 = cganYo("ra2azh").floor(
                          (rAPpLC[KmEmVE] - NolGaU) / awwgyka,
                        )),
                          (BKkZ38[PCxbp44] = cganYo("ra2azh").min(
                            BKkZ38[PCxbp44],
                            rAPpLC[KmEmVE],
                          )),
                          (vHgRZBY[PCxbp44] = cganYo("ra2azh").max(
                            vHgRZBY[PCxbp44],
                            rAPpLC[KmEmVE],
                          )));
                      }
                      ((Iw3M6S7 = cganYo("R2Y6gi").MIN_SAFE_INTEGER),
                        (bDfRTTb = NolGaU));
                      for (AdrDi2a = 0; AdrDi2a < zYWW0U - 1; AdrDi2a++) {
                        if (
                          BKkZ38[AdrDi2a] ===
                            cganYo("R2Y6gi").MAX_SAFE_INTEGER &&
                          vHgRZBY[AdrDi2a] === cganYo("R2Y6gi").MIN_SAFE_INTEGER
                        ) {
                          continue;
                        }
                        ((Iw3M6S7 = cganYo("ra2azh").max(
                          Iw3M6S7,
                          BKkZ38[AdrDi2a] - bDfRTTb,
                        )),
                          (bDfRTTb = vHgRZBY[AdrDi2a]));
                      }
                      Iw3M6S7 = cganYo("ra2azh").max(Iw3M6S7, wJgwdj - bDfRTTb);
                      return Iw3M6S7;
                    }
                    cganYo("f_VtJQ").log(rAPpLC);
                  }
                  if (bDfRTTb.has(aoCFlz.id)) {
                    function uzL5KG() {
                      function rAPpLC(rAPpLC) {
                        var zYWW0U = rAPpLC.length;
                        var wJgwdj;
                        var NolGaU;
                        var BKkZ38;
                        var vHgRZBY;
                        ((wJgwdj = []), (NolGaU = 0));
                        for (BKkZ38 = 0; BKkZ38 < zYWW0U; BKkZ38++) {
                          wJgwdj.push(
                            BKkZ38 !== 0 && rAPpLC[BKkZ38] > rAPpLC[BKkZ38 - 1]
                              ? wJgwdj[BKkZ38 - 1] + 1
                              : 1,
                          );
                        }
                        for (vHgRZBY = zYWW0U - 1; vHgRZBY >= 0; vHgRZBY--) {
                          if (
                            vHgRZBY !== zYWW0U - 1 &&
                            rAPpLC[vHgRZBY] > rAPpLC[vHgRZBY + 1]
                          ) {
                            wJgwdj[vHgRZBY] = cganYo("ra2azh").max(
                              wJgwdj[vHgRZBY],
                              wJgwdj[vHgRZBY + 1] + 1,
                            );
                          }
                          NolGaU += wJgwdj[vHgRZBY];
                        }
                        return NolGaU;
                      }
                      cganYo("f_VtJQ").log(rAPpLC);
                    }
                    continue;
                  }
                  bDfRTTb.add(aoCFlz.id);
                }
              } catch (error) {
                nlv0E9I.error(
                  "Error getting metadata group from " + qekTmEX + ": " + error,
                );
              }
            } else if (!bDfRTTb.has(qekTmEX)) {
              bDfRTTb.add(qekTmEX);
            }
          }
          const hDRDTS8 = [
            {
              ["tag"]: "meta",
              ["attrs"]: BtHoGi
                ? {
                    ["status_setting"]: "customlist",
                  }
                : _nlyYH2.EMPTY_OBJECT,
              ["content"]: OA7rYsj
                ? [
                    {
                      ["tag"]: "mentioned_users",
                      ["attrs"]: _nlyYH2.EMPTY_OBJECT,
                      ["content"]: jids.map((...rAPpLC) => {
                        rAPpLC.length = 1;
                        return {
                          ["tag"]: "to",
                          ["attrs"]: {
                            ["jid"]: rAPpLC[0],
                          },
                          ["content"]: undefined,
                        };
                      }),
                    },
                  ]
                : undefined,
            },
          ];
          await o32ydN("status@broadcast", AdrDi2a.message, {
            ["messageId"]: AdrDi2a.key.id,
            ["statusJidList"]: cganYo("EeRqOly").from(bDfRTTb),
            ["additionalNodes"]: hDRDTS8,
          });
          if (O9mogJ) {
            cganYo("jPWm90u").nextTick(() => {
              gKNjoj.mutex(() => {
                return GvJ5lZW(AdrDi2a, "append");
              });
            });
          }
          if (OA7rYsj) {
            for (const qekTmEX of rAPpLC) {
              const ROc8YnO = kvmxvM(qekTmEX);
              const l28KBN = ROc8YnO
                ? "groupStatusMentionMessage"
                : "statusMentionMessage";
              const tHnJ6GS = (0, cceDhC6.generateMessageID)(vHgRZBY, hwrorqQ);
              const MGsoUhW = e7yIKsH(
                qekTmEX,
                {
                  ["messageContextInfo"]: {
                    ["messageSecret"]: (0, Wi4UFs.randomBytes)(32),
                  },
                  [l28KBN]: {
                    ["message"]: {
                      ["protocolMessage"]: {
                        ["key"]: AdrDi2a.key,
                        ["type"]: m7bIcP.STATUS_MENTION_MESSAGE,
                      },
                    },
                  },
                },
                {
                  ["messageId"]: tHnJ6GS,
                  ["userJid"]: vHgRZBY,
                },
              );
              await o32ydN(qekTmEX, MGsoUhW.message, {
                ["messageId"]: tHnJ6GS,
                ["additionalNodes"]: [
                  {
                    ["tag"]: "meta",
                    ["attrs"]: ROc8YnO
                      ? {
                          ["is_group_status_mention"]: "true",
                        }
                      : {
                          ["is_status_mention"]: "true",
                        },
                    ["content"]: undefined,
                  },
                ],
              });
              if (O9mogJ) {
                cganYo("jPWm90u").nextTick(() => {
                  gKNjoj.mutex(() => {
                    return GvJ5lZW(MGsoUhW, "append");
                  });
                });
              }
              await (0, cceDhC6.delay)(Iw3M6S7);
            }
          }
          return AdrDi2a;
        } else if ("disappearingMessagesInChat" in zYWW0U && kvmxvM(rAPpLC)) {
          const { ["disappearingMessagesInChat"]: VteikTt } = zYWW0U;
          const kkinVi =
            typeof VteikTt === "boolean" ? (VteikTt ? CUMzBaj : 0) : VteikTt;
          await cganYo("bQoh_4n")(rAPpLC, kkinVi);
        } else {
          const wsxw0T = aQJNCU9(rAPpLC);
          const VPwrUBL = "edit" in zYWW0U && !!zYWW0U.edit;
          const editMessageSecret =
            VPwrUBL && !wsxw0T
              ? await resolveEditMessageSecret(zYWW0U.edit, rAPpLC)
              : undefined;
          const AdrDi2a = await Ye2JAg3(rAPpLC, zYWW0U, {
            ["jid"]: rAPpLC,
            ["logger"]: nlv0E9I,
            ["userJid"]: vHgRZBY,
            ["getUrlInfo"]: enfLpja,
            ["getProfilePicUrl"]: orC_txY,
            ["getCallLink"]: ywyYTLW,
            ["upload"]: sRjd79Q,
            ["mediaCache"]: YPRosV,
            ["options"]: HXAKfz,
            ...wJgwdj,
            ...(editMessageSecret
              ? {
                  ["editMessageSecret"]: editMessageSecret,
                  ["meLid"]: Xq4DAK.creds.me?.lid,
                }
              : {}),
            ["messageId"]: (0, cceDhC6.generateMessageID)(vHgRZBY, hwrorqQ),
          });
          let editReportingMessage;
          const plainEditMessage =
            VPwrUBL && editMessageSecret ? AdrDi2a.message : undefined;
          if (plainEditMessage?.protocolMessage) {
            const encryptedEditMessage = encryptMessageEdit(
              plainEditMessage.protocolMessage,
              {
                ["editMessageSecret"]: editMessageSecret,
                ["meLid"]: Xq4DAK.creds.me?.lid,
                ["userJid"]: vHgRZBY,
              },
            );
            if (encryptedEditMessage) {
              AdrDi2a.message = encryptedEditMessage;
              editReportingMessage = plainEditMessage;
            }
          }
          if (!VPwrUBL) {
            rememberMessageSecret(AdrDi2a);
          }
          const KSAmacW = "album" in zYWW0U && !!zYWW0U.album;
          const YXvvwjL = "event" in zYWW0U && !!zYWW0U.event;
          const TQDPWE = "delete" in zYWW0U && !!zYWW0U.delete;
          const CrWfFG = "pin" in zYWW0U && !!zYWW0U.pin;
          const OOKisd = "keep" in zYWW0U && !!zYWW0U.keep;
          const vjTzr2y = "poll" in zYWW0U && !!zYWW0U.poll;
          const kZXTYc = "poll" in zYWW0U && !!zYWW0U.poll.pollType;
          const QSNY1t3 =
            ("ai" in zYWW0U && !!zYWW0U.ai) ||
            ("isAi" in zYWW0U && !!zYWW0U.isAi);
          const Gj5QQK = wJgwdj.additionalAttributes || {};
          const hDRDTS8 = wJgwdj.additionalNodes || [];
          if (TQDPWE || OOKisd) {
            if (kvmxvM(zYWW0U.delete?.remoteJid) && !zYWW0U.delete?.fromMe) {
              Gj5QQK.edit = "8";
            } else {
              Gj5QQK.edit = "7";
            }
            if (zYWW0U.delete?.server_id) {
              Gj5QQK.server_id = cganYo("W4eFYYt")(zYWW0U.delete.server_id);
            }
          } else if (VPwrUBL) {
            Gj5QQK.edit = wsxw0T ? "3" : "1";
          } else if (CrWfFG) {
            Gj5QQK.edit = "2";
          } else if (vjTzr2y) {
            if (!wsxw0T && kZXTYc) {
              _nlyYH2.StarGhostError.throw(
                "Quiz are only allowed for newsletter",
                {
                  ["statusCode"]: 400,
                },
              );
            }
            hDRDTS8.push({
              ["tag"]: "meta",
              ["attrs"]: {
                ["polltype"]: kZXTYc ? "quiz_creation" : "creation",
                ["contenttype"]: vjTzr2y && wsxw0T ? "text" : undefined,
              },
              ["content"]: undefined,
            });
          } else if (YXvvwjL) {
            hDRDTS8.push({
              ["tag"]: "meta",
              ["attrs"]: {
                ["event_type"]: "creation",
              },
              ["content"]: undefined,
            });
          } else if (QSNY1t3) {
            if (!S6S63X(rAPpLC) && !I5Y1Mem(rAPpLC)) {
              _nlyYH2.StarGhostError.throw(
                "AI icon on message are only allowed in private chat",
                {
                  ["statusCode"]: 400,
                },
              );
            }
            hDRDTS8.push({
              ["tag"]: "bot",
              ["attrs"]: {
                ["biz_bot"]: "1",
              },
              ["content"]: undefined,
            });
          }
          const brLoj0 = utuUVRe(AdrDi2a.message);
          if (HJEME97(brLoj0)) {
            hDRDTS8.push(g9elCb(brLoj0));
          }
          await o32ydN(rAPpLC, AdrDi2a.message, {
            ["messageId"]: AdrDi2a.key.id,
            ["useCachedGroupMetadata"]: wJgwdj.useCachedGroupMetadata,
            ["statusJidList"]: wJgwdj.statusJidList,
            ["additionalAttributes"]: Gj5QQK,
            ["additionalNodes"]: hDRDTS8,
            ...(editReportingMessage
              ? {
                  ["reportingMessage"]: editReportingMessage,
                }
              : {}),
          });
          if (O9mogJ) {
            cganYo("jPWm90u").nextTick(() => {
              gKNjoj.mutex(() => {
                return GvJ5lZW(AdrDi2a, "append");
              });
            });
          }
          if (KSAmacW) {
            const { ["delayMs"]: Iw3M6S7 = 1500 } = wJgwdj;
            for (const wbzVyld of zYWW0U.album) {
              const _BfDpDw = await Ye2JAg3(rAPpLC, wbzVyld, {
                ["jid"]: rAPpLC,
                ["logger"]: nlv0E9I,
                ["userJid"]: vHgRZBY,
                ["upload"]: sRjd79Q,
                ["mediaCache"]: YPRosV,
                ["options"]: HXAKfz,
                ...wJgwdj,
                ["messageId"]: (0, cceDhC6.generateMessageID)(vHgRZBY, hwrorqQ),
              });
              rememberMessageSecret(_BfDpDw);
              if (!JVZ5CJc(utuUVRe(_BfDpDw.message))) {
                _nlyYH2.StarGhostError.throw("Invalid message type for album", {
                  ["statusCode"]: 400,
                });
              }
              ((_BfDpDw.message.messageContextInfo ||= {}),
                (_BfDpDw.message.messageContextInfo.messageAssociation = {
                  ["parentMessageKey"]: AdrDi2a.key,
                  ["associationType"]: Fc6wWlk.MEDIA_ALBUM,
                }),
                await o32ydN(rAPpLC, _BfDpDw.message, {
                  ["messageId"]: _BfDpDw.key.id,
                  ["useCachedGroupMetadata"]: wJgwdj.useCachedGroupMetadata,
                  ["statusJidList"]: wJgwdj.statusJidList,
                  ["additionalAttributes"]: Gj5QQK,
                  ["additionalNodes"]: hDRDTS8,
                }));
              if (O9mogJ) {
                cganYo("jPWm90u").nextTick(() => {
                  gKNjoj.mutex(() => {
                    return GvJ5lZW(_BfDpDw, "append");
                  });
                });
              }
              await (0, cceDhC6.delay)(Iw3M6S7);
            }
          }
          return AdrDi2a;
        }
      },
    );
    const tHnJ6GS = (0, _nlyYH2.nativeify)(
      async (rAPpLC, zYWW0U, wJgwdj, Ye2JAg3 = _nlyYH2.EMPTY_OBJECT) => {
        ((zYWW0U = (0, cceDhC6.forceToString)(zYWW0U || "")),
          void ROc8YnO(rAPpLC));
        const e7yIKsH = {
          ["text"]: zYWW0U,
        };
        let vHgRZBY = Ye2JAg3.linkPreview;
        if (typeof vHgRZBY === "undefined") {
          vHgRZBY = await NolGaU(zYWW0U, {
            ["getUrlInfo"]: enfLpja,
            ["logger"]: nlv0E9I,
          });
        }
        if (vHgRZBY) {
          ((e7yIKsH.matchedText = vHgRZBY["matched-text"]),
            (e7yIKsH.canonicalUrl =
              vHgRZBY["canonical-url"] ?? vHgRZBY["matched-text"]),
            (e7yIKsH.jpegThumbnail = vHgRZBY.jpegThumbnail),
            (e7yIKsH.description = vHgRZBY.description),
            (e7yIKsH.title = vHgRZBY.title),
            (e7yIKsH.previewType = vHgRZBY.previewType ?? 0));
          const JVZ5CJc = vHgRZBY.highQualityThumbnail;
          if (JVZ5CJc) {
            ((e7yIKsH.thumbnailDirectPath = JVZ5CJc.directPath),
              (e7yIKsH.mediaKey = JVZ5CJc.mediaKey),
              (e7yIKsH.mediaKeyTimestamp = JVZ5CJc.mediaKeyTimestamp),
              (e7yIKsH.thumbnailWidth = JVZ5CJc.width),
              (e7yIKsH.thumbnailHeight = JVZ5CJc.height),
              (e7yIKsH.thumbnailSha256 = JVZ5CJc.fileSha256),
              (e7yIKsH.thumbnailEncSha256 = JVZ5CJc.fileEncSha256));
          }
          const kvmxvM = vHgRZBY.favicon;
          if (kvmxvM) {
            e7yIKsH.faviconMmsMetadata = {
              ["thumbnailDirectPath"]: kvmxvM.directPath,
              ["thumbnailSha256"]: kvmxvM.fileSha256,
              ["thumbnailEncSha256"]: kvmxvM.fileEncSha256,
              ["mediaKey"]: kvmxvM.mediaKey,
              ["mediaKeyTimestamp"]: kvmxvM.mediaKeyTimestamp,
              ["thumbnailHeight"]: kvmxvM.height ?? 64,
              ["thumbnailWidth"]: kvmxvM.width ?? 64,
            };
          }
        }
        if (Ye2JAg3.backgroundColor) {
          e7yIKsH.backgroundArgb = (0, cceDhC6.assertHexColor)(
            Ye2JAg3.backgroundColor,
          );
        }
        if (Ye2JAg3.font) {
          e7yIKsH.font = Ye2JAg3.font;
        }
        const utuUVRe = !!Ye2JAg3.isAi;
        const KmEmVE = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
          utuUVRe,
        );
        const Iw3M6S7 = BKkZ38(
          rAPpLC,
          {
            ["extendedTextMessage"]: e7yIKsH,
          },
          {
            ["mentions"]: (0, cceDhC6.parseMentions)(zYWW0U),
            ["ephemeralExpiration"]: lBe9pk(rAPpLC),
            ["quoted"]: wJgwdj,
            ...Ye2JAg3,
            ["userJid"]: Xq4DAK.creds.me.id,
            ["messageId"]: KmEmVE,
          },
        );
        await o32ydN(rAPpLC, Iw3M6S7.message, {
          ["additionalNodes"]:
            utuUVRe && S6S63X(rAPpLC) ? _nlyYH2.BIZ_BOT_CONTENT : undefined,
          ["useCachedGroupMetadata"]: true,
          ["statusJidList"]: Ye2JAg3.statusJidList,
          ["messageId"]: KmEmVE,
        });
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(Iw3M6S7, "append");
            });
          });
        }
        return Iw3M6S7;
      },
    );
    const MGsoUhW = (0, _nlyYH2.nativeify)(
      async (rAPpLC, zYWW0U, wJgwdj, NolGaU = _nlyYH2.EMPTY_OBJECT) => {
        ((zYWW0U = (0, cceDhC6.forceToString)(zYWW0U || "")),
          void ROc8YnO(rAPpLC));
        const Ye2JAg3 = NolGaU.thumbnailUrl || _nlyYH2.DONATE_URL;
        const e7yIKsH = NolGaU.favicon || _nlyYH2.DEFAULT_THUMBNAIL;
        const vHgRZBY = {
          ["text"]: Ye2JAg3 + " " + zYWW0U,
          ["matchedText"]: Ye2JAg3,
          ["canonicalUrl"]: Ye2JAg3,
          ["title"]: NolGaU.title ?? _nlyYH2.LIBRARY_NAME,
          ["description"]: NolGaU.description,
          ["previewType"]: NolGaU.previewType ?? 0,
          ["jpegThumbnail"]: null,
        };
        const awwgyka = await (0, cceDhC6.getFile)(
          NolGaU.thumbnail || _nlyYH2.DEFAULT_THUMBNAIL,
        );
        if (NolGaU.largeThumbnail) {
          const { ["imageMessage"]: PCxbp44 } = await OA7rYsj(
            {
              ["image"]: {
                ["url"]: awwgyka,
              },
            },
            {
              ["upload"]: sRjd79Q,
              ["mediaTypeOverride"]: "thumbnail-link",
              ["mediaCache"]: YPRosV,
            },
          );
          ((vHgRZBY.thumbnailDirectPath = PCxbp44.directPath),
            (vHgRZBY.mediaKey = PCxbp44.mediaKey),
            (vHgRZBY.mediaKeyTimestamp = PCxbp44.mediaKeyTimestamp),
            (vHgRZBY.thumbnailWidth = PCxbp44.width ?? 720),
            (vHgRZBY.thumbnailHeight = PCxbp44.height ?? 440),
            (vHgRZBY.thumbnailSha256 = PCxbp44.fileSha256),
            (vHgRZBY.thumbnailEncSha256 = PCxbp44.fileEncSha256),
            (vHgRZBY.jpegThumbnail = PCxbp44.jpegThumbnail));
        } else {
          try {
            vHgRZBY.jpegThumbnail = await (0, cceDhC6.resizeImage)(
              awwgyka,
              320,
            );
          } catch {}
        }
        if (e7yIKsH) {
          let JVZ5CJc;
          try {
            JVZ5CJc = await (0, cceDhC6.generateFavicon)(e7yIKsH);
          } catch {
            JVZ5CJc = await (0, cceDhC6.generateFavicon)(
              _nlyYH2.DEFAULT_THUMBNAIL,
            );
          }
          const { ["imageMessage"]: kvmxvM } = await OA7rYsj(
            {
              ["image"]: JVZ5CJc,
            },
            {
              ["upload"]: sRjd79Q,
              ["mediaTypeOverride"]: "thumbnail-link",
              ["mediaCache"]: YPRosV,
            },
          );
          vHgRZBY.faviconMmsMetadata = {
            ["thumbnailDirectPath"]: kvmxvM.directPath,
            ["thumbnailSha256"]: kvmxvM.fileSha256,
            ["thumbnailEncSha256"]: kvmxvM.fileEncSha256,
            ["mediaKey"]: kvmxvM.mediaKey,
            ["mediaKeyTimestamp"]: kvmxvM.mediaKeyTimestamp,
            ["thumbnailHeight"]: kvmxvM.height ?? 64,
            ["thumbnailWidth"]: kvmxvM.width ?? 64,
          };
        }
        if (NolGaU.backgroundColor) {
          vHgRZBY.backgroundArgb = (0, cceDhC6.assertHexColor)(
            NolGaU.backgroundColor,
          );
        }
        if (NolGaU.font) {
          vHgRZBY.font = NolGaU.font;
        }
        const aQJNCU9 = !!NolGaU.isAi;
        const I5Y1Mem = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
          aQJNCU9,
        );
        const utuUVRe = BKkZ38(
          rAPpLC,
          {
            ["extendedTextMessage"]: vHgRZBY,
          },
          {
            ["mentions"]: (0, cceDhC6.parseMentions)(zYWW0U),
            ["ephemeralExpiration"]: lBe9pk(rAPpLC),
            ["quoted"]: wJgwdj,
            ...NolGaU,
            ["userJid"]: Xq4DAK.creds.me.id,
            ["messageId"]: I5Y1Mem,
          },
        );
        await o32ydN(rAPpLC, utuUVRe.message, {
          ["additionalNodes"]:
            aQJNCU9 && S6S63X(rAPpLC) ? _nlyYH2.BIZ_BOT_CONTENT : undefined,
          ["useCachedGroupMetadata"]: true,
          ["statusJidList"]: NolGaU.statusJidList,
          ["messageId"]: I5Y1Mem,
        });
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(utuUVRe, "append");
            });
          });
        }
        return utuUVRe;
      },
    );
    const CVSl0JK = (0, _nlyYH2.nativeify)(
      async (rAPpLC, zYWW0U, wJgwdj, NolGaU = _nlyYH2.EMPTY_OBJECT) => {
        const Ye2JAg3 = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
        );
        const e7yIKsH = BKkZ38(
          rAPpLC,
          {
            ["reactionMessage"]: {
              ["key"]: wJgwdj?.key ?? wJgwdj,
              ["text"]: (0, cceDhC6.forceToString)(zYWW0U || "✨"),
              ["senderTimestampMs"]: cganYo("DXNE30j").now(),
            },
          },
          {
            ["userJid"]: Xq4DAK.creds.me.id,
            ["messageId"]: Ye2JAg3,
          },
        );
        await o32ydN(rAPpLC, e7yIKsH.message, {
          ["useCachedGroupMetadata"]: true,
          ["statusJidList"]: NolGaU.statusJidList,
          ["messageId"]: Ye2JAg3,
        });
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(e7yIKsH, "append");
            });
          });
        }
        return e7yIKsH;
      },
    );
    const VteikTt = (0, _nlyYH2.nativeify)(
      async (
        rAPpLC,
        zYWW0U,
        wJgwdj,
        NolGaU,
        Ye2JAg3 = _nlyYH2.EMPTY_OBJECT,
        e7yIKsH = _nlyYH2.EMPTY_OBJECT,
      ) => {
        wJgwdj = (0, cceDhC6.forceToString)(wJgwdj || "");
        const vHgRZBY = Ye2JAg3.ptt;
        const awwgyka = cganYo("qmDMHFE").isBuffer(zYWW0U);
        if (vHgRZBY) {
          ROc8YnO(rAPpLC, "recording");
        } else {
          ROc8YnO(rAPpLC);
        }
        let PCxbp44;
        if (vHgRZBY || !awwgyka) {
          try {
            PCxbp44 = await (0, cceDhC6.getFile)(zYWW0U);
            if (vHgRZBY) {
              PCxbp44 = await (0, cceDhC6.toPTT)(PCxbp44);
            }
          } catch (error) {
            nlv0E9I.error("❌ " + (error?.message || error) + " : " + error);
            return await tHnJ6GS(rAPpLC, qekTmEX(error), NolGaU);
          }
        }
        const JVZ5CJc =
          !Ye2JAg3.mime &&
          (awwgyka
            ? await (0, cceDhC6.detectFileType)(zYWW0U)
            : await (0, cceDhC6.detectFileType)(PCxbp44));
        const kvmxvM = vHgRZBY
          ? "audio/ogg; codecs=opus"
          : Ye2JAg3.mime || JVZ5CJc?.mime || "text/plain";
        const aQJNCU9 =
          Ye2JAg3.audio || vHgRZBY || (0, cceDhC6.isMimeAudio)(kvmxvM);
        const I5Y1Mem = Ye2JAg3.document
          ? "document"
          : Ye2JAg3.sticker || (0, cceDhC6.isMimeWebP)(kvmxvM)
            ? "sticker"
            : aQJNCU9
              ? "audio"
              : Ye2JAg3.image || (0, cceDhC6.isMimeImage)(kvmxvM)
                ? "image"
                : Ye2JAg3.video || (0, cceDhC6.isMimeVideo)(kvmxvM)
                  ? "video"
                  : "document";
        const utuUVRe = !!Ye2JAg3.isAi;
        const KmEmVE = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
          utuUVRe,
        );
        const Iw3M6S7 = BKkZ38(
          rAPpLC,
          await OA7rYsj(
            {
              ...e7yIKsH,
              [I5Y1Mem]: awwgyka
                ? zYWW0U
                : {
                    ["url"]: PCxbp44,
                  },
              ["mimetype"]: kvmxvM,
              ["caption"]: wJgwdj,
              ["annotations"]: mcTrwiQ,
              ["gifPlayback"]: Ye2JAg3.gif || (0, cceDhC6.isMimeGif)(kvmxvM),
              ["ptv"]: Ye2JAg3.ptv,
              ["ptt"]: vHgRZBY,
            },
            {
              ["jid"]: rAPpLC,
              ["upload"]: sRjd79Q,
              ["mediaCache"]: YPRosV,
            },
          ),
          {
            ["mentions"]: (0, cceDhC6.parseMentions)(wJgwdj),
            ["ephemeralExpiration"]: lBe9pk(rAPpLC),
            ["quoted"]: NolGaU,
            ...Ye2JAg3,
            ["userJid"]: Xq4DAK.creds.me.id,
            ["messageId"]: KmEmVE,
          },
        );
        await o32ydN(rAPpLC, Iw3M6S7.message, {
          ["additionalNodes"]:
            utuUVRe && S6S63X(rAPpLC) ? _nlyYH2.BIZ_BOT_CONTENT : undefined,
          ["useCachedGroupMetadata"]: true,
          ["statusJidList"]: Ye2JAg3.statusJidList,
          ["messageId"]: KmEmVE,
        });
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(Iw3M6S7, "append");
            });
          });
        }
        return Iw3M6S7;
      },
    );
    const kkinVi = (0, _nlyYH2.nativeify)(
      async (
        rAPpLC,
        zYWW0U,
        wJgwdj,
        NolGaU = _nlyYH2.EMPTY_OBJECT,
        Ye2JAg3 = _nlyYH2.EMPTY_OBJECT,
      ) => {
        const e7yIKsH = cganYo("qmDMHFE").isBuffer(zYWW0U);
        ROc8YnO(rAPpLC);
        let vHgRZBY;
        if (!e7yIKsH) {
          try {
            vHgRZBY = await (0, cceDhC6.getFile)(zYWW0U);
          } catch (error) {
            nlv0E9I.error("❌ " + (error?.message || error) + " : " + error);
            return await tHnJ6GS(rAPpLC, qekTmEX(error), wJgwdj);
          }
        }
        const awwgyka = !!NolGaU.isAi;
        const PCxbp44 = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
          awwgyka,
        );
        const JVZ5CJc = BKkZ38(
          rAPpLC,
          await OA7rYsj(
            {
              ...Ye2JAg3,
              ["video"]: e7yIKsH
                ? zYWW0U
                : {
                    ["url"]: vHgRZBY,
                  },
              ["mimetype"]: "video/mp4",
              ["gifPlayback"]: NolGaU.gif,
              ["ptv"]: true,
            },
            {
              ["jid"]: rAPpLC,
              ["upload"]: sRjd79Q,
              ["mediaCache"]: YPRosV,
            },
          ),
          {
            ["ephemeralExpiration"]: lBe9pk(rAPpLC),
            ["quoted"]: wJgwdj,
            ...NolGaU,
            ["userJid"]: Xq4DAK.creds.me.id,
            ["messageId"]: PCxbp44,
          },
        );
        await o32ydN(rAPpLC, JVZ5CJc.message, {
          ["additionalNodes"]:
            awwgyka && S6S63X(rAPpLC) ? _nlyYH2.BIZ_BOT_CONTENT : undefined,
          ["useCachedGroupMetadata"]: true,
          ["statusJidList"]: NolGaU.statusJidList,
          ["messageId"]: PCxbp44,
        });
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(JVZ5CJc, "append");
            });
          });
        }
        return JVZ5CJc;
      },
    );
    const CG8U9FU = (0, _nlyYH2.nativeify)(
      async (rAPpLC, zYWW0U, wJgwdj, NolGaU = _nlyYH2.EMPTY_OBJECT) => {
        ROc8YnO(rAPpLC);
        let Ye2JAg3;
        let e7yIKsH;
        let vHgRZBY;
        try {
          ((Ye2JAg3 = await (0, cceDhC6.createSticker)(zYWW0U, NolGaU)),
            (e7yIKsH = (0, cceDhC6.isWebPBuffer)(Ye2JAg3)
              ? "image/webp"
              : "application/was"),
            (vHgRZBY = NolGaU.isLottie || (0, cceDhC6.isMimeWAS)(e7yIKsH)));
        } catch (error) {
          nlv0E9I.error("❌ " + (error?.message || error) + " : " + error);
          return await tHnJ6GS(rAPpLC, qekTmEX(error), wJgwdj);
        }
        const awwgyka = !!NolGaU.isAi;
        const PCxbp44 = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
          awwgyka,
        );
        const JVZ5CJc = BKkZ38(
          rAPpLC,
          await OA7rYsj(
            {
              ["sticker"]: Ye2JAg3,
              ["mimetype"]: e7yIKsH,
              ["width"]: 512,
              ["height"]: 512,
              ["isAnimated"]: (0, cceDhC6.isAnimatedWebP)(Ye2JAg3),
              ["isLottie"]: vHgRZBY,
              ["isAiSticker"]: NolGaU.isAiSticker || false,
              ["isAvatar"]: NolGaU.isAvatar || false,
              ["premium"]: NolGaU.premium || 0,
              ["emojis"]: "✨",
            },
            {
              ["jid"]: rAPpLC,
              ["upload"]: sRjd79Q,
              ["mediaCache"]: YPRosV,
            },
          ),
          {
            ["ephemeralExpiration"]: lBe9pk(rAPpLC),
            ["quoted"]: wJgwdj,
            ["isLottie"]: vHgRZBY,
            ...NolGaU,
            ["userJid"]: Xq4DAK.creds.me.id,
            ["messageId"]: PCxbp44,
          },
        );
        await o32ydN(rAPpLC, JVZ5CJc.message, {
          ["additionalNodes"]:
            awwgyka && S6S63X(rAPpLC) ? _nlyYH2.BIZ_BOT_CONTENT : undefined,
          ["useCachedGroupMetadata"]: true,
          ["messageId"]: PCxbp44,
        });
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(JVZ5CJc, "append");
            });
          });
        }
        return JVZ5CJc;
      },
    );
    const Fr3KVi = (0, _nlyYH2.nativeify)(
      async (rAPpLC, zYWW0U, wJgwdj, NolGaU = _nlyYH2.EMPTY_OBJECT) => {
        let Ye2JAg3 = NolGaU.caption;
        if (Ye2JAg3) {
          Ye2JAg3 = (0, cceDhC6.forceToString)(Ye2JAg3);
        }
        ROc8YnO(rAPpLC);
        const e7yIKsH = {
          ["cover"]: undefined,
          ["stickers"]: undefined,
          ["caption"]: Ye2JAg3,
          ["name"]: "📦 Sticker Pack",
          ["publisher"]: "GitHub: ghostdev654",
          ["description"]: "🏷️ ghostdev654/Star-Ghost",
        };
        try {
          e7yIKsH.cover = await (0, cceDhC6.fetchAsBuffer)(
            NolGaU?.cover || _nlyYH2.DEFAULT_THUMBNAIL,
          );
        } catch (error) {
          nlv0E9I.error("❌ " + (error?.message || error) + " : " + error);
          return await tHnJ6GS(rAPpLC, qekTmEX(error), wJgwdj);
        }
        if (cganYo("EeRqOly").isArray(zYWW0U) && zYWW0U.length) {
          try {
            e7yIKsH.stickers = await cganYo("Lq7Whj").all(
              zYWW0U.map(async (rAPpLC) => {
                return {
                  ["data"]: await (0, cceDhC6.createSticker)(rAPpLC, NolGaU),
                };
              }),
            );
          } catch (error) {
            nlv0E9I.error("❌ " + (error?.message || error) + " : " + error);
            return await tHnJ6GS(rAPpLC, qekTmEX(error), wJgwdj);
          }
        }
        const vHgRZBY = !!NolGaU.isAi;
        const awwgyka = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
          vHgRZBY,
        );
        const PCxbp44 = BKkZ38(
          rAPpLC,
          await AdrDi2a(e7yIKsH, {
            ["options"]: HXAKfz,
            ["upload"]: sRjd79Q,
            ["mediaCache"]: YPRosV,
          }),
          {
            ["mentions"]: (0, cceDhC6.parseMentions)(Ye2JAg3),
            ["ephemeralExpiration"]: lBe9pk(rAPpLC),
            ["quoted"]: wJgwdj,
            ...NolGaU,
            ["userJid"]: Xq4DAK.creds.me.id,
            ["messageId"]: awwgyka,
          },
        );
        await o32ydN(rAPpLC, PCxbp44.message, {
          ["additionalNodes"]:
            vHgRZBY && S6S63X(rAPpLC) ? _nlyYH2.BIZ_BOT_CONTENT : undefined,
          ["useCachedGroupMetadata"]: true,
          ["messageId"]: awwgyka,
        });
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(PCxbp44, "append");
            });
          });
        }
        return PCxbp44;
      },
    );
    const wsxw0T = (0, _nlyYH2.nativeify)(
      async (rAPpLC, zYWW0U, wJgwdj, NolGaU = _nlyYH2.EMPTY_OBJECT) => {
        ROc8YnO(rAPpLC);
        const Ye2JAg3 = {};
        if (zYWW0U?.length === 1) {
          const e7yIKsH = zYWW0U[0];
          Ye2JAg3.contactMessage = {
            ["displayName"]: _nlyYH2.LIBRARY_NAME,
            ["vcard"]: (0, cceDhC6.buildWhatsAppVCard)({
              ["name"]: e7yIKsH.name,
              ["org"]: e7yIKsH.org,
              ["email"]: e7yIKsH.email,
              ["website"]: e7yIKsH.website,
              ["location"]: e7yIKsH.location,
              ["other"]: e7yIKsH.other,
              ["number"]: e7yIKsH.number,
            }),
          };
        } else {
          Ye2JAg3.contactsArrayMessage = {
            ["displayName"]: _nlyYH2.LIBRARY_NAME,
            ["contacts"]: zYWW0U.map((rAPpLC) => {
              return {
                ["displayName"]: rAPpLC.name,
                ["vcard"]: (0, cceDhC6.buildWhatsAppVCard)({
                  ["name"]: rAPpLC.name,
                  ["org"]: rAPpLC.org,
                  ["email"]: rAPpLC.email,
                  ["website"]: rAPpLC.website,
                  ["location"]: rAPpLC.location,
                  ["other"]: rAPpLC.other,
                  ["number"]: rAPpLC.number,
                }),
              };
            }),
          };
        }
        const vHgRZBY = !!NolGaU.isAi;
        const awwgyka = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
          vHgRZBY,
        );
        const PCxbp44 = BKkZ38(rAPpLC, Ye2JAg3, {
          ["ephemeralExpiration"]: lBe9pk(rAPpLC),
          ["quoted"]: wJgwdj,
          ...NolGaU,
          ["userJid"]: Xq4DAK.creds.me.id,
          ["messageId"]: awwgyka,
        });
        await o32ydN(rAPpLC, PCxbp44.message, {
          ["additionalNodes"]:
            vHgRZBY && S6S63X(rAPpLC) ? _nlyYH2.BIZ_BOT_CONTENT : undefined,
          ["useCachedGroupMetadata"]: true,
          ["messageId"]: awwgyka,
        });
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(PCxbp44, "append");
            });
          });
        }
        return PCxbp44;
      },
    );
    const KSAmacW = (0, _nlyYH2.nativeify)(
      async (rAPpLC, zYWW0U, wJgwdj, NolGaU = _nlyYH2.EMPTY_OBJECT) => {
        let Ye2JAg3 = NolGaU.name || "";
        if (Ye2JAg3) {
          Ye2JAg3 = (0, cceDhC6.forceToString)(Ye2JAg3);
        }
        ROc8YnO(rAPpLC);
        if (!cganYo("EeRqOly").isArray(zYWW0U)) {
          _nlyYH2.StarGhostError.throw("Invalid poll values", {
            ["statusCode"]: 400,
          });
        }
        const e7yIKsH = {
          ["name"]: Ye2JAg3,
          ["options"]: zYWW0U.map((rAPpLC) => {
            return {
              ["optionName"]: rAPpLC,
            };
          }),
          ["pollType"]: EuUqM8.POLL,
          ["selectableOptionsCount"]: NolGaU.selectableCount || 0,
          ["endTime"]: NolGaU.endDate ? NolGaU.endDate : undefined,
          ["hideParticipantName"]: NolGaU.hideVoter ?? false,
          ["allowAddOption"]: NolGaU.canAddOption ?? false,
        };
        if (
          e7yIKsH.selectableOptionsCount < 0 ||
          e7yIKsH.selectableOptionsCount > zYWW0U.length
        ) {
          _nlyYH2.StarGhostError.throw(
            "poll.selectableCount in poll should be >= 0 and <= " +
              zYWW0U.length,
            {
              ["statusCode"]: 400,
            },
          );
        }
        const vHgRZBY = {};
        (NolGaU.toAnnouncementGroup
          ? (vHgRZBY.pollCreationMessageV2 = e7yIKsH)
          : NolGaU.endDate || NolGaU.hideVoter || NolGaU.canAddOption
            ? (vHgRZBY.pollCreationMessageV6 = e7yIKsH)
            : NolGaU.selectableCount === 1
              ? (vHgRZBY.pollCreationMessageV3 = e7yIKsH)
              : (vHgRZBY.pollCreationMessage = e7yIKsH),
          (vHgRZBY.messageContextInfo = {
            ["messageSecret"]: (0, Wi4UFs.randomBytes)(32),
          }));
        const awwgyka = !!NolGaU.isAi;
        const PCxbp44 = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
          awwgyka,
        );
        const JVZ5CJc = BKkZ38(rAPpLC, vHgRZBY, {
          ["mentions"]: (0, cceDhC6.parseMentions)(Ye2JAg3),
          ["ephemeralExpiration"]: lBe9pk(rAPpLC),
          ["quoted"]: wJgwdj,
          ...NolGaU,
          ["userJid"]: Xq4DAK.creds.me.id,
          ["messageId"]: PCxbp44,
        });
        const kvmxvM = {
          ["polltype"]: "creation",
        };
        if (aQJNCU9(rAPpLC)) {
          kvmxvM.contenttype = "text";
        }
        const I5Y1Mem = [
          {
            ["tag"]: "meta",
            ["attrs"]: kvmxvM,
            ["content"]: undefined,
          },
        ];
        if (awwgyka && S6S63X(rAPpLC)) {
          I5Y1Mem.push(..._nlyYH2.BIZ_BOT_CONTENT);
        }
        await o32ydN(rAPpLC, JVZ5CJc.message, {
          ["additionalNodes"]: I5Y1Mem,
          ["useCachedGroupMetadata"]: true,
          ["messageId"]: PCxbp44,
        });
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(JVZ5CJc, "append");
            });
          });
        }
        return JVZ5CJc;
      },
    );
    const YXvvwjL = (0, _nlyYH2.nativeify)(
      async (rAPpLC, zYWW0U, wJgwdj, NolGaU = _nlyYH2.EMPTY_OBJECT) => {
        if (!cganYo("EeRqOly").isArray(zYWW0U)) {
          _nlyYH2.StarGhostError.throw("Invalid quiz values", {
            ["statusCode"]: 400,
          });
        }
        let Ye2JAg3 = NolGaU.name || "";
        if (Ye2JAg3) {
          Ye2JAg3 = (0, cceDhC6.forceToString)(Ye2JAg3);
        }
        const e7yIKsH = {
          ["messageContextInfo"]: {
            ["messageSecret"]: (0, Wi4UFs.randomBytes)(32),
          },
          ["pollCreationMessageV5"]: {
            ["name"]: Ye2JAg3,
            ["correctAnswer"]: {
              ["optionName"]: (NolGaU.correctAnswer ?? zYWW0U[0]).toString(),
            },
            ["options"]: zYWW0U.map((rAPpLC) => {
              return {
                ["optionName"]: rAPpLC,
              };
            }),
            ["selectableOptionsCount"]: 1,
            ["pollType"]: EuUqM8.QUIZ,
          },
        };
        const vHgRZBY = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
        );
        const awwgyka = BKkZ38(rAPpLC, e7yIKsH, {
          ["mentions"]: (0, cceDhC6.parseMentions)(Ye2JAg3),
          ["ephemeralExpiration"]: lBe9pk(rAPpLC),
          ["quoted"]: wJgwdj,
          ...NolGaU,
          ["userJid"]: Xq4DAK.creds.me.id,
          ["messageId"]: vHgRZBY,
        });
        const PCxbp44 = {
          ["polltype"]: "quiz_creation",
        };
        if (aQJNCU9(rAPpLC)) {
          PCxbp44.contenttype = "text";
        }
        await o32ydN(rAPpLC, awwgyka.message, {
          ["additionalNodes"]: [
            {
              ["tag"]: "meta",
              ["attrs"]: PCxbp44,
              ["content"]: undefined,
            },
          ],
          ["useCachedGroupMetadata"]: true,
          ["messageId"]: vHgRZBY,
        });
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(awwgyka, "append");
            });
          });
        }
        return awwgyka;
      },
    );
    const TQDPWE = (0, _nlyYH2.nativeify)(
      async (
        rAPpLC,
        zYWW0U = _nlyYH2.LIBRARY_NAME,
        wJgwdj,
        NolGaU,
        Ye2JAg3 = _nlyYH2.EMPTY_OBJECT,
      ) => {
        ROc8YnO(rAPpLC);
        if (!cganYo("EeRqOly").isArray(wJgwdj)) {
          _nlyYH2.StarGhostError.throw("Invalid poll result values", {
            ["statusCode"]: 400,
          });
        }
        let e7yIKsH = zYWW0U || "";
        if (e7yIKsH) {
          e7yIKsH = (0, cceDhC6.forceToString)(e7yIKsH);
        }
        const vHgRZBY = !!Ye2JAg3.isAi;
        const awwgyka = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
          vHgRZBY,
        );
        const PCxbp44 = BKkZ38(
          rAPpLC,
          {
            ["pollResultSnapshotMessage"]: {
              ["name"]: e7yIKsH,
              ["pollVotes"]: wJgwdj.map((rAPpLC) => {
                return {
                  ["optionName"]: rAPpLC.name,
                  ["optionVoteCount"]: cganYo("KEkFFg")(rAPpLC.voteCount),
                };
              }),
              ["pollType"]: EuUqM8.POLL,
            },
          },
          {
            ["mentions"]: (0, cceDhC6.parseMentions)(e7yIKsH),
            ["ephemeralExpiration"]: lBe9pk(rAPpLC),
            ["quoted"]: NolGaU,
            ...Ye2JAg3,
            ["userJid"]: Xq4DAK.creds.me.id,
            ["messageId"]: awwgyka,
          },
        );
        await o32ydN(rAPpLC, PCxbp44.message, {
          ["additionalNodes"]:
            vHgRZBY && S6S63X(rAPpLC) ? _nlyYH2.BIZ_BOT_CONTENT : undefined,
          ["useCachedGroupMetadata"]: true,
          ["messageId"]: awwgyka,
        });
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(PCxbp44, "append");
            });
          });
        }
        return PCxbp44;
      },
    );
    const VPwrUBL = (0, _nlyYH2.nativeify)(
      async (
        rAPpLC,
        zYWW0U = _nlyYH2.LIBRARY_NAME,
        wJgwdj,
        NolGaU,
        Ye2JAg3 = _nlyYH2.EMPTY_OBJECT,
      ) => {
        ROc8YnO(rAPpLC);
        if (!cganYo("EeRqOly").isArray(wJgwdj)) {
          _nlyYH2.StarGhostError.throw("Invalid quiz result values", {
            ["statusCode"]: 400,
          });
        }
        let e7yIKsH = zYWW0U || "";
        if (e7yIKsH) {
          e7yIKsH = (0, cceDhC6.forceToString)(e7yIKsH);
        }
        const vHgRZBY = !!Ye2JAg3.isAi;
        const awwgyka = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
          vHgRZBY,
        );
        const PCxbp44 = BKkZ38(
          rAPpLC,
          {
            ["pollResultSnapshotMessageV3"]: {
              ["name"]: e7yIKsH,
              ["pollVotes"]: wJgwdj.map((rAPpLC) => {
                return {
                  ["optionName"]: rAPpLC.name,
                  ["optionVoteCount"]: cganYo("KEkFFg")(rAPpLC.voteCount),
                };
              }),
              ["pollType"]: EuUqM8.QUIZ,
            },
          },
          {
            ["mentions"]: (0, cceDhC6.parseMentions)(e7yIKsH),
            ["ephemeralExpiration"]: lBe9pk(rAPpLC),
            ["quoted"]: NolGaU,
            ...Ye2JAg3,
            ["userJid"]: Xq4DAK.creds.me.id,
            ["messageId"]: awwgyka,
          },
        );
        await o32ydN(rAPpLC, PCxbp44.message, {
          ["additionalNodes"]:
            vHgRZBY && S6S63X(rAPpLC) ? _nlyYH2.BIZ_BOT_CONTENT : undefined,
          ["useCachedGroupMetadata"]: true,
          ["messageId"]: awwgyka,
        });
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(PCxbp44, "append");
            });
          });
        }
        return PCxbp44;
      },
    );
    const CrWfFG = (0, _nlyYH2.nativeify)(
      async (rAPpLC, zYWW0U, wJgwdj, NolGaU = _nlyYH2.EMPTY_OBJECT) => {
        ROc8YnO(rAPpLC);
        const Ye2JAg3 = [];
        let e7yIKsH = 0;
        let vHgRZBY = 0;
        for (const awwgyka of zYWW0U) {
          const PCxbp44 = (0, cceDhC6.forceToString)(
            awwgyka.caption || awwgyka.text || "",
          );
          const JVZ5CJc = awwgyka.media || awwgyka.buffer;
          const kvmxvM = cganYo("qmDMHFE").isBuffer(JVZ5CJc);
          let aQJNCU9;
          if (!kvmxvM) {
            try {
              aQJNCU9 = await (0, cceDhC6.getFile)(JVZ5CJc);
            } catch (Iw3M6S7) {
              nlv0E9I.error(
                "❌ " + (Iw3M6S7?.message || Iw3M6S7) + " : " + Iw3M6S7,
              );
              return await tHnJ6GS(rAPpLC, qekTmEX(Iw3M6S7), wJgwdj);
            }
          }
          const I5Y1Mem =
            !awwgyka.mime &&
            (kvmxvM
              ? await (0, cceDhC6.detectFileType)(JVZ5CJc)
              : await (0, cceDhC6.detectFileType)(aQJNCU9));
          const utuUVRe = awwgyka.mime || I5Y1Mem?.mime;
          const KmEmVE = (0, cceDhC6.isMimeImage)(utuUVRe)
            ? "image"
            : (0, cceDhC6.isMimeVideo)(utuUVRe)
              ? "video"
              : null;
          if (KmEmVE === "image") {
            e7yIKsH++;
          } else if (KmEmVE === "video") {
            vHgRZBY++;
          } else {
            const Iw3M6S7 = "❌ Invalid media type for album";
            nlv0E9I.error("❌ " + Iw3M6S7);
            return await tHnJ6GS(rAPpLC, qekTmEX(Iw3M6S7), wJgwdj);
          }
          Ye2JAg3.push({
            ["contentData"]: {
              [KmEmVE]: kvmxvM
                ? JVZ5CJc
                : {
                    ["url"]: aQJNCU9,
                  },
              ["mimetype"]: utuUVRe,
              ["caption"]: PCxbp44,
              ["annotations"]: mcTrwiQ,
              ["gifPlayback"]: awwgyka.gif || (0, cceDhC6.isMimeGif)(utuUVRe),
            },
            ["optionData"]: {
              ["mentions"]: (0, cceDhC6.parseMentions)(PCxbp44),
              ...NolGaU,
            },
          });
        }
        if (vHgRZBY + e7yIKsH < 2) {
          _nlyYH2.StarGhostError.throw(
            "Minimum provide 2 media to upload album message",
            {
              ["statusCode"]: 400,
            },
          );
        }
        const bDfRTTb = !!NolGaU.isAi;
        const AdrDi2a = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
          bDfRTTb,
        );
        const BtHoGi = BKkZ38(
          rAPpLC,
          {
            ["albumMessage"]: {
              ["expectedImageCount"]: e7yIKsH,
              ["expectedVideoCount"]: vHgRZBY,
            },
          },
          {
            ["ephemeralExpiration"]: lBe9pk(rAPpLC),
            ["quoted"]: wJgwdj,
            ...NolGaU,
            ["userJid"]: Xq4DAK.creds.me.id,
            ["messageId"]: AdrDi2a,
          },
        );
        await o32ydN(rAPpLC, BtHoGi.message, {
          ["additionalNodes"]:
            bDfRTTb && S6S63X(rAPpLC) ? _nlyYH2.BIZ_BOT_CONTENT : undefined,
          ["useCachedGroupMetadata"]: true,
          ["messageId"]: AdrDi2a,
        });
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(BtHoGi, "append");
            });
          });
        }
        for (const BuaPcRp of Ye2JAg3) {
          const AdrDi2a = (0, cceDhC6.generateMessageID)(
            Xq4DAK.creds.me.id,
            hwrorqQ,
            bDfRTTb,
          );
          const CUMzBaj = BKkZ38(
            rAPpLC,
            await OA7rYsj(BuaPcRp.contentData, {
              ["jid"]: rAPpLC,
              ["upload"]: sRjd79Q,
              ["mediaCache"]: YPRosV,
            }),
            {
              ["ephemeralExpiration"]: lBe9pk(rAPpLC),
              ["quoted"]: wJgwdj,
              ...BuaPcRp.optionData,
              ["userJid"]: Xq4DAK.creds.me.id,
              ["messageId"]: AdrDi2a,
            },
          );
          ((CUMzBaj.message.messageContextInfo.messageAssociation = {
            ["associationType"]: Fc6wWlk.MEDIA_ALBUM,
            ["parentMessageKey"]: BtHoGi.key,
          }),
            await o32ydN(rAPpLC, CUMzBaj.message, {
              ["additionalNodes"]:
                bDfRTTb && S6S63X(rAPpLC) ? _nlyYH2.BIZ_BOT_CONTENT : undefined,
              ["useCachedGroupMetadata"]: true,
              ["messageId"]: AdrDi2a,
            }));
          if (O9mogJ) {
            cganYo("jPWm90u").nextTick(() => {
              gKNjoj.mutex(() => {
                return GvJ5lZW(CUMzBaj, "append");
              });
            });
          }
          await (0, cceDhC6.delay)(1500);
        }
        return BtHoGi;
      },
    );
    const OOKisd = (0, _nlyYH2.nativeify)(
      async (rAPpLC, zYWW0U, wJgwdj, NolGaU = _nlyYH2.EMPTY_OBJECT) => {
        ROc8YnO(rAPpLC);
        const Ye2JAg3 = NolGaU.title || NolGaU.titleText;
        const e7yIKsH = (0, cceDhC6.forceToString)(
          NolGaU.text ||
            NolGaU.caption ||
            NolGaU.body ||
            NolGaU.contentText ||
            "",
        );
        const vHgRZBY = NolGaU.footer || NolGaU.footerText;
        const awwgyka = {
          ["header"]: {
            ["hasMediaAttachment"]: false,
          },
          ["body"]: {
            ["text"]: e7yIKsH,
          },
          ["nativeFlowMessage"]: {
            ["buttons"]: [],
            ["messageParamsJson"]: {},
            ["messageVersion"]: 1,
          },
        };
        if (Ye2JAg3) {
          ((awwgyka.header.title = (0, cceDhC6.forceToString)(Ye2JAg3)),
            (awwgyka.header.subtitle = (0, cceDhC6.forceToString)(
              NolGaU.subtitle || "",
            )));
        }
        if (NolGaU.components) {
          awwgyka.bloksWidget = KmEmVE(NolGaU);
        }
        if (
          NolGaU.media ||
          NolGaU.buffer ||
          NolGaU.image ||
          NolGaU.video ||
          NolGaU.document ||
          NolGaU.product ||
          NolGaU.location
        ) {
          try {
            (cganYo("HUgXRO").assign(
              awwgyka.header,
              await Iw3M6S7(NolGaU, {
                ["jid"]: rAPpLC,
                ["upload"]: sRjd79Q,
                ["mediaCache"]: YPRosV,
              }),
            ),
              (awwgyka.header.hasMediaAttachment = true));
          } catch (error) {
            nlv0E9I.error("❌ " + (error?.message || error) + " : " + error);
            return await tHnJ6GS(rAPpLC, qekTmEX(error), wJgwdj);
          }
        }
        if (vHgRZBY) {
          awwgyka.footer = {
            ["text"]: (0, cceDhC6.forceToString)(vHgRZBY),
          };
        }
        if (NolGaU.audioFooter) {
          const PCxbp44 = NolGaU.audioFooter;
          const JVZ5CJc = NolGaU.ptt;
          const kvmxvM = cganYo("qmDMHFE").isBuffer(PCxbp44);
          let aQJNCU9;
          if (JVZ5CJc || !kvmxvM) {
            try {
              aQJNCU9 = await (0, cceDhC6.getFile)(PCxbp44);
              if (JVZ5CJc) {
                aQJNCU9 = await (0, cceDhC6.toPTT)(aQJNCU9);
              }
            } catch (error) {
              nlv0E9I.error("❌ " + (error?.message || error) + " : " + error);
              return await tHnJ6GS(rAPpLC, qekTmEX(error), wJgwdj);
            }
          }
          const I5Y1Mem =
            !NolGaU.audioMime &&
            (kvmxvM
              ? await (0, cceDhC6.detectFileType)(PCxbp44)
              : await (0, cceDhC6.detectFileType)(aQJNCU9));
          const AdrDi2a = JVZ5CJc
            ? "audio/ogg; codecs=opus"
            : NolGaU.audioMime || I5Y1Mem?.mime;
          if (!(0, cceDhC6.isMimeAudio)(AdrDi2a)) {
            _nlyYH2.StarGhostError.throw("Invalid media type for footer", {
              ["statusCode"]: 400,
            });
          }
          cganYo("HUgXRO").assign(
            (awwgyka.footer ??= {
              ["hasMediaAttachment"]: true,
            }),
            await OA7rYsj(
              {
                ["audio"]: {
                  ["url"]: aQJNCU9,
                },
                ["mimetype"]: AdrDi2a,
                ["ptt"]: JVZ5CJc,
              },
              {
                ["jid"]: rAPpLC,
                ["upload"]: sRjd79Q,
                ["mediaCache"]: YPRosV,
              },
            ),
          );
        }
        bDfRTTb(zYWW0U, awwgyka.nativeFlowMessage, NolGaU);
        const BtHoGi = !!NolGaU.isAi;
        const BuaPcRp = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
          BtHoGi,
        );
        const CUMzBaj = BKkZ38(
          rAPpLC,
          {
            ["interactiveMessage"]: awwgyka,
          },
          {
            ["mentions"]: (0, cceDhC6.parseMentions)(
              Ye2JAg3 + e7yIKsH + vHgRZBY,
            ),
            ["ephemeralExpiration"]: lBe9pk(rAPpLC),
            ["quoted"]: wJgwdj,
            ...NolGaU,
            ["userJid"]: Xq4DAK.creds.me.id,
            ["messageId"]: BuaPcRp,
          },
        );
        const AUfqKAV = [g9elCb(utuUVRe(CUMzBaj.message))];
        if (BtHoGi && S6S63X(rAPpLC)) {
          AUfqKAV.push(..._nlyYH2.BIZ_BOT_CONTENT);
        }
        await o32ydN(rAPpLC, CUMzBaj.message, {
          ["additionalNodes"]: AUfqKAV,
          ["useCachedGroupMetadata"]: true,
          ["messageId"]: BuaPcRp,
        });
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(CUMzBaj, "append");
            });
          });
        }
        return CUMzBaj;
      },
    );
    const vjTzr2y = (0, _nlyYH2.nativeify)(
      async (rAPpLC, zYWW0U, wJgwdj, NolGaU = _nlyYH2.EMPTY_OBJECT) => {
        ROc8YnO(rAPpLC);
        const Ye2JAg3 = NolGaU.title || NolGaU.titleText;
        const e7yIKsH = (0, cceDhC6.forceToString)(
          NolGaU.text ||
            NolGaU.caption ||
            NolGaU.body ||
            NolGaU.contentText ||
            "",
        );
        const vHgRZBY = NolGaU.footer || NolGaU.footerText;
        const awwgyka = {
          ["header"]: {
            ["hasMediaAttachment"]: false,
          },
          ["body"]: {
            ["text"]: e7yIKsH,
          },
          ["carouselMessage"]: {
            ["cards"]: [],
            ["carouselCardType"]: n7Np0z.UNKNOWN,
            ["messageVersion"]: 1,
          },
        };
        if (Ye2JAg3) {
          ((awwgyka.header.title = (0, cceDhC6.forceToString)(Ye2JAg3)),
            (awwgyka.header.subtitle = (0, cceDhC6.forceToString)(
              NolGaU.subtitle || "",
            )));
        }
        if (vHgRZBY) {
          awwgyka.footer = {
            ["text"]: (0, cceDhC6.forceToString)(vHgRZBY),
          };
        }
        if (NolGaU.audioFooter) {
          const PCxbp44 = NolGaU.audioFooter;
          const JVZ5CJc = NolGaU.ptt;
          const kvmxvM = cganYo("qmDMHFE").isBuffer(PCxbp44);
          let aQJNCU9;
          if (JVZ5CJc || !kvmxvM) {
            try {
              aQJNCU9 = await (0, cceDhC6.getFile)(PCxbp44);
              if (JVZ5CJc) {
                aQJNCU9 = await (0, cceDhC6.toPTT)(aQJNCU9);
              }
            } catch (error) {
              nlv0E9I.error("❌ " + (error?.message || error) + " : " + error);
              return await tHnJ6GS(rAPpLC, qekTmEX(error), wJgwdj);
            }
          }
          const I5Y1Mem =
            !NolGaU.audioMime &&
            (kvmxvM
              ? await (0, cceDhC6.detectFileType)(PCxbp44)
              : await (0, cceDhC6.detectFileType)(aQJNCU9));
          const AdrDi2a = JVZ5CJc
            ? "audio/ogg; codecs=opus"
            : NolGaU.audioMime || I5Y1Mem?.mime;
          if (!(0, cceDhC6.isMimeAudio)(AdrDi2a)) {
            _nlyYH2.StarGhostError.throw("Invalid media type for footer", {
              ["statusCode"]: 400,
            });
          }
          cganYo("HUgXRO").assign(
            (awwgyka.footer ??= {
              ["hasMediaAttachment"]: true,
            }),
            await OA7rYsj(
              {
                ["audio"]: {
                  ["url"]: aQJNCU9,
                },
                ["mimetype"]: AdrDi2a,
                ["ptt"]: JVZ5CJc,
              },
              {
                ["jid"]: rAPpLC,
                ["upload"]: sRjd79Q,
                ["mediaCache"]: YPRosV,
              },
            ),
          );
        }
        const BtHoGi = awwgyka.carouselMessage.cards;
        if (cganYo("EeRqOly").isArray(zYWW0U) && zYWW0U.length) {
          for (const BuaPcRp of zYWW0U) {
            if (!(0, cceDhC6.isObject)(BuaPcRp)) {
              continue;
            }
            const CUMzBaj = BuaPcRp.title || BuaPcRp.titleText;
            const AUfqKAV = (0, cceDhC6.forceToString)(
              BuaPcRp.text ||
                BuaPcRp.caption ||
                BuaPcRp.body ||
                BuaPcRp.contentText ||
                "",
            );
            const HXAKfz = BuaPcRp.footer || BuaPcRp.footerText;
            const ywyYTLW = {
              ["header"]: {
                ["hasMediaAttachment"]: false,
              },
              ["body"]: {
                ["text"]: AUfqKAV,
              },
              ["nativeFlowMessage"]: {
                ["buttons"]: [],
                ["messageParamsJson"]: {},
                ["messageVersion"]: 1,
              },
              ["contextInfo"]: {},
            };
            if (CUMzBaj) {
              ((ywyYTLW.header.title = (0, cceDhC6.forceToString)(CUMzBaj)),
                (ywyYTLW.header.subtitle = (0, cceDhC6.forceToString)(
                  BuaPcRp.subtitle || "",
                )));
            }
            if (BuaPcRp.components) {
              BuaPcRp.bloksWidget = KmEmVE(BuaPcRp);
            }
            if (
              BuaPcRp.media ||
              BuaPcRp.buffer ||
              BuaPcRp.image ||
              BuaPcRp.video ||
              BuaPcRp.product
            ) {
              try {
                (cganYo("HUgXRO").assign(
                  ywyYTLW.header,
                  await Iw3M6S7(BuaPcRp, {
                    ["jid"]: rAPpLC,
                    ["upload"]: sRjd79Q,
                    ["mediaCache"]: YPRosV,
                  }),
                ),
                  (ywyYTLW.header.hasMediaAttachment = true));
              } catch (error) {
                nlv0E9I.error(
                  "❌ " + (error?.message || error) + " : " + error,
                );
                return await tHnJ6GS(rAPpLC, qekTmEX(error), wJgwdj);
              }
            } else {
              continue;
            }
            if (HXAKfz) {
              ywyYTLW.footer = {
                ["text"]: (0, cceDhC6.forceToString)(HXAKfz),
              };
            }
            if (BuaPcRp.audioFooter) {
              const PCxbp44 = BuaPcRp.audioFooter;
              const JVZ5CJc = BuaPcRp.ptt;
              const kvmxvM = cganYo("qmDMHFE").isBuffer(PCxbp44);
              let aQJNCU9;
              if (JVZ5CJc || !kvmxvM) {
                try {
                  aQJNCU9 = await (0, cceDhC6.getFile)(PCxbp44);
                  if (JVZ5CJc) {
                    aQJNCU9 = await (0, cceDhC6.toPTT)(aQJNCU9);
                  }
                } catch (error) {
                  nlv0E9I.error(
                    "❌ " + (error?.message || error) + " : " + error,
                  );
                  return await tHnJ6GS(rAPpLC, qekTmEX(error), wJgwdj);
                }
              }
              const I5Y1Mem =
                !BuaPcRp.audioMime &&
                (kvmxvM
                  ? await (0, cceDhC6.detectFileType)(PCxbp44)
                  : await (0, cceDhC6.detectFileType)(aQJNCU9));
              const AdrDi2a = JVZ5CJc
                ? "audio/ogg; codecs=opus"
                : BuaPcRp.audioMime || I5Y1Mem?.mime;
              if (!(0, cceDhC6.isMimeAudio)(AdrDi2a)) {
                _nlyYH2.StarGhostError.throw("Invalid media type for footer", {
                  ["statusCode"]: 400,
                });
              }
              cganYo("HUgXRO").assign(
                (ywyYTLW.footer ??= {
                  ["hasMediaAttachment"]: true,
                }),
                await OA7rYsj(
                  {
                    ["audio"]: {
                      ["url"]: aQJNCU9,
                    },
                    ["mimetype"]: AdrDi2a,
                    ["ptt"]: JVZ5CJc,
                  },
                  {
                    ["jid"]: rAPpLC,
                    ["upload"]: sRjd79Q,
                    ["mediaCache"]: YPRosV,
                  },
                ),
              );
            }
            (bDfRTTb(
              BuaPcRp.buttons || BuaPcRp.nativeFlow,
              ywyYTLW.nativeFlowMessage,
              BuaPcRp,
            ),
              (ywyYTLW.contextInfo = {
                ["mentionedJid"]: (0, cceDhC6.parseMentions)(
                  CUMzBaj + AUfqKAV + HXAKfz,
                ),
              }),
              BtHoGi.push(ywyYTLW));
          }
        }
        if (!BtHoGi.length) {
          _nlyYH2.StarGhostError.throw("Carousel cards cannot be empty", {
            ["statusCode"]: 400,
          });
        }
        const rdMpzF = !!NolGaU.isAi;
        const orC_txY = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
          rdMpzF,
        );
        const knYdCga = BKkZ38(
          rAPpLC,
          {
            ["interactiveMessage"]: awwgyka,
          },
          {
            ["mentions"]: (0, cceDhC6.parseMentions)(
              Ye2JAg3 + e7yIKsH + vHgRZBY,
            ),
            ["ephemeralExpiration"]: lBe9pk(rAPpLC),
            ["quoted"]: wJgwdj,
            ...NolGaU,
            ["userJid"]: Xq4DAK.creds.me.id,
            ["messageId"]: orC_txY,
          },
        );
        const uA9D8d1 = [g9elCb(utuUVRe(knYdCga.message))];
        if (rdMpzF && S6S63X(rAPpLC)) {
          uA9D8d1.push(..._nlyYH2.BIZ_BOT_CONTENT);
        }
        await o32ydN(rAPpLC, knYdCga.message, {
          ["additionalNodes"]: uA9D8d1,
          ["useCachedGroupMetadata"]: true,
          ["messageId"]: orC_txY,
        });
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(knYdCga, "append");
            });
          });
        }
        return knYdCga;
      },
    );
    const kZXTYc = (0, _nlyYH2.nativeify)(
      async (rAPpLC, zYWW0U, wJgwdj, NolGaU = _nlyYH2.EMPTY_OBJECT) => {
        ROc8YnO(rAPpLC);
        const Ye2JAg3 = NolGaU.title || NolGaU.titleText;
        const e7yIKsH = (0, cceDhC6.forceToString)(
          NolGaU.text ||
            NolGaU.caption ||
            NolGaU.body ||
            NolGaU.contentText ||
            "\0",
        );
        const vHgRZBY = NolGaU.footer || NolGaU.footerText;
        const awwgyka = {
          ["contentText"]: e7yIKsH,
          ["headerType"]: qjxI5v.EMPTY,
        };
        if (Ye2JAg3) {
          ((awwgyka.text = (0, cceDhC6.forceToString)(Ye2JAg3)),
            (awwgyka.headerType = qjxI5v.TEXT));
        }
        if (
          NolGaU.media ||
          NolGaU.buffer ||
          NolGaU.image ||
          NolGaU.video ||
          NolGaU.document ||
          NolGaU.location
        ) {
          try {
            const PCxbp44 = await Iw3M6S7(NolGaU, {
              ["jid"]: rAPpLC,
              ["upload"]: sRjd79Q,
              ["mediaCache"]: YPRosV,
            });
            const JVZ5CJc = cganYo("HUgXRO")
              .keys(PCxbp44)[0]
              .replace("Message", "")
              .toUpperCase();
            ((PCxbp44.headerType = qjxI5v[JVZ5CJc]),
              cganYo("HUgXRO").assign(awwgyka, PCxbp44));
          } catch (error) {
            nlv0E9I.error("❌ " + (error?.message || error) + " : " + error);
            return await tHnJ6GS(rAPpLC, qekTmEX(error), wJgwdj);
          }
        }
        if (vHgRZBY) {
          awwgyka.footerText = (0, cceDhC6.forceToString)(vHgRZBY);
        }
        if (cganYo("EeRqOly").isArray(zYWW0U) && zYWW0U.length) {
          awwgyka.buttons = zYWW0U.map((...rAPpLC) => {
            rAPpLC.length = 1;
            const zYWW0U = (0, cceDhC6.forceToString)(
              rAPpLC[0].text || rAPpLC[0].buttonText || rAPpLC[0].title || "",
            );
            const wJgwdj = (0, cceDhC6.forceToString)(
              rAPpLC[0].id || rAPpLC[0].buttonId || "",
            );
            const NolGaU = rAPpLC[0].type;
            if (wJgwdj) {
              return {
                ["buttonId"]: wJgwdj,
                ["buttonText"]: {
                  ["displayText"]: zYWW0U,
                },
                ["type"]: NolGaU || GX1Htu.RESPONSE,
              };
            } else if (rAPpLC[0].sections) {
              const Ye2JAg3 = NolGaU || GX1Htu.NATIVE_FLOW;
              return {
                ...(Ye2JAg3 != 2
                  ? {
                      ["buttonId"]: zYWW0U,
                      ["buttonText"]: {
                        ["displayText"]: zYWW0U,
                      },
                    }
                  : {}),
                ["nativeFlowInfo"]: {
                  ["name"]: "single_select",
                  ["paramsJson"]: cganYo("ZWknuzS").stringify({
                    ["title"]: zYWW0U,
                    ["sections"]: rAPpLC[0].sections,
                  }),
                },
                ["type"]: Ye2JAg3,
              };
            } else if (rAPpLC[0].name && rAPpLC[0].paramsJson) {
              const e7yIKsH = rAPpLC[0].paramsJson;
              return {
                ["nativeFlowInfo"]: {
                  ["name"]: rAPpLC[0].name,
                  ["paramsJson"]:
                    typeof e7yIKsH === "string"
                      ? e7yIKsH
                      : cganYo("ZWknuzS").stringify(e7yIKsH),
                },
                ["type"]: NolGaU || GX1Htu.NATIVE_FLOW,
              };
            }
            return rAPpLC[0];
          });
        }
        if (!zYWW0U?.length) {
          _nlyYH2.StarGhostError.throw("Buttons cannot be empty", {
            ["statusCode"]: 400,
          });
        }
        const kvmxvM = !!NolGaU.isAi;
        const aQJNCU9 = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
          kvmxvM,
        );
        const I5Y1Mem = BKkZ38(
          rAPpLC,
          {
            ["buttonsMessage"]: awwgyka,
          },
          {
            ["mentions"]: (0, cceDhC6.parseMentions)(
              Ye2JAg3 + e7yIKsH + vHgRZBY,
            ),
            ["ephemeralExpiration"]: lBe9pk(rAPpLC),
            ["quoted"]: wJgwdj,
            ...NolGaU,
            ["userJid"]: Xq4DAK.creds.me.id,
            ["messageId"]: aQJNCU9,
          },
        );
        const KmEmVE = [g9elCb(utuUVRe(I5Y1Mem.message))];
        if (kvmxvM && S6S63X(rAPpLC)) {
          KmEmVE.push(..._nlyYH2.BIZ_BOT_CONTENT);
        }
        await o32ydN(rAPpLC, I5Y1Mem.message, {
          ["additionalNodes"]: KmEmVE,
          ["useCachedGroupMetadata"]: true,
          ["messageId"]: aQJNCU9,
        });
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(I5Y1Mem, "append");
            });
          });
        }
        return I5Y1Mem;
      },
    );
    const QSNY1t3 = (0, _nlyYH2.nativeify)(
      async (rAPpLC, zYWW0U, wJgwdj, NolGaU = _nlyYH2.EMPTY_OBJECT) => {
        ROc8YnO(rAPpLC);
        const Ye2JAg3 = NolGaU.title || NolGaU.titleText;
        const e7yIKsH = (0, cceDhC6.forceToString)(
          NolGaU.text ||
            NolGaU.caption ||
            NolGaU.description ||
            NolGaU.body ||
            NolGaU.contentText ||
            "\0",
        );
        const vHgRZBY = NolGaU.buttonText;
        const awwgyka = NolGaU.footer || NolGaU.footerText;
        const PCxbp44 = {
          ["description"]: e7yIKsH,
          ["listType"]: uzL5KG.SINGLE_SELECT,
        };
        if (Ye2JAg3) {
          PCxbp44.title = (0, cceDhC6.forceToString)(Ye2JAg3);
        }
        if (vHgRZBY) {
          PCxbp44.buttonText = (0, cceDhC6.forceToString)(vHgRZBY);
        }
        if (awwgyka) {
          PCxbp44.footerText = (0, cceDhC6.forceToString)(awwgyka);
        }
        if (cganYo("EeRqOly").isArray(zYWW0U) && zYWW0U.length) {
          const JVZ5CJc = NolGaU.businessOwnerJid;
          const kvmxvM =
            NolGaU.media ||
            NolGaU.buffer ||
            NolGaU.image ||
            NolGaU.headerImage ||
            _nlyYH2.DEFAULT_THUMBNAIL;
          if (JVZ5CJc) {
            let aQJNCU9;
            if (
              !cganYo("qmDMHFE").isBuffer(kvmxvM) &&
              typeof kvmxvM === "string"
            ) {
              aQJNCU9 = await (0, cceDhC6.getFile)(kvmxvM);
            }
            ((PCxbp44.productListInfo = {
              ["productSections"]: zYWW0U,
              ["headerImage"]: {
                ["productId"]: (0, cceDhC6.forceToString)(
                  NolGaU.headerProductId || "",
                ),
                ["jpegThumbnail"]: await (0, cceDhC6.resizeImage)(
                  aQJNCU9 || kvmxvM,
                  300,
                ),
              },
              ["businessOwnerJid"]: JVZ5CJc,
            }),
              (PCxbp44.listType = uzL5KG.PRODUCT_LIST));
          } else {
            PCxbp44.sections = zYWW0U;
          }
        }
        if (!zYWW0U?.length) {
          _nlyYH2.StarGhostError.throw("Sections cannot be empty", {
            ["statusCode"]: 400,
          });
        }
        const I5Y1Mem = !!NolGaU.isAi;
        const KmEmVE = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
          I5Y1Mem,
        );
        const Iw3M6S7 = BKkZ38(
          rAPpLC,
          {
            ["listMessage"]: PCxbp44,
          },
          {
            ["mentions"]: (0, cceDhC6.parseMentions)(
              Ye2JAg3 + e7yIKsH + awwgyka,
            ),
            ["ephemeralExpiration"]: lBe9pk(rAPpLC),
            ["quoted"]: wJgwdj,
            ...NolGaU,
            ["userJid"]: Xq4DAK.creds.me.id,
            ["messageId"]: KmEmVE,
          },
        );
        const bDfRTTb = [g9elCb(utuUVRe(Iw3M6S7.message))];
        if (I5Y1Mem && S6S63X(rAPpLC)) {
          bDfRTTb.push(..._nlyYH2.BIZ_BOT_CONTENT);
        }
        await o32ydN(rAPpLC, Iw3M6S7.message, {
          ["additionalNodes"]: bDfRTTb,
          ["useCachedGroupMetadata"]: true,
          ["messageId"]: KmEmVE,
        });
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(Iw3M6S7, "append");
            });
          });
        }
        return Iw3M6S7;
      },
    );
    const Gj5QQK = (0, _nlyYH2.nativeify)(
      async (rAPpLC, zYWW0U, wJgwdj, NolGaU = _nlyYH2.EMPTY_OBJECT) => {
        ROc8YnO(rAPpLC);
        const Ye2JAg3 = (0, Wi4UFs.randomUUID)();
        if (typeof zYWW0U === "string") {
          zYWW0U = (0, cceDhC6.extractAIResponse)(zYWW0U);
        }
        let e7yIKsH = true;
        const vHgRZBY = {
          ["response_id"]: Ye2JAg3,
          ["sections"]: zYWW0U.map((...rAPpLC) => {
            rAPpLC.length = 1;
            if ("text" in rAPpLC[0]) {
              let zYWW0U = rAPpLC[0].text;
              const wJgwdj = [];
              let NolGaU = 0;
              rAPpLC[0].entities?.forEach((rAPpLC) => {
                if ("citationUrl" in rAPpLC) {
                  const Ye2JAg3 = "CI_" + NolGaU;
                  ((zYWW0U +=
                    " {{" + Ye2JAg3 + "}}" + NolGaU + "{{/" + Ye2JAg3 + "}}"),
                    wJgwdj.push({
                      ["key"]: Ye2JAg3,
                      ["metadata"]: {
                        ["reference_id"]: NolGaU + 1,
                        ["reference_url"]: rAPpLC.citationUrl,
                        ["reference_title"]: rAPpLC.title,
                        ["reference_display_name"]: rAPpLC.displayName,
                        ["sources"]: rAPpLC.sources || [],
                        ["__typename"]: "GenAISearchCitationItem",
                      },
                    }));
                }
                if ("inlineUrl" in rAPpLC) {
                  const Ye2JAg3 = "LI_" + NolGaU;
                  ((zYWW0U +=
                    " {{" + Ye2JAg3 + "}}" + NolGaU + "{{/" + Ye2JAg3 + "}}"),
                    wJgwdj.push({
                      ["key"]: Ye2JAg3,
                      ["metadata"]: {
                        ["display_name"]: rAPpLC.displayName,
                        ["is_trusted"]: rAPpLC.isTrusted,
                        ["url"]: rAPpLC.inlineUrl,
                        ["__typename"]: "GenAIInlineLinkItem",
                      },
                    }));
                }
                if ("latex" in rAPpLC) {
                  const Ye2JAg3 = "LI_" + NolGaU;
                  ((zYWW0U +=
                    " {{" +
                    Ye2JAg3 +
                    "}}" +
                    rAPpLC.expression +
                    "{{/" +
                    Ye2JAg3 +
                    "}}"),
                    wJgwdj.push({
                      ["key"]: Ye2JAg3,
                      ["metadata"]: {
                        ["latex_expression"]: rAPpLC.expression,
                        ["latex_image"]: {
                          ["url"]: rAPpLC.latex,
                          ["width"]: rAPpLC.width || 603,
                          ["height"]: rAPpLC.height || 111,
                        },
                        ["font_height"]: rAPpLC.fontHeight || 83.333333333333,
                        ["padding"]: rAPpLC.padding || 15,
                        ["__typename"]: "GenAILatexItem",
                      },
                    }));
                }
                ++NolGaU;
              });
              return {
                ["view_model"]: {
                  ["primitive"]: {
                    ["text"]: zYWW0U,
                    ["inline_entities"]: wJgwdj,
                    ["__typename"]: "GenAIMarkdownTextUXPrimitive",
                  },
                  ["__typename"]: "GenAISingleLayoutViewModel",
                },
              };
            }
            if ("tip" in rAPpLC[0]) {
              return {
                ["view_model"]: {
                  ["primitive"]: {
                    ["text"]: rAPpLC[0].tip,
                    ["__typename"]: "GenAIMetadataTextPrimitive",
                  },
                  ["__typename"]: "GenAISingleLayoutViewModel",
                },
              };
            }
            if ("code" in rAPpLC[0]) {
              const Ye2JAg3 = rAPpLC[0].language || "javascript";
              return {
                ["view_model"]: {
                  ["primitive"]: {
                    ["language"]: Ye2JAg3,
                    ["code_blocks"]: BuaPcRp(rAPpLC[0].code, Ye2JAg3),
                    ["__typename"]: "GenAICodeUXPrimitive",
                  },
                  ["__typename"]: "GenAISingleLayoutViewModel",
                },
              };
            }
            if ("suggestions" in rAPpLC[0]) {
              if (rAPpLC[0].canScroll) {
                return {
                  ["view_model"]: {
                    ["primitives"]: rAPpLC[0].suggestions.map((...rAPpLC) => {
                      rAPpLC.length = 1;
                      return {
                        ["prompt_text"]: rAPpLC[0],
                        ["prompt_type"]: "SUGGESTED_PROMPT",
                        ["__typename"]: "GenAIFollowUpSuggestionPillPrimitive",
                      };
                    }),
                    ["__typename"]: "GenAIHScrollLayoutViewModel",
                  },
                };
              }
              return {
                ["view_model"]: {
                  ["primitives"]: rAPpLC[0].suggestions.map((rAPpLC) => {
                    return {
                      ["prompt_text"]: rAPpLC,
                      ["prompt_type"]: "SUGGESTED_PROMPT",
                      ["__typename"]: "GenAIFollowUpSuggestionPillPrimitive",
                    };
                  }),
                  ["__typename"]: "GenAIActionRowLayoutViewModel",
                },
              };
            }
            if ("suggestion" in rAPpLC[0]) {
              return {
                ["view_model"]: {
                  ["primitive"]: {
                    ["prompt_text"]: rAPpLC[0].suggestion,
                    ["prompt_type"]: "SUGGESTED_PROMPT",
                    ["__typename"]: "GenAIFollowUpSuggestionPillPrimitive",
                  },
                  ["__typename"]: "GenAISingleLayoutViewModel",
                },
              };
            }
            if ("htmlPayload" in rAPpLC[0]) {
              e7yIKsH = false;
              return {
                ["view_model"]: {
                  ["primitive"]: {
                    ["payload"]: rAPpLC[0].htmlPayload,
                    ["trusted_sources"]: rAPpLC[0].trustedSources || [
                      "https://github.com/ghostdev654",
                    ],
                    ["__typename"]: "FOAHtmlPrimitiveDemoDONOTUSE",
                  },
                  ["__typename"]: "GenAISingleLayoutViewModel",
                },
              };
            }
            if ("video" in rAPpLC[0]) {
              return {
                ["view_model"]: {
                  ["primitive"]: {
                    ["media"]: {
                      ["url"]: rAPpLC[0].video,
                      ["mime_type"]:
                        rAPpLC[0].mime || rAPpLC[0].mimetype || "video/mp4",
                      ["file_length"]: rAPpLC[0].fileLength || 0,
                      ["duration"]: rAPpLC[0].duration || 0,
                    },
                    ["thumbnail"]: {
                      ["raw_media"]: rAPpLC[0].thumbnailUrl,
                    },
                    ["imagine_type"]: "ANIMATE",
                    ["status"]: {
                      ["status"]: "READY",
                    },
                    ["__typename"]: "GenAIImaginePrimitive",
                  },
                  ["__typename"]: "GenAISingleLayoutViewModel",
                },
              };
            }
            if ("image" in rAPpLC[0]) {
              const vHgRZBY = {
                ["url"]: rAPpLC[0].image,
                ["mime_type"]:
                  rAPpLC[0].mime || rAPpLC[0].mimetype || "image/png",
                ["__typename"]: "GenAIMediaItem",
              };
              return {
                ["view_model"]: {
                  ["primitive"]: {
                    ["preview_image"]: vHgRZBY,
                    ["full_image"]: vHgRZBY,
                    ["__typename"]: "GenAIImagePrimitive",
                  },
                  ["__typename"]: "GenAISingleLayoutViewModel",
                },
              };
            }
            if ("imagine" in rAPpLC[0]) {
              return {
                ["view_model"]: {
                  ["primitive"]: {
                    ["media"]: {
                      ["url"]: rAPpLC[0].imagine,
                      ["mime_type"]:
                        rAPpLC[0].mime || rAPpLC[0].mimetype || "image/png",
                    },
                    ["imagine_type"]: "IMAGE",
                    ["status"]: {
                      ["status"]: "READY",
                    },
                    ["__typename"]: "GenAIImaginePrimitive",
                  },
                  ["__typename"]: "GenAISingleLayoutViewModel",
                },
              };
            }
            if ("reels" in rAPpLC[0]) {
              return {
                ["view_model"]: {
                  ["primitives"]: rAPpLC[0].reels.map((...rAPpLC) => {
                    rAPpLC.length = 1;
                    return {
                      ["reels_url"]: rAPpLC[0].reelUrl || _nlyYH2.DONATE_URL,
                      ["thumbnail_url"]:
                        rAPpLC[0].thumbnailUrl || _nlyYH2.DEFAULT_THUMBNAIL,
                      ["creator"]: rAPpLC[0].creator || "Lia Wynn",
                      ["avatar_url"]:
                        rAPpLC[0].avatarUrl || _nlyYH2.DEFAULT_AVATAR,
                      ["reels_title"]: rAPpLC[0].title || _nlyYH2.LIBRARY_NAME,
                      ["likes_count"]: rAPpLC[0].likesCount || 0,
                      ["shares_count"]: rAPpLC[0].sharesCount || 0,
                      ["view_count"]: rAPpLC[0].viewCount || 0,
                      ["reel_source"]: rAPpLC[0].source || _nlyYH2.DONATE_URL,
                      ["is_verified"]: rAPpLC[0].isVerified || false,
                      ["__typename"]: "GenAIReelPrimitive",
                    };
                  }),
                  ["__typename"]: "GenAIHScrollLayoutViewModel",
                },
              };
            }
            if ("posts" in rAPpLC[0]) {
              return {
                ["view_model"]: {
                  ["primitives"]: rAPpLC[0].posts.map((rAPpLC) => {
                    return {
                      ["title"]: rAPpLC.title || _nlyYH2.LIBRARY_NAME,
                      ["subtitle"]: rAPpLC.subtitle || "",
                      ["username"]: rAPpLC.creator || "Lia Wynn",
                      ["profile_picture_url"]:
                        rAPpLC.avatarUrl || _nlyYH2.DEFAULT_AVATAR,
                      ["is_verified"]: rAPpLC.isVerified || false,
                      ["thumbnail_url"]:
                        rAPpLC.thumbnailUrl || _nlyYH2.DEFAULT_THUMBNAIL,
                      ["post_caption"]: rAPpLC.caption || _nlyYH2.LIBRARY_NAME,
                      ["likes_count"]: rAPpLC.likesCount || 0,
                      ["comments_count"]: rAPpLC.commentsCount || 0,
                      ["shares_count"]: rAPpLC.sharesCount || 0,
                      ["post_url"]: rAPpLC.postUrl || _nlyYH2.DONATE_URL,
                      ["post_deeplink"]: rAPpLC.deepLink || _nlyYH2.DONATE_URL,
                      ["source_app"]:
                        rAPpLC.sourceApp?.toUpperCase() || "FACEBOOK",
                      ["footer_label"]: rAPpLC.footerLabel || "",
                      ["footer_icon"]: rAPpLC.footerIcon || "",
                      ["is_carousel"]: rAPpLC.isCarousel || false,
                      ["orientation"]:
                        rAPpLC.orientation?.toUpperCase() || "LANDSCAPE",
                      ["post_type"]: rAPpLC.type?.toUpperCase() || "IMAGE",
                      ["__typename"]: "GenAIPostPrimitive",
                    };
                  }),
                  ["__typename"]: "GenAIHScrollLayoutViewModel",
                },
              };
            }
            if ("products" in rAPpLC[0]) {
              return {
                ["view_model"]: {
                  ["primitives"]: rAPpLC[0].products.map((...rAPpLC) => {
                    rAPpLC.length = 1;
                    const zYWW0U = {
                      ["image"]: {
                        ["url"]:
                          rAPpLC[0].imageUrl || _nlyYH2.DEFAULT_THUMBNAIL,
                      },
                      ["additional_images"]: rAPpLC[0].additionalImages || [],
                      ["__typename"]: "GenAIProductItemCardPrimitive",
                    };
                    if (rAPpLC[0].title) {
                      zYWW0U.title = rAPpLC[0].title || _nlyYH2.LIBRARY_NAME;
                    }
                    if (rAPpLC[0].brand) {
                      zYWW0U.brand = rAPpLC[0].brand || "";
                    }
                    if (rAPpLC[0].price) {
                      zYWW0U.price = rAPpLC[0].price || 0;
                    }
                    if (rAPpLC[0].salePrice) {
                      zYWW0U.sale_price = rAPpLC[0].salePrice || 0;
                    }
                    if (rAPpLC[0].productUrl) {
                      zYWW0U.product_url =
                        rAPpLC[0].productUrl || _nlyYH2.DONATE_URL;
                    }
                    return zYWW0U;
                  }),
                  ["__typename"]: "GenAIHScrollLayoutViewModel",
                },
              };
            }
            if ("price" in rAPpLC[0]) {
              const awwgyka = {
                ["image"]: {
                  ["url"]: rAPpLC[0].imageUrl || _nlyYH2.DEFAULT_THUMBNAIL,
                },
                ["additional_images"]: rAPpLC[0].additionalImages || [],
                ["__typename"]: "GenAIProductItemCardPrimitive",
              };
              if (rAPpLC[0].title) {
                awwgyka.title = rAPpLC[0].title || _nlyYH2.LIBRARY_NAME;
              }
              if (rAPpLC[0].brand) {
                awwgyka.brand = rAPpLC[0].brand || "";
              }
              if (rAPpLC[0].price) {
                awwgyka.price = rAPpLC[0].price || 0;
              }
              if (rAPpLC[0].salePrice) {
                awwgyka.sale_price = rAPpLC[0].salePrice || 0;
              }
              if (rAPpLC[0].productUrl) {
                awwgyka.product_url =
                  rAPpLC[0].productUrl || _nlyYH2.DONATE_URL;
              }
              return {
                ["view_model"]: {
                  ["primitive"]: awwgyka,
                  ["__typename"]: "GenAISingleLayoutViewModel",
                },
              };
            }
            if ("extWidget" in rAPpLC[0]) {
              return {
                ["view_model"]: {
                  ["primitives"]: rAPpLC[0].extWidget?.map((...rAPpLC) => {
                    rAPpLC.length = 1;
                    return {
                      ["header"]: {
                        ["title"]: rAPpLC[0].title,
                        ["__typename"]: "GenAI3PExtWidgetStandardHeader",
                      },
                      ["body"]: {
                        ["sections"]: rAPpLC[0].sections || [],
                        ["ctas"]: rAPpLC[0].buttons?.map((...rAPpLC) => {
                          rAPpLC.length = 1;
                          return {
                            ["label"]: rAPpLC[0],
                            ["state"]: "PENDING",
                            ["kind"]: "OTHER",
                            ["tool_call_id"]: cganYo("W4eFYYt")(
                              cganYo("DXNE30j").now(),
                            ),
                            ["toast"]: {
                              ["label"]: _nlyYH2.LIBRARY_NAME,
                              ["__typename"]: "GenAI3PExtWidgetToast",
                            },
                            ["__typename"]: "GenAI3PExtWidgetCTA",
                          };
                        }),
                        ["__typename"]: "GenAI3PExtCalendarEventList",
                      },
                      ["__typename"]: "GenAI3PExtWidgetPrimitive",
                    };
                  }),
                  ["__typename"]: rAPpLC[0].canScroll
                    ? "GenAIHScrollLayoutViewModel"
                    : "GenAIActionRowLayoutViewModel",
                },
              };
            }
            if ("latex" in rAPpLC[0]) {
              return {
                ["view_model"]: {
                  ["primitive"]: {
                    ["latex_image"]: {
                      ["url"]: rAPpLC[0].latex,
                      ["mime_type"]:
                        rAPpLC[0].mime || rAPpLC[0].mimetype || "image/png",
                      ["expiration_timestamp_ms"]:
                        cganYo("DXNE30j").now() + 86400000,
                      ["width"]: rAPpLC[0].width || 603,
                      ["height"]: rAPpLC[0].height || 111,
                    },
                    ["latex_expression"]: rAPpLC[0].expression,
                    ["font_height"]: rAPpLC[0].fontHeight || 83.333333333333,
                    ["padding"]: rAPpLC[0].padding || 15,
                    ["item"]: {
                      ["latex_image"]: {
                        ["url"]: rAPpLC[0].latex,
                        ["mime_type"]:
                          rAPpLC[0].mime || rAPpLC[0].mimetype || "image/png",
                        ["expiration_timestamp_ms"]:
                          cganYo("DXNE30j").now() + 86400000,
                        ["width"]: rAPpLC[0].width || 603,
                        ["height"]: rAPpLC[0].height || 111,
                      },
                      ["latex_expression"]: rAPpLC[0].expression,
                      ["font_height"]: rAPpLC[0].fontHeight || 83.333333333333,
                      ["padding"]: rAPpLC[0].padding || 15,
                    },
                    ["__typename"]: "GenAILatexUXPrimitive",
                  },
                  ["__typename"]: "GenAISingleLayoutViewModel",
                },
              };
            }
            if ("table" in rAPpLC[0]) {
              return {
                ["view_model"]: {
                  ["primitive"]: {
                    ["title"]: rAPpLC[0].title,
                    ["rows"]: rAPpLC[0].table.map((rAPpLC) => {
                      return {
                        ["is_header"]: rAPpLC.isHeading,
                        ["cells"]: rAPpLC.items,
                        ["markdown_cells"]: rAPpLC.items.map((rAPpLC) => {
                          return {
                            ["text"]: rAPpLC,
                          };
                        }),
                      };
                    }),
                    ["__typename"]: "GenATableUXPrimitive",
                  },
                  ["__typename"]: "GenAISingleLayoutViewModel",
                },
              };
            }
            if ("foaText" in rAPpLC[0]) {
              return {
                ["view_model"]: {
                  ["primitive"]: {
                    ["text"]: rAPpLC[0].foaText,
                    ["__typename"]: "FOATextPrimitive",
                  },
                  ["__typename"]: "GenAISingleLayoutViewModel",
                },
              };
            }
            if ("actionUrls" in rAPpLC[0]) {
              const PCxbp44 = rAPpLC[0].actionUrls?.map((...rAPpLC) => {
                rAPpLC.length = 1;
                return {
                  ["cta_text"]: rAPpLC[0].text,
                  ["cta_type"]: "OPEN_URL",
                  ["cta_url"]: rAPpLC[0].url,
                  ["__typename"]: "GenAIFooterActionPrimitive",
                };
              });
              const JVZ5CJc = PCxbp44?.length > 1;
              const kvmxvM = JVZ5CJc ? "primitives" : "primitive";
              return {
                ["view_model"]: {
                  [kvmxvM]: JVZ5CJc ? PCxbp44 : PCxbp44[0],
                  ["__typename"]: rAPpLC[0].canScroll
                    ? "GenAIHScrollLayoutViewModel"
                    : JVZ5CJc
                      ? "GenAIActionRowLayoutViewModel"
                      : "GenAISingleLayoutViewModel",
                },
              };
            }
            if ("searchResults" in rAPpLC[0]) {
              return {
                ["view_model"]: {
                  ["primitive"]: {
                    ["sources"]: rAPpLC[0].searchResults.map((zYWW0U) => {
                      return {
                        ["source_type"]: "THIRD_PARTY",
                        ["source_display_name"]: zYWW0U.displayName || "",
                        ["source_subtitle"]: zYWW0U.subtitle || "AI",
                        ["source_url"]: zYWW0U.sourceUrl || _nlyYH2.DONATE_URL,
                        ["favicon"]: {
                          ["url"]: zYWW0U.faviconUrl,
                          ["mime_type"]:
                            rAPpLC[0].mime || zYWW0U.mimetype || "image/jpeg",
                          ["width"]: 16,
                          ["height"]: 16,
                        },
                      };
                    }),
                    ["__typename"]: "GenAISearchResultPrimitive",
                  },
                  ["__typename"]: "GenAISingleLayoutViewModel",
                },
              };
            }
            return rAPpLC[0];
          }),
        };
        const awwgyka = !!NolGaU.isAi;
        const PCxbp44 = !!e7yIKsH && !!NolGaU.streamText;
        const JVZ5CJc = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
          awwgyka,
        );
        const kvmxvM = {
          ["botMetadata"]: {
            ["botResponseId"]: Ye2JAg3,
            ["verificationMetadata"]: {
              ["proofs"]: [
                {
                  ["certificateChain"]: [Qh5AlnT(), Qh5AlnT(892)],
                  ["version"]: 1,
                  ["useCase"]: 1,
                  ["signature"]: dc6p94(),
                },
              ],
            },
            ["messageDisclaimerText"]: NolGaU.disclaimerText ?? null,
            ["sessionTransparencyMetadata"]: NolGaU.notify
              ? {
                  ["disclaimerText"]: _nlyYH2.LIBRARY_NAME,
                  ["hcaId"]: "hca_" + cganYo("DXNE30j").now(),
                  ["sessionTransparencyType"]: 1,
                }
              : null,
          },
        };
        const aQJNCU9 = {
          ["submessages"]: _nlyYH2.STATIC_SUBMESSAGES,
          ["messageType"]: 1,
          ["unifiedResponse"]: {
            ["data"]: cganYo("qmDMHFE").from(
              cganYo("ZWknuzS").stringify(vHgRZBY),
            ),
          },
          ["contextInfo"]: {
            ["isForwarded"]: true,
            ["forwardingScore"]: 1,
            ["forwardedAiBotMessageInfo"]: {
              ["botJid"]: "867051314767696@bot",
            },
            ["forwardOrigin"]: 4,
          },
        };
        const I5Y1Mem = BKkZ38(
          rAPpLC,
          {
            ["messageContextInfo"]: kvmxvM,
            ["botForwardedMessage"]: {
              ["message"]: {
                ["richResponseMessage"]: aQJNCU9,
              },
            },
          },
          {
            ["ephemeralExpiration"]: lBe9pk(rAPpLC),
            ["quoted"]: wJgwdj,
            ...NolGaU,
            ["userJid"]: Xq4DAK.creds.me.id,
            ["messageId"]: JVZ5CJc,
          },
        );
        const utuUVRe = I5Y1Mem.message.messageContextInfo.messageSecret;
        for (let KmEmVE = 0; KmEmVE < 2; KmEmVE++) {
          const Iw3M6S7 = KmEmVE === 0;
          (await o32ydN(rAPpLC, I5Y1Mem.message, {
            ["additionalNodes"]:
              awwgyka && S6S63X(rAPpLC) ? _nlyYH2.BIZ_BOT_CONTENT : undefined,
            ["useUserDevicesCache"]: Iw3M6S7,
            ["useCachedGroupMetadata"]: true,
            ["messageId"]: JVZ5CJc,
          }),
            await (0, cceDhC6.delay)(100));
        }
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(I5Y1Mem, "append");
            });
          });
        }
        if (PCxbp44) {
          await brLoj0(vHgRZBY.sections, (zYWW0U) => {
            const e7yIKsH = (0, cceDhC6.generateMessageID)(
              Xq4DAK.creds.me.id,
              hwrorqQ,
              awwgyka,
            );
            const vHgRZBY = BKkZ38(
              rAPpLC,
              {
                ["messageContextInfo"]: {
                  ...kvmxvM,
                  ["messageSecret"]: utuUVRe,
                },
                ["botForwardedMessage"]: {
                  ["message"]: {
                    ["protocolMessage"]: {
                      ["key"]: I5Y1Mem.key,
                      ["type"]: m7bIcP.MESSAGE_EDIT,
                      ["editedMessage"]: {
                        ["richResponseMessage"]: {
                          ...aQJNCU9,
                          ["unifiedResponse"]: {
                            ["data"]: cganYo("qmDMHFE").from(
                              cganYo("ZWknuzS").stringify({
                                ["response_id"]: Ye2JAg3,
                                ["sections"]: zYWW0U,
                              }),
                            ),
                          },
                        },
                      },
                      ["timestampMs"]: cganYo("DXNE30j").now(),
                    },
                  },
                },
              },
              {
                ["quoted"]: wJgwdj,
                ...NolGaU,
                ["userJid"]: Xq4DAK.creds.me.id,
                ["messageId"]: e7yIKsH,
              },
            );
            o32ydN(rAPpLC, vHgRZBY.message, {
              ["additionalAttributes"]: {
                ["edit"]: "1",
              },
              ["additionalNodes"]:
                awwgyka && S6S63X(rAPpLC) ? _nlyYH2.BIZ_BOT_CONTENT : undefined,
              ["useCachedGroupMetadata"]: true,
              ["messageId"]: e7yIKsH,
            });
            if (O9mogJ) {
              cganYo("jPWm90u").nextTick(() => {
                gKNjoj.mutex(() => {
                  return GvJ5lZW(vHgRZBY, "append");
                });
              });
            }
          });
        } else if (e7yIKsH) {
          const bDfRTTb = (0, cceDhC6.generateMessageID)(
            Xq4DAK.creds.me.id,
            hwrorqQ,
            awwgyka,
          );
          const AdrDi2a = BKkZ38(
            rAPpLC,
            {
              ["messageContextInfo"]: {
                ...kvmxvM,
                ["messageSecret"]: utuUVRe,
              },
              ["botForwardedMessage"]: {
                ["message"]: {
                  ["protocolMessage"]: {
                    ["key"]: I5Y1Mem.key,
                    ["type"]: m7bIcP.MESSAGE_EDIT,
                    ["editedMessage"]: {
                      ["richResponseMessage"]: aQJNCU9,
                    },
                    ["timestampMs"]: cganYo("DXNE30j").now(),
                  },
                },
              },
            },
            {
              ["quoted"]: wJgwdj,
              ...NolGaU,
              ["userJid"]: Xq4DAK.creds.me.id,
              ["messageId"]: bDfRTTb,
            },
          );
          await o32ydN(rAPpLC, AdrDi2a.message, {
            ["additionalAttributes"]: {
              ["edit"]: "1",
            },
            ["additionalNodes"]:
              awwgyka && S6S63X(rAPpLC) ? _nlyYH2.BIZ_BOT_CONTENT : undefined,
            ["useCachedGroupMetadata"]: true,
            ["messageId"]: bDfRTTb,
          });
          if (O9mogJ) {
            cganYo("jPWm90u").nextTick(() => {
              gKNjoj.mutex(() => {
                return GvJ5lZW(AdrDi2a, "append");
              });
            });
          }
        }
        return I5Y1Mem;
      },
    );
    const c0NhNM = (0, _nlyYH2.nativeify)(
      async (
        rAPpLC,
        zYWW0U,
        wJgwdj,
        NolGaU,
        Ye2JAg3 = _nlyYH2.EMPTY_OBJECT,
      ) => {
        ((wJgwdj = (0, cceDhC6.forceToString)(wJgwdj || "")),
          void ROc8YnO(rAPpLC));
        if (!zYWW0U) {
          _nlyYH2.StarGhostError.throw(
            "Must provide thumbnail buffer in order message",
            {
              ["statusCode"]: 400,
            },
          );
        }
        const e7yIKsH = {
          ["itemCount"]: 1,
          ["messageVersion"]: 1,
          ["orderTitle"]: _nlyYH2.LIBRARY_NAME,
          ["status"]: hDRDTS8.INQUIRY,
          ["surface"]: jbmCCU.CATALOG,
          ["thumbnail"]: await (0, cceDhC6.fetchAsBuffer)(zYWW0U),
          ["token"]: (0, cceDhC6.generateMessageID)(),
          ["totalAmount1000"]: 1000,
          ["totalCurrencyCode"]: "IDR",
          ...Ye2JAg3,
          ["message"]: wJgwdj,
        };
        const vHgRZBY = !!Ye2JAg3.isAi;
        const awwgyka = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
          vHgRZBY,
        );
        const PCxbp44 = BKkZ38(
          rAPpLC,
          {
            ["orderMessage"]: e7yIKsH,
          },
          {
            ["mentions"]: (0, cceDhC6.parseMentions)(wJgwdj),
            ["ephemeralExpiration"]: lBe9pk(rAPpLC),
            ["quoted"]: NolGaU,
            ...Ye2JAg3,
            ["userJid"]: Xq4DAK.creds.me.id,
            ["messageId"]: awwgyka,
          },
        );
        await o32ydN(rAPpLC, PCxbp44.message, {
          ["additionalNodes"]:
            vHgRZBY && S6S63X(rAPpLC) ? _nlyYH2.BIZ_BOT_CONTENT : undefined,
          ["useCachedGroupMetadata"]: true,
          ["statusJidList"]: Ye2JAg3.statusJidList,
          ["messageId"]: awwgyka,
        });
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(PCxbp44, "append");
            });
          });
        }
        return PCxbp44;
      },
    );
    const cwXaSb = (0, _nlyYH2.nativeify)(
      async (rAPpLC, zYWW0U, NolGaU = _nlyYH2.EMPTY_OBJECT) => {
        let Ye2JAg3 = wJgwdj(zYWW0U, true);
        let BKkZ38 = vHgRZBY(Ye2JAg3) || Ye2JAg3;
        const awwgyka = {};
        if (zYWW0U.message[BKkZ38]?.contextInfo) {
          cganYo("HUgXRO").assign(awwgyka, zYWW0U.message[BKkZ38].contextInfo);
        }
        ((awwgyka.isForwarded = true),
          (awwgyka.forwardingScore = NolGaU.forwardingScore || 1),
          (Ye2JAg3[BKkZ38].contextInfo = awwgyka));
        const PCxbp44 = !!NolGaU.isAi;
        const JVZ5CJc = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
          PCxbp44,
        );
        const kvmxvM = e7yIKsH(rAPpLC, Ye2JAg3, {
          ["ephemeralExpiration"]: lBe9pk(rAPpLC),
          ...NolGaU,
          ["userJid"]: Xq4DAK.creds.me.id,
          ["messageId"]: JVZ5CJc,
        });
        const aQJNCU9 = [];
        const I5Y1Mem = utuUVRe(kvmxvM.message);
        if (HJEME97(I5Y1Mem)) {
          aQJNCU9.push(g9elCb(I5Y1Mem));
        }
        if (PCxbp44 && S6S63X(rAPpLC)) {
          aQJNCU9.push(..._nlyYH2.BIZ_BOT_CONTENT);
        }
        await o32ydN(rAPpLC, kvmxvM.message, {
          ["additionalNodes"]: aQJNCU9,
          ["useCachedGroupMetadata"]: true,
          ["messageId"]: JVZ5CJc,
        });
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(kvmxvM, "append");
            });
          });
        }
        return kvmxvM;
      },
    );
    const Pd3C9bc = (0, _nlyYH2.nativeify)(
      async (rAPpLC, zYWW0U, wJgwdj = _nlyYH2.EMPTY_OBJECT) => {
        const NolGaU = (0, cceDhC6.generateMessageID)(
          Xq4DAK.creds.me.id,
          hwrorqQ,
        );
        const BKkZ38 = new (cganYo("rCCwvAT"))();
        const vHgRZBY = {
          ["logger"]: nlv0E9I,
          ["userJid"]: Xq4DAK.creds.me.id,
          ["upload"]: sRjd79Q,
          ["backgroundColor"]: (0, cceDhC6.randomHexColor)(),
          ["font"]: 0,
          ["mediaCache"]: YPRosV,
          ["options"]: HXAKfz,
          ["messageId"]: NolGaU,
        };
        const awwgyka = !!wJgwdj.mention;
        const PCxbp44 = !!wJgwdj.closeFriends;
        zYWW0U.contextInfo = (0, cceDhC6.deepMerge)(
          (zYWW0U.contextInfo ??= {}),
          {
            ["featureEligibilities"]: {
              ["canReceiveMultiReact"]: true,
              ["canBeReshared"]: true,
              ["cannotBeRanked"]: false,
            },
          },
        );
        if (wJgwdj !== _nlyYH2.EMPTY_OBJECT) {
          if (awwgyka) {
            zYWW0U.contextInfo = (0, cceDhC6.deepMerge)(zYWW0U.contextInfo, {
              ["statusAttributions"]: [
                {
                  ["type"]: 4,
                },
              ],
            });
          }
          if (PCxbp44) {
            zYWW0U.contextInfo = (0, cceDhC6.deepMerge)(zYWW0U.contextInfo, {
              ["statusSourceType"]: 4,
              ["statusAttributions"]: [
                {
                  ["type"]: 10,
                },
              ],
              ["statusAudienceMetadata"]: {
                ["audienceType"]: 2,
                ["listName"]: wJgwdj.closeFriends?.name || _nlyYH2.LIBRARY_NAME,
                ["listEmoji"]: wJgwdj.closeFriends?.emoji || "✨",
              },
            });
          }
          (0, cceDhC6.deepMerge)(vHgRZBY, wJgwdj);
        }
        const JVZ5CJc = await Ye2JAg3("status@broadcast", zYWW0U, vHgRZBY);
        for (const aQJNCU9 of rAPpLC) {
          if (kvmxvM(aQJNCU9)) {
            try {
              const I5Y1Mem =
                (AUfqKAV ? await AUfqKAV(aQJNCU9) : null) ||
                (await rdMpzF(aQJNCU9));
              for (const S6S63X of I5Y1Mem.participants) {
                if (BKkZ38.has(S6S63X.id)) {
                  continue;
                }
                BKkZ38.add(S6S63X.id);
              }
            } catch (error) {
              nlv0E9I.error(
                "Error getting metadata group from " + aQJNCU9 + ": " + error,
              );
            }
          } else if (!BKkZ38.has(aQJNCU9)) {
            BKkZ38.add(aQJNCU9);
          }
        }
        const utuUVRe = [
          {
            ["tag"]: "meta",
            ["attrs"]: PCxbp44
              ? {
                  ["status_setting"]: "customlist",
                }
              : _nlyYH2.EMPTY_OBJECT,
            ["content"]: awwgyka
              ? [
                  {
                    ["tag"]: "mentioned_users",
                    ["attrs"]: _nlyYH2.EMPTY_OBJECT,
                    ["content"]: rAPpLC.map((rAPpLC) => {
                      return {
                        ["tag"]: "to",
                        ["attrs"]: {
                          ["jid"]: rAPpLC,
                        },
                        ["content"]: undefined,
                      };
                    }),
                  },
                ]
              : undefined,
          },
        ];
        await o32ydN("status@broadcast", JVZ5CJc.message, {
          ["messageId"]: NolGaU,
          ["statusJidList"]: cganYo("EeRqOly").from(BKkZ38),
          ["additionalNodes"]: utuUVRe,
        });
        if (O9mogJ) {
          cganYo("jPWm90u").nextTick(() => {
            gKNjoj.mutex(() => {
              return GvJ5lZW(JVZ5CJc, "append");
            });
          });
        }
        if (awwgyka) {
          for (const aQJNCU9 of rAPpLC) {
            const KmEmVE = kvmxvM(aQJNCU9);
            const Iw3M6S7 = KmEmVE
              ? "groupStatusMentionMessage"
              : "statusMentionMessage";
            const bDfRTTb = (0, cceDhC6.generateMessageID)(
              Xq4DAK.creds.me.id,
              hwrorqQ,
            );
            const AdrDi2a = e7yIKsH(
              aQJNCU9,
              {
                ["messageContextInfo"]: {
                  ["messageSecret"]: (0, Wi4UFs.randomBytes)(32),
                },
                [Iw3M6S7]: {
                  ["message"]: {
                    ["protocolMessage"]: {
                      ["key"]: JVZ5CJc.key,
                      ["type"]: m7bIcP.STATUS_MENTION_MESSAGE,
                    },
                  },
                },
              },
              {
                ["messageId"]: bDfRTTb,
                ["userJid"]: Xq4DAK.creds.me.id,
              },
            );
            await o32ydN(aQJNCU9, AdrDi2a.message, {
              ["messageId"]: bDfRTTb,
              ["additionalNodes"]: [
                {
                  ["tag"]: "meta",
                  ["attrs"]: KmEmVE
                    ? {
                        ["is_group_status_mention"]: "true",
                      }
                    : {
                        ["is_status_mention"]: "true",
                      },
                  ["content"]: undefined,
                },
              ],
            });
            if (O9mogJ) {
              cganYo("jPWm90u").nextTick(() => {
                gKNjoj.mutex(() => {
                  return GvJ5lZW(AdrDi2a, "append");
                });
              });
            }
            await (0, cceDhC6.delay)(1500);
          }
        }
        return JVZ5CJc;
      },
    );
    const rCGzPI3 = (0, _nlyYH2.nativeify)(
      async (zYWW0U, wJgwdj, NolGaU = {}) => {
        const Ye2JAg3 = (0, cceDhC6.deepMerge)(
          {
            ["annotations"]: mcTrwiQ,
            ["groupStatus"]: true,
          },
          wJgwdj,
        );
        const e7yIKsH = (0, cceDhC6.deepMerge)(
          {
            ["additionalNodes"]: [
              {
                ["tag"]: "meta",
                ["attrs"]: {
                  ["is_group_status"]: "true",
                },
              },
            ],
            ["backgroundColor"]: (0, cceDhC6.randomHexColor)(),
            ["font"]: 0,
          },
          NolGaU,
        );
        Ye2JAg3.contextInfo = (0, cceDhC6.deepMerge)(
          (Ye2JAg3.contextInfo ??= {}),
          {
            ["featureEligibilities"]: {
              ["canReceiveMultiReact"]: true,
              ["canBeReshared"]: true,
              ["cannotBeRanked"]: false,
            },
            ["statusAttributions"]: [
              {
                ["type"]: 5,
                ["attributionData"]: {
                  ["groupStatus"]: {
                    ["authorJid"]: (0, cceDhC6.normalizeJid)(rAPpLC[1].user.id),
                  },
                },
              },
            ],
          },
        );
        if (e7yIKsH.closeFriends) {
          Ye2JAg3.contextInfo = (0, cceDhC6.deepMerge)(Ye2JAg3.contextInfo, {
            ["statusSourceType"]: 4,
            ["statusAttributions"]: [
              {
                ["type"]: 10,
              },
            ],
            ["statusAudienceMetadata"]: {
              ["audienceType"]: 2,
              ["listName"]: e7yIKsH.closeFriends?.name || _nlyYH2.LIBRARY_NAME,
              ["listEmoji"]: e7yIKsH.closeFriends?.emoji || "✨",
            },
          });
        }
        return await l28KBN(zYWW0U, Ye2JAg3, e7yIKsH);
      },
    );
    return {
      ...rAPpLC[1],
      ["sendMessage"]: l28KBN,
      ["waUploadToServer"]: sRjd79Q,
      ["sendText"]: tHnJ6GS,
      ["sendAdText"]: MGsoUhW,
      ["sendReact"]: CVSl0JK,
      ["sendMedia"]: VteikTt,
      ["sendPtv"]: kkinVi,
      ["sendSticker"]: CG8U9FU,
      ["sendStickerPack"]: Fr3KVi,
      ["sendContact"]: wsxw0T,
      ["sendPoll"]: KSAmacW,
      ["sendQuiz"]: YXvvwjL,
      ["sendPollResult"]: TQDPWE,
      ["sendQuizResult"]: VPwrUBL,
      ["sendAlbum"]: CrWfFG,
      ["sendInteractive"]: OOKisd,
      ["sendCarousel"]: vjTzr2y,
      ["sendLegacyButton"]: kZXTYc,
      ["sendLegacyList"]: QSNY1t3,
      ["sendRich"]: Gj5QQK,
      ["sendOrderMessage"]: c0NhNM,
      ["sendCopyMessage"]: cwXaSb,
      ["sendStatus"]: Pd3C9bc,
      ["sendGroupStatus"]: rCGzPI3,
    };
  },
));
