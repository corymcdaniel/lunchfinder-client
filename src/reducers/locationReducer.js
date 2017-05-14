import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function locationReducer(state = initialState.location, action) {
  switch(action.type) {
    case types.GET_LOCATION_SUCCESS:
      return Object.assign({}, action.location);
    case types.SUBMIT_REVIEW_SUCCESS:
      //TODO: Fix this:
      //let location = Object.assign({}, state);
      state.reviews.push(action.review);
      return Object.assign({}, state);
    default:
      return state;
  }
}