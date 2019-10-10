import { connect } from 'react-redux';

import { acceptJob, fetchJob } from '../../actions/job_actions';

import { closeModal } from '../../actions/modal_actions';

import { resetErrors, receiveErrors } from '../../actions/session_actions';

import AcceptJobForm from './accept_job_form';

const mapStateToProps = (state, {params}) => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  acceptJobModalIsOpen: state.modals.acceptJobModal,
  job: state.jobDetail
});

const mapDispatchToProps = dispatch => ({
  closeModal: (modalName) => dispatch(closeModal('acceptJobModal')),
  resetErrors: () => dispatch(resetErrors()),
  acceptJob: (jobId, workerId) => dispatch(acceptJob(jobId, workerId)),
  fetchJob: (id) => dispatch(fetchJob(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AcceptJobForm);
