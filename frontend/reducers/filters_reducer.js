import merge from 'lodash/merge';

import { UPDATE_JOB_TYPES,
         UPDATE_LOCATION,
         CLEAR_FILTERS,
         UPDATE_WAGES } from '../actions/filter_actions';

const _defaultFilters = {
  bounds: null,
  jobTypes: null,
  dates: null,
  minWage: null,
};

const FiltersReducer = (state = _defaultFilters, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case UPDATE_JOB_TYPES:
      const jobTypes = action.jobTypes;
      newState['jobTypes'] = jobTypes;
      return newState;

    case UPDATE_WAGES:
      const minWage = action.minWage;
      newState['minWage'] = minWage;
      return newState;

    case UPDATE_LOCATION:
      const bounds = action.bounds;
      newState = merge(newState, { bounds });
      return newState;

    case CLEAR_FILTERS:
      return _defaultFilters;

    default:
      return state;
  }
}

export default FiltersReducer;
