import React, {PropTypes} from 'react';

const Rating = ({rating}) => {
  let icon = rating > 0 ? 'glyphicon glyphicon-thumbs-up' : 'glyphicon glyphicon-thumbs-down';
  return (<span className={icon} aria-hidden="true"></span>);
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired
};

export default Rating;