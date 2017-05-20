import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function locationReducer(state = initialState.location, action) {
  switch(action.type) {
    case types.GET_LOCATION_SUCCESS:
      return Object.assign({}, state, action.location);
    case types.SUBMIT_REVIEW_SUCCESS: {
      let reviews = [action.review, ...state.reviews];
      return Object.assign({}, state, {reviews});
    }
    default:
      return state;
  }
}