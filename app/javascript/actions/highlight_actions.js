export const UPDATE_HIGHLIGHTED_BUSINESS_ID_IN_STORE = 'UPDATE_HIGHLIGHTED_BUSINESS_ID_IN_STORE';

export const highlightBusiness = highlightedBusinessId => ({
  type: UPDATE_HIGHLIGHTED_BUSINESS_ID_IN_STORE,
  highlightedBusinessId,
});
