import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login, logout, signup } from '../../actions/session_actions';
import { receiveErrors, clearErrors } from '../../actions/error_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ currentUser, errors }) => {
  return {
    loggedIn: Boolean(currentUser),
    errors: errors
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));