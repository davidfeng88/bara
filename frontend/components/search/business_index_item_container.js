import { connect } from 'react-redux';

import { highlightBusiness } from '../../actions/highlight_actions';
import BusinessIndexItem from './business_index_item';

const mapStateToProps = (state, ownProps) => {
  return(ownProps);
};

const mapDispatchToProps = dispatch => ({
  highlightBusiness: (id) => dispatch(highlightBusiness(id)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndexItem);