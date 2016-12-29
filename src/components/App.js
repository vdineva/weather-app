import React from 'react';
import Header from './Header';
import Home from './Home';
import '../App.css';

function App(props) {
  return (
    <div style={{ height: '100%' }} className="row">
      <Header />

      {props.children || <Home />}
    </div>
  );
}


App.propTypes = {
  children: React.PropTypes.element,
};

export default App;
