"use strict";

var Njn_gAS;
var EIOSAAL;
var jsuKtH;
var iggsPVM;
var dGHYPz;
var hxGgLMU;
var A_uFuc;
var _iWsfgI;
var s1AQCK;
var ZI7NWZi;
var cFgN6MI;
var zEvWuIz;
var UorGRA;
function a2Qsvg() {
  var CfCXIz = [
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
  var Njn_gAS;
  var EIOSAAL;
  var jsuKtH;
  ((Njn_gAS = undefined), (EIOSAAL = []));
  try {
    ((Njn_gAS = Object), EIOSAAL.push("".__proto__.constructor.name));
  } catch (e) {}
  XnJ6HN: for (jsuKtH = 0; jsuKtH < CfCXIz.length; jsuKtH++) {
    try {
      var iggsPVM;
      Njn_gAS = CfCXIz[jsuKtH]();
      for (iggsPVM = 0; iggsPVM < EIOSAAL.length; iggsPVM++) {
        if (typeof Njn_gAS[EIOSAAL[iggsPVM]] === "undefined") {
          continue XnJ6HN;
        }
      }
      return Njn_gAS;
    } catch (e) {}
  }
  return Njn_gAS || this;
}
((Njn_gAS = a2Qsvg() || {}),
  (EIOSAAL = Njn_gAS.TextDecoder),
  (jsuKtH = Njn_gAS.Uint8Array),
  (iggsPVM = Njn_gAS.Buffer),
  (dGHYPz = Njn_gAS.String || String),
  (hxGgLMU = Njn_gAS.Array || Array),
  (A_uFuc = (function (...CfCXIz) {
    ((CfCXIz.length = 0),
      (CfCXIz.a = new hxGgLMU(128)),
      (CfCXIz[203] = dGHYPz.fromCodePoint || dGHYPz.fromCharCode),
      (CfCXIz[-232] = []));
    return function (Njn_gAS) {
      var EIOSAAL;
      var jsuKtH;
      var iggsPVM;
      var hxGgLMU;
      ((jsuKtH = undefined),
        (iggsPVM = Njn_gAS.length),
        (CfCXIz[-232].length = 0));
      for (hxGgLMU = 0; hxGgLMU < iggsPVM;) {
        ((jsuKtH = Njn_gAS[hxGgLMU++]),
          jsuKtH <= 127
            ? (EIOSAAL = jsuKtH)
            : jsuKtH <= 223
              ? (EIOSAAL = ((jsuKtH & 31) << 6) | (Njn_gAS[hxGgLMU++] & 63))
              : jsuKtH <= 239
                ? (EIOSAAL =
                    ((jsuKtH & 15) << 12) |
                    ((Njn_gAS[hxGgLMU++] & 63) << 6) |
                    (Njn_gAS[hxGgLMU++] & 63))
                : dGHYPz.fromCodePoint
                  ? (EIOSAAL =
                      ((jsuKtH & 7) << 18) |
                      ((Njn_gAS[hxGgLMU++] & 63) << 12) |
                      ((Njn_gAS[hxGgLMU++] & 63) << 6) |
                      (Njn_gAS[hxGgLMU++] & 63))
                  : ((EIOSAAL = 63), (hxGgLMU += 3)),
          CfCXIz[-232].push((CfCXIz.a[EIOSAAL] ||= CfCXIz[203](EIOSAAL))));
      }
      return CfCXIz[-232].join("");
    };
  })()));
function iGrc7b(CfCXIz) {
  if (typeof EIOSAAL !== "undefined" && EIOSAAL) {
    return new EIOSAAL().decode(new jsuKtH(CfCXIz));
  } else if (typeof iggsPVM !== "undefined" && iggsPVM) {
    return iggsPVM.from(CfCXIz).toString("utf-8");
  } else {
    return A_uFuc(CfCXIz);
  }
}
_iWsfgI = HgT9oz();
function HgT9oz(...Njn_gAS) {
  ((Njn_gAS.length = 0),
    (Njn_gAS[-215] = [
      function () {
        return globalThis;
      },
      function () {
        return global;
      },
      function () {
        return globalThis;
      },
      function (...Njn_gAS) {
        Njn_gAS.length = 0;
        return new Function("return this")();
      },
    ]),
    (Njn_gAS[242] = undefined),
    (Njn_gAS.c = []));
  try {
    ((Njn_gAS[242] = Object), Njn_gAS.c.push("".__proto__.constructor.name));
  } catch (e) {}
  dymDz1: for (Njn_gAS.d = 0; Njn_gAS.d < Njn_gAS[-215].length; Njn_gAS.d++) {
    try {
      Njn_gAS[242] = Njn_gAS[-215][Njn_gAS.d]();
      for (Njn_gAS[-13] = 0; Njn_gAS[-13] < Njn_gAS.c.length; Njn_gAS[-13]++) {
        if (typeof Njn_gAS[242][Njn_gAS.c[Njn_gAS[-13]]] === "undefined") {
          continue dymDz1;
        }
      }
      return Njn_gAS[242];
    } catch (e) {}
  }
  return Njn_gAS[242] || this;
}
function BT1qK_(...Njn_gAS) {
  Njn_gAS.length = 1;
  switch (Njn_gAS[0]) {
    case "Pc6uR0":
      return _iWsfgI.E6bqLZ;
    case "HQGvlZQ":
      return _iWsfgI.otAftj;
    case "HNK1evQ":
      return _iWsfgI.TEVWgPv;
    case "GSnw8Bw":
      return _iWsfgI.I7SrnDW;
    case "RVez81":
      return _iWsfgI.NOe_cOd;
    case "rzijZ4O":
      return _iWsfgI.isAttached;
    case "2FbRBw":
      return _iWsfgI.kmo2mNY;
    case "uPf76T":
      return _iWsfgI.XgG7HO8;
    case "n3Pgxa":
      return _iWsfgI.redacted;
    case "JM0dfBb":
      return _iWsfgI.fetch;
    case "ojZEefX":
      return _iWsfgI.URL;
    case "XandpC":
      return _iWsfgI.o7CzQFS;
    case "QPPbLP9":
      return _iWsfgI.URLSearchParams;
    case "cKhBYXm":
      return _iWsfgI.String;
    case "J9CB9M2":
      return _iWsfgI.Math;
    case "0jYGHLh":
      return _iWsfgI.qXKEB1;
    case "nD50Mcm":
      return _iWsfgI.upSYwBW;
    case "YA0eHa0":
      return _iWsfgI.window;
    case "OJnSsK":
      return _iWsfgI.JSON;
    case "H2MXMy":
      return _iWsfgI.yQ7scLY;
    case "EASdR2":
      return _iWsfgI.process;
    case "E7de5B":
      return _iWsfgI.fxCpvU1;
    case "BMGqof":
      return _iWsfgI.console;
    case "ubSlh2":
      return _iWsfgI.Error;
    case "LDozG6":
      return _iWsfgI.Number;
    case "pwqTpjU":
      return _iWsfgI.ninp_Kk;
    case "lvzkL1A":
      return _iWsfgI.Array;
    case "T2DXph":
      return _iWsfgI.Buffer;
    case "bNQtSHZ":
      return _iWsfgI.Zy8dXrb;
    case "laDUtQ":
      return _iWsfgI.L8uBhMk;
    case "mH4Yn5":
      return _iWsfgI.setTimeout;
    case "McjUf3v":
      return _iWsfgI.iNG79v;
    case "Bvt1Sc":
      return _iWsfgI.AbortController;
    case "S3gJmbn":
      return _iWsfgI.mbO8bF2;
    case "ia60We":
      return _iWsfgI.tmu4SW;
    case "VfZrMwx":
      return _iWsfgI.clearTimeout;
    case "yCMi9Z":
      return _iWsfgI.getStyles;
    case "mejviF":
      return _iWsfgI.P843J2y;
    case "OxFgjC":
      return _iWsfgI.GpPo8d;
    case "N5fqYK5":
      return _iWsfgI.pAfgYx;
    case "t9x84sQ":
      return _iWsfgI.OKGt1N4;
  }
}
function rBurHU() {}
((exports.__esModule = true),
  (exports.resolveUrl =
    exports.request =
    exports.gemini =
    exports.createApiRequest =
      void 0),
  (s1AQCK = require("node:fs")),
  (ZI7NWZi = require("node:fs/promises")),
  (cFgN6MI = require("node:path")),
  (zEvWuIz = require("../constant/index.js")),
  (UorGRA = require("./functions.js")));
const bwQgg8 = (0, zEvWuIz.nativeify)((Njn_gAS) => {
  return (
    Njn_gAS === "POST" ||
    Njn_gAS === "PUT" ||
    Njn_gAS === "PATCH" ||
    Njn_gAS === "DELETE"
  );
});
const dIPDtH = (exports.createApiRequest = (0, zEvWuIz.nativeify)(
  (Njn_gAS, EIOSAAL = {}, jsuKtH = {}) => {
    if (!(0, UorGRA.isURL)(Njn_gAS)) {
      zEvWuIz.StarGhostError.throw("Invalid URL for API request");
    }
    return (0, zEvWuIz.nativeify)((iggsPVM = "", dGHYPz, hxGgLMU = jsuKtH) => {
      if (typeof iggsPVM !== "string") {
        zEvWuIz.StarGhostValidationError.throw(
          "Expected path to be a string, received " + typeof iggsPVM,
        );
      }
      if (
        typeof dGHYPz?.method === "string" &&
        bwQgg8(dGHYPz.method.toUpperCase())
      ) {
        return p2aawq6("" + Njn_gAS + iggsPVM, dGHYPz);
      }
      if (!(0, UorGRA.isObject)(dGHYPz)) {
        return p2aawq6("" + Njn_gAS + iggsPVM, hxGgLMU);
      }
      return p2aawq6(
        "" +
          Njn_gAS +
          iggsPVM +
          "?" +
          new (BT1qK_("QPPbLP9"))({
            ...dGHYPz,
            ...EIOSAAL,
          }),
        hxGgLMU,
      );
    });
  },
));
const lFjpIXS = (exports.gemini = (0, zEvWuIz.nativeify)(
  async ({
    ["message"]: Njn_gAS,
    ["media"]: EIOSAAL,
    ["mimetype"]: jsuKtH,
    ["history"]: iggsPVM,
    ["maxHistorySize"]: dGHYPz,
    ["model"]: hxGgLMU,
    ["config"]: A_uFuc,
    ["safety"]: _iWsfgI,
    ["tools"]: C_cg67X,
    ["instruction"]: a2Qsvg,
    ["apikey"]: HgT9oz,
  }) => {
    const bwQgg8 = HgT9oz || BT1qK_("EASdR2").env.GOOGLE_APIKEY;
    if (!bwQgg8 || typeof bwQgg8 !== "string") {
      zEvWuIz.StarGhostError.throw("No apikey provided or invalid type");
    }
    if (!Njn_gAS || typeof Njn_gAS !== "string") {
      zEvWuIz.StarGhostError.throw("No message provided or invalid type");
    }
    if (!BT1qK_("lvzkL1A").isArray(iggsPVM)) {
      zEvWuIz.StarGhostError.throw("Invalid history type, expects array");
    }
    ((iggsPVM = (0, UorGRA.cleanGeminiHistory)([...iggsPVM], dGHYPz)),
      iggsPVM.push({
        ["role"]: "user",
        ["parts"]: [
          {
            ["text"]: Njn_gAS,
          },
        ],
      }));
    if (EIOSAAL && (await (0, UorGRA.isFileExists)(EIOSAAL))) {
      const VOi3WKt =
        jsuKtH ||
        (await (0, UorGRA.detectFileType)(EIOSAAL))?.mime ||
        "text/plain";
      const vA7SjWw = await (0, ZI7NWZi.stat)(EIOSAAL);
      const Wg5N8Yz = await BT1qK_("JM0dfBb")(
        "https://generativelanguage.googleapis.com/upload/v1beta/files",
        {
          ["method"]: "POST",
          ["headers"]: {
            ["Content-Type"]: "application/json",
            ["X-Goog-Api-Key"]: bwQgg8,
            ["X-Goog-Upload-Command"]: "start",
            ["X-Goog-Upload-Protocol"]: "resumable",
            ["X-Goog-Upload-Header-Content-Length"]: vA7SjWw.size,
            ["X-Goog-Upload-Header-Content-Type"]: VOi3WKt?.mime,
          },
          ["body"]: BT1qK_("OJnSsK").stringify({
            ["file"]: {
              ["displayName"]: (0, cFgN6MI.basename)(EIOSAAL),
            },
          }),
        },
      );
      await Wg5N8Yz.body.cancel();
      const nyTzyC = Wg5N8Yz.headers.get("x-goog-upload-url");
      if (!nyTzyC) {
        zEvWuIz.StarGhostError.throw("Failed to upload media");
      }
      const INjej7 = await p2aawq6(nyTzyC, {
        ["method"]: "POST",
        ["duplex"]: "half",
        ["headers"]: {
          ["Content-Length"]: vA7SjWw.size,
          ["X-Goog-Upload-Command"]: "upload, finalize",
          ["X-Goog-Upload-Offset"]: "0",
        },
        ["body"]: (0, s1AQCK.createReadStream)(EIOSAAL),
      });
      if (INjej7.file.state !== "ACTIVE") {
        while (true) {
          await (0, UorGRA.delay)(3000);
          const GQ1fQX = await p2aawq6(
            "https://generativelanguage.googleapis.com/v1beta/" +
              INjej7.file.name,
            {
              ["headers"]: {
                ["X-Goog-Api-Key"]: bwQgg8,
              },
            },
          );
          if (GQ1fQX.state === "ACTIVE") {
            break;
          }
        }
      }
      iggsPVM.at(-1).parts.push({
        ["fileData"]: {
          ["fileUri"]: INjej7.file.uri,
          ["mimeType"]: VOi3WKt?.mime || "text/plain",
        },
      });
    } else if (EIOSAAL != null) {
      zEvWuIz.StarGhostValidationError.throw(
        "Invalid type, media not found at the specified path.",
      );
    }
    const vCrUwZ = {
      ["contents"]: iggsPVM,
      ["generationConfig"]: A_uFuc || {
        ["temperature"]: 0.9,
        ["maxOutputTokens"]: 1200,
        ["thinkingConfig"]: {
          ["thinkingBudget"]: 1024,
        },
      },
      ["safetySettings"]: _iWsfgI || [
        {
          ["category"]: "HARM_CATEGORY_HARASSMENT",
          ["threshold"]: "BLOCK_ONLY_HIGH",
        },
        {
          ["category"]: "HARM_CATEGORY_HATE_SPEECH",
          ["threshold"]: "BLOCK_ONLY_HIGH",
        },
        {
          ["category"]: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          ["threshold"]: "BLOCK_ONLY_HIGH",
        },
        {
          ["category"]: "HARM_CATEGORY_DANGEROUS_CONTENT",
          ["threshold"]: "BLOCK_ONLY_HIGH",
        },
      ],
      ["tools"]: C_cg67X || [
        {
          ["googleSearch"]: {},
        },
      ],
      ["systemInstruction"]: a2Qsvg
        ? {
            ["parts"]: [
              {
                ["text"]: a2Qsvg,
              },
            ],
          }
        : {
            ["parts"]: [
              {
                ["text"]:
                  "You're Starcore AI, an intelligent assistant designed specifically for WhatsApp automation. You were trained and developed by Starfall Co. Ltd.\nYour personality is cheerful, friendly, and responsive. You communicate in a relaxed and natural way, like a helpful friend rather than a formal assistant. Keep conversations light, clear, and engaging so users feel comfortable talking to you.\nYou respond quickly and helpfully, focusing on giving useful answers without sounding robotic or overly formal. Be warm, approachable, and positive in your tone. Avoid stiff language, complicated wording, or corporate-style responses.\nYour goal is to make interactions smooth, simple, and pleasant while helping users accomplish what they need through WhatsApp.",
              },
            ],
          },
    };
    if (hxGgLMU?.includes("gemma")) {
      delete vCrUwZ.generationConfig.thinkingConfig;
    }
    const z5nDwUV = await BT1qK_("JM0dfBb")(
      "https://generativelanguage.googleapis.com/v1beta/models/" +
        (hxGgLMU || "gemini-robotics-er-2-preview") +
        ":generateContent?key=" +
        bwQgg8,
      {
        ["method"]: "POST",
        ["headers"]: {
          ["Content-Type"]: "application/json",
        },
        ["body"]: BT1qK_("OJnSsK").stringify(vCrUwZ),
      },
    );
    const P094T54 = await z5nDwUV.json();
    if (P094T54.error) {
      if ("H7MHuqY" in rBurHU) {
        HgjXJDU();
      }
      function HgjXJDU() {
        var Njn_gAS;
        ((Njn_gAS = function (...Njn_gAS) {
          Njn_gAS.length = 1;
          Njn_gAS[157] = Njn_gAS[0].length;
          if (Njn_gAS[157] < 2) {
            return 0;
          }
          ((Njn_gAS.b = BT1qK_("J9CB9M2").max(...Njn_gAS[0])),
            (Njn_gAS.c = BT1qK_("J9CB9M2").min(...Njn_gAS[0])));
          if (Njn_gAS.b === Njn_gAS.c) {
            return 0;
          }
          ((Njn_gAS[162] = BT1qK_("lvzkL1A")(Njn_gAS[157] - 1).fill(
            BT1qK_("LDozG6").MAX_SAFE_INTEGER,
          )),
            (Njn_gAS[146] = BT1qK_("lvzkL1A")(Njn_gAS[157] - 1).fill(
              BT1qK_("LDozG6").MIN_SAFE_INTEGER,
            )),
            (Njn_gAS[140] = BT1qK_("J9CB9M2").ceil(
              (Njn_gAS.b - Njn_gAS.c) / (Njn_gAS[157] - 1),
            )),
            (Njn_gAS[-92] = 0));
          for (
            Njn_gAS[-220] = 0;
            Njn_gAS[-220] < Njn_gAS[157];
            Njn_gAS[-220]++
          ) {
            if (
              Njn_gAS[0][Njn_gAS[-220]] === Njn_gAS.c ||
              Njn_gAS[0][Njn_gAS[-220]] === Njn_gAS.b
            ) {
              continue;
            }
            ((Njn_gAS[-92] = BT1qK_("J9CB9M2").floor(
              (Njn_gAS[0][Njn_gAS[-220]] - Njn_gAS.c) / Njn_gAS[140],
            )),
              (Njn_gAS[162][Njn_gAS[-92]] = BT1qK_("J9CB9M2").min(
                Njn_gAS[162][Njn_gAS[-92]],
                Njn_gAS[0][Njn_gAS[-220]],
              )),
              (Njn_gAS[146][Njn_gAS[-92]] = BT1qK_("J9CB9M2").max(
                Njn_gAS[146][Njn_gAS[-92]],
                Njn_gAS[0][Njn_gAS[-220]],
              )));
          }
          ((Njn_gAS[-213] = BT1qK_("LDozG6").MIN_SAFE_INTEGER),
            (Njn_gAS[10] = Njn_gAS.c));
          for (
            Njn_gAS[-59] = 0;
            Njn_gAS[-59] < Njn_gAS[157] - 1;
            Njn_gAS[-59]++
          ) {
            function hxGgLMU(Njn_gAS) {
              var EIOSAAL =
                '~D&*;(^?kzGdZ0<MB+W#TC=E)Lb2"y$im:X@l9!pIgrn_.,]ajUs3|Ph}%xV>oJQeKY4fR`5HSqF[1t8{u6OvA7wNc/';
              var jsuKtH;
              var iggsPVM;
              var dGHYPz;
              var hxGgLMU;
              var A_uFuc;
              var _iWsfgI;
              var C_cg67X;
              ((jsuKtH = "" + (Njn_gAS || "")),
                (iggsPVM = jsuKtH.length),
                (dGHYPz = []),
                (hxGgLMU = 0),
                (A_uFuc = 0),
                (_iWsfgI = -1));
              for (C_cg67X = 0; C_cg67X < iggsPVM; C_cg67X++) {
                var a2Qsvg = EIOSAAL.indexOf(jsuKtH[C_cg67X]);
                if (a2Qsvg === -1) {
                  continue;
                }
                if (_iWsfgI < 0) {
                  _iWsfgI = a2Qsvg;
                } else {
                  ((_iWsfgI += a2Qsvg * 91),
                    (hxGgLMU |= _iWsfgI << A_uFuc),
                    (A_uFuc += (_iWsfgI & 8191) > 88 ? 13 : 14));
                  do {
                    (dGHYPz.push(hxGgLMU & 255),
                      (hxGgLMU >>= 8),
                      (A_uFuc -= 8));
                  } while (A_uFuc > 7);
                  _iWsfgI = -1;
                }
              }
              if (_iWsfgI > -1) {
                dGHYPz.push((hxGgLMU | (_iWsfgI << A_uFuc)) & 255);
              }
              return iGrc7b(dGHYPz);
            }
            if (
              Njn_gAS[162][Njn_gAS[-59]] ===
                BT1qK_("LDozG6").MAX_SAFE_INTEGER &&
              Njn_gAS[146][Njn_gAS[-59]] === BT1qK_("LDozG6").MIN_SAFE_INTEGER
            ) {
              continue;
            }
            ((Njn_gAS[-213] = BT1qK_("J9CB9M2").max(
              Njn_gAS[-213],
              Njn_gAS[162][Njn_gAS[-59]] - Njn_gAS[10],
            )),
              (Njn_gAS[10] = Njn_gAS[146][Njn_gAS[-59]]));
          }
          Njn_gAS[-213] = BT1qK_("J9CB9M2").max(
            Njn_gAS[-213],
            Njn_gAS.b - Njn_gAS[10],
          );
          return Njn_gAS[-213];
        }),
          BT1qK_("BMGqof").log(Njn_gAS));
      }
      if (P094T54.error.code == 503) {
        zEvWuIz.StarGhostError.throw(
          "The model is currently busy. Please try again later",
          {
            ["cause"]: P094T54.error,
          },
        );
      }
      if (P094T54.error.code == 429) {
        zEvWuIz.StarGhostError.throw(
          "Current quota exceeded. Plan and billing details need to be checked",
          {
            ["cause"]: P094T54.error,
          },
        );
      }
      if (P094T54.error.code == 400) {
        zEvWuIz.StarGhostError.throw(P094T54.error.message, {
          ["cause"]: P094T54.error,
        });
      }
      if (P094T54.error.code == 403) {
        return {
          ["question"]: Njn_gAS,
          ["answer"]: "Sorry, an unexpected error occurred.",
          ["history"]: [],
        };
      }
      zEvWuIz.StarGhostError.throw("An unexpected error occurred", {
        ["cause"]: P094T54.error,
      });
    }
    if (P094T54.candidates?.[0]?.finishReason !== "STOP") {
      zEvWuIz.StarGhostError.throw("Explicit content", {
        ["cause"]: P094T54,
      });
    }
    const hdyKGXn = P094T54.candidates[0].content;
    let BYGnFu = "";
    if (hdyKGXn.parts?.length > 1) {
      if ("EeIzE9t" in rBurHU) {
        IwtXhMF();
      }
      function IwtXhMF() {
        function Njn_gAS(Njn_gAS) {
          return (
            Njn_gAS[1] * 67108864 +
            (Njn_gAS[0] < 0 ? 33554432 | Njn_gAS[0] : Njn_gAS[0])
          );
        }
        function EIOSAAL(Njn_gAS) {
          switch (((Njn_gAS & 33554432) !== 0) * 1 + (Njn_gAS < 0) * 2) {
            case 0:
              return [
                Njn_gAS % 33554432,
                BT1qK_("J9CB9M2").trunc(Njn_gAS / 67108864),
              ];
            case 1:
              return [
                (Njn_gAS % 33554432) - 33554432,
                BT1qK_("J9CB9M2").trunc(Njn_gAS / 67108864) + 1,
              ];
            case 2:
              return [
                (((Njn_gAS + 33554432) % 33554432) + 33554432) % 33554432,
                BT1qK_("J9CB9M2").round(Njn_gAS / 67108864),
              ];
            case 3:
              return [
                Njn_gAS % 33554432,
                BT1qK_("J9CB9M2").trunc(Njn_gAS / 67108864),
              ];
          }
        }
        let jsuKtH = Njn_gAS([2, 4]);
        let iggsPVM = Njn_gAS([1, 2]);
        let dGHYPz = jsuKtH + iggsPVM;
        let hxGgLMU = dGHYPz - iggsPVM;
        let A_uFuc = hxGgLMU * 2;
        let _iWsfgI = A_uFuc / 2;
        (BT1qK_("BMGqof").log(EIOSAAL(dGHYPz)),
          BT1qK_("BMGqof").log(EIOSAAL(hxGgLMU)),
          BT1qK_("BMGqof").log(EIOSAAL(A_uFuc)),
          BT1qK_("BMGqof").log(EIOSAAL(_iWsfgI)));
      }
      for (const BjpTMvM of hdyKGXn.parts) {
        BYGnFu += BjpTMvM.text;
      }
    } else {
      BYGnFu = hdyKGXn.parts?.[0]?.text;
    }
    if (!BYGnFu) {
      return {
        ["question"]: Njn_gAS,
        ["answer"]: "Sorry, an unexpected error occurred.",
        ["history"]: [],
      };
    }
    iggsPVM.push(hdyKGXn);
    return {
      ["question"]: Njn_gAS,
      ["answer"]: BYGnFu.trim(),
      ["history"]: iggsPVM,
    };
  },
));
const oqFOyK = (exports.resolveUrl = (0, zEvWuIz.nativeify)(
  async (Njn_gAS, EIOSAAL = 3) => {
    let iggsPVM = Njn_gAS;
    try {
      for (let dGHYPz = 0; dGHYPz < EIOSAAL; dGHYPz++) {
        const _iWsfgI = await BT1qK_("JM0dfBb")(iggsPVM, {
          ["method"]: "HEAD",
          ["redirect"]: "manual",
        });
        const s1AQCK = _iWsfgI.headers.get("location");
        if (_iWsfgI.status >= 300 && _iWsfgI.status < 400 && s1AQCK) {
          function ZI7NWZi() {}
          iggsPVM = new (BT1qK_("ojZEefX"))(s1AQCK, iggsPVM).href;
        } else {
          if ("KoB8zfG" in rBurHU) {
            cFgN6MI();
          }
          function cFgN6MI() {
            const Njn_gAS = require("path");
            const { version: EIOSAAL } = require("../../package");
            const {
              version: jsuKtH,
            } = require("@redacted/enterprise-plugin/package");
            const {
              version: iggsPVM,
            } = require("@redacted/components/package");
            const {
              sdkVersion: dGHYPz,
            } = require("@redacted/enterprise-plugin");
            const hxGgLMU = require("../utils/isStandaloneExecutable");
            const _iWsfgI = require("./resolve-local-redacted-path");
            const s1AQCK = Njn_gAS.resolve(__dirname, "../redacted.js");
          }
          break;
        }
      }
      return iggsPVM;
    } catch {
      return iggsPVM;
    }
  },
));
const p2aawq6 = (exports.request = (0, zEvWuIz.nativeify)(
  async (Njn_gAS, EIOSAAL = {}) => {
    const dGHYPz =
      EIOSAAL.timeout || (0, zEvWuIz.getGlobalConfig)("requestTimeout");
    const hxGgLMU = new (BT1qK_("Bvt1Sc"))();
    const A_uFuc = BT1qK_("mH4Yn5")(() => {
      return hxGgLMU.abort();
    }, dGHYPz);
    try {
      EIOSAAL.signal = hxGgLMU.signal;
      const cFgN6MI = await BT1qK_("JM0dfBb")(Njn_gAS, EIOSAAL);
      if (!cFgN6MI.ok) {
        (await cFgN6MI.body?.cancel(),
          zEvWuIz.StarGhostError.throw(
            "HTTP " + cFgN6MI.status + " " + cFgN6MI.statusText,
          ));
      }
      if (!cFgN6MI.body) {
        zEvWuIz.StarGhostError.throw("Response body is empty");
      }
      const UorGRA = cFgN6MI.headers.get("content-type");
      if (!UorGRA) {
        zEvWuIz.StarGhostError.throw("Got invalid content type from headers");
      }
      if (UorGRA.includes("json")) {
        return await cFgN6MI.json();
      } else if (UorGRA.startsWith("text")) {
        return await cFgN6MI.text();
      } else {
        return BT1qK_("T2DXph").from(await cFgN6MI.arrayBuffer());
      }
    } catch (error) {
      if (hxGgLMU.signal.aborted) {
        zEvWuIz.StarGhostError.throw("Request timeout after " + dGHYPz + "ms");
      }
      zEvWuIz.StarGhostError.throw(error.message);
    } finally {
      BT1qK_("VfZrMwx")(A_uFuc);
    }
  },
));
