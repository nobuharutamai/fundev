"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfiguration2 = void 0;
// ライブラリインポート
const log4js_1 = require("log4js");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
// モジュールインポート
const ajv_comp_copy_1 = require("../schema_validator/ajv_comp copy");
/**
 * コンフィグ取得
 * @returns
 */
function getConfiguration2() {
    const logger = (0, log4js_1.getLogger)();
    logger.level = "trace";
    logger.trace(`開始`);
    // ファイルパス設定
    //const configFileName = "../config/config_1.json";
    const configFilePath = path_1.default.join(process.cwd(), "config", "config copy.json");
    logger.trace(`ファイルパス : ${configFilePath}`);
    // ファイル読み込み
    let configString;
    try {
        configString = (0, fs_1.readFileSync)(configFilePath, { encoding: "utf-8" });
    }
    catch (err) {
        // ファイル読み込み失敗
        logger.error(`ファイル読み込み失敗 : ${err}`);
        logger.fatal(`ファイル読み込み失敗`);
        return undefined;
    }
    logger.trace(`ファイルサイズ : ${configString.length}`);
    logger.trace(`ファイル : ${configString}`);
    // JSON形式からパース
    let config;
    try {
        config = JSON.parse(configString);
    }
    catch (err) {
        // パース失敗
        logger.error(`JSONパース失敗 : ${err}`);
        logger.fatal(`JSONパース失敗`);
        return undefined;
    }
    // バリデーション
    const validationResults = (0, ajv_comp_copy_1.validate2)(config);
    if (validationResults === true) {
        // バリデーション成功
        logger.trace(`バリデーション成功`);
    }
    else {
        // バリデーション失敗
        logger.error(`バリデーション失敗 : ${ajv_comp_copy_1.validate2.errors}`);
        logger.fatal(`JSONパース失敗`);
        return undefined;
    }
    logger.trace(`JSONパース・バリデーションOK : ${JSON.stringify(config)}`);
    logger.trace(`終了`);
    return config;
}
exports.getConfiguration2 = getConfiguration2;
