/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path');
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    security: {
      csrf: {
        enable: false,
        // headerName: 'x-csrf-token',
      },
    }
  };
  config.view = {
    mapping:{'.html':'ejs'}
  }
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1557883722201_5597';

  // add your middleware config here
  config.middleware = [];
  exports.io = {
    namespace: {
        '/': {
            connectionMiddleware: [ 'auth' ],
            packetMiddleware: [ 'filter' ],
        }
    }
 };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
