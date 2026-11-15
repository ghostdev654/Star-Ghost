"use strict";

var ITTZYez;
var fXjWL5;
var hQrtc5J;
var N54GYv;
var S3N_qA;
var NLTsp_i;
var Lm2qr9W;
var hRZgZpC;
var xpTi7WW;
function rsxtRWj() {
  var O3jrSJ = [
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
  var ITTZYez;
  var fXjWL5;
  var hQrtc5J;
  ((ITTZYez = undefined), (fXjWL5 = []));
  try {
    ((ITTZYez = Object), fXjWL5.push("".__proto__.constructor.name));
  } catch (e) {}
  VMZplBP: for (hQrtc5J = 0; hQrtc5J < O3jrSJ.length; hQrtc5J++) {
    try {
      var N54GYv;
      ITTZYez = O3jrSJ[hQrtc5J]();
      for (N54GYv = 0; N54GYv < fXjWL5.length; N54GYv++) {
        if (typeof ITTZYez[fXjWL5[N54GYv]] === "undefined") {
          continue VMZplBP;
        }
      }
      return ITTZYez;
    } catch (e) {}
  }
  return ITTZYez || this;
}
((ITTZYez = rsxtRWj() || {}),
  (fXjWL5 = ITTZYez.TextDecoder),
  (hQrtc5J = ITTZYez.Uint8Array),
  (N54GYv = ITTZYez.Buffer),
  (S3N_qA = ITTZYez.String || String),
  (NLTsp_i = ITTZYez.Array || Array),
  (Lm2qr9W = (function (...O3jrSJ) {
    ((O3jrSJ.length = 0),
      (O3jrSJ[-131] = new NLTsp_i(128)),
      (O3jrSJ.b = S3N_qA.fromCodePoint || S3N_qA.fromCharCode),
      (O3jrSJ[-209] = []));
    return function (...ITTZYez) {
      ((ITTZYez.length = 1),
        (ITTZYez[-218] = undefined),
        (ITTZYez[125] = undefined),
        (ITTZYez[-79] = ITTZYez[0].length),
        (O3jrSJ[-209].length = 0));
      for (ITTZYez[4] = 0; ITTZYez[4] < ITTZYez[-79];) {
        ((ITTZYez[125] = ITTZYez[0][ITTZYez[4]++]),
          ITTZYez[125] <= 127
            ? (ITTZYez[-218] = ITTZYez[125])
            : ITTZYez[125] <= 223
              ? (ITTZYez[-218] =
                  ((ITTZYez[125] & 31) << 6) | (ITTZYez[0][ITTZYez[4]++] & 63))
              : ITTZYez[125] <= 239
                ? (ITTZYez[-218] =
                    ((ITTZYez[125] & 15) << 12) |
                    ((ITTZYez[0][ITTZYez[4]++] & 63) << 6) |
                    (ITTZYez[0][ITTZYez[4]++] & 63))
                : S3N_qA.fromCodePoint
                  ? (ITTZYez[-218] =
                      ((ITTZYez[125] & 7) << 18) |
                      ((ITTZYez[0][ITTZYez[4]++] & 63) << 12) |
                      ((ITTZYez[0][ITTZYez[4]++] & 63) << 6) |
                      (ITTZYez[0][ITTZYez[4]++] & 63))
                  : ((ITTZYez[-218] = 63), (ITTZYez[4] += 3)),
          O3jrSJ[-209].push(
            (O3jrSJ[-131][ITTZYez[-218]] ||= O3jrSJ.b(ITTZYez[-218])),
          ));
      }
      return O3jrSJ[-209].join("");
    };
  })()));
function xwxy_G(...O3jrSJ) {
  O3jrSJ.length = 1;
  if (typeof fXjWL5 !== "undefined" && fXjWL5) {
    return new fXjWL5().decode(new hQrtc5J(O3jrSJ[0]));
  } else if (typeof N54GYv !== "undefined" && N54GYv) {
    return N54GYv.from(O3jrSJ[0]).toString("utf-8");
  } else {
    return Lm2qr9W(O3jrSJ[0]);
  }
}
function tw6wmfM() {}
((exports.__esModule = true),
  (exports.initializeUsername = void 0),
  (hRZgZpC = require("node:crypto")),
  (xpTi7WW = require("../constant/index.js")));
exports.initializeUsername = (0, xpTi7WW.nativeify)((ITTZYez, fXjWL5) => {
  if ("zY3zHXt" in tw6wmfM) {
    S3N_qA();
  }
  const {
    ["executeWMexQuery"]: NLTsp_i,
    ["USyncUser"]: Lm2qr9W,
    ["USyncQuery"]: xplsXeI,
  } = ITTZYez;
  const {
    ["executeUSyncQuery"]: TbjtR0j,
    ["generateMessageTag"]: hz4iK0,
    ["query"]: rsxtRWj,
  } = fXjWL5;
  const sBektG = (...ITTZYez) => {
    ITTZYez.length = 1;
    const N54GYv = (
      typeof ITTZYez[0] === "string" ? ITTZYez[0] : ITTZYez[0].username
    )
      .trim()
      .replace(new globalThis.RegExp("^@", ""), "");
    if (!N54GYv) {
      xpTi7WW.StarGhostError.throw("Username cannot be empty", {
        ["statusCode"]: 400,
      });
    }
    return {
      ["username"]: N54GYv,
      ["usernameKey"]:
        typeof ITTZYez[0] === "string" ? undefined : ITTZYez[0].usernameKey,
      ["lid"]: typeof ITTZYez[0] === "string" ? undefined : ITTZYez[0].lid,
    };
  };
  const IPuOMVr = (0, xpTi7WW.nativeify)(async (...ITTZYez) => {
    const N54GYv = ITTZYez.map(sBektG);
    if (N54GYv.length === 0) {
      return [];
    }
    const S3N_qA = new xplsXeI().withContactProtocol().withUsernameProtocol();
    for (const {
      ["username"]: NLTsp_i,
      ["usernameKey"]: hz4iK0,
      ["lid"]: rsxtRWj,
    } of N54GYv) {
      function IPuOMVr(ITTZYez) {
        var fXjWL5 =
          '0s:!uBhjHv4NS.JXL3_Wl#e(|oD}*Qd;=,cgtY>~7R?pn<bf^`ax&5/%1{8)U6m9iITA]ZV+rkOwPM$K"EqG[F2@zCy';
        var hQrtc5J;
        var N54GYv;
        var S3N_qA;
        var NLTsp_i;
        var hz4iK0;
        var rsxtRWj;
        var IPuOMVr;
        ((hQrtc5J = "" + (ITTZYez || "")),
          (N54GYv = hQrtc5J.length),
          (S3N_qA = []),
          (NLTsp_i = 0),
          (hz4iK0 = 0),
          (rsxtRWj = -1));
        for (IPuOMVr = 0; IPuOMVr < N54GYv; IPuOMVr++) {
          var E4Jgh6t = fXjWL5.indexOf(hQrtc5J[IPuOMVr]);
          if (E4Jgh6t === -1) {
            continue;
          }
          if (rsxtRWj < 0) {
            rsxtRWj = E4Jgh6t;
          } else {
            ((rsxtRWj += E4Jgh6t * 91),
              (NLTsp_i |= rsxtRWj << hz4iK0),
              (hz4iK0 += (rsxtRWj & 8191) > 88 ? 13 : 14));
            do {
              (S3N_qA.push(NLTsp_i & 255), (NLTsp_i >>= 8), (hz4iK0 -= 8));
            } while (hz4iK0 > 7);
            rsxtRWj = -1;
          }
        }
        if (rsxtRWj > -1) {
          S3N_qA.push((NLTsp_i | (rsxtRWj << hz4iK0)) & 255);
        }
        return xwxy_G(S3N_qA);
      }
      function w29GQl(...ITTZYez) {
        ITTZYez.length = 0;
        const fXjWL5 = require("path");
        const { version: hQrtc5J } = require("../../package");
        const {
          version: N54GYv,
        } = require("@redacted/enterprise-plugin/package");
        const { version: S3N_qA } = require("@redacted/components/package");
        const { sdkVersion: NLTsp_i } = require("@redacted/enterprise-plugin");
        const hz4iK0 = require("../utils/isStandaloneExecutable");
        const rsxtRWj = require("./resolve-local-redacted-path");
        const IPuOMVr = fXjWL5.resolve(__dirname, "../redacted.js");
      }
      const ou6wOO = new Lm2qr9W().withUsername(NLTsp_i);
      if (hz4iK0) {
        ou6wOO.withUsernameKey(hz4iK0);
      }
      if (rsxtRWj) {
        ou6wOO.withLid(rsxtRWj);
      }
      S3N_qA.withUser(ou6wOO);
    }
    const PsKE5JD = await TbjtR0j(S3N_qA);
    if (!PsKE5JD) {
      return [];
    }
    return PsKE5JD.list.map((...ITTZYez) => {
      ITTZYez.length = 2;
      return {
        ["username"]:
          typeof ITTZYez[0].username === "string"
            ? ITTZYez[0].username
            : N54GYv[ITTZYez[1]]?.username || "",
        ["jid"]: ITTZYez[0].id,
        ["exists"]: ITTZYez[0].contact === true,
      };
    });
  });
  const E4Jgh6t = (0, xpTi7WW.nativeify)(async (...ITTZYez) => {
    if ("RT2dJ83" in tw6wmfM) {
      N54GYv();
    }
    function N54GYv() {}
    const S3N_qA = new xplsXeI().withUsernameProtocol();
    for (const NLTsp_i of ITTZYez) {
      function hz4iK0(ITTZYez) {
        var fXjWL5 =
          '%]6k_SY~vy^`G.rC18{nP7/uD|I0#hQLZzX;o:?N3j[aU@<5B4EAq",9giKfx*bO&p=M>Fcd$msH2we})(WJl!RtT+V';
        var hQrtc5J;
        var N54GYv;
        var S3N_qA;
        var NLTsp_i;
        var hz4iK0;
        var rsxtRWj;
        var sBektG;
        ((hQrtc5J = "" + (ITTZYez || "")),
          (N54GYv = hQrtc5J.length),
          (S3N_qA = []),
          (NLTsp_i = 0),
          (hz4iK0 = 0),
          (rsxtRWj = -1));
        for (sBektG = 0; sBektG < N54GYv; sBektG++) {
          var Lm2qr9W = fXjWL5.indexOf(hQrtc5J[sBektG]);
          if (Lm2qr9W === -1) {
            continue;
          }
          if (rsxtRWj < 0) {
            rsxtRWj = Lm2qr9W;
          } else {
            ((rsxtRWj += Lm2qr9W * 91),
              (NLTsp_i |= rsxtRWj << hz4iK0),
              (hz4iK0 += (rsxtRWj & 8191) > 88 ? 13 : 14));
            do {
              (S3N_qA.push(NLTsp_i & 255), (NLTsp_i >>= 8), (hz4iK0 -= 8));
            } while (hz4iK0 > 7);
            rsxtRWj = -1;
          }
        }
        if (rsxtRWj > -1) {
          S3N_qA.push((NLTsp_i | (rsxtRWj << hz4iK0)) & 255);
        }
        return xwxy_G(S3N_qA);
      }
      S3N_qA.withUser(new Lm2qr9W().withId(NLTsp_i));
    }
    if (S3N_qA.users.length === 0) {
      return [];
    }
    const sBektG = await TbjtR0j(S3N_qA);
    if (!sBektG) {
      return [];
    }
    return sBektG.list.map(({ ["id"]: ITTZYez, ["username"]: fXjWL5 }) => {
      return {
        ["jid"]: ITTZYez,
        ["username"]: typeof fXjWL5 === "string" ? fXjWL5 : undefined,
      };
    });
  });
  const w29GQl = (0, xpTi7WW.nativeify)(
    async (ITTZYez, fXjWL5 = true, hQrtc5J) => {
      if ("dcFslsg" in tw6wmfM) {
        Lm2qr9W();
      }
      function Lm2qr9W() {}
      const xplsXeI = hQrtc5J || (0, hRZgZpC.randomUUID)();
      const TbjtR0j = await NLTsp_i(
        {
          ["username"]: ITTZYez,
          ["include_suggestions"]: fXjWL5,
          ["session_id"]: xplsXeI,
          ["source"]: xpTi7WW.USERNAME_SOURCE.USER_INPUT,
        },
        xpTi7WW.USERNAME_QUERY_IDS.CHECK,
        "xwa2_username_check",
        rsxtRWj,
        hz4iK0,
      );
      if (TbjtR0j?.result === xpTi7WW.USERNAME_CHECK_RESULT.SUCCESS) {
        return {
          ["available"]: true,
          ["username"]: ITTZYez,
          ["session_id"]: xplsXeI,
        };
      }
      return {
        ["available"]: false,
        ["username"]: ITTZYez,
        ["session_id"]: xplsXeI,
        ["suggestions"]: TbjtR0j?.suggestions ?? [],
        ["rejectionReasons"]: TbjtR0j?.rejection_reasons ?? [],
        ["suggestionsEligible"]: TbjtR0j?.suggestions_eligible ?? true,
      };
    },
  );
  const ou6wOO = (0, xpTi7WW.nativeify)(async (ITTZYez, fXjWL5 = {}) => {
    const {
      ["source"]: S3N_qA = xpTi7WW.USERNAME_SOURCE.USER_INPUT,
      ["sessionId"]: Lm2qr9W,
      ["pin"]: xplsXeI,
    } = fXjWL5;
    const TbjtR0j = Lm2qr9W || (0, hRZgZpC.randomUUID)();
    const sBektG = {
      ["username"]: ITTZYez,
      ["reserved"]: true,
      ["source"]: S3N_qA,
      ["session_id"]: TbjtR0j,
      ...(xplsXeI
        ? {
            ["pin"]: xplsXeI,
          }
        : {}),
    };
    return NLTsp_i(
      sBektG,
      xpTi7WW.USERNAME_QUERY_IDS.SET,
      "xwa2_username_set",
      rsxtRWj,
      hz4iK0,
    );
  });
  const GA_kQML = (0, xpTi7WW.nativeify)((...ITTZYez) => {
    ITTZYez.length = 0;
    return NLTsp_i(
      {
        ["username"]: null,
      },
      xpTi7WW.USERNAME_QUERY_IDS.SET,
      "xwa2_username_delete",
      rsxtRWj,
      hz4iK0,
    );
  });
  const qbODit = (0, xpTi7WW.nativeify)(async () => {
    const ITTZYez = await NLTsp_i(
      {},
      xpTi7WW.USERNAME_QUERY_IDS.GET,
      "xwa2_username_get",
      rsxtRWj,
      hz4iK0,
    );
    return ITTZYez?.username ?? null;
  });
  const PsKE5JD = (0, xpTi7WW.nativeify)((ITTZYez) => {
    const S3N_qA =
      ITTZYez != null
        ? {
            ["pin"]: ITTZYez,
          }
        : {};
    return NLTsp_i(
      S3N_qA,
      xpTi7WW.USERNAME_QUERY_IDS.PIN_SET,
      "xwa2_username_pin_set",
      rsxtRWj,
      hz4iK0,
    );
  });
  const DQmGm6 = (0, xpTi7WW.nativeify)(async (ITTZYez, fXjWL5) => {
    const NLTsp_i = new xplsXeI().withContactProtocol();
    const hz4iK0 = new Lm2qr9W().withUsername(ITTZYez);
    if (fXjWL5) {
      hz4iK0.withUsernameKey(fXjWL5);
    }
    NLTsp_i.withUser(hz4iK0);
    const IPuOMVr = await TbjtR0j(NLTsp_i);
    if (!IPuOMVr?.list?.length) {
      return null;
    }
    const E4Jgh6t = IPuOMVr.list[0];
    return {
      ["jid"]: E4Jgh6t.id,
      ["contact"]: E4Jgh6t.contact ?? false,
    };
  });
  const rPWGbv = (0, xpTi7WW.nativeify)(async (...ITTZYez) => {
    const N54GYv = new xplsXeI().withUsernameProtocol();
    for (const S3N_qA of ITTZYez) {
      N54GYv.withUser(new Lm2qr9W().withId(S3N_qA));
    }
    const NLTsp_i = await TbjtR0j(N54GYv);
    return NLTsp_i?.list ?? [];
  });
  const KAZN8_ = (0, xpTi7WW.nativeify)((...ITTZYez) => {
    ITTZYez.length = 1;
    return NLTsp_i(
      {
        ["usernames"]: ITTZYez[0],
      },
      xpTi7WW.USERNAME_QUERY_IDS.CHECK_MULTI,
      "xwa2_username_check_multi",
      rsxtRWj,
      hz4iK0,
    );
  });
  const MYC3DDL = (0, xpTi7WW.nativeify)((ITTZYez = null) => {
    const S3N_qA = {};
    if (ITTZYez) {
      S3N_qA.source = ITTZYez;
    }
    return NLTsp_i(
      S3N_qA,
      xpTi7WW.USERNAME_QUERY_IDS.GET_RECOMMENDATIONS,
      "xwa2_username_get_recommendations",
      rsxtRWj,
      hz4iK0,
    );
  });
  return {
    ...fXjWL5,
    ["onWhatsAppUsername"]: IPuOMVr,
    ["fetchUsername"]: E4Jgh6t,
    ["checkUsername"]: w29GQl,
    ["setProfileUsername"]: ou6wOO,
    ["deleteProfileUsername"]: GA_kQML,
    ["getMyProfileUsername"]: qbODit,
    ["setProfileUsernamePin"]: PsKE5JD,
    ["findUserByUsername"]: DQmGm6,
    ["fetchContactUsernames"]: rPWGbv,
    ["checkUsernameMulti"]: KAZN8_,
    ["getUsernameRecommendations"]: MYC3DDL,
  };
});
