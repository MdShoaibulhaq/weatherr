import axios from 'axios'
import React,{useState} from 'react'

export default function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=9cc6e69806864e6ed054b34c0cfea5cc`

  const searchLocation = (event) =>{
if(event.key === 'Enter'){

  axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data)
    
  })
  setLocation('')
}

}

  return (
    <div className='app'>
      <div className="search">
        <input type='text' placeholder='enter location' value={location} onKeyPress={searchLocation}onChange={event => setLocation(event.target.value)}/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          
            </div>
        </div>
        <div className="description">

          {data.weather ? <p>{data.weather[0].main}</p> : null}
          
        </div>

        {data.name != undefined &&
        
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p>: null}
            <p className='bold'></p>
            <p>feels like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='nold'>{data.main.humidity}%</p>:null}
              
              <p>humidity</p>
          </div>
          <div className="wind">

            {data.main ? <p>{data.wind.speed}mph</p> :null}
         
         <p>wind speed</p>
          </div>
        </div>

        }
        
      </div>
    </div>
  )
}
