import { connect } from 'react-redux';

import { fetchJobs } from '../../actions/job_actions';

import { myJobsArray } from '../../reducers/selectors';

import MyJobs from './my_jobs';

const mapStateToProps = state => {
  return ({
    myJobsArray: myJobsArray(state),
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  fetchJobs: () => dispatch(fetchJobs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyJobs);
