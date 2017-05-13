// Handles the app template for each page
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './common/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading} auth={this.props.auth} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  debugger;
  return {
    loading: state.ajaxCallsInProgress > 0,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(App);