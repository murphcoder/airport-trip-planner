export function getUserStatus(url) {
    return (dispatch) => {
        dispatch({ type: 'LOADING_USER_STATUS'});
        fetch(`${url}/logged_in`, {credentials: 'include'})
        .then(resp => resp.json())
        .then(info => {if (info.data.logged_in) {
            dispatch({type: 'LOGIN_USER', info})
        } else {
            dispatch({type: 'LOGOUT_USER'})
        }})
        .catch(error => console.log('api errors:', error))
    }
}