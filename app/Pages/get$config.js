const ConfigModel = use('App/Models/Config');

module.exports = {
  handle() {
    return ConfigModel.query()
      .orderBy('key', 'asc')
      .fetch();
  }
};
