import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import { businessesToArray } from '../../reducers/selectors';
import Home from './home';

const mapStateToProps = state => ({
  businesses: businessesToArray(state),
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filters) => dispatch(updateFilter(filters)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
