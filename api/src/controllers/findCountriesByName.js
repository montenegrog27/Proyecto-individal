const { Country, Activity } = require("../db");

async function findCountriesByName(query) {
  const countries = await Country.findAll({
    where: query,

    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  });
  return countries;
}

module.exports = findCountriesByName;
