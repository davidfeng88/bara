import { connect } from 'react-redux';

import {
  createBusiness,
  editBusiness,
  deleteBusiness
} from '../../actions/business_actions';

import { fetchLatlng } from '../../util/map_util';
// TODO: handle errors locally!
import { selectCurrentBusiness } from '../../reducers/selectors';

import BusinessForm from './business_form';

const mapStateToProps = (state, ownProps) => {
  return {
    business: selectCurrentBusiness(state, parseInt(ownProps.match.params.id)),
    // if it is the create form, then ownProps.match.params.id is undefined
    // so business: undefined will be obtained.
    // thus we do not need a if/else statement
    errors: state.errors,
    fetchLatlng,
  };
};

const mapDispatchToProps = ( dispatch, { location } ) => {
  const processForm =
    (location.pathname.slice(-3) === 'new') ? createBusiness : editBusiness;
  return {
    processForm: business => dispatch(processForm(business)),
    deleteBusiness: (id) => dispatch(deleteBusiness(id)),
    editBusiness: (business) => dispatch(editBusiness(business)),
    // fetchLatlng: (business) => dispatch(fetchLatlng(business)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessForm);
