import {
  connect,
} from 'react-redux';
import BusinessShow from './business_show';

const mapStateToProps = ({
  currentUser,
}) => ({
  currentUser,
});

export default connect(
  mapStateToProps,
  null,
)(BusinessShow);
