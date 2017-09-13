import {
  connect
} from 'react-redux';
import ReviewIndexItem from './review_index_item';

const mapStateToProps = ( {
  currentUser
}, {
  review
} ) => ( {
  currentUser,
  review,
} );

export default connect(
  mapStateToProps,
  null
)( ReviewIndexItem );
