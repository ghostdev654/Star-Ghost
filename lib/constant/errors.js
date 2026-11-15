"use strict";

((exports.__esModule = true),
  (exports.StarGhostValidationError =
    exports.StarGhostError =
    exports.HttpError =
      void 0));
class Z3DCyI8 extends globalThis.Error {}
class wPs40q9 extends globalThis.TypeError {}
class j11wq5L extends Z3DCyI8 {
  constructor(tSJliT, qRY9FbT = {}) {
    (super(tSJliT, qRY9FbT),
      (this.name = qRY9FbT.name || "StarGhostError"),
      (this.code = qRY9FbT.code || "STAR_GHOST_FATAL_ERROR"),
      globalThis.Error.captureStackTrace(this, j11wq5L));
    const ccLMcZ9 = this.stack.split("\n");
    this.stack = ccLMcZ9.slice(0, 2).join("\n");
  }
  static ["throw"](...pS7CSWz) {
    throw new this(...pS7CSWz);
  }
}
exports.StarGhostError = j11wq5L;
class JxIwZab extends wPs40q9 {
  constructor(tSJliT, qRY9FbT = {}) {
    (super(tSJliT, qRY9FbT),
      (this.name = qRY9FbT.name || "StarGhostValidationError"),
      (this.code = qRY9FbT.code || "STAR_GHOST_VALIDATION_ERROR"),
      globalThis.Error.captureStackTrace(this, JxIwZab));
    const n03xsu = this.stack.split("\n");
    this.stack = n03xsu.slice(0, 2).join("\n");
  }
  static ["throw"](...pS7CSWz) {
    throw new this(...pS7CSWz);
  }
}
exports.StarGhostValidationError = JxIwZab;
class yNq1Q9 extends Z3DCyI8 {
  constructor(tSJliT, qRY9FbT = {}) {
    (super(tSJliT),
      (this.name = this.constructor.name),
      (this.isHttpError = true),
      (this.isServer = true));
    const n03xsu = qRY9FbT?.statusCode || 400;
    ((this.data = qRY9FbT?.data || null),
      (this.output = {
        ["statusCode"]: n03xsu,
        ["payload"]: {
          ["statusCode"]: n03xsu,
          ["error"]: yNq1Q9.getStatusText(n03xsu),
          ["message"]: tSJliT,
        },
        ["headers"]: {},
      }));
  }
  get ["statusCode"]() {
    return this.output.statusCode;
  }
  static ["getStatusText"](...tSJliT) {
    tSJliT.length = 1;
    const TGW1Wzr = {
      [400]: "Bad Request",
      401: "Unauthorized",
      403: "Forbidden",
      404: "Not Found",
      405: "Method Not Allowed",
      409: "Conflict",
      422: "Unprocessable Entity",
      429: "Too Many Requests",
      [500]: "Internal Server Error",
      501: "Not Implemented",
      502: "Bad Gateway",
      503: "Service Unavailable",
    };
    return TGW1Wzr[tSJliT[0]] || "Internal Server Error";
  }
}
exports.HttpError = yNq1Q9;
