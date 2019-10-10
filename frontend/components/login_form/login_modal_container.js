import { connect } from 'react-redux';

// import { login, signup, logout } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

import { resetErrors } from '../../actions/session_actions';

import LoginModal from './login_modal';

const mapStateToProps = state => ({
  loginFormIsOpen: state.modals.loginModal,
});

const mapDispatchToProps = dispatch => ({
  closeModal: (modalName) => dispatch(closeModal(modalName)),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
