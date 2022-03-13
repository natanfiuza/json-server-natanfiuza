const chalk = require("chalk");

/**
 * Verifica se o usuario esta autorizado
 * @param {*} req
 */
const isAuthorized = (req) => {
  console.log(chalk.red.bold("isAuthorized.req"));
  return false;
};

module.exports = {
  isAuthorized,
};
