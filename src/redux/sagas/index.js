import { put, takeEvery } from "redux-saga/effects";
import {
    ActionTypes,
    loginUserFailure,
    loginUserSuccess,
    setIsShowMessage,
} from "../actions";

function* logInUserWorker(action) {
    try {
        const res = yield action.logInMutation({ variables: action.payload });
        const authToken = res.data.logIn.access_token;
        yield put(loginUserSuccess(authToken, "user is logged in"));
        localStorage.setItem('token', authToken);
        yield put(setIsShowMessage(true));
    } catch (error) {
        yield put(loginUserFailure(error.message));
        yield put(setIsShowMessage(true));
        console.error(error);
    }
}

export function* logInUserWatcher() {
    yield takeEvery(ActionTypes.LOG_IN_USER, logInUserWorker);
}
