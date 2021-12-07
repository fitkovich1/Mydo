import { put, takeEvery } from "redux-saga/effects";
import { LOG_IN_USER, loginUserFailure, loginUserSuccess, setIsShowMessage } from "../actions";


function* logInUserWorker(action) {
    try {
        const res = yield action.logInMutation({ variables: action.payload });
        const authToken = res.data.logIn.access_token;
        yield put(loginUserSuccess(authToken, "user is logged in"));
        yield put(setIsShowMessage(true));
    } catch (error) {
        yield put(loginUserFailure(error.message));
        yield put(setIsShowMessage(true));
        console.error(error);
    }
}

export function* logInUserWatcher() {
    yield takeEvery(LOG_IN_USER, logInUserWorker);
}