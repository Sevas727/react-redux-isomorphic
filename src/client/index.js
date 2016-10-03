import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { ReduxAsyncConnect } from 'redux-connect'
import configureStore from './store/configureStore'
import { routes } from './routes'
import './style.sass'

const store = configureStore(window.__data)

render((
    <Provider store={store} key='provider'>
        <Router render={(props) => <ReduxAsyncConnect {...props}/>} history={browserHistory} routes={routes}>
        </Router>
    </Provider>
), document.getElementById('root'))