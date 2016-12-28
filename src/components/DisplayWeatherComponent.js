import React from 'react';
import { browserHistory } from 'react-router';
import moment from 'moment';
import api from '../apiHelper';
import '../Loader.css';

class DisplayWeatherComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: undefined,
    };
  }

  componentDidMount() {
    api.getData(this.props.params.city).then((data) => {
      this.setState({
        forecast: data.list,
      });
    });
  }

  handleClick(e, index) {
    e.preventDefault();
    browserHistory.push({
      pathname: `/detail/${this.props.routeParams.city}`,
      state: this.state.forecast[index],
    });
  }


  render() {
    if (!this.state.forecast) {
      return <div className="loader">Loading...</div>;
    }

    const forecast = this.state.forecast.map((dailyForecast, index) =>
      (
        <a
          href=""
          className="col-xs-6 col-sm-4 col-md-3 forecast-daily"
          key={dailyForecast.dt}
          onClick={e => this.handleClick(e, index)}
        >
          <p><img src={`/images/weather-icons/${dailyForecast.weather[0].icon}.svg`} alt="" /></p>
          <p>{ moment(new Date(dailyForecast.dt * 1000)).format('dddd, MMM D') }</p>
        </a>
      ));

    return (
      <div id="forecast-container" className="text-center">
        <div id="forecast">
          <h1>{this.props.params.city}</h1>
          <p>Select a day</p>
          <div id="forecast-daily-container">
            {forecast}
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayWeatherComponent;
