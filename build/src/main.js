"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
// ライブラリインポート
const log4js_1 = require("log4js");
const configReadCheck_1 = require("./configReadCheck");
const configReadCheck2_1 = require("./configReadCheck2");
const configReadCheck3_1 = require("./configReadCheck3");
/**
 *
 * @returns
 */
function main() {
    const logger = (0, log4js_1.getLogger)();
    logger.level = "trace";
    logger.trace("main() 開始");
    let objRtn;
    let objRtn2;
    let objRtn3;
    // コンフィグファイル1 取得処理
    const cfg1 = (0, configReadCheck_1.getConfiguration)();
    if (cfg1.obj !== undefined) {
        // コンフィグ情報取得 成功
        logger.trace("getConfiguration() OK");
        objRtn = cfg1.obj;
        logger.trace(" returns objRtn.a01 : ");
        logger.trace(objRtn);
    }
    else {
        // 戻り値にコンフィグ情報がセットされていない
        logger.error("getConfiguration() NG");
        return { ret: 1 /* Ret.Ng */, obj: undefined };
    }
    // コンフィグファイル2 取得処理
    const cfg2 = (0, configReadCheck2_1.getConfiguration2)();
    if (cfg2.obj !== undefined) {
        // コンフィグ情報取得 成功
        logger.trace("getConfiguration2() OK");
        objRtn2 = cfg2.obj;
        logger.trace(" returns objRtn2.b01 : ");
        logger.trace(objRtn2);
    }
    else {
        // 戻り値にコンフィグ情報がセットされていない
        logger.error("getConfiguration2() NG");
        return { ret: 1 /* Ret.Ng */, obj: undefined };
    }
    // コンフィグファイル3 取得処理
    const cfg3 = (0, configReadCheck3_1.getConfiguration3)();
    if (cfg3.obj !== undefined) {
        // コンフィグ情報取得 成功
        logger.trace("getConfiguration3() OK");
        objRtn3 = cfg3.obj;
        logger.trace(" returns objRtn3.c01 : ");
        logger.trace(objRtn3);
    }
    else {
        // 戻り値にコンフィグ情報がセットされていない
        logger.error("getConfiguration3() NG");
        return { ret: 1 /* Ret.Ng */, obj: undefined };
    }
    const ReturnObjct = [objRtn, objRtn2, objRtn3];
    logger.trace("main() 終了");
    return { ret: 0 /* Ret.Ok */, obj: ReturnObjct };
}
exports.main = main;
// テスト：動作検証用　開始
const logger = (0, log4js_1.getLogger)();
logger.level = "trace";
logger.trace("main() テスト開始");
const ConfigResults = main();
if (ConfigResults.obj !== undefined) {
    logger.trace("main() OK");
    logger.trace(" returns ConfigResults.obj :");
    logger.trace(ConfigResults);
    // logger.trace(" returns ConfigResults.obj[0].a01: " + ConfigResults.obj[0].a01); 
    // logger.trace(" returns ConfigResults.obj[0].a02 : " + ConfigResults.obj[0].a02); 
    // logger.trace(" returns ConfigResults.obj[0].a03 : " + ConfigResults.obj[0].a03); 
    // logger.trace(" returns ConfigResults.obj[1].b01 : " + ConfigResults.obj[1].b01); 
    // logger.trace(" returns ConfigResults.obj[1].b02 : " + ConfigResults.obj[1].b02); 
    // logger.trace(" returns ConfigResults.obj[1].b03 : " + ConfigResults.obj[1].b03); 
    // logger.trace(" returns ConfigResults.obj[2].c01 : " + ConfigResults.obj[2].c01); 
    // logger.trace(" returns ConfigResults.obj[2].c02 : " + ConfigResults.obj[2].c02); 
    // logger.trace(" returns ConfigResults.obj[2].c03 : " + ConfigResults.obj[2].c03); 
}
else {
    logger.trace("main() NG");
    logger.error(" コンフィグの取得に失敗");
}
logger.trace("main() テスト終了");
// テスト：動作検証用　終了
