import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { geolocated, geoPropTypes } from 'react-geolocated';

import * as locationActions from '../../actions/locationActions';
import LocationListing from '../location/locationListing';
import Input from '../common/TextInput';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      address: '',
      errors: {},
      searching: false
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.submitAddress = this.submitAddress.bind(this);
  }

  onSearchChange(event) {
    this.setState({
      address: event.target.value
    });
  }

  submitAddress() {
    this.setState({searching: true});
    this.props.actions.loadLocations(this.state.address)
      .then(() => this.setState({searching: false}));
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Where's Lunch?</h1>
          <Input label="Your Address" name="search" onChange={this.onSearchChange}></Input>
          <button type="button" onClick={this.submitAddress}>Search</button>
          <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
        </div>
        {this.props.locations && this.props.locations.length > 0 && <LocationListing locations={this.props.locations} />}
      </div>
    );
  }
}

HomePage.propTypes = {
  locations: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    locations: state.locations
  };
}

// Sets actions to this.props.action
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(locationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

/*
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
})(HomePage);
  */
