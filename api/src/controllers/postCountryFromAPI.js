const { Country } = require("../db");
const axios = require("axios");

const URL = "https://rest-countries.up.railway.app/v2/all";

const postCountryFromAPI = async (req, res) => {
  try {
    const response = await axios.get(URL);
    const countries = response.data;

    const countryData = countries.map((ele) => ({
      ID: ele.alpha3Code,
      name: ele.name,
      flags: ele.flags.svg,
      continent: ele.region,
      capital: ele.capital != null ? ele.capital : "No data",
      subregion: ele.subregion,
      area: ele.area,
      population: ele.population,
    }));
    console.log(response.data);
    const countriesFilter = countryData.filter((data) => data.name !== null);
    await Country.bulkCreate(countriesFilter);

    res.status(200).json({ message: "Objetos guardados en la base de datos." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = postCountryFromAPI;
