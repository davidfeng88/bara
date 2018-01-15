import {
  connect
} from 'react-redux';
import {
  login,
  demoLogin,
  signup,
} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapDispatchToProps = ( dispatch, {
  location
} ) => {
  const formType = location.pathname.slice( 1 );
  const processForm = ( formType === 'login' ) ? login : signup;
  return {
    processForm: user => dispatch( processForm( user ) ),
    formType,
    login: user => dispatch( login( user ) ),
    demoLogin: () => dispatch( demoLogin() ),
  };
};

export default connect(
  null,
  mapDispatchToProps
)( SessionForm );