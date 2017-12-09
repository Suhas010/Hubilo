import {combineReducers} from 'redux';
import questions from './reducer-users';
/**
 * combine all reducers here.   *** But we have used only one reducer here
 */
const allReducers = combineReducers({
    questions,
});

export default allReducers
