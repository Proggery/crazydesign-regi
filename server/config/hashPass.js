const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashedPassword = (password) => {
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
};

const authPassword = (password, hashPass) => {
  const authPass = bcrypt.compareSync(password, hashPass);

  return authPass;
};

module.exports = { hashedPassword, authPassword };
