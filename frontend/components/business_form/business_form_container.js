import { connect } from 'react-redux';

import {
  createBusiness,
  editBusiness,
  deleteBusiness
} from '../../actions/business_actions';

import { clearErrors } from '../../actions/error_actions';
import { selectCurrentBusiness } from '../../reducers/selectors';

import BusinessForm from './business_form';

const mapStateToProps = (state, ownProps) => {
  return {
    business: selectCurrentBusiness(state, parseInt(ownProps.match.params.id)),
    // if it is the create form, then ownProps.match.params.id is undefined
    // so business: undefined will be obtained.
    // thus we do not need a if/else statement
    errors: state.errors,
  };
};

const mapDispatchToProps = ( dispatch, { location } ) => {
  const formType = location.pathname.slice(-3) !== 'new' ? "edit" : "create";
  const processForm =
    (location.pathname.slice(-3) === 'new') ? createBusiness : editBusiness;
  return {
    processForm: business => dispatch(processForm(business)),
    formType,
    clearErrors: () => dispatch(clearErrors()),
    deleteBusiness: (id) => dispatch(deleteBusiness(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessForm);
