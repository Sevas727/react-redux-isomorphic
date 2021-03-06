import {LOGIN_SUCCESS, LOGOUT_SUCCESS, ACCOUNT_SUCCESS} from '../constants/Security'

export default function (state = {}, action) {
    switch (action.type){
        case LOGIN_SUCCESS:
            return {...state, user: action.payload}
        case LOGOUT_SUCCESS:
            return {...state, user: null}
        case ACCOUNT_SUCCESS:
            return {...state, user: action.payload}
        default:
            return state
    }
}