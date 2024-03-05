const services = require("../services");
const utils = require("../utils");

const { CustomError } = require("../config/error");
const { Role } = require("@prisma/client");
const catchError = require("../utils/catch-error");

module.exports.getAll = async (req, res, next) => {
  try {
    const users = await services.user.getAll();
    res.status(200).json({ users });
  } catch (err) {
    next(err);
  }
  return;
};
module.exports.get = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await services.user.get({ id });
    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
  return;
};
module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // GET username from database
    const user = await services.user.findUserByEmail(email);
    if (!user)
      throw new CustomError(
        "username or password is wrong",
        "WRONG_INPUT",
        400
      );

    // COMPARE password with database
    const result = await utils.bcrypt.compare(password, user.password);
    if (!result)
      throw new CustomError(
        "username or password is wrong",
        "WRONG_INPUT",
        400
      );

    // DELETE KEY of password from user data
    delete user.password;
    // SIGN token from user data
    const token = utils.jwt.sign(user);
    res.status(200).json({
      message: "Login Success",
      user,
      accessToken: token,
    });
  } catch (err) {
    next(err);
  }
  return;
};
module.exports.register = async (req, res, next) => {
  try {
    // if (req.body.role != Role.ADMIN) role = Role.ADMIN
    // HASHED PASSWORD
    const hashed = await utils.bcrypt.hashed(req.body.password);
    req.body.password = hashed;
    // CREATE user to database
    const user = await services.user.createUser(req.body);
    // DELETE KEY of password from user data
    delete user.password;
    // SIGN token from user data
    const token = utils.jwt.sign(user);

    res.status(200).json({
      message: "Register Complete",
      user,
      accessToken: token,
    });
  } catch (err) {
    next(err);
  }
  return;
};
module.exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { firstName, lastName } = req.body;
    const user = await services.user.update({ id }, { firstName, lastName });

    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
  return;
};

module.exports.updateStatusUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const users = await services.user.changeStatusUser(+id);

    res.status(200).json({ users });
  } catch (err) {
    next(err);
  }
  return;
};

module.exports.updateStatusUser2 = async (req, res, next) => {
  try {
    const { id } = req.params;

    const users = await services.user.changeStatusUser2(+id);

    res.status(200).json({ users });
  } catch (err) {
    next(err);
  }
  return;
};

module.exports.changePassword = async (req, res, next) => {
  try {
    // console.log(req.body)
    const hashed = await utils.bcrypt.hashed(req.body.password);
    req.body.password = hashed;

    await services.user.updatePassword(req.body.email, req.body.password);
    res.status(200).json({
      message: "Change Password Complete",
    });
  } catch (err) {
    next(err);
  }
  return;
};

module.exports.getMe = async (req, res, next) => {
  try {
    res.status(200).json({
      user: req.user,
    });
  } catch (err) {
    next(err);
  }
  return;
};
