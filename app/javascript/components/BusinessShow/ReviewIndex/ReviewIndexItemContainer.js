import { connect } from 'react-redux';
import ReviewIndexItem from './ReviewIndexItem';

const mapStateToProps = ({
  currentUser,
}, {
  review,
}) => ({
  currentUser,
  review,
});

export default connect(
  mapStateToProps,
  null,
)(ReviewIndexItem);
