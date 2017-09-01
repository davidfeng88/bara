import React from 'react';

const Dropdown = ({ currentUser, logout, toggleDropdown }) => (
  <div>
    <div onClick={toggleDropdown} className="dropdown-background">
    </div>
    <div className='dropdown-box'>
      <div className='dropdown-box-row1' >
        <div className='dropdown-avatar-wrapper'>
          <img className='dropdown-avatar' src={currentUser.avatar_url} />
        </div>
        <div className='dropdown-name'>{currentUser.username}</div>
      </div>
      <div onClick={logout} className='dropdown-box-row2' >
        Log Out
      </div>
    </div>
  </div>
);

export default Dropdown;
//
// <div onClick={toggleDropdown} className="dropdown-background">
//   <div className='dropdown-container'>
//     <div onClick={ e => e.stopPropagation() } className='dropdown-box'>
//       <div className='dropdown-box-row1' >
//         <div className='dropdown-avatar-wrapper'>
//           <img className='dropdown-avatar' src={currentUser.avatar_url} />
//         </div>
//         <div className='dropdown-name'>{currentUser.username}</div>
//       </div>
//       <div onClick={logout} className='dropdown-box-row2' >
//         Log Out
//       </div>
//     </div>
//   </div>
// </div>
