module.exports = {
  query: { refresh_token: 'required|trim' },
  async handle({ query, auth }) {
    return auth.generateForRefreshToken(query.refresh_token);
  }
};
