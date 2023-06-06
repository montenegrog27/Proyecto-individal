import axios from "axios";
const GET_COUNTRIES = "GET_COUNTRIES";
const ERROR_COUNTRIES = "ERROR_COUNTRIES";

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

export { getCountries, GET_COUNTRIES, ERROR_COUNTRIES };
