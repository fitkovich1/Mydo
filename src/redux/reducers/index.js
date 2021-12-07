import { ActionTypes } from "../actions";

const initialState = {
    isShowMessage: false,
    isUserLoginLoading: false,
    authToken: localStorage.getItem("token") || "",
    message: "",
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOG_IN_USER: {
            return {
                ...state,
                isUserLoginLoading: true,
            };
        }
        case ActionTypes.LOG_IN_USER_SUCCESS: {
            return {
                ...state,
                authToken: action.authToken,
                message: action.successMessage,
                isUserLoginLoading: false,
            };
        }
        case ActionTypes.LOG_IN_USER_FAILURE: {
            return {
                ...state,
                isUserLoginLoading: false,
                message: action.error,
            };
        }
        case ActionTypes.SET_IS_SHOW_MESSAGE: {
            return {
                ...state,
                isShowMessage: action.isShowMessage,
            };
        }
        case ActionTypes.LOG_OUT: {
            return {
                ...state,
                authToken: "",
            };
        }
        default:
            return state;
    }
};
