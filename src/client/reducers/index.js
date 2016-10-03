import { combineReducers } from 'redux'
import app from './app'
import { reducer as reduxAsyncConnect } from 'redux-connect'
export const rootReducer = combineReducers({
    reduxAsyncConnect,
    app
})
