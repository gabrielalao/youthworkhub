import { connect } from 'react-redux';

import { getWorkers } from '../../actions/worker_actions';

import WorkersIndex from './workers_index';

const mapStateToProps = state => ({
  workers: state.workers
});

const mapDispatchToProps = dispatch => ({
  getWorkers: () => dispatch(getWorkers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkersIndex);
