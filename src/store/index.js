import { applyMiddleware, compose, createStore } from 'redux'

import actions from './actions'
import effects from './effects'
import reducers from './reducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default (preloadedState) => createStore(
  reducers,
  preloadedState,
  composeEnhancer(
    applyMiddleware(effects)
  )
)
