import { HandleResponse } from './responseHandler';
/* global API_URL */
//TODO: move this into another file
function getAuthorizationHeaders() {
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  return headers;
}

class ReviewApi {
  static submit(review) {
    let url = `${API_URL}v1/reviews`;
    return fetch(url, {
      method: 'POST',
      body: review,
      credentials: 'include',
      mode: 'cors',
      header: getAuthorizationHeaders()
    }).then(HandleResponse);
  }
}

export default ReviewApi;