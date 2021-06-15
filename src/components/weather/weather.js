import React, {useState} from 'react';
import WeatherApi from "../../service/weatherApi";
import CustomInput from "../UI/input/customInput";
import Btn from "../UI/btn/btn";
import MainData from "./mainData/mainData";
import './weather.scss'

const Weather = () => {
    let [city, setCity] = useState('')
    let [wrongCity, setWrongCity] = useState(false)
    let [temp, setTemp] = useState(null)
    let [feelTemp, setFeelTemp] = useState(null)
    let [humidity, setHumidity] = useState(null)
    const api = new WeatherApi()

    const onInputHandler = (value) => {
        setCity(value)
    }

    const onClickHandler = async () => {
        const response = await api.getWeather(city)
        if (!response) {
            setWrongCity(true)
        } else {
            setWrongCity(false)
            const {temp, feelTemp, humidity} = response
            setTemp(temp)
            setFeelTemp(feelTemp)
            setHumidity(humidity)
        }
    }

    return (
        <div className={'weather'}>
            <p className={'weather__title'}>Weather</p>
            <CustomInput inputHandler={event => onInputHandler(event.target.value)}/>
            <Btn clickHandler={() => onClickHandler()} mt={'15px'}/>
            {wrongCity ? <p>Не удалось найти город или наш api не смог.</p> : null}
            {temp ? <MainData feelTemp={feelTemp} humidity={humidity} temp={temp}/> : null}

        </div>
    );
};

export default Weather;