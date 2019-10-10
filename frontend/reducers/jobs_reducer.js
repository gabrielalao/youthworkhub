import { RECEIVE_JOBS,
         ADD_JOB,
         EDIT_JOB,
         RESET_JOBS,
         ACCEPT_JOB,
         LEAVE_FEEDBACK } from '../actions/job_actions';

import merge from 'lodash/merge';

const JobsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {

    case RECEIVE_JOBS:
      return action.jobs;

    case ADD_JOB:
      const newJob = { [action.job.id]: action.job };
      return merge(newState, newJob);

    case EDIT_JOB:
      const changedJob = { [action.job.id]: action.job };
      return merge(newState, changedJob);

    case RESET_JOBS:
      return {};

    case ACCEPT_JOB:
      const acceptedJob = { [action.job.id]: action.job };
      acceptedJob.status = 'designated';
      return merge(newState, acceptedJob);

    default:
      return state;
  }
};
export default JobsReducer;
