import * as BusinessAPIUtil from '../util/business_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review,
});

export const removeReview = review => ({
  type: REMOVE_REVIEW,
  review,
});

export const createReview = review => dispatch => (
  BusinessAPIUtil.createReview(review)
  .then(
    (reviewData) => dispatch(receiveReview(reviewData)),
    (errors) => dispatch(receiveErrors(errors.responseText))
  )
);

export const editReview = review => dispatch => (
  BusinessAPIUtil.editReview(review)
  .then(
    (reviewData) => dispatch(receiveReview(reviewData)),
    (errors) => dispatch(receiveErrors(errors.responseText))
  )
);

export const deleteReview = id => dispatch => (
  BusinessAPIUtil.deleteReview(id).then(
    (reviewData) => dispatch(removeReview(reviewData)),
    (errors) => dispatch(receiveErrors(errors.responseText))
  )
);
