import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import { resetErrors } from '../../actions/session_actions';

import SignupModal from './signup_modal';

const mapStateToProps = state => ({
  signupFormIsOpen: state.modals.signupModal
});

const mapDispatchToProps = dispatch => ({
  closeModal: (modalName) => dispatch(closeModal(modalName)),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupModal);
