const { Activity } = require("../db");

const findAllCountries = async () => {
  const activities = await Activity.findAll();
  return activities;
};
module.exports = findAllCountries;
