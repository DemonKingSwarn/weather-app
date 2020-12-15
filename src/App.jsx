import React, { Component } from 'react'

import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(d => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${d.coords.latitude}&lon=${d.coords.longitude}10&appid=2616534d3b346a2089d5c0d38b900a30`).then((response) => response.json()).then((response => {this.setState(response); console.log(new Date(response.sys.sunrise * 1000))}))
    })

  }

  render() {
    return (
      <div>
        <h1 id="title">
          Weather
        </h1>
        <div className="info-list">
          <h2>General Info</h2>
          <div  className="info">
            <span className="info-name">Temperature</span><span className="info-item">{ this.state ? this.state.main.temp : "Loading..." }</span>
          </div>
          <div  className="info">
          <span className="info-name">Min Temperature</span><span className="info-item">{ this.state ? this.state.main.temp_min : "Loading..." }</span>
          </div>
          <div  className="info">
          <span className="info-name">Max Temperature</span><span className="info-item">{ this.state ? this.state.main.temp_max : "Loading..." }</span>
          </div>
          <div  className="info">
          <span className="info-name">Feels Like</span><span className="info-item">{ this.state ? this.state.main.feels_like : "Loading..." }</span>
          </div>
          <div  className="info">
          <span className="info-name">Pressure</span><span className="info-item">{ this.state ? this.state.main.pressure : "Loading..." }</span>
          </div>
          <div  className="info">
          <span className="info-name">Humidity</span><span className="info-item">{ this.state ? this.state.main.humidity : "Loading..." }</span>
          </div>
          <div  className="info">
          <span className="info-name">Visibility</span><span className="info-item">{ this.state ? this.state.visibility : "Loading..." }</span>
          </div>
        </div>

        <div className="info-list">
          <h2>Wind</h2>
          <div  className="info">
            <span className="info-name">Speed</span><span className="info-item">{ this.state ? this.state.wind.speed : "Loading..." }</span>
          </div>
          <div  className="info">
            <span className="info-name">Degree</span><span className="info-item">{ this.state ? this.state.wind.deg : "Loading..." }</span>
          </div>
        </div>

        <div className="info-list">
          <h2>Important Times</h2>
          <div className="info">
            <span className="info-name">Sunrise</span><span className="info-item">{ this.state ? new Date(this.state.sys.sunrise * 1000).toLocaleTimeString() : "Loading..." }</span>
          </div>
          <div  className="info">
            <span className="info-name">Sunset</span><span className="info-item">{ this.state ? new Date(this.state.sys.sunset * 1000).toLocaleTimeString() : "Loading..." }</span>
          </div>
        </div>

        <div className="info-list">
          <h2>Your Information</h2>
          <div className="info">
            <span className="info-name">Country</span><span className="info-item">{ this.state ? this.state.sys.country : "Loading..." }</span>
          </div>
          <div className="info">
            <span className="info-name">City</span><span className="info-item">{ this.state ? this.state.name : "Loading..." }</span>
          </div>
          <div  className="info">
            <span className="info-name">Sunset</span><span className="info-item">{ this.state ? "GMT " + (Math.floor(this.state.timezone / 3600)).toString() + ":" +  (this.state.timezone % 3600 / 60).toString()  : "Loading..." }</span>
          </div>
        </div>
      </div>
    )
  }
}

