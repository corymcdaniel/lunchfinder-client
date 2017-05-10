import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import * as authActions from '../../actions/authActions';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.facebookLogin = this.facebookLogin.bind(this);
  }

  facebookLogin() {
    console.log('here');
    authActions.facebookLogin();
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Where's Lunch?</h1>
        <p><a onClick={this.facebookLogin}>Login with Facebook</a></p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired
};

export default HomePage;