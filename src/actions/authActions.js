import AuthApi from '../api/authApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function facebookLoginSuccess(account) {
  return {
    type: types.FACEBOOK_LOGIN_SUCCESS,
    account
  };
}

export function facebookLogin() {
  //return function(dispatch) {
    //dispatch(beginAjaxCall());
    return AuthApi.facebookLogin().then(account => {
      //dispatch(facebookLoginSuccess(account));
    }).catch(err => {
      throw(err);
    });
  //};
}