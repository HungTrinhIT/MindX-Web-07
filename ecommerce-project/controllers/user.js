const UserModel = require("../models/user");

const getById = (id) => {
  return UserModel.findById(id);
};
const findOne = (params) => {
  return UserModel.findOne(params);
};
const create = (user) => {
  const newUser = new UserModel(user);
  return newUser.save();
};
const update = async () => {};
const remove = async () => {};

const UserController = {
  getById,
  create,
  update,
  remove,
  findOne,
};

module.exports = UserController;
