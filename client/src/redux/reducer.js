import { GET_COUNTRIES, SEARCH_COUNTRIES, SORT_COUNTRIES } from "./actions";

const initialState = {
  countries: [],
  filtrado: [],
  searchResults: [],
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
    case SORT_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
