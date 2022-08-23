const { authenticateToken } = require('../utils/jwt');

const authenticateMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  authenticateToken(token);
  next();
};

module.exports = authenticateMiddleware;
