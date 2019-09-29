import { combineReducers } from 'redux';
import data from './dataReducer';
import settings from './settings';

const appReducer = combineReducers({
  data,
  settings
});

export default appReducer;
