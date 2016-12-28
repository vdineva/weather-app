import React from 'react';
import WeatherFormComponent from './WeatherFormComponent';
import '../App.css';

function Home(props) {
  return (
    <div className="Home clearfix">
      <div className="Home-content text-center">
        <h1>Enter a City and State</h1>
        <WeatherFormComponent />
      </div>
    </div>
  )
}

export default Home;
