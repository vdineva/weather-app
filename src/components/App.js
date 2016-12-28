import React from 'react';
import Header from './Header';
import Home from './Home';
import '../App.css';

function App(props) {
  return (
    <div style={{ height: '100%' }}>
      <Header />

      {props.children || <Home />}
    </div>
  );
}

export default App;
