import styled from "styled-components";

export const WeatherInfoIcons = {
    sunset: "/icons/temp.svg",
    sunrise: "/icons/temp.svg",
    humidity: "/icons/humidity.svg",
    wind: "/icons/wind.svg",
    pressure: "/icons/pressure.svg",
}

export const WeatherIcons = {
    "01d": "/react-weatherApp/icons/sunny.svg",
    "01n": "/react-weatherApp/icons/night.svg",
    "02d": "/react-weatherApp/icons/day.svg",
    "02n": "/react-weatherApp/icons/cloudy-night.svg",
    "03d": "/react-weatherApp/icons/cloudy.svg",
    "03n": "/react-weatherApp/icons/cloudy.svg",
    "04d": "/react-weatherApp/icons/perfect-day.svg",
    "04n": "/react-weatherApp/icons/cloudy-night.svg",
    "09d": "/react-weatherApp/icons/rain.svg",
    "09n": "/react-weatherApp/icons/rain-night.svg",
    "10d": "/react-weatherApp/icons/rain.svg",
    "10n": "/react-weatherApp/icons/rain-night.svg",
    "11d": "/react-weatherApp/icons/storm.svg",
    "11n": "/react-weatherApp/icons/storm.svg",
    "12d": "/react-weatherApp/icons/mist.svg",
    "12n": "/react-weatherApp/icons/mist.svg",
  };

const WeatherCondition = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 30px auto;
`;

const Condition = styled.span`
    font-size: 14px;
    margin: 20px auto;

    & span {
        font-size: 28px;
    }
`;

const WeatherLogo = styled.img`
    widhth: 100px;
    height: 100px;
    margin: 5px auto;
`;

const Location = styled.span`
    font-size: 28px;
    font-weight: bold;
    margin: 20px auto;
`

const WeatherInfo = styled.span`
    font-size: 14px;
    font-weight: bold;
    margin: 20px 25px 10px;
    text-align: start;
    width: 80%;
`;

const WeatherInfoContainer = styled.span`
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = ({name, value}) => {
    return(
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]} />
            {/* /icons/temp.svg */}
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    )
}

const WeatherComponent = ({weather}) => {
    const isDay = weather?.weather[0].icon?.includes('d');
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`;
    };
    return(
        <>
            <WeatherCondition>
                <Condition><span>{`${Math.floor(weather?.main.temp - 273)}°C`}</span> | {weather?.weather[0]?.description}</Condition>
                <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]} />
            </WeatherCondition>
            <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
            <WeatherInfo>Weather Info</WeatherInfo>
            <WeatherInfoContainer>
                <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"} value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])} />
                <WeatherInfoComponent name="humidity" value={weather?.main?.humidity} />
                <WeatherInfoComponent name="wind" value={weather?.wind?.speed} />
                <WeatherInfoComponent name="pressure" value={weather?.main.pressure} />
            </WeatherInfoContainer>
        </>
    );
}

export default WeatherComponent;
