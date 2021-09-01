import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "./utils/history";
import rootStore from "./containers/Root/reducer";
import loginSlice from "./containers/Login/reducer";

const rootReducer = combineReducers({
  router: connectRouter(history),
  rootStore,
  loginSlice,
});

export default rootReducer;
