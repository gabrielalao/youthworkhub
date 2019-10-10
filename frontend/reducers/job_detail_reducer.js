import { RECEIVE_JOB, LEAVE_FEEDBACK } from '../actions/job_actions';

import merge from 'lodash/merge';

const JobDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_JOB:
      return action.job;

    case LEAVE_FEEDBACK:
      newState['review'] = action.review;
      return newState;

    default:
      return state;
  }
};
export default JobDetailReducer;
