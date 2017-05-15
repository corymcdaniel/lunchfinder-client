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
    const {name, address, reviews, url, menu, attributes} = this.props.location;
    return (
      <div>
        <div className="jumbotron">
          <h1>{name}</h1>
          <div className="row location-details">
            <div className="col-md-7">
              <p>
                <address><a href={`http://maps.google.com/?q=${address}`} target="_blank">{address}</a></address>
                {url && <a href={url} target="_blank">View Website</a>}
                <br/>
                {menu && <a href={menu} target="_blank">View Menu</a>}
              </p>
            </div>
            <div className="col-md-5">
              {attributes && <h4>Additional Details:</h4>}
              <ul>
                {attributes.map(attr => {
                  if (attr.summary) {
                    return (<li>{attr.name}: {attr.summary}</li>);
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
        <ReviewForm location={this.props.location}/>
        <div>
          {!reviews && <span>No one has left a review yet.</span>}
          {reviews && <ReviewList reviews={reviews}/>}
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