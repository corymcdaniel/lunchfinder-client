import { HandleResponse } from './responseHandler';
//ESLint doesn't detect webpack globals:
/* global API_URL */
class LocationsApi {
  static getNearbyLocations(location) {
    let address = '';
    let coords = {};
    if (typeof location === 'string') {
      address = location;
    } else {
      coords = location;
    }
    let url = `${API_URL}v1/locations?address=${address}&lat=${coords.latitude}&lon=${coords.longitude}`;
    return fetch(url).then(HandleResponse);
  }

  static getLocationById(id) {
    let url = `${API_URL}v1/locations/${id}`;
    return fetch(url).then(HandleResponse);
  }
}

export default LocationsApi;