import * as actions from '../actions/actionTypes';

const defaultState = {
  authenticated: false
};

export function auth(state = defaultState, action) {
  switch (action.type) {
    case actions.OAUTH_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        username: action.username,
        authenticated: true
      });
    case actions.LOGIN_FAILURE:
    case actions.LOGOUT:
      return defaultState;
    default:
      return state;
  }
}
