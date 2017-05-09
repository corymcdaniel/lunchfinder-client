import { combineReducers } from 'redux';
import locations from './locationReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  locations,
  ajaxCallsInProgress
});

export default rootReducer;