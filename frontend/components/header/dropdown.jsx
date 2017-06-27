import React from 'react';

export default class Dropdown extends React.Component {




  render() {
    return(
      <div onClick={(e) => { e.stopPropagation(); this.props.toggleDropdown(); } } className="dropdown-background">
        <div onClick={ e => e.stopPropagation() } className='dropdown-box'>
          <div className='dropdown-box-row1' >
            <div className='dropdown-avatar-wrapper'>
              <img className='dropdown-avatar' src={this.props.currentUser.avatar_url} />
            </div>
            <div className='dropdown-name'>{this.props.currentUser.username}</div>
          </div>

          <div onClick={this.props.logout} className='dropdown-box-row2' >
            Log Out
          </div>
        </div>
      </div>
    );
  }


}
