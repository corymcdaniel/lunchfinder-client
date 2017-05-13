import AuthApi from '../api/authApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import { HandleResponse } from '../api/responseHandler';

export function LoginSuccess(account) {
  return {
    type: types.OAUTH_LOGIN_SUCCESS,
    account
  };
}

export function LoginFailure() {
  return {
    type: types.LOGIN_FAILURE
  };
}

export function LogoutSuccess() {
  return {
    type: types.LOGOUT_SUCCESS
  };
}

export function checkLoggedIn() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return AuthApi.isLoggedIn().then(response => {
      if (response.status === 204) {
        return dispatch(LoginFailure());
      }
      return HandleResponse(response).then((account) => {
        dispatch(LoginSuccess(account));
      });
    }).catch(err => {
      dispatch(LoginFailure());
    });
  };
}

export function logout() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return AuthApi.logout().then(() => {
      dispatch(LogoutSuccess());
    });
  };
}