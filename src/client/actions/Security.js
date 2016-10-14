import {LOGIN_SUCCESS, LOGIN_ERROR, ACCOUNT_SUCCESS, ACCOUNT_ERROR} from '../constants/Security'
import {fetchData} from '../utils/apiCall'
import {Auth} from '../utils/Auth'

export const login = (form) => async (dispatch) => {
    const {response, error} = await fetchData('/login_check',{method: 'POST', params: form})
    if(response){
        Auth.setToken(response.token)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: await dispatch(getAccount())
        })
    }
    if(error){
        dispatch({
            type: LOGIN_ERROR
        })
    }
}

export const getAccount = () => async (dispatch) => {
    if(!Auth.isAuthenticated()){
        return;
    }
    const {response, error} = await fetchData('/accounts/', {method: 'GET'})
    if(response){
        dispatch({
            type: ACCOUNT_SUCCESS,
            payload: response
        })
        return response
    }
    if(error){
        dispatch({
            type: ACCOUNT_ERROR
        })
    }
}