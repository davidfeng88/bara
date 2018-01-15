import {
  connect
} from 'react-redux';
import {
  demoLogin,
  logout
} from '../../actions/session_actions';
import BusinessHeader from './business_header';

const mapStateToProps = ( {
  currentUser
} ) => ( {
  currentUser
} );

const mapDispatchToProps = dispatch => ( {
  logout: () => dispatch( logout() ),
  demoLogin: () => dispatch( demoLogin() ),
} );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( BusinessHeader );