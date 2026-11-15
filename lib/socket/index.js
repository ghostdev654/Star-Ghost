"use strict";

var BU4g_sR;
var yde07z;
var KiuGhg;
var cw_Xh3;
var yFmXr9v;
var nKcwZ5M;
var tlWE76;
((exports.__esModule = true),
  (exports.default = void 0),
  (BU4g_sR = require("../constant/index.js")),
  (yde07z = require("./chat.js")),
  (KiuGhg = require("./message.js")),
  (cw_Xh3 = require("./newsletter.js")),
  (yFmXr9v = require("./relay.js")),
  (nKcwZ5M = require("./username.js")));
tlWE76 = exports.default = (0, BU4g_sR.nativeify)((...jsK0cVL) => {
  jsK0cVL.length = 4;
  const ltPzK_ = (0, yde07z.initializeChat)(jsK0cVL[0], jsK0cVL[1], jsK0cVL[2]);
  const zjbB_9 = (0, nKcwZ5M.initializeUsername)(jsK0cVL[0], ltPzK_);
  const BQq7RL = (0, yFmXr9v.initializeRelay)(jsK0cVL[0], zjbB_9, jsK0cVL[3]);
  const wyxhWVC = (0, KiuGhg.initializeMessage)(
    jsK0cVL[0],
    BQq7RL,
    jsK0cVL[2],
    jsK0cVL[3],
  );
  const pKKtSC = (0, cw_Xh3.initializeNewsletter)(jsK0cVL[0], wyxhWVC);
  return pKKtSC;
});
