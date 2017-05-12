import { HandleResponse } from './responseHandler';
//ESLint doesn't detect webpack globals:
/* global API_URL */
class LocationsApi {
  static getNearbyLocations(address) {
    let url = `${API_URL}v1/locations?address=${address}`;
    return fetch(url).then(HandleResponse);
  }

  static getLocationById(id) {
    let url = `${API_URL}v1/locations/${id}`;
    return fetch(url).then(HandleResponse);
  }
}

export default LocationsApi;