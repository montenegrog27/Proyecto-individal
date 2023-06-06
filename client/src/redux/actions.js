import axios from "axios";
const GET_COUNTRIES = "GET_COUNTRIES";
const ERROR_COUNTRIES = "ERROR_COUNTRIES";
const FILTER_CONTINENT = "FILTER_CONTINENT";

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

const continentFilter = (continent) => ({
  type: FILTER_CONTINENT,
  payload: continent,
});

export {
  continentFilter,
  getCountries,
  GET_COUNTRIES,
  ERROR_COUNTRIES,
  FILTER_CONTINENT,
};
