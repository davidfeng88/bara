import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  createBusiness,
  editBusiness,
  deleteBusiness
} from '../../actions/business_actions';

import { clearErrors } from '../../actions/error_actions';
import { selectCurrentBusiness } from '../../reducers/selectors';

import BusinessForm from './business_form';

const mapStateToProps = (state, ownProps) => {
  if (ownProps.location.pathname.slice(-3) === 'new') {
    return {
      business: null,
      errors: state.errors,
    };
  } else {
    return {
      business: selectCurrentBusiness(state, parseInt(ownProps.match.params.id)),
      errors: state.errors,
    };
  }
};

const mapDispatchToProps = ( dispatch, { location } ) => {
  const formType = location.pathname.slice(-3) !== 'new' ? "edit" : "create";
  const processForm = (formType === "edit") ? editBusiness : createBusiness;
  return {
    processForm: business => dispatch(processForm(business)),
    formType,
    clearErrors: () => dispatch(clearErrors()),
    deleteBusiness: (id) => dispatch(deleteBusiness(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessForm));
