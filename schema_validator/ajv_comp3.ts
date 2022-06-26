import { getLogger } from "log4js";
import Ajv from "ajv";

// ロガー設定
const logger = getLogger();

logger.trace("バリデーション関数作成 開始");

// スキーマを定義
const configSchema = {
  type: "object",
  properties: {
    "c01": {type: "string", maxLength: 10,},
    "c02": {type: "string", maxLength: 10,},
    "c03": {type: "string", maxLength: 10,}
  },
} as const;

// 型(type)を定義
export type config3 = {
  "c01": "string";
  "c02": "string";
  "c03": "string";
};

// バリデーション関数作成
// type inference is not supported for JTDDataType yet
const ajv = new Ajv();
export const validate3 = ajv.compile(configSchema);

logger.trace("バリデーション関数作成 終了");
