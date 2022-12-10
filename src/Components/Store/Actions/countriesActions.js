import axios from "axios";
import { GET_COUNTRIES, GET_COUNTRY_BY_NAME, GET_COUNTRIES_BY_REGION } from "../types";

const countriesApi = 'https://restcountries.com/v2';

export const getCountries = () => async (dispatch) => {
    await axios.get(countriesApi + '/all')
        .then(res => {
            const countries = res.data.map((country) => ({
                name: country.name,
                capital: country.capital,
                population: new Intl.NumberFormat().format(country.population),
                region: country.region,
                flag: country.flag
            }))
            dispatch({type: GET_COUNTRIES, payload: countries})
        })
        .catch((err) => console.log('Get countries api error: ', err))
}

export const getCountryByName = (name) => async dispatch => {
    await axios.get(`${countriesApi}/name/${name}`)
        .then(res => {
            dispatch({type: GET_COUNTRY_BY_NAME, payload: res.data[0]})
        })
        .catch((err) => console.log('Get country by name api error: ', err))
}

export const getCountriesByRegion = (regionName) => async dispatch => {
    await axios.get(`${countriesApi}/region/${regionName}`)
        .then(res => {
            const countries = res.data.map((country) => ({
                name: country.name,
                capital: country.capital,
                population: new Intl.NumberFormat().format(country.population),
                region: country.region,
                flag: country.flag
            }))
            dispatch({type: GET_COUNTRIES_BY_REGION, payload: countries})
        })
        .catch((err) => console.log('Get country by region api error: ', err))
}