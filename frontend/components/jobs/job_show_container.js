import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';

import { fetchJob, giveFeedback } from '../../actions/job_actions';

import { getSingleWorker, clearWorker } from '../../actions/worker_actions';

import JobShow from './job_show';

const mapStateToProps = (state, { params })=> ({
  jobId: params['jobId'],
  job: state.jobDetail,
  currentUser: state.session.currentUser,
  worker: state.workerDetail
});

const mapDispatchToProps = (dispatch, { params }) => ({
  fetchJob: () => dispatch(fetchJob(params.jobId)),
  fetchWorker: (id) => dispatch(getSingleWorker(id)),
  clearWorker: () => dispatch(clearWorker()),
  openModal: (modalName) => dispatch(openModal(modalName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobShow);
