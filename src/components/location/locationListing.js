import React, {PropTypes} from 'react';
import LocationListItem from '../location/locationListItem';

const LocationListing = ({locations}) => {
  return (
    <div>
      <ul>
        {locations.map(location => {
          return <LocationListItem key={location.externalId} name={location.name} address={location.address} />;
        })}
      </ul>
    </div>
  );
};

LocationListing.propTypes = {
  locations: PropTypes.array.isRequired
};

export default LocationListing;