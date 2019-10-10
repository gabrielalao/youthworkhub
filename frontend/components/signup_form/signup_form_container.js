import { connect } from 'react-redux';

import { editUser,
         signup,
         frontendErrors,
         resetErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';

import SignupForm from './signup_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  signupFormIsOpen: state.modals.signupModal
});

const mapDispatchToProps = (dispatch) => ({
  frontendErrors: (errors) => dispatch(frontendErrors(errors)),
  editUser: (user) => dispatch(editUser(user)),
  signup: (user) => dispatch(signup(user)),
  openModal: (modalName) => dispatch(openModal(modalName)),
  closeModal: () => dispatch(closeModal("signupModal")),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
