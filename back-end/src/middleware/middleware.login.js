const Joi = require('joi');

const valEmail = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  });

const validateLogin = (req, res, next) => {
  const { error } = valEmail.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
  return next();
};

module.exports = { validateLogin };
