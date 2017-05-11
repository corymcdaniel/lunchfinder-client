import React, {PropTypes} from 'react';

const LocationListItem = ({name, address}) => {
  return (
    <li>
      <h3>{name}</h3>
      <p>{address}</p>
    </li>
  );
};

LocationListItem.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
};

export default LocationListItem;