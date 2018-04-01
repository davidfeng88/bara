import { connect } from 'react-redux';
import {
  demoLogin,
  asyncLogout,
} from '../../actions/session_actions';
import BusinessHeader from './BusinessHeader';

const mapStateToProps = ({
  currentUser,
}) => ({
  currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(asyncLogout()),
  demoLogin: () => dispatch(demoLogin),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BusinessHeader);
