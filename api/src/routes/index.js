const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const findAllCountries = require("../controllers/findAllCountries");
// sconst express = require("express");
const postCountryFromAPI = require("../controllers/postCountryFromAPI");

const router = Router();

router.post("/traerApi", postCountryFromAPI);

router.get("/countries", async (req, res) => {
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

router.get("/countries/", async (req, res) => {});

router.post("/activities", async (req, res) => {});

router.get("/activities", async (req, res) => {});

module.exports = router;
