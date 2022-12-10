import { GET_COUNTRIES, GET_COUNTRY_BY_NAME, GET_COUNTRIES_BY_REGION } from "../types";

const CountriesReducerInitialState = {
  countries: [],
  country: null,
}

const CountriesReducer = (state = CountriesReducerInitialState, action) => {
  const{type, payload} = action;
  switch (type) {

  case GET_COUNTRIES:
    return {...state, countries: payload};
  case GET_COUNTRY_BY_NAME:
    return {...state, country: payload};
  case GET_COUNTRIES_BY_REGION:
    return {...state, countries: payload};

  default:
    return state
  }
}

export default CountriesReducer;