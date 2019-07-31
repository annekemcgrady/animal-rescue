import { animalsReducer } from './animalsReducer.js';
import { errorReducer } from './errorReducer.js'
import { combineReducers } from 'redux';


export const rootReducer = combineReducers({
  animals: animalsReducer,
  error: errorReducer
})