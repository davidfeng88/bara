import { connect } from 'react-redux';

import IndexMap from './index_map';

const mapStateToProps = (state, {businesses}) => {
  return({
    highlight: state.highlight,
    businesses,
  });
};

export default connect(
  mapStateToProps,
  null
)(IndexMap);
