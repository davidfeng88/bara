import { connect } from 'react-redux';
import ReviewIndex from './review_index';

const mapStateToProps = ({ currentUser }, { reviews }) => ({
  currentUser,
  reviews,
});

export default connect(
  mapStateToProps,
  null
)(ReviewIndex);
