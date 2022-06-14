import { combineReducers } from 'redux';
import user from './UserReducer';

const reducer = combineReducers({ user });

export default reducer;
