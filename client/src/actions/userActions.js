export function signupUser(user, url) {
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
        fetch(`${url}/users`, configObj)
        .then(resp => resp.json())
        .then(info => {if (info.status === 'created') {
            dispatch({type: 'LOGIN_USER', user: info.user})
        } else {
            dispatch({type: 'LOG_ERROR', errors: info.user.errors})
        }})
        .catch(error => console.log('api errors:', error))
    }
};

export function deleteUser(user, url) {
    return (dispatch) => {
        let configObj = {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: ''
        };
        dispatch({ type: "LOADING_USER_STATUS" });
        fetch(`${url}/user/${user.id}`, configObj)
        .then(resp => resp.json())
        .then(info => {if (info.status === 'deleted') {
            dispatch({type: 'LOGOUT_USER'})
        } else {
            dispatch({type: 'LOG_ERROR', errors: info.user.errors})
        }})
        .catch(error => console.log('api errors:', error))
    }
}