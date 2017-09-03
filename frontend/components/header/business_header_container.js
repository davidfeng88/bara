import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import BusinessHeader from './business_header';

const mapStateToProps = ({ currentUser }) => ({
  currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  demoLogin: () => dispatch(login({username: 'Guest', password: 'password'})),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessHeader);
