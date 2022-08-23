const { User } = require("../database/models"); // para fazer a consulta no banco
const { generateJWTToken } = require("../utils/jwt");
const { constructError } = require("../middleware/error");

const authenticate = async ({ user, password }) => {
  if (!user || !password) {
    throw constructError(401, "Campos faltantes.");
  }
  const user = await User.findOne({
    where: { user, password },
  });

  if (!user) {
    throw constructError(400, "User or password invalid");
  }
  const token = generateJWTToken(user);
  return token;
};
module.exports = { authenticate };
