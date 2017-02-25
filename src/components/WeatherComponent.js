import React from 'react';
import { browserHistory } from 'react-router';
import moment from 'moment';
import api from '../apiHelper';
import '../Loader.css';

class WeatherComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: undefined,
      error: false
    };
  }

  componentDidMount() {
    api.getData(this.props.params.city).then((data) => {
      if (data && data.list) {
        this.setState({
          forecast: data.list,
        });
      } else {
        this.setState({
          forecast: [],
          error: data
        });
      }
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
    } else if (this.state.error) {
      return <h3 className="text-center">{this.state.error}</h3>;
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
      <div id="forecast" className="text-center">
        <h1>{this.props.params.city}</h1>
        <p>Select a day</p>
        <div id="forecast-daily-container">
          {forecast}
        </div>
      </div>
    );
  }
}

WeatherComponent.propTypes = {
  params: React.PropTypes.object,
  routeParams: React.PropTypes.object,
};

export default WeatherComponent;
