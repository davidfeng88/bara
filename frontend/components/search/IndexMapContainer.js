import { connect } from 'react-redux';
import IndexMap from './IndexMap';

const mapStateToProps = (state, {
  businesses,
}) => ({
  highlightedBusinessId: state.highlightedBusinessId,
  businesses,
});

export default connect(
  mapStateToProps,
  null,
)(IndexMap);
