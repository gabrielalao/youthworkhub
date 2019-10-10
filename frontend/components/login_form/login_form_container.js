import { connect } from 'react-redux';

import { login, resetErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';

import LoginForm from './login_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  loginFormIsOpen: state.modals.LoginModal
});

const mapDispatchToProps = dispatch => ({
  login: (cred) => dispatch(login(cred)),
  openModal: (modalName) => dispatch(openModal(modalName)),
  closeLoginModal: () => dispatch(closeModal('loginModal')),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
