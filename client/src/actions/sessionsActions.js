export function getUserStatus(url) {
    return (dispatch) => {
        dispatch({ type: 'LOADING_USER_STATUS'});
        fetch(`${url}/logged_in`, {credentials: 'include'})
        .then(resp => resp.json())
        .then(info => {
            if (info.logged_in) {
            dispatch({type: 'LOGIN_USER', info})
        } else {
            dispatch({type: 'LOGOUT_USER'})
        }})
        .catch(error => console.log('api errors:', error))
    }
};

export function loginUser(user, url) {
    return (dispatch) => {
        let configObj = {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({user: user})
        };
        dispatch({ type: 'LOADING_USER_STATUS'});
        fetch(`${url}/login`, configObj)
        .then(resp => resp.json())
        .then(info => {if (info.logged_in) {
            dispatch({type: 'LOGIN_USER', user: info.user})
        } else {
            dispatch({type: 'LOG_ERROR', errors: info.user.errors})
        }})
        .catch(error => console.log('api errors:', error))
    }
};

export function logoutUser(url) {
    return (dispatch) => {
        let configObj = {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: ''
        };
        dispatch({ type: 'LOADING_USER_STATUS'});
        fetch(`${url}/logout`, configObj)
        .then(resp => resp.json())
        .then(info => {if (!info.logged_in) {
            dispatch({type: 'LOGOUT_USER'})
        } else {
            dispatch({type: 'LOG_ERROR', errors: info.user.errors})
        }})
        .catch(error => console.log('api errors:', error))
    }
}
