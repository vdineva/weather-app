import React from 'react';
import moment from 'moment';


function DailyWeatherComponent(props) {
  return (
    <div id="forecast-detail" className="text-center col-xs-12">
      <p><img src={`/images/weather-icons/${props.location.state.weather[0].icon}.svg`} alt="" /></p>
      <h2>{ moment(new Date(props.location.state.dt * 1000)).format('dddd, MMM D') }</h2>
      <br /><br />
      <p>{props.params.city}</p>
      <p>{props.location.state.weather[0].description}</p>

      <p>min temp: {Math.round(props.location.state.temp.min)} degrees</p>
      <p>max temp: {Math.round(props.location.state.temp.max)} degrees</p>
      <p>humidity: {props.location.state.humidity}</p>
    </div>
  );
}

DailyWeatherComponent.propTypes = {
  location: React.PropTypes.object,
  params: React.PropTypes.object,
};

export default DailyWeatherComponent;
