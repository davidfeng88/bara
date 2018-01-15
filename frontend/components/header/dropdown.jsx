import React from 'react';

const DropdownBackground = ( {
  toggleDropdown
} ) => (
  <div onClick={toggleDropdown} className="dropdown-background">
  </div>
);

const DropdownBox = ( {
  currentUser,
  logout
} ) => (
  <div className='dropdown-box'>
    <UserInfo currentUser={currentUser} />
    <LogoutLink logout={logout} />
  </div>
);

const UserInfo = ( {
  currentUser
} ) => (
  <div className='dropdown-box-row1' >
    <UserAvatar currentUser={currentUser} />
    <UserName currentUser={currentUser} />
</div>
);

const UserAvatar = ( {
  currentUser
} ) => (
  <div className='dropdown-avatar-wrapper'>
    <img className='dropdown-avatar' src={currentUser.avatar_url} />
  </div>
);

const UserName = ( {
  currentUser
} ) => (
  <div className='dropdown-name'>{currentUser.username}</div>
);

const LogoutLink = ( {
  logout
} ) => (
  <div onClick={logout} className='dropdown-box-row2' >
    Log Out
  </div>
);

const Dropdown = ( {
  currentUser,
  logout,
  toggleDropdown
} ) => (
  <div>
    <DropdownBackground toggleDropdown={toggleDropdown} />
    <DropdownBox currentUser={currentUser} logout={logout} />
  </div>
);

export default Dropdown;