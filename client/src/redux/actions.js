import axios from "axios";
const GET_COUNTRIES = "GET_COUNTRIES";
const ERROR_COUNTRIES = "ERROR_COUNTRIES";
const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
const SORT_COUNTRIES = "SORT_COUNTRIES";

const getCountries = () => {
  return (dispatch) => {
    axios
      .get(" http://localhost:3001/")
      .then((response) => {
        dispatch({
          type: GET_COUNTRIES,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: ERROR_COUNTRIES,
          payload: error.message,
        });
      });
  };
};

const searchCountries = (query) => ({
  type: SEARCH_COUNTRIES,
  payload: query,
});

const sortCountries = (sortAlphabetically, sortPopulation) => {
  return (dispatch, getState) => {
    const { countries } = getState();
    let sortedCountries = [...countries];

    // Orden alfabético
    if (sortAlphabetically === "A-Z") {
      sortedCountries.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortAlphabetically === "Z-A") {
      sortedCountries.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Orden por población
    if (sortPopulation === "Ascendente") {
      sortedCountries.sort((a, b) => a.population - b.population);
    } else if (sortPopulation === "Descendente") {
      sortedCountries.sort((a, b) => b.population - a.population);
    }

    dispatch({
      type: SORT_COUNTRIES,
      payload: sortedCountries,
    });
  };
};

export {
  getCountries,
  searchCountries,
  sortCountries,
  GET_COUNTRIES,
  SEARCH_COUNTRIES,
  SORT_COUNTRIES,
};
