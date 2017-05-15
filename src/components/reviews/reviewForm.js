import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as reviewActions from '../../actions/reviewActions';

import Input from '../common/TextInput';
import SelectRating from './selectRating';

class ReviewForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      review: {
        comment: '',
        rating: 1,
        submitting: false,
        locationId: this.props.location.externalId
      }
    };

    this.onReviewChange = this.onReviewChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit() {
    this.setState({
      submitting: true
    });
    this.props.actions.submitReview(this.state.review)
      .then(() => this.setState({submitting: false}));
  }

  onReviewChange(event) {
    const field = event.target.name;
    let review = this.state.review;
    review[field] = isNaN(event.target.value) ? event.target.value : parseInt(event.target.value);
    return this.setState({review: review});
  }

  render() {
    /* globals API_URL */
    const authUrl = `${API_URL}v1/auth/facebook`;
console.log(this.props);
    if (!this.props.auth.authenticated) {
      return (
        <div className="review-form">
          You must <a href={authUrl}>have an account / login</a> to add a review.
        </div>
      );
    }
    return (
      <form role="form" className="review-form">
        <h2>Leave a Review:</h2>
        <SelectRating label="Rating" onSelect={this.onReviewChange} selectedRating={this.state.review.rating} />
        <Input label="Comment"
               name="comment"
               onChange={this.onReviewChange} />
        <button type="button"
                className="btn btn-primary"
                disabled={this.state.submitting}
                onClick={this.submit}>Submit</button>
      </form>
    );
  }
}

ReviewForm.propTypes = {
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    location: state.location,
    auth: state.auth
  };
}

// Sets actions to this.props.action
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(reviewActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);