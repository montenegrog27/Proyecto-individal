const { Country } = require("../db");

const getCharacterById = async (id) => {
  const country = await Country.findByPk(id);
  if (!country) throw new Error("El Pais no existe");
  return country;
};

module.exports = getCharacterById;
