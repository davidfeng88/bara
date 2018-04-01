import { connect } from 'react-redux';
import { highlightBusiness } from '../../actions/highlight_actions';
import Search from './Search';

const mapDispatchToProps = dispatch => ({
  highlightBusiness: id => dispatch(highlightBusiness(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Search);
