import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import saga from "./rootSaga";
import reduxRootReducer from "./rootReducer";
import history from "./utils/history";

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({ thunk: false }),
  sagaMiddleware,
  routerMiddleware(history),
];

const store = configureStore({
  middleware,
  reducer: reduxRootReducer,
});

sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
