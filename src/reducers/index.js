import {animalsReducer } from './animalsReducer.js'
import {combineReducers} from 'redux';


export const rootReducer = combineReducers({
  animals: animalsReducer
})