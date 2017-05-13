import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
/* globals API_URL */
const authUrl = `${API_URL}v1/auth/facebook`;
const Header = ({loading, auth, logout}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      {auth.authenticated && <a href="#" onClick={logout}>Logout</a>}
      {!auth.authenticated && <a href={authUrl}>Login via FB</a>}
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default Header;