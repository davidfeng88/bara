import { connect } from 'react-redux';
import { hideDropdown } from '../actions/dropdown_actions';

import App from './app';

const mapStateToProps = ({ showDropdown }) => {
  return ({
    showDropdown
  });
};

const mapDispatchToProps = dispatch => ({
  hideDropdown: () => dispatch(hideDropdown())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
