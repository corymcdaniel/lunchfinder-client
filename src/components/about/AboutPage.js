import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>About</h1>
        <br/>
        <p>This mini app lets you look for places to eat that are near you.
        Just enter an address and explore!</p>
        <p>View more info for restaurants to not only see additional details,
        but what others have to say and if they give them a thumbs-up or thumbs-down.</p>
        <p>Create an account with Facebook and leave your reviews as well!</p>
        <br/>
        <Link to="/">Get Started!</Link>
      </div>
    );
  }
}

export default AboutPage;