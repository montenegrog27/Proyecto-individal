const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const express = require("express");
const { Op } = require("sequelize");
const findAllCountries = require("../controllers/findAllCountries");
const postCountryFromAPI = require("../controllers/postCountryFromAPI");
const findAllCountriesById = require("../controllers/findAllCountriesById");
const findCountriesByName = require("../controllers/findCountriesByName");
const createActivity = require("../controllers/createActivity");
const findAllActivities = require("../controllers/findAllActivities");
const { Activity, Country } = require("../db");

const router = Router();

router.use(express.json());

router.post("/traerApi", postCountryFromAPI);

//* Trae todos los paises
router.get("/", async (req, res) => {
  try {
    const countries = await findAllCountries();

    if (countries) {
      return res.status(200).json(countries);
    } else {
      return res.status(404).send("No se encontró paises");
    }
  } catch (error) {
    console.log(error);
  }
});

//*Trae los paises por ID
// http://localhost:3001/countries/ARG
router.get("/countries/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const country = await findAllCountriesById(id);
    res.status(200).json(country);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

//* Trae los paises por nombre sin inportar mayusculas y min
// http://localhost:3001/countries?name=Argentina

router.get("/countries", async (req, res) => {
  const { name } = req.query;
  const lowercaseName = name ? name.toLowerCase() : null;
  const lowercaseActivity = activity ? activity.toLowerCase() : null;
  try {
    const countries = lowercaseName
      ? await findCountriesByName({
          name: { [Op.iLike]: `%${lowercaseName}%` },
        })
      : await findCountriesByName();

    res.status(200).json(countries);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Error wachooo");
  }
});

router.get("/activities", async (req, res) => {
  try {
    const activity = await findAllActivities();

    if (activity) {
      return res.status(200).json(activity);
    } else {
      return res.status(404).send("No se encontraron actividades");
    }
  } catch (error) {
    console.log(error);
  }
});

//* Crea actividades
router.post("/activities", async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;

  try {
    const newActivity = await createActivity({
      name,
      difficulty,
      duration,
      season,
      countries,
    });
    res.status(200).json(newActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/activities", async (req, res) => {});

module.exports = router;
