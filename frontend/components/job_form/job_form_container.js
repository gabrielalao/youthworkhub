import { connect } from 'react-redux';

import { addJob, editJob } from '../../actions/job_actions';

import { closeModal } from '../../actions/modal_actions';

import { resetErrors,
         frontendErrors } from '../../actions/session_actions';

import { fetchAddress } from '../../util/job_api_util';

import JobFormModal from './job_form_modal';

const mapStateToProps = (state, {params}) => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  jobFormIsOpen: state.modals.jobFormModal
});

const mapDispatchToProps = dispatch => ({
  closeModal: (modalName) => dispatch(closeModal('jobFormModal')),
  resetErrors: () => dispatch(resetErrors()),
  frontendErrors: (err) => dispatch(frontendErrors(err)),
  addJob: (job) => dispatch(addJob(job)),
  editJob: (job) => dispatch(editJob(job)),
  fetchAddress: (latLng) => fetchAddress(latLng)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobFormModal);
