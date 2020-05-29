import React from 'react';
import PropTypes from 'prop-types';
import HomeHeaderWithUserContainer from './HomeHeaderWithUserContainer';
import HomeHeaderWithoutUser from './HomeHeaderWithoutUser';

const HomeHeader = ({
  currentUser,
  demoLogin,
  logout,
}) => (
  currentUser ? (
    <HomeHeaderWithUserContainer
      currentUser={currentUser}
      logout={logout}
    />
  ) : (
    <HomeHeaderWithoutUser
      demoLogin={demoLogin}
    />
  ));

export default HomeHeader;

HomeHeader.propTypes = {
  currentUser: PropTypes.shape({
    avatar: PropTypes.string,
    id: PropTypes.number,
    username: PropTypes.string,
  }),
  demoLogin: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

HomeHeader.defaultProps = {
  currentUser: null,
};
