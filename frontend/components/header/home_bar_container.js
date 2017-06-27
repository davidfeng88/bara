import { connect } from 'react-redux';

import { login, logout } from '../../actions/session_actions';
import { toggleDropdown } from '../../actions/dropdown_actions';

import HomeBar from './home_bar';

const mapStateToProps = ({ currentUser, showDropdown }) => ({
  currentUser,
  showDropdown
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  demoLogin: () => dispatch(login({username: 'guest', password: 'password'})),
  toggleDropdown: () => dispatch(toggleDropdown())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeBar);
