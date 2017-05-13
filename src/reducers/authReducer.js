import * as actions from '../actions/actionTypes';
import initialState from './initialState';

export default function auth(state = initialState.auth, action) {
  switch (action.type) {
    case actions.OAUTH_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        email: action.email,
        authenticated: true
      });
    case actions.LOGOUT_SUCCESS:
      return Object.assign({}, {
        authenticated: false
      });
    case actions.LOGIN_FAILURE:
    default:
      return state;
  }
}
