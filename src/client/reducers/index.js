import {combineReducers} from 'redux';
import userReducer from './usersReducer';
import authReducer from './authReduсer';

export default combineReducers({
   users: userReducer,
    auth: authReducer
});
