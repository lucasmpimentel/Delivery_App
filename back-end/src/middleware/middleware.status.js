const Joi = require('joi');

const statusSchema = Joi.object().keys({
            status: Joi.string().valid('Pendente', 'Preparando', 'Em Trânsito', 'Entregue'),
        });

const validateStatus = (req, res, next) => {
  const { error } = statusSchema.validate(req.body);
  if (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
  return next();
};

module.exports = { validateStatus };
