// ライブラリインポート
import { getLogger } from "log4js";

// モジュールインポート
import { Ret } from "./setting";
import { getConfiguration } from "./configReadCheck";
import { getConfiguration2 } from "./configReadCheck2";
import { getConfiguration3 } from "./configReadCheck3";
import { config, validate  } from "../schema_validator/ajv_comp";
import { config2, validate2  } from "../schema_validator/ajv_comp2";
import { config3, validate3  } from "../schema_validator/ajv_comp3";

/**
 * 
 * @returns 
 */
export function main(): { ret: number, obj: [ config, config2, config3 ] | undefined }{
  const logger = getLogger();
  logger.level = "trace";
  logger.trace("main() 開始");

  let objRtn :config;
  let objRtn2 :config2;
  let objRtn3 :config3;

  // コンフィグファイル1 取得処理
  const cfg1 = getConfiguration();
  if( cfg1.obj !== undefined ){
    // コンフィグ情報取得 成功
    logger.trace("getConfiguration() OK"); 
    objRtn = cfg1.obj;
    logger.trace(" returns objRtn.a01 : ");
    logger.trace(objRtn);
  } else {
    // 戻り値にコンフィグ情報がセットされていない
    logger.error("getConfiguration() NG");
    return { ret: Ret.Ng, obj: undefined };
  }

  // コンフィグファイル2 取得処理
  const cfg2 = getConfiguration2();
  if( cfg2.obj !== undefined ){
    // コンフィグ情報取得 成功
    logger.trace("getConfiguration2() OK"); 
    objRtn2 = cfg2.obj;
    logger.trace(" returns objRtn2.b01 : "); 
    logger.trace(objRtn2);
  } else {
    // 戻り値にコンフィグ情報がセットされていない
    logger.error("getConfiguration2() NG");
    return { ret: Ret.Ng, obj: undefined };  
  }

  // コンフィグファイル3 取得処理
  const cfg3 = getConfiguration3();
  if( cfg3.obj !== undefined ){
    // コンフィグ情報取得 成功
    logger.trace("getConfiguration3() OK"); 
    objRtn3 = cfg3.obj;
    logger.trace(" returns objRtn3.c01 : "); 
    logger.trace(objRtn3); 
  } else {
    // 戻り値にコンフィグ情報がセットされていない
    logger.error("getConfiguration3() NG");
    return { ret: Ret.Ng, obj: undefined };  
  }

  const ReturnObjct: [ config, config2, config3 ] = [ objRtn, objRtn2, objRtn3 ];
  logger.trace("main() 終了");
  return { ret: Ret.Ok, obj: ReturnObjct }
}


// テスト：動作検証用　開始
const logger = getLogger();
logger.level = "trace";
logger.trace("main() テスト開始");
const ConfigResults = main();
if( ConfigResults.obj !== undefined ){
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
} else {
  logger.trace("main() NG"); 
  logger.error(" コンフィグの取得に失敗");
}
logger.trace("main() テスト終了");
// テスト：動作検証用　終了
