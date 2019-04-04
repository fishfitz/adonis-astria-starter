const User = use('App/Models/User');

module.exports = {
  query: {
    login: ['required', 'normalize_email|trim'],
    password: ['required']
  },
  async handle({ query, auth }) {
    const user = await User.query()
      .where('email', 'LIKE', query.login)
      .firstOrFail();

    if (!user.is_active) throw new Error('USER_SUSPENDED');

    return auth.withRefreshToken().attempt(user.email, query.password);
  }
};
