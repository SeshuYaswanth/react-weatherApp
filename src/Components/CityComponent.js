import styled from "styled-components";


const CityLogoImage = styled.img`
    width: 140px;
    height: 140px;
    margin: 40px auto;
`;

const CityHeadingLabel = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: black;
    margin: 10px auto;
`;

const CitySearchInput = styled.form`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    border-radius: 4px;
    margin: 20px auto;
    font-weight: bold;


    & input {
        font-size: 14px;
        padding: 10px;
        outline: none;
        border: none;
        font-weight: bold;
    }

    & button {
        font-size: 14px;
        padding: 10px;
        outline: none;
        border: none;
        font-weight: bold;
        background-color: black;
        color: white;
        border-radius: 4px;
        cursor: pointer;
    }
`;

const CityComponent = ({setCity, fetchWeather}) => {
    return(
        <>
            <CityLogoImage src="/icons/perfect-day.svg" />
            <CityHeadingLabel>Find weather of your city.</CityHeadingLabel>
            <CitySearchInput onSubmit={fetchWeather}>
                <input type="text" placeholder="city" onChange={event => setCity(event.target.value)} />
                <button type="submit">Search</button>
            </CitySearchInput>
        </>
    );
}

export default CityComponent;