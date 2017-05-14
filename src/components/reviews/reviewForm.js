import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Input from '../common/TextInput';
import SelectRating from './selectRating';

class ReviewForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      review: {
        comment: '',
        rating: 0,
        submitting: false
      }
    };

    this.onReviewChange = this.onReviewChange.bind(this);
  }

  onReviewChange(event) {
    const field = event.target.name;
    let review = this.state.review;
    review[field] = event.target.value;
    return this.setState({review: review});
  }

  render() {
    return (
      <form role="form">
        <SelectRating onSelect={onReviewChange} />
        <Input label="Comment"
               name="comment"
               onChange={this.onReviewChange} />
      </form>
    );
  }
}

ReviewForm.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    location: state.location
  };
}

// Sets actions to this.props.action
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(reviewActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);