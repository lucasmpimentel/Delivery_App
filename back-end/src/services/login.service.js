const md5 = require('md5');
const { user } = require('../database/models'); // para fazer a consulta no banco
const { generateJWTToken } = require('../utils/jwt');
const { constructError } = require('../middleware/middleware.error');

const authenticate = async ({ email, password }) => {
  const encrypted = md5(password);

  if (!email || !password) {
    throw constructError(401, 'Campos faltantes.');
  }
  const userFound = await user.findOne({
    where: { email, password: encrypted },
  });

  if (!userFound) {
    throw constructError(404, 'User or password invalid');
  }
  const token = generateJWTToken(userFound);
  return token;
};

const createUser = async ({ name, password, email, role }) => {
  const encrypted = md5(password);

  const createdUser = await user.create({
    email,
    password: encrypted,
    name,
    role,
  });

  return generateJWTToken(createdUser);
};

module.exports = { authenticate, createUser };
