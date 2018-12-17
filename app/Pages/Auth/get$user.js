module.exports = {
  async handle({ auth }) {
    return auth.getUser();
  }
};
