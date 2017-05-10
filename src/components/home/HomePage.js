import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import * as authActions from '../../actions/authActions';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Where's Lunch?</h1>
        <p><a href="http://localhost:3300/v1/auth/facebook">Login with Facebook</a></p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;