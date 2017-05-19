import React, {PropTypes} from 'react';
import moment from 'moment';
import Rating from './rating';

const ReviewListItem = ({user, rating, comment, createdAt}) => {
  return (
    <li className="list-item media">
      <div className="media-body">
        <h4 className="media-heading">{user.name}</h4>
        <h5>{moment(createdAt).fromNow()}</h5>
        <p><Rating rating={rating} /></p>
        <p>{comment}</p>
      </div>
    </li>
  );
};

ReviewListItem.propTypes = {
  user: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string,
  createdAt: PropTypes.string.isRequired
};

export default ReviewListItem;