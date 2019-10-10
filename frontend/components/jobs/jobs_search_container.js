import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';

import { fetchJobs } from '../../actions/job_actions';

import { updateLocation,
         updateJobTypes,
         updateWageFilter,
         clearFilters } from '../../actions/filter_actions';

import { jobsArray } from '../../reducers/selectors';

import JobsSearch from './jobs_search';

const mapStateToProps = state => {
  return ({
    jobsArray: jobsArray(state),
    jobs: state.jobs,
    currentUser: state.session.currentUser,
    filters: state.filters,
  });
};

const mapDispatchToProps = dispatch => ({
  openJobForm: () => dispatch(openModal('jobFormModal')),
  fetchJobs: (filters) => dispatch(fetchJobs(filters)),
  updateJobTypes: (jobTypes) => dispatch(updateJobTypes(jobTypes)),
  updateLocation: (bounds) => dispatch(updateLocation(bounds)),
  clearFilters: () => dispatch(clearFilters()),
  updateWageFilter: (wage) => dispatch(updateWageFilter(wage)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsSearch);
