import {
  connect
} from 'react-redux';
import {
  highlightBusiness
} from '../../actions/highlight_actions';
import BusinessIndexItem from './business_index_item';

const mapDispatchToProps = dispatch => ( {
  highlightBusiness: ( id ) => dispatch( highlightBusiness( id ) ),
} );

export default connect(
  null,
  mapDispatchToProps
)( BusinessIndexItem );
