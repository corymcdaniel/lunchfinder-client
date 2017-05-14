import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as locationActions from '../../actions/locationActions';
import LoadingDots from '../common/LoadingDots';
import ReviewList from '../reviews/reviewList';
import ReviewForm from '../reviews/reviewForm';
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
    const {name, address, reviews} = this.props.location;
    return (
      <div>
        <div>
          <h1>{name}</h1>
          <address>{address}</address>
        </div>
        {this.props.auth && this.props.auth.authenticated &&
        <ReviewForm location={this.props.location}/>}
        <div>
          <ReviewList reviews={reviews}/>
        </div>
      </div>
    );
  }
}

LocationPage.propTypes = {
  location: PropTypes.object.isRequired,
  auth: PropTypes.object,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const { location, auth } = state;
  return {
    location,
    auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(locationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationPage);