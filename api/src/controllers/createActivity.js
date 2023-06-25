const { Activity } = require("../db");
const { Country } = require("../db");

const createActivity = async ({
  name,
  difficulty,
  duration,
  season,
  countries,
}) => {
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
    // countries,
  });
  let paisesEncontrados = await Country.findAll({ where: { name: countries } });
  newActivity.addCountries(paisesEncontrados);
  return newActivity;
};

module.exports = createActivity;
