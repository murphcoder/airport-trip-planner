const userReducer = (state = {status: '', errors: [], loading: false}, action) => {
    switch(action.type) {
        case 'UPDATING_USERS':
            return {
                ...state,
                loading: true
            };
        case 'MODIFY_USER':
            return {
                ...state,
                status: action.status,
                loading: false
            };
        case 'USER_ERROR':
            return {
                ...state,
                errors: action.errors
            }
        default:
            return state;
    }
};

export default userReducer