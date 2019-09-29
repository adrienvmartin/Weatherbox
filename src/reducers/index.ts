import { combineReducers } from 'redux';
import data from './dataReducer';

const appReducer = combineReducers({
  data
});

export default appReducer;
