import { getLogger } from "log4js";
import Ajv, {JTDDataType} from "ajv/dist/jtd";

// ロガー設定
const logger = getLogger();

logger.trace("バリデーション関数作成 開始");

// スキーマを定義
const configSchema = {
  properties: {
    "b01": {type: "string"},
    "b02": {type: "string"},
    "b03": {type: "string"}
  },
} as const;

// 型(type)を定義
export type config2 = JTDDataType<typeof configSchema>;

// バリデーション関数作成
// type inference is not supported for JTDDataType yet
const ajv = new Ajv();
export const validate2 = ajv.compile<config2>(configSchema);

logger.trace("バリデーション関数作成 終了");
