import { all } from 'redux-saga/effects';
import rootPageSaga from './containers/Root/saga';
import loginSaga from './containers/Login/saga';

export default function* rootSaga() {
  yield all([
    rootPageSaga(),
    loginSaga(),
  ]);
}
