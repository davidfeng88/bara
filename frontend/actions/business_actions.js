import * as BusinessAPIUtil from '../util/business_api_util';

export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const REMOVE_BUSINESS = "REMOVE_BUSINESS";

export const receiveAllBusinesses = businesses => ({
  type: RECEIVE_ALL_BUSINESSES,
  businesses
});

export const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS,
  business,
});

export const removeBusiness = business => ({
  type: REMOVE_BUSINESS,
  business,
});

export const fetchAllBusinesses = filters => dispatch => (
  BusinessAPIUtil.fetchAllBusinesses(filters)
  .then(
    (businessesData) => dispatch(receiveAllBusinesses(businessesData))
  )
);

export const fetchBusiness = id => dispatch => (
  BusinessAPIUtil.fetchBusiness(id)
  .then(
    (businessData) => dispatch(receiveBusiness(businessData))
  )
);

export const createBusiness = business => dispatch => (
  BusinessAPIUtil.createBusiness(business)
  .then(
    (businessData) => dispatch(receiveBusiness(businessData))
  )
);

export const editBusiness = business => dispatch => (
  BusinessAPIUtil.editBusiness(business)
  .then(
    (businessData) => dispatch(receiveBusiness(businessData))
  )
);

export const deleteBusiness = id => dispatch => (
  BusinessAPIUtil.deleteBusiness(id)
  .then(
    (businessData) => dispatch(removeBusiness(businessData))
  )
);
