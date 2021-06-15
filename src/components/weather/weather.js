import React, {useState} from 'react';
import WeatherApi from "../../service/weatherApi";
import CustomInput from "../UI/input/customInput";
import Btn from "../UI/btn/btn";
import MainData from "./mainData/mainData";
import './weather.scss'
import MyLink from "../UI/link/myLink";
import Loader from "../UI/loader/loader";

const Weather = () => {
    let [city, setCity] = useState('')
    let [wrongCity, setWrongCity] = useState(false)
    let [temp, setTemp] = useState(null)
    let [feelTemp, setFeelTemp] = useState(null)
    let [humidity, setHumidity] = useState(null)
    let [load, setLoad] = useState(false)
    let [successData, setSuccessData] = useState(false)
    const api = new WeatherApi()

    const onInputHandler = (value) => {
        setCity(value)
    }

    const onClickHandler = async () => {
        setLoad(true)
        const response = await api.getWeather(city)
        setLoad(false)
        if (!response) {
            setWrongCity(true)
            setSuccessData(false)
        } else {
            setWrongCity(false)
            setSuccessData(true)
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
            {successData ? <MainData feelTemp={feelTemp} humidity={humidity} temp={temp}/> : null}
            <MyLink title={'Back'} path={'/'} width={'60px'}/>
            {load ? <Loader/> : null}
        </div>
    );
};

export default Weather;