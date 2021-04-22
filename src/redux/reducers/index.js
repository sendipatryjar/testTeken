import { combineReducers } from 'redux';
import LandingReducer from './../../actions/reducers';
import LoginReducer from './../../actions/reducers';


export default {
    landing: LandingReducer,
    loginAuth: LoginReducer,
}
