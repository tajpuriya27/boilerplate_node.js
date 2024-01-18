// Require the models needed

module.exports = {
  async list(req, res, next) {
    try {
      // Write actual code to get all users here
    } catch (error) {
      next(error);
    }
  },

  async listOne(req, res, next) {
    try {
      // Write actual code to get one user here
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      // Write actual code to create a new user here
      // send the created user:: res.json(user);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      // Write actual code to update a user here
      // send the updated user:: res.json(user);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      // Write actual code to delete a user here
      // send the deleted user:: res.json(user);
    } catch (error) {
      next(error);
    }
  },
};
