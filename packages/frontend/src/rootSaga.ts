import { all } from 'redux-saga/effects';
// import loginSaga from './containers/Login/saga';

export default function* rootSaga() {
  yield all([
    // loginSaga(),
  ]);
}
