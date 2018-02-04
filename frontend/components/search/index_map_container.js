import {
  connect
} from 'react-redux';
import IndexMap from './index_map';

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
