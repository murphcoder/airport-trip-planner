export function loginUser(user, url) {
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
        fetch(`${url}/login`, configObj)
        .then(resp => resp.json())
        .then(info => {if (info.data.logged_in) {
            dispatch({type: 'LOGIN_USER', info})
        } else {
            dispatch({type: 'LOG_ERROR', info})
        }})
        .catch(error => console.log('api errors:', error))
    }
}