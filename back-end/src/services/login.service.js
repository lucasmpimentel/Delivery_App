const { Users } = require("../database/models"); // para fazer a consulta no banco
const { generateJWTToken } = require("../utils/jwt");
const { constructError } = require("../middleware/middleware.error");

const authenticate = async ({ email, password }) => {
  if (!email || !password) {
    throw constructError(401, "Campos faltantes.");
  }
  const user = await Users.findOne({
    where: { email, password },
  });

  if (!user) {
    throw constructError(400, "User or password invalid");
  }
  const token = generateJWTToken(email);
  return token;
};
module.exports = { authenticate };
