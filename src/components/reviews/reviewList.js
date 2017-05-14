import React, {PropTypes} from 'react';
import ReviewListItem from './reviewListItem';

const ReviewList = ({reviews}) => {
  return (
    <div>
      {reviews.map((review) => {
        return (<ReviewListItem
          user={review.user}
          rating={review.rating}
          createdAt={review.createdAt}
          comment={review.comment}
          key={review._id}/>
        );
      })}
    </div>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewList;