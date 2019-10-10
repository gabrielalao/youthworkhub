import { RECEIVE_SINGLE_WORKER,
         CLEAR_WORKER } from '../actions/worker_actions';

import merge from 'lodash/merge';

const WorkerDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_SINGLE_WORKER:
      return action.worker;
    case CLEAR_WORKER:
      return null;
    default:
      return state;
  }
};
export default WorkerDetailReducer;
