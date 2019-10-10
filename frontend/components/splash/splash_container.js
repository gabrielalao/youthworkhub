import { connect } from 'react-redux';
import Splash from './splash';

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(
  null,
  mapDispatchToProps
)(Splash);

//THIS FILE IS NOT NECESSARY
