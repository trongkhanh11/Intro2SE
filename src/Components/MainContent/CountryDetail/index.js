import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getCountryByName } from "../../Store/Actions/countriesActions";
import { ThemeContext } from "../../ThemeContext/themeContext";
import { useEffect } from "react";
import CountryInfo from "./CountryInfo";

function CountryDetail(props) {
    const themeContext = useContext(ThemeContext);
    const slug = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const country = useSelector(state => state.Countries.country);

    useEffect(() => {
      dispatch(getCountryByName(slug.countryName));
    }, [slug.countryName, dispatch])
    

    return (
        <Wrapper>
            <div className={`goback-btn ${themeContext.theme}`} onClick={() => navigate(-1)}>Go back</div>
            <CountryContainer>
                <div className="flagCountry">
                    <img src={country ? country.flag : 'https://via.placeholder.com/300x200?text=Image+Error'} alt="" />
                </div>
                <CountryInfo/>
            </CountryContainer>
        </Wrapper>
    )
}

export default CountryDetail;

const Wrapper = styled.div`
    padding-top: 20px;
    .goback-btn {
        display: block;
        width: 80px;
        height: 28px;
        line-height: 28px;
        padding: 2px 4px;
        border-radius: 4px;
        text-align: center;
        font-weight: 500;
        filter: brightness(0.9);
        transition: all 0.2s linear;
        &:hover {
            filter: brightness(1);
            font-weight: bold;
            cursor: default;
            user-select: none
        }
    }
`;

const CountryContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    @media only screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
    .flagCountry {
        max-width: 400px;
        width: 100%;
        height: 100%;
        margin-bottom: 12px;
        box-shadow: var(--BoxShadow);
        img {
            width: 100%;
            height: 100%;
        }
    }
`;