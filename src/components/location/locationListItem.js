import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const LocationListItem = ({externalId, name, address}) => {
  return (
    <li className="list-item">
      <div className="row">
        <div className="col-md-12">
          <h3><Link to={'/locations/' + externalId}>{name}</Link></h3>
          <p>{address}</p>
          <p><Link to={'/locations/' + externalId}>Info and Reviews</Link></p>
        </div>
      </div>
    </li>
  );
};

LocationListItem.propTypes = {
  externalId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
};

export default LocationListItem;