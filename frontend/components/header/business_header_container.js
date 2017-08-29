import { connect } from 'react-redux';
import queryString from 'query-string';
import { login, logout } from '../../actions/session_actions';
import BusinessHeader from './business_header';

const mapStateToProps = (state, ownProps) => {
  const { currentUser, showDropdown } = state;
  const parsed = queryString.parse(ownProps.location.search);
  // e.g. parsed === { location: "New York", name: ""}
  return ({
    currentUser,
    parsed,
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  demoLogin: () => dispatch(login({username: 'Guest', password: 'password'})),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessHeader);
