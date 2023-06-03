const { Activity } = require("../db");

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
    countries,
  });
  newActivity.addCountries(countries);
  return newActivity;
};

module.exports = createActivity;
