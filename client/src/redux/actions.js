import axios from "axios";
const GET_COUNTRIES = "GET_COUNTRIES";
const ERROR_COUNTRIES = "ERROR_COUNTRIES";
const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
const SORT_ALFABETIC = "SORT_ALFABETIC";
const SORT_POPULATION = "SORT_POPULATION";
const BORRAR_FILTROS = "BORRAR_FILTROS";
const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";

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
const filterByActivity = (activity) => ({
  type: FILTER_BY_ACTIVITY,
  payload: activity,
});

const searchCountries = (query) => ({
  type: SEARCH_COUNTRIES,
  payload: query,
});

const sortCountriesAlf = (input) => ({
  type: SORT_ALFABETIC,
  payload: input,
});

const sortCountriesPopulation = (sortType) => ({
  type: SORT_POPULATION,
  payload: sortType,
});

const borrarTodo = () => {
  return (dispatch) => {
    dispatch({ type: BORRAR_FILTROS });
    dispatch(getCountries());
  };
};

const filterByContinent = (continent) => ({
  type: FILTER_BY_CONTINENT,
  payload: continent,
});

export {
  borrarTodo,
  getCountries,
  searchCountries,
  sortCountriesAlf,
  filterByContinent,
  sortCountriesPopulation,
  filterByActivity,
  FILTER_BY_ACTIVITY,
  FILTER_BY_CONTINENT,
  GET_COUNTRIES,
  SEARCH_COUNTRIES,
  SORT_POPULATION,
  SORT_ALFABETIC,
  BORRAR_FILTROS,
};
