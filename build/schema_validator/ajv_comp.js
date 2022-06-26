"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const log4js_1 = require("log4js");
const jtd_1 = __importDefault(require("ajv/dist/jtd"));
// ロガー設定
const logger = (0, log4js_1.getLogger)();
logger.trace("バリデーション関数作成 開始");
// スキーマを定義
const configSchema = {
    properties: {
        "a01": { type: "string" },
        "a02": { type: "string" },
        "a03": { type: "string" }
    },
};
// バリデーション関数作成
// type inference is not supported for JTDDataType yet
const ajv = new jtd_1.default();
exports.validate = ajv.compile(configSchema);
logger.trace("バリデーション関数作成 終了");
