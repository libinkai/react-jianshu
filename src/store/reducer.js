import { combineReducers } from 'redux-immutable';
import HeaderReducer from '../common/header/store/reducer';

export default combineReducers({
    header: HeaderReducer
})