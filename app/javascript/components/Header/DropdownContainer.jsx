import React from 'react';

const DropdownBackground = ({
  toggleDropdown,
}) => (
  <div onClick={toggleDropdown} className="dropdown-background" />
);

const DropdownBox = ({
  currentUser,
  logout,
}) => (
  <div className="dropdown-box">
    <UserInfo currentUser={currentUser} />
    <LogoutLink logout={logout} />
  </div>
);

const UserInfo = ({
  currentUser,
}) => (
  <div className="dropdown-box-row1" >
    <UserAvatar currentUser={currentUser} />
    <UserName currentUser={currentUser} />
  </div>
);

const UserAvatar = ({
  currentUser,
}) => (
  <div className="dropdown-avatar-wrapper">
    <img className="dropdown-avatar" src={currentUser.avatar} />
  </div>
);

const UserName = ({
  currentUser,
}) => (
  <div className="dropdown-name">{currentUser.username}</div>
);

const LogoutLink = ({
  logout,
}) => (
  <div onClick={logout} className="dropdown-box-row2" >
    Log Out
  </div>
);

const Dropdown = ({
  currentUser,
  logout,
  toggleDropdown,
}) => (
  <div>
    <DropdownBackground toggleDropdown={toggleDropdown} />
    <DropdownBox currentUser={currentUser} logout={logout} />
  </div>
);

const DropdownContainer = ({
  currentUser,
  logout,
  toggleDropdown,
  isDropdownShown,
}) => {
  if (isDropdownShown) {
    return (
      <Dropdown
        currentUser={currentUser}
        logout={logout}
        toggleDropdown={toggleDropdown}
      />
    );
  }
  return null;
};

export default DropdownContainer;
