import LocationApi from '../api/locationsApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadLocationsSuccess(locations) {
  return {
    type: types.LOAD_LOCATIONS_SUCCESS,
    locations
  };
}

export function loadLocations() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return LocationApi.getNearbyLocations().then(locations => {
      dispatch(loadLocationsSuccess(locations));
    }).catch(err => {
      throw(err);
    });
  };
}