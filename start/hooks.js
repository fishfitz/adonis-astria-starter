const { hooks } = require('@adonisjs/ignitor');

hooks.before.httpServer(async () => {
  const Config = use('Config');
  const ConfigModel = use('App/Models/Config');
  const confs = (await ConfigModel.all()).toJSON();
  confs.forEach(({ key, value }) => {
    Config.set(key, value);
  });
});
