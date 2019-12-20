import { combineReducers } from 'redux';
import product from './product';
import alert from './alert';
import auth from './auth';

export default combineReducers({
    product,
    auth,
    alert
});