import { connect } from 'react-redux';

import { getSingleWorker } from '../../actions/worker_actions';
import { fetchJob } from '../../actions/job_actions';

import WorkerShow from './worker_show';

const mapStateToProps = (state, { params }) => {
  const workerId = params['workerId'];
  getSingleWorker(workerId);
  return ({
    worker: state.workerDetail,
    workerId
  });
};

const mapDispatchToProps = dispatch => ({
  getSingleWorker: (id) => dispatch(getSingleWorker(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkerShow);
