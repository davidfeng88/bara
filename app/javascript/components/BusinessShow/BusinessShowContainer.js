import { connect } from 'react-redux';
import BusinessShow from './BusinessShow';

const mapStateToProps = ({
  currentUser,
}) => ({
  currentUser,
});

export default connect(
  mapStateToProps,
  null,
)(BusinessShow);
