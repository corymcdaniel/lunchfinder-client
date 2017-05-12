import { combineReducers } from 'redux';
import locations from './locationsReducer';
import location from './locationReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  locations,
  location,
  ajaxCallsInProgress
});

export default rootReducer;