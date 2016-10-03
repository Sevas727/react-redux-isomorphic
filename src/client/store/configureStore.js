import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import { rootReducer } from '../reducers'

export default function configureStore(initialState) {
    const store = compose(
        applyMiddleware(createLogger()),
    )(createStore)(rootReducer, initialState)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').rootReducer
            store.replaceReducer(nextRootReducer)
        });
    }

    return store
}
