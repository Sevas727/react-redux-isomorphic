import { createStore } from 'redux'
import { rootReducer } from '../../client/reducers'

export default function configureStore() {
    return createStore(rootReducer)
}
