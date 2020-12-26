export function signupUser(user, url) {
    return (dispatch) => {
        let configObj = {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        };
        dispatch({ type: 'LOADING_USER_STATUS'});
        fetch(`${url}/users`, configObj)
        .then(resp => resp.json())
        .then(info => {if (info.data.status === 'created') {
            dispatch({type: 'LOGIN_USER', info})
        } else {
            dispatch({type: 'LOG_ERROR', info})
        }})
        .catch(error => console.log('api errors:', error))
    }
}