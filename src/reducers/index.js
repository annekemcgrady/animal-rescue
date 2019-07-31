import { animalsReducer } from './animalsReducer.js';
import { errorReducer } from './errorReducer.js';
import { isLoadingReducer } from './isLoadingReducer.js';
import { combineReducers } from 'redux';
import { donationsReducer } from './donationsReducer.js';


export const rootReducer = combineReducers({
  animals: animalsReducer,
  donations: donationsReducer,
  error: errorReducer,
  isLoading: isLoadingReducer
})