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

const mapDispatchToProps = ( dispatch, { location } ) => {
  debugger;
  const formType = location.pathname.slice(1) !== 'new' ? "edit" : "create";
  const processForm = (formType === "edit") ? editBusiness : createBusiness;
  return {
    processForm: business => dispatch(processForm(business)),
    formType,
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessForm));
