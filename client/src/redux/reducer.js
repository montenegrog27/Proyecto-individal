import {
  GET_COUNTRIES,
  SEARCH_COUNTRIES,
  SORT_ALFABETIC,
  SORT_POPULATION,
  BORRAR_FILTROS,
  FILTER_BY_CONTINENT,
} from "./actions";

const initialState = {
  countries: [],
  searchResults: [],
  filterContinent: [],
  filterActivity: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        error: null,
      };

    case SEARCH_COUNTRIES:
      const searchQuery = action.payload.toLowerCase().trim();
      const searchResults = state.countries.filter((country) =>
        country.name.toLowerCase().includes(searchQuery)
      );

      return {
        ...state,
        searchResults: searchResults,
      };

    //! filtro continente
    case FILTER_BY_CONTINENT:
      const continent = action.payload;
      let filteredResults;

      if (continent === "") {
        filteredResults = state.countries;
      } else {
        filteredResults = state.countries.filter(
          (country) => country.continent === continent
        );
      }

      return {
        ...state,
        searchResults: filteredResults,
      };

    //! orden alfabetico

    case SORT_ALFABETIC:
      let sortedCountries;

      if (action.payload === "A-Z") {
        sortedCountries = [...state.searchResults].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (action.payload === "Z-A") {
        sortedCountries = [...state.searchResults].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      } else {
        sortedCountries = state.searchResults;
      }

      return {
        ...state,
        searchResults: sortedCountries,
      };

    //! orden popu
    case SORT_POPULATION:
      let sortedPopulations;
      if (action.payload === "Ascendente") {
        sortedPopulations = [...state.searchResults].sort(
          (a, b) => a.population - b.population
        );
      } else if (action.payload === "Descendente") {
        sortedPopulations = [...state.searchResults].sort(
          (a, b) => b.population - a.population
        );
      } else {
        sortedPopulations = state.searchResults;
      }
      return {
        ...state,
        searchResults: sortedPopulations,
      };

    //! borrar todos los filtros
    case BORRAR_FILTROS:
      return {
        countries: [],
        filterContinent: [],
        filterActivity: [],
        searchResults: [],
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
