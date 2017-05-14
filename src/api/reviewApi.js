import { HandleResponse } from './responseHandler';
/* global API_URL */
//TODO: move this into another file
function getAuthorizationHeaders() {
  return {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  };
}

class ReviewApi {
  static submit(review) {
    let url = `${API_URL}v1/reviews`;
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(review),
      credentials: 'include',
      mode: 'cors',
      headers: getAuthorizationHeaders()
    }).then(HandleResponse);
  }
}

export default ReviewApi;
