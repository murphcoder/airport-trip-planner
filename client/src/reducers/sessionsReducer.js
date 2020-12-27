const sessionsReducer = (state = {loggedIn: false, user: {}, errors: [], loading: false}, action) => {
    switch(action.type) {
        case 'LOADING_USER_STATUS':
            return {
                ...state,
                loading: true
            };
        case 'LOGIN_USER':
            return {
                ...state,
                user: action.user,
                loggedIn: true,
                loading: false
            };
        case 'LOG_ERROR':
            return {
                ...state,
                errors: action.errors,
                loading: false
            };
        case 'LOGOUT_USER':
            return {
                user: {},
                errors: [],
                loggedIn: false,
                loading: false
            };
        default:
            return state;
    }
}

export default sessionsReducer;