
function getAuthorizationHeaders() {
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  return headers;
}

class AuthApi {
  /* global API_URL */
  static isLoggedIn() {
    let url = `${API_URL}v1/auth/current`;
    return fetch(url, {
      credentials: 'include',
      mode: 'cors',
      header: getAuthorizationHeaders()
    });
  }

  static logout() {
    let url = `${API_URL}v1/auth/logout`;
    return fetch(url, {
      credentials: 'include',
      mode: 'cors',
      header: getAuthorizationHeaders()
    });
  }
}

export default AuthApi;