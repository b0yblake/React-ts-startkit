import { call, put, debounce } from "redux-saga/effects";
import mainRequest from "../../request";
import { METHOD } from "../../request/constants";
import { STATUS_CODE } from "../../constants/common";
import { loginRequest, loginSuccess, loginFail } from "./reducer";

interface ILoginPayload {
  email: string;
  password: string;
}

const DEBOUNCE_MS = 500;

function* loginFlow<T extends ILoginPayload = ILoginPayload>({
  payload,
}: {
  payload: T;
}) {
  try {
    const response = yield call(
      mainRequest,
      "/auth/signin",
      payload,
      METHOD.post
    );

    if (response.status === STATUS_CODE.SUCCESS) {
      const { type } = loginSuccess;
      yield put({
        type,
        payload: response.data,
      });
      // yield put({ type: setSuccessMessages.type, payload: ['Done'] });
    } else {
      yield put({ type: loginFail.type });
    }
  } catch (error) {
    yield put({ type: loginFail.type, payload: error.response.data.message });
  }
}

function* loginWatcher() {
  yield debounce(DEBOUNCE_MS, loginRequest, loginFlow);
}

export default loginWatcher;
