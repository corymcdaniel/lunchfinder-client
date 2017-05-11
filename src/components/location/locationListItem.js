import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const LocationListItem = ({externalId, name, address}) => {
  return (
    <li>
      <h3><Link to={'/locations/' + externalId}>{name}</Link></h3>
      <p>{address}</p>
    </li>
  );
};

LocationListItem.propTypes = {
  externalId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
};

export default LocationListItem;