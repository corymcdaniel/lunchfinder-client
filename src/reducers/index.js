import { combineReducers } from 'redux';
import locations from './locationsReducer';
import location from './locationReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  locations,
  location,
  auth,
  ajaxCallsInProgress
});

export default rootReducer;