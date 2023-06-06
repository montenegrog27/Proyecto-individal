import { GET_COUNTRIES } from "./actions";
import { ERROR_COUNTRIES } from "./actions";
import { FILTER_CONTINENT } from "./actions";

const initialState = {
  countries: [],
  filtrado: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        error: null,
      };
    case ERROR_COUNTRIES:
      return {
        ...state,
        countries: [],
        error: action.payload,
      };

    case FILTER_CONTINENT:
      return {
        ...state,
        filtrado: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
