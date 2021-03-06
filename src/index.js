import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import WeatherComponent from './components/WeatherComponent';
import DailyWeatherComponent from './components/DailyWeatherComponent';

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/forecast/:city" component={WeatherComponent} />
      <Route path="/detail/:city" component={DailyWeatherComponent} />
    </Route>
  </Router>
);

ReactDOM.render(Routes, document.getElementById('root'));
