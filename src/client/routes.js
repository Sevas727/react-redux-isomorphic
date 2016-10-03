import React from 'react'
import { Route } from 'react-router'
import Main from './components/Main'
import App from './pages/App'
import Event from './pages/Event'

export const routes = (
        <div>
            <Route path='/' component={Main}>
                <Route path='/events' component={App}/>
                <Route path='/event:id' component={Event}/>
            </Route>
        </div>
    )