import React from 'react';
import moment from 'moment';


function DisplayDetailWeatherComponent(props) {
  return (
    <div id="forecast-container" className="text-center">
      <div id="forecast-detail" className="col-xs-12">
        <p><img src={`/images/weather-icons/${props.location.state.weather[0].icon}.svg`} alt="" /></p>
        <h2>{ moment(new Date(props.location.state.dt * 1000)).format('dddd, MMM D') }</h2>
        <br />
        <p>{props.params.city}</p>
        <p>{props.location.state.weather[0].description}</p>

        <p>min temp: {Math.round(props.location.state.temp.min)} degrees</p>
        <p>max temp: {Math.round(props.location.state.temp.max)} degrees</p>
        <p>humidity: {props.location.state.humidity}</p>
      </div>
    </div>
  );
}

export default DisplayDetailWeatherComponent;
