/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.view = {
    mapping: {
      '.html': 'ejs'
    }
  }

  // 配置公共的api
  config.api = 'http://www.phonegap100.com/'

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1617113106925_4011';

  // add your middleware config here
  config.middleware = [
    'printdate',
    'forbidip',
    'jsonp',
    'compress'
  ];



  config.session = {
    key: 'SESSION_ID', // 设置session里的key 
    maxAge: 1000*10,
    encript: true,
    renew: true  // 延长会话时间
  }
  // 给中间件传递参数
  config.printdate = { 
    aaa: 'fdsagdasf'
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
