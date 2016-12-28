import React from 'react';
import { Link } from 'react-router';
import WeatherFormComponent from './WeatherFormComponent';

function Header() {
  return (
    <div className="Header clearfix">
      <div className="col-xs-12 col-sm-6">
        <h2><Link to="/">Vanya&apos;a Weather App</Link></h2>
      </div>
      <div className="hidden-xs col-sm-6">
        <div className="pull-right">
          <WeatherFormComponent />
        </div>
      </div>
    </div>
  );
}

export default Header;
