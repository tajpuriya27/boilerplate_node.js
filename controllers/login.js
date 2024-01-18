// require the express router
// require needed models here.

module.exports = {
  async loginUser(req, res, next) {
    try {
      // Write actual code to login a user here
      // send the logged in user:: res.json(user);
    } catch (error) {
      next(error);
    }
  },
};
