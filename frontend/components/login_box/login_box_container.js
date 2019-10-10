import { connect } from 'react-redux';

import { login,
          signup,
          guestLogin,
          guestWorkerLogin,
          logout} from '../../actions/session_actions';
import { logoutWorker } from '../../actions/worker_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { resetJobs } from '../../actions/job_actions';

import LoginBox from './login_box';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  resetJobs: () => dispatch(resetJobs()),
  openModal: (modalName) => dispatch(openModal(modalName)),
  logout: () => dispatch(logout()),
  guestLogin: () => dispatch(guestLogin()),
  guestWorkerLogin: () => dispatch(guestWorkerLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginBox);
