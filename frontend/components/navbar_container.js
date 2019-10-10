import { connect } from 'react-redux';

import Navbar from './navbar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps
)(Navbar);
