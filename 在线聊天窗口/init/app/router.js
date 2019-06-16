'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  app.io.of('/').route('chat', app.io.controllers.chat);
  app.io.of('/').route('recordes', app.io.controllers.recordes);
  app.io.of('/').route('del', app.io.controllers.del);
  app.io.of('/').route('uniqueness', app.io.controllers.uniqueness);
  
  // app.io.route('disconnect', app.io.controller.chat.disconnect);

};
