import { combineReducers } from 'redux';
import characters from './characters';

// Combine all seperate reducers here
const rootReducer = combineReducers({
  characters
});

export default rootReducer;
