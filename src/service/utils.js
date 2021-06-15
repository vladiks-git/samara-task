export function prepareData(data) {
    console.log(data)
    const mainInfo = data.main
    let temp = Math.round(mainInfo.temp - 273)
    let feelTemp = Math.round(mainInfo.feels_like - 273)
    let humidity = mainInfo.humidity
    const result = {
        temp,
        feelTemp,
        humidity
    }
    return result
}