import React, {PropTypes} from 'react';

const GeoLoader = ({loading, geoAvailable, geoEnabled}) => {
  let message = 'Search for restaurants near you and see what other\'s have to say about them.';

  if (geoAvailable && geoEnabled && loading) {
    message = 'Looking up locations near you...';
  } else if (!geoAvailable) {
    message = 'Search for restaurants near you and see what other\'s have to say about them.';
  } else if (!geoEnabled) {
    message = 'Could not pin point your location.  Either allow location lookup or use the search below.';
  }
  return (
    <div className="search-message">
      <p>{message}</p>
    </div>
  );
};

GeoLoader.propTypes = {
  loading: PropTypes.bool.isRequired,
  geoEnabled: PropTypes.bool.isRequired,
  geoAvailable: PropTypes.bool.isRequired
};

export default GeoLoader;