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
  ordenamiento: [],
  noResultsFound: false,
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
      if (searchResults > 0) {
        return {
          ...state,
          searchResults: searchResults,
        };
      } else
        return {
          ...state,
          searchResults: searchResults,

          noResultsFound: true,
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
      let countriesSort;
      if (action.payload === "A-Z") {
        countriesSort = [
          ...state.countries.sort((a, b) => a.name.localeCompare(b.name)),
        ];
        sortedCountries = [...state.searchResults].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (action.payload === "Z-A") {
        countriesSort = [
          ...state.countries.sort((a, b) => b.name.localeCompare(a.name)),
        ];

        sortedCountries = [...state.searchResults].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      return {
        ...state,
        searchResults: sortedCountries,
        ordenamiento: countriesSort,
      };

    //! orden popu
    case SORT_POPULATION:
      let sortedPopulations;
      let countriesSortPopu;
      if (action.payload === "Ascendente") {
        countriesSortPopu = [...state.countries].sort(
          (a, b) => a.population - b.population
        );

        sortedPopulations = [...state.searchResults].sort(
          (a, b) => a.population - b.population
        );
      } else if (action.payload === "Descendente") {
        countriesSortPopu = [...state.countries].sort(
          (a, b) => b.population - a.population
        );

        sortedPopulations = [...state.searchResults].sort(
          (a, b) => b.population - a.population
        );
      } else {
        sortedPopulations = state.searchResults;
      }
      return {
        ...state,
        searchResults: sortedPopulations,
        ordenamiento: countriesSortPopu,
      };

    //! borrar todos los filtros
    case BORRAR_FILTROS:
      return {
        ...state,
        countries: [],
        searchResults: [],
        ordenamiento: [],
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
