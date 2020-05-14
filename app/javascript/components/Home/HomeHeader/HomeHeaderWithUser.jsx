import React from 'react';
import PropTypes from 'prop-types';
import DropdownContainer from '../../Header/DropdownContainer';

const HomeHeaderWithUser = ({
  currentUser,
  handleLogout,
  toggleDropdown,
  isDropdownShown,
}) => (
  <nav className="home-bar">
    <div className="home-bar-left" />
    <div className="home-bar-right">
      <div
        className="dropdown"
        onClick={toggleDropdown}
        onKeyPress={toggleDropdown}
        role="button"
        tabIndex={0}
      >
        <img alt="user home avatar" className="home-avatar" src={currentUser.avatar_url} />
        <i className="fa fa-caret-down" id="down-arrow" aria-hidden="true" />
      </div>
      <DropdownContainer
        currentUser={currentUser}
        logout={handleLogout}
        toggleDropdown={toggleDropdown}
        isDropdownShown={isDropdownShown}
      />
    </div>
  </nav>
);

export default HomeHeaderWithUser;

HomeHeaderWithUser.propTypes = {
  currentUser: PropTypes.shape({
    avatar_url: PropTypes.string,
    id: PropTypes.number,
    username: PropTypes.string,
  }).isRequired,
  handleLogout: PropTypes.func.isRequired,
  isDropdownShown: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};
