const initialState = {
    isShowMessage: false,
    isUserLoginLoading: false,
    authToken: '',
    message: ''
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN_USER': {
            return {
                ...state,
                isUserLoginLoading: true
            }
        }
        case "LOG_IN_USER_SUCCESS": {
            return {
                ...state,
                authToken: action.authToken,
                message: action.successMessage,
                isUserLoginLoading: false
            }
        }
        case "LOG_IN_USER_FAILURE": {
            return {
                ...state,
                isUserLoginLoading: false,
                message: action.error
            }
        }
        case "SET_IS_SHOW_MESSAGE": {
            return {
                ...state,
                isShowMessage: action.isShowMessage
            }
        }
        case "LOG_OUT": {
            return {
                ...state,
                authToken: ''
            }
        }
        default:
            return state;
    }
}



