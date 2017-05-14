import React, {PropTypes} from 'react';
import Rating from './rating';

const ReviewListItem = ({user, rating, comment, createdAt}) => {
  return (
    <div className="media">
      <div className="media-body">
        <h4 className="media-heading">{user.name}</h4>
        <h5>{createdAt}</h5>
        <p><Rating rating={rating}></Rating></p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

ReviewListItem.propTypes = {
  user: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string,
  createdAt: PropTypes.string.isRequired
};

export default ReviewListItem;