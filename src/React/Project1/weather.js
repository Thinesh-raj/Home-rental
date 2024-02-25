import { useState } from "react"
import "./weather.css"
import axios from "axios"

function Weather() {
    const [value, setValue] = useState("");
    const [weather, setWeather] = useState([]);
    const [alert, setAlert] = useState({});
    function apicall() {
        if (value !== "") {
            axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=500521b2516a5a20a82b11362e62e21f`)
                .then((resData) => {
                    setAlert({ alert2: false })
                    console.log(resData.data)
                    if (resData.data.length !== 0) {
                        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${resData.data[0].lat}&lon=${resData.data[0].lon}&appid=500521b2516a5a20a82b11362e62e21f`)
                            .then(res => setWeather([res.data]))
                    }
                })
                .catch(setAlert({ alert1: true }))
        }
        console.log(weather)
    }
    return <div className="outline">
        <h4>Enter Location</h4>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={apicall}>fetch</button>
        {alert.alert1 && <small>*** Enter a valid location ***</small>}
        {
            weather.map((e, i) => <div key={i + 1}>
                <p>Temp : {e.main.temp}</p>
                <p>Pressure : {e.main.pressure}</p>
                <p>Humitidy : {e.main.humidity}</p>
                <p>Weather : {e.weather[0].main}</p>
                <p>windspeed : {e.wind.speed}</p>
            </div>
            )
        }
        {alert.alert2 && <p>OOPS something went wrong</p>}
    </div>
}
export default Weather