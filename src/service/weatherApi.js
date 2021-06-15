import {prepareData} from "./utils";

export default class WeatherApi {
    key = '5c1843b6804362b52c8ce171e3b1b82c'
    url = `https://api.openweathermap.org/data/2.5/weather?q=`
    async getWeather(city){
        const response = await fetch(`${this.url}${city}&appid=${this.key}&lang={ru}`)
        console.log(response)
        const json = await response.json()
        if(json.cod === '404' || json.cod === '400'){
            return false
        }
        return prepareData(json)
    }
}