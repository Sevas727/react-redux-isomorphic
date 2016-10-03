import http from 'http'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match } from 'react-router'
import { ReduxAsyncConnect, loadOnServer, reducer as reduxAsyncConnect } from 'redux-connect'
import { Provider } from 'react-redux'
import {routes} from '../../src/client/routes'
import configureStore from '../server/store/configureStore'
import createPage from './page'
import fetch from 'isomorphic-fetch'

global.__SERVER = true
const app = express();

(function initWebpack() {
    const webpack = require('webpack')
    const webpackConfig = require('../../webpack/common.config')
    const compiler = webpack(webpackConfig)

    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true, publicPath: webpackConfig.output.publicPath,
    }))

    app.use(require('webpack-hot-middleware')(compiler, {
        log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
    }))

    app.use(express.static(__dirname + '/'));
})()

app.get('*', (req, res) => {
    const store = configureStore()
    match({ routes, location: req.url }, (err, redirect, renderProps) => {
        loadOnServer({ ...renderProps, store }).then(() => {
            const html = renderToString(
                <Provider store={store} key='provider'>
                    <ReduxAsyncConnect {...renderProps} />
                </Provider>
            )
            res.send(createPage(html, store))
        })
    })
})

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, function onListen() {
    const address = server.address();
    console.log('Listening on: %j', address);
    console.log(' -> that probably means: http://localhost:%d', address.port);
});
