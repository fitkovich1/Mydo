export const LOG_IN_USER = "LOG_IN_USER";
export const LOG_IN_USER_SUCCESS = "LOG_IN_USER_SUCCESS";
export const LOG_IN_USER_FAILURE = "LOG_IN_USER_FAILURE";
export const SET_IS_SHOW_MESSAGE = "SET_IS_SHOW_MESSAGE";
export const LOG_OUT = "LOG_OUT";

export const loginUser = ( logInMutation, payload ) => ({ type: LOG_IN_USER, logInMutation, payload });
export const loginUserSuccess = ( authToken, successMessage ) => ({ type: LOG_IN_USER_SUCCESS, authToken, successMessage });
export const loginUserFailure = ( error ) => ({ type: LOG_IN_USER_FAILURE, error });
export const setIsShowMessage = ( isShowMessage ) => ({ type: SET_IS_SHOW_MESSAGE, isShowMessage });
export const logOut = () => ({ type: LOG_OUT });