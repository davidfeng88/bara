import React from 'react';
import PropTypes from 'prop-types';
import HomeHeaderWithUser from './HomeHeaderWithUser';

export default class HomeHeaderWithUserContainer extends React.Component {
  state = {
    isDropdownShown: false,
  };

  toggleDropdown = () => {
    this.setState(prevState => ({
      isDropdownShown: !prevState.isDropdownShown,
    }));
  };

  handleLogout = () => {
    this.closeDropdown();
    this.props.logout();
  };

  closeDropdown = () => {
    this.setState({
      isDropdownShown: false,
    });
  };

  render = () => {
    const {
      currentUser,
    } = this.props;
    const {
      isDropdownShown,
    } = this.state;
    return (
      <HomeHeaderWithUser
        toggleDropdown={this.toggleDropdown}
        currentUser={currentUser}
        handleLogout={this.handleLogout}
        isDropdownShown={isDropdownShown}
      />
    );
  };
}

HomeHeaderWithUserContainer.propTypes = {
  currentUser: PropTypes.shape({
    avatar: PropTypes.string,
    id: PropTypes.number,
    username: PropTypes.string,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};
