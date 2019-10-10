import { RECEIVE_ALL_WORKERS } from '../actions/worker_actions';

import merge from 'lodash/merge';

const WorkersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_ALL_WORKERS:
      return action.workers;
    default:
      return state;
  }
};
export default WorkersReducer;
