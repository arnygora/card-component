import { combineReducers } from 'redux'
import userReducer from '../reducers/user';
import { pageReducer }from '../reducers/page';

export const rootReducer = combineReducers({
    user: userReducer,
    page: pageReducer,
});
