import React from 'react'
import { Route } from 'react-router'
import Main from './Main'

export const routes = (
        <div>
            <Route path='/' component={Main}>
                <Route path='/events' getComponent={(location, callback) => {
                    require.ensure([], function (require) {
                        callback(null, require('./components/App').default);
                    });
                }}/>
                <Route path='/event:id' getComponent={(location, callback) => {
                    require.ensure([], function (require) {
                        callback(null, require('./components/Event').default);
                    });
                }}/>
            </Route>
        </div>
    )