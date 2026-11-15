"use strict";

var zvsga13;
var QsBxpio;
var sgqdP0D;
var nvNeqk;
var EEGHip;
var dT_Xjz;
var dlyWAVB;
zvsga13 = oaIVyB();
function oaIVyB(...LYeTrl) {
  LYeTrl.length = 0;
  ((LYeTrl.a = [
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
    (LYeTrl.b = undefined),
    (LYeTrl[83] = []));
  try {
    ((LYeTrl.b = Object), LYeTrl[83].push("".__proto__.constructor.name));
  } catch (e) {}
  IzpHhM: for (LYeTrl[26] = 0; LYeTrl[26] < LYeTrl.a.length; LYeTrl[26]++) {
    try {
      LYeTrl.b = LYeTrl.a[LYeTrl[26]]();
      for (LYeTrl[4] = 0; LYeTrl[4] < LYeTrl[83].length; LYeTrl[4]++) {
        if (typeof LYeTrl.b[LYeTrl[83][LYeTrl[4]]] === "undefined") {
          continue IzpHhM;
        }
      }
      return LYeTrl.b;
    } catch (e) {}
  }
  return LYeTrl.b || this;
}
function h_zZxUY() {}
function nsWYR5() {
  "use strict";

  var LYeTrl;
  var AYxX2c;
  var GsZuobs;
  var [_PFEmMV, [UucTN9, zvsga13]] = arguments;
  if (!zvsga13 && UucTN9 && UucTN9.__esModule) {
    return UucTN9;
  }
  ((LYeTrl = undefined),
    (AYxX2c = undefined),
    (GsZuobs = {
      ["__proto__"]: null,
      ["default"]: UucTN9,
    }));
  if (
    null === UucTN9 ||
    ("object" != typeof UucTN9 && "function" != typeof UucTN9)
  ) {
    return GsZuobs;
  }
  if ((LYeTrl = zvsga13 ? _PFEmMV.jFOKUlv : _PFEmMV.zwHhiL)) {
    if (LYeTrl.has(UucTN9)) {
      return LYeTrl.get(UucTN9);
    }
    LYeTrl.set(UucTN9, GsZuobs);
  }
  for (const zvsga13 in UucTN9) {
    if ("default" !== zvsga13 && {}.hasOwnProperty.call(UucTN9, zvsga13)) {
      if (
        (AYxX2c =
          (LYeTrl = globalThis.Object.defineProperty) &&
          globalThis.Object.getOwnPropertyDescriptor(UucTN9, zvsga13)) &&
        (AYxX2c.get || AYxX2c.set)
      ) {
        LYeTrl(GsZuobs, zvsga13, AYxX2c);
      } else {
        GsZuobs[zvsga13] = UucTN9[zvsga13];
      }
    }
  }
  return GsZuobs;
}
function noLOauR() {
  "use strict";

  var [GsZuobs, [U8cw8mH, i6GNHV]] = arguments;
  if ("function" == typeof globalThis.WeakMap) {
    var _PFEmMV;
    var UucTN9;
    ((_PFEmMV = new globalThis.WeakMap()), (UucTN9 = new globalThis.WeakMap()));
  }
  return (GsZuobs.oMJ4QR = function (...LYeTrl) {
    var GsZuobs;
    if ("KcOB358" in h_zZxUY) {
      zvsga13();
    }
    GsZuobs = {
      get ["jFOKUlv"]() {
        return UucTN9;
      },
      get ["zwHhiL"]() {
        return _PFEmMV;
      },
    };
    return nsWYR5(GsZuobs, LYeTrl);
  })(U8cw8mH, i6GNHV);
}
((exports.__esModule = true),
  (exports.Watcher =
    exports.Utilities =
    exports.Scraper =
    exports.Request =
    exports.Classes =
      void 0),
  (QsBxpio = QuK38JJ(require("./classes.js"))),
  (sgqdP0D = QuK38JJ(require("./functions.js"))),
  (nvNeqk = QuK38JJ(require("./link-preview.js"))),
  (EEGHip = QuK38JJ(require("./request.js"))),
  (dT_Xjz = QuK38JJ(require("./scraper.js"))),
  (dlyWAVB = QuK38JJ(require("./watcher.js"))));
function QuK38JJ(...LYeTrl) {
  var AYxX2c;
  AYxX2c = {
    get ["oMJ4QR"]() {
      return QuK38JJ;
    },
    set ["oMJ4QR"](LYeTrl) {
      QuK38JJ = LYeTrl;
    },
  };
  return noLOauR(AYxX2c, LYeTrl);
}
((exports.Classes = {
  ...QsBxpio,
}),
  (exports.Utilities = {
    ...sgqdP0D,
    ...nvNeqk,
  }),
  (exports.Request = {
    ...EEGHip,
  }),
  (exports.Scraper = {
    ...dT_Xjz,
  }));
exports.Watcher = {
  ...dlyWAVB,
};
