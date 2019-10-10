import { CLOSE_ALL_MODALS,
          CLOSE_CURRENT_MODAL,
          OPEN_SINGLE
        } from '../actions/modal_actions';

import merge from 'lodash/merge';

const _allClosed = {
  loginModal: false,
  signupModal: false,
  workerSignupModal: false,
  jobFormModal: false,
  jobFeedbackModal: false,
  acceptJobModal: false
};

const ModalReducer = (state = _allClosed, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case CLOSE_ALL_MODALS:
      return _allClosed;
    case CLOSE_CURRENT_MODAL:
      const change = { [action.modal]: false };
      return merge(newState, change);
    case OPEN_SINGLE:
      const open = { [action.modal]: true };
      return merge(newState, open);
    default:
      return state;
  }
};
export default ModalReducer;
