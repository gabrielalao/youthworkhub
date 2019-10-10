import {  RECEIVE_CURRENT_USER,
          RECEIVE_ERRORS,
          RESET_ERRORS,
          RECEIVE_LOGOUT,
          RECEIVE_GUEST_USER } from '../actions/session_actions';

import { RECEIVE_CURRENT_WORKER } from '../actions/worker_actions';

import merge from 'lodash/merge';

const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return ({
        currentUser: action.user,
        errors: []
      });

    case RECEIVE_CURRENT_WORKER:
      const usr = merge({}, action.worker);
      return ({
        currentUser: usr,
        errors: []
      });

    case RECEIVE_ERRORS:
      newState['errors'] = action.errors;
      return newState;

    case RESET_ERRORS:
      newState['errors'] = [];
      return newState;

    case RECEIVE_LOGOUT:
      return _nullUser;
    default:
      return state;
  }
};

export default SessionReducer;
