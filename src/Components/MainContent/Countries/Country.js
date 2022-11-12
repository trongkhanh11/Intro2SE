import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from '../../ThemeContext/themeContext';

function Country () {
    const themeContext = useContext(ThemeContext);

    return (
        <CountryCard className={themeContext.theme}>
                <div className="flag">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1024px-Flag_of_Vietnam.svg.png" alt="" />
                </div>
                <CountryInfo>
                    <h3>Viet Nam</h3>
                    <div>Population:
                        <span> 97,338,579</span>
                    </div>
                    <div>Region:
                        <span> Asia</span>
                    </div>
                    <div>Capital:
                        <span> Ha Noi</span>
                    </div>
                </CountryInfo>
            </CountryCard>
    )
}

export default Country;

const CountryCard = styled.div`
    max-width: 420px;
    width: 100%;
    filter: brightness(1);
    overflow: hidden;
    border-radius: 4px;
    margin-bottom: 12px;
    user-select: none;

    &:hover {
        filter: brightness(0.9);
    }

    &:hover img {
        transform: scale(1.1);
    }

    .flag {
        width: 100%;
        height: 160px;
        display: block;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.2s linear;
        }
    }
`;

const CountryInfo = styled.div`
    padding: 10px 16px;

    h3 {
        margin: 16px 0;
        font-size: 20px;
        font-weight: bold;
        height: 50px;
    }

    div {
        display: block;
        font-size: 16px;
        font-weight:700;
        margin: 4px 0;
    }

    span {
        font-weight: 400;
    }
`;