import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as locationActions from '../../actions/locationActions';
//import toastr from 'toastr';

class LocationPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      location: Object.assign({}, this.props.location)
    };
  }

  componentWillReceiveProps(nextProps) {
    // only update if we've requested a new course
    if (this.props.location.externalId != nextProps.location.externalId) {
      this.setState({location: Object.assign({}, nextProps.location)});
    }
  }

  render() {
    const {name, address} = this.props.location;
    return (
      <div>
        <h1>{name}</h1>
        <address>{address}</address>
      </div>
    );
  }
}

LocationPage.propTypes = {
  location: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

// Pull in the React Router context so router is available on this.context.router.
// contextTypes is like a global, forces router on this.context
LocationPage.contextTypes = {
  router: PropTypes.object
};

function getLocationById(locations, id) {
  const location = locations.filter(location => location.externalId == id);
  if (location) return location[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const locationId = ownProps.params.id;
  let location = {externalId: '', name: '', address: ''};

  if (locationId && state.locations.length > 0) {
    location = getLocationById(state.locations, locationId);
  }

  return {
    location
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(locationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationPage);