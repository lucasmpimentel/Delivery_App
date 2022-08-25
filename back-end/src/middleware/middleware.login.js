const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const registrationSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().min(3).required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid('customer', 'admin').required(),
});

const validateLogin = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
  return next();
};

const validateRegistration = (req, res, next) => {
  const { error } = registrationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
  return next();
};
module.exports = { validateLogin, validateRegistration };
