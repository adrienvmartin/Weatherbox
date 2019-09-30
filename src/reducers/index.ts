import { combineReducers } from 'redux';
import data from './data';
import settings from './settings';

const appReducer = combineReducers({
  data,
  settings
});

export default appReducer;
