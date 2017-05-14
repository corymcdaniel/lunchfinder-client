import ReviewApi from '../api/reviewApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function submitReviewSuccess(review) {
  return {
    type: types.SUBMIT_REVIEW_SUCCESS,
    review
  };
}

export function submitReview(review) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return ReviewApi.submit(review).then(review => {
      dispatch(submitReviewSuccess(review));
    }).catch(err => {
      throw(err);
    });
  };
}