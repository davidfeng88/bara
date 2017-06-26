import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createBusiness, editBusiness } from '../../actions/business_actions';
import { clearErrors } from '../../actions/error_actions';
import { selectCurrentBusiness } from '../../reducers/selectors';

import BusinessForm from './business_form';


const mapStateToProps = (state) => {
  return {
    business: selectCurrentBusiness(state),
    errors: state.errors
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
