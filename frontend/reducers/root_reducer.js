import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ModalReducer from './modal_reducer';
import WorkersReducer from './workers_reducer';
import JobsReducer from './jobs_reducer';
import JobDetailReducer from './job_detail_reducer';
import WorkerDetailReducer from './worker_detail_reducer';
import FiltersReducer from './filters_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  modals: ModalReducer,
  workers: WorkersReducer,
  jobs: JobsReducer,
  jobDetail: JobDetailReducer,
  workerDetail: WorkerDetailReducer,
  filters: FiltersReducer
});

export default rootReducer;
