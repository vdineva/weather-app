import React from 'react';
import { browserHistory } from 'react-router';

class WeatherFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      city: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.city.length) {
      const path = `/forecast/${this.state.city}`;
      browserHistory.push(path);
    }
  }

  onChange(e) {
    this.setState({
      city: e.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="St George, Utah"
          onChange={this.onChange}
        />
        <button type="submit" className="btn btn-success">Get Weather</button>
      </form>
    );
  }
}

export default WeatherFormComponent;
