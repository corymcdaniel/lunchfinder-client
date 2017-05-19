import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function locationReducer(state = initialState.location, action) {
  switch(action.type) {
    case types.GET_LOCATION_SUCCESS:
      if (!action.location.reviews) {
        action.location.reviews = [];
      }
      return Object.assign({}, action.location);
    case types.SUBMIT_REVIEW_SUCCESS: {
      let reviews = [...state.reviews, action.review];
      let location = Object.assign({}, state);
      location.reviews = reviews;
      return location;
    }
    default:
      return state;
  }
}