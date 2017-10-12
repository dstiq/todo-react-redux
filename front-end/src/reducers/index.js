import { combineReducers } from 'redux';
import operatingWithTodo from './todoReducer';
import operatingWithTab from './tabReducer';

const rootReducer = combineReducers({
    operatingWithTodo,
    operatingWithTab
});
export default rootReducer;


