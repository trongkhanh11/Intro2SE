import React, { useContext, useEffect, useRef, useState } from "react";
import {GiEarthAsiaOceania, GiWorld} from 'react-icons/gi';
import {FaChevronDown, FaGlobeAfrica, FaGlobeAmericas, FaGlobeAsia, FaGlobeEurope} from 'react-icons/fa';
import styled from "styled-components";
import {ThemeContext} from '../../ThemeContext/themeContext';

function Filter(props) {
    const themeContext = useContext(ThemeContext);
    const refSelect = useRef(null);
    const [isShowOptions, setIsShowOptions] = useState(false);

    const handleOptions = (e) => {
        if(refSelect.current) setIsShowOptions(refSelect.current.contains(e.target))
    }

    useEffect(() => {
        if(isShowOptions) {
            document.addEventListener('click', handleOptions)
            return () => {
                document.removeEventListener('click', handleOptions)
            }
        }
    }, [isShowOptions])

    return (
        <FilterPane>
            <h3>Filter by regions:</h3>
            <SelectPane>
                <Select 
                    className={themeContext.theme} 
                    ref={refSelect}
                    onClick={handleOptions}
                >
                    <span>All</span>
                    <FaChevronDown />
                </Select>
                <OptionsPane className={themeContext.theme}>
                    <OptionItem>
                        <GiWorld />
                        <span>All</span>
                    </OptionItem>
                    <OptionItem>
                        <FaGlobeAfrica />
                        <span>Americas</span>
                    </OptionItem>
                    <OptionItem>
                        <FaGlobeAmericas />
                        <span>Americas</span>
                    </OptionItem>
                    <OptionItem>
                        <FaGlobeAsia />
                        <span>Asia</span>
                    </OptionItem>
                    <OptionItem>
                        <FaGlobeEurope />
                        <span>Europe</span>
                    </OptionItem>
                    <OptionItem>
                        <GiEarthAsiaOceania />
                        <span>Oceania</span>
                    </OptionItem>
                </OptionsPane>
            </SelectPane>
        </FilterPane>
    )
}

export default Filter;

const FilterPane = styled.div`
    max-width: 160px;
    width: 100%;
    margin-top: 20px;

    h3 {
        font-size: 18px;
        font-weight: 600;
        text-shadow: var(--TextShadow);
    }
`;

const SelectPane = styled.div`
    width: 100%;
    margin-top: 8px;
    position: relative;
    background: #ccc;
`;

const Select = styled.div`
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    height: 34px;
    user-select: none;

    span {
        font-size: 18px;
        font-weight: bold;
    }
`;

const OptionsPane = styled.ul`
    width: 100%;
    margin-top: 2px;
    border-radius: 4px;
    position: absolute;
    overflow: hidden;
    z-index: 10;
`;

const OptionItem = styled.li`
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    padding: 4px 8px;

    &:hover {
        font-weight: bold;
        background: var(--SelectOptionBackground);
    }

    span {
        margin-left: 4px;
    }
`;