const crypto = use('crypto');
const User = use('App/Models/User');

module.exports = {
  query: { email: 'required|normalize_email|trim' },
  async handle({ query }) {
    const user = await User.findByOrFail('email', query.email);
    const token = crypto.randomBytes(64).toString('hex').substr(0, 6);
    user.reset_token = token;
    await user.save();

    // TODO: Send email with token
  }
};
