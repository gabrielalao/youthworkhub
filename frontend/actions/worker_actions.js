import * as WorkerUtils from '../util/worker_api_util.js';

import { receiveErrors, receiveLogout } from './session_actions';

export const RECEIVE_CURRENT_WORKER = "RECEIVE_CURRENT_WORKER";
export const RECEIVE_ALL_WORKERS = "RECEIVE_ALL_WORKERS";
export const CLEAR_WORKER = "CLEAR_WORKER";
export const RECEIVE_SINGLE_WORKER = "RECEIVE_SINGLE_WORKER";

export const receiveWorker = (worker) => ({
  type: RECEIVE_CURRENT_WORKER,
  worker
});

const receiveWorkers = (workers) => ({
  type: RECEIVE_ALL_WORKERS,
  workers
});

const receiveSingleWorker = (worker) => ({
  type: RECEIVE_SINGLE_WORKER,
  worker
});

const clearOutWorker = () => ({
  type: CLEAR_WORKER
});

export const loginWorker = (cred) => dispatch => (
  WorkerUtils.login(cred).then((worker) => dispatch(receiveWorker(worker)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);

export const signupWorker = (worker) => dispatch => (
  WorkerUtils.signup(worker)
    .then((newWorker) => dispatch(receiveWorker(newWorker)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);

export const editWorker = (worker) => dispatch => (
  WorkerUtils.editAccount(worker).then((changedWorker) => (
    dispatch(receiveWorker(changedWorker))))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);
export const getWorkers = () => dispatch => (
  WorkerUtils.fetchWorkers()
    .then((workers) => dispatch(receiveWorkers(workers)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);

export const getSingleWorker = (id) => dispatch => (
  WorkerUtils.fetchWorker(id)
    .then((worker) => dispatch(receiveSingleWorker(worker)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
);

export const clearWorker = () => dispatch => (
  dispatch(clearOutWorker())
)
