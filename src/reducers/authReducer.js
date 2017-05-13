import * as actions from '../actions/actionTypes';
import initialState from './initialState';

export default function auth(state = initialState.auth, action) {
  switch (action.type) {
    case actions.OAUTH_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        email: action.email,
        authenticated: true
      });
    case actions.LOGIN_FAILURE:
    case actions.LOGOUT:
    default:
      return state;
  }
}
