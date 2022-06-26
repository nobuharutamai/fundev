"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate3 = void 0;
const log4js_1 = require("log4js");
const ajv_1 = __importDefault(require("ajv"));
// ロガー設定
const logger = (0, log4js_1.getLogger)();
logger.trace("バリデーション関数作成 開始");
// スキーマを定義
const configSchema = {
    type: "object",
    properties: {
        "c01": { type: "string", maxLength: 10, },
        "c02": { type: "string", maxLength: 10, },
        "c03": { type: "string", maxLength: 10, }
    },
};
// バリデーション関数作成
// type inference is not supported for JTDDataType yet
const ajv = new ajv_1.default();
exports.validate3 = ajv.compile(configSchema);
logger.trace("バリデーション関数作成 終了");
