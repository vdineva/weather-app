import React from 'react';
import WeatherFormComponent from './WeatherFormComponent';

function Header() {
  return (
    <div className="Header clearfix">
      <div className="pull-left">
        <h2>Clever Title</h2>
      </div>
      <div className="pull-right">
        <WeatherFormComponent />
      </div>
    </div>
  );
}

export default Header;
