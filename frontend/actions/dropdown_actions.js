export const TOGGLE_DROPDOWN = "TOGGLE_DROPDOWN";
export const HIDE_DROPDOWN = "HIDE_DROPDOWN";

export const toggleDropdown = () => {
  return {
      type: TOGGLE_DROPDOWN
  };
};

export const hideDropdown = () => {
  return {
      type: HIDE_DROPDOWN
  };
};
