// copied from AA times


// dropdown function that removes "hidden" class from dropdown while
// adding hideDropdown listener to document and cleaning up out-of-date listener
const revealDropdown = (event) => {
  event.stopPropagation(); // prevent event from being picked up by body
	$('#gear-dropdown').removeClass('hidden');
  $('#gear-dropdown-btn').off('click', revealDropdown);
  $(document).on('click', hideDropdown);
};

// add "hidden" class to dropdown and update event listeners
const hideDropdown = () => {
	$('#gear-dropdown').addClass('hidden');
  $('#gear-dropdown-btn').on('click', revealDropdown);
  $(document).off('click', hideDropdown);
};

// Add click listener to gear icon which invokes reveal function
$(() => $('#gear-dropdown-btn').on('click', revealDropdown));


// AA Times
// in the main nav
// <li id="gear-dropdown-btn">
//   <i class="fa fa-cog" aria-hidden="true"></i>
//     <%= render partial:'shared/gear_dropdown' %>
// </li>

// scss:
// Style the dropdown in _gear_dropdown.scss according to the mockup:
//
// Style its position:
// Position the icon's li relatively.
// This will allow the absolutely positioned dropdown to use this element as a reference point.
// Position the dropdown absolutely and use top and right to adjust.
// Give the dropdown some background, padding, and a border.
// Use a defined px width for this dropdown.
// Using px widths for HTML elements can be dangerous, as a page's styling can be ruined if either the window size or the content inside that element changes size drastically. For smaller elements with minimal content inside them, like this dropdown, there is less of a danger of that happening.
// Set the z-index. Remember the z-index property is used on positioned elements to place them in front of or behind other elements with the largest z-index being in front.
// Style the remaining fonts and margins being sure to use proper selectors.
// For a final touch apply some box-shadow styling to the dropdown to give it a bit more dimension. Box shadows are highly customizable with values for the x-offset, y-offset, blur-radius, spread-radius and color. Here is an example using rgba colors. Set the rgba values like so: rgba(Red, Green, Blue, Alpha). The Alpha value controls the transparency. Let's make this shadow very transparent.
//
// box-shadow: -1px 4px 6px 1px rgba(0, 0, 0, 0.09);
