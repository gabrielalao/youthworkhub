import { connect } from 'react-redux';

import { giveFeedback, updateFeedback } from '../../actions/job_actions';

import { closeModal } from '../../actions/modal_actions';

import { resetErrors, receiveErrors } from '../../actions/session_actions';

import JobFeedbackModal from './job_feedback_modal';

const mapStateToProps = (state, {params}) => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  jobFeedbackModalIsOpen: state.modals.jobFeedbackModal,
  job: state.jobDetail,
  worker: state.workerDetail
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal('jobFeedbackModal')),
  resetErrors: () => dispatch(resetErrors()),
  giveFeedback: (feedback) => dispatch(giveFeedback(feedback)),
  updateFeedback: (feedback) => dispatch(updateFeedback(feedback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobFeedbackModal);
