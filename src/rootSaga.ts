import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "./utils/history";
import counter from "./redux/reducers/home/reducer";

export const rootReducer = combineReducers({
  router: connectRouter(history),
  counter,
});

export type RootState = ReturnType<typeof rootReducer>;
