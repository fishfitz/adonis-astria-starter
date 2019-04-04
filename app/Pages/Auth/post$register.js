const User = use('App/Models/User');

module.exports = {
  query: {
    email: ['required|email', 'normalize_email|trim'],
    password: ['required'],
    lang: ''
  },
  async handle({ query, auth }) {
    await User.create(query);

    return auth.withRefreshToken().attempt(query.email, query.password);
  }
};
