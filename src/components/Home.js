import React from 'react';
import WeatherFormComponent from './WeatherFormComponent';
import '../App.css';

function Home() {
  return (
    <div className="Home text-center">
      <h1>Enter a City and State</h1>
      <WeatherFormComponent />
    </div>
  );
}

export default Home;
