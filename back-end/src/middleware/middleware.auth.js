const { authenticateToken } = require('../utils/jwt');

const authenticateMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  res.locals.id = authenticateToken(token).id;
  next();
};

module.exports = authenticateMiddleware;
