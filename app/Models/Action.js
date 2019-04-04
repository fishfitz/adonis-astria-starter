const Resource = use('App/Models/Mixins/Resource');

class Action extends Resource('Action') {
  static get updatedAtColumn() {
    return null;
  }
  static get primaryKey() {
    return 'created_at';
  }
  static get incrementing() {
    return false;
  }
}

module.exports = Action;
