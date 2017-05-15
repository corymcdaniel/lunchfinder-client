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
          <h1>Where Should I Eat?</h1>
          <p>Search for restaurants near you and see what other's have to say about them.</p>
          <div className="row">
            <div className="col-md-10">
              <Input label="Find restaurants near (Enter an address, city, state, or postal code)" name="search" onChange={this.onSearchChange} />
            </div>
            <div className="col-md-2 pull-right">
              <button className="btn btn-primary" type="button" onClick={this.submitAddress}>Search</button>
            </div>
          </div>
        </div>
        {this.props.locations && this.props.locations.length > 0 && <LocationListing locations={this.props.locations} />}
      </div>
    );
  }
}

HomePage.propTypes = {
  locations: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
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
