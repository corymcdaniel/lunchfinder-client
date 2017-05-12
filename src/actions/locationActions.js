import LocationApi from '../api/locationsApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadLocationsSuccess(locations) {
  return {
    type: types.LOAD_LOCATIONS_SUCCESS,
    locations
  };
}

export function getLocationSuccess(location) {
  return {
    type: types.GET_LOCATION_SUCCESS,
    location
  };
}

export function loadLocations(address) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return LocationApi.getNearbyLocations(address).then(locations => {
      dispatch(loadLocationsSuccess(locations));
    }).catch(err => {
      throw(err);
    });
  };
}

export function getLocationById(id) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return LocationApi.getLocationById(id).then(location => {
      dispatch(getLocationSuccess(location));
    }).catch(err => {
      throw(err);
    });
  };
}