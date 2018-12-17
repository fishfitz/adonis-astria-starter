const Resource = use('App/Models/Mixins/Resource');

class Log extends Resource() {
  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Log;
