import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import BusinessHeader from './business_header';

const mapStateToProps = (state, ownProps) => {
  const { currentUser, showDropdown } = state;
  const queryString = require('query-string');
  const parsed = queryString.parse(ownProps.location.search);
  return ({
    currentUser,
    parsed,
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  demoLogin: () => dispatch(login({username: 'guest', password: 'password'})),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessHeader);
