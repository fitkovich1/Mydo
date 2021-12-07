export const ActionTypes = {
    LOG_IN_USER: "LOG_IN_USER",
    LOG_IN_USER_SUCCESS: "LOG_IN_USER_SUCCESS",
    LOG_IN_USER_FAILURE: "LOG_IN_USER_FAILURE",
    SET_IS_SHOW_MESSAGE: "SET_IS_SHOW_MESSAGE",
    LOG_OUT: "LOG_OUT",
};

export const loginUser = (logInMutation, payload) => ({
    type: ActionTypes.LOG_IN_USER,
    logInMutation,
    payload,
});
export const loginUserSuccess = (authToken, successMessage) => ({
    type: ActionTypes.LOG_IN_USER_SUCCESS,
    authToken,
    successMessage,
});
export const loginUserFailure = (error) => ({
    type: ActionTypes.LOG_IN_USER_FAILURE,
    error,
});
export const setIsShowMessage = (isShowMessage) => ({
    type: ActionTypes.SET_IS_SHOW_MESSAGE,
    isShowMessage,
});
export const logOut = () => ({ type: ActionTypes.LOG_OUT });
