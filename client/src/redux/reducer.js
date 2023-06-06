import { GET_COUNTRIES } from "./actions";
import { ERROR_COUNTRIES } from "./actions";

const initialState = {
  countries: [],
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
    default:
      return { ...state };
  }
};

export default rootReducer;
