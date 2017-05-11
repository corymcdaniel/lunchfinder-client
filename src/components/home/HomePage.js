import React from 'react';
import { Link } from 'react-router';
import {geolocated} from 'react-geolocated';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Where's Lunch?</h1>
        {this.props.isGeolocationAvailable &&
          this.props.coords && <p>{this.props.coords.latitude} - {this.props.coords.longitude}</p>}
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
})(HomePage);