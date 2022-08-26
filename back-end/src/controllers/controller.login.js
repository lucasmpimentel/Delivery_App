const loginService = require('../services/login.service');

const loginUser = async (req, res) => {
  const token = await loginService.authenticate(req.body);
  res.status(200).json({ token });
};

const registerUser = async (req, res) => {
  const token = await loginService.createUser(req.body);
  res.status(200).json({ token });
};

module.exports = { loginUser, registerUser };
