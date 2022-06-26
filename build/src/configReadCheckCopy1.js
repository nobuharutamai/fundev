"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfiguration2 = void 0;
// ライブラリインポート
const log4js_1 = require("log4js");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const ajv_comp_1 = require("../schema_validator/ajv_comp");
/**
 * コンフィグ取得
 * @returns
 */
function getConfiguration2() {
    return __awaiter(this, void 0, void 0, function* () {
        const logger = (0, log4js_1.getLogger)();
        logger.trace(`開始`);
        // ファイルパス設定
        const configFileName = "../config/config_2.json";
        const configFilePath = path_1.default.join(process.cwd(), configFileName);
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
            return { ret: 1 /* Ret.Ng */ };
        }
        logger.trace(`ファイルサイズ : ${configString.length}`);
        // JSON形式からパース
        let config;
        try {
            config = JSON.parse(configString);
        }
        catch (err) {
            // パース失敗
            logger.error(`JSONパース失敗 : ${err}`);
            logger.fatal(`JSONパース失敗`);
            return { ret: 1 /* Ret.Ng */ };
        }
        // バリデーション
        const validationResults = (0, ajv_comp_1.validate)(config);
        if (validationResults === true) {
            // バリデーション成功
        }
        else {
            // バリデーション失敗
            logger.error(`バリデーション失敗 : ${ajv_comp_1.validate.errors}`);
            logger.fatal(`JSONパース失敗`);
            return { ret: 1 /* Ret.Ng */ };
        }
        logger.trace(`終了`);
        return { ret: 0 /* Ret.Ok */ };
    });
}
exports.getConfiguration2 = getConfiguration2;
