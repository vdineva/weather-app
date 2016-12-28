import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import DisplayWeatherComponent from './components/DisplayWeatherComponent';
import DisplayDetailWeatherComponent from './components/DisplayDetailWeatherComponent';
import './index.css';

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/forecast/:city" component={DisplayWeatherComponent} />
      <Route path="/detail/:city" component={DisplayDetailWeatherComponent} />
    </Route>
  </Router>
);

ReactDOM.render(Routes, document.getElementById('root'));
