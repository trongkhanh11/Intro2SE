import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ScrollBar from "react-perfect-scrollbar";
import Country from "./Country";
import { getCountries, getCountriesByRegion } from "../../Store/Actions/countriesActions";
import { useParams } from "react-router-dom";

function Countries () {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.Countries.countries);
    const slug = useParams();

    useEffect(() => {
      if (slug.regionName) dispatch(getCountriesByRegion(slug.regionName))
      else dispatch(getCountries());
    }, [dispatch, slug.regionName])
    
    return (
        <ScrollBar style={{maxHeight: '70vh', overflow: 'hidden'}}> 
            <CountriesContainer>
            {
                countries.map((country, index) => (
                    <Country country = {country} key={index} />
                ))
            }
        
            </CountriesContainer>
        </ScrollBar>
    )
}

export default Countries;

const CountriesContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 12px;
    padding: 4px 1px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(3,1fr);
        gap: 10px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2,1fr);
        gap: 8px;
    }

    @media screen and (max-width: 680px) {
        grid-template-columns: repeat(1,auto);
    }
`;