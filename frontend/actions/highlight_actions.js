export const HIGHLIGHT_BUSINESS = "HIGHLIGHT_BUSINESS";

export const highlightBusiness = hightlightBusinessId => {
  return {
      type: HIGHLIGHT_BUSINESS,
      hightlightBusinessId,
  };
};
