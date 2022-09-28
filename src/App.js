import React, {useState} from "react";
import styled from "styled-components";
import CityComponent from "./Components/CityComponent";
import WeatherComponent from "./Components/WeatherComponent";
import axios from "axios";

const API_KEY = "6615d31a59dfbfee046a2b33a72365f4";


const Container = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
border-radius: 4px;
padding: 20px 10px;
width: 380px;
background: white;
font-family: 'Montserrat', sans-serif;

@media(max-width:450px){
  div{

  }
}
`

const AppHeading = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`

const DeveloperDetails = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: black;
  position: absolute;
  bottom: 20px;
`;

function App() {

  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async (event) => {
    event.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    setWeather(response.data);
  }


  return (
    <div>
      <Container>
        <AppHeading>React Weather App</AppHeading>
        {weather ? (<WeatherComponent weather={weather} />) : (<CityComponent setCity={setCity} fetchWeather={fetchWeather} />)}
      </Container>


      <DeveloperDetails>Developed by <a href="https://github.com/SeshuYaswanth">Seshu Yaswanth Reddy</a></DeveloperDetails>
    </div>
  );
}

export default App;