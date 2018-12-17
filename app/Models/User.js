const Resource = use('App/Models/Mixins/Resource');

class User extends Resource() {
  static get hidden() {
    return ['password', 'reset_token'];
  }

  tokens() {
    return this.hasMany('App/Models/Token');
  }
}

module.exports = User;
