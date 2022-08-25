const jwt = require('jsonwebtoken');
const { constructError } = require('../middleware/middleware.error');
const fs = require('fs');

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8');
console.log({JWT_SECRET})
// const { JWT_SECRET } = process.env; 

const jwtConfig = {
  expiresIn: '1440m', // tempo da seção (1 dia)
  algorithm: 'HS256',
};
// processo de criação do token, enviando o payload que fica acessível no front

const generateJWTToken = ({ id, name, email, role }) =>
  jwt.sign({ id, name, email, role }, JWT_SECRET, jwtConfig);

// validação do token e vendo se bate com a assinatura

const authenticateToken = (token) => {
  if (!token) {
    throw constructError(401, 'Token not found');
  }
  try {
    const validate = jwt.verify(token, JWT_SECRET);
    return validate;
  } catch (error) {
    throw constructError(401, 'Expired or invalid token');
  }
};

module.exports = {
  generateJWTToken,
  authenticateToken,
};
