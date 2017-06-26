import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createBusiness, editBusiness } from '../../actions/business_actions';
import { clearErrors } from '../../actions/error_actions';
import BusinessForm from './business_form';


const mapStateToProps = ({ currentBusiness, errors }) => {
  return {
    // selector currentBusiness (null for new form)
    errors: errors
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  // const formType = location.pathname.slice(1);
  // const processForm = (formType === 'login') ? login : signup;
  return {
    // processForm: user => dispatch(processForm(user)),
    // formType,

    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessForm));
