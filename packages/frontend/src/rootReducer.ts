import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './utils/history';
import loginSlice from './containers/Login/reducer';

const rootReducer = combineReducers({
  router: connectRouter(history),
  loginSlice,
});

export default rootReducer;
