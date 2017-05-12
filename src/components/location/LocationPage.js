import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as locationActions from '../../actions/locationActions';
import LoadingDots from '../common/LoadingDots';
//import toastr from 'toastr';

class LocationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false
    };
  }
  componentWillMount() {
    if (this.props.params.id && (!this.props.location || this.props.location.externalId !== this.props.params.id)) {
      this.setState({fetching: true});
      this.props.actions.getLocationById(this.props.params.id)
        .then(() => this.setState({fetching: false}));
    }
  }

  render() {
    if (!this.props.location || this.state.fetching) {
      return (<div><LoadingDots interval={100} dots={20}/></div>);
    }
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

function mapStateToProps(state) {
  const { location } = state;
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