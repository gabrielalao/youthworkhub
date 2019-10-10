import * as SessionUtils from '../util/session_api_util.js';

import { receiveWorker } from './worker_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ACCOUNT_CHANGE = "RECEIVE_ACCOUNT_CHANGE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RESET_ERRORS = "RESET_ERRORS";
export const RECEIVE_LOGOUT = "RECEIVE_LOGOUT";
export const RECEIVE_GUEST_USER = "RECEIVE_GUEST_USER";

const receiveUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveLogout = () => ({
  type: RECEIVE_LOGOUT
});

export const resetErrors = () => ({
  type: RESET_ERRORS
});

export const login = (cred) => dispatch => (
  SessionUtils.login(cred).then((user) => dispatch(receiveUser(user)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);

export const guestLogin = () => dispatch => (
  SessionUtils.login({username:"Joe Shmoe", password:"password"})
    .then((user) => dispatch(receiveUser(user)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);

export const guestWorkerLogin = () => dispatch => (
  SessionUtils.login({username:"Timmy", password:"password"})
    .then((worker) => dispatch(receiveUser(worker)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);

export const signup = (user) => dispatch => (
  SessionUtils.signup(user).then((newUser) => dispatch(receiveUser(newUser)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);

export const editUser = (user) => dispatch => (
  SessionUtils.editAccount(user).then((changedUser) => (
    dispatch(receiveUser(changedUser))))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  SessionUtils.logout().then((user) => dispatch(receiveLogout()))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);

export const frontendErrors = (errs) => dispatch => (
  dispatch(receiveErrors(errs))
);
