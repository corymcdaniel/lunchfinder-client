class AuthApi {
  static facebookLogin() {
    return new Promise((resolve, reject) => {
      debugger;
      let url = 'http://localhost:3300/v1/auth/facebook';
      fetch(url, {
        method: 'GET',
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    });
  }
}

export default AuthApi;