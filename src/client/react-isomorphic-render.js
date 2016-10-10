import routes  from './routes'
import wrapper from './wrapper'
import thunk from 'redux-thunk'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import { Preload_started, Preload_finished, Preload_failed } from 'react-isomorphic-render/redux'

export default
{
  redux_middleware: ()=>[
      thunk,
    loadingBarMiddleware({
      promiseTypeSuffixes: [Preload_started, Preload_finished, Preload_failed],
    })
  ],
  // Redux reducer
  // (either an object or a function returning an object)
  reducer: () => require('./reducers'),

  // React-router routes
  // (either a `<Route/>` element or a `function({ store })` returning a `<Route/>` element)
  routes,

  // Wraps React page component with arbitrary elements (e.g. <Provider/>, etc; see an example below)
  wrapper,

  on_store_created({ reload_reducer })
  {
    // (for Webpack users only)
    //
    // client side hot module reload for Redux reducers
    // http://webpack.github.io/docs/hot-module-replacement.html#accept
    if (_development_ && module.hot) //eslint-disable-line no-undef
    {
      // this path must be equal to the path in the `require()` call in `create_store` above
      module.hot.accept('./reducers', reload_reducer)
    }
  },
  preload: {
    helpers: {
      fetchData: require('./utils/apiCall').redux
    },
  }
}