// ライブラリインポート
import { getLogger } from "log4js";
import { readFileSync } from "fs";
import path from "path";

// モジュールインポート
import { config, validate  } from "../schema_validator/ajv_comp";
import { Ret } from "./setting";

/**
 * コンフィグ取得
 * @returns 
 */
export function getConfiguration(): { ret: number, obj: config | undefined }{
  const logger = getLogger();
  logger.level = "trace";
  logger.trace("getConfiguration() 開始");

  // ファイルパス設定
  //const configFileName = "../config/config.json";
  const configFilePath = path.join(process.cwd(),"config","config.json");
  logger.trace("ファイルパス : ");
  logger.trace(configFilePath);

  // ファイル読み込み
  let configString;
  try {
    configString = readFileSync(configFilePath, { encoding: "utf-8" });
  }
  catch(err) {
    // ファイル読み込み失敗
    logger.error("ファイル読み込み失敗 : ");
    logger.error(err);
    logger.fatal("コンフィグ読み込み処理失敗");
    return { ret:Ret.Ng, obj: undefined };
  }
  logger.trace("ファイルサイズ : " + configString.length);
  //logger.trace("ファイル中身 : ");
  //logger.trace(configString);

  // JSON形式からパース
  let config: config;
  try {
    config = JSON.parse(configString);
  } catch(err){
    // パース失敗
    logger.error("JSONパース失敗 : ");
    logger.error(err);
    logger.fatal("コンフィグ読み込み処理失敗");
    return { ret:Ret.Ng, obj: undefined };
  }

  // バリデーション
  const validationResults = validate(config);
  if(validationResults === true){
    // バリデーション成功
    logger.trace("バリデーション成功");
  } else {
    // バリデーション失敗
    logger.error("バリデーション失敗 :");
    logger.error(validate.errors);
    logger.fatal("コンフィグ読み込み処理失敗");
    return { ret:Ret.Ng, obj: undefined };
  }

  logger.trace("JSON.stringify(config) :");
  logger.trace(JSON.stringify(config));
  logger.trace("getConfiguration() 終了");
  return { ret:Ret.Ok, obj: config };
}
